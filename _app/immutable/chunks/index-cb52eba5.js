function x(){}const V=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function W(){return Object.create(null)}function b(t){t.forEach(X)}function B(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function Bt(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function mt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t,e,n){t.$$.on_destroy.push(pt(e,n))}function Ft(t,e,n,i){if(t){const r=Y(t,e,n,i);return t[0](r)}}function Y(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function Gt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function It(t,e,n,i,r,o){if(r){const s=Y(e,n,i,o);t.p(s,r)}}function Wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const Z=typeof window<"u";let tt=Z?()=>window.performance.now():()=>Date.now(),z=Z?t=>requestAnimationFrame(t):x;const y=new Set;function et(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),y.size!==0&&z(et)}function nt(t){let e;return y.size===0&&z(et),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}let q=!1;function gt(){q=!0}function yt(){q=!1}function xt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:xt(1,r,_=>e[n[_]].claim_order,c))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,r=Math.max(a,r)}const o=[],s=[];let u=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);u>=l;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<o.length&&s[l].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(s[l],f)}}function wt(t,e){t.appendChild(e)}function $t(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t,e){return wt(t.head||t,e),e.sheet}function Et(t,e){if(q){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){t.insertBefore(e,n||null)}function At(t,e,n){q&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode.removeChild(t)}function Jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function it(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Kt(){return G(" ")}function Qt(){return G("")}function Ut(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Vt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Yt(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function kt(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,i,r=!1){rt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function lt(t,e,n,i){return st(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Zt(t,e,n){return lt(t,e,n,F)}function te(t,e,n){return lt(t,e,n,it)}function Tt(t,e){return st(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function ee(t){return Tt(t," ")}function J(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function ne(t,e){const n=J(t,"HTML_TAG_START",0),i=J(t,"HTML_TAG_END",n);if(n===i)return new K(void 0,e);rt(t);const r=t.splice(n,i-n+1);E(r[0]),E(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(o,e)}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function se(t,e,n){t.classList[n?"add":"remove"](e)}function St(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function le(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Ct{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=it(n.nodeName):this.e=F(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class K extends Ct{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}}const j=new Map;let H=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t){const e={style_element:F("style"),rules:{}};return j.set(t,e),e}function ct(t,e,n,i,r,o,s,u=0){const l=16.666/i;let c=`{
`;for(let d=0;d<=1;d+=l){const k=e+(n-e)*o(d);c+=d*100+`%{${s(k,1-k)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Mt(f)}_${u}`,_=$t(t),{style_element:h,rules:m}=j.get(_)||jt(_);if(!m[a]){const d=vt(_,h);m[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length)}const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,H+=1,a}function P(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),H-=r,H||Ht())}function Ht(){z(()=>{H||(j.forEach(t=>{const{style_element:e}=t;E(e)}),j.clear())})}let N;function v(t){N=t}function ot(){if(!N)throw new Error("Function called outside component initialization");return N}function ce(t){ot().$$.on_mount.push(t)}function oe(t){ot().$$.after_update.push(t)}const $=[],Q=[],C=[],U=[],ut=Promise.resolve();let R=!1;function at(){R||(R=!0,ut.then(ft))}function ue(){return at(),ut}function A(t){C.push(t)}const O=new Set;let S=0;function ft(){const t=N;do{for(;S<$.length;){const e=$[S];S++,v(e),Lt(e.$$)}for(v(null),$.length=0,S=0;Q.length;)Q.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];O.has(n)||(O.add(n),n())}C.length=0}while($.length);for(;U.length;)U.pop()();R=!1,O.clear(),v(t)}function Lt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let w;function _t(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function L(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const M=new Set;let g;function ae(){g={r:0,c:[],p:g}}function fe(){g.r||b(g.c),g=g.p}function qt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function _e(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),g.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const dt={duration:0};function de(t,e,n){let i=e(t,n),r=!1,o,s,u=0;function l(){o&&P(t,o)}function c(){const{delay:a=0,duration:_=300,easing:h=V,tick:m=x,css:p}=i||dt;p&&(o=ct(t,0,1,_,a,h,p,u++)),m(0,1);const d=tt()+a,k=d+_;s&&s.abort(),r=!0,A(()=>L(t,!0,"start")),s=nt(D=>{if(r){if(D>=k)return m(1,0),L(t,!0,"end"),l(),r=!1;if(D>=d){const I=h((D-d)/_);m(I,1-I)}}return r})}let f=!1;return{start(){f||(f=!0,P(t),B(i)?(i=i(),_t().then(c)):c())},invalidate(){f=!1},end(){r&&(l(),r=!1)}}}function he(t,e,n){let i=e(t,n),r=!0,o;const s=g;s.r+=1;function u(){const{delay:l=0,duration:c=300,easing:f=V,tick:a=x,css:_}=i||dt;_&&(o=ct(t,1,0,c,l,f,_));const h=tt()+l,m=h+c;A(()=>L(t,!1,"start")),nt(p=>{if(r){if(p>=m)return a(0,1),L(t,!1,"end"),--s.r||b(s.c),!1;if(p>=h){const d=f((p-h)/c);a(1-d,d)}}return r})}return B(i)?_t().then(()=>{i=i(),u()}):u(),{end(l){l&&i.tick&&i.tick(1,0),r&&(o&&P(t,o),r=!1)}}}function me(t){t&&t.c()}function pe(t,e){t&&t.l(e)}function Dt(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:s,after_update:u}=t.$$;r&&r.m(e,n),i||A(()=>{const l=o.map(X).filter(B);s?s.push(...l):b(l),t.$$.on_mount=[]}),u.forEach(A)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&($.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,i,r,o,s,u=[-1]){const l=N;v(t);const c=t.$$={fragment:null,ctx:null,props:o,update:x,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:W(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...h)=>{const m=h.length?h[0]:_;return c.ctx&&r(c.ctx[a],c.ctx[a]=m)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](m),f&&Pt(t,a)),_}):[],c.update(),f=!0,b(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){gt();const a=kt(e.target);c.fragment&&c.fragment.l(a),a.forEach(E)}else c.fragment&&c.fragment.c();e.intro&&qt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),yt(),ft()}v(l)}class ye{$destroy(){Ot(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{x as A,Ft as B,se as C,Et as D,Ut as E,It as F,Wt as G,Gt as H,zt as I,Jt as J,it as K,te as L,Vt as M,V as N,A as O,de as P,he as Q,le as R,ye as S,Bt as T,K as U,ne as V,Yt as W,Kt as a,At as b,ee as c,fe as d,Qt as e,qt as f,ae as g,E as h,ge as i,oe as j,F as k,Zt as l,kt as m,Xt as n,ce as o,re as p,G as q,Tt as r,Rt as s,_e as t,ie as u,me as v,pe as w,Dt as x,Ot as y,ue as z};
