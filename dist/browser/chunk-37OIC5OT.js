import{a as Ht}from"./chunk-UOBRSA3T.js";import{a as zt}from"./chunk-6U46KDQO.js";import{a as jt}from"./chunk-H7UNTMXY.js";import{a as Ut}from"./chunk-4P7M5PJP.js";import{a as Wt}from"./chunk-COI3ESZV.js";import{a as Gt}from"./chunk-V55WZ52P.js";import{a as Nt}from"./chunk-66AWMTNA.js";import{f as Ot}from"./chunk-FAFORKWV.js";import{b as Bt}from"./chunk-T4L3VFV2.js";import{a as Rt}from"./chunk-YSX3GO3R.js";import{b as Vt}from"./chunk-W3K7VYWC.js";import{a as It}from"./chunk-7DTX5HC5.js";import{a as Pt}from"./chunk-JRBFEQNN.js";import{a as Dt}from"./chunk-MBS3WUDO.js";import{b as Lt}from"./chunk-22YQSX6Z.js";import{a as Ft}from"./chunk-R56P6PAY.js";import{a as ge}from"./chunk-5M3YV54C.js";import{a as Mt}from"./chunk-BNRTXX46.js";import{a as kt}from"./chunk-VPHPBAVR.js";import{A as At}from"./chunk-5AQXEKLE.js";import{b as Tt,j as wt}from"./chunk-3JSWSN6W.js";import{j as fe}from"./chunk-DXTZ4GAW.js";import{a as Et}from"./chunk-G4HSJ7ME.js";import{c as Ct,d as bt,e as ht,f as St,g as vt}from"./chunk-F3NFBBHK.js";import{o as yt}from"./chunk-Z2YUBN6N.js";import{b as xt}from"./chunk-TECMX7AA.js";import{a as de,b as xe,d as _e}from"./chunk-O26CMRR4.js";import{a as ft}from"./chunk-FGXEI5KW.js";import{a as _t}from"./chunk-2QXIMOEO.js";import{b as gt}from"./chunk-DRMCDU75.js";import{d as pt}from"./chunk-AR57MWOI.js";import{a as lt,c as me,e as ct}from"./chunk-CK7FH6VF.js";import{a as q}from"./chunk-PZ7IDTIM.js";import{j as L}from"./chunk-CT44YL7Q.js";import{c as dt}from"./chunk-JNO6DNVW.js";import{F as Qe,K as Xe,q as ze,r as qe,s as Ke,u as re,v as se}from"./chunk-VZRSC3LP.js";import{C as oe,H as He,K as z,b as ee,c as U,h as G,i as te,k as ie,m as H,n as ne,o as Ue,p as Ge}from"./chunk-WA5GEAJB.js";import{j as mt,m as ut}from"./chunk-VK7JPHFE.js";import{c as rt}from"./chunk-BNDLMKXK.js";import{a as ue}from"./chunk-K3W6YFKH.js";import{a as st,c as at}from"./chunk-JXJXC4DZ.js";import{d as P}from"./chunk-EDXSOKK5.js";import{p as Z}from"./chunk-DID2YGL7.js";import{c as F}from"./chunk-CXQURQM5.js";import{Jb as it,Ka as Je,Lc as ot,Sa as Ye,Vb as nt,cc as pe,fa as le,lb as et,oa as ce,tb as tt,y as $e}from"./chunk-Z4VHWOB5.js";import{a as ae}from"./chunk-HKBU2OOC.js";import{a as K}from"./chunk-U54OSGNH.js";import{f as We,i as Y}from"./chunk-M6Z6DKZQ.js";import{c as Ze}from"./chunk-E2KBL4LX.js";import{A as Ne,B as Oe,O as J,n as je}from"./chunk-IOA4DPXY.js";import{Ac as ke,Ad as R,Bc as Le,Db as r,Dc as b,Ea as C,Ed as Be,F as ye,Ma as _,Mc as g,Na as f,Oc as l,P as Te,Rc as he,Sc as W,Tb as k,Va as Ae,Yc as De,Zb as d,Zc as Pe,_c as Ie,cd as I,dd as t,fd as v,gd as Q,kc as m,ld as T,mc as Fe,md as w,nd as A,pd as Ve,qd as Se,ra as we,rd as D,s as ve,sc as x,sd as V,td as X,uc as j,vc as N,vd as Re,wb as Me,wc as O,xb as be,xc as s,ya as $,yc as a,yd as E,z as Ee,zc as u,zd as M}from"./chunk-5LC5EQRR.js";var qt=(()=>{class i{http=C(J);resultService=C(ge);create(e,n,o){let p=this.resultService.convertResultDatesFromClient(o);return this.http.post(`api/assessment/exercises/${e.id}/external-submission-results?studentLogin=${n.login}`,p,{observe:"response"}).pipe(Ee(h=>this.resultService.convertResultResponseDatesFromServer(h)))}generateInitialManualResult(){let e=new Mt;return e.completionDate=Z(),e.successful=!0,e.score=100,e.rated=!0,e}static \u0275fac=function(n){return new(n||i)};static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Kt=(i,c)=>({negative:i,positive:c});function oi(i,c){if(i&1&&(t(0,`
            `),s(1,"div",11),t(2,`
                `),u(3,"h3",34),t(4,`
                `),u(5,"span",35),E(6,"htmlForMarkdown"),t(7,`
            `),a(),t(8,`
        `)),i&2){let e=l();r(5),m("innerHTML",M(6,1,e.exercise.gradingInstructions),Me)}}function ri(i,c){i&1&&(t(0,`
                `),u(1,"span",36),t(2,`
            `))}function si(i,c){i&1&&(t(0,`
                    `),u(1,"span",37),t(2,`
                `))}function ai(i,c){i&1&&(t(0,`
                                `),u(1,"span",44),t(2,`
                            `))}function li(i,c){if(i&1){let e=b();t(0,`
                    `),s(1,"div"),t(2,`
                        `),s(3,"div",11),t(4,`
                            `),s(5,"label",38),t(6),a(),t(7,`
                            `),s(8,"input",39,4),A("ngModelChange",function(o){let p=_(e).$implicit;return w(p.text,o)||(p.text=o),f(o)}),a(),t(10,`
                            `),d(11,ai,3,0),a(),t(12,`
                        `),s(13,"div",14),t(14,`
                            `),s(15,"div",15),t(16,`
                                `),s(17,"label",40),t(18),a(),t(19,`
                                `),s(20,"textarea",41),A("ngModelChange",function(o){let p=_(e).$implicit;return w(p.detailText,o)||(p.detailText=o),f(o)}),a(),t(21,`
                            `),a(),t(22,`
                            `),s(23,"div",18),t(24,`
                                `),s(25,"label",19),t(26,`
                                    `),s(27,"input",42),A("ngModelChange",function(o){let p=_(e).$implicit;return w(p.positive,o)||(p.positive=o),f(o)}),a(),t(28,`
                                    `),u(29,"span",43),t(30,`
                                `),a(),t(31,`
                            `),a(),t(32,`
                        `),a(),t(33,`
                    `),a(),t(34,`
                `)}if(i&2){let e=c.$implicit,n=c.$index,o=I(9);r(5),W("for","feedbackText",n,""),m("ngClass",V(18,Kt,!e||!e.positive,e.positive)),r(),v(`
                                Feedback #`,n+1,` Text
                            `),r(2),W("id","feedbackText",n,""),W("name","feedbackText",n,""),T("ngModel",e.text),r(3),x(o!=null&&o.invalid&&(!(o==null||o.errors==null)&&o.errors.required)?11:-1),r(6),m("ngClass",V(21,Kt,!e||!e.positive,e.positive)),r(),v(`
                                    Feedback #`,n+1,` Detail Text
                                `),r(2),W("name","feedbackErrorText",n,""),T("ngModel",e.detailText),r(7),W("name","positive",n,""),T("ngModel",e.positive)}}function ci(i,c){if(i&1&&(t(0,`
            `),s(1,"div"),t(2,`
                `),N(3,li,35,24,null,null,j),a(),t(5,`
        `)),i&2){let e=l();r(3),O(e.feedbacks)}}function pi(i,c){if(i&1){let e=b();t(0,`
            `),s(1,"div",22),t(2,`
                `),s(3,"button",45),g("click",function(){_(e);let o=l();return f(o.pushFeedback())}),t(4,`
                    `),u(5,"span",24),t(6,`
                `),a(),t(7,`
                \xA0
                `),s(8,"button",45),g("click",function(){_(e);let o=l();return f(o.popFeedback())}),t(9,`
                    `),u(10,"span",46),t(11,`
                `),a(),t(12,`
            `),a(),t(13,`
        `)}}var Xt=(()=>{class i{externalSubmissionService=C(qt);activeModal=C(re);eventManager=C(st);SCORE_PATTERN=mt;exercise;student=new ft;result;feedbacks=[];isSaving=!1;userId;isAssessor;complaint;faSave=tt;faBan=le;ngOnInit(){this.initializeForResultCreation()}initializeForResultCreation(){this.result=this.externalSubmissionService.generateInitialManualResult()}clear(){this.activeModal.dismiss("cancel")}save(){this.result.feedbacks=this.feedbacks,this.isSaving=!0;for(let e=0;e<this.result.feedbacks.length;e++)this.result.feedbacks[e].type=Tt.MANUAL;this.subscribeToSaveResponse(this.externalSubmissionService.create(this.exercise,this.student,this.result))}subscribeToSaveResponse(e){e.subscribe({next:n=>this.onSaveSuccess(n),error:()=>this.onSaveError()})}onSaveSuccess(e){this.activeModal.close(e.body),this.isSaving=!1,this.eventManager.broadcast({name:"resultListModification",content:"Added a manual result"})}onSaveError(){this.isSaving=!1}pushFeedback(){this.feedbacks.push(new wt)}popFeedback(){this.feedbacks.length>0&&this.feedbacks.pop()}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=k({type:i,selectors:[["jhi-external-submission-dialog"]],inputs:{exercise:"exercise"},decls:84,vars:16,consts:[["editForm","ngForm"],["studentLogin","ngModel"],["score","ngModel"],["resultRated","ngModel"],["feedbackText","ngModel"],["name","editForm","role","form","novalidate","",3,"ngSubmit"],[1,"modal-header"],[1,"modal-title"],["jhiTranslate","artemisApp.submission.createExternal"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],[1,"form-group"],["jhiTranslate","artemisApp.result.studentLogin",1,"control-label"],["type","text","required","","name","studentLogin","id","studentLogin",1,"form-control",3,"ngModelChange","ngModel"],[1,"form-group","row","align-items-end"],[1,"col-md-6"],["jhiTranslate","artemisApp.result.scorePercentage",1,"control-label"],["type","number","required","","name","score","id","field_score",1,"form-control",3,"ngModelChange","pattern","ngModel"],[1,"checkbox","col-md-6"],[1,"artemis-label","form-check"],["type","checkbox","name","successful",1,"form-check-input",3,"ngModelChange","ngModel","disabled"],["jhiTranslate","artemisApp.result.successful",1,"form-check-label"],[1,"form-group","mb-2"],["type","button",1,"btn","btn-default",3,"click","hidden"],["jhiTranslate","artemisApp.result.addFeedback"],[1,"form-check","mt-3"],["type","checkbox","name","resultRated","id","resultRated",1,"form-check-input",3,"ngModelChange","ngModel"],["for","resultRated","jhiTranslate","artemisApp.result.rated",1,"form-check-label"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],[3,"icon"],["jhiTranslate","entity.action.cancel"],["type","submit",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","entity.action.save"],["for","id","jhiTranslate","artemisApp.exercise.assessmentInstructions"],[3,"innerHTML"],["jhiTranslate","artemisApp.result.studentLoginRequired",1,"text-danger"],["jhiTranslate","artemisApp.result.invalidScore",1,"text-danger"],[1,"control-label",3,"for","ngClass"],["type","text","required","",1,"form-control",3,"ngModelChange","id","name","ngModel"],["for","feedbackErrorText",1,"control-label",3,"ngClass"],["type","text","id","feedbackErrorText",1,"form-control",3,"ngModelChange","name","ngModel"],["type","checkbox",1,"form-check-input",3,"ngModelChange","name","ngModel"],["jhiTranslate","artemisApp.result.positive",1,"form-check-label"],["jhiTranslate","artemisApp.result.feedbackTextRequired",1,"text-danger"],["type","button",1,"btn","btn-default",3,"click"],["jhiTranslate","artemisApp.result.deleteFeedback"]],template:function(n,o){if(n&1){let p=b();s(0,"form",5,0),g("ngSubmit",function(){return _(p),f(o.save())}),t(2,`
    `),s(3,"div",6),t(4,`
        `),s(5,"h4",7),t(6,`
            `),u(7,"span",8),t(8),a(),t(9,`
        `),s(10,"button",9),g("click",function(){return _(p),f(o.clear())}),a(),t(11,`
    `),a(),t(12,`
    `),s(13,"div",10),t(14,`
        `),d(15,oi,9,3),s(16,"div",11),t(17,`
            `),u(18,"h4",12),t(19,`
            `),s(20,"input",13,1),A("ngModelChange",function(S){return _(p),w(o.student.login,S)||(o.student.login=S),f(S)}),a(),t(22,`
            `),d(23,ri,3,0),a(),t(24,`
        `),s(25,"div",14),t(26,`
            `),s(27,"div",15),t(28,`
                `),u(29,"h4",16),t(30,`
                `),s(31,"input",17,2),A("ngModelChange",function(S){return _(p),w(o.result.score,S)||(o.result.score=S),f(S)}),g("ngModelChange",function(){return _(p),f(o.result.score===100?o.result.successful=!0:o.result.successful=!1)}),a(),t(33,`
                `),d(34,si,3,0),a(),t(35,`
            `),s(36,"div",18),t(37,`
                `),s(38,"div",19),t(39,`
                    `),s(40,"input",20),A("ngModelChange",function(S){return _(p),w(o.result.successful,S)||(o.result.successful=S),f(S)}),a(),t(41,`
                    `),u(42,"span",21),t(43,`
                `),a(),t(44,`
            `),a(),t(45,`
        `),a(),t(46,`
        `),s(47,"div",22),t(48,`
            `),s(49,"button",23),g("click",function(){return _(p),f(o.pushFeedback())}),t(50,`
                `),u(51,"span",24),t(52,`
            `),a(),t(53,`
        `),a(),t(54,`
        `),d(55,ci,6,0)(56,pi,14,0),s(57,"div",25),t(58,`
            `),s(59,"input",26,3),A("ngModelChange",function(S){return _(p),w(o.result.rated,S)||(o.result.rated=S),f(S)}),a(),t(61,`
            `),u(62,"label",27),t(63,`
        `),a(),t(64,`
    `),a(),t(65,`
    `),s(66,"div",28),t(67,`
        `),s(68,"button",29),g("click",function(){return _(p),f(o.clear())}),t(69,`
            `),u(70,"fa-icon",30),t(71,"\xA0"),u(72,"span",31),t(73,`
        `),a(),t(74,`
        `),s(75,"button",32),t(76,`
            `),u(77,"fa-icon",30),t(78,"\xA0"),u(79,"span",33),t(80,`
        `),a(),t(81,`
    `),a(),t(82,`
`),a(),t(83,`
`)}if(n&2){let p=I(1),h=I(21),S=I(32);r(8),v(`
            (`,o.exercise.title,`)
        `),r(7),x(o.exercise.gradingInstructions?15:-1),r(5),T("ngModel",o.student.login),r(3),x(h!=null&&h.invalid&&(!(h==null||h.errors==null)&&h.errors.required)?23:-1),r(8),m("pattern",o.SCORE_PATTERN),T("ngModel",o.result.score),r(3),x(S.dirty&&S.invalid?34:-1),r(6),T("ngModel",o.result.successful),m("disabled",!0),r(9),m("hidden",o.feedbacks.length>0),r(6),x(o.feedbacks.length>0?55:-1),r(),x(o.feedbacks.length>0?56:-1),r(3),T("ngModel",o.result.rated),r(11),m("icon",o.faBan),r(5),m("disabled",p.invalid||o.isSaving),r(2),m("icon",o.faSave)}},dependencies:[z,ne,U,Ue,ee,G,te,oe,He,H,ie,K,je,P,Pt],encapsulation:2})}return i})();function mi(i,c){if(i&1){let e=b();t(0,`
            `),s(1,"jhi-button",0),g("onClick",function(o){_(e);let p=l();return f(p.openExternalSubmissionDialog(o))}),a(),t(2,`
        `)}if(i&2){let e=l();r(),m("btnType",e.ButtonType.WARNING)("btnSize",e.ButtonSize.SMALL)("icon",e.faPlus)("title","entity.action.addExternalSubmission")}}var Zt=(()=>{class i{modalService=C(se);ButtonType=de;ButtonSize=xe;exercise;faPlus=ot;openExternalSubmissionDialog(e){e.stopPropagation();let n=this.modalService.open(Xt,{keyboard:!0,size:"lg",backdrop:"static"});n.componentInstance.exercise=this.exercise}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=k({type:i,selectors:[["jhi-external-submission"]],inputs:{exercise:"exercise"},decls:2,vars:1,consts:[[3,"onClick","btnType","btnSize","icon","title"]],template:function(n,o){n&1&&(t(0,`
        `),d(1,mi,3,4)),n&2&&(r(),x(o.exercise.teamMode?-1:1))},dependencies:[_e],encapsulation:2})}return i})();var $t=(()=>{class i{http=C(J);resourceUrl="api";exportSubmissions(e,n,o){return this.http.post(`${this.resourceUrl}/${this.getExerciseUrl(n,e)}/export-submissions`,o,{observe:"response",responseType:"blob"})}getExerciseUrl(e,n){switch(e){case F.TEXT:return"text/text-exercises/"+n;case F.MODELING:return"modeling/modeling-exercises/"+n;case F.FILE_UPLOAD:return"fileupload/file-upload-exercises/"+n;default:throw Error("Export not implemented for exercise type "+e)}}static \u0275fac=function(n){return new(n||i)};static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ui=(i,c)=>({exerciseTitle:i,courseTitle:c});function di(i,c){if(i&1){let e=b();t(0,`
                `),s(1,"div",8),t(2,`
                    `),s(3,"label",9),t(4,`
                        `),s(5,"input",23),A("ngModelChange",function(o){_(e);let p=l(2);return w(p.submissionExportOptions.exportAllParticipants,o)||(p.submissionExportOptions.exportAllParticipants=o),f(o)}),a(),t(6,`
                        `),s(7,"strong",24),t(8," Or download the submissions of all students "),a(),t(9,`
                    `),a(),t(10,`
                `),a(),t(11,`
            `)}if(i&2){let e=l(2);r(5),T("ngModel",e.submissionExportOptions.exportAllParticipants),r(2),m("jhiTranslate","artemisApp.instructorDashboard.exportSubmissions.downloadAllStudents")}}function xi(i,c){if(i&1&&(t(0,`
                    `),s(1,"span",25),u(2,"fa-icon",26),a(),t(3,`
                `)),i&2){let e=l(2);r(2),m("icon",e.faCircleNotch)}}function _i(i,c){if(i&1){let e=b();t(0,`
    `),s(1,"form",1,0),g("ngSubmit",function(){_(e);let o=l();return f(o.exportSubmissions(o.exercise.id))}),t(3,`
        `),s(4,"div",2),t(5,`
            `),u(6,"h4",3),t(7,`
            `),s(8,"button",4),g("click",function(){_(e);let o=l();return f(o.clear())}),a(),t(9,`
        `),a(),t(10,`
        `),s(11,"div",5),t(12,`
            `),s(13,"p",6),t(14,`
                Confirm export
            `),a(),t(15,`
            `),s(16,"textarea",7),A("ngModelChange",function(o){_(e);let p=l();return w(p.submissionExportOptions.participantIdentifierList,o)||(p.submissionExportOptions.participantIdentifierList=o),f(o)}),a(),t(17,`
            `),t(18,`
            `),d(19,di,12,2),ke(20),t(21,`
                `),s(22,"div",8),t(23,`
                    `),s(24,"label",9),t(25,`
                        `),s(26,"input",10),A("ngModelChange",function(o){_(e);let p=l();return w(p.submissionExportOptions.filterLateSubmissions,o)||(p.submissionExportOptions.filterLateSubmissions=o),f(o)}),a(),t(27,`
                        `),u(28,"strong",11),t(29,`
                    `),a(),t(30,`
                `),a(),t(31,`
                `),s(32,"div",12),t(33,`
                    `),s(34,"strong",13),t(35,"Date for filter late submissions (defaults to exercise due date if not set)"),a(),t(36,`
                    `),u(37,"jhi-help-icon",14),t(38,`
                    `),s(39,"jhi-date-time-picker",15),A("ngModelChange",function(o){_(e);let p=l();return w(p.submissionExportOptions.filterLateSubmissionsDate,o)||(p.submissionExportOptions.filterLateSubmissionsDate=o),f(o)}),a(),t(40,`
                `),a(),t(41,`
            `),Le(),t(42,`
        `),a(),t(43,`
        `),s(44,"div",16),t(45,`
            `),s(46,"button",17),g("click",function(){_(e);let o=l();return f(o.clear())}),t(47,`
                `),u(48,"span",18),t(49,"\xA0"),u(50,"span",19),t(51,`
            `),a(),t(52,`
            `),s(53,"button",20),t(54,`
                `),d(55,xi,4,1),u(56,"span",21),t(57,"\xA0"),u(58,"span",22),t(59,`
            `),a(),t(60,`
        `),a(),t(61,`
    `),a(),t(62,`
`)}if(i&2){let e=l();r(13),m("jhiTranslate","artemisApp.instructorDashboard.exportSubmissions.question")("translateValues",V(11,ui,e.exercise.title,e.exercise.course==null?null:e.exercise.course.title)),r(3),T("ngModel",e.submissionExportOptions.participantIdentifierList),m("disabled",e.submissionExportOptions.exportAllParticipants),r(3),x(e.exercise.isAtLeastInstructor?19:-1),r(7),T("ngModel",e.submissionExportOptions.filterLateSubmissions),r(13),T("ngModel",e.submissionExportOptions.filterLateSubmissionsDate),m("disabled",!e.submissionExportOptions.filterLateSubmissions)("shouldDisplayTimeZoneWarning",!1),r(14),m("disabled",!e.submissionExportOptions.participantIdentifierList&&!e.submissionExportOptions.exportAllParticipants||e.exportInProgress),r(2),x(e.exportInProgress?55:-1)}}function fi(i,c){if(i&1&&(t(0,`
    `),s(1,"div",27),t(2,`
        `),u(3,"fa-icon",26),t(4,`
    `),a(),t(5,`
`)),i&2){let e=l();r(3),m("icon",e.faCircleNotch)}}var Jt=(()=>{class i{exerciseService=C(me);submissionExportService=C($t);activeModal=C(re);alertService=C(at);exerciseId;exerciseType;exercise;exportInProgress;submissionExportOptions;isLoading=!1;faCircleNotch=$e;ngOnInit(){this.isLoading=!0,this.exportInProgress=!1,this.submissionExportOptions={exportAllParticipants:!1,filterLateSubmissions:!1,filterLateSubmissionsDate:null,participantIdentifierList:""},this.exerciseService.find(this.exerciseId).pipe(we(({body:e})=>{this.exercise=e}),Te(e=>(this.alertService.error(e),this.clear(),ve(null)))).subscribe(()=>{this.isLoading=!1})}clear(){this.activeModal.dismiss("cancel")}exportSubmissions(e){this.exportInProgress=!0,this.submissionExportService.exportSubmissions(e,this.exerciseType,this.submissionExportOptions).subscribe({next:this.handleExportResponse,error:()=>{this.exportInProgress=!1}})}handleExportResponse=e=>{this.alertService.success("artemisApp.instructorDashboard.exportSubmissions.successMessage"),this.activeModal.dismiss(!0),this.exportInProgress=!1,Dt(e)};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=k({type:i,selectors:[["jhi-exercise-submission-export-dialog"]],inputs:{exerciseId:"exerciseId",exerciseType:"exerciseType"},decls:2,vars:1,consts:[["exportForm","ngForm"],["name","exportForm","role","form",3,"ngSubmit"],[1,"modal-header"],["jhiTranslate","artemisApp.instructorDashboard.exportSubmissions.title",1,"modal-title"],["type","button","data-dismiss","modal",1,"btn-close",3,"click"],[1,"modal-body"],[3,"jhiTranslate","translateValues"],["name","studentIds","required","",1,"export-textarea",3,"ngModelChange","ngModel","disabled"],[1,"checkbox"],[1,"control-label"],["type","checkbox","name","filterLateSubmissions",1,"form-check-input",3,"ngModelChange","ngModel"],["jhiTranslate","artemisApp.instructorDashboard.exportSubmissions.filterLateSubmissions"],[1,"form-group"],["jhiTranslate","artemisApp.instructorDashboard.exportSubmissions.filterLateSubmissionsDate.title"],["text","artemisApp.instructorDashboard.exportSubmissions.filterLateSubmissionsDate.tooltip"],["name","filterLateSubmissionsDate",3,"ngModelChange","ngModel","disabled","shouldDisplayTimeZoneWarning"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],[1,"glyphicon","glyphicon-ban-circle"],["jhiTranslate","entity.action.cancel"],["type","submit",1,"btn","btn-default",3,"disabled"],[1,"glyphicon","glyphicon-download-alt"],["jhiTranslate","entity.action.export"],["type","checkbox","name","allStudents",1,"form-check-input",3,"ngModelChange","ngModel"],[3,"jhiTranslate"],[1,"me-1"],["animation","spin",3,"icon"],[1,"d-flex","justify-content-center","mt-4","mb-4"]],template:function(n,o){n&1&&d(0,_i,63,14)(1,fi,6,1),n&2&&x(o.isLoading?1:0)},dependencies:[z,ne,U,ee,G,te,oe,H,ie,K,_t,xt,P],styles:["textarea[_ngcontent-%COMP%]{width:100%}"]})}return i})();var Yt=(()=>{class i{modalService=C(se);ButtonType=de;ButtonSize=xe;FeatureToggle=ae;exerciseId;exerciseType;faDownload=pe;openSubmissionExportDialog(e){e.stopPropagation();let n=this.modalService.open(Jt,{keyboard:!0,size:"lg"});n.componentInstance.exerciseId=this.exerciseId,n.componentInstance.exerciseType=this.exerciseType}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=k({type:i,selectors:[["jhi-exercise-submission-export"]],inputs:{exerciseId:"exerciseId",exerciseType:"exerciseType"},decls:3,vars:7,consts:[[3,"onClick","featureToggle","disabled","btnType","btnSize","shouldSubmit","icon","title"]],template:function(n,o){n&1&&(t(0,`
        `),s(1,"jhi-button",0),g("onClick",function(h){return o.openSubmissionExportDialog(h)}),a(),t(2,`
    `)),n&2&&(r(),m("featureToggle",o.FeatureToggle.Exports)("disabled",!o.exerciseId)("btnType",o.ButtonType.INFO)("btnSize",o.ButtonSize.SMALL)("shouldSubmit",!1)("icon",o.faDownload)("title","artemisApp.instructorDashboard.exportSubmissions.title"))},dependencies:[_e],encapsulation:2})}return i})();var gi=i=>({"correction-round":i}),ei=i=>({correctionRound:i});function Ci(i,c){if(i&1&&(t(0),E(1,"artemisTranslate")),i&2){let e=l(2).$implicit,n=l(2);v(`
                        `,R(1,1,"artemisApp.assessment.dashboard.actions."+(n.examMode?"examCorrectionRound.":"")+(!(!(n.participation.results==null||n.participation.results[e]==null)&&n.participation.results[e].assessmentType)||(n.participation.results==null||n.participation.results[e]==null?null:n.participation.results[e].assessmentType)===n.AssessmentType.AUTOMATIC?"assess":!(n.participation.results==null||n.participation.results[e]==null)&&n.participation.results[e].completionDate?"open":"continue"),D(4,ei,e+1)),`
                    `)}}function bi(i,c){i&1&&(t(0),E(1,"artemisTranslate")),i&2&&v(`
                        `,M(1,1,"artemisApp.exerciseAssessmentDashboard.showComplaint"),`
                    `)}function hi(i,c){if(i&1){let e=b();t(0,`
                    `),s(1,"button",2),g("click",function(){_(e);let o=l(2).$implicit,p=l(2);return f(p.cancelAssessment(p.participation.results==null?null:p.participation.results[o],p.participation))}),t(2,`
                        `),u(3,"fa-icon",3),t(4,`
                        `),s(5,"span"),t(6),E(7,"artemisTranslate"),a(),t(8,`
                    `),a(),t(9,`
                `)}if(i&2){let e=l(2).$implicit,n=l(2);r(),m("disabled",n.isLoading),r(2),m("fixedWidth",!0)("icon",n.faBan),r(3),v(`
                            `,R(7,4,"artemisApp.assessment.dashboard.actions."+(n.examMode?"examCorrectionRound.":"")+"cancel",D(7,ei,e+1)),`
                        `)}}function Si(i,c){if(i&1&&(t(0,`
            `),s(1,"div"),t(2,`
                `),s(3,"a",0),t(4,`
                    `),u(5,"fa-icon",1),t(6,`
                    `),d(7,Ci,2,6)(8,bi,2,3),a(),t(9,`
                `),d(10,hi,10,9),a(),t(11,`
        `)),i&2){let e=l().$implicit,n=l(2);r(3),Fe("btn-success",(!(!(n.participation.results==null||n.participation.results[e]==null)&&n.participation.results[e].assessmentType)||(n.participation.results==null||n.participation.results[e]==null?null:n.participation.results[e].assessmentType)===n.AssessmentType.AUTOMATIC)&&!(!(n.participation.results==null||n.participation.results[e]==null)&&n.participation.results[e].hasComplaint))("btn-primary",(n.participation.results==null||n.participation.results[e]==null?null:n.participation.results[e].completionDate)||(n.participation.results==null||n.participation.results[e]==null?null:n.participation.results[e].hasComplaint))("btn-warning",(n.participation.results==null?null:n.participation.results[e])&&!(!(n.participation.results==null||n.participation.results[e]==null)&&n.participation.results[e].completionDate)&&!(!(n.participation.results==null||n.participation.results[e]==null)&&n.participation.results[e].hasComplaint)),m("routerLink",n.getAssessmentLink(e))("queryParams",D(12,gi,n.getCorrectionRoundForAssessmentLink(e))),r(2),m("icon",n.faFolderOpen)("fixedWidth",!0),r(2),x(!(n.participation.results==null||n.participation.results[e]==null)&&n.participation.results[e].hasComplaint?8:7),r(3),x(n.newManualResultAllowed&&(!(n.participation.results==null||n.participation.results[e]==null)&&n.participation.results[e].assessmentType)&&!(!(n.participation.results==null||n.participation.results[e]==null)&&n.participation.results[e].completionDate)&&(n.participation.results==null||n.participation.results[e]==null?null:n.participation.results[e].assessmentType)!==n.AssessmentType.AUTOMATIC?10:-1)}}function vi(i,c){if(i&1&&(t(0,`
        `),d(1,Si,12,14)),i&2){let e=c.$implicit,n=l(2);r(),x((e===0||!(n.participation.results==null||n.participation.results[e-1]==null)&&n.participation.results[e-1].completionDate)&&(n.newManualResultAllowed||!(n.participation.results==null||n.participation.results[e]==null)&&n.participation.results[e].assessmentType&&(n.participation.results==null||n.participation.results[e]==null?null:n.participation.results[e].assessmentType)!==n.AssessmentType.AUTOMATIC&&(n.participation.results==null||n.participation.results[e]==null?null:n.participation.results[e].assessmentType)!==n.AssessmentType.AUTOMATIC_ATHENA)?1:-1)}}function Ei(i,c){if(i&1&&(t(0,`
    `),N(1,vi,2,1,null,null,j)),i&2){let e=l();r(),O(e.correctionRoundIndices)}}var ti=(()=>{class i{programmingAssessmentManualResultService=C(jt);modelingAssessmentService=C(Ut);textAssessmentService=C(Gt);fileUploadAssessmentService=C(Wt);exercise;course;participation;isLoading;refresh=new Ae;correctionRoundIndices;cancelConfirmationText;newManualResultAllowed=!1;examMode=!1;faBan=le;faFolderOpen=ce;AssessmentType=q;constructor(){C(Ze).get("artemisApp.programmingAssessment.confirmCancel").subscribe(n=>this.cancelConfirmationText=n)}ngOnInit(){this.newManualResultAllowed=fe(this.exercise),this.examMode=!!this.exercise.exerciseGroup,lt(this.participation)&&!this.examMode&&(this.newManualResultAllowed=!1),this.correctionRoundIndices=[...Array(this.exercise.exerciseGroup?.exam?.numberOfCorrectionRoundsInExam??1).keys()]}getAssessmentLink(e=0){if(!(!this.exercise.type||!this.exercise.id||!this.course.id||!this.participation.submissions?.[0]?.id))return e=this.getCorrectionRoundForAssessmentLink(e),gt(this.exercise.type,this.course.id,this.exercise.id,this.participation.id,this.participation.submissions?.[0]?.id,this.exercise.exerciseGroup?.exam?.id,this.exercise.exerciseGroup?.id,this.participation.results?.[e]?.id)}getCorrectionRoundForAssessmentLink(e=0){let n=this.participation.results?.[e];return n&&n.hasComplaint&&this.participation.results?.[e+1]?e+1:e}cancelAssessment(e,n){if(window.confirm(this.cancelConfirmationText)&&e.submission?.id){let p;switch(this.exercise.type){case F.PROGRAMMING:p=this.programmingAssessmentManualResultService.cancelAssessment(e.submission.id);break;case F.MODELING:p=this.modelingAssessmentService.cancelAssessment(e.submission.id);break;case F.TEXT:p=this.textAssessmentService.cancelAssessment(n.id,e.submission.id);break;case F.FILE_UPLOAD:p=this.fileUploadAssessmentService.cancelAssessment(e.submission.id);break}p?.subscribe(()=>{this.refresh.emit()})}}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=k({type:i,selectors:[["jhi-manage-assessment-buttons"]],inputs:{exercise:"exercise",course:"course",participation:"participation",isLoading:"isLoading"},outputs:{refresh:"refresh"},decls:1,vars:1,consts:[[1,"btn","btn-sm","me-1","mb-2",3,"routerLink","queryParams"],[3,"icon","fixedWidth"],[1,"btn","btn-sm","me-1","mb-2","btn-danger",3,"click","disabled"],[3,"fixedWidth","icon"]],template:function(n,o){n&1&&d(0,Ei,3,0),n&2&&x(o.participation.submissionCount?0:-1)},dependencies:[Y,P,ue],encapsulation:2})}return i})();var yi=["exportPopover"],Ti=i=>({filter:i}),wi=()=>["team.shortName","team.name","team.students.login","team.students.name"],Ai=()=>["student.login","student.name"],Mi=i=>({range:i}),Fi=(i,c,e)=>({filtered:i,total:c,percent:e}),ki=(i,c,e)=>["/course-management",i,c,e,"participations"],Li=(i,c,e,n,o)=>["/course-management",i,"exams",c,"exercise-groups",e,n,o,"participations"],Di=i=>[i],Pi=(i,c,e)=>["/course-management",i,"exercises",c,"teams",e],Ii=(i,c,e)=>["/courses",i,"exercises","programming-exercises",c,"code-editor",e],Vi=(i,c)=>["..","repository",i,c];function Ri(i,c){if(i&1&&(t(0,`
                `),s(1,"span"),t(2),a(),t(3,`
            `)),i&2){let e=l(2);r(2),Q("",e.exercise.course==null?null:e.exercise.course.title," - ",e.exercise.title,"")}}function Bi(i,c){if(i&1&&(t(0,`
                `),s(1,"span"),t(2),a(),t(3,`
            `)),i&2){let e=l(2);r(2),Q("",e.exercise.exerciseGroup==null||e.exercise.exerciseGroup.exam==null?null:e.exercise.exerciseGroup.exam.title," - ",e.exercise.title,"")}}function ji(i,c){if(i&1){let e=b();t(0,`
            `),s(1,"h4",15),t(2,`
                `),s(3,"span",16),t(4,`
                    `),s(5,"strong",17),t(6),E(7,"artemisTranslate"),a(),t(8,`
                    `),u(9,"span",18),t(10,`
                `),a(),t(11,`
                `),s(12,"button",19),g("click",function(){_(e);let o=l(2);return f(o.resetFilterOptions())}),a(),t(13,`
            `),a(),t(14,`
        `)}if(i&2){let e=l(2);r(6),v(" ",M(7,2,"artemisApp.assessment.dashboard.activeFilter"),": "),r(3),m("translateValues",D(4,Mi,e.rangeFilter.toString()))}}function Ni(i,c){if(i&1){let e=b();t(0,`
                                `),s(1,"li"),t(2,`
                                    `),s(3,"label",20),t(4,`
                                        `),s(5,"input",21),g("click",function(){_(e);let o=l().$implicit,p=l(2);return f(p.updateParticipationFilter(o.value))}),a(),t(6,`
                                        `),s(7,"span",22),t(8),E(9,"artemisTranslate"),a(),t(10,`
                                    `),a(),t(11,`
                                `),a(),t(12,`
                            `)}if(i&2){let e,n=l().$implicit,o=l(2);r(5),m("ngModel",o.resultCriteria.filterProp)("value",n.value),r(3),Q(`
                                            `,M(9,4,"artemisApp.exercise.show"+n.value),`
                                            (`,(e=o.participationsPerFilter.get(n.value))!==null&&e!==void 0?e:0,`)
                                        `)}}function Oi(i,c){if(i&1&&(t(0,`
                            `),d(1,Ni,13,6)),i&2){let e=c.$implicit,n=l(2);r(),x(n.isFilterRelevantForConfiguration(e.value)?1:-1)}}function Wi(i,c){if(i&1&&(t(0,`
                    `),u(1,"span",23),E(2,"number"),t(3,`
                `)),i&2){let e,n=l(2);r(),m("translateValues",X(4,Fi,n.participationsPerFilter.get(n.resultCriteria.filterProp),n.filteredParticipations.length,R(2,1,((e=n.participationsPerFilter.get(n.resultCriteria.filterProp))!==null&&e!==void 0?e:0)*100/n.filteredParticipations.length,"1.0-1")))}}function Ui(i,c){if(i&1&&(t(0,`
                        `),s(1,"a",24),t(2,`
                            `),u(3,"fa-icon",6),t(4,`
                            `),u(5,"span",25),t(6,`
                        `),a(),t(7,`
                    `)),i&2){let e=l(2);r(),m("routerLink",X(2,ki,e.course.id,e.exercise.type+"-exercises",e.exercise.id)),r(2),m("icon",e.faListAlt)}}function Gi(i,c){if(i&1&&(t(0,`
                        `),s(1,"a",24),t(2,`
                            `),u(3,"fa-icon",6),t(4,`
                            `),u(5,"span",25),t(6,`
                        `),a(),t(7,`
                    `)),i&2){let e=l(2);r(),m("routerLink",Re(2,Li,e.course.id,e.exercise.exerciseGroup.exam.id,e.exercise.exerciseGroup.id,e.exercise.type+"-exercises",e.exercise.id)),r(2),m("icon",e.faListAlt)}}function Hi(i,c){if(i&1&&(t(0,`
                        `),u(1,"jhi-external-submission",26),t(2,`
                    `)),i&2){let e=l(2);r(),m("exercise",e.exercise)}}function zi(i,c){if(i&1){let e=b();t(0,`
                            `),s(1,"button",28),g("click",function(){_(e);let o=l(3);return f(o.exportNames())}),t(2,`
                                `),u(3,"fa-icon",6),t(4,`
                                `),u(5,"span",29),t(6,`
                            `),a(),t(7,`
                        `)}if(i&2){let e=l(3);r(3),m("icon",e.faDownload)}}function qi(i,c){if(i&1&&(t(0,`
                            `),u(1,"jhi-exercise-scores-export-button",30),t(2,`
                        `)),i&2){let e=l(3);r(),m("exercise",e.exercise)}}function Ki(i,c){if(i&1){let e=b();t(0,`
                            `),s(1,"jhi-programming-assessment-repo-export",31),g("buttonPressed",function(){_(e);let o=l(3);return f(o.closeExportPopover())}),a(),t(2,`
                        `)}if(i&2){let e=l(3);r(),m("programmingExercises",D(1,Di,e.exercise))}}function Qi(i,c){if(i&1&&(t(0,`
                            `),u(1,"jhi-exercise-submission-export",32),t(2,`
                        `)),i&2){let e=l(3);r(),m("exerciseId",e.exercise.id)("exerciseType",e.exercise.type)}}function Xi(i,c){if(i&1&&(t(0,`
                        `),u(1,"h5",27),t(2,`
                        `),d(3,zi,8,1)(4,qi,3,1)(5,Ki,3,3)(6,Qi,3,2)),i&2){let e=l(2);r(3),x(e.exercise.isAtLeastInstructor?3:-1),r(),x(e.exercise.isAtLeastInstructor?4:-1),r(),x(e.exercise.type===e.ExerciseType.PROGRAMMING?5:-1),r(),x(e.exercise.isAtLeastInstructor&&(e.exercise.type===e.ExerciseType.TEXT||e.exercise.type===e.ExerciseType.MODELING||e.exercise.type===e.ExerciseType.FILE_UPLOAD)?6:-1)}}function Zi(i,c){if(i&1){let e=b();t(0,`
                            `),s(1,"span",37),g("click",function(){_(e);let o=l().controls,p=l(2);return f(o.onSort(p.exercise.teamMode?"team.name":"student.name"))}),t(2,`
                                `),u(3,"span",38),t(4,`
                                `),u(5,"fa-icon",6),t(6,`
                            `),a(),t(7,`
                        `)}if(i&2){let e=l().controls,n=l(2);r(5),m("icon",e.iconForSortPropField(n.exercise.teamMode?"team.name":"student.name"))}}function $i(i,c){if(i&1&&(t(0,`
                                `),s(1,"span"),t(2,`
                                    `),s(3,"a",39),t(4),a(),t(5,`
                                `),a(),t(6,`
                            `)),i&2){let e=l().value,n=l(3);r(3),m("routerLink",n.getExerciseParticipationsLink(e.id)),r(),v(`
                                        `,(e.student==null?null:e.student.name)||(e.team==null?null:e.team.name),`
                                    `)}}function Ji(i,c){if(i&1&&(t(0,`
                                `),s(1,"span"),t(2),a(),t(3,`
                            `)),i&2){let e=l().value;r(2),v(`
                                    `,(e.student==null?null:e.student.name)||(e.team==null?null:e.team.name),`
                                `)}}function Yi(i,c){if(i&1&&(t(0,`
                            `),d(1,$i,7,2)(2,Ji,4,1)),i&2){let e=l(3);r(),x(e.exercise.isAtLeastInstructor?1:-1),r(),x(e.exercise.isAtLeastInstructor?-1:2)}}function en(i,c){if(i&1){let e=b();t(0,`
                                `),s(1,"span",37),g("click",function(){_(e);let o=l(2).controls;return f(o.onSort("team.shortName"))}),t(2,`
                                    `),u(3,"span",40),t(4,`
                                    `),u(5,"fa-icon",6),t(6,`
                                `),a(),t(7,`
                            `)}if(i&2){let e=l(2).controls;r(5),m("icon",e.iconForSortPropField("team.shortName"))}}function tn(i,c){if(i&1){let e=b();t(0,`
                                `),s(1,"span",37),g("click",function(){_(e);let o=l(2).controls;return f(o.onSort("student.login"))}),t(2,`
                                    `),u(3,"span",41),t(4,`
                                    `),u(5,"fa-icon",6),t(6,`
                                `),a(),t(7,`
                            `)}if(i&2){let e=l(2).controls;r(5),m("icon",e.iconForSortPropField("student.login"))}}function nn(i,c){if(i&1&&(t(0,`
                            `),d(1,en,8,1)(2,tn,8,1)),i&2){let e=l(3);r(),x(e.exercise.teamMode?1:2)}}function on(i,c){if(i&1&&(t(0,`
                                `),s(1,"a",39),t(2),a(),t(3,`
                            `)),i&2){let e=l().value,n=l(3);r(),m("routerLink",X(2,Pi,n.exercise.course==null?null:n.exercise.course.id,n.exercise.id,e.team.id)),r(),v(`
                                    `,e.team.shortName,`
                                `)}}function rn(i,c){if(i&1&&t(0),i&2){let e=l().value;v(`
                                `,e.student.login,`
                            `)}}function sn(i,c){if(i&1&&(t(0,`
                            `),d(1,on,4,6)(2,rn,1,1)),i&2){let e=l(3);r(),x(e.exercise.teamMode?1:2)}}function an(i,c){if(i&1){let e=b();t(0,`
                            `),s(1,"span",37),g("click",function(){_(e);let o=l().controls;return f(o.onSort("results?.last()?.completionDate"))}),t(2,`
                                `),u(3,"span",42),t(4,`
                                `),u(5,"fa-icon",6),t(6,`
                            `),a(),t(7,`
                        `)}if(i&2){let e=l().controls;r(5),m("icon",e.iconForSortPropField("results?.last()?.completionDate"))}}function ln(i,c){if(i&1&&(t(0),E(1,"artemisDate")),i&2){let e,n=c.value;v(`
                            `,M(1,1,n.results==null||(e=n.results.last())==null?null:e.completionDate),`
                        `)}}function cn(i,c){if(i&1){let e=b();t(0,`
                            `),s(1,"span",37),g("click",function(){_(e);let o=l().controls;return f(o.onSort("results?.last()?.score"))}),t(2,`
                                `),u(3,"span",43),t(4,`
                                `),u(5,"fa-icon",6),t(6,`
                            `),a(),t(7,`
                        `)}if(i&2){let e=l().controls;r(5),m("icon",e.iconForSortPropField("results?.last()?.score"))}}function pn(i,c){if(i&1&&(t(0,`
                                `),u(1,"jhi-result",44),t(2,`
                            `)),i&2){let e=l().value,n=l(3);r(),m("exercise",n.exercise)("result",e.results==null?null:e.results.last())("participation",e)}}function mn(i,c){if(i&1&&(t(0,`
                            `),d(1,pn,3,3)),i&2){let e=c.value;r(),x(e.results!=null&&e.results.last()?1:-1)}}function un(i,c){if(i&1){let e=b();t(0,`
                                `),s(1,"span",37),g("click",function(){_(e);let o=l(2).controls;return f(o.onSort("results?.last().assessmentType"))}),t(2,`
                                    `),u(3,"span",45),t(4,`
                                    `),u(5,"fa-icon",6),t(6,`
                                `),a(),t(7,`
                            `)}if(i&2){let e=l(2).controls;r(5),m("icon",e.iconForSortPropField("results?.last().assessmentType"))}}function dn(i,c){if(i&1&&t(0),i&2){let e=c.value;v(`
                                `,e.results==null?null:e.results.last().assessmentType,`
                            `)}}function xn(i,c){i&1&&(t(0,`
                        `),s(1,"ngx-datatable-column",34),t(2,`
                            `),d(3,un,8,1,"ng-template",35),t(4,`
                            `),d(5,dn,1,1,"ng-template",36),t(6,`
                        `),a(),t(7,`
                    `)),i&2&&(r(),m("sortable",!0)("minWidth",130)("width",140))}function _n(i,c){if(i&1){let e=b();t(0,`
                                `),s(1,"span",46),g("click",function(){_(e);let o=l(2).controls;return f(o.onSort("results?.last()?.assessmentNote?.note"))}),t(2,`
                                    `),u(3,"fa-icon",47),E(4,"artemisTranslate"),t(5,`
                                    `),u(6,"fa-icon",6),t(7,`
                                `),a(),t(8,`
                            `)}if(i&2){let e=l(2).controls,n=l(2);r(3),m("icon",n.faComment)("ngbTooltip",M(4,3,"artemisApp.assessment.assessmentNote")),r(3),m("icon",e.iconForSortPropField("results?.last()?.assessmentNote?.note"))}}function fn(i,c){if(i&1&&(t(0,`
                                    `),s(1,"span",48),t(2,`
                                        `),u(3,"fa-icon",49),t(4,`
                                    `),a(),t(5,`
                                `)),i&2){let e,n=l().value,o=l(4);r(3),m("ngbPopover",n.results==null||(e=n.results.last())==null?null:e.assessmentNote.note)("triggers","hover")("icon",o.faComment)("container","body")("popoverClass","max-vw-30 popover-text-truncate-4-lines")}}function gn(i,c){if(i&1&&(t(0,`
                                `),d(1,fn,6,5)),i&2){let e,n=c.value;r(),x(!(n.results==null||(e=n.results.last())==null||e.assessmentNote==null||e.assessmentNote.note==null)&&e.assessmentNote.note.trim()?1:-1)}}function Cn(i,c){i&1&&(t(0,`
                        `),s(1,"ngx-datatable-column",34),t(2,`
                            `),d(3,_n,9,5,"ng-template",35),t(4,`
                            `),d(5,gn,2,1,"ng-template",36),t(6,`
                        `),a(),t(7,`
                    `)),i&2&&(r(),m("sortable",!0)("minWidth",100)("width",100))}function bn(i,c){if(i&1){let e=b();t(0,`
                                `),s(1,"span",37),g("click",function(){_(e);let o=l(2).controls;return f(o.onSort("testRun"))}),t(2,`
                                    `),u(3,"span",51),t(4,`
                                    `),u(5,"fa-icon",6),t(6,`
                                `),a(),t(7,`
                            `)}if(i&2){let e=l(2).controls;r(5),m("icon",e.iconForSortPropField("testRun"))}}function hn(i,c){if(i&1&&(t(0),E(1,"artemisTranslate")),i&2){let e=c.value;v(`
                                `,M(1,1,e.testRun?"global.generic.yes":"global.generic.no"),`
                            `)}}function Sn(i,c){i&1&&(t(0,`
                        `),s(1,"ngx-datatable-column",50),t(2,`
                            `),d(3,bn,8,1,"ng-template",35),t(4,`
                            `),d(5,hn,2,3,"ng-template",36),t(6,`
                        `),a(),t(7,`
                    `)),i&2&&(r(),m("minWidth",100)("width",110))}function vn(i,c){if(i&1){let e=b();t(0,`
                            `),s(1,"span",46),g("click",function(){_(e);let o=l().controls;return f(o.onSort("submissionCount"))}),t(2,`
                                `),u(3,"span",52),t(4,`
                                `),u(5,"fa-icon",6),t(6,`
                            `),a(),t(7,`
                        `)}if(i&2){let e=l().controls;r(5),m("icon",e.iconForSortPropField("submissionCount"))}}function En(i,c){if(i&1&&(t(0,`
                                    `),s(1,"a",39),t(2),a(),t(3,`
                                `)),i&2){let e=l().value,n=l(3);r(),m("routerLink",n.getExerciseParticipationsLink(e.id)),r(),v(`
                                        `,e.submissionCount,`
                                    `)}}function yn(i,c){if(i&1&&t(0),i&2){let e=l().value;v(`
                                    `,e.submissionCount,`
                                `)}}function Tn(i,c){if(i&1&&(t(0,`
                            `),s(1,"div",48),t(2,`
                                `),d(3,En,4,2)(4,yn,1,1),a(),t(5,`
                        `)),i&2){let e=l(3);r(3),x(e.exercise.isAtLeastInstructor?3:4)}}function wn(i,c){if(i&1){let e=b();t(0,`
                            `),s(1,"span",37),g("click",function(){_(e);let o=l().controls;return f(o.onSort("results?.last()?.durationInMinutes"))}),t(2,`
                                `),u(3,"span",53),t(4,`
                                `),u(5,"fa-icon",6),t(6,`
                            `),a(),t(7,`
                        `)}if(i&2){let e=l().controls;r(5),m("icon",e.iconForSortPropField("results?.last()?.durationInMinutes"))}}function An(i,c){if(i&1&&(t(0),E(1,"artemisDurationFromSeconds")),i&2){let e,n=c.value;v(`
                            `,!(n.results==null||(e=n.results.last())==null)&&e.durationInMinutes?R(1,1,n.results==null||(e=n.results.last())==null?null:e.durationInMinutes,!0):"-",`
                        `)}}function Mn(i,c){if(i&1&&(t(0,`
                                                    `),s(1,"a",59),t(2,`
                                                        `),u(3,"fa-icon",60),t(4,`
                                                        Repository
                                                    `),a(),t(5,`
                                                `)),i&2){let e=l(3).value,n=l(4);r(),he("href",n.getRepositoryLink(e),be),r(2),m("icon",n.faCodeBranch)}}function Fn(i,c){if(i&1&&(t(0,`
                                                    `),u(1,"jhi-code-button",61),t(2,`
                                                `)),i&2){let e=l(3).value,n=l(4);r(),m("smallButtons",!0)("repositoryUri",n.getRepositoryLink(e)||"")("routerLinkForRepositoryView",V(3,Vi,n.RepositoryType.USER,e.id))}}function kn(i,c){if(i&1&&(t(0,`
                                                `),d(1,Mn,6,2)(2,Fn,3,6)),i&2){let e=l(6);r(),x(e.localVCEnabled?2:1)}}function Ln(i,c){if(i&1&&(t(0,`
                                                `),s(1,"a",62),t(2,`
                                                    `),u(3,"fa-icon",60),t(4,`
                                                    Build plan
                                                `),a(),t(5,`
                                            `)),i&2){let e=l(2).value,n=l(4);r(),he("href",e.buildPlanUrl,be),r(2),m("icon",n.farFileCode)}}function Dn(i,c){if(i&1&&(t(0,`
                                        `),s(1,"div",56),t(2,`
                                            `),d(3,kn,3,1)(4,Ln,6,2),s(5,"a",57),t(6,`
                                                `),u(7,"fa-icon",58),t(8,`
                                                Online editor
                                            `),a(),t(9,`
                                        `),a(),t(10,`
                                    `)),i&2){let e=l().value,n=l(4);r(3),x(n.getRepositoryLink(e)?3:-1),r(),x(n.buildPlanId(e)&&!n.localVCEnabled?4:-1),r(),m("routerLink",X(6,Ii,n.course.id,n.exercise.id,e.id))("jhiFeatureToggleLink",n.FeatureToggle.ProgrammingExercises),r(2),m("icon",n.faFolderOpen)("fixedWidth",!0)}}function Pn(i,c){if(i&1){let e=b();t(0,`
                                `),s(1,"div",54),t(2,`
                                    `),d(3,Dn,11,10),s(4,"jhi-manage-assessment-buttons",55),g("refresh",function(){_(e);let o=l(4);return f(o.refresh())}),a(),t(5,`
                                `),a(),t(6,`
                            `)}if(i&2){let e=c.value,n=l(4);r(3),x(n.exercise.type===n.ExerciseType.PROGRAMMING?3:-1),r(),m("course",n.course)("exercise",n.exercise)("participation",e)("isLoading",n.isLoading)}}function In(i,c){i&1&&(t(0,`
                        `),s(1,"ngx-datatable-column",50),t(2,`
                            `),d(3,Pn,7,5,"ng-template",36),t(4,`
                        `),a(),t(5,`
                    `)),i&2&&(r(),m("minWidth",350)("width",400))}function Vn(i,c){if(i&1&&(t(0,`
                `),s(1,"ngx-datatable",33),t(2,`
                    `),s(3,"ngx-datatable-column",34),t(4,`
                        `),d(5,Zi,8,1,"ng-template",35),t(6,`
                        `),d(7,Yi,3,2,"ng-template",36),t(8,`
                    `),a(),t(9,`
                    `),s(10,"ngx-datatable-column",34),t(11,`
                        `),d(12,nn,3,1,"ng-template",35),t(13,`
                        `),d(14,sn,3,1,"ng-template",36),t(15,`
                    `),a(),t(16,`
                    `),s(17,"ngx-datatable-column",34),t(18,`
                        `),d(19,an,8,1,"ng-template",35),t(20,`
                        `),d(21,ln,2,3,"ng-template",36),t(22,`
                    `),a(),t(23,`
                    `),s(24,"ngx-datatable-column",34),t(25,`
                        `),d(26,cn,8,1,"ng-template",35),t(27,`
                        `),d(28,mn,2,1,"ng-template",36),t(29,`
                    `),a(),t(30,`
                    `),d(31,xn,8,3)(32,Cn,8,3)(33,Sn,8,2),s(34,"ngx-datatable-column",34),t(35,`
                        `),d(36,vn,8,1,"ng-template",35),t(37,`
                        `),d(38,Tn,6,1,"ng-template",36),t(39,`
                    `),a(),t(40,`
                    `),s(41,"ngx-datatable-column",34),t(42,`
                        `),d(43,wn,8,1,"ng-template",35),t(44,`
                        `),d(45,An,2,4,"ng-template",36),t(46,`
                    `),a(),t(47,`
                    `),d(48,In,6,2),a(),t(49,`
            `)),i&2){let e=c.settings,n=l(2);r(),m("limit",e.limit)("sortType",e.sortType)("columnMode",e.columnMode)("headerHeight",e.headerHeight)("footerHeight",e.footerHeight)("rowHeight",e.rowHeight)("rows",e.rows)("rowClass",e.rowClass)("scrollbarH",e.scrollbarH),r(2),m("sortable",!0)("minWidth",100)("width",180),r(7),m("sortable",!0)("minWidth",100)("width",110),r(7),m("sortable",!0)("minWidth",130)("width",140),r(7),m("sortable",!0)("minWidth",250)("width",260),r(7),x(n.newManualResultAllowed||n.exercise.allowComplaintsForAutomaticAssessments?31:-1),r(),x(n.exercise.assessmentType===n.AssessmentType.MANUAL||n.exercise.assessmentType===n.AssessmentType.SEMI_AUTOMATIC?32:-1),r(),x(n.exercise.type===n.ExerciseType.PROGRAMMING&&n.afterDueDate?33:-1),r(),m("sortable",!0)("minWidth",100)("width",110),r(7),m("sortable",!0)("minWidth",80)("width",90),r(7),x(n.exercise.isAtLeastInstructor?48:-1)}}function Rn(i,c){if(i&1){let e=b();t(0,`
    `),s(1,"div"),t(2,`
        `),s(3,"h2"),t(4,`
            `),d(5,Ri,4,2)(6,Bi,4,2),a(),t(7,`
        `),d(8,ji,15,6),s(9,"div",2),t(10,`
            `),s(11,"div",3),t(12,`
                `),s(13,"div",4),t(14,`
                    `),s(15,"button",5),t(16,`
                        `),u(17,"fa-icon",6),t(18,`
                        `),s(19,"span",7),t(20),E(21,"artemisTranslate"),E(22,"artemisTranslate"),a(),t(23,`
                    `),a(),t(24,`
                    `),s(25,"ul",8),t(26,`
                        `),N(27,Oi,2,1,null,null,j),E(29,"keyvalue"),a(),t(30,`
                `),a(),t(31,`
                `),d(32,Wi,4,8),a(),t(33,`
            `),s(34,"div",9),t(35,`
                `),s(36,"div",10),t(37,`
                    `),d(38,Ui,8,6)(39,Gi,8,8)(40,Hi,3,1),u(41,"button",11,0),E(43,"artemisTranslate"),t(44,`
                    `),d(45,Xi,7,4,"ng-template",null,1,Be),t(47,`
                    `),s(48,"button",12),g("click",function(){_(e);let o=l();return f(o.refresh())}),t(49,`
                        `),u(50,"fa-icon",6),t(51,`
                        `),u(52,"span",13),t(53,`
                    `),a(),t(54,`
                `),a(),t(55,`
            `),a(),t(56,`
        `),a(),t(57,`
        `),s(58,"jhi-data-table",14),t(59,`
            `),d(60,Vn,50,31,"ng-template"),t(61,`
        `),a(),t(62,`
    `),a(),t(63,`
`)}if(i&2){let e,n=I(46),o=l();r(5),x(o.exercise.course?5:-1),r(),x(o.exercise.exerciseGroup?6:-1),r(2),x(o.rangeFilter?8:-1),r(9),m("icon",o.faFilter),r(3),Q("",R(22,26,"artemisApp.exercise.scoresFilter",D(33,Ti,M(21,24,"artemisApp.exercise.show"+o.resultCriteria.filterProp))),`
                            (`,(e=o.participationsPerFilter.get(o.resultCriteria.filterProp))!==null&&e!==void 0?e:0,`)
                        `),r(7),O(M(29,29,o.FilterProp)),r(5),x(o.filteredParticipations.length&&o.participationsPerFilter.get(o.resultCriteria.filterProp)!==o.filteredParticipations.length?32:-1),r(6),x(o.exercise.exerciseGroup?-1:38),r(),x(o.exercise.exerciseGroup?39:-1),r(),x(o.exercise.isAtLeastInstructor?40:-1),r(),m("buttonIcon",o.faDownload)("buttonLabel",M(43,31,"entity.action.export"))("hideLabelMobile",!1)("ngbPopover",n)("autoClose","outside"),r(9),m("icon",o.faSync),r(8),m("isLoading",o.isLoading)("allEntities",o.filteredParticipations)("searchPlaceholderTranslation",o.exercise.teamMode?"artemisApp.exercise.searchForTeams":"artemisApp.exercise.searchForStudents")("searchFields",o.exercise.teamMode?Se(35,wi):Se(36,Ai))("searchTextFromEntity",o.searchTextFromParticipation)("searchResultFormatter",o.searchParticipationFormatter)("customFilterKey",o.resultCriteria.filterProp)("customFilter",o.filterParticipationsByProp)}}var y=function(i){return i.ALL="All",i.SUCCESSFUL="Successful",i.UNSUCCESSFUL="Unsuccessful",i.BUILD_FAILED="BuildFailed",i.MANUAL="Manual",i.AUTOMATIC="Automatic",i.LOCKED="Locked",i}(y||{}),Cs=(()=>{class i{route=C(We);courseService=C(pt);exerciseService=C(me);resultService=C(ge);profileService=C(rt);programmingSubmissionService=C(Vt);participationService=C(ct);FilterProp=y;ExerciseType=F;FeatureToggle=ae;AssessmentType=q;RepositoryType=Ot;scoreRanges=[new L(0,10),new L(10,20),new L(20,30),new L(30,40),new L(40,50),new L(50,60),new L(60,70),new L(70,80),new L(80,90),new L(90,100)];exportPopover;course;exercise;paramSub;reverse;participations=[];filteredParticipations=[];eventSubscriber;newManualResultAllowed;rangeFilter;resultCriteria={filterProp:y.ALL};participationsPerFilter=new Map;isLoading;afterDueDate=!1;localVCEnabled=!1;faDownload=pe;faSync=Je;faFolderOpen=ce;faListAlt=nt;faCodeBranch=et;farFileCode=yt;faFilter=Ye;faComment=it;ngOnInit(){this.paramSub=this.route.params.subscribe(e=>{this.isLoading=!0;let n=this.courseService.find(e.courseId),o=this.exerciseService.find(e.exerciseId),p=this.route.snapshot.queryParamMap.get("scoreRangeFilter");p&&(this.rangeFilter=this.scoreRanges[Number(p)]),ye([n,o]).subscribe(([h,S])=>{this.course=h.body,this.exercise=S.body,this.afterDueDate=!!this.exercise.dueDate&&Z().isAfter(this.exercise.dueDate),this.participationService.findAllParticipationsByExercise(this.exercise.id,!0).subscribe(Ce=>{this.handleNewParticipations(Ce)}),this.newManualResultAllowed=fe(this.exercise)})})}getExerciseParticipationsLink(e){return this.exercise.exerciseGroup?["/course-management",this.course.id.toString(),"exams",this.exercise.exerciseGroup.exam.id.toString(),"exercise-groups",this.exercise.exerciseGroup.id.toString(),this.exercise.type+"-exercises",this.exercise.id.toString(),"participations",e.toString()]:["/course-management",this.course.id.toString(),this.exercise.type+"-exercises",this.exercise.id.toString(),"participations",e.toString(),"submissions"]}handleNewParticipations(e){this.participations=e.body??[],this.participations.forEach(n=>{n.results?.forEach((p,h)=>{n.results[h].durationInMinutes=Z(p.completionDate).diff(n.initializationDate,"seconds")}),n.results?.sort((p,h)=>(p.id??0)-(h.id??0));let o=n.results?.filter(p=>p.assessmentType!==q.AUTOMATIC_ATHENA);o?.length!=0?o?.[0].submission?n.submissions=[o?.[0].submission]:n.results?.[0].submission&&(n.submissions=[n.results?.[0].submission]):n.results=void 0}),this.filteredParticipations=this.filterByScoreRange(this.participations),this.exercise.type===F.PROGRAMMING&&this.exercise.projectKey&&this.profileService.getProfileInfo().subscribe(o=>{this.localVCEnabled=o.activeProfiles.includes(ut)});for(let n of Object.values(y))this.isFilterRelevantForConfiguration(n)&&this.participationsPerFilter.set(n,this.filteredParticipations.filter(o=>this.filterParticipationsByProp(o,n)).length);this.isLoading=!1}updateParticipationFilter(e){this.isLoading=!0,setTimeout(()=>{this.resultCriteria.filterProp=e,this.isLoading=!1})}filterParticipationsByProp=(e,n=this.resultCriteria.filterProp)=>{let o=e.results?.last();switch(n){case y.SUCCESSFUL:return!!o?.successful;case y.UNSUCCESSFUL:return!o?.successful;case y.BUILD_FAILED:return!!(e.submissions?.[0]&&(e.submissions?.[0]).buildFailed);case y.MANUAL:return!!o&&At(o);case y.AUTOMATIC:return o?.assessmentType===q.AUTOMATIC;case y.LOCKED:return!!o&&!o.completionDate;case y.ALL:default:return!0}};isFilterRelevantForConfiguration(e){switch(e){case y.BUILD_FAILED:return this.exercise.type===F.PROGRAMMING;case y.MANUAL:case y.AUTOMATIC:return this.newManualResultAllowed||!!this.exercise.allowComplaintsForAutomaticAssessments;case y.LOCKED:return this.newManualResultAllowed&&!!this.exercise.isAtLeastInstructor;default:return!0}}buildPlanId(e){return e?.buildPlanId}projectKey(){return this.exercise.projectKey}getRepositoryLink(e){return e.userIndependentRepositoryUri}exportNames(){if(this.participations.length){let e=[];this.participations.forEach((n,o)=>{let p=n,{participantName:h}=p;if(p.team){o===0&&e.push("data:text/csv;charset=utf-8,Team Name,Team Short Name,Students");let{name:S,shortName:Ce,students:ii}=p.team;e.push(`${S},${Ce},"${ii?.map(ni=>ni.name).join(", ")}"`)}else e.push(o===0?`data:text/csv;charset=utf-8,${h}`:h)}),this.resultService.triggerDownloadCSV(e,"results-names.csv")}}searchParticipationFormatter=e=>{let n=e;if(n.student){let{login:o,name:p}=n.student;return`${o} (${p})`}else if(n.team)return It(n.team);return""};searchTextFromParticipation=e=>e.participantIdentifier||"";refresh(){this.isLoading=!0,this.participations=[],this.filteredParticipations=[],this.participationService.findAllParticipationsByExercise(this.exercise.id,!0).subscribe(e=>{this.handleNewParticipations(e)})}ngOnDestroy(){this.paramSub.unsubscribe(),this.programmingSubmissionService.unsubscribeAllWebsocketTopics(this.exercise)}filterByScoreRange(e){if(!this.rangeFilter)return e;let n;return this.rangeFilter.upperBound===100?n=o=>{let p=o.results?.last();return!!p?.score&&p?.score>=this.rangeFilter.lowerBound&&p.score<=this.rangeFilter.upperBound}:n=o=>{let p=o.results?.last();return p?.score!==void 0&&p.score>=this.rangeFilter.lowerBound&&p.score<this.rangeFilter.upperBound},e.filter(n)}resetFilterOptions(){this.rangeFilter=void 0,this.filteredParticipations=this.participations,this.resultCriteria.filterProp=y.ALL}closeExportPopover(){this.exportPopover?.close()}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=k({type:i,selectors:[["jhi-exercise-scores"]],viewQuery:function(n,o){if(n&1&&De(yi,5),n&2){let p;Pe(p=Ie())&&(o.exportPopover=p.first)}},features:[Ve([Ft])],decls:1,vars:1,consts:[["exportPopover","ngbPopover"],["popContent",""],[1,"d-flex","flex-wrap"],[1,"d-flex","flex-fill","align-items-center","mr-auto"],["aria-label","Filter Dropdown","ngbDropdown","",1,"me-2"],["ngbDropdownToggle","","id","filter-dropdown-button",1,"btn","btn-primary"],[3,"icon"],[1,"d-s-none","d-md-inline"],["ngbDropdownMenu","","aria-labelledby","filter-dropdown-button",1,"checkbox-menu","text-nowrap","pe-2"],[1,"p-2"],[1,"button-toolbar"],["jhi-exercise-action-button","","placement","bottom-right auto","container","body",1,"btn","btn-info","btn-sm","me-1",3,"buttonIcon","buttonLabel","hideLabelMobile","ngbPopover","autoClose"],[1,"btn","btn-primary","btn-sm",3,"click"],["jhiTranslate","artemisApp.exercise.refresh",1,"d-none","d-md-inline"],["entityType","participation","entitiesPerPageTranslation","artemisApp.exercise.resultsPerPage","showAllEntitiesTranslation","artemisApp.exercise.showAllResults",3,"isLoading","allEntities","searchPlaceholderTranslation","searchFields","searchTextFromEntity","searchResultFormatter","customFilterKey","customFilter"],[1,"d-flex","align-items-center"],[1,"me-2"],[1,"text-primary"],["jhiTranslate","artemisApp.exercise.showingOnlyInRange",1,"ms-1",3,"translateValues"],["type","button","jhiTranslate","artemisApp.assessment.dashboard.resetFilter",1,"btn","btn-primary",3,"click"],[1,"radio-inline","ms-2","mb-0","d-flex","align-items-center"],["type","radio",3,"click","ngModel","value"],[1,"ms-1"],["jhiTranslate","artemisApp.exercise.showingOfResults",3,"translateValues"],[1,"btn","btn-primary","btn-sm","me-1",3,"routerLink"],["jhiTranslate","artemisApp.exercise.participations",1,"d-none","d-md-inline"],[1,"d-inline-block","me-1","mb-1",3,"exercise"],["jhiTranslate","artemisApp.exercise.export.options"],[1,"btn","btn-info","btn-sm","me-1",3,"click"],["jhiTranslate","artemisApp.exercise.export.names",1,"d-none","d-md-inline"],[3,"exercise"],[1,"me-1",3,"buttonPressed","programmingExercises"],[1,"me-1",3,"exerciseId","exerciseType"],[1,"bootstrap",3,"limit","sortType","columnMode","headerHeight","footerHeight","rowHeight","rows","rowClass","scrollbarH"],["prop","",3,"sortable","minWidth","width"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],[1,"datatable-header-cell-wrapper",3,"click"],["jhiTranslate","artemisApp.exercise.name",1,"datatable-header-cell-label","bold","sortable"],[3,"routerLink"],["jhiTranslate","artemisApp.exercise.teamShortName",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.exercise.studentId",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.exercise.completionDate",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.exercise.lastResult",1,"datatable-header-cell-label","bold"],[3,"exercise","result","participation"],["jhiTranslate","artemisApp.exercise.type",1,"datatable-header-cell-label","bold"],[1,"datatable-header-cell-wrapper","d-inline-block","w-100","text-center",3,"click"],[3,"icon","ngbTooltip"],[1,"w-100","text-center"],[3,"ngbPopover","triggers","icon","container","popoverClass"],["prop","",3,"minWidth","width"],["jhiTranslate","artemisApp.participation.practice",1,"datatable-header-cell-label","bold"],["jhiTranslate","artemisApp.exercise.submissionCount",1,"datatable-header-cell-label","bold"],["jhiTranslate","artemisApp.exercise.duration",1,"datatable-header-cell-label","bold"],[1,"button-header"],[3,"refresh","course","exercise","participation","isLoading"],[1,"mb-2"],[1,"btn","btn-info","btn-sm","me-1",3,"routerLink","jhiFeatureToggleLink"],[1,"me-1",3,"icon","fixedWidth"],[1,"btn","btn-primary","btn-sm","me-1",3,"href"],[1,"me-1",3,"icon"],[1,"me-1",3,"smallButtons","repositoryUri","routerLinkForRepositoryView"],["target","_blank","rel","noreferrer",1,"btn","btn-primary","btn-sm","me-1",3,"href"]],template:function(n,o){n&1&&d(0,Rn,64,37),n&2&&x(o.exercise?0:-1)},dependencies:[K,Ke,qe,P,ze,z,U,Ge,G,H,Y,Zt,Rt,Qe,Ht,zt,Yt,Et,vt,St,ht,Ct,bt,Lt,Xe,Bt,Nt,ti,Oe,Ne,dt,ue,kt],encapsulation:2})}return i})();export{Cs as a};
//# sourceMappingURL=chunk-37OIC5OT.js.map
