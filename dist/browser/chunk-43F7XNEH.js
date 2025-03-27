import{a as q}from"./chunk-XFUIAIWN.js";import{a as W}from"./chunk-R7WDKVQG.js";import{a as z}from"./chunk-TRIJ3OLY.js";import{a as k}from"./chunk-ZR3WKJ5U.js";import{a as U}from"./chunk-GRLLGFUW.js";import{a as E,b as F}from"./chunk-PTO7UATL.js";import{a as D}from"./chunk-FLZTDUOG.js";import{a as w}from"./chunk-2QXIMOEO.js";import{f as y}from"./chunk-DRMCDU75.js";import{a as $}from"./chunk-A5PTZAPN.js";import{a as j}from"./chunk-K3W6YFKH.js";import{Tc as R}from"./chunk-Z4VHWOB5.js";import{a as L}from"./chunk-U54OSGNH.js";import{f as K}from"./chunk-M6Z6DKZQ.js";import{Bd as _,Db as o,Ea as G,Oc as g,Rc as M,Tb as I,Zb as x,dd as e,ed as N,fd as S,kc as B,mc as v,sc as u,uc as b,vc as A,wb as P,wc as H,xc as a,yc as n,yd as c,z as C,zc as l,zd as f}from"./chunk-5LC5EQRR.js";function J(i){let m=Number(y(i,"courseId")),t,d=!1,s=y(i,"examId");s&&(t=Number(s),d=!0);let r=!!i.snapshot.data.forBonus,h=i.snapshot.queryParams.grade;return{courseId:m,examId:t,forBonus:r,isExam:d,studentGradeOrBonusPointsOrGradeBonus:h}}function Q(i,m){i&1&&(e(0,`
                        `),l(1,"th",5),e(2,`
                    `))}function V(i,m){i&1&&(e(0,`
                            `),a(1,"td"),e(2,"\u2014"),n(),e(3,`
                        `))}function X(i,m){if(i&1&&(e(0,`
                    `),a(1,"tr"),e(2,`
                        `),a(3,"td"),e(4),l(5,"jhi-help-icon",6),e(6,`
                        `),n(),e(7,`
                        `),e(8,`
                        `),a(9,"td"),e(10,"\u2014"),n(),e(11,`
                        `),x(12,V,4,0),n(),e(13,`
                `)),i&2){let t=g();o(),v("highlighted",t.plagiarismGrade===t.studentGradeOrBonusPointsOrGradeBonus),o(3),S(`
                            `,t.plagiarismGrade,`
                            `),o(8),u(t.hasPointsSet?12:-1)}}function Y(i,m){i&1&&(e(0,`
                            `),a(1,"td"),e(2,"\u2014"),n(),e(3,`
                        `))}function Z(i,m){if(i&1&&(e(0,`
                    `),a(1,"tr"),e(2,`
                        `),a(3,"td"),e(4),l(5,"jhi-help-icon",7),e(6,`
                        `),n(),e(7,`
                        `),e(8,`
                        `),a(9,"td"),e(10,"\u2014"),n(),e(11,`
                        `),x(12,Y,4,0),n(),e(13,`
                `)),i&2){let t=g();o(),v("highlighted",t.noParticipationGrade===t.studentGradeOrBonusPointsOrGradeBonus),o(3),S(`
                            `,t.noParticipationGrade,`
                            `),o(8),u(t.hasPointsSet?12:-1)}}function ee(i,m){if(i&1&&(e(0,`
                            `),a(1,"td"),e(2,`
                                `),l(3,"span",8),c(4,"gradeStepBounds"),c(5,"safeHtml"),e(6,`
                            `),n(),e(7,`
                        `)),i&2){let t=g(),d=t.$implicit,s=t.$index,r=t.$count,h=g();o(3),B("innerHTML",f(5,5,_(4,1,d,h.GradeEditMode.POINTS,s===r-1)),P)}}function te(i,m){if(i&1&&(e(0,`
                    `),a(1,"tr"),e(2,`
                        `),a(3,"td"),e(4),n(),e(5,`
                        `),a(6,"td"),e(7,`
                            `),l(8,"span",8),c(9,"gradeStepBounds"),c(10,"safeHtml"),e(11,`
                        `),n(),e(12,`
                        `),x(13,ee,8,7),n(),e(14,`
                `)),i&2){let t=m.$implicit,d=m.$index,s=m.$count,r=g();o(),v("highlighted",t.gradeName===r.studentGradeOrBonusPointsOrGradeBonus||+t.gradeName==+r.studentGradeOrBonusPointsOrGradeBonus),o(3),N(t.gradeName),o(4),B("innerHTML",f(10,9,_(9,5,t,r.GradeEditMode.PERCENTAGE,d===s-1)),P),o(5),u(r.hasPointsSet?13:-1)}}var _e=(()=>{class i{route=G(K);gradingSystemService=G(U);bonusService=G(W);scoresStorageService=G($);faChevronLeft=R;GradeEditMode=k;studentGradeOrBonusPointsOrGradeBonus;forBonus;plagiarismGrade;noParticipationGrade;isExam=!1;courseId;examId;title;gradeSteps=[];isBonus=!1;hasPointsSet=!1;ngOnInit(){let{courseId:t,examId:d,forBonus:s,isExam:r,studentGradeOrBonusPointsOrGradeBonus:h}=J(this.route);this.courseId=t,this.examId=d,this.forBonus=this.forBonus||s,this.isExam=r,this.studentGradeOrBonusPointsOrGradeBonus=this.studentGradeOrBonusPointsOrGradeBonus||h,this.findGradeSteps(this.courseId,this.examId).subscribe(p=>{if(p&&(this.title=p.title,this.isBonus=p.gradeType===F.BONUS,this.gradeSteps=this.gradingSystemService.sortGradeSteps(p.gradeSteps),this.plagiarismGrade=p.plagiarismGrade,this.noParticipationGrade=p.noParticipationGrade,p.maxPoints!==void 0))if(this.isExam)this.gradingSystemService.setGradePoints(this.gradeSteps,p.maxPoints);else{let T=0,O=this.scoresStorageService.getStoredTotalScores(this.courseId);O&&(T=O[q.REACHABLE_POINTS]),this.gradingSystemService.setGradePoints(this.gradeSteps,T)}}),this.hasPointsSet=this.gradingSystemService.hasPointsSet(this.gradeSteps)}findGradeSteps(t,d){return this.forBonus?this.bonusService.findBonusForExam(t,d,!0).pipe(C(s=>{let r=s.body?.sourceGradingScale;if(r)return{title:this.gradingSystemService.getGradingScaleTitle(r),gradeType:r.gradeType,gradeSteps:r.gradeSteps,maxPoints:this.gradingSystemService.getGradingScaleMaxPoints(r),plagiarismGrade:r.plagiarismGrade||E.DEFAULT_PLAGIARISM_GRADE,noParticipationGrade:r.noParticipationGrade||E.DEFAULT_NO_PARTICIPATION_GRADE,presentationsNumber:r.presentationsNumber,presentationsWeight:r.presentationsWeight}})):this.gradingSystemService.findGradeSteps(t,d)}static \u0275fac=function(d){return new(d||i)};static \u0275cmp=I({type:i,selectors:[["jhi-grade-key-table"]],inputs:{studentGradeOrBonusPointsOrGradeBonus:"studentGradeOrBonusPointsOrGradeBonus",forBonus:"forBonus"},decls:53,vars:13,consts:[[1,"table","table-striped","w-auto","mx-auto"],[3,"jhiTranslate"],["jhiTranslate","artemisApp.exam.examSummary.interval"],["jhiTranslate","artemisApp.gradingSystem.overview.intervals.title"],[2,"font-weight","bold"],["jhiTranslate","artemisApp.exam.examSummary.intervalPoints"],["placement","auto","text","artemisApp.gradingSystem.plagiarismGradeHelp"],["placement","auto","text","artemisApp.gradingSystem.noParticipationGradeHelp"],[3,"innerHTML"]],template:function(d,s){d&1&&(a(0,"div"),e(1,`
    `),a(2,"div"),e(3,`
        `),a(4,"table",0),e(5,`
            `),a(6,"thead"),e(7,`
                `),a(8,"tr"),e(9,`
                    `),l(10,"th",1),e(11,`
                    `),l(12,"th",2),e(13,`
                    `),x(14,Q,3,0),n(),e(15,`
            `),n(),e(16,`
            `),a(17,"tbody"),e(18,`
                `),x(19,X,14,4)(20,Z,14,4),A(21,te,15,11,null,null,b),n(),e(23,`
        `),n(),e(24,`
    `),n(),e(25,`
    `),a(26,"div"),e(27,`
        `),l(28,"h6",3),e(29,`
        `),a(30,"ul"),e(31,`
            `),a(32,"li")(33,"span",4),e(34,"[a, b)"),n(),e(35),c(36,"artemisTranslate"),n(),e(37,`
            `),a(38,"li")(39,"span",4),e(40,"(a, b]"),n(),e(41),c(42,"artemisTranslate"),n(),e(43,`
            `),a(44,"li")(45,"span",4),e(46,"[a, b]"),n(),e(47),c(48,"artemisTranslate"),n(),e(49,`
        `),n(),e(50,`
    `),n(),e(51,`
`),n(),e(52,`
`)),d&2&&(o(10),M("jhiTranslate",s.isBonus?"artemisApp.exam.examSummary.bonus":"artemisApp.exam.examSummary.grade"),o(4),u(s.hasPointsSet?14:-1),o(5),u(s.plagiarismGrade===s.studentGradeOrBonusPointsOrGradeBonus?19:-1),o(),u(s.noParticipationGrade===s.studentGradeOrBonusPointsOrGradeBonus?20:-1),o(),H(s.gradeSteps),o(14),S(": ",f(36,7,"artemisApp.gradingSystem.overview.intervals.leftInclusiveRightExclusive"),""),o(6),S(": ",f(42,9,"artemisApp.gradingSystem.overview.intervals.leftExclusiveRightInclusive"),""),o(6),S(": ",f(48,11,"artemisApp.gradingSystem.overview.intervals.bothInclusive"),""))},dependencies:[L,j,z,D,w],styles:[".highlighted[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:#0079bf;color:#fff;font-weight:700}"]})}return i})();export{J as a,_e as b};
//# sourceMappingURL=chunk-43F7XNEH.js.map
