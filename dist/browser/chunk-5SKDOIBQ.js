import{Ea as a,Ka as d,Pd as f,Qd as p,Rd as h,Sa as g,Ta as u,ab as b,c as v,h as y,pa as m,ua as l}from"./chunk-5LC5EQRR.js";function w(n){n||(d(w),n=a(u));let e=new v(t=>n.onDestroy(t.next.bind(t)));return t=>t.pipe(m(e))}function k(n,e){!e?.injector&&d(k);let t=e?.injector??a(g),s=new y(1),c=h(()=>{let r;try{r=n()}catch(i){f(()=>s.error(i));return}f(()=>s.next(r))},{injector:t,manualCleanup:!0});return t.get(u).onDestroy(()=>{c.destroy(),s.complete()}),s.asObservable()}function x(n,e){let t=!e?.manualCleanup;t&&!e?.injector&&d(x);let s=t?e?.injector?.get(u)??a(u):null,c=j(e?.equal),r;e?.requireSync?r=b({kind:0},{equal:c}):r=b({kind:1,value:e?.initialValue},{equal:c});let i=n.subscribe({next:o=>r.set({kind:1,value:o}),error:o=>{if(e?.rejectErrors)throw o;r.set({kind:2,error:o})}});if(e?.requireSync&&r().kind===0)throw new l(601,!1);return s?.onDestroy(i.unsubscribe.bind(i)),p(()=>{let o=r();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new l(601,!1)}},{equal:e?.equal})}function j(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}export{w as a,k as b,x as c};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v19.2.1
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-5SKDOIBQ.js.map
