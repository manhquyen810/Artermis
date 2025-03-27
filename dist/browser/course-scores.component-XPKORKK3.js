import{a as Ye,b as ce,c as He,d as Xe,e as W,f as Je,g as Ze,h as et}from"./chunk-RCSXKSAO.js";import{a as Qe}from"./chunk-HGMQBA4T.js";import{a as qe}from"./chunk-5FAM7LIP.js";import{a as ie,b as ne,c as re,d as se,e as D,f as B,n as C,o as M,p as Ke,q as Ue,r as oe,t as ae}from"./chunk-36ZQVNBH.js";import{a as Le}from"./chunk-GRLLGFUW.js";import{a as We,b as ze,c as $e}from"./chunk-XUG3TIT6.js";import{a as te,b as Fe}from"./chunk-PTO7UATL.js";import{a as Q,b as Z,c as ee}from"./chunk-CWEZ7BG4.js";import"./chunk-O4VJ5OXY.js";import"./chunk-BDII35IB.js";import"./chunk-LARBQRTJ.js";import{a as je}from"./chunk-OTCBNILH.js";import{a as Me,b as Ve}from"./chunk-VRAVBLUK.js";import{b as Be}from"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import"./chunk-2QXIMOEO.js";import"./chunk-2CUFQLAH.js";import{a as ke}from"./chunk-VL2AJDYR.js";import{a as Ge}from"./chunk-2CSD5TLZ.js";import"./chunk-ZM53HDCE.js";import"./chunk-Z6NSEM73.js";import{d as Ie}from"./chunk-AR57MWOI.js";import"./chunk-A5PTZAPN.js";import"./chunk-AU6UEH3U.js";import"./chunk-FGAONQTL.js";import"./chunk-HQ6UGNQX.js";import"./chunk-ZLJ76G5I.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import{d as q,e as P,f as E,g as R}from"./chunk-CT44YL7Q.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import{K as Te}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import"./chunk-WA5GEAJB.js";import{a as Ae}from"./chunk-VK7JPHFE.js";import{A as G}from"./chunk-5GXY5RYT.js";import{a as we}from"./chunk-K3W6YFKH.js";import"./chunk-JXJXC4DZ.js";import{d as Re}from"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import{p as H}from"./chunk-DID2YGL7.js";import{c as Oe,e as Ne,f as J}from"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Qa as ve,Zc as be,cc as ye,qa as _e}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import{a as X}from"./chunk-NOBD5HSR.js";import{a as De}from"./chunk-U54OSGNH.js";import{f as Ee,i as Ce}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{M as Pe,n as ge}from"./chunk-IOA4DPXY.js";import{Db as a,Dc as j,Ea as v,F as pe,Id as Se,Ma as O,Mc as V,Na as N,Oc as d,P as de,Rc as F,Sc as $,Tb as ue,Zb as x,dd as i,ed as g,fd as L,gd as S,kc as h,ld as me,md as K,nd as xe,rd as he,s as le,sc as f,sd as fe,uc as I,vc as A,wc as w,xc as s,yc as o,yd as U,zc as m,zd as Y}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var y=class extends Map{getValue(p,e){return this.get(p)?.get(e.id)}setValue(p,e,t){this.get(p)||this.set(p,new Map),this.get(p).set(e.id,t)}};var z=class{user;participations=[];presentationScore=0;presentationPoints=0;numberOfParticipatedExercises=0;numberOfSuccessfulExercises=0;overallPoints=0;pointsPerExercise=new Map;sumPointsPerExerciseType=new Map;scorePerExerciseType=new Map;pointsPerExerciseType=new y;gradeStep;constructor(p){this.user=p;for(let e of Object.values(Oe))this.sumPointsPerExerciseType.set(e,0),this.scorePerExerciseType.set(e,0),this.pointsPerExerciseType.set(e,new Map)}};var it=(r,p)=>({exercisesLength:r,studentsLength:p}),nt=r=>["/course-management",r,"grading-system"];function rt(r,p){if(r&1&&(i(0,`
                `),s(1,"a",22),i(2,`
                    `),m(3,"fa-icon",23),i(4," "),m(5,"span",24),i(6,`
                `),o(),i(7,`
            `)),r&2){let e=d(2);a(),h("routerLink",he(2,nt,e.course.id)),a(2),h("icon",e.faClipboard)}}function st(r,p){if(r&1&&(i(0,`
            `),s(1,"span",25),i(2,`
                `),m(3,"fa-icon",26),i(4,`\xA0
                `),s(5,"span",27),i(6," Loading the results of all students... "),o(),i(7,`
            `),o(),i(8,`
        `)),r&2){let e=d(2);a(3),h("icon",e.faSpinner)}}function ot(r,p){if(r&1&&(i(0,`
                    `),m(1,"jhi-participant-scores-distribution",28),i(2,`
                `)),r&2){let e=d(2);a(),h("gradingScale",e.gradingScale)("scores",e.scoresToDisplay)("scoreToHighlight",e.valueToHighlight)}}function at(r,p){if(r&1){let e=j();i(0,`
                `),s(1,"jhi-csv-export-button",29),V("onExport",function(n){O(e);let c=d(2);return N(c.exportResults(n))}),o(),i(2,`
            `)}if(r&2){let e=d(2);a(),h("icon",e.faDownload)("disabled",!(e.students.length>0))("buttonSize",e.ButtonSize.SMALL)}}function ct(r,p){if(r&1&&(i(0,`
                                    `),s(1,"th",45),i(2,`
                                        `),m(3,"span",46),i(4,`
                                        `),m(5,"fa-icon",23),i(6,`
                                    `),o(),i(7,`
                                `)),r&2){let e=d().$implicit,t=d(3);a(),$("jhiSortBy","sumPointsPerExerciseType.",e,""),a(2),$("jhiTranslate","artemisApp.instructorDashboard.",e,"Points"),a(2),h("icon",t.faSort)}}function lt(r,p){if(r&1&&(i(0,`
                                `),x(1,ct,8,5)),r&2){let e=p.$implicit,t=d(3);a(),f(t.maxNumberOfPointsPerExerciseType.get(e)>0?1:-1)}}function pt(r,p){if(r&1&&(i(0,`
                                `),s(1,"th",47),m(2,"span",48),i(3," "),m(4,"fa-icon",23),o(),i(5,`
                            `)),r&2){let e=d(3);a(4),h("icon",e.faSort)}}function dt(r,p){if(r&1&&(i(0,`
                                `),s(1,"th",41),i(2,`
                                    `),m(3,"span",46),i(4,`
                                    `),m(5,"fa-icon",23),i(6,`
                                `),o(),i(7,`
                            `)),r&2){let e=d(3);a(3),F("jhiTranslate",e.isBonus?"artemisApp.courseScoreCalculation.gradingSystemBonus":"artemisApp.courseScoreCalculation.gradingSystemGrade"),a(2),h("icon",e.faSort)}}function ut(r,p){if(r&1&&(i(0,`
                                    `),s(1,"th"),i(2),o(),i(3,`
                                `)),r&2){let e=d().$implicit,t=d(3);a(2),g(t.maxNumberOfPointsPerExerciseType.get(e))}}function mt(r,p){if(r&1&&(i(0,`
                                `),x(1,ut,4,1)),r&2){let e=p.$implicit,t=d(3);a(),f(t.maxNumberOfPointsPerExerciseType.get(e)>0?1:-1)}}function xt(r,p){if(r&1&&(i(0,`
                                `),s(1,"th"),i(2),o(),i(3,`
                            `)),r&2){let e=d(3);a(2),g(e.maxNumberOfPresentationPoints)}}function ht(r,p){if(r&1&&(i(0,`
                                `),s(1,"th"),i(2),o(),i(3,`
                            `)),r&2){let e=d(3);a(2),g(e.maxGrade)}}function ft(r,p){if(r&1&&(i(0,`
                                    `),s(1,"th"),i(2),o(),i(3,`
                                `)),r&2){let e=d().$implicit,t=d(3);a(2),S(`
                                        `,t.localize(t.averageNumberOfPointsPerExerciseTypes.get(e)),`
                                        (`,t.localize(t.roundScorePercentSpecifiedByCourseSettings(t.averageNumberOfPointsPerExerciseTypes.get(e)/t.maxNumberOfPointsPerExerciseType.get(e),t.course)),`%)
                                    `)}}function St(r,p){if(r&1&&(i(0,`
                                `),x(1,ft,4,2)),r&2){let e=p.$implicit,t=d(3);a(),f(t.maxNumberOfPointsPerExerciseType.get(e)>0?1:-1)}}function gt(r,p){if(r&1&&(i(0,`
                                `),s(1,"th"),i(2),o(),i(3,`
                            `)),r&2){let e=d(3);a(2),S(`
                                    `,e.localize(e.averageNumberOfPresentationPoints),`
                                    (`,e.localize(e.roundScorePercentSpecifiedByCourseSettings(e.averageNumberOfPresentationPoints/e.maxNumberOfPresentationPoints,e.course)),`%)
                                `)}}function Pt(r,p){if(r&1&&(i(0,`
                                `),s(1,"th"),i(2),o(),i(3,`
                            `)),r&2){let e=d(3);a(2),L(`
                                    `,e.averageGrade,`
                                `)}}function Et(r,p){if(r&1&&(i(0,`
                                        `),s(1,"td"),i(2),o(),i(3,`
                                    `)),r&2){let e=d().$implicit,t=d().$implicit,n=d(3);a(2),S(`
                                            `,n.localize(t.sumPointsPerExerciseType.get(e)),`
                                            (`,n.localize(n.roundScorePercentSpecifiedByCourseSettings(t.sumPointsPerExerciseType.get(e)/n.maxNumberOfPointsPerExerciseType.get(e),n.course)),`%)
                                        `)}}function Ct(r,p){if(r&1&&(i(0,`
                                    `),x(1,Et,4,2)),r&2){let e=p.$implicit,t=d(4);a(),f(t.maxNumberOfPointsPerExerciseType.get(e)>0?1:-1)}}function Tt(r,p){if(r&1&&(i(0,`
                                    `),s(1,"td"),i(2),o(),i(3,`
                                `)),r&2){let e=d().$implicit,t=d(3);a(2),S(`
                                        `,t.localize(e.presentationPoints),`
                                        (`,t.localize(t.roundScorePercentSpecifiedByCourseSettings(e.presentationPoints/t.maxNumberOfPresentationPoints,t.course)),`%)
                                    `)}}function _t(r,p){if(r&1&&(i(0,`
                                    `),s(1,"td"),i(2),o(),i(3,`
                                `)),r&2){let e=d().$implicit;a(2),L(`
                                        `,e.gradeStep==null?null:e.gradeStep.gradeName,`
                                    `)}}function vt(r,p){if(r&1&&(i(0,`
                            `),s(1,"tr"),i(2,`
                                `),s(3,"td"),i(4),o(),i(5,`
                                `),s(6,"td"),i(7),o(),i(8,`
                                `),s(9,"td"),i(10),o(),i(11,`
                                `),s(12,"td"),i(13),o(),i(14,`
                                `),A(15,Ct,2,1,null,null,I),x(17,Tt,4,2),s(18,"td"),i(19),o(),i(20,`
                                `),x(21,_t,4,1),o(),i(22,`
                        `)),r&2){let e=p.$implicit,t=d(3);a(4),g(e.user.name),a(3),g(e.user.login),a(3),S(`
                                    `,e.numberOfParticipatedExercises,`
                                    (`,t.localize(t.roundScorePercentSpecifiedByCourseSettings(e.numberOfParticipatedExercises/t.exercisesOfCourseThatAreIncludedInScoreCalculation.length,t.course)),`%)
                                `),a(3),S(`
                                    `,e.numberOfSuccessfulExercises,`
                                    (`,t.localize(t.roundScorePercentSpecifiedByCourseSettings(e.numberOfSuccessfulExercises/t.exercisesOfCourseThatAreIncludedInScoreCalculation.length,t.course)),`%)
                                `),a(2),w(t.exerciseTypes),a(2),f(t.maxNumberOfPresentationPoints>0?17:-1),a(2),S(`
                                    `,t.localize(e.overallPoints),`
                                    (`,t.localize(t.roundScorePercentSpecifiedByCourseSettings(e.overallPoints/t.maxNumberOfOverallPoints,t.course)),`%)
                                `),a(2),f(t.gradingScaleExists?21:-1)}}function yt(r,p){if(r&1){let e=j();i(0,`
            `),s(1,"div",30),i(2,`
                `),s(3,"table",31),i(4,`
                    `),s(5,"thead"),i(6,`
                        `),s(7,"tr",32),xe("predicateChange",function(n){O(e);let c=d(2);return K(c.predicate,n)||(c.predicate=n),N(n)})("ascendingChange",function(n){O(e);let c=d(2);return K(c.reverse,n)||(c.reverse=n),N(n)}),V("sortChange",function(){O(e);let n=d(2);return N(n.sortRows())}),i(8,`
                            `),s(9,"th",33),i(10,`
                                `),m(11,"span",34),i(12,`
                                `),m(13,"fa-icon",23),i(14,`
                            `),o(),i(15,`
                            `),s(16,"th",35),i(17,`
                                `),m(18,"span",36),i(19,`
                                `),m(20,"fa-icon",23),i(21,`
                            `),o(),i(22,`
                            `),s(23,"th",37),i(24,`
                                `),m(25,"span",38),i(26,`
                                `),m(27,"fa-icon",23),i(28,`
                            `),o(),i(29,`
                            `),s(30,"th",39),i(31,`
                                `),m(32,"span",40),i(33,`
                                `),m(34,"fa-icon",23),i(35,`
                            `),o(),i(36,`
                            `),A(37,lt,2,1,null,null,I),x(39,pt,6,1),s(40,"th",41),m(41,"span",42),i(42," "),m(43,"fa-icon",23),o(),i(44,`
                            `),x(45,dt,8,2),o(),i(46,`
                        `),s(47,"tr"),i(48,`
                            `),s(49,"th"),m(50,"span",43),o(),i(51,`
                            `),m(52,"th"),i(53,`
                            `),s(54,"th"),i(55),o(),i(56,`
                            `),s(57,"th"),i(58),o(),i(59,`
                            `),A(60,mt,2,1,null,null,I),x(62,xt,4,1),s(63,"th"),i(64),o(),i(65,`
                            `),x(66,ht,4,1),o(),i(67,`
                        `),s(68,"tr"),i(69,`
                            `),s(70,"th"),m(71,"span",44),o(),i(72,`
                            `),m(73,"th"),i(74,`
                            `),s(75,"th"),i(76),o(),i(77,`
                            `),s(78,"th"),i(79),o(),i(80,`
                            `),A(81,St,2,1,null,null,I),x(83,gt,4,2),s(84,"th"),i(85),o(),i(86,`
                            `),x(87,Pt,4,1),o(),i(88,`
                    `),o(),i(89,`
                    `),s(90,"tbody"),i(91,`
                        `),A(92,vt,23,10,null,null,I),o(),i(94,`
                `),o(),i(95,`
            `),o(),i(96,`
        `)}if(r&2){let e=d(2);a(7),me("predicate",e.predicate)("ascending",e.reverse),a(6),h("icon",e.faSort),a(7),h("icon",e.faSort),a(7),h("icon",e.faSort),a(7),h("icon",e.faSort),a(3),w(e.exerciseTypes),a(2),f(e.maxNumberOfPresentationPoints>0?39:-1),a(4),h("icon",e.faSort),a(2),f(e.gradingScaleExists?45:-1),a(10),g(e.exercisesOfCourseThatAreIncludedInScoreCalculation.length),a(3),g(e.exercisesOfCourseThatAreIncludedInScoreCalculation.length),a(2),w(e.exerciseTypes),a(2),f(e.maxNumberOfPresentationPoints>0?62:-1),a(2),g(e.maxNumberOfOverallPoints),a(2),f(e.gradingScaleExists?66:-1),a(10),S(`
                                `,e.localize(e.averageNumberOfParticipatedExercises),`
                                (`,e.localize(e.roundScorePercentSpecifiedByCourseSettings(e.averageNumberOfParticipatedExercises/e.exercisesOfCourseThatAreIncludedInScoreCalculation.length,e.course)),`%)
                            `),a(3),S(`
                                `,e.localize(e.averageNumberOfSuccessfulExercises),`
                                (`,e.localize(e.roundScorePercentSpecifiedByCourseSettings(e.averageNumberOfSuccessfulExercises/e.exercisesOfCourseThatAreIncludedInScoreCalculation.length,e.course)),`%)
                            `),a(2),w(e.exerciseTypes),a(2),f(e.maxNumberOfPresentationPoints>0?83:-1),a(2),S(`
                                `,e.localize(e.averageNumberOfOverallPoints),`
                                (`,e.localize(e.roundScorePercentSpecifiedByCourseSettings(e.averageNumberOfOverallPoints/e.maxNumberOfOverallPoints,e.course)),`%)
                            `),a(2),f(e.gradingScaleExists?87:-1),a(5),w(e.students)}}function bt(r,p){if(r&1){let e=j();i(0,`
    `),s(1,"div"),i(2,`
        `),s(3,"div",0),i(4,`
            `),s(5,"h4"),i(6),s(7,"small",1),i(8),o(),i(9,`
            `),o(),i(10,`
            `),x(11,rt,8,4),o(),i(12,`
        `),x(13,st,9,1),s(14,"div",2),i(15,`
            `),s(16,"div",3),i(17,`
                `),s(18,"div",4),i(19,`
                    `),m(20,"h4",5),i(21,`
                `),o(),i(22,`
                `),x(23,ot,3,3),o(),i(24,`
            `),s(25,"div",6),i(26,`
                `),s(27,"table",7),i(28,`
                    `),s(29,"thead",8),i(30,`
                        `),s(31,"tr"),i(32,`
                            `),m(33,"th"),i(34,`
                            `),s(35,"th"),i(36,`
                                `),m(37,"span",9),i(38,`
                            `),o(),i(39,`
                            `),s(40,"th"),i(41,`
                                `),m(42,"span",10),i(43,`
                            `),o(),i(44,`
                        `),o(),i(45,`
                    `),o(),i(46,`
                    `),s(47,"tbody"),i(48,`
                        `),s(49,"tr"),i(50,`
                            `),s(51,"th"),i(52,`
                                `),m(53,"span",11),i(54,`
                            `),o(),i(55,`
                            `),s(56,"td"),i(57),o(),i(58,`
                            `),s(59,"td"),i(60),o(),i(61,`
                        `),o(),i(62,`
                        `),s(63,"tr"),i(64,`
                            `),s(65,"th"),i(66,`
                                `),s(67,"div",12),i(68,`
                                    `),s(69,"input",13),U(70,"artemisTranslate"),V("click",function(){O(e);let n=d();return N(n.highlightBar(n.highlightType.AVERAGE))}),o(),i(71,`
                                    `),s(72,"label",14),i(73,"Average points (score)"),o(),i(74,`
                                `),o(),i(75,`
                            `),o(),i(76,`
                            `),s(77,"td",15),i(78),o(),i(79,`
                            `),s(80,"td"),i(81),o(),i(82,`
                        `),o(),i(83,`
                        `),s(84,"tr"),i(85,`
                            `),s(86,"th"),i(87,`
                                `),s(88,"div",12),i(89,`
                                    `),s(90,"input",16),U(91,"artemisTranslate"),V("click",function(){O(e);let n=d();return N(n.highlightBar(n.highlightType.MEDIAN))}),o(),i(92,`
                                    `),s(93,"label",17),i(94,"Median points (score)"),o(),i(95,`
                                `),o(),i(96,`
                            `),o(),i(97,`
                            `),s(98,"td",18),i(99),o(),i(100,`
                            `),s(101,"td"),i(102),o(),i(103,`
                        `),o(),i(104,`
                        `),s(105,"tr"),i(106,`
                            `),s(107,"th"),i(108,`
                                `),m(109,"span",19),i(110,`
                            `),o(),i(111,`
                            `),s(112,"td"),i(113),o(),i(114,`
                            `),s(115,"td"),i(116),o(),i(117,`
                        `),o(),i(118,`
                    `),o(),i(119,`
                `),o(),i(120,`
            `),o(),i(121,`
        `),o(),i(122,`
        `),m(123,"div",20),i(124,`
        `),s(125,"div",21),i(126,`
            `),x(127,at,3,3),o(),i(128,`
        `),x(129,yt,97,22),o(),i(130,`
