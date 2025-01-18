"use strict";var x=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var b=x(function(I,y){
var r=require('@stdlib/number-float64-base-to-float32/dist'),f=require('@stdlib/math-base-special-abs/dist');function O(a,e,o,v,F){var s,c,q,u,m,n,i,t,p;if(a<=0)return 0;if(q=F,v===0)return r(a*r(e+o[q]));for(s=0,c=0,u=0,p=0;p<a;p++)n=r(e+o[q]),i=r(s+n),f(s)>=f(n)?t=r(r(s-i)+n):t=r(r(n-i)+s),s=i,i=r(u+t),f(u)>=f(t)?m=r(r(u-i)+t):m=r(r(t-i)+u),u=i,c=r(c+m),q+=v;return r(s+r(u+c))}y.exports=O
});var k=x(function(J,d){
var T=require('@stdlib/strided-base-stride2offset/dist'),g=b();function w(a,e,o,v){return g(a,e,o,v,T(a,v))}d.exports=w
});var _=x(function(K,R){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=k(),A=b();z(j,"ndarray",A);R.exports=j
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),G=_(),l,E=C(B(__dirname,"./native.js"));D(E)?l=G:l=E;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
