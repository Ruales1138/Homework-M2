(()=>{var r={857:(r,e,t)=>{"use strict";function n(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function c(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){n(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function i(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}t.r(e),t.d(e,{__DO_NOT_USE__ActionTypes:()=>a,applyMiddleware:()=>O,bindActionCreators:()=>E,combineReducers:()=>l,compose:()=>v,createStore:()=>y,legacy_createStore:()=>s});var u="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function p(r){if("object"!=typeof r||null===r)return!1;for(var e=r;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(r)===e}function y(r,e,t){var n;if("function"==typeof e&&"function"==typeof t||"function"==typeof t&&"function"==typeof arguments[3])throw new Error(i(0));if("function"==typeof e&&void 0===t&&(t=e,e=void 0),void 0!==t){if("function"!=typeof t)throw new Error(i(1));return t(y)(r,e)}if("function"!=typeof r)throw new Error(i(2));var o=r,c=e,f=[],s=f,l=!1;function d(){s===f&&(s=f.slice())}function E(){if(l)throw new Error(i(3));return c}function v(r){if("function"!=typeof r)throw new Error(i(4));if(l)throw new Error(i(5));var e=!0;return d(),s.push(r),function(){if(e){if(l)throw new Error(i(6));e=!1,d();var t=s.indexOf(r);s.splice(t,1),f=null}}}function O(r){if(!p(r))throw new Error(i(7));if(void 0===r.type)throw new Error(i(8));if(l)throw new Error(i(9));try{l=!0,c=o(c,r)}finally{l=!1}for(var e=f=s,t=0;t<e.length;t++)(0,e[t])();return r}function b(r){if("function"!=typeof r)throw new Error(i(10));o=r,O({type:a.REPLACE})}function h(){var r,e=v;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(i(11));function t(){r.next&&r.next(E())}return t(),{unsubscribe:e(t)}}})[u]=function(){return this},r}return O({type:a.INIT}),(n={dispatch:O,subscribe:v,getState:E,replaceReducer:b})[u]=h,n}var s=y;function l(r){for(var e=Object.keys(r),t={},n=0;n<e.length;n++){var o=e[n];"function"==typeof r[o]&&(t[o]=r[o])}var c,u=Object.keys(t);try{!function(r){Object.keys(r).forEach((function(e){var t=r[e];if(void 0===t(void 0,{type:a.INIT}))throw new Error(i(12));if(void 0===t(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(i(13))}))}(t)}catch(r){c=r}return function(r,e){if(void 0===r&&(r={}),c)throw c;for(var n=!1,o={},f=0;f<u.length;f++){var a=u[f],p=t[a],y=r[a],s=p(y,e);if(void 0===s)throw e&&e.type,new Error(i(14));o[a]=s,n=n||s!==y}return(n=n||u.length!==Object.keys(r).length)?o:r}}function d(r,e){return function(){return e(r.apply(this,arguments))}}function E(r,e){if("function"==typeof r)return d(r,e);if("object"!=typeof r||null===r)throw new Error(i(16));var t={};for(var n in r){var o=r[n];"function"==typeof o&&(t[n]=d(o,e))}return t}function v(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return 0===e.length?function(r){return r}:1===e.length?e[0]:e.reduce((function(r,e){return function(){return r(e.apply(void 0,arguments))}}))}function O(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(r){return function(){var t=r.apply(void 0,arguments),n=function(){throw new Error(i(15))},o={getState:t.getState,dispatch:function(){return n.apply(void 0,arguments)}},u=e.map((function(r){return r(o)}));return n=v.apply(void 0,u)(t.dispatch),c(c({},t),{},{dispatch:n})}}}},883:r=>{r.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO",IMPAR:"IMPAR",ASYNC:"ASYNC"}},518:(r,e,t)=>{const{INCREMENTO:n,DECREMENTO:o}=t(883);r.exports={incremento:()=>({type:"INCREMENTO"}),decremento:()=>({type:"DECREMENTO"}),impar:()=>({type:"IMPAR"}),async:()=>({type:"ASYNC"})}},616:(r,e,t)=>{const{INCREMENTO:n,DECREMENTO:o,IMPAR:c,ASYNC:i}=t(883),{impar:u}=t(518),f={contador:0};r.exports=function(r=f,e){switch(e.type){case n:return{...r,contador:r.contador+1};case o:return{...r,contador:r.contador-1};case c:return r.contador%2!=0?{...r,contador:r.contador+1}:{...r};case i:return{...r,contador:r.contador+1};default:return{...r}}}}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var c=e[n]={exports:{}};return r[n](c,c.exports,t),c.exports}t.d=(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),t.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},(()=>{const{createStore:r}=t(857),e=t(616),{incremento:n,decremento:o,impar:c,async:i}=t(518);var u=r(e),f=document.querySelector("#valor");function a(){var r=u.getState().contador;f.innerHTML=r}a(),u.subscribe((()=>a())),document.querySelector("#incremento").onclick=()=>u.dispatch(n()),document.querySelector("#decremento").onclick=()=>u.dispatch(o()),document.querySelector("#incrementoImpar").onclick=()=>u.dispatch(c()),document.querySelector("#incrementoAsync").onclick=()=>setTimeout((()=>u.dispatch(i())),1e3)})()})();