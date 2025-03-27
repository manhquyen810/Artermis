import{a as Q,b as g,c as Pe,d as Be,e as je,f as Ne}from"./chunk-HWIMTKXN.js";import{a as Ve}from"./chunk-KOWVADWF.js";import"./chunk-6DH5KPBD.js";import{a as ke}from"./chunk-GWS46Z7O.js";import"./chunk-UKRIKOVV.js";import{a as Le}from"./chunk-TBEJU7WR.js";import{a as Me}from"./chunk-AVJFEEMQ.js";import"./chunk-7Q4TXNQR.js";import"./chunk-7DTX5HC5.js";import"./chunk-22GL4PFU.js";import"./chunk-MNX6OTP5.js";import"./chunk-LTHMYHP7.js";import"./chunk-U4DJRHYQ.js";import"./chunk-MBS3WUDO.js";import{a as Fe}from"./chunk-KYCCMZSV.js";import"./chunk-O4VJ5OXY.js";import"./chunk-BDII35IB.js";import"./chunk-LARBQRTJ.js";import"./chunk-G4HSJ7ME.js";import"./chunk-F3NFBBHK.js";import{a as we}from"./chunk-OTCBNILH.js";import"./chunk-MYJYCKA4.js";import"./chunk-WL6UHE7V.js";import{a as z}from"./chunk-BIK4CL5A.js";import{a as ye,b as De}from"./chunk-VRAVBLUK.js";import"./chunk-T624HJJL.js";import"./chunk-HQTS6JOY.js";import"./chunk-HMZID6NQ.js";import"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import"./chunk-FGXEI5KW.js";import"./chunk-2QXIMOEO.js";import{y as Oe}from"./chunk-R2SUWIPY.js";import"./chunk-35PLMJNP.js";import{a as Ie}from"./chunk-UDBRF4PR.js";import"./chunk-4I367PEU.js";import"./chunk-QA7Y7QBM.js";import{e as re}from"./chunk-ZPITQMA6.js";import"./chunk-2CUFQLAH.js";import"./chunk-Z6NSEM73.js";import{d as y}from"./chunk-AR57MWOI.js";import"./chunk-A5PTZAPN.js";import"./chunk-AU6UEH3U.js";import"./chunk-FGAONQTL.js";import"./chunk-HQ6UGNQX.js";import"./chunk-ZLJ76G5I.js";import"./chunk-MLVGKM2P.js";import{c as Te}from"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import{c as Ae}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import{d as D,j as W}from"./chunk-CT44YL7Q.js";import{c as Re}from"./chunk-JNO6DNVW.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import{K as be}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as fe,b as pe,h as xe,m as he}from"./chunk-WA5GEAJB.js";import"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import{a as V}from"./chunk-K3W6YFKH.js";import{c as N}from"./chunk-JXJXC4DZ.js";import{d as q}from"./chunk-EDXSOKK5.js";import{b as j}from"./chunk-R5BZWVRQ.js";import{p as se}from"./chunk-DID2YGL7.js";import{f as Ee,h as ve,i as Se}from"./chunk-CXQURQM5.js";import{a as R}from"./chunk-S4QLGR2R.js";import{A as ge,D as _e,Qa as Ce,qa as B}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as U}from"./chunk-U54OSGNH.js";import{f as P,i as L}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Ac as J,Ad as ne,Bc as Y,Db as r,Dc as S,Ea as f,F as ae,Ma as C,Mc as v,Na as E,Oc as c,Rc as ee,Sc as me,Tb as F,Zb as h,dd as t,ed as de,fd as O,gd as T,kc as u,ld as ce,mc as M,md as te,nd as le,pd as ue,ra as $,rd as I,sc as p,sd as k,uc as H,ud as ie,vc as X,wc as Z,xc as o,yc as a,yd as b,zc as d,zd as _}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var oe=class{tutorId;tutorName;numberOfTutorItems;averageTutorValue;allowedRange;translationKey;constructor(m,e,n,s,x,l){this.tutorId=m,this.tutorName=e,this.numberOfTutorItems=n,this.averageTutorValue=s,this.allowedRange=x,this.translationKey=l}},w=class{numberOfTutorItems;averageTutorValue;averageCourseValue;tutorName;tutorId;constructor(m,e,n,s,x){this.numberOfTutorItems=m,this.averageTutorValue=e,this.averageCourseValue=n,this.tutorName=s,this.tutorId=x,this.averageTutorValue=D(this.averageTutorValue,1)}get isPerformanceIssue(){return this.numberOfTutorItems===0?!1:!(this.allowedRange.lowerBound<=this.averageTutorValue&&this.averageTutorValue<=this.allowedRange.upperBound)}get allowedRange(){let m=this.averageCourseValue/5;return new W(D(this.averageCourseValue-m,1),D(this.averageCourseValue+m,1))}toIssue(){return new oe(this.tutorId,this.tutorName,this.numberOfTutorItems,this.averageTutorValue,this.allowedRange,this.translationKey)}},qe=(()=>{class i extends w{static MIN_RATING=3;static MAX_RATING=5;get allowedRange(){return new W(i.MIN_RATING,i.MAX_RATING)}get translationKey(){return"artemisApp.assessmentDashboard.tutorPerformanceIssues.ratings"}}return i})(),G=class extends w{get translationKey(){return"artemisApp.assessmentDashboard.tutorPerformanceIssues.score"}},K=class extends w{get allowedRange(){let m=this.averageCourseValue/5;return new W(0,D(this.averageCourseValue+m,1))}get translationKey(){return"artemisApp.assessmentDashboard.tutorPerformanceIssues.complaints"}};var Ge=(i,m)=>["/course-management",i,"exams",m,"grading-system"];function Ke(i,m){i&1&&(t(0,`
                `),d(1,"span",8),t(2,`
            `))}function $e(i,m){i&1&&(t(0,`
                `),d(1,"span",8),t(2,`
            `))}function He(i,m){if(i&1){let e=S();t(0,`
    `),o(1,"div",0),t(2,`
        `),o(3,"span"),t(4,`
            `),o(5,"a",1),t(6,`
                `),d(7,"fa-icon",2),t(8,`
                `),d(9,"span",3),t(10,`
            `),a(),t(11,`
        `),a(),t(12,`
        `),o(13,"button",4),v("click",function(){C(e);let s=c();return E(s.evaluateQuizExercises())}),t(14,`
            `),h(15,Ke,3,0),d(16,"span",5),t(17,`
        `),a(),t(18,`
        `),o(19,"button",6),v("click",function(){C(e);let s=c();return E(s.assessUnsubmittedExamModelingAndTextParticipations())}),t(20,`
            `),h(21,$e,3,0),d(22,"span",7),t(23,`
        `),a(),t(24,`
    `),a(),t(25,`
`)}if(i&2){let e=c();r(5),me("id","grading-key-button-",e.exam.id,""),u("routerLink",k(8,Ge,e.courseId,e.examId)),r(2),u("icon",e.faClipboard),r(6),u("disabled",e.isLoading||e.isAssessingUnsubmittedExams||e.isEvaluatingQuizExercises||!e.isExamOver),r(2),p(e.isEvaluatingQuizExercises?15:-1),r(4),u("disabled",e.isLoading||e.isAssessingUnsubmittedExams||e.isEvaluatingQuizExercises||!e.isExamOver),r(2),p(e.isAssessingUnsubmittedExams?21:-1)}}var Ue=(()=>{class i{route=f(P);examManagementService=f(z);studentExamService=f(Ve);courseService=f(y);alertService=f(N);accountService=f(j);artemisTranslatePipe=f(V);courseId;examId;studentExams;course;exam;paramSub;isLoading;isEvaluatingQuizExercises;isAssessingUnsubmittedExams;isExamOver=!1;longestWorkingTime;isAdmin=!1;faClipboard=B;ngOnInit(){this.courseId=Number(this.route.snapshot.paramMap.get("courseId")),this.examId=Number(this.route.snapshot.paramMap.get("examId")),this.loadAll()}loadAll(){this.isLoading=!0,this.paramSub=this.route.params.subscribe(()=>{this.isAdmin=this.accountService.isAdmin(),this.courseService.find(this.courseId).subscribe(s=>{this.course=s.body});let e=this.studentExamService.getLongestWorkingTimeForExam(this.courseId,this.examId).pipe($(s=>{this.longestWorkingTime=s,this.calculateIsExamOver()})),n=this.examManagementService.find(this.courseId,this.examId,!0).pipe($(s=>{this.exam=s.body,this.calculateIsExamOver()}));ae([e,n]).subscribe(()=>{this.isLoading=!1})})}evaluateQuizExercises(){this.isEvaluatingQuizExercises=!0,this.examManagementService.evaluateQuizExercises(this.courseId,this.examId).subscribe({next:e=>{this.alertService.success("artemisApp.studentExams.evaluateQuizExerciseSuccess",{number:e?.body}),this.isEvaluatingQuizExercises=!1},error:e=>{this.handleError("artemisApp.studentExams.evaluateQuizExerciseFailure",e),this.isEvaluatingQuizExercises=!1}})}assessUnsubmittedExamModelingAndTextParticipations(){this.isAssessingUnsubmittedExams=!0,this.examManagementService.assessUnsubmittedExamModelingAndTextParticipations(this.courseId,this.examId).subscribe({next:e=>{this.alertService.success("artemisApp.studentExams.assessUnsubmittedStudentExamsSuccess",{number:e?.body}),this.isAssessingUnsubmittedExams=!1},error:e=>{this.handleError("artemisApp.studentExams.assessUnsubmittedStudentExamsFailure",e),this.isAssessingUnsubmittedExams=!1}})}handleError(e,n){let s;n?.error&&n.error.errorKey?s=this.artemisTranslatePipe.transform(n.error.errorKey):s=n?.error?.message,s?this.alertService.error(e,{message:s}):Ae(this.alertService,n)}calculateIsExamOver(){if(this.longestWorkingTime&&this.exam){let n=se(this.exam.startDate).add(this.longestWorkingTime,"seconds");this.exam.gracePeriod&&(n=n.add(this.exam.gracePeriod,"seconds")),this.isExamOver=n.isBefore(se())}}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=F({type:i,selectors:[["jhi-exam-assessment-buttons"]],decls:1,vars:1,consts:[[1,"exam-action-buttons"],[1,"btn","btn-info","mt-1",3,"routerLink","id"],[3,"icon"],["jhiTranslate","artemisApp.examManagement.gradingSystem",1,"d-none","d-md-inline"],["id","evaluateQuizExercisesButton",1,"btn","btn-primary","mt-1",3,"click","disabled"],["jhiTranslate","artemisApp.studentExams.evaluateQuizExercises"],["id","assessUnsubmittedExamModelingAndTextParticipationsButton",1,"btn","btn-primary","mt-1",3,"click","disabled"],["jhiTranslate","artemisApp.studentExams.assessUnsubmittedStudentExams"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(n,s){n&1&&h(0,He,26,11),n&2&&p(s.exam&&s.course&&s.course.isAtLeastInstructor?0:-1)},dependencies:[L,q,U],encapsulation:2})}return i})();var Xe=i=>["/course-management",i,"scores"],Ze=i=>["/course-management",i,"grading-system"],Je=i=>["/course-management",i,"plagiarism-cases"],Ye=(i,m)=>["/course-management",i,"exercises",m,"teams"],et=i=>({filter:i}),We=(i,m,e,n)=>({tutorName:i,numberOfTutorItems:m,averageTutorValue:e,threshold:n});function tt(i,m){if(i&1&&(t(0,`
                    `),o(1,"h2"),t(2),b(3,"artemisTranslate"),a(),t(4,`
                `)),i&2){let e=c();r(2),T("",_(3,2,"artemisApp.assessmentDashboard.pageHeader")," ",e.course==null?null:e.course.title,"")}}function it(i,m){if(i&1&&(t(0,`
                    `),o(1,"h2"),t(2),b(3,"artemisTranslate"),b(4,"artemisTranslate"),a(),t(5,`
                `)),i&2){let e=c();r(2),T(`
                        `,e.isTestRun?_(4,4,"artemisApp.assessmentDashboard.pageHeaderExamTestRun"):_(3,2,"artemisApp.assessmentDashboard.pageHeaderExam"),`
                        `,e.exam==null?null:e.exam.title,`
                    `)}}function nt(i,m){if(i&1&&(t(0,`
                        `),o(1,"a",7),t(2,`
                            `),d(3,"fa-icon",8),t(4,`
                            `),d(5,"span",9),t(6,`
                        `),a(),t(7,`
                    `)),i&2){let e=c(2);r(),u("routerLink",I(2,Xe,e.course.id)),r(2),u("icon",e.faTable)}}function st(i,m){if(i&1&&(t(0,`
                        `),o(1,"a",10),t(2,`
                            `),d(3,"fa-icon",8),t(4," "),d(5,"span",11),t(6,`
                        `),a(),t(7,`
                        `),o(8,"a",7),t(9,`
                            `),d(10,"fa-icon",8),t(11,`
                            `),d(12,"span",12),t(13,`
                        `),a(),t(14,`
                    `)),i&2){let e=c(2);r(),u("routerLink",I(4,Ze,e.course.id)),r(2),u("icon",e.faClipboard),r(5),u("routerLink",I(6,Je,e.course.id)),r(2),u("icon",e.faHeartBroken)}}function rt(i,m){if(i&1&&(t(0,`
                `),o(1,"div",6),t(2,`
                    `),h(3,nt,8,4)(4,st,15,8),a(),t(5,`
            `)),i&2){let e=c();r(3),p(e.course&&e.course.isAtLeastInstructor?3:-1),r(),p(e.course!=null&&e.course.isAtLeastInstructor?4:-1)}}function ot(i,m){i&1&&(t(0,`
                `),d(1,"jhi-exam-assessment-buttons",16),t(2,`
            `))}function at(i,m){if(i&1&&(t(0,`
        `),o(1,"div",13),t(2,`
            `),o(3,"div",14),t(4,`
                `),o(5,"h4"),t(6,`
                    `),o(7,"span",15),t(8),b(9,"artemisTranslate"),b(10,"artemisDate"),a(),t(11,`
                `),a(),t(12,`
                `),o(13,"h4"),t(14,`
                    `),o(15,"span",15),t(16),b(17,"artemisTranslate"),b(18,"artemisDate"),a(),t(19,`
                `),a(),t(20,`
            `),a(),t(21,`
            `),h(22,ot,3,0),a(),t(23,`
    `)),i&2){let e=c();r(8),T("",_(9,5,"artemisApp.exam.endDate"),": ",_(10,7,e.exam==null?null:e.exam.endDate),""),r(8),T("",_(17,9,"artemisApp.exam.publishResultsDate"),": ",_(18,11,e.exam==null?null:e.exam.publishResultsDate),""),r(6),p(e.course!=null&&e.course.isAtLeastInstructor?22:-1)}}function mt(i,m){i&1&&(t(0,`
    `),d(1,"div",17),t(2,`
`))}function dt(i,m){if(i&1){let e=S();t(0,`
                `),o(1,"div",35),t(2,`
                    `),o(3,"div",36),t(4,`
                        `),o(5,"input",37),v("ngModelChange",function(){C(e);let s=c(2);return E(s.triggerFinishedExercises())}),a(),t(6,`
                        `),d(7,"label",38),t(8,`
                    `),a(),t(9,`
                    `),o(10,"div",36),t(11,`
                        `),o(12,"input",39),v("ngModelChange",function(){C(e);let s=c(2);return E(s.triggerOptionalExercises())}),a(),t(13,`
                        `),d(14,"label",40),t(15,`
                    `),a(),t(16,`
                `),a(),t(17,`
            `)}if(i&2){let e=c(2);r(5),u("ngModel",e.hideFinishedExercises),r(7),u("ngModel",e.hideOptional)}}function ct(i,m){i&1&&(t(0,`
                                `),d(1,"th",41),t(2,`
                            `))}function lt(i,m){if(i&1&&(t(0,`
                                `),o(1,"th",42),t(2,`
                                    `),d(3,"a",43),t(4,`
                                    `),d(5,"fa-icon",8),t(6,`
                                `),a(),t(7,`
                            `)),i&2){let e=c(2);r(5),u("icon",e.faSort)}}function ut(i,m){if(i&1&&(t(0,`
                                `),o(1,"th",44),t(2,`
                                    `),d(3,"a",45),t(4,`
                                    `),d(5,"fa-icon",8),t(6,`
                                `),a(),t(7,`
                            `)),i&2){let e=c(2);r(5),u("icon",e.faSort)}}function pt(i,m){if(i&1&&(t(0,`
                                    `),o(1,"td"),t(2,`
                                        `),d(3,"jhi-tutor-participation-graph",49),t(4,`
                                    `),a(),t(5,`
                                `)),i&2){let e=c().$implicit,n=c(2);r(3),M("guided-tour",e===n.exerciseForGuidedTour),u("exercise",e)("tutorParticipation",e.tutorParticipations[0])("numberOfSubmissions",e.numberOfSubmissions)("totalNumberOfAssessments",e.totalNumberOfAssessments)("numberOfComplaints",e.numberOfComplaints||0)("numberOfOpenComplaints",e.numberOfOpenComplaints||0)("numberOfMoreFeedbackRequests",e.numberOfMoreFeedbackRequests||0)("numberOfOpenMoreFeedbackRequests",e.numberOfOpenMoreFeedbackRequests||0)("numberOfAssessmentsOfCorrectionRounds",e.numberOfAssessmentsOfCorrectionRounds)}}function xt(i,m){if(i&1&&(t(0,`
                                        `),o(1,"span"),t(2),a(),t(3,`
                                    `)),i&2){let e=c().$implicit;r(2),T(" ",e.averageRating.toFixed(1)," \u2B50\uFE0F (",e.numberOfRatings,") ")}}function ht(i,m){i&1&&(t(0,`
                                        `),o(1,"span"),t(2," n.a. "),a(),t(3,`
                                    `))}function ft(i,m){if(i&1&&(t(0,`
                                    `),o(1,"td"),t(2,`
                                        `),o(3,"span",50),b(4,"artemisDate"),t(5),b(6,"artemisTimeAgo"),a(),t(7,`
                                    `),a(),t(8,`
                                `)),i&2){let e=c().$implicit;r(3),ee("ngbTooltip",_(4,3,e.dueDate)),u("hidden",!e.dueDate),r(2),O(`
                                            `,_(6,5,e.dueDate),`
                                        `)}}function bt(i,m){if(i&1&&(t(0,`
                                    `),o(1,"td"),t(2,`
                                        `),o(3,"span",50),b(4,"artemisDate"),t(5),b(6,"artemisTimeAgo"),a(),t(7,`
                                    `),a(),t(8,`
                                `)),i&2){let e=c().$implicit;r(3),ee("ngbTooltip",_(4,3,e.assessmentDueDate)),u("hidden",!e.assessmentDueDate),r(2),O(`
                                            `,_(6,5,e.assessmentDueDate),`
                                        `)}}function gt(i,m){if(i&1&&(t(0,`
                                        `),J(1),t(2,`
                                            `),o(3,"a",51),t(4,`
                                                `),d(5,"span",52),t(6,`
                                            `),a(),t(7,`
                                        `),Y(),t(8,`
                                    `)),i&2){let e=c().$implicit,n=c(2);r(3),M("guided-tour",e===n.exerciseForGuidedTour),u("routerLink",n.getAssessmentDashboardLinkForExercise(e))}}function _t(i,m){if(i&1&&(t(0,`
                                        `),o(1,"a",53),t(2,`
                                            `),d(3,"span",54),t(4,`
                                        `),a(),t(5,`
                                    `)),i&2){let e=c().$implicit,n=c(2);r(),M("guided-tour",e===n.exerciseForGuidedTour),u("routerLink",k(4,Ye,n.courseId,e.id))("queryParams",I(7,et,n.TeamFilterProp.OWN))}}function Ct(i,m){if(i&1){let e=S();t(0,`
                                        `),J(1,55),t(2,`
                                            `),o(3,"jhi-second-correction-enable-button",56),v("ngModelChange",function(){C(e);let s=c().$implicit,x=c(2);return E(x.toggleSecondCorrection(s.id))}),a(),t(4,`
                                        `),Y(),t(5,`
                                    `)}if(i&2){let e=c().$implicit,n=c(2);r(3),u("secondCorrectionEnabled",e.secondCorrectionEnabled)("togglingSecondCorrectionButton",n.isTogglingSecondCorrection.get(e.id))}}function Et(i,m){if(i&1&&(t(0,`
                            `),o(1,"tr"),t(2,`
                                `),o(3,"td"),t(4,`
                                    `),d(5,"fa-icon",46),b(6,"artemisTranslate"),t(7,`
                                `),a(),t(8,`
                                `),o(9,"td"),t(10,`
                                    `),o(11,"span"),t(12),a(),t(13,`
                                    `),d(14,"jhi-not-released-tag",47),t(15,`
                                    `),o(16,"span",48),t(17,"Live"),a(),t(18,`
                                `),a(),t(19,`
                                `),h(20,pt,6,11),o(21,"td"),t(22,`
                                    `),h(23,xt,4,2)(24,ht,4,0),a(),t(25,`
                                `),h(26,ft,9,7)(27,bt,9,7),o(28,"td"),t(29,`
                                    `),h(30,gt,9,3)(31,_t,6,9)(32,Ct,6,2),a(),t(33,`
                            `),a(),t(34,`
                        `)),i&2){let e=m.$implicit,n=c(2);r(5),u("icon",n.getIcon(e.type))("ngbTooltip",_(6,12,n.getIconTooltip(e.type))),r(7),de(e.title),r(2),u("exercise",e),r(2),u("hidden",!n.asQuizExercise(e).isActiveQuiz),r(4),p(!n.isTestRun&&e.tutorParticipations&&e.tutorParticipations[0]?20:-1),r(3),p(e.averageRating!==void 0?23:-1),r(),p(e.averageRating===void 0?24:-1),r(2),p(n.isExamMode?-1:26),r(),p(n.isExamMode?-1:27),r(3),p(e.teamMode?31:30),r(2),p(n.course!=null&&n.course.isAtLeastInstructor&&n.isExamMode&&!n.isTestRun&&(n.exam!=null&&n.exam.numberOfCorrectionRoundsInExam)&&n.exam.numberOfCorrectionRoundsInExam>1?32:-1)}}function vt(i,m){if(i&1&&(t(0,`
                            `),o(1,"li"),t(2),b(3,"artemisTranslate"),a(),t(4,`
                        `)),i&2){let e=c().$implicit;r(2),O(`
                                `,ne(3,1,e.translationKey+".below",ie(4,We,e.tutorName,e.numberOfTutorItems,e.averageTutorValue.toFixed(1),e.allowedRange.lowerBound.toFixed(1))),`
                            `)}}function St(i,m){if(i&1&&(t(0,`
                            `),o(1,"li"),t(2),b(3,"artemisTranslate"),a(),t(4,`
                        `)),i&2){let e=c().$implicit;r(2),O(`
                                `,ne(3,1,e.translationKey+".above",ie(4,We,e.tutorName,e.numberOfTutorItems,e.averageTutorValue.toFixed(1),e.allowedRange.upperBound.toFixed(1))),`
                            `)}}function Tt(i,m){if(i&1&&(t(0,`
                    `),o(1,"ul"),t(2,`
                        `),h(3,vt,5,9)(4,St,5,9),a(),t(5,`
                `)),i&2){let e=m.$implicit;r(3),p(e.averageTutorValue<e.allowedRange.lowerBound?3:-1),r(),p(e.averageTutorValue>e.allowedRange.upperBound?4:-1)}}function At(i,m){if(i&1&&(t(0,`
            `),o(1,"div",21),t(2,`
                `),d(3,"h4",57),t(4,`
                `),X(5,Tt,6,2,null,null,H),a(),t(7,`
        `)),i&2){let e=c(2);r(5),Z(e.tutorIssues)}}function Ot(i,m){i&1&&(t(0,`
                `),d(1,"h4",58),t(2,`
            `))}function It(i,m){i&1&&(t(0,`
                `),d(1,"h4",59),t(2,`
            `))}function Rt(i,m){if(i&1){let e=S();t(0,`
    `),o(1,"div"),t(2,`
        `),o(3,"div",18),t(4,`
            `),o(5,"div",19),t(6,`
                `),d(7,"jhi-assessment-dashboard-information",20),t(8,`
            `),a(),t(9,`
        `),a(),t(10,`
        `),o(11,"div",21),t(12,`
            `),d(13,"h4",22),t(14,`
            `),h(15,dt,18,2),o(16,"div",23),t(17,`
                `),o(18,"table",24),t(19,`
                    `),o(20,"thead"),t(21,`
                        `),o(22,"tr",25),le("predicateChange",function(s){C(e);let x=c();return te(x.exercisesSortingPredicate,s)||(x.exercisesSortingPredicate=s),E(s)})("ascendingChange",function(s){C(e);let x=c();return te(x.exercisesReverseOrder,s)||(x.exercisesReverseOrder=s),E(s)}),v("sortChange",function(){C(e);let s=c();return E(s.sortRows())}),t(23,`
                            `),o(24,"th",26),t(25,`
                                `),d(26,"a",27),t(27,`
                                `),d(28,"fa-icon",8),t(29,`
                            `),a(),t(30,`
                            `),o(31,"th",28),t(32,`
                                `),d(33,"a",29),t(34,`
                                `),d(35,"fa-icon",8),t(36,`
                            `),a(),t(37,`
                            `),h(38,ct,3,0),o(39,"th",30),t(40,`
                                `),d(41,"a",31),t(42,`
                                `),d(43,"fa-icon",8),t(44,`
                            `),a(),t(45,`
                            `),h(46,lt,8,1)(47,ut,8,1),d(48,"th",32),t(49,`
                        `),a(),t(50,`
                    `),a(),t(51,`
                    `),o(52,"tbody"),t(53,`
                        `),X(54,Et,35,14,null,null,H),a(),t(56,`
                `),a(),t(57,`
            `),a(),t(58,`
        `),a(),t(59,`
        `),h(60,At,8,0),o(61,"div",33),t(62,`
            `),h(63,Ot,3,0)(64,It,3,0),d(65,"jhi-tutor-leaderboard",34),t(66,`
        `),a(),t(67,`
    `),a(),t(68,`
`)}if(i&2){let e=c();r(7),u("isExamMode",e.isExamMode)("feedbackRequestEnabled",e.course.requestMoreFeedbackEnabled)("complaintsEnabled",e.course.complaintsEnabled)("numberOfTutorAssessments",e.numberOfTutorAssessments)("course",e.course)("tutorId",e.tutor.id)("examId",e.examId)("totalNumberOfAssessments",e.totalNumberOfAssessments)("numberOfSubmissions",e.numberOfSubmissions)("numberOfCorrectionRounds",e.numberOfCorrectionRounds)("totalAssessmentPercentage",e.totalAssessmentPercentage)("numberOfAssessmentsOfCorrectionRounds",e.numberOfAssessmentsOfCorrectionRounds)("complaints",e.complaints)("moreFeedbackRequests",e.moreFeedbackRequests)("assessmentLocks",e.assessmentLocks)("ratings",e.ratings),r(8),p(e.isTestRun?-1:15),r(7),ce("predicate",e.exercisesSortingPredicate)("ascending",e.exercisesReverseOrder),r(6),u("icon",e.faSort),r(7),u("icon",e.faSort),r(3),p(e.isTestRun?-1:38),r(5),u("icon",e.faSort),r(3),p(e.isExamMode?-1:46),r(),p(e.isExamMode?-1:47),r(7),Z(e.currentlyShownExercises),r(6),p(e.course&&e.course.isAtLeastInstructor&&e.tutorIssues.length>0?60:-1),r(3),p(e.isExamMode?-1:63),r(),p(e.isExamMode?64:-1),r(),u("exam",e.exam)("tutorsData",e.stats.tutorLeaderboardEntries)("course",e.course)}}var yi=(()=>{class i{courseService=f(y);exerciseService=f(Te);examManagementService=f(z);alertService=f(N);accountService=f(j);route=f(P);guidedTourService=f(Oe);sortService=f(we);TeamFilterProp=Me;documentationType="Assessment";course;exam;courseId;examId;exerciseGroupId;allExercises=[];currentlyShownExercises=[];numberOfSubmissions=new R;totalNumberOfAssessments=new R;numberOfAssessmentsOfCorrectionRounds=[new R];numberOfCorrectionRounds=1;numberOfTutorAssessments=0;complaints=new g(0,0);moreFeedbackRequests=new g(0,0);assessmentLocks=new g(0,0);ratings=new g(0,0);totalAssessmentPercentage=0;hideFinishedExercises=!0;hideOptional=!1;stats=new Q;getIcon=ve;getIconTooltip=Se;exercisesSortingPredicate="assessmentDueDate";exercisesReverseOrder=!1;tutor;exerciseForGuidedTour;isExamMode=!1;isTestRun=!1;tutorIssues=[];isTogglingSecondCorrection=new Map;faSort=Ce;faTable=ge;faClipboard=B;faHeartBroken=_e;ngOnInit(){this.courseId=Number(this.route.snapshot.paramMap.get("courseId")),this.examId=Number(this.route.snapshot.paramMap.get("examId")),this.isExamMode=!!this.examId,this.isExamMode&&(this.isTestRun=this.route.snapshot.url[1]?.toString()==="test-runs",this.exerciseGroupId=Number(this.route.snapshot.paramMap.get("exerciseGroupId"))),this.loadAll(),this.accountService.identity().then(e=>this.tutor=e)}loadAll(){this.isExamMode?(this.hideFinishedExercises=!1,this.examManagementService.getExamWithInterestingExercisesForAssessmentDashboard(this.courseId,this.examId,this.isTestRun).subscribe(e=>{if(this.exam=e.body,this.course=re.from(this.exam.course),this.accountService.setAccessRightsForCourse(this.course),!this.exam.exerciseGroups)return;let n=[];this.exam.exerciseGroups.forEach(s=>{s.exercises&&(n.push(...s.exercises),s.exercises.forEach(x=>{x.exerciseGroup=s}))}),this.extractExercises(n)}),this.examManagementService.getStatsForExamAssessmentDashboard(this.courseId,this.examId).subscribe({next:e=>{this.stats=Q.from(e.body),this.numberOfSubmissions=this.stats.numberOfSubmissions,this.numberOfAssessmentsOfCorrectionRounds=this.stats.numberOfAssessmentsOfCorrectionRounds,this.totalNumberOfAssessments=new R;for(let s of this.numberOfAssessmentsOfCorrectionRounds)this.totalNumberOfAssessments.inTime+=s.inTime;this.numberOfCorrectionRounds=this.numberOfAssessmentsOfCorrectionRounds.length;let n=this.stats.tutorLeaderboardEntries?.find(s=>s.userId===this.tutor.id);this.sortService.sortByProperty(this.stats.tutorLeaderboardEntries,"points",!1),n?(this.numberOfTutorAssessments=n.numberOfAssessments,this.complaints=new g(this.stats.numberOfComplaints,n.numberOfTutorComplaints,this.stats.numberOfComplaints-this.stats.numberOfOpenComplaints)):(this.numberOfTutorAssessments=0,this.complaints=new g(this.stats.numberOfComplaints,0,this.stats.numberOfComplaints-this.stats.numberOfOpenComplaints)),this.assessmentLocks=new g(this.stats.totalNumberOfAssessmentLocks,this.stats.numberOfAssessmentLocks),this.numberOfSubmissions.total>0&&(this.totalAssessmentPercentage=Math.floor(this.totalNumberOfAssessments.total/(this.numberOfSubmissions.total*this.numberOfCorrectionRounds)*100)),this.computeIssuesWithTutorPerformance()},error:e=>this.onError(e)})):(this.courseService.getCourseWithInterestingExercisesForTutors(this.courseId).subscribe({next:e=>{this.course=re.from(e.body),this.extractExercises(this.course.exercises)},error:e=>this.onError(e)}),this.courseService.getStatsForTutors(this.courseId).subscribe({next:e=>{this.stats=Q.from(e.body),this.numberOfSubmissions=this.stats.numberOfSubmissions,this.totalNumberOfAssessments=this.stats.totalNumberOfAssessments,this.numberOfAssessmentsOfCorrectionRounds=this.stats.numberOfAssessmentsOfCorrectionRounds;let n=this.stats.tutorLeaderboardEntries?.find(s=>s.userId===this.tutor.id);this.sortService.sortByProperty(this.stats.tutorLeaderboardEntries,"points",!1),n?(this.numberOfTutorAssessments=n.numberOfAssessments,this.complaints=new g(this.stats.numberOfComplaints,n.numberOfTutorComplaints,this.stats.numberOfComplaints-this.stats.numberOfOpenComplaints),this.moreFeedbackRequests=new g(this.stats.numberOfMoreFeedbackRequests,n.numberOfTutorMoreFeedbackRequests,this.stats.numberOfMoreFeedbackRequests-this.stats.numberOfOpenMoreFeedbackRequests),this.ratings=new g(this.stats.numberOfRatings,n.numberOfTutorRatings)):(this.numberOfTutorAssessments=0,this.complaints=new g(this.stats.numberOfComplaints,0,this.stats.numberOfComplaints-this.stats.numberOfOpenComplaints),this.moreFeedbackRequests=new g(this.stats.numberOfMoreFeedbackRequests,0,this.stats.numberOfMoreFeedbackRequests-this.stats.numberOfOpenMoreFeedbackRequests),this.ratings=new g(this.stats.numberOfRatings,0)),this.assessmentLocks=new g(this.stats.totalNumberOfAssessmentLocks,this.stats.numberOfAssessmentLocks),this.numberOfSubmissions.total>0&&(this.totalAssessmentPercentage=Math.floor(this.totalNumberOfAssessments.total/this.numberOfSubmissions.total*100)),this.guidedTourService.componentPageLoaded(),this.computeIssuesWithTutorPerformance()},error:e=>this.onError(e)}))}computeIssuesWithTutorPerformance(){this.tutorIssues=[];let e=l=>l.numberOfAssessments===0?0:100*l.numberOfTutorComplaints/l.numberOfAssessments,n=this.stats.tutorLeaderboardEntries.reduce((l,A)=>({summedAverageRatings:l.summedAverageRatings+A.averageRating,summedAverageScore:l.summedAverageScore+A.averageScore,summedComplaintRatio:l.summedComplaintRatio+e(A)}),{summedAverageRatings:0,summedAverageScore:0,summedComplaintRatio:0}),s=this.stats.tutorLeaderboardEntries.filter(l=>l.averageRating>0).length,x=this.stats.tutorLeaderboardEntries.filter(l=>l.numberOfAssessments>0).length;this.stats.tutorLeaderboardEntries.flatMap(l=>[new qe(l.numberOfTutorRatings,l.averageRating,n.summedAverageRatings/s,l.name,l.userId),new G(l.numberOfAssessments,l.averageScore,n.summedAverageScore/x,l.name,l.userId),new K(l.numberOfTutorComplaints,e(l),n.summedComplaintRatio/x,l.name,l.userId)]).filter(l=>l.isPerformanceIssue).map(l=>l.toIssue()).forEach(l=>{let A=this.stats.tutorLeaderboardEntries.find(ze=>ze.userId===l.tutorId);A.hasIssuesWithPerformance=!0,this.tutorIssues.push(l)})}extractExercises(e){e&&e.length>0&&(this.allExercises=e,this.currentlyShownExercises=this.getUnfinishedExercises(e),this.sortService.sortByProperty(this.currentlyShownExercises,"type",!0),this.exerciseForGuidedTour=this.guidedTourService.enableTourForCourseExerciseComponent(this.course,ke,!1),this.initIsTogglingSecondCorrection(),this.updateExercises())}initIsTogglingSecondCorrection(){this.allExercises.forEach(e=>{this.isTogglingSecondCorrection.set(e.id,!1)})}getUnfinishedExercises(e){let n=e?.filter(s=>!s.allowComplaintsForAutomaticAssessments&&this.hasUnfinishedAssessments(s)||s.numberOfOpenComplaints!==0||s.numberOfOpenMoreFeedbackRequests!==0);return n||[]}hasUnfinishedAssessments(e){return e.numberOfAssessmentsOfCorrectionRounds?.map(n=>n.inTime!==e.numberOfSubmissions?.inTime).reduce((n,s)=>n||s)||e.totalNumberOfAssessments?.inTime!==e.numberOfSubmissions?.inTime}triggerFinishedExercises(){this.hideFinishedExercises=!this.hideFinishedExercises,this.updateExercises()}triggerOptionalExercises(){this.hideOptional=!this.hideOptional,this.updateExercises()}updateExercises(){this.currentlyShownExercises=this.hideFinishedExercises?this.getUnfinishedExercises(this.allExercises):this.allExercises,this.hideOptional&&(this.currentlyShownExercises=this.currentlyShownExercises.filter(e=>e.includedInOverallScore!==Ee.NOT_INCLUDED))}onError(e){this.alertService.error(e)}sortRows(){this.sortService.sortByProperty(this.currentlyShownExercises,this.exercisesSortingPredicate,this.exercisesReverseOrder)}toggleSecondCorrection(e){let n=this.currentlyShownExercises.find(x=>x.id===e);this.isTogglingSecondCorrection.set(n.id,!0);let s=this.currentlyShownExercises.indexOf(n);this.exerciseService.toggleSecondCorrection(e).subscribe({next:x=>{this.currentlyShownExercises[s].secondCorrectionEnabled=!this.currentlyShownExercises[s].secondCorrectionEnabled,n.secondCorrectionEnabled=x,this.isTogglingSecondCorrection.set(n.id,!1)},error:x=>{this.onError(x)}})}getAssessmentDashboardLinkForExercise(e){return this.isExamMode?["/course-management",this.courseId.toString(),"exams",this.examId.toString(),this.isTestRun?"test-assessment-dashboard":"assessment-dashboard",e.id.toString()]:["/course-management",this.courseId.toString(),"assessment-dashboard",e.id.toString()]}asQuizExercise(e){return e}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=F({type:i,selectors:[["jhi-assessment-dashboard"]],features:[ue([y])],decls:23,vars:7,consts:[[1,"course-info-bar","mt-0"],[1,"row","align-items-center","justify-content-end"],[1,"col-12","col-lg-7","general-info"],[1,"d-flex","align-items-center"],[3,"type"],[1,"col-12","col-lg-5"],[1,"d-flex","justify-content-lg-end"],[1,"tab-item","btn","btn-info","btn-md",3,"routerLink"],[3,"icon"],["jhiTranslate","entity.action.scores"],[1,"tab-item","btn","btn-info","btn-md","ms-1","me-1",3,"routerLink"],["jhiTranslate","artemisApp.course.gradingSystem"],["jhiTranslate","artemisApp.plagiarism.cases.plagiarismCases"],[1,"row","justify-content-between"],[1,"col-md-8"],[1,"me-2"],[1,"assessment-button-row"],["jhiTranslate","artemisApp.examManagement.testRun.secondCorrectionHint",1,"alert","alert-warning",2,"margin-top","1em"],["id","assessment-statistics",1,"guided-tour-assessment-stats"],[1,"container-fluid"],[3,"isExamMode","feedbackRequestEnabled","complaintsEnabled","numberOfTutorAssessments","course","tutorId","examId","totalNumberOfAssessments","numberOfSubmissions","numberOfCorrectionRounds","totalAssessmentPercentage","numberOfAssessmentsOfCorrectionRounds","complaints","moreFeedbackRequests","assessmentLocks","ratings"],[1,"container-fluid","mt-4"],["jhiTranslate","artemisApp.assessmentDashboard.exerciseTable.title"],[1,"row","table-responsive"],[1,"table","exercise-table","guided-tour-exercise-table"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["jhiSortBy","type"],["jhiTranslate","artemisApp.assessmentDashboard.exerciseType",1,"th-link"],["jhiSortBy","title"],["jhiTranslate","artemisApp.assessmentDashboard.exercise",1,"th-link"],["jhiSortBy","averageRating"],["jhiTranslate","artemisApp.assessmentDashboard.exerciseAverageRating",1,"th-link"],["jhiTranslate","artemisApp.assessmentDashboard.actions"],[1,"container-fluid","pt-4"],[3,"exam","tutorsData","course"],[1,"guided-tour-form-check","col-6","align-baseline"],[1,"form-check","form-check-inline"],["type","checkbox","name","hideFinishedExercise","id","field_hideFinishedExercise",1,"form-check-input",3,"ngModelChange","ngModel"],["for","field_hideFinishedExercise","jhiTranslate","artemisApp.assessmentDashboard.hideFinishedExercises",1,"form-check-label"],["type","checkbox","name","hideOptional","id","field_hideOptional",1,"form-check-input",3,"ngModelChange","ngModel"],["for","field_hideOptional","jhiTranslate","artemisApp.assessmentDashboard.hideOptional",1,"form-check-label"],["jhiTranslate","artemisApp.assessmentDashboard.yourStatus"],["jhiSortBy","dueDate"],["jhiTranslate","artemisApp.assessmentDashboard.exerciseDueDate",1,"th-link"],["jhiSortBy","assessmentDueDate"],["jhiTranslate","artemisApp.assessmentDashboard.assessmentsDueDate",1,"th-link"],["placement","right auto",3,"icon","ngbTooltip"],[3,"exercise"],[1,"badge","bg-success",3,"hidden"],[3,"exercise","tutorParticipation","numberOfSubmissions","totalNumberOfAssessments","numberOfComplaints","numberOfOpenComplaints","numberOfMoreFeedbackRequests","numberOfOpenMoreFeedbackRequests","numberOfAssessmentsOfCorrectionRounds"],["placement","right auto",3,"hidden","ngbTooltip"],["id","open-exercise-dashboard",1,"btn","btn-info","btn-sm","me-1","mb-1",3,"routerLink"],["jhiTranslate","entity.action.exerciseDashboard",1,"d-md-inline"],[1,"btn","btn-info","btn-sm","me-1","mb-1",3,"routerLink","queryParams"],["jhiTranslate","artemisApp.assessmentDashboard.exerciseTeams",1,"d-none","d-md-inline"],[1,"col-lg-3","col-md-6","col-sm-6"],["data-testid","toggle-second-correction",1,"me-1","mb-1",3,"ngModelChange","secondCorrectionEnabled","togglingSecondCorrectionButton"],["jhiTranslate","artemisApp.assessmentDashboard.tutorPerformanceIssues.title"],["jhiTranslate","artemisApp.assessmentDashboard.tutorLeaderboard.courseTitle"],["jhiTranslate","artemisApp.assessmentDashboard.tutorLeaderboard.examTitle"]],template:function(n,s){n&1&&(o(0,"div",0),t(1,`
    `),o(2,"div",1),t(3,`
        `),o(4,"div",2),t(5,`
            `),o(6,"div",3),t(7,`
                `),h(8,tt,5,4)(9,it,6,6),d(10,"jhi-documentation-button",4),t(11,`
            `),a(),t(12,`
        `),a(),t(13,`
        `),o(14,"div",5),t(15,`
            `),h(16,rt,6,2),a(),t(17,`
    `),a(),t(18,`
    `),h(19,at,24,13),a(),t(20,`
`),h(21,mt,3,0)(22,Rt,69,31)),n&2&&(r(8),p(s.isExamMode?-1:8),r(),p(s.isExamMode?9:-1),r(),u("type",s.documentationType),r(6),p(s.isExamMode?-1:16),r(3),p(s.isExamMode&&!s.isTestRun?19:-1),r(2),p(s.isTestRun&&(s.exam!=null&&s.exam.numberOfCorrectionRoundsInExam)&&s.exam.numberOfCorrectionRoundsInExam>1?21:-1),r(),p(s.course?22:-1))},dependencies:[L,q,U,Ue,Pe,fe,pe,xe,he,be,V,je,Be,Ne,Le,Ie,Fe,Re,ye,De],styles:[".assessment-button-row[_ngcontent-%COMP%]{width:30%;float:right}"]})}return i})();export{yi as AssessmentDashboardComponent};
//# sourceMappingURL=assessment-dashboard.component-SJ6Y2MCB.js.map
