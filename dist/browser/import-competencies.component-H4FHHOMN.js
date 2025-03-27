import{a as O,b as F,c as D}from"./chunk-RMHVRUWS.js";import{a as B}from"./chunk-QE5JM26C.js";import"./chunk-7MKMUXV6.js";import"./chunk-OUE3ZTPB.js";import{d as A}from"./chunk-DOLVNMRR.js";import"./chunk-JRBFEQNN.js";import"./chunk-DIZEKHOC.js";import"./chunk-V7PDYRDZ.js";import"./chunk-EANMTTQG.js";import"./chunk-OTCBNILH.js";import"./chunk-W7RIOT23.js";import"./chunk-VRAVBLUK.js";import{d as P}from"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import{c as R}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as k,b as w,h as E,m as V}from"./chunk-WA5GEAJB.js";import"./chunk-5GXY5RYT.js";import"./chunk-K3W6YFKH.js";import"./chunk-JXJXC4DZ.js";import"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as M}from"./chunk-U54OSGNH.js";import"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{E as j}from"./chunk-IOA4DPXY.js";import{Db as o,Dc as x,Ea as g,Ma as d,Mc as l,Na as u,Oc as p,Qa as f,Tb as T,Xb as b,Zb as h,dd as e,kc as c,ld as v,md as S,nd as I,sc as y,xc as a,yc as m,zc as _}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";function N(i,C){if(i&1){let t=x();e(0,`
                `),a(1,"jhi-button",8),l("onClick",function(){let n=d(t).competency,r=p(2);return u(r.selectCompetency(n))}),m(),e(2,`
            `)}if(i&2){let t=C.competency,s=p(2);o(),c("disabled",s.disabledIds.includes(t.id))}}function W(i,C){if(i&1){let t=x();e(0,`
        `),a(1,"jhi-import-competencies-table",7),l("searchChange",function(n){d(t);let r=p();return u(r.searchChange(n))}),e(2,`
            `),h(3,N,3,1,"ng-template"),e(4,`
        `),m(),e(5,`
    `)}if(i&2){let t=p();o(),c("content",t.searchedCourseCompetencies)("search",t.search)}}function H(i,C){i&1&&(e(0,`
        `),_(1,"span",9),e(2,`
    `))}function Y(i,C){if(i&1){let t=x();e(0,`
                `),a(1,"jhi-button",11),l("onClick",function(){let n=d(t).competency,r=p(2);return u(r.removeCompetency(n))}),m(),e(2,`
            `)}if(i&2){let t=p(2);o(),c("btnType",t.ButtonType.ERROR)("icon",t.faTrash)}}function q(i,C){if(i&1){let t=x();e(0,`
        `),a(1,"jhi-import-competencies-table",10),l("searchChange",function(n){d(t);let r=p();return u(r.sortSelected(n))}),e(2,`
            `),h(3,Y,3,2,"ng-template"),e(4,`
        `),m(),e(5,`
    `)}if(i&2){let t=p();o(),c("content",t.selectedCourseCompetencies)("search",t.selectedCourseCompetenciesSearch)("displayPagination",!1)}}function z(i,C){if(i&1&&(e(0,`
        `),_(1,"span",12),e(2,`
    `)),i&2){let t=p();o(),c("jhiTranslate","artemisApp."+t.entityType+".import.selectedTableEmpty")}}function G(i,C){if(i&1){let t=x();e(0,`
            `),a(1,"div",13),e(2,`
                `),_(3,"span",12),e(4,`
                `),a(5,"input",14),I("ngModelChange",function(n){d(t);let r=p();return S(r.importRelations,n)||(r.importRelations=n),u(n)}),m(),e(6,`
            `),m(),e(7,`
        `)}if(i&2){let t=p();o(3),c("jhiTranslate","artemisApp.competency.import.importRelations"),o(2),v("ngModel",t.importRelations)}}var me=(()=>{class i extends O{entityType=A.COMPETENCY;allowRelationImport=!0;competencyService=g(B);onSubmit(){this.competencyService.importBulk(this.selectedCourseCompetencies.resultsOnPage,this.courseId,this.importRelations).subscribe({next:t=>{this.alertService.success("artemisApp.competency.import.success",{numCompetencies:t.body?.length??0}),this.isSubmitted=!0,this.router.navigate(["../"],{relativeTo:this.activatedRoute})},error:t=>R(this.alertService,t)})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=f(i)))(n||i)}})();static \u0275cmp=T({type:i,selectors:[["jhi-import-competencies"]],features:[b],decls:26,vars:13,consts:[["id","page-heading",3,"jhiTranslate"],[3,"searchChange","search"],["jhiTranslate","artemisApp.competency.import.searchTableHeader",1,"mt-2"],[1,"mt-2",3,"jhiTranslate"],[1,"mt-4"],["id","cancelButton",3,"onClick","btnType","title","icon"],["id","importButton",3,"onClick","title","icon","disabled","isLoading"],[3,"searchChange","content","search"],["title","entity.action.select",3,"onClick","disabled"],["jhiTranslate","artemisApp.competency.import.searchTableEmpty"],[3,"searchChange","content","search","displayPagination"],[3,"onClick","btnType","icon"],[3,"jhiTranslate"],[1,"mb-1","d-flex"],["type","checkbox","name","importRelations",1,"ms-2",3,"ngModelChange","ngModel"]],template:function(s,n){s&1&&(a(0,"div"),e(1,`
    `),_(2,"h2",0),e(3,`
    `),a(4,"jhi-competency-search",1),l("searchChange",function(L){return n.filterChange(L)}),m(),e(5,`
    `),_(6,"h3",2),e(7,`
    `),h(8,W,6,2)(9,H,3,0),_(10,"h3",3),e(11,`
    `),h(12,q,6,3)(13,z,3,1),a(14,"div",4),e(15,`
        `),h(16,G,8,2),a(17,"div"),e(18,`
            `),a(19,"jhi-button",5),l("onClick",function(){return n.onCancel()}),m(),e(20,`
            `),a(21,"jhi-button",6),l("onClick",function(){return n.onSubmit()}),m(),e(22,`
        `),m(),e(23,`
    `),m(),e(24,`
`),m(),e(25,`
`)),s&2&&(o(2),c("jhiTranslate","artemisApp."+n.entityType+".import.title"),o(2),c("search",n.filter),o(4),y(n.searchedCourseCompetencies.resultsOnPage!=null&&n.searchedCourseCompetencies.resultsOnPage.length?8:9),o(2),c("jhiTranslate","artemisApp."+n.entityType+".import.selectedTableHeader"),o(2),y(n.selectedCourseCompetencies.resultsOnPage!=null&&n.selectedCourseCompetencies.resultsOnPage.length?12:13),o(4),y(n.allowRelationImport?16:-1),o(3),c("btnType",n.ButtonType.SECONDARY)("title","entity.action.cancel")("icon",n.faBan),o(2),c("title","entity.action.import")("icon",n.faFileImport)("disabled",!n.isSubmitPossible())("isLoading",n.isLoading))},dependencies:[P,j,k,w,E,V,M,F,D],encapsulation:2})}return i})();export{me as ImportCompetenciesComponent};
//# sourceMappingURL=import-competencies.component-H4FHHOMN.js.map
