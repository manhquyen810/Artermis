import{a as q,b as F,c as bt,d as _t,e as xt,f as ft,g as It,h as vt,i as Et,j as yt}from"./chunk-BIKLNSC4.js";import{a as G}from"./chunk-QZKVSIAC.js";import{a as f,d as Ct}from"./chunk-O26CMRR4.js";import{d as St}from"./chunk-AR57MWOI.js";import{c as ct}from"./chunk-CK7FH6VF.js";import{c as ut}from"./chunk-5MVJAZRV.js";import{K as st,o as Z,p as tt,q as et,r as it,s as nt}from"./chunk-VZRSC3LP.js";import{K as O,b as R,h as k,m as j}from"./chunk-WA5GEAJB.js";import{e as Y,s as pt}from"./chunk-5GXY5RYT.js";import{a as mt}from"./chunk-K3W6YFKH.js";import{c as B}from"./chunk-JXJXC4DZ.js";import{d as ht}from"./chunk-EDXSOKK5.js";import{b as P}from"./chunk-R5BZWVRQ.js";import{Bb as gt,F as at,Yc as dt,kb as ot,tb as lt}from"./chunk-Z4VHWOB5.js";import{a as rt}from"./chunk-NOBD5HSR.js";import{a as N}from"./chunk-U54OSGNH.js";import{n as J}from"./chunk-IOA4DPXY.js";import{Db as o,Dc as _,Ea as x,La as $,Ma as S,Mc as u,Na as m,Oc as l,Rc as T,Sc as X,Tb as M,Tc as W,Va as z,Zb as b,c as K,dd as e,ed as H,fd as w,kc as c,ld as V,mc as I,md as A,nd as U,sc as C,sd as Q,uc as v,vc as E,wc as y,xc as r,yc as a,yd as L,zc as d,zd as D}from"./chunk-5LC5EQRR.js";var h=function(n){return n.GLOBAL="global",n.COURSE="course",n.EXERCISE="exercise",n}(h||{});var At=(n,p)=>({"btn-success selected":n,"btn-default":p}),Ut=(n,p)=>({"btn-danger selected":n,"btn-default":p});function Lt(n,p){n&1&&(e(0,`
            `),d(1,"div",12),e(2,`
        `))}function Dt(n,p){n&1&&(e(0,`
            `),d(1,"div",13),e(2,`
        `))}function Ft(n,p){if(n&1&&(e(0,`
    `),b(1,Lt,3,0)(2,Dt,3,0),e(3,`
`)),n&2){let t,s=l();o(),C((t=s.settingsType)===s.EXERCISE?1:t===s.COURSE?2:-1)}}function Mt(n,p){if(n&1){let t=_();e(0,`
                `),r(1,"div",15),e(2,`
                    `),r(3,"input",16),u("ngModelChange",function(){let i=S(t).$implicit,g=l(2);return m(g.onCategorySelectionChange(i))}),a(),e(4,`
                    `),r(5,"label",17),e(6),a(),e(7,`
                `),a(),e(8,`
            `)}if(n&2){let t=p.$implicit,s=l(2);o(3),T("id",t),c("ngModel",s.subSettings==null||s.subSettings.enabledForCategories==null?null:s.subSettings.enabledForCategories.includes(t)),o(2),T("for",t),o(),H(t)}}function Rt(n,p){if(n&1&&(e(0,`
    `),d(1,"h4",14),e(2,`
    `),r(3,"div",5),e(4,`
        `),r(5,"div",5),e(6,`
            `),E(7,Mt,9,4,null,null,v),a(),e(9,`
    `),a(),e(10,`
`)),n&2){let t=l();o(7),y(t.categories)}}function kt(n,p){if(n&1&&(e(0,`
                        `),d(1,"fa-icon",23),L(2,"artemisTranslate"),e(3,`
                    `)),n&2){let t=l(3);o(),c("icon",t.faCircleExclamation)("ngbTooltip",D(2,2,"artemisApp.iris.settings.subSettings.proactivitySettings.parentDisabled"))}}function jt(n,p){if(n&1){let t=_();e(0,`
                `),r(1,"div",20),e(2,`
                    `),r(3,"input",21),u("ngModelChange",function(){let i=S(t).$implicit,g=l(2);return m(g.onEventToggleChange(i))}),a(),e(4,`
                    `),d(5,"label",22),e(6,`
                    `),b(7,kt,4,4),a(),e(8,`
            `)}if(n&2){let t=p.$implicit,s=l(2);o(3),T("id",t),c("disabled",!s.isAdmin&&!s.parentSubSettings)("ngModel",!(!(s.subSettings==null||s.subSettings.disabledProactiveEvents==null)&&s.subSettings.disabledProactiveEvents.includes(t))),o(2),T("for",t),c("jhiTranslate",s.eventTranslationKeys[t]),o(2),C(s.eventInParentDisabledStatusMap.get(t)?7:-1)}}function Ot(n,p){if(n&1&&(e(0,`
    `),r(1,"div",6),e(2,`
        `),d(3,"span",18),e(4,`
        `),d(5,"fa-icon",19),L(6,"artemisTranslate"),e(7,`
    `),a(),e(8,`
    `),r(9,"div",5),e(10,`
        `),r(11,"div",5),e(12,`
            `),E(13,jt,9,6,null,null,v),a(),e(15,`
    `),a(),e(16,`
`)),n&2){let t=l();o(5),c("icon",t.faQuestionCircle)("ngbTooltip",D(6,2,"artemisApp.iris.settings.subSettings.proactivitySettings.tooltip")),o(8),y(t.exerciseChatEvents)}}function Pt(n,p){if(n&1){let t=_();e(0,`
    `),r(1,"div",24),e(2,`
        `),r(3,"input",25),U("ngModelChange",function(i){S(t);let g=l();return A(g.inheritAllowedVariants,i)||(g.inheritAllowedVariants=i),m(i)}),u("change",function(){S(t);let i=l();return m(i.onInheritAllowedVariantsChange())}),a(),e(4,`
        `),d(5,"label",26),e(6,`
    `),a(),e(7,`
`)}if(n&2){let t,s,i=l();o(3),X("id","inheritAllowedVariantsSwitch",(t=i.subSettings==null?null:i.subSettings.type)!==null&&t!==void 0?t:"",""),c("disabled",!i.isAdmin),V("ngModel",i.inheritAllowedVariants),o(2),X("for","inheritAllowedVariantsSwitch",(s=i.subSettings==null?null:i.subSettings.type)!==null&&s!==void 0?s:"","")}}function Bt(n,p){if(n&1){let t=_();e(0,`
        `),r(1,"div",15),e(2,`
            `),r(3,"input",21),u("ngModelChange",function(){let i=S(t).$implicit,g=l();return m(g.onAllowedIrisVariantsSelectionChange(i))}),a(),e(4,`
            `),r(5,"label",17),e(6),a(),e(7,`
        `),a(),e(8,`
    `)}if(n&2){let t,s,i=p.$implicit,g=l();o(3),W("id","",i.id,"",(t=g.subSettings==null?null:g.subSettings.type)!==null&&t!==void 0?t:"",""),c("disabled",!g.isAdmin||g.inheritAllowedVariants)("ngModel",g.allowedVariants.includes(i)),o(2),W("for","",i.id,"",(s=g.subSettings==null?null:g.subSettings.type)!==null&&s!==void 0?s:"",""),o(),w(`
                `,i.name,`
            `)}}function Nt(n,p){if(n&1){let t=_();e(0,`
                `),r(1,"button",27),u("click",function(){S(t);let i=l();return m(i.setVariant(void 0))}),e(2),L(3,"artemisTranslate"),a(),e(4,`
            `)}if(n&2){let t=l();o(),I("selected",(t.subSettings==null?null:t.subSettings.selectedVariant)===void 0),o(),w(`
                    `,D(3,3,"artemisApp.iris.settings.subSettings.variants.selectedVariant.inherit"),`
                `)}}function Gt(n,p){if(n&1){let t=_();e(0,`
                `),r(1,"button",28),u("click",function(){let i=S(t).$implicit,g=l();return m(g.setVariant(i))}),e(2),a(),e(3,`
            `)}if(n&2){let t=p.$implicit,s=l();o(),I("selected",t.id===(s.subSettings==null?null:s.subSettings.selectedVariant)),c("ngbTooltip",t.description),o(),w(`
                    `,t.name,`
                `)}}function qt(n,p){if(n&1&&(e(0,`
        `),r(1,"span",29),e(2),a(),e(3,`
    `)),n&2){let t=l();o(2),H(t.getSelectedVariantNameParent())}}var Tt=(()=>{class n{irisSettingsService=x(G);courseManagementService=x(St);exerciseService=x(ct);alertService=x(B);subSettings;parentSubSettings;settingsType;courseId;onChanges=new z;isAdmin;inheritAllowedVariants;eventInParentDisabledStatusMap=new Map;availableVariants=[];allowedVariants=[];enabled;categories=[];exerciseChatEvents=[F.BUILD_FAILED,F.PROGRESS_STALLED];EXERCISE=h.EXERCISE;COURSE=h.COURSE;TEXT_EXERCISE_CHAT=q.TEXT_EXERCISE_CHAT;CHAT=q.CHAT;WARNING=f.WARNING;faTrash=gt;faQuestionCircle=ot;faCircleExclamation=at;IrisSubSettings=bt;IrisSubSettingsType=q;eventTranslationKeys={[F.BUILD_FAILED]:"artemisApp.iris.settings.subSettings.proactivityBuildFailedEventEnabled.label",[F.PROGRESS_STALLED]:"artemisApp.iris.settings.subSettings.proactivityProgressStalledEventEnabled.label"};constructor(){let t=x(P);this.isAdmin=t.isAdmin()}ngOnInit(){this.enabled=this.subSettings?.enabled??!1,this.loadCategories(),this.loadVariants(),this.inheritAllowedVariants=!!(!this.subSettings?.allowedVariants&&this.parentSubSettings)}ngOnChanges(t){!this.inheritAllowedVariants&&t.availableVariants&&(this.allowedVariants=this.getAllowedVariants()),t.subSettings&&(this.enabled=this.subSettings?.enabled??!1),(t.parentSubSettings||t.subSettings)&&this.updateEventDisabledStatus()}loadCategories(){this.settingsType===this.COURSE&&this.courseManagementService.findAllCategoriesOfCourse(this.courseId).subscribe({next:t=>{this.categories=this.exerciseService.convertExerciseCategoriesAsStringFromServer(t.body).map(s=>s.category).filter(s=>s!==void 0).map(s=>s),this.categories=Array.from(new Set(this.categories))},error:t=>ut(this.alertService,t)})}loadVariants(){this.subSettings?.type&&this.irisSettingsService.getVariantsForFeature(this.subSettings?.type).subscribe(t=>{this.availableVariants=t??this.availableVariants,this.allowedVariants=this.getAllowedVariants()})}getAllowedVariants(){return this.availableVariants.filter(t=>(this.subSettings?.allowedVariants??this.parentSubSettings?.allowedVariants??[]).includes(t.id))}getSelectedVariantName(){return this.availableVariants.find(t=>t.id===this.subSettings?.selectedVariant)?.name??this.subSettings?.selectedVariant}getSelectedVariantNameParent(){return this.availableVariants.find(t=>t.id===this.parentSubSettings?.selectedVariant)?.name??this.parentSubSettings?.selectedVariant}onAllowedIrisVariantsSelectionChange(t){this.inheritAllowedVariants=!1,this.allowedVariants.map(s=>s.id).includes(t.id)?this.allowedVariants=this.allowedVariants.filter(s=>s.id!==t.id):this.allowedVariants.push(t),this.subSettings.allowedVariants=this.allowedVariants.map(s=>s.id)}setVariant(t){this.subSettings.selectedVariant=t?.id}onEnabledChange(){this.subSettings.enabled=this.enabled}onEnable(){this.enabled=!0,this.onEnabledChange()}onDisable(){this.enabled=!1,this.onEnabledChange()}onInheritAllowedVariantsChange(){this.inheritAllowedVariants?(this.subSettings.allowedVariants=void 0,this.allowedVariants=this.getAllowedVariants()):this.subSettings.allowedVariants=this.allowedVariants.map(t=>t.id)}onCategorySelectionChange(t){this.subSettings&&(this.subSettings.enabledForCategories||(this.subSettings.enabledForCategories=[]),this.subSettings.enabledForCategories?.includes(t)?this.subSettings.enabledForCategories=this.subSettings.enabledForCategories.filter(s=>s!==t):this.subSettings.enabledForCategories=[...this.subSettings.enabledForCategories??[],t])}onEventToggleChange(t){this.subSettings&&(this.subSettings.disabledProactiveEvents||(this.subSettings.disabledProactiveEvents=[]),this.subSettings.disabledProactiveEvents?.includes(t)?this.subSettings.disabledProactiveEvents=this.subSettings.disabledProactiveEvents.filter(s=>s!==t):this.subSettings.disabledProactiveEvents=[...this.subSettings.disabledProactiveEvents??[],t])}get inheritDisabled(){return this.parentSubSettings?!this.parentSubSettings.enabled:!1}get isSettingsSwitchDisabled(){return this.inheritDisabled||!this.isAdmin&&this.settingsType!==this.EXERCISE}updateEventDisabledStatus(){this.exerciseChatEvents.forEach(t=>{let s=!this.subSettings?.enabled||this.parentSubSettings&&!this.subSettings?.disabledProactiveEvents?.includes(t)&&(this.parentSubSettings.disabledProactiveEvents?.includes(t)||!this.parentSubSettings.enabled);this.eventInParentDisabledStatusMap.set(t,s)})}static \u0275fac=function(s){return new(s||n)};static \u0275cmp=M({type:n,selectors:[["jhi-iris-common-sub-settings-update"]],inputs:{subSettings:"subSettings",parentSubSettings:"parentSubSettings",settingsType:"settingsType",courseId:"courseId"},outputs:{onChanges:"onChanges"},features:[$],decls:43,vars:21,consts:[[1,"btn-group"],["jhiTranslate","artemisApp.iris.settings.subSettings.enabled.on",1,"btn",3,"click","ngClass"],["jhiTranslate","artemisApp.iris.settings.subSettings.enabled.off",1,"btn",3,"click","ngClass"],["jhiTranslate","artemisApp.iris.settings.subSettings.variants.title",1,"form-label","mt-3"],["jhiTranslate","artemisApp.iris.settings.subSettings.variants.allowedVariants.title",1,"fw-bold","fs-5"],[1,"form-group"],[1,"mt-3"],["jhiTranslate","artemisApp.iris.settings.subSettings.variants.selectedVariant.title",1,"fw-bold"],[1,"d-flex","align-items-center"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic1","ngbDropdownToggle","",1,"btn","btn-outline-primary","w-100"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],["jhiTranslate","artemisApp.iris.settings.subSettings.disabled.course"],["jhiTranslate","artemisApp.iris.settings.subSettings.disabled.global"],["jhiTranslate","artemisApp.iris.settings.subSettings.enabledForCategories",1,"form-label","mt-3"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"ngModelChange","id","ngModel"],[1,"form-check-label",3,"for"],["jhiTranslate","artemisApp.iris.settings.subSettings.proactivitySettings.title",1,"form-label","fs-4"],[3,"icon","ngbTooltip"],[1,"form-check","form-switch","mt-2","flex","items-center"],["type","checkbox",1,"form-check-input",3,"ngModelChange","id","disabled","ngModel"],[1,"form-check-label",3,"for","jhiTranslate"],[1,"text-warning",3,"icon","ngbTooltip"],[1,"form-check","form-switch"],["type","checkbox",1,"form-check-input",3,"ngModelChange","change","id","disabled","ngModel"],["jhiTranslate","artemisApp.iris.settings.subSettings.variants.allowedVariants.inheritSwitch",1,"form-check-label",3,"for"],["ngbDropdownItem","",3,"click"],["ngbDropdownItem","",3,"click","ngbTooltip"],[1,"ps-2","text-secondary"]],template:function(s,i){if(s&1&&(b(0,Ft,4,1),r(1,"div",0),e(2,`
    `),r(3,"div",1),u("click",function(){return i.onEnable()}),a(),e(4,`
    `),r(5,"div",2),u("click",function(){return i.onDisable()}),a(),e(6,`
`),a(),e(7,`
`),b(8,Rt,11,0)(9,Ot,17,4),d(10,"h4",3),e(11,`
`),r(12,"span"),d(13,"span",4),e(14,": "),a(),e(15,`
`),b(16,Pt,8,6),r(17,"div",5),e(18,`
    `),E(19,Bt,9,9,null,null,v),a(),e(21,`
`),r(22,"h5",6),d(23,"span",7),e(24,":"),a(),e(25,`
`),r(26,"div",8),e(27,`
    `),r(28,"div",9),e(29,`
        `),r(30,"button",10),e(31),L(32,"artemisTranslate"),a(),e(33,`
        `),r(34,"div",11),e(35,`
            `),b(36,Nt,5,5),E(37,Gt,4,4,null,null,v),a(),e(39,`
    `),a(),e(40,`
    `),b(41,qt,4,1),a(),e(42,`
`)),s&2){let g;C(i.inheritDisabled?0:-1),o(3),I("disabled",i.isSettingsSwitchDisabled),c("ngClass",Q(15,At,i.enabled,!i.enabled)),o(2),I("disabled",i.isSettingsSwitchDisabled),c("ngClass",Q(18,Ut,!i.enabled,i.enabled)),o(3),C(i.settingsType===i.COURSE&&((i.subSettings==null?null:i.subSettings.type)===i.CHAT||(i.subSettings==null?null:i.subSettings.type)===i.TEXT_EXERCISE_CHAT)?8:-1),o(),C((i.subSettings==null?null:i.subSettings.type)===i.CHAT?9:-1),o(7),C(i.parentSubSettings?16:-1),o(3),y(i.availableVariants),o(12),w(`
            `,(g=i.getSelectedVariantName())!==null&&g!==void 0?g:D(32,13,"artemisApp.iris.settings.subSettings.variants.selectedVariant.inherit"),`
        `),o(5),C(i.parentSubSettings?36:-1),o(),y(i.allowedVariants),o(4),C(i.subSettings!=null&&i.subSettings.selectedVariant?-1:41)}},dependencies:[N,J,O,R,k,j,ht,st,nt,it,et,tt,Z,mt],encapsulation:2})}return n})();function Xt(n,p){if(n&1){let t=_();e(0,`
                    `),r(1,"div",10),e(2,`
                        `),r(3,"input",11),U("ngModelChange",function(i){S(t);let g=l(3);return A(g.autoLectureIngestion,i)||(g.autoLectureIngestion=i),m(i)}),a(),e(4,`
                        `),d(5,"label",12),e(6,`
                    `),a(),e(7,`
                `)}if(n&2){let t=l(3);o(3),c("disabled",!t.isAdmin),V("ngModel",t.autoLectureIngestion)}}function Wt(n,p){if(n&1){let t=_();e(0,`
                    `),r(1,"div",10),e(2,`
                        `),r(3,"input",13),U("ngModelChange",function(i){S(t);let g=l(3);return A(g.autoFaqIngestion,i)||(g.autoFaqIngestion=i),m(i)}),a(),e(4,`
                        `),d(5,"label",14),e(6,`
                    `),a(),e(7,`
                `)}if(n&2){let t=l(3);o(3),c("disabled",!t.isAdmin),V("ngModel",t.autoFaqIngestion)}}function Ht(n,p){if(n&1){let t=_();e(0,`
            `),d(1,"hr",4),e(2,`

            `),d(3,"h3",6),e(4,`
            `),r(5,"div"),e(6,`
                `),r(7,"jhi-iris-common-sub-settings-update",3),u("onChanges",function(){S(t);let i=l(2);return m(i.isDirty=!0)}),a(),e(8,`
            `),a(),e(9,`

            `),d(10,"hr",4),e(11,`

            `),r(12,"div"),e(13,`
                `),d(14,"hr",4),e(15,`
                `),d(16,"h3",7),e(17,`
                `),r(18,"div"),e(19,`
                    `),r(20,"jhi-iris-common-sub-settings-update",3),u("onChanges",function(){S(t);let i=l(2);return m(i.isDirty=!0)}),a(),e(21,`
                `),a(),e(22,`

                `),d(23,"hr",4),e(24,`
                `),d(25,"h3",8),e(26,`
                `),r(27,"jhi-iris-common-sub-settings-update",3),u("onChanges",function(){S(t);let i=l(2);return m(i.isDirty=!0)}),a(),e(28,`
                `),d(29,"br"),e(30,`

                `),b(31,Xt,8,2),a(),e(32,`

            `),d(33,"hr",4),e(34,`
            `),r(35,"div"),e(36,`
                `),d(37,"h3",9),e(38,`
                `),r(39,"jhi-iris-common-sub-settings-update",3),u("onChanges",function(){S(t);let i=l(2);return m(i.isDirty=!0)}),a(),e(40,`
                `),d(41,"br"),e(42,`
                `),b(43,Wt,8,2),a(),e(44,`
        `)}if(n&2){let t=l(2);o(7),c("subSettings",t.irisSettings==null?null:t.irisSettings.irisCourseChatSettings)("parentSubSettings",t.parentIrisSettings==null?null:t.parentIrisSettings.irisCourseChatSettings)("settingsType",t.settingsType)("courseId",t.courseId),o(13),c("subSettings",t.irisSettings==null?null:t.irisSettings.irisLectureChatSettings)("parentSubSettings",t.parentIrisSettings==null?null:t.parentIrisSettings.irisLectureChatSettings)("settingsType",t.settingsType)("courseId",t.courseId),o(7),c("subSettings",t.irisSettings==null?null:t.irisSettings.irisLectureIngestionSettings)("parentSubSettings",t.parentIrisSettings==null?null:t.parentIrisSettings.irisLectureIngestionSettings)("settingsType",t.settingsType)("courseId",t.courseId),o(4),C(t.settingsType===t.COURSE?31:-1),o(8),c("subSettings",t.irisSettings==null?null:t.irisSettings.irisFaqIngestionSettings)("parentSubSettings",t.parentIrisSettings==null?null:t.parentIrisSettings.irisFaqIngestionSettings)("settingsType",t.settingsType)("courseId",t.courseId),o(4),C(t.settingsType===t.COURSE?43:-1)}}function Qt(n,p){if(n&1){let t=_();e(0,`
            `),d(1,"hr",4),e(2,`

            `),r(3,"div"),e(4,`
                `),d(5,"h3",15),e(6,`
                `),r(7,"jhi-iris-common-sub-settings-update",3),u("onChanges",function(){S(t);let i=l(2);return m(i.isDirty=!0)}),a(),e(8,`
            `),a(),e(9,`
        `)}if(n&2){let t=l(2);o(7),c("subSettings",t.irisSettings==null?null:t.irisSettings.irisCompetencyGenerationSettings)("parentSubSettings",t.parentIrisSettings==null?null:t.parentIrisSettings.irisCompetencyGenerationSettings)("settingsType",t.settingsType)("courseId",t.courseId)}}function Yt(n,p){if(n&1){let t=_();e(0,`
    `),r(1,"div"),e(2,`
        `),d(3,"h3",2),e(4,`
        `),r(5,"div"),e(6,`
            `),r(7,"jhi-iris-common-sub-settings-update",3),u("onChanges",function(){S(t);let i=l();return m(i.isDirty=!0)}),a(),e(8,`
        `),a(),e(9,`

        `),d(10,"hr",4),e(11,`

        `),d(12,"h3",5),e(13,`
        `),r(14,"div"),e(15,`
            `),r(16,"jhi-iris-common-sub-settings-update",3),u("onChanges",function(){S(t);let i=l();return m(i.isDirty=!0)}),a(),e(17,`
        `),a(),e(18,`

        `),b(19,Ht,45,18)(20,Qt,10,4),a(),e(21,`
`)}if(n&2){let t=l();o(7),c("subSettings",t.irisSettings==null?null:t.irisSettings.irisChatSettings)("parentSubSettings",t.parentIrisSettings==null?null:t.parentIrisSettings.irisChatSettings)("settingsType",t.settingsType)("courseId",t.courseId),o(9),c("subSettings",t.irisSettings==null?null:t.irisSettings.irisTextExerciseChatSettings)("parentSubSettings",t.parentIrisSettings==null?null:t.parentIrisSettings.irisTextExerciseChatSettings)("settingsType",t.settingsType)("courseId",t.courseId),o(3),C(t.settingsType!==t.EXERCISE?19:-1),o(),C(t.settingsType!==t.EXERCISE?20:-1)}}var Me=(()=>{class n{irisSettingsService=x(G);alertService=x(B);settingsType;courseId;exerciseId;irisSettings;parentIrisSettings;originalIrisSettings;autoLectureIngestion=!1;autoFaqIngestion=!1;isLoading=!1;isSaving=!1;isDirty=!1;isAdmin;PRIMARY=f.PRIMARY;WARNING=f.WARNING;SUCCESS=f.SUCCESS;faSave=lt;faRotate=dt;GLOBAL=h.GLOBAL;COURSE=h.COURSE;EXERCISE=h.EXERCISE;constructor(){let t=x(P);this.isAdmin=t.isAdmin()}ngOnInit(){this.loadIrisSettings()}ngDoCheck(){pt(this.irisSettings,this.originalIrisSettings)||(this.isDirty=!0)}canDeactivateWarning;canDeactivate(){return!this.isDirty}loadIrisSettings(){this.isLoading=!0,this.loadIrisSettingsObservable().subscribe(t=>{this.isLoading=!1,t||this.alertService.error("artemisApp.iris.settings.error.noSettings"),this.irisSettings=t,this.fillEmptyIrisSubSettings(),this.originalIrisSettings=Y(t),this.autoLectureIngestion=this.irisSettings?.irisLectureIngestionSettings?.autoIngestOnLectureAttachmentUpload??!1,this.autoFaqIngestion=this.irisSettings?.irisFaqIngestionSettings?.autoIngestOnFaqCreation??!1,this.isDirty=!1}),this.loadParentIrisSettingsObservable().subscribe(t=>{t||this.alertService.error("artemisApp.iris.settings.error.noParentSettings"),this.parentIrisSettings=t})}fillEmptyIrisSubSettings(){this.irisSettings&&(this.irisSettings.irisChatSettings||(this.irisSettings.irisChatSettings=new _t),this.irisSettings.irisTextExerciseChatSettings||(this.irisSettings.irisTextExerciseChatSettings=new xt),this.irisSettings.irisLectureChatSettings||(this.irisSettings.irisLectureChatSettings=new ft),this.irisSettings.irisCourseChatSettings||(this.irisSettings.irisCourseChatSettings=new It),this.irisSettings.irisLectureIngestionSettings||(this.irisSettings.irisLectureIngestionSettings=new vt),this.irisSettings.irisCompetencyGenerationSettings||(this.irisSettings.irisCompetencyGenerationSettings=new yt),this.irisSettings.irisFaqIngestionSettings||(this.irisSettings.irisFaqIngestionSettings=new Et))}saveIrisSettings(){this.isSaving=!0,this.irisSettings&&this.irisSettings.irisLectureIngestionSettings&&(this.irisSettings.irisLectureIngestionSettings.autoIngestOnLectureAttachmentUpload=this.autoLectureIngestion),this.irisSettings&&this.irisSettings.irisFaqIngestionSettings&&(this.irisSettings.irisFaqIngestionSettings.autoIngestOnFaqCreation=this.autoFaqIngestion),this.saveIrisSettingsObservable().subscribe(t=>{this.isSaving=!1,this.isDirty=!1,this.irisSettings=t.body??void 0,this.fillEmptyIrisSubSettings(),this.originalIrisSettings=Y(this.irisSettings),this.alertService.success("artemisApp.iris.settings.success")},t=>{this.isSaving=!1,rt("Error saving iris settings",t),t.status===400&&t.error&&t.error.message?this.alertService.error(t.error.message):this.alertService.error("artemisApp.iris.settings.error.save")})}loadParentIrisSettingsObservable(){switch(this.settingsType){case h.GLOBAL:return new K;case h.COURSE:return this.irisSettingsService.getGlobalSettings();case h.EXERCISE:return this.irisSettingsService.getCombinedCourseSettings(this.courseId)}}loadIrisSettingsObservable(){switch(this.settingsType){case h.GLOBAL:return this.irisSettingsService.getGlobalSettings();case h.COURSE:return this.irisSettingsService.getUncombinedCourseSettings(this.courseId);case h.EXERCISE:return this.irisSettingsService.getUncombinedExerciseSettings(this.exerciseId)}}saveIrisSettingsObservable(){switch(this.settingsType){case h.GLOBAL:return this.irisSettingsService.setGlobalSettings(this.irisSettings);case h.COURSE:return this.irisSettingsService.setCourseSettings(this.courseId,this.irisSettings);case h.EXERCISE:return this.irisSettingsService.setExerciseSettings(this.exerciseId,this.irisSettings)}}static \u0275fac=function(s){return new(s||n)};static \u0275cmp=M({type:n,selectors:[["jhi-iris-settings-update"]],inputs:{settingsType:"settingsType",courseId:"courseId",exerciseId:"exerciseId"},decls:8,vars:9,consts:[["id","reload",3,"onClick","btnType","isLoading","icon","title"],["id","save",3,"onClick","btnType","isLoading","icon","title"],["jhiTranslate","artemisApp.iris.settings.subSettings.chatSettings"],[3,"onChanges","subSettings","parentSubSettings","settingsType","courseId"],[1,"hr"],["jhiTranslate","artemisApp.iris.settings.subSettings.textExerciseChatSettings"],["jhiTranslate","artemisApp.iris.settings.subSettings.courseChatSettings"],["jhiTranslate","artemisApp.iris.settings.subSettings.lectureChatSettings"],["jhiTranslate","artemisApp.iris.settings.subSettings.lectureIngestionSettings.title"],["jhiTranslate","artemisApp.iris.settings.subSettings.faqIngestionSettings.title"],[1,"form-check","form-switch"],["type","checkbox","id","autoLectureIngestion",1,"form-check-input",3,"ngModelChange","disabled","ngModel"],["for","autoLectureIngestion","jhiTranslate","artemisApp.iris.settings.subSettings.lectureIngestionSettings.autoIngestOnAttachmentUpload",1,"form-check-label"],["type","checkbox","id","autoFaqIngestion",1,"form-check-input",3,"ngModelChange","disabled","ngModel"],["for","autoLectureIngestion","jhiTranslate","artemisApp.iris.settings.subSettings.faqIngestionSettings.autoIngest",1,"form-check-label"],["jhiTranslate","artemisApp.iris.settings.subSettings.competencyGenerationSettings"]],template:function(s,i){s&1&&(r(0,"div"),e(1,`
    `),r(2,"jhi-button",0),u("onClick",function(){return i.loadIrisSettings()}),a(),e(3,`
    `),r(4,"jhi-button",1),u("onClick",function(){return i.saveIrisSettings()}),a(),e(5,`
`),a(),e(6,`
`),b(7,Yt,22,10)),s&2&&(o(2),c("btnType",i.isDirty?i.WARNING:i.PRIMARY)("isLoading",i.isLoading)("icon",i.faRotate)("title","artemisApp.iris.settings.button.reload"),o(2),c("btnType",i.SUCCESS)("isLoading",i.isSaving)("icon",i.faSave)("title","artemisApp.iris.settings.button.save"),o(3),C(i.irisSettings?7:-1))},dependencies:[Ct,N,Tt,O,R,k,j],encapsulation:2})}return n})();export{h as a,Me as b};
//# sourceMappingURL=chunk-HJC3ERFF.js.map
