import{S as ni,i as hi,s as ui,k as s,l as a,m as r,h as l,n as t,b as F,A as ii,J as fi,q as d,a as i,r as v,c,D as e,u as ci,v as _i,R as mi,w as pi,T as S,x as gi,f as Ei,t as Ii,y as Ai}from"../../chunks/index-a5c414f5.js";import{s as oi}from"../../chunks/config-1cc2bd8c.js";function di(V,h,p){const o=V.slice();return o[1]=h[p],o}function vi(V){let h,p,o,n,D=V[1].title+"",_,P,R,W,f=V[1].excerpt+"",w,y;return{c(){h=s("li"),p=s("article"),o=s("a"),n=s("h1"),_=d(D),R=i(),W=s("p"),w=d(f),y=i(),this.h()},l(I){h=a(I,"LI",{});var A=r(h);p=a(A,"ARTICLE",{});var Se=r(p);o=a(Se,"A",{href:!0});var Be=r(o);n=a(Be,"H1",{});var G=r(n);_=v(G,D),G.forEach(l),Be.forEach(l),Se.forEach(l),R=c(A),W=a(A,"P",{});var B=r(W);w=v(B,f),B.forEach(l),y=c(A),A.forEach(l),this.h()},h(){t(o,"href",P="/blog/"+V[1].slug)},m(I,A){F(I,h,A),e(h,p),e(p,o),e(o,n),e(n,_),e(h,R),e(h,W),e(W,w),e(h,y)},p(I,A){A&1&&D!==(D=I[1].title+"")&&ci(_,D),A&1&&P!==(P="/blog/"+I[1].slug)&&t(o,"href",P),A&1&&f!==(f=I[1].excerpt+"")&&ci(w,f)},d(I){I&&l(h)}}}function Di(V){let h,p=V[0],o=[];for(let n=0;n<p.length;n+=1)o[n]=vi(di(V,p,n));return{c(){h=s("ul");for(let n=0;n<o.length;n+=1)o[n].c();this.h()},l(n){h=a(n,"UL",{class:!0});var D=r(h);for(let _=0;_<o.length;_+=1)o[_].l(D);D.forEach(l),this.h()},h(){t(h,"class","posts-list home")},m(n,D){F(n,h,D);for(let _=0;_<o.length;_+=1)o[_].m(h,null)},p(n,[D]){if(D&1){p=n[0];let _;for(_=0;_<p.length;_+=1){const P=di(n,p,_);o[_]?o[_].p(P,D):(o[_]=vi(P),o[_].c(),o[_].m(h,null))}for(;_<o.length;_+=1)o[_].d(1);o.length=p.length}},i:ii,o:ii,d(n){n&&l(h),fi(o,n)}}}function Vi(V,h,p){let{posts:o=[]}=h;return V.$$set=n=>{"posts"in n&&p(0,o=n.posts)},[o]}class Wi extends ni{constructor(h){super(),hi(this,h,Vi,Di,ui,{posts:0})}}function bi(V){let h,p,o,n,D,_,P,R,W,f,w,y,I,A,Se,Be,G,B,Ts,L,Fe,Hs,$s,Re,qs,Cs,ze,js,Ss,Ue,ve,z,Je,Bs,Fs,U,Ne,Rs,k,Qe,zs,Us,Ke,Js,Ns,Oe,Qs,Ks,Xe,ne,J,Ye,Os,Xs,N,Ze,Ys,x,et,Zs,ea,tt,ta,sa,st,aa,la,at,he,Q,lt,ra,ia,K,rt,ca,M,it,oa,da,ct,va,na,ot,ha,ua,dt,ue,O,vt,fa,_a,X,nt,ma,T,ht,pa,ga,ut,Ea,Ia,ft,Aa,Da,_t,fe,Y,mt,Va,Wa,Z,pt,ba,H,gt,Pa,wa,Et,ya,Ga,It,La,ka,At,_e,ee,Dt,xa,Ma,te,Vt,Ta,$,Wt,Ha,$a,bt,qa,Ca,Pt,ja,Sa,wt,me,se,yt,Ba,Fa,ae,Gt,Ra,q,Lt,za,Ua,kt,Ja,Na,xt,Qa,Ka,Mt,pe,le,Tt,Oa,Xa,re,Ht,Ya,C,$t,Za,el,qt,tl,sl,Ct,al,ll,jt,ge,ie,St,rl,il,ce,Bt,cl,j,Ft,ol,dl,Rt,vl,nl,zt,hl,hs,oe,us,Ee,m,Ut,Ie,Ae,Dl,ul,Jt,De,Ve,Vl,fl,Nt,We,be,Wl,_l,Qt,Pe,we,bl,ml,Kt,ye,Ge,Pl,pl,Ot,Le,ke,wl,gl,Xt,xe,Me,yl,El,Yt,Te,He,Gl,Il,Zt,$e,qe,Ll,Al,es,Ce,je,kl,ns;return document.title=h=oi,oe=new Wi({props:{posts:V[0].posts}}),{c(){p=i(),o=s("div"),n=d(`\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (Progressive Web Apps, PWA) \u57FA\u4E8E\u5F00\u653E\u7684\xA0Web \u6807\u51C6\u5F00\u53D1\uFF0C\u901A\u8FC7\u73B0\u4EE3
  Web API
  \u6784\u5EFA\u548C\u589E\u5F3A\uFF0C\u5177\u6709\u53EF\u53D1\u73B0\u3001\u53EF\u5B89\u88C5\u3001\u53EF\u94FE\u63A5\u3001\u53EF\u79BB\u7EBF\u3001\u53EF\u540C\u6B65\u53CA\u53EF\u63A8\u9001\u7B49\u7B49\u4E00\u7CFB\u5217\u7279\u70B9\uFF0C\u66F4\u5177\u5907\u4E00\u5957\u4EE3\u7801\u5373\u53EF\u89E6\u8FBE\u4EFB\u4F55\u4EBA\u3001\u4EFB\u4F55\u8BBE\u5907\u7684\u4F18\u52BF\u5E76\u786E\u4FDD\u5B89\u5168\u6027\u3002`),D=s("br"),_=s("br"),P=d(`\u4E3A\u52A0\u901F\u63A8\u52A8\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (Progressive Web Apps, PWA)
  \u5728\u4E2D\u56FD\u7684\u53D1\u5C55\uFF0C\u5FAE\u8F6F\u3001\u82F1\u7279\u5C14\u4E0E\u8C37\u6B4C\u643A\u624B\u4E3E\u529E\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5\u6D3B\u52A8\u3002
  \u8BE5\u6D3B\u52A8\u9080\u8BF7\u4E00\u4F17\u4E1A\u754C\u5927\u5496\u56F4\u7ED5 PWA \u5C55\u5F00\u5206\u4EAB\uFF0C\u63A2\u8BA8\u6700\u65B0\u6280\u672F\u8FDB\u5C55\uFF0C\u4EE5\u53CA PWA
  \u751F\u6001\u7684\u5B9E\u8DF5\u4E0E\u843D\u5730\u3002`),R=i(),W=s("div"),f=s("div"),w=s("a"),y=s("div"),I=s("div"),A=s("h1"),Se=d("\u5F00\u5E55\u81F4\u8F9E"),Be=i(),G=s("div"),B=s("div"),Ts=i(),L=s("div"),Fe=s("div"),Hs=d("\u5F20\u7426"),$s=i(),Re=s("div"),qs=d("\u8D44\u6DF1\u6280\u672F\u603B\u76D1"),Cs=i(),ze=s("div"),js=d("\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B"),Ss=i(),Ue=s("a"),ve=s("div"),z=s("div"),Je=s("h1"),Bs=d("\u5F00\u573A\u6F14\u8BB2 PWAs & MiniApps"),Fs=i(),U=s("div"),Ne=s("div"),Rs=i(),k=s("div"),Qe=s("div"),zs=d("Alex Russell"),Us=i(),Ke=s("div"),Js=d("PWA \u4E4B\u7236 \u5168\u7403\u5408\u4F19\u4EBA\u4EA7\u54C1\u7ECF\u7406"),Ns=i(),Oe=s("div"),Qs=d("\u5FAE\u8F6F Edge \u6D4F\u89C8\u5668\u56E2\u961F"),Ks=i(),Xe=s("a"),ne=s("div"),J=s("div"),Ye=s("h1"),Os=d("Take Full Advantage of a PWA"),Xs=i(),N=s("div"),Ze=s("div"),Ys=i(),x=s("div"),et=s("div"),Zs=d("\u4E1B\u6167\u541B"),ea=i(),tt=s("div"),ta=d("\u9AD8\u7EA7\u89E3\u51B3\u65B9\u6848\u987E\u95EE"),sa=i(),st=s("div"),aa=d("Google Chrome & Web Platform"),la=i(),at=s("a"),he=s("div"),Q=s("div"),lt=s("h1"),ra=d("\u91CD\u6E29 PWA \u6280\u672F\u7684\u73B0\u5B9E\u610F\u4E49"),ia=i(),K=s("div"),rt=s("div"),ca=i(),M=s("div"),it=s("div"),oa=d("\u5B8B\u9752\u89C1"),da=i(),ct=s("div"),va=d("\u9996\u5E2D\u4EA7\u54C1\u7ECF\u7406"),na=i(),ot=s("div"),ha=d("\u5FAE\u8F6F Edge \xB7 \u5F00\u53D1\u8005\u751F\u6001"),ua=i(),dt=s("a"),ue=s("div"),O=s("div"),vt=s("h1"),fa=d("The World of PWA Tools"),_a=i(),X=s("div"),nt=s("div"),ma=i(),T=s("div"),ht=s("div"),pa=d("Justin Willis & Amrutha Srinivasan"),ga=i(),ut=s("div"),Ea=d("\u8F6F\u4EF6\u5DE5\u7A0B\u5E08"),Ia=i(),ft=s("div"),Aa=d("\u5FAE\u8F6F PWABuilder"),Da=i(),_t=s("a"),fe=s("div"),Y=s("div"),mt=s("h1"),Va=d("\u8DD1\u5728 PWA \u91CC\u7684 '\u5C0F\u7A0B\u5E8F'"),Wa=i(),Z=s("div"),pt=s("div"),ba=i(),H=s("div"),gt=s("div"),Pa=d("\u6731\u5929\u5065"),wa=i(),Et=s("div"),ya=d("\u524D\u7AEF\u6280\u672F\u4E13\u5BB6"),Ga=i(),It=s("div"),La=d("\u4EAC\u4E1C\u96F6\u552E\u96C6\u56E2\u51F9\u51F8\u5B9E\u9A8C\u5BA4"),ka=i(),At=s("a"),_e=s("div"),ee=s("div"),Dt=s("h1"),xa=d("\u817E\u8BAF\u6587\u6863 PWA \u5F00\u53D1\u5B9E\u8DF5"),Ma=i(),te=s("div"),Vt=s("div"),Ta=i(),$=s("div"),Wt=s("div"),Ha=d("\u5F6D\u4F1F\u5B8F"),$a=i(),bt=s("div"),qa=d("\u524D\u7AEF\u5DE5\u7A0B\u5E08"),Ca=i(),Pt=s("div"),ja=d("\u817E\u8BAF PCG \u5E73\u53F0\u4E0E\u5185\u5BB9\u4E8B\u4E1A\u7FA4"),Sa=i(),wt=s("a"),me=s("div"),se=s("div"),yt=s("h1"),Ba=d("PWA \u964D\u672C\u589E\u6548\u7684\u63A2\u7D22\u4E0E\u5B9E\u8DF5"),Fa=i(),ae=s("div"),Gt=s("div"),Ra=i(),q=s("div"),Lt=s("div"),za=d("\u9648\u8FDC\u5B8F"),Ua=i(),kt=s("div"),Ja=d("\u524D\u7AEF\u5DE5\u7A0B\u5E08"),Na=i(),xt=s("div"),Qa=d("\u963F\u91CC\u5DF4\u5DF4 ICBU \u6280\u672F\u90E8"),Ka=i(),Mt=s("a"),pe=s("div"),le=s("div"),Tt=s("h1"),Oa=d("\u7F51\u9875\u7684\u539F\u751F\u5316\u4E4B\u65C5"),Xa=i(),re=s("div"),Ht=s("div"),Ya=i(),C=s("div"),$t=s("div"),Za=d("\u738B\u6D69\u5B87"),el=i(),qt=s("div"),tl=d("\u524D\u7AEF\u5DE5\u7A0B\u5E08"),sl=i(),Ct=s("div"),al=d("\u6296\u97F3\u96C6\u56E2\u5DE8\u91CF\u5343\u5DDD"),ll=i(),jt=s("a"),ge=s("div"),ie=s("div"),St=s("h1"),rl=d("\u65B0\u5174 Web \u6280\u672F\u52A9\u529B PWA"),il=i(),ce=s("div"),Bt=s("div"),cl=i(),j=s("div"),Ft=s("div"),ol=d("\u5F20\u654F"),dl=i(),Rt=s("div"),vl=d("\u8F6F\u4EF6\u6280\u672F\u7ECF\u7406"),nl=i(),zt=s("div"),hl=d("\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B"),hs=i(),_i(oe.$$.fragment),us=i(),Ee=s("div"),m=s("ul"),Ut=s("li"),Ie=s("a"),Ae=s("img"),ul=i(),Jt=s("li"),De=s("a"),Ve=s("img"),fl=i(),Nt=s("li"),We=s("a"),be=s("img"),_l=i(),Qt=s("li"),Pe=s("a"),we=s("img"),ml=i(),Kt=s("li"),ye=s("a"),Ge=s("img"),pl=i(),Ot=s("li"),Le=s("a"),ke=s("img"),gl=i(),Xt=s("li"),xe=s("a"),Me=s("img"),El=i(),Yt=s("li"),Te=s("a"),He=s("img"),Il=i(),Zt=s("li"),$e=s("a"),qe=s("img"),Al=i(),es=s("li"),Ce=s("a"),je=s("img"),this.h()},l(u){mi('[data-svelte="svelte-8f4hp6"]',document.head).forEach(l),p=c(u),o=a(u,"DIV",{class:!0});var de=r(o);n=v(de,`\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (Progressive Web Apps, PWA) \u57FA\u4E8E\u5F00\u653E\u7684\xA0Web \u6807\u51C6\u5F00\u53D1\uFF0C\u901A\u8FC7\u73B0\u4EE3
  Web API
  \u6784\u5EFA\u548C\u589E\u5F3A\uFF0C\u5177\u6709\u53EF\u53D1\u73B0\u3001\u53EF\u5B89\u88C5\u3001\u53EF\u94FE\u63A5\u3001\u53EF\u79BB\u7EBF\u3001\u53EF\u540C\u6B65\u53CA\u53EF\u63A8\u9001\u7B49\u7B49\u4E00\u7CFB\u5217\u7279\u70B9\uFF0C\u66F4\u5177\u5907\u4E00\u5957\u4EE3\u7801\u5373\u53EF\u89E6\u8FBE\u4EFB\u4F55\u4EBA\u3001\u4EFB\u4F55\u8BBE\u5907\u7684\u4F18\u52BF\u5E76\u786E\u4FDD\u5B89\u5168\u6027\u3002`),D=a(de,"BR",{}),_=a(de,"BR",{}),P=v(de,`\u4E3A\u52A0\u901F\u63A8\u52A8\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (Progressive Web Apps, PWA)
  \u5728\u4E2D\u56FD\u7684\u53D1\u5C55\uFF0C\u5FAE\u8F6F\u3001\u82F1\u7279\u5C14\u4E0E\u8C37\u6B4C\u643A\u624B\u4E3E\u529E\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5\u6D3B\u52A8\u3002
  \u8BE5\u6D3B\u52A8\u9080\u8BF7\u4E00\u4F17\u4E1A\u754C\u5927\u5496\u56F4\u7ED5 PWA \u5C55\u5F00\u5206\u4EAB\uFF0C\u63A2\u8BA8\u6700\u65B0\u6280\u672F\u8FDB\u5C55\uFF0C\u4EE5\u53CA PWA
  \u751F\u6001\u7684\u5B9E\u8DF5\u4E0E\u843D\u5730\u3002`),de.forEach(l),R=c(u),W=a(u,"DIV",{class:!0});var xl=r(W);f=a(xl,"DIV",{id:!0});var g=r(f);w=a(g,"A",{href:!0});var Ml=r(w);y=a(Ml,"DIV",{id:!0,class:!0});var Tl=r(y);I=a(Tl,"DIV",{class:!0});var fs=r(I);A=a(fs,"H1",{class:!0});var Hl=r(A);Se=v(Hl,"\u5F00\u5E55\u81F4\u8F9E"),Hl.forEach(l),Be=c(fs),G=a(fs,"DIV",{class:!0});var _s=r(G);B=a(_s,"DIV",{class:!0,id:!0}),r(B).forEach(l),Ts=c(_s),L=a(_s,"DIV",{class:!0});var ts=r(L);Fe=a(ts,"DIV",{class:!0});var $l=r(Fe);Hs=v($l,"\u5F20\u7426"),$l.forEach(l),$s=c(ts),Re=a(ts,"DIV",{class:!0});var ql=r(Re);qs=v(ql,"\u8D44\u6DF1\u6280\u672F\u603B\u76D1"),ql.forEach(l),Cs=c(ts),ze=a(ts,"DIV",{class:!0});var Cl=r(ze);js=v(Cl,"\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B"),Cl.forEach(l),ts.forEach(l),_s.forEach(l),fs.forEach(l),Tl.forEach(l),Ml.forEach(l),Ss=c(g),Ue=a(g,"A",{href:!0});var jl=r(Ue);ve=a(jl,"DIV",{id:!0,class:!0});var Sl=r(ve);z=a(Sl,"DIV",{class:!0});var ms=r(z);Je=a(ms,"H1",{class:!0});var Bl=r(Je);Bs=v(Bl,"\u5F00\u573A\u6F14\u8BB2 PWAs & MiniApps"),Bl.forEach(l),Fs=c(ms),U=a(ms,"DIV",{class:!0});var ps=r(U);Ne=a(ps,"DIV",{class:!0,id:!0}),r(Ne).forEach(l),Rs=c(ps),k=a(ps,"DIV",{class:!0});var ss=r(k);Qe=a(ss,"DIV",{class:!0});var Fl=r(Qe);zs=v(Fl,"Alex Russell"),Fl.forEach(l),Us=c(ss),Ke=a(ss,"DIV",{class:!0});var Rl=r(Ke);Js=v(Rl,"PWA \u4E4B\u7236 \u5168\u7403\u5408\u4F19\u4EBA\u4EA7\u54C1\u7ECF\u7406"),Rl.forEach(l),Ns=c(ss),Oe=a(ss,"DIV",{class:!0});var zl=r(Oe);Qs=v(zl,"\u5FAE\u8F6F Edge \u6D4F\u89C8\u5668\u56E2\u961F"),zl.forEach(l),ss.forEach(l),ps.forEach(l),ms.forEach(l),Sl.forEach(l),jl.forEach(l),Ks=c(g),Xe=a(g,"A",{href:!0});var Ul=r(Xe);ne=a(Ul,"DIV",{id:!0,class:!0});var Jl=r(ne);J=a(Jl,"DIV",{class:!0});var gs=r(J);Ye=a(gs,"H1",{class:!0});var Nl=r(Ye);Os=v(Nl,"Take Full Advantage of a PWA"),Nl.forEach(l),Xs=c(gs),N=a(gs,"DIV",{class:!0});var Es=r(N);Ze=a(Es,"DIV",{class:!0,id:!0}),r(Ze).forEach(l),Ys=c(Es),x=a(Es,"DIV",{class:!0});var as=r(x);et=a(as,"DIV",{class:!0});var Ql=r(et);Zs=v(Ql,"\u4E1B\u6167\u541B"),Ql.forEach(l),ea=c(as),tt=a(as,"DIV",{class:!0});var Kl=r(tt);ta=v(Kl,"\u9AD8\u7EA7\u89E3\u51B3\u65B9\u6848\u987E\u95EE"),Kl.forEach(l),sa=c(as),st=a(as,"DIV",{class:!0});var Ol=r(st);aa=v(Ol,"Google Chrome & Web Platform"),Ol.forEach(l),as.forEach(l),Es.forEach(l),gs.forEach(l),Jl.forEach(l),Ul.forEach(l),la=c(g),at=a(g,"A",{href:!0});var Xl=r(at);he=a(Xl,"DIV",{id:!0,class:!0});var Yl=r(he);Q=a(Yl,"DIV",{class:!0});var Is=r(Q);lt=a(Is,"H1",{class:!0});var Zl=r(lt);ra=v(Zl,"\u91CD\u6E29 PWA \u6280\u672F\u7684\u73B0\u5B9E\u610F\u4E49"),Zl.forEach(l),ia=c(Is),K=a(Is,"DIV",{class:!0});var As=r(K);rt=a(As,"DIV",{class:!0,id:!0}),r(rt).forEach(l),ca=c(As),M=a(As,"DIV",{class:!0});var ls=r(M);it=a(ls,"DIV",{class:!0});var er=r(it);oa=v(er,"\u5B8B\u9752\u89C1"),er.forEach(l),da=c(ls),ct=a(ls,"DIV",{class:!0});var tr=r(ct);va=v(tr,"\u9996\u5E2D\u4EA7\u54C1\u7ECF\u7406"),tr.forEach(l),na=c(ls),ot=a(ls,"DIV",{class:!0});var sr=r(ot);ha=v(sr,"\u5FAE\u8F6F Edge \xB7 \u5F00\u53D1\u8005\u751F\u6001"),sr.forEach(l),ls.forEach(l),As.forEach(l),Is.forEach(l),Yl.forEach(l),Xl.forEach(l),ua=c(g),dt=a(g,"A",{href:!0});var ar=r(dt);ue=a(ar,"DIV",{id:!0,class:!0});var lr=r(ue);O=a(lr,"DIV",{class:!0});var Ds=r(O);vt=a(Ds,"H1",{class:!0});var rr=r(vt);fa=v(rr,"The World of PWA Tools"),rr.forEach(l),_a=c(Ds),X=a(Ds,"DIV",{class:!0});var Vs=r(X);nt=a(Vs,"DIV",{class:!0,id:!0}),r(nt).forEach(l),ma=c(Vs),T=a(Vs,"DIV",{class:!0});var rs=r(T);ht=a(rs,"DIV",{class:!0});var ir=r(ht);pa=v(ir,"Justin Willis & Amrutha Srinivasan"),ir.forEach(l),ga=c(rs),ut=a(rs,"DIV",{class:!0});var cr=r(ut);Ea=v(cr,"\u8F6F\u4EF6\u5DE5\u7A0B\u5E08"),cr.forEach(l),Ia=c(rs),ft=a(rs,"DIV",{class:!0});var or=r(ft);Aa=v(or,"\u5FAE\u8F6F PWABuilder"),or.forEach(l),rs.forEach(l),Vs.forEach(l),Ds.forEach(l),lr.forEach(l),ar.forEach(l),Da=c(g),_t=a(g,"A",{href:!0});var dr=r(_t);fe=a(dr,"DIV",{id:!0,class:!0});var vr=r(fe);Y=a(vr,"DIV",{class:!0});var Ws=r(Y);mt=a(Ws,"H1",{class:!0});var nr=r(mt);Va=v(nr,"\u8DD1\u5728 PWA \u91CC\u7684 '\u5C0F\u7A0B\u5E8F'"),nr.forEach(l),Wa=c(Ws),Z=a(Ws,"DIV",{class:!0});var bs=r(Z);pt=a(bs,"DIV",{class:!0,id:!0}),r(pt).forEach(l),ba=c(bs),H=a(bs,"DIV",{class:!0});var is=r(H);gt=a(is,"DIV",{class:!0});var hr=r(gt);Pa=v(hr,"\u6731\u5929\u5065"),hr.forEach(l),wa=c(is),Et=a(is,"DIV",{class:!0});var ur=r(Et);ya=v(ur,"\u524D\u7AEF\u6280\u672F\u4E13\u5BB6"),ur.forEach(l),Ga=c(is),It=a(is,"DIV",{class:!0});var fr=r(It);La=v(fr,"\u4EAC\u4E1C\u96F6\u552E\u96C6\u56E2\u51F9\u51F8\u5B9E\u9A8C\u5BA4"),fr.forEach(l),is.forEach(l),bs.forEach(l),Ws.forEach(l),vr.forEach(l),dr.forEach(l),ka=c(g),At=a(g,"A",{href:!0});var _r=r(At);_e=a(_r,"DIV",{id:!0,class:!0});var mr=r(_e);ee=a(mr,"DIV",{class:!0});var Ps=r(ee);Dt=a(Ps,"H1",{class:!0});var pr=r(Dt);xa=v(pr,"\u817E\u8BAF\u6587\u6863 PWA \u5F00\u53D1\u5B9E\u8DF5"),pr.forEach(l),Ma=c(Ps),te=a(Ps,"DIV",{class:!0});var ws=r(te);Vt=a(ws,"DIV",{class:!0,id:!0}),r(Vt).forEach(l),Ta=c(ws),$=a(ws,"DIV",{class:!0});var cs=r($);Wt=a(cs,"DIV",{class:!0});var gr=r(Wt);Ha=v(gr,"\u5F6D\u4F1F\u5B8F"),gr.forEach(l),$a=c(cs),bt=a(cs,"DIV",{class:!0});var Er=r(bt);qa=v(Er,"\u524D\u7AEF\u5DE5\u7A0B\u5E08"),Er.forEach(l),Ca=c(cs),Pt=a(cs,"DIV",{class:!0});var Ir=r(Pt);ja=v(Ir,"\u817E\u8BAF PCG \u5E73\u53F0\u4E0E\u5185\u5BB9\u4E8B\u4E1A\u7FA4"),Ir.forEach(l),cs.forEach(l),ws.forEach(l),Ps.forEach(l),mr.forEach(l),_r.forEach(l),Sa=c(g),wt=a(g,"A",{href:!0});var Ar=r(wt);me=a(Ar,"DIV",{id:!0,class:!0});var Dr=r(me);se=a(Dr,"DIV",{class:!0});var ys=r(se);yt=a(ys,"H1",{class:!0});var Vr=r(yt);Ba=v(Vr,"PWA \u964D\u672C\u589E\u6548\u7684\u63A2\u7D22\u4E0E\u5B9E\u8DF5"),Vr.forEach(l),Fa=c(ys),ae=a(ys,"DIV",{class:!0});var Gs=r(ae);Gt=a(Gs,"DIV",{class:!0,id:!0}),r(Gt).forEach(l),Ra=c(Gs),q=a(Gs,"DIV",{class:!0});var os=r(q);Lt=a(os,"DIV",{class:!0});var Wr=r(Lt);za=v(Wr,"\u9648\u8FDC\u5B8F"),Wr.forEach(l),Ua=c(os),kt=a(os,"DIV",{class:!0});var br=r(kt);Ja=v(br,"\u524D\u7AEF\u5DE5\u7A0B\u5E08"),br.forEach(l),Na=c(os),xt=a(os,"DIV",{class:!0});var Pr=r(xt);Qa=v(Pr,"\u963F\u91CC\u5DF4\u5DF4 ICBU \u6280\u672F\u90E8"),Pr.forEach(l),os.forEach(l),Gs.forEach(l),ys.forEach(l),Dr.forEach(l),Ar.forEach(l),Ka=c(g),Mt=a(g,"A",{href:!0});var wr=r(Mt);pe=a(wr,"DIV",{id:!0,class:!0});var yr=r(pe);le=a(yr,"DIV",{class:!0});var Ls=r(le);Tt=a(Ls,"H1",{class:!0});var Gr=r(Tt);Oa=v(Gr,"\u7F51\u9875\u7684\u539F\u751F\u5316\u4E4B\u65C5"),Gr.forEach(l),Xa=c(Ls),re=a(Ls,"DIV",{class:!0});var ks=r(re);Ht=a(ks,"DIV",{class:!0,id:!0}),r(Ht).forEach(l),Ya=c(ks),C=a(ks,"DIV",{class:!0});var ds=r(C);$t=a(ds,"DIV",{class:!0});var Lr=r($t);Za=v(Lr,"\u738B\u6D69\u5B87"),Lr.forEach(l),el=c(ds),qt=a(ds,"DIV",{class:!0});var kr=r(qt);tl=v(kr,"\u524D\u7AEF\u5DE5\u7A0B\u5E08"),kr.forEach(l),sl=c(ds),Ct=a(ds,"DIV",{class:!0});var xr=r(Ct);al=v(xr,"\u6296\u97F3\u96C6\u56E2\u5DE8\u91CF\u5343\u5DDD"),xr.forEach(l),ds.forEach(l),ks.forEach(l),Ls.forEach(l),yr.forEach(l),wr.forEach(l),ll=c(g),jt=a(g,"A",{href:!0});var Mr=r(jt);ge=a(Mr,"DIV",{id:!0,class:!0});var Tr=r(ge);ie=a(Tr,"DIV",{class:!0});var xs=r(ie);St=a(xs,"H1",{class:!0});var Hr=r(St);rl=v(Hr,"\u65B0\u5174 Web \u6280\u672F\u52A9\u529B PWA"),Hr.forEach(l),il=c(xs),ce=a(xs,"DIV",{class:!0});var Ms=r(ce);Bt=a(Ms,"DIV",{class:!0,id:!0}),r(Bt).forEach(l),cl=c(Ms),j=a(Ms,"DIV",{class:!0});var vs=r(j);Ft=a(vs,"DIV",{class:!0});var $r=r(Ft);ol=v($r,"\u5F20\u654F"),$r.forEach(l),dl=c(vs),Rt=a(vs,"DIV",{class:!0});var qr=r(Rt);vl=v(qr,"\u8F6F\u4EF6\u6280\u672F\u7ECF\u7406"),qr.forEach(l),nl=c(vs),zt=a(vs,"DIV",{class:!0});var Cr=r(zt);hl=v(Cr,"\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B"),Cr.forEach(l),vs.forEach(l),Ms.forEach(l),xs.forEach(l),Tr.forEach(l),Mr.forEach(l),g.forEach(l),xl.forEach(l),hs=c(u),pi(oe.$$.fragment,u),us=c(u),Ee=a(u,"DIV",{class:!0});var jr=r(Ee);m=a(jr,"UL",{class:!0});var E=r(m);Ut=a(E,"LI",{class:!0});var Sr=r(Ut);Ie=a(Sr,"A",{href:!0,title:!0});var Br=r(Ie);Ae=a(Br,"IMG",{src:!0,class:!0,alt:!0}),Br.forEach(l),Sr.forEach(l),ul=c(E),Jt=a(E,"LI",{class:!0});var Fr=r(Jt);De=a(Fr,"A",{href:!0,title:!0});var Rr=r(De);Ve=a(Rr,"IMG",{src:!0,class:!0,alt:!0}),Rr.forEach(l),Fr.forEach(l),fl=c(E),Nt=a(E,"LI",{class:!0});var zr=r(Nt);We=a(zr,"A",{href:!0,title:!0});var Ur=r(We);be=a(Ur,"IMG",{src:!0,class:!0,alt:!0}),Ur.forEach(l),zr.forEach(l),_l=c(E),Qt=a(E,"LI",{class:!0});var Jr=r(Qt);Pe=a(Jr,"A",{href:!0,title:!0});var Nr=r(Pe);we=a(Nr,"IMG",{src:!0,class:!0,alt:!0}),Nr.forEach(l),Jr.forEach(l),ml=c(E),Kt=a(E,"LI",{class:!0});var Qr=r(Kt);ye=a(Qr,"A",{href:!0,title:!0});var Kr=r(ye);Ge=a(Kr,"IMG",{src:!0,class:!0,alt:!0}),Kr.forEach(l),Qr.forEach(l),pl=c(E),Ot=a(E,"LI",{class:!0});var Or=r(Ot);Le=a(Or,"A",{href:!0,title:!0});var Xr=r(Le);ke=a(Xr,"IMG",{src:!0,class:!0,alt:!0}),Xr.forEach(l),Or.forEach(l),gl=c(E),Xt=a(E,"LI",{class:!0});var Yr=r(Xt);xe=a(Yr,"A",{href:!0,title:!0});var Zr=r(xe);Me=a(Zr,"IMG",{src:!0,class:!0,alt:!0}),Zr.forEach(l),Yr.forEach(l),El=c(E),Yt=a(E,"LI",{class:!0});var ei=r(Yt);Te=a(ei,"A",{href:!0,title:!0});var ti=r(Te);He=a(ti,"IMG",{src:!0,class:!0,alt:!0}),ti.forEach(l),ei.forEach(l),Il=c(E),Zt=a(E,"LI",{class:!0});var si=r(Zt);$e=a(si,"A",{href:!0,title:!0});var ai=r($e);qe=a(ai,"IMG",{src:!0,class:!0,alt:!0}),ai.forEach(l),si.forEach(l),Al=c(E),es=a(E,"LI",{class:!0});var li=r(es);Ce=a(li,"A",{href:!0,title:!0});var ri=r(Ce);je=a(ri,"IMG",{src:!0,class:!0,alt:!0}),ri.forEach(l),li.forEach(l),E.forEach(l),jr.forEach(l),this.h()},h(){t(o,"class","intro"),t(A,"class","title"),t(B,"class","avatar"),t(B,"id","icon_qi"),t(Fe,"class","nametitle"),t(Re,"class","team"),t(ze,"class","team"),t(L,"class","description"),t(G,"class","details"),t(I,"class","topic"),t(y,"id","opening"),t(y,"class","touch"),t(w,"href","/blog/opening"),t(Je,"class","title"),t(Ne,"class","avatar"),t(Ne,"id","icon_alex"),t(Qe,"class","nametitle"),t(Ke,"class","team"),t(Oe,"class","team"),t(k,"class","description"),t(U,"class","details"),t(z,"class","topic"),t(ve,"id","open-speech"),t(ve,"class","touch"),t(Ue,"href","/blog/open-speech"),t(Ye,"class","title"),t(Ze,"class","avatar"),t(Ze,"id","icon_cecilia"),t(et,"class","nametitle"),t(tt,"class","team"),t(st,"class","team"),t(x,"class","description"),t(N,"class","details"),t(J,"class","topic"),t(ne,"id","take-full-advantage-of-a-pwa"),t(ne,"class","touch"),t(Xe,"href","/blog/take-full-advantage-of-a-pwa"),t(lt,"class","title"),t(rt,"class","avatar"),t(rt,"id","icon_edwin"),t(it,"class","nametitle"),t(ct,"class","team"),t(ot,"class","team"),t(M,"class","description"),t(K,"class","details"),t(Q,"class","topic"),t(he,"id","revisiting-the-real-world-significance-of-pwa-technology"),t(he,"class","touch"),t(at,"href","/blog/revisiting-the-real-world-significance-of-pwa-technology"),t(vt,"class","title"),t(nt,"class","avatar"),t(nt,"id","icon_pwabuilder"),t(ht,"class","nametitle"),t(ut,"class","team"),t(ft,"class","team"),t(T,"class","description"),t(X,"class","details"),t(O,"class","topic"),t(ue,"id","the-world-of-pwa-tools-from-starter-to-builder"),t(ue,"class","touch"),t(dt,"href","/blog/the-world-of-pwa-tools-from-starter-to-builder"),t(mt,"class","title"),t(pt,"class","avatar"),t(pt,"id","icon_tianjian"),t(gt,"class","nametitle"),t(Et,"class","team"),t(It,"class","team"),t(H,"class","description"),t(Z,"class","details"),t(Y,"class","topic"),t(fe,"id","running-mini-apps-in-pwa"),t(fe,"class","touch"),t(_t,"href","/blog/running-mini-apps-in-pwa"),t(Dt,"class","title"),t(Vt,"class","avatar"),t(Vt,"id","icon_harry"),t(Wt,"class","nametitle"),t(bt,"class","team"),t(Pt,"class","team"),t($,"class","description"),t(te,"class","details"),t(ee,"class","topic"),t(_e,"id","tencent-documentation-pwa-development-practice"),t(_e,"class","touch"),t(At,"href","/blog/tencent-documentation-pwa-development-practice"),t(yt,"class","title"),t(Gt,"class","avatar"),t(Gt,"id","icon_yuanhong"),t(Lt,"class","nametitle"),t(kt,"class","team"),t(xt,"class","team"),t(q,"class","description"),t(ae,"class","details"),t(se,"class","topic"),t(me,"id","the-exploration-and-practice-of-alibaba.com-pwa-to-reduce-costs-and-increase-efficiency"),t(me,"class","touch"),t(wt,"href","/blog/the-exploration-and-practice-of-alibaba.com-pwa-to-reduce-costs-and-increase-efficiency"),t(Tt,"class","title"),t(Ht,"class","avatar"),t(Ht,"id","icon_haoyu"),t($t,"class","nametitle"),t(qt,"class","team"),t(Ct,"class","team"),t(C,"class","description"),t(re,"class","details"),t(le,"class","topic"),t(pe,"id","the-journey-of-web-nativeization"),t(pe,"class","touch"),t(Mt,"href","/blog/the-journey-of-web-nativeization"),t(St,"class","title"),t(Bt,"class","avatar"),t(Bt,"id","icon_belem"),t(Ft,"class","nametitle"),t(Rt,"class","team"),t(zt,"class","team"),t(j,"class","description"),t(ce,"class","details"),t(ie,"class","topic"),t(ge,"id","explore-new-web-capabilities-for-your-pwa"),t(ge,"class","touch"),t(jt,"href","/blog/explore-new-web-capabilities-for-your-pwa"),t(f,"id","agenda"),t(W,"class","t2022"),S(Ae.src,Dl="https://p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/pwa_v3/192_192.png")||t(Ae,"src",Dl),t(Ae,"class","logogrid__img"),t(Ae,"alt","\u6296\u97F3 PWA"),t(Ie,"href","https://douyin.com"),t(Ie,"title","\u6296\u97F3 PWA"),t(Ut,"class","logogrid__item"),S(Ve.src,Vl="https://lf9-static.bytednsdoc.com/obj/eden-cn/pipieh7nupabozups/toutiao_web_pc/icon_tt_192.png")||t(Ve,"src",Vl),t(Ve,"class","logogrid__img"),t(Ve,"alt","\u4ECA\u65E5\u5934\u6761 PWA"),t(De,"href","https://www.toutiao.com/"),t(De,"title","\u4ECA\u65E5\u5934\u6761 PWA"),t(Jt,"class","logogrid__item"),S(be.src,Wl="https://h5.sinaimg.cn/m/weibo-lite/icon-default-192.png")||t(be,"src",Wl),t(be,"class","logogrid__img"),t(be,"alt","\u65B0\u6D6A\u5FAE\u535A PWA"),t(We,"href","https://m.weibo.cn/beta"),t(We,"title","\u65B0\u6D6A\u5FAE\u535A PWA"),t(Nt,"class","logogrid__item"),S(we.src,bl="https://dashi.163.com/logo.png")||t(we,"src",bl),t(we,"class","logogrid__img"),t(we,"alt","\u7F51\u6613\u90AE\u7BB1\u5927\u5E08 PWA"),t(Pe,"href","https://dashi.163.com/login/?from=desktop"),t(Pe,"title","\u7F51\u6613\u90AE\u7BB1\u5927\u5E08 PWA"),t(Qt,"class","logogrid__item"),S(Ge.src,Pl="https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-180.png")||t(Ge,"src",Pl),t(Ge,"class","logogrid__img"),t(Ge,"alt","\u91D1\u5C71\u6587\u6863 PWA"),t(ye,"href","https://www.kdocs.cn/latest?from=docs"),t(ye,"title","\u91D1\u5C71\u6587\u6863 PWA"),t(Kt,"class","logogrid__item"),S(ke.src,wl="https://res.cdn.office.net/officehub/versionless/webmanifestimages/desktop_192.png")||t(ke,"src",wl),t(ke,"class","logogrid__img"),t(ke,"alt","Microsoft 365 PWA"),t(Le,"href","https://www.office.com/?ui=zh-CN&rs=CN&auth=1"),t(Le,"title","Microsoft 365 PWA"),t(Ot,"class","logogrid__item"),S(Me.src,yl="https://h5.m.taobao.com/trip/home-pwa/img/icon_192.png")||t(Me,"src",yl),t(Me,"class","logogrid__img"),t(Me,"alt","\u98DE\u732A\u65C5\u884C PWA"),t(xe,"href","https://h5.m.taobao.com/trip/home-pwa/index.html"),t(xe,"title","\u98DE\u732A\u65C5\u884C PWA"),t(Xt,"class","logogrid__item"),S(He.src,Gl="https://pwa.sspai.com/icons/512.png")||t(He,"src",Gl),t(He,"class","logogrid__img"),t(He,"alt","\u5C11\u6570\u6D3E PWA"),t(Te,"href","https://pwa.sspai.com/"),t(Te,"title","\u5C11\u6570\u6D3E PWA"),t(Yt,"class","logogrid__item"),S(qe.src,Ll="https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*sHlLTI41kIoAAAAAAAAAAAAADvuFAQ/original")||t(qe,"src",Ll),t(qe,"class","logogrid__img"),t(qe,"alt","\u96E8\u96C0 PWA"),t($e,"href","https://www.yuque.com/login?goto=https%3A%2F%2Fwww.yuque.com%2Fdashboard"),t($e,"title","\u96E8\u96C0 PWA"),t(Zt,"class","logogrid__item"),S(je.src,kl="https://qhstaticssl.kujiale.com/newt/100312/image/png/1591705870021/192x192.png")||t(je,"src",kl),t(je,"class","logogrid__img"),t(je,"alt","\u9177\u5BB6\u4E50 PWA"),t(Ce,"href","https://www.kujiale.com/"),t(Ce,"title","\u9177\u5BB6\u4E50 PWA"),t(es,"class","logogrid__item"),t(m,"class","logogrid"),t(Ee,"class","pwalist")},m(u,b){F(u,p,b),F(u,o,b),e(o,n),e(o,D),e(o,_),e(o,P),F(u,R,b),F(u,W,b),e(W,f),e(f,w),e(w,y),e(y,I),e(I,A),e(A,Se),e(I,Be),e(I,G),e(G,B),e(G,Ts),e(G,L),e(L,Fe),e(Fe,Hs),e(L,$s),e(L,Re),e(Re,qs),e(L,Cs),e(L,ze),e(ze,js),e(f,Ss),e(f,Ue),e(Ue,ve),e(ve,z),e(z,Je),e(Je,Bs),e(z,Fs),e(z,U),e(U,Ne),e(U,Rs),e(U,k),e(k,Qe),e(Qe,zs),e(k,Us),e(k,Ke),e(Ke,Js),e(k,Ns),e(k,Oe),e(Oe,Qs),e(f,Ks),e(f,Xe),e(Xe,ne),e(ne,J),e(J,Ye),e(Ye,Os),e(J,Xs),e(J,N),e(N,Ze),e(N,Ys),e(N,x),e(x,et),e(et,Zs),e(x,ea),e(x,tt),e(tt,ta),e(x,sa),e(x,st),e(st,aa),e(f,la),e(f,at),e(at,he),e(he,Q),e(Q,lt),e(lt,ra),e(Q,ia),e(Q,K),e(K,rt),e(K,ca),e(K,M),e(M,it),e(it,oa),e(M,da),e(M,ct),e(ct,va),e(M,na),e(M,ot),e(ot,ha),e(f,ua),e(f,dt),e(dt,ue),e(ue,O),e(O,vt),e(vt,fa),e(O,_a),e(O,X),e(X,nt),e(X,ma),e(X,T),e(T,ht),e(ht,pa),e(T,ga),e(T,ut),e(ut,Ea),e(T,Ia),e(T,ft),e(ft,Aa),e(f,Da),e(f,_t),e(_t,fe),e(fe,Y),e(Y,mt),e(mt,Va),e(Y,Wa),e(Y,Z),e(Z,pt),e(Z,ba),e(Z,H),e(H,gt),e(gt,Pa),e(H,wa),e(H,Et),e(Et,ya),e(H,Ga),e(H,It),e(It,La),e(f,ka),e(f,At),e(At,_e),e(_e,ee),e(ee,Dt),e(Dt,xa),e(ee,Ma),e(ee,te),e(te,Vt),e(te,Ta),e(te,$),e($,Wt),e(Wt,Ha),e($,$a),e($,bt),e(bt,qa),e($,Ca),e($,Pt),e(Pt,ja),e(f,Sa),e(f,wt),e(wt,me),e(me,se),e(se,yt),e(yt,Ba),e(se,Fa),e(se,ae),e(ae,Gt),e(ae,Ra),e(ae,q),e(q,Lt),e(Lt,za),e(q,Ua),e(q,kt),e(kt,Ja),e(q,Na),e(q,xt),e(xt,Qa),e(f,Ka),e(f,Mt),e(Mt,pe),e(pe,le),e(le,Tt),e(Tt,Oa),e(le,Xa),e(le,re),e(re,Ht),e(re,Ya),e(re,C),e(C,$t),e($t,Za),e(C,el),e(C,qt),e(qt,tl),e(C,sl),e(C,Ct),e(Ct,al),e(f,ll),e(f,jt),e(jt,ge),e(ge,ie),e(ie,St),e(St,rl),e(ie,il),e(ie,ce),e(ce,Bt),e(ce,cl),e(ce,j),e(j,Ft),e(Ft,ol),e(j,dl),e(j,Rt),e(Rt,vl),e(j,nl),e(j,zt),e(zt,hl),F(u,hs,b),gi(oe,u,b),F(u,us,b),F(u,Ee,b),e(Ee,m),e(m,Ut),e(Ut,Ie),e(Ie,Ae),e(m,ul),e(m,Jt),e(Jt,De),e(De,Ve),e(m,fl),e(m,Nt),e(Nt,We),e(We,be),e(m,_l),e(m,Qt),e(Qt,Pe),e(Pe,we),e(m,ml),e(m,Kt),e(Kt,ye),e(ye,Ge),e(m,pl),e(m,Ot),e(Ot,Le),e(Le,ke),e(m,gl),e(m,Xt),e(Xt,xe),e(xe,Me),e(m,El),e(m,Yt),e(Yt,Te),e(Te,He),e(m,Il),e(m,Zt),e(Zt,$e),e($e,qe),e(m,Al),e(m,es),e(es,Ce),e(Ce,je),ns=!0},p(u,[b]){(!ns||b&0)&&h!==(h=oi)&&(document.title=h);const de={};b&1&&(de.posts=u[0].posts),oe.$set(de)},i(u){ns||(Ei(oe.$$.fragment,u),ns=!0)},o(u){Ii(oe.$$.fragment,u),ns=!1},d(u){u&&l(p),u&&l(o),u&&l(R),u&&l(W),u&&l(hs),Ai(oe,u),u&&l(us),u&&l(Ee)}}}function Pi(V,h,p){let{data:o}=h;return V.$$set=n=>{"data"in n&&p(0,o=n.data)},[o]}class Gi extends ni{constructor(h){super(),hi(this,h,Pi,bi,ui,{data:0})}}export{Gi as default};