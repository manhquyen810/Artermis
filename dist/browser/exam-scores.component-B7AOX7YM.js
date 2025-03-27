import{b as Ft,c as At,d as Tt,e as It}from"./chunk-ESAZGDZN.js";import{b as ae}from"./chunk-7WZTW6CZ.js";import{a as St,c as Et,d as Ct,e as ne,f as vt,g as _t,h as ft}from"./chunk-RCSXKSAO.js";import{a as xt,b as gt,c as pt,d as ht,g as ee,h as te,i as ie,j as ue,k as xe,l as ge,m as pe,r as he,s as Se,t as Ee,u as Ce,v as ve,w as _e,x as fe,y as Fe}from"./chunk-36ZQVNBH.js";import{a as lt}from"./chunk-GRLLGFUW.js";import{a as ct,b as mt,c as ut}from"./chunk-XUG3TIT6.js";import{b as dt}from"./chunk-PTO7UATL.js";import{a as G,b as _,c as N}from"./chunk-CWEZ7BG4.js";import{b as at}from"./chunk-2UXGFGK3.js";import{d as H}from"./chunk-O4VJ5OXY.js";import{b as ot,c as rt,g as st}from"./chunk-BDII35IB.js";import"./chunk-LARBQRTJ.js";import{a as nt}from"./chunk-OTCBNILH.js";import{a as qe}from"./chunk-BIK4CL5A.js";import{a as Qe,b as Ze}from"./chunk-VRAVBLUK.js";import{b as Ye}from"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import{a as Je}from"./chunk-2QXIMOEO.js";import"./chunk-2CUFQLAH.js";import{a as tt,e as it}from"./chunk-DRMCDU75.js";import{a as et}from"./chunk-VL2AJDYR.js";import{a as Z}from"./chunk-2CSD5TLZ.js";import"./chunk-ZM53HDCE.js";import"./chunk-Z6NSEM73.js";import{d as Ue}from"./chunk-AR57MWOI.js";import"./chunk-A5PTZAPN.js";import"./chunk-AU6UEH3U.js";import"./chunk-FGAONQTL.js";import"./chunk-HQ6UGNQX.js";import"./chunk-ZLJ76G5I.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import{c as We}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import{f as R}from"./chunk-CT44YL7Q.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import"./chunk-WA5GEAJB.js";import{a as He}from"./chunk-VK7JPHFE.js";import"./chunk-5GXY5RYT.js";import{a as q}from"./chunk-K3W6YFKH.js";import{c as $e}from"./chunk-JXJXC4DZ.js";import{d as Xe,f as Ke}from"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import{l as ke}from"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Ba as Be,Oc as ze,Qa as Me,cc as we,wd as je}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import{a as Le}from"./chunk-NOBD5HSR.js";import{a as Q}from"./chunk-U54OSGNH.js";import{f as J,i as Ve}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{E as Oe,M as me,s as De}from"./chunk-IOA4DPXY.js";import{Db as n,Dc as W,Ea as I,Ed as Ge,F as be,Id as Ne,Ma as P,Mc as L,Na as y,Oc as l,P as se,Rc as U,Tb as Y,Za as de,Zb as h,cd as Re,dd as t,ed as f,fd as E,gd as F,hd as B,kc as g,ld as Pe,md as le,nd as ye,qd as A,rd as j,s as re,sc as u,sd as ce,vc as w,wc as z,xc as r,yc as s,yd as O,zc as m,zd as V}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var Nt=i=>({groupTitle:i}),Dt=i=>[i,100];function Ot(i,d){if(i&1&&(t(0,`
                `),r(1,"b"),t(2),s(),t(3,`
                `),m(4,"br"),t(5,`
                `),r(6,"span"),t(7),O(8,"artemisTranslate"),s(),t(9,`
            `)),i&2){let e=d.model,a=l();n(2),f(e.name),n(5),B(`
                    `,V(8,4,"artemisApp.examScores.averagePointsTooltip"),": ",a.lookupAbsoluteValue(e.name)," (",a.roundAndPerformLocalConversion(e.value),`%)
                `)}}var bt=(()=>{class i{navigationUtilService=I(tt);activatedRoute=I(J);localeConversionService=I(Z);averageScores=de.required();course=de.required();courseId;examId;xAxisTickFormatting=at;ngxData=[];ngxColor={name:"exercise groups",selectable:!0,group:ot.Ordinal,domain:[]};xScaleMax=100;lookup={};ngOnInit(){this.activatedRoute.params.subscribe(e=>{this.courseId=+e.courseId,this.examId=+e.examId}),this.initializeChart()}initializeChart(){this.lookup[this.averageScores().title]={absoluteValue:this.averageScores().averagePoints};let e=this.averageScores().averagePercentage??0;this.ngxData.push({name:this.averageScores().title,value:e}),this.ngxColor.domain.push(this.determineColor(!0,e)),this.xScaleMax=this.xScaleMax>e?this.xScaleMax:e,this.averageScores().exerciseResults.forEach(a=>{let o=a.averagePercentage??0;this.xScaleMax=this.xScaleMax>o?this.xScaleMax:o,this.ngxData.push({name:a.exerciseId+" "+a.title,value:o}),this.lookup[a.exerciseId+" "+a.title]={absoluteValue:a.averagePoints??0,exerciseId:a.exerciseId,exerciseType:a.exerciseType},this.ngxColor.domain.push(this.determineColor(!1,o))}),this.ngxData=[...this.ngxData]}roundAndPerformLocalConversion(e){return this.localeConversionService.toLocaleString(R(e,this.course()),this.course().accuracyOfScores)}navigateToExercise(e,a){it(this.navigationUtilService,this.courseId,this.examId,this.averageScores().exerciseGroupId,a,e,"scores")}lookupAbsoluteValue(e){return this.roundAndPerformLocalConversion(this.lookup[e].absoluteValue)}onSelect(e){let a=this.lookup[e.name].exerciseId,o=this.lookup[e.name].exerciseType;a&&o&&this.navigateToExercise(a,o)}determineColor(e,a){return a>=50?e?H.BLUE:H.DARK_BLUE:a>25?H.YELLOW:H.RED}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Y({type:i,selectors:[["jhi-exam-scores-average-scores-graph"]],inputs:{averageScores:[1,"averageScores"],course:[1,"course"]},decls:15,vars:13,consts:[["containerRef",""],["tooltipTemplate",""],[1,"row","d-flex","justify-content-center","mb-1"],[1,"col-md-8","col-11","align-items-center","px-0"],["jhiTranslate","artemisApp.examScores.exerciseGroupTitle",1,"text-center",3,"translateValues"],[3,"select","roundEdges","view","results","scheme","xAxis","yAxis","xScaleMax","xAxisTickFormatting"]],template:function(a,o){if(a&1){let x=W();r(0,"div",2),t(1,`
    `),r(2,"div",3,0),t(4,`
        `),m(5,"h6",4),t(6,`
        `),r(7,"ngx-charts-bar-horizontal",5),L("select",function(p){return P(x),y(o.onSelect(p))}),t(8,`
            `),h(9,Ot,10,6,"ng-template",null,1,Ge),t(11,`
        `),s(),t(12,`
    `),s(),t(13,`
