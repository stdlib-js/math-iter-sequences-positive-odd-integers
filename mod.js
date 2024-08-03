// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":u(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,v,"e"),n=s.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,i,a,u,f,l,s,p,g,d,b;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+m(b):m(b)+p)),u+=n.arg||"",f+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,o;for(t=[],o=0,n=x.exec(r);n;)(e=r.slice(o,x.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),o=x.lastIndex,n=x.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var P,V=Object.prototype,A=V.toString,F=V.__defineGetter__,C=V.__defineSetter__,$=V.__lookupGetter__,N=V.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===A.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&F&&F.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var R=P;function B(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G=Object.prototype.hasOwnProperty;function L(r,e){return null!=r&&G.call(r,e)}var Z="function"==typeof Symbol?Symbol:void 0;var M="function"==typeof Z&&"symbol"==typeof Z("foo")&&L(Z,"iterator")&&"symbol"==typeof Z.iterator?Symbol.iterator:null;var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return U&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y="function"==typeof Z?Z.toStringTag:"";var z=W()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[Y],e=L(r,Y);try{r[Y]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return X.call(r)};var q=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};var D=/./;function H(r){return"boolean"==typeof r}var J=Boolean,K=Boolean.prototype.toString;var Q=W();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function er(r){return H(r)||rr(r)}B(er,"isPrimitive",H),B(er,"isObject",rr);var tr="object"==typeof self?self:null,nr="object"==typeof window?window:null,or="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ir="object"==typeof or?or:null,ar="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!H(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ar)return ar;if(tr)return tr;if(nr)return nr;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),ur=cr.document&&cr.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;function pr(r){return null!==r&&"object"==typeof r}function gr(r){var e,t,n,o;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=sr.exec(n.toString()))return e[1]}return pr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}B(lr,"REGEXP",sr),B(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!q(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var dr="function"==typeof D||"object"==typeof fr||"function"==typeof ur?function(r){return gr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?gr(r).toLowerCase():e};function br(r){return"function"===dr(r)}var yr,vr=Object,hr=Object.getPrototypeOf;yr=br(Object.getPrototypeOf)?hr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var wr=yr;var mr=Object.prototype;function jr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!q(r)}(r)&&(e=function(r){return null==r?null:(r=vr(r),wr(r))}(r),!e||!L(r,"constructor")&&L(e,"constructor")&&br(e.constructor)&&"[object Function]"===z(e.constructor)&&L(e,"isPrototypeOf")&&br(e.isPrototypeOf)&&(e===mr||function(r){var e;for(e in r)if(!L(r,e))return!1;return!0}(r)))}function _r(r){return"number"==typeof r}var Er=Number,Or=Er.prototype.toString;var Sr=W();function xr(r){return"object"==typeof r&&(r instanceof Er||(Sr?function(r){try{return Or.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function Tr(r){return _r(r)||xr(r)}B(Tr,"isPrimitive",_r),B(Tr,"isObject",xr);var kr=Number.POSITIVE_INFINITY,Ir=Er.NEGATIVE_INFINITY,Pr=Math.floor;function Vr(r){return r<kr&&r>Ir&&Pr(e=r)===e;var e}function Ar(r){return _r(r)&&Vr(r)}function Fr(r){return xr(r)&&Vr(r.valueOf())}function Cr(r){return Ar(r)||Fr(r)}function $r(r){return Ar(r)&&r>=0}function Nr(r){return Fr(r)&&r.valueOf()>=0}function Rr(r){return $r(r)||Nr(r)}function Br(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}B(Cr,"isPrimitive",Ar),B(Cr,"isObject",Fr),B(Rr,"isPrimitive",$r),B(Rr,"isObject",Nr);function Gr(r){var e,t,n,o,i,a;if(e={iter:4503599627370496},arguments.length&&(o=function(r,e){return jr(e)?L(e,"iter")&&(r.iter=e.iter,!$r(e.iter))?new TypeError(Br("0ah2t","iter",e.iter)):null:new TypeError(Br("0ah2V",e))}(e,r),o))throw o;return i=0,a=-1,B(t={},"next",(function(){if(i+=1,n||i>e.iter)return{done:!0};return{value:a+=2,done:!1}})),B(t,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),M&&B(t,M,(function(){return Gr(e)})),t}export{Gr as default};
//# sourceMappingURL=mod.js.map
