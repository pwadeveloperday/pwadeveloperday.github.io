import{S as Ge,i as He,s as We,a as Me,e as z,c as Xe,b as W,g as se,t as J,d as ie,f as K,h as F,j as Ye,o as ye,k as Qe,l as Ze,m as et,n as me,p as C,q as tt,r as rt,u as nt,v as M,w as ke,x as X,y as Y,z as Ne}from"./chunks/index-cb52eba5.js";import{g as Ce,f as qe,s as H,a as be,b as at,i as ot}from"./chunks/singletons-59aaa7db.js";import{H as ge,R as xe,e as st}from"./chunks/index-56c348ce.js";const it=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),lt=function(a,e){return new URL(a,e).href},Be={},I=function(e,t,l){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=lt(s,l),s in Be)return;Be[s]=!0;const u=s.endsWith(".css"),r=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":it,u||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),u)return new Promise((y,_)=>{c.addEventListener("load",y),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function ct(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function ft(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}const ut=["href","pathname","search","searchParams","toString","toJSON"];function pt(a,e){const t=new URL(a);for(const l of ut){let s=t[l];Object.defineProperty(t,l,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(l,s,u)=>u(a,s),dt(t),t}function dt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ht(a){let e=5381,t=a.length;if(typeof a=="string")for(;t;)e=e*33^a.charCodeAt(--t);else for(;t;)e=e*33^a[--t];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(a,e)=>{if((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"){const l=new URL(a instanceof Request?a.url:a.toString(),document.baseURI).href;oe.delete(l)}return Re(a,e)};const oe=new Map;function _t(a,e,t){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof a=="string"?a:a.url)}]`;t&&typeof t.body=="string"&&(s+=`[data-hash="${ht(t.body)}"]`);const u=document.querySelector(s);if(u!=null&&u.textContent){const{body:r,...c}=JSON.parse(u.textContent),y=u.getAttribute("data-ttl");return y&&oe.set(e,{body:r,init:c,ttl:1e3*Number(y)}),Promise.resolve(new Response(r,c))}return Re(a,t)}function mt(a,e){const t=oe.get(a);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(a)}return Re(a,e)}const gt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function wt(a){const e=[],t=[];let l=!0;return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:\/|$)/).filter(yt).map((u,r,c)=>{const y=decodeURIComponent(u),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(y);if(_)return e.push(_[1]),t.push(_[2]),"(?:/(.*))?";const v=r===c.length-1;return y&&"/"+y.split(/\[(.+?)\]/).map((P,L)=>{if(L%2){const U=gt.exec(P);if(!U)throw new Error(`Invalid param: ${P}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,A,V,q]=U;return e.push(V),t.push(q),A?"(.*?)":"([^/]+?)"}return v&&P.includes(".")&&(l=!1),P.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${l?"/?":""}$`),names:e,types:t}}function yt(a){return!/^\([^)]+\)$/.test(a)}function bt(a,e,t,l){const s={};for(let u=0;u<e.length;u+=1){const r=e[u],c=t[u],y=a[u+1]||"";if(c){const _=l[c];if(!_)throw new Error(`Missing "${c}" param matcher`);if(!_(y))return}s[r]=y}return s}function vt(a,e,t,l){const s=new Set(e);return Object.entries(t).map(([c,[y,_,v]])=>{const{pattern:P,names:L,types:U}=wt(c),A={id:c,exec:V=>{const q=P.exec(V);if(q)return bt(q,L,U,l)},errors:[1,...v||[]].map(V=>a[V]),layouts:[0,..._||[]].map(r),leaf:u(y)};return A.errors.length=A.layouts.length=Math.max(A.errors.length,A.layouts.length),A});function u(c){const y=c<0;return y&&(c=~c),[y,a[c]]}function r(c){return c===void 0?c:[s.has(c),a[c]]}}function Et(a){let e,t,l;var s=a[0][0];function u(r){return{props:{data:r[2],form:r[1]}}}return s&&(e=new s(u(a))),{c(){e&&M(e.$$.fragment),t=z()},l(r){e&&ke(e.$$.fragment,r),t=z()},m(r,c){e&&X(e,r,c),W(r,t,c),l=!0},p(r,c){const y={};if(c&4&&(y.data=r[2]),c&2&&(y.form=r[1]),s!==(s=r[0][0])){if(e){se();const _=e;J(_.$$.fragment,1,0,()=>{Y(_,1)}),ie()}s?(e=new s(u(r)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(y)},i(r){l||(e&&K(e.$$.fragment,r),l=!0)},o(r){e&&J(e.$$.fragment,r),l=!1},d(r){r&&F(t),e&&Y(e,r)}}}function kt(a){let e,t,l;var s=a[0][0];function u(r){return{props:{data:r[2],$$slots:{default:[Rt]},$$scope:{ctx:r}}}}return s&&(e=new s(u(a))),{c(){e&&M(e.$$.fragment),t=z()},l(r){e&&ke(e.$$.fragment,r),t=z()},m(r,c){e&&X(e,r,c),W(r,t,c),l=!0},p(r,c){const y={};if(c&4&&(y.data=r[2]),c&521&&(y.$$scope={dirty:c,ctx:r}),s!==(s=r[0][0])){if(e){se();const _=e;J(_.$$.fragment,1,0,()=>{Y(_,1)}),ie()}s?(e=new s(u(r)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(y)},i(r){l||(e&&K(e.$$.fragment,r),l=!0)},o(r){e&&J(e.$$.fragment,r),l=!1},d(r){r&&F(t),e&&Y(e,r)}}}function Rt(a){let e,t,l;var s=a[0][1];function u(r){return{props:{data:r[3]}}}return s&&(e=new s(u(a))),{c(){e&&M(e.$$.fragment),t=z()},l(r){e&&ke(e.$$.fragment,r),t=z()},m(r,c){e&&X(e,r,c),W(r,t,c),l=!0},p(r,c){const y={};if(c&8&&(y.data=r[3]),s!==(s=r[0][1])){if(e){se();const _=e;J(_.$$.fragment,1,0,()=>{Y(_,1)}),ie()}s?(e=new s(u(r)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(y)},i(r){l||(e&&K(e.$$.fragment,r),l=!0)},o(r){e&&J(e.$$.fragment,r),l=!1},d(r){r&&F(t),e&&Y(e,r)}}}function ze(a){let e,t=a[5]&&Je(a);return{c(){e=Qe("div"),t&&t.c(),this.h()},l(l){e=Ze(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=et(e);t&&t.l(s),s.forEach(F),this.h()},h(){me(e,"id","svelte-announcer"),me(e,"aria-live","assertive"),me(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(l,s){W(l,e,s),t&&t.m(e,null)},p(l,s){l[5]?t?t.p(l,s):(t=Je(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&F(e),t&&t.d()}}}function Je(a){let e;return{c(){e=tt(a[6])},l(t){e=rt(t,a[6])},m(t,l){W(t,e,l)},p(t,l){l&64&&nt(e,t[6])},d(t){t&&F(e)}}}function Lt(a){let e,t,l,s,u;const r=[kt,Et],c=[];function y(v,P){return v[0][1]?0:1}e=y(a),t=c[e]=r[e](a);let _=a[4]&&ze(a);return{c(){t.c(),l=Me(),_&&_.c(),s=z()},l(v){t.l(v),l=Xe(v),_&&_.l(v),s=z()},m(v,P){c[e].m(v,P),W(v,l,P),_&&_.m(v,P),W(v,s,P),u=!0},p(v,[P]){let L=e;e=y(v),e===L?c[e].p(v,P):(se(),J(c[L],1,1,()=>{c[L]=null}),ie(),t=c[e],t?t.p(v,P):(t=c[e]=r[e](v),t.c()),K(t,1),t.m(l.parentNode,l)),v[4]?_?_.p(v,P):(_=ze(v),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(v){u||(K(t),u=!0)},o(v){J(t),u=!1},d(v){c[e].d(v),v&&F(l),_&&_.d(v),v&&F(s)}}}function Pt(a,e,t){let{stores:l}=e,{page:s}=e,{components:u}=e,{form:r}=e,{data_0:c=null}=e,{data_1:y=null}=e;Ye(l.page.notify);let _=!1,v=!1,P=null;return ye(()=>{const L=l.page.subscribe(()=>{_&&(t(5,v=!0),t(6,P=document.title||"untitled page"))});return t(4,_=!0),L}),a.$$set=L=>{"stores"in L&&t(7,l=L.stores),"page"in L&&t(8,s=L.page),"components"in L&&t(0,u=L.components),"form"in L&&t(1,r=L.form),"data_0"in L&&t(2,c=L.data_0),"data_1"in L&&t(3,y=L.data_1)},a.$$.update=()=>{a.$$.dirty&384&&l.page.set(s)},[u,r,c,y,_,v,P,l,s]}class St extends Ge{constructor(e){super(),He(this,e,Pt,Lt,We,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ot={},le=[()=>I(()=>import("./chunks/0-7125bd2d.js"),["chunks/0-7125bd2d.js","chunks/_layout-127e3191.js","chunks/index-56c348ce.js","components/pages/_layout.svelte-5073953a.js","assets/_layout-9a446563.css","chunks/index-cb52eba5.js","chunks/config-1cc2bd8c.js","chunks/singletons-59aaa7db.js"],import.meta.url),()=>I(()=>import("./chunks/1-7ea04e05.js"),["chunks/1-7ea04e05.js","components/pages/_error.svelte-b429212f.js","chunks/index-cb52eba5.js","chunks/singletons-59aaa7db.js"],import.meta.url),()=>I(()=>import("./chunks/2-c84a12ae.js"),["chunks/2-c84a12ae.js","components/pages/_page.svelte-d3c795cb.js","chunks/index-cb52eba5.js","chunks/config-1cc2bd8c.js"],import.meta.url),()=>I(()=>import("./chunks/3-97962810.js"),["chunks/3-97962810.js","components/pages/2021/_page.svelte-49cfa91f.js","chunks/index-cb52eba5.js"],import.meta.url),()=>I(()=>import("./chunks/4-12728efb.js"),["chunks/4-12728efb.js","components/pages/2022/_page.svelte-cd9e2a20.js","chunks/index-cb52eba5.js"],import.meta.url),()=>I(()=>import("./chunks/5-b102bed5.js"),["chunks/5-b102bed5.js","components/pages/about/_page.md-317ff96f.js","chunks/index-cb52eba5.js"],import.meta.url),()=>I(()=>import("./chunks/6-f9b5b9ad.js"),["chunks/6-f9b5b9ad.js","components/pages/app/_page.md-22dc34e4.js","chunks/index-cb52eba5.js"],import.meta.url),()=>I(()=>import("./chunks/7-dfec00f1.js"),["chunks/7-dfec00f1.js","components/pages/blog/_page.svelte-ecc289e9.js","chunks/index-cb52eba5.js","chunks/Pagination-cf9a121a.js","chunks/config-1cc2bd8c.js"],import.meta.url),()=>I(()=>import("./chunks/8-d5090634.js"),["chunks/8-d5090634.js","components/pages/blog/_post_/_page.svelte-096e0d26.js","chunks/index-cb52eba5.js"],import.meta.url),()=>I(()=>import("./chunks/9-f654eba2.js"),["chunks/9-f654eba2.js","components/pages/blog/category/_page.svelte-181387fa.js","chunks/index-cb52eba5.js"],import.meta.url),()=>I(()=>import("./chunks/10-d359c711.js"),["chunks/10-d359c711.js","components/pages/blog/category/_category_/_page.svelte-7b9c8878.js","chunks/index-cb52eba5.js","chunks/Pagination-cf9a121a.js","chunks/config-1cc2bd8c.js"],import.meta.url),()=>I(()=>import("./chunks/11-d59e1dd0.js"),["chunks/11-d59e1dd0.js","components/pages/blog/category/_category_/page/_page.svelte-69e14ea7.js","chunks/index-cb52eba5.js"],import.meta.url),()=>I(()=>import("./chunks/12-45b1e7f0.js"),["chunks/12-45b1e7f0.js","components/pages/blog/category/_category_/page/_page_/_page.svelte-4c7bed8a.js","chunks/index-cb52eba5.js","chunks/Pagination-cf9a121a.js","chunks/config-1cc2bd8c.js"],import.meta.url),()=>I(()=>import("./chunks/13-a2b4026c.js"),["chunks/13-a2b4026c.js","components/pages/blog/category/page/_page_/_page.svelte-6c5b867e.js","chunks/index-cb52eba5.js","chunks/Pagination-cf9a121a.js","chunks/config-1cc2bd8c.js"],import.meta.url),()=>I(()=>import("./chunks/14-ac461c27.js"),["chunks/14-ac461c27.js","components/pages/blog/page/_page.svelte-020ec8ef.js","chunks/index-cb52eba5.js"],import.meta.url),()=>I(()=>import("./chunks/15-eb545bbf.js"),["chunks/15-eb545bbf.js","components/pages/blog/page/_page_/_page.svelte-1e798112.js","chunks/index-cb52eba5.js","chunks/Pagination-cf9a121a.js","chunks/config-1cc2bd8c.js"],import.meta.url),()=>I(()=>import("./chunks/16-99bb2358.js"),["chunks/16-99bb2358.js","components/pages/code-of-conduct/_page.md-7f1ad636.js","chunks/index-cb52eba5.js"],import.meta.url),()=>I(()=>import("./chunks/17-d03b4bad.js"),["chunks/17-d03b4bad.js","components/pages/link/_page.md-3a890473.js","chunks/index-cb52eba5.js"],import.meta.url),()=>I(()=>import("./chunks/18-53b84f6d.js"),["chunks/18-53b84f6d.js","components/pages/privacy/_page.md-2718e724.js","chunks/index-cb52eba5.js"],import.meta.url)],$t=[],At={"":[-3],2021:[3],2022:[4],about:[5],app:[6],blog:[-8],"code-of-conduct":[16],link:[17],privacy:[18],"blog/category":[-10],"blog/page":[-15],"blog/category/page/[page]":[-14],"blog/category/[category]":[-11],"blog/page/[page]":[-16],"blog/category/[category]/page":[-12],"blog/category/[category]/page/[page]":[-13],"blog/[post]":[-9]},It="/__data.js",Fe="sveltekit:scroll",B="sveltekit:index",re=vt(le,$t,At,Ot),ve=le[0],Ee=le[1];ve();Ee();let ee={};try{ee=JSON.parse(sessionStorage[Fe])}catch{}function we(a){ee[a]=be()}function Tt({target:a,base:e,trailing_slash:t}){var De;const l=[],s={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,session_id:0,url:null},c=!1,y=!0,_=!1,v=1,P=null,L=!1,U,A=(De=history.state)==null?void 0:De[B];A||(A=Date.now(),history.replaceState({...history.state,[B]:A},"",location.href));const V=ee[A];V&&(history.scrollRestoration="manual",scrollTo(V.x,V.y));let q=!1,x,Le;function Pe(){if(!P){const n=new URL(location.href);P=Promise.resolve().then(async()=>{const i=pe(n,!0);await Oe(i,n,[]),P=null,L=!1})}return P}async function ce(n,{noscroll:i=!1,replaceState:p=!1,keepfocus:o=!1,state:f={}},d){return typeof n=="string"&&(n=new URL(n,Ce(document))),de({url:n,scroll:i?be():null,keepfocus:o,redirect_chain:d,details:{state:f,replaceState:p},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Se(n){const i=pe(n,!1);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s.promise=Ie(i),s.id=i.id,s.promise}async function Oe(n,i,p,o,f){var E,k;const d=Le={};let h=n&&await Ie(n);if(!h&&i.origin===location.origin&&i.pathname===location.pathname&&(h=await te({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!h)return await Z(i),!1;if(i=(n==null?void 0:n.url)||i,Le!==d)return!1;if(l.length=0,h.type==="redirect")if(p.length>10||p.includes(i.pathname))h=await te({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return ce(new URL(h.location,i).href,{},[...p,i.pathname]),!1;else((k=(E=h.props)==null?void 0:E.page)==null?void 0:k.status)>=400&&await H.updated.check()&&await Z(i);if(_=!0,o&&o.details){const{details:b}=o,m=b.replaceState?0:1;b.state[B]=A+=m,history[b.replaceState?"replaceState":"pushState"](b.state,"",i)}if(c){r=h.state,h.props.page&&(h.props.page.url=i);const b=ae();U.$set(h.props),b()}else $e(h);if(o){const{scroll:b,keepfocus:m}=o;if(!m){const R=document.body,j=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var S;(S=getSelection())==null||S.removeAllRanges()}),j!==null?R.setAttribute("tabindex",j):R.removeAttribute("tabindex")}if(await Ne(),y){const R=i.hash&&document.getElementById(i.hash.slice(1));b?scrollTo(b.x,b.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ne();s.promise=null,s.id=null,y=!0,h.props.page&&(x=h.props.page),f&&f(),_=!1}function $e(n){var f,d;r=n.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),x=n.props.page;const p=ae();U=new St({target:a,props:{...n.props,stores:H},hydrate:!0}),p();const o={from:null,to:ne("to",{params:r.params,routeId:(d=(f=r.route)==null?void 0:f.id)!=null?d:null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(h=>h(o)),c=!0}async function Q({url:n,params:i,branch:p,status:o,error:f,route:d,form:h}){var j;const E=p.filter(Boolean),k={type:"loaded",state:{url:n,params:i,branch:p,error:f,route:d,session_id:v},props:{components:E.map(S=>S.node.component)}};h!==void 0&&(k.props.form=h);let b={},m=!x;for(let S=0;S<E.length;S+=1){const T=E[S];b={...b,...T.data},(m||!r.branch.some(D=>D===T))&&(k.props[`data_${S}`]=b,m=m||Object.keys((j=T.data)!=null?j:{}).length>0)}if(m||(m=Object.keys(x.data).length!==Object.keys(b).length),!r.url||n.href!==r.url.href||r.error!==f||m){k.props.page={error:f,params:i,routeId:d&&d.id,status:o,url:n,data:m?b:x.data};const S=(T,D)=>{Object.defineProperty(k.props.page,T,{get:()=>{throw new Error(`$page.${T} has been replaced by $page.url.${D}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return k}async function fe({loader:n,parent:i,url:p,params:o,routeId:f,server_data_node:d}){var b,m,R,j,S;let h=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await n();if((b=k.shared)!=null&&b.load){let T=function(...g){for(const $ of g){const{href:O}=new URL($,p);E.dependencies.add(O)}};const D={};for(const g in o)Object.defineProperty(D,g,{get(){return E.params.add(g),o[g]},enumerable:!0});const w={routeId:f,params:D,data:(m=d==null?void 0:d.data)!=null?m:null,url:pt(p,()=>{E.url=!0}),async fetch(g,$){let O;typeof g=="string"?O=g:(O=g.url,$={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...$});const N=new URL(O,p).href;return T(N),c?mt(N,$):_t(O,N,$)},setHeaders:()=>{},depends:T,parent(){return E.parent=!0,i()}};Object.defineProperties(w,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),h=(R=await k.shared.load.call(null,w))!=null?R:null}return{node:k,loader:n,server:d,shared:(j=k.shared)!=null&&j.load?{type:"data",data:h,uses:E}:null,data:(S=h!=null?h:d==null?void 0:d.data)!=null?S:null}}function Ae(n,i,p){if(L)return!0;if(!p)return!1;if(p.parent&&i||n.url&&p.url)return!0;for(const o of n.params)if(p.params.has(o))return!0;for(const o of p.dependencies)if(l.some(f=>f(new URL(o))))return!0;return!1}function ue(n,i){var p,o;return(n==null?void 0:n.type)==="data"?{type:"data",data:n.data,uses:{dependencies:new Set((p=n.uses.dependencies)!=null?p:[]),params:new Set((o=n.uses.params)!=null?o:[]),parent:!!n.uses.parent,url:!!n.uses.url}}:(n==null?void 0:n.type)==="skip"&&i!=null?i:null}async function Ie({id:n,invalidating:i,url:p,params:o,route:f}){if(s.id===n&&s.promise)return s.promise;const{errors:d,layouts:h,leaf:E}=f,k=r.url&&{url:n!==r.url.pathname+r.url.search,params:Object.keys(o).filter(w=>r.params[w]!==o[w])},b=[...h,E];d.forEach(w=>w==null?void 0:w().catch(()=>{})),b.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let m=null;const R=b.reduce((w,g,$)=>{var G;const O=r.branch[$],N=!!(g!=null&&g[0])&&((O==null?void 0:O.loader)!==g[1]||Ae(k,w.some(Boolean),(G=O.server)==null?void 0:G.uses));return w.push(N),w},[]);if(R.some(Boolean)){try{m=await Ke(p,R)}catch(w){return te({status:500,error:w,url:p,routeId:f.id})}if(m.type==="redirect")return m}const j=m==null?void 0:m.nodes;let S=!1;const T=b.map(async(w,g)=>{var he,je;if(!w)return;const $=r.branch[g],O=(he=j==null?void 0:j[g])!=null?he:null;if((!O||O.type==="skip")&&w[1]===($==null?void 0:$.loader)&&!Ae(k,S,(je=$.shared)==null?void 0:je.uses))return $;if(S=!0,(O==null?void 0:O.type)==="error")throw O.httperror?st(O.httperror.status,O.httperror.message):O.error;return fe({loader:w[1],url:p,params:o,routeId:f.id,parent:async()=>{var Ve;const Ue={};for(let _e=0;_e<g;_e+=1)Object.assign(Ue,(Ve=await T[_e])==null?void 0:Ve.data);return Ue},server_data_node:ue(O,$==null?void 0:$.server)})});for(const w of T)w.catch(()=>{});const D=[];for(let w=0;w<b.length;w+=1)if(b[w])try{D.push(await T[w])}catch(g){const $=g;if($ instanceof xe)return{type:"redirect",location:$.location};const O=g instanceof ge?g.status:500;for(;w--;)if(d[w]){let N,G=w;for(;!D[G];)G-=1;try{return N={node:await d[w](),loader:d[w],data:{},server:null,shared:null},await Q({url:p,params:o,branch:D.slice(0,G+1).concat(N),status:O,error:$,route:f})}catch{continue}}await Z(p);return}else D.push(void 0);return await Q({url:p,params:o,branch:D,status:200,error:null,route:f,form:i?void 0:null})}async function te({status:n,error:i,url:p,routeId:o}){var b;const f={},d=await ve();let h=null;if(d.server)try{const m=await Ke(p,[!0]);if(m.type!=="data"||m.nodes[0]&&m.nodes[0].type!=="data")throw 0;h=(b=m.nodes[0])!=null?b:null}catch{await Z(p);return}const E=await fe({loader:ve,url:p,params:f,routeId:o,parent:()=>Promise.resolve({}),server_data_node:ue(h)}),k={node:await Ee(),loader:Ee,shared:null,server:null,data:null};return await Q({url:p,params:f,branch:[E,k],status:n,error:i,route:null})}function pe(n,i){if(Te(n))return;const p=decodeURI(n.pathname.slice(e.length)||"/");for(const o of re){const f=o.exec(p);if(f){const d=new URL(n.origin+ct(n.pathname,t)+n.search+n.hash);return{id:d.pathname+d.search,invalidating:i,route:o,params:ft(f),url:d}}}}function Te(n){return n.origin!==location.origin||!n.pathname.startsWith(e)}async function de({url:n,scroll:i,keepfocus:p,redirect_chain:o,details:f,type:d,delta:h,accepted:E,blocked:k}){var S,T,D,w;let b=!1;const m=pe(n,!1),R={from:ne("from",{params:r.params,routeId:(T=(S=r.route)==null?void 0:S.id)!=null?T:null,url:r.url}),to:ne("to",{params:(D=m==null?void 0:m.params)!=null?D:null,routeId:(w=m==null?void 0:m.route.id)!=null?w:null,url:n}),type:d};h!==void 0&&(R.delta=h);const j={...R,cancel:()=>{b=!0}};if(u.before_navigate.forEach(g=>g(j)),b){k();return}we(A),E(),c&&H.navigating.set(R),await Oe(m,n,o,{scroll:i,keepfocus:p,details:f},()=>{u.after_navigate.forEach(g=>g(R)),H.navigating.set(null)})}function Z(n){return location.href=n.href,new Promise(()=>{})}return{after_navigate:n=>{ye(()=>(u.after_navigate.push(n),()=>{const i=u.after_navigate.indexOf(n);u.after_navigate.splice(i,1)}))},before_navigate:n=>{ye(()=>(u.before_navigate.push(n),()=>{const i=u.before_navigate.indexOf(n);u.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(_||!c)&&(y=!1)},goto:(n,i={})=>ce(n,i,[]),invalidate:n=>{if(n===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof n=="function")l.push(n);else{const{href:i}=new URL(n,location.href);l.push(p=>p.href===i)}return Pe()},invalidateAll:()=>(L=!0,Pe()),prefetch:async n=>{const i=new URL(n,Ce(document));await Se(i)},prefetch_routes:async n=>{const p=(n?re.filter(o=>n.some(f=>o.exec(f))):re).map(o=>Promise.all([...o.layouts,o.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(p)},apply_action:async n=>{if(n.type==="error"){const i=new URL(location.href),{branch:p,route:o}=r;if(!o)return;let f=r.branch.length;for(;f--;)if(o.errors[f]){let d,h=f;for(;!p[h];)h-=1;try{d={node:await o.errors[f](),loader:o.errors[f],data:{},server:null,shared:null};const E=await Q({url:i,params:r.params,branch:p.slice(0,h+1).concat(d),status:500,error:n.error,route:o});r=E.state;const k=ae();U.$set(E.props),k();return}catch{continue}}}else if(n.type==="redirect")ce(n.location,{},[]);else{const i={form:n.data};n.status!==x.status&&(i.page={...x,status:n.status});const p=ae();U.$set(i),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var h,E;let f=!1;const d={from:ne("from",{params:r.params,routeId:(E=(h=r.route)==null?void 0:h.id)!=null?E:null,url:r.url}),to:null,type:"unload",cancel:()=>f=!0};u.before_navigate.forEach(k=>k(d)),f?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){we(A);try{sessionStorage[Fe]=JSON.stringify(ee)}catch{}}});const n=o=>{const{url:f,options:d}=qe(o);if(f&&d.prefetch){if(Te(f))return;Se(f)}};let i;const p=o=>{clearTimeout(i),i=setTimeout(()=>{var f;(f=o.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",n),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",n),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:f,url:d,options:h}=qe(o);if(!f||!d)return;const E=f instanceof SVGAElement;if(!E&&!(d.protocol==="https:"||d.protocol==="http:"))return;const k=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||k.includes("external")||h.reload||(E?f.target.baseVal:f.target))return;const[b,m]=d.href.split("#");if(m!==void 0&&b===location.href.split("#")[0]){q=!0,we(A),H.page.set({...x,url:d}),H.page.notify();return}de({url:d,scroll:h.noscroll?be():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:d.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{if(o.state){if(o.state[B]===A)return;const f=o.state[B]-A;de({url:new URL(location.href),scroll:ee[o.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=o.state[B]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[B]:++A},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&H.navigating.set(null)})},_hydrate:async({status:n,error:i,node_ids:p,params:o,routeId:f,data:d,form:h})=>{var b;const E=new URL(location.href);let k;try{const m=p.map(async(R,j)=>{const S=d[j];return fe({loader:le[R],url:E,params:o,routeId:f,parent:async()=>{const T={};for(let D=0;D<j;D+=1)Object.assign(T,(await m[D]).data);return T},server_data_node:ue(S)})});k=await Q({url:E,params:o,branch:await Promise.all(m),status:n,error:i!=null&&i.__is_http_error?new ge(i.status,i.message):i,form:h,route:(b=re.find(R=>R.id===f))!=null?b:null})}catch(m){const R=m;if(R instanceof xe){await Z(new URL(m.location,location.href));return}k=await te({status:R instanceof ge?R.status:500,error:R,url:E,routeId:f})}$e(k)}}}let Dt=1;async function Ke(a,e){const t=new URL(a);t.pathname=a.pathname.replace(/\/$/,"")+It,t.searchParams.set("__invalid",e.map(s=>s?"y":"n").join("")),t.searchParams.set("__id",String(Dt++)),await I(()=>import(t.href),[],import.meta.url);const l=window.__sveltekit_data;return delete window.__sveltekit_data,l}const jt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ne(a,e){for(const t of jt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${a}.${t} should now be ${a}.url.${t}`)}});return e}function ae(){return()=>{}}async function Ct({env:a,hydrate:e,paths:t,target:l,trailing_slash:s}){at(t);const u=Tt({target:l,base:t.base,trailing_slash:s});ot({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{Ct as start};