`),s(),t(14,`
`)}if(a&2){let x=Re(3);n(5),g("translateValues",j(9,Nt,o.averageScores().title)),n(2),g("roundEdges",!1)("view",j(11,Dt,x.offsetWidth))("results",o.ngxData)("scheme",o.ngxColor)("xAxis",!0)("yAxis",!0)("xScaleMax",o.xScaleMax)("xAxisTickFormatting",o.xAxisTickFormatting)}},dependencies:[Q,st,rt,q],encapsulation:2})}return i})();var Vt=(i,d)=>["/course-management",i,"exams",d,"exercise-groups"],Lt=(i,d)=>["/course-management",i,"exams",d,"students"],Rt=i=>({median:i}),Bt=()=>({"border-left":"3px solid grey"}),M=()=>({}),k=()=>({"border-left":"3px solid lightgrey"}),Mt=i=>({threshold:i}),Pt=(i,d)=>d.id,wt=(i,d)=>d.userId,yt=(i,d)=>d.exerciseGroupId,zt=(i,d)=>d.exerciseId;function jt(i,d){i&1&&(t(0,`
        `),r(1,"div",0),t(2,`
            `),r(3,"div",1),t(4,`
                `),r(5,"span",2),t(6,"Loading..."),s(),t(7,`
            `),s(),t(8,`
        `),s(),t(9,`
    `))}function kt(i,d){if(i&1&&(t(0,`
                `),r(1,"div",3),t(2,`
                    `),m(3,"fa-icon",4),t(4,`
                    `),m(5,"span",5),t(6,`
                `),s(),t(7,`
            `)),i&2){let e=l(2);n(3),g("icon",e.faExclamationTriangle)}}function $t(i,d){i&1&&(t(0,`
                `),r(1,"div",6),t(2,`
                    `),m(3,"span",7),t(4,`
                `),s(),t(5,`
            `))}function Wt(i,d){if(i&1&&(t(0,`
        `),r(1,"div"),t(2,`
            `),h(3,kt,8,1)(4,$t,6,0),s(),t(5,`
    `)),i&2){let e=l();n(3),u(e.exerciseGroups?-1:3),n(),u(e.studentResults?-1:4)}}function Ut(i,d){if(i&1&&(t(0,`
                    `),r(1,"h2",51),t(2),s(),t(3,`
                `)),i&2){let e=l(2);n(2),E(`
                        `,e.examScoreDTO.title,`
                    `)}}function Ht(i,d){if(i&1&&(t(0,`
                    `),r(1,"h6"),t(2),O(3,"artemisTranslate"),s(),t(4,`
                `)),i&2){let e=l(2);n(2),F("",V(3,2,"artemisApp.examScores.maxPoints"),": ",e.localize(e.examScoreDTO.maxPoints),",")}}function Xt(i,d){i&1&&(t(0,`
                                `),m(1,"th",52),t(2,`
                            `))}function Kt(i,d){i&1&&(t(0,`
                                `),m(1,"th",53),t(2,`
                            `))}function Yt(i,d){i&1&&(t(0,`
                                `),m(1,"th",54),t(2,`
                            `))}function Jt(i,d){i&1&&(t(0,`
                                `),m(1,"th",55),t(2,`
                            `))}function qt(i,d){if(i&1&&(t(0,`
                    `),r(1,"thead",22),t(2,`
                        `),r(3,"tr"),t(4,`
                            `),m(5,"th"),t(6,`
                            `),h(7,Xt,3,0)(8,Kt,3,0)(9,Yt,3,0)(10,Jt,3,0),s(),t(11,`
                    `),s(),t(12,`
                `)),i&2){let e=l(2);n(7),u(e.gradingScaleExists&&!e.isBonus?7:-1),n(),u(e.gradingScaleExists&&!e.isBonus?8:-1),n(),u(!e.gradingScaleExists||e.isBonus?9:-1),n(),u(!e.gradingScaleExists||e.isBonus?10:-1)}}function Qt(i,d){i&1&&(t(0,`
                            `),m(1,"th",56),t(2,`
                        `))}function Zt(i,d){i&1&&(t(0,`
                            `),m(1,"th",57),t(2,`
                        `))}function ei(i,d){if(i&1&&(t(0,`
                            `),m(1,"th",58),t(2,`
                        `)),i&2){let e=l(2);n(),g("ngStyle",!e.gradingScaleExists||e.isBonus?A(1,Bt):A(2,M))}}function ti(i,d){i&1&&(t(0,`
                            `),m(1,"th",24),t(2,`
                        `))}function ii(i,d){if(i&1&&(t(0,`
                            `),r(1,"td"),t(2),s(),t(3,`
                        `)),i&2){let e=l(2);n(2),F(`
                                `,e.aggregatedExamResults.noOfExamsFilteredForPassed,`
                                (`,e.tableState.relativeAmountOfPassedExams,`%)
                            `)}}function ni(i,d){i&1&&(t(0,`
                            `),m(1,"td",59),t(2,`
                        `))}function ai(i,d){if(i&1&&(t(0,`
                            `),m(1,"td",60),t(2,`
                        `)),i&2){let e=l(2);n(),g("ngStyle",!e.gradingScaleExists||e.isBonus?A(1,k):A(2,M))}}function oi(i,d){i&1&&(t(0,`
                            `),m(1,"td"),t(2,`
                        `))}function ri(i,d){if(i&1&&(t(0,`
                            `),r(1,"td"),t(2),s(),t(3,`
                        `)),i&2){let e=l(2);n(2),F(`
                                `,e.aggregatedExamResults.meanPointsPassed!==null?e.roundAndPerformLocalConversion(e.aggregatedExamResults.meanPointsPassed):"-",`
                                (`,e.aggregatedExamResults.meanPointsRelativePassed!==null?e.roundAndPerformLocalConversion(e.aggregatedExamResults.meanPointsRelativePassed):"-",`
                                %)
                            `)}}function si(i,d){if(i&1&&(t(0,`
                            `),r(1,"td",59),t(2),s(),t(3,`
                        `)),i&2){let e=l(2);n(2),F(`
                                `,e.aggregatedExamResults.meanPointsPassedInFirstCorrection!==null?e.roundAndPerformLocalConversion(e.aggregatedExamResults.meanPointsPassedInFirstCorrection):"-",`
                                (`,e.aggregatedExamResults.meanPointsRelativePassedInFirstCorrection!==null?e.roundAndPerformLocalConversion(e.aggregatedExamResults.meanPointsRelativePassedInFirstCorrection):"-",`
                                %)
                            `)}}function di(i,d){if(i&1&&(t(0,`
                            `),r(1,"td",60),t(2),s(),t(3,`
                        `)),i&2){let e=l(2);n(),g("ngStyle",!e.gradingScaleExists||e.isBonus?A(3,k):A(4,M)),n(),F(`
                                `,e.tableState.averagePointsSubmittedInFirstCorrection,`
                                (`,e.tableState.averageScoreSubmittedInFirstCorrection,`%)
                            `)}}function li(i,d){if(i&1&&(t(0,`
                            `),r(1,"td"),t(2),s(),t(3,`
                        `)),i&2){let e=l(2);n(2),F(`
                                `,e.tableState.averagePointsTotalInFirstCorrection,`
                                (`,e.tableState.averageScoreTotal,`%)
                            `)}}function ci(i,d){if(i&1&&(t(0,`
                                `),r(1,"td"),t(2),s(),t(3,`
                            `)),i&2){let e=l(3);n(2),f(e.aggregatedExamResults.meanGradePassed!==null?e.aggregatedExamResults.meanGradePassed:"-")}}function mi(i,d){if(i&1&&(t(0,`
                                `),r(1,"td",59),t(2),s(),t(3,`
                            `)),i&2){let e=l(3);n(2),E(`
                                    `,e.aggregatedExamResults.meanGradePassedInFirstCorrection!==null?e.aggregatedExamResults.meanGradePassedInFirstCorrection:"-",`
                                `)}}function ui(i,d){if(i&1&&(t(0,`
                                `),r(1,"td",60),t(2),s(),t(3,`
                            `)),i&2){let e=l(3);n(),g("ngStyle",e.isBonus?A(2,k):A(3,M)),n(),E(`
                                    `,e.tableState.averageGradeSubmittedInFirstCorrection,`
                                `)}}function xi(i,d){if(i&1&&(t(0,`
                                `),r(1,"td"),t(2),s(),t(3,`
                            `)),i&2){let e=l(3);n(2),E(`
                                    `,e.tableState.averageGradeTotalInFirstCorrection,`
                                `)}}function gi(i,d){if(i&1&&(t(0,`
                        `),r(1,"tr"),t(2,`
                            `),m(3,"th",61),t(4,`
                            `),h(5,ci,4,1),r(6,"td"),t(7),s(),t(8,`
                            `),r(9,"td"),t(10),s(),t(11,`
                            `),h(12,mi,4,1)(13,ui,4,4)(14,xi,4,1),s(),t(15,`
                    `)),i&2){let e=l(2);n(3),U("jhiTranslate",e.isBonus?"artemisApp.examScores.averageBonusColumn":"artemisApp.examScores.averageGradeColumn"),n(2),u(e.isBonus?-1:5),n(2),f(e.tableState.averageGradeSubmitted),n(3),f(e.tableState.averageGradeTotal),n(2),u(e.hasSecondCorrectionAndStarted&&!e.isBonus?12:-1),n(),u(e.hasSecondCorrectionAndStarted?13:-1),n(),u(e.hasSecondCorrectionAndStarted?14:-1)}}function pi(i,d){if(i&1&&(t(0,`
                            `),r(1,"td"),t(2),s(),t(3,`
                        `)),i&2){let e=l(2);n(2),F(`
                                `,e.aggregatedExamResults.medianPassed!==null?e.roundAndPerformLocalConversion(e.aggregatedExamResults.medianPassed):"-",`
                                (`,e.aggregatedExamResults.medianRelativePassed!==null?e.roundAndPerformLocalConversion(e.aggregatedExamResults.medianRelativePassed):"-",`
                                %)
                            `)}}function hi(i,d){if(i&1&&(t(0,`
                            `),r(1,"td",59),t(2),s(),t(3,`
                        `)),i&2){let e=l(2);n(2),F(`
                                `,e.aggregatedExamResults.medianPassedInFirstCorrection!==null?e.roundAndPerformLocalConversion(e.aggregatedExamResults.medianPassedInFirstCorrection):"-",`
                                (`,e.aggregatedExamResults.medianRelativePassedInFirstCorrection!==null?e.roundAndPerformLocalConversion(e.aggregatedExamResults.medianRelativePassedInFirstCorrection):"-",`
                                %)
                            `)}}function Si(i,d){if(i&1&&(t(0,`
                            `),r(1,"td",60),t(2),s(),t(3,`
                        `)),i&2){let e=l(2);n(),g("ngStyle",!e.gradingScaleExists||e.isBonus?A(3,k):A(4,M)),n(),F(`
                                `,e.tableState.medianPointsSubmittedInFirstCorrection,`
                                (`,e.tableState.medianScoreSubmittedInFirstCorrection,`%)
                            `)}}function Ei(i,d){if(i&1&&(t(0,`
                            `),r(1,"td"),t(2),s(),t(3,`
                        `)),i&2){let e=l(2);n(2),F(`
                                `,e.tableState.medianPointsTotalInFirstCorrection,`
                                (`,e.tableState.medianScoreTotalInFirstCorrection,`%)
                            `)}}function Ci(i,d){if(i&1&&(t(0,`
                                `),r(1,"td"),t(2),s(),t(3,`
                            `)),i&2){let e=l(3);n(2),f(e.aggregatedExamResults.medianGradePassed!==null?e.aggregatedExamResults.medianGradePassed:"-")}}function vi(i,d){if(i&1&&(t(0,`
                                `),r(1,"td",59),t(2),s(),t(3,`
                            `)),i&2){let e=l(3);n(2),E(`
                                    >`,e.aggregatedExamResults.medianGradePassedInFirstCorrection!==null?e.aggregatedExamResults.medianGradePassedInFirstCorrection:"-",`
                                `)}}function _i(i,d){if(i&1&&(t(0,`
                                `),r(1,"td",60),t(2),s(),t(3,`
                            `)),i&2){let e=l(3);n(),g("ngStyle",e.isBonus?A(2,k):A(3,M)),n(),E(`
                                    `,e.tableState.medianGradeSubmittedInFirstCorrection,`
                                `)}}function fi(i,d){if(i&1&&(t(0,`
                                `),r(1,"td"),t(2),s(),t(3,`
                            `)),i&2){let e=l(3);n(2),E(`
                                    `,e.tableState.medianGradeTotalInFirstCorrection,`
                                `)}}function Fi(i,d){if(i&1&&(t(0,`
                        `),r(1,"tr"),t(2,`
                            `),m(3,"th",61),t(4,`
                            `),h(5,Ci,4,1),r(6,"td"),t(7),s(),t(8,`
                            `),r(9,"td"),t(10),s(),t(11,`
                            `),h(12,vi,4,1)(13,_i,4,4)(14,fi,4,1),s(),t(15,`
                    `)),i&2){let e=l(2);n(3),U("jhiTranslate",e.isBonus?"artemisApp.examScores.medianBonusColumn":"artemisApp.examScores.medianGradeColumn"),n(2),u(e.isBonus?-1:5),n(2),f(e.tableState.medianGradeSubmitted),n(3),f(e.tableState.medianGradeTotal),n(2),u(!e.isBonus&&e.hasSecondCorrectionAndStarted?12:-1),n(),u(e.hasSecondCorrectionAndStarted?13:-1),n(),u(e.hasSecondCorrectionAndStarted?14:-1)}}function Ai(i,d){if(i&1&&(t(0,`
                            `),r(1,"td"),t(2),s(),t(3,`
                        `)),i&2){let e=l(2);n(2),E(`
                                `,e.aggregatedExamResults.standardDeviationPassed!==null?e.roundAndPerformLocalConversion(e.aggregatedExamResults.standardDeviationPassed):"-",`
                            `)}}function Ti(i,d){if(i&1&&(t(0,`
                            `),r(1,"td",59),t(2),s(),t(3,`
                        `)),i&2){let e=l(2);n(2),E(`
                                `,e.aggregatedExamResults.standardDeviationPassedInFirstCorrection!==null?e.roundAndPerformLocalConversion(e.aggregatedExamResults.standardDeviationPassedInFirstCorrection):"-",`
                            `)}}function Ii(i,d){if(i&1&&(t(0,`
                            `),r(1,"td",60),t(2),s(),t(3,`
                        `)),i&2){let e=l(2);n(),g("ngStyle",!e.gradingScaleExists||e.isBonus?A(2,k):A(3,M)),n(),E(`
                                `,e.tableState.standardDeviationSubmittedInFirstCorrection,`
                            `)}}function bi(i,d){if(i&1&&(t(0,`
                            `),r(1,"td"),t(2),s(),t(3,`
                        `)),i&2){let e=l(2);n(2),E(`
                                `,e.tableState.standardDeviationTotalInFirstCorrection,`
                            `)}}function Ri(i,d){if(i&1&&(t(0,`
                                `),r(1,"td"),t(2),s(),t(3,`
                            `)),i&2){let e=l(3);n(2),E(`
                                    `,e.aggregatedExamResults.standardGradeDeviationPassed!==null?e.roundAndPerformLocalConversion(e.aggregatedExamResults.standardGradeDeviationPassed):"-",`
                                `)}}function Pi(i,d){if(i&1&&(t(0,`
                                `),r(1,"td",59),t(2),s(),t(3,`
                            `)),i&2){let e=l(3);n(2),E(`
                                    `,e.aggregatedExamResults.standardGradeDeviationPassedInFirstCorrection!==null?e.roundAndPerformLocalConversion(e.aggregatedExamResults.standardGradeDeviationPassedInFirstCorrection):"-",`
                                `)}}function yi(i,d){if(i&1&&(t(0,`
                                `),r(1,"td",60),t(2),s(),t(3,`
                            `)),i&2){let e=l(3);n(),g("ngStyle",e.isBonus?A(2,k):A(3,M)),n(),E(`
                                    `,e.tableState.standardGradeDeviationSubmittedInFirstCorrection,`
                                `)}}function Gi(i,d){if(i&1&&(t(0,`
                                `),r(1,"td"),t(2),s(),t(3,`
                            `)),i&2){let e=l(3);n(2),E(`
                                    `,e.tableState.standardGradeDeviationTotalInFirstCorrection,`
                                `)}}function Ni(i,d){if(i&1&&(t(0,`
                        `),r(1,"tr"),t(2,`
                            `),m(3,"th",62),t(4,`
                            `),h(5,Ri,4,1),r(6,"td"),t(7),s(),t(8,`
                            `),r(9,"td"),t(10),s(),t(11,`
                            `),h(12,Pi,4,1)(13,yi,4,4)(14,Gi,4,1),s(),t(15,`
                    `)),i&2){let e=l(2);n(5),u(e.isBonus?-1:5),n(2),E(`
                                `,e.tableState.standardGradeDeviationSubmitted,`
                            `),n(3),E(`
                                `,e.tableState.standardGradeDeviationTotal,`
                            `),n(2),u(e.hasSecondCorrectionAndStarted&&!e.isBonus?12:-1),n(),u(e.hasSecondCorrectionAndStarted?13:-1),n(),u(e.hasSecondCorrectionAndStarted?14:-1)}}function Di(i,d){if(i&1){let e=W();t(0,`
                    `),r(1,"div",30),t(2,`
                        `),r(3,"input",63),L("change",function(){P(e);let o=l(2);return y(o.toggleMedian(o.medianType.PASSED))}),s(),t(4,`
                        `),m(5,"label",64),t(6,`
                    `),s(),t(7,`
                `)}if(i&2){let e=l(2);n(3),g("checked",e.showPassedMedian),n(2),g("translateValues",j(2,Rt,e.aggregatedExamResults.medianRelativePassed?e.roundScoreSpecifiedByCourseSettings(e.aggregatedExamResults.medianRelativePassed,e.course):0))}}function Oi(i,d){i&1&&(t(0,`
                    `),m(1,"h4",65),t(2,`
                `))}function Vi(i,d){i&1&&(t(0,`
                    `),m(1,"h4",66),t(2,`
                `))}function Li(i,d){if(i&1&&(t(0,`
                    `),r(1,"div",33),t(2,`
                        `),m(3,"jhi-participant-scores-distribution",67),t(4,`
                    `),s(),t(5,`
                `)),i&2){let e=l(2);n(3),g("gradeNames",e.gradesWithBonus)("scoreToHighlight",e.highlightedValue)("gradingScale",e.gradingScale)("isCourseScore",!1)("dataLabelFormatting",e.dataLabelFormatting)}}function Bi(i,d){if(i&1&&(t(0,`
                                `),r(1,"div"),t(2,`
                                    `),m(3,"jhi-exam-scores-average-scores-graph",78),t(4,`
                                `),s(),t(5,`
                            `)),i&2){let e=d.$implicit,a=l(4);n(3),g("averageScores",e)("course",a.course)}}function Mi(i,d){if(i&1&&(t(0,`
                        `),r(1,"div",77),t(2,`
                            `),w(3,Bi,6,2,null,null,yt),s(),t(5,`
                    `)),i&2){let e=l(3);n(3),z(e.aggregatedExerciseGroupResults)}}function wi(i,d){if(i&1&&(t(0,`
                                        `),m(1,"th",79),t(2,`
                                    `)),i&2){let e=l(3);n(),U("jhiTranslate",e.isBonus?"artemisApp.examScores.averageBonusColumn":"artemisApp.examScores.averageGradeColumn")}}function zi(i,d){if(i&1&&(t(0,`
                                                `),r(1,"td",80),t(2),s(),t(3,`
                                            `)),i&2){let e=l(2),a=e.$implicit,o=e.$index;n(),g("rowSpan",a.exerciseResults.length),n(),E(`
                                                    `,o+1,`
                                                `)}}function ji(i,d){if(i&1&&(t(0,`
                                                `),r(1,"td",80),t(2),s(),t(3,`
                                            `)),i&2){let e=l(2).$implicit;n(),g("rowSpan",e.exerciseResults.length),n(),E(`
                                                    `,e.title,`
                                                `)}}function ki(i,d){if(i&1&&(t(0,`
                                                `),r(1,"td",80),t(2),s(),t(3,`
                                            `)),i&2){let e=l(2).$implicit,a=l(3);n(),g("rowSpan",e.exerciseResults.length),n(),B(`
                                                    `,e.noOfParticipantsWithFilter,`
                                                    / `,e.totalParticipants," (",a.roundAndPerformLocalConversion(e.noOfParticipantsWithFilter/e.totalParticipants*100),`
                                                    %)
                                                `)}}function $i(i,d){if(i&1&&(t(0,`
                                                `),r(1,"td",80),t(2),s(),t(3,`
                                            `)),i&2){let e=l(2).$implicit,a=l(3);n(),g("rowSpan",e.exerciseResults.length),n(),B(`
                                                    `,e.averagePoints!==null?a.roundAndPerformLocalConversion(e.averagePoints):"-",`
                                                    /
                                                    `,a.localize(e.maxPoints),`
                                                    (`,e.averagePercentage!==null?a.roundAndPerformLocalConversion(e.averagePercentage):"-",`
                                                    %)
                                                `)}}function Wi(i,d){if(i&1&&(t(0,`
                                                `),r(1,"td",80),t(2),s(),t(3,`
                                            `)),i&2){let e=l(2).$implicit;n(),g("rowSpan",e.exerciseResults.length),n(),E(`
                                                    `,e.averageGrade!==null?e.averageGrade:"-",`
                                                `)}}function Ui(i,d){if(i&1&&(t(0,`
                                        `),r(1,"tr"),t(2,`
                                            `),h(3,zi,4,2)(4,ji,4,2)(5,ki,4,4)(6,$i,4,4)(7,Wi,4,2),r(8,"td"),t(9),s(),t(10,`
                                            `),r(11,"td"),t(12),s(),t(13,`
                                            `),r(14,"td"),t(15),s(),t(16,`
                                        `),s(),t(17,`
                                    `)),i&2){let e=d.$implicit,a=d.$index,o=l(4);n(3),u(a===0?3:-1),n(),u(a===0?4:-1),n(),u(a===0?5:-1),n(),u(a===0?6:-1),n(),u(o.gradingScaleExists&&a===0?7:-1),n(2),f(e.title),n(3),B(`
                                                `,e.noOfParticipantsWithFilter," / ",e.totalParticipants," (",o.roundAndPerformLocalConversion(e.noOfParticipantsWithFilter/e.totalParticipants*100),`
                                                %)
                                            `),n(3),B(`
                                                `,e.averagePoints!==null?o.roundAndPerformLocalConversion(e.averagePoints):"-",`
                                                /
                                                `,o.localize(e.maxPoints),`
                                                (`,e.averagePercentage!==null?o.roundAndPerformLocalConversion(e.averagePercentage):"-",`
                                                %)
                                            `)}}function Hi(i,d){if(i&1&&(t(0,`
                                `),r(1,"tbody"),t(2,`
                                    `),w(3,Ui,18,12,null,null,zt),s(),t(5,`
                            `)),i&2){let e=d.$implicit;n(3),z(e.exerciseResults)}}function Xi(i,d){if(i&1&&(t(0,`
                `),r(1,"div"),t(2,`
                    `),r(3,"h4",68),t(4,`
                        `),m(5,"span",69),t(6,`
                    `),s(),t(7,`
                    `),h(8,Mi,6,0),r(9,"div",36),t(10,`
                        `),r(11,"table",70),t(12,`
                            `),r(13,"thead",22),t(14,`
                                `),r(15,"tr"),t(16,`
                                    `),r(17,"th"),t(18,"#"),s(),t(19,`
                                    `),m(20,"th",71),t(21,`
                                    `),r(22,"th"),t(23),O(24,"artemisTranslate"),m(25,"jhi-help-icon",72),t(26,`
                                    `),s(),t(27,`
                                    `),r(28,"th"),t(29),O(30,"artemisTranslate"),m(31,"jhi-help-icon",73),t(32,`
                                    `),s(),t(33,`
                                    `),h(34,wi,3,1),m(35,"th",74),t(36,`
                                    `),r(37,"th"),t(38),O(39,"artemisTranslate"),m(40,"jhi-help-icon",75),t(41,`
                                    `),s(),t(42,`
                                    `),r(43,"th"),t(44),O(45,"artemisTranslate"),m(46,"jhi-help-icon",76),t(47,`
                                    `),s(),t(48,`
                                `),s(),t(49,`
                            `),s(),t(50,`
                            `),w(51,Hi,6,0,null,null,yt),s(),t(53,`
                    `),s(),t(54,`
                `),s(),t(55,`
            `)),i&2){let e=l(2);n(8),u(e.course?8:-1),n(15),E(`
                                        `,V(24,6,"artemisApp.examScores.participantsColumn"),`
                                        `),n(6),E(`
                                        `,V(30,8,"artemisApp.examScores.averagePointsColumn"),`
                                        `),n(5),u(e.gradingScaleExists?34:-1),n(4),E(`
                                        `,V(39,10,"artemisApp.examScores.participantsColumn"),`
                                        `),n(6),E(`
                                        `,V(45,12,"artemisApp.examScores.averagePointsColumn"),`
                                        `),n(7),z(e.aggregatedExerciseGroupResults)}}function Ki(i,d){if(i&1&&(t(0,`
                                `),r(1,"th",81),t(2,`
                                    `),r(3,"span"),t(4),s(),t(5,`
                                    `),m(6,"fa-icon",4),t(7,`
                                `),s(),t(8,`
                            `)),i&2){let e=d.$implicit,a=l(2);n(),g("jhiSortBy","exerciseGroupIdToExerciseResult."+e.id+".achievedPoints"),n(3),f(e.title),n(2),g("icon",a.faSort)}}function Yi(i,d){if(i&1&&(t(0,`
                                `),r(1,"th",49),t(2,`
                                    `),m(3,"span",79),t(4,`
                                    `),m(5,"fa-icon",4),t(6,`
                                `),s(),t(7,`
                            `)),i&2){let e=l(2);n(3),U("jhiTranslate",e.isBonus?"artemisApp.examScores.overallBonusColumn":"artemisApp.examScores.overallGradeColumn"),n(2),g("icon",e.faSort)}}function Ji(i,d){if(i&1&&(t(0,`
                                    `),r(1,"th",85),t(2,`
                                        `),m(3,"span",86),t(4,`
                                        `),m(5,"fa-icon",4),t(6,`
                                    `),s(),t(7,`
                                `)),i&2){let e=l(3);n(3),g("translateValues",j(2,Mt,e.presentationScoreThreshold)),n(2),g("icon",e.faSort)}}function qi(i,d){if(i&1&&(t(0,`
                                `),h(1,Ji,8,4),r(2,"th",82),t(3,`
                                    `),m(4,"span",79),t(5,`
                                    `),m(6,"fa-icon",4),t(7,`
                                `),s(),t(8,`
                                `),r(9,"th",83),t(10,`
                                    `),m(11,"span",84),t(12,`
                                    `),m(13,"fa-icon",4),t(14,`
                                `),s(),t(15,`
                            `)),i&2){let e=l(2);n(),u(e.presentationScoreThreshold!==void 0?1:-1),n(3),g("jhiTranslate",e.hasBonus===e.BonusStrategy.POINTS?"artemisApp.examScores.bonusPointsColumn":"artemisApp.examScores.bonusGradeColumn"),n(2),g("icon",e.faSort),n(7),g("icon",e.faSort)}}function Qi(i,d){i&1&&(t(0,`
                                `),m(1,"th",56),t(2,`
                            `))}function Zi(i,d){if(i&1&&(t(0,`
                                `),r(1,"th",87),t(2,`
                                    `),m(3,"span",88),t(4,`
                                    `),m(5,"fa-icon",4),t(6,`
                                `),s(),t(7,`
                            `)),i&2){let e=l(2);n(5),g("icon",e.faSort)}}function en(i,d){if(i&1&&(t(0,`
                                `),r(1,"th",89),t(2,`
                                    `),m(3,"span",90),t(4,`
                                    `),m(5,"fa-icon",4),t(6,`
                                `),s(),t(7,`
                            `)),i&2){let e=l(2);n(5),g("icon",e.faSort)}}function tn(i,d){if(i&1&&(t(0,`
                                        `),r(1,"td"),t(2),s(),t(3,`
                                    `)),i&2){let e=l().$implicit,a=l().$implicit,o=l(2);n(2),B(`
                                            `,a.exerciseGroupIdToExerciseResult[e.id].title,`
                                            :
                                            `,o.roundAndPerformLocalConversion(a.exerciseGroupIdToExerciseResult[e.id].achievedPoints),`
                                            (
                                            `,o.roundAndPerformLocalConversion(a.exerciseGroupIdToExerciseResult[e.id].achievedScore),`
                                            %)
                                        `)}}function nn(i,d){i&1&&(t(0,`
                                        `),r(1,"td"),t(2,"-"),s(),t(3,`
                                    `))}function an(i,d){if(i&1&&(t(0,`
                                    `),h(1,tn,4,3)(2,nn,4,0)),i&2){let e=d.$implicit,a=l().$implicit;n(),u(a.exerciseGroupIdToExerciseResult&&a.exerciseGroupIdToExerciseResult[e.id]?1:2)}}function on(i,d){if(i&1&&(t(0,`
                                    `),r(1,"td"),t(2),s(),t(3,`
                                `)),i&2){let e=l().$implicit;n(2),E(`
                                        `,e.overallGrade!==null?e.overallGrade:"-",`
                                    `)}}function rn(i,d){if(i&1&&(t(0,`
                                        `),r(1,"td"),t(2),s(),t(3,`
                                    `)),i&2){let e,a=l(2).$implicit;n(2),E(`
                                            `,(e=a.gradeWithBonus==null?null:a.gradeWithBonus.achievedPresentationScore)!==null&&e!==void 0?e:"-",`
                                        `)}}function sn(i,d){if(i&1&&(t(0,`
                                    `),h(1,rn,4,1),r(2,"td"),t(3),s(),t(4,`
                                    `),r(5,"td"),t(6),s(),t(7,`
                                `)),i&2){let e,a,o=l().$implicit,x=l(2);n(),u(x.presentationScoreThreshold!==void 0?1:-1),n(2),E(`
                                        `,(e=o.gradeWithBonus==null?null:o.gradeWithBonus.bonusGrade)!==null&&e!==void 0?e:"-",`
                                    `),n(3),E(`
                                        `,(a=(a=o.gradeWithBonus==null?null:o.gradeWithBonus.finalGrade)!==null&&a!==void 0?a:o.overallGrade)!==null&&a!==void 0?a:"-",`
                                    `)}}function dn(i,d){if(i&1&&(t(0,`
                                    `),r(1,"td",91),t(2,`
                                        `),m(3,"fa-icon",92),t(4,`
                                    `),s(),t(5,`
                                `)),i&2){let e=l(3);n(3),g("icon",e.faCheckCircle)}}function ln(i,d){if(i&1&&(t(0,`
                                    `),r(1,"td",91),t(2,`
                                        `),m(3,"fa-icon",93),t(4,`
                                    `),s(),t(5,`
                                `)),i&2){let e=l(3);n(3),g("icon",e.faTimes)}}function cn(i,d){if(i&1&&(t(0,`
                                    `),r(1,"td"),t(2),s(),t(3,`
                                `)),i&2){let e,a=l().$implicit;n(2),E(`
                                        `,(e=a.mostSeverePlagiarismVerdict)!==null&&e!==void 0?e:"-",`
                                    `)}}function mn(i,d){if(i&1&&(t(0,`
                                    `),r(1,"td"),t(2),s(),t(3,`
                                `)),i&2){let e,a=l().$implicit;n(2),E(`
                                        `,(e=a.gradeWithBonus==null?null:a.gradeWithBonus.mostSeverePlagiarismVerdict)!==null&&e!==void 0?e:"-",`
                                    `)}}function un(i,d){if(i&1&&(t(0,`
                            `),r(1,"tr"),t(2,`
                                `),r(3,"td"),t(4),s(),t(5,`
                                `),r(6,"td"),t(7),s(),t(8,`
                                `),r(9,"td"),t(10),s(),t(11,`
                                `),r(12,"td"),t(13),s(),t(14,`
                                `),r(15,"td"),t(16),s(),t(17,`
                                `),w(18,an,3,1,null,null,Pt),r(20,"td"),t(21),s(),t(22,`
                                `),r(23,"td"),t(24),s(),t(25,`
                                `),h(26,on,4,1)(27,sn,8,3)(28,dn,6,1)(29,ln,6,1)(30,cn,4,1)(31,mn,4,1),s(),t(32,`
                        `)),i&2){let e=d.$implicit,a=d.$index,o=l(2);n(4),f(a+1),n(3),f(e.name),n(3),f(e.login),n(3),f(e.email?e.email:"-"),n(3),f(e.registrationNumber?e.registrationNumber:"-"),n(2),z(o.examScoreDTO.exerciseGroups),n(3),f(o.roundAndPerformLocalConversion(e.overallPointsAchieved)),n(3),f(o.roundAndPerformLocalConversion(e.overallScoreAchieved)),n(2),u(o.gradingScaleExists?26:-1),n(),u(o.hasBonus?27:-1),n(),u(o.gradingScaleExists&&!o.isBonus&&e.overallGrade&&e.hasPassed?28:-1),n(),u(o.gradingScaleExists&&!o.isBonus&&e.overallGrade&&!e.hasPassed?29:-1),n(),u(o.hasPlagiarismVerdicts?30:-1),n(),u(o.hasPlagiarismVerdictsInBonusSource?31:-1)}}function xn(i,d){if(i&1){let e=W();t(0,`
        `),r(1,"div"),t(2,`
            `),r(3,"div",8),t(4,`
                `),h(5,Ut,4,1),r(6,"jhi-csv-export-button",9),L("onExport",function(o){P(e);let x=l();return y(x.exportExamResults(o))}),s(),t(7,`
            `),s(),t(8,`
            `),r(9,"div",10),t(10,`
                `),h(11,Ht,5,4),r(12,"a",11),t(13,`
                    `),r(14,"h6",12),t(15),O(16,"artemisTranslate"),s(),t(17,`
                `),s(),t(18,`
                `),r(19,"h6"),t(20,","),s(),t(21,`
                `),r(22,"a",11),t(23,`
                    `),r(24,"h6",12),t(25),O(26,"artemisTranslate"),s(),t(27,`
                `),s(),t(28,`
            `),s(),t(29,`
            `),r(30,"div",13),t(31,`
                `),r(32,"h4"),t(33,`
                    `),m(34,"span",14),t(35,`
                `),s(),t(36,`
            `),s(),t(37,`
            `),t(38,`
            `),r(39,"div",15),t(40,`
                `),r(41,"div",16),t(42,`
                    `),r(43,"input",17),L("change",function(){P(e);let o=l();return y(o.toggleFilterForSubmittedExam())}),s(),t(44,`
                    `),m(45,"label",18),t(46,`
                `),s(),t(47,`
                `),r(48,"div",16),t(49,`
                    `),r(50,"input",19),L("change",function(){P(e);let o=l();return y(o.toggleFilterForNonEmptySubmission())}),s(),t(51,`
                    `),m(52,"label",20),t(53,`
                `),s(),t(54,`
            `),s(),t(55,`
            `),t(56,`
            `),r(57,"table",21),t(58,`
                `),h(59,qt,13,4),r(60,"thead",22),t(61,`
                    `),r(62,"tr"),t(63,`
                        `),m(64,"th"),t(65,`
                        `),h(66,Qt,3,0),m(67,"th",23),t(68,`
                        `),m(69,"th",24),t(70,`
                        `),h(71,Zt,3,0)(72,ei,3,3)(73,ti,3,0),s(),t(74,`
                `),s(),t(75,`
                `),r(76,"tbody"),t(77,`
                    `),r(78,"tr"),t(79,`
                        `),m(80,"th",25),t(81,`
                        `),h(82,ii,4,2),r(83,"td"),t(84),s(),t(85,`
                        `),r(86,"td"),t(87),s(),t(88,`
                        `),h(89,ni,3,0)(90,ai,3,3)(91,oi,3,0),s(),t(92,`
                    `),r(93,"tr"),t(94,`
                        `),m(95,"th",26),t(96,`
                        `),h(97,ri,4,2),r(98,"td"),t(99),s(),t(100,`
                        `),r(101,"td"),t(102),s(),t(103,`
                        `),h(104,si,4,2)(105,di,4,5)(106,li,4,2),s(),t(107,`
                    `),h(108,gi,16,7),r(109,"tr"),t(110,`
                        `),m(111,"th",27),t(112,`
                        `),h(113,pi,4,2),r(114,"td"),t(115),s(),t(116,`
                        `),r(117,"td"),t(118),s(),t(119,`
                        `),h(120,hi,4,2)(121,Si,4,5)(122,Ei,4,2),s(),t(123,`
                    `),h(124,Fi,16,7),r(125,"tr"),t(126,`
                        `),m(127,"th",28),t(128,`
                        `),h(129,Ai,4,1),r(130,"td"),t(131),s(),t(132,`
                        `),r(133,"td"),t(134),s(),t(135,`
                        `),h(136,Ti,4,1)(137,Ii,4,4)(138,bi,4,1),s(),t(139,`
                    `),h(140,Ni,16,6),s(),t(141,`
            `),s(),t(142,`
            `),r(143,"div",29),t(144,`
                `),h(145,Di,8,4),r(146,"div",30),t(147,`
                    `),r(148,"input",31),L("change",function(){P(e);let o=l();return y(o.toggleMedian(o.overallChartMedianType))}),s(),t(149,`
                    `),m(150,"label",32),t(151,`
                `),s(),t(152,`
                `),t(153,`
                `),h(154,Oi,3,0),r(155,"div",33),t(156,`
                    `),m(157,"jhi-participant-scores-distribution",34),t(158,`
                `),s(),t(159,`
                `),t(160,`
                `),h(161,Vi,3,0)(162,Li,6,5),s(),t(163,`
            `),t(164,`
            `),h(165,Xi,56,14),r(166,"h4"),t(167,`
                `),m(168,"span",35),t(169,`
            `),s(),t(170,`
            `),r(171,"div",36),t(172,`
                `),r(173,"table",37),t(174,`
                    `),r(175,"thead",22),t(176,`
                        `),r(177,"tr",38),ye("predicateChange",function(o){P(e);let x=l();return le(x.predicate,o)||(x.predicate=o),y(o)})("ascendingChange",function(o){P(e);let x=l();return le(x.reverse,o)||(x.reverse=o),y(o)}),L("sortChange",function(){P(e);let o=l();return y(o.sortRows())}),t(178,`
                            `),r(179,"th"),t(180,"#"),s(),t(181,`
                            `),r(182,"th",39),t(183,`
                                `),m(184,"span",40),t(185,`
                                `),m(186,"fa-icon",4),t(187,`
                            `),s(),t(188,`
                            `),r(189,"th",41),t(190,`
                                `),m(191,"span",42),t(192,`
                                `),m(193,"fa-icon",4),t(194,`
                            `),s(),t(195,`
                            `),r(196,"th",43),t(197,`
                                `),m(198,"span",44),t(199,`
                                `),m(200,"fa-icon",4),t(201,`
                            `),s(),t(202,`
                            `),r(203,"th",45),t(204,`
                                `),m(205,"span",46),t(206,`
                                `),m(207,"fa-icon",4),t(208,`
                            `),s(),t(209,`
                            `),w(210,Ki,9,3,null,null,Pt),r(212,"th",47),t(213,`
                                `),m(214,"span",48),t(215,`
                                `),m(216,"fa-icon",4),t(217,`
                            `),s(),t(218,`
                            `),r(219,"th",49),t(220,`
                                `),m(221,"span",50),t(222,`
                                `),m(223,"fa-icon",4),t(224,`
                            `),s(),t(225,`
                            `),h(226,Yi,8,2)(227,qi,16,4)(228,Qi,3,0)(229,Zi,8,1)(230,en,8,1),s(),t(231,`
                    `),s(),t(232,`
                    `),r(233,"tbody"),t(234,`
                        `),w(235,un,33,13,null,null,wt),s(),t(237,`
                `),s(),t(238,`
            `),s(),t(239,`
        `),s(),t(240,`
    `)}if(i&2){let e=l();n(5),u(e.examScoreDTO.title?5:-1),n(),g("icon",e.faDownload)("buttonSize",e.ButtonSize.SMALL),n(5),u(e.examScoreDTO.maxPoints?11:-1),n(),g("routerLink",ce(78,Vt,e.course==null?null:e.course.id,e.examScoreDTO.examId)),n(3),F("",e.exerciseGroups.length," ",V(16,74,"artemisApp.examScores.noExerciseGroups"),""),n(7),g("routerLink",ce(81,Lt,e.course==null?null:e.course.id,e.examScoreDTO.examId)),n(3),F("",e.aggregatedExamResults.noOfRegisteredUsers," ",V(26,76,"artemisApp.examScores.registered"),""),n(18),g("checked",e.filterForSubmittedExams),n(7),g("checked",e.filterForNonEmptySubmissions),n(9),u(e.hasSecondCorrectionAndStarted?59:-1),n(7),u(e.gradingScaleExists&&!e.isBonus?66:-1),n(5),u(e.hasSecondCorrectionAndStarted&&e.gradingScaleExists&&!e.isBonus?71:-1),n(),u(e.hasSecondCorrectionAndStarted?72:-1),n(),u(e.hasSecondCorrectionAndStarted?73:-1),n(9),u(e.gradingScaleExists&&!e.isBonus?82:-1),n(2),F(`
                            `,e.tableState.absoluteAmountOfSubmittedExams,`
                            (`,e.tableState.relativeAmountOfSubmittedExams,`%)
                        `),n(3),E(`
                            `,e.tableState.absoluteAmountOfTotalExams,`
                        `),n(2),u(e.hasSecondCorrectionAndStarted&&e.gradingScaleExists&&!e.isBonus?89:-1),n(),u(e.hasSecondCorrectionAndStarted?90:-1),n(),u(e.hasSecondCorrectionAndStarted?91:-1),n(6),u(e.gradingScaleExists&&!e.isBonus?97:-1),n(2),F("",e.tableState.averagePointsSubmitted," (",e.tableState.averageScoreSubmitted,"%)"),n(3),F("",e.tableState.averagePointsTotal," (",e.tableState.averageScoreTotal,"%)"),n(2),u(e.hasSecondCorrectionAndStarted&&e.gradingScaleExists&&!e.isBonus?104:-1),n(),u(e.hasSecondCorrectionAndStarted?105:-1),n(),u(e.hasSecondCorrectionAndStarted?106:-1),n(2),u(e.gradingScaleExists?108:-1),n(5),u(e.gradingScaleExists&&!e.isBonus?113:-1),n(2),F(`
                            `,e.tableState.medianPointsSubmitted,`
                            (`,e.tableState.medianScoreSubmitted,`%)
                        `),n(3),F(`
                            `,e.tableState.medianPointsTotal,`
                            (`,e.tableState.medianScoreTotal,`%)
                        `),n(2),u(e.hasSecondCorrectionAndStarted&&e.gradingScaleExists&&!e.isBonus?120:-1),n(),u(e.hasSecondCorrectionAndStarted?121:-1),n(),u(e.hasSecondCorrectionAndStarted?122:-1),n(2),u(e.gradingScaleExists?124:-1),n(5),u(e.gradingScaleExists&&!e.isBonus?129:-1),n(2),E(`
                            `,e.tableState.standardDeviationSubmitted,`
                        `),n(3),f(e.tableState.standardDeviationTotal),n(2),u(e.hasSecondCorrectionAndStarted&&e.gradingScaleExists&&!e.isBonus?136:-1),n(),u(e.hasSecondCorrectionAndStarted?137:-1),n(),u(e.hasSecondCorrectionAndStarted?138:-1),n(2),u(e.gradingScaleExists&&e.hasNumericGrades?140:-1),n(5),u(e.gradingScaleExists&&e.aggregatedExamResults.medianRelativePassed!==null?145:-1),n(3),g("checked",e.showOverallMedian),n(2),g("translateValues",j(84,Rt,e.overallChartMedian)),n(4),u(e.hasBonus?154:-1),n(3),g("scores",e.scores)("scoreToHighlight",e.highlightedValue)("gradingScale",e.gradingScale)("isCourseScore",!1)("dataLabelFormatting",e.dataLabelFormatting),n(4),u(e.hasBonus?161:-1),n(),u(e.hasBonus?162:-1),n(3),u(e.aggregatedExerciseGroupResults?165:-1),n(12),Pe("predicate",e.predicate)("ascending",e.reverse),n(9),g("icon",e.faSort),n(7),g("icon",e.faSort),n(7),g("icon",e.faSort),n(7),g("icon",e.faSort),n(3),z(e.examScoreDTO.exerciseGroups),n(6),g("icon",e.faSort),n(7),g("icon",e.faSort),n(3),u(e.gradingScaleExists?226:-1),n(),u(e.hasBonus?227:-1),n(),u(e.gradingScaleExists&&!e.isBonus?228:-1),n(),u(e.hasPlagiarismVerdicts?229:-1),n(),u(e.hasPlagiarismVerdictsInBonusSource?230:-1),n(5),z(e.studentResults)}}var b=function(i){return i[i.PASSED=0]="PASSED",i[i.OVERALL=1]="OVERALL",i[i.SUBMITTED=2]="SUBMITTED",i}(b||{}),ha=(()=>{class i{route=I(J);examService=I(qe);sortService=I(nt);alertService=I($e);changeDetector=I(Ne);languageHelper=I(et);localeConversionService=I(Z);participantScoresService=I(St);gradingSystemService=I(lt);courseManagementService=I(Ue);examScoreDTO;exerciseGroups;studentResults;aggregatedExamResults;aggregatedExerciseGroupResults;noOfExamsFiltered;dataLabelFormatting=this.formatDataLabel.bind(this);scores;gradesWithBonus;lastCalculatedMedianType;highlightedValue;showOverallMedian;overallChartMedian;overallChartMedianType;showPassedMedian;tableState=new It;roundScoreSpecifiedByCourseSettings=R;medianType=b;ButtonSize=Ye;BonusStrategy=ae;studentIdToExamScoreDTOs=new Map;predicate="id";reverse=!1;isLoading=!0;filterForSubmittedExams=!1;filterForNonEmptySubmissions=!1;gradingScaleExists=!1;gradingScale;isBonus;hasBonus;hasPlagiarismVerdicts;hasPlagiarismVerdictsInBonusSource;hasSecondCorrectionAndStarted;hasNumericGrades;presentationScoreThreshold;course;faSort=Me;faDownload=we;faTimes=ze;faCheckCircle=Be;faExclamationTriangle=je;languageChangeSubscription;ngOnInit(){this.route.params.subscribe(e=>{let a=this.examService.getExamScores(e.courseId,e.examId),o=this.participantScoresService.findExamScores(e.examId).pipe(se(()=>re(new me))),x=this.gradingSystemService.findGradingScaleForExam(e.courseId,e.examId).pipe(se(()=>re(new me)));this.courseManagementService.find(e.courseId).subscribe(c=>this.course=c.body),be([a,o,x]).subscribe({next:([c,p,S])=>{if(this.examScoreDTO=c.body,this.examScoreDTO){this.hasSecondCorrectionAndStarted=this.examScoreDTO.hasSecondCorrectionAndStarted,this.studentResults=this.examScoreDTO.studentResults,this.exerciseGroups=this.examScoreDTO.exerciseGroups;let v=new Map;if(this.exerciseGroups){for(let C of this.exerciseGroups)if(v.has(C.title)){let D=v.get(C.title);v.set(C.title,D+1)}else v.set(C.title,1);for(let C of this.exerciseGroups)v.has(C.title)&&v.get(C.title)>1&&(C.title=`${C.title} (id=${C.id})`)}}if(S.body&&(this.gradingScaleExists=!0,this.gradingScale=S.body,this.isBonus=this.gradingScale.gradeType===dt.BONUS,this.hasBonus=this.studentResults?.find(v=>v?.gradeWithBonus)?.gradeWithBonus?.bonusStrategy,this.gradingScale.gradeSteps=this.gradingSystemService.sortGradeSteps(this.gradingScale.gradeSteps),this.hasNumericGrades=!this.gradingScale.gradeSteps.some(v=>isNaN(Number(v.gradeName)))),this.studentResults&&this.exerciseGroups){if(this.hasPlagiarismVerdicts=this.studentResults.some(C=>C.mostSeverePlagiarismVerdict),this.hasPlagiarismVerdictsInBonusSource=this.hasBonus&&this.studentResults.some(C=>C.gradeWithBonus?.mostSeverePlagiarismVerdict),this.hasBonus){let C=this.studentResults.find(D=>D.gradeWithBonus?.presentationScoreThreshold);this.presentationScoreThreshold=C?.gradeWithBonus.presentationScoreThreshold}this.calculateExamStatistics(),this.calculateFilterDependentStatistics();let v=this.gradingScaleExists&&!this.isBonus?b.PASSED:b.OVERALL;v===b.PASSED&&(this.setOverallChartMedianDependingOfExamsIncluded(b.OVERALL),this.showOverallMedian=!1),this.determineAndHighlightChartMedian(v)}this.isLoading=!1,this.changeDetector.detectChanges(),this.compareNewExamScoresCalculationWithOldCalculation(p.body)},error:c=>We(this.alertService,c)})}),this.languageChangeSubscription=this.languageHelper.language.subscribe(()=>{this.changeDetector.detectChanges()})}ngOnDestroy(){this.languageChangeSubscription&&this.languageChangeSubscription.unsubscribe()}toggleFilterForSubmittedExam(){this.filterForSubmittedExams=!this.filterForSubmittedExams,this.calculateFilterDependentStatistics();let e=this.filterForSubmittedExams?b.SUBMITTED:b.OVERALL;this.gradingScaleExists&&!this.isBonus?(this.setOverallChartMedianDependingOfExamsIncluded(e),this.showOverallMedian=!1,this.showPassedMedian=!0,this.determineAndHighlightChartMedian(b.PASSED)):(this.showOverallMedian=!0,this.determineAndHighlightChartMedian(e)),this.updateValuesAccordingToFilter(),this.changeDetector.detectChanges()}toggleFilterForNonEmptySubmission(){this.filterForNonEmptySubmissions=!this.filterForNonEmptySubmissions,this.calculateFilterDependentStatistics(),this.updateValuesAccordingToFilter(),this.changeDetector.detectChanges()}calculateExerciseGroupStatistics(e){for(let a of e){if(a.noOfParticipantsWithFilter&&(a.averagePoints=a.totalPoints/a.noOfParticipantsWithFilter,a.averagePercentage=a.averagePoints/a.maxPoints*100,this.gradingScaleExists)){let o=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,a.averagePercentage);a.averageGrade=o.gradeName}a.exerciseResults.forEach(o=>{o.noOfParticipantsWithFilter&&(o.averagePoints=o.totalPoints/o.noOfParticipantsWithFilter,o.averagePercentage=o.averagePoints/o.maxPoints*100)})}this.aggregatedExerciseGroupResults=e}calculateFilterDependentStatistics(){this.noOfExamsFiltered=0;let e=[],a=[],o=new Map;for(let c of this.exerciseGroups){let p=new At(c.id,c.title,c.maxPoints,c.numberOfParticipants);c.containedExercises.forEach(S=>{let v=ke(S),C=new Tt(S.exerciseId,S.title,S.maxPoints,S.numberOfParticipants,v);p.exerciseResults.push(C)}),o.set(c.id,p)}for(let c of this.studentResults){if(!c.submitted&&this.filterForSubmittedExams||(e.push(c.overallScoreAchieved??0),this.hasBonus&&a.push(c.gradeWithBonus?.finalGrade?.toString()??""),this.noOfExamsFiltered++,!c.exerciseGroupIdToExerciseResult))continue;let p=Object.entries(c.exerciseGroupIdToExerciseResult);for(let[S,v]of p){if(!v.hasNonEmptySubmission&&this.filterForNonEmptySubmissions)continue;let C=o.get(Number(S));if(!C)throw new Error(`ExerciseGroup with id ${S} does not exist in this exam!`);C.noOfParticipantsWithFilter++,C.totalPoints+=v.achievedPoints;let D=C.exerciseResults.find(X=>X.exerciseId===v.exerciseId);if(D)D.noOfParticipantsWithFilter++,D.totalPoints+=v.achievedPoints;else throw new Error(`Exercise with id ${v.exerciseId} does not exist in this exam!`)}}let x=Array.from(o.values());this.calculateExerciseGroupStatistics(x),this.scores=[...e],this.gradesWithBonus=a}calculateExamStatistics(){let e=0,a=0,o=[],x=[],c=[],p=[],S=[],v=[],C=[],D=[],X=[],Ae=[],Te=[],Ie=[];for(let T of this.studentResults)if(c.push(T.overallPointsAchieved),v.push(T.overallPointsAchievedInFirstCorrection),T.submitted&&(x.push(T.overallPointsAchieved),S.push(T.overallPointsAchievedInFirstCorrection),T.hasPassed&&(o.push(T.overallPointsAchieved),p.push(T.overallPointsAchievedInFirstCorrection))),T.exerciseGroupIdToExerciseResult&&Object.entries(T.exerciseGroupIdToExerciseResult).some(([,$])=>$.hasNonEmptySubmission)&&(e+=1,T.submitted&&(a+=1)),this.gradingScaleExists&&this.hasNumericGrades){let K=Number(T.overallGrade),$=Number(T.overallGradeInFirstCorrection);X.push(K),Ie.push($),T.submitted&&(D.push(K),Te.push($),T.hasPassed&&(C.push(K),Ae.push($)))}let oe=this.calculatePassedExamStatistics(new Ft,o,p,C,Ae);oe=this.calculateSubmittedExamStatistics(oe,x,S,D,Te),this.aggregatedExamResults=this.calculateTotalExamStatistics(oe,c,v,X,Ie),this.aggregatedExamResults.noOfExamsNonEmpty=e,this.aggregatedExamResults.noOfExamsSubmittedAndNotEmpty=a,this.updateValuesAccordingToFilter(),this.changeDetector.detectChanges()}calculatePassedExamStatistics(e,a,o,x,c){return a.length&&this.gradingScaleExists&&!this.isBonus&&(e.meanPointsPassed=G(a),e.medianPassed=N(a),e.standardDeviationPassed=_(a),e.noOfExamsFilteredForPassed=a.length,this.examScoreDTO.maxPoints&&(e.meanPointsRelativePassed=e.meanPointsPassed/this.examScoreDTO.maxPoints*100,e.medianRelativePassed=e.medianPassed/this.examScoreDTO.maxPoints*100,e.meanGradePassed=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,e.meanPointsRelativePassed).gradeName,e.medianGradePassed=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,e.medianRelativePassed).gradeName,e.standardGradeDeviationPassed=this.hasNumericGrades?_(x):void 0),this.hasSecondCorrectionAndStarted&&(e.meanPointsPassedInFirstCorrection=G(o),e.medianPassedInFirstCorrection=N(o),e.standardDeviationPassedInFirstCorrection=_(o),this.examScoreDTO.maxPoints&&(e.meanPointsRelativePassedInFirstCorrection=e.meanPointsPassedInFirstCorrection/this.examScoreDTO.maxPoints*100,e.medianRelativePassedInFirstCorrection=e.medianPassedInFirstCorrection/this.examScoreDTO.maxPoints*100,e.meanGradePassedInFirstCorrection=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,e.meanPointsRelativePassedInFirstCorrection).gradeName,e.medianGradePassedInFirstCorrection=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,e.medianRelativePassedInFirstCorrection).gradeName,e.standardGradeDeviationPassedInFirstCorrection=this.hasNumericGrades?_(c):void 0))),e}calculateSubmittedExamStatistics(e,a,o,x,c){return a.length&&(e.meanPointsSubmitted=G(a),e.medianSubmitted=N(a),e.standardDeviationSubmitted=_(a),e.noOfExamsSubmitted=a.length,this.examScoreDTO.maxPoints&&(e.meanPointsRelativeSubmitted=e.meanPointsSubmitted/this.examScoreDTO.maxPoints*100,e.medianRelativeSubmitted=e.medianSubmitted/this.examScoreDTO.maxPoints*100,this.gradingScaleExists&&(e.meanGradeSubmitted=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,e.meanPointsRelativeSubmitted).gradeName,e.medianGradeSubmitted=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,e.medianRelativeSubmitted).gradeName,e.standardGradeDeviationSubmitted=this.hasNumericGrades?_(x):void 0)),this.hasSecondCorrectionAndStarted&&(e.meanPointsInFirstCorrection=G(o),e.medianInFirstCorrection=N(o),e.standardDeviationInFirstCorrection=_(o),this.examScoreDTO.maxPoints&&(e.meanPointsRelativeInFirstCorrection=e.meanPointsInFirstCorrection/this.examScoreDTO.maxPoints*100,e.medianRelativeInFirstCorrection=e.medianInFirstCorrection/this.examScoreDTO.maxPoints*100,this.gradingScaleExists&&(e.meanGradeInFirstCorrection=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,e.meanPointsRelativeInFirstCorrection).gradeName,e.medianGradeInFirstCorrection=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,e.medianRelativeInFirstCorrection).gradeName,e.standardGradeDeviationInFirstCorrection=this.hasNumericGrades?_(c):void 0)))),e}calculateTotalExamStatistics(e,a,o,x,c){return a.length&&(e.meanPointsTotal=G(a),e.medianTotal=N(a),e.standardDeviationTotal=_(a),e.noOfRegisteredUsers=this.studentResults.length,this.examScoreDTO.maxPoints&&(e.meanPointsRelativeTotal=e.meanPointsTotal/this.examScoreDTO.maxPoints*100,e.medianRelativeTotal=e.medianTotal/this.examScoreDTO.maxPoints*100,this.gradingScaleExists&&(e.meanGradeTotal=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,e.meanPointsRelativeTotal).gradeName,e.medianGradeTotal=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,e.medianRelativeTotal).gradeName,e.standardGradeDeviationTotal=this.hasNumericGrades?_(x):void 0)),this.hasSecondCorrectionAndStarted&&(e.meanPointsTotalInFirstCorrection=G(o),e.medianTotalInFirstCorrection=N(o),e.standardDeviationTotalInFirstCorrection=_(o),this.examScoreDTO.maxPoints&&(e.meanPointsRelativeTotalInFirstCorrection=e.meanPointsTotalInFirstCorrection/this.examScoreDTO.maxPoints*100,e.medianRelativeTotalInFirstCorrection=e.medianTotalInFirstCorrection/this.examScoreDTO.maxPoints*100,this.gradingScaleExists&&(e.meanGradeTotalInFirstCorrection=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,e.meanPointsRelativeTotalInFirstCorrection).gradeName,e.medianGradeTotalInFirstCorrection=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,e.medianRelativeTotalInFirstCorrection).gradeName,e.standardGradeDeviationTotalInFirstCorrection=this.hasNumericGrades?_(c):void 0)))),e}sortRows(){this.sortService.sortByProperty(this.examScoreDTO.studentResults,this.predicate,this.reverse),this.changeDetector.detectChanges()}exportExamResults(e){let a=this.generateExportColumnNames(),o=this.studentResults.map(x=>this.convertToExportRow(x,e));e?this.exportAsCsv(a,o,e):this.exportAsExcel(a,o)}exportAsExcel(e,a){let o=ne.book_new(),x=ne.json_to_sheet(a,{header:e});ne.book_append_sheet(o,x,"Exam Scores");let p={Title:`${this.examScoreDTO.title} Scores`,Author:`Artemis ${He??""}`},S=`${this.examScoreDTO.title} Exam Results.xlsx`;Ct(o,S,{Props:p,compression:!0})}exportAsCsv(e,a,o){let x={showLabels:!0,showTitle:!1,filename:`${this.examScoreDTO.title} Exam Results`,useTextFile:!1,useBom:!0,columnHeaders:e},c=ct(Object.assign(x,o)),p=mt(c)(a);ut(c)(p)}localize(e){return this.localeConversionService.toLocaleString(e,this.course?.accuracyOfScores)}generateExportColumnNames(){let e=[xt,gt,pt,ht];return this.exerciseGroups.forEach(a=>{e.push(`${a.title} ${ee}`),e.push(`${a.title} ${te}`),e.push(`${a.title} ${ie}`)}),e.push(ue),e.push(xe),this.gradingScaleExists&&(e.push(this.isBonus?Ee:he),this.hasBonus&&(this.presentationScoreThreshold!=null&&e.push(`${Se} ${this.presentationScoreThreshold}`),e.push(this.hasBonus===ae.POINTS?ve:Ce),e.push(_e))),e.push(ge),this.gradingScaleExists&&!this.isBonus&&e.push(pe),this.hasPlagiarismVerdicts&&e.push(fe),this.hasPlagiarismVerdictsInBonusSource&&e.push(Fe),e}newRowBuilder(e){return e?new Et(e.decimalSeparator,this.course?.accuracyOfScores):new vt(this.course?.accuracyOfScores)}convertToExportRow(e,a){let o=this.newRowBuilder(a);return o.setUserInformation(e.name,e.login,e.email,e.registrationNumber),this.exerciseGroups.forEach(x=>{let c=e.exerciseGroupIdToExerciseResult?.[x.id];c?(o.set(`${x.title} ${ee}`,c.title),o.setPoints(`${x.title} ${te}`,c.achievedPoints),o.setScore(`${x.title} ${ie}`,c.achievedScore)):(o.set(`${x.title} ${ee}`,""),o.set(`${x.title} ${te}`,""),o.set(`${x.title} ${ie}`,""))}),o.setPoints(ue,e.overallPointsAchieved),o.setScore(xe,e.overallScoreAchieved),this.gradingScaleExists&&(o.set(this.isBonus?Ee:he,e.overallGrade),this.hasBonus&&(this.presentationScoreThreshold!=null&&o.set(`${Se} ${this.presentationScoreThreshold}`,e.gradeWithBonus?.achievedPresentationScore),o.set(this.hasBonus===ae.POINTS?ve:Ce,e.gradeWithBonus?.bonusGrade),o.set(_e,e.gradeWithBonus?.finalGrade??e.overallGrade))),o.set(ge,e.submitted?"yes":"no"),this.gradingScaleExists&&!this.isBonus&&o.set(pe,e.hasPassed?"yes":"no"),this.hasPlagiarismVerdicts&&o.set(fe,e.mostSeverePlagiarismVerdict),this.hasPlagiarismVerdictsInBonusSource&&o.set(Fe,e.gradeWithBonus?.mostSeverePlagiarismVerdict),o.build()}roundAndPerformLocalConversion(e){return this.localize(R(e,this.course))}compareNewExamScoresCalculationWithOldCalculation(e){if(!(!this.studentResults||!e)){for(let a of e)this.studentIdToExamScoreDTOs.set(a.studentId,a);for(let a of this.studentResults){let o=R(a.overallPointsAchieved,this.course),c={scoreAchieved:R(a.overallScoreAchieved,this.course),pointsAchieved:o,userId:a.userId,userLogin:a.login},p=this.studentIdToExamScoreDTOs.get(a.userId);if(p){if(p.scoreAchieved=R(p.scoreAchieved,this.course),p.pointsAchieved=R(p.pointsAchieved,this.course),Math.abs(p.pointsAchieved-c.pointsAchieved)>.1){let S=`Different exam points in new calculation. Regular Calculation: ${JSON.stringify(c)}. New Calculation: ${JSON.stringify(p)}`;this.logErrorOnSentry(S)}if(Math.abs(p.scoreAchieved-c.scoreAchieved)>.1){let S=`Different exam score in new calculation. Regular Calculation: ${JSON.stringify(c)}. New Calculation : ${JSON.stringify(p)}`;this.logErrorOnSentry(S)}}else{let S=`Exam scores not included in new calculation: ${JSON.stringify(c)}`;this.logErrorOnSentry(S)}}}}logErrorOnSentry(e){Le(new Error(e))}formatDataLabel(e){let a=this.noOfExamsFiltered&&this.noOfExamsFiltered>0?this.roundAndPerformLocalConversion(e*100/this.noOfExamsFiltered):0;return e+" ("+a+"%)"}toggleMedian(e){switch(e){case b.PASSED:this.showPassedMedian=!this.showPassedMedian,this.showPassedMedian&&(this.showOverallMedian=!1);break;case b.OVERALL:case b.SUBMITTED:this.showOverallMedian=!this.showOverallMedian,this.showOverallMedian&&(this.showPassedMedian=!1);break}this.showPassedMedian||this.showOverallMedian?this.determineAndHighlightChartMedian(e):this.highlightedValue=void 0}determineAndHighlightChartMedian(e){let a;if(this.lastCalculatedMedianType=e,e===b.PASSED){let o=this.aggregatedExamResults.medianRelativePassed;a=o?R(o,this.course):0,this.showPassedMedian=!0}else this.setOverallChartMedianDependingOfExamsIncluded(e),a=this.overallChartMedian,this.showOverallMedian=!0;this.highlightedValue=a,this.changeDetector.detectChanges()}setOverallChartMedianDependingOfExamsIncluded(e){if(e===b.OVERALL){let a=this.aggregatedExamResults.medianRelativeTotal;this.overallChartMedian=a?R(a,this.course):0}else{let a=this.aggregatedExamResults.medianRelativeSubmitted;this.overallChartMedian=a?R(a,this.course):0}this.overallChartMedianType=e}updateValuesAccordingToFilter(){this.tableState.absoluteAmountOfSubmittedExams=this.aggregatedExamResults.noOfExamsSubmitted,this.tableState.absoluteAmountOfTotalExams=this.aggregatedExamResults.noOfRegisteredUsers;let e;this.filterForSubmittedExams&&this.filterForNonEmptySubmissions?(e=this.aggregatedExamResults.noOfExamsSubmittedAndNotEmpty,this.tableState.absoluteAmountOfSubmittedExams=this.aggregatedExamResults.noOfExamsSubmittedAndNotEmpty,this.tableState.absoluteAmountOfTotalExams=this.aggregatedExamResults.noOfExamsSubmittedAndNotEmpty,this.determineSubmittedAndNonEmptyValues(),this.setValuesForSubmittedAndNonEmptyFilter(this.tableState)):this.filterForSubmittedExams&&!this.filterForNonEmptySubmissions?(e=this.aggregatedExamResults.noOfExamsSubmitted,this.tableState.absoluteAmountOfTotalExams=this.aggregatedExamResults.noOfExamsSubmitted,this.setValuesForSubmittedFilter(this.tableState)):!this.filterForSubmittedExams&&this.filterForNonEmptySubmissions?(e=this.aggregatedExamResults.noOfExamsNonEmpty,this.tableState.absoluteAmountOfSubmittedExams=this.aggregatedExamResults.noOfExamsSubmittedAndNotEmpty,this.tableState.absoluteAmountOfTotalExams=this.aggregatedExamResults.noOfExamsNonEmpty,this.determineNonEmptyValues(),this.determineSubmittedAndNonEmptyValues(),this.setValuesForNonEmptyFilter(this.tableState)):(e=this.aggregatedExamResults.noOfRegisteredUsers,this.setValuesForNoFilter(this.tableState)),this.tableState.relativeAmountOfPassedExams=e>0?this.roundAndPerformLocalConversion(this.aggregatedExamResults.noOfExamsFilteredForPassed/e*100):"-",this.tableState.relativeAmountOfSubmittedExams=e>0?this.roundAndPerformLocalConversion(this.tableState.absoluteAmountOfSubmittedExams/e*100):"-"}determineSubmittedAndNonEmptyValues(){if(this.aggregatedExamResults.meanPointsSubmittedAndNonEmpty)return;let e=[],a=[],o=[],x=[];this.studentResults.forEach(c=>{if(c.exerciseGroupIdToExerciseResult){let p=Object.entries(c.exerciseGroupIdToExerciseResult).some(([,S])=>S.hasNonEmptySubmission);c.submitted&&p&&(e.push(c.overallPointsAchieved??0),o=this.collectOverallGrades(o,c),this.hasSecondCorrectionAndStarted&&(a.push(c.overallPointsAchievedInFirstCorrection??0),x=this.collectOverallGradesInFirstCorrection(x,c)))}}),this.determineMeanMedianAndStandardDeviationSubmittedAndNonEmpty(e),this.determineMeanMedianAndStandardDeviationSubmittedAndNonEmptyInFirstCorrection(a),this.gradingScaleExists&&!this.isBonus&&(this.determineGradesSubmittedAndNonEmpty(e.length>0),this.hasNumericGrades&&(this.aggregatedExamResults.standardGradeDeviationSubmittedAndNonEmpty=o.length>0?_(o):void 0,this.hasSecondCorrectionAndStarted&&(this.aggregatedExamResults.standardGradeDeviationSubmittedAndNonEmptyInFirstCorrection=x.length>0?_(x):void 0)))}determineMeanMedianAndStandardDeviationSubmittedAndNonEmpty(e){e.length>0&&(this.aggregatedExamResults.meanPointsSubmittedAndNonEmpty=G(e),this.aggregatedExamResults.medianSubmittedAndNonEmpty=N(e),this.examScoreDTO.maxPoints&&(this.aggregatedExamResults.meanScoreSubmittedAndNonEmpty=this.aggregatedExamResults.meanPointsSubmittedAndNonEmpty/this.examScoreDTO.maxPoints*100,this.aggregatedExamResults.medianScoreSubmittedAndNonEmpty=this.aggregatedExamResults.medianSubmittedAndNonEmpty/this.examScoreDTO.maxPoints*100),this.aggregatedExamResults.standardDeviationSubmittedAndNonEmpty=_(e))}determineMeanMedianAndStandardDeviationSubmittedAndNonEmptyInFirstCorrection(e){this.hasSecondCorrectionAndStarted&&e.length>0&&(this.aggregatedExamResults.meanPointsSubmittedAndNonEmptyInFirstCorrection=G(e),this.aggregatedExamResults.medianSubmittedAndNonEmptyInFirstCorrection=N(e),this.examScoreDTO.maxPoints&&(this.aggregatedExamResults.meanScoreSubmittedAndNonEmptyInFirstCorrection=this.aggregatedExamResults.meanPointsSubmittedAndNonEmptyInFirstCorrection/this.examScoreDTO.maxPoints*100,this.aggregatedExamResults.medianScoreSubmittedAndNonEmptyInFirstCorrection=this.aggregatedExamResults.medianSubmittedAndNonEmptyInFirstCorrection/this.examScoreDTO.maxPoints*100),this.aggregatedExamResults.standardDeviationSubmittedAndNonEmptyInFirstCorrection=_(e))}determineGradesSubmittedAndNonEmpty(e){e&&(this.aggregatedExamResults.meanGradeSubmittedAndNonEmpty=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,this.aggregatedExamResults.meanScoreSubmittedAndNonEmpty).gradeName,this.aggregatedExamResults.medianGradeSubmittedAndNonEmpty=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,this.aggregatedExamResults.medianScoreSubmittedAndNonEmpty).gradeName,this.hasSecondCorrectionAndStarted&&(this.aggregatedExamResults.meanGradeSubmittedAndNonEmptyInFirstCorrection=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,this.aggregatedExamResults.meanScoreSubmittedAndNonEmptyInFirstCorrection).gradeName,this.aggregatedExamResults.medianGradeSubmittedAndNonEmptyInFirstCorrection=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,this.aggregatedExamResults.medianScoreSubmittedAndNonEmptyInFirstCorrection).gradeName))}determineNonEmptyValues(){if(this.aggregatedExamResults.meanPointsNonEmpty)return;let e=[],a=[],o=[],x=[];this.studentResults.forEach(c=>{c.exerciseGroupIdToExerciseResult&&Object.entries(c.exerciseGroupIdToExerciseResult).some(([,S])=>S.hasNonEmptySubmission)&&(e.push(c.overallPointsAchieved??0),o=this.collectOverallGrades(o,c),this.hasSecondCorrectionAndStarted&&(a.push(c.overallPointsAchievedInFirstCorrection??0),x=this.collectOverallGradesInFirstCorrection(x,c)))}),this.determineMeanMedianAndStandardDeviationNonEmpty(e),this.determineMeanMedianAndStandardDeviationNonEmptyInFirstCorrection(a),this.gradingScale&&!this.isBonus&&(this.determineGradesNonEmpty(e.length>0),this.hasNumericGrades&&(this.aggregatedExamResults.standardGradeDeviationNonEmpty=o.length>0?_(o):void 0,this.hasSecondCorrectionAndStarted&&(this.aggregatedExamResults.standardGradeDeviationNonEmptyInFirstCorrection=x.length>0?_(x):void 0)))}determineMeanMedianAndStandardDeviationNonEmpty(e){e.length>0&&(this.aggregatedExamResults.meanPointsNonEmpty=G(e),this.aggregatedExamResults.medianNonEmpty=N(e),this.examScoreDTO.maxPoints&&(this.aggregatedExamResults.meanScoreNonEmpty=this.aggregatedExamResults.meanPointsNonEmpty/this.examScoreDTO.maxPoints*100,this.aggregatedExamResults.medianScoreNonEmpty=this.aggregatedExamResults.medianNonEmpty/this.examScoreDTO.maxPoints*100),this.aggregatedExamResults.standardDeviationNonEmpty=_(e))}determineMeanMedianAndStandardDeviationNonEmptyInFirstCorrection(e){this.hasSecondCorrectionAndStarted&&e.length>0&&(this.aggregatedExamResults.meanPointsNonEmptyInFirstCorrection=G(e),this.aggregatedExamResults.medianNonEmptyInFirstCorrection=N(e),this.examScoreDTO.maxPoints&&(this.aggregatedExamResults.meanScoreNonEmptyInFirstCorrection=this.aggregatedExamResults.meanPointsNonEmptyInFirstCorrection/this.examScoreDTO.maxPoints*100,this.aggregatedExamResults.medianScoreNonEmptyInFirstCorrection=this.aggregatedExamResults.medianNonEmptyInFirstCorrection/this.examScoreDTO.maxPoints*100),this.aggregatedExamResults.standardDeviationNonEmptyInFirstCorrection=_(e))}determineGradesNonEmpty(e){e&&(this.aggregatedExamResults.meanGradeNonEmpty=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,this.aggregatedExamResults.meanScoreNonEmpty).gradeName,this.aggregatedExamResults.medianGradeNonEmpty=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,this.aggregatedExamResults.medianScoreNonEmpty).gradeName,this.hasSecondCorrectionAndStarted&&(this.aggregatedExamResults.meanGradeNonEmptyInFirstCorrection=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,this.aggregatedExamResults.meanScoreNonEmptyInFirstCorrection).gradeName,this.aggregatedExamResults.medianGradeNonEmptyInFirstCorrection=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,this.aggregatedExamResults.medianScoreNonEmptyInFirstCorrection).gradeName))}collectOverallGrades(e,a){return this.gradingScaleExists&&this.hasNumericGrades&&e.push(Number(a.overallGrade)),e}collectOverallGradesInFirstCorrection(e,a){return this.gradingScaleExists&&this.hasNumericGrades&&e.push(Number(a.overallGradeInFirstCorrection)),e}setValuesForSubmittedAndNonEmptyFilter(e){this.setAverageValuesForSubmittedAndNonEmptyFilter(e),this.setMedianValuesForSubmittedAndNonEmptyFilter(e),this.setStandardDeviationForSubmittedAndNonEmptyFilter(e)}setAverageValuesForSubmittedAndNonEmptyFilter(e){let a=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsSubmittedAndNonEmpty),o=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsSubmittedAndNonEmptyInFirstCorrection),x=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanScoreSubmittedAndNonEmpty),c=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanScoreSubmittedAndNonEmptyInFirstCorrection),p=this.aggregatedExamResults.meanGradeSubmittedAndNonEmpty??"-",S=this.aggregatedExamResults.meanGradeSubmittedAndNonEmptyInFirstCorrection??"-";e.averagePointsSubmitted=a,e.averagePointsTotal=a,e.averagePointsSubmittedInFirstCorrection=o,e.averagePointsTotalInFirstCorrection=o,e.averageScoreSubmitted=x,e.averageScoreTotal=x,e.averageScoreSubmittedInFirstCorrection=c,e.averageScoreTotalInFirstCorrection=c,e.averageGradeSubmitted=p,e.averageGradeTotal=p,e.averageGradeSubmittedInFirstCorrection=S,e.averageGradeTotalInFirstCorrection=S}setMedianValuesForSubmittedAndNonEmptyFilter(e){let a=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianSubmittedAndNonEmpty),o=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianSubmittedAndNonEmptyInFirstCorrection),x=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianScoreSubmittedAndNonEmpty),c=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianScoreSubmittedAndNonEmptyInFirstCorrection),p=this.aggregatedExamResults.medianGradeSubmittedAndNonEmpty??"-",S=this.aggregatedExamResults.medianGradeSubmittedAndNonEmptyInFirstCorrection??"-";e.medianPointsSubmitted=a,e.medianPointsTotal=a,e.medianPointsSubmittedInFirstCorrection=o,e.medianPointsTotalInFirstCorrection=o,e.medianScoreSubmitted=x,e.medianScoreTotal=x,e.medianScoreSubmittedInFirstCorrection=c,e.medianScoreTotalInFirstCorrection=c,e.medianGradeSubmitted=p,e.medianGradeTotal=p,e.medianGradeSubmittedInFirstCorrection=S,e.medianGradeTotalInFirstCorrection=S}setStandardDeviationForSubmittedAndNonEmptyFilter(e){let a=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardDeviationSubmittedAndNonEmpty),o=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardDeviationSubmittedAndNonEmptyInFirstCorrection),x=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardGradeDeviationSubmittedAndNonEmpty),c=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardGradeDeviationSubmittedAndNonEmptyInFirstCorrection);e.standardDeviationSubmitted=a,e.standardDeviationTotal=a,e.standardDeviationSubmittedInFirstCorrection=o,e.standardDeviationTotalInFirstCorrection=o,e.standardGradeDeviationSubmitted=x,e.standardGradeDeviationTotal=x,e.standardGradeDeviationSubmittedInFirstCorrection=c,e.standardGradeDeviationTotalInFirstCorrection=c}setValuesForNonEmptyFilter(e){this.setAverageValuesForNonEmptyFilter(e),this.setMedianValuesForNonEmptyFilter(e),this.setStandardDeviationForNonEmptyFilter(e)}setAverageValuesForNonEmptyFilter(e){e.averagePointsSubmitted=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsSubmittedAndNonEmpty),e.averagePointsTotal=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsNonEmpty),e.averagePointsSubmittedInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsSubmittedAndNonEmptyInFirstCorrection),e.averageGradeTotalInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsNonEmptyInFirstCorrection),e.averageScoreSubmitted=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanScoreSubmittedAndNonEmpty),e.averageScoreTotal=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanScoreNonEmpty),e.averageScoreSubmittedInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanScoreSubmittedAndNonEmptyInFirstCorrection),e.averageScoreTotalInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanScoreNonEmptyInFirstCorrection),e.averageGradeSubmitted=this.aggregatedExamResults.meanGradeSubmittedAndNonEmpty??"-",e.averageGradeTotal=this.aggregatedExamResults.meanGradeNonEmpty??"-",e.averageGradeSubmittedInFirstCorrection=this.aggregatedExamResults.meanGradeSubmittedAndNonEmptyInFirstCorrection??"-",e.averageGradeTotalInFirstCorrection=this.aggregatedExamResults.meanGradeNonEmptyInFirstCorrection??"-"}setMedianValuesForNonEmptyFilter(e){e.medianPointsSubmitted=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianSubmittedAndNonEmpty),e.medianPointsTotal=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianNonEmpty),e.medianPointsSubmittedInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianSubmittedAndNonEmptyInFirstCorrection),e.medianPointsTotalInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianNonEmptyInFirstCorrection),e.medianScoreSubmitted=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianScoreSubmittedAndNonEmpty),e.medianScoreTotal=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianScoreNonEmpty),e.medianScoreSubmittedInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianScoreSubmittedAndNonEmptyInFirstCorrection),e.medianScoreTotalInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianScoreNonEmptyInFirstCorrection),e.medianGradeSubmitted=this.aggregatedExamResults.medianGradeSubmittedAndNonEmpty??"-",e.medianGradeTotal=this.aggregatedExamResults.medianGradeNonEmpty??"-",e.medianGradeSubmittedInFirstCorrection=this.aggregatedExamResults.medianGradeSubmittedAndNonEmptyInFirstCorrection??"-",e.medianGradeTotalInFirstCorrection=this.aggregatedExamResults.medianGradeTotalInFirstCorrection??"-"}setStandardDeviationForNonEmptyFilter(e){e.standardDeviationSubmitted=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardDeviationSubmittedAndNonEmpty),e.standardDeviationTotal=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardDeviationNonEmpty),e.standardDeviationSubmittedInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardDeviationSubmittedAndNonEmptyInFirstCorrection),e.standardDeviationTotalInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardDeviationNonEmptyInFirstCorrection),e.standardGradeDeviationSubmitted=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardGradeDeviationSubmittedAndNonEmpty),e.standardGradeDeviationTotal=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardGradeDeviationNonEmpty),e.standardGradeDeviationSubmittedInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardGradeDeviationSubmittedAndNonEmptyInFirstCorrection),e.standardGradeDeviationTotalInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardGradeDeviationNonEmptyInFirstCorrection)}setValuesForSubmittedFilter(e){this.setAverageValuesForSubmittedFilter(e),this.setMedianValuesForSubmittedFilter(e),this.setStandardDeviationForSubmittedFilter(e)}setAverageValuesForSubmittedFilter(e){let a=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsSubmitted),o=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsInFirstCorrection),x=this.roundAndPerformLocalConversion(this.aggregatedExamResults.meanPointsRelativeSubmitted),c=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsRelativeSubmitted),p=this.aggregatedExamResults.meanGradeSubmitted??"-",S=this.aggregatedExamResults.meanGradeInFirstCorrection??"-";e.averagePointsSubmitted=a,e.averagePointsTotal=a,e.averagePointsSubmittedInFirstCorrection=o,e.averagePointsTotalInFirstCorrection=o,e.averageScoreSubmitted=x,e.averageScoreTotal=x,e.averageScoreSubmittedInFirstCorrection=c,e.averageScoreTotalInFirstCorrection=c,e.averageGradeSubmitted=p,e.averageGradeTotal=p,e.averageGradeSubmittedInFirstCorrection=S,e.averageGradeTotalInFirstCorrection=S}setMedianValuesForSubmittedFilter(e){let a=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianSubmitted),o=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianInFirstCorrection),x=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianRelativeSubmitted),c=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianRelativeInFirstCorrection),p=this.aggregatedExamResults.medianGradeSubmitted??"-",S=this.aggregatedExamResults.medianGradeInFirstCorrection??"-";e.medianPointsSubmitted=a,e.medianPointsTotal=a,e.medianPointsSubmittedInFirstCorrection=o,e.medianPointsTotalInFirstCorrection=o,e.medianScoreSubmitted=x,e.medianScoreTotal=x,e.medianScoreSubmittedInFirstCorrection=c,e.medianScoreTotalInFirstCorrection=c,e.medianGradeSubmitted=p,e.medianGradeTotal=p,e.medianGradeSubmittedInFirstCorrection=S,e.medianGradeTotalInFirstCorrection=S}setStandardDeviationForSubmittedFilter(e){let a=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardDeviationSubmitted),o=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardDeviationInFirstCorrection),x=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardGradeDeviationSubmitted),c=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardGradeDeviationInFirstCorrection);e.standardDeviationSubmitted=a,e.standardDeviationTotal=a,e.standardDeviationSubmittedInFirstCorrection=o,e.standardDeviationTotalInFirstCorrection=o,e.standardGradeDeviationSubmitted=x,e.standardGradeDeviationTotal=x,e.standardGradeDeviationSubmittedInFirstCorrection=c,e.standardGradeDeviationTotalInFirstCorrection=c}setValuesForNoFilter(e){this.setSubmittedValuesForNoFilter(e),this.setTotalValuesForNoFilter(e)}setTotalValuesForNoFilter(e){this.setTotalAverageValuesForNoFilter(e),this.setTotalMedianValuesForNoFilter(e),this.setTotalStandardDeviationForNoFilter(e)}setTotalAverageValuesForNoFilter(e){e.averagePointsTotal=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsTotal),e.averagePointsTotalInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsTotalInFirstCorrection),e.averageScoreTotal=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsRelativeTotal),e.averageScoreTotalInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsRelativeTotalInFirstCorrection),e.averageGradeTotal=this.aggregatedExamResults.meanGradeTotal??"-",e.averageGradeTotalInFirstCorrection=this.aggregatedExamResults.meanGradeTotalInFirstCorrection??"-"}setTotalMedianValuesForNoFilter(e){e.medianPointsTotal=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianTotal),e.medianPointsTotalInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianTotalInFirstCorrection),e.medianScoreTotal=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianRelativeTotal),e.medianScoreTotalInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianRelativeTotalInFirstCorrection),e.medianGradeTotal=this.aggregatedExamResults.medianGradeTotal??"-",e.medianGradeTotalInFirstCorrection=this.aggregatedExamResults.medianGradeTotalInFirstCorrection??"-"}setTotalStandardDeviationForNoFilter(e){e.standardDeviationTotal=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardDeviationTotal),e.standardDeviationTotalInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardDeviationTotalInFirstCorrection),e.standardGradeDeviationTotal=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardGradeDeviationTotal),e.standardGradeDeviationTotalInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardGradeDeviationTotalInFirstCorrection)}setSubmittedValuesForNoFilter(e){this.setSubmittedAverageValuesForNoFilter(e),this.setSubmittedMedianValuesForNoFilter(e),this.setSubmittedStandardDeviationsForNoFilter(e)}setSubmittedAverageValuesForNoFilter(e){e.averagePointsSubmitted=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsSubmitted),e.averagePointsSubmittedInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsInFirstCorrection),e.averageScoreSubmitted=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsRelativeSubmitted),e.averageScoreSubmittedInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.meanPointsRelativeInFirstCorrection),e.averageGradeSubmitted=this.aggregatedExamResults.meanGradeSubmitted??"-",e.averageGradeSubmittedInFirstCorrection=this.aggregatedExamResults.meanGradeInFirstCorrection??"-"}setSubmittedMedianValuesForNoFilter(e){e.medianPointsSubmitted=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianSubmitted),e.medianPointsSubmittedInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianInFirstCorrection),e.medianScoreSubmitted=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianRelativeSubmitted),e.medianScoreSubmittedInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.medianRelativeInFirstCorrection),e.medianGradeSubmitted=this.aggregatedExamResults.medianGradeSubmitted??"-",e.medianGradeSubmittedInFirstCorrection=this.aggregatedExamResults.medianGradeInFirstCorrection??"-"}setSubmittedStandardDeviationsForNoFilter(e){e.standardDeviationSubmitted=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardDeviationSubmitted),e.standardDeviationSubmittedInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardDeviationInFirstCorrection),e.standardGradeDeviationSubmitted=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardGradeDeviationSubmitted),e.standardGradeDeviationSubmittedInFirstCorrection=this.roundAndLocalizeStatisticalValue(this.aggregatedExamResults.standardGradeDeviationInFirstCorrection)}roundAndLocalizeStatisticalValue(e){return e==null?"-":this.roundAndPerformLocalConversion(e)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Y({type:i,selectors:[["jhi-exam-scores"]],decls:6,vars:3,consts:[[1,"d-flex","justify-content-center"],["role","status",1,"spinner-border"],[1,"sr-only"],[1,"alert","alert-warning"],[3,"icon"],["jhiTranslate","artemisApp.examScores.noExerciseGroupAvailable"],[1,"alert","alert-info"],["jhiTranslate","artemisApp.examScores.noStudentResultAvailable"],[1,"d-flex"],["title","entity.action.export",1,"ms-auto",3,"onExport","icon","buttonSize"],[1,"d-flex","mb-1"],[3,"routerLink"],[1,"ms-2"],[1,"mb-2"],["jhiTranslate","artemisApp.examScores.examStatisticsTitle"],[1,"d-flex","align-items-center","align-content-center","mb-2"],[1,"form-check","form-check-inline"],["id","toggleFilterForSubmittedExam","type","checkbox",1,"form-check-input",3,"change","checked"],["for","toggleFilterForSubmittedExam","jhiTranslate","artemisApp.examScores.filterForSubmittedExams",1,"form-check-label"],["id","toggleFilterForNonEmptySubmission","type","checkbox",1,"form-check-input",3,"change","checked"],["for","toggleFilterForNonEmptySubmission","jhiTranslate","artemisApp.examScores.filterForNonEmptySubmissions",1,"form-check-label"],[1,"table","table-bordered","table-sm","table-striped","table-clear-width","mb-3"],[1,"table-dark"],["jhiTranslate","artemisApp.examScores.submittedColumn"],["jhiTranslate","artemisApp.examScores.totalColumn"],["scope","row","jhiTranslate","artemisApp.examScores.noOfExams"],["scope","row","jhiTranslate","artemisApp.examScores.averagePointsColumn"],["scope","row","jhiTranslate","artemisApp.examScores.medianColumn"],["scope","row","jhiTranslate","artemisApp.examScores.standardDeviationColumn"],[1,"d-block"],[1,"form-check"],["id","toggleMedianOverall","type","checkbox",1,"form-check-input",3,"change","checked"],["for","toggleMedianOverall","jhiTranslate","artemisApp.examScores.highlightOverallMedian",1,"form-check-label",3,"translateValues"],[1,"row","d-flex","justify-content-center"],[1,"col-lg-11",3,"scores","scoreToHighlight","gradingScale","isCourseScore","dataLabelFormatting"],["jhiTranslate","artemisApp.examScores.studentResultsTitle"],[1,"table-responsive"],[1,"table","table-sm","table-striped","table-bordered"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["jhiSortBy","name"],["jhiTranslate","artemisApp.examScores.nameColumn"],["jhiSortBy","login"],["jhiTranslate","artemisApp.examScores.loginColumn"],["jhiSortBy","email"],["jhiTranslate","artemisApp.examScores.eMailColumn"],["jhiSortBy","registrationNumber"],["jhiTranslate","artemisApp.examScores.registrationNumberColumn"],["jhiSortBy","overallPointsAchieved"],["jhiTranslate","artemisApp.examScores.overallPointsColumn"],["jhiSortBy","overallScoreAchieved"],["jhiTranslate","artemisApp.examScores.overallScoreColumn"],[1,"font-weigth-bold"],["colspan","3","jhiTranslate","artemisApp.examScores.secondCorrectionColumn"],["colspan","3","jhiTranslate","artemisApp.examScores.firstCorrectionColumn",2,"border-left","3px solid grey"],["colspan","2","jhiTranslate","artemisApp.examScores.secondCorrectionColumn"],["colspan","2","jhiTranslate","artemisApp.examScores.firstCorrectionColumn",2,"border-left","3px solid grey"],["jhiTranslate","artemisApp.examScores.passedColumn"],["jhiTranslate","artemisApp.examScores.passedColumn",2,"border-left","3px solid grey"],["jhiTranslate","artemisApp.examScores.submittedColumn",3,"ngStyle"],[2,"border-left","3px solid lightgrey"],[3,"ngStyle"],["scope","row",3,"jhiTranslate"],["scope","row","jhiTranslate","artemisApp.examScores.standardGradeDeviationColumn"],["id","toggleMedianPassed","type","checkbox",1,"form-check-input",3,"change","checked"],["for","toggleMedianPassed","jhiTranslate","artemisApp.examScores.highlightPassedMedian",1,"form-check-label",3,"translateValues"],["jhiTranslate","artemisApp.examScores.gradesBeforeBonus",1,"text-center","mb-0"],["jhiTranslate","artemisApp.examScores.gradesAfterBonus",1,"text-center","mt-5","mb-0"],[1,"col-lg-11",3,"gradeNames","scoreToHighlight","gradingScale","isCourseScore","dataLabelFormatting"],[1,"mt-3"],["jhiTranslate","artemisApp.examScores.ExerciseGroupsTitle"],[1,"table","table-bordered","table-sm","body-striped"],["jhiTranslate","artemisApp.examScores.titleExerciseGroupColumn"],["text","artemisApp.examScores.participantsExerciseGroupTooltip"],["text","artemisApp.examScores.averageExerciseGroupTooltip"],["jhiTranslate","artemisApp.examScores.titleExerciseColumn"],["text","artemisApp.examScores.participantsExerciseTooltip"],["text","artemisApp.examScores.averageExerciseTooltip"],[1,"col","mb-3"],[3,"averageScores","course"],[3,"jhiTranslate"],[3,"rowSpan"],[3,"jhiSortBy"],["jhiSortBy","gradeWithBonus.bonusGrade"],["jhiSortBy","gradeWithBonus.finalGrade"],["jhiTranslate","artemisApp.examScores.finalGradeColumn"],["jhiSortBy","gradeWithBonus.achievedPresentationScore"],["jhiTranslate","artemisApp.examScores.presentationScoreThresholdColumn",3,"translateValues"],["jhiSortBy","mostSeverePlagiarismVerdict"],["jhiTranslate","artemisApp.examScores.mostSeverePlagiarismVerdictColumn"],["jhiSortBy","gradeWithBonus.mostSeverePlagiarismVerdict"],["jhiTranslate","artemisApp.examScores.mostSeverePlagiarismVerdictInBonusColumn"],[2,"text-align","center"],[2,"color","#28a745","font-size","1.5em",3,"icon"],[2,"color","#ca2024","font-size","1.5em",3,"icon"]],template:function(a,o){a&1&&(r(0,"div"),t(1,`
    `),h(2,jt,10,0)(3,Wt,6,2)(4,xn,241,86),s(),t(5,`
`)),a&2&&(n(2),u(o.isLoading?2:-1),n(),u(!o.isLoading&&(!o.studentResults||!o.exerciseGroups)?3:-1),n(),u(!o.isLoading&&o.studentResults&&o.exerciseGroups?4:-1))},dependencies:[Ve,bt,_t,ft,Je,Ze,Qe,Q,q,Ke,Xe,Oe,De],styles:[".body-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]:nth-child(2n){background-color:#0000000d}.table-clear-width[_ngcontent-%COMP%]{width:unset}","[_nghost-%COMP%]  .textDataLabel{font-weight:bolder;font-size:small!important;alignment-baseline:middle;text-anchor:start}@media (min-width: 1420px){[_nghost-%COMP%]  .textDataLabel{transform:rotate(0);font-size:medium!important;alignment-baseline:baseline;text-anchor:middle}}"],changeDetection:0})}return i})();export{ha as ExamScoresComponent,b as MedianType};
//# sourceMappingURL=exam-scores.component-B7AOX7YM.js.map
