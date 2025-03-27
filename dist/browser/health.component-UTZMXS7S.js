import{a as K}from"./chunk-T77OIOZ4.js";import{u as $,v as P}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import"./chunk-WA5GEAJB.js";import{a as k}from"./chunk-K3W6YFKH.js";import{d as J}from"./chunk-EDXSOKK5.js";import{Ka as N,nb as A}from"./chunk-Z4VHWOB5.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as g}from"./chunk-U54OSGNH.js";import"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{A as T,O as V,n as D}from"./chunk-IOA4DPXY.js";import{Db as o,Dc as F,Ea as s,Ma as M,Mc as f,Na as I,Oc as c,Rc as B,Tb as b,Zb as p,dd as e,ed as H,fd as u,kc as x,sc as h,uc as S,vc as y,wc as E,xb as w,xc as i,ya as j,yc as a,yd as _,zc as r,zd as v}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var O=(()=>{class n{http=s(V);checkHealth(){return this.http.get("management/health")}static \u0275fac=function(l){return new(l||n)};static \u0275prov=j({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function z(n,d){if(n&1&&(e(0,`
        `),i(1,"h4",5),e(2),_(3,"artemisTranslate"),a(),e(4,`
    `)),n&2){let t=c();o(2),u(`
            `,v(3,1,"health.indicator."+t.health.key),`
        `)}}function G(n,d){if(n&1&&(e(0,`
                            `),i(1,"tr"),e(2,`
                                `),i(3,"td",11),e(4),a(),e(5,`
                                `),i(6,"td",11),e(7),a(),e(8,`
                            `),a(),e(9,`
                        `)),n&2){let t=d.$implicit,l=c(2);o(4),H(t.key),o(3),H(l.readableValue(t.value))}}function R(n,d){if(n&1&&(e(0,`
        `),i(1,"div"),e(2,`
            `),r(3,"h5",6),e(4,`
            `),i(5,"div",7),e(6,`
                `),i(7,"table",8),e(8,`
                    `),i(9,"thead"),e(10,`
                        `),i(11,"tr"),e(12,`
                            `),r(13,"th",9),e(14,`
                            `),r(15,"th",10),e(16,`
                        `),a(),e(17,`
                    `),a(),e(18,`
                    `),i(19,"tbody"),e(20,`
                        `),y(21,G,10,2,null,null,S),_(23,"keyvalue"),a(),e(24,`
                `),a(),e(25,`
            `),a(),e(26,`
        `),a(),e(27,`
    `)),n&2){let t=c();o(21),E(v(23,0,t.health.value.details))}}var U=(()=>{class n{activeModal=s($);health;readableValue(t){if(this.health?.key==="diskSpace"){let l=t/1073741824;return l>1?`${l.toFixed(2)} GB`:`${(t/1048576).toFixed(2)} MB`}return typeof t=="object"?JSON.stringify(t):String(t)}dismiss(){this.activeModal.dismiss()}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=b({type:n,selectors:[["jhi-health-modal"]],decls:16,vars:2,consts:[[1,"modal-header"],["aria-label","Close","data-dismiss","modal","type","button",1,"btn-close",3,"click"],[1,"modal-body","pad"],[1,"modal-footer"],["data-dismiss","modal","type","button",1,"btn","btn-secondary","float-left",3,"click"],["id","showHealthLabel",1,"modal-title"],["jhiTranslate","health.details.properties"],[1,"table-responsive"],["aria-describedby","showHealthLabel",1,"table","table-striped"],["scope","col","jhiTranslate","health.details.name",1,"text-left"],["scope","col","jhiTranslate","health.details.value",1,"text-left"],[1,"text-left"]],template:function(l,m){l&1&&(i(0,"div",0),e(1,`
    `),p(2,z,5,3),i(3,"button",1),f("click",function(){return m.dismiss()}),a(),e(4,`
`),a(),e(5,`
`),i(6,"div",2),e(7,`
    `),p(8,R,28,2),a(),e(9,`
`),i(10,"div",3),e(11,`
    `),i(12,"button",4),f("click",function(){return m.dismiss()}),e(13,"Done"),a(),e(14,`
`),a(),e(15,`
`)),l&2&&(o(2),h(m.health?2:-1),o(6),h(m.health?8:-1))},dependencies:[g,T,k],encapsulation:2})}return n})();function W(n,d){if(n&1&&(e(0,`
                                    `),i(1,"a",14),e(2),a(),e(3,`
                                `)),n&2){let t=c().$implicit;o(),x("href",t.value.details.url,w),o(),u(`
                                        `,t.value.details.url,`
                                    `)}}function q(n,d){if(n&1){let t=F();e(0,`
                                    `),i(1,"a",15),f("click",function(){M(t);let m=c().$implicit,C=c(2);return I(C.showHealth({key:m.key,value:m.value}))}),e(2,`
                                        `),r(3,"fa-icon",2),e(4,`
                                    `),a(),e(5,`
                                `)}if(n&2){let t=c(3);o(3),x("icon",t.faEye)}}function Q(n,d){if(n&1&&(e(0,`
                        `),i(1,"tr",12),e(2,`
                            `),i(3,"td"),e(4),_(5,"artemisTranslate"),p(6,W,4,2),a(),e(7,`
                            `),i(8,"td",10),e(9,`
                                `),i(10,"span",13),e(11),a(),e(12,`
                            `),a(),e(13,`
                            `),i(14,"td",11),e(15,`
                                `),p(16,q,6,1),a(),e(17,`
                        `),a(),e(18,`
                    `)),n&2){let t=d.$implicit,l=c(2);o(),x("id",t.key),o(3),u(`
                                `,v(5,7,"health.indicator."+t.key),`
                                `),o(2),h(!(t.value==null||t.value.details==null)&&t.value.details.url?6:-1),o(4),B("jhiTranslate","health.status."+t.value.status),x("ngClass",l.getBadgeClass(t.value.status)),o(),u(`
                                    `,t.value.status,`
                                `),o(5),h(t.value.details?16:-1)}}function X(n,d){if(n&1&&(e(0,`
                `),i(1,"tbody"),e(2,`
                    `),y(3,Q,19,9,null,null,S),_(5,"keyvalue"),i(6,"tr",9),e(7,`
                        `),i(8,"td"),e(9,"Websocket Connection (Client -> Server)"),a(),e(10,`
                        `),i(11,"td",10),e(12,`
                            `),r(13,"jhi-connection-status"),e(14,`
                        `),a(),e(15,`
                        `),i(16,"td",11),e(17,"-"),a(),e(18,`
                    `),a(),e(19,`
                `),a(),e(20,`
            `)),n&2){let t=c();o(3),E(v(5,0,t.health.components))}}var be=(()=>{class n{modalService=s(P);healthService=s(O);health;faSync=N;faEye=A;ngOnInit(){this.refresh()}getBadgeClass(t){return t==="UP"?"bg-success":"bg-danger"}refresh(){this.healthService.checkHealth().subscribe({next:t=>this.health=t,error:t=>{t.status===503&&(this.health=t.error)}})}showHealth(t){let l=this.modalService.open(U);l.componentInstance.health=t}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=b({type:n,selectors:[["jhi-health"]],decls:32,vars:2,consts:[["id","health-page-heading","jhiTranslate","health.title"],[1,"btn","btn-primary","float-end",3,"click"],[3,"icon"],["jhiTranslate","health.refresh.button"],[1,"table-responsive"],["id","healthCheck","aria-describedby","health-page-heading",1,"table","table-striped"],["scope","col","jhiTranslate","health.table.service"],["scope","col","jhiTranslate","health.table.status",1,"text-center"],["scope","col","jhiTranslate","health.details.details",1,"text-center"],["id","websocketConnection"],[1,"status","text-center"],[1,"text-center"],[3,"id"],[1,"badge",3,"ngClass","jhiTranslate"],[1,"badge","bg-info",3,"href"],[1,"hand",3,"click"]],template:function(l,m){l&1&&(i(0,"div"),e(1,`
    `),i(2,"h2"),e(3,`
        `),r(4,"span",0),e(5,`
        `),i(6,"button",1),f("click",function(){return m.refresh()}),r(7,"fa-icon",2),e(8," "),r(9,"span",3),a(),e(10,`
    `),a(),e(11,`
    `),i(12,"div",4),e(13,`
        `),i(14,"table",5),e(15,`
            `),i(16,"thead"),e(17,`
                `),i(18,"tr"),e(19,`
                    `),r(20,"th",6),e(21,`
                    `),r(22,"th",7),e(23,`
                    `),r(24,"th",8),e(25,`
                `),a(),e(26,`
            `),a(),e(27,`
            `),p(28,X,21,2),a(),e(29,`
    `),a(),e(30,`
`),a(),e(31,`
`)),l&2&&(o(7),x("icon",m.faSync),o(21),h(m.health?28:-1))},dependencies:[g,J,D,K,T,k],encapsulation:2})}return n})();export{be as HealthComponent};
//# sourceMappingURL=health.component-UTZMXS7S.js.map
