import{a as ft}from"./chunk-UQAVYGM7.js";import"./chunk-HUX6AUUW.js";import{a as gt}from"./chunk-MM2DQ3UO.js";import"./chunk-PR2Y3QVB.js";import{a as St}from"./chunk-KOWVADWF.js";import{b as _t}from"./chunk-PTO7UATL.js";import"./chunk-VPHPBAVR.js";import"./chunk-ZPITQMA6.js";import{b as Et}from"./chunk-DRMCDU75.js";import{b as pt,e as ut}from"./chunk-PUNMJFMR.js";import"./chunk-PZ7IDTIM.js";import"./chunk-CT44YL7Q.js";import{c as ct}from"./chunk-JNO6DNVW.js";import"./chunk-EELXLOHY.js";import{K as ot,v as st}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as at,h as X,i as tt,k as et,m as it,n as nt}from"./chunk-WA5GEAJB.js";import"./chunk-5GXY5RYT.js";import{a as w}from"./chunk-K3W6YFKH.js";import{c as xt}from"./chunk-JXJXC4DZ.js";import{d as k}from"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import{p as P}from"./chunk-DID2YGL7.js";import{c as rt,f as v,h as dt}from"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{oa as lt,tb as mt}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as j}from"./chunk-U54OSGNH.js";import{f as K,i as I}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{A as N,Ac as U,Ad as Z,Bc as G,Bd as L,Db as s,Dc as A,Ea as b,Ed as J,La as V,Ma as T,Mc as C,Na as h,Oc as x,Rc as q,Tb as D,Zb as c,cd as O,dd as t,ed as g,fd as d,hd as H,kc as u,ld as Y,mc as y,md as $,nd as z,pd as Q,qa as W,rd as f,sc as p,uc as R,vc as B,wc as M,xc as n,yc as a,yd as E,zc as o,zd as _}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var Ct=["jhi-student-exam-detail-table-row",""],Tt=i=>({testRun:i});function vt(i,r){if(i&1&&(t(0,`
        `),o(1,"fa-icon",2),t(2,`
    `)),i&2){let e=x();s(),u("icon",e.getIcon(e.exercise.type))}}function Dt(i,r){if(i&1&&(t(0,`
        `),U(1,3),t(2),G(),t(3,`
    `)),i&2){let e=x();s(2),d(`
            `,e.achievedPointsPerExercise==null?null:e.achievedPointsPerExercise[e.exercise.id],`
        `)}}function yt(i,r){i&1&&t(0),i&2&&d(`
        `,"N/A",`
    `)}function At(i,r){if(i&1&&t(0),i&2){let e=x();d(`
        `,e.result.assessor==null?null:e.result.assessor.name,`
    `)}}function Pt(i,r){}function It(i,r){i&1&&(t(0,`
        `),o(1,"span",4),t(2,`
    `))}function wt(i,r){i&1&&(t(0,`
        `),o(1,"span",5),t(2,`
    `))}function kt(i,r){if(i&1&&(t(0,`
                `),n(1,"div"),t(2,`
                    `),t(3,`
                    `),n(4,"a",6),t(5,`
                        `),o(6,"fa-icon",7),t(7,`
                        `),o(8,"span",8),t(9,`
                    `),a(),t(10,`
                `),a(),t(11,`
            `)),i&2){let e=x(2);s(4),y("disabled",e.busy),u("queryParams",f(6,Tt,e.isTestRun))("routerLink",e.getAssessmentLink(e.exercise,e.submission,e.result.id)),s(2),u("fixedWidth",!0)("icon",e.faFolderOpen)}}function jt(i,r){if(i&1&&(t(0,`
                `),n(1,"div"),t(2,`
                    `),t(3,`
                    `),n(4,"a",6),t(5,`
                        `),o(6,"fa-icon",7),t(7),E(8,"artemisTranslate"),a(),t(9,`
                `),a(),t(10,`
            `)),i&2){let e=x(2);s(4),y("disabled",e.busy),u("queryParams",f(9,Tt,e.isTestRun))("routerLink",e.getAssessmentLink(e.exercise,e.submission)),s(2),u("fixedWidth",!0)("icon",e.faFolderOpen),s(),d(`
                        `,_(8,7,"artemisApp.assessment.dashboard.actions.assess"),`
                    `)}}function Rt(i,r){if(i&1&&(t(0,`
                `),n(1,"div"),t(2,`
                    `),n(3,"a",9),t(4,`
                        `),o(5,"fa-icon",7),t(6),E(7,"artemisTranslate"),a(),t(8,`
                `),a(),t(9,`
            `)),i&2){let e=x(2);s(3),y("disabled",e.busy),u("routerLink",e.getAssessmentLink(e.exercise)),s(2),u("fixedWidth",!0)("icon",e.faFolderOpen),s(),d(`
                        `,_(7,6,"artemisApp.examManagement.assessmentDashboard"),`
                    `)}}function Bt(i,r){if(i&1&&(t(0,`
        `),n(1,"div"),t(2,`
            `),c(3,kt,12,8)(4,jt,11,11)(5,Rt,10,8),a(),t(6,`
    `)),i&2){let e=x();s(3),p(e.result&&e.exercise.type!==e.ExerciseType.PROGRAMMING?3:-1),s(),p(e.submission&&e.result===void 0&&e.exercise.type!==e.ExerciseType.PROGRAMMING?4:-1),s(),p(e.exercise.type===e.ExerciseType.PROGRAMMING?5:-1)}}var ht=(()=>{class i{exercise;examId;isTestRun;course;busy;studentExam;achievedPointsPerExercise;courseId;studentParticipation;submission;result;openingAssessmentEditorForNewSubmission=!1;ExerciseType=rt;getIcon=dt;faFolderOpen=lt;ngOnChanges(){this.exercise.studentParticipations?.[0]&&(this.studentParticipation=this.exercise.studentParticipations[0],this.studentParticipation.submissions?.length>0&&(this.submission=this.studentParticipation.submissions[0]),this.studentParticipation.results?.length>0&&(this.result=this.studentParticipation.results[0])),this.course&&this.course.id&&(this.courseId=this.course.id)}getAssessmentLink(e,m,l){let S;if(!(!e||!e.type))return m&&(this.openingAssessmentEditorForNewSubmission=!0,S=Et(e.type,this.courseId,e.id,this.studentParticipation?.id,m.id,this.examId,e.exerciseGroup?.id,l),this.openingAssessmentEditorForNewSubmission=!1),S}getBonusPoints(e){if(!e)return 0;switch(e.includedInOverallScore){case v.INCLUDED_COMPLETELY:return e.bonusPoints;case v.INCLUDED_AS_BONUS:return e.maxPoints;default:return 0}}getMaxPoints(e){if(!e)return 0;switch(e.includedInOverallScore){case v.INCLUDED_COMPLETELY:return e.maxPoints;case v.INCLUDED_AS_BONUS:default:return 0}}static \u0275fac=function(m){return new(m||i)};static \u0275cmp=D({type:i,selectors:[["","jhi-student-exam-detail-table-row",""]],inputs:{exercise:"exercise",examId:"examId",isTestRun:"isTestRun",course:"course",busy:"busy",studentExam:"studentExam",achievedPointsPerExercise:"achievedPointsPerExercise"},features:[Q([]),V],attrs:Ct,decls:35,vars:9,consts:[[1,"align-middle"],[1,"align-middle",2,"font-size","1.35rem"],[3,"icon"],[1,"score"],["jhiTranslate","global.generic.yes"],["jhiTranslate","global.generic.no"],[1,"btn","btn-primary","btn-sm","mb-1",3,"queryParams","routerLink"],[3,"fixedWidth","icon"],["jhiTranslate","artemisApp.studentExamDetail.openLatestAssessment"],[1,"btn","btn-primary","btn-sm","mb-1",3,"routerLink"]],template:function(m,l){m&1&&(n(0,"td",0),t(1),a(),t(2,`
`),n(3,"td",1),t(4,`
    `),c(5,vt,3,1),a(),t(6,`
`),n(7,"td",0),t(8),a(),t(9,`
`),n(10,"td",0),t(11,`
    `),c(12,Dt,4,1)(13,yt,1,1),a(),t(14,`
`),n(15,"td",0),t(16),a(),t(17,`
`),n(18,"td",0),t(19),a(),t(20,`
`),n(21,"td",0),t(22,`
    `),c(23,At,1,1)(24,Pt,0,0),a(),t(25,`
`),n(26,"td",0),t(27,`
    `),c(28,It,3,0)(29,wt,3,0),a(),t(30,`
`),n(31,"td"),t(32,`
    `),c(33,Bt,7,3),a(),t(34,`
`)),m&2&&(s(),d(`
    `,l.exercise==null?null:l.exercise.id,`
`),s(4),p(l.exercise&&l.exercise.type?5:-1),s(3),d(`
    `,l.exercise==null?null:l.exercise.title,`
`),s(4),p(l.exercise&&(l.achievedPointsPerExercise==null?null:l.achievedPointsPerExercise[l.exercise.id])!==void 0?12:13),s(4),d(`
    `,l.getMaxPoints(l.exercise),`
`),s(3),d(`
    `,l.getBonusPoints(l.exercise),`
`),s(4),p(l.result!=null&&l.result.assessor?23:24),s(5),p(l.result!=null&&l.result.hasComplaint?28:29),s(5),p(l.course!=null&&l.course.isAtLeastInstructor&&l.exercise.type!==l.ExerciseType.QUIZ&&l.studentExam.submitted?33:-1))},dependencies:[k,j,I,w],encapsulation:2})}return i})();var F=i=>({examTitle:i});function Mt(i,r){if(i&1&&(t(0,`
            `),n(1,"h4",4),t(2),a(),t(3,`
        `)),i&2){let e=x();s(),u("translateValues",f(2,F,e.studentExam.exam.title)),s(),d(`
                Student test exam (`,e.studentExam.exam.title,`)
            `)}}function Ot(i,r){if(i&1&&(t(0,`
            `),n(1,"h4",5),t(2),a(),t(3,`
        `)),i&2){let e=x();s(),u("translateValues",f(2,F,e.studentExam.exam.title)),s(),d(`
                Test Run (`,e.studentExam.exam.title,`)
            `)}}function Lt(i,r){if(i&1&&(t(0,`
            `),n(1,"h4",6),t(2),a(),t(3,`
        `)),i&2){let e=x();s(),u("translateValues",f(2,F,e.studentExam.exam.title)),s(),d(`
                Student exam (`,e.studentExam.exam.title,`)
            `)}}function Ft(i,r){if(i&1&&(t(0,`
                        `),n(1,"p"),t(2),E(3,"artemisTranslate"),E(4,"artemisDate"),E(5,"artemisDate"),a(),t(6,`
                    `)),i&2){let e=x(3);s(2),H(`
                            `,_(3,3,"artemisApp.studentExamDetail.endOfIndividualWorkingTime")," ",Z(4,5,e.individualEndDate,"long-date"),`
                            -
                            `,L(5,8,e.individualEndDate,"time",!0),`
                        `)}}function Nt(i,r){if(i&1){let e=A();t(0,`
            `),n(1,"div",7),t(2,`
                `),o(3,"h5",36),t(4,`
                `),n(5,"form",37,1),C("ngSubmit",function(){T(e);let l=x(2);return h(l.saveWorkingTime())}),t(7,`
                    `),n(8,"jhi-working-time-control",38),z("ngModelChange",function(l){T(e);let S=x(2);return $(S.workingTimeSeconds,l)||(S.workingTimeSeconds=l),h(l)}),a(),t(9,`
                    `),c(10,Ft,7,12),n(11,"button",39),t(12,`
                        `),o(13,"fa-icon",40),t(14,`
                        `),o(15,"span",41),t(16,`
                    `),a(),t(17,`
                `),a(),t(18,`
            `),a(),t(19,`
        `)}if(i&2){let e=O(6),m=x(2);s(8),u("relative",!0)("disabled",m.isWorkingTimeFormDisabled),Y("ngModel",m.workingTimeSeconds),u("exam",m.studentExam.exam),s(2),p(m.workingTimeSeconds!==m.studentExam.workingTime?10:-1),s(),u("disabled",!e.valid||m.isWorkingTimeFormDisabled),s(2),u("icon",m.faSave)}}function Wt(i,r){if(i&1&&(t(0,`
            `),n(1,"div",7),t(2,`
                `),o(3,"h5",36),t(4,`
                `),o(5,"span",42),t(6,`:
                `),o(7,"jhi-test-exam-working-time",43),t(8,`
            `),a(),t(9,`
        `)),i&2){let e=x(2);s(7),u("studentExam",e.studentExam)}}function Vt(i,r){if(i&1&&(t(0,`
                        `),n(1,"li"),t(2,`
                            `),n(3,"strong"),t(4),E(5,"artemisTranslate"),a(),t(6),a(),t(7,`
                    `)),i&2){let e=x(2);s(4),d("",_(5,2,e.gradeExplanation),":"),s(2),d(`
                            `,e.grade,`
                        `)}}function Ut(i,r){if(i&1&&(t(0,`
                        `),n(1,"li"),t(2,`
                            `),n(3,"strong"),t(4),E(5,"artemisTranslate"),a(),t(6),a(),t(7,`
                    `)),i&2){let e=x(2);s(4),d("",_(5,2,"artemisApp.studentExams.gradeAfterBonus"),":"),s(2),d(`
                            `,e.gradeAfterBonus,`
                        `)}}function Gt(i,r){if(i&1&&(t(0,`
                        `),n(1,"li"),t(2,`
                            `),n(3,"strong"),t(4),E(5,"artemisTranslate"),a(),t(6),E(7,"artemisTranslate"),a(),t(8,`
                    `)),i&2){let e=x(2);s(4),d("",_(5,2,"artemisApp.studentExams.passed"),":"),s(2),d(`
                            `,_(7,4,e.passed?"global.generic.yes":"global.generic.no"),`
                        `)}}function qt(i,r){i&1&&(t(0,`
                                `),o(1,"span",45),t(2,`
                            `))}function Ht(i,r){i&1&&(t(0,`
                                `),o(1,"span",46),t(2,`
                            `))}function Yt(i,r){if(i&1){let e=A();t(0,`
                        `),n(1,"button",44),C("click",function(){T(e),x();let l=O(79),S=x();return h(S.openConfirmationModal(l))}),t(2,`
                            `),c(3,qt,3,0)(4,Ht,3,0),a(),t(5,`
                    `)}if(i&2){let e=x(2);s(),u("disabled",!e.isExamOver||e.isSaving),s(2),p(e.studentExam.submitted?4:3)}}function $t(i,r){i&1&&(t(0,`
                        `),o(1,"span",54),t(2,`
                    `))}function zt(i,r){i&1&&(t(0,`
                            `),o(1,"span",55),t(2,`
                        `))}function Qt(i,r){if(i&1&&(t(0,`
                        `),c(1,zt,3,0)),i&2){let e=x(3);s(),p(e.studentExam.submitted?-1:1)}}function Zt(i,r){i&1&&(t(0,`
                    `),o(1,"p",56),t(2,`
                `))}function Jt(i,r){i&1&&(t(0,`
                    `),o(1,"p",57),t(2,`
                    `),o(3,"p",58),t(4,`
                `))}function Kt(i,r){i&1&&(t(0,`
                        `),o(1,"span",59),t(2,`
                    `))}function Xt(i,r){i&1&&(t(0,`
                        `),o(1,"span",60),t(2,`
                    `))}function te(i,r){if(i&1){let e=A();t(0,`
            `),n(1,"div",47),t(2,`
                `),n(3,"h4",48),t(4,`
                    `),c(5,$t,3,0)(6,Qt,2,1),a(),t(7,`
                `),n(8,"button",49),C("click",function(){let l=T(e).$implicit;return h(l.dismiss())}),a(),t(9,`
            `),a(),t(10,`
            `),n(11,"div",50),t(12,`
                `),o(13,"p",51),t(14,`
                `),c(15,Zt,3,0)(16,Jt,5,0),a(),t(17,`
            `),n(18,"div",52),t(19,`
                `),n(20,"button",53),C("click",function(){let l=T(e).$implicit;return h(l.close("confirm"))}),t(21,`
                    `),c(22,Kt,3,0)(23,Xt,3,0),a(),t(24,`
            `),a(),t(25,`
        `)}if(i&2){let e=x(2);s(5),p(e.studentExam.submitted?5:6),s(10),p(e.studentExam.submitted?16:15),s(7),p(e.studentExam.submitted?23:22)}}function ee(i,r){if(i&1&&(t(0,`
                    `),n(1,"a",61),t(2,`
                        `),o(3,"span",62),t(4,`
                    `),a(),t(5,`
                    `),n(6,"div",63),E(7,"artemisTranslate"),t(8,`
                        `),n(9,"button",64),t(10,`
                            `),o(11,"span",65),t(12,`
                        `),a(),t(13,`
                    `),a(),t(14,`
                `)),i&2){let e=x(2);s(),u("routerLink","./summary"),s(5),q("ngbTooltip",_(7,5,"artemisApp.examTimeline.disabledTooltip")),u("disableTooltip",e.studentExam==null?null:e.studentExam.submitted),s(3),u("routerLink","./exam-timeline")("disabled",!e.studentExam.submitted)}}function ie(i,r){if(i&1&&(t(0,`
                                `),n(1,"tr"),t(2,`
                                    `),n(3,"td"),t(4),a(),t(5,`
                                    `),n(6,"td"),t(7),a(),t(8,`
                                    `),n(9,"td"),t(10),a(),t(11,`
                                    `),n(12,"td"),t(13),a(),t(14,`
                                    `),n(15,"td"),t(16),a(),t(17,`
                                    `),n(18,"td"),t(19),a(),t(20,`
                                    `),n(21,"td"),t(22),E(23,"artemisDate"),a(),t(24,`
                                `),a(),t(25,`
                            `)),i&2){let e=r.$implicit;s(4),g(e.id),s(3),g(e.sessionToken),s(3),g(e.userAgent),s(3),g(e.browserFingerprintHash),s(3),g(e.instanceId),s(3),g(e.ipAddress),s(3),g(_(23,7,e.createdDate))}}function ne(i,r){if(i&1&&(t(0,`
                `),n(1,"div",66),t(2,`
                    `),n(3,"table",23),t(4,`
                        `),n(5,"thead"),t(6,`
                            `),n(7,"tr"),t(8,`
                                `),n(9,"th",24),t(10,`
                                    `),o(11,"span",67),t(12,`
                                `),a(),t(13,`
                                `),n(14,"th"),t(15,`
                                    `),o(16,"span",68),t(17,`
                                `),a(),t(18,`
                                `),n(19,"th",69),t(20,`
                                    `),o(21,"span",70),t(22,`
                                `),a(),t(23,`
                                `),n(24,"th"),t(25,`
                                    `),o(26,"span",71),t(27,`
                                `),a(),t(28,`
                                `),n(29,"th"),t(30,`
                                    `),o(31,"span",72),t(32,`
                                `),a(),t(33,`
                                `),n(34,"th"),t(35,`
                                    `),o(36,"span",73),t(37,`
                                `),a(),t(38,`
                                `),n(39,"th"),t(40,`
                                    `),o(41,"span",74),t(42,`
                                `),a(),t(43,`
                            `),a(),t(44,`
                        `),a(),t(45,`
                        `),n(46,"tbody"),t(47,`
                            `),B(48,ie,26,9,null,null,R),a(),t(50,`
                    `),a(),t(51,`
                `),a(),t(52,`
            `)),i&2){let e=x(2);s(48),M(e.studentExam.examSessions)}}function ae(i,r){i&1&&(t(0,`
                `),o(1,"div",75),t(2,`
            `))}function se(i,r){if(i&1&&(t(0,`
                        `),o(1,"tr",76),t(2,`
                    `)),i&2){let e=r.$implicit,m=x(2);s(),u("course",m.course)("examId",m.examId)("exercise",e)("busy",m.isSaving)("isTestRun",m.isTestRun)("studentExam",m.studentExam)("achievedPointsPerExercise",m.achievedPointsPerExercise)}}function oe(i,r){if(i&1&&(t(0,`
    `),n(1,"div"),t(2,`
        `),n(3,"div",7),t(4,`
            `),n(5,"h5"),o(6,"span",8),a(),t(7,`
            `),n(8,"ol",9),t(9,`
                `),n(10,"li"),t(11,`
                    `),o(12,"strong",10),t(13),a(),t(14,`
                `),n(15,"li"),t(16,`
                    `),o(17,"strong",11),t(18),a(),t(19,`
                `),n(20,"li"),t(21,`
                    `),o(22,"strong",12),t(23),a(),t(24,`
                `),n(25,"li"),t(26,`
                    `),o(27,"strong",13),t(28),a(),t(29,`
            `),a(),t(30,`
        `),a(),t(31,`
        `),c(32,Nt,20,7)(33,Wt,10,1),n(34,"div",7),t(35,`
            `),n(36,"h5"),o(37,"span",14),a(),t(38,`
            `),n(39,"div",15),t(40,`
                `),n(41,"ol",16),t(42,`
                    `),n(43,"li"),t(44,`
                        `),n(45,"strong"),t(46),E(47,"artemisTranslate"),a(),t(48),E(49,"artemisTranslate"),a(),t(50,`
                    `),n(51,"li"),t(52,`
                        `),n(53,"strong"),t(54),E(55,"artemisTranslate"),a(),t(56),E(57,"artemisTranslate"),a(),t(58,`
                    `),n(59,"li"),t(60,`
                        `),n(61,"strong"),t(62),E(63,"artemisTranslate"),a(),t(64),E(65,"artemisDate"),a(),t(66,`
                    `),c(67,Vt,8,4)(68,Ut,8,4)(69,Gt,9,6),a(),t(70,`
                `),n(71,"div",17),E(72,"artemisTranslate"),t(73,`
                    `),c(74,Yt,6,2),a(),t(75,`
            `),a(),t(76,`
        `),a(),t(77,`
        `),c(78,te,26,3,"ng-template",null,0,J),t(80,`
        `),n(81,"div",7),t(82,`
            `),n(83,"h5"),o(84,"span",18),a(),t(85,`
            `),n(86,"div",19),t(87,`
                `),c(88,ee,15,7),a(),t(89,`
        `),a(),t(90,`
        `),n(91,"div",20),t(92,`
            `),n(93,"h5"),o(94,"span",21),a(),t(95,`
            `),c(96,ne,53,0)(97,ae,3,0),a(),t(98,`
        `),n(99,"div",20),t(100,`
            `),o(101,"h5",22),t(102,`
            `),n(103,"table",23),t(104,`
                `),n(105,"thead"),t(106,`
                    `),n(107,"tr"),t(108,`
                        `),n(109,"th",24),t(110,`
                            `),o(111,"span",25),t(112,`
                        `),a(),t(113,`
                        `),n(114,"th"),t(115,`
                            `),o(116,"span",26),t(117,`
                        `),a(),t(118,`
                        `),n(119,"th"),t(120,`
                            `),o(121,"span",27),t(122,`
                        `),a(),t(123,`
                        `),n(124,"th"),t(125,`
                            `),o(126,"span",28),t(127,`
                        `),a(),t(128,`
                        `),n(129,"th"),t(130,`
                            `),o(131,"span",29),t(132,`
                        `),a(),t(133,`
                        `),n(134,"th"),t(135,`
                            `),o(136,"span",30),t(137,`
                        `),a(),t(138,`
                        `),n(139,"th"),t(140,`
                            `),o(141,"span",31),t(142,`
                        `),a(),t(143,`
                        `),n(144,"th"),t(145,`
                            `),o(146,"span",32),t(147,`
                        `),a(),t(148,`
                        `),n(149,"th"),t(150,`
                            `),o(151,"span",33),t(152,`
                        `),a(),t(153,`
                    `),a(),t(154,`
                `),a(),t(155,`
                `),n(156,"tbody"),t(157,`
                    `),B(158,se,3,7,null,null,R),n(160,"tr"),t(161,`
                        `),o(162,"td"),t(163,`
                        `),o(164,"td"),t(165,`
                        `),n(166,"td",34),t(167,`
                            `),o(168,"span",35),t(169,`
                        `),a(),t(170,`
                        `),n(171,"td",34),t(172,`
                            `),n(173,"u"),t(174),a(),t(175,`
                        `),a(),t(176,`
                        `),n(177,"td",34),t(178,`
                            `),n(179,"u"),t(180),a(),t(181,`
                        `),a(),t(182,`
                        `),n(183,"td",34),t(184,`
                            `),n(185,"u"),t(186),a(),t(187,`
                        `),a(),t(188,`
                        `),o(189,"td"),t(190,`
                        `),o(191,"td"),t(192,`
                        `),o(193,"td"),t(194,`
                    `),a(),t(195,`
                `),a(),t(196,`
            `),a(),t(197,`
        `),a(),t(198,`
    `),a(),t(199,`
`)),i&2){let e=x();s(13),d(`
                    `,e.student.name,`
                `),s(5),d(`
                    `,e.student.login,`
                `),s(5),d(`
                    `,e.student.email,`
                `),s(5),d(`
                    `,e.student.visibleRegistrationNumber,`
                `),s(4),p(e.isTestExam?-1:32),s(),p(e.isTestExam?33:-1),s(13),d("",_(47,22,"artemisApp.studentExams.started"),":"),s(2),d(`
                        `,_(49,24,e.studentExam.started?"global.generic.yes":"global.generic.no"),`
                    `),s(6),d("",_(55,26,"artemisApp.studentExams.submitted"),":"),s(2),d(`
                        `,_(57,28,e.studentExam.submitted?"global.generic.yes":"global.generic.no"),`
                    `),s(6),d("",_(63,30,"artemisApp.studentExams.submissionDate"),":"),s(2),d(`
                        `,L(65,32,e.studentExam.submissionDate,"long",!0),`
                    `),s(3),p(e.gradingScaleExists?67:-1),s(),p(e.gradeAfterBonus!==void 0?68:-1),s(),p(e.gradingScaleExists&&!e.isBonus?69:-1),s(2),u("ngbTooltip",e.isExamOver?"":_(72,36,"artemisApp.studentExamDetail.disabledChangeSubmissionStateButtonExplanation")),s(3),p(e.course!=null&&e.course.isAtLeastInstructor?74:-1),s(14),p(e.course!=null&&e.course.isAtLeastInstructor?88:-1),s(8),p(e.studentExam.examSessions&&e.studentExam.examSessions.length>0?96:97),s(62),M(e.studentExam.exercises),s(16),d(" ",e.achievedTotalPoints," "),s(6),d(" ",e.maxTotalPoints," "),s(6),d(" ",e.bonusTotalPoints," ")}}var We=(()=>{class i{route=b(K);studentExamService=b(St);alertService=b(xt);modalService=b(st);examId;courseId;studentExam;achievedPointsPerExercise;course;student;isSavingWorkingTime=!1;isTestRun=!1;isTestExam;maxTotalPoints=0;achievedTotalPoints=0;bonusTotalPoints=0;isSaving=!1;gradingScaleExists=!1;grade;gradeAfterBonus;isBonus=!1;passed=!1;faSave=mt;workingTimeSeconds=0;componentActive=!0;ngOnInit(){N([this.route.data,this.route.params,this.route.url]).pipe(W(()=>this.componentActive)).subscribe(([e,m,l])=>{this.examId=m.examId,this.courseId=m.courseId;let S=e.studentExam;this.setStudentExamWithGrade(S),this.isTestExam=S.studentExam?.exam?.testExam||!1,this.isTestRun=l[1]?.toString()==="test-runs"})}ngOnDestroy(){this.componentActive=!1}saveWorkingTime(){this.isSavingWorkingTime=!0,this.studentExamService.updateWorkingTime(this.courseId,this.studentExam.exam.id,this.studentExam.id,this.workingTimeSeconds).subscribe({next:e=>{e.body&&this.setStudentExam(e.body),this.isSavingWorkingTime=!1,this.alertService.success("artemisApp.studentExamDetail.saveWorkingTimeSuccessful")},error:()=>{this.alertService.error("artemisApp.studentExamDetail.workingTimeCouldNotBeSaved"),this.isSavingWorkingTime=!1}})}setStudentExamWithGrade(e){if(!e.studentExam)throw new Error("studentExamWithGrade.studentExam is undefined");let m=e.studentExam;m.examSessions&&m.examSessions.sort((l,S)=>l.id-S.id),this.setStudentExam(m),this.achievedPointsPerExercise=e.achievedPointsPerExercise,this.maxTotalPoints=e.maxPoints??0,this.achievedTotalPoints=e.studentResult.overallPointsAchieved??0,this.bonusTotalPoints=e.maxBonusPoints??0,this.setExamGrade(e)}setExamGrade(e){e?.studentResult?.overallGrade!=null&&(this.gradingScaleExists=!0,this.grade=e.studentResult.overallGrade,this.gradeAfterBonus=e.studentResult.gradeWithBonus?.finalGrade?.toString(),this.passed=!!e.studentResult.hasPassed,this.isBonus=e.gradeType===_t.BONUS)}setStudentExam(e){this.studentExam=e,this.student=e.user,this.course=e.exam.course,this.workingTimeSeconds=e.workingTime??0,e.exercises?.forEach(m=>this.initExercise(m))}get gradeExplanation(){return this.isBonus?"artemisApp.studentExams.bonus":this.gradeAfterBonus!=null?"artemisApp.studentExams.gradeBeforeBonus":"artemisApp.studentExams.grade"}initExercise(e){e.studentParticipations?.[0]?.submissions?.[0]&&(e.studentParticipations[0].submissions[0].results=e.studentParticipations[0].results,ut(e?.studentParticipations[0].submissions?.[0],pt(e?.studentParticipations[0].submissions?.[0])))}get isWorkingTimeFormDisabled(){return this.isSavingWorkingTime||this.isTestRun&&!!this.studentExam.submitted||!this.studentExam.exam}get individualEndDate(){return P(this.studentExam.exam.startDate).add(this.workingTimeSeconds,"seconds")}get isExamOver(){return this.studentExam.exam?P(this.studentExam.exam.startDate).add(this.studentExam.workingTime,"seconds").add(this.studentExam.exam.gracePeriod,"seconds").isBefore(P()):!1}toggle(){this.isSaving=!0,this.studentExam.exam&&this.studentExam.exam.id&&this.studentExamService.toggleSubmittedState(this.courseId,this.studentExam.exam.id,this.studentExam.id,this.studentExam.submitted).subscribe({next:e=>{e.body&&(this.studentExam.submissionDate=e.body.submissionDate,this.studentExam.submitted=e.body.submitted),this.alertService.success("artemisApp.studentExamDetail.toggleSuccessful"),this.isSaving=!1},error:()=>{this.alertService.error("artemisApp.studentExamDetail.toggleFailed"),this.isSaving=!1}})}openConfirmationModal(e){this.modalService.open(e).result.then(m=>{m==="confirm"&&this.toggle()})}static \u0275fac=function(m){return new(m||i)};static \u0275cmp=D({type:i,selectors:[["jhi-student-exam-detail"]],decls:12,vars:2,consts:[["toggleSubmitPopUp",""],["form","ngForm"],[1,"d-flex","pb-3","border-bottom"],[1,"d-flex","flex-column","justify-content-center"],["jhiTranslate","artemisApp.studentExamDetail.studentTestExam",1,"mb-0",3,"translateValues"],["jhiTranslate","artemisApp.studentExamDetail.testRun",1,"mb-0",3,"translateValues"],["jhiTranslate","artemisApp.studentExamDetail.studentExam",1,"mb-0",3,"translateValues"],[1,"mb-3"],["jhiTranslate","artemisApp.studentExamDetail.student"],[1,"list-without-numeration","ms-4"],["jhiTranslate","artemisApp.studentExamDetail.name"],["jhiTranslate","artemisApp.studentExamDetail.login"],["jhiTranslate","artemisApp.studentExamDetail.email"],["jhiTranslate","artemisApp.studentExamDetail.matriculationNumber"],["jhiTranslate","artemisApp.studentExams.participationStatus"],[1,"me-2","ms-4"],[1,"list-without-numeration"],["placement","right",1,"d-inline",3,"ngbTooltip"],["jhiTranslate","artemisApp.studentExams.summary"],[1,"d-flex","flex-row"],[1,"mb-3","mt-3"],["jhiTranslate","artemisApp.studentExams.examSessions"],["jhiTranslate","artemisApp.studentExamDetail.exercises"],[1,"table","table-striped"],[1,"d-md-table-cell"],["jhiTranslate","artemisApp.studentExamDetail.id"],["jhiTranslate","artemisApp.studentExamDetail.type"],["jhiTranslate","artemisApp.studentExamDetail.title"],["jhiTranslate","artemisApp.studentExamDetail.result"],["jhiTranslate","artemisApp.exam.examSummary.points.maxPoints"],["jhiTranslate","artemisApp.exam.examSummary.points.maxBonus"],["jhiTranslate","artemisApp.studentExamDetail.reviewer"],["jhiTranslate","artemisApp.studentExamDetail.hasComplaint"],["jhiTranslate","artemisApp.assessment.dashboard.columns.action"],[1,"align-middle"],["jhiTranslate","artemisApp.examScores.overallPointsColumn",1,"text-decoration-underline"],["jhiTranslate","artemisApp.studentExams.workingTime"],[1,"ms-4",3,"ngSubmit"],["name","workingTime","durationLabelText","artemisApp.studentExams.setWorkingTime","relativeLabelText","artemisApp.studentExams.setWorkingTimeRelative",3,"ngModelChange","relative","disabled","ngModel","exam"],["id","save","type","submit",1,"btn","btn-primary","mt-2",3,"disabled"],[3,"icon"],["jhiTranslate","entity.action.save"],["jhiTranslate","artemisApp.studentExams.usedWorkingTime"],[3,"studentExam"],["type","button","id","adjust-submitted-state-button",1,"btn","btn-danger",3,"click","disabled"],["jhiTranslate","entity.action.toggleToSubmitted"],["jhiTranslate","entity.action.toggleToUnsubmitted"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],["jhiTranslate","artemisApp.studentExams.confirmDialog.question"],[1,"modal-footer"],["type","button",1,"btn","btn-danger",3,"click"],["jhiTranslate","artemisApp.studentExams.confirmDialog.titleToUnsubmitted"],["jhiTranslate","artemisApp.studentExams.confirmDialog.titleToSubmitted"],["jhiTranslate","artemisApp.studentExams.confirmDialog.submitText"],["jhiTranslate","artemisApp.studentExams.confirmDialog.unSubmitText"],["jhiTranslate","artemisApp.studentExams.confirmDialog.warningRemove"],["jhiTranslate","artemisApp.studentExams.confirmDialog.submit"],["jhiTranslate","artemisApp.studentExams.confirmDialog.unsubmit"],[1,"btn","btn-primary","summery","ms-4",3,"routerLink"],["jhiTranslate","artemisApp.exam.summary"],[3,"ngbTooltip","disableTooltip"],[1,"btn","btn-primary","mb-auto","ms-5",3,"routerLink","disabled"],["jhiTranslate","artemisApp.examTimeline.breadcrumb"],[1,"exam-session-table-wrapper"],["jhiTranslate","artemisApp.examSession.id"],["jhiTranslate","artemisApp.examSession.sessionToken"],[1,"user-agent"],["jhiTranslate","artemisApp.examSession.userAgent"],["jhiTranslate","artemisApp.examSession.browserFingerprintHash"],["jhiTranslate","artemisApp.examSession.instanceId"],["jhiTranslate","artemisApp.examSession.ipAddress"],["jhiTranslate","artemisApp.examSession.createdDate"],["jhiTranslate","artemisApp.studentExamDetail.noSessions",1,"ms-4"],["jhi-student-exam-detail-table-row","",3,"course","examId","exercise","busy","isTestRun","studentExam","achievedPointsPerExercise"]],template:function(m,l){m&1&&(n(0,"div",2),t(1,`
    `),n(2,"div",3),t(3,`
        `),c(4,Mt,4,4)(5,Ot,4,4)(6,Lt,4,4),a(),t(7,`
`),a(),t(8,`
`),o(9,"br"),t(10,`
`),c(11,oe,200,38)),m&2&&(s(4),p(l.isTestExam?4:l.isTestRun?5:6),s(7),p(l.student&&l.studentExam?11:-1))},dependencies:[j,at,nt,X,tt,it,et,gt,k,ft,ot,I,ht,ct,w],styles:[".list-without-numeration[_ngcontent-%COMP%]{list-style-type:none;padding-left:0}.working-time-form[_ngcontent-%COMP%]{width:fit-content}.form-number-input[_ngcontent-%COMP%]{width:100px}.exam-session-table-wrapper[_ngcontent-%COMP%]{max-width:100%;overflow-x:auto}.exam-session-table-wrapper[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{white-space:nowrap}.exam-session-table-wrapper[_ngcontent-%COMP%]   .user-agent[_ngcontent-%COMP%]{min-width:350px}.tooltip-wrapper[_ngcontent-%COMP%]{display:inline-block;margin:50px}.tooltip-wrapper[_ngcontent-%COMP%]   .btn[disabled][_ngcontent-%COMP%]{pointer-events:none}.tooltip-wrapper.disabled[_ngcontent-%COMP%]{cursor:not-allowed}"]})}return i})();export{We as StudentExamDetailComponent};
//# sourceMappingURL=student-exam-detail.component-2USKW27X.js.map