`)}if(r&2){let e=d();a(6),L(`
                `,e.course.title,`
                `),a(),h("translateValues",fe(31,it,e.exercisesOfCourseThatAreIncludedInScoreCalculation.length,e.students.length)),a(),S("",e.exercisesOfCourseThatAreIncludedInScoreCalculation.length," released exercises, ",e.students.length," students with results"),a(3),f(e.course!=null&&e.course.isAtLeastInstructor?11:-1),a(2),f(e.exportReady?-1:13),a(10),f(e.scoresToDisplay?23:-1),a(34),g(e.exercisesOfCourseThatAreIncludedInScoreCalculation.length),a(3),g(e.numberOfReleasedExercises),a(9),F("ngbTooltip",Y(70,27,"artemisApp.instructorDashboard.statisticsTable.highlightInChart")),h("checked",e.highlightedType===e.highlightType.AVERAGE),a(8),h("ngClass",e.highlightedType),a(),S(`
                                `,e.roundValueSpecifiedByCourseSettings(e.averageNumberOfOverallPoints,e.course)," (",e.averageScoreIncluded,`%)
                            `),a(3),S("",e.averagePointsTotal," (",e.averageScoreTotal,"%)"),a(9),F("ngbTooltip",Y(91,29,"artemisApp.instructorDashboard.statisticsTable.highlightInChart")),h("checked",e.highlightedType===e.highlightType.MEDIAN),a(8),h("ngClass",e.highlightedType),a(),S("",e.medianPointsIncluded," (",e.medianScoreIncluded,"%)"),a(3),S("",e.medianPointsTotal," (",e.medianScoreTotal,"%)"),a(11),g(e.standardDeviationPointsIncluded),a(3),g(e.standardDeviationPointsTotal),a(11),f(e.exportReady?127:-1),a(2),f(e.exportReady?129:-1)}}var b=function(r){return r.AVERAGE="average",r.MEDIAN="median",r.NONE="none",r}(b||{}),Ei=(()=>{class r{route=v(Ee);courseService=v(Ie);sortService=v(je);changeDetector=v(Se);languageHelper=v(ke);localeConversionService=v(Ge);participantScoresService=v(Ye);gradingSystemService=v(Le);plagiarismCasesService=v(qe);paramSub;languageChangeSubscription;course;allParticipationsOfCourse=[];exercisesOfCourseThatAreIncludedInScoreCalculation=[];students=[];exerciseTypesWithExercises;exerciseSuccessfulPerType=new y;exerciseParticipationsPerType=new y;exerciseAveragePointsPerType=new y;exerciseMaxPointsPerType=new y;exercisesPerType=new Map;exportReady=!1;predicate;reverse;maxNumberOfPointsPerExerciseType=new Map;maxNumberOfOverallPoints=0;maxNumberOfPresentationPoints=0;averageNumberOfParticipatedExercises=0;averageNumberOfSuccessfulExercises=0;averageNumberOfPointsPerExerciseTypes=new Map;averageNumberOfOverallPoints=0;averageNumberOfPresentationPoints=0;studentIdToCourseScoreDTOs=new Map;gradingScaleExists=!1;gradingScale;isBonus;maxGrade;averageGrade;scoresToDisplay;valueToHighlight;highlightedType=b.NONE;numberOfReleasedExercises;averageScoreIncluded=0;medianScoreIncluded=0;medianPointsIncluded=0;averageScoreTotal=0;averagePointsTotal=0;medianScoreTotal=0;medianPointsTotal=0;standardDeviationPointsIncluded=0;standardDeviationPointsTotal=0;exerciseTypes=Ne;highlightType=b;roundScorePercentSpecifiedByCourseSettings=P;roundValueSpecifiedByCourseSettings=E;ButtonSize=Be;faSort=ve;faDownload=ye;faSpinner=be;faClipboard=_e;constructor(){this.reverse=!1,this.predicate="id"}ngOnInit(){this.paramSub=this.route.params.subscribe(e=>{this.courseService.findWithExercises(e.courseId).subscribe(t=>{this.initializeWithCourse(t.body)})}),this.languageChangeSubscription=this.languageHelper.language.subscribe(()=>{this.changeDetector.detectChanges()})}ngOnDestroy(){this.paramSub&&this.paramSub.unsubscribe(),this.languageChangeSubscription&&this.languageChangeSubscription.unsubscribe()}sortRows(){this.sortService.sortByProperty(this.students,this.predicate,this.reverse)}initializeWithCourse(e){this.course=e,this.initializeExerciseTitles(),this.exercisesOfCourseThatAreIncludedInScoreCalculation=this.determineExercisesIncludedInScore(this.course),this.numberOfReleasedExercises=this.determineReleasedExercises(this.course).length,this.calculateCourseStatistics(this.course.id)}initializeExerciseTitles(){if(!this.course.exercises)return;let e=new Map;for(let t of this.course.exercises){let n=t.title;if(e.has(n)){let c=e.get(n);e.set(n,c+1)}else e.set(n,1)}for(let t of this.course.exercises)e.has(t.title)&&e.get(t.title)>1&&(t.title=`${t.title} (id=${t.id})`)}determineExercisesIncludedInScore(e){return e.exercises.filter(t=>{let n=!t.releaseDate||t.releaseDate.isBefore(H()),c=t.includedInOverallScore!==J.NOT_INCLUDED;return n&&c}).sort(r.compareExercises)}filterExercisesTypesWithExercises(){return this.exerciseTypes.filter(e=>(this.exercisesPerType.get(e)?.length??0)!==0)}calculateCourseStatistics(e){let t=this.courseService.findAllParticipationsWithResults(e),n=this.gradingSystemService.findGradingScaleForCourse(e).pipe(de(()=>le(new Pe))),c=this.plagiarismCasesService.getCoursePlagiarismCasesForInstructor(e);pe([t,n,c]).subscribe(([l,u,T])=>{this.allParticipationsOfCourse=l,u.body&&this.setUpGradingScale(u.body),this.calculateExerciseLevelStatistics(),this.exerciseTypesWithExercises=this.filterExercisesTypesWithExercises(),this.calculateStudentLevelStatistics(),this.gradingScaleExists&&this.calculateGradingScaleInformation(T.body??void 0),this.calculateAverageAndMedianScores(),this.scoresToDisplay=this.students.map(_=>P(_.overallPoints/this.maxNumberOfOverallPoints,this.course)),this.highlightBar(b.AVERAGE),this.participantScoresService.findCourseScores(e).subscribe(_=>{let k=_.body;this.compareNewCourseScoresCalculationWithOldCalculation(k)})})}compareNewCourseScoresCalculationWithOldCalculation(e){if(!(!this.students||!e)){for(let t of e)this.studentIdToCourseScoreDTOs.set(t.studentId,t);for(let t of this.students)this.checkStudentScoreCalculation(t)}}checkStudentScoreCalculation(e){let t=E(e.overallPoints,this.course),c={scoreAchieved:P(e.overallPoints/this.maxNumberOfOverallPoints,this.course),pointsAchieved:t,userId:e.user.id,userLogin:e.user.login,regularPointsAchievable:this.maxNumberOfOverallPoints},l=this.studentIdToCourseScoreDTOs.get(e.user.id);if(l){if(l.scoreAchieved=E(l.scoreAchieved,this.course),l.pointsAchieved=E(l.pointsAchieved,this.course),Math.abs(l.pointsAchieved-c.pointsAchieved)>.1){let u=`Different course points in new calculation. Regular Calculation: ${JSON.stringify(c)}. New Calculation: ${JSON.stringify(l)}`;this.logErrorOnSentry(u)}if(Math.abs(l.scoreAchieved-c.scoreAchieved)>.1){let u=`Different course score in new calculation. Regular Calculation: ${JSON.stringify(c)}. New Calculation : ${JSON.stringify(l)}`;this.logErrorOnSentry(u)}}else{let u=`User scores not included in new calculation: ${JSON.stringify(c)}`;this.logErrorOnSentry(u)}}logErrorOnSentry(e){X(new Error(e))}calculateExerciseLevelStatistics(){for(let e of this.exerciseTypes){let t=this.exercisesOfCourseThatAreIncludedInScoreCalculation.filter(l=>l.type===e);this.exercisesPerType.set(e,t);let n=new Map;t.forEach(l=>n.set(l.id,l.maxPoints)),this.exerciseMaxPointsPerType.set(e,n);let c=t.filter(l=>l.includedInOverallScore===J.INCLUDED_COMPLETELY).map(l=>l.maxPoints);this.maxNumberOfPointsPerExerciseType.set(e,G(c))}this.maxNumberOfOverallPoints=0;for(let e of this.maxNumberOfPointsPerExerciseType)this.maxNumberOfOverallPoints+=e[1];this.calculateReachablePresentationPoints()}calculateReachablePresentationPoints(){let e=this.gradingScale?.presentationsNumber??0,t=this.gradingScale?.presentationsWeight??0;if(this.maxNumberOfOverallPoints>0&&e>0&&t>0&&t<100){let c=-this.maxNumberOfOverallPoints/(t-100)*100*t/100;this.maxNumberOfPresentationPoints=E(c,this.course),this.maxNumberOfOverallPoints+=this.maxNumberOfPresentationPoints}}calculateStudentLevelStatistics(){let e=this.mapStudentIdToStudentStatistics();for(let t of this.exercisesOfCourseThatAreIncludedInScoreCalculation)t.numberOfParticipationsWithRatedResult=0,t.numberOfSuccessfulParticipations=0;e.forEach(t=>{this.students.push(t);for(let n of this.determineReleasedExercises(this.course))this.updateStudentStatisticsWithExerciseResults(t,n);for(let n of this.exerciseTypes)this.maxNumberOfPointsPerExerciseType.get(n)>0&&t.scorePerExerciseType.set(n,t.sumPointsPerExerciseType.get(n)/this.maxNumberOfPointsPerExerciseType.get(n)*100);this.addPresentationPointsForStudent(t)});for(let t of this.exerciseTypes)this.averageNumberOfPointsPerExerciseTypes.set(t,R(this.students.map(n=>n.sumPointsPerExerciseType.get(t))));this.averageNumberOfOverallPoints=R(this.students.map(t=>t.overallPoints)),this.averageNumberOfPresentationPoints=R(this.students.map(t=>t.presentationPoints)),this.averageNumberOfSuccessfulExercises=R(this.students.map(t=>t.numberOfSuccessfulExercises)),this.averageNumberOfParticipatedExercises=R(this.students.map(t=>t.numberOfParticipatedExercises));for(let t of this.exerciseTypes)for(let n of this.exercisesPerType.get(t))n.averagePoints=G(this.students.map(c=>c.pointsPerExercise.get(n.id)))/this.students.length,this.exerciseAveragePointsPerType.setValue(t,n,n.averagePoints),this.exerciseParticipationsPerType.setValue(t,n,n.numberOfParticipationsWithRatedResult),this.exerciseSuccessfulPerType.setValue(t,n,n.numberOfSuccessfulParticipations);this.exportReady=!0}addPresentationPointsForStudent(e){let t=this.gradingScale?.presentationsNumber??0;if(e.presentationScore>0&&t>0&&this.maxNumberOfPresentationPoints>0){let n=e.presentationScore/t,c=this.maxNumberOfPresentationPoints*n/100;e.presentationPoints=E(c,this.course),e.overallPoints+=e.presentationPoints}}mapStudentIdToStudentStatistics(){let e=new Map;for(let t of this.allParticipationsOfCourse){t.results?.forEach(c=>c.participation=t);let n=t.student?[t.student]:t.team.students;if(n)for(let c of n){let l=e.get(c.id);l||(l=new z(c),e.set(c.id,l)),l.participations.push(t),t.presentationScore&&(l.presentationScore+=t.presentationScore)}}return e}updateStudentStatisticsWithExerciseResults(e,t){let n=t.maxPoints,c=e.participations.find(l=>l.exercise.id===t.id);if(c&&c.results&&c.results.length>0){let l=c.results[0];c.results.length>1&&X("found more than one result for student "+e.user.login+" and exercise "+t.title);let u=E(l.score*n/100,this.course);if(e.pointsPerExercise.set(t.id,u),this.exercisesOfCourseThatAreIncludedInScoreCalculation.map(_=>_.id).includes(t.id)){e.overallPoints+=u;let _=e.sumPointsPerExerciseType.get(t.type);e.sumPointsPerExerciseType.set(t.type,_+u),e.numberOfParticipatedExercises+=1,t.numberOfParticipationsWithRatedResult+=1,l.score>=100&&(e.numberOfSuccessfulExercises+=1,t.numberOfSuccessfulParticipations+=1),e.pointsPerExerciseType.setValue(t.type,t,u)}}else e.pointsPerExercise.set(t.id,0),e.pointsPerExerciseType.setValue(t.type,t,Number.NaN)}setUpGradingScale(e){this.gradingScaleExists=!0,this.gradingScale=e,this.gradingScale.gradeSteps=this.gradingSystemService.sortGradeSteps(this.gradingScale.gradeSteps),this.isBonus=this.gradingScale.gradeType===Fe.BONUS,this.maxGrade=this.gradingSystemService.maxGrade(this.gradingScale.gradeSteps)}calculateGradingScaleInformation(e){if(this.maxNumberOfOverallPoints>=0&&this.gradingScale){let t=this.createStudentPlagiarismMap(e),n=this.maxNumberOfOverallPoints>0?this.averageNumberOfOverallPoints/this.maxNumberOfOverallPoints*100:0;this.averageGrade=this.gradingSystemService.findMatchingGradeStep(this.gradingScale.gradeSteps,n).gradeName;for(let c of this.students)c.gradeStep=this.findStudentGradeStep(c,this.gradingScale,t)}this.changeDetector.detectChanges()}findStudentGradeStep(e,t,n){if(e.participations?.length){if(n[e.user.id])return{gradeName:t.plagiarismGrade||te.DEFAULT_PLAGIARISM_GRADE};{let c=e.overallPoints&&this.maxNumberOfOverallPoints?e.overallPoints/this.maxNumberOfOverallPoints*100:0;return this.gradingSystemService.findMatchingGradeStep(t.gradeSteps,c)}}else return{gradeName:t.noParticipationGrade||te.DEFAULT_NO_PARTICIPATION_GRADE}}createStudentPlagiarismMap(e){let t={};return e?.forEach(n=>{n.verdict===Qe.PLAGIARISM&&n.student?.id&&(t[n.student.id]=!0)}),t}localize(e){return this.localeConversionService.toLocaleString(e,this.course.accuracyOfScores)}exportResults(e){if(!this.exportReady||this.students.length===0)return;let t=[],n=this.generateExportColumnNames();this.students.forEach(c=>t.push(this.generateStudentStatisticsExportRow(c,e))),t.push(this.prepareEmptyExportRow("",e).build()),t.push(this.generateExportRowMaxValues(e)),t.push(this.generateExportRowAverageValues(e)),t.push(this.generateExportRowParticipation(e)),t.push(this.generateExportRowSuccessfulParticipation(e)),e?this.exportAsCsv(n,t,e):this.exportAsExcel(n,t)}exportAsExcel(e,t){let n=W.book_new(),c=W.json_to_sheet(t,{header:e});W.book_append_sheet(n,c,"Course Scores");let u={Title:`${this.course.title} Scores`,Author:`Artemis ${Ae??""}`},T=`${this.course.title} Scores.xlsx`;Xe(n,T,{Props:u,compression:!0})}exportAsCsv(e,t,n){let c={showLabels:!0,showTitle:!1,filename:`${this.course.title} Scores`,useTextFile:!1,useBom:!0,columnHeaders:e},l=We(Object.assign(c,n)),u=ze(l)(t);$e(l)(u)}newRowBuilder(e){return e?new He(e.decimalSeparator,this.course.accuracyOfScores):new Je(this.course.accuracyOfScores)}generateExportColumnNames(){let e=[ie,ne,re,se];for(let t of this.exerciseTypesWithExercises)e.push(...this.exercisesPerType.get(t).map(n=>n.title)),e.push(ce.getExerciseTypeKey(t,Ke)),e.push(ce.getExerciseTypeKey(t,Ue));return this.maxNumberOfPresentationPoints>0&&e.push(M,C),e.push(D,B),this.course.presentationScore&&e.push(C),this.gradingScaleExists&&e.push(this.isBonus?ae:oe),e}generateStudentStatisticsExportRow(e,t){let n=this.newRowBuilder(t);n.setUserInformation(e.user.name,e.user.login,e.user.email,e.user.visibleRegistrationNumber);for(let l of this.exerciseTypesWithExercises){let u=e.sumPointsPerExerciseType.get(l),T=0;this.maxNumberOfPointsPerExerciseType.get(l)>0&&(T=P(e.sumPointsPerExerciseType.get(l)/this.maxNumberOfPointsPerExerciseType.get(l),this.course)),this.exercisesPerType.get(l).forEach(k=>{let tt=E(e.pointsPerExerciseType.getValue(l,k),this.course);n.setPoints(k.title,tt)}),n.setExerciseTypePoints(l,u),n.setExerciseTypeScore(l,T)}if(this.maxNumberOfPresentationPoints>0){let l=P(e.presentationPoints/this.maxNumberOfPresentationPoints,this.course);n.setPoints(M,e.presentationPoints),n.setScore(C,l)}let c=P(e.overallPoints/this.maxNumberOfOverallPoints,this.course);return n.setPoints(D,e.overallPoints),n.setScore(B,c),this.course.presentationScore&&n.setPoints(C,e.presentationScore),this.setExportRowGradeValue(n,e.gradeStep?.gradeName),n.build()}generateExportRowMaxValues(e){let t=this.prepareEmptyExportRow("Max",e);for(let n of this.exerciseTypesWithExercises)this.exercisesPerType.get(n).forEach(l=>{t.setPoints(l.title,this.exerciseMaxPointsPerType.getValue(n,l)??0)}),t.setExerciseTypePoints(n,this.maxNumberOfPointsPerExerciseType.get(n)),t.setExerciseTypeScore(n,100);return this.maxNumberOfPresentationPoints>0&&(t.setPoints(M,this.maxNumberOfPresentationPoints),t.setScore(C,100)),t.setPoints(D,this.maxNumberOfOverallPoints),t.setScore(B,100),this.course.presentationScore&&t.set(C,""),this.setExportRowGradeValue(t,this.maxGrade),t.build()}generateExportRowAverageValues(e){let t=this.prepareEmptyExportRow("Average",e);for(let c of this.exerciseTypesWithExercises){this.exercisesPerType.get(c).forEach(T=>{let _=E(this.exerciseAveragePointsPerType.getValue(c,T),this.course);t.setPoints(T.title,_)});let u=P(this.averageNumberOfPointsPerExerciseTypes.get(c)/this.maxNumberOfPointsPerExerciseType.get(c),this.course);t.setExerciseTypePoints(c,this.averageNumberOfPointsPerExerciseTypes.get(c)),t.setExerciseTypeScore(c,u)}if(this.maxNumberOfPresentationPoints>0){let c=P(this.averageNumberOfPresentationPoints/this.maxNumberOfPresentationPoints,this.course);t.setPoints(M,this.averageNumberOfPresentationPoints),t.setScore(C,c)}let n=P(this.averageNumberOfOverallPoints/this.maxNumberOfOverallPoints,this.course);return t.setPoints(D,this.averageNumberOfOverallPoints),t.setScore(B,n),this.course.presentationScore&&t.set(C,""),this.setExportRowGradeValue(t,this.averageGrade),t.build()}generateExportRowParticipation(e){let t=this.prepareEmptyExportRow("Number of Participations",e);for(let n of this.exerciseTypesWithExercises)this.exercisesPerType.get(n).forEach(l=>{t.setPoints(l.title,this.exerciseParticipationsPerType.getValue(n,l)??0)}),t.setExerciseTypePoints(n,""),t.setExerciseTypeScore(n,"");return this.setExportRowGradeValue(t,""),t.build()}generateExportRowSuccessfulParticipation(e){let t=this.prepareEmptyExportRow("Number of Successful Participations",e);for(let n of this.exerciseTypesWithExercises)this.exercisesPerType.get(n).forEach(l=>{t.setPoints(l.title,this.exerciseSuccessfulPerType.getValue(n,l)??0)}),t.setExerciseTypePoints(n,""),t.setExerciseTypeScore(n,"");return this.setExportRowGradeValue(t,""),t.build()}prepareEmptyExportRow(e,t){let n=this.newRowBuilder(t);n.set(ie,e),n.set(ne,""),n.set(re,""),n.set(se,"");for(let c of this.exerciseTypesWithExercises)this.exercisesPerType.get(c).forEach(u=>{n.set(u.title,"")}),n.setExerciseTypePoints(c,""),n.setExerciseTypeScore(c,"");return this.maxNumberOfPresentationPoints>0&&(n.set(M,""),n.set(C,"")),n.set(D,""),n.set(B,""),this.course.presentationScore&&n.set(C,""),this.setExportRowGradeValue(n,""),n}setExportRowGradeValue(e,t){this.gradingScaleExists&&(this.isBonus?e.set(ae,t):e.set(oe,t))}static compareExercises(e,t){return e.dueDate>t.dueDate?1:e.dueDate<t.dueDate?-1:e.title>t.title?1:e.title<t.title?-1:0}determineReleasedExercises(e){return e.exercises.filter(t=>!t.releaseDate||t.releaseDate.isBefore(H()))}calculateAverageScore(e){return P(Q(e),this.course)}calculateAveragePoints(e){return E(Q(e),this.course)}calculateMedianScore(e){return P(ee(e),this.course)}calculateMedianPoints(e){return E(ee(e),this.course)}calculateAverageAndMedianScores(){let e=G(this.course.exercises.map(u=>u.maxPoints??0))+this.maxNumberOfPresentationPoints,t=this.students.map(u=>u.overallPoints),n=t.map(u=>u/this.maxNumberOfOverallPoints);this.averageScoreIncluded=P(this.averageNumberOfOverallPoints/this.maxNumberOfOverallPoints,this.course);let c=this.students.map(u=>G(Array.from(u.pointsPerExercise.values()))+u.presentationPoints),l=c.map(u=>u/e);this.averagePointsTotal=this.calculateAveragePoints(c),this.averageScoreTotal=this.calculateAverageScore(l),this.medianPointsIncluded=this.calculateMedianPoints(t),this.medianScoreIncluded=this.calculateMedianScore(n),this.medianPointsTotal=this.calculateMedianPoints(c),this.medianScoreTotal=this.calculateMedianScore(l),this.standardDeviationPointsIncluded=q(Z(t),2),this.standardDeviationPointsTotal=q(Z(c),2)}highlightBar(e){if(this.highlightedType===e){this.valueToHighlight=void 0,this.highlightedType=b.NONE,this.changeDetector.detectChanges();return}switch(e){case b.AVERAGE:this.valueToHighlight=this.averageScoreIncluded,this.highlightedType=b.AVERAGE;break;case b.MEDIAN:this.valueToHighlight=this.medianScoreIncluded,this.highlightedType=b.MEDIAN;break}this.changeDetector.detectChanges()}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=ue({type:r,selectors:[["jhi-course-scores"]],decls:1,vars:1,consts:[[1,"d-flex","align-items-center","justify-content-between","flex-wrap","mb-2"],["jhiTranslate","artemisApp.instructorDashboard.exerciseResultSummery",3,"translateValues"],[1,"row","d-flex","align-items-center"],[1,"col-lg-9"],[1,"text-center"],["jhiTranslate","artemisApp.instructorDashboard.courseScoreChart.scoreDistribution"],[1,"col-lg-3","mt-3"],[1,"table","table-bordered","table-sm","table-striped"],[1,"table-dark"],["jhiTranslate","artemisApp.instructorDashboard.statisticsTable.included"],["jhiTranslate","artemisApp.instructorDashboard.statisticsTable.total"],["jhiTranslate","artemisApp.instructorDashboard.statisticsTable.amountOfReleasedExercises"],[1,"form-check"],["id","highlightBarAvergage","type","checkbox",1,"form-check-input",3,"click","checked","ngbTooltip"],["for","highlightBarAvergage","jhiTranslate","artemisApp.instructorDashboard.statisticsTable.averagePoints",1,"form-check-label"],["id","average_points",3,"ngClass"],["id","highlightBarMedian","type","checkbox",1,"form-check-input",3,"click","checked","ngbTooltip"],["for","highlightBarMedian","jhiTranslate","artemisApp.instructorDashboard.statisticsTable.medianPoints",1,"form-check-label"],["id","median_points",3,"ngClass"],["jhiTranslate","artemisApp.instructorDashboard.statisticsTable.standardPointDeviation"],[1,"separator"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","btn-md",3,"routerLink"],[3,"icon"],["jhiTranslate","artemisApp.course.gradingSystem"],[2,"color","grey"],["animation","spin",3,"icon"],["jhiTranslate","artemisApp.instructorDashboard.loadingStudents"],[3,"gradingScale","scores","scoreToHighlight"],["title","entity.action.export",3,"onExport","icon","disabled","buttonSize"],[1,"table-responsive"],[1,"table","table-striped"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["jhiSortBy","user.name"],["jhiTranslate","artemisApp.instructorDashboard.name"],["jhiSortBy","user.login"],["jhiTranslate","artemisApp.instructorDashboard.username"],["jhiSortBy","numberOfParticipatedExercises"],["jhiTranslate","artemisApp.instructorDashboard.participated"],["jhiSortBy","numberOfSuccessfulExercises"],["jhiTranslate","artemisApp.instructorDashboard.successful"],["jhiSortBy","overallPoints"],["jhiTranslate","artemisApp.instructorDashboard.overallScore"],["jhiTranslate","artemisApp.instructorDashboard.max"],["jhiTranslate","artemisApp.instructorDashboard.average"],[3,"jhiSortBy"],[3,"jhiTranslate"],["jhiSortBy","presentationPoints"],["jhiTranslate","artemisApp.instructorDashboard.presentationPoints"]],template:function(t,n){t&1&&x(0,bt,131,34),t&2&&f(n.course?0:-1)},dependencies:[De,Ce,Re,Ze,Te,ge,et,Me,Ve,we],styles:["#median_points.median[_ngcontent-%COMP%], #average_points.average[_ngcontent-%COMP%]{font-weight:700;color:#87cefa}.separator[_ngcontent-%COMP%]{border-top:2px solid;width:100%;margin-bottom:.5em;margin-top:1rem}"],changeDetection:0})}return r})();export{Ei as CourseScoresComponent,b as HighlightType};
//# sourceMappingURL=course-scores.component-XPKORKK3.js.map
