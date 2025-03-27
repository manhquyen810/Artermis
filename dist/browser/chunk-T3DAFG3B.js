import{a as mt}from"./chunk-2D32KPWA.js";import{b as rt,c as lt}from"./chunk-RNPAFOPW.js";import{b as g}from"./chunk-TECMX7AA.js";import{K as tt}from"./chunk-VZRSC3LP.js";import{c as q}from"./chunk-5SKDOIBQ.js";import{G as $,J,K,L as Y,c as O,e as T,h as H,i as G,k as X,n as W,s as z,v as Z}from"./chunk-WA5GEAJB.js";import{a as nt}from"./chunk-K3W6YFKH.js";import{d as ot}from"./chunk-EDXSOKK5.js";import{Oc as it,kb as et}from"./chunk-Z4VHWOB5.js";import{a as at}from"./chunk-U54OSGNH.js";import{Ad as Q,Db as o,Dc as F,Ea as S,La as V,Ma as x,Mb as B,Mc as A,Na as _,Oc as C,Qd as R,Tb as w,Ya as U,Yc as I,Za as v,Zb as f,Zc as L,_c as P,ab as E,ad as k,bd as D,dd as t,fd as N,gd as j,kc as c,rd as M,sc as d,xc as a,yc as r,yd as p,zc as l,zd as s}from"./chunk-5LC5EQRR.js";import{a as b}from"./chunk-3E746U5Y.js";var st=["fileInput"],dt=n=>({extensions:n});function ut(n,u){n&1&&(t(0,`
                            `),l(1,"div",24),t(2,`
                        `))}function ft(n,u){n&1&&(t(0,`
                            `),l(1,"div",25),t(2,`
                        `))}function ht(n,u){if(n&1&&(t(0,`
                    `),a(1,"div",23),t(2,`
                        `),f(3,ut,3,0)(4,ft,3,0),r(),t(5,`
                `)),n&2){let i=C();o(3),d(!(i.nameControl==null||i.nameControl.errors==null)&&i.nameControl.errors.required?3:-1),o(),d(!(i.nameControl==null||i.nameControl.errors==null)&&i.nameControl.errors.maxlength?4:-1)}}function Ct(n,u){n&1&&(t(0,`
                            `),l(1,"div",26),t(2,`
                        `))}function xt(n,u){if(n&1&&(t(0,`
                    `),a(1,"div",23),t(2,`
                        `),f(3,Ct,3,0),r(),t(4,`
                `)),n&2){let i=C();o(3),d(!(i.descriptionControl==null||i.descriptionControl.errors==null)&&i.descriptionControl.errors.maxlength?3:-1)}}function _t(n,u){n&1&&(t(0,`
                    `),a(1,"div",23),t(2),p(3,"artemisTranslate"),p(4,"artemisTranslate"),r(),t(5,`
                `)),n&2&&(o(2),j(`
                        `,s(3,2,"artemisApp.attachmentUnit.createAttachmentUnit.fileTooBig"),`
                        `,s(4,4,"artemisApp.attachmentUnit.createAttachmentUnit.fileLimitation"),`
                    `))}function Tt(n,u){n&1&&(t(0,`
                    `),l(1,"div",27),t(2,`
                `))}function vt(n,u){n&1&&(t(0,`
                            `),l(1,"div",28),t(2,`
                        `))}function At(n,u){if(n&1&&(t(0,`
                    `),a(1,"div",23),t(2,`
                        `),f(3,vt,3,0),r(),t(4,`
                `)),n&2){let i=C();o(3),d(!(i.updateNotificationTextControl==null||i.updateNotificationTextControl.errors==null)&&i.updateNotificationTextControl.errors.maxlength?3:-1)}}function gt(n,u){if(n&1){let i=F();t(0,`
                        `),a(1,"button",29),A("click",function(){x(i);let e=C();return _(e.cancelForm())}),t(2,`
                            `),l(3,"fa-icon",30),t(4,"\xA0"),l(5,"span",31),t(6,`
                        `),r(),t(7,`
                    `)}if(n&2){let i=C();o(3),c("icon",i.faTimes)}}var Qt=(()=>{class n{faQuestionCircle=et;faTimes=it;allowedFileExtensions=rt;acceptedFileExtensionsFileBrowser=lt;formData=v();isEditMode=v(!1);formSubmitted=U();hasCancelButton=v(!1);onCancel=U();datePickerComponent=B(g);fileInput;file;fileInputTouched=!1;fileName=E(void 0);isFileTooBig=E(!1);formBuilder=S(J);form=this.formBuilder.group({name:[void 0,[T.required,T.maxLength(255)]],description:[void 0,[T.maxLength(1e3)]],releaseDate:[void 0],version:[{value:1,disabled:!0}],updateNotificationText:[void 0,[T.maxLength(1e3)]],competencyLinks:[void 0]});statusChanges=q(this.form.statusChanges??"INVALID");isFormValid=R(()=>(this.statusChanges()==="VALID"||this.fileName())&&!this.isFileTooBig()&&this.datePickerComponent()?.isValid());ngOnChanges(){this.isEditMode()&&this.formData()&&this.setFormValues(this.formData())}onFileChange(i){let m=i.target;m.files?.length&&(this.file=m.files[0],this.fileName.set(this.file.name),this.form&&(this.nameControl?.value==null||this.nameControl?.value=="")&&this.form.patchValue({name:this.file.name.replace(/\.[^/.]+$/,"")}),this.isFileTooBig.set(this.file.size>20971520))}get nameControl(){return this.form.get("name")}get descriptionControl(){return this.form.get("description")}get releaseDateControl(){return this.form.get("releaseDate")}get updateNotificationTextControl(){return this.form.get("updateNotificationText")}get versionControl(){return this.form.get("version")}submitForm(){let i=this.form.value,m=b({},i),e={file:this.file,fileName:this.fileName()};this.formSubmitted.emit({formProperties:m,fileProperties:e})}setFormValues(i){i?.formProperties&&this.form.patchValue(i.formProperties),i?.fileProperties?.file&&(this.file=i?.fileProperties?.file),i?.fileProperties?.fileName&&this.fileName.set(i?.fileProperties?.fileName)}cancelForm(){this.onCancel.emit()}static \u0275fac=function(m){return new(m||n)};static \u0275cmp=w({type:n,selectors:[["jhi-attachment-unit-form"]],viewQuery:function(m,e){if(m&1&&(k(e.datePickerComponent,g,5),I(st,5)),m&2){D();let h;L(h=P())&&(e.fileInput=h.first)}},inputs:{formData:[1,"formData"],isEditMode:[1,"isEditMode"],hasCancelButton:[1,"hasCancelButton"]},outputs:{formSubmitted:"formSubmitted",onCancel:"onCancel"},features:[V],decls:94,vars:44,consts:[["fileInput",""],[1,"row"],[1,"col-12"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control",3,"placeholder"],["for","description","jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnit.description"],["id","description","rows","3","formControlName","description",1,"form-control",3,"placeholder"],["id","fileHelp","jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnit.fileLimitation",1,"form-text","text-body-secondary"],[3,"icon","ngbTooltip"],[1,"input-group","background-file"],[1,"custom-file","overflow-ellipsis"],["id","fileInput","type","file","aria-describedby","fileHelp",1,"custom-file-input",3,"change","click","accept","placeholder"],["formControlName","releaseDate",3,"labelName"],["id","competencies","formControlName","competencyLinks",3,"labelName","labelTooltip"],[1,"form-group",3,"hidden"],["for","updateNotificationText","jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnit.updateNotificationText"],["id","updateNotificationText","rows","3","formControlName","updateNotificationText","maxlength","255",1,"form-control",3,"placeholder"],["for","version","jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnit.version"],["id","version","type","text","readonly","","formControlName","version",1,"form-control","disabled"],["id","submitButton","type","submit",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","entity.action.submit"],[1,"alert","alert-danger"],["jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnit.nameRequiredValidationError"],["jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnit.nameMaxLengthValidationError"],["jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnit.descriptionMaxLengthValidationError"],["jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnit.fileRequiredValidationError",1,"alert","alert-danger"],["jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnit.updateNotificationTextMaxLengthValidationError"],["type","button",1,"btn","btn-secondary",3,"click"],[3,"icon"],["jhiTranslate","entity.action.cancel"]],template:function(m,e){if(m&1){let h=F();a(0,"form",1),t(1,`
    `),a(2,"div",2),t(3,`
        `),a(4,"form",3),A("ngSubmit",function(){return x(h),_(e.submitForm())}),t(5,`
            `),a(6,"div",4),t(7,`
                `),a(8,"label",5),t(9),p(10,"artemisTranslate"),r(),t(11,`
                `),l(12,"input",6),p(13,"artemisTranslate"),t(14,`
                `),f(15,ht,6,2),r(),t(16,`
            `),a(17,"div",4),t(18,`
                `),l(19,"label",7),t(20,`
                `),l(21,"textarea",8),p(22,"artemisTranslate"),t(23,`
                `),f(24,xt,5,1),r(),t(25,`
            `),a(26,"div",4),t(27,`
                `),a(28,"label"),t(29),p(30,"artemisTranslate"),r(),t(31,`
                `),l(32,"small",9),t(33,`
                `),l(34,"fa-icon",10),p(35,"artemisTranslate"),t(36,`
                `),a(37,"div",11),t(38,`
                    `),a(39,"div",12),t(40,`
                        `),a(41,"input",13,0),p(43,"artemisTranslate"),A("change",function(pt){return x(h),_(e.onFileChange(pt))})("click",function(){return x(h),_(e.fileInputTouched=!0)}),r(),t(44,`
                    `),r(),t(45,`
                `),r(),t(46,`
                `),f(47,_t,6,6)(48,Tt,3,0),r(),t(49,`
            `),a(50,"div",4),t(51,`
                `),l(52,"jhi-date-time-picker",14),p(53,"artemisTranslate"),t(54,`
            `),r(),t(55,`
            `),a(56,"div",4),t(57,`
                `),l(58,"jhi-competency-selection",15),p(59,"artemisTranslate"),p(60,"artemisTranslate"),t(61,`
            `),r(),t(62,`
            `),a(63,"div",16),t(64,`
                `),l(65,"label",17),t(66,`
                `),l(67,"textarea",18),p(68,"artemisTranslate"),t(69,`
                `),f(70,At,5,1),r(),t(71,`
            `),a(72,"div",4),t(73,`
                `),l(74,"label",19),t(75,`
                `),l(76,"input",20),t(77,`
            `),r(),t(78,`
            `),a(79,"div",1),t(80,`
                `),a(81,"div",2),t(82,`
                    `),a(83,"button",21),t(84,`
                        `),l(85,"span",22),t(86,`
                    `),r(),t(87,`
                    `),f(88,gt,8,1),r(),t(89,`
            `),r(),t(90,`
        `),r(),t(91,`
    `),r(),t(92,`
`),r(),t(93,`
`)}m&2&&(o(4),c("formGroup",e.form),o(5),N("",s(10,21,"artemisApp.attachmentUnit.createAttachmentUnit.name")," *"),o(3),c("placeholder",s(13,23,"artemisApp.attachmentUnit.createAttachmentUnit.namePlaceHolder")),o(3),d(e.nameControl!=null&&e.nameControl.invalid&&(e.nameControl!=null&&e.nameControl.dirty||e.nameControl!=null&&e.nameControl.touched)?15:-1),o(6),c("placeholder",s(22,25,"artemisApp.attachmentUnit.createAttachmentUnit.descriptionPlaceHolder")),o(3),d(e.descriptionControl!=null&&e.descriptionControl.invalid&&(e.descriptionControl!=null&&e.descriptionControl.dirty||e.descriptionControl!=null&&e.descriptionControl.touched)?24:-1),o(5),N("",s(30,27,"artemisApp.attachmentUnit.createAttachmentUnit.file"),"*"),o(5),c("icon",e.faQuestionCircle)("ngbTooltip",Q(35,29,"artemisApp.attachmentUnit.createAttachmentUnit.fileLimitationTooltip",M(42,dt,e.allowedFileExtensions))),o(7),c("accept",e.acceptedFileExtensionsFileBrowser)("placeholder",s(43,32,"artemisApp.attachmentUnit.createAttachmentUnit.chooseFile")),o(6),d(e.isFileTooBig()?47:-1),o(),d(!e.fileName()&&e.fileInputTouched?48:-1),o(4),c("labelName",s(53,34,"artemisApp.lectureUnit.releaseDate")),o(6),c("labelName",s(59,36,"artemisApp.competency.link.title"))("labelTooltip",s(60,38,"artemisApp.competency.link.lectureUnit")),o(5),c("hidden",!e.isEditMode()),o(4),c("placeholder",s(68,40,"artemisApp.attachmentUnit.createAttachmentUnit.updateNotificationTextPlaceholder")),o(3),d(e.updateNotificationTextControl!=null&&e.updateNotificationTextControl.invalid&&(e.updateNotificationTextControl!=null&&e.updateNotificationTextControl.dirty||e.updateNotificationTextControl!=null&&e.updateNotificationTextControl.touched)?70:-1),o(13),c("disabled",!e.isFormValid()),o(5),d(e.hasCancelButton()?88:-1))},dependencies:[K,W,O,H,G,$,X,Y,z,Z,at,ot,tt,g,mt,nt],encapsulation:2})}return n})();export{Qt as a};
//# sourceMappingURL=chunk-T3DAFG3B.js.map
