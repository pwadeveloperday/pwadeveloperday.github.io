var n=Object.defineProperty;var c=(o,t,r)=>t in o?n(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r;var s=(o,t,r)=>(c(o,typeof t!="symbol"?t+"":t,r),r);class i{constructor(t,r){s(this,"name","HttpError");s(this,"stack");this.status=t,this.message=r!=null?r:`Error: ${t}`}toString(){return this.message}}class e{constructor(t,r){this.status=t,this.location=r}}function u(o,t){return new i(o,t)}export{i as H,e as R,u as e};
