import{a as Te}from"./chunk-7MKMUXV6.js";import{a as _e}from"./chunk-OUE3ZTPB.js";import{d as B}from"./chunk-DOLVNMRR.js";import{a as ye}from"./chunk-JRBFEQNN.js";import{a as Se}from"./chunk-OTCBNILH.js";import{a as g}from"./chunk-W7RIOT23.js";import{a as ge,b as fe}from"./chunk-VRAVBLUK.js";import{a as w,d as Ce}from"./chunk-O26CMRR4.js";import{c as k}from"./chunk-5MVJAZRV.js";import{D as oe,a as re}from"./chunk-VZRSC3LP.js";import{K as ie,c as X,h as Z,m as $,w as ee,x as te,z as ne}from"./chunk-WA5GEAJB.js";import{c as ue}from"./chunk-JXJXC4DZ.js";import{d as b}from"./chunk-EDXSOKK5.js";import{Bb as de,Bc as he,Da as ce,Qa as pe,V as se,fa as le,tb as me}from"./chunk-Z4VHWOB5.js";import{a as I}from"./chunk-U54OSGNH.js";import{f as J,h as K}from"./chunk-M6Z6DKZQ.js";import{c as ae}from"./chunk-E2KBL4LX.js";import{t as q}from"./chunk-IOA4DPXY.js";import{Bb as A,Cc as L,Db as o,Dc as F,Ea as S,Fb as N,Ma as O,Mc as d,Na as D,Oc as T,Rc as z,Tb as _,Va as v,Xc as H,Zb as P,Zc as U,_c as V,dd as e,ed as y,kc as m,ld as u,md as h,nd as C,rd as G,sc as R,uc as W,vc as x,wb as j,wc as E,xc as i,yc as r,yd as Q,zc as p,zd as Y}from"./chunk-5LC5EQRR.js";import{a as M}from"./chunk-3E746U5Y.js";var He=(()=>{class l{allowRelationImport=!1;courseId;isLoading=!1;isSubmitted=!1;importRelations=!0;showAdvancedSearch=!1;disabledIds=[];searchedCourseCompetencies={resultsOnPage:[],numberOfPages:0};selectedCourseCompetencies={resultsOnPage:[],numberOfPages:0};filter={courseTitle:"",description:"",semester:"",title:""};search={page:1,pageSize:10,sortingOrder:g.DESCENDING,sortedColumn:"ID"};selectedCourseCompetenciesSearch={page:0,pageSize:0,sortingOrder:g.DESCENDING,sortedColumn:"ID"};faBan=le;faSave=me;faFileImport=ce;faTrash=de;ButtonType=w;columnMapping={ID:"id",TITLE:"title",DESCRIPTION:"description",COURSE_TITLE:"course.title",SEMESTER:"course.semester"};activatedRoute=S(J);router=S(K);courseCompetencyService=S(Te);alertService=S(ue);translateService=S(ae);sortingService=S(Se);ngOnInit(){this.courseId=Number(this.activatedRoute.snapshot.paramMap.get("courseId")),this.courseCompetencyService.getAllForCourse(this.courseId).subscribe({next:s=>{let n=s.body??[];this.disabledIds=n.flatMap(c=>{switch(c.type){case B.COMPETENCY:return[c.id];case B.PREREQUISITE:return[c.id,c.linkedCourseCompetency?.id]}}).filter(c=>!!c),this.performSearch()},error:s=>k(this.alertService,s)})}filterChange(t){this.filter=t,this.search.page=1,this.performSearch()}searchChange(t){this.search=t,this.performSearch()}performSearch(){this.isLoading=!0,this.courseCompetencyService.getForImport(M(M({},this.filter),this.search)).subscribe({next:t=>{this.searchedCourseCompetencies=t,this.isLoading=!1},error:t=>k(this.alertService,t)})}sortSelected(t){this.selectedCourseCompetencies.resultsOnPage=this.sortingService.sortByProperty(this.selectedCourseCompetencies.resultsOnPage,this.columnMapping[t.sortedColumn],t.sortingOrder===g.ASCENDING)}selectCompetency(t){t.id&&this.disabledIds.push(t.id),this.selectedCourseCompetencies.resultsOnPage.push(t),this.sortSelected(this.selectedCourseCompetenciesSearch)}removeCompetency(t){t.id&&(this.disabledIds=this.disabledIds.filter(s=>s!==t.id)),this.selectedCourseCompetencies.resultsOnPage=this.selectedCourseCompetencies.resultsOnPage.filter(s=>s.id!==t.id)}isSubmitPossible(){return this.selectedCourseCompetencies.resultsOnPage.length>0}onCancel(){this.router.navigate(["../"],{relativeTo:this.activatedRoute})}canDeactivate(){return this.isSubmitted||!this.isLoading&&this.selectedCourseCompetencies.resultsOnPage.length===0}get canDeactivateWarning(){return this.translateService.instant("pendingChanges")}unloadNotification(t){return this.canDeactivate()?!0:(t.preventDefault(),this.canDeactivateWarning)}static \u0275fac=function(s){return new(s||l)};static \u0275cmp=_({type:l,selectors:[["ng-component"]],hostBindings:function(s,n){s&1&&d("beforeunload",function(a){return n.unloadNotification(a)},!1,A)},decls:0,vars:0,template:function(s,n){},encapsulation:2})}return l})();var xe=l=>({competency:l}),Ee=(l,f)=>f.id;function be(l,f){l&1&&L(0)}function Ie(l,f){if(l&1&&(e(0,`
            `),i(1,"tr"),e(2,`
                `),i(3,"td",11),e(4),r(),e(5,`
                `),i(6,"td",12),e(7),r(),e(8,`
                `),p(9,"td",13),Q(10,"htmlForMarkdown"),e(11,`
                `),i(12,"td",12),e(13),r(),e(14,`
                `),i(15,"td",11),e(16),r(),e(17,`
                `),i(18,"td",10),e(19,`
                    `),P(20,be,1,0,"ng-container",14),e(21,`
                `),r(),e(22,`
            `),r(),e(23,`
        `)),l&2){let t=f.$implicit,s=T();o(4),y(t.id),o(3),y(t.title),o(2),m("innerHTML",Y(10,7,t.description),j),o(4),y(t.course==null?null:t.course.title),o(3),y(t.course==null?null:t.course.semester),o(4),m("ngTemplateOutlet",s.buttonsTemplate)("ngTemplateOutletContext",G(9,xe,t))}}function we(l,f){if(l&1){let t=F();e(0,`
    `),i(1,"div",15),e(2,`
        `),i(3,"ngb-pagination",16),d("pageChange",function(n){O(t);let c=T();return D(c.onPageChange(n))}),C("pageChange",function(n){O(t);let c=T();return h(c.search.page,n)||(c.search.page=n),D(n)}),r(),e(4,`
    `),r(),e(5,`
`)}if(l&2){let t=T();o(3),u("page",t.search.page),m("collectionSize",t.search.pageSize*t.content.numberOfPages)("maxSize",10)("pageSize",t.search.pageSize)("rotate",!0)}}var ot=(()=>{class l{content;search;displayPagination=!0;searchChange=new v;buttonsTemplate;ascending;faSort=pe;ngOnInit(){this.ascending=this.search.sortingOrder===g.ASCENDING}onPageChange(t){this.search.page=t,this.searchChange.emit(this.search)}onSortChange(t){this.search.sortedColumn=t.predicate,this.search.sortingOrder=t.ascending?g.ASCENDING:g.DESCENDING,this.searchChange.emit(this.search)}static \u0275fac=function(s){return new(s||l)};static \u0275cmp=_({type:l,selectors:[["jhi-import-competencies-table"]],contentQueries:function(s,n,c){if(s&1&&H(c,N,5),s&2){let a;U(a=V())&&(n.buttonsTemplate=a.first)}},inputs:{content:"content",search:"search",displayPagination:"displayPagination"},outputs:{searchChange:"searchChange"},decls:53,vars:11,consts:[[1,"table","table-striped","align-middle","flex"],[1,"thead-dark"],["jhiSort","",1,"flex-row",3,"sortChange","ascendingChange","predicateChange","ascending","predicate"],["jhiSortBy","ID",1,"col-0.5"],[3,"icon"],["jhiSortBy","TITLE",1,"col-2"],[3,"jhiTranslate"],[1,"col-6"],["jhiSortBy","COURSE_TITLE",1,"col-2"],["jhiSortBy","SEMESTER",1,"col-0.5"],[1,"col-1"],[1,"col-0.5"],[1,"col-2"],[1,"markdown-preview","col-6",3,"innerHTML"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"d-flex","justify-content-between","p-2"],[3,"pageChange","page","collectionSize","maxSize","pageSize","rotate"]],template:function(s,n){s&1&&(i(0,"table",0),e(1,`
    `),i(2,"thead",1),e(3,`
        `),i(4,"tr",2),d("sortChange",function(a){return n.onSortChange(a)}),C("ascendingChange",function(a){return h(n.ascending,a)||(n.ascending=a),a})("predicateChange",function(a){return h(n.search.sortedColumn,a)||(n.search.sortedColumn=a),a}),e(5,`
            `),i(6,"th",3),e(7,`
                `),i(8,"span"),e(9,"#"),r(),e(10,`
                `),p(11,"fa-icon",4),e(12,`
            `),r(),e(13,`
            `),i(14,"th",5),e(15,`
                `),p(16,"span",6),e(17,`
                `),p(18,"fa-icon",4),e(19,`
            `),r(),e(20,`
            `),e(21,`
            `),i(22,"th",7),e(23,`
                `),p(24,"span",6),e(25,`
            `),r(),e(26,`
            `),i(27,"th",8),e(28,`
                `),p(29,"span",6),e(30,`
                `),p(31,"fa-icon",4),e(32,`
            `),r(),e(33,`
            `),i(34,"th",9),e(35,`
                `),p(36,"span",6),e(37,`
                `),p(38,"fa-icon",4),e(39,`
            `),r(),e(40,`
            `),e(41,`
            `),p(42,"th",10),e(43,`
        `),r(),e(44,`
    `),r(),e(45,`
    `),i(46,"tbody"),e(47,`
        `),x(48,Ie,24,11,null,null,Ee),r(),e(50,`
`),r(),e(51,`
`),P(52,we,6,5)),s&2&&(o(4),u("ascending",n.ascending)("predicate",n.search.sortedColumn),o(7),m("icon",n.faSort),o(5),m("jhiTranslate","artemisApp.competency.import.table.TITLE"),o(2),m("icon",n.faSort),o(6),m("jhiTranslate","artemisApp.competency.import.table.DESCRIPTION"),o(5),m("jhiTranslate","artemisApp.competency.import.table.COURSE_TITLE"),o(2),m("icon",n.faSort),o(5),m("jhiTranslate","artemisApp.competency.import.table.SEMESTER"),o(2),m("icon",n.faSort),o(10),E(n.content.resultsOnPage),o(4),R(n.displayPagination?52:-1))},dependencies:[ge,fe,b,I,q,oe,ye],encapsulation:2})}return l})();function Me(l,f){if(l&1&&(e(0,`
                            `),i(1,"option",23),e(2),r(),e(3,`
                        `)),l&2){let t=f.$implicit;o(),m("value",t),o(),y(t)}}var _t=(()=>{class l{search;searchChange=new v;advancedSearchEnabled=!1;faChevronDown=he;faChevronUp=se;ButtonType=w;semesters=_e();toggleAdvancedSearch(){this.advancedSearchEnabled=!this.advancedSearchEnabled}reset(){this.search={title:"",description:"",courseTitle:"",semester:""}}performSearch(){this.advancedSearchEnabled?this.searchChange.emit(this.search):this.searchChange.emit({title:this.search.title,description:"",courseTitle:"",semester:""})}static \u0275fac=function(s){return new(s||l)};static \u0275cmp=_({type:l,selectors:[["jhi-competency-search"]],inputs:{search:"search"},outputs:{searchChange:"searchChange"},decls:65,vars:11,consts:[[1,"card"],[1,"card-header"],["jhiTranslate","artemisApp.competency.import.search.title",1,"mb-0"],[1,"card-body","pb-1"],[1,"form-group"],["for","competency-title-input","jhiTranslate","artemisApp.competency.import.search.labelCompetencyTitle"],["id","competency-title-input",1,"form-control",3,"ngModelChange","keydown.enter","ngModel"],[3,"ngbCollapse"],["for","competency-description-input","jhiTranslate","artemisApp.competency.import.search.labelCompetencyDescription"],["id","competency-description-input","rows","3",1,"form-control",3,"ngModelChange","keydown.enter","ngModel"],[1,"row"],[1,"form-group","col"],["for","course-title-input","jhiTranslate","artemisApp.competency.import.search.labelCourseTitle"],["id","course-title-input",1,"form-control",3,"ngModelChange","keydown.enter","ngModel"],["for","course-semester-select","jhiTranslate","artemisApp.competency.import.search.labelCourseSemester"],["id","course-semester-select",1,"form-select",3,"ngModelChange","keydown.enter","ngModel"],[1,"d-flex","justify-content-end","flex-wrap"],["id","resetFilterButton",1,"me-2",3,"click","btnType","title"],["id","submitFilterButton",3,"click","btnType","title"],[1,"d-flex","flex-row","justify-content-center"],["id","toggleAdvancedSearch",1,"clickable",3,"click"],[3,"icon"],[3,"jhiTranslate"],[3,"value"]],template:function(s,n){s&1&&(i(0,"div",0),e(1,`
    `),i(2,"div",1),e(3,`
        `),p(4,"h5",2),e(5,`
    `),r(),e(6,`
    `),i(7,"div",3),e(8,`
        `),i(9,"div",4),e(10,`
            `),p(11,"label",5),e(12,`
            `),i(13,"input",6),C("ngModelChange",function(a){return h(n.search.title,a)||(n.search.title=a),a}),d("keydown.enter",function(){return n.performSearch()}),r(),e(14,`
        `),r(),e(15,`
        `),i(16,"div",7),e(17,`
            `),i(18,"div",4),e(19,`
                `),p(20,"label",8),e(21,`
                `),i(22,"textarea",9),C("ngModelChange",function(a){return h(n.search.description,a)||(n.search.description=a),a}),d("keydown.enter",function(){return n.performSearch()}),r(),e(23,`
            `),r(),e(24,`
            `),i(25,"div",10),e(26,`
                `),i(27,"div",11),e(28,`
                    `),p(29,"label",12),e(30,`
                    `),i(31,"input",13),C("ngModelChange",function(a){return h(n.search.courseTitle,a)||(n.search.courseTitle=a),a}),d("keydown.enter",function(){return n.performSearch()}),r(),e(32,`
                `),r(),e(33,`
                `),i(34,"div",11),e(35,`
                    `),p(36,"label",14),e(37,`
                    `),i(38,"select",15),C("ngModelChange",function(a){return h(n.search.semester,a)||(n.search.semester=a),a}),d("keydown.enter",function(){return n.performSearch()}),e(39,`
                        `),x(40,Me,4,2,null,null,W),r(),e(42,`
                `),r(),e(43,`
            `),r(),e(44,`
        `),r(),e(45,`
        `),i(46,"div",16),e(47,`
            `),i(48,"jhi-button",17),d("click",function(){return n.reset()}),r(),e(49,`
            `),i(50,"jhi-button",18),d("click",function(){return n.performSearch()}),r(),e(51,`
        `),r(),e(52,`
        `),i(53,"div",19),e(54,`
            `),i(55,"div",20),d("click",function(){return n.toggleAdvancedSearch()}),e(56,`
                `),p(57,"fa-icon",21),e(58,`
                `),p(59,"span",22),e(60,`
            `),r(),e(61,`
        `),r(),e(62,`
    `),r(),e(63,`
`),r(),e(64,`
`)),s&2&&(o(13),u("ngModel",n.search.title),o(3),m("ngbCollapse",!n.advancedSearchEnabled),o(6),u("ngModel",n.search.description),o(9),u("ngModel",n.search.courseTitle),o(7),u("ngModel",n.search.semester),o(2),E(n.semesters),o(8),m("btnType",n.ButtonType.SECONDARY)("title","entity.action.reset"),o(2),m("btnType",n.ButtonType.PRIMARY)("title","entity.action.search"),o(7),m("icon",n.advancedSearchEnabled?n.faChevronUp:n.faChevronDown),o(2),z("jhiTranslate",n.advancedSearchEnabled?"artemisApp.competency.import.search.hideAdvancedSearch":"artemisApp.competency.import.search.showAdvancedSearch"))},dependencies:[I,ie,te,ne,X,ee,Z,$,re,Ce,b],encapsulation:2})}return l})();export{He as a,ot as b,_t as c};
//# sourceMappingURL=chunk-RMHVRUWS.js.map
