import{S as z,i as F,s as J,a as w,k as $,q as P,R as K,h as f,c as O,l as b,m as k,r as E,n as q,b as S,D as u,u as j,t as T,d as M,f as D,g as Q,A as G,v as H,w as I,x as L,y as V}from"../../../../../chunks/index-148df3e2.js";import{P as U,a as W}from"../../../../../chunks/Pagination-13c1cbb9.js";function X(_){let e,n,a,l,t=_[0].category+"",i,g,p,m,d,c;return{c(){e=$("p"),n=$("strong"),a=P("Ope!"),l=P(` Sorry, couldn't find any posts in the category "`),i=P(t),g=P('".'),p=w(),m=$("p"),d=$("a"),c=P("Back to blog"),this.h()},l(s){e=b(s,"P",{});var r=k(e);n=b(r,"STRONG",{});var A=k(n);a=E(A,"Ope!"),A.forEach(f),l=E(r,` Sorry, couldn't find any posts in the category "`),i=E(r,t),g=E(r,'".'),r.forEach(f),p=O(s),m=b(s,"P",{});var h=k(m);d=b(h,"A",{href:!0});var B=k(d);c=E(B,"Back to blog"),B.forEach(f),h.forEach(f),this.h()},h(){q(d,"href","/blog")},m(s,r){S(s,e,r),u(e,n),u(n,a),u(e,l),u(e,i),u(e,g),S(s,p,r),S(s,m,r),u(m,d),u(d,c)},p(s,r){r&1&&t!==(t=s[0].category+"")&&j(i,t)},i:G,o:G,d(s){s&&f(e),s&&f(p),s&&f(m)}}}function Y(_){let e,n,a,l;return e=new U({props:{posts:_[0].posts}}),a=new W({props:{currentPage:"1",totalPosts:_[0].total,path:"/blog/category/"+_[0].category+"/page"}}),{c(){H(e.$$.fragment),n=w(),H(a.$$.fragment)},l(t){I(e.$$.fragment,t),n=O(t),I(a.$$.fragment,t)},m(t,i){L(e,t,i),S(t,n,i),L(a,t,i),l=!0},p(t,i){const g={};i&1&&(g.posts=t[0].posts),e.$set(g);const p={};i&1&&(p.totalPosts=t[0].total),i&1&&(p.path="/blog/category/"+t[0].category+"/page"),a.$set(p)},i(t){l||(D(e.$$.fragment,t),D(a.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),T(a.$$.fragment,t),l=!1},d(t){V(e,t),t&&f(n),V(a,t)}}}function Z(_){let e,n,a,l,t,i,g,p=_[0].category+"",m,d,c,s,r;document.title=e="Tag: "+_[0].category;const A=[Y,X],h=[];function B(o,y){return o[0].posts.length?0:1}return c=B(_),s=h[c]=A[c](_),{c(){n=w(),a=$("div"),l=$("h1"),t=$("a"),i=P("Blog: "),g=$("span"),m=P(p),d=w(),s.c(),this.h()},l(o){K('[data-svelte="svelte-1sg9eye"]',document.head).forEach(f),n=O(o),a=b(o,"DIV",{class:!0});var v=k(a);l=b(v,"H1",{class:!0});var R=k(l);t=b(R,"A",{href:!0});var N=k(t);i=E(N,"Blog: "),g=b(N,"SPAN",{});var C=k(g);m=E(C,p),C.forEach(f),N.forEach(f),R.forEach(f),d=O(v),s.l(v),v.forEach(f),this.h()},h(){q(t,"href","/blog/category"),q(l,"class","tag"),q(a,"class","page")},m(o,y){S(o,n,y),S(o,a,y),u(a,l),u(l,t),u(t,i),u(t,g),u(g,m),u(a,d),h[c].m(a,null),r=!0},p(o,[y]){(!r||y&1)&&e!==(e="Tag: "+o[0].category)&&(document.title=e),(!r||y&1)&&p!==(p=o[0].category+"")&&j(m,p);let v=c;c=B(o),c===v?h[c].p(o,y):(Q(),T(h[v],1,1,()=>{h[v]=null}),M(),s=h[c],s?s.p(o,y):(s=h[c]=A[c](o),s.c()),D(s,1),s.m(a,null))},i(o){r||(D(s),r=!0)},o(o){T(s),r=!1},d(o){o&&f(n),o&&f(a),h[c].d()}}}function x(_,e,n){let{data:a}=e;return _.$$set=l=>{"data"in l&&n(0,a=l.data)},[a]}class at extends z{constructor(e){super(),F(this,e,x,Z,J,{data:0})}}export{at as default};
