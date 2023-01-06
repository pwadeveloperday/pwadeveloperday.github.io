import{S as bi,i as wi,s as Pi,k as s,l as a,m as r,h as l,n as t,b as F,A as Ii,J as yi,q as d,a as i,r as v,c,D as e,u as Ai,v as Gi,R as xi,w as Li,T as w,x as ki,f as Mi,t as Ti,y as Hi}from"../../chunks/index-a5c414f5.js";import{s as Di}from"../../chunks/config-1cc2bd8c.js";function Vi(V,h,p){const o=V.slice();return o[1]=h[p],o}function Wi(V){let h,p,o,n,D=V[1].title+"",_,P,R,W,f=V[1].excerpt+"",y,G;return{c(){h=s("li"),p=s("article"),o=s("a"),n=s("h1"),_=d(D),R=i(),W=s("p"),y=d(f),G=i(),this.h()},l(I){h=a(I,"LI",{});var A=r(h);p=a(A,"ARTICLE",{});var ze=r(p);o=a(ze,"A",{href:!0});var Ue=r(o);n=a(Ue,"H1",{});var x=r(n);_=v(x,D),x.forEach(l),Ue.forEach(l),ze.forEach(l),R=c(A),W=a(A,"P",{});var B=r(W);y=v(B,f),B.forEach(l),G=c(A),A.forEach(l),this.h()},h(){t(o,"href",P="/blog/"+V[1].slug)},m(I,A){F(I,h,A),e(h,p),e(p,o),e(o,n),e(n,_),e(h,R),e(h,W),e(W,y),e(h,G)},p(I,A){A&1&&D!==(D=I[1].title+"")&&Ai(_,D),A&1&&P!==(P="/blog/"+I[1].slug)&&t(o,"href",P),A&1&&f!==(f=I[1].excerpt+"")&&Ai(y,f)},d(I){I&&l(h)}}}function ji(V){let h,p=V[0],o=[];for(let n=0;n<p.length;n+=1)o[n]=Wi(Vi(V,p,n));return{c(){h=s("ul");for(let n=0;n<o.length;n+=1)o[n].c();this.h()},l(n){h=a(n,"UL",{class:!0});var D=r(h);for(let _=0;_<o.length;_+=1)o[_].l(D);D.forEach(l),this.h()},h(){t(h,"class","posts-list home")},m(n,D){F(n,h,D);for(let _=0;_<o.length;_+=1)o[_].m(h,null)},p(n,[D]){if(D&1){p=n[0];let _;for(_=0;_<p.length;_+=1){const P=Vi(n,p,_);o[_]?o[_].p(P,D):(o[_]=Wi(P),o[_].c(),o[_].m(h,null))}for(;_<o.length;_+=1)o[_].d(1);o.length=p.length}},i:Ii,o:Ii,d(n){n&&l(h),yi(o,n)}}}function $i(V,h,p){let{posts:o=[]}=h;return V.$$set=n=>{"posts"in n&&p(0,o=n.posts)},[o]}class qi extends bi{constructor(h){super(),wi(this,h,$i,ji,Pi,{posts:0})}}function Ci(V){let h,p,o,n,D,_,P,R,W,f,y,G,I,A,ze,Ue,x,B,Ss,L,Je,Bs,Fs,Ne,Rs,zs,Qe,Us,Js,Ze,ve,z,Ke,Ns,Qs,U,Oe,Zs,k,Xe,Ks,Os,Ye,Xs,Ys,et,ea,ta,tt,ne,J,st,sa,aa,N,at,la,M,lt,ra,ia,rt,ca,oa,it,da,va,ct,he,Q,ot,na,ha,Z,dt,ua,T,vt,fa,_a,nt,ma,ga,ht,pa,Ea,ut,ue,K,ft,Ia,Aa,O,_t,Da,H,mt,Va,Wa,gt,ba,wa,pt,Pa,ya,Et,fe,X,It,Ga,xa,Y,At,La,j,Dt,ka,Ma,Vt,Ta,Ha,Wt,ja,$a,bt,_e,ee,wt,qa,Ca,te,Pt,Sa,$,yt,Ba,Fa,Gt,Ra,za,xt,Ua,Ja,Lt,me,se,kt,Na,Qa,ae,Mt,Za,q,Tt,Ka,Oa,Ht,Xa,Ya,jt,el,tl,$t,ge,le,qt,sl,al,re,Ct,ll,C,St,rl,il,Bt,cl,ol,Ft,dl,vl,Rt,pe,ie,zt,nl,hl,ce,Ut,ul,S,Jt,fl,_l,Nt,ml,gl,Qt,pl,ps,oe,Es,Ee,m,Zt,Ie,Ae,xl,El,Kt,De,Ve,Ll,Il,Ot,We,be,kl,Al,Xt,we,Pe,Ml,Dl,Yt,ye,Ge,Tl,Vl,es,xe,Le,Hl,Wl,ts,ke,Me,jl,bl,ss,Te,He,$l,wl,as,je,$e,ql,Pl,ls,qe,Ce,Cl,yl,rs,Se,Be,Sl,Gl,is,Fe,Re,Bl,gs;return document.title=h=Di,oe=new qi({props:{posts:V[0].posts}}),{c(){p=i(),o=s("div"),n=d(`\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (Progressive Web Apps, PWA) \u57FA\u4E8E\u5F00\u653E\u7684\xA0Web \u6807\u51C6\u5F00\u53D1\uFF0C\u901A\u8FC7\u73B0\u4EE3
  Web API
  \u6784\u5EFA\u548C\u589E\u5F3A\uFF0C\u5177\u6709\u53EF\u53D1\u73B0\u3001\u53EF\u5B89\u88C5\u3001\u53EF\u94FE\u63A5\u3001\u53EF\u79BB\u7EBF\u3001\u53EF\u540C\u6B65\u53CA\u53EF\u63A8\u9001\u7B49\u7B49\u4E00\u7CFB\u5217\u7279\u70B9\uFF0C\u66F4\u5177\u5907\u4E00\u5957\u4EE3\u7801\u5373\u53EF\u89E6\u8FBE\u4EFB\u4F55\u4EBA\u3001\u4EFB\u4F55\u8BBE\u5907\u7684\u4F18\u52BF\u5E76\u786E\u4FDD\u5B89\u5168\u6027\u3002`),D=s("br"),_=s("br"),P=d(`\u4E3A\u52A0\u901F\u63A8\u52A8\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (Progressive Web Apps, PWA)
  \u5728\u4E2D\u56FD\u7684\u53D1\u5C55\uFF0C\u5FAE\u8F6F\u3001\u82F1\u7279\u5C14\u4E0E\u8C37\u6B4C\u643A\u624B\u4E3E\u529E\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5\u6D3B\u52A8\u3002
  \u8BE5\u6D3B\u52A8\u9080\u8BF7\u4E00\u4F17\u4E1A\u754C\u5927\u5496\u56F4\u7ED5 PWA \u5C55\u5F00\u5206\u4EAB\uFF0C\u63A2\u8BA8\u6700\u65B0\u6280\u672F\u8FDB\u5C55\uFF0C\u4EE5\u53CA PWA
  \u751F\u6001\u7684\u5B9E\u8DF5\u4E0E\u843D\u5730\u3002`),R=i(),W=s("div"),f=s("div"),y=s("a"),G=s("div"),I=s("div"),A=s("h1"),ze=d("\u5F00\u5E55\u81F4\u8F9E"),Ue=i(),x=s("div"),B=s("div"),Ss=i(),L=s("div"),Je=s("div"),Bs=d("\u5F20\u7426"),Fs=i(),Ne=s("div"),Rs=d("\u8D44\u6DF1\u6280\u672F\u603B\u76D1"),zs=i(),Qe=s("div"),Us=d("\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B"),Js=i(),Ze=s("a"),ve=s("div"),z=s("div"),Ke=s("h1"),Ns=d("\u5F00\u573A\u6F14\u8BB2 PWAs & MiniApps"),Qs=i(),U=s("div"),Oe=s("div"),Zs=i(),k=s("div"),Xe=s("div"),Ks=d("Alex Russell"),Os=i(),Ye=s("div"),Xs=d("PWA \u4E4B\u7236 \u5168\u7403\u5408\u4F19\u4EBA\u4EA7\u54C1\u7ECF\u7406"),Ys=i(),et=s("div"),ea=d("\u5FAE\u8F6F Edge \u6D4F\u89C8\u5668\u56E2\u961F"),ta=i(),tt=s("a"),ne=s("div"),J=s("div"),st=s("h1"),sa=d("Take Full Advantage of a PWA"),aa=i(),N=s("div"),at=s("div"),la=i(),M=s("div"),lt=s("div"),ra=d("\u4E1B\u6167\u541B"),ia=i(),rt=s("div"),ca=d("\u9AD8\u7EA7\u89E3\u51B3\u65B9\u6848\u987E\u95EE"),oa=i(),it=s("div"),da=d("Google Chrome & Web Platform"),va=i(),ct=s("a"),he=s("div"),Q=s("div"),ot=s("h1"),na=d("\u91CD\u6E29 PWA \u6280\u672F\u7684\u73B0\u5B9E\u610F\u4E49"),ha=i(),Z=s("div"),dt=s("div"),ua=i(),T=s("div"),vt=s("div"),fa=d("\u5B8B\u9752\u89C1"),_a=i(),nt=s("div"),ma=d("\u9996\u5E2D\u4EA7\u54C1\u7ECF\u7406"),ga=i(),ht=s("div"),pa=d("\u5FAE\u8F6F Edge \xB7 \u5F00\u53D1\u8005\u751F\u6001"),Ea=i(),ut=s("a"),ue=s("div"),K=s("div"),ft=s("h1"),Ia=d("The World of PWA Tools"),Aa=i(),O=s("div"),_t=s("div"),Da=i(),H=s("div"),mt=s("div"),Va=d("Justin Willis & Amrutha Srinivasan"),Wa=i(),gt=s("div"),ba=d("\u8F6F\u4EF6\u5DE5\u7A0B\u5E08"),wa=i(),pt=s("div"),Pa=d("\u5FAE\u8F6F PWABuilder"),ya=i(),Et=s("a"),fe=s("div"),X=s("div"),It=s("h1"),Ga=d("\u8DD1\u5728 PWA \u91CC\u7684 '\u5C0F\u7A0B\u5E8F'"),xa=i(),Y=s("div"),At=s("div"),La=i(),j=s("div"),Dt=s("div"),ka=d("\u6731\u5929\u5065"),Ma=i(),Vt=s("div"),Ta=d("\u524D\u7AEF\u6280\u672F\u4E13\u5BB6"),Ha=i(),Wt=s("div"),ja=d("\u4EAC\u4E1C\u96F6\u552E\u96C6\u56E2\u51F9\u51F8\u5B9E\u9A8C\u5BA4"),$a=i(),bt=s("a"),_e=s("div"),ee=s("div"),wt=s("h1"),qa=d("\u817E\u8BAF\u6587\u6863 PWA \u5F00\u53D1\u5B9E\u8DF5"),Ca=i(),te=s("div"),Pt=s("div"),Sa=i(),$=s("div"),yt=s("div"),Ba=d("\u5F6D\u4F1F\u5B8F"),Fa=i(),Gt=s("div"),Ra=d("\u524D\u7AEF\u5DE5\u7A0B\u5E08"),za=i(),xt=s("div"),Ua=d("\u817E\u8BAF PCG \u5E73\u53F0\u4E0E\u5185\u5BB9\u4E8B\u4E1A\u7FA4"),Ja=i(),Lt=s("a"),me=s("div"),se=s("div"),kt=s("h1"),Na=d("PWA \u964D\u672C\u589E\u6548\u7684\u63A2\u7D22\u4E0E\u5B9E\u8DF5"),Qa=i(),ae=s("div"),Mt=s("div"),Za=i(),q=s("div"),Tt=s("div"),Ka=d("\u9648\u8FDC\u5B8F"),Oa=i(),Ht=s("div"),Xa=d("\u524D\u7AEF\u5DE5\u7A0B\u5E08"),Ya=i(),jt=s("div"),el=d("\u963F\u91CC\u5DF4\u5DF4 ICBU \u6280\u672F\u90E8"),tl=i(),$t=s("a"),ge=s("div"),le=s("div"),qt=s("h1"),sl=d("\u7F51\u9875\u7684\u539F\u751F\u5316\u4E4B\u65C5"),al=i(),re=s("div"),Ct=s("div"),ll=i(),C=s("div"),St=s("div"),rl=d("\u738B\u6D69\u5B87"),il=i(),Bt=s("div"),cl=d("\u524D\u7AEF\u5DE5\u7A0B\u5E08"),ol=i(),Ft=s("div"),dl=d("\u6296\u97F3\u96C6\u56E2\u5DE8\u91CF\u5343\u5DDD"),vl=i(),Rt=s("a"),pe=s("div"),ie=s("div"),zt=s("h1"),nl=d("\u65B0\u5174 Web \u6280\u672F\u52A9\u529B PWA"),hl=i(),ce=s("div"),Ut=s("div"),ul=i(),S=s("div"),Jt=s("div"),fl=d("\u5F20\u654F"),_l=i(),Nt=s("div"),ml=d("\u8F6F\u4EF6\u6280\u672F\u7ECF\u7406"),gl=i(),Qt=s("div"),pl=d("\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B"),ps=i(),Gi(oe.$$.fragment),Es=i(),Ee=s("div"),m=s("ul"),Zt=s("li"),Ie=s("a"),Ae=s("img"),El=i(),Kt=s("li"),De=s("a"),Ve=s("img"),Il=i(),Ot=s("li"),We=s("a"),be=s("img"),Al=i(),Xt=s("li"),we=s("a"),Pe=s("img"),Dl=i(),Yt=s("li"),ye=s("a"),Ge=s("img"),Vl=i(),es=s("li"),xe=s("a"),Le=s("img"),Wl=i(),ts=s("li"),ke=s("a"),Me=s("img"),bl=i(),ss=s("li"),Te=s("a"),He=s("img"),wl=i(),as=s("li"),je=s("a"),$e=s("img"),Pl=i(),ls=s("li"),qe=s("a"),Ce=s("img"),yl=i(),rs=s("li"),Se=s("a"),Be=s("img"),Gl=i(),is=s("li"),Fe=s("a"),Re=s("img"),this.h()},l(u){xi('[data-svelte="svelte-8f4hp6"]',document.head).forEach(l),p=c(u),o=a(u,"DIV",{class:!0});var de=r(o);n=v(de,`\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (Progressive Web Apps, PWA) \u57FA\u4E8E\u5F00\u653E\u7684\xA0Web \u6807\u51C6\u5F00\u53D1\uFF0C\u901A\u8FC7\u73B0\u4EE3
  Web API
  \u6784\u5EFA\u548C\u589E\u5F3A\uFF0C\u5177\u6709\u53EF\u53D1\u73B0\u3001\u53EF\u5B89\u88C5\u3001\u53EF\u94FE\u63A5\u3001\u53EF\u79BB\u7EBF\u3001\u53EF\u540C\u6B65\u53CA\u53EF\u63A8\u9001\u7B49\u7B49\u4E00\u7CFB\u5217\u7279\u70B9\uFF0C\u66F4\u5177\u5907\u4E00\u5957\u4EE3\u7801\u5373\u53EF\u89E6\u8FBE\u4EFB\u4F55\u4EBA\u3001\u4EFB\u4F55\u8BBE\u5907\u7684\u4F18\u52BF\u5E76\u786E\u4FDD\u5B89\u5168\u6027\u3002`),D=a(de,"BR",{}),_=a(de,"BR",{}),P=v(de,`\u4E3A\u52A0\u901F\u63A8\u52A8\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (Progressive Web Apps, PWA)
  \u5728\u4E2D\u56FD\u7684\u53D1\u5C55\uFF0C\u5FAE\u8F6F\u3001\u82F1\u7279\u5C14\u4E0E\u8C37\u6B4C\u643A\u624B\u4E3E\u529E\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5\u6D3B\u52A8\u3002
  \u8BE5\u6D3B\u52A8\u9080\u8BF7\u4E00\u4F17\u4E1A\u754C\u5927\u5496\u56F4\u7ED5 PWA \u5C55\u5F00\u5206\u4EAB\uFF0C\u63A2\u8BA8\u6700\u65B0\u6280\u672F\u8FDB\u5C55\uFF0C\u4EE5\u53CA PWA
  \u751F\u6001\u7684\u5B9E\u8DF5\u4E0E\u843D\u5730\u3002`),de.forEach(l),R=c(u),W=a(u,"DIV",{class:!0});var Fl=r(W);f=a(Fl,"DIV",{id:!0});var E=r(f);y=a(E,"A",{href:!0});var Rl=r(y);G=a(Rl,"DIV",{id:!0,class:!0});var zl=r(G);I=a(zl,"DIV",{class:!0});var Is=r(I);A=a(Is,"H1",{class:!0});var Ul=r(A);ze=v(Ul,"\u5F00\u5E55\u81F4\u8F9E"),Ul.forEach(l),Ue=c(Is),x=a(Is,"DIV",{class:!0});var As=r(x);B=a(As,"DIV",{class:!0,id:!0}),r(B).forEach(l),Ss=c(As),L=a(As,"DIV",{class:!0});var cs=r(L);Je=a(cs,"DIV",{class:!0});var Jl=r(Je);Bs=v(Jl,"\u5F20\u7426"),Jl.forEach(l),Fs=c(cs),Ne=a(cs,"DIV",{class:!0});var Nl=r(Ne);Rs=v(Nl,"\u8D44\u6DF1\u6280\u672F\u603B\u76D1"),Nl.forEach(l),zs=c(cs),Qe=a(cs,"DIV",{class:!0});var Ql=r(Qe);Us=v(Ql,"\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B"),Ql.forEach(l),cs.forEach(l),As.forEach(l),Is.forEach(l),zl.forEach(l),Rl.forEach(l),Js=c(E),Ze=a(E,"A",{href:!0});var Zl=r(Ze);ve=a(Zl,"DIV",{id:!0,class:!0});var Kl=r(ve);z=a(Kl,"DIV",{class:!0});var Ds=r(z);Ke=a(Ds,"H1",{class:!0});var Ol=r(Ke);Ns=v(Ol,"\u5F00\u573A\u6F14\u8BB2 PWAs & MiniApps"),Ol.forEach(l),Qs=c(Ds),U=a(Ds,"DIV",{class:!0});var Vs=r(U);Oe=a(Vs,"DIV",{class:!0,id:!0}),r(Oe).forEach(l),Zs=c(Vs),k=a(Vs,"DIV",{class:!0});var os=r(k);Xe=a(os,"DIV",{class:!0});var Xl=r(Xe);Ks=v(Xl,"Alex Russell"),Xl.forEach(l),Os=c(os),Ye=a(os,"DIV",{class:!0});var Yl=r(Ye);Xs=v(Yl,"PWA \u4E4B\u7236 \u5168\u7403\u5408\u4F19\u4EBA\u4EA7\u54C1\u7ECF\u7406"),Yl.forEach(l),Ys=c(os),et=a(os,"DIV",{class:!0});var er=r(et);ea=v(er,"\u5FAE\u8F6F Edge \u6D4F\u89C8\u5668\u56E2\u961F"),er.forEach(l),os.forEach(l),Vs.forEach(l),Ds.forEach(l),Kl.forEach(l),Zl.forEach(l),ta=c(E),tt=a(E,"A",{href:!0});var tr=r(tt);ne=a(tr,"DIV",{id:!0,class:!0});var sr=r(ne);J=a(sr,"DIV",{class:!0});var Ws=r(J);st=a(Ws,"H1",{class:!0});var ar=r(st);sa=v(ar,"Take Full Advantage of a PWA"),ar.forEach(l),aa=c(Ws),N=a(Ws,"DIV",{class:!0});var bs=r(N);at=a(bs,"DIV",{class:!0,id:!0}),r(at).forEach(l),la=c(bs),M=a(bs,"DIV",{class:!0});var ds=r(M);lt=a(ds,"DIV",{class:!0});var lr=r(lt);ra=v(lr,"\u4E1B\u6167\u541B"),lr.forEach(l),ia=c(ds),rt=a(ds,"DIV",{class:!0});var rr=r(rt);ca=v(rr,"\u9AD8\u7EA7\u89E3\u51B3\u65B9\u6848\u987E\u95EE"),rr.forEach(l),oa=c(ds),it=a(ds,"DIV",{class:!0});var ir=r(it);da=v(ir,"Google Chrome & Web Platform"),ir.forEach(l),ds.forEach(l),bs.forEach(l),Ws.forEach(l),sr.forEach(l),tr.forEach(l),va=c(E),ct=a(E,"A",{href:!0});var cr=r(ct);he=a(cr,"DIV",{id:!0,class:!0});var or=r(he);Q=a(or,"DIV",{class:!0});var ws=r(Q);ot=a(ws,"H1",{class:!0});var dr=r(ot);na=v(dr,"\u91CD\u6E29 PWA \u6280\u672F\u7684\u73B0\u5B9E\u610F\u4E49"),dr.forEach(l),ha=c(ws),Z=a(ws,"DIV",{class:!0});var Ps=r(Z);dt=a(Ps,"DIV",{class:!0,id:!0}),r(dt).forEach(l),ua=c(Ps),T=a(Ps,"DIV",{class:!0});var vs=r(T);vt=a(vs,"DIV",{class:!0});var vr=r(vt);fa=v(vr,"\u5B8B\u9752\u89C1"),vr.forEach(l),_a=c(vs),nt=a(vs,"DIV",{class:!0});var nr=r(nt);ma=v(nr,"\u9996\u5E2D\u4EA7\u54C1\u7ECF\u7406"),nr.forEach(l),ga=c(vs),ht=a(vs,"DIV",{class:!0});var hr=r(ht);pa=v(hr,"\u5FAE\u8F6F Edge \xB7 \u5F00\u53D1\u8005\u751F\u6001"),hr.forEach(l),vs.forEach(l),Ps.forEach(l),ws.forEach(l),or.forEach(l),cr.forEach(l),Ea=c(E),ut=a(E,"A",{href:!0});var ur=r(ut);ue=a(ur,"DIV",{id:!0,class:!0});var fr=r(ue);K=a(fr,"DIV",{class:!0});var ys=r(K);ft=a(ys,"H1",{class:!0});var _r=r(ft);Ia=v(_r,"The World of PWA Tools"),_r.forEach(l),Aa=c(ys),O=a(ys,"DIV",{class:!0});var Gs=r(O);_t=a(Gs,"DIV",{class:!0,id:!0}),r(_t).forEach(l),Da=c(Gs),H=a(Gs,"DIV",{class:!0});var ns=r(H);mt=a(ns,"DIV",{class:!0});var mr=r(mt);Va=v(mr,"Justin Willis & Amrutha Srinivasan"),mr.forEach(l),Wa=c(ns),gt=a(ns,"DIV",{class:!0});var gr=r(gt);ba=v(gr,"\u8F6F\u4EF6\u5DE5\u7A0B\u5E08"),gr.forEach(l),wa=c(ns),pt=a(ns,"DIV",{class:!0});var pr=r(pt);Pa=v(pr,"\u5FAE\u8F6F PWABuilder"),pr.forEach(l),ns.forEach(l),Gs.forEach(l),ys.forEach(l),fr.forEach(l),ur.forEach(l),ya=c(E),Et=a(E,"A",{href:!0});var Er=r(Et);fe=a(Er,"DIV",{id:!0,class:!0});var Ir=r(fe);X=a(Ir,"DIV",{class:!0});var xs=r(X);It=a(xs,"H1",{class:!0});var Ar=r(It);Ga=v(Ar,"\u8DD1\u5728 PWA \u91CC\u7684 '\u5C0F\u7A0B\u5E8F'"),Ar.forEach(l),xa=c(xs),Y=a(xs,"DIV",{class:!0});var Ls=r(Y);At=a(Ls,"DIV",{class:!0,id:!0}),r(At).forEach(l),La=c(Ls),j=a(Ls,"DIV",{class:!0});var hs=r(j);Dt=a(hs,"DIV",{class:!0});var Dr=r(Dt);ka=v(Dr,"\u6731\u5929\u5065"),Dr.forEach(l),Ma=c(hs),Vt=a(hs,"DIV",{class:!0});var Vr=r(Vt);Ta=v(Vr,"\u524D\u7AEF\u6280\u672F\u4E13\u5BB6"),Vr.forEach(l),Ha=c(hs),Wt=a(hs,"DIV",{class:!0});var Wr=r(Wt);ja=v(Wr,"\u4EAC\u4E1C\u96F6\u552E\u96C6\u56E2\u51F9\u51F8\u5B9E\u9A8C\u5BA4"),Wr.forEach(l),hs.forEach(l),Ls.forEach(l),xs.forEach(l),Ir.forEach(l),Er.forEach(l),$a=c(E),bt=a(E,"A",{href:!0});var br=r(bt);_e=a(br,"DIV",{id:!0,class:!0});var wr=r(_e);ee=a(wr,"DIV",{class:!0});var ks=r(ee);wt=a(ks,"H1",{class:!0});var Pr=r(wt);qa=v(Pr,"\u817E\u8BAF\u6587\u6863 PWA \u5F00\u53D1\u5B9E\u8DF5"),Pr.forEach(l),Ca=c(ks),te=a(ks,"DIV",{class:!0});var Ms=r(te);Pt=a(Ms,"DIV",{class:!0,id:!0}),r(Pt).forEach(l),Sa=c(Ms),$=a(Ms,"DIV",{class:!0});var us=r($);yt=a(us,"DIV",{class:!0});var yr=r(yt);Ba=v(yr,"\u5F6D\u4F1F\u5B8F"),yr.forEach(l),Fa=c(us),Gt=a(us,"DIV",{class:!0});var Gr=r(Gt);Ra=v(Gr,"\u524D\u7AEF\u5DE5\u7A0B\u5E08"),Gr.forEach(l),za=c(us),xt=a(us,"DIV",{class:!0});var xr=r(xt);Ua=v(xr,"\u817E\u8BAF PCG \u5E73\u53F0\u4E0E\u5185\u5BB9\u4E8B\u4E1A\u7FA4"),xr.forEach(l),us.forEach(l),Ms.forEach(l),ks.forEach(l),wr.forEach(l),br.forEach(l),Ja=c(E),Lt=a(E,"A",{href:!0});var Lr=r(Lt);me=a(Lr,"DIV",{id:!0,class:!0});var kr=r(me);se=a(kr,"DIV",{class:!0});var Ts=r(se);kt=a(Ts,"H1",{class:!0});var Mr=r(kt);Na=v(Mr,"PWA \u964D\u672C\u589E\u6548\u7684\u63A2\u7D22\u4E0E\u5B9E\u8DF5"),Mr.forEach(l),Qa=c(Ts),ae=a(Ts,"DIV",{class:!0});var Hs=r(ae);Mt=a(Hs,"DIV",{class:!0,id:!0}),r(Mt).forEach(l),Za=c(Hs),q=a(Hs,"DIV",{class:!0});var fs=r(q);Tt=a(fs,"DIV",{class:!0});var Tr=r(Tt);Ka=v(Tr,"\u9648\u8FDC\u5B8F"),Tr.forEach(l),Oa=c(fs),Ht=a(fs,"DIV",{class:!0});var Hr=r(Ht);Xa=v(Hr,"\u524D\u7AEF\u5DE5\u7A0B\u5E08"),Hr.forEach(l),Ya=c(fs),jt=a(fs,"DIV",{class:!0});var jr=r(jt);el=v(jr,"\u963F\u91CC\u5DF4\u5DF4 ICBU \u6280\u672F\u90E8"),jr.forEach(l),fs.forEach(l),Hs.forEach(l),Ts.forEach(l),kr.forEach(l),Lr.forEach(l),tl=c(E),$t=a(E,"A",{href:!0});var $r=r($t);ge=a($r,"DIV",{id:!0,class:!0});var qr=r(ge);le=a(qr,"DIV",{class:!0});var js=r(le);qt=a(js,"H1",{class:!0});var Cr=r(qt);sl=v(Cr,"\u7F51\u9875\u7684\u539F\u751F\u5316\u4E4B\u65C5"),Cr.forEach(l),al=c(js),re=a(js,"DIV",{class:!0});var $s=r(re);Ct=a($s,"DIV",{class:!0,id:!0}),r(Ct).forEach(l),ll=c($s),C=a($s,"DIV",{class:!0});var _s=r(C);St=a(_s,"DIV",{class:!0});var Sr=r(St);rl=v(Sr,"\u738B\u6D69\u5B87"),Sr.forEach(l),il=c(_s),Bt=a(_s,"DIV",{class:!0});var Br=r(Bt);cl=v(Br,"\u524D\u7AEF\u5DE5\u7A0B\u5E08"),Br.forEach(l),ol=c(_s),Ft=a(_s,"DIV",{class:!0});var Fr=r(Ft);dl=v(Fr,"\u6296\u97F3\u96C6\u56E2\u5DE8\u91CF\u5343\u5DDD"),Fr.forEach(l),_s.forEach(l),$s.forEach(l),js.forEach(l),qr.forEach(l),$r.forEach(l),vl=c(E),Rt=a(E,"A",{href:!0});var Rr=r(Rt);pe=a(Rr,"DIV",{id:!0,class:!0});var zr=r(pe);ie=a(zr,"DIV",{class:!0});var qs=r(ie);zt=a(qs,"H1",{class:!0});var Ur=r(zt);nl=v(Ur,"\u65B0\u5174 Web \u6280\u672F\u52A9\u529B PWA"),Ur.forEach(l),hl=c(qs),ce=a(qs,"DIV",{class:!0});var Cs=r(ce);Ut=a(Cs,"DIV",{class:!0,id:!0}),r(Ut).forEach(l),ul=c(Cs),S=a(Cs,"DIV",{class:!0});var ms=r(S);Jt=a(ms,"DIV",{class:!0});var Jr=r(Jt);fl=v(Jr,"\u5F20\u654F"),Jr.forEach(l),_l=c(ms),Nt=a(ms,"DIV",{class:!0});var Nr=r(Nt);ml=v(Nr,"\u8F6F\u4EF6\u6280\u672F\u7ECF\u7406"),Nr.forEach(l),gl=c(ms),Qt=a(ms,"DIV",{class:!0});var Qr=r(Qt);pl=v(Qr,"\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B"),Qr.forEach(l),ms.forEach(l),Cs.forEach(l),qs.forEach(l),zr.forEach(l),Rr.forEach(l),E.forEach(l),Fl.forEach(l),ps=c(u),Li(oe.$$.fragment,u),Es=c(u),Ee=a(u,"DIV",{class:!0});var Zr=r(Ee);m=a(Zr,"UL",{class:!0});var g=r(m);Zt=a(g,"LI",{class:!0});var Kr=r(Zt);Ie=a(Kr,"A",{href:!0,title:!0});var Or=r(Ie);Ae=a(Or,"IMG",{src:!0,class:!0,alt:!0}),Or.forEach(l),Kr.forEach(l),El=c(g),Kt=a(g,"LI",{class:!0});var Xr=r(Kt);De=a(Xr,"A",{href:!0,title:!0});var Yr=r(De);Ve=a(Yr,"IMG",{src:!0,class:!0,alt:!0}),Yr.forEach(l),Xr.forEach(l),Il=c(g),Ot=a(g,"LI",{class:!0});var ei=r(Ot);We=a(ei,"A",{href:!0,title:!0});var ti=r(We);be=a(ti,"IMG",{src:!0,class:!0,alt:!0}),ti.forEach(l),ei.forEach(l),Al=c(g),Xt=a(g,"LI",{class:!0});var si=r(Xt);we=a(si,"A",{href:!0,title:!0});var ai=r(we);Pe=a(ai,"IMG",{src:!0,class:!0,alt:!0}),ai.forEach(l),si.forEach(l),Dl=c(g),Yt=a(g,"LI",{class:!0});var li=r(Yt);ye=a(li,"A",{href:!0,title:!0});var ri=r(ye);Ge=a(ri,"IMG",{src:!0,class:!0,alt:!0}),ri.forEach(l),li.forEach(l),Vl=c(g),es=a(g,"LI",{class:!0});var ii=r(es);xe=a(ii,"A",{href:!0,title:!0});var ci=r(xe);Le=a(ci,"IMG",{src:!0,class:!0,alt:!0}),ci.forEach(l),ii.forEach(l),Wl=c(g),ts=a(g,"LI",{class:!0});var oi=r(ts);ke=a(oi,"A",{href:!0,title:!0});var di=r(ke);Me=a(di,"IMG",{src:!0,class:!0,alt:!0}),di.forEach(l),oi.forEach(l),bl=c(g),ss=a(g,"LI",{class:!0});var vi=r(ss);Te=a(vi,"A",{href:!0,title:!0});var ni=r(Te);He=a(ni,"IMG",{src:!0,class:!0,alt:!0}),ni.forEach(l),vi.forEach(l),wl=c(g),as=a(g,"LI",{class:!0});var hi=r(as);je=a(hi,"A",{href:!0,title:!0});var ui=r(je);$e=a(ui,"IMG",{src:!0,class:!0,alt:!0}),ui.forEach(l),hi.forEach(l),Pl=c(g),ls=a(g,"LI",{class:!0});var fi=r(ls);qe=a(fi,"A",{href:!0,title:!0});var _i=r(qe);Ce=a(_i,"IMG",{src:!0,class:!0,alt:!0}),_i.forEach(l),fi.forEach(l),yl=c(g),rs=a(g,"LI",{class:!0});var mi=r(rs);Se=a(mi,"A",{href:!0,title:!0});var gi=r(Se);Be=a(gi,"IMG",{src:!0,class:!0,alt:!0}),gi.forEach(l),mi.forEach(l),Gl=c(g),is=a(g,"LI",{class:!0});var pi=r(is);Fe=a(pi,"A",{href:!0,title:!0});var Ei=r(Fe);Re=a(Ei,"IMG",{src:!0,class:!0,alt:!0}),Ei.forEach(l),pi.forEach(l),g.forEach(l),Zr.forEach(l),this.h()},h(){t(o,"class","intro"),t(A,"class","title"),t(B,"class","avatar"),t(B,"id","icon_qi"),t(Je,"class","nametitle"),t(Ne,"class","team"),t(Qe,"class","team"),t(L,"class","description"),t(x,"class","details"),t(I,"class","topic"),t(G,"id","opening"),t(G,"class","touch"),t(y,"href","/blog/opening"),t(Ke,"class","title"),t(Oe,"class","avatar"),t(Oe,"id","icon_alex"),t(Xe,"class","nametitle"),t(Ye,"class","team"),t(et,"class","team"),t(k,"class","description"),t(U,"class","details"),t(z,"class","topic"),t(ve,"id","open-speech"),t(ve,"class","touch"),t(Ze,"href","/blog/open-speech"),t(st,"class","title"),t(at,"class","avatar"),t(at,"id","icon_cecilia"),t(lt,"class","nametitle"),t(rt,"class","team"),t(it,"class","team"),t(M,"class","description"),t(N,"class","details"),t(J,"class","topic"),t(ne,"id","take-full-advantage-of-a-pwa"),t(ne,"class","touch"),t(tt,"href","/blog/take-full-advantage-of-a-pwa"),t(ot,"class","title"),t(dt,"class","avatar"),t(dt,"id","icon_edwin"),t(vt,"class","nametitle"),t(nt,"class","team"),t(ht,"class","team"),t(T,"class","description"),t(Z,"class","details"),t(Q,"class","topic"),t(he,"id","revisiting-the-real-world-significance-of-pwa-technology"),t(he,"class","touch"),t(ct,"href","/blog/revisiting-the-real-world-significance-of-pwa-technology"),t(ft,"class","title"),t(_t,"class","avatar"),t(_t,"id","icon_pwabuilder"),t(mt,"class","nametitle"),t(gt,"class","team"),t(pt,"class","team"),t(H,"class","description"),t(O,"class","details"),t(K,"class","topic"),t(ue,"id","the-world-of-pwa-tools-from-starter-to-builder"),t(ue,"class","touch"),t(ut,"href","/blog/the-world-of-pwa-tools-from-starter-to-builder"),t(It,"class","title"),t(At,"class","avatar"),t(At,"id","icon_tianjian"),t(Dt,"class","nametitle"),t(Vt,"class","team"),t(Wt,"class","team"),t(j,"class","description"),t(Y,"class","details"),t(X,"class","topic"),t(fe,"id","running-mini-apps-in-pwa"),t(fe,"class","touch"),t(Et,"href","/blog/running-mini-apps-in-pwa"),t(wt,"class","title"),t(Pt,"class","avatar"),t(Pt,"id","icon_harry"),t(yt,"class","nametitle"),t(Gt,"class","team"),t(xt,"class","team"),t($,"class","description"),t(te,"class","details"),t(ee,"class","topic"),t(_e,"id","tencent-documentation-pwa-development-practice"),t(_e,"class","touch"),t(bt,"href","/blog/tencent-documentation-pwa-development-practice"),t(kt,"class","title"),t(Mt,"class","avatar"),t(Mt,"id","icon_yuanhong"),t(Tt,"class","nametitle"),t(Ht,"class","team"),t(jt,"class","team"),t(q,"class","description"),t(ae,"class","details"),t(se,"class","topic"),t(me,"id","the-exploration-and-practice-of-alibaba.com-pwa-to-reduce-costs-and-increase-efficiency"),t(me,"class","touch"),t(Lt,"href","/blog/the-exploration-and-practice-of-alibaba.com-pwa-to-reduce-costs-and-increase-efficiency"),t(qt,"class","title"),t(Ct,"class","avatar"),t(Ct,"id","icon_haoyu"),t(St,"class","nametitle"),t(Bt,"class","team"),t(Ft,"class","team"),t(C,"class","description"),t(re,"class","details"),t(le,"class","topic"),t(ge,"id","the-journey-of-web-nativeization"),t(ge,"class","touch"),t($t,"href","/blog/the-journey-of-web-nativeization"),t(zt,"class","title"),t(Ut,"class","avatar"),t(Ut,"id","icon_belem"),t(Jt,"class","nametitle"),t(Nt,"class","team"),t(Qt,"class","team"),t(S,"class","description"),t(ce,"class","details"),t(ie,"class","topic"),t(pe,"id","explore-new-web-capabilities-for-your-pwa"),t(pe,"class","touch"),t(Rt,"href","/blog/explore-new-web-capabilities-for-your-pwa"),t(f,"id","agenda"),t(W,"class","t2022"),w(Ae.src,xl="https://p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/pwa_v3/192_192.png")||t(Ae,"src",xl),t(Ae,"class","logogrid__img"),t(Ae,"alt","\u6296\u97F3 PWA"),t(Ie,"href","https://douyin.com"),t(Ie,"title","\u6296\u97F3 PWA"),t(Zt,"class","logogrid__item"),w(Ve.src,Ll="https://lf9-static.bytednsdoc.com/obj/eden-cn/pipieh7nupabozups/toutiao_web_pc/icon_tt_192.png")||t(Ve,"src",Ll),t(Ve,"class","logogrid__img"),t(Ve,"alt","\u4ECA\u65E5\u5934\u6761 PWA"),t(De,"href","https://www.toutiao.com/"),t(De,"title","\u4ECA\u65E5\u5934\u6761 PWA"),t(Kt,"class","logogrid__item"),w(be.src,kl="https://p3.dcarimg.com/img/tos-cn-i-dcdx/7da0e85f6f8c4081822b39e248626712~192x192.png")||t(be,"src",kl),t(be,"class","logogrid__img"),t(be,"alt","\u61C2\u8F66\u5E1D PWA"),t(We,"href","https://www.dongchedi.com/"),t(We,"title","\u61C2\u8F66\u5E1D PWA"),t(Ot,"class","logogrid__item"),w(Pe.src,Ml="https://lf3-static.bytednsdoc.com/obj/eden-cn/hbnpe_lm_wpn/ljhwZthlaukjlkulzlp/xigua_pc/logo/192.png")||t(Pe,"src",Ml),t(Pe,"class","logogrid__img"),t(Pe,"alt","\u897F\u74DC\u89C6\u9891 PWA"),t(we,"href","https://www.ixigua.com/"),t(we,"title","\u897F\u74DC\u89C6\u9891 PWA"),t(Xt,"class","logogrid__item"),w(Ge.src,Tl="https://h5.sinaimg.cn/m/weibo-lite/icon-default-192.png")||t(Ge,"src",Tl),t(Ge,"class","logogrid__img"),t(Ge,"alt","\u65B0\u6D6A\u5FAE\u535A PWA"),t(ye,"href","https://m.weibo.cn/beta"),t(ye,"title","\u65B0\u6D6A\u5FAE\u535A PWA"),t(Yt,"class","logogrid__item"),w(Le.src,Hl="https://dashi.163.com/logo.png")||t(Le,"src",Hl),t(Le,"class","logogrid__img"),t(Le,"alt","\u7F51\u6613\u90AE\u7BB1\u5927\u5E08 PWA"),t(xe,"href","https://dashi.163.com/login/?from=desktop"),t(xe,"title","\u7F51\u6613\u90AE\u7BB1\u5927\u5E08 PWA"),t(es,"class","logogrid__item"),w(Me.src,jl="https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-180.png")||t(Me,"src",jl),t(Me,"class","logogrid__img"),t(Me,"alt","\u91D1\u5C71\u6587\u6863 PWA"),t(ke,"href","https://www.kdocs.cn/latest?from=docs"),t(ke,"title","\u91D1\u5C71\u6587\u6863 PWA"),t(ts,"class","logogrid__item"),w(He.src,$l="https://res.cdn.office.net/officehub/versionless/webmanifestimages/desktop_192.png")||t(He,"src",$l),t(He,"class","logogrid__img"),t(He,"alt","Microsoft 365 PWA"),t(Te,"href","https://www.office.com/?ui=zh-CN&rs=CN&auth=1"),t(Te,"title","Microsoft 365 PWA"),t(ss,"class","logogrid__item"),w($e.src,ql="https://h5.m.taobao.com/trip/home-pwa/img/icon_192.png")||t($e,"src",ql),t($e,"class","logogrid__img"),t($e,"alt","\u98DE\u732A\u65C5\u884C PWA"),t(je,"href","https://h5.m.taobao.com/trip/home-pwa/index.html"),t(je,"title","\u98DE\u732A\u65C5\u884C PWA"),t(as,"class","logogrid__item"),w(Ce.src,Cl="https://pwa.sspai.com/icons/512.png")||t(Ce,"src",Cl),t(Ce,"class","logogrid__img"),t(Ce,"alt","\u5C11\u6570\u6D3E PWA"),t(qe,"href","https://pwa.sspai.com/"),t(qe,"title","\u5C11\u6570\u6D3E PWA"),t(ls,"class","logogrid__item"),w(Be.src,Sl="https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*sHlLTI41kIoAAAAAAAAAAAAADvuFAQ/original")||t(Be,"src",Sl),t(Be,"class","logogrid__img"),t(Be,"alt","\u96E8\u96C0 PWA"),t(Se,"href","https://www.yuque.com/login?goto=https%3A%2F%2Fwww.yuque.com%2Fdashboard"),t(Se,"title","\u96E8\u96C0 PWA"),t(rs,"class","logogrid__item"),w(Re.src,Bl="https://qhstaticssl.kujiale.com/newt/100312/image/png/1591705870021/192x192.png")||t(Re,"src",Bl),t(Re,"class","logogrid__img"),t(Re,"alt","\u9177\u5BB6\u4E50 PWA"),t(Fe,"href","https://www.kujiale.com/"),t(Fe,"title","\u9177\u5BB6\u4E50 PWA"),t(is,"class","logogrid__item"),t(m,"class","logogrid"),t(Ee,"class","pwalist")},m(u,b){F(u,p,b),F(u,o,b),e(o,n),e(o,D),e(o,_),e(o,P),F(u,R,b),F(u,W,b),e(W,f),e(f,y),e(y,G),e(G,I),e(I,A),e(A,ze),e(I,Ue),e(I,x),e(x,B),e(x,Ss),e(x,L),e(L,Je),e(Je,Bs),e(L,Fs),e(L,Ne),e(Ne,Rs),e(L,zs),e(L,Qe),e(Qe,Us),e(f,Js),e(f,Ze),e(Ze,ve),e(ve,z),e(z,Ke),e(Ke,Ns),e(z,Qs),e(z,U),e(U,Oe),e(U,Zs),e(U,k),e(k,Xe),e(Xe,Ks),e(k,Os),e(k,Ye),e(Ye,Xs),e(k,Ys),e(k,et),e(et,ea),e(f,ta),e(f,tt),e(tt,ne),e(ne,J),e(J,st),e(st,sa),e(J,aa),e(J,N),e(N,at),e(N,la),e(N,M),e(M,lt),e(lt,ra),e(M,ia),e(M,rt),e(rt,ca),e(M,oa),e(M,it),e(it,da),e(f,va),e(f,ct),e(ct,he),e(he,Q),e(Q,ot),e(ot,na),e(Q,ha),e(Q,Z),e(Z,dt),e(Z,ua),e(Z,T),e(T,vt),e(vt,fa),e(T,_a),e(T,nt),e(nt,ma),e(T,ga),e(T,ht),e(ht,pa),e(f,Ea),e(f,ut),e(ut,ue),e(ue,K),e(K,ft),e(ft,Ia),e(K,Aa),e(K,O),e(O,_t),e(O,Da),e(O,H),e(H,mt),e(mt,Va),e(H,Wa),e(H,gt),e(gt,ba),e(H,wa),e(H,pt),e(pt,Pa),e(f,ya),e(f,Et),e(Et,fe),e(fe,X),e(X,It),e(It,Ga),e(X,xa),e(X,Y),e(Y,At),e(Y,La),e(Y,j),e(j,Dt),e(Dt,ka),e(j,Ma),e(j,Vt),e(Vt,Ta),e(j,Ha),e(j,Wt),e(Wt,ja),e(f,$a),e(f,bt),e(bt,_e),e(_e,ee),e(ee,wt),e(wt,qa),e(ee,Ca),e(ee,te),e(te,Pt),e(te,Sa),e(te,$),e($,yt),e(yt,Ba),e($,Fa),e($,Gt),e(Gt,Ra),e($,za),e($,xt),e(xt,Ua),e(f,Ja),e(f,Lt),e(Lt,me),e(me,se),e(se,kt),e(kt,Na),e(se,Qa),e(se,ae),e(ae,Mt),e(ae,Za),e(ae,q),e(q,Tt),e(Tt,Ka),e(q,Oa),e(q,Ht),e(Ht,Xa),e(q,Ya),e(q,jt),e(jt,el),e(f,tl),e(f,$t),e($t,ge),e(ge,le),e(le,qt),e(qt,sl),e(le,al),e(le,re),e(re,Ct),e(re,ll),e(re,C),e(C,St),e(St,rl),e(C,il),e(C,Bt),e(Bt,cl),e(C,ol),e(C,Ft),e(Ft,dl),e(f,vl),e(f,Rt),e(Rt,pe),e(pe,ie),e(ie,zt),e(zt,nl),e(ie,hl),e(ie,ce),e(ce,Ut),e(ce,ul),e(ce,S),e(S,Jt),e(Jt,fl),e(S,_l),e(S,Nt),e(Nt,ml),e(S,gl),e(S,Qt),e(Qt,pl),F(u,ps,b),ki(oe,u,b),F(u,Es,b),F(u,Ee,b),e(Ee,m),e(m,Zt),e(Zt,Ie),e(Ie,Ae),e(m,El),e(m,Kt),e(Kt,De),e(De,Ve),e(m,Il),e(m,Ot),e(Ot,We),e(We,be),e(m,Al),e(m,Xt),e(Xt,we),e(we,Pe),e(m,Dl),e(m,Yt),e(Yt,ye),e(ye,Ge),e(m,Vl),e(m,es),e(es,xe),e(xe,Le),e(m,Wl),e(m,ts),e(ts,ke),e(ke,Me),e(m,bl),e(m,ss),e(ss,Te),e(Te,He),e(m,wl),e(m,as),e(as,je),e(je,$e),e(m,Pl),e(m,ls),e(ls,qe),e(qe,Ce),e(m,yl),e(m,rs),e(rs,Se),e(Se,Be),e(m,Gl),e(m,is),e(is,Fe),e(Fe,Re),gs=!0},p(u,[b]){(!gs||b&0)&&h!==(h=Di)&&(document.title=h);const de={};b&1&&(de.posts=u[0].posts),oe.$set(de)},i(u){gs||(Mi(oe.$$.fragment,u),gs=!0)},o(u){Ti(oe.$$.fragment,u),gs=!1},d(u){u&&l(p),u&&l(o),u&&l(R),u&&l(W),u&&l(ps),Hi(oe,u),u&&l(Es),u&&l(Ee)}}}function Si(V,h,p){let{data:o}=h;return V.$$set=n=>{"data"in n&&p(0,o=n.data)},[o]}class Ri extends bi{constructor(h){super(),wi(this,h,Si,Ci,Pi,{data:0})}}export{Ri as default};
