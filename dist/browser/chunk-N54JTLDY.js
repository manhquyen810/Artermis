import{a as ci}from"./chunk-NT3333UE.js";import{a as di,b as fi}from"./chunk-VOBYQYWS.js";import{a as xi}from"./chunk-23SCGJT4.js";import{a as li}from"./chunk-7MNRIAWL.js";import{a as ui}from"./chunk-TOVMCMTA.js";import{a as mi}from"./chunk-COI3ESZV.js";import{a as pi}from"./chunk-SUUJN3EQ.js";import{a as ri}from"./chunk-YSX3GO3R.js";import{a as ai}from"./chunk-JRBFEQNN.js";import{m as ni,n as si}from"./chunk-5AQXEKLE.js";import{l as ii}from"./chunk-3JSWSN6W.js";import{a as oi}from"./chunk-KYCCMZSV.js";import{e as ei,f as ti}from"./chunk-DXTZ4GAW.js";import{q as K}from"./chunk-Z2YUBN6N.js";import{a as Z,d as J}from"./chunk-O26CMRR4.js";import{a as q}from"./chunk-JHBUBEY6.js";import{b as g,h as G}from"./chunk-PUNMJFMR.js";import{c as Q}from"./chunk-5MVJAZRV.js";import{v as H}from"./chunk-5GXY5RYT.js";import{a as X}from"./chunk-K3W6YFKH.js";import{c as z}from"./chunk-JXJXC4DZ.js";import{d as $}from"./chunk-EDXSOKK5.js";import{b as W}from"./chunk-R5BZWVRQ.js";import{p as U}from"./chunk-DID2YGL7.js";import{k as R}from"./chunk-CXQURQM5.js";import{cc as O}from"./chunk-Z4VHWOB5.js";import{a as Y}from"./chunk-U54OSGNH.js";import{f as V}from"./chunk-M6Z6DKZQ.js";import{x as j}from"./chunk-IOA4DPXY.js";import{Ac as I,Ad as N,Bc as D,Db as n,Dc as E,Ea as f,Ma as S,Mc as v,Na as C,Oc as r,Tb as y,Yc as k,Zb as u,Zc as L,_c as B,dd as e,ed as M,fd as _,kc as d,rd as F,sc as c,uc as T,vc as P,wb as A,wc as w,xc as o,yc as a,yd as b,zc as m,zd as h}from"./chunk-5LC5EQRR.js";var Si=["fileInput"],bi=t=>({filename:t});function Ci(t,p){if(t&1){let i=E();e(0,`
                `),o(1,"jhi-button",5),v("onClick",function(){S(i);let l=r(2);return C(l.submitExercise())}),a(),e(2,`
            `)}if(t&2){let i=r(2);n(),d("disabled",!i.isActive&&!i.isLate||!i.submission||!i.submissionFile||!!i.result)("title",i.isLate?"entity.action.submitDueDateMissed":"entity.action.submit")("btnType",i.isLate?i.ButtonType.WARNING:i.ButtonType.PRIMARY)("tooltip",i.submitButtonTooltip)("isLoading",i.isSaving)}}function Ei(t,p){if(t&1&&(e(0,`
    `),o(1,"jhi-header-participation-page",1),e(2,`
        `),o(3,"span",2),e(4),b(5,"artemisTranslate"),o(6,"span",3),e(7),a(),e(8,`
        `),a(),e(9,`
        `),I(10,4),e(11,`
            `),u(12,Ci,3,5),D(),e(13,`
    `),a(),e(14,`
`)),t&2){let i=r();n(),d("exercise",i.fileUploadExercise)("participation",i.participation),n(3),_(`
            `,h(5,5,"artemisApp.fileUploadSubmission.fileUpload"),`:
            `),n(3),M(i.examMode?i.fileUploadExercise==null||i.fileUploadExercise.exerciseGroup==null?null:i.fileUploadExercise.exerciseGroup.title:i.fileUploadExercise==null?null:i.fileUploadExercise.title),n(5),c(i.isOwnerOfParticipation?12:-1)}}function vi(t,p){if(t&1&&(e(0,`
                                `),o(1,"div",19),e(2,`
                                    `),o(3,"span",20),e(4),b(5,"uppercase"),a(),e(6,`
                                `),a(),e(7,`
                            `)),t&2){let i=p.$implicit;n(4),_(`
                                        `,h(5,1,i),`
                                    `)}}function Fi(t,p){if(t&1){let i=E();e(0,`
                    `),o(1,"div",12),e(2,`
                        `),o(3,"div",13),e(4,`
                            `),m(5,"label",14),e(6,`
                            `),o(7,"div",15),e(8,`
                                `),o(9,"div",16),e(10,`
                                    `),o(11,"input",17,0),v("change",function(l){S(i);let x=r(2);return C(x.setFileSubmissionForExercise(l))}),a(),e(13,`
                                `),a(),e(14,`
                            `),a(),e(15,`
                            `),m(16,"p",18),e(17,`
                            `),P(18,vi,8,3,null,null,T),a(),e(20,`
                    `),a(),e(21,`
                `)}if(t&2){let i=r(2);n(18),w(i.fileUploadExercise.filePattern.split(","))}}function Ui(t,p){if(t&1&&(e(0,`
                        `),o(1,"h6"),e(2),b(3,"artemisTranslate"),o(4,"span"),e(5),b(6,"artemisTimeAgo"),a(),e(7,`
                        `),a(),e(8,`
                    `)),t&2){let i=r(3);n(2),_(`
                            `,N(3,2,"artemisApp.fileUploadSubmission.submittedFile",F(7,bi,i.submittedFileName)),`
                            `),n(3),_(" ",h(6,5,i.submission.submissionDate),"")}}function gi(t,p){if(t&1&&(e(0,`
                        `),m(1,"h5",24),e(2,`
                        `),m(3,"span",25),e(4,`
                    `)),t&2){let i=r(3);n(3),d("translateValues",F(1,bi,i.submittedFileName))}}function Ai(t,p){if(t&1&&(e(0,`
                            `),o(1,"span",26),e(2),b(3,"uppercase"),a(),e(4,`
                        `)),t&2){let i=r(3);n(2),_(`
                                `,h(3,1,i.submittedFileExtension),`
                            `)}}function yi(t,p){if(t&1){let i=E();e(0,`
                `),o(1,"div",21),e(2,`
                    `),u(3,Ui,9,9)(4,gi,5,3),m(5,"br"),e(6,`
                    `),o(7,"div",22),e(8,`
                        `),o(9,"button",23),b(10,"artemisTranslate"),v("click",function(){S(i);let l=r(2);return C(l.downloadFile(l.submission.filePath))}),a(),e(11,`
                        `),u(12,Ai,5,3),a(),e(13,`
                `),a(),e(14,`
            `)}if(t&2){let i=r(2);n(3),c(i.displayedInExamSummary?4:3),n(6),d("smallButton",!0)("buttonIcon",i.faDownload)("buttonLabel",h(10,5,"artemisApp.fileUploadSubmission.download")),n(3),c(i.submittedFileExtension?12:-1)}}function Ti(t,p){if(t&1&&(e(0,`
                            `),m(1,"jhi-additional-feedback",28),e(2,`
                        `)),t&2){let i=r(3);n(),d("feedback",i.unreferencedFeedback)("additional",!1)("course",i.course)}}function Pi(t,p){if(t&1&&(e(0,`
                            `),m(1,"jhi-rating",29),e(2,`
                        `)),t&2){let i=r(3);n(),d("result",i.addParticipationToResult(i.result,i.participation))}}function wi(t,p){if(t&1&&(e(0,`
                `),o(1,"div"),e(2,`
                    `),m(3,"br"),e(4,`
                    `),o(5,"h5"),m(6,"span",27),e(7,":"),a(),e(8,`
                    `),o(9,"div",8),e(10,`
                        `),u(11,Ti,3,3),a(),e(12,`
                    `),o(13,"div",8),e(14,`
                        `),u(15,Pi,3,1),a(),e(16,`
                `),a(),e(17,`
            `)),t&2){let i=r(2);n(11),c(i.unreferencedFeedback!=null&&i.unreferencedFeedback.length&&i.unreferencedFeedback.length>0?11:-1),n(4),c(i.isOwnerOfParticipation?15:-1)}}function Ii(t,p){if(t&1&&(e(0,`
                `),m(1,"jhi-complaint-student-view",30),e(2,`
            `)),t&2){let i=r(2);n(),d("result",i.resultWithComplaint?i.resultWithComplaint:i.result)("participation",i.participation)("exercise",i.fileUploadExercise)}}function Di(t,p){if(t&1&&(e(0,`
                `),m(1,"span",31),b(2,"htmlForMarkdown"),e(3,`
            `)),t&2){let i=r(2);n(),d("innerHTML",h(2,1,i.fileUploadExercise.problemStatement),A)}}function ki(t,p){if(t&1&&(e(0,`
    `),o(1,"jhi-resizeable-container",6),e(2,`
        `),e(3,`
        `),o(4,"div",7),e(5,`
            `),o(6,"div",8),e(7,`
                `),u(8,Fi,22,0),a(),e(9,`
            `),u(10,yi,15,7)(11,wi,18,2)(12,Ii,3,3),a(),e(13,`
        `),e(14,`
        `),e(15,`
        `),m(16,"fa-icon",9),e(17,`\xA0
        `),m(18,"span",10),e(19,`
        `),o(20,"p",11),e(21,`
            `),u(22,Di,4,3),a(),e(23,`
        `),e(24,`
    `),a(),e(25,`
`)),t&2){let i=r();n(),d("isExerciseParticipation",!0)("expandProblemStatement",i.expandProblemStatement),n(7),c((i.isActive||i.isLate)&&!i.result&&i.fileUploadExercise&&i.submission&&i.isOwnerOfParticipation?8:-1),n(2),c(i.submittedFileName&&(i.submission!=null&&i.submission.filePath)?10:-1),n(),c(i.result&&i.result.feedbacks&&i.result.feedbacks.length&&i.result.feedbacks.length>0?11:-1),n(),c(i.fileUploadExercise&&i.result&&i.participation&&i.isAfterAssessmentDueDate&&!i.examMode?12:-1),n(4),d("icon",i.farListAlt),n(6),c(i.fileUploadExercise.problemStatement?22:-1)}}var ye=(()=>{class t{route=f(V);fileUploadSubmissionService=f(li);alertService=f(z);fileService=f(pi);participationWebsocketService=f(q);fileUploadAssessmentService=f(mi);accountService=f(W);addParticipationToResult=ni;fileInput;participationId;displayHeader=!0;expandProblemStatement=!0;displayedInExamSummary=!1;inputExercise;inputSubmission;inputParticipation;submission;submittedFileName;submittedFileExtension;fileUploadExercise;participation;result;resultWithComplaint;submissionFile;course;isAfterAssessmentDueDate;isSaving;isOwnerOfParticipation;examMode=!1;acceptedFileExtensions;isLate;faDownload=O;ButtonType=Z;farListAlt=K;ngOnInit(){if(this.inputValuesArePresent())this.setupComponentWithInputValues();else{let i=this.participationId??Number(this.route.snapshot.paramMap.get("participationId"));if(Number.isNaN(i))return this.alertService.error("artemisApp.fileUploadExercise.error");this.fileUploadSubmissionService.getDataForFileUploadEditor(i).subscribe({next:s=>{let l=g(s);l&&(s.participation.results=[l]),this.participation=s.participation,this.participation.submissions=[H(s,"participation")],this.submission=s,this.result=l,this.resultWithComplaint=G(s),this.fileUploadExercise=this.participation.exercise,this.examMode=!!this.fileUploadExercise.exerciseGroup,this.fileUploadExercise.studentParticipations=[this.participation],this.course=R(this.fileUploadExercise),this.isLate=this.fileUploadExercise&&!!this.fileUploadExercise.dueDate&&!!this.participation.initializationDate&&U(this.participation.initializationDate).isAfter(ti(this.fileUploadExercise,this.participation)),this.acceptedFileExtensions=this.fileUploadExercise.filePattern.split(",").map(x=>`.${x}`).join(","),this.isAfterAssessmentDueDate=!this.fileUploadExercise.assessmentDueDate||U().isAfter(this.fileUploadExercise.assessmentDueDate),this.submission?.submitted&&this.setSubmittedFile(),this.submission?.submitted&&this.result?.completionDate&&this.fileUploadAssessmentService.getAssessment(this.submission.id).subscribe(x=>{this.result=x}),this.isOwnerOfParticipation=this.accountService.isOwnerOfParticipation(this.participation)},error:s=>Q(this.alertService,s)})}}inputValuesArePresent(){return!!(this.inputExercise||this.inputSubmission||this.inputParticipation)}setupComponentWithInputValues(){this.inputExercise&&(this.fileUploadExercise=this.inputExercise),this.inputSubmission&&(this.submission=this.inputSubmission),this.inputParticipation&&(this.participation=this.inputParticipation),this.submission?.submitted&&this.setSubmittedFile()}submitExercise(){if(this.isSaving)return;let i=this.submissionFile;!this.submission||!i||(this.isSaving=!0,this.fileUploadSubmissionService.update(this.submission,this.fileUploadExercise.id,i).subscribe({next:s=>{this.submission=s.body,this.participation=this.submission.participation,this.submission.participation.submissions=[this.submission],this.participationWebsocketService.addParticipation(this.participation,this.fileUploadExercise),this.fileUploadExercise.studentParticipations=[this.participation],this.result=g(this.submission),this.setSubmittedFile(),this.isActive?this.alertService.success("artemisApp.fileUploadExercise.submitSuccessful"):this.alertService.warning("artemisApp.fileUploadExercise.submitDueDateMissed"),this.isSaving=!1},error:s=>{this.submission.submitted=!1;let l=s.headers.get("X-artemisApp-error");l?this.alertService.error(l,{fileName:i.name}):this.alertService.error("artemisApp.fileUploadSubmission.fileUploadError",{fileName:i.name}),this.fileInput.nativeElement.value="",this.submissionFile=void 0,this.isSaving=!1}}))}setFileSubmissionForExercise(i){if(i.target.files.length){let l=i.target.files[0];this.fileUploadExercise.filePattern.split(",").some(hi=>l.name.toLowerCase().endsWith(hi))?l.size>8388608?this.alertService.error("artemisApp.fileUploadSubmission.fileTooBigError",{fileName:l.name}):this.submissionFile=l:this.alertService.error("artemisApp.fileUploadSubmission.fileExtensionError")}}get unreferencedFeedback(){if(this.result?.feedbacks)return ii(this.result.feedbacks),si(this.result.feedbacks)}setSubmittedFile(){if(this.submissionFile=void 0,this.submittedFileName="",this.submittedFileExtension="",this.submission?.filePath){let i=this.submission.filePath.split("/");this.submittedFileName=i.last();let s=this.submittedFileName.split(".");this.submittedFileExtension=s.last()}}downloadFile(i){this.fileService.downloadFile(i)}canDeactivate(){return!(this.submission&&!this.submission.submitted&&this.submissionFile)}get isActive(){return!this.examMode&&this.fileUploadExercise&&!ei(this.fileUploadExercise,this.participation)}get submitButtonTooltip(){return this.submissionFile?this.isLate?"entity.action.submitDueDateMissedTooltip":this.isActive&&!this.fileUploadExercise.dueDate?"entity.action.submitNoDueDateTooltip":this.isActive?"entity.action.submitTooltip":"entity.action.dueDateMissedTooltip":"artemisApp.fileUploadSubmission.selectFile"}static \u0275fac=function(s){return new(s||t)};static \u0275cmp=y({type:t,selectors:[["jhi-file-upload-submission"]],viewQuery:function(s,l){if(s&1&&k(Si,5),s&2){let x;L(x=B())&&(l.fileInput=x.first)}},inputs:{participationId:"participationId",displayHeader:"displayHeader",expandProblemStatement:"expandProblemStatement",displayedInExamSummary:"displayedInExamSummary",inputExercise:"inputExercise",inputSubmission:"inputSubmission",inputParticipation:"inputParticipation"},decls:2,vars:2,consts:[["fileInput",""],[1,"d-block","mb-4",3,"exercise","participation"],["pagetitle",""],[1,"font-weight-normal"],["submitbutton",""],["id","submit",3,"onClick","disabled","title","btnType","tooltip","isLoading"],[3,"isExerciseParticipation","expandProblemStatement"],["left-body","",1,"px-2","pb-2","w-100"],[1,"row"],["right-header","",3,"icon"],["id","problem-statement","right-header","","jhiTranslate","artemisApp.exercise.problemStatement"],["right-body","",1,"mb-3","markdown-preview"],[1,"col-12","col-md-6"],[1,"form-group"],["for","fileUploadInput","jhiTranslate","artemisApp.fileUploadSubmission.selectFile",1,"form-control-label"],[1,"input-group","background-file"],[1,"custom-file","overflow-ellipsis"],["id","fileUploadInput","type","file",1,"custom-file-input",3,"change"],["jhiTranslate","artemisApp.fileUploadExercise.supportedFileExtensions",1,"d-inline-block"],[1,"d-inline-block"],[1,"ms-1","badge","bg-info"],[1,"card-text"],[1,"mt-2"],["jhi-exercise-action-button","",3,"click","smallButton","buttonIcon","buttonLabel"],["jhiTranslate","artemisApp.exam.examSummary.yourSubmission"],["jhiTranslate","artemisApp.fileUploadSubmission.submittedFile",3,"translateValues"],[1,"ms-2","badge","bg-info"],["jhiTranslate","artemisApp.fileUploadExercise.assessedSubmission"],[1,"col-xl-8","alert","unreferencedFeedback",3,"feedback","additional","course"],[1,"mt-2","alert","alert-info",3,"result"],[3,"result","participation","exercise"],[3,"innerHTML"]],template:function(s,l){s&1&&u(0,Ei,15,7)(1,ki,26,8),s&2&&(c(l.displayHeader?0:-1),n(),c(l.fileUploadExercise?1:-1))},dependencies:[ci,J,ui,Y,ri,xi,di,fi,$,j,X,oi,ai],encapsulation:2})}return t})();export{ye as a};
//# sourceMappingURL=chunk-N54JTLDY.js.map
