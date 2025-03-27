import{a as E,c as F,d as Pe,e as ye}from"./chunk-L7ISDZQQ.js";import"./chunk-EWZHEKEG.js";import{a as Se}from"./chunk-VTF2OQPK.js";import"./chunk-LARBQRTJ.js";import"./chunk-OTNXTVPX.js";import{a as fe}from"./chunk-W7RIOT23.js";import"./chunk-2CUFQLAH.js";import{d as ue}from"./chunk-AR57MWOI.js";import"./chunk-A5PTZAPN.js";import"./chunk-AU6UEH3U.js";import"./chunk-FGAONQTL.js";import"./chunk-HQ6UGNQX.js";import"./chunk-ZLJ76G5I.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import{c as f}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import{D as pe,E as ge,M as de,O as he,v as me}from"./chunk-VZRSC3LP.js";import{c as re}from"./chunk-5SKDOIBQ.js";import{K as ce,c as oe,h as se,m as le}from"./chunk-WA5GEAJB.js";import"./chunk-5GXY5RYT.js";import{a as xe}from"./chunk-K3W6YFKH.js";import{c as b}from"./chunk-JXJXC4DZ.js";import{d as G,f as k}from"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Zc as R}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as T}from"./chunk-U54OSGNH.js";import{f as j,h as ae}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{E as ie,n as te,t as ne}from"./chunk-IOA4DPXY.js";import{Cc as q,Db as l,Dc as O,Ea as g,Ed as ee,Ma as M,Mc as P,Na as I,Oc as d,Pd as _,Qd as L,Rd as v,Tb as C,Za as A,Zb as x,ab as p,cd as U,dd as e,ed as Y,fd as J,kc as c,mc as B,rd as Q,sc as S,uc as W,vc as w,w as H,wc as N,xc as i,yc as a,yd as X,z as K,zc as s,zd as Z}from"./chunk-5LC5EQRR.js";import{a as z,b as $,j as h}from"./chunk-3E746U5Y.js";var u=function(n){return n.MISSING="MISSING",n.NO_COMPETENCIES="NO_COMPETENCIES",n.NO_RELATIONS="NO_RELATIONS",n}(u||{});function Ee(n,m){if(n&1&&(e(0,`
                `),s(1,"fa-icon",7),e(2,`
            `)),n&2){let t=d();l(),c("icon",t.faSpinner)}}function Le(n,m){n&1&&(e(0,`
            `),i(1,"div",8),e(2,`
                `),i(3,"div",9),e(4,`
                    `),s(5,"span",10),e(6,`
                `),a(),e(7,`
            `),a(),e(8,`
        `))}function Me(n,m){if(n&1){let t=O();e(0,`
                `),i(1,"div",11),e(2,`
                    `),i(3,"span"),s(4,"strong",12),a(),e(5,`
                    `),i(6,"p",13),s(7,"small",12),a(),e(8,`
                    `),i(9,"button",14),P("click",function(){let o=M(t).$implicit,y=d(2);return I(y.handleHealthStateAction(o))}),a(),e(10,`
                `),a(),e(11,`
            `)}if(n&2){let t=m.$implicit,r=m.$index,o=d(2);l(),B("mt-3",r!==0),c("ngClass",o.stateCssClasses[t]),l(3),c("jhiTranslate",o.translationKeys[t]+".title"),l(3),c("jhiTranslate",o.translationKeys[t]+".description"),l(2),c("id","health-state-button-"+t)("jhiTranslate",o.translationKeys[t]+".actionButton")}}function Ie(n,m){n&1&&(e(0,`
                `),i(1,"div",15),e(2,`
                    `),i(3,"span")(4,"em"),s(5,"small",16),a()(),e(6,`
                `),a(),e(7,`
            `))}function Ae(n,m){if(n&1&&(e(0,`
            `),w(1,Me,12,7,null,null,W,!1,Ie,8,0)),n&2){let t=d();l(),N(t.learningPathHealthState())}}var Ce=(()=>{class n{faSpinner=R;baseTranslationKey="artemisApp.learningPathManagement.learningPathsState.type";translationKeys={[u.MISSING]:`${this.baseTranslationKey}.missing`,[u.NO_COMPETENCIES]:`${this.baseTranslationKey}.noCompetencies`,[u.NO_RELATIONS]:`${this.baseTranslationKey}.noRelations`};stateCssClasses={[u.MISSING]:"warning-state",[u.NO_COMPETENCIES]:"danger-state",[u.NO_RELATIONS]:"warning-state"};learningPathApiService=g(E);alertService=g(b);router=g(ae);activatedRoute=g(j);courseId=A.required();isLoading=p(!1);learningPathHealth=p(void 0);learningPathHealthState=L(()=>this.learningPathHealth()?.status??[]);constructor(){v(()=>{let t=this.courseId();_(()=>this.loadLearningPathHealthState(t))})}loadLearningPathHealthState(t){return h(this,null,function*(){try{this.isLoading.set(!0);let r=yield this.learningPathApiService.getLearningPathHealthStatus(t);this.learningPathHealth.set(r)}catch(r){f(this.alertService,r)}finally{this.isLoading.set(!1)}})}handleHealthStateAction(t){return h(this,null,function*(){switch(t){case u.MISSING:yield this.generateMissingLearningPaths();break;case u.NO_COMPETENCIES:case u.NO_RELATIONS:yield this.navigateToManageCompetencyPage();break}})}navigateToManageCompetencyPage(){return h(this,null,function*(){yield this.router.navigate(["../competency-management"],{relativeTo:this.activatedRoute})})}generateMissingLearningPaths(){return h(this,null,function*(){try{yield this.learningPathApiService.generateMissingLearningPaths(this.courseId()),this.alertService.success(`${this.baseTranslationKey}.missing.successAlert`),yield this.loadLearningPathHealthState(this.courseId())}catch(t){f(this.alertService,t)}})}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=C({type:n,selectors:[["jhi-learning-paths-state"]],inputs:{courseId:[1,"courseId"]},decls:21,vars:2,consts:[[1,"col"],[1,"row","m-0","align-items-center","justify-content-between"],["jhiTranslate","artemisApp.learningPathManagement.learningPathsState.title",1,"m-0","col-md-auto","p-0"],[1,"btn","btn-secondary","btn-sm","col-md-auto",3,"click"],["jhiTranslate","artemisApp.learningPathManagement.learningPathsState.refreshButtonLabel"],[1,"my-2"],[1,"learning-paths-management-container"],["animation","spin",3,"icon"],[1,"row","justify-content-center","p-2"],["role","status",1,"spinner-border","text-primary"],["jhiTranslate","loading",1,"sr-only"],[1,"px-2","py-1","learning-paths-state-container",3,"ngClass"],[3,"jhiTranslate"],[1,"m-0"],[1,"mt-2","btn","btn-outline-secondary","btn-sm","align-self-end",3,"click","id","jhiTranslate"],[1,"row","m-0","justify-content-center","text-center","text-secondary","p-2"],["jhiTranslate","artemisApp.learningPathManagement.learningPathsState.emptyState"]],template:function(r,o){r&1&&(i(0,"div",0),e(1,`
    `),i(2,"div",1),e(3,`
        `),s(4,"h5",2),e(5,`
        `),i(6,"button",3),P("click",function(){return o.loadLearningPathHealthState(o.courseId())}),e(7,`
            `),x(8,Ee,3,1),s(9,"span",4),e(10,`
        `),a(),e(11,`
    `),a(),e(12,`
    `),s(13,"hr",5),e(14,`
    `),i(15,"div",6),e(16,`
        `),x(17,Le,9,0)(18,Ae,4,1),a(),e(19,`
`),a(),e(20,`
`)),r&2&&(l(8),S(o.isLoading()?8:-1),l(9),S(o.isLoading()?17:18))},dependencies:[T,k,G,te],styles:[".learning-paths-state-container[_ngcontent-%COMP%]{border-left:2px solid #0dcaf0}.learning-paths-state-container.danger-state[_ngcontent-%COMP%]{border-left-color:#dc3545}.learning-paths-state-container.warning-state[_ngcontent-%COMP%]{border-left-color:#ffc107}.learning-paths-state-container.info-state[_ngcontent-%COMP%]{border-left-color:#0dcaf0}",".enable-learning-paths-container[_ngcontent-%COMP%]{max-width:500px;text-align:center}.learning-paths-container[_ngcontent-%COMP%]{background:var(--bs-card-bg)}.learning-paths-management-container[_ngcontent-%COMP%]{max-height:220px;overflow-y:auto}"],changeDetection:0})}return n})();var Oe=(n,m)=>m.id;function we(n,m){if(n&1&&(e(0,`
                `),s(1,"fa-icon",15),e(2,`
            `)),n&2){let t=d();l(),c("icon",t.faSpinner)}}function Ne(n,m){if(n&1){let t=O();e(0,`
                        `),i(1,"tr",16),e(2,`
                            `),i(3,"td",10),e(4),a(),e(5,`
                            `),i(6,"td"),e(7,`
                                `),s(8,"ngb-highlight",17),e(9,`
                            `),a(),e(10,`
                            `),i(11,"td"),e(12,`
                                `),s(13,"ngb-highlight",17),e(14,`
                            `),a(),e(15,`
                            `),i(16,"td"),e(17,`
                                `),i(18,"span",18),P("click",function(){let o=M(t).$implicit,y=d();return I(y.openCompetencyGraph(o.id,o.user.name))}),i(19,"u"),e(20),a()(),e(21,`
                            `),a(),e(22,`
                        `),a(),e(23,`
                    `)}if(n&2){let t=m.$implicit,r=d();l(4),Y(t.id),l(4),c("result",t.user.name)("term",r.searchTerm()),l(5),c("result",t.user.login)("term",r.searchTerm()),l(5),c("id","open-competency-graph-button-"+t.id),l(2),J("",t.progress," %")}}function je(n,m){n&1&&(e(0,`
                        `),i(1,"tr"),e(2,`
                            `),i(3,"td",19),e(4,`
                                `),s(5,"span",20),e(6,`
                            `),a(),e(7,`
                        `),a(),e(8,`
                    `))}var _e=function(n){return n.ID="ID",n.USER_NAME="USER_NAME",n.USER_LOGIN="USER_LOGIN",n.PROGRESS="PROGRESS",n}(_e||{}),ve=(()=>{class n{faSpinner=R;learningPathApiService=g(E);alertService=g(b);modalService=g(me);courseId=A.required();isLoading=p(!1);searchResults=p(void 0);learningPaths=L(()=>this.searchResults()?.resultsOnPage??[]);searchTerm=p("");page=p(1);sortingOrder=p(fe.ASCENDING);sortedColumn=p(_e.ID);pageSize=p(100).asReadonly();collectionSize=L(()=>(this.searchResults()?.numberOfPages??1)*this.pageSize());debounceLoadLearningPaths=Se.debounce(this.loadLearningPaths.bind(this),300);constructor(){v(()=>{let t=this.courseId();_(()=>this.loadLearningPaths(t))})}loadLearningPaths(t){return h(this,null,function*(){try{this.isLoading.set(!0);let r={page:this.page(),pageSize:this.pageSize(),searchTerm:this.searchTerm(),sortingOrder:this.sortingOrder(),sortedColumn:this.sortedColumn()},o=yield this.learningPathApiService.getLearningPathInformation(t,r);this.searchResults.set(o)}catch(r){f(this.alertService,r)}finally{this.isLoading.set(!1)}})}search(t){this.searchTerm.set(t),this.page.set(1),this.debounceLoadLearningPaths(this.courseId())}setPage(t){return h(this,null,function*(){this.page.set(t),yield this.loadLearningPaths(this.courseId())})}openCompetencyGraph(t,r){ye.openCompetencyGraphModal(this.modalService,t,r)}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=C({type:n,selectors:[["jhi-learning-paths-table"]],inputs:{courseId:[1,"courseId"]},decls:49,vars:10,consts:[[1,"col"],[1,"row","m-0","align-items-center","justify-content-between"],["jhiTranslate","artemisApp.learningPathManagement.learningPathsTable.title",1,"m-0","col-md-auto","p-0"],[1,"col-md-auto","d-flex","align-items-center","input-group-sm"],["id","learning-path-search","type","search","aria-label","Search",1,"ms-2","form-control","rounded",3,"ngModelChange","placeholder","ngModel"],[1,"my-2"],[1,"learning-paths-management-container"],[1,"learning-paths-table-container"],[1,"table","table-striped"],[1,"thead-dark"],[1,"col-1"],["jhiTranslate","artemisApp.learningPathManagement.learningPathsTable.columnLabel.name",1,"col-4"],["jhiTranslate","artemisApp.learningPathManagement.learningPathsTable.columnLabel.login",1,"col-4"],["jhiTranslate","artemisApp.learningPathManagement.learningPathsTable.columnLabel.progress",1,"col-2"],["size","sm",1,"d-flex","justify-content-end","mt-2","pagination",3,"pageChange","maxSize","collectionSize","page","pageSize"],["animation","spin",3,"icon"],[1,"align-middle"],[3,"result","term"],[1,"clickable","link-primary",3,"click","id"],["colspan","4",1,"text-center"],["jhiTranslate","artemisApp.learningPathManagement.learningPathsTable.noResults"]],template:function(r,o){r&1&&(i(0,"div",0),e(1,`
    `),i(2,"div",1),e(3,`
        `),s(4,"h5",2),e(5,`
        `),i(6,"div",3),e(7,`
            `),x(8,we,3,1),i(9,"input",4),X(10,"artemisTranslate"),P("ngModelChange",function(D){return o.search(D)}),a(),e(11,`
        `),a(),e(12,`
    `),a(),e(13,`
    `),s(14,"hr",5),e(15,`
    `),i(16,"div",6),e(17,`
        `),i(18,"div",7),e(19,`
            `),i(20,"table",8),e(21,`
                `),i(22,"thead",9),e(23,`
                    `),i(24,"tr"),e(25,`
                        `),i(26,"th",10),e(27,"#"),a(),e(28,`
                        `),s(29,"th",11),e(30,`
                        `),s(31,"th",12),e(32,`
                        `),s(33,"th",13),e(34,`
                    `),a(),e(35,`
                `),a(),e(36,`
                `),i(37,"tbody"),e(38,`
                    `),w(39,Ne,24,7,null,null,Oe,!1,je,9,0),a(),e(42,`
            `),a(),e(43,`
        `),a(),e(44,`
        `),i(45,"ngb-pagination",14),P("pageChange",function(D){return o.setPage(D)}),a(),e(46,`
    `),a(),e(47,`
`),a(),e(48,`
`)),r&2&&(l(8),S(o.isLoading()?8:-1),l(),c("placeholder",Z(10,8,"artemisApp.learningPathManagement.learningPathsTable.searchPlaceholder"))("ngModel",o.searchTerm()),l(30),N(o.learningPaths()),l(6),c("maxSize",5)("collectionSize",o.collectionSize())("page",o.page())("pageSize",o.pageSize()))},dependencies:[ge,pe,he,de,ce,oe,se,le,k,G,xe,T],styles:[".learning-paths-table-container[_ngcontent-%COMP%]{height:185px;overflow-y:auto}.learning-paths-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background:var(--bs-card-bg)}.pagination[_ngcontent-%COMP%]{height:27px;overflow-y:hidden}",".enable-learning-paths-container[_ngcontent-%COMP%]{max-width:500px;text-align:center}.learning-paths-container[_ngcontent-%COMP%]{background:var(--bs-card-bg)}.learning-paths-management-container[_ngcontent-%COMP%]{max-height:220px;overflow-y:auto}"],changeDetection:0})}return n})();var Re=n=>({$implicit:n});function Ge(n,m){n&1&&(e(0,`
                `),i(1,"div",8),e(2,`
                    `),i(3,"div",9),e(4,`
                        `),s(5,"span",10),e(6,`
                    `),a(),e(7,`
                `),a(),e(8,`
            `))}function ke(n,m){if(n&1&&(e(0,`
                `),s(1,"jhi-competency-graph",11),e(2,`
            `)),n&2){let t=d();l(),c("competencyGraph",t.instructorCompetencyGraph())}}function De(n,m){if(n&1&&(e(0,`
    `),i(1,"div",12),e(2,`
        `),s(3,"input",13),e(4,`
        `),s(5,"label",14),e(6,`
    `),a(),e(7,`
`)),n&2){let t=m.$implicit,r=d();l(3),c("checked",r.valueSelection()===t),l(2),c("jhiTranslate","artemisApp.learningPathManagement.learningPathsAnalytics.graphSelection."+t)}}var be=(()=>{class n{CompetencyGraphNodeValueType=F;learningPathApiService=g(E);alertService=g(b);courseId=A.required();isLoading=p(!1);instructorCompetencyGraph=p(void 0);valueSelection=p(F.AVERAGE_MASTERY_PROGRESS);constructor(){v(()=>{let t=this.courseId();_(()=>this.loadInstructionCompetencyGraph(t))})}loadInstructionCompetencyGraph(t){return h(this,null,function*(){try{this.isLoading.set(!0);let r=yield this.learningPathApiService.getLearningPathInstructorCompetencyGraph(t);this.instructorCompetencyGraph.set(r)}catch(r){f(this.alertService,r)}finally{this.isLoading.set(!1)}})}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=C({type:n,selectors:[["jhi-learning-paths-analytics"]],inputs:{courseId:[1,"courseId"]},decls:23,vars:5,consts:[["radioTemplate",""],[1,"learning-paths-analytics-container"],["jhiTranslate","artemisApp.learningPathManagement.learningPathsAnalytics.title",1,"m-0"],[1,"my-2"],[1,"row","h-100","m-0","gap-3"],[1,"col-2","p-0","learning-paths-analytics-graph-selection-container"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"col","p-0"],[1,"row","justify-content-center","p-2"],["role","status",1,"spinner-border","text-primary"],["jhiTranslate","loading",1,"sr-only"],[3,"competencyGraph"],[1,"row","m-0","align-items-center"],["type","radio",1,"col-md-auto",3,"checked"],[1,"col-md-auto","pe-0","text-break",3,"jhiTranslate"]],template:function(r,o){if(r&1&&(i(0,"div",1),e(1,`
    `),s(2,"h5",2),e(3,`
    `),s(4,"hr",3),e(5,`
    `),i(6,"div",4),e(7,`
        `),i(8,"div",5),e(9,`
            `),q(10,6),e(11,`
        `),a(),e(12,`
        `),i(13,"div",7),e(14,`
            `),x(15,Ge,9,0)(16,ke,3,1),a(),e(17,`
    `),a(),e(18,`
`),a(),e(19,`

`),x(20,De,8,2,"ng-template",null,0,ee),e(22,`
`)),r&2){let y=U(21);l(10),c("ngTemplateOutlet",y)("ngTemplateOutletContext",Q(3,Re,o.CompetencyGraphNodeValueType.AVERAGE_MASTERY_PROGRESS)),l(5),S(o.isLoading()?15:o.instructorCompetencyGraph()?16:-1)}},dependencies:[Pe,T,ie,ne],styles:[".learning-paths-analytics-container[_ngcontent-%COMP%]{height:500px}.learning-paths-analytics-container[_ngcontent-%COMP%]   .learning-paths-analytics-graph-selection-container[_ngcontent-%COMP%]{border-right:var(--bs-border-width) solid var(--border-color)}"],changeDetection:0})}return n})();function Fe(n,m){n&1&&(e(0,`
    `),i(1,"div",0),e(2,`
        `),i(3,"div",1),e(4,`
            `),s(5,"span",2),e(6,`
        `),a(),e(7,`
    `),a(),e(8,`
`))}function Ve(n,m){if(n&1&&(e(0,`
    `),i(1,"div",3),e(2,`
        `),i(3,"div",4),e(4,`
            `),e(5,`
            `),e(6,`
            `),e(7,`
            `),e(8,`
            `),i(9,"div",5),e(10,`
                `),s(11,"jhi-learning-paths-state",6),e(12,`
            `),a(),e(13,`
            `),i(14,"div",7),e(15,`
                `),s(16,"jhi-learning-paths-table",6),e(17,`
            `),a(),e(18,`
        `),a(),e(19,`
        `),i(20,"div",8),e(21,`
            `),s(22,"jhi-learning-paths-analytics",6),e(23,`
        `),a(),e(24,`
    `),a(),e(25,`
`)),n&2){let t=d();l(11),c("courseId",t.courseId()),l(5),c("courseId",t.courseId()),l(6),c("courseId",t.courseId())}}function ze(n,m){if(n&1){let t=O();e(0,`
    `),i(1,"div",9),e(2,`
        `),i(3,"div",10),e(4,`
            `),s(5,"h3",11),e(6,`
            `),s(7,"span",12),e(8,`
            `),i(9,"button",13),P("click",function(){M(t);let o=d();return I(o.enableLearningPaths())}),a(),e(10,`
        `),a(),e(11,`
    `),a(),e(12,`
`)}}var Yt=(()=>{class n{activatedRoute=g(j);learningPathApiService=g(E);alertService=g(b);courseManagementService=g(ue);courseId=re(this.activatedRoute.parent.params.pipe(K(t=>Number(t.courseId))),{requireSync:!0});course=p(void 0);learningPathsEnabled=L(()=>this.course()?.learningPathsEnabled??!1);isLoading=p(!1);constructor(){v(()=>{let t=this.courseId();_(()=>this.loadCourse(t))})}loadCourse(t){return h(this,null,function*(){try{this.isLoading.set(!0);let r=yield H(this.courseManagementService.findOneForDashboard(t));this.course.set(r.body)}catch(r){f(this.alertService,r)}finally{this.isLoading.set(!1)}})}enableLearningPaths(){return h(this,null,function*(){try{this.isLoading.set(!0),yield this.learningPathApiService.enableLearningPaths(this.courseId()),this.course.update(t=>$(z({},t),{learningPathsEnabled:!0}))}catch(t){f(this.alertService,t)}finally{this.isLoading.set(!1)}})}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=C({type:n,selectors:[["jhi-learning-path-instructor-page"]],decls:3,vars:1,consts:[[1,"row","justify-content-center","p-2"],["role","status",1,"spinner-border","text-primary"],["jhiTranslate","loading",1,"sr-only"],[1,"col"],[1,"row","w-100","p-0","m-0","gap-3"],[1,"col","p-2","learning-paths-container"],[3,"courseId"],[1,"col-6","p-2","learning-paths-container"],[1,"row","w-100","p-0","m-0","g-3","learning-paths-container"],[1,"row","align-items-center","justify-content-center","h-100","p-3"],[1,"enable-learning-paths-container"],["jhiTranslate","artemisApp.learningPathManagement.learningPathsDisabled.title",1,"mb-3"],["jhiTranslate","artemisApp.learningPathManagement.learningPathsDisabled.description"],["type","button","id","enable-learning-paths-button","jhiTranslate","artemisApp.learningPathManagement.learningPathsDisabled.buttonLabel",1,"mt-4","btn","btn-primary",3,"click"]],template:function(r,o){r&1&&x(0,Fe,9,0)(1,Ve,26,3)(2,ze,13,0),r&2&&S(o.isLoading()?0:o.learningPathsEnabled()?1:2)},dependencies:[Ce,ve,be,T],styles:[".enable-learning-paths-container[_ngcontent-%COMP%]{max-width:500px;text-align:center}.learning-paths-container[_ngcontent-%COMP%]{background:var(--bs-card-bg)}.learning-paths-management-container[_ngcontent-%COMP%]{max-height:220px;overflow-y:auto}"],changeDetection:0})}return n})();export{Yt as LearningPathInstructorPageComponent};
//# sourceMappingURL=learning-path-instructor-page.component-FMQFAGD2.js.map
