import{a as ee}from"./chunk-BIK4CL5A.js";import{b as Z}from"./chunk-T624HJJL.js";import{a as X}from"./chunk-HMZID6NQ.js";import{b as K}from"./chunk-O26CMRR4.js";import{a as J}from"./chunk-MP6UGYTC.js";import{d as G}from"./chunk-AR57MWOI.js";import{v as O}from"./chunk-VZRSC3LP.js";import{c as U}from"./chunk-JXJXC4DZ.js";import{d as H}from"./chunk-EDXSOKK5.js";import{b as q}from"./chunk-R5BZWVRQ.js";import{p as M}from"./chunk-DID2YGL7.js";import{cc as Q,sc as L,x as $,y as z}from"./chunk-Z4VHWOB5.js";import{a as F}from"./chunk-HKBU2OOC.js";import{a as R}from"./chunk-5ZXXURLP.js";import{a as Y}from"./chunk-U54OSGNH.js";import{c as P}from"./chunk-E2KBL4LX.js";import{Ac as g,Bc as S,Db as n,Dc as E,Ea as v,Ed as f,Ma as u,Mc as d,Na as h,Oc as m,Tb as V,Yc as b,Zb as _,Zc as T,_c as y,cd as N,dd as e,ed as w,f as k,jc as A,kc as s,ra as D,rd as B,sc as p,uc as j,vc as W,wc as I,xc as r,yc as a,zc as C}from"./chunk-5LC5EQRR.js";var ie=["archiveCompleteWithWarningsModal"],ne=["archiveConfirmModal"],te=i=>({title:i});function re(i,l){i&1&&(e(0,`
                    `),r(1,"span",7),e(2,"The course has been archived!"),a(),e(3,`
                `)),i&2&&(n(),s("jhiTranslate","artemisApp.courseExamArchive.archiveCourseSuccess"))}function ae(i,l){i&1&&(e(0,`
                    `),r(1,"span",7),e(2,"The exam has been archived!"),a(),e(3,`
                `)),i&2&&(n(),s("jhiTranslate","artemisApp.courseExamArchive.archiveExamSuccess"))}function oe(i,l){if(i&1&&(e(0,`
                        `),r(1,"li"),e(2),a(),e(3,`
                    `)),i&2){let t=l.$implicit;n(2),w(t)}}function ce(i,l){if(i&1){let t=E();e(0,`
        `),r(1,"div",3),e(2,`
            `),r(3,"h4",4),e(4,`
                `),_(5,re,4,1)(6,ae,4,1),a(),e(7,`
            `),r(8,"button",5),d("click",function(){let o=u(t).$implicit;return h(o.dismiss())}),a(),e(9,`
        `),a(),e(10,`
        `),r(11,"div",6),e(12,`
            `),g(13),e(14,`
                `),r(15,"p",7),e(16,"The archival process has completed with the following warnings:"),a(),e(17,`
                `),C(18,"br"),e(19,`
                `),r(20,"ul",8),e(21,`
                    `),W(22,oe,4,1,null,null,j),a(),e(24,`
            `),S(),e(25,`
        `),a(),e(26,`
        `),r(27,"div",9),e(28,`
            `),r(29,"button",10),d("click",function(){let o=u(t).$implicit;return h(o.close())}),e(30,"Close"),a(),e(31,`
        `),a(),e(32,`
    `)}if(i&2){let t=m();n(5),p(t.archiveMode==="Course"?5:-1),n(),p(t.archiveMode==="Exam"?6:-1),n(9),s("jhiTranslate","artemisApp.courseExamArchive.archiveSuccessWithWarnings"),n(7),I(t.archiveWarnings)}}function se(i,l){i&1&&(e(0,`
                    `),r(1,"span",7),e(2,"Confirm Archive Course Operation"),a(),e(3,`
                `)),i&2&&(n(),s("jhiTranslate","artemisApp.courseExamArchive.popup.course.title"))}function le(i,l){i&1&&(e(0,`
                    `),r(1,"span",7),e(2,"Confirm Archive Exam Operation"),a(),e(3,`
                `)),i&2&&(n(),s("jhiTranslate","artemisApp.courseExamArchive.popup.exam.title"))}function me(i,l){if(i&1&&(e(0,`
                `),r(1,"p",12),e(2,"Are you sure you want to archive??"),a(),e(3,`
                `),r(4,"p",7),e(5,`
                    The process will compress all student code repositories, file upload exercises, modeling exercises, and text exercises for exercises and exams.
                `),a(),e(6,`
            `)),i&2){let t=m(2);n(),s("jhiTranslate","artemisApp.courseExamArchive.popup.course.question")("translateValues",B(3,te,t.course.title)),n(3),s("jhiTranslate","artemisApp.courseExamArchive.popup.course.statement1")}}function ue(i,l){if(i&1&&(e(0,`
                `),r(1,"p",12),e(2,"Are you sure you want to archive??"),a(),e(3,`
                `),r(4,"p",7),e(5,`
                    The process will compress all student code repositories, file upload exercises, modeling exercises, and text exercises in the exam.
                `),a(),e(6,`
            `)),i&2){let t=m(2);n(),s("jhiTranslate","artemisApp.courseExamArchive.popup.exam.question")("translateValues",B(3,te,(t.exam==null?null:t.exam.title)||"")),n(3),s("jhiTranslate","artemisApp.courseExamArchive.popup.exam.statement1")}}function he(i,l){if(i&1){let t=E();e(0,`
        `),r(1,"div",3),e(2,`
            `),r(3,"h4",4),e(4,`
                `),_(5,se,4,1)(6,le,4,1),a(),e(7,`
            `),r(8,"button",5),d("click",function(){let o=u(t).$implicit;return h(o.dismiss())}),a(),e(9,`
        `),a(),e(10,`
        `),r(11,"div",6),e(12,`
            `),_(13,me,7,5)(14,ue,7,5),r(15,"p",7),e(16,`
                This process can take several hours depending on the number of students and programming exercises and will take up many server resources. Please start this process
                only once when the server load is low (e.g. early in the morning)
            `),a(),e(17,`
            `),r(18,"p",7),e(19,`
                You will receive a notification when the process is finished. Then you can download the archive as zip file on this page.
            `),a(),e(20,`
        `),a(),e(21,`
        `),r(22,"div",9),e(23,`
            `),r(24,"button",11),d("click",function(){let o=u(t).$implicit;return h(o.close("archive-confirm"))}),e(25,`
                Archive
            `),a(),e(26,`
        `),a(),e(27,`
    `)}if(i&2){let t=m();n(5),p(t.archiveMode==="Course"?5:-1),n(),p(t.archiveMode==="Exam"?6:-1),n(7),p(t.archiveMode==="Course"?13:-1),n(),p(t.archiveMode==="Exam"?14:-1),n(),s("jhiTranslate","artemisApp.courseExamArchive.popup.statement2"),n(3),s("jhiTranslate","artemisApp.courseExamArchive.popup.footerStatement"),n(6),s("jhiTranslate",t.archiveMode==="Course"?"artemisApp.courseExamArchive.archiveCourse":"artemisApp.courseExamArchive.archiveExam")}}function pe(i,l){if(i&1){let t=E();e(0,`
        `),r(1,"div",3),e(2,`
            `),r(3,"h4",4),e(4,`
                `),r(5,"span",7),e(6,"Warning: an archive already exists!"),a(),e(7,`
            `),a(),e(8,`
        `),a(),e(9,`
        `),r(10,"div",6),e(11,`
            `),r(12,"p",7),e(13,`
                Warning! The course has already been archived. If you continue, the archive will be overwritten! Are you sure you want to continue?
            `),a(),e(14,`
        `),a(),e(15,`
        `),r(16,"div",9),e(17,`
            `),r(18,"button",11),d("click",function(){let o=u(t).$implicit;return h(o.close("archive"))}),e(19,"Yes"),a(),e(20,`
            `),r(21,"button",13),d("click",function(){let o=u(t).$implicit;return h(o.dismiss())}),e(22,"No"),a(),e(23,`
        `),a(),e(24,`
    `)}i&2&&(n(5),s("jhiTranslate","artemisApp.courseExamArchive.confirmArchive.title"),n(7),s("jhiTranslate","artemisApp.courseExamArchive.confirmArchive.message"),n(6),s("jhiTranslate","global.generic.yes"),n(3),s("jhiTranslate","global.generic.no"))}function de(i,l){if(i&1){let t=E();e(0,`
        `),r(1,"button",14),d("click",function(){u(t);let o=m(),x=N(6);return h(o.openModal(x))}),e(2,`
            `),C(3,"fa-icon",15),e(4,`
            `),C(5,"fa-icon",16),e(6,`\xA0
            `),r(7,"span"),e(8),a(),e(9,`
        `),a(),e(10,`
    `)}if(i&2){let t=m();n(),s("jhiFeatureToggle",t.FeatureToggle.Exports)("overwriteDisabled",t.isBeingArchived),A("data-mode",t.archiveMode),n(2),s("hidden",!t.isBeingArchived)("icon",t.faCircleNotch),n(2),s("hidden",t.isBeingArchived)("icon",t.faArchive),n(3),w(t.archiveButtonText)}}function xe(i,l){if(i&1){let t=E();e(0,`
        `),r(1,"button",17),d("click",function(){u(t);let o=m();return h(o.downloadArchive())}),e(2,`
            `),C(3,"fa-icon",18),e(4,`\xA0
            `),C(5,"span",19),e(6,`
        `),a(),e(7,`
    `)}if(i&2){let t=m();n(),s("disabled",t.isBeingArchived),A("data-mode",t.archiveMode),n(2),s("icon",t.faDownload)}}function ve(i,l){if(i&1){let t=E();e(0,`
        `),r(1,"button",20),d("delete",function(){u(t);let o=m();return h(o.cleanup())}),e(2,`
            `),C(3,"fa-icon",18),e(4,`
        `),a(),e(5,`
    `)}if(i&2){let t=m();n(),s("disabled",t.isBeingArchived)("buttonSize",t.ButtonSize.MEDIUM)("actionType",t.ActionType.Cleanup)("entityTitle",t.course.title)("dialogError",t.dialogError$),A("data-mode",t.archiveMode),n(2),s("icon",t.faEraser)}}function _e(i,l){if(i&1){let t=E();e(0,`
        `),r(1,"button",21),d("delete",function(){u(t);let o=m();return h(o.cleanup())}),e(2,`
            `),C(3,"fa-icon",18),e(4,`
        `),a(),e(5,`
    `)}if(i&2){let t=m();n(),s("disabled",t.isBeingArchived)("buttonSize",t.ButtonSize.MEDIUM)("actionType",t.ActionType.Cleanup)("entityTitle",t.exam.title)("dialogError",t.dialogError$),A("data-mode",t.archiveMode),n(2),s("icon",t.faEraser)}}var Ue=(()=>{class i{courseService=v(G);examService=v(ee);alertService=v(U);websocketService=v(R);translateService=v(P);modalService=v(O);accountService=v(q);ButtonSize=K;ActionType=X;FeatureToggle=F;archiveMode="Course";course;exam;archiveCompleteWithWarningsModal;archiveConfirmModal;isBeingArchived=!1;archiveButtonText="";archiveWarnings=[];displayDownloadArchiveButton=!1;dialogErrorSource=new k;dialogError$=this.dialogErrorSource.asObservable();faDownload=Q;faCircleNotch=z;faEraser=L;faArchive=$;ngOnInit(){!this.course&&!this.exam||(this.registerArchiveWebsocket(),this.archiveButtonText=this.getArchiveButtonText(),this.displayDownloadArchiveButton=this.canDownloadArchive(),this.translateService.onLangChange.subscribe(()=>{this.isBeingArchived||(this.archiveButtonText=this.getArchiveButtonText())}))}ngOnDestroy(){this.websocketService.unsubscribe(this.getArchiveStateTopic()),this.dialogErrorSource.unsubscribe()}registerArchiveWebsocket(){let t=this.getArchiveStateTopic();this.websocketService.subscribe(t),this.websocketService.receive(t).pipe(D(c=>this.handleArchiveStateChanges(c))).subscribe()}handleArchiveStateChanges(t){let{exportState:c,message:o,subMessage:x}=t;this.isBeingArchived=c==="RUNNING",this.archiveButtonText=c==="RUNNING"?o:this.getArchiveButtonText(),c==="COMPLETED"?(this.alertService.success(this.getArchiveSuccessText()),this.reloadCourseOrExam()):c==="COMPLETED_WITH_WARNINGS"?(this.archiveWarnings=o.split(`
`),this.openModal(this.archiveCompleteWithWarningsModal),this.reloadCourseOrExam()):c==="COMPLETED_WITH_ERRORS"&&this.alertService.error(this.getArchiveErrorText(x))}reloadCourseOrExam(){this.archiveMode==="Exam"&&this.exam?this.examService.find(this.course.id,this.exam.id).subscribe(t=>{this.exam=t.body,this.displayDownloadArchiveButton=this.canDownloadArchive()}):this.courseService.find(this.course.id).subscribe(t=>{this.course=t.body,this.displayDownloadArchiveButton=this.canDownloadArchive()})}getArchiveSuccessText(){return this.archiveMode==="Course"?this.translateService.instant("artemisApp.courseExamArchive.archiveCourseSuccess"):this.translateService.instant("artemisApp.courseExamArchive.archiveExamSuccess")}getArchiveErrorText(t){return this.archiveMode==="Course"?this.translateService.instant(`artemisApp.courseExamArchive.archiveCourseError.${t}`,{courseName:this.course.title}):this.translateService.instant("artemisApp.courseExamArchive.archiveExamError",{examName:this.exam?.title})}getArchiveButtonText(){return this.archiveMode==="Course"?this.translateService.instant("artemisApp.courseExamArchive.archiveCourse"):this.translateService.instant("artemisApp.courseExamArchive.archiveExam")}getArchiveStateTopic(){return this.archiveMode==="Exam"&&this.exam?"/topic/exams/"+this.exam.id+"/export":"/topic/courses/"+this.course.id+"/export-course"}canArchive(){let t;return this.archiveMode==="Exam"&&this.exam?t=!!this.exam.endDate?.isBefore(M()):t=!!this.course.endDate?.isBefore(M()),this.accountService.isAtLeastInstructorInCourse(this.course)&&t}openModal(t){this.modalService.open(t).result.then(c=>{c==="archive-confirm"&&this.canDownloadArchive()&&this.openModal(this.archiveConfirmModal),(c==="archive"||!this.canDownloadArchive())&&this.archive()},()=>{})}archive(){this.archiveMode==="Exam"&&this.exam?this.examService.archiveExam(this.course.id,this.exam.id).subscribe():this.courseService.archiveCourse(this.course.id).subscribe()}canDownloadArchive(){let t;return this.archiveMode==="Exam"&&this.exam?t=(this.exam.examArchivePath?.length??0)>0:t=(this.course.courseArchivePath?.length??0)>0,this.accountService.isAtLeastInstructorInCourse(this.course)&&t}downloadArchive(){this.archiveMode==="Exam"&&this.exam?this.examService.downloadExamArchive(this.course.id,this.exam.id):this.courseService.downloadCourseArchive(this.course.id)}canCleanup(){let t;return this.archiveMode==="Exam"&&this.exam?t=!!this.exam.examArchivePath&&this.exam.examArchivePath.length>0:t=!!this.course.courseArchivePath&&this.course.courseArchivePath.length>0,this.accountService.isAtLeastInstructorInCourse(this.course)&&t}cleanup(){this.archiveMode==="Exam"&&this.exam?this.examService.cleanupExam(this.course.id,this.exam.id).subscribe({next:()=>{this.alertService.success("artemisApp.programmingExercise.cleanup.successMessageCleanup"),this.dialogErrorSource.next("")},error:t=>{this.dialogErrorSource.next(t.error.title)}}):this.courseService.cleanupCourse(this.course.id).subscribe({next:()=>{this.alertService.success("artemisApp.programmingExercise.cleanup.successMessageCleanup"),this.dialogErrorSource.next("")},error:t=>{this.dialogErrorSource.next(t.error.title)}})}static \u0275fac=function(c){return new(c||i)};static \u0275cmp=V({type:i,selectors:[["jhi-course-exam-archive-button"]],viewQuery:function(c,o){if(c&1&&(b(ie,5),b(ne,5)),c&2){let x;T(x=y())&&(o.archiveCompleteWithWarningsModal=x.first),T(x=y())&&(o.archiveConfirmModal=x.first)}},inputs:{archiveMode:"archiveMode",course:"course",exam:"exam"},decls:16,vars:4,consts:[["archiveCompleteWithWarningsModal",""],["archiveWarningPopup",""],["archiveConfirmModal",""],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[3,"jhiTranslate"],[2,"height","200px","overflow","auto"],[1,"modal-footer"],["type","button",1,"btn","btn-warning",3,"click"],["type","button",1,"btn","btn-warning",3,"click","jhiTranslate"],[3,"jhiTranslate","translateValues"],["type","button",1,"btn","btn-success",3,"click","jhiTranslate"],["type","button","id","archiveButton",1,"btn","btn-warning",3,"click","jhiFeatureToggle","overwriteDisabled"],["animation","spin",3,"hidden","icon"],[3,"hidden","icon"],["type","button",1,"btn","btn-primary",3,"click","disabled"],[3,"icon"],["jhiTranslate","artemisApp.courseExamArchive.downloadArchive"],["jhiDeleteButton","","deleteQuestion","artemisApp.course.cleanup.question","deleteConfirmationText","artemisApp.course.delete.typeNameToConfirm",2,"margin-right","0 !important",3,"delete","disabled","buttonSize","actionType","entityTitle","dialogError"],["jhiDeleteButton","","deleteQuestion","artemisApp.exam.cleanup.question","deleteConfirmationText","artemisApp.examManagement.delete.typeNameToConfirm",2,"margin-right","0 !important",3,"delete","disabled","buttonSize","actionType","entityTitle","dialogError"]],template:function(c,o){c&1&&(g(0),e(1,`
    `),_(2,ce,33,3,"ng-template",null,0,f),e(4,`
    `),_(5,he,28,7,"ng-template",null,1,f),e(7,`
    `),_(8,pe,25,4,"ng-template",null,2,f),e(10,`
    `),_(11,de,11,8)(12,xe,8,3)(13,ve,6,7)(14,_e,6,7),S(),e(15,`
`)),c&2&&(n(11),p(o.canArchive()?11:-1),n(),p(o.displayDownloadArchiveButton?12:-1),n(),p(o.canCleanup()&&o.archiveMode==="Course"?13:-1),n(),p(o.canCleanup()&&o.archiveMode==="Exam"?14:-1))},dependencies:[Y,J,H,Z],styles:["button[data-mode=Exam][_ngcontent-%COMP%]{margin-top:.25rem}","[_nghost-%COMP%]{display:contents}"]})}return i})();export{Ue as a};
//# sourceMappingURL=chunk-AQVCH6R6.js.map
