var e1=Object.defineProperty;var t1=(e,t,n)=>t in e?e1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var J=(e,t,n)=>(t1(e,typeof t!="symbol"?t+"":t,n),n);function n1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Pk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function r1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tc={exports:{}},ct={},g={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ri=Symbol.for("react.element"),o1=Symbol.for("react.portal"),i1=Symbol.for("react.fragment"),a1=Symbol.for("react.strict_mode"),l1=Symbol.for("react.profiler"),s1=Symbol.for("react.provider"),u1=Symbol.for("react.context"),c1=Symbol.for("react.forward_ref"),f1=Symbol.for("react.suspense"),d1=Symbol.for("react.memo"),p1=Symbol.for("react.lazy"),Yf=Symbol.iterator;function h1(e){return e===null||typeof e!="object"?null:(e=Yf&&e[Yf]||e["@@iterator"],typeof e=="function"?e:null)}var uh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ch=Object.assign,fh={};function go(e,t,n){this.props=e,this.context=t,this.refs=fh,this.updater=n||uh}go.prototype.isReactComponent={};go.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};go.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dh(){}dh.prototype=go.prototype;function Oc(e,t,n){this.props=e,this.context=t,this.refs=fh,this.updater=n||uh}var Rc=Oc.prototype=new dh;Rc.constructor=Oc;ch(Rc,go.prototype);Rc.isPureReactComponent=!0;var Qf=Array.isArray,ph=Object.prototype.hasOwnProperty,Mc={current:null},hh={key:!0,ref:!0,__self:!0,__source:!0};function mh(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ph.call(t,r)&&!hh.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Ri,type:e,key:i,ref:a,props:o,_owner:Mc.current}}function m1(e,t){return{$$typeof:Ri,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $c(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ri}function g1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gf=/\/+/g;function ks(e,t){return typeof e=="object"&&e!==null&&e.key!=null?g1(""+e.key):t.toString(36)}function Sa(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ri:case o1:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ks(a,0):r,Qf(o)?(n="",e!=null&&(n=e.replace(Gf,"$&/")+"/"),Sa(o,t,n,"",function(u){return u})):o!=null&&($c(o)&&(o=m1(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Gf,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Qf(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ks(i,l);a+=Sa(i,t,n,s,o)}else if(s=h1(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ks(i,l++),a+=Sa(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Qi(e,t,n){if(e==null)return e;var r=[],o=0;return Sa(e,r,"","",function(i){return t.call(n,i,o++)}),r}function v1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Ca={transition:null},y1={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Ca,ReactCurrentOwner:Mc};function gh(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Qi,forEach:function(e,t,n){Qi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qi(e,function(){t++}),t},toArray:function(e){return Qi(e,function(t){return t})||[]},only:function(e){if(!$c(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=go;I.Fragment=i1;I.Profiler=l1;I.PureComponent=Oc;I.StrictMode=a1;I.Suspense=f1;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y1;I.act=gh;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ch({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Mc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)ph.call(t,s)&&!hh.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ri,type:e.type,key:o,ref:i,props:r,_owner:a}};I.createContext=function(e){return e={$$typeof:u1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:s1,_context:e},e.Consumer=e};I.createElement=mh;I.createFactory=function(e){var t=mh.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:c1,render:e}};I.isValidElement=$c;I.lazy=function(e){return{$$typeof:p1,_payload:{_status:-1,_result:e},_init:v1}};I.memo=function(e,t){return{$$typeof:d1,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Ca.transition;Ca.transition={};try{e()}finally{Ca.transition=t}};I.unstable_act=gh;I.useCallback=function(e,t){return Ve.current.useCallback(e,t)};I.useContext=function(e){return Ve.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};I.useEffect=function(e,t){return Ve.current.useEffect(e,t)};I.useId=function(){return Ve.current.useId()};I.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Ve.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};I.useRef=function(e){return Ve.current.useRef(e)};I.useState=function(e){return Ve.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Ve.current.useTransition()};I.version="18.3.1";(function(e){e.exports=I})(g);const Se=r1(g.exports),vh=n1({__proto__:null,default:Se},[g.exports]);var yh={exports:{}},bh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,T){var L=E.length;E.push(T);e:for(;0<L;){var j=L-1>>>1,F=E[j];if(0<o(F,T))E[j]=T,E[L]=F,L=j;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var T=E[0],L=E.pop();if(L!==T){E[0]=L;e:for(var j=0,F=E.length,je=F>>>1;j<je;){var xe=2*(j+1)-1,Je=E[xe],_e=xe+1,V=E[_e];if(0>o(Je,L))_e<F&&0>o(V,Je)?(E[j]=V,E[_e]=L,j=_e):(E[j]=Je,E[xe]=L,j=xe);else if(_e<F&&0>o(V,L))E[j]=V,E[_e]=L,j=_e;else break e}}return T}function o(E,T){var L=E.sortIndex-T.sortIndex;return L!==0?L:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,f=null,d=3,y=!1,b=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=E)r(u),T.sortIndex=T.expirationTime,t(s,T);else break;T=n(u)}}function x(E){if(v=!1,m(E),!b)if(n(s)!==null)b=!0,he(S);else{var T=n(u);T!==null&&K(x,T.startTime-E)}}function S(E,T){b=!1,v&&(v=!1,h(P),P=-1),y=!0;var L=d;try{for(m(T),f=n(s);f!==null&&(!(f.expirationTime>T)||E&&!N());){var j=f.callback;if(typeof j=="function"){f.callback=null,d=f.priorityLevel;var F=j(f.expirationTime<=T);T=e.unstable_now(),typeof F=="function"?f.callback=F:f===n(s)&&r(s),m(T)}else r(s);f=n(s)}if(f!==null)var je=!0;else{var xe=n(u);xe!==null&&K(x,xe.startTime-T),je=!1}return je}finally{f=null,d=L,y=!1}}var C=!1,w=null,P=-1,O=5,R=-1;function N(){return!(e.unstable_now()-R<O)}function H(){if(w!==null){var E=e.unstable_now();R=E;var T=!0;try{T=w(!0,E)}finally{T?pe():(C=!1,w=null)}}else C=!1}var pe;if(typeof p=="function")pe=function(){p(H)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,Me=Ee.port2;Ee.port1.onmessage=H,pe=function(){Me.postMessage(null)}}else pe=function(){k(H,0)};function he(E){w=E,C||(C=!0,pe())}function K(E,T){P=k(function(){E(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){b||y||(b=!0,he(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(d){case 1:case 2:case 3:var T=3;break;default:T=d}var L=d;d=T;try{return E()}finally{d=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=d;d=E;try{return T()}finally{d=L}},e.unstable_scheduleCallback=function(E,T,L){var j=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?j+L:j):L=j,E){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=L+F,E={id:c++,callback:T,priorityLevel:E,startTime:L,expirationTime:F,sortIndex:-1},L>j?(E.sortIndex=L,t(u,E),n(s)===null&&E===n(u)&&(v?(h(P),P=-1):v=!0,K(x,L-j))):(E.sortIndex=F,t(s,E),b||y||(b=!0,he(S))),E},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(E){var T=d;return function(){var L=d;d=T;try{return E.apply(this,arguments)}finally{d=L}}}})(bh);(function(e){e.exports=bh})(yh);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1=g.exports,ut=yh.exports;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xh=new Set,ai={};function wr(e,t){ao(e,t),ao(e+"Capture",t)}function ao(e,t){for(ai[e]=t,e=0;e<t.length;e++)xh.add(t[e])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=Object.prototype.hasOwnProperty,x1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kf={},Zf={};function w1(e){return su.call(Zf,e)?!0:su.call(Kf,e)?!1:x1.test(e)?Zf[e]=!0:(Kf[e]=!0,!1)}function k1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function S1(e,t,n,r){if(t===null||typeof t>"u"||k1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var zc=/[\-:]([a-z])/g;function Lc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zc,Lc);Ne[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zc,Lc);Ne[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zc,Lc);Ne[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Nc(e,t,n,r){var o=Ne.hasOwnProperty(t)?Ne[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(S1(t,n,o,r)&&(n=null),r||o===null?w1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wn=b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gi=Symbol.for("react.element"),Fr=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),Ac=Symbol.for("react.strict_mode"),uu=Symbol.for("react.profiler"),wh=Symbol.for("react.provider"),kh=Symbol.for("react.context"),Dc=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),fu=Symbol.for("react.suspense_list"),Ic=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),Sh=Symbol.for("react.offscreen"),Jf=Symbol.iterator;function Ro(e){return e===null||typeof e!="object"?null:(e=Jf&&e[Jf]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Ss;function jo(e){if(Ss===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ss=t&&t[1]||""}return`
`+Ss+e}var Cs=!1;function Ps(e,t){if(!e||Cs)return"";Cs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Cs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jo(e):""}function C1(e){switch(e.tag){case 5:return jo(e.type);case 16:return jo("Lazy");case 13:return jo("Suspense");case 19:return jo("SuspenseList");case 0:case 2:case 15:return e=Ps(e.type,!1),e;case 11:return e=Ps(e.type.render,!1),e;case 1:return e=Ps(e.type,!0),e;default:return""}}function du(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hr:return"Fragment";case Fr:return"Portal";case uu:return"Profiler";case Ac:return"StrictMode";case cu:return"Suspense";case fu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kh:return(e.displayName||"Context")+".Consumer";case wh:return(e._context.displayName||"Context")+".Provider";case Dc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ic:return t=e.displayName||null,t!==null?t:du(e.type)||"Memo";case Mn:t=e._payload,e=e._init;try{return du(e(t))}catch{}}return null}function P1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return du(t);case 8:return t===Ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ch(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function E1(e){var t=Ch(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ki(e){e._valueTracker||(e._valueTracker=E1(e))}function Ph(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ch(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ja(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pu(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ed(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Eh(e,t){t=t.checked,t!=null&&Nc(e,"checked",t,!1)}function hu(e,t){Eh(e,t);var n=Yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mu(e,t.type,n):t.hasOwnProperty("defaultValue")&&mu(e,t.type,Yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function td(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mu(e,t,n){(t!=="number"||ja(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Uo=Array.isArray;function Jr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function gu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Uo(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yn(n)}}function _h(e,t){var n=Yn(t.value),r=Yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Th(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Th(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zi,Oh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zi=Zi||document.createElement("div"),Zi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function li(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_1=["Webkit","ms","Moz","O"];Object.keys(Qo).forEach(function(e){_1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qo[t]=Qo[e]})});function Rh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qo.hasOwnProperty(e)&&Qo[e]?(""+t).trim():t+"px"}function Mh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Rh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var T1=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yu(e,t){if(t){if(T1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function bu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xu=null;function Fc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wu=null,eo=null,to=null;function od(e){if(e=zi(e)){if(typeof wu!="function")throw Error(_(280));var t=e.stateNode;t&&(t=kl(t),wu(e.stateNode,e.type,t))}}function $h(e){eo?to?to.push(e):to=[e]:eo=e}function zh(){if(eo){var e=eo,t=to;if(to=eo=null,od(e),t)for(e=0;e<t.length;e++)od(t[e])}}function Lh(e,t){return e(t)}function Nh(){}var Es=!1;function Ah(e,t,n){if(Es)return e(t,n);Es=!0;try{return Lh(e,t,n)}finally{Es=!1,(eo!==null||to!==null)&&(Nh(),zh())}}function si(e,t){var n=e.stateNode;if(n===null)return null;var r=kl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ku=!1;if(gn)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){ku=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{ku=!1}function O1(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Go=!1,Ua=null,Wa=!1,Su=null,R1={onError:function(e){Go=!0,Ua=e}};function M1(e,t,n,r,o,i,a,l,s){Go=!1,Ua=null,O1.apply(R1,arguments)}function $1(e,t,n,r,o,i,a,l,s){if(M1.apply(this,arguments),Go){if(Go){var u=Ua;Go=!1,Ua=null}else throw Error(_(198));Wa||(Wa=!0,Su=u)}}function kr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function id(e){if(kr(e)!==e)throw Error(_(188))}function z1(e){var t=e.alternate;if(!t){if(t=kr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return id(o),e;if(i===r)return id(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Ih(e){return e=z1(e),e!==null?Fh(e):null}function Fh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fh(e);if(t!==null)return t;e=e.sibling}return null}var Hh=ut.unstable_scheduleCallback,ad=ut.unstable_cancelCallback,L1=ut.unstable_shouldYield,N1=ut.unstable_requestPaint,de=ut.unstable_now,A1=ut.unstable_getCurrentPriorityLevel,Hc=ut.unstable_ImmediatePriority,Bh=ut.unstable_UserBlockingPriority,Va=ut.unstable_NormalPriority,D1=ut.unstable_LowPriority,jh=ut.unstable_IdlePriority,yl=null,Jt=null;function I1(e){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(yl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:B1,F1=Math.log,H1=Math.LN2;function B1(e){return e>>>=0,e===0?32:31-(F1(e)/H1|0)|0}var Ji=64,ea=4194304;function Wo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Wo(l):(i&=a,i!==0&&(r=Wo(i)))}else a=n&~o,a!==0?r=Wo(a):i!==0&&(r=Wo(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ut(t),o=1<<n,r|=e[n],t&=~o;return r}function j1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ut(i),l=1<<a,s=o[a];s===-1?((l&n)===0||(l&r)!==0)&&(o[a]=j1(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function Cu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uh(){var e=Ji;return Ji<<=1,(Ji&4194240)===0&&(Ji=64),e}function _s(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ut(t),e[t]=n}function W1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ut(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ut(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var q=0;function Wh(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Vh,jc,Xh,qh,Yh,Pu=!1,ta=[],Hn=null,Bn=null,jn=null,ui=new Map,ci=new Map,zn=[],V1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ld(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function $o(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=zi(t),t!==null&&jc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function X1(e,t,n,r,o){switch(t){case"focusin":return Hn=$o(Hn,e,t,n,r,o),!0;case"dragenter":return Bn=$o(Bn,e,t,n,r,o),!0;case"mouseover":return jn=$o(jn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ui.set(i,$o(ui.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ci.set(i,$o(ci.get(i)||null,e,t,n,r,o)),!0}return!1}function Qh(e){var t=ir(e.target);if(t!==null){var n=kr(t);if(n!==null){if(t=n.tag,t===13){if(t=Dh(n),t!==null){e.blockedOn=t,Yh(e.priority,function(){Xh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Eu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xu=r,n.target.dispatchEvent(r),xu=null}else return t=zi(n),t!==null&&jc(t),e.blockedOn=n,!1;t.shift()}return!0}function sd(e,t,n){Pa(e)&&n.delete(t)}function q1(){Pu=!1,Hn!==null&&Pa(Hn)&&(Hn=null),Bn!==null&&Pa(Bn)&&(Bn=null),jn!==null&&Pa(jn)&&(jn=null),ui.forEach(sd),ci.forEach(sd)}function zo(e,t){e.blockedOn===t&&(e.blockedOn=null,Pu||(Pu=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,q1)))}function fi(e){function t(o){return zo(o,e)}if(0<ta.length){zo(ta[0],e);for(var n=1;n<ta.length;n++){var r=ta[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Hn!==null&&zo(Hn,e),Bn!==null&&zo(Bn,e),jn!==null&&zo(jn,e),ui.forEach(t),ci.forEach(t),n=0;n<zn.length;n++)r=zn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)Qh(n),n.blockedOn===null&&zn.shift()}var no=wn.ReactCurrentBatchConfig,qa=!0;function Y1(e,t,n,r){var o=q,i=no.transition;no.transition=null;try{q=1,Uc(e,t,n,r)}finally{q=o,no.transition=i}}function Q1(e,t,n,r){var o=q,i=no.transition;no.transition=null;try{q=4,Uc(e,t,n,r)}finally{q=o,no.transition=i}}function Uc(e,t,n,r){if(qa){var o=Eu(e,t,n,r);if(o===null)Ds(e,t,r,Ya,n),ld(e,r);else if(X1(o,e,t,n,r))r.stopPropagation();else if(ld(e,r),t&4&&-1<V1.indexOf(e)){for(;o!==null;){var i=zi(o);if(i!==null&&Vh(i),i=Eu(e,t,n,r),i===null&&Ds(e,t,r,Ya,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ds(e,t,r,null,n)}}var Ya=null;function Eu(e,t,n,r){if(Ya=null,e=Fc(r),e=ir(e),e!==null)if(t=kr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ya=e,null}function Gh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A1()){case Hc:return 1;case Bh:return 4;case Va:case D1:return 16;case jh:return 536870912;default:return 16}default:return 16}}var An=null,Wc=null,Ea=null;function Kh(){if(Ea)return Ea;var e,t=Wc,n=t.length,r,o="value"in An?An.value:An.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Ea=o.slice(e,1<r?1-r:void 0)}function _a(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function na(){return!0}function ud(){return!1}function ft(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?na:ud,this.isPropagationStopped=ud,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),t}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vc=ft(vo),$i=le({},vo,{view:0,detail:0}),G1=ft($i),Ts,Os,Lo,bl=le({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lo&&(Lo&&e.type==="mousemove"?(Ts=e.screenX-Lo.screenX,Os=e.screenY-Lo.screenY):Os=Ts=0,Lo=e),Ts)},movementY:function(e){return"movementY"in e?e.movementY:Os}}),cd=ft(bl),K1=le({},bl,{dataTransfer:0}),Z1=ft(K1),J1=le({},$i,{relatedTarget:0}),Rs=ft(J1),ev=le({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),tv=ft(ev),nv=le({},vo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rv=ft(nv),ov=le({},vo,{data:0}),fd=ft(ov),iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lv[e])?!!t[e]:!1}function Xc(){return sv}var uv=le({},$i,{key:function(e){if(e.key){var t=iv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?av[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(e){return e.type==="keypress"?_a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cv=ft(uv),fv=le({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dd=ft(fv),dv=le({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),pv=ft(dv),hv=le({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),mv=ft(hv),gv=le({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vv=ft(gv),yv=[9,13,27,32],qc=gn&&"CompositionEvent"in window,Ko=null;gn&&"documentMode"in document&&(Ko=document.documentMode);var bv=gn&&"TextEvent"in window&&!Ko,Zh=gn&&(!qc||Ko&&8<Ko&&11>=Ko),pd=String.fromCharCode(32),hd=!1;function Jh(e,t){switch(e){case"keyup":return yv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function xv(e,t){switch(e){case"compositionend":return em(t);case"keypress":return t.which!==32?null:(hd=!0,pd);case"textInput":return e=t.data,e===pd&&hd?null:e;default:return null}}function wv(e,t){if(Br)return e==="compositionend"||!qc&&Jh(e,t)?(e=Kh(),Ea=Wc=An=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zh&&t.locale!=="ko"?null:t.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function md(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kv[e.type]:t==="textarea"}function tm(e,t,n,r){$h(r),t=Qa(t,"onChange"),0<t.length&&(n=new Vc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zo=null,di=null;function Sv(e){dm(e,0)}function xl(e){var t=Wr(e);if(Ph(t))return e}function Cv(e,t){if(e==="change")return t}var nm=!1;if(gn){var Ms;if(gn){var $s="oninput"in document;if(!$s){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),$s=typeof gd.oninput=="function"}Ms=$s}else Ms=!1;nm=Ms&&(!document.documentMode||9<document.documentMode)}function vd(){Zo&&(Zo.detachEvent("onpropertychange",rm),di=Zo=null)}function rm(e){if(e.propertyName==="value"&&xl(di)){var t=[];tm(t,di,e,Fc(e)),Ah(Sv,t)}}function Pv(e,t,n){e==="focusin"?(vd(),Zo=t,di=n,Zo.attachEvent("onpropertychange",rm)):e==="focusout"&&vd()}function Ev(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(di)}function _v(e,t){if(e==="click")return xl(t)}function Tv(e,t){if(e==="input"||e==="change")return xl(t)}function Ov(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xt=typeof Object.is=="function"?Object.is:Ov;function pi(e,t){if(Xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!su.call(t,o)||!Xt(e[o],t[o]))return!1}return!0}function yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bd(e,t){var n=yd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yd(n)}}function om(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?om(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function im(){for(var e=window,t=ja();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ja(e.document)}return t}function Yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rv(e){var t=im(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&om(n.ownerDocument.documentElement,n)){if(r!==null&&Yc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=bd(n,i);var a=bd(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mv=gn&&"documentMode"in document&&11>=document.documentMode,jr=null,_u=null,Jo=null,Tu=!1;function xd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tu||jr==null||jr!==ja(r)||(r=jr,"selectionStart"in r&&Yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jo&&pi(Jo,r)||(Jo=r,r=Qa(_u,"onSelect"),0<r.length&&(t=new Vc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function ra(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ur={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},zs={},am={};gn&&(am=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function wl(e){if(zs[e])return zs[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in am)return zs[e]=t[n];return e}var lm=wl("animationend"),sm=wl("animationiteration"),um=wl("animationstart"),cm=wl("transitionend"),fm=new Map,wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,t){fm.set(e,t),wr(t,[e])}for(var Ls=0;Ls<wd.length;Ls++){var Ns=wd[Ls],$v=Ns.toLowerCase(),zv=Ns[0].toUpperCase()+Ns.slice(1);Gn($v,"on"+zv)}Gn(lm,"onAnimationEnd");Gn(sm,"onAnimationIteration");Gn(um,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(cm,"onTransitionEnd");ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function kd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$1(r,t,void 0,e),e.currentTarget=null}function dm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;kd(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;kd(o,l,u),i=s}}}if(Wa)throw e=Su,Wa=!1,Su=null,e}function ee(e,t){var n=t[zu];n===void 0&&(n=t[zu]=new Set);var r=e+"__bubble";n.has(r)||(pm(t,e,2,!1),n.add(r))}function As(e,t,n){var r=0;t&&(r|=4),pm(n,e,r,t)}var oa="_reactListening"+Math.random().toString(36).slice(2);function hi(e){if(!e[oa]){e[oa]=!0,xh.forEach(function(n){n!=="selectionchange"&&(Lv.has(n)||As(n,!1,e),As(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oa]||(t[oa]=!0,As("selectionchange",!1,t))}}function pm(e,t,n,r){switch(Gh(t)){case 1:var o=Y1;break;case 4:o=Q1;break;default:o=Uc}n=o.bind(null,t,n,e),o=void 0,!ku||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ds(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=ir(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Ah(function(){var u=i,c=Fc(n),f=[];e:{var d=fm.get(e);if(d!==void 0){var y=Vc,b=e;switch(e){case"keypress":if(_a(n)===0)break e;case"keydown":case"keyup":y=cv;break;case"focusin":b="focus",y=Rs;break;case"focusout":b="blur",y=Rs;break;case"beforeblur":case"afterblur":y=Rs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Z1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=pv;break;case lm:case sm:case um:y=tv;break;case cm:y=mv;break;case"scroll":y=G1;break;case"wheel":y=vv;break;case"copy":case"cut":case"paste":y=rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=dd}var v=(t&4)!==0,k=!v&&e==="scroll",h=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,m;p!==null;){m=p;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,h!==null&&(x=si(p,h),x!=null&&v.push(mi(p,x,m)))),k)break;p=p.return}0<v.length&&(d=new y(d,b,null,n,c),f.push({event:d,listeners:v}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",d&&n!==xu&&(b=n.relatedTarget||n.fromElement)&&(ir(b)||b[vn]))break e;if((y||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,y?(b=n.relatedTarget||n.toElement,y=u,b=b?ir(b):null,b!==null&&(k=kr(b),b!==k||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=u),y!==b)){if(v=cd,x="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=dd,x="onPointerLeave",h="onPointerEnter",p="pointer"),k=y==null?d:Wr(y),m=b==null?d:Wr(b),d=new v(x,p+"leave",y,n,c),d.target=k,d.relatedTarget=m,x=null,ir(c)===u&&(v=new v(h,p+"enter",b,n,c),v.target=m,v.relatedTarget=k,x=v),k=x,y&&b)t:{for(v=y,h=b,p=0,m=v;m;m=Rr(m))p++;for(m=0,x=h;x;x=Rr(x))m++;for(;0<p-m;)v=Rr(v),p--;for(;0<m-p;)h=Rr(h),m--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=Rr(v),h=Rr(h)}v=null}else v=null;y!==null&&Sd(f,d,y,v,!1),b!==null&&k!==null&&Sd(f,k,b,v,!0)}}e:{if(d=u?Wr(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var S=Cv;else if(md(d))if(nm)S=Tv;else{S=Ev;var C=Pv}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=_v);if(S&&(S=S(e,u))){tm(f,S,n,c);break e}C&&C(e,d,u),e==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&mu(d,"number",d.value)}switch(C=u?Wr(u):window,e){case"focusin":(md(C)||C.contentEditable==="true")&&(jr=C,_u=u,Jo=null);break;case"focusout":Jo=_u=jr=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,xd(f,n,c);break;case"selectionchange":if(Mv)break;case"keydown":case"keyup":xd(f,n,c)}var w;if(qc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Br?Jh(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Zh&&n.locale!=="ko"&&(Br||P!=="onCompositionStart"?P==="onCompositionEnd"&&Br&&(w=Kh()):(An=c,Wc="value"in An?An.value:An.textContent,Br=!0)),C=Qa(u,P),0<C.length&&(P=new fd(P,e,null,n,c),f.push({event:P,listeners:C}),w?P.data=w:(w=em(n),w!==null&&(P.data=w)))),(w=bv?xv(e,n):wv(e,n))&&(u=Qa(u,"onBeforeInput"),0<u.length&&(c=new fd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=w))}dm(f,t)})}function mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=si(e,n),i!=null&&r.unshift(mi(e,i,o)),i=si(e,t),i!=null&&r.push(mi(e,i,o))),e=e.return}return r}function Rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sd(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=si(n,i),s!=null&&a.unshift(mi(n,s,l))):o||(s=si(n,i),s!=null&&a.push(mi(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Nv=/\r\n?/g,Av=/\u0000|\uFFFD/g;function Cd(e){return(typeof e=="string"?e:""+e).replace(Nv,`
`).replace(Av,"")}function ia(e,t,n){if(t=Cd(t),Cd(e)!==t&&n)throw Error(_(425))}function Ga(){}var Ou=null,Ru=null;function Mu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,Dv=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,Iv=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(e){return Pd.resolve(null).then(e).catch(Fv)}:$u;function Fv(e){setTimeout(function(){throw e})}function Is(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),fi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);fi(t)}function Un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ed(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yo=Math.random().toString(36).slice(2),Zt="__reactFiber$"+yo,gi="__reactProps$"+yo,vn="__reactContainer$"+yo,zu="__reactEvents$"+yo,Hv="__reactListeners$"+yo,Bv="__reactHandles$"+yo;function ir(e){var t=e[Zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vn]||n[Zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ed(e);e!==null;){if(n=e[Zt])return n;e=Ed(e)}return t}e=n,n=e.parentNode}return null}function zi(e){return e=e[Zt]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function kl(e){return e[gi]||null}var Lu=[],Vr=-1;function Kn(e){return{current:e}}function ne(e){0>Vr||(e.current=Lu[Vr],Lu[Vr]=null,Vr--)}function G(e,t){Vr++,Lu[Vr]=e.current,e.current=t}var Qn={},Be=Kn(Qn),Ge=Kn(!1),pr=Qn;function lo(e,t){var n=e.type.contextTypes;if(!n)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ke(e){return e=e.childContextTypes,e!=null}function Ka(){ne(Ge),ne(Be)}function _d(e,t,n){if(Be.current!==Qn)throw Error(_(168));G(Be,t),G(Ge,n)}function hm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,P1(e)||"Unknown",o));return le({},n,r)}function Za(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,pr=Be.current,G(Be,e),G(Ge,Ge.current),!0}function Td(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=hm(e,t,pr),r.__reactInternalMemoizedMergedChildContext=e,ne(Ge),ne(Be),G(Be,e)):ne(Ge),G(Ge,n)}var cn=null,Sl=!1,Fs=!1;function mm(e){cn===null?cn=[e]:cn.push(e)}function jv(e){Sl=!0,mm(e)}function Zn(){if(!Fs&&cn!==null){Fs=!0;var e=0,t=q;try{var n=cn;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}cn=null,Sl=!1}catch(o){throw cn!==null&&(cn=cn.slice(e+1)),Hh(Hc,Zn),o}finally{q=t,Fs=!1}}return null}var Xr=[],qr=0,Ja=null,el=0,gt=[],vt=0,hr=null,fn=1,dn="";function nr(e,t){Xr[qr++]=el,Xr[qr++]=Ja,Ja=e,el=t}function gm(e,t,n){gt[vt++]=fn,gt[vt++]=dn,gt[vt++]=hr,hr=e;var r=fn;e=dn;var o=32-Ut(r)-1;r&=~(1<<o),n+=1;var i=32-Ut(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,fn=1<<32-Ut(t)+o|n<<o|r,dn=i+e}else fn=1<<i|n<<o|r,dn=e}function Qc(e){e.return!==null&&(nr(e,1),gm(e,1,0))}function Gc(e){for(;e===Ja;)Ja=Xr[--qr],Xr[qr]=null,el=Xr[--qr],Xr[qr]=null;for(;e===hr;)hr=gt[--vt],gt[vt]=null,dn=gt[--vt],gt[vt]=null,fn=gt[--vt],gt[vt]=null}var st=null,at=null,oe=!1,Bt=null;function vm(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Od(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,at=Un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hr!==null?{id:fn,overflow:dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,at=null,!0):!1;default:return!1}}function Nu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Au(e){if(oe){var t=at;if(t){var n=t;if(!Od(e,t)){if(Nu(e))throw Error(_(418));t=Un(n.nextSibling);var r=st;t&&Od(e,t)?vm(r,n):(e.flags=e.flags&-4097|2,oe=!1,st=e)}}else{if(Nu(e))throw Error(_(418));e.flags=e.flags&-4097|2,oe=!1,st=e}}}function Rd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function aa(e){if(e!==st)return!1;if(!oe)return Rd(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Mu(e.type,e.memoizedProps)),t&&(t=at)){if(Nu(e))throw ym(),Error(_(418));for(;t;)vm(e,t),t=Un(t.nextSibling)}if(Rd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=Un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=st?Un(e.stateNode.nextSibling):null;return!0}function ym(){for(var e=at;e;)e=Un(e.nextSibling)}function so(){at=st=null,oe=!1}function Kc(e){Bt===null?Bt=[e]:Bt.push(e)}var Uv=wn.ReactCurrentBatchConfig;function No(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function la(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Md(e){var t=e._init;return t(e._payload)}function bm(e){function t(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=qn(h,p),h.index=0,h.sibling=null,h}function i(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,m,x){return p===null||p.tag!==6?(p=Xs(m,h.mode,x),p.return=h,p):(p=o(p,m),p.return=h,p)}function s(h,p,m,x){var S=m.type;return S===Hr?c(h,p,m.props.children,x,m.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Mn&&Md(S)===p.type)?(x=o(p,m.props),x.ref=No(h,p,m),x.return=h,x):(x=La(m.type,m.key,m.props,null,h.mode,x),x.ref=No(h,p,m),x.return=h,x)}function u(h,p,m,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=qs(m,h.mode,x),p.return=h,p):(p=o(p,m.children||[]),p.return=h,p)}function c(h,p,m,x,S){return p===null||p.tag!==7?(p=cr(m,h.mode,x,S),p.return=h,p):(p=o(p,m),p.return=h,p)}function f(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xs(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gi:return m=La(p.type,p.key,p.props,null,h.mode,m),m.ref=No(h,null,p),m.return=h,m;case Fr:return p=qs(p,h.mode,m),p.return=h,p;case Mn:var x=p._init;return f(h,x(p._payload),m)}if(Uo(p)||Ro(p))return p=cr(p,h.mode,m,null),p.return=h,p;la(h,p)}return null}function d(h,p,m,x){var S=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(h,p,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Gi:return m.key===S?s(h,p,m,x):null;case Fr:return m.key===S?u(h,p,m,x):null;case Mn:return S=m._init,d(h,p,S(m._payload),x)}if(Uo(m)||Ro(m))return S!==null?null:c(h,p,m,x,null);la(h,m)}return null}function y(h,p,m,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(m)||null,l(p,h,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gi:return h=h.get(x.key===null?m:x.key)||null,s(p,h,x,S);case Fr:return h=h.get(x.key===null?m:x.key)||null,u(p,h,x,S);case Mn:var C=x._init;return y(h,p,m,C(x._payload),S)}if(Uo(x)||Ro(x))return h=h.get(m)||null,c(p,h,x,S,null);la(p,x)}return null}function b(h,p,m,x){for(var S=null,C=null,w=p,P=p=0,O=null;w!==null&&P<m.length;P++){w.index>P?(O=w,w=null):O=w.sibling;var R=d(h,w,m[P],x);if(R===null){w===null&&(w=O);break}e&&w&&R.alternate===null&&t(h,w),p=i(R,p,P),C===null?S=R:C.sibling=R,C=R,w=O}if(P===m.length)return n(h,w),oe&&nr(h,P),S;if(w===null){for(;P<m.length;P++)w=f(h,m[P],x),w!==null&&(p=i(w,p,P),C===null?S=w:C.sibling=w,C=w);return oe&&nr(h,P),S}for(w=r(h,w);P<m.length;P++)O=y(w,h,P,m[P],x),O!==null&&(e&&O.alternate!==null&&w.delete(O.key===null?P:O.key),p=i(O,p,P),C===null?S=O:C.sibling=O,C=O);return e&&w.forEach(function(N){return t(h,N)}),oe&&nr(h,P),S}function v(h,p,m,x){var S=Ro(m);if(typeof S!="function")throw Error(_(150));if(m=S.call(m),m==null)throw Error(_(151));for(var C=S=null,w=p,P=p=0,O=null,R=m.next();w!==null&&!R.done;P++,R=m.next()){w.index>P?(O=w,w=null):O=w.sibling;var N=d(h,w,R.value,x);if(N===null){w===null&&(w=O);break}e&&w&&N.alternate===null&&t(h,w),p=i(N,p,P),C===null?S=N:C.sibling=N,C=N,w=O}if(R.done)return n(h,w),oe&&nr(h,P),S;if(w===null){for(;!R.done;P++,R=m.next())R=f(h,R.value,x),R!==null&&(p=i(R,p,P),C===null?S=R:C.sibling=R,C=R);return oe&&nr(h,P),S}for(w=r(h,w);!R.done;P++,R=m.next())R=y(w,h,P,R.value,x),R!==null&&(e&&R.alternate!==null&&w.delete(R.key===null?P:R.key),p=i(R,p,P),C===null?S=R:C.sibling=R,C=R);return e&&w.forEach(function(H){return t(h,H)}),oe&&nr(h,P),S}function k(h,p,m,x){if(typeof m=="object"&&m!==null&&m.type===Hr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Gi:e:{for(var S=m.key,C=p;C!==null;){if(C.key===S){if(S=m.type,S===Hr){if(C.tag===7){n(h,C.sibling),p=o(C,m.props.children),p.return=h,h=p;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Mn&&Md(S)===C.type){n(h,C.sibling),p=o(C,m.props),p.ref=No(h,C,m),p.return=h,h=p;break e}n(h,C);break}else t(h,C);C=C.sibling}m.type===Hr?(p=cr(m.props.children,h.mode,x,m.key),p.return=h,h=p):(x=La(m.type,m.key,m.props,null,h.mode,x),x.ref=No(h,p,m),x.return=h,h=x)}return a(h);case Fr:e:{for(C=m.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=o(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=qs(m,h.mode,x),p.return=h,h=p}return a(h);case Mn:return C=m._init,k(h,p,C(m._payload),x)}if(Uo(m))return b(h,p,m,x);if(Ro(m))return v(h,p,m,x);la(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,m),p.return=h,h=p):(n(h,p),p=Xs(m,h.mode,x),p.return=h,h=p),a(h)):n(h,p)}return k}var uo=bm(!0),xm=bm(!1),tl=Kn(null),nl=null,Yr=null,Zc=null;function Jc(){Zc=Yr=nl=null}function ef(e){var t=tl.current;ne(tl),e._currentValue=t}function Du(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ro(e,t){nl=e,Zc=Yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Qe=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(Zc!==e)if(e={context:e,memoizedValue:t,next:null},Yr===null){if(nl===null)throw Error(_(308));Yr=e,nl.dependencies={lanes:0,firstContext:e}}else Yr=Yr.next=e;return t}var ar=null;function tf(e){ar===null?ar=[e]:ar.push(e)}function wm(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,tf(t)):(n.next=o.next,o.next=n),t.interleaved=n,yn(e,r)}function yn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $n=!1;function nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function km(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(B&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,yn(e,n)}return o=r.interleaved,o===null?(t.next=t,tf(r)):(t.next=o.next,o.next=t),r.interleaved=t,yn(e,n)}function Ta(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bc(e,n)}}function $d(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rl(e,t,n,r){var o=e.updateQueue;$n=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;a=0,c=u=s=null,l=i;do{var d=l.lane,y=l.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,v=l;switch(d=t,y=n,v.tag){case 1:if(b=v.payload,typeof b=="function"){f=b.call(y,f,d);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=v.payload,d=typeof b=="function"?b.call(y,f,d):b,d==null)break e;f=le({},f,d);break e;case 2:$n=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,d=o.effects,d===null?o.effects=[l]:d.push(l))}else y={eventTime:y,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=y,s=f):c=c.next=y,a|=d;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;d=l,l=d.next,d.next=null,o.lastBaseUpdate=d,o.shared.pending=null}}while(1);if(c===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);gr|=a,e.lanes=a,e.memoizedState=f}}function zd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var Li={},en=Kn(Li),vi=Kn(Li),yi=Kn(Li);function lr(e){if(e===Li)throw Error(_(174));return e}function rf(e,t){switch(G(yi,t),G(vi,e),G(en,Li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vu(t,e)}ne(en),G(en,t)}function co(){ne(en),ne(vi),ne(yi)}function Sm(e){lr(yi.current);var t=lr(en.current),n=vu(t,e.type);t!==n&&(G(vi,e),G(en,n))}function of(e){vi.current===e&&(ne(en),ne(vi))}var ie=Kn(0);function ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hs=[];function af(){for(var e=0;e<Hs.length;e++)Hs[e]._workInProgressVersionPrimary=null;Hs.length=0}var Oa=wn.ReactCurrentDispatcher,Bs=wn.ReactCurrentBatchConfig,mr=0,ae=null,we=null,Oe=null,il=!1,ei=!1,bi=0,Wv=0;function Ie(){throw Error(_(321))}function lf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xt(e[n],t[n]))return!1;return!0}function sf(e,t,n,r,o,i){if(mr=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oa.current=e===null||e.memoizedState===null?Yv:Qv,e=n(r,o),ei){i=0;do{if(ei=!1,bi=0,25<=i)throw Error(_(301));i+=1,Oe=we=null,t.updateQueue=null,Oa.current=Gv,e=n(r,o)}while(ei)}if(Oa.current=al,t=we!==null&&we.next!==null,mr=0,Oe=we=ae=null,il=!1,t)throw Error(_(300));return e}function uf(){var e=bi!==0;return bi=0,e}function Kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ae.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function kt(){if(we===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Oe===null?ae.memoizedState:Oe.next;if(t!==null)Oe=t,we=e;else{if(e===null)throw Error(_(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Oe===null?ae.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function xi(e,t){return typeof t=="function"?t(e):t}function js(e){var t=kt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=we,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var c=u.lane;if((mr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,ae.lanes|=c,gr|=c}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,Xt(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,gr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Us(e){var t=kt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Xt(i,t.memoizedState)||(Qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Cm(){}function Pm(e,t){var n=ae,r=kt(),o=t(),i=!Xt(r.memoizedState,o);if(i&&(r.memoizedState=o,Qe=!0),r=r.queue,cf(Tm.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,wi(9,_m.bind(null,n,r,o,t),void 0,null),Re===null)throw Error(_(349));(mr&30)!==0||Em(n,t,o)}return o}function Em(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _m(e,t,n,r){t.value=n,t.getSnapshot=r,Om(t)&&Rm(e)}function Tm(e,t,n){return n(function(){Om(t)&&Rm(e)})}function Om(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xt(e,n)}catch{return!0}}function Rm(e){var t=yn(e,1);t!==null&&Wt(t,e,1,-1)}function Ld(e){var t=Kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=qv.bind(null,ae,e),[t.memoizedState,e]}function wi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mm(){return kt().memoizedState}function Ra(e,t,n,r){var o=Kt();ae.flags|=e,o.memoizedState=wi(1|t,n,void 0,r===void 0?null:r)}function Cl(e,t,n,r){var o=kt();r=r===void 0?null:r;var i=void 0;if(we!==null){var a=we.memoizedState;if(i=a.destroy,r!==null&&lf(r,a.deps)){o.memoizedState=wi(t,n,i,r);return}}ae.flags|=e,o.memoizedState=wi(1|t,n,i,r)}function Nd(e,t){return Ra(8390656,8,e,t)}function cf(e,t){return Cl(2048,8,e,t)}function $m(e,t){return Cl(4,2,e,t)}function zm(e,t){return Cl(4,4,e,t)}function Lm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nm(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4,4,Lm.bind(null,t,e),n)}function ff(){}function Am(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Dm(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Im(e,t,n){return(mr&21)===0?(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n):(Xt(n,t)||(n=Uh(),ae.lanes|=n,gr|=n,e.baseState=!0),t)}function Vv(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Bs.transition;Bs.transition={};try{e(!1),t()}finally{q=n,Bs.transition=r}}function Fm(){return kt().memoizedState}function Xv(e,t,n){var r=Xn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hm(e))Bm(t,n);else if(n=wm(e,t,n,r),n!==null){var o=We();Wt(n,e,r,o),jm(n,t,r)}}function qv(e,t,n){var r=Xn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hm(e))Bm(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,Xt(l,a)){var s=t.interleaved;s===null?(o.next=o,tf(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=wm(e,t,o,r),n!==null&&(o=We(),Wt(n,e,r,o),jm(n,t,r))}}function Hm(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Bm(e,t){ei=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jm(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bc(e,n)}}var al={readContext:wt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},Yv={readContext:wt,useCallback:function(e,t){return Kt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Nd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ra(4194308,4,Lm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ra(4,2,e,t)},useMemo:function(e,t){var n=Kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xv.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=Kt();return e={current:e},t.memoizedState=e},useState:Ld,useDebugValue:ff,useDeferredValue:function(e){return Kt().memoizedState=e},useTransition:function(){var e=Ld(!1),t=e[0];return e=Vv.bind(null,e[1]),Kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,o=Kt();if(oe){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Re===null)throw Error(_(349));(mr&30)!==0||Em(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Nd(Tm.bind(null,r,i,e),[e]),r.flags|=2048,wi(9,_m.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Kt(),t=Re.identifierPrefix;if(oe){var n=dn,r=fn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qv={readContext:wt,useCallback:Am,useContext:wt,useEffect:cf,useImperativeHandle:Nm,useInsertionEffect:$m,useLayoutEffect:zm,useMemo:Dm,useReducer:js,useRef:Mm,useState:function(){return js(xi)},useDebugValue:ff,useDeferredValue:function(e){var t=kt();return Im(t,we.memoizedState,e)},useTransition:function(){var e=js(xi)[0],t=kt().memoizedState;return[e,t]},useMutableSource:Cm,useSyncExternalStore:Pm,useId:Fm,unstable_isNewReconciler:!1},Gv={readContext:wt,useCallback:Am,useContext:wt,useEffect:cf,useImperativeHandle:Nm,useInsertionEffect:$m,useLayoutEffect:zm,useMemo:Dm,useReducer:Us,useRef:Mm,useState:function(){return Us(xi)},useDebugValue:ff,useDeferredValue:function(e){var t=kt();return we===null?t.memoizedState=e:Im(t,we.memoizedState,e)},useTransition:function(){var e=Us(xi)[0],t=kt().memoizedState;return[e,t]},useMutableSource:Cm,useSyncExternalStore:Pm,useId:Fm,unstable_isNewReconciler:!1};function Dt(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Iu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pl={isMounted:function(e){return(e=e._reactInternals)?kr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),o=Xn(e),i=pn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Wn(e,i,o),t!==null&&(Wt(t,e,o,r),Ta(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),o=Xn(e),i=pn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wn(e,i,o),t!==null&&(Wt(t,e,o,r),Ta(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=Xn(e),o=pn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Wn(e,o,r),t!==null&&(Wt(t,e,r,n),Ta(t,e,r))}};function Ad(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!pi(n,r)||!pi(o,i):!0}function Um(e,t,n){var r=!1,o=Qn,i=t.contextType;return typeof i=="object"&&i!==null?i=wt(i):(o=Ke(t)?pr:Be.current,r=t.contextTypes,i=(r=r!=null)?lo(e,o):Qn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Dd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pl.enqueueReplaceState(t,t.state,null)}function Fu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},nf(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=wt(i):(i=Ke(t)?pr:Be.current,o.context=lo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Iu(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Pl.enqueueReplaceState(o,o.state,null),rl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fo(e,t){try{var n="",r=t;do n+=C1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ws(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Hu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kv=typeof WeakMap=="function"?WeakMap:Map;function Wm(e,t,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,Gu=r),Hu(e,t)},n}function Vm(e,t,n){n=pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hu(e,t),typeof r!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=fy.bind(null,e,t,n),t.then(e,e))}function Fd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hd(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pn(-1,1),t.tag=2,Wn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Zv=wn.ReactCurrentOwner,Qe=!1;function Ue(e,t,n,r){t.child=e===null?xm(t,null,n,r):uo(t,e.child,n,r)}function Bd(e,t,n,r,o){n=n.render;var i=t.ref;return ro(t,o),r=sf(e,t,n,r,i,o),n=uf(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bn(e,t,o)):(oe&&n&&Qc(t),t.flags|=1,Ue(e,t,r,o),t.child)}function jd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!bf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Xm(e,t,i,r,o)):(e=La(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:pi,n(a,r)&&e.ref===t.ref)return bn(e,t,o)}return t.flags|=1,e=qn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Xm(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(pi(i,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,bn(e,t,o)}return Bu(e,t,n,r,o)}function qm(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Gr,it),it|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Gr,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,G(Gr,it),it|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,G(Gr,it),it|=r;return Ue(e,t,o,n),t.child}function Ym(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bu(e,t,n,r,o){var i=Ke(n)?pr:Be.current;return i=lo(t,i),ro(t,o),n=sf(e,t,n,r,i,o),r=uf(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bn(e,t,o)):(oe&&r&&Qc(t),t.flags|=1,Ue(e,t,n,o),t.child)}function Ud(e,t,n,r,o){if(Ke(n)){var i=!0;Za(t)}else i=!1;if(ro(t,o),t.stateNode===null)Ma(e,t),Um(t,n,r),Fu(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=Ke(n)?pr:Be.current,u=lo(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Dd(t,a,r,u),$n=!1;var d=t.memoizedState;a.state=d,rl(t,r,a,o),s=t.memoizedState,l!==r||d!==s||Ge.current||$n?(typeof c=="function"&&(Iu(t,n,c,r),s=t.memoizedState),(l=$n||Ad(t,n,l,r,d,s,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,km(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Dt(t.type,l),a.props=u,f=t.pendingProps,d=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=wt(s):(s=Ke(n)?pr:Be.current,s=lo(t,s));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||d!==s)&&Dd(t,a,r,s),$n=!1,d=t.memoizedState,a.state=d,rl(t,r,a,o);var b=t.memoizedState;l!==f||d!==b||Ge.current||$n?(typeof y=="function"&&(Iu(t,n,y,r),b=t.memoizedState),(u=$n||Ad(t,n,u,r,d,b,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return ju(e,t,n,r,i,o)}function ju(e,t,n,r,o,i){Ym(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Td(t,n,!1),bn(e,t,i);r=t.stateNode,Zv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=uo(t,e.child,null,i),t.child=uo(t,null,l,i)):Ue(e,t,l,i),t.memoizedState=r.state,o&&Td(t,n,!0),t.child}function Qm(e){var t=e.stateNode;t.pendingContext?_d(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_d(e,t.context,!1),rf(e,t.containerInfo)}function Wd(e,t,n,r,o){return so(),Kc(o),t.flags|=256,Ue(e,t,n,r),t.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Wu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gm(e,t,n){var r=t.pendingProps,o=ie.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(ie,o&1),e===null)return Au(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Tl(a,r,0,null),e=cr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Wu(n),t.memoizedState=Uu,e):df(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Jv(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=qn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=qn(l,i):(i=cr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Wu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Uu,r}return i=e.child,e=i.sibling,r=qn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function df(e,t){return t=Tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function sa(e,t,n,r){return r!==null&&Kc(r),uo(t,e.child,null,n),e=df(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jv(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Ws(Error(_(422))),sa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Tl({mode:"visible",children:r.children},o,0,null),i=cr(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&uo(t,e.child,null,a),t.child.memoizedState=Wu(a),t.memoizedState=Uu,i);if((t.mode&1)===0)return sa(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(_(419)),r=Ws(i,r,void 0),sa(e,t,a,r)}if(l=(a&e.childLanes)!==0,Qe||l){if(r=Re,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,yn(e,o),Wt(r,e,o,-1))}return yf(),r=Ws(Error(_(421))),sa(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=dy.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,at=Un(o.nextSibling),st=t,oe=!0,Bt=null,e!==null&&(gt[vt++]=fn,gt[vt++]=dn,gt[vt++]=hr,fn=e.id,dn=e.overflow,hr=t),t=df(t,r.children),t.flags|=4096,t)}function Vd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Du(e.return,t,n)}function Vs(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Km(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ue(e,t,r.children,n),r=ie.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vd(e,n,t);else if(e.tag===19)Vd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(ie,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ol(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Vs(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ol(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Vs(t,!0,n,null,i);break;case"together":Vs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ma(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ey(e,t,n){switch(t.tag){case 3:Qm(t),so();break;case 5:Sm(t);break;case 1:Ke(t.type)&&Za(t);break;case 4:rf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;G(tl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(ie,ie.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Gm(e,t,n):(G(ie,ie.current&1),e=bn(e,t,n),e!==null?e.sibling:null);G(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Km(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,qm(e,t,n)}return bn(e,t,n)}var Zm,Vu,Jm,e0;Zm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vu=function(){};Jm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,lr(en.current);var i=null;switch(n){case"input":o=pu(e,o),r=pu(e,r),i=[];break;case"select":o=le({},o,{value:void 0}),r=le({},r,{value:void 0}),i=[];break;case"textarea":o=gu(e,o),r=gu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ga)}yu(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ai.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ai.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ee("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};e0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ao(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ty(e,t,n){var r=t.pendingProps;switch(Gc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Ke(t.type)&&Ka(),Fe(t),null;case 3:return r=t.stateNode,co(),ne(Ge),ne(Be),af(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(aa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bt!==null&&(Ju(Bt),Bt=null))),Vu(e,t),Fe(t),null;case 5:of(t);var o=lr(yi.current);if(n=t.type,e!==null&&t.stateNode!=null)Jm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Fe(t),null}if(e=lr(en.current),aa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Zt]=t,r[gi]=i,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(o=0;o<Vo.length;o++)ee(Vo[o],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":ed(r,i),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ee("invalid",r);break;case"textarea":nd(r,i),ee("invalid",r)}yu(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ia(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ia(r.textContent,l,e),o=["children",""+l]):ai.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ee("scroll",r)}switch(n){case"input":Ki(r),td(r,i,!0);break;case"textarea":Ki(r),rd(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ga)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Th(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Zt]=t,e[gi]=r,Zm(e,t,!1,!1),t.stateNode=e;e:{switch(a=bu(n,r),n){case"dialog":ee("cancel",e),ee("close",e),o=r;break;case"iframe":case"object":case"embed":ee("load",e),o=r;break;case"video":case"audio":for(o=0;o<Vo.length;o++)ee(Vo[o],e);o=r;break;case"source":ee("error",e),o=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),o=r;break;case"details":ee("toggle",e),o=r;break;case"input":ed(e,r),o=pu(e,r),ee("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=le({},r,{value:void 0}),ee("invalid",e);break;case"textarea":nd(e,r),o=gu(e,r),ee("invalid",e);break;default:o=r}yu(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Mh(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Oh(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&li(e,s):typeof s=="number"&&li(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ai.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ee("scroll",e):s!=null&&Nc(e,i,s,a))}switch(n){case"input":Ki(e),td(e,r,!1);break;case"textarea":Ki(e),rd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)e0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=lr(yi.current),lr(en.current),aa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Zt]=t,(i=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:ia(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ia(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=t,t.stateNode=r}return Fe(t),null;case 13:if(ne(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&at!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ym(),so(),t.flags|=98560,i=!1;else if(i=aa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[Zt]=t}else so(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),i=!1}else Bt!==null&&(Ju(Bt),Bt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ie.current&1)!==0?Ce===0&&(Ce=3):yf())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return co(),Vu(e,t),e===null&&hi(t.stateNode.containerInfo),Fe(t),null;case 10:return ef(t.type._context),Fe(t),null;case 17:return Ke(t.type)&&Ka(),Fe(t),null;case 19:if(ne(ie),i=t.memoizedState,i===null)return Fe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Ao(i,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=ol(e),a!==null){for(t.flags|=128,Ao(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(ie,ie.current&1|2),t.child}e=e.sibling}i.tail!==null&&de()>po&&(t.flags|=128,r=!0,Ao(i,!1),t.lanes=4194304)}else{if(!r)if(e=ol(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ao(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!oe)return Fe(t),null}else 2*de()-i.renderingStartTime>po&&n!==1073741824&&(t.flags|=128,r=!0,Ao(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=de(),t.sibling=null,n=ie.current,G(ie,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return vf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(it&1073741824)!==0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function ny(e,t){switch(Gc(t),t.tag){case 1:return Ke(t.type)&&Ka(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return co(),ne(Ge),ne(Be),af(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return of(t),null;case 13:if(ne(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));so()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(ie),null;case 4:return co(),null;case 10:return ef(t.type._context),null;case 22:case 23:return vf(),null;case 24:return null;default:return null}}var ua=!1,He=!1,ry=typeof WeakSet=="function"?WeakSet:Set,$=null;function Qr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Xu(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Xd=!1;function oy(e,t){if(Ou=qa,e=im(),Yc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var y;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==i||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(y=f.firstChild)!==null;)d=f,f=y;for(;;){if(f===e)break t;if(d===n&&++u===o&&(l=a),d===i&&++c===r&&(s=a),(y=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ru={focusedElem:e,selectionRange:n},qa=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var v=b.memoizedProps,k=b.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:Dt(t.type,v),k);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(x){fe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return b=Xd,Xd=!1,b}function ti(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Xu(t,n,i)}o=o.next}while(o!==r)}}function El(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function t0(e){var t=e.alternate;t!==null&&(e.alternate=null,t0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Zt],delete t[gi],delete t[zu],delete t[Hv],delete t[Bv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function n0(e){return e.tag===5||e.tag===3||e.tag===4}function qd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||n0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ga));else if(r!==4&&(e=e.child,e!==null))for(Yu(e,t,n),e=e.sibling;e!==null;)Yu(e,t,n),e=e.sibling}function Qu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qu(e,t,n),e=e.sibling;e!==null;)Qu(e,t,n),e=e.sibling}var ze=null,It=!1;function _n(e,t,n){for(n=n.child;n!==null;)r0(e,t,n),n=n.sibling}function r0(e,t,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:He||Qr(n,t);case 6:var r=ze,o=It;ze=null,_n(e,t,n),ze=r,It=o,ze!==null&&(It?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(It?(e=ze,n=n.stateNode,e.nodeType===8?Is(e.parentNode,n):e.nodeType===1&&Is(e,n),fi(e)):Is(ze,n.stateNode));break;case 4:r=ze,o=It,ze=n.stateNode.containerInfo,It=!0,_n(e,t,n),ze=r,It=o;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Xu(n,t,a),o=o.next}while(o!==r)}_n(e,t,n);break;case 1:if(!He&&(Qr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){fe(n,t,l)}_n(e,t,n);break;case 21:_n(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,_n(e,t,n),He=r):_n(e,t,n);break;default:_n(e,t,n)}}function Yd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ry),t.forEach(function(r){var o=py.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,It=!1;break e;case 3:ze=l.stateNode.containerInfo,It=!0;break e;case 4:ze=l.stateNode.containerInfo,It=!0;break e}l=l.return}if(ze===null)throw Error(_(160));r0(i,a,o),ze=null,It=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){fe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)o0(t,e),t=t.sibling}function o0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Gt(e),r&4){try{ti(3,e,e.return),El(3,e)}catch(v){fe(e,e.return,v)}try{ti(5,e,e.return)}catch(v){fe(e,e.return,v)}}break;case 1:Nt(t,e),Gt(e),r&512&&n!==null&&Qr(n,n.return);break;case 5:if(Nt(t,e),Gt(e),r&512&&n!==null&&Qr(n,n.return),e.flags&32){var o=e.stateNode;try{li(o,"")}catch(v){fe(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Eh(o,i),bu(l,a);var u=bu(l,i);for(a=0;a<s.length;a+=2){var c=s[a],f=s[a+1];c==="style"?Mh(o,f):c==="dangerouslySetInnerHTML"?Oh(o,f):c==="children"?li(o,f):Nc(o,c,f,u)}switch(l){case"input":hu(o,i);break;case"textarea":_h(o,i);break;case"select":var d=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Jr(o,!!i.multiple,y,!1):d!==!!i.multiple&&(i.defaultValue!=null?Jr(o,!!i.multiple,i.defaultValue,!0):Jr(o,!!i.multiple,i.multiple?[]:"",!1))}o[gi]=i}catch(v){fe(e,e.return,v)}}break;case 6:if(Nt(t,e),Gt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){fe(e,e.return,v)}}break;case 3:if(Nt(t,e),Gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(v){fe(e,e.return,v)}break;case 4:Nt(t,e),Gt(e);break;case 13:Nt(t,e),Gt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(mf=de())),r&4&&Yd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(He=(u=He)||c,Nt(t,e),He=u):Nt(t,e),Gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for($=e,c=e.child;c!==null;){for(f=$=c;$!==null;){switch(d=$,y=d.child,d.tag){case 0:case 11:case 14:case 15:ti(4,d,d.return);break;case 1:Qr(d,d.return);var b=d.stateNode;if(typeof b.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(v){fe(r,n,v)}}break;case 5:Qr(d,d.return);break;case 22:if(d.memoizedState!==null){Gd(f);continue}}y!==null?(y.return=d,$=y):Gd(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Rh("display",a))}catch(v){fe(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){fe(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nt(t,e),Gt(e),r&4&&Yd(e);break;case 21:break;default:Nt(t,e),Gt(e)}}function Gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(n0(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(li(o,""),r.flags&=-33);var i=qd(e);Qu(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=qd(e);Yu(e,l,a);break;default:throw Error(_(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function iy(e,t,n){$=e,i0(e)}function i0(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||ua;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||He;l=ua;var u=He;if(ua=a,(He=s)&&!u)for($=o;$!==null;)a=$,s=a.child,a.tag===22&&a.memoizedState!==null?Kd(o):s!==null?(s.return=a,$=s):Kd(o);for(;i!==null;)$=i,i0(i),i=i.sibling;$=o,ua=l,He=u}Qd(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,$=i):Qd(e)}}function Qd(e){for(;$!==null;){var t=$;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:He||El(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Dt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&zd(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&fi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}He||t.flags&512&&qu(t)}catch(d){fe(t,t.return,d)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Gd(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Kd(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{El(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){fe(t,o,s)}}var i=t.return;try{qu(t)}catch(s){fe(t,i,s)}break;case 5:var a=t.return;try{qu(t)}catch(s){fe(t,a,s)}}}catch(s){fe(t,t.return,s)}if(t===e){$=null;break}var l=t.sibling;if(l!==null){l.return=t.return,$=l;break}$=t.return}}var ay=Math.ceil,ll=wn.ReactCurrentDispatcher,pf=wn.ReactCurrentOwner,xt=wn.ReactCurrentBatchConfig,B=0,Re=null,ve=null,Le=0,it=0,Gr=Kn(0),Ce=0,ki=null,gr=0,_l=0,hf=0,ni=null,Ye=null,mf=0,po=1/0,ln=null,sl=!1,Gu=null,Vn=null,ca=!1,Dn=null,ul=0,ri=0,Ku=null,$a=-1,za=0;function We(){return(B&6)!==0?de():$a!==-1?$a:$a=de()}function Xn(e){return(e.mode&1)===0?1:(B&2)!==0&&Le!==0?Le&-Le:Uv.transition!==null?(za===0&&(za=Uh()),za):(e=q,e!==0||(e=window.event,e=e===void 0?16:Gh(e.type)),e)}function Wt(e,t,n,r){if(50<ri)throw ri=0,Ku=null,Error(_(185));Mi(e,n,r),((B&2)===0||e!==Re)&&(e===Re&&((B&2)===0&&(_l|=n),Ce===4&&Ln(e,Le)),Ze(e,r),n===1&&B===0&&(t.mode&1)===0&&(po=de()+500,Sl&&Zn()))}function Ze(e,t){var n=e.callbackNode;U1(e,t);var r=Xa(e,e===Re?Le:0);if(r===0)n!==null&&ad(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ad(n),t===1)e.tag===0?jv(Zd.bind(null,e)):mm(Zd.bind(null,e)),Iv(function(){(B&6)===0&&Zn()}),n=null;else{switch(Wh(r)){case 1:n=Hc;break;case 4:n=Bh;break;case 16:n=Va;break;case 536870912:n=jh;break;default:n=Va}n=p0(n,a0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function a0(e,t){if($a=-1,za=0,(B&6)!==0)throw Error(_(327));var n=e.callbackNode;if(oo()&&e.callbackNode!==n)return null;var r=Xa(e,e===Re?Le:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=cl(e,r);else{t=r;var o=B;B|=2;var i=s0();(Re!==e||Le!==t)&&(ln=null,po=de()+500,ur(e,t));do try{uy();break}catch(l){l0(e,l)}while(1);Jc(),ll.current=i,B=o,ve!==null?t=0:(Re=null,Le=0,t=Ce)}if(t!==0){if(t===2&&(o=Cu(e),o!==0&&(r=o,t=Zu(e,o))),t===1)throw n=ki,ur(e,0),Ln(e,r),Ze(e,de()),n;if(t===6)Ln(e,r);else{if(o=e.current.alternate,(r&30)===0&&!ly(o)&&(t=cl(e,r),t===2&&(i=Cu(e),i!==0&&(r=i,t=Zu(e,i))),t===1))throw n=ki,ur(e,0),Ln(e,r),Ze(e,de()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:rr(e,Ye,ln);break;case 3:if(Ln(e,r),(r&130023424)===r&&(t=mf+500-de(),10<t)){if(Xa(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=$u(rr.bind(null,e,Ye,ln),t);break}rr(e,Ye,ln);break;case 4:if(Ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Ut(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ay(r/1960))-r,10<r){e.timeoutHandle=$u(rr.bind(null,e,Ye,ln),r);break}rr(e,Ye,ln);break;case 5:rr(e,Ye,ln);break;default:throw Error(_(329))}}}return Ze(e,de()),e.callbackNode===n?a0.bind(null,e):null}function Zu(e,t){var n=ni;return e.current.memoizedState.isDehydrated&&(ur(e,t).flags|=256),e=cl(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Ju(t)),e}function Ju(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function ly(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Xt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t){for(t&=~hf,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ut(t),r=1<<n;e[n]=-1,t&=~r}}function Zd(e){if((B&6)!==0)throw Error(_(327));oo();var t=Xa(e,0);if((t&1)===0)return Ze(e,de()),null;var n=cl(e,t);if(e.tag!==0&&n===2){var r=Cu(e);r!==0&&(t=r,n=Zu(e,r))}if(n===1)throw n=ki,ur(e,0),Ln(e,t),Ze(e,de()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,Ye,ln),Ze(e,de()),null}function gf(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(po=de()+500,Sl&&Zn())}}function vr(e){Dn!==null&&Dn.tag===0&&(B&6)===0&&oo();var t=B;B|=1;var n=xt.transition,r=q;try{if(xt.transition=null,q=1,e)return e()}finally{q=r,xt.transition=n,B=t,(B&6)===0&&Zn()}}function vf(){it=Gr.current,ne(Gr)}function ur(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dv(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Gc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ka();break;case 3:co(),ne(Ge),ne(Be),af();break;case 5:of(r);break;case 4:co();break;case 13:ne(ie);break;case 19:ne(ie);break;case 10:ef(r.type._context);break;case 22:case 23:vf()}n=n.return}if(Re=e,ve=e=qn(e.current,null),Le=it=t,Ce=0,ki=null,hf=_l=gr=0,Ye=ni=null,ar!==null){for(t=0;t<ar.length;t++)if(n=ar[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}ar=null}return e}function l0(e,t){do{var n=ve;try{if(Jc(),Oa.current=al,il){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}il=!1}if(mr=0,Oe=we=ae=null,ei=!1,bi=0,pf.current=null,n===null||n.return===null){Ce=1,ki=t,ve=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=Le,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Fd(a);if(y!==null){y.flags&=-257,Hd(y,a,l,i,t),y.mode&1&&Id(i,u,t),t=y,s=u;var b=t.updateQueue;if(b===null){var v=new Set;v.add(s),t.updateQueue=v}else b.add(s);break e}else{if((t&1)===0){Id(i,u,t),yf();break e}s=Error(_(426))}}else if(oe&&l.mode&1){var k=Fd(a);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),Hd(k,a,l,i,t),Kc(fo(s,l));break e}}i=s=fo(s,l),Ce!==4&&(Ce=2),ni===null?ni=[i]:ni.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Wm(i,s,t);$d(i,h);break e;case 1:l=s;var p=i.type,m=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vn===null||!Vn.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Vm(i,l,t);$d(i,x);break e}}i=i.return}while(i!==null)}c0(n)}catch(S){t=S,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(1)}function s0(){var e=ll.current;return ll.current=al,e===null?al:e}function yf(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Re===null||(gr&268435455)===0&&(_l&268435455)===0||Ln(Re,Le)}function cl(e,t){var n=B;B|=2;var r=s0();(Re!==e||Le!==t)&&(ln=null,ur(e,t));do try{sy();break}catch(o){l0(e,o)}while(1);if(Jc(),B=n,ll.current=r,ve!==null)throw Error(_(261));return Re=null,Le=0,Ce}function sy(){for(;ve!==null;)u0(ve)}function uy(){for(;ve!==null&&!L1();)u0(ve)}function u0(e){var t=d0(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?c0(e):ve=t,pf.current=null}function c0(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=ty(n,t,it),n!==null){ve=n;return}}else{if(n=ny(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,ve=null;return}}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);Ce===0&&(Ce=5)}function rr(e,t,n){var r=q,o=xt.transition;try{xt.transition=null,q=1,cy(e,t,n,r)}finally{xt.transition=o,q=r}return null}function cy(e,t,n,r){do oo();while(Dn!==null);if((B&6)!==0)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(W1(e,i),e===Re&&(ve=Re=null,Le=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ca||(ca=!0,p0(Va,function(){return oo(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=xt.transition,xt.transition=null;var a=q;q=1;var l=B;B|=4,pf.current=null,oy(e,n),o0(n,e),Rv(Ru),qa=!!Ou,Ru=Ou=null,e.current=n,iy(n),N1(),B=l,q=a,xt.transition=i}else e.current=n;if(ca&&(ca=!1,Dn=e,ul=o),i=e.pendingLanes,i===0&&(Vn=null),I1(n.stateNode),Ze(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(sl)throw sl=!1,e=Gu,Gu=null,e;return(ul&1)!==0&&e.tag!==0&&oo(),i=e.pendingLanes,(i&1)!==0?e===Ku?ri++:(ri=0,Ku=e):ri=0,Zn(),null}function oo(){if(Dn!==null){var e=Wh(ul),t=xt.transition,n=q;try{if(xt.transition=null,q=16>e?16:e,Dn===null)var r=!1;else{if(e=Dn,Dn=null,ul=0,(B&6)!==0)throw Error(_(331));var o=B;for(B|=4,$=e.current;$!==null;){var i=$,a=i.child;if(($.flags&16)!==0){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:ti(8,c,i)}var f=c.child;if(f!==null)f.return=c,$=f;else for(;$!==null;){c=$;var d=c.sibling,y=c.return;if(t0(c),c===u){$=null;break}if(d!==null){d.return=y,$=d;break}$=y}}}var b=i.alternate;if(b!==null){var v=b.child;if(v!==null){b.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}$=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,$=a;else e:for(;$!==null;){if(i=$,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:ti(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,$=h;break e}$=i.return}}var p=e.current;for($=p;$!==null;){a=$;var m=a.child;if((a.subtreeFlags&2064)!==0&&m!==null)m.return=a,$=m;else e:for(a=p;$!==null;){if(l=$,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:El(9,l)}}catch(S){fe(l,l.return,S)}if(l===a){$=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,$=x;break e}$=l.return}}if(B=o,Zn(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(yl,e)}catch{}r=!0}return r}finally{q=n,xt.transition=t}}return!1}function Jd(e,t,n){t=fo(n,t),t=Wm(e,t,1),e=Wn(e,t,1),t=We(),e!==null&&(Mi(e,1,t),Ze(e,t))}function fe(e,t,n){if(e.tag===3)Jd(e,e,n);else for(;t!==null;){if(t.tag===3){Jd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vn===null||!Vn.has(r))){e=fo(n,e),e=Vm(t,e,1),t=Wn(t,e,1),e=We(),t!==null&&(Mi(t,1,e),Ze(t,e));break}}t=t.return}}function fy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Le&n)===n&&(Ce===4||Ce===3&&(Le&130023424)===Le&&500>de()-mf?ur(e,0):hf|=n),Ze(e,t)}function f0(e,t){t===0&&((e.mode&1)===0?t=1:(t=ea,ea<<=1,(ea&130023424)===0&&(ea=4194304)));var n=We();e=yn(e,t),e!==null&&(Mi(e,t,n),Ze(e,n))}function dy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),f0(e,n)}function py(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),f0(e,n)}var d0;d0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Qe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Qe=!1,ey(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,oe&&(t.flags&1048576)!==0&&gm(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ma(e,t),e=t.pendingProps;var o=lo(t,Be.current);ro(t,n),o=sf(null,t,r,e,o,n);var i=uf();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(i=!0,Za(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,nf(t),o.updater=Pl,t.stateNode=o,o._reactInternals=t,Fu(t,r,e,n),t=ju(null,t,r,!0,i,n)):(t.tag=0,oe&&i&&Qc(t),Ue(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ma(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=my(r),e=Dt(r,e),o){case 0:t=Bu(null,t,r,e,n);break e;case 1:t=Ud(null,t,r,e,n);break e;case 11:t=Bd(null,t,r,e,n);break e;case 14:t=jd(null,t,r,Dt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Dt(r,o),Bu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Dt(r,o),Ud(e,t,r,o,n);case 3:e:{if(Qm(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,km(e,t),rl(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=fo(Error(_(423)),t),t=Wd(e,t,r,n,o);break e}else if(r!==o){o=fo(Error(_(424)),t),t=Wd(e,t,r,n,o);break e}else for(at=Un(t.stateNode.containerInfo.firstChild),st=t,oe=!0,Bt=null,n=xm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),r===o){t=bn(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return Sm(t),e===null&&Au(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Mu(r,o)?a=null:i!==null&&Mu(r,i)&&(t.flags|=32),Ym(e,t),Ue(e,t,a,n),t.child;case 6:return e===null&&Au(t),null;case 13:return Gm(e,t,n);case 4:return rf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=uo(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Dt(r,o),Bd(e,t,r,o,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,G(tl,r._currentValue),r._currentValue=a,i!==null)if(Xt(i.value,a)){if(i.children===o.children&&!Ge.current){t=bn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=pn(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Du(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(_(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Du(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ue(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ro(t,n),o=wt(o),r=r(o),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,o=Dt(r,t.pendingProps),o=Dt(r.type,o),jd(e,t,r,o,n);case 15:return Xm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Dt(r,o),Ma(e,t),t.tag=1,Ke(r)?(e=!0,Za(t)):e=!1,ro(t,n),Um(t,r,o),Fu(t,r,o,n),ju(null,t,r,!0,e,n);case 19:return Km(e,t,n);case 22:return qm(e,t,n)}throw Error(_(156,t.tag))};function p0(e,t){return Hh(e,t)}function hy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new hy(e,t,n,r)}function bf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function my(e){if(typeof e=="function")return bf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dc)return 11;if(e===Ic)return 14}return 2}function qn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function La(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")bf(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Hr:return cr(n.children,o,i,t);case Ac:a=8,o|=8;break;case uu:return e=yt(12,n,t,o|2),e.elementType=uu,e.lanes=i,e;case cu:return e=yt(13,n,t,o),e.elementType=cu,e.lanes=i,e;case fu:return e=yt(19,n,t,o),e.elementType=fu,e.lanes=i,e;case Sh:return Tl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wh:a=10;break e;case kh:a=9;break e;case Dc:a=11;break e;case Ic:a=14;break e;case Mn:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=yt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function cr(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Tl(e,t,n,r){return e=yt(22,e,r,t),e.elementType=Sh,e.lanes=n,e.stateNode={isHidden:!1},e}function Xs(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function qs(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gy(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_s(0),this.expirationTimes=_s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_s(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function xf(e,t,n,r,o,i,a,l,s){return e=new gy(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=yt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(i),e}function vy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function h0(e){if(!e)return Qn;e=e._reactInternals;e:{if(kr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ke(n))return hm(e,n,t)}return t}function m0(e,t,n,r,o,i,a,l,s){return e=xf(n,r,!0,e,o,i,a,l,s),e.context=h0(null),n=e.current,r=We(),o=Xn(n),i=pn(r,o),i.callback=t!=null?t:null,Wn(n,i,o),e.current.lanes=o,Mi(e,o,r),Ze(e,r),e}function Ol(e,t,n,r){var o=t.current,i=We(),a=Xn(o);return n=h0(n),t.context===null?t.context=n:t.pendingContext=n,t=pn(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wn(o,t,a),e!==null&&(Wt(e,o,a,i),Ta(e,o,a)),a}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ep(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wf(e,t){ep(e,t),(e=e.alternate)&&ep(e,t)}function yy(){return null}var g0=typeof reportError=="function"?reportError:function(e){console.error(e)};function kf(e){this._internalRoot=e}Rl.prototype.render=kf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ol(e,t,null,null)};Rl.prototype.unmount=kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vr(function(){Ol(null,e,null,null)}),t[vn]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=qh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zn.length&&t!==0&&t<zn[n].priority;n++);zn.splice(n,0,e),n===0&&Qh(e)}};function Sf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tp(){}function by(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=fl(a);i.call(u)}}var a=m0(t,r,e,0,null,!1,!1,"",tp);return e._reactRootContainer=a,e[vn]=a.current,hi(e.nodeType===8?e.parentNode:e),vr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=fl(s);l.call(u)}}var s=xf(e,0,!1,null,null,!1,!1,"",tp);return e._reactRootContainer=s,e[vn]=s.current,hi(e.nodeType===8?e.parentNode:e),vr(function(){Ol(t,s,n,r)}),s}function $l(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=fl(a);l.call(s)}}Ol(t,a,e,o)}else a=by(n,t,e,o,r);return fl(a)}Vh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wo(t.pendingLanes);n!==0&&(Bc(t,n|1),Ze(t,de()),(B&6)===0&&(po=de()+500,Zn()))}break;case 13:vr(function(){var r=yn(e,1);if(r!==null){var o=We();Wt(r,e,1,o)}}),wf(e,1)}};jc=function(e){if(e.tag===13){var t=yn(e,134217728);if(t!==null){var n=We();Wt(t,e,134217728,n)}wf(e,134217728)}};Xh=function(e){if(e.tag===13){var t=Xn(e),n=yn(e,t);if(n!==null){var r=We();Wt(n,e,t,r)}wf(e,t)}};qh=function(){return q};Yh=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};wu=function(e,t,n){switch(t){case"input":if(hu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=kl(r);if(!o)throw Error(_(90));Ph(r),hu(r,o)}}}break;case"textarea":_h(e,n);break;case"select":t=n.value,t!=null&&Jr(e,!!n.multiple,t,!1)}};Lh=gf;Nh=vr;var xy={usingClientEntryPoint:!1,Events:[zi,Wr,kl,$h,zh,gf]},Do={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wy={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ih(e),e===null?null:e.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{yl=fa.inject(wy),Jt=fa}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xy;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sf(t))throw Error(_(200));return vy(e,t,null,n)};ct.createRoot=function(e,t){if(!Sf(e))throw Error(_(299));var n=!1,r="",o=g0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=xf(e,1,!1,null,null,n,!1,r,o),e[vn]=t.current,hi(e.nodeType===8?e.parentNode:e),new kf(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Ih(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return vr(e)};ct.hydrate=function(e,t,n){if(!Ml(t))throw Error(_(200));return $l(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!Sf(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=g0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=m0(t,null,e,1,n!=null?n:null,o,!1,i,a),e[vn]=t.current,hi(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Rl(t)};ct.render=function(e,t,n){if(!Ml(t))throw Error(_(200));return $l(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!Ml(e))throw Error(_(40));return e._reactRootContainer?(vr(function(){$l(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1};ct.unstable_batchedUpdates=gf;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ml(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return $l(e,t,n,!1,r)};ct.version="18.3.1-next-f1338f8080-20240426";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ct})(Tc);var v0,np=Tc.exports;v0=np.createRoot,np.hydrateRoot;const ky="modulepreload",Sy=function(e){return"/"+e},rp={},zl=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Sy(i),i in rp)return;rp[i]=!0;const a=i.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let c=o.length-1;c>=0;c--){const f=o[c];if(f.href===i&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":ky,a||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),a)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};var Ll={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy=g.exports,Py=Symbol.for("react.element"),Ey=Symbol.for("react.fragment"),_y=Object.prototype.hasOwnProperty,Ty=Cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Oy={key:!0,ref:!0,__self:!0,__source:!0};function y0(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)_y.call(t,r)&&!Oy.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Py,type:e,key:i,ref:a,props:o,_owner:Ty.current}}Nl.Fragment=Ey;Nl.jsx=y0;Nl.jsxs=y0;(function(e){e.exports=Nl})(Ll);const Ry=Ll.exports.Fragment,M=Ll.exports.jsx,bt=Ll.exports.jsxs;function Pe(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}Pe(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var X=function(){return X=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},X.apply(this,arguments)};function dl(e){return dl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dl(e)}var My=/^\s+/,$y=/\s+$/;function z(e,t){if(t=t||{},(e=e||"")instanceof z)return e;if(!(this instanceof z))return new z(e,t);var n=function(r){var o={r:0,g:0,b:0},i=1,a=null,l=null,s=null,u=!1,c=!1;typeof r=="string"&&(r=function(b){b=b.replace(My,"").replace($y,"").toLowerCase();var v,k=!1;if(ec[b])b=ec[b],k=!0;else if(b=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(v=At.rgb.exec(b))?{r:v[1],g:v[2],b:v[3]}:(v=At.rgba.exec(b))?{r:v[1],g:v[2],b:v[3],a:v[4]}:(v=At.hsl.exec(b))?{h:v[1],s:v[2],l:v[3]}:(v=At.hsla.exec(b))?{h:v[1],s:v[2],l:v[3],a:v[4]}:(v=At.hsv.exec(b))?{h:v[1],s:v[2],v:v[3]}:(v=At.hsva.exec(b))?{h:v[1],s:v[2],v:v[3],a:v[4]}:(v=At.hex8.exec(b))?{r:ot(v[1]),g:ot(v[2]),b:ot(v[3]),a:up(v[4]),format:k?"name":"hex8"}:(v=At.hex6.exec(b))?{r:ot(v[1]),g:ot(v[2]),b:ot(v[3]),format:k?"name":"hex"}:(v=At.hex4.exec(b))?{r:ot(v[1]+""+v[1]),g:ot(v[2]+""+v[2]),b:ot(v[3]+""+v[3]),a:up(v[4]+""+v[4]),format:k?"name":"hex8"}:(v=At.hex3.exec(b))?{r:ot(v[1]+""+v[1]),g:ot(v[2]+""+v[2]),b:ot(v[3]+""+v[3]),format:k?"name":"hex"}:!1}(r)),dl(r)=="object"&&(an(r.r)&&an(r.g)&&an(r.b)?(f=r.r,d=r.g,y=r.b,o={r:255*re(f,255),g:255*re(d,255),b:255*re(y,255)},u=!0,c=String(r.r).substr(-1)==="%"?"prgb":"rgb"):an(r.h)&&an(r.s)&&an(r.v)?(a=Xo(r.s),l=Xo(r.v),o=function(b,v,k){b=6*re(b,360),v=re(v,100),k=re(k,100);var h=Math.floor(b),p=b-h,m=k*(1-v),x=k*(1-p*v),S=k*(1-(1-p)*v),C=h%6,w=[k,x,m,m,S,k][C],P=[S,k,k,x,m,m][C],O=[m,m,S,k,k,x][C];return{r:255*w,g:255*P,b:255*O}}(r.h,a,l),u=!0,c="hsv"):an(r.h)&&an(r.s)&&an(r.l)&&(a=Xo(r.s),s=Xo(r.l),o=function(b,v,k){var h,p,m;function x(w,P,O){return O<0&&(O+=1),O>1&&(O-=1),O<1/6?w+6*(P-w)*O:O<.5?P:O<2/3?w+(P-w)*(2/3-O)*6:w}if(b=re(b,360),v=re(v,100),k=re(k,100),v===0)h=p=m=k;else{var S=k<.5?k*(1+v):k+v-k*v,C=2*k-S;h=x(C,S,b+1/3),p=x(C,S,b),m=x(C,S,b-1/3)}return{r:255*h,g:255*p,b:255*m}}(r.h,a,s),u=!0,c="hsl"),r.hasOwnProperty("a")&&(i=r.a));var f,d,y;return i=b0(i),{ok:u,format:r.format||c,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:i}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function op(e,t,n){e=re(e,255),t=re(t,255),n=re(n,255);var r,o,i=Math.max(e,t,n),a=Math.min(e,t,n),l=(i+a)/2;if(i==a)r=o=0;else{var s=i-a;switch(o=l>.5?s/(2-i-a):s/(i+a),i){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,l}}function ip(e,t,n){e=re(e,255),t=re(t,255),n=re(n,255);var r,o,i=Math.max(e,t,n),a=Math.min(e,t,n),l=i,s=i-a;if(o=i===0?0:s/i,i==a)r=0;else{switch(i){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,v:l}}function ap(e,t,n,r){var o=[jt(Math.round(e).toString(16)),jt(Math.round(t).toString(16)),jt(Math.round(n).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function lp(e,t,n,r){return[jt(x0(r)),jt(Math.round(e).toString(16)),jt(Math.round(t).toString(16)),jt(Math.round(n).toString(16))].join("")}function zy(e,t){t=t===0?0:t||10;var n=z(e).toHsl();return n.s-=t/100,n.s=Al(n.s),z(n)}function Ly(e,t){t=t===0?0:t||10;var n=z(e).toHsl();return n.s+=t/100,n.s=Al(n.s),z(n)}function Ny(e){return z(e).desaturate(100)}function Ay(e,t){t=t===0?0:t||10;var n=z(e).toHsl();return n.l+=t/100,n.l=Al(n.l),z(n)}function Dy(e,t){t=t===0?0:t||10;var n=z(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),z(n)}function Iy(e,t){t=t===0?0:t||10;var n=z(e).toHsl();return n.l-=t/100,n.l=Al(n.l),z(n)}function Fy(e,t){var n=z(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,z(n)}function Hy(e){var t=z(e).toHsl();return t.h=(t.h+180)%360,z(t)}function sp(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=z(e).toHsl(),r=[z(e)],o=360/t,i=1;i<t;i++)r.push(z({h:(n.h+i*o)%360,s:n.s,l:n.l}));return r}function By(e){var t=z(e).toHsl(),n=t.h;return[z(e),z({h:(n+72)%360,s:t.s,l:t.l}),z({h:(n+216)%360,s:t.s,l:t.l})]}function jy(e,t,n){t=t||6,n=n||30;var r=z(e).toHsl(),o=360/n,i=[z(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(z(r));return i}function Uy(e,t){t=t||6;for(var n=z(e).toHsv(),r=n.h,o=n.s,i=n.v,a=[],l=1/t;t--;)a.push(z({h:r,s:o,v:i})),i=(i+l)%1;return a}z.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=b0(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=ip(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=ip(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=op(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=op(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return ap(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(t,n,r,o,i){var a=[jt(Math.round(t).toString(16)),jt(Math.round(n).toString(16)),jt(Math.round(r).toString(16)),jt(x0(o))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*re(this._r,255))+"%",g:Math.round(100*re(this._g,255))+"%",b:Math.round(100*re(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*re(this._r,255))+"%, "+Math.round(100*re(this._g,255))+"%, "+Math.round(100*re(this._b,255))+"%)":"rgba("+Math.round(100*re(this._r,255))+"%, "+Math.round(100*re(this._g,255))+"%, "+Math.round(100*re(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Wy[ap(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+lp(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=z(e);n="#"+lp(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return z(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(Ay,arguments)},brighten:function(){return this._applyModification(Dy,arguments)},darken:function(){return this._applyModification(Iy,arguments)},desaturate:function(){return this._applyModification(zy,arguments)},saturate:function(){return this._applyModification(Ly,arguments)},greyscale:function(){return this._applyModification(Ny,arguments)},spin:function(){return this._applyModification(Fy,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(jy,arguments)},complement:function(){return this._applyCombination(Hy,arguments)},monochromatic:function(){return this._applyCombination(Uy,arguments)},splitcomplement:function(){return this._applyCombination(By,arguments)},triad:function(){return this._applyCombination(sp,[3])},tetrad:function(){return this._applyCombination(sp,[4])}},z.fromRatio=function(e,t){if(dl(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r==="a"?e[r]:Xo(e[r]));e=n}return z(e,t)},z.equals=function(e,t){return!(!e||!t)&&z(e).toRgbString()==z(t).toRgbString()},z.random=function(){return z.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},z.mix=function(e,t,n){n=n===0?0:n||50;var r=z(e).toRgb(),o=z(t).toRgb(),i=n/100;return z({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},z.readability=function(e,t){var n=z(e),r=z(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},z.isReadable=function(e,t,n){var r,o,i=z.readability(e,t);switch(o=!1,(r=function(a){var l,s;return l=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(a.size||"small").toLowerCase(),l!=="AA"&&l!=="AAA"&&(l="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:l,size:s}}(n)).level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7}return o},z.mostReadable=function(e,t,n){var r,o,i,a,l=null,s=0;o=(n=n||{}).includeFallbackColors,i=n.level,a=n.size;for(var u=0;u<t.length;u++)(r=z.readability(e,t[u]))>s&&(s=r,l=z(t[u]));return z.isReadable(e,l,{level:i,size:a})||!o?l:(n.includeFallbackColors=!1,z.mostReadable(e,["#fff","#000"],n))};var ec=z.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Wy=z.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(ec);function b0(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function re(e,t){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function Al(e){return Math.min(1,Math.max(0,e))}function ot(e){return parseInt(e,16)}function jt(e){return e.length==1?"0"+e:""+e}function Xo(e){return e<=1&&(e=100*e+"%"),e}function x0(e){return Math.round(255*parseFloat(e)).toString(16)}function up(e){return ot(e)/255}var Tn,da,pa,At=(da="[\\s|\\(]+("+(Tn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Tn+")[,|\\s]+("+Tn+")\\s*\\)?",pa="[\\s|\\(]+("+Tn+")[,|\\s]+("+Tn+")[,|\\s]+("+Tn+")[,|\\s]+("+Tn+")\\s*\\)?",{CSS_UNIT:new RegExp(Tn),rgb:new RegExp("rgb"+da),rgba:new RegExp("rgba"+pa),hsl:new RegExp("hsl"+da),hsla:new RegExp("hsla"+pa),hsv:new RegExp("hsv"+da),hsva:new RegExp("hsva"+pa),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function an(e){return!!At.CSS_UNIT.exec(e)}var Dl=function(e,t){var n=(typeof e=="string"?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=n,o=parseFloat(t),i=o+r*(o/5)*-1;return(i==0||i<=Number.EPSILON)&&(i=.1),{animationPeriod:i+"s"}}return{animationPeriod:t}},Il=function(e,t){var n=e||{},r="";switch(t){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(n.fontSize){var i=n.fontSize;o=function(a,l){var s={};for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&l.indexOf(u)<0&&(s[u]=a[u]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function"){var c=0;for(u=Object.getOwnPropertySymbols(a);c<u.length;c++)l.indexOf(u[c])<0&&Object.prototype.propertyIsEnumerable.call(a,u[c])&&(s[u[c]]=a[u[c]])}return s}(n,["fontSize"]),r=i}return{fontSize:r,styles:o}},Vy={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Fl=function(e){var t=e.className,n=e.text,r=e.textColor,o=e.staticText,i=e.style;return n?M("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:X(X(X({},o&&Vy),r&&{color:r,mixBlendMode:"unset"}),i&&i),children:typeof n=="string"&&n.length?n:"loading"}):null},Ni="rgb(50, 205, 50)";function Hl(e,t){if(t===void 0&&(t=0),e.length===0)throw new Error("Input array cannot be empty!");var n=[];return function r(o,i){return i===void 0&&(i=0),n.push.apply(n,o),n.length<i&&r(n,i),n.slice(0,i)}(e,t)}Pe(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);z(Ni).toRgb();Array.from({length:4},function(e,t){return"--atom-phase".concat(t+1,"-rgb")});Pe(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--commet-phase".concat(t+1,"-color")});Pe(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")});function Ys(e){return e&&e.Math===Math&&e}Pe(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Ys(typeof window=="object"&&window)||Ys(typeof self=="object"&&self)||Ys(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")});Pe(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")});Pe(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")});Pe(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]});Pe(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--four-square-phase".concat(t+1,"-color")});Pe(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--mosaic-phase".concat(t+1,"-color")});Pe(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--riple-phase".concat(t+1,"-color")});Pe(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var Mr=Array.from({length:4},function(e,t){return"--TD-pulsate-phase".concat(t+1,"-color")}),Xy=function(e){var t,n=Il(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Dl(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var c=Hl(s,Mr.length),f=0;f<c.length&&!(f>=4);f++)u[Mr[f]]=c[f];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var d=0;d<Mr.length;d++)u[Mr[d]]=s}catch(y){for(y instanceof Error?console.warn("[".concat(y.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),d=0;d<Mr.length;d++)u[Mr[d]]=Ni}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return bt("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:X(X(X(X(X({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading",children:[bt("span",{className:"rli-d-i-b pulsate-indicator",children:[M("span",{className:"rli-d-i-b pulsate-dot"}),M("span",{className:"rli-d-i-b pulsate-dot"}),M("span",{className:"rli-d-i-b pulsate-dot"})]}),M(Fl,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})]})};Pe(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var $r=Array.from({length:4},function(e,t){return"--TD-brick-stack-phase".concat(t+1,"-color")}),qy=function(e){var t,n=Il(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Dl(e==null?void 0:e.speedPlus,"1s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var c=Hl(s,$r.length),f=0;f<c.length&&!(f>=4);f++)u[$r[f]]=c[f];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var d=0;d<$r.length;d++)u[$r[d]]=s}catch(y){for(y instanceof Error?console.warn("[".concat(y.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),d=0;d<$r.length;d++)u[$r[d]]=Ni}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return bt("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:X(X(X(X(X({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading",children:[M("span",{className:"rli-d-i-b brick-stack-indicator",children:M("span",{className:"rli-d-i-b brick-stack"})}),M(Fl,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})]})};Pe(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var zr=Array.from({length:4},function(e,t){return"--TD-bob-phase".concat(t+1,"-color")}),Yy=function(e){var t,n=Il(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Dl(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var c=Hl(s,zr.length),f=0;f<c.length&&!(f>=4);f++)u[zr[f]]=c[f];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var d=0;d<zr.length;d++)u[zr[d]]=s}catch(y){for(y instanceof Error?console.warn("[".concat(y.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),d=0;d<zr.length;d++)u[zr[d]]=Ni}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return bt("span",{className:"rli-d-i-b bob-rli-bounding-box",style:X(X(X(X(X({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading",children:[M("span",{className:"bob-indicator",children:M("span",{className:"bobbing"})}),M(Fl,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})]})};Pe(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var Lr=Array.from({length:4},function(e,t){return"--TD-bounce-phase".concat(t+1,"-color")}),Qy=function(e){var t,n=Il(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Dl(e==null?void 0:e.speedPlus,"0.5s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var c=Hl(s,Lr.length),f=0;f<c.length&&!(f>=4);f++)u[Lr[f]]=c[f];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var d=0;d<Lr.length;d++)u[Lr[d]]=s}catch{for(d=0;d<Lr.length;d++)u[Lr[d]]=Ni}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return bt("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:X(X(X(X(X({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),children:[bt("span",{className:"wrapper",children:[bt("span",{className:"group",children:[M("span",{className:"rli-d-i-b dot"}),M("span",{className:"rli-d-i-b dot"}),M("span",{className:"rli-d-i-b dot"})]}),bt("span",{className:"group",children:[M("span",{className:"rli-d-i-b shadow"}),M("span",{className:"rli-d-i-b shadow"}),M("span",{className:"rli-d-i-b shadow"})]})]}),M(Fl,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor,style:{marginTop:"2px"}})]})},Gy=function(e){var t=Object(e).variant,n=t===void 0?"pulsate":t;return n==="pulsate"?Se.createElement(Xy,X({},e)):n==="brick-stack"?Se.createElement(qy,X({},e)):n==="bob"?M(Yy,{...X({},e)}):n==="bounce"?M(Qy,{...X({},e)}):null};Pe(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--shape-phase".concat(t+1,"-color")});Pe(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--trophySpin-phase".concat(t+1,"-color")});Pe(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--slab-phase".concat(t+1,"-color")});Pe(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--life-line-phase".concat(t+1,"-color")});var cp="popstate";function Ky(e={}){function t(o,i){let{pathname:a="/",search:l="",hash:s=""}=Sr(o.location.hash.substring(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),tc("",{pathname:a,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let a=o.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:Si(i))}function r(o,i){qt(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(i)})`)}return Jy(t,n,r,e)}function be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Zy(){return Math.random().toString(36).substring(2,10)}function fp(e,t){return{usr:e.state,key:e.key,idx:t}}function tc(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Sr(t):t,state:n,key:t&&t.key||r||Zy()}}function Si({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Sr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Jy(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l="POP",s=null,u=c();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function c(){return(a.state||{idx:null}).idx}function f(){l="POP";let k=c(),h=k==null?null:k-u;u=k,s&&s({action:l,location:v.location,delta:h})}function d(k,h){l="PUSH";let p=tc(v.location,k,h);n&&n(p,k),u=c()+1;let m=fp(p,u),x=v.createHref(p);try{a.pushState(m,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(x)}i&&s&&s({action:l,location:v.location,delta:1})}function y(k,h){l="REPLACE";let p=tc(v.location,k,h);n&&n(p,k),u=c();let m=fp(p,u),x=v.createHref(p);a.replaceState(m,"",x),i&&s&&s({action:l,location:v.location,delta:0})}function b(k){return eb(k)}let v={get action(){return l},get location(){return e(o,a)},listen(k){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(cp,f),s=k,()=>{o.removeEventListener(cp,f),s=null}},createHref(k){return t(o,k)},createURL:b,encodeLocation(k){let h=b(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:y,go(k){return a.go(k)}};return v}function eb(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),be(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Si(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function w0(e,t,n="/"){return tb(e,t,n,!1)}function tb(e,t,n,r){let o=typeof t=="string"?Sr(t):t,i=xn(o.pathname||"/",n);if(i==null)return null;let a=k0(e);nb(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=pb(i);l=fb(a[s],u,r)}return l}function k0(e,t=[],n=[],r="",o=!1){let i=(a,l,s=o,u)=>{let c={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(r)&&s)return;be(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let f=hn([r,c.relativePath]),d=n.concat(c);a.children&&a.children.length>0&&(be(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),k0(a.children,t,d,f,s)),!(a.path==null&&!a.index)&&t.push({path:f,score:ub(f,a.index),routesMeta:d})};return e.forEach((a,l)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,l);else for(let u of S0(a.path))i(a,l,!0,u)}),t}function S0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=S0(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function nb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:cb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var rb=/^:[\w-]+$/,ob=3,ib=2,ab=1,lb=10,sb=-2,dp=e=>e==="*";function ub(e,t){let n=e.split("/"),r=n.length;return n.some(dp)&&(r+=sb),t&&(r+=ib),n.filter(o=>!dp(o)).reduce((o,i)=>o+(rb.test(i)?ob:i===""?ab:lb),r)}function cb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function fb(e,t,n=!1){let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,c=i==="/"?t:t.slice(i.length)||"/",f=pl({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c),d=s.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=pl({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},c)),!f)return null;Object.assign(o,f.params),a.push({params:o,pathname:hn([i,f.pathname]),pathnameBase:vb(hn([i,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(i=hn([i,f.pathnameBase]))}return a}function pl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=db(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,{paramName:c,isOptional:f},d)=>{if(c==="*"){let b=l[d]||"";a=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const y=l[d];return f&&!y?u[c]=void 0:u[c]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function db(e,t=!1,n=!0){qt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function pb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function xn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var hb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function mb(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Sr(e):e,i;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?i=pp(n.substring(1),"/"):i=pp(n,t)):i=t,{pathname:i,search:yb(r),hash:bb(o)}}function pp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Qs(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function C0(e){let t=gb(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function P0(e,t,n,r=!1){let o;typeof e=="string"?o=Sr(e):(o={...e},be(!o.pathname||!o.pathname.includes("?"),Qs("?","pathname","search",o)),be(!o.pathname||!o.pathname.includes("#"),Qs("#","pathname","hash",o)),be(!o.search||!o.search.includes("#"),Qs("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;o.pathname=d.join("/")}l=f>=0?t[f]:"/"}let s=mb(o,l),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}var hn=e=>e.join("/").replace(/\/\/+/g,"/"),vb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,xb=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function wb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function kb(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var E0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _0(e,t){let n=e;if(typeof n!="string"||!hb.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(E0)try{let i=new URL(window.location.href),a=n.startsWith("//")?new URL(i.protocol+n):new URL(n),l=xn(a.pathname,t);a.origin===i.origin&&l!=null?n=l+a.search+a.hash:o=!0}catch{qt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Sb=["POST","PUT","PATCH","DELETE"];[...Sb];var bo=g.exports.createContext(null);bo.displayName="DataRouter";var Bl=g.exports.createContext(null);Bl.displayName="DataRouterState";var Cb=g.exports.createContext(!1),T0=g.exports.createContext({isTransitioning:!1});T0.displayName="ViewTransition";var Pb=g.exports.createContext(new Map);Pb.displayName="Fetchers";var Eb=g.exports.createContext(null);Eb.displayName="Await";var Pt=g.exports.createContext(null);Pt.displayName="Navigation";var Ai=g.exports.createContext(null);Ai.displayName="Location";var tn=g.exports.createContext({outlet:null,matches:[],isDataRoute:!1});tn.displayName="Route";var Cf=g.exports.createContext(null);Cf.displayName="RouteError";var O0="REACT_ROUTER_ERROR",_b="REDIRECT",Tb="ROUTE_ERROR_RESPONSE";function Ob(e){if(e.startsWith(`${O0}:${_b}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Rb(e){if(e.startsWith(`${O0}:${Tb}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new xb(t.status,t.statusText,t.data)}catch{}}function Mb(e,{relative:t}={}){be(Di(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=g.exports.useContext(Pt),{hash:o,pathname:i,search:a}=Ii(e,{relative:t}),l=i;return n!=="/"&&(l=i==="/"?n:hn([n,i])),r.createHref({pathname:l,search:a,hash:o})}function Di(){return g.exports.useContext(Ai)!=null}function Cr(){return be(Di(),"useLocation() may be used only in the context of a <Router> component."),g.exports.useContext(Ai).location}var R0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function M0(e){g.exports.useContext(Pt).static||g.exports.useLayoutEffect(e)}function $b(){let{isDataRoute:e}=g.exports.useContext(tn);return e?qb():zb()}function zb(){be(Di(),"useNavigate() may be used only in the context of a <Router> component.");let e=g.exports.useContext(bo),{basename:t,navigator:n}=g.exports.useContext(Pt),{matches:r}=g.exports.useContext(tn),{pathname:o}=Cr(),i=JSON.stringify(C0(r)),a=g.exports.useRef(!1);return M0(()=>{a.current=!0}),g.exports.useCallback((s,u={})=>{if(qt(a.current,R0),!a.current)return;if(typeof s=="number"){n.go(s);return}let c=P0(s,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:hn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,i,o,e])}var Lb=g.exports.createContext(null);function Nb(e){let t=g.exports.useContext(tn).outlet;return g.exports.useMemo(()=>t&&g.exports.createElement(Lb.Provider,{value:e},t),[t,e])}function Ii(e,{relative:t}={}){let{matches:n}=g.exports.useContext(tn),{pathname:r}=Cr(),o=JSON.stringify(C0(n));return g.exports.useMemo(()=>P0(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function Ab(e,t){return $0(e,t)}function $0(e,t,n,r,o){var p;be(Di(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=g.exports.useContext(Pt),{matches:a}=g.exports.useContext(tn),l=a[a.length-1],s=l?l.params:{},u=l?l.pathname:"/",c=l?l.pathnameBase:"/",f=l&&l.route;{let m=f&&f.path||"";L0(u,!f||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let d=Cr(),y;if(t){let m=typeof t=="string"?Sr(t):t;be(c==="/"||((p=m.pathname)==null?void 0:p.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${m.pathname}" was given in the \`location\` prop.`),y=m}else y=d;let b=y.pathname||"/",v=b;if(c!=="/"){let m=c.replace(/^\//,"").split("/");v="/"+b.replace(/^\//,"").split("/").slice(m.length).join("/")}let k=w0(e,{pathname:v});qt(f||k!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),qt(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Bb(k&&k.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:hn([c,i.encodeLocation?i.encodeLocation(m.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?c:hn([c,i.encodeLocation?i.encodeLocation(m.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathnameBase])})),a,n,r,o);return t&&h?g.exports.createElement(Ai.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},h):h}function Db(){let e=Xb(),t=wb(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=g.exports.createElement(g.exports.Fragment,null,g.exports.createElement("p",null,"\u{1F4BF} Hey developer \u{1F44B}"),g.exports.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",g.exports.createElement("code",{style:i},"ErrorBoundary")," or"," ",g.exports.createElement("code",{style:i},"errorElement")," prop on your route.")),g.exports.createElement(g.exports.Fragment,null,g.exports.createElement("h2",null,"Unexpected Application Error!"),g.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?g.exports.createElement("pre",{style:o},n):null,a)}var Ib=g.exports.createElement(Db,null),z0=class extends g.exports.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=Rb(e.digest);n&&(e=n)}let t=e!==void 0?g.exports.createElement(tn.Provider,{value:this.props.routeContext},g.exports.createElement(Cf.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?g.exports.createElement(Fb,{error:e},t):t}};z0.contextType=Cb;var Gs=new WeakMap;function Fb({children:e,error:t}){let{basename:n}=g.exports.useContext(Pt);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=Ob(t.digest);if(r){let o=Gs.get(t);if(o)throw o;let i=_0(r.location,n);if(E0&&!Gs.get(t))if(i.isExternal||r.reloadDocument)window.location.href=i.absoluteURL||i.to;else{const a=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:r.replace}));throw Gs.set(t,a),a}return g.exports.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Hb({routeContext:e,match:t,children:n}){let r=g.exports.useContext(bo);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),g.exports.createElement(tn.Provider,{value:e},n)}function Bb(e,t=[],n=null,r=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=n==null?void 0:n.errors;if(a!=null){let c=i.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);be(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let l=!1,s=-1;if(n)for(let c=0;c<i.length;c++){let f=i[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(s=c),f.route.id){let{loaderData:d,errors:y}=n,b=f.route.loader&&!d.hasOwnProperty(f.route.id)&&(!y||y[f.route.id]===void 0);if(f.route.lazy||b){l=!0,s>=0?i=i.slice(0,s+1):i=[i[0]];break}}}let u=n&&r?(c,f)=>{var d,y,b;r(c,{location:n.location,params:(b=(y=(d=n.matches)==null?void 0:d[0])==null?void 0:y.params)!=null?b:{},unstable_pattern:kb(n.matches),errorInfo:f})}:void 0;return i.reduceRight((c,f,d)=>{let y,b=!1,v=null,k=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||Ib,l&&(s<0&&d===0?(L0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,k=null):s===d&&(b=!0,k=f.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,d+1)),p=()=>{let m;return y?m=v:b?m=k:f.route.Component?m=g.exports.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=c,g.exports.createElement(Hb,{match:f,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?g.exports.createElement(z0,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):p()},null)}function Pf(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jb(e){let t=g.exports.useContext(bo);return be(t,Pf(e)),t}function Ub(e){let t=g.exports.useContext(Bl);return be(t,Pf(e)),t}function Wb(e){let t=g.exports.useContext(tn);return be(t,Pf(e)),t}function Ef(e){let t=Wb(e),n=t.matches[t.matches.length-1];return be(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Vb(){return Ef("useRouteId")}function Xb(){var r;let e=g.exports.useContext(Cf),t=Ub("useRouteError"),n=Ef("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function qb(){let{router:e}=jb("useNavigate"),t=Ef("useNavigate"),n=g.exports.useRef(!1);return M0(()=>{n.current=!0}),g.exports.useCallback(async(o,i={})=>{qt(n.current,R0),n.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...i}))},[e,t])}var hp={};function L0(e,t,n){!t&&!hp[e]&&(hp[e]=!0,qt(!1,n))}var Yb="useOptimistic";vh[Yb];g.exports.memo(Qb);function Qb({routes:e,future:t,state:n,onError:r}){return $0(e,void 0,n,r,t)}function Gb(e){return Nb(e.context)}function Kb({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:i=!1,unstable_useTransitions:a}){be(!Di(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),s=g.exports.useMemo(()=>({basename:l,navigator:o,static:i,unstable_useTransitions:a,future:{}}),[l,o,i,a]);typeof n=="string"&&(n=Sr(n));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:y="default"}=n,b=g.exports.useMemo(()=>{let v=xn(u,l);return v==null?null:{location:{pathname:v,search:c,hash:f,state:d,key:y},navigationType:r}},[l,u,c,f,d,y,r]);return qt(b!=null,`<Router basename="${l}"> is not able to match the URL "${u}${c}${f}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:g.exports.createElement(Pt.Provider,{value:s},g.exports.createElement(Ai.Provider,{children:t,value:b}))}var Na="get",Aa="application/x-www-form-urlencoded";function jl(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Zb(e){return jl(e)&&e.tagName.toLowerCase()==="button"}function Jb(e){return jl(e)&&e.tagName.toLowerCase()==="form"}function ex(e){return jl(e)&&e.tagName.toLowerCase()==="input"}function tx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nx(e,t){return e.button===0&&(!t||t==="_self")&&!tx(e)}var ha=null;function rx(){if(ha===null)try{new FormData(document.createElement("form"),0),ha=!1}catch{ha=!0}return ha}var ox=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ks(e){return e!=null&&!ox.has(e)?(qt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Aa}"`),null):e}function ix(e,t){let n,r,o,i,a;if(Jb(e)){let l=e.getAttribute("action");r=l?xn(l,t):null,n=e.getAttribute("method")||Na,o=Ks(e.getAttribute("enctype"))||Aa,i=new FormData(e)}else if(Zb(e)||ex(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||l.getAttribute("action");if(r=s?xn(s,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||Na,o=Ks(e.getAttribute("formenctype"))||Ks(l.getAttribute("enctype"))||Aa,i=new FormData(l,e),!rx()){let{name:u,type:c,value:f}=e;if(c==="image"){let d=u?`${u}.`:"";i.append(`${d}x`,"0"),i.append(`${d}y`,"0")}else u&&i.append(u,f)}}else{if(jl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Na,r=null,o=Aa,a=e}return i&&o==="text/plain"&&(a=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _f(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ax(e,t,n,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:t&&xn(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function lx(e,t){if(e.id in t)return t[e.id];try{let n=await zl(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sx(e){return e!=null&&typeof e.page=="string"}function ux(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function cx(e,t,n){let r=await Promise.all(e.map(async o=>{let i=t.routes[o.route.id];if(i){let a=await lx(i,n);return a.links?a.links():[]}return[]}));return hx(r.flat(1).filter(ux).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function mp(e,t,n,r,o,i){let a=(s,u)=>n[u]?s.route.id!==n[u].route.id:!0,l=(s,u)=>{var c;return n[u].pathname!==s.pathname||((c=n[u].route.path)==null?void 0:c.endsWith("*"))&&n[u].params["*"]!==s.params["*"]};return i==="assets"?t.filter((s,u)=>a(s,u)||l(s,u)):i==="data"?t.filter((s,u)=>{var f;let c=r.routes[s.route.id];if(!c||!c.hasLoader)return!1;if(a(s,u)||l(s,u))return!0;if(s.route.shouldRevalidate){let d=s.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function fx(e,t,{includeHydrateFallback:n}={}){return dx(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let i=[o.module];return o.clientActionModule&&(i=i.concat(o.clientActionModule)),o.clientLoaderModule&&(i=i.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(i=i.concat(o.hydrateFallbackModule)),o.imports&&(i=i.concat(o.imports)),i}).flat(1))}function dx(e){return[...new Set(e)]}function px(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function hx(e,t){let n=new Set,r=new Set(t);return e.reduce((o,i)=>{if(t&&!sx(i)&&i.as==="script"&&i.href&&r.has(i.href))return o;let l=JSON.stringify(px(i));return n.has(l)||(n.add(l),o.push({key:l,link:i})),o},[])}function N0(){let e=g.exports.useContext(bo);return _f(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function mx(){let e=g.exports.useContext(Bl);return _f(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Tf=g.exports.createContext(void 0);Tf.displayName="FrameworkContext";function A0(){let e=g.exports.useContext(Tf);return _f(e,"You must render this element inside a <HydratedRouter> element"),e}function gx(e,t){let n=g.exports.useContext(Tf),[r,o]=g.exports.useState(!1),[i,a]=g.exports.useState(!1),{onFocus:l,onBlur:s,onMouseEnter:u,onMouseLeave:c,onTouchStart:f}=t,d=g.exports.useRef(null);g.exports.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let v=h=>{h.forEach(p=>{a(p.isIntersecting)})},k=new IntersectionObserver(v,{threshold:.5});return d.current&&k.observe(d.current),()=>{k.disconnect()}}},[e]),g.exports.useEffect(()=>{if(r){let v=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(v)}}},[r]);let y=()=>{o(!0)},b=()=>{o(!1),a(!1)};return n?e!=="intent"?[i,d,{}]:[i,d,{onFocus:Io(l,y),onBlur:Io(s,b),onMouseEnter:Io(u,y),onMouseLeave:Io(c,b),onTouchStart:Io(f,y)}]:[!1,d,{}]}function Io(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function vx({page:e,...t}){let{router:n}=N0(),r=g.exports.useMemo(()=>w0(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?g.exports.createElement(bx,{page:e,matches:r,...t}):null}function yx(e){let{manifest:t,routeModules:n}=A0(),[r,o]=g.exports.useState([]);return g.exports.useEffect(()=>{let i=!1;return cx(e,t,n).then(a=>{i||o(a)}),()=>{i=!0}},[e,t,n]),r}function bx({page:e,matches:t,...n}){let r=Cr(),{future:o,manifest:i,routeModules:a}=A0(),{basename:l}=N0(),{loaderData:s,matches:u}=mx(),c=g.exports.useMemo(()=>mp(e,t,u,i,r,"data"),[e,t,u,i,r]),f=g.exports.useMemo(()=>mp(e,t,u,i,r,"assets"),[e,t,u,i,r]),d=g.exports.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,k=!1;if(t.forEach(p=>{var x;let m=i.routes[p.route.id];!m||!m.hasLoader||(!c.some(S=>S.route.id===p.route.id)&&p.route.id in s&&((x=a[p.route.id])==null?void 0:x.shouldRevalidate)||m.hasClientLoader?k=!0:v.add(p.route.id))}),v.size===0)return[];let h=ax(e,l,o.unstable_trailingSlashAwareDataRequests,"data");return k&&v.size>0&&h.searchParams.set("_routes",t.filter(p=>v.has(p.route.id)).map(p=>p.route.id).join(",")),[h.pathname+h.search]},[l,o.unstable_trailingSlashAwareDataRequests,s,r,i,c,t,e,a]),y=g.exports.useMemo(()=>fx(f,i),[f,i]),b=yx(f);return g.exports.createElement(g.exports.Fragment,null,d.map(v=>g.exports.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),y.map(v=>g.exports.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),b.map(({key:v,link:k})=>{var h;return g.exports.createElement("link",{key:v,nonce:n.nonce,...k,crossOrigin:(h=k.crossOrigin)!=null?h:n.crossOrigin})}))}function xx(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var wx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{wx&&(window.__reactRouterVersion="7.13.0")}catch{}function kx({basename:e,children:t,unstable_useTransitions:n,window:r}){let o=g.exports.useRef();o.current==null&&(o.current=Ky({window:r,v5Compat:!0}));let i=o.current,[a,l]=g.exports.useState({action:i.action,location:i.location}),s=g.exports.useCallback(u=>{n===!1?l(u):g.exports.startTransition(()=>l(u))},[n]);return g.exports.useLayoutEffect(()=>i.listen(s),[i,s]),g.exports.createElement(Kb,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:i,unstable_useTransitions:n})}var D0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I0=g.exports.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:c,viewTransition:f,unstable_defaultShouldRevalidate:d,...y},b){let{basename:v,unstable_useTransitions:k}=g.exports.useContext(Pt),h=typeof u=="string"&&D0.test(u),p=_0(u,v);u=p.to;let m=Mb(u,{relative:o}),[x,S,C]=gx(r,y),w=Ex(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:o,viewTransition:f,unstable_defaultShouldRevalidate:d,unstable_useTransitions:k});function P(R){t&&t(R),R.defaultPrevented||w(R)}let O=g.exports.createElement("a",{...y,...C,href:p.absoluteURL||m,onClick:p.isExternal||i?t:P,ref:xx(b,S),target:s,"data-discover":!h&&n==="render"?"true":void 0});return x&&!h?g.exports.createElement(g.exports.Fragment,null,O,g.exports.createElement(vx,{page:m})):O});I0.displayName="Link";var Sx=g.exports.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:i,to:a,viewTransition:l,children:s,...u},c){let f=Ii(a,{relative:u.relative}),d=Cr(),y=g.exports.useContext(Bl),{navigator:b,basename:v}=g.exports.useContext(Pt),k=y!=null&&Mx(f)&&l===!0,h=b.encodeLocation?b.encodeLocation(f).pathname:f.pathname,p=d.pathname,m=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(p=p.toLowerCase(),m=m?m.toLowerCase():null,h=h.toLowerCase()),m&&v&&(m=xn(m,v)||m);const x=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let S=p===h||!o&&p.startsWith(h)&&p.charAt(x)==="/",C=m!=null&&(m===h||!o&&m.startsWith(h)&&m.charAt(h.length)==="/"),w={isActive:S,isPending:C,isTransitioning:k},P=S?t:void 0,O;typeof r=="function"?O=r(w):O=[r,S?"active":null,C?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let R=typeof i=="function"?i(w):i;return g.exports.createElement(I0,{...u,"aria-current":P,className:O,ref:c,style:R,to:a,viewTransition:l},typeof s=="function"?s(w):s)});Sx.displayName="NavLink";var Cx=g.exports.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:i,method:a=Na,action:l,onSubmit:s,relative:u,preventScrollReset:c,viewTransition:f,unstable_defaultShouldRevalidate:d,...y},b)=>{let{unstable_useTransitions:v}=g.exports.useContext(Pt),k=Ox(),h=Rx(l,{relative:u}),p=a.toLowerCase()==="get"?"get":"post",m=typeof l=="string"&&D0.test(l),x=S=>{if(s&&s(S),S.defaultPrevented)return;S.preventDefault();let C=S.nativeEvent.submitter,w=(C==null?void 0:C.getAttribute("formmethod"))||a,P=()=>k(C||S.currentTarget,{fetcherKey:t,method:w,navigate:n,replace:o,state:i,relative:u,preventScrollReset:c,viewTransition:f,unstable_defaultShouldRevalidate:d});v&&n!==!1?g.exports.startTransition(()=>P()):P()};return g.exports.createElement("form",{ref:b,method:p,action:h,onSubmit:r?s:x,...y,"data-discover":!m&&e==="render"?"true":void 0})});Cx.displayName="Form";function Px(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function F0(e){let t=g.exports.useContext(bo);return be(t,Px(e)),t}function Ex(e,{target:t,replace:n,state:r,preventScrollReset:o,relative:i,viewTransition:a,unstable_defaultShouldRevalidate:l,unstable_useTransitions:s}={}){let u=$b(),c=Cr(),f=Ii(e,{relative:i});return g.exports.useCallback(d=>{if(nx(d,t)){d.preventDefault();let y=n!==void 0?n:Si(c)===Si(f),b=()=>u(e,{replace:y,state:r,preventScrollReset:o,relative:i,viewTransition:a,unstable_defaultShouldRevalidate:l});s?g.exports.startTransition(()=>b()):b()}},[c,u,f,n,r,t,e,o,i,a,l,s])}var _x=0,Tx=()=>`__${String(++_x)}__`;function Ox(){let{router:e}=F0("useSubmit"),{basename:t}=g.exports.useContext(Pt),n=Vb(),r=e.fetch,o=e.navigate;return g.exports.useCallback(async(i,a={})=>{let{action:l,method:s,encType:u,formData:c,body:f}=ix(i,t);if(a.navigate===!1){let d=a.fetcherKey||Tx();await r(d,n,a.action||l,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:f,formMethod:a.method||s,formEncType:a.encType||u,flushSync:a.flushSync})}else await o(a.action||l,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:f,formMethod:a.method||s,formEncType:a.encType||u,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,o,t,n])}function Rx(e,{relative:t}={}){let{basename:n}=g.exports.useContext(Pt),r=g.exports.useContext(tn);be(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),i={...Ii(e||".",{relative:t})},a=Cr();if(e==null){i.search=a.search;let l=new URLSearchParams(i.search),s=l.getAll("index");if(s.some(c=>c==="")){l.delete("index"),s.filter(f=>f).forEach(f=>l.append("index",f));let c=l.toString();i.search=c?`?${c}`:""}}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:hn([n,i.pathname])),Si(i)}function Mx(e,{relative:t}={}){let n=g.exports.useContext(T0);be(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=F0("useViewTransitionState"),o=Ii(e,{relative:t});if(!n.isTransitioning)return!1;let i=xn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=xn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return pl(o.pathname,a)!=null||pl(o.pathname,i)!=null}function $x({children:e}){return M("article",{className:"h-screen w-screen relative",children:e})}const zx=g.exports.lazy(()=>zl(()=>import("./Home.957b2c2d.js"),["assets/Home.957b2c2d.js","assets/main.0bfabbfb.js"])),Lx=g.exports.lazy(()=>zl(()=>import("./News.70903bda.js"),[])),Nx=g.exports.lazy(()=>zl(()=>import("./Stories.aa3f2c18.js"),["assets/Stories.aa3f2c18.js","assets/main.0bfabbfb.js"]));function Ax(){const e=M(Gy,{color:"#FFFF",size:"medium"});return Ab([{element:M($x,{children:M(g.exports.Suspense,{fallback:e,children:M(Gb,{})})}),children:[{element:M(zx,{}),index:!0},{element:M(Nx,{}),path:"story/:id"},{element:M(Lx,{}),path:"news/:id"}]}])}function lt(e){const t=g.exports.useRef(e);return t.current=e,g.exports.useCallback((...r)=>{var o;return(o=t.current)==null?void 0:o.call(t,...r)},[])}function St(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}const gp=St()?g.exports.useLayoutEffect:g.exports.useEffect,yr=(e,t)=>{const n=g.exports.useRef(!0);gp(()=>e(n.current),t),gp(()=>(n.current=!1,()=>{n.current=!0}),[])},Ek=(e,t)=>{yr(n=>{if(!n)return e()},t)},nc=e=>{const t=g.exports.useRef(!1),[n,r]=g.exports.useState(e);g.exports.useEffect(()=>(t.current=!1,()=>{t.current=!0}),[]);function o(i,a){a&&t.current||r(i)}return[n,o]};var Da={exports:{}},Y={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of=Symbol.for("react.element"),Rf=Symbol.for("react.portal"),Ul=Symbol.for("react.fragment"),Wl=Symbol.for("react.strict_mode"),Vl=Symbol.for("react.profiler"),Xl=Symbol.for("react.provider"),ql=Symbol.for("react.context"),Dx=Symbol.for("react.server_context"),Yl=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),Kl=Symbol.for("react.memo"),Zl=Symbol.for("react.lazy"),Ix=Symbol.for("react.offscreen"),H0;H0=Symbol.for("react.module.reference");function Et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Of:switch(e=e.type,e){case Ul:case Vl:case Wl:case Ql:case Gl:return e;default:switch(e=e&&e.$$typeof,e){case Dx:case ql:case Yl:case Zl:case Kl:case Xl:return e;default:return t}}case Rf:return t}}}Y.ContextConsumer=ql;Y.ContextProvider=Xl;Y.Element=Of;Y.ForwardRef=Yl;Y.Fragment=Ul;Y.Lazy=Zl;Y.Memo=Kl;Y.Portal=Rf;Y.Profiler=Vl;Y.StrictMode=Wl;Y.Suspense=Ql;Y.SuspenseList=Gl;Y.isAsyncMode=function(){return!1};Y.isConcurrentMode=function(){return!1};Y.isContextConsumer=function(e){return Et(e)===ql};Y.isContextProvider=function(e){return Et(e)===Xl};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Of};Y.isForwardRef=function(e){return Et(e)===Yl};Y.isFragment=function(e){return Et(e)===Ul};Y.isLazy=function(e){return Et(e)===Zl};Y.isMemo=function(e){return Et(e)===Kl};Y.isPortal=function(e){return Et(e)===Rf};Y.isProfiler=function(e){return Et(e)===Vl};Y.isStrictMode=function(e){return Et(e)===Wl};Y.isSuspense=function(e){return Et(e)===Ql};Y.isSuspenseList=function(e){return Et(e)===Gl};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ul||e===Vl||e===Wl||e===Ql||e===Gl||e===Ix||typeof e=="object"&&e!==null&&(e.$$typeof===Zl||e.$$typeof===Kl||e.$$typeof===Xl||e.$$typeof===ql||e.$$typeof===Yl||e.$$typeof===H0||e.getModuleId!==void 0)};Y.typeOf=Et;(function(e){e.exports=Y})(Da);function Mf(e,t,n){const r=g.exports.useRef({});return(!("value"in r.current)||n(r.current.condition,t))&&(r.current.value=e(),r.current.condition=t),r.current.value}const Fx=Symbol.for("react.element"),Hx=Symbol.for("react.transitional.element"),Bx=Symbol.for("react.fragment");function B0(e){return e&&typeof e=="object"&&(e.$$typeof===Fx||e.$$typeof===Hx)&&e.type===Bx}const jx=Number(g.exports.version.split(".")[0]),Ux=(e,t)=>{typeof e=="function"?e(t):typeof e=="object"&&e&&"current"in e&&(e.current=t)},j0=(...e)=>{const t=e.filter(Boolean);return t.length<=1?t[0]:n=>{e.forEach(r=>{Ux(r,n)})}},U0=(...e)=>Mf(()=>j0(...e),e,(t,n)=>t.length!==n.length||t.every((r,o)=>r!==n[o])),$f=e=>{var n,r;if(!e)return!1;if(W0(e)&&jx>=19)return!0;const t=Da.exports.isMemo(e)?e.type.type:e.type;return!(typeof t=="function"&&!((n=t.prototype)!=null&&n.render)&&t.$$typeof!==Da.exports.ForwardRef||typeof e=="function"&&!((r=e.prototype)!=null&&r.render)&&e.$$typeof!==Da.exports.ForwardRef)};function W0(e){return g.exports.isValidElement(e)&&!B0(e)}const zf=e=>{if(e&&W0(e)){const t=e;return t.props.propertyIsEnumerable("ref")?t.props.ref:t.ref}return null};function rc(e,t){let n=e;for(let r=0;r<t.length;r+=1){if(n==null)return;n=n[t[r]]}return n}function V0(e,t,n,r){if(!t.length)return n;const[o,...i]=t;let a;return!e&&typeof o=="number"?a=[]:Array.isArray(e)?a=[...e]:a={...e},r&&n===void 0&&i.length===1?delete a[o][i[0]]:a[o]=V0(a[o],i,n,r),a}function Zs(e,t,n,r=!1){return t.length&&r&&n===void 0&&!rc(e,t.slice(0,-1))?e:V0(e,t,n,r)}function Wx(e){return typeof e=="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype}function vp(e){return Array.isArray(e)?[]:{}}const Vx=typeof Reflect>"u"?Object.keys:Reflect.ownKeys;function Xx(e,t={}){const{prepareArray:n}=t,r=n||(()=>[]);let o=vp(e[0]);return e.forEach(i=>{function a(l,s){const u=new Set(s),c=rc(i,l),f=Array.isArray(c);if(f||Wx(c)){if(!u.has(c)){u.add(c);const d=rc(o,l);f?o=Zs(o,l,r(d,c)):(!d||typeof d!="object")&&(o=Zs(o,l,vp(c))),Vx(c).forEach(y=>{Object.getOwnPropertyDescriptor(c,y).enumerable&&a([...l,y],u)})}}else o=Zs(o,l,c)}a([])}),o}function qx(...e){return Xx(e)}let oc={};const Yx=e=>{};function Qx(e,t){}function Gx(e,t){}function Kx(){oc={}}function X0(e,t,n){!t&&!oc[n]&&(e(!1,n),oc[n]=!0)}function Jl(e,t){X0(Qx,e,t)}function Zx(e,t){X0(Gx,e,t)}Jl.preMessage=Yx;Jl.resetWarned=Kx;Jl.noteOnce=Zx;function ic(e,t={}){let n=[];return Se.Children.forEach(e,r=>{r==null&&!t.keepEmpty||(Array.isArray(r)?n=n.concat(ic(r)):B0(r)&&r.props?n=n.concat(ic(r.props.children,t)):n.push(r))}),n}function Jx(){}const e2=g.exports.createContext({}),t2=()=>{const e=()=>{};return e.deprecated=Jx,e};function hl(e){return e instanceof HTMLElement||e instanceof SVGElement}function q0(e){return e&&typeof e=="object"&&hl(e.nativeElement)?e.nativeElement:hl(e)?e:null}const ac=g.exports.createContext(null);function n2({children:e,onBatchResize:t}){const n=g.exports.useRef(0),r=g.exports.useRef([]),o=g.exports.useContext(ac),i=g.exports.useCallback((a,l,s)=>{n.current+=1;const u=n.current;r.current.push({size:a,element:l,data:s}),Promise.resolve().then(()=>{u===n.current&&(t==null||t(r.current),r.current=[])}),o==null||o(a,l,s)},[t,o]);return M(ac.Provider,{value:i,children:e})}const In=new Map;function r2(e){e.forEach(t=>{var r;const{target:n}=t;(r=In.get(n))==null||r.forEach(o=>o(n))})}let Js;function Y0(){return Js||(Js=new ResizeObserver(r2)),Js}function o2(e,t){In.has(e)||(In.set(e,new Set),Y0().observe(e)),In.get(e).add(t)}function i2(e,t){In.has(e)&&(In.get(e).delete(t),In.get(e).size||(Y0().unobserve(e),In.delete(e)))}function a2(e,t,n,r){const o=g.exports.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),i=lt(l=>{const{width:s,height:u}=l.getBoundingClientRect(),{offsetWidth:c,offsetHeight:f}=l,d=Math.floor(s),y=Math.floor(u);if(o.current.width!==d||o.current.height!==y||o.current.offsetWidth!==c||o.current.offsetHeight!==f){const b={width:d,height:y,offsetWidth:c,offsetHeight:f};o.current=b;const v=c===Math.round(s)?s:c,k=f===Math.round(u)?u:f,h={...b,offsetWidth:v,offsetHeight:k};r==null||r(h,l),Promise.resolve().then(()=>{n==null||n(h,l)})}}),a=typeof t=="function";g.exports.useEffect(()=>{const l=a?t():t;return l&&e&&o2(l,i),()=>{l&&i2(l,i)}},[e,a?0:t])}function l2(e,t){const{children:n,disabled:r,onResize:o,data:i}=e,a=g.exports.useRef(null),l=g.exports.useContext(ac),s=typeof n=="function",u=s?n(a):n,c=!s&&g.exports.isValidElement(u)&&$f(u),f=c?zf(u):null,d=U0(f,a),y=()=>q0(a.current);return g.exports.useImperativeHandle(t,()=>y()),a2(!r,y,o,(b,v)=>{l==null||l(b,v,i)}),c?g.exports.cloneElement(u,{ref:d}):u}const s2=g.exports.forwardRef(l2),u2="rc-observer-key";function c2(e,t){const{children:n}=e;return(typeof n=="function"?[n]:ic(n)).map((o,i)=>{const a=(o==null?void 0:o.key)||`${u2}-${i}`;return g.exports.createElement(s2,{...e,key:a,ref:i===0?t:void 0},o)})}const Q0=g.exports.forwardRef(c2);Q0.Collection=n2;function G0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=G0(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function mn(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=G0(e))&&(r&&(r+=" "),r+=t);return r}let K0=e=>+setTimeout(e,16),Z0=e=>clearTimeout(e);typeof window<"u"&&"requestAnimationFrame"in window&&(K0=e=>window.requestAnimationFrame(e),Z0=e=>window.cancelAnimationFrame(e));let yp=0;const Lf=new Map;function J0(e){Lf.delete(e)}const lc=(e,t=1)=>{yp+=1;const n=yp;function r(o){if(o===0)J0(n),e();else{const i=K0(()=>{r(o-1)});Lf.set(n,i)}}return r(t),n};lc.cancel=e=>{const t=Lf.get(e);return J0(e),Z0(t)};const bp="ant",eg="anticon",_k=["outlined","borderless","filled","underlined"],f2=(e,t)=>t||(e?`${bp}-${e}`:bp),Fi=g.exports.createContext({getPrefixCls:f2,iconPrefixCls:eg}),xp={};function Tk(e){const t=g.exports.useContext(Fi),{getPrefixCls:n,direction:r,getPopupContainer:o,renderEmpty:i}=t,a=t[e];return{classNames:xp,styles:xp,...a,getPrefixCls:n,direction:r,getPopupContainer:o,renderEmpty:i}}function Ci(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}function d2(e,t){if(!e)return!1;if(e.contains)return e.contains(t);let n=t;for(;n;){if(n===e)return!0;n=n.parentNode}return!1}const wp="data-rc-order",kp="data-rc-priority",p2="rc-util-key",sc=new Map;function tg({mark:e}={}){return e?e.startsWith("data-")?e:`data-${e}`:p2}function es(e){return e.attachTo?e.attachTo:document.querySelector("head")||document.body}function h2(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function Nf(e){return Array.from((sc.get(e)||e).children).filter(t=>t.tagName==="STYLE")}function ng(e,t={}){if(!St())return null;const{csp:n,prepend:r,priority:o=0}=t,i=h2(r),a=i==="prependQueue",l=document.createElement("style");l.setAttribute(wp,i),a&&o&&l.setAttribute(kp,`${o}`),n!=null&&n.nonce&&(l.nonce=n==null?void 0:n.nonce),l.innerHTML=e;const s=es(t),{firstChild:u}=s;if(r){if(a){const c=(t.styles||Nf(s)).filter(f=>{if(!["prepend","prependQueue"].includes(f.getAttribute(wp)))return!1;const d=Number(f.getAttribute(kp)||0);return o>=d});if(c.length)return s.insertBefore(l,c[c.length-1].nextSibling),l}s.insertBefore(l,u)}else s.appendChild(l);return l}function rg(e,t={}){let{styles:n}=t;return n||(n=Nf(es(t))),n.find(r=>r.getAttribute(tg(t))===e)}function ml(e,t={}){const n=rg(e,t);n&&es(t).removeChild(n)}function m2(e,t){const n=sc.get(e);if(!n||!d2(document,n)){const r=ng("",t),{parentNode:o}=r;sc.set(e,o),e.removeChild(r)}}function io(e,t,n={}){var s,u,c;const r=es(n),o=Nf(r),i={...n,styles:o};m2(r,i);const a=rg(t,i);if(a)return((s=i.csp)==null?void 0:s.nonce)&&a.nonce!==((u=i.csp)==null?void 0:u.nonce)&&(a.nonce=(c=i.csp)==null?void 0:c.nonce),a.innerHTML!==e&&(a.innerHTML=e),a;const l=ng(e,i);return l.setAttribute(tg(i),t),l}function g2(e,t,n=!1){const r=new Set;function o(i,a,l=1){const s=r.has(i);if(Jl(!s,"Warning: There may be circular references"),s)return!1;if(i===a)return!0;if(n&&l>1)return!1;r.add(i);const u=l+1;if(Array.isArray(i)){if(!Array.isArray(a)||i.length!==a.length)return!1;for(let c=0;c<i.length;c++)if(!o(i[c],a[c],u))return!1;return!0}if(i&&a&&typeof i=="object"&&typeof a=="object"){const c=Object.keys(i);return c.length!==Object.keys(a).length?!1:c.every(f=>o(i[f],a[f],u))}return!1}return o(e,t)}const v2="%";function uc(e){return e.join(v2)}let Sp=0;class y2{constructor(t){J(this,"instanceId");J(this,"cache",new Map);J(this,"updateTimes",new Map);J(this,"extracted",new Set);this.instanceId=t}get(t){return this.opGet(uc(t))}opGet(t){return this.cache.get(t)||null}update(t,n){return this.opUpdate(uc(t),n)}opUpdate(t,n){const r=this.cache.get(t),o=n(r);o===null?(this.cache.delete(t),this.updateTimes.delete(t)):(this.cache.set(t,o),this.updateTimes.set(t,Sp),Sp+=1)}}const og="data-token-hash",fr="data-css-hash",Nn="__cssinjs_instance__";function b2(){const e=Math.random().toString(12).slice(2);if(typeof document<"u"&&document.head&&document.body){const t=document.body.querySelectorAll(`style[${fr}]`)||[],{firstChild:n}=document.head;Array.from(t).forEach(o=>{o[Nn]||(o[Nn]=e),o[Nn]===e&&document.head.insertBefore(o,n)});const r={};Array.from(document.querySelectorAll(`style[${fr}]`)).forEach(o=>{var a;const i=o.getAttribute(fr);r[i]?o[Nn]===e&&((a=o.parentNode)==null||a.removeChild(o)):r[i]=!0})}return new y2(e)}const ts=g.exports.createContext({hashPriority:"low",cache:b2(),defaultCache:!0,autoPrefix:!1});function x2(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}const vl=class{constructor(){J(this,"cache");J(this,"keys");J(this,"cacheCallTimes");this.cache=new Map,this.keys=[],this.cacheCallTimes=0}size(){return this.keys.length}internalGet(t,n=!1){let r={map:this.cache};return t.forEach(o=>{var i;r?r=(i=r==null?void 0:r.map)==null?void 0:i.get(o):r=void 0}),(r==null?void 0:r.value)&&n&&(r.value[1]=this.cacheCallTimes++),r==null?void 0:r.value}get(t){var n;return(n=this.internalGet(t,!0))==null?void 0:n[0]}has(t){return!!this.internalGet(t)}set(t,n){if(!this.has(t)){if(this.size()+1>vl.MAX_CACHE_SIZE+vl.MAX_CACHE_OFFSET){const[o]=this.keys.reduce((i,a)=>{const[,l]=i;return this.internalGet(a)[1]<l?[a,this.internalGet(a)[1]]:i},[this.keys[0],this.cacheCallTimes]);this.delete(o)}this.keys.push(t)}let r=this.cache;t.forEach((o,i)=>{if(i===t.length-1)r.set(o,{value:[n,this.cacheCallTimes++]});else{const a=r.get(o);a?a.map||(a.map=new Map):r.set(o,{map:new Map}),r=r.get(o).map}})}deleteByPath(t,n){var i;const r=t.get(n[0]);if(n.length===1)return r.map?t.set(n[0],{map:r.map}):t.delete(n[0]),(i=r.value)==null?void 0:i[0];const o=this.deleteByPath(r.map,n.slice(1));return(!r.map||r.map.size===0)&&!r.value&&t.delete(n[0]),o}delete(t){if(this.has(t))return this.keys=this.keys.filter(n=>!x2(n,t)),this.deleteByPath(this.cache,t)}};let qo=vl;J(qo,"MAX_CACHE_SIZE",20),J(qo,"MAX_CACHE_OFFSET",5);let Cp=0;class ig{constructor(t){J(this,"derivatives");J(this,"id");this.derivatives=Array.isArray(t)?t:[t],this.id=Cp,t.length===0&&(t.length>0,void 0),Cp+=1}getDerivativeToken(t){return this.derivatives.reduce((n,r)=>r(t,n),void 0)}}const eu=new qo;function gl(e){const t=Array.isArray(e)?e:[e];return eu.has(t)||eu.set(t,new ig(t)),eu.get(t)}const w2=new WeakMap,tu={};function k2(e,t){let n=w2;for(let r=0;r<t.length;r+=1){const o=t[r];n.has(o)||n.set(o,new WeakMap),n=n.get(o)}return n.has(tu)||n.set(tu,e()),n.get(tu)}const Pp=new WeakMap;function oi(e){let t=Pp.get(e)||"";return t||(Object.keys(e).forEach(n=>{const r=e[n];t+=n,r instanceof ig?t+=r.id:r&&typeof r=="object"?t+=oi(r):t+=r}),t=Ci(t),Pp.set(e,t)),t}function S2(e,t){return Ci(`${t}_${oi(e)}`)}const Ep=St();function C2(e){return typeof e=="number"?`${e}px`:e}function ag(e){const{hashCls:t,hashPriority:n="low"}=e||{};if(!t)return"";const r=`.${t}`;return n==="low"?`:where(${r})`:r}const P2=e=>e!=null,E2=(e,t="")=>`--${t?`${t}-`:""}${e}`.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g,"$1-$2").replace(/([a-z])([A-Z0-9])/g,"$1-$2").toLowerCase(),_2=(e,t,n)=>{const{hashCls:r,hashPriority:o="low"}=n||{};return Object.keys(e).length?`${ag({hashCls:r,hashPriority:o})}.${t}${n!=null&&n.scope?`.${n.scope}`:""}{${Object.entries(e).map(([i,a])=>`${i}:${a};`).join("")}}`:""},T2=(e,t,n)=>{const{hashCls:r,hashPriority:o="low",prefix:i,unitless:a,ignore:l,preserve:s}=n||{},u={},c={};return Object.entries(e).forEach(([f,d])=>{if(s!=null&&s[f])c[f]=d;else if((typeof d=="string"||typeof d=="number")&&!(l!=null&&l[f])){const y=E2(f,i);u[y]=typeof d=="number"&&!(a!=null&&a[f])?`${d}px`:String(d),c[f]=`var(${y})`}}),[c,_2(u,t,{scope:n==null?void 0:n.scope,hashCls:r,hashPriority:o})]},ma=new Map;function lg(e,t,n,r,o){const{cache:i}=g.exports.useContext(ts),a=[e,...t],l=uc(a),s=f=>{i.opUpdate(l,d=>{const[y=0,b]=d||[void 0,void 0],k=b||n(),h=[y,k];return f?f(h):h})};g.exports.useMemo(()=>{s()},[l]);const c=i.opGet(l)[1];return g.exports.useInsertionEffect(()=>(s(([f,d])=>[f+1,d]),ma.has(l)||(o==null||o(c),ma.set(l,!0),Promise.resolve().then(()=>{ma.delete(l)})),()=>{i.opUpdate(l,f=>{const[d=0,y]=f||[];return d-1===0?(r==null||r(y,!1),ma.delete(l),null):[d-1,y]})}),[l]),c}const O2={},R2="css",or=new Map;function M2(e){or.set(e,(or.get(e)||0)+1)}function $2(e,t){typeof document<"u"&&document.querySelectorAll(`style[${og}="${e}"]`).forEach(r=>{var o;r[Nn]===t&&((o=r.parentNode)==null||o.removeChild(r))})}const z2=-1;function L2(e,t){or.set(e,(or.get(e)||0)-1);const n=new Set;or.forEach((r,o)=>{r<=0&&n.add(o)}),or.size-n.size>z2&&n.forEach(r=>{$2(r,t),or.delete(r)})}const sg=(e,t,n,r)=>{let i={...n.getDerivativeToken(e),...t};return r&&(i=r(i)),i},N2="token";function A2(e,t,n){const{cache:{instanceId:r},container:o,hashPriority:i}=g.exports.useContext(ts),{salt:a="",override:l=O2,formatToken:s,getComputedToken:u,cssVar:c}=n,f=k2(()=>Object.assign({},...t),t),d=oi(f),y=oi(l),b=oi(c);return lg(N2,[a,e.id,d,y,b],()=>{const k=u?u(f,l,e):sg(f,l,e,s),h={...k},p=`${a}_${c.prefix}`,m=Ci(p),x=`${R2}-${m}`;h._tokenKey=S2(h,p);const[S,C]=T2(k,c.key,{prefix:c.prefix,ignore:c.ignore,unitless:c.unitless,preserve:c.preserve,hashPriority:i,hashCls:c.hashed?x:void 0});return S._hashId=m,M2(c.key),[S,x,h,C,c.key]},([,,,,k])=>{L2(k,r)},([,,,k,h])=>{if(!k)return;const p=io(k,Ci(`css-var-${h}`),{mark:fr,prepend:"queue",attachTo:o,priority:-999});p[Nn]=r,p.setAttribute(og,h)})}var D2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},te="-ms-",ii="-moz-",U="-webkit-",ug="comm",Af="rule",Df="decl",I2="@import",F2="@namespace",cg="@keyframes",H2="@layer",fg=Math.abs,If=String.fromCharCode,cc=Object.assign;function B2(e,t){return ke(e,0)^45?(((t<<2^ke(e,0))<<2^ke(e,1))<<2^ke(e,2))<<2^ke(e,3):0}function dg(e){return e.trim()}function sn(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function Ia(e,t,n){return e.indexOf(t,n)}function ke(e,t){return e.charCodeAt(t)|0}function br(e,t,n){return e.slice(t,n)}function Ft(e){return e.length}function pg(e){return e.length}function Yo(e,t){return t.push(e),e}function j2(e,t){return e.map(t).join("")}function _p(e,t){return e.filter(function(n){return!sn(n,t)})}var ns=1,ho=1,hg=0,Ct=0,ge=0,xo="";function rs(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ns,column:ho,length:a,return:"",siblings:l}}function Rn(e,t){return cc(rs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Nr(e){for(;e.root;)e=Rn(e.root,{children:[e]});Yo(e,e.siblings)}function U2(){return ge}function W2(){return ge=Ct>0?ke(xo,--Ct):0,ho--,ge===10&&(ho=1,ns--),ge}function Vt(){return ge=Ct<hg?ke(xo,Ct++):0,ho++,ge===10&&(ho=1,ns++),ge}function Fn(){return ke(xo,Ct)}function Fa(){return Ct}function os(e,t){return br(xo,e,t)}function Pi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function V2(e){return ns=ho=1,hg=Ft(xo=e),Ct=0,[]}function X2(e){return xo="",e}function nu(e){return dg(os(Ct-1,fc(e===91?e+2:e===40?e+1:e)))}function q2(e){for(;(ge=Fn())&&ge<33;)Vt();return Pi(e)>2||Pi(ge)>3?"":" "}function Y2(e,t){for(;--t&&Vt()&&!(ge<48||ge>102||ge>57&&ge<65||ge>70&&ge<97););return os(e,Fa()+(t<6&&Fn()==32&&Vt()==32))}function fc(e){for(;Vt();)switch(ge){case e:return Ct;case 34:case 39:e!==34&&e!==39&&fc(ge);break;case 40:e===41&&fc(e);break;case 92:Vt();break}return Ct}function Q2(e,t){for(;Vt()&&e+ge!==47+10;)if(e+ge===42+42&&Fn()===47)break;return"/*"+os(t,Ct-1)+"*"+If(e===47?e:Vt())}function G2(e){for(;!Pi(Fn());)Vt();return os(e,Ct)}function Tp(e){return X2(Ha("",null,null,null,[""],e=V2(e),0,[0],e))}function Ha(e,t,n,r,o,i,a,l,s){for(var u=0,c=0,f=a,d=0,y=0,b=0,v=1,k=1,h=1,p=0,m="",x=o,S=i,C=r,w=m;k;)switch(b=p,p=Vt()){case 40:if(b!=108&&ke(w,f-1)==58){Ia(w+=D(nu(p),"&","&\f"),"&\f",fg(u?l[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:w+=nu(p);break;case 9:case 10:case 13:case 32:w+=q2(b);break;case 92:w+=Y2(Fa()-1,7);continue;case 47:switch(Fn()){case 42:case 47:Yo(K2(Q2(Vt(),Fa()),t,n,s),s),(Pi(b||1)==5||Pi(Fn()||1)==5)&&Ft(w)&&br(w,-1,void 0)!==" "&&(w+=" ");break;default:w+="/"}break;case 123*v:l[u++]=Ft(w)*h;case 125*v:case 59:case 0:switch(p){case 0:case 125:k=0;case 59+c:h==-1&&(w=D(w,/\f/g,"")),y>0&&(Ft(w)-f||v===0&&b===47)&&Yo(y>32?Rp(w+";",r,n,f-1,s):Rp(D(w," ","")+";",r,n,f-2,s),s);break;case 59:w+=";";default:if(Yo(C=Op(w,t,n,u,c,o,l,m,x=[],S=[],f,i),i),p===123)if(c===0)Ha(w,t,C,C,x,i,f,l,S);else{switch(d){case 99:if(ke(w,3)===110)break;case 108:if(ke(w,2)===97)break;default:c=0;case 100:case 109:case 115:}c?Ha(e,C,C,r&&Yo(Op(e,C,C,0,0,o,l,m,o,x=[],f,S),S),o,S,f,l,r?x:S):Ha(w,C,C,C,[""],S,0,l,S)}}u=c=y=0,v=h=1,m=w="",f=a;break;case 58:f=1+Ft(w),y=b;default:if(v<1){if(p==123)--v;else if(p==125&&v++==0&&W2()==125)continue}switch(w+=If(p),p*v){case 38:h=c>0?1:(w+="\f",-1);break;case 44:l[u++]=(Ft(w)-1)*h,h=1;break;case 64:Fn()===45&&(w+=nu(Vt())),d=Fn(),c=f=Ft(m=w+=G2(Fa())),p++;break;case 45:b===45&&Ft(w)==2&&(v=0)}}return i}function Op(e,t,n,r,o,i,a,l,s,u,c,f){for(var d=o-1,y=o===0?i:[""],b=pg(y),v=0,k=0,h=0;v<r;++v)for(var p=0,m=br(e,d+1,d=fg(k=a[v])),x=e;p<b;++p)(x=dg(k>0?y[p]+" "+m:D(m,/&\f/g,y[p])))&&(s[h++]=x);return rs(e,t,n,o===0?Af:l,s,u,c,f)}function K2(e,t,n,r){return rs(e,t,n,ug,If(U2()),br(e,2,-2),0,r)}function Rp(e,t,n,r,o){return rs(e,t,n,Df,br(e,0,r),br(e,r+1,-1),r,o)}function mg(e,t,n){switch(B2(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return U+e+e;case 4855:return U+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ii+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+ii+e+te+e+e;case 5936:switch(ke(e,t+11)){case 114:return U+e+te+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+te+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+te+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+te+e+e;case 6165:return U+e+te+"flex-"+e+e;case 5187:return U+e+D(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+te+"flex-$1$2")+e;case 5443:return U+e+te+"flex-item-"+D(e,/flex-|-self/g,"")+(sn(e,/flex-|baseline/)?"":te+"grid-row-"+D(e,/flex-|-self/g,""))+e;case 4675:return U+e+te+"flex-line-pack"+D(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+te+D(e,"shrink","negative")+e;case 5292:return U+e+te+D(e,"basis","preferred-size")+e;case 6060:return U+"box-"+D(e,"-grow","")+U+e+te+D(e,"grow","positive")+e;case 4554:return U+D(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+te+"flex-pack:$3"),/space-between/,"justify")+U+e+e;case 4200:if(!sn(e,/flex-|baseline/))return te+"grid-column-align"+br(e,t)+e;break;case 2592:case 3360:return te+D(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,sn(r.props,/grid-\w+-end/)})?~Ia(e+(n=n[t].value),"span",0)?e:te+D(e,"-start","")+e+te+"grid-row-span:"+(~Ia(n,"span",0)?sn(n,/\d+/):+sn(n,/\d+/)-+sn(e,/\d+/))+";":te+D(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return sn(r.props,/grid-\w+-start/)})?e:te+D(D(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ft(e)-1-t>6)switch(ke(e,t+1)){case 109:if(ke(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+ii+(ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ia(e,"stretch",0)?mg(D(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return D(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,l,s,u){return te+o+":"+i+u+(a?te+o+"-span:"+(l?s:+s-+i)+u:"")+e});case 4949:if(ke(e,t+6)===121)return D(e,":",":"+U)+e;break;case 6444:switch(ke(e,ke(e,14)===45?18:11)){case 120:return D(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(ke(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+te+"$2box$3")+e;case 100:return D(e,":",":"+te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return D(e,"scroll-","scroll-snap-")+e}return e}function Ei(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Mp(e,t,n,r){switch(e.type){case H2:if(e.children.length)break;case I2:case F2:case Df:return e.return=e.return||e.value;case ug:return"";case cg:return e.return=e.value+"{"+Ei(e.children,r)+"}";case Af:if(!Ft(e.value=e.props.join(",")))return""}return Ft(n=Ei(e.children,r))?e.return=e.value+"{"+n+"}":""}function Z2(e){var t=pg(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function J2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Df:e.return=mg(e.value,e.length,n);return;case cg:return Ei([Rn(e,{value:D(e.value,"@","@"+U)})],r);case Af:if(e.length)return j2(n=e.props,function(o){switch(sn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Nr(Rn(e,{props:[D(o,/:(read-\w+)/,":"+ii+"$1")]})),Nr(Rn(e,{props:[o]})),cc(e,{props:_p(n,r)});break;case"::placeholder":Nr(Rn(e,{props:[D(o,/:(plac\w+)/,":"+U+"input-$1")]})),Nr(Rn(e,{props:[D(o,/:(plac\w+)/,":"+ii+"$1")]})),Nr(Rn(e,{props:[D(o,/:(plac\w+)/,te+"input-$1")]})),Nr(Rn(e,{props:[o]})),cc(e,{props:_p(n,r)});break}return""})}}const $p="data-ant-cssinjs-cache-path",gg="_FILE_STYLE__";let dr,vg=!0;function e5(){var e;if(!dr&&(dr={},St())){const t=document.createElement("div");t.className=$p,t.style.position="fixed",t.style.visibility="hidden",t.style.top="-9999px",document.body.appendChild(t);let n=getComputedStyle(t).content||"";n=n.replace(/^"/,"").replace(/"$/,""),n.split(";").forEach(o=>{const[i,a]=o.split(":");dr[i]=a});const r=document.querySelector(`style[${$p}]`);r&&(vg=!1,(e=r.parentNode)==null||e.removeChild(r)),document.body.removeChild(t)}}function t5(e){return e5(),!!dr[e]}function n5(e){const t=dr[e];let n=null;if(t&&St())if(vg)n=gg;else{const r=document.querySelector(`style[${fr}="${dr[e]}"]`);r?n=r.innerHTML:delete dr[e]}return[n,t]}const r5="_skip_check_",yg="_multi_value_";function ru(e,t){return(t?Ei(Tp(e),Z2([J2,Mp])):Ei(Tp(e),Mp)).replace(/\{%%%\:[^;];}/g,";")}function o5(e){return typeof e=="object"&&e&&(r5 in e||yg in e)}function zp(e,t,n="high"){if(!t)return e;const r=ag({hashCls:t,hashPriority:n});return e.split(",").map(i=>{var u;const a=i.trim().split(/\s+/);let l=a[0]||"";const s=((u=l.match(/^\w+/))==null?void 0:u[0])||"";return l=`${s}${r}${l.slice(s.length)}`,[l,...a.slice(1)].join(" ")}).join(",")}const dc=(e,t={},{root:n,injectHash:r,parentSelectors:o}={root:!0,parentSelectors:[]})=>{const{hashId:i,layer:a,path:l,hashPriority:s,transformers:u=[],linters:c=[]}=t;let f="",d={};function y(k){const h=k.getName(i);if(!d[h]){const[p]=dc(k.style,t,{root:!1,parentSelectors:o});d[h]=`@keyframes ${k.getName(i)}${p}`}}function b(k,h=[]){return k.forEach(p=>{Array.isArray(p)?b(p,h):p&&h.push(p)}),h}return b(Array.isArray(e)?e:[e]).forEach(k=>{const h=typeof k=="string"&&!n?{}:k;if(typeof h=="string")f+=`${h}
`;else if(h._keyframe)y(h);else{const p=u.reduce((m,x)=>{var S;return((S=x==null?void 0:x.visit)==null?void 0:S.call(x,m))||m},h);Object.keys(p).forEach(m=>{var S;const x=p[m];if(typeof x=="object"&&x&&(m!=="animationName"||!x._keyframe)&&!o5(x)){let C=!1,w=m.trim(),P=!1;(n||r)&&i?w.startsWith("@")?C=!0:w==="&"?w=zp("",i,s):w=zp(m,i,s):n&&!i&&(w==="&"||w==="")&&(w="",P=!0);const[O,R]=dc(x,t,{root:P,injectHash:C,parentSelectors:[...o,w]});d={...d,...R},f+=`${w}${O}`}else{let C=function(P,O){const R=P.replace(/[A-Z]/g,H=>`-${H.toLowerCase()}`);let N=O;!D2[P]&&typeof N=="number"&&N!==0&&(N=`${N}px`),P==="animationName"&&(O==null?void 0:O._keyframe)&&(y(O),N=O.getName(i)),f+=`${R}:${N};`};const w=(S=x==null?void 0:x.value)!=null?S:x;typeof x=="object"&&(x==null?void 0:x[yg])&&Array.isArray(w)?w.forEach(P=>{C(m,P)}):P2(w)&&C(m,w)}})}}),n?a&&(f&&(f=`@layer ${a.name} {${f}}`),a.dependencies&&(d[`@layer ${a.name}`]=a.dependencies.map(k=>`@layer ${k}, ${a.name};`).join(`
`))):f=`{${f}}`,[f,d]};function i5(e,t){return Ci(`${e.join("%")}${t}`)}const a5="style";function l5(e,t){const{path:n,hashId:r,layer:o,nonce:i,clientOnly:a,order:l=0}=e,{mock:s,hashPriority:u,container:c,transformers:f,linters:d,cache:y,layer:b,autoPrefix:v}=g.exports.useContext(ts),k=[r||""];b&&k.push("layer"),k.push(...n);let h=Ep;lg(a5,k,()=>{const p=k.join("|");if(t5(p)){const[P,O]=n5(p);if(P)return[P,O,{},a,l]}const m=t(),[x,S]=dc(m,{hashId:r,hashPriority:u,layer:b?o:void 0,path:n.join("-"),transformers:f,linters:d}),C=ru(x,v||!1),w=i5(k,C);return[C,w,S,a,l]},(p,m)=>{const[,x]=p;m&&Ep&&ml(x,{mark:fr,attachTo:c})},p=>{const[m,x,S,,C]=p;if(h&&m!==gg){const w={mark:fr,prepend:b?!1:"queue",attachTo:c,priority:C},P=typeof i=="function"?i():i;P&&(w.csp={nonce:P});const O=[],R=[];Object.keys(S).forEach(H=>{H.startsWith("@layer")?O.push(H):R.push(H)}),O.forEach(H=>{io(ru(S[H],v||!1),`_layer-${H}`,{...w,prepend:!0})});const N=io(m,x,w);N[Nn]=y.instanceId,R.forEach(H=>{io(ru(S[H],v||!1),`_effect-${H}`,w)})}})}function Ar(e){return e.notSplit=!0,e}Ar(["borderTop","borderBottom"]),Ar(["borderTop"]),Ar(["borderBottom"]),Ar(["borderLeft","borderRight"]),Ar(["borderLeft"]),Ar(["borderRight"]);function xr(e){return xr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xr(e)}function s5(e,t){if(xr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(xr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function bg(e){var t=s5(e,"string");return xr(t)=="symbol"?t:t+""}function Fo(e,t,n){return(t=bg(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,bg(r.key),r)}}function c5(e,t,n){return t&&Lp(e.prototype,t),n&&Lp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var f5=1e3*60*10,d5=function(){function e(){u5(this,e),Fo(this,"map",new Map),Fo(this,"objectIDMap",new WeakMap),Fo(this,"nextID",0),Fo(this,"lastAccessBeat",new Map),Fo(this,"accessBeat",0)}return c5(e,[{key:"set",value:function(n,r){this.clear();var o=this.getCompositeKey(n);this.map.set(o,r),this.lastAccessBeat.set(o,Date.now())}},{key:"get",value:function(n){var r=this.getCompositeKey(n),o=this.map.get(r);return this.lastAccessBeat.set(r,Date.now()),this.accessBeat+=1,o}},{key:"getCompositeKey",value:function(n){var r=this,o=n.map(function(i){return i&&xr(i)==="object"?"obj_".concat(r.getObjectID(i)):"".concat(xr(i),"_").concat(i)});return o.join("|")}},{key:"getObjectID",value:function(n){if(this.objectIDMap.has(n))return this.objectIDMap.get(n);var r=this.nextID;return this.objectIDMap.set(n,r),this.nextID+=1,r}},{key:"clear",value:function(){var n=this;if(this.accessBeat>1e4){var r=Date.now();this.lastAccessBeat.forEach(function(o,i){r-o>f5&&(n.map.delete(i),n.lastAccessBeat.delete(i))}),this.accessBeat=0}}}]),e}(),Np=new d5;function Ok(e,t){return Se.useMemo(function(){var n=Np.get(t);if(n)return n;var r=e();return Np.set(t,r),r},t)}function p5(e){return(e+8)/e}function h5(e){const t=Array.from({length:10}).map((n,r)=>{const o=r-1,i=e*Math.E**(o/5),a=r>1?Math.floor(i):Math.ceil(i);return Math.floor(a/2)*2});return t[1]=e,t.map(n=>({size:n,lineHeight:p5(n)}))}const m5="6.2.3",Ff={blue:"#1677FF",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#EB2F96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},mo={...Ff,colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorLink:"",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0},g5={aliceblue:"9ehhb",antiquewhite:"9sgk7",aqua:"1ekf",aquamarine:"4zsno",azure:"9eiv3",beige:"9lhp8",bisque:"9zg04",black:"0",blanchedalmond:"9zhe5",blue:"73",blueviolet:"5e31e",brown:"6g016",burlywood:"8ouiv",cadetblue:"3qba8",chartreuse:"4zshs",chocolate:"87k0u",coral:"9yvyo",cornflowerblue:"3xael",cornsilk:"9zjz0",crimson:"8l4xo",cyan:"1ekf",darkblue:"3v",darkcyan:"rkb",darkgoldenrod:"776yz",darkgray:"6mbhl",darkgreen:"jr4",darkgrey:"6mbhl",darkkhaki:"7ehkb",darkmagenta:"5f91n",darkolivegreen:"3bzfz",darkorange:"9yygw",darkorchid:"5z6x8",darkred:"5f8xs",darksalmon:"9441m",darkseagreen:"5lwgf",darkslateblue:"2th1n",darkslategray:"1ugcv",darkslategrey:"1ugcv",darkturquoise:"14up",darkviolet:"5rw7n",deeppink:"9yavn",deepskyblue:"11xb",dimgray:"442g9",dimgrey:"442g9",dodgerblue:"16xof",firebrick:"6y7tu",floralwhite:"9zkds",forestgreen:"1cisi",fuchsia:"9y70f",gainsboro:"8m8kc",ghostwhite:"9pq0v",goldenrod:"8j4f4",gold:"9zda8",gray:"50i2o",green:"pa8",greenyellow:"6senj",grey:"50i2o",honeydew:"9eiuo",hotpink:"9yrp0",indianred:"80gnw",indigo:"2xcoy",ivory:"9zldc",khaki:"9edu4",lavenderblush:"9ziet",lavender:"90c8q",lawngreen:"4vk74",lemonchiffon:"9zkct",lightblue:"6s73a",lightcoral:"9dtog",lightcyan:"8s1rz",lightgoldenrodyellow:"9sjiq",lightgray:"89jo3",lightgreen:"5nkwg",lightgrey:"89jo3",lightpink:"9z6wx",lightsalmon:"9z2ii",lightseagreen:"19xgq",lightskyblue:"5arju",lightslategray:"4nwk9",lightslategrey:"4nwk9",lightsteelblue:"6wau6",lightyellow:"9zlcw",lime:"1edc",limegreen:"1zcxe",linen:"9shk6",magenta:"9y70f",maroon:"4zsow",mediumaquamarine:"40eju",mediumblue:"5p",mediumorchid:"79qkz",mediumpurple:"5r3rv",mediumseagreen:"2d9ip",mediumslateblue:"4tcku",mediumspringgreen:"1di2",mediumturquoise:"2uabw",mediumvioletred:"7rn9h",midnightblue:"z980",mintcream:"9ljp6",mistyrose:"9zg0x",moccasin:"9zfzp",navajowhite:"9zest",navy:"3k",oldlace:"9wq92",olive:"50hz4",olivedrab:"472ub",orange:"9z3eo",orangered:"9ykg0",orchid:"8iu3a",palegoldenrod:"9bl4a",palegreen:"5yw0o",paleturquoise:"6v4ku",palevioletred:"8k8lv",papayawhip:"9zi6t",peachpuff:"9ze0p",peru:"80oqn",pink:"9z8wb",plum:"8nba5",powderblue:"6wgdi",purple:"4zssg",rebeccapurple:"3zk49",red:"9y6tc",rosybrown:"7cv4f",royalblue:"2jvtt",saddlebrown:"5fmkz",salmon:"9rvci",sandybrown:"9jn1c",seagreen:"1tdnb",seashell:"9zje6",sienna:"6973h",silver:"7ir40",skyblue:"5arjf",slateblue:"45e4t",slategray:"4e100",slategrey:"4e100",snow:"9zke2",springgreen:"1egv",steelblue:"2r1kk",tan:"87yx8",teal:"pds",thistle:"8ggk8",tomato:"9yqfb",turquoise:"2j4r4",violet:"9b10u",wheat:"9ld4j",white:"9zldr",whitesmoke:"9lhpx",yellow:"9zl6o",yellowgreen:"61fzm"},Te=Math.round;function ou(e,t){const n=e.replace(/^[^(]*\((.*)/,"$1").replace(/\).*/,"").match(/\d*\.?\d+%?/g)||[],r=n.map(o=>parseFloat(o));for(let o=0;o<3;o+=1)r[o]=t(r[o]||0,n[o]||"",o);return n[3]?r[3]=n[3].includes("%")?r[3]/100:r[3]:r[3]=1,r}const Ap=(e,t,n)=>n===0?e:e/100;function Ho(e,t){const n=t||255;return e>n?n:e<0?0:e}class ye{constructor(t){J(this,"isValid",!0);J(this,"r",0);J(this,"g",0);J(this,"b",0);J(this,"a",1);J(this,"_h");J(this,"_hsl_s");J(this,"_hsv_s");J(this,"_l");J(this,"_v");J(this,"_max");J(this,"_min");J(this,"_brightness");function n(r){return r[0]in t&&r[1]in t&&r[2]in t}if(t)if(typeof t=="string"){let o=function(i){return r.startsWith(i)};const r=t.trim();if(/^#?[A-F\d]{3,8}$/i.test(r))this.fromHexString(r);else if(o("rgb"))this.fromRgbString(r);else if(o("hsl"))this.fromHslString(r);else if(o("hsv")||o("hsb"))this.fromHsvString(r);else{const i=g5[r.toLowerCase()];i&&this.fromHexString(parseInt(i,36).toString(16).padStart(6,"0"))}}else if(t instanceof ye)this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this._h=t._h,this._hsl_s=t._hsl_s,this._hsv_s=t._hsv_s,this._l=t._l,this._v=t._v;else if(n("rgb"))this.r=Ho(t.r),this.g=Ho(t.g),this.b=Ho(t.b),this.a=typeof t.a=="number"?Ho(t.a,1):1;else if(n("hsl"))this.fromHsl(t);else if(n("hsv"))this.fromHsv(t);else throw new Error("@ant-design/fast-color: unsupported input "+JSON.stringify(t))}setR(t){return this._sc("r",t)}setG(t){return this._sc("g",t)}setB(t){return this._sc("b",t)}setA(t){return this._sc("a",t,1)}setHue(t){const n=this.toHsv();return n.h=t,this._c(n)}getLuminance(){function t(i){const a=i/255;return a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4)}const n=t(this.r),r=t(this.g),o=t(this.b);return .2126*n+.7152*r+.0722*o}getHue(){if(typeof this._h>"u"){const t=this.getMax()-this.getMin();t===0?this._h=0:this._h=Te(60*(this.r===this.getMax()?(this.g-this.b)/t+(this.g<this.b?6:0):this.g===this.getMax()?(this.b-this.r)/t+2:(this.r-this.g)/t+4))}return this._h}getSaturation(){return this.getHSVSaturation()}getHSVSaturation(){if(typeof this._hsv_s>"u"){const t=this.getMax()-this.getMin();t===0?this._hsv_s=0:this._hsv_s=t/this.getMax()}return this._hsv_s}getHSLSaturation(){if(typeof this._hsl_s>"u"){const t=this.getMax()-this.getMin();if(t===0)this._hsl_s=0;else{const n=this.getLightness();this._hsl_s=t/255/(1-Math.abs(2*n-1))}}return this._hsl_s}getLightness(){return typeof this._l>"u"&&(this._l=(this.getMax()+this.getMin())/510),this._l}getValue(){return typeof this._v>"u"&&(this._v=this.getMax()/255),this._v}getBrightness(){return typeof this._brightness>"u"&&(this._brightness=(this.r*299+this.g*587+this.b*114)/1e3),this._brightness}darken(t=10){const n=this.getHue(),r=this.getSaturation();let o=this.getLightness()-t/100;return o<0&&(o=0),this._c({h:n,s:r,l:o,a:this.a})}lighten(t=10){const n=this.getHue(),r=this.getSaturation();let o=this.getLightness()+t/100;return o>1&&(o=1),this._c({h:n,s:r,l:o,a:this.a})}mix(t,n=50){const r=this._c(t),o=n/100,i=l=>(r[l]-this[l])*o+this[l],a={r:Te(i("r")),g:Te(i("g")),b:Te(i("b")),a:Te(i("a")*100)/100};return this._c(a)}tint(t=10){return this.mix({r:255,g:255,b:255,a:1},t)}shade(t=10){return this.mix({r:0,g:0,b:0,a:1},t)}onBackground(t){const n=this._c(t),r=this.a+n.a*(1-this.a),o=i=>Te((this[i]*this.a+n[i]*n.a*(1-this.a))/r);return this._c({r:o("r"),g:o("g"),b:o("b"),a:r})}isDark(){return this.getBrightness()<128}isLight(){return this.getBrightness()>=128}equals(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}clone(){return this._c(this)}toHexString(){let t="#";const n=(this.r||0).toString(16);t+=n.length===2?n:"0"+n;const r=(this.g||0).toString(16);t+=r.length===2?r:"0"+r;const o=(this.b||0).toString(16);if(t+=o.length===2?o:"0"+o,typeof this.a=="number"&&this.a>=0&&this.a<1){const i=Te(this.a*255).toString(16);t+=i.length===2?i:"0"+i}return t}toHsl(){return{h:this.getHue(),s:this.getHSLSaturation(),l:this.getLightness(),a:this.a}}toHslString(){const t=this.getHue(),n=Te(this.getHSLSaturation()*100),r=Te(this.getLightness()*100);return this.a!==1?`hsla(${t},${n}%,${r}%,${this.a})`:`hsl(${t},${n}%,${r}%)`}toHsv(){return{h:this.getHue(),s:this.getHSVSaturation(),v:this.getValue(),a:this.a}}toRgb(){return{r:this.r,g:this.g,b:this.b,a:this.a}}toRgbString(){return this.a!==1?`rgba(${this.r},${this.g},${this.b},${this.a})`:`rgb(${this.r},${this.g},${this.b})`}toString(){return this.toRgbString()}_sc(t,n,r){const o=this.clone();return o[t]=Ho(n,r),o}_c(t){return new this.constructor(t)}getMax(){return typeof this._max>"u"&&(this._max=Math.max(this.r,this.g,this.b)),this._max}getMin(){return typeof this._min>"u"&&(this._min=Math.min(this.r,this.g,this.b)),this._min}fromHexString(t){const n=t.replace("#","");function r(o,i){return parseInt(n[o]+n[i||o],16)}n.length<6?(this.r=r(0),this.g=r(1),this.b=r(2),this.a=n[3]?r(3)/255:1):(this.r=r(0,1),this.g=r(2,3),this.b=r(4,5),this.a=n[6]?r(6,7)/255:1)}fromHsl({h:t,s:n,l:r,a:o}){const i=(t%360+360)%360;if(this._h=i,this._hsl_s=n,this._l=r,this.a=typeof o=="number"?o:1,n<=0){const y=Te(r*255);this.r=y,this.g=y,this.b=y;return}let a=0,l=0,s=0;const u=i/60,c=(1-Math.abs(2*r-1))*n,f=c*(1-Math.abs(u%2-1));u>=0&&u<1?(a=c,l=f):u>=1&&u<2?(a=f,l=c):u>=2&&u<3?(l=c,s=f):u>=3&&u<4?(l=f,s=c):u>=4&&u<5?(a=f,s=c):u>=5&&u<6&&(a=c,s=f);const d=r-c/2;this.r=Te((a+d)*255),this.g=Te((l+d)*255),this.b=Te((s+d)*255)}fromHsv({h:t,s:n,v:r,a:o}){const i=(t%360+360)%360;this._h=i,this._hsv_s=n,this._v=r,this.a=typeof o=="number"?o:1;const a=Te(r*255);if(this.r=a,this.g=a,this.b=a,n<=0)return;const l=i/60,s=Math.floor(l),u=l-s,c=Te(r*(1-n)*255),f=Te(r*(1-n*u)*255),d=Te(r*(1-n*(1-u))*255);switch(s){case 0:this.g=d,this.b=c;break;case 1:this.r=f,this.b=c;break;case 2:this.r=c,this.b=d;break;case 3:this.r=c,this.g=f;break;case 4:this.r=d,this.g=c;break;case 5:default:this.g=c,this.b=f;break}}fromHsvString(t){const n=ou(t,Ap);this.fromHsv({h:n[0],s:n[1],v:n[2],a:n[3]})}fromHslString(t){const n=ou(t,Ap);this.fromHsl({h:n[0],s:n[1],l:n[2],a:n[3]})}fromRgbString(t){const n=ou(t,(r,o)=>o.includes("%")?Te(r/100*255):r);this.r=n[0],this.g=n[1],this.b=n[2],this.a=n[3]}}const ga=2,Dp=.16,v5=.05,y5=.05,b5=.15,xg=5,wg=4,x5=[{index:7,amount:15},{index:6,amount:25},{index:5,amount:30},{index:5,amount:45},{index:5,amount:65},{index:5,amount:85},{index:4,amount:90},{index:3,amount:95},{index:2,amount:97},{index:1,amount:98}];function Ip(e,t,n){let r;return Math.round(e.h)>=60&&Math.round(e.h)<=240?r=n?Math.round(e.h)-ga*t:Math.round(e.h)+ga*t:r=n?Math.round(e.h)+ga*t:Math.round(e.h)-ga*t,r<0?r+=360:r>=360&&(r-=360),r}function Fp(e,t,n){if(e.h===0&&e.s===0)return e.s;let r;return n?r=e.s-Dp*t:t===wg?r=e.s+Dp:r=e.s+v5*t,r>1&&(r=1),n&&t===xg&&r>.1&&(r=.1),r<.06&&(r=.06),Math.round(r*100)/100}function Hp(e,t,n){let r;return n?r=e.v+y5*t:r=e.v-b5*t,r=Math.max(0,Math.min(1,r)),Math.round(r*100)/100}function is(e,t={}){const n=[],r=new ye(e),o=r.toHsv();for(let i=xg;i>0;i-=1){const a=new ye({h:Ip(o,i,!0),s:Fp(o,i,!0),v:Hp(o,i,!0)});n.push(a)}n.push(r);for(let i=1;i<=wg;i+=1){const a=new ye({h:Ip(o,i),s:Fp(o,i),v:Hp(o,i)});n.push(a)}return t.theme==="dark"?x5.map(({index:i,amount:a})=>new ye(t.backgroundColor||"#141414").mix(n[i],a).toHexString()):n.map(i=>i.toHexString())}const iu={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},pc=["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"];pc.primary=pc[5];const hc=["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"];hc.primary=hc[5];const mc=["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"];mc.primary=mc[5];const gc=["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"];gc.primary=gc[5];const vc=["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"];vc.primary=vc[5];const yc=["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"];yc.primary=yc[5];const bc=["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"];bc.primary=bc[5];const xc=["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"];xc.primary=xc[5];const wc=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];wc.primary=wc[5];const kc=["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"];kc.primary=kc[5];const Sc=["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"];Sc.primary=Sc[5];const Cc=["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"];Cc.primary=Cc[5];const Pc=["#a6a6a6","#999999","#8c8c8c","#808080","#737373","#666666","#404040","#1a1a1a","#000000","#000000"];Pc.primary=Pc[5];const au={red:pc,volcano:hc,orange:mc,gold:gc,yellow:vc,lime:yc,green:bc,cyan:xc,blue:wc,geekblue:kc,purple:Sc,magenta:Cc,grey:Pc};function kg(e,{generateColorPalettes:t,generateNeutralColorPalettes:n}){const{colorSuccess:r,colorWarning:o,colorError:i,colorInfo:a,colorPrimary:l,colorBgBase:s,colorTextBase:u}=e,c=t(l),f=t(r),d=t(o),y=t(i),b=t(a),v=n(s,u),k=e.colorLink||e.colorInfo,h=t(k),p=new ye(y[1]).mix(new ye(y[3]),50).toHexString();return{...v,colorPrimaryBg:c[1],colorPrimaryBgHover:c[2],colorPrimaryBorder:c[3],colorPrimaryBorderHover:c[4],colorPrimaryHover:c[5],colorPrimary:c[6],colorPrimaryActive:c[7],colorPrimaryTextHover:c[8],colorPrimaryText:c[9],colorPrimaryTextActive:c[10],colorSuccessBg:f[1],colorSuccessBgHover:f[2],colorSuccessBorder:f[3],colorSuccessBorderHover:f[4],colorSuccessHover:f[4],colorSuccess:f[6],colorSuccessActive:f[7],colorSuccessTextHover:f[8],colorSuccessText:f[9],colorSuccessTextActive:f[10],colorErrorBg:y[1],colorErrorBgHover:y[2],colorErrorBgFilledHover:p,colorErrorBgActive:y[3],colorErrorBorder:y[3],colorErrorBorderHover:y[4],colorErrorHover:y[5],colorError:y[6],colorErrorActive:y[7],colorErrorTextHover:y[8],colorErrorText:y[9],colorErrorTextActive:y[10],colorWarningBg:d[1],colorWarningBgHover:d[2],colorWarningBorder:d[3],colorWarningBorderHover:d[4],colorWarningHover:d[4],colorWarning:d[6],colorWarningActive:d[7],colorWarningTextHover:d[8],colorWarningText:d[9],colorWarningTextActive:d[10],colorInfoBg:b[1],colorInfoBgHover:b[2],colorInfoBorder:b[3],colorInfoBorderHover:b[4],colorInfoHover:b[4],colorInfo:b[6],colorInfoActive:b[7],colorInfoTextHover:b[8],colorInfoText:b[9],colorInfoTextActive:b[10],colorLinkHover:h[4],colorLink:h[6],colorLinkActive:h[7],colorBgMask:new ye("#000").setA(.45).toRgbString(),colorWhite:"#fff"}}const w5=e=>{let t=e,n=e,r=e,o=e;return e<6&&e>=5?t=e+1:e<16&&e>=6?t=e+2:e>=16&&(t=16),e<7&&e>=5?n=4:e<8&&e>=7?n=5:e<14&&e>=8?n=6:e<16&&e>=14?n=7:e>=16&&(n=8),e<6&&e>=2?r=1:e>=6&&(r=2),e>4&&e<8?o=4:e>=8&&(o=6),{borderRadius:e,borderRadiusXS:r,borderRadiusSM:n,borderRadiusLG:t,borderRadiusOuter:o}},k5=w5;function S5(e){const{motionUnit:t,motionBase:n,borderRadius:r,lineWidth:o}=e;return{motionDurationFast:`${(n+t).toFixed(1)}s`,motionDurationMid:`${(n+t*2).toFixed(1)}s`,motionDurationSlow:`${(n+t*3).toFixed(1)}s`,lineWidthBold:o+1,...k5(r)}}const C5=e=>{const{controlHeight:t}=e;return{controlHeightSM:t*.75,controlHeightXS:t*.5,controlHeightLG:t*1.25}},Sg=C5,P5=e=>{const t=h5(e),n=t.map(c=>c.size),r=t.map(c=>c.lineHeight),o=n[1],i=n[0],a=n[2],l=r[1],s=r[0],u=r[2];return{fontSizeSM:i,fontSize:o,fontSizeLG:a,fontSizeXL:n[3],fontSizeHeading1:n[6],fontSizeHeading2:n[5],fontSizeHeading3:n[4],fontSizeHeading4:n[3],fontSizeHeading5:n[2],lineHeight:l,lineHeightLG:u,lineHeightSM:s,fontHeight:Math.round(l*o),fontHeightLG:Math.round(u*a),fontHeightSM:Math.round(s*i),lineHeightHeading1:r[6],lineHeightHeading2:r[5],lineHeightHeading3:r[4],lineHeightHeading4:r[3],lineHeightHeading5:r[2]}},Cg=P5;function E5(e){const{sizeUnit:t,sizeStep:n}=e;return{sizeXXL:t*(n+8),sizeXL:t*(n+4),sizeLG:t*(n+2),sizeMD:t*(n+1),sizeMS:t*n,size:t*n,sizeSM:t*(n-1),sizeXS:t*(n-2),sizeXXS:t*(n-3)}}const ht=(e,t)=>new ye(e).setA(t).toRgbString(),Dr=(e,t)=>new ye(e).darken(t).toHexString(),_5=e=>{const t=is(e);return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[4],6:t[5],7:t[6],8:t[4],9:t[5],10:t[6]}},T5=(e,t)=>{const n=e||"#fff",r=t||"#000";return{colorBgBase:n,colorTextBase:r,colorText:ht(r,.88),colorTextSecondary:ht(r,.65),colorTextTertiary:ht(r,.45),colorTextQuaternary:ht(r,.25),colorFill:ht(r,.15),colorFillSecondary:ht(r,.06),colorFillTertiary:ht(r,.04),colorFillQuaternary:ht(r,.02),colorBgSolid:ht(r,1),colorBgSolidHover:ht(r,.75),colorBgSolidActive:ht(r,.95),colorBgLayout:Dr(n,4),colorBgContainer:Dr(n,0),colorBgElevated:Dr(n,0),colorBgSpotlight:ht(r,.85),colorBgBlur:"transparent",colorBorder:Dr(n,15),colorBorderDisabled:Dr(n,15),colorBorderSecondary:Dr(n,6)}};function as(e){iu.pink=iu.magenta,au.pink=au.magenta;const t=Object.keys(Ff).map(n=>{const r=e[n]===iu[n]?au[n]:is(e[n]);return Array.from({length:10},()=>1).reduce((o,i,a)=>(o[`${n}-${a+1}`]=r[a],o[`${n}${a+1}`]=r[a],o),{})}).reduce((n,r)=>(n={...n,...r},n),{});return{...e,...t,...kg(e,{generateColorPalettes:_5,generateNeutralColorPalettes:T5}),...Cg(e.fontSize),...E5(e),...Sg(e),...S5(e)}}const O5=gl(as),Hf=O5,_i={token:mo,override:{override:mo},hashed:!0},Bf=Se.createContext(_i);function lu(e){return e>=0&&e<=255}function va(e,t){const{r:n,g:r,b:o,a:i}=new ye(e).toRgb();if(i<1)return e;const{r:a,g:l,b:s}=new ye(t).toRgb();for(let u=.01;u<=1;u+=.01){const c=Math.round((n-a*(1-u))/u),f=Math.round((r-l*(1-u))/u),d=Math.round((o-s*(1-u))/u);if(lu(c)&&lu(f)&&lu(d))return new ye({r:c,g:f,b:d,a:Math.round(u*100)/100}).toRgbString()}return new ye({r:n,g:r,b:o,a:1}).toRgbString()}function Pg(e){const{override:t,...n}=e,r={...t};Object.keys(mo).forEach(d=>{delete r[d]});const o={...n,...r},i=480,a=576,l=768,s=992,u=1200,c=1600;if(o.motion===!1){const d="0s";o.motionDurationFast=d,o.motionDurationMid=d,o.motionDurationSlow=d}return{...o,colorFillContent:o.colorFillSecondary,colorFillContentHover:o.colorFill,colorFillAlter:o.colorFillQuaternary,colorBgContainerDisabled:o.colorFillTertiary,colorBorderBg:o.colorBgContainer,colorSplit:va(o.colorBorderSecondary,o.colorBgContainer),colorTextPlaceholder:o.colorTextQuaternary,colorTextDisabled:o.colorTextQuaternary,colorTextHeading:o.colorText,colorTextLabel:o.colorTextSecondary,colorTextDescription:o.colorTextTertiary,colorTextLightSolid:o.colorWhite,colorHighlight:o.colorError,colorBgTextHover:o.colorFillSecondary,colorBgTextActive:o.colorFill,colorIcon:o.colorTextTertiary,colorIconHover:o.colorText,colorErrorOutline:va(o.colorErrorBg,o.colorBgContainer),colorWarningOutline:va(o.colorWarningBg,o.colorBgContainer),fontSizeIcon:o.fontSizeSM,lineWidthFocus:o.lineWidth*3,lineWidth:o.lineWidth,controlOutlineWidth:o.lineWidth*2,controlInteractiveSize:o.controlHeight/2,controlItemBgHover:o.colorFillTertiary,controlItemBgActive:o.colorPrimaryBg,controlItemBgActiveHover:o.colorPrimaryBgHover,controlItemBgActiveDisabled:o.colorFill,controlTmpOutline:o.colorFillQuaternary,controlOutline:va(o.colorPrimaryBg,o.colorBgContainer),lineType:o.lineType,borderRadius:o.borderRadius,borderRadiusXS:o.borderRadiusXS,borderRadiusSM:o.borderRadiusSM,borderRadiusLG:o.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:o.sizeXXS,paddingXS:o.sizeXS,paddingSM:o.sizeSM,padding:o.size,paddingMD:o.sizeMD,paddingLG:o.sizeLG,paddingXL:o.sizeXL,paddingContentHorizontalLG:o.sizeLG,paddingContentVerticalLG:o.sizeMS,paddingContentHorizontal:o.sizeMS,paddingContentVertical:o.sizeSM,paddingContentHorizontalSM:o.size,paddingContentVerticalSM:o.sizeXS,marginXXS:o.sizeXXS,marginXS:o.sizeXS,marginSM:o.sizeSM,margin:o.size,marginMD:o.sizeMD,marginLG:o.sizeLG,marginXL:o.sizeXL,marginXXL:o.sizeXXL,boxShadow:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowSecondary:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTertiary:`
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,screenXS:i,screenXSMin:i,screenXSMax:a-1,screenSM:a,screenSMMin:a,screenSMMax:l-1,screenMD:l,screenMDMin:l,screenMDMax:s-1,screenLG:s,screenLGMin:s,screenLGMax:u-1,screenXL:u,screenXLMin:u,screenXLMax:c-1,screenXXL:c,screenXXLMin:c,boxShadowPopoverArrow:"2px 2px 5px rgba(0, 0, 0, 0.05)",boxShadowCard:`
      0 1px 2px -2px ${new ye("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ye("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ye("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,boxShadowDrawerRight:`
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerLeft:`
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerUp:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerDown:`
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",...r}}const R5={lineHeight:!0,lineHeightSM:!0,lineHeightLG:!0,lineHeightHeading1:!0,lineHeightHeading2:!0,lineHeightHeading3:!0,lineHeightHeading4:!0,lineHeightHeading5:!0,opacityLoading:!0,fontWeightStrong:!0,zIndexPopupBase:!0,zIndexBase:!0,opacityImage:!0},M5={motionBase:!0,motionUnit:!0},$5={screenXS:!0,screenXSMin:!0,screenXSMax:!0,screenSM:!0,screenSMMin:!0,screenSMMax:!0,screenMD:!0,screenMDMin:!0,screenMDMax:!0,screenLG:!0,screenLGMin:!0,screenLGMax:!0,screenXL:!0,screenXLMin:!0,screenXLMax:!0,screenXXL:!0,screenXXLMin:!0},Eg=(e,t,n)=>{const r=n.getDerivativeToken(e),{override:o,...i}=t;let a={...r,override:o};return a=Pg(a),i&&Object.entries(i).forEach(([l,s])=>{const{theme:u,...c}=s;let f=c;u&&(f=Eg({...a,...c},{override:c},u)),a[l]=f}),a};function jf(){var d,y;const{token:e,hashed:t,theme:n,override:r,cssVar:o,zeroRuntime:i}=Se.useContext(Bf),a={prefix:(d=o==null?void 0:o.prefix)!=null?d:"ant",key:(y=o==null?void 0:o.key)!=null?y:"css-var-root"},l=`${m5}-${t||""}`,s=n||Hf,[u,c,f]=A2(s,[mo,e],{salt:l,override:r,getComputedToken:Eg,cssVar:{...a,unitless:R5,ignore:M5,preserve:$5}});return[s,f,t?c:"",u,a,!!i]}const Rk={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},Mk=(e,t=!1)=>({boxSizing:"border-box",margin:0,padding:0,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,listStyle:"none",fontFamily:t?"inherit":e.fontFamily}),z5=()=>({display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),$k=()=>({"&::before":{display:"table",content:'""'},"&::after":{display:"table",clear:"both",content:'""'}}),zk=e=>({a:{color:e.colorLink,textDecoration:e.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive},"&:active, &:hover":{textDecoration:e.linkHoverDecoration,outline:0},"&:focus":{textDecoration:e.linkFocusDecoration,outline:0},"&[disabled]":{color:e.colorTextDisabled,cursor:"not-allowed"}}}),Lk=(e,t,n,r)=>{const o=`[class^="${t}"], [class*=" ${t}"]`,i=n?`.${n}`:o,a={boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}};let l={};return r!==!1&&(l={fontFamily:e.fontFamily,fontSize:e.fontSize}),{[i]:{...l,...a,[o]:a}}},L5=(e,t)=>({outline:`${C2(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,outlineOffset:t!=null?t:1,transition:"outline-offset 0s, outline 0s"}),N5=(e,t)=>({"&:focus-visible":L5(e,t)}),A5=e=>({[`.${e}`]:{...z5(),[`.${e} .${e}-icon`]:{display:"block"}}}),Nk=e=>({color:e.colorLink,textDecoration:e.linkDecoration,outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,border:0,padding:0,background:"none",userSelect:"none",...N5(e),"&:hover":{color:e.colorLinkHover,textDecoration:e.linkHoverDecoration},"&:focus":{color:e.colorLinkHover,textDecoration:e.linkFocusDecoration},"&:active":{color:e.colorLinkActive,textDecoration:e.linkHoverDecoration}}),D5=(e,t)=>{const[n,r]=jf();return l5({theme:n,token:r,hashId:"",path:["ant-design-icons",e],nonce:()=>t==null?void 0:t.nonce,layer:{name:"antd"}},()=>A5(e))},I5=D5,F5=g.exports.createContext({}),H5=F5,_g=g.exports.createContext({});function B5({children:e,...t}){return M(_g.Provider,{value:t,children:e})}function j5(e){const[,t]=g.exports.useReducer(i=>i+1,0),n=g.exports.useRef(e),r=lt(()=>n.current),o=lt(i=>{n.current=typeof i=="function"?i(n.current):i,t()});return[r,o]}const un="none",ya="appear",ba="enter",xa="leave",Bp="none",Ht="prepare",Kr="start",Zr="active",Uf="end",Tg="prepared";function jp(e,t){const n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit${e}`]=`webkit${t}`,n[`Moz${e}`]=`moz${t}`,n[`ms${e}`]=`MS${t}`,n[`O${e}`]=`o${t.toLowerCase()}`,n}function U5(e,t){const n={animationend:jp("Animation","AnimationEnd"),transitionend:jp("Transition","TransitionEnd")};return e&&("AnimationEvent"in t||delete n.animationend.animation,"TransitionEvent"in t||delete n.transitionend.transition),n}const W5=U5(St(),typeof window<"u"?window:{});let Og={};St()&&({style:Og}=document.createElement("div"));const wa={};function Rg(e){if(wa[e])return wa[e];const t=W5[e];if(t){const n=Object.keys(t),r=n.length;for(let o=0;o<r;o+=1){const i=n[o];if(Object.prototype.hasOwnProperty.call(t,i)&&i in Og)return wa[e]=t[i],wa[e]}}return""}const Mg=Rg("animationend"),$g=Rg("transitionend"),V5=!!(Mg&&$g),Up=Mg||"animationend",Wp=$g||"transitionend";function Vp(e,t){if(!e)return null;if(typeof e=="object"){const n=t.replace(/-\w/g,r=>r[1].toUpperCase());return e[n]}return`${e}-${t}`}const X5=e=>{const t=g.exports.useRef();function n(o){o&&(o.removeEventListener(Wp,e),o.removeEventListener(Up,e))}function r(o){t.current&&t.current!==o&&n(t.current),o&&o!==t.current&&(o.addEventListener(Wp,e),o.addEventListener(Up,e),t.current=o)}return g.exports.useEffect(()=>()=>{n(t.current),t.current=null},[]),[r,n]},zg=St()?g.exports.useLayoutEffect:g.exports.useEffect,q5=()=>{const e=g.exports.useRef(null);function t(){lc.cancel(e.current)}function n(r,o=2){t();const i=lc(()=>{o<=1?r({isCanceled:()=>i!==e.current}):n(r,o-1)});e.current=i}return g.exports.useEffect(()=>()=>{t()},[]),[n,t]},Y5=[Ht,Kr,Zr,Uf],Q5=[Ht,Tg],Lg=!1,G5=!0;function Ng(e){return e===Zr||e===Uf}const K5=(e,t,n)=>{const[r,o]=nc(Bp),[i,a]=q5();function l(){o(Ht,!0)}const s=t?Q5:Y5;return zg(()=>{if(r!==Bp&&r!==Uf){const u=s.indexOf(r),c=s[u+1],f=n(r);f===Lg?o(c,!0):c&&i(d=>{function y(){d.isCanceled()||o(c,!0)}f===!0?y():Promise.resolve(f).then(y)})}},[e,r]),g.exports.useEffect(()=>()=>{a()},[]),[l,r]};function Z5(e,t,n,{motionEnter:r=!0,motionAppear:o=!0,motionLeave:i=!0,motionDeadline:a,motionLeaveImmediately:l,onAppearPrepare:s,onEnterPrepare:u,onLeavePrepare:c,onAppearStart:f,onEnterStart:d,onLeaveStart:y,onAppearActive:b,onEnterActive:v,onLeaveActive:k,onAppearEnd:h,onEnterEnd:p,onLeaveEnd:m,onVisibleChanged:x}){const[S,C]=nc(),[w,P]=j5(un),[O,R]=nc(null),N=w(),H=g.exports.useRef(!1),pe=g.exports.useRef(null);function Ee(){return n()}const Me=g.exports.useRef(!1);function he(){P(un),R(null,!0)}const K=lt(V=>{const Z=w();if(Z===un)return;const me=Ee();if(V&&!V.deadline&&V.target!==me)return;const qe=Me.current;let Ae;Z===ya&&qe?Ae=h==null?void 0:h(me,V):Z===ba&&qe?Ae=p==null?void 0:p(me,V):Z===xa&&qe&&(Ae=m==null?void 0:m(me,V)),qe&&Ae!==!1&&he()}),[E]=X5(K),T=V=>{switch(V){case ya:return{[Ht]:s,[Kr]:f,[Zr]:b};case ba:return{[Ht]:u,[Kr]:d,[Zr]:v};case xa:return{[Ht]:c,[Kr]:y,[Zr]:k};default:return{}}},L=g.exports.useMemo(()=>T(N),[N]),[j,F]=K5(N,!e,V=>{var Z;if(V===Ht){const me=L[Ht];return me?me(Ee()):Lg}return F in L&&R(((Z=L[F])==null?void 0:Z.call(L,Ee(),null))||null),F===Zr&&N!==un&&(E(Ee()),a>0&&(clearTimeout(pe.current),pe.current=setTimeout(()=>{K({deadline:!0})},a))),F===Tg&&he(),G5}),je=Ng(F);Me.current=je;const xe=g.exports.useRef(null);zg(()=>{if(H.current&&xe.current===t)return;C(t);const V=H.current;H.current=!0;let Z;!V&&t&&o&&(Z=ya),V&&t&&r&&(Z=ba),(V&&!t&&i||!V&&l&&!t&&i)&&(Z=xa);const me=T(Z);Z&&(e||me[Ht])?(P(Z),j()):P(un),xe.current=t},[t]),g.exports.useEffect(()=>{(N===ya&&!o||N===ba&&!r||N===xa&&!i)&&P(un)},[o,r,i]),g.exports.useEffect(()=>()=>{H.current=!1,clearTimeout(pe.current)},[]);const Je=g.exports.useRef(!1);g.exports.useEffect(()=>{S&&(Je.current=!0),S!==void 0&&N===un&&((Je.current||S)&&(x==null||x(S)),Je.current=!0)},[S,N]);let _e=O;return L[Ht]&&F===Kr&&(_e={transition:"none",..._e}),[w,F,_e,S!=null?S:t]}function J5(e){let t=e;typeof e=="object"&&({transitionSupport:t}=e);function n(o,i){return!!(o.motionName&&t&&i!==!1)}const r=g.exports.forwardRef((o,i)=>{const{visible:a=!0,removeOnLeave:l=!0,forceRender:s,children:u,motionName:c,leavedClassName:f,eventProps:d}=o,{motion:y}=g.exports.useContext(_g),b=n(o,y),v=g.exports.useRef();function k(){return q0(v.current)}const[h,p,m,x]=Z5(b,a,k,o),S=h(),C=g.exports.useRef(x);x&&(C.current=!0);const w=g.exports.useMemo(()=>{const R={};return Object.defineProperties(R,{nativeElement:{enumerable:!0,get:k},inMotion:{enumerable:!0,get:()=>()=>h()!==un},enableMotion:{enumerable:!0,get:()=>()=>b}}),R},[]);g.exports.useImperativeHandle(i,()=>w,[]);let P;const O={...d,visible:a};if(!u)P=null;else if(S===un)x?P=u({...O},v):!l&&C.current&&f?P=u({...O,className:f},v):s||!l&&!f?P=u({...O,style:{display:"none"}},v):P=null;else{let R;p===Ht?R="prepare":Ng(p)?R="active":p===Kr&&(R="start");const N=Vp(c,`${S}-${R}`);P=u({...O,className:mn(Vp(c,S),{[N]:N&&R,[c]:typeof c=="string"}),style:m},v)}return g.exports.isValidElement(P)&&$f(P)&&(zf(P)||(P=g.exports.cloneElement(P,{ref:v}))),P});return r.displayName="CSSMotion",r}const ls=J5(V5),ew={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"};var tw={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0};function Ti(e){return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ti(e)}function Xp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function qp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xp(Object(n),!0).forEach(function(r){nw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nw(e,t,n){return t=rw(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rw(e){var t=ow(e,"string");return Ti(t)=="symbol"?t:String(t)}function ow(e,t){if(Ti(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Ti(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var iw=qp(qp({},tw),{},{locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",week:"Week",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"});const aw={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},Ag=aw,lw={lang:{placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"],...iw},timePickerLocale:{...Ag}},Yp=lw,rt="${label} is not a valid ${type}",sw={locale:"en",Pagination:ew,DatePicker:Yp,TimePicker:Ag,Calendar:Yp,global:{placeholder:"Please select",close:"Close",sortable:"sortable"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckAll:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",deselectAll:"Deselect all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand",collapse:"Collapse"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:rt,method:rt,array:rt,object:rt,number:rt,date:rt,boolean:rt,integer:rt,float:rt,regexp:rt,email:rt,url:rt,hex:rt},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"},ColorPicker:{presetEmpty:"Empty",transparent:"Transparent",singleColor:"Single",gradientColor:"Gradient"}},ss=sw;({...ss.Modal});let Ba=[];const Qp=()=>Ba.reduce((e,t)=>({...e,...t}),ss.Modal);function uw(e){if(e){const t={...e};return Ba.push(t),Qp(),()=>{Ba=Ba.filter(n=>n!==t),Qp()}}({...ss.Modal})}const cw=g.exports.createContext(void 0),Dg=cw,fw="internalMark",dw=e=>{const{locale:t={},children:n,_ANT_MARK__:r}=e;g.exports.useEffect(()=>uw(t==null?void 0:t.Modal),[t]);const o=g.exports.useMemo(()=>({...t,exist:!0}),[t]);return M(Dg.Provider,{value:o,children:n})},pw=dw,hw=g.exports.createContext(void 0),Ig=g.exports.createContext(null);let Gp=!1;function mw(e){return typeof e=="boolean"&&(Gp=e),Gp}const Kp=[];function gw(e,t){const[n]=g.exports.useState(()=>St()?document.createElement("div"):null),r=g.exports.useRef(!1),o=g.exports.useContext(Ig),[i,a]=g.exports.useState(Kp),l=o||(r.current?void 0:c=>{a(f=>[c,...f])});function s(){n.parentElement||document.body.appendChild(n),r.current=!0}function u(){var c;(c=n.parentElement)==null||c.removeChild(n),r.current=!1}return yr(()=>(e?o?o(s):s():u(),u),[e]),yr(()=>{i.length&&(i.forEach(c=>c()),a(Kp))},[i]),[n,l]}function vw(e){const t=`rc-scrollbar-measure-${Math.random().toString(36).substring(7)}`,n=document.createElement("div");n.id=t;const r=n.style;r.position="absolute",r.left="0",r.top="0",r.width="100px",r.height="100px",r.overflow="scroll";let o,i;if(e){const s=getComputedStyle(e);r.scrollbarColor=s.scrollbarColor,r.scrollbarWidth=s.scrollbarWidth;const u=getComputedStyle(e,"::-webkit-scrollbar"),c=parseInt(u.width,10),f=parseInt(u.height,10);try{const d=c?`width: ${u.width};`:"",y=f?`height: ${u.height};`:"";io(`
#${t}::-webkit-scrollbar {
${d}
${y}
}`,t)}catch(d){console.error(d),o=c,i=f}}document.body.appendChild(n);const a=e&&o&&!isNaN(o)?o:n.offsetWidth-n.clientWidth,l=e&&i&&!isNaN(i)?i:n.offsetHeight-n.clientHeight;return document.body.removeChild(n),ml(t),{width:a,height:l}}function yw(e){return typeof document>"u"||!e||!(e instanceof Element)?{width:0,height:0}:vw(e)}function bw(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}const xw=`rc-util-locker-${Date.now()}`;let Zp=0;function ww(e){const t=!!e,[n]=g.exports.useState(()=>(Zp+=1,`${xw}_${Zp}`));yr(()=>{if(t){const r=yw(document.body).width,o=bw();io(`
html body {
  overflow-y: hidden;
  ${o?`width: calc(100% - ${r}px);`:""}
}`,n)}else ml(n);return()=>{ml(n)}},[t,n])}function kw(){return{...vh}.useId}let Jp=0;const eh=kw(),Sw=eh?function(t){const n=eh();return t||n}:function(t){const[n,r]=g.exports.useState("ssr-id");return g.exports.useEffect(()=>{const o=Jp;Jp+=1,r(`rc_unique_${o}`)},[]),t||n};let sr=[];const Cw=200;let Fg=0;const Hg=e=>{if(e.key==="Escape"&&!e.isComposing){if(Date.now()-Fg<Cw)return;const n=sr.length;for(let r=n-1;r>=0;r-=1)sr[r].onEsc({top:r===n-1,event:e})}},Bg=()=>{Fg=Date.now()};function Pw(){window.addEventListener("keydown",Hg),window.addEventListener("compositionend",Bg)}function Ew(){sr.length===0&&(window.removeEventListener("keydown",Hg),window.removeEventListener("compositionend",Bg))}function _w(e,t){const n=Sw(),r=lt(t),o=()=>{sr.find(a=>a.id===n)||sr.push({id:n,onEsc:r})},i=()=>{sr=sr.filter(a=>a.id!==n)};g.exports.useMemo(()=>{e?o():e||i()},[e]),g.exports.useEffect(()=>{if(e)return o(),Pw(),()=>{i(),Ew()}},[e])}const th=e=>e===!1?!1:!St()||!e?null:typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e,Tw=g.exports.forwardRef((e,t)=>{const{open:n,autoLock:r,getContainer:o,debug:i,autoDestroy:a=!0,children:l,onEsc:s}=e,[u,c]=g.exports.useState(n),f=u||n;g.exports.useEffect(()=>{(a||n)&&c(n)},[n,a]);const[d,y]=g.exports.useState(()=>th(o));g.exports.useEffect(()=>{const S=th(o);y(()=>S!=null?S:null)});const[b,v]=gw(f&&!d),k=d!=null?d:b;ww(r&&n&&St()&&(k===b||k===document.body)),_w(n,s);let h=null;l&&$f(l)&&t&&(h=zf(l));const p=U0(h,t);if(!f||!St()||d===void 0)return null;const m=k===!1||mw();let x=l;return t&&(x=g.exports.cloneElement(l,{ref:p})),M(Ig.Provider,{value:v,children:m?x:Tc.exports.createPortal(x,k)})});function Ow(e){const{prefixCls:t,align:n,arrow:r,arrowPos:o}=e,{className:i,content:a,style:l}=r||{},{x:s=0,y:u=0}=o,c=g.exports.useRef(null);if(!n||!n.points)return null;const f={position:"absolute"};if(n.autoArrow!==!1){const d=n.points[0],y=n.points[1],b=d[0],v=d[1],k=y[0],h=y[1];b===k||!["t","b"].includes(b)?f.top=u:b==="t"?f.top=0:f.bottom=0,v===h||!["l","r"].includes(v)?f.left=s:v==="l"?f.left=0:f.right=0}return M("div",{ref:c,className:mn(`${t}-arrow`,i),style:{...f,...l},children:a})}function Rw(e){const{prefixCls:t,open:n,zIndex:r,mask:o,motion:i,mobile:a}=e;return o?M(ls,{...i,motionAppear:!0,visible:n,removeOnLeave:!0,children:({className:l})=>M("div",{style:{zIndex:r},className:mn(`${t}-mask`,a&&`${t}-mobile-mask`,l)})}):null}const Mw=g.exports.memo(({children:e})=>e,(e,t)=>t.cache);function jg(e,t,n,r,o,i,a,l){var c;const s="auto",u=e?{}:{left:"-1000vw",top:"-1000vh",right:s,bottom:s};if(!e&&(t||!n)){const{points:f}=r,d=r.dynamicInset||((c=r._experimental)==null?void 0:c.dynamicInset),y=d&&f[0][1]==="r",b=d&&f[0][0]==="b";y?(u.right=o,u.left=s):(u.left=a,u.right=s),b?(u.bottom=i,u.top=s):(u.top=l,u.bottom=s)}return u}const $w=g.exports.forwardRef((e,t)=>{const{onEsc:n,popup:r,className:o,prefixCls:i,style:a,target:l,onVisibleChanged:s,open:u,keepDom:c,fresh:f,onClick:d,mask:y,arrow:b,arrowPos:v,align:k,motion:h,maskMotion:p,mobile:m,forceRender:x,getPopupContainer:S,autoDestroy:C,portal:w,children:P,zIndex:O,onMouseEnter:R,onMouseLeave:N,onPointerEnter:H,onPointerDownCapture:pe,ready:Ee,offsetX:Me,offsetY:he,offsetR:K,offsetB:E,onAlign:T,onPrepare:L,onResize:j,stretch:F,targetWidth:je,targetHeight:xe}=e,Je=typeof r=="function"?r():r,_e=u||c,V=!!m,[Z,me,qe]=g.exports.useMemo(()=>m?[m.mask,m.maskMotion,m.motion]:[y,p,h],[m,y,p,h]),Ae=(S==null?void 0:S.length)>0,[Jn,ko]=g.exports.useState(!S||!Ae);yr(()=>{!Jn&&Ae&&l&&ko(!0)},[Jn,Ae,l]);const nn=lt((Tt,Yt)=>{j==null||j(Tt,Yt),T()}),Pr=jg(V,Ee,u,k,K,E,Me,he);if(!Jn)return null;const _t={};return F&&(F.includes("height")&&xe?_t.height=xe:F.includes("minHeight")&&xe&&(_t.minHeight=xe),F.includes("width")&&je?_t.width=je:F.includes("minWidth")&&je&&(_t.minWidth=je)),u||(_t.pointerEvents="none"),bt(w,{open:x||_e,getContainer:S&&(()=>S(l)),autoDestroy:C,onEsc:n,children:[M(Rw,{prefixCls:i,open:u,zIndex:O,mask:Z,motion:me,mobile:V}),M(Q0,{onResize:nn,disabled:!u,children:Tt=>M(ls,{motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:x,leavedClassName:`${i}-hidden`,...qe,onAppearPrepare:L,onEnterPrepare:L,visible:u,onVisibleChanged:Yt=>{var W;(W=h==null?void 0:h.onVisibleChanged)==null||W.call(h,Yt),s(Yt)},children:({className:Yt,style:W},Er)=>{const kn=mn(i,Yt,o,{[`${i}-mobile`]:V});return bt("div",{ref:j0(Tt,t,Er),className:kn,style:{"--arrow-x":`${v.x||0}px`,"--arrow-y":`${v.y||0}px`,...Pr,..._t,...W,boxSizing:"border-box",zIndex:O,...a},onMouseEnter:R,onMouseLeave:N,onPointerEnter:H,onClick:d,onPointerDownCapture:pe,children:[b&&M(Ow,{prefixCls:i,arrow:b,arrowPos:v,align:k}),M(Mw,{cache:!u&&!f,children:Je})]})}})}),P]})}),nh=g.exports.createContext(null),zw=g.exports.createContext(null),Lw=e=>{if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){const{width:t,height:n}=e.getBBox();if(t||n)return!0}if(e.getBoundingClientRect){const{width:t,height:n}=e.getBoundingClientRect();if(t||n)return!0}}return!1};function Nw(e=[],t=[],n){const r=(o,i)=>o[i]||"";return n?r(e,0)===r(t,0):r(e,0)===r(t,0)&&r(e,1)===r(t,1)}function Aw(e,t,n,r){var a;const{points:o}=n,i=Object.keys(e);for(let l=0;l<i.length;l+=1){const s=i[l];if(Nw((a=e[s])==null?void 0:a.points,o,r))return`${t}-placement-${s}`}return""}function Wf(e){return e.ownerDocument.defaultView}function Dw(e){const t=[];let n=e==null?void 0:e.parentElement;const r=["hidden","scroll","clip","auto"];for(;n;){const{overflowX:o,overflowY:i,overflow:a}=Wf(n).getComputedStyle(n);[o,i,a].some(l=>r.includes(l))&&t.push(n),n=n.parentElement}return t}function Oi(e,t=1){return Number.isNaN(e)?t:e}function Bo(e){return Oi(parseFloat(e),0)}function rh(e,t){const n={...e};return(t||[]).forEach(r=>{if(r instanceof HTMLBodyElement||r instanceof HTMLHtmlElement)return;const{overflow:o,overflowClipMargin:i,borderTopWidth:a,borderBottomWidth:l,borderLeftWidth:s,borderRightWidth:u}=Wf(r).getComputedStyle(r),c=r.getBoundingClientRect(),{offsetHeight:f,clientHeight:d,offsetWidth:y,clientWidth:b}=r,v=Bo(a),k=Bo(l),h=Bo(s),p=Bo(u),m=Oi(Math.round(c.width/y*1e3)/1e3),x=Oi(Math.round(c.height/f*1e3)/1e3),S=(y-b-h-p)*m,C=(f-d-v-k)*x,w=v*x,P=k*x,O=h*m,R=p*m;let N=0,H=0;if(o==="clip"){const K=Bo(i);N=K*m,H=K*x}const pe=c.x+O-N,Ee=c.y+w-H,Me=pe+c.width+2*N-O-R-S,he=Ee+c.height+2*H-w-P-C;n.left=Math.max(n.left,pe),n.top=Math.max(n.top,Ee),n.right=Math.min(n.right,Me),n.bottom=Math.min(n.bottom,he)}),n}function oh(e,t=0){const n=`${t}`,r=n.match(/^(.*)\%$/);return r?e*(parseFloat(r[1])/100):parseFloat(n)}function ih(e,t){const[n,r]=t||[];return[oh(e.width,n),oh(e.height,r)]}function ah(e=""){return[e[0],e[1]]}function Ir(e,t){const n=t[0],r=t[1];let o,i;return n==="t"?i=e.y:n==="b"?i=e.y+e.height:i=e.y+e.height/2,r==="l"?o=e.x:r==="r"?o=e.x+e.width:o=e.x+e.width/2,{x:o,y:i}}function On(e,t){const n={t:"b",b:"t",l:"r",r:"l"},r=[...e];return r[t]=n[e[t]]||"c",r}function lh(e){return e.join("")}function Iw(e,t,n,r,o,i,a,l){const[s,u]=g.exports.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:o[r]||{}}),c=g.exports.useRef(0),f=g.exports.useMemo(()=>!t||l?[]:Dw(t),[t]),d=g.exports.useRef({});e||(()=>{d.current={}})();const b=lt(()=>{var h,p,m,x,S,C;if(t&&n&&e&&!l){let dt=function(A,nt,pt=Er){const Xf=T.x+A,qf=T.y+nt,Yg=Xf+me,Qg=qf+Z,Gg=Math.max(Xf,pt.left),Kg=Math.max(qf,pt.top),Zg=Math.min(Yg,pt.right),Jg=Math.min(Qg,pt.bottom);return Math.max(0,(Zg-Gg)*(Jg-Kg))},on=function(){Mt=T.y+ue,En=Mt+Z,rn=T.x+se,$t=rn+me};const w=t,P=w.ownerDocument,O=Wf(w),{position:R}=O.getComputedStyle(w),N=w.style.left,H=w.style.top,pe=w.style.right,Ee=w.style.bottom,Me=w.style.overflow,he={...o[r],...i},K=P.createElement("div");(h=w.parentElement)==null||h.appendChild(K),K.style.left=`${w.offsetLeft}px`,K.style.top=`${w.offsetTop}px`,K.style.position=R,K.style.height=`${w.offsetHeight}px`,K.style.width=`${w.offsetWidth}px`,w.style.left="0",w.style.top="0",w.style.right="auto",w.style.bottom="auto",w.style.overflow="hidden";let E;if(Array.isArray(n))E={x:n[0],y:n[1],width:0,height:0};else{const A=n.getBoundingClientRect();A.x=(p=A.x)!=null?p:A.left,A.y=(m=A.y)!=null?m:A.top,E={x:A.x,y:A.y,width:A.width,height:A.height}}const T=w.getBoundingClientRect(),{height:L,width:j}=O.getComputedStyle(w);T.x=(x=T.x)!=null?x:T.left,T.y=(S=T.y)!=null?S:T.top;const{clientWidth:F,clientHeight:je,scrollWidth:xe,scrollHeight:Je,scrollTop:_e,scrollLeft:V}=P.documentElement,Z=T.height,me=T.width,qe=E.height,Ae=E.width,Jn={left:0,top:0,right:F,bottom:je},ko={left:-V,top:-_e,right:xe-V,bottom:Je-_e};let{htmlRegion:nn}=he;const Pr="visible",_t="visibleFirst";nn!=="scroll"&&nn!==_t&&(nn=Pr);const Tt=nn===_t,Yt=rh(ko,f),W=rh(Jn,f),Er=nn===Pr?W:Yt,kn=Tt?W:Er;w.style.left="auto",w.style.top="auto",w.style.right="0",w.style.bottom="0";const Hi=w.getBoundingClientRect();w.style.left=N,w.style.top=H,w.style.right=pe,w.style.bottom=Ee,w.style.overflow=Me,(C=w.parentElement)==null||C.removeChild(K);const Sn=Oi(Math.round(me/parseFloat(j)*1e3)/1e3),Cn=Oi(Math.round(Z/parseFloat(L)*1e3)/1e3);if(Sn===0||Cn===0||hl(n)&&!Lw(n))return;const{offset:us,targetOffset:cs}=he;let[Ot,Rt]=ih(T,us);const[fs,ds]=ih(E,cs);E.x-=fs,E.y-=ds;const[ps,hs]=he.points||[],_r=ah(hs),Qt=ah(ps),Bi=Ir(E,_r),ji=Ir(T,Qt),So={...he};let De=[Qt,_r],se=Bi.x-ji.x+Ot,ue=Bi.y-ji.y+Rt;const et=dt(se,ue),Tr=dt(se,ue,W),Ui=Ir(E,["t","l"]),Wi=Ir(T,["t","l"]),Vi=Ir(E,["b","r"]),Xi=Ir(T,["b","r"]),ms=he.overflow||{},{adjustX:gs,adjustY:vs,shiftX:qi,shiftY:Co}=ms,Pn=A=>typeof A=="boolean"?A:A>=0;let Mt,En,rn,$t;on();const Po=Pn(vs),Yi=Qt[0]===_r[0];if(Po&&Qt[0]==="t"&&(En>kn.bottom||d.current.bt)){let A=ue;Yi?A-=Z-qe:A=Ui.y-Xi.y-Rt;const nt=dt(se,A),pt=dt(se,A,W);nt>et||nt===et&&(!Tt||pt>=Tr)?(d.current.bt=!0,ue=A,Rt=-Rt,De=[On(De[0],0),On(De[1],0)]):d.current.bt=!1}if(Po&&Qt[0]==="b"&&(Mt<kn.top||d.current.tb)){let A=ue;Yi?A+=Z-qe:A=Vi.y-Wi.y-Rt;const nt=dt(se,A),pt=dt(se,A,W);nt>et||nt===et&&(!Tt||pt>=Tr)?(d.current.tb=!0,ue=A,Rt=-Rt,De=[On(De[0],0),On(De[1],0)]):d.current.tb=!1}const ce=Pn(gs),Eo=Qt[1]===_r[1];if(ce&&Qt[1]==="l"&&($t>kn.right||d.current.rl)){let A=se;Eo?A-=me-Ae:A=Ui.x-Xi.x-Ot;const nt=dt(A,ue),pt=dt(A,ue,W);nt>et||nt===et&&(!Tt||pt>=Tr)?(d.current.rl=!0,se=A,Ot=-Ot,De=[On(De[0],1),On(De[1],1)]):d.current.rl=!1}if(ce&&Qt[1]==="r"&&(rn<kn.left||d.current.lr)){let A=se;Eo?A+=me-Ae:A=Vi.x-Wi.x-Ot;const nt=dt(A,ue),pt=dt(A,ue,W);nt>et||nt===et&&(!Tt||pt>=Tr)?(d.current.lr=!0,se=A,Ot=-Ot,De=[On(De[0],1),On(De[1],1)]):d.current.lr=!1}So.points=[lh(De[0]),lh(De[1])],on();const er=qi===!0?0:qi;typeof er=="number"&&(rn<W.left&&(se-=rn-W.left-Ot,E.x+Ae<W.left+er&&(se+=E.x-W.left+Ae-er)),$t>W.right&&(se-=$t-W.right-Ot,E.x>W.right-er&&(se+=E.x-W.right+er)));const Q=Co===!0?0:Co;typeof Q=="number"&&(Mt<W.top&&(ue-=Mt-W.top-Rt,E.y+qe<W.top+Q&&(ue+=E.y-W.top+qe-Q)),En>W.bottom&&(ue-=En-W.bottom-Rt,E.y>W.bottom-Q&&(ue+=E.y-W.bottom+Q)));const $e=T.x+se,zt=$e+me,tt=T.y+ue,Or=tt+Z,_o=E.x,To=_o+Ae,Oo=E.y,ys=Oo+qe,bs=Math.max($e,_o),Lt=Math.min(zt,To),Ug=(bs+Lt)/2-$e,Wg=Math.max(tt,Oo),Vg=Math.min(Or,ys),Xg=(Wg+Vg)/2-tt;a==null||a(t,So);let xs=Hi.right-T.x-(se+T.width),ws=Hi.bottom-T.y-(ue+T.height);Sn===1&&(se=Math.floor(se),xs=Math.floor(xs)),Cn===1&&(ue=Math.floor(ue),ws=Math.floor(ws));const qg={ready:!0,offsetX:se/Sn,offsetY:ue/Cn,offsetR:xs/Sn,offsetB:ws/Cn,arrowX:Ug/Sn,arrowY:Xg/Cn,scaleX:Sn,scaleY:Cn,align:So};u(qg)}}),v=()=>{c.current+=1;const h=c.current;Promise.resolve().then(()=>{c.current===h&&b()})},k=()=>{u(h=>({...h,ready:!1}))};return yr(k,[r]),yr(()=>{e||k()},[e]),[s.ready,s.offsetX,s.offsetY,s.offsetR,s.offsetB,s.arrowX,s.arrowY,s.scaleX,s.scaleY,s.align,v]}function Fw(){const e=g.exports.useRef(null),t=()=>{e.current&&(clearTimeout(e.current),e.current=null)},n=(r,o)=>{t(),o===0?r():e.current=setTimeout(()=>{r()},o*1e3)};return g.exports.useEffect(()=>()=>{t()},[]),n}function Hw(){const[e,t]=Se.useState(null),[n,r]=Se.useState(!1),[o,i]=Se.useState(!1),a=Se.useRef(null),l=lt(u=>{u===!1?(a.current=null,r(!1)):o&&n?a.current=u:(r(!0),t(u),a.current=null,n||i(!0))}),s=lt(u=>{u?(i(!1),a.current&&(t(a.current),a.current=null)):(i(!1),a.current=null)});return[l,n,e,s]}const Bw=e=>{const{prefixCls:t,isMobile:n,ready:r,open:o,align:i,offsetR:a,offsetB:l,offsetX:s,offsetY:u,arrowPos:c,popupSize:f,motion:d,uniqueContainerClassName:y,uniqueContainerStyle:b}=e,v=`${t}-unique-container`,[k,h]=Se.useState(!1),p=jg(n,r,o,i,a,l,s,u),m=Se.useRef(p);r&&(m.current=p);const x={};return f&&(x.width=f.width,x.height=f.height),M(ls,{motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,leavedClassName:`${v}-hidden`,...d,visible:o,onVisibleChanged:S=>{h(S)},children:({className:S,style:C})=>{const w=mn(v,S,y,{[`${v}-visible`]:k});return M("div",{className:w,style:{"--arrow-x":`${(c==null?void 0:c.x)||0}px`,"--arrow-y":`${(c==null?void 0:c.y)||0}px`,...m.current,...x,...C,...b}})}})},jw=({children:e,postTriggerProps:t})=>{const[n,r,o,i]=Hw(),a=g.exports.useMemo(()=>!o||!t?o:t(o),[o,t]),[l,s]=g.exports.useState(null),[u,c]=g.exports.useState(null),f=g.exports.useRef(null),d=lt(E=>{f.current=E,hl(E)&&l!==E&&s(E)}),y=g.exports.useRef(null),b=Fw(),v=lt((E,T)=>{y.current=T,b(()=>{n(E)},E.delay)}),k=E=>{b(()=>{var T;(T=y.current)!=null&&T.call(y)||n(!1)},E)},h=lt(E=>{i(E)}),[p,m,x,S,C,w,P,,,O,R]=Iw(r,l,a==null?void 0:a.target,a==null?void 0:a.popupPlacement,(a==null?void 0:a.builtinPlacements)||{},a==null?void 0:a.popupAlign,void 0,!1),N=g.exports.useMemo(()=>{var T;if(!a)return"";const E=Aw(a.builtinPlacements||{},a.prefixCls||"",O,!1);return mn(E,(T=a.getPopupClassNameFromAlign)==null?void 0:T.call(a,O))},[O,a==null?void 0:a.getPopupClassNameFromAlign,a==null?void 0:a.builtinPlacements,a==null?void 0:a.prefixCls]),H=g.exports.useMemo(()=>({show:v,hide:k}),[]);g.exports.useEffect(()=>{R()},[a==null?void 0:a.target]);const pe=lt(()=>(R(),Promise.resolve())),Ee=g.exports.useRef({}),Me=g.exports.useContext(nh),he=g.exports.useMemo(()=>({registerSubPopup:(E,T)=>{Ee.current[E]=T,Me==null||Me.registerSubPopup(E,T)}}),[Me]),K=a==null?void 0:a.prefixCls;return bt(zw.Provider,{value:H,children:[e,a&&M(nh.Provider,{value:he,children:M($w,{ref:d,portal:Tw,onEsc:a.onEsc,prefixCls:K,popup:a.popup,className:mn(a.popupClassName,N,`${K}-unique-controlled`),style:a.popupStyle,target:a.target,open:r,keepDom:!0,fresh:!0,autoDestroy:!1,onVisibleChanged:h,ready:p,offsetX:m,offsetY:x,offsetR:S,offsetB:C,onAlign:R,onPrepare:pe,onResize:E=>c({width:E.offsetWidth,height:E.offsetHeight}),arrowPos:{x:w,y:P},align:O,zIndex:a.zIndex,mask:a.mask,arrow:a.arrow,motion:a.popupMotion,maskMotion:a.maskMotion,getPopupContainer:a.getPopupContainer,children:M(Bw,{prefixCls:K,isMobile:!1,ready:p,open:r,align:O,offsetR:S,offsetB:C,offsetX:m,offsetY:x,arrowPos:{x:w,y:P},popupSize:u,motion:a.popupMotion,uniqueContainerClassName:mn(a.uniqueContainerClassName,N),uniqueContainerStyle:a.uniqueContainerStyle})})})]})};function Ak(e){return e&&Se.isValidElement(e)&&e.type===Se.Fragment}const Uw=(e,t,n)=>Se.isValidElement(e)?Se.cloneElement(e,typeof n=="function"?n(e.props||{}):n):t;function Ww(e,t){return Uw(e,e,t)}const Vw=({children:e})=>{const{getPrefixCls:t}=Se.useContext(Fi),n=t();return Se.isValidElement(e)?M(ls,{visible:!0,motionName:`${n}-fade`,motionAppear:!0,motionEnter:!0,motionLeave:!1,removeOnLeave:!1,children:({style:r,className:o})=>Ww(e,i=>({className:mn(i.className,o),style:{...i.style,...r}}))}):e},Xw=Vw,ka=[null,null];function qw(e){if(ka[0]!==e){const t={};Object.keys(e).forEach(n=>{t[n]={...e[n],dynamicInset:!1}}),ka[0]=e,ka[1]=t}return ka[1]}const Yw=({children:e})=>M(jw,{postTriggerProps:n=>{const{id:r,builtinPlacements:o,popup:i}=n,a=typeof i=="function"?i():i,l=qw(o);return{...n,getPopupContainer:null,arrow:!1,popup:M(Xw,{children:a},r),builtinPlacements:l}},children:e}),Qw=Yw,Ec=g.exports.createContext(!1),Gw=({children:e,disabled:t})=>{const n=g.exports.useContext(Ec);return M(Ec.Provider,{value:t!=null?t:n,children:e})},Kw=Ec,_c=g.exports.createContext(void 0),Zw=({children:e,size:t})=>{const n=g.exports.useContext(_c);return M(_c.Provider,{value:t||n,children:e})},Vf=_c;function Jw(){const e=g.exports.useContext(Kw),t=g.exports.useContext(Vf);return{componentDisabled:e,componentSize:t}}function ek(e,t,n){var a;t2();const r=e||{},o=r.inherit===!1||!t?{..._i,hashed:(a=t==null?void 0:t.hashed)!=null?a:_i.hashed,cssVar:t==null?void 0:t.cssVar}:t,i=g.exports.useId();return Mf(()=>{var c;if(!e)return t;const l={...o.components};Object.keys(e.components||{}).forEach(f=>{l[f]={...l[f],...e.components[f]}});const s=`css-var-${i.replace(/:/g,"")}`,u={prefix:n==null?void 0:n.prefixCls,...o.cssVar,...r.cssVar,key:((c=r.cssVar)==null?void 0:c.key)||s};return{...o,...r,token:{...o.token,...r.token},components:l,cssVar:u}},[r,o],(l,s)=>l.some((u,c)=>{const f=s[c];return!g2(u,f,!0)}))}const sh=g.exports.createContext(!0);function tk(e){const t=g.exports.useContext(sh),{children:n}=e,[,r]=jf(),{motion:o}=r,i=g.exports.useRef(!1);return i.current||(i.current=t!==o),i.current?M(sh.Provider,{value:o,children:M(B5,{motion:o,children:n})}):n}const nk=()=>null,rk=({iconPrefixCls:e,csp:t})=>(I5(e,t),null),ok=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"],ik=e=>{},ak=e=>{const{children:t,csp:n,autoInsertSpaceInButton:r,alert:o,affix:i,anchor:a,form:l,locale:s,componentSize:u,direction:c,space:f,splitter:d,virtual:y,dropdownMatchSelectWidth:b,popupMatchSelectWidth:v,popupOverflow:k,legacyLocale:h,parentContext:p,iconPrefixCls:m,theme:x,componentDisabled:S,segmented:C,statistic:w,spin:P,calendar:O,carousel:R,cascader:N,collapse:H,typography:pe,checkbox:Ee,descriptions:Me,divider:he,drawer:K,skeleton:E,steps:T,image:L,layout:j,list:F,mentions:je,modal:xe,progress:Je,result:_e,slider:V,breadcrumb:Z,masonry:me,menu:qe,pagination:Ae,input:Jn,textArea:ko,otp:nn,empty:Pr,badge:_t,radio:Tt,rate:Yt,ribbon:W,switch:Er,transfer:kn,avatar:Hi,message:Sn,tag:Cn,table:us,card:cs,cardMeta:Ot,tabs:Rt,timeline:fs,timePicker:ds,upload:ps,notification:hs,tree:_r,colorPicker:Qt,datePicker:Bi,rangePicker:ji,flex:So,wave:De,dropdown:se,warning:ue,tour:dt,tooltip:et,popover:Tr,popconfirm:Ui,qrcode:Wi,floatButton:Vi,floatButtonGroup:Xi,variant:ms,inputNumber:gs,treeSelect:vs,watermark:qi}=e,Co=g.exports.useCallback((Q,$e)=>{const{prefixCls:zt}=e;if($e)return $e;const tt=zt||p.getPrefixCls("");return Q?`${tt}-${Q}`:tt},[p.getPrefixCls,e.prefixCls]),Pn=m||p.iconPrefixCls||eg,Mt=n||p.csp,En=ek(x,p.theme,{prefixCls:Co("")}),rn={csp:Mt,autoInsertSpaceInButton:r,alert:o,affix:i,anchor:a,locale:s||h,direction:c,space:f,splitter:d,virtual:y,popupMatchSelectWidth:v!=null?v:b,popupOverflow:k,getPrefixCls:Co,iconPrefixCls:Pn,theme:En,segmented:C,statistic:w,spin:P,calendar:O,carousel:R,cascader:N,collapse:H,typography:pe,checkbox:Ee,descriptions:Me,divider:he,drawer:K,skeleton:E,steps:T,image:L,input:Jn,textArea:ko,otp:nn,layout:j,list:F,mentions:je,modal:xe,progress:Je,result:_e,slider:V,breadcrumb:Z,masonry:me,menu:qe,pagination:Ae,empty:Pr,badge:_t,radio:Tt,rate:Yt,ribbon:W,switch:Er,transfer:kn,avatar:Hi,message:Sn,tag:Cn,table:us,card:cs,cardMeta:Ot,tabs:Rt,timeline:fs,timePicker:ds,upload:ps,notification:hs,tree:_r,colorPicker:Qt,datePicker:Bi,rangePicker:ji,flex:So,wave:De,dropdown:se,warning:ue,tour:dt,tooltip:et,popover:Tr,popconfirm:Ui,qrcode:Wi,floatButton:Vi,floatButtonGroup:Xi,variant:ms,inputNumber:gs,treeSelect:vs,watermark:qi},$t={...p};Object.keys(rn).forEach(Q=>{rn[Q]!==void 0&&($t[Q]=rn[Q])}),ok.forEach(Q=>{const $e=e[Q];$e&&($t[Q]=$e)}),typeof r<"u"&&($t.button={autoInsertSpace:r,...$t.button});const on=Mf(()=>$t,$t,(Q,$e)=>{const zt=Object.keys(Q),tt=Object.keys($e);return zt.length!==tt.length||zt.some(Or=>Q[Or]!==$e[Or])}),{layer:Po}=g.exports.useContext(ts),Yi=g.exports.useMemo(()=>({prefixCls:Pn,csp:Mt,layer:Po?"antd":void 0}),[Pn,Mt,Po]);let ce=bt(Ry,{children:[M(rk,{iconPrefixCls:Pn,csp:Mt}),M(nk,{dropdownMatchSelectWidth:b}),t]});const Eo=g.exports.useMemo(()=>{var Q,$e,zt,tt;return qx(((Q=ss.Form)==null?void 0:Q.defaultValidateMessages)||{},((zt=($e=on.locale)==null?void 0:$e.Form)==null?void 0:zt.defaultValidateMessages)||{},((tt=on.form)==null?void 0:tt.validateMessages)||{},(l==null?void 0:l.validateMessages)||{})},[on,l==null?void 0:l.validateMessages]);Object.keys(Eo).length>0&&(ce=M(hw.Provider,{value:Eo,children:ce})),s&&(ce=M(pw,{locale:s,_ANT_MARK__:fw,children:ce})),(Pn||Mt)&&(ce=M(H5.Provider,{value:Yi,children:ce})),u&&(ce=M(Zw,{size:u,children:ce})),ce=M(tk,{children:ce}),et!=null&&et.unique&&(ce=M(Qw,{children:ce}));const er=g.exports.useMemo(()=>{const{algorithm:Q,token:$e,components:zt,cssVar:tt,...Or}=En||{},_o=Q&&(!Array.isArray(Q)||Q.length>0)?gl(Q):Hf,To={};Object.entries(zt||{}).forEach(([ys,bs])=>{const Lt={...bs};"algorithm"in Lt&&(Lt.algorithm===!0?Lt.theme=_o:(Array.isArray(Lt.algorithm)||typeof Lt.algorithm=="function")&&(Lt.theme=gl(Lt.algorithm)),delete Lt.algorithm),To[ys]=Lt});const Oo={...mo,...$e};return{...Or,theme:_o,token:Oo,components:To,override:{override:Oo,...To},cssVar:tt}},[En]);return x&&(ce=M(Bf.Provider,{value:er,children:ce})),on.warning&&(ce=M(e2.Provider,{value:on.warning,children:ce})),S!==void 0&&(ce=M(Gw,{disabled:S,children:ce})),M(Fi.Provider,{value:on,children:ce})},wo=e=>{const t=g.exports.useContext(Fi),n=g.exports.useContext(Dg);return M(ak,{parentContext:t,legacyLocale:n,...e})};wo.ConfigContext=Fi;wo.SizeContext=Vf;wo.config=ik;wo.useConfig=Jw;Object.defineProperty(wo,"SizeContext",{get:()=>Vf});const lk=wo,sk=e=>{const t=e!=null&&e.algorithm?gl(e.algorithm):Hf,n={...mo,...e==null?void 0:e.token};return sg(n,{override:e==null?void 0:e.token},t,Pg)},uk=sk;function ck(e){const{sizeUnit:t,sizeStep:n}=e,r=n-2;return{sizeXXL:t*(r+10),sizeXL:t*(r+6),sizeLG:t*(r+2),sizeMD:t*(r+2),sizeMS:t*(r+1),size:t*r,sizeSM:t*r,sizeXS:t*(r-1),sizeXXS:t*(r-1)}}const fk=(e,t)=>{const n=t!=null?t:as(e),r=n.fontSizeSM,o=n.controlHeight-4;return{...n,...ck(t!=null?t:e),...Cg(r),controlHeight:o,...Sg({...n,controlHeight:o})}},dk=fk,mt=(e,t)=>new ye(e).setA(t).toRgbString(),tr=(e,t)=>new ye(e).lighten(t).toHexString(),pk=e=>{const t=is(e,{theme:"dark"});return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[6],6:t[5],7:t[4],8:t[6],9:t[5],10:t[4]}},hk=(e,t)=>{const n=e||"#000",r=t||"#fff";return{colorBgBase:n,colorTextBase:r,colorText:mt(r,.85),colorTextSecondary:mt(r,.65),colorTextTertiary:mt(r,.45),colorTextQuaternary:mt(r,.25),colorFill:mt(r,.18),colorFillSecondary:mt(r,.12),colorFillTertiary:mt(r,.08),colorFillQuaternary:mt(r,.04),colorBgSolid:mt(r,.95),colorBgSolidHover:mt(r,1),colorBgSolidActive:mt(r,.9),colorBgElevated:tr(n,12),colorBgContainer:tr(n,8),colorBgLayout:tr(n,0),colorBgSpotlight:tr(n,26),colorBgBlur:mt(r,.04),colorBorder:tr(n,26),colorBorderDisabled:tr(n,26),colorBorderSecondary:tr(n,19)}},mk=(e,t)=>{const n=Object.keys(Ff).map(i=>{const a=is(e[i],{theme:"dark"});return Array.from({length:10},()=>1).reduce((l,s,u)=>(l[`${i}-${u+1}`]=a[u],l[`${i}${u+1}`]=a[u],l),{})}).reduce((i,a)=>(i={...i,...a},i),{}),r=t!=null?t:as(e),o=kg(e,{generateColorPalettes:pk,generateNeutralColorPalettes:hk});return{...r,...n,...o,colorPrimaryBg:o.colorPrimaryBorder,colorPrimaryBgHover:o.colorPrimaryBorderHover}},gk=mk;function vk(){const[e,t,n,r]=jf();return{theme:e,token:t,hashId:n,cssVar:r}}const yk={defaultSeed:_i.token,useToken:vk,defaultAlgorithm:as,darkAlgorithm:gk,compactAlgorithm:dk,getDesignToken:uk,defaultConfig:_i,_internalContext:Bf};function bk(){return M(lk,{theme:{algorithm:yk.darkAlgorithm,token:{colorBgContainer:"#0f172a",colorText:"#e5e7eb",colorTextSecondary:"#9ca3af",colorBorder:"#1e293b",colorPrimary:"#3b82f6"}},children:M(Ax,{})})}const xk=document.getElementById("root"),wk=v0(xk);wk.render(M(kx,{children:M(g.exports.Suspense,{children:M(bk,{})})}));export{Iw as $,fr as A,zk as B,Fi as C,A5 as D,eg as E,Lk as F,R5 as G,Jl as H,is as I,H5 as J,wc as K,Dg as L,ss as M,Dw as N,Wf as O,Tw as P,Sw as Q,Se as R,ts as S,nh as T,zw as U,lt as V,hl as W,q0 as X,Tc as Y,Fw as Z,Fo as _,Ww as a,Aw as a0,a2 as a1,U0 as a2,zf as a3,Ry as a4,$w as a5,v0 as a6,bp as a7,lc as a8,j0 as a9,Rk as aA,L5 as aB,Yp as aC,Nk as aD,gc as aE,Uw as aF,$f as aa,Lw as ab,Vf as ac,Ak as ad,ye as ae,p5 as af,va as ag,z5 as ah,N5 as ai,ic as aj,Kw as ak,qx as al,rc as am,Zs as an,g2 as ao,Xx as ap,St as aq,lk as ar,Q0 as as,_k as at,Qw as au,t2 as av,Mf as aw,Pk as ax,Ek as ay,$k as az,Mk as b,mn as c,Tk as d,bt as e,ls as f,$b as g,yr as h,lg as i,M as j,io as k,Nn as l,og as m,Ep as n,ml as o,i5 as p,xr as q,g as r,c5 as s,T2 as t,C2 as u,u5 as v,Ok as w,E2 as x,l5 as y,jf as z};
