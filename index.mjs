// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.0-esm/index.mjs";function n(r,n,s,i){var a,d,o,f,m,l,u,p,j;if(r<=0)return 0;if(1===r||0===i)return e(n+s[0]);for(o=i<0?(1-r)*i:0,a=0,d=0,f=0,j=0;j<r;j++)l=e(n+s[o]),u=e(a+l),p=t(a)>=t(l)?e(e(a-u)+l):e(e(l-u)+a),a=u,u=e(f+p),m=t(f)>=t(p)?e(e(f-u)+p):e(e(p-u)+f),f=u,d=e(d+m),o+=i;return e(a+e(f+d))}function s(r,n,s,i,a){var d,o,f,m,l,u,p,j,b;if(r<=0)return 0;if(1===r||0===i)return e(n+s[a]);for(f=a,d=0,o=0,m=0,b=0;b<r;b++)u=e(n+s[f]),p=e(d+u),j=t(d)>=t(u)?e(e(d-p)+u):e(e(u-p)+d),d=p,p=e(m+j),l=t(m)>=t(j)?e(e(m-p)+j):e(e(j-p)+m),m=p,o=e(o+l),f+=i;return e(d+e(m+o))}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
