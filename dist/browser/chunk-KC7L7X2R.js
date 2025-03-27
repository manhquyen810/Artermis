import{a as O}from"./chunk-ZK23IHB5.js";import{u as M}from"./chunk-VZRSC3LP.js";import{a as y}from"./chunk-U54OSGNH.js";import{Db as m,Dc as E,Ea as d,Ma as x,Mc as c,Na as g,Oc as f,Rc as _,Tb as h,dd as e,ed as s,kc as v,uc as u,vc as z,wc as b,xb as S,xc as t,yc as n,zc as l}from"./chunk-5LC5EQRR.js";function C(a,T){if(a&1){let i=E();e(0,`
                            `),t(1,"tr"),e(2,`
                                `),t(3,"td"),e(4,`
                                    `),l(5,"img",10),e(6,`
                                `),n(),e(7,`
                                `),t(8,"td"),e(9,`
                                    `),t(10,"span"),e(11),n(),e(12,`
                                `),n(),e(13,`
                                `),t(14,"td"),e(15,`
                                    `),t(16,"span"),e(17),n(),e(18,`
                                `),n(),e(19,`
                                `),t(20,"td"),e(21),n(),e(22,`
                                `),t(23,"td"),e(24,`
                                    `),t(25,"button",11),c("click",function(){let o=x(i).$implicit,p=f();return g(p.closeModal(o))}),n(),e(26,`
                                `),n(),e(27,`
                            `),n(),e(28,`
                        `)}if(a&2){let i=T.$implicit;m(5),_("src",i.logoUrl?i.logoUrl:"/content/images/image-placeholder.png",S),v("height",48),m(6),s(i.name),m(6),s(i.shortName),m(4),s(i.emailPattern)}}var F=(()=>{class a{activeModal=d(M);organizationService=d(O);organizations;availableOrganizations;ngOnInit(){this.organizationService.getOrganizations().subscribe(i=>{this.availableOrganizations=i,this.organizations!==void 0&&(this.availableOrganizations=this.availableOrganizations.filter(r=>!this.organizations.some(o=>o.id===r.id)))})}closeModal(i){this.activeModal.close(i)}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=h({type:a,selectors:[["jhi-organization-selector"]],decls:44,vars:0,consts:[[1,"modal-header"],["jhiTranslate","artemisApp.organizationManagement.modalSelector.title",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],[1,"justify-content-center","p-1"],[1,"table-responsive","p-1"],[1,"table","table-striped"],["jhiTranslate","artemisApp.organizationManagement.name"],["jhiTranslate","artemisApp.organizationManagement.shortName"],["jhiTranslate","artemisApp.organizationManagement.emailPattern"],["onerror","this.src='/content/images/image-placeholder.png'",3,"height","src"],["type","button","jhiTranslate","artemisApp.organizationManagement.modalSelector.select",1,"btn","ms-2","btn-primary",3,"click"]],template:function(r,o){r&1&&(t(0,"div"),e(1,`
    `),t(2,"div",0),e(3,`
        `),l(4,"h4",1),e(5,`
        `),t(6,"button",2),c("click",function(){return o.closeModal(void 0)}),n(),e(7,`
    `),n(),e(8,`
    `),t(9,"div",3),e(10,`
        `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
                `),t(15,"table",6),e(16,`
                    `),t(17,"thead"),e(18,`
                        `),t(19,"tr"),e(20,`
                            `),l(21,"th"),e(22,`
                            `),t(23,"th"),l(24,"span",7),n(),e(25,`
                            `),t(26,"th"),l(27,"span",8),n(),e(28,`
                            `),t(29,"th"),l(30,"span",9),n(),e(31,`
                        `),n(),e(32,`
                    `),n(),e(33,`
                    `),t(34,"tbody"),e(35,`
                        `),z(36,C,29,5,null,null,u),n(),e(38,`
                `),n(),e(39,`
            `),n(),e(40,`
        `),n(),e(41,`
    `),n(),e(42,`
`),n(),e(43,`
`)),r&2&&(m(36),b(o.availableOrganizations))},dependencies:[y],encapsulation:2})}return a})();export{F as a};
//# sourceMappingURL=chunk-KC7L7X2R.js.map
