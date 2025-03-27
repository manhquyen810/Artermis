import{a as ie}from"./chunk-2D32KPWA.js";import{a as re}from"./chunk-47G2PPX4.js";import{b as S}from"./chunk-TECMX7AA.js";import{f as Y}from"./chunk-MLVGKM2P.js";import{c as P}from"./chunk-5SKDOIBQ.js";import{J as z,K as J,L as K,c as I,e as v,h as M,i as q,k as $,n as G,s as Q,v as O}from"./chunk-WA5GEAJB.js";import{a as Z}from"./chunk-K3W6YFKH.js";import{d as ee}from"./chunk-EDXSOKK5.js";import{Db as W,Oc as X}from"./chunk-Z4VHWOB5.js";import{a as te}from"./chunk-U54OSGNH.js";import{O as R}from"./chunk-IOA4DPXY.js";import{Db as l,Dc as E,Ea as f,Ma as h,Mb as L,Mc as b,Na as U,Oc as p,Pd as B,Qd as k,Rd as N,Tb as D,Ya as y,Za as V,Zb as s,ad as w,bd as j,dd as e,fd as g,kc as u,sc as c,xc as n,ya as A,yc as o,yd as x,z as _,zc as a,zd as C}from"./chunk-5LC5EQRR.js";import{a as H,h as oe}from"./chunk-3E746U5Y.js";var ge=(()=>{class i{httpClient=f(R);lectureUnitService=f(Y);resourceURL="api/lecture";create(t,r){return this.httpClient.post(`${this.resourceURL}/lectures/${r}/video-units`,t,{observe:"response"}).pipe(_(m=>this.lectureUnitService.convertLectureUnitResponseDatesFromServer(m)))}findById(t,r){return this.httpClient.get(`${this.resourceURL}/lectures/${r}/video-units/${t}`,{observe:"response"}).pipe(_(m=>this.lectureUnitService.convertLectureUnitResponseDatesFromServer(m)))}update(t,r){return this.httpClient.put(`${this.resourceURL}/lectures/${r}/video-units`,t,{observe:"response"}).pipe(_(m=>this.lectureUnitService.convertLectureUnitResponseDatesFromServer(m)))}static \u0275fac=function(r){return new(r||i)};static \u0275prov=A({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var T=oe(re());function ae(i,d){i&1&&(e(0,`
                                `),a(1,"div",25),e(2,`
                            `))}function de(i,d){i&1&&(e(0,`
                                `),a(1,"div",26),e(2,`
                            `))}function me(i,d){if(i&1&&(e(0,`
                        `),n(1,"div",24),e(2,`
                            `),s(3,ae,3,0)(4,de,3,0),o(),e(5,`
                    `)),i&2){let t=p(2);l(3),c(!(t.nameControl==null||t.nameControl.errors==null)&&t.nameControl.errors.required?3:-1),l(),c(!(t.nameControl==null||t.nameControl.errors==null)&&t.nameControl.errors.maxlength?4:-1)}}function ce(i,d){i&1&&(e(0,`
                                `),a(1,"div",27),e(2,`
                            `))}function se(i,d){if(i&1&&(e(0,`
                        `),n(1,"div",24),e(2,`
                            `),s(3,ce,3,0),o(),e(4,`
                    `)),i&2){let t=p(2);l(3),c(!(t.descriptionControl==null||t.descriptionControl.errors==null)&&t.descriptionControl.errors.maxlength?3:-1)}}function ue(i,d){i&1&&(e(0,`
                                        `),a(1,"div",28),e(2,`
                                    `))}function pe(i,d){i&1&&(e(0,`
                                        `),a(1,"div",29),e(2,`
                                    `))}function xe(i,d){if(i&1&&(e(0,`
                                `),n(1,"div",24),e(2,`
                                    `),s(3,ue,3,0)(4,pe,3,0),o(),e(5,`
                            `)),i&2){let t=p(2);l(3),c(!(t.sourceControl==null||t.sourceControl.errors==null)&&t.sourceControl.errors.required?3:-1),l(),c(!(t.sourceControl==null||t.sourceControl.errors==null)&&t.sourceControl.errors.invalidVideoUrl?4:-1)}}function Ce(i,d){i&1&&(e(0,`
                                        `),a(1,"div",30),e(2,`
                                    `))}function fe(i,d){if(i&1&&(e(0,`
                                `),n(1,"div",24),e(2,`
                                    `),s(3,Ce,3,0),o(),e(4,`
                            `)),i&2){let t=p(2);l(3),c(!(t.urlHelperControl==null||t.urlHelperControl.errors==null)&&t.urlHelperControl.errors.invalidVideoUrl?3:-1)}}function ve(i,d){if(i&1){let t=E();e(0,`
                            `),n(1,"button",31),b("click",function(){h(t);let m=p(2);return U(m.cancelForm())}),e(2,`
                                `),a(3,"fa-icon",19),e(4,"\xA0"),a(5,"span",32),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=p(2);l(3),u("icon",t.faTimes)}}function _e(i,d){if(i&1){let t=E();e(0,`
            `),n(1,"form",2),b("ngSubmit",function(){h(t);let m=p();return U(m.submitForm())}),e(2,`
                `),n(3,"div",3),e(4,`
                    `),n(5,"label",4),e(6),x(7,"artemisTranslate"),o(),e(8,`
                    `),a(9,"input",5),x(10,"artemisTranslate"),e(11,`
                    `),s(12,me,6,2),o(),e(13,`
                `),n(14,"div",3),e(15,`
                    `),a(16,"label",6),e(17,`
                    `),a(18,"textarea",7),x(19,"artemisTranslate"),e(20,`
                    `),s(21,se,5,1),o(),e(22,`
                `),n(23,"div",3),e(24,`
                    `),a(25,"jhi-date-time-picker",8),x(26,"artemisTranslate"),e(27,`
                `),o(),e(28,`
                `),n(29,"div",3),e(30,`
                    `),a(31,"jhi-competency-selection",9),x(32,"artemisTranslate"),x(33,"artemisTranslate"),e(34,`
                `),o(),e(35,`
                `),n(36,"div",10),e(37,`
                    `),n(38,"div",0),e(39,`
                        `),n(40,"div",11),e(41,`
                            `),n(42,"label",12),e(43),x(44,"artemisTranslate"),o(),e(45,`
                        `),o(),e(46,`
                        `),a(47,"div",13),e(48,`
                        `),n(49,"div",14),e(50,`
                            `),a(51,"label",15),e(52,`
                        `),o(),e(53,`
                    `),o(),e(54,`
                    `),n(55,"div",0),e(56,`
                        `),n(57,"div",11),e(58,`
                            `),a(59,"input",16),x(60,"artemisTranslate"),e(61,`
                        `),o(),e(62,`
                        `),n(63,"div",17),e(64,`
                            `),n(65,"button",18),b("click",function(m){h(t);let ne=p();return U(ne.setEmbeddedVideoUrl(m))}),e(66,`
                                `),a(67,"fa-icon",19),e(68,`
                            `),o(),e(69,`
                        `),o(),e(70,`
                        `),n(71,"div",14),e(72,`
                            `),a(73,"input",20),e(74,`
                        `),o(),e(75,`
                    `),o(),e(76,`
                    `),n(77,"div",0),e(78,`
                        `),n(79,"div",11),e(80,`
                            `),s(81,xe,6,2),o(),e(82,`
                        `),a(83,"div",13),e(84,`
                        `),n(85,"div",14),e(86,`
                            `),a(87,"small",21),e(88,`
                            `),s(89,fe,5,1),o(),e(90,`
                    `),o(),e(91,`
                `),o(),e(92,`
                `),n(93,"div",0),e(94,`
                    `),n(95,"div",1),e(96,`
                        `),n(97,"button",22),e(98,`
                            `),a(99,"span",23),e(100,`
                        `),o(),e(101,`
                        `),s(102,ve,8,1),o(),e(103,`
                `),o(),e(104,`
            `),o(),e(105,`
        `)}if(i&2){let t=p();l(),u("formGroup",t.form),l(5),g("",C(7,17,"artemisApp.videoUnit.createVideoUnit.name"),"*"),l(3),u("placeholder",C(10,19,"artemisApp.videoUnit.createVideoUnit.namePlaceHolder")),l(3),c(t.nameControl!=null&&t.nameControl.invalid&&(t.nameControl!=null&&t.nameControl.dirty||t.nameControl!=null&&t.nameControl.touched)?12:-1),l(6),u("placeholder",C(19,21,"artemisApp.videoUnit.createVideoUnit.descriptionPlaceHolder")),l(3),c(t.descriptionControl!=null&&t.descriptionControl.invalid&&(t.descriptionControl!=null&&t.descriptionControl.dirty||t.descriptionControl!=null&&t.descriptionControl.touched)?21:-1),l(4),u("labelName",C(26,23,"artemisApp.lectureUnit.releaseDate")),l(6),u("labelName",C(32,25,"artemisApp.competency.link.title"))("labelTooltip",C(33,27,"artemisApp.competency.link.lectureUnit")),l(12),g("",C(44,29,"artemisApp.videoUnit.createVideoUnit.source"),"*"),l(16),u("placeholder",C(60,31,"artemisApp.videoUnit.createVideoUnit.sourcePlaceHolder")),l(6),u("disabled",!t.isTransformable),l(2),u("icon",t.faArrowLeft),l(14),c(t.sourceControl!=null&&t.sourceControl.invalid&&(t.sourceControl!=null&&t.sourceControl.dirty||t.sourceControl!=null&&t.sourceControl.touched)?81:-1),l(8),c(t.urlHelperControl!=null&&t.urlHelperControl.invalid&&(t.urlHelperControl!=null&&t.urlHelperControl.dirty||t.urlHelperControl!=null&&t.urlHelperControl.touched)?89:-1),l(8),u("disabled",!t.isFormValid()),l(5),c(t.hasCancelButton()?102:-1)}}function F(i){return i.host==="live.rbg.tum.de"}function he(i){return i?.searchParams.get("video_only")==="1"}function Ue(i){let d=i.value;if(!d)return;let t,r;try{r=new URL(d),t=T.default.parse(d)}catch{}if(!(r&&F(r)||t))return{invalidVideoUrl:!0}}function Ve(i){let d;try{d=new URL(i.value)}catch{}if(!(d&&!(F(d)&&!he(d))))return{invalidVideoUrl:!0}}var Ie=(()=>{class i{faTimes=X;faArrowLeft=W;formBuilder=f(z);formData=V();isEditMode=V(!1);formSubmitted=y();hasCancelButton=V();onCancel=y();datePickerComponent=L(S);videoSourceUrlValidator=Ve;videoSourceTransformUrlValidator=Ue;form=this.formBuilder.group({name:[void 0,[v.required,v.maxLength(255)]],description:[void 0,[v.maxLength(1e3)]],releaseDate:[void 0],source:[void 0,[v.required,this.videoSourceUrlValidator]],urlHelper:[void 0,this.videoSourceTransformUrlValidator],competencyLinks:[void 0]});statusChanges=P(this.form.statusChanges??"INVALID");isFormValid=k(()=>this.statusChanges()==="VALID"&&this.datePickerComponent()?.isValid());constructor(){N(()=>{this.isEditMode()&&this.formData()&&B(()=>this.setFormValues(this.formData()))})}get nameControl(){return this.form.get("name")}get descriptionControl(){return this.form.get("description")}get releaseDateControl(){return this.form.get("releaseDate")}get sourceControl(){return this.form.get("source")}get urlHelperControl(){return this.form.get("urlHelper")}setFormValues(t){this.form.patchValue(t)}submitForm(){let t=H({},this.form.value);this.formSubmitted.emit(t)}get isTransformable(){return this.urlHelperControl.value===void 0||this.urlHelperControl.value===null||this.urlHelperControl.value===""?!1:!this.urlHelperControl?.invalid}setEmbeddedVideoUrl(t){t.stopPropagation(),this.sourceControl.setValue(this.extractEmbeddedUrl(this.urlHelperControl.value))}extractEmbeddedUrl(t){let r=new URL(t);return F(r)?(r.searchParams.set("video_only","1"),r.toString()):T.default.create({videoInfo:T.default.parse(t),format:"embed"})}cancelForm(){this.onCancel.emit()}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=D({type:i,selectors:[["jhi-video-unit-form"]],viewQuery:function(r,m){r&1&&w(m.datePickerComponent,S,5),r&2&&j()},inputs:{formData:[1,"formData"],isEditMode:[1,"isEditMode"],hasCancelButton:[1,"hasCancelButton"]},outputs:{formSubmitted:"formSubmitted",onCancel:"onCancel"},decls:7,vars:1,consts:[[1,"row"],[1,"col-12"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","name",1,"required"],["type","text","id","name","formControlName","name",1,"form-control",3,"placeholder"],["for","description","jhiTranslate","artemisApp.videoUnit.createVideoUnit.description"],["id","description","rows","3","formControlName","description",1,"form-control",3,"placeholder"],["formControlName","releaseDate",3,"labelName"],["id","competencies","formControlName","competencyLinks",3,"labelName","labelTooltip"],[1,"container",2,"padding","0"],[1,"col-4"],["for","source",1,"required"],[1,"col-1"],[1,"col-7"],["for","urlHelper","jhiTranslate","artemisApp.videoUnit.createVideoUnit.urlVideoHelper"],["type","text","id","source","formControlName","source",1,"form-control",3,"placeholder"],[1,"col-1","mx-auto","text-center","align-self-center"],["id","transformButton","type","button",1,"btn","btn-sm","btn-primary",3,"click","disabled"],[3,"icon"],["type","text","id","urlHelper","formControlName","urlHelper","aria-describedby","urlHelperExplanation",1,"form-control"],["id","urlHelperExplanation","jhiTranslate","artemisApp.videoUnit.createVideoUnit.urlHelperPlaceholder",1,"form-text","text-body-secondary"],["id","submitButton","type","submit",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","entity.action.submit"],[1,"alert","alert-danger"],["jhiTranslate","artemisApp.videoUnit.createVideoUnit.nameRequiredValidationError"],["jhiTranslate","artemisApp.videoUnit.createVideoUnit.nameMaxLengthValidationError"],["jhiTranslate","artemisApp.videoUnit.createVideoUnit.descriptionMaxLengthValidationError"],["jhiTranslate","artemisApp.videoUnit.createVideoUnit.sourceRequiredValidationError"],["jhiTranslate","artemisApp.videoUnit.createVideoUnit.sourceURLValidationError"],["jhiTranslate","artemisApp.videoUnit.createVideoUnit.urlHelperValidationError"],["type","button",1,"btn","btn-secondary",3,"click"],["jhiTranslate","entity.action.cancel"]],template:function(r,m){r&1&&(n(0,"form",0),e(1,`
    `),n(2,"div",1),e(3,`
        `),s(4,_e,106,33),o(),e(5,`
`),o(),e(6,`
`)),r&2&&(l(4),c(m.form?4:-1))},dependencies:[J,G,I,M,q,$,K,Q,O,te,S,ie,ee,Z],encapsulation:2})}return i})();export{ge as a,Ie as b};
//# sourceMappingURL=chunk-KO36B5XH.js.map
