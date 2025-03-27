import{a as V}from"./chunk-3I2WQJ2Z.js";import{a as P}from"./chunk-2QXIMOEO.js";import"./chunk-G3JOQOSD.js";import"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as E,L as N,c as b,h as U,i as w,j as I,l as a,n as _,s as j,v as y}from"./chunk-WA5GEAJB.js";import"./chunk-K3W6YFKH.js";import{c as A}from"./chunk-JXJXC4DZ.js";import{d as L}from"./chunk-EDXSOKK5.js";import"./chunk-DID2YGL7.js";import{Lc as F,fa as T,tb as k}from"./chunk-Z4VHWOB5.js";import"./chunk-NOBD5HSR.js";import{a as z}from"./chunk-U54OSGNH.js";import{f as S,h as C}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as m,Dc as v,Ea as f,Ma as u,Mc as g,Na as c,Tb as h,aa as p,dd as t,kc as s,xc as i,yc as n,zc as e}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var Z=(()=>{class d{route=f(S);ltiConfigurationService=f(V);router=f(C);alertService=f(A);platform;platformConfigurationForm;isSaving=!1;faBan=T;faSave=k;faPlus=F;ngOnInit(){let r=this.route.snapshot.paramMap.get("platformId");r&&this.ltiConfigurationService.getLtiPlatformById(Number(r)).subscribe({next:o=>{this.platform=o,this.initializeForm()},error:o=>{this.alertService.error(o)}}),this.initializeForm()}save(){this.isSaving=!0;let r=this.platformConfigurationForm.getRawValue();this.platform?.id?this.updateLtiConfiguration(r):this.addLtiConfiguration(r)}updateLtiConfiguration(r){this.ltiConfigurationService.updateLtiPlatformConfiguration(r).pipe(p(()=>{this.isSaving=!1})).subscribe({next:()=>this.onSaveSuccess(),error:o=>{this.alertService.error(o)}})}addLtiConfiguration(r){this.ltiConfigurationService.addLtiPlatformConfiguration(r).pipe(p(()=>{this.isSaving=!1})).subscribe({next:()=>this.onSaveSuccess(),error:o=>{this.alertService.error(o)}})}onSaveSuccess(){this.isSaving=!1,this.navigateToLtiConfigurationPage()}initializeForm(){this.platformConfigurationForm=new I({id:new a(this.platform?.id),registrationId:new a(this.platform?.registrationId),originalUrl:new a(this.platform?.originalUrl),customName:new a(this.platform?.customName),clientId:new a(this.platform?.clientId),authorizationUri:new a(this.platform?.authorizationUri),tokenUri:new a(this.platform?.tokenUri),jwkSetUri:new a(this.platform?.jwkSetUri)})}navigateToLtiConfigurationPage(){this.router.navigate(["admin","lti-configuration"])}static \u0275fac=function(o){return new(o||d)};static \u0275cmp=h({type:d,selectors:[["jhi-edit-lti-configuration"]],decls:96,vars:5,consts:[["editForm","ngForm"],[1,"row","justify-content-center"],[1,"col-md-8"],[1,"ms-4",3,"ngSubmit","formGroup"],[1,"d-flex"],[1,"flex-grow-1"],[1,"d-flex","align-items-center"],["id","jhi-lecture-heading","jhiTranslate","artemisApp.lti.addOrEditLtiPlatform"],[1,"form-group","mt-2",3,"hidden"],["jhiTranslate","artemisApp.lti.registrationId","for","field_registrationId",1,"form-control-label"],["text","artemisApp.lti.edit.registrationIdTooltip"],["type","text","name","registrationId","id","field_registrationId","formControlName","registrationId",1,"form-control"],[1,"form-group","mt-2"],["jhiTranslate","artemisApp.lti.customName","for","field_customName",1,"form-control-label"],["text","artemisApp.lti.edit.customNameIdTooltip"],["type","text","name","customName","id","field_customName","formControlName","customName",1,"form-control"],[1,"form-group"],["jhiTranslate","artemisApp.lti.toolUrl","for","field_toolUrl",1,"form-control-label"],["type","text","name","clientId","id","field_toolUrl","formControlName","originalUrl",1,"form-control"],["jhiTranslate","artemisApp.lti.clientId","for","field_clientId",1,"form-control-label"],["text","artemisApp.lti.edit.clientIdTooltip"],["type","text","name","clientId","id","field_clientId","formControlName","clientId",1,"form-control"],["jhiTranslate","artemisApp.lti.authorizationUri","for","field_authorizationUri",1,"form-control-label"],["type","text","name","authorizationUri","id","field_authorizationUri","formControlName","authorizationUri",1,"form-control"],["jhiTranslate","artemisApp.lti.tokenUri","for","field_tokenUri",1,"form-control-label"],["type","text","name","tokenUri","id","field_tokenUri","formControlName","tokenUri",1,"form-control"],["jhiTranslate","artemisApp.lti.jwkSetUri","for","field_jwkSetUri",1,"form-control-label"],["type","text","name","jwkSetUri","id","field_jwkSetUri","formControlName","jwkSetUri",1,"form-control"],[1,"mt-3","d-flex"],["type","submit","id","save-entity",1,"btn","btn-primary","ms-2",3,"disabled"],[3,"icon"],["jhiTranslate","entity.action.save"],["type","button","id","cancel-save",1,"btn","btn-secondary","ms-2",3,"click"],["jhiTranslate","entity.action.cancel"]],template:function(o,l){if(o&1){let x=v();i(0,"div",1),t(1,`
    `),i(2,"div",2),t(3,`
        `),i(4,"form",3,0),g("ngSubmit",function(){return u(x),c(l.save())}),t(6,`
            `),i(7,"div",4),t(8,`
                `),i(9,"div",5),t(10,`
                    `),i(11,"div",6),t(12,`
                        `),e(13,"h2",7),t(14,`
                    `),n(),t(15,`
                `),n(),t(16,`
            `),n(),t(17,`
            `),i(18,"div"),t(19,`
                `),i(20,"div",8),t(21,`
                    `),e(22,"label",9),t(23,`
                    `),e(24,"jhi-help-icon",10),t(25,`
                    `),e(26,"input",11),t(27,`
                `),n(),t(28,`
                `),i(29,"div",12),t(30,`
                    `),e(31,"label",13),t(32,`
                    `),e(33,"jhi-help-icon",14),t(34,`
                    `),e(35,"input",15),t(36,`
                `),n(),t(37,`
                `),i(38,"div",16),t(39,`
                    `),e(40,"label",17),t(41,`
                    `),e(42,"input",18),t(43,`
                `),n(),t(44,`
                `),i(45,"div",16),t(46,`
                    `),e(47,"label",19),t(48,`
                    `),e(49,"jhi-help-icon",20),t(50,`
                    `),e(51,"input",21),t(52,`
                `),n(),t(53,`
                `),i(54,"div",16),t(55,`
                    `),e(56,"label",22),t(57,`
                    `),e(58,"input",23),t(59,`
                `),n(),t(60,`
                `),i(61,"div",16),t(62,`
                    `),e(63,"label",24),t(64,`
                    `),e(65,"input",25),t(66,`
                `),n(),t(67,`
                `),i(68,"div",16),t(69,`
                    `),e(70,"label",26),t(71,`
                    `),e(72,"input",27),t(73,`
                `),n(),t(74,`
            `),n(),t(75,`

            `),i(76,"div",28),t(77,`
                `),i(78,"button",29),t(79,`
                    `),e(80,"fa-icon",30),t(81,"\xA0"),e(82,"span",31),t(83,`
                `),n(),t(84,`
                `),i(85,"button",32),g("click",function(){return u(x),c(l.navigateToLtiConfigurationPage())}),t(86,`
                    `),e(87,"fa-icon",30),t(88,"\xA0"),e(89,"span",33),t(90,`
                `),n(),t(91,`
            `),n(),t(92,`
        `),n(),t(93,`
    `),n(),t(94,`
`),n(),t(95,`
`)}o&2&&(m(4),s("formGroup",l.platformConfigurationForm),m(16),s("hidden",!(l.platform!=null&&l.platform.registrationId)),m(58),s("disabled",l.isSaving),m(2),s("icon",l.faSave),m(7),s("icon",l.faBan))},dependencies:[E,_,b,U,w,N,j,y,z,P,L],encapsulation:2})}return d})();export{Z as EditLtiConfigurationComponent};
//# sourceMappingURL=edit-lti-configuration.component-CTHLKFRP.js.map
