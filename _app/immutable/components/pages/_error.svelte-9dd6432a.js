import{S as N,i as R,s as T,k as l,q as P,a as w,l as u,m as c,r as j,h as s,c as x,n as D,b as p,D as f,u as G,A as H,I as U}from"../../chunks/index-762a247d.js";import{s as z}from"../../chunks/singletons-46b33449.js";const B=()=>{const a=z,t={page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated};return Object.defineProperties(t,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},enumerable:!1},session:{get(){return J(),{}},enumerable:!1}}),t},F={subscribe(a){return B().page.subscribe(a)}};function J(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function K(a){let t,o=a[0].status+"",i,b,n,v=a[0].error.message+"",E,S,_,h,k,$,m,g,d,q;return{c(){t=l("h2"),i=P(o),b=w(),n=l("p"),E=P(v),S=w(),_=l("p"),h=l("strong"),k=P("\u51FA\u9519\u4E86!"),$=w(),m=l("ul"),g=l("li"),d=l("a"),q=P("\u4E3B\u9875"),this.h()},l(e){t=u(e,"H2",{});var r=c(t);i=j(r,o),r.forEach(s),b=x(e),n=u(e,"P",{class:!0});var y=c(n);E=j(y,v),y.forEach(s),S=x(e),_=u(e,"P",{});var A=c(_);h=u(A,"STRONG",{});var I=c(h);k=j(I,"\u51FA\u9519\u4E86!"),I.forEach(s),A.forEach(s),$=x(e),m=u(e,"UL",{});var L=c(m);g=u(L,"LI",{});var O=c(g);d=u(O,"A",{href:!0});var C=c(d);q=j(C,"\u4E3B\u9875"),C.forEach(s),O.forEach(s),L.forEach(s),this.h()},h(){D(n,"class","subhead"),D(d,"href","/")},m(e,r){p(e,t,r),f(t,i),p(e,b,r),p(e,n,r),f(n,E),p(e,S,r),p(e,_,r),f(_,h),f(h,k),p(e,$,r),p(e,m,r),f(m,g),f(g,d),f(d,q)},p(e,[r]){r&1&&o!==(o=e[0].status+"")&&G(i,o),r&1&&v!==(v=e[0].error.message+"")&&G(E,v)},i:H,o:H,d(e){e&&s(t),e&&s(b),e&&s(n),e&&s(S),e&&s(_),e&&s($),e&&s(m)}}}function M(a,t,o){let i;return U(a,F,b=>o(0,i=b)),[i]}class W extends N{constructor(t){super(),R(this,t,M,K,T,{})}}export{W as default};