import{b as Rt}from"./chunk-GXLYQKDJ.js";import{a as Ot}from"./chunk-HTZAAFOQ.js";import{a as At}from"./chunk-3GEJHWIQ.js";import{a as h}from"./chunk-RTRBZQHM.js";import{b as tt}from"./chunk-3A7JIXAS.js";import{a as K,b as Ht}from"./chunk-GOZO62KC.js";import{a as Ft}from"./chunk-YUF2Y3HT.js";import{c as Lt}from"./chunk-CCVWGTN5.js";import{a as Nt}from"./chunk-4RRONT5E.js";import{a as Y}from"./chunk-5PWC33TE.js";import{a as It}from"./chunk-A2A6JFSH.js";import{a as $t}from"./chunk-EAC2ODNH.js";import{f as Bt}from"./chunk-FAFORKWV.js";import{a as kt}from"./chunk-YOWUV6EQ.js";import{a as Mt}from"./chunk-X3HHHVRJ.js";import{a as jt}from"./chunk-4NYYKXW4.js";import{b as X}from"./chunk-T4L3VFV2.js";import{a as I}from"./chunk-BIKLNSC4.js";import{a as wt}from"./chunk-QZKVSIAC.js";import{a as bt,b as J,c as Dt,d as Et}from"./chunk-O26CMRR4.js";import{a as Pt}from"./chunk-2QXIMOEO.js";import{c as ht}from"./chunk-JNO6DNVW.js";import{K as G,L as q,v as xt}from"./chunk-VZRSC3LP.js";import{m as yt}from"./chunk-VK7JPHFE.js";import{c as Ct}from"./chunk-BNDLMKXK.js";import{r as ft}from"./chunk-5GXY5RYT.js";import{a as O}from"./chunk-K3W6YFKH.js";import{c as vt}from"./chunk-JXJXC4DZ.js";import{d as St,f as Tt}from"./chunk-EDXSOKK5.js";import{Cc as _t,wd as gt}from"./chunk-Z4VHWOB5.js";import{a as W}from"./chunk-HKBU2OOC.js";import{a as T}from"./chunk-U54OSGNH.js";import{i as z,m as L}from"./chunk-M6Z6DKZQ.js";import{B as ut,n as mt,s as dt,t as ct}from"./chunk-IOA4DPXY.js";import{Ad as B,Bb as rt,Cc as Z,Db as o,Dc as E,Ea as S,Ed as U,Lb as lt,Ma as b,Mc as C,Na as D,Oc as p,Rc as A,Sc as g,Tb as x,Vb as st,Za as nt,Zb as u,ab as ot,cd as M,dd as i,ed as P,fd as _,kc as d,mc as Q,qd as $,rd as V,sc as c,sd as j,tc as pt,uc as H,vc as R,wb as at,wc as F,xb as N,xc as l,yc as s,yd as f,zc as m,zd as w}from"./chunk-5LC5EQRR.js";import{a as et,b as it}from"./chunk-3E746U5Y.js";function Zt(t,r){if(t&1){let e=E();i(0,`
            `),l(1,"a",2),C("click",function(){let a=b(e).$implicit,k=p();return D(k.scrollToView(a.id))}),i(2),f(3,"artemisTranslate"),s(),i(4,`
        `)}if(t&2){let e=r.$implicit;o(2),_(`
                `,w(3,1,e.translationKey),`
            `)}}var Vt=(()=>{class t{sectionHeadlines;onResizeAddDistanceFromStatusBarToNavbar(){kt()}ngAfterViewInit(){this.onResizeAddDistanceFromStatusBarToNavbar()}scrollToView(e){document.getElementById(e)?.scrollIntoView()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["jhi-detail-overview-navigation-bar"]],hostBindings:function(n,a){n&1&&C("resize",function(){return a.onResizeAddDistanceFromStatusBarToNavbar()},!1,rt)},inputs:{sectionHeadlines:"sectionHeadlines"},decls:8,vars:0,consts:[[1,"mt-3"],[1,"nav-link-container"],[3,"click"]],template:function(n,a){n&1&&(l(0,"nav",0),i(1,`
    `),l(2,"div",1),i(3,`
        `),R(4,Zt,5,3,null,null,H),s(),i(6,`
`),s(),i(7,`
`)),n&2&&(o(4),F(a.sectionHeadlines))},dependencies:[O],styles:["nav[_ngcontent-%COMP%]{position:sticky;top:0;z-index:2;padding:1rem 0;background:var(--bs-card-bg);border-bottom:1px solid var(--bs-border-color);border-top:1px solid var(--bs-border-color)}nav[_ngcontent-%COMP%]   .nav-link-container[_ngcontent-%COMP%]{display:flex;gap:2rem;flex-wrap:nowrap;overflow:auto}nav[_ngcontent-%COMP%]   .nav-link-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;white-space:nowrap}"]})}return t})();var te=(t,r)=>({"btn-success selected":t,"btn-default":r}),ee=(t,r)=>({"btn-danger selected":t,"btn-default":r}),Ut=(()=>{class t{irisSettingsService=S(wt);exercise;course;lecture;irisSubSettingsType;disabled=!1;irisSettings;irisSubSettings;ngOnInit(){this.exercise?this.irisSettingsService.getUncombinedExerciseSettings(this.exercise.id).subscribe(e=>{this.irisSettings=e,this.setSubSettings()}):this.course&&this.irisSettingsService.getUncombinedCourseSettings(this.course.id).subscribe(e=>{this.irisSettings=e,this.setSubSettings()})}setEnabled(e){!this.disabled&&this.irisSubSettings&&(this.irisSubSettings.enabled=e,this.exercise?this.irisSettingsService.setExerciseSettings(this.exercise.id,this.irisSettings).subscribe(n=>{this.irisSettings=n.body??this.irisSettings,this.setSubSettings()}):this.course&&this.irisSettingsService.setCourseSettings(this.course.id,this.irisSettings).subscribe(n=>{this.irisSettings=n.body??this.irisSettings,this.setSubSettings()}))}setSubSettings(){switch(this.irisSubSettingsType){case I.CHAT:this.irisSubSettings=this.irisSettings?.irisChatSettings;break;case I.TEXT_EXERCISE_CHAT:this.irisSubSettings=this.irisSettings?.irisTextExerciseChatSettings;break;case I.COURSE_CHAT:this.irisSubSettings=this.irisSettings?.irisCourseChatSettings;break;case I.COMPETENCY_GENERATION:this.irisSubSettings=this.irisSettings?.irisCompetencyGenerationSettings;break;case I.LECTURE_INGESTION:this.irisSubSettings=this.irisSettings?.irisLectureIngestionSettings;break}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["jhi-iris-enabled"]],inputs:{exercise:"exercise",course:"course",lecture:"lecture",irisSubSettingsType:"irisSubSettingsType",disabled:"disabled"},decls:7,vars:12,consts:[[1,"btn-group"],["jhiTranslate","artemisApp.iris.settings.subSettings.enabled.on",1,"btn",3,"click","ngClass"],["jhiTranslate","artemisApp.iris.settings.subSettings.enabled.off",1,"btn","btn-default",3,"click","ngClass"]],template:function(n,a){n&1&&(l(0,"div",0),i(1,`
    `),l(2,"div",1),C("click",function(){return a.setEnabled(!0)}),s(),i(3,`
    `),l(4,"div",2),C("click",function(){return a.setEnabled(!1)}),s(),i(5,`
`),s(),i(6,`
`)),n&2&&(o(2),Q("disabled",a.disabled),d("ngClass",j(6,te,a.irisSubSettings==null?null:a.irisSubSettings.enabled,!(a.irisSubSettings!=null&&a.irisSubSettings.enabled))),o(2),Q("disabled",a.disabled),d("ngClass",j(9,ee,!(a.irisSubSettings!=null&&a.irisSubSettings.enabled),a.irisSubSettings==null?null:a.irisSubSettings.enabled)))},dependencies:[T,mt],encapsulation:2})}return t})();function ie(t,r){if(t&1&&i(0),t&2){let e=p();_(`
    `,e.detail.data.text,`
`)}}function ne(t,r){t&1&&(i(0,`
    `),m(1,"jhi-no-data"),i(2,`
`))}var zt=(()=>{class t{detail;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["jhi-text-detail"]],inputs:{detail:"detail"},decls:2,vars:1,template:function(n,a){n&1&&u(0,ie,1,1)(1,ne,3,0),n&2&&c(a.detail.data.text?0:1)},dependencies:[h],encapsulation:2})}return t})();function oe(t,r){if(t&1&&(i(0),f(1,"artemisDate")),t&2){let e=p();_(`
    `,w(1,1,e.detail.data.date),`
`)}}function ae(t,r){t&1&&(i(0,`
    `),m(1,"jhi-no-data"),i(2,`
`))}var Gt=(()=>{class t{detail;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["jhi-date-detail"]],inputs:{detail:"detail"},decls:2,vars:1,template:function(n,a){n&1&&u(0,oe,2,3)(1,ae,3,0),n&2&&c(a.detail.data.date?0:1)},dependencies:[h,ht],encapsulation:2})}return t})();function le(t,r){if(t&1&&(i(0,`
        `),l(1,"a",0),i(2),s(),i(3,`
    `)),t&2){let e=p(2);o(),d("routerLink",e.detail.data.routerLink)("queryParams",e.detail.data.queryParams),o(),_(`
            `,e.detail.data.text,`
        `)}}function se(t,r){if(t&1&&(i(0,`
        `),l(1,"a",1),i(2),s(),i(3,`
    `)),t&2){let e=p(2);o(),A("href",e.detail.data.href,N),o(),_(`
            `,e.detail.data.text,`
        `)}}function pe(t,r){if(t&1&&(i(0,`
        `),l(1,"span"),i(2),s(),i(3,`
    `)),t&2){let e=p(2);o(2),P(e.detail.data.text)}}function me(t,r){if(t&1&&(i(0,`
    `),u(1,le,4,3)(2,se,4,2)(3,pe,4,1)),t&2){let e=p();o(),c(e.detail.data.routerLink!=null&&e.detail.data.routerLink.length?1:e.detail.data.href?2:3)}}function de(t,r){t&1&&(i(0,`
    `),m(1,"jhi-no-data"),i(2,`
`))}var qt=(()=>{class t{detail;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["jhi-link-detail"]],inputs:{detail:"detail"},decls:2,vars:1,consts:[[3,"routerLink","queryParams"],[3,"href"]],template:function(n,a){n&1&&u(0,me,4,1)(1,de,3,0),n&2&&c(a.detail.data.text?0:1)},dependencies:[h,L,z],encapsulation:2})}return t})();var Wt=(()=>{class t{detail;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["jhi-boolean-detail"]],inputs:{detail:"detail"},decls:2,vars:1,consts:[[3,"checkAttribute"]],template:function(n,a){n&1&&(m(0,"jhi-checklist-check",0),i(1,`
`)),n&2&&d("checkAttribute",a.detail.data.boolean)},dependencies:[Mt],encapsulation:2})}return t})();var ce=t=>[".","repository",t];function ue(t,r){if(t&1&&(i(0,`
    `),l(1,"div",0),i(2,`
        `),m(3,"jhi-code-button",1),i(4,`
        `),m(5,"jhi-programming-exercise-instructor-repo-download",2),i(6,`
    `),s(),i(7,`
`)),t&2){let e=p();o(3),d("smallButtons",!0)("repositoryUri",e.detail.data.participation==null?null:e.detail.data.participation.repositoryUri)("routerLinkForRepositoryView",V(5,ce,e.detail.data.type)),o(2),d("exerciseId",e.detail.data.exerciseId)("repositoryType",e.detail.data.type)}}function xe(t,r){t&1&&(i(0,`
    `),m(1,"jhi-no-data"),i(2,`
`))}var Jt=(()=>{class t{detail;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["jhi-programming-repository-buttons-detail"]],inputs:{detail:"detail"},decls:2,vars:1,consts:[[1,"clone-buttons"],[3,"smallButtons","repositoryUri","routerLinkForRepositoryView"],[1,"ms-2",3,"exerciseId","repositoryType"]],template:function(n,a){n&1&&u(0,ue,8,7)(1,xe,3,0),n&2&&c(a.detail.data.participation!=null&&a.detail.data.participation.repositoryUri&&a.detail.data.exerciseId?0:1)},dependencies:[h,L,X,Y],encapsulation:2})}return t})();var ge=(t,r)=>[".","repository",t,r],fe=(t,r)=>r.id;function Ce(t,r){if(t&1&&(i(0,`
                        `),m(1,"fa-icon",5),i(2,`
                        `),m(3,"span",6),i(4,`
                    `)),t&2){p();let e=M(14),n=p(2);o(),d("icon",n.faExclamationTriangle)("ngbTooltip",e)}}function ve(t,r){t&1&&(i(0,`
                        `),m(1,"span",7),i(2,`
                    `))}function ye(t,r){if(t&1&&(i(0,`
            `),l(1,"li",1),i(2,`
                `),l(3,"span"),i(4),s(),i(5,`
                `),m(6,"jhi-code-button",2),i(7,`
                `),m(8,"jhi-programming-exercise-instructor-repo-download",3),i(9,`
                `),l(10,"div",4),i(11,`
                    `),u(12,Ce,5,2)(13,ve,3,0,"ng-template",null,0,U),i(15,`
                `),s(),i(16,`
            `),s(),i(17,`
        `)),t&2){let e=p().$implicit,n=p();o(4),_("Repository: ",e.name,""),o(2),d("smallButtons",!0)("repositoryUri",e.repositoryUri)("routerLinkForRepositoryView",j(8,ge,n.RepositoryType.AUXILIARY,e.id)),o(2),d("exerciseId",n.detail.data.exerciseId)("repositoryType",n.RepositoryType.AUXILIARY)("auxiliaryRepositoryId",e.id),o(4),c(e.checkoutDirectory?-1:12)}}function Se(t,r){if(t&1&&(i(0,`
        `),u(1,ye,18,11)),t&2){let e=r.$implicit,n=p();o(),c(e.id&&e.repositoryUri&&n.detail.data.exerciseId?1:-1)}}var Xt=(()=>{class t{detail;faExclamationTriangle=gt;RepositoryType=Bt;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["jhi-programming-auxiliary-repository-buttons-detail"]],inputs:{detail:"detail"},decls:5,vars:0,consts:[["noCheckoutDirectorySetTooltip",""],[1,"mt-2"],[1,"ms-2",3,"smallButtons","repositoryUri","routerLinkForRepositoryView"],[1,"ms-2",3,"exerciseId","repositoryType","auxiliaryRepositoryId"],[1,"auxiliaryRepositoryDescription"],[1,"text-warning","me-1",3,"icon","ngbTooltip"],["jhiTranslate","artemisApp.programmingExercise.noCheckoutDirectorySet"],["jhiTranslate","artemisApp.programmingExercise.noCheckoutDirectorySetTooltip"]],template:function(n,a){n&1&&(l(0,"ul"),i(1,`
    `),R(2,Se,2,1,null,null,fe),s(),i(4,`
`)),n&2&&(o(2),F(a.detail.data.auxiliaryRepositories))},dependencies:[L,q,G,Tt,St,X,Y,T],encapsulation:2})}return t})();var Te=()=>({isTmpOrSolutionProgrParticipation:!0});function he(t,r){if(t&1){let e=E();i(0,`
            `),l(1,"jhi-updating-result",1),C("onParticipationChange",function(){b(e);let a=p(2);return D(a.detail.data.onParticipationChange())}),s(),i(2,`
        `)}if(t&2){let e=p(2);o(),d("exercise",e.detail.data.exercise)("participation",e.detail.data.participation)("showUngradedResults",!0)("personalParticipation",!1)("short",!1)("showProgressBar",!0)}}function be(t,r){if(t&1&&(i(0,`
                `),m(1,"jhi-programming-exercise-instructor-trigger-build-button",3),i(2,`
            `)),t&2){let e=p(3);o(),d("exercise",e.detail.data.exercise)("participation",e.detail.data.participation)}}function De(t,r){if(t&1&&(i(0,`
            `),m(1,"jhi-programming-exercise-instructor-status",2),i(2,`
            `),u(3,be,3,2)),t&2){let e=p(2);o(),d("participationType",e.detail.data.type)("participation",e.detail.data.participation)("exercise",e.detail.data.exercise),o(2),c(e.detail.data.exercise.isAtLeastEditor?3:-1)}}function Ee(t,r){t&1&&(i(0,`
                        `),m(1,"span",5),i(2,`
                    `))}function Pe(t,r){t&1&&(i(0,`
                        `),m(1,"span",6),i(2,`
                    `))}function we(t,r){if(t&1&&(i(0,`
            `),l(1,"a",4),i(2,`
                `),u(3,Ee,3,0)(4,Pe,3,0),i(5,`
            `),s(),i(6,`
        `)),t&2){let e,n=p(2);o(),d("routerLink",n.detail.data.submissionRouterLink)("queryParams",$(3,Te)),o(2),c((e=n.detail.data.type)===n.ProgrammingExerciseParticipationType.TEMPLATE?3:e===n.ProgrammingExerciseParticipationType.SOLUTION?4:-1)}}function Le(t,r){if(t&1&&(i(0,`
    `),l(1,"div",0),i(2,`
        `),u(3,he,3,6)(4,De,4,4)(5,we,7,4),s(),i(6,`
`)),t&2){let e=p();o(3),c(e.detail.data.loading?-1:3),o(),c(e.detail.data.participation.results!=null&&e.detail.data.participation.results.length?4:-1),o(),c(e.detail.data.exercise.isAtLeastEditor&&e.detail.data.participation.id?5:-1)}}var Kt=(()=>{class t{ProgrammingExerciseParticipationType=K;detail;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["jhi-programming-test-status-detail"]],inputs:{detail:"detail"},decls:1,vars:1,consts:[[1,"d-flex","align-items-center"],[1,"me-2",3,"onParticipationChange","exercise","participation","showUngradedResults","personalParticipation","short","showProgressBar"],[1,"repository-status-icon","me-2",3,"participationType","participation","exercise"],[3,"exercise","participation"],[1,"ms-2",3,"routerLink","queryParams"],["jhiTranslate","artemisApp.programmingExercise.detail.showTemplateSubmissions"],["jhiTranslate","artemisApp.programmingExercise.detail.showSolutionSubmissions"]],template:function(n,a){n&1&&u(0,Le,7,3),n&2&&c(a.detail.data.participation?0:-1)},dependencies:[L,z,T,jt,Nt,Ht],encapsulation:2})}return t})();function Ie(t,r){if(t&1){let e=E();i(0,`
    `),l(1,"div",3),i(2,`
        `),l(3,"jhi-button",4),C("onClick",function(){b(e);let a=p();return D(a.showGitDiff(a.detail.data.gitDiffReport))}),s(),i(4,`
    `),s(),i(5,`
`)}if(t&2){let e,n=p();o(3),d("featureToggle",n.FeatureToggle.ProgrammingExercises)("isLoading",(e=n.detail.data.isLoadingDiffReport)!==null&&e!==void 0?e:!1)("btnSize",n.ButtonSize.SMALL)("icon",n.faCodeCompare)("title","artemisApp.programmingExercise.diffReport.button")("tooltip","artemisApp.programmingExercise.diffReport.tooltip")("btnType",n.WARNING)("tooltipPlacement",n.TooltipPlacement.RIGHT)}}var Yt=(()=>{class t{FeatureToggle=W;ButtonSize=J;TooltipPlacement=Dt;WARNING=bt.WARNING;faCodeCompare=_t;modalService=S(xt);modalRef;detail;ngOnDestroy(){this.modalRef?.close()}showGitDiff(e){e&&(this.modalRef=this.modalService.open(tt,{windowClass:tt.WINDOW_CLASS}),this.modalRef.componentInstance.report=ot(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["jhi-programming-diff-report-detail"]],inputs:{detail:"detail"},decls:9,vars:6,consts:[["jhiTranslate","artemisApp.programmingExercise.diffReport.shortDescription"],[1,"fw-bold"],["placement","right",3,"addedLineCount","removedLineCount","ngbTooltip"],[1,"mt-1"],[3,"onClick","featureToggle","isLoading","btnSize","icon","title","tooltip","btnType","tooltipPlacement"]],template:function(n,a){n&1&&(m(0,"span",0),i(1,`
`),l(2,"div",1),i(3,`
    `),m(4,"jhi-git-diff-line-stat",2),f(5,"artemisTranslate"),i(6,`
`),s(),i(7,`
`),u(8,Ie,6,8)),n&2&&(o(4),A("ngbTooltip",w(5,4,"artemisApp.programmingExercise.diffReport.lineStatTooltipDetailPage")),d("addedLineCount",a.detail.data.addedLineCount)("removedLineCount",a.detail.data.removedLineCount),o(4),c(a.detail.data.addedLineCount>0||a.detail.data.removedLineCount>0?8:-1))},dependencies:[$t,O,q,G,Et,T],encapsulation:2})}return t})();var Qt=(()=>{class t{viewContainerRef=S(lt);detail;componentRef;ngOnInit(){if(!this.isShownDetail())return;this.detail=this.detail;let n={[y.Text]:zt,[y.Date]:Gt,[y.Link]:qt,[y.Boolean]:Wt,[y.ProgrammingRepositoryButtons]:Jt,[y.ProgrammingAuxiliaryRepositoryButtons]:Xt,[y.ProgrammingTestStatus]:Kt,[y.ProgrammingDiffReport]:Yt}[this.detail.type];n&&(this.componentRef=this.viewContainerRef.createComponent(n),this.assignAttributes())}ngOnDestroy(){this.componentRef?.destroy()}isShownDetail(){return!!this.detail}assignAttributes(){this.componentRef&&(this.componentRef.instance.detail=this.detail)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=st({type:t,selectors:[["","jhiExerciseDetail",""]],inputs:{detail:"detail"}})}return t})();var Re=()=>[],Fe=t=>({"background-color":t});function ke(t,r){if(t&1&&(i(0,`
    `),m(1,"jhi-detail-overview-navigation-bar",1),i(2,`
`)),t&2){let e=p();o(),d("sectionHeadlines",e.headlines)}}function Ae(t,r){if(t&1&&(i(0,`
                            `),m(1,"jhi-help-icon",5),i(2,`
                        `)),t&2){let e=p(3).$implicit;o(),A("text",e.titleHelpText)}}function Be(t,r){if(t&1&&(i(0,`
                    `),l(1,"dt",4),i(2,`
                        `),l(3,"span"),i(4),f(5,"artemisTranslate"),s(),i(6,`
                        `),u(7,Ae,3,1),s(),i(8,`
                `)),t&2){let e=p(2).$implicit;o(),g("id","detail-title-",e.title,""),o(3),P(B(5,4,e.title,e.titleTranslationProps)),o(3),c(e.titleHelpText?7:-1)}}function Oe(t,r){if(t&1&&(i(0,`
                            `),l(1,"dd",6),i(2,`
                                `),m(3,"jhi-programming-exercise-instructions",7),i(4,`
                            `),s(),i(5,`
                        `)),t&2){let e=p(3).$implicit;o(),g("id","detail-value-",e.title,""),o(2),d("exercise",e.data.exercise)("participation",e.data.exercise.templateParticipation)("personalParticipation",!0)}}function Me(t,r){if(t&1&&(i(0,`
                        `),u(1,Oe,6,5)),t&2){let e=p(2).$implicit;o(),c(e.data.exercise!=null&&e.data.exercise.templateParticipation?1:-1)}}function je(t,r){if(t&1&&(i(0,`
                        `),l(1,"dd",4),i(2,`
                            `),m(3,"jhi-programming-exercise-lifecycle",8),i(4,`
                        `),s(),i(5,`
                    `)),t&2){let e,n=p(2).$implicit;o(),g("id","detail-value-",n.title,""),o(2),d("isExamMode",(e=n.data.isExamMode)!==null&&e!==void 0?e:!1)("exercise",n.data.exercise)("readOnly",!0)}}function Ne(t,r){if(t&1&&(i(0,`
                                `),m(1,"div",9),i(2,`
                            `)),t&2){let e=p(3).$implicit;o(),d("innerHTML",e.data.innerHtml,at)}}function He(t,r){t&1&&Z(0)}function $e(t,r){if(t&1&&(i(0,`
                                `),u(1,He,1,0,"ng-container",10),i(2,`
                            `)),t&2){p(4);let e=M(11);o(),d("ngTemplateOutlet",e)}}function Ve(t,r){if(t&1&&(i(0,`
                        `),l(1,"dd",4),i(2,`
                            `),u(3,Ne,3,1)(4,$e,3,1),s(),i(5,`
                    `)),t&2){let e=p(2).$implicit;o(),g("id","detail-value-",e.title,""),o(2),c(e.data.innerHtml?3:4)}}function Ue(t,r){if(t&1&&(i(0,`
                        `),l(1,"dd",11),i(2,`
                            `),m(3,"jhi-structured-grading-instructions-assessment-layout",12),i(4,`
                        `),s(),i(5,`
                    `)),t&2){let e=p(2).$implicit;o(),g("id","detail-value-",e.title,""),o(2),d("readonly",!0)("criteria",e.data.gradingCriteria||$(4,Re))}}function ze(t,r){if(t&1&&(i(0,`
                        `),l(1,"dd",4),i(2,`
                            `),l(3,"table",13),i(4,`
                                `),l(5,"thead"),i(6,`
                                    `),l(7,"tr"),i(8,`
                                        `),m(9,"th",14),i(10,`
                                        `),m(11,"th",15),i(12,`
                                        `),m(13,"th",16),i(14,`
                                        `),m(15,"th",17),i(16,`
                                        `),m(17,"th",18),i(18,`
                                        `),m(19,"th",19),i(20,`
                                    `),s(),i(21,`
                                `),s(),i(22,`
                                `),l(23,"tbody"),i(24,`
                                    `),l(25,"tr"),i(26,`
                                        `),l(27,"td"),i(28),s(),i(29,`
                                        `),l(30,"td"),i(31),f(32,"number"),s(),i(33,`
                                        `),l(34,"td"),i(35),f(36,"number"),s(),i(37,`
                                        `),l(38,"td"),i(39),f(40,"number"),s(),i(41,`
                                        `),l(42,"td"),i(43),f(44,"number"),s(),i(45,`
                                        `),l(46,"td"),i(47),s(),i(48,`
                                    `),s(),i(49,`
                                `),s(),i(50,`
                            `),s(),i(51,`
                        `),s(),i(52,`
                    `)),t&2){let e,n,a=p(2).$implicit;o(),g("id","detail-value-",a.title,""),o(27),P((e=a.data.buildLogStatistics.buildCount)!==null&&e!==void 0?e:0),o(3),_(`
                                            `,a.data.buildLogStatistics.agentSetupDuration?B(32,8,a.data.buildLogStatistics.agentSetupDuration,"1.2-2")+"s":"-",`
                                        `),o(4),_(`
                                            `,a.data.buildLogStatistics.testDuration?B(36,11,a.data.buildLogStatistics.testDuration,"1.2-2")+"s":"-",`
                                        `),o(4),_(`
                                            `,a.data.buildLogStatistics.scaDuration?B(40,14,a.data.buildLogStatistics.scaDuration,"1.2-2")+"s":"-",`
                                        `),o(4),_(`
                                            `,a.data.buildLogStatistics.totalJobDuration?B(44,17,a.data.buildLogStatistics.totalJobDuration,"1.2-2")+"s":"-",`
                                        `),o(4),P((n=a.data.buildLogStatistics.dependenciesDownloadedCount)!==null&&n!==void 0?n:"-")}}function Ge(t,r){if(t&1&&(i(0,`
                        `),l(1,"dd",4),i(2,`
                            `),m(3,"jhi-iris-enabled",20),i(4,`
                        `),s(),i(5,`
                    `)),t&2){let e=p(2).$implicit;o(),g("id","detail-value-",e.title,""),o(2),d("exercise",e.data.exercise)("course",e.data.course)("irisSubSettingsType",e.data.subSettingsType)("disabled",e.data.disabled)}}function qe(t,r){if(t&1){let e=E();i(0,`
                                `),l(1,"button",21),C("click",function(){b(e);let a=p(3).$implicit,k=p(2);return D(k.downloadApollonDiagramAsPDf(a.data.umlModel,a.data.title))}),s(),i(2,`
                            `)}}function We(t,r){if(t&1&&(i(0,`
                                `),m(1,"jhi-modeling-editor",22),i(2,`
                            `)),t&2){let e=p(3).$implicit;o(),d("readOnly",!0)("diagramType",e.data.diagramType)("umlModel",e.data.umlModel)}}function Je(t,r){t&1&&Z(0)}function Xe(t,r){if(t&1&&(i(0,`
                                `),u(1,Je,1,0,"ng-container",10),i(2,`
                            `)),t&2){p(4);let e=M(11);o(),d("ngTemplateOutlet",e)}}function Ke(t,r){if(t&1&&(i(0,`
                        `),l(1,"dd",6),i(2,`
                            `),u(3,qe,3,0)(4,We,3,3)(5,Xe,3,1),s(),i(6,`
                    `)),t&2){let e=p(2).$implicit,n=p(2);o(),g("id","detail-value-",e.title,""),o(2),c(!(e.data.umlModel==null||e.data.umlModel.elements==null)&&e.data.umlModel.elements.length&&e.data.isApollonProfileActive?3:-1),o(),c(!n.isEmpty(e.data.umlModel==null?null:e.data.umlModel.elements)&&e.data.diagramType&&e.data.umlModel?4:5)}}function Ye(t,r){if(t&1&&(i(0,`
                        `),l(1,"dd",4),i(2,`
                            `),m(3,"jhi-programming-exercise-repository-and-build-plan-details",23),i(4,`
                        `),s(),i(5,`
                    `)),t&2){let e=p(2).$implicit;o(),g("id","detail-value-",e.title,""),o(2),d("programmingExercise",e.data.exercise)("programmingLanguage",e.data.programmingLanguage)("isLocal",e.data.isLocal)("checkoutSolutionRepository",(e.data.exercise.buildConfig==null?null:e.data.exercise.buildConfig.checkoutSolutionRepository)||!1)}}function Qe(t,r){if(t&1&&(i(0,`
                        `),l(1,"dd",4),i(2,`
                            `),m(3,"img",24),i(4,`
                        `),s(),i(5,`
                    `)),t&2){let e=p(2).$implicit;o(),g("id","detail-value-",e.title,""),o(2),d("alt",e.data.altText)("src",e.data.imageUrl,N)}}function Ze(t,r){if(t&1&&(i(0,`
                        `),l(1,"dd",4),i(2,`
                            `),l(3,"strong",25),i(4),s(),i(5,`
                        `),s(),i(6,`
                    `)),t&2){let e=p(2).$implicit;o(),g("id","detail-value-",e.title,""),o(2),d("ngStyle",V(4,Fe,e.data.color)),o(),P(e.data.initials)}}function ti(t,r){if(t&1&&(i(0,`
                        `),l(1,"dd",4),i(2,`
                            `),m(3,"div",26),i(4,`
                        `),s(),i(5,`
                    `)),t&2){let e=p(2).$implicit;o(),g("id","detail-value-",e.title,""),o(2),d("detail",e)}}function ei(t,r){if(t&1&&(i(0,`
                `),u(1,Be,9,7)(2,Me,2,1)(3,je,6,5)(4,Ve,6,3)(5,Ue,6,5)(6,ze,53,20)(7,Ge,6,6)(8,Ke,7,4)(9,Ye,6,6)(10,Qe,6,4)(11,Ze,7,6)(12,ti,6,3),i(13,`
            `)),t&2){let e,n=p().$implicit,a=p(2);o(),c(n.title?1:-1),o(),c((e=n.type)===a.DetailType.ProgrammingProblemStatement?2:e===a.DetailType.ProgrammingTimeline?3:e===a.DetailType.Markdown?4:e===a.DetailType.GradingCriteria?5:e===a.DetailType.ProgrammingBuildStatistics?6:e===a.DetailType.ProgrammingIrisEnabled?7:e===a.DetailType.ModelingEditor?8:e===a.DetailType.ProgrammingCheckoutDirectories?9:e===a.DetailType.Image?10:e===a.DetailType.DefaultProfilePicture?11:12)}}function ii(t,r){if(t&1&&(i(0,`
            `),u(1,ei,14,2)),t&2){let e=r.$implicit;o(),c(e?1:-1)}}function ni(t,r){t&1&&m(0,"jhi-no-data")}function oi(t,r){if(t&1&&(i(0,`
    `),l(1,"h3",2),i(2),f(3,"artemisTranslate"),s(),i(4,`
    `),l(5,"dl",3),i(6,`
        `),R(7,ii,2,1,null,null,pt),s(),i(9,`
    `),u(10,ni,1,0,"ng-template",null,0,U),i(12,`
`)),t&2){let e=r.$implicit,n=p();o(),d("id",n.headlinesRecord[e.headline]),o(),P(w(3,2,e.headline)),o(5),F(e.details)}}var y=function(t){return t.Link="detail-link",t.Text="detail-text",t.DefaultProfilePicture="detail-default-profile-picture",t.Image="detail-image",t.Date="detail-date",t.Boolean="detail-boolean",t.Markdown="detail-markdown",t.GradingCriteria="detail-grading-criteria",t.ModelingEditor="detail-modeling-editor",t.ProgrammingIrisEnabled="detail-iris",t.ProgrammingRepositoryButtons="detail-repository-buttons",t.ProgrammingAuxiliaryRepositoryButtons="detail-auxiliary-repository-buttons",t.ProgrammingTestStatus="detail-test-status",t.ProgrammingDiffReport="detail-diff-report",t.ProgrammingProblemStatement="detail-problem-statement",t.ProgrammingTimeline="detail-timeline",t.ProgrammingBuildStatistics="detail-build-statistics",t.ProgrammingCheckoutDirectories="detail-checkout-directories",t}(y||{}),Yn=(()=>{class t{isEmpty=ft;DetailType=y;FeatureToggle=W;ButtonSize=J;ProgrammingExerciseParticipationType=K;CHAT=I.CHAT;modelingExerciseService=S(Ft);alertService=S(vt);profileService=S(Ct);sections=nt.required();headlines;headlinesRecord;profileSubscription;isLocalVC=!1;ngOnInit(){this.headlines=this.sections().map(e=>({id:e.headline.replaceAll(".","-"),translationKey:e.headline})),this.profileSubscription=this.profileService.getProfileInfo().subscribe(e=>{this.isLocalVC=e.activeProfiles.includes(yt)}),this.headlinesRecord=this.headlines.reduce((e,n)=>it(et({},e),{[n.translationKey]:n.id}),{})}downloadApollonDiagramAsPDf(e,n){e&&this.modelingExerciseService.convertToPdf(JSON.stringify(e),`${n}-example-solution`).subscribe({error:()=>{this.alertService.error("artemisApp.modelingExercise.apollonConversion.error")}})}ngOnDestroy(){this.profileSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["jhi-detail-overview-list"]],inputs:{sections:[1,"sections"]},decls:3,vars:1,consts:[["noData",""],[3,"sectionHeadlines"],[1,"section-headline",3,"id"],[1,"section-detail-list"],[3,"id"],[3,"text"],[1,"p-3","border",3,"id"],[3,"exercise","participation","personalParticipation"],[3,"isExamMode","exercise","readOnly"],[1,"p-3","border","markdown-preview",3,"innerHTML"],[4,"ngTemplateOutlet"],[1,"col-md-6","mt-4",3,"id"],[3,"readonly","criteria"],[1,"table","table-striped"],["jhiTranslate","artemisApp.programmingExercise.buildLogStatistics.numberOfBuilds"],["jhiTranslate","artemisApp.programmingExercise.buildLogStatistics.agentSetupDuration"],["jhiTranslate","artemisApp.programmingExercise.buildLogStatistics.testDuration"],["jhiTranslate","artemisApp.programmingExercise.buildLogStatistics.scaDuration"],["jhiTranslate","artemisApp.programmingExercise.buildLogStatistics.totalJobDuration"],["jhiTranslate","artemisApp.programmingExercise.buildLogStatistics.dependenciesDownloadedCount"],[3,"exercise","course","irisSubSettingsType","disabled"],["jhiTranslate","entity.action.export",1,"btn","btn-primary","m-2",3,"click"],[1,"editor-outline-background",3,"readOnly","diagramType","umlModel"],[3,"programmingExercise","programmingLanguage","isLocal","checkoutSolutionRepository"],[1,"details-image","rounded-3",3,"alt","src"],[1,"details-default-profile-picture","rounded-3",3,"ngStyle"],["jhiExerciseDetail","",3,"detail"]],template:function(n,a){n&1&&(u(0,ke,3,1),R(1,oi,13,4,null,null,H)),n&2&&(c(a.headlines!=null&&a.headlines.length&&a.headlines.length>1?0:-1),o(),F(a.sections()))},dependencies:[Vt,Pt,It,At,ct,Rt,T,Ut,Lt,Ot,dt,Qt,h,ut,O],styles:[`.section-headline{margin-top:1rem;margin-bottom:.5rem;scroll-margin-top:70px}.section-detail-list:not(:last-child){border-bottom:1px solid var(--bs-border-color)}.details-default-profile-picture{width:3rem;height:3rem;font-size:1.5rem;display:inline-flex;align-items:center;justify-content:center;background-color:var(--gray-400);color:var(--white)}.details-image{width:3rem;height:3rem;object-fit:cover}
`],encapsulation:2})}return t})();export{y as a,Yn as b};
//# sourceMappingURL=chunk-LFOGFBTL.js.map
