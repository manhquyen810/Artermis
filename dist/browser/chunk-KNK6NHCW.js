import{a as b}from"./chunk-FLTLUO4X.js";import{a as g}from"./chunk-GM5QZPKO.js";import{a as I}from"./chunk-4NYYKXW4.js";import{a as r}from"./chunk-G4I63THF.js";import{p as S}from"./chunk-DID2YGL7.js";import{c as l}from"./chunk-CXQURQM5.js";import{a as w}from"./chunk-U54OSGNH.js";import{Db as a,La as C,Oc as m,Tb as _,Zb as h,dd as e,kc as x,oc as f,sc as p,xc as d,yc as u,zc as s}from"./chunk-5LC5EQRR.js";function R(i,n){if(i&1&&(e(0,`
        `),e(1,`
        `),d(2,"span"),e(3,`
            `),s(4,"jhi-updating-result",1),e(5,`
        `),u(),e(6,`
    `)),i&2){let t=m();a(4),f(t.updatingResultClass),x("exercise",t.exercise)("participation",t.studentParticipation)("showUngradedResults",t.showUngradedResults)("showBadge",t.showBadge)("showIcon",t.showIcon)("isInSidebarCard",t.isInSidebarCard)("showCompletion",t.showCompletion)("short",t.short)("personalParticipation",!0)("showProgressBar",t.showProgressBar)}}function P(i,n){i&1&&(e(0,`
                `),s(1,"span",2),e(2,`
            `))}function T(i,n){i&1&&(e(0,`
                `),s(1,"span",3),e(2,`
            `))}function y(i,n){i&1&&(e(0,`
                `),s(1,"span",4),e(2,`
            `))}function v(i,n){i&1&&(e(0,`
                `),s(1,"span",5),e(2,`
            `))}function z(i,n){i&1&&(e(0,`
                `),s(1,"span",6),e(2,`
            `))}function D(i,n){i&1&&(e(0,`
                `),s(1,"span",7),e(2,`
            `))}function E(i,n){i&1&&(e(0,`
                `),s(1,"span",8),e(2,`
            `))}function A(i,n){i&1&&(e(0,`
                `),d(1,"span",9),e(2,"-"),u(),e(3,`
            `))}function N(i,n){if(i&1&&(e(0,`
        `),d(1,"div"),e(2,`
            `),h(3,P,3,0)(4,T,3,0)(5,y,3,0)(6,v,3,0)(7,z,3,0)(8,D,3,0)(9,E,3,0)(10,A,4,0),u(),e(11,`
    `)),i&2){let t=m();a(3),p(t.exercise.teamMode&&t.exercise.studentAssignedTeamIdComputed&&!t.exercise.studentAssignedTeamId?3:t.uninitialized?4:t.exerciseMissedDueDate?5:t.notSubmitted?6:!t.notSubmitted&&(t.studentParticipation==null?null:t.studentParticipation.initializationState)===t.InitializationState.FINISHED?7:(t.studentParticipation==null?null:t.studentParticipation.initializationState)===t.InitializationState.INITIALIZED&&t.exercise.type===t.ExerciseType.QUIZ?8:t.quizNotStarted?9:10)}}function B(i,n){if(i&1&&(e(0,`
        `),s(1,"jhi-programming-exercise-student-trigger-build-button",10),e(2,`
    `)),i&2){let t=m();a(),x("exercise",t.exercise)("participation",t.studentParticipation)("triggerLastGraded",t.triggerLastGraded)}}var V=(()=>{class i{initializationStatesToShowProgrammingResult=[r.INITIALIZED,r.INACTIVE,r.FINISHED];ExerciseType=l;InitializationState=r;dayjs=S;exercise;studentParticipation;updatingResultClass;showBadge=!1;showUngradedResults=!1;showIcon=!0;isInSidebarCard=!1;showCompletion=!0;short=!0;triggerLastGraded=!0;showProgressBar=!1;quizNotStarted;exerciseMissedDueDate;uninitialized;notSubmitted;shouldShowResult;ngOnChanges(){let t=!!this.exercise.dueDate&&this.exercise.dueDate.isBefore(S());if(this.exerciseMissedDueDate=t&&!this.studentParticipation,this.exercise.type===l.QUIZ){let o=this.exercise;this.uninitialized=g.isUninitialized(o),this.quizNotStarted=g.notStarted(o)}else this.uninitialized=!t&&!this.studentParticipation,this.notSubmitted=t&&!!this.studentParticipation&&!this.studentParticipation.submissions?.length;this.setShouldShowResult(t)}setShouldShowResult(t){this.exercise.type===l.QUIZ?this.shouldShowResult=!!this.studentParticipation?.results?.length:this.exercise.type===l.PROGRAMMING?this.shouldShowResult=(!!this.studentParticipation?.results?.length||!t)&&!!this.studentParticipation?.initializationState&&this.initializationStatesToShowProgrammingResult.includes(this.studentParticipation.initializationState):this.shouldShowResult=this.studentParticipation?.initializationState===r.FINISHED}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=_({type:i,selectors:[["jhi-submission-result-status"]],inputs:{exercise:"exercise",studentParticipation:"studentParticipation",updatingResultClass:"updatingResultClass",showBadge:"showBadge",showUngradedResults:"showUngradedResults",showIcon:"showIcon",isInSidebarCard:"isInSidebarCard",showCompletion:"showCompletion",short:"short",triggerLastGraded:"triggerLastGraded",showProgressBar:"showProgressBar"},features:[C],decls:6,vars:2,consts:[[1,"col-auto"],["id","submission-result-graded",3,"exercise","participation","showUngradedResults","showBadge","showIcon","isInSidebarCard","showCompletion","short","personalParticipation","showProgressBar"],["jhiTranslate","artemisApp.courseOverview.exerciseList.userNotAssignedToTeamShort",1,"text-body-secondary"],["jhiTranslate","artemisApp.courseOverview.exerciseList.userNotStartedExerciseShort",1,"text-body-secondary"],["jhiTranslate","artemisApp.courseOverview.exerciseList.exerciseMissedDueDateShort",1,"text-body-secondary"],["jhiTranslate","artemisApp.courseOverview.exerciseList.exerciseNotSubmittedShort",1,"text-body-secondary"],["jhiTranslate","artemisApp.courseOverview.exerciseList.userSubmittedShort",1,"text-body-secondary"],["jhiTranslate","artemisApp.courseOverview.exerciseList.userParticipatingShort",1,"text-body-secondary"],["jhiTranslate","artemisApp.courseOverview.exerciseList.quizNotStartedShort",1,"text-body-secondary"],[1,"text-body-secondary"],[3,"exercise","participation","triggerLastGraded"]],template:function(o,c){o&1&&(d(0,"div",0),e(1,`
    `),h(2,R,7,12)(3,N,12,1)(4,B,3,3),u(),e(5,`
`)),o&2&&(a(2),p(c.shouldShowResult?2:3),a(2),p(c.exercise.type===c.ExerciseType.PROGRAMMING&&c.studentParticipation?4:-1))},dependencies:[I,w,b],encapsulation:2})}return i})();export{V as a};
//# sourceMappingURL=chunk-KNK6NHCW.js.map
