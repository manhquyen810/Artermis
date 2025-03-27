import{a as B,b as M,c as O}from"./chunk-RMHVRUWS.js";import{a as A}from"./chunk-CNZ75VIL.js";import"./chunk-7MKMUXV6.js";import"./chunk-OUE3ZTPB.js";import{d as R}from"./chunk-DOLVNMRR.js";import"./chunk-JRBFEQNN.js";import"./chunk-DIZEKHOC.js";import"./chunk-V7PDYRDZ.js";import"./chunk-EANMTTQG.js";import"./chunk-OTCBNILH.js";import"./chunk-W7RIOT23.js";import"./chunk-VRAVBLUK.js";import{d as k}from"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import{c as E}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as w,b as S,h as j,m as q}from"./chunk-WA5GEAJB.js";import"./chunk-5GXY5RYT.js";import"./chunk-K3W6YFKH.js";import"./chunk-JXJXC4DZ.js";import"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as V}from"./chunk-U54OSGNH.js";import"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as o,Dc as x,Ea as f,Ma as C,Mc as m,Na as d,Oc as l,Qa as g,Tb as T,Xb as b,Zb as h,dd as e,kc as p,ld as v,md as P,nd as I,sc as y,xc as s,yc as a,zc as u}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";function D(n,_){if(n&1){let t=x();e(0,`
                `),s(1,"jhi-button",8),m("onClick",function(){let i=C(t).competency,r=l(2);return d(r.selectCompetency(i))}),a(),e(2,`
            `)}if(n&2){let t=_.competency,c=l(2);o(),p("disabled",c.disabledIds.includes(t.id))}}function L(n,_){if(n&1){let t=x();e(0,`
        `),s(1,"jhi-import-competencies-table",7),m("searchChange",function(i){C(t);let r=l();return d(r.searchChange(i))}),e(2,`
            `),h(3,D,3,1,"ng-template"),e(4,`
        `),a(),e(5,`
    `)}if(n&2){let t=l();o(),p("content",t.searchedCourseCompetencies)("search",t.search)}}function N(n,_){n&1&&(e(0,`
        `),u(1,"span",9),e(2,`
    `))}function W(n,_){if(n&1){let t=x();e(0,`
                `),s(1,"jhi-button",11),m("onClick",function(){let i=C(t).competency,r=l(2);return d(r.removeCompetency(i))}),a(),e(2,`
            `)}if(n&2){let t=l(2);o(),p("btnType",t.ButtonType.ERROR)("icon",t.faTrash)}}function H(n,_){if(n&1){let t=x();e(0,`
        `),s(1,"jhi-import-competencies-table",10),m("searchChange",function(i){C(t);let r=l();return d(r.sortSelected(i))}),e(2,`
            `),h(3,W,3,2,"ng-template"),e(4,`
        `),a(),e(5,`
    `)}if(n&2){let t=l();o(),p("content",t.selectedCourseCompetencies)("search",t.selectedCourseCompetenciesSearch)("displayPagination",!1)}}function Q(n,_){if(n&1&&(e(0,`
        `),u(1,"span",12),e(2,`
    `)),n&2){let t=l();o(),p("jhiTranslate","artemisApp."+t.entityType+".import.selectedTableEmpty")}}function U(n,_){if(n&1){let t=x();e(0,`
            `),s(1,"div",13),e(2,`
                `),u(3,"span",12),e(4,`
                `),s(5,"input",14),I("ngModelChange",function(i){C(t);let r=l();return P(r.importRelations,i)||(r.importRelations=i),d(i)}),a(),e(6,`
            `),a(),e(7,`
        `)}if(n&2){let t=l();o(3),p("jhiTranslate","artemisApp.competency.import.importRelations"),o(2),v("ngModel",t.importRelations)}}var re=(()=>{class n extends B{entityType=R.PREREQUISITE;allowRelationImport=!1;prerequisiteService=f(A);onSubmit(){this.prerequisiteService.importBulk(this.selectedCourseCompetencies.resultsOnPage,this.courseId,!1).subscribe({next:t=>{this.alertService.success("artemisApp.prerequisite.import.success",{numPrerequisites:t.body?.length??0}),this.isSubmitted=!0,this.router.navigate(["../"],{relativeTo:this.activatedRoute})},error:t=>E(this.alertService,t)})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=g(n)))(i||n)}})();static \u0275cmp=T({type:n,selectors:[["jhi-import-prerequisites"]],features:[b],decls:26,vars:13,consts:[["id","page-heading",3,"jhiTranslate"],[3,"searchChange","search"],["jhiTranslate","artemisApp.competency.import.searchTableHeader",1,"mt-2"],[1,"mt-2",3,"jhiTranslate"],[1,"mt-4"],["id","cancelButton",3,"onClick","btnType","title","icon"],["id","importButton",3,"onClick","title","icon","disabled","isLoading"],[3,"searchChange","content","search"],["title","entity.action.select",3,"onClick","disabled"],["jhiTranslate","artemisApp.competency.import.searchTableEmpty"],[3,"searchChange","content","search","displayPagination"],[3,"onClick","btnType","icon"],[3,"jhiTranslate"],[1,"mb-1","d-flex"],["type","checkbox","name","importRelations",1,"ms-2",3,"ngModelChange","ngModel"]],template:function(c,i){c&1&&(s(0,"div"),e(1,`
    `),u(2,"h2",0),e(3,`
    `),s(4,"jhi-competency-search",1),m("searchChange",function(F){return i.filterChange(F)}),a(),e(5,`
    `),u(6,"h3",2),e(7,`
    `),h(8,L,6,2)(9,N,3,0),u(10,"h3",3),e(11,`
    `),h(12,H,6,3)(13,Q,3,1),s(14,"div",4),e(15,`
        `),h(16,U,8,2),s(17,"div"),e(18,`
            `),s(19,"jhi-button",5),m("onClick",function(){return i.onCancel()}),a(),e(20,`
            `),s(21,"jhi-button",6),m("onClick",function(){return i.onSubmit()}),a(),e(22,`
        `),a(),e(23,`
    `),a(),e(24,`
`),a(),e(25,`
`)),c&2&&(o(2),p("jhiTranslate","artemisApp."+i.entityType+".import.title"),o(2),p("search",i.filter),o(4),y(i.searchedCourseCompetencies.resultsOnPage!=null&&i.searchedCourseCompetencies.resultsOnPage.length?8:9),o(2),p("jhiTranslate","artemisApp."+i.entityType+".import.selectedTableHeader"),o(2),y(i.selectedCourseCompetencies.resultsOnPage!=null&&i.selectedCourseCompetencies.resultsOnPage.length?12:13),o(4),y(i.allowRelationImport?16:-1),o(3),p("btnType",i.ButtonType.SECONDARY)("title","entity.action.cancel")("icon",i.faBan),o(2),p("title","entity.action.import")("icon",i.faFileImport)("disabled",!i.isSubmitPossible())("isLoading",i.isLoading))},dependencies:[k,V,w,S,j,q,M,O],encapsulation:2})}return n})();export{re as ImportPrerequisitesComponent};
//# sourceMappingURL=import-prerequisites.component-UJ2ZDOEF.js.map
