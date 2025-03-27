import{a as he}from"./chunk-5AFTRQOT.js";import{a as ve}from"./chunk-LTHMYHP7.js";import{d as _e}from"./chunk-U4DJRHYQ.js";import{a as xe}from"./chunk-3I2WQJ2Z.js";import"./chunk-DLAFGQEJ.js";import{a as Ce}from"./chunk-ZMTDPOTL.js";import{a as fe}from"./chunk-2QXIMOEO.js";import{d as pe}from"./chunk-AR57MWOI.js";import"./chunk-A5PTZAPN.js";import"./chunk-AU6UEH3U.js";import"./chunk-FGAONQTL.js";import"./chunk-HQ6UGNQX.js";import"./chunk-ZLJ76G5I.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import{D as ae,K as le,o as te,p as ie,q as ne,r as oe,s as re}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{C as Y,K as Z,L as ee,b as H,c as O,h as Q,i as W,j as K,l as _,n as X,s as $,v as J}from"./chunk-WA5GEAJB.js";import"./chunk-5GXY5RYT.js";import{a as me}from"./chunk-BQRUD4AM.js";import{a as de}from"./chunk-K3W6YFKH.js";import"./chunk-JXJXC4DZ.js";import{d as ce}from"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{fa as se,tb as ue}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as ge}from"./chunk-U54OSGNH.js";import{f as z,h as G}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{A as M}from"./chunk-IOA4DPXY.js";import{A,Ad as L,Db as l,Dc as h,Ea as C,Ma as c,Mc as x,Na as g,Oc as d,Tb as V,Yc as N,Zb as v,Zc as k,_c as j,aa as F,dd as e,fd as b,kc as u,ld as D,mc as I,md as q,nd as B,qd as w,rd as U,sc as P,td as R,uc as S,vc as E,wc as T,xc as o,yc as r,yd as f,zc as s,zd as y}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var Se=["scrollableContent"],Ee=n=>({title:n}),be=()=>["required"],Te=(n,p,t)=>({page:n,totalItems:p,itemsPerPage:t});function we(n,p){if(n&1&&(e(0,`
                        `),o(1,"div"),e(2,`
                            `),s(3,"div",21),e(4,`
                        `),r(),e(5,`
                    `)),n&2){let t=p.$implicit;l(3),u("jhiTranslate","artemisApp.lti.edit.form.userPrefix."+t.key)}}function Le(n,p){if(n&1&&(e(0,`
                `),o(1,"div",20),e(2,`
                    `),E(3,we,6,1,null,null,S),f(5,"keyvalue"),f(6,"removekeys"),r(),e(7,`
            `)),n&2){let t=d(2);l(3),T(L(6,2,y(5,0,t.userPrefix.errors),w(5,be)))}}function Ae(n,p){if(n&1&&(e(0,`
            `),v(1,Le,8,6),f(2,"keyvalue"),f(3,"removekeys")),n&2){let t=d();l(),P(L(3,3,y(2,1,t.userPrefix.errors),w(6,be)).length>0?1:-1)}}function Fe(n,p){if(n&1){let t=h();e(0,`
                            `),o(1,"button",31),x("click",function(){let i=c(t).$implicit,m=d(2);return g(m.setPlatform(i))}),e(2),r(),e(3,`
                        `)}if(n&2){let t=p.$implicit,a=d(2);l(),I("selected",t.id===(a.onlineCourseConfiguration.ltiPlatformConfiguration==null?null:a.onlineCourseConfiguration.ltiPlatformConfiguration.id)),u("ngbTooltip",t.customName),l(),b(`
                                `,a.getLtiPlatform(t),`
                            `)}}function Ve(n,p){if(n&1){let t=h();o(0,"div"),e(1,`
        `),s(2,"h4",22),e(3,`
        `),o(4,"div",5),e(5,`
            `),s(6,"span",23),e(7,`
            `),s(8,"jhi-help-icon",24),e(9,`
            `),o(10,"div",9),e(11,`
                `),o(12,"div",25),e(13,`
                    `),o(14,"button",26),e(15),f(16,"artemisTranslate"),r(),e(17,`
                    `),o(18,"div",27),e(19,`
                        `),E(20,Fe,4,4,null,null,S),o(22,"div"),e(23,`
                            `),o(24,"div",28),e(25,`
                                `),s(26,"jhi-item-count",29),e(27,`
                            `),r(),e(28,`
                            `),o(29,"div",28),e(30,`
                                `),o(31,"ngb-pagination",30),B("pageChange",function(i){c(t);let m=d();return q(m.page,i)||(m.page=i),g(i)}),x("pageChange",function(){c(t);let i=d();return g(i.transition())}),r(),e(32,`
                            `),r(),e(33,`
                        `),r(),e(34,`
                    `),r(),e(35,`
                `),r(),e(36,`
            `),r(),e(37,`
        `),r(),e(38,`
    `),r()}if(n&2){let t=d();l(15),b(`
                        `,t.onlineCourseConfiguration.ltiPlatformConfiguration?t.getLtiPlatform(t.onlineCourseConfiguration.ltiPlatformConfiguration):y(16,9,"artemisApp.lti13.selectExternalTool"),`
                    `),l(5),T(t.ltiConfiguredPlatforms),l(6),u("params",R(11,Te,t.page,t.totalItems,t.itemsPerPage)),l(5),u("collectionSize",t.totalItems),D("page",t.page),u("pageSize",t.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)("disabled",!1)}}var it=(()=>{class n{route=C(z);courseService=C(pe);router=C(G);ltiConfigurationService=C(xe);scrollableContent;course;onlineCourseConfiguration;onlineCourseConfigurationForm;ltiConfiguredPlatforms=[];page=1;itemsPerPage=50;totalItems=0;isSaving=!1;loading=!1;faBan=se;faSave=ue;ngOnInit(){this.route.data.subscribe(({course:t})=>{t&&(this.course=t,this.onlineCourseConfiguration=t.onlineCourseConfiguration)}),this.onlineCourseConfigurationForm=new K({id:new _(this.onlineCourseConfiguration.id),userPrefix:new _(this.onlineCourseConfiguration?.userPrefix,{validators:[he(_e)]}),requireExistingUser:new _(this.onlineCourseConfiguration.requireExistingUser),ltiPlatformConfiguration:new _("")}),this.loadInitialPlatforms()}loadInitialPlatforms(){A({data:this.route.data,params:this.route.queryParamMap}).subscribe(({params:t})=>{let a=t.get("page");this.page=a!==null?+a:1,this.loadData()})}loadData(){this.ltiConfigurationService.query({page:this.page-1,size:this.itemsPerPage,sort:["id","asc"]}).subscribe(t=>this.onSuccess(t.body,t.headers))}transition(){this.router.navigate(["/admin/lti-configuration"],{queryParams:{page:this.page,sort:["id","asc"]}})}save(){this.isSaving=!0;let t=this.onlineCourseConfigurationForm.getRawValue();this.courseService.updateOnlineCourseConfiguration(this.course.id,t).pipe(F(()=>{this.isSaving=!1})).subscribe({next:()=>this.onSaveSuccess()})}onSaveSuccess(){this.isSaving=!1,this.navigateToLtiConfigurationPage()}onSuccess(t,a){this.totalItems=Number(a.get("X-Total-Count")),this.ltiConfiguredPlatforms=t||[]}get userPrefix(){return this.onlineCourseConfigurationForm.get("userPrefix")}navigateToLtiConfigurationPage(){this.router.navigate(["course-management",this.course.id.toString(),"lti-configuration"])}setPlatform(t){this.onlineCourseConfiguration.ltiPlatformConfiguration=t,this.onlineCourseConfigurationForm.get("ltiPlatformConfiguration")?.setValue(t)}getLtiPlatform(t){let a=t.customName?t.customName:"",i=t.originalUrl?t.originalUrl:"";return a+" "+i}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=V({type:n,selectors:[["jhi-edit-course-lti-configuration"]],viewQuery:function(a,i){if(a&1&&N(Se,5),a&2){let m;k(m=j())&&(i.scrollableContent=m.first)}},decls:50,vars:11,consts:[["formDir","ngForm"],[3,"ngSubmit","formGroup"],[1,"modal-header"],["id","myProgrammingExerciseLabel","jhiTranslate","artemisApp.lti.edit.configurationForCourse",1,"modal-title",3,"translateValues"],["id","generalConfiguration","jhiTranslate","artemisApp.lti.generalConfiguration",1,"modal-title","mt-4"],[1,"form-group","mt-2"],["jhiTranslate","artemisApp.lti.userPrefix","for","field_userPrefix",1,"form-control-label"],["text","artemisApp.lti.edit.userPrefixTooltip"],["required","","type","text","name","userPrefix","id","field_userPrefix","formControlName","userPrefix",1,"form-control"],[1,"form-group"],["type","checkbox","name","requireExistingUser","id","field_requireExistingUser","formControlName","requireExistingUser",1,"form-check-input",3,"checked"],["jhiTranslate","artemisApp.lti.requireExistingUser","for","field_requireExistingUser",1,"form-control-label"],["text","artemisApp.lti.edit.requireExistingUserTooltip"],[4,"jhiHasAnyAuthority"],[1,"mt-3","d-flex"],["type","button","id","cancel-save",1,"btn","btn-secondary",3,"click"],[3,"icon"],["jhiTranslate","entity.action.cancel"],["type","submit","id","save-entity",1,"btn","btn-primary","ms-2",3,"disabled"],["jhiTranslate","entity.action.save"],[1,"alert","alert-danger"],[3,"jhiTranslate"],["id","lti13","jhiTranslate","artemisApp.lti.version13",1,"modal-title","mt-4"],["jhiTranslate","artemisApp.lti13.externalToolSettings"],["text","artemisApp.lti13.editExternalToolSettingsTooltip"],["ngbDropdown","",1,"d-inline-block","me-2"],["ngbDropdownToggle","","type","button",1,"btn","btn-outline-primary"],["ngbDropdownMenu",""],[1,"row","justify-content-center"],[3,"params"],[3,"pageChange","collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","disabled"],["type","button","ngbDropdownItem","",3,"click","ngbTooltip"]],template:function(a,i){if(a&1){let m=h();o(0,"form",1,0),x("ngSubmit",function(){return c(m),g(i.save())}),e(2,`
    `),o(3,"div",2),e(4,`
        `),o(5,"h4",3),e(6),r(),e(7,`
    `),r(),e(8,`
    `),s(9,"h4",4),e(10,`
    `),o(11,"div",5),e(12,`
        `),s(13,"label",6),e(14,`
        `),s(15,"jhi-help-icon",7),e(16,`
        `),s(17,"input",8),e(18,`
        `),v(19,Ae,4,7),r(),e(20,`
    `),o(21,"div",9),e(22,`
        `),s(23,"input",10),e(24,`
        `),s(25,"label",11),e(26,`
        `),s(27,"jhi-help-icon",12),e(28,`
    `),r(),e(29,`
    `),v(30,Ve,39,15,"div",13),e(31,`
    `),o(32,"div",14),e(33,`
        `),o(34,"button",15),x("click",function(){return c(m),g(i.navigateToLtiConfigurationPage())}),e(35,`
            `),s(36,"fa-icon",16),e(37,"\xA0"),s(38,"span",17),e(39,`
        `),r(),e(40,`
        `),o(41,"button",18),e(42,`
            `),s(43,"fa-icon",16),e(44,"\xA0"),s(45,"span",19),e(46,`
        `),r(),e(47,`
    `),r(),e(48,`
`),r(),e(49,`
`)}a&2&&(u("formGroup",i.onlineCourseConfigurationForm),l(5),u("translateValues",U(9,Ee,i.course==null?null:i.course.title)),l(),b(`
            LTI Configuration for course `,i.course==null?null:i.course.title,`
        `),l(13),P(i.userPrefix.invalid&&(i.userPrefix.dirty||i.userPrefix.touched)?19:-1),l(4),u("checked",i.course.onlineCourseConfiguration==null?null:i.course.onlineCourseConfiguration.requireExistingUser),l(7),u("jhiHasAnyAuthority","ROLE_ADMIN"),l(6),u("icon",i.faBan),l(5),u("disabled",i.onlineCourseConfigurationForm.invalid||i.isSaving),l(2),u("icon",i.faSave))},dependencies:[Z,X,O,H,Q,W,Y,ee,$,J,ge,re,oe,ne,ie,te,le,ae,ce,M,de,ve,Ce,fe,me],encapsulation:2})}return n})();export{it as EditCourseLtiConfigurationComponent};
//# sourceMappingURL=edit-course-lti-configuration.component-2ZU57UBT.js.map
