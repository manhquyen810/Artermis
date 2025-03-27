import{a as Y}from"./chunk-NYN5NU5X.js";import{a as ee}from"./chunk-LI7VA7ZH.js";import{b as X}from"./chunk-TECMX7AA.js";import"./chunk-4RC7EEQU.js";import"./chunk-HK7MJBP6.js";import"./chunk-2CUFQLAH.js";import"./chunk-MKPB4JKY.js";import"./chunk-I76AVIQH.js";import"./chunk-H2ETPEH6.js";import"./chunk-Z6NSEM73.js";import"./chunk-G3JOQOSD.js";import"./chunk-EELXLOHY.js";import"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as P,L as $,c as V,e as f,h as k,i as I,j as G,l as d,n as R,s as U,v as W,w as q,x as L,z as Z}from"./chunk-WA5GEAJB.js";import"./chunk-7XXWL6ER.js";import{a as J}from"./chunk-K3W6YFKH.js";import{d as K}from"./chunk-EDXSOKK5.js";import"./chunk-DID2YGL7.js";import{fa as z,tb as H}from"./chunk-Z4VHWOB5.js";import{a as Q}from"./chunk-U54OSGNH.js";import{f as B,h as O}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as r,Dc as F,Ea as x,Ma as y,Mc as h,Na as S,Tb as T,Zb as C,cd as M,dd as e,ed as j,kc as s,sc as E,uc as w,vc as A,wc as _,xc as i,yc as n,yd as N,zc as o,zd as g}from"./chunk-5LC5EQRR.js";import{a as v,b as D}from"./chunk-3E746U5Y.js";function ie(m,b){if(m&1&&(e(0,`
                            `),i(1,"option",19),e(2),n(),e(3,`
                        `)),m&2){let t=b.$implicit;r(),s("value",t.value),r(),j(t.name)}}function ne(m,b){m&1&&(e(0,`
                        `),o(1,"span",20),e(2,`
                    `))}var ye=(()=>{class m{systemNotificationService=x(ee);route=x(B);router=x(O);notification;isSaving;systemNotificationTypes=[{name:"INFO",value:"INFO"},{name:"WARNING",value:"WARNING"}];form;faSave=H;faBan=z;ngOnInit(){this.isSaving=!1,this.notification=new Y,this.route.parent.data.subscribe(({notification:t})=>{t&&(this.notification=t.body?t.body:t)}),this.form=new G({id:new d(this.notification.id),title:new d(this.notification.title,[f.required,f.minLength(1),f.maxLength(50)]),text:new d(this.notification.text),type:new d(this.notification.type,[f.required]),notificationDate:new d(this.notification.notificationDate,[f.required]),expireDate:new d(this.notification.expireDate,[f.required])},{validators:this.validateDates.bind(this)})}validateDates(){let t=this.form?.get("notificationDate"),l=this.form?.get("expireDate"),a=this.form?.get("notificationDate")?.value,p=this.form?.get("expireDate")?.value;!a||!p||p.isAfter(a)?[t,l].forEach(c=>{let u=v({},c?.errors??{});delete u.expireMustBeAfterNotification;let te=Object.keys(u).length===0;c?.setErrors(te?null:u)}):[t,l].forEach(c=>{let u=D(v({},c?.errors??{}),{expireMustBeAfterNotification:!0});c?.setErrors(u)})}get expireDate(){return this.form?.get("expireDate")}goToOverview(){this.router.navigate(["admin","system-notification-management"])}save(){this.isSaving=!0;let t=v(v({},this.notification),this.form.getRawValue());this.notification.id?this.systemNotificationService.update(t).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()}):this.systemNotificationService.create(t).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.isSaving=!1,this.goToOverview()}onSaveError(){this.isSaving=!1}static \u0275fac=function(l){return new(l||m)};static \u0275cmp=T({type:m,selectors:[["jhi-system-notification-management-update"]],decls:69,vars:13,consts:[["editForm","ngForm"],[1,"row","justify-content-center"],[1,"col-md-8"],["name","editForm","role","form",3,"ngSubmit","formGroup"],["id","myNotificationLabel","jhiTranslate","artemisApp.systemNotification.createOrEditLabel"],[1,"form-group"],["for","title","jhiTranslate","artemisApp.systemNotification.title",1,"form-control-label"],["id","title","type","text","name","title","formControlName","title",1,"form-control"],["for","text","jhiTranslate","artemisApp.systemNotification.text",1,"form-control-label"],["id","text","type","text","name","text","formControlName","text",1,"form-control"],["for","type","jhiTranslate","artemisApp.systemNotification.type"],["id","type","name","type","formControlName","type",1,"form-select"],["formControlName","notificationDate","name","notificationDate",3,"labelName","shouldDisplayTimeZoneWarning"],["formControlName","expireDate","name","expireDate",3,"labelName","shouldDisplayTimeZoneWarning"],["id","cancelButton","type","button",1,"btn","btn-secondary",3,"click"],[3,"icon"],["jhiTranslate","entity.action.cancel"],["id","saveButton","type","submit",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","entity.action.save"],[3,"value"],["jhiTranslate","error.systemNotificationNeedsNotificationBeforeExpiration",1,"text-danger"]],template:function(l,a){if(l&1){let p=F();i(0,"div",1),e(1,`
    `),i(2,"div",2),e(3,`
        `),i(4,"form",3,0),h("ngSubmit",function(){return y(p),S(a.save())}),e(6,`
            `),o(7,"h2",4),e(8,`
            `),i(9,"div"),e(10,`
                `),i(11,"div",5),e(12,`
                    `),o(13,"label",6),e(14,`
                    `),o(15,"input",7),e(16,`
                `),n(),e(17,`
                `),i(18,"div",5),e(19,`
                    `),o(20,"label",8),e(21,`
                    `),o(22,"input",9),e(23,`
                `),n(),e(24,`
                `),i(25,"div",5),e(26,`
                    `),o(27,"label",10),e(28,`
                    `),i(29,"select",11),e(30,`
                        `),A(31,ie,4,2,null,null,w),n(),e(33,`
                `),n(),e(34,`
                `),i(35,"div",5),e(36,`
                    `),o(37,"jhi-date-time-picker",12),N(38,"artemisTranslate"),e(39,`
                `),n(),e(40,`
                `),i(41,"div",5),e(42,`
                    `),o(43,"jhi-date-time-picker",13),N(44,"artemisTranslate"),e(45,`
                    `),C(46,ne,3,0),n(),e(47,`
            `),n(),e(48,`
            `),i(49,"div"),e(50,`
                `),i(51,"button",14),h("click",function(){return y(p),S(a.goToOverview())}),e(52,`
                    `),o(53,"fa-icon",15),e(54,"\xA0"),o(55,"span",16),e(56,`
                `),n(),e(57,`
                `),i(58,"button",17),e(59,`
                    `),o(60,"fa-icon",15),e(61,"\xA0"),o(62,"span",18),e(63,`
                `),n(),e(64,`
            `),n(),e(65,`
        `),n(),e(66,`
    `),n(),e(67,`
`),n(),e(68,`
`)}if(l&2){let p=M(5);r(4),s("formGroup",a.form),r(27),_(a.systemNotificationTypes),r(6),s("labelName",g(38,9,"artemisApp.systemNotification.notificationDate"))("shouldDisplayTimeZoneWarning",!1),r(6),s("labelName",g(44,11,"artemisApp.systemNotification.expireDate"))("shouldDisplayTimeZoneWarning",!1),r(3),E(!(a.expireDate==null||a.expireDate.errors==null)&&a.expireDate.errors.expireMustBeAfterNotification?46:-1),r(7),s("icon",a.faBan),r(5),s("disabled",p.form.invalid||a.isSaving),r(2),s("icon",a.faSave)}},dependencies:[P,R,L,Z,V,q,k,I,$,U,W,Q,X,K,J],encapsulation:2})}return m})();export{ye as SystemNotificationManagementUpdateComponent};
//# sourceMappingURL=system-notification-management-update.component-J3VHV6UO.js.map
