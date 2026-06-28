import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
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
const API_BASE = "";  // change to e.g. "http://localhost:8080" if needed

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
    fetch(`${API_BASE}/data/${id}`)
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
      fetch(`${API_BASE}/current/${id}`)
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
    plane.position.z = -3;
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
    const spot = new THREE.SpotLight(0xffdd44, 80, 60, Math.PI / 5, 0.6, 1.5);
    spot.position.set(0, 0, 8);          // starts centered
    spot.target.position.set(0, 0, -3);  // aims at the plane
    scene.add(spot);
    scene.add(spot.target);

    // Separate soft hemi for the cloud (static warm sky tint)
    const hemi = new THREE.HemisphereLight(0xffe8a0, 0x0a1020, 0.8);
    scene.add(hemi);

    // --- cloud ---
    const cloudMat = new THREE.MeshStandardMaterial({ color: 0xf2f5ff, roughness: 0.55, metalness: 0 });
    const cloud    = new THREE.Group();
    const blobs: [number, number, number, number][] = [
      [0,     0,     0,    0.65],
      [-0.65,-0.07,  0.10, 0.53],
      [0.65, -0.03,  0.06, 0.55],
      [-0.26, 0.33,  0,    0.44],
      [0.33,  0.30,  0.03, 0.42],
      [-0.97,-0.20,  0,    0.36],
      [1.01, -0.20,  0,    0.34],
      [0,    -0.33,  0.16, 0.40],
    ];
    blobs.forEach(([x, y, z, r]) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(r, 28, 28), cloudMat);
      m.position.set(x, y, z);
      cloud.add(m);
    });
    const [cx, cy, cz] = CLOUD_POS[bpRef.current];
    cloud.position.set(cx, cy, cz);
    scene.add(cloud);

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
      const [px, py, pz] = CLOUD_POS[newBp];
      cloud.position.set(px, py, pz);
    };
    window.addEventListener("resize", onResize);

    // --- animation ---
    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const { nx, ny } = mouseRef.current;
      // With ortho camera, world coords = NDC × frustum half-extents — exact, no raycasting needed
      const worldX = nx * frustumH * getAspect();
      const worldY = ny * frustumH;
      // Move spot above the cursor; target stays on the plane below
      spot.position.set(worldX, worldY, 8);
      spot.target.position.set(worldX, worldY, -3);
      spot.target.updateMatrixWorld();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("resize", onResize);
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
}

function MetricCard({ title, current, unit, series, color }: MetricCardProps) {
  const chartData = {
    labels: series.map((d) => d.label),
    datasets: [
      {
        data: series.map((d) => d.value),
        borderColor: color,
        borderWidth: 1.5,
        backgroundColor: `${color}28`,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
      },
    ],
  };
  const opts = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 } as const,
    scales: { x: { display: false }, y: { display: false } },
    plugins: {
      legend: { display: false },
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
  const tempSeries     = history.map((d) => ({ label: d.received_at.slice(11, 16), value: d.temperature }));
  const humiditySeries = history.map((d) => ({ label: d.received_at.slice(11, 16), value: d.humidity }));
  const pressureSeries = history.map((d) => ({ label: d.received_at.slice(11, 16), value: d.pressure }));

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
          />
          <MetricCard
            title="Luftdruck"
            current={latest ? String(latest.pressure) : "—"}
            unit=" hPa"
            series={pressureSeries}
            color="#60a5fa"
          />
          <MetricCard
            title="Luftfeuchtigkeit"
            current={latest ? latest.humidity.toFixed(2) : "—"}
            unit="%"
            series={humiditySeries}
            color="#34d399"
          />
        </div>
      </div>
    </>
  );
}
