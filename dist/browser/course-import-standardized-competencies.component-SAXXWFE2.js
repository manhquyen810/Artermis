import{a as te}from"./chunk-MNOCTYNS.js";import{a as ee}from"./chunk-QE5JM26C.js";import"./chunk-7MKMUXV6.js";import{c as Q}from"./chunk-E7BX3X6N.js";import{a as Z}from"./chunk-NRM2V3HA.js";import{h as U}from"./chunk-OPXCTAUV.js";import"./chunk-DOLVNMRR.js";import{a as X}from"./chunk-JRBFEQNN.js";import"./chunk-DIZEKHOC.js";import"./chunk-V7PDYRDZ.js";import"./chunk-EANMTTQG.js";import"./chunk-OTCBNILH.js";import{a as G,b as J}from"./chunk-VRAVBLUK.js";import{d as q}from"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import"./chunk-VWRLJYRR.js";import{a as Y}from"./chunk-UDBRF4PR.js";import"./chunk-H2ETPEH6.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import{K as W,L as H}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as R,b as D,h as L,m as N}from"./chunk-WA5GEAJB.js";import"./chunk-5GXY5RYT.js";import{a as P}from"./chunk-K3W6YFKH.js";import"./chunk-JXJXC4DZ.js";import{d as K,f as O}from"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as $}from"./chunk-U54OSGNH.js";import"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{E as V}from"./chunk-IOA4DPXY.js";import{Db as a,Dc as f,Ea as z,Ed as B,Ma as _,Mc as C,Na as u,Oc as s,Qa as v,Tb as k,Xb as b,Zb as x,dd as e,ed as S,kc as m,ld as E,md as j,nd as F,rd as M,sc as y,vc as I,wb as w,wc as A,xc as i,yc as o,yd as h,zc as d,zd as T}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var ne=r=>({count:r}),ie=(r,c)=>c.id;function oe(r,c){if(r&1){let n=f();e(0,`
                    `),i(1,"input",16),C("change",function(){let t=_(n).competency,p=s(2);return u(p.toggleSelect(t))}),F("ngModelChange",function(t){let p=_(n).competency;return j(p.selected,t)||(p.selected=t),u(t)}),o(),e(2,`
                    `),i(3,"div",17),C("click",function(){let t=_(n).competency,p=s(2);return u(p.openCompetencyDetails(t))}),e(4,`
                        `),d(5,"fa-icon",18),h(6,"artemisTranslate"),e(7,`
                        `),i(8,"h6",19),e(9),o(),e(10,`
                    `),o(),e(11,`
                `)}if(r&2){let n,l=c.competency,t=s(2);a(),E("ngModel",l.selected),a(4),m("icon",t.getIcon(l.taxonomy))("ngbTooltip",T(6,5,"artemisApp.courseCompetency.taxonomies."+((n=l.taxonomy)!==null&&n!==void 0?n:"none")))("fixedWidth",!0),a(4),S(l.title)}}function re(r,c){if(r&1){let n=f();e(0,`
                `),i(1,"div",20),e(2,`
                    `),i(3,"jhi-standardized-competency-detail",21),C("onClose",function(){_(n);let t=s(2);return u(t.closeCompetencyDetails())}),o(),e(4,`
                `),o(),e(5,`
            `)}if(r&2){let n,l=s(2);a(3),m("competency",l.selectedCompetency)("sourceString",l.sourceString)("knowledgeAreaTitle",(n=l.selectedCompetency.knowledgeAreaTitle)!==null&&n!==void 0?n:"")}}function ae(r,c){if(r&1&&(e(0,`
        `),i(1,"div",14),e(2,`
            `),i(3,"jhi-knowledge-area-tree",15),e(4,`
                `),x(5,oe,12,7,"ng-template",null,0,B),e(7,`
            `),o(),e(8,`
            `),x(9,re,6,3),o(),e(10,`
    `)),r&2){let n=s();a(3),m("dataSource",n.dataSource)("treeControl",n.treeControl),a(6),y(n.selectedCompetency?9:-1)}}function le(r,c){r&1&&(e(0,`
        `),i(1,"div",22),e(2,`
            `),i(3,"div",23),e(4,`
                `),d(5,"span",24),e(6,`
            `),o(),e(7,`
        `),o(),e(8,`
    `))}function me(r,c){r&1&&(e(0,`
        `),d(1,"span",25),e(2,`
    `))}function de(r,c){if(r&1){let n=f();e(0,`
                    `),i(1,"tr"),e(2,`
                        `),i(3,"td",36),e(4),o(),e(5,`
                        `),i(6,"td",37),e(7),o(),e(8,`
                        `),d(9,"td",38),h(10,"htmlForMarkdown"),e(11,`
                        `),i(12,"td",37),e(13),o(),e(14,`
                        `),i(15,"td",35),e(16,`
                            `),i(17,"jhi-button",39),C("onClick",function(){let t=_(n).$implicit,p=s(2);return u(p.deselectCompetency(t))}),o(),e(18,`
                        `),o(),e(19,`
                    `),o(),e(20,`
                `)}if(r&2){let n=c.$implicit,l=s(2);a(4),S(n.id),a(3),S(n.title),a(2),m("innerHTML",T(10,6,n.description),w),a(4),S(n.knowledgeAreaTitle),a(4),m("btnType",l.ButtonType.ERROR)("icon",l.faTrash)}}function pe(r,c){if(r&1){let n=f();e(0,`
        `),i(1,"table",26),e(2,`
            `),i(3,"thead",27),C("sortChange",function(t){_(n);let p=s();return u(p.sortSelected(t))}),e(4,`
                `),i(5,"tr",28),e(6,`
                    `),i(7,"th",29),e(8,`
                        `),i(9,"span"),e(10,"#"),o(),e(11,`
                        `),d(12,"fa-icon",30),e(13,`
                    `),o(),e(14,`
                    `),i(15,"th",31),e(16,`
                        `),d(17,"span",32),e(18,`
                        `),d(19,"fa-icon",30),e(20,`
                    `),o(),e(21,`
                    `),i(22,"th",33),e(23,`
                        `),d(24,"span",32),e(25,`
                    `),o(),e(26,`
                    `),i(27,"th",34),e(28,`
                        `),d(29,"span",32),e(30,`
                        `),d(31,"fa-icon",30),e(32,`
                    `),o(),e(33,`
                    `),e(34,`
                    `),d(35,"th",35),e(36,`
                `),o(),e(37,`
            `),o(),e(38,`
            `),i(39,"tbody"),e(40,`
                `),I(41,de,21,8,null,null,ie),o(),e(43,`
        `),o(),e(44,`
    `)}if(r&2){let n=s();a(12),m("icon",n.faSort),a(5),m("jhiTranslate","artemisApp.standardizedCompetency.model.title"),a(2),m("icon",n.faSort),a(5),m("jhiTranslate","artemisApp.standardizedCompetency.model.description"),a(5),m("jhiTranslate","artemisApp.standardizedCompetency.model.knowledgeArea"),a(2),m("icon",n.faSort),a(10),A(n.selectedCompetencies)}}function ce(r,c){r&1&&(e(0,`
        `),d(1,"span",40),e(2,`
    `))}function se(r,c){if(r&1&&(e(0,`
            `),d(1,"div",41),e(2,`
        `)),r&2){let n=s();a(),m("translateValues",M(1,ne,n.selectedCompetencies.length))}}var Ve=(()=>{class r extends te{competencyService=z(ee);importCompetencies(){super.importCompetencies(this.competencyService)}static \u0275fac=(()=>{let n;return function(t){return(n||(n=v(r)))(t||r)}})();static \u0275cmp=k({type:r,selectors:[["jhi-course-import-standardized-competencies"]],features:[b],decls:36,vars:18,consts:[["competencyTemplate",""],[1,"container"],[1,"d-flex","align-items-center"],["jhiTranslate","artemisApp.standardizedCompetency.courseImport.title"],[3,"type"],[3,"knowledgeAreaFilterChange","competencyTitleFilterChange","knowledgeAreasForSelect","knowledgeAreaFilter","competencyTitleFilter"],[1,"d-flex","flex-wrap","align-items-center","mt-3","mb-2"],["jhiTranslate","artemisApp.standardizedCompetency.title",1,"me-3","mb-0"],["tooltip","artemisApp.standardizedCompetency.manage.collapseButtonTooltip",1,"me-1",3,"onClick","btnSize","icon"],["tooltip","artemisApp.standardizedCompetency.manage.expandButtonTooltip",3,"onClick","btnSize","icon"],["jhiTranslate","artemisApp.standardizedCompetency.courseImport.selectedTitle",1,"mt-3"],[1,"mt-3"],[3,"onClick","btnType","title","icon"],[3,"onClick","disabled","isLoading","icon","title"],[1,"d-flex"],[1,"d-flex","flex-grow-1","h-100","w-50",3,"dataSource","treeControl"],["type","checkbox",1,"form-check-input","me-2",3,"change","ngModelChange","ngModel"],[1,"d-flex","align-items-center","clickable",3,"click"],[1,"me-2",3,"icon","ngbTooltip","fixedWidth"],[1,"mb-0"],[1,"card","d-flex","flex-grow-1","w-100","h-100","p-3","ms-1",2,"background-color","var(--overview-light-background-color)"],[3,"onClose","competency","sourceString","knowledgeAreaTitle"],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-border"],["jhiTranslate","loading",1,"sr-only"],["jhiTranslate","artemisApp.standardizedCompetency.courseImport.empty"],[1,"table","table-striped","align-middle","flex"],["jhiSort","",1,"thead-dark",3,"sortChange"],[1,"flex-row"],["jhiSortBy","id",1,"col-0.5"],[3,"icon"],["jhiSortBy","title",1,"col-2"],[3,"jhiTranslate"],[1,"col"],["jhiSortBy","knowledgeAreaTitle",1,"col-2"],[1,"col-1"],[1,"col-0.5"],[1,"col-2"],[1,"markdown-preview","col",3,"innerHTML"],[3,"onClick","btnType","icon"],["jhiTranslate","artemisApp.standardizedCompetency.courseImport.selectedEmpty"],["jhiTranslate","artemisApp.standardizedCompetency.courseImport.selectedCompetencies",1,"mb-1",3,"translateValues"]],template:function(l,t){l&1&&(i(0,"div",1),e(1,`
    `),i(2,"div",2),e(3,`
        `),d(4,"h2",3),e(5,`
        `),d(6,"jhi-documentation-button",4),e(7,`
    `),o(),e(8,`
    `),i(9,"jhi-standardized-competency-filter",5),C("knowledgeAreaFilterChange",function(g){return t.filterByKnowledgeArea(g)})("competencyTitleFilterChange",function(g){return t.filterByCompetencyTitle(g)}),o(),e(10,`
    `),i(11,"div",6),e(12,`
        `),d(13,"h3",7),e(14,`
        `),i(15,"jhi-button",8),C("onClick",function(){return t.treeControl.collapseAll()}),o(),e(16,`
        `),i(17,"jhi-button",9),C("onClick",function(){return t.treeControl.expandAll()}),o(),e(18,`
    `),o(),e(19,`
    `),x(20,ae,11,3)(21,le,9,0)(22,me,3,0),d(23,"h3",10),e(24,`
    `),x(25,pe,45,6)(26,ce,3,0),i(27,"div",11),e(28,`
        `),x(29,se,3,3),i(30,"jhi-button",12),C("onClick",function(){return t.cancel()}),o(),e(31,`
        `),i(32,"jhi-button",13),C("onClick",function(){return t.importCompetencies()}),o(),e(33,`
    `),o(),e(34,`
`),o(),e(35,`
`)),l&2&&(a(6),m("type",t.documentationType),a(3),m("knowledgeAreasForSelect",t.knowledgeAreasForSelect)("knowledgeAreaFilter",t.knowledgeAreaFilter)("competencyTitleFilter",t.competencyTitleFilter),a(6),m("btnSize",t.ButtonSize.SMALL)("icon",t.faMinimize),a(2),m("btnSize",t.ButtonSize.SMALL)("icon",t.faMaximize),a(3),y(t.dataSource.data.length?20:t.isLoading?21:22),a(5),y(t.selectedCompetencies.length?25:26),a(4),y(t.selectedCompetencies.length?29:-1),a(),m("btnType",t.ButtonType.SECONDARY)("title","entity.action.cancel")("icon",t.faBan),a(2),m("disabled",!t.selectedCompetencies.length)("isLoading",t.isLoading)("icon",t.faFileImport)("title","entity.action.to-import"))},dependencies:[Q,Z,U,X,Y,q,$,J,G,V,P,O,K,R,D,L,N,H,W],encapsulation:2})}return r})();export{Ve as CourseImportStandardizedCompetenciesComponent};
//# sourceMappingURL=course-import-standardized-competencies.component-SAXXWFE2.js.map
