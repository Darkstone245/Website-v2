import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

// ---------------------------------------------------------------------------
// API
// ---------------------------------------------------------------------------
const API_BASE = "https://whg-wetterstation.de";  // change to e.g. "http://localhost:8080" if needed

interface SensorReading {
  temperature: number;
  humidity: number;
  pressure: number;
  received_at: string;
}

interface CurrentReading {
  temperature: number;
  humidity: number;
  pressure: number;
  received_at?: string;
  unix_timestamp?: number;
}

function useStations() {
  const [stations, setStations] = useState<Record<string, string>>({});
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/names`)
      .then((r) => r.json())
      .then((data: Record<string, string>) => setStations(data))
      .catch(() => setStations({ "0": "Schulgarten" }))
      .finally(() => setLoading(false));
  }, []);

  return { stations, loading };
}

function useHistoricalData(id: string | null) {
  const [data, setData]     = useState<SensorReading[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id === null) return;
    setLoading(true);
    fetch(`${API_BASE}/api/weather/${id}?hours=20`)
      .then((r) => r.json())
      .then((json: { data: SensorReading[] }) => setData(json.data ?? []))
      .catch(() => setData([]))
      .finally(() => setLoading(false));
  }, [id]);

  return { data, loading };
}

function useCurrentData(id: string | null) {
  const [current, setCurrent] = useState<CurrentReading | null>(null);

  useEffect(() => {
    if (id === null) return;

    const fetchCurrent = () => {
      fetch(`${API_BASE}/api/weather/current/${id}`)
        .then((r) => r.json())
        .then((json: CurrentReading) => setCurrent(json))
        .catch(() => {});
    };

    fetchCurrent();
    const interval = setInterval(fetchCurrent, 30_000);
    return () => clearInterval(interval);
  }, [id]);

  return current;
}

// ---------------------------------------------------------------------------
// Breakpoint hook
// ---------------------------------------------------------------------------
type BP = "mobile" | "tablet" | "desktop";

function getBP(w: number): BP {
  return w < 640 ? "mobile" : w < 1024 ? "tablet" : "desktop";
}

function useBreakpoint(): BP {
  const [bp, setBp] = useState<BP>(() => getBP(typeof window !== "undefined" ? window.innerWidth : 1024));
  useEffect(() => {
    const update = () => setBp(getBP(window.innerWidth));
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}

// Cloud world-space position per breakpoint
const CLOUD_POS: Record<BP, [number, number, number]> = {
  mobile:  [0,    3.6, 0],   // high enough to clear HTML content
  tablet:  [2.0,  1.0, 0],
  desktop: [3.0,  1.2, 0],
};

// ---------------------------------------------------------------------------
// Full-screen Three.js background + cloud
// ---------------------------------------------------------------------------
function BackgroundScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ nx: 0, ny: 0 });
  const bpRef    = useRef<BP>(getBP(typeof window !== "undefined" ? window.innerWidth : 1024));

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // --- renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0d1520, 1);
    el.appendChild(renderer.domElement);

    // --- orthographic camera ---
    // frustumH is the half-height in world units; width scales with aspect ratio
    const frustumH = 5;
    const getAspect = () => window.innerWidth / window.innerHeight;
    const makeOrtho = () => {
      const a = getAspect();
      return new THREE.OrthographicCamera(
        -frustumH * a, frustumH * a,
         frustumH,    -frustumH,
        0.1, 100
      );
    };
    const scene  = new THREE.Scene();
    const camera = makeOrtho();
    camera.position.set(0, 0, 10);

    // --- background plane — oversized, always covers ortho frustum ---
    const planeMat = new THREE.MeshStandardMaterial({ color: 0x14243a, roughness: 1, metalness: 0 });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), planeMat);
    plane.position.z = -2.25;
    scene.add(plane);

    // --- ambient base (dim blue) ---
    scene.add(new THREE.AmbientLight(0x1a2d50, 1.0));

    // --- cool fill so cloud shadow side isn't pitch-black ---
    const fill = new THREE.DirectionalLight(0x6080c0, 0.5);
    fill.position.set(-4, 2, 6);
    scene.add(fill);

    // --- yellow hemi: sky=warm gold, ground=deep navy, follows mouse ---
    // HemisphereLight shades by world-Y normal; we tilt it by rotating its target
    // Instead, we use a SpotLight to get a true mouse-centered cone on the plane
    const spot = new THREE.PointLight(0xfc9601, 5, 0, 3);//new THREE.SpotLight(0xffdd44, 1000, 60, Math.PI / 5, 0.6, 3);
    spot.position.set(0, 0, 2);          // starts centered
    //spot.target.position.set(0, 0, -3);  // aims at the plane
    scene.add(spot);
    //scene.add(spot.target);

    // Separate soft hemi for the cloud (static warm sky tint)
    const hemi = new THREE.HemisphereLight(0xffe8a0, 0x0a1020, 0.8);
    scene.add(hemi);

    // --- cloud ---
    // --- cloud model ---
    const loader = new GLTFLoader();
    let cloud: THREE.Group | null = null;

    loader.load(
      "/models/cloud1.gltf",
      (gltf) => {
        cloud = gltf.scene;

        cloud.scale.setScalar(0.3);

        const cloudMat = new THREE.MeshToonMaterial({
          color: 0xffffff,
          depthTest: false,
          depthWrite: false,
        });

        cloud.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.material = cloudMat;
          }
        });

        cloud.renderOrder = 999;

        const [cx, cy, cz] = CLOUD_POS[bpRef.current];
        cloud.position.set(cx, cy, cz);

        scene.add(cloud);
      },
      (xhr) => {
        if (xhr.lengthComputable) {
          console.log(`${((xhr.loaded / xhr.total) * 100).toFixed(0)}% loaded`);
        }
      },
      (err) => {
        console.error(err);
      }
    );

    // --- mouse / touch ---
    const onMouse = (e: MouseEvent) => {
      mouseRef.current.nx = (e.clientX / window.innerWidth)  * 2 - 1;
      mouseRef.current.ny = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      mouseRef.current.nx = (t.clientX / window.innerWidth)  * 2 - 1;
      mouseRef.current.ny = -((t.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch, { passive: true });

    // --- resize ---
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const a = w / h;
      camera.left   = -frustumH * a;
      camera.right  =  frustumH * a;
      camera.top    =  frustumH;
      camera.bottom = -frustumH;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      const newBp = getBP(w);
      bpRef.current = newBp;
      if (cloud) {
        const [px, py, pz] = CLOUD_POS[newBp];
        cloud.position.set(px, py, pz);
      }
    };
    window.addEventListener("resize", onResize);

    // --- cloud Parameter ---
    const speed = 0.005;
    const moveRadius = 0.05;
    const maxRotation = 25;
    const rotationSpeed = 0.00005;

    // --- animation ---
    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const { nx, ny } = mouseRef.current;
      // With ortho camera, world coords = NDC × frustum half-extents — exact, no raycasting needed
      const worldX = nx * frustumH * getAspect();
      const worldY = ny * frustumH;
      // Move spot above the cursor; target stays on the plane below
      spot.position.set(worldX, worldY, -1);
      //spot.target.position.set(worldX, worldY, -3);
      //spot.target.updateMatrixWorld();

      if(cloud){
        const offsetX = Math.sin(raf*speed) * moveRadius;
        const offsetY = Math.cos(raf*speed) * moveRadius;
        const offsetZ = Math.sin(raf*speed) * moveRadius;

        const [cx, cy, cz] = CLOUD_POS[getBP(window.innerWidth)]

        cloud.position.set(cx+offsetX,cy+offsetY,cz+offsetZ);
        
        cloud.rotation.x += (Math.random() - 0.5) * maxRotation * rotationSpeed;
        cloud.rotation.y += (Math.random() - 0.5) * maxRotation * rotationSpeed;
        cloud.rotation.z += (Math.random() - 0.5) * maxRotation * rotationSpeed;

        cloud.rotation.x = THREE.MathUtils.clamp(cloud.rotation.x, -Math.PI / 6, Math.PI / 6);
        cloud.rotation.y = THREE.MathUtils.clamp(cloud.rotation.y, -Math.PI / 6, Math.PI / 6);
        cloud.rotation.z = THREE.MathUtils.clamp(cloud.rotation.z, -Math.PI / 6, Math.PI / 6);
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("resize", onResize);

      if (cloud) {
        scene.remove(cloud);
      }

      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0" />;
}

// ---------------------------------------------------------------------------
// Chart.js metric card
// ---------------------------------------------------------------------------
interface MetricCardProps {
  title: string;
  current: string;
  unit: string;
  series: { label: string; value: number }[];
  color: string;
  suggestedMinValue: number;
  suggestedMaxValue: number;
}

function MetricCard({ title, current, unit, series, color , suggestedMinValue, suggestedMaxValue}: MetricCardProps) {
  const chartData = {
    labels: series.map((d) => d.label),
    datasets: [
      {
        data: series.map((d) => d.value.toFixed(2)),
        borderColor: color,
        borderWidth: 1.5,
        backgroundColor: `${color}28`,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 10,
      },
    ],
  };
  const opts = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 } as const,
    scales: { x: { display: true}, y: { display: true , suggestedMin:suggestedMinValue, suggestedMax:suggestedMaxValue} },
    plugins: {
      legend: { display: false , labels: {color: "white"}},
      tooltip: {
        backgroundColor: "#0f172a",
        titleColor: "#94a3b8",
        bodyColor: "#f3f4f6",
        callbacks: { label: (c: { parsed: { y: number } }) => `${c.parsed.y}${unit}` },
      },
    },
  };

  return (
    <div className="bg-[#1a2640]/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 flex flex-col gap-2 flex-1 min-w-0 border border-white/5">
      <h3 className="text-white/90 font-semibold text-sm tracking-wide">{title}</h3>
      <p className="text-white/40 text-xs">
        Aktuell:{" "}
        <span className="text-white/80 font-semibold">{current}{unit}</span>
      </p>
      <div className="h-20 sm:h-24 w-full mt-1">
        <Line data={chartData} options={opts} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------
export default function App() {
  const bp = useBreakpoint();

  // --- stations ---
  const { stations, loading: stationsLoading } = useStations();
  const stationIds   = Object.keys(stations);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Pick first station once names are loaded
  useEffect(() => {
    if (stationIds.length > 0 && selectedId === null) {
      setSelectedId(stationIds[0]);
    }
  }, [stationIds, selectedId]);

  // --- data ---
  const { data: history } = useHistoricalData(selectedId);
  const current           = useCurrentData(selectedId);

  // Derive chart series from historical data
  const tempSeries     = history.map((d) => ({ label: new Time(d.unix).toLocaleTimeString("de-DE"), value: d.temperature }));
  const humiditySeries = history.map((d) => ({ label: new Time(ds.unix).toLocaleTimeString("de-DE"), value: d.humidity }));
  const pressureSeries = history.map((d) => ({ label: new Time(d.unix).toLocaleTimeString("de-DE"), value: d.pressure }));

  // Latest values: prefer /current result, fall back to last history item
  const latest = current ?? (history.length ? {
    temperature: history[history.length - 1].temperature,
    humidity:    history[history.length - 1].humidity,
    pressure:    history[history.length - 1].pressure,
  } : null);

  // Derive last-update string from /current response
  const lastUpdate = (() => {
    if (!current) return "—";
    if (current.received_at) {
      // "2026-06-28 08:20:06" → locale date/time
      const d = new Date(current.received_at.replace(" ", "T"));
      return `${d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" })}, ${d.toLocaleTimeString("de-DE")}`;
    }
    if (current.unix_timestamp) {
      const d = new Date(current.unix_timestamp * 1000);
      return `${d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" })}, ${d.toLocaleTimeString("de-DE")}`;
    }
    return "—";
  })();

  return (
    <>
      <BackgroundScene />

      <div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 gap-6 sm:gap-8"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Station selector */}
        <select
          value={selectedId ?? ""}
          onChange={(e) => setSelectedId(e.target.value)}
          disabled={stationsLoading}
          className="bg-white/10 text-white/70 text-sm px-5 py-1.5 rounded-full border border-white/15 outline-none cursor-pointer backdrop-blur-sm disabled:opacity-40"
        >
          {stationsLoading && <option value="">Laden…</option>}
          {stationIds.map((id) => (
            <option key={id} value={id} style={{ background: "#1a2640" }}>
              {stations[id]}
            </option>
          ))}
        </select>

        {/* ── Mobile ── */}
        {bp === "mobile" && (
          <div className="flex flex-col items-center gap-5 w-full max-w-sm">
            {/* Reserve vertical space for the 3D cloud sitting at y=3.6 */}
            <div className="h-36" />
            <div className="bg-[#1a2640]/80 backdrop-blur-sm rounded-2xl px-6 py-5 text-white border border-white/5 w-full">
              <div className="flex justify-around items-center">
                <div className="text-center">
                  <p className="text-white/40 text-xs mb-1">Sonnenaufgang</p>
                  <p className="text-xl font-bold tracking-widest">05:19</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <p className="text-white/40 text-xs mb-1">Sonnenuntergang</p>
                  <p className="text-xl font-bold tracking-widest">21:53</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-white text-3xl font-bold tracking-tight">Wetterstation</h1>
              <p className="text-white/40 text-xs mt-1">letztes Update:</p>
              <p className="text-white/70 text-sm font-semibold">{lastUpdate}</p>
            </div>
          </div>
        )}

        {/* ── Tablet ── */}
        {bp === "tablet" && (
          <div className="flex flex-row items-center gap-6 w-full max-w-2xl">
            <div className="bg-[#1a2640]/80 backdrop-blur-sm rounded-2xl px-5 py-5 text-white text-center border border-white/5 shrink-0">
              <p className="text-white/40 text-xs mb-1">Sonnenaufgang</p>
              <p className="text-xl font-bold tracking-widest mb-3">05:19</p>
              <p className="text-white/40 text-xs mb-1">Sonnenuntergang</p>
              <p className="text-xl font-bold tracking-widest">21:53</p>
            </div>
            <div className="flex items-center gap-4 flex-1">
              <div>
                <h1 className="text-white text-3xl font-bold tracking-tight">Wetterstation</h1>
                <p className="text-white/40 text-xs mt-1">letztes Update:</p>
                <p className="text-white/70 text-sm font-semibold">{lastUpdate}</p>
              </div>
              {/* Spacer where 3D cloud sits at x=2.0 */}
              <div className="w-32 h-24 shrink-0" />
            </div>
          </div>
        )}

        {/* ── Desktop ── */}
        {bp === "desktop" && (
          <div className="flex flex-row items-center gap-8 w-full max-w-4xl">
            <div className="bg-[#1a2640]/80 backdrop-blur-sm rounded-2xl px-7 py-6 text-white text-center border border-white/5 shrink-0">
              <p className="text-white/40 text-xs mb-1">Sonnenaufgang</p>
              <p className="text-2xl font-bold tracking-widest mb-4">05:19</p>
              <p className="text-white/40 text-xs mb-1">Sonnenuntergang</p>
              <p className="text-2xl font-bold tracking-widest">21:53</p>
            </div>
            <div className="flex items-center gap-6 flex-1 pl-2">
              <div>
                <h1 className="text-white text-5xl font-bold tracking-tight leading-tight">
                  Wetterstation
                </h1>
                <p className="text-white/40 text-sm mt-1">letztes Update:</p>
                <p className="text-white/70 font-semibold">{lastUpdate}</p>
              </div>
              {/* Spacer where 3D cloud sits at x=3.0 */}
              <div className="w-44 h-28 shrink-0" />
            </div>
          </div>
        )}

        {/* Metric cards */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full max-w-sm sm:max-w-2xl lg:max-w-4xl">
          <MetricCard
            title="Temperatur"
            current={latest ? latest.temperature.toFixed(2) : "—"}
            unit="°C"
            series={tempSeries}
            color="#f59e0b"
            suggestedMinValue={0}
            suggestedMaxValue={30}
          />
          <MetricCard
            title="Luftdruck"
            current={latest ? String(latest.pressure) : "—"}
            unit=" hPa"
            series={pressureSeries}
            color="#60a5fa"
            suggestedMinValue={950}
            suggestedMaxValue={1050}
          />
          <MetricCard
            title="Luftfeuchtigkeit"
            current={latest ? latest.humidity.toFixed(2) : "—"}
            unit="%"
            series={humiditySeries}
            color="#34d399"
            suggestedMinValue={80}
            suggestedMaxValue={40}
          />
        </div>
      </div>
    </>
  );
}
