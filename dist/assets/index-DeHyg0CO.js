var kS=Object.defineProperty;var BS=(n,e,t)=>e in n?kS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var dt=(n,e,t)=>BS(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var hd={exports:{}},Ra={},pd={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function zS(){if(u_)return _t;u_=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function m(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function x(k,Z,De){this.props=k,this.context=Z,this.refs=E,this.updater=De||v}x.prototype.isReactComponent={},x.prototype.setState=function(k,Z){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,Z,"setState")},x.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function S(){}S.prototype=x.prototype;function A(k,Z,De){this.props=k,this.context=Z,this.refs=E,this.updater=De||v}var D=A.prototype=new S;D.constructor=A,M(D,x.prototype),D.isPureReactComponent=!0;var R=Array.isArray,I=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function w(k,Z,De){var Ne,Pe={},re=null,xe=null;if(Z!=null)for(Ne in Z.ref!==void 0&&(xe=Z.ref),Z.key!==void 0&&(re=""+Z.key),Z)I.call(Z,Ne)&&!F.hasOwnProperty(Ne)&&(Pe[Ne]=Z[Ne]);var pe=arguments.length-2;if(pe===1)Pe.children=De;else if(1<pe){for(var Fe=Array(pe),Ze=0;Ze<pe;Ze++)Fe[Ze]=arguments[Ze+2];Pe.children=Fe}if(k&&k.defaultProps)for(Ne in pe=k.defaultProps,pe)Pe[Ne]===void 0&&(Pe[Ne]=pe[Ne]);return{$$typeof:n,type:k,key:re,ref:xe,props:Pe,_owner:L.current}}function N(k,Z){return{$$typeof:n,type:k.type,key:Z,ref:k.ref,props:k.props,_owner:k._owner}}function z(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function O(k){var Z={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(De){return Z[De]})}var j=/\/+/g;function ie(k,Z){return typeof k=="object"&&k!==null&&k.key!=null?O(""+k.key):Z.toString(36)}function ce(k,Z,De,Ne,Pe){var re=typeof k;(re==="undefined"||re==="boolean")&&(k=null);var xe=!1;if(k===null)xe=!0;else switch(re){case"string":case"number":xe=!0;break;case"object":switch(k.$$typeof){case n:case e:xe=!0}}if(xe)return xe=k,Pe=Pe(xe),k=Ne===""?"."+ie(xe,0):Ne,R(Pe)?(De="",k!=null&&(De=k.replace(j,"$&/")+"/"),ce(Pe,Z,De,"",function(Ze){return Ze})):Pe!=null&&(z(Pe)&&(Pe=N(Pe,De+(!Pe.key||xe&&xe.key===Pe.key?"":(""+Pe.key).replace(j,"$&/")+"/")+k)),Z.push(Pe)),1;if(xe=0,Ne=Ne===""?".":Ne+":",R(k))for(var pe=0;pe<k.length;pe++){re=k[pe];var Fe=Ne+ie(re,pe);xe+=ce(re,Z,De,Fe,Pe)}else if(Fe=m(k),typeof Fe=="function")for(k=Fe.call(k),pe=0;!(re=k.next()).done;)re=re.value,Fe=Ne+ie(re,pe++),xe+=ce(re,Z,De,Fe,Pe);else if(re==="object")throw Z=String(k),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return xe}function B(k,Z,De){if(k==null)return k;var Ne=[],Pe=0;return ce(k,Ne,"","",function(re){return Z.call(De,re,Pe++)}),Ne}function q(k){if(k._status===-1){var Z=k._result;Z=Z(),Z.then(function(De){(k._status===0||k._status===-1)&&(k._status=1,k._result=De)},function(De){(k._status===0||k._status===-1)&&(k._status=2,k._result=De)}),k._status===-1&&(k._status=0,k._result=Z)}if(k._status===1)return k._result.default;throw k._result}var X={current:null},$={transition:null},le={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:$,ReactCurrentOwner:L};function se(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:B,forEach:function(k,Z,De){B(k,function(){Z.apply(this,arguments)},De)},count:function(k){var Z=0;return B(k,function(){Z++}),Z},toArray:function(k){return B(k,function(Z){return Z})||[]},only:function(k){if(!z(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},_t.Component=x,_t.Fragment=t,_t.Profiler=s,_t.PureComponent=A,_t.StrictMode=i,_t.Suspense=f,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,_t.act=se,_t.cloneElement=function(k,Z,De){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Ne=M({},k.props),Pe=k.key,re=k.ref,xe=k._owner;if(Z!=null){if(Z.ref!==void 0&&(re=Z.ref,xe=L.current),Z.key!==void 0&&(Pe=""+Z.key),k.type&&k.type.defaultProps)var pe=k.type.defaultProps;for(Fe in Z)I.call(Z,Fe)&&!F.hasOwnProperty(Fe)&&(Ne[Fe]=Z[Fe]===void 0&&pe!==void 0?pe[Fe]:Z[Fe])}var Fe=arguments.length-2;if(Fe===1)Ne.children=De;else if(1<Fe){pe=Array(Fe);for(var Ze=0;Ze<Fe;Ze++)pe[Ze]=arguments[Ze+2];Ne.children=pe}return{$$typeof:n,type:k.type,key:Pe,ref:re,props:Ne,_owner:xe}},_t.createContext=function(k){return k={$$typeof:l,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},_t.createElement=w,_t.createFactory=function(k){var Z=w.bind(null,k);return Z.type=k,Z},_t.createRef=function(){return{current:null}},_t.forwardRef=function(k){return{$$typeof:u,render:k}},_t.isValidElement=z,_t.lazy=function(k){return{$$typeof:p,_payload:{_status:-1,_result:k},_init:q}},_t.memo=function(k,Z){return{$$typeof:d,type:k,compare:Z===void 0?null:Z}},_t.startTransition=function(k){var Z=$.transition;$.transition={};try{k()}finally{$.transition=Z}},_t.unstable_act=se,_t.useCallback=function(k,Z){return X.current.useCallback(k,Z)},_t.useContext=function(k){return X.current.useContext(k)},_t.useDebugValue=function(){},_t.useDeferredValue=function(k){return X.current.useDeferredValue(k)},_t.useEffect=function(k,Z){return X.current.useEffect(k,Z)},_t.useId=function(){return X.current.useId()},_t.useImperativeHandle=function(k,Z,De){return X.current.useImperativeHandle(k,Z,De)},_t.useInsertionEffect=function(k,Z){return X.current.useInsertionEffect(k,Z)},_t.useLayoutEffect=function(k,Z){return X.current.useLayoutEffect(k,Z)},_t.useMemo=function(k,Z){return X.current.useMemo(k,Z)},_t.useReducer=function(k,Z,De){return X.current.useReducer(k,Z,De)},_t.useRef=function(k){return X.current.useRef(k)},_t.useState=function(k){return X.current.useState(k)},_t.useSyncExternalStore=function(k,Z,De){return X.current.useSyncExternalStore(k,Z,De)},_t.useTransition=function(){return X.current.useTransition()},_t.version="18.3.1",_t}var f_;function hp(){return f_||(f_=1,pd.exports=zS()),pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function VS(){if(d_)return Ra;d_=1;var n=hp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(u,f,d){var p,_={},m=null,v=null;d!==void 0&&(m=""+d),f.key!==void 0&&(m=""+f.key),f.ref!==void 0&&(v=f.ref);for(p in f)i.call(f,p)&&!a.hasOwnProperty(p)&&(_[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)_[p]===void 0&&(_[p]=f[p]);return{$$typeof:e,type:u,key:m,ref:v,props:_,_owner:s.current}}return Ra.Fragment=t,Ra.jsx=l,Ra.jsxs=l,Ra}var h_;function HS(){return h_||(h_=1,hd.exports=VS()),hd.exports}var qe=HS(),mc={},md={exports:{}},Yn={},gd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function GS(){return p_||(p_=1,(function(n){function e($,le){var se=$.length;$.push(le);e:for(;0<se;){var k=se-1>>>1,Z=$[k];if(0<s(Z,le))$[k]=le,$[se]=Z,se=k;else break e}}function t($){return $.length===0?null:$[0]}function i($){if($.length===0)return null;var le=$[0],se=$.pop();if(se!==le){$[0]=se;e:for(var k=0,Z=$.length,De=Z>>>1;k<De;){var Ne=2*(k+1)-1,Pe=$[Ne],re=Ne+1,xe=$[re];if(0>s(Pe,se))re<Z&&0>s(xe,Pe)?($[k]=xe,$[re]=se,k=re):($[k]=Pe,$[Ne]=se,k=Ne);else if(re<Z&&0>s(xe,se))$[k]=xe,$[re]=se,k=re;else break e}}return le}function s($,le){var se=$.sortIndex-le.sortIndex;return se!==0?se:$.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();n.unstable_now=function(){return l.now()-u}}var f=[],d=[],p=1,_=null,m=3,v=!1,M=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D($){for(var le=t(d);le!==null;){if(le.callback===null)i(d);else if(le.startTime<=$)i(d),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(d)}}function R($){if(E=!1,D($),!M)if(t(f)!==null)M=!0,q(I);else{var le=t(d);le!==null&&X(R,le.startTime-$)}}function I($,le){M=!1,E&&(E=!1,S(w),w=-1),v=!0;var se=m;try{for(D(le),_=t(f);_!==null&&(!(_.expirationTime>le)||$&&!O());){var k=_.callback;if(typeof k=="function"){_.callback=null,m=_.priorityLevel;var Z=k(_.expirationTime<=le);le=n.unstable_now(),typeof Z=="function"?_.callback=Z:_===t(f)&&i(f),D(le)}else i(f);_=t(f)}if(_!==null)var De=!0;else{var Ne=t(d);Ne!==null&&X(R,Ne.startTime-le),De=!1}return De}finally{_=null,m=se,v=!1}}var L=!1,F=null,w=-1,N=5,z=-1;function O(){return!(n.unstable_now()-z<N)}function j(){if(F!==null){var $=n.unstable_now();z=$;var le=!0;try{le=F(!0,$)}finally{le?ie():(L=!1,F=null)}}else L=!1}var ie;if(typeof A=="function")ie=function(){A(j)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,B=ce.port2;ce.port1.onmessage=j,ie=function(){B.postMessage(null)}}else ie=function(){x(j,0)};function q($){F=$,L||(L=!0,ie())}function X($,le){w=x(function(){$(n.unstable_now())},le)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function($){$.callback=null},n.unstable_continueExecution=function(){M||v||(M=!0,q(I))},n.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<$?Math.floor(1e3/$):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function($){switch(m){case 1:case 2:case 3:var le=3;break;default:le=m}var se=m;m=le;try{return $()}finally{m=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function($,le){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var se=m;m=$;try{return le()}finally{m=se}},n.unstable_scheduleCallback=function($,le,se){var k=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?k+se:k):se=k,$){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=se+Z,$={id:p++,callback:le,priorityLevel:$,startTime:se,expirationTime:Z,sortIndex:-1},se>k?($.sortIndex=se,e(d,$),t(f)===null&&$===t(d)&&(E?(S(w),w=-1):E=!0,X(R,se-k))):($.sortIndex=Z,e(f,$),M||v||(M=!0,q(I))),$},n.unstable_shouldYield=O,n.unstable_wrapCallback=function($){var le=m;return function(){var se=m;m=le;try{return $.apply(this,arguments)}finally{m=se}}}})(_d)),_d}var m_;function WS(){return m_||(m_=1,gd.exports=GS()),gd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function XS(){if(g_)return Yn;g_=1;var n=hp(),e=WS();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,c=1;c<arguments.length;c++)o+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(r,o){l(r,o),l(r+"Capture",o)}function l(r,o){for(s[r]=o,r=0;r<o.length;r++)i.add(o[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function m(r){return f.call(_,r)?!0:f.call(p,r)?!1:d.test(r)?_[r]=!0:(p[r]=!0,!1)}function v(r,o,c,h){if(c!==null&&c.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:c!==null?!c.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function M(r,o,c,h){if(o===null||typeof o>"u"||v(r,o,c,h))return!0;if(h)return!1;if(c!==null)switch(c.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function E(r,o,c,h,g,y,T){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=c,this.propertyName=r,this.type=o,this.sanitizeURL=y,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){x[r]=new E(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];x[o]=new E(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){x[r]=new E(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){x[r]=new E(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){x[r]=new E(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){x[r]=new E(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){x[r]=new E(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){x[r]=new E(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){x[r]=new E(r,5,!1,r.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function A(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(S,A);x[o]=new E(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(S,A);x[o]=new E(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(S,A);x[o]=new E(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){x[r]=new E(r,1,!1,r.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){x[r]=new E(r,1,!1,r.toLowerCase(),null,!0,!0)});function D(r,o,c,h){var g=x.hasOwnProperty(o)?x[o]:null;(g!==null?g.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(M(o,c,g,h)&&(c=null),h||g===null?m(o)&&(c===null?r.removeAttribute(o):r.setAttribute(o,""+c)):g.mustUseProperty?r[g.propertyName]=c===null?g.type===3?!1:"":c:(o=g.attributeName,h=g.attributeNamespace,c===null?r.removeAttribute(o):(g=g.type,c=g===3||g===4&&c===!0?"":""+c,h?r.setAttributeNS(h,o,c):r.setAttribute(o,c))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),O=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),$=Symbol.iterator;function le(r){return r===null||typeof r!="object"?null:(r=$&&r[$]||r["@@iterator"],typeof r=="function"?r:null)}var se=Object.assign,k;function Z(r){if(k===void 0)try{throw Error()}catch(c){var o=c.stack.trim().match(/\n( *(at )?)/);k=o&&o[1]||""}return`
`+k+r}var De=!1;function Ne(r,o){if(!r||De)return"";De=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(ae){var h=ae}Reflect.construct(r,[],o)}else{try{o.call()}catch(ae){h=ae}r.call(o.prototype)}else{try{throw Error()}catch(ae){h=ae}r()}}catch(ae){if(ae&&h&&typeof ae.stack=="string"){for(var g=ae.stack.split(`
`),y=h.stack.split(`
`),T=g.length-1,U=y.length-1;1<=T&&0<=U&&g[T]!==y[U];)U--;for(;1<=T&&0<=U;T--,U--)if(g[T]!==y[U]){if(T!==1||U!==1)do if(T--,U--,0>U||g[T]!==y[U]){var V=`
`+g[T].replace(" at new "," at ");return r.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",r.displayName)),V}while(1<=T&&0<=U);break}}}finally{De=!1,Error.prepareStackTrace=c}return(r=r?r.displayName||r.name:"")?Z(r):""}function Pe(r){switch(r.tag){case 5:return Z(r.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return r=Ne(r.type,!1),r;case 11:return r=Ne(r.type.render,!1),r;case 1:return r=Ne(r.type,!0),r;default:return""}}function re(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case F:return"Fragment";case L:return"Portal";case N:return"Profiler";case w:return"StrictMode";case ie:return"Suspense";case ce:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case z:return(r._context.displayName||"Context")+".Provider";case j:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case B:return o=r.displayName||null,o!==null?o:re(r.type)||"Memo";case q:o=r._payload,r=r._init;try{return re(r(o))}catch{}}return null}function xe(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(o);case 8:return o===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function pe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Fe(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Ze(r){var o=Fe(r)?"checked":"value",c=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),h=""+r[o];if(!r.hasOwnProperty(o)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var g=c.get,y=c.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return g.call(this)},set:function(T){h=""+T,y.call(this,T)}}),Object.defineProperty(r,o,{enumerable:c.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function Qe(r){r._valueTracker||(r._valueTracker=Ze(r))}function kt(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var c=o.getValue(),h="";return r&&(h=Fe(r)?r.checked?"true":"false":r.value),r=h,r!==c?(o.setValue(r),!0):!1}function ct(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function bt(r,o){var c=o.checked;return se({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??r._wrapperState.initialChecked})}function Ft(r,o){var c=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;c=pe(o.value!=null?o.value:c),r._wrapperState={initialChecked:h,initialValue:c,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ut(r,o){o=o.checked,o!=null&&D(r,"checked",o,!1)}function Zt(r,o){ut(r,o);var c=pe(o.value),h=o.type;if(c!=null)h==="number"?(c===0&&r.value===""||r.value!=c)&&(r.value=""+c):r.value!==""+c&&(r.value=""+c);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?Sn(r,o.type,c):o.hasOwnProperty("defaultValue")&&Sn(r,o.type,pe(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function Bt(r,o,c){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,c||o===r.value||(r.value=o),r.defaultValue=o}c=r.name,c!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,c!==""&&(r.name=c)}function Sn(r,o,c){(o!=="number"||ct(r.ownerDocument)!==r)&&(c==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+c&&(r.defaultValue=""+c))}var G=Array.isArray;function zt(r,o,c,h){if(r=r.options,o){o={};for(var g=0;g<c.length;g++)o["$"+c[g]]=!0;for(c=0;c<r.length;c++)g=o.hasOwnProperty("$"+r[c].value),r[c].selected!==g&&(r[c].selected=g),g&&h&&(r[c].defaultSelected=!0)}else{for(c=""+pe(c),o=null,g=0;g<r.length;g++){if(r[g].value===c){r[g].selected=!0,h&&(r[g].defaultSelected=!0);return}o!==null||r[g].disabled||(o=r[g])}o!==null&&(o.selected=!0)}}function ft(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Pt(r,o){var c=o.value;if(c==null){if(c=o.children,o=o.defaultValue,c!=null){if(o!=null)throw Error(t(92));if(G(c)){if(1<c.length)throw Error(t(93));c=c[0]}o=c}o==null&&(o=""),c=o}r._wrapperState={initialValue:pe(c)}}function Le(r,o){var c=pe(o.value),h=pe(o.defaultValue);c!=null&&(c=""+c,c!==r.value&&(r.value=c),o.defaultValue==null&&r.defaultValue!==c&&(r.defaultValue=c)),h!=null&&(r.defaultValue=""+h)}function Xt(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function P(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function b(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?P(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var K,de=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,c,h,g){MSApp.execUnsafeLocalFunction(function(){return r(o,c,h,g)})}:r})(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=K.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function me(r,o){if(o){var c=r.firstChild;if(c&&c===r.lastChild&&c.nodeType===3){c.nodeValue=o;return}}r.textContent=o}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(r){Re.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),Se[o]=Se[r]})});function ue(r,o,c){return o==null||typeof o=="boolean"||o===""?"":c||typeof o!="number"||o===0||Se.hasOwnProperty(r)&&Se[r]?(""+o).trim():o+"px"}function he(r,o){r=r.style;for(var c in o)if(o.hasOwnProperty(c)){var h=c.indexOf("--")===0,g=ue(c,o[c],h);c==="float"&&(c="cssFloat"),h?r.setProperty(c,g):r[c]=g}}var Ue=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ke(r,o){if(o){if(Ue[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function we(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Me=null;function tt(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var rt=null,pt=null,H=null;function be(r){if(r=pa(r)){if(typeof rt!="function")throw Error(t(280));var o=r.stateNode;o&&(o=Pl(o),rt(r.stateNode,r.type,o))}}function fe(r){pt?H?H.push(r):H=[r]:pt=r}function Oe(){if(pt){var r=pt,o=H;if(H=pt=null,be(r),o)for(r=0;r<o.length;r++)be(o[r])}}function Ae(r,o){return r(o)}function ge(){}var We=!1;function st(r,o,c){if(We)return r(o,c);We=!0;try{return Ae(r,o,c)}finally{We=!1,(pt!==null||H!==null)&&(ge(),Oe())}}function Ot(r,o){var c=r.stateNode;if(c===null)return null;var h=Pl(c);if(h===null)return null;c=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(c&&typeof c!="function")throw Error(t(231,o,typeof c));return c}var wt=!1;if(u)try{var Fn={};Object.defineProperty(Fn,"passive",{get:function(){wt=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{wt=!1}function si(r,o,c,h,g,y,T,U,V){var ae=Array.prototype.slice.call(arguments,3);try{o.apply(c,ae)}catch(ve){this.onError(ve)}}var nr=!1,$s=null,us=!1,qs=null,ir={onError:function(r){nr=!0,$s=r}};function Yo(r,o,c,h,g,y,T,U,V){nr=!1,$s=null,si.apply(ir,arguments)}function hl(r,o,c,h,g,y,T,U,V){if(Yo.apply(this,arguments),nr){if(nr){var ae=$s;nr=!1,$s=null}else throw Error(t(198));us||(us=!0,qs=ae)}}function Ii(r){var o=r,c=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(c=o.return),r=o.return;while(r)}return o.tag===3?c:null}function fs(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function $o(r){if(Ii(r)!==r)throw Error(t(188))}function Ks(r){var o=r.alternate;if(!o){if(o=Ii(r),o===null)throw Error(t(188));return o!==r?null:r}for(var c=r,h=o;;){var g=c.return;if(g===null)break;var y=g.alternate;if(y===null){if(h=g.return,h!==null){c=h;continue}break}if(g.child===y.child){for(y=g.child;y;){if(y===c)return $o(g),r;if(y===h)return $o(g),o;y=y.sibling}throw Error(t(188))}if(c.return!==h.return)c=g,h=y;else{for(var T=!1,U=g.child;U;){if(U===c){T=!0,c=g,h=y;break}if(U===h){T=!0,h=g,c=y;break}U=U.sibling}if(!T){for(U=y.child;U;){if(U===c){T=!0,c=y,h=g;break}if(U===h){T=!0,h=y,c=g;break}U=U.sibling}if(!T)throw Error(t(189))}}if(c.alternate!==h)throw Error(t(190))}if(c.tag!==3)throw Error(t(188));return c.stateNode.current===c?r:o}function qo(r){return r=Ks(r),r!==null?Ko(r):null}function Ko(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=Ko(r);if(o!==null)return o;r=r.sibling}return null}var pl=e.unstable_scheduleCallback,ml=e.unstable_cancelCallback,Fu=e.unstable_shouldYield,Uu=e.unstable_requestPaint,Qt=e.unstable_now,Ou=e.unstable_getCurrentPriorityLevel,Zo=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,Y=e.unstable_NormalPriority,oe=e.unstable_LowPriority,ee=e.unstable_IdlePriority,J=null,Ce=null;function Ve(r){if(Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(J,r,void 0,(r.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:ot,Xe=Math.log,Ke=Math.LN2;function ot(r){return r>>>=0,r===0?32:31-(Xe(r)/Ke|0)|0}var at=64,Ye=4194304;function yt(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Vt(r,o){var c=r.pendingLanes;if(c===0)return 0;var h=0,g=r.suspendedLanes,y=r.pingedLanes,T=c&268435455;if(T!==0){var U=T&~g;U!==0?h=yt(U):(y&=T,y!==0&&(h=yt(y)))}else T=c&~g,T!==0?h=yt(T):y!==0&&(h=yt(y));if(h===0)return 0;if(o!==0&&o!==h&&(o&g)===0&&(g=h&-h,y=o&-o,g>=y||g===16&&(y&4194240)!==0))return o;if((h&4)!==0&&(h|=c&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=h;0<o;)c=31-Te(o),g=1<<c,h|=r[c],o&=~g;return h}function qt(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(r,o){for(var c=r.suspendedLanes,h=r.pingedLanes,g=r.expirationTimes,y=r.pendingLanes;0<y;){var T=31-Te(y),U=1<<T,V=g[T];V===-1?((U&c)===0||(U&h)!==0)&&(g[T]=qt(U,o)):V<=o&&(r.expiredLanes|=U),y&=~U}}function an(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Be(){var r=at;return at<<=1,(at&4194240)===0&&(at=64),r}function Mn(r){for(var o=[],c=0;31>c;c++)o.push(r);return o}function mt(r,o,c){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-Te(o),r[o]=c}function zn(r,o){var c=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<c;){var g=31-Te(c),y=1<<g;o[g]=0,h[g]=-1,r[g]=-1,c&=~y}}function Vn(r,o){var c=r.entangledLanes|=o;for(r=r.entanglements;c;){var h=31-Te(c),g=1<<h;g&o|r[h]&o&&(r[h]|=o),c&=~g}}var gt=0;function rr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Rt,jt,vi,Lt,xi,Ni=!1,ds=[],Cr=null,Rr=null,Pr=null,Qo=new Map,Jo=new Map,Dr=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yp(r,o){switch(r){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Qo.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(o.pointerId)}}function ea(r,o,c,h,g,y){return r===null||r.nativeEvent!==y?(r={blockedOn:o,domEventName:c,eventSystemFlags:h,nativeEvent:y,targetContainers:[g]},o!==null&&(o=pa(o),o!==null&&jt(o)),r):(r.eventSystemFlags|=h,o=r.targetContainers,g!==null&&o.indexOf(g)===-1&&o.push(g),r)}function ay(r,o,c,h,g){switch(o){case"focusin":return Cr=ea(Cr,r,o,c,h,g),!0;case"dragenter":return Rr=ea(Rr,r,o,c,h,g),!0;case"mouseover":return Pr=ea(Pr,r,o,c,h,g),!0;case"pointerover":var y=g.pointerId;return Qo.set(y,ea(Qo.get(y)||null,r,o,c,h,g)),!0;case"gotpointercapture":return y=g.pointerId,Jo.set(y,ea(Jo.get(y)||null,r,o,c,h,g)),!0}return!1}function $p(r){var o=hs(r.target);if(o!==null){var c=Ii(o);if(c!==null){if(o=c.tag,o===13){if(o=fs(c),o!==null){r.blockedOn=o,xi(r.priority,function(){vi(c)});return}}else if(o===3&&c.stateNode.current.memoizedState.isDehydrated){r.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}r.blockedOn=null}function gl(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var c=Bu(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(c===null){c=r.nativeEvent;var h=new c.constructor(c.type,c);Me=h,c.target.dispatchEvent(h),Me=null}else return o=pa(c),o!==null&&jt(o),r.blockedOn=c,!1;o.shift()}return!0}function qp(r,o,c){gl(r)&&c.delete(o)}function ly(){Ni=!1,Cr!==null&&gl(Cr)&&(Cr=null),Rr!==null&&gl(Rr)&&(Rr=null),Pr!==null&&gl(Pr)&&(Pr=null),Qo.forEach(qp),Jo.forEach(qp)}function ta(r,o){r.blockedOn===o&&(r.blockedOn=null,Ni||(Ni=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ly)))}function na(r){function o(g){return ta(g,r)}if(0<ds.length){ta(ds[0],r);for(var c=1;c<ds.length;c++){var h=ds[c];h.blockedOn===r&&(h.blockedOn=null)}}for(Cr!==null&&ta(Cr,r),Rr!==null&&ta(Rr,r),Pr!==null&&ta(Pr,r),Qo.forEach(o),Jo.forEach(o),c=0;c<Dr.length;c++)h=Dr[c],h.blockedOn===r&&(h.blockedOn=null);for(;0<Dr.length&&(c=Dr[0],c.blockedOn===null);)$p(c),c.blockedOn===null&&Dr.shift()}var Zs=R.ReactCurrentBatchConfig,_l=!0;function cy(r,o,c,h){var g=gt,y=Zs.transition;Zs.transition=null;try{gt=1,ku(r,o,c,h)}finally{gt=g,Zs.transition=y}}function uy(r,o,c,h){var g=gt,y=Zs.transition;Zs.transition=null;try{gt=4,ku(r,o,c,h)}finally{gt=g,Zs.transition=y}}function ku(r,o,c,h){if(_l){var g=Bu(r,o,c,h);if(g===null)nf(r,o,h,vl,c),Yp(r,h);else if(ay(g,r,o,c,h))h.stopPropagation();else if(Yp(r,h),o&4&&-1<oy.indexOf(r)){for(;g!==null;){var y=pa(g);if(y!==null&&Rt(y),y=Bu(r,o,c,h),y===null&&nf(r,o,h,vl,c),y===g)break;g=y}g!==null&&h.stopPropagation()}else nf(r,o,h,null,c)}}var vl=null;function Bu(r,o,c,h){if(vl=null,r=tt(h),r=hs(r),r!==null)if(o=Ii(r),o===null)r=null;else if(c=o.tag,c===13){if(r=fs(o),r!==null)return r;r=null}else if(c===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return vl=r,null}function Kp(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ou()){case Zo:return 1;case C:return 4;case Y:case oe:return 16;case ee:return 536870912;default:return 16}default:return 16}}var Lr=null,zu=null,xl=null;function Zp(){if(xl)return xl;var r,o=zu,c=o.length,h,g="value"in Lr?Lr.value:Lr.textContent,y=g.length;for(r=0;r<c&&o[r]===g[r];r++);var T=c-r;for(h=1;h<=T&&o[c-h]===g[y-h];h++);return xl=g.slice(r,1<h?1-h:void 0)}function yl(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function Sl(){return!0}function Qp(){return!1}function Qn(r){function o(c,h,g,y,T){this._reactName=c,this._targetInst=g,this.type=h,this.nativeEvent=y,this.target=T,this.currentTarget=null;for(var U in r)r.hasOwnProperty(U)&&(c=r[U],this[U]=c?c(y):y[U]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Sl:Qp,this.isPropagationStopped=Qp,this}return se(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),o}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vu=Qn(Qs),ia=se({},Qs,{view:0,detail:0}),fy=Qn(ia),Hu,Gu,ra,Ml=se({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ra&&(ra&&r.type==="mousemove"?(Hu=r.screenX-ra.screenX,Gu=r.screenY-ra.screenY):Gu=Hu=0,ra=r),Hu)},movementY:function(r){return"movementY"in r?r.movementY:Gu}}),Jp=Qn(Ml),dy=se({},Ml,{dataTransfer:0}),hy=Qn(dy),py=se({},ia,{relatedTarget:0}),Wu=Qn(py),my=se({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),gy=Qn(my),_y=se({},Qs,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),vy=Qn(_y),xy=se({},Qs,{data:0}),em=Qn(xy),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},My={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ey(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=My[r])?!!o[r]:!1}function Xu(){return Ey}var by=se({},ia,{key:function(r){if(r.key){var o=yy[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=yl(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Sy[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(r){return r.type==="keypress"?yl(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?yl(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),wy=Qn(by),Ty=se({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tm=Qn(Ty),Ay=se({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),Cy=Qn(Ay),Ry=se({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Py=Qn(Ry),Dy=se({},Ml,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Ly=Qn(Dy),Iy=[9,13,27,32],ju=u&&"CompositionEvent"in window,sa=null;u&&"documentMode"in document&&(sa=document.documentMode);var Ny=u&&"TextEvent"in window&&!sa,nm=u&&(!ju||sa&&8<sa&&11>=sa),im=" ",rm=!1;function sm(r,o){switch(r){case"keyup":return Iy.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function om(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Js=!1;function Fy(r,o){switch(r){case"compositionend":return om(o);case"keypress":return o.which!==32?null:(rm=!0,im);case"textInput":return r=o.data,r===im&&rm?null:r;default:return null}}function Uy(r,o){if(Js)return r==="compositionend"||!ju&&sm(r,o)?(r=Zp(),xl=zu=Lr=null,Js=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return nm&&o.locale!=="ko"?null:o.data;default:return null}}var Oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!Oy[r.type]:o==="textarea"}function lm(r,o,c,h){fe(h),o=Al(o,"onChange"),0<o.length&&(c=new Vu("onChange","change",null,c,h),r.push({event:c,listeners:o}))}var oa=null,aa=null;function ky(r){Tm(r,0)}function El(r){var o=ro(r);if(kt(o))return r}function By(r,o){if(r==="change")return o}var cm=!1;if(u){var Yu;if(u){var $u="oninput"in document;if(!$u){var um=document.createElement("div");um.setAttribute("oninput","return;"),$u=typeof um.oninput=="function"}Yu=$u}else Yu=!1;cm=Yu&&(!document.documentMode||9<document.documentMode)}function fm(){oa&&(oa.detachEvent("onpropertychange",dm),aa=oa=null)}function dm(r){if(r.propertyName==="value"&&El(aa)){var o=[];lm(o,aa,r,tt(r)),st(ky,o)}}function zy(r,o,c){r==="focusin"?(fm(),oa=o,aa=c,oa.attachEvent("onpropertychange",dm)):r==="focusout"&&fm()}function Vy(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return El(aa)}function Hy(r,o){if(r==="click")return El(o)}function Gy(r,o){if(r==="input"||r==="change")return El(o)}function Wy(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var yi=typeof Object.is=="function"?Object.is:Wy;function la(r,o){if(yi(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var c=Object.keys(r),h=Object.keys(o);if(c.length!==h.length)return!1;for(h=0;h<c.length;h++){var g=c[h];if(!f.call(o,g)||!yi(r[g],o[g]))return!1}return!0}function hm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function pm(r,o){var c=hm(r);r=0;for(var h;c;){if(c.nodeType===3){if(h=r+c.textContent.length,r<=o&&h>=o)return{node:c,offset:o-r};r=h}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=hm(c)}}function mm(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?mm(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function gm(){for(var r=window,o=ct();o instanceof r.HTMLIFrameElement;){try{var c=typeof o.contentWindow.location.href=="string"}catch{c=!1}if(c)r=o.contentWindow;else break;o=ct(r.document)}return o}function qu(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function Xy(r){var o=gm(),c=r.focusedElem,h=r.selectionRange;if(o!==c&&c&&c.ownerDocument&&mm(c.ownerDocument.documentElement,c)){if(h!==null&&qu(c)){if(o=h.start,r=h.end,r===void 0&&(r=o),"selectionStart"in c)c.selectionStart=o,c.selectionEnd=Math.min(r,c.value.length);else if(r=(o=c.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var g=c.textContent.length,y=Math.min(h.start,g);h=h.end===void 0?y:Math.min(h.end,g),!r.extend&&y>h&&(g=h,h=y,y=g),g=pm(c,y);var T=pm(c,h);g&&T&&(r.rangeCount!==1||r.anchorNode!==g.node||r.anchorOffset!==g.offset||r.focusNode!==T.node||r.focusOffset!==T.offset)&&(o=o.createRange(),o.setStart(g.node,g.offset),r.removeAllRanges(),y>h?(r.addRange(o),r.extend(T.node,T.offset)):(o.setEnd(T.node,T.offset),r.addRange(o)))}}for(o=[],r=c;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<o.length;c++)r=o[c],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var jy=u&&"documentMode"in document&&11>=document.documentMode,eo=null,Ku=null,ca=null,Zu=!1;function _m(r,o,c){var h=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Zu||eo==null||eo!==ct(h)||(h=eo,"selectionStart"in h&&qu(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),ca&&la(ca,h)||(ca=h,h=Al(Ku,"onSelect"),0<h.length&&(o=new Vu("onSelect","select",null,o,c),r.push({event:o,listeners:h}),o.target=eo)))}function bl(r,o){var c={};return c[r.toLowerCase()]=o.toLowerCase(),c["Webkit"+r]="webkit"+o,c["Moz"+r]="moz"+o,c}var to={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},Qu={},vm={};u&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function wl(r){if(Qu[r])return Qu[r];if(!to[r])return r;var o=to[r],c;for(c in o)if(o.hasOwnProperty(c)&&c in vm)return Qu[r]=o[c];return r}var xm=wl("animationend"),ym=wl("animationiteration"),Sm=wl("animationstart"),Mm=wl("transitionend"),Em=new Map,bm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(r,o){Em.set(r,o),a(o,[r])}for(var Ju=0;Ju<bm.length;Ju++){var ef=bm[Ju],Yy=ef.toLowerCase(),$y=ef[0].toUpperCase()+ef.slice(1);Ir(Yy,"on"+$y)}Ir(xm,"onAnimationEnd"),Ir(ym,"onAnimationIteration"),Ir(Sm,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(Mm,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function wm(r,o,c){var h=r.type||"unknown-event";r.currentTarget=c,hl(h,o,void 0,r),r.currentTarget=null}function Tm(r,o){o=(o&4)!==0;for(var c=0;c<r.length;c++){var h=r[c],g=h.event;h=h.listeners;e:{var y=void 0;if(o)for(var T=h.length-1;0<=T;T--){var U=h[T],V=U.instance,ae=U.currentTarget;if(U=U.listener,V!==y&&g.isPropagationStopped())break e;wm(g,U,ae),y=V}else for(T=0;T<h.length;T++){if(U=h[T],V=U.instance,ae=U.currentTarget,U=U.listener,V!==y&&g.isPropagationStopped())break e;wm(g,U,ae),y=V}}}if(us)throw r=qs,us=!1,qs=null,r}function Yt(r,o){var c=o[cf];c===void 0&&(c=o[cf]=new Set);var h=r+"__bubble";c.has(h)||(Am(o,r,2,!1),c.add(h))}function tf(r,o,c){var h=0;o&&(h|=4),Am(c,r,h,o)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function fa(r){if(!r[Tl]){r[Tl]=!0,i.forEach(function(c){c!=="selectionchange"&&(qy.has(c)||tf(c,!1,r),tf(c,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[Tl]||(o[Tl]=!0,tf("selectionchange",!1,o))}}function Am(r,o,c,h){switch(Kp(o)){case 1:var g=cy;break;case 4:g=uy;break;default:g=ku}c=g.bind(null,o,c,r),g=void 0,!wt||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(g=!0),h?g!==void 0?r.addEventListener(o,c,{capture:!0,passive:g}):r.addEventListener(o,c,!0):g!==void 0?r.addEventListener(o,c,{passive:g}):r.addEventListener(o,c,!1)}function nf(r,o,c,h,g){var y=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var U=h.stateNode.containerInfo;if(U===g||U.nodeType===8&&U.parentNode===g)break;if(T===4)for(T=h.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===g||V.nodeType===8&&V.parentNode===g))return;T=T.return}for(;U!==null;){if(T=hs(U),T===null)return;if(V=T.tag,V===5||V===6){h=y=T;continue e}U=U.parentNode}}h=h.return}st(function(){var ae=y,ve=tt(c),ye=[];e:{var _e=Em.get(r);if(_e!==void 0){var ze=Vu,Ge=r;switch(r){case"keypress":if(yl(c)===0)break e;case"keydown":case"keyup":ze=wy;break;case"focusin":Ge="focus",ze=Wu;break;case"focusout":Ge="blur",ze=Wu;break;case"beforeblur":case"afterblur":ze=Wu;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=Cy;break;case xm:case ym:case Sm:ze=gy;break;case Mm:ze=Py;break;case"scroll":ze=fy;break;case"wheel":ze=Ly;break;case"copy":case"cut":case"paste":ze=vy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=tm}var je=(o&4)!==0,rn=!je&&r==="scroll",Q=je?_e!==null?_e+"Capture":null:_e;je=[];for(var W=ae,te;W!==null;){te=W;var Ee=te.stateNode;if(te.tag===5&&Ee!==null&&(te=Ee,Q!==null&&(Ee=Ot(W,Q),Ee!=null&&je.push(da(W,Ee,te)))),rn)break;W=W.return}0<je.length&&(_e=new ze(_e,Ge,null,c,ve),ye.push({event:_e,listeners:je}))}}if((o&7)===0){e:{if(_e=r==="mouseover"||r==="pointerover",ze=r==="mouseout"||r==="pointerout",_e&&c!==Me&&(Ge=c.relatedTarget||c.fromElement)&&(hs(Ge)||Ge[sr]))break e;if((ze||_e)&&(_e=ve.window===ve?ve:(_e=ve.ownerDocument)?_e.defaultView||_e.parentWindow:window,ze?(Ge=c.relatedTarget||c.toElement,ze=ae,Ge=Ge?hs(Ge):null,Ge!==null&&(rn=Ii(Ge),Ge!==rn||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(ze=null,Ge=ae),ze!==Ge)){if(je=Jp,Ee="onMouseLeave",Q="onMouseEnter",W="mouse",(r==="pointerout"||r==="pointerover")&&(je=tm,Ee="onPointerLeave",Q="onPointerEnter",W="pointer"),rn=ze==null?_e:ro(ze),te=Ge==null?_e:ro(Ge),_e=new je(Ee,W+"leave",ze,c,ve),_e.target=rn,_e.relatedTarget=te,Ee=null,hs(ve)===ae&&(je=new je(Q,W+"enter",Ge,c,ve),je.target=te,je.relatedTarget=rn,Ee=je),rn=Ee,ze&&Ge)t:{for(je=ze,Q=Ge,W=0,te=je;te;te=no(te))W++;for(te=0,Ee=Q;Ee;Ee=no(Ee))te++;for(;0<W-te;)je=no(je),W--;for(;0<te-W;)Q=no(Q),te--;for(;W--;){if(je===Q||Q!==null&&je===Q.alternate)break t;je=no(je),Q=no(Q)}je=null}else je=null;ze!==null&&Cm(ye,_e,ze,je,!1),Ge!==null&&rn!==null&&Cm(ye,rn,Ge,je,!0)}}e:{if(_e=ae?ro(ae):window,ze=_e.nodeName&&_e.nodeName.toLowerCase(),ze==="select"||ze==="input"&&_e.type==="file")var $e=By;else if(am(_e))if(cm)$e=Gy;else{$e=Vy;var Je=zy}else(ze=_e.nodeName)&&ze.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&($e=Hy);if($e&&($e=$e(r,ae))){lm(ye,$e,c,ve);break e}Je&&Je(r,_e,ae),r==="focusout"&&(Je=_e._wrapperState)&&Je.controlled&&_e.type==="number"&&Sn(_e,"number",_e.value)}switch(Je=ae?ro(ae):window,r){case"focusin":(am(Je)||Je.contentEditable==="true")&&(eo=Je,Ku=ae,ca=null);break;case"focusout":ca=Ku=eo=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,_m(ye,c,ve);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":_m(ye,c,ve)}var et;if(ju)e:{switch(r){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Js?sm(r,c)&&(nt="onCompositionEnd"):r==="keydown"&&c.keyCode===229&&(nt="onCompositionStart");nt&&(nm&&c.locale!=="ko"&&(Js||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Js&&(et=Zp()):(Lr=ve,zu="value"in Lr?Lr.value:Lr.textContent,Js=!0)),Je=Al(ae,nt),0<Je.length&&(nt=new em(nt,r,null,c,ve),ye.push({event:nt,listeners:Je}),et?nt.data=et:(et=om(c),et!==null&&(nt.data=et)))),(et=Ny?Fy(r,c):Uy(r,c))&&(ae=Al(ae,"onBeforeInput"),0<ae.length&&(ve=new em("onBeforeInput","beforeinput",null,c,ve),ye.push({event:ve,listeners:ae}),ve.data=et))}Tm(ye,o)})}function da(r,o,c){return{instance:r,listener:o,currentTarget:c}}function Al(r,o){for(var c=o+"Capture",h=[];r!==null;){var g=r,y=g.stateNode;g.tag===5&&y!==null&&(g=y,y=Ot(r,c),y!=null&&h.unshift(da(r,y,g)),y=Ot(r,o),y!=null&&h.push(da(r,y,g))),r=r.return}return h}function no(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Cm(r,o,c,h,g){for(var y=o._reactName,T=[];c!==null&&c!==h;){var U=c,V=U.alternate,ae=U.stateNode;if(V!==null&&V===h)break;U.tag===5&&ae!==null&&(U=ae,g?(V=Ot(c,y),V!=null&&T.unshift(da(c,V,U))):g||(V=Ot(c,y),V!=null&&T.push(da(c,V,U)))),c=c.return}T.length!==0&&r.push({event:o,listeners:T})}var Ky=/\r\n?/g,Zy=/\u0000|\uFFFD/g;function Rm(r){return(typeof r=="string"?r:""+r).replace(Ky,`
`).replace(Zy,"")}function Cl(r,o,c){if(o=Rm(o),Rm(r)!==o&&c)throw Error(t(425))}function Rl(){}var rf=null,sf=null;function of(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var af=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,Pm=typeof Promise=="function"?Promise:void 0,Jy=typeof queueMicrotask=="function"?queueMicrotask:typeof Pm<"u"?function(r){return Pm.resolve(null).then(r).catch(eS)}:af;function eS(r){setTimeout(function(){throw r})}function lf(r,o){var c=o,h=0;do{var g=c.nextSibling;if(r.removeChild(c),g&&g.nodeType===8)if(c=g.data,c==="/$"){if(h===0){r.removeChild(g),na(o);return}h--}else c!=="$"&&c!=="$?"&&c!=="$!"||h++;c=g}while(c);na(o)}function Nr(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function Dm(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var c=r.data;if(c==="$"||c==="$!"||c==="$?"){if(o===0)return r;o--}else c==="/$"&&o++}r=r.previousSibling}return null}var io=Math.random().toString(36).slice(2),Fi="__reactFiber$"+io,ha="__reactProps$"+io,sr="__reactContainer$"+io,cf="__reactEvents$"+io,tS="__reactListeners$"+io,nS="__reactHandles$"+io;function hs(r){var o=r[Fi];if(o)return o;for(var c=r.parentNode;c;){if(o=c[sr]||c[Fi]){if(c=o.alternate,o.child!==null||c!==null&&c.child!==null)for(r=Dm(r);r!==null;){if(c=r[Fi])return c;r=Dm(r)}return o}r=c,c=r.parentNode}return null}function pa(r){return r=r[Fi]||r[sr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ro(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Pl(r){return r[ha]||null}var uf=[],so=-1;function Fr(r){return{current:r}}function $t(r){0>so||(r.current=uf[so],uf[so]=null,so--)}function Ht(r,o){so++,uf[so]=r.current,r.current=o}var Ur={},Tn=Fr(Ur),Hn=Fr(!1),ps=Ur;function oo(r,o){var c=r.type.contextTypes;if(!c)return Ur;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var g={},y;for(y in c)g[y]=o[y];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=g),g}function Gn(r){return r=r.childContextTypes,r!=null}function Dl(){$t(Hn),$t(Tn)}function Lm(r,o,c){if(Tn.current!==Ur)throw Error(t(168));Ht(Tn,o),Ht(Hn,c)}function Im(r,o,c){var h=r.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return c;h=h.getChildContext();for(var g in h)if(!(g in o))throw Error(t(108,xe(r)||"Unknown",g));return se({},c,h)}function Ll(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Ur,ps=Tn.current,Ht(Tn,r),Ht(Hn,Hn.current),!0}function Nm(r,o,c){var h=r.stateNode;if(!h)throw Error(t(169));c?(r=Im(r,o,ps),h.__reactInternalMemoizedMergedChildContext=r,$t(Hn),$t(Tn),Ht(Tn,r)):$t(Hn),Ht(Hn,c)}var or=null,Il=!1,ff=!1;function Fm(r){or===null?or=[r]:or.push(r)}function iS(r){Il=!0,Fm(r)}function Or(){if(!ff&&or!==null){ff=!0;var r=0,o=gt;try{var c=or;for(gt=1;r<c.length;r++){var h=c[r];do h=h(!0);while(h!==null)}or=null,Il=!1}catch(g){throw or!==null&&(or=or.slice(r+1)),pl(Zo,Or),g}finally{gt=o,ff=!1}}return null}var ao=[],lo=0,Nl=null,Fl=0,oi=[],ai=0,ms=null,ar=1,lr="";function gs(r,o){ao[lo++]=Fl,ao[lo++]=Nl,Nl=r,Fl=o}function Um(r,o,c){oi[ai++]=ar,oi[ai++]=lr,oi[ai++]=ms,ms=r;var h=ar;r=lr;var g=32-Te(h)-1;h&=~(1<<g),c+=1;var y=32-Te(o)+g;if(30<y){var T=g-g%5;y=(h&(1<<T)-1).toString(32),h>>=T,g-=T,ar=1<<32-Te(o)+g|c<<g|h,lr=y+r}else ar=1<<y|c<<g|h,lr=r}function df(r){r.return!==null&&(gs(r,1),Um(r,1,0))}function hf(r){for(;r===Nl;)Nl=ao[--lo],ao[lo]=null,Fl=ao[--lo],ao[lo]=null;for(;r===ms;)ms=oi[--ai],oi[ai]=null,lr=oi[--ai],oi[ai]=null,ar=oi[--ai],oi[ai]=null}var Jn=null,ei=null,Kt=!1,Si=null;function Om(r,o){var c=fi(5,null,null,0);c.elementType="DELETED",c.stateNode=o,c.return=r,o=r.deletions,o===null?(r.deletions=[c],r.flags|=16):o.push(c)}function km(r,o){switch(r.tag){case 5:var c=r.type;return o=o.nodeType!==1||c.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,Jn=r,ei=Nr(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,Jn=r,ei=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(c=ms!==null?{id:ar,overflow:lr}:null,r.memoizedState={dehydrated:o,treeContext:c,retryLane:1073741824},c=fi(18,null,null,0),c.stateNode=o,c.return=r,r.child=c,Jn=r,ei=null,!0):!1;default:return!1}}function pf(r){return(r.mode&1)!==0&&(r.flags&128)===0}function mf(r){if(Kt){var o=ei;if(o){var c=o;if(!km(r,o)){if(pf(r))throw Error(t(418));o=Nr(c.nextSibling);var h=Jn;o&&km(r,o)?Om(h,c):(r.flags=r.flags&-4097|2,Kt=!1,Jn=r)}}else{if(pf(r))throw Error(t(418));r.flags=r.flags&-4097|2,Kt=!1,Jn=r}}}function Bm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Jn=r}function Ul(r){if(r!==Jn)return!1;if(!Kt)return Bm(r),Kt=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!of(r.type,r.memoizedProps)),o&&(o=ei)){if(pf(r))throw zm(),Error(t(418));for(;o;)Om(r,o),o=Nr(o.nextSibling)}if(Bm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var c=r.data;if(c==="/$"){if(o===0){ei=Nr(r.nextSibling);break e}o--}else c!=="$"&&c!=="$!"&&c!=="$?"||o++}r=r.nextSibling}ei=null}}else ei=Jn?Nr(r.stateNode.nextSibling):null;return!0}function zm(){for(var r=ei;r;)r=Nr(r.nextSibling)}function co(){ei=Jn=null,Kt=!1}function gf(r){Si===null?Si=[r]:Si.push(r)}var rS=R.ReactCurrentBatchConfig;function ma(r,o,c){if(r=c.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(t(309));var h=c.stateNode}if(!h)throw Error(t(147,r));var g=h,y=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===y?o.ref:(o=function(T){var U=g.refs;T===null?delete U[y]:U[y]=T},o._stringRef=y,o)}if(typeof r!="string")throw Error(t(284));if(!c._owner)throw Error(t(290,r))}return r}function Ol(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function Vm(r){var o=r._init;return o(r._payload)}function Hm(r){function o(Q,W){if(r){var te=Q.deletions;te===null?(Q.deletions=[W],Q.flags|=16):te.push(W)}}function c(Q,W){if(!r)return null;for(;W!==null;)o(Q,W),W=W.sibling;return null}function h(Q,W){for(Q=new Map;W!==null;)W.key!==null?Q.set(W.key,W):Q.set(W.index,W),W=W.sibling;return Q}function g(Q,W){return Q=Xr(Q,W),Q.index=0,Q.sibling=null,Q}function y(Q,W,te){return Q.index=te,r?(te=Q.alternate,te!==null?(te=te.index,te<W?(Q.flags|=2,W):te):(Q.flags|=2,W)):(Q.flags|=1048576,W)}function T(Q){return r&&Q.alternate===null&&(Q.flags|=2),Q}function U(Q,W,te,Ee){return W===null||W.tag!==6?(W=ad(te,Q.mode,Ee),W.return=Q,W):(W=g(W,te),W.return=Q,W)}function V(Q,W,te,Ee){var $e=te.type;return $e===F?ve(Q,W,te.props.children,Ee,te.key):W!==null&&(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===q&&Vm($e)===W.type)?(Ee=g(W,te.props),Ee.ref=ma(Q,W,te),Ee.return=Q,Ee):(Ee=ac(te.type,te.key,te.props,null,Q.mode,Ee),Ee.ref=ma(Q,W,te),Ee.return=Q,Ee)}function ae(Q,W,te,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=ld(te,Q.mode,Ee),W.return=Q,W):(W=g(W,te.children||[]),W.return=Q,W)}function ve(Q,W,te,Ee,$e){return W===null||W.tag!==7?(W=bs(te,Q.mode,Ee,$e),W.return=Q,W):(W=g(W,te),W.return=Q,W)}function ye(Q,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=ad(""+W,Q.mode,te),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case I:return te=ac(W.type,W.key,W.props,null,Q.mode,te),te.ref=ma(Q,null,W),te.return=Q,te;case L:return W=ld(W,Q.mode,te),W.return=Q,W;case q:var Ee=W._init;return ye(Q,Ee(W._payload),te)}if(G(W)||le(W))return W=bs(W,Q.mode,te,null),W.return=Q,W;Ol(Q,W)}return null}function _e(Q,W,te,Ee){var $e=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return $e!==null?null:U(Q,W,""+te,Ee);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case I:return te.key===$e?V(Q,W,te,Ee):null;case L:return te.key===$e?ae(Q,W,te,Ee):null;case q:return $e=te._init,_e(Q,W,$e(te._payload),Ee)}if(G(te)||le(te))return $e!==null?null:ve(Q,W,te,Ee,null);Ol(Q,te)}return null}function ze(Q,W,te,Ee,$e){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Q=Q.get(te)||null,U(W,Q,""+Ee,$e);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case I:return Q=Q.get(Ee.key===null?te:Ee.key)||null,V(W,Q,Ee,$e);case L:return Q=Q.get(Ee.key===null?te:Ee.key)||null,ae(W,Q,Ee,$e);case q:var Je=Ee._init;return ze(Q,W,te,Je(Ee._payload),$e)}if(G(Ee)||le(Ee))return Q=Q.get(te)||null,ve(W,Q,Ee,$e,null);Ol(W,Ee)}return null}function Ge(Q,W,te,Ee){for(var $e=null,Je=null,et=W,nt=W=0,vn=null;et!==null&&nt<te.length;nt++){et.index>nt?(vn=et,et=null):vn=et.sibling;var Tt=_e(Q,et,te[nt],Ee);if(Tt===null){et===null&&(et=vn);break}r&&et&&Tt.alternate===null&&o(Q,et),W=y(Tt,W,nt),Je===null?$e=Tt:Je.sibling=Tt,Je=Tt,et=vn}if(nt===te.length)return c(Q,et),Kt&&gs(Q,nt),$e;if(et===null){for(;nt<te.length;nt++)et=ye(Q,te[nt],Ee),et!==null&&(W=y(et,W,nt),Je===null?$e=et:Je.sibling=et,Je=et);return Kt&&gs(Q,nt),$e}for(et=h(Q,et);nt<te.length;nt++)vn=ze(et,Q,nt,te[nt],Ee),vn!==null&&(r&&vn.alternate!==null&&et.delete(vn.key===null?nt:vn.key),W=y(vn,W,nt),Je===null?$e=vn:Je.sibling=vn,Je=vn);return r&&et.forEach(function(jr){return o(Q,jr)}),Kt&&gs(Q,nt),$e}function je(Q,W,te,Ee){var $e=le(te);if(typeof $e!="function")throw Error(t(150));if(te=$e.call(te),te==null)throw Error(t(151));for(var Je=$e=null,et=W,nt=W=0,vn=null,Tt=te.next();et!==null&&!Tt.done;nt++,Tt=te.next()){et.index>nt?(vn=et,et=null):vn=et.sibling;var jr=_e(Q,et,Tt.value,Ee);if(jr===null){et===null&&(et=vn);break}r&&et&&jr.alternate===null&&o(Q,et),W=y(jr,W,nt),Je===null?$e=jr:Je.sibling=jr,Je=jr,et=vn}if(Tt.done)return c(Q,et),Kt&&gs(Q,nt),$e;if(et===null){for(;!Tt.done;nt++,Tt=te.next())Tt=ye(Q,Tt.value,Ee),Tt!==null&&(W=y(Tt,W,nt),Je===null?$e=Tt:Je.sibling=Tt,Je=Tt);return Kt&&gs(Q,nt),$e}for(et=h(Q,et);!Tt.done;nt++,Tt=te.next())Tt=ze(et,Q,nt,Tt.value,Ee),Tt!==null&&(r&&Tt.alternate!==null&&et.delete(Tt.key===null?nt:Tt.key),W=y(Tt,W,nt),Je===null?$e=Tt:Je.sibling=Tt,Je=Tt);return r&&et.forEach(function(OS){return o(Q,OS)}),Kt&&gs(Q,nt),$e}function rn(Q,W,te,Ee){if(typeof te=="object"&&te!==null&&te.type===F&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case I:e:{for(var $e=te.key,Je=W;Je!==null;){if(Je.key===$e){if($e=te.type,$e===F){if(Je.tag===7){c(Q,Je.sibling),W=g(Je,te.props.children),W.return=Q,Q=W;break e}}else if(Je.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===q&&Vm($e)===Je.type){c(Q,Je.sibling),W=g(Je,te.props),W.ref=ma(Q,Je,te),W.return=Q,Q=W;break e}c(Q,Je);break}else o(Q,Je);Je=Je.sibling}te.type===F?(W=bs(te.props.children,Q.mode,Ee,te.key),W.return=Q,Q=W):(Ee=ac(te.type,te.key,te.props,null,Q.mode,Ee),Ee.ref=ma(Q,W,te),Ee.return=Q,Q=Ee)}return T(Q);case L:e:{for(Je=te.key;W!==null;){if(W.key===Je)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){c(Q,W.sibling),W=g(W,te.children||[]),W.return=Q,Q=W;break e}else{c(Q,W);break}else o(Q,W);W=W.sibling}W=ld(te,Q.mode,Ee),W.return=Q,Q=W}return T(Q);case q:return Je=te._init,rn(Q,W,Je(te._payload),Ee)}if(G(te))return Ge(Q,W,te,Ee);if(le(te))return je(Q,W,te,Ee);Ol(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(c(Q,W.sibling),W=g(W,te),W.return=Q,Q=W):(c(Q,W),W=ad(te,Q.mode,Ee),W.return=Q,Q=W),T(Q)):c(Q,W)}return rn}var uo=Hm(!0),Gm=Hm(!1),kl=Fr(null),Bl=null,fo=null,_f=null;function vf(){_f=fo=Bl=null}function xf(r){var o=kl.current;$t(kl),r._currentValue=o}function yf(r,o,c){for(;r!==null;){var h=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),r===c)break;r=r.return}}function ho(r,o){Bl=r,_f=fo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&o)!==0&&(Wn=!0),r.firstContext=null)}function li(r){var o=r._currentValue;if(_f!==r)if(r={context:r,memoizedValue:o,next:null},fo===null){if(Bl===null)throw Error(t(308));fo=r,Bl.dependencies={lanes:0,firstContext:r}}else fo=fo.next=r;return o}var _s=null;function Sf(r){_s===null?_s=[r]:_s.push(r)}function Wm(r,o,c,h){var g=o.interleaved;return g===null?(c.next=c,Sf(o)):(c.next=g.next,g.next=c),o.interleaved=c,cr(r,h)}function cr(r,o){r.lanes|=o;var c=r.alternate;for(c!==null&&(c.lanes|=o),c=r,r=r.return;r!==null;)r.childLanes|=o,c=r.alternate,c!==null&&(c.childLanes|=o),c=r,r=r.return;return c.tag===3?c.stateNode:null}var kr=!1;function Mf(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xm(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function ur(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function Br(r,o,c){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Mt&2)!==0){var g=h.pending;return g===null?o.next=o:(o.next=g.next,g.next=o),h.pending=o,cr(r,c)}return g=h.interleaved,g===null?(o.next=o,Sf(h)):(o.next=g.next,g.next=o),h.interleaved=o,cr(r,c)}function zl(r,o,c){if(o=o.updateQueue,o!==null&&(o=o.shared,(c&4194240)!==0)){var h=o.lanes;h&=r.pendingLanes,c|=h,o.lanes=c,Vn(r,c)}}function jm(r,o){var c=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,c===h)){var g=null,y=null;if(c=c.firstBaseUpdate,c!==null){do{var T={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};y===null?g=y=T:y=y.next=T,c=c.next}while(c!==null);y===null?g=y=o:y=y.next=o}else g=y=o;c={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:y,shared:h.shared,effects:h.effects},r.updateQueue=c;return}r=c.lastBaseUpdate,r===null?c.firstBaseUpdate=o:r.next=o,c.lastBaseUpdate=o}function Vl(r,o,c,h){var g=r.updateQueue;kr=!1;var y=g.firstBaseUpdate,T=g.lastBaseUpdate,U=g.shared.pending;if(U!==null){g.shared.pending=null;var V=U,ae=V.next;V.next=null,T===null?y=ae:T.next=ae,T=V;var ve=r.alternate;ve!==null&&(ve=ve.updateQueue,U=ve.lastBaseUpdate,U!==T&&(U===null?ve.firstBaseUpdate=ae:U.next=ae,ve.lastBaseUpdate=V))}if(y!==null){var ye=g.baseState;T=0,ve=ae=V=null,U=y;do{var _e=U.lane,ze=U.eventTime;if((h&_e)===_e){ve!==null&&(ve=ve.next={eventTime:ze,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ge=r,je=U;switch(_e=o,ze=c,je.tag){case 1:if(Ge=je.payload,typeof Ge=="function"){ye=Ge.call(ze,ye,_e);break e}ye=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=je.payload,_e=typeof Ge=="function"?Ge.call(ze,ye,_e):Ge,_e==null)break e;ye=se({},ye,_e);break e;case 2:kr=!0}}U.callback!==null&&U.lane!==0&&(r.flags|=64,_e=g.effects,_e===null?g.effects=[U]:_e.push(U))}else ze={eventTime:ze,lane:_e,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ve===null?(ae=ve=ze,V=ye):ve=ve.next=ze,T|=_e;if(U=U.next,U===null){if(U=g.shared.pending,U===null)break;_e=U,U=_e.next,_e.next=null,g.lastBaseUpdate=_e,g.shared.pending=null}}while(!0);if(ve===null&&(V=ye),g.baseState=V,g.firstBaseUpdate=ae,g.lastBaseUpdate=ve,o=g.shared.interleaved,o!==null){g=o;do T|=g.lane,g=g.next;while(g!==o)}else y===null&&(g.shared.lanes=0);ys|=T,r.lanes=T,r.memoizedState=ye}}function Ym(r,o,c){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var h=r[o],g=h.callback;if(g!==null){if(h.callback=null,h=c,typeof g!="function")throw Error(t(191,g));g.call(h)}}}var ga={},Ui=Fr(ga),_a=Fr(ga),va=Fr(ga);function vs(r){if(r===ga)throw Error(t(174));return r}function Ef(r,o){switch(Ht(va,o),Ht(_a,r),Ht(Ui,ga),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:b(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=b(o,r)}$t(Ui),Ht(Ui,o)}function po(){$t(Ui),$t(_a),$t(va)}function $m(r){vs(va.current);var o=vs(Ui.current),c=b(o,r.type);o!==c&&(Ht(_a,r),Ht(Ui,c))}function bf(r){_a.current===r&&($t(Ui),$t(_a))}var Jt=Fr(0);function Hl(r){for(var o=r;o!==null;){if(o.tag===13){var c=o.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var wf=[];function Tf(){for(var r=0;r<wf.length;r++)wf[r]._workInProgressVersionPrimary=null;wf.length=0}var Gl=R.ReactCurrentDispatcher,Af=R.ReactCurrentBatchConfig,xs=0,en=null,fn=null,gn=null,Wl=!1,xa=!1,ya=0,sS=0;function An(){throw Error(t(321))}function Cf(r,o){if(o===null)return!1;for(var c=0;c<o.length&&c<r.length;c++)if(!yi(r[c],o[c]))return!1;return!0}function Rf(r,o,c,h,g,y){if(xs=y,en=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Gl.current=r===null||r.memoizedState===null?cS:uS,r=c(h,g),xa){y=0;do{if(xa=!1,ya=0,25<=y)throw Error(t(301));y+=1,gn=fn=null,o.updateQueue=null,Gl.current=fS,r=c(h,g)}while(xa)}if(Gl.current=Yl,o=fn!==null&&fn.next!==null,xs=0,gn=fn=en=null,Wl=!1,o)throw Error(t(300));return r}function Pf(){var r=ya!==0;return ya=0,r}function Oi(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?en.memoizedState=gn=r:gn=gn.next=r,gn}function ci(){if(fn===null){var r=en.alternate;r=r!==null?r.memoizedState:null}else r=fn.next;var o=gn===null?en.memoizedState:gn.next;if(o!==null)gn=o,fn=r;else{if(r===null)throw Error(t(310));fn=r,r={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},gn===null?en.memoizedState=gn=r:gn=gn.next=r}return gn}function Sa(r,o){return typeof o=="function"?o(r):o}function Df(r){var o=ci(),c=o.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=r;var h=fn,g=h.baseQueue,y=c.pending;if(y!==null){if(g!==null){var T=g.next;g.next=y.next,y.next=T}h.baseQueue=g=y,c.pending=null}if(g!==null){y=g.next,h=h.baseState;var U=T=null,V=null,ae=y;do{var ve=ae.lane;if((xs&ve)===ve)V!==null&&(V=V.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),h=ae.hasEagerState?ae.eagerState:r(h,ae.action);else{var ye={lane:ve,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};V===null?(U=V=ye,T=h):V=V.next=ye,en.lanes|=ve,ys|=ve}ae=ae.next}while(ae!==null&&ae!==y);V===null?T=h:V.next=U,yi(h,o.memoizedState)||(Wn=!0),o.memoizedState=h,o.baseState=T,o.baseQueue=V,c.lastRenderedState=h}if(r=c.interleaved,r!==null){g=r;do y=g.lane,en.lanes|=y,ys|=y,g=g.next;while(g!==r)}else g===null&&(c.lanes=0);return[o.memoizedState,c.dispatch]}function Lf(r){var o=ci(),c=o.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=r;var h=c.dispatch,g=c.pending,y=o.memoizedState;if(g!==null){c.pending=null;var T=g=g.next;do y=r(y,T.action),T=T.next;while(T!==g);yi(y,o.memoizedState)||(Wn=!0),o.memoizedState=y,o.baseQueue===null&&(o.baseState=y),c.lastRenderedState=y}return[y,h]}function qm(){}function Km(r,o){var c=en,h=ci(),g=o(),y=!yi(h.memoizedState,g);if(y&&(h.memoizedState=g,Wn=!0),h=h.queue,If(Jm.bind(null,c,h,r),[r]),h.getSnapshot!==o||y||gn!==null&&gn.memoizedState.tag&1){if(c.flags|=2048,Ma(9,Qm.bind(null,c,h,g,o),void 0,null),_n===null)throw Error(t(349));(xs&30)!==0||Zm(c,o,g)}return g}function Zm(r,o,c){r.flags|=16384,r={getSnapshot:o,value:c},o=en.updateQueue,o===null?(o={lastEffect:null,stores:null},en.updateQueue=o,o.stores=[r]):(c=o.stores,c===null?o.stores=[r]:c.push(r))}function Qm(r,o,c,h){o.value=c,o.getSnapshot=h,eg(o)&&tg(r)}function Jm(r,o,c){return c(function(){eg(o)&&tg(r)})}function eg(r){var o=r.getSnapshot;r=r.value;try{var c=o();return!yi(r,c)}catch{return!0}}function tg(r){var o=cr(r,1);o!==null&&wi(o,r,1,-1)}function ng(r){var o=Oi();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:r},o.queue=r,r=r.dispatch=lS.bind(null,en,r),[o.memoizedState,r]}function Ma(r,o,c,h){return r={tag:r,create:o,destroy:c,deps:h,next:null},o=en.updateQueue,o===null?(o={lastEffect:null,stores:null},en.updateQueue=o,o.lastEffect=r.next=r):(c=o.lastEffect,c===null?o.lastEffect=r.next=r:(h=c.next,c.next=r,r.next=h,o.lastEffect=r)),r}function ig(){return ci().memoizedState}function Xl(r,o,c,h){var g=Oi();en.flags|=r,g.memoizedState=Ma(1|o,c,void 0,h===void 0?null:h)}function jl(r,o,c,h){var g=ci();h=h===void 0?null:h;var y=void 0;if(fn!==null){var T=fn.memoizedState;if(y=T.destroy,h!==null&&Cf(h,T.deps)){g.memoizedState=Ma(o,c,y,h);return}}en.flags|=r,g.memoizedState=Ma(1|o,c,y,h)}function rg(r,o){return Xl(8390656,8,r,o)}function If(r,o){return jl(2048,8,r,o)}function sg(r,o){return jl(4,2,r,o)}function og(r,o){return jl(4,4,r,o)}function ag(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function lg(r,o,c){return c=c!=null?c.concat([r]):null,jl(4,4,ag.bind(null,o,r),c)}function Nf(){}function cg(r,o){var c=ci();o=o===void 0?null:o;var h=c.memoizedState;return h!==null&&o!==null&&Cf(o,h[1])?h[0]:(c.memoizedState=[r,o],r)}function ug(r,o){var c=ci();o=o===void 0?null:o;var h=c.memoizedState;return h!==null&&o!==null&&Cf(o,h[1])?h[0]:(r=r(),c.memoizedState=[r,o],r)}function fg(r,o,c){return(xs&21)===0?(r.baseState&&(r.baseState=!1,Wn=!0),r.memoizedState=c):(yi(c,o)||(c=Be(),en.lanes|=c,ys|=c,r.baseState=!0),o)}function oS(r,o){var c=gt;gt=c!==0&&4>c?c:4,r(!0);var h=Af.transition;Af.transition={};try{r(!1),o()}finally{gt=c,Af.transition=h}}function dg(){return ci().memoizedState}function aS(r,o,c){var h=Gr(r);if(c={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null},hg(r))pg(o,c);else if(c=Wm(r,o,c,h),c!==null){var g=On();wi(c,r,h,g),mg(c,o,h)}}function lS(r,o,c){var h=Gr(r),g={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null};if(hg(r))pg(o,g);else{var y=r.alternate;if(r.lanes===0&&(y===null||y.lanes===0)&&(y=o.lastRenderedReducer,y!==null))try{var T=o.lastRenderedState,U=y(T,c);if(g.hasEagerState=!0,g.eagerState=U,yi(U,T)){var V=o.interleaved;V===null?(g.next=g,Sf(o)):(g.next=V.next,V.next=g),o.interleaved=g;return}}catch{}finally{}c=Wm(r,o,g,h),c!==null&&(g=On(),wi(c,r,h,g),mg(c,o,h))}}function hg(r){var o=r.alternate;return r===en||o!==null&&o===en}function pg(r,o){xa=Wl=!0;var c=r.pending;c===null?o.next=o:(o.next=c.next,c.next=o),r.pending=o}function mg(r,o,c){if((c&4194240)!==0){var h=o.lanes;h&=r.pendingLanes,c|=h,o.lanes=c,Vn(r,c)}}var Yl={readContext:li,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},cS={readContext:li,useCallback:function(r,o){return Oi().memoizedState=[r,o===void 0?null:o],r},useContext:li,useEffect:rg,useImperativeHandle:function(r,o,c){return c=c!=null?c.concat([r]):null,Xl(4194308,4,ag.bind(null,o,r),c)},useLayoutEffect:function(r,o){return Xl(4194308,4,r,o)},useInsertionEffect:function(r,o){return Xl(4,2,r,o)},useMemo:function(r,o){var c=Oi();return o=o===void 0?null:o,r=r(),c.memoizedState=[r,o],r},useReducer:function(r,o,c){var h=Oi();return o=c!==void 0?c(o):o,h.memoizedState=h.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},h.queue=r,r=r.dispatch=aS.bind(null,en,r),[h.memoizedState,r]},useRef:function(r){var o=Oi();return r={current:r},o.memoizedState=r},useState:ng,useDebugValue:Nf,useDeferredValue:function(r){return Oi().memoizedState=r},useTransition:function(){var r=ng(!1),o=r[0];return r=oS.bind(null,r[1]),Oi().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,c){var h=en,g=Oi();if(Kt){if(c===void 0)throw Error(t(407));c=c()}else{if(c=o(),_n===null)throw Error(t(349));(xs&30)!==0||Zm(h,o,c)}g.memoizedState=c;var y={value:c,getSnapshot:o};return g.queue=y,rg(Jm.bind(null,h,y,r),[r]),h.flags|=2048,Ma(9,Qm.bind(null,h,y,c,o),void 0,null),c},useId:function(){var r=Oi(),o=_n.identifierPrefix;if(Kt){var c=lr,h=ar;c=(h&~(1<<32-Te(h)-1)).toString(32)+c,o=":"+o+"R"+c,c=ya++,0<c&&(o+="H"+c.toString(32)),o+=":"}else c=sS++,o=":"+o+"r"+c.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},uS={readContext:li,useCallback:cg,useContext:li,useEffect:If,useImperativeHandle:lg,useInsertionEffect:sg,useLayoutEffect:og,useMemo:ug,useReducer:Df,useRef:ig,useState:function(){return Df(Sa)},useDebugValue:Nf,useDeferredValue:function(r){var o=ci();return fg(o,fn.memoizedState,r)},useTransition:function(){var r=Df(Sa)[0],o=ci().memoizedState;return[r,o]},useMutableSource:qm,useSyncExternalStore:Km,useId:dg,unstable_isNewReconciler:!1},fS={readContext:li,useCallback:cg,useContext:li,useEffect:If,useImperativeHandle:lg,useInsertionEffect:sg,useLayoutEffect:og,useMemo:ug,useReducer:Lf,useRef:ig,useState:function(){return Lf(Sa)},useDebugValue:Nf,useDeferredValue:function(r){var o=ci();return fn===null?o.memoizedState=r:fg(o,fn.memoizedState,r)},useTransition:function(){var r=Lf(Sa)[0],o=ci().memoizedState;return[r,o]},useMutableSource:qm,useSyncExternalStore:Km,useId:dg,unstable_isNewReconciler:!1};function Mi(r,o){if(r&&r.defaultProps){o=se({},o),r=r.defaultProps;for(var c in r)o[c]===void 0&&(o[c]=r[c]);return o}return o}function Ff(r,o,c,h){o=r.memoizedState,c=c(h,o),c=c==null?o:se({},o,c),r.memoizedState=c,r.lanes===0&&(r.updateQueue.baseState=c)}var $l={isMounted:function(r){return(r=r._reactInternals)?Ii(r)===r:!1},enqueueSetState:function(r,o,c){r=r._reactInternals;var h=On(),g=Gr(r),y=ur(h,g);y.payload=o,c!=null&&(y.callback=c),o=Br(r,y,g),o!==null&&(wi(o,r,g,h),zl(o,r,g))},enqueueReplaceState:function(r,o,c){r=r._reactInternals;var h=On(),g=Gr(r),y=ur(h,g);y.tag=1,y.payload=o,c!=null&&(y.callback=c),o=Br(r,y,g),o!==null&&(wi(o,r,g,h),zl(o,r,g))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var c=On(),h=Gr(r),g=ur(c,h);g.tag=2,o!=null&&(g.callback=o),o=Br(r,g,h),o!==null&&(wi(o,r,h,c),zl(o,r,h))}};function gg(r,o,c,h,g,y,T){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,y,T):o.prototype&&o.prototype.isPureReactComponent?!la(c,h)||!la(g,y):!0}function _g(r,o,c){var h=!1,g=Ur,y=o.contextType;return typeof y=="object"&&y!==null?y=li(y):(g=Gn(o)?ps:Tn.current,h=o.contextTypes,y=(h=h!=null)?oo(r,g):Ur),o=new o(c,y),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=$l,r.stateNode=o,o._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=g,r.__reactInternalMemoizedMaskedChildContext=y),o}function vg(r,o,c,h){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(c,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(c,h),o.state!==r&&$l.enqueueReplaceState(o,o.state,null)}function Uf(r,o,c,h){var g=r.stateNode;g.props=c,g.state=r.memoizedState,g.refs={},Mf(r);var y=o.contextType;typeof y=="object"&&y!==null?g.context=li(y):(y=Gn(o)?ps:Tn.current,g.context=oo(r,y)),g.state=r.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(Ff(r,o,y,c),g.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(o=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),o!==g.state&&$l.enqueueReplaceState(g,g.state,null),Vl(r,c,g,h),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308)}function mo(r,o){try{var c="",h=o;do c+=Pe(h),h=h.return;while(h);var g=c}catch(y){g=`
Error generating stack: `+y.message+`
`+y.stack}return{value:r,source:o,stack:g,digest:null}}function Of(r,o,c){return{value:r,source:null,stack:c??null,digest:o??null}}function kf(r,o){try{console.error(o.value)}catch(c){setTimeout(function(){throw c})}}var dS=typeof WeakMap=="function"?WeakMap:Map;function xg(r,o,c){c=ur(-1,c),c.tag=3,c.payload={element:null};var h=o.value;return c.callback=function(){tc||(tc=!0,Jf=h),kf(r,o)},c}function yg(r,o,c){c=ur(-1,c),c.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var g=o.value;c.payload=function(){return h(g)},c.callback=function(){kf(r,o)}}var y=r.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(c.callback=function(){kf(r,o),typeof h!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})}),c}function Sg(r,o,c){var h=r.pingCache;if(h===null){h=r.pingCache=new dS;var g=new Set;h.set(o,g)}else g=h.get(o),g===void 0&&(g=new Set,h.set(o,g));g.has(c)||(g.add(c),r=TS.bind(null,r,o,c),o.then(r,r))}function Mg(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function Eg(r,o,c,h,g){return(r.mode&1)===0?(r===o?r.flags|=65536:(r.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(o=ur(-1,1),o.tag=2,Br(c,o,1))),c.lanes|=1),r):(r.flags|=65536,r.lanes=g,r)}var hS=R.ReactCurrentOwner,Wn=!1;function Un(r,o,c,h){o.child=r===null?Gm(o,null,c,h):uo(o,r.child,c,h)}function bg(r,o,c,h,g){c=c.render;var y=o.ref;return ho(o,g),h=Rf(r,o,c,h,y,g),c=Pf(),r!==null&&!Wn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~g,fr(r,o,g)):(Kt&&c&&df(o),o.flags|=1,Un(r,o,h,g),o.child)}function wg(r,o,c,h,g){if(r===null){var y=c.type;return typeof y=="function"&&!od(y)&&y.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(o.tag=15,o.type=y,Tg(r,o,y,h,g)):(r=ac(c.type,null,h,o,o.mode,g),r.ref=o.ref,r.return=o,o.child=r)}if(y=r.child,(r.lanes&g)===0){var T=y.memoizedProps;if(c=c.compare,c=c!==null?c:la,c(T,h)&&r.ref===o.ref)return fr(r,o,g)}return o.flags|=1,r=Xr(y,h),r.ref=o.ref,r.return=o,o.child=r}function Tg(r,o,c,h,g){if(r!==null){var y=r.memoizedProps;if(la(y,h)&&r.ref===o.ref)if(Wn=!1,o.pendingProps=h=y,(r.lanes&g)!==0)(r.flags&131072)!==0&&(Wn=!0);else return o.lanes=r.lanes,fr(r,o,g)}return Bf(r,o,c,h,g)}function Ag(r,o,c){var h=o.pendingProps,g=h.children,y=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(_o,ti),ti|=c;else{if((c&1073741824)===0)return r=y!==null?y.baseLanes|c:c,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,Ht(_o,ti),ti|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=y!==null?y.baseLanes:c,Ht(_o,ti),ti|=h}else y!==null?(h=y.baseLanes|c,o.memoizedState=null):h=c,Ht(_o,ti),ti|=h;return Un(r,o,g,c),o.child}function Cg(r,o){var c=o.ref;(r===null&&c!==null||r!==null&&r.ref!==c)&&(o.flags|=512,o.flags|=2097152)}function Bf(r,o,c,h,g){var y=Gn(c)?ps:Tn.current;return y=oo(o,y),ho(o,g),c=Rf(r,o,c,h,y,g),h=Pf(),r!==null&&!Wn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~g,fr(r,o,g)):(Kt&&h&&df(o),o.flags|=1,Un(r,o,c,g),o.child)}function Rg(r,o,c,h,g){if(Gn(c)){var y=!0;Ll(o)}else y=!1;if(ho(o,g),o.stateNode===null)Kl(r,o),_g(o,c,h),Uf(o,c,h,g),h=!0;else if(r===null){var T=o.stateNode,U=o.memoizedProps;T.props=U;var V=T.context,ae=c.contextType;typeof ae=="object"&&ae!==null?ae=li(ae):(ae=Gn(c)?ps:Tn.current,ae=oo(o,ae));var ve=c.getDerivedStateFromProps,ye=typeof ve=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==h||V!==ae)&&vg(o,T,h,ae),kr=!1;var _e=o.memoizedState;T.state=_e,Vl(o,h,T,g),V=o.memoizedState,U!==h||_e!==V||Hn.current||kr?(typeof ve=="function"&&(Ff(o,c,ve,h),V=o.memoizedState),(U=kr||gg(o,c,U,h,_e,V,ae))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(o.flags|=4194308)):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=V),T.props=h,T.state=V,T.context=ae,h=U):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{T=o.stateNode,Xm(r,o),U=o.memoizedProps,ae=o.type===o.elementType?U:Mi(o.type,U),T.props=ae,ye=o.pendingProps,_e=T.context,V=c.contextType,typeof V=="object"&&V!==null?V=li(V):(V=Gn(c)?ps:Tn.current,V=oo(o,V));var ze=c.getDerivedStateFromProps;(ve=typeof ze=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==ye||_e!==V)&&vg(o,T,h,V),kr=!1,_e=o.memoizedState,T.state=_e,Vl(o,h,T,g);var Ge=o.memoizedState;U!==ye||_e!==Ge||Hn.current||kr?(typeof ze=="function"&&(Ff(o,c,ze,h),Ge=o.memoizedState),(ae=kr||gg(o,c,ae,h,_e,Ge,V)||!1)?(ve||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,Ge,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,Ge,V)),typeof T.componentDidUpdate=="function"&&(o.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===r.memoizedProps&&_e===r.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===r.memoizedProps&&_e===r.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=Ge),T.props=h,T.state=Ge,T.context=V,h=ae):(typeof T.componentDidUpdate!="function"||U===r.memoizedProps&&_e===r.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===r.memoizedProps&&_e===r.memoizedState||(o.flags|=1024),h=!1)}return zf(r,o,c,h,y,g)}function zf(r,o,c,h,g,y){Cg(r,o);var T=(o.flags&128)!==0;if(!h&&!T)return g&&Nm(o,c,!1),fr(r,o,y);h=o.stateNode,hS.current=o;var U=T&&typeof c.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,r!==null&&T?(o.child=uo(o,r.child,null,y),o.child=uo(o,null,U,y)):Un(r,o,U,y),o.memoizedState=h.state,g&&Nm(o,c,!0),o.child}function Pg(r){var o=r.stateNode;o.pendingContext?Lm(r,o.pendingContext,o.pendingContext!==o.context):o.context&&Lm(r,o.context,!1),Ef(r,o.containerInfo)}function Dg(r,o,c,h,g){return co(),gf(g),o.flags|=256,Un(r,o,c,h),o.child}var Vf={dehydrated:null,treeContext:null,retryLane:0};function Hf(r){return{baseLanes:r,cachePool:null,transitions:null}}function Lg(r,o,c){var h=o.pendingProps,g=Jt.current,y=!1,T=(o.flags&128)!==0,U;if((U=T)||(U=r!==null&&r.memoizedState===null?!1:(g&2)!==0),U?(y=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(g|=1),Ht(Jt,g&1),r===null)return mf(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((o.mode&1)===0?o.lanes=1:r.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(T=h.children,r=h.fallback,y?(h=o.mode,y=o.child,T={mode:"hidden",children:T},(h&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=T):y=lc(T,h,0,null),r=bs(r,h,c,null),y.return=o,r.return=o,y.sibling=r,o.child=y,o.child.memoizedState=Hf(c),o.memoizedState=Vf,r):Gf(o,T));if(g=r.memoizedState,g!==null&&(U=g.dehydrated,U!==null))return pS(r,o,T,h,U,g,c);if(y){y=h.fallback,T=o.mode,g=r.child,U=g.sibling;var V={mode:"hidden",children:h.children};return(T&1)===0&&o.child!==g?(h=o.child,h.childLanes=0,h.pendingProps=V,o.deletions=null):(h=Xr(g,V),h.subtreeFlags=g.subtreeFlags&14680064),U!==null?y=Xr(U,y):(y=bs(y,T,c,null),y.flags|=2),y.return=o,h.return=o,h.sibling=y,o.child=h,h=y,y=o.child,T=r.child.memoizedState,T=T===null?Hf(c):{baseLanes:T.baseLanes|c,cachePool:null,transitions:T.transitions},y.memoizedState=T,y.childLanes=r.childLanes&~c,o.memoizedState=Vf,h}return y=r.child,r=y.sibling,h=Xr(y,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=c),h.return=o,h.sibling=null,r!==null&&(c=o.deletions,c===null?(o.deletions=[r],o.flags|=16):c.push(r)),o.child=h,o.memoizedState=null,h}function Gf(r,o){return o=lc({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function ql(r,o,c,h){return h!==null&&gf(h),uo(o,r.child,null,c),r=Gf(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function pS(r,o,c,h,g,y,T){if(c)return o.flags&256?(o.flags&=-257,h=Of(Error(t(422))),ql(r,o,T,h)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(y=h.fallback,g=o.mode,h=lc({mode:"visible",children:h.children},g,0,null),y=bs(y,g,T,null),y.flags|=2,h.return=o,y.return=o,h.sibling=y,o.child=h,(o.mode&1)!==0&&uo(o,r.child,null,T),o.child.memoizedState=Hf(T),o.memoizedState=Vf,y);if((o.mode&1)===0)return ql(r,o,T,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var U=h.dgst;return h=U,y=Error(t(419)),h=Of(y,h,void 0),ql(r,o,T,h)}if(U=(T&r.childLanes)!==0,Wn||U){if(h=_n,h!==null){switch(T&-T){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(h.suspendedLanes|T))!==0?0:g,g!==0&&g!==y.retryLane&&(y.retryLane=g,cr(r,g),wi(h,r,g,-1))}return sd(),h=Of(Error(t(421))),ql(r,o,T,h)}return g.data==="$?"?(o.flags|=128,o.child=r.child,o=AS.bind(null,r),g._reactRetry=o,null):(r=y.treeContext,ei=Nr(g.nextSibling),Jn=o,Kt=!0,Si=null,r!==null&&(oi[ai++]=ar,oi[ai++]=lr,oi[ai++]=ms,ar=r.id,lr=r.overflow,ms=o),o=Gf(o,h.children),o.flags|=4096,o)}function Ig(r,o,c){r.lanes|=o;var h=r.alternate;h!==null&&(h.lanes|=o),yf(r.return,o,c)}function Wf(r,o,c,h,g){var y=r.memoizedState;y===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:c,tailMode:g}:(y.isBackwards=o,y.rendering=null,y.renderingStartTime=0,y.last=h,y.tail=c,y.tailMode=g)}function Ng(r,o,c){var h=o.pendingProps,g=h.revealOrder,y=h.tail;if(Un(r,o,h.children,c),h=Jt.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Ig(r,c,o);else if(r.tag===19)Ig(r,c,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(Ht(Jt,h),(o.mode&1)===0)o.memoizedState=null;else switch(g){case"forwards":for(c=o.child,g=null;c!==null;)r=c.alternate,r!==null&&Hl(r)===null&&(g=c),c=c.sibling;c=g,c===null?(g=o.child,o.child=null):(g=c.sibling,c.sibling=null),Wf(o,!1,g,c,y);break;case"backwards":for(c=null,g=o.child,o.child=null;g!==null;){if(r=g.alternate,r!==null&&Hl(r)===null){o.child=g;break}r=g.sibling,g.sibling=c,c=g,g=r}Wf(o,!0,c,null,y);break;case"together":Wf(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Kl(r,o){(o.mode&1)===0&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function fr(r,o,c){if(r!==null&&(o.dependencies=r.dependencies),ys|=o.lanes,(c&o.childLanes)===0)return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,c=Xr(r,r.pendingProps),o.child=c,c.return=o;r.sibling!==null;)r=r.sibling,c=c.sibling=Xr(r,r.pendingProps),c.return=o;c.sibling=null}return o.child}function mS(r,o,c){switch(o.tag){case 3:Pg(o),co();break;case 5:$m(o);break;case 1:Gn(o.type)&&Ll(o);break;case 4:Ef(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,g=o.memoizedProps.value;Ht(kl,h._currentValue),h._currentValue=g;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(Ht(Jt,Jt.current&1),o.flags|=128,null):(c&o.child.childLanes)!==0?Lg(r,o,c):(Ht(Jt,Jt.current&1),r=fr(r,o,c),r!==null?r.sibling:null);Ht(Jt,Jt.current&1);break;case 19:if(h=(c&o.childLanes)!==0,(r.flags&128)!==0){if(h)return Ng(r,o,c);o.flags|=128}if(g=o.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Ht(Jt,Jt.current),h)break;return null;case 22:case 23:return o.lanes=0,Ag(r,o,c)}return fr(r,o,c)}var Fg,Xf,Ug,Og;Fg=function(r,o){for(var c=o.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===o)break;for(;c.sibling===null;){if(c.return===null||c.return===o)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},Xf=function(){},Ug=function(r,o,c,h){var g=r.memoizedProps;if(g!==h){r=o.stateNode,vs(Ui.current);var y=null;switch(c){case"input":g=bt(r,g),h=bt(r,h),y=[];break;case"select":g=se({},g,{value:void 0}),h=se({},h,{value:void 0}),y=[];break;case"textarea":g=ft(r,g),h=ft(r,h),y=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=Rl)}ke(c,h);var T;c=null;for(ae in g)if(!h.hasOwnProperty(ae)&&g.hasOwnProperty(ae)&&g[ae]!=null)if(ae==="style"){var U=g[ae];for(T in U)U.hasOwnProperty(T)&&(c||(c={}),c[T]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(s.hasOwnProperty(ae)?y||(y=[]):(y=y||[]).push(ae,null));for(ae in h){var V=h[ae];if(U=g!=null?g[ae]:void 0,h.hasOwnProperty(ae)&&V!==U&&(V!=null||U!=null))if(ae==="style")if(U){for(T in U)!U.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(c||(c={}),c[T]="");for(T in V)V.hasOwnProperty(T)&&U[T]!==V[T]&&(c||(c={}),c[T]=V[T])}else c||(y||(y=[]),y.push(ae,c)),c=V;else ae==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,U=U?U.__html:void 0,V!=null&&U!==V&&(y=y||[]).push(ae,V)):ae==="children"?typeof V!="string"&&typeof V!="number"||(y=y||[]).push(ae,""+V):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(s.hasOwnProperty(ae)?(V!=null&&ae==="onScroll"&&Yt("scroll",r),y||U===V||(y=[])):(y=y||[]).push(ae,V))}c&&(y=y||[]).push("style",c);var ae=y;(o.updateQueue=ae)&&(o.flags|=4)}},Og=function(r,o,c,h){c!==h&&(o.flags|=4)};function Ea(r,o){if(!Kt)switch(r.tailMode){case"hidden":o=r.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r.tail=null:c.sibling=null;break;case"collapsed":c=r.tail;for(var h=null;c!==null;)c.alternate!==null&&(h=c),c=c.sibling;h===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Cn(r){var o=r.alternate!==null&&r.alternate.child===r.child,c=0,h=0;if(o)for(var g=r.child;g!==null;)c|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=r,g=g.sibling;else for(g=r.child;g!==null;)c|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=r,g=g.sibling;return r.subtreeFlags|=h,r.childLanes=c,o}function gS(r,o,c){var h=o.pendingProps;switch(hf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(o),null;case 1:return Gn(o.type)&&Dl(),Cn(o),null;case 3:return h=o.stateNode,po(),$t(Hn),$t(Tn),Tf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Ul(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Si!==null&&(nd(Si),Si=null))),Xf(r,o),Cn(o),null;case 5:bf(o);var g=vs(va.current);if(c=o.type,r!==null&&o.stateNode!=null)Ug(r,o,c,h,g),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Cn(o),null}if(r=vs(Ui.current),Ul(o)){h=o.stateNode,c=o.type;var y=o.memoizedProps;switch(h[Fi]=o,h[ha]=y,r=(o.mode&1)!==0,c){case"dialog":Yt("cancel",h),Yt("close",h);break;case"iframe":case"object":case"embed":Yt("load",h);break;case"video":case"audio":for(g=0;g<ua.length;g++)Yt(ua[g],h);break;case"source":Yt("error",h);break;case"img":case"image":case"link":Yt("error",h),Yt("load",h);break;case"details":Yt("toggle",h);break;case"input":Ft(h,y),Yt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!y.multiple},Yt("invalid",h);break;case"textarea":Pt(h,y),Yt("invalid",h)}ke(c,y),g=null;for(var T in y)if(y.hasOwnProperty(T)){var U=y[T];T==="children"?typeof U=="string"?h.textContent!==U&&(y.suppressHydrationWarning!==!0&&Cl(h.textContent,U,r),g=["children",U]):typeof U=="number"&&h.textContent!==""+U&&(y.suppressHydrationWarning!==!0&&Cl(h.textContent,U,r),g=["children",""+U]):s.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&Yt("scroll",h)}switch(c){case"input":Qe(h),Bt(h,y,!0);break;case"textarea":Qe(h),Xt(h);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(h.onclick=Rl)}h=g,o.updateQueue=h,h!==null&&(o.flags|=4)}else{T=g.nodeType===9?g:g.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=P(c)),r==="http://www.w3.org/1999/xhtml"?c==="script"?(r=T.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=T.createElement(c,{is:h.is}):(r=T.createElement(c),c==="select"&&(T=r,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):r=T.createElementNS(r,c),r[Fi]=o,r[ha]=h,Fg(r,o,!1,!1),o.stateNode=r;e:{switch(T=we(c,h),c){case"dialog":Yt("cancel",r),Yt("close",r),g=h;break;case"iframe":case"object":case"embed":Yt("load",r),g=h;break;case"video":case"audio":for(g=0;g<ua.length;g++)Yt(ua[g],r);g=h;break;case"source":Yt("error",r),g=h;break;case"img":case"image":case"link":Yt("error",r),Yt("load",r),g=h;break;case"details":Yt("toggle",r),g=h;break;case"input":Ft(r,h),g=bt(r,h),Yt("invalid",r);break;case"option":g=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},g=se({},h,{value:void 0}),Yt("invalid",r);break;case"textarea":Pt(r,h),g=ft(r,h),Yt("invalid",r);break;default:g=h}ke(c,g),U=g;for(y in U)if(U.hasOwnProperty(y)){var V=U[y];y==="style"?he(r,V):y==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&de(r,V)):y==="children"?typeof V=="string"?(c!=="textarea"||V!=="")&&me(r,V):typeof V=="number"&&me(r,""+V):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(s.hasOwnProperty(y)?V!=null&&y==="onScroll"&&Yt("scroll",r):V!=null&&D(r,y,V,T))}switch(c){case"input":Qe(r),Bt(r,h,!1);break;case"textarea":Qe(r),Xt(r);break;case"option":h.value!=null&&r.setAttribute("value",""+pe(h.value));break;case"select":r.multiple=!!h.multiple,y=h.value,y!=null?zt(r,!!h.multiple,y,!1):h.defaultValue!=null&&zt(r,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(r.onclick=Rl)}switch(c){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Cn(o),null;case 6:if(r&&o.stateNode!=null)Og(r,o,r.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(c=vs(va.current),vs(Ui.current),Ul(o)){if(h=o.stateNode,c=o.memoizedProps,h[Fi]=o,(y=h.nodeValue!==c)&&(r=Jn,r!==null))switch(r.tag){case 3:Cl(h.nodeValue,c,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Cl(h.nodeValue,c,(r.mode&1)!==0)}y&&(o.flags|=4)}else h=(c.nodeType===9?c:c.ownerDocument).createTextNode(h),h[Fi]=o,o.stateNode=h}return Cn(o),null;case 13:if($t(Jt),h=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Kt&&ei!==null&&(o.mode&1)!==0&&(o.flags&128)===0)zm(),co(),o.flags|=98560,y=!1;else if(y=Ul(o),h!==null&&h.dehydrated!==null){if(r===null){if(!y)throw Error(t(318));if(y=o.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Fi]=o}else co(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Cn(o),y=!1}else Si!==null&&(nd(Si),Si=null),y=!0;if(!y)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=c,o):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(r===null||(Jt.current&1)!==0?dn===0&&(dn=3):sd())),o.updateQueue!==null&&(o.flags|=4),Cn(o),null);case 4:return po(),Xf(r,o),r===null&&fa(o.stateNode.containerInfo),Cn(o),null;case 10:return xf(o.type._context),Cn(o),null;case 17:return Gn(o.type)&&Dl(),Cn(o),null;case 19:if($t(Jt),y=o.memoizedState,y===null)return Cn(o),null;if(h=(o.flags&128)!==0,T=y.rendering,T===null)if(h)Ea(y,!1);else{if(dn!==0||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(T=Hl(r),T!==null){for(o.flags|=128,Ea(y,!1),h=T.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=c,c=o.child;c!==null;)y=c,r=h,y.flags&=14680066,T=y.alternate,T===null?(y.childLanes=0,y.lanes=r,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=T.childLanes,y.lanes=T.lanes,y.child=T.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=T.memoizedProps,y.memoizedState=T.memoizedState,y.updateQueue=T.updateQueue,y.type=T.type,r=T.dependencies,y.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),c=c.sibling;return Ht(Jt,Jt.current&1|2),o.child}r=r.sibling}y.tail!==null&&Qt()>vo&&(o.flags|=128,h=!0,Ea(y,!1),o.lanes=4194304)}else{if(!h)if(r=Hl(T),r!==null){if(o.flags|=128,h=!0,c=r.updateQueue,c!==null&&(o.updateQueue=c,o.flags|=4),Ea(y,!0),y.tail===null&&y.tailMode==="hidden"&&!T.alternate&&!Kt)return Cn(o),null}else 2*Qt()-y.renderingStartTime>vo&&c!==1073741824&&(o.flags|=128,h=!0,Ea(y,!1),o.lanes=4194304);y.isBackwards?(T.sibling=o.child,o.child=T):(c=y.last,c!==null?c.sibling=T:o.child=T,y.last=T)}return y.tail!==null?(o=y.tail,y.rendering=o,y.tail=o.sibling,y.renderingStartTime=Qt(),o.sibling=null,c=Jt.current,Ht(Jt,h?c&1|2:c&1),o):(Cn(o),null);case 22:case 23:return rd(),h=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(ti&1073741824)!==0&&(Cn(o),o.subtreeFlags&6&&(o.flags|=8192)):Cn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function _S(r,o){switch(hf(o),o.tag){case 1:return Gn(o.type)&&Dl(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return po(),$t(Hn),$t(Tn),Tf(),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 5:return bf(o),null;case 13:if($t(Jt),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));co()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return $t(Jt),null;case 4:return po(),null;case 10:return xf(o.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var Zl=!1,Rn=!1,vS=typeof WeakSet=="function"?WeakSet:Set,He=null;function go(r,o){var c=r.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(h){tn(r,o,h)}else c.current=null}function jf(r,o,c){try{c()}catch(h){tn(r,o,h)}}var kg=!1;function xS(r,o){if(rf=_l,r=gm(),qu(r)){if("selectionStart"in r)var c={start:r.selectionStart,end:r.selectionEnd};else e:{c=(c=r.ownerDocument)&&c.defaultView||window;var h=c.getSelection&&c.getSelection();if(h&&h.rangeCount!==0){c=h.anchorNode;var g=h.anchorOffset,y=h.focusNode;h=h.focusOffset;try{c.nodeType,y.nodeType}catch{c=null;break e}var T=0,U=-1,V=-1,ae=0,ve=0,ye=r,_e=null;t:for(;;){for(var ze;ye!==c||g!==0&&ye.nodeType!==3||(U=T+g),ye!==y||h!==0&&ye.nodeType!==3||(V=T+h),ye.nodeType===3&&(T+=ye.nodeValue.length),(ze=ye.firstChild)!==null;)_e=ye,ye=ze;for(;;){if(ye===r)break t;if(_e===c&&++ae===g&&(U=T),_e===y&&++ve===h&&(V=T),(ze=ye.nextSibling)!==null)break;ye=_e,_e=ye.parentNode}ye=ze}c=U===-1||V===-1?null:{start:U,end:V}}else c=null}c=c||{start:0,end:0}}else c=null;for(sf={focusedElem:r,selectionRange:c},_l=!1,He=o;He!==null;)if(o=He,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,He=r;else for(;He!==null;){o=He;try{var Ge=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var je=Ge.memoizedProps,rn=Ge.memoizedState,Q=o.stateNode,W=Q.getSnapshotBeforeUpdate(o.elementType===o.type?je:Mi(o.type,je),rn);Q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var te=o.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){tn(o,o.return,Ee)}if(r=o.sibling,r!==null){r.return=o.return,He=r;break}He=o.return}return Ge=kg,kg=!1,Ge}function ba(r,o,c){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&r)===r){var y=g.destroy;g.destroy=void 0,y!==void 0&&jf(o,c,y)}g=g.next}while(g!==h)}}function Ql(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var c=o=o.next;do{if((c.tag&r)===r){var h=c.create;c.destroy=h()}c=c.next}while(c!==o)}}function Yf(r){var o=r.ref;if(o!==null){var c=r.stateNode;switch(r.tag){case 5:r=c;break;default:r=c}typeof o=="function"?o(r):o.current=r}}function Bg(r){var o=r.alternate;o!==null&&(r.alternate=null,Bg(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[Fi],delete o[ha],delete o[cf],delete o[tS],delete o[nS])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function zg(r){return r.tag===5||r.tag===3||r.tag===4}function Vg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||zg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function $f(r,o,c){var h=r.tag;if(h===5||h===6)r=r.stateNode,o?c.nodeType===8?c.parentNode.insertBefore(r,o):c.insertBefore(r,o):(c.nodeType===8?(o=c.parentNode,o.insertBefore(r,c)):(o=c,o.appendChild(r)),c=c._reactRootContainer,c!=null||o.onclick!==null||(o.onclick=Rl));else if(h!==4&&(r=r.child,r!==null))for($f(r,o,c),r=r.sibling;r!==null;)$f(r,o,c),r=r.sibling}function qf(r,o,c){var h=r.tag;if(h===5||h===6)r=r.stateNode,o?c.insertBefore(r,o):c.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(qf(r,o,c),r=r.sibling;r!==null;)qf(r,o,c),r=r.sibling}var En=null,Ei=!1;function zr(r,o,c){for(c=c.child;c!==null;)Hg(r,o,c),c=c.sibling}function Hg(r,o,c){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(J,c)}catch{}switch(c.tag){case 5:Rn||go(c,o);case 6:var h=En,g=Ei;En=null,zr(r,o,c),En=h,Ei=g,En!==null&&(Ei?(r=En,c=c.stateNode,r.nodeType===8?r.parentNode.removeChild(c):r.removeChild(c)):En.removeChild(c.stateNode));break;case 18:En!==null&&(Ei?(r=En,c=c.stateNode,r.nodeType===8?lf(r.parentNode,c):r.nodeType===1&&lf(r,c),na(r)):lf(En,c.stateNode));break;case 4:h=En,g=Ei,En=c.stateNode.containerInfo,Ei=!0,zr(r,o,c),En=h,Ei=g;break;case 0:case 11:case 14:case 15:if(!Rn&&(h=c.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var y=g,T=y.destroy;y=y.tag,T!==void 0&&((y&2)!==0||(y&4)!==0)&&jf(c,o,T),g=g.next}while(g!==h)}zr(r,o,c);break;case 1:if(!Rn&&(go(c,o),h=c.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=c.memoizedProps,h.state=c.memoizedState,h.componentWillUnmount()}catch(U){tn(c,o,U)}zr(r,o,c);break;case 21:zr(r,o,c);break;case 22:c.mode&1?(Rn=(h=Rn)||c.memoizedState!==null,zr(r,o,c),Rn=h):zr(r,o,c);break;default:zr(r,o,c)}}function Gg(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var c=r.stateNode;c===null&&(c=r.stateNode=new vS),o.forEach(function(h){var g=CS.bind(null,r,h);c.has(h)||(c.add(h),h.then(g,g))})}}function bi(r,o){var c=o.deletions;if(c!==null)for(var h=0;h<c.length;h++){var g=c[h];try{var y=r,T=o,U=T;e:for(;U!==null;){switch(U.tag){case 5:En=U.stateNode,Ei=!1;break e;case 3:En=U.stateNode.containerInfo,Ei=!0;break e;case 4:En=U.stateNode.containerInfo,Ei=!0;break e}U=U.return}if(En===null)throw Error(t(160));Hg(y,T,g),En=null,Ei=!1;var V=g.alternate;V!==null&&(V.return=null),g.return=null}catch(ae){tn(g,o,ae)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Wg(o,r),o=o.sibling}function Wg(r,o){var c=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(bi(o,r),ki(r),h&4){try{ba(3,r,r.return),Ql(3,r)}catch(je){tn(r,r.return,je)}try{ba(5,r,r.return)}catch(je){tn(r,r.return,je)}}break;case 1:bi(o,r),ki(r),h&512&&c!==null&&go(c,c.return);break;case 5:if(bi(o,r),ki(r),h&512&&c!==null&&go(c,c.return),r.flags&32){var g=r.stateNode;try{me(g,"")}catch(je){tn(r,r.return,je)}}if(h&4&&(g=r.stateNode,g!=null)){var y=r.memoizedProps,T=c!==null?c.memoizedProps:y,U=r.type,V=r.updateQueue;if(r.updateQueue=null,V!==null)try{U==="input"&&y.type==="radio"&&y.name!=null&&ut(g,y),we(U,T);var ae=we(U,y);for(T=0;T<V.length;T+=2){var ve=V[T],ye=V[T+1];ve==="style"?he(g,ye):ve==="dangerouslySetInnerHTML"?de(g,ye):ve==="children"?me(g,ye):D(g,ve,ye,ae)}switch(U){case"input":Zt(g,y);break;case"textarea":Le(g,y);break;case"select":var _e=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!y.multiple;var ze=y.value;ze!=null?zt(g,!!y.multiple,ze,!1):_e!==!!y.multiple&&(y.defaultValue!=null?zt(g,!!y.multiple,y.defaultValue,!0):zt(g,!!y.multiple,y.multiple?[]:"",!1))}g[ha]=y}catch(je){tn(r,r.return,je)}}break;case 6:if(bi(o,r),ki(r),h&4){if(r.stateNode===null)throw Error(t(162));g=r.stateNode,y=r.memoizedProps;try{g.nodeValue=y}catch(je){tn(r,r.return,je)}}break;case 3:if(bi(o,r),ki(r),h&4&&c!==null&&c.memoizedState.isDehydrated)try{na(o.containerInfo)}catch(je){tn(r,r.return,je)}break;case 4:bi(o,r),ki(r);break;case 13:bi(o,r),ki(r),g=r.child,g.flags&8192&&(y=g.memoizedState!==null,g.stateNode.isHidden=y,!y||g.alternate!==null&&g.alternate.memoizedState!==null||(Qf=Qt())),h&4&&Gg(r);break;case 22:if(ve=c!==null&&c.memoizedState!==null,r.mode&1?(Rn=(ae=Rn)||ve,bi(o,r),Rn=ae):bi(o,r),ki(r),h&8192){if(ae=r.memoizedState!==null,(r.stateNode.isHidden=ae)&&!ve&&(r.mode&1)!==0)for(He=r,ve=r.child;ve!==null;){for(ye=He=ve;He!==null;){switch(_e=He,ze=_e.child,_e.tag){case 0:case 11:case 14:case 15:ba(4,_e,_e.return);break;case 1:go(_e,_e.return);var Ge=_e.stateNode;if(typeof Ge.componentWillUnmount=="function"){h=_e,c=_e.return;try{o=h,Ge.props=o.memoizedProps,Ge.state=o.memoizedState,Ge.componentWillUnmount()}catch(je){tn(h,c,je)}}break;case 5:go(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Yg(ye);continue}}ze!==null?(ze.return=_e,He=ze):Yg(ye)}ve=ve.sibling}e:for(ve=null,ye=r;;){if(ye.tag===5){if(ve===null){ve=ye;try{g=ye.stateNode,ae?(y=g.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(U=ye.stateNode,V=ye.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,U.style.display=ue("display",T))}catch(je){tn(r,r.return,je)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=ae?"":ye.memoizedProps}catch(je){tn(r,r.return,je)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===r)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===r)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===r)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:bi(o,r),ki(r),h&4&&Gg(r);break;case 21:break;default:bi(o,r),ki(r)}}function ki(r){var o=r.flags;if(o&2){try{e:{for(var c=r.return;c!==null;){if(zg(c)){var h=c;break e}c=c.return}throw Error(t(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(me(g,""),h.flags&=-33);var y=Vg(r);qf(r,y,g);break;case 3:case 4:var T=h.stateNode.containerInfo,U=Vg(r);$f(r,U,T);break;default:throw Error(t(161))}}catch(V){tn(r,r.return,V)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function yS(r,o,c){He=r,Xg(r)}function Xg(r,o,c){for(var h=(r.mode&1)!==0;He!==null;){var g=He,y=g.child;if(g.tag===22&&h){var T=g.memoizedState!==null||Zl;if(!T){var U=g.alternate,V=U!==null&&U.memoizedState!==null||Rn;U=Zl;var ae=Rn;if(Zl=T,(Rn=V)&&!ae)for(He=g;He!==null;)T=He,V=T.child,T.tag===22&&T.memoizedState!==null?$g(g):V!==null?(V.return=T,He=V):$g(g);for(;y!==null;)He=y,Xg(y),y=y.sibling;He=g,Zl=U,Rn=ae}jg(r)}else(g.subtreeFlags&8772)!==0&&y!==null?(y.return=g,He=y):jg(r)}}function jg(r){for(;He!==null;){var o=He;if((o.flags&8772)!==0){var c=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Rn||Ql(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!Rn)if(c===null)h.componentDidMount();else{var g=o.elementType===o.type?c.memoizedProps:Mi(o.type,c.memoizedProps);h.componentDidUpdate(g,c.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var y=o.updateQueue;y!==null&&Ym(o,y,h);break;case 3:var T=o.updateQueue;if(T!==null){if(c=null,o.child!==null)switch(o.child.tag){case 5:c=o.child.stateNode;break;case 1:c=o.child.stateNode}Ym(o,T,c)}break;case 5:var U=o.stateNode;if(c===null&&o.flags&4){c=U;var V=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&c.focus();break;case"img":V.src&&(c.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var ae=o.alternate;if(ae!==null){var ve=ae.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&na(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Rn||o.flags&512&&Yf(o)}catch(_e){tn(o,o.return,_e)}}if(o===r){He=null;break}if(c=o.sibling,c!==null){c.return=o.return,He=c;break}He=o.return}}function Yg(r){for(;He!==null;){var o=He;if(o===r){He=null;break}var c=o.sibling;if(c!==null){c.return=o.return,He=c;break}He=o.return}}function $g(r){for(;He!==null;){var o=He;try{switch(o.tag){case 0:case 11:case 15:var c=o.return;try{Ql(4,o)}catch(V){tn(o,c,V)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var g=o.return;try{h.componentDidMount()}catch(V){tn(o,g,V)}}var y=o.return;try{Yf(o)}catch(V){tn(o,y,V)}break;case 5:var T=o.return;try{Yf(o)}catch(V){tn(o,T,V)}}}catch(V){tn(o,o.return,V)}if(o===r){He=null;break}var U=o.sibling;if(U!==null){U.return=o.return,He=U;break}He=o.return}}var SS=Math.ceil,Jl=R.ReactCurrentDispatcher,Kf=R.ReactCurrentOwner,ui=R.ReactCurrentBatchConfig,Mt=0,_n=null,ln=null,bn=0,ti=0,_o=Fr(0),dn=0,wa=null,ys=0,ec=0,Zf=0,Ta=null,Xn=null,Qf=0,vo=1/0,dr=null,tc=!1,Jf=null,Vr=null,nc=!1,Hr=null,ic=0,Aa=0,ed=null,rc=-1,sc=0;function On(){return(Mt&6)!==0?Qt():rc!==-1?rc:rc=Qt()}function Gr(r){return(r.mode&1)===0?1:(Mt&2)!==0&&bn!==0?bn&-bn:rS.transition!==null?(sc===0&&(sc=Be()),sc):(r=gt,r!==0||(r=window.event,r=r===void 0?16:Kp(r.type)),r)}function wi(r,o,c,h){if(50<Aa)throw Aa=0,ed=null,Error(t(185));mt(r,c,h),((Mt&2)===0||r!==_n)&&(r===_n&&((Mt&2)===0&&(ec|=c),dn===4&&Wr(r,bn)),jn(r,h),c===1&&Mt===0&&(o.mode&1)===0&&(vo=Qt()+500,Il&&Or()))}function jn(r,o){var c=r.callbackNode;Dt(r,o);var h=Vt(r,r===_n?bn:0);if(h===0)c!==null&&ml(c),r.callbackNode=null,r.callbackPriority=0;else if(o=h&-h,r.callbackPriority!==o){if(c!=null&&ml(c),o===1)r.tag===0?iS(Kg.bind(null,r)):Fm(Kg.bind(null,r)),Jy(function(){(Mt&6)===0&&Or()}),c=null;else{switch(rr(h)){case 1:c=Zo;break;case 4:c=C;break;case 16:c=Y;break;case 536870912:c=ee;break;default:c=Y}c=r_(c,qg.bind(null,r))}r.callbackPriority=o,r.callbackNode=c}}function qg(r,o){if(rc=-1,sc=0,(Mt&6)!==0)throw Error(t(327));var c=r.callbackNode;if(xo()&&r.callbackNode!==c)return null;var h=Vt(r,r===_n?bn:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||o)o=oc(r,h);else{o=h;var g=Mt;Mt|=2;var y=Qg();(_n!==r||bn!==o)&&(dr=null,vo=Qt()+500,Ms(r,o));do try{bS();break}catch(U){Zg(r,U)}while(!0);vf(),Jl.current=y,Mt=g,ln!==null?o=0:(_n=null,bn=0,o=dn)}if(o!==0){if(o===2&&(g=an(r),g!==0&&(h=g,o=td(r,g))),o===1)throw c=wa,Ms(r,0),Wr(r,h),jn(r,Qt()),c;if(o===6)Wr(r,h);else{if(g=r.current.alternate,(h&30)===0&&!MS(g)&&(o=oc(r,h),o===2&&(y=an(r),y!==0&&(h=y,o=td(r,y))),o===1))throw c=wa,Ms(r,0),Wr(r,h),jn(r,Qt()),c;switch(r.finishedWork=g,r.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:Es(r,Xn,dr);break;case 3:if(Wr(r,h),(h&130023424)===h&&(o=Qf+500-Qt(),10<o)){if(Vt(r,0)!==0)break;if(g=r.suspendedLanes,(g&h)!==h){On(),r.pingedLanes|=r.suspendedLanes&g;break}r.timeoutHandle=af(Es.bind(null,r,Xn,dr),o);break}Es(r,Xn,dr);break;case 4:if(Wr(r,h),(h&4194240)===h)break;for(o=r.eventTimes,g=-1;0<h;){var T=31-Te(h);y=1<<T,T=o[T],T>g&&(g=T),h&=~y}if(h=g,h=Qt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*SS(h/1960))-h,10<h){r.timeoutHandle=af(Es.bind(null,r,Xn,dr),h);break}Es(r,Xn,dr);break;case 5:Es(r,Xn,dr);break;default:throw Error(t(329))}}}return jn(r,Qt()),r.callbackNode===c?qg.bind(null,r):null}function td(r,o){var c=Ta;return r.current.memoizedState.isDehydrated&&(Ms(r,o).flags|=256),r=oc(r,o),r!==2&&(o=Xn,Xn=c,o!==null&&nd(o)),r}function nd(r){Xn===null?Xn=r:Xn.push.apply(Xn,r)}function MS(r){for(var o=r;;){if(o.flags&16384){var c=o.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var h=0;h<c.length;h++){var g=c[h],y=g.getSnapshot;g=g.value;try{if(!yi(y(),g))return!1}catch{return!1}}}if(c=o.child,o.subtreeFlags&16384&&c!==null)c.return=o,o=c;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Wr(r,o){for(o&=~Zf,o&=~ec,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var c=31-Te(o),h=1<<c;r[c]=-1,o&=~h}}function Kg(r){if((Mt&6)!==0)throw Error(t(327));xo();var o=Vt(r,0);if((o&1)===0)return jn(r,Qt()),null;var c=oc(r,o);if(r.tag!==0&&c===2){var h=an(r);h!==0&&(o=h,c=td(r,h))}if(c===1)throw c=wa,Ms(r,0),Wr(r,o),jn(r,Qt()),c;if(c===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,Es(r,Xn,dr),jn(r,Qt()),null}function id(r,o){var c=Mt;Mt|=1;try{return r(o)}finally{Mt=c,Mt===0&&(vo=Qt()+500,Il&&Or())}}function Ss(r){Hr!==null&&Hr.tag===0&&(Mt&6)===0&&xo();var o=Mt;Mt|=1;var c=ui.transition,h=gt;try{if(ui.transition=null,gt=1,r)return r()}finally{gt=h,ui.transition=c,Mt=o,(Mt&6)===0&&Or()}}function rd(){ti=_o.current,$t(_o)}function Ms(r,o){r.finishedWork=null,r.finishedLanes=0;var c=r.timeoutHandle;if(c!==-1&&(r.timeoutHandle=-1,Qy(c)),ln!==null)for(c=ln.return;c!==null;){var h=c;switch(hf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Dl();break;case 3:po(),$t(Hn),$t(Tn),Tf();break;case 5:bf(h);break;case 4:po();break;case 13:$t(Jt);break;case 19:$t(Jt);break;case 10:xf(h.type._context);break;case 22:case 23:rd()}c=c.return}if(_n=r,ln=r=Xr(r.current,null),bn=ti=o,dn=0,wa=null,Zf=ec=ys=0,Xn=Ta=null,_s!==null){for(o=0;o<_s.length;o++)if(c=_s[o],h=c.interleaved,h!==null){c.interleaved=null;var g=h.next,y=c.pending;if(y!==null){var T=y.next;y.next=g,h.next=T}c.pending=h}_s=null}return r}function Zg(r,o){do{var c=ln;try{if(vf(),Gl.current=Yl,Wl){for(var h=en.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}Wl=!1}if(xs=0,gn=fn=en=null,xa=!1,ya=0,Kf.current=null,c===null||c.return===null){dn=1,wa=o,ln=null;break}e:{var y=r,T=c.return,U=c,V=o;if(o=bn,U.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ae=V,ve=U,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var _e=ve.alternate;_e?(ve.updateQueue=_e.updateQueue,ve.memoizedState=_e.memoizedState,ve.lanes=_e.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var ze=Mg(T);if(ze!==null){ze.flags&=-257,Eg(ze,T,U,y,o),ze.mode&1&&Sg(y,ae,o),o=ze,V=ae;var Ge=o.updateQueue;if(Ge===null){var je=new Set;je.add(V),o.updateQueue=je}else Ge.add(V);break e}else{if((o&1)===0){Sg(y,ae,o),sd();break e}V=Error(t(426))}}else if(Kt&&U.mode&1){var rn=Mg(T);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),Eg(rn,T,U,y,o),gf(mo(V,U));break e}}y=V=mo(V,U),dn!==4&&(dn=2),Ta===null?Ta=[y]:Ta.push(y),y=T;do{switch(y.tag){case 3:y.flags|=65536,o&=-o,y.lanes|=o;var Q=xg(y,V,o);jm(y,Q);break e;case 1:U=V;var W=y.type,te=y.stateNode;if((y.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Vr===null||!Vr.has(te)))){y.flags|=65536,o&=-o,y.lanes|=o;var Ee=yg(y,U,o);jm(y,Ee);break e}}y=y.return}while(y!==null)}e_(c)}catch($e){o=$e,ln===c&&c!==null&&(ln=c=c.return);continue}break}while(!0)}function Qg(){var r=Jl.current;return Jl.current=Yl,r===null?Yl:r}function sd(){(dn===0||dn===3||dn===2)&&(dn=4),_n===null||(ys&268435455)===0&&(ec&268435455)===0||Wr(_n,bn)}function oc(r,o){var c=Mt;Mt|=2;var h=Qg();(_n!==r||bn!==o)&&(dr=null,Ms(r,o));do try{ES();break}catch(g){Zg(r,g)}while(!0);if(vf(),Mt=c,Jl.current=h,ln!==null)throw Error(t(261));return _n=null,bn=0,dn}function ES(){for(;ln!==null;)Jg(ln)}function bS(){for(;ln!==null&&!Fu();)Jg(ln)}function Jg(r){var o=i_(r.alternate,r,ti);r.memoizedProps=r.pendingProps,o===null?e_(r):ln=o,Kf.current=null}function e_(r){var o=r;do{var c=o.alternate;if(r=o.return,(o.flags&32768)===0){if(c=gS(c,o,ti),c!==null){ln=c;return}}else{if(c=_S(c,o),c!==null){c.flags&=32767,ln=c;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{dn=6,ln=null;return}}if(o=o.sibling,o!==null){ln=o;return}ln=o=r}while(o!==null);dn===0&&(dn=5)}function Es(r,o,c){var h=gt,g=ui.transition;try{ui.transition=null,gt=1,wS(r,o,c,h)}finally{ui.transition=g,gt=h}return null}function wS(r,o,c,h){do xo();while(Hr!==null);if((Mt&6)!==0)throw Error(t(327));c=r.finishedWork;var g=r.finishedLanes;if(c===null)return null;if(r.finishedWork=null,r.finishedLanes=0,c===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var y=c.lanes|c.childLanes;if(zn(r,y),r===_n&&(ln=_n=null,bn=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||nc||(nc=!0,r_(Y,function(){return xo(),null})),y=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||y){y=ui.transition,ui.transition=null;var T=gt;gt=1;var U=Mt;Mt|=4,Kf.current=null,xS(r,c),Wg(c,r),Xy(sf),_l=!!rf,sf=rf=null,r.current=c,yS(c),Uu(),Mt=U,gt=T,ui.transition=y}else r.current=c;if(nc&&(nc=!1,Hr=r,ic=g),y=r.pendingLanes,y===0&&(Vr=null),Ve(c.stateNode),jn(r,Qt()),o!==null)for(h=r.onRecoverableError,c=0;c<o.length;c++)g=o[c],h(g.value,{componentStack:g.stack,digest:g.digest});if(tc)throw tc=!1,r=Jf,Jf=null,r;return(ic&1)!==0&&r.tag!==0&&xo(),y=r.pendingLanes,(y&1)!==0?r===ed?Aa++:(Aa=0,ed=r):Aa=0,Or(),null}function xo(){if(Hr!==null){var r=rr(ic),o=ui.transition,c=gt;try{if(ui.transition=null,gt=16>r?16:r,Hr===null)var h=!1;else{if(r=Hr,Hr=null,ic=0,(Mt&6)!==0)throw Error(t(331));var g=Mt;for(Mt|=4,He=r.current;He!==null;){var y=He,T=y.child;if((He.flags&16)!==0){var U=y.deletions;if(U!==null){for(var V=0;V<U.length;V++){var ae=U[V];for(He=ae;He!==null;){var ve=He;switch(ve.tag){case 0:case 11:case 15:ba(8,ve,y)}var ye=ve.child;if(ye!==null)ye.return=ve,He=ye;else for(;He!==null;){ve=He;var _e=ve.sibling,ze=ve.return;if(Bg(ve),ve===ae){He=null;break}if(_e!==null){_e.return=ze,He=_e;break}He=ze}}}var Ge=y.alternate;if(Ge!==null){var je=Ge.child;if(je!==null){Ge.child=null;do{var rn=je.sibling;je.sibling=null,je=rn}while(je!==null)}}He=y}}if((y.subtreeFlags&2064)!==0&&T!==null)T.return=y,He=T;else e:for(;He!==null;){if(y=He,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:ba(9,y,y.return)}var Q=y.sibling;if(Q!==null){Q.return=y.return,He=Q;break e}He=y.return}}var W=r.current;for(He=W;He!==null;){T=He;var te=T.child;if((T.subtreeFlags&2064)!==0&&te!==null)te.return=T,He=te;else e:for(T=W;He!==null;){if(U=He,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ql(9,U)}}catch($e){tn(U,U.return,$e)}if(U===T){He=null;break e}var Ee=U.sibling;if(Ee!==null){Ee.return=U.return,He=Ee;break e}He=U.return}}if(Mt=g,Or(),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(J,r)}catch{}h=!0}return h}finally{gt=c,ui.transition=o}}return!1}function t_(r,o,c){o=mo(c,o),o=xg(r,o,1),r=Br(r,o,1),o=On(),r!==null&&(mt(r,1,o),jn(r,o))}function tn(r,o,c){if(r.tag===3)t_(r,r,c);else for(;o!==null;){if(o.tag===3){t_(o,r,c);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Vr===null||!Vr.has(h))){r=mo(c,r),r=yg(o,r,1),o=Br(o,r,1),r=On(),o!==null&&(mt(o,1,r),jn(o,r));break}}o=o.return}}function TS(r,o,c){var h=r.pingCache;h!==null&&h.delete(o),o=On(),r.pingedLanes|=r.suspendedLanes&c,_n===r&&(bn&c)===c&&(dn===4||dn===3&&(bn&130023424)===bn&&500>Qt()-Qf?Ms(r,0):Zf|=c),jn(r,o)}function n_(r,o){o===0&&((r.mode&1)===0?o=1:(o=Ye,Ye<<=1,(Ye&130023424)===0&&(Ye=4194304)));var c=On();r=cr(r,o),r!==null&&(mt(r,o,c),jn(r,c))}function AS(r){var o=r.memoizedState,c=0;o!==null&&(c=o.retryLane),n_(r,c)}function CS(r,o){var c=0;switch(r.tag){case 13:var h=r.stateNode,g=r.memoizedState;g!==null&&(c=g.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),n_(r,c)}var i_;i_=function(r,o,c){if(r!==null)if(r.memoizedProps!==o.pendingProps||Hn.current)Wn=!0;else{if((r.lanes&c)===0&&(o.flags&128)===0)return Wn=!1,mS(r,o,c);Wn=(r.flags&131072)!==0}else Wn=!1,Kt&&(o.flags&1048576)!==0&&Um(o,Fl,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;Kl(r,o),r=o.pendingProps;var g=oo(o,Tn.current);ho(o,c),g=Rf(null,o,h,r,g,c);var y=Pf();return o.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Gn(h)?(y=!0,Ll(o)):y=!1,o.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Mf(o),g.updater=$l,o.stateNode=g,g._reactInternals=o,Uf(o,h,r,c),o=zf(null,o,h,!0,y,c)):(o.tag=0,Kt&&y&&df(o),Un(null,o,g,c),o=o.child),o;case 16:h=o.elementType;e:{switch(Kl(r,o),r=o.pendingProps,g=h._init,h=g(h._payload),o.type=h,g=o.tag=PS(h),r=Mi(h,r),g){case 0:o=Bf(null,o,h,r,c);break e;case 1:o=Rg(null,o,h,r,c);break e;case 11:o=bg(null,o,h,r,c);break e;case 14:o=wg(null,o,h,Mi(h.type,r),c);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,g=o.pendingProps,g=o.elementType===h?g:Mi(h,g),Bf(r,o,h,g,c);case 1:return h=o.type,g=o.pendingProps,g=o.elementType===h?g:Mi(h,g),Rg(r,o,h,g,c);case 3:e:{if(Pg(o),r===null)throw Error(t(387));h=o.pendingProps,y=o.memoizedState,g=y.element,Xm(r,o),Vl(o,h,null,c);var T=o.memoizedState;if(h=T.element,y.isDehydrated)if(y={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},o.updateQueue.baseState=y,o.memoizedState=y,o.flags&256){g=mo(Error(t(423)),o),o=Dg(r,o,h,c,g);break e}else if(h!==g){g=mo(Error(t(424)),o),o=Dg(r,o,h,c,g);break e}else for(ei=Nr(o.stateNode.containerInfo.firstChild),Jn=o,Kt=!0,Si=null,c=Gm(o,null,h,c),o.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(co(),h===g){o=fr(r,o,c);break e}Un(r,o,h,c)}o=o.child}return o;case 5:return $m(o),r===null&&mf(o),h=o.type,g=o.pendingProps,y=r!==null?r.memoizedProps:null,T=g.children,of(h,g)?T=null:y!==null&&of(h,y)&&(o.flags|=32),Cg(r,o),Un(r,o,T,c),o.child;case 6:return r===null&&mf(o),null;case 13:return Lg(r,o,c);case 4:return Ef(o,o.stateNode.containerInfo),h=o.pendingProps,r===null?o.child=uo(o,null,h,c):Un(r,o,h,c),o.child;case 11:return h=o.type,g=o.pendingProps,g=o.elementType===h?g:Mi(h,g),bg(r,o,h,g,c);case 7:return Un(r,o,o.pendingProps,c),o.child;case 8:return Un(r,o,o.pendingProps.children,c),o.child;case 12:return Un(r,o,o.pendingProps.children,c),o.child;case 10:e:{if(h=o.type._context,g=o.pendingProps,y=o.memoizedProps,T=g.value,Ht(kl,h._currentValue),h._currentValue=T,y!==null)if(yi(y.value,T)){if(y.children===g.children&&!Hn.current){o=fr(r,o,c);break e}}else for(y=o.child,y!==null&&(y.return=o);y!==null;){var U=y.dependencies;if(U!==null){T=y.child;for(var V=U.firstContext;V!==null;){if(V.context===h){if(y.tag===1){V=ur(-1,c&-c),V.tag=2;var ae=y.updateQueue;if(ae!==null){ae=ae.shared;var ve=ae.pending;ve===null?V.next=V:(V.next=ve.next,ve.next=V),ae.pending=V}}y.lanes|=c,V=y.alternate,V!==null&&(V.lanes|=c),yf(y.return,c,o),U.lanes|=c;break}V=V.next}}else if(y.tag===10)T=y.type===o.type?null:y.child;else if(y.tag===18){if(T=y.return,T===null)throw Error(t(341));T.lanes|=c,U=T.alternate,U!==null&&(U.lanes|=c),yf(T,c,o),T=y.sibling}else T=y.child;if(T!==null)T.return=y;else for(T=y;T!==null;){if(T===o){T=null;break}if(y=T.sibling,y!==null){y.return=T.return,T=y;break}T=T.return}y=T}Un(r,o,g.children,c),o=o.child}return o;case 9:return g=o.type,h=o.pendingProps.children,ho(o,c),g=li(g),h=h(g),o.flags|=1,Un(r,o,h,c),o.child;case 14:return h=o.type,g=Mi(h,o.pendingProps),g=Mi(h.type,g),wg(r,o,h,g,c);case 15:return Tg(r,o,o.type,o.pendingProps,c);case 17:return h=o.type,g=o.pendingProps,g=o.elementType===h?g:Mi(h,g),Kl(r,o),o.tag=1,Gn(h)?(r=!0,Ll(o)):r=!1,ho(o,c),_g(o,h,g),Uf(o,h,g,c),zf(null,o,h,!0,r,c);case 19:return Ng(r,o,c);case 22:return Ag(r,o,c)}throw Error(t(156,o.tag))};function r_(r,o){return pl(r,o)}function RS(r,o,c,h){this.tag=r,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(r,o,c,h){return new RS(r,o,c,h)}function od(r){return r=r.prototype,!(!r||!r.isReactComponent)}function PS(r){if(typeof r=="function")return od(r)?1:0;if(r!=null){if(r=r.$$typeof,r===j)return 11;if(r===B)return 14}return 2}function Xr(r,o){var c=r.alternate;return c===null?(c=fi(r.tag,o,r.key,r.mode),c.elementType=r.elementType,c.type=r.type,c.stateNode=r.stateNode,c.alternate=r,r.alternate=c):(c.pendingProps=o,c.type=r.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=r.flags&14680064,c.childLanes=r.childLanes,c.lanes=r.lanes,c.child=r.child,c.memoizedProps=r.memoizedProps,c.memoizedState=r.memoizedState,c.updateQueue=r.updateQueue,o=r.dependencies,c.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},c.sibling=r.sibling,c.index=r.index,c.ref=r.ref,c}function ac(r,o,c,h,g,y){var T=2;if(h=r,typeof r=="function")od(r)&&(T=1);else if(typeof r=="string")T=5;else e:switch(r){case F:return bs(c.children,g,y,o);case w:T=8,g|=8;break;case N:return r=fi(12,c,o,g|2),r.elementType=N,r.lanes=y,r;case ie:return r=fi(13,c,o,g),r.elementType=ie,r.lanes=y,r;case ce:return r=fi(19,c,o,g),r.elementType=ce,r.lanes=y,r;case X:return lc(c,g,y,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case z:T=10;break e;case O:T=9;break e;case j:T=11;break e;case B:T=14;break e;case q:T=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=fi(T,c,o,g),o.elementType=r,o.type=h,o.lanes=y,o}function bs(r,o,c,h){return r=fi(7,r,h,o),r.lanes=c,r}function lc(r,o,c,h){return r=fi(22,r,h,o),r.elementType=X,r.lanes=c,r.stateNode={isHidden:!1},r}function ad(r,o,c){return r=fi(6,r,null,o),r.lanes=c,r}function ld(r,o,c){return o=fi(4,r.children!==null?r.children:[],r.key,o),o.lanes=c,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function DS(r,o,c,h,g){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mn(0),this.expirationTimes=Mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mn(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function cd(r,o,c,h,g,y,T,U,V){return r=new DS(r,o,c,U,V),o===1?(o=1,y===!0&&(o|=8)):o=0,y=fi(3,null,null,o),r.current=y,y.stateNode=r,y.memoizedState={element:h,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mf(y),r}function LS(r,o,c){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:h==null?null:""+h,children:r,containerInfo:o,implementation:c}}function s_(r){if(!r)return Ur;r=r._reactInternals;e:{if(Ii(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Gn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var c=r.type;if(Gn(c))return Im(r,c,o)}return o}function o_(r,o,c,h,g,y,T,U,V){return r=cd(c,h,!0,r,g,y,T,U,V),r.context=s_(null),c=r.current,h=On(),g=Gr(c),y=ur(h,g),y.callback=o??null,Br(c,y,g),r.current.lanes=g,mt(r,g,h),jn(r,h),r}function cc(r,o,c,h){var g=o.current,y=On(),T=Gr(g);return c=s_(c),o.context===null?o.context=c:o.pendingContext=c,o=ur(y,T),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=Br(g,o,T),r!==null&&(wi(r,g,T,y),zl(r,g,T)),T}function uc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function a_(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var c=r.retryLane;r.retryLane=c!==0&&c<o?c:o}}function ud(r,o){a_(r,o),(r=r.alternate)&&a_(r,o)}function IS(){return null}var l_=typeof reportError=="function"?reportError:function(r){console.error(r)};function fd(r){this._internalRoot=r}fc.prototype.render=fd.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));cc(r,o,null,null)},fc.prototype.unmount=fd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;Ss(function(){cc(null,r,null,null)}),o[sr]=null}};function fc(r){this._internalRoot=r}fc.prototype.unstable_scheduleHydration=function(r){if(r){var o=Lt();r={blockedOn:null,target:r,priority:o};for(var c=0;c<Dr.length&&o!==0&&o<Dr[c].priority;c++);Dr.splice(c,0,r),c===0&&$p(r)}};function dd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function dc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function c_(){}function NS(r,o,c,h,g){if(g){if(typeof h=="function"){var y=h;h=function(){var ae=uc(T);y.call(ae)}}var T=o_(o,h,r,0,null,!1,!1,"",c_);return r._reactRootContainer=T,r[sr]=T.current,fa(r.nodeType===8?r.parentNode:r),Ss(),T}for(;g=r.lastChild;)r.removeChild(g);if(typeof h=="function"){var U=h;h=function(){var ae=uc(V);U.call(ae)}}var V=cd(r,0,!1,null,null,!1,!1,"",c_);return r._reactRootContainer=V,r[sr]=V.current,fa(r.nodeType===8?r.parentNode:r),Ss(function(){cc(o,V,c,h)}),V}function hc(r,o,c,h,g){var y=c._reactRootContainer;if(y){var T=y;if(typeof g=="function"){var U=g;g=function(){var V=uc(T);U.call(V)}}cc(o,T,r,g)}else T=NS(c,o,r,g,h);return uc(T)}Rt=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var c=yt(o.pendingLanes);c!==0&&(Vn(o,c|1),jn(o,Qt()),(Mt&6)===0&&(vo=Qt()+500,Or()))}break;case 13:Ss(function(){var h=cr(r,1);if(h!==null){var g=On();wi(h,r,1,g)}}),ud(r,1)}},jt=function(r){if(r.tag===13){var o=cr(r,134217728);if(o!==null){var c=On();wi(o,r,134217728,c)}ud(r,134217728)}},vi=function(r){if(r.tag===13){var o=Gr(r),c=cr(r,o);if(c!==null){var h=On();wi(c,r,o,h)}ud(r,o)}},Lt=function(){return gt},xi=function(r,o){var c=gt;try{return gt=r,o()}finally{gt=c}},rt=function(r,o,c){switch(o){case"input":if(Zt(r,c),o=c.name,c.type==="radio"&&o!=null){for(c=r;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<c.length;o++){var h=c[o];if(h!==r&&h.form===r.form){var g=Pl(h);if(!g)throw Error(t(90));kt(h),Zt(h,g)}}}break;case"textarea":Le(r,c);break;case"select":o=c.value,o!=null&&zt(r,!!c.multiple,o,!1)}},Ae=id,ge=Ss;var FS={usingClientEntryPoint:!1,Events:[pa,ro,Pl,fe,Oe,id]},Ca={findFiberByHostInstance:hs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},US={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=qo(r),r===null?null:r.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||IS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{J=pc.inject(US),Ce=pc}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FS,Yn.createPortal=function(r,o){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dd(o))throw Error(t(200));return LS(r,o,null,c)},Yn.createRoot=function(r,o){if(!dd(r))throw Error(t(299));var c=!1,h="",g=l_;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),o=cd(r,1,!1,null,null,c,!1,h,g),r[sr]=o.current,fa(r.nodeType===8?r.parentNode:r),new fd(o)},Yn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=qo(o),r=r===null?null:r.stateNode,r},Yn.flushSync=function(r){return Ss(r)},Yn.hydrate=function(r,o,c){if(!dc(o))throw Error(t(200));return hc(null,r,o,!0,c)},Yn.hydrateRoot=function(r,o,c){if(!dd(r))throw Error(t(405));var h=c!=null&&c.hydratedSources||null,g=!1,y="",T=l_;if(c!=null&&(c.unstable_strictMode===!0&&(g=!0),c.identifierPrefix!==void 0&&(y=c.identifierPrefix),c.onRecoverableError!==void 0&&(T=c.onRecoverableError)),o=o_(o,null,r,1,c??null,g,!1,y,T),r[sr]=o.current,fa(r),h)for(r=0;r<h.length;r++)c=h[r],g=c._getVersion,g=g(c._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[c,g]:o.mutableSourceEagerHydrationData.push(c,g);return new fc(o)},Yn.render=function(r,o,c){if(!dc(o))throw Error(t(200));return hc(null,r,o,!1,c)},Yn.unmountComponentAtNode=function(r){if(!dc(r))throw Error(t(40));return r._reactRootContainer?(Ss(function(){hc(null,null,r,!1,function(){r._reactRootContainer=null,r[sr]=null})}),!0):!1},Yn.unstable_batchedUpdates=id,Yn.unstable_renderSubtreeIntoContainer=function(r,o,c,h){if(!dc(c))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return hc(r,o,c,!1,h)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var __;function jS(){if(__)return md.exports;__=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),md.exports=XS(),md.exports}var v_;function YS(){if(v_)return mc;v_=1;var n=jS();return mc.createRoot=n.createRoot,mc.hydrateRoot=n.hydrateRoot,mc}var $S=YS(),Gt=hp();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pp="184",qS=0,x_=1,KS=2,Qc=1,ZS=2,Ha=3,os=0,Zn=1,Mr=2,br=0,Fo=1,y_=2,S_=3,M_=4,QS=5,Fs=100,JS=101,eM=102,tM=103,nM=104,iM=200,rM=201,sM=202,oM=203,fh=204,dh=205,aM=206,lM=207,cM=208,uM=209,fM=210,dM=211,hM=212,pM=213,mM=214,hh=0,ph=1,mh=2,Oo=3,gh=4,_h=5,vh=6,xh=7,Ov=0,gM=1,_M=2,qi=0,kv=1,Bv=2,zv=3,Vv=4,Hv=5,Gv=6,Wv=7,Xv=300,Hs=301,ko=302,vd=303,xd=304,wu=306,yh=1e3,Er=1001,Sh=1002,wn=1003,vM=1004,gc=1005,Ln=1006,yd=1007,Os=1008,ri=1009,jv=1010,Yv=1011,Ja=1012,mp=1013,Ji=1014,ji=1015,Tr=1016,gp=1017,_p=1018,el=1020,$v=35902,qv=35899,Kv=1021,Zv=1022,Pi=1023,Ar=1026,ks=1027,Qv=1028,vp=1029,Gs=1030,xp=1031,yp=1033,Jc=33776,eu=33777,tu=33778,nu=33779,Mh=35840,Eh=35841,bh=35842,wh=35843,Th=36196,Ah=37492,Ch=37496,Rh=37488,Ph=37489,cu=37490,Dh=37491,Lh=37808,Ih=37809,Nh=37810,Fh=37811,Uh=37812,Oh=37813,kh=37814,Bh=37815,zh=37816,Vh=37817,Hh=37818,Gh=37819,Wh=37820,Xh=37821,jh=36492,Yh=36494,$h=36495,qh=36283,Kh=36284,uu=36285,Zh=36286,xM=3200,Qh=0,yM=1,es="",pi="srgb",fu="srgb-linear",du="linear",It="srgb",yo=7680,E_=519,SM=512,MM=513,EM=514,Sp=515,bM=516,wM=517,Mp=518,TM=519,b_=35044,w_="300 es",Yi=2e3,tl=2001;function AM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function CM(){const n=hu("canvas");return n.style.display="block",n}const T_={};function A_(...n){const e="THREE."+n.shift();console.log(e,...n)}function Jv(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function it(...n){n=Jv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Et(...n){n=Jv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Jh(...n){const e=n.join(" ");e in T_||(T_[e]=!0,it(...n))}function RM(n,e,t){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const PM={[hh]:ph,[mh]:vh,[gh]:xh,[Oo]:_h,[ph]:hh,[vh]:mh,[xh]:gh,[_h]:Oo};class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sd=Math.PI/180,pu=180/Math.PI;function al(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function DM(n,e){return(n%e+e)%e}function Md(n,e,t){return(1-t)*n+t*e}function Pa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $n(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Hp=class Hp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*i-l*s+e.x,this.y=a*s+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hp.prototype.isVector2=!0;let Ct=Hp;class Wo{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,l,u){let f=i[s+0],d=i[s+1],p=i[s+2],_=i[s+3],m=a[l+0],v=a[l+1],M=a[l+2],E=a[l+3];if(_!==E||f!==m||d!==v||p!==M){let x=f*m+d*v+p*M+_*E;x<0&&(m=-m,v=-v,M=-M,E=-E,x=-x);let S=1-u;if(x<.9995){const A=Math.acos(x),D=Math.sin(A);S=Math.sin(S*A)/D,u=Math.sin(u*A)/D,f=f*S+m*u,d=d*S+v*u,p=p*S+M*u,_=_*S+E*u}else{f=f*S+m*u,d=d*S+v*u,p=p*S+M*u,_=_*S+E*u;const A=1/Math.sqrt(f*f+d*d+p*p+_*_);f*=A,d*=A,p*=A,_*=A}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,s,a,l){const u=i[s],f=i[s+1],d=i[s+2],p=i[s+3],_=a[l],m=a[l+1],v=a[l+2],M=a[l+3];return e[t]=u*M+p*_+f*v-d*m,e[t+1]=f*M+p*m+d*_-u*v,e[t+2]=d*M+p*v+u*m-f*_,e[t+3]=p*M-u*_-f*m-d*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,l=e._order,u=Math.cos,f=Math.sin,d=u(i/2),p=u(s/2),_=u(a/2),m=f(i/2),v=f(s/2),M=f(a/2);switch(l){case"XYZ":this._x=m*p*_+d*v*M,this._y=d*v*_-m*p*M,this._z=d*p*M+m*v*_,this._w=d*p*_-m*v*M;break;case"YXZ":this._x=m*p*_+d*v*M,this._y=d*v*_-m*p*M,this._z=d*p*M-m*v*_,this._w=d*p*_+m*v*M;break;case"ZXY":this._x=m*p*_-d*v*M,this._y=d*v*_+m*p*M,this._z=d*p*M+m*v*_,this._w=d*p*_-m*v*M;break;case"ZYX":this._x=m*p*_-d*v*M,this._y=d*v*_+m*p*M,this._z=d*p*M-m*v*_,this._w=d*p*_+m*v*M;break;case"YZX":this._x=m*p*_+d*v*M,this._y=d*v*_+m*p*M,this._z=d*p*M-m*v*_,this._w=d*p*_-m*v*M;break;case"XZY":this._x=m*p*_-d*v*M,this._y=d*v*_-m*p*M,this._z=d*p*M+m*v*_,this._w=d*p*_+m*v*M;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],l=t[1],u=t[5],f=t[9],d=t[2],p=t[6],_=t[10],m=i+u+_;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(p-f)*v,this._y=(a-d)*v,this._z=(l-s)*v}else if(i>u&&i>_){const v=2*Math.sqrt(1+i-u-_);this._w=(p-f)/v,this._x=.25*v,this._y=(s+l)/v,this._z=(a+d)/v}else if(u>_){const v=2*Math.sqrt(1+u-i-_);this._w=(a-d)/v,this._x=(s+l)/v,this._y=.25*v,this._z=(f+p)/v}else{const v=2*Math.sqrt(1+_-i-u);this._w=(l-s)/v,this._x=(a+d)/v,this._y=(f+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,l=e._w,u=t._x,f=t._y,d=t._z,p=t._w;return this._x=i*p+l*u+s*d-a*f,this._y=s*p+l*f+a*u-i*d,this._z=a*p+l*d+i*f-s*u,this._w=l*p-i*u-s*f-a*d,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,a=e._z,l=e._w,u=this.dot(e);u<0&&(i=-i,s=-s,a=-a,l=-l,u=-u);let f=1-t;if(u<.9995){const d=Math.acos(u),p=Math.sin(d);f=Math.sin(f*d)/p,t=Math.sin(t*d)/p,this._x=this._x*f+i*t,this._y=this._y*f+s*t,this._z=this._z*f+a*t,this._w=this._w*f+l*t,this._onChangeCallback()}else this._x=this._x*f+i*t,this._y=this._y*f+s*t,this._z=this._z*f+a*t,this._w=this._w*f+l*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gp=class Gp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(C_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(C_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,l=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*l,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*l,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*l,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,l=e.y,u=e.z,f=e.w,d=2*(l*s-u*i),p=2*(u*t-a*s),_=2*(a*i-l*t);return this.x=t+f*d+l*_-u*p,this.y=i+f*p+u*d-a*_,this.z=s+f*_+a*p-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,l=t.x,u=t.y,f=t.z;return this.x=s*f-a*u,this.y=a*l-i*f,this.z=i*u-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ed.copy(this).projectOnVector(e),this.sub(Ed)}reflect(e){return this.sub(Ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gp.prototype.isVector3=!0;let ne=Gp;const Ed=new ne,C_=new Wo,Wp=class Wp{constructor(e,t,i,s,a,l,u,f,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,l,u,f,d)}set(e,t,i,s,a,l,u,f,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=l,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,l=i[0],u=i[3],f=i[6],d=i[1],p=i[4],_=i[7],m=i[2],v=i[5],M=i[8],E=s[0],x=s[3],S=s[6],A=s[1],D=s[4],R=s[7],I=s[2],L=s[5],F=s[8];return a[0]=l*E+u*A+f*I,a[3]=l*x+u*D+f*L,a[6]=l*S+u*R+f*F,a[1]=d*E+p*A+_*I,a[4]=d*x+p*D+_*L,a[7]=d*S+p*R+_*F,a[2]=m*E+v*A+M*I,a[5]=m*x+v*D+M*L,a[8]=m*S+v*R+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8];return t*l*p-t*u*d-i*a*p+i*u*f+s*a*d-s*l*f}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8],_=p*l-u*d,m=u*f-p*a,v=d*a-l*f,M=t*_+i*m+s*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=_*E,e[1]=(s*d-p*i)*E,e[2]=(u*i-s*l)*E,e[3]=m*E,e[4]=(p*t-s*f)*E,e[5]=(s*a-u*t)*E,e[6]=v*E,e[7]=(i*f-d*t)*E,e[8]=(l*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,l,u){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*l+d*u)+l+e,-s*d,s*f,-s*(-d*l+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(bd.makeScale(e,t)),this}rotate(e){return this.premultiply(bd.makeRotation(-e)),this}translate(e,t){return this.premultiply(bd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wp.prototype.isMatrix3=!0;let lt=Wp;const bd=new lt,R_=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P_=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LM(){const n={enabled:!0,workingColorSpace:fu,spaces:{},convert:function(s,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===It&&(s.r=wr(s.r),s.g=wr(s.g),s.b=wr(s.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===It&&(s.r=Uo(s.r),s.g=Uo(s.g),s.b=Uo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?du:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,l){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Jh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Jh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fu]:{primaries:e,whitePoint:i,transfer:du,toXYZ:R_,fromXYZ:P_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:i,transfer:It,toXYZ:R_,fromXYZ:P_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),n}const vt=LM();function wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Uo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let So;class IM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{So===void 0&&(So=hu("canvas")),So.width=e.width,So.height=e.height;const s=So.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=So}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=wr(a[l]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wr(t[i]/255)*255):t[i]=wr(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NM=0;class Ep{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=al(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?a.push(wd(s[l].image)):a.push(wd(s[l]))}else a=wd(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function wd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?IM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let FM=0;const Td=new ne;class Bn extends js{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,i=Er,s=Er,a=Ln,l=Os,u=Pi,f=ri,d=Bn.DEFAULT_ANISOTROPY,p=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=al(),this.name="",this.source=new Ep(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Td).x}get height(){return this.source.getSize(Td).y}get depth(){return this.source.getSize(Td).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yh:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yh:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Xv;Bn.DEFAULT_ANISOTROPY=1;const Xp=class Xp{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*s+l[12]*a,this.y=l[1]*t+l[5]*i+l[9]*s+l[13]*a,this.z=l[2]*t+l[6]*i+l[10]*s+l[14]*a,this.w=l[3]*t+l[7]*i+l[11]*s+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const f=e.elements,d=f[0],p=f[4],_=f[8],m=f[1],v=f[5],M=f[9],E=f[2],x=f[6],S=f[10];if(Math.abs(p-m)<.01&&Math.abs(_-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+m)<.1&&Math.abs(_+E)<.1&&Math.abs(M+x)<.1&&Math.abs(d+v+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(d+1)/2,R=(v+1)/2,I=(S+1)/2,L=(p+m)/4,F=(_+E)/4,w=(M+x)/4;return D>R&&D>I?D<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(D),s=L/i,a=F/i):R>I?R<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(R),i=L/s,a=w/s):I<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(I),i=F/a,s=w/a),this.set(i,s,a,t),this}let A=Math.sqrt((x-M)*(x-M)+(_-E)*(_-E)+(m-p)*(m-p));return Math.abs(A)<.001&&(A=1),this.x=(x-M)/A,this.y=(_-E)/A,this.z=(m-p)/A,this.w=Math.acos((d+v+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xp.prototype.isVector4=!0;let nn=Xp;class UM extends js{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},a=new Bn(s),l=i.count;for(let u=0;u<l;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ep(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends UM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ex extends Bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OM extends Bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bu=class bu{constructor(e,t,i,s,a,l,u,f,d,p,_,m,v,M,E,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,l,u,f,d,p,_,m,v,M,E,x)}set(e,t,i,s,a,l,u,f,d,p,_,m,v,M,E,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=s,S[1]=a,S[5]=l,S[9]=u,S[13]=f,S[2]=d,S[6]=p,S[10]=_,S[14]=m,S[3]=v,S[7]=M,S[11]=E,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bu().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Mo.setFromMatrixColumn(e,0).length(),a=1/Mo.setFromMatrixColumn(e,1).length(),l=1/Mo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(s),d=Math.sin(s),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const m=l*p,v=l*_,M=u*p,E=u*_;t[0]=f*p,t[4]=-f*_,t[8]=d,t[1]=v+M*d,t[5]=m-E*d,t[9]=-u*f,t[2]=E-m*d,t[6]=M+v*d,t[10]=l*f}else if(e.order==="YXZ"){const m=f*p,v=f*_,M=d*p,E=d*_;t[0]=m+E*u,t[4]=M*u-v,t[8]=l*d,t[1]=l*_,t[5]=l*p,t[9]=-u,t[2]=v*u-M,t[6]=E+m*u,t[10]=l*f}else if(e.order==="ZXY"){const m=f*p,v=f*_,M=d*p,E=d*_;t[0]=m-E*u,t[4]=-l*_,t[8]=M+v*u,t[1]=v+M*u,t[5]=l*p,t[9]=E-m*u,t[2]=-l*d,t[6]=u,t[10]=l*f}else if(e.order==="ZYX"){const m=l*p,v=l*_,M=u*p,E=u*_;t[0]=f*p,t[4]=M*d-v,t[8]=m*d+E,t[1]=f*_,t[5]=E*d+m,t[9]=v*d-M,t[2]=-d,t[6]=u*f,t[10]=l*f}else if(e.order==="YZX"){const m=l*f,v=l*d,M=u*f,E=u*d;t[0]=f*p,t[4]=E-m*_,t[8]=M*_+v,t[1]=_,t[5]=l*p,t[9]=-u*p,t[2]=-d*p,t[6]=v*_+M,t[10]=m-E*_}else if(e.order==="XZY"){const m=l*f,v=l*d,M=u*f,E=u*d;t[0]=f*p,t[4]=-_,t[8]=d*p,t[1]=m*_+E,t[5]=l*p,t[9]=v*_-M,t[2]=M*_-v,t[6]=u*p,t[10]=E*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kM,e,BM)}lookAt(e,t,i){const s=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Yr.crossVectors(i,ni),Yr.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Yr.crossVectors(i,ni)),Yr.normalize(),_c.crossVectors(ni,Yr),s[0]=Yr.x,s[4]=_c.x,s[8]=ni.x,s[1]=Yr.y,s[5]=_c.y,s[9]=ni.y,s[2]=Yr.z,s[6]=_c.z,s[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,l=i[0],u=i[4],f=i[8],d=i[12],p=i[1],_=i[5],m=i[9],v=i[13],M=i[2],E=i[6],x=i[10],S=i[14],A=i[3],D=i[7],R=i[11],I=i[15],L=s[0],F=s[4],w=s[8],N=s[12],z=s[1],O=s[5],j=s[9],ie=s[13],ce=s[2],B=s[6],q=s[10],X=s[14],$=s[3],le=s[7],se=s[11],k=s[15];return a[0]=l*L+u*z+f*ce+d*$,a[4]=l*F+u*O+f*B+d*le,a[8]=l*w+u*j+f*q+d*se,a[12]=l*N+u*ie+f*X+d*k,a[1]=p*L+_*z+m*ce+v*$,a[5]=p*F+_*O+m*B+v*le,a[9]=p*w+_*j+m*q+v*se,a[13]=p*N+_*ie+m*X+v*k,a[2]=M*L+E*z+x*ce+S*$,a[6]=M*F+E*O+x*B+S*le,a[10]=M*w+E*j+x*q+S*se,a[14]=M*N+E*ie+x*X+S*k,a[3]=A*L+D*z+R*ce+I*$,a[7]=A*F+D*O+R*B+I*le,a[11]=A*w+D*j+R*q+I*se,a[15]=A*N+D*ie+R*X+I*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],l=e[1],u=e[5],f=e[9],d=e[13],p=e[2],_=e[6],m=e[10],v=e[14],M=e[3],E=e[7],x=e[11],S=e[15],A=f*v-d*m,D=u*v-d*_,R=u*m-f*_,I=l*v-d*p,L=l*m-f*p,F=l*_-u*p;return t*(E*A-x*D+S*R)-i*(M*A-x*I+S*L)+s*(M*D-E*I+S*F)-a*(M*R-E*L+x*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8],_=e[9],m=e[10],v=e[11],M=e[12],E=e[13],x=e[14],S=e[15],A=t*u-i*l,D=t*f-s*l,R=t*d-a*l,I=i*f-s*u,L=i*d-a*u,F=s*d-a*f,w=p*E-_*M,N=p*x-m*M,z=p*S-v*M,O=_*x-m*E,j=_*S-v*E,ie=m*S-v*x,ce=A*ie-D*j+R*O+I*z-L*N+F*w;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/ce;return e[0]=(u*ie-f*j+d*O)*B,e[1]=(s*j-i*ie-a*O)*B,e[2]=(E*F-x*L+S*I)*B,e[3]=(m*L-_*F-v*I)*B,e[4]=(f*z-l*ie-d*N)*B,e[5]=(t*ie-s*z+a*N)*B,e[6]=(x*R-M*F-S*D)*B,e[7]=(p*F-m*R+v*D)*B,e[8]=(l*j-u*z+d*w)*B,e[9]=(i*z-t*j-a*w)*B,e[10]=(M*L-E*R+S*A)*B,e[11]=(_*R-p*L-v*A)*B,e[12]=(u*N-l*O-f*w)*B,e[13]=(t*O-i*N+s*w)*B,e[14]=(E*D-M*I-x*A)*B,e[15]=(p*I-_*D+m*A)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,l=e.x,u=e.y,f=e.z,d=a*l,p=a*u;return this.set(d*l+i,d*u-s*f,d*f+s*u,0,d*u+s*f,p*u+i,p*f-s*l,0,d*f-s*u,p*f+s*l,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,l){return this.set(1,i,a,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,l=t._y,u=t._z,f=t._w,d=a+a,p=l+l,_=u+u,m=a*d,v=a*p,M=a*_,E=l*p,x=l*_,S=u*_,A=f*d,D=f*p,R=f*_,I=i.x,L=i.y,F=i.z;return s[0]=(1-(E+S))*I,s[1]=(v+R)*I,s[2]=(M-D)*I,s[3]=0,s[4]=(v-R)*L,s[5]=(1-(m+S))*L,s[6]=(x+A)*L,s[7]=0,s[8]=(M+D)*F,s[9]=(x-A)*F,s[10]=(1-(m+E))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinant();if(a===0)return i.set(1,1,1),t.identity(),this;let l=Mo.set(s[0],s[1],s[2]).length();const u=Mo.set(s[4],s[5],s[6]).length(),f=Mo.set(s[8],s[9],s[10]).length();a<0&&(l=-l),Ti.copy(this);const d=1/l,p=1/u,_=1/f;return Ti.elements[0]*=d,Ti.elements[1]*=d,Ti.elements[2]*=d,Ti.elements[4]*=p,Ti.elements[5]*=p,Ti.elements[6]*=p,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,t.setFromRotationMatrix(Ti),i.x=l,i.y=u,i.z=f,this}makePerspective(e,t,i,s,a,l,u=Yi,f=!1){const d=this.elements,p=2*a/(t-e),_=2*a/(i-s),m=(t+e)/(t-e),v=(i+s)/(i-s);let M,E;if(f)M=a/(l-a),E=l*a/(l-a);else if(u===Yi)M=-(l+a)/(l-a),E=-2*l*a/(l-a);else if(u===tl)M=-l/(l-a),E=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=_,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,a,l,u=Yi,f=!1){const d=this.elements,p=2/(t-e),_=2/(i-s),m=-(t+e)/(t-e),v=-(i+s)/(i-s);let M,E;if(f)M=1/(l-a),E=l/(l-a);else if(u===Yi)M=-2/(l-a),E=-(l+a)/(l-a);else if(u===tl)M=-1/(l-a),E=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=0,d[12]=m,d[1]=0,d[5]=_,d[9]=0,d[13]=v,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};bu.prototype.isMatrix4=!0;let on=bu;const Mo=new ne,Ti=new on,kM=new ne(0,0,0),BM=new ne(1,1,1),Yr=new ne,_c=new ne,ni=new ne,D_=new on,L_=new Wo;class as{constructor(e=0,t=0,i=0,s=as.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],l=s[4],u=s[8],f=s[1],d=s[5],p=s[9],_=s[2],m=s[6],v=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,v),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return D_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(D_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return L_.setFromEuler(this),this.setFromQuaternion(L_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class tx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zM=0;const I_=new ne,Eo=new Wo,hr=new on,vc=new ne,Da=new ne,VM=new ne,HM=new Wo,N_=new ne(1,0,0),F_=new ne(0,1,0),U_=new ne(0,0,1),O_={type:"added"},GM={type:"removed"},bo={type:"childadded",child:null},Ad={type:"childremoved",child:null};class hn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new ne,t=new as,i=new Wo,s=new ne(1,1,1);function a(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new on},normalMatrix:{value:new lt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Eo.setFromAxisAngle(e,t),this.quaternion.multiply(Eo),this}rotateOnWorldAxis(e,t){return Eo.setFromAxisAngle(e,t),this.quaternion.premultiply(Eo),this}rotateX(e){return this.rotateOnAxis(N_,e)}rotateY(e){return this.rotateOnAxis(F_,e)}rotateZ(e){return this.rotateOnAxis(U_,e)}translateOnAxis(e,t){return I_.copy(e).applyQuaternion(this.quaternion),this.position.add(I_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(N_,e)}translateY(e){return this.translateOnAxis(F_,e)}translateZ(e){return this.translateOnAxis(U_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vc.copy(e):vc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(Da,vc,this.up):hr.lookAt(vc,Da,this.up),this.quaternion.setFromRotationMatrix(hr),s&&(hr.extractRotation(s.matrixWorld),Eo.setFromRotationMatrix(hr),this.quaternion.premultiply(Eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(O_),bo.child=e,this.dispatchEvent(bo),bo.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(GM),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(O_),bo.child=e,this.dispatchEvent(bo),bo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,e,VM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,HM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*s,a[13]+=i-a[1]*t-a[5]*i-a[9]*s,a[14]+=s-a[2]*t-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const _=f[d];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(a(e.materials,this.material[f]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(a(e.animations,f))}}if(t){const u=l(e.geometries),f=l(e.materials),d=l(e.textures),p=l(e.images),_=l(e.shapes),m=l(e.skeletons),v=l(e.animations),M=l(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),m.length>0&&(i.skeletons=m),v.length>0&&(i.animations=v),M.length>0&&(i.nodes=M)}return i.object=s,i;function l(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}hn.DEFAULT_UP=new ne(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ga extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class Cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,l=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,i),S=this._getHandJoint(d,E);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],m=p.position.distanceTo(_.position),v=.02,M=.005;d.inputState.pinching&&m>v+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&m<=v-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ga;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Rd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let At=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=vt.workingColorSpace){if(e=DM(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,l=2*i-a;this.r=Rd(l,a,e+1/3),this.g=Rd(l,a,e),this.b=Rd(l,a,e-1/3)}return vt.colorSpaceToWorking(this,s),this}setStyle(e,t=pi){function i(a){a!==void 0&&parseFloat(a)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const i=nx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return vt.workingToColorSpace(Dn.copy(this),e),Math.round(xt(Dn.r*255,0,255))*65536+Math.round(xt(Dn.g*255,0,255))*256+Math.round(xt(Dn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,s=Dn.g,a=Dn.b,l=Math.max(i,s,a),u=Math.min(i,s,a);let f,d;const p=(u+l)/2;if(u===l)f=0,d=0;else{const _=l-u;switch(d=p<=.5?_/(l+u):_/(2-l-u),l){case i:f=(s-a)/_+(s<a?6:0);break;case s:f=(a-i)/_+2;break;case a:f=(i-s)/_+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=pi){vt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,i=Dn.g,s=Dn.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($r),this.setHSL($r.h+e,$r.s+t,$r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($r),e.getHSL(xc);const i=Md($r.h,xc.h,t),s=Md($r.s,xc.s,t),a=Md($r.l,xc.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Dn=new At;At.NAMES=nx;class XM extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ai=new ne,pr=new ne,Pd=new ne,mr=new ne,wo=new ne,To=new ne,k_=new ne,Dd=new ne,Ld=new ne,Id=new ne,Nd=new nn,Fd=new nn,Ud=new nn;class Ri{constructor(e=new ne,t=new ne,i=new ne){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ai.subVectors(e,t),s.cross(Ai);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Ai.subVectors(s,t),pr.subVectors(i,t),Pd.subVectors(e,t);const l=Ai.dot(Ai),u=Ai.dot(pr),f=Ai.dot(Pd),d=pr.dot(pr),p=pr.dot(Pd),_=l*d-u*u;if(_===0)return a.set(0,0,0),null;const m=1/_,v=(d*f-u*p)*m,M=(l*p-u*f)*m;return a.set(1-v-M,M,v)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,t,i,s,a,l,u,f){return this.getBarycoord(e,t,i,s,mr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,mr.x),f.addScaledVector(l,mr.y),f.addScaledVector(u,mr.z),f)}static getInterpolatedAttribute(e,t,i,s,a,l){return Nd.setScalar(0),Fd.setScalar(0),Ud.setScalar(0),Nd.fromBufferAttribute(e,t),Fd.fromBufferAttribute(e,i),Ud.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(Nd,a.x),l.addScaledVector(Fd,a.y),l.addScaledVector(Ud,a.z),l}static isFrontFacing(e,t,i,s){return Ai.subVectors(i,t),pr.subVectors(e,t),Ai.cross(pr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),Ai.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Ri.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let l,u;wo.subVectors(s,i),To.subVectors(a,i),Dd.subVectors(e,i);const f=wo.dot(Dd),d=To.dot(Dd);if(f<=0&&d<=0)return t.copy(i);Ld.subVectors(e,s);const p=wo.dot(Ld),_=To.dot(Ld);if(p>=0&&_<=p)return t.copy(s);const m=f*_-p*d;if(m<=0&&f>=0&&p<=0)return l=f/(f-p),t.copy(i).addScaledVector(wo,l);Id.subVectors(e,a);const v=wo.dot(Id),M=To.dot(Id);if(M>=0&&v<=M)return t.copy(a);const E=v*d-f*M;if(E<=0&&d>=0&&M<=0)return u=d/(d-M),t.copy(i).addScaledVector(To,u);const x=p*M-v*_;if(x<=0&&_-p>=0&&v-M>=0)return k_.subVectors(a,s),u=(_-p)/(_-p+(v-M)),t.copy(s).addScaledVector(k_,u);const S=1/(x+E+m);return l=E*S,u=m*S,t.copy(i).addScaledVector(wo,l).addScaledVector(To,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ll{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=a.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,Ci):Ci.fromBufferAttribute(a,l),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yc.copy(i.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}const s=e.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),Sc.subVectors(this.max,La),Ao.subVectors(e.a,La),Co.subVectors(e.b,La),Ro.subVectors(e.c,La),qr.subVectors(Co,Ao),Kr.subVectors(Ro,Co),ws.subVectors(Ao,Ro);let t=[0,-qr.z,qr.y,0,-Kr.z,Kr.y,0,-ws.z,ws.y,qr.z,0,-qr.x,Kr.z,0,-Kr.x,ws.z,0,-ws.x,-qr.y,qr.x,0,-Kr.y,Kr.x,0,-ws.y,ws.x,0];return!Od(t,Ao,Co,Ro,Sc)||(t=[1,0,0,0,1,0,0,0,1],!Od(t,Ao,Co,Ro,Sc))?!1:(Mc.crossVectors(qr,Kr),t=[Mc.x,Mc.y,Mc.z],Od(t,Ao,Co,Ro,Sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gr=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Ci=new ne,yc=new ll,Ao=new ne,Co=new ne,Ro=new ne,qr=new ne,Kr=new ne,ws=new ne,La=new ne,Sc=new ne,Mc=new ne,Ts=new ne;function Od(n,e,t,i,s){for(let a=0,l=n.length-3;a<=l;a+=3){Ts.fromArray(n,a);const u=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),f=e.dot(Ts),d=t.dot(Ts),p=i.dot(Ts);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>u)return!1}return!0}const cn=new ne,Ec=new Ct;let jM=0;class Zi extends js{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=b_,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ec.fromBufferAttribute(this,t),Ec.applyMatrix3(e),this.setXY(t,Ec.x,Ec.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pa(t,this.array)),t}setX(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pa(t,this.array)),t}setY(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pa(t,this.array)),t}setW(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array),s=$n(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array),s=$n(s,this.array),a=$n(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==b_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ix extends Zi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rx extends Zi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _i extends Zi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const YM=new ll,Ia=new ne,kd=new ne;class bp{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):YM.setFromPoints(e).getCenter(i);let s=0;for(let a=0,l=e.length;a<l;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);const t=Ia.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ia,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(kd)),this.expandByPoint(Ia.copy(e.center).sub(kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $M=0;const di=new on,Bd=new hn,Po=new ne,ii=new ll,Na=new ll,xn=new ne;class tr extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AM(e)?rx:ix)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new lt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,i){return di.makeTranslation(e,t,i),this.applyMatrix4(di),this}scale(e,t,i){return di.makeScale(e,t,i),this.applyMatrix4(di),this}lookAt(e){return Bd.lookAt(e),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Po).negate(),this.translate(Po.x,Po.y,Po.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new _i(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];ii.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const i=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const u=t[a];Na.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(ii.min,Na.min),ii.expandByPoint(xn),xn.addVectors(ii.max,Na.max),ii.expandByPoint(xn)):(ii.expandByPoint(Na.min),ii.expandByPoint(Na.max))}ii.getCenter(i);let s=0;for(let a=0,l=e.count;a<l;a++)xn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(xn));if(t)for(let a=0,l=t.length;a<l;a++){const u=t[a],f=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)xn.fromBufferAttribute(u,d),f&&(Po.fromBufferAttribute(e,d),xn.add(Po)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),u=[],f=[];for(let w=0;w<i.count;w++)u[w]=new ne,f[w]=new ne;const d=new ne,p=new ne,_=new ne,m=new Ct,v=new Ct,M=new Ct,E=new ne,x=new ne;function S(w,N,z){d.fromBufferAttribute(i,w),p.fromBufferAttribute(i,N),_.fromBufferAttribute(i,z),m.fromBufferAttribute(a,w),v.fromBufferAttribute(a,N),M.fromBufferAttribute(a,z),p.sub(d),_.sub(d),v.sub(m),M.sub(m);const O=1/(v.x*M.y-M.x*v.y);isFinite(O)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(_,-v.y).multiplyScalar(O),x.copy(_).multiplyScalar(v.x).addScaledVector(p,-M.x).multiplyScalar(O),u[w].add(E),u[N].add(E),u[z].add(E),f[w].add(x),f[N].add(x),f[z].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let w=0,N=A.length;w<N;++w){const z=A[w],O=z.start,j=z.count;for(let ie=O,ce=O+j;ie<ce;ie+=3)S(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const D=new ne,R=new ne,I=new ne,L=new ne;function F(w){I.fromBufferAttribute(s,w),L.copy(I);const N=u[w];D.copy(N),D.sub(I.multiplyScalar(I.dot(N))).normalize(),R.crossVectors(L,N);const O=R.dot(f[w])<0?-1:1;l.setXYZW(w,D.x,D.y,D.z,O)}for(let w=0,N=A.length;w<N;++w){const z=A[w],O=z.start,j=z.count;for(let ie=O,ce=O+j;ie<ce;ie+=3)F(e.getX(ie+0)),F(e.getX(ie+1)),F(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,v=i.count;m<v;m++)i.setXYZ(m,0,0,0);const s=new ne,a=new ne,l=new ne,u=new ne,f=new ne,d=new ne,p=new ne,_=new ne;if(e)for(let m=0,v=e.count;m<v;m+=3){const M=e.getX(m+0),E=e.getX(m+1),x=e.getX(m+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,x),p.subVectors(l,a),_.subVectors(s,a),p.cross(_),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,x),u.add(p),f.add(p),d.add(p),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let m=0,v=t.count;m<v;m+=3)s.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),p.subVectors(l,a),_.subVectors(s,a),p.cross(_),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(u,f){const d=u.array,p=u.itemSize,_=u.normalized,m=new d.constructor(f.length*p);let v=0,M=0;for(let E=0,x=f.length;E<x;E++){u.isInterleavedBufferAttribute?v=f[E]*u.data.stride+u.offset:v=f[E]*p;for(let S=0;S<p;S++)m[M++]=d[v++]}return new Zi(m,p,_)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tr,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],d=e(f,i);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const f=[],d=a[u];for(let p=0,_=d.length;p<_;p++){const m=d[p],v=e(m,i);f.push(v)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const d=l[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let _=0,m=d.length;_<m;_++){const v=d[_];p.push(v.toJSON(e.data))}p.length>0&&(s[f]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],_=a[d];for(let m=0,v=_.length;m<v;m++)p.push(_[m].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,p=l.length;d<p;d++){const _=l[d];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let qM=0;class cl extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Fo,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(i.blending=this.blending),this.side!==os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fh&&(i.blendSrc=this.blendSrc),this.blendDst!==dh&&(i.blendDst=this.blendDst),this.blendEquation!==Fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==E_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}if(t){const a=s(e.textures),l=s(e.images);a.length>0&&(i.textures=a),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _r=new ne,zd=new ne,bc=new ne,Zr=new ne,Vd=new ne,wc=new ne,Hd=new ne;class KM{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){zd.copy(e).add(t).multiplyScalar(.5),bc.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(zd);const a=e.distanceTo(t)*.5,l=-this.direction.dot(bc),u=Zr.dot(this.direction),f=-Zr.dot(bc),d=Zr.lengthSq(),p=Math.abs(1-l*l);let _,m,v,M;if(p>0)if(_=l*f-u,m=l*u-f,M=a*p,_>=0)if(m>=-M)if(m<=M){const E=1/p;_*=E,m*=E,v=_*(_+l*m+2*u)+m*(l*_+m+2*f)+d}else m=a,_=Math.max(0,-(l*m+u)),v=-_*_+m*(m+2*f)+d;else m=-a,_=Math.max(0,-(l*m+u)),v=-_*_+m*(m+2*f)+d;else m<=-M?(_=Math.max(0,-(-l*a+u)),m=_>0?-a:Math.min(Math.max(-a,-f),a),v=-_*_+m*(m+2*f)+d):m<=M?(_=0,m=Math.min(Math.max(-a,-f),a),v=m*(m+2*f)+d):(_=Math.max(0,-(l*a+u)),m=_>0?a:Math.min(Math.max(-a,-f),a),v=-_*_+m*(m+2*f)+d);else m=l>0?-a:a,_=Math.max(0,-(l*m+u)),v=-_*_+m*(m+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(zd).addScaledVector(bc,m),v}intersectSphere(e,t){_r.subVectors(e.center,this.origin);const i=_r.dot(this.direction),s=_r.dot(_r)-i*i,a=e.radius*e.radius;if(s>a)return null;const l=Math.sqrt(a-s),u=i-l,f=i+l;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,l,u,f;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,m=this.origin;return d>=0?(i=(e.min.x-m.x)*d,s=(e.max.x-m.x)*d):(i=(e.max.x-m.x)*d,s=(e.min.x-m.x)*d),p>=0?(a=(e.min.y-m.y)*p,l=(e.max.y-m.y)*p):(a=(e.max.y-m.y)*p,l=(e.min.y-m.y)*p),i>l||a>s||((a>i||isNaN(i))&&(i=a),(l<s||isNaN(s))&&(s=l),_>=0?(u=(e.min.z-m.z)*_,f=(e.max.z-m.z)*_):(u=(e.max.z-m.z)*_,f=(e.min.z-m.z)*_),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,i,s,a){Vd.subVectors(t,e),wc.subVectors(i,e),Hd.crossVectors(Vd,wc);let l=this.direction.dot(Hd),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;Zr.subVectors(this.origin,e);const f=u*this.direction.dot(wc.crossVectors(Zr,wc));if(f<0)return null;const d=u*this.direction.dot(Vd.cross(Zr));if(d<0||f+d>l)return null;const p=-u*Zr.dot(Hd);return p<0?null:this.at(p/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sx extends cl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const B_=new on,As=new KM,Tc=new bp,z_=new ne,Ac=new ne,Cc=new ne,Rc=new ne,Gd=new ne,Pc=new ne,V_=new ne,Dc=new ne;class Li extends hn{constructor(e=new tr,t=new sx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,l=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){Pc.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=u[f],_=a[f];p!==0&&(Gd.fromBufferAttribute(_,e),l?Pc.addScaledVector(Gd,p):Pc.addScaledVector(Gd.sub(t),p))}t.add(Pc)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(a),As.copy(e.ray).recast(e.near),!(Tc.containsPoint(As.origin)===!1&&(As.intersectSphere(Tc,z_)===null||As.origin.distanceToSquared(z_)>(e.far-e.near)**2))&&(B_.copy(a).invert(),As.copy(e.ray).applyMatrix4(B_),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,i){let s;const a=this.geometry,l=this.material,u=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,m=a.groups,v=a.drawRange;if(u!==null)if(Array.isArray(l))for(let M=0,E=m.length;M<E;M++){const x=m[M],S=l[x.materialIndex],A=Math.max(x.start,v.start),D=Math.min(u.count,Math.min(x.start+x.count,v.start+v.count));for(let R=A,I=D;R<I;R+=3){const L=u.getX(R),F=u.getX(R+1),w=u.getX(R+2);s=Lc(this,S,e,i,d,p,_,L,F,w),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const M=Math.max(0,v.start),E=Math.min(u.count,v.start+v.count);for(let x=M,S=E;x<S;x+=3){const A=u.getX(x),D=u.getX(x+1),R=u.getX(x+2);s=Lc(this,l,e,i,d,p,_,A,D,R),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let M=0,E=m.length;M<E;M++){const x=m[M],S=l[x.materialIndex],A=Math.max(x.start,v.start),D=Math.min(f.count,Math.min(x.start+x.count,v.start+v.count));for(let R=A,I=D;R<I;R+=3){const L=R,F=R+1,w=R+2;s=Lc(this,S,e,i,d,p,_,L,F,w),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const M=Math.max(0,v.start),E=Math.min(f.count,v.start+v.count);for(let x=M,S=E;x<S;x+=3){const A=x,D=x+1,R=x+2;s=Lc(this,l,e,i,d,p,_,A,D,R),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function ZM(n,e,t,i,s,a,l,u){let f;if(e.side===Zn?f=i.intersectTriangle(l,a,s,!0,u):f=i.intersectTriangle(s,a,l,e.side===os,u),f===null)return null;Dc.copy(u),Dc.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(Dc);return d<t.near||d>t.far?null:{distance:d,point:Dc.clone(),object:n}}function Lc(n,e,t,i,s,a,l,u,f,d){n.getVertexPosition(u,Ac),n.getVertexPosition(f,Cc),n.getVertexPosition(d,Rc);const p=ZM(n,e,t,i,Ac,Cc,Rc,V_);if(p){const _=new ne;Ri.getBarycoord(V_,Ac,Cc,Rc,_),s&&(p.uv=Ri.getInterpolatedAttribute(s,u,f,d,_,new Ct)),a&&(p.uv1=Ri.getInterpolatedAttribute(a,u,f,d,_,new Ct)),l&&(p.normal=Ri.getInterpolatedAttribute(l,u,f,d,_,new ne),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:f,c:d,normal:new ne,materialIndex:0};Ri.getNormal(Ac,Cc,Rc,m.normal),p.face=m,p.barycoord=_}return p}class QM extends Bn{constructor(e=null,t=1,i=1,s,a,l,u,f,d=wn,p=wn,_,m){super(null,l,u,f,d,p,s,a,_,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wd=new ne,JM=new ne,eE=new lt;class Ls{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Wd.subVectors(i,t).cross(JM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Wd),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||eE.getNormalMatrix(e),s=this.coplanarPoint(Wd).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new bp,tE=new Ct(.5,.5),Ic=new ne;class wp{constructor(e=new Ls,t=new Ls,i=new Ls,s=new Ls,a=new Ls,l=new Ls){this.planes=[e,t,i,s,a,l]}set(e,t,i,s,a,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(l),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yi,i=!1){const s=this.planes,a=e.elements,l=a[0],u=a[1],f=a[2],d=a[3],p=a[4],_=a[5],m=a[6],v=a[7],M=a[8],E=a[9],x=a[10],S=a[11],A=a[12],D=a[13],R=a[14],I=a[15];if(s[0].setComponents(d-l,v-p,S-M,I-A).normalize(),s[1].setComponents(d+l,v+p,S+M,I+A).normalize(),s[2].setComponents(d+u,v+_,S+E,I+D).normalize(),s[3].setComponents(d-u,v-_,S-E,I-D).normalize(),i)s[4].setComponents(f,m,x,R).normalize(),s[5].setComponents(d-f,v-m,S-x,I-R).normalize();else if(s[4].setComponents(d-f,v-m,S-x,I-R).normalize(),t===Yi)s[5].setComponents(d+f,v+m,S+x,I+R).normalize();else if(t===tl)s[5].setComponents(f,m,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);const t=tE.distanceTo(e.center);return Cs.radius=.7071067811865476+t,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ic.x=s.normal.x>0?e.max.x:e.min.x,Ic.y=s.normal.y>0?e.max.y:e.min.y,Ic.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ox extends Bn{constructor(e=[],t=Hs,i,s,a,l,u,f,d,p){super(e,t,i,s,a,l,u,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bo extends Bn{constructor(e,t,i=Ji,s,a,l,u=wn,f=wn,d,p=Ar,_=1){if(p!==Ar&&p!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:_};super(m,s,a,l,u,f,p,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ep(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nE extends Bo{constructor(e,t=Ji,i=Hs,s,a,l=wn,u=wn,f,d=Ar){const p={width:e,height:e,depth:1},_=[p,p,p,p,p,p];super(e,e,t,i,s,a,l,u,f,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ax extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ul extends tr{constructor(e=1,t=1,i=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:l};const u=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const f=[],d=[],p=[],_=[];let m=0,v=0;M("z","y","x",-1,-1,i,t,e,l,a,0),M("z","y","x",1,-1,i,t,-e,l,a,1),M("x","z","y",1,1,e,i,t,s,l,2),M("x","z","y",1,-1,e,i,-t,s,l,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(f),this.setAttribute("position",new _i(d,3)),this.setAttribute("normal",new _i(p,3)),this.setAttribute("uv",new _i(_,2));function M(E,x,S,A,D,R,I,L,F,w,N){const z=R/F,O=I/w,j=R/2,ie=I/2,ce=L/2,B=F+1,q=w+1;let X=0,$=0;const le=new ne;for(let se=0;se<q;se++){const k=se*O-ie;for(let Z=0;Z<B;Z++){const De=Z*z-j;le[E]=De*A,le[x]=k*D,le[S]=ce,d.push(le.x,le.y,le.z),le[E]=0,le[x]=0,le[S]=L>0?1:-1,p.push(le.x,le.y,le.z),_.push(Z/F),_.push(1-se/w),X+=1}}for(let se=0;se<w;se++)for(let k=0;k<F;k++){const Z=m+k+B*se,De=m+k+B*(se+1),Ne=m+(k+1)+B*(se+1),Pe=m+(k+1)+B*se;f.push(Z,De,Pe),f.push(De,Ne,Pe),$+=6}u.addGroup(v,$,N),v+=$,m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fl extends tr{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,l=t/2,u=Math.floor(i),f=Math.floor(s),d=u+1,p=f+1,_=e/u,m=t/f,v=[],M=[],E=[],x=[];for(let S=0;S<p;S++){const A=S*m-l;for(let D=0;D<d;D++){const R=D*_-a;M.push(R,-A,0),E.push(0,0,1),x.push(D/u),x.push(1-S/f)}}for(let S=0;S<f;S++)for(let A=0;A<u;A++){const D=A+d*S,R=A+d*(S+1),I=A+1+d*(S+1),L=A+1+d*S;v.push(D,R,L),v.push(R,I,L)}this.setIndex(v),this.setAttribute("position",new _i(M,3)),this.setAttribute("normal",new _i(E,3)),this.setAttribute("uv",new _i(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tp extends tr{constructor(e=1,t=32,i=16,s=0,a=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:l,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(l+u,Math.PI);let d=0;const p=[],_=new ne,m=new ne,v=[],M=[],E=[],x=[];for(let S=0;S<=i;S++){const A=[],D=S/i;let R=0;S===0&&l===0?R=.5/t:S===i&&f===Math.PI&&(R=-.5/t);for(let I=0;I<=t;I++){const L=I/t;_.x=-e*Math.cos(s+L*a)*Math.sin(l+D*u),_.y=e*Math.cos(l+D*u),_.z=e*Math.sin(s+L*a)*Math.sin(l+D*u),M.push(_.x,_.y,_.z),m.copy(_).normalize(),E.push(m.x,m.y,m.z),x.push(L+R,1-D),A.push(d++)}p.push(A)}for(let S=0;S<i;S++)for(let A=0;A<t;A++){const D=p[S][A+1],R=p[S][A],I=p[S+1][A],L=p[S+1][A+1];(S!==0||l>0)&&v.push(D,R,L),(S!==i-1||f<Math.PI)&&v.push(R,I,L)}this.setIndex(v),this.setAttribute("position",new _i(M,3)),this.setAttribute("normal",new _i(E,3)),this.setAttribute("uv",new _i(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function zo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(H_(s))s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(H_(s[0])){const a=[];for(let l=0,u=s.length;l<u;l++)a[l]=s[l].clone();e[t][i]=a}else e[t][i]=s.slice();else e[t][i]=s}}return e}function kn(n){const e={};for(let t=0;t<n.length;t++){const i=zo(n[t]);for(const s in i)e[s]=i[s]}return e}function H_(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function iE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const rE={clone:zo,merge:kn};var sE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends cl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sE,this.fragmentShader=oE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=iE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class aE extends er{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class G_ extends cl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lE extends cl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cE extends cl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tu extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class uE extends Tu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Xd=new on,W_=new ne,X_=new ne;class cx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wp,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;W_.setFromMatrixPosition(e.matrixWorld),t.position.copy(W_),X_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(X_),t.updateMatrixWorld(),Xd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===tl||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Nc=new ne,Fc=new Wo,Bi=new ne;class ux extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nc,Fc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nc,Fc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Nc,Fc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nc,Fc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new ne,j_=new Ct,Y_=new Ct;class mi extends ux{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pu*2*Math.atan(Math.tan(Sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,j_,Y_),t.subVectors(Y_,j_)}setViewOffset(e,t,i,s,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sd*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,d=l.fullHeight;a+=l.offsetX*s/f,t-=l.offsetY*i/d,s*=l.width/f,i*=l.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class fE extends cx{constructor(){super(new mi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=pu*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dE extends Tu{constructor(e,t,i=0,s=Math.PI/3,a=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=i,this.angle=s,this.penumbra=a,this.decay=l,this.map=null,this.shadow=new fE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Au extends ux{constructor(e=-1,t=1,i=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,l=i+e,u=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,l=a+d*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,l,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hE extends cx{constructor(){super(new Au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pE extends Tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new hE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class mE extends Tu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Do=-90,Lo=1;class gE extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mi(Do,Lo,e,t);s.layers=this.layers,this.add(s);const a=new mi(Do,Lo,e,t);a.layers=this.layers,this.add(a);const l=new mi(Do,Lo,e,t);l.layers=this.layers,this.add(l);const u=new mi(Do,Lo,e,t);u.layers=this.layers,this.add(u);const f=new mi(Do,Lo,e,t);f.layers=this.layers,this.add(f);const d=new mi(Do,Lo,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,l,u,f]=t;for(const d of t)this.remove(d);if(e===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,u,f,d,p]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(_,m,v),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class _E extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const jp=class jp{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=s,this}};jp.prototype.isMatrix2=!0;let $_=jp;function q_(n,e,t,i){const s=vE(i);switch(t){case Kv:return n*e;case Qv:return n*e/s.components*s.byteLength;case vp:return n*e/s.components*s.byteLength;case Gs:return n*e*2/s.components*s.byteLength;case xp:return n*e*2/s.components*s.byteLength;case Zv:return n*e*3/s.components*s.byteLength;case Pi:return n*e*4/s.components*s.byteLength;case yp:return n*e*4/s.components*s.byteLength;case Jc:case eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tu:case nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eh:case wh:return Math.max(n,16)*Math.max(e,8)/4;case Mh:case bh:return Math.max(n,8)*Math.max(e,8)/2;case Th:case Ah:case Rh:case Ph:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ch:case cu:case Dh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jh:case Yh:case $h:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qh:case Kh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case uu:case Zh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vE(n){switch(n){case ri:case jv:return{byteLength:1,components:1};case Ja:case Yv:case Tr:return{byteLength:2,components:1};case gp:case _p:return{byteLength:2,components:4};case Ji:case mp:case ji:return{byteLength:4,components:1};case $v:case qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pp}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fx(){let n=null,e=!1,t=null,i=null;function s(a,l){t(a,l),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function xE(n){const e=new WeakMap;function t(u,f){const d=u.array,p=u.usage,_=d.byteLength,m=n.createBuffer();n.bindBuffer(f,m),n.bufferData(f,d,p),u.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)v=n.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?v=n.HALF_FLOAT:v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:_}}function i(u,f,d){const p=f.array,_=f.updateRanges;if(n.bindBuffer(d,u),_.length===0)n.bufferSubData(d,0,p);else{_.sort((v,M)=>v.start-M.start);let m=0;for(let v=1;v<_.length;v++){const M=_[m],E=_[v];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++m,_[m]=E)}_.length=m+1;for(let v=0,M=_.length;v<M;v++){const E=_[v];n.bufferSubData(d,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(n.deleteBuffer(f.buffer),e.delete(u))}function l(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:s,remove:a,update:l}}var yE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ME=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,RE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,VE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,HE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,GE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ob=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ab=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,db=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_b=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,s1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,x1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,A1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,C1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,R1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,H1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:yE,alphahash_pars_fragment:SE,alphamap_fragment:ME,alphamap_pars_fragment:EE,alphatest_fragment:bE,alphatest_pars_fragment:wE,aomap_fragment:TE,aomap_pars_fragment:AE,batching_pars_vertex:CE,batching_vertex:RE,begin_vertex:PE,beginnormal_vertex:DE,bsdfs:LE,iridescence_fragment:IE,bumpmap_pars_fragment:NE,clipping_planes_fragment:FE,clipping_planes_pars_fragment:UE,clipping_planes_pars_vertex:OE,clipping_planes_vertex:kE,color_fragment:BE,color_pars_fragment:zE,color_pars_vertex:VE,color_vertex:HE,common:GE,cube_uv_reflection_fragment:WE,defaultnormal_vertex:XE,displacementmap_pars_vertex:jE,displacementmap_vertex:YE,emissivemap_fragment:$E,emissivemap_pars_fragment:qE,colorspace_fragment:KE,colorspace_pars_fragment:ZE,envmap_fragment:QE,envmap_common_pars_fragment:JE,envmap_pars_fragment:eb,envmap_pars_vertex:tb,envmap_physical_pars_fragment:db,envmap_vertex:nb,fog_vertex:ib,fog_pars_vertex:rb,fog_fragment:sb,fog_pars_fragment:ob,gradientmap_pars_fragment:ab,lightmap_pars_fragment:lb,lights_lambert_fragment:cb,lights_lambert_pars_fragment:ub,lights_pars_begin:fb,lights_toon_fragment:hb,lights_toon_pars_fragment:pb,lights_phong_fragment:mb,lights_phong_pars_fragment:gb,lights_physical_fragment:_b,lights_physical_pars_fragment:vb,lights_fragment_begin:xb,lights_fragment_maps:yb,lights_fragment_end:Sb,lightprobes_pars_fragment:Mb,logdepthbuf_fragment:Eb,logdepthbuf_pars_fragment:bb,logdepthbuf_pars_vertex:wb,logdepthbuf_vertex:Tb,map_fragment:Ab,map_pars_fragment:Cb,map_particle_fragment:Rb,map_particle_pars_fragment:Pb,metalnessmap_fragment:Db,metalnessmap_pars_fragment:Lb,morphinstance_vertex:Ib,morphcolor_vertex:Nb,morphnormal_vertex:Fb,morphtarget_pars_vertex:Ub,morphtarget_vertex:Ob,normal_fragment_begin:kb,normal_fragment_maps:Bb,normal_pars_fragment:zb,normal_pars_vertex:Vb,normal_vertex:Hb,normalmap_pars_fragment:Gb,clearcoat_normal_fragment_begin:Wb,clearcoat_normal_fragment_maps:Xb,clearcoat_pars_fragment:jb,iridescence_pars_fragment:Yb,opaque_fragment:$b,packing:qb,premultiplied_alpha_fragment:Kb,project_vertex:Zb,dithering_fragment:Qb,dithering_pars_fragment:Jb,roughnessmap_fragment:e1,roughnessmap_pars_fragment:t1,shadowmap_pars_fragment:n1,shadowmap_pars_vertex:i1,shadowmap_vertex:r1,shadowmask_pars_fragment:s1,skinbase_vertex:o1,skinning_pars_vertex:a1,skinning_vertex:l1,skinnormal_vertex:c1,specularmap_fragment:u1,specularmap_pars_fragment:f1,tonemapping_fragment:d1,tonemapping_pars_fragment:h1,transmission_fragment:p1,transmission_pars_fragment:m1,uv_pars_fragment:g1,uv_pars_vertex:_1,uv_vertex:v1,worldpos_vertex:x1,background_vert:y1,background_frag:S1,backgroundCube_vert:M1,backgroundCube_frag:E1,cube_vert:b1,cube_frag:w1,depth_vert:T1,depth_frag:A1,distance_vert:C1,distance_frag:R1,equirect_vert:P1,equirect_frag:D1,linedashed_vert:L1,linedashed_frag:I1,meshbasic_vert:N1,meshbasic_frag:F1,meshlambert_vert:U1,meshlambert_frag:O1,meshmatcap_vert:k1,meshmatcap_frag:B1,meshnormal_vert:z1,meshnormal_frag:V1,meshphong_vert:H1,meshphong_frag:G1,meshphysical_vert:W1,meshphysical_frag:X1,meshtoon_vert:j1,meshtoon_frag:Y1,points_vert:$1,points_frag:q1,shadow_vert:K1,shadow_frag:Z1,sprite_vert:Q1,sprite_frag:J1},Ie={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Xi={basic:{uniforms:kn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:kn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:kn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:kn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:kn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new At(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:kn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:kn([Ie.points,Ie.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:kn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:kn([Ie.common,Ie.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:kn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:kn([Ie.sprite,Ie.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:kn([Ie.common,Ie.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:kn([Ie.lights,Ie.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Xi.physical={uniforms:kn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Uc={r:0,b:0,g:0},ew=new on,dx=new lt;dx.set(-1,0,0,0,1,0,0,0,1);function tw(n,e,t,i,s,a){const l=new At(0);let u=s===!0?0:1,f,d,p=null,_=0,m=null;function v(A){let D=A.isScene===!0?A.background:null;if(D&&D.isTexture){const R=A.backgroundBlurriness>0;D=e.get(D,R)}return D}function M(A){let D=!1;const R=v(A);R===null?x(l,u):R&&R.isColor&&(x(R,1),D=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(A,D){const R=v(D);R&&(R.isCubeTexture||R.mapping===wu)?(d===void 0&&(d=new Li(new ul(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:zo(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ew.makeRotationFromEuler(D.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(dx),d.material.toneMapped=vt.getTransfer(R.colorSpace)!==It,(p!==R||_!==R.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,p=R,_=R.version,m=n.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(f===void 0&&(f=new Li(new fl(2,2),new er({name:"BackgroundMaterial",uniforms:zo(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=R,f.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,f.material.toneMapped=vt.getTransfer(R.colorSpace)!==It,R.matrixAutoUpdate===!0&&R.updateMatrix(),f.material.uniforms.uvTransform.value.copy(R.matrix),(p!==R||_!==R.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,p=R,_=R.version,m=n.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null))}function x(A,D){A.getRGB(Uc,lx(n)),t.buffers.color.setClear(Uc.r,Uc.g,Uc.b,D,a)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return l},setClearColor:function(A,D=1){l.set(A),u=D,x(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(A){u=A,x(l,u)},render:M,addToRenderList:E,dispose:S}}function nw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null);let a=s,l=!1;function u(O,j,ie,ce,B){let q=!1;const X=_(O,ce,ie,j);a!==X&&(a=X,d(a.object)),q=v(O,ce,ie,B),q&&M(O,ce,ie,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(q||l)&&(l=!1,R(O,j,ie,ce),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function f(){return n.createVertexArray()}function d(O){return n.bindVertexArray(O)}function p(O){return n.deleteVertexArray(O)}function _(O,j,ie,ce){const B=ce.wireframe===!0;let q=i[j.id];q===void 0&&(q={},i[j.id]=q);const X=O.isInstancedMesh===!0?O.id:0;let $=q[X];$===void 0&&($={},q[X]=$);let le=$[ie.id];le===void 0&&(le={},$[ie.id]=le);let se=le[B];return se===void 0&&(se=m(f()),le[B]=se),se}function m(O){const j=[],ie=[],ce=[];for(let B=0;B<t;B++)j[B]=0,ie[B]=0,ce[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ie,attributeDivisors:ce,object:O,attributes:{},index:null}}function v(O,j,ie,ce){const B=a.attributes,q=j.attributes;let X=0;const $=ie.getAttributes();for(const le in $)if($[le].location>=0){const k=B[le];let Z=q[le];if(Z===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(Z=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(Z=O.instanceColor)),k===void 0||k.attribute!==Z||Z&&k.data!==Z.data)return!0;X++}return a.attributesNum!==X||a.index!==ce}function M(O,j,ie,ce){const B={},q=j.attributes;let X=0;const $=ie.getAttributes();for(const le in $)if($[le].location>=0){let k=q[le];k===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(k=O.instanceColor));const Z={};Z.attribute=k,k&&k.data&&(Z.data=k.data),B[le]=Z,X++}a.attributes=B,a.attributesNum=X,a.index=ce}function E(){const O=a.newAttributes;for(let j=0,ie=O.length;j<ie;j++)O[j]=0}function x(O){S(O,0)}function S(O,j){const ie=a.newAttributes,ce=a.enabledAttributes,B=a.attributeDivisors;ie[O]=1,ce[O]===0&&(n.enableVertexAttribArray(O),ce[O]=1),B[O]!==j&&(n.vertexAttribDivisor(O,j),B[O]=j)}function A(){const O=a.newAttributes,j=a.enabledAttributes;for(let ie=0,ce=j.length;ie<ce;ie++)j[ie]!==O[ie]&&(n.disableVertexAttribArray(ie),j[ie]=0)}function D(O,j,ie,ce,B,q,X){X===!0?n.vertexAttribIPointer(O,j,ie,B,q):n.vertexAttribPointer(O,j,ie,ce,B,q)}function R(O,j,ie,ce){E();const B=ce.attributes,q=ie.getAttributes(),X=j.defaultAttributeValues;for(const $ in q){const le=q[$];if(le.location>=0){let se=B[$];if(se===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),se!==void 0){const k=se.normalized,Z=se.itemSize,De=e.get(se);if(De===void 0)continue;const Ne=De.buffer,Pe=De.type,re=De.bytesPerElement,xe=Pe===n.INT||Pe===n.UNSIGNED_INT||se.gpuType===mp;if(se.isInterleavedBufferAttribute){const pe=se.data,Fe=pe.stride,Ze=se.offset;if(pe.isInstancedInterleavedBuffer){for(let Qe=0;Qe<le.locationSize;Qe++)S(le.location+Qe,pe.meshPerAttribute);O.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Qe=0;Qe<le.locationSize;Qe++)x(le.location+Qe);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Qe=0;Qe<le.locationSize;Qe++)D(le.location+Qe,Z/le.locationSize,Pe,k,Fe*re,(Ze+Z/le.locationSize*Qe)*re,xe)}else{if(se.isInstancedBufferAttribute){for(let pe=0;pe<le.locationSize;pe++)S(le.location+pe,se.meshPerAttribute);O.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let pe=0;pe<le.locationSize;pe++)x(le.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let pe=0;pe<le.locationSize;pe++)D(le.location+pe,Z/le.locationSize,Pe,k,Z*re,Z/le.locationSize*pe*re,xe)}}else if(X!==void 0){const k=X[$];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(le.location,k);break;case 3:n.vertexAttrib3fv(le.location,k);break;case 4:n.vertexAttrib4fv(le.location,k);break;default:n.vertexAttrib1fv(le.location,k)}}}}A()}function I(){N();for(const O in i){const j=i[O];for(const ie in j){const ce=j[ie];for(const B in ce){const q=ce[B];for(const X in q)p(q[X].object),delete q[X];delete ce[B]}}delete i[O]}}function L(O){if(i[O.id]===void 0)return;const j=i[O.id];for(const ie in j){const ce=j[ie];for(const B in ce){const q=ce[B];for(const X in q)p(q[X].object),delete q[X];delete ce[B]}}delete i[O.id]}function F(O){for(const j in i){const ie=i[j];for(const ce in ie){const B=ie[ce];if(B[O.id]===void 0)continue;const q=B[O.id];for(const X in q)p(q[X].object),delete q[X];delete B[O.id]}}}function w(O){for(const j in i){const ie=i[j],ce=O.isInstancedMesh===!0?O.id:0,B=ie[ce];if(B!==void 0){for(const q in B){const X=B[q];for(const $ in X)p(X[$].object),delete X[$];delete B[q]}delete ie[ce],Object.keys(ie).length===0&&delete i[j]}}}function N(){z(),l=!0,a!==s&&(a=s,d(a.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:N,resetDefaultState:z,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:w,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:x,disableUnusedAttributes:A}}function iw(n,e,t){let i;function s(f){i=f}function a(f,d){n.drawArrays(i,f,d),t.update(d,i,1)}function l(f,d,p){p!==0&&(n.drawArraysInstanced(i,f,d,p),t.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,d,0,p);let m=0;for(let v=0;v<p;v++)m+=d[v];t.update(m,i,1)}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function rw(n,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(F){return!(F!==Pi&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const w=F===Tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ri&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ji&&!w)}function f(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=f(d);p!==d&&(it("WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const _=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:v,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:R,maxSamples:I,samples:L}}function sw(n){const e=this;let t=null,i=0,s=!1,a=!1;const l=new Ls,u=new lt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const v=_.length!==0||m||i!==0||s;return s=m,i=_.length,v},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,m){t=p(_,m,0)},this.setState=function(_,m,v){const M=_.clippingPlanes,E=_.clipIntersection,x=_.clipShadows,S=n.get(_);if(!s||M===null||M.length===0||a&&!x)a?p(null):d();else{const A=a?0:i,D=A*4;let R=S.clippingState||null;f.value=R,R=p(M,m,D,v);for(let I=0;I!==D;++I)R[I]=t[I];S.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,m,v,M){const E=_!==null?_.length:0;let x=null;if(E!==0){if(x=f.value,M!==!0||x===null){const S=v+E*4,A=m.matrixWorldInverse;u.getNormalMatrix(A),(x===null||x.length<S)&&(x=new Float32Array(S));for(let D=0,R=v;D!==E;++D,R+=4)l.copy(_[D]).applyMatrix4(A,u),l.normal.toArray(x,R),x[R+3]=l.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}const ts=4,K_=[.125,.215,.35,.446,.526,.582],Us=20,ow=256,Fa=new Au,Z_=new At;let jd=null,Yd=0,$d=0,qd=!1;const aw=new ne;class Q_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){const{size:l=256,position:u=aw}=a;jd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,s,f,u),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jd,Yd,$d),this._renderer.xr.enabled=qd,e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Tr,format:Pi,colorSpace:fu,depthBuffer:!1},s=J_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=J_(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lw(a)),this._blurMaterial=uw(a,e,t),this._ggxMaterial=cw(a,e,t)}return s}_compileMaterial(e){const t=new Li(new tr,e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,i,s,a){const f=new mi(90,1,t,i),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,v=_.toneMapping;_.getClearColor(Z_),_.toneMapping=qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new ul,new sx({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let S=!1;const A=e.background;A?A.isColor&&(x.color.copy(A),e.background=null,S=!0):(x.color.copy(Z_),S=!0);for(let D=0;D<6;D++){const R=D%3;R===0?(f.up.set(0,d[D],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[D],a.y,a.z)):R===1?(f.up.set(0,0,d[D]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[D],a.z)):(f.up.set(0,d[D],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[D]));const I=this._cubeSize;Io(s,R*I,D>2?I:0,I,I),_.setRenderTarget(s),S&&_.render(E,f),_.render(e,f)}_.toneMapping=v,_.autoClear=m,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Hs||e.mapping===ko;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=t0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e0());const a=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=a;const u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;Io(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(l,Fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,a=this._pingPongRenderTarget,l=this._ggxMaterial,u=this._lodMeshes[i];u.material=l;const f=l.uniforms,d=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),_=Math.sqrt(d*d-p*p),m=0+d*1.25,v=_*m,{_lodMax:M}=this,E=this._sizeLods[i],x=3*E*(i>M-ts?i-M+ts:0),S=4*(this._cubeSize-E);f.envMap.value=e.texture,f.roughness.value=v,f.mipInt.value=M-t,Io(a,x,S,3*E,2*E),s.setRenderTarget(a),s.render(u,Fa),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=M-i,Io(e,x,S,3*E,2*E),s.setRenderTarget(e),s.render(u,Fa)}_blur(e,t,i,s,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,i,s,"latitudinal",a),this._halfBlur(l,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,l,u){const f=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const p=3,_=this._lodMeshes[s];_.material=d;const m=d.uniforms,v=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*Us-1),E=a/M,x=isFinite(a)?1+Math.floor(p*E):Us;x>Us&&it(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Us}`);const S=[];let A=0;for(let F=0;F<Us;++F){const w=F/E,N=Math.exp(-w*w/2);S.push(N),F===0?A+=N:F<x&&(A+=2*N)}for(let F=0;F<S.length;F++)S[F]=S[F]/A;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=S,m.latitudinal.value=l==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:D}=this;m.dTheta.value=M,m.mipInt.value=D-i;const R=this._sizeLods[s],I=3*R*(s>D-ts?s-D+ts:0),L=4*(this._cubeSize-R);Io(t,I,L,3*R,2*R),f.setRenderTarget(t),f.render(_,Fa)}}function lw(n){const e=[],t=[],i=[];let s=n;const a=n-ts+1+K_.length;for(let l=0;l<a;l++){const u=Math.pow(2,s);e.push(u);let f=1/u;l>n-ts?f=K_[l-n+ts-1]:l===0&&(f=0),t.push(f);const d=1/(u-2),p=-d,_=1+d,m=[p,p,_,p,_,_,p,p,_,_,p,_],v=6,M=6,E=3,x=2,S=1,A=new Float32Array(E*M*v),D=new Float32Array(x*M*v),R=new Float32Array(S*M*v);for(let L=0;L<v;L++){const F=L%3*2/3-1,w=L>2?0:-1,N=[F,w,0,F+2/3,w,0,F+2/3,w+1,0,F,w,0,F+2/3,w+1,0,F,w+1,0];A.set(N,E*M*L),D.set(m,x*M*L);const z=[L,L,L,L,L,L];R.set(z,S*M*L)}const I=new tr;I.setAttribute("position",new Zi(A,E)),I.setAttribute("uv",new Zi(D,x)),I.setAttribute("faceIndex",new Zi(R,S)),i.push(new Li(I,null)),s>ts&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function J_(n,e,t){const i=new Ki(n,e,t);return i.texture.mapping=wu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Io(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function cw(n,e,t){return new er({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ow,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function uw(n,e,t){const i=new Float32Array(Us),s=new ne(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function e0(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function t0(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class hx extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ox(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ul(5,5,5),a=new er({name:"CubemapFromEquirect",uniforms:zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:br});a.uniforms.tEquirect.value=t;const l=new Li(s,a),u=t.minFilter;return t.minFilter===Os&&(t.minFilter=Ln),new gE(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,s);e.setRenderTarget(a)}}function fw(n){let e=new WeakMap,t=new WeakMap,i=null;function s(m,v=!1){return m==null?null:v?l(m):a(m)}function a(m){if(m&&m.isTexture){const v=m.mapping;if(v===vd||v===xd)if(e.has(m)){const M=e.get(m).texture;return u(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const E=new hx(M.height);return E.fromEquirectangularTexture(n,m),e.set(m,E),m.addEventListener("dispose",d),u(E.texture,m.mapping)}else return null}}return m}function l(m){if(m&&m.isTexture){const v=m.mapping,M=v===vd||v===xd,E=v===Hs||v===ko;if(M||E){let x=t.get(m);const S=x!==void 0?x.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new Q_(n)),x=M?i.fromEquirectangular(m,x):i.fromCubemap(m,x),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),x.texture;if(x!==void 0)return x.texture;{const A=m.image;return M&&A&&A.height>0||E&&A&&f(A)?(i===null&&(i=new Q_(n)),x=M?i.fromEquirectangular(m):i.fromCubemap(m),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),m.addEventListener("dispose",p),x.texture):null}}}return m}function u(m,v){return v===vd?m.mapping=Hs:v===xd&&(m.mapping=ko),m}function f(m){let v=0;const M=6;for(let E=0;E<M;E++)m[E]!==void 0&&v++;return v===M}function d(m){const v=m.target;v.removeEventListener("dispose",d);const M=e.get(v);M!==void 0&&(e.delete(v),M.dispose())}function p(m){const v=m.target;v.removeEventListener("dispose",p);const M=t.get(v);M!==void 0&&(t.delete(v),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:_}}function dw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Jh("WebGLRenderer: "+i+" extension not supported."),s}}}function hw(n,e,t,i){const s={},a=new WeakMap;function l(_){const m=_.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",l),delete s[m.id];const v=a.get(m);v&&(e.remove(v),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(_,m){return s[m.id]===!0||(m.addEventListener("dispose",l),s[m.id]=!0,t.memory.geometries++),m}function f(_){const m=_.attributes;for(const v in m)e.update(m[v],n.ARRAY_BUFFER)}function d(_){const m=[],v=_.index,M=_.attributes.position;let E=0;if(M===void 0)return;if(v!==null){const A=v.array;E=v.version;for(let D=0,R=A.length;D<R;D+=3){const I=A[D+0],L=A[D+1],F=A[D+2];m.push(I,L,L,F,F,I)}}else{const A=M.array;E=M.version;for(let D=0,R=A.length/3-1;D<R;D+=3){const I=D+0,L=D+1,F=D+2;m.push(I,L,L,F,F,I)}}const x=new(M.count>=65535?rx:ix)(m,1);x.version=E;const S=a.get(_);S&&e.remove(S),a.set(_,x)}function p(_){const m=a.get(_);if(m){const v=_.index;v!==null&&m.version<v.version&&d(_)}else d(_);return a.get(_)}return{get:u,update:f,getWireframeAttribute:p}}function pw(n,e,t){let i;function s(_){i=_}let a,l;function u(_){a=_.type,l=_.bytesPerElement}function f(_,m){n.drawElements(i,m,a,_*l),t.update(m,i,1)}function d(_,m,v){v!==0&&(n.drawElementsInstanced(i,m,a,_*l,v),t.update(m,i,v))}function p(_,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,_,0,v);let E=0;for(let x=0;x<v;x++)E+=m[x];t.update(E,i,1)}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=p}function mw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,l,u){switch(t.calls++,l){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Et("WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function gw(n,e,t){const i=new WeakMap,s=new nn;function a(l,u,f){const d=l.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let m=i.get(u);if(m===void 0||m.count!==_){let z=function(){w.dispose(),i.delete(u),u.removeEventListener("dispose",z)};var v=z;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let R=0;M===!0&&(R=1),E===!0&&(R=2),x===!0&&(R=3);let I=u.attributes.position.count*R,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*L*4*_),w=new ex(F,I,L,_);w.type=ji,w.needsUpdate=!0;const N=R*4;for(let O=0;O<_;O++){const j=S[O],ie=A[O],ce=D[O],B=I*L*4*O;for(let q=0;q<j.count;q++){const X=q*N;M===!0&&(s.fromBufferAttribute(j,q),F[B+X+0]=s.x,F[B+X+1]=s.y,F[B+X+2]=s.z,F[B+X+3]=0),E===!0&&(s.fromBufferAttribute(ie,q),F[B+X+4]=s.x,F[B+X+5]=s.y,F[B+X+6]=s.z,F[B+X+7]=0),x===!0&&(s.fromBufferAttribute(ce,q),F[B+X+8]=s.x,F[B+X+9]=s.y,F[B+X+10]=s.z,F[B+X+11]=ce.itemSize===4?s.w:1)}}m={count:_,texture:w,size:new Ct(I,L)},i.set(u,m),u.addEventListener("dispose",z)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",l.morphTexture,t);else{let M=0;for(let x=0;x<d.length;x++)M+=d[x];const E=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function _w(n,e,t,i,s){let a=new WeakMap;function l(d){const p=s.render.frame,_=d.geometry,m=e.get(d,_);if(a.get(m)!==p&&(e.update(m),a.set(m,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==p&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;a.get(v)!==p&&(v.update(),a.set(v,p))}return m}function u(){a=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const vw={[kv]:"LINEAR_TONE_MAPPING",[Bv]:"REINHARD_TONE_MAPPING",[zv]:"CINEON_TONE_MAPPING",[Vv]:"ACES_FILMIC_TONE_MAPPING",[Gv]:"AGX_TONE_MAPPING",[Wv]:"NEUTRAL_TONE_MAPPING",[Hv]:"CUSTOM_TONE_MAPPING"};function xw(n,e,t,i,s){const a=new Ki(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Bo(e,t):void 0}),l=new Ki(e,t,{type:Tr,depthBuffer:!1,stencilBuffer:!1}),u=new tr;u.setAttribute("position",new _i([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new _i([0,2,0,0,2,0],2));const f=new aE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Li(u,f),p=new Au(-1,1,1,-1,0,1);let _=null,m=null,v=!1,M,E=null,x=[],S=!1;this.setSize=function(A,D){a.setSize(A,D),l.setSize(A,D);for(let R=0;R<x.length;R++){const I=x[R];I.setSize&&I.setSize(A,D)}},this.setEffects=function(A){x=A,S=x.length>0&&x[0].isRenderPass===!0;const D=a.width,R=a.height;for(let I=0;I<x.length;I++){const L=x[I];L.setSize&&L.setSize(D,R)}},this.begin=function(A,D){if(v||A.toneMapping===qi&&x.length===0)return!1;if(E=D,D!==null){const R=D.width,I=D.height;(a.width!==R||a.height!==I)&&this.setSize(R,I)}return S===!1&&A.setRenderTarget(a),M=A.toneMapping,A.toneMapping=qi,!0},this.hasRenderPass=function(){return S},this.end=function(A,D){A.toneMapping=M,v=!0;let R=a,I=l;for(let L=0;L<x.length;L++){const F=x[L];if(F.enabled!==!1&&(F.render(A,I,R,D),F.needsSwap!==!1)){const w=R;R=I,I=w}}if(_!==A.outputColorSpace||m!==A.toneMapping){_=A.outputColorSpace,m=A.toneMapping,f.defines={},vt.getTransfer(_)===It&&(f.defines.SRGB_TRANSFER="");const L=vw[m];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=R.texture,A.setRenderTarget(E),A.render(d,p),E=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),l.dispose(),u.dispose(),f.dispose()}}const px=new Bn,ep=new Bo(1,1),mx=new ex,gx=new OM,_x=new ox,n0=[],i0=[],r0=new Float32Array(16),s0=new Float32Array(9),o0=new Float32Array(4);function Xo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let a=n0[s];if(a===void 0&&(a=new Float32Array(s),n0[s]=a),e!==0){i.toArray(a,0);for(let l=1,u=0;l!==e;++l)u+=t,n[l].toArray(a,u)}return a}function pn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ru(n,e){let t=i0[e];t===void 0&&(t=new Int32Array(e),i0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2fv(this.addr,e),mn(t,e)}}function Mw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;n.uniform3fv(this.addr,e),mn(t,e)}}function Ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4fv(this.addr,e),mn(t,e)}}function bw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;o0.set(i),n.uniformMatrix2fv(this.addr,!1,o0),mn(t,i)}}function ww(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;s0.set(i),n.uniformMatrix3fv(this.addr,!1,s0),mn(t,i)}}function Tw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;r0.set(i),n.uniformMatrix4fv(this.addr,!1,r0),mn(t,i)}}function Aw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2iv(this.addr,e),mn(t,e)}}function Rw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3iv(this.addr,e),mn(t,e)}}function Pw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4iv(this.addr,e),mn(t,e)}}function Dw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2uiv(this.addr,e),mn(t,e)}}function Iw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3uiv(this.addr,e),mn(t,e)}}function Nw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4uiv(this.addr,e),mn(t,e)}}function Fw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(ep.compareFunction=t.isReversedDepthBuffer()?Mp:Sp,a=ep):a=px,t.setTexture2D(e||a,s)}function Uw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||gx,s)}function Ow(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||_x,s)}function kw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||mx,s)}function Bw(n){switch(n){case 5126:return yw;case 35664:return Sw;case 35665:return Mw;case 35666:return Ew;case 35674:return bw;case 35675:return ww;case 35676:return Tw;case 5124:case 35670:return Aw;case 35667:case 35671:return Cw;case 35668:case 35672:return Rw;case 35669:case 35673:return Pw;case 5125:return Dw;case 36294:return Lw;case 36295:return Iw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Fw;case 35679:case 36299:case 36307:return Uw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return kw}}function zw(n,e){n.uniform1fv(this.addr,e)}function Vw(n,e){const t=Xo(e,this.size,2);n.uniform2fv(this.addr,t)}function Hw(n,e){const t=Xo(e,this.size,3);n.uniform3fv(this.addr,t)}function Gw(n,e){const t=Xo(e,this.size,4);n.uniform4fv(this.addr,t)}function Ww(n,e){const t=Xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Xw(n,e){const t=Xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jw(n,e){const t=Xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Yw(n,e){n.uniform1iv(this.addr,e)}function $w(n,e){n.uniform2iv(this.addr,e)}function qw(n,e){n.uniform3iv(this.addr,e)}function Kw(n,e){n.uniform4iv(this.addr,e)}function Zw(n,e){n.uniform1uiv(this.addr,e)}function Qw(n,e){n.uniform2uiv(this.addr,e)}function Jw(n,e){n.uniform3uiv(this.addr,e)}function eT(n,e){n.uniform4uiv(this.addr,e)}function tT(n,e,t){const i=this.cache,s=e.length,a=Ru(t,s);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));let l;this.type===n.SAMPLER_2D_SHADOW?l=ep:l=px;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||l,a[u])}function nT(n,e,t){const i=this.cache,s=e.length,a=Ru(t,s);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||gx,a[l])}function iT(n,e,t){const i=this.cache,s=e.length,a=Ru(t,s);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||_x,a[l])}function rT(n,e,t){const i=this.cache,s=e.length,a=Ru(t,s);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||mx,a[l])}function sT(n){switch(n){case 5126:return zw;case 35664:return Vw;case 35665:return Hw;case 35666:return Gw;case 35674:return Ww;case 35675:return Xw;case 35676:return jw;case 5124:case 35670:return Yw;case 35667:case 35671:return $w;case 35668:case 35672:return qw;case 35669:case 35673:return Kw;case 5125:return Zw;case 36294:return Qw;case 36295:return Jw;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}class oT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Bw(t.type)}}class aT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sT(t.type)}}class lT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,l=s.length;a!==l;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const Kd=/(\w+)(\])?(\[|\.)?/g;function a0(n,e){n.seq.push(e),n.map[e.id]=e}function cT(n,e,t){const i=n.name,s=i.length;for(Kd.lastIndex=0;;){const a=Kd.exec(i),l=Kd.lastIndex;let u=a[1];const f=a[2]==="]",d=a[3];if(f&&(u=u|0),d===void 0||d==="["&&l+2===s){a0(t,d===void 0?new oT(u,n,e):new aT(u,n,e));break}else{let _=t.map[u];_===void 0&&(_=new lT(u),a0(t,_)),t=_}}}class iu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<i;++l){const u=e.getActiveUniform(t,l),f=e.getUniformLocation(t,u.name);cT(u,f,this)}const s=[],a=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(l):a.push(l);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,l=t.length;a!==l;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const l=e[s];l.id in t&&i.push(l)}return i}}function l0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const uT=37297;let fT=0;function dT(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=s;l<a;l++){const u=l+1;i.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return i.join(`
`)}const c0=new lt;function hT(n){vt._getMatrix(c0,vt.workingColorSpace,n);const e=`mat3( ${c0.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case du:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function u0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+dT(n.getShaderSource(e),u)}else return a}function pT(n,e){const t=hT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const mT={[kv]:"Linear",[Bv]:"Reinhard",[zv]:"Cineon",[Vv]:"ACESFilmic",[Gv]:"AgX",[Wv]:"Neutral",[Hv]:"Custom"};function gT(n,e){const t=mT[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oc=new ne;function _T(){vt.getLuminanceCoefficients(Oc);const n=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function xT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(e,s),l=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[l]={type:a.type,location:n.getAttribLocation(e,l),locationSize:u}}return t}function Wa(n){return n!==""}function f0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function d0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ST=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(n){return n.replace(ST,ET)}const MT=new Map;function ET(n,e){let t=ht[e];if(t===void 0){const i=MT.get(e);if(i!==void 0)t=ht[i],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tp(t)}const bT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(n){return n.replace(bT,wT)}function wT(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function p0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const TT={[Qc]:"SHADOWMAP_TYPE_PCF",[Ha]:"SHADOWMAP_TYPE_VSM"};function AT(n){return TT[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CT={[Hs]:"ENVMAP_TYPE_CUBE",[ko]:"ENVMAP_TYPE_CUBE",[wu]:"ENVMAP_TYPE_CUBE_UV"};function RT(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":CT[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const PT={[ko]:"ENVMAP_MODE_REFRACTION"};function DT(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":PT[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LT={[Ov]:"ENVMAP_BLENDING_MULTIPLY",[gM]:"ENVMAP_BLENDING_MIX",[_M]:"ENVMAP_BLENDING_ADD"};function IT(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":LT[n.combine]||"ENVMAP_BLENDING_NONE"}function NT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function FT(n,e,t,i){const s=n.getContext(),a=t.defines;let l=t.vertexShader,u=t.fragmentShader;const f=AT(t),d=RT(t),p=DT(t),_=IT(t),m=NT(t),v=vT(t),M=xT(a),E=s.createProgram();let x,S,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Wa).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Wa).join(`
`),S.length>0&&(S+=`
`)):(x=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),S=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?ht.tonemapping_pars_fragment:"",t.toneMapping!==qi?gT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,pT("linearToOutputTexel",t.outputColorSpace),_T(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),l=tp(l),l=f0(l,t),l=d0(l,t),u=tp(u),u=f0(u,t),u=d0(u,t),l=h0(l),u=h0(u),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=A+x+l,R=A+S+u,I=l0(s,s.VERTEX_SHADER,D),L=l0(s,s.FRAGMENT_SHADER,R);s.attachShader(E,I),s.attachShader(E,L),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function F(O){if(n.debug.checkShaderErrors){const j=s.getProgramInfoLog(E)||"",ie=s.getShaderInfoLog(I)||"",ce=s.getShaderInfoLog(L)||"",B=j.trim(),q=ie.trim(),X=ce.trim();let $=!0,le=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,I,L);else{const se=u0(s,I,"vertex"),k=u0(s,L,"fragment");Et("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+B+`
`+se+`
`+k)}else B!==""?it("WebGLProgram: Program Info Log:",B):(q===""||X==="")&&(le=!1);le&&(O.diagnostics={runnable:$,programLog:B,vertexShader:{log:q,prefix:x},fragmentShader:{log:X,prefix:S}})}s.deleteShader(I),s.deleteShader(L),w=new iu(s,E),N=yT(s,E)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(E,uT)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=I,this.fragmentShader=L,this}let UT=0;class OT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kT(e),t.set(e,i)),i}}class kT{constructor(e){this.id=UT++,this.code=e,this.usedTimes=0}}function BT(n){return n===Gs||n===cu||n===uu}function zT(n,e,t,i,s,a){const l=new tx,u=new OT,f=new Set,d=[],p=new Map,_=i.logarithmicDepthBuffer;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return f.add(w),w===0?"uv":`uv${w}`}function E(w,N,z,O,j,ie){const ce=O.fog,B=j.geometry,q=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,X=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,$=e.get(w.envMap||q,X),le=$&&$.mapping===wu?$.image.height:null,se=v[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&it("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const k=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Z=k!==void 0?k.length:0;let De=0;B.morphAttributes.position!==void 0&&(De=1),B.morphAttributes.normal!==void 0&&(De=2),B.morphAttributes.color!==void 0&&(De=3);let Ne,Pe,re,xe;if(se){const st=Xi[se];Ne=st.vertexShader,Pe=st.fragmentShader}else Ne=w.vertexShader,Pe=w.fragmentShader,u.update(w),re=u.getVertexShaderID(w),xe=u.getFragmentShaderID(w);const pe=n.getRenderTarget(),Fe=n.state.buffers.depth.getReversed(),Ze=j.isInstancedMesh===!0,Qe=j.isBatchedMesh===!0,kt=!!w.map,ct=!!w.matcap,bt=!!$,Ft=!!w.aoMap,ut=!!w.lightMap,Zt=!!w.bumpMap,Bt=!!w.normalMap,Sn=!!w.displacementMap,G=!!w.emissiveMap,zt=!!w.metalnessMap,ft=!!w.roughnessMap,Pt=w.anisotropy>0,Le=w.clearcoat>0,Xt=w.dispersion>0,P=w.iridescence>0,b=w.sheen>0,K=w.transmission>0,de=Pt&&!!w.anisotropyMap,me=Le&&!!w.clearcoatMap,Se=Le&&!!w.clearcoatNormalMap,Re=Le&&!!w.clearcoatRoughnessMap,ue=P&&!!w.iridescenceMap,he=P&&!!w.iridescenceThicknessMap,Ue=b&&!!w.sheenColorMap,ke=b&&!!w.sheenRoughnessMap,we=!!w.specularMap,Me=!!w.specularColorMap,tt=!!w.specularIntensityMap,rt=K&&!!w.transmissionMap,pt=K&&!!w.thicknessMap,H=!!w.gradientMap,be=!!w.alphaMap,fe=w.alphaTest>0,Oe=!!w.alphaHash,Ae=!!w.extensions;let ge=qi;w.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ge=n.toneMapping);const We={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:Ne,fragmentShader:Pe,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Qe,batchingColor:Qe&&j._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&j.instanceColor!==null,instancingMorph:Ze&&j.morphTexture!==null,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:kt,matcap:ct,envMap:bt,envMapMode:bt&&$.mapping,envMapCubeUVHeight:le,aoMap:Ft,lightMap:ut,bumpMap:Zt,normalMap:Bt,displacementMap:Sn,emissiveMap:G,normalMapObjectSpace:Bt&&w.normalMapType===yM,normalMapTangentSpace:Bt&&w.normalMapType===Qh,packedNormalMap:Bt&&w.normalMapType===Qh&&BT(w.normalMap.format),metalnessMap:zt,roughnessMap:ft,anisotropy:Pt,anisotropyMap:de,clearcoat:Le,clearcoatMap:me,clearcoatNormalMap:Se,clearcoatRoughnessMap:Re,dispersion:Xt,iridescence:P,iridescenceMap:ue,iridescenceThicknessMap:he,sheen:b,sheenColorMap:Ue,sheenRoughnessMap:ke,specularMap:we,specularColorMap:Me,specularIntensityMap:tt,transmission:K,transmissionMap:rt,thicknessMap:pt,gradientMap:H,opaque:w.transparent===!1&&w.blending===Fo&&w.alphaToCoverage===!1,alphaMap:be,alphaTest:fe,alphaHash:Oe,combine:w.combine,mapUv:kt&&M(w.map.channel),aoMapUv:Ft&&M(w.aoMap.channel),lightMapUv:ut&&M(w.lightMap.channel),bumpMapUv:Zt&&M(w.bumpMap.channel),normalMapUv:Bt&&M(w.normalMap.channel),displacementMapUv:Sn&&M(w.displacementMap.channel),emissiveMapUv:G&&M(w.emissiveMap.channel),metalnessMapUv:zt&&M(w.metalnessMap.channel),roughnessMapUv:ft&&M(w.roughnessMap.channel),anisotropyMapUv:de&&M(w.anisotropyMap.channel),clearcoatMapUv:me&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Se&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:he&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:ke&&M(w.sheenRoughnessMap.channel),specularMapUv:we&&M(w.specularMap.channel),specularColorMapUv:Me&&M(w.specularColorMap.channel),specularIntensityMapUv:tt&&M(w.specularIntensityMap.channel),transmissionMapUv:rt&&M(w.transmissionMap.channel),thicknessMapUv:pt&&M(w.thicknessMap.channel),alphaMapUv:be&&M(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Bt||Pt),vertexNormals:!!B.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!B.attributes.uv&&(kt||be),fog:!!ce,useFog:w.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||B.attributes.normal===void 0&&Bt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Fe,skinning:j.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:De,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:ge,decodeVideoTexture:kt&&w.map.isVideoTexture===!0&&vt.getTransfer(w.map.colorSpace)===It,decodeVideoTextureEmissive:G&&w.emissiveMap.isVideoTexture===!0&&vt.getTransfer(w.emissiveMap.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Mr,flipSided:w.side===Zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ae&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&w.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=f.has(1),We.vertexUv2s=f.has(2),We.vertexUv3s=f.has(3),f.clear(),We}function x(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const z in w.defines)N.push(z),N.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(S(N,w),A(N,w),N.push(n.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function S(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function A(w,N){l.disableAll(),N.instancing&&l.enable(0),N.instancingColor&&l.enable(1),N.instancingMorph&&l.enable(2),N.matcap&&l.enable(3),N.envMap&&l.enable(4),N.normalMapObjectSpace&&l.enable(5),N.normalMapTangentSpace&&l.enable(6),N.clearcoat&&l.enable(7),N.iridescence&&l.enable(8),N.alphaTest&&l.enable(9),N.vertexColors&&l.enable(10),N.vertexAlphas&&l.enable(11),N.vertexUv1s&&l.enable(12),N.vertexUv2s&&l.enable(13),N.vertexUv3s&&l.enable(14),N.vertexTangents&&l.enable(15),N.anisotropy&&l.enable(16),N.alphaHash&&l.enable(17),N.batching&&l.enable(18),N.dispersion&&l.enable(19),N.batchingColor&&l.enable(20),N.gradientMap&&l.enable(21),N.packedNormalMap&&l.enable(22),N.vertexNormals&&l.enable(23),w.push(l.mask),l.disableAll(),N.fog&&l.enable(0),N.useFog&&l.enable(1),N.flatShading&&l.enable(2),N.logarithmicDepthBuffer&&l.enable(3),N.reversedDepthBuffer&&l.enable(4),N.skinning&&l.enable(5),N.morphTargets&&l.enable(6),N.morphNormals&&l.enable(7),N.morphColors&&l.enable(8),N.premultipliedAlpha&&l.enable(9),N.shadowMapEnabled&&l.enable(10),N.doubleSided&&l.enable(11),N.flipSided&&l.enable(12),N.useDepthPacking&&l.enable(13),N.dithering&&l.enable(14),N.transmission&&l.enable(15),N.sheen&&l.enable(16),N.opaque&&l.enable(17),N.pointsUvs&&l.enable(18),N.decodeVideoTexture&&l.enable(19),N.decodeVideoTextureEmissive&&l.enable(20),N.alphaToCoverage&&l.enable(21),N.numLightProbeGrids>0&&l.enable(22),w.push(l.mask)}function D(w){const N=v[w.type];let z;if(N){const O=Xi[N];z=rE.clone(O.uniforms)}else z=w.uniforms;return z}function R(w,N){let z=p.get(N);return z!==void 0?++z.usedTimes:(z=new FT(n,N,w,s),d.push(z),p.set(N,z)),z}function I(w){if(--w.usedTimes===0){const N=d.indexOf(w);d[N]=d[d.length-1],d.pop(),p.delete(w.cacheKey),w.destroy()}}function L(w){u.remove(w)}function F(){u.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:D,acquireProgram:R,releaseProgram:I,releaseShaderCache:L,programs:d,dispose:F}}function VT(){let n=new WeakMap;function e(l){return n.has(l)}function t(l){let u=n.get(l);return u===void 0&&(u={},n.set(l,u)),u}function i(l){n.delete(l)}function s(l,u,f){n.get(l)[u]=f}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function HT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function m0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function g0(){const n=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function l(m){let v=0;return m.isInstancedMesh&&(v+=2),m.isSkinnedMesh&&(v+=1),v}function u(m,v,M,E,x,S){let A=n[e];return A===void 0?(A={id:m.id,object:m,geometry:v,material:M,materialVariant:l(m),groupOrder:E,renderOrder:m.renderOrder,z:x,group:S},n[e]=A):(A.id=m.id,A.object=m,A.geometry=v,A.material=M,A.materialVariant=l(m),A.groupOrder=E,A.renderOrder=m.renderOrder,A.z=x,A.group=S),e++,A}function f(m,v,M,E,x,S){const A=u(m,v,M,E,x,S);M.transmission>0?i.push(A):M.transparent===!0?s.push(A):t.push(A)}function d(m,v,M,E,x,S){const A=u(m,v,M,E,x,S);M.transmission>0?i.unshift(A):M.transparent===!0?s.unshift(A):t.unshift(A)}function p(m,v){t.length>1&&t.sort(m||HT),i.length>1&&i.sort(v||m0),s.length>1&&s.sort(v||m0)}function _(){for(let m=e,v=n.length;m<v;m++){const M=n[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:f,unshift:d,finish:_,sort:p}}function GT(){let n=new WeakMap;function e(i,s){const a=n.get(i);let l;return a===void 0?(l=new g0,n.set(i,[l])):s>=a.length?(l=new g0,a.push(l)):l=a[s],l}function t(){n=new WeakMap}return{get:e,dispose:t}}function WT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new At};break;case"SpotLight":t={position:new ne,direction:new ne,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return n[e.id]=t,t}}}function XT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jT=0;function YT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $T(n){const e=new WT,t=XT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new ne);const s=new ne,a=new on,l=new on;function u(d){let p=0,_=0,m=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let v=0,M=0,E=0,x=0,S=0,A=0,D=0,R=0,I=0,L=0,F=0;d.sort(YT);for(let N=0,z=d.length;N<z;N++){const O=d[N],j=O.color,ie=O.intensity,ce=O.distance;let B=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Gs?B=O.shadow.map.texture:B=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)p+=j.r*ie,_+=j.g*ie,m+=j.b*ie;else if(O.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(O.sh.coefficients[q],ie);F++}else if(O.isDirectionalLight){const q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const X=O.shadow,$=t.get(O);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,i.directionalShadow[v]=$,i.directionalShadowMap[v]=B,i.directionalShadowMatrix[v]=O.shadow.matrix,A++}i.directional[v]=q,v++}else if(O.isSpotLight){const q=e.get(O);q.position.setFromMatrixPosition(O.matrixWorld),q.color.copy(j).multiplyScalar(ie),q.distance=ce,q.coneCos=Math.cos(O.angle),q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),q.decay=O.decay,i.spot[E]=q;const X=O.shadow;if(O.map&&(i.spotLightMap[I]=O.map,I++,X.updateMatrices(O),O.castShadow&&L++),i.spotLightMatrix[E]=X.matrix,O.castShadow){const $=t.get(O);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,i.spotShadow[E]=$,i.spotShadowMap[E]=B,R++}E++}else if(O.isRectAreaLight){const q=e.get(O);q.color.copy(j).multiplyScalar(ie),q.halfWidth.set(O.width*.5,0,0),q.halfHeight.set(0,O.height*.5,0),i.rectArea[x]=q,x++}else if(O.isPointLight){const q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity),q.distance=O.distance,q.decay=O.decay,O.castShadow){const X=O.shadow,$=t.get(O);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,$.shadowCameraNear=X.camera.near,$.shadowCameraFar=X.camera.far,i.pointShadow[M]=$,i.pointShadowMap[M]=B,i.pointShadowMatrix[M]=O.shadow.matrix,D++}i.point[M]=q,M++}else if(O.isHemisphereLight){const q=e.get(O);q.skyColor.copy(O.color).multiplyScalar(ie),q.groundColor.copy(O.groundColor).multiplyScalar(ie),i.hemi[S]=q,S++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=m;const w=i.hash;(w.directionalLength!==v||w.pointLength!==M||w.spotLength!==E||w.rectAreaLength!==x||w.hemiLength!==S||w.numDirectionalShadows!==A||w.numPointShadows!==D||w.numSpotShadows!==R||w.numSpotMaps!==I||w.numLightProbes!==F)&&(i.directional.length=v,i.spot.length=E,i.rectArea.length=x,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=R+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=F,w.directionalLength=v,w.pointLength=M,w.spotLength=E,w.rectAreaLength=x,w.hemiLength=S,w.numDirectionalShadows=A,w.numPointShadows=D,w.numSpotShadows=R,w.numSpotMaps=I,w.numLightProbes=F,i.version=jT++)}function f(d,p){let _=0,m=0,v=0,M=0,E=0;const x=p.matrixWorldInverse;for(let S=0,A=d.length;S<A;S++){const D=d[S];if(D.isDirectionalLight){const R=i.directional[_];R.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),_++}else if(D.isSpotLight){const R=i.spot[v];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),v++}else if(D.isRectAreaLight){const R=i.rectArea[M];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(x),l.identity(),a.copy(D.matrixWorld),a.premultiply(x),l.extractRotation(a),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),M++}else if(D.isPointLight){const R=i.point[m];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(x),m++}else if(D.isHemisphereLight){const R=i.hemi[E];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(x),E++}}}return{setup:u,setupView:f,state:i}}function _0(n){const e=new $T(n),t=[],i=[],s=[];function a(m){_.camera=m,t.length=0,i.length=0,s.length=0}function l(m){t.push(m)}function u(m){i.push(m)}function f(m){s.push(m)}function d(){e.setup(t)}function p(m){e.setupView(t,m)}const _={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:_,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:u,pushLightProbeGrid:f}}function qT(n){let e=new WeakMap;function t(s,a=0){const l=e.get(s);let u;return l===void 0?(u=new _0(n),e.set(s,[u])):a>=l.length?(u=new _0(n),l.push(u)):u=l[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const KT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,QT=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],JT=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],v0=new on,Ua=new ne,Zd=new ne;function eA(n,e,t){let i=new wp;const s=new Ct,a=new Ct,l=new nn,u=new lE,f=new cE,d={},p=t.maxTextureSize,_={[os]:Zn,[Zn]:os,[Mr]:Mr},m=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:KT,fragmentShader:ZT}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const M=new tr;M.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Li(M,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let S=this.type;this.render=function(L,F,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;this.type===ZS&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qc);const N=n.getRenderTarget(),z=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),j=n.state;j.setBlending(br),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ie=S!==this.type;ie&&F.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(B=>B.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,B=L.length;ce<B;ce++){const q=L[ce],X=q.shadow;if(X===void 0){it("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const $=X.getFrameExtents();s.multiply($),a.copy(X.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/$.x),s.x=a.x*$.x,X.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/$.y),s.y=a.y*$.y,X.mapSize.y=a.y));const le=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=le,X.map===null||ie===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ha){if(q.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ki(s.x,s.y,{format:Gs,type:Tr,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new Bo(s.x,s.y,ji),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Ar,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=wn,X.map.depthTexture.magFilter=wn}else q.isPointLight?(X.map=new hx(s.x),X.map.depthTexture=new nE(s.x,Ji)):(X.map=new Ki(s.x,s.y),X.map.depthTexture=new Bo(s.x,s.y,Ji)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Ar,this.type===Qc?(X.map.depthTexture.compareFunction=le?Mp:Sp,X.map.depthTexture.minFilter=Ln,X.map.depthTexture.magFilter=Ln):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=wn,X.map.depthTexture.magFilter=wn);X.camera.updateProjectionMatrix()}const se=X.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<se;k++){if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,k),n.clear();else{k===0&&(n.setRenderTarget(X.map),n.clear());const Z=X.getViewport(k);l.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),j.viewport(l)}if(q.isPointLight){const Z=X.camera,De=X.matrix,Ne=q.distance||Z.far;Ne!==Z.far&&(Z.far=Ne,Z.updateProjectionMatrix()),Ua.setFromMatrixPosition(q.matrixWorld),Z.position.copy(Ua),Zd.copy(Z.position),Zd.add(QT[k]),Z.up.copy(JT[k]),Z.lookAt(Zd),Z.updateMatrixWorld(),De.makeTranslation(-Ua.x,-Ua.y,-Ua.z),v0.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),X._frustum.setFromProjectionMatrix(v0,Z.coordinateSystem,Z.reversedDepth)}else X.updateMatrices(q);i=X.getFrustum(),R(F,w,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===Ha&&A(X,w),X.needsUpdate=!1}S=this.type,x.needsUpdate=!1,n.setRenderTarget(N,z,O)};function A(L,F){const w=e.update(E);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,v.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ki(s.x,s.y,{format:Gs,type:Tr})),m.uniforms.shadow_pass.value=L.map.depthTexture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(F,null,w,m,E,null),v.uniforms.shadow_pass.value=L.mapPass.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(F,null,w,v,E,null)}function D(L,F,w,N){let z=null;const O=w.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(O!==void 0)z=O;else if(z=w.isPointLight===!0?f:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=z.uuid,ie=F.uuid;let ce=d[j];ce===void 0&&(ce={},d[j]=ce);let B=ce[ie];B===void 0&&(B=z.clone(),ce[ie]=B,F.addEventListener("dispose",I)),z=B}if(z.visible=F.visible,z.wireframe=F.wireframe,N===Ha?z.side=F.shadowSide!==null?F.shadowSide:F.side:z.side=F.shadowSide!==null?F.shadowSide:_[F.side],z.alphaMap=F.alphaMap,z.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,z.map=F.map,z.clipShadows=F.clipShadows,z.clippingPlanes=F.clippingPlanes,z.clipIntersection=F.clipIntersection,z.displacementMap=F.displacementMap,z.displacementScale=F.displacementScale,z.displacementBias=F.displacementBias,z.wireframeLinewidth=F.wireframeLinewidth,z.linewidth=F.linewidth,w.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const j=n.properties.get(z);j.light=w}return z}function R(L,F,w,N,z){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&z===Ha)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,L.matrixWorld);const ie=e.update(L),ce=L.material;if(Array.isArray(ce)){const B=ie.groups;for(let q=0,X=B.length;q<X;q++){const $=B[q],le=ce[$.materialIndex];if(le&&le.visible){const se=D(L,le,N,z);L.onBeforeShadow(n,L,F,w,ie,se,$),n.renderBufferDirect(w,null,ie,se,L,$),L.onAfterShadow(n,L,F,w,ie,se,$)}}}else if(ce.visible){const B=D(L,ce,N,z);L.onBeforeShadow(n,L,F,w,ie,B,null),n.renderBufferDirect(w,null,ie,B,L,null),L.onAfterShadow(n,L,F,w,ie,B,null)}}const j=L.children;for(let ie=0,ce=j.length;ie<ce;ie++)R(j[ie],F,w,N,z)}function I(L){L.target.removeEventListener("dispose",I);for(const w in d){const N=d[w],z=L.target.uuid;z in N&&(N[z].dispose(),delete N[z])}}}function tA(n,e){function t(){let H=!1;const be=new nn;let fe=null;const Oe=new nn(0,0,0,0);return{setMask:function(Ae){fe!==Ae&&!H&&(n.colorMask(Ae,Ae,Ae,Ae),fe=Ae)},setLocked:function(Ae){H=Ae},setClear:function(Ae,ge,We,st,Ot){Ot===!0&&(Ae*=st,ge*=st,We*=st),be.set(Ae,ge,We,st),Oe.equals(be)===!1&&(n.clearColor(Ae,ge,We,st),Oe.copy(be))},reset:function(){H=!1,fe=null,Oe.set(-1,0,0,0)}}}function i(){let H=!1,be=!1,fe=null,Oe=null,Ae=null;return{setReversed:function(ge){if(be!==ge){const We=e.get("EXT_clip_control");ge?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),be=ge;const st=Ae;Ae=null,this.setClear(st)}},getReversed:function(){return be},setTest:function(ge){ge?pe(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(ge){fe!==ge&&!H&&(n.depthMask(ge),fe=ge)},setFunc:function(ge){if(be&&(ge=PM[ge]),Oe!==ge){switch(ge){case hh:n.depthFunc(n.NEVER);break;case ph:n.depthFunc(n.ALWAYS);break;case mh:n.depthFunc(n.LESS);break;case Oo:n.depthFunc(n.LEQUAL);break;case gh:n.depthFunc(n.EQUAL);break;case _h:n.depthFunc(n.GEQUAL);break;case vh:n.depthFunc(n.GREATER);break;case xh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=ge}},setLocked:function(ge){H=ge},setClear:function(ge){Ae!==ge&&(Ae=ge,be&&(ge=1-ge),n.clearDepth(ge))},reset:function(){H=!1,fe=null,Oe=null,Ae=null,be=!1}}}function s(){let H=!1,be=null,fe=null,Oe=null,Ae=null,ge=null,We=null,st=null,Ot=null;return{setTest:function(wt){H||(wt?pe(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(wt){be!==wt&&!H&&(n.stencilMask(wt),be=wt)},setFunc:function(wt,Fn,si){(fe!==wt||Oe!==Fn||Ae!==si)&&(n.stencilFunc(wt,Fn,si),fe=wt,Oe=Fn,Ae=si)},setOp:function(wt,Fn,si){(ge!==wt||We!==Fn||st!==si)&&(n.stencilOp(wt,Fn,si),ge=wt,We=Fn,st=si)},setLocked:function(wt){H=wt},setClear:function(wt){Ot!==wt&&(n.clearStencil(wt),Ot=wt)},reset:function(){H=!1,be=null,fe=null,Oe=null,Ae=null,ge=null,We=null,st=null,Ot=null}}}const a=new t,l=new i,u=new s,f=new WeakMap,d=new WeakMap;let p={},_={},m={},v=new WeakMap,M=[],E=null,x=!1,S=null,A=null,D=null,R=null,I=null,L=null,F=null,w=new At(0,0,0),N=0,z=!1,O=null,j=null,ie=null,ce=null,B=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const le=n.getParameter(n.VERSION);le.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(le)[1]),X=$>=1):le.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),X=$>=2);let se=null,k={};const Z=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),Ne=new nn().fromArray(Z),Pe=new nn().fromArray(De);function re(H,be,fe,Oe){const Ae=new Uint8Array(4),ge=n.createTexture();n.bindTexture(H,ge),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<fe;We++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(be+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return ge}const xe={};xe[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),pe(n.DEPTH_TEST),l.setFunc(Oo),Zt(!1),Bt(x_),pe(n.CULL_FACE),Ft(br);function pe(H){p[H]!==!0&&(n.enable(H),p[H]=!0)}function Fe(H){p[H]!==!1&&(n.disable(H),p[H]=!1)}function Ze(H,be){return m[H]!==be?(n.bindFramebuffer(H,be),m[H]=be,H===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=be),H===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Qe(H,be){let fe=M,Oe=!1;if(H){fe=v.get(be),fe===void 0&&(fe=[],v.set(be,fe));const Ae=H.textures;if(fe.length!==Ae.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,We=Ae.length;ge<We;ge++)fe[ge]=n.COLOR_ATTACHMENT0+ge;fe.length=Ae.length,Oe=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(fe)}function kt(H){return E!==H?(n.useProgram(H),E=H,!0):!1}const ct={[Fs]:n.FUNC_ADD,[JS]:n.FUNC_SUBTRACT,[eM]:n.FUNC_REVERSE_SUBTRACT};ct[tM]=n.MIN,ct[nM]=n.MAX;const bt={[iM]:n.ZERO,[rM]:n.ONE,[sM]:n.SRC_COLOR,[fh]:n.SRC_ALPHA,[fM]:n.SRC_ALPHA_SATURATE,[cM]:n.DST_COLOR,[aM]:n.DST_ALPHA,[oM]:n.ONE_MINUS_SRC_COLOR,[dh]:n.ONE_MINUS_SRC_ALPHA,[uM]:n.ONE_MINUS_DST_COLOR,[lM]:n.ONE_MINUS_DST_ALPHA,[dM]:n.CONSTANT_COLOR,[hM]:n.ONE_MINUS_CONSTANT_COLOR,[pM]:n.CONSTANT_ALPHA,[mM]:n.ONE_MINUS_CONSTANT_ALPHA};function Ft(H,be,fe,Oe,Ae,ge,We,st,Ot,wt){if(H===br){x===!0&&(Fe(n.BLEND),x=!1);return}if(x===!1&&(pe(n.BLEND),x=!0),H!==QS){if(H!==S||wt!==z){if((A!==Fs||I!==Fs)&&(n.blendEquation(n.FUNC_ADD),A=Fs,I=Fs),wt)switch(H){case Fo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case y_:n.blendFunc(n.ONE,n.ONE);break;case S_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case M_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",H);break}else switch(H){case Fo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case y_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case S_:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case M_:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",H);break}D=null,R=null,L=null,F=null,w.set(0,0,0),N=0,S=H,z=wt}return}Ae=Ae||be,ge=ge||fe,We=We||Oe,(be!==A||Ae!==I)&&(n.blendEquationSeparate(ct[be],ct[Ae]),A=be,I=Ae),(fe!==D||Oe!==R||ge!==L||We!==F)&&(n.blendFuncSeparate(bt[fe],bt[Oe],bt[ge],bt[We]),D=fe,R=Oe,L=ge,F=We),(st.equals(w)===!1||Ot!==N)&&(n.blendColor(st.r,st.g,st.b,Ot),w.copy(st),N=Ot),S=H,z=!1}function ut(H,be){H.side===Mr?Fe(n.CULL_FACE):pe(n.CULL_FACE);let fe=H.side===Zn;be&&(fe=!fe),Zt(fe),H.blending===Fo&&H.transparent===!1?Ft(br):Ft(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);const Oe=H.stencilWrite;u.setTest(Oe),Oe&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),G(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(H){O!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),O=H)}function Bt(H){H!==qS?(pe(n.CULL_FACE),H!==j&&(H===x_?n.cullFace(n.BACK):H===KS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),j=H}function Sn(H){H!==ie&&(X&&n.lineWidth(H),ie=H)}function G(H,be,fe){H?(pe(n.POLYGON_OFFSET_FILL),(ce!==be||B!==fe)&&(ce=be,B=fe,l.getReversed()&&(be=-be),n.polygonOffset(be,fe))):Fe(n.POLYGON_OFFSET_FILL)}function zt(H){H?pe(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function ft(H){H===void 0&&(H=n.TEXTURE0+q-1),se!==H&&(n.activeTexture(H),se=H)}function Pt(H,be,fe){fe===void 0&&(se===null?fe=n.TEXTURE0+q-1:fe=se);let Oe=k[fe];Oe===void 0&&(Oe={type:void 0,texture:void 0},k[fe]=Oe),(Oe.type!==H||Oe.texture!==be)&&(se!==fe&&(n.activeTexture(fe),se=fe),n.bindTexture(H,be||xe[H]),Oe.type=H,Oe.texture=be)}function Le(){const H=k[se];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Xt(){try{n.compressedTexImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function b(){try{n.texSubImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function K(){try{n.texSubImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function de(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function me(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function Se(){try{n.texStorage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function Re(){try{n.texStorage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function ue(){try{n.texImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function he(){try{n.texImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function Ue(H){return _[H]!==void 0?_[H]:n.getParameter(H)}function ke(H,be){_[H]!==be&&(n.pixelStorei(H,be),_[H]=be)}function we(H){Ne.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ne.copy(H))}function Me(H){Pe.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Pe.copy(H))}function tt(H,be){let fe=d.get(be);fe===void 0&&(fe=new WeakMap,d.set(be,fe));let Oe=fe.get(H);Oe===void 0&&(Oe=n.getUniformBlockIndex(be,H.name),fe.set(H,Oe))}function rt(H,be){const Oe=d.get(be).get(H);f.get(be)!==Oe&&(n.uniformBlockBinding(be,Oe,H.__bindingPointIndex),f.set(be,Oe))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},_={},se=null,k={},m={},v=new WeakMap,M=[],E=null,x=!1,S=null,A=null,D=null,R=null,I=null,L=null,F=null,w=new At(0,0,0),N=0,z=!1,O=null,j=null,ie=null,ce=null,B=null,Ne.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:pe,disable:Fe,bindFramebuffer:Ze,drawBuffers:Qe,useProgram:kt,setBlending:Ft,setMaterial:ut,setFlipSided:Zt,setCullFace:Bt,setLineWidth:Sn,setPolygonOffset:G,setScissorTest:zt,activeTexture:ft,bindTexture:Pt,unbindTexture:Le,compressedTexImage2D:Xt,compressedTexImage3D:P,texImage2D:ue,texImage3D:he,pixelStorei:ke,getParameter:Ue,updateUBOMapping:tt,uniformBlockBinding:rt,texStorage2D:Se,texStorage3D:Re,texSubImage2D:b,texSubImage3D:K,compressedTexSubImage2D:de,compressedTexSubImage3D:me,scissor:we,viewport:Me,reset:pt}}function nA(n,e,t,i,s,a,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ct,p=new WeakMap,_=new Set;let m;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,b){return M?new OffscreenCanvas(P,b):hu("canvas")}function x(P,b,K){let de=1;const me=Xt(P);if((me.width>K||me.height>K)&&(de=K/Math.max(me.width,me.height)),de<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Se=Math.floor(de*me.width),Re=Math.floor(de*me.height);m===void 0&&(m=E(Se,Re));const ue=b?E(Se,Re):m;return ue.width=Se,ue.height=Re,ue.getContext("2d").drawImage(P,0,0,Se,Re),it("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Se+"x"+Re+")."),ue}else return"data"in P&&it("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),P;return P}function S(P){return P.generateMipmaps}function A(P){n.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(P,b,K,de,me,Se=!1){if(P!==null){if(n[P]!==void 0)return n[P];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Re;de&&(Re=e.get("EXT_texture_norm16"),Re||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=b;if(b===n.RED&&(K===n.FLOAT&&(ue=n.R32F),K===n.HALF_FLOAT&&(ue=n.R16F),K===n.UNSIGNED_BYTE&&(ue=n.R8),K===n.UNSIGNED_SHORT&&Re&&(ue=Re.R16_EXT),K===n.SHORT&&Re&&(ue=Re.R16_SNORM_EXT)),b===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(ue=n.R8UI),K===n.UNSIGNED_SHORT&&(ue=n.R16UI),K===n.UNSIGNED_INT&&(ue=n.R32UI),K===n.BYTE&&(ue=n.R8I),K===n.SHORT&&(ue=n.R16I),K===n.INT&&(ue=n.R32I)),b===n.RG&&(K===n.FLOAT&&(ue=n.RG32F),K===n.HALF_FLOAT&&(ue=n.RG16F),K===n.UNSIGNED_BYTE&&(ue=n.RG8),K===n.UNSIGNED_SHORT&&Re&&(ue=Re.RG16_EXT),K===n.SHORT&&Re&&(ue=Re.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(ue=n.RG8UI),K===n.UNSIGNED_SHORT&&(ue=n.RG16UI),K===n.UNSIGNED_INT&&(ue=n.RG32UI),K===n.BYTE&&(ue=n.RG8I),K===n.SHORT&&(ue=n.RG16I),K===n.INT&&(ue=n.RG32I)),b===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(ue=n.RGB8UI),K===n.UNSIGNED_SHORT&&(ue=n.RGB16UI),K===n.UNSIGNED_INT&&(ue=n.RGB32UI),K===n.BYTE&&(ue=n.RGB8I),K===n.SHORT&&(ue=n.RGB16I),K===n.INT&&(ue=n.RGB32I)),b===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(ue=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(ue=n.RGBA16UI),K===n.UNSIGNED_INT&&(ue=n.RGBA32UI),K===n.BYTE&&(ue=n.RGBA8I),K===n.SHORT&&(ue=n.RGBA16I),K===n.INT&&(ue=n.RGBA32I)),b===n.RGB&&(K===n.UNSIGNED_SHORT&&Re&&(ue=Re.RGB16_EXT),K===n.SHORT&&Re&&(ue=Re.RGB16_SNORM_EXT),K===n.UNSIGNED_INT_5_9_9_9_REV&&(ue=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(ue=n.R11F_G11F_B10F)),b===n.RGBA){const he=Se?du:vt.getTransfer(me);K===n.FLOAT&&(ue=n.RGBA32F),K===n.HALF_FLOAT&&(ue=n.RGBA16F),K===n.UNSIGNED_BYTE&&(ue=he===It?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT&&Re&&(ue=Re.RGBA16_EXT),K===n.SHORT&&Re&&(ue=Re.RGBA16_SNORM_EXT),K===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function I(P,b){let K;return P?b===null||b===Ji||b===el?K=n.DEPTH24_STENCIL8:b===ji?K=n.DEPTH32F_STENCIL8:b===Ja&&(K=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ji||b===el?K=n.DEPTH_COMPONENT24:b===ji?K=n.DEPTH_COMPONENT32F:b===Ja&&(K=n.DEPTH_COMPONENT16),K}function L(P,b){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==wn&&P.minFilter!==Ln?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function F(P){const b=P.target;b.removeEventListener("dispose",F),N(b),b.isVideoTexture&&p.delete(b),b.isHTMLTexture&&_.delete(b)}function w(P){const b=P.target;b.removeEventListener("dispose",w),O(b)}function N(P){const b=i.get(P);if(b.__webglInit===void 0)return;const K=P.source,de=v.get(K);if(de){const me=de[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&z(P),Object.keys(de).length===0&&v.delete(K)}i.remove(P)}function z(P){const b=i.get(P);n.deleteTexture(b.__webglTexture);const K=P.source,de=v.get(K);delete de[b.__cacheKey],l.memory.textures--}function O(P){const b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(b.__webglFramebuffer[de]))for(let me=0;me<b.__webglFramebuffer[de].length;me++)n.deleteFramebuffer(b.__webglFramebuffer[de][me]);else n.deleteFramebuffer(b.__webglFramebuffer[de]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[de])}else{if(Array.isArray(b.__webglFramebuffer))for(let de=0;de<b.__webglFramebuffer.length;de++)n.deleteFramebuffer(b.__webglFramebuffer[de]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let de=0;de<b.__webglColorRenderbuffer.length;de++)b.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[de]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=P.textures;for(let de=0,me=K.length;de<me;de++){const Se=i.get(K[de]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),l.memory.textures--),i.remove(K[de])}i.remove(P)}let j=0;function ie(){j=0}function ce(){return j}function B(P){j=P}function q(){const P=j;return P>=s.maxTextures&&it("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),j+=1,P}function X(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function $(P,b){const K=i.get(P);if(P.isVideoTexture&&Pt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){const de=P.image;if(de===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(K,P,b);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+b)}function le(P,b){const K=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){Fe(K,P,b);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+b)}function se(P,b){const K=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){Fe(K,P,b);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+b)}function k(P,b){const K=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&K.__version!==P.version){Ze(K,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+b)}const Z={[yh]:n.REPEAT,[Er]:n.CLAMP_TO_EDGE,[Sh]:n.MIRRORED_REPEAT},De={[wn]:n.NEAREST,[vM]:n.NEAREST_MIPMAP_NEAREST,[gc]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[yd]:n.LINEAR_MIPMAP_NEAREST,[Os]:n.LINEAR_MIPMAP_LINEAR},Ne={[SM]:n.NEVER,[TM]:n.ALWAYS,[MM]:n.LESS,[Sp]:n.LEQUAL,[EM]:n.EQUAL,[Mp]:n.GEQUAL,[bM]:n.GREATER,[wM]:n.NOTEQUAL};function Pe(P,b){if(b.type===ji&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ln||b.magFilter===yd||b.magFilter===gc||b.magFilter===Os||b.minFilter===Ln||b.minFilter===yd||b.minFilter===gc||b.minFilter===Os)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,Z[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Z[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Z[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,De[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,De[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Ne[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===wn||b.minFilter!==gc&&b.minFilter!==Os||b.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function re(P,b){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",F));const de=b.source;let me=v.get(de);me===void 0&&(me={},v.set(de,me));const Se=X(b);if(Se!==P.__cacheKey){me[Se]===void 0&&(me[Se]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,K=!0),me[Se].usedTimes++;const Re=me[P.__cacheKey];Re!==void 0&&(me[P.__cacheKey].usedTimes--,Re.usedTimes===0&&z(b)),P.__cacheKey=Se,P.__webglTexture=me[Se].texture}return K}function xe(P,b,K){return Math.floor(Math.floor(P/K)/b)}function pe(P,b,K,de){const Se=P.updateRanges;if(Se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,K,de,b.data);else{Se.sort((ke,we)=>ke.start-we.start);let Re=0;for(let ke=1;ke<Se.length;ke++){const we=Se[Re],Me=Se[ke],tt=we.start+we.count,rt=xe(Me.start,b.width,4),pt=xe(we.start,b.width,4);Me.start<=tt+1&&rt===pt&&xe(Me.start+Me.count-1,b.width,4)===rt?we.count=Math.max(we.count,Me.start+Me.count-we.start):(++Re,Se[Re]=Me)}Se.length=Re+1;const ue=t.getParameter(n.UNPACK_ROW_LENGTH),he=t.getParameter(n.UNPACK_SKIP_PIXELS),Ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let ke=0,we=Se.length;ke<we;ke++){const Me=Se[ke],tt=Math.floor(Me.start/4),rt=Math.ceil(Me.count/4),pt=tt%b.width,H=Math.floor(tt/b.width),be=rt,fe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,pt),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,pt,H,be,fe,K,de,b.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ue),t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function Fe(P,b,K){let de=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(de=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(de=n.TEXTURE_3D);const me=re(P,b),Se=b.source;t.bindTexture(de,P.__webglTexture,n.TEXTURE0+K);const Re=i.get(Se);if(Se.version!==Re.__version||me===!0){if(t.activeTexture(n.TEXTURE0+K),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const fe=vt.getPrimaries(vt.workingColorSpace),Oe=b.colorSpace===es?null:vt.getPrimaries(b.colorSpace),Ae=b.colorSpace===es||fe===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let he=x(b.image,!1,s.maxTextureSize);he=Le(b,he);const Ue=a.convert(b.format,b.colorSpace),ke=a.convert(b.type);let we=R(b.internalFormat,Ue,ke,b.normalized,b.colorSpace,b.isVideoTexture);Pe(de,b);let Me;const tt=b.mipmaps,rt=b.isVideoTexture!==!0,pt=Re.__version===void 0||me===!0,H=Se.dataReady,be=L(b,he);if(b.isDepthTexture)we=I(b.format===ks,b.type),pt&&(rt?t.texStorage2D(n.TEXTURE_2D,1,we,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,we,he.width,he.height,0,Ue,ke,null));else if(b.isDataTexture)if(tt.length>0){rt&&pt&&t.texStorage2D(n.TEXTURE_2D,be,we,tt[0].width,tt[0].height);for(let fe=0,Oe=tt.length;fe<Oe;fe++)Me=tt[fe],rt?H&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Me.width,Me.height,Ue,ke,Me.data):t.texImage2D(n.TEXTURE_2D,fe,we,Me.width,Me.height,0,Ue,ke,Me.data);b.generateMipmaps=!1}else rt?(pt&&t.texStorage2D(n.TEXTURE_2D,be,we,he.width,he.height),H&&pe(b,he,Ue,ke)):t.texImage2D(n.TEXTURE_2D,0,we,he.width,he.height,0,Ue,ke,he.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){rt&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,we,tt[0].width,tt[0].height,he.depth);for(let fe=0,Oe=tt.length;fe<Oe;fe++)if(Me=tt[fe],b.format!==Pi)if(Ue!==null)if(rt){if(H)if(b.layerUpdates.size>0){const Ae=q_(Me.width,Me.height,b.format,b.type);for(const ge of b.layerUpdates){const We=Me.data.subarray(ge*Ae/Me.data.BYTES_PER_ELEMENT,(ge+1)*Ae/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,ge,Me.width,Me.height,1,Ue,We)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,he.depth,Ue,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,we,Me.width,Me.height,he.depth,0,Me.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,he.depth,Ue,ke,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,we,Me.width,Me.height,he.depth,0,Ue,ke,Me.data)}else{rt&&pt&&t.texStorage2D(n.TEXTURE_2D,be,we,tt[0].width,tt[0].height);for(let fe=0,Oe=tt.length;fe<Oe;fe++)Me=tt[fe],b.format!==Pi?Ue!==null?rt?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,Me.width,Me.height,Ue,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,we,Me.width,Me.height,0,Me.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?H&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Me.width,Me.height,Ue,ke,Me.data):t.texImage2D(n.TEXTURE_2D,fe,we,Me.width,Me.height,0,Ue,ke,Me.data)}else if(b.isDataArrayTexture)if(rt){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,we,he.width,he.height,he.depth),H)if(b.layerUpdates.size>0){const fe=q_(he.width,he.height,b.format,b.type);for(const Oe of b.layerUpdates){const Ae=he.data.subarray(Oe*fe/he.data.BYTES_PER_ELEMENT,(Oe+1)*fe/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Oe,he.width,he.height,1,Ue,ke,Ae)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ue,ke,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,he.width,he.height,he.depth,0,Ue,ke,he.data);else if(b.isData3DTexture)rt?(pt&&t.texStorage3D(n.TEXTURE_3D,be,we,he.width,he.height,he.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ue,ke,he.data)):t.texImage3D(n.TEXTURE_3D,0,we,he.width,he.height,he.depth,0,Ue,ke,he.data);else if(b.isFramebufferTexture){if(pt)if(rt)t.texStorage2D(n.TEXTURE_2D,be,we,he.width,he.height);else{let fe=he.width,Oe=he.height;for(let Ae=0;Ae<be;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,we,fe,Oe,0,Ue,ke,null),fe>>=1,Oe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){const fe=n.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),he.parentNode!==fe){fe.appendChild(he),_.add(b),fe.onpaint=st=>{const Ot=st.changedElements;for(const wt of _)Ot.includes(wt.image)&&(wt.needsUpdate=!0)},fe.requestPaint();return}const Oe=0,Ae=n.RGBA,ge=n.RGBA,We=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Oe,Ae,ge,We,he),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(tt.length>0){if(rt&&pt){const fe=Xt(tt[0]);t.texStorage2D(n.TEXTURE_2D,be,we,fe.width,fe.height)}for(let fe=0,Oe=tt.length;fe<Oe;fe++)Me=tt[fe],rt?H&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ue,ke,Me):t.texImage2D(n.TEXTURE_2D,fe,we,Ue,ke,Me);b.generateMipmaps=!1}else if(rt){if(pt){const fe=Xt(he);t.texStorage2D(n.TEXTURE_2D,be,we,fe.width,fe.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,ke,he)}else t.texImage2D(n.TEXTURE_2D,0,we,Ue,ke,he);S(b)&&A(de),Re.__version=Se.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ze(P,b,K){if(b.image.length!==6)return;const de=re(P,b),me=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+K);const Se=i.get(me);if(me.version!==Se.__version||de===!0){t.activeTexture(n.TEXTURE0+K);const Re=vt.getPrimaries(vt.workingColorSpace),ue=b.colorSpace===es?null:vt.getPrimaries(b.colorSpace),he=b.colorSpace===es||Re===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ue=b.isCompressedTexture||b.image[0].isCompressedTexture,ke=b.image[0]&&b.image[0].isDataTexture,we=[];for(let ge=0;ge<6;ge++)!Ue&&!ke?we[ge]=x(b.image[ge],!0,s.maxCubemapSize):we[ge]=ke?b.image[ge].image:b.image[ge],we[ge]=Le(b,we[ge]);const Me=we[0],tt=a.convert(b.format,b.colorSpace),rt=a.convert(b.type),pt=R(b.internalFormat,tt,rt,b.normalized,b.colorSpace),H=b.isVideoTexture!==!0,be=Se.__version===void 0||de===!0,fe=me.dataReady;let Oe=L(b,Me);Pe(n.TEXTURE_CUBE_MAP,b);let Ae;if(Ue){H&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,pt,Me.width,Me.height);for(let ge=0;ge<6;ge++){Ae=we[ge].mipmaps;for(let We=0;We<Ae.length;We++){const st=Ae[We];b.format!==Pi?tt!==null?H?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,0,0,st.width,st.height,tt,st.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,pt,st.width,st.height,0,st.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,0,0,st.width,st.height,tt,rt,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,pt,st.width,st.height,0,tt,rt,st.data)}}}else{if(Ae=b.mipmaps,H&&be){Ae.length>0&&Oe++;const ge=Xt(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,pt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ke){H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,we[ge].width,we[ge].height,tt,rt,we[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,pt,we[ge].width,we[ge].height,0,tt,rt,we[ge].data);for(let We=0;We<Ae.length;We++){const Ot=Ae[We].image[ge].image;H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,0,0,Ot.width,Ot.height,tt,rt,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,pt,Ot.width,Ot.height,0,tt,rt,Ot.data)}}else{H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,tt,rt,we[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,pt,tt,rt,we[ge]);for(let We=0;We<Ae.length;We++){const st=Ae[We];H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,0,0,tt,rt,st.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,pt,tt,rt,st.image[ge])}}}S(b)&&A(n.TEXTURE_CUBE_MAP),Se.__version=me.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Qe(P,b,K,de,me,Se){const Re=a.convert(K.format,K.colorSpace),ue=a.convert(K.type),he=R(K.internalFormat,Re,ue,K.normalized,K.colorSpace),Ue=i.get(b),ke=i.get(K);if(ke.__renderTarget=b,!Ue.__hasExternalTextures){const we=Math.max(1,b.width>>Se),Me=Math.max(1,b.height>>Se);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,Se,he,we,Me,b.depth,0,Re,ue,null):t.texImage2D(me,Se,he,we,Me,0,Re,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ft(b)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,me,ke.__webglTexture,0,zt(b)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,de,me,ke.__webglTexture,Se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(P,b,K){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){const de=b.depthTexture,me=de&&de.isDepthTexture?de.type:null,Se=I(b.stencilBuffer,me),Re=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ft(b)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt(b),Se,b.width,b.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt(b),Se,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Se,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,P)}else{const de=b.textures;for(let me=0;me<de.length;me++){const Se=de[me],Re=a.convert(Se.format,Se.colorSpace),ue=a.convert(Se.type),he=R(Se.internalFormat,Re,ue,Se.normalized,Se.colorSpace);ft(b)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt(b),he,b.width,b.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt(b),he,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,he,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ct(P,b,K){const de=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=i.get(b.depthTexture);if(me.__renderTarget=b,(!me.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de){if(me.__webglInit===void 0&&(me.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,b.depthTexture);const Ue=a.convert(b.depthTexture.format),ke=a.convert(b.depthTexture.type);let we;b.depthTexture.format===Ar?we=n.DEPTH_COMPONENT24:b.depthTexture.format===ks&&(we=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,we,b.width,b.height,0,Ue,ke,null)}}else $(b.depthTexture,0);const Se=me.__webglTexture,Re=zt(b),ue=de?n.TEXTURE_CUBE_MAP_POSITIVE_X+K:n.TEXTURE_2D,he=b.depthTexture.format===ks?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ar)ft(b)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,ue,Se,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,he,ue,Se,0);else if(b.depthTexture.format===ks)ft(b)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,ue,Se,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,he,ue,Se,0);else throw new Error("Unknown depthTexture format")}function bt(P){const b=i.get(P),K=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const de=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),de){const me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,de.removeEventListener("dispose",me)};de.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=de}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let de=0;de<6;de++)ct(b.__webglFramebuffer[de],P,de);else{const de=P.texture.mipmaps;de&&de.length>0?ct(b.__webglFramebuffer[0],P,0):ct(b.__webglFramebuffer,P,0)}else if(K){b.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[de]),b.__webglDepthbuffer[de]===void 0)b.__webglDepthbuffer[de]=n.createRenderbuffer(),kt(b.__webglDepthbuffer[de],P,!1);else{const me=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=b.__webglDepthbuffer[de];n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,Se)}}else{const de=P.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),kt(b.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,Se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(P,b,K){const de=i.get(P);b!==void 0&&Qe(de.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&bt(P)}function ut(P){const b=P.texture,K=i.get(P),de=i.get(b);P.addEventListener("dispose",w);const me=P.textures,Se=P.isWebGLCubeRenderTarget===!0,Re=me.length>1;if(Re||(de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture()),de.__version=b.version,l.memory.textures++),Se){K.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[ue]=[];for(let he=0;he<b.mipmaps.length;he++)K.__webglFramebuffer[ue][he]=n.createFramebuffer()}else K.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)K.__webglFramebuffer[ue]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(Re)for(let ue=0,he=me.length;ue<he;ue++){const Ue=i.get(me[ue]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),l.memory.textures++)}if(P.samples>0&&ft(P)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ue=0;ue<me.length;ue++){const he=me[ue];K.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[ue]);const Ue=a.convert(he.format,he.colorSpace),ke=a.convert(he.type),we=R(he.internalFormat,Ue,ke,he.normalized,he.colorSpace,P.isXRRenderTarget===!0),Me=zt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,we,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,K.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),kt(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Se){t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)Qe(K.__webglFramebuffer[ue][he],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else Qe(K.__webglFramebuffer[ue],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(b)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ue=0,he=me.length;ue<he;ue++){const Ue=me[ue],ke=i.get(Ue);let we=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,ke.__webglTexture),Pe(we,Ue),Qe(K.__webglFramebuffer,P,Ue,n.COLOR_ATTACHMENT0+ue,we,0),S(Ue)&&A(we)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,de.__webglTexture),Pe(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)Qe(K.__webglFramebuffer[he],P,b,n.COLOR_ATTACHMENT0,ue,he);else Qe(K.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,ue,0);S(b)&&A(ue),t.unbindTexture()}P.depthBuffer&&bt(P)}function Zt(P){const b=P.textures;for(let K=0,de=b.length;K<de;K++){const me=b[K];if(S(me)){const Se=D(P),Re=i.get(me).__webglTexture;t.bindTexture(Se,Re),A(Se),t.unbindTexture()}}}const Bt=[],Sn=[];function G(P){if(P.samples>0){if(ft(P)===!1){const b=P.textures,K=P.width,de=P.height;let me=n.COLOR_BUFFER_BIT;const Se=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(P),ue=b.length>1;if(ue)for(let Ue=0;Ue<b.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const he=P.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ue=0;Ue<b.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ue]);const ke=i.get(b[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,K,de,0,0,K,de,me,n.NEAREST),f===!0&&(Bt.length=0,Sn.length=0,Bt.push(n.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Bt.push(Se),Sn.push(Se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Sn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Ue=0;Ue<b.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ue]);const ke=i.get(b[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&f){const b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function zt(P){return Math.min(s.maxSamples,P.samples)}function ft(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pt(P){const b=l.render.frame;p.get(P)!==b&&(p.set(P,b),P.update())}function Le(P,b){const K=P.colorSpace,de=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==fu&&K!==es&&(vt.getTransfer(K)===It?(de!==Pi||me!==ri)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",K)),b}function Xt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=q,this.resetTextureUnits=ie,this.getTextureUnits=ce,this.setTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=le,this.setTexture3D=se,this.setTextureCube=k,this.rebindTextures=Ft,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function iA(n,e){function t(i,s=es){let a;const l=vt.getTransfer(s);if(i===ri)return n.UNSIGNED_BYTE;if(i===gp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_p)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$v)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qv)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jv)return n.BYTE;if(i===Yv)return n.SHORT;if(i===Ja)return n.UNSIGNED_SHORT;if(i===mp)return n.INT;if(i===Ji)return n.UNSIGNED_INT;if(i===ji)return n.FLOAT;if(i===Tr)return n.HALF_FLOAT;if(i===Kv)return n.ALPHA;if(i===Zv)return n.RGB;if(i===Pi)return n.RGBA;if(i===Ar)return n.DEPTH_COMPONENT;if(i===ks)return n.DEPTH_STENCIL;if(i===Qv)return n.RED;if(i===vp)return n.RED_INTEGER;if(i===Gs)return n.RG;if(i===xp)return n.RG_INTEGER;if(i===yp)return n.RGBA_INTEGER;if(i===Jc||i===eu||i===tu||i===nu)if(l===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Jc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Jc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mh||i===Eh||i===bh||i===wh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Mh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Eh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Th||i===Ah||i===Ch||i===Rh||i===Ph||i===cu||i===Dh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Th||i===Ah)return l===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ch)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rh)return a.COMPRESSED_R11_EAC;if(i===Ph)return a.COMPRESSED_SIGNED_R11_EAC;if(i===cu)return a.COMPRESSED_RG11_EAC;if(i===Dh)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Lh||i===Ih||i===Nh||i===Fh||i===Uh||i===Oh||i===kh||i===Bh||i===zh||i===Vh||i===Hh||i===Gh||i===Wh||i===Xh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Lh)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ih)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nh)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fh)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uh)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oh)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kh)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bh)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zh)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vh)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hh)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gh)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wh)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xh)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jh||i===Yh||i===$h)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===jh)return l===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$h)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qh||i===Kh||i===uu||i===Zh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===qh)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Kh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===el?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const rA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ax(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new er({vertexShader:rA,fragmentShader:sA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Li(new fl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aA extends js{constructor(e,t){super();const i=this;let s=null,a=1,l=null,u="local-floor",f=1,d=null,p=null,_=null,m=null,v=null,M=null;const E=typeof XRWebGLBinding<"u",x=new oA,S={},A=t.getContextAttributes();let D=null,R=null;const I=[],L=[],F=new Ct;let w=null;const N=new mi;N.viewport=new nn;const z=new mi;z.viewport=new nn;const O=[N,z],j=new _E;let ie=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let xe=I[re];return xe===void 0&&(xe=new Cd,I[re]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(re){let xe=I[re];return xe===void 0&&(xe=new Cd,I[re]=xe),xe.getGripSpace()},this.getHand=function(re){let xe=I[re];return xe===void 0&&(xe=new Cd,I[re]=xe),xe.getHandSpace()};function B(re){const xe=L.indexOf(re.inputSource);if(xe===-1)return;const pe=I[xe];pe!==void 0&&(pe.update(re.inputSource,re.frame,d||l),pe.dispatchEvent({type:re.type,data:re.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",X);for(let re=0;re<I.length;re++){const xe=L[re];xe!==null&&(L[re]=null,I[re].disconnect(xe))}ie=null,ce=null,x.reset();for(const re in S)delete S[re];e.setRenderTarget(D),v=null,m=null,_=null,s=null,R=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){a=re,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){u=re,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(re){d=re},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return _===null&&E&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(D=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",X),A.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Fe=null,Ze=null;A.depth&&(Ze=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=A.stencil?ks:Ar,Fe=A.stencil?el:Ji);const Qe={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:a};_=this.getBinding(),m=_.createProjectionLayer(Qe),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),R=new Ki(m.textureWidth,m.textureHeight,{format:Pi,type:ri,depthTexture:new Bo(m.textureWidth,m.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const pe={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),R=new Ki(v.framebufferWidth,v.framebufferHeight,{format:Pi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await s.requestReferenceSpace(u),Pe.setContext(s),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(re){for(let xe=0;xe<re.removed.length;xe++){const pe=re.removed[xe],Fe=L.indexOf(pe);Fe>=0&&(L[Fe]=null,I[Fe].disconnect(pe))}for(let xe=0;xe<re.added.length;xe++){const pe=re.added[xe];let Fe=L.indexOf(pe);if(Fe===-1){for(let Qe=0;Qe<I.length;Qe++)if(Qe>=L.length){L.push(pe),Fe=Qe;break}else if(L[Qe]===null){L[Qe]=pe,Fe=Qe;break}if(Fe===-1)break}const Ze=I[Fe];Ze&&Ze.connect(pe)}}const $=new ne,le=new ne;function se(re,xe,pe){$.setFromMatrixPosition(xe.matrixWorld),le.setFromMatrixPosition(pe.matrixWorld);const Fe=$.distanceTo(le),Ze=xe.projectionMatrix.elements,Qe=pe.projectionMatrix.elements,kt=Ze[14]/(Ze[10]-1),ct=Ze[14]/(Ze[10]+1),bt=(Ze[9]+1)/Ze[5],Ft=(Ze[9]-1)/Ze[5],ut=(Ze[8]-1)/Ze[0],Zt=(Qe[8]+1)/Qe[0],Bt=kt*ut,Sn=kt*Zt,G=Fe/(-ut+Zt),zt=G*-ut;if(xe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(zt),re.translateZ(G),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ze[10]===-1)re.projectionMatrix.copy(xe.projectionMatrix),re.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const ft=kt+G,Pt=ct+G,Le=Bt-zt,Xt=Sn+(Fe-zt),P=bt*ct/Pt*ft,b=Ft*ct/Pt*ft;re.projectionMatrix.makePerspective(Le,Xt,P,b,ft,Pt),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function k(re,xe){xe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(xe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let xe=re.near,pe=re.far;x.texture!==null&&(x.depthNear>0&&(xe=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),j.near=z.near=N.near=xe,j.far=z.far=N.far=pe,(ie!==j.near||ce!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),ie=j.near,ce=j.far),j.layers.mask=re.layers.mask|6,N.layers.mask=j.layers.mask&-5,z.layers.mask=j.layers.mask&-3;const Fe=re.parent,Ze=j.cameras;k(j,Fe);for(let Qe=0;Qe<Ze.length;Qe++)k(Ze[Qe],Fe);Ze.length===2?se(j,N,z):j.projectionMatrix.copy(N.projectionMatrix),Z(re,j,Fe)};function Z(re,xe,pe){pe===null?re.matrix.copy(xe.matrixWorld):(re.matrix.copy(pe.matrixWorld),re.matrix.invert(),re.matrix.multiply(xe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(xe.projectionMatrix),re.projectionMatrixInverse.copy(xe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=pu*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(m===null&&v===null))return f},this.setFoveation=function(re){f=re,m!==null&&(m.fixedFoveation=re),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(j)},this.getCameraTexture=function(re){return S[re]};let De=null;function Ne(re,xe){if(p=xe.getViewerPose(d||l),M=xe,p!==null){const pe=p.views;v!==null&&(e.setRenderTargetFramebuffer(R,v.framebuffer),e.setRenderTarget(R));let Fe=!1;pe.length!==j.cameras.length&&(j.cameras.length=0,Fe=!0);for(let ct=0;ct<pe.length;ct++){const bt=pe[ct];let Ft=null;if(v!==null)Ft=v.getViewport(bt);else{const Zt=_.getViewSubImage(m,bt);Ft=Zt.viewport,ct===0&&(e.setRenderTargetTextures(R,Zt.colorTexture,Zt.depthStencilTexture),e.setRenderTarget(R))}let ut=O[ct];ut===void 0&&(ut=new mi,ut.layers.enable(ct),ut.viewport=new nn,O[ct]=ut),ut.matrix.fromArray(bt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(bt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),ct===0&&(j.matrix.copy(ut.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Fe===!0&&j.cameras.push(ut)}const Ze=s.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){_=i.getBinding();const ct=_.getDepthInformation(pe[0]);ct&&ct.isValid&&ct.texture&&x.init(ct,s.renderState)}if(Ze&&Ze.includes("camera-access")&&E){e.state.unbindTexture(),_=i.getBinding();for(let ct=0;ct<pe.length;ct++){const bt=pe[ct].camera;if(bt){let Ft=S[bt];Ft||(Ft=new ax,S[bt]=Ft);const ut=_.getCameraImage(bt);Ft.sourceTexture=ut}}}}for(let pe=0;pe<I.length;pe++){const Fe=L[pe],Ze=I[pe];Fe!==null&&Ze!==void 0&&Ze.update(Fe,xe,d||l)}De&&De(re,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),M=null}const Pe=new fx;Pe.setAnimationLoop(Ne),this.setAnimationLoop=function(re){De=re},this.dispose=function(){}}}const lA=new on,vx=new lt;vx.set(-1,0,0,0,1,0,0,0,1);function cA(n,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function i(x,S){S.color.getRGB(x.fogColor.value,lx(n)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function s(x,S,A,D,R){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(x,S):S.isMeshLambertMaterial?(a(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(x,S),_(x,S)):S.isMeshPhongMaterial?(a(x,S),p(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(x,S),m(x,S),S.isMeshPhysicalMaterial&&v(x,S,R)):S.isMeshMatcapMaterial?(a(x,S),M(x,S)):S.isMeshDepthMaterial?a(x,S):S.isMeshDistanceMaterial?(a(x,S),E(x,S)):S.isMeshNormalMaterial?a(x,S):S.isLineBasicMaterial?(l(x,S),S.isLineDashedMaterial&&u(x,S)):S.isPointsMaterial?f(x,S,A,D):S.isSpriteMaterial?d(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Zn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Zn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const A=e.get(S),D=A.envMap,R=A.envMapRotation;D&&(x.envMap.value=D,x.envMapRotation.value.setFromMatrix4(lA.makeRotationFromEuler(R)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(vx),x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function l(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function u(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function f(x,S,A,D){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*A,x.scale.value=D*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function d(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function _(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function m(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function v(x,S,A){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Zn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,S){S.matcap&&(x.matcap.value=S.matcap)}function E(x,S){const A=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uA(n,e,t,i){let s={},a={},l=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(A,D){const R=D.program;i.uniformBlockBinding(A,R)}function d(A,D){let R=s[A.id];R===void 0&&(M(A),R=p(A),s[A.id]=R,A.addEventListener("dispose",x));const I=D.program;i.updateUBOMapping(A,I);const L=e.render.frame;a[A.id]!==L&&(m(A),a[A.id]=L)}function p(A){const D=_();A.__bindingPointIndex=D;const R=n.createBuffer(),I=A.__size,L=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,I,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,R),R}function _(){for(let A=0;A<u;A++)if(l.indexOf(A)===-1)return l.push(A),A;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(A){const D=s[A.id],R=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let L=0,F=R.length;L<F;L++){const w=Array.isArray(R[L])?R[L]:[R[L]];for(let N=0,z=w.length;N<z;N++){const O=w[N];if(v(O,L,N,I)===!0){const j=O.__offset,ie=Array.isArray(O.value)?O.value:[O.value];let ce=0;for(let B=0;B<ie.length;B++){const q=ie[B],X=E(q);typeof q=="number"||typeof q=="boolean"?(O.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,j+ce,O.__data)):q.isMatrix3?(O.__data[0]=q.elements[0],O.__data[1]=q.elements[1],O.__data[2]=q.elements[2],O.__data[3]=0,O.__data[4]=q.elements[3],O.__data[5]=q.elements[4],O.__data[6]=q.elements[5],O.__data[7]=0,O.__data[8]=q.elements[6],O.__data[9]=q.elements[7],O.__data[10]=q.elements[8],O.__data[11]=0):ArrayBuffer.isView(q)?O.__data.set(new q.constructor(q.buffer,q.byteOffset,O.__data.length)):(q.toArray(O.__data,ce),ce+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(A,D,R,I){const L=A.value,F=D+"_"+R;if(I[F]===void 0)return typeof L=="number"||typeof L=="boolean"?I[F]=L:ArrayBuffer.isView(L)?I[F]=L.slice():I[F]=L.clone(),!0;{const w=I[F];if(typeof L=="number"||typeof L=="boolean"){if(w!==L)return I[F]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(w.equals(L)===!1)return w.copy(L),!0}}return!1}function M(A){const D=A.uniforms;let R=0;const I=16;for(let F=0,w=D.length;F<w;F++){const N=Array.isArray(D[F])?D[F]:[D[F]];for(let z=0,O=N.length;z<O;z++){const j=N[z],ie=Array.isArray(j.value)?j.value:[j.value];for(let ce=0,B=ie.length;ce<B;ce++){const q=ie[ce],X=E(q),$=R%I,le=$%X.boundary,se=$+le;R+=le,se!==0&&I-se<X.storage&&(R+=I-se),j.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=R,R+=X.storage}}}const L=R%I;return L>0&&(R+=I-L),A.__size=R,A.__cache={},this}function E(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(D.boundary=16,D.storage=A.byteLength):it("WebGLRenderer: Unsupported uniform value type.",A),D}function x(A){const D=A.target;D.removeEventListener("dispose",x);const R=l.indexOf(D.__bindingPointIndex);l.splice(R,1),n.deleteBuffer(s[D.id]),delete s[D.id],delete a[D.id]}function S(){for(const A in s)n.deleteBuffer(s[A]);l=[],s={},a={}}return{bind:f,update:d,dispose:S}}const fA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function dA(){return zi===null&&(zi=new QM(fA,16,16,Gs,Tr),zi.name="DFG_LUT",zi.minFilter=Ln,zi.magFilter=Ln,zi.wrapS=Er,zi.wrapT=Er,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class hA{constructor(e={}){const{canvas:t=CM(),context:i=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:v=ri}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=l;const E=v,x=new Set([yp,xp,vp]),S=new Set([ri,Ji,Ja,el,gp,_p]),A=new Uint32Array(4),D=new Int32Array(4),R=new ne;let I=null,L=null;const F=[],w=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let O=!1,j=null;this._outputColorSpace=pi;let ie=0,ce=0,B=null,q=-1,X=null;const $=new nn,le=new nn;let se=null;const k=new At(0);let Z=0,De=t.width,Ne=t.height,Pe=1,re=null,xe=null;const pe=new nn(0,0,De,Ne),Fe=new nn(0,0,De,Ne);let Ze=!1;const Qe=new wp;let kt=!1,ct=!1;const bt=new on,Ft=new ne,ut=new nn,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Sn(){return B===null?Pe:1}let G=i;function zt(C,Y){return t.getContext(C,Y)}try{const C={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pp}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",st,!1),G===null){const Y="webgl2";if(G=zt(Y,C),G===null)throw zt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Et("WebGLRenderer: "+C.message),C}let ft,Pt,Le,Xt,P,b,K,de,me,Se,Re,ue,he,Ue,ke,we,Me,tt,rt,pt,H,be,fe;function Oe(){ft=new dw(G),ft.init(),H=new iA(G,ft),Pt=new rw(G,ft,e,H),Le=new tA(G,ft),Pt.reversedDepthBuffer&&m&&Le.buffers.depth.setReversed(!0),Xt=new mw(G),P=new VT,b=new nA(G,ft,Le,P,Pt,H,Xt),K=new fw(z),de=new xE(G),be=new nw(G,de),me=new hw(G,de,Xt,be),Se=new _w(G,me,de,be,Xt),tt=new gw(G,Pt,b),ke=new sw(P),Re=new zT(z,K,ft,Pt,be,ke),ue=new cA(z,P),he=new GT,Ue=new qT(ft),Me=new tw(z,K,Le,Se,M,f),we=new eA(z,Se,Pt),fe=new uA(G,Xt,Pt,Le),rt=new iw(G,ft,Xt),pt=new pw(G,ft,Xt),Xt.programs=Re.programs,z.capabilities=Pt,z.extensions=ft,z.properties=P,z.renderLists=he,z.shadowMap=we,z.state=Le,z.info=Xt}Oe(),E!==ri&&(N=new xw(E,t.width,t.height,s,a));const Ae=new aA(z,G);this.xr=Ae,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=ft.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ft.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(C){C!==void 0&&(Pe=C,this.setSize(De,Ne,!1))},this.getSize=function(C){return C.set(De,Ne)},this.setSize=function(C,Y,oe=!0){if(Ae.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}De=C,Ne=Y,t.width=Math.floor(C*Pe),t.height=Math.floor(Y*Pe),oe===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(De*Pe,Ne*Pe).floor()},this.setDrawingBufferSize=function(C,Y,oe){De=C,Ne=Y,Pe=oe,t.width=Math.floor(C*oe),t.height=Math.floor(Y*oe),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(E===ri){Et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){it("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy($)},this.getViewport=function(C){return C.copy(pe)},this.setViewport=function(C,Y,oe,ee){C.isVector4?pe.set(C.x,C.y,C.z,C.w):pe.set(C,Y,oe,ee),Le.viewport($.copy(pe).multiplyScalar(Pe).round())},this.getScissor=function(C){return C.copy(Fe)},this.setScissor=function(C,Y,oe,ee){C.isVector4?Fe.set(C.x,C.y,C.z,C.w):Fe.set(C,Y,oe,ee),Le.scissor(le.copy(Fe).multiplyScalar(Pe).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(C){Le.setScissorTest(Ze=C)},this.setOpaqueSort=function(C){re=C},this.setTransparentSort=function(C){xe=C},this.getClearColor=function(C){return C.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,oe=!0){let ee=0;if(C){let J=!1;if(B!==null){const Ce=B.texture.format;J=x.has(Ce)}if(J){const Ce=B.texture.type,Ve=S.has(Ce),Te=Me.getClearColor(),Xe=Me.getClearAlpha(),Ke=Te.r,ot=Te.g,at=Te.b;Ve?(A[0]=Ke,A[1]=ot,A[2]=at,A[3]=Xe,G.clearBufferuiv(G.COLOR,0,A)):(D[0]=Ke,D[1]=ot,D[2]=at,D[3]=Xe,G.clearBufferiv(G.COLOR,0,D))}else ee|=G.COLOR_BUFFER_BIT}Y&&(ee|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ee|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&G.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",st,!1),Me.dispose(),he.dispose(),Ue.dispose(),P.dispose(),K.dispose(),Se.dispose(),be.dispose(),fe.dispose(),Re.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",us),Ae.removeEventListener("sessionend",qs),ir.stop()};function ge(C){C.preventDefault(),A_("WebGLRenderer: Context Lost."),O=!0}function We(){A_("WebGLRenderer: Context Restored."),O=!1;const C=Xt.autoReset,Y=we.enabled,oe=we.autoUpdate,ee=we.needsUpdate,J=we.type;Oe(),Xt.autoReset=C,we.enabled=Y,we.autoUpdate=oe,we.needsUpdate=ee,we.type=J}function st(C){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ot(C){const Y=C.target;Y.removeEventListener("dispose",Ot),wt(Y)}function wt(C){Fn(C),P.remove(C)}function Fn(C){const Y=P.get(C).programs;Y!==void 0&&(Y.forEach(function(oe){Re.releaseProgram(oe)}),C.isShaderMaterial&&Re.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,oe,ee,J,Ce){Y===null&&(Y=Zt);const Ve=J.isMesh&&J.matrixWorld.determinant()<0,Te=ml(C,Y,oe,ee,J);Le.setMaterial(ee,Ve);let Xe=oe.index,Ke=1;if(ee.wireframe===!0){if(Xe=me.getWireframeAttribute(oe),Xe===void 0)return;Ke=2}const ot=oe.drawRange,at=oe.attributes.position;let Ye=ot.start*Ke,yt=(ot.start+ot.count)*Ke;Ce!==null&&(Ye=Math.max(Ye,Ce.start*Ke),yt=Math.min(yt,(Ce.start+Ce.count)*Ke)),Xe!==null?(Ye=Math.max(Ye,0),yt=Math.min(yt,Xe.count)):at!=null&&(Ye=Math.max(Ye,0),yt=Math.min(yt,at.count));const Vt=yt-Ye;if(Vt<0||Vt===1/0)return;be.setup(J,ee,Te,oe,Xe);let qt,Dt=rt;if(Xe!==null&&(qt=de.get(Xe),Dt=pt,Dt.setIndex(qt)),J.isMesh)ee.wireframe===!0?(Le.setLineWidth(ee.wireframeLinewidth*Sn()),Dt.setMode(G.LINES)):Dt.setMode(G.TRIANGLES);else if(J.isLine){let an=ee.linewidth;an===void 0&&(an=1),Le.setLineWidth(an*Sn()),J.isLineSegments?Dt.setMode(G.LINES):J.isLineLoop?Dt.setMode(G.LINE_LOOP):Dt.setMode(G.LINE_STRIP)}else J.isPoints?Dt.setMode(G.POINTS):J.isSprite&&Dt.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Dt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const an=J._multiDrawStarts,Be=J._multiDrawCounts,Mn=J._multiDrawCount,mt=Xe?de.get(Xe).bytesPerElement:1,zn=P.get(ee).currentProgram.getUniforms();for(let Vn=0;Vn<Mn;Vn++)zn.setValue(G,"_gl_DrawID",Vn),Dt.render(an[Vn]/mt,Be[Vn])}else if(J.isInstancedMesh)Dt.renderInstances(Ye,Vt,J.count);else if(oe.isInstancedBufferGeometry){const an=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Be=Math.min(oe.instanceCount,an);Dt.renderInstances(Ye,Vt,Be)}else Dt.render(Ye,Vt)};function si(C,Y,oe){C.transparent===!0&&C.side===Mr&&C.forceSinglePass===!1?(C.side=Zn,C.needsUpdate=!0,Ks(C,Y,oe),C.side=os,C.needsUpdate=!0,Ks(C,Y,oe),C.side=Mr):Ks(C,Y,oe)}this.compile=function(C,Y,oe=null){oe===null&&(oe=C),L=Ue.get(oe),L.init(Y),w.push(L),oe.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(L.pushLight(J),J.castShadow&&L.pushShadow(J))}),C!==oe&&C.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(L.pushLight(J),J.castShadow&&L.pushShadow(J))}),L.setupLights();const ee=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ce=J.material;if(Ce)if(Array.isArray(Ce))for(let Ve=0;Ve<Ce.length;Ve++){const Te=Ce[Ve];si(Te,oe,J),ee.add(Te)}else si(Ce,oe,J),ee.add(Ce)}),L=w.pop(),ee},this.compileAsync=function(C,Y,oe=null){const ee=this.compile(C,Y,oe);return new Promise(J=>{function Ce(){if(ee.forEach(function(Ve){P.get(Ve).currentProgram.isReady()&&ee.delete(Ve)}),ee.size===0){J(C);return}setTimeout(Ce,10)}ft.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let nr=null;function $s(C){nr&&nr(C)}function us(){ir.stop()}function qs(){ir.start()}const ir=new fx;ir.setAnimationLoop($s),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(C){nr=C,Ae.setAnimationLoop(C),C===null?ir.stop():ir.start()},Ae.addEventListener("sessionstart",us),Ae.addEventListener("sessionend",qs),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;j!==null&&j.renderStart(C,Y);const oe=Ae.enabled===!0&&Ae.isPresenting===!0,ee=N!==null&&(B===null||oe)&&N.begin(z,B);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(Y),Y=Ae.getCamera()),C.isScene===!0&&C.onBeforeRender(z,C,Y,B),L=Ue.get(C,w.length),L.init(Y),L.state.textureUnits=b.getTextureUnits(),w.push(L),bt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Qe.setFromProjectionMatrix(bt,Yi,Y.reversedDepth),ct=this.localClippingEnabled,kt=ke.init(this.clippingPlanes,ct),I=he.get(C,F.length),I.init(),F.push(I),Ae.enabled===!0&&Ae.isPresenting===!0){const Ve=z.xr.getDepthSensingMesh();Ve!==null&&Yo(Ve,Y,-1/0,z.sortObjects)}Yo(C,Y,0,z.sortObjects),I.finish(),z.sortObjects===!0&&I.sort(re,xe),Bt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Bt&&Me.addToRenderList(I,C),this.info.render.frame++,kt===!0&&ke.beginShadows();const J=L.state.shadowsArray;if(we.render(J,C,Y),kt===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&N.hasRenderPass())===!1){const Ve=I.opaque,Te=I.transmissive;if(L.setupLights(),Y.isArrayCamera){const Xe=Y.cameras;if(Te.length>0)for(let Ke=0,ot=Xe.length;Ke<ot;Ke++){const at=Xe[Ke];Ii(Ve,Te,C,at)}Bt&&Me.render(C);for(let Ke=0,ot=Xe.length;Ke<ot;Ke++){const at=Xe[Ke];hl(I,C,at,at.viewport)}}else Te.length>0&&Ii(Ve,Te,C,Y),Bt&&Me.render(C),hl(I,C,Y)}B!==null&&ce===0&&(b.updateMultisampleRenderTarget(B),b.updateRenderTargetMipmap(B)),ee&&N.end(z),C.isScene===!0&&C.onAfterRender(z,C,Y),be.resetDefaultState(),q=-1,X=null,w.pop(),w.length>0?(L=w[w.length-1],b.setTextureUnits(L.state.textureUnits),kt===!0&&ke.setGlobalState(z.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?I=F[F.length-1]:I=null,j!==null&&j.renderEnd()};function Yo(C,Y,oe,ee){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Qe.intersectsSprite(C)){ee&&ut.setFromMatrixPosition(C.matrixWorld).applyMatrix4(bt);const Ve=Se.update(C),Te=C.material;Te.visible&&I.push(C,Ve,Te,oe,ut.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Qe.intersectsObject(C))){const Ve=Se.update(C),Te=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ut.copy(C.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ut.copy(Ve.boundingSphere.center)),ut.applyMatrix4(C.matrixWorld).applyMatrix4(bt)),Array.isArray(Te)){const Xe=Ve.groups;for(let Ke=0,ot=Xe.length;Ke<ot;Ke++){const at=Xe[Ke],Ye=Te[at.materialIndex];Ye&&Ye.visible&&I.push(C,Ve,Ye,oe,ut.z,at)}}else Te.visible&&I.push(C,Ve,Te,oe,ut.z,null)}}const Ce=C.children;for(let Ve=0,Te=Ce.length;Ve<Te;Ve++)Yo(Ce[Ve],Y,oe,ee)}function hl(C,Y,oe,ee){const{opaque:J,transmissive:Ce,transparent:Ve}=C;L.setupLightsView(oe),kt===!0&&ke.setGlobalState(z.clippingPlanes,oe),ee&&Le.viewport($.copy(ee)),J.length>0&&fs(J,Y,oe),Ce.length>0&&fs(Ce,Y,oe),Ve.length>0&&fs(Ve,Y,oe),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Ii(C,Y,oe,ee){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ee.id]===void 0){const Ye=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ee.id]=new Ki(1,1,{generateMipmaps:!0,type:Ye?Tr:ri,minFilter:Os,samples:Math.max(4,Pt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Ce=L.state.transmissionRenderTarget[ee.id],Ve=ee.viewport||$;Ce.setSize(Ve.z*z.transmissionResolutionScale,Ve.w*z.transmissionResolutionScale);const Te=z.getRenderTarget(),Xe=z.getActiveCubeFace(),Ke=z.getActiveMipmapLevel();z.setRenderTarget(Ce),z.getClearColor(k),Z=z.getClearAlpha(),Z<1&&z.setClearColor(16777215,.5),z.clear(),Bt&&Me.render(oe);const ot=z.toneMapping;z.toneMapping=qi;const at=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),L.setupLightsView(ee),kt===!0&&ke.setGlobalState(z.clippingPlanes,ee),fs(C,oe,ee),b.updateMultisampleRenderTarget(Ce),b.updateRenderTargetMipmap(Ce),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let yt=0,Vt=Y.length;yt<Vt;yt++){const qt=Y[yt],{object:Dt,geometry:an,material:Be,group:Mn}=qt;if(Be.side===Mr&&Dt.layers.test(ee.layers)){const mt=Be.side;Be.side=Zn,Be.needsUpdate=!0,$o(Dt,oe,ee,an,Be,Mn),Be.side=mt,Be.needsUpdate=!0,Ye=!0}}Ye===!0&&(b.updateMultisampleRenderTarget(Ce),b.updateRenderTargetMipmap(Ce))}z.setRenderTarget(Te,Xe,Ke),z.setClearColor(k,Z),at!==void 0&&(ee.viewport=at),z.toneMapping=ot}function fs(C,Y,oe){const ee=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Ce=C.length;J<Ce;J++){const Ve=C[J],{object:Te,geometry:Xe,group:Ke}=Ve;let ot=Ve.material;ot.allowOverride===!0&&ee!==null&&(ot=ee),Te.layers.test(oe.layers)&&$o(Te,Y,oe,Xe,ot,Ke)}}function $o(C,Y,oe,ee,J,Ce){C.onBeforeRender(z,Y,oe,ee,J,Ce),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(z,Y,oe,ee,C,Ce),J.transparent===!0&&J.side===Mr&&J.forceSinglePass===!1?(J.side=Zn,J.needsUpdate=!0,z.renderBufferDirect(oe,Y,ee,J,C,Ce),J.side=os,J.needsUpdate=!0,z.renderBufferDirect(oe,Y,ee,J,C,Ce),J.side=Mr):z.renderBufferDirect(oe,Y,ee,J,C,Ce),C.onAfterRender(z,Y,oe,ee,J,Ce)}function Ks(C,Y,oe){Y.isScene!==!0&&(Y=Zt);const ee=P.get(C),J=L.state.lights,Ce=L.state.shadowsArray,Ve=J.state.version,Te=Re.getParameters(C,J.state,Ce,Y,oe,L.state.lightProbeGridArray),Xe=Re.getProgramCacheKey(Te);let Ke=ee.programs;ee.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,ee.fog=Y.fog;const ot=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ee.envMap=K.get(C.envMap||ee.environment,ot),ee.envMapRotation=ee.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Ke===void 0&&(C.addEventListener("dispose",Ot),Ke=new Map,ee.programs=Ke);let at=Ke.get(Xe);if(at!==void 0){if(ee.currentProgram===at&&ee.lightsStateVersion===Ve)return Ko(C,Te),at}else Te.uniforms=Re.getUniforms(C),j!==null&&C.isNodeMaterial&&j.build(C,oe,Te),C.onBeforeCompile(Te,z),at=Re.acquireProgram(Te,Xe),Ke.set(Xe,at),ee.uniforms=Te.uniforms;const Ye=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ye.clippingPlanes=ke.uniform),Ko(C,Te),ee.needsLights=Uu(C),ee.lightsStateVersion=Ve,ee.needsLights&&(Ye.ambientLightColor.value=J.state.ambient,Ye.lightProbe.value=J.state.probe,Ye.directionalLights.value=J.state.directional,Ye.directionalLightShadows.value=J.state.directionalShadow,Ye.spotLights.value=J.state.spot,Ye.spotLightShadows.value=J.state.spotShadow,Ye.rectAreaLights.value=J.state.rectArea,Ye.ltc_1.value=J.state.rectAreaLTC1,Ye.ltc_2.value=J.state.rectAreaLTC2,Ye.pointLights.value=J.state.point,Ye.pointLightShadows.value=J.state.pointShadow,Ye.hemisphereLights.value=J.state.hemi,Ye.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ye.spotLightMatrix.value=J.state.spotLightMatrix,Ye.spotLightMap.value=J.state.spotLightMap,Ye.pointShadowMatrix.value=J.state.pointShadowMatrix),ee.lightProbeGrid=L.state.lightProbeGridArray.length>0,ee.currentProgram=at,ee.uniformsList=null,at}function qo(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=iu.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function Ko(C,Y){const oe=P.get(C);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function pl(C,Y){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(Y.matrixWorld);for(let oe=0,ee=C.length;oe<ee;oe++){const J=C[oe];if(J.texture!==null&&J.boundingBox.containsPoint(R))return J}return null}function ml(C,Y,oe,ee,J){Y.isScene!==!0&&(Y=Zt),b.resetTextureUnits();const Ce=Y.fog,Ve=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?Y.environment:null,Te=B===null?z.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:vt.workingColorSpace,Xe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ke=K.get(ee.envMap||Ve,Xe),ot=ee.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,at=!!oe.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ye=!!oe.morphAttributes.position,yt=!!oe.morphAttributes.normal,Vt=!!oe.morphAttributes.color;let qt=qi;ee.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(qt=z.toneMapping);const Dt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,an=Dt!==void 0?Dt.length:0,Be=P.get(ee),Mn=L.state.lights;if(kt===!0&&(ct===!0||C!==X)){const Lt=C===X&&ee.id===q;ke.setState(ee,C,Lt)}let mt=!1;ee.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Mn.state.version||Be.outputColorSpace!==Te||J.isBatchedMesh&&Be.batching===!1||!J.isBatchedMesh&&Be.batching===!0||J.isBatchedMesh&&Be.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Be.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Be.instancing===!1||!J.isInstancedMesh&&Be.instancing===!0||J.isSkinnedMesh&&Be.skinning===!1||!J.isSkinnedMesh&&Be.skinning===!0||J.isInstancedMesh&&Be.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Be.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Be.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Be.instancingMorph===!1&&J.morphTexture!==null||Be.envMap!==Ke||ee.fog===!0&&Be.fog!==Ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ke.numPlanes||Be.numIntersection!==ke.numIntersection)||Be.vertexAlphas!==ot||Be.vertexTangents!==at||Be.morphTargets!==Ye||Be.morphNormals!==yt||Be.morphColors!==Vt||Be.toneMapping!==qt||Be.morphTargetsCount!==an||!!Be.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Be.__version=ee.version);let zn=Be.currentProgram;mt===!0&&(zn=Ks(ee,Y,J),j&&ee.isNodeMaterial&&j.onUpdateProgram(ee,zn,Be));let Vn=!1,gt=!1,rr=!1;const Rt=zn.getUniforms(),jt=Be.uniforms;if(Le.useProgram(zn.program)&&(Vn=!0,gt=!0,rr=!0),ee.id!==q&&(q=ee.id,gt=!0),Be.needsLights){const Lt=pl(L.state.lightProbeGridArray,J);Be.lightProbeGrid!==Lt&&(Be.lightProbeGrid=Lt,gt=!0)}if(Vn||X!==C){Le.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Rt.setValue(G,"projectionMatrix",C.projectionMatrix),Rt.setValue(G,"viewMatrix",C.matrixWorldInverse);const xi=Rt.map.cameraPosition;xi!==void 0&&xi.setValue(G,Ft.setFromMatrixPosition(C.matrixWorld)),Pt.logarithmicDepthBuffer&&Rt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Rt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),X!==C&&(X=C,gt=!0,rr=!0)}if(Be.needsLights&&(Mn.state.directionalShadowMap.length>0&&Rt.setValue(G,"directionalShadowMap",Mn.state.directionalShadowMap,b),Mn.state.spotShadowMap.length>0&&Rt.setValue(G,"spotShadowMap",Mn.state.spotShadowMap,b),Mn.state.pointShadowMap.length>0&&Rt.setValue(G,"pointShadowMap",Mn.state.pointShadowMap,b)),J.isSkinnedMesh){Rt.setOptional(G,J,"bindMatrix"),Rt.setOptional(G,J,"bindMatrixInverse");const Lt=J.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Rt.setValue(G,"boneTexture",Lt.boneTexture,b))}J.isBatchedMesh&&(Rt.setOptional(G,J,"batchingTexture"),Rt.setValue(G,"batchingTexture",J._matricesTexture,b),Rt.setOptional(G,J,"batchingIdTexture"),Rt.setValue(G,"batchingIdTexture",J._indirectTexture,b),Rt.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&Rt.setValue(G,"batchingColorTexture",J._colorsTexture,b));const vi=oe.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&tt.update(J,oe,zn),(gt||Be.receiveShadow!==J.receiveShadow)&&(Be.receiveShadow=J.receiveShadow,Rt.setValue(G,"receiveShadow",J.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&Y.environment!==null&&(jt.envMapIntensity.value=Y.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=dA()),gt){if(Rt.setValue(G,"toneMappingExposure",z.toneMappingExposure),Be.needsLights&&Fu(jt,rr),Ce&&ee.fog===!0&&ue.refreshFogUniforms(jt,Ce),ue.refreshMaterialUniforms(jt,ee,Pe,Ne,L.state.transmissionRenderTarget[C.id]),Be.needsLights&&Be.lightProbeGrid){const Lt=Be.lightProbeGrid;jt.probesSH.value=Lt.texture,jt.probesMin.value.copy(Lt.boundingBox.min),jt.probesMax.value.copy(Lt.boundingBox.max),jt.probesResolution.value.copy(Lt.resolution)}iu.upload(G,qo(Be),jt,b)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(iu.upload(G,qo(Be),jt,b),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Rt.setValue(G,"center",J.center),Rt.setValue(G,"modelViewMatrix",J.modelViewMatrix),Rt.setValue(G,"normalMatrix",J.normalMatrix),Rt.setValue(G,"modelMatrix",J.matrixWorld),ee.uniformsGroups!==void 0){const Lt=ee.uniformsGroups;for(let xi=0,Ni=Lt.length;xi<Ni;xi++){const ds=Lt[xi];fe.update(ds,zn),fe.bind(ds,zn)}}return zn}function Fu(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Uu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,Y,oe){const ee=P.get(C);ee.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),P.get(C.texture).__webglTexture=Y,P.get(C.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:oe,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const oe=P.get(C);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0};const Qt=G.createFramebuffer();this.setRenderTarget=function(C,Y=0,oe=0){B=C,ie=Y,ce=oe;let ee=null,J=!1,Ce=!1;if(C){const Te=P.get(C);if(Te.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(G.FRAMEBUFFER,Te.__webglFramebuffer),$.copy(C.viewport),le.copy(C.scissor),se=C.scissorTest,Le.viewport($),Le.scissor(le),Le.setScissorTest(se),q=-1;return}else if(Te.__webglFramebuffer===void 0)b.setupRenderTarget(C);else if(Te.__hasExternalTextures)b.rebindTextures(C,P.get(C.texture).__webglTexture,P.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ot=C.depthTexture;if(Te.__boundDepthTexture!==ot){if(ot!==null&&P.has(ot)&&(C.width!==ot.image.width||C.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const Ke=P.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ke[Y])?ee=Ke[Y][oe]:ee=Ke[Y],J=!0):C.samples>0&&b.useMultisampledRTT(C)===!1?ee=P.get(C).__webglMultisampledFramebuffer:Array.isArray(Ke)?ee=Ke[oe]:ee=Ke,$.copy(C.viewport),le.copy(C.scissor),se=C.scissorTest}else $.copy(pe).multiplyScalar(Pe).floor(),le.copy(Fe).multiplyScalar(Pe).floor(),se=Ze;if(oe!==0&&(ee=Qt),Le.bindFramebuffer(G.FRAMEBUFFER,ee)&&Le.drawBuffers(C,ee),Le.viewport($),Le.scissor(le),Le.setScissorTest(se),J){const Te=P.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Te.__webglTexture,oe)}else if(Ce){const Te=Y;for(let Xe=0;Xe<C.textures.length;Xe++){const Ke=P.get(C.textures[Xe]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Xe,Ke.__webglTexture,oe,Te)}}else if(C!==null&&oe!==0){const Te=P.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Te.__webglTexture,oe)}q=-1},this.readRenderTargetPixels=function(C,Y,oe,ee,J,Ce,Ve,Te=0){if(!(C&&C.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=P.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){Le.bindFramebuffer(G.FRAMEBUFFER,Xe);try{const Ke=C.textures[Te],ot=Ke.format,at=Ke.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te),!Pt.textureFormatReadable(ot)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(at)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-ee&&oe>=0&&oe<=C.height-J&&G.readPixels(Y,oe,ee,J,H.convert(ot),H.convert(at),Ce)}finally{const Ke=B!==null?P.get(B).__webglFramebuffer:null;Le.bindFramebuffer(G.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(C,Y,oe,ee,J,Ce,Ve,Te=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=P.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(Y>=0&&Y<=C.width-ee&&oe>=0&&oe<=C.height-J){Le.bindFramebuffer(G.FRAMEBUFFER,Xe);const Ke=C.textures[Te],ot=Ke.format,at=Ke.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te),!Pt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ye),G.bufferData(G.PIXEL_PACK_BUFFER,Ce.byteLength,G.STREAM_READ),G.readPixels(Y,oe,ee,J,H.convert(ot),H.convert(at),0);const yt=B!==null?P.get(B).__webglFramebuffer:null;Le.bindFramebuffer(G.FRAMEBUFFER,yt);const Vt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await RM(G,Vt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ye),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ce),G.deleteBuffer(Ye),G.deleteSync(Vt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,oe=0){const ee=Math.pow(2,-oe),J=Math.floor(C.image.width*ee),Ce=Math.floor(C.image.height*ee),Ve=Y!==null?Y.x:0,Te=Y!==null?Y.y:0;b.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,Ve,Te,J,Ce),Le.unbindTexture()};const Ou=G.createFramebuffer(),Zo=G.createFramebuffer();this.copyTextureToTexture=function(C,Y,oe=null,ee=null,J=0,Ce=0){let Ve,Te,Xe,Ke,ot,at,Ye,yt,Vt;const qt=C.isCompressedTexture?C.mipmaps[Ce]:C.image;if(oe!==null)Ve=oe.max.x-oe.min.x,Te=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,Ke=oe.min.x,ot=oe.min.y,at=oe.isBox3?oe.min.z:0;else{const jt=Math.pow(2,-J);Ve=Math.floor(qt.width*jt),Te=Math.floor(qt.height*jt),C.isDataArrayTexture?Xe=qt.depth:C.isData3DTexture?Xe=Math.floor(qt.depth*jt):Xe=1,Ke=0,ot=0,at=0}ee!==null?(Ye=ee.x,yt=ee.y,Vt=ee.z):(Ye=0,yt=0,Vt=0);const Dt=H.convert(Y.format),an=H.convert(Y.type);let Be;Y.isData3DTexture?(b.setTexture3D(Y,0),Be=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(b.setTexture2DArray(Y,0),Be=G.TEXTURE_2D_ARRAY):(b.setTexture2D(Y,0),Be=G.TEXTURE_2D),Le.activeTexture(G.TEXTURE0),Le.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),Le.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Le.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const Mn=Le.getParameter(G.UNPACK_ROW_LENGTH),mt=Le.getParameter(G.UNPACK_IMAGE_HEIGHT),zn=Le.getParameter(G.UNPACK_SKIP_PIXELS),Vn=Le.getParameter(G.UNPACK_SKIP_ROWS),gt=Le.getParameter(G.UNPACK_SKIP_IMAGES);Le.pixelStorei(G.UNPACK_ROW_LENGTH,qt.width),Le.pixelStorei(G.UNPACK_IMAGE_HEIGHT,qt.height),Le.pixelStorei(G.UNPACK_SKIP_PIXELS,Ke),Le.pixelStorei(G.UNPACK_SKIP_ROWS,ot),Le.pixelStorei(G.UNPACK_SKIP_IMAGES,at);const rr=C.isDataArrayTexture||C.isData3DTexture,Rt=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const jt=P.get(C),vi=P.get(Y),Lt=P.get(jt.__renderTarget),xi=P.get(vi.__renderTarget);Le.bindFramebuffer(G.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Le.bindFramebuffer(G.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Ni=0;Ni<Xe;Ni++)rr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,P.get(C).__webglTexture,J,at+Ni),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,P.get(Y).__webglTexture,Ce,Vt+Ni)),G.blitFramebuffer(Ke,ot,Ve,Te,Ye,yt,Ve,Te,G.DEPTH_BUFFER_BIT,G.NEAREST);Le.bindFramebuffer(G.READ_FRAMEBUFFER,null),Le.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||P.has(C)){const jt=P.get(C),vi=P.get(Y);Le.bindFramebuffer(G.READ_FRAMEBUFFER,Ou),Le.bindFramebuffer(G.DRAW_FRAMEBUFFER,Zo);for(let Lt=0;Lt<Xe;Lt++)rr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,jt.__webglTexture,J,at+Lt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,jt.__webglTexture,J),Rt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,vi.__webglTexture,Ce,Vt+Lt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,vi.__webglTexture,Ce),J!==0?G.blitFramebuffer(Ke,ot,Ve,Te,Ye,yt,Ve,Te,G.COLOR_BUFFER_BIT,G.NEAREST):Rt?G.copyTexSubImage3D(Be,Ce,Ye,yt,Vt+Lt,Ke,ot,Ve,Te):G.copyTexSubImage2D(Be,Ce,Ye,yt,Ke,ot,Ve,Te);Le.bindFramebuffer(G.READ_FRAMEBUFFER,null),Le.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Rt?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Be,Ce,Ye,yt,Vt,Ve,Te,Xe,Dt,an,qt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Be,Ce,Ye,yt,Vt,Ve,Te,Xe,Dt,qt.data):G.texSubImage3D(Be,Ce,Ye,yt,Vt,Ve,Te,Xe,Dt,an,qt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ce,Ye,yt,Ve,Te,Dt,an,qt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ce,Ye,yt,qt.width,qt.height,Dt,qt.data):G.texSubImage2D(G.TEXTURE_2D,Ce,Ye,yt,Ve,Te,Dt,an,qt);Le.pixelStorei(G.UNPACK_ROW_LENGTH,Mn),Le.pixelStorei(G.UNPACK_IMAGE_HEIGHT,mt),Le.pixelStorei(G.UNPACK_SKIP_PIXELS,zn),Le.pixelStorei(G.UNPACK_SKIP_ROWS,Vn),Le.pixelStorei(G.UNPACK_SKIP_IMAGES,gt),Ce===0&&Y.generateMipmaps&&G.generateMipmap(Be),Le.unbindTexture()},this.initRenderTarget=function(C){P.get(C).__webglFramebuffer===void 0&&b.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),Le.unbindTexture()},this.resetState=function(){ie=0,ce=0,B=null,Le.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function dl(n){return n+.5|0}const ns=(n,e,t)=>Math.max(Math.min(n,t),e);function Xa(n){return ns(dl(n*2.55),0,255)}function ss(n){return ns(dl(n*255),0,255)}function Sr(n){return ns(dl(n/2.55)/100,0,1)}function x0(n){return ns(dl(n*100),0,100)}const hi={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},np=[..."0123456789ABCDEF"],pA=n=>np[n&15],mA=n=>np[(n&240)>>4]+np[n&15],kc=n=>(n&240)>>4===(n&15),gA=n=>kc(n.r)&&kc(n.g)&&kc(n.b)&&kc(n.a);function _A(n){var e=n.length,t;return n[0]==="#"&&(e===4||e===5?t={r:255&hi[n[1]]*17,g:255&hi[n[2]]*17,b:255&hi[n[3]]*17,a:e===5?hi[n[4]]*17:255}:(e===7||e===9)&&(t={r:hi[n[1]]<<4|hi[n[2]],g:hi[n[3]]<<4|hi[n[4]],b:hi[n[5]]<<4|hi[n[6]],a:e===9?hi[n[7]]<<4|hi[n[8]]:255})),t}const vA=(n,e)=>n<255?e(n):"";function xA(n){var e=gA(n)?pA:mA;return n?"#"+e(n.r)+e(n.g)+e(n.b)+vA(n.a,e):void 0}const yA=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function xx(n,e,t){const i=e*Math.min(t,1-t),s=(a,l=(a+n/30)%12)=>t-i*Math.max(Math.min(l-3,9-l,1),-1);return[s(0),s(8),s(4)]}function SA(n,e,t){const i=(s,a=(s+n/60)%6)=>t-t*e*Math.max(Math.min(a,4-a,1),0);return[i(5),i(3),i(1)]}function MA(n,e,t){const i=xx(n,1,.5);let s;for(e+t>1&&(s=1/(e+t),e*=s,t*=s),s=0;s<3;s++)i[s]*=1-e-t,i[s]+=e;return i}function EA(n,e,t,i,s){return n===s?(e-t)/i+(e<t?6:0):e===s?(t-n)/i+2:(n-e)/i+4}function Ap(n){const t=n.r/255,i=n.g/255,s=n.b/255,a=Math.max(t,i,s),l=Math.min(t,i,s),u=(a+l)/2;let f,d,p;return a!==l&&(p=a-l,d=u>.5?p/(2-a-l):p/(a+l),f=EA(t,i,s,p,a),f=f*60+.5),[f|0,d||0,u]}function Cp(n,e,t,i){return(Array.isArray(e)?n(e[0],e[1],e[2]):n(e,t,i)).map(ss)}function Rp(n,e,t){return Cp(xx,n,e,t)}function bA(n,e,t){return Cp(MA,n,e,t)}function wA(n,e,t){return Cp(SA,n,e,t)}function yx(n){return(n%360+360)%360}function TA(n){const e=yA.exec(n);let t=255,i;if(!e)return;e[5]!==i&&(t=e[6]?Xa(+e[5]):ss(+e[5]));const s=yx(+e[2]),a=+e[3]/100,l=+e[4]/100;return e[1]==="hwb"?i=bA(s,a,l):e[1]==="hsv"?i=wA(s,a,l):i=Rp(s,a,l),{r:i[0],g:i[1],b:i[2],a:t}}function AA(n,e){var t=Ap(n);t[0]=yx(t[0]+e),t=Rp(t),n.r=t[0],n.g=t[1],n.b=t[2]}function CA(n){if(!n)return;const e=Ap(n),t=e[0],i=x0(e[1]),s=x0(e[2]);return n.a<255?`hsla(${t}, ${i}%, ${s}%, ${Sr(n.a)})`:`hsl(${t}, ${i}%, ${s}%)`}const y0={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},S0={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function RA(){const n={},e=Object.keys(S0),t=Object.keys(y0);let i,s,a,l,u;for(i=0;i<e.length;i++){for(l=u=e[i],s=0;s<t.length;s++)a=t[s],u=u.replace(a,y0[a]);a=parseInt(S0[l],16),n[u]=[a>>16&255,a>>8&255,a&255]}return n}let Bc;function PA(n){Bc||(Bc=RA(),Bc.transparent=[0,0,0,0]);const e=Bc[n.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const DA=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function LA(n){const e=DA.exec(n);let t=255,i,s,a;if(e){if(e[7]!==i){const l=+e[7];t=e[8]?Xa(l):ns(l*255,0,255)}return i=+e[1],s=+e[3],a=+e[5],i=255&(e[2]?Xa(i):ns(i,0,255)),s=255&(e[4]?Xa(s):ns(s,0,255)),a=255&(e[6]?Xa(a):ns(a,0,255)),{r:i,g:s,b:a,a:t}}}function IA(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${Sr(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Qd=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,No=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function NA(n,e,t){const i=No(Sr(n.r)),s=No(Sr(n.g)),a=No(Sr(n.b));return{r:ss(Qd(i+t*(No(Sr(e.r))-i))),g:ss(Qd(s+t*(No(Sr(e.g))-s))),b:ss(Qd(a+t*(No(Sr(e.b))-a))),a:n.a+t*(e.a-n.a)}}function zc(n,e,t){if(n){let i=Ap(n);i[e]=Math.max(0,Math.min(i[e]+i[e]*t,e===0?360:1)),i=Rp(i),n.r=i[0],n.g=i[1],n.b=i[2]}}function Sx(n,e){return n&&Object.assign(e||{},n)}function M0(n){var e={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(e={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(e.a=ss(n[3]))):(e=Sx(n,{r:0,g:0,b:0,a:1}),e.a=ss(e.a)),e}function FA(n){return n.charAt(0)==="r"?LA(n):TA(n)}class nl{constructor(e){if(e instanceof nl)return e;const t=typeof e;let i;t==="object"?i=M0(e):t==="string"&&(i=_A(e)||PA(e)||FA(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=Sx(this._rgb);return e&&(e.a=Sr(e.a)),e}set rgb(e){this._rgb=M0(e)}rgbString(){return this._valid?IA(this._rgb):void 0}hexString(){return this._valid?xA(this._rgb):void 0}hslString(){return this._valid?CA(this._rgb):void 0}mix(e,t){if(e){const i=this.rgb,s=e.rgb;let a;const l=t===a?.5:t,u=2*l-1,f=i.a-s.a,d=((u*f===-1?u:(u+f)/(1+u*f))+1)/2;a=1-d,i.r=255&d*i.r+a*s.r+.5,i.g=255&d*i.g+a*s.g+.5,i.b=255&d*i.b+a*s.b+.5,i.a=l*i.a+(1-l)*s.a,this.rgb=i}return this}interpolate(e,t){return e&&(this._rgb=NA(this._rgb,e._rgb,t)),this}clone(){return new nl(this.rgb)}alpha(e){return this._rgb.a=ss(e),this}clearer(e){const t=this._rgb;return t.a*=1-e,this}greyscale(){const e=this._rgb,t=dl(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=t,this}opaquer(e){const t=this._rgb;return t.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return zc(this._rgb,2,e),this}darken(e){return zc(this._rgb,2,-e),this}saturate(e){return zc(this._rgb,1,e),this}desaturate(e){return zc(this._rgb,1,-e),this}rotate(e){return AA(this._rgb,e),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function vr(){}const UA=(()=>{let n=0;return()=>n++})();function Wt(n){return n==null}function yn(n){if(Array.isArray&&Array.isArray(n))return!0;const e=Object.prototype.toString.call(n);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function St(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Nn(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function Vi(n,e){return Nn(n)?n:e}function Ut(n,e){return typeof n>"u"?e:n}const OA=(n,e)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*e:+n;function sn(n,e,t){if(n&&typeof n.call=="function")return n.apply(t,e)}function Nt(n,e,t,i){let s,a,l;if(yn(n))for(a=n.length,s=0;s<a;s++)e.call(t,n[s],s);else if(St(n))for(l=Object.keys(n),a=l.length,s=0;s<a;s++)e.call(t,n[l[s]],l[s])}function mu(n,e){let t,i,s,a;if(!n||!e||n.length!==e.length)return!1;for(t=0,i=n.length;t<i;++t)if(s=n[t],a=e[t],s.datasetIndex!==a.datasetIndex||s.index!==a.index)return!1;return!0}function gu(n){if(yn(n))return n.map(gu);if(St(n)){const e=Object.create(null),t=Object.keys(n),i=t.length;let s=0;for(;s<i;++s)e[t[s]]=gu(n[t[s]]);return e}return n}function Mx(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function kA(n,e,t,i){if(!Mx(n))return;const s=e[n],a=t[n];St(s)&&St(a)?il(s,a,i):e[n]=gu(a)}function il(n,e,t){const i=yn(e)?e:[e],s=i.length;if(!St(n))return n;t=t||{};const a=t.merger||kA;let l;for(let u=0;u<s;++u){if(l=i[u],!St(l))continue;const f=Object.keys(l);for(let d=0,p=f.length;d<p;++d)a(f[d],n,l,t)}return n}function $a(n,e){return il(n,e,{merger:BA})}function BA(n,e,t){if(!Mx(n))return;const i=e[n],s=t[n];St(i)&&St(s)?$a(i,s):Object.prototype.hasOwnProperty.call(e,n)||(e[n]=gu(s))}const E0={"":n=>n,x:n=>n.x,y:n=>n.y};function zA(n){const e=n.split("."),t=[];let i="";for(const s of e)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(t.push(i),i="");return t}function VA(n){const e=zA(n);return t=>{for(const i of e){if(i==="")break;t=t&&t[i]}return t}}function _u(n,e){return(E0[e]||(E0[e]=VA(e)))(n)}function Pp(n){return n.charAt(0).toUpperCase()+n.slice(1)}const vu=n=>typeof n<"u",ls=n=>typeof n=="function",b0=(n,e)=>{if(n.size!==e.size)return!1;for(const t of n)if(!e.has(t))return!1;return!0};function HA(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const In=Math.PI,Qi=2*In,GA=Qi+In,xu=Number.POSITIVE_INFINITY,WA=In/180,Di=In/2,Rs=In/4,w0=In*2/3,Ex=Math.log10,Vo=Math.sign;function qa(n,e,t){return Math.abs(n-e)<t}function T0(n){const e=Math.round(n);n=qa(n,e,n/1e3)?e:n;const t=Math.pow(10,Math.floor(Ex(n))),i=n/t;return(i<=1?1:i<=2?2:i<=5?5:10)*t}function XA(n){const e=[],t=Math.sqrt(n);let i;for(i=1;i<t;i++)n%i===0&&(e.push(i),e.push(n/i));return t===(t|0)&&e.push(t),e.sort((s,a)=>s-a).pop(),e}function jA(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function rl(n){return!jA(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function YA(n,e){const t=Math.round(n);return t-e<=n&&t+e>=n}function $A(n,e,t){let i,s,a;for(i=0,s=n.length;i<s;i++)a=n[i][t],isNaN(a)||(e.min=Math.min(e.min,a),e.max=Math.max(e.max,a))}function Bs(n){return n*(In/180)}function qA(n){return n*(180/In)}function A0(n){if(!Nn(n))return;let e=1,t=0;for(;Math.round(n*e)/e!==n;)e*=10,t++;return t}function KA(n,e){const t=e.x-n.x,i=e.y-n.y,s=Math.sqrt(t*t+i*i);let a=Math.atan2(i,t);return a<-.5*In&&(a+=Qi),{angle:a,distance:s}}function ip(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function ZA(n,e){return(n-e+GA)%Qi-In}function Wi(n){return(n%Qi+Qi)%Qi}function bx(n,e,t,i){const s=Wi(n),a=Wi(e),l=Wi(t),u=Wi(a-s),f=Wi(l-s),d=Wi(s-a),p=Wi(s-l);return s===a||s===l||i&&a===l||u>f&&d<p}function gi(n,e,t){return Math.max(e,Math.min(t,n))}function QA(n){return gi(n,-32768,32767)}function wx(n,e,t,i=1e-6){return n>=Math.min(e,t)-i&&n<=Math.max(e,t)+i}function Dp(n,e,t){t=t||(l=>n[l]<e);let i=n.length-1,s=0,a;for(;i-s>1;)a=s+i>>1,t(a)?s=a:i=a;return{lo:s,hi:i}}const zs=(n,e,t,i)=>Dp(n,t,i?s=>{const a=n[s][e];return a<t||a===t&&n[s+1][e]===t}:s=>n[s][e]<t),JA=(n,e,t)=>Dp(n,t,i=>n[i][e]>=t);function eC(n,e,t){let i=0,s=n.length;for(;i<s&&n[i]<e;)i++;for(;s>i&&n[s-1]>t;)s--;return i>0||s<n.length?n.slice(i,s):n}const Tx=["push","pop","shift","splice","unshift"];function tC(n,e){if(n._chartjs){n._chartjs.listeners.push(e);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Tx.forEach(t=>{const i="_onData"+Pp(t),s=n[t];Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value(...a){const l=s.apply(this,a);return n._chartjs.listeners.forEach(u=>{typeof u[i]=="function"&&u[i](...a)}),l}})})}function C0(n,e){const t=n._chartjs;if(!t)return;const i=t.listeners,s=i.indexOf(e);s!==-1&&i.splice(s,1),!(i.length>0)&&(Tx.forEach(a=>{delete n[a]}),delete n._chartjs)}function nC(n){const e=new Set(n);return e.size===n.length?n:Array.from(e)}const Ax=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function Cx(n,e){let t=[],i=!1;return function(...s){t=s,i||(i=!0,Ax.call(window,()=>{i=!1,n.apply(e,t)}))}}function iC(n,e){let t;return function(...i){return e?(clearTimeout(t),t=setTimeout(n,e,i)):n.apply(this,i),e}}const rC=n=>n==="start"?"left":n==="end"?"right":"center",R0=(n,e,t)=>n==="start"?e:n==="end"?t:(e+t)/2;function sC(n,e,t){const i=e.length;let s=0,a=i;if(n._sorted){const{iScale:l,vScale:u,_parsed:f}=n,d=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,p=l.axis,{min:_,max:m,minDefined:v,maxDefined:M}=l.getUserBounds();if(v){if(s=Math.min(zs(f,p,_).lo,t?i:zs(e,p,l.getPixelForValue(_)).lo),d){const E=f.slice(0,s+1).reverse().findIndex(x=>!Wt(x[u.axis]));s-=Math.max(0,E)}s=gi(s,0,i-1)}if(M){let E=Math.max(zs(f,l.axis,m,!0).hi+1,t?0:zs(e,p,l.getPixelForValue(m),!0).hi+1);if(d){const x=f.slice(E-1).findIndex(S=>!Wt(S[u.axis]));E+=Math.max(0,x)}a=gi(E,s,i)-s}else a=i-s}return{start:s,count:a}}function oC(n){const{xScale:e,yScale:t,_scaleRanges:i}=n,s={xmin:e.min,xmax:e.max,ymin:t.min,ymax:t.max};if(!i)return n._scaleRanges=s,!0;const a=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==t.min||i.ymax!==t.max;return Object.assign(i,s),a}const Vc=n=>n===0||n===1,P0=(n,e,t)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-e)*Qi/t)),D0=(n,e,t)=>Math.pow(2,-10*n)*Math.sin((n-e)*Qi/t)+1,Ka={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Di)+1,easeOutSine:n=>Math.sin(n*Di),easeInOutSine:n=>-.5*(Math.cos(In*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>Vc(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>Vc(n)?n:P0(n,.075,.3),easeOutElastic:n=>Vc(n)?n:D0(n,.075,.3),easeInOutElastic(n){return Vc(n)?n:n<.5?.5*P0(n*2,.1125,.45):.5+.5*D0(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let e=1.70158;return(n/=.5)<1?.5*(n*n*(((e*=1.525)+1)*n-e)):.5*((n-=2)*n*(((e*=1.525)+1)*n+e)+2)},easeInBounce:n=>1-Ka.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Ka.easeInBounce(n*2)*.5:Ka.easeOutBounce(n*2-1)*.5+.5};function Lp(n){if(n&&typeof n=="object"){const e=n.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function L0(n){return Lp(n)?n:new nl(n)}function Jd(n){return Lp(n)?n:new nl(n).saturate(.5).darken(.1).hexString()}const aC=["x","y","borderWidth","radius","tension"],lC=["color","borderColor","backgroundColor"];function cC(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),n.set("animations",{colors:{type:"color",properties:lC},numbers:{type:"number",properties:aC}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function uC(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const I0=new Map;function fC(n,e){e=e||{};const t=n+JSON.stringify(e);let i=I0.get(t);return i||(i=new Intl.NumberFormat(n,e),I0.set(t,i)),i}function Rx(n,e,t){return fC(e,t).format(n)}const dC={values(n){return yn(n)?n:""+n},numeric(n,e,t){if(n===0)return"0";const i=this.chart.options.locale;let s,a=n;if(t.length>1){const d=Math.max(Math.abs(t[0].value),Math.abs(t[t.length-1].value));(d<1e-4||d>1e15)&&(s="scientific"),a=hC(n,t)}const l=Ex(Math.abs(a)),u=isNaN(l)?1:Math.max(Math.min(-1*Math.floor(l),20),0),f={notation:s,minimumFractionDigits:u,maximumFractionDigits:u};return Object.assign(f,this.options.ticks.format),Rx(n,i,f)}};function hC(n,e){let t=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(t)>=1&&n!==Math.floor(n)&&(t=n-Math.floor(n)),t}var Px={formatters:dC};function pC(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Px.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Ws=Object.create(null),rp=Object.create(null);function Za(n,e){if(!e)return n;const t=e.split(".");for(let i=0,s=t.length;i<s;++i){const a=t[i];n=n[a]||(n[a]=Object.create(null))}return n}function eh(n,e,t){return typeof e=="string"?il(Za(n,e),t):il(Za(n,""),e)}class mC{constructor(e,t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Jd(s.backgroundColor),this.hoverBorderColor=(i,s)=>Jd(s.borderColor),this.hoverColor=(i,s)=>Jd(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return eh(this,e,t)}get(e){return Za(this,e)}describe(e,t){return eh(rp,e,t)}override(e,t){return eh(Ws,e,t)}route(e,t,i,s){const a=Za(this,e),l=Za(this,i),u="_"+t;Object.defineProperties(a,{[u]:{value:a[t],writable:!0},[t]:{enumerable:!0,get(){const f=this[u],d=l[s];return St(f)?Object.assign({},d,f):Ut(f,d)},set(f){this[u]=f}}})}apply(e){e.forEach(t=>t(this))}}var un=new mC({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[cC,uC,pC]);function gC(n){return!n||Wt(n.size)||Wt(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function N0(n,e,t,i,s){let a=e[s];return a||(a=e[s]=n.measureText(s).width,t.push(s)),a>i&&(i=a),i}function Ps(n,e,t){const i=n.currentDevicePixelRatio,s=t!==0?Math.max(t/2,.5):0;return Math.round((e-s)*i)/i+s}function F0(n,e){!e&&!n||(e=e||n.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,n.width,n.height),e.restore())}function sp(n,e,t,i){_C(n,e,t,i)}function _C(n,e,t,i,s){let a,l,u,f,d,p,_,m;const v=e.pointStyle,M=e.rotation,E=e.radius;let x=(M||0)*WA;if(v&&typeof v=="object"&&(a=v.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){n.save(),n.translate(t,i),n.rotate(x),n.drawImage(v,-v.width/2,-v.height/2,v.width,v.height),n.restore();return}if(!(isNaN(E)||E<=0)){switch(n.beginPath(),v){default:n.arc(t,i,E,0,Qi),n.closePath();break;case"triangle":p=E,n.moveTo(t+Math.sin(x)*p,i-Math.cos(x)*E),x+=w0,n.lineTo(t+Math.sin(x)*p,i-Math.cos(x)*E),x+=w0,n.lineTo(t+Math.sin(x)*p,i-Math.cos(x)*E),n.closePath();break;case"rectRounded":d=E*.516,f=E-d,l=Math.cos(x+Rs)*f,_=Math.cos(x+Rs)*f,u=Math.sin(x+Rs)*f,m=Math.sin(x+Rs)*f,n.arc(t-_,i-u,d,x-In,x-Di),n.arc(t+m,i-l,d,x-Di,x),n.arc(t+_,i+u,d,x,x+Di),n.arc(t-m,i+l,d,x+Di,x+In),n.closePath();break;case"rect":if(!M){f=Math.SQRT1_2*E,p=f,n.rect(t-p,i-f,2*p,2*f);break}x+=Rs;case"rectRot":_=Math.cos(x)*E,l=Math.cos(x)*E,u=Math.sin(x)*E,m=Math.sin(x)*E,n.moveTo(t-_,i-u),n.lineTo(t+m,i-l),n.lineTo(t+_,i+u),n.lineTo(t-m,i+l),n.closePath();break;case"crossRot":x+=Rs;case"cross":_=Math.cos(x)*E,l=Math.cos(x)*E,u=Math.sin(x)*E,m=Math.sin(x)*E,n.moveTo(t-_,i-u),n.lineTo(t+_,i+u),n.moveTo(t+m,i-l),n.lineTo(t-m,i+l);break;case"star":_=Math.cos(x)*E,l=Math.cos(x)*E,u=Math.sin(x)*E,m=Math.sin(x)*E,n.moveTo(t-_,i-u),n.lineTo(t+_,i+u),n.moveTo(t+m,i-l),n.lineTo(t-m,i+l),x+=Rs,_=Math.cos(x)*E,l=Math.cos(x)*E,u=Math.sin(x)*E,m=Math.sin(x)*E,n.moveTo(t-_,i-u),n.lineTo(t+_,i+u),n.moveTo(t+m,i-l),n.lineTo(t-m,i+l);break;case"line":l=Math.cos(x)*E,u=Math.sin(x)*E,n.moveTo(t-l,i-u),n.lineTo(t+l,i+u);break;case"dash":n.moveTo(t,i),n.lineTo(t+Math.cos(x)*E,i+Math.sin(x)*E);break;case!1:n.closePath();break}n.fill(),e.borderWidth>0&&n.stroke()}}function sl(n,e,t){return t=t||.5,!e||n&&n.x>e.left-t&&n.x<e.right+t&&n.y>e.top-t&&n.y<e.bottom+t}function Ip(n,e){n.save(),n.beginPath(),n.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),n.clip()}function Np(n){n.restore()}function vC(n,e,t,i,s){if(!e)return n.lineTo(t.x,t.y);if(s==="middle"){const a=(e.x+t.x)/2;n.lineTo(a,e.y),n.lineTo(a,t.y)}else s==="after"!=!!i?n.lineTo(e.x,t.y):n.lineTo(t.x,e.y);n.lineTo(t.x,t.y)}function xC(n,e,t,i){if(!e)return n.lineTo(t.x,t.y);n.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?t.cp2x:t.cp1x,i?t.cp2y:t.cp1y,t.x,t.y)}function yC(n,e){e.translation&&n.translate(e.translation[0],e.translation[1]),Wt(e.rotation)||n.rotate(e.rotation),e.color&&(n.fillStyle=e.color),e.textAlign&&(n.textAlign=e.textAlign),e.textBaseline&&(n.textBaseline=e.textBaseline)}function SC(n,e,t,i,s){if(s.strikethrough||s.underline){const a=n.measureText(i),l=e-a.actualBoundingBoxLeft,u=e+a.actualBoundingBoxRight,f=t-a.actualBoundingBoxAscent,d=t+a.actualBoundingBoxDescent,p=s.strikethrough?(f+d)/2:d;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=s.decorationWidth||2,n.moveTo(l,p),n.lineTo(u,p),n.stroke()}}function MC(n,e){const t=n.fillStyle;n.fillStyle=e.color,n.fillRect(e.left,e.top,e.width,e.height),n.fillStyle=t}function U0(n,e,t,i,s,a={}){const l=yn(e)?e:[e],u=a.strokeWidth>0&&a.strokeColor!=="";let f,d;for(n.save(),n.font=s.string,yC(n,a),f=0;f<l.length;++f)d=l[f],a.backdrop&&MC(n,a.backdrop),u&&(a.strokeColor&&(n.strokeStyle=a.strokeColor),Wt(a.strokeWidth)||(n.lineWidth=a.strokeWidth),n.strokeText(d,t,i,a.maxWidth)),n.fillText(d,t,i,a.maxWidth),SC(n,t,i,d,a),i+=Number(s.lineHeight);n.restore()}function O0(n,e){const{x:t,y:i,w:s,h:a,radius:l}=e;n.arc(t+l.topLeft,i+l.topLeft,l.topLeft,1.5*In,In,!0),n.lineTo(t,i+a-l.bottomLeft),n.arc(t+l.bottomLeft,i+a-l.bottomLeft,l.bottomLeft,In,Di,!0),n.lineTo(t+s-l.bottomRight,i+a),n.arc(t+s-l.bottomRight,i+a-l.bottomRight,l.bottomRight,Di,0,!0),n.lineTo(t+s,i+l.topRight),n.arc(t+s-l.topRight,i+l.topRight,l.topRight,0,-Di,!0),n.lineTo(t+l.topLeft,i)}const EC=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,bC=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function wC(n,e){const t=(""+n).match(EC);if(!t||t[1]==="normal")return e*1.2;switch(n=+t[2],t[3]){case"px":return n;case"%":n/=100;break}return e*n}const TC=n=>+n||0;function Dx(n,e){const t={},i=St(e),s=i?Object.keys(e):e,a=St(n)?i?l=>Ut(n[l],n[e[l]]):l=>n[l]:()=>n;for(const l of s)t[l]=TC(a(l));return t}function AC(n){return Dx(n,{top:"y",right:"x",bottom:"y",left:"x"})}function ru(n){return Dx(n,["topLeft","topRight","bottomLeft","bottomRight"])}function cs(n){const e=AC(n);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function $i(n,e){n=n||{},e=e||un.font;let t=Ut(n.size,e.size);typeof t=="string"&&(t=parseInt(t,10));let i=Ut(n.style,e.style);i&&!(""+i).match(bC)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Ut(n.family,e.family),lineHeight:wC(Ut(n.lineHeight,e.lineHeight),t),size:t,style:i,weight:Ut(n.weight,e.weight),string:""};return s.string=gC(s),s}function Hc(n,e,t,i){let s,a,l;for(s=0,a=n.length;s<a;++s)if(l=n[s],l!==void 0&&l!==void 0)return l}function CC(n,e,t){const{min:i,max:s}=n,a=OA(e,(s-i)/2),l=(u,f)=>t&&u===0?0:u+f;return{min:l(i,-Math.abs(a)),max:l(s,a)}}function Ys(n,e){return Object.assign(Object.create(n),e)}function Fp(n,e=[""],t,i,s=()=>n[0]){const a=t||n;typeof i>"u"&&(i=Fx("_fallback",n));const l={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:a,_fallback:i,_getTarget:s,override:u=>Fp([u,...n],e,a,i)};return new Proxy(l,{deleteProperty(u,f){return delete u[f],delete u._keys,delete n[0][f],!0},get(u,f){return Ix(u,f,()=>UC(f,e,n,u))},getOwnPropertyDescriptor(u,f){return Reflect.getOwnPropertyDescriptor(u._scopes[0],f)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(u,f){return B0(u).includes(f)},ownKeys(u){return B0(u)},set(u,f,d){const p=u._storage||(u._storage=s());return u[f]=p[f]=d,delete u._keys,!0}})}function Ho(n,e,t,i){const s={_cacheable:!1,_proxy:n,_context:e,_subProxy:t,_stack:new Set,_descriptors:Lx(n,i),setContext:a=>Ho(n,a,t,i),override:a=>Ho(n.override(a),e,t,i)};return new Proxy(s,{deleteProperty(a,l){return delete a[l],delete n[l],!0},get(a,l,u){return Ix(a,l,()=>PC(a,l,u))},getOwnPropertyDescriptor(a,l){return a._descriptors.allKeys?Reflect.has(n,l)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,l)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(a,l){return Reflect.has(n,l)},ownKeys(){return Reflect.ownKeys(n)},set(a,l,u){return n[l]=u,delete a[l],!0}})}function Lx(n,e={scriptable:!0,indexable:!0}){const{_scriptable:t=e.scriptable,_indexable:i=e.indexable,_allKeys:s=e.allKeys}=n;return{allKeys:s,scriptable:t,indexable:i,isScriptable:ls(t)?t:()=>t,isIndexable:ls(i)?i:()=>i}}const RC=(n,e)=>n?n+Pp(e):e,Up=(n,e)=>St(e)&&n!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function Ix(n,e,t){if(Object.prototype.hasOwnProperty.call(n,e)||e==="constructor")return n[e];const i=t();return n[e]=i,i}function PC(n,e,t){const{_proxy:i,_context:s,_subProxy:a,_descriptors:l}=n;let u=i[e];return ls(u)&&l.isScriptable(e)&&(u=DC(e,u,n,t)),yn(u)&&u.length&&(u=LC(e,u,n,l.isIndexable)),Up(e,u)&&(u=Ho(u,s,a&&a[e],l)),u}function DC(n,e,t,i){const{_proxy:s,_context:a,_subProxy:l,_stack:u}=t;if(u.has(n))throw new Error("Recursion detected: "+Array.from(u).join("->")+"->"+n);u.add(n);let f=e(a,l||i);return u.delete(n),Up(n,f)&&(f=Op(s._scopes,s,n,f)),f}function LC(n,e,t,i){const{_proxy:s,_context:a,_subProxy:l,_descriptors:u}=t;if(typeof a.index<"u"&&i(n))return e[a.index%e.length];if(St(e[0])){const f=e,d=s._scopes.filter(p=>p!==f);e=[];for(const p of f){const _=Op(d,s,n,p);e.push(Ho(_,a,l&&l[n],u))}}return e}function Nx(n,e,t){return ls(n)?n(e,t):n}const IC=(n,e)=>n===!0?e:typeof n=="string"?_u(e,n):void 0;function NC(n,e,t,i,s){for(const a of e){const l=IC(t,a);if(l){n.add(l);const u=Nx(l._fallback,t,s);if(typeof u<"u"&&u!==t&&u!==i)return u}else if(l===!1&&typeof i<"u"&&t!==i)return null}return!1}function Op(n,e,t,i){const s=e._rootScopes,a=Nx(e._fallback,t,i),l=[...n,...s],u=new Set;u.add(i);let f=k0(u,l,t,a||t,i);return f===null||typeof a<"u"&&a!==t&&(f=k0(u,l,a,f,i),f===null)?!1:Fp(Array.from(u),[""],s,a,()=>FC(e,t,i))}function k0(n,e,t,i,s){for(;t;)t=NC(n,e,t,i,s);return t}function FC(n,e,t){const i=n._getTarget();e in i||(i[e]={});const s=i[e];return yn(s)&&St(t)?t:s||{}}function UC(n,e,t,i){let s;for(const a of e)if(s=Fx(RC(a,n),t),typeof s<"u")return Up(n,s)?Op(t,i,n,s):s}function Fx(n,e){for(const t of e){if(!t)continue;const i=t[n];if(typeof i<"u")return i}}function B0(n){let e=n._keys;return e||(e=n._keys=OC(n._scopes)),e}function OC(n){const e=new Set;for(const t of n)for(const i of Object.keys(t).filter(s=>!s.startsWith("_")))e.add(i);return Array.from(e)}const kC=Number.EPSILON||1e-14,Go=(n,e)=>e<n.length&&!n[e].skip&&n[e],Ux=n=>n==="x"?"y":"x";function BC(n,e,t,i){const s=n.skip?e:n,a=e,l=t.skip?e:t,u=ip(a,s),f=ip(l,a);let d=u/(u+f),p=f/(u+f);d=isNaN(d)?0:d,p=isNaN(p)?0:p;const _=i*d,m=i*p;return{previous:{x:a.x-_*(l.x-s.x),y:a.y-_*(l.y-s.y)},next:{x:a.x+m*(l.x-s.x),y:a.y+m*(l.y-s.y)}}}function zC(n,e,t){const i=n.length;let s,a,l,u,f,d=Go(n,0);for(let p=0;p<i-1;++p)if(f=d,d=Go(n,p+1),!(!f||!d)){if(qa(e[p],0,kC)){t[p]=t[p+1]=0;continue}s=t[p]/e[p],a=t[p+1]/e[p],u=Math.pow(s,2)+Math.pow(a,2),!(u<=9)&&(l=3/Math.sqrt(u),t[p]=s*l*e[p],t[p+1]=a*l*e[p])}}function VC(n,e,t="x"){const i=Ux(t),s=n.length;let a,l,u,f=Go(n,0);for(let d=0;d<s;++d){if(l=u,u=f,f=Go(n,d+1),!u)continue;const p=u[t],_=u[i];l&&(a=(p-l[t])/3,u[`cp1${t}`]=p-a,u[`cp1${i}`]=_-a*e[d]),f&&(a=(f[t]-p)/3,u[`cp2${t}`]=p+a,u[`cp2${i}`]=_+a*e[d])}}function HC(n,e="x"){const t=Ux(e),i=n.length,s=Array(i).fill(0),a=Array(i);let l,u,f,d=Go(n,0);for(l=0;l<i;++l)if(u=f,f=d,d=Go(n,l+1),!!f){if(d){const p=d[e]-f[e];s[l]=p!==0?(d[t]-f[t])/p:0}a[l]=u?d?Vo(s[l-1])!==Vo(s[l])?0:(s[l-1]+s[l])/2:s[l-1]:s[l]}zC(n,s,a),VC(n,a,e)}function Gc(n,e,t){return Math.max(Math.min(n,t),e)}function GC(n,e){let t,i,s,a,l,u=sl(n[0],e);for(t=0,i=n.length;t<i;++t)l=a,a=u,u=t<i-1&&sl(n[t+1],e),a&&(s=n[t],l&&(s.cp1x=Gc(s.cp1x,e.left,e.right),s.cp1y=Gc(s.cp1y,e.top,e.bottom)),u&&(s.cp2x=Gc(s.cp2x,e.left,e.right),s.cp2y=Gc(s.cp2y,e.top,e.bottom)))}function WC(n,e,t,i,s){let a,l,u,f;if(e.spanGaps&&(n=n.filter(d=>!d.skip)),e.cubicInterpolationMode==="monotone")HC(n,s);else{let d=i?n[n.length-1]:n[0];for(a=0,l=n.length;a<l;++a)u=n[a],f=BC(d,u,n[Math.min(a+1,l-(i?0:1))%l],e.tension),u.cp1x=f.previous.x,u.cp1y=f.previous.y,u.cp2x=f.next.x,u.cp2y=f.next.y,d=u}e.capBezierPoints&&GC(n,t)}function kp(){return typeof window<"u"&&typeof document<"u"}function Bp(n){let e=n.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function yu(n,e,t){let i;return typeof n=="string"?(i=parseInt(n,10),n.indexOf("%")!==-1&&(i=i/100*e.parentNode[t])):i=n,i}const Pu=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function XC(n,e){return Pu(n).getPropertyValue(e)}const jC=["top","right","bottom","left"];function Vs(n,e,t){const i={};t=t?"-"+t:"";for(let s=0;s<4;s++){const a=jC[s];i[a]=parseFloat(n[e+"-"+a+t])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const YC=(n,e,t)=>(n>0||e>0)&&(!t||!t.shadowRoot);function $C(n,e){const t=n.touches,i=t&&t.length?t[0]:n,{offsetX:s,offsetY:a}=i;let l=!1,u,f;if(YC(s,a,n.target))u=s,f=a;else{const d=e.getBoundingClientRect();u=i.clientX-d.left,f=i.clientY-d.top,l=!0}return{x:u,y:f,box:l}}function Is(n,e){if("native"in n)return n;const{canvas:t,currentDevicePixelRatio:i}=e,s=Pu(t),a=s.boxSizing==="border-box",l=Vs(s,"padding"),u=Vs(s,"border","width"),{x:f,y:d,box:p}=$C(n,t),_=l.left+(p&&u.left),m=l.top+(p&&u.top);let{width:v,height:M}=e;return a&&(v-=l.width+u.width,M-=l.height+u.height),{x:Math.round((f-_)/v*t.width/i),y:Math.round((d-m)/M*t.height/i)}}function qC(n,e,t){let i,s;if(e===void 0||t===void 0){const a=n&&Bp(n);if(!a)e=n.clientWidth,t=n.clientHeight;else{const l=a.getBoundingClientRect(),u=Pu(a),f=Vs(u,"border","width"),d=Vs(u,"padding");e=l.width-d.width-f.width,t=l.height-d.height-f.height,i=yu(u.maxWidth,a,"clientWidth"),s=yu(u.maxHeight,a,"clientHeight")}}return{width:e,height:t,maxWidth:i||xu,maxHeight:s||xu}}const is=n=>Math.round(n*10)/10;function KC(n,e,t,i){const s=Pu(n),a=Vs(s,"margin"),l=yu(s.maxWidth,n,"clientWidth")||xu,u=yu(s.maxHeight,n,"clientHeight")||xu,f=qC(n,e,t);let{width:d,height:p}=f;if(s.boxSizing==="content-box"){const m=Vs(s,"border","width"),v=Vs(s,"padding");d-=v.width+m.width,p-=v.height+m.height}return d=Math.max(0,d-a.width),p=Math.max(0,i?d/i:p-a.height),d=is(Math.min(d,l,f.maxWidth)),p=is(Math.min(p,u,f.maxHeight)),d&&!p&&(p=is(d/2)),(e!==void 0||t!==void 0)&&i&&f.height&&p>f.height&&(p=f.height,d=is(Math.floor(p*i))),{width:d,height:p}}function z0(n,e,t){const i=e||1,s=is(n.height*i),a=is(n.width*i);n.height=is(n.height),n.width=is(n.width);const l=n.canvas;return l.style&&(t||!l.style.height&&!l.style.width)&&(l.style.height=`${n.height}px`,l.style.width=`${n.width}px`),n.currentDevicePixelRatio!==i||l.height!==s||l.width!==a?(n.currentDevicePixelRatio=i,l.height=s,l.width=a,n.ctx.setTransform(i,0,0,i,0,0),!0):!1}const ZC=(function(){let n=!1;try{const e={get passive(){return n=!0,!1}};kp()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return n})();function V0(n,e){const t=XC(n,e),i=t&&t.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Ns(n,e,t,i){return{x:n.x+t*(e.x-n.x),y:n.y+t*(e.y-n.y)}}function QC(n,e,t,i){return{x:n.x+t*(e.x-n.x),y:i==="middle"?t<.5?n.y:e.y:i==="after"?t<1?n.y:e.y:t>0?e.y:n.y}}function JC(n,e,t,i){const s={x:n.cp2x,y:n.cp2y},a={x:e.cp1x,y:e.cp1y},l=Ns(n,s,t),u=Ns(s,a,t),f=Ns(a,e,t),d=Ns(l,u,t),p=Ns(u,f,t);return Ns(d,p,t)}const eR=function(n,e){return{x(t){return n+n+e-t},setWidth(t){e=t},textAlign(t){return t==="center"?t:t==="right"?"left":"right"},xPlus(t,i){return t-i},leftForLtr(t,i){return t-i}}},tR=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,e){return n+e},leftForLtr(n,e){return n}}};function th(n,e,t){return n?eR(e,t):tR()}function nR(n,e){let t,i;(e==="ltr"||e==="rtl")&&(t=n.canvas.style,i=[t.getPropertyValue("direction"),t.getPropertyPriority("direction")],t.setProperty("direction",e,"important"),n.prevTextDirection=i)}function iR(n,e){e!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",e[0],e[1]))}function Ox(n){return n==="angle"?{between:bx,compare:ZA,normalize:Wi}:{between:wx,compare:(e,t)=>e-t,normalize:e=>e}}function H0({start:n,end:e,count:t,loop:i,style:s}){return{start:n%t,end:e%t,loop:i&&(e-n+1)%t===0,style:s}}function rR(n,e,t){const{property:i,start:s,end:a}=t,{between:l,normalize:u}=Ox(i),f=e.length;let{start:d,end:p,loop:_}=n,m,v;if(_){for(d+=f,p+=f,m=0,v=f;m<v&&l(u(e[d%f][i]),s,a);++m)d--,p--;d%=f,p%=f}return p<d&&(p+=f),{start:d,end:p,loop:_,style:n.style}}function kx(n,e,t){if(!t)return[n];const{property:i,start:s,end:a}=t,l=e.length,{compare:u,between:f,normalize:d}=Ox(i),{start:p,end:_,loop:m,style:v}=rR(n,e,t),M=[];let E=!1,x=null,S,A,D;const R=()=>f(s,D,S)&&u(s,D)!==0,I=()=>u(a,S)===0||f(a,D,S),L=()=>E||R(),F=()=>!E||I();for(let w=p,N=p;w<=_;++w)A=e[w%l],!A.skip&&(S=d(A[i]),S!==D&&(E=f(S,s,a),x===null&&L()&&(x=u(S,s)===0?w:N),x!==null&&F()&&(M.push(H0({start:x,end:w,loop:m,count:l,style:v})),x=null),N=w,D=S));return x!==null&&M.push(H0({start:x,end:_,loop:m,count:l,style:v})),M}function Bx(n,e){const t=[],i=n.segments;for(let s=0;s<i.length;s++){const a=kx(i[s],n.points,e);a.length&&t.push(...a)}return t}function sR(n,e,t,i){let s=0,a=e-1;if(t&&!i)for(;s<e&&!n[s].skip;)s++;for(;s<e&&n[s].skip;)s++;for(s%=e,t&&(a+=s);a>s&&n[a%e].skip;)a--;return a%=e,{start:s,end:a}}function oR(n,e,t,i){const s=n.length,a=[];let l=e,u=n[e],f;for(f=e+1;f<=t;++f){const d=n[f%s];d.skip||d.stop?u.skip||(i=!1,a.push({start:e%s,end:(f-1)%s,loop:i}),e=l=d.stop?f:null):(l=f,u.skip&&(e=f)),u=d}return l!==null&&a.push({start:e%s,end:l%s,loop:i}),a}function aR(n,e){const t=n.points,i=n.options.spanGaps,s=t.length;if(!s)return[];const a=!!n._loop,{start:l,end:u}=sR(t,s,a,i);if(i===!0)return G0(n,[{start:l,end:u,loop:a}],t,e);const f=u<l?u+s:u,d=!!n._fullLoop&&l===0&&u===s-1;return G0(n,oR(t,l,f,d),t,e)}function G0(n,e,t,i){return!i||!i.setContext||!t?e:lR(n,e,t,i)}function lR(n,e,t,i){const s=n._chart.getContext(),a=W0(n.options),{_datasetIndex:l,options:{spanGaps:u}}=n,f=t.length,d=[];let p=a,_=e[0].start,m=_;function v(M,E,x,S){const A=u?-1:1;if(M!==E){for(M+=f;t[M%f].skip;)M-=A;for(;t[E%f].skip;)E+=A;M%f!==E%f&&(d.push({start:M%f,end:E%f,loop:x,style:S}),p=S,_=E%f)}}for(const M of e){_=u?_:M.start;let E=t[_%f],x;for(m=_+1;m<=M.end;m++){const S=t[m%f];x=W0(i.setContext(Ys(s,{type:"segment",p0:E,p1:S,p0DataIndex:(m-1)%f,p1DataIndex:m%f,datasetIndex:l}))),cR(x,p)&&v(_,m-1,M.loop,p),E=S,p=x}_<m-1&&v(_,m-1,M.loop,p)}return d}function W0(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function cR(n,e){if(!e)return!1;const t=[],i=function(s,a){return Lp(a)?(t.includes(a)||t.push(a),t.indexOf(a)):a};return JSON.stringify(n,i)!==JSON.stringify(e,i)}function Wc(n,e,t){return n.options.clip?n[t]:e[t]}function uR(n,e){const{xScale:t,yScale:i}=n;return t&&i?{left:Wc(t,e,"left"),right:Wc(t,e,"right"),top:Wc(i,e,"top"),bottom:Wc(i,e,"bottom")}:e}function zx(n,e){const t=e._clip;if(t.disabled)return!1;const i=uR(e,n.chartArea);return{left:t.left===!1?0:i.left-(t.left===!0?0:t.left),right:t.right===!1?n.width:i.right+(t.right===!0?0:t.right),top:t.top===!1?0:i.top-(t.top===!0?0:t.top),bottom:t.bottom===!1?n.height:i.bottom+(t.bottom===!0?0:t.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class fR{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,i,s){const a=t.listeners[s],l=t.duration;a.forEach(u=>u({chart:e,initial:t.initial,numSteps:l,currentStep:Math.min(i-t.start,l)}))}_refresh(){this._request||(this._running=!0,this._request=Ax.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const a=i.items;let l=a.length-1,u=!1,f;for(;l>=0;--l)f=a[l],f._active?(f._total>i.duration&&(i.duration=f._total),f.tick(e),u=!0):(a[l]=a[a.length-1],a.pop());u&&(s.draw(),this._notify(s,i,e,"progress")),a.length||(i.running=!1,this._notify(s,i,e,"complete"),i.initial=!1),t+=a.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){const t=this._charts;let i=t.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,i)),i}listen(e,t,i){this._getAnims(e).listeners[t].push(i)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){const t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(e){if(!this._running)return!1;const t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){const t=this._charts.get(e);if(!t||!t.items.length)return;const i=t.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();t.items=[],this._notify(e,t,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var xr=new fR;const X0="transparent",dR={boolean(n,e,t){return t>.5?e:n},color(n,e,t){const i=L0(n||X0),s=i.valid&&L0(e||X0);return s&&s.valid?s.mix(i,t).hexString():e},number(n,e,t){return n+(e-n)*t}};class hR{constructor(e,t,i,s){const a=t[i];s=Hc([e.to,s,a,e.from]);const l=Hc([e.from,a,s]);this._active=!0,this._fn=e.fn||dR[e.type||typeof l],this._easing=Ka[e.easing]||Ka.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=i,this._from=l,this._to=s,this._promises=void 0}active(){return this._active}update(e,t,i){if(this._active){this._notify(!1);const s=this._target[this._prop],a=i-this._start,l=this._duration-a;this._start=i,this._duration=Math.floor(Math.max(l,e.duration)),this._total+=a,this._loop=!!e.loop,this._to=Hc([e.to,t,s,e.from]),this._from=Hc([e.from,s,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const t=e-this._start,i=this._duration,s=this._prop,a=this._from,l=this._loop,u=this._to;let f;if(this._active=a!==u&&(l||t<i),!this._active){this._target[s]=u,this._notify(!0);return}if(t<0){this._target[s]=a;return}f=t/i%2,f=l&&f>1?2-f:f,f=this._easing(Math.min(1,Math.max(0,f))),this._target[s]=this._fn(a,u,f)}wait(){const e=this._promises||(this._promises=[]);return new Promise((t,i)=>{e.push({res:t,rej:i})})}_notify(e){const t=e?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][t]()}}class Vx{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!St(e))return;const t=Object.keys(un.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(s=>{const a=e[s];if(!St(a))return;const l={};for(const u of t)l[u]=a[u];(yn(a.properties)&&a.properties||[s]).forEach(u=>{(u===s||!i.has(u))&&i.set(u,l)})})}_animateOptions(e,t){const i=t.options,s=mR(e,i);if(!s)return[];const a=this._createAnimations(s,i);return i.$shared&&pR(e.options.$animations,i).then(()=>{e.options=i},()=>{}),a}_createAnimations(e,t){const i=this._properties,s=[],a=e.$animations||(e.$animations={}),l=Object.keys(t),u=Date.now();let f;for(f=l.length-1;f>=0;--f){const d=l[f];if(d.charAt(0)==="$")continue;if(d==="options"){s.push(...this._animateOptions(e,t));continue}const p=t[d];let _=a[d];const m=i.get(d);if(_)if(m&&_.active()){_.update(m,p,u);continue}else _.cancel();if(!m||!m.duration){e[d]=p;continue}a[d]=_=new hR(m,e,d,p),s.push(_)}return s}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}const i=this._createAnimations(e,t);if(i.length)return xr.add(this._chart,i),!0}}function pR(n,e){const t=[],i=Object.keys(e);for(let s=0;s<i.length;s++){const a=n[i[s]];a&&a.active()&&t.push(a.wait())}return Promise.all(t)}function mR(n,e){if(!e)return;let t=n.options;if(!t){n.options=e;return}return t.$shared&&(n.options=t=Object.assign({},t,{$shared:!1,$animations:{}})),t}function j0(n,e){const t=n&&n.options||{},i=t.reverse,s=t.min===void 0?e:0,a=t.max===void 0?e:0;return{start:i?a:s,end:i?s:a}}function gR(n,e,t){if(t===!1)return!1;const i=j0(n,t),s=j0(e,t);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function _R(n){let e,t,i,s;return St(n)?(e=n.top,t=n.right,i=n.bottom,s=n.left):e=t=i=s=n,{top:e,right:t,bottom:i,left:s,disabled:n===!1}}function Hx(n,e){const t=[],i=n._getSortedDatasetMetas(e);let s,a;for(s=0,a=i.length;s<a;++s)t.push(i[s].index);return t}function Y0(n,e,t,i={}){const s=n.keys,a=i.mode==="single";let l,u,f,d;if(e===null)return;let p=!1;for(l=0,u=s.length;l<u;++l){if(f=+s[l],f===t){if(p=!0,i.all)continue;break}d=n.values[f],Nn(d)&&(a||e===0||Vo(e)===Vo(d))&&(e+=d)}return!p&&!i.all?0:e}function vR(n,e){const{iScale:t,vScale:i}=e,s=t.axis==="x"?"x":"y",a=i.axis==="x"?"x":"y",l=Object.keys(n),u=new Array(l.length);let f,d,p;for(f=0,d=l.length;f<d;++f)p=l[f],u[f]={[s]:p,[a]:n[p]};return u}function nh(n,e){const t=n&&n.options.stacked;return t||t===void 0&&e.stack!==void 0}function xR(n,e,t){return`${n.id}.${e.id}.${t.stack||t.type}`}function yR(n){const{min:e,max:t,minDefined:i,maxDefined:s}=n.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:s?t:Number.POSITIVE_INFINITY}}function SR(n,e,t){const i=n[e]||(n[e]={});return i[t]||(i[t]={})}function $0(n,e,t,i){for(const s of e.getMatchingVisibleMetas(i).reverse()){const a=n[s.index];if(t&&a>0||!t&&a<0)return s.index}return null}function q0(n,e){const{chart:t,_cachedMeta:i}=n,s=t._stacks||(t._stacks={}),{iScale:a,vScale:l,index:u}=i,f=a.axis,d=l.axis,p=xR(a,l,i),_=e.length;let m;for(let v=0;v<_;++v){const M=e[v],{[f]:E,[d]:x}=M,S=M._stacks||(M._stacks={});m=S[d]=SR(s,p,E),m[u]=x,m._top=$0(m,l,!0,i.type),m._bottom=$0(m,l,!1,i.type);const A=m._visualValues||(m._visualValues={});A[u]=x}}function ih(n,e){const t=n.scales;return Object.keys(t).filter(i=>t[i].axis===e).shift()}function MR(n,e){return Ys(n,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function ER(n,e,t){return Ys(n,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:t,index:e,mode:"default",type:"data"})}function Oa(n,e){const t=n.controller.index,i=n.vScale&&n.vScale.axis;if(i){e=e||n._parsed;for(const s of e){const a=s._stacks;if(!a||a[i]===void 0||a[i][t]===void 0)return;delete a[i][t],a[i]._visualValues!==void 0&&a[i]._visualValues[t]!==void 0&&delete a[i]._visualValues[t]}}}const rh=n=>n==="reset"||n==="none",K0=(n,e)=>e?n:Object.assign({},n),bR=(n,e,t)=>n&&!e.hidden&&e._stacked&&{keys:Hx(t,!0),values:null};class Qa{constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=nh(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&Oa(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,t=this._cachedMeta,i=this.getDataset(),s=(_,m,v,M)=>_==="x"?m:_==="r"?M:v,a=t.xAxisID=Ut(i.xAxisID,ih(e,"x")),l=t.yAxisID=Ut(i.yAxisID,ih(e,"y")),u=t.rAxisID=Ut(i.rAxisID,ih(e,"r")),f=t.indexAxis,d=t.iAxisID=s(f,a,l,u),p=t.vAxisID=s(f,l,a,u);t.xScale=this.getScaleForId(a),t.yScale=this.getScaleForId(l),t.rScale=this.getScaleForId(u),t.iScale=this.getScaleForId(d),t.vScale=this.getScaleForId(p)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&C0(this._data,this),e._stacked&&Oa(e)}_dataCheck(){const e=this.getDataset(),t=e.data||(e.data=[]),i=this._data;if(St(t)){const s=this._cachedMeta;this._data=vR(t,s)}else if(i!==t){if(i){C0(i,this);const s=this._cachedMeta;Oa(s),s._parsed=[]}t&&Object.isExtensible(t)&&tC(t,this),this._syncList=[],this._data=t}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const t=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const a=t._stacked;t._stacked=nh(t.vScale,t),t.stack!==i.stack&&(s=!0,Oa(t),t.stack=i.stack),this._resyncElements(e),(s||a!==t._stacked)&&(q0(this,t._parsed),t._stacked=nh(t.vScale,t))}configure(){const e=this.chart.config,t=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){const{_cachedMeta:i,_data:s}=this,{iScale:a,_stacked:l}=i,u=a.axis;let f=e===0&&t===s.length?!0:i._sorted,d=e>0&&i._parsed[e-1],p,_,m;if(this._parsing===!1)i._parsed=s,i._sorted=!0,m=s;else{yn(s[e])?m=this.parseArrayData(i,s,e,t):St(s[e])?m=this.parseObjectData(i,s,e,t):m=this.parsePrimitiveData(i,s,e,t);const v=()=>_[u]===null||d&&_[u]<d[u];for(p=0;p<t;++p)i._parsed[p+e]=_=m[p],f&&(v()&&(f=!1),d=_);i._sorted=f}l&&q0(this,m)}parsePrimitiveData(e,t,i,s){const{iScale:a,vScale:l}=e,u=a.axis,f=l.axis,d=a.getLabels(),p=a===l,_=new Array(s);let m,v,M;for(m=0,v=s;m<v;++m)M=m+i,_[m]={[u]:p||a.parse(d[M],M),[f]:l.parse(t[M],M)};return _}parseArrayData(e,t,i,s){const{xScale:a,yScale:l}=e,u=new Array(s);let f,d,p,_;for(f=0,d=s;f<d;++f)p=f+i,_=t[p],u[f]={x:a.parse(_[0],p),y:l.parse(_[1],p)};return u}parseObjectData(e,t,i,s){const{xScale:a,yScale:l}=e,{xAxisKey:u="x",yAxisKey:f="y"}=this._parsing,d=new Array(s);let p,_,m,v;for(p=0,_=s;p<_;++p)m=p+i,v=t[m],d[p]={x:a.parse(_u(v,u),m),y:l.parse(_u(v,f),m)};return d}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,i){const s=this.chart,a=this._cachedMeta,l=t[e.axis],u={keys:Hx(s,!0),values:t._stacks[e.axis]._visualValues};return Y0(u,l,a.index,{mode:i})}updateRangeFromParsed(e,t,i,s){const a=i[t.axis];let l=a===null?NaN:a;const u=s&&i._stacks[t.axis];s&&u&&(s.values=u,l=Y0(s,a,this._cachedMeta.index)),e.min=Math.min(e.min,l),e.max=Math.max(e.max,l)}getMinMax(e,t){const i=this._cachedMeta,s=i._parsed,a=i._sorted&&e===i.iScale,l=s.length,u=this._getOtherScale(e),f=bR(t,i,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:p,max:_}=yR(u);let m,v;function M(){v=s[m];const E=v[u.axis];return!Nn(v[e.axis])||p>E||_<E}for(m=0;m<l&&!(!M()&&(this.updateRangeFromParsed(d,e,v,f),a));++m);if(a){for(m=l-1;m>=0;--m)if(!M()){this.updateRangeFromParsed(d,e,v,f);break}}return d}getAllParsedValues(e){const t=this._cachedMeta._parsed,i=[];let s,a,l;for(s=0,a=t.length;s<a;++s)l=t[s][e.axis],Nn(l)&&i.push(l);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const t=this._cachedMeta,i=t.iScale,s=t.vScale,a=this.getParsed(e);return{label:i?""+i.getLabelForValue(a[i.axis]):"",value:s?""+s.getLabelForValue(a[s.axis]):""}}_update(e){const t=this._cachedMeta;this.update(e||"default"),t._clip=_R(Ut(this.options.clip,gR(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,t=this.chart,i=this._cachedMeta,s=i.data||[],a=t.chartArea,l=[],u=this._drawStart||0,f=this._drawCount||s.length-u,d=this.options.drawActiveElementsOnTop;let p;for(i.dataset&&i.dataset.draw(e,a,u,f),p=u;p<u+f;++p){const _=s[p];_.hidden||(_.active&&d?l.push(_):_.draw(e,a))}for(p=0;p<l.length;++p)l[p].draw(e,a)}getStyle(e,t){const i=t?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,t,i){const s=this.getDataset();let a;if(e>=0&&e<this._cachedMeta.data.length){const l=this._cachedMeta.data[e];a=l.$context||(l.$context=ER(this.getContext(),e,l)),a.parsed=this.getParsed(e),a.raw=s.data[e],a.index=a.dataIndex=e}else a=this.$context||(this.$context=MR(this.chart.getContext(),this.index)),a.dataset=s,a.index=a.datasetIndex=this.index;return a.active=!!t,a.mode=i,a}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t="default",i){const s=t==="active",a=this._cachedDataOpts,l=e+"-"+t,u=a[l],f=this.enableOptionSharing&&vu(i);if(u)return K0(u,f);const d=this.chart.config,p=d.datasetElementScopeKeys(this._type,e),_=s?[`${e}Hover`,"hover",e,""]:[e,""],m=d.getOptionScopes(this.getDataset(),p),v=Object.keys(un.elements[e]),M=()=>this.getContext(i,s,t),E=d.resolveNamedOptions(m,v,M,_);return E.$shared&&(E.$shared=f,a[l]=Object.freeze(K0(E,f))),E}_resolveAnimations(e,t,i){const s=this.chart,a=this._cachedDataOpts,l=`animation-${t}`,u=a[l];if(u)return u;let f;if(s.options.animation!==!1){const p=this.chart.config,_=p.datasetAnimationScopeKeys(this._type,t),m=p.getOptionScopes(this.getDataset(),_);f=p.createResolver(m,this.getContext(e,i,t))}const d=new Vx(s,f&&f.animations);return f&&f._cacheable&&(a[l]=Object.freeze(d)),d}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,t){return!t||rh(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){const i=this.resolveDataElementOptions(e,t),s=this._sharedOptions,a=this.getSharedOptions(i),l=this.includeOptions(t,a)||a!==s;return this.updateSharedOptions(a,t,i),{sharedOptions:a,includeOptions:l}}updateElement(e,t,i,s){rh(s)?Object.assign(e,i):this._resolveAnimations(t,s).update(e,i)}updateSharedOptions(e,t,i){e&&!rh(t)&&this._resolveAnimations(void 0,t).update(e,i)}_setStyle(e,t,i,s){e.active=s;const a=this.getStyle(t,s);this._resolveAnimations(t,i,s).update(e,{options:!s&&this.getSharedOptions(a)||a})}removeHoverStyle(e,t,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,t,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const t=this._data,i=this._cachedMeta.data;for(const[u,f,d]of this._syncList)this[u](f,d);this._syncList=[];const s=i.length,a=t.length,l=Math.min(a,s);l&&this.parse(0,l),a>s?this._insertElements(s,a-s,e):a<s&&this._removeElements(a,s-a)}_insertElements(e,t,i=!0){const s=this._cachedMeta,a=s.data,l=e+t;let u;const f=d=>{for(d.length+=t,u=d.length-1;u>=l;u--)d[u]=d[u-t]};for(f(a),u=e;u<l;++u)a[u]=new this.dataElementType;this._parsing&&f(s._parsed),this.parse(e,t),i&&this.updateElements(a,e,t,"reset")}updateElements(e,t,i,s){}_removeElements(e,t){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(e,t);i._stacked&&Oa(i,s)}i.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[t,i,s]=e;this[t](i,s)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,t){t&&this._sync(["_removeElements",e,t]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}dt(Qa,"defaults",{}),dt(Qa,"datasetElementType",null),dt(Qa,"dataElementType",null);class su extends Qa{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const t=this._cachedMeta,{dataset:i,data:s=[],_dataset:a}=t,l=this.chart._animationsDisabled;let{start:u,count:f}=sC(t,s,l);this._drawStart=u,this._drawCount=f,oC(t)&&(u=0,f=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=s;const d=this.resolveDatasetElementOptions(e);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(i,void 0,{animated:!l,options:d},e),this.updateElements(s,u,f,e)}updateElements(e,t,i,s){const a=s==="reset",{iScale:l,vScale:u,_stacked:f,_dataset:d}=this._cachedMeta,{sharedOptions:p,includeOptions:_}=this._getSharedOptions(t,s),m=l.axis,v=u.axis,{spanGaps:M,segment:E}=this.options,x=rl(M)?M:Number.POSITIVE_INFINITY,S=this.chart._animationsDisabled||a||s==="none",A=t+i,D=e.length;let R=t>0&&this.getParsed(t-1);for(let I=0;I<D;++I){const L=e[I],F=S?L:{};if(I<t||I>=A){F.skip=!0;continue}const w=this.getParsed(I),N=Wt(w[v]),z=F[m]=l.getPixelForValue(w[m],I),O=F[v]=a||N?u.getBasePixel():u.getPixelForValue(f?this.applyStack(u,w,f):w[v],I);F.skip=isNaN(z)||isNaN(O)||N,F.stop=I>0&&Math.abs(w[m]-R[m])>x,E&&(F.parsed=w,F.raw=d.data[I]),_&&(F.options=p||this.resolveDataElementOptions(I,L.active?"active":s)),S||this.updateElement(L,I,F,s),R=w}}getMaxOverflow(){const e=this._cachedMeta,t=e.dataset,i=t.options&&t.options.borderWidth||0,s=e.data||[];if(!s.length)return i;const a=s[0].size(this.resolveDataElementOptions(0)),l=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,a,l)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}dt(su,"id","line"),dt(su,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),dt(su,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Ds(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class zp{constructor(e){dt(this,"options");this.options=e||{}}static override(e){Object.assign(zp.prototype,e)}init(){}formats(){return Ds()}parse(){return Ds()}format(){return Ds()}add(){return Ds()}diff(){return Ds()}startOf(){return Ds()}endOf(){return Ds()}}var wR={_date:zp};function TR(n,e,t,i){const{controller:s,data:a,_sorted:l}=n,u=s._cachedMeta.iScale,f=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(u&&e===u.axis&&e!=="r"&&l&&a.length){const d=u._reversePixels?JA:zs;if(i){if(s._sharedOptions){const p=a[0],_=typeof p.getRange=="function"&&p.getRange(e);if(_){const m=d(a,e,t-_),v=d(a,e,t+_);return{lo:m.lo,hi:v.hi}}}}else{const p=d(a,e,t);if(f){const{vScale:_}=s._cachedMeta,{_parsed:m}=n,v=m.slice(0,p.lo+1).reverse().findIndex(E=>!Wt(E[_.axis]));p.lo-=Math.max(0,v);const M=m.slice(p.hi).findIndex(E=>!Wt(E[_.axis]));p.hi+=Math.max(0,M)}return p}}return{lo:0,hi:a.length-1}}function Du(n,e,t,i,s){const a=n.getSortedVisibleDatasetMetas(),l=t[e];for(let u=0,f=a.length;u<f;++u){const{index:d,data:p}=a[u],{lo:_,hi:m}=TR(a[u],e,l,s);for(let v=_;v<=m;++v){const M=p[v];M.skip||i(M,d,v)}}}function AR(n){const e=n.indexOf("x")!==-1,t=n.indexOf("y")!==-1;return function(i,s){const a=e?Math.abs(i.x-s.x):0,l=t?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(l,2))}}function sh(n,e,t,i,s){const a=[];return!s&&!n.isPointInArea(e)||Du(n,t,e,function(u,f,d){!s&&!sl(u,n.chartArea,0)||u.inRange(e.x,e.y,i)&&a.push({element:u,datasetIndex:f,index:d})},!0),a}function CR(n,e,t,i){let s=[];function a(l,u,f){const{startAngle:d,endAngle:p}=l.getProps(["startAngle","endAngle"],i),{angle:_}=KA(l,{x:e.x,y:e.y});bx(_,d,p)&&s.push({element:l,datasetIndex:u,index:f})}return Du(n,t,e,a),s}function RR(n,e,t,i,s,a){let l=[];const u=AR(t);let f=Number.POSITIVE_INFINITY;function d(p,_,m){const v=p.inRange(e.x,e.y,s);if(i&&!v)return;const M=p.getCenterPoint(s);if(!(!!a||n.isPointInArea(M))&&!v)return;const x=u(e,M);x<f?(l=[{element:p,datasetIndex:_,index:m}],f=x):x===f&&l.push({element:p,datasetIndex:_,index:m})}return Du(n,t,e,d),l}function oh(n,e,t,i,s,a){return!a&&!n.isPointInArea(e)?[]:t==="r"&&!i?CR(n,e,t,s):RR(n,e,t,i,s,a)}function Z0(n,e,t,i,s){const a=[],l=t==="x"?"inXRange":"inYRange";let u=!1;return Du(n,t,e,(f,d,p)=>{f[l]&&f[l](e[t],s)&&(a.push({element:f,datasetIndex:d,index:p}),u=u||f.inRange(e.x,e.y,s))}),i&&!u?[]:a}var PR={modes:{index(n,e,t,i){const s=Is(e,n),a=t.axis||"x",l=t.includeInvisible||!1,u=t.intersect?sh(n,s,a,i,l):oh(n,s,a,!1,i,l),f=[];return u.length?(n.getSortedVisibleDatasetMetas().forEach(d=>{const p=u[0].index,_=d.data[p];_&&!_.skip&&f.push({element:_,datasetIndex:d.index,index:p})}),f):[]},dataset(n,e,t,i){const s=Is(e,n),a=t.axis||"xy",l=t.includeInvisible||!1;let u=t.intersect?sh(n,s,a,i,l):oh(n,s,a,!1,i,l);if(u.length>0){const f=u[0].datasetIndex,d=n.getDatasetMeta(f).data;u=[];for(let p=0;p<d.length;++p)u.push({element:d[p],datasetIndex:f,index:p})}return u},point(n,e,t,i){const s=Is(e,n),a=t.axis||"xy",l=t.includeInvisible||!1;return sh(n,s,a,i,l)},nearest(n,e,t,i){const s=Is(e,n),a=t.axis||"xy",l=t.includeInvisible||!1;return oh(n,s,a,t.intersect,i,l)},x(n,e,t,i){const s=Is(e,n);return Z0(n,s,"x",t.intersect,i)},y(n,e,t,i){const s=Is(e,n);return Z0(n,s,"y",t.intersect,i)}}};const Gx=["left","top","right","bottom"];function ka(n,e){return n.filter(t=>t.pos===e)}function Q0(n,e){return n.filter(t=>Gx.indexOf(t.pos)===-1&&t.box.axis===e)}function Ba(n,e){return n.sort((t,i)=>{const s=e?i:t,a=e?t:i;return s.weight===a.weight?s.index-a.index:s.weight-a.weight})}function DR(n){const e=[];let t,i,s,a,l,u;for(t=0,i=(n||[]).length;t<i;++t)s=n[t],{position:a,options:{stack:l,stackWeight:u=1}}=s,e.push({index:t,box:s,pos:a,horizontal:s.isHorizontal(),weight:s.weight,stack:l&&a+l,stackWeight:u});return e}function LR(n){const e={};for(const t of n){const{stack:i,pos:s,stackWeight:a}=t;if(!i||!Gx.includes(s))continue;const l=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});l.count++,l.weight+=a}return e}function IR(n,e){const t=LR(n),{vBoxMaxWidth:i,hBoxMaxHeight:s}=e;let a,l,u;for(a=0,l=n.length;a<l;++a){u=n[a];const{fullSize:f}=u.box,d=t[u.stack],p=d&&u.stackWeight/d.weight;u.horizontal?(u.width=p?p*i:f&&e.availableWidth,u.height=s):(u.width=i,u.height=p?p*s:f&&e.availableHeight)}return t}function NR(n){const e=DR(n),t=Ba(e.filter(d=>d.box.fullSize),!0),i=Ba(ka(e,"left"),!0),s=Ba(ka(e,"right")),a=Ba(ka(e,"top"),!0),l=Ba(ka(e,"bottom")),u=Q0(e,"x"),f=Q0(e,"y");return{fullSize:t,leftAndTop:i.concat(a),rightAndBottom:s.concat(f).concat(l).concat(u),chartArea:ka(e,"chartArea"),vertical:i.concat(s).concat(f),horizontal:a.concat(l).concat(u)}}function J0(n,e,t,i){return Math.max(n[t],e[t])+Math.max(n[i],e[i])}function Wx(n,e){n.top=Math.max(n.top,e.top),n.left=Math.max(n.left,e.left),n.bottom=Math.max(n.bottom,e.bottom),n.right=Math.max(n.right,e.right)}function FR(n,e,t,i){const{pos:s,box:a}=t,l=n.maxPadding;if(!St(s)){t.size&&(n[s]-=t.size);const _=i[t.stack]||{size:0,count:1};_.size=Math.max(_.size,t.horizontal?a.height:a.width),t.size=_.size/_.count,n[s]+=t.size}a.getPadding&&Wx(l,a.getPadding());const u=Math.max(0,e.outerWidth-J0(l,n,"left","right")),f=Math.max(0,e.outerHeight-J0(l,n,"top","bottom")),d=u!==n.w,p=f!==n.h;return n.w=u,n.h=f,t.horizontal?{same:d,other:p}:{same:p,other:d}}function UR(n){const e=n.maxPadding;function t(i){const s=Math.max(e[i]-n[i],0);return n[i]+=s,s}n.y+=t("top"),n.x+=t("left"),t("right"),t("bottom")}function OR(n,e){const t=e.maxPadding;function i(s){const a={left:0,top:0,right:0,bottom:0};return s.forEach(l=>{a[l]=Math.max(e[l],t[l])}),a}return i(n?["left","right"]:["top","bottom"])}function ja(n,e,t,i){const s=[];let a,l,u,f,d,p;for(a=0,l=n.length,d=0;a<l;++a){u=n[a],f=u.box,f.update(u.width||e.w,u.height||e.h,OR(u.horizontal,e));const{same:_,other:m}=FR(e,t,u,i);d|=_&&s.length,p=p||m,f.fullSize||s.push(u)}return d&&ja(s,e,t,i)||p}function Xc(n,e,t,i,s){n.top=t,n.left=e,n.right=e+i,n.bottom=t+s,n.width=i,n.height=s}function ev(n,e,t,i){const s=t.padding;let{x:a,y:l}=e;for(const u of n){const f=u.box,d=i[u.stack]||{placed:0,weight:1},p=u.stackWeight/d.weight||1;if(u.horizontal){const _=e.w*p,m=d.size||f.height;vu(d.start)&&(l=d.start),f.fullSize?Xc(f,s.left,l,t.outerWidth-s.right-s.left,m):Xc(f,e.left+d.placed,l,_,m),d.start=l,d.placed+=_,l=f.bottom}else{const _=e.h*p,m=d.size||f.width;vu(d.start)&&(a=d.start),f.fullSize?Xc(f,a,s.top,m,t.outerHeight-s.bottom-s.top):Xc(f,a,e.top+d.placed,m,_),d.start=a,d.placed+=_,a=f.right}}e.x=a,e.y=l}var jc={addBox(n,e){n.boxes||(n.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},n.boxes.push(e)},removeBox(n,e){const t=n.boxes?n.boxes.indexOf(e):-1;t!==-1&&n.boxes.splice(t,1)},configure(n,e,t){e.fullSize=t.fullSize,e.position=t.position,e.weight=t.weight},update(n,e,t,i){if(!n)return;const s=cs(n.options.layout.padding),a=Math.max(e-s.width,0),l=Math.max(t-s.height,0),u=NR(n.boxes),f=u.vertical,d=u.horizontal;Nt(n.boxes,E=>{typeof E.beforeLayout=="function"&&E.beforeLayout()});const p=f.reduce((E,x)=>x.box.options&&x.box.options.display===!1?E:E+1,0)||1,_=Object.freeze({outerWidth:e,outerHeight:t,padding:s,availableWidth:a,availableHeight:l,vBoxMaxWidth:a/2/p,hBoxMaxHeight:l/2}),m=Object.assign({},s);Wx(m,cs(i));const v=Object.assign({maxPadding:m,w:a,h:l,x:s.left,y:s.top},s),M=IR(f.concat(d),_);ja(u.fullSize,v,_,M),ja(f,v,_,M),ja(d,v,_,M)&&ja(f,v,_,M),UR(v),ev(u.leftAndTop,v,_,M),v.x+=v.w,v.y+=v.h,ev(u.rightAndBottom,v,_,M),n.chartArea={left:v.left,top:v.top,right:v.left+v.w,bottom:v.top+v.h,height:v.h,width:v.w},Nt(u.chartArea,E=>{const x=E.box;Object.assign(x,n.chartArea),x.update(v.w,v.h,{left:0,top:0,right:0,bottom:0})})}};class Xx{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,i){}removeEventListener(e,t,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,i,s){return t=Math.max(0,t||e.width),i=i||e.height,{width:t,height:Math.max(0,s?Math.floor(t/s):i)}}isAttached(e){return!0}updateConfig(e){}}class kR extends Xx{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const ou="$chartjs",BR={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},tv=n=>n===null||n==="";function zR(n,e){const t=n.style,i=n.getAttribute("height"),s=n.getAttribute("width");if(n[ou]={initial:{height:i,width:s,style:{display:t.display,height:t.height,width:t.width}}},t.display=t.display||"block",t.boxSizing=t.boxSizing||"border-box",tv(s)){const a=V0(n,"width");a!==void 0&&(n.width=a)}if(tv(i))if(n.style.height==="")n.height=n.width/(e||2);else{const a=V0(n,"height");a!==void 0&&(n.height=a)}return n}const jx=ZC?{passive:!0}:!1;function VR(n,e,t){n&&n.addEventListener(e,t,jx)}function HR(n,e,t){n&&n.canvas&&n.canvas.removeEventListener(e,t,jx)}function GR(n,e){const t=BR[n.type]||n.type,{x:i,y:s}=Is(n,e);return{type:t,chart:e,native:n,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Su(n,e){for(const t of n)if(t===e||t.contains(e))return!0}function WR(n,e,t){const i=n.canvas,s=new MutationObserver(a=>{let l=!1;for(const u of a)l=l||Su(u.addedNodes,i),l=l&&!Su(u.removedNodes,i);l&&t()});return s.observe(document,{childList:!0,subtree:!0}),s}function XR(n,e,t){const i=n.canvas,s=new MutationObserver(a=>{let l=!1;for(const u of a)l=l||Su(u.removedNodes,i),l=l&&!Su(u.addedNodes,i);l&&t()});return s.observe(document,{childList:!0,subtree:!0}),s}const ol=new Map;let nv=0;function Yx(){const n=window.devicePixelRatio;n!==nv&&(nv=n,ol.forEach((e,t)=>{t.currentDevicePixelRatio!==n&&e()}))}function jR(n,e){ol.size||window.addEventListener("resize",Yx),ol.set(n,e)}function YR(n){ol.delete(n),ol.size||window.removeEventListener("resize",Yx)}function $R(n,e,t){const i=n.canvas,s=i&&Bp(i);if(!s)return;const a=Cx((u,f)=>{const d=s.clientWidth;t(u,f),d<s.clientWidth&&t()},window),l=new ResizeObserver(u=>{const f=u[0],d=f.contentRect.width,p=f.contentRect.height;d===0&&p===0||a(d,p)});return l.observe(s),jR(n,a),l}function ah(n,e,t){t&&t.disconnect(),e==="resize"&&YR(n)}function qR(n,e,t){const i=n.canvas,s=Cx(a=>{n.ctx!==null&&t(GR(a,n))},n);return VR(i,e,s),s}class KR extends Xx{acquireContext(e,t){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(zR(e,t),i):null}releaseContext(e){const t=e.canvas;if(!t[ou])return!1;const i=t[ou].initial;["height","width"].forEach(a=>{const l=i[a];Wt(l)?t.removeAttribute(a):t.setAttribute(a,l)});const s=i.style||{};return Object.keys(s).forEach(a=>{t.style[a]=s[a]}),t.width=t.width,delete t[ou],!0}addEventListener(e,t,i){this.removeEventListener(e,t);const s=e.$proxies||(e.$proxies={}),l={attach:WR,detach:XR,resize:$R}[t]||qR;s[t]=l(e,t,i)}removeEventListener(e,t){const i=e.$proxies||(e.$proxies={}),s=i[t];if(!s)return;({attach:ah,detach:ah,resize:ah}[t]||HR)(e,t,s),i[t]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,i,s){return KC(e,t,i,s)}isAttached(e){const t=e&&Bp(e);return!!(t&&t.isConnected)}}function ZR(n){return!kp()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?kR:KR}class Xs{constructor(){dt(this,"x");dt(this,"y");dt(this,"active",!1);dt(this,"options");dt(this,"$animations")}tooltipPosition(e){const{x:t,y:i}=this.getProps(["x","y"],e);return{x:t,y:i}}hasValue(){return rl(this.x)&&rl(this.y)}getProps(e,t){const i=this.$animations;if(!t||!i)return this;const s={};return e.forEach(a=>{s[a]=i[a]&&i[a].active()?i[a]._to:this[a]}),s}}dt(Xs,"defaults",{}),dt(Xs,"defaultRoutes");function QR(n,e){const t=n.options.ticks,i=JR(n),s=Math.min(t.maxTicksLimit||i,i),a=t.major.enabled?tP(e):[],l=a.length,u=a[0],f=a[l-1],d=[];if(l>s)return nP(e,d,a,l/s),d;const p=eP(a,e,s);if(l>0){let _,m;const v=l>1?Math.round((f-u)/(l-1)):null;for(Yc(e,d,p,Wt(v)?0:u-v,u),_=0,m=l-1;_<m;_++)Yc(e,d,p,a[_],a[_+1]);return Yc(e,d,p,f,Wt(v)?e.length:f+v),d}return Yc(e,d,p),d}function JR(n){const e=n.options.offset,t=n._tickSize(),i=n._length/t+(e?0:1),s=n._maxLength/t;return Math.floor(Math.min(i,s))}function eP(n,e,t){const i=iP(n),s=e.length/t;if(!i)return Math.max(s,1);const a=XA(i);for(let l=0,u=a.length-1;l<u;l++){const f=a[l];if(f>s)return f}return Math.max(s,1)}function tP(n){const e=[];let t,i;for(t=0,i=n.length;t<i;t++)n[t].major&&e.push(t);return e}function nP(n,e,t,i){let s=0,a=t[0],l;for(i=Math.ceil(i),l=0;l<n.length;l++)l===a&&(e.push(n[l]),s++,a=t[s*i])}function Yc(n,e,t,i,s){const a=Ut(i,0),l=Math.min(Ut(s,n.length),n.length);let u=0,f,d,p;for(t=Math.ceil(t),s&&(f=s-i,t=f/Math.floor(f/t)),p=a;p<0;)u++,p=Math.round(a+u*t);for(d=Math.max(a,0);d<l;d++)d===p&&(e.push(n[d]),u++,p=Math.round(a+u*t))}function iP(n){const e=n.length;let t,i;if(e<2)return!1;for(i=n[0],t=1;t<e;++t)if(n[t]-n[t-1]!==i)return!1;return i}const rP=n=>n==="left"?"right":n==="right"?"left":n,iv=(n,e,t)=>e==="top"||e==="left"?n[e]+t:n[e]-t,rv=(n,e)=>Math.min(e||n,n);function sv(n,e){const t=[],i=n.length/e,s=n.length;let a=0;for(;a<s;a+=i)t.push(n[Math.floor(a)]);return t}function sP(n,e,t){const i=n.ticks.length,s=Math.min(e,i-1),a=n._startPixel,l=n._endPixel,u=1e-6;let f=n.getPixelForTick(s),d;if(!(t&&(i===1?d=Math.max(f-a,l-f):e===0?d=(n.getPixelForTick(1)-f)/2:d=(f-n.getPixelForTick(s-1))/2,f+=s<e?d:-d,f<a-u||f>l+u)))return f}function oP(n,e){Nt(n,t=>{const i=t.gc,s=i.length/2;let a;if(s>e){for(a=0;a<s;++a)delete t.data[i[a]];i.splice(0,s)}})}function za(n){return n.drawTicks?n.tickLength:0}function ov(n,e){if(!n.display)return 0;const t=$i(n.font,e),i=cs(n.padding);return(yn(n.text)?n.text.length:1)*t.lineHeight+i.height}function aP(n,e){return Ys(n,{scale:e,type:"scale"})}function lP(n,e,t){return Ys(n,{tick:t,index:e,type:"tick"})}function cP(n,e,t){let i=rC(n);return(t&&e!=="right"||!t&&e==="right")&&(i=rP(i)),i}function uP(n,e,t,i){const{top:s,left:a,bottom:l,right:u,chart:f}=n,{chartArea:d,scales:p}=f;let _=0,m,v,M;const E=l-s,x=u-a;if(n.isHorizontal()){if(v=R0(i,a,u),St(t)){const S=Object.keys(t)[0],A=t[S];M=p[S].getPixelForValue(A)+E-e}else t==="center"?M=(d.bottom+d.top)/2+E-e:M=iv(n,t,e);m=u-a}else{if(St(t)){const S=Object.keys(t)[0],A=t[S];v=p[S].getPixelForValue(A)-x+e}else t==="center"?v=(d.left+d.right)/2-x+e:v=iv(n,t,e);M=R0(i,l,s),_=t==="left"?-Di:Di}return{titleX:v,titleY:M,maxWidth:m,rotation:_}}class jo extends Xs{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:i,_suggestedMax:s}=this;return e=Vi(e,Number.POSITIVE_INFINITY),t=Vi(t,Number.NEGATIVE_INFINITY),i=Vi(i,Number.POSITIVE_INFINITY),s=Vi(s,Number.NEGATIVE_INFINITY),{min:Vi(e,i),max:Vi(t,s),minDefined:Nn(e),maxDefined:Nn(t)}}getMinMax(e){let{min:t,max:i,minDefined:s,maxDefined:a}=this.getUserBounds(),l;if(s&&a)return{min:t,max:i};const u=this.getMatchingVisibleMetas();for(let f=0,d=u.length;f<d;++f)l=u[f].controller.getMinMax(this,e),s||(t=Math.min(t,l.min)),a||(i=Math.max(i,l.max));return t=a&&t>i?i:t,i=s&&t>i?t:i,{min:Vi(t,Vi(i,t)),max:Vi(i,Vi(t,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){sn(this.options.beforeUpdate,[this])}update(e,t,i){const{beginAtZero:s,grace:a,ticks:l}=this.options,u=l.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=CC(this,a,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const f=u<this.ticks.length;this._convertTicksToLabels(f?sv(this.ticks,u):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),l.display&&(l.autoSkip||l.source==="auto")&&(this.ticks=QR(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),f&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,i;this.isHorizontal()?(t=this.left,i=this.right):(t=this.top,i=this.bottom,e=!e),this._startPixel=t,this._endPixel=i,this._reversePixels=e,this._length=i-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){sn(this.options.afterUpdate,[this])}beforeSetDimensions(){sn(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){sn(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),sn(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){sn(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const t=this.options.ticks;let i,s,a;for(i=0,s=e.length;i<s;i++)a=e[i],a.label=sn(t.callback,[a.value,i,e],this)}afterTickToLabelConversion(){sn(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){sn(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,t=e.ticks,i=rv(this.ticks.length,e.ticks.maxTicksLimit),s=t.minRotation||0,a=t.maxRotation;let l=s,u,f,d;if(!this._isVisible()||!t.display||s>=a||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const p=this._getLabelSizes(),_=p.widest.width,m=p.highest.height,v=gi(this.chart.width-_,0,this.maxWidth);u=e.offset?this.maxWidth/i:v/(i-1),_+6>u&&(u=v/(i-(e.offset?.5:1)),f=this.maxHeight-za(e.grid)-t.padding-ov(e.title,this.chart.options.font),d=Math.sqrt(_*_+m*m),l=qA(Math.min(Math.asin(gi((p.highest.height+6)/u,-1,1)),Math.asin(gi(f/d,-1,1))-Math.asin(gi(m/d,-1,1)))),l=Math.max(s,Math.min(a,l))),this.labelRotation=l}afterCalculateLabelRotation(){sn(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){sn(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:t,options:{ticks:i,title:s,grid:a}}=this,l=this._isVisible(),u=this.isHorizontal();if(l){const f=ov(s,t.options.font);if(u?(e.width=this.maxWidth,e.height=za(a)+f):(e.height=this.maxHeight,e.width=za(a)+f),i.display&&this.ticks.length){const{first:d,last:p,widest:_,highest:m}=this._getLabelSizes(),v=i.padding*2,M=Bs(this.labelRotation),E=Math.cos(M),x=Math.sin(M);if(u){const S=i.mirror?0:x*_.width+E*m.height;e.height=Math.min(this.maxHeight,e.height+S+v)}else{const S=i.mirror?0:E*_.width+x*m.height;e.width=Math.min(this.maxWidth,e.width+S+v)}this._calculatePadding(d,p,x,E)}}this._handleMargins(),u?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,i,s){const{ticks:{align:a,padding:l},position:u}=this.options,f=this.labelRotation!==0,d=u!=="top"&&this.axis==="x";if(this.isHorizontal()){const p=this.getPixelForTick(0)-this.left,_=this.right-this.getPixelForTick(this.ticks.length-1);let m=0,v=0;f?d?(m=s*e.width,v=i*t.height):(m=i*e.height,v=s*t.width):a==="start"?v=t.width:a==="end"?m=e.width:a!=="inner"&&(m=e.width/2,v=t.width/2),this.paddingLeft=Math.max((m-p+l)*this.width/(this.width-p),0),this.paddingRight=Math.max((v-_+l)*this.width/(this.width-_),0)}else{let p=t.height/2,_=e.height/2;a==="start"?(p=0,_=e.height):a==="end"&&(p=t.height,_=0),this.paddingTop=p+l,this.paddingBottom=_+l}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){sn(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:t}=this.options;return t==="top"||t==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,i;for(t=0,i=e.length;t<i;t++)Wt(e[t].label)&&(e.splice(t,1),i--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const t=this.options.ticks.sampleSize;let i=this.ticks;t<i.length&&(i=sv(i,t)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,i){const{ctx:s,_longestTextCache:a}=this,l=[],u=[],f=Math.floor(t/rv(t,i));let d=0,p=0,_,m,v,M,E,x,S,A,D,R,I;for(_=0;_<t;_+=f){if(M=e[_].label,E=this._resolveTickFontOptions(_),s.font=x=E.string,S=a[x]=a[x]||{data:{},gc:[]},A=E.lineHeight,D=R=0,!Wt(M)&&!yn(M))D=N0(s,S.data,S.gc,D,M),R=A;else if(yn(M))for(m=0,v=M.length;m<v;++m)I=M[m],!Wt(I)&&!yn(I)&&(D=N0(s,S.data,S.gc,D,I),R+=A);l.push(D),u.push(R),d=Math.max(D,d),p=Math.max(R,p)}oP(a,t);const L=l.indexOf(d),F=u.indexOf(p),w=N=>({width:l[N]||0,height:u[N]||0});return{first:w(0),last:w(t-1),widest:w(L),highest:w(F),widths:l,heights:u}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const t=this._startPixel+e*this._length;return QA(this._alignToPixels?Ps(this.chart,t,0):t)}getDecimalForPixel(e){const t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){const t=this.ticks||[];if(e>=0&&e<t.length){const i=t[e];return i.$context||(i.$context=lP(this.getContext(),e,i))}return this.$context||(this.$context=aP(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,t=Bs(this.labelRotation),i=Math.abs(Math.cos(t)),s=Math.abs(Math.sin(t)),a=this._getLabelSizes(),l=e.autoSkipPadding||0,u=a?a.widest.width+l:0,f=a?a.highest.height+l:0;return this.isHorizontal()?f*i>u*s?u/i:f/s:f*s<u*i?f/i:u/s}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const t=this.axis,i=this.chart,s=this.options,{grid:a,position:l,border:u}=s,f=a.offset,d=this.isHorizontal(),_=this.ticks.length+(f?1:0),m=za(a),v=[],M=u.setContext(this.getContext()),E=M.display?M.width:0,x=E/2,S=function(q){return Ps(i,q,E)};let A,D,R,I,L,F,w,N,z,O,j,ie;if(l==="top")A=S(this.bottom),F=this.bottom-m,N=A-x,O=S(e.top)+x,ie=e.bottom;else if(l==="bottom")A=S(this.top),O=e.top,ie=S(e.bottom)-x,F=A+x,N=this.top+m;else if(l==="left")A=S(this.right),L=this.right-m,w=A-x,z=S(e.left)+x,j=e.right;else if(l==="right")A=S(this.left),z=e.left,j=S(e.right)-x,L=A+x,w=this.left+m;else if(t==="x"){if(l==="center")A=S((e.top+e.bottom)/2+.5);else if(St(l)){const q=Object.keys(l)[0],X=l[q];A=S(this.chart.scales[q].getPixelForValue(X))}O=e.top,ie=e.bottom,F=A+x,N=F+m}else if(t==="y"){if(l==="center")A=S((e.left+e.right)/2);else if(St(l)){const q=Object.keys(l)[0],X=l[q];A=S(this.chart.scales[q].getPixelForValue(X))}L=A-x,w=L-m,z=e.left,j=e.right}const ce=Ut(s.ticks.maxTicksLimit,_),B=Math.max(1,Math.ceil(_/ce));for(D=0;D<_;D+=B){const q=this.getContext(D),X=a.setContext(q),$=u.setContext(q),le=X.lineWidth,se=X.color,k=$.dash||[],Z=$.dashOffset,De=X.tickWidth,Ne=X.tickColor,Pe=X.tickBorderDash||[],re=X.tickBorderDashOffset;R=sP(this,D,f),R!==void 0&&(I=Ps(i,R,le),d?L=w=z=j=I:F=N=O=ie=I,v.push({tx1:L,ty1:F,tx2:w,ty2:N,x1:z,y1:O,x2:j,y2:ie,width:le,color:se,borderDash:k,borderDashOffset:Z,tickWidth:De,tickColor:Ne,tickBorderDash:Pe,tickBorderDashOffset:re}))}return this._ticksLength=_,this._borderValue=A,v}_computeLabelItems(e){const t=this.axis,i=this.options,{position:s,ticks:a}=i,l=this.isHorizontal(),u=this.ticks,{align:f,crossAlign:d,padding:p,mirror:_}=a,m=za(i.grid),v=m+p,M=_?-p:v,E=-Bs(this.labelRotation),x=[];let S,A,D,R,I,L,F,w,N,z,O,j,ie="middle";if(s==="top")L=this.bottom-M,F=this._getXAxisLabelAlignment();else if(s==="bottom")L=this.top+M,F=this._getXAxisLabelAlignment();else if(s==="left"){const B=this._getYAxisLabelAlignment(m);F=B.textAlign,I=B.x}else if(s==="right"){const B=this._getYAxisLabelAlignment(m);F=B.textAlign,I=B.x}else if(t==="x"){if(s==="center")L=(e.top+e.bottom)/2+v;else if(St(s)){const B=Object.keys(s)[0],q=s[B];L=this.chart.scales[B].getPixelForValue(q)+v}F=this._getXAxisLabelAlignment()}else if(t==="y"){if(s==="center")I=(e.left+e.right)/2-v;else if(St(s)){const B=Object.keys(s)[0],q=s[B];I=this.chart.scales[B].getPixelForValue(q)}F=this._getYAxisLabelAlignment(m).textAlign}t==="y"&&(f==="start"?ie="top":f==="end"&&(ie="bottom"));const ce=this._getLabelSizes();for(S=0,A=u.length;S<A;++S){D=u[S],R=D.label;const B=a.setContext(this.getContext(S));w=this.getPixelForTick(S)+a.labelOffset,N=this._resolveTickFontOptions(S),z=N.lineHeight,O=yn(R)?R.length:1;const q=O/2,X=B.color,$=B.textStrokeColor,le=B.textStrokeWidth;let se=F;l?(I=w,F==="inner"&&(S===A-1?se=this.options.reverse?"left":"right":S===0?se=this.options.reverse?"right":"left":se="center"),s==="top"?d==="near"||E!==0?j=-O*z+z/2:d==="center"?j=-ce.highest.height/2-q*z+z:j=-ce.highest.height+z/2:d==="near"||E!==0?j=z/2:d==="center"?j=ce.highest.height/2-q*z:j=ce.highest.height-O*z,_&&(j*=-1),E!==0&&!B.showLabelBackdrop&&(I+=z/2*Math.sin(E))):(L=w,j=(1-O)*z/2);let k;if(B.showLabelBackdrop){const Z=cs(B.backdropPadding),De=ce.heights[S],Ne=ce.widths[S];let Pe=j-Z.top,re=0-Z.left;switch(ie){case"middle":Pe-=De/2;break;case"bottom":Pe-=De;break}switch(F){case"center":re-=Ne/2;break;case"right":re-=Ne;break;case"inner":S===A-1?re-=Ne:S>0&&(re-=Ne/2);break}k={left:re,top:Pe,width:Ne+Z.width,height:De+Z.height,color:B.backdropColor}}x.push({label:R,font:N,textOffset:j,options:{rotation:E,color:X,strokeColor:$,strokeWidth:le,textAlign:se,textBaseline:ie,translation:[I,L],backdrop:k}})}return x}_getXAxisLabelAlignment(){const{position:e,ticks:t}=this.options;if(-Bs(this.labelRotation))return e==="top"?"left":"right";let s="center";return t.align==="start"?s="left":t.align==="end"?s="right":t.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(e){const{position:t,ticks:{crossAlign:i,mirror:s,padding:a}}=this.options,l=this._getLabelSizes(),u=e+a,f=l.widest.width;let d,p;return t==="left"?s?(p=this.right+a,i==="near"?d="left":i==="center"?(d="center",p+=f/2):(d="right",p+=f)):(p=this.right-u,i==="near"?d="right":i==="center"?(d="center",p-=f/2):(d="left",p=this.left)):t==="right"?s?(p=this.left+a,i==="near"?d="right":i==="center"?(d="center",p-=f/2):(d="left",p-=f)):(p=this.left+u,i==="near"?d="left":i==="center"?(d="center",p+=f/2):(d="right",p=this.right)):d="right",{textAlign:d,x:p}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,t=this.options.position;if(t==="left"||t==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(t==="top"||t==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:t},left:i,top:s,width:a,height:l}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(i,s,a,l),e.restore())}getLineWidthForValue(e){const t=this.options.grid;if(!this._isVisible()||!t.display)return 0;const s=this.ticks.findIndex(a=>a.value===e);return s>=0?t.setContext(this.getContext(s)).lineWidth:0}drawGrid(e){const t=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let a,l;const u=(f,d,p)=>{!p.width||!p.color||(i.save(),i.lineWidth=p.width,i.strokeStyle=p.color,i.setLineDash(p.borderDash||[]),i.lineDashOffset=p.borderDashOffset,i.beginPath(),i.moveTo(f.x,f.y),i.lineTo(d.x,d.y),i.stroke(),i.restore())};if(t.display)for(a=0,l=s.length;a<l;++a){const f=s[a];t.drawOnChartArea&&u({x:f.x1,y:f.y1},{x:f.x2,y:f.y2},f),t.drawTicks&&u({x:f.tx1,y:f.ty1},{x:f.tx2,y:f.ty2},{color:f.tickColor,width:f.tickWidth,borderDash:f.tickBorderDash,borderDashOffset:f.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:t,options:{border:i,grid:s}}=this,a=i.setContext(this.getContext()),l=i.display?a.width:0;if(!l)return;const u=s.setContext(this.getContext(0)).lineWidth,f=this._borderValue;let d,p,_,m;this.isHorizontal()?(d=Ps(e,this.left,l)-l/2,p=Ps(e,this.right,u)+u/2,_=m=f):(_=Ps(e,this.top,l)-l/2,m=Ps(e,this.bottom,u)+u/2,d=p=f),t.save(),t.lineWidth=a.width,t.strokeStyle=a.color,t.beginPath(),t.moveTo(d,_),t.lineTo(p,m),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&Ip(i,s);const a=this.getLabelItems(e);for(const l of a){const u=l.options,f=l.font,d=l.label,p=l.textOffset;U0(i,d,0,p,f,u)}s&&Np(i)}drawTitle(){const{ctx:e,options:{position:t,title:i,reverse:s}}=this;if(!i.display)return;const a=$i(i.font),l=cs(i.padding),u=i.align;let f=a.lineHeight/2;t==="bottom"||t==="center"||St(t)?(f+=l.bottom,yn(i.text)&&(f+=a.lineHeight*(i.text.length-1))):f+=l.top;const{titleX:d,titleY:p,maxWidth:_,rotation:m}=uP(this,f,t,u);U0(e,i.text,0,0,a,{color:i.color,maxWidth:_,rotation:m,textAlign:cP(u,t,s),textBaseline:"middle",translation:[d,p]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,t=e.ticks&&e.ticks.z||0,i=Ut(e.grid&&e.grid.z,-1),s=Ut(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==jo.prototype.draw?[{z:t,draw:a=>{this.draw(a)}}]:[{z:i,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:t,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(e){const t=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let a,l;for(a=0,l=t.length;a<l;++a){const u=t[a];u[i]===this.id&&(!e||u.type===e)&&s.push(u)}return s}_resolveTickFontOptions(e){const t=this.options.ticks.setContext(this.getContext(e));return $i(t.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class $c{constructor(e,t,i){this.type=e,this.scope=t,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const t=Object.getPrototypeOf(e);let i;hP(t)&&(i=this.register(t));const s=this.items,a=e.id,l=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+e);return a in s||(s[a]=e,fP(e,l,i),this.override&&un.override(e.id,e.overrides)),l}get(e){return this.items[e]}unregister(e){const t=this.items,i=e.id,s=this.scope;i in t&&delete t[i],s&&i in un[s]&&(delete un[s][i],this.override&&delete Ws[i])}}function fP(n,e,t){const i=il(Object.create(null),[t?un.get(t):{},un.get(e),n.defaults]);un.set(e,i),n.defaultRoutes&&dP(e,n.defaultRoutes),n.descriptors&&un.describe(e,n.descriptors)}function dP(n,e){Object.keys(e).forEach(t=>{const i=t.split("."),s=i.pop(),a=[n].concat(i).join("."),l=e[t].split("."),u=l.pop(),f=l.join(".");un.route(a,s,f,u)})}function hP(n){return"id"in n&&"defaults"in n}class pP{constructor(){this.controllers=new $c(Qa,"datasets",!0),this.elements=new $c(Xs,"elements"),this.plugins=new $c(Object,"plugins"),this.scales=new $c(jo,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,t,i){[...t].forEach(s=>{const a=i||this._getRegistryForType(s);i||a.isForType(s)||a===this.plugins&&s.id?this._exec(e,a,s):Nt(s,l=>{const u=i||this._getRegistryForType(l);this._exec(e,u,l)})})}_exec(e,t,i){const s=Pp(e);sn(i["before"+s],[],i),t[e](i),sn(i["after"+s],[],i)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){const i=this._typedRegistries[t];if(i.isForType(e))return i}return this.plugins}_get(e,t,i){const s=t.get(e);if(s===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return s}}var Gi=new pP;class mP{constructor(){this._init=void 0}notify(e,t,i,s){if(t==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install")),this._init===void 0)return;const a=s?this._descriptors(e).filter(s):this._descriptors(e),l=this._notify(a,e,t,i);return t==="afterDestroy"&&(this._notify(a,e,"stop"),this._notify(this._init,e,"uninstall"),this._init=void 0),l}_notify(e,t,i,s){s=s||{};for(const a of e){const l=a.plugin,u=l[i],f=[t,s,a.options];if(sn(u,f,l)===!1&&s.cancelable)return!1}return!0}invalidate(){Wt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){const i=e&&e.config,s=Ut(i.options&&i.options.plugins,{}),a=gP(i);return s===!1&&!t?[]:vP(e,a,s,t)}_notifyStateChanges(e){const t=this._oldCache||[],i=this._cache,s=(a,l)=>a.filter(u=>!l.some(f=>u.plugin.id===f.plugin.id));this._notify(s(t,i),e,"stop"),this._notify(s(i,t),e,"start")}}function gP(n){const e={},t=[],i=Object.keys(Gi.plugins.items);for(let a=0;a<i.length;a++)t.push(Gi.getPlugin(i[a]));const s=n.plugins||[];for(let a=0;a<s.length;a++){const l=s[a];t.indexOf(l)===-1&&(t.push(l),e[l.id]=!0)}return{plugins:t,localIds:e}}function _P(n,e){return!e&&n===!1?null:n===!0?{}:n}function vP(n,{plugins:e,localIds:t},i,s){const a=[],l=n.getContext();for(const u of e){const f=u.id,d=_P(i[f],s);d!==null&&a.push({plugin:u,options:xP(n.config,{plugin:u,local:t[f]},d,l)})}return a}function xP(n,{plugin:e,local:t},i,s){const a=n.pluginScopeKeys(e),l=n.getOptionScopes(i,a);return t&&e.defaults&&l.push(e.defaults),n.createResolver(l,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function op(n,e){const t=un.datasets[n]||{};return((e.datasets||{})[n]||{}).indexAxis||e.indexAxis||t.indexAxis||"x"}function yP(n,e){let t=n;return n==="_index_"?t=e:n==="_value_"&&(t=e==="x"?"y":"x"),t}function SP(n,e){return n===e?"_index_":"_value_"}function av(n){if(n==="x"||n==="y"||n==="r")return n}function MP(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function ap(n,...e){if(av(n))return n;for(const t of e){const i=t.axis||MP(t.position)||n.length>1&&av(n[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function lv(n,e,t){if(t[e+"AxisID"]===n)return{axis:e}}function EP(n,e){if(e.data&&e.data.datasets){const t=e.data.datasets.filter(i=>i.xAxisID===n||i.yAxisID===n);if(t.length)return lv(n,"x",t[0])||lv(n,"y",t[0])}return{}}function bP(n,e){const t=Ws[n.type]||{scales:{}},i=e.scales||{},s=op(n.type,e),a=Object.create(null);return Object.keys(i).forEach(l=>{const u=i[l];if(!St(u))return console.error(`Invalid scale configuration for scale: ${l}`);if(u._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${l}`);const f=ap(l,u,EP(l,n),un.scales[u.type]),d=SP(f,s),p=t.scales||{};a[l]=$a(Object.create(null),[{axis:f},u,p[f],p[d]])}),n.data.datasets.forEach(l=>{const u=l.type||n.type,f=l.indexAxis||op(u,e),p=(Ws[u]||{}).scales||{};Object.keys(p).forEach(_=>{const m=yP(_,f),v=l[m+"AxisID"]||m;a[v]=a[v]||Object.create(null),$a(a[v],[{axis:m},i[v],p[_]])})}),Object.keys(a).forEach(l=>{const u=a[l];$a(u,[un.scales[u.type],un.scale])}),a}function $x(n){const e=n.options||(n.options={});e.plugins=Ut(e.plugins,{}),e.scales=bP(n,e)}function qx(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function wP(n){return n=n||{},n.data=qx(n.data),$x(n),n}const cv=new Map,Kx=new Set;function qc(n,e){let t=cv.get(n);return t||(t=e(),cv.set(n,t),Kx.add(t)),t}const Va=(n,e,t)=>{const i=_u(e,t);i!==void 0&&n.add(i)};class TP{constructor(e){this._config=wP(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=qx(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),$x(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return qc(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,t){return qc(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,t){return qc(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,""]])}pluginScopeKeys(e){const t=e.id,i=this.type;return qc(`${i}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){const i=this._scopeCache;let s=i.get(e);return(!s||t)&&(s=new Map,i.set(e,s)),s}getOptionScopes(e,t,i){const{options:s,type:a}=this,l=this._cachedScopes(e,i),u=l.get(t);if(u)return u;const f=new Set;t.forEach(p=>{e&&(f.add(e),p.forEach(_=>Va(f,e,_))),p.forEach(_=>Va(f,s,_)),p.forEach(_=>Va(f,Ws[a]||{},_)),p.forEach(_=>Va(f,un,_)),p.forEach(_=>Va(f,rp,_))});const d=Array.from(f);return d.length===0&&d.push(Object.create(null)),Kx.has(t)&&l.set(t,d),d}chartOptionScopes(){const{options:e,type:t}=this;return[e,Ws[t]||{},un.datasets[t]||{},{type:t},un,rp]}resolveNamedOptions(e,t,i,s=[""]){const a={$shared:!0},{resolver:l,subPrefixes:u}=uv(this._resolverCache,e,s);let f=l;if(CP(l,t)){a.$shared=!1,i=ls(i)?i():i;const d=this.createResolver(e,i,u);f=Ho(l,i,d)}for(const d of t)a[d]=f[d];return a}createResolver(e,t,i=[""],s){const{resolver:a}=uv(this._resolverCache,e,i);return St(t)?Ho(a,t,void 0,s):a}}function uv(n,e,t){let i=n.get(e);i||(i=new Map,n.set(e,i));const s=t.join();let a=i.get(s);return a||(a={resolver:Fp(e,t),subPrefixes:t.filter(u=>!u.toLowerCase().includes("hover"))},i.set(s,a)),a}const AP=n=>St(n)&&Object.getOwnPropertyNames(n).some(e=>ls(n[e]));function CP(n,e){const{isScriptable:t,isIndexable:i}=Lx(n);for(const s of e){const a=t(s),l=i(s),u=(l||a)&&n[s];if(a&&(ls(u)||AP(u))||l&&yn(u))return!0}return!1}var RP="4.5.1";const PP=["top","bottom","left","right","chartArea"];function fv(n,e){return n==="top"||n==="bottom"||PP.indexOf(n)===-1&&e==="x"}function dv(n,e){return function(t,i){return t[n]===i[n]?t[e]-i[e]:t[n]-i[n]}}function hv(n){const e=n.chart,t=e.options.animation;e.notifyPlugins("afterRender"),sn(t&&t.onComplete,[n],e)}function DP(n){const e=n.chart,t=e.options.animation;sn(t&&t.onProgress,[n],e)}function Zx(n){return kp()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const au={},pv=n=>{const e=Zx(n);return Object.values(au).filter(t=>t.canvas===e).pop()};function LP(n,e,t){const i=Object.keys(n);for(const s of i){const a=+s;if(a>=e){const l=n[s];delete n[s],(t>0||a>e)&&(n[a+t]=l)}}}function IP(n,e,t,i){return!t||n.type==="mouseout"?null:i?e:n}var Jr;let Lu=(Jr=class{static register(...e){Gi.add(...e),mv()}static unregister(...e){Gi.remove(...e),mv()}constructor(e,t){const i=this.config=new TP(t),s=Zx(e),a=pv(s);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");const l=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||ZR(s)),this.platform.updateConfig(i);const u=this.platform.acquireContext(s,l.aspectRatio),f=u&&u.canvas,d=f&&f.height,p=f&&f.width;if(this.id=UA(),this.ctx=u,this.canvas=f,this.width=p,this.height=d,this._options=l,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new mP,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=iC(_=>this.update(_),l.resizeDelay||0),this._dataChanges=[],au[this.id]=this,!u||!f){console.error("Failed to create chart: can't acquire context from the given item");return}xr.listen(this,"complete",hv),xr.listen(this,"progress",DP),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:t},width:i,height:s,_aspectRatio:a}=this;return Wt(e)?t&&a?a:s?i/s:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Gi}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():z0(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return F0(this.canvas,this.ctx),this}stop(){return xr.stop(this),this}resize(e,t){xr.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){const i=this.options,s=this.canvas,a=i.maintainAspectRatio&&this.aspectRatio,l=this.platform.getMaximumSize(s,e,t,a),u=i.devicePixelRatio||this.platform.getDevicePixelRatio(),f=this.width?"resize":"attach";this.width=l.width,this.height=l.height,this._aspectRatio=this.aspectRatio,z0(this,u,!0)&&(this.notifyPlugins("resize",{size:l}),sn(i.onResize,[this,l],this),this.attached&&this._doResize(f)&&this.render())}ensureScalesHaveIDs(){const t=this.options.scales||{};Nt(t,(i,s)=>{i.id=s})}buildOrUpdateScales(){const e=this.options,t=e.scales,i=this.scales,s=Object.keys(i).reduce((l,u)=>(l[u]=!1,l),{});let a=[];t&&(a=a.concat(Object.keys(t).map(l=>{const u=t[l],f=ap(l,u),d=f==="r",p=f==="x";return{options:u,dposition:d?"chartArea":p?"bottom":"left",dtype:d?"radialLinear":p?"category":"linear"}}))),Nt(a,l=>{const u=l.options,f=u.id,d=ap(f,u),p=Ut(u.type,l.dtype);(u.position===void 0||fv(u.position,d)!==fv(l.dposition))&&(u.position=l.dposition),s[f]=!0;let _=null;if(f in i&&i[f].type===p)_=i[f];else{const m=Gi.getScale(p);_=new m({id:f,type:p,ctx:this.ctx,chart:this}),i[_.id]=_}_.init(u,e)}),Nt(s,(l,u)=>{l||delete i[u]}),Nt(i,l=>{jc.configure(this,l,l.options),jc.addBox(this,l)})}_updateMetasets(){const e=this._metasets,t=this.data.datasets.length,i=e.length;if(e.sort((s,a)=>s.index-a.index),i>t){for(let s=t;s<i;++s)this._destroyDatasetMeta(s);e.splice(t,i-t)}this._sortedMetasets=e.slice(0).sort(dv("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((i,s)=>{t.filter(a=>a===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const e=[],t=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=t.length;i<s;i++){const a=t[i];let l=this.getDatasetMeta(i);const u=a.type||this.config.type;if(l.type&&l.type!==u&&(this._destroyDatasetMeta(i),l=this.getDatasetMeta(i)),l.type=u,l.indexAxis=a.indexAxis||op(u,this.options),l.order=a.order||0,l.index=i,l.label=""+a.label,l.visible=this.isDatasetVisible(i),l.controller)l.controller.updateIndex(i),l.controller.linkScales();else{const f=Gi.getController(u),{datasetElementType:d,dataElementType:p}=un.datasets[u];Object.assign(f,{dataElementType:Gi.getElement(p),datasetElementType:d&&Gi.getElement(d)}),l.controller=new f(this,i),e.push(l.controller)}}return this._updateMetasets(),e}_resetElements(){Nt(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const t=this.config;t.update();const i=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let l=0;for(let d=0,p=this.data.datasets.length;d<p;d++){const{controller:_}=this.getDatasetMeta(d),m=!s&&a.indexOf(_)===-1;_.buildOrUpdateElements(m),l=Math.max(+_.getMaxOverflow(),l)}l=this._minPadding=i.layout.autoPadding?l:0,this._updateLayout(l),s||Nt(a,d=>{d.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(dv("z","_idx"));const{_active:u,_lastEvent:f}=this;f?this._eventHandler(f,!0):u.length&&this._updateHoverStyles(u,u,!0),this.render()}_updateScales(){Nt(this.scales,e=>{jc.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,t=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!b0(t,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:a}of t){const l=i==="_removeElements"?-a:a;LP(e,s,l)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const t=this.data.datasets.length,i=a=>new Set(e.filter(l=>l[0]===a).map((l,u)=>u+","+l.splice(1).join(","))),s=i(0);for(let a=1;a<t;a++)if(!b0(s,i(a)))return;return Array.from(s).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;jc.update(this,this.width,this.height,e);const t=this.chartArea,i=t.width<=0||t.height<=0;this._layers=[],Nt(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,a)=>{s._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let t=0,i=this.data.datasets.length;t<i;++t)this.getDatasetMeta(t).controller.configure();for(let t=0,i=this.data.datasets.length;t<i;++t)this._updateDataset(t,ls(e)?e({datasetIndex:t}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,t){const i=this.getDatasetMeta(e),s={meta:i,index:e,mode:t,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(t),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(xr.has(this)?this.attached&&!xr.running(this)&&xr.start(this):(this.draw(),hv({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const t=this._sortedMetasets,i=[];let s,a;for(s=0,a=t.length;s<a;++s){const l=t[s];(!e||l.visible)&&i.push(l)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const t=this.ctx,i={meta:e,index:e.index,cancelable:!0},s=zx(this,e);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(s&&Ip(t,s),e.controller.draw(),s&&Np(t),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(e){return sl(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,i,s){const a=PR.modes[t];return typeof a=="function"?a(this,e,i,s):[]}getDatasetMeta(e){const t=this.data.datasets[e],i=this._metasets;let s=i.filter(a=>a&&a._dataset===t).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Ys(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const t=this.data.datasets[e];if(!t)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!t.hidden}setDatasetVisibility(e,t){const i=this.getDatasetMeta(e);i.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,i){const s=i?"show":"hide",a=this.getDatasetMeta(e),l=a.controller._resolveAnimations(void 0,s);vu(t)?(a.data[t].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),l.update(a,{visible:i}),this.update(u=>u.datasetIndex===e?s:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){const t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),xr.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),F0(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete au[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,t=this.platform,i=(a,l)=>{t.addEventListener(this,a,l),e[a]=l},s=(a,l,u)=>{a.offsetX=l,a.offsetY=u,this._eventHandler(a)};Nt(this.options.events,a=>i(a,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,t=this.platform,i=(f,d)=>{t.addEventListener(this,f,d),e[f]=d},s=(f,d)=>{e[f]&&(t.removeEventListener(this,f,d),delete e[f])},a=(f,d)=>{this.canvas&&this.resize(f,d)};let l;const u=()=>{s("attach",u),this.attached=!0,this.resize(),i("resize",a),i("detach",l)};l=()=>{this.attached=!1,s("resize",a),this._stop(),this._resize(0,0),i("attach",u)},t.isAttached(this.canvas)?u():l()}unbindEvents(){Nt(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},Nt(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,i){const s=i?"set":"remove";let a,l,u,f;for(t==="dataset"&&(a=this.getDatasetMeta(e[0].datasetIndex),a.controller["_"+s+"DatasetHoverStyle"]()),u=0,f=e.length;u<f;++u){l=e[u];const d=l&&this.getDatasetMeta(l.datasetIndex).controller;d&&d[s+"HoverStyle"](l.element,l.datasetIndex,l.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const t=this._active||[],i=e.map(({datasetIndex:a,index:l})=>{const u=this.getDatasetMeta(a);if(!u)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:u.data[l],index:l}});!mu(i,t)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,t))}notifyPlugins(e,t,i){return this._plugins.notify(this,e,t,i)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,i){const s=this.options.hover,a=(f,d)=>f.filter(p=>!d.some(_=>p.datasetIndex===_.datasetIndex&&p.index===_.index)),l=a(t,e),u=i?e:a(e,t);l.length&&this.updateHoverStyle(l,s.mode,!1),u.length&&s.mode&&this.updateHoverStyle(u,s.mode,!0)}_eventHandler(e,t){const i={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},s=l=>(l.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const a=this._handleEvent(e,t,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(a||i.changed)&&this.render(),this}_handleEvent(e,t,i){const{_active:s=[],options:a}=this,l=t,u=this._getActiveElements(e,s,i,l),f=HA(e),d=IP(e,this._lastEvent,i,f);i&&(this._lastEvent=null,sn(a.onHover,[e,u,this],this),f&&sn(a.onClick,[e,u,this],this));const p=!mu(u,s);return(p||t)&&(this._active=u,this._updateHoverStyles(u,s,t)),this._lastEvent=d,p}_getActiveElements(e,t,i,s){if(e.type==="mouseout")return[];if(!i)return t;const a=this.options.hover;return this.getElementsAtEventForMode(e,a.mode,a,s)}},dt(Jr,"defaults",un),dt(Jr,"instances",au),dt(Jr,"overrides",Ws),dt(Jr,"registry",Gi),dt(Jr,"version",RP),dt(Jr,"getChart",pv),Jr);function mv(){return Nt(Lu.instances,n=>n._plugins.invalidate())}function Qx(n,e,t=e){n.lineCap=Ut(t.borderCapStyle,e.borderCapStyle),n.setLineDash(Ut(t.borderDash,e.borderDash)),n.lineDashOffset=Ut(t.borderDashOffset,e.borderDashOffset),n.lineJoin=Ut(t.borderJoinStyle,e.borderJoinStyle),n.lineWidth=Ut(t.borderWidth,e.borderWidth),n.strokeStyle=Ut(t.borderColor,e.borderColor)}function NP(n,e,t){n.lineTo(t.x,t.y)}function FP(n){return n.stepped?vC:n.tension||n.cubicInterpolationMode==="monotone"?xC:NP}function Jx(n,e,t={}){const i=n.length,{start:s=0,end:a=i-1}=t,{start:l,end:u}=e,f=Math.max(s,l),d=Math.min(a,u),p=s<l&&a<l||s>u&&a>u;return{count:i,start:f,loop:e.loop,ilen:d<f&&!p?i+d-f:d-f}}function UP(n,e,t,i){const{points:s,options:a}=e,{count:l,start:u,loop:f,ilen:d}=Jx(s,t,i),p=FP(a);let{move:_=!0,reverse:m}=i||{},v,M,E;for(v=0;v<=d;++v)M=s[(u+(m?d-v:v))%l],!M.skip&&(_?(n.moveTo(M.x,M.y),_=!1):p(n,E,M,m,a.stepped),E=M);return f&&(M=s[(u+(m?d:0))%l],p(n,E,M,m,a.stepped)),!!f}function OP(n,e,t,i){const s=e.points,{count:a,start:l,ilen:u}=Jx(s,t,i),{move:f=!0,reverse:d}=i||{};let p=0,_=0,m,v,M,E,x,S;const A=R=>(l+(d?u-R:R))%a,D=()=>{E!==x&&(n.lineTo(p,x),n.lineTo(p,E),n.lineTo(p,S))};for(f&&(v=s[A(0)],n.moveTo(v.x,v.y)),m=0;m<=u;++m){if(v=s[A(m)],v.skip)continue;const R=v.x,I=v.y,L=R|0;L===M?(I<E?E=I:I>x&&(x=I),p=(_*p+R)/++_):(D(),n.lineTo(R,I),M=L,_=0,E=x=I),S=I}D()}function lp(n){const e=n.options,t=e.borderDash&&e.borderDash.length;return!n._decimated&&!n._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!t?OP:UP}function kP(n){return n.stepped?QC:n.tension||n.cubicInterpolationMode==="monotone"?JC:Ns}function BP(n,e,t,i){let s=e._path;s||(s=e._path=new Path2D,e.path(s,t,i)&&s.closePath()),Qx(n,e.options),n.stroke(s)}function zP(n,e,t,i){const{segments:s,options:a}=e,l=lp(e);for(const u of s)Qx(n,a,u.style),n.beginPath(),l(n,e,u,{start:t,end:t+i-1})&&n.closePath(),n.stroke()}const VP=typeof Path2D=="function";function HP(n,e,t,i){VP&&!e.options.segment?BP(n,e,t,i):zP(n,e,t,i)}class rs extends Xs{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;WC(this._points,i,e,s,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=aR(this,this.options.segment))}first(){const e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){const e=this.segments,t=this.points,i=e.length;return i&&t[e[i-1].end]}interpolate(e,t){const i=this.options,s=e[t],a=this.points,l=Bx(this,{property:t,start:s,end:s});if(!l.length)return;const u=[],f=kP(i);let d,p;for(d=0,p=l.length;d<p;++d){const{start:_,end:m}=l[d],v=a[_],M=a[m];if(v===M){u.push(v);continue}const E=Math.abs((s-v[t])/(M[t]-v[t])),x=f(v,M,E,i.stepped);x[t]=e[t],u.push(x)}return u.length===1?u[0]:u}pathSegment(e,t,i){return lp(this)(e,this,t,i)}path(e,t,i){const s=this.segments,a=lp(this);let l=this._loop;t=t||0,i=i||this.points.length-t;for(const u of s)l&=a(e,this,u,{start:t,end:t+i-1});return!!l}draw(e,t,i,s){const a=this.options||{};(this.points||[]).length&&a.borderWidth&&(e.save(),HP(e,this,i,s),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}dt(rs,"id","line"),dt(rs,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),dt(rs,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),dt(rs,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function gv(n,e,t,i){const s=n.options,{[t]:a}=n.getProps([t],i);return Math.abs(e-a)<s.radius+s.hitRadius}class lu extends Xs{constructor(t){super();dt(this,"parsed");dt(this,"skip");dt(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,i,s){const a=this.options,{x:l,y:u}=this.getProps(["x","y"],s);return Math.pow(t-l,2)+Math.pow(i-u,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(t,i){return gv(this,t,"x",i)}inYRange(t,i){return gv(this,t,"y",i)}getCenterPoint(t){const{x:i,y:s}=this.getProps(["x","y"],t);return{x:i,y:s}}size(t){t=t||this.options||{};let i=t.radius||0;i=Math.max(i,i&&t.hoverRadius||0);const s=i&&t.borderWidth||0;return(i+s)*2}draw(t,i){const s=this.options;this.skip||s.radius<.1||!sl(this,i,this.size(s)/2)||(t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.fillStyle=s.backgroundColor,sp(t,s,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}dt(lu,"id","point"),dt(lu,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),dt(lu,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function GP(n,e,t){const i=n.segments,s=n.points,a=e.points,l=[];for(const u of i){let{start:f,end:d}=u;d=Iu(f,d,s);const p=cp(t,s[f],s[d],u.loop);if(!e.segments){l.push({source:u,target:p,start:s[f],end:s[d]});continue}const _=Bx(e,p);for(const m of _){const v=cp(t,a[m.start],a[m.end],m.loop),M=kx(u,s,v);for(const E of M)l.push({source:E,target:m,start:{[t]:_v(p,v,"start",Math.max)},end:{[t]:_v(p,v,"end",Math.min)}})}}return l}function cp(n,e,t,i){if(i)return;let s=e[n],a=t[n];return n==="angle"&&(s=Wi(s),a=Wi(a)),{property:n,start:s,end:a}}function WP(n,e){const{x:t=null,y:i=null}=n||{},s=e.points,a=[];return e.segments.forEach(({start:l,end:u})=>{u=Iu(l,u,s);const f=s[l],d=s[u];i!==null?(a.push({x:f.x,y:i}),a.push({x:d.x,y:i})):t!==null&&(a.push({x:t,y:f.y}),a.push({x:t,y:d.y}))}),a}function Iu(n,e,t){for(;e>n;e--){const i=t[e];if(!isNaN(i.x)&&!isNaN(i.y))break}return e}function _v(n,e,t,i){return n&&e?i(n[t],e[t]):n?n[t]:e?e[t]:0}function ey(n,e){let t=[],i=!1;return yn(n)?(i=!0,t=n):t=WP(n,e),t.length?new rs({points:t,options:{tension:0},_loop:i,_fullLoop:i}):null}function vv(n){return n&&n.fill!==!1}function XP(n,e,t){let s=n[e].fill;const a=[e];let l;if(!t)return s;for(;s!==!1&&a.indexOf(s)===-1;){if(!Nn(s))return s;if(l=n[s],!l)return!1;if(l.visible)return s;a.push(s),s=l.fill}return!1}function jP(n,e,t){const i=KP(n);if(St(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return Nn(s)&&Math.floor(s)===s?YP(i[0],e,s,t):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function YP(n,e,t,i){return(n==="-"||n==="+")&&(t=e+t),t===e||t<0||t>=i?!1:t}function $P(n,e){let t=null;return n==="start"?t=e.bottom:n==="end"?t=e.top:St(n)?t=e.getPixelForValue(n.value):e.getBasePixel&&(t=e.getBasePixel()),t}function qP(n,e,t){let i;return n==="start"?i=t:n==="end"?i=e.options.reverse?e.min:e.max:St(n)?i=n.value:i=e.getBaseValue(),i}function KP(n){const e=n.options,t=e.fill;let i=Ut(t&&t.target,t);return i===void 0&&(i=!!e.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function ZP(n){const{scale:e,index:t,line:i}=n,s=[],a=i.segments,l=i.points,u=QP(e,t);u.push(ey({x:null,y:e.bottom},i));for(let f=0;f<a.length;f++){const d=a[f];for(let p=d.start;p<=d.end;p++)JP(s,l[p],u)}return new rs({points:s,options:{}})}function QP(n,e){const t=[],i=n.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){const a=i[s];if(a.index===e)break;a.hidden||t.unshift(a.dataset)}return t}function JP(n,e,t){const i=[];for(let s=0;s<t.length;s++){const a=t[s],{first:l,last:u,point:f}=e2(a,e,"x");if(!(!f||l&&u)){if(l)i.unshift(f);else if(n.push(f),!u)break}}n.push(...i)}function e2(n,e,t){const i=n.interpolate(e,t);if(!i)return{};const s=i[t],a=n.segments,l=n.points;let u=!1,f=!1;for(let d=0;d<a.length;d++){const p=a[d],_=l[p.start][t],m=l[p.end][t];if(wx(s,_,m)){u=s===_,f=s===m;break}}return{first:u,last:f,point:i}}class ty{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,i){const{x:s,y:a,radius:l}=this;return t=t||{start:0,end:Qi},e.arc(s,a,l,t.end,t.start,!0),!i.bounds}interpolate(e){const{x:t,y:i,radius:s}=this,a=e.angle;return{x:t+Math.cos(a)*s,y:i+Math.sin(a)*s,angle:a}}}function t2(n){const{chart:e,fill:t,line:i}=n;if(Nn(t))return n2(e,t);if(t==="stack")return ZP(n);if(t==="shape")return!0;const s=i2(n);return s instanceof ty?s:ey(s,i)}function n2(n,e){const t=n.getDatasetMeta(e);return t&&n.isDatasetVisible(e)?t.dataset:null}function i2(n){return(n.scale||{}).getPointPositionForValue?s2(n):r2(n)}function r2(n){const{scale:e={},fill:t}=n,i=$P(t,e);if(Nn(i)){const s=e.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function s2(n){const{scale:e,fill:t}=n,i=e.options,s=e.getLabels().length,a=i.reverse?e.max:e.min,l=qP(t,e,a),u=[];if(i.grid.circular){const f=e.getPointPositionForValue(0,a);return new ty({x:f.x,y:f.y,radius:e.getDistanceFromCenterForValue(l)})}for(let f=0;f<s;++f)u.push(e.getPointPositionForValue(f,l));return u}function lh(n,e,t){const i=t2(e),{chart:s,index:a,line:l,scale:u,axis:f}=e,d=l.options,p=d.fill,_=d.backgroundColor,{above:m=_,below:v=_}=p||{},M=s.getDatasetMeta(a),E=zx(s,M);i&&l.points.length&&(Ip(n,t),o2(n,{line:l,target:i,above:m,below:v,area:t,scale:u,axis:f,clip:E}),Np(n))}function o2(n,e){const{line:t,target:i,above:s,below:a,area:l,scale:u,clip:f}=e,d=t._loop?"angle":e.axis;n.save();let p=a;a!==s&&(d==="x"?(xv(n,i,l.top),ch(n,{line:t,target:i,color:s,scale:u,property:d,clip:f}),n.restore(),n.save(),xv(n,i,l.bottom)):d==="y"&&(yv(n,i,l.left),ch(n,{line:t,target:i,color:a,scale:u,property:d,clip:f}),n.restore(),n.save(),yv(n,i,l.right),p=s)),ch(n,{line:t,target:i,color:p,scale:u,property:d,clip:f}),n.restore()}function xv(n,e,t){const{segments:i,points:s}=e;let a=!0,l=!1;n.beginPath();for(const u of i){const{start:f,end:d}=u,p=s[f],_=s[Iu(f,d,s)];a?(n.moveTo(p.x,p.y),a=!1):(n.lineTo(p.x,t),n.lineTo(p.x,p.y)),l=!!e.pathSegment(n,u,{move:l}),l?n.closePath():n.lineTo(_.x,t)}n.lineTo(e.first().x,t),n.closePath(),n.clip()}function yv(n,e,t){const{segments:i,points:s}=e;let a=!0,l=!1;n.beginPath();for(const u of i){const{start:f,end:d}=u,p=s[f],_=s[Iu(f,d,s)];a?(n.moveTo(p.x,p.y),a=!1):(n.lineTo(t,p.y),n.lineTo(p.x,p.y)),l=!!e.pathSegment(n,u,{move:l}),l?n.closePath():n.lineTo(t,_.y)}n.lineTo(t,e.first().y),n.closePath(),n.clip()}function ch(n,e){const{line:t,target:i,property:s,color:a,scale:l,clip:u}=e,f=GP(t,i,s);for(const{source:d,target:p,start:_,end:m}of f){const{style:{backgroundColor:v=a}={}}=d,M=i!==!0;n.save(),n.fillStyle=v,a2(n,l,u,M&&cp(s,_,m)),n.beginPath();const E=!!t.pathSegment(n,d);let x;if(M){E?n.closePath():Sv(n,i,m,s);const S=!!i.pathSegment(n,p,{move:E,reverse:!0});x=E&&S,x||Sv(n,i,_,s)}n.closePath(),n.fill(x?"evenodd":"nonzero"),n.restore()}}function a2(n,e,t,i){const s=e.chart.chartArea,{property:a,start:l,end:u}=i||{};if(a==="x"||a==="y"){let f,d,p,_;a==="x"?(f=l,d=s.top,p=u,_=s.bottom):(f=s.left,d=l,p=s.right,_=u),n.beginPath(),t&&(f=Math.max(f,t.left),p=Math.min(p,t.right),d=Math.max(d,t.top),_=Math.min(_,t.bottom)),n.rect(f,d,p-f,_-d),n.clip()}}function Sv(n,e,t,i){const s=e.interpolate(t,i);s&&n.lineTo(s.x,s.y)}var l2={id:"filler",afterDatasetsUpdate(n,e,t){const i=(n.data.datasets||[]).length,s=[];let a,l,u,f;for(l=0;l<i;++l)a=n.getDatasetMeta(l),u=a.dataset,f=null,u&&u.options&&u instanceof rs&&(f={visible:n.isDatasetVisible(l),index:l,fill:jP(u,l,i),chart:n,axis:a.controller.options.indexAxis,scale:a.vScale,line:u}),a.$filler=f,s.push(f);for(l=0;l<i;++l)f=s[l],!(!f||f.fill===!1)&&(f.fill=XP(s,l,t.propagate))},beforeDraw(n,e,t){const i=t.drawTime==="beforeDraw",s=n.getSortedVisibleDatasetMetas(),a=n.chartArea;for(let l=s.length-1;l>=0;--l){const u=s[l].$filler;u&&(u.line.updateControlPoints(a,u.axis),i&&u.fill&&lh(n.ctx,u,a))}},beforeDatasetsDraw(n,e,t){if(t.drawTime!=="beforeDatasetsDraw")return;const i=n.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){const a=i[s].$filler;vv(a)&&lh(n.ctx,a,n.chartArea)}},beforeDatasetDraw(n,e,t){const i=e.meta.$filler;!vv(i)||t.drawTime!=="beforeDatasetDraw"||lh(n.ctx,i,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Ya={average(n){if(!n.length)return!1;let e,t,i=new Set,s=0,a=0;for(e=0,t=n.length;e<t;++e){const u=n[e].element;if(u&&u.hasValue()){const f=u.tooltipPosition();i.add(f.x),s+=f.y,++a}}return a===0||i.size===0?!1:{x:[...i].reduce((u,f)=>u+f)/i.size,y:s/a}},nearest(n,e){if(!n.length)return!1;let t=e.x,i=e.y,s=Number.POSITIVE_INFINITY,a,l,u;for(a=0,l=n.length;a<l;++a){const f=n[a].element;if(f&&f.hasValue()){const d=f.getCenterPoint(),p=ip(e,d);p<s&&(s=p,u=f)}}if(u){const f=u.tooltipPosition();t=f.x,i=f.y}return{x:t,y:i}}};function Hi(n,e){return e&&(yn(e)?Array.prototype.push.apply(n,e):n.push(e)),n}function yr(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function c2(n,e){const{element:t,datasetIndex:i,index:s}=e,a=n.getDatasetMeta(i).controller,{label:l,value:u}=a.getLabelAndValue(s);return{chart:n,label:l,parsed:a.getParsed(s),raw:n.data.datasets[i].data[s],formattedValue:u,dataset:a.getDataset(),dataIndex:s,datasetIndex:i,element:t}}function Mv(n,e){const t=n.chart.ctx,{body:i,footer:s,title:a}=n,{boxWidth:l,boxHeight:u}=e,f=$i(e.bodyFont),d=$i(e.titleFont),p=$i(e.footerFont),_=a.length,m=s.length,v=i.length,M=cs(e.padding);let E=M.height,x=0,S=i.reduce((R,I)=>R+I.before.length+I.lines.length+I.after.length,0);if(S+=n.beforeBody.length+n.afterBody.length,_&&(E+=_*d.lineHeight+(_-1)*e.titleSpacing+e.titleMarginBottom),S){const R=e.displayColors?Math.max(u,f.lineHeight):f.lineHeight;E+=v*R+(S-v)*f.lineHeight+(S-1)*e.bodySpacing}m&&(E+=e.footerMarginTop+m*p.lineHeight+(m-1)*e.footerSpacing);let A=0;const D=function(R){x=Math.max(x,t.measureText(R).width+A)};return t.save(),t.font=d.string,Nt(n.title,D),t.font=f.string,Nt(n.beforeBody.concat(n.afterBody),D),A=e.displayColors?l+2+e.boxPadding:0,Nt(i,R=>{Nt(R.before,D),Nt(R.lines,D),Nt(R.after,D)}),A=0,t.font=p.string,Nt(n.footer,D),t.restore(),x+=M.width,{width:x,height:E}}function u2(n,e){const{y:t,height:i}=e;return t<i/2?"top":t>n.height-i/2?"bottom":"center"}function f2(n,e,t,i){const{x:s,width:a}=i,l=t.caretSize+t.caretPadding;if(n==="left"&&s+a+l>e.width||n==="right"&&s-a-l<0)return!0}function d2(n,e,t,i){const{x:s,width:a}=t,{width:l,chartArea:{left:u,right:f}}=n;let d="center";return i==="center"?d=s<=(u+f)/2?"left":"right":s<=a/2?d="left":s>=l-a/2&&(d="right"),f2(d,n,e,t)&&(d="center"),d}function Ev(n,e,t){const i=t.yAlign||e.yAlign||u2(n,t);return{xAlign:t.xAlign||e.xAlign||d2(n,e,t,i),yAlign:i}}function h2(n,e){let{x:t,width:i}=n;return e==="right"?t-=i:e==="center"&&(t-=i/2),t}function p2(n,e,t){let{y:i,height:s}=n;return e==="top"?i+=t:e==="bottom"?i-=s+t:i-=s/2,i}function bv(n,e,t,i){const{caretSize:s,caretPadding:a,cornerRadius:l}=n,{xAlign:u,yAlign:f}=t,d=s+a,{topLeft:p,topRight:_,bottomLeft:m,bottomRight:v}=ru(l);let M=h2(e,u);const E=p2(e,f,d);return f==="center"?u==="left"?M+=d:u==="right"&&(M-=d):u==="left"?M-=Math.max(p,m)+s:u==="right"&&(M+=Math.max(_,v)+s),{x:gi(M,0,i.width-e.width),y:gi(E,0,i.height-e.height)}}function Kc(n,e,t){const i=cs(t.padding);return e==="center"?n.x+n.width/2:e==="right"?n.x+n.width-i.right:n.x+i.left}function wv(n){return Hi([],yr(n))}function m2(n,e,t){return Ys(n,{tooltip:e,tooltipItems:t,type:"tooltip"})}function Tv(n,e){const t=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return t?n.override(t):n}const ny={beforeTitle:vr,title(n){if(n.length>0){const e=n[0],t=e.chart.data.labels,i=t?t.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return t[e.dataIndex]}return""},afterTitle:vr,beforeBody:vr,beforeLabel:vr,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let e=n.dataset.label||"";e&&(e+=": ");const t=n.formattedValue;return Wt(t)||(e+=t),e},labelColor(n){const t=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const t=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:vr,afterBody:vr,beforeFooter:vr,footer:vr,afterFooter:vr};function qn(n,e,t,i){const s=n[e].call(t,i);return typeof s>"u"?ny[e].call(t,i):s}class up extends Xs{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const t=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&t.options.animation&&i.animations,a=new Vx(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=m2(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,t){const{callbacks:i}=t,s=qn(i,"beforeTitle",this,e),a=qn(i,"title",this,e),l=qn(i,"afterTitle",this,e);let u=[];return u=Hi(u,yr(s)),u=Hi(u,yr(a)),u=Hi(u,yr(l)),u}getBeforeBody(e,t){return wv(qn(t.callbacks,"beforeBody",this,e))}getBody(e,t){const{callbacks:i}=t,s=[];return Nt(e,a=>{const l={before:[],lines:[],after:[]},u=Tv(i,a);Hi(l.before,yr(qn(u,"beforeLabel",this,a))),Hi(l.lines,qn(u,"label",this,a)),Hi(l.after,yr(qn(u,"afterLabel",this,a))),s.push(l)}),s}getAfterBody(e,t){return wv(qn(t.callbacks,"afterBody",this,e))}getFooter(e,t){const{callbacks:i}=t,s=qn(i,"beforeFooter",this,e),a=qn(i,"footer",this,e),l=qn(i,"afterFooter",this,e);let u=[];return u=Hi(u,yr(s)),u=Hi(u,yr(a)),u=Hi(u,yr(l)),u}_createItems(e){const t=this._active,i=this.chart.data,s=[],a=[],l=[];let u=[],f,d;for(f=0,d=t.length;f<d;++f)u.push(c2(this.chart,t[f]));return e.filter&&(u=u.filter((p,_,m)=>e.filter(p,_,m,i))),e.itemSort&&(u=u.sort((p,_)=>e.itemSort(p,_,i))),Nt(u,p=>{const _=Tv(e.callbacks,p);s.push(qn(_,"labelColor",this,p)),a.push(qn(_,"labelPointStyle",this,p)),l.push(qn(_,"labelTextColor",this,p))}),this.labelColors=s,this.labelPointStyles=a,this.labelTextColors=l,this.dataPoints=u,u}update(e,t){const i=this.options.setContext(this.getContext()),s=this._active;let a,l=[];if(!s.length)this.opacity!==0&&(a={opacity:0});else{const u=Ya[i.position].call(this,s,this._eventPosition);l=this._createItems(i),this.title=this.getTitle(l,i),this.beforeBody=this.getBeforeBody(l,i),this.body=this.getBody(l,i),this.afterBody=this.getAfterBody(l,i),this.footer=this.getFooter(l,i);const f=this._size=Mv(this,i),d=Object.assign({},u,f),p=Ev(this.chart,i,d),_=bv(i,d,p,this.chart);this.xAlign=p.xAlign,this.yAlign=p.yAlign,a={opacity:1,x:_.x,y:_.y,width:f.width,height:f.height,caretX:u.x,caretY:u.y}}this._tooltipItems=l,this.$context=void 0,a&&this._resolveAnimations().update(this,a),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,i,s){const a=this.getCaretPosition(e,i,s);t.lineTo(a.x1,a.y1),t.lineTo(a.x2,a.y2),t.lineTo(a.x3,a.y3)}getCaretPosition(e,t,i){const{xAlign:s,yAlign:a}=this,{caretSize:l,cornerRadius:u}=i,{topLeft:f,topRight:d,bottomLeft:p,bottomRight:_}=ru(u),{x:m,y:v}=e,{width:M,height:E}=t;let x,S,A,D,R,I;return a==="center"?(R=v+E/2,s==="left"?(x=m,S=x-l,D=R+l,I=R-l):(x=m+M,S=x+l,D=R-l,I=R+l),A=x):(s==="left"?S=m+Math.max(f,p)+l:s==="right"?S=m+M-Math.max(d,_)-l:S=this.caretX,a==="top"?(D=v,R=D-l,x=S-l,A=S+l):(D=v+E,R=D+l,x=S+l,A=S-l),I=D),{x1:x,x2:S,x3:A,y1:D,y2:R,y3:I}}drawTitle(e,t,i){const s=this.title,a=s.length;let l,u,f;if(a){const d=th(i.rtl,this.x,this.width);for(e.x=Kc(this,i.titleAlign,i),t.textAlign=d.textAlign(i.titleAlign),t.textBaseline="middle",l=$i(i.titleFont),u=i.titleSpacing,t.fillStyle=i.titleColor,t.font=l.string,f=0;f<a;++f)t.fillText(s[f],d.x(e.x),e.y+l.lineHeight/2),e.y+=l.lineHeight+u,f+1===a&&(e.y+=i.titleMarginBottom-u)}}_drawColorBox(e,t,i,s,a){const l=this.labelColors[i],u=this.labelPointStyles[i],{boxHeight:f,boxWidth:d}=a,p=$i(a.bodyFont),_=Kc(this,"left",a),m=s.x(_),v=f<p.lineHeight?(p.lineHeight-f)/2:0,M=t.y+v;if(a.usePointStyle){const E={radius:Math.min(d,f)/2,pointStyle:u.pointStyle,rotation:u.rotation,borderWidth:1},x=s.leftForLtr(m,d)+d/2,S=M+f/2;e.strokeStyle=a.multiKeyBackground,e.fillStyle=a.multiKeyBackground,sp(e,E,x,S),e.strokeStyle=l.borderColor,e.fillStyle=l.backgroundColor,sp(e,E,x,S)}else{e.lineWidth=St(l.borderWidth)?Math.max(...Object.values(l.borderWidth)):l.borderWidth||1,e.strokeStyle=l.borderColor,e.setLineDash(l.borderDash||[]),e.lineDashOffset=l.borderDashOffset||0;const E=s.leftForLtr(m,d),x=s.leftForLtr(s.xPlus(m,1),d-2),S=ru(l.borderRadius);Object.values(S).some(A=>A!==0)?(e.beginPath(),e.fillStyle=a.multiKeyBackground,O0(e,{x:E,y:M,w:d,h:f,radius:S}),e.fill(),e.stroke(),e.fillStyle=l.backgroundColor,e.beginPath(),O0(e,{x,y:M+1,w:d-2,h:f-2,radius:S}),e.fill()):(e.fillStyle=a.multiKeyBackground,e.fillRect(E,M,d,f),e.strokeRect(E,M,d,f),e.fillStyle=l.backgroundColor,e.fillRect(x,M+1,d-2,f-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,t,i){const{body:s}=this,{bodySpacing:a,bodyAlign:l,displayColors:u,boxHeight:f,boxWidth:d,boxPadding:p}=i,_=$i(i.bodyFont);let m=_.lineHeight,v=0;const M=th(i.rtl,this.x,this.width),E=function(w){t.fillText(w,M.x(e.x+v),e.y+m/2),e.y+=m+a},x=M.textAlign(l);let S,A,D,R,I,L,F;for(t.textAlign=l,t.textBaseline="middle",t.font=_.string,e.x=Kc(this,x,i),t.fillStyle=i.bodyColor,Nt(this.beforeBody,E),v=u&&x!=="right"?l==="center"?d/2+p:d+2+p:0,R=0,L=s.length;R<L;++R){for(S=s[R],A=this.labelTextColors[R],t.fillStyle=A,Nt(S.before,E),D=S.lines,u&&D.length&&(this._drawColorBox(t,e,R,M,i),m=Math.max(_.lineHeight,f)),I=0,F=D.length;I<F;++I)E(D[I]),m=_.lineHeight;Nt(S.after,E)}v=0,m=_.lineHeight,Nt(this.afterBody,E),e.y-=a}drawFooter(e,t,i){const s=this.footer,a=s.length;let l,u;if(a){const f=th(i.rtl,this.x,this.width);for(e.x=Kc(this,i.footerAlign,i),e.y+=i.footerMarginTop,t.textAlign=f.textAlign(i.footerAlign),t.textBaseline="middle",l=$i(i.footerFont),t.fillStyle=i.footerColor,t.font=l.string,u=0;u<a;++u)t.fillText(s[u],f.x(e.x),e.y+l.lineHeight/2),e.y+=l.lineHeight+i.footerSpacing}}drawBackground(e,t,i,s){const{xAlign:a,yAlign:l}=this,{x:u,y:f}=e,{width:d,height:p}=i,{topLeft:_,topRight:m,bottomLeft:v,bottomRight:M}=ru(s.cornerRadius);t.fillStyle=s.backgroundColor,t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.beginPath(),t.moveTo(u+_,f),l==="top"&&this.drawCaret(e,t,i,s),t.lineTo(u+d-m,f),t.quadraticCurveTo(u+d,f,u+d,f+m),l==="center"&&a==="right"&&this.drawCaret(e,t,i,s),t.lineTo(u+d,f+p-M),t.quadraticCurveTo(u+d,f+p,u+d-M,f+p),l==="bottom"&&this.drawCaret(e,t,i,s),t.lineTo(u+v,f+p),t.quadraticCurveTo(u,f+p,u,f+p-v),l==="center"&&a==="left"&&this.drawCaret(e,t,i,s),t.lineTo(u,f+_),t.quadraticCurveTo(u,f,u+_,f),t.closePath(),t.fill(),s.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){const t=this.chart,i=this.$animations,s=i&&i.x,a=i&&i.y;if(s||a){const l=Ya[e.position].call(this,this._active,this._eventPosition);if(!l)return;const u=this._size=Mv(this,e),f=Object.assign({},l,this._size),d=Ev(t,e,f),p=bv(e,f,d,t);(s._to!==p.x||a._to!==p.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=u.width,this.height=u.height,this.caretX=l.x,this.caretY=l.y,this._resolveAnimations().update(this,p))}}_willRender(){return!!this.opacity}draw(e){const t=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(t);const s={width:this.width,height:this.height},a={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const l=cs(t.padding),u=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&u&&(e.save(),e.globalAlpha=i,this.drawBackground(a,e,s,t),nR(e,t.textDirection),a.y+=l.top,this.drawTitle(a,e,t),this.drawBody(a,e,t),this.drawFooter(a,e,t),iR(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){const i=this._active,s=e.map(({datasetIndex:u,index:f})=>{const d=this.chart.getDatasetMeta(u);if(!d)throw new Error("Cannot find a dataset at index "+u);return{datasetIndex:u,element:d.data[f],index:f}}),a=!mu(i,s),l=this._positionChanged(s,t);(a||l)&&(this._active=s,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,i=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,a=this._active||[],l=this._getActiveElements(e,a,t,i),u=this._positionChanged(l,e),f=t||!mu(l,a)||u;return f&&(this._active=l,(s.enabled||s.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),f}_getActiveElements(e,t,i,s){const a=this.options;if(e.type==="mouseout")return[];if(!s)return t.filter(u=>this.chart.data.datasets[u.datasetIndex]&&this.chart.getDatasetMeta(u.datasetIndex).controller.getParsed(u.index)!==void 0);const l=this.chart.getElementsAtEventForMode(e,a.mode,a,i);return a.reverse&&l.reverse(),l}_positionChanged(e,t){const{caretX:i,caretY:s,options:a}=this,l=Ya[a.position].call(this,e,t);return l!==!1&&(i!==l.x||s!==l.y)}}dt(up,"positioners",Ya);var g2={id:"tooltip",_element:up,positioners:Ya,afterInit(n,e,t){t&&(n.tooltip=new up({chart:n,options:t}))},beforeUpdate(n,e,t){n.tooltip&&n.tooltip.initialize(t)},reset(n,e,t){n.tooltip&&n.tooltip.initialize(t)},afterDraw(n){const e=n.tooltip;if(e&&e._willRender()){const t={tooltip:e};if(n.notifyPlugins("beforeTooltipDraw",{...t,cancelable:!0})===!1)return;e.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",t)}},afterEvent(n,e){if(n.tooltip){const t=e.replay;n.tooltip.handleEvent(e.event,t,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,e)=>e.bodyFont.size,boxWidth:(n,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:ny},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const _2=(n,e,t,i)=>(typeof e=="string"?(t=n.push(e)-1,i.unshift({index:t,label:e})):isNaN(e)&&(t=null),t);function v2(n,e,t,i){const s=n.indexOf(e);if(s===-1)return _2(n,e,t,i);const a=n.lastIndexOf(e);return s!==a?t:s}const x2=(n,e)=>n===null?null:gi(Math.round(n),0,e);function Av(n){const e=this.getLabels();return n>=0&&n<e.length?e[n]:n}class fp extends jo{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const t=this._addedLabels;if(t.length){const i=this.getLabels();for(const{index:s,label:a}of t)i[s]===a&&i.splice(s,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(Wt(e))return null;const i=this.getLabels();return t=isFinite(t)&&i[t]===e?t:v2(i,e,Ut(t,e),this._addedLabels),x2(t,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),t||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const e=this.min,t=this.max,i=this.options.offset,s=[];let a=this.getLabels();a=e===0&&t===a.length-1?a:a.slice(e,t+1),this._valueRange=Math.max(a.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let l=e;l<=t;l++)s.push({value:l});return s}getLabelForValue(e){return Av.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}dt(fp,"id","category"),dt(fp,"defaults",{ticks:{callback:Av}});function y2(n,e){const t=[],{bounds:s,step:a,min:l,max:u,precision:f,count:d,maxTicks:p,maxDigits:_,includeBounds:m}=n,v=a||1,M=p-1,{min:E,max:x}=e,S=!Wt(l),A=!Wt(u),D=!Wt(d),R=(x-E)/(_+1);let I=T0((x-E)/M/v)*v,L,F,w,N;if(I<1e-14&&!S&&!A)return[{value:E},{value:x}];N=Math.ceil(x/I)-Math.floor(E/I),N>M&&(I=T0(N*I/M/v)*v),Wt(f)||(L=Math.pow(10,f),I=Math.ceil(I*L)/L),s==="ticks"?(F=Math.floor(E/I)*I,w=Math.ceil(x/I)*I):(F=E,w=x),S&&A&&a&&YA((u-l)/a,I/1e3)?(N=Math.round(Math.min((u-l)/I,p)),I=(u-l)/N,F=l,w=u):D?(F=S?l:F,w=A?u:w,N=d-1,I=(w-F)/N):(N=(w-F)/I,qa(N,Math.round(N),I/1e3)?N=Math.round(N):N=Math.ceil(N));const z=Math.max(A0(I),A0(F));L=Math.pow(10,Wt(f)?z:f),F=Math.round(F*L)/L,w=Math.round(w*L)/L;let O=0;for(S&&(m&&F!==l?(t.push({value:l}),F<l&&O++,qa(Math.round((F+O*I)*L)/L,l,Cv(l,R,n))&&O++):F<l&&O++);O<N;++O){const j=Math.round((F+O*I)*L)/L;if(A&&j>u)break;t.push({value:j})}return A&&m&&w!==u?t.length&&qa(t[t.length-1].value,u,Cv(u,R,n))?t[t.length-1].value=u:t.push({value:u}):(!A||w===u)&&t.push({value:w}),t}function Cv(n,e,{horizontal:t,minRotation:i}){const s=Bs(i),a=(t?Math.sin(s):Math.cos(s))||.001,l=.75*e*(""+n).length;return Math.min(e/a,l)}class S2 extends jo{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return Wt(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:t,maxDefined:i}=this.getUserBounds();let{min:s,max:a}=this;const l=f=>s=t?s:f,u=f=>a=i?a:f;if(e){const f=Vo(s),d=Vo(a);f<0&&d<0?u(0):f>0&&d>0&&l(0)}if(s===a){let f=a===0?1:Math.abs(a*.05);u(a+f),e||l(s-f)}this.min=s,this.max=a}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:t,stepSize:i}=e,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),t=t||11),t&&(s=Math.min(t,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,t=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},a=this._range||this,l=y2(s,a);return e.bounds==="ticks"&&$A(l,this,"value"),e.reverse?(l.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),l}configure(){const e=this.ticks;let t=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const s=(i-t)/Math.max(e.length-1,1)/2;t-=s,i+=s}this._startValue=t,this._endValue=i,this._valueRange=i-t}getLabelForValue(e){return Rx(e,this.chart.options.locale,this.options.ticks.format)}}class dp extends S2{determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=Nn(e)?e:0,this.max=Nn(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),t=e?this.width:this.height,i=Bs(this.options.ticks.minRotation),s=(e?Math.sin(i):Math.cos(i))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,a.lineHeight/s))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}dt(dp,"id","linear"),dt(dp,"defaults",{ticks:{callback:Px.formatters.numeric}});const Nu={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Kn=Object.keys(Nu);function Rv(n,e){return n-e}function Pv(n,e){if(Wt(e))return null;const t=n._adapter,{parser:i,round:s,isoWeekday:a}=n._parseOpts;let l=e;return typeof i=="function"&&(l=i(l)),Nn(l)||(l=typeof i=="string"?t.parse(l,i):t.parse(l)),l===null?null:(s&&(l=s==="week"&&(rl(a)||a===!0)?t.startOf(l,"isoWeek",a):t.startOf(l,s)),+l)}function Dv(n,e,t,i){const s=Kn.length;for(let a=Kn.indexOf(n);a<s-1;++a){const l=Nu[Kn[a]],u=l.steps?l.steps:Number.MAX_SAFE_INTEGER;if(l.common&&Math.ceil((t-e)/(u*l.size))<=i)return Kn[a]}return Kn[s-1]}function M2(n,e,t,i,s){for(let a=Kn.length-1;a>=Kn.indexOf(t);a--){const l=Kn[a];if(Nu[l].common&&n._adapter.diff(s,i,l)>=e-1)return l}return Kn[t?Kn.indexOf(t):0]}function E2(n){for(let e=Kn.indexOf(n)+1,t=Kn.length;e<t;++e)if(Nu[Kn[e]].common)return Kn[e]}function Lv(n,e,t){if(!t)n[e]=!0;else if(t.length){const{lo:i,hi:s}=Dp(t,e),a=t[i]>=e?t[i]:t[s];n[a]=!0}}function b2(n,e,t,i){const s=n._adapter,a=+s.startOf(e[0].value,i),l=e[e.length-1].value;let u,f;for(u=a;u<=l;u=+s.add(u,1,i))f=t[u],f>=0&&(e[f].major=!0);return e}function Iv(n,e,t){const i=[],s={},a=e.length;let l,u;for(l=0;l<a;++l)u=e[l],s[u]=l,i.push({value:u,major:!1});return a===0||!t?i:b2(n,i,s,t)}class Mu extends jo{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){const i=e.time||(e.time={}),s=this._adapter=new wR._date(e.adapters.date);s.init(t),$a(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:Pv(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,t=this._adapter,i=e.time.unit||"day";let{min:s,max:a,minDefined:l,maxDefined:u}=this.getUserBounds();function f(d){!l&&!isNaN(d.min)&&(s=Math.min(s,d.min)),!u&&!isNaN(d.max)&&(a=Math.max(a,d.max))}(!l||!u)&&(f(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&f(this.getMinMax(!1))),s=Nn(s)&&!isNaN(s)?s:+t.startOf(Date.now(),i),a=Nn(a)&&!isNaN(a)?a:+t.endOf(Date.now(),i)+1,this.min=Math.min(s,a-1),this.max=Math.max(s+1,a)}_getLabelBounds(){const e=this.getLabelTimestamps();let t=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(t=e[0],i=e[e.length-1]),{min:t,max:i}}buildTicks(){const e=this.options,t=e.time,i=e.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const a=this.min,l=this.max,u=eC(s,a,l);return this._unit=t.unit||(i.autoSkip?Dv(t.minUnit,this.min,this.max,this._getLabelCapacity(a)):M2(this,u.length,t.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:E2(this._unit),this.initOffsets(s),e.reverse&&u.reverse(),Iv(this,u,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,i=0,s,a;this.options.offset&&e.length&&(s=this.getDecimalForValue(e[0]),e.length===1?t=1-s:t=(this.getDecimalForValue(e[1])-s)/2,a=this.getDecimalForValue(e[e.length-1]),e.length===1?i=a:i=(a-this.getDecimalForValue(e[e.length-2]))/2);const l=e.length<3?.5:.25;t=gi(t,0,l),i=gi(i,0,l),this._offsets={start:t,end:i,factor:1/(t+1+i)}}_generate(){const e=this._adapter,t=this.min,i=this.max,s=this.options,a=s.time,l=a.unit||Dv(a.minUnit,t,i,this._getLabelCapacity(t)),u=Ut(s.ticks.stepSize,1),f=l==="week"?a.isoWeekday:!1,d=rl(f)||f===!0,p={};let _=t,m,v;if(d&&(_=+e.startOf(_,"isoWeek",f)),_=+e.startOf(_,d?"day":l),e.diff(i,t,l)>1e5*u)throw new Error(t+" and "+i+" are too far apart with stepSize of "+u+" "+l);const M=s.ticks.source==="data"&&this.getDataTimestamps();for(m=_,v=0;m<i;m=+e.add(m,u,l),v++)Lv(p,m,M);return(m===i||s.bounds==="ticks"||v===1)&&Lv(p,m,M),Object.keys(p).sort(Rv).map(E=>+E)}getLabelForValue(e){const t=this._adapter,i=this.options.time;return i.tooltipFormat?t.format(e,i.tooltipFormat):t.format(e,i.displayFormats.datetime)}format(e,t){const s=this.options.time.displayFormats,a=this._unit,l=t||s[a];return this._adapter.format(e,l)}_tickFormatFunction(e,t,i,s){const a=this.options,l=a.ticks.callback;if(l)return sn(l,[e,t,i],this);const u=a.time.displayFormats,f=this._unit,d=this._majorUnit,p=f&&u[f],_=d&&u[d],m=i[t],v=d&&_&&m&&m.major;return this._adapter.format(e,s||(v?_:p))}generateTickLabels(e){let t,i,s;for(t=0,i=e.length;t<i;++t)s=e[t],s.label=this._tickFormatFunction(s.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const t=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+i)*t.factor)}getValueForPixel(e){const t=this._offsets,i=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const t=this.options.ticks,i=this.ctx.measureText(e).width,s=Bs(this.isHorizontal()?t.maxRotation:t.minRotation),a=Math.cos(s),l=Math.sin(s),u=this._resolveTickFontOptions(0).size;return{w:i*a+u*l,h:i*l+u*a}}_getLabelCapacity(e){const t=this.options.time,i=t.displayFormats,s=i[t.unit]||i.millisecond,a=this._tickFormatFunction(e,0,Iv(this,[e],this._majorUnit),s),l=this._getLabelSize(a),u=Math.floor(this.isHorizontal()?this.width/l.w:this.height/l.h)-1;return u>0?u:1}getDataTimestamps(){let e=this._cache.data||[],t,i;if(e.length)return e;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(t=0,i=s.length;t<i;++t)e=e.concat(s[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let t,i;if(e.length)return e;const s=this.getLabels();for(t=0,i=s.length;t<i;++t)e.push(Pv(this,s[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return nC(e.sort(Rv))}}dt(Mu,"id","time"),dt(Mu,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Zc(n,e,t){let i=0,s=n.length-1,a,l,u,f;t?(e>=n[i].pos&&e<=n[s].pos&&({lo:i,hi:s}=zs(n,"pos",e)),{pos:a,time:u}=n[i],{pos:l,time:f}=n[s]):(e>=n[i].time&&e<=n[s].time&&({lo:i,hi:s}=zs(n,"time",e)),{time:a,pos:u}=n[i],{time:l,pos:f}=n[s]);const d=l-a;return d?u+(f-u)*(e-a)/d:u}class Nv extends Mu{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=Zc(t,this.min),this._tableRange=Zc(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:t,max:i}=this,s=[],a=[];let l,u,f,d,p;for(l=0,u=e.length;l<u;++l)d=e[l],d>=t&&d<=i&&s.push(d);if(s.length<2)return[{time:t,pos:0},{time:i,pos:1}];for(l=0,u=s.length;l<u;++l)p=s[l+1],f=s[l-1],d=s[l],Math.round((p+f)/2)!==d&&a.push({time:d,pos:l/(u-1)});return a}_generate(){const e=this.min,t=this.max;let i=super.getDataTimestamps();return(!i.includes(e)||!i.length)&&i.splice(0,0,e),(!i.includes(t)||i.length===1)&&i.push(t),i.sort((s,a)=>s-a)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const t=this.getDataTimestamps(),i=this.getLabelTimestamps();return t.length&&i.length?e=this.normalize(t.concat(i)):e=t.length?t:i,e=this._cache.all=e,e}getDecimalForValue(e){return(Zc(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const t=this._offsets,i=this.getDecimalForPixel(e)/t.factor-t.end;return Zc(this._table,i*this._tableRange+this._minPos,!0)}}dt(Nv,"id","timeseries"),dt(Nv,"defaults",Mu.defaults);const iy="label";function Fv(n,e){typeof n=="function"?n(e):n&&(n.current=e)}function w2(n,e){const t=n.options;t&&e&&Object.assign(t,e)}function ry(n,e){n.labels=e}function sy(n,e,t=iy){const i=[];n.datasets=e.map(s=>{const a=n.datasets.find(l=>l[t]===s[t]);return!a||!s.data||i.includes(a)?{...s}:(i.push(a),Object.assign(a,s),a)})}function T2(n,e=iy){const t={labels:[],datasets:[]};return ry(t,n.labels),sy(t,n.datasets,e),t}function A2(n,e){const{height:t=150,width:i=300,redraw:s=!1,datasetIdKey:a,type:l,data:u,options:f,plugins:d=[],fallbackContent:p,updateMode:_,...m}=n,v=Gt.useRef(null),M=Gt.useRef(null),E=()=>{v.current&&(M.current=new Lu(v.current,{type:l,data:T2(u,a),options:f&&{...f},plugins:d}),Fv(e,M.current))},x=()=>{Fv(e,null),M.current&&(M.current.destroy(),M.current=null)};return Gt.useEffect(()=>{!s&&M.current&&f&&w2(M.current,f)},[s,f]),Gt.useEffect(()=>{!s&&M.current&&ry(M.current.config.data,u.labels)},[s,u.labels]),Gt.useEffect(()=>{!s&&M.current&&u.datasets&&sy(M.current.config.data,u.datasets,a)},[s,u.datasets]),Gt.useEffect(()=>{M.current&&(s?(x(),setTimeout(E)):M.current.update(_))},[s,f,u.labels,u.datasets,_]),Gt.useEffect(()=>{M.current&&(x(),setTimeout(E))},[l]),Gt.useEffect(()=>(E(),()=>x()),[]),qe.jsx("canvas",{ref:v,role:"img",height:t,width:i,...m,children:p})}const C2=Gt.forwardRef(A2);function R2(n,e){return Lu.register(e),Gt.forwardRef((t,i)=>qe.jsx(C2,{...t,ref:i,type:n}))}const P2=R2("line",su);Lu.register(fp,dp,lu,rs,g2,l2);const Vp="https://whg-wetterstation.de";function D2(){const[n,e]=Gt.useState({}),[t,i]=Gt.useState(!0);return Gt.useEffect(()=>{fetch(`${Vp}/names`).then(s=>s.json()).then(s=>e(s)).catch(()=>e({0:"Schulgarten"})).finally(()=>i(!1))},[]),{stations:n,loading:t}}function L2(n){const[e,t]=Gt.useState([]),[i,s]=Gt.useState(!1);return Gt.useEffect(()=>{n!==null&&(s(!0),fetch(`${Vp}/api/weather/${n}`).then(a=>a.json()).then(a=>t(a.data??[])).catch(()=>t([])).finally(()=>s(!1)))},[n]),{data:e,loading:i}}function I2(n){const[e,t]=Gt.useState(null);return Gt.useEffect(()=>{if(n===null)return;const i=()=>{fetch(`${Vp}/api/weather/current/${n}`).then(a=>a.json()).then(a=>t(a)).catch(()=>{})};i();const s=setInterval(i,3e4);return()=>clearInterval(s)},[n]),e}function Eu(n){return n<640?"mobile":n<1024?"tablet":"desktop"}function N2(){const[n,e]=Gt.useState(()=>Eu(typeof window<"u"?window.innerWidth:1024));return Gt.useEffect(()=>{const t=()=>e(Eu(window.innerWidth));return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),n}const Uv={mobile:[0,3.6,0],tablet:[2,1,0],desktop:[3,1.2,0]};function F2(){const n=Gt.useRef(null),e=Gt.useRef({nx:0,ny:0}),t=Gt.useRef(Eu(typeof window<"u"?window.innerWidth:1024));return Gt.useEffect(()=>{const i=n.current;if(!i)return;const s=new hA({antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(window.innerWidth,window.innerHeight),s.setClearColor(857376,1),i.appendChild(s.domElement);const a=5,l=()=>window.innerWidth/window.innerHeight,u=()=>{const z=l();return new Au(-a*z,a*z,a,-a,.1,100)},f=new XM,d=u();d.position.set(0,0,10);const p=new G_({color:1319994,roughness:1,metalness:0}),_=new Li(new fl(200,200),p);_.position.z=-3,f.add(_),f.add(new mE(1715536,1));const m=new pE(6324416,.5);m.position.set(-4,2,6),f.add(m);const v=new dE(16768324,80,60,Math.PI/5,.6,1.5);v.position.set(0,0,8),v.target.position.set(0,0,-3),f.add(v),f.add(v.target);const M=new uE(16771232,659488,.8);f.add(M);const E=new G_({color:15922687,roughness:.55,metalness:0}),x=new Ga;[[0,0,0,.65],[-.65,-.07,.1,.53],[.65,-.03,.06,.55],[-.26,.33,0,.44],[.33,.3,.03,.42],[-.97,-.2,0,.36],[1.01,-.2,0,.34],[0,-.33,.16,.4]].forEach(([z,O,j,ie])=>{const ce=new Li(new Tp(ie,28,28),E);ce.position.set(z,O,j),x.add(ce)});const[A,D,R]=Uv[t.current];x.position.set(A,D,R),f.add(x);const I=z=>{e.current.nx=z.clientX/window.innerWidth*2-1,e.current.ny=-(z.clientY/window.innerHeight*2-1)},L=z=>{const O=z.touches[0];O&&(e.current.nx=O.clientX/window.innerWidth*2-1,e.current.ny=-(O.clientY/window.innerHeight*2-1))};window.addEventListener("mousemove",I),window.addEventListener("touchmove",L,{passive:!0});const F=()=>{const z=window.innerWidth,O=window.innerHeight,j=z/O;d.left=-a*j,d.right=a*j,d.top=a,d.bottom=-a,d.updateProjectionMatrix(),s.setSize(z,O);const ie=Eu(z);t.current=ie;const[ce,B,q]=Uv[ie];x.position.set(ce,B,q)};window.addEventListener("resize",F);let w;const N=()=>{w=requestAnimationFrame(N);const{nx:z,ny:O}=e.current,j=z*a*l(),ie=O*a;v.position.set(j,ie,8),v.target.position.set(j,ie,-3),v.target.updateMatrixWorld(),s.render(f,d)};return N(),()=>{cancelAnimationFrame(w),window.removeEventListener("mousemove",I),window.removeEventListener("touchmove",L),window.removeEventListener("resize",F),s.dispose(),i.removeChild(s.domElement)}},[]),qe.jsx("div",{ref:n,className:"fixed inset-0 z-0"})}function uh({title:n,current:e,unit:t,series:i,color:s}){const a={labels:i.map(u=>u.label),datasets:[{data:i.map(u=>u.value.toFixed(2)),borderColor:s,borderWidth:1.5,backgroundColor:`${s}28`,fill:!0,tension:.4,pointRadius:1,pointHoverRadius:20}]},l={responsive:!0,maintainAspectRatio:!1,animation:{duration:0},scales:{x:{display:!1},y:{display:!1}},plugins:{legend:{display:!1},tooltip:{backgroundColor:"#0f172a",titleColor:"#94a3b8",bodyColor:"#f3f4f6",callbacks:{label:u=>`${u.parsed.y}${t}`}}}};return qe.jsxs("div",{className:"bg-[#1a2640]/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 flex flex-col gap-2 flex-1 min-w-0 border border-white/5",children:[qe.jsx("h3",{className:"text-white/90 font-semibold text-sm tracking-wide",children:n}),qe.jsxs("p",{className:"text-white/40 text-xs",children:["Aktuell:"," ",qe.jsxs("span",{className:"text-white/80 font-semibold",children:[e,t]})]}),qe.jsx("div",{className:"h-20 sm:h-24 w-full mt-1",children:qe.jsx(P2,{data:a,options:l})})]})}function U2(){const n=N2(),{stations:e,loading:t}=D2(),i=Object.keys(e),[s,a]=Gt.useState(null);Gt.useEffect(()=>{i.length>0&&s===null&&a(i[0])},[i,s]);const{data:l}=L2(s),u=I2(s),f=l.map(v=>({label:v.received_at.slice(11,16),value:v.temperature})),d=l.map(v=>({label:v.received_at.slice(11,16),value:v.humidity})),p=l.map(v=>({label:v.received_at.slice(11,16),value:v.pressure})),_=u??(l.length?{temperature:l[l.length-1].temperature,humidity:l[l.length-1].humidity,pressure:l[l.length-1].pressure}:null),m=(()=>{if(!u)return"—";if(u.received_at){const v=new Date(u.received_at.replace(" ","T"));return`${v.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}, ${v.toLocaleTimeString("de-DE")}`}if(u.unix_timestamp){const v=new Date(u.unix_timestamp*1e3);return`${v.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}, ${v.toLocaleTimeString("de-DE")}`}return"—"})();return qe.jsxs(qe.Fragment,{children:[qe.jsx(F2,{}),qe.jsxs("div",{className:"relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 gap-6 sm:gap-8",style:{fontFamily:"'Inter', sans-serif"},children:[qe.jsxs("select",{value:s??"",onChange:v=>a(v.target.value),disabled:t,className:"bg-white/10 text-white/70 text-sm px-5 py-1.5 rounded-full border border-white/15 outline-none cursor-pointer backdrop-blur-sm disabled:opacity-40",children:[t&&qe.jsx("option",{value:"",children:"Laden…"}),i.map(v=>qe.jsx("option",{value:v,style:{background:"#1a2640"},children:e[v]},v))]}),n==="mobile"&&qe.jsxs("div",{className:"flex flex-col items-center gap-5 w-full max-w-sm",children:[qe.jsx("div",{className:"h-36"}),qe.jsx("div",{className:"bg-[#1a2640]/80 backdrop-blur-sm rounded-2xl px-6 py-5 text-white border border-white/5 w-full",children:qe.jsxs("div",{className:"flex justify-around items-center",children:[qe.jsxs("div",{className:"text-center",children:[qe.jsx("p",{className:"text-white/40 text-xs mb-1",children:"Sonnenaufgang"}),qe.jsx("p",{className:"text-xl font-bold tracking-widest",children:"05:19"})]}),qe.jsx("div",{className:"w-px h-10 bg-white/10"}),qe.jsxs("div",{className:"text-center",children:[qe.jsx("p",{className:"text-white/40 text-xs mb-1",children:"Sonnenuntergang"}),qe.jsx("p",{className:"text-xl font-bold tracking-widest",children:"21:53"})]})]})}),qe.jsxs("div",{className:"text-center",children:[qe.jsx("h1",{className:"text-white text-3xl font-bold tracking-tight",children:"Wetterstation"}),qe.jsx("p",{className:"text-white/40 text-xs mt-1",children:"letztes Update:"}),qe.jsx("p",{className:"text-white/70 text-sm font-semibold",children:m})]})]}),n==="tablet"&&qe.jsxs("div",{className:"flex flex-row items-center gap-6 w-full max-w-2xl",children:[qe.jsxs("div",{className:"bg-[#1a2640]/80 backdrop-blur-sm rounded-2xl px-5 py-5 text-white text-center border border-white/5 shrink-0",children:[qe.jsx("p",{className:"text-white/40 text-xs mb-1",children:"Sonnenaufgang"}),qe.jsx("p",{className:"text-xl font-bold tracking-widest mb-3",children:"05:19"}),qe.jsx("p",{className:"text-white/40 text-xs mb-1",children:"Sonnenuntergang"}),qe.jsx("p",{className:"text-xl font-bold tracking-widest",children:"21:53"})]}),qe.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[qe.jsxs("div",{children:[qe.jsx("h1",{className:"text-white text-3xl font-bold tracking-tight",children:"Wetterstation"}),qe.jsx("p",{className:"text-white/40 text-xs mt-1",children:"letztes Update:"}),qe.jsx("p",{className:"text-white/70 text-sm font-semibold",children:m})]}),qe.jsx("div",{className:"w-32 h-24 shrink-0"})]})]}),n==="desktop"&&qe.jsxs("div",{className:"flex flex-row items-center gap-8 w-full max-w-4xl",children:[qe.jsxs("div",{className:"bg-[#1a2640]/80 backdrop-blur-sm rounded-2xl px-7 py-6 text-white text-center border border-white/5 shrink-0",children:[qe.jsx("p",{className:"text-white/40 text-xs mb-1",children:"Sonnenaufgang"}),qe.jsx("p",{className:"text-2xl font-bold tracking-widest mb-4",children:"05:19"}),qe.jsx("p",{className:"text-white/40 text-xs mb-1",children:"Sonnenuntergang"}),qe.jsx("p",{className:"text-2xl font-bold tracking-widest",children:"21:53"})]}),qe.jsxs("div",{className:"flex items-center gap-6 flex-1 pl-2",children:[qe.jsxs("div",{children:[qe.jsx("h1",{className:"text-white text-5xl font-bold tracking-tight leading-tight",children:"Wetterstation"}),qe.jsx("p",{className:"text-white/40 text-sm mt-1",children:"letztes Update:"}),qe.jsx("p",{className:"text-white/70 font-semibold",children:m})]}),qe.jsx("div",{className:"w-44 h-28 shrink-0"})]})]}),qe.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 sm:gap-5 w-full max-w-sm sm:max-w-2xl lg:max-w-4xl",children:[qe.jsx(uh,{title:"Temperatur",current:_?_.temperature.toFixed(2):"—",unit:"°C",series:f,color:"#f59e0b"}),qe.jsx(uh,{title:"Luftdruck",current:_?String(_.pressure):"—",unit:" hPa",series:p,color:"#60a5fa"}),qe.jsx(uh,{title:"Luftfeuchtigkeit",current:_?_.humidity.toFixed(2):"—",unit:"%",series:d,color:"#34d399"})]})]})]})}$S.createRoot(document.getElementById("root")).render(qe.jsx(U2,{}));
