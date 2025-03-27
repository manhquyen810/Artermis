import{a as Y}from"./chunk-JRBFEQNN.js";import{a as U}from"./chunk-2QXIMOEO.js";import{K as $,a as R}from"./chunk-VZRSC3LP.js";import{a as J}from"./chunk-K3W6YFKH.js";import{d as T}from"./chunk-EDXSOKK5.js";import{I as Q,Mc as q,Ob as N,Y as z,ic as X}from"./chunk-Z4VHWOB5.js";import{a as B}from"./chunk-XUCCGZJR.js";import{a as W}from"./chunk-U54OSGNH.js";import{Db as r,Dc as f,Ea as F,Ma as m,Mc as g,Na as x,Oc as l,Pc as V,Qc as H,Rc as M,Tb as b,Tc as K,Y as k,Yc as G,Zb as C,Zc as P,_c as j,dd as t,ed as O,fd as v,kc as d,lc as L,na as D,sc as _,uc as w,vc as I,wb as S,wc as A,xc as a,yc as s,yd as y,zc as c,zd as h}from"./chunk-5LC5EQRR.js";var te=["*"];function ne(n,p){if(n&1){let e=f();t(0,`
    `),a(1,"h5",1),g("click",function(){m(e);let i=l();return x(i.toggleCollapsed())}),t(2),c(3,"fa-icon",2),t(4,`
    `),s(),t(5,`
`)}if(n&2){let e=l();r(2),v(`
        `,e.headerKey,`
        `),r(),d("icon",e.isCollapsed?e.faAngleRight:e.faAngleDown)}}function ie(n,p){if(n&1){let e=f();t(0,`
    `),a(1,"h5",1),g("click",function(){m(e);let i=l();return x(i.toggleCollapsed())}),t(2),y(3,"artemisTranslate"),c(4,"fa-icon",2),t(5,`
    `),s(),t(6,`
`)}if(n&2){let e=l();r(2),v(`
        `,h(3,2,e.headerKey),`
        `),r(2),d("icon",e.isCollapsed?e.faAngleRight:e.faAngleDown)}}function oe(n,p){if(n&1){let e=f();t(0,`
    `),a(1,"h6",1),g("click",function(){m(e);let i=l();return x(i.toggleCollapsed())}),t(2),c(3,"fa-icon",2),t(4,`
    `),s(),t(5,`
`)}if(n&2){let e=l();r(2),v(`
        `,e.headerKey,`
        `),r(),d("icon",e.isCollapsed?e.faAngleRight:e.faAngleDown)}}var E=(()=>{class n{localStorageService=F(B);headerKey;hasTranslation=!0;isSubHeader=!1;isCollapsed;faAngleRight=z;faAngleDown=X;PREFIX="collapsed.";ngOnInit(){this.isCollapsed=!!this.localStorageService.retrieve(this.storageKey),this.localStorageService.store(this.storageKey,this.isCollapsed)}toggleCollapsed(){this.isCollapsed=!this.isCollapsed,this.localStorageService.store(this.storageKey,this.isCollapsed)}get storageKey(){return this.PREFIX+this.headerKey}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=b({type:n,selectors:[["jhi-expandable-section"]],inputs:{headerKey:"headerKey",hasTranslation:"hasTranslation",isSubHeader:"isSubHeader"},ngContentSelectors:te,decls:8,vars:4,consts:[[3,"ngbCollapse"],[1,"expandable-header",3,"click"],[3,"icon"]],template:function(o,i){o&1&&(V(),C(0,ne,6,2)(1,ie,7,4)(2,oe,6,2),a(3,"div",0),t(4,`
    `),H(5),t(6,`
`),s(),t(7,`
`)),o&2&&(_(i.hasTranslation===!1&&i.headerKey!==null&&i.isSubHeader===!1?0:-1),r(),_(i.hasTranslation===!0&&i.headerKey!==null&&i.isSubHeader===!1?1:-1),r(),_(i.hasTranslation===!1&&i.headerKey!==null&&i.isSubHeader===!0?2:-1),r(),d("ngbCollapse",i.isCollapsed))},dependencies:[T,R,J],encapsulation:2})}return n})();function re(n,p){if(n&1){let e=f();t(0,`
    `),a(1,"div",0),t(2,`
        `),a(3,"button",1),g("click",function(){m(e);let i=l();return x(i.expandAll())}),t(4,`
            `),c(5,"fa-icon",2),t(6," "),c(7,"span",3),t(8,`
        `),s(),t(9,`
        `),a(10,"button",1),g("click",function(){m(e);let i=l();return x(i.collapseAll())}),t(11,`
            `),c(12,"fa-icon",2),t(13," "),c(14,"span",4),t(15,`
        `),s(),t(16,`
    `),s(),t(17,`
`)}if(n&2){let e=l();r(5),d("icon",e.faExpand),r(7),d("icon",e.faCompress)}}function ae(n,p){if(n&1&&(t(0,`
    `),a(1,"div",5),t(2,`
        `),c(3,"fa-icon",2),t(4,`
        `),c(5,"span",6),t(6,`
    `),s(),t(7,`
`)),n&2){let e=l();r(3),d("icon",e.faInfoCircle)}}function se(n,p){if(n&1&&(t(0,`
                                        `),a(1,"span"),t(2),s(),t(3,`
                                    `)),n&2){let e=l().$implicit;r(2),O(e.usageCount)}}function le(n,p){n&1&&t(0,`
                                        \u221E
                                    `)}function ce(n,p){if(n&1){let e=f();t(0,`
                `),a(1,"div",8),g("dragstart",function(){m(e);let i=l(2);return x(i.disableDrag())})("dragstart",function(i){let u=m(e).$implicit,Z=l(2);return x(Z.drag(i,u))}),t(2,`
                    `),a(3,"table",9),t(4,`
                        `),a(5,"tbody"),t(6,`
                            `),a(7,"tr"),t(8,`
                                `),c(9,"td",10),t(10,`
                                `),c(11,"td",11),y(12,"htmlForMarkdown"),t(13,`
                                `),c(14,"td",12),y(15,"htmlForMarkdown"),t(16,`
                                `),a(17,"td",13),t(18,`
                                    `),C(19,se,4,1)(20,le,1,0),c(21,"jhi-help-icon",14),t(22,`
                                `),s(),t(23,`
                            `),s(),t(24,`
                        `),s(),t(25,`
                    `),s(),t(26,`
                `),s(),t(27,`
            `)}if(n&2){let e=p.$implicit,o=p.$index,i=l().$index,u=l();r(),L("background-color",u.setInstrColour(e)),M("draggable",u.allowDrop),K("id","criterion-",i,"-instruction-",o,""),r(8),d("innerHTML",u.setScore(e.credits),S),r(2),d("innerHTML",h(12,11,e.gradingScale),S),r(3),d("innerHTML",h(15,13,e.instructionDescription),S)("ngbTooltip",u.setTooltip(e)),r(5),_(e.usageCount&&e.usageCount!==0?19:20)}}function de(n,p){if(n&1&&(t(0,`
    `),a(1,"div"),t(2,`
        `),a(3,"jhi-expandable-section",7),t(4,`
            `),I(5,ce,28,15,null,null,w),s(),t(7,`
        `),c(8,"br"),t(9,`
    `),s(),t(10,`
`)),n&2){let e=p.$implicit;r(3),d("hasTranslation",!1)("headerKey",e.title)("isSubHeader",!0),r(2),A(e.structuredGradingInstructions)}}var Ee=(()=>{class n{criteria;readonly;allowDrop;faInfoCircle=N;faExpand=q;faCompress=Q;expandableSections;collapseToggles=[];ngOnInit(){this.allowDrop=!this.readonly}ngAfterViewInit(){this.expandableSections.changes.pipe(D([void 0]),k(0)).subscribe(()=>{this.collectCollapsableSections()})}collapseAll(){this.collapseToggles.forEach(e=>{e.isCollapsed||e.toggleCollapsed()})}expandAll(){this.collapseToggles.forEach(e=>{e.isCollapsed&&e.toggleCollapsed()})}setTooltip(e){return"Feedback: "+e.feedback}setInstrColour(e){let o;return e.credits===0?o="var(--sgi-assessment-layout-zero-background)":e.credits<0?o="var(--sgi-assessment-layout-negative-background)":o="var(--sgi-assessment-layout-positive-background)",o}setScore(e){return e+"P"}drag(e,o){e.dataTransfer.setData("text/plain",JSON.stringify(o))}disableDrag(){return this.allowDrop}collectCollapsableSections(){this.expandableSections&&(this.collapseToggles=this.expandableSections.toArray())}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=b({type:n,selectors:[["jhi-structured-grading-instructions-assessment-layout"]],viewQuery:function(o,i){if(o&1&&G(E,5),o&2){let u;P(u=j())&&(i.expandableSections=u)}},inputs:{criteria:"criteria",readonly:"readonly"},decls:4,vars:2,consts:[[1,"mb-2"],["type","button","data-bs-toggle","button",1,"btn","btn-sm","btn-outline-secondary",3,"click"],[3,"icon"],["jhiTranslate","artemisApp.assessmentInstructions.expandAll"],["jhiTranslate","artemisApp.assessmentInstructions.collapseAll"],[1,"alert","alert-info"],["jhiTranslate","artemisApp.exercise.dragDropInstruction"],[3,"hasTranslation","headerKey","isSubHeader"],[1,"rounded",3,"dragstart","draggable","id"],[1,"table","layout-table"],[1,"td-score",3,"innerHTML"],[3,"innerHTML"],[3,"innerHTML","ngbTooltip"],[1,"td-usage-count"],["text","artemisApp.exercise.usageCountHint"]],template:function(o,i){o&1&&(C(0,re,18,2)(1,ae,8,1),I(2,de,11,3,null,null,w)),o&2&&(_(i.criteria?0:-1),r(),_(i.allowDrop?1:-1),r(),A(i.criteria))},dependencies:[T,W,E,$,U,Y],styles:[".layout-table[_ngcontent-%COMP%]{margin:1px}.layout-table[_ngcontent-%COMP%]   .td-score[_ngcontent-%COMP%], .layout-table[_ngcontent-%COMP%]   .td-usage-count[_ngcontent-%COMP%]{width:4%}.layout-table[_ngcontent-%COMP%]   .td-usage-count[_ngcontent-%COMP%]{position:relative;white-space:nowrap}"]})}return n})();export{E as a,Ee as b};
//# sourceMappingURL=chunk-GXLYQKDJ.js.map
