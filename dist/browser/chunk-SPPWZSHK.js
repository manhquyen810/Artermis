import{a as q}from"./chunk-QGGSPP32.js";import{a as K}from"./chunk-MVBHDJDH.js";import{a as J}from"./chunk-POPNQ63B.js";import{a as k}from"./chunk-KYCCMZSV.js";import{f as Y}from"./chunk-DXTZ4GAW.js";import{a as V}from"./chunk-OTCBNILH.js";import{a as y}from"./chunk-PZ7IDTIM.js";import{f as Q}from"./chunk-CT44YL7Q.js";import{c as U}from"./chunk-JNO6DNVW.js";import{K as H}from"./chunk-VZRSC3LP.js";import{a as F}from"./chunk-K3W6YFKH.js";import{d as G}from"./chunk-EDXSOKK5.js";import{p as f}from"./chunk-DID2YGL7.js";import{c as T,f as L,h as b,i as j,k as N}from"./chunk-CXQURQM5.js";import{kb as W}from"./chunk-Z4VHWOB5.js";import{a as z}from"./chunk-U54OSGNH.js";import{n as B}from"./chunk-IOA4DPXY.js";import{Ad as h,Db as n,Ea as S,La as O,Oc as p,Pc as R,Qc as I,Rc as D,Tb as w,Zb as m,dd as i,fd as x,gd as P,kc as g,lc as M,qd as A,rd as v,sc as o,xc as r,yc as c,yd as l,zc as C,zd as d}from"./chunk-5LC5EQRR.js";var X=[[["","pagetitle",""]]],Z=["[pagetitle]"],$=()=>({difficulty:!0,notReleased:!0}),ee=t=>({points:t}),E=t=>({date:t}),te=t=>({days:t});function ie(t,a){if(t&1&&(i(0,`
                        `),C(1,"fa-icon",5),l(2,"artemisTranslate"),i(3,`
                    `)),t&2){let e=p(2);n(),g("icon",e.getIcon(e.exercise.type))("ngbTooltip",d(2,2,e.getIconTooltip(e.exercise.type)))}}function ne(t,a){if(t&1&&(i(0,`
                    `),C(1,"jhi-exercise-categories",6),i(2,`
                `)),t&2){let e=p(2);n(),g("exercise",e.exercise)("showTags",A(3,$))("ngClass","badge-row")}}function ae(t,a){if(t&1&&(i(0),l(1,"artemisTranslate")),t&2){let e=p(4);x(`
                                    `,e.achievedPoints+d(1,1,"artemisApp.courseOverview.exerciseDetails.of"),`
                                `)}}function oe(t,a){if(t&1&&(i(0,`
                                    `),r(1,"span"),i(2),l(3,"artemisTranslate"),c(),i(4,`
                                `)),t&2){let e=p(4);n(2),P("(",d(3,2,"artemisApp.courseOverview.exerciseDetails.bonus")," ",e.exercise.bonusPoints,")")}}function se(t,a){if(t&1&&(i(0,`
                                `),C(1,"jhi-included-in-score-badge",9),i(2,`
                            `)),t&2){let e=p(4);n(),g("includedInOverallScore",e.exercise.includedInOverallScore)}}function le(t,a){if(t&1&&(i(0,`
                        `),r(1,"span"),i(2,`
                            `),r(3,"span",8),i(4),l(5,"artemisTranslate"),m(6,ae,2,3),i(7),m(8,oe,5,4),c(),i(9,`
                            `),m(10,se,3,1),c(),i(11,`
                    `)),t&2){let e=p(3);n(),M("margin-right",e.exercise.maxPoints?"30px":null),n(3),x(`
                                `,d(5,7,"artemisApp.courseOverview.exerciseDetails.points"),`
                                `),n(2),o(e.achievedPoints!==void 0?6:-1),n(),x(`
                                `,e.exercise.maxPoints,`
                                `),n(),o(e.exercise.bonusPoints?8:-1),n(2),o(e.exercise.includedInOverallScore!==e.IncludedInOverallScore.INCLUDED_COMPLETELY?10:-1)}}function re(t,a){if(t&1&&(i(0,`
                        `),r(1,"span"),i(2,`
                            `),r(3,"div"),i(4),l(5,"artemisTranslate"),l(6,"artemisTranslate"),C(7,"fa-icon",5),l(8,"artemisTranslate"),i(9,`
                            `),c(),i(10,`
                        `),c(),i(11,`
                    `)),t&2){let e=p(3);n(4),P(`
                                `,d(5,4,"artemisApp.courseOverview.exerciseDetails.assessmentType"),`
                                `,d(6,6,"artemisApp.AssessmentType.forExerciseHeader."+e.exercise.assessmentType),`
                                `),n(3),D("ngbTooltip",d(8,8,"artemisApp.AssessmentType.tooltip."+e.exercise.assessmentType)),g("icon",e.faQuestionCircle)}}function ce(t,a){if(t&1&&(i(0,`
                `),r(1,"div",7),i(2,`
                    `),m(3,le,12,9)(4,re,12,10),c(),i(5,`
            `)),t&2){let e=p(2);n(3),o(e.exercise.maxPoints?3:-1),n(),o(e.exercise.assessmentType&&e.exercise.type===e.ExerciseType.PROGRAMMING?4:-1)}}function pe(t,a){if(t&1&&(i(0,`
                `),r(1,"div",10),i(2,`
                    `),r(3,"div"),i(4),l(5,"artemisTranslate"),c(),i(6,`
                    `),r(7,"div"),i(8),l(9,"artemisTranslate"),C(10,"fa-icon",5),l(11,"artemisTranslate"),i(12,`
                    `),c(),i(13,`
                `),c(),i(14,`
            `)),t&2){let e=p(2);n(4),x("",d(5,4,"artemisApp.programmingExercise.submissionPolicy.submissionLimitTitle"),":"),n(4),x(`
                        `,e.numberOfSubmissions+"/"+e.submissionPolicy.submissionLimit+(e.submissionPolicy.exceedingPenalty?h(9,6,"artemisApp.programmingExercise.submissionPolicy.submissionPenalty.penaltyInfoLabel",v(11,ee,e.submissionPolicy.exceedingPenalty)):""),`
                        `),n(2),D("ngbTooltip",d(11,9,"artemisApp.programmingExercise.submissionPolicy.submissionPolicyType."+e.submissionPolicy.type+".tooltip")),g("icon",e.faQuestionCircle)}}function de(t,a){t&1&&i(0,`
            `)}function xe(t,a){if(t&1&&(i(0,`
                    `),r(1,"div",11),i(2),l(3,"artemisTranslate"),r(4,"span",12),l(5,"artemisDate"),l(6,"artemisTranslate"),i(7),l(8,"artemisTimeAgo"),c(),i(9,`
                    `),c(),i(10,`
                `)),t&2){let e=p(3);n(2),x(`
                        `,d(3,4,"artemisApp.courseOverview.exerciseDetails."+e.nextRelevantDateLabel),`
                        `),n(2),g("ngClass",e.nextRelevantDateStatusBadge)("ngbTooltip",h(6,8,"artemisApp.courseOverview.exerciseDetails."+e.nextRelevantDateLabel+"Tooltip",v(13,E,d(5,6,e.nextRelevantDate)))),n(3),x(`
                            `,d(8,11,e.nextRelevantDate),`
                        `)}}function me(t,a){t&1&&(i(0,`
                                `),C(1,"span",13),i(2,`
                            `))}function _e(t,a){t&1&&(i(0,`
                                `),C(1,"span",14),i(2,`
                            `))}function ue(t,a){if(t&1&&(i(0),l(1,"artemisTranslate"),m(2,me,3,0)(3,_e,3,0)),t&2){let e,s,_=p(4);x(`
                            `,d(1,3,"artemisApp.courseOverview.exerciseDetails.presented"),`
                            `),n(2),o(((e=_.studentParticipation==null?null:_.studentParticipation.presentationScore)!==null&&e!==void 0?e:0)>0?2:-1),n(),o(((s=_.studentParticipation==null?null:_.studentParticipation.presentationScore)!==null&&s!==void 0?s:0)<=0?3:-1)}}function Ce(t,a){if(t&1&&(i(0,`
                                `),r(1,"span",15),i(2),c(),i(3,`
                            `)),t&2){let e=p(5);n(2),x(`
                                    `,e.studentParticipation.presentationScore+"%",`
                                `)}}function ge(t,a){t&1&&(i(0,`
                                `),C(1,"span",16),i(2,`
                            `))}function fe(t,a){if(t&1&&(i(0),l(1,"artemisTranslate"),m(2,Ce,4,1)(3,ge,3,0)),t&2){let e=p(4);x(`
                            `,d(1,3,"artemisApp.courseOverview.exerciseDetails.presentation"),`
                            `),n(2),o(e.studentParticipation!=null&&e.studentParticipation.presentationScore?2:-1),n(),o(e.studentParticipation!=null&&e.studentParticipation.presentationScore?-1:3)}}function ve(t,a){if(t&1&&(i(0,`
                    `),r(1,"div"),i(2,`
                        `),m(3,ue,4,5)(4,fe,4,5),c(),i(5,`
                `)),t&2){let e=p(3);n(3),o(e.course!=null&&e.course.presentationScore?3:4)}}function he(t,a){if(t&1&&(i(0,`
                `),m(1,xe,11,15)(2,ve,6,1)),t&2){let e=p(2);n(),o(e.nextRelevantDate&&(!e.exam||!e.isTestRun)?1:-1),n(),o(e.exercise.presentationScoreEnabled?2:-1)}}function De(t,a){if(t&1&&(i(0,`
                `),r(1,"div",11),i(2),l(3,"artemisTranslate"),r(4,"span",12),l(5,"artemisDate"),l(6,"artemisTranslate"),i(7),l(8,"artemisTimeAgo"),c(),i(9,`
                `),c(),i(10,`
            `)),t&2){let e=p(2);n(2),x(`
                    `,d(3,4,"artemisApp.courseOverview.exerciseDetails.submissionDue"),`
                    `),n(2),g("ngClass",e.dueDateStatusBadge)("ngbTooltip",h(6,8,"artemisApp.courseOverview.exerciseDetails.submissionDueTooltip",v(13,E,d(5,6,e.dueDate)))),n(3),x(`
                        `,d(8,11,e.dueDate),`
                    `)}}function Pe(t,a){t&1&&i(0,`
            `)}function Te(t,a){if(t&1&&(i(0,`
                    `),r(1,"div",11),i(2),l(3,"artemisTranslate"),r(4,"span",12),l(5,"artemisDate"),l(6,"artemisTranslate"),i(7),l(8,"artemisTimeAgo"),c(),i(9,`
                    `),c(),i(10,`
                `)),t&2){let e=p(3);n(2),x(`
                        `,d(3,4,"artemisApp.courseOverview.exerciseDetails."+e.nextRelevantDateLabel),`
                        `),n(2),g("ngClass",e.nextRelevantDateStatusBadge)("ngbTooltip",h(6,8,"artemisApp.courseOverview.exerciseDetails."+e.nextRelevantDateLabel+"Tooltip",v(13,E,d(5,6,e.nextRelevantDate)))),n(3),x(`
                            `,d(8,11,e.nextRelevantDate),`
                        `)}}function be(t,a){t&1&&(i(0,`
                                `),C(1,"span",13),i(2,`
                            `))}function ye(t,a){t&1&&(i(0,`
                                `),C(1,"span",14),i(2,`
                            `))}function Ee(t,a){if(t&1&&(i(0),l(1,"artemisTranslate"),m(2,be,3,0)(3,ye,3,0)),t&2){let e,s,_=p(4);x(`
                            `,d(1,3,"artemisApp.courseOverview.exerciseDetails.presented"),`
                            `),n(2),o(((e=_.studentParticipation==null?null:_.studentParticipation.presentationScore)!==null&&e!==void 0?e:0)>0?2:-1),n(),o(((s=_.studentParticipation==null?null:_.studentParticipation.presentationScore)!==null&&s!==void 0?s:0)<=0?3:-1)}}function Se(t,a){if(t&1&&(i(0,`
                                `),r(1,"span",15),i(2),c(),i(3,`
                            `)),t&2){let e=p(5);n(2),x(`
                                    `,e.studentParticipation.presentationScore+"%",`
                                `)}}function Oe(t,a){t&1&&(i(0,`
                                `),C(1,"span",16),i(2,`
                            `))}function we(t,a){if(t&1&&(i(0),l(1,"artemisTranslate"),m(2,Se,4,1)(3,Oe,3,0)),t&2){let e=p(4);x(`
                            `,d(1,3,"artemisApp.courseOverview.exerciseDetails.presentation"),`
                            `),n(2),o(e.studentParticipation!=null&&e.studentParticipation.presentationScore?2:-1),n(),o(e.studentParticipation!=null&&e.studentParticipation.presentationScore?-1:3)}}function Me(t,a){if(t&1&&(i(0,`
                    `),r(1,"div"),i(2,`
                        `),m(3,Ee,4,5)(4,we,4,5),c(),i(5,`
                `)),t&2){let e=p(3);n(3),o(e.course!=null&&e.course.presentationScore?3:-1),n(),o(e.course!=null&&e.course.presentationScore?-1:4)}}function Re(t,a){if(t&1&&(i(0,`
                `),m(1,Te,11,15)(2,Me,6,2)),t&2){let e=p(2);n(),o(e.nextRelevantDate&&(!e.exam||!e.isTestRun)?1:-1),n(),o(e.exercise.presentationScoreEnabled?2:-1)}}function Ie(t,a){if(t&1&&(i(0,`
                `),r(1,"div",11),i(2),l(3,"artemisTranslate"),C(4,"span",17),l(5,"artemisTranslate"),i(6,`
                `),c(),i(7,`
            `)),t&2){let e=p(2);n(2),x(`
                    `,d(3,2,"artemisApp.courseOverview.exerciseDetails.complaintPossible"),`
                    `),n(2),g("ngbTooltip",h(5,4,"artemisApp.courseOverview.exerciseDetails.complaintPossibleTooltip",v(7,te,e.course==null?null:e.course.maxComplaintTimeDays)))}}function Ae(t,a){if(t&1&&(i(0,`
    `),r(1,"div",0),i(2,`
        `),r(3,"div",1),i(4,`
            `),r(5,"div",2),i(6,`
                `),r(7,"div",3),i(8,`
                    `),m(9,ie,4,4),I(10),i(11,`
                `),c(),i(12,`
                `),m(13,ne,3,4),c(),i(14,`
            `),m(15,ce,6,2)(16,pe,15,13),c(),i(17,`
        `),r(18,"div",4),i(19,`
            `),m(20,de,1,0)(21,he,3,2)(22,De,11,15)(23,Pe,1,0)(24,Re,3,2)(25,Ie,8,9),c(),i(26,`
    `),c(),i(27,`
`)),t&2){let e=p();n(9),o(e.exercise.type?9:-1),n(4),o(e.exercise.releaseDate&&e.dayjs(e.exercise.releaseDate).isAfter(e.dayjs())||e.exercise.difficulty||e.exerciseCategories!=null&&e.exerciseCategories.length?13:-1),n(2),o(e.exercise.maxPoints||e.exercise.assessmentType&&e.exercise.type===e.ExerciseType.PROGRAMMING?15:-1),n(),o(e.submissionPolicy&&e.submissionPolicy.active?16:-1),n(4),o(!e.nextRelevantDateLabel||e.nextRelevantDateLabel!=="releaseDate"&&e.nextRelevantDateLabel!=="startDate"?20:21),n(2),o(e.dueDate?22:-1),n(),o(!e.nextRelevantDateLabel||e.nextRelevantDateLabel!=="assessmentDue"&&e.nextRelevantDateLabel!=="complaintDue"?23:24),n(2),o(!e.nextRelevantDate&&e.canComplainLaterOn?25:-1)}}var pt=(()=>{class t{sortService=S(V);IncludedInOverallScore=L;AssessmentType=y;ExerciseType=T;getIcon=b;getIconTooltip=j;dayjs=f;exercise;studentParticipation;title;exam;course;isTestRun=!1;submissionPolicy;exerciseCategories;dueDate;isBeforeStartDate;programmingExercise;individualComplaintDueDate;nextRelevantDate;nextRelevantDateLabel;nextRelevantDateStatusBadge;dueDateStatusBadge;canComplainLaterOn;achievedPoints;numberOfSubmissions;icon;faQuestionCircle=W;ngOnInit(){this.exerciseCategories=this.exercise.categories||[],this.exercise.type&&(this.icon=b(this.exercise.type)),this.programmingExercise=this.exercise.type===T.PROGRAMMING?this.exercise:void 0,this.exam?this.determineNextRelevantDateExamMode():(this.dueDate=Y(this.exercise,this.studentParticipation),this.isBeforeStartDate=this.exercise.startDate?this.exercise.startDate.isAfter(f()):!!this.exercise.releaseDate?.isAfter(f()),this.course?.maxComplaintTimeDays&&(this.individualComplaintDueDate=q.getIndividualComplaintDueDate(this.exercise,this.course.maxComplaintTimeDays,this.studentParticipation?.results?.last(),this.studentParticipation)),this.canComplainLaterOn=!!this.studentParticipation?.submissionCount&&!this.individualComplaintDueDate&&(this.exercise.allowComplaintsForAutomaticAssessments||this.exercise.assessmentType!==y.AUTOMATIC),this.determineNextRelevantDateCourseMode()),this.dueDate&&(this.dueDateStatusBadge=f().isBefore(this.dueDate)?"bg-success":"bg-danger")}ngOnChanges(){if(this.course=this.course??N(this.exercise),this.submissionPolicy?.active&&this.countSubmissions(),this.studentParticipation?.results?.length){this.sortService.sortByProperty(this.studentParticipation.results,"id",!1);let e=this.studentParticipation.results.filter(s=>s.rated).first();e&&(this.achievedPoints=Q(e.score*this.exercise.maxPoints/100,this.course))}}determineNextRelevantDateExamMode(){let e=[this.exam?.endDate,this.exam?.publishResultsDate],s=["endDate","publishResultsDate"];this.determineNextDate(e,s,f())}determineNextRelevantDateCourseMode(){let e=[this.exercise.releaseDate,this.exercise.startDate,this.exercise.assessmentDueDate,this.individualComplaintDueDate],s=["releaseDate","startDate","assessmentDue","complaintDue"];this.determineNextDate(e,s,f())}determineNextDate(e,s,_){this.nextRelevantDate=void 0,this.nextRelevantDateLabel=void 0,this.nextRelevantDateStatusBadge=void 0;for(let u=0;u<e.length;u++)if(e[u]&&_.isBefore(e[u])){this.nextRelevantDate=e[u],this.nextRelevantDateLabel=s[u],this.nextRelevantDateStatusBadge="bg-success";return}if(!this.canComplainLaterOn){for(let u=e.length-1;u>=0;u--)if(e[u]){if(this.dueDate&&this.dueDate.isAfter(e[u]))return;this.nextRelevantDate=e[u],this.nextRelevantDateLabel=s[u],this.nextRelevantDateStatusBadge="bg-danger";return}}}countSubmissions(){let e=new Set;this.studentParticipation?.results?.map(s=>s.submission).filter(s=>s?.type==="MANUAL").map(s=>s.commitHash).forEach(s=>e.add(s)),this.numberOfSubmissions=e.size}static \u0275fac=function(s){return new(s||t)};static \u0275cmp=w({type:t,selectors:[["jhi-header-exercise-page-with-details"]],inputs:{exercise:"exercise",studentParticipation:"studentParticipation",title:"title",exam:"exam",course:"course",isTestRun:"isTestRun",submissionPolicy:"submissionPolicy"},features:[O],ngContentSelectors:Z,decls:1,vars:1,consts:[["id","exercise-header",1,"course-info-bar"],[1,"left-col"],[1,"title-row"],[1,"inner-row"],[1,"right-col"],[3,"icon","ngbTooltip"],[3,"exercise","showTags","ngClass"],[1,"points-assessment-row"],[1,"me-2"],[1,"me-2",3,"includedInOverallScore"],[1,"submission-row"],[1,"fw-500"],[1,"badge",3,"ngClass","ngbTooltip"],["jhiTranslate","global.generic.yes",1,"badge","bg-success"],["jhiTranslate","global.generic.no",1,"badge","bg-secondary"],[1,"badge","bg-success"],["jhiTranslate","global.generic.unset",1,"badge","bg-secondary"],["jhiTranslate","global.generic.yes",1,"badge","bg-success",3,"ngbTooltip"]],template:function(s,_){s&1&&(R(X),m(0,Ae,28,8)),s&2&&o(_.exercise?0:-1)},dependencies:[G,H,K,B,J,z,U,F,k],styles:["#exercise-header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-start;gap:10px;font-size:1.3rem;line-height:1.2;font-weight:400}#exercise-header[_ngcontent-%COMP%]   .right-col[_ngcontent-%COMP%]{flex:0 0 auto}#exercise-header[_ngcontent-%COMP%]   .right-col[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between;gap:10px}#exercise-header[_ngcontent-%COMP%]   .right-col[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:last-child){margin-bottom:5px}#exercise-header[_ngcontent-%COMP%]   .left-col[_ngcontent-%COMP%]{flex:1 1 auto;flex-direction:column;min-width:0;display:flex;gap:5px}@supports (flex-basis: min-content){#exercise-header[_ngcontent-%COMP%]   .left-col[_ngcontent-%COMP%]{flex:1 1 min-content}}#exercise-header[_ngcontent-%COMP%]   .left-col[_ngcontent-%COMP%]   .title-row[_ngcontent-%COMP%]{display:flex;gap:5px;flex-wrap:wrap}#exercise-header[_ngcontent-%COMP%]   .left-col[_ngcontent-%COMP%]   .title-row[_ngcontent-%COMP%]   .inner-row[_ngcontent-%COMP%]{margin-bottom:0;margin-right:10px;font-size:1.575rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}#exercise-header[_ngcontent-%COMP%]   .left-col[_ngcontent-%COMP%]   .title-row[_ngcontent-%COMP%]     .badge-row{display:flex;flex-wrap:wrap}#exercise-header[_ngcontent-%COMP%]   .left-col[_ngcontent-%COMP%]   .points-assessment-row[_ngcontent-%COMP%], #exercise-header[_ngcontent-%COMP%]   .left-col[_ngcontent-%COMP%]   .submission-row[_ngcontent-%COMP%]{white-space:nowrap;display:flex;flex-wrap:wrap;gap:.25em;align-items:center}#exercise-header[_ngcontent-%COMP%]   .fw-500[_ngcontent-%COMP%]{font-weight:500}@media (max-width: 575px){#exercise-header[_ngcontent-%COMP%]{font-size:1.1rem}#exercise-header[_ngcontent-%COMP%]   .left-col[_ngcontent-%COMP%]   .title-row[_ngcontent-%COMP%]   .inner-row[_ngcontent-%COMP%]{font-size:1.3em}}"]})}return t})();export{pt as a};
//# sourceMappingURL=chunk-SPPWZSHK.js.map
