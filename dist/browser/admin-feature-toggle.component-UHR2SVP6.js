import{d as C,e as F,f as w,g as A}from"./chunk-F3NFBBHK.js";import{a as h,b}from"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import"./chunk-M6Z6DKZQ.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as m,Dc as v,Ea as u,Ma as s,Mc as x,Na as d,Oc as T,Tb as f,Zb as g,dd as e,fd as _,kc as c,ra as p,xc as o,yc as l}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";function y(n,r){if(n&1&&e(0),n&2){let i=r.value;_(`
                    `,i,`
                `)}}function H(n,r){if(n&1){let i=v();e(0,`
                    `),o(1,"input",4),x("change",function(a){let S=s(i).row,D=T();return d(D.onFeatureToggle(a,S))}),l(),e(2,`
                `)}if(n&2){let i=r.value;m(),c("checked",i)}}var O=(()=>{class n{featureToggleService=u(b);availableToggles=[];ngOnInit(){this.featureToggleService.getFeatureToggles().pipe(p(i=>{this.availableToggles=Object.values(h).map((t,a)=>({name:t,index:a,isActive:i.includes(t)}))})).subscribe()}onFeatureToggle(i,t){this.featureToggleService.setFeatureToggleState(t.name,!t.isActive).subscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["jhi-feature-toggles"]],decls:14,vars:6,consts:[[1,"bootstrap",3,"headerHeight","limit","columnMode","footerHeight","rowHeight","rows"],["name","Name","prop","name"],["ngx-datatable-cell-template",""],["name","Active","prop","isActive"],["type","checkbox",1,"form-check-input",3,"change","checked"]],template:function(t,a){t&1&&(e(0,`
        `),o(1,"ngx-datatable",0),e(2,`
            `),o(3,"ngx-datatable-column",1),e(4,`
                `),g(5,y,1,1,"ng-template",2),e(6,`
            `),l(),e(7,`
            `),o(8,"ngx-datatable-column",3),e(9,`
                `),g(10,H,3,1,"ng-template",2),e(11,`
            `),l(),e(12,`
        `),l(),e(13,`
    `)),t&2&&(m(),c("headerHeight",50)("limit",20)("columnMode","force")("footerHeight",50)("rowHeight","auto")("rows",a.availableToggles))},dependencies:[A,w,F,C],encapsulation:2})}return n})();export{O as AdminFeatureToggleComponent};
//# sourceMappingURL=admin-feature-toggle.component-UHR2SVP6.js.map
