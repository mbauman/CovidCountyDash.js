var Ip=Object.defineProperty;var Ep=(e,n,t)=>n in e?Ip(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var wa=(e,n,t)=>Ep(e,typeof n!="symbol"?n+"":n,t);function Lp(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function Rp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var x0={exports:{}},ti={},T0={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),Dp=Symbol.for("react.portal"),Ap=Symbol.for("react.fragment"),Fp=Symbol.for("react.strict_mode"),_p=Symbol.for("react.profiler"),Vp=Symbol.for("react.provider"),Wp=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),Hp=Symbol.for("react.suspense"),zp=Symbol.for("react.memo"),Kp=Symbol.for("react.lazy"),sc=Symbol.iterator;function Gp(e){return e===null||typeof e!="object"?null:(e=sc&&e[sc]||e["@@iterator"],typeof e=="function"?e:null)}var P0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b0=Object.assign,O0={};function ur(e,n,t){this.props=e,this.context=n,this.refs=O0,this.updater=t||P0}ur.prototype.isReactComponent={};ur.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function N0(){}N0.prototype=ur.prototype;function Hl(e,n,t){this.props=e,this.context=n,this.refs=O0,this.updater=t||P0}var zl=Hl.prototype=new N0;zl.constructor=Hl;b0(zl,ur.prototype);zl.isPureReactComponent=!0;var lc=Array.isArray,I0=Object.prototype.hasOwnProperty,Kl={current:null},E0={key:!0,ref:!0,__self:!0,__source:!0};function L0(e,n,t){var r,a={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)I0.call(n,r)&&!E0.hasOwnProperty(r)&&(a[r]=n[r]);var l=arguments.length-2;if(l===1)a.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:da,type:e,key:o,ref:i,props:a,_owner:Kl.current}}function $p(e,n){return{$$typeof:da,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Gl(e){return typeof e=="object"&&e!==null&&e.$$typeof===da}function Up(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var uc=/\/+/g;function Ki(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Up(""+e.key):n.toString(36)}function ja(e,n,t,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case da:case Dp:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+Ki(i,0):r,lc(a)?(t="",e!=null&&(t=e.replace(uc,"$&/")+"/"),ja(a,n,t,"",function(u){return u})):a!=null&&(Gl(a)&&(a=$p(a,t+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(uc,"$&/")+"/")+e)),n.push(a)),1;if(i=0,r=r===""?".":r+":",lc(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Ki(o,l);i+=ja(o,n,t,s,a)}else if(s=Gp(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Ki(o,l++),i+=ja(o,n,t,s,a);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Sa(e,n,t){if(e==null)return e;var r=[],a=0;return ja(e,r,"","",function(o){return n.call(t,o,a++)}),r}function jp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Ya={transition:null},Yp={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:Kl};function R0(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Sa,forEach:function(e,n,t){Sa(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Sa(e,function(){n++}),n},toArray:function(e){return Sa(e,function(n){return n})||[]},only:function(e){if(!Gl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=ur;V.Fragment=Ap;V.Profiler=_p;V.PureComponent=Hl;V.StrictMode=Fp;V.Suspense=Hp;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yp;V.act=R0;V.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=b0({},e.props),a=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=Kl.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)I0.call(n,s)&&!E0.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:da,type:e.type,key:a,ref:o,props:r,_owner:i}};V.createContext=function(e){return e={$$typeof:Wp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vp,_context:e},e.Consumer=e};V.createElement=L0;V.createFactory=function(e){var n=L0.bind(null,e);return n.type=e,n};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Bp,render:e}};V.isValidElement=Gl;V.lazy=function(e){return{$$typeof:Kp,_payload:{_status:-1,_result:e},_init:jp}};V.memo=function(e,n){return{$$typeof:zp,type:e,compare:n===void 0?null:n}};V.startTransition=function(e){var n=Ya.transition;Ya.transition={};try{e()}finally{Ya.transition=n}};V.unstable_act=R0;V.useCallback=function(e,n){return Ee.current.useCallback(e,n)};V.useContext=function(e){return Ee.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};V.useEffect=function(e,n){return Ee.current.useEffect(e,n)};V.useId=function(){return Ee.current.useId()};V.useImperativeHandle=function(e,n,t){return Ee.current.useImperativeHandle(e,n,t)};V.useInsertionEffect=function(e,n){return Ee.current.useInsertionEffect(e,n)};V.useLayoutEffect=function(e,n){return Ee.current.useLayoutEffect(e,n)};V.useMemo=function(e,n){return Ee.current.useMemo(e,n)};V.useReducer=function(e,n,t){return Ee.current.useReducer(e,n,t)};V.useRef=function(e){return Ee.current.useRef(e)};V.useState=function(e){return Ee.current.useState(e)};V.useSyncExternalStore=function(e,n,t){return Ee.current.useSyncExternalStore(e,n,t)};V.useTransition=function(){return Ee.current.useTransition()};V.version="18.3.1";T0.exports=V;var x=T0.exports;const D0=Rp(x),cc=Lp({__proto__:null,default:D0},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp=x,Qp=Symbol.for("react.element"),Xp=Symbol.for("react.fragment"),qp=Object.prototype.hasOwnProperty,Zp=Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,e3={key:!0,ref:!0,__self:!0,__source:!0};function A0(e,n,t){var r,a={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)qp.call(n,r)&&!e3.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:Qp,type:e,key:o,ref:i,props:a,_owner:Zp.current}}ti.Fragment=Xp;ti.jsx=A0;ti.jsxs=A0;x0.exports=ti;var b=x0.exports,Ns={},F0={exports:{}},Ye={},_0={exports:{}},V0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(O,D){var F=O.length;O.push(D);e:for(;0<F;){var $=F-1>>>1,_=O[$];if(0<a(_,D))O[$]=D,O[F]=_,F=$;else break e}}function t(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var D=O[0],F=O.pop();if(F!==D){O[0]=F;e:for(var $=0,_=O.length,de=_>>>1;$<de;){var me=2*($+1)-1,qe=O[me],se=me+1,Be=O[se];if(0>a(qe,F))se<_&&0>a(Be,qe)?(O[$]=Be,O[se]=F,$=se):(O[$]=qe,O[me]=F,$=me);else if(se<_&&0>a(Be,F))O[$]=Be,O[se]=F,$=se;else break e}}return D}function a(O,D){var F=O.sortIndex-D.sortIndex;return F!==0?F:O.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var s=[],u=[],c=1,d=null,h=3,m=!1,g=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var D=t(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=O)r(u),D.sortIndex=D.expirationTime,n(s,D);else break;D=t(u)}}function w(O){if(v=!1,y(O),!g)if(t(s)!==null)g=!0,X(S);else{var D=t(u);D!==null&&Re(w,D.startTime-O)}}function S(O,D){g=!1,v&&(v=!1,f(T),T=-1),m=!0;var F=h;try{for(y(D),d=t(s);d!==null&&(!(d.expirationTime>D)||O&&!G());){var $=d.callback;if(typeof $=="function"){d.callback=null,h=d.priorityLevel;var _=$(d.expirationTime<=D);D=e.unstable_now(),typeof _=="function"?d.callback=_:d===t(s)&&r(s),y(D)}else r(s);d=t(s)}if(d!==null)var de=!0;else{var me=t(u);me!==null&&Re(w,me.startTime-D),de=!1}return de}finally{d=null,h=F,m=!1}}var M=!1,C=null,T=-1,I=5,E=-1;function G(){return!(e.unstable_now()-E<I)}function J(){if(C!==null){var O=e.unstable_now();E=O;var D=!0;try{D=C(!0,O)}finally{D?Pe():(M=!1,C=null)}}else M=!1}var Pe;if(typeof p=="function")Pe=function(){p(J)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,ae=Xe.port2;Xe.port1.onmessage=J,Pe=function(){ae.postMessage(null)}}else Pe=function(){k(J,0)};function X(O){C=O,M||(M=!0,Pe())}function Re(O,D){T=k(function(){O(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,X(S))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var F=h;h=D;try{return O()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,D){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var F=h;h=O;try{return D()}finally{h=F}},e.unstable_scheduleCallback=function(O,D,F){var $=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?$+F:$):F=$,O){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=F+_,O={id:c++,callback:D,priorityLevel:O,startTime:F,expirationTime:_,sortIndex:-1},F>$?(O.sortIndex=F,n(u,O),t(s)===null&&O===t(u)&&(v?(f(T),T=-1):v=!0,Re(w,F-$))):(O.sortIndex=_,n(s,O),g||m||(g=!0,X(S))),O},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(O){var D=h;return function(){var F=h;h=D;try{return O.apply(this,arguments)}finally{h=F}}}})(V0);_0.exports=V0;var n3=_0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t3=x,je=n3;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var W0=new Set,Hr={};function Tt(e,n){Zt(e,n),Zt(e+"Capture",n)}function Zt(e,n){for(Hr[e]=n,e=0;e<n.length;e++)W0.add(n[e])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Is=Object.prototype.hasOwnProperty,r3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dc={},fc={};function a3(e){return Is.call(fc,e)?!0:Is.call(dc,e)?!1:r3.test(e)?fc[e]=!0:(dc[e]=!0,!1)}function o3(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function i3(e,n,t,r){if(n===null||typeof n>"u"||o3(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Le(e,n,t,r,a,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];we[n]=new Le(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var $l=/[\-:]([a-z])/g;function Ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace($l,Ul);we[n]=new Le(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace($l,Ul);we[n]=new Le(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace($l,Ul);we[n]=new Le(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function jl(e,n,t,r){var a=we.hasOwnProperty(n)?we[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(i3(n,t,a,r)&&(t=null),r||a===null?a3(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Vn=t3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ca=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),Yl=Symbol.for("react.strict_mode"),Es=Symbol.for("react.profiler"),B0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),Jl=Symbol.for("react.forward_ref"),Ls=Symbol.for("react.suspense"),Rs=Symbol.for("react.suspense_list"),Ql=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),z0=Symbol.for("react.offscreen"),pc=Symbol.iterator;function pr(e){return e===null||typeof e!="object"?null:(e=pc&&e[pc]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Gi;function xr(e){if(Gi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Gi=n&&n[1]||""}return`
`+Gi+e}var $i=!1;function Ui(e,n){if(!e||$i)return"";$i=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=r.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var s=`
`+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{$i=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?xr(e):""}function s3(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=Ui(e.type,!1),e;case 11:return e=Ui(e.type.render,!1),e;case 1:return e=Ui(e.type,!0),e;default:return""}}function Ds(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case Rt:return"Portal";case Es:return"Profiler";case Yl:return"StrictMode";case Ls:return"Suspense";case Rs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case H0:return(e.displayName||"Context")+".Consumer";case B0:return(e._context.displayName||"Context")+".Provider";case Jl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ql:return n=e.displayName||null,n!==null?n:Ds(e.type)||"Memo";case Kn:n=e._payload,e=e._init;try{return Ds(e(n))}catch{}}return null}function l3(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ds(n);case 8:return n===Yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function K0(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function u3(e){var n=K0(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ma(e){e._valueTracker||(e._valueTracker=u3(e))}function G0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=K0(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function As(e,n){var t=n.checked;return ee({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function hc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=rt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function $0(e,n){n=n.checked,n!=null&&jl(e,"checked",n,!1)}function Fs(e,n){$0(e,n);var t=rt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?_s(e,n.type,t):n.hasOwnProperty("defaultValue")&&_s(e,n.type,rt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function mc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function _s(e,n,t){(n!=="number"||ho(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Tr=Array.isArray;function $t(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+rt(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Vs(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return ee({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(Tr(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:rt(t)}}function U0(e,n){var t=rt(n.value),r=rt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function yc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function j0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ws(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?j0(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xa,Y0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=xa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function zr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c3=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){c3.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ir[n]=Ir[e]})});function J0(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+n).trim():n+"px"}function Q0(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=J0(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var d3=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bs(e,n){if(n){if(d3[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function Hs(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zs=null;function Xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ks=null,Ut=null,jt=null;function vc(e){if(e=ha(e)){if(typeof Ks!="function")throw Error(P(280));var n=e.stateNode;n&&(n=si(n),Ks(e.stateNode,e.type,n))}}function X0(e){Ut?jt?jt.push(e):jt=[e]:Ut=e}function q0(){if(Ut){var e=Ut,n=jt;if(jt=Ut=null,vc(e),n)for(e=0;e<n.length;e++)vc(n[e])}}function Z0(e,n){return e(n)}function ed(){}var ji=!1;function nd(e,n,t){if(ji)return e(n,t);ji=!0;try{return Z0(e,n,t)}finally{ji=!1,(Ut!==null||jt!==null)&&(ed(),q0())}}function Kr(e,n){var t=e.stateNode;if(t===null)return null;var r=si(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var Gs=!1;if(Ln)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){Gs=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{Gs=!1}function f3(e,n,t,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var Er=!1,mo=null,go=!1,$s=null,p3={onError:function(e){Er=!0,mo=e}};function h3(e,n,t,r,a,o,i,l,s){Er=!1,mo=null,f3.apply(p3,arguments)}function m3(e,n,t,r,a,o,i,l,s){if(h3.apply(this,arguments),Er){if(Er){var u=mo;Er=!1,mo=null}else throw Error(P(198));go||(go=!0,$s=u)}}function Pt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function td(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function kc(e){if(Pt(e)!==e)throw Error(P(188))}function g3(e){var n=e.alternate;if(!n){if(n=Pt(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===t)return kc(a),e;if(o===r)return kc(a),n;o=o.sibling}throw Error(P(188))}if(t.return!==r.return)t=a,r=o;else{for(var i=!1,l=a.child;l;){if(l===t){i=!0,t=a,r=o;break}if(l===r){i=!0,r=a,t=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===t){i=!0,t=o,r=a;break}if(l===r){i=!0,r=o,t=a;break}l=l.sibling}if(!i)throw Error(P(189))}}if(t.alternate!==r)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function rd(e){return e=g3(e),e!==null?ad(e):null}function ad(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ad(e);if(n!==null)return n;e=e.sibling}return null}var od=je.unstable_scheduleCallback,wc=je.unstable_cancelCallback,y3=je.unstable_shouldYield,v3=je.unstable_requestPaint,re=je.unstable_now,k3=je.unstable_getCurrentPriorityLevel,ql=je.unstable_ImmediatePriority,id=je.unstable_UserBlockingPriority,yo=je.unstable_NormalPriority,w3=je.unstable_LowPriority,sd=je.unstable_IdlePriority,ri=null,Sn=null;function S3(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(ri,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:x3,C3=Math.log,M3=Math.LN2;function x3(e){return e>>>=0,e===0?32:31-(C3(e)/M3|0)|0}var Ta=64,Pa=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var l=i&~a;l!==0?r=Pr(l):(o&=i,o!==0&&(r=Pr(o)))}else i=t&~a,i!==0?r=Pr(i):o!==0&&(r=Pr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,o=n&-n,a>=o||a===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-dn(n),a=1<<t,r|=e[t],n&=~a;return r}function T3(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P3(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-dn(o),l=1<<i,s=a[i];s===-1?(!(l&t)||l&r)&&(a[i]=T3(l,n)):s<=n&&(e.expiredLanes|=l),o&=~l}}function Us(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ld(){var e=Ta;return Ta<<=1,!(Ta&4194240)&&(Ta=64),e}function Yi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function fa(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-dn(n),e[n]=t}function b3(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-dn(t),o=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~o}}function Zl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-dn(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var z=0;function ud(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cd,eu,dd,fd,pd,js=!1,ba=[],Jn=null,Qn=null,Xn=null,Gr=new Map,$r=new Map,$n=[],O3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(e,n){switch(e){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":Gr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(n.pointerId)}}function mr(e,n,t,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},n!==null&&(n=ha(n),n!==null&&eu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function N3(e,n,t,r,a){switch(n){case"focusin":return Jn=mr(Jn,e,n,t,r,a),!0;case"dragenter":return Qn=mr(Qn,e,n,t,r,a),!0;case"mouseover":return Xn=mr(Xn,e,n,t,r,a),!0;case"pointerover":var o=a.pointerId;return Gr.set(o,mr(Gr.get(o)||null,e,n,t,r,a)),!0;case"gotpointercapture":return o=a.pointerId,$r.set(o,mr($r.get(o)||null,e,n,t,r,a)),!0}return!1}function hd(e){var n=ft(e.target);if(n!==null){var t=Pt(n);if(t!==null){if(n=t.tag,n===13){if(n=td(t),n!==null){e.blockedOn=n,pd(e.priority,function(){dd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ja(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ys(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);zs=r,t.target.dispatchEvent(r),zs=null}else return n=ha(t),n!==null&&eu(n),e.blockedOn=t,!1;n.shift()}return!0}function Cc(e,n,t){Ja(e)&&t.delete(n)}function I3(){js=!1,Jn!==null&&Ja(Jn)&&(Jn=null),Qn!==null&&Ja(Qn)&&(Qn=null),Xn!==null&&Ja(Xn)&&(Xn=null),Gr.forEach(Cc),$r.forEach(Cc)}function gr(e,n){e.blockedOn===n&&(e.blockedOn=null,js||(js=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,I3)))}function Ur(e){function n(a){return gr(a,e)}if(0<ba.length){gr(ba[0],e);for(var t=1;t<ba.length;t++){var r=ba[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Jn!==null&&gr(Jn,e),Qn!==null&&gr(Qn,e),Xn!==null&&gr(Xn,e),Gr.forEach(n),$r.forEach(n),t=0;t<$n.length;t++)r=$n[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<$n.length&&(t=$n[0],t.blockedOn===null);)hd(t),t.blockedOn===null&&$n.shift()}var Yt=Vn.ReactCurrentBatchConfig,ko=!0;function E3(e,n,t,r){var a=z,o=Yt.transition;Yt.transition=null;try{z=1,nu(e,n,t,r)}finally{z=a,Yt.transition=o}}function L3(e,n,t,r){var a=z,o=Yt.transition;Yt.transition=null;try{z=4,nu(e,n,t,r)}finally{z=a,Yt.transition=o}}function nu(e,n,t,r){if(ko){var a=Ys(e,n,t,r);if(a===null)as(e,n,r,wo,t),Sc(e,r);else if(N3(a,e,n,t,r))r.stopPropagation();else if(Sc(e,r),n&4&&-1<O3.indexOf(e)){for(;a!==null;){var o=ha(a);if(o!==null&&cd(o),o=Ys(e,n,t,r),o===null&&as(e,n,r,wo,t),o===a)break;a=o}a!==null&&r.stopPropagation()}else as(e,n,r,null,t)}}var wo=null;function Ys(e,n,t,r){if(wo=null,e=Xl(r),e=ft(e),e!==null)if(n=Pt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=td(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return wo=e,null}function md(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k3()){case ql:return 1;case id:return 4;case yo:case w3:return 16;case sd:return 536870912;default:return 16}default:return 16}}var jn=null,tu=null,Qa=null;function gd(){if(Qa)return Qa;var e,n=tu,t=n.length,r,a="value"in jn?jn.value:jn.textContent,o=a.length;for(e=0;e<t&&n[e]===a[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===a[o-r];r++);return Qa=a.slice(e,1<r?1-r:void 0)}function Xa(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Oa(){return!0}function Mc(){return!1}function Je(e){function n(t,r,a,o,i){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oa:Mc,this.isPropagationStopped=Mc,this}return ee(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),n}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=Je(cr),pa=ee({},cr,{view:0,detail:0}),R3=Je(pa),Ji,Qi,yr,ai=ee({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(Ji=e.screenX-yr.screenX,Qi=e.screenY-yr.screenY):Qi=Ji=0,yr=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:Qi}}),xc=Je(ai),D3=ee({},ai,{dataTransfer:0}),A3=Je(D3),F3=ee({},pa,{relatedTarget:0}),Xi=Je(F3),_3=ee({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),V3=Je(_3),W3=ee({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),B3=Je(W3),H3=ee({},cr,{data:0}),Tc=Je(H3),z3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $3(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=G3[e])?!!n[e]:!1}function au(){return $3}var U3=ee({},pa,{key:function(e){if(e.key){var n=z3[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?K3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?Xa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),j3=Je(U3),Y3=ee({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pc=Je(Y3),J3=ee({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),Q3=Je(J3),X3=ee({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),q3=Je(X3),Z3=ee({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eh=Je(Z3),nh=[9,13,27,32],ou=Ln&&"CompositionEvent"in window,Lr=null;Ln&&"documentMode"in document&&(Lr=document.documentMode);var th=Ln&&"TextEvent"in window&&!Lr,yd=Ln&&(!ou||Lr&&8<Lr&&11>=Lr),bc=" ",Oc=!1;function vd(e,n){switch(e){case"keyup":return nh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function rh(e,n){switch(e){case"compositionend":return kd(n);case"keypress":return n.which!==32?null:(Oc=!0,bc);case"textInput":return e=n.data,e===bc&&Oc?null:e;default:return null}}function ah(e,n){if(At)return e==="compositionend"||!ou&&vd(e,n)?(e=gd(),Qa=tu=jn=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yd&&n.locale!=="ko"?null:n.data;default:return null}}var oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!oh[e.type]:n==="textarea"}function wd(e,n,t,r){X0(r),n=So(n,"onChange"),0<n.length&&(t=new ru("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Rr=null,jr=null;function ih(e){Ed(e,0)}function oi(e){var n=Vt(e);if(G0(n))return e}function sh(e,n){if(e==="change")return n}var Sd=!1;if(Ln){var qi;if(Ln){var Zi="oninput"in document;if(!Zi){var Ic=document.createElement("div");Ic.setAttribute("oninput","return;"),Zi=typeof Ic.oninput=="function"}qi=Zi}else qi=!1;Sd=qi&&(!document.documentMode||9<document.documentMode)}function Ec(){Rr&&(Rr.detachEvent("onpropertychange",Cd),jr=Rr=null)}function Cd(e){if(e.propertyName==="value"&&oi(jr)){var n=[];wd(n,jr,e,Xl(e)),nd(ih,n)}}function lh(e,n,t){e==="focusin"?(Ec(),Rr=n,jr=t,Rr.attachEvent("onpropertychange",Cd)):e==="focusout"&&Ec()}function uh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oi(jr)}function ch(e,n){if(e==="click")return oi(n)}function dh(e,n){if(e==="input"||e==="change")return oi(n)}function fh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var pn=typeof Object.is=="function"?Object.is:fh;function Yr(e,n){if(pn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!Is.call(n,a)||!pn(e[a],n[a]))return!1}return!0}function Lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rc(e,n){var t=Lc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Lc(t)}}function Md(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Md(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xd(){for(var e=window,n=ho();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ho(e.document)}return n}function iu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ph(e){var n=xd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Md(t.ownerDocument.documentElement,t)){if(r!==null&&iu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=Rc(t,o);var i=Rc(t,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hh=Ln&&"documentMode"in document&&11>=document.documentMode,Ft=null,Js=null,Dr=null,Qs=!1;function Dc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Qs||Ft==null||Ft!==ho(r)||(r=Ft,"selectionStart"in r&&iu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&Yr(Dr,r)||(Dr=r,r=So(Js,"onSelect"),0<r.length&&(n=new ru("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Ft)))}function Na(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var _t={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},es={},Td={};Ln&&(Td=document.createElement("div").style,"AnimationEvent"in window||(delete _t.animationend.animation,delete _t.animationiteration.animation,delete _t.animationstart.animation),"TransitionEvent"in window||delete _t.transitionend.transition);function ii(e){if(es[e])return es[e];if(!_t[e])return e;var n=_t[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Td)return es[e]=n[t];return e}var Pd=ii("animationend"),bd=ii("animationiteration"),Od=ii("animationstart"),Nd=ii("transitionend"),Id=new Map,Ac="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function it(e,n){Id.set(e,n),Tt(n,[e])}for(var ns=0;ns<Ac.length;ns++){var ts=Ac[ns],mh=ts.toLowerCase(),gh=ts[0].toUpperCase()+ts.slice(1);it(mh,"on"+gh)}it(Pd,"onAnimationEnd");it(bd,"onAnimationIteration");it(Od,"onAnimationStart");it("dblclick","onDoubleClick");it("focusin","onFocus");it("focusout","onBlur");it(Nd,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yh=new Set("cancel close invalid load scroll toggle".split(" ").concat(br));function Fc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,m3(r,n,void 0,e),e.currentTarget=null}function Ed(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Fc(a,l,u),o=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Fc(a,l,u),o=s}}}if(go)throw e=$s,go=!1,$s=null,e}function j(e,n){var t=n[nl];t===void 0&&(t=n[nl]=new Set);var r=e+"__bubble";t.has(r)||(Ld(n,e,2,!1),t.add(r))}function rs(e,n,t){var r=0;n&&(r|=4),Ld(t,e,r,n)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[Ia]){e[Ia]=!0,W0.forEach(function(t){t!=="selectionchange"&&(yh.has(t)||rs(t,!1,e),rs(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ia]||(n[Ia]=!0,rs("selectionchange",!1,n))}}function Ld(e,n,t,r){switch(md(n)){case 1:var a=E3;break;case 4:a=L3;break;default:a=nu}t=a.bind(null,n,t,e),a=void 0,!Gs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function as(e,n,t,r,a){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;i=i.return}for(;l!==null;){if(i=ft(l),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}l=l.parentNode}}r=r.return}nd(function(){var u=o,c=Xl(t),d=[];e:{var h=Id.get(e);if(h!==void 0){var m=ru,g=e;switch(e){case"keypress":if(Xa(t)===0)break e;case"keydown":case"keyup":m=j3;break;case"focusin":g="focus",m=Xi;break;case"focusout":g="blur",m=Xi;break;case"beforeblur":case"afterblur":m=Xi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=A3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Q3;break;case Pd:case bd:case Od:m=V3;break;case Nd:m=q3;break;case"scroll":m=R3;break;case"wheel":m=eh;break;case"copy":case"cut":case"paste":m=B3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Pc}var v=(n&4)!==0,k=!v&&e==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var p=u,y;p!==null;){y=p;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,f!==null&&(w=Kr(p,f),w!=null&&v.push(Qr(p,w,y)))),k)break;p=p.return}0<v.length&&(h=new m(h,g,null,t,c),d.push({event:h,listeners:v}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&t!==zs&&(g=t.relatedTarget||t.fromElement)&&(ft(g)||g[Rn]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(g=t.relatedTarget||t.toElement,m=u,g=g?ft(g):null,g!==null&&(k=Pt(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(v=xc,w="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=Pc,w="onPointerLeave",f="onPointerEnter",p="pointer"),k=m==null?h:Vt(m),y=g==null?h:Vt(g),h=new v(w,p+"leave",m,t,c),h.target=k,h.relatedTarget=y,w=null,ft(c)===u&&(v=new v(f,p+"enter",g,t,c),v.target=y,v.relatedTarget=k,w=v),k=w,m&&g)n:{for(v=m,f=g,p=0,y=v;y;y=bt(y))p++;for(y=0,w=f;w;w=bt(w))y++;for(;0<p-y;)v=bt(v),p--;for(;0<y-p;)f=bt(f),y--;for(;p--;){if(v===f||f!==null&&v===f.alternate)break n;v=bt(v),f=bt(f)}v=null}else v=null;m!==null&&_c(d,h,m,v,!1),g!==null&&k!==null&&_c(d,k,g,v,!0)}}e:{if(h=u?Vt(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var S=sh;else if(Nc(h))if(Sd)S=dh;else{S=uh;var M=lh}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=ch);if(S&&(S=S(e,u))){wd(d,S,t,c);break e}M&&M(e,h,u),e==="focusout"&&(M=h._wrapperState)&&M.controlled&&h.type==="number"&&_s(h,"number",h.value)}switch(M=u?Vt(u):window,e){case"focusin":(Nc(M)||M.contentEditable==="true")&&(Ft=M,Js=u,Dr=null);break;case"focusout":Dr=Js=Ft=null;break;case"mousedown":Qs=!0;break;case"contextmenu":case"mouseup":case"dragend":Qs=!1,Dc(d,t,c);break;case"selectionchange":if(hh)break;case"keydown":case"keyup":Dc(d,t,c)}var C;if(ou)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else At?vd(e,t)&&(T="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(yd&&t.locale!=="ko"&&(At||T!=="onCompositionStart"?T==="onCompositionEnd"&&At&&(C=gd()):(jn=c,tu="value"in jn?jn.value:jn.textContent,At=!0)),M=So(u,T),0<M.length&&(T=new Tc(T,e,null,t,c),d.push({event:T,listeners:M}),C?T.data=C:(C=kd(t),C!==null&&(T.data=C)))),(C=th?rh(e,t):ah(e,t))&&(u=So(u,"onBeforeInput"),0<u.length&&(c=new Tc("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=C))}Ed(d,n)})}function Qr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function So(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Kr(e,t),o!=null&&r.unshift(Qr(e,o,a)),o=Kr(e,n),o!=null&&r.push(Qr(e,o,a))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _c(e,n,t,r,a){for(var o=n._reactName,i=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,a?(s=Kr(t,o),s!=null&&i.unshift(Qr(t,s,l))):a||(s=Kr(t,o),s!=null&&i.push(Qr(t,s,l)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var vh=/\r\n?/g,kh=/\u0000|\uFFFD/g;function Vc(e){return(typeof e=="string"?e:""+e).replace(vh,`
`).replace(kh,"")}function Ea(e,n,t){if(n=Vc(n),Vc(e)!==n&&t)throw Error(P(425))}function Co(){}var Xs=null,qs=null;function Zs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var el=typeof setTimeout=="function"?setTimeout:void 0,wh=typeof clearTimeout=="function"?clearTimeout:void 0,Wc=typeof Promise=="function"?Promise:void 0,Sh=typeof queueMicrotask=="function"?queueMicrotask:typeof Wc<"u"?function(e){return Wc.resolve(null).then(e).catch(Ch)}:el;function Ch(e){setTimeout(function(){throw e})}function os(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),Ur(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Ur(n)}function qn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Bc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),kn="__reactFiber$"+dr,Xr="__reactProps$"+dr,Rn="__reactContainer$"+dr,nl="__reactEvents$"+dr,Mh="__reactListeners$"+dr,xh="__reactHandles$"+dr;function ft(e){var n=e[kn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Rn]||t[kn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Bc(e);e!==null;){if(t=e[kn])return t;e=Bc(e)}return n}e=t,t=e.parentNode}return null}function ha(e){return e=e[kn]||e[Rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function si(e){return e[Xr]||null}var tl=[],Wt=-1;function st(e){return{current:e}}function Y(e){0>Wt||(e.current=tl[Wt],tl[Wt]=null,Wt--)}function U(e,n){Wt++,tl[Wt]=e.current,e.current=n}var at={},Te=st(at),Fe=st(!1),vt=at;function er(e,n){var t=e.type.contextTypes;if(!t)return at;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in t)a[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function _e(e){return e=e.childContextTypes,e!=null}function Mo(){Y(Fe),Y(Te)}function Hc(e,n,t){if(Te.current!==at)throw Error(P(168));U(Te,n),U(Fe,t)}function Rd(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(P(108,l3(e)||"Unknown",a));return ee({},t,r)}function xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||at,vt=Te.current,U(Te,e),U(Fe,Fe.current),!0}function zc(e,n,t){var r=e.stateNode;if(!r)throw Error(P(169));t?(e=Rd(e,n,vt),r.__reactInternalMemoizedMergedChildContext=e,Y(Fe),Y(Te),U(Te,e)):Y(Fe),U(Fe,t)}var Pn=null,li=!1,is=!1;function Dd(e){Pn===null?Pn=[e]:Pn.push(e)}function Th(e){li=!0,Dd(e)}function lt(){if(!is&&Pn!==null){is=!0;var e=0,n=z;try{var t=Pn;for(z=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Pn=null,li=!1}catch(a){throw Pn!==null&&(Pn=Pn.slice(e+1)),od(ql,lt),a}finally{z=n,is=!1}}return null}var Bt=[],Ht=0,To=null,Po=0,Ze=[],en=0,kt=null,On=1,Nn="";function ut(e,n){Bt[Ht++]=Po,Bt[Ht++]=To,To=e,Po=n}function Ad(e,n,t){Ze[en++]=On,Ze[en++]=Nn,Ze[en++]=kt,kt=e;var r=On;e=Nn;var a=32-dn(r)-1;r&=~(1<<a),t+=1;var o=32-dn(n)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,On=1<<32-dn(n)+a|t<<a|r,Nn=o+e}else On=1<<o|t<<a|r,Nn=e}function su(e){e.return!==null&&(ut(e,1),Ad(e,1,0))}function lu(e){for(;e===To;)To=Bt[--Ht],Bt[Ht]=null,Po=Bt[--Ht],Bt[Ht]=null;for(;e===kt;)kt=Ze[--en],Ze[en]=null,Nn=Ze[--en],Ze[en]=null,On=Ze[--en],Ze[en]=null}var Ge=null,ze=null,Q=!1,un=null;function Fd(e,n){var t=nn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Kc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ge=e,ze=qn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ge=e,ze=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=kt!==null?{id:On,overflow:Nn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=nn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ge=e,ze=null,!0):!1;default:return!1}}function rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function al(e){if(Q){var n=ze;if(n){var t=n;if(!Kc(e,n)){if(rl(e))throw Error(P(418));n=qn(t.nextSibling);var r=Ge;n&&Kc(e,n)?Fd(r,t):(e.flags=e.flags&-4097|2,Q=!1,Ge=e)}}else{if(rl(e))throw Error(P(418));e.flags=e.flags&-4097|2,Q=!1,Ge=e}}}function Gc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function La(e){if(e!==Ge)return!1;if(!Q)return Gc(e),Q=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Zs(e.type,e.memoizedProps)),n&&(n=ze)){if(rl(e))throw _d(),Error(P(418));for(;n;)Fd(e,n),n=qn(n.nextSibling)}if(Gc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ze=qn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ze=null}}else ze=Ge?qn(e.stateNode.nextSibling):null;return!0}function _d(){for(var e=ze;e;)e=qn(e.nextSibling)}function nr(){ze=Ge=null,Q=!1}function uu(e){un===null?un=[e]:un.push(e)}var Ph=Vn.ReactCurrentBatchConfig;function vr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var r=t.stateNode}if(!r)throw Error(P(147,e));var a=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var l=a.refs;i===null?delete l[o]:l[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function Ra(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function $c(e){var n=e._init;return n(e._payload)}function Vd(e){function n(f,p){if(e){var y=f.deletions;y===null?(f.deletions=[p],f.flags|=16):y.push(p)}}function t(f,p){if(!e)return null;for(;p!==null;)n(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function a(f,p){return f=tt(f,p),f.index=0,f.sibling=null,f}function o(f,p,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<p?(f.flags|=2,p):y):(f.flags|=2,p)):(f.flags|=1048576,p)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,p,y,w){return p===null||p.tag!==6?(p=ps(y,f.mode,w),p.return=f,p):(p=a(p,y),p.return=f,p)}function s(f,p,y,w){var S=y.type;return S===Dt?c(f,p,y.props.children,w,y.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Kn&&$c(S)===p.type)?(w=a(p,y.props),w.ref=vr(f,p,y),w.return=f,w):(w=ao(y.type,y.key,y.props,null,f.mode,w),w.ref=vr(f,p,y),w.return=f,w)}function u(f,p,y,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=hs(y,f.mode,w),p.return=f,p):(p=a(p,y.children||[]),p.return=f,p)}function c(f,p,y,w,S){return p===null||p.tag!==7?(p=gt(y,f.mode,w,S),p.return=f,p):(p=a(p,y),p.return=f,p)}function d(f,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ps(""+p,f.mode,y),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ca:return y=ao(p.type,p.key,p.props,null,f.mode,y),y.ref=vr(f,null,p),y.return=f,y;case Rt:return p=hs(p,f.mode,y),p.return=f,p;case Kn:var w=p._init;return d(f,w(p._payload),y)}if(Tr(p)||pr(p))return p=gt(p,f.mode,y,null),p.return=f,p;Ra(f,p)}return null}function h(f,p,y,w){var S=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:l(f,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ca:return y.key===S?s(f,p,y,w):null;case Rt:return y.key===S?u(f,p,y,w):null;case Kn:return S=y._init,h(f,p,S(y._payload),w)}if(Tr(y)||pr(y))return S!==null?null:c(f,p,y,w,null);Ra(f,y)}return null}function m(f,p,y,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(y)||null,l(p,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ca:return f=f.get(w.key===null?y:w.key)||null,s(p,f,w,S);case Rt:return f=f.get(w.key===null?y:w.key)||null,u(p,f,w,S);case Kn:var M=w._init;return m(f,p,y,M(w._payload),S)}if(Tr(w)||pr(w))return f=f.get(y)||null,c(p,f,w,S,null);Ra(p,w)}return null}function g(f,p,y,w){for(var S=null,M=null,C=p,T=p=0,I=null;C!==null&&T<y.length;T++){C.index>T?(I=C,C=null):I=C.sibling;var E=h(f,C,y[T],w);if(E===null){C===null&&(C=I);break}e&&C&&E.alternate===null&&n(f,C),p=o(E,p,T),M===null?S=E:M.sibling=E,M=E,C=I}if(T===y.length)return t(f,C),Q&&ut(f,T),S;if(C===null){for(;T<y.length;T++)C=d(f,y[T],w),C!==null&&(p=o(C,p,T),M===null?S=C:M.sibling=C,M=C);return Q&&ut(f,T),S}for(C=r(f,C);T<y.length;T++)I=m(C,f,T,y[T],w),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?T:I.key),p=o(I,p,T),M===null?S=I:M.sibling=I,M=I);return e&&C.forEach(function(G){return n(f,G)}),Q&&ut(f,T),S}function v(f,p,y,w){var S=pr(y);if(typeof S!="function")throw Error(P(150));if(y=S.call(y),y==null)throw Error(P(151));for(var M=S=null,C=p,T=p=0,I=null,E=y.next();C!==null&&!E.done;T++,E=y.next()){C.index>T?(I=C,C=null):I=C.sibling;var G=h(f,C,E.value,w);if(G===null){C===null&&(C=I);break}e&&C&&G.alternate===null&&n(f,C),p=o(G,p,T),M===null?S=G:M.sibling=G,M=G,C=I}if(E.done)return t(f,C),Q&&ut(f,T),S;if(C===null){for(;!E.done;T++,E=y.next())E=d(f,E.value,w),E!==null&&(p=o(E,p,T),M===null?S=E:M.sibling=E,M=E);return Q&&ut(f,T),S}for(C=r(f,C);!E.done;T++,E=y.next())E=m(C,f,T,E.value,w),E!==null&&(e&&E.alternate!==null&&C.delete(E.key===null?T:E.key),p=o(E,p,T),M===null?S=E:M.sibling=E,M=E);return e&&C.forEach(function(J){return n(f,J)}),Q&&ut(f,T),S}function k(f,p,y,w){if(typeof y=="object"&&y!==null&&y.type===Dt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ca:e:{for(var S=y.key,M=p;M!==null;){if(M.key===S){if(S=y.type,S===Dt){if(M.tag===7){t(f,M.sibling),p=a(M,y.props.children),p.return=f,f=p;break e}}else if(M.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Kn&&$c(S)===M.type){t(f,M.sibling),p=a(M,y.props),p.ref=vr(f,M,y),p.return=f,f=p;break e}t(f,M);break}else n(f,M);M=M.sibling}y.type===Dt?(p=gt(y.props.children,f.mode,w,y.key),p.return=f,f=p):(w=ao(y.type,y.key,y.props,null,f.mode,w),w.ref=vr(f,p,y),w.return=f,f=w)}return i(f);case Rt:e:{for(M=y.key;p!==null;){if(p.key===M)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){t(f,p.sibling),p=a(p,y.children||[]),p.return=f,f=p;break e}else{t(f,p);break}else n(f,p);p=p.sibling}p=hs(y,f.mode,w),p.return=f,f=p}return i(f);case Kn:return M=y._init,k(f,p,M(y._payload),w)}if(Tr(y))return g(f,p,y,w);if(pr(y))return v(f,p,y,w);Ra(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(t(f,p.sibling),p=a(p,y),p.return=f,f=p):(t(f,p),p=ps(y,f.mode,w),p.return=f,f=p),i(f)):t(f,p)}return k}var tr=Vd(!0),Wd=Vd(!1),bo=st(null),Oo=null,zt=null,cu=null;function du(){cu=zt=Oo=null}function fu(e){var n=bo.current;Y(bo),e._currentValue=n}function ol(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Jt(e,n){Oo=e,cu=zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ae=!0),e.firstContext=null)}function rn(e){var n=e._currentValue;if(cu!==e)if(e={context:e,memoizedValue:n,next:null},zt===null){if(Oo===null)throw Error(P(308));zt=e,Oo.dependencies={lanes:0,firstContext:e}}else zt=zt.next=e;return n}var pt=null;function pu(e){pt===null?pt=[e]:pt.push(e)}function Bd(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,pu(n)):(t.next=a.next,a.next=t),n.interleaved=t,Dn(e,r)}function Dn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Gn=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function In(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Zn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Dn(e,t)}return a=r.interleaved,a===null?(n.next=n,pu(r)):(n.next=a.next,a.next=n),r.interleaved=n,Dn(e,t)}function qa(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Zl(e,t)}}function Uc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?a=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?a=o=n:o=o.next=n}else a=o=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function No(e,n,t,r){var a=e.updateQueue;Gn=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?o=u:i.next=u,i=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==i&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=a.baseState;i=0,c=u=s=null,l=o;do{var h=l.lane,m=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(h=n,m=t,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(m,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(m,d,h):g,h==null)break e;d=ee({},d,h);break e;case 2:Gn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=m,s=d):c=c.next=m,i|=h;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);if(c===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,n=a.shared.interleaved,n!==null){a=n;do i|=a.lane,a=a.next;while(a!==n)}else o===null&&(a.shared.lanes=0);St|=i,e.lanes=i,e.memoizedState=d}}function jc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(P(191,a));a.call(r)}}}var ma={},Cn=st(ma),qr=st(ma),Zr=st(ma);function ht(e){if(e===ma)throw Error(P(174));return e}function mu(e,n){switch(U(Zr,n),U(qr,e),U(Cn,ma),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ws(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ws(n,e)}Y(Cn),U(Cn,n)}function rr(){Y(Cn),Y(qr),Y(Zr)}function zd(e){ht(Zr.current);var n=ht(Cn.current),t=Ws(n,e.type);n!==t&&(U(qr,e),U(Cn,t))}function gu(e){qr.current===e&&(Y(Cn),Y(qr))}var q=st(0);function Io(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ss=[];function yu(){for(var e=0;e<ss.length;e++)ss[e]._workInProgressVersionPrimary=null;ss.length=0}var Za=Vn.ReactCurrentDispatcher,ls=Vn.ReactCurrentBatchConfig,wt=0,Z=null,ue=null,fe=null,Eo=!1,Ar=!1,ea=0,bh=0;function Se(){throw Error(P(321))}function vu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!pn(e[t],n[t]))return!1;return!0}function ku(e,n,t,r,a,o){if(wt=o,Z=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Za.current=e===null||e.memoizedState===null?Eh:Lh,e=t(r,a),Ar){o=0;do{if(Ar=!1,ea=0,25<=o)throw Error(P(301));o+=1,fe=ue=null,n.updateQueue=null,Za.current=Rh,e=t(r,a)}while(Ar)}if(Za.current=Lo,n=ue!==null&&ue.next!==null,wt=0,fe=ue=Z=null,Eo=!1,n)throw Error(P(300));return e}function wu(){var e=ea!==0;return ea=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?Z.memoizedState=fe=e:fe=fe.next=e,fe}function an(){if(ue===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var n=fe===null?Z.memoizedState:fe.next;if(n!==null)fe=n,ue=e;else{if(e===null)throw Error(P(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},fe===null?Z.memoizedState=fe=e:fe=fe.next=e}return fe}function na(e,n){return typeof n=="function"?n(e):n}function us(e){var n=an(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=ue,a=r.baseQueue,o=t.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}r.baseQueue=a=o,t.pending=null}if(a!==null){o=a.next,r=r.baseState;var l=i=null,s=null,u=o;do{var c=u.lane;if((wt&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,i=r):s=s.next=d,Z.lanes|=c,St|=c}u=u.next}while(u!==null&&u!==o);s===null?i=r:s.next=l,pn(r,n.memoizedState)||(Ae=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do o=a.lane,Z.lanes|=o,St|=o,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function cs(e){var n=an(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,o=n.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);pn(o,n.memoizedState)||(Ae=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Kd(){}function Gd(e,n){var t=Z,r=an(),a=n(),o=!pn(r.memoizedState,a);if(o&&(r.memoizedState=a,Ae=!0),r=r.queue,Su(jd.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||fe!==null&&fe.memoizedState.tag&1){if(t.flags|=2048,ta(9,Ud.bind(null,t,r,a,n),void 0,null),pe===null)throw Error(P(349));wt&30||$d(t,n,a)}return a}function $d(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ud(e,n,t,r){n.value=t,n.getSnapshot=r,Yd(n)&&Jd(e)}function jd(e,n,t){return t(function(){Yd(n)&&Jd(e)})}function Yd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!pn(e,t)}catch{return!0}}function Jd(e){var n=Dn(e,1);n!==null&&fn(n,e,1,-1)}function Yc(e){var n=gn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},n.queue=e,e=e.dispatch=Ih.bind(null,Z,e),[n.memoizedState,e]}function ta(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Qd(){return an().memoizedState}function eo(e,n,t,r){var a=gn();Z.flags|=e,a.memoizedState=ta(1|n,t,void 0,r===void 0?null:r)}function ui(e,n,t,r){var a=an();r=r===void 0?null:r;var o=void 0;if(ue!==null){var i=ue.memoizedState;if(o=i.destroy,r!==null&&vu(r,i.deps)){a.memoizedState=ta(n,t,o,r);return}}Z.flags|=e,a.memoizedState=ta(1|n,t,o,r)}function Jc(e,n){return eo(8390656,8,e,n)}function Su(e,n){return ui(2048,8,e,n)}function Xd(e,n){return ui(4,2,e,n)}function qd(e,n){return ui(4,4,e,n)}function Zd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ef(e,n,t){return t=t!=null?t.concat([e]):null,ui(4,4,Zd.bind(null,n,e),t)}function Cu(){}function nf(e,n){var t=an();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function tf(e,n){var t=an();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vu(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function rf(e,n,t){return wt&21?(pn(t,n)||(t=ld(),Z.lanes|=t,St|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=t)}function Oh(e,n){var t=z;z=t!==0&&4>t?t:4,e(!0);var r=ls.transition;ls.transition={};try{e(!1),n()}finally{z=t,ls.transition=r}}function af(){return an().memoizedState}function Nh(e,n,t){var r=nt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},of(e))sf(n,t);else if(t=Bd(e,n,t,r),t!==null){var a=Ne();fn(t,e,r,a),lf(t,n,r)}}function Ih(e,n,t){var r=nt(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(of(e))sf(n,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,l=o(i,t);if(a.hasEagerState=!0,a.eagerState=l,pn(l,i)){var s=n.interleaved;s===null?(a.next=a,pu(n)):(a.next=s.next,s.next=a),n.interleaved=a;return}}catch{}finally{}t=Bd(e,n,a,r),t!==null&&(a=Ne(),fn(t,e,r,a),lf(t,n,r))}}function of(e){var n=e.alternate;return e===Z||n!==null&&n===Z}function sf(e,n){Ar=Eo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function lf(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Zl(e,t)}}var Lo={readContext:rn,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Eh={readContext:rn,useCallback:function(e,n){return gn().memoizedState=[e,n===void 0?null:n],e},useContext:rn,useEffect:Jc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,eo(4194308,4,Zd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return eo(4194308,4,e,n)},useInsertionEffect:function(e,n){return eo(4,2,e,n)},useMemo:function(e,n){var t=gn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=gn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Nh.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var n=gn();return e={current:e},n.memoizedState=e},useState:Yc,useDebugValue:Cu,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Yc(!1),n=e[0];return e=Oh.bind(null,e[1]),gn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Z,a=gn();if(Q){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),pe===null)throw Error(P(349));wt&30||$d(r,n,t)}a.memoizedState=t;var o={value:t,getSnapshot:n};return a.queue=o,Jc(jd.bind(null,r,o,e),[e]),r.flags|=2048,ta(9,Ud.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=gn(),n=pe.identifierPrefix;if(Q){var t=Nn,r=On;t=(r&~(1<<32-dn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ea++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=bh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Lh={readContext:rn,useCallback:nf,useContext:rn,useEffect:Su,useImperativeHandle:ef,useInsertionEffect:Xd,useLayoutEffect:qd,useMemo:tf,useReducer:us,useRef:Qd,useState:function(){return us(na)},useDebugValue:Cu,useDeferredValue:function(e){var n=an();return rf(n,ue.memoizedState,e)},useTransition:function(){var e=us(na)[0],n=an().memoizedState;return[e,n]},useMutableSource:Kd,useSyncExternalStore:Gd,useId:af,unstable_isNewReconciler:!1},Rh={readContext:rn,useCallback:nf,useContext:rn,useEffect:Su,useImperativeHandle:ef,useInsertionEffect:Xd,useLayoutEffect:qd,useMemo:tf,useReducer:cs,useRef:Qd,useState:function(){return cs(na)},useDebugValue:Cu,useDeferredValue:function(e){var n=an();return ue===null?n.memoizedState=e:rf(n,ue.memoizedState,e)},useTransition:function(){var e=cs(na)[0],n=an().memoizedState;return[e,n]},useMutableSource:Kd,useSyncExternalStore:Gd,useId:af,unstable_isNewReconciler:!1};function sn(e,n){if(e&&e.defaultProps){n=ee({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function il(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ee({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ci={isMounted:function(e){return(e=e._reactInternals)?Pt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ne(),a=nt(e),o=In(r,a);o.payload=n,t!=null&&(o.callback=t),n=Zn(e,o,a),n!==null&&(fn(n,e,a,r),qa(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ne(),a=nt(e),o=In(r,a);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Zn(e,o,a),n!==null&&(fn(n,e,a,r),qa(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ne(),r=nt(e),a=In(t,r);a.tag=2,n!=null&&(a.callback=n),n=Zn(e,a,r),n!==null&&(fn(n,e,r,t),qa(n,e,r))}};function Qc(e,n,t,r,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!Yr(t,r)||!Yr(a,o):!0}function uf(e,n,t){var r=!1,a=at,o=n.contextType;return typeof o=="object"&&o!==null?o=rn(o):(a=_e(n)?vt:Te.current,r=n.contextTypes,o=(r=r!=null)?er(e,a):at),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ci,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),n}function Xc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ci.enqueueReplaceState(n,n.state,null)}function sl(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},hu(e);var o=n.contextType;typeof o=="object"&&o!==null?a.context=rn(o):(o=_e(n)?vt:Te.current,a.context=er(e,o)),a.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(il(e,n,o,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&ci.enqueueReplaceState(a,a.state,null),No(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,n){try{var t="",r=n;do t+=s3(r),r=r.return;while(r);var a=t}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:a,digest:null}}function ds(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ll(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Dh=typeof WeakMap=="function"?WeakMap:Map;function cf(e,n,t){t=In(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Do||(Do=!0,vl=r),ll(e,n)},t}function df(e,n,t){t=In(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){ll(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){ll(e,n),typeof r!="function"&&(et===null?et=new Set([this]):et.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function qc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Dh;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=Yh.bind(null,e,n,t),n.then(e,e))}function Zc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function e1(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=In(-1,1),n.tag=2,Zn(t,n,1))),t.lanes|=1),e)}var Ah=Vn.ReactCurrentOwner,Ae=!1;function Oe(e,n,t,r){n.child=e===null?Wd(n,null,t,r):tr(n,e.child,t,r)}function n1(e,n,t,r,a){t=t.render;var o=n.ref;return Jt(n,a),r=ku(e,n,t,r,o,a),t=wu(),e!==null&&!Ae?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,An(e,n,a)):(Q&&t&&su(n),n.flags|=1,Oe(e,n,r,a),n.child)}function t1(e,n,t,r,a){if(e===null){var o=t.type;return typeof o=="function"&&!Iu(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,ff(e,n,o,r,a)):(e=ao(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Yr,t(i,r)&&e.ref===n.ref)return An(e,n,a)}return n.flags|=1,e=tt(o,r),e.ref=n.ref,e.return=n,n.child=e}function ff(e,n,t,r,a){if(e!==null){var o=e.memoizedProps;if(Yr(o,r)&&e.ref===n.ref)if(Ae=!1,n.pendingProps=r=o,(e.lanes&a)!==0)e.flags&131072&&(Ae=!0);else return n.lanes=e.lanes,An(e,n,a)}return ul(e,n,t,r,a)}function pf(e,n,t){var r=n.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Gt,He),He|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,U(Gt,He),He|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,U(Gt,He),He|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,U(Gt,He),He|=r;return Oe(e,n,a,t),n.child}function hf(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ul(e,n,t,r,a){var o=_e(t)?vt:Te.current;return o=er(n,o),Jt(n,a),t=ku(e,n,t,r,o,a),r=wu(),e!==null&&!Ae?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,An(e,n,a)):(Q&&r&&su(n),n.flags|=1,Oe(e,n,t,a),n.child)}function r1(e,n,t,r,a){if(_e(t)){var o=!0;xo(n)}else o=!1;if(Jt(n,a),n.stateNode===null)no(e,n),uf(n,t,r),sl(n,t,r,a),r=!0;else if(e===null){var i=n.stateNode,l=n.memoizedProps;i.props=l;var s=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=rn(u):(u=_e(t)?vt:Te.current,u=er(n,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Xc(n,i,r,u),Gn=!1;var h=n.memoizedState;i.state=h,No(n,r,i,a),s=n.memoizedState,l!==r||h!==s||Fe.current||Gn?(typeof c=="function"&&(il(n,t,c,r),s=n.memoizedState),(l=Gn||Qc(n,t,l,r,h,s,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Hd(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:sn(n.type,l),i.props=u,d=n.pendingProps,h=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=rn(s):(s=_e(t)?vt:Te.current,s=er(n,s));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Xc(n,i,r,s),Gn=!1,h=n.memoizedState,i.state=h,No(n,r,i,a);var g=n.memoizedState;l!==d||h!==g||Fe.current||Gn?(typeof m=="function"&&(il(n,t,m,r),g=n.memoizedState),(u=Gn||Qc(n,t,u,r,h,g,s)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,g,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,g,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=g),i.props=r,i.state=g,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return cl(e,n,t,r,o,a)}function cl(e,n,t,r,a,o){hf(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return a&&zc(n,t,!1),An(e,n,o);r=n.stateNode,Ah.current=n;var l=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=tr(n,e.child,null,o),n.child=tr(n,null,l,o)):Oe(e,n,l,o),n.memoizedState=r.state,a&&zc(n,t,!0),n.child}function mf(e){var n=e.stateNode;n.pendingContext?Hc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Hc(e,n.context,!1),mu(e,n.containerInfo)}function a1(e,n,t,r,a){return nr(),uu(a),n.flags|=256,Oe(e,n,t,r),n.child}var dl={dehydrated:null,treeContext:null,retryLane:0};function fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function gf(e,n,t){var r=n.pendingProps,a=q.current,o=!1,i=(n.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),U(q,a&1),e===null)return al(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=pi(i,r,0,null),e=gt(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=fl(t),n.memoizedState=dl,e):Mu(n,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Fh(e,n,i,r,l,a,t);if(o){o=r.fallback,i=n.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=tt(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=tt(l,o):(o=gt(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?fl(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=dl,r}return o=e.child,e=o.sibling,r=tt(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Mu(e,n){return n=pi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Da(e,n,t,r){return r!==null&&uu(r),tr(n,e.child,null,t),e=Mu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Fh(e,n,t,r,a,o,i){if(t)return n.flags&256?(n.flags&=-257,r=ds(Error(P(422))),Da(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,a=n.mode,r=pi({mode:"visible",children:r.children},a,0,null),o=gt(o,a,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&tr(n,e.child,null,i),n.child.memoizedState=fl(i),n.memoizedState=dl,o);if(!(n.mode&1))return Da(e,n,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(P(419)),r=ds(o,r,void 0),Da(e,n,i,r)}if(l=(i&e.childLanes)!==0,Ae||l){if(r=pe,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Dn(e,a),fn(r,e,a,-1))}return Nu(),r=ds(Error(P(421))),Da(e,n,i,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Jh.bind(null,e),a._reactRetry=n,null):(e=o.treeContext,ze=qn(a.nextSibling),Ge=n,Q=!0,un=null,e!==null&&(Ze[en++]=On,Ze[en++]=Nn,Ze[en++]=kt,On=e.id,Nn=e.overflow,kt=n),n=Mu(n,r.children),n.flags|=4096,n)}function o1(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ol(e.return,n,t)}function fs(e,n,t,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=a)}function yf(e,n,t){var r=n.pendingProps,a=r.revealOrder,o=r.tail;if(Oe(e,n,r.children,t),r=q.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&o1(e,t,n);else if(e.tag===19)o1(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(q,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Io(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),fs(n,!1,a,t,o);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Io(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}fs(n,!0,t,null,o);break;case"together":fs(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function no(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function An(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),St|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=tt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=tt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function _h(e,n,t){switch(n.tag){case 3:mf(n),nr();break;case 5:zd(n);break;case 1:_e(n.type)&&xo(n);break;case 4:mu(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;U(bo,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(U(q,q.current&1),n.flags|=128,null):t&n.child.childLanes?gf(e,n,t):(U(q,q.current&1),e=An(e,n,t),e!==null?e.sibling:null);U(q,q.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return yf(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),U(q,q.current),r)break;return null;case 22:case 23:return n.lanes=0,pf(e,n,t)}return An(e,n,t)}var vf,pl,kf,wf;vf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};pl=function(){};kf=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,ht(Cn.current);var o=null;switch(t){case"input":a=As(e,a),r=As(e,r),o=[];break;case"select":a=ee({},a,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":a=Vs(e,a),r=Vs(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Co)}Bs(t,r);var i;t=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(o||(o=[]),o.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&j("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};wf=function(e,n,t,r){t!==r&&(n.flags|=4)};function kr(e,n){if(!Q)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Vh(e,n,t){var r=n.pendingProps;switch(lu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(n),null;case 1:return _e(n.type)&&Mo(),Ce(n),null;case 3:return r=n.stateNode,rr(),Y(Fe),Y(Te),yu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(La(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,un!==null&&(Sl(un),un=null))),pl(e,n),Ce(n),null;case 5:gu(n);var a=ht(Zr.current);if(t=n.type,e!==null&&n.stateNode!=null)kf(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(P(166));return Ce(n),null}if(e=ht(Cn.current),La(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[kn]=n,r[Xr]=o,e=(n.mode&1)!==0,t){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(a=0;a<br.length;a++)j(br[a],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":hc(r,o),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},j("invalid",r);break;case"textarea":gc(r,o),j("invalid",r)}Bs(t,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ea(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ea(r.textContent,l,e),a=["children",""+l]):Hr.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&j("scroll",r)}switch(t){case"input":Ma(r),mc(r,o,!0);break;case"textarea":Ma(r),yc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Co)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=j0(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[kn]=n,e[Xr]=r,vf(e,n,!1,!1),n.stateNode=e;e:{switch(i=Hs(t,r),t){case"dialog":j("cancel",e),j("close",e),a=r;break;case"iframe":case"object":case"embed":j("load",e),a=r;break;case"video":case"audio":for(a=0;a<br.length;a++)j(br[a],e);a=r;break;case"source":j("error",e),a=r;break;case"img":case"image":case"link":j("error",e),j("load",e),a=r;break;case"details":j("toggle",e),a=r;break;case"input":hc(e,r),a=As(e,r),j("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ee({},r,{value:void 0}),j("invalid",e);break;case"textarea":gc(e,r),a=Vs(e,r),j("invalid",e);break;default:a=r}Bs(t,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Q0(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Y0(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&zr(e,s):typeof s=="number"&&zr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&j("scroll",e):s!=null&&jl(e,o,s,i))}switch(t){case"input":Ma(e),mc(e,r,!1);break;case"textarea":Ma(e),yc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?$t(e,!!r.multiple,o,!1):r.defaultValue!=null&&$t(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Co)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ce(n),null;case 6:if(e&&n.stateNode!=null)wf(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(P(166));if(t=ht(Zr.current),ht(Cn.current),La(n)){if(r=n.stateNode,t=n.memoizedProps,r[kn]=n,(o=r.nodeValue!==t)&&(e=Ge,e!==null))switch(e.tag){case 3:Ea(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ea(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[kn]=n,n.stateNode=r}return Ce(n),null;case 13:if(Y(q),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&ze!==null&&n.mode&1&&!(n.flags&128))_d(),nr(),n.flags|=98560,o=!1;else if(o=La(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[kn]=n}else nr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ce(n),o=!1}else un!==null&&(Sl(un),un=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||q.current&1?ce===0&&(ce=3):Nu())),n.updateQueue!==null&&(n.flags|=4),Ce(n),null);case 4:return rr(),pl(e,n),e===null&&Jr(n.stateNode.containerInfo),Ce(n),null;case 10:return fu(n.type._context),Ce(n),null;case 17:return _e(n.type)&&Mo(),Ce(n),null;case 19:if(Y(q),o=n.memoizedState,o===null)return Ce(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)kr(o,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Io(e),i!==null){for(n.flags|=128,kr(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return U(q,q.current&1|2),n.child}e=e.sibling}o.tail!==null&&re()>or&&(n.flags|=128,r=!0,kr(o,!1),n.lanes=4194304)}else{if(!r)if(e=Io(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),kr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Q)return Ce(n),null}else 2*re()-o.renderingStartTime>or&&t!==1073741824&&(n.flags|=128,r=!0,kr(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=re(),n.sibling=null,t=q.current,U(q,r?t&1|2:t&1),n):(Ce(n),null);case 22:case 23:return Ou(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?He&1073741824&&(Ce(n),n.subtreeFlags&6&&(n.flags|=8192)):Ce(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function Wh(e,n){switch(lu(n),n.tag){case 1:return _e(n.type)&&Mo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return rr(),Y(Fe),Y(Te),yu(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return gu(n),null;case 13:if(Y(q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));nr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(q),null;case 4:return rr(),null;case 10:return fu(n.type._context),null;case 22:case 23:return Ou(),null;case 24:return null;default:return null}}var Aa=!1,xe=!1,Bh=typeof WeakSet=="function"?WeakSet:Set,N=null;function Kt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ne(e,n,r)}else t.current=null}function hl(e,n,t){try{t()}catch(r){ne(e,n,r)}}var i1=!1;function Hh(e,n){if(Xs=ko,e=xd(),iu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,l=-1,s=-1,u=0,c=0,d=e,h=null;n:for(;;){for(var m;d!==t||a!==0&&d.nodeType!==3||(l=i+a),d!==o||r!==0&&d.nodeType!==3||(s=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===e)break n;if(h===t&&++u===a&&(l=i),h===o&&++c===r&&(s=i),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(qs={focusedElem:e,selectionRange:t},ko=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,k=g.memoizedState,f=n.stateNode,p=f.getSnapshotBeforeUpdate(n.elementType===n.type?v:sn(n.type,v),k);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){ne(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return g=i1,i1=!1,g}function Fr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&hl(n,t,o)}a=a.next}while(a!==r)}}function di(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ml(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Sf(e){var n=e.alternate;n!==null&&(e.alternate=null,Sf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[kn],delete n[Xr],delete n[nl],delete n[Mh],delete n[xh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cf(e){return e.tag===5||e.tag===3||e.tag===4}function s1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Co));else if(r!==4&&(e=e.child,e!==null))for(gl(e,n,t),e=e.sibling;e!==null;)gl(e,n,t),e=e.sibling}function yl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yl(e,n,t),e=e.sibling;e!==null;)yl(e,n,t),e=e.sibling}var ye=null,ln=!1;function Bn(e,n,t){for(t=t.child;t!==null;)Mf(e,n,t),t=t.sibling}function Mf(e,n,t){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(ri,t)}catch{}switch(t.tag){case 5:xe||Kt(t,n);case 6:var r=ye,a=ln;ye=null,Bn(e,n,t),ye=r,ln=a,ye!==null&&(ln?(e=ye,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ye.removeChild(t.stateNode));break;case 18:ye!==null&&(ln?(e=ye,t=t.stateNode,e.nodeType===8?os(e.parentNode,t):e.nodeType===1&&os(e,t),Ur(e)):os(ye,t.stateNode));break;case 4:r=ye,a=ln,ye=t.stateNode.containerInfo,ln=!0,Bn(e,n,t),ye=r,ln=a;break;case 0:case 11:case 14:case 15:if(!xe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&hl(t,n,i),a=a.next}while(a!==r)}Bn(e,n,t);break;case 1:if(!xe&&(Kt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){ne(t,n,l)}Bn(e,n,t);break;case 21:Bn(e,n,t);break;case 22:t.mode&1?(xe=(r=xe)||t.memoizedState!==null,Bn(e,n,t),xe=r):Bn(e,n,t);break;default:Bn(e,n,t)}}function l1(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Bh),n.forEach(function(r){var a=Qh.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function on(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var o=e,i=n,l=i;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,ln=!1;break e;case 3:ye=l.stateNode.containerInfo,ln=!0;break e;case 4:ye=l.stateNode.containerInfo,ln=!0;break e}l=l.return}if(ye===null)throw Error(P(160));Mf(o,i,a),ye=null,ln=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){ne(a,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)xf(n,e),n=n.sibling}function xf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(n,e),mn(e),r&4){try{Fr(3,e,e.return),di(3,e)}catch(v){ne(e,e.return,v)}try{Fr(5,e,e.return)}catch(v){ne(e,e.return,v)}}break;case 1:on(n,e),mn(e),r&512&&t!==null&&Kt(t,t.return);break;case 5:if(on(n,e),mn(e),r&512&&t!==null&&Kt(t,t.return),e.flags&32){var a=e.stateNode;try{zr(a,"")}catch(v){ne(e,e.return,v)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&$0(a,o),Hs(l,i);var u=Hs(l,o);for(i=0;i<s.length;i+=2){var c=s[i],d=s[i+1];c==="style"?Q0(a,d):c==="dangerouslySetInnerHTML"?Y0(a,d):c==="children"?zr(a,d):jl(a,c,d,u)}switch(l){case"input":Fs(a,o);break;case"textarea":U0(a,o);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?$t(a,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?$t(a,!!o.multiple,o.defaultValue,!0):$t(a,!!o.multiple,o.multiple?[]:"",!1))}a[Xr]=o}catch(v){ne(e,e.return,v)}}break;case 6:if(on(n,e),mn(e),r&4){if(e.stateNode===null)throw Error(P(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(v){ne(e,e.return,v)}}break;case 3:if(on(n,e),mn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ur(n.containerInfo)}catch(v){ne(e,e.return,v)}break;case 4:on(n,e),mn(e);break;case 13:on(n,e),mn(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Pu=re())),r&4&&l1(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(xe=(u=xe)||c,on(n,e),xe=u):on(n,e),mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(N=e,c=e.child;c!==null;){for(d=N=c;N!==null;){switch(h=N,m=h.child,h.tag){case 0:case 11:case 14:case 15:Fr(4,h,h.return);break;case 1:Kt(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(v){ne(r,t,v)}}break;case 5:Kt(h,h.return);break;case 22:if(h.memoizedState!==null){c1(d);continue}}m!==null?(m.return=h,N=m):c1(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{a=d.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=J0("display",i))}catch(v){ne(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ne(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:on(n,e),mn(e),r&4&&l1(e);break;case 21:break;default:on(n,e),mn(e)}}function mn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Cf(t)){var r=t;break e}t=t.return}throw Error(P(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(zr(a,""),r.flags&=-33);var o=s1(e);yl(e,o,a);break;case 3:case 4:var i=r.stateNode.containerInfo,l=s1(e);gl(e,l,i);break;default:throw Error(P(161))}}catch(s){ne(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zh(e,n,t){N=e,Tf(e)}function Tf(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var a=N,o=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||Aa;if(!i){var l=a.alternate,s=l!==null&&l.memoizedState!==null||xe;l=Aa;var u=xe;if(Aa=i,(xe=s)&&!u)for(N=a;N!==null;)i=N,s=i.child,i.tag===22&&i.memoizedState!==null?d1(a):s!==null?(s.return=i,N=s):d1(a);for(;o!==null;)N=o,Tf(o),o=o.sibling;N=a,Aa=l,xe=u}u1(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,N=o):u1(e)}}function u1(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:xe||di(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!xe)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:sn(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&jc(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}jc(n,i,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ur(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}xe||n.flags&512&&ml(n)}catch(h){ne(n,n.return,h)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function c1(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function d1(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{di(4,n)}catch(s){ne(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(s){ne(n,a,s)}}var o=n.return;try{ml(n)}catch(s){ne(n,o,s)}break;case 5:var i=n.return;try{ml(n)}catch(s){ne(n,i,s)}}}catch(s){ne(n,n.return,s)}if(n===e){N=null;break}var l=n.sibling;if(l!==null){l.return=n.return,N=l;break}N=n.return}}var Kh=Math.ceil,Ro=Vn.ReactCurrentDispatcher,xu=Vn.ReactCurrentOwner,tn=Vn.ReactCurrentBatchConfig,W=0,pe=null,ie=null,ke=0,He=0,Gt=st(0),ce=0,ra=null,St=0,fi=0,Tu=0,_r=null,De=null,Pu=0,or=1/0,Tn=null,Do=!1,vl=null,et=null,Fa=!1,Yn=null,Ao=0,Vr=0,kl=null,to=-1,ro=0;function Ne(){return W&6?re():to!==-1?to:to=re()}function nt(e){return e.mode&1?W&2&&ke!==0?ke&-ke:Ph.transition!==null?(ro===0&&(ro=ld()),ro):(e=z,e!==0||(e=window.event,e=e===void 0?16:md(e.type)),e):1}function fn(e,n,t,r){if(50<Vr)throw Vr=0,kl=null,Error(P(185));fa(e,t,r),(!(W&2)||e!==pe)&&(e===pe&&(!(W&2)&&(fi|=t),ce===4&&Un(e,ke)),Ve(e,r),t===1&&W===0&&!(n.mode&1)&&(or=re()+500,li&&lt()))}function Ve(e,n){var t=e.callbackNode;P3(e,n);var r=vo(e,e===pe?ke:0);if(r===0)t!==null&&wc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&wc(t),n===1)e.tag===0?Th(f1.bind(null,e)):Dd(f1.bind(null,e)),Sh(function(){!(W&6)&&lt()}),t=null;else{switch(ud(r)){case 1:t=ql;break;case 4:t=id;break;case 16:t=yo;break;case 536870912:t=sd;break;default:t=yo}t=Rf(t,Pf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Pf(e,n){if(to=-1,ro=0,W&6)throw Error(P(327));var t=e.callbackNode;if(Qt()&&e.callbackNode!==t)return null;var r=vo(e,e===pe?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Fo(e,r);else{n=r;var a=W;W|=2;var o=Of();(pe!==e||ke!==n)&&(Tn=null,or=re()+500,mt(e,n));do try{Uh();break}catch(l){bf(e,l)}while(!0);du(),Ro.current=o,W=a,ie!==null?n=0:(pe=null,ke=0,n=ce)}if(n!==0){if(n===2&&(a=Us(e),a!==0&&(r=a,n=wl(e,a))),n===1)throw t=ra,mt(e,0),Un(e,r),Ve(e,re()),t;if(n===6)Un(e,r);else{if(a=e.current.alternate,!(r&30)&&!Gh(a)&&(n=Fo(e,r),n===2&&(o=Us(e),o!==0&&(r=o,n=wl(e,o))),n===1))throw t=ra,mt(e,0),Un(e,r),Ve(e,re()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(P(345));case 2:ct(e,De,Tn);break;case 3:if(Un(e,r),(r&130023424)===r&&(n=Pu+500-re(),10<n)){if(vo(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=el(ct.bind(null,e,De,Tn),n);break}ct(e,De,Tn);break;case 4:if(Un(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var i=31-dn(r);o=1<<i,i=n[i],i>a&&(a=i),r&=~o}if(r=a,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kh(r/1960))-r,10<r){e.timeoutHandle=el(ct.bind(null,e,De,Tn),r);break}ct(e,De,Tn);break;case 5:ct(e,De,Tn);break;default:throw Error(P(329))}}}return Ve(e,re()),e.callbackNode===t?Pf.bind(null,e):null}function wl(e,n){var t=_r;return e.current.memoizedState.isDehydrated&&(mt(e,n).flags|=256),e=Fo(e,n),e!==2&&(n=De,De=t,n!==null&&Sl(n)),e}function Sl(e){De===null?De=e:De.push.apply(De,e)}function Gh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],o=a.getSnapshot;a=a.value;try{if(!pn(o(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Un(e,n){for(n&=~Tu,n&=~fi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-dn(n),r=1<<t;e[t]=-1,n&=~r}}function f1(e){if(W&6)throw Error(P(327));Qt();var n=vo(e,0);if(!(n&1))return Ve(e,re()),null;var t=Fo(e,n);if(e.tag!==0&&t===2){var r=Us(e);r!==0&&(n=r,t=wl(e,r))}if(t===1)throw t=ra,mt(e,0),Un(e,n),Ve(e,re()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ct(e,De,Tn),Ve(e,re()),null}function bu(e,n){var t=W;W|=1;try{return e(n)}finally{W=t,W===0&&(or=re()+500,li&&lt())}}function Ct(e){Yn!==null&&Yn.tag===0&&!(W&6)&&Qt();var n=W;W|=1;var t=tn.transition,r=z;try{if(tn.transition=null,z=1,e)return e()}finally{z=r,tn.transition=t,W=n,!(W&6)&&lt()}}function Ou(){He=Gt.current,Y(Gt)}function mt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,wh(t)),ie!==null)for(t=ie.return;t!==null;){var r=t;switch(lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mo();break;case 3:rr(),Y(Fe),Y(Te),yu();break;case 5:gu(r);break;case 4:rr();break;case 13:Y(q);break;case 19:Y(q);break;case 10:fu(r.type._context);break;case 22:case 23:Ou()}t=t.return}if(pe=e,ie=e=tt(e.current,null),ke=He=n,ce=0,ra=null,Tu=fi=St=0,De=_r=null,pt!==null){for(n=0;n<pt.length;n++)if(t=pt[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=a,r.next=i}t.pending=r}pt=null}return e}function bf(e,n){do{var t=ie;try{if(du(),Za.current=Lo,Eo){for(var r=Z.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Eo=!1}if(wt=0,fe=ue=Z=null,Ar=!1,ea=0,xu.current=null,t===null||t.return===null){ce=1,ra=n,ie=null;break}e:{var o=e,i=t.return,l=t,s=n;if(n=ke,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Zc(i);if(m!==null){m.flags&=-257,e1(m,i,l,o,n),m.mode&1&&qc(o,u,n),n=m,s=u;var g=n.updateQueue;if(g===null){var v=new Set;v.add(s),n.updateQueue=v}else g.add(s);break e}else{if(!(n&1)){qc(o,u,n),Nu();break e}s=Error(P(426))}}else if(Q&&l.mode&1){var k=Zc(i);if(k!==null){!(k.flags&65536)&&(k.flags|=256),e1(k,i,l,o,n),uu(ar(s,l));break e}}o=s=ar(s,l),ce!==4&&(ce=2),_r===null?_r=[o]:_r.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=cf(o,s,n);Uc(o,f);break e;case 1:l=s;var p=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(et===null||!et.has(y)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=df(o,l,n);Uc(o,w);break e}}o=o.return}while(o!==null)}If(t)}catch(S){n=S,ie===t&&t!==null&&(ie=t=t.return);continue}break}while(!0)}function Of(){var e=Ro.current;return Ro.current=Lo,e===null?Lo:e}function Nu(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(St&268435455)&&!(fi&268435455)||Un(pe,ke)}function Fo(e,n){var t=W;W|=2;var r=Of();(pe!==e||ke!==n)&&(Tn=null,mt(e,n));do try{$h();break}catch(a){bf(e,a)}while(!0);if(du(),W=t,Ro.current=r,ie!==null)throw Error(P(261));return pe=null,ke=0,ce}function $h(){for(;ie!==null;)Nf(ie)}function Uh(){for(;ie!==null&&!y3();)Nf(ie)}function Nf(e){var n=Lf(e.alternate,e,He);e.memoizedProps=e.pendingProps,n===null?If(e):ie=n,xu.current=null}function If(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Wh(t,n),t!==null){t.flags&=32767,ie=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,ie=null;return}}else if(t=Vh(t,n,He),t!==null){ie=t;return}if(n=n.sibling,n!==null){ie=n;return}ie=n=e}while(n!==null);ce===0&&(ce=5)}function ct(e,n,t){var r=z,a=tn.transition;try{tn.transition=null,z=1,jh(e,n,t,r)}finally{tn.transition=a,z=r}return null}function jh(e,n,t,r){do Qt();while(Yn!==null);if(W&6)throw Error(P(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(b3(e,o),e===pe&&(ie=pe=null,ke=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Fa||(Fa=!0,Rf(yo,function(){return Qt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=tn.transition,tn.transition=null;var i=z;z=1;var l=W;W|=4,xu.current=null,Hh(e,t),xf(t,e),ph(qs),ko=!!Xs,qs=Xs=null,e.current=t,zh(t),v3(),W=l,z=i,tn.transition=o}else e.current=t;if(Fa&&(Fa=!1,Yn=e,Ao=a),o=e.pendingLanes,o===0&&(et=null),S3(t.stateNode),Ve(e,re()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(Do)throw Do=!1,e=vl,vl=null,e;return Ao&1&&e.tag!==0&&Qt(),o=e.pendingLanes,o&1?e===kl?Vr++:(Vr=0,kl=e):Vr=0,lt(),null}function Qt(){if(Yn!==null){var e=ud(Ao),n=tn.transition,t=z;try{if(tn.transition=null,z=16>e?16:e,Yn===null)var r=!1;else{if(e=Yn,Yn=null,Ao=0,W&6)throw Error(P(331));var a=W;for(W|=4,N=e.current;N!==null;){var o=N,i=o.child;if(N.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Fr(8,c,o)}var d=c.child;if(d!==null)d.return=c,N=d;else for(;N!==null;){c=N;var h=c.sibling,m=c.return;if(Sf(c),c===u){N=null;break}if(h!==null){h.return=m,N=h;break}N=m}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}N=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,N=i;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Fr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var p=e.current;for(N=p;N!==null;){i=N;var y=i.child;if(i.subtreeFlags&2064&&y!==null)y.return=i,N=y;else e:for(i=p;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:di(9,l)}}catch(S){ne(l,l.return,S)}if(l===i){N=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,N=w;break e}N=l.return}}if(W=a,lt(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(ri,e)}catch{}r=!0}return r}finally{z=t,tn.transition=n}}return!1}function p1(e,n,t){n=ar(t,n),n=cf(e,n,1),e=Zn(e,n,1),n=Ne(),e!==null&&(fa(e,1,n),Ve(e,n))}function ne(e,n,t){if(e.tag===3)p1(e,e,t);else for(;n!==null;){if(n.tag===3){p1(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(et===null||!et.has(r))){e=ar(t,e),e=df(n,e,1),n=Zn(n,e,1),e=Ne(),n!==null&&(fa(n,1,e),Ve(n,e));break}}n=n.return}}function Yh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ne(),e.pingedLanes|=e.suspendedLanes&t,pe===e&&(ke&t)===t&&(ce===4||ce===3&&(ke&130023424)===ke&&500>re()-Pu?mt(e,0):Tu|=t),Ve(e,n)}function Ef(e,n){n===0&&(e.mode&1?(n=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):n=1);var t=Ne();e=Dn(e,n),e!==null&&(fa(e,n,t),Ve(e,t))}function Jh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ef(e,t)}function Qh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(n),Ef(e,t)}var Lf;Lf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Fe.current)Ae=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ae=!1,_h(e,n,t);Ae=!!(e.flags&131072)}else Ae=!1,Q&&n.flags&1048576&&Ad(n,Po,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;no(e,n),e=n.pendingProps;var a=er(n,Te.current);Jt(n,t),a=ku(null,n,r,e,a,t);var o=wu();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,_e(r)?(o=!0,xo(n)):o=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,hu(n),a.updater=ci,n.stateNode=a,a._reactInternals=n,sl(n,r,e,t),n=cl(null,n,r,!0,o,t)):(n.tag=0,Q&&o&&su(n),Oe(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(no(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=qh(r),e=sn(r,e),a){case 0:n=ul(null,n,r,e,t);break e;case 1:n=r1(null,n,r,e,t);break e;case 11:n=n1(null,n,r,e,t);break e;case 14:n=t1(null,n,r,sn(r.type,e),t);break e}throw Error(P(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:sn(r,a),ul(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:sn(r,a),r1(e,n,r,a,t);case 3:e:{if(mf(n),e===null)throw Error(P(387));r=n.pendingProps,o=n.memoizedState,a=o.element,Hd(e,n),No(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){a=ar(Error(P(423)),n),n=a1(e,n,r,t,a);break e}else if(r!==a){a=ar(Error(P(424)),n),n=a1(e,n,r,t,a);break e}else for(ze=qn(n.stateNode.containerInfo.firstChild),Ge=n,Q=!0,un=null,t=Wd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nr(),r===a){n=An(e,n,t);break e}Oe(e,n,r,t)}n=n.child}return n;case 5:return zd(n),e===null&&al(n),r=n.type,a=n.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,Zs(r,a)?i=null:o!==null&&Zs(r,o)&&(n.flags|=32),hf(e,n),Oe(e,n,i,t),n.child;case 6:return e===null&&al(n),null;case 13:return gf(e,n,t);case 4:return mu(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=tr(n,null,r,t):Oe(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:sn(r,a),n1(e,n,r,a,t);case 7:return Oe(e,n,n.pendingProps,t),n.child;case 8:return Oe(e,n,n.pendingProps.children,t),n.child;case 12:return Oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,o=n.memoizedProps,i=a.value,U(bo,r._currentValue),r._currentValue=i,o!==null)if(pn(o.value,i)){if(o.children===a.children&&!Fe.current){n=An(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=In(-1,t&-t),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),ol(o.return,t,n),l.lanes|=t;break}s=s.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(P(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),ol(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Oe(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Jt(n,t),a=rn(a),r=r(a),n.flags|=1,Oe(e,n,r,t),n.child;case 14:return r=n.type,a=sn(r,n.pendingProps),a=sn(r.type,a),t1(e,n,r,a,t);case 15:return ff(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:sn(r,a),no(e,n),n.tag=1,_e(r)?(e=!0,xo(n)):e=!1,Jt(n,t),uf(n,r,a),sl(n,r,a,t),cl(null,n,r,!0,e,t);case 19:return yf(e,n,t);case 22:return pf(e,n,t)}throw Error(P(156,n.tag))};function Rf(e,n){return od(e,n)}function Xh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(e,n,t,r){return new Xh(e,n,t,r)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qh(e){if(typeof e=="function")return Iu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jl)return 11;if(e===Ql)return 14}return 2}function tt(e,n){var t=e.alternate;return t===null?(t=nn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ao(e,n,t,r,a,o){var i=2;if(r=e,typeof e=="function")Iu(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Dt:return gt(t.children,a,o,n);case Yl:i=8,a|=8;break;case Es:return e=nn(12,t,n,a|2),e.elementType=Es,e.lanes=o,e;case Ls:return e=nn(13,t,n,a),e.elementType=Ls,e.lanes=o,e;case Rs:return e=nn(19,t,n,a),e.elementType=Rs,e.lanes=o,e;case z0:return pi(t,a,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B0:i=10;break e;case H0:i=9;break e;case Jl:i=11;break e;case Ql:i=14;break e;case Kn:i=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=nn(i,t,n,a),n.elementType=e,n.type=r,n.lanes=o,n}function gt(e,n,t,r){return e=nn(7,e,r,n),e.lanes=t,e}function pi(e,n,t,r){return e=nn(22,e,r,n),e.elementType=z0,e.lanes=t,e.stateNode={isHidden:!1},e}function ps(e,n,t){return e=nn(6,e,null,n),e.lanes=t,e}function hs(e,n,t){return n=nn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Zh(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yi(0),this.expirationTimes=Yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yi(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Eu(e,n,t,r,a,o,i,l,s){return e=new Zh(e,n,t,l,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=nn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(o),e}function e5(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Df(e){if(!e)return at;e=e._reactInternals;e:{if(Pt(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(_e(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(_e(t))return Rd(e,t,n)}return n}function Af(e,n,t,r,a,o,i,l,s){return e=Eu(t,r,!0,e,a,o,i,l,s),e.context=Df(null),t=e.current,r=Ne(),a=nt(t),o=In(r,a),o.callback=n??null,Zn(t,o,a),e.current.lanes=a,fa(e,a,r),Ve(e,r),e}function hi(e,n,t,r){var a=n.current,o=Ne(),i=nt(a);return t=Df(t),n.context===null?n.context=t:n.pendingContext=t,n=In(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Zn(a,n,i),e!==null&&(fn(e,a,i,o),qa(e,a,i)),i}function _o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function h1(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Lu(e,n){h1(e,n),(e=e.alternate)&&h1(e,n)}function n5(){return null}var Ff=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ru(e){this._internalRoot=e}mi.prototype.render=Ru.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));hi(e,n,null,null)};mi.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ct(function(){hi(null,e,null,null)}),n[Rn]=null}};function mi(e){this._internalRoot=e}mi.prototype.unstable_scheduleHydration=function(e){if(e){var n=fd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<$n.length&&n!==0&&n<$n[t].priority;t++);$n.splice(t,0,e),t===0&&hd(e)}};function Du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function m1(){}function t5(e,n,t,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var u=_o(i);o.call(u)}}var i=Af(n,r,e,0,null,!1,!1,"",m1);return e._reactRootContainer=i,e[Rn]=i.current,Jr(e.nodeType===8?e.parentNode:e),Ct(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=_o(s);l.call(u)}}var s=Eu(e,0,!1,null,null,!1,!1,"",m1);return e._reactRootContainer=s,e[Rn]=s.current,Jr(e.nodeType===8?e.parentNode:e),Ct(function(){hi(n,s,t,r)}),s}function yi(e,n,t,r,a){var o=t._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var s=_o(i);l.call(s)}}hi(n,i,e,a)}else i=t5(t,n,e,a,r);return _o(i)}cd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Pr(n.pendingLanes);t!==0&&(Zl(n,t|1),Ve(n,re()),!(W&6)&&(or=re()+500,lt()))}break;case 13:Ct(function(){var r=Dn(e,1);if(r!==null){var a=Ne();fn(r,e,1,a)}}),Lu(e,1)}};eu=function(e){if(e.tag===13){var n=Dn(e,134217728);if(n!==null){var t=Ne();fn(n,e,134217728,t)}Lu(e,134217728)}};dd=function(e){if(e.tag===13){var n=nt(e),t=Dn(e,n);if(t!==null){var r=Ne();fn(t,e,n,r)}Lu(e,n)}};fd=function(){return z};pd=function(e,n){var t=z;try{return z=e,n()}finally{z=t}};Ks=function(e,n,t){switch(n){case"input":if(Fs(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=si(r);if(!a)throw Error(P(90));G0(r),Fs(r,a)}}}break;case"textarea":U0(e,t);break;case"select":n=t.value,n!=null&&$t(e,!!t.multiple,n,!1)}};Z0=bu;ed=Ct;var r5={usingClientEntryPoint:!1,Events:[ha,Vt,si,X0,q0,bu]},wr={findFiberByHostInstance:ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a5={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rd(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||n5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{ri=_a.inject(a5),Sn=_a}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r5;Ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Du(n))throw Error(P(200));return e5(e,n,null,t)};Ye.createRoot=function(e,n){if(!Du(e))throw Error(P(299));var t=!1,r="",a=Ff;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Eu(e,1,!1,null,null,t,!1,r,a),e[Rn]=n.current,Jr(e.nodeType===8?e.parentNode:e),new Ru(n)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=rd(n),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Ct(e)};Ye.hydrate=function(e,n,t){if(!gi(n))throw Error(P(200));return yi(null,e,n,!0,t)};Ye.hydrateRoot=function(e,n,t){if(!Du(e))throw Error(P(405));var r=t!=null&&t.hydratedSources||null,a=!1,o="",i=Ff;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Af(n,null,e,1,t??null,a,!1,o,i),e[Rn]=n.current,Jr(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new mi(n)};Ye.render=function(e,n,t){if(!gi(n))throw Error(P(200));return yi(null,e,n,!1,t)};Ye.unmountComponentAtNode=function(e){if(!gi(e))throw Error(P(40));return e._reactRootContainer?(Ct(function(){yi(null,null,e,!1,function(){e._reactRootContainer=null,e[Rn]=null})}),!0):!1};Ye.unstable_batchedUpdates=bu;Ye.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!gi(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return yi(e,n,t,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function _f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_f)}catch(e){console.error(e)}}_f(),F0.exports=Ye;var Vf=F0.exports,g1=Vf;Ns.createRoot=g1.createRoot,Ns.hydrateRoot=g1.hydrateRoot;var Wf={exports:{}},Bf={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=x;function o5(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var i5=typeof Object.is=="function"?Object.is:o5,s5=ga.useSyncExternalStore,l5=ga.useRef,u5=ga.useEffect,c5=ga.useMemo,d5=ga.useDebugValue;Bf.useSyncExternalStoreWithSelector=function(e,n,t,r,a){var o=l5(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=c5(function(){function s(m){if(!u){if(u=!0,c=m,m=r(m),a!==void 0&&i.hasValue){var g=i.value;if(a(g,m))return d=g}return d=m}if(g=d,i5(c,m))return g;var v=r(m);return a!==void 0&&a(g,v)?(c=m,g):(c=m,d=v)}var u=!1,c,d,h=t===void 0?null:t;return[function(){return s(n())},h===null?void 0:function(){return s(h())}]},[n,t,r,a]);var l=s5(e,o[0],o[1]);return u5(function(){i.hasValue=!0,i.value=l},[l]),d5(l),l};Wf.exports=Bf;var f5=Wf.exports;function p5(e){e()}function h5(){let e=null,n=null;return{clear(){e=null,n=null},notify(){p5(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){const t=[];let r=e;for(;r;)t.push(r),r=r.next;return t},subscribe(t){let r=!0;const a=n={callback:t,next:null,prev:n};return a.prev?a.prev.next=a:e=a,function(){!r||e===null||(r=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}var y1={notify(){},get:()=>[]};function m5(e,n){let t,r=y1,a=0,o=!1;function i(v){c();const k=r.subscribe(v);let f=!1;return()=>{f||(f=!0,k(),d())}}function l(){r.notify()}function s(){g.onStateChange&&g.onStateChange()}function u(){return o}function c(){a++,t||(t=e.subscribe(s),r=h5())}function d(){a--,t&&a===0&&(t(),t=void 0,r.clear(),r=y1)}function h(){o||(o=!0,c())}function m(){o&&(o=!1,d())}const g={addNestedSub:i,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:h,tryUnsubscribe:m,getListeners:()=>r};return g}var g5=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",y5=g5(),v5=()=>typeof navigator<"u"&&navigator.product==="ReactNative",k5=v5(),w5=()=>y5||k5?x.useLayoutEffect:x.useEffect,S5=w5(),ms=Symbol.for("react-redux-context"),gs=typeof globalThis<"u"?globalThis:{};function C5(){if(!x.createContext)return{};const e=gs[ms]??(gs[ms]=new Map);let n=e.get(x.createContext);return n||(n=x.createContext(null),e.set(x.createContext,n)),n}var ot=C5();function M5(e){const{children:n,context:t,serverState:r,store:a}=e,o=x.useMemo(()=>{const s=m5(a);return{store:a,subscription:s,getServerState:r?()=>r:void 0}},[a,r]),i=x.useMemo(()=>a.getState(),[a]);S5(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),i!==a.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,i]);const l=t||ot;return x.createElement(l.Provider,{value:o},n)}var x5=M5;function Au(e=ot){return function(){return x.useContext(e)}}var Hf=Au();function zf(e=ot){const n=e===ot?Hf:Au(e),t=()=>{const{store:r}=n();return r};return Object.assign(t,{withTypes:()=>t}),t}var T5=zf();function P5(e=ot){const n=e===ot?T5:zf(e),t=()=>n().dispatch;return Object.assign(t,{withTypes:()=>t}),t}var b5=P5(),O5=(e,n)=>e===n;function N5(e=ot){const n=e===ot?Hf:Au(e),t=(r,a={})=>{const{equalityFn:o=O5}=typeof a=="function"?{equalityFn:a}:a,i=n(),{store:l,subscription:s,getServerState:u}=i;x.useRef(!0);const c=x.useCallback({[r.name](h){return r(h)}}[r.name],[r]),d=f5.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,c,o);return x.useDebugValue(d),d};return Object.assign(t,{withTypes:()=>t}),t}var I5=N5();function ge(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var E5=typeof Symbol=="function"&&Symbol.observable||"@@observable",v1=E5,ys=()=>Math.random().toString(36).substring(7).split("").join("."),L5={INIT:`@@redux/INIT${ys()}`,REPLACE:`@@redux/REPLACE${ys()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ys()}`},Vo=L5;function Fu(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function Kf(e,n,t){if(typeof e!="function")throw new Error(ge(2));if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(ge(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(ge(1));return t(Kf)(e,n)}let r=e,a=n,o=new Map,i=o,l=0,s=!1;function u(){i===o&&(i=new Map,o.forEach((k,f)=>{i.set(f,k)}))}function c(){if(s)throw new Error(ge(3));return a}function d(k){if(typeof k!="function")throw new Error(ge(4));if(s)throw new Error(ge(5));let f=!0;u();const p=l++;return i.set(p,k),function(){if(f){if(s)throw new Error(ge(6));f=!1,u(),i.delete(p),o=null}}}function h(k){if(!Fu(k))throw new Error(ge(7));if(typeof k.type>"u")throw new Error(ge(8));if(typeof k.type!="string")throw new Error(ge(17));if(s)throw new Error(ge(9));try{s=!0,a=r(a,k)}finally{s=!1}return(o=i).forEach(p=>{p()}),k}function m(k){if(typeof k!="function")throw new Error(ge(10));r=k,h({type:Vo.REPLACE})}function g(){const k=d;return{subscribe(f){if(typeof f!="object"||f===null)throw new Error(ge(11));function p(){const w=f;w.next&&w.next(c())}return p(),{unsubscribe:k(p)}},[v1](){return this}}}return h({type:Vo.INIT}),{dispatch:h,subscribe:d,getState:c,replaceReducer:m,[v1]:g}}function R5(e){Object.keys(e).forEach(n=>{const t=e[n];if(typeof t(void 0,{type:Vo.INIT})>"u")throw new Error(ge(12));if(typeof t(void 0,{type:Vo.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ge(13))})}function D5(e){const n=Object.keys(e),t={};for(let o=0;o<n.length;o++){const i=n[o];typeof e[i]=="function"&&(t[i]=e[i])}const r=Object.keys(t);let a;try{R5(t)}catch(o){a=o}return function(i={},l){if(a)throw a;let s=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],h=t[d],m=i[d],g=h(m,l);if(typeof g>"u")throw l&&l.type,new Error(ge(14));u[d]=g,s=s||g!==m}return s=s||r.length!==Object.keys(i).length,s?u:i}}function Wo(...e){return e.length===0?n=>n:e.length===1?e[0]:e.reduce((n,t)=>(...r)=>n(t(...r)))}function A5(...e){return n=>(t,r)=>{const a=n(t,r);let o=()=>{throw new Error(ge(15))};const i={getState:a.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(i));return o=Wo(...l)(a.dispatch),{...a,dispatch:o}}}function Gf(e){return Fu(e)&&"type"in e&&typeof e.type=="string"}var $f=Symbol.for("immer-nothing"),k1=Symbol.for("immer-draftable"),Ie=Symbol.for("immer-state");function cn(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Ke=Object,ir=Ke.getPrototypeOf,Bo="constructor",vi="prototype",Cl="configurable",Ho="enumerable",oo="writable",aa="value",Fn=e=>!!e&&!!e[Ie];function hn(e){var n;return e?Uf(e)||wi(e)||!!e[k1]||!!((n=e[Bo])!=null&&n[k1])||Si(e)||Ci(e):!1}var F5=Ke[vi][Bo].toString(),w1=new WeakMap;function Uf(e){if(!e||!_u(e))return!1;const n=ir(e);if(n===null||n===Ke[vi])return!0;const t=Ke.hasOwnProperty.call(n,Bo)&&n[Bo];if(t===Object)return!0;if(!Lt(t))return!1;let r=w1.get(t);return r===void 0&&(r=Function.toString.call(t),w1.set(t,r)),r===F5}function ki(e,n,t=!0){ya(e)===0?(t?Reflect.ownKeys(e):Ke.keys(e)).forEach(a=>{n(a,e[a],e)}):e.forEach((r,a)=>n(a,r,e))}function ya(e){const n=e[Ie];return n?n.type_:wi(e)?1:Si(e)?2:Ci(e)?3:0}var S1=(e,n,t=ya(e))=>t===2?e.has(n):Ke[vi].hasOwnProperty.call(e,n),Ml=(e,n,t=ya(e))=>t===2?e.get(n):e[n],zo=(e,n,t,r=ya(e))=>{r===2?e.set(n,t):r===3?e.add(t):e[n]=t};function _5(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}var wi=Array.isArray,Si=e=>e instanceof Map,Ci=e=>e instanceof Set,_u=e=>typeof e=="object",Lt=e=>typeof e=="function",vs=e=>typeof e=="boolean";function V5(e){const n=+e;return Number.isInteger(n)&&String(n)===e}var bn=e=>e.copy_||e.base_,Vu=e=>e.modified_?e.copy_:e.base_;function xl(e,n){if(Si(e))return new Map(e);if(Ci(e))return new Set(e);if(wi(e))return Array[vi].slice.call(e);const t=Uf(e);if(n===!0||n==="class_only"&&!t){const r=Ke.getOwnPropertyDescriptors(e);delete r[Ie];let a=Reflect.ownKeys(r);for(let o=0;o<a.length;o++){const i=a[o],l=r[i];l[oo]===!1&&(l[oo]=!0,l[Cl]=!0),(l.get||l.set)&&(r[i]={[Cl]:!0,[oo]:!0,[Ho]:l[Ho],[aa]:e[i]})}return Ke.create(ir(e),r)}else{const r=ir(e);if(r!==null&&t)return{...e};const a=Ke.create(r);return Ke.assign(a,e)}}function Wu(e,n=!1){return Mi(e)||Fn(e)||!hn(e)||(ya(e)>1&&Ke.defineProperties(e,{set:Va,add:Va,clear:Va,delete:Va}),Ke.freeze(e),n&&ki(e,(t,r)=>{Wu(r,!0)},!1)),e}function W5(){cn(2)}var Va={[aa]:W5};function Mi(e){return e===null||!_u(e)?!0:Ke.isFrozen(e)}var Ko="MapSet",Tl="Patches",C1="ArrayMethods",jf={};function Mt(e){const n=jf[e];return n||cn(0,e),n}var M1=e=>!!jf[e],oa,Yf=()=>oa,B5=(e,n)=>({drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:M1(Ko)?Mt(Ko):void 0,arrayMethodsPlugin_:M1(C1)?Mt(C1):void 0});function x1(e,n){n&&(e.patchPlugin_=Mt(Tl),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function Pl(e){bl(e),e.drafts_.forEach(H5),e.drafts_=null}function bl(e){e===oa&&(oa=e.parent_)}var T1=e=>oa=B5(oa,e);function H5(e){const n=e[Ie];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function P1(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];if(e!==void 0&&e!==t){t[Ie].modified_&&(Pl(n),cn(4)),hn(e)&&(e=b1(n,e));const{patchPlugin_:a}=n;a&&a.generateReplacementPatches_(t[Ie].base_,e,n)}else e=b1(n,t);return z5(n,e,!0),Pl(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==$f?e:void 0}function b1(e,n){if(Mi(n))return n;const t=n[Ie];if(!t)return Go(n,e.handledSet_,e);if(!xi(t,e))return n;if(!t.modified_)return t.base_;if(!t.finalized_){const{callbacks_:r}=t;if(r)for(;r.length>0;)r.pop()(e);Xf(t,e)}return t.copy_}function z5(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Wu(n,t)}function Jf(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var xi=(e,n)=>e.scope_===n,K5=[];function Qf(e,n,t,r){const a=bn(e),o=e.type_;if(r!==void 0&&Ml(a,r,o)===n){zo(a,r,t,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;ki(a,(s,u)=>{if(Fn(u)){const c=l.get(u)||[];c.push(s),l.set(u,c)}})}const i=e.draftLocations_.get(n)??K5;for(const l of i)zo(a,l,t,o)}function G5(e,n,t){e.callbacks_.push(function(a){var l;const o=n;if(!o||!xi(o,a))return;(l=a.mapSetPlugin_)==null||l.fixSetContents(o);const i=Vu(o);Qf(e,o.draft_??o,i,t),Xf(o,a)})}function Xf(e,n){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:a}=n;if(a){const o=a.getPath(e);o&&a.generatePatches_(e,o,n)}Jf(e)}}function $5(e,n,t){const{scope_:r}=e;if(Fn(t)){const a=t[Ie];xi(a,r)&&a.callbacks_.push(function(){io(e);const i=Vu(a);Qf(e,t,i,n)})}else hn(t)&&e.callbacks_.push(function(){const o=bn(e);e.type_===3?o.has(t)&&Go(t,r.handledSet_,r):Ml(o,n,e.type_)===t&&r.drafts_.length>1&&(e.assigned_.get(n)??!1)===!0&&e.copy_&&Go(Ml(e.copy_,n,e.type_),r.handledSet_,r)})}function Go(e,n,t){return!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1||Fn(e)||n.has(e)||!hn(e)||Mi(e)||(n.add(e),ki(e,(r,a)=>{if(Fn(a)){const o=a[Ie];if(xi(o,t)){const i=Vu(o);zo(e,r,i,e.type_),Jf(o)}}else hn(a)&&Go(a,n,t)})),e}function U5(e,n){const t=wi(e),r={type_:t?1:0,scope_:n?n.scope_:Yf(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let a=r,o=$o;t&&(a=[r],o=ia);const{revoke:i,proxy:l}=Proxy.revocable(a,o);return r.draft_=l,r.revoke_=i,[l,r]}var $o={get(e,n){if(n===Ie)return e;let t=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof n=="string";if(r&&t!=null&&t.isArrayOperationMethod(n))return t.createMethodInterceptor(e,n);const a=bn(e);if(!S1(a,n,e.type_))return j5(e,a,n);const o=a[n];if(e.finalized_||!hn(o)||r&&e.operationMethod&&(t!=null&&t.isMutatingArrayMethod(e.operationMethod))&&V5(n))return o;if(o===ks(e.base_,n)){io(e);const i=e.type_===1?+n:n,l=Nl(e.scope_,o,e,i);return e.copy_[i]=l}return o},has(e,n){return n in bn(e)},ownKeys(e){return Reflect.ownKeys(bn(e))},set(e,n,t){const r=qf(bn(e),n);if(r!=null&&r.set)return r.set.call(e.draft_,t),!0;if(!e.modified_){const a=ks(bn(e),n),o=a==null?void 0:a[Ie];if(o&&o.base_===t)return e.copy_[n]=t,e.assigned_.set(n,!1),!0;if(_5(t,a)&&(t!==void 0||S1(e.base_,n,e.type_)))return!0;io(e),Ol(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_.set(n,!0),$5(e,n,t)),!0},deleteProperty(e,n){return io(e),ks(e.base_,n)!==void 0||n in e.base_?(e.assigned_.set(n,!1),Ol(e)):e.assigned_.delete(n),e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=bn(e),r=Reflect.getOwnPropertyDescriptor(t,n);return r&&{[oo]:!0,[Cl]:e.type_!==1||n!=="length",[Ho]:r[Ho],[aa]:t[n]}},defineProperty(){cn(11)},getPrototypeOf(e){return ir(e.base_)},setPrototypeOf(){cn(12)}},ia={};for(let e in $o){let n=$o[e];ia[e]=function(){const t=arguments;return t[0]=t[0][0],n.apply(this,t)}}ia.deleteProperty=function(e,n){return ia.set.call(this,e,n,void 0)};ia.set=function(e,n,t){return $o.set.call(this,e[0],n,t,e[0])};function ks(e,n){const t=e[Ie];return(t?bn(t):e)[n]}function j5(e,n,t){var a;const r=qf(n,t);return r?aa in r?r[aa]:(a=r.get)==null?void 0:a.call(e.draft_):void 0}function qf(e,n){if(!(n in e))return;let t=ir(e);for(;t;){const r=Object.getOwnPropertyDescriptor(t,n);if(r)return r;t=ir(t)}}function Ol(e){e.modified_||(e.modified_=!0,e.parent_&&Ol(e.parent_))}function io(e){e.copy_||(e.assigned_=new Map,e.copy_=xl(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Y5=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(n,t,r)=>{if(Lt(n)&&!Lt(t)){const o=t;t=n;const i=this;return function(s=o,...u){return i.produce(s,c=>t.call(this,c,...u))}}Lt(t)||cn(6),r!==void 0&&!Lt(r)&&cn(7);let a;if(hn(n)){const o=T1(this),i=Nl(o,n,void 0);let l=!0;try{a=t(i),l=!1}finally{l?Pl(o):bl(o)}return x1(o,r),P1(a,o)}else if(!n||!_u(n)){if(a=t(n),a===void 0&&(a=n),a===$f&&(a=void 0),this.autoFreeze_&&Wu(a,!0),r){const o=[],i=[];Mt(Tl).generateReplacementPatches_(n,a,{patches_:o,inversePatches_:i}),r(o,i)}return a}else cn(1,n)},this.produceWithPatches=(n,t)=>{if(Lt(n))return(i,...l)=>this.produceWithPatches(i,s=>n(s,...l));let r,a;return[this.produce(n,t,(i,l)=>{r=i,a=l}),r,a]},vs(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),vs(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),vs(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){hn(e)||cn(8),Fn(e)&&(e=J5(e));const n=T1(this),t=Nl(n,e,void 0);return t[Ie].isManual_=!0,bl(n),t}finishDraft(e,n){const t=e&&e[Ie];(!t||!t.isManual_)&&cn(9);const{scope_:r}=t;return x1(r,n),P1(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const a=n[t];if(a.path.length===0&&a.op==="replace"){e=a.value;break}}t>-1&&(n=n.slice(t+1));const r=Mt(Tl).applyPatches_;return Fn(e)?r(e,n):this.produce(e,a=>r(a,n))}};function Nl(e,n,t,r){const[a,o]=Si(n)?Mt(Ko).proxyMap_(n,t):Ci(n)?Mt(Ko).proxySet_(n,t):U5(n,t);return((t==null?void 0:t.scope_)??Yf()).drafts_.push(a),o.callbacks_=(t==null?void 0:t.callbacks_)??[],o.key_=r,t&&r!==void 0?G5(t,o,r):o.callbacks_.push(function(s){var c;(c=s.mapSetPlugin_)==null||c.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),a}function J5(e){return Fn(e)||cn(10,e),Zf(e)}function Zf(e){if(!hn(e)||Mi(e))return e;const n=e[Ie];let t,r=!0;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=xl(e,n.scope_.immer_.useStrictShallowCopy_),r=n.scope_.immer_.shouldUseStrictIteration()}else t=xl(e,!0);return ki(t,(a,o)=>{zo(t,a,Zf(o))},r),n&&(n.finalized_=!1),t}var Q5=new Y5,e2=Q5.produce;function X5(e,n=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(n)}function q5(e,n="expected all items to be functions, instead received the following types: "){if(!e.every(t=>typeof t=="function")){const t=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${n}[${t}]`)}}var O1=e=>Array.isArray(e)?e:[e];function Z5(e){const n=Array.isArray(e[0])?e[0]:e;return q5(n,"createSelector expects all input-selectors to be functions, but received the following types: "),n}function e4(e,n){const t=[],{length:r}=e;for(let a=0;a<r;a++)t.push(e[a].apply(null,n));return t}var n4=class{constructor(e){this.value=e}deref(){return this.value}},t4=()=>typeof WeakRef>"u"?n4:WeakRef,n2=t4(),r4=0,N1=1;function Wa(){return{s:r4,v:void 0,o:null,p:null}}function a4(e){return e instanceof n2?e.deref():e}function t2(e,n={}){let t=Wa();const{resultEqualityCheck:r}=n;let a,o=0;function i(){let l=t;const{length:s}=arguments;for(let d=0,h=s;d<h;d++){const m=arguments[d];if(typeof m=="function"||typeof m=="object"&&m!==null){let g=l.o;g===null&&(l.o=g=new WeakMap);const v=g.get(m);v===void 0?(l=Wa(),g.set(m,l)):l=v}else{let g=l.p;g===null&&(l.p=g=new Map);const v=g.get(m);v===void 0?(l=Wa(),g.set(m,l)):l=v}}const u=l;let c;if(l.s===N1)c=l.v;else if(c=e.apply(null,arguments),o++,r){const d=a4(a);d!=null&&r(d,c)&&(c=d,o!==0&&o--),a=typeof c=="object"&&c!==null||typeof c=="function"?new n2(c):c}return u.s=N1,u.v=c,c}return i.clearCache=()=>{t=Wa(),i.resetResultsCount()},i.resultsCount=()=>o,i.resetResultsCount=()=>{o=0},i}function o4(e,...n){const t=typeof e=="function"?{memoize:e,memoizeOptions:n}:e,r=(...a)=>{let o=0,i=0,l,s={},u=a.pop();typeof u=="object"&&(s=u,u=a.pop()),X5(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...t,...s},{memoize:d,memoizeOptions:h=[],argsMemoize:m=t2,argsMemoizeOptions:g=[]}=c,v=O1(h),k=O1(g),f=Z5(a),p=d(function(){return o++,u.apply(null,arguments)},...v),y=m(function(){i++;const S=e4(f,arguments);return l=p.apply(null,S),l},...k);return Object.assign(y,{resultFunc:u,memoizedResultFunc:p,dependencies:f,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>l,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:d,argsMemoize:m})};return Object.assign(r,{withTypes:()=>r}),r}var Bu=o4(t2);function r2(e){return({dispatch:t,getState:r})=>a=>o=>typeof o=="function"?o(t,r,e):a(o)}var i4=r2(),s4=r2,l4=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Wo:Wo.apply(null,arguments)},u4=e=>e&&typeof e.match=="function";function sr(e,n){function t(...r){if(n){let a=n(...r);if(!a)throw new Error($e(0));return{type:e,payload:a.payload,..."meta"in a&&{meta:a.meta},..."error"in a&&{error:a.error}}}return{type:e,payload:r[0]}}return t.toString=()=>`${e}`,t.type=e,t.match=r=>Gf(r)&&r.type===e,t}var a2=class Or extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,Or.prototype)}static get[Symbol.species](){return Or}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new Or(...n[0].concat(this)):new Or(...n.concat(this))}};function I1(e){return hn(e)?e2(e,()=>{}):e}function Ba(e,n,t){return e.has(n)?e.get(n):e.set(n,t(n)).get(n)}function c4(e){return typeof e=="boolean"}var d4=()=>function(n){const{thunk:t=!0,immutableCheck:r=!0,serializableCheck:a=!0,actionCreatorCheck:o=!0}=n??{};let i=new a2;return t&&(c4(t)?i.push(i4):i.push(s4(t.extraArgument))),i},f4="RTK_autoBatch",E1=e=>n=>{setTimeout(n,e)},p4=(e,n)=>t=>{let r=!1;const a=()=>{r||(r=!0,cancelAnimationFrame(o),clearTimeout(i),t())},o=e(a),i=setTimeout(a,n)},h4=(e={type:"raf"})=>n=>(...t)=>{const r=n(...t);let a=!0,o=!1,i=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?p4(window.requestAnimationFrame,100):E1(10):e.type==="callback"?e.queueNotification:E1(e.timeout),u=()=>{i=!1,o&&(o=!1,l.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>a&&c(),h=r.subscribe(d);return l.add(c),()=>{h(),l.delete(c)}},dispatch(c){var d;try{return a=!((d=c==null?void 0:c.meta)!=null&&d[f4]),o=!a,o&&(i||(i=!0,s(u))),r.dispatch(c)}finally{a=!0}}})},m4=e=>function(t){const{autoBatch:r=!0}=t??{};let a=new a2(e);return r&&a.push(h4(typeof r=="object"?r:void 0)),a};function g4(e){const n=d4(),{reducer:t=void 0,middleware:r,devTools:a=!0,preloadedState:o=void 0,enhancers:i=void 0}=e||{};let l;if(typeof t=="function")l=t;else if(Fu(t))l=D5(t);else throw new Error($e(1));let s;typeof r=="function"?s=r(n):s=n();let u=Wo;a&&(u=l4({trace:!1,...typeof a=="object"&&a}));const c=A5(...s),d=m4(c);let h=typeof i=="function"?i(d):d();const m=u(...h);return Kf(l,o,m)}function o2(e){const n={},t=[];let r;const a={addCase(o,i){const l=typeof o=="string"?o:o.type;if(!l)throw new Error($e(28));if(l in n)throw new Error($e(29));return n[l]=i,a},addAsyncThunk(o,i){return i.pending&&(n[o.pending.type]=i.pending),i.rejected&&(n[o.rejected.type]=i.rejected),i.fulfilled&&(n[o.fulfilled.type]=i.fulfilled),i.settled&&t.push({matcher:o.settled,reducer:i.settled}),a},addMatcher(o,i){return t.push({matcher:o,reducer:i}),a},addDefaultCase(o){return r=o,a}};return e(a),[n,t,r]}function y4(e){return typeof e=="function"}function v4(e,n){let[t,r,a]=o2(n),o;if(y4(e))o=()=>I1(e());else{const l=I1(e);o=()=>l}function i(l=o(),s){let u=[t[s.type],...r.filter(({matcher:c})=>c(s)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[a]),u.reduce((c,d)=>{if(d)if(Fn(c)){const m=d(c,s);return m===void 0?c:m}else{if(hn(c))return e2(c,h=>d(h,s));{const h=d(c,s);if(h===void 0){if(c===null)return c;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}}return c},l)}return i.getInitialState=o,i}var k4=(e,n)=>u4(e)?e.match(n):e(n);function w4(...e){return n=>e.some(t=>k4(t,n))}var S4="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",C4=(e=21)=>{let n="",t=e;for(;t--;)n+=S4[Math.random()*64|0];return n},M4=Symbol.for("rtk-slice-createasyncthunk");function x4(e,n){return`${e}/${n}`}function T4({creators:e}={}){var t;const n=(t=e==null?void 0:e.asyncThunk)==null?void 0:t[M4];return function(a){const{name:o,reducerPath:i=o}=a;if(!o)throw new Error($e(11));const l=(typeof a.reducers=="function"?a.reducers(b4()):a.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(w,S){const M=typeof w=="string"?w:w.type;if(!M)throw new Error($e(12));if(M in u.sliceCaseReducersByType)throw new Error($e(13));return u.sliceCaseReducersByType[M]=S,c},addMatcher(w,S){return u.sliceMatchers.push({matcher:w,reducer:S}),c},exposeAction(w,S){return u.actionCreators[w]=S,c},exposeCaseReducer(w,S){return u.sliceCaseReducersByName[w]=S,c}};s.forEach(w=>{const S=l[w],M={reducerName:w,type:x4(o,w),createNotation:typeof a.reducers=="function"};N4(S)?E4(M,S,c,n):O4(M,S,c)});function d(){const[w={},S=[],M=void 0]=typeof a.extraReducers=="function"?o2(a.extraReducers):[a.extraReducers],C={...w,...u.sliceCaseReducersByType};return v4(a.initialState,T=>{for(let I in C)T.addCase(I,C[I]);for(let I of u.sliceMatchers)T.addMatcher(I.matcher,I.reducer);for(let I of S)T.addMatcher(I.matcher,I.reducer);M&&T.addDefaultCase(M)})}const h=w=>w,m=new Map,g=new WeakMap;let v;function k(w,S){return v||(v=d()),v(w,S)}function f(){return v||(v=d()),v.getInitialState()}function p(w,S=!1){function M(T){let I=T[w];return typeof I>"u"&&S&&(I=Ba(g,M,f)),I}function C(T=h){const I=Ba(m,S,()=>new WeakMap);return Ba(I,T,()=>{const E={};for(const[G,J]of Object.entries(a.selectors??{}))E[G]=P4(J,T,()=>Ba(g,T,f),S);return E})}return{reducerPath:w,getSelectors:C,get selectors(){return C(M)},selectSlice:M}}const y={name:o,reducer:k,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:f,...p(i),injectInto(w,{reducerPath:S,...M}={}){const C=S??i;return w.inject({reducerPath:C,reducer:k},M),{...y,...p(C,!0)}}};return y}}function P4(e,n,t,r){function a(o,...i){let l=n(o);return typeof l>"u"&&r&&(l=t()),e(l,...i)}return a.unwrapped=e,a}var i2=T4();function b4(){function e(n,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...t}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...t){return n(...t)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:t}},asyncThunk:e}}function O4({type:e,reducerName:n,createNotation:t},r,a){let o,i;if("reducer"in r){if(t&&!I4(r))throw new Error($e(17));o=r.reducer,i=r.prepare}else o=r;a.addCase(e,o).exposeCaseReducer(n,o).exposeAction(n,i?sr(e,i):sr(e))}function N4(e){return e._reducerDefinitionType==="asyncThunk"}function I4(e){return e._reducerDefinitionType==="reducerWithPrepare"}function E4({type:e,reducerName:n},t,r,a){if(!a)throw new Error($e(18));const{payloadCreator:o,fulfilled:i,pending:l,rejected:s,settled:u,options:c}=t,d=a(e,o,c);r.exposeAction(n,d),i&&r.addCase(d.fulfilled,i),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(n,{fulfilled:i||Ha,pending:l||Ha,rejected:s||Ha,settled:u||Ha})}function Ha(){}var L4="task",s2="listener",l2="completed",Hu="cancelled",R4=`task-${Hu}`,D4=`task-${l2}`,Il=`${s2}-${Hu}`,A4=`${s2}-${l2}`,Ti=class{constructor(e){wa(this,"code");wa(this,"name","TaskAbortError");wa(this,"message");this.code=e,this.message=`${L4} ${Hu} (reason: ${e})`}},zu=(e,n)=>{if(typeof e!="function")throw new TypeError($e(32))},Uo=()=>{},u2=(e,n=Uo)=>(e.catch(n),e),c2=(e,n)=>(e.addEventListener("abort",n,{once:!0}),()=>e.removeEventListener("abort",n)),yt=e=>{if(e.aborted)throw new Ti(e.reason)};function d2(e,n){let t=Uo;return new Promise((r,a)=>{const o=()=>a(new Ti(e.reason));if(e.aborted){o();return}t=c2(e,o),n.finally(()=>t()).then(r,a)}).finally(()=>{t=Uo})}var F4=async(e,n)=>{try{return await Promise.resolve(),{status:"ok",value:await e()}}catch(t){return{status:t instanceof Ti?"cancelled":"rejected",error:t}}finally{n==null||n()}},jo=e=>n=>u2(d2(e,n).then(t=>(yt(e),t))),f2=e=>{const n=jo(e);return t=>n(new Promise(r=>setTimeout(r,t)))},{assign:Xt}=Object,L1={},Pi="listenerMiddleware",_4=(e,n)=>{const t=r=>c2(e,()=>r.abort(e.reason));return(r,a)=>{zu(r);const o=new AbortController;t(o);const i=F4(async()=>{yt(e),yt(o.signal);const l=await r({pause:jo(o.signal),delay:f2(o.signal),signal:o.signal});return yt(o.signal),l},()=>o.abort(D4));return a!=null&&a.autoJoin&&n.push(i.catch(Uo)),{result:jo(e)(i),cancel(){o.abort(R4)}}}},V4=(e,n)=>{const t=async(r,a)=>{yt(n);let o=()=>{};const l=[new Promise((s,u)=>{let c=e({predicate:r,effect:(d,h)=>{h.unsubscribe(),s([d,h.getState(),h.getOriginalState()])}});o=()=>{c(),u()}})];a!=null&&l.push(new Promise(s=>setTimeout(s,a,null)));try{const s=await d2(n,Promise.race(l));return yt(n),s}finally{o()}};return(r,a)=>u2(t(r,a))},p2=e=>{let{type:n,actionCreator:t,matcher:r,predicate:a,effect:o}=e;if(n)a=sr(n).match;else if(t)n=t.type,a=t.match;else if(r)a=r;else if(!a)throw new Error($e(21));return zu(o),{predicate:a,type:n,effect:o}},h2=Xt(e=>{const{type:n,predicate:t,effect:r}=p2(e);return{id:C4(),effect:r,type:n,predicate:t,pending:new Set,unsubscribe:()=>{throw new Error($e(22))}}},{withTypes:()=>h2}),R1=(e,n)=>{const{type:t,effect:r,predicate:a}=p2(n);return Array.from(e.values()).find(o=>(typeof t=="string"?o.type===t:o.predicate===a)&&o.effect===r)},El=e=>{e.pending.forEach(n=>{n.abort(Il)})},W4=(e,n)=>()=>{for(const t of n.keys())El(t);e.clear()},D1=(e,n,t)=>{try{e(n,t)}catch(r){setTimeout(()=>{throw r},0)}},m2=Xt(sr(`${Pi}/add`),{withTypes:()=>m2}),B4=sr(`${Pi}/removeAll`),g2=Xt(sr(`${Pi}/remove`),{withTypes:()=>g2}),H4=(...e)=>{console.error(`${Pi}/error`,...e)},z4=(e={})=>{const n=new Map,t=new Map,r=m=>{const g=t.get(m)??0;t.set(m,g+1)},a=m=>{const g=t.get(m)??1;g===1?t.delete(m):t.set(m,g-1)},{extra:o,onError:i=H4}=e;zu(i);const l=m=>(m.unsubscribe=()=>n.delete(m.id),n.set(m.id,m),g=>{m.unsubscribe(),g!=null&&g.cancelActive&&El(m)}),s=m=>{const g=R1(n,m)??h2(m);return l(g)};Xt(s,{withTypes:()=>s});const u=m=>{const g=R1(n,m);return g&&(g.unsubscribe(),m.cancelActive&&El(g)),!!g};Xt(u,{withTypes:()=>u});const c=async(m,g,v,k)=>{const f=new AbortController,p=V4(s,f.signal),y=[];try{m.pending.add(f),r(m),await Promise.resolve(m.effect(g,Xt({},v,{getOriginalState:k,condition:(w,S)=>p(w,S).then(Boolean),take:p,delay:f2(f.signal),pause:jo(f.signal),extra:o,signal:f.signal,fork:_4(f.signal,y),unsubscribe:m.unsubscribe,subscribe:()=>{n.set(m.id,m)},cancelActiveListeners:()=>{m.pending.forEach((w,S,M)=>{w!==f&&(w.abort(Il),M.delete(w))})},cancel:()=>{f.abort(Il),m.pending.delete(f)},throwIfCancelled:()=>{yt(f.signal)}})))}catch(w){w instanceof Ti||D1(i,w,{raisedBy:"effect"})}finally{await Promise.all(y),f.abort(A4),a(m),m.pending.delete(f)}},d=W4(n,t);return{middleware:m=>g=>v=>{if(!Gf(v))return g(v);if(m2.match(v))return s(v.payload);if(B4.match(v)){d();return}if(g2.match(v))return u(v.payload);let k=m.getState();const f=()=>{if(k===L1)throw new Error($e(23));return k};let p;try{if(p=g(v),n.size>0){const y=m.getState(),w=Array.from(n.values());for(const S of w){let M=!1;try{M=S.predicate(v,y,k)}catch(C){M=!1,D1(i,C,{raisedBy:"predicate"})}M&&c(S,v,m,f)}}}finally{k=L1}return p},startListening:s,stopListening:u,clearListeners:d}};function $e(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Ot=()=>({stateFips:[],countyFips:[]}),A1={metricType:"cases",valueMode:"diff",rollingDays:7,normalizeByPopulation:!0,useLogScale:!1,selections:[Ot(),Ot(),Ot(),Ot(),Ot(),Ot()]},y2=i2({name:"filters",initialState:A1,reducers:{resetFilters(){return A1},setMetricType(e,n){e.metricType=n.payload},setValueMode(e,n){e.valueMode=n.payload},setRollingDays(e,n){e.rollingDays=n.payload},setNormalizeByPopulation(e,n){e.normalizeByPopulation=n.payload},setUseLogScale(e,n){e.useLogScale=n.payload},setSelectionAtIndex(e,n){e.selections[n.payload.index]=n.payload.selection},requestApplyStateGroup(e,n){},requestApplyPopulationWindow(e,n){}}}),{resetFilters:v2,setMetricType:Ll,setValueMode:k2,setRollingDays:w2,setNormalizeByPopulation:S2,setUseLogScale:C2,setSelectionAtIndex:Wr,requestApplyStateGroup:dt,requestApplyPopulationWindow:M2}=y2.actions,K4=y2.reducer,G4={isLoading:!1,lastError:null,activeRequestId:0,committedRequestId:0,transitionLog:[],dataStartDate:null,dataEndDate:null,dataVersion:0};function Sr(e,n){const t=e.transitionLog??[];e.transitionLog=[...t,n].slice(-100)}const x2=i2({name:"ui",initialState:G4,reducers:{requestFigureRefresh(e){e.lastError=null},dataSnapshotReady(e,n){e.dataStartDate=n.payload.startDate,e.dataEndDate=n.payload.endDate,e.dataVersion+=1},setIsLoading(e,n){e.isLoading=n.payload},setLastError(e,n){e.lastError=n.payload},callbackTransitionStarted(e,n){const{requestId:t,trigger:r,selectedFipsCount:a}=n.payload;e.isLoading=!0,e.lastError=null,e.activeRequestId=t,Sr(e,{requestId:t,trigger:r,selectedFipsCount:a,stage:"start",timestamp:Date.now()})},callbackTransitionComputed(e,n){const{requestId:t,trigger:r,traceCount:a}=n.payload;Sr(e,{requestId:t,trigger:r,traceCount:a,stage:"compute",timestamp:Date.now()})},callbackTransitionCommitted(e,n){const{requestId:t,trigger:r,figure:a,traceCount:o}=n.payload;(e.activeRequestId??0)===t&&(e.isLoading=!1,e.figure=a,e.committedRequestId=t,Sr(e,{requestId:t,trigger:r,traceCount:o,stage:"commit",timestamp:Date.now()}))},callbackTransitionIgnored(e,n){const{requestId:t,trigger:r,reason:a}=n.payload;Sr(e,{requestId:t,trigger:r,reason:a,stage:"stale",timestamp:Date.now()})},callbackTransitionFailed(e,n){const{requestId:t,trigger:r,message:a}=n.payload;(e.activeRequestId??0)===t&&(e.isLoading=!1,e.lastError=a,Sr(e,{requestId:t,trigger:r,message:a,stage:"error",timestamp:Date.now()}))}}}),{requestFigureRefresh:T2,dataSnapshotReady:$4,setIsLoading:uv,setLastError:cv,callbackTransitionStarted:U4,callbackTransitionComputed:j4,callbackTransitionCommitted:Y4,callbackTransitionIgnored:F1,callbackTransitionFailed:J4}=x2.actions,Q4=x2.reducer,_1=new WeakMap,V1=new WeakMap;function X4(e,n){if(n<=1)return[...e];const t=new Array(e.length);let r=0;for(let a=0;a<e.length;a+=1){r+=e[a]??0,a>=n&&(r-=e[a-n]??0);const o=Math.min(n,a+1);t[a]=r/o}return t}function q4(e){const n=_1.get(e);if(n!=null)return n;const t=new Map,r=new Set;for(const l of e){let s=t.get(l.fips);s==null&&(s=[],t.set(l.fips,s)),s.push(l),r.add(l.date)}const a=[...r].sort((l,s)=>l.localeCompare(s)),o=new Map(a.map((l,s)=>[l,s])),i={byFips:t,sortedDates:a,dateToIndex:o};return _1.set(e,i),i}function Z4(e,n,t){const r=q4(e);if(n.size===0||r.sortedDates.length===0)return{dates:[],values:[]};const a=new Array(r.sortedDates.length).fill(0),o=new Array(r.sortedDates.length).fill(!1);for(const s of n){const u=r.byFips.get(s);if(u!=null)for(const c of u){const d=r.dateToIndex.get(c.date);if(d==null)continue;const h=a[d]??0;a[d]=h+c[t],o[d]=!0}}const i=[],l=[];for(let s=0;s<r.sortedDates.length;s+=1)o[s]&&(i.push(r.sortedDates[s]??""),l.push(a[s]??0));return{dates:i,values:l}}function em(e,n,t){let r=V1.get(t);r==null&&(r=new Map(t.map(o=>[o.fips,o.pop])),V1.set(t,r));const a=[...n].reduce((o,i)=>{const l=r.get(i);return l==null?o:o+l},0);return a<=0?e.map(()=>Number.NaN):e.map(o=>o*100/a)}function nm(e){return e==="cases"?"Cases":"Deaths"}function P2(e){const t=`${e.valueMode==="values"?"Total":"Daily"} Confirmed ${nm(e.metricType)}`;let r="";e.valueMode==="values"?r=`Total confirmed ${e.metricType}`:e.rollingDays>1?r=`Average daily ${e.metricType} (rolling ${e.rollingDays}-day mean)`:r=`Number of daily ${e.metricType}`;const a=e.useLogScale?"log":"linear",o=e.normalizeByPopulation?"%":"",i=e.normalizeByPopulation?"customdata":"y",l=e.normalizeByPopulation?"y":"customdata",s=e.rollingDays===1||e.valueMode==="values"?"d":".1f",u=e.rollingDays>1&&e.valueMode==="diff"?"/day":"",c=`%{x|%b %d}: %{${i}:,${s}} ${e.metricType}${u} (%{${l}:.2g}%)`;return{title:t,yAxisTitle:r,yAxisType:a,yAxisTickSuffix:o,hoverTemplate:c,valueField:i,popField:l}}function b2(e,n){const t=new Set(e.selectedFips);if(t.size===0)return{location:n,dates:[],values:[],popvalues:[]};const r=Z4(e.records,t,e.metricType);if(r.values.length===0)return{location:n,dates:[],values:[],popvalues:[]};const a=e.valueMode==="diff"?[Number.NaN,...X4(tm(r.values),e.rollingDays)]:r.values;return{location:n,dates:r.dates,values:a,popvalues:em(a,t,e.population)}}function tm(e){if(e.length===0)return[];const n=[];for(let t=1;t<e.length;t+=1){const r=e[t]??0,a=e[t-1]??0;n.push(r-a)}return n}const rm=`fips,pop,state,county
1,4903185,Alabama,
2,731545,Alaska,
4,7278717,Arizona,
5,3017804,Arkansas,
6,39512223,California,
8,5758736,Colorado,
9,3565287,Connecticut,
10,973764,Delaware,
11,705749,District of Columbia,
12,21477737,Florida,
13,10617423,Georgia,
15,1415872,Hawaii,
16,1787065,Idaho,
17,12671821,Illinois,
18,6732219,Indiana,
19,3155070,Iowa,
20,2913314,Kansas,
21,4467673,Kentucky,
22,4648794,Louisiana,
23,1344212,Maine,
24,6045680,Maryland,
25,6892503,Massachusetts,
26,9986857,Michigan,
27,5639632,Minnesota,
28,2976149,Mississippi,
29,6137428,Missouri,
30,1068778,Montana,
31,1934408,Nebraska,
32,3080156,Nevada,
33,1359711,New Hampshire,
34,8882190,New Jersey,
35,2096829,New Mexico,
36,19453561,New York,
37,10488084,North Carolina,
38,762062,North Dakota,
39,11689100,Ohio,
40,3956971,Oklahoma,
41,4217737,Oregon,
42,12801989,Pennsylvania,
44,1059361,Rhode Island,
45,5148714,South Carolina,
46,884659,South Dakota,
47,6829174,Tennessee,
48,28995881,Texas,
49,3205958,Utah,
50,623989,Vermont,
51,8535519,Virginia,
53,7614893,Washington,
54,1792147,West Virginia,
55,5822434,Wisconsin,
56,578759,Wyoming,
60,46366,American Samoa,
66,168485,Guam,
69,52263,Northern Mariana Islands,
72,3193694,Puerto Rico,
78,106405,Virgin Islands,
1001,55869,Alabama,Autauga
1003,223234,Alabama,Baldwin
1005,24686,Alabama,Barbour
1007,22394,Alabama,Bibb
1009,57826,Alabama,Blount
1011,10101,Alabama,Bullock
1013,19448,Alabama,Butler
1015,113605,Alabama,Calhoun
1017,33254,Alabama,Chambers
1019,26196,Alabama,Cherokee
1021,44428,Alabama,Chilton
1023,12589,Alabama,Choctaw
1025,23622,Alabama,Clarke
1027,13235,Alabama,Clay
1029,14910,Alabama,Cleburne
1031,52342,Alabama,Coffee
1033,55241,Alabama,Colbert
1035,12067,Alabama,Conecuh
1037,10663,Alabama,Coosa
1039,37049,Alabama,Covington
1041,13772,Alabama,Crenshaw
1043,83768,Alabama,Cullman
1045,49172,Alabama,Dale
1047,37196,Alabama,Dallas
1049,71513,Alabama,DeKalb
1051,81209,Alabama,Elmore
1053,36633,Alabama,Escambia
1055,102268,Alabama,Etowah
1057,16302,Alabama,Fayette
1059,31362,Alabama,Franklin
1061,26271,Alabama,Geneva
1063,8111,Alabama,Greene
1065,14651,Alabama,Hale
1067,17205,Alabama,Henry
1069,105882,Alabama,Houston
1071,51626,Alabama,Jackson
1073,658573,Alabama,Jefferson
1075,13805,Alabama,Lamar
1077,92729,Alabama,Lauderdale
1079,32924,Alabama,Lawrence
1081,164542,Alabama,Lee
1083,98915,Alabama,Limestone
1085,9726,Alabama,Lowndes
1087,18068,Alabama,Macon
1089,372909,Alabama,Madison
1091,18863,Alabama,Marengo
1093,29709,Alabama,Marion
1095,96774,Alabama,Marshall
1097,413210,Alabama,Mobile
1099,20733,Alabama,Monroe
1101,226486,Alabama,Montgomery
1103,119679,Alabama,Morgan
1105,8923,Alabama,Perry
1107,19930,Alabama,Pickens
1109,33114,Alabama,Pike
1111,22722,Alabama,Randolph
1113,57961,Alabama,Russell
1115,89512,Alabama,St. Clair
1117,217702,Alabama,Shelby
1119,12427,Alabama,Sumter
1121,79978,Alabama,Talladega
1123,40367,Alabama,Tallapoosa
1125,209355,Alabama,Tuscaloosa
1127,63521,Alabama,Walker
1129,16326,Alabama,Washington
1131,10373,Alabama,Wilcox
1133,23629,Alabama,Winston
1999,,Alabama,Unknown
2013,3337,Alaska,Aleutians East Borough
2016,5634,Alaska,Aleutians West Census Area
2020,288000,Alaska,Anchorage Municipality
2050,18386,Alaska,Bethel Census Area
2060,836,Alaska,Bristol Bay Borough
2068,2097,Alaska,Denali Borough
2070,4916,Alaska,Dillingham Census Area
2090,96849,Alaska,Fairbanks North Star Borough
2100,2530,Alaska,Haines Borough
2105,2148,Alaska,Hoonah-Angoon Census Area
2110,31974,Alaska,Juneau City and Borough
2122,58708,Alaska,Kenai Peninsula Borough
2130,13901,Alaska,Ketchikan Gateway Borough
2150,12998,Alaska,Kodiak Island Borough
2158,8314,Alaska,Kusilvak Census Area
2164,1592,Alaska,Lake and Peninsula Borough
2170,108317,Alaska,Matanuska-Susitna Borough
2180,10004,Alaska,Nome Census Area
2185,9832,Alaska,North Slope Borough
2188,7621,Alaska,Northwest Arctic Borough
2195,3266,Alaska,Petersburg Borough
2198,6203,Alaska,Prince of Wales-Hyder Census Area
2220,8493,Alaska,Sitka City and Borough
2230,1183,Alaska,Skagway Municipality
2240,6893,Alaska,Southeast Fairbanks Census Area
2261,9202,Alaska,Valdez-Cordova Census Area
2275,2502,Alaska,Wrangell City and Borough
2282,579,Alaska,Yakutat City and Borough
2290,5230,Alaska,Yukon-Koyukuk Census Area
2999,,Alaska,Unknown
4001,71887,Arizona,Apache
4003,125922,Arizona,Cochise
4005,143476,Arizona,Coconino
4007,54018,Arizona,Gila
4009,38837,Arizona,Graham
4011,9498,Arizona,Greenlee
4012,21108,Arizona,La Paz
4013,4485414,Arizona,Maricopa
4015,212181,Arizona,Mohave
4017,110924,Arizona,Navajo
4019,1047279,Arizona,Pima
4021,462789,Arizona,Pinal
4023,46498,Arizona,Santa Cruz
4025,235099,Arizona,Yavapai
4027,213787,Arizona,Yuma
4999,,Arizona,Unknown
5001,17486,Arkansas,Arkansas
5003,19657,Arkansas,Ashley
5005,41932,Arkansas,Baxter
5007,279141,Arkansas,Benton
5009,37432,Arkansas,Boone
5011,10763,Arkansas,Bradley
5013,5189,Arkansas,Calhoun
5015,28380,Arkansas,Carroll
5017,10118,Arkansas,Chicot
5019,22320,Arkansas,Clark
5021,14551,Arkansas,Clay
5023,24919,Arkansas,Cleburne
5025,7956,Arkansas,Cleveland
5027,23457,Arkansas,Columbia
5029,20846,Arkansas,Conway
5031,110332,Arkansas,Craighead
5033,63257,Arkansas,Crawford
5035,47955,Arkansas,Crittenden
5037,16419,Arkansas,Cross
5039,7009,Arkansas,Dallas
5041,11361,Arkansas,Desha
5043,18219,Arkansas,Drew
5045,126007,Arkansas,Faulkner
5047,17715,Arkansas,Franklin
5049,12477,Arkansas,Fulton
5051,99386,Arkansas,Garland
5053,18265,Arkansas,Grant
5055,45325,Arkansas,Greene
5057,21532,Arkansas,Hempstead
5059,33771,Arkansas,Hot Spring
5061,13202,Arkansas,Howard
5063,37825,Arkansas,Independence
5065,13629,Arkansas,Izard
5067,16719,Arkansas,Jackson
5069,66824,Arkansas,Jefferson
5071,26578,Arkansas,Johnson
5073,6624,Arkansas,Lafayette
5075,16406,Arkansas,Lawrence
5077,8857,Arkansas,Lee
5079,13024,Arkansas,Lincoln
5081,12259,Arkansas,Little River
5083,21466,Arkansas,Logan
5085,73309,Arkansas,Lonoke
5087,16576,Arkansas,Madison
5089,16694,Arkansas,Marion
5091,43257,Arkansas,Miller
5093,40651,Arkansas,Mississippi
5095,6701,Arkansas,Monroe
5097,8986,Arkansas,Montgomery
5099,8252,Arkansas,Nevada
5101,7753,Arkansas,Newton
5103,23382,Arkansas,Ouachita
5105,10455,Arkansas,Perry
5107,17782,Arkansas,Phillips
5109,10718,Arkansas,Pike
5111,23528,Arkansas,Poinsett
5113,19964,Arkansas,Polk
5115,64072,Arkansas,Pope
5117,8062,Arkansas,Prairie
5119,391911,Arkansas,Pulaski
5121,17958,Arkansas,Randolph
5123,24994,Arkansas,St. Francis
5125,122437,Arkansas,Saline
5127,10281,Arkansas,Scott
5129,7881,Arkansas,Searcy
5131,127827,Arkansas,Sebastian
5133,17007,Arkansas,Sevier
5135,17442,Arkansas,Sharp
5137,12506,Arkansas,Stone
5139,38682,Arkansas,Union
5141,16545,Arkansas,Van Buren
5143,239187,Arkansas,Washington
5145,78753,Arkansas,White
5147,6320,Arkansas,Woodruff
5149,21341,Arkansas,Yell
5999,,Arkansas,Unknown
6001,1671329,California,Alameda
6003,1129,California,Alpine
6005,39752,California,Amador
6007,219186,California,Butte
6009,45905,California,Calaveras
6011,21547,California,Colusa
6013,1153526,California,Contra Costa
6015,27812,California,Del Norte
6017,192843,California,El Dorado
6019,999101,California,Fresno
6021,28393,California,Glenn
6023,135558,California,Humboldt
6025,181215,California,Imperial
6027,18039,California,Inyo
6029,900202,California,Kern
6031,152940,California,Kings
6033,64386,California,Lake
6035,30573,California,Lassen
6037,10039107,California,Los Angeles
6039,157327,California,Madera
6041,258826,California,Marin
6043,17203,California,Mariposa
6045,86749,California,Mendocino
6047,277680,California,Merced
6049,8841,California,Modoc
6051,14444,California,Mono
6053,434061,California,Monterey
6055,137744,California,Napa
6057,99755,California,Nevada
6059,3175692,California,Orange
6061,398329,California,Placer
6063,18807,California,Plumas
6065,2470546,California,Riverside
6067,1552058,California,Sacramento
6069,62808,California,San Benito
6071,2180085,California,San Bernardino
6073,3338330,California,San Diego
6075,881549,California,San Francisco
6077,762148,California,San Joaquin
6079,283111,California,San Luis Obispo
6081,766573,California,San Mateo
6083,446499,California,Santa Barbara
6085,1927852,California,Santa Clara
6087,273213,California,Santa Cruz
6089,180080,California,Shasta
6091,3005,California,Sierra
6093,43539,California,Siskiyou
6095,447643,California,Solano
6097,494336,California,Sonoma
6099,550660,California,Stanislaus
6101,96971,California,Sutter
6103,65084,California,Tehama
6105,12285,California,Trinity
6107,466195,California,Tulare
6109,54478,California,Tuolumne
6111,846006,California,Ventura
6113,220500,California,Yolo
6115,78668,California,Yuba
6999,,California,Unknown
8001,517421,Colorado,Adams
8003,16233,Colorado,Alamosa
8005,656590,Colorado,Arapahoe
8007,14029,Colorado,Archuleta
8009,3581,Colorado,Baca
8011,5577,Colorado,Bent
8013,326196,Colorado,Boulder
8014,70465,Colorado,Broomfield
8015,20356,Colorado,Chaffee
8017,1831,Colorado,Cheyenne
8019,9700,Colorado,Clear Creek
8021,8205,Colorado,Conejos
8023,3887,Colorado,Costilla
8025,6061,Colorado,Crowley
8027,5068,Colorado,Custer
8029,31162,Colorado,Delta
8031,727211,Colorado,Denver
8033,2055,Colorado,Dolores
8035,351154,Colorado,Douglas
8037,55127,Colorado,Eagle
8039,26729,Colorado,Elbert
8041,720403,Colorado,El Paso
8043,47839,Colorado,Fremont
8045,60061,Colorado,Garfield
8047,6243,Colorado,Gilpin
8049,15734,Colorado,Grand
8051,17462,Colorado,Gunnison
8053,820,Colorado,Hinsdale
8055,6897,Colorado,Huerfano
8057,1392,Colorado,Jackson
8059,582881,Colorado,Jefferson
8061,1406,Colorado,Kiowa
8063,7097,Colorado,Kit Carson
8065,8127,Colorado,Lake
8067,56221,Colorado,La Plata
8069,356899,Colorado,Larimer
8071,14506,Colorado,Las Animas
8073,5701,Colorado,Lincoln
8075,22409,Colorado,Logan
8077,154210,Colorado,Mesa
8079,769,Colorado,Mineral
8081,13283,Colorado,Moffat
8083,26183,Colorado,Montezuma
8085,42758,Colorado,Montrose
8087,29068,Colorado,Morgan
8089,18278,Colorado,Otero
8091,4952,Colorado,Ouray
8093,18845,Colorado,Park
8095,4265,Colorado,Phillips
8097,17767,Colorado,Pitkin
8099,12172,Colorado,Prowers
8101,168424,Colorado,Pueblo
8103,6324,Colorado,Rio Blanco
8105,11267,Colorado,Rio Grande
8107,25638,Colorado,Routt
8109,6824,Colorado,Saguache
8111,728,Colorado,San Juan
8113,8179,Colorado,San Miguel
8115,2248,Colorado,Sedgwick
8117,31011,Colorado,Summit
8119,25388,Colorado,Teller
8121,4908,Colorado,Washington
8123,324492,Colorado,Weld
8125,10019,Colorado,Yuma
8999,,Colorado,Unknown
9001,943332,Connecticut,Fairfield
9003,891720,Connecticut,Hartford
9005,180333,Connecticut,Litchfield
9007,162436,Connecticut,Middlesex
9009,854757,Connecticut,New Haven
9011,265206,Connecticut,New London
9013,150721,Connecticut,Tolland
9015,116782,Connecticut,Windham
9999,,Connecticut,Unknown
10001,180786,Delaware,Kent
10003,558753,Delaware,New Castle
10005,234225,Delaware,Sussex
10999,,Delaware,Unknown
11001,705749,District of Columbia,District of Columbia
11999,,District of Columbia,Unknown
12001,269043,Florida,Alachua
12003,29210,Florida,Baker
12005,174705,Florida,Bay
12007,28201,Florida,Bradford
12009,601942,Florida,Brevard
12011,1952778,Florida,Broward
12013,14105,Florida,Calhoun
12015,188910,Florida,Charlotte
12017,149657,Florida,Citrus
12019,219252,Florida,Clay
12021,384902,Florida,Collier
12023,71686,Florida,Columbia
12027,38001,Florida,DeSoto
12029,16826,Florida,Dixie
12031,957755,Florida,Duval
12033,318316,Florida,Escambia
12035,115081,Florida,Flagler
12037,12125,Florida,Franklin
12039,45660,Florida,Gadsden
12041,18582,Florida,Gilchrist
12043,13811,Florida,Glades
12045,13639,Florida,Gulf
12047,14428,Florida,Hamilton
12049,26937,Florida,Hardee
12051,42022,Florida,Hendry
12053,193920,Florida,Hernando
12055,106221,Florida,Highlands
12057,1471968,Florida,Hillsborough
12059,19617,Florida,Holmes
12061,159923,Florida,Indian River
12063,46414,Florida,Jackson
12065,14246,Florida,Jefferson
12067,8422,Florida,Lafayette
12069,367118,Florida,Lake
12071,770577,Florida,Lee
12073,293582,Florida,Leon
12075,41503,Florida,Levy
12077,8354,Florida,Liberty
12079,18493,Florida,Madison
12081,403253,Florida,Manatee
12083,365579,Florida,Marion
12085,161000,Florida,Martin
12086,2716940,Florida,Miami-Dade
12087,74228,Florida,Monroe
12089,88625,Florida,Nassau
12091,210738,Florida,Okaloosa
12093,42168,Florida,Okeechobee
12095,1393452,Florida,Orange
12097,375751,Florida,Osceola
12099,1496770,Florida,Palm Beach
12101,553947,Florida,Pasco
12103,974996,Florida,Pinellas
12105,724777,Florida,Polk
12107,74521,Florida,Putnam
12109,264672,Florida,St. Johns
12111,328297,Florida,St. Lucie
12113,184313,Florida,Santa Rosa
12115,433742,Florida,Sarasota
12117,471826,Florida,Seminole
12119,132420,Florida,Sumter
12121,44417,Florida,Suwannee
12123,21569,Florida,Taylor
12125,15237,Florida,Union
12127,553284,Florida,Volusia
12129,33739,Florida,Wakulla
12131,74071,Florida,Walton
12133,25473,Florida,Washington
12999,,Florida,Unknown
13001,18386,Georgia,Appling
13003,8165,Georgia,Atkinson
13005,11164,Georgia,Bacon
13007,3038,Georgia,Baker
13009,44890,Georgia,Baldwin
13011,19234,Georgia,Banks
13013,83240,Georgia,Barrow
13015,107738,Georgia,Bartow
13017,16700,Georgia,Ben Hill
13019,19397,Georgia,Berrien
13021,153159,Georgia,Bibb
13023,12873,Georgia,Bleckley
13025,19109,Georgia,Brantley
13027,15457,Georgia,Brooks
13029,39627,Georgia,Bryan
13031,79608,Georgia,Bulloch
13033,22383,Georgia,Burke
13035,24936,Georgia,Butts
13037,6189,Georgia,Calhoun
13039,54666,Georgia,Camden
13043,10803,Georgia,Candler
13045,119992,Georgia,Carroll
13047,67580,Georgia,Catoosa
13049,13392,Georgia,Charlton
13051,289430,Georgia,Chatham
13053,10907,Georgia,Chattahoochee
13055,24789,Georgia,Chattooga
13057,258773,Georgia,Cherokee
13059,128331,Georgia,Clarke
13061,2834,Georgia,Clay
13063,292256,Georgia,Clayton
13065,6618,Georgia,Clinch
13067,760141,Georgia,Cobb
13069,43273,Georgia,Coffee
13071,45600,Georgia,Colquitt
13073,156714,Georgia,Columbia
13075,17270,Georgia,Cook
13077,148509,Georgia,Coweta
13079,12404,Georgia,Crawford
13081,22372,Georgia,Crisp
13083,16116,Georgia,Dade
13085,26108,Georgia,Dawson
13087,26404,Georgia,Decatur
13089,759297,Georgia,DeKalb
13091,20605,Georgia,Dodge
13093,13390,Georgia,Dooly
13095,87956,Georgia,Dougherty
13097,146343,Georgia,Douglas
13099,10190,Georgia,Early
13101,4006,Georgia,Echols
13103,64296,Georgia,Effingham
13105,19194,Georgia,Elbert
13107,22646,Georgia,Emanuel
13109,10654,Georgia,Evans
13111,26188,Georgia,Fannin
13113,114421,Georgia,Fayette
13115,98498,Georgia,Floyd
13117,244252,Georgia,Forsyth
13119,23349,Georgia,Franklin
13121,1063937,Georgia,Fulton
13123,31369,Georgia,Gilmer
13125,2971,Georgia,Glascock
13127,85292,Georgia,Glynn
13129,57963,Georgia,Gordon
13131,24633,Georgia,Grady
13133,18324,Georgia,Greene
13135,936250,Georgia,Gwinnett
13137,45328,Georgia,Habersham
13139,204441,Georgia,Hall
13141,8457,Georgia,Hancock
13143,29792,Georgia,Haralson
13145,35236,Georgia,Harris
13147,26205,Georgia,Hart
13149,11923,Georgia,Heard
13151,234561,Georgia,Henry
13153,157863,Georgia,Houston
13155,9416,Georgia,Irwin
13157,72977,Georgia,Jackson
13159,14219,Georgia,Jasper
13161,15115,Georgia,Jeff Davis
13163,15362,Georgia,Jefferson
13165,8676,Georgia,Jenkins
13167,9643,Georgia,Johnson
13169,28735,Georgia,Jones
13171,19077,Georgia,Lamar
13173,10423,Georgia,Lanier
13175,47546,Georgia,Laurens
13177,29992,Georgia,Lee
13179,61435,Georgia,Liberty
13181,7921,Georgia,Lincoln
13183,19559,Georgia,Long
13185,117406,Georgia,Lowndes
13187,33610,Georgia,Lumpkin
13189,21312,Georgia,McDuffie
13191,14378,Georgia,McIntosh
13193,12947,Georgia,Macon
13195,29880,Georgia,Madison
13197,8359,Georgia,Marion
13199,21167,Georgia,Meriwether
13201,5718,Georgia,Miller
13205,21863,Georgia,Mitchell
13207,27578,Georgia,Monroe
13209,9172,Georgia,Montgomery
13211,19276,Georgia,Morgan
13213,40096,Georgia,Murray
13215,195769,Georgia,Muscogee
13217,111744,Georgia,Newton
13219,40280,Georgia,Oconee
13221,15259,Georgia,Oglethorpe
13223,168667,Georgia,Paulding
13225,27546,Georgia,Peach
13227,32591,Georgia,Pickens
13229,19465,Georgia,Pierce
13231,18962,Georgia,Pike
13233,42613,Georgia,Polk
13235,11137,Georgia,Pulaski
13237,22119,Georgia,Putnam
13239,2299,Georgia,Quitman
13241,17137,Georgia,Rabun
13243,6778,Georgia,Randolph
13245,202518,Georgia,Richmond
13247,90896,Georgia,Rockdale
13249,5257,Georgia,Schley
13251,13966,Georgia,Screven
13253,8090,Georgia,Seminole
13255,66703,Georgia,Spalding
13257,25925,Georgia,Stephens
13259,6621,Georgia,Stewart
13261,29524,Georgia,Sumter
13263,6195,Georgia,Talbot
13265,1537,Georgia,Taliaferro
13267,25286,Georgia,Tattnall
13269,8020,Georgia,Taylor
13271,15860,Georgia,Telfair
13273,8531,Georgia,Terrell
13275,44451,Georgia,Thomas
13277,40644,Georgia,Tift
13279,26830,Georgia,Toombs
13281,12037,Georgia,Towns
13283,6901,Georgia,Treutlen
13285,69922,Georgia,Troup
13287,7985,Georgia,Turner
13289,8120,Georgia,Twiggs
13291,24511,Georgia,Union
13293,26320,Georgia,Upson
13295,69761,Georgia,Walker
13297,94593,Georgia,Walton
13299,35734,Georgia,Ware
13301,5254,Georgia,Warren
13303,20374,Georgia,Washington
13305,29927,Georgia,Wayne
13307,2607,Georgia,Webster
13309,7855,Georgia,Wheeler
13311,30798,Georgia,White
13313,104628,Georgia,Whitfield
13315,8635,Georgia,Wilcox
13317,9777,Georgia,Wilkes
13319,8954,Georgia,Wilkinson
13321,20247,Georgia,Worth
13999,,Georgia,Unknown
15001,201513,Hawaii,Hawaii
15003,974563,Hawaii,Honolulu
15005,86,Hawaii,Kalawao
15007,72293,Hawaii,Kauai
15009,167417,Hawaii,Maui
15999,,Hawaii,Unknown
16001,481587,Idaho,Ada
16003,4294,Idaho,Adams
16005,87808,Idaho,Bannock
16007,6125,Idaho,Bear Lake
16009,9298,Idaho,Benewah
16011,46811,Idaho,Bingham
16013,23021,Idaho,Blaine
16015,7831,Idaho,Boise
16017,45739,Idaho,Bonner
16019,119062,Idaho,Bonneville
16021,12245,Idaho,Boundary
16023,2597,Idaho,Butte
16025,1106,Idaho,Camas
16027,229849,Idaho,Canyon
16029,7155,Idaho,Caribou
16031,24030,Idaho,Cassia
16033,845,Idaho,Clark
16035,8756,Idaho,Clearwater
16037,4315,Idaho,Custer
16039,27511,Idaho,Elmore
16041,13876,Idaho,Franklin
16043,13099,Idaho,Fremont
16045,18112,Idaho,Gem
16047,15179,Idaho,Gooding
16049,16667,Idaho,Idaho
16051,29871,Idaho,Jefferson
16053,24412,Idaho,Jerome
16055,165697,Idaho,Kootenai
16057,40108,Idaho,Latah
16059,8027,Idaho,Lemhi
16061,3838,Idaho,Lewis
16063,5366,Idaho,Lincoln
16065,39907,Idaho,Madison
16067,21039,Idaho,Minidoka
16069,40408,Idaho,Nez Perce
16071,4531,Idaho,Oneida
16073,11823,Idaho,Owyhee
16075,23951,Idaho,Payette
16077,7681,Idaho,Power
16079,12882,Idaho,Shoshone
16081,12142,Idaho,Teton
16083,86878,Idaho,Twin Falls
16085,11392,Idaho,Valley
16087,10194,Idaho,Washington
16999,,Idaho,Unknown
17001,65435,Illinois,Adams
17003,5761,Illinois,Alexander
17005,16426,Illinois,Bond
17007,53544,Illinois,Boone
17009,6578,Illinois,Brown
17011,32628,Illinois,Bureau
17013,4739,Illinois,Calhoun
17015,14305,Illinois,Carroll
17017,12147,Illinois,Cass
17019,209689,Illinois,Champaign
17021,32304,Illinois,Christian
17023,15441,Illinois,Clark
17025,13184,Illinois,Clay
17027,37562,Illinois,Clinton
17029,50621,Illinois,Coles
17031,5150233,Illinois,Cook
17033,18667,Illinois,Crawford
17035,10766,Illinois,Cumberland
17037,104897,Illinois,DeKalb
17039,15638,Illinois,De Witt
17041,19465,Illinois,Douglas
17043,922921,Illinois,DuPage
17045,17161,Illinois,Edgar
17047,6395,Illinois,Edwards
17049,34008,Illinois,Effingham
17051,21336,Illinois,Fayette
17053,12961,Illinois,Ford
17055,38469,Illinois,Franklin
17057,34340,Illinois,Fulton
17059,4828,Illinois,Gallatin
17061,12969,Illinois,Greene
17063,51054,Illinois,Grundy
17065,8116,Illinois,Hamilton
17067,17708,Illinois,Hancock
17069,3821,Illinois,Hardin
17071,6646,Illinois,Henderson
17073,48913,Illinois,Henry
17075,27114,Illinois,Iroquois
17077,56750,Illinois,Jackson
17079,9610,Illinois,Jasper
17081,37684,Illinois,Jefferson
17083,21773,Illinois,Jersey
17085,21235,Illinois,Jo Daviess
17087,12417,Illinois,Johnson
17089,532403,Illinois,Kane
17091,109862,Illinois,Kankakee
17093,128990,Illinois,Kendall
17095,49699,Illinois,Knox
17097,696535,Illinois,Lake
17099,108669,Illinois,LaSalle
17101,15678,Illinois,Lawrence
17103,34096,Illinois,Lee
17105,35648,Illinois,Livingston
17107,28618,Illinois,Logan
17109,29682,Illinois,McDonough
17111,307774,Illinois,McHenry
17113,171517,Illinois,McLean
17115,104009,Illinois,Macon
17117,44926,Illinois,Macoupin
17119,262966,Illinois,Madison
17121,37205,Illinois,Marion
17123,11438,Illinois,Marshall
17125,13359,Illinois,Mason
17127,13772,Illinois,Massac
17129,12196,Illinois,Menard
17131,15437,Illinois,Mercer
17133,34637,Illinois,Monroe
17135,28414,Illinois,Montgomery
17137,33658,Illinois,Morgan
17139,14501,Illinois,Moultrie
17141,50643,Illinois,Ogle
17143,179179,Illinois,Peoria
17145,20916,Illinois,Perry
17147,16344,Illinois,Piatt
17149,15561,Illinois,Pike
17151,4177,Illinois,Pope
17153,5335,Illinois,Pulaski
17155,5739,Illinois,Putnam
17157,31782,Illinois,Randolph
17159,15513,Illinois,Richland
17161,141879,Illinois,Rock Island
17163,259686,Illinois,St. Clair
17165,23491,Illinois,Saline
17167,194672,Illinois,Sangamon
17169,6768,Illinois,Schuyler
17171,4951,Illinois,Scott
17173,21634,Illinois,Shelby
17175,5342,Illinois,Stark
17177,44498,Illinois,Stephenson
17179,131803,Illinois,Tazewell
17181,16653,Illinois,Union
17183,75758,Illinois,Vermilion
17185,11520,Illinois,Wabash
17187,16844,Illinois,Warren
17189,13887,Illinois,Washington
17191,16215,Illinois,Wayne
17193,13537,Illinois,White
17195,55175,Illinois,Whiteside
17197,690743,Illinois,Will
17199,66597,Illinois,Williamson
17201,282572,Illinois,Winnebago
17203,38459,Illinois,Woodford
17999,,Illinois,Unknown
18001,35777,Indiana,Adams
18003,379299,Indiana,Allen
18005,83779,Indiana,Bartholomew
18007,8748,Indiana,Benton
18009,11758,Indiana,Blackford
18011,67843,Indiana,Boone
18013,15092,Indiana,Brown
18015,20257,Indiana,Carroll
18017,37689,Indiana,Cass
18019,118302,Indiana,Clark
18021,26225,Indiana,Clay
18023,32399,Indiana,Clinton
18025,10577,Indiana,Crawford
18027,33351,Indiana,Daviess
18029,49458,Indiana,Dearborn
18031,26559,Indiana,Decatur
18033,43475,Indiana,DeKalb
18035,114135,Indiana,Delaware
18037,42736,Indiana,Dubois
18039,206341,Indiana,Elkhart
18041,23102,Indiana,Fayette
18043,78522,Indiana,Floyd
18045,16346,Indiana,Fountain
18047,22758,Indiana,Franklin
18049,19974,Indiana,Fulton
18051,33659,Indiana,Gibson
18053,65769,Indiana,Grant
18055,31922,Indiana,Greene
18057,338011,Indiana,Hamilton
18059,78168,Indiana,Hancock
18061,40515,Indiana,Harrison
18063,170311,Indiana,Hendricks
18065,47972,Indiana,Henry
18067,82544,Indiana,Howard
18069,36520,Indiana,Huntington
18071,44231,Indiana,Jackson
18073,33562,Indiana,Jasper
18075,20436,Indiana,Jay
18077,32308,Indiana,Jefferson
18079,27735,Indiana,Jennings
18081,158167,Indiana,Johnson
18083,36594,Indiana,Knox
18085,79456,Indiana,Kosciusko
18087,39614,Indiana,LaGrange
18089,485493,Indiana,Lake
18091,109888,Indiana,LaPorte
18093,45370,Indiana,Lawrence
18095,129569,Indiana,Madison
18097,964582,Indiana,Marion
18099,46258,Indiana,Marshall
18101,10255,Indiana,Martin
18103,35516,Indiana,Miami
18105,148431,Indiana,Monroe
18107,38338,Indiana,Montgomery
18109,70489,Indiana,Morgan
18111,13984,Indiana,Newton
18113,47744,Indiana,Noble
18115,5875,Indiana,Ohio
18117,19646,Indiana,Orange
18119,20799,Indiana,Owen
18121,16937,Indiana,Parke
18123,19169,Indiana,Perry
18125,12389,Indiana,Pike
18127,170389,Indiana,Porter
18129,25427,Indiana,Posey
18131,12353,Indiana,Pulaski
18133,37576,Indiana,Putnam
18135,24665,Indiana,Randolph
18137,28324,Indiana,Ripley
18139,16581,Indiana,Rush
18141,271826,Indiana,St. Joseph
18143,23873,Indiana,Scott
18145,44729,Indiana,Shelby
18147,20277,Indiana,Spencer
18149,22995,Indiana,Starke
18151,34594,Indiana,Steuben
18153,20669,Indiana,Sullivan
18155,10751,Indiana,Switzerland
18157,195732,Indiana,Tippecanoe
18159,15148,Indiana,Tipton
18161,7054,Indiana,Union
18163,181451,Indiana,Vanderburgh
18165,15498,Indiana,Vermillion
18167,107038,Indiana,Vigo
18169,30996,Indiana,Wabash
18171,8265,Indiana,Warren
18173,62998,Indiana,Warrick
18175,28036,Indiana,Washington
18177,65884,Indiana,Wayne
18179,28296,Indiana,Wells
18181,24102,Indiana,White
18183,33964,Indiana,Whitley
18999,,Indiana,Unknown
19001,7152,Iowa,Adair
19003,3602,Iowa,Adams
19005,13687,Iowa,Allamakee
19007,12426,Iowa,Appanoose
19009,5496,Iowa,Audubon
19011,25645,Iowa,Benton
19013,131228,Iowa,Black Hawk
19015,26234,Iowa,Boone
19017,25062,Iowa,Bremer
19019,21175,Iowa,Buchanan
19021,19620,Iowa,Buena Vista
19023,14439,Iowa,Butler
19025,9668,Iowa,Calhoun
19027,20165,Iowa,Carroll
19029,12836,Iowa,Cass
19031,18627,Iowa,Cedar
19033,42450,Iowa,Cerro Gordo
19035,11235,Iowa,Cherokee
19037,11933,Iowa,Chickasaw
19039,9395,Iowa,Clarke
19041,16016,Iowa,Clay
19043,17549,Iowa,Clayton
19045,46429,Iowa,Clinton
19047,16820,Iowa,Crawford
19049,93453,Iowa,Dallas
19051,9000,Iowa,Davis
19053,7870,Iowa,Decatur
19055,17011,Iowa,Delaware
19057,38967,Iowa,Des Moines
19059,17258,Iowa,Dickinson
19061,97311,Iowa,Dubuque
19063,9208,Iowa,Emmet
19065,19650,Iowa,Fayette
19067,15642,Iowa,Floyd
19069,10070,Iowa,Franklin
19071,6960,Iowa,Fremont
19073,8888,Iowa,Greene
19075,12232,Iowa,Grundy
19077,10689,Iowa,Guthrie
19079,14773,Iowa,Hamilton
19081,10630,Iowa,Hancock
19083,16846,Iowa,Hardin
19085,14049,Iowa,Harrison
19087,19954,Iowa,Henry
19089,9158,Iowa,Howard
19091,9558,Iowa,Humboldt
19093,6860,Iowa,Ida
19095,16184,Iowa,Iowa
19097,19439,Iowa,Jackson
19099,37185,Iowa,Jasper
19101,18295,Iowa,Jefferson
19103,151140,Iowa,Johnson
19105,20681,Iowa,Jones
19107,10246,Iowa,Keokuk
19109,14813,Iowa,Kossuth
19111,33657,Iowa,Lee
19113,226706,Iowa,Linn
19115,11035,Iowa,Louisa
19117,8600,Iowa,Lucas
19119,11755,Iowa,Lyon
19121,16338,Iowa,Madison
19123,22095,Iowa,Mahaska
19125,33253,Iowa,Marion
19127,39369,Iowa,Marshall
19129,15109,Iowa,Mills
19131,10586,Iowa,Mitchell
19133,8615,Iowa,Monona
19135,7707,Iowa,Monroe
19137,9917,Iowa,Montgomery
19139,42664,Iowa,Muscatine
19141,13753,Iowa,O'Brien
19143,5958,Iowa,Osceola
19145,15107,Iowa,Page
19147,8886,Iowa,Palo Alto
19149,25177,Iowa,Plymouth
19151,6619,Iowa,Pocahontas
19153,490161,Iowa,Polk
19155,93206,Iowa,Pottawattamie
19157,18504,Iowa,Poweshiek
19159,4894,Iowa,Ringgold
19161,9721,Iowa,Sac
19163,172943,Iowa,Scott
19165,11454,Iowa,Shelby
19167,34855,Iowa,Sioux
19169,97117,Iowa,Story
19171,16854,Iowa,Tama
19173,6121,Iowa,Taylor
19175,12241,Iowa,Union
19177,7044,Iowa,Van Buren
19179,34969,Iowa,Wapello
19181,51466,Iowa,Warren
19183,21965,Iowa,Washington
19185,6441,Iowa,Wayne
19187,35904,Iowa,Webster
19189,10354,Iowa,Winnebago
19191,19991,Iowa,Winneshiek
19193,103107,Iowa,Woodbury
19195,7381,Iowa,Worth
19197,12562,Iowa,Wright
19999,,Iowa,Unknown
20001,12369,Kansas,Allen
20003,7858,Kansas,Anderson
20005,16073,Kansas,Atchison
20007,4427,Kansas,Barber
20009,25779,Kansas,Barton
20011,14534,Kansas,Bourbon
20013,9564,Kansas,Brown
20015,66911,Kansas,Butler
20017,2648,Kansas,Chase
20019,3250,Kansas,Chautauqua
20021,19939,Kansas,Cherokee
20023,2657,Kansas,Cheyenne
20025,1994,Kansas,Clark
20027,8002,Kansas,Clay
20029,8786,Kansas,Cloud
20031,8179,Kansas,Coffey
20033,1700,Kansas,Comanche
20035,34908,Kansas,Cowley
20037,38818,Kansas,Crawford
20039,2827,Kansas,Decatur
20041,18466,Kansas,Dickinson
20043,7600,Kansas,Doniphan
20045,122259,Kansas,Douglas
20047,2798,Kansas,Edwards
20049,2530,Kansas,Elk
20051,28553,Kansas,Ellis
20053,6102,Kansas,Ellsworth
20055,36467,Kansas,Finney
20057,33619,Kansas,Ford
20059,25544,Kansas,Franklin
20061,31670,Kansas,Geary
20063,2636,Kansas,Gove
20065,2482,Kansas,Graham
20067,7150,Kansas,Grant
20069,5988,Kansas,Gray
20071,1232,Kansas,Greeley
20073,5982,Kansas,Greenwood
20075,2539,Kansas,Hamilton
20077,5436,Kansas,Harper
20079,34429,Kansas,Harvey
20081,3968,Kansas,Haskell
20083,1794,Kansas,Hodgeman
20085,13171,Kansas,Jackson
20087,19043,Kansas,Jefferson
20089,2879,Kansas,Jewell
20091,602401,Kansas,Johnson
20093,3838,Kansas,Kearny
20095,7152,Kansas,Kingman
20097,2475,Kansas,Kiowa
20099,19618,Kansas,Labette
20101,1535,Kansas,Lane
20103,81758,Kansas,Leavenworth
20105,2962,Kansas,Lincoln
20107,9703,Kansas,Linn
20109,2794,Kansas,Logan
20111,33195,Kansas,Lyon
20113,28542,Kansas,McPherson
20115,11884,Kansas,Marion
20117,9707,Kansas,Marshall
20119,4033,Kansas,Meade
20121,34237,Kansas,Miami
20123,5979,Kansas,Mitchell
20125,31829,Kansas,Montgomery
20127,5620,Kansas,Morris
20129,2587,Kansas,Morton
20131,10231,Kansas,Nemaha
20133,16007,Kansas,Neosho
20135,2750,Kansas,Ness
20137,5361,Kansas,Norton
20139,15949,Kansas,Osage
20141,3421,Kansas,Osborne
20143,5704,Kansas,Ottawa
20145,6414,Kansas,Pawnee
20147,5234,Kansas,Phillips
20149,24383,Kansas,Pottawatomie
20151,9164,Kansas,Pratt
20153,2530,Kansas,Rawlins
20155,61998,Kansas,Reno
20157,4636,Kansas,Republic
20159,9537,Kansas,Rice
20161,74232,Kansas,Riley
20163,4920,Kansas,Rooks
20165,3036,Kansas,Rush
20167,6856,Kansas,Russell
20169,54224,Kansas,Saline
20171,4823,Kansas,Scott
20173,516042,Kansas,Sedgwick
20175,21428,Kansas,Seward
20177,176875,Kansas,Shawnee
20179,2521,Kansas,Sheridan
20181,5917,Kansas,Sherman
20183,3583,Kansas,Smith
20185,4156,Kansas,Stafford
20187,2006,Kansas,Stanton
20189,5485,Kansas,Stevens
20191,22836,Kansas,Sumner
20193,7777,Kansas,Thomas
20195,2803,Kansas,Trego
20197,6931,Kansas,Wabaunsee
20199,1518,Kansas,Wallace
20201,5406,Kansas,Washington
20203,2119,Kansas,Wichita
20205,8525,Kansas,Wilson
20207,3138,Kansas,Woodson
20209,165429,Kansas,Wyandotte
20999,,Kansas,Unknown
21001,19202,Kentucky,Adair
21003,21315,Kentucky,Allen
21005,22747,Kentucky,Anderson
21007,7888,Kentucky,Ballard
21009,44249,Kentucky,Barren
21011,12500,Kentucky,Bath
21013,26032,Kentucky,Bell
21015,133581,Kentucky,Boone
21017,19788,Kentucky,Bourbon
21019,46718,Kentucky,Boyd
21021,30060,Kentucky,Boyle
21023,8303,Kentucky,Bracken
21025,12630,Kentucky,Breathitt
21027,20477,Kentucky,Breckinridge
21029,81676,Kentucky,Bullitt
21031,12879,Kentucky,Butler
21033,12747,Kentucky,Caldwell
21035,39001,Kentucky,Calloway
21037,93584,Kentucky,Campbell
21039,4760,Kentucky,Carlisle
21041,10631,Kentucky,Carroll
21043,26797,Kentucky,Carter
21045,16159,Kentucky,Casey
21047,70461,Kentucky,Christian
21049,36263,Kentucky,Clark
21051,19901,Kentucky,Clay
21053,10218,Kentucky,Clinton
21055,8806,Kentucky,Crittenden
21057,6614,Kentucky,Cumberland
21059,101511,Kentucky,Daviess
21061,12150,Kentucky,Edmonson
21063,7517,Kentucky,Elliott
21065,14106,Kentucky,Estill
21067,323152,Kentucky,Fayette
21069,14581,Kentucky,Fleming
21071,35589,Kentucky,Floyd
21073,50991,Kentucky,Franklin
21075,5969,Kentucky,Fulton
21077,8869,Kentucky,Gallatin
21079,17666,Kentucky,Garrard
21081,25069,Kentucky,Grant
21083,37266,Kentucky,Graves
21085,26427,Kentucky,Grayson
21087,10941,Kentucky,Green
21089,35098,Kentucky,Greenup
21091,8722,Kentucky,Hancock
21093,110958,Kentucky,Hardin
21095,26010,Kentucky,Harlan
21097,18886,Kentucky,Harrison
21099,19035,Kentucky,Hart
21101,45210,Kentucky,Henderson
21103,16126,Kentucky,Henry
21105,4380,Kentucky,Hickman
21107,44686,Kentucky,Hopkins
21109,13329,Kentucky,Jackson
21111,766757,Kentucky,Jefferson
21113,54115,Kentucky,Jessamine
21115,22188,Kentucky,Johnson
21117,166998,Kentucky,Kenton
21119,14806,Kentucky,Knott
21121,31145,Kentucky,Knox
21123,14398,Kentucky,Larue
21125,60813,Kentucky,Laurel
21127,15317,Kentucky,Lawrence
21129,7403,Kentucky,Lee
21131,9877,Kentucky,Leslie
21133,21553,Kentucky,Letcher
21135,13275,Kentucky,Lewis
21137,24549,Kentucky,Lincoln
21139,9194,Kentucky,Livingston
21141,27102,Kentucky,Logan
21143,8210,Kentucky,Lyon
21145,65418,Kentucky,McCracken
21147,17231,Kentucky,McCreary
21149,9207,Kentucky,McLean
21151,92987,Kentucky,Madison
21153,12161,Kentucky,Magoffin
21155,19273,Kentucky,Marion
21157,31100,Kentucky,Marshall
21159,11195,Kentucky,Martin
21161,17070,Kentucky,Mason
21163,28572,Kentucky,Meade
21165,6489,Kentucky,Menifee
21167,21933,Kentucky,Mercer
21169,10071,Kentucky,Metcalfe
21171,10650,Kentucky,Monroe
21173,28157,Kentucky,Montgomery
21175,13309,Kentucky,Morgan
21177,30622,Kentucky,Muhlenberg
21179,46233,Kentucky,Nelson
21181,7269,Kentucky,Nicholas
21183,23994,Kentucky,Ohio
21185,66799,Kentucky,Oldham
21187,10901,Kentucky,Owen
21189,4415,Kentucky,Owsley
21191,14590,Kentucky,Pendleton
21193,25758,Kentucky,Perry
21195,57876,Kentucky,Pike
21197,12359,Kentucky,Powell
21199,64979,Kentucky,Pulaski
21201,2108,Kentucky,Robertson
21203,16695,Kentucky,Rockcastle
21205,24460,Kentucky,Rowan
21207,17923,Kentucky,Russell
21209,57004,Kentucky,Scott
21211,49024,Kentucky,Shelby
21213,18572,Kentucky,Simpson
21215,19351,Kentucky,Spencer
21217,25769,Kentucky,Taylor
21219,12294,Kentucky,Todd
21221,14651,Kentucky,Trigg
21223,8471,Kentucky,Trimble
21225,14381,Kentucky,Union
21227,132896,Kentucky,Warren
21229,12095,Kentucky,Washington
21231,20333,Kentucky,Wayne
21233,12942,Kentucky,Webster
21235,36264,Kentucky,Whitley
21237,7157,Kentucky,Wolfe
21239,26734,Kentucky,Woodford
21999,,Kentucky,Unknown
22001,62045,Louisiana,Acadia
22003,25627,Louisiana,Allen
22005,126604,Louisiana,Ascension
22007,21891,Louisiana,Assumption
22009,40144,Louisiana,Avoyelles
22011,37497,Louisiana,Beauregard
22013,13241,Louisiana,Bienville
22015,127039,Louisiana,Bossier
22017,240204,Louisiana,Caddo
22019,203436,Louisiana,Calcasieu
22021,9918,Louisiana,Caldwell
22023,6973,Louisiana,Cameron
22025,9494,Louisiana,Catahoula
22027,15670,Louisiana,Claiborne
22029,19259,Louisiana,Concordia
22031,27463,Louisiana,De Soto
22033,440059,Louisiana,East Baton Rouge
22035,6861,Louisiana,East Carroll
22037,19135,Louisiana,East Feliciana
22039,33395,Louisiana,Evangeline
22041,20015,Louisiana,Franklin
22043,22389,Louisiana,Grant
22045,69830,Louisiana,Iberia
22047,32511,Louisiana,Iberville
22049,15744,Louisiana,Jackson
22051,432493,Louisiana,Jefferson
22053,31368,Louisiana,Jefferson Davis
22055,244390,Louisiana,Lafayette
22057,97614,Louisiana,Lafourche
22059,14892,Louisiana,LaSalle
22061,46742,Louisiana,Lincoln
22063,140789,Louisiana,Livingston
22065,10951,Louisiana,Madison
22067,24874,Louisiana,Morehouse
22069,38158,Louisiana,Natchitoches
22071,390144,Louisiana,Orleans
22073,153279,Louisiana,Ouachita
22075,23197,Louisiana,Plaquemines
22077,21730,Louisiana,Pointe Coupee
22079,129648,Louisiana,Rapides
22081,8442,Louisiana,Red River
22083,20122,Louisiana,Richland
22085,23884,Louisiana,Sabine
22087,47244,Louisiana,St. Bernard
22089,53100,Louisiana,St. Charles
22091,10132,Louisiana,St. Helena
22093,21096,Louisiana,St. James
22095,42837,Louisiana,St. John the Baptist
22097,82124,Louisiana,St. Landry
22099,53431,Louisiana,St. Martin
22101,49348,Louisiana,St. Mary
22103,260419,Louisiana,St. Tammany
22105,134758,Louisiana,Tangipahoa
22107,4334,Louisiana,Tensas
22109,110461,Louisiana,Terrebonne
22111,22108,Louisiana,Union
22113,59511,Louisiana,Vermilion
22115,47429,Louisiana,Vernon
22117,46194,Louisiana,Washington
22119,38340,Louisiana,Webster
22121,26465,Louisiana,West Baton Rouge
22123,10830,Louisiana,West Carroll
22125,15568,Louisiana,West Feliciana
22127,13904,Louisiana,Winn
22999,,Louisiana,Unknown
23001,108277,Maine,Androscoggin
23003,67055,Maine,Aroostook
23005,295003,Maine,Cumberland
23007,30199,Maine,Franklin
23009,54987,Maine,Hancock
23011,122302,Maine,Kennebec
23013,39772,Maine,Knox
23015,34634,Maine,Lincoln
23017,57975,Maine,Oxford
23019,152148,Maine,Penobscot
23021,16785,Maine,Piscataquis
23023,35856,Maine,Sagadahoc
23025,50484,Maine,Somerset
23027,39715,Maine,Waldo
23029,31379,Maine,Washington
23031,207641,Maine,York
23999,,Maine,Unknown
24001,70416,Maryland,Allegany
24003,579234,Maryland,Anne Arundel
24005,827370,Maryland,Baltimore
24009,92525,Maryland,Calvert
24011,33406,Maryland,Caroline
24013,168447,Maryland,Carroll
24015,102855,Maryland,Cecil
24017,163257,Maryland,Charles
24019,31929,Maryland,Dorchester
24021,259547,Maryland,Frederick
24023,29014,Maryland,Garrett
24025,255441,Maryland,Harford
24027,325690,Maryland,Howard
24029,19422,Maryland,Kent
24031,1050688,Maryland,Montgomery
24033,909327,Maryland,Prince George's
24035,50381,Maryland,Queen Anne's
24037,113510,Maryland,St. Mary's
24039,25616,Maryland,Somerset
24041,37181,Maryland,Talbot
24043,151049,Maryland,Washington
24045,103609,Maryland,Wicomico
24047,52276,Maryland,Worcester
24510,593490,Maryland,Baltimore city
24999,,Maryland,Unknown
25001,212990,Massachusetts,Barnstable
25003,124944,Massachusetts,Berkshire
25005,565217,Massachusetts,Bristol
25007,17332,Massachusetts,Dukes
25009,789034,Massachusetts,Essex
25011,70180,Massachusetts,Franklin
25013,466372,Massachusetts,Hampden
25015,160830,Massachusetts,Hampshire
25017,1611699,Massachusetts,Middlesex
25019,11399,Massachusetts,Nantucket
25021,706775,Massachusetts,Norfolk
25023,521202,Massachusetts,Plymouth
25025,803907,Massachusetts,Suffolk
25027,830622,Massachusetts,Worcester
25999,,Massachusetts,Unknown
26001,10405,Michigan,Alcona
26003,9108,Michigan,Alger
26005,118081,Michigan,Allegan
26007,28405,Michigan,Alpena
26009,23324,Michigan,Antrim
26011,14883,Michigan,Arenac
26013,8209,Michigan,Baraga
26015,61550,Michigan,Barry
26017,103126,Michigan,Bay
26019,17766,Michigan,Benzie
26021,153401,Michigan,Berrien
26023,43517,Michigan,Branch
26025,134159,Michigan,Calhoun
26027,51787,Michigan,Cass
26029,26143,Michigan,Charlevoix
26031,25276,Michigan,Cheboygan
26033,37349,Michigan,Chippewa
26035,30950,Michigan,Clare
26037,79595,Michigan,Clinton
26039,14029,Michigan,Crawford
26041,35784,Michigan,Delta
26043,25239,Michigan,Dickinson
26045,110268,Michigan,Eaton
26047,33415,Michigan,Emmet
26049,405813,Michigan,Genesee
26051,25449,Michigan,Gladwin
26053,13975,Michigan,Gogebic
26055,93088,Michigan,Grand Traverse
26057,40711,Michigan,Gratiot
26059,45605,Michigan,Hillsdale
26061,35684,Michigan,Houghton
26063,30981,Michigan,Huron
26065,292406,Michigan,Ingham
26067,64697,Michigan,Ionia
26069,25127,Michigan,Iosco
26071,11066,Michigan,Iron
26073,69872,Michigan,Isabella
26075,158510,Michigan,Jackson
26077,265066,Michigan,Kalamazoo
26079,18038,Michigan,Kalkaska
26081,656955,Michigan,Kent
26083,2116,Michigan,Keweenaw
26085,11853,Michigan,Lake
26087,87607,Michigan,Lapeer
26089,21761,Michigan,Leelanau
26091,98451,Michigan,Lenawee
26093,191995,Michigan,Livingston
26095,6229,Michigan,Luce
26097,10799,Michigan,Mackinac
26099,873972,Michigan,Macomb
26101,24558,Michigan,Manistee
26103,66699,Michigan,Marquette
26105,29144,Michigan,Mason
26107,43453,Michigan,Mecosta
26109,22780,Michigan,Menominee
26111,83156,Michigan,Midland
26113,15118,Michigan,Missaukee
26115,150500,Michigan,Monroe
26117,63888,Michigan,Montcalm
26119,9328,Michigan,Montmorency
26121,173566,Michigan,Muskegon
26123,48980,Michigan,Newaygo
26125,1257584,Michigan,Oakland
26127,26467,Michigan,Oceana
26129,20997,Michigan,Ogemaw
26131,5720,Michigan,Ontonagon
26133,23460,Michigan,Osceola
26135,8241,Michigan,Oscoda
26137,24668,Michigan,Otsego
26139,291830,Michigan,Ottawa
26141,12592,Michigan,Presque Isle
26143,24019,Michigan,Roscommon
26145,190539,Michigan,Saginaw
26147,159128,Michigan,St. Clair
26149,60964,Michigan,St. Joseph
26151,41170,Michigan,Sanilac
26153,8094,Michigan,Schoolcraft
26155,68122,Michigan,Shiawassee
26157,52245,Michigan,Tuscola
26159,75677,Michigan,Van Buren
26161,367601,Michigan,Washtenaw
26163,1749343,Michigan,Wayne
26165,33631,Michigan,Wexford
26999,,Michigan,Unknown
27001,15886,Minnesota,Aitkin
27003,356921,Minnesota,Anoka
27005,34423,Minnesota,Becker
27007,47188,Minnesota,Beltrami
27009,40889,Minnesota,Benton
27011,4991,Minnesota,Big Stone
27013,67653,Minnesota,Blue Earth
27015,25008,Minnesota,Brown
27017,35871,Minnesota,Carlton
27019,105089,Minnesota,Carver
27021,29779,Minnesota,Cass
27023,11800,Minnesota,Chippewa
27025,56579,Minnesota,Chisago
27027,64222,Minnesota,Clay
27029,8818,Minnesota,Clearwater
27031,5463,Minnesota,Cook
27033,11196,Minnesota,Cottonwood
27035,65055,Minnesota,Crow Wing
27037,429021,Minnesota,Dakota
27039,20934,Minnesota,Dodge
27041,38141,Minnesota,Douglas
27043,13653,Minnesota,Faribault
27045,21067,Minnesota,Fillmore
27047,30281,Minnesota,Freeborn
27049,46340,Minnesota,Goodhue
27051,5972,Minnesota,Grant
27053,1265843,Minnesota,Hennepin
27055,18600,Minnesota,Houston
27057,21491,Minnesota,Hubbard
27059,40596,Minnesota,Isanti
27061,45130,Minnesota,Itasca
27063,9846,Minnesota,Jackson
27065,16337,Minnesota,Kanabec
27067,43199,Minnesota,Kandiyohi
27069,4298,Minnesota,Kittson
27071,12229,Minnesota,Koochiching
27073,6623,Minnesota,Lac qui Parle
27075,10641,Minnesota,Lake
27077,3740,Minnesota,Lake of the Woods
27079,28887,Minnesota,Le Sueur
27081,5639,Minnesota,Lincoln
27083,25474,Minnesota,Lyon
27085,35893,Minnesota,McLeod
27087,5527,Minnesota,Mahnomen
27089,9336,Minnesota,Marshall
27091,19683,Minnesota,Martin
27093,23222,Minnesota,Meeker
27095,26277,Minnesota,Mille Lacs
27097,33386,Minnesota,Morrison
27099,40062,Minnesota,Mower
27101,8194,Minnesota,Murray
27103,34274,Minnesota,Nicollet
27105,21629,Minnesota,Nobles
27107,6375,Minnesota,Norman
27109,158293,Minnesota,Olmsted
27111,58746,Minnesota,Otter Tail
27113,14119,Minnesota,Pennington
27115,29579,Minnesota,Pine
27117,9126,Minnesota,Pipestone
27119,31364,Minnesota,Polk
27121,11249,Minnesota,Pope
27123,550321,Minnesota,Ramsey
27125,4055,Minnesota,Red Lake
27127,15170,Minnesota,Redwood
27129,14548,Minnesota,Renville
27131,66972,Minnesota,Rice
27133,9315,Minnesota,Rock
27135,15165,Minnesota,Roseau
27137,199070,Minnesota,St. Louis
27139,149013,Minnesota,Scott
27141,97238,Minnesota,Sherburne
27143,14865,Minnesota,Sibley
27145,161075,Minnesota,Stearns
27147,36649,Minnesota,Steele
27149,9805,Minnesota,Stevens
27151,9266,Minnesota,Swift
27153,24664,Minnesota,Todd
27155,3259,Minnesota,Traverse
27157,21627,Minnesota,Wabasha
27159,13682,Minnesota,Wadena
27161,18612,Minnesota,Waseca
27163,262440,Minnesota,Washington
27165,10897,Minnesota,Watonwan
27167,6207,Minnesota,Wilkin
27169,50484,Minnesota,Winona
27171,138377,Minnesota,Wright
27173,9709,Minnesota,Yellow Medicine
27999,,Minnesota,Unknown
28001,30693,Mississippi,Adams
28003,36953,Mississippi,Alcorn
28005,12297,Mississippi,Amite
28007,18174,Mississippi,Attala
28009,8259,Mississippi,Benton
28011,30628,Mississippi,Bolivar
28013,14361,Mississippi,Calhoun
28015,9947,Mississippi,Carroll
28017,17103,Mississippi,Chickasaw
28019,8210,Mississippi,Choctaw
28021,8988,Mississippi,Claiborne
28023,15541,Mississippi,Clarke
28025,19316,Mississippi,Clay
28027,22124,Mississippi,Coahoma
28029,28065,Mississippi,Copiah
28031,18636,Mississippi,Covington
28033,184945,Mississippi,DeSoto
28035,74897,Mississippi,Forrest
28037,7713,Mississippi,Franklin
28039,24500,Mississippi,George
28041,13586,Mississippi,Greene
28043,20758,Mississippi,Grenada
28045,47632,Mississippi,Hancock
28047,208080,Mississippi,Harrison
28049,231840,Mississippi,Hinds
28051,17010,Mississippi,Holmes
28053,8064,Mississippi,Humphreys
28055,1327,Mississippi,Issaquena
28057,23390,Mississippi,Itawamba
28059,143617,Mississippi,Jackson
28061,16383,Mississippi,Jasper
28063,6990,Mississippi,Jefferson
28065,11128,Mississippi,Jefferson Davis
28067,68098,Mississippi,Jones
28069,9742,Mississippi,Kemper
28071,54019,Mississippi,Lafayette
28073,63343,Mississippi,Lamar
28075,74125,Mississippi,Lauderdale
28077,12586,Mississippi,Lawrence
28079,22786,Mississippi,Leake
28081,85436,Mississippi,Lee
28083,28183,Mississippi,Leflore
28085,34153,Mississippi,Lincoln
28087,58595,Mississippi,Lowndes
28089,106272,Mississippi,Madison
28091,24573,Mississippi,Marion
28093,35294,Mississippi,Marshall
28095,35252,Mississippi,Monroe
28097,9775,Mississippi,Montgomery
28099,29118,Mississippi,Neshoba
28101,21018,Mississippi,Newton
28103,10417,Mississippi,Noxubee
28105,49587,Mississippi,Oktibbeha
28107,34192,Mississippi,Panola
28109,55535,Mississippi,Pearl River
28111,11973,Mississippi,Perry
28113,39288,Mississippi,Pike
28115,32174,Mississippi,Pontotoc
28117,25126,Mississippi,Prentiss
28119,6792,Mississippi,Quitman
28121,155271,Mississippi,Rankin
28123,28124,Mississippi,Scott
28125,4321,Mississippi,Sharkey
28127,26658,Mississippi,Simpson
28129,15916,Mississippi,Smith
28131,18336,Mississippi,Stone
28133,25110,Mississippi,Sunflower
28135,13809,Mississippi,Tallahatchie
28137,28321,Mississippi,Tate
28139,22015,Mississippi,Tippah
28141,19383,Mississippi,Tishomingo
28143,9632,Mississippi,Tunica
28145,28815,Mississippi,Union
28147,14286,Mississippi,Walthall
28149,45381,Mississippi,Warren
28151,43909,Mississippi,Washington
28153,20183,Mississippi,Wayne
28155,9689,Mississippi,Webster
28157,8630,Mississippi,Wilkinson
28159,17955,Mississippi,Winston
28161,12108,Mississippi,Yalobusha
28163,29690,Mississippi,Yazoo
28999,,Mississippi,Unknown
29001,25343,Missouri,Adair
29003,17712,Missouri,Andrew
29005,5143,Missouri,Atchison
29007,25388,Missouri,Audrain
29009,35789,Missouri,Barry
29011,11754,Missouri,Barton
29013,16172,Missouri,Bates
29015,19443,Missouri,Benton
29017,12133,Missouri,Bollinger
29019,180463,Missouri,Boone
29021,87364,Missouri,Buchanan
29023,42478,Missouri,Butler
29025,9020,Missouri,Caldwell
29027,44743,Missouri,Callaway
29029,46305,Missouri,Camden
29031,78871,Missouri,Cape Girardeau
29033,8679,Missouri,Carroll
29035,5982,Missouri,Carter
29037,105580,Missouri,Cass³
29039,14349,Missouri,Cedar
29041,7426,Missouri,Chariton
29043,88595,Missouri,Christian
29045,6797,Missouri,Clark
29047,121716,Missouri,Clay³
29049,20387,Missouri,Clinton
29051,76745,Missouri,Cole
29053,17709,Missouri,Cooper
29055,23920,Missouri,Crawford
29057,7561,Missouri,Dade
29059,16878,Missouri,Dallas
29061,8278,Missouri,Daviess
29063,12547,Missouri,DeKalb
29065,15573,Missouri,Dent
29067,13185,Missouri,Douglas
29069,29131,Missouri,Dunklin
29071,103967,Missouri,Franklin
29073,14706,Missouri,Gasconade
29075,6571,Missouri,Gentry
29077,293086,Missouri,Greene
29079,9850,Missouri,Grundy
29081,8352,Missouri,Harrison
29083,21824,Missouri,Henry
29085,9544,Missouri,Hickory
29087,4403,Missouri,Holt
29089,10001,Missouri,Howard
29091,40117,Missouri,Howell
29093,10125,Missouri,Iron
29095,386175,Missouri,Jackson³
29097,73070,Missouri,Jasper⁵
29099,225081,Missouri,Jefferson
29101,54062,Missouri,Johnson
29103,3959,Missouri,Knox
29105,35723,Missouri,Laclede
29107,32708,Missouri,Lafayette
29109,38355,Missouri,Lawrence
29111,9776,Missouri,Lewis
29113,59013,Missouri,Lincoln
29115,11920,Missouri,Linn
29117,15227,Missouri,Livingston
29119,22837,Missouri,McDonald
29121,15117,Missouri,Macon
29123,12088,Missouri,Madison
29125,8697,Missouri,Maries
29127,28530,Missouri,Marion
29129,3617,Missouri,Mercer
29131,25619,Missouri,Miller
29133,13180,Missouri,Mississippi
29135,16132,Missouri,Moniteau
29137,8644,Missouri,Monroe
29139,11551,Missouri,Montgomery
29141,20627,Missouri,Morgan
29143,17076,Missouri,New Madrid
29145,55697,Missouri,Newton⁵
29147,22092,Missouri,Nodaway
29149,10529,Missouri,Oregon
29151,13615,Missouri,Osage
29153,9174,Missouri,Ozark
29155,15805,Missouri,Pemiscot
29157,19136,Missouri,Perry
29159,42339,Missouri,Pettis
29161,44573,Missouri,Phelps
29163,18302,Missouri,Pike
29165,54359,Missouri,Platte³
29167,32149,Missouri,Polk
29169,52607,Missouri,Pulaski
29171,4696,Missouri,Putnam
29173,10309,Missouri,Ralls
29175,24748,Missouri,Randolph
29177,23018,Missouri,Ray
29179,6270,Missouri,Reynolds
29181,13288,Missouri,Ripley
29183,402022,Missouri,St. Charles
29185,9397,Missouri,St. Clair
29186,17894,Missouri,Ste. Genevieve
29187,67215,Missouri,St. Francois
29189,994205,Missouri,St. Louis
29195,22761,Missouri,Saline
29197,4660,Missouri,Schuyler
29199,4902,Missouri,Scotland
29201,38280,Missouri,Scott
29203,8166,Missouri,Shannon
29205,5930,Missouri,Shelby
29207,29025,Missouri,Stoddard
29209,31952,Missouri,Stone
29211,6089,Missouri,Sullivan
29213,55928,Missouri,Taney
29215,25398,Missouri,Texas
29217,20563,Missouri,Vernon
29219,35649,Missouri,Warren
29221,24730,Missouri,Washington
29223,12873,Missouri,Wayne
29225,39592,Missouri,Webster
29227,2013,Missouri,Worth
29229,18289,Missouri,Wright
29510,300576,Missouri,St. Louis city
29997,50925,Missouri,Joplin⁴
29998,495327,Missouri,Kansas City²
29999,,Missouri,Unknown
30001,9453,Montana,Beaverhead
30003,13319,Montana,Big Horn
30005,6681,Montana,Blaine
30007,6237,Montana,Broadwater
30009,10725,Montana,Carbon
30011,1252,Montana,Carter
30013,81366,Montana,Cascade
30015,5635,Montana,Chouteau
30017,11402,Montana,Custer
30019,1690,Montana,Daniels
30021,8613,Montana,Dawson
30023,9140,Montana,Deer Lodge
30025,2846,Montana,Fallon
30027,11050,Montana,Fergus
30029,103806,Montana,Flathead
30031,114434,Montana,Gallatin
30033,1258,Montana,Garfield
30035,13753,Montana,Glacier
30037,821,Montana,Golden Valley
30039,3379,Montana,Granite
30041,16484,Montana,Hill
30043,12221,Montana,Jefferson
30045,2007,Montana,Judith Basin
30047,30458,Montana,Lake
30049,69432,Montana,Lewis and Clark
30051,2337,Montana,Liberty
30053,19980,Montana,Lincoln
30055,1664,Montana,McCone
30057,8600,Montana,Madison
30059,1862,Montana,Meagher
30061,4397,Montana,Mineral
30063,119600,Montana,Missoula
30065,4633,Montana,Musselshell
30067,16606,Montana,Park
30069,487,Montana,Petroleum
30071,3954,Montana,Phillips
30073,5911,Montana,Pondera
30075,1682,Montana,Powder River
30077,6890,Montana,Powell
30079,1077,Montana,Prairie
30081,43806,Montana,Ravalli
30083,10803,Montana,Richland
30085,11004,Montana,Roosevelt
30087,8937,Montana,Rosebud
30089,12113,Montana,Sanders
30091,3309,Montana,Sheridan
30093,34915,Montana,Silver Bow
30095,9642,Montana,Stillwater
30097,3737,Montana,Sweet Grass
30099,6147,Montana,Teton
30101,4736,Montana,Toole
30103,696,Montana,Treasure
30105,7396,Montana,Valley
30107,2126,Montana,Wheatland
30109,969,Montana,Wibaux
30111,161300,Montana,Yellowstone
30999,,Montana,Unknown
31001,31363,Nebraska,Adams
31003,6298,Nebraska,Antelope
31005,463,Nebraska,Arthur
31007,745,Nebraska,Banner
31009,465,Nebraska,Blaine
31011,5192,Nebraska,Boone
31013,10783,Nebraska,Box Butte
31015,1919,Nebraska,Boyd
31017,2955,Nebraska,Brown
31019,49659,Nebraska,Buffalo
31021,6459,Nebraska,Burt
31023,8016,Nebraska,Butler
31025,26248,Nebraska,Cass
31027,8402,Nebraska,Cedar
31029,3924,Nebraska,Chase
31031,5689,Nebraska,Cherry
31033,8910,Nebraska,Cheyenne
31035,6203,Nebraska,Clay
31037,10709,Nebraska,Colfax
31039,8846,Nebraska,Cuming
31041,10777,Nebraska,Custer
31043,20026,Nebraska,Dakota
31045,8589,Nebraska,Dawes
31047,23595,Nebraska,Dawson
31049,1794,Nebraska,Deuel
31051,5636,Nebraska,Dixon
31053,36565,Nebraska,Dodge
31055,571327,Nebraska,Douglas
31057,1693,Nebraska,Dundy
31059,5462,Nebraska,Fillmore
31061,2979,Nebraska,Franklin
31063,2627,Nebraska,Frontier
31065,4676,Nebraska,Furnas
31067,21513,Nebraska,Gage
31069,1837,Nebraska,Garden
31071,1969,Nebraska,Garfield
31073,1990,Nebraska,Gosper
31075,623,Nebraska,Grant
31077,2356,Nebraska,Greeley
31079,61353,Nebraska,Hall
31081,9324,Nebraska,Hamilton
31083,3380,Nebraska,Harlan
31085,922,Nebraska,Hayes
31087,2762,Nebraska,Hitchcock
31089,10067,Nebraska,Holt
31091,682,Nebraska,Hooker
31093,6445,Nebraska,Howard
31095,7046,Nebraska,Jefferson
31097,5071,Nebraska,Johnson
31099,6495,Nebraska,Kearney
31101,8034,Nebraska,Keith
31103,806,Nebraska,Keya Paha
31105,3632,Nebraska,Kimball
31107,8332,Nebraska,Knox
31109,319090,Nebraska,Lancaster
31111,34914,Nebraska,Lincoln
31113,748,Nebraska,Logan
31115,664,Nebraska,Loup
31117,494,Nebraska,McPherson
31119,35099,Nebraska,Madison
31121,7755,Nebraska,Merrick
31123,4642,Nebraska,Morrill
31125,3519,Nebraska,Nance
31127,6972,Nebraska,Nemaha
31129,4148,Nebraska,Nuckolls
31131,16012,Nebraska,Otoe
31133,2613,Nebraska,Pawnee
31135,2891,Nebraska,Perkins
31137,9034,Nebraska,Phelps
31139,7148,Nebraska,Pierce
31141,33470,Nebraska,Platte
31143,5213,Nebraska,Polk
31145,10724,Nebraska,Red Willow
31147,7865,Nebraska,Richardson
31149,1357,Nebraska,Rock
31151,14224,Nebraska,Saline
31153,187196,Nebraska,Sarpy
31155,21578,Nebraska,Saunders
31157,35618,Nebraska,Scotts Bluff
31159,17284,Nebraska,Seward
31161,5246,Nebraska,Sheridan
31163,3001,Nebraska,Sherman
31165,1166,Nebraska,Sioux
31167,5920,Nebraska,Stanton
31169,5003,Nebraska,Thayer
31171,722,Nebraska,Thomas
31173,7224,Nebraska,Thurston
31175,4158,Nebraska,Valley
31177,20729,Nebraska,Washington
31179,9385,Nebraska,Wayne
31181,3487,Nebraska,Webster
31183,783,Nebraska,Wheeler
31185,13679,Nebraska,York
31999,,Nebraska,Unknown
32001,24909,Nevada,Churchill
32003,2266715,Nevada,Clark
32005,48905,Nevada,Douglas
32007,52778,Nevada,Elko
32009,873,Nevada,Esmeralda
32011,2029,Nevada,Eureka
32013,16831,Nevada,Humboldt
32015,5532,Nevada,Lander
32017,5183,Nevada,Lincoln
32019,57510,Nevada,Lyon
32021,4505,Nevada,Mineral
32023,46523,Nevada,Nye
32027,6725,Nevada,Pershing
32029,4123,Nevada,Storey
32031,471519,Nevada,Washoe
32033,9580,Nevada,White Pine
32510,55916,Nevada,Carson City
32999,,Nevada,Unknown
33001,61303,New Hampshire,Belknap
33003,48910,New Hampshire,Carroll
33005,76085,New Hampshire,Cheshire
33007,31563,New Hampshire,Coos
33009,89886,New Hampshire,Grafton
33011,417025,New Hampshire,Hillsborough
33013,151391,New Hampshire,Merrimack
33015,309769,New Hampshire,Rockingham
33017,130633,New Hampshire,Strafford
33019,43146,New Hampshire,Sullivan
33999,,New Hampshire,Unknown
34001,263670,New Jersey,Atlantic
34003,932202,New Jersey,Bergen
34005,445349,New Jersey,Burlington
34007,506471,New Jersey,Camden
34009,92039,New Jersey,Cape May
34011,149527,New Jersey,Cumberland
34013,798975,New Jersey,Essex
34015,291636,New Jersey,Gloucester
34017,672391,New Jersey,Hudson
34019,124371,New Jersey,Hunterdon
34021,367430,New Jersey,Mercer
34023,825062,New Jersey,Middlesex
34025,618795,New Jersey,Monmouth
34027,491845,New Jersey,Morris
34029,607186,New Jersey,Ocean
34031,501826,New Jersey,Passaic
34033,62385,New Jersey,Salem
34035,328934,New Jersey,Somerset
34037,140488,New Jersey,Sussex
34039,556341,New Jersey,Union
34041,105267,New Jersey,Warren
34999,,New Jersey,Unknown
35001,679121,New Mexico,Bernalillo
35003,3527,New Mexico,Catron
35005,64615,New Mexico,Chaves
35006,26675,New Mexico,Cibola
35007,11941,New Mexico,Colfax
35009,48954,New Mexico,Curry
35011,1748,New Mexico,De Baca
35013,218195,New Mexico,Doña Ana
35015,58460,New Mexico,Eddy
35017,26998,New Mexico,Grant
35019,4300,New Mexico,Guadalupe
35021,625,New Mexico,Harding
35023,4198,New Mexico,Hidalgo
35025,71070,New Mexico,Lea
35027,19572,New Mexico,Lincoln
35028,19369,New Mexico,Los Alamos
35029,23709,New Mexico,Luna
35031,71367,New Mexico,McKinley
35033,4521,New Mexico,Mora
35035,67490,New Mexico,Otero
35037,8253,New Mexico,Quay
35039,38921,New Mexico,Rio Arriba
35041,18500,New Mexico,Roosevelt
35043,146748,New Mexico,Sandoval
35045,123958,New Mexico,San Juan
35047,27277,New Mexico,San Miguel
35049,150358,New Mexico,Santa Fe
35051,10791,New Mexico,Sierra
35053,16637,New Mexico,Socorro
35055,32723,New Mexico,Taos
35057,15461,New Mexico,Torrance
35059,4059,New Mexico,Union
35061,76688,New Mexico,Valencia
35999,,New Mexico,Unknown
36001,305506,New York,Albany
36003,46091,New York,Allegany
36007,190488,New York,Broome
36009,76117,New York,Cattaraugus
36011,76576,New York,Cayuga
36013,126903,New York,Chautauqua
36015,83456,New York,Chemung
36017,47207,New York,Chenango
36019,80485,New York,Clinton
36021,59461,New York,Columbia
36023,47581,New York,Cortland
36025,44135,New York,Delaware
36027,294218,New York,Dutchess
36029,918702,New York,Erie
36031,36885,New York,Essex
36033,50022,New York,Franklin
36035,53383,New York,Fulton
36037,57280,New York,Genesee
36039,47188,New York,Greene
36041,4416,New York,Hamilton
36043,61319,New York,Herkimer
36045,109834,New York,Jefferson
36049,26296,New York,Lewis
36051,62914,New York,Livingston
36053,70941,New York,Madison
36055,741770,New York,Monroe
36057,49221,New York,Montgomery
36059,1356924,New York,Nassau
36063,209281,New York,Niagara
36065,228671,New York,Oneida
36067,460528,New York,Onondaga
36069,109777,New York,Ontario
36071,384940,New York,Orange
36073,40352,New York,Orleans
36075,117124,New York,Oswego
36077,59493,New York,Otsego
36079,98320,New York,Putnam
36083,158714,New York,Rensselaer
36087,325789,New York,Rockland
36089,107740,New York,St. Lawrence
36091,229863,New York,Saratoga
36093,155299,New York,Schenectady
36095,30999,New York,Schoharie
36097,17807,New York,Schuyler
36099,34016,New York,Seneca
36101,95379,New York,Steuben
36103,1476601,New York,Suffolk
36105,75432,New York,Sullivan
36107,48203,New York,Tioga
36109,102180,New York,Tompkins
36111,177573,New York,Ulster
36113,63944,New York,Warren
36115,61204,New York,Washington
36117,89918,New York,Wayne
36119,967506,New York,Westchester
36121,39859,New York,Wyoming
36123,24913,New York,Yates
36998,8336817,New York,New York City¹
36999,,New York,Unknown
37001,169509,North Carolina,Alamance
37003,37497,North Carolina,Alexander
37005,11137,North Carolina,Alleghany
37007,24446,North Carolina,Anson
37009,27203,North Carolina,Ashe
37011,17557,North Carolina,Avery
37013,46994,North Carolina,Beaufort
37015,18947,North Carolina,Bertie
37017,32722,North Carolina,Bladen
37019,142820,North Carolina,Brunswick
37021,261191,North Carolina,Buncombe
37023,90485,North Carolina,Burke
37025,216453,North Carolina,Cabarrus
37027,82178,North Carolina,Caldwell
37029,10867,North Carolina,Camden
37031,69473,North Carolina,Carteret
37033,22604,North Carolina,Caswell
37035,159551,North Carolina,Catawba
37037,74470,North Carolina,Chatham
37039,28612,North Carolina,Cherokee
37041,13943,North Carolina,Chowan
37043,11231,North Carolina,Clay
37045,97947,North Carolina,Cleveland
37047,55508,North Carolina,Columbus
37049,102139,North Carolina,Craven
37051,335509,North Carolina,Cumberland
37053,27763,North Carolina,Currituck
37055,37009,North Carolina,Dare
37057,167609,North Carolina,Davidson
37059,42846,North Carolina,Davie
37061,58741,North Carolina,Duplin
37063,321488,North Carolina,Durham
37065,51472,North Carolina,Edgecombe
37067,382295,North Carolina,Forsyth
37069,69685,North Carolina,Franklin
37071,224529,North Carolina,Gaston
37073,11562,North Carolina,Gates
37075,8441,North Carolina,Graham
37077,60443,North Carolina,Granville
37079,21069,North Carolina,Greene
37081,537174,North Carolina,Guilford
37083,50010,North Carolina,Halifax
37085,135976,North Carolina,Harnett
37087,62317,North Carolina,Haywood
37089,117417,North Carolina,Henderson
37091,23677,North Carolina,Hertford
37093,55234,North Carolina,Hoke
37095,4937,North Carolina,Hyde
37097,181806,North Carolina,Iredell
37099,43938,North Carolina,Jackson
37101,209339,North Carolina,Johnston
37103,9419,North Carolina,Jones
37105,61779,North Carolina,Lee
37107,55949,North Carolina,Lenoir
37109,86111,North Carolina,Lincoln
37111,45756,North Carolina,McDowell
37113,35858,North Carolina,Macon
37115,21755,North Carolina,Madison
37117,22440,North Carolina,Martin
37119,1110356,North Carolina,Mecklenburg
37121,14964,North Carolina,Mitchell
37123,27173,North Carolina,Montgomery
37125,100880,North Carolina,Moore
37127,94298,North Carolina,Nash
37129,234473,North Carolina,New Hanover
37131,19483,North Carolina,Northampton
37133,197938,North Carolina,Onslow
37135,148476,North Carolina,Orange
37137,12726,North Carolina,Pamlico
37139,39824,North Carolina,Pasquotank
37141,63060,North Carolina,Pender
37143,13463,North Carolina,Perquimans
37145,39490,North Carolina,Person
37147,180742,North Carolina,Pitt
37149,20724,North Carolina,Polk
37151,143667,North Carolina,Randolph
37153,44829,North Carolina,Richmond
37155,130625,North Carolina,Robeson
37157,91010,North Carolina,Rockingham
37159,142088,North Carolina,Rowan
37161,67029,North Carolina,Rutherford
37163,63531,North Carolina,Sampson
37165,34823,North Carolina,Scotland
37167,62806,North Carolina,Stanly
37169,45591,North Carolina,Stokes
37171,71783,North Carolina,Surry
37173,14271,North Carolina,Swain
37175,34385,North Carolina,Transylvania
37177,4016,North Carolina,Tyrrell
37179,239859,North Carolina,Union
37181,44535,North Carolina,Vance
37183,1111761,North Carolina,Wake
37185,19731,North Carolina,Warren
37187,11580,North Carolina,Washington
37189,56177,North Carolina,Watauga
37191,123131,North Carolina,Wayne
37193,68412,North Carolina,Wilkes
37195,81801,North Carolina,Wilson
37197,37667,North Carolina,Yadkin
37199,18069,North Carolina,Yancey
37999,,North Carolina,Unknown
38001,2216,North Dakota,Adams
38003,10415,North Dakota,Barnes
38005,6832,North Dakota,Benson
38007,928,North Dakota,Billings
38009,6282,North Dakota,Bottineau
38011,3024,North Dakota,Bowman
38013,2115,North Dakota,Burke
38015,95626,North Dakota,Burleigh
38017,181923,North Dakota,Cass
38019,3762,North Dakota,Cavalier
38021,4872,North Dakota,Dickey
38023,2264,North Dakota,Divide
38025,4424,North Dakota,Dunn
38027,2287,North Dakota,Eddy
38029,3241,North Dakota,Emmons
38031,3210,North Dakota,Foster
38033,1761,North Dakota,Golden Valley
38035,69451,North Dakota,Grand Forks
38037,2274,North Dakota,Grant
38039,2231,North Dakota,Griggs
38041,2499,North Dakota,Hettinger
38043,2480,North Dakota,Kidder
38045,4046,North Dakota,LaMoure
38047,1850,North Dakota,Logan
38049,5745,North Dakota,McHenry
38051,2497,North Dakota,McIntosh
38053,15024,North Dakota,McKenzie
38055,9450,North Dakota,McLean
38057,8187,North Dakota,Mercer
38059,31364,North Dakota,Morton
38061,10545,North Dakota,Mountrail
38063,2879,North Dakota,Nelson
38065,1959,North Dakota,Oliver
38067,6801,North Dakota,Pembina
38069,3975,North Dakota,Pierce
38071,11519,North Dakota,Ramsey
38073,5218,North Dakota,Ransom
38075,2327,North Dakota,Renville
38077,16177,North Dakota,Richland
38079,14176,North Dakota,Rolette
38081,3898,North Dakota,Sargent
38083,1315,North Dakota,Sheridan
38085,4230,North Dakota,Sioux
38087,750,North Dakota,Slope
38089,31489,North Dakota,Stark
38091,1890,North Dakota,Steele
38093,20704,North Dakota,Stutsman
38095,2189,North Dakota,Towner
38097,8036,North Dakota,Traill
38099,10641,North Dakota,Walsh
38101,67641,North Dakota,Ward
38103,3834,North Dakota,Wells
38105,37589,North Dakota,Williams
38999,,North Dakota,Unknown
39001,27698,Ohio,Adams
39003,102351,Ohio,Allen
39005,53484,Ohio,Ashland
39007,97241,Ohio,Ashtabula
39009,65327,Ohio,Athens
39011,45656,Ohio,Auglaize
39013,67006,Ohio,Belmont
39015,43432,Ohio,Brown
39017,383134,Ohio,Butler
39019,26914,Ohio,Carroll
39021,38885,Ohio,Champaign
39023,134083,Ohio,Clark
39025,206428,Ohio,Clermont
39027,41968,Ohio,Clinton
39029,101883,Ohio,Columbiana
39031,36600,Ohio,Coshocton
39033,41494,Ohio,Crawford
39035,1235072,Ohio,Cuyahoga
39037,51113,Ohio,Darke
39039,38087,Ohio,Defiance
39041,209177,Ohio,Delaware
39043,74266,Ohio,Erie
39045,157574,Ohio,Fairfield
39047,28525,Ohio,Fayette
39049,1316756,Ohio,Franklin
39051,42126,Ohio,Fulton
39053,29898,Ohio,Gallia
39055,93649,Ohio,Geauga
39057,168937,Ohio,Greene
39059,38875,Ohio,Guernsey
39061,817473,Ohio,Hamilton
39063,75783,Ohio,Hancock
39065,31365,Ohio,Hardin
39067,15040,Ohio,Harrison
39069,27006,Ohio,Henry
39071,43161,Ohio,Highland
39073,28264,Ohio,Hocking
39075,43960,Ohio,Holmes
39077,58266,Ohio,Huron
39079,32413,Ohio,Jackson
39081,65325,Ohio,Jefferson
39083,62322,Ohio,Knox
39085,230149,Ohio,Lake
39087,59463,Ohio,Lawrence
39089,176862,Ohio,Licking
39091,45672,Ohio,Logan
39093,309833,Ohio,Lorain
39095,428348,Ohio,Lucas
39097,44731,Ohio,Madison
39099,228683,Ohio,Mahoning
39101,65093,Ohio,Marion
39103,179746,Ohio,Medina
39105,22907,Ohio,Meigs
39107,41172,Ohio,Mercer
39109,106987,Ohio,Miami
39111,13654,Ohio,Monroe
39113,531687,Ohio,Montgomery
39115,14508,Ohio,Morgan
39117,35328,Ohio,Morrow
39119,86215,Ohio,Muskingum
39121,14424,Ohio,Noble
39123,40525,Ohio,Ottawa
39125,18672,Ohio,Paulding
39127,36134,Ohio,Perry
39129,58457,Ohio,Pickaway
39131,27772,Ohio,Pike
39133,162466,Ohio,Portage
39135,40882,Ohio,Preble
39137,33861,Ohio,Putnam
39139,121154,Ohio,Richland
39141,76666,Ohio,Ross
39143,58518,Ohio,Sandusky
39145,75314,Ohio,Scioto
39147,55178,Ohio,Seneca
39149,48590,Ohio,Shelby
39151,370606,Ohio,Stark
39153,541013,Ohio,Summit
39155,197974,Ohio,Trumbull
39157,91987,Ohio,Tuscarawas
39159,58988,Ohio,Union
39161,28275,Ohio,Van Wert
39163,13085,Ohio,Vinton
39165,234602,Ohio,Warren
39167,59911,Ohio,Washington
39169,115710,Ohio,Wayne
39171,36692,Ohio,Williams
39173,130817,Ohio,Wood
39175,21772,Ohio,Wyandot
39999,,Ohio,Unknown
40001,22194,Oklahoma,Adair
40003,5702,Oklahoma,Alfalfa
40005,13758,Oklahoma,Atoka
40007,5311,Oklahoma,Beaver
40009,21859,Oklahoma,Beckham
40011,9429,Oklahoma,Blaine
40013,47995,Oklahoma,Bryan
40015,28762,Oklahoma,Caddo
40017,148306,Oklahoma,Canadian
40019,48111,Oklahoma,Carter
40021,48657,Oklahoma,Cherokee
40023,14672,Oklahoma,Choctaw
40025,2137,Oklahoma,Cimarron
40027,284014,Oklahoma,Cleveland
40029,5495,Oklahoma,Coal
40031,120749,Oklahoma,Comanche
40033,5666,Oklahoma,Cotton
40035,14142,Oklahoma,Craig
40037,71522,Oklahoma,Creek
40039,29003,Oklahoma,Custer
40041,43009,Oklahoma,Delaware
40043,4891,Oklahoma,Dewey
40045,3859,Oklahoma,Ellis
40047,61056,Oklahoma,Garfield
40049,27711,Oklahoma,Garvin
40051,55834,Oklahoma,Grady
40053,4333,Oklahoma,Grant
40055,5712,Oklahoma,Greer
40057,2653,Oklahoma,Harmon
40059,3688,Oklahoma,Harper
40061,12627,Oklahoma,Haskell
40063,13279,Oklahoma,Hughes
40065,24530,Oklahoma,Jackson
40067,6002,Oklahoma,Jefferson
40069,11085,Oklahoma,Johnston
40071,43538,Oklahoma,Kay
40073,15765,Oklahoma,Kingfisher
40075,8708,Oklahoma,Kiowa
40077,10073,Oklahoma,Latimer
40079,49853,Oklahoma,Le Flore
40081,34877,Oklahoma,Lincoln
40083,48011,Oklahoma,Logan
40085,10253,Oklahoma,Love
40087,40474,Oklahoma,McClain
40089,32832,Oklahoma,McCurtain
40091,19596,Oklahoma,McIntosh
40093,7629,Oklahoma,Major
40095,16931,Oklahoma,Marshall
40097,41100,Oklahoma,Mayes
40099,14073,Oklahoma,Murray
40101,67997,Oklahoma,Muskogee
40103,11131,Oklahoma,Noble
40105,10076,Oklahoma,Nowata
40107,11993,Oklahoma,Okfuskee
40109,797434,Oklahoma,Oklahoma
40111,38465,Oklahoma,Okmulgee
40113,46963,Oklahoma,Osage
40115,31127,Oklahoma,Ottawa
40117,16376,Oklahoma,Pawnee
40119,81784,Oklahoma,Payne
40121,43654,Oklahoma,Pittsburg
40123,38284,Oklahoma,Pontotoc
40125,72592,Oklahoma,Pottawatomie
40127,11096,Oklahoma,Pushmataha
40129,3583,Oklahoma,Roger Mills
40131,92459,Oklahoma,Rogers
40133,24258,Oklahoma,Seminole
40135,41569,Oklahoma,Sequoyah
40137,43143,Oklahoma,Stephens
40139,19983,Oklahoma,Texas
40141,7250,Oklahoma,Tillman
40143,651552,Oklahoma,Tulsa
40145,81289,Oklahoma,Wagoner
40147,51527,Oklahoma,Washington
40149,10916,Oklahoma,Washita
40151,8793,Oklahoma,Woods
40153,20211,Oklahoma,Woodward
40999,,Oklahoma,Unknown
41001,16124,Oregon,Baker
41003,93053,Oregon,Benton
41005,418187,Oregon,Clackamas
41007,40224,Oregon,Clatsop
41009,52354,Oregon,Columbia
41011,64487,Oregon,Coos
41013,24404,Oregon,Crook
41015,22925,Oregon,Curry
41017,197692,Oregon,Deschutes
41019,110980,Oregon,Douglas
41021,1912,Oregon,Gilliam
41023,7199,Oregon,Grant
41025,7393,Oregon,Harney
41027,23382,Oregon,Hood River
41029,220944,Oregon,Jackson
41031,24658,Oregon,Jefferson
41033,87487,Oregon,Josephine
41035,68238,Oregon,Klamath
41037,7869,Oregon,Lake
41039,382067,Oregon,Lane
41041,49962,Oregon,Lincoln
41043,129749,Oregon,Linn
41045,30571,Oregon,Malheur
41047,347818,Oregon,Marion
41049,11603,Oregon,Morrow
41051,812855,Oregon,Multnomah
41053,86085,Oregon,Polk
41055,1780,Oregon,Sherman
41057,27036,Oregon,Tillamook
41059,77950,Oregon,Umatilla
41061,26835,Oregon,Union
41063,7208,Oregon,Wallowa
41065,26682,Oregon,Wasco
41067,601592,Oregon,Washington
41069,1332,Oregon,Wheeler
41071,107100,Oregon,Yamhill
41999,,Oregon,Unknown
42001,103009,Pennsylvania,Adams
42003,1216045,Pennsylvania,Allegheny
42005,64735,Pennsylvania,Armstrong
42007,163929,Pennsylvania,Beaver
42009,47888,Pennsylvania,Bedford
42011,421164,Pennsylvania,Berks
42013,121829,Pennsylvania,Blair
42015,60323,Pennsylvania,Bradford
42017,628270,Pennsylvania,Bucks
42019,187853,Pennsylvania,Butler
42021,130192,Pennsylvania,Cambria
42023,4447,Pennsylvania,Cameron
42025,64182,Pennsylvania,Carbon
42027,162385,Pennsylvania,Centre
42029,524989,Pennsylvania,Chester
42031,38438,Pennsylvania,Clarion
42033,79255,Pennsylvania,Clearfield
42035,38632,Pennsylvania,Clinton
42037,64964,Pennsylvania,Columbia
42039,84629,Pennsylvania,Crawford
42041,253370,Pennsylvania,Cumberland
42043,278299,Pennsylvania,Dauphin
42045,566747,Pennsylvania,Delaware
42047,29910,Pennsylvania,Elk
42049,269728,Pennsylvania,Erie
42051,129274,Pennsylvania,Fayette
42053,7247,Pennsylvania,Forest
42055,155027,Pennsylvania,Franklin
42057,14530,Pennsylvania,Fulton
42059,36233,Pennsylvania,Greene
42061,45144,Pennsylvania,Huntingdon
42063,84073,Pennsylvania,Indiana
42065,43425,Pennsylvania,Jefferson
42067,24763,Pennsylvania,Juniata
42069,209674,Pennsylvania,Lackawanna
42071,545724,Pennsylvania,Lancaster
42073,85512,Pennsylvania,Lawrence
42075,141793,Pennsylvania,Lebanon
42077,369318,Pennsylvania,Lehigh
42079,317417,Pennsylvania,Luzerne
42081,113299,Pennsylvania,Lycoming
42083,40625,Pennsylvania,McKean
42085,109424,Pennsylvania,Mercer
42087,46138,Pennsylvania,Mifflin
42089,170271,Pennsylvania,Monroe
42091,830915,Pennsylvania,Montgomery
42093,18230,Pennsylvania,Montour
42095,305285,Pennsylvania,Northampton
42097,90843,Pennsylvania,Northumberland
42099,46272,Pennsylvania,Perry
42101,1584064,Pennsylvania,Philadelphia
42103,55809,Pennsylvania,Pike
42105,16526,Pennsylvania,Potter
42107,141359,Pennsylvania,Schuylkill
42109,40372,Pennsylvania,Snyder
42111,73447,Pennsylvania,Somerset
42113,6066,Pennsylvania,Sullivan
42115,40328,Pennsylvania,Susquehanna
42117,40591,Pennsylvania,Tioga
42119,44923,Pennsylvania,Union
42121,50668,Pennsylvania,Venango
42123,39191,Pennsylvania,Warren
42125,206865,Pennsylvania,Washington
42127,51361,Pennsylvania,Wayne
42129,348899,Pennsylvania,Westmoreland
42131,26794,Pennsylvania,Wyoming
42133,449058,Pennsylvania,York
42999,,Pennsylvania,Unknown
44001,48479,Rhode Island,Bristol
44003,164292,Rhode Island,Kent
44005,82082,Rhode Island,Newport
44007,638931,Rhode Island,Providence
44009,125577,Rhode Island,Washington
44999,,Rhode Island,Unknown
45001,24527,South Carolina,Abbeville
45003,170872,South Carolina,Aiken
45005,8688,South Carolina,Allendale
45007,202558,South Carolina,Anderson
45009,14066,South Carolina,Bamberg
45011,20866,South Carolina,Barnwell
45013,192122,South Carolina,Beaufort
45015,227907,South Carolina,Berkeley
45017,14553,South Carolina,Calhoun
45019,411406,South Carolina,Charleston
45021,57300,South Carolina,Cherokee
45023,32244,South Carolina,Chester
45025,45650,South Carolina,Chesterfield
45027,33745,South Carolina,Clarendon
45029,37677,South Carolina,Colleton
45031,66618,South Carolina,Darlington
45033,30479,South Carolina,Dillon
45035,162809,South Carolina,Dorchester
45037,27260,South Carolina,Edgefield
45039,22347,South Carolina,Fairfield
45041,138293,South Carolina,Florence
45043,62680,South Carolina,Georgetown
45045,523542,South Carolina,Greenville
45047,70811,South Carolina,Greenwood
45049,19222,South Carolina,Hampton
45051,354081,South Carolina,Horry
45053,30073,South Carolina,Jasper
45055,66551,South Carolina,Kershaw
45057,98012,South Carolina,Lancaster
45059,67493,South Carolina,Laurens
45061,16828,South Carolina,Lee
45063,298750,South Carolina,Lexington
45065,9463,South Carolina,McCormick
45067,30657,South Carolina,Marion
45069,26118,South Carolina,Marlboro
45071,38440,South Carolina,Newberry
45073,79546,South Carolina,Oconee
45075,86175,South Carolina,Orangeburg
45077,126884,South Carolina,Pickens
45079,415759,South Carolina,Richland
45081,20473,South Carolina,Saluda
45083,319785,South Carolina,Spartanburg
45085,106721,South Carolina,Sumter
45087,27316,South Carolina,Union
45089,30368,South Carolina,Williamsburg
45091,280979,South Carolina,York
45999,,South Carolina,Unknown
46003,2751,South Dakota,Aurora
46005,18453,South Dakota,Beadle
46007,3365,South Dakota,Bennett
46009,6901,South Dakota,Bon Homme
46011,35077,South Dakota,Brookings
46013,38839,South Dakota,Brown
46015,5297,South Dakota,Brule
46017,1962,South Dakota,Buffalo
46019,10429,South Dakota,Butte
46021,1376,South Dakota,Campbell
46023,9292,South Dakota,Charles Mix
46025,3736,South Dakota,Clark
46027,14070,South Dakota,Clay
46029,28009,South Dakota,Codington
46031,4086,South Dakota,Corson
46033,8972,South Dakota,Custer
46035,19775,South Dakota,Davison
46037,5424,South Dakota,Day
46039,4351,South Dakota,Deuel
46041,5892,South Dakota,Dewey
46043,2921,South Dakota,Douglas
46045,3829,South Dakota,Edmunds
46047,6713,South Dakota,Fall River
46049,2299,South Dakota,Faulk
46051,7052,South Dakota,Grant
46053,4185,South Dakota,Gregory
46055,1899,South Dakota,Haakon
46057,6164,South Dakota,Hamlin
46059,3191,South Dakota,Hand
46061,3453,South Dakota,Hanson
46063,1298,South Dakota,Harding
46065,17526,South Dakota,Hughes
46067,7291,South Dakota,Hutchinson
46069,1301,South Dakota,Hyde
46071,3344,South Dakota,Jackson
46073,2013,South Dakota,Jerauld
46075,903,South Dakota,Jones
46077,4939,South Dakota,Kingsbury
46079,12797,South Dakota,Lake
46081,25844,South Dakota,Lawrence
46083,61128,South Dakota,Lincoln
46085,3781,South Dakota,Lyman
46087,5586,South Dakota,McCook
46089,2379,South Dakota,McPherson
46091,4935,South Dakota,Marshall
46093,28332,South Dakota,Meade
46095,2061,South Dakota,Mellette
46097,2216,South Dakota,Miner
46099,193134,South Dakota,Minnehaha
46101,6576,South Dakota,Moody
46102,14177,South Dakota,Oglala Lakota
46103,113775,South Dakota,Pennington
46105,2865,South Dakota,Perkins
46107,2153,South Dakota,Potter
46109,10394,South Dakota,Roberts
46111,2344,South Dakota,Sanborn
46115,6376,South Dakota,Spink
46117,3098,South Dakota,Stanley
46119,1391,South Dakota,Sully
46121,10177,South Dakota,Todd
46123,5441,South Dakota,Tripp
46125,8384,South Dakota,Turner
46127,15932,South Dakota,Union
46129,5435,South Dakota,Walworth
46135,22814,South Dakota,Yankton
46137,2756,South Dakota,Ziebach
46999,,South Dakota,Unknown
47001,76978,Tennessee,Anderson
47003,49713,Tennessee,Bedford
47005,16160,Tennessee,Benton
47007,15064,Tennessee,Bledsoe
47009,133088,Tennessee,Blount
47011,108110,Tennessee,Bradley
47013,39842,Tennessee,Campbell
47015,14678,Tennessee,Cannon
47017,27767,Tennessee,Carroll
47019,56391,Tennessee,Carter
47021,40667,Tennessee,Cheatham
47023,17297,Tennessee,Chester
47025,31959,Tennessee,Claiborne
47027,7615,Tennessee,Clay
47029,36004,Tennessee,Cocke
47031,56520,Tennessee,Coffee
47033,14230,Tennessee,Crockett
47035,60520,Tennessee,Cumberland
47037,694144,Tennessee,Davidson
47039,11663,Tennessee,Decatur
47041,20490,Tennessee,DeKalb
47043,53948,Tennessee,Dickson
47045,37159,Tennessee,Dyer
47047,41133,Tennessee,Fayette
47049,18523,Tennessee,Fentress
47051,42208,Tennessee,Franklin
47053,49133,Tennessee,Gibson
47055,29464,Tennessee,Giles
47057,23320,Tennessee,Grainger
47059,69069,Tennessee,Greene
47061,13427,Tennessee,Grundy
47063,64934,Tennessee,Hamblen
47065,367804,Tennessee,Hamilton
47067,6620,Tennessee,Hancock
47069,25050,Tennessee,Hardeman
47071,25652,Tennessee,Hardin
47073,56786,Tennessee,Hawkins
47075,17304,Tennessee,Haywood
47077,28117,Tennessee,Henderson
47079,32345,Tennessee,Henry
47081,25178,Tennessee,Hickman
47083,8201,Tennessee,Houston
47085,18582,Tennessee,Humphreys
47087,11786,Tennessee,Jackson
47089,54495,Tennessee,Jefferson
47091,17788,Tennessee,Johnson
47093,470313,Tennessee,Knox
47095,7016,Tennessee,Lake
47097,25633,Tennessee,Lauderdale
47099,44142,Tennessee,Lawrence
47101,12268,Tennessee,Lewis
47103,34366,Tennessee,Lincoln
47105,54068,Tennessee,Loudon
47107,53794,Tennessee,McMinn
47109,25694,Tennessee,McNairy
47111,24602,Tennessee,Macon
47113,97984,Tennessee,Madison
47115,28907,Tennessee,Marion
47117,34375,Tennessee,Marshall
47119,96387,Tennessee,Maury
47121,12422,Tennessee,Meigs
47123,46545,Tennessee,Monroe
47125,208993,Tennessee,Montgomery
47127,6488,Tennessee,Moore
47129,21403,Tennessee,Morgan
47131,30069,Tennessee,Obion
47133,22241,Tennessee,Overton
47135,8076,Tennessee,Perry
47137,5048,Tennessee,Pickett
47139,16832,Tennessee,Polk
47141,80245,Tennessee,Putnam
47143,33167,Tennessee,Rhea
47145,53382,Tennessee,Roane
47147,71813,Tennessee,Robertson
47149,332285,Tennessee,Rutherford
47151,22068,Tennessee,Scott
47153,15026,Tennessee,Sequatchie
47155,98250,Tennessee,Sevier
47157,937166,Tennessee,Shelby
47159,20157,Tennessee,Smith
47161,13715,Tennessee,Stewart
47163,158348,Tennessee,Sullivan
47165,191283,Tennessee,Sumner
47167,61599,Tennessee,Tipton
47169,11284,Tennessee,Trousdale
47171,17883,Tennessee,Unicoi
47173,19972,Tennessee,Union
47175,5872,Tennessee,Van Buren
47177,41277,Tennessee,Warren
47179,129375,Tennessee,Washington
47181,16673,Tennessee,Wayne
47183,33328,Tennessee,Weakley
47185,27345,Tennessee,White
47187,238412,Tennessee,Williamson
47189,144657,Tennessee,Wilson
47999,,Tennessee,Unknown
48001,57735,Texas,Anderson
48003,18705,Texas,Andrews
48005,86715,Texas,Angelina
48007,23510,Texas,Aransas
48009,8553,Texas,Archer
48011,1887,Texas,Armstrong
48013,51153,Texas,Atascosa
48015,30032,Texas,Austin
48017,7000,Texas,Bailey
48019,23112,Texas,Bandera
48021,88723,Texas,Bastrop
48023,3509,Texas,Baylor
48025,32565,Texas,Bee
48027,362924,Texas,Bell
48029,2003554,Texas,Bexar
48031,11931,Texas,Blanco
48033,654,Texas,Borden
48035,18685,Texas,Bosque
48037,93245,Texas,Bowie
48039,374264,Texas,Brazoria
48041,229211,Texas,Brazos
48043,9203,Texas,Brewster
48045,1546,Texas,Briscoe
48047,7093,Texas,Brooks
48049,37864,Texas,Brown
48051,18443,Texas,Burleson
48053,48155,Texas,Burnet
48055,43664,Texas,Caldwell
48057,21290,Texas,Calhoun
48059,13943,Texas,Callahan
48061,423163,Texas,Cameron
48063,13094,Texas,Camp
48065,5926,Texas,Carson
48067,30026,Texas,Cass
48069,7530,Texas,Castro
48071,43837,Texas,Chambers
48073,52646,Texas,Cherokee
48075,7306,Texas,Childress
48077,10471,Texas,Clay
48079,2853,Texas,Cochran
48081,3387,Texas,Coke
48083,8175,Texas,Coleman
48085,1034730,Texas,Collin
48087,2920,Texas,Collingsworth
48089,21493,Texas,Colorado
48091,156209,Texas,Comal
48093,13635,Texas,Comanche
48095,2726,Texas,Concho
48097,41257,Texas,Cooke
48099,75951,Texas,Coryell
48101,1398,Texas,Cottle
48103,4797,Texas,Crane
48105,3464,Texas,Crockett
48107,5737,Texas,Crosby
48109,2171,Texas,Culberson
48111,7287,Texas,Dallam
48113,2635516,Texas,Dallas
48115,12728,Texas,Dawson
48117,18546,Texas,Deaf Smith
48119,5331,Texas,Delta
48121,887207,Texas,Denton
48123,20160,Texas,DeWitt
48125,2211,Texas,Dickens
48127,10124,Texas,Dimmit
48129,3278,Texas,Donley
48131,11157,Texas,Duval
48133,18360,Texas,Eastland
48135,166223,Texas,Ector
48137,1932,Texas,Edwards
48139,184826,Texas,Ellis
48141,839238,Texas,El Paso
48143,42698,Texas,Erath
48145,17297,Texas,Falls
48147,35514,Texas,Fannin
48149,25346,Texas,Fayette
48151,3830,Texas,Fisher
48153,5712,Texas,Floyd
48155,1155,Texas,Foard
48157,811688,Texas,Fort Bend
48159,10725,Texas,Franklin
48161,19717,Texas,Freestone
48163,20306,Texas,Frio
48165,21492,Texas,Gaines
48167,342139,Texas,Galveston
48169,6229,Texas,Garza
48171,26988,Texas,Gillespie
48173,1409,Texas,Glasscock
48175,7658,Texas,Goliad
48177,20837,Texas,Gonzales
48179,21886,Texas,Gray
48181,136212,Texas,Grayson
48183,123945,Texas,Gregg
48185,28880,Texas,Grimes
48187,166847,Texas,Guadalupe
48189,33406,Texas,Hale
48191,2964,Texas,Hall
48193,8461,Texas,Hamilton
48195,5399,Texas,Hansford
48197,3933,Texas,Hardeman
48199,57602,Texas,Hardin
48201,4713325,Texas,Harris
48203,66553,Texas,Harrison
48205,5576,Texas,Hartley
48207,5658,Texas,Haskell
48209,230191,Texas,Hays
48211,3819,Texas,Hemphill
48213,82737,Texas,Henderson
48215,868707,Texas,Hidalgo
48217,36649,Texas,Hill
48219,23021,Texas,Hockley
48221,61643,Texas,Hood
48223,37084,Texas,Hopkins
48225,22968,Texas,Houston
48227,36664,Texas,Howard
48229,4886,Texas,Hudspeth
48231,98594,Texas,Hunt
48233,20938,Texas,Hutchinson
48235,1536,Texas,Irion
48237,8935,Texas,Jack
48239,14760,Texas,Jackson
48241,35529,Texas,Jasper
48243,2274,Texas,Jeff Davis
48245,251565,Texas,Jefferson
48247,5200,Texas,Jim Hogg
48249,40482,Texas,Jim Wells
48251,175817,Texas,Johnson
48253,20083,Texas,Jones
48255,15601,Texas,Karnes
48257,136154,Texas,Kaufman
48259,47431,Texas,Kendall
48261,404,Texas,Kenedy
48263,762,Texas,Kent
48265,52600,Texas,Kerr
48267,4337,Texas,Kimble
48269,272,Texas,King
48271,3667,Texas,Kinney
48273,30680,Texas,Kleberg
48275,3664,Texas,Knox
48277,49859,Texas,Lamar
48279,12893,Texas,Lamb
48281,21428,Texas,Lampasas
48283,7520,Texas,La Salle
48285,20154,Texas,Lavaca
48287,17239,Texas,Lee
48289,17404,Texas,Leon
48291,88219,Texas,Liberty
48293,23437,Texas,Limestone
48295,3233,Texas,Lipscomb
48297,12207,Texas,Live Oak
48299,21795,Texas,Llano
48301,169,Texas,Loving
48303,310569,Texas,Lubbock
48305,5951,Texas,Lynn
48307,7984,Texas,McCulloch
48309,256623,Texas,McLennan
48311,743,Texas,McMullen
48313,14284,Texas,Madison
48315,9854,Texas,Marion
48317,5771,Texas,Martin
48319,4274,Texas,Mason
48321,36643,Texas,Matagorda
48323,58722,Texas,Maverick
48325,51584,Texas,Medina
48327,2138,Texas,Menard
48329,176832,Texas,Midland
48331,24823,Texas,Milam
48333,4873,Texas,Mills
48335,8545,Texas,Mitchell
48337,19818,Texas,Montague
48339,607391,Texas,Montgomery
48341,20940,Texas,Moore
48343,12388,Texas,Morris
48345,1200,Texas,Motley
48347,65204,Texas,Nacogdoches
48349,50113,Texas,Navarro
48351,13595,Texas,Newton
48353,14714,Texas,Nolan
48355,362294,Texas,Nueces
48357,9836,Texas,Ochiltree
48359,2112,Texas,Oldham
48361,83396,Texas,Orange
48363,29189,Texas,Palo Pinto
48365,23194,Texas,Panola
48367,142878,Texas,Parker
48369,9605,Texas,Parmer
48371,15823,Texas,Pecos
48373,51353,Texas,Polk
48375,117415,Texas,Potter
48377,6704,Texas,Presidio
48379,12514,Texas,Rains
48381,137713,Texas,Randall
48383,3849,Texas,Reagan
48385,3452,Texas,Real
48387,12023,Texas,Red River
48389,15976,Texas,Reeves
48391,6948,Texas,Refugio
48393,854,Texas,Roberts
48395,17074,Texas,Robertson
48397,104915,Texas,Rockwall
48399,10264,Texas,Runnels
48401,54406,Texas,Rusk
48403,10542,Texas,Sabine
48405,8237,Texas,San Augustine
48407,28859,Texas,San Jacinto
48409,66730,Texas,San Patricio
48411,6055,Texas,San Saba
48413,2793,Texas,Schleicher
48415,16703,Texas,Scurry
48417,3265,Texas,Shackelford
48419,25274,Texas,Shelby
48421,3022,Texas,Sherman
48423,232751,Texas,Smith
48425,9128,Texas,Somervell
48427,64633,Texas,Starr
48429,9366,Texas,Stephens
48431,1291,Texas,Sterling
48433,1350,Texas,Stonewall
48435,3776,Texas,Sutton
48437,7397,Texas,Swisher
48439,2102515,Texas,Tarrant
48441,138034,Texas,Taylor
48443,776,Texas,Terrell
48445,12337,Texas,Terry
48447,1501,Texas,Throckmorton
48449,32750,Texas,Titus
48451,119200,Texas,Tom Green
48453,1273954,Texas,Travis
48455,14651,Texas,Trinity
48457,21672,Texas,Tyler
48459,41753,Texas,Upshur
48461,3657,Texas,Upton
48463,26741,Texas,Uvalde
48465,49025,Texas,Val Verde
48467,56590,Texas,Van Zandt
48469,92084,Texas,Victoria
48471,72971,Texas,Walker
48473,55246,Texas,Waller
48475,11998,Texas,Ward
48477,35882,Texas,Washington
48479,276652,Texas,Webb
48481,41556,Texas,Wharton
48483,5056,Texas,Wheeler
48485,132230,Texas,Wichita
48487,12769,Texas,Wilbarger
48489,21358,Texas,Willacy
48491,590551,Texas,Williamson
48493,51070,Texas,Wilson
48495,8010,Texas,Winkler
48497,69984,Texas,Wise
48499,45539,Texas,Wood
48501,8713,Texas,Yoakum
48503,18010,Texas,Young
48505,14179,Texas,Zapata
48507,11840,Texas,Zavala
48999,,Texas,Unknown
49001,6710,Utah,Beaver
49003,56046,Utah,Box Elder
49005,128289,Utah,Cache
49007,20463,Utah,Carbon
49009,950,Utah,Daggett
49011,355481,Utah,Davis
49013,19938,Utah,Duchesne
49015,10012,Utah,Emery
49017,5051,Utah,Garfield
49019,9754,Utah,Grand
49021,54839,Utah,Iron
49023,12017,Utah,Juab
49025,7886,Utah,Kane
49027,13188,Utah,Millard
49029,12124,Utah,Morgan
49031,1479,Utah,Piute
49033,2483,Utah,Rich
49035,1160437,Utah,Salt Lake
49037,15308,Utah,San Juan
49039,30939,Utah,Sanpete
49041,21620,Utah,Sevier
49043,42145,Utah,Summit
49045,72259,Utah,Tooele
49047,35734,Utah,Uintah
49049,636235,Utah,Utah
49051,34091,Utah,Wasatch
49053,177556,Utah,Washington
49055,2711,Utah,Wayne
49057,260213,Utah,Weber
49999,,Utah,Unknown
50001,36777,Vermont,Addison
50003,35470,Vermont,Bennington
50005,29993,Vermont,Caledonia
50007,163774,Vermont,Chittenden
50009,6163,Vermont,Essex
50011,49402,Vermont,Franklin
50013,7235,Vermont,Grand Isle
50015,25362,Vermont,Lamoille
50017,28892,Vermont,Orange
50019,27037,Vermont,Orleans
50021,58191,Vermont,Rutland
50023,58409,Vermont,Washington
50025,42222,Vermont,Windham
50027,55062,Vermont,Windsor
50999,,Vermont,Unknown
51001,32316,Virginia,Accomack
51003,109330,Virginia,Albemarle
51005,14860,Virginia,Alleghany
51007,13145,Virginia,Amelia
51009,31605,Virginia,Amherst
51011,15911,Virginia,Appomattox
51013,236842,Virginia,Arlington
51015,75558,Virginia,Augusta
51017,4147,Virginia,Bath
51019,78997,Virginia,Bedford
51021,6280,Virginia,Bland
51023,33419,Virginia,Botetourt
51025,16231,Virginia,Brunswick
51027,21004,Virginia,Buchanan
51029,17148,Virginia,Buckingham
51031,54885,Virginia,Campbell
51033,30725,Virginia,Caroline
51035,29791,Virginia,Carroll
51036,6963,Virginia,Charles City
51037,11880,Virginia,Charlotte
51041,352802,Virginia,Chesterfield
51043,14619,Virginia,Clarke
51045,5131,Virginia,Craig
51047,52605,Virginia,Culpeper
51049,9932,Virginia,Cumberland
51051,14318,Virginia,Dickenson
51053,28544,Virginia,Dinwiddie
51057,10953,Virginia,Essex
51059,1147532,Virginia,Fairfax
51061,71222,Virginia,Fauquier
51063,15749,Virginia,Floyd
51065,27270,Virginia,Fluvanna
51067,56042,Virginia,Franklin
51069,89313,Virginia,Frederick
51071,16720,Virginia,Giles
51073,37348,Virginia,Gloucester
51075,23753,Virginia,Goochland
51077,15550,Virginia,Grayson
51079,19819,Virginia,Greene
51081,11336,Virginia,Greensville
51083,33911,Virginia,Halifax
51085,107766,Virginia,Hanover
51087,330818,Virginia,Henrico
51089,50557,Virginia,Henry
51091,2190,Virginia,Highland
51093,37109,Virginia,Isle of Wight
51095,76523,Virginia,James City
51097,7025,Virginia,King and Queen
51099,26836,Virginia,King George
51101,17148,Virginia,King William
51103,10603,Virginia,Lancaster
51105,23423,Virginia,Lee
51107,413538,Virginia,Loudoun
51109,37591,Virginia,Louisa
51111,12196,Virginia,Lunenburg
51113,13261,Virginia,Madison
51115,8834,Virginia,Mathews
51117,30587,Virginia,Mecklenburg
51119,10582,Virginia,Middlesex
51121,98535,Virginia,Montgomery
51125,14930,Virginia,Nelson
51127,23091,Virginia,New Kent
51131,11710,Virginia,Northampton
51133,12095,Virginia,Northumberland
51135,15232,Virginia,Nottoway
51137,37051,Virginia,Orange
51139,23902,Virginia,Page
51141,17608,Virginia,Patrick
51143,60354,Virginia,Pittsylvania
51145,29652,Virginia,Powhatan
51147,22802,Virginia,Prince Edward
51149,38353,Virginia,Prince George
51153,470335,Virginia,Prince William
51155,34027,Virginia,Pulaski
51157,7370,Virginia,Rappahannock
51159,9023,Virginia,Richmond
51161,94186,Virginia,Roanoke
51163,22573,Virginia,Rockbridge
51165,81948,Virginia,Rockingham
51167,26586,Virginia,Russell
51169,21566,Virginia,Scott
51171,43616,Virginia,Shenandoah
51173,30104,Virginia,Smyth
51175,17631,Virginia,Southampton
51177,136215,Virginia,Spotsylvania
51179,152882,Virginia,Stafford
51181,6422,Virginia,Surry
51183,11159,Virginia,Sussex
51185,40595,Virginia,Tazewell
51187,40164,Virginia,Warren
51191,53740,Virginia,Washington
51193,18015,Virginia,Westmoreland
51195,37383,Virginia,Wise
51197,28684,Virginia,Wythe
51199,68280,Virginia,York
51510,159428,Virginia,Alexandria city
51520,16762,Virginia,Bristol city
51530,6478,Virginia,Buena Vista city
51540,47266,Virginia,Charlottesville city
51550,244835,Virginia,Chesapeake city
51570,17370,Virginia,Colonial Heights city
51580,5538,Virginia,Covington city
51590,40044,Virginia,Danville city
51595,5346,Virginia,Emporia city
51600,24019,Virginia,Fairfax city
51610,14617,Virginia,Falls Church city
51620,7967,Virginia,Franklin city
51630,29036,Virginia,Fredericksburg city
51640,6347,Virginia,Galax city
51650,134510,Virginia,Hampton city
51660,53016,Virginia,Harrisonburg city
51670,22529,Virginia,Hopewell city
51678,7446,Virginia,Lexington city
51680,82168,Virginia,Lynchburg city
51683,41085,Virginia,Manassas city
51685,17478,Virginia,Manassas Park city
51690,12554,Virginia,Martinsville city
51700,179225,Virginia,Newport News city
51710,242742,Virginia,Norfolk city
51720,3981,Virginia,Norton city
51730,31346,Virginia,Petersburg city
51735,12271,Virginia,Poquoson city
51740,94398,Virginia,Portsmouth city
51750,18249,Virginia,Radford city
51760,230436,Virginia,Richmond city
51770,99143,Virginia,Roanoke city
51775,25301,Virginia,Salem city
51790,24932,Virginia,Staunton city
51800,92108,Virginia,Suffolk city
51810,449974,Virginia,Virginia Beach city
51820,22630,Virginia,Waynesboro city
51830,14954,Virginia,Williamsburg city
51840,28078,Virginia,Winchester city
51999,,Virginia,Unknown
53001,19983,Washington,Adams
53003,22582,Washington,Asotin
53005,204390,Washington,Benton
53007,77200,Washington,Chelan
53009,77331,Washington,Clallam
53011,488241,Washington,Clark
53013,3985,Washington,Columbia
53015,110593,Washington,Cowlitz
53017,43429,Washington,Douglas
53019,7627,Washington,Ferry
53021,95222,Washington,Franklin
53023,2225,Washington,Garfield
53025,97733,Washington,Grant
53027,75061,Washington,Grays Harbor
53029,85141,Washington,Island
53031,32221,Washington,Jefferson
53033,2252782,Washington,King
53035,271473,Washington,Kitsap
53037,47935,Washington,Kittitas
53039,22425,Washington,Klickitat
53041,80707,Washington,Lewis
53043,10939,Washington,Lincoln
53045,66768,Washington,Mason
53047,42243,Washington,Okanogan
53049,22471,Washington,Pacific
53051,13724,Washington,Pend Oreille
53053,904980,Washington,Pierce
53055,17582,Washington,San Juan
53057,129205,Washington,Skagit
53059,12083,Washington,Skamania
53061,822083,Washington,Snohomish
53063,522798,Washington,Spokane
53065,45723,Washington,Stevens
53067,290536,Washington,Thurston
53069,4488,Washington,Wahkiakum
53071,60760,Washington,Walla Walla
53073,229247,Washington,Whatcom
53075,50104,Washington,Whitman
53077,250873,Washington,Yakima
53999,,Washington,Unknown
54001,16441,West Virginia,Barbour
54003,119171,West Virginia,Berkeley
54005,21457,West Virginia,Boone
54007,13957,West Virginia,Braxton
54009,21939,West Virginia,Brooke
54011,91945,West Virginia,Cabell
54013,7109,West Virginia,Calhoun
54015,8508,West Virginia,Clay
54017,8448,West Virginia,Doddridge
54019,42406,West Virginia,Fayette
54021,7823,West Virginia,Gilmer
54023,11568,West Virginia,Grant
54025,34662,West Virginia,Greenbrier
54027,23175,West Virginia,Hampshire
54029,28810,West Virginia,Hancock
54031,13776,West Virginia,Hardy
54033,67256,West Virginia,Harrison
54035,28576,West Virginia,Jackson
54037,57146,West Virginia,Jefferson
54039,178124,West Virginia,Kanawha
54041,15907,West Virginia,Lewis
54043,20409,West Virginia,Lincoln
54045,32019,West Virginia,Logan
54047,17624,West Virginia,McDowell
54049,56072,West Virginia,Marion
54051,30531,West Virginia,Marshall
54053,26516,West Virginia,Mason
54055,58758,West Virginia,Mercer
54057,26868,West Virginia,Mineral
54059,23424,West Virginia,Mingo
54061,105612,West Virginia,Monongalia
54063,13275,West Virginia,Monroe
54065,17884,West Virginia,Morgan
54067,24496,West Virginia,Nicholas
54069,41411,West Virginia,Ohio
54071,6969,West Virginia,Pendleton
54073,7460,West Virginia,Pleasants
54075,8247,West Virginia,Pocahontas
54077,33432,West Virginia,Preston
54079,56450,West Virginia,Putnam
54081,73361,West Virginia,Raleigh
54083,28695,West Virginia,Randolph
54085,9554,West Virginia,Ritchie
54087,13688,West Virginia,Roane
54089,12573,West Virginia,Summers
54091,16695,West Virginia,Taylor
54093,6839,West Virginia,Tucker
54095,8591,West Virginia,Tyler
54097,24176,West Virginia,Upshur
54099,39402,West Virginia,Wayne
54101,8114,West Virginia,Webster
54103,15065,West Virginia,Wetzel
54105,5821,West Virginia,Wirt
54107,83518,West Virginia,Wood
54109,20394,West Virginia,Wyoming
54999,,West Virginia,Unknown
55001,20220,Wisconsin,Adams
55003,15562,Wisconsin,Ashland
55005,45244,Wisconsin,Barron
55007,15036,Wisconsin,Bayfield
55009,264542,Wisconsin,Brown
55011,13031,Wisconsin,Buffalo
55013,15414,Wisconsin,Burnett
55015,50089,Wisconsin,Calumet
55017,64658,Wisconsin,Chippewa
55019,34774,Wisconsin,Clark
55021,57532,Wisconsin,Columbia
55023,16131,Wisconsin,Crawford
55025,546695,Wisconsin,Dane
55027,87839,Wisconsin,Dodge
55029,27668,Wisconsin,Door
55031,43150,Wisconsin,Douglas
55033,45368,Wisconsin,Dunn
55035,104646,Wisconsin,Eau Claire
55037,4295,Wisconsin,Florence
55039,103403,Wisconsin,Fond du Lac
55041,9004,Wisconsin,Forest
55043,51439,Wisconsin,Grant
55045,36960,Wisconsin,Green
55047,18913,Wisconsin,Green Lake
55049,23678,Wisconsin,Iowa
55051,5687,Wisconsin,Iron
55053,20643,Wisconsin,Jackson
55055,84769,Wisconsin,Jefferson
55057,26687,Wisconsin,Juneau
55059,169561,Wisconsin,Kenosha
55061,20434,Wisconsin,Kewaunee
55063,118016,Wisconsin,La Crosse
55065,16665,Wisconsin,Lafayette
55067,19189,Wisconsin,Langlade
55069,27593,Wisconsin,Lincoln
55071,78981,Wisconsin,Manitowoc
55073,135692,Wisconsin,Marathon
55075,40350,Wisconsin,Marinette
55077,15574,Wisconsin,Marquette
55078,4556,Wisconsin,Menominee
55079,945726,Wisconsin,Milwaukee
55081,46253,Wisconsin,Monroe
55083,37930,Wisconsin,Oconto
55085,35595,Wisconsin,Oneida
55087,187885,Wisconsin,Outagamie
55089,89221,Wisconsin,Ozaukee
55091,7287,Wisconsin,Pepin
55093,42754,Wisconsin,Pierce
55095,43783,Wisconsin,Polk
55097,70772,Wisconsin,Portage
55099,13351,Wisconsin,Price
55101,196311,Wisconsin,Racine
55103,17252,Wisconsin,Richland
55105,163354,Wisconsin,Rock
55107,14178,Wisconsin,Rusk
55109,90687,Wisconsin,St. Croix
55111,64442,Wisconsin,Sauk
55113,16558,Wisconsin,Sawyer
55115,40899,Wisconsin,Shawano
55117,115340,Wisconsin,Sheboygan
55119,20343,Wisconsin,Taylor
55121,29649,Wisconsin,Trempealeau
55123,30822,Wisconsin,Vernon
55125,22195,Wisconsin,Vilas
55127,103868,Wisconsin,Walworth
55129,15720,Wisconsin,Washburn
55131,136034,Wisconsin,Washington
55133,404198,Wisconsin,Waukesha
55135,50990,Wisconsin,Waupaca
55137,24443,Wisconsin,Waushara
55139,171907,Wisconsin,Winnebago
55141,72999,Wisconsin,Wood
55999,,Wisconsin,Unknown
56001,38880,Wyoming,Albany
56003,11790,Wyoming,Big Horn
56005,46341,Wyoming,Campbell
56007,14800,Wyoming,Carbon
56009,13822,Wyoming,Converse
56011,7584,Wyoming,Crook
56013,39261,Wyoming,Fremont
56015,13211,Wyoming,Goshen
56017,4413,Wyoming,Hot Springs
56019,8445,Wyoming,Johnson
56021,99500,Wyoming,Laramie
56023,19830,Wyoming,Lincoln
56025,79858,Wyoming,Natrona
56027,2356,Wyoming,Niobrara
56029,29194,Wyoming,Park
56031,8393,Wyoming,Platte
56033,30485,Wyoming,Sheridan
56035,9831,Wyoming,Sublette
56037,42343,Wyoming,Sweetwater
56039,23464,Wyoming,Teton
56041,20226,Wyoming,Uinta
56043,7805,Wyoming,Washakie
56045,6927,Wyoming,Weston
56999,,Wyoming,Unknown
60999,,American Samoa,Unknown
66999,,Guam,Unknown
69100,2072,Northern Mariana Islands,Rota
69110,47565,Northern Mariana Islands,Saipan
69120,2626,Northern Mariana Islands,Tinian
69999,,Northern Mariana Islands,Unknown
72001,17363,Puerto Rico,Adjuntas
72003,36694,Puerto Rico,Aguada
72005,50265,Puerto Rico,Aguadilla
72007,24814,Puerto Rico,Aguas Buenas
72009,22108,Puerto Rico,Aibonito
72011,26161,Puerto Rico,Añasco
72013,81966,Puerto Rico,Arecibo
72015,17238,Puerto Rico,Arroyo
72017,23727,Puerto Rico,Barceloneta
72019,27725,Puerto Rico,Barranquitas
72021,169269,Puerto Rico,Bayamón
72023,47515,Puerto Rico,Cabo Rojo
72025,124606,Puerto Rico,Caguas
72027,30504,Puerto Rico,Camuy
72029,44674,Puerto Rico,Canóvanas
72031,146984,Puerto Rico,Carolina
72033,23121,Puerto Rico,Cataño
72035,42409,Puerto Rico,Cayey
72037,10904,Puerto Rico,Ceiba
72039,15808,Puerto Rico,Ciales
72041,38307,Puerto Rico,Cidra
72043,38336,Puerto Rico,Coamo
72045,18648,Puerto Rico,Comerío
72047,32293,Puerto Rico,Corozal
72049,1714,Puerto Rico,Culebra
72051,36141,Puerto Rico,Dorado
72053,29454,Puerto Rico,Fajardo
72054,11317,Puerto Rico,Florida
72055,15383,Puerto Rico,Guánica
72057,39465,Puerto Rico,Guayama
72059,17623,Puerto Rico,Guayanilla
72061,83728,Puerto Rico,Guaynabo
72063,47093,Puerto Rico,Gurabo
72065,39218,Puerto Rico,Hatillo
72067,15518,Puerto Rico,Hormigueros
72069,50653,Puerto Rico,Humacao
72071,40423,Puerto Rico,Isabela
72073,13891,Puerto Rico,Jayuya
72075,44679,Puerto Rico,Juana Díaz
72077,38155,Puerto Rico,Juncos
72079,22010,Puerto Rico,Lajas
72081,24276,Puerto Rico,Lares
72083,7927,Puerto Rico,Las Marías
72085,37007,Puerto Rico,Las Piedras
72087,24553,Puerto Rico,Loíza
72089,17665,Puerto Rico,Luquillo
72091,37287,Puerto Rico,Manatí
72093,5430,Puerto Rico,Maricao
72095,10321,Puerto Rico,Maunabo
72097,71530,Puerto Rico,Mayagüez
72099,34891,Puerto Rico,Moca
72101,30335,Puerto Rico,Morovis
72103,25761,Puerto Rico,Naguabo
72105,27349,Puerto Rico,Naranjito
72107,20220,Puerto Rico,Orocovis
72109,16211,Puerto Rico,Patillas
72111,19249,Puerto Rico,Peñuelas
72113,131881,Puerto Rico,Ponce
72115,22918,Puerto Rico,Quebradillas
72117,13656,Puerto Rico,Rincón
72119,48025,Puerto Rico,Río Grande
72121,21712,Puerto Rico,Sabana Grande
72123,27128,Puerto Rico,Salinas
72125,30227,Puerto Rico,San Germán
72127,318441,Puerto Rico,San Juan
72129,35989,Puerto Rico,San Lorenzo
72131,35528,Puerto Rico,San Sebastián
72133,21209,Puerto Rico,Santa Isabel
72135,72025,Puerto Rico,Toa Alta
72137,74271,Puerto Rico,Toa Baja
72139,63674,Puerto Rico,Trujillo Alto
72141,27395,Puerto Rico,Utuado
72143,36061,Puerto Rico,Vega Alta
72145,50023,Puerto Rico,Vega Baja
72147,8386,Puerto Rico,Vieques
72149,21372,Puerto Rico,Villalba
72151,32282,Puerto Rico,Yabucoa
72153,33575,Puerto Rico,Yauco
72999,,Puerto Rico,Unknown
78010,50601,Virgin Islands,St. Croix
78020,4170,Virgin Islands,St. John
78030,51634,Virgin Islands,St. Thomas
78999,,Virgin Islands,Unknown
`,am={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};var om={};const im=["2020","2021","2022"],sm="https://raw.githubusercontent.com/nytimes/covid-19-data/master",lm="/data/nyt-snapshot.json.gz",so={1:"AL",2:"AK",4:"AZ",5:"AR",6:"CA",8:"CO",9:"CT",10:"DE",11:"DC",12:"FL",13:"GA",15:"HI",16:"ID",17:"IL",18:"IN",19:"IA",20:"KS",21:"KY",22:"LA",23:"ME",24:"MD",25:"MA",26:"MI",27:"MN",28:"MS",29:"MO",30:"MT",31:"NE",32:"NV",33:"NH",34:"NJ",35:"NM",36:"NY",37:"NC",38:"ND",39:"OH",40:"OK",41:"OR",42:"PA",44:"RI",45:"SC",46:"SD",47:"TN",48:"TX",49:"UT",50:"VT",51:"VA",53:"WA",54:"WV",55:"WI",56:"WY",60:"AS",66:"GU",69:"MP",72:"PR",78:"VI"};let Nt=null,lo=null;const W1=new WeakMap;function um(){return sm}function O2(e,n){const t=am[e];if(typeof t!="string")return n;const r=t.trim().toLowerCase();return r===""||r==="1"||r==="true"||r==="yes"?!0:r==="0"||r==="false"||r==="no"?!1:n}function cm(){return O2("VITE_PREFER_STATIC_SNAPSHOT",!0)}function dm(){return O2("VITE_ALLOW_REMOTE_FALLBACK",!0)}function fm(){return lm}function pm(){return typeof process>"u"||om.COVID_DASH_REAL_DATA==="1",!1}function N2(e){const n=[];let t=[],r="",a=!1;for(let o=0;o<e.length;o+=1){const i=e[o]??"";if(i==='"'){const l=e[o+1]??"";a&&l==='"'?(r+='"',o+=1):a=!a;continue}if(!a&&i===","){t.push(r),r="";continue}if(!a&&(i===`
`||i==="\r")){i==="\r"&&(e[o+1]??"")===`
`&&(o+=1),t.push(r),(t.length>1||t[0]!=="")&&n.push(t),t=[],r="";continue}r+=i}return(r.length>0||t.length>0)&&(t.push(r),n.push(t)),n}function Br(e){if(e==="")return null;const n=Number(e);return Number.isFinite(n)?n:null}function hm(e){const t=N2(e).slice(1),r=[],a=new Map,o=new Map;for(const l of t){const s=Br(l[0]??"");if(s==null)continue;const u=Br(l[1]??""),c=l[2]??"",d=l[3]??"";if(r.push({fips:s,pop:u}),d===""){a.set(s,c);continue}o.set(s,d)}const i=[...a.entries()].sort((l,s)=>l[1].localeCompare(s[1])).map(([l,s])=>({value:l,label:s}));return{population:r,stateNamesByFips:a,countyNamesByFips:o,stateOptions:i}}function mm(e,n){const t=[];for(const r of e){const o=r.fips??gm(r.state,r.county,n);o!=null&&t.push({date:r.date,fips:o,cases:r.cases,deaths:r.deaths})}return t}function B1(e,n){const t=N2(e).slice(1),r=[];for(const a of t){const o=a[0]??"",i=n?a[1]??null:null,l=n?a[2]??"":a[1]??"",s=n?3:2,u=n?4:3,c=n?5:4,d=Br(a[s]??""),h=Br(a[u]??""),m=Br(a[c]??"");o===""||l===""||h==null||m==null||r.push({date:o,county:i,state:l,fips:d,cases:h,deaths:m})}return r}function gm(e,n,t){if(e==="New York"&&n==="New York City")return 36998;if(e==="Missouri"&&n==="Kansas City")return 29998;if(e==="Missouri"&&n==="Joplin")return 29997;if(n==="Unknown"){const r=t.get(e);return r==null?null:r*1e3+999}return null}async function ym(e){return await e.json()}async function H1(e){const n=await fetch(e);if(!n.ok)throw new Error(`failed to fetch static snapshot ${e}: ${n.status}`);if(!e.endsWith(".gz"))return ym(n);const t=n.body;if(typeof DecompressionStream>"u"||t==null)throw new Error("gzip static snapshot requires DecompressionStream support");const r=t.pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).text();return JSON.parse(a)}function z1(e){return{records:e.records.map(([n,t,r,a])=>({date:n,fips:t,cases:r,deaths:a})),population:e.population.map(([n,t])=>({fips:n,pop:t})),stateNamesByFips:new Map(e.stateNamesByFips),countyNamesByFips:new Map(e.countyNamesByFips),stateOptions:e.stateOptions,dateRange:e.dateRange}}async function vm(){const e=fm();try{const n=await H1(e);return z1(n)}catch(n){if(!e.endsWith(".gz"))throw n;const t=e.slice(0,-3),r=await H1(t);return z1(r)}}async function K1(e){const n=await fetch(e);if(!n.ok)throw new Error(`failed to fetch ${e}: ${n.status}`);return n.text()}function I2(e){var r,a,o;if(e.length===0)return[null,null];let n=((r=e[0])==null?void 0:r.date)??null,t=((a=e[0])==null?void 0:a.date)??null;for(let i=1;i<e.length;i+=1){const l=(o=e[i])==null?void 0:o.date;l!=null&&((n==null||l.localeCompare(n)<0)&&(n=l),(t==null||l.localeCompare(t)>0)&&(t=l))}return[n,t]}function km(e){const n=W1.get(e);if(n!=null)return n;const t=new Map,r=new Map;for(const[o,i]of e.countyNamesByFips.entries()){const l=o<1e3?o:Math.floor(o/1e3),s=so[l]??String(l);let u=t.get(l);u==null&&(u=[],t.set(l,u));let c=r.get(l);c==null&&(c=[],r.set(l,c)),u.push({value:o,label:i}),c.push({value:o,label:`${i}, ${s}`})}for(const o of t.values())o.sort((i,l)=>i.label.localeCompare(l.label));for(const o of r.values())o.sort((i,l)=>i.label.localeCompare(l.label));const a={countiesByState:t,countiesByStateWithCode:r,combinedByStateKey:new Map};return W1.set(e,a),a}function wm(){return{records:sa,population:Ku,stateNamesByFips:new Map([[10,"State 10"],[20,"State 20"]]),countyNamesByFips:new Map([[10,"County 10"],[20,"County 20"]]),stateOptions:[{value:10,label:"State 10"},{value:20,label:"State 20"}],dateRange:I2(sa)}}async function G1(){const e=um(),{population:n,stateNamesByFips:t,countyNamesByFips:r,stateOptions:a}=hm(rm),o=new Map([...t.entries()].map(([d,h])=>[h,d])),i=await K1(`${e}/us-states.csv`),l=B1(i,!1),u=(await Promise.all(im.map(d=>K1(`${e}/us-counties-${d}.csv`)))).flatMap(d=>B1(d,!0)),c=mm([...l,...u],o);return{records:c,population:n,stateNamesByFips:t,countyNamesByFips:r,stateOptions:a,dateRange:I2(c)}}async function Sm(){return lo??(Nt!=null||(Nt=(async()=>{const e=pm()?wm():await(async()=>{if(!cm())return G1();try{return await vm()}catch(n){if(!dm())throw n;return typeof console<"u"&&typeof console.warn=="function"&&console.warn("Static snapshot unavailable, falling back to NYT source",n),G1()}})();return lo=e,Nt=null,e})().catch(e=>{throw Nt=null,e})),Nt)}function bi(){return lo}function E2(e,n){if(e.length===0)return"";const t=[...e].sort((s,u)=>s-u);if(t.every(s=>s<1e3&&!n.countyNamesByFips.has(s)))return t.map(s=>so[s]??String(s)).join(" + ");if(!t.every(s=>s>=1e3||n.countyNamesByFips.has(s)))return"Mixed selection";const o=[...new Set(t.map(s=>s<1e3?s:Math.floor(s/1e3)))],i=o.length===1,l=t.map(s=>n.countyNamesByFips.get(s)??`County ${s}`);if(i){const s=so[o[0]??0]??String(o[0]??"");return`${l.join(" + ")}, ${s}`}return t.map(s=>{const u=Math.floor(s/1e3);return`${n.countyNamesByFips.get(s)??`County ${s}`}, ${so[u]??u}`}).join(" + ")}function L2(e,n){if(e.length===0)return[];const t=km(n),r=[...new Set(e)].sort((l,s)=>l-s);if(r.length===1)return[...t.countiesByState.get(r[0]??0)??[]];const a=r.join(","),o=t.combinedByStateKey.get(a);if(o!=null)return[...o];const i=[];for(const l of r){const s=t.countiesByStateWithCode.get(l);s!=null&&i.push(...s)}return i.sort((l,s)=>l.label.localeCompare(s.label)),t.combinedByStateKey.set(a,i),[...i]}async function Cm(e){return b2(e.request,e.location)}const sa=[{date:"2020-01-01",fips:10,cases:10,deaths:1},{date:"2020-01-01",fips:20,cases:5,deaths:0},{date:"2020-01-02",fips:10,cases:20,deaths:2},{date:"2020-01-02",fips:20,cases:9,deaths:1},{date:"2020-01-03",fips:10,cases:35,deaths:4},{date:"2020-01-03",fips:20,cases:15,deaths:2}],Ku=[{fips:10,pop:1e3},{fips:20,pop:500}];function R2(e,n,t){if(e.length===0||e.every(a=>a.dates.length===0)){const a=t==null?[]:[t[0],t[1]],o=t==null?[]:[Number.NaN,Number.NaN];return{data:[{type:"scatter",mode:"lines",name:"",x:a,y:o}],layout:{title:{text:n.title},xaxis:{title:{text:"Date"}},yaxis:{title:{text:n.yAxisTitle},type:n.yAxisType,ticksuffix:n.yAxisTickSuffix}}}}return{data:e.filter(a=>a.dates.length>0).map(a=>{const o=n.valueField==="y"?a.values:a.popvalues,i=n.popField==="customdata"?a.popvalues:a.values;return{type:"scatter",mode:"lines",name:a.location,x:a.dates,y:o,customdata:i,hovertemplate:n.hoverTemplate}}),layout:{title:{text:n.title},xaxis:{title:{text:"Date"}},yaxis:{title:{text:n.yAxisTitle},type:n.yAxisType,ticksuffix:n.yAxisTickSuffix}}}}const Mm=e=>{typeof console<"u"&&typeof console.debug=="function"&&console.debug("[phase4]",e)};function It(e,n){e(n)}const xm=new Set([9,23,25,33,34,36,42,44,50]),Tm=new Set([17,18,26,39,55,19,20,27,29,31,38,46]),Pm=new Set([10,11,12,13,24,37,45,51,54,1,21,28,47,5,22,40,48]),bm=new Set([4,8,16,30,32,35,49,56,2,6,15,41,53]);function Om(e){return e<1e3?e:Math.floor(e/1e3)}function Nm(e){const n=new Set;for(const t of e.records)n.add(Om(t.fips));return[...n].sort((t,r)=>t-r)}function Im(e,n){const t=Nm(n);switch(e){case"all":return t;case"lower49":return t.filter(r=>r!==2&&r!==15);case"northeast":return t.filter(r=>xm.has(r));case"midwest":return t.filter(r=>Tm.has(r));case"south":return t.filter(r=>Pm.has(r));case"west":return t.filter(r=>bm.has(r));default:return[]}}function $1(e,n){return e.length===0?[]:L2(e,n).map(t=>t.value)}function Em(e,n,t){if(e.length===0)return[];const r=new Map(t.population.map(c=>[c.fips,c.pop??0])),a=[...e].map(c=>({fips:c,pop:r.get(c)??0})).sort((c,d)=>c.pop-d.pop),[o,i]=n,l=Math.max(0,Math.min(100,Math.min(o,i))),s=Math.max(0,Math.min(100,Math.max(o,i))),u=a.length>1?a.length-1:1;return a.filter((c,d)=>{const h=d/u*100;return h>=l&&h<=s}).map(c=>c.fips).sort((c,d)=>c-d)}function Lm(e={}){const n=e.fetchSeriesContractFn??Cm,t=e.getDataSnapshotFn??Sm,r=e.trace??Mm,a=z4();let o=0;return a.startListening({actionCreator:dt,effect:async(i,l)=>{const s=await t(),c=l.getState().filters.selections[i.payload.index];if(c==null)return;const d=Im(i.payload.group,s),h=new Set($1(d,s)),m=c.countyFips.filter(g=>h.has(g));l.dispatch(Wr({index:i.payload.index,selection:{stateFips:d,countyFips:m}}))}}),a.startListening({actionCreator:M2,effect:async(i,l)=>{const s=await t(),c=l.getState().filters.selections[i.payload.index];if(c==null)return;const d=$1(c.stateFips,s),h=Em(d,i.payload.window,s);l.dispatch(Wr({index:i.payload.index,selection:{...c,countyFips:h}}))}}),a.startListening({matcher:w4(T2,v2,Ll,k2,w2,S2,C2,Wr),effect:async(i,l)=>{const s=i.type,u=o+1;o=u;const c=l.getState(),d=c.filters.selections.reduce((v,k)=>{const f=k.countyFips.length>0?k.countyFips:k.stateFips;return v+f.length},0);l.dispatch(U4({requestId:u,trigger:s,selectedFipsCount:d})),It(r,{stage:"start",requestId:u,trigger:s,selectedFipsCount:d});const h={metricType:c.filters.metricType,valueMode:c.filters.valueMode,rollingDays:c.filters.rollingDays,normalizeByPopulation:c.filters.normalizeByPopulation,useLogScale:c.filters.useLogScale},m=await t();l.dispatch($4({startDate:m.dateRange[0],endDate:m.dateRange[1]}));const g=c.filters.selections.map((v,k)=>{const f=v.countyFips.length>0?v.countyFips:v.stateFips;return f.length===0?null:{request:{records:m.records,selectedFips:[...f],population:m.population,metricType:c.filters.metricType,valueMode:c.filters.valueMode,rollingDays:c.filters.rollingDays,normalizeByPopulation:c.filters.normalizeByPopulation},location:E2(f,m)||`Selection ${k+1}`}}).filter(v=>v!=null);try{const v=await Promise.all(g.map(y=>n({request:y.request,location:y.location})));if(l.dispatch(j4({requestId:u,trigger:s,traceCount:v.length})),It(r,{stage:"compute",requestId:u,trigger:s,traceCount:v.length}),(l.getState().ui.activeRequestId??0)!==u){const y="stale-response";l.dispatch(F1({requestId:u,trigger:s,reason:y})),It(r,{stage:"stale",requestId:u,trigger:s,reason:y});return}const f=P2(h),p=R2(v,f,m.dateRange[0]!=null&&m.dateRange[1]!=null?[m.dateRange[0],m.dateRange[1]]:null);l.dispatch(Y4({requestId:u,trigger:s,figure:p,traceCount:p.data.length})),It(r,{stage:"commit",requestId:u,trigger:s,traceCount:p.data.length})}catch(v){const k=v instanceof Error?v.message:"unknown callback-flow error";if((l.getState().ui.activeRequestId??0)!==u){const p="stale-error";l.dispatch(F1({requestId:u,trigger:s,reason:p})),It(r,{stage:"stale",requestId:u,trigger:s,reason:p,message:k});return}l.dispatch(J4({requestId:u,trigger:s,message:k})),It(r,{stage:"error",requestId:u,trigger:s,message:k})}}}),a}function Rm(e={}){const{callbackFlowDependencies:n,enableCallbackFlow:t=!0}=e,r=Lm(n),a=g4({reducer:{filters:K4,ui:Q4},middleware:o=>{const i=o();return t?i.prepend(r.middleware):i}});return t&&a.dispatch(T2()),a}const Dm=Rm(),D2=()=>b5(),wn=I5,Am=["NYC consolidated county reporting caveat.","Kansas City, MO reporting caveat.","Joplin, MO reporting caveat.","Unknown county bucket caveat for selected state.","Selected counties include suppressed population rows."];function Fm({visibility:e}){return b.jsxs("section",{"aria-label":"Data caveats",style:ws.wrapper,children:[b.jsx("h2",{style:ws.title,children:"Caveats"}),b.jsx("ul",{style:ws.list,children:Am.map((n,t)=>b.jsx("li",{hidden:!e[t],children:n},n))})]})}const ws={wrapper:{background:"#fff7ef",border:"1px solid #f4d7bb",borderRadius:"12px",padding:"1rem"},title:{margin:"0 0 0.5rem",fontSize:"1.05rem"},list:{margin:0,paddingLeft:"1.1rem"}},_m="modulepreload",Vm=function(e){return"/"+e},U1={},Wm=function(n,t,r){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(t.map(s=>{if(s=Vm(s),s in U1)return;U1[s]=!0;const u=s.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${c}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":_m,u||(d.as="script"),d.crossOrigin="",d.href=s,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((h,m)=>{d.addEventListener("load",h),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}function o(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return a.then(i=>{for(const l of i||[])l.status==="rejected"&&o(l.reason);return n().catch(o)})};function Bm(e){const n=e.data.map(r=>({...r,x:r.x==null?void 0:[...r.x],y:r.y==null?void 0:[...r.y],customdata:r.customdata==null?void 0:[...r.customdata]})),t={...e.layout,title:e.layout.title==null?void 0:{...e.layout.title},xaxis:e.layout.xaxis==null?void 0:{...e.layout.xaxis,title:e.layout.xaxis.title==null?void 0:{...e.layout.xaxis.title}},yaxis:e.layout.yaxis==null?void 0:{...e.layout.yaxis,title:e.layout.yaxis.title==null?void 0:{...e.layout.yaxis.title}}};return{data:n,layout:t}}function Hm(e,n,t){const{data:r,layout:a}=Bm(t);e.react(n,r,a,{responsive:!0})}function zm({figure:e,isLoading:n,lastError:t}){var o;const r=x.useRef(null),a=x.useRef(null);return x.useEffect(()=>{const i=r.current;if(i==null)return;(async()=>{const c=(await Wm(()=>import("./plotly.min-Cq_n-7xG.js").then(d=>d.p),[])).default;a.current=c})();const s=()=>{const u=a.current;(u==null?void 0:u.Plots)!=null&&u.Plots.resize(i)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s);const u=a.current;if(a.current=null,u!=null)try{u.purge(i)}catch{}}},[]),x.useEffect(()=>{const i=a.current,l=r.current;i==null||l==null||Hm(i,l,e)},[e]),b.jsxs("section",{"aria-label":"Trend chart",style:Hn.panel,children:[b.jsxs("div",{style:Hn.panelHeader,children:[b.jsx("h2",{style:Hn.panelTitle,children:"Trend Overview"}),b.jsx("p",{style:Hn.panelSubtitle,children:((o=e.layout.title)==null?void 0:o.text)??"Untitled figure"})]}),b.jsxs("div",{"data-testid":"plotly-figure-shell",style:Hn.figureShell,children:[b.jsx("div",{ref:r,style:Hn.figure}),n?b.jsx("p",{role:"status",style:Hn.overlayStatus,children:"Loading data..."}):null,t!=null?b.jsx("p",{role:"alert",style:Hn.overlayError,children:t}):null]})]})}const Hn={panel:{background:"#f7fbff",border:"1px solid #d7e4ef",borderRadius:"12px",padding:"1rem",minHeight:"20rem"},panelHeader:{marginBottom:"0.75rem"},panelTitle:{margin:"0 0 0.35rem",fontSize:"1.15rem"},panelSubtitle:{margin:0,color:"#33536d"},figureShell:{position:"relative",border:"1px dashed #95abc0",borderRadius:"10px",padding:"0.5rem",background:"#ffffff",minHeight:"28rem"},figure:{width:"100%",height:"100%"},overlayStatus:{position:"absolute",top:"0.75rem",right:"0.75rem",margin:0,padding:"0.25rem 0.5rem",borderRadius:"6px",background:"rgba(30, 66, 98, 0.08)",color:"#24435d",fontSize:"0.85rem"},overlayError:{position:"absolute",left:"0.75rem",bottom:"0.75rem",margin:0,maxWidth:"calc(100% - 1.5rem)",padding:"0.35rem 0.55rem",borderRadius:"6px",background:"rgba(152, 45, 45, 0.12)",color:"#6b1d1d",fontSize:"0.85rem"}};function xt(e){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xt(e)}function Km(e,n){if(xt(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(xt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function A2(e){var n=Km(e,"string");return xt(n)=="symbol"?n:n+""}function Nr(e,n,t){return(n=A2(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j1(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?j1(Object(t),!0).forEach(function(r){Nr(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j1(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Gm(e){if(Array.isArray(e))return e}function $m(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,o,i,l=[],s=!0,u=!1;try{if(o=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=o.call(t)).done)&&(l.push(r.value),l.length!==n);s=!0);}catch(c){u=!0,a=c}finally{try{if(!s&&t.return!=null&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}function Rl(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function F2(e,n){if(e){if(typeof e=="string")return Rl(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Rl(e,n):void 0}}function Um(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function En(e,n){return Gm(e)||$m(e,n)||F2(e,n)||Um()}function jm(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Wn(e,n){if(e==null)return{};var t,r,a=jm(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Ym=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Jm(e){var n=e.defaultInputValue,t=n===void 0?"":n,r=e.defaultMenuIsOpen,a=r===void 0?!1:r,o=e.defaultValue,i=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,c=e.onInputChange,d=e.onMenuClose,h=e.onMenuOpen,m=e.value,g=Wn(e,Ym),v=x.useState(l!==void 0?l:t),k=En(v,2),f=k[0],p=k[1],y=x.useState(s!==void 0?s:a),w=En(y,2),S=w[0],M=w[1],C=x.useState(m!==void 0?m:i),T=En(C,2),I=T[0],E=T[1],G=x.useCallback(function(O,D){typeof u=="function"&&u(O,D),E(O)},[u]),J=x.useCallback(function(O,D){var F;typeof c=="function"&&(F=c(O,D)),p(F!==void 0?F:O)},[c]),Pe=x.useCallback(function(){typeof h=="function"&&h(),M(!0)},[h]),Xe=x.useCallback(function(){typeof d=="function"&&d(),M(!1)},[d]),ae=l!==void 0?l:f,X=s!==void 0?s:S,Re=m!==void 0?m:I;return R(R({},g),{},{inputValue:ae,menuIsOpen:X,onChange:G,onInputChange:J,onMenuClose:Xe,onMenuOpen:Pe,value:Re})}function A(){return A=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},A.apply(null,arguments)}function Qm(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Y1(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,A2(r.key),r)}}function Xm(e,n,t){return n&&Y1(e.prototype,n),t&&Y1(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Dl(e,n){return Dl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},Dl(e,n)}function qm(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Dl(e,n)}function Yo(e){return Yo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Yo(e)}function _2(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_2=function(){return!!e})()}function Zm(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function eg(e,n){if(n&&(xt(n)=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Zm(e)}function ng(e){var n=_2();return function(){var t,r=Yo(e);if(n){var a=Yo(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return eg(this,t)}}function tg(e){if(Array.isArray(e))return Rl(e)}function rg(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ag(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gu(e){return tg(e)||rg(e)||F2(e)||ag()}function og(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function ig(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var sg=function(){function e(t){var r=this;this._insertTag=function(a){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,o),r.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(r){r.forEach(this._insertTag)},n.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ig(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var o=og(a);try{o.insertRule(r,o.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},n.flush=function(){this.tags.forEach(function(r){var a;return(a=r.parentNode)==null?void 0:a.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Me="-ms-",Jo="-moz-",B="-webkit-",V2="comm",$u="rule",Uu="decl",lg="@import",W2="@keyframes",ug="@layer",cg=Math.abs,Oi=String.fromCharCode,dg=Object.assign;function fg(e,n){return ve(e,0)^45?(((n<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function B2(e){return e.trim()}function pg(e,n){return(e=n.exec(e))?e[0]:e}function H(e,n,t){return e.replace(n,t)}function Al(e,n){return e.indexOf(n)}function ve(e,n){return e.charCodeAt(n)|0}function la(e,n,t){return e.slice(n,t)}function yn(e){return e.length}function ju(e){return e.length}function za(e,n){return n.push(e),e}function hg(e,n){return e.map(n).join("")}var Ni=1,lr=1,H2=0,We=0,oe=0,fr="";function Ii(e,n,t,r,a,o,i){return{value:e,root:n,parent:t,type:r,props:a,children:o,line:Ni,column:lr,length:i,return:""}}function Cr(e,n){return dg(Ii("",null,null,"",null,null,0),e,{length:-e.length},n)}function mg(){return oe}function gg(){return oe=We>0?ve(fr,--We):0,lr--,oe===10&&(lr=1,Ni--),oe}function Ue(){return oe=We<H2?ve(fr,We++):0,lr++,oe===10&&(lr=1,Ni++),oe}function Mn(){return ve(fr,We)}function uo(){return We}function va(e,n){return la(fr,e,n)}function ua(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function z2(e){return Ni=lr=1,H2=yn(fr=e),We=0,[]}function K2(e){return fr="",e}function co(e){return B2(va(We-1,Fl(e===91?e+2:e===40?e+1:e)))}function yg(e){for(;(oe=Mn())&&oe<33;)Ue();return ua(e)>2||ua(oe)>3?"":" "}function vg(e,n){for(;--n&&Ue()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return va(e,uo()+(n<6&&Mn()==32&&Ue()==32))}function Fl(e){for(;Ue();)switch(oe){case e:return We;case 34:case 39:e!==34&&e!==39&&Fl(oe);break;case 40:e===41&&Fl(e);break;case 92:Ue();break}return We}function kg(e,n){for(;Ue()&&e+oe!==57;)if(e+oe===84&&Mn()===47)break;return"/*"+va(n,We-1)+"*"+Oi(e===47?e:Ue())}function wg(e){for(;!ua(Mn());)Ue();return va(e,We)}function Sg(e){return K2(fo("",null,null,null,[""],e=z2(e),0,[0],e))}function fo(e,n,t,r,a,o,i,l,s){for(var u=0,c=0,d=i,h=0,m=0,g=0,v=1,k=1,f=1,p=0,y="",w=a,S=o,M=r,C=y;k;)switch(g=p,p=Ue()){case 40:if(g!=108&&ve(C,d-1)==58){Al(C+=H(co(p),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:C+=co(p);break;case 9:case 10:case 13:case 32:C+=yg(g);break;case 92:C+=vg(uo()-1,7);continue;case 47:switch(Mn()){case 42:case 47:za(Cg(kg(Ue(),uo()),n,t),s);break;default:C+="/"}break;case 123*v:l[u++]=yn(C)*f;case 125*v:case 59:case 0:switch(p){case 0:case 125:k=0;case 59+c:f==-1&&(C=H(C,/\f/g,"")),m>0&&yn(C)-d&&za(m>32?Q1(C+";",r,t,d-1):Q1(H(C," ","")+";",r,t,d-2),s);break;case 59:C+=";";default:if(za(M=J1(C,n,t,u,c,a,l,y,w=[],S=[],d),o),p===123)if(c===0)fo(C,n,M,M,w,o,d,l,S);else switch(h===99&&ve(C,3)===110?100:h){case 100:case 108:case 109:case 115:fo(e,M,M,r&&za(J1(e,M,M,0,0,a,l,y,a,w=[],d),S),a,S,d,l,r?w:S);break;default:fo(C,M,M,M,[""],S,0,l,S)}}u=c=m=0,v=f=1,y=C="",d=i;break;case 58:d=1+yn(C),m=g;default:if(v<1){if(p==123)--v;else if(p==125&&v++==0&&gg()==125)continue}switch(C+=Oi(p),p*v){case 38:f=c>0?1:(C+="\f",-1);break;case 44:l[u++]=(yn(C)-1)*f,f=1;break;case 64:Mn()===45&&(C+=co(Ue())),h=Mn(),c=d=yn(y=C+=wg(uo())),p++;break;case 45:g===45&&yn(C)==2&&(v=0)}}return o}function J1(e,n,t,r,a,o,i,l,s,u,c){for(var d=a-1,h=a===0?o:[""],m=ju(h),g=0,v=0,k=0;g<r;++g)for(var f=0,p=la(e,d+1,d=cg(v=i[g])),y=e;f<m;++f)(y=B2(v>0?h[f]+" "+p:H(p,/&\f/g,h[f])))&&(s[k++]=y);return Ii(e,n,t,a===0?$u:l,s,u,c)}function Cg(e,n,t){return Ii(e,n,t,V2,Oi(mg()),la(e,2,-2),0)}function Q1(e,n,t,r){return Ii(e,n,t,Uu,la(e,0,r),la(e,r+1,-1),r)}function qt(e,n){for(var t="",r=ju(e),a=0;a<r;a++)t+=n(e[a],a,e,n)||"";return t}function Mg(e,n,t,r){switch(e.type){case ug:if(e.children.length)break;case lg:case Uu:return e.return=e.return||e.value;case V2:return"";case W2:return e.return=e.value+"{"+qt(e.children,r)+"}";case $u:e.value=e.props.join(",")}return yn(t=qt(e.children,r))?e.return=e.value+"{"+t+"}":""}function xg(e){var n=ju(e);return function(t,r,a,o){for(var i="",l=0;l<n;l++)i+=e[l](t,r,a,o)||"";return i}}function Tg(e){return function(n){n.root||(n=n.return)&&e(n)}}function Pg(e){var n=Object.create(null);return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var bg=function(n,t,r){for(var a=0,o=0;a=o,o=Mn(),a===38&&o===12&&(t[r]=1),!ua(o);)Ue();return va(n,We)},Og=function(n,t){var r=-1,a=44;do switch(ua(a)){case 0:a===38&&Mn()===12&&(t[r]=1),n[r]+=bg(We-1,t,r);break;case 2:n[r]+=co(a);break;case 4:if(a===44){n[++r]=Mn()===58?"&\f":"",t[r]=n[r].length;break}default:n[r]+=Oi(a)}while(a=Ue());return n},Ng=function(n,t){return K2(Og(z2(n),t))},X1=new WeakMap,Ig=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var t=n.value,r=n.parent,a=n.column===r.column&&n.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(n.props.length===1&&t.charCodeAt(0)!==58&&!X1.get(r))&&!a){X1.set(n,!0);for(var o=[],i=Ng(t,o),l=r.props,s=0,u=0;s<i.length;s++)for(var c=0;c<l.length;c++,u++)n.props[u]=o[s]?i[s].replace(/&\f/g,l[c]):l[c]+" "+i[s]}}},Eg=function(n){if(n.type==="decl"){var t=n.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(n.return="",n.value="")}};function G2(e,n){switch(fg(e,n)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Jo+e+Me+e+e;case 6828:case 4268:return B+e+Me+e+e;case 6165:return B+e+Me+"flex-"+e+e;case 5187:return B+e+H(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+Me+"flex-$1$2")+e;case 5443:return B+e+Me+"flex-item-"+H(e,/flex-|-self/,"")+e;case 4675:return B+e+Me+"flex-line-pack"+H(e,/align-content|flex-|-self/,"")+e;case 5548:return B+e+Me+H(e,"shrink","negative")+e;case 5292:return B+e+Me+H(e,"basis","preferred-size")+e;case 6060:return B+"box-"+H(e,"-grow","")+B+e+Me+H(e,"grow","positive")+e;case 4554:return B+H(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+Me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yn(e)-1-n>6)switch(ve(e,n+1)){case 109:if(ve(e,n+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+Jo+(ve(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~Al(e,"stretch")?G2(H(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(ve(e,n+1)!==115)break;case 6444:switch(ve(e,yn(e)-3-(~Al(e,"!important")&&10))){case 107:return H(e,":",":"+B)+e;case 101:return H(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+B+(ve(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+Me+"$2box$3")+e}break;case 5936:switch(ve(e,n+11)){case 114:return B+e+Me+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+Me+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+Me+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return B+e+Me+e+e}return e}var Lg=function(n,t,r,a){if(n.length>-1&&!n.return)switch(n.type){case Uu:n.return=G2(n.value,n.length);break;case W2:return qt([Cr(n,{value:H(n.value,"@","@"+B)})],a);case $u:if(n.length)return hg(n.props,function(o){switch(pg(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return qt([Cr(n,{props:[H(o,/:(read-\w+)/,":"+Jo+"$1")]})],a);case"::placeholder":return qt([Cr(n,{props:[H(o,/:(plac\w+)/,":"+B+"input-$1")]}),Cr(n,{props:[H(o,/:(plac\w+)/,":"+Jo+"$1")]}),Cr(n,{props:[H(o,/:(plac\w+)/,Me+"input-$1")]})],a)}return""})}},Rg=[Lg],Dg=function(n){var t=n.key;if(t==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var k=v.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var a=n.stylisPlugins||Rg,o={},i,l=[];i=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(v){for(var k=v.getAttribute("data-emotion").split(" "),f=1;f<k.length;f++)o[k[f]]=!0;l.push(v)});var s,u=[Ig,Eg];{var c,d=[Mg,Tg(function(v){c.insert(v)})],h=xg(u.concat(a,d)),m=function(k){return qt(Sg(k),h)};s=function(k,f,p,y){c=p,m(k?k+"{"+f.styles+"}":f.styles),y&&(g.inserted[f.name]=!0)}}var g={key:t,sheet:new sg({key:t,container:i,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:o,registered:{},insert:s};return g.sheet.hydrate(l),g},$2={exports:{}},K={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he=typeof Symbol=="function"&&Symbol.for,Yu=he?Symbol.for("react.element"):60103,Ju=he?Symbol.for("react.portal"):60106,Ei=he?Symbol.for("react.fragment"):60107,Li=he?Symbol.for("react.strict_mode"):60108,Ri=he?Symbol.for("react.profiler"):60114,Di=he?Symbol.for("react.provider"):60109,Ai=he?Symbol.for("react.context"):60110,Qu=he?Symbol.for("react.async_mode"):60111,Fi=he?Symbol.for("react.concurrent_mode"):60111,_i=he?Symbol.for("react.forward_ref"):60112,Vi=he?Symbol.for("react.suspense"):60113,Ag=he?Symbol.for("react.suspense_list"):60120,Wi=he?Symbol.for("react.memo"):60115,Bi=he?Symbol.for("react.lazy"):60116,Fg=he?Symbol.for("react.block"):60121,_g=he?Symbol.for("react.fundamental"):60117,Vg=he?Symbol.for("react.responder"):60118,Wg=he?Symbol.for("react.scope"):60119;function Qe(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case Yu:switch(e=e.type,e){case Qu:case Fi:case Ei:case Ri:case Li:case Vi:return e;default:switch(e=e&&e.$$typeof,e){case Ai:case _i:case Bi:case Wi:case Di:return e;default:return n}}case Ju:return n}}}function U2(e){return Qe(e)===Fi}K.AsyncMode=Qu;K.ConcurrentMode=Fi;K.ContextConsumer=Ai;K.ContextProvider=Di;K.Element=Yu;K.ForwardRef=_i;K.Fragment=Ei;K.Lazy=Bi;K.Memo=Wi;K.Portal=Ju;K.Profiler=Ri;K.StrictMode=Li;K.Suspense=Vi;K.isAsyncMode=function(e){return U2(e)||Qe(e)===Qu};K.isConcurrentMode=U2;K.isContextConsumer=function(e){return Qe(e)===Ai};K.isContextProvider=function(e){return Qe(e)===Di};K.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yu};K.isForwardRef=function(e){return Qe(e)===_i};K.isFragment=function(e){return Qe(e)===Ei};K.isLazy=function(e){return Qe(e)===Bi};K.isMemo=function(e){return Qe(e)===Wi};K.isPortal=function(e){return Qe(e)===Ju};K.isProfiler=function(e){return Qe(e)===Ri};K.isStrictMode=function(e){return Qe(e)===Li};K.isSuspense=function(e){return Qe(e)===Vi};K.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ei||e===Fi||e===Ri||e===Li||e===Vi||e===Ag||typeof e=="object"&&e!==null&&(e.$$typeof===Bi||e.$$typeof===Wi||e.$$typeof===Di||e.$$typeof===Ai||e.$$typeof===_i||e.$$typeof===_g||e.$$typeof===Vg||e.$$typeof===Wg||e.$$typeof===Fg)};K.typeOf=Qe;$2.exports=K;var Bg=$2.exports,j2=Bg,Hg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Y2={};Y2[j2.ForwardRef]=Hg;Y2[j2.Memo]=zg;var Kg=!0;function Gg(e,n,t){var r="";return t.split(" ").forEach(function(a){e[a]!==void 0?n.push(e[a]+";"):a&&(r+=a+" ")}),r}var J2=function(n,t,r){var a=n.key+"-"+t.name;(r===!1||Kg===!1)&&n.registered[a]===void 0&&(n.registered[a]=t.styles)},$g=function(n,t,r){J2(n,t,r);var a=n.key+"-"+t.name;if(n.inserted[t.name]===void 0){var o=t;do n.insert(t===o?"."+a:"",o,n.sheet,!0),o=o.next;while(o!==void 0)}};function Ug(e){for(var n=0,t,r=0,a=e.length;a>=4;++r,a-=4)t=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(a){case 3:n^=(e.charCodeAt(r+2)&255)<<16;case 2:n^=(e.charCodeAt(r+1)&255)<<8;case 1:n^=e.charCodeAt(r)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}var jg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yg=/[A-Z]|^ms/g,Jg=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Q2=function(n){return n.charCodeAt(1)===45},q1=function(n){return n!=null&&typeof n!="boolean"},Ss=Pg(function(e){return Q2(e)?e:e.replace(Yg,"-$&").toLowerCase()}),Z1=function(n,t){switch(n){case"animation":case"animationName":if(typeof t=="string")return t.replace(Jg,function(r,a,o){return vn={name:a,styles:o,next:vn},a})}return jg[n]!==1&&!Q2(n)&&typeof t=="number"&&t!==0?t+"px":t};function ca(e,n,t){if(t==null)return"";var r=t;if(r.__emotion_styles!==void 0)return r;switch(typeof t){case"boolean":return"";case"object":{var a=t;if(a.anim===1)return vn={name:a.name,styles:a.styles,next:vn},a.name;var o=t;if(o.styles!==void 0){var i=o.next;if(i!==void 0)for(;i!==void 0;)vn={name:i.name,styles:i.styles,next:vn},i=i.next;var l=o.styles+";";return l}return Qg(e,n,t)}case"function":{if(e!==void 0){var s=vn,u=t(e);return vn=s,ca(e,n,u)}break}}var c=t;return c}function Qg(e,n,t){var r="";if(Array.isArray(t))for(var a=0;a<t.length;a++)r+=ca(e,n,t[a])+";";else for(var o in t){var i=t[o];if(typeof i!="object"){var l=i;q1(l)&&(r+=Ss(o)+":"+Z1(o,l)+";")}else if(Array.isArray(i)&&typeof i[0]=="string"&&n==null)for(var s=0;s<i.length;s++)q1(i[s])&&(r+=Ss(o)+":"+Z1(o,i[s])+";");else{var u=ca(e,n,i);switch(o){case"animation":case"animationName":{r+=Ss(o)+":"+u+";";break}default:r+=o+"{"+u+"}"}}}return r}var e0=/label:\s*([^\s;{]+)\s*(;|$)/g,vn;function X2(e,n,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,a="";vn=void 0;var o=e[0];if(o==null||o.raw===void 0)r=!1,a+=ca(t,n,o);else{var i=o;a+=i[0]}for(var l=1;l<e.length;l++)if(a+=ca(t,n,e[l]),r){var s=o;a+=s[l]}e0.lastIndex=0;for(var u="",c;(c=e0.exec(a))!==null;)u+="-"+c[1];var d=Ug(a)+u;return{name:d,styles:a,next:vn}}var Xg=function(n){return n()},qg=cc.useInsertionEffect?cc.useInsertionEffect:!1,Zg=qg||Xg,q2=x.createContext(typeof HTMLElement<"u"?Dg({key:"css"}):null);q2.Provider;var e9=function(n){return x.forwardRef(function(t,r){var a=x.useContext(q2);return n(t,a,r)})},n9=x.createContext({}),Xu={}.hasOwnProperty,_l="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",t9=function(n,t){var r={};for(var a in t)Xu.call(t,a)&&(r[a]=t[a]);return r[_l]=n,r},r9=function(n){var t=n.cache,r=n.serialized,a=n.isStringTag;return J2(t,r,a),Zg(function(){return $g(t,r,a)}),null},a9=e9(function(e,n,t){var r=e.css;typeof r=="string"&&n.registered[r]!==void 0&&(r=n.registered[r]);var a=e[_l],o=[r],i="";typeof e.className=="string"?i=Gg(n.registered,o,e.className):e.className!=null&&(i=e.className+" ");var l=X2(o,void 0,x.useContext(n9));i+=n.key+"-"+l.name;var s={};for(var u in e)Xu.call(e,u)&&u!=="css"&&u!==_l&&(s[u]=e[u]);return s.className=i,t&&(s.ref=t),x.createElement(x.Fragment,null,x.createElement(r9,{cache:n,serialized:l,isStringTag:typeof a=="string"}),x.createElement(a,s))}),o9=a9,L=function(n,t){var r=arguments;if(t==null||!Xu.call(t,"css"))return x.createElement.apply(void 0,r);var a=r.length,o=new Array(a);o[0]=o9,o[1]=t9(n,t);for(var i=2;i<a;i++)o[i]=r[i];return x.createElement.apply(null,o)};(function(e){var n;n||(n=e.JSX||(e.JSX={}))})(L||(L={}));function qu(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return X2(n)}function i9(){var e=qu.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function s9(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}const l9=Math.min,u9=Math.max,Qo=Math.round,Ka=Math.floor,Xo=e=>({x:e,y:e});function c9(e){const{x:n,y:t,width:r,height:a}=e;return{width:r,height:a,top:t,left:n,right:n+r,bottom:t+a,x:n,y:t}}function Hi(){return typeof window<"u"}function Z2(e){return np(e)?(e.nodeName||"").toLowerCase():"#document"}function _n(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function ep(e){var n;return(n=(np(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function np(e){return Hi()?e instanceof Node||e instanceof _n(e).Node:!1}function d9(e){return Hi()?e instanceof Element||e instanceof _n(e).Element:!1}function Zu(e){return Hi()?e instanceof HTMLElement||e instanceof _n(e).HTMLElement:!1}function n0(e){return!Hi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof _n(e).ShadowRoot}function tp(e){const{overflow:n,overflowX:t,overflowY:r,display:a}=ec(e);return/auto|scroll|overlay|hidden|clip/.test(n+r+t)&&a!=="inline"&&a!=="contents"}let Cs;function f9(){return Cs==null&&(Cs=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Cs}function p9(e){return/^(html|body|#document)$/.test(Z2(e))}function ec(e){return _n(e).getComputedStyle(e)}function h9(e){if(Z2(e)==="html")return e;const n=e.assignedSlot||e.parentNode||n0(e)&&e.host||ep(e);return n0(n)?n.host:n}function rp(e){const n=h9(e);return p9(n)?e.ownerDocument?e.ownerDocument.body:e.body:Zu(n)&&tp(n)?n:rp(n)}function qo(e,n,t){var r;n===void 0&&(n=[]),t===void 0&&(t=!0);const a=rp(e),o=a===((r=e.ownerDocument)==null?void 0:r.body),i=_n(a);if(o){const l=Vl(i);return n.concat(i,i.visualViewport||[],tp(a)?a:[],l&&t?qo(l):[])}else return n.concat(a,qo(a,[],t))}function Vl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function m9(e){const n=ec(e);let t=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const a=Zu(e),o=a?e.offsetWidth:t,i=a?e.offsetHeight:r,l=Qo(t)!==o||Qo(r)!==i;return l&&(t=o,r=i),{width:t,height:r,$:l}}function nc(e){return d9(e)?e:e.contextElement}function t0(e){const n=nc(e);if(!Zu(n))return Xo(1);const t=n.getBoundingClientRect(),{width:r,height:a,$:o}=m9(n);let i=(o?Qo(t.width):t.width)/r,l=(o?Qo(t.height):t.height)/a;return(!i||!Number.isFinite(i))&&(i=1),(!l||!Number.isFinite(l))&&(l=1),{x:i,y:l}}const g9=Xo(0);function y9(e){const n=_n(e);return!f9()||!n.visualViewport?g9:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function v9(e,n,t){return!1}function r0(e,n,t,r){n===void 0&&(n=!1);const a=e.getBoundingClientRect(),o=nc(e);let i=Xo(1);n&&(i=t0(e));const l=v9()?y9(o):Xo(0);let s=(a.left+l.x)/i.x,u=(a.top+l.y)/i.y,c=a.width/i.x,d=a.height/i.y;if(o){const h=_n(o),m=r;let g=h,v=Vl(g);for(;v&&r&&m!==g;){const k=t0(v),f=v.getBoundingClientRect(),p=ec(v),y=f.left+(v.clientLeft+parseFloat(p.paddingLeft))*k.x,w=f.top+(v.clientTop+parseFloat(p.paddingTop))*k.y;s*=k.x,u*=k.y,c*=k.x,d*=k.y,s+=y,u+=w,g=_n(v),v=Vl(g)}}return c9({width:c,height:d,x:s,y:u})}function ap(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function k9(e,n){let t=null,r;const a=ep(e);function o(){var l;clearTimeout(r),(l=t)==null||l.disconnect(),t=null}function i(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:c,top:d,width:h,height:m}=u;if(l||n(),!h||!m)return;const g=Ka(d),v=Ka(a.clientWidth-(c+h)),k=Ka(a.clientHeight-(d+m)),f=Ka(c),y={rootMargin:-g+"px "+-v+"px "+-k+"px "+-f+"px",threshold:u9(0,l9(1,s))||1};let w=!0;function S(M){const C=M[0].intersectionRatio;if(C!==s){if(!w)return i();C?i(!1,C):r=setTimeout(()=>{i(!1,1e-7)},1e3)}C===1&&!ap(u,e.getBoundingClientRect())&&i(),w=!1}try{t=new IntersectionObserver(S,{...y,root:a.ownerDocument})}catch{t=new IntersectionObserver(S,y)}t.observe(e)}return i(!0),o}function w9(e,n,t,r){r===void 0&&(r={});const{ancestorScroll:a=!0,ancestorResize:o=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=nc(e),c=a||o?[...u?qo(u):[],...n?qo(n):[]]:[];c.forEach(f=>{a&&f.addEventListener("scroll",t,{passive:!0}),o&&f.addEventListener("resize",t)});const d=u&&l?k9(u,t):null;let h=-1,m=null;i&&(m=new ResizeObserver(f=>{let[p]=f;p&&p.target===u&&m&&n&&(m.unobserve(n),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var y;(y=m)==null||y.observe(n)})),t()}),u&&!s&&m.observe(u),n&&m.observe(n));let g,v=s?r0(e):null;s&&k();function k(){const f=r0(e);v&&!ap(v,f)&&t(),v=f,g=requestAnimationFrame(k)}return t(),()=>{var f;c.forEach(p=>{a&&p.removeEventListener("scroll",t),o&&p.removeEventListener("resize",t)}),d==null||d(),(f=m)==null||f.disconnect(),m=null,s&&cancelAnimationFrame(g)}}var Wl=x.useLayoutEffect,S9=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Zo=function(){};function C9(e,n){return n?n[0]==="-"?e+n:e+"__"+n:e}function M9(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];var o=[].concat(r);if(n&&e)for(var i in n)n.hasOwnProperty(i)&&n[i]&&o.push("".concat(C9(e,i)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var a0=function(n){return L9(n)?n.filter(Boolean):xt(n)==="object"&&n!==null?[n]:[]},op=function(n){n.className,n.clearValue,n.cx,n.getStyles,n.getClassNames,n.getValue,n.hasValue,n.isMulti,n.isRtl,n.options,n.selectOption,n.selectProps,n.setValue,n.theme;var t=Wn(n,S9);return R({},t)},te=function(n,t,r){var a=n.cx,o=n.getStyles,i=n.getClassNames,l=n.className;return{css:o(t,n),className:a(r??{},i(t,n),l)}};function zi(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function x9(e){return zi(e)?window.innerHeight:e.clientHeight}function ip(e){return zi(e)?window.pageYOffset:e.scrollTop}function ei(e,n){if(zi(e)){window.scrollTo(0,n);return}e.scrollTop=n}function T9(e){var n=getComputedStyle(e),t=n.position==="absolute",r=/(auto|scroll)/;if(n.position==="fixed")return document.documentElement;for(var a=e;a=a.parentElement;)if(n=getComputedStyle(a),!(t&&n.position==="static")&&r.test(n.overflow+n.overflowY+n.overflowX))return a;return document.documentElement}function P9(e,n,t,r){return t*((e=e/r-1)*e*e+1)+n}function Ga(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Zo,a=ip(e),o=n-a,i=10,l=0;function s(){l+=i;var u=P9(l,a,o,t);ei(e,u),l<t?window.requestAnimationFrame(s):r(e)}s()}function o0(e,n){var t=e.getBoundingClientRect(),r=n.getBoundingClientRect(),a=n.offsetHeight/3;r.bottom+a>t.bottom?ei(e,Math.min(n.offsetTop+n.clientHeight-e.offsetHeight+a,e.scrollHeight)):r.top-a<t.top&&ei(e,Math.max(n.offsetTop-a,0))}function b9(e){var n=e.getBoundingClientRect();return{bottom:n.bottom,height:n.height,left:n.left,right:n.right,top:n.top,width:n.width}}function i0(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function O9(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var sp=!1,N9={get passive(){return sp=!0}},$a=typeof window<"u"?window:{};$a.addEventListener&&$a.removeEventListener&&($a.addEventListener("p",Zo,N9),$a.removeEventListener("p",Zo,!1));var I9=sp;function E9(e){return e!=null}function L9(e){return Array.isArray(e)}function Ua(e,n,t){return e?n:t}var R9=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var o=Object.entries(n).filter(function(i){var l=En(i,1),s=l[0];return!r.includes(s)});return o.reduce(function(i,l){var s=En(l,2),u=s[0],c=s[1];return i[u]=c,i},{})},D9=["children","innerProps"],A9=["children","innerProps"];function F9(e){var n=e.maxHeight,t=e.menuEl,r=e.minHeight,a=e.placement,o=e.shouldScroll,i=e.isFixedPosition,l=e.controlHeight,s=T9(t),u={placement:"bottom",maxHeight:n};if(!t||!t.offsetParent)return u;var c=s.getBoundingClientRect(),d=c.height,h=t.getBoundingClientRect(),m=h.bottom,g=h.height,v=h.top,k=t.offsetParent.getBoundingClientRect(),f=k.top,p=i?window.innerHeight:x9(s),y=ip(s),w=parseInt(getComputedStyle(t).marginBottom,10),S=parseInt(getComputedStyle(t).marginTop,10),M=f-S,C=p-v,T=M+y,I=d-y-v,E=m-p+y+w,G=y+v-S,J=160;switch(a){case"auto":case"bottom":if(C>=g)return{placement:"bottom",maxHeight:n};if(I>=g&&!i)return o&&Ga(s,E,J),{placement:"bottom",maxHeight:n};if(!i&&I>=r||i&&C>=r){o&&Ga(s,E,J);var Pe=i?C-w:I-w;return{placement:"bottom",maxHeight:Pe}}if(a==="auto"||i){var Xe=n,ae=i?M:T;return ae>=r&&(Xe=Math.min(ae-w-l,n)),{placement:"top",maxHeight:Xe}}if(a==="bottom")return o&&ei(s,E),{placement:"bottom",maxHeight:n};break;case"top":if(M>=g)return{placement:"top",maxHeight:n};if(T>=g&&!i)return o&&Ga(s,G,J),{placement:"top",maxHeight:n};if(!i&&T>=r||i&&M>=r){var X=n;return(!i&&T>=r||i&&M>=r)&&(X=i?M-S:T-S),o&&Ga(s,G,J),{placement:"top",maxHeight:X}}return{placement:"bottom",maxHeight:n};default:throw new Error('Invalid placement provided "'.concat(a,'".'))}return u}function _9(e){var n={bottom:"top",top:"bottom"};return e?n[e]:"bottom"}var lp=function(n){return n==="auto"?"bottom":n},V9=function(n,t){var r,a=n.placement,o=n.theme,i=o.borderRadius,l=o.spacing,s=o.colors;return R((r={label:"menu"},Nr(r,_9(a),"100%"),Nr(r,"position","absolute"),Nr(r,"width","100%"),Nr(r,"zIndex",1),r),t?{}:{backgroundColor:s.neutral0,borderRadius:i,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},up=x.createContext(null),W9=function(n){var t=n.children,r=n.minMenuHeight,a=n.maxMenuHeight,o=n.menuPlacement,i=n.menuPosition,l=n.menuShouldScrollIntoView,s=n.theme,u=x.useContext(up)||{},c=u.setPortalPlacement,d=x.useRef(null),h=x.useState(a),m=En(h,2),g=m[0],v=m[1],k=x.useState(null),f=En(k,2),p=f[0],y=f[1],w=s.spacing.controlHeight;return Wl(function(){var S=d.current;if(S){var M=i==="fixed",C=l&&!M,T=F9({maxHeight:a,menuEl:S,minHeight:r,placement:o,shouldScroll:C,isFixedPosition:M,controlHeight:w});v(T.maxHeight),y(T.placement),c==null||c(T.placement)}},[a,o,i,l,r,c,w]),t({ref:d,placerProps:R(R({},n),{},{placement:p||lp(o),maxHeight:g})})},B9=function(n){var t=n.children,r=n.innerRef,a=n.innerProps;return L("div",A({},te(n,"menu",{menu:!0}),{ref:r},a),t)},H9=B9,z9=function(n,t){var r=n.maxHeight,a=n.theme.spacing.baseUnit;return R({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},t?{}:{paddingBottom:a,paddingTop:a})},K9=function(n){var t=n.children,r=n.innerProps,a=n.innerRef,o=n.isMulti;return L("div",A({},te(n,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:a},r),t)},cp=function(n,t){var r=n.theme,a=r.spacing.baseUnit,o=r.colors;return R({textAlign:"center"},t?{}:{color:o.neutral40,padding:"".concat(a*2,"px ").concat(a*3,"px")})},G9=cp,$9=cp,U9=function(n){var t=n.children,r=t===void 0?"No options":t,a=n.innerProps,o=Wn(n,D9);return L("div",A({},te(R(R({},o),{},{children:r,innerProps:a}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),a),r)},j9=function(n){var t=n.children,r=t===void 0?"Loading...":t,a=n.innerProps,o=Wn(n,A9);return L("div",A({},te(R(R({},o),{},{children:r,innerProps:a}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),a),r)},Y9=function(n){var t=n.rect,r=n.offset,a=n.position;return{left:t.left,position:a,top:r,width:t.width,zIndex:1}},J9=function(n){var t=n.appendTo,r=n.children,a=n.controlElement,o=n.innerProps,i=n.menuPlacement,l=n.menuPosition,s=x.useRef(null),u=x.useRef(null),c=x.useState(lp(i)),d=En(c,2),h=d[0],m=d[1],g=x.useMemo(function(){return{setPortalPlacement:m}},[]),v=x.useState(null),k=En(v,2),f=k[0],p=k[1],y=x.useCallback(function(){if(a){var C=b9(a),T=l==="fixed"?0:window.pageYOffset,I=C[h]+T;(I!==(f==null?void 0:f.offset)||C.left!==(f==null?void 0:f.rect.left)||C.width!==(f==null?void 0:f.rect.width))&&p({offset:I,rect:C})}},[a,l,h,f==null?void 0:f.offset,f==null?void 0:f.rect.left,f==null?void 0:f.rect.width]);Wl(function(){y()},[y]);var w=x.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),a&&s.current&&(u.current=w9(a,s.current,y,{elementResize:"ResizeObserver"in window}))},[a,y]);Wl(function(){w()},[w]);var S=x.useCallback(function(C){s.current=C,w()},[w]);if(!t&&l!=="fixed"||!f)return null;var M=L("div",A({ref:S},te(R(R({},n),{},{offset:f.offset,position:l,rect:f.rect}),"menuPortal",{"menu-portal":!0}),o),r);return L(up.Provider,{value:g},t?Vf.createPortal(M,t):M)},Q9=function(n){var t=n.isDisabled,r=n.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:t?"none":void 0,position:"relative"}},X9=function(n){var t=n.children,r=n.innerProps,a=n.isDisabled,o=n.isRtl;return L("div",A({},te(n,"container",{"--is-disabled":a,"--is-rtl":o}),r),t)},q9=function(n,t){var r=n.theme.spacing,a=n.isMulti,o=n.hasValue,i=n.selectProps.controlShouldRenderValue;return R({alignItems:"center",display:a&&o&&i?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},t?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},Z9=function(n){var t=n.children,r=n.innerProps,a=n.isMulti,o=n.hasValue;return L("div",A({},te(n,"valueContainer",{"value-container":!0,"value-container--is-multi":a,"value-container--has-value":o}),r),t)},e7=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},n7=function(n){var t=n.children,r=n.innerProps;return L("div",A({},te(n,"indicatorsContainer",{indicators:!0}),r),t)},s0,t7=["size"],r7=["innerProps","isRtl","size"],a7={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},dp=function(n){var t=n.size,r=Wn(n,t7);return L("svg",A({height:t,width:t,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:a7},r))},tc=function(n){return L(dp,A({size:20},n),L("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},fp=function(n){return L(dp,A({size:20},n),L("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},pp=function(n,t){var r=n.isFocused,a=n.theme,o=a.spacing.baseUnit,i=a.colors;return R({label:"indicatorContainer",display:"flex",transition:"color 150ms"},t?{}:{color:r?i.neutral60:i.neutral20,padding:o*2,":hover":{color:r?i.neutral80:i.neutral40}})},o7=pp,i7=function(n){var t=n.children,r=n.innerProps;return L("div",A({},te(n,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),t||L(fp,null))},s7=pp,l7=function(n){var t=n.children,r=n.innerProps;return L("div",A({},te(n,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),t||L(tc,null))},u7=function(n,t){var r=n.isDisabled,a=n.theme,o=a.spacing.baseUnit,i=a.colors;return R({label:"indicatorSeparator",alignSelf:"stretch",width:1},t?{}:{backgroundColor:r?i.neutral10:i.neutral20,marginBottom:o*2,marginTop:o*2})},c7=function(n){var t=n.innerProps;return L("span",A({},t,te(n,"indicatorSeparator",{"indicator-separator":!0})))},d7=i9(s0||(s0=s9([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),f7=function(n,t){var r=n.isFocused,a=n.size,o=n.theme,i=o.colors,l=o.spacing.baseUnit;return R({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:a,lineHeight:1,marginRight:a,textAlign:"center",verticalAlign:"middle"},t?{}:{color:r?i.neutral60:i.neutral20,padding:l*2})},Ms=function(n){var t=n.delay,r=n.offset;return L("span",{css:qu({animation:"".concat(d7," 1s ease-in-out ").concat(t,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},p7=function(n){var t=n.innerProps,r=n.isRtl,a=n.size,o=a===void 0?4:a,i=Wn(n,r7);return L("div",A({},te(R(R({},i),{},{innerProps:t,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),t),L(Ms,{delay:0,offset:r}),L(Ms,{delay:160,offset:!0}),L(Ms,{delay:320,offset:!r}))},h7=function(n,t){var r=n.isDisabled,a=n.isFocused,o=n.theme,i=o.colors,l=o.borderRadius,s=o.spacing;return R({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},t?{}:{backgroundColor:r?i.neutral5:i.neutral0,borderColor:r?i.neutral10:a?i.primary:i.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:a?"0 0 0 1px ".concat(i.primary):void 0,"&:hover":{borderColor:a?i.primary:i.neutral30}})},m7=function(n){var t=n.children,r=n.isDisabled,a=n.isFocused,o=n.innerRef,i=n.innerProps,l=n.menuIsOpen;return L("div",A({ref:o},te(n,"control",{control:!0,"control--is-disabled":r,"control--is-focused":a,"control--menu-is-open":l}),i,{"aria-disabled":r||void 0}),t)},g7=m7,y7=["data"],v7=function(n,t){var r=n.theme.spacing;return t?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},k7=function(n){var t=n.children,r=n.cx,a=n.getStyles,o=n.getClassNames,i=n.Heading,l=n.headingProps,s=n.innerProps,u=n.label,c=n.theme,d=n.selectProps;return L("div",A({},te(n,"group",{group:!0}),s),L(i,A({},l,{selectProps:d,theme:c,getStyles:a,getClassNames:o,cx:r}),u),L("div",null,t))},w7=function(n,t){var r=n.theme,a=r.colors,o=r.spacing;return R({label:"group",cursor:"default",display:"block"},t?{}:{color:a.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},S7=function(n){var t=op(n);t.data;var r=Wn(t,y7);return L("div",A({},te(n,"groupHeading",{"group-heading":!0}),r))},C7=k7,M7=["innerRef","isDisabled","isHidden","inputClassName"],x7=function(n,t){var r=n.isDisabled,a=n.value,o=n.theme,i=o.spacing,l=o.colors;return R(R({visibility:r?"hidden":"visible",transform:a?"translateZ(0)":""},T7),t?{}:{margin:i.baseUnit/2,paddingBottom:i.baseUnit/2,paddingTop:i.baseUnit/2,color:l.neutral80})},hp={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},T7={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":R({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},hp)},P7=function(n){return R({label:"input",color:"inherit",background:0,opacity:n?0:1,width:"100%"},hp)},b7=function(n){var t=n.cx,r=n.value,a=op(n),o=a.innerRef,i=a.isDisabled,l=a.isHidden,s=a.inputClassName,u=Wn(a,M7);return L("div",A({},te(n,"input",{"input-container":!0}),{"data-value":r||""}),L("input",A({className:t({input:!0},s),ref:o,style:P7(l),disabled:i},u)))},O7=b7,N7=function(n,t){var r=n.theme,a=r.spacing,o=r.borderRadius,i=r.colors;return R({label:"multiValue",display:"flex",minWidth:0},t?{}:{backgroundColor:i.neutral10,borderRadius:o/2,margin:a.baseUnit/2})},I7=function(n,t){var r=n.theme,a=r.borderRadius,o=r.colors,i=n.cropWithEllipsis;return R({overflow:"hidden",textOverflow:i||i===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},t?{}:{borderRadius:a/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},E7=function(n,t){var r=n.theme,a=r.spacing,o=r.borderRadius,i=r.colors,l=n.isFocused;return R({alignItems:"center",display:"flex"},t?{}:{borderRadius:o/2,backgroundColor:l?i.dangerLight:void 0,paddingLeft:a.baseUnit,paddingRight:a.baseUnit,":hover":{backgroundColor:i.dangerLight,color:i.danger}})},mp=function(n){var t=n.children,r=n.innerProps;return L("div",r,t)},L7=mp,R7=mp;function D7(e){var n=e.children,t=e.innerProps;return L("div",A({role:"button"},t),n||L(tc,{size:14}))}var A7=function(n){var t=n.children,r=n.components,a=n.data,o=n.innerProps,i=n.isDisabled,l=n.removeProps,s=n.selectProps,u=r.Container,c=r.Label,d=r.Remove;return L(u,{data:a,innerProps:R(R({},te(n,"multiValue",{"multi-value":!0,"multi-value--is-disabled":i})),o),selectProps:s},L(c,{data:a,innerProps:R({},te(n,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},t),L(d,{data:a,innerProps:R(R({},te(n,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(t||"option")},l),selectProps:s}))},F7=A7,_7=function(n,t){var r=n.isDisabled,a=n.isFocused,o=n.isSelected,i=n.theme,l=i.spacing,s=i.colors;return R({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},t?{}:{backgroundColor:o?s.primary:a?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},V7=function(n){var t=n.children,r=n.isDisabled,a=n.isFocused,o=n.isSelected,i=n.innerRef,l=n.innerProps;return L("div",A({},te(n,"option",{option:!0,"option--is-disabled":r,"option--is-focused":a,"option--is-selected":o}),{ref:i,"aria-disabled":r},l),t)},W7=V7,B7=function(n,t){var r=n.theme,a=r.spacing,o=r.colors;return R({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},t?{}:{color:o.neutral50,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},H7=function(n){var t=n.children,r=n.innerProps;return L("div",A({},te(n,"placeholder",{placeholder:!0}),r),t)},z7=H7,K7=function(n,t){var r=n.isDisabled,a=n.theme,o=a.spacing,i=a.colors;return R({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t?{}:{color:r?i.neutral40:i.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},G7=function(n){var t=n.children,r=n.isDisabled,a=n.innerProps;return L("div",A({},te(n,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),a),t)},$7=G7,U7={ClearIndicator:l7,Control:g7,DropdownIndicator:i7,DownChevron:fp,CrossIcon:tc,Group:C7,GroupHeading:S7,IndicatorsContainer:n7,IndicatorSeparator:c7,Input:O7,LoadingIndicator:p7,Menu:H9,MenuList:K9,MenuPortal:J9,LoadingMessage:j9,NoOptionsMessage:U9,MultiValue:F7,MultiValueContainer:L7,MultiValueLabel:R7,MultiValueRemove:D7,Option:W7,Placeholder:z7,SelectContainer:X9,SingleValue:$7,ValueContainer:Z9},j7=function(n){return R(R({},U7),n.components)},l0=Number.isNaN||function(n){return typeof n=="number"&&n!==n};function Y7(e,n){return!!(e===n||l0(e)&&l0(n))}function J7(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(!Y7(e[t],n[t]))return!1;return!0}function Q7(e,n){n===void 0&&(n=J7);var t=null;function r(){for(var a=[],o=0;o<arguments.length;o++)a[o]=arguments[o];if(t&&t.lastThis===this&&n(a,t.lastArgs))return t.lastResult;var i=e.apply(this,a);return t={lastResult:i,lastArgs:a,lastThis:this},i}return r.clear=function(){t=null},r}var X7={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},q7=function(n){return L("span",A({css:X7},n))},u0=q7,Z7={guidance:function(n){var t=n.isSearchable,r=n.isMulti,a=n.tabSelectsValue,o=n.context,i=n.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return i?"".concat(n["aria-label"]||"Select"," is focused ").concat(t?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(n){var t=n.action,r=n.label,a=r===void 0?"":r,o=n.labels,i=n.isDisabled;switch(t){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(a,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return i?"option ".concat(a," is disabled. Select another option."):"option ".concat(a,", selected.");default:return""}},onFocus:function(n){var t=n.context,r=n.focused,a=n.options,o=n.label,i=o===void 0?"":o,l=n.selectValue,s=n.isDisabled,u=n.isSelected,c=n.isAppleDevice,d=function(v,k){return v&&v.length?"".concat(v.indexOf(k)+1," of ").concat(v.length):""};if(t==="value"&&l)return"value ".concat(i," focused, ").concat(d(l,r),".");if(t==="menu"&&c){var h=s?" disabled":"",m="".concat(u?" selected":"").concat(h);return"".concat(i).concat(m,", ").concat(d(a,r),".")}return""},onFilter:function(n){var t=n.inputValue,r=n.resultsMessage;return"".concat(r).concat(t?" for search term "+t:"",".")}},ey=function(n){var t=n.ariaSelection,r=n.focusedOption,a=n.focusedValue,o=n.focusableOptions,i=n.isFocused,l=n.selectValue,s=n.selectProps,u=n.id,c=n.isAppleDevice,d=s.ariaLiveMessages,h=s.getOptionLabel,m=s.inputValue,g=s.isMulti,v=s.isOptionDisabled,k=s.isSearchable,f=s.menuIsOpen,p=s.options,y=s.screenReaderStatus,w=s.tabSelectsValue,S=s.isLoading,M=s["aria-label"],C=s["aria-live"],T=x.useMemo(function(){return R(R({},Z7),d||{})},[d]),I=x.useMemo(function(){var ae="";if(t&&T.onChange){var X=t.option,Re=t.options,O=t.removedValue,D=t.removedValues,F=t.value,$=function(xn){return Array.isArray(xn)?null:xn},_=O||X||$(F),de=_?h(_):"",me=Re||D||void 0,qe=me?me.map(h):[],se=R({isDisabled:_&&v(_,l),label:de,labels:qe},t);ae=T.onChange(se)}return ae},[t,T,v,l,h]),E=x.useMemo(function(){var ae="",X=r||a,Re=!!(r&&l&&l.includes(r));if(X&&T.onFocus){var O={focused:X,label:h(X),isDisabled:v(X,l),isSelected:Re,options:o,context:X===r?"menu":"value",selectValue:l,isAppleDevice:c};ae=T.onFocus(O)}return ae},[r,a,h,v,T,o,l,c]),G=x.useMemo(function(){var ae="";if(f&&p.length&&!S&&T.onFilter){var X=y({count:o.length});ae=T.onFilter({inputValue:m,resultsMessage:X})}return ae},[o,m,f,T,p,y,S]),J=(t==null?void 0:t.action)==="initial-input-focus",Pe=x.useMemo(function(){var ae="";if(T.guidance){var X=a?"value":f?"menu":"input";ae=T.guidance({"aria-label":M,context:X,isDisabled:r&&v(r,l),isMulti:g,isSearchable:k,tabSelectsValue:w,isInitialFocus:J})}return ae},[M,r,a,g,v,k,f,T,l,w,J]),Xe=L(x.Fragment,null,L("span",{id:"aria-selection"},I),L("span",{id:"aria-focused"},E),L("span",{id:"aria-results"},G),L("span",{id:"aria-guidance"},Pe));return L(x.Fragment,null,L(u0,{id:u},J&&Xe),L(u0,{"aria-live":C,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},i&&!J&&Xe))},ny=ey,Bl=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],ty=new RegExp("["+Bl.map(function(e){return e.letters}).join("")+"]","g"),gp={};for(var xs=0;xs<Bl.length;xs++)for(var Ts=Bl[xs],Ps=0;Ps<Ts.letters.length;Ps++)gp[Ts.letters[Ps]]=Ts.base;var yp=function(n){return n.replace(ty,function(t){return gp[t]})},ry=Q7(yp),c0=function(n){return n.replace(/^\s+|\s+$/g,"")},ay=function(n){return"".concat(n.label," ").concat(n.value)},oy=function(n){return function(t,r){if(t.data.__isNew__)return!0;var a=R({ignoreCase:!0,ignoreAccents:!0,stringify:ay,trim:!0,matchFrom:"any"},n),o=a.ignoreCase,i=a.ignoreAccents,l=a.stringify,s=a.trim,u=a.matchFrom,c=s?c0(r):r,d=s?c0(l(t)):l(t);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),i&&(c=ry(c),d=yp(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},iy=["innerRef"];function sy(e){var n=e.innerRef,t=Wn(e,iy),r=R9(t,"onExited","in","enter","exit","appear");return L("input",A({ref:n},r,{css:qu({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var ly=function(n){n.cancelable&&n.preventDefault(),n.stopPropagation()};function uy(e){var n=e.isEnabled,t=e.onBottomArrive,r=e.onBottomLeave,a=e.onTopArrive,o=e.onTopLeave,i=x.useRef(!1),l=x.useRef(!1),s=x.useRef(0),u=x.useRef(null),c=x.useCallback(function(k,f){if(u.current!==null){var p=u.current,y=p.scrollTop,w=p.scrollHeight,S=p.clientHeight,M=u.current,C=f>0,T=w-S-y,I=!1;T>f&&i.current&&(r&&r(k),i.current=!1),C&&l.current&&(o&&o(k),l.current=!1),C&&f>T?(t&&!i.current&&t(k),M.scrollTop=w,I=!0,i.current=!0):!C&&-f>y&&(a&&!l.current&&a(k),M.scrollTop=0,I=!0,l.current=!0),I&&ly(k)}},[t,r,a,o]),d=x.useCallback(function(k){c(k,k.deltaY)},[c]),h=x.useCallback(function(k){s.current=k.changedTouches[0].clientY},[]),m=x.useCallback(function(k){var f=s.current-k.changedTouches[0].clientY;c(k,f)},[c]),g=x.useCallback(function(k){if(k){var f=I9?{passive:!1}:!1;k.addEventListener("wheel",d,f),k.addEventListener("touchstart",h,f),k.addEventListener("touchmove",m,f)}},[m,h,d]),v=x.useCallback(function(k){k&&(k.removeEventListener("wheel",d,!1),k.removeEventListener("touchstart",h,!1),k.removeEventListener("touchmove",m,!1))},[m,h,d]);return x.useEffect(function(){if(n){var k=u.current;return g(k),function(){v(k)}}},[n,g,v]),function(k){u.current=k}}var d0=["boxSizing","height","overflow","paddingRight","position"],f0={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function p0(e){e.cancelable&&e.preventDefault()}function h0(e){e.stopPropagation()}function m0(){var e=this.scrollTop,n=this.scrollHeight,t=e+this.offsetHeight;e===0?this.scrollTop=1:t===n&&(this.scrollTop=e-1)}function g0(){return"ontouchstart"in window||navigator.maxTouchPoints}var y0=!!(typeof window<"u"&&window.document&&window.document.createElement),Mr=0,Et={capture:!1,passive:!1};function cy(e){var n=e.isEnabled,t=e.accountForScrollbars,r=t===void 0?!0:t,a=x.useRef({}),o=x.useRef(null),i=x.useCallback(function(s){if(y0){var u=document.body,c=u&&u.style;if(r&&d0.forEach(function(g){var v=c&&c[g];a.current[g]=v}),r&&Mr<1){var d=parseInt(a.current.paddingRight,10)||0,h=document.body?document.body.clientWidth:0,m=window.innerWidth-h+d||0;Object.keys(f0).forEach(function(g){var v=f0[g];c&&(c[g]=v)}),c&&(c.paddingRight="".concat(m,"px"))}u&&g0()&&(u.addEventListener("touchmove",p0,Et),s&&(s.addEventListener("touchstart",m0,Et),s.addEventListener("touchmove",h0,Et))),Mr+=1}},[r]),l=x.useCallback(function(s){if(y0){var u=document.body,c=u&&u.style;Mr=Math.max(Mr-1,0),r&&Mr<1&&d0.forEach(function(d){var h=a.current[d];c&&(c[d]=h)}),u&&g0()&&(u.removeEventListener("touchmove",p0,Et),s&&(s.removeEventListener("touchstart",m0,Et),s.removeEventListener("touchmove",h0,Et)))}},[r]);return x.useEffect(function(){if(n){var s=o.current;return i(s),function(){l(s)}}},[n,i,l]),function(s){o.current=s}}var dy=function(n){var t=n.target;return t.ownerDocument.activeElement&&t.ownerDocument.activeElement.blur()},fy={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function py(e){var n=e.children,t=e.lockEnabled,r=e.captureEnabled,a=r===void 0?!0:r,o=e.onBottomArrive,i=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=uy({isEnabled:a,onBottomArrive:o,onBottomLeave:i,onTopArrive:l,onTopLeave:s}),c=cy({isEnabled:t}),d=function(m){u(m),c(m)};return L(x.Fragment,null,t&&L("div",{onClick:dy,css:fy}),n(d))}var hy={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},my=function(n){var t=n.name,r=n.onFocus;return L("input",{required:!0,name:t,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:hy,value:"",onChange:function(){}})},gy=my;function rc(e){var n;return typeof window<"u"&&window.navigator!=null?e.test(((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.platform)||window.navigator.platform):!1}function yy(){return rc(/^iPhone/i)}function vp(){return rc(/^Mac/i)}function vy(){return rc(/^iPad/i)||vp()&&navigator.maxTouchPoints>1}function ky(){return yy()||vy()}function wy(){return vp()||ky()}var Sy=function(n){return n.label},Cy=function(n){return n.label},My=function(n){return n.value},xy=function(n){return!!n.isDisabled},Ty={clearIndicator:s7,container:Q9,control:h7,dropdownIndicator:o7,group:v7,groupHeading:w7,indicatorsContainer:e7,indicatorSeparator:u7,input:x7,loadingIndicator:f7,loadingMessage:$9,menu:V9,menuList:z9,menuPortal:Y9,multiValue:N7,multiValueLabel:I7,multiValueRemove:E7,noOptionsMessage:G9,option:_7,placeholder:B7,singleValue:K7,valueContainer:q9},Py={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},by=4,kp=4,Oy=38,Ny=kp*2,Iy={baseUnit:kp,controlHeight:Oy,menuGutter:Ny},bs={borderRadius:by,colors:Py,spacing:Iy},Ey={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:i0(),captureMenuScroll:!i0(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:oy(),formatGroupLabel:Sy,getOptionLabel:Cy,getOptionValue:My,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:xy,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!O9(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(n){var t=n.count;return"".concat(t," result").concat(t!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function v0(e,n,t,r){var a=Cp(e,n,t),o=Mp(e,n,t),i=Sp(e,n),l=ni(e,n);return{type:"option",data:n,isDisabled:a,isSelected:o,label:i,value:l,index:r}}function po(e,n){return e.options.map(function(t,r){if("options"in t){var a=t.options.map(function(i,l){return v0(e,i,n,l)}).filter(function(i){return w0(e,i)});return a.length>0?{type:"group",data:t,options:a,index:r}:void 0}var o=v0(e,t,n,r);return w0(e,o)?o:void 0}).filter(E9)}function wp(e){return e.reduce(function(n,t){return t.type==="group"?n.push.apply(n,Gu(t.options.map(function(r){return r.data}))):n.push(t.data),n},[])}function k0(e,n){return e.reduce(function(t,r){return r.type==="group"?t.push.apply(t,Gu(r.options.map(function(a){return{data:a.data,id:"".concat(n,"-").concat(r.index,"-").concat(a.index)}}))):t.push({data:r.data,id:"".concat(n,"-").concat(r.index)}),t},[])}function Ly(e,n){return wp(po(e,n))}function w0(e,n){var t=e.inputValue,r=t===void 0?"":t,a=n.data,o=n.isSelected,i=n.label,l=n.value;return(!Tp(e)||!o)&&xp(e,{label:i,value:l,data:a},r)}function Ry(e,n){var t=e.focusedValue,r=e.selectValue,a=r.indexOf(t);if(a>-1){var o=n.indexOf(t);if(o>-1)return t;if(a<n.length)return n[a]}return null}function Dy(e,n){var t=e.focusedOption;return t&&n.indexOf(t)>-1?t:n[0]}var Os=function(n,t){var r,a=(r=n.find(function(o){return o.data===t}))===null||r===void 0?void 0:r.id;return a||null},Sp=function(n,t){return n.getOptionLabel(t)},ni=function(n,t){return n.getOptionValue(t)};function Cp(e,n,t){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(n,t):!1}function Mp(e,n,t){if(t.indexOf(n)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(n,t);var r=ni(e,n);return t.some(function(a){return ni(e,a)===r})}function xp(e,n,t){return e.filterOption?e.filterOption(n,t):!0}var Tp=function(n){var t=n.hideSelectedOptions,r=n.isMulti;return t===void 0?r:t},Ay=1,Pp=function(e){qm(t,e);var n=ng(t);function t(r){var a;if(Qm(this,t),a=n.call(this,r),a.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},a.blockOptionHover=!1,a.isComposing=!1,a.commonProps=void 0,a.initialTouchX=0,a.initialTouchY=0,a.openAfterFocus=!1,a.scrollToFocusedOptionOnUpdate=!1,a.userIsDragging=void 0,a.controlRef=null,a.getControlRef=function(s){a.controlRef=s},a.focusedOptionRef=null,a.getFocusedOptionRef=function(s){a.focusedOptionRef=s},a.menuListRef=null,a.getMenuListRef=function(s){a.menuListRef=s},a.inputRef=null,a.getInputRef=function(s){a.inputRef=s},a.focus=a.focusInput,a.blur=a.blurInput,a.onChange=function(s,u){var c=a.props,d=c.onChange,h=c.name;u.name=h,a.ariaOnChange(s,u),d(s,u)},a.setValue=function(s,u,c){var d=a.props,h=d.closeMenuOnSelect,m=d.isMulti,g=d.inputValue;a.onInputChange("",{action:"set-value",prevInputValue:g}),h&&(a.setState({inputIsHiddenAfterUpdate:!m}),a.onMenuClose()),a.setState({clearFocusValueOnUpdate:!0}),a.onChange(s,{action:u,option:c})},a.selectOption=function(s){var u=a.props,c=u.blurInputOnSelect,d=u.isMulti,h=u.name,m=a.state.selectValue,g=d&&a.isOptionSelected(s,m),v=a.isOptionDisabled(s,m);if(g){var k=a.getOptionValue(s);a.setValue(m.filter(function(f){return a.getOptionValue(f)!==k}),"deselect-option",s)}else if(!v)d?a.setValue([].concat(Gu(m),[s]),"select-option",s):a.setValue(s,"select-option");else{a.ariaOnChange(s,{action:"select-option",option:s,name:h});return}c&&a.blurInput()},a.removeValue=function(s){var u=a.props.isMulti,c=a.state.selectValue,d=a.getOptionValue(s),h=c.filter(function(g){return a.getOptionValue(g)!==d}),m=Ua(u,h,h[0]||null);a.onChange(m,{action:"remove-value",removedValue:s}),a.focusInput()},a.clearValue=function(){var s=a.state.selectValue;a.onChange(Ua(a.props.isMulti,[],null),{action:"clear",removedValues:s})},a.popValue=function(){var s=a.props.isMulti,u=a.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),h=Ua(s,d,d[0]||null);c&&a.onChange(h,{action:"pop-value",removedValue:c})},a.getFocusedOptionId=function(s){return Os(a.state.focusableOptionsWithIds,s)},a.getFocusableOptionsWithIds=function(){return k0(po(a.props,a.state.selectValue),a.getElementId("option"))},a.getValue=function(){return a.state.selectValue},a.cx=function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return M9.apply(void 0,[a.props.classNamePrefix].concat(u))},a.getOptionLabel=function(s){return Sp(a.props,s)},a.getOptionValue=function(s){return ni(a.props,s)},a.getStyles=function(s,u){var c=a.props.unstyled,d=Ty[s](u,c);d.boxSizing="border-box";var h=a.props.styles[s];return h?h(d,u):d},a.getClassNames=function(s,u){var c,d;return(c=(d=a.props.classNames)[s])===null||c===void 0?void 0:c.call(d,u)},a.getElementId=function(s){return"".concat(a.state.instancePrefix,"-").concat(s)},a.getComponents=function(){return j7(a.props)},a.buildCategorizedOptions=function(){return po(a.props,a.state.selectValue)},a.getCategorizedOptions=function(){return a.props.menuIsOpen?a.buildCategorizedOptions():[]},a.buildFocusableOptions=function(){return wp(a.buildCategorizedOptions())},a.getFocusableOptions=function(){return a.props.menuIsOpen?a.buildFocusableOptions():[]},a.ariaOnChange=function(s,u){a.setState({ariaSelection:R({value:s},u)})},a.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),a.focusInput())},a.onMenuMouseMove=function(s){a.blockOptionHover=!1},a.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=a.props.openMenuOnClick;a.state.isFocused?a.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&a.onMenuClose():u&&a.openMenu("first"):(u&&(a.openAfterFocus=!0),a.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},a.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!a.props.isDisabled){var u=a.props,c=u.isMulti,d=u.menuIsOpen;a.focusInput(),d?(a.setState({inputIsHiddenAfterUpdate:!c}),a.onMenuClose()):a.openMenu("first"),s.preventDefault()}},a.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(a.clearValue(),s.preventDefault(),a.openAfterFocus=!1,s.type==="touchend"?a.focusInput():setTimeout(function(){return a.focusInput()}))},a.onScroll=function(s){typeof a.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&zi(s.target)&&a.props.onMenuClose():typeof a.props.closeMenuOnScroll=="function"&&a.props.closeMenuOnScroll(s)&&a.props.onMenuClose()},a.onCompositionStart=function(){a.isComposing=!0},a.onCompositionEnd=function(){a.isComposing=!1},a.onTouchStart=function(s){var u=s.touches,c=u&&u.item(0);c&&(a.initialTouchX=c.clientX,a.initialTouchY=c.clientY,a.userIsDragging=!1)},a.onTouchMove=function(s){var u=s.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-a.initialTouchX),h=Math.abs(c.clientY-a.initialTouchY),m=5;a.userIsDragging=d>m||h>m}},a.onTouchEnd=function(s){a.userIsDragging||(a.controlRef&&!a.controlRef.contains(s.target)&&a.menuListRef&&!a.menuListRef.contains(s.target)&&a.blurInput(),a.initialTouchX=0,a.initialTouchY=0)},a.onControlTouchEnd=function(s){a.userIsDragging||a.onControlMouseDown(s)},a.onClearIndicatorTouchEnd=function(s){a.userIsDragging||a.onClearIndicatorMouseDown(s)},a.onDropdownIndicatorTouchEnd=function(s){a.userIsDragging||a.onDropdownIndicatorMouseDown(s)},a.handleInputChange=function(s){var u=a.props.inputValue,c=s.currentTarget.value;a.setState({inputIsHiddenAfterUpdate:!1}),a.onInputChange(c,{action:"input-change",prevInputValue:u}),a.props.menuIsOpen||a.onMenuOpen()},a.onInputFocus=function(s){a.props.onFocus&&a.props.onFocus(s),a.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(a.openAfterFocus||a.props.openMenuOnFocus)&&a.openMenu("first"),a.openAfterFocus=!1},a.onInputBlur=function(s){var u=a.props.inputValue;if(a.menuListRef&&a.menuListRef.contains(document.activeElement)){a.inputRef.focus();return}a.props.onBlur&&a.props.onBlur(s),a.onInputChange("",{action:"input-blur",prevInputValue:u}),a.onMenuClose(),a.setState({focusedValue:null,isFocused:!1})},a.onOptionHover=function(s){if(!(a.blockOptionHover||a.state.focusedOption===s)){var u=a.getFocusableOptions(),c=u.indexOf(s);a.setState({focusedOption:s,focusedOptionId:c>-1?a.getFocusedOptionId(s):null})}},a.shouldHideSelectedOptions=function(){return Tp(a.props)},a.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),a.focus()},a.onKeyDown=function(s){var u=a.props,c=u.isMulti,d=u.backspaceRemovesValue,h=u.escapeClearsValue,m=u.inputValue,g=u.isClearable,v=u.isDisabled,k=u.menuIsOpen,f=u.onKeyDown,p=u.tabSelectsValue,y=u.openMenuOnFocus,w=a.state,S=w.focusedOption,M=w.focusedValue,C=w.selectValue;if(!v&&!(typeof f=="function"&&(f(s),s.defaultPrevented))){switch(a.blockOptionHover=!0,s.key){case"ArrowLeft":if(!c||m)return;a.focusValue("previous");break;case"ArrowRight":if(!c||m)return;a.focusValue("next");break;case"Delete":case"Backspace":if(m)return;if(M)a.removeValue(M);else{if(!d)return;c?a.popValue():g&&a.clearValue()}break;case"Tab":if(a.isComposing||s.shiftKey||!k||!p||!S||y&&a.isOptionSelected(S,C))return;a.selectOption(S);break;case"Enter":if(s.keyCode===229)break;if(k){if(!S||a.isComposing)return;a.selectOption(S);break}return;case"Escape":k?(a.setState({inputIsHiddenAfterUpdate:!1}),a.onInputChange("",{action:"menu-close",prevInputValue:m}),a.onMenuClose()):g&&h&&a.clearValue();break;case" ":if(m)return;if(!k){a.openMenu("first");break}if(!S)return;a.selectOption(S);break;case"ArrowUp":k?a.focusOption("up"):a.openMenu("last");break;case"ArrowDown":k?a.focusOption("down"):a.openMenu("first");break;case"PageUp":if(!k)return;a.focusOption("pageup");break;case"PageDown":if(!k)return;a.focusOption("pagedown");break;case"Home":if(!k)return;a.focusOption("first");break;case"End":if(!k)return;a.focusOption("last");break;default:return}s.preventDefault()}},a.state.instancePrefix="react-select-"+(a.props.instanceId||++Ay),a.state.selectValue=a0(r.value),r.menuIsOpen&&a.state.selectValue.length){var o=a.getFocusableOptionsWithIds(),i=a.buildFocusableOptions(),l=i.indexOf(a.state.selectValue[0]);a.state.focusableOptionsWithIds=o,a.state.focusedOption=i[l],a.state.focusedOptionId=Os(o,i[l])}return a}return Xm(t,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&o0(this.menuListRef,this.focusedOptionRef),wy()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(a){var o=this.props,i=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!i&&a.isDisabled||s&&l&&!a.menuIsOpen)&&this.focusInput(),s&&i&&!a.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!i&&a.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(o0(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(a,o){this.props.onInputChange(a,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(a){var o=this,i=this.state,l=i.selectValue,s=i.isFocused,u=this.buildFocusableOptions(),c=a==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(a){var o=this.state,i=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=i.indexOf(l);l||(s=-1);var u=i.length-1,c=-1;if(i.length){switch(a){case"previous":s===0?c=0:s===-1?c=u:c=s-1;break;case"next":s>-1&&s<u&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:i[c]})}}}},{key:"focusOption",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,i=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(i);i||(u=-1),a==="up"?s=u>0?u-1:l.length-1:a==="down"?s=(u+1)%l.length:a==="pageup"?(s=u-o,s<0&&(s=0)):a==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):a==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(bs):R(R({},bs),this.props.theme):bs}},{key:"getCommonProps",value:function(){var a=this.clearValue,o=this.cx,i=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,h=d.isMulti,m=d.isRtl,g=d.options,v=this.hasValue();return{clearValue:a,cx:o,getStyles:i,getClassNames:l,getValue:s,hasValue:v,isMulti:h,isRtl:m,options:g,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var a=this.state.selectValue;return a.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var a=this.props,o=a.isClearable,i=a.isMulti;return o===void 0?i:o}},{key:"isOptionDisabled",value:function(a,o){return Cp(this.props,a,o)}},{key:"isOptionSelected",value:function(a,o){return Mp(this.props,a,o)}},{key:"filterOption",value:function(a,o){return xp(this.props,a,o)}},{key:"formatOptionLabel",value:function(a,o){if(typeof this.props.formatOptionLabel=="function"){var i=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(a,{context:o,inputValue:i,selectValue:l})}else return this.getOptionLabel(a)}},{key:"formatGroupLabel",value:function(a){return this.props.formatGroupLabel(a)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var a=this.props,o=a.isDisabled,i=a.isSearchable,l=a.inputId,s=a.inputValue,u=a.tabIndex,c=a.form,d=a.menuIsOpen,h=a.required,m=this.getComponents(),g=m.Input,v=this.state,k=v.inputIsHidden,f=v.ariaSelection,p=this.commonProps,y=l||this.getElementId("input"),w=R(R(R({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":h,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!i&&{"aria-readonly":!0}),this.hasValue()?(f==null?void 0:f.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return i?x.createElement(g,A({},p,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:o,isHidden:k,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:s},w)):x.createElement(sy,A({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Zo,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var a=this,o=this.getComponents(),i=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,h=this.commonProps,m=this.props,g=m.controlShouldRenderValue,v=m.isDisabled,k=m.isMulti,f=m.inputValue,p=m.placeholder,y=this.state,w=y.selectValue,S=y.focusedValue,M=y.isFocused;if(!this.hasValue()||!g)return f?null:x.createElement(d,A({},h,{key:"placeholder",isDisabled:v,isFocused:M,innerProps:{id:this.getElementId("placeholder")}}),p);if(k)return w.map(function(T,I){var E=T===S,G="".concat(a.getOptionLabel(T),"-").concat(a.getOptionValue(T));return x.createElement(i,A({},h,{components:{Container:l,Label:s,Remove:u},isFocused:E,isDisabled:v,key:G,index:I,removeProps:{onClick:function(){return a.removeValue(T)},onTouchEnd:function(){return a.removeValue(T)},onMouseDown:function(Pe){Pe.preventDefault()}},data:T}),a.formatOptionLabel(T,"value"))});if(f)return null;var C=w[0];return x.createElement(c,A({},h,{data:C,isDisabled:v}),this.formatOptionLabel(C,"value"))}},{key:"renderClearIndicator",value:function(){var a=this.getComponents(),o=a.ClearIndicator,i=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(o,A({},i,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var a=this.getComponents(),o=a.LoadingIndicator,i=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return x.createElement(o,A({},i,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var a=this.getComponents(),o=a.DropdownIndicator,i=a.IndicatorSeparator;if(!o||!i)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return x.createElement(i,A({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var a=this.getComponents(),o=a.DropdownIndicator;if(!o)return null;var i=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(o,A({},i,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var a=this,o=this.getComponents(),i=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,h=o.NoOptionsMessage,m=o.Option,g=this.commonProps,v=this.state.focusedOption,k=this.props,f=k.captureMenuScroll,p=k.inputValue,y=k.isLoading,w=k.loadingMessage,S=k.minMenuHeight,M=k.maxMenuHeight,C=k.menuIsOpen,T=k.menuPlacement,I=k.menuPosition,E=k.menuPortalTarget,G=k.menuShouldBlockScroll,J=k.menuShouldScrollIntoView,Pe=k.noOptionsMessage,Xe=k.onMenuScrollToTop,ae=k.onMenuScrollToBottom;if(!C)return null;var X=function(de,me){var qe=de.type,se=de.data,Be=de.isDisabled,xn=de.isSelected,ka=de.label,bp=de.value,ac=v===se,oc=Be?void 0:function(){return a.onOptionHover(se)},Op=Be?void 0:function(){return a.selectOption(se)},ic="".concat(a.getElementId("option"),"-").concat(me),Np={id:ic,onClick:Op,onMouseMove:oc,onMouseOver:oc,tabIndex:-1,role:"option","aria-selected":a.state.isAppleDevice?void 0:xn};return x.createElement(m,A({},g,{innerProps:Np,data:se,isDisabled:Be,isSelected:xn,key:ic,label:ka,type:qe,value:bp,isFocused:ac,innerRef:ac?a.getFocusedOptionRef:void 0}),a.formatOptionLabel(de.data,"menu"))},Re;if(this.hasOptions())Re=this.getCategorizedOptions().map(function(_){if(_.type==="group"){var de=_.data,me=_.options,qe=_.index,se="".concat(a.getElementId("group"),"-").concat(qe),Be="".concat(se,"-heading");return x.createElement(i,A({},g,{key:se,data:de,options:me,Heading:l,headingProps:{id:Be,data:_.data},label:a.formatGroupLabel(_.data)}),_.options.map(function(xn){return X(xn,"".concat(qe,"-").concat(xn.index))}))}else if(_.type==="option")return X(_,"".concat(_.index))});else if(y){var O=w({inputValue:p});if(O===null)return null;Re=x.createElement(d,g,O)}else{var D=Pe({inputValue:p});if(D===null)return null;Re=x.createElement(h,g,D)}var F={minMenuHeight:S,maxMenuHeight:M,menuPlacement:T,menuPosition:I,menuShouldScrollIntoView:J},$=x.createElement(W9,A({},g,F),function(_){var de=_.ref,me=_.placerProps,qe=me.placement,se=me.maxHeight;return x.createElement(s,A({},g,F,{innerRef:de,innerProps:{onMouseDown:a.onMenuMouseDown,onMouseMove:a.onMenuMouseMove},isLoading:y,placement:qe}),x.createElement(py,{captureEnabled:f,onTopArrive:Xe,onBottomArrive:ae,lockEnabled:G},function(Be){return x.createElement(u,A({},g,{innerRef:function(ka){a.getMenuListRef(ka),Be(ka)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:a.getElementId("listbox")},isLoading:y,maxHeight:se,focusedOption:v}),Re)}))});return E||I==="fixed"?x.createElement(c,A({},g,{appendTo:E,controlElement:this.controlRef,menuPlacement:T,menuPosition:I}),$):$}},{key:"renderFormField",value:function(){var a=this,o=this.props,i=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return x.createElement(gy,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(i){var h=d.map(function(v){return a.getOptionValue(v)}).join(i);return x.createElement("input",{name:u,type:"hidden",value:h})}else{var m=d.length>0?d.map(function(v,k){return x.createElement("input",{key:"i-".concat(k),name:u,type:"hidden",value:a.getOptionValue(v)})}):x.createElement("input",{name:u,type:"hidden",value:""});return x.createElement("div",null,m)}else{var g=d[0]?this.getOptionValue(d[0]):"";return x.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var a=this.commonProps,o=this.state,i=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return x.createElement(ny,A({},a,{id:this.getElementId("live-region"),ariaSelection:i,focusedOption:l,focusedValue:s,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var a=this.getComponents(),o=a.Control,i=a.IndicatorsContainer,l=a.SelectContainer,s=a.ValueContainer,u=this.props,c=u.className,d=u.id,h=u.isDisabled,m=u.menuIsOpen,g=this.state.isFocused,v=this.commonProps=this.getCommonProps();return x.createElement(l,A({},v,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:h,isFocused:g}),this.renderLiveRegion(),x.createElement(o,A({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:h,isFocused:g,menuIsOpen:m}),x.createElement(s,A({},v,{isDisabled:h}),this.renderPlaceholderOrValue(),this.renderInput()),x.createElement(i,A({},v,{isDisabled:h}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(a,o){var i=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,h=o.instancePrefix,m=a.options,g=a.value,v=a.menuIsOpen,k=a.inputValue,f=a.isMulti,p=a0(g),y={};if(i&&(g!==i.value||m!==i.options||v!==i.menuIsOpen||k!==i.inputValue)){var w=v?Ly(a,p):[],S=v?k0(po(a,p),"".concat(h,"-option")):[],M=l?Ry(o,p):null,C=Dy(o,w),T=Os(S,C);y={selectValue:p,focusedOption:C,focusedOptionId:T,focusableOptionsWithIds:S,focusedValue:M,clearFocusValueOnUpdate:!1}}var I=s!=null&&a!==i?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},E=u,G=c&&d;return c&&!G&&(E={value:Ua(f,p,p[0]||null),options:p,action:"initial-input-focus"},G=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(E=null),R(R(R({},y),I),{},{prevProps:a,ariaSelection:E,prevWasFocused:G})}}]),t}(x.Component);Pp.defaultProps=Ey;var Fy=x.forwardRef(function(e,n){var t=Jm(e);return x.createElement(Pp,A({ref:n},t))}),S0=Fy;const _y=36998,Vy=29998,Wy=29997,By=10999,Hy=20999,zy=[{value:"diff",label:"New daily cases"},{value:"values",label:"Cumulative totals"}],Ky=[{value:"diff",label:"New daily deaths"},{value:"values",label:"Cumulative totals"}],Gy=[!1,!1,!1,!1,!1],$y=[null,null],Uy=[{value:10,label:"State 10"},{value:20,label:"State 20"}],jy=[{value:10,label:"County 10"},{value:20,label:"County 20"}],Yy=e=>{var n;return e.ui.dataVersion,((n=bi())==null?void 0:n.stateOptions)??Uy},C0=e=>{const n=bi();return n==null?jy.filter(t=>e.includes(t.value)):L2(e,n)},Jy=(e,n)=>{if(n<=0)return!0;const t=e.filters.selections[n-1];return t==null?!1:t.stateFips.length>0||t.countyFips.length>0},Qy=e=>e.filters.metricType==="cases"?zy:Ky,Xy=Bu(e=>e.ui.dataStartDate,e=>e.ui.dataEndDate,(e,n)=>e==null&&n==null?$y:[e??null,n??null]),qy=e=>{const[,n]=Xy(e);return n},Zy=Bu(e=>e.filters.selections,e=>{const n=bi(),t=(n==null?void 0:n.population)??Ku,r=new Set(t.map(o=>o.fips)),a=new Set(e.flatMap(o=>o.countyFips));return a.size===0?Gy:[a.has(_y),a.has(Vy),a.has(Wy),a.has(By)||a.has(Hy),a.size>0&&[...a].some(o=>!r.has(o))]}),ev=e=>e.filters.selections.filter(n=>n.stateFips.length>0||n.countyFips.length>0).length,nv=(()=>{if(sa.length===0)return null;const e=sa.map(r=>r.date).sort((r,a)=>r.localeCompare(a)),n=e[0],t=e[e.length-1];return n==null||t==null?null:[n,t]})(),tv=e=>e.ui.figure??rv(e),rv=Bu(e=>e.filters,e=>{const n=bi(),t=(n==null?void 0:n.records)??sa,r=(n==null?void 0:n.population)??Ku,a={metricType:e.metricType,valueMode:e.valueMode,rollingDays:e.rollingDays,normalizeByPopulation:e.normalizeByPopulation,useLogScale:e.useLogScale},o={records:t,selectedFips:[],population:r,metricType:e.metricType,valueMode:e.valueMode,rollingDays:e.rollingDays,normalizeByPopulation:e.normalizeByPopulation},i=e.selections.map((u,c)=>{const d=u.countyFips.length>0?u.countyFips:u.stateFips;if(d.length===0)return null;const h={...o,selectedFips:[...d]},m=n==null?`Selection ${c+1}`:E2(d,n)||`Selection ${c+1}`;return b2(h,m)}).filter(u=>u!=null),l=P2(a),s=(n==null?void 0:n.dateRange[0])!=null&&n.dateRange[1]!=null?[n.dateRange[0],n.dateRange[1]]:nv;return R2(i,l,s)}),av=6;function ov(){const e=D2(),n=wn(o=>o.filters),t=wn(Yy),r=wn(Qy),a=()=>{e(v2())};return b.jsxs("section",{"aria-label":"Controls",style:le.panel,children:[b.jsx("div",{style:le.headerRow,children:b.jsx("h2",{style:le.header,children:"Filters"})}),b.jsxs("div",{style:le.controlsRow,children:[b.jsxs("div",{style:le.selectionTable,children:[b.jsxs("div",{style:le.selectionHead,children:[b.jsx("span",{children:"State"}),b.jsx("span",{children:"County"})]}),b.jsx("div",{children:Array.from({length:av},(o,i)=>b.jsx(iv,{rowIndex:i,stateOptions:t},i))})]}),b.jsxs("div",{style:le.optionsCard,children:[b.jsx("b",{children:"Options"}),b.jsxs("fieldset",{style:le.group,children:[b.jsx("legend",{children:"Type"}),b.jsxs("label",{children:[b.jsx("input",{type:"radio",name:"metric-type",value:"cases",checked:n.metricType==="cases",onChange:()=>e(Ll("cases"))}),"Cases"]}),b.jsxs("label",{children:[b.jsx("input",{type:"radio",name:"metric-type",value:"deaths",checked:n.metricType==="deaths",onChange:()=>e(Ll("deaths"))}),"Deaths"]})]}),b.jsxs("fieldset",{style:le.group,children:[b.jsx("legend",{children:"Values"}),r.map(o=>b.jsxs("label",{children:[b.jsx("input",{type:"radio",name:"value-mode",value:o.value,checked:n.valueMode===o.value,onChange:()=>e(k2(o.value))}),o.label]},o.value))]}),n.valueMode==="diff"?b.jsxs("label",{style:le.blockLabel,children:["Rolling day average",b.jsx("input",{"aria-label":"Rolling day average",type:"number",min:1,max:14,value:n.rollingDays,onChange:o=>{const i=Number(o.target.value),l=Number.isFinite(i)?Math.max(1,Math.min(14,i)):7;e(w2(l))}})]}):null,b.jsxs("fieldset",{style:le.group,children:[b.jsx("legend",{children:"Display"}),b.jsxs("label",{children:[b.jsx("input",{type:"checkbox",checked:n.normalizeByPopulation,onChange:o=>e(S2(o.target.checked))}),"Normalize by population"]}),b.jsxs("label",{children:[b.jsx("input",{type:"checkbox",checked:n.useLogScale,onChange:o=>e(C2(o.target.checked))}),"Log scale"]})]}),b.jsx("button",{type:"button",onClick:a,children:"Reset Controls"})]})]})]})}const be={open:!1,x:0,y:0},M0={control:(e,n)=>({...e,minHeight:"2.35rem",borderColor:n.isFocused?"#5685ad":"#b8c7d4",boxShadow:n.isFocused?"0 0 0 1px #5685ad":"none",borderRadius:"8px",backgroundColor:"#fff"}),valueContainer:e=>({...e,gap:"0.2rem"}),multiValue:e=>({...e,backgroundColor:"#e8f1f9",borderRadius:"6px"}),multiValueLabel:e=>({...e,color:"#234058"}),multiValueRemove:e=>({...e,color:"#234058",":hover":{backgroundColor:"#cddfee",color:"#11293c"}}),menu:e=>({...e,zIndex:1100})};function iv({rowIndex:e,stateOptions:n}){const t=D2(),[r,a]=x.useState([0,100]),[o,i]=x.useState(be),[l,s]=x.useState(be),u=wn(g=>g.filters.selections[e])??{stateFips:[],countyFips:[]},c=wn(g=>Jy(g,e)),d=x.useMemo(()=>C0(u.stateFips),[u.stateFips]),h=x.useMemo(()=>n.filter(g=>u.stateFips.includes(g.value)),[u.stateFips,n]),m=x.useMemo(()=>d.filter(g=>u.countyFips.includes(g.value)),[d,u.countyFips]);return x.useEffect(()=>{c||(i(be),s(be))},[c]),x.useEffect(()=>{if(!o.open&&!l.open)return;const g=()=>{i(be),s(be)};return window.addEventListener("click",g),()=>{window.removeEventListener("click",g)}},[o.open,l.open]),b.jsxs("div",{"data-testid":`selection-row-${e+1}`,hidden:!c,"aria-hidden":!c,style:le.row,children:[b.jsx("div",{style:le.blockLabel,children:b.jsx("div",{"data-testid":`state-select-${e+1}`,onContextMenu:g=>{g.preventDefault(),s(be),i({open:!0,x:g.clientX,y:g.clientY})},children:b.jsx(S0,{isMulti:!0,isSearchable:!0,closeMenuOnSelect:!1,hideSelectedOptions:!1,styles:M0,options:n,value:h,placeholder:"Select or right click...","aria-label":`State row ${e+1}`,noOptionsMessage:()=>"No states found",onChange:g=>{const v=g.map(p=>p.value),k=C0(v),f=u.countyFips.filter(p=>k.some(y=>y.value===p));t(Wr({index:e,selection:{stateFips:v,countyFips:f}}))}})})}),b.jsx("div",{style:le.blockLabel,children:b.jsx("div",{"data-testid":`county-select-${e+1}`,onContextMenu:g=>{g.preventDefault(),i(be),s({open:!0,x:g.clientX,y:g.clientY})},children:b.jsx(S0,{isMulti:!0,isSearchable:!0,closeMenuOnSelect:!1,hideSelectedOptions:!1,styles:M0,options:d,value:m,isDisabled:u.stateFips.length===0,placeholder:"Select or right click...","aria-label":`County row ${e+1}`,noOptionsMessage:()=>"Select a state first",onChange:g=>{const v=g.map(k=>k.value);t(Wr({index:e,selection:{...u,countyFips:v}}))}})})}),o.open?b.jsxs("div",{"data-testid":`state-menu-${e+1}`,style:{...le.contextMenu,left:`${o.x}px`,top:`${o.y}px`},onClick:g=>g.stopPropagation(),children:[b.jsx("button",{type:"button",onClick:()=>{t(dt({index:e,group:"all"})),i(be)},children:"All States & Territories"}),b.jsx("button",{type:"button",onClick:()=>{t(dt({index:e,group:"lower49"})),i(be)},children:"Contiguous 48 States + DC"}),b.jsx("button",{type:"button",onClick:()=>{t(dt({index:e,group:"northeast"})),i(be)},children:"Northeast"}),b.jsx("button",{type:"button",onClick:()=>{t(dt({index:e,group:"midwest"})),i(be)},children:"Midwest"}),b.jsx("button",{type:"button",onClick:()=>{t(dt({index:e,group:"south"})),i(be)},children:"South"}),b.jsx("button",{type:"button",onClick:()=>{t(dt({index:e,group:"west"})),i(be)},children:"West"})]}):null,l.open?b.jsxs("div",{"data-testid":`county-menu-${e+1}`,style:{...le.contextMenu,left:`${l.x}px`,top:`${l.y}px`},onClick:g=>g.stopPropagation(),children:[b.jsx("p",{style:le.menuTitle,children:"Population percentile"}),b.jsxs("label",{style:le.inlineLabel,children:["Min",b.jsx("input",{type:"number",min:0,max:100,step:1,value:r[0],onChange:g=>{const v=Number(g.target.value),k=Number.isFinite(v)?Math.max(0,Math.min(100,v)):0;a([k,r[1]])}})]}),b.jsxs("label",{style:le.inlineLabel,children:["Max",b.jsx("input",{type:"number",min:0,max:100,step:1,value:r[1],onChange:g=>{const v=Number(g.target.value),k=Number.isFinite(v)?Math.max(0,Math.min(100,v)):100;a([r[0],k])}})]}),b.jsx("button",{type:"button",onClick:()=>{t(M2({index:e,window:r})),s(be)},children:"Apply"})]}):null]})}const le={panel:{background:"#f8faf2",border:"1px solid #dbe8c7",borderRadius:"12px",padding:"1rem"},headerRow:{marginBottom:"0.65rem"},header:{margin:0,fontSize:"1.2rem"},controlsRow:{display:"grid",gridTemplateColumns:"minmax(22rem, 2.2fr) minmax(16rem, 1fr)",gap:"0.9rem",alignItems:"start"},selectionTable:{border:"1px solid #d8dfcd",borderRadius:"10px",background:"#fff"},selectionHead:{display:"grid",gridTemplateColumns:"2fr 3fr",gap:"0.6rem",fontWeight:600,padding:"0.6rem 0.75rem",borderBottom:"1px solid #d8dfcd",background:"#eef4e2"},optionsCard:{border:"1px solid #d8dfcd",borderRadius:"10px",background:"#fff",padding:"0.65rem",display:"grid",gap:"0.55rem"},group:{display:"grid",gap:"0.4rem",border:"1px solid #d8dfcd",borderRadius:"8px",padding:"0.65rem"},row:{display:"grid",gridTemplateColumns:"2fr 3fr",gap:"0.6rem",padding:"0.6rem 0.75rem",borderTop:"1px solid #d8dfcd",background:"#fff"},inlineLabel:{display:"grid",gap:"0.2rem"},blockLabel:{display:"grid",gap:"0.35rem"},contextMenu:{position:"fixed",zIndex:1e3,display:"grid",gap:"0.35rem",padding:"0.6rem",borderRadius:"8px",border:"1px solid #7f8c98",background:"#f7f9fc",boxShadow:"0 6px 20px rgba(0, 0, 0, 0.18)",minWidth:"13rem"},menuTitle:{margin:0,fontSize:"0.9rem",color:"#233444"}};function sv(){const e=wn(qy),n=wn(ev),t=wn(tv),r=wn(Zy),a=wn(o=>o.ui);return b.jsxs("main",{style:zn.main,children:[b.jsxs("header",{style:zn.header,children:[b.jsx("h1",{style:zn.title,children:"Covid County Dash"}),b.jsxs("p",{style:zn.subtitle,children:["Visualization of ",b.jsx("a",{href:"https://github.com/nytimes/covid-19-data",children:"data"})," from The New York Times, based on reports from state and local health agencies."]}),b.jsxs("p",{style:zn.loaded,children:["Loaded data through: ",e??"(pending)"]})]}),b.jsx(ov,{}),b.jsx("section",{style:zn.plotRow,children:b.jsx(zm,{figure:t,isLoading:a.isLoading,lastError:a.lastError})}),b.jsx("section",{style:zn.footerRow,children:b.jsxs("p",{style:zn.statusText,children:["Active series slots: ",n]})}),b.jsx(Fm,{visibility:r})]})}const zn={main:{fontFamily:"Avenir Next, Segoe UI, sans-serif",minHeight:"100vh",padding:"1rem 2%",background:"linear-gradient(180deg, #f0f6ff 0%, #fffdf8 100%)",color:"#1f2f3f"},header:{margin:"0 auto 1rem",maxWidth:"70rem",textAlign:"center"},title:{margin:"0 0 0.35rem",fontSize:"2.1rem"},subtitle:{margin:"0.2rem auto",maxWidth:"52rem"},loaded:{margin:"0.35rem 0 0",fontWeight:600},plotRow:{marginTop:"0.9rem"},footerRow:{margin:"0.75rem 0"},statusText:{margin:0,color:"#3d5569"}};Ns.createRoot(document.getElementById("root")).render(b.jsx(D0.StrictMode,{children:b.jsx(x5,{store:Dm,children:b.jsx(sv,{})})}));export{Rp as g};
