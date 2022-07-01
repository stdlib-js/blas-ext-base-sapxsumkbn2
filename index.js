// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,a=n.__defineSetter__,l=n.__lookupGetter__,i=n.__lookupSetter__,f=r,c=function(t,e,r){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(t,e)||i.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&a&&a.call(t,e,r.set),t},y=e()?f:c,p=function(t,e,r){y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},b="function"==typeof Math.fround?Math.fround:null,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,s=_,m=function(t){return s.call(t)},v=Object.prototype.hasOwnProperty,g=function(t,e){return null!=t&&v.call(t,e)},h="function"==typeof Symbol?Symbol.toStringTag:"",j=g,w=h,S=_,A=m,F=function(t){var e,r,n;if(null==t)return S.call(t);r=t[w],e=j(t,w);try{t[w]=void 0}catch(e){return S.call(t)}return n=S.call(t),e?t[w]=r:delete t[w],n},O=d&&"symbol"==typeof Symbol.toStringTag?F:A,T="function"==typeof Float32Array,P=function(t){return T&&t instanceof Float32Array||"[object Float32Array]"===O(t)},E=Number.POSITIVE_INFINITY,I="function"==typeof Float32Array?Float32Array:null,x=P,k=E,M=I,N="function"==typeof Float32Array?Float32Array:void 0,V=function(){throw new Error("not implemented")},G=new(function(){var t,e;if("function"!=typeof M)return!1;try{e=new M([1,3.14,-3.14,5e40]),t=x(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===k}catch(e){t=!1}return t}()?N:V)(1),C=b;"function"!=typeof C&&(C=function(t){return G[0]=t,G[0]});var Y=C,q=function(t){return Math.abs(t)};function z(t,e,r,n){var o,u,a,l,i,f,c,y,p;if(t<=0)return 0;if(1===t||0===n)return Y(e+r[0]);for(a=n<0?(1-t)*n:0,o=0,u=0,l=0,p=0;p<t;p++)f=Y(e+r[a]),c=Y(o+f),y=q(o)>=q(f)?Y(Y(o-c)+f):Y(Y(f-c)+o),o=c,c=Y(l+y),i=q(l)>=q(y)?Y(Y(l-c)+y):Y(Y(y-c)+l),l=c,u=Y(u+i),a+=n;return Y(o+Y(l+u))}return p(z,"ndarray",(function(t,e,r,n,o){var u,a,l,i,f,c,y,p,b;if(t<=0)return 0;if(1===t||0===n)return Y(e+r[o]);for(l=o,u=0,a=0,i=0,b=0;b<t;b++)c=Y(e+r[l]),y=Y(u+c),p=q(u)>=q(c)?Y(Y(u-y)+c):Y(Y(c-y)+u),u=y,y=Y(i+p),f=q(i)>=q(p)?Y(Y(i-y)+p):Y(Y(p-y)+i),i=y,a=Y(a+f),l+=n;return Y(u+Y(i+a))})),z},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).sapxsumkbn2=e();
//# sourceMappingURL=index.js.map
