import{h as z,y as U}from"./proxy-compare-DDw08AJZ.js";import"./react-eX7k_oyb.js";var v={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const W=r=>typeof r=="object"&&r!==null,g=new WeakMap,L=new WeakSet,q=(r=Object.is,d=(t,y)=>new Proxy(t,y),l=t=>W(t)&&!L.has(t)&&(Array.isArray(t)||!(Symbol.iterator in t))&&!(t instanceof WeakMap)&&!(t instanceof WeakSet)&&!(t instanceof Error)&&!(t instanceof Number)&&!(t instanceof Date)&&!(t instanceof String)&&!(t instanceof RegExp)&&!(t instanceof ArrayBuffer),w=t=>{switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:throw t}},c=new WeakMap,i=(t,y,P=w)=>{const a=c.get(t);if((a==null?void 0:a[0])===y)return a[1];const u=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));return z(u,!0),c.set(t,[y,u]),Reflect.ownKeys(t).forEach(O=>{if(Object.getOwnPropertyDescriptor(u,O))return;const b=Reflect.get(t,O),p={value:b,enumerable:!0,configurable:!0};if(L.has(b))z(b,!1);else if(b instanceof Promise)delete p.value,p.get=()=>P(b);else if(g.has(b)){const[f,M]=g.get(b);p.value=i(f,M(),P)}Object.defineProperty(u,O,p)}),Object.preventExtensions(u)},m=new WeakMap,h=[1,1],V=t=>{if(!W(t))throw new Error("object required");const y=m.get(t);if(y)return y;let P=h[0];const a=new Set,u=(n,s=++h[0])=>{P!==s&&(P=s,a.forEach(e=>e(n,s)))};let O=h[1];const b=(n=++h[1])=>(O!==n&&!a.size&&(O=n,f.forEach(([s])=>{const e=s[1](n);e>P&&(P=e)})),P),p=n=>(s,e)=>{const o=[...s];o[1]=[n,...o[1]],u(o,e)},f=new Map,M=(n,s)=>{if((v?"production":void 0)!=="production"&&f.has(n))throw new Error("prop listener already exists");if(a.size){const e=s[3](p(n));f.set(n,[s,e])}else f.set(n,[s])},_=n=>{var s;const e=f.get(n);e&&(f.delete(n),(s=e[1])==null||s.call(e))},K=n=>(a.add(n),a.size===1&&f.forEach(([e,o],R)=>{if((v?"production":void 0)!=="production"&&o)throw new Error("remove already exists");const S=e[3](p(R));f.set(R,[e,S])}),()=>{a.delete(n),a.size===0&&f.forEach(([e,o],R)=>{o&&(o(),f.set(R,[e]))})}),D=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t)),j=d(D,{deleteProperty(n,s){const e=Reflect.get(n,s);_(s);const o=Reflect.deleteProperty(n,s);return o&&u(["delete",[s],e]),o},set(n,s,e,o){const R=Reflect.has(n,s),S=Reflect.get(n,s,o);if(R&&(r(S,e)||m.has(e)&&r(S,m.get(e))))return!0;_(s),W(e)&&(e=U(e)||e);let A=e;if(e instanceof Promise)e.then(E=>{e.status="fulfilled",e.value=E,u(["resolve",[s],E])}).catch(E=>{e.status="rejected",e.reason=E,u(["reject",[s],E])});else{!g.has(e)&&l(e)&&(A=V(e));const E=!L.has(A)&&g.get(A);E&&M(s,E)}return Reflect.set(n,s,A,o),u(["set",[s],e,S]),!0}});m.set(t,j);const B=[D,b,i,K];return g.set(j,B),Reflect.ownKeys(t).forEach(n=>{const s=Object.getOwnPropertyDescriptor(t,n);"value"in s&&(j[n]=t[n],delete s.value,delete s.writable),Object.defineProperty(D,n,s)}),j})=>[V,g,L,r,d,l,w,c,i,m,h],[F]=q();function T(r={}){return F(r)}function N(r,d,l){const w=g.get(r);(v?"production":void 0)!=="production"&&!w&&console.warn("Please use proxy object");let c;const i=[],m=w[3];let h=!1;const t=m(y=>{if(i.push(y),l){d(i.splice(0));return}c||(c=Promise.resolve().then(()=>{c=void 0,h&&d(i.splice(0))}))});return h=!0,()=>{h=!1,t()}}function X(r,d){const l=g.get(r);(v?"production":void 0)!=="production"&&!l&&console.warn("Please use proxy object");const[w,c,i]=l;return i(w,c(),d)}function Y(r){return L.add(r),r}function Z(r,d,l,w){let c=r[d];return N(r,()=>{const i=r[d];Object.is(c,i)||l(c=i)},w)}export{X as a,Z as b,T as p,Y as r,N as s};
