"use strict";var k=function(t,n){return function(){return n||t((n={exports:{}}).exports,n),n.exports}};var F=k(function(I,j){
var e=require('@stdlib/number-float64-base-to-float32/dist'),x=require('@stdlib/math-base-special-abs/dist');function g(t,n,m,l){var c,v,f,s,u,q,i,r,o;if(t<=0)return 0;if(t===1||l===0)return e(n+m[0]);for(l<0?f=(1-t)*l:f=0,c=0,v=0,s=0,o=0;o<t;o++)q=e(n+m[f]),i=e(c+q),x(c)>=x(q)?r=e(e(c-i)+q):r=e(e(q-i)+c),c=i,i=e(s+r),x(s)>=x(r)?u=e(e(s-i)+r):u=e(e(r-i)+s),s=i,v=e(v+u),f+=l;return e(c+e(s+v))}j.exports=g
});var T=k(function(J,R){
var a=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/math-base-special-abs/dist');function w(t,n,m,l,c){var v,f,s,u,q,i,r,o,b;if(t<=0)return 0;if(t===1||l===0)return a(n+m[c]);for(s=c,v=0,f=0,u=0,b=0;b<t;b++)i=a(n+m[s]),r=a(v+i),p(v)>=p(i)?o=a(a(v-r)+i):o=a(a(i-r)+v),v=r,r=a(u+o),p(u)>=p(o)?q=a(a(u-r)+o):q=a(a(o-r)+u),u=r,f=a(f+q),s+=l;return a(v+a(u+f))}R.exports=w
});var O=k(function(K,E){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=F(),A=T();z(_,"ndarray",A);E.exports=_
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),G=O(),y,d=C(B(__dirname,"./native.js"));D(d)?y=G:y=d;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
