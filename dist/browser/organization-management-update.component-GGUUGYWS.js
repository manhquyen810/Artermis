import{a as K}from"./chunk-2HILLGW2.js";import{a as J}from"./chunk-ZK23IHB5.js";import"./chunk-XBLNBTXN.js";import{C as L,F as B,G as D,H as q,K as k,c as P,d as W,h as j,i as N,k as A,m as I,n as F}from"./chunk-WA5GEAJB.js";import{d as Z}from"./chunk-EDXSOKK5.js";import{fa as R,tb as G}from"./chunk-Z4VHWOB5.js";import"./chunk-NOBD5HSR.js";import{a as H}from"./chunk-U54OSGNH.js";import{f as O}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as l,Dc as U,Ea as y,Ma as c,Mc as w,Na as f,Oc as z,Tb as T,Vb as E,Zb as x,cd as _,dd as e,kc as C,ld as h,md as v,nd as M,pd as V,qd as b,sc as s,xc as a,yc as o,zc as m}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var Q=(()=>{class t{validate(r){if(r==null)return null;try{return new RegExp(r.value),null}catch{return{validPattern:!0}}}static \u0275fac=function(d){return new(d||t)};static \u0275dir=E({type:t,selectors:[["","validPattern","","ngModel",""],["","validPattern","","formControl",""]],features:[V([{provide:W,useExisting:t,multi:!0}])]})}return t})();var Y=()=>({max:100}),$=()=>({max:50});function ee(t,u){t&1&&(e(0,`
                                `),m(1,"small",31),e(2,`
                            `))}function te(t,u){t&1&&(e(0,`
                                `),m(1,"small",32),e(2,`
                            `)),t&2&&(l(),C("translateValues",b(1,Y)))}function ne(t,u){t&1&&(e(0,`
                                `),m(1,"small",33),e(2,`
                            `))}function ie(t,u){if(t&1&&(e(0,`
                        `),a(1,"div"),e(2,`
                            `),x(3,ee,3,0)(4,te,3,2)(5,ne,3,0),o(),e(6,`
                    `)),t&2){z();let r=_(16);l(3),s(r.errors!=null&&r.errors.required?3:-1),l(),s(r.errors!=null&&r.errors.maxlength?4:-1),l(),s(r.errors!=null&&r.errors.pattern?5:-1)}}function ae(t,u){t&1&&(e(0,`
                                `),m(1,"small",31),e(2,`
                            `))}function oe(t,u){t&1&&(e(0,`
                                `),m(1,"small",32),e(2,`
                            `)),t&2&&(l(),C("translateValues",b(1,$)))}function re(t,u){t&1&&(e(0,`
                                `),m(1,"small",33),e(2,`
                            `))}function le(t,u){if(t&1&&(e(0,`
                        `),a(1,"div"),e(2,`
                            `),x(3,ae,3,0)(4,oe,3,2)(5,re,3,0),o(),e(6,`
                    `)),t&2){z();let r=_(16),d=_(25);l(3),s(d.errors!=null&&d.errors.required?3:-1),l(),s(d.errors!=null&&d.errors.maxlength?4:-1),l(),s(r.errors!=null&&r.errors.pattern?5:-1)}}function me(t,u){t&1&&(e(0,`
                                `),m(1,"small",34),e(2,`
                            `))}function de(t,u){if(t&1&&(e(0,`
                        `),a(1,"div"),e(2,`
                            `),x(3,me,3,0),o(),e(4,`
                    `)),t&2){z();let r=_(64);l(3),s(r.errors!=null&&r.errors.validPattern?3:-1)}}var ze=(()=>{class t{route=y(O);organizationService=y(J);organization;isSaving;faSave=G;faBan=R;ngOnInit(){this.isSaving=!1,this.organization=new K,this.route.parent.data.subscribe(({organization:r})=>{if(r){let d=r.body?r.body.id:r.id;this.organizationService.getOrganizationById(d).subscribe(i=>{this.organization=i})}})}previousState(){window.history.back()}save(){this.isSaving=!0,this.organization.id?this.organizationService.update(this.organization).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()}):this.organizationService.add(this.organization).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.isSaving=!1,this.previousState()}onSaveError(){this.isSaving=!1}static \u0275fac=function(d){return new(d||t)};static \u0275cmp=T({type:t,selectors:[["jhi-organization-management-update"]],decls:87,vars:12,consts:[["editForm","ngForm"],["nameInput","ngModel"],["shortNameInput","ngModel"],["urlInput","ngModel"],["descriptionInput","ngModel"],["logoUrlInput","ngModel"],["emailPattern","ngModel"],[1,"row","justify-content-center"],[1,"col-md-8"],["name","editForm","role","form","novalidate","",3,"ngSubmit"],["jhiTranslate","artemisApp.organizationManagement.addOrEditLabel"],[1,"form-group"],["for","name","jhiTranslate","artemisApp.organizationManagement.name",1,"form-control-label"],["id","name","type","text","name","name","required","","minlength","1","maxlength","100",1,"form-control",3,"ngModelChange","ngModel"],["for","shortName","jhiTranslate","artemisApp.organizationManagement.shortName",1,"form-control-label"],["id","shortName","type","text","name","shortName","required","","minlength","1","maxlength","50","pattern","^[A-Za-z0-9]*$",1,"form-control",3,"ngModelChange","ngModel"],["for","url","jhiTranslate","artemisApp.organizationManagement.url",1,"form-control-label"],["id","url","type","text","name","url",1,"form-control",3,"ngModelChange","ngModel"],["for","description","jhiTranslate","artemisApp.organizationManagement.description"],["id","description","type","text","name","description",1,"form-control",3,"ngModelChange","ngModel"],["for","logoUrl","jhiTranslate","artemisApp.organizationManagement.logoUrl"],["id","logoUrl","type","text","name","logoUrl",1,"form-control",3,"ngModelChange","ngModel"],[1,"alert","alert-warning"],["jhiTranslate","artemisApp.organizationManagement.patternChangeWarning"],["for","emailPattern","jhiTranslate","artemisApp.organizationManagement.emailPattern"],["id","emailPattern","type","text","required","","name","emailPattern","validPattern","",1,"form-control",3,"ngModelChange","ngModel"],["type","button",1,"btn","btn-secondary",3,"click"],[3,"icon"],["jhiTranslate","entity.action.cancel"],["type","submit",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","entity.action.save"],["jhiTranslate","entity.validation.required",1,"form-text","text-danger"],["jhiTranslate","entity.validation.maxlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","entity.validation.patternLogin",1,"form-text","text-danger"],["jhiTranslate","entity.validation.invalidPattern",1,"form-text","text-danger"]],template:function(d,i){if(d&1){let g=U();a(0,"div",7),e(1,`
    `),a(2,"div",8),e(3,`
        `),a(4,"form",9,0),w("ngSubmit",function(){return c(g),f(i.save())}),e(6,`
            `),m(7,"h2",10),e(8,`
            `),a(9,"div"),e(10,`
                `),a(11,"div",11),e(12,`
                    `),m(13,"label",12),e(14,`
                    `),a(15,"input",13,1),M("ngModelChange",function(n){return c(g),v(i.organization.name,n)||(i.organization.name=n),f(n)}),o(),e(17,`
                    `),x(18,ie,7,3),o(),e(19,`
                `),a(20,"div",11),e(21,`
                    `),m(22,"label",14),e(23,`
                    `),a(24,"input",15,2),M("ngModelChange",function(n){return c(g),v(i.organization.shortName,n)||(i.organization.shortName=n),f(n)}),o(),e(26,`
                    `),x(27,le,7,3),o(),e(28,`
                `),a(29,"div",11),e(30,`
                    `),m(31,"label",16),e(32,`
                    `),a(33,"input",17,3),M("ngModelChange",function(n){return c(g),v(i.organization.url,n)||(i.organization.url=n),f(n)}),o(),e(35,`
                `),o(),e(36,`
                `),a(37,"div",11),e(38,`
                    `),m(39,"label",18),e(40,`
                    `),a(41,"input",19,4),M("ngModelChange",function(n){return c(g),v(i.organization.description,n)||(i.organization.description=n),f(n)}),o(),e(43,`
                `),o(),e(44,`
                `),a(45,"div",11),e(46,`
                    `),m(47,"label",20),e(48,`
                    `),a(49,"input",21,5),M("ngModelChange",function(n){return c(g),v(i.organization.logoUrl,n)||(i.organization.logoUrl=n),f(n)}),o(),e(51,`
                `),o(),e(52,`
                `),a(53,"div",11),e(54,`
                    `),a(55,"div",22),e(56,`
                        `),a(57,"span",23),e(58,"Changing the email pattern will trigger a re-assignment of all users to this organization"),o(),e(59,`
                    `),o(),e(60,`
                    `),m(61,"label",24),e(62,`
                    `),a(63,"input",25,6),M("ngModelChange",function(n){return c(g),v(i.organization.emailPattern,n)||(i.organization.emailPattern=n),f(n)}),o(),e(65,`
                    `),x(66,de,5,1),o(),e(67,`
            `),o(),e(68,`
            `),a(69,"div"),e(70,`
                `),a(71,"button",26),w("click",function(){return c(g),f(i.previousState())}),m(72,"fa-icon",27),e(73,"\xA0"),m(74,"span",28),o(),e(75,`
                `),a(76,"button",29),e(77,`
                    `),m(78,"fa-icon",27),e(79,"\xA0"),m(80,"span",30),e(81,`
                `),o(),e(82,`
            `),o(),e(83,`
        `),o(),e(84,`
    `),o(),e(85,`
`),o(),e(86,`
`)}if(d&2){let g=_(5),p=_(16),n=_(25),S=_(64);l(15),h("ngModel",i.organization.name),l(3),s(p.dirty&&p.invalid?18:-1),l(6),h("ngModel",i.organization.shortName),l(3),s(n.dirty&&n.invalid?27:-1),l(6),h("ngModel",i.organization.url),l(8),h("ngModel",i.organization.description),l(8),h("ngModel",i.organization.logoUrl),l(14),h("ngModel",i.organization.emailPattern),l(3),s(S!=null&&S.dirty&&(S!=null&&S.invalid)?66:-1),l(6),C("icon",i.faBan),l(4),C("disabled",g.form.invalid||i.isSaving),l(2),C("icon",i.faSave)}},dependencies:[k,F,P,j,N,L,B,D,q,I,A,H,Q,Z],encapsulation:2})}return t})();export{ze as OrganizationManagementUpdateComponent};
//# sourceMappingURL=organization-management-update.component-GGUUGYWS.js.map
