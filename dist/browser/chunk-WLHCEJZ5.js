import{a as X}from"./chunk-IQWRONMP.js";import{d as z}from"./chunk-ZPITQMA6.js";import{a as K,c as L,d as Q,e as U}from"./chunk-HK7MJBP6.js";import{c as J}from"./chunk-JNO6DNVW.js";import{J as N,K as R,L as W,b as w,c as A,e as P,h as k,i as I,n as M,p as j,s as V,v as O}from"./chunk-WA5GEAJB.js";import{d as B}from"./chunk-EDXSOKK5.js";import{i as q}from"./chunk-Z4VHWOB5.js";import{a as H}from"./chunk-U54OSGNH.js";import{Cd as E,Db as o,Dc as y,Ea as x,La as T,Ma as f,Mc as h,Na as C,Oc as c,Rc as F,Tb as v,Va as b,Zb as p,cd as D,dd as e,kc as u,mc as _,pd as G,sc as s,xc as l,yc as a,yd as S,zc as n}from"./chunk-5LC5EQRR.js";import{a as g}from"./chunk-3E746U5Y.js";function Y(r,m){r&1&&(e(0,`
                                `),n(1,"div",30),e(2,`
                            `))}function Z(r,m){r&1&&(e(0,`
                                `),n(1,"div",31),e(2,`
                            `))}function $(r,m){r&1&&(e(0,`
                                `),n(1,"div",32),e(2,`
                            `))}function ee(r,m){if(r&1&&(e(0,`
                        `),l(1,"div",29),e(2,`
                            `),p(3,Y,3,0)(4,Z,3,0)(5,$,3,0),a(),e(6,`
                    `)),r&2){let i=c(2);o(3),s(!(i.periodControl==null||i.periodControl.errors==null)&&i.periodControl.errors.owlRequiredDateTimeRange||!(i.periodControl==null||i.periodControl.errors==null)&&i.periodControl.errors.required?3:-1),o(),s(!(i.periodControl==null||i.periodControl.errors==null)&&i.periodControl.errors.owlDateTimeParse?4:-1),o(),s(!(i.periodControl==null||i.periodControl.errors==null)&&i.periodControl.errors.owlDateTimeRange?5:-1)}}function te(r,m){r&1&&(e(0,`
                                `),n(1,"div",33),e(2,`
                            `))}function ie(r,m){if(r&1){let i=y();e(0,`
            `),l(1,"form",3),h("ngSubmit",function(){f(i);let d=c();return C(d.submitForm())}),e(2,`
                `),e(3,`
                `),l(4,"div",4),e(5,`
                    `),n(6,"label",5),e(7,`
                    `),l(8,"div",6),e(9,`
                        `),l(10,"input",7),S(11,"artemisDateRange"),h("focus",function(){f(i);let d=c();return C(d.markPeriodAsTouched())}),a(),e(12,`
                        `),n(13,"input",8),e(14,`
                        `),l(15,"button",9),e(16,`
                            `),n(17,"fa-icon",10),e(18,`
                        `),a(),e(19,`
                        `),n(20,"owl-date-time",11,0),e(22,`
                    `),a(),e(23,`
                    `),n(24,"div",12),e(25,`
                    `),p(26,ee,7,3),l(27,"div",13),e(28,`
                        `),l(29,"div",14),e(30,`
                            `),n(31,"input",15),e(32,`
                            `),n(33,"label",16),e(34,`
                            `),n(35,"small",17),e(36,`
                            `),p(37,te,3,0),a(),e(38,`
                        `),e(39,`
                        `),l(40,"div",18),e(41,`
                            `),n(42,"label",19),e(43,`
                            `),l(44,"div",20),e(45,`
                                `),n(46,"input",21),e(47,`
                                `),n(48,"label",22),e(49,`
                                `),n(50,"input",23),e(51,`
                                `),n(52,"label",24),e(53,`
                            `),a(),e(54,`
                            `),n(55,"small",25),e(56,`
                        `),a(),e(57,`
                    `),a(),e(58,`
                `),a(),e(59,`
                `),l(60,"div",26),e(61,`
                    `),l(62,"div",2),e(63,`
                        `),l(64,"button",27),e(65,`
                            `),n(66,"span",28),e(67,`
                        `),a(),e(68,`
                    `),a(),e(69,`
                `),a(),e(70,`
            `),a(),e(71,`
        `)}if(r&2){let i=D(21),t=c();o(),u("formGroup",t.form),o(9),_("is-invalid",t.isPeriodInvalid),u("value",E(11,19,t.periodControl==null?null:t.periodControl.value,"long-date",void 0,!0))("owlDateTimeTrigger",i),o(3),u("owlDateTime",i)("selectMode","range"),o(2),u("owlDateTimeTrigger",i),o(2),u("icon",t.faCalendarAlt),o(3),u("firstDayOfWeek",1)("pickerType","calendar"),o(6),s(t.periodControl!=null&&t.periodControl.invalid&&(t.periodControl!=null&&t.periodControl.dirty||t.periodControl!=null&&t.periodControl.touched)?26:-1),o(),u("hidden",!t.isMessagingEnabled(t.course)),o(10),s(t.showChannelDeletionWarning?37:-1),o(3),u("hidden",!(t.useTutorialGroupChannelsControl!=null&&t.useTutorialGroupChannelsControl.value)),o(6),u("value",!0),o(4),u("value",!1),o(14),u("disabled",!t.isSubmitPossible),o(2),F("jhiTranslate",t.isEditMode?"global.generic.edit":"global.generic.create")}}var be=(()=>{class r{fb=x(N);formData={period:void 0,usePublicTutorialGroupChannels:!1,useTutorialGroupChannels:!1};isEditMode=!1;formSubmitted=new b;course;faCalendarAlt=q;isMessagingEnabled=z;existingChannelSetting;form;get periodControl(){return this.form.get("period")}get useTutorialGroupChannelsControl(){return this.form.get("useTutorialGroupChannels")}get usePublicTutorialGroupChannelsControl(){return this.form.get("usePublicTutorialGroupChannels")}get isSubmitPossible(){return!this.form.invalid}ngOnInit(){this.initializeForm()}ngOnChanges(){this.initializeForm(),this.isEditMode&&this.formData&&this.setFormValues(this.formData)}setFormValues(i){this.existingChannelSetting=i.useTutorialGroupChannels,this.form.patchValue(i)}get showChannelDeletionWarning(){return!this.isEditMode||this.existingChannelSetting===void 0?!1:this.existingChannelSetting&&this.useTutorialGroupChannelsControl?.value===!1}initializeForm(){this.form||(this.form=this.fb.group({period:[void 0,P.required],useTutorialGroupChannels:[!1],usePublicTutorialGroupChannels:[!1]}))}submitForm(){this.formSubmitted.emit(g({},this.form.value))}get isPeriodInvalid(){return this.periodControl?this.periodControl.invalid&&(this.periodControl.touched||this.periodControl.dirty):!1}markPeriodAsTouched(){this.periodControl&&this.periodControl.markAsTouched()}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=v({type:r,selectors:[["jhi-tutorial-groups-configuration-form"]],inputs:{formData:"formData",isEditMode:"isEditMode",course:"course"},outputs:{formSubmitted:"formSubmitted"},features:[G([J]),T],decls:7,vars:1,consts:[["period",""],[1,"row"],[1,"col-12"],[1,"row",3,"ngSubmit","formGroup"],[1,"col-auto"],["for","period","jhiTranslate","artemisApp.forms.configurationForm.periodInput.label",1,"form-label"],[1,"input-group"],["name","period","id","period","required","","readonly","",1,"form-control",3,"focus","value","owlDateTimeTrigger"],["formControlName","period",1,"date-time-picker-anchor",3,"owlDateTime","selectMode"],["type","button",1,"btn","btn-secondary",3,"owlDateTimeTrigger"],[3,"icon"],[3,"firstDayOfWeek","pickerType"],["jhiTranslate","artemisApp.forms.configurationForm.periodInput.explanation",1,"form-text"],[3,"hidden"],[1,"form-check"],["type","checkbox","formControlName","useTutorialGroupChannels","id","useTutorialGroupChannels",1,"form-check-input"],["for","useTutorialGroupChannels","jhiTranslate","artemisApp.forms.configurationForm.useTutorialGroupChannelsInput.label",1,"form-check-label"],["id","channelHelp","jhiTranslate","artemisApp.forms.configurationForm.useTutorialGroupChannelsInput.explanation",1,"form-text","text-body-secondary","d-block"],[1,"form-group",3,"hidden"],["jhiTranslate","artemisApp.dialogs.createChannel.channelForm.isPublicInput.label",1,"d-block"],["role","group",1,"btn-group"],["formControlName","usePublicTutorialGroupChannels","type","radio","id","public","autocomplete","off","checked","",1,"btn-check",3,"value"],["for","public","jhiTranslate","artemisApp.dialogs.createChannel.channelForm.isPublicInput.public",1,"btn","btn-outline-secondary"],["formControlName","usePublicTutorialGroupChannels","type","radio","id","private","autocomplete","off",1,"btn-check",3,"value"],["for","private","jhiTranslate","artemisApp.dialogs.createChannel.channelForm.isPublicInput.private",1,"btn","btn-outline-secondary"],["id","isPublicHelp","jhiTranslate","artemisApp.dialogs.createChannel.channelForm.isPublicInput.explanation",1,"form-text","text-body-secondary","d-block"],[1,"row","mt-2"],["id","submitButton","type","submit",1,"btn","btn-primary",3,"disabled"],[3,"jhiTranslate"],[1,"alert","alert-danger"],["jhiTranslate","artemisApp.forms.configurationForm.periodInput.requiredValidationError"],["jhiTranslate","artemisApp.forms.configurationForm.periodInput.parseError"],["jhiTranslate","artemisApp.forms.configurationForm.periodInput.invalidRangeError"],["role","alert","id","channelDeletionWarning","jhiTranslate","artemisApp.forms.configurationForm.useTutorialGroupChannelsInput.channelDeletionWarning",1,"alert","alert-danger"]],template:function(t,d){t&1&&(l(0,"div",1),e(1,`
    `),l(2,"div",2),e(3,`
        `),p(4,ie,72,24),a(),e(5,`
`),a(),e(6,`
`)),t&2&&(o(4),s(d.form?4:-1))},dependencies:[R,M,A,w,j,k,I,W,V,O,H,U,K,Q,L,B,X],styles:[".date-time-picker-anchor[_ngcontent-%COMP%]{visibility:hidden;width:0}"],changeDetection:0})}return r})();export{be as a};
//# sourceMappingURL=chunk-WLHCEJZ5.js.map
