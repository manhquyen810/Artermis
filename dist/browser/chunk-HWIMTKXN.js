import{a as Ce}from"./chunk-6DH5KPBD.js";import{a as ge}from"./chunk-UKRIKOVV.js";import{d as H}from"./chunk-O4VJ5OXY.js";import{a as be,j as he,k as _e}from"./chunk-BDII35IB.js";import{a as fe}from"./chunk-OTCBNILH.js";import{a as ue,b as xe}from"./chunk-VRAVBLUK.js";import{K as B}from"./chunk-VZRSC3LP.js";import{b as z}from"./chunk-5GXY5RYT.js";import{a as O}from"./chunk-K3W6YFKH.js";import{d as I}from"./chunk-EDXSOKK5.js";import{c as W,k as pe}from"./chunk-CXQURQM5.js";import{a as g}from"./chunk-S4QLGR2R.js";import{Qa as re,Qc as me,Zc as ce,na as se,qd as le,v as ae,wd as de}from"./chunk-Z4VHWOB5.js";import{a as N}from"./chunk-U54OSGNH.js";import{h as ie,i as M}from"./chunk-M6Z6DKZQ.js";import{c as oe}from"./chunk-E2KBL4LX.js";import{n as ne}from"./chunk-IOA4DPXY.js";import{Ad as ee,Db as i,Dc as y,Ea as k,Ed as te,La as F,Ma as L,Mc as v,Na as R,Oc as c,Rc as J,Tb as T,Va as Y,Zb as u,dd as e,ed as S,fd as x,gd as K,hd as A,id as $,kc as l,ld as Q,md as G,nd as X,rd as f,sc as d,sd as Z,td as V,uc as j,vc as w,wc as q,xc as o,yc as a,yd as b,zc as p,zd as h}from"./chunk-5LC5EQRR.js";var Te=class n{numberOfStudents=0;numberOfSubmissions=new g;totalNumberOfAssessments=new g;numberOfAutomaticAssistedAssessments=new g;numberOfComplaints=0;numberOfOpenComplaints=0;numberOfMoreFeedbackRequests=0;numberOfOpenMoreFeedbackRequests=0;numberOfAssessmentLocks=0;totalNumberOfAssessmentLocks=0;complaintsEnabled=!0;feedbackRequestEnabled=!0;numberOfAssessmentsOfCorrectionRounds=[new g];numberOfLockedAssessmentByOtherTutorsOfCorrectionRound=[new g];numberOfRatings=0;tutorLeaderboardEntries=[];static from(m){let t=Object.assign(new n,m);return t.numberOfSubmissions=Object.assign(new g,t.numberOfSubmissions),t.totalNumberOfAssessments=Object.assign(new g,t.totalNumberOfAssessments),t.numberOfAutomaticAssistedAssessments=Object.assign(new g,t.numberOfAutomaticAssistedAssessments),t}};var P=n=>({tutorId:n}),Se=n=>({correctionRound:n});function Oe(n,m){n&1&&(e(0,`
            `),p(1,"span",5),e(2,`
        `))}function Ee(n,m){n&1&&(e(0,`
            `),p(1,"span",6),e(2,`
        `))}function Ae(n,m){if(n&1&&e(0),n&2){let t=m.model,r=c(2);x(" ",(t.value*100/r.numberOfSubmissions.total).toFixed(2),"% ")}}function ke(n,m){if(n&1&&(e(0,`
            `),o(1,"div",7),e(2,`
                `),o(3,"ngx-charts-pie-chart",8),e(4,`
                    `),u(5,Ae,1,1,"ng-template",null,0,te),e(7,`
                `),a(),e(8,`
            `),a(),e(9,`
        `)),n&2){let t=c();i(3),l("customColors",t.customColors)("view",t.view)("results",t.assessments)("legend",!0)("legendTitle","")("legendPosition",t.legendPosition)("animations",!1)}}function Ie(n,m){if(n&1&&(e(0,`
                                    `),o(1,"div"),e(2,`
                                        `),o(3,"a",16),e(4),a(),e(5,`
                                        |
                                        `),o(6,"a",13),e(7),a(),e(8,`
                                    `),a(),e(9,`
                                `)),n&2){let t=c(3);i(3),l("routerLink",t.complaintsLink),i(),A(`
                                            `,t.complaints.done," / ",t.complaints.total," (",t.complaints.doneToTotalPercentage,`)
                                        `),i(2),l("routerLink",t.complaintsLink)("queryParams",f(7,P,t.tutorId)),i(),x(`
                                            `,t.complaints.tutor,`
                                        `)}}function Pe(n,m){if(n&1&&(e(0,`
                                    `),o(1,"div"),e(2),o(3,"a",13),e(4),a(),e(5,`
                                    `),a(),e(6,`
                                `)),n&2){let t=c(3);i(2),A(`
                                        `,t.complaints.done," / ",t.complaints.total," (",t.complaints.doneToTotalPercentage,`) |
                                        `),i(),l("routerLink",t.complaintsLink)("queryParams",f(6,P,t.tutorId)),i(),x(`
                                            `,t.complaints.tutor,`
                                        `)}}function Le(n,m){if(n&1&&(e(0,`
                        `),o(1,"div",9),e(2,`
                            `),p(3,"div",15),e(4,`
                            `),o(5,"div",11),e(6,`
                                `),u(7,Ie,10,9)(8,Pe,7,8),a(),e(9,`
                        `),a(),e(10,`
                    `)),n&2){let t=c(2);i(7),d(t.course!=null&&t.course.isAtLeastInstructor?7:-1),i(),d(t.course&&!t.course.isAtLeastInstructor?8:-1)}}function Re(n,m){if(n&1&&(e(0,`
                                            `),o(1,"a",18),e(2),a(),e(3,`
                                        `)),n&2){let t=c(4);i(),l("routerLink",t.moreFeedbackRequestsLink),i(),A(`
                                                `,t.moreFeedbackRequests.done," / ",t.moreFeedbackRequests.total," (",t.moreFeedbackRequests.doneToTotalPercentage,`)
                                            `)}}function ye(n,m){if(n&1&&(e(0,`
                                    `),o(1,"div"),e(2,`
                                        `),u(3,Re,4,4),e(4,`
                                        |
                                        `),o(5,"a",13),e(6),a(),e(7,`
                                    `),a(),e(8,`
                                `)),n&2){let t=c(3);i(3),d(t.course!=null&&t.course.isAtLeastInstructor?3:-1),i(2),l("routerLink",t.moreFeedbackRequestsLink)("queryParams",f(4,P,t.tutorId)),i(),x(`
                                            `,t.moreFeedbackRequests.tutor,`
                                        `)}}function De(n,m){if(n&1&&(e(0,`
                                    `),o(1,"div"),e(2),o(3,"a",13),e(4),a(),e(5,`
                                    `),a(),e(6,`
                                `)),n&2){let t=c(3);i(2),A(`
                                        `,t.moreFeedbackRequests.done," / ",t.moreFeedbackRequests.total," (",t.moreFeedbackRequests.doneToTotalPercentage,`) |
                                        `),i(),l("routerLink",t.moreFeedbackRequestsLink)("queryParams",f(6,P,t.tutorId)),i(),x(`
                                            `,t.moreFeedbackRequests.tutor,`
                                        `)}}function Fe(n,m){if(n&1&&(e(0,`
                        `),o(1,"div",9),e(2,`
                            `),p(3,"div",17),e(4,`
                            `),o(5,"div",11),e(6,`
                                `),u(7,ye,9,6)(8,De,7,8),a(),e(9,`
                        `),a(),e(10,`
                    `)),n&2){let t=c(2);i(7),d(t.course!=null&&t.course.isAtLeastInstructor?7:-1),i(),d(t.course&&!t.course.isAtLeastInstructor?8:-1)}}function je(n,m){if(n&1&&(e(0,`
                                `),o(1,"a",18),e(2),a(),e(3,`
                            `)),n&2){let t=c(2);i(),l("routerLink",t.ratingsLink),i(),x(" ",t.ratings.total," ")}}function we(n,m){if(n&1&&(e(0,`
                                `),o(1,"span"),e(2),a(),e(3,`
                            `)),n&2){let t=c(2);i(2),x(" ",t.ratings.total," ")}}function qe(n,m){if(n&1&&(e(0,`
                `),o(1,"div"),e(2,`
                    `),o(3,"div",9),e(4,`
                        `),p(5,"div",10),e(6,`
                        `),o(7,"div",11),e(8),a(),e(9,`
                    `),a(),e(10,`
                    `),u(11,Le,11,2)(12,Fe,11,2),o(13,"div",9),e(14,`
                        `),p(15,"div",12),e(16,`
                        `),o(17,"div",11),e(18),o(19,"a",13),e(20),a(),e(21,`
                        `),a(),e(22,`
                    `),a(),e(23,`
                    `),o(24,"div",9),e(25,`
                        `),p(26,"div",14),e(27,`
                        `),o(28,"div",11),e(29,`
                            `),u(30,je,4,2)(31,we,4,1),e(32),a(),e(33,`
                    `),a(),e(34,`
                `),a(),e(35,`
            `)),n&2){let t=c();i(8),$(`
                            `,t.totalNumberOfAssessments.total," / ",t.numberOfSubmissions.total," (",t.totalAssessmentPercentage,"%) | ",t.numberOfTutorAssessments,`
                        `),i(3),d(t.complaintsEnabled?11:-1),i(),d(t.feedbackRequestEnabled?12:-1),i(6),x(`
                            `,t.assessmentLocks.tutor,` |
                            `),i(),l("routerLink",t.assessmentLocksLink)("queryParams",f(13,P,t.tutorId)),i(),x(`
                                `,t.assessmentLocks.tutor,`
                            `),i(10),d(t.course!=null&&t.course.isAtLeastInstructor?30:-1),i(),d(t.course&&!t.course.isAtLeastInstructor?31:-1),i(),x(`
                            |
                            `,t.ratings.tutor,`
                        `)}}function Me(n,m){if(n&1&&(e(0,`
                                `),o(1,"div"),e(2,`
                                    `),o(3,"a",13),e(4),a(),e(5),a(),e(6,`
                            `)),n&2){let t=c(2);i(3),l("routerLink",t.complaintsLink)("queryParams",f(6,Se,t.numberOfCorrectionRounds-1)),i(),A(`
                                        `,t.complaints.done," / ",t.complaints.total," (",t.complaints.doneToTotalPercentage,`)
                                    `),i(),x(`
                                    | `,t.complaints.tutor,`
                                `)}}function Be(n,m){if(n&1&&(e(0,`
                                `),o(1,"div"),e(2),a(),e(3,`
                            `)),n&2){let t=c(2);i(2),A("",t.complaints.done," / ",t.complaints.total," (",t.complaints.doneToTotalPercentage,") | -")}}function Ne(n,m){if(n&1&&(e(0,`
                                `),o(1,"span"),e(2),a(),e(3,`
                            `)),n&2){let t=c(2);i(2),x(" - ",t.numberOfAssessmentsOfCorrectionRounds[1].inTime,"")}}function $e(n,m){if(n&1&&(e(0,`
                `),o(1,"div"),e(2,`
                    `),o(3,"div",9),e(4,`
                        `),p(5,"div",10),e(6,`
                        `),o(7,"div",11),e(8),a(),e(9,`
                    `),a(),e(10,`
                    `),o(11,"div",9),e(12,`
                        `),p(13,"div",15),e(14,`
                        `),o(15,"div",11),e(16,`
                            `),u(17,Me,7,8)(18,Be,4,3),a(),e(19,`
                    `),a(),e(20,`
                    `),o(21,"div",9),e(22,`
                        `),p(23,"div",12),e(24,`
                        `),o(25,"div",11),e(26),o(27,"a",13),e(28),a(),e(29,`
                        `),a(),e(30,`
                    `),a(),e(31,`
                    `),o(32,"div",9),e(33,`
                        `),p(34,"div",19),e(35,`
                        `),o(36,"div",11),e(37),u(38,Ne,4,1),a(),e(39,`
                    `),a(),e(40,`
                `),a(),e(41,`
            `)),n&2){let t=c();i(8),$(`
                            (`,t.totalNumberOfAssessments.total," / ",t.numberOfSubmissions.total*t.numberOfCorrectionRounds,") (",t.totalAssessmentPercentage,`%) |
                            `,t.numberOfTutorAssessments,`
                        `),i(9),d(t.course!=null&&t.course.isAtLeastInstructor?17:-1),i(),d(t.course&&!t.course.isAtLeastInstructor?18:-1),i(8),x(`
                            `,t.assessmentLocks.total,`
                            |
                            `),i(),l("routerLink",t.assessmentLocksLink)("queryParams",f(12,P,t.tutorId)),i(),x(`
                                `,t.assessmentLocks.tutor,`
                            `),i(9),x(`
                            `,t.numberOfAssessmentsOfCorrectionRounds[0].inTime,`
                            `),i(),d(t.numberOfAssessmentsOfCorrectionRounds[1]?38:-1)}}var ve=class{total;tutor;done;constructor(m,t,r){this.total=m,this.tutor=t,this.done=r}get doneToTotalPercentage(){return this.done==null?"":this.total===0?"100%":`${(100*this.done/this.total).toFixed().toString()}%`}},qt=(()=>{class n{translateService=k(oe);isExamMode;course;examId;tutorId;complaintsEnabled;feedbackRequestEnabled;numberOfCorrectionRounds;numberOfAssessmentsOfCorrectionRounds;totalNumberOfAssessments;numberOfSubmissions;numberOfTutorAssessments;totalAssessmentPercentage;complaints;moreFeedbackRequests;assessmentLocks;ratings;completedAssessmentsTitle;openedAssessmentsTitle;assessments;customColors;view=[320,150];legendPosition=be.Below;complaintsLink;moreFeedbackRequestsLink;assessmentLocksLink;ratingsLink;themeSubscription;ngOnInit(){this.setup(),this.translateService.onLangChange.subscribe(()=>{this.setupGraph()}),this.customColors=[{name:this.openedAssessmentsTitle,value:H.RED},{name:this.completedAssessmentsTitle,value:H.BLUE}]}ngOnChanges(){this.setup()}ngOnDestroy(){this.themeSubscription?.unsubscribe()}setup(){this.setupLinks(),this.setupGraph()}setupLinks(){let t=this.isExamMode?["exams",this.examId]:[];this.complaintsLink=["/course-management",this.course.id].concat(t).concat(["complaints"]),this.moreFeedbackRequestsLink=["/course-management",this.course.id].concat(t).concat(["more-feedback-requests"]),this.assessmentLocksLink=["/course-management",this.course.id].concat(t).concat(["assessment-locks"]),this.ratingsLink=["/course-management",this.course.id,"ratings"]}setupGraph(){this.completedAssessmentsTitle=this.translateService.instant("artemisApp.exerciseAssessmentDashboard.closedAssessments"),this.openedAssessmentsTitle=this.translateService.instant("artemisApp.exerciseAssessmentDashboard.openAssessments"),this.assessments=[{name:this.openedAssessmentsTitle,value:this.numberOfSubmissions.total-this.totalNumberOfAssessments.total/this.numberOfCorrectionRounds},{name:this.completedAssessmentsTitle,value:this.totalNumberOfAssessments.total/this.numberOfCorrectionRounds}]}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=T({type:n,selectors:[["jhi-assessment-dashboard-information"]],inputs:{isExamMode:"isExamMode",course:"course",examId:"examId",tutorId:"tutorId",complaintsEnabled:"complaintsEnabled",feedbackRequestEnabled:"feedbackRequestEnabled",numberOfCorrectionRounds:"numberOfCorrectionRounds",numberOfAssessmentsOfCorrectionRounds:"numberOfAssessmentsOfCorrectionRounds",totalNumberOfAssessments:"totalNumberOfAssessments",numberOfSubmissions:"numberOfSubmissions",numberOfTutorAssessments:"numberOfTutorAssessments",totalAssessmentPercentage:"totalAssessmentPercentage",complaints:"complaints",moreFeedbackRequests:"moreFeedbackRequests",assessmentLocks:"assessmentLocks",ratings:"ratings"},features:[F],decls:19,vars:10,consts:[["tooltipTemplate",""],[1,"row","mt-3","g-3"],[1,"col-12","col-md-6","col-lg-7","mt-0"],[1,"col-12","col-md-6","col-lg-5","overflow-auto"],[1,"d-block",2,"min-width","360px",3,"panelHeader","panelDescriptionHeader"],["jhiTranslate","artemisApp.assessmentDashboard.exerciseTable.examInformation",2,"font-size","16px"],["jhiTranslate","artemisApp.assessmentDashboard.exerciseTable.courseInformation",2,"font-size","16px"],[1,"pie-chart","pb-2",2,"margin-top","-10px"],[3,"customColors","view","results","legend","legendTitle","legendPosition","animations"],[1,"row","g-0","mb-1"],["jhiTranslate","artemisApp.assessmentDashboard.assessments",1,"col-7"],[1,"col-5"],["jhiTranslate","artemisApp.assessmentDashboard.assessmentLocks",1,"col-7"],[3,"routerLink","queryParams"],["jhiTranslate","artemisApp.exerciseAssessmentDashboard.ratings",1,"col-7"],["jhiTranslate","artemisApp.assessmentDashboard.complaints",1,"col-7"],["id","open-complaints",3,"routerLink"],["jhiTranslate","artemisApp.assessmentDashboard.moreFeedbackRequests",1,"col-7"],[3,"routerLink"],["jhiTranslate","artemisApp.assessmentDashboard.totalAssessmentsForCorrectionrounds",1,"col-7"]],template:function(r,s){r&1&&(o(0,"div",1),e(1,`
    `),o(2,"div",2),e(3,`
        `),u(4,Oe,3,0)(5,Ee,3,0)(6,ke,10,7),a(),e(7,`
    `),o(8,"div",3),e(9,`
        `),o(10,"jhi-side-panel",4),b(11,"artemisTranslate"),b(12,"artemisTranslate"),e(13,`
            `),u(14,qe,36,15)(15,$e,42,14),a(),e(16,`
    `),a(),e(17,`
`),a(),e(18,`
`)),r&2&&(i(4),d(s.isExamMode?4:5),i(2),d(s.numberOfSubmissions.total!==0?6:-1),i(4),l("panelHeader",h(11,6,"artemisApp.assessmentDashboard.assessmentInformation"))("panelDescriptionHeader",h(12,8,"artemisApp.exerciseAssessmentDashboard.totalYours")),i(4),d(s.isExamMode?-1:14),i(),d(s.isExamMode?15:-1))},dependencies:[N,_e,he,M,O,Ce],styles:["[_nghost-%COMP%]  .legend-labels{background-color:transparent!important}"]})}return n})();function Ge(n,m){if(n&1){let t=y();e(0,`
            `),o(1,"li",6),b(2,"artemisTranslate"),v("click",function(){L(t);let s=c();return R(s.navigate())}),e(3,`
                `),p(4,"fa-icon",3),e(5,`
            `),a(),e(6,`
        `)}if(n&2){let t=c();i(),l("ngClass",t.calculateClasses(t.TRAINED))("ngbTooltip",h(2,3,"artemisApp.assessmentDashboard.trainOnExampleSubmissions")),i(3),l("icon",t.faChalkboardTeacher)}}function Ve(n,m){if(n&1&&(e(0,`
                        `),o(1,"div",8),e(2,`
                            `),p(3,"jhi-progress-bar",5),b(4,"artemisTranslate"),e(5,`
                        `),a(),e(6,`
                    `)),n&2){let t=c(),r=t.$implicit,s=t.$index,C=c(2);i(3),l("tooltip",h(4,4,"artemisApp.assessmentDashboard.assessStudentsLateSubmissions"))("percentage",C.percentageLateAssessmentProgressOfCorrectionRound[s])("numerator",r.late)("denominator",(C.numberOfSubmissions==null?null:C.numberOfSubmissions.late)||0)}}function We(n,m){if(n&1&&(e(0,`
                `),o(1,"li",7),e(2,`
                    `),o(3,"div",8),e(4,`
                        `),p(5,"jhi-progress-bar",5),b(6,"artemisTranslate"),e(7,`
                    `),a(),e(8,`
                    `),u(9,Ve,7,6),a(),e(10,`
            `)),n&2){let t=m.$implicit,r=m.$index,s=c(2);i(),l("ngClass",s.calculateClassProgressBar()),i(4),l("tooltip",h(6,6,"artemisApp.assessmentDashboard.assessStudentsSubmissions"))("percentage",s.percentageInTimeAssessmentProgressOfCorrectionRound[r])("numerator",t.inTime)("denominator",(s.numberOfSubmissions==null?null:s.numberOfSubmissions.inTime)||0),i(4),d(s.numberOfSubmissions&&s.numberOfSubmissions.late>0?9:-1)}}function ze(n,m){if(n&1&&(e(0,`
            `),w(1,We,11,8,null,null,j)),n&2){let t=c();i(),q(t.numberOfAssessmentsOfCorrectionRounds)}}var an=(()=>{class n{router=k(ie);tutorParticipation;numberOfSubmissions;totalNumberOfAssessments;numberOfComplaints;numberOfOpenComplaints;numberOfMoreFeedbackRequests;numberOfOpenMoreFeedbackRequests;exercise;numberOfAssessmentsOfCorrectionRounds;tutorParticipationStatus="NOT_PARTICIPATED";ExerciseType=W;NOT_PARTICIPATED="NOT_PARTICIPATED";REVIEWED_INSTRUCTIONS="REVIEWED_INSTRUCTIONS";TRAINED="TRAINED";COMPLETED="COMPLETED";percentageComplaintsProgress=0;percentageInTimeAssessmentProgressOfCorrectionRound=[];percentageLateAssessmentProgressOfCorrectionRound=[];routerLink;shouldShowManualAssessments=!0;faBook=le;faChalkboardTeacher=me;ngOnInit(){this.tutorParticipationStatus=this.tutorParticipation.status;let t=z(this.tutorParticipation,"trainedExampleSubmissions[0].exercise.id"),r=z(this.tutorParticipation,"trainedExampleSubmissions[0].exercise.course.id");r&&t&&(this.routerLink=`/course-management/${r}/assessment-dashboard/${t}`),this.calculatePercentageAssessmentProgress(),this.calculatePercentageComplaintsProgress(),this.exercise&&this.exercise.type===W.PROGRAMMING&&(this.shouldShowManualAssessments=!this.exercise.allowComplaintsForAutomaticAssessments)}navigate(){this.routerLink&&this.routerLink.length>0&&this.router.navigate([this.routerLink])}ngOnChanges(t){t.tutorParticipation&&(this.tutorParticipation=t.tutorParticipation.currentValue,this.tutorParticipationStatus=this.tutorParticipation.status),this.calculatePercentageAssessmentProgress(),this.calculatePercentageComplaintsProgress()}calculatePercentageAssessmentProgress(){for(let[t,r]of this.numberOfAssessmentsOfCorrectionRounds.entries())this.percentageInTimeAssessmentProgressOfCorrectionRound[t]=0,this.percentageLateAssessmentProgressOfCorrectionRound[t]=0,this.numberOfSubmissions&&this.numberOfSubmissions.inTime!==0&&(this.percentageInTimeAssessmentProgressOfCorrectionRound[t]=Math.floor(r.inTime/this.numberOfSubmissions.inTime*100)),this.numberOfSubmissions&&this.numberOfSubmissions?.late!==0&&(this.percentageLateAssessmentProgressOfCorrectionRound[t]=Math.floor(r.late/this.numberOfSubmissions.late*100))}calculatePercentageComplaintsProgress(){this.numberOfComplaints+this.numberOfMoreFeedbackRequests!==0&&(this.percentageComplaintsProgress=Math.floor((this.numberOfComplaints-this.numberOfOpenComplaints+(this.numberOfMoreFeedbackRequests-this.numberOfOpenMoreFeedbackRequests))/(this.numberOfComplaints+this.numberOfMoreFeedbackRequests)*100))}calculateClasses(t){if(t===this.tutorParticipationStatus&&t!==this.TRAINED)return"active";if(t===this.TRAINED&&this.tutorParticipationStatus===this.NOT_PARTICIPATED)return"opaque";if(t===this.TRAINED&&this.exercise.exampleSubmissions&&this.tutorParticipation.trainedExampleSubmissions){let r=this.tutorParticipation.trainedExampleSubmissions.filter(E=>!E.usedForTutorial),s=this.exercise.exampleSubmissions.filter(E=>!E.usedForTutorial),C=this.tutorParticipation.trainedExampleSubmissions.filter(E=>E.usedForTutorial),_=this.exercise.exampleSubmissions.filter(E=>E.usedForTutorial);if(s.length>0&&s.length!==r.length||_.length>0&&_.length!==C.length)return"orange"}return""}calculateClassProgressBar(){return this.tutorParticipationStatus!==this.TRAINED&&this.tutorParticipationStatus!==this.COMPLETED?"opaque":this.tutorParticipationStatus===this.COMPLETED||this.numberOfSubmissions&&this.totalNumberOfAssessments&&this.numberOfSubmissions.inTime===this.totalNumberOfAssessments.inTime||this.numberOfOpenComplaints+this.numberOfOpenMoreFeedbackRequests===0?"active":"orange"}calculateComplaintsNumerator(){return this.numberOfComplaints-this.numberOfOpenComplaints+(this.numberOfMoreFeedbackRequests-this.numberOfOpenMoreFeedbackRequests)}calculateComplaintsDenominator(){return this.numberOfComplaints+this.numberOfMoreFeedbackRequests}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=T({type:n,selectors:[["jhi-tutor-participation-graph"]],inputs:{tutorParticipation:"tutorParticipation",numberOfSubmissions:"numberOfSubmissions",totalNumberOfAssessments:"totalNumberOfAssessments",numberOfComplaints:"numberOfComplaints",numberOfOpenComplaints:"numberOfOpenComplaints",numberOfMoreFeedbackRequests:"numberOfMoreFeedbackRequests",numberOfOpenMoreFeedbackRequests:"numberOfOpenMoreFeedbackRequests",exercise:"exercise",numberOfAssessmentsOfCorrectionRounds:"numberOfAssessmentsOfCorrectionRounds"},features:[F],decls:23,vars:15,consts:[[1,"row","justify-content-center","overflow-hidden"],[1,"not_participated",3,"ngClass"],[1,"ms-0",3,"click","ngClass","ngbTooltip"],[3,"icon"],[1,"progress-bar-li","me-0",3,"ngClass"],[3,"tooltip","percentage","numerator","denominator"],[3,"click","ngClass","ngbTooltip"],[1,"progress-bar-li","stacked-li",3,"ngClass"],[1,"stacked-item"]],template:function(r,s){r&1&&(o(0,"div",0),e(1,`
    `),o(2,"ul"),e(3,`
        `),o(4,"li",1),e(5,"0"),a(),e(6,`
        `),o(7,"li",2),b(8,"artemisTranslate"),v("click",function(){return s.navigate()}),e(9,`
            `),p(10,"fa-icon",3),e(11,`
        `),a(),e(12,`
        `),u(13,Ge,7,5)(14,ze,3,0),o(15,"li",4),e(16,`
            `),p(17,"jhi-progress-bar",5),b(18,"artemisTranslate"),e(19,`
        `),a(),e(20,`
    `),a(),e(21,`
`),a(),e(22,`
`)),r&2&&(i(4),l("ngClass",s.calculateClasses(s.NOT_PARTICIPATED)),i(3),l("ngClass",s.calculateClasses(s.REVIEWED_INSTRUCTIONS))("ngbTooltip",h(8,11,"artemisApp.assessmentDashboard.readGradingInstructions")),i(3),l("icon",s.faBook),i(3),d(s.exercise.type!==s.ExerciseType.PROGRAMMING?13:-1),i(),d(s.shouldShowManualAssessments?14:-1),i(),l("ngClass",s.calculateClassProgressBar()),i(2),l("tooltip",h(18,13,"artemisApp.assessmentDashboard.evaluateStudentsComplaints"))("percentage",s.percentageComplaintsProgress)("numerator",s.calculateComplaintsNumerator())("denominator",s.calculateComplaintsDenominator()))},dependencies:[ne,B,I,ge,O],styles:[`jhi-tutor-participation-graph ul{padding-left:0;z-index:1;position:relative;white-space:nowrap}jhi-tutor-participation-graph li{width:2em;height:2em;text-align:center;line-height:2em;border-radius:1rem;background:green;margin:0 1rem;display:inline-block;color:#fff;position:relative}jhi-tutor-participation-graph li:before{content:"";position:absolute;top:.9em;left:-4em;width:4em;height:.2em;background:green;z-index:-1}jhi-tutor-participation-graph li:first-child:before{display:none}jhi-tutor-participation-graph .active{background:green}jhi-tutor-participation-graph .active+.tooltip+li,jhi-tutor-participation-graph .active+li{background:red}jhi-tutor-participation-graph .not_participated{display:none}jhi-tutor-participation-graph .not_participated.active+li+li:before,jhi-tutor-participation-graph .not_participated.active+li+ngb-tooltip-window+li:before{background:red!important}jhi-tutor-participation-graph .not_participated+li:before{display:none!important}jhi-tutor-participation-graph .opaque{background:#8b0000!important}jhi-tutor-participation-graph .opaque:before{background:#8b0000}jhi-tutor-participation-graph .orange{background:orange!important}jhi-tutor-participation-graph .orange~li:before,jhi-tutor-participation-graph .orange~li:after{background:orange!important}jhi-tutor-participation-graph .progress-bar-li{width:8em;background:transparent!important;top:.2em}jhi-tutor-participation-graph .progress-bar-li:before{top:.5em}jhi-tutor-participation-graph .stacked-li{display:inline-flex;flex-flow:column nowrap;height:auto;margin-bottom:1rem}jhi-tutor-participation-graph .stacked-li .stacked-item{margin-top:.5em;position:relative}jhi-tutor-participation-graph .stacked-li .stacked-item:first-child{margin-top:0}jhi-tutor-participation-graph .stacked-li .stacked-item:first-child:before{width:4em;left:-4em}jhi-tutor-participation-graph .stacked-li .stacked-item:first-child:after{width:2em;right:-2em}jhi-tutor-participation-graph .stacked-li .stacked-item:before,jhi-tutor-participation-graph .stacked-li .stacked-item:after{content:"";position:absolute;top:.5em;width:1rem;height:.2em;background:green;z-index:-1}jhi-tutor-participation-graph .stacked-li .stacked-item:before{left:-1rem}jhi-tutor-participation-graph .stacked-li .stacked-item:after{right:-1rem}jhi-tutor-participation-graph .stacked-li:before{width:.2em;left:-1rem;height:calc(100% - 1rem)}jhi-tutor-participation-graph .stacked-li:after{content:"";position:absolute;top:.5em;width:.2em;right:-1rem;height:calc(100% - 1rem);background:green;z-index:-1}jhi-tutor-participation-graph .opaque:after,jhi-tutor-participation-graph .opaque .stacked-item:before,jhi-tutor-participation-graph .opaque .stacked-item:after{background:#8b0000}jhi-tutor-participation-graph .orange~li .stacked-item:before,jhi-tutor-participation-graph .orange~li .stacked-item:after,jhi-tutor-participation-graph .orange:after,jhi-tutor-participation-graph .orange .stacked-item:after{background:orange!important}
`],encapsulation:2})}return n})();function He(n,m){if(n&1&&(e(0,`
                `),p(1,"fa-icon",3),e(2,`
            `)),n&2){let t=c(2);i(),l("icon",t.faSpinner)}}function Ue(n,m){if(n&1){let t=y();e(0,`
        `),o(1,"button",1),v("click",function(){L(t);let s=c();return R(s.triggerSecondCorrectionButton())}),e(2,`
            `),p(3,"fa-icon",2),e(4),b(5,"artemisTranslate"),u(6,He,3,1),a(),e(7,`
    `)}if(n&2){let t=c();i(3),l("icon",t.faToggleOn)("fixedWidth",!0),i(),x("\xA0",h(5,4,"artemisApp.exerciseAssessmentDashboard.toggleSecondCorrectionOn"),`
            `),i(2),d(t.togglingSecondCorrectionButton?6:-1)}}function Ye(n,m){if(n&1&&(e(0,`
                `),p(1,"fa-icon",3),e(2,`
            `)),n&2){let t=c(2);i(),l("icon",t.faSpinner)}}function Je(n,m){if(n&1){let t=y();e(0,`
        `),o(1,"button",4),v("click",function(){L(t);let s=c();return R(s.triggerSecondCorrectionButton())}),e(2,`
            `),p(3,"fa-icon",2),e(4),b(5,"artemisTranslate"),u(6,Ye,3,1),a(),e(7,`
    `)}if(n&2){let t=c();i(3),l("icon",t.faToggleOff)("fixedWidth",!0),i(),x("\xA0",h(5,4,"artemisApp.exerciseAssessmentDashboard.toggleSecondCorrectionOff"),`
            `),i(2),d(t.togglingSecondCorrectionButton?6:-1)}}var xn=(()=>{class n{secondCorrectionEnabled;togglingSecondCorrectionButton;ngModelChange=new Y;faToggleOn=se;faToggleOff=ae;faSpinner=ce;triggerSecondCorrectionButton(){this.ngModelChange.emit()}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=T({type:n,selectors:[["jhi-second-correction-enable-button"]],inputs:{secondCorrectionEnabled:"secondCorrectionEnabled",togglingSecondCorrectionButton:"togglingSecondCorrectionButton"},outputs:{ngModelChange:"ngModelChange"},decls:6,vars:2,consts:[[1,"btn-group"],[1,"btn","btn-success","float-end","btn-sm",3,"click"],[3,"icon","fixedWidth"],["animation","spin",3,"icon"],[1,"btn","btn-danger","float-end","btn-sm",3,"click"]],template:function(r,s){r&1&&(o(0,"div",0),e(1,`
    `),e(2,`
    `),u(3,Ue,8,6)(4,Je,8,6),a(),e(5,`
`)),r&2&&(i(3),d(s.secondCorrectionEnabled?-1:3),i(),d(s.secondCorrectionEnabled?4:-1))},dependencies:[I,O],styles:["div[_ngcontent-%COMP%]{cursor:pointer}"]})}return n})();var Ke=n=>({tutorName:n}),Qe=(n,m,t)=>["/course-management",n,m,t,"complaints"],D=n=>({tutorId:n}),Xe=(n,m,t)=>["/course-management",n,m,t,"more-feedback-requests"],Ze=(n,m)=>["/course-management",n,"exams",m,"complaints"],et=n=>["/course-management",n,"complaints"],tt=n=>["/course-management",n,"more-feedback-requests"];function nt(n,m){if(n&1&&(e(0,`
                    `),o(1,"th",18),e(2,`
                        `),p(3,"a",19),e(4,`
                        `),p(5,"fa-icon",5),e(6,`
                    `),a(),e(7,`
                `)),n&2){let t=c();i(5),l("icon",t.faSort)}}function it(n,m){if(n&1&&(e(0,`
                    `),o(1,"th",20),e(2,`
                        `),p(3,"a",21),e(4,`
                        `),p(5,"fa-icon",5),e(6,`
                    `),a(),e(7,`
                `)),n&2){let t=c();i(5),l("icon",t.faSort)}}function ot(n,m){if(n&1&&(e(0,`
                            `),p(1,"fa-icon",22),b(2,"artemisTranslate"),e(3,`
                        `)),n&2){let t=c().$implicit,r=c();i(),J("ngbTooltip",ee(2,2,"artemisApp.assessmentDashboard.tutorPerformanceIssues.tutor",f(5,Ke,t.name))),l("icon",r.faExclamationTriangle)}}function at(n,m){if(n&1&&(e(0,`
                            `),o(1,"td"),e(2),a(),e(3,`
                        `)),n&2){let t=c(2).$implicit;i(2),S(t.numberOfNotAnsweredMoreFeedbackRequests)}}function st(n,m){if(n&1&&(e(0,`
                        `),o(1,"td"),e(2),a(),e(3,`
                        `),u(4,at,4,1)),n&2){let t=c().$implicit,r=c();i(2),S(t.numberOfAcceptedComplaints),i(2),d(r.isExamMode?-1:4)}}function rt(n,m){if(n&1&&(e(0,`
                                `),o(1,"td"),e(2,`
                                    `),o(3,"a",23),e(4),a(),e(5,`
                                `),a(),e(6,`
                            `)),n&2){let t=c(3).$implicit,r=c();i(3),l("routerLink",V(3,Xe,r.course.id,r.exercise.type+"-exercises",r.exercise.id))("queryParams",f(7,D,t.userId)),i(),x(`
                                        `,t.numberOfNotAnsweredMoreFeedbackRequests,`
                                    `)}}function mt(n,m){if(n&1&&(e(0,`
                            `),o(1,"td"),e(2,`
                                `),o(3,"a",23),e(4),a(),e(5,`
                            `),a(),e(6,`
                            `),u(7,rt,7,9)),n&2){let t=c(2).$implicit,r=c();i(3),l("routerLink",V(4,Qe,r.course.id,r.exercise.type+"-exercises",r.exercise.id))("queryParams",f(8,D,t.userId)),i(),x(`
                                    `,t.numberOfAcceptedComplaints,`
                                `),i(3),d(r.isExamMode?-1:7)}}function ct(n,m){if(n&1&&(e(0,`
                                `),o(1,"td"),e(2,`
                                    `),o(3,"a",23),e(4),a(),e(5,`
                                `),a(),e(6,`
                            `)),n&2){let t=c(3).$implicit,r=c();i(3),l("routerLink",Z(3,Ze,r.course.id,r.exam.id))("queryParams",f(6,D,t.userId)),i(),x(`
                                        `,t.numberOfAcceptedComplaints,`
                                    `)}}function lt(n,m){if(n&1&&(e(0,`
                                `),o(1,"td"),e(2,`
                                    `),o(3,"a",23),e(4),a(),e(5,`
                                `),a(),e(6,`
                            `)),n&2){let t=c(3).$implicit,r=c();i(3),l("routerLink",f(3,et,r.course.id))("queryParams",f(5,D,t.userId)),i(),x(`
                                        `,t.numberOfAcceptedComplaints,`
                                    `)}}function dt(n,m){if(n&1&&(e(0,`
                                `),o(1,"td"),e(2,`
                                    `),o(3,"a",23),e(4),a(),e(5,`
                                `),a(),e(6,`
                            `)),n&2){let t=c(3).$implicit,r=c();i(3),l("routerLink",f(3,tt,r.course.id))("queryParams",f(5,D,t.userId)),i(),x(`
                                        `,t.numberOfNotAnsweredMoreFeedbackRequests,`
                                    `)}}function pt(n,m){if(n&1&&(e(0,`
                            `),u(1,ct,7,8)(2,lt,7,7)(3,dt,7,7)),n&2){let t=c(3);i(),d(t.isExamMode?1:-1),i(),d(t.isExamMode?-1:2),i(),d(t.isExamMode?-1:3)}}function ut(n,m){if(n&1&&(e(0,`
                        `),u(1,mt,8,10)(2,pt,4,3)),n&2){let t=c(2);i(),d(t.isExerciseDashboard&&t.exercise&&t.exercise.id&&t.course&&t.course.id?1:-1),i(),d(!t.isExerciseDashboard&&t.course&&t.course.id?2:-1)}}function xt(n,m){if(n&1&&(e(0,`
                        `),o(1,"td"),e(2),a(),e(3,`
                    `)),n&2){let t=c().$implicit;i(2),S(t.numberOfAnsweredMoreFeedbackRequests)}}function ft(n,m){if(n&1&&(e(0,`
                            `),o(1,"span"),e(2),a(),e(3,`
                        `)),n&2){let t=c().$implicit;i(2),x(" ",t.averageScore.toFixed(1),"% ")}}function bt(n,m){n&1&&(e(0,`
                            `),o(1,"span"),e(2," n.a. "),a(),e(3,`
                        `))}function ht(n,m){if(n&1&&(e(0,`
                            `),o(1,"span"),e(2),a(),e(3,`
                        `)),n&2){let t=c().$implicit;i(2),K(" ",t.averageRating.toFixed(1)," \u2B50 (",t.numberOfTutorRatings,") ")}}function _t(n,m){n&1&&(e(0,`
                            `),o(1,"span"),e(2," n.a. "),a(),e(3,`
                        `))}function Ct(n,m){if(n&1&&(e(0,`
                `),o(1,"tr"),e(2,`
                    `),o(3,"td"),e(4),a(),e(5,`
                    `),o(6,"td"),e(7),u(8,ot,4,7),a(),e(9,`
                    `),o(10,"td"),e(11),a(),e(12,`
                    `),o(13,"td"),e(14),a(),e(15,`
                    `),u(16,st,5,2)(17,ut,3,2),o(18,"td"),e(19),a(),e(20,`
                    `),u(21,xt,4,1),o(22,"td"),e(23,`
                        `),u(24,ft,4,1)(25,bt,4,0),a(),e(26,`
                    `),o(27,"td"),e(28,`
                        `),u(29,ht,4,2)(30,_t,4,0),a(),e(31,`
                `),a(),e(32,`
            `)),n&2){let t=m.$implicit,r=m.$index,s=c();i(4),S(r+1),i(3),x(`
                        `,t.name,`
                        `),i(),d(s.course!=null&&s.course.isAtLeastInstructor&&t.hasIssuesWithPerformance?8:-1),i(3),S(t.points),i(3),S(t.numberOfAssessments),i(2),d(s.course&&!s.course.isAtLeastInstructor?16:17),i(3),S(t.numberOfComplaintResponses),i(2),d(s.isExamMode?-1:21),i(3),d(t.numberOfAssessments>0?24:-1),i(),d(t.numberOfAssessments===0?25:-1),i(4),d(t.numberOfTutorRatings>0?29:-1),i(),d(t.numberOfTutorRatings===0?30:-1)}}var Fn=(()=>{class n{sortService=k(fe);tutorsData=[];course;exercise;exam;isExerciseDashboard=!1;isExamMode=!1;sortPredicate="points";reverseOrder=!1;faSort=re;faExclamationTriangle=de;ngOnInit(){this.exercise&&(this.course=pe(this.exercise)),this.isExerciseDashboard=!!(this.exercise&&this.course),this.isExamMode=!!this.exam,this.sortRows()}sortRows(){this.sortService.sortByProperty(this.tutorsData,this.sortPredicate,this.reverseOrder)}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=T({type:n,selectors:[["jhi-tutor-leaderboard"]],inputs:{tutorsData:"tutorsData",course:"course",exercise:"exercise",exam:"exam"},decls:71,vars:11,consts:[[1,"row","table-responsive","mt-3"],[1,"table"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["jhiSortBy","name"],["jhiTranslate","artemisApp.assessmentDashboard.tutorLeaderboard.name",1,"th-link"],[3,"icon"],["jhiSortBy","points"],["jhiTranslate","artemisApp.assessmentDashboard.tutorLeaderboard.points",1,"th-link"],["jhiSortBy","numberOfAssessments"],["jhiTranslate","artemisApp.assessmentDashboard.tutorLeaderboard.numberOfAssessments",1,"th-link"],["jhiSortBy","numberOfAcceptedComplaints"],["jhiTranslate","artemisApp.assessmentDashboard.tutorLeaderboard.numberOfAcceptedComplaints",1,"th-link"],["jhiSortBy","numberOfComplaintResponses"],["jhiTranslate","artemisApp.assessmentDashboard.tutorLeaderboard.numberOfComplaintResponses",1,"th-link"],["jhiSortBy","averageScore"],["jhiTranslate","artemisApp.assessmentDashboard.tutorLeaderboard.averageScore",1,"th-link"],["jhiSortBy","averageRating"],["jhiTranslate","artemisApp.assessmentDashboard.tutorLeaderboard.averageRating",1,"th-link"],["jhiSortBy","numberOfNotAnsweredMoreFeedbackRequests"],["jhiTranslate","artemisApp.assessmentDashboard.tutorLeaderboard.numberOfNotAnsweredMoreFeedbackRequests",1,"th-link"],["jhiSortBy","numberOfAnsweredMoreFeedbackRequests"],["jhiTranslate","artemisApp.assessmentDashboard.tutorLeaderboard.numberOfAnsweredMoreFeedbackRequests",1,"th-link"],[1,"text-warning",3,"icon","ngbTooltip"],[3,"routerLink","queryParams"]],template:function(r,s){r&1&&(o(0,"div",0),e(1,`
    `),o(2,"table",1),e(3,`
        `),o(4,"thead"),e(5,`
            `),o(6,"tr",2),X("predicateChange",function(_){return G(s.sortPredicate,_)||(s.sortPredicate=_),_})("ascendingChange",function(_){return G(s.reverseOrder,_)||(s.reverseOrder=_),_}),v("sortChange",function(){return s.sortRows()}),e(7,`
                `),o(8,"th"),e(9,"#"),a(),e(10,`
                `),o(11,"th",3),e(12,`
                    `),p(13,"a",4),e(14,`
                    `),p(15,"fa-icon",5),e(16,`
                `),a(),e(17,`
                `),o(18,"th",6),e(19,`
                    `),p(20,"a",7),e(21,`
                    `),p(22,"fa-icon",5),e(23,`
                `),a(),e(24,`
                `),o(25,"th",8),e(26,`
                    `),p(27,"a",9),e(28,`
                    `),p(29,"fa-icon",5),e(30,`
                `),a(),e(31,`
                `),o(32,"th",10),e(33,`
                    `),p(34,"a",11),e(35,`
                    `),p(36,"fa-icon",5),e(37,`
                `),a(),e(38,`
                `),u(39,nt,8,1),o(40,"th",12),e(41,`
                    `),p(42,"a",13),e(43,`
                    `),p(44,"fa-icon",5),e(45,`
                `),a(),e(46,`
                `),u(47,it,8,1),o(48,"th",14),e(49,`
                    `),p(50,"a",15),e(51,`
                    `),p(52,"fa-icon",5),e(53,`
                `),a(),e(54,`
                `),o(55,"th",16),e(56,`
                    `),p(57,"a",17),e(58,`
                    `),p(59,"fa-icon",5),e(60,`
                `),a(),e(61,`
            `),a(),e(62,`
        `),a(),e(63,`
        `),o(64,"tbody"),e(65,`
            `),w(66,Ct,33,12,null,null,j),a(),e(68,`
    `),a(),e(69,`
`),a(),e(70,`
`)),r&2&&(i(6),Q("predicate",s.sortPredicate)("ascending",s.reverseOrder),i(9),l("icon",s.faSort),i(7),l("icon",s.faSort),i(7),l("icon",s.faSort),i(7),l("icon",s.faSort),i(3),d(s.isExamMode?-1:39),i(5),l("icon",s.faSort),i(3),d(s.isExamMode?-1:47),i(5),l("icon",s.faSort),i(7),l("icon",s.faSort),i(7),q(s.tutorsData))},dependencies:[ue,xe,N,I,B,M,O],encapsulation:2})}return n})();export{Te as a,ve as b,qt as c,an as d,xn as e,Fn as f};
//# sourceMappingURL=chunk-HWIMTKXN.js.map
