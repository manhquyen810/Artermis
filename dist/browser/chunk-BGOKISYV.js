import{a as ee}from"./chunk-2D32KPWA.js";import{b as S}from"./chunk-TECMX7AA.js";import{f as W}from"./chunk-MLVGKM2P.js";import{c as k}from"./chunk-5SKDOIBQ.js";import{J as G,K as Q,L as z,c as R,e as h,h as I,i as M,k as P,n as q,s as $,v as H}from"./chunk-WA5GEAJB.js";import{a as X}from"./chunk-K3W6YFKH.js";import{d as Y}from"./chunk-EDXSOKK5.js";import{Db as J,Oc as K}from"./chunk-Z4VHWOB5.js";import{a as Z}from"./chunk-U54OSGNH.js";import{L as N,O as j}from"./chunk-IOA4DPXY.js";import{Db as o,Dc as y,Ea as _,La as E,Ma as v,Mb as A,Mc as b,Na as U,Oc as u,Qd as B,Tb as L,Ya as F,Za as g,Zb as p,ad as D,bd as w,dd as t,fd as T,kc as d,sc as c,xc as l,ya as V,yc as a,yd as C,z as x,zc as m,zd as f}from"./chunk-5LC5EQRR.js";import{a as O}from"./chunk-3E746U5Y.js";var te=(()=>{class n{httpClient=_(j);lectureUnitService=_(W);resourceURL="api/lecture";create(e,i){return this.httpClient.post(`${this.resourceURL}/lectures/${i}/online-units`,e,{observe:"response"}).pipe(x(r=>this.lectureUnitService.convertLectureUnitResponseDatesFromServer(r)))}findById(e,i){return this.httpClient.get(`${this.resourceURL}/lectures/${i}/online-units/${e}`,{observe:"response"}).pipe(x(r=>this.lectureUnitService.convertLectureUnitResponseDatesFromServer(r)))}update(e,i){return this.httpClient.put(`${this.resourceURL}/lectures/${i}/online-units`,e,{observe:"response"}).pipe(x(r=>this.lectureUnitService.convertLectureUnitResponseDatesFromServer(r)))}getOnlineResource(e){let i=new N;return i=i.set("link",String(e)),this.httpClient.get(`${this.resourceURL}/lectures/online-units/fetch-online-resource`,{observe:"response",params:i})}static \u0275fac=function(i){return new(i||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function oe(n,s){n&1&&(t(0,`
                            `),m(1,"div",17),t(2,`
                        `))}function re(n,s){n&1&&(t(0,`
                            `),m(1,"div",18),t(2,`
                        `))}function le(n,s){if(n&1&&(t(0,`
                    `),l(1,"div",16),t(2,`
                        `),p(3,oe,3,0)(4,re,3,0),a(),t(5,`
                `)),n&2){let e=u(2);o(3),c(!(e.sourceControl==null||e.sourceControl.errors==null)&&e.sourceControl.errors.required?3:-1),o(),c(!(e.sourceControl==null||e.sourceControl.errors==null)&&e.sourceControl.errors.invalidUrl?4:-1)}}function ae(n,s){n&1&&(t(0,`
                            `),m(1,"div",19),t(2,`
                        `))}function me(n,s){n&1&&(t(0,`
                            `),m(1,"div",20),t(2,`
                        `))}function se(n,s){if(n&1&&(t(0,`
                    `),l(1,"div",16),t(2,`
                        `),p(3,ae,3,0)(4,me,3,0),a(),t(5,`
                `)),n&2){let e=u(2);o(3),c(!(e.nameControl==null||e.nameControl.errors==null)&&e.nameControl.errors.required?3:-1),o(),c(!(e.nameControl==null||e.nameControl.errors==null)&&e.nameControl.errors.maxlength?4:-1)}}function ce(n,s){n&1&&(t(0,`
                            `),m(1,"div",21),t(2,`
                        `))}function pe(n,s){if(n&1&&(t(0,`
                    `),l(1,"div",16),t(2,`
                        `),p(3,ce,3,0),a(),t(4,`
                `)),n&2){let e=u(2);o(3),c(!(e.descriptionControl==null||e.descriptionControl.errors==null)&&e.descriptionControl.errors.maxlength?3:-1)}}function de(n,s){if(n&1){let e=y();t(0,`
                        `),l(1,"button",22),b("click",function(){v(e);let r=u(2);return U(r.cancelForm())}),t(2,`
                            `),m(3,"fa-icon",23),t(4,"\xA0"),m(5,"span",24),t(6,`
                        `),a(),t(7,`
                    `)}if(n&2){let e=u(2);o(3),d("icon",e.faTimes)}}function ue(n,s){if(n&1){let e=y();t(0,`
        `),l(1,"form",1),b("ngSubmit",function(){v(e);let r=u();return U(r.submitForm())}),t(2,`
            `),l(3,"div",2),t(4,`
                `),l(5,"label",3),t(6),C(7,"artemisTranslate"),a(),t(8,`
                `),l(9,"input",4),C(10,"artemisTranslate"),b("change",function(){v(e);let r=u();return U(r.onLinkChanged())}),a(),t(11,`
                `),m(12,"small",5),t(13,`
                `),p(14,le,6,2),a(),t(15,`
            `),l(16,"div",2),t(17,`
                `),l(18,"label",6),t(19),C(20,"artemisTranslate"),a(),t(21,`
                `),m(22,"input",7),C(23,"artemisTranslate"),t(24,`
                `),p(25,se,6,2),a(),t(26,`
            `),l(27,"div",2),t(28,`
                `),m(29,"label",8),t(30,`
                `),m(31,"textarea",9),C(32,"artemisTranslate"),t(33,`
                `),p(34,pe,5,1),a(),t(35,`
            `),l(36,"div",2),t(37,`
                `),m(38,"jhi-date-time-picker",10),C(39,"artemisTranslate"),t(40,`
            `),a(),t(41,`
            `),l(42,"div",2),t(43,`
                `),m(44,"jhi-competency-selection",11),C(45,"artemisTranslate"),C(46,"artemisTranslate"),t(47,`
            `),a(),t(48,`
            `),l(49,"div",12),t(50,`
                `),l(51,"div",13),t(52,`
                    `),l(53,"button",14),t(54,`
                        `),m(55,"span",15),t(56,`
                    `),a(),t(57,`
                    `),p(58,de,8,1),a(),t(59,`
            `),a(),t(60,`
        `),a(),t(61,`
    `)}if(n&2){let e=u();o(),d("formGroup",e.form),o(5),T("",f(7,14,"artemisApp.onlineUnit.createOnlineUnit.source"),"*"),o(3),d("placeholder",f(10,16,"artemisApp.onlineUnit.createOnlineUnit.sourcePlaceHolder")),o(5),c(e.sourceControl!=null&&e.sourceControl.invalid&&(e.sourceControl!=null&&e.sourceControl.dirty||e.sourceControl!=null&&e.sourceControl.touched)?14:-1),o(5),T("",f(20,18,"artemisApp.onlineUnit.createOnlineUnit.name")," *"),o(3),d("placeholder",f(23,20,"artemisApp.onlineUnit.createOnlineUnit.namePlaceHolder")),o(3),c(e.nameControl!=null&&e.nameControl.invalid&&(e.nameControl!=null&&e.nameControl.dirty||e.nameControl!=null&&e.nameControl.touched)?25:-1),o(6),d("placeholder",f(32,22,"artemisApp.onlineUnit.createOnlineUnit.descriptionPlaceHolder")),o(3),c(e.descriptionControl!=null&&e.descriptionControl.invalid&&(e.descriptionControl!=null&&e.descriptionControl.dirty||e.descriptionControl!=null&&e.descriptionControl.touched)?34:-1),o(4),d("labelName",f(39,24,"artemisApp.lectureUnit.releaseDate")),o(6),d("labelName",f(45,26,"artemisApp.competency.link.title"))("labelTooltip",f(46,28,"artemisApp.competency.link.lectureUnit")),o(9),d("disabled",!e.isFormValid()),o(5),c(e.hasCancelButton()?58:-1)}}function Ce(n){let s=!0;try{new URL(n.value)}catch{s=!1}return s?null:{invalidUrl:!0}}var Be=(()=>{class n{faArrowLeft=J;faTimes=K;formData=g();isEditMode=g(!1);formSubmitted=F();hasCancelButton=g(!1);onCancel=F();datePickerComponent=A(S);urlValidator=Ce;formBuilder=_(G);onlineUnitService=_(te);form=this.formBuilder.group({name:[void 0,[h.required,h.maxLength(255)]],description:[void 0,[h.maxLength(1e3)]],releaseDate:[void 0],source:[void 0,[h.required,this.urlValidator]],competencyLinks:[void 0]});statusChanges=k(this.form.statusChanges??"INVALID");isFormValid=B(()=>this.statusChanges()==="VALID"&&this.datePickerComponent()?.isValid());get nameControl(){return this.form.get("name")}get descriptionControl(){return this.form.get("description")}get releaseDateControl(){return this.form.get("releaseDate")}get sourceControl(){return this.form.get("source")}ngOnChanges(){this.isEditMode()&&this.formData()&&this.setFormValues(this.formData())}setFormValues(e){this.form.patchValue(e)}onLinkChanged(){let e=this.sourceControl?.value,i=/https?:\/\//;e&&!e.match(i)&&this.sourceControl?.setValue("https://"+e),this.sourceControl?.valid&&this.onlineUnitService.getOnlineResource(this.sourceControl.value).pipe(x(r=>r.body)).subscribe({next:r=>{let ne={name:r.title||void 0,description:r.description||void 0};this.form.patchValue(ne)}})}submitForm(){let e=O({},this.form.value);this.formSubmitted.emit(e)}cancelForm(){this.onCancel.emit()}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=L({type:n,selectors:[["jhi-online-unit-form"]],viewQuery:function(i,r){i&1&&D(r.datePickerComponent,S,5),i&2&&w()},inputs:{formData:[1,"formData"],isEditMode:[1,"isEditMode"],hasCancelButton:[1,"hasCancelButton"]},outputs:{formSubmitted:"formSubmitted",onCancel:"onCancel"},features:[E],decls:4,vars:1,consts:[[1,"container"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","source",1,"required"],["type","text","id","source","formControlName","source",1,"form-control",3,"change","placeholder"],["id","urlHelperExplanation","jhiTranslate","artemisApp.onlineUnit.createOnlineUnit.urlHelperPlaceholder",1,"form-text","text-body-secondary"],["for","name",1,"required"],["type","text","id","name","formControlName","name",1,"form-control",3,"placeholder"],["for","description","jhiTranslate","artemisApp.onlineUnit.createOnlineUnit.description"],["id","description","rows","3","formControlName","description",1,"form-control",3,"placeholder"],["formControlName","releaseDate",3,"labelName"],["id","competencies","formControlName","competencyLinks",3,"labelName","labelTooltip"],[1,"row"],[1,"col-12"],["id","submitButton","type","submit",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","entity.action.submit"],[1,"alert","alert-danger"],["jhiTranslate","artemisApp.onlineUnit.createOnlineUnit.sourceRequiredValidationError"],["jhiTranslate","artemisApp.onlineUnit.createOnlineUnit.sourceURLValidationError"],["jhiTranslate","artemisApp.onlineUnit.createOnlineUnit.nameRequiredValidationError"],["jhiTranslate","artemisApp.onlineUnit.createOnlineUnit.nameMaxLengthValidationError"],["jhiTranslate","artemisApp.onlineUnit.createOnlineUnit.descriptionMaxLengthValidationError"],["type","button",1,"btn","btn-secondary",3,"click"],[3,"icon"],["jhiTranslate","entity.action.cancel"]],template:function(i,r){i&1&&(l(0,"form",0),t(1,`
    `),p(2,ue,62,30),a(),t(3,`
`)),i&2&&(o(2),c(r.form?2:-1))},dependencies:[Q,q,R,I,M,P,z,$,H,Z,S,ee,Y,X],encapsulation:2})}return n})();export{te as a,Be as b};
//# sourceMappingURL=chunk-BGOKISYV.js.map
