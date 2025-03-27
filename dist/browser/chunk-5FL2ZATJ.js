import{a as Xe}from"./chunk-RZNOTHJ6.js";import{a as Je}from"./chunk-GRLLGFUW.js";import{a as Ze}from"./chunk-4RRONT5E.js";import{f as Qe}from"./chunk-FAFORKWV.js";import{b as qe}from"./chunk-T4L3VFV2.js";import{a as T,b as j}from"./chunk-W3K7VYWC.js";import{a as Ke}from"./chunk-7Q4TXNQR.js";import{a as ze}from"./chunk-7DTX5HC5.js";import{c as Ue}from"./chunk-DXTZ4GAW.js";import{a as He}from"./chunk-G4HSJ7ME.js";import{c as Ne,d as Oe,e as je,f as Ge,g as We}from"./chunk-F3NFBBHK.js";import{b as Re}from"./chunk-TECMX7AA.js";import{b as Be}from"./chunk-T624HJJL.js";import{a as Le}from"./chunk-HMZID6NQ.js";import{a as ke,d as Ve}from"./chunk-O26CMRR4.js";import{a as Me}from"./chunk-MP6UGYTC.js";import{a as ye,c as we,e as Ie}from"./chunk-CK7FH6VF.js";import{c as De}from"./chunk-JNO6DNVW.js";import{K as de}from"./chunk-VZRSC3LP.js";import{A as ce,B as pe,C as me,K as _e,c as ae,h as oe,m as re,o as le,p as se}from"./chunk-WA5GEAJB.js";import{m as Ae}from"./chunk-VK7JPHFE.js";import{c as ve}from"./chunk-BNDLMKXK.js";import{a as N}from"./chunk-K3W6YFKH.js";import{a as Te,c as Ee}from"./chunk-JXJXC4DZ.js";import{d as O}from"./chunk-EDXSOKK5.js";import{b as Pe}from"./chunk-R5BZWVRQ.js";import{p as V}from"./chunk-DID2YGL7.js";import{c as R}from"./chunk-CXQURQM5.js";import{A as ue,Bb as fe,Ia as xe,Oc as he,Zb as Se,lb as ge,sc as be,wb as Ce,y as B}from"./chunk-Z4VHWOB5.js";import{a as L}from"./chunk-HKBU2OOC.js";import{a as Fe}from"./chunk-U54OSGNH.js";import{f as ie,i as ne}from"./chunk-M6Z6DKZQ.js";import{n as te}from"./chunk-IOA4DPXY.js";import{Ad as k,Db as o,Dc as f,Ea as b,La as X,Ma as g,Mc as x,Na as C,Oc as r,Rc as y,Sc as D,Tb as F,U as J,Wb as Y,Zb as _,dd as t,ed as W,f as Q,fd as S,kc as p,ld as H,md as U,nd as z,qd as M,ra as I,rd as w,sc as u,sd as $,td as ee,wb as A,xb as G,xc as s,yc as c,yd as h,z as Z,zc as d,zd as P}from"./chunk-5LC5EQRR.js";import{a as K,b as q}from"./chunk-3E746U5Y.js";var $e=(()=>{class i{transform(e){return e?V.duration(e).humanize():""}static \u0275fac=function(n){return new(n||i)};static \u0275pipe=Y({name:"duration",type:i,pure:!0})}return i})();var et=i=>({number:i}),it=i=>["badge",i,"flex-grow-0"],nt=i=>({eta:i});function at(i,l){if(i&1&&(t(0,`
            `),s(1,"div",6),t(2,`
                `),d(3,"fa-icon",7),t(4,`
                `),s(5,"span",8),h(6,"artemisTranslate"),h(7,"duration"),h(8,"artemisTranslate"),t(9),h(10,"duration"),c(),t(11,`
            `),c(),t(12,`
        `)),i&2){let e=r(2);o(3),p("icon",e.faClock),o(2),p("ngbTooltip",P(6,4,"artemisApp.programmingExercise.resultETATooltip"))("innerHTML",k(8,8,"artemisApp.programmingExercise.resultETA",w(13,nt,P(7,6,e.resultEtaInMs))),A),o(4),S("Result ETA: ",P(10,11,e.resultEtaInMs),"")}}function ot(i,l){if(i&1){let e=f();t(0,`
    `),s(1,"div",0),t(2,`
        `),_(3,at,13,15),s(4,"div",1),t(5,`
            `),s(6,"span",2),h(7,"artemisTranslate"),t(8),c(),t(9,`
            `),s(10,"span",3),h(11,"artemisTranslate"),t(12),c(),t(13,`
        `),c(),t(14,`
        `),d(15,"jhi-programming-exercise-trigger-all-button",4),t(16,`
        `),s(17,"jhi-button",5),x("onClick",function(){g(e);let a=r();return C(a.triggerBuildOfFailedSubmissions())}),c(),t(18,`
    `),c(),t(19,`
`)}if(i&2){let e=r();o(3),u(e.hasBuildingSubmissions?3:-1),o(3),p("innerHTML",k(7,13,"artemisApp.programmingExercise.buildingSubmissions",w(19,et,e.buildingSummary[e.ProgrammingSubmissionState.IS_BUILDING_PENDING_SUBMISSION]||0)),A),o(2),S(`
                Building submissions: `,e.buildingSummary[e.ProgrammingSubmissionState.IS_BUILDING_PENDING_SUBMISSION]||0,`
            `),o(2),p("ngClass",w(21,it,e.buildingSummary[e.ProgrammingSubmissionState.HAS_FAILED_SUBMISSION]>0?"bg-danger":"bg-success"))("innerHTML",k(11,16,"artemisApp.programmingExercise.failedSubmissions",w(23,et,e.buildingSummary[e.ProgrammingSubmissionState.HAS_FAILED_SUBMISSION]||0)),A),o(2),S(`
                Failed submissions: `,e.buildingSummary[e.ProgrammingSubmissionState.HAS_FAILED_SUBMISSION]||0,`
            `),o(3),p("exercise",e.exercise),o(2),p("disabled",!e.hasFailedSubmissions)("isLoading",e.isBuildingFailedSubmissions)("icon",e.faRedo)("title","artemisApp.programmingExercise.resubmitFailed")("tooltip","artemisApp.programmingExercise.resubmitFailedTooltip")("featureToggle",e.FeatureToggle.ProgrammingExercises)}}function rt(i,l){if(i&1&&(t(0,`
    `),d(1,"fa-icon",9),t(2,`
`)),i&2){let e=r();o(),p("icon",e.faCircleNotch)}}var tt=(()=>{class i{programmingSubmissionService=b(j);FeatureToggle=L;ButtonType=ke;ProgrammingSubmissionState=T;exercise;hasFailedSubmissions=!1;hasBuildingSubmissions=!1;buildingSummary;isBuildingFailedSubmissions=!1;resultEtaInMs;submissionStateSubscription;resultEtaSubscription;faClock=Se;faCircleNotch=B;faRedo=Ce;ngOnInit(){this.resultEtaSubscription=this.programmingSubmissionService.getResultEtaInMs().subscribe(e=>this.resultEtaInMs=e)}ngOnChanges(e){Ue(e)&&(this.submissionStateSubscription=this.programmingSubmissionService.getSubmissionStateOfExercise(this.exercise.id).pipe(Z(this.sumSubmissionStates),J(500),I(n=>{this.buildingSummary=n,this.hasFailedSubmissions=this.buildingSummary[T.HAS_FAILED_SUBMISSION]>0,this.hasBuildingSubmissions=this.buildingSummary[T.IS_BUILDING_PENDING_SUBMISSION]>0})).subscribe())}triggerBuildOfFailedSubmissions(){this.isBuildingFailedSubmissions=!0;let e=this.programmingSubmissionService.getSubmissionCountByType(this.exercise.id,T.HAS_FAILED_SUBMISSION);this.programmingSubmissionService.triggerInstructorBuildForParticipationsOfExercise(this.exercise.id,e).subscribe(()=>this.isBuildingFailedSubmissions=!1)}sumSubmissionStates=e=>Object.values(e).reduce((n,{submissionState:a})=>q(K({},n),{[a]:(n[a]||0)+1}),{});static \u0275fac=function(n){return new(n||i)};static \u0275cmp=F({type:i,selectors:[["jhi-programming-exercise-instructor-submission-state"]],inputs:{exercise:"exercise"},features:[X],decls:2,vars:1,consts:[[1,"d-flex"],["id","build-state",1,"d-flex","flex-column","justify-content-between"],["id","build-state-building",1,"badge","bg-primary","flex-grow-0",3,"innerHTML"],["id","build-state-failed",3,"ngClass","innerHTML"],[3,"exercise"],["id","trigger-failed-button",1,"ms-3",3,"onClick","disabled","isLoading","icon","title","tooltip","featureToggle"],["id","result-eta",1,"badge","bg-secondary","d-flex","flex-column","justify-content-between","me-3"],[3,"icon"],[3,"ngbTooltip","innerHTML"],["animation","spin",3,"icon"]],template:function(n,a){n&1&&_(0,ot,20,25)(1,rt,3,1),n&2&&u(a.buildingSummary?0:1)},dependencies:[O,de,te,Xe,Ve,N,$e],encapsulation:2})}return i})();var lt=()=>["team.shortName","team.name","team.students.login","team.students.name"],st=()=>["student.login","student.name"],ct=(i,l)=>["..","repository",i,l],pt=(i,l,e)=>["/course-management",i,"exercises",l,"teams",e],mt=()=>({deleteBuildPlan:"artemisApp.participation.deleteBuildPlan",deleteRepository:"artemisApp.participation.deleteRepository"});function _t(i,l){if(i&1){let e=f();t(0,`
                    `),s(1,"label",7),t(2,`
                        `),s(3,"input",5),x("click",function(){g(e);let a=r();return C(a.updateParticipationFilter(a.FilterProp.NO_PRACTICE))}),c(),t(4,`
                        `),d(5,"span",12),t(6,`
                    `),c(),t(7,`
                `)}if(i&2){let e=r();o(3),p("ngModel",e.participationCriteria.filterProp)("value",e.FilterProp.NO_PRACTICE)}}function dt(i,l){if(i&1){let e=f();t(0,`
            `),s(1,"div",10),t(2,`
                `),s(3,"button",13),x("click",function(){g(e);let a=r();return C(a.saveChangedDueDates())}),c(),t(4,`
            `),c(),t(5,`
        `)}if(i&2){let e=r();o(3),p("disabled",e.isSaving||e.participationsChangedDueDate.size===0)}}function ut(i,l){if(i&1&&(t(0,`
            `),d(1,"jhi-programming-exercise-instructor-submission-state",14),t(2,`
        `)),i&2){let e=r();o(),p("exercise",e.exercise)}}function xt(i,l){if(i&1&&(t(0,`
                `),s(1,"a",15),t(2,`
                    `),s(3,"div"),t(4,`
                        `),d(5,"fa-icon",16),t(6,`
                        `),d(7,"span",17),t(8,`
                    `),c(),t(9,`
                `),c(),t(10,`
            `)),i&2){let e=r();o(),p("routerLink",e.getScoresRoute(e.exercise)),o(4),p("icon",e.faTable)}}function gt(i,l){if(i&1){let e=f();t(0,`
                        `),s(1,"span",26),x("click",function(){g(e);let a=r().controls;return C(a.onSort("id"))}),t(2,`
                            `),d(3,"span",27),t(4,`
                            `),d(5,"fa-icon",16),t(6,`
                        `),c(),t(7,`
                    `)}if(i&2){let e=r().controls;o(5),p("icon",e.iconForSortPropField("id"))}}function Ct(i,l){if(i&1&&(t(0,`
                                    `),s(1,"a",28),t(2),c(),t(3,`
                                `)),i&2){let e=r(2).value;o(),y("routerLink",e),o(),S(`
                                        `,e,`
                                    `)}}function ft(i,l){if(i&1&&(t(0,`
                                    `),s(1,"a",28),t(2),c(),t(3,`
                                `)),i&2){let e=r(2).value;o(),D("routerLink","",e,"/submissions"),o(),S(`
                                        `,e,`
                                    `)}}function St(i,l){if(i&1&&(t(0,`
                            `),s(1,"div"),t(2,`
                                `),_(3,Ct,4,2)(4,ft,4,3),c(),t(5,`
                        `)),i&2){let e=r(3);o(3),u(e.exercise.exerciseGroup?3:-1),o(),u(e.exercise.exerciseGroup?-1:4)}}function bt(i,l){if(i&1&&t(0),i&2){let e=r().value;S(`
                            `,e,`
                        `)}}function ht(i,l){if(i&1&&(t(0,`
                        `),_(1,St,6,2)(2,bt,1,1)),i&2){let e=r(2);o(),u(e.exercise.isAtLeastInstructor?1:2)}}function Pt(i,l){i&1&&(t(0,`
                            `),s(1,"span",30),t(2,`
                                `),d(3,"span",31),t(4,`
                            `),c(),t(5,`
                        `))}function vt(i,l){if(i&1&&(t(0,`
                                        `),s(1,"a",32),t(2,"Repository Link"),c(),t(3,`
                                    `)),i&2){let e=r(2),n=e.value,a=e.row,m=r(3);o(),y("href",m.getRepositoryLink(a,n),G)}}function Tt(i,l){if(i&1&&(t(0,`
                                        `),d(1,"jhi-code-button",33),t(2,`
                                    `)),i&2){let e=r(2),n=e.value,a=e.row,m=r(3);o(),p("smallButtons",!0)("routerLinkForRepositoryView",$(3,ct,m.RepositoryType.USER,a.id))("repositoryUri",m.getRepositoryLink(a,n))}}function Et(i,l){if(i&1&&(t(0,`
                                `),s(1,"span"),t(2,`
                                    `),_(3,vt,4,1)(4,Tt,3,6),c(),t(5,`
                            `)),i&2){let e=r(4);o(3),u(e.localVCEnabled?4:3)}}function yt(i,l){if(i&1&&(t(0,`
                            `),_(1,Et,6,1)),i&2){let e=l.value,n=l.row,a=r(3);o(),u(e&&a.getRepositoryLink(n,e)?1:-1)}}function wt(i,l){i&1&&(t(0,`
                    `),s(1,"ngx-datatable-column",29),t(2,`
                        `),_(3,Pt,6,0,"ng-template",20),t(4,`
                        `),_(5,yt,2,1,"ng-template",21),t(6,`
                    `),c(),t(7,`
                `)),i&2&&(o(),p("minWidth",80)("width",80))}function It(i,l){if(i&1){let e=f();t(0,`
                            `),s(1,"span",26),x("click",function(){g(e);let a=r(2).controls;return C(a.onSort("buildPlanId"))}),t(2,`
                                `),d(3,"span",34),t(4,`
                                `),d(5,"fa-icon",16),t(6,`
                            `),c(),t(7,`
                        `)}if(i&2){let e=r(2).controls;o(5),p("icon",e.iconForSortPropField("buildPlanId"))}}function At(i,l){if(i&1&&(t(0,`
                                        `),s(1,"a",35),t(2),c(),t(3,`
                                    `)),i&2){let e=r(2).row;o(),y("href",e.buildPlanUrl,G),o(),S(`
                                            `,e.buildPlanId,`
                                        `)}}function Ft(i,l){if(i&1&&t(0),i&2){let e=r(2).row;S(`
                                        `,e.buildPlanId,`
                                    `)}}function Dt(i,l){if(i&1&&(t(0,`
                                `),s(1,"span"),t(2,`
                                    `),_(3,At,4,2)(4,Ft,1,1),c(),t(5,`
                            `)),i&2){let e=r(4);o(3),u(e.localVCEnabled?4:3)}}function Mt(i,l){if(i&1&&(t(0,`
                            `),_(1,Dt,6,1)),i&2){let e=l.row;o(),u(e?1:-1)}}function kt(i,l){i&1&&(t(0,`
                    `),s(1,"ngx-datatable-column",24),t(2,`
                        `),_(3,It,8,1,"ng-template",20),t(4,`
                        `),_(5,Mt,2,1,"ng-template",21),t(6,`
                    `),c(),t(7,`
                `)),i&2&&(o(),p("minWidth",100)("width",100))}function Vt(i,l){if(i&1){let e=f();t(0,`
                        `),s(1,"span",26),x("click",function(){g(e);let a=r().controls;return C(a.onSort("initializationState"))}),t(2,`
                            `),d(3,"span",36),t(4,`
                            `),d(5,"fa-icon",16),t(6,`
                        `),c(),t(7,`
                    `)}if(i&2){let e=r().controls;o(5),p("icon",e.iconForSortPropField("initializationState"))}}function Lt(i,l){if(i&1&&(t(0),h(1,"artemisTranslate")),i&2){let e=l.value;S(`
                        `,P(1,1,"artemisApp.InitializationState."+e),`
                    `)}}function Bt(i,l){if(i&1){let e=f();t(0,`
                        `),s(1,"span",26),x("click",function(){g(e);let a=r().controls;return C(a.onSort("initializationDate"))}),t(2,`
                            `),d(3,"span",37),t(4,`
                            `),d(5,"fa-icon",16),t(6,`
                        `),c(),t(7,`
                    `)}if(i&2){let e=r().controls;o(5),p("icon",e.iconForSortPropField("initializationDate"))}}function Rt(i,l){if(i&1&&(t(0),h(1,"artemisDate")),i&2){let e=l.value;S(`
                        `,P(1,1,e),`
                    `)}}function Nt(i,l){if(i&1){let e=f();t(0,`
                        `),s(1,"span",38),x("click",function(){g(e);let a=r().controls;return C(a.onSort("submissionCount"))}),t(2,`
                            `),d(3,"span",39),t(4,`
                            `),d(5,"fa-icon",16),t(6,`
                        `),c(),t(7,`
                    `)}if(i&2){let e=r().controls;o(5),p("icon",e.iconForSortPropField("submissionCount"))}}function Ot(i,l){if(i&1&&(t(0,`
                                        `),s(1,"a",28),t(2),c(),t(3,`
                                    `)),i&2){let e=r(2).row;o(),y("routerLink",e.id),o(),S(`
                                            `,e.submissionCount,`
                                        `)}}function jt(i,l){if(i&1&&(t(0,`
                                        `),s(1,"a",28),t(2),c(),t(3,`
                                    `)),i&2){let e=r(2).row;o(),D("routerLink","",e.id,"/submissions"),o(),S(`
                                            `,e.submissionCount,`
                                        `)}}function Gt(i,l){if(i&1&&(t(0,`
                                `),s(1,"div"),t(2,`
                                    `),_(3,Ot,4,2)(4,jt,4,3),c(),t(5,`
                            `)),i&2){let e=r(3);o(3),u(e.exercise.exerciseGroup?3:-1),o(),u(e.exercise.exerciseGroup?-1:4)}}function Wt(i,l){if(i&1&&t(0),i&2){let e=r().row;S(`
                                `,e.submissionCount,`
                            `)}}function Ht(i,l){if(i&1&&(t(0,`
                        `),s(1,"div",40),t(2,`
                            `),_(3,Gt,6,2)(4,Wt,1,1),c(),t(5,`
                    `)),i&2){let e=r(2);o(3),u(e.exercise.isAtLeastInstructor?3:4)}}function Ut(i,l){if(i&1){let e=f();t(0,`
                            `),s(1,"span",26),x("click",function(){g(e);let a=r(2).controls;return C(a.onSort("student.name"))}),t(2,`
                                `),d(3,"span",42),t(4,`
                                `),d(5,"fa-icon",16),t(6,`
                            `),c(),t(7,`
                        `)}if(i&2){let e=r(2).controls;o(5),p("icon",e.iconForSortPropField("student.name"))}}function zt(i,l){if(i&1&&(t(0,`
                                `),s(1,"a",28),t(2),c(),t(3,`
                            `)),i&2){let e=r().value;o(),D("routerLink","/admin/user-management/",e==null?null:e.login,""),o(),W(e==null?null:e.name)}}function Kt(i,l){if(i&1&&t(0),i&2){let e=r().value;S(`
                                `,e==null?null:e.name,`
                            `)}}function qt(i,l){if(i&1&&(t(0,`
                            `),_(1,zt,4,3)(2,Kt,1,1)),i&2){let e=r(3);o(),u(e.isAdmin?1:2)}}function Qt(i,l){i&1&&(t(0,`
                    `),s(1,"ngx-datatable-column",41),t(2,`
                        `),_(3,Ut,8,1,"ng-template",20),t(4,`
                        `),_(5,qt,3,1,"ng-template",21),t(6,`
                    `),c(),t(7,`
                `)),i&2&&(o(),p("minWidth",120)("width",120))}function Zt(i,l){if(i&1){let e=f();t(0,`
                            `),s(1,"span",26),x("click",function(){g(e);let a=r(2).controls;return C(a.onSort("team.name"))}),t(2,`
                                `),d(3,"span",44),t(4,`
                                `),d(5,"fa-icon",16),t(6,`
                            `),c(),t(7,`
                        `)}if(i&2){let e=r(2).controls;o(5),p("icon",e.iconForSortPropField("team.name"))}}function Jt(i,l){if(i&1&&(t(0,`
                            `),s(1,"a",28),t(2),c(),t(3,`
                        `)),i&2){let e=l.value,n=r(3);o(),p("routerLink",ee(2,pt,n.exercise.course==null?null:n.exercise.course.id,n.exercise.id,e==null?null:e.id)),o(),S(`
                                `,e==null?null:e.name,`
                            `)}}function Xt(i,l){i&1&&(t(0,`
                    `),s(1,"ngx-datatable-column",43),t(2,`
                        `),_(3,Zt,8,1,"ng-template",20),t(4,`
                        `),_(5,Jt,4,6,"ng-template",21),t(6,`
                    `),c(),t(7,`
                `)),i&2&&(o(),p("minWidth",120)("width",120))}function Yt(i,l){i&1&&(t(0,`
                            `),s(1,"span",46),t(2,`
                                `),d(3,"span",47),t(4,`
                            `),c(),t(5,`
                        `))}function $t(i,l){if(i&1&&(t(0,`
                            `),d(1,"jhi-team-students-list",48),t(2,`
                        `)),i&2){let e=l.value;o(),p("students",e)}}function ei(i,l){i&1&&(t(0,`
                    `),s(1,"ngx-datatable-column",45),t(2,`
                        `),_(3,Yt,6,0,"ng-template",20),t(4,`
                        `),_(5,$t,3,1,"ng-template",21),t(6,`
                    `),c(),t(7,`
                `)),i&2&&(o(),p("minWidth",350)("width",450))}function ti(i,l){if(i&1){let e=f();t(0,`
                            `),s(1,"span",26),x("click",function(){g(e);let a=r(2).controls;return C(a.onSort("testRun"))}),t(2,`
                                `),d(3,"span",49),t(4,`
                                `),d(5,"fa-icon",16),t(6,`
                            `),c(),t(7,`
                        `)}if(i&2){let e=r(2).controls;o(5),p("icon",e.iconForSortPropField("testRun"))}}function ii(i,l){if(i&1&&(t(0),h(1,"artemisTranslate")),i&2){let e=l.row;S(`
                            `,P(1,1,e.testRun?"global.generic.yes":"global.generic.no"),`
                        `)}}function ni(i,l){i&1&&(t(0,`
                    `),s(1,"ngx-datatable-column",41),t(2,`
                        `),_(3,ti,8,1,"ng-template",20),t(4,`
                        `),_(5,ii,2,3,"ng-template",21),t(6,`
                    `),c(),t(7,`
                `)),i&2&&(o(),p("minWidth",80)("width",80))}function ai(i,l){if(i&1){let e=f();t(0,`
                            `),s(1,"span",26),x("click",function(){g(e);let a=r(2).controls;return C(a.onSort("presentationScore"))}),t(2,`
                                `),d(3,"span",51),t(4,`
                                `),d(5,"fa-icon",16),t(6,`
                            `),c(),t(7,`
                        `)}if(i&2){let e=r(2).controls;o(5),p("icon",e.iconForSortPropField("presentationScore"))}}function oi(i,l){if(i&1&&(t(0,`
                            `),s(1,"span"),t(2),c(),t(3,`
                        `)),i&2){let e=l.value;o(2),W(e||0)}}function ri(i,l){i&1&&(t(0,`
                    `),s(1,"ngx-datatable-column",50),t(2,`
                        `),_(3,ai,8,1,"ng-template",20),t(4,`
                        `),_(5,oi,4,1,"ng-template",21),t(6,`
                    `),c(),t(7,`
                `)),i&2&&(o(),p("minWidth",150)("width",150))}function li(i,l){if(i&1){let e=f();t(0,`
                            `),s(1,"span",26),x("click",function(){g(e);let a=r(2).controls;return C(a.onSort("presentationScore"))}),t(2,`
                                `),d(3,"span",52),t(4,`
                                `),d(5,"fa-icon",16),t(6,`
                            `),c(),t(7,`
                        `)}if(i&2){let e=r(2).controls;o(5),p("icon",e.iconForSortPropField("presentationScore"))}}function si(i,l){if(i&1){let e=f();t(0,`
                            `),s(1,"input",53),z("ngModelChange",function(a){let m=g(e).row;return U(m.presentationScore,a)||(m.presentationScore=a),C(a)}),x("ngModelChange",function(){let a=g(e).row,m=r(3);return C(m.changeGradedPresentation(a))}),c(),t(2,`
                        `)}if(i&2){let e=l.row;o(),p("disabled",e.testRun),H("ngModel",e.presentationScore)}}function ci(i,l){i&1&&(t(0,`
                    `),s(1,"ngx-datatable-column",50),t(2,`
                        `),_(3,li,8,1,"ng-template",20),t(4,`
                        `),_(5,si,3,2,"ng-template",21),t(6,`
                    `),c(),t(7,`
                `)),i&2&&(o(),p("minWidth",150)("width",150))}function pi(i,l){if(i&1){let e=f();t(0,`
                            `),s(1,"span",26),x("click",function(){g(e);let a=r(2).controls;return C(a.onSort("buildPlanId"))}),t(2,`
                                `),d(3,"span",54),t(4,`
                                `),d(5,"fa-icon",16),t(6,`
                            `),c(),t(7,`
                        `)}if(i&2){let e=r(2).controls;o(5),p("icon",e.iconForSortPropField("individualDueDate"))}}function mi(i,l){if(i&1){let e=f();t(0,`
                                        `),s(1,"button",57),x("click",function(){g(e);let a=r(2).row,m=r(3);return C(m.removeIndividualDueDate(a))}),t(2,`
                                            `),d(3,"fa-icon",16),t(4,`
                                        `),c(),t(5,`
                                    `)}if(i&2){let e=r(5);o(),p("disabled",e.isSaving),o(2),p("icon",e.faTimes)}}function _i(i,l){if(i&1){let e=f();t(0,`
                                `),s(1,"span",55),t(2,`
                                    `),s(3,"jhi-date-time-picker",56),z("ngModelChange",function(a){g(e);let m=r().row;return U(m.individualDueDate,a)||(m.individualDueDate=a),C(a)}),x("valueChange",function(){g(e);let a=r().row,m=r(3);return C(m.changedIndividualDueDate(a))}),c(),t(4,`
                                    \xA0
                                    `),_(5,mi,6,2),c(),t(6,`
                            `)}if(i&2){let e=r().row,n=r(3);o(3),H("ngModel",e.individualDueDate),p("shouldDisplayTimeZoneWarning",!1)("min",n.exercise.dueDate)("disabled",!n.exercise.isAtLeastInstructor||n.isSaving),o(2),u(n.exercise!=null&&n.exercise.isAtLeastInstructor&&e.individualDueDate?5:-1)}}function di(i,l){if(i&1&&(t(0,`
                            `),_(1,_i,7,5)),i&2){let e=l.row;o(),u(e?1:-1)}}function ui(i,l){i&1&&(t(0,`
                    `),s(1,"ngx-datatable-column",24),t(2,`
                        `),_(3,pi,8,1,"ng-template",20),t(4,`
                        `),_(5,di,2,1,"ng-template",21),t(6,`
                    `),c(),t(7,`
                `)),i&2&&(o(),p("minWidth",270)("width",270))}function xi(i,l){if(i&1&&(t(0,`
                                        `),d(1,"jhi-programming-exercise-instructor-trigger-build-button",59),t(2,`
                                    `)),i&2){let e=r(2).value,n=r(2);o(),p("exercise",n.exercise)("participation",e)}}function gi(i,l){if(i&1&&(t(0,`
                                        `),d(1,"fa-icon",60),t(2,`
                                    `)),i&2){let e=r(4);o(),p("icon",e.faCircleNotch)}}function Ci(i,l){if(i&1&&(t(0,`
                                    `),_(1,xi,3,2)(2,gi,3,1)),i&2){let e=r(3);o(),u(e.hasLoadedPendingSubmissions?1:2)}}function fi(i,l){if(i&1){let e=f();t(0,`
                                    `),s(1,"button",61),x("delete",function(a){g(e);let m=r().value,v=r(2);return C(v.deleteParticipation(m.id,a))}),t(2,`
                                        `),d(3,"fa-icon",16),t(4,`
                                    `),c(),t(5,`
                                `)}if(i&2){let e=r().value,n=r(2);o(),p("jhiFeatureToggle",n.FeatureToggle.ProgrammingExercises)("skipFeatureToggle",n.exercise.type!==n.ExerciseType.PROGRAMMING)("entityTitle",n.exercise.teamMode?e.team==null?null:e.team.name:e.student==null?null:e.student.name)("dialogError",n.dialogError)("additionalChecks",n.exercise.type===n.ExerciseType.PROGRAMMING?M(6,mt):void 0),o(2),p("icon",n.faTrash)}}function Si(i,l){if(i&1){let e=f();t(0,`
                                    `),s(1,"button",62),x("delete",function(){g(e);let a=r().value,m=r(2);return C(m.cleanupProgrammingExerciseParticipation(a))}),t(2,`
                                        `),d(3,"fa-icon",16),t(4,`
                                    `),c(),t(5,`
                                `)}if(i&2){let e=r().value,n=r(2);o(),p("jhiFeatureToggle",n.FeatureToggle.ProgrammingExercises)("actionType",n.ActionType.Cleanup)("dialogError",n.dialogError)("entityTitle",n.exercise.teamMode?e.team==null?null:e.team.name:e.student==null?null:e.student.name),o(2),p("icon",n.faEraser)}}function bi(i,l){if(i&1){let e=f();t(0,`
                                    `),s(1,"button",63),x("click",function(){g(e);let a=r().value,m=r(2);return C(m.addBasicPresentation(a))}),t(2,`
                                        `),d(3,"fa-icon",16),t(4,`
                                        `),d(5,"span",64),t(6,`
                                    `),c(),t(7,`
                                `)}if(i&2){let e=r(3);o(3),p("icon",e.faFilePowerpoint)}}function hi(i,l){if(i&1){let e=f();t(0,`
                                    `),s(1,"button",65),x("click",function(){g(e);let a=r().value,m=r(2);return C(m.addGradedPresentation(a))}),t(2,`
                                        `),d(3,"fa-icon",16),t(4,`
                                        `),d(5,"span",66),t(6,`
                                    `),c(),t(7,`
                                `)}if(i&2){let e=r().value,n=r(2);o(),p("disabled",!n.hasGradedPresentationChanged(e)||e.presentationScore<0||e.presentationScore>100),o(2),p("icon",n.faFilePowerpoint)}}function Pi(i,l){if(i&1){let e=f();t(0,`
                                    `),s(1,"button",67),x("click",function(){g(e);let a=r().value,m=r(2);return C(m.removePresentation(a))}),t(2,`
                                        `),d(3,"fa-icon",16),t(4,`
                                        `),d(5,"span",68),t(6,`
                                    `),c(),t(7,`
                                `)}if(i&2){let e=r(3);o(3),p("icon",e.faFilePowerpoint)}}function vi(i,l){if(i&1&&(t(0,`
                        `),s(1,"div",58),t(2,`
                            `),s(3,"div",55),t(4,`
                                `),_(5,Ci,3,1)(6,fi,6,7)(7,Si,6,5)(8,bi,8,1)(9,hi,8,2)(10,Pi,8,1),c(),t(11,`
                        `),c(),t(12,`
                    `)),i&2){let e,n,a=l.value,m=r(2);o(5),u((m.exercise==null?null:m.exercise.type)===m.ExerciseType.PROGRAMMING&&m.exercise.isAtLeastInstructor?5:-1),o(),u(m.exercise.isAtLeastInstructor?6:-1),o(),u((m.exercise==null?null:m.exercise.type)===m.ExerciseType.PROGRAMMING&&a.buildPlanId!==null&&m.exercise.isAtLeastInstructor?7:-1),o(),u(m.basicPresentationEnabled&&!a.testRun&&a.presentationScore!==1?8:-1),o(),u(m.gradedPresentationEnabled&&!a.testRun&&m.hasGradedPresentationChanged(a)&&((e=a.presentationScore)!==null&&e!==void 0?e:void 0)!==void 0?9:-1),o(),u(m.basicPresentationEnabled&&a.presentationScore>0||m.gradedPresentationEnabled&&(!m.hasGradedPresentationChanged(a)||((n=a.presentationScore)!==null&&n!==void 0?n:void 0)===void 0)?10:-1)}}function Ti(i,l){if(i&1&&(t(0,`
            `),s(1,"ngx-datatable",18),t(2,`
                `),s(3,"ngx-datatable-column",19),t(4,`
                    `),_(5,gt,8,1,"ng-template",20),t(6,`
                    `),_(7,ht,3,1,"ng-template",21),t(8,`
                `),c(),t(9,`
                `),_(10,wt,8,2)(11,kt,8,2),s(12,"ngx-datatable-column",22),t(13,`
                    `),_(14,Vt,8,1,"ng-template",20),t(15,`
                    `),_(16,Lt,2,3,"ng-template",21),t(17,`
                `),c(),t(18,`
                `),s(19,"ngx-datatable-column",23),t(20,`
                    `),_(21,Bt,8,1,"ng-template",20),t(22,`
                    `),_(23,Rt,2,3,"ng-template",21),t(24,`
                `),c(),t(25,`
                `),s(26,"ngx-datatable-column",24),t(27,`
                    `),_(28,Nt,8,1,"ng-template",20),t(29,`
                    `),_(30,Ht,6,1,"ng-template",21),t(31,`
                `),c(),t(32,`
                `),_(33,Qt,8,2)(34,Xt,8,2)(35,ei,8,2)(36,ni,8,2)(37,ri,8,2)(38,ci,8,2)(39,ui,8,2),s(40,"ngx-datatable-column",25),t(41,`
                    `),_(42,vi,13,6,"ng-template",21),t(43,`
                `),c(),t(44,`
            `),c(),t(45,`
        `)),i&2){let e=l.settings,n=r();o(),p("limit",e.limit)("sortType",e.sortType)("columnMode",e.columnMode)("headerHeight",e.headerHeight)("footerHeight",e.footerHeight)("rowHeight",e.rowHeight)("rows",e.rows)("rowClass",e.rowClass)("scrollbarH",e.scrollbarH),o(2),p("minWidth",60)("width",80)("maxWidth",100),o(7),u((n.exercise==null?null:n.exercise.type)===n.ExerciseType.PROGRAMMING?10:-1),o(),u((n.exercise==null?null:n.exercise.type)===n.ExerciseType.PROGRAMMING?11:-1),o(),p("minWidth",80)("width",80),o(7),p("width",180),o(7),p("minWidth",100)("width",110),o(7),u(n.exercise.teamMode?-1:33),o(),u(n.exercise.teamMode?34:-1),o(),u(n.exercise.teamMode?35:-1),o(),u(n.exercise.type===n.ExerciseType.PROGRAMMING&&n.afterDueDate?36:-1),o(),u(n.basicPresentationEnabled?37:-1),o(),u(n.gradedPresentationEnabled?38:-1),o(),u((n.exercise==null?null:n.exercise.type)!==n.ExerciseType.QUIZ&&(n.exercise!=null&&n.exercise.dueDate)?39:-1),o(),p("minWidth",350)("width",350)}}var E=function(i){return i.ALL="all",i.FAILED="failed",i.NO_SUBMISSIONS="no-submissions",i.NO_PRACTICE="no-practice",i}(E||{}),Mn=(()=>{class i{route=b(ie);participationService=b(Ie);alertService=b(Ee);eventManager=b(Te);exerciseService=b(we);programmingSubmissionService=b(j);accountService=b(Pe);profileService=b(ve);gradingSystemService=b(Je);FilterProp=E;ExerciseType=R;ActionType=Le;FeatureToggle=L;RepositoryType=Qe;participations=[];participationsChangedDueDate=new Map;participationsChangedPresentation=new Map;filteredParticipationsSize=0;eventSubscriber;paramSub;exercise;hasLoadedPendingSubmissions=!1;basicPresentationEnabled=!1;gradedPresentationEnabled=!1;gradeStepsDTO;gradeStepsDTOSub;localVCEnabled=!1;dialogErrorSource=new Q;dialogError=this.dialogErrorSource.asObservable();participationCriteria;exerciseSubmissionState;isAdmin=!1;isLoading;isSaving;afterDueDate=!1;faTable=ue;faTimes=he;faTrash=fe;faCircleNotch=B;faEraser=be;faFilePowerpoint=xe;faCodeBranch=ge;constructor(){this.participationCriteria={filterProp:E.ALL}}ngOnInit(){this.paramSub=this.route.params.subscribe(e=>this.loadExercise(+e.exerciseId)),this.registerChangeInParticipations(),this.isAdmin=this.accountService.isAdmin()}ngOnDestroy(){this.programmingSubmissionService.unsubscribeAllWebsocketTopics(this.exercise),this.eventManager.destroy(this.eventSubscriber),this.dialogErrorSource.unsubscribe(),this.paramSub&&this.paramSub.unsubscribe(),this.gradeStepsDTOSub&&this.gradeStepsDTOSub.unsubscribe()}loadExercise(e){this.isLoading=!0,this.hasLoadedPendingSubmissions=!1,this.exerciseService.find(e).subscribe(n=>{this.exercise=n.body,this.afterDueDate=!!this.exercise.dueDate&&V().isAfter(this.exercise.dueDate),this.loadGradingScale(this.exercise.course?.id),this.loadParticipations(e),this.exercise.type===R.PROGRAMMING&&this.loadSubmissions(e),this.basicPresentationEnabled=this.checkBasicPresentationConfig()})}loadGradingScale(e){e&&(this.gradeStepsDTOSub=this.gradingSystemService.findGradeStepsForCourse(e).subscribe(n=>{n.body&&(this.gradeStepsDTO=n.body),this.gradedPresentationEnabled=this.checkGradedPresentationConfig()}))}loadParticipations(e){this.participationService.findAllParticipationsByExercise(e,!1).subscribe(n=>{this.participations=n.body,this.exercise.type===R.PROGRAMMING&&this.exercise.projectKey&&this.profileService.getProfileInfo().subscribe(m=>{this.localVCEnabled=m.activeProfiles.includes(Ae)}),this.isLoading=!1})}loadSubmissions(e){this.programmingSubmissionService.getSubmissionStateOfExercise(e).pipe(I(n=>{this.exerciseSubmissionState=n})).subscribe(()=>this.hasLoadedPendingSubmissions=!0)}updateParticipationFilter(e){this.isLoading=!0,setTimeout(()=>{this.participationCriteria.filterProp=e,this.isLoading=!1})}filterParticipationByProp=e=>{switch(this.participationCriteria.filterProp){case E.FAILED:return this.hasFailedSubmission(e);case E.NO_SUBMISSIONS:return e.submissionCount===0;case E.NO_PRACTICE:return!ye(e);case E.ALL:default:return!0}};hasFailedSubmission(e){let n=this.exerciseSubmissionState[e.id];if(n){let{submissionState:a}=n;return a===T.HAS_FAILED_SUBMISSION}return!1}trackId(e,n){return n.id}registerChangeInParticipations(){this.eventSubscriber=this.eventManager.subscribe("participationListModification",()=>this.loadExercise(this.exercise.id))}checkBasicPresentationConfig(){return this.exercise.course?this.exercise.isAtLeastTutor===!0&&(this.exercise.course.presentationScore??0)>0&&this.exercise.presentationScoreEnabled===!0:!1}checkGradedPresentationConfig(){return!!(this.exercise.course&&this.exercise.isAtLeastTutor&&(this.gradeStepsDTO?.presentationsNumber??0)>0&&this.exercise.presentationScoreEnabled===!0)}addBasicPresentation(e){this.basicPresentationEnabled&&(e.presentationScore=1,this.participationService.update(this.exercise,e).subscribe({error:()=>this.alertService.error("artemisApp.participation.addPresentation.error")}))}addGradedPresentation(e){!this.gradedPresentationEnabled||(e.presentationScore??0)>100||(e.presentationScore??0)<0||this.participationService.update(this.exercise,e).subscribe({error:n=>{let a=n.error;a&&a.errorKey&&a.errorKey==="invalid.presentations.maxNumberOfPresentationsExceeded"?e.presentationScore=void 0:this.alertService.error("artemisApp.participation.savePresentation.error")},complete:()=>{this.participationsChangedPresentation.delete(e.id)}})}hasGradedPresentationChanged(e){return this.participationsChangedPresentation.has(e.id)}changeGradedPresentation(e){this.participationsChangedPresentation.set(e.id,e)}removePresentation(e){!this.basicPresentationEnabled&&!this.gradedPresentationEnabled||(e.presentationScore=void 0,this.participationService.update(this.exercise,e).subscribe({error:()=>this.alertService.error("artemisApp.participation.removePresentation.error")}))}changedIndividualDueDate(e){this.participationsChangedDueDate.set(e.id,e)}removeIndividualDueDate(e){e.individualDueDate=void 0,this.participationsChangedDueDate.set(e.id,e)}saveChangedDueDates(){this.isSaving=!0;let e=Array.from(this.participationsChangedDueDate.values());this.participationService.updateIndividualDueDates(this.exercise,e).subscribe({next:n=>{n.body.forEach(a=>{let m=this.participations.findIndex(v=>v.id===a.id);this.participations[m]=a}),this.participationsChangedDueDate.clear(),this.isSaving=!1,this.alertService.success("artemisApp.participation.updateDueDates.success",{count:n.body.length})},error:()=>{this.alertService.error("artemisApp.participation.updateDueDates.error"),this.isSaving=!1}})}deleteParticipation(e,n){let a=n.deleteBuildPlan?n.deleteBuildPlan:!1,m=n.deleteRepository?n.deleteRepository:!1;this.participationService.delete(e,{deleteBuildPlan:a,deleteRepository:m}).subscribe({next:()=>{this.eventManager.broadcast({name:"participationListModification",content:"Deleted an participation"}),this.dialogErrorSource.next(""),this.participationsChangedDueDate.delete(e),this.participationsChangedPresentation.delete(e)},error:v=>this.dialogErrorSource.next(v.message)})}cleanupProgrammingExerciseParticipation(e){this.participationService.cleanupBuildPlan(e).subscribe({next:()=>{this.eventManager.broadcast({name:"participationListModification",content:"Cleanup the build plan of an participation"}),this.dialogErrorSource.next("")},error:n=>this.dialogErrorSource.next(n.message)})}handleParticipationsSizeChange=e=>{this.filteredParticipationsSize=e};searchResultFormatter=e=>{if(e.student){let{login:n,name:a}=e.student;return`${n} (${a})`}else if(e.team)return ze(e.team);return`${e.id}`};searchTextFromParticipation=e=>e.student?.login||e.team?.shortName||"";getRepositoryLink=(e,n)=>e.repositoryUri===n?e.userIndependentRepositoryUri:n;getScoresRoute(e){let n=["/course-management"],a=e.exerciseGroup?.exam;return a?n=[...n,a.course.id,"exams",a.id,"exercise-groups",e.exerciseGroup.id]:n=[...n,e.course.id],n=[...n,e.type+"-exercises",e.id,"scores"],n}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=F({type:i,selectors:[["jhi-participation"]],decls:53,vars:22,consts:[[1,"d-flex","flex-wrap"],[1,"mr-auto","flex-fill"],["jhiTranslate","artemisApp.participation.home.title"],[1,"d-flex","align-items-center","mt-2"],[1,"radio-inline","mb-0","d-flex","align-items-center"],["type","radio",3,"click","ngModel","value"],["jhiTranslate","artemisApp.exercise.showAll",1,"ms-1"],[1,"radio-inline","ms-2","mb-0","d-flex","align-items-center"],["jhiTranslate","artemisApp.exercise.showFailed",1,"ms-1"],["jhiTranslate","artemisApp.exercise.showNoSubmissions",1,"ms-1"],[1,"p-2"],["entityType","participation","entitiesPerPageTranslation","artemisApp.exercise.resultsPerPage","showAllEntitiesTranslation","artemisApp.exercise.showAllResults",3,"entitiesSizeChange","isLoading","allEntities","searchPlaceholderTranslation","searchFields","searchTextFromEntity","searchResultFormatter","customFilterKey","customFilter"],["jhiTranslate","artemisApp.exercise.showNoPracticeMode",1,"ms-1"],["jhiTranslate","entity.action.save",1,"btn","btn-success",3,"click","disabled"],[1,"p-2",3,"exercise"],[1,"btn","btn-info",3,"routerLink"],[3,"icon"],["jhiTranslate","entity.action.scores",1,"d-md-inline"],[1,"bootstrap",3,"limit","sortType","columnMode","headerHeight","footerHeight","rowHeight","rows","rowClass","scrollbarH"],["prop","id",3,"minWidth","width","maxWidth"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["prop","initializationState",3,"minWidth","width"],["prop","initializationDate",3,"width"],[3,"minWidth","width"],["prop","",3,"minWidth","width"],[1,"datatable-header-cell-wrapper",3,"click"],["jhiTranslate","global.field.id",1,"datatable-header-cell-label","bold","sortable"],[3,"routerLink"],["prop","repositoryUri",3,"minWidth","width"],[1,"datatable-header-cell-wrapper"],["jhiTranslate","artemisApp.participation.repository",1,"datatable-header-cell-label","bold"],["target","_blank","rel","noreferrer noopener",3,"href"],[1,"ms-2",3,"smallButtons","routerLinkForRepositoryView","repositoryUri"],["jhiTranslate","artemisApp.participation.buildPlanId",1,"datatable-header-cell-label","bold","sortable"],["target","_blank","rel","noreferrer",3,"href"],["jhiTranslate","artemisApp.participation.initializationState",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.participation.initializationDate",1,"datatable-header-cell-label","bold","sortable"],[1,"datatable-header-cell-wrapper","d-inline-block","w-100","text-center",3,"click"],["jhiTranslate","artemisApp.exercise.submissionCount",1,"datatable-header-cell-label","bold","sortable"],[1,"w-100","text-center"],["prop","student",3,"minWidth","width"],["jhiTranslate","artemisApp.participation.student",1,"datatable-header-cell-label","bold","sortable"],["prop","team",3,"minWidth","width"],["jhiTranslate","artemisApp.participation.team",1,"datatable-header-cell-label","bold","sortable"],["prop","team.students",3,"minWidth","width"],[1,"datatable-header-cell-wrapper",2,"cursor","text"],["jhiTranslate","artemisApp.participation.students",1,"datatable-header-cell-label","bold"],[3,"students"],["jhiTranslate","artemisApp.participation.practice",1,"datatable-header-cell-label","bold","sortable"],["prop","presentationScore",3,"minWidth","width"],["jhiTranslate","artemisApp.participation.presentationScore",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.participation.presentationGrade",1,"datatable-header-cell-label","bold","sortable"],["name","presentationGrade","id","field_presentationGrade","type","number","min","0","max","100","required","",1,"form-control","input-number-short",3,"ngModelChange","disabled","ngModel"],["jhiTranslate","artemisApp.participation.individualDueDate",1,"datatable-header-cell-label","bold","sortable"],[1,"btn-group"],[3,"ngModelChange","valueChange","ngModel","shouldDisplayTimeZoneWarning","min","disabled"],[1,"btn","btn-danger",3,"click","disabled"],[1,"text-end"],[1,"me-1",3,"exercise","participation"],["animation","spin",1,"text-secondary",3,"icon"],["jhiDeleteButton","","deleteQuestion","artemisApp.participation.delete.question",3,"delete","jhiFeatureToggle","skipFeatureToggle","entityTitle","dialogError","additionalChecks"],["jhiDeleteButton","","deleteQuestion","artemisApp.participation.cleanupBuildPlan.question",3,"delete","jhiFeatureToggle","actionType","dialogError","entityTitle"],[1,"btn","btn-info","btn-sm","me-1",3,"click"],["jhiTranslate","artemisApp.participation.addPresentation.label",1,"d-none","d-md-inline"],[1,"btn","btn-info","btn-sm","me-1",3,"click","disabled"],["jhiTranslate","artemisApp.participation.savePresentation.label",1,"d-none","d-md-inline"],[1,"btn","btn-danger","btn-sm","me-1",3,"click"],["jhiTranslate","artemisApp.participation.removePresentation.label",1,"d-none","d-md-inline"]],template:function(n,a){n&1&&(s(0,"div"),t(1,`
    `),s(2,"div",0),t(3,`
        `),s(4,"div",1),t(5,`
            `),s(6,"h2"),t(7,`
                `),s(8,"span"),t(9),c(),t(10),d(11,"span",2),t(12,`
            `),c(),t(13,`
            `),s(14,"div",3),t(15,`
                `),s(16,"label",4),t(17,`
                    `),s(18,"input",5),x("click",function(){return a.updateParticipationFilter(a.FilterProp.ALL)}),c(),t(19,`
                    `),d(20,"span",6),t(21,`
                `),c(),t(22,`
                `),s(23,"label",7),t(24,`
                    `),s(25,"input",5),x("click",function(){return a.updateParticipationFilter(a.FilterProp.FAILED)}),c(),t(26,`
                    `),d(27,"span",8),t(28,`
                `),c(),t(29,`
                `),s(30,"label",7),t(31,`
                    `),s(32,"input",5),x("click",function(){return a.updateParticipationFilter(a.FilterProp.NO_SUBMISSIONS)}),c(),t(33,`
                    `),d(34,"span",9),t(35,`
                `),c(),t(36,`
                `),_(37,_t,8,2),c(),t(38,`
        `),c(),t(39,`
        `),_(40,dt,6,1)(41,ut,3,1),s(42,"div",10),t(43,`
            `),_(44,xt,11,2),c(),t(45,`
    `),c(),t(46,`
    `),s(47,"jhi-data-table",11),x("entitiesSizeChange",function(v){return a.handleParticipationsSizeChange(v)}),t(48,`
        `),_(49,Ti,46,28,"ng-template"),t(50,`
    `),c(),t(51,`
`),c(),t(52,`
`)),n&2&&(o(9),S("",a.exercise==null?null:a.exercise.title," - "),o(),S("",a.filteredParticipationsSize," "),o(8),p("ngModel",a.participationCriteria.filterProp)("value",a.FilterProp.ALL),o(7),p("ngModel",a.participationCriteria.filterProp)("value",a.FilterProp.FAILED),o(7),p("ngModel",a.participationCriteria.filterProp)("value",a.FilterProp.NO_SUBMISSIONS),o(5),u((a.exercise==null?null:a.exercise.type)===a.ExerciseType.PROGRAMMING&&a.afterDueDate?37:-1),o(3),u((a.exercise==null?null:a.exercise.type)!==a.ExerciseType.QUIZ&&(a.exercise!=null&&a.exercise.isAtLeastInstructor)?40:-1),o(),u(a.exercise!=null&&a.exercise.isAtLeastInstructor&&(a.exercise==null?null:a.exercise.type)===a.ExerciseType.PROGRAMMING?41:-1),o(3),u(a.exercise!=null&&a.exercise.isAtLeastTutor?44:-1),o(3),p("isLoading",a.isLoading)("allEntities",a.participations)("searchPlaceholderTranslation",a.exercise!=null&&a.exercise.teamMode?"artemisApp.exercise.searchForTeams":"artemisApp.exercise.searchForStudents")("searchFields",a.exercise!=null&&a.exercise.teamMode?M(20,lt):M(21,st))("searchTextFromEntity",a.searchTextFromParticipation)("searchResultFormatter",a.searchResultFormatter)("customFilterKey",a.participationCriteria.filterProp)("customFilter",a.filterParticipationByProp))},dependencies:[Fe,_e,ae,le,se,oe,me,pe,ce,re,tt,ne,O,He,We,Ge,je,Ne,Oe,qe,Ke,Re,Ze,Be,Me,De,N],encapsulation:2})}return i})();export{Mn as a};
//# sourceMappingURL=chunk-5FL2ZATJ.js.map
