import{S as N,i as R,s as T,k as y,a as w,R as V,l as B,h as u,c as A,m as g,n as E,D as d,b as v,f as S,t as H,q as P,r as b,A as q,v as M,w as j,x as C,u as I,y as L}from"../../../../../chunks/index-a5c414f5.js";import{P as z,a as F}from"../../../../../chunks/Pagination-01f44102.js";import{p as D,b as G}from"../../../../../chunks/config-1cc2bd8c.js";function J(p){let s,e,c,o,m,n,r,_;return{c(){s=y("h1"),e=P("\u55EF..."),c=w(),o=y("p"),m=P("\u6CA1\u6709\u6587\u7AE0"),n=w(),r=y("a"),_=P("\u8FD4\u56DE Blog"),this.h()},l(t){s=B(t,"H1",{});var f=g(s);e=b(f,"\u55EF..."),f.forEach(u),c=A(t),o=B(t,"P",{});var l=g(o);m=b(l,"\u6CA1\u6709\u6587\u7AE0"),l.forEach(u),n=A(t),r=B(t,"A",{href:!0});var i=g(r);_=b(i,"\u8FD4\u56DE Blog"),i.forEach(u),this.h()},h(){E(r,"href","/blog")},m(t,f){v(t,s,f),d(s,e),v(t,c,f),v(t,o,f),d(o,m),v(t,n,f),v(t,r,f),d(r,_)},p:q,i:q,o:q,d(t){t&&u(s),t&&u(c),t&&u(o),t&&u(n),t&&u(r)}}}function K(p){let s,e,c,o,m,n,r,_,t,f,l,i,$;return f=new z({props:{posts:p[4]}}),i=new F({props:{currentPage:p[2],totalPosts:p[3]}}),{c(){s=y("h1"),e=y("span"),c=P("Blog: "),o=P(p[1]),m=P("-"),n=P(p[0]),r=P(" / "),_=P(p[3]),t=w(),M(f.$$.fragment),l=w(),M(i.$$.fragment),this.h()},l(a){s=B(a,"H1",{class:!0});var h=g(s);e=B(h,"SPAN",{});var k=g(e);c=b(k,"Blog: "),o=b(k,p[1]),m=b(k,"-"),n=b(k,p[0]),r=b(k," / "),_=b(k,p[3]),k.forEach(u),h.forEach(u),t=A(a),j(f.$$.fragment,a),l=A(a),j(i.$$.fragment,a),this.h()},h(){E(s,"class","tag")},m(a,h){v(a,s,h),d(s,e),d(e,c),d(e,o),d(e,m),d(e,n),d(e,r),d(e,_),v(a,t,h),C(f,a,h),v(a,l,h),C(i,a,h),$=!0},p(a,h){(!$||h&2)&&I(o,a[1]),(!$||h&1)&&I(n,a[0])},i(a){$||(S(f.$$.fragment,a),S(i.$$.fragment,a),$=!0)},o(a){H(f.$$.fragment,a),H(i.$$.fragment,a),$=!1},d(a){a&&u(s),a&&u(t),L(f,a),a&&u(l),L(i,a)}}}function O(p){let s,e,c,o,m,n,r;document.title=s="Blog - "+p[2];const _=[K,J],t=[];function f(l,i){return l[4].length?0:1}return m=f(p),n=t[m]=_[m](p),{c(){e=y("meta"),c=w(),o=y("div"),n.c(),this.h()},l(l){const i=V('[data-svelte="svelte-5j23ac"]',document.head);e=B(i,"META",{"data-key":!0,name:!0,content:!0}),i.forEach(u),c=A(l),o=B(l,"DIV",{class:!0});var $=g(o);n.l($),$.forEach(u),this.h()},h(){E(e,"data-key","description"),E(e,"name","description"),E(e,"content",G),E(o,"class","page")},m(l,i){d(document.head,e),v(l,c,i),v(l,o,i),t[m].m(o,null),r=!0},p(l,[i]){(!r||i&4)&&s!==(s="Blog - "+l[2])&&(document.title=s),n.p(l,i)},i(l){r||(S(n),r=!0)},o(l){H(n),r=!1},d(l){u(e),l&&u(c),l&&u(o),t[m].d()}}}function Q(p,s,e){let c,o,{data:m}=s;const{page:n,totalPosts:r,posts:_}=m;return p.$$set=t=>{"data"in t&&e(5,m=t.data)},e(1,c=n*D-(D-1)||1),e(0,o=Math.min(n*D,r)),[o,c,n,r,_,m]}class Y extends N{constructor(s){super(),R(this,s,Q,O,T,{data:5})}}export{Y as default};