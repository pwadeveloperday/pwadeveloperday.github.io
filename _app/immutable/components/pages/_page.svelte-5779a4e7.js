import{S as zl,i as Fl,s as Ml,k as s,l,m as i,h as a,n as t,b as _e,A as ql,J as Kl,q as o,a as r,r as v,c as d,D as e,u as Ll,v as Nl,R as Ol,w as Ql,x as Xl,f as Yl,t as Zl,y as ei}from"../../chunks/index-a5c414f5.js";import{s as jl}from"../../chunks/config-1cc2bd8c.js";function Jl(m,h,E){const c=m.slice();return c[1]=h[E],c}function Ul(m){let h,E,c,n,V=m[1].title+"",u,b,q,A,f=m[1].excerpt+"",W,g;return{c(){h=s("li"),E=s("article"),c=s("a"),n=s("h1"),u=o(V),q=r(),A=s("p"),W=o(f),g=r(),this.h()},l(I){h=l(I,"LI",{});var D=i(h);E=l(D,"ARTICLE",{});var Ee=i(E);c=l(Ee,"A",{href:!0});var pe=i(c);n=l(pe,"H1",{});var P=i(n);u=v(P,V),P.forEach(a),pe.forEach(a),Ee.forEach(a),q=d(D),A=l(D,"P",{});var R=i(A);W=v(R,f),R.forEach(a),g=d(D),D.forEach(a),this.h()},h(){t(c,"href",b="/blog/"+m[1].slug)},m(I,D){_e(I,h,D),e(h,E),e(E,c),e(c,n),e(n,u),e(h,q),e(h,A),e(A,W),e(h,g)},p(I,D){D&1&&V!==(V=I[1].title+"")&&Ll(u,V),D&1&&b!==(b="/blog/"+I[1].slug)&&t(c,"href",b),D&1&&f!==(f=I[1].excerpt+"")&&Ll(W,f)},d(I){I&&a(h)}}}function ti(m){let h,E=m[0],c=[];for(let n=0;n<E.length;n+=1)c[n]=Ul(Jl(m,E,n));return{c(){h=s("ul");for(let n=0;n<c.length;n+=1)c[n].c();this.h()},l(n){h=l(n,"UL",{class:!0});var V=i(h);for(let u=0;u<c.length;u+=1)c[u].l(V);V.forEach(a),this.h()},h(){t(h,"class","posts-list home")},m(n,V){_e(n,h,V);for(let u=0;u<c.length;u+=1)c[u].m(h,null)},p(n,[V]){if(V&1){E=n[0];let u;for(u=0;u<E.length;u+=1){const b=Jl(n,E,u);c[u]?c[u].p(b,V):(c[u]=Ul(b),c[u].c(),c[u].m(h,null))}for(;u<c.length;u+=1)c[u].d(1);c.length=E.length}},i:ql,o:ql,d(n){n&&a(h),Kl(c,n)}}}function ai(m,h,E){let{posts:c=[]}=h;return m.$$set=n=>{"posts"in n&&E(0,c=n.posts)},[c]}class si extends zl{constructor(h){super(),Fl(this,h,ai,ti,Ml,{posts:0})}}function li(m){let h,E,c,n,V,u,b,q,A,f,W,g,I,D,Ee,pe,P,R,Zt,w,Ie,ea,ta,De,aa,sa,Ve,la,ia,me,re,L,Ae,ra,da,j,be,ca,y,We,oa,va,ge,na,ha,Pe,fa,ua,we,de,J,ye,_a,Ea,U,xe,pa,x,He,Ia,Da,Te,Va,ma,$e,Aa,ba,Ce,ce,z,Ge,Wa,ga,F,Se,Pa,H,ke,wa,ya,Be,xa,Ha,Re,Ta,$a,qe,oe,M,Le,Ca,Ga,K,je,Sa,T,Je,ka,Ba,Ue,Ra,qa,ze,La,ja,Fe,ve,N,Me,Ja,Ua,O,Ke,za,$,Ne,Fa,Ma,Oe,Ka,Na,Qe,Oa,Qa,Xe,ne,Q,Ye,Xa,Ya,X,Ze,Za,C,et,es,ts,tt,as,ss,at,ls,is,st,he,Y,lt,rs,ds,Z,it,cs,G,rt,os,vs,dt,ns,hs,ct,fs,us,ot,fe,ee,vt,_s,Es,te,nt,ps,S,ht,Is,Ds,ft,Vs,ms,ut,As,bs,_t,ue,ae,Et,Ws,gs,se,pt,Ps,k,It,ws,ys,Dt,xs,Hs,Vt,Ts,$t,le,Tt;return document.title=h=jl,le=new si({props:{posts:m[0].posts}}),{c(){E=r(),c=s("div"),n=o("\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (Progressive Web Apps, PWA) \u57FA\u4E8E\u5F00\u653E\u7684\xA0Web \u6807\u51C6\u5F00\u53D1\uFF0C\u901A\u8FC7\u73B0\u4EE3 Web API \u6784\u5EFA\u548C\u589E\u5F3A\uFF0C\u5177\u6709\u53EF\u53D1\u73B0\u3001\u53EF\u5B89\u88C5\u3001\u53EF\u94FE\u63A5\u3001\u53EF\u79BB\u7EBF\u3001\u53EF\u540C\u6B65\u53CA\u53EF\u63A8\u9001\u7B49\u7B49\u4E00\u7CFB\u5217\u7279\u70B9\uFF0C\u66F4\u5177\u5907\u4E00\u5957\u4EE3\u7801\u5373\u53EF\u89E6\u8FBE\u4EFB\u4F55\u4EBA\u3001\u4EFB\u4F55\u8BBE\u5907\u7684\u4F18\u52BF\u5E76\u786E\u4FDD\u5B89\u5168\u6027\u3002"),V=s("br"),u=s("br"),b=o("\u4E3A\u52A0\u901F\u63A8\u52A8\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (Progressive Web Apps, PWA) \u5728\u4E2D\u56FD\u7684\u53D1\u5C55\uFF0C\u5FAE\u8F6F\u3001\u82F1\u7279\u5C14\u4E0E\u8C37\u6B4C\u643A\u624B\u4E3E\u529E\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5\u6D3B\u52A8\u3002 \u8BE5\u6D3B\u52A8\u9080\u8BF7\u4E00\u4F17\u4E1A\u754C\u5927\u5496\u56F4\u7ED5 PWA \u5C55\u5F00\u5206\u4EAB\uFF0C\u63A2\u8BA8\u6700\u65B0\u6280\u672F\u8FDB\u5C55\uFF0C\u4EE5\u53CA PWA \u751F\u6001\u7684\u5B9E\u8DF5\u4E0E\u843D\u5730\u3002"),q=r(),A=s("div"),f=s("div"),W=s("a"),g=s("div"),I=s("div"),D=s("h1"),Ee=o("\u5F00\u5E55\u81F4\u8F9E"),pe=r(),P=s("div"),R=s("div"),Zt=r(),w=s("div"),Ie=s("div"),ea=o("\u5F20\u7426"),ta=r(),De=s("div"),aa=o("\u8D44\u6DF1\u6280\u672F\u603B\u76D1"),sa=r(),Ve=s("div"),la=o("\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B"),ia=r(),me=s("a"),re=s("div"),L=s("div"),Ae=s("h1"),ra=o("\u5F00\u573A\u6F14\u8BB2 PWAs & MiniApps"),da=r(),j=s("div"),be=s("div"),ca=r(),y=s("div"),We=s("div"),oa=o("Alex Russell"),va=r(),ge=s("div"),na=o("PWA \u4E4B\u7236 \u5168\u7403\u5408\u4F19\u4EBA\u4EA7\u54C1\u7ECF\u7406"),ha=r(),Pe=s("div"),fa=o("\u5FAE\u8F6F Edge \u6D4F\u89C8\u5668\u56E2\u961F"),ua=r(),we=s("a"),de=s("div"),J=s("div"),ye=s("h1"),_a=o("Take Full Advantage of a PWA"),Ea=r(),U=s("div"),xe=s("div"),pa=r(),x=s("div"),He=s("div"),Ia=o("\u4E1B\u6167\u541B"),Da=r(),Te=s("div"),Va=o("\u9AD8\u7EA7\u89E3\u51B3\u65B9\u6848\u987E\u95EE"),ma=r(),$e=s("div"),Aa=o("Google Chrome & Web Platform"),ba=r(),Ce=s("a"),ce=s("div"),z=s("div"),Ge=s("h1"),Wa=o("\u91CD\u6E29 PWA \u6280\u672F\u7684\u73B0\u5B9E\u610F\u4E49"),ga=r(),F=s("div"),Se=s("div"),Pa=r(),H=s("div"),ke=s("div"),wa=o("\u5B8B\u9752\u89C1"),ya=r(),Be=s("div"),xa=o("\u9996\u5E2D\u4EA7\u54C1\u7ECF\u7406"),Ha=r(),Re=s("div"),Ta=o("\u5FAE\u8F6F Edge \xB7 \u5F00\u53D1\u8005\u751F\u6001"),$a=r(),qe=s("a"),oe=s("div"),M=s("div"),Le=s("h1"),Ca=o("The World of PWA Tools"),Ga=r(),K=s("div"),je=s("div"),Sa=r(),T=s("div"),Je=s("div"),ka=o("Justin Willis & Amrutha Srinivasan"),Ba=r(),Ue=s("div"),Ra=o("\u8F6F\u4EF6\u5DE5\u7A0B\u5E08"),qa=r(),ze=s("div"),La=o("\u5FAE\u8F6F PWABuilder"),ja=r(),Fe=s("a"),ve=s("div"),N=s("div"),Me=s("h1"),Ja=o("\u8DD1\u5728 PWA \u91CC\u7684 '\u5C0F\u7A0B\u5E8F'"),Ua=r(),O=s("div"),Ke=s("div"),za=r(),$=s("div"),Ne=s("div"),Fa=o("\u6731\u5929\u5065"),Ma=r(),Oe=s("div"),Ka=o("\u524D\u7AEF\u6280\u672F\u4E13\u5BB6"),Na=r(),Qe=s("div"),Oa=o("\u4EAC\u4E1C\u96F6\u552E\u96C6\u56E2\u51F9\u51F8\u5B9E\u9A8C\u5BA4"),Qa=r(),Xe=s("a"),ne=s("div"),Q=s("div"),Ye=s("h1"),Xa=o("\u817E\u8BAF\u6587\u6863 PWA \u5F00\u53D1\u5B9E\u8DF5"),Ya=r(),X=s("div"),Ze=s("div"),Za=r(),C=s("div"),et=s("div"),es=o("\u5F6D\u4F1F\u5B8F"),ts=r(),tt=s("div"),as=o("\u524D\u7AEF\u5DE5\u7A0B\u5E08"),ss=r(),at=s("div"),ls=o("\u817E\u8BAF PCG \u5E73\u53F0\u4E0E\u5185\u5BB9\u4E8B\u4E1A\u7FA4"),is=r(),st=s("a"),he=s("div"),Y=s("div"),lt=s("h1"),rs=o("PWA \u964D\u672C\u589E\u6548\u7684\u63A2\u7D22\u4E0E\u5B9E\u8DF5"),ds=r(),Z=s("div"),it=s("div"),cs=r(),G=s("div"),rt=s("div"),os=o("\u9648\u8FDC\u5B8F"),vs=r(),dt=s("div"),ns=o("\u524D\u7AEF\u5DE5\u7A0B\u5E08"),hs=r(),ct=s("div"),fs=o("\u963F\u91CC\u5DF4\u5DF4 ICBU \u6280\u672F\u90E8"),us=r(),ot=s("a"),fe=s("div"),ee=s("div"),vt=s("h1"),_s=o("\u7F51\u9875\u7684\u539F\u751F\u5316\u4E4B\u65C5"),Es=r(),te=s("div"),nt=s("div"),ps=r(),S=s("div"),ht=s("div"),Is=o("\u738B\u6D69\u5B87"),Ds=r(),ft=s("div"),Vs=o("\u524D\u7AEF\u5DE5\u7A0B\u5E08"),ms=r(),ut=s("div"),As=o("\u6296\u97F3\u96C6\u56E2\u5DE8\u91CF\u5343\u5DDD"),bs=r(),_t=s("a"),ue=s("div"),ae=s("div"),Et=s("h1"),Ws=o("\u65B0\u5174 Web \u6280\u672F\u52A9\u529B PWA"),gs=r(),se=s("div"),pt=s("div"),Ps=r(),k=s("div"),It=s("div"),ws=o("\u5F20\u654F"),ys=r(),Dt=s("div"),xs=o("\u8F6F\u4EF6\u6280\u672F\u7ECF\u7406"),Hs=r(),Vt=s("div"),Ts=o("\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B"),$t=r(),Nl(le.$$.fragment),this.h()},l(_){Ol('[data-svelte="svelte-cnbvpd"]',document.head).forEach(a),E=d(_),c=l(_,"DIV",{class:!0});var ie=i(c);n=v(ie,"\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (Progressive Web Apps, PWA) \u57FA\u4E8E\u5F00\u653E\u7684\xA0Web \u6807\u51C6\u5F00\u53D1\uFF0C\u901A\u8FC7\u73B0\u4EE3 Web API \u6784\u5EFA\u548C\u589E\u5F3A\uFF0C\u5177\u6709\u53EF\u53D1\u73B0\u3001\u53EF\u5B89\u88C5\u3001\u53EF\u94FE\u63A5\u3001\u53EF\u79BB\u7EBF\u3001\u53EF\u540C\u6B65\u53CA\u53EF\u63A8\u9001\u7B49\u7B49\u4E00\u7CFB\u5217\u7279\u70B9\uFF0C\u66F4\u5177\u5907\u4E00\u5957\u4EE3\u7801\u5373\u53EF\u89E6\u8FBE\u4EFB\u4F55\u4EBA\u3001\u4EFB\u4F55\u8BBE\u5907\u7684\u4F18\u52BF\u5E76\u786E\u4FDD\u5B89\u5168\u6027\u3002"),V=l(ie,"BR",{}),u=l(ie,"BR",{}),b=v(ie,"\u4E3A\u52A0\u901F\u63A8\u52A8\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (Progressive Web Apps, PWA) \u5728\u4E2D\u56FD\u7684\u53D1\u5C55\uFF0C\u5FAE\u8F6F\u3001\u82F1\u7279\u5C14\u4E0E\u8C37\u6B4C\u643A\u624B\u4E3E\u529E\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5\u6D3B\u52A8\u3002 \u8BE5\u6D3B\u52A8\u9080\u8BF7\u4E00\u4F17\u4E1A\u754C\u5927\u5496\u56F4\u7ED5 PWA \u5C55\u5F00\u5206\u4EAB\uFF0C\u63A2\u8BA8\u6700\u65B0\u6280\u672F\u8FDB\u5C55\uFF0C\u4EE5\u53CA PWA \u751F\u6001\u7684\u5B9E\u8DF5\u4E0E\u843D\u5730\u3002"),ie.forEach(a),q=d(_),A=l(_,"DIV",{class:!0});var $s=i(A);f=l($s,"DIV",{id:!0});var p=i(f);W=l(p,"A",{href:!0});var Cs=i(W);g=l(Cs,"DIV",{id:!0,class:!0});var Gs=i(g);I=l(Gs,"DIV",{class:!0});var Ct=i(I);D=l(Ct,"H1",{class:!0});var Ss=i(D);Ee=v(Ss,"\u5F00\u5E55\u81F4\u8F9E"),Ss.forEach(a),pe=d(Ct),P=l(Ct,"DIV",{class:!0});var Gt=i(P);R=l(Gt,"DIV",{class:!0,id:!0}),i(R).forEach(a),Zt=d(Gt),w=l(Gt,"DIV",{class:!0});var mt=i(w);Ie=l(mt,"DIV",{class:!0});var ks=i(Ie);ea=v(ks,"\u5F20\u7426"),ks.forEach(a),ta=d(mt),De=l(mt,"DIV",{class:!0});var Bs=i(De);aa=v(Bs,"\u8D44\u6DF1\u6280\u672F\u603B\u76D1"),Bs.forEach(a),sa=d(mt),Ve=l(mt,"DIV",{class:!0});var Rs=i(Ve);la=v(Rs,"\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B"),Rs.forEach(a),mt.forEach(a),Gt.forEach(a),Ct.forEach(a),Gs.forEach(a),Cs.forEach(a),ia=d(p),me=l(p,"A",{href:!0});var qs=i(me);re=l(qs,"DIV",{id:!0,class:!0});var Ls=i(re);L=l(Ls,"DIV",{class:!0});var St=i(L);Ae=l(St,"H1",{class:!0});var js=i(Ae);ra=v(js,"\u5F00\u573A\u6F14\u8BB2 PWAs & MiniApps"),js.forEach(a),da=d(St),j=l(St,"DIV",{class:!0});var kt=i(j);be=l(kt,"DIV",{class:!0,id:!0}),i(be).forEach(a),ca=d(kt),y=l(kt,"DIV",{class:!0});var At=i(y);We=l(At,"DIV",{class:!0});var Js=i(We);oa=v(Js,"Alex Russell"),Js.forEach(a),va=d(At),ge=l(At,"DIV",{class:!0});var Us=i(ge);na=v(Us,"PWA \u4E4B\u7236 \u5168\u7403\u5408\u4F19\u4EBA\u4EA7\u54C1\u7ECF\u7406"),Us.forEach(a),ha=d(At),Pe=l(At,"DIV",{class:!0});var zs=i(Pe);fa=v(zs,"\u5FAE\u8F6F Edge \u6D4F\u89C8\u5668\u56E2\u961F"),zs.forEach(a),At.forEach(a),kt.forEach(a),St.forEach(a),Ls.forEach(a),qs.forEach(a),ua=d(p),we=l(p,"A",{href:!0});var Fs=i(we);de=l(Fs,"DIV",{id:!0,class:!0});var Ms=i(de);J=l(Ms,"DIV",{class:!0});var Bt=i(J);ye=l(Bt,"H1",{class:!0});var Ks=i(ye);_a=v(Ks,"Take Full Advantage of a PWA"),Ks.forEach(a),Ea=d(Bt),U=l(Bt,"DIV",{class:!0});var Rt=i(U);xe=l(Rt,"DIV",{class:!0,id:!0}),i(xe).forEach(a),pa=d(Rt),x=l(Rt,"DIV",{class:!0});var bt=i(x);He=l(bt,"DIV",{class:!0});var Ns=i(He);Ia=v(Ns,"\u4E1B\u6167\u541B"),Ns.forEach(a),Da=d(bt),Te=l(bt,"DIV",{class:!0});var Os=i(Te);Va=v(Os,"\u9AD8\u7EA7\u89E3\u51B3\u65B9\u6848\u987E\u95EE"),Os.forEach(a),ma=d(bt),$e=l(bt,"DIV",{class:!0});var Qs=i($e);Aa=v(Qs,"Google Chrome & Web Platform"),Qs.forEach(a),bt.forEach(a),Rt.forEach(a),Bt.forEach(a),Ms.forEach(a),Fs.forEach(a),ba=d(p),Ce=l(p,"A",{href:!0});var Xs=i(Ce);ce=l(Xs,"DIV",{id:!0,class:!0});var Ys=i(ce);z=l(Ys,"DIV",{class:!0});var qt=i(z);Ge=l(qt,"H1",{class:!0});var Zs=i(Ge);Wa=v(Zs,"\u91CD\u6E29 PWA \u6280\u672F\u7684\u73B0\u5B9E\u610F\u4E49"),Zs.forEach(a),ga=d(qt),F=l(qt,"DIV",{class:!0});var Lt=i(F);Se=l(Lt,"DIV",{class:!0,id:!0}),i(Se).forEach(a),Pa=d(Lt),H=l(Lt,"DIV",{class:!0});var Wt=i(H);ke=l(Wt,"DIV",{class:!0});var el=i(ke);wa=v(el,"\u5B8B\u9752\u89C1"),el.forEach(a),ya=d(Wt),Be=l(Wt,"DIV",{class:!0});var tl=i(Be);xa=v(tl,"\u9996\u5E2D\u4EA7\u54C1\u7ECF\u7406"),tl.forEach(a),Ha=d(Wt),Re=l(Wt,"DIV",{class:!0});var al=i(Re);Ta=v(al,"\u5FAE\u8F6F Edge \xB7 \u5F00\u53D1\u8005\u751F\u6001"),al.forEach(a),Wt.forEach(a),Lt.forEach(a),qt.forEach(a),Ys.forEach(a),Xs.forEach(a),$a=d(p),qe=l(p,"A",{href:!0});var sl=i(qe);oe=l(sl,"DIV",{id:!0,class:!0});var ll=i(oe);M=l(ll,"DIV",{class:!0});var jt=i(M);Le=l(jt,"H1",{class:!0});var il=i(Le);Ca=v(il,"The World of PWA Tools"),il.forEach(a),Ga=d(jt),K=l(jt,"DIV",{class:!0});var Jt=i(K);je=l(Jt,"DIV",{class:!0,id:!0}),i(je).forEach(a),Sa=d(Jt),T=l(Jt,"DIV",{class:!0});var gt=i(T);Je=l(gt,"DIV",{class:!0});var rl=i(Je);ka=v(rl,"Justin Willis & Amrutha Srinivasan"),rl.forEach(a),Ba=d(gt),Ue=l(gt,"DIV",{class:!0});var dl=i(Ue);Ra=v(dl,"\u8F6F\u4EF6\u5DE5\u7A0B\u5E08"),dl.forEach(a),qa=d(gt),ze=l(gt,"DIV",{class:!0});var cl=i(ze);La=v(cl,"\u5FAE\u8F6F PWABuilder"),cl.forEach(a),gt.forEach(a),Jt.forEach(a),jt.forEach(a),ll.forEach(a),sl.forEach(a),ja=d(p),Fe=l(p,"A",{href:!0});var ol=i(Fe);ve=l(ol,"DIV",{id:!0,class:!0});var vl=i(ve);N=l(vl,"DIV",{class:!0});var Ut=i(N);Me=l(Ut,"H1",{class:!0});var nl=i(Me);Ja=v(nl,"\u8DD1\u5728 PWA \u91CC\u7684 '\u5C0F\u7A0B\u5E8F'"),nl.forEach(a),Ua=d(Ut),O=l(Ut,"DIV",{class:!0});var zt=i(O);Ke=l(zt,"DIV",{class:!0,id:!0}),i(Ke).forEach(a),za=d(zt),$=l(zt,"DIV",{class:!0});var Pt=i($);Ne=l(Pt,"DIV",{class:!0});var hl=i(Ne);Fa=v(hl,"\u6731\u5929\u5065"),hl.forEach(a),Ma=d(Pt),Oe=l(Pt,"DIV",{class:!0});var fl=i(Oe);Ka=v(fl,"\u524D\u7AEF\u6280\u672F\u4E13\u5BB6"),fl.forEach(a),Na=d(Pt),Qe=l(Pt,"DIV",{class:!0});var ul=i(Qe);Oa=v(ul,"\u4EAC\u4E1C\u96F6\u552E\u96C6\u56E2\u51F9\u51F8\u5B9E\u9A8C\u5BA4"),ul.forEach(a),Pt.forEach(a),zt.forEach(a),Ut.forEach(a),vl.forEach(a),ol.forEach(a),Qa=d(p),Xe=l(p,"A",{href:!0});var _l=i(Xe);ne=l(_l,"DIV",{id:!0,class:!0});var El=i(ne);Q=l(El,"DIV",{class:!0});var Ft=i(Q);Ye=l(Ft,"H1",{class:!0});var pl=i(Ye);Xa=v(pl,"\u817E\u8BAF\u6587\u6863 PWA \u5F00\u53D1\u5B9E\u8DF5"),pl.forEach(a),Ya=d(Ft),X=l(Ft,"DIV",{class:!0});var Mt=i(X);Ze=l(Mt,"DIV",{class:!0,id:!0}),i(Ze).forEach(a),Za=d(Mt),C=l(Mt,"DIV",{class:!0});var wt=i(C);et=l(wt,"DIV",{class:!0});var Il=i(et);es=v(Il,"\u5F6D\u4F1F\u5B8F"),Il.forEach(a),ts=d(wt),tt=l(wt,"DIV",{class:!0});var Dl=i(tt);as=v(Dl,"\u524D\u7AEF\u5DE5\u7A0B\u5E08"),Dl.forEach(a),ss=d(wt),at=l(wt,"DIV",{class:!0});var Vl=i(at);ls=v(Vl,"\u817E\u8BAF PCG \u5E73\u53F0\u4E0E\u5185\u5BB9\u4E8B\u4E1A\u7FA4"),Vl.forEach(a),wt.forEach(a),Mt.forEach(a),Ft.forEach(a),El.forEach(a),_l.forEach(a),is=d(p),st=l(p,"A",{href:!0});var ml=i(st);he=l(ml,"DIV",{id:!0,class:!0});var Al=i(he);Y=l(Al,"DIV",{class:!0});var Kt=i(Y);lt=l(Kt,"H1",{class:!0});var bl=i(lt);rs=v(bl,"PWA \u964D\u672C\u589E\u6548\u7684\u63A2\u7D22\u4E0E\u5B9E\u8DF5"),bl.forEach(a),ds=d(Kt),Z=l(Kt,"DIV",{class:!0});var Nt=i(Z);it=l(Nt,"DIV",{class:!0,id:!0}),i(it).forEach(a),cs=d(Nt),G=l(Nt,"DIV",{class:!0});var yt=i(G);rt=l(yt,"DIV",{class:!0});var Wl=i(rt);os=v(Wl,"\u9648\u8FDC\u5B8F"),Wl.forEach(a),vs=d(yt),dt=l(yt,"DIV",{class:!0});var gl=i(dt);ns=v(gl,"\u524D\u7AEF\u5DE5\u7A0B\u5E08"),gl.forEach(a),hs=d(yt),ct=l(yt,"DIV",{class:!0});var Pl=i(ct);fs=v(Pl,"\u963F\u91CC\u5DF4\u5DF4 ICBU \u6280\u672F\u90E8"),Pl.forEach(a),yt.forEach(a),Nt.forEach(a),Kt.forEach(a),Al.forEach(a),ml.forEach(a),us=d(p),ot=l(p,"A",{href:!0});var wl=i(ot);fe=l(wl,"DIV",{id:!0,class:!0});var yl=i(fe);ee=l(yl,"DIV",{class:!0});var Ot=i(ee);vt=l(Ot,"H1",{class:!0});var xl=i(vt);_s=v(xl,"\u7F51\u9875\u7684\u539F\u751F\u5316\u4E4B\u65C5"),xl.forEach(a),Es=d(Ot),te=l(Ot,"DIV",{class:!0});var Qt=i(te);nt=l(Qt,"DIV",{class:!0,id:!0}),i(nt).forEach(a),ps=d(Qt),S=l(Qt,"DIV",{class:!0});var xt=i(S);ht=l(xt,"DIV",{class:!0});var Hl=i(ht);Is=v(Hl,"\u738B\u6D69\u5B87"),Hl.forEach(a),Ds=d(xt),ft=l(xt,"DIV",{class:!0});var Tl=i(ft);Vs=v(Tl,"\u524D\u7AEF\u5DE5\u7A0B\u5E08"),Tl.forEach(a),ms=d(xt),ut=l(xt,"DIV",{class:!0});var $l=i(ut);As=v($l,"\u6296\u97F3\u96C6\u56E2\u5DE8\u91CF\u5343\u5DDD"),$l.forEach(a),xt.forEach(a),Qt.forEach(a),Ot.forEach(a),yl.forEach(a),wl.forEach(a),bs=d(p),_t=l(p,"A",{href:!0});var Cl=i(_t);ue=l(Cl,"DIV",{id:!0,class:!0});var Gl=i(ue);ae=l(Gl,"DIV",{class:!0});var Xt=i(ae);Et=l(Xt,"H1",{class:!0});var Sl=i(Et);Ws=v(Sl,"\u65B0\u5174 Web \u6280\u672F\u52A9\u529B PWA"),Sl.forEach(a),gs=d(Xt),se=l(Xt,"DIV",{class:!0});var Yt=i(se);pt=l(Yt,"DIV",{class:!0,id:!0}),i(pt).forEach(a),Ps=d(Yt),k=l(Yt,"DIV",{class:!0});var Ht=i(k);It=l(Ht,"DIV",{class:!0});var kl=i(It);ws=v(kl,"\u5F20\u654F"),kl.forEach(a),ys=d(Ht),Dt=l(Ht,"DIV",{class:!0});var Bl=i(Dt);xs=v(Bl,"\u8F6F\u4EF6\u6280\u672F\u7ECF\u7406"),Bl.forEach(a),Hs=d(Ht),Vt=l(Ht,"DIV",{class:!0});var Rl=i(Vt);Ts=v(Rl,"\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B"),Rl.forEach(a),Ht.forEach(a),Yt.forEach(a),Xt.forEach(a),Gl.forEach(a),Cl.forEach(a),p.forEach(a),$s.forEach(a),$t=d(_),Ql(le.$$.fragment,_),this.h()},h(){t(c,"class","intro"),t(D,"class","title"),t(R,"class","avatar"),t(R,"id","icon_qi"),t(Ie,"class","nametitle"),t(De,"class","team"),t(Ve,"class","team"),t(w,"class","description"),t(P,"class","details"),t(I,"class","topic"),t(g,"id","opening"),t(g,"class","touch"),t(W,"href","/blog/opening"),t(Ae,"class","title"),t(be,"class","avatar"),t(be,"id","icon_alex"),t(We,"class","nametitle"),t(ge,"class","team"),t(Pe,"class","team"),t(y,"class","description"),t(j,"class","details"),t(L,"class","topic"),t(re,"id","open-speech"),t(re,"class","touch"),t(me,"href","/blog/open-speech"),t(ye,"class","title"),t(xe,"class","avatar"),t(xe,"id","icon_cecilia"),t(He,"class","nametitle"),t(Te,"class","team"),t($e,"class","team"),t(x,"class","description"),t(U,"class","details"),t(J,"class","topic"),t(de,"id","take-full-advantage-of-a-pwa"),t(de,"class","touch"),t(we,"href","/blog/take-full-advantage-of-a-pwa"),t(Ge,"class","title"),t(Se,"class","avatar"),t(Se,"id","icon_edwin"),t(ke,"class","nametitle"),t(Be,"class","team"),t(Re,"class","team"),t(H,"class","description"),t(F,"class","details"),t(z,"class","topic"),t(ce,"id","revisiting-the-real-world-significance-of-pwa-technology"),t(ce,"class","touch"),t(Ce,"href","/blog/revisiting-the-real-world-significance-of-pwa-technology"),t(Le,"class","title"),t(je,"class","avatar"),t(je,"id","icon_pwabuilder"),t(Je,"class","nametitle"),t(Ue,"class","team"),t(ze,"class","team"),t(T,"class","description"),t(K,"class","details"),t(M,"class","topic"),t(oe,"id","the-world-of-pwa-tools-from-starter-to-builder"),t(oe,"class","touch"),t(qe,"href","/blog/the-world-of-pwa-tools-from-starter-to-builder"),t(Me,"class","title"),t(Ke,"class","avatar"),t(Ke,"id","icon_tianjian"),t(Ne,"class","nametitle"),t(Oe,"class","team"),t(Qe,"class","team"),t($,"class","description"),t(O,"class","details"),t(N,"class","topic"),t(ve,"id","running-mini-apps-in-pwa"),t(ve,"class","touch"),t(Fe,"href","/blog/running-mini-apps-in-pwa"),t(Ye,"class","title"),t(Ze,"class","avatar"),t(Ze,"id","icon_harry"),t(et,"class","nametitle"),t(tt,"class","team"),t(at,"class","team"),t(C,"class","description"),t(X,"class","details"),t(Q,"class","topic"),t(ne,"id","tencent-documentation-pwa-development-practice"),t(ne,"class","touch"),t(Xe,"href","/blog/tencent-documentation-pwa-development-practice"),t(lt,"class","title"),t(it,"class","avatar"),t(it,"id","icon_yuanhong"),t(rt,"class","nametitle"),t(dt,"class","team"),t(ct,"class","team"),t(G,"class","description"),t(Z,"class","details"),t(Y,"class","topic"),t(he,"id","the-exploration-and-practice-of-alibaba.com-pwa-to-reduce-costs-and-increase-efficiency"),t(he,"class","touch"),t(st,"href","/blog/the-exploration-and-practice-of-alibaba.com-pwa-to-reduce-costs-and-increase-efficiency"),t(vt,"class","title"),t(nt,"class","avatar"),t(nt,"id","icon_haoyu"),t(ht,"class","nametitle"),t(ft,"class","team"),t(ut,"class","team"),t(S,"class","description"),t(te,"class","details"),t(ee,"class","topic"),t(fe,"id","the-journey-of-web-nativeization"),t(fe,"class","touch"),t(ot,"href","/blog/the-journey-of-web-nativeization"),t(Et,"class","title"),t(pt,"class","avatar"),t(pt,"id","icon_belem"),t(It,"class","nametitle"),t(Dt,"class","team"),t(Vt,"class","team"),t(k,"class","description"),t(se,"class","details"),t(ae,"class","topic"),t(ue,"id","explore-new-web-capabilities-for-your-pwa"),t(ue,"class","touch"),t(_t,"href","/blog/explore-new-web-capabilities-for-your-pwa"),t(f,"id","agenda"),t(A,"class","t2022")},m(_,B){_e(_,E,B),_e(_,c,B),e(c,n),e(c,V),e(c,u),e(c,b),_e(_,q,B),_e(_,A,B),e(A,f),e(f,W),e(W,g),e(g,I),e(I,D),e(D,Ee),e(I,pe),e(I,P),e(P,R),e(P,Zt),e(P,w),e(w,Ie),e(Ie,ea),e(w,ta),e(w,De),e(De,aa),e(w,sa),e(w,Ve),e(Ve,la),e(f,ia),e(f,me),e(me,re),e(re,L),e(L,Ae),e(Ae,ra),e(L,da),e(L,j),e(j,be),e(j,ca),e(j,y),e(y,We),e(We,oa),e(y,va),e(y,ge),e(ge,na),e(y,ha),e(y,Pe),e(Pe,fa),e(f,ua),e(f,we),e(we,de),e(de,J),e(J,ye),e(ye,_a),e(J,Ea),e(J,U),e(U,xe),e(U,pa),e(U,x),e(x,He),e(He,Ia),e(x,Da),e(x,Te),e(Te,Va),e(x,ma),e(x,$e),e($e,Aa),e(f,ba),e(f,Ce),e(Ce,ce),e(ce,z),e(z,Ge),e(Ge,Wa),e(z,ga),e(z,F),e(F,Se),e(F,Pa),e(F,H),e(H,ke),e(ke,wa),e(H,ya),e(H,Be),e(Be,xa),e(H,Ha),e(H,Re),e(Re,Ta),e(f,$a),e(f,qe),e(qe,oe),e(oe,M),e(M,Le),e(Le,Ca),e(M,Ga),e(M,K),e(K,je),e(K,Sa),e(K,T),e(T,Je),e(Je,ka),e(T,Ba),e(T,Ue),e(Ue,Ra),e(T,qa),e(T,ze),e(ze,La),e(f,ja),e(f,Fe),e(Fe,ve),e(ve,N),e(N,Me),e(Me,Ja),e(N,Ua),e(N,O),e(O,Ke),e(O,za),e(O,$),e($,Ne),e(Ne,Fa),e($,Ma),e($,Oe),e(Oe,Ka),e($,Na),e($,Qe),e(Qe,Oa),e(f,Qa),e(f,Xe),e(Xe,ne),e(ne,Q),e(Q,Ye),e(Ye,Xa),e(Q,Ya),e(Q,X),e(X,Ze),e(X,Za),e(X,C),e(C,et),e(et,es),e(C,ts),e(C,tt),e(tt,as),e(C,ss),e(C,at),e(at,ls),e(f,is),e(f,st),e(st,he),e(he,Y),e(Y,lt),e(lt,rs),e(Y,ds),e(Y,Z),e(Z,it),e(Z,cs),e(Z,G),e(G,rt),e(rt,os),e(G,vs),e(G,dt),e(dt,ns),e(G,hs),e(G,ct),e(ct,fs),e(f,us),e(f,ot),e(ot,fe),e(fe,ee),e(ee,vt),e(vt,_s),e(ee,Es),e(ee,te),e(te,nt),e(te,ps),e(te,S),e(S,ht),e(ht,Is),e(S,Ds),e(S,ft),e(ft,Vs),e(S,ms),e(S,ut),e(ut,As),e(f,bs),e(f,_t),e(_t,ue),e(ue,ae),e(ae,Et),e(Et,Ws),e(ae,gs),e(ae,se),e(se,pt),e(se,Ps),e(se,k),e(k,It),e(It,ws),e(k,ys),e(k,Dt),e(Dt,xs),e(k,Hs),e(k,Vt),e(Vt,Ts),_e(_,$t,B),Xl(le,_,B),Tt=!0},p(_,[B]){(!Tt||B&0)&&h!==(h=jl)&&(document.title=h);const ie={};B&1&&(ie.posts=_[0].posts),le.$set(ie)},i(_){Tt||(Yl(le.$$.fragment,_),Tt=!0)},o(_){Zl(le.$$.fragment,_),Tt=!1},d(_){_&&a(E),_&&a(c),_&&a(q),_&&a(A),_&&a($t),ei(le,_)}}}function ii(m,h,E){let{data:c}=h;return m.$$set=n=>{"data"in n&&E(0,c=n.data)},[c]}class ci extends zl{constructor(h){super(),Fl(this,h,ii,li,Ml,{data:0})}}export{ci as default};