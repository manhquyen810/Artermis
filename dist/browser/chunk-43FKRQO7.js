import{a as K,b as Pt}from"./chunk-7YN5BABD.js";import{a as Bt}from"./chunk-XWRIJITX.js";import{a as Rt,b as zt}from"./chunk-UCG4CBUM.js";import{a as R}from"./chunk-X237AILQ.js";import{b as dt}from"./chunk-T624HJJL.js";import{a as Vt,c as kt,d as Ot,e as Lt}from"./chunk-HK7MJBP6.js";import{a as mt,b as k,c as q,d as jt}from"./chunk-AR57MWOI.js";import{c as N}from"./chunk-5MVJAZRV.js";import{b as Ut,c as ct}from"./chunk-JNO6DNVW.js";import{H as Mt,I as It,u as A,v as Z}from"./chunk-VZRSC3LP.js";import{J as nt,K as rt,L as at,c as J,e as P,h as X,i as tt,n as et,s as it,v as ot}from"./chunk-WA5GEAJB.js";import{a as O}from"./chunk-K3W6YFKH.js";import{c as M}from"./chunk-JXJXC4DZ.js";import{d as L}from"./chunk-EDXSOKK5.js";import{Bb as pt,Lc as Ft,S as lt,hb as ut,i as st}from"./chunk-Z4VHWOB5.js";import{a as V}from"./chunk-NOBD5HSR.js";import{a as b}from"./chunk-U54OSGNH.js";import{i as At}from"./chunk-M6Z6DKZQ.js";import{Ad as H,Cd as Y,Db as r,Dc as h,Dd as Dt,Ea as f,Id as Q,La as Ct,Ma as x,Mc as _,Na as S,Oc as u,P as j,Rc as Gt,Tb as T,Uc as vt,Va as w,Wb as gt,Zb as d,aa as U,cd as Tt,dd as t,ed as bt,f as v,fd as y,gd as yt,j as I,kc as p,mc as ht,pa as C,pd as Et,qd as $,r as F,ra as _t,rd as D,sc as m,sd as wt,xc as a,yc as s,yd as G,z as St,zc as l,zd as E}from"./chunk-5LC5EQRR.js";import{a as xt}from"./chunk-3E746U5Y.js";var Qt=i=>({title:i}),Jt=i=>({capacity:i});function Xt(i,c){if(i&1&&(t(0,`
                    `),l(1,"div",6),t(2,`
                `)),i&2){let e=u(2);r(),p("translateValues",D(1,Jt,e.tutorialGroup.capacity))}}function te(i,c){if(i&1&&(t(0,`
                                `),a(1,"span"),t(2),l(3,"span",8),t(4," "),s(),t(5,`
                            `)),i&2){let e=u(3);r(2),y("",e.filteredUsersSize," ")}}function ee(i,c){if(i&1&&(t(0,`
                        `),a(1,"span"),t(2,`
                            `),a(3,"span"),t(4),s(),t(5,`
                            `),d(6,te,6,1),t(7),l(8,"span",7),t(9,`
                        `),s(),t(10,`
                    `)),i&2){let e=u(2);r(4),y("",e.tutorialGroup.title," - "),r(2),m(e.filteredUsersSize<e.registeredStudents.length?6:-1),r(),y(`
                            `,e.registeredStudents.length,`
                            `),r(),p("jhiTranslate","artemisApp.course.students")}}function ie(i,c){if(i&1){let e=h();t(0,`
        `),a(1,"div"),t(2,`
            `),a(3,"div",1),t(4,`
                `),l(5,"h4",2),t(6,`
                `),a(7,"button",3),_("click",function(){x(e);let n=u();return S(n.clear())}),s(),t(8,`
            `),s(),t(9,`
            `),a(10,"div",4),t(11,`
                `),d(12,Xt,3,3),a(13,"jhi-course-group",5),_("importFinish",function(){x(e);let n=u();return S(n.loadAll())}),t(14,`
                    `),d(15,ee,11,4),s(),t(16,`
            `),s(),t(17,`
        `),s(),t(18,`
    `)}if(i&2){let e=u();r(5),p("translateValues",D(14,Qt,e.tutorialGroup.title)),r(7),m(e.capacityReached?12:-1),r(),p("tutorialGroup",e.tutorialGroup)("allGroupUsers",e.registeredStudents)("courseGroup",e.courseGroup)("isLoadingAllGroupUsers",e.isLoading)("isAdmin",e.isAdmin)("course",e.course)("userSearch",e.userSearch)("addUserToGroup",e.addToGroup)("removeUserFromGroup",e.removeFromGroup)("exportFileName",e.exportFilename)("handleUsersSizeChange",e.handleUsersSizeChange),r(2),m(e.tutorialGroup?15:-1)}}var Nt=(()=>{class i{activeModal=f(A);tutorialGroupService=f(q);alertService=f(M);courseService=f(jt);cdr=f(Q);course;tutorialGroupId;tutorialGroup;isLoading=!1;registeredStudents=[];courseGroup="students";isAdmin=!1;filteredUsersSize=0;numberOfRegistrations=0;registrationsChanged=!1;isInitialized=!1;ngUnsubscribe=new v;get capacityReached(){return!this.tutorialGroup||this.tutorialGroup.capacity===void 0||this.tutorialGroup.capacity===null?!1:this.numberOfRegistrations>=this.tutorialGroup.capacity}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}initialize(){!this.tutorialGroupId||!this.course?V("Error: Component not fully configured"):(this.isInitialized=!0,this.loadAll())}handleUsersSizeChange=e=>this.filteredUsersSize=e;addToGroup=e=>this.tutorialGroupService.registerStudent(this.course.id,this.tutorialGroup.id,e).pipe(_t({next:()=>{this.registrationsChanged=!0,this.numberOfRegistrations++}}));removeFromGroup=e=>this.tutorialGroupService.deregisterStudent(this.course.id,this.tutorialGroup.id,e).pipe(_t({next:()=>{this.registrationsChanged=!0,this.numberOfRegistrations--}}));userSearch=e=>this.courseService.searchStudents(this.course.id,e);get exportFilename(){return this.course&&this.tutorialGroup?this.course.title+" "+this.tutorialGroup.title:"RegisteredStudents"}loadAll=()=>{this.tutorialGroupService.getOneOfCourse(this.course.id,this.tutorialGroupId).pipe(U(()=>this.isLoading=!1),C(this.ngUnsubscribe)).subscribe({next:e=>{e.body&&(this.tutorialGroup=e.body,this.tutorialGroup.registrations||(this.tutorialGroup.registrations=[]),this.registeredStudents=this.tutorialGroup.registrations.map(o=>o.student),this.numberOfRegistrations=this.registeredStudents.length)},error:e=>N(this.alertService,e)}).add(()=>this.cdr.detectChanges())};clear(){this.registrationsChanged?this.activeModal.close():this.activeModal.dismiss()}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=T({type:i,selectors:[["jhi-registered-students"]],inputs:{course:"course",tutorialGroupId:"tutorialGroupId"},decls:4,vars:2,consts:[[3,"isLoading"],[1,"modal-header"],["jhiTranslate","artemisApp.pages.registeredStudents.header",1,"modal-title",3,"translateValues"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],[3,"importFinish","tutorialGroup","allGroupUsers","courseGroup","isLoadingAllGroupUsers","isAdmin","course","userSearch","addUserToGroup","removeUserFromGroup","exportFileName","handleUsersSizeChange"],["role","alert","jhiTranslate","artemisApp.pages.registeredStudents.capacityWarning",1,"alert","alert-warning",3,"translateValues"],[3,"jhiTranslate"],["jhiTranslate","artemisApp.course.courseGroup.outOf"]],template:function(o,n){o&1&&(a(0,"jhi-loading-indicator-container",0),t(1,`
    `),d(2,ie,19,16),s(),t(3,`
`)),o&2&&(p("isLoading",n.isLoading),r(2),m(n.isInitialized&&n.tutorialGroup?2:-1))},dependencies:[R,b,Bt],encapsulation:2,changeDetection:0})}return i})();var ne=i=>({timeZone:i}),re=i=>[i,"long-date",!1,void 0,!0],ae=()=>({max:"2000"});function se(i,c){i&1&&(t(0,`
                                `),l(1,"div",26),t(2,`
                            `))}function le(i,c){i&1&&(t(0,`
                                `),l(1,"div",27),t(2,`
                            `))}function ue(i,c){if(i&1&&(t(0,`
                        `),a(1,"div",25),t(2,`
                            `),d(3,se,3,0)(4,le,3,0),s(),t(5,`
                    `)),i&2){let e=u(2);r(3),m(!(e.dateControl==null||e.dateControl.errors==null)&&e.dateControl.errors.required?3:-1),r(),m(!(e.dateControl==null||e.dateControl.errors==null)&&e.dateControl.errors.owlDateTimeParse?4:-1)}}function pe(i,c){i&1&&(t(0,`
                                `),l(1,"div",28),t(2,`
                            `))}function me(i,c){if(i&1&&(t(0,`
                        `),a(1,"div",25),t(2,`
                            `),d(3,pe,3,0),s(),t(4,`
                    `)),i&2){let e=u(2);r(3),m(!(e.startTimeControl==null||e.startTimeControl.errors==null)&&e.startTimeControl.errors.required?3:-1)}}function ce(i,c){i&1&&(t(0,`
                                `),l(1,"div",28),t(2,`
                            `))}function de(i,c){if(i&1&&(t(0,`
                        `),a(1,"div",25),t(2,`
                            `),d(3,ce,3,0),s(),t(4,`
                    `)),i&2){let e=u(2);r(3),m(!(e.endTimeControl==null||e.endTimeControl.errors==null)&&e.endTimeControl.errors.required?3:-1)}}function fe(i,c){i&1&&(t(0,`
                                `),l(1,"div",29),t(2,`
                            `))}function _e(i,c){if(i&1&&(t(0,`
                        `),a(1,"div"),t(2,`
                            `),d(3,fe,3,0),s(),t(4,`
                    `)),i&2){let e=u(2);r(3),m(!(e.form==null||e.form.errors==null)&&e.form.errors.invalidTimeRange?3:-1)}}function xe(i,c){i&1&&(t(0,`
                                `),l(1,"div",30),t(2,`
                            `)),i&2&&(r(),p("translateValues",$(1,ae)))}function Se(i,c){i&1&&(t(0,`
                                `),l(1,"div",31),t(2,`
                            `))}function Ce(i,c){if(i&1&&(t(0,`
                        `),a(1,"div",25),t(2,`
                            `),d(3,xe,3,2)(4,Se,3,0),s(),t(5,`
                    `)),i&2){let e=u(2);r(3),m(!(e.locationControl==null||e.locationControl.errors==null)&&e.locationControl.errors.maxlength?3:-1),r(),m(!(e.locationControl==null||e.locationControl.errors==null)&&e.locationControl.errors.required?4:-1)}}function ge(i,c){if(i&1){let e=h();t(0,`
            `),a(1,"form",5),_("ngSubmit",function(){x(e);let n=u();return S(n.submitForm())}),t(2,`
                `),t(3,`
                `),a(4,"div"),t(5,`
                    `),l(6,"label",6),t(7,`
                    `),a(8,"div",7),t(9,`
                        `),l(10,"input",8),t(11,`
                        `),a(12,"input",9),G(13,"artemisDate"),_("focus",function(){x(e);let n=u();return S(n.markDateAsTouched())}),s(),t(14,`
                        `),a(15,"button",10),l(16,"fa-icon",11),s(),t(17,`
                        `),l(18,"owl-date-time",12,0),t(20,`
                    `),s(),t(21,`
                    `),d(22,ue,6,2),s(),t(23,`
                `),t(24,`
                `),a(25,"div"),t(26,`
                    `),a(27,"div",1),t(28,`
                        `),a(29,"div",13),t(30,`
                            `),l(31,"span",14),t(32,`
                        `),s(),t(33,`
                        `),a(34,"div",15),t(35,`
                            `),l(36,"ngb-timepicker",16),t(37,`
                        `),s(),t(38,`
                        `),a(39,"div",13),t(40,`
                            `),l(41,"span",17),t(42,`
                        `),s(),t(43,`
                        `),a(44,"div",13),t(45,`
                            `),l(46,"ngb-timepicker",18),t(47,`
                        `),s(),t(48,`
                    `),s(),t(49,`
                    `),d(50,me,5,1)(51,de,5,1)(52,_e,5,1),s(),t(53,`
                `),t(54,`
                `),a(55,"div",19),t(56,`
                    `),l(57,"label",20),t(58,`
                    `),l(59,"textarea",21),G(60,"artemisTranslate"),t(61,`
                    `),d(62,Ce,6,2),s(),t(63,`
                `),a(64,"div",22),t(65,`
                    `),a(66,"div",4),t(67,`
                        `),a(68,"button",23),t(69,`
                            `),l(70,"span",24),t(71,`
                        `),s(),t(72,`
                    `),s(),t(73,`
                `),s(),t(74,`
            `),s(),t(75,`
        `)}if(i&2){let e=Tt(19),o=u();r(),p("formGroup",o.form),r(9),p("owlDateTime",e),r(2),ht("is-invalid",o.isDateInvalid),p("value",Dt(13,23,D(31,re,o.dateControl==null?null:o.dateControl.value)))("owlDateTimeTrigger",e),r(3),p("owlDateTimeTrigger",e),r(),p("icon",o.faCalendarAlt),r(2),p("firstDayOfWeek",1)("pickerType","calendar")("pickerMode","dialog"),r(4),m(o.dateControl!=null&&o.dateControl.invalid&&(o.dateControl!=null&&o.dateControl.dirty||o.dateControl!=null&&o.dateControl.touched)?22:-1),r(14),p("hourStep",1)("minuteStep",15),r(10),p("hourStep",1)("minuteStep",15),r(4),m(o.startTimeControl!=null&&o.startTimeControl.invalid&&(o.startTimeControl!=null&&o.startTimeControl.dirty||o.startTimeControl!=null&&o.startTimeControl.touched)?50:-1),r(),m(o.endTimeControl!=null&&o.endTimeControl.invalid&&(o.endTimeControl!=null&&o.endTimeControl.dirty||o.endTimeControl!=null&&o.endTimeControl.touched)?51:-1),r(),m(o.form!=null&&o.form.invalid&&(o.form!=null&&o.form.dirty||o.form!=null&&o.form.touched)?52:-1),r(7),p("placeholder",E(60,29,"artemisApp.forms.sessionForm.locationInput.placeholder")),r(3),m(o.locationControl!=null&&o.locationControl.invalid&&(o.locationControl!=null&&o.locationControl.dirty||o.locationControl!=null&&o.locationControl.touched)?62:-1),r(6),p("disabled",!o.isSubmitPossible),r(2),Gt("jhiTranslate",o.isEditMode?"global.generic.edit":"global.generic.create")}}var ft=(()=>{class i{fb=f(nt);formData={date:void 0,startTime:void 0,endTime:void 0,location:void 0};timeZone;isEditMode=!1;formSubmitted=new w;faCalendarAlt=st;form;get isDateInvalid(){return this.dateControl?this.dateControl.invalid&&(this.dateControl.touched||this.dateControl.dirty):!1}markDateAsTouched(){this.dateControl&&this.dateControl.markAsTouched()}get dateControl(){return this.form.get("date")}get startTimeControl(){return this.form.get("startTime")}get endTimeControl(){return this.form.get("endTime")}get locationControl(){return this.form.get("location")}get isSubmitPossible(){return!this.form.invalid}ngOnInit(){this.initializeForm()}ngOnChanges(){this.initializeForm(),this.isEditMode&&this.formData&&this.setFormValues(this.formData)}submitForm(){let e=xt({},this.form.value);this.formSubmitted.emit(e)}setFormValues(e){this.form.patchValue(e)}initializeForm(){this.form||(this.form=this.fb.group({startTime:["13:00:00",[P.required]],endTime:["14:00:00",[P.required]],date:[void 0,[P.required]],location:[void 0,[P.required]]},{validators:zt}))}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=T({type:i,selectors:[["jhi-tutorial-group-session-form"]],inputs:{formData:"formData",timeZone:"timeZone",isEditMode:"isEditMode"},outputs:{formSubmitted:"formSubmitted"},features:[Et([{provide:Mt,useClass:Rt}]),Ct],decls:12,vars:4,consts:[["date",""],[1,"row"],[1,"col-12","mb-2"],["jhiTranslate","artemisApp.generic.timeZone",1,"alert","alert-info",3,"translateValues"],[1,"col-12"],[1,"row",3,"ngSubmit","formGroup"],["for","date","jhiTranslate","artemisApp.forms.sessionForm.dateInput.label",1,"form-label"],[1,"input-group"],["formControlName","date",1,"d-none",3,"owlDateTime"],["name","date","id","date","required","","readonly","",1,"form-control",3,"focus","value","owlDateTimeTrigger"],["type","button",1,"btn","btn-secondary",3,"owlDateTimeTrigger"],[3,"icon"],[3,"firstDayOfWeek","pickerType","pickerMode"],[1,"col-auto","my-auto"],["jhiTranslate","artemisApp.forms.sessionForm.timeInput.from"],[1,"col-auto"],["formControlName","startTime",3,"hourStep","minuteStep"],["jhiTranslate","artemisApp.forms.sessionForm.timeInput.to"],["formControlName","endTime",3,"hourStep","minuteStep"],[1,"form-group"],["for","location","jhiTranslate","artemisApp.forms.sessionForm.locationInput.labelOnline"],["id","location","rows","1","formControlName","location",1,"form-control",3,"placeholder"],[1,"row","mt-2"],["id","submitButton","type","submit",1,"btn","btn-primary",3,"disabled"],[3,"jhiTranslate"],[1,"alert","alert-danger"],["jhiTranslate","artemisApp.forms.sessionForm.dateInput.requiredDateError"],["jhiTranslate","artemisApp.forms.sessionForm.dateInput.parseError"],["jhiTranslate","artemisApp.forms.sessionForm.timeInput.invalidTimeRange"],["jhiTranslate","artemisApp.forms.sessionForm.timeInput.invalidTimeRange",1,"alert","alert-danger"],["jhiTranslate","artemisApp.forms.sessionForm.locationInput.maxLengthValidationError",3,"translateValues"],["jhiTranslate","artemisApp.forms.sessionForm.locationInput.requiredValidationError"]],template:function(o,n){o&1&&(a(0,"div",1),t(1,`
    `),a(2,"div",2),t(3,`
        `),l(4,"div",3),t(5,`
    `),s(),t(6,`
    `),a(7,"div",4),t(8,`
        `),d(9,ge,76,33),s(),t(10,`
`),s(),t(11,`
`)),o&2&&(r(4),p("translateValues",D(2,ne,n.timeZone)),r(5),m(n.form?9:-1))},dependencies:[b,rt,et,J,X,tt,at,it,ot,Lt,Vt,Ot,kt,L,It,ct,O],encapsulation:2,changeDetection:0})}return i})();function he(i,c){if(i&1){let e=h();t(0,`
        `),a(1,"div"),t(2,`
            `),a(3,"div",1),t(4,`
                `),l(5,"h4",2),t(6,`
                `),a(7,"button",3),_("click",function(){x(e);let n=u();return S(n.clear())}),s(),t(8,`
            `),s(),t(9,`
            `),a(10,"div",4),t(11,`
                `),a(12,"jhi-tutorial-group-session-form",5),_("formSubmitted",function(n){x(e);let g=u();return S(g.createTutorialGroupSession(n))}),s(),t(13,`
            `),s(),t(14,`
        `),s(),t(15,`
    `)}if(i&2){let e=u();r(12),p("isEditMode",!1)("timeZone",e.course.timeZone)}}var Zt=(()=>{class i{activeModal=f(A);tutorialGroupSessionService=f(k);alertService=f(M);ngUnsubscribe=new v;tutorialGroupSessionToCreate=new mt;isLoading;tutorialGroup;course;isInitialized=!1;initialize(){!this.course||!this.tutorialGroup?V("Error: Component not fully configured"):this.isInitialized=!0}createTutorialGroupSession(e){let{date:o,startTime:n,endTime:g,location:W}=e;this.tutorialGroupSessionToCreate.date=o,this.tutorialGroupSessionToCreate.startTime=n,this.tutorialGroupSessionToCreate.endTime=g,this.tutorialGroupSessionToCreate.location=W,this.isLoading=!0,this.tutorialGroupSessionService.create(this.course.id,this.tutorialGroup.id,this.tutorialGroupSessionToCreate).pipe(U(()=>{this.isLoading=!1}),C(this.ngUnsubscribe)).subscribe({next:()=>{this.activeModal.close()},error:B=>{this.onError(B),this.clear()}})}onError(e){let o=e.error;o&&o.errorKey&&o.errorKey==="sessionOverlapsWithSession"?this.alertService.error(o.message,o.params):this.alertService.error("error.unexpectedError",{error:e.message})}clear(){this.activeModal.dismiss()}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=T({type:i,selectors:[["jhi-create-tutorial-group-session"]],inputs:{tutorialGroup:"tutorialGroup",course:"course"},decls:4,vars:2,consts:[[3,"isLoading"],[1,"modal-header"],["jhiTranslate","artemisApp.pages.createTutorialSession.title",1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],[3,"formSubmitted","isEditMode","timeZone"]],template:function(o,n){o&1&&(a(0,"jhi-loading-indicator-container",0),t(1,`
    `),d(2,he,16,2),s(),t(3,`
`)),o&2&&(p("isLoading",n.isLoading),r(2),m(n.isInitialized?2:-1))},dependencies:[R,b,ft],encapsulation:2,changeDetection:0})}return i})();var Ge=i=>({label:i}),ve=()=>({max:"256"});function Te(i,c){i&1&&(t(0,`
                            `),l(1,"div",12),t(2,`
                        `)),i&2&&(r(),p("translateValues",$(1,ve)))}function be(i,c){if(i&1&&(t(0,`
                    `),a(1,"div",11),t(2,`
                        `),d(3,Te,3,2),s(),t(4,`
                `)),i&2){let e=u(2);r(3),m(!(e.reasonControl==null||e.reasonControl.errors==null)&&e.reasonControl.errors.maxlength?3:-1)}}function ye(i,c){if(i&1&&(t(0,`
        `),a(1,"form",7),t(2,`
            `),a(3,"div",8),t(4,`
                `),l(5,"label",9),t(6,`
                `),l(7,"textarea",10),t(8,`
                `),d(9,be,5,1),s(),t(10,`
        `),s(),t(11,`
    `)),i&2){let e=u();r(),p("formGroup",e.form),r(8),m(e.reasonControl!=null&&e.reasonControl.invalid&&(e.reasonControl!=null&&e.reasonControl.dirty||e.reasonControl!=null&&e.reasonControl.touched)?9:-1)}}var qt=(()=>{class i{activeModal=f(A);tutorialGroupSessionService=f(k);alertService=f(M);fb=f(nt);ngUnsubscribe=new v;tutorialGroupSessionStatus=K;form;course;tutorialGroupId;tutorialGroupSession;ngOnInit(){this.initializeForm()}get reasonControl(){return this.form.get("reason")}initializeForm(){this.form=this.fb.group({reason:[void 0,[P.maxLength(255)]]})}get isSubmitPossible(){return!this.form.invalid}generateSessionLabel(e){return!e?.start||!e?.end?"":e.start.tz(this.course.timeZone).format("LLLL")+" - "+e.end.tz(this.course.timeZone).format("LT")}cancelOrActivate(){this.tutorialGroupSession.status===K.ACTIVE?this.cancelSession():this.activateSession()}cancelSession(){this.tutorialGroupSessionService.cancel(this.course.id,this.tutorialGroupId,this.tutorialGroupSession.id,this.reasonControl?.value).pipe(C(this.ngUnsubscribe)).subscribe({next:()=>{this.activeModal.close("confirmed")},error:e=>{N(this.alertService,e),this.activeModal.close("error")}})}activateSession(){this.tutorialGroupSessionService.activate(this.course.id,this.tutorialGroupId,this.tutorialGroupSession.id).pipe(C(this.ngUnsubscribe)).subscribe({next:()=>{this.activeModal.close("confirmed")},error:e=>{N(this.alertService,e),this.activeModal.close("error")}})}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=T({type:i,selectors:[["jhi-cancellation-modal"]],inputs:{course:"course",tutorialGroupId:"tutorialGroupId",tutorialGroupSession:"tutorialGroupSession"},decls:24,vars:11,consts:[[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],["id","dismiss-button","type","button","jhiTranslate","global.form.cancel",1,"btn","btn-outline-secondary",3,"click"],["id","cancel-activate-button","type","button","jhiTranslate","global.form.confirm",1,"btn","btn-success",3,"click","disabled"],[3,"formGroup"],[1,"form-group"],["for","reason","jhiTranslate","artemisApp.pages.tutorialGroupSessionManagement.cancelActivateModal.cancelSession.explanation"],["id","reason","rows","2","formControlName","reason",1,"form-control"],[1,"alert","alert-danger"],["jhiTranslate","artemisApp.pages.tutorialGroupSessionManagement.cancelActivateModal.cancelSession.maxLengthValidationError",3,"translateValues"]],template:function(o,n){o&1&&(a(0,"div",0),t(1,`
    `),a(2,"h4",1),t(3),G(4,"artemisTranslate"),s(),t(5,`
    `),a(6,"button",2),_("click",function(){return n.activeModal.dismiss()}),s(),t(7,`
`),s(),t(8,`
`),a(9,"div",3),t(10,`
    `),a(11,"p"),t(12),G(13,"artemisTranslate"),s(),t(14,`
    `),d(15,ye,12,2),s(),t(16,`
`),a(17,"div",4),t(18,`
    `),a(19,"button",5),_("click",function(){return n.activeModal.dismiss()}),s(),t(20,`
    `),a(21,"button",6),_("click",function(){return n.cancelOrActivate()}),s(),t(22,`
`),s(),t(23,`
`)),o&2&&(r(3),y(`
        `,E(4,4,n.tutorialGroupSession.status===n.tutorialGroupSessionStatus.ACTIVE?"artemisApp.pages.tutorialGroupSessionManagement.cancelActivateModal.cancelSession.title":"artemisApp.pages.tutorialGroupSessionManagement.cancelActivateModal.activateSession.title"),`
    `),r(9),y(`
        `,H(13,6,n.tutorialGroupSession.status===n.tutorialGroupSessionStatus.ACTIVE?"artemisApp.pages.tutorialGroupSessionManagement.cancelActivateModal.cancelSession.question":"artemisApp.pages.tutorialGroupSessionManagement.cancelActivateModal.activateSession.question",D(9,Ge,n.generateSessionLabel(n.tutorialGroupSession))),`
    `),r(3),m(n.tutorialGroupSession.status===n.tutorialGroupSessionStatus.ACTIVE?15:-1),r(6),p("disabled",!n.isSubmitPossible))},dependencies:[rt,et,J,X,tt,at,it,ot,b,O],encapsulation:2,changeDetection:0})}return i})();function Ee(i,c){if(i&1){let e=h();t(0,`
        `),a(1,"div"),t(2,`
            `),a(3,"div",1),t(4,`
                `),l(5,"h4",2),t(6,`
                `),a(7,"button",3),_("click",function(){x(e);let n=u();return S(n.clear())}),s(),t(8,`
            `),s(),t(9,`
            `),a(10,"div",4),t(11,`
                `),a(12,"jhi-tutorial-group-session-form",5),_("formSubmitted",function(n){x(e);let g=u();return S(g.updateSession(n))}),s(),t(13,`
            `),s(),t(14,`
        `),s(),t(15,`
    `)}if(i&2){let e=u();r(12),p("isEditMode",!0)("timeZone",e.course.timeZone)("formData",e.formData)}}var Wt=(()=>{class i{activeModal=f(A);tutorialGroupSessionService=f(k);alertService=f(M);ngUnsubscribe=new v;tutorialGroup;course;tutorialGroupSession;isLoading=!1;formData=void 0;isInitialized=!1;initialize(){!this.tutorialGroupSession||!this.course||!this.tutorialGroup?V("Error: Component not fully configured"):(this.formData={date:this.tutorialGroupSession.start?.tz(this.course.timeZone).toDate(),startTime:this.tutorialGroupSession.start?.tz(this.course.timeZone).format("HH:mm:ss"),endTime:this.tutorialGroupSession.end?.tz(this.course.timeZone).format("HH:mm:ss"),location:this.tutorialGroupSession.location},this.isInitialized=!0)}updateSession(e){let{date:o,startTime:n,endTime:g,location:W}=e,B=new mt;B.date=o,B.startTime=n,B.endTime=g,B.location=W,this.isLoading=!0,this.tutorialGroupSessionService.update(this.course.id,this.tutorialGroup.id,this.tutorialGroupSession.id,B).pipe(U(()=>{this.isLoading=!1}),C(this.ngUnsubscribe)).subscribe({next:()=>{this.activeModal.close()},error:Yt=>{this.onError(Yt),this.clear()}})}onError(e){let o=e.error;o&&o.errorKey&&o.errorKey==="sessionOverlapsWithSession"?this.alertService.error(o.message,o.params):this.alertService.error("error.unexpectedError",{error:e.message})}clear(){this.activeModal.dismiss()}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=T({type:i,selectors:[["jhi-edit-tutorial-group-session"]],inputs:{tutorialGroup:"tutorialGroup",course:"course",tutorialGroupSession:"tutorialGroupSession"},decls:4,vars:2,consts:[[3,"isLoading"],[1,"modal-header"],["jhiTranslate","artemisApp.pages.editTutorialSession.title",1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],[3,"formSubmitted","isEditMode","timeZone","formData"]],template:function(o,n){o&1&&(a(0,"jhi-loading-indicator-container",0),t(1,`
    `),d(2,Ee,16,3),s(),t(3,`
`)),o&2&&(p("isLoading",n.isLoading),r(2),m(n.isInitialized?2:-1))},dependencies:[R,b,ft],encapsulation:2,changeDetection:0})}return i})();function we(i,c){if(i&1){let e=h();t(0,`
        `),a(1,"button",5),_("click",function(){x(e);let n=u();return S(n.openCancellationDialog(n.tutorialGroupSession))}),t(2),G(3,"artemisTranslate"),s(),t(4,`
    `)}if(i&2){let e=u();r(),p("id","cancel-activate-"+e.tutorialGroupSession.id),r(),y(`
            `,E(3,2,e.tutorialGroupSession.status===e.tutorialGroupSessionStatus.CANCELLED?"artemisApp.pages.tutorialGroupSessionManagement.rowButtons.activate":"artemisApp.pages.tutorialGroupSessionManagement.rowButtons.cancel"),`
        `)}}var Kt=(()=>{class i{tutorialGroupSessionService=f(k);modalService=f(Z);ngUnsubscribe=new v;course;tutorialGroup;tutorialGroupSession;tutorialGroupSessionDeleted=new w;tutorialGroupEdited=new w;cancelOrActivatePressed=new w;tutorialGroupSessionStatus=K;dialogErrorSource=new v;dialogError$=this.dialogErrorSource.asObservable();faWrench=ut;faUsers=lt;faTrash=pt;deleteTutorialGroupSession=()=>{this.tutorialGroupSessionService.delete(this.course.id,this.tutorialGroup.id,this.tutorialGroupSession.id).pipe(C(this.ngUnsubscribe)).subscribe({next:()=>{this.dialogErrorSource.next(""),this.tutorialGroupSessionDeleted.emit()},error:e=>this.dialogErrorSource.next(e.message)})};openCancellationDialog(e){let o=this.modalService.open(qt,{size:"lg",scrollable:!1,backdrop:"static",animation:!1});o.componentInstance.tutorialGroupSession=e,o.componentInstance.course=this.course,o.componentInstance.tutorialGroupId=this.tutorialGroup.id,F(o.result).pipe(j(()=>I),C(this.ngUnsubscribe)).subscribe(n=>{n==="confirmed"&&this.cancelOrActivatePressed.emit()})}openEditSessionDialog(e){e.stopPropagation();let o=this.modalService.open(Wt,{size:"lg",scrollable:!1,backdrop:"static",animation:!1});o.componentInstance.course=this.course,o.componentInstance.tutorialGroup=this.tutorialGroup,o.componentInstance.tutorialGroupSession=this.tutorialGroupSession,o.componentInstance.initialize(),F(o.result).pipe(j(()=>I),C(this.ngUnsubscribe)).subscribe(()=>{this.tutorialGroupEdited.emit()})}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete(),this.dialogErrorSource.unsubscribe()}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=T({type:i,selectors:[["jhi-tutorial-group-session-row-buttons"]],inputs:{course:"course",tutorialGroup:"tutorialGroup",tutorialGroupSession:"tutorialGroupSession"},outputs:{tutorialGroupSessionDeleted:"tutorialGroupSessionDeleted",tutorialGroupEdited:"tutorialGroupEdited",cancelOrActivatePressed:"cancelOrActivatePressed"},decls:21,vars:26,consts:[[1,"btn-group","flex-btn-group-container"],["type","button",1,"btn","btn-warning","btn-sm","me-1",3,"click","id"],[3,"icon"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["jhiDeleteButton","","deleteQuestion","artemisApp.pages.tutorialGroupSessionManagement.deleteDialog.question",3,"delete","id","animation","entityTitle","dialogError"],["type","button",1,"btn","btn-secondary",3,"click","id"]],template:function(o,n){o&1&&(a(0,"div",0),t(1,`
    `),t(2,`
    `),d(3,we,5,4),a(4,"button",1),_("click",function(W){return n.openEditSessionDialog(W)}),t(5,`
        `),l(6,"fa-icon",2),t(7,`
        `),l(8,"span",3),t(9,`
    `),s(),t(10,`
    `),t(11,`
    `),a(12,"button",4),G(13,"artemisDate"),G(14,"artemisDate"),G(15,"artemisDate"),_("delete",function(){return n.deleteTutorialGroupSession()}),t(16,`
        `),l(17,"fa-icon",2),t(18,`
    `),s(),t(19,`
`),s(),t(20,`
`)),o&2&&(r(3),m(n.tutorialGroupSession.tutorialGroupFreePeriod?-1:3),r(),p("id","edit-"+n.tutorialGroupSession.id),r(2),p("icon",n.faWrench),r(6),vt("entityTitle","",Y(13,11,n.tutorialGroupSession.start,"short-date",!1,n.course.timeZone),`
    `,Y(14,16,n.tutorialGroupSession.start,"time",!1,n.course.timeZone),` -
    `,Y(15,21,n.tutorialGroupSession.end,"time",!1,n.course.timeZone),""),p("id","delete-"+n.tutorialGroupSession.id)("animation",!1)("dialogError",n.dialogError$),r(5),p("icon",n.faTrash))},dependencies:[L,b,dt,ct,O],encapsulation:2,changeDetection:0})}return i})();var $t=(()=>{class i{transform(e){return e?e.length===5?e:e.split(":").slice(0,2).join(":"):""}static \u0275fac=function(o){return new(o||i)};static \u0275pipe=gt({name:"removeSeconds",type:i,pure:!0})}return i})();var De=i=>({n:i});function Ae(i,c){i&1&&(t(0,`
                                `),l(1,"span",12),t(2,`
                            `))}function Me(i,c){i&1&&(t(0,`
                                `),l(1,"span",13),t(2,`
                            `))}function Ie(i,c){if(i&1&&(t(0,`
                            `),a(1,"span"),t(2),G(3,"artemisTranslate"),G(4,"removeSeconds"),G(5,"removeSeconds"),s(),t(6,`
                            `),l(7,"br"),t(8,`
                            `),d(9,Ae,3,0)(10,Me,3,0),t(11),l(12,"br"),t(13,`
                            `),a(14,"span"),t(15),G(16,"artemisTranslate"),s(),t(17,`
                        `)),i&2){let e=u(3);r(2),bt(E(3,5,e.getDayTranslationKey(e.tutorialGroup.tutorialGroupSchedule==null?null:e.tutorialGroup.tutorialGroupSchedule.dayOfWeek))+" "+E(4,7,e.tutorialGroup.tutorialGroupSchedule==null?null:e.tutorialGroup.tutorialGroupSchedule.startTime)+"-"+E(5,9,e.tutorialGroup.tutorialGroupSchedule==null?null:e.tutorialGroup.tutorialGroupSchedule.endTime)),r(7),m(e.tutorialGroup.isOnline?9:-1),r(),m(e.tutorialGroup.isOnline?-1:10),r(),y(`
                            : `,e.tutorialGroup.tutorialGroupSchedule==null?null:e.tutorialGroup.tutorialGroupSchedule.location,`
                            `),r(4),y(`
                                `,H(16,11,e.tutorialGroup.tutorialGroupSchedule.repetitionFrequency===1?"artemisApp.entities.tutorialGroupSchedule.repetitionOneWeek":"artemisApp.entities.tutorialGroupSchedule.repetitionNWeeks",D(14,De,e.tutorialGroup.tutorialGroupSchedule.repetitionFrequency)),`
                            `)}}function Fe(i,c){i&1&&(t(0,`
                            `),l(1,"span",14),t(2,`
                        `))}function je(i,c){if(i&1&&(t(0,`
                `),a(1,"div",10),t(2,`
                    `),t(3,`
                    `),a(4,"dt"),t(5,`
                        `),l(6,"span",11),t(7,`
                    `),s(),t(8,`
                    `),a(9,"dd"),t(10,`
                        `),d(11,Ie,18,16)(12,Fe,3,0),l(13,"br"),t(14,`
                    `),s(),t(15,`
                `),s(),t(16,`
            `)),i&2){let e=u(2);r(11),m(e.tutorialGroup.tutorialGroupSchedule?11:12)}}function Ue(i,c){if(i&1){let e=h();t(0,`
                        `),a(1,"jhi-tutorial-group-session-row-buttons",15),_("cancelOrActivatePressed",function(){x(e);let n=u(2);return S(n.loadAll())})("tutorialGroupSessionDeleted",function(){x(e);let n=u(2);return S(n.loadAll())})("tutorialGroupEdited",function(){x(e);let n=u(2);return S(n.loadAll())}),s(),t(2,`
                    `)}if(i&2){let e=c.$implicit,o=u(2);r(),p("tutorialGroupSession",e)("course",o.course)("tutorialGroup",o.tutorialGroup)}}function Ve(i,c){if(i&1){let e=h();t(0,`
        `),a(1,"div",1),t(2,`
            `),a(3,"div",2),t(4,`
                `),a(5,"h4"),t(6),G(7,"artemisTranslate"),s(),t(8,`
                `),a(9,"button",3),_("click",function(){x(e);let n=u();return S(n.clear())}),s(),t(10,`
            `),s(),t(11,`
            `),d(12,je,17,1),a(13,"div",4),t(14,`
                `),a(15,"button",5),_("click",function(n){x(e);let g=u();return S(g.openCreateSessionDialog(n))}),t(16,`
                    `),l(17,"fa-icon",6),t(18,`
                    `),l(19,"span",7),t(20,`
                `),s(),t(21,`
            `),s(),t(22,`
            `),a(23,"div",8),t(24,`
                `),a(25,"jhi-tutorial-group-sessions-table",9),_("attendanceUpdated",function(){x(e);let n=u();return S(n.attendanceUpdated=!0)}),t(26,`
                    `),d(27,Ue,3,3,"ng-template"),t(28,`
                `),s(),t(29,`
            `),s(),t(30,`
        `),s(),t(31,`
    `)}if(i&2){let e=u();r(6),yt("",E(7,8,"artemisApp.pages.tutorialGroupSessionManagement.title")," - ",e.tutorialGroup.title,""),r(6),m(e.tutorialGroup.tutorialGroupSchedule?12:-1),r(5),p("icon",e.faPlus),r(8),p("sessions",e.sessions)("timeZone",e.course.timeZone)("showIdColumn",!0)("tutorialGroup",e.tutorialGroup)}}var Ht=(()=>{class i{tutorialGroupService=f(q);alertService=f(M);modalService=f(Z);activeModal=f(A);cdr=f(Q);ngUnsubscribe=new v;isLoading=!1;faPlus=Ft;tutorialGroupId;course;tutorialGroup;sessions=[];tutorialGroupSchedule;attendanceUpdated=!1;isInitialized=!1;initialize(){!this.tutorialGroupId||!this.course?V("Error: Component not fully configured"):(this.isInitialized=!0,this.loadAll())}getDayTranslationKey=Ut;loadAll(){return this.isLoading=!0,this.tutorialGroupService.getOneOfCourse(this.course.id,this.tutorialGroupId).pipe(U(()=>this.isLoading=!1),St(e=>e.body),C(this.ngUnsubscribe)).subscribe({next:e=>{e&&(this.tutorialGroup=e,e.tutorialGroupSessions&&(this.sessions=e.tutorialGroupSessions),e.tutorialGroupSchedule&&(this.tutorialGroupSchedule=e.tutorialGroupSchedule))},error:e=>N(this.alertService,e)}).add(()=>this.cdr.detectChanges())}openCreateSessionDialog(e){e.stopPropagation();let o=this.modalService.open(Zt,{size:"xl",scrollable:!1,backdrop:"static",animation:!1});o.componentInstance.course=this.course,o.componentInstance.tutorialGroup=this.tutorialGroup,o.componentInstance.initialize(),F(o.result).pipe(j(()=>I),C(this.ngUnsubscribe)).subscribe(()=>{this.loadAll()})}clear(){this.attendanceUpdated?this.activeModal.close():this.activeModal.dismiss()}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=T({type:i,selectors:[["jhi-session-management"]],inputs:{tutorialGroupId:"tutorialGroupId",course:"course"},decls:4,vars:2,consts:[[3,"isLoading"],[1,"row","tutorial-group-session-management"],[1,"col-12","modal-header"],["type","button",1,"btn-close",3,"click"],[1,"my-2"],["type","button","id","create-session-button",1,"btn","btn-primary",3,"click"],[3,"icon"],["jhiTranslate","artemisApp.pages.tutorialGroupSessionManagement.createSessionButton"],[1,"scrollbar","table-wrapper-scroll-y","border","border-lightgrey","p-3","modal-body"],[3,"attendanceUpdated","sessions","timeZone","showIdColumn","tutorialGroup"],[1,"modal-body"],["jhiTranslate","artemisApp.entities.tutorialGroup.schedule"],["jhiTranslate","artemisApp.forms.scheduleForm.locationInput.labelOnline"],["jhiTranslate","artemisApp.forms.scheduleForm.locationInput.labelOffline"],["jhiTranslate","artemisApp.pages.tutorialGroupDetail.scheduleNotSet"],[3,"cancelOrActivatePressed","tutorialGroupSessionDeleted","tutorialGroupEdited","tutorialGroupSession","course","tutorialGroup"]],template:function(o,n){o&1&&(a(0,"jhi-loading-indicator-container",0),t(1,`
    `),d(2,Ve,32,10),s(),t(3,`
`)),o&2&&(p("isLoading",n.isLoading),r(2),m(n.isInitialized&&n.tutorialGroup?2:-1))},dependencies:[R,b,L,Pt,Kt,O,$t],styles:[`.tutorial-group-session-management .scrollbar{position:relative;max-height:1000px;overflow:auto}.tutorial-group-session-management .table-wrapper-scroll-y{display:block}.session-management-dialog .modal-dialog{max-width:2000px}
`],encapsulation:2,changeDetection:0})}return i})();var ke=(i,c)=>["/course-management",i,"tutorial-groups",c,"edit"];function Oe(i,c){if(i&1){let e=h();t(0,`
            `),a(1,"button",1),_("click",function(n){x(e);let g=u(2);return S(g.openSessionDialog(n))}),t(2,`
                `),l(3,"fa-icon",2),t(4,`
                `),l(5,"span",3),t(6,`
            `),s(),t(7,`
        `)}if(i&2){let e=u(2);r(),p("id","sessions-"+e.tutorialGroup.id),r(2),p("icon",e.faCalendar)}}function Le(i,c){if(i&1){let e=h();t(0,`
            `),a(1,"button",4),_("click",function(n){x(e);let g=u(2);return S(g.openRegistrationDialog(n))}),t(2,`
                `),l(3,"fa-icon",2),t(4,`
                `),l(5,"span",5),t(6,`
            `),s(),t(7,`
        `)}if(i&2){let e=u(2);r(),p("id","registrations-"+e.tutorialGroup.id),r(2),p("icon",e.faUsers)}}function Re(i,c){if(i&1&&(t(0,`
            `),a(1,"a",6),t(2,`
                `),l(3,"fa-icon",2),t(4,`
                `),l(5,"span",7),t(6,`
            `),s(),t(7,`
        `)),i&2){let e=u(2);r(),p("id","edit-"+e.tutorialGroup.id)("routerLink",wt(3,ke,e.course.id,e.tutorialGroup.id)),r(2),p("icon",e.faWrench)}}function ze(i,c){if(i&1){let e=h();t(0,`
            `),a(1,"button",8),_("delete",function(){x(e);let n=u(2);return S(n.deleteTutorialGroup())}),t(2,`
                `),l(3,"fa-icon",2),t(4,`
            `),s(),t(5,`
        `)}if(i&2){let e=u(2);r(),p("id","delete-"+e.tutorialGroup.id)("entityTitle",e.tutorialGroup.title||"")("dialogError",e.dialogError$),r(2),p("icon",e.faTrash)}}function Be(i,c){if(i&1&&(t(0,`
    `),a(1,"div",0),t(2,`
        `),t(3,`
        `),d(4,Oe,8,2)(5,Le,8,2)(6,Re,8,6)(7,ze,6,4),s(),t(8,`
`)),i&2){let e=u();r(4),m(e.isAtLeastInstructor||e.tutorialGroup.isUserTutor?4:-1),r(),m(e.isAtLeastInstructor||e.tutorialGroup.isUserTutor?5:-1),r(),m(e.isAtLeastInstructor?6:-1),r(),m(e.isAtLeastInstructor?7:-1)}}var Zn=(()=>{class i{tutorialGroupsService=f(q);modalService=f(Z);ngUnsubscribe=new v;isAtLeastInstructor=!1;course;tutorialGroup;tutorialGroupDeleted=new w;registrationsChanged=new w;attendanceUpdated=new w;dialogErrorSource=new v;dialogError$=this.dialogErrorSource.asObservable();faWrench=ut;faUsers=lt;faTrash=pt;faCalendar=st;constructor(){}openSessionDialog(e){e.stopPropagation();let o=this.modalService.open(Ht,{scrollable:!1,backdrop:"static",animation:!1,windowClass:"session-management-dialog"});o.componentInstance.course=this.course,o.componentInstance.tutorialGroupId=this.tutorialGroup.id,o.componentInstance.initialize(),F(o.result).pipe(j(()=>I),C(this.ngUnsubscribe)).subscribe(()=>{this.attendanceUpdated.emit()})}openRegistrationDialog(e){e.stopPropagation();let o=this.modalService.open(Nt,{size:"xl",scrollable:!1,backdrop:"static",animation:!1});o.componentInstance.course=this.course,o.componentInstance.tutorialGroupId=this.tutorialGroup.id,o.componentInstance.initialize(),F(o.result).pipe(j(()=>I),C(this.ngUnsubscribe)).subscribe(()=>{this.registrationsChanged.emit()})}deleteTutorialGroup=()=>{this.tutorialGroupsService.delete(this.course.id,this.tutorialGroup.id).pipe(C(this.ngUnsubscribe)).subscribe({next:()=>{this.dialogErrorSource.next(""),this.tutorialGroupDeleted.emit()},error:e=>this.dialogErrorSource.next(e.message)})};ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete(),this.dialogErrorSource.unsubscribe()}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=T({type:i,selectors:[["jhi-tutorial-group-row-buttons"]],inputs:{isAtLeastInstructor:"isAtLeastInstructor",course:"course",tutorialGroup:"tutorialGroup"},outputs:{tutorialGroupDeleted:"tutorialGroupDeleted",registrationsChanged:"registrationsChanged",attendanceUpdated:"attendanceUpdated"},decls:1,vars:1,consts:[[1,"btn-group","flex-btn-group-container"],["type","button",1,"btn","btn-primary","btn-sm","me-1",3,"click","id"],[3,"icon"],["jhiTranslate","artemisApp.pages.tutorialGroupsManagement.rowButtons.sessions",1,"d-none","d-md-inline"],[1,"btn","btn-primary","btn-sm","me-1",3,"click","id"],["jhiTranslate","artemisApp.pages.registeredStudents.title",1,"d-none","d-md-inline"],[1,"btn","btn-warning","btn-sm","me-1",3,"id","routerLink"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["jhiDeleteButton","","deleteQuestion","artemisApp.pages.tutorialGroupsManagement.deleteDialog.question","deleteConfirmationText","artemisApp.pages.tutorialGroupsManagement.deleteDialog.confirm",3,"delete","id","entityTitle","dialogError"]],template:function(o,n){o&1&&d(0,Be,9,4),o&2&&m(n.course&&n.tutorialGroup?0:-1)},dependencies:[L,b,At,dt],encapsulation:2,changeDetection:0})}return i})();export{$t as a,Zn as b};
//# sourceMappingURL=chunk-43FKRQO7.js.map
