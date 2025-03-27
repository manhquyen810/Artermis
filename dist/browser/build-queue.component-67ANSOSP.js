import"./chunk-EGRHWZRV.js";import{b as st}from"./chunk-MBS3WUDO.js";import{a as lt}from"./chunk-QU5H3T5Y.js";import{b as at}from"./chunk-22YQSX6Z.js";import"./chunk-R56P6PAY.js";import"./chunk-65Z25AP3.js";import"./chunk-5M3YV54C.js";import"./chunk-RYZEETVB.js";import"./chunk-VTF2OQPK.js";import"./chunk-BNRTXX46.js";import{a as rt}from"./chunk-VPHPBAVR.js";import"./chunk-N4VVKRBU.js";import"./chunk-5AQXEKLE.js";import"./chunk-3JSWSN6W.js";import"./chunk-7XNS72RJ.js";import"./chunk-KYCCMZSV.js";import"./chunk-DXTZ4GAW.js";import"./chunk-2UXGFGK3.js";import{d as j}from"./chunk-O4VJ5OXY.js";import{b as it,j as nt,l as ot}from"./chunk-BDII35IB.js";import"./chunk-LARBQRTJ.js";import{a as Y}from"./chunk-HZP47FKH.js";import"./chunk-OTNXTVPX.js";import{a as tt}from"./chunk-G4HSJ7ME.js";import{c as Ye,d as Ze,e as Xe,f as Ke,g as et}from"./chunk-F3NFBBHK.js";import"./chunk-Z2YUBN6N.js";import"./chunk-OTCBNILH.js";import{b as qe}from"./chunk-TECMX7AA.js";import"./chunk-6EYB5QBP.js";import{a as M}from"./chunk-W7RIOT23.js";import"./chunk-GERFCPB6.js";import"./chunk-DLAFGQEJ.js";import{a as Ge}from"./chunk-ZMTDPOTL.js";import{a as $e,b as ze}from"./chunk-VRAVBLUK.js";import{a as G}from"./chunk-2QXIMOEO.js";import"./chunk-QA7Y7QBM.js";import"./chunk-ZPITQMA6.js";import"./chunk-HK7MJBP6.js";import"./chunk-2CUFQLAH.js";import"./chunk-MKPB4JKY.js";import"./chunk-I76AVIQH.js";import"./chunk-H2ETPEH6.js";import"./chunk-Z6NSEM73.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import{c as k}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import"./chunk-CT44YL7Q.js";import{c as Re}from"./chunk-JNO6DNVW.js";import"./chunk-EELXLOHY.js";import{D as De,N as Ae,a as Qe,v as Ie}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as Fe,c as ve,h as ye,m as we,o as Ee}from"./chunk-WA5GEAJB.js";import"./chunk-VK7JPHFE.js";import"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import{a as He}from"./chunk-K3W6YFKH.js";import{c as q}from"./chunk-JXJXC4DZ.js";import{d as $}from"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import{p as V}from"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Aa as je,G as Pe,Ka as Le,Oc as Ne,Qa as Me,Sa as We,Y as Ve,ic as Oe,wd as Ue}from"./chunk-Z4VHWOB5.js";import{a as Je}from"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import{a as ke}from"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as z}from"./chunk-U54OSGNH.js";import{f as R,i as Te}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{n as Be}from"./chunk-IOA4DPXY.js";import{Bd as J,Db as r,Dc as h,Ea as B,Ed as re,J as _e,Ma as _,Mc as b,Na as x,Oc as m,Sc as he,Tb as N,U as X,W as y,Yc as fe,Zb as c,Zc as Ce,_ as xe,_c as Se,cd as H,dd as e,ed as g,f as O,fd as P,jc as ge,kc as u,lc as te,ld as w,mc as U,md as T,nd as E,oa as K,qd as I,ra as ee,rd as D,sc as C,sd as oe,td as v,uc as be,ud as A,vc as ie,wc as ne,xc as n,yc as o,yd as F,z as ce,zc as d,zd as le}from"./chunk-5LC5EQRR.js";import{a as pe}from"./chunk-3E746U5Y.js";var Z=class{totalBuilds=0;successfulBuilds=0;failedBuilds=0;cancelledBuilds=0;timeOutBuilds=0;missingBuilds=0},W=function(i){return i[i.DAY=1]="DAY",i[i.WEEK=7]="WEEK",i[i.MONTH=30]="MONTH",i}(W||{});var _t=()=>[100,100],dt=(()=>{class i{buildQueueService=B(Y);route=B(R);alertService=B(q);faAngleDown=Oe;faAngleRight=Ve;SpanType=W;currentSpan=W.WEEK;isCollapsed=!1;successfulBuildsPercentage;failedBuildsPercentage;cancelledBuildsPercentage;timeoutBuildsPercentage;missingBuildsPercentage;buildJobStatistics=new Z;ngOnInit(){this.getBuildJobStatistics(this.currentSpan)}ngxData=[];ngxColor={name:"vivid",selectable:!0,group:it.Ordinal,domain:[j.GREEN,j.RED,j.YELLOW,j.BLUE,j.GREY]};getBuildJobStatistics(t=W.WEEK){this.route.paramMap.pipe(y(1)).subscribe(a=>{let l=Number(a.get("courseId"));l?this.buildQueueService.getBuildJobStatisticsForCourse(l,t).subscribe({next:p=>{this.updateDisplayedBuildJobStatistics(p)},error:p=>{k(this.alertService,p)}}):this.buildQueueService.getBuildJobStatistics(t).subscribe({next:p=>{this.updateDisplayedBuildJobStatistics(p)},error:p=>{k(this.alertService,p)}})})}updateDisplayedBuildJobStatistics(t){this.buildJobStatistics=t,t.totalBuilds===0?(this.successfulBuildsPercentage="-%",this.failedBuildsPercentage="-%",this.cancelledBuildsPercentage="-%",this.timeoutBuildsPercentage="-%",this.missingBuildsPercentage="-%"):(this.successfulBuildsPercentage=(t.successfulBuilds/t.totalBuilds*100).toFixed(2)+"%",this.failedBuildsPercentage=(t.failedBuilds/t.totalBuilds*100).toFixed(2)+"%",this.cancelledBuildsPercentage=(t.cancelledBuilds/t.totalBuilds*100).toFixed(2)+"%",this.timeoutBuildsPercentage=(t.timeOutBuilds/t.totalBuilds*100).toFixed(2)+"%",this.missingBuildsPercentage=(t.missingBuilds/t.totalBuilds*100).toFixed(2)+"%"),this.ngxData=[{name:"Successful",value:t.successfulBuilds},{name:"Failed",value:t.failedBuilds},{name:"Cancelled",value:t.cancelledBuilds},{name:"Timeout",value:t.timeOutBuilds},{name:"Missing",value:t.missingBuilds}]}onTabChange(t){this.currentSpan!==t&&(this.currentSpan=t,this.getBuildJobStatistics(t))}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=N({type:i,selectors:[["jhi-build-job-statistics"]],decls:162,vars:27,consts:[[1,"mb-4"],[1,"d-flex","justify-content-between","align-items-center","border-bottom","mb-3"],[1,"d-flex","align-items-center","gap-2"],["id","build-queue-overview","jhiTranslate","artemisApp.buildQueue.statistics.title"],["text","artemisApp.buildQueue.statistics.titleTooltip",1,"ps-1","mb-2"],["data-toggle","buttons",1,"col-md-9","btn-group","btn-group-toggle","mb-2","ml-2",3,"hidden"],[1,"btn","btn-secondary"],["type","radio","name","options","id","option1",3,"click"],["jhiTranslate","artemisApp.buildQueue.statistics.daySpan"],["type","radio","name","options","id","option2","checked","",3,"click"],["jhiTranslate","artemisApp.buildQueue.statistics.weekSpan"],["type","radio","name","options","id","option3",3,"click"],["jhiTranslate","artemisApp.buildQueue.statistics.monthSpan"],[1,"btn",3,"click"],["size","2x",3,"icon"],[3,"ngbCollapse"],[1,"d-flex","gap-4"],[1,"p-2","border","border-primary-subtle","border-1","rounded-3","result-card"],[1,"d-flex","flex-column","justify-content-evenly","w-100","h-100","align-items-center"],[1,"m-0"],["jhiTranslate","artemisApp.buildQueue.statistics.successfulBuilds",1,"m-0","text-center"],[1,"d-flex","flex-column","gap-3","justify-content-around","stats-column"],["jhiTranslate","artemisApp.buildQueue.statistics.totalBuilds",1,"bold"],["jhiTranslate","artemisApp.buildQueue.statistics.successfulBuildsWithColon",1,"bold"],["jhiTranslate","artemisApp.buildQueue.statistics.failedBuildsPercentage",1,"bold"],["jhiTranslate","artemisApp.buildQueue.statistics.failedBuilds",1,"bold"],["jhiTranslate","artemisApp.buildQueue.statistics.cancelledBuildsPercentage",1,"bold"],["jhiTranslate","artemisApp.buildQueue.statistics.cancelledBuilds",1,"bold"],["jhiTranslate","artemisApp.buildQueue.statistics.timeoutBuildsPercentage",1,"bold"],["jhiTranslate","artemisApp.buildQueue.statistics.timeoutBuilds",1,"bold"],["jhiTranslate","artemisApp.buildQueue.statistics.missingBuildsPercentage",1,"bold"],["jhiTranslate","artemisApp.buildQueue.statistics.missingBuilds",1,"bold"],[3,"view","results","scheme","doughnut"]],template:function(a,l){a&1&&(n(0,"div",0),e(1,`
    `),n(2,"div",1),e(3,`
        `),n(4,"div",2),e(5,`
            `),d(6,"h3",3),e(7,`
            `),d(8,"jhi-help-icon",4),e(9,`
            `),n(10,"div",5),e(11,`
                `),n(12,"label",6),e(13,`
                    `),n(14,"input",7),b("click",function(){return l.onTabChange(l.SpanType.DAY)}),o(),e(15,`
                    `),d(16,"span",8),e(17,`
                `),o(),e(18,`
                `),n(19,"label",6),e(20,`
                    `),n(21,"input",9),b("click",function(){return l.onTabChange(l.SpanType.WEEK)}),o(),e(22,`
                    `),d(23,"span",10),e(24,`
                `),o(),e(25,`
                `),n(26,"label",6),e(27,`
                    `),n(28,"input",11),b("click",function(){return l.onTabChange(l.SpanType.MONTH)}),o(),e(29,`
                    `),d(30,"span",12),e(31,`
                `),o(),e(32,`
            `),o(),e(33,`
        `),o(),e(34,`
        `),n(35,"button",13),b("click",function(){return l.isCollapsed=!l.isCollapsed}),e(36,`
            `),d(37,"fa-icon",14),e(38,`
        `),o(),e(39,`
    `),o(),e(40,`
    `),n(41,"div",15),e(42,`
        `),n(43,"div",16),e(44,`
            `),n(45,"div",16),e(46,`
                `),n(47,"div",17),e(48,`
                    `),n(49,"div",18),e(50,`
                        `),n(51,"h2",19),e(52),o(),e(53,`
                        `),d(54,"p",20),e(55,`
                    `),o(),e(56,`
                `),o(),e(57,`
                `),n(58,"div",21),e(59,`
                    `),n(60,"div"),e(61,`
                        `),d(62,"span",22),e(63,`
                        `),n(64,"span"),e(65),o(),e(66,`
                    `),o(),e(67,`
                    `),n(68,"div"),e(69,`
                        `),d(70,"span",23),e(71,`
                        `),n(72,"span"),e(73),o(),e(74,`
                    `),o(),e(75,`
                `),o(),e(76,`
                `),n(77,"div",21),e(78,`
                    `),n(79,"div"),e(80,`
                        `),d(81,"span",24),e(82,`
                        `),n(83,"span"),e(84),o(),e(85,`
                    `),o(),e(86,`
                    `),n(87,"div"),e(88,`
                        `),d(89,"span",25),e(90,`
                        `),n(91,"span"),e(92),o(),e(93,`
                    `),o(),e(94,`
                `),o(),e(95,`
                `),n(96,"div",21),e(97,`
                    `),n(98,"div"),e(99,`
                        `),d(100,"span",26),e(101,`
                        `),n(102,"span"),e(103),o(),e(104,`
                    `),o(),e(105,`
                    `),n(106,"div"),e(107,`
                        `),d(108,"span",27),e(109,`
                        `),n(110,"span"),e(111),o(),e(112,`
                    `),o(),e(113,`
                `),o(),e(114,`
                `),n(115,"div",21),e(116,`
                    `),n(117,"div"),e(118,`
                        `),d(119,"span",28),e(120,`
                        `),n(121,"span"),e(122),o(),e(123,`
                    `),o(),e(124,`
                    `),n(125,"div"),e(126,`
                        `),d(127,"span",29),e(128,`
                        `),n(129,"span"),e(130),o(),e(131,`
                    `),o(),e(132,`
                `),o(),e(133,`
                `),n(134,"div",21),e(135,`
                    `),n(136,"div"),e(137,`
                        `),d(138,"span",30),e(139,`
                        `),n(140,"span"),e(141),o(),e(142,`
                    `),o(),e(143,`
                    `),n(144,"div"),e(145,`
                        `),d(146,"span",31),e(147,`
                        `),n(148,"span"),e(149),o(),e(150,`
                    `),o(),e(151,`
                `),o(),e(152,`
            `),o(),e(153,`
            `),n(154,"div"),e(155,`
                `),d(156,"ngx-charts-pie-chart",32),e(157,`
            `),o(),e(158,`
        `),o(),e(159,`
    `),o(),e(160,`
`),o(),e(161,`
`)),a&2&&(r(10),u("hidden",l.isCollapsed),r(2),U("active",l.currentSpan===l.SpanType.DAY),r(7),U("active",l.currentSpan===l.SpanType.WEEK),r(7),U("active",l.currentSpan===l.SpanType.MONTH),r(9),ge("aria-expanded",!l.isCollapsed)("aria-controls","collapseQuestion"),r(2),u("icon",l.isCollapsed?l.faAngleRight:l.faAngleDown),r(4),u("ngbCollapse",l.isCollapsed),r(11),g(l.successfulBuildsPercentage),r(13),g(l.buildJobStatistics.totalBuilds),r(8),g(l.buildJobStatistics.successfulBuilds),r(11),g(l.failedBuildsPercentage),r(8),g(l.buildJobStatistics.failedBuilds),r(11),g(l.cancelledBuildsPercentage),r(8),g(l.buildJobStatistics.cancelledBuilds),r(11),g(l.timeoutBuildsPercentage),r(8),g(l.buildJobStatistics.timeOutBuilds),r(11),g(l.missingBuildsPercentage),r(8),g(l.buildJobStatistics.missingBuilds),r(7),u("view",I(26,_t))("results",l.ngxData)("scheme",l.ngxColor)("doughnut",!0))},dependencies:[z,ot,nt,Qe,G,$],styles:[".result-card[_ngcontent-%COMP%]{width:8vw;min-width:115px}.stats-column[_ngcontent-%COMP%]{min-width:230px}"]})}return i})();var bt=["addressTypeahead"],ht=(i,s)=>({"btn-secondary":i,"btn-success":s}),ft=i=>({num:i}),Ct=i=>({"text-danger":i}),St=()=>["/admin/build-agents/details"],Bt=i=>({agentName:i}),L=(i,s,t)=>["/course-management",i,"programming-exercises",s,"participations",t,"submissions"],se=()=>({isTmpOrSolutionProgrParticipation:!0}),de=(i,s,t,a)=>["/course-management",i,"programming-exercises",s,"repository",t,"commit-history",a],ue=(i,s,t,a)=>["/course-management",i,"programming-exercises",s,"participations",t,"repository","commit-history",a],me=i=>["/course-management",i],ut=(i,s,t)=>({"text-success":i,"text-warning":s,"text-danger":t}),Tt=(i,s)=>({"text-warning":i,"text-danger":s}),vt=(i,s,t)=>({page:i,totalItems:s,itemsPerPage:t}),yt=(i,s)=>s.id;function wt(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("id"))}),e(2,`
                                `),d(3,"span",40),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("id"))}}function Et(i,s){if(i&1&&(e(0,`
                                    `),d(1,"fa-icon",16),e(2,`
                                `)),i&2){let t=m(4);r(),u("icon",t.faExclamationCircle)}}function Ft(i,s){if(i&1&&(e(0,`
                            `),n(1,"span",41),e(2,`
                                `),c(3,Et,3,1),e(4),o(),e(5,`
                        `)),i&2){let t=s.value,a=s.row;r(),u("ngClass",D(3,Ct,a.jobTimingInfo.buildDuration>240)),r(2),C(a.jobTimingInfo.buildDuration>240?3:-1),r(),P(`
                                `,t,`
                            `)}}function Qt(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("buildAgent.displayName"))}),e(2,`
                                `),d(3,"span",42),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("buildAgent.displayName"))}}function It(i,s){if(i&1&&(e(0,`
                            `),n(1,"a",43),e(2),o(),e(3,`
                        `)),i&2){let t=s.value,a=s.row;r(),u("routerLink",I(3,St))("queryParams",D(4,Bt,a.buildAgent.name)),r(),P(`
                                `,t,`
                            `)}}function Dt(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("name"))}),e(2,`
                                `),d(3,"span",44),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("name"))}}function At(i,s){if(i&1&&(e(0,`
                            `),n(1,"span"),e(2),o(),e(3,`
                        `)),i&2){let t=s.value;r(2),g(t)}}function Jt(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("participationId"))}),e(2,`
                                `),d(3,"span",45),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("participationId"))}}function kt(i,s){if(i&1&&(e(0,`
                                `),n(1,"a",43),e(2),o(),e(3,`
                            `)),i&2){let t=m(),a=t.value,l=t.row;r(),u("routerLink",v(3,L,l.courseId,l.exerciseId,a))("queryParams",I(7,se)),r(),g(a)}}function Pt(i,s){if(i&1&&(e(0,`
                                `),n(1,"a",46),e(2),o(),e(3,`
                            `)),i&2){let t=m(),a=t.value,l=t.row;r(),u("routerLink",v(2,L,l.courseId,l.exerciseId,a)),r(),g(a)}}function Vt(i,s){if(i&1&&(e(0,`
                            `),c(1,kt,4,8)(2,Pt,4,6)),i&2){let t=s.row,a=m(3);r(),C(t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.TEMPLATE||t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.SOLUTION||t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.TESTS?1:t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.USER?2:-1)}}function jt(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("repositoryInfo.repositoryName"))}),e(2,`
                                `),d(3,"span",47),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("repositoryInfo.repositoryName"))}}function Lt(i,s){if(i&1&&(e(0,`
                            `),n(1,"span"),e(2),o(),e(3,`
                        `)),i&2){let t=s.value;r(2),g(t)}}function Mt(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("repositoryInfo.repositoryType"))}),e(2,`
                                `),d(3,"span",48),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("repositoryInfo.repositoryType"))}}function Wt(i,s){if(i&1&&(e(0,`
                            `),n(1,"span"),e(2),o(),e(3,`
                        `)),i&2){let t=s.value;r(2),g(t)}}function Ot(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("buildConfig.commitHashToBuild"))}),e(2,`
                                `),d(3,"span",49),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("buildConfig.commitHashToBuild"))}}function Nt(i,s){if(i&1&&(e(0,`
                                `),n(1,"a",50),e(2),o(),e(3,`
                            `)),i&2){let t=m(),a=t.value,l=t.row;r(),u("routerLink",A(2,de,l.courseId,l.exerciseId,l.repositoryInfo.triggeredByPushTo,a)),r(),g(a)}}function Ut(i,s){if(i&1&&(e(0,`
                                `),n(1,"a",50),e(2),o(),e(3,`
                            `)),i&2){let t=m(),a=t.value,l=t.row;r(),u("routerLink",A(2,ue,l.courseId,l.exerciseId,l.participationId,a)),r(),g(a)}}function Ht(i,s){if(i&1&&(e(0,`
                                `),n(1,"span",51),e(2),o(),e(3,`
                            `)),i&2){let t=m().value;r(2),g(t)}}function Rt(i,s){if(i&1&&(e(0,`
                            `),c(1,Nt,4,7)(2,Ut,4,7)(3,Ht,4,1)),i&2){let t=s.row,a=m(3);r(),C(t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.TEMPLATE||t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.SOLUTION||t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.TESTS?1:t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.USER?2:3)}}function qt(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("jobTimingInfo.buildDuration"))}),e(2,`
                                `),d(3,"span",52),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("jobTimingInfo.buildDuration"))}}function $t(i,s){if(i&1&&(e(0,`
                            `),n(1,"span"),e(2),F(3,"artemisDurationFromSeconds"),o(),e(4,`
                        `)),i&2){let t=s.value;r(2),g(le(3,1,t))}}function zt(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("jobTimingInfo.submissionDate"))}),e(2,`
                                `),d(3,"span",53),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("jobTimingInfo.submissionDate"))}}function Gt(i,s){if(i&1&&(e(0,`
                            `),n(1,"span"),e(2),F(3,"artemisDate"),o(),e(4,`
                        `)),i&2){let t=s.value;r(2),g(J(3,1,t,"long",!0))}}function Yt(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("jobTimingInfo.buildStartDate"))}),e(2,`
                                `),d(3,"span",54),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("jobTimingInfo.buildStartDate"))}}function Zt(i,s){if(i&1&&(e(0,`
                            `),n(1,"span"),e(2),F(3,"artemisDate"),o(),e(4,`
                        `)),i&2){let t=s.value;r(2),g(J(3,1,t,"long",!0))}}function Xt(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("courseId"))}),e(2,`
                                `),d(3,"span",55),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("courseId"))}}function Kt(i,s){if(i&1&&(e(0,`
                            `),n(1,"a",46),e(2),o(),e(3,`
                        `)),i&2){let t=s.value;r(),u("routerLink",D(2,me,t)),r(),g(t)}}function ei(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("priority"))}),e(2,`
                                `),d(3,"span",56),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("priority"))}}function ti(i,s){if(i&1&&(e(0,`
                            `),n(1,"span"),e(2),o(),e(3,`
                        `)),i&2){let t=s.value;r(2),g(t)}}function ii(i,s){if(i&1){let t=h();e(0,`
                                `),n(1,"span",57),e(2,`
                                    `),n(3,"button",58),b("click",function(){_(t);let l=m(3);return x(l.cancelAllRunningBuildJobs())}),e(4,`
                                        `),d(5,"fa-icon",16),e(6,`
                                        `),d(7,"span",59),e(8,`
                                    `),o(),e(9,`
                                `),o(),e(10,`
                            `)}if(i&2){let t=m(3);r(5),u("icon",t.faTimes)}}function ni(i,s){if(i&1){let t=h();e(0,`
                                `),n(1,"button",58),b("click",function(){let l=_(t).row,p=m(3);return x(p.cancelBuildJob(l.id))}),e(2,`
                                    `),d(3,"fa-icon",16),e(4,`
                                `),o(),e(5,`
                            `)}if(i&2){let t=m(3);r(3),u("icon",t.faTimes)}}function oi(i,s){if(i&1&&(e(0,`
                `),n(1,"ngx-datatable",22),e(2,`
                    `),n(3,"ngx-datatable-column",23),e(4,`
                        `),c(5,wt,8,1,"ng-template",24),e(6,`
                        `),c(7,Ft,6,5,"ng-template",25),e(8,`
                    `),o(),e(9,`
                    `),n(10,"ngx-datatable-column",26),e(11,`
                        `),c(12,Qt,8,1,"ng-template",24),e(13,`
                        `),c(14,It,4,6,"ng-template",25),e(15,`
                    `),o(),e(16,`
                    `),n(17,"ngx-datatable-column",27),e(18,`
                        `),c(19,Dt,8,1,"ng-template",24),e(20,`
                        `),c(21,At,4,1,"ng-template",25),e(22,`
                    `),o(),e(23,`
                    `),n(24,"ngx-datatable-column",28),e(25,`
                        `),c(26,Jt,8,1,"ng-template",24),e(27,`
                        `),c(28,Vt,3,1,"ng-template",25),e(29,`
                    `),o(),e(30,`
                    `),n(31,"ngx-datatable-column",29),e(32,`
                        `),c(33,jt,8,1,"ng-template",24),e(34,`
                        `),c(35,Lt,4,1,"ng-template",25),e(36,`
                    `),o(),e(37,`
                    `),n(38,"ngx-datatable-column",30),e(39,`
                        `),c(40,Mt,8,1,"ng-template",24),e(41,`
                        `),c(42,Wt,4,1,"ng-template",25),e(43,`
                    `),o(),e(44,`
                    `),n(45,"ngx-datatable-column",31),e(46,`
                        `),c(47,Ot,8,1,"ng-template",24),e(48,`
                        `),c(49,Rt,4,1,"ng-template",25),e(50,`
                    `),o(),e(51,`
                    `),n(52,"ngx-datatable-column",32),e(53,`
                        `),c(54,qt,8,1,"ng-template",24),e(55,`
                        `),c(56,$t,5,3,"ng-template",25),e(57,`
                    `),o(),e(58,`
                    `),n(59,"ngx-datatable-column",33),e(60,`
                        `),c(61,zt,8,1,"ng-template",24),e(62,`
                        `),c(63,Gt,5,5,"ng-template",25),e(64,`
                    `),o(),e(65,`
                    `),n(66,"ngx-datatable-column",34),e(67,`
                        `),c(68,Yt,8,1,"ng-template",24),e(69,`
                        `),c(70,Zt,5,5,"ng-template",25),e(71,`
                    `),o(),e(72,`
                    `),n(73,"ngx-datatable-column",35),e(74,`
                        `),c(75,Xt,8,1,"ng-template",24),e(76,`
                        `),c(77,Kt,4,4,"ng-template",25),e(78,`
                    `),o(),e(79,`
                    `),n(80,"ngx-datatable-column",36),e(81,`
                        `),c(82,ei,8,1,"ng-template",24),e(83,`
                        `),c(84,ti,4,1,"ng-template",25),e(85,`
                    `),o(),e(86,`
                    `),n(87,"ngx-datatable-column",37),e(88,`
                        `),n(89,"div",38),e(90,`
                            `),c(91,ii,11,1,"ng-template",24),e(92,`
                            `),c(93,ni,6,1,"ng-template",25),e(94,`
                        `),o(),e(95,`
                    `),o(),e(96,`
                `),o(),e(97,`
            `)),i&2){let t=s.settings;r(),u("limit",t.limit)("sorts",t.sorts)("columnMode",t.columnMode)("headerHeight",t.headerHeight)("footerHeight",t.footerHeight)("rowHeight",t.rowHeight)("rows",t.rows)("rowClass",t.rowClass)("scrollbarH",t.scrollbarH),r(2),u("minWidth",150)("width",200),r(7),u("minWidth",150)("width",200),r(7),u("minWidth",150)("width",200),r(7),u("minWidth",150)("width",150),r(7),u("minWidth",150)("width",150),r(7),u("minWidth",150)("width",150),r(7),u("minWidth",150)("width",200),r(7),u("minWidth",150)("width",150),r(7),u("minWidth",150)("width",200),r(7),u("minWidth",150)("width",200),r(7),u("minWidth",150)("width",200),r(7),u("minWidth",150)("width",200),r(7),u("minWidth",150)("width",100)}}function li(i,s){if(i&1&&(e(0,`
        `),n(1,"jhi-data-table",21),e(2,`
            `),c(3,oi,98,35,"ng-template"),e(4,`
        `),o(),e(5,`
    `)),i&2){let t=m();r(),u("showPageSizeDropdown",!1)("showSearchField",!1)("allEntities",t.runningBuildJobs)}}function ri(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("name"))}),e(2,`
                                `),d(3,"span",44),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("name"))}}function ai(i,s){if(i&1&&(e(0,`
                            `),n(1,"span"),e(2),o(),e(3,`
                        `)),i&2){let t=s.value;r(2),g(t)}}function si(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("participationId"))}),e(2,`
                                `),d(3,"span",45),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("participationId"))}}function di(i,s){if(i&1&&(e(0,`
                                `),n(1,"a",43),e(2),o(),e(3,`
                            `)),i&2){let t=m(),a=t.value,l=t.row;r(),u("routerLink",v(3,L,l.courseId,l.exerciseId,a))("queryParams",I(7,se)),r(),g(a)}}function ui(i,s){if(i&1&&(e(0,`
                                `),n(1,"a",46),e(2),o(),e(3,`
                            `)),i&2){let t=m(),a=t.value,l=t.row;r(),u("routerLink",v(2,L,l.courseId,l.exerciseId,a)),r(),g(a)}}function mi(i,s){if(i&1&&(e(0,`
                            `),c(1,di,4,8)(2,ui,4,6)),i&2){let t=s.row,a=m(3);r(),C(t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.TEMPLATE||t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.SOLUTION||t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.TESTS?1:t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.USER?2:-1)}}function pi(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("repositoryInfo.repositoryName"))}),e(2,`
                                `),d(3,"span",47),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("repositoryInfo.repositoryName"))}}function ci(i,s){if(i&1&&(e(0,`
                            `),n(1,"span"),e(2),o(),e(3,`
                        `)),i&2){let t=s.value;r(2),g(t)}}function _i(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("repositoryInfo.repositoryType"))}),e(2,`
                                `),d(3,"span",48),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("repositoryInfo.repositoryType"))}}function xi(i,s){if(i&1&&(e(0,`
                            `),n(1,"span"),e(2),o(),e(3,`
                        `)),i&2){let t=s.value;r(2),g(t)}}function gi(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("buildConfig.commitHashToBuild"))}),e(2,`
                                `),d(3,"span",49),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("buildConfig.commitHashToBuild"))}}function bi(i,s){if(i&1&&(e(0,`
                                `),n(1,"a",50),e(2),o(),e(3,`
                            `)),i&2){let t=m(),a=t.value,l=t.row;r(),u("routerLink",A(2,de,l.courseId,l.exerciseId,l.repositoryInfo.triggeredByPushTo,a)),r(),g(a)}}function hi(i,s){if(i&1&&(e(0,`
                                `),n(1,"a",50),e(2),o(),e(3,`
                            `)),i&2){let t=m(),a=t.value,l=t.row;r(),u("routerLink",A(2,ue,l.courseId,l.exerciseId,l.participationId,a)),r(),g(a)}}function fi(i,s){if(i&1&&(e(0,`
                                `),n(1,"span",51),e(2),o(),e(3,`
                            `)),i&2){let t=m().value;r(2),g(t)}}function Ci(i,s){if(i&1&&(e(0,`
                            `),c(1,bi,4,7)(2,hi,4,7)(3,fi,4,1)),i&2){let t=s.row,a=m(3);r(),C(t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.TEMPLATE||t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.SOLUTION||t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.TESTS?1:t.repositoryInfo.triggeredByPushTo===a.TriggeredByPushTo.USER?2:3)}}function Si(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("jobTimingInfo.submissionDate"))}),e(2,`
                                `),d(3,"span",53),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("jobTimingInfo.submissionDate"))}}function Bi(i,s){if(i&1&&(e(0,`
                            `),n(1,"span"),e(2),F(3,"artemisDate"),o(),e(4,`
                        `)),i&2){let t=s.value;r(2),g(J(3,1,t,"long",!0))}}function Ti(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("courseId"))}),e(2,`
                                `),d(3,"span",55),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("courseId"))}}function vi(i,s){if(i&1&&(e(0,`
                            `),n(1,"a",46),e(2),o(),e(3,`
                        `)),i&2){let t=s.value;r(),u("routerLink",D(2,me,t)),r(),g(t)}}function yi(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"span",39),b("click",function(){_(t);let l=m().controls;return x(l.onSort("priority"))}),e(2,`
                                `),d(3,"span",56),e(4,`
                                `),d(5,"fa-icon",16),e(6,`
                            `),o(),e(7,`
                        `)}if(i&2){let t=m().controls;r(5),u("icon",t.iconForSortPropField("priority"))}}function wi(i,s){if(i&1&&(e(0,`
                            `),n(1,"span"),e(2),o(),e(3,`
                        `)),i&2){let t=s.value;r(2),g(t)}}function Ei(i,s){if(i&1){let t=h();e(0,`
                                `),n(1,"span",57),e(2,`
                                    `),n(3,"button",58),b("click",function(){_(t);let l=m(3);return x(l.cancelAllQueuedBuildJobs())}),e(4,`
                                        `),d(5,"fa-icon",16),e(6,`
                                        `),d(7,"span",59),e(8,`
                                    `),o(),e(9,`
                                `),o(),e(10,`
                            `)}if(i&2){let t=m(3);r(5),u("icon",t.faTimes)}}function Fi(i,s){if(i&1){let t=h();e(0,`
                                `),n(1,"button",58),b("click",function(){let l=_(t).row,p=m(3);return x(p.cancelBuildJob(l.id))}),e(2,`
                                    `),d(3,"fa-icon",16),e(4,`
                                `),o(),e(5,`
                            `)}if(i&2){let t=m(3);r(3),u("icon",t.faTimes)}}function Qi(i,s){if(i&1&&(e(0,`
                `),n(1,"ngx-datatable",22),e(2,`
                    `),n(3,"ngx-datatable-column",27),e(4,`
                        `),c(5,ri,8,1,"ng-template",24),e(6,`
                        `),c(7,ai,4,1,"ng-template",25),e(8,`
                    `),o(),e(9,`
                    `),n(10,"ngx-datatable-column",28),e(11,`
                        `),c(12,si,8,1,"ng-template",24),e(13,`
                        `),c(14,mi,3,1,"ng-template",25),e(15,`
                    `),o(),e(16,`
                    `),n(17,"ngx-datatable-column",29),e(18,`
                        `),c(19,pi,8,1,"ng-template",24),e(20,`
                        `),c(21,ci,4,1,"ng-template",25),e(22,`
                    `),o(),e(23,`
                    `),n(24,"ngx-datatable-column",30),e(25,`
                        `),c(26,_i,8,1,"ng-template",24),e(27,`
                        `),c(28,xi,4,1,"ng-template",25),e(29,`
                    `),o(),e(30,`
                    `),n(31,"ngx-datatable-column",31),e(32,`
                        `),c(33,gi,8,1,"ng-template",24),e(34,`
                        `),c(35,Ci,4,1,"ng-template",25),e(36,`
                    `),o(),e(37,`
                    `),n(38,"ngx-datatable-column",33),e(39,`
                        `),c(40,Si,8,1,"ng-template",24),e(41,`
                        `),c(42,Bi,5,5,"ng-template",25),e(43,`
                    `),o(),e(44,`
                    `),n(45,"ngx-datatable-column",35),e(46,`
                        `),c(47,Ti,8,1,"ng-template",24),e(48,`
                        `),c(49,vi,4,4,"ng-template",25),e(50,`
                    `),o(),e(51,`
                    `),n(52,"ngx-datatable-column",36),e(53,`
                        `),c(54,yi,8,1,"ng-template",24),e(55,`
                        `),c(56,wi,4,1,"ng-template",25),e(57,`
                    `),o(),e(58,`
                    `),n(59,"ngx-datatable-column",37),e(60,`
                        `),n(61,"div",38),e(62,`
                            `),c(63,Ei,11,1,"ng-template",24),e(64,`
                            `),c(65,Fi,6,1,"ng-template",25),e(66,`
                        `),o(),e(67,`
                    `),o(),e(68,`
                `),o(),e(69,`
            `)),i&2){let t=s.settings;r(),u("limit",t.limit)("sorts",t.sorts)("columnMode",t.columnMode)("headerHeight",t.headerHeight)("footerHeight",t.footerHeight)("rowHeight",t.rowHeight)("rows",t.rows)("rowClass",t.rowClass)("scrollbarH",t.scrollbarH),r(2),u("minWidth",150)("width",200),r(7),u("minWidth",150)("width",150),r(7),u("minWidth",150)("width",150),r(7),u("minWidth",150)("width",150),r(7),u("minWidth",150)("width",200),r(7),u("minWidth",150)("width",200),r(7),u("minWidth",150)("width",200),r(7),u("minWidth",150)("width",200),r(7),u("minWidth",150)("width",100)}}function Ii(i,s){if(i&1&&(e(0,`
        `),n(1,"jhi-data-table",21),e(2,`
            `),c(3,Qi,70,27,"ng-template"),e(4,`
        `),o(),e(5,`
    `)),i&2){let t=m();r(),u("showPageSizeDropdown",!1)("showSearchField",!1)("allEntities",t.queuedBuildJobs)}}function Di(i,s){i&1&&(e(0,`
                `),d(1,"span",60),e(2,`
            `))}function Ai(i,s){if(i&1&&(e(0,`
                                    `),d(1,"jhi-result",90),e(2,`
                                `)),i&2){let t=m().$implicit;r(),u("result",t.submissionResult)("showUngradedResults",!0)("showBadge",!0)}}function Ji(i,s){if(i&1&&(e(0,`
                                    `),n(1,"span",41),e(2),o(),e(3,`
                                `)),i&2){let t=m().$implicit;r(),u("ngClass",oe(2,Tt,t.status==="CANCELLED",t.status==="FAILED"||t.status==="ERROR")),r(),P("",t.status,`
                                    `)}}function ki(i,s){if(i&1&&(e(0,`
                                    `),n(1,"a",43),e(2),o(),e(3,`
                                `)),i&2){let t=m().$implicit;r(),u("routerLink",v(3,L,t.courseId,t.exerciseId,t.participationId))("queryParams",I(7,se)),r(),g(t.participationId)}}function Pi(i,s){if(i&1&&(e(0,`
                                    `),n(1,"a",46),e(2),o(),e(3,`
                                `)),i&2){let t=m().$implicit;r(),u("routerLink",v(2,L,t.courseId,t.exerciseId,t.participationId)),r(),g(t.participationId)}}function Vi(i,s){if(i&1&&e(0),i&2){let t=m().$implicit;P(`
                                    `,t.participationId,`
                                `)}}function ji(i,s){if(i&1&&(e(0,`
                                    `),n(1,"a",50),e(2),o(),e(3,`
                                `)),i&2){let t=m().$implicit;r(),u("routerLink",A(2,de,t.courseId,t.exerciseId,t.triggeredByPushTo,t)),r(),g(t.commitHash==null?null:t.commitHash.substring(0,7))}}function Li(i,s){if(i&1&&(e(0,`
                                    `),n(1,"a",50),e(2),o(),e(3,`
                                `)),i&2){let t=m().$implicit;r(),u("routerLink",A(2,ue,t.courseId,t.exerciseId,t.participationId,t.commitHash)),r(),g(t.commitHash==null?null:t.commitHash.substring(0,7))}}function Mi(i,s){if(i&1&&(e(0,`
                                    `),n(1,"span",51),e(2),o(),e(3,`
                                `)),i&2){let t=m().$implicit;r(2),g(t.commitHash==null?null:t.commitHash.substring(0,7))}}function Wi(i,s){if(i&1){let t=h();e(0,`
                        `),n(1,"tr"),e(2,`
                            `),n(3,"td",64),e(4,`
                                `),n(5,"span",41),e(6,`
                                    `),d(7,"fa-icon",16),e(8,`
                                `),o(),e(9,`
                            `),o(),e(10,`
                            `),n(11,"td",88),e(12,`
                                `),n(13,"span",41),e(14),o(),e(15,`
                            `),o(),e(16,`
                            `),n(17,"td",69),e(18,`
                                `),c(19,Ai,3,3)(20,Ji,4,5),o(),e(21,`
                            `),n(22,"td",88),e(23,`
                                `),n(24,"a",89),b("click",function(){let l=_(t).$implicit,p=m(2),S=H(71);return x(p.viewBuildLogs(S,l.id))}),o(),e(25,`
                            `),o(),e(26,`
                            `),n(27,"td",88),e(28,`
                                `),n(29,"span"),e(30),o(),e(31,`
                            `),o(),e(32,`
                            `),n(33,"td",69),e(34,`
                                `),c(35,ki,4,8)(36,Pi,4,6)(37,Vi,1,1),o(),e(38,`
                            `),n(39,"td",69),e(40,`
                                `),n(41,"span"),e(42),o(),e(43,`
                            `),o(),e(44,`
                            `),n(45,"td",88),e(46,`
                                `),c(47,ji,4,7)(48,Li,4,7)(49,Mi,4,1),o(),e(50,`
                            `),n(51,"td",69),e(52,`
                                `),n(53,"a",46),e(54),o(),e(55,`
                            `),o(),e(56,`
                            `),n(57,"td",69),e(58,`
                                `),n(59,"span"),e(60),o(),e(61,`
                            `),o(),e(62,`
                            `),n(63,"td",69),e(64,`
                                `),n(65,"span"),e(66),F(67,"artemisDate"),o(),e(68,`
                            `),o(),e(69,`
                            `),n(70,"td",69),e(71,`
                                `),n(72,"span"),e(73),F(74,"artemisDate"),o(),e(75,`
                            `),o(),e(76,`
                            `),n(77,"td",69),e(78,`
                                `),n(79,"span"),e(80),F(81,"artemisDate"),o(),e(82,`
                            `),o(),e(83,`
                        `),o(),e(84,`
                    `)}if(i&2){let t=s.$implicit,a=m(2);r(5),u("ngClass",v(27,ut,t.status==="SUCCESSFUL",t.status==="CANCELLED",t.status==="FAILED"||t.status==="ERROR")),r(2),u("icon",t.status==="SUCCESSFUL"?a.faCircleCheck:t.status==="CANCELLED"?a.faExclamationTriangle:a.faExclamationCircle),r(6),u("ngClass",v(31,ut,t.status==="SUCCESSFUL",t.status==="CANCELLED",t.status==="FAILED"||t.status==="ERROR")),r(),g(t.name),r(5),C(t.status==="SUCCESSFUL"?19:20),r(11),g(t.buildAgentAddress),r(5),C(t.triggeredByPushTo===a.TriggeredByPushTo.TEMPLATE||t.triggeredByPushTo===a.TriggeredByPushTo.SOLUTION||t.triggeredByPushTo===a.TriggeredByPushTo.TESTS?35:t.triggeredByPushTo===a.TriggeredByPushTo.USER?36:37),r(7),g(t.repositoryType),r(5),C(t.triggeredByPushTo===a.TriggeredByPushTo.TEMPLATE||t.triggeredByPushTo===a.TriggeredByPushTo.SOLUTION||t.triggeredByPushTo===a.TriggeredByPushTo.TESTS?47:t.triggeredByPushTo===a.TriggeredByPushTo.USER?48:49),r(6),u("routerLink",D(35,me,t.courseId)),r(),g(t.courseId),r(6),g(t.buildDuration),r(6),g(J(67,15,t.buildSubmissionDate,"long",!0)),r(7),g(J(74,19,t.buildStartDate,"long",!0)),r(7),g(J(81,23,t.buildCompletionDate,"long",!0))}}function Oi(i,s){if(i&1){let t=h();e(0,`
        `),n(1,"div",61),e(2,`
            `),n(3,"table",62),e(4,`
                `),n(5,"thead"),e(6,`
                    `),n(7,"tr",63),E("predicateChange",function(l){_(t);let p=m();return T(p.predicate,l)||(p.predicate=l),x(l)})("ascendingChange",function(l){_(t);let p=m();return T(p.ascending,l)||(p.ascending=l),x(l)}),b("sortChange",function(){_(t);let l=m();return x(l.loadFinishedBuildJobs())}),e(8,`
                        `),n(9,"th",64),e(10,`
                            `),d(11,"span"),e(12,`
                        `),o(),e(13,`
                        `),n(14,"th",65),e(15,`
                            `),d(16,"span",66),e(17,`
                            `),d(18,"fa-icon",16),e(19,`
                        `),o(),e(20,`
                        `),n(21,"th",67),e(22,`
                            `),d(23,"span",68),e(24,`
                            `),d(25,"fa-icon",16),e(26,`
                        `),o(),e(27,`
                        `),n(28,"th",69),e(29,`
                            `),d(30,"span",70),e(31,`
                        `),o(),e(32,`
                        `),n(33,"th",71),e(34,`
                            `),d(35,"span",72),e(36,`
                            `),d(37,"fa-icon",16),e(38,`
                        `),o(),e(39,`
                        `),n(40,"th",73),e(41,`
                            `),d(42,"span",74),e(43,`
                            `),d(44,"fa-icon",16),e(45,`
                        `),o(),e(46,`
                        `),n(47,"th",75),e(48,`
                            `),d(49,"span",76),e(50,`
                            `),d(51,"fa-icon",16),e(52,`
                        `),o(),e(53,`
                        `),n(54,"th",77),e(55,`
                            `),d(56,"span",78),e(57,`
                            `),d(58,"fa-icon",16),e(59,`
                        `),o(),e(60,`
                        `),n(61,"th",79),e(62,`
                            `),d(63,"span",80),e(64,`
                            `),d(65,"fa-icon",16),e(66,`
                        `),o(),e(67,`
                        `),n(68,"th",69),e(69,`
                            `),d(70,"span",81),e(71,`
                        `),o(),e(72,`
                        `),n(73,"th",82),e(74,`
                            `),d(75,"span",83),e(76,`
                            `),d(77,"fa-icon",16),e(78,`
                        `),o(),e(79,`
                        `),n(80,"th",84),e(81,`
                            `),d(82,"span",85),e(83,`
                            `),d(84,"fa-icon",16),e(85,`
                        `),o(),e(86,`
                        `),n(87,"th",86),e(88,`
                            `),d(89,"span",87),e(90,`
                            `),d(91,"fa-icon",16),e(92,`
                        `),o(),e(93,`
                    `),o(),e(94,`
                `),o(),e(95,`
                `),n(96,"tbody"),e(97,`
                    `),ie(98,Wi,85,37,null,null,yt),o(),e(100,`
            `),o(),e(101,`
        `),o(),e(102,`
    `)}if(i&2){let t=m();r(7),w("predicate",t.predicate)("ascending",t.ascending),r(11),u("icon",t.faSort),r(3),te("width",250,"px"),r(4),u("icon",t.faSort),r(12),u("icon",t.faSort),r(3),te("width",150,"px"),r(4),u("icon",t.faSort),r(7),u("icon",t.faSort),r(7),u("icon",t.faSort),r(7),u("icon",t.faSort),r(12),u("icon",t.faSort),r(7),u("icon",t.faSort),r(7),u("icon",t.faSort),r(7),ne(t.finishedBuildJobs)}}function Ni(i,s){if(i&1){let t=h();e(0,`
        `),n(1,"div"),e(2,`
            `),n(3,"div",91),e(4,`
                `),d(5,"jhi-item-count",92),e(6,`
            `),o(),e(7,`
            `),n(8,"div",91),e(9,`
                `),n(10,"ngb-pagination",93),b("pageChange",function(l){_(t);let p=m();return x(p.onPageChange(l))}),E("pageChange",function(l){_(t);let p=m();return T(p.page,l)||(p.page=l),x(l)}),o(),e(11,`
            `),o(),e(12,`
        `),o(),e(13,`
    `)}if(i&2){let t=m();r(5),u("params",v(7,vt,t.page,t.totalItems,t.itemsPerPage)),r(5),u("collectionSize",t.totalItems),w("page",t.page),u("pageSize",t.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}function Ui(i,s){if(i&1){let t=h();e(0,`
                            `),n(1,"li",130),e(2,`
                                `),n(3,"label"),e(4,`
                                    `),n(5,"input",131),b("change",function(){let l=_(t).$implicit,p=m(2);return x(p.toggleBuildStatusFilter(l))}),o(),e(6,`
                                    `),d(7,"span",132),e(8,`
                                `),o(),e(9,`
                            `),o(),e(10,`
                        `)}if(i&2){let t=s.$implicit,a=m(2);r(5),u("checked",a.finishedBuildJobFilter.status===t),r(2),he("jhiTranslate","artemisApp.buildQueue.filter.buildStatus.",t,"")}}function Hi(i,s){i&1&&(e(0,`
                            `),d(1,"span",133),e(2,`
                        `))}function Ri(i,s){i&1&&(e(0,`
                            `),d(1,"span",134),e(2,`
                        `))}function qi(i,s){if(i&1){let t=h();e(0,`
    `),n(1,"div",94),e(2,`
        `),n(3,"h5",95),e(4,`
            `),d(5,"span",96),e(6,`
        `),o(),e(7,`
        `),n(8,"button",97),b("click",function(){let l=_(t).$implicit;return x(l.dismiss())}),o(),e(9,`
    `),o(),e(10,`
    `),n(11,"div",98),e(12,`
        `),n(13,"div",99),e(14,`
            `),n(15,"div",100),e(16,`
                `),n(17,"div",101),e(18,`
                    `),n(19,"h5",102),e(20,`
                        `),d(21,"span",103),e(22,`
                    `),o(),e(23,`
                `),o(),e(24,`
            `),o(),e(25,`
            `),n(26,"div",104),e(27,`
                `),n(28,"div",105),e(29,`
                    `),n(30,"ul",106),e(31,`
                        `),ie(32,Ui,11,3,null,null,be),n(34,"li",107),e(35,`
                            `),n(36,"input",108),b("click",function(){_(t);let l=m();return x(l.toggleBuildStatusFilter())}),o(),e(37,`
                            `),n(38,"label",109),e(39,`
                                `),d(40,"span",110),e(41,`
                            `),o(),e(42,`
                        `),o(),e(43,`
                    `),o(),e(44,`
                `),o(),e(45,`
            `),o(),e(46,`

            `),n(47,"div",100),e(48,`
                `),n(49,"div",101),e(50,`
                    `),n(51,"h5",102),e(52,`
                        `),d(53,"span",111),e(54,`
                    `),o(),e(55,`
                `),o(),e(56,`
            `),o(),e(57,`
            `),n(58,"div",104),e(59,`
                `),n(60,"div",112),e(61,`
                    `),n(62,"input",113,2),F(64,"artemisTranslate"),E("ngModelChange",function(l){_(t);let p=m();return T(p.finishedBuildJobFilter.buildAgentAddress,l)||(p.finishedBuildJobFilter.buildAgentAddress=l),x(l)}),b("focus",function(l){_(t);let p=m();return x(p.focus$.next(l.target.value))})("click",function(l){_(t);let p=H(63),S=m();return x(S.clickEvents(l,p))})("change",function(){_(t);let l=m();return x(l.filterBuildAgentAddressChanged())}),o(),e(65,`
                `),o(),e(66,`
            `),o(),e(67,`

            `),n(68,"div",100),e(69,`
                `),n(70,"div",101),e(71,`
                    `),n(72,"h5",102),e(73,`
                        `),d(74,"span",114),e(75,`
                    `),o(),e(76,`
                `),o(),e(77,`
            `),o(),e(78,`
            `),n(79,"div",104),e(80,`
                `),n(81,"div",112),e(82,`
                    `),n(83,"div",115),e(84,`
                        `),n(85,"div",116),e(86,`
                            `),d(87,"span",117),e(88,`
                        `),o(),e(89,`
                        `),n(90,"jhi-date-time-picker",118),E("ngModelChange",function(l){_(t);let p=m();return T(p.finishedBuildJobFilter.buildSubmissionDateFilterFrom,l)||(p.finishedBuildJobFilter.buildSubmissionDateFilterFrom=l),x(l)}),b("valueChange",function(){_(t);let l=m();return x(l.filterDateChanged())}),o(),e(91,`
                    `),o(),e(92,`
                    `),n(93,"div",115),e(94,`
                        `),n(95,"div",119),e(96,`
                            `),d(97,"span",120),e(98,`
                        `),o(),e(99,`
                        `),n(100,"jhi-date-time-picker",121),E("ngModelChange",function(l){_(t);let p=m();return T(p.finishedBuildJobFilter.buildSubmissionDateFilterTo,l)||(p.finishedBuildJobFilter.buildSubmissionDateFilterTo=l),x(l)}),b("valueChange",function(){_(t);let l=m();return x(l.filterDateChanged())}),o(),e(101,`
                        `),c(102,Hi,3,0),o(),e(103,`
                `),o(),e(104,`
            `),o(),e(105,`

            `),n(106,"div",100),e(107,`
                `),n(108,"div",101),e(109,`
                    `),n(110,"h5",102),e(111,`
                        `),d(112,"span",122),e(113,`
                    `),o(),e(114,`
                `),o(),e(115,`
            `),o(),e(116,`
            `),n(117,"div",104),e(118,`
                `),n(119,"div",112),e(120,`
                    `),n(121,"div",115),e(122,`
                        `),d(123,"span",123),e(124,`
                        `),n(125,"input",124),E("ngModelChange",function(l){_(t);let p=m();return T(p.finishedBuildJobFilter.buildDurationFilterLowerBound,l)||(p.finishedBuildJobFilter.buildDurationFilterLowerBound=l),x(l)}),b("change",function(){_(t);let l=m();return x(l.filterDurationChanged())}),o(),e(126,`
                        `),d(127,"span",125),e(128,`
                        `),n(129,"input",124),E("ngModelChange",function(l){_(t);let p=m();return T(p.finishedBuildJobFilter.buildDurationFilterUpperBound,l)||(p.finishedBuildJobFilter.buildDurationFilterUpperBound=l),x(l)}),b("change",function(){_(t);let l=m();return x(l.filterDurationChanged())}),o(),e(130,`
                        `),c(131,Ri,3,0),o(),e(132,`
                `),o(),e(133,`
            `),o(),e(134,`
        `),o(),e(135,`
    `),o(),e(136,`
    `),n(137,"div",126),e(138,`
        `),n(139,"button",127),b("click",function(){let l=_(t).$implicit;return x(l.close())}),e(140,`
            `),d(141,"span",128),e(142,`
        `),o(),e(143,`
        `),n(144,"button",15),b("click",function(){_(t);let l=m();return x(l.applyFilter())}),e(145,`
            `),d(146,"span",129),e(147,`
        `),o(),e(148,`
    `),o(),e(149,`
`)}if(i&2){let t=m();r(32),ne(t.buildStatusFilterValues),r(4),u("checked",t.finishedBuildJobFilter.status===void 0),r(26),u("placeholder",le(64,16,"artemisApp.buildQueue.filter.buildAgentAddress")),w("ngModel",t.finishedBuildJobFilter.buildAgentAddress),u("ngbTypeahead",t.typeaheadSearch),r(28),u("shouldDisplayTimeZoneWarning",!1)("labelName",""),w("ngModel",t.finishedBuildJobFilter.buildSubmissionDateFilterFrom),u("error",!t.finishedBuildJobFilter.areDatesValid),r(10),u("shouldDisplayTimeZoneWarning",!1)("labelName",""),w("ngModel",t.finishedBuildJobFilter.buildSubmissionDateFilterTo),u("error",!t.finishedBuildJobFilter.areDatesValid),r(2),C(t.finishedBuildJobFilter.areDatesValid?-1:102),r(23),w("ngModel",t.finishedBuildJobFilter.buildDurationFilterLowerBound),r(4),w("ngModel",t.finishedBuildJobFilter.buildDurationFilterUpperBound),r(2),C(t.finishedBuildJobFilter.areDurationFiltersValid?-1:131)}}function $i(i,s){if(i&1&&(e(0,`
                    `),n(1,"pre"),e(2),o(),e(3,`
                `)),i&2){let t=m(2);r(2),g(t.rawBuildLogsString)}}function zi(i,s){i&1&&(e(0,`
                    `),d(1,"span",138),e(2,`
                `))}function Gi(i,s){if(i&1){let t=h();e(0,`
    `),n(1,"div",94),e(2,`
        `),n(3,"h5",95),e(4,`
            `),d(5,"span",135),e(6,`
            `),n(7,"span"),e(8),o(),e(9,`
        `),o(),e(10,`
        `),n(11,"button",97),b("click",function(){let l=_(t).$implicit;return x(l.dismiss())}),o(),e(12,`
    `),o(),e(13,`
    `),n(14,"div",98),e(15,`
        `),n(16,"table",136),e(17,`
            `),n(18,"tbody"),e(19,`
                `),c(20,$i,4,1)(21,zi,3,0),o(),e(22,`
        `),o(),e(23,`
    `),o(),e(24,`
    `),n(25,"div",126),e(26,`
        `),n(27,"button",127),b("click",function(){let l=_(t).$implicit;return x(l.close())}),e(28,`
            `),d(29,"span",128),e(30,`
        `),o(),e(31,`
        `),n(32,"button",15),b("click",function(){_(t);let l=m();return x(l.downloadBuildLogs())}),e(33,`
            `),d(34,"span",137),e(35,`
        `),o(),e(36,`
    `),o(),e(37,`
`)}if(i&2){let t=m();r(8),P(" ",t.displayedBuildJobId,""),r(12),C(t.rawBuildLogsString?20:21)}}var ae=class{status=void 0;buildAgentAddress=void 0;buildSubmissionDateFilterFrom=void 0;buildSubmissionDateFilterTo=void 0;buildDurationFilterLowerBound=void 0;buildDurationFilterUpperBound=void 0;numberOfAppliedFilters=0;appliedFilters=new Map;areDurationFiltersValid=!0;areDatesValid=!0;addHttpParams(s){return this.status&&(s=s.append("buildStatus",this.status.toUpperCase())),this.buildAgentAddress&&(s=s.append("buildAgentAddress",this.buildAgentAddress)),this.buildSubmissionDateFilterFrom&&(s=s.append("startDate",this.buildSubmissionDateFilterFrom.toISOString())),this.buildSubmissionDateFilterTo&&(s=s.append("endDate",this.buildSubmissionDateFilterTo.toISOString())),this.buildDurationFilterLowerBound&&(s=s.append("buildDurationLower",this.buildDurationFilterLowerBound.toString())),this.buildDurationFilterUpperBound&&(s=s.append("buildDurationUpper",this.buildDurationFilterUpperBound.toString())),s}addFilterToFilterMap(s){this.appliedFilters.get(s)||(this.appliedFilters.set(s,!0),this.numberOfAppliedFilters++)}removeFilterFromFilterMap(s){this.appliedFilters.get(s)&&(this.appliedFilters.delete(s),this.numberOfAppliedFilters--)}},mt=function(i){return i.SUCCESSFUL="successful",i.FAILED="failed",i.ERROR="error",i.CANCELLED="cancelled",i.MISSING="missing",i.BUILDING="building",i.QUEUED="queued",i.TIMEOUT="timeout",i}(mt||{}),f=function(i){return i.status="artemis.buildQueue.finishedBuildJobFilterStatus",i.buildAgentAddress="artemis.buildQueue.finishedBuildJobFilterBuildAgentAddress",i.buildSubmissionDateFilterFrom="artemis.buildQueue.finishedBuildJobFilterBuildSubmissionDateFilterFrom",i.buildSubmissionDateFilterTo="artemis.buildQueue.finishedBuildJobFilterBuildSubmissionDateFilterTo",i.buildDurationFilterLowerBound="artemis.buildQueue.finishedBuildJobFilterBuildDurationFilterLowerBound",i.buildDurationFilterUpperBound="artemis.buildQueue.finishedBuildJobFilterBuildDurationFilterUpperBound",i}(f||{}),Xn=(()=>{class i{route=B(R);websocketService=B(ke);buildQueueService=B(Y);alertService=B(q);modalService=B(Ie);localStorage=B(Je);TriggeredByPushTo=lt;queuedBuildJobs=[];runningBuildJobs=[];finishedBuildJobs=[];courseChannels=[];faTimes=Ne;faSort=Me;faCircleCheck=je;faExclamationCircle=Pe;faExclamationTriangle=Ue;faSync=Le;totalItems=0;itemsPerPage=50;page=1;predicate="buildSubmissionDate";ascending=!1;buildDurationInterval;addressTypeahead;finishedBuildJobFilter=new ae;buildStatusFilterValues;faFilter=We;focus$=new O;click$=new O;isLoading=!1;search=new O;searchSubscription;searchTerm=void 0;displayedBuildJobId;rawBuildLogsString="";ngOnInit(){this.buildStatusFilterValues=Object.values(mt),this.loadQueue(),this.buildDurationInterval=setInterval(()=>{this.runningBuildJobs=this.updateBuildJobDuration(this.runningBuildJobs)},1e3),this.loadFilterFromLocalStorage(),this.loadFinishedBuildJobs(),this.initWebsocketSubscription(),this.searchSubscription=this.search.pipe(X(100),ee(()=>this.isLoading=!0),K(()=>this.fetchFinishedBuildJobs())).subscribe({next:t=>{this.onSuccess(t.body||[],t.headers),this.isLoading=!1},error:t=>{k(this.alertService,t),this.isLoading=!1}})}ngOnDestroy(){this.websocketService.unsubscribe("/topic/admin/queued-jobs"),this.websocketService.unsubscribe("/topic/admin/running-jobs"),this.courseChannels.forEach(t=>{this.websocketService.unsubscribe(t)}),clearInterval(this.buildDurationInterval),this.searchSubscription&&this.searchSubscription.unsubscribe()}initWebsocketSubscription(){this.route.paramMap.pipe(y(1)).subscribe(t=>{let a=Number(t.get("courseId"));a?(this.websocketService.subscribe(`/topic/courses/${a}/queued-jobs`),this.websocketService.subscribe(`/topic/courses/${a}/running-jobs`),this.websocketService.receive(`/topic/courses/${a}/queued-jobs`).subscribe(l=>{this.queuedBuildJobs=l}),this.websocketService.receive(`/topic/courses/${a}/running-jobs`).subscribe(l=>{this.runningBuildJobs=this.updateBuildJobDuration(l)}),this.courseChannels.push(`/topic/courses/${a}/queued-jobs`),this.courseChannels.push(`/topic/courses/${a}/running-jobs`)):(this.websocketService.subscribe("/topic/admin/queued-jobs"),this.websocketService.subscribe("/topic/admin/running-jobs"),this.websocketService.receive("/topic/admin/queued-jobs").subscribe(l=>{this.queuedBuildJobs=l}),this.websocketService.receive("/topic/admin/running-jobs").subscribe(l=>{this.runningBuildJobs=this.updateBuildJobDuration(l)}))})}loadQueue(){this.route.paramMap.pipe(y(1)).subscribe(t=>{let a=Number(t.get("courseId"));a?(this.buildQueueService.getQueuedBuildJobsByCourseId(a).subscribe(l=>{this.queuedBuildJobs=l}),this.buildQueueService.getRunningBuildJobsByCourseId(a).subscribe(l=>{this.runningBuildJobs=this.updateBuildJobDuration(l)})):(this.buildQueueService.getQueuedBuildJobs().subscribe(l=>{this.queuedBuildJobs=l}),this.buildQueueService.getRunningBuildJobs().subscribe(l=>{this.runningBuildJobs=this.updateBuildJobDuration(l)}))})}cancelBuildJob(t){this.route.paramMap.pipe(y(1)).subscribe(a=>{let l=Number(a.get("courseId"));l?this.buildQueueService.cancelBuildJobInCourse(l,t).subscribe():this.buildQueueService.cancelBuildJob(t).subscribe()})}cancelAllQueuedBuildJobs(){this.route.paramMap.pipe(y(1)).subscribe(t=>{let a=Number(t.get("courseId"));a?this.buildQueueService.cancelAllQueuedBuildJobsInCourse(a).subscribe():this.buildQueueService.cancelAllQueuedBuildJobs().subscribe()})}cancelAllRunningBuildJobs(){this.route.paramMap.pipe(y(1)).subscribe(t=>{let a=Number(t.get("courseId"));a?this.buildQueueService.cancelAllRunningBuildJobsInCourse(a).subscribe():this.buildQueueService.cancelAllRunningBuildJobs().subscribe()})}fetchFinishedBuildJobs(){return this.route.paramMap.pipe(y(1),ee(()=>this.isLoading=!0),K(t=>{let a=Number(t.get("courseId"));return a?this.buildQueueService.getFinishedBuildJobsByCourseId(a,{page:this.page,pageSize:this.itemsPerPage,sortingOrder:this.ascending?M.ASCENDING:M.DESCENDING,sortedColumn:this.predicate,searchTerm:this.searchTerm||""},this.finishedBuildJobFilter):this.buildQueueService.getFinishedBuildJobs({page:this.page,pageSize:this.itemsPerPage,sortingOrder:this.ascending?M.ASCENDING:M.DESCENDING,sortedColumn:this.predicate,searchTerm:this.searchTerm||""},this.finishedBuildJobFilter)}))}loadFinishedBuildJobs(){this.fetchFinishedBuildJobs().subscribe({next:t=>{this.onSuccess(t.body||[],t.headers),this.isLoading=!1},error:t=>{k(this.alertService,t),this.isLoading=!1}})}triggerLoadFinishedJobs(){(!this.searchTerm||this.searchTerm.length>=3)&&this.search.next()}onSuccess(t,a){this.totalItems=Number(a.get("X-Total-Count")),this.finishedBuildJobs=t,this.setFinishedBuildJobsDuration()}viewBuildLogs(t,a){this.rawBuildLogsString="",this.displayedBuildJobId=void 0,a&&(this.openModal(t,!0),this.displayedBuildJobId=a,this.buildQueueService.getBuildJobLogs(a).subscribe({next:l=>{this.rawBuildLogsString=l},error:l=>{k(this.alertService,l,!1)}}))}downloadBuildLogs(){if(this.displayedBuildJobId&&this.rawBuildLogsString){let t=new Blob([this.rawBuildLogsString],{type:"text/plain"});try{st(t,`${this.displayedBuildJobId}.log`)}catch{this.alertService.error("artemisApp.buildQueue.logs.downloadError")}}}setFinishedBuildJobsDuration(){if(this.finishedBuildJobs){for(let t of this.finishedBuildJobs)if(t.buildStartDate&&t.buildCompletionDate){let a=V(t.buildStartDate),l=V(t.buildCompletionDate);t.buildDuration=(l.diff(a,"milliseconds")/1e3).toFixed(3)+"s"}}}onPageChange(t){t&&(this.page=t,this.loadFinishedBuildJobs())}updateBuildJobDuration(t){return t.map(a=>{if(a.jobTimingInfo&&a.jobTimingInfo.buildStartDate){let l=V(a.jobTimingInfo.buildStartDate),p=V();a.jobTimingInfo.buildDuration=p.diff(l,"seconds")}return pe({},a)})}openModal(t,a,l,p=!0,S=!0){this.modalService.open(t,{size:l,keyboard:S,scrollable:p,fullscreen:a})}get buildAgentAddresses(){return Array.from(new Set(this.finishedBuildJobs.map(t=>t.buildAgentAddress??"").filter(t=>t!=="")))}clickEvents(t,a){a.isPopupOpen()&&this.click$.next(t.target.value)}typeaheadSearch=t=>{let a=this.buildAgentAddresses,l=t.pipe(X(200),xe()),p=this.click$,S=this.focus$;return _e(l,S,p).pipe(ce(Q=>(Q===""?a:a.filter(pt=>pt.toLowerCase().indexOf(Q.toLowerCase())>-1)).slice(0,10)))};applyFilter(){this.loadFinishedBuildJobs(),this.modalService.dismissAll()}loadFilterFromLocalStorage(){this.finishedBuildJobFilter.numberOfAppliedFilters=0;let t=Object.keys(f);for(let a of t){let l=this.localStorage.retrieve(f[a]);l&&(this.finishedBuildJobFilter[a]=a.includes("Date")?V(l):l,this.finishedBuildJobFilter.addFilterToFilterMap(f[a]))}}toggleBuildStatusFilter(t){t?(this.finishedBuildJobFilter.status=t,this.localStorage.store(f.status,t),this.finishedBuildJobFilter.addFilterToFilterMap(f.status)):(this.finishedBuildJobFilter.status=void 0,this.localStorage.clear(f.status),this.finishedBuildJobFilter.removeFilterFromFilterMap(f.status))}filterBuildAgentAddressChanged(){this.finishedBuildJobFilter.buildAgentAddress?(this.localStorage.store(f.buildAgentAddress,this.finishedBuildJobFilter.buildAgentAddress),this.finishedBuildJobFilter.addFilterToFilterMap(f.buildAgentAddress)):(this.localStorage.clear(f.buildAgentAddress),this.finishedBuildJobFilter.removeFilterFromFilterMap(f.buildAgentAddress))}filterDateChanged(){this.finishedBuildJobFilter.buildSubmissionDateFilterFrom?.isValid()?(this.localStorage.store(f.buildSubmissionDateFilterFrom,this.finishedBuildJobFilter.buildSubmissionDateFilterFrom),this.finishedBuildJobFilter.addFilterToFilterMap(f.buildSubmissionDateFilterFrom)):(this.finishedBuildJobFilter.buildSubmissionDateFilterFrom=void 0,this.localStorage.clear(f.buildSubmissionDateFilterFrom),this.finishedBuildJobFilter.removeFilterFromFilterMap(f.buildSubmissionDateFilterFrom)),this.finishedBuildJobFilter.buildSubmissionDateFilterTo?.isValid()?(this.localStorage.store(f.buildSubmissionDateFilterTo,this.finishedBuildJobFilter.buildSubmissionDateFilterTo),this.finishedBuildJobFilter.addFilterToFilterMap(f.buildSubmissionDateFilterTo)):(this.finishedBuildJobFilter.buildSubmissionDateFilterTo=void 0,this.localStorage.clear(f.buildSubmissionDateFilterTo),this.finishedBuildJobFilter.removeFilterFromFilterMap(f.buildSubmissionDateFilterTo)),this.finishedBuildJobFilter.buildSubmissionDateFilterFrom&&this.finishedBuildJobFilter.buildSubmissionDateFilterTo?this.finishedBuildJobFilter.areDatesValid=this.finishedBuildJobFilter.buildSubmissionDateFilterFrom.isBefore(this.finishedBuildJobFilter.buildSubmissionDateFilterTo):this.finishedBuildJobFilter.areDatesValid=!0}filterDurationChanged(){this.finishedBuildJobFilter.buildDurationFilterLowerBound?(this.localStorage.store(f.buildDurationFilterLowerBound,this.finishedBuildJobFilter.buildDurationFilterLowerBound),this.finishedBuildJobFilter.addFilterToFilterMap(f.buildDurationFilterLowerBound)):(this.localStorage.clear(f.buildDurationFilterLowerBound),this.finishedBuildJobFilter.removeFilterFromFilterMap(f.buildDurationFilterLowerBound)),this.finishedBuildJobFilter.buildDurationFilterUpperBound?(this.localStorage.store(f.buildDurationFilterUpperBound,this.finishedBuildJobFilter.buildDurationFilterUpperBound),this.finishedBuildJobFilter.addFilterToFilterMap(f.buildDurationFilterUpperBound)):(this.localStorage.clear(f.buildDurationFilterUpperBound),this.finishedBuildJobFilter.removeFilterFromFilterMap(f.buildDurationFilterUpperBound)),this.finishedBuildJobFilter.buildDurationFilterLowerBound&&this.finishedBuildJobFilter.buildDurationFilterUpperBound?this.finishedBuildJobFilter.areDurationFiltersValid=this.finishedBuildJobFilter.buildDurationFilterLowerBound<=this.finishedBuildJobFilter.buildDurationFilterUpperBound:this.finishedBuildJobFilter.areDurationFiltersValid=!0}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=N({type:i,selectors:[["jhi-build-queue"]],viewQuery:function(a,l){if(a&1&&fe(bt,7),a&2){let p;Ce(p=Se())&&(l.addressTypeahead=p.first)}},decls:73,vars:15,consts:[["filterModal",""],["buildLogsModal",""],["addressTypeahead","ngbTypeahead"],[2,"padding-bottom","60px"],["id","build-queue-running-heading","jhiTranslate","artemisApp.buildAgents.runningBuildJobs"],[1,"d-flex","justify-content-between","align-items-center","border-bottom","pb-2","mb-3"],["id","build-queue-queued-heading","jhiTranslate","artemisApp.buildQueue.queuedBuildJobs"],[1,"d-flex","justify-content-between"],[1,"d-flex","align-items-center"],["id","build-queue-finished-heading","jhiTranslate","artemisApp.buildQueue.finishedBuildJobs",1,"mr-1"],[1,"form-group","form-inline","my-0","mx-1"],["type","text","name","searchTerm","id","field_searchTerm",1,"form-control","ms-3",3,"ngModelChange","focusout","ngModel"],["text","artemisApp.buildQueue.filter.search.tooltip",1,"ps-1"],[1,"btn","btn-primary","ms-3",3,"click"],["jhiTranslate","artemisApp.buildQueue.filter.search.title"],[1,"btn","btn-primary",3,"click"],[3,"icon"],["jhiTranslate","metrics.refresh.button"],[1,"btn",3,"click","ngClass"],[1,"d-s-none","d-md-inline"],["jhiTranslate","artemisApp.buildQueue.filter.open",3,"translateValues"],["entityType","buildJob",3,"showPageSizeDropdown","showSearchField","allEntities"],[1,"bootstrap",3,"limit","sorts","columnMode","headerHeight","footerHeight","rowHeight","rows","rowClass","scrollbarH"],["prop","id",3,"minWidth","width"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["prop","buildAgent.displayName",3,"minWidth","width"],["prop","name",3,"minWidth","width"],["prop","participationId",3,"minWidth","width"],["prop","repositoryInfo.repositoryName",3,"minWidth","width"],["prop","repositoryInfo.repositoryType",3,"minWidth","width"],["prop","buildConfig.commitHashToBuild",3,"minWidth","width"],["prop","jobTimingInfo.buildDuration",3,"minWidth","width"],["prop","jobTimingInfo.submissionDate",3,"minWidth","width"],["prop","jobTimingInfo.buildStartDate",3,"minWidth","width"],["prop","courseId",3,"minWidth","width"],["prop","priority",3,"minWidth","width"],["prop","cancel",3,"minWidth","width"],[1,"d-flex","justify-content-center","align-items-center"],[1,"datatable-header-cell-wrapper",3,"click"],["jhiTranslate","artemisApp.buildQueue.buildJob.id",1,"datatable-header-cell-label","bold","sortable"],[3,"ngClass"],["jhiTranslate","artemisApp.buildQueue.buildJob.buildAgent",1,"datatable-header-cell-label","bold","sortable"],[3,"routerLink","queryParams"],["jhiTranslate","artemisApp.buildQueue.buildJob.name",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.buildQueue.buildJob.participationId",1,"datatable-header-cell-label","bold","sortable"],[3,"routerLink"],["jhiTranslate","artemisApp.buildQueue.buildJob.repositoryName",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.buildQueue.buildJob.repositoryType",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.buildQueue.buildJob.commitHash",1,"datatable-header-cell-label","bold","sortable"],[1,"wrap-long-text",3,"routerLink"],[1,"wrap-long-text"],["jhiTranslate","artemisApp.buildQueue.buildJob.buildDuration",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.buildQueue.buildJob.submissionDate",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.buildQueue.buildJob.buildStartDate",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.buildQueue.buildJob.courseId",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.buildQueue.buildJob.priority",1,"datatable-header-cell-label","bold","sortable"],[1,"datatable-header-cell-wrapper"],[1,"btn","btn-danger","btn-sm",3,"click"],["jhiTranslate","artemisApp.buildQueue.cancelAll"],["jhiTranslate","artemisApp.buildQueue.filter.search.loading",1,"ms-3"],[1,"table-responsive"],[1,"table","table-striped"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],[1,"finish-jobs-column-tiny"],["jhiSortBy","name",1,"finish-jobs-column-strings"],["jhiTranslate","artemisApp.buildQueue.buildJob.name"],["jhiSortBy","buildStatus",1,"finish-jobs-column"],["jhiTranslate","artemisApp.buildQueue.buildJob.status"],[1,"finish-jobs-column"],["jhiTranslate","artemisApp.buildQueue.buildJob.buildLogs"],["jhiSortBy","buildAgentAddress",1,"finish-jobs-column-strings"],["jhiTranslate","artemisApp.buildQueue.buildJob.buildAgent"],["jhiSortBy","participationId",1,"finish-jobs-column"],["jhiTranslate","artemisApp.buildQueue.buildJob.participationId"],["jhiSortBy","repositoryType",1,"finish-jobs-column"],["jhiTranslate","artemisApp.buildQueue.buildJob.repositoryType"],["jhiSortBy","commitHash",1,"finish-jobs-column-strings"],["jhiTranslate","artemisApp.buildQueue.buildJob.commitHash"],["jhiSortBy","courseId",1,"finish-jobs-column"],["jhiTranslate","artemisApp.buildQueue.buildJob.courseId"],["jhiTranslate","artemisApp.buildQueue.buildJob.duration"],["jhiSortBy","buildSubmissionDate",1,"finish-jobs-column"],["jhiTranslate","artemisApp.buildQueue.buildJob.submissionDate"],["jhiSortBy","buildStartDate",1,"finish-jobs-column"],["jhiTranslate","artemisApp.buildQueue.buildJob.start"],["jhiSortBy","buildCompletionDate",1,"finish-jobs-column"],["jhiTranslate","artemisApp.buildQueue.buildJob.completion"],[1,"finish-jobs-column-strings"],["jhiTranslate","artemisApp.result.buildLogs.viewLogs",1,"detail-link",3,"click"],[3,"result","showUngradedResults","showBadge"],[1,"row","justify-content-center"],[3,"params"],[3,"pageChange","collectionSize","page","pageSize","maxSize","rotate","boundaryLinks"],[1,"modal-header"],[1,"modal-title"],["jhiTranslate","artemisApp.buildQueue.filter.title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"container-fluid"],[1,"row","finished-build-jobs-filter-border-bottom"],[1,"col","d-flex","flex-row","pb-1"],[1,"my-0"],["jhiTranslate","artemisApp.buildQueue.filter.buildStatus.title"],[1,"row","finished-build-jobs-filter-background-accent"],[1,"col","container","px-3"],[1,"text-nowrap","list-unstyled","row","my-0","py-2"],[1,"col-3"],["type","radio",1,"form-check-input",3,"click","checked"],[1,"form-check-label","ps-1"],["jhiTranslate","artemisApp.buildQueue.filter.none"],["jhiTranslate","artemisApp.buildQueue.filter.buildAgentAddress"],[1,"col","container","px-3","my-0","py-2"],["type","text",1,"form-control",3,"ngModelChange","focus","click","change","placeholder","ngModel","ngbTypeahead"],["jhiTranslate","artemisApp.buildQueue.filter.buildSubmissionDate.title"],[1,"input-group"],[1,"input-group-prepend","form-item-prepend"],["jhiTranslate","artemisApp.buildQueue.filter.buildSubmissionDate.from",1,"input-group-text"],["id","field_startDate",3,"ngModelChange","valueChange","shouldDisplayTimeZoneWarning","labelName","ngModel","error"],[1,"input-group-append","form-item-prepend"],["jhiTranslate","artemisApp.buildQueue.filter.buildSubmissionDate.to",1,"input-group-text"],["id","field_endDate",3,"ngModelChange","valueChange","shouldDisplayTimeZoneWarning","labelName","ngModel","error"],["jhiTranslate","artemisApp.buildQueue.filter.buildDuration.title"],["jhiTranslate","artemisApp.buildQueue.filter.buildDuration.lowerBound",1,"input-group-text"],["type","number",1,"form-control",3,"ngModelChange","change","ngModel"],["jhiTranslate","artemisApp.buildQueue.filter.buildDuration.upperBound",1,"input-group-text"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["jhiTranslate","artemisApp.buildQueue.filter.close"],["jhiTranslate","artemisApp.buildQueue.filter.apply"],[1,"col"],["type","radio",1,"form-check-input",3,"change","checked"],[1,"ps-1",3,"jhiTranslate"],["jhiTranslate","artemisApp.buildQueue.filter.buildSubmissionDate.invalidDate",1,"invalid-feedback"],["jhiTranslate","artemisApp.buildQueue.filter.buildDuration.invalidState",1,"invalid-feedback"],["jhiTranslate","artemisApp.buildQueue.logs.title"],[1,"table","table-borderless"],["jhiTranslate","artemisApp.buildQueue.logs.download"],["jhiTranslate","artemisApp.buildQueue.logs.noLogs"]],template:function(a,l){if(a&1){let p=h();d(0,"jhi-build-job-statistics"),e(1,`

`),n(2,"div",3),e(3,`
    `),d(4,"h3",4),e(5,`
    `),d(6,"div",5),e(7,`
    `),c(8,li,6,3),o(),e(9,`
`),n(10,"div",3),e(11,`
    `),d(12,"h3",6),e(13,`
    `),d(14,"div",5),e(15,`
    `),c(16,Ii,6,3),o(),e(17,`
`),n(18,"div"),e(19,`
    `),n(20,"div",7),e(21,`
        `),n(22,"div",8),e(23,`
            `),d(24,"h3",9),e(25,`
            `),n(26,"div",10),e(27,`
                `),n(28,"input",11),E("ngModelChange",function(Q){return _(p),T(l.searchTerm,Q)||(l.searchTerm=Q),x(Q)}),b("focusout",function(){return _(p),x(l.triggerLoadFinishedJobs())}),o(),e(29,`
                `),d(30,"jhi-help-icon",12),e(31,`
                `),n(32,"button",13),b("click",function(){return _(p),x(l.triggerLoadFinishedJobs())}),e(33,`
                    `),d(34,"span",14),e(35,`
                `),o(),e(36,`
            `),o(),e(37,`
            `),n(38,"button",15),b("click",function(){return _(p),x(l.loadFinishedBuildJobs())}),e(39,`
                `),d(40,"fa-icon",16),e(41,`
                `),d(42,"span",17),e(43,`
            `),o(),e(44,`
            `),c(45,Di,3,0),o(),e(46,`
        `),n(47,"div"),e(48,`
            `),n(49,"button",18),b("click",function(){_(p);let Q=H(68);return x(l.openModal(Q))}),e(50,`
                `),d(51,"fa-icon",16),e(52,`
                `),n(53,"span",19),e(54,`
                    `),d(55,"span",20),e(56,`
                `),o(),e(57,`
            `),o(),e(58,`
        `),o(),e(59,`
    `),o(),e(60,`
    `),d(61,"div",5),e(62,`
    `),c(63,Oi,103,16)(64,Ni,14,11),o(),e(65,`
`),e(66,`
`),c(67,qi,150,18,"ng-template",null,0,re),e(69,`

`),c(70,Gi,38,2,"ng-template",null,1,re),e(72,`
`)}a&2&&(r(8),C(l.runningBuildJobs?8:-1),r(8),C(l.queuedBuildJobs?16:-1),r(12),w("ngModel",l.searchTerm),r(12),u("icon",l.faSync),r(5),C(l.isLoading?45:-1),r(4),u("ngClass",oe(10,ht,!l.finishedBuildJobFilter.numberOfAppliedFilters,!!l.finishedBuildJobFilter.numberOfAppliedFilters)),r(2),u("icon",l.faFilter),r(4),u("translateValues",D(13,ft,l.finishedBuildJobFilter.numberOfAppliedFilters)),r(8),C(l.finishedBuildJobs?63:-1),r(),C(l.finishedBuildJobs?64:-1))},dependencies:[z,G,$,tt,et,Ke,Xe,Ye,Ze,Be,Te,Fe,ve,Ee,ye,we,$e,ze,at,Ge,De,Ae,qe,Re,He,rt,dt],styles:[".wrap-long-text[_ngcontent-%COMP%]{word-break:break-all}.finished-build-jobs-filter-border-bottom[_ngcontent-%COMP%]{border-bottom:2px solid var(--overview-blue-border-color)}.finished-build-jobs-filter-background-accent[_ngcontent-%COMP%]{background:var(--user-management-background-color)}.form-item-prepend[_ngcontent-%COMP%]{width:13%}.finish-jobs-column-tiny[_ngcontent-%COMP%]{max-width:20px}.finish-jobs-column[_ngcontent-%COMP%]{min-width:100px}.finish-jobs-column-strings[_ngcontent-%COMP%]{max-width:180px}.build-output[_ngcontent-%COMP%]{height:inherit}.build-output__entry-date[_ngcontent-%COMP%]{width:200px;margin-right:10px;color:var(--secondary);font-weight:400;float:left;clear:left}.build-output__entry-text[_ngcontent-%COMP%]{margin-bottom:0;color:var(--body-color)}"]})}return i})();export{Xn as BuildQueueComponent,ae as FinishedBuildJobFilter,f as FinishedBuildJobFilterStorageKey};
//# sourceMappingURL=build-queue.component-67ANSOSP.js.map
