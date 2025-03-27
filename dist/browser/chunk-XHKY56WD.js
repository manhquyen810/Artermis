import{a as we}from"./chunk-57BCHYEO.js";import{a as ye,b as Te}from"./chunk-NV4PYWIT.js";import{f as fe}from"./chunk-6EYB5QBP.js";import{a as Ee,b as Ce}from"./chunk-VRAVBLUK.js";import{d as M}from"./chunk-O26CMRR4.js";import{a as he}from"./chunk-2QXIMOEO.js";import{A as pe,B as me,C as ce,D as le,M as xe,u as w,w as ne,x as oe,y as ae,z as se}from"./chunk-VZRSC3LP.js";import{K as N,c as Y,h as $,i as ee,k as te,m as ie,n as re}from"./chunk-WA5GEAJB.js";import{c as ge}from"./chunk-JXJXC4DZ.js";import{d as ue}from"./chunk-EDXSOKK5.js";import{c as u}from"./chunk-CXQURQM5.js";import{gc as de}from"./chunk-Z4VHWOB5.js";import{a as L}from"./chunk-U54OSGNH.js";import{O as E}from"./chunk-IOA4DPXY.js";import{Db as s,Dc as A,Ea as x,Ma as j,Mc as y,Na as R,Oc as g,Rc as V,Sa as D,Tb as I,Wb as G,Xb as W,Zb as C,cd as J,dd as e,ed as X,fd as Z,kc as m,ld as S,mc as B,md as F,nd as b,oc as z,sc as v,vc as K,wc as H,xc as o,ya as h,yc as a,yd as q,z as k,zc as p,zd as Q}from"./chunk-5LC5EQRR.js";import{h as Ne,j as P}from"./chunk-3E746U5Y.js";var f=class extends ye{http;resourceUrl;constructor(d,i){super(),this.http=d,this.resourceUrl=i}search(d,i){let n=this.createHttpParams(d);return n=n.set("isCourseFilter",String(i.isCourseFilter)).set("isExamFilter",String(i.isExamFilter)),i.programmingLanguage&&(n=n.set("programmingLanguage",i.programmingLanguage)),this.http.get(`${this.resourceUrl}`,{params:n,observe:"response"}).pipe(k(r=>r&&r.body))}};var _e=(()=>{class t extends f{static RESOURCE_URL="api/fileupload/file-upload-exercises";constructor(){let i=x(E);super(i,t.RESOURCE_URL)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ve=(()=>{class t extends f{static RESOURCE_URL="api/modeling/modeling-exercises";constructor(){let i=x(E);super(i,t.RESOURCE_URL)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var U=(()=>{class t extends f{static RESOURCE_URL="api/programming/programming-exercises";constructor(){let i=x(E);super(i,t.RESOURCE_URL)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ie=(()=>{class t extends f{constructor(){let i=x(E);super(i,U.RESOURCE_URL+"/with-sca")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Fe=(()=>{class t extends f{static RESOURCE_URL="api/quiz/quiz-exercises";constructor(){let i=x(E);super(i,t.RESOURCE_URL)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Se=(()=>{class t extends f{static RESOURCE_URL="api/text/text-exercises";constructor(){let i=x(E);super(i,t.RESOURCE_URL)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var be=(()=>{class t{transform(i){return i?.exerciseGroup?.exam?.course?.title||i?.course?.title||""}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=G({name:"courseTitle",type:t,pure:!0})}return t})();function Ue(t,d){t&1&&(e(0,`
            `),p(1,"span",25),e(2,`
        `))}function Oe(t,d){if(t&1&&(e(0,`
                    `),o(1,"th",26),e(2,`
                        `),p(3,"span",27),e(4,`
                        `),p(5,"fa-icon",13),e(6,`
                    `),a(),e(7,`
                `)),t&2){let i=g();s(5),m("icon",i.faSort)}}function Pe(t,d){if(t&1&&(e(0,`
                        `),p(1,"fa-icon",13),e(2,`
                    `)),t&2){let i=g();s(),m("icon",i.faSort)}}function ke(t,d){if(t&1&&(e(0,`
                        `),o(1,"td",32),e(2,`
                            `),o(3,"span"),e(4),a(),e(5,`
                        `),a(),e(6,`
                    `)),t&2){let i,n=g().$implicit,r=g();s(4),X((i=r.asProgrammingExercise(n))==null?null:i.programmingLanguage)}}function De(t,d){if(t&1&&(e(0,`
                                `),p(1,"fa-icon",13),e(2,`
                            `)),t&2){let i=g(2);s(),m("icon",i.faCheck)}}function Ge(t,d){if(t&1){let i=A();e(0,`
                `),o(1,"tr"),e(2,`
                    `),o(3,"td",22),e(4,`
                        `),o(5,"span"),e(6),a(),e(7,`
                    `),a(),e(8,`
                    `),o(9,"td",28),e(10,`
                        `),p(11,"ngb-highlight",29),e(12,`
                    `),a(),e(13,`
                    `),C(14,ke,7,1),o(15,"td",28),e(16,`
                        `),p(17,"ngb-highlight",29),q(18,"courseTitle"),e(19,`
                    `),a(),e(20,`
                    `),o(21,"td",20),e(22,`
                        `),o(23,"div",30),e(24,`
                            `),C(25,De,3,1),a(),e(26,`
                    `),a(),e(27,`
                    `),o(28,"td",22),e(29,`
                        `),o(30,"jhi-button",31),y("onClick",function(){let r=j(i).$implicit,l=g();return R(l.selectImport(r))}),a(),e(31,`
                    `),a(),e(32,`
                `),a(),e(33,`
            `)}if(t&2){let i=d.$implicit,n=g();s(),z("flex-row exercise-"+i.id),s(4),B("ngb-highlight",""+i.id===n.searchTerm),s(),Z(" ",i.id,""),s(5),m("result",i.title)("term",n.searchTerm),s(3),v(n.exerciseType===n.ExerciseType.PROGRAMMING?14:-1),s(3),m("result",Q(18,13,i))("term",n.searchTerm),s(4),m("hidden",!(n.isCourseFilter&&n.isExamFilter)),s(4),v(i.exerciseGroup?25:-1),s(5),m("title","artemisApp.exercise.import.table.doImport")}}var We="ID",O=(()=>{class t extends Te{injector=x(D);ExerciseType=u;exerciseType;programmingLanguage;isCourseFilter=!0;isExamFilter=!0;titleKey;constructor(){super(void 0)}ngOnInit(){this.exerciseType&&(this.pagingService=this.getPagingService(),this.programmingLanguage?this.titleKey="artemisApp.programmingExercise.configureGrading.categories.importLabel":this.titleKey=this.exerciseType===u.FILE_UPLOAD?"artemisApp.fileUploadExercise.home.importLabel":`artemisApp.${this.exerciseType}Exercise.home.importLabel`,super.ngOnInit())}getPagingService(){switch(this.exerciseType){case u.MODELING:return this.injector.get(ve);case u.PROGRAMMING:return this.programmingLanguage?this.injector.get(Ie):this.injector.get(U);case u.QUIZ:return this.injector.get(Fe);case u.TEXT:return this.injector.get(Se);case u.FILE_UPLOAD:return this.injector.get(_e);default:throw new Error("Unsupported exercise type: "+this.exerciseType)}}createOptions(){return{isCourseFilter:this.isCourseFilter,isExamFilter:this.isExamFilter,programmingLanguage:this.programmingLanguage}}set sortedColumn(i){i==="COURSE_TITLE"&&this.isExamFilter&&!this.isCourseFilter&&(i="EXAM_TITLE"),this.setSearchParam({sortedColumn:i})}get sortedColumn(){return this.state.sortedColumn}onCourseFilterChange(){this.isCourseFilter=!this.isCourseFilter,this.resetSortOnFilterChange(),this.search.next()}onExamFilterChange(){this.isExamFilter=!this.isExamFilter,this.resetSortOnFilterChange(),this.search.next()}resetSortOnFilterChange(){(this.sortedColumn==="COURSE_TITLE"||this.sortedColumn==="EXAM_TITLE")&&(this.sortedColumn=We)}asProgrammingExercise(i){return i}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=I({type:t,selectors:[["jhi-exercise-import"]],inputs:{exerciseType:"exerciseType",programmingLanguage:"programmingLanguage"},features:[W],decls:78,vars:21,consts:[[1,"modal-body"],[1,"form-group","form-inline"],["jhiTranslate","artemisApp.exercise.import.search"],["type","text","name","searchExcercise",1,"form-control","mx-2",3,"ngModelChange","ngModel"],[1,"form-check","form-check-inline"],["type","checkbox","id","courseFilter",1,"form-check-input",3,"change","checked","disabled"],["for","courseFilter","jhiTranslate","artemisApp.exercise.import.searchInCourses",1,"form-check-label"],["type","checkbox","id","examFilter",1,"form-check-input",3,"change","checked","disabled"],["for","examFilter","jhiTranslate","artemisApp.exercise.import.searchInExams",1,"form-check-label"],[1,"table","table-striped","flex"],[1,"thead-dark"],["jhiSort","",1,"flex-row",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["jhiSortBy","ID",1,"col-1"],[3,"icon"],["jhiSortBy","TITLE",1,"col-4"],["jhiTranslate","artemisApp.exercise.import.table.title"],["jhiSortBy","COURSE_TITLE",1,"col-4"],["jhiTranslate","artemisApp.exercise.import.table.course",3,"hidden"],[3,"hidden"],["jhiTranslate","artemisApp.exercise.import.table.exam",3,"hidden"],[1,"col-2",3,"hidden"],["jhiTranslate","artemisApp.exercise.import.table.examQuestion"],[1,"col-1"],[1,"d-flex","justify-content-between","p-2"],[3,"pageChange","maxSize","rotate","collectionSize","page","pageSize"],["jhiTranslate","artemisApp.exercise.import.loading",1,"ms-3"],["jhiSortBy","PROGRAMMING_LANGUAGE",1,"col-2"],["jhiTranslate","artemisApp.exercise.import.table.language"],[1,"text-break","col-4"],[3,"result","term"],[2,"text-align","center","vertical-align","middle"],[1,"import",3,"onClick","title"],[1,"text-break","col-3"]],template:function(n,r){n&1&&(o(0,"div",0),e(1,`
    `),o(2,"div",1),e(3,`
        `),p(4,"span",2),e(5,`:
        `),o(6,"input",3),b("ngModelChange",function(c){return F(r.searchTerm,c)||(r.searchTerm=c),c}),a(),e(7,`
        `),o(8,"div",4),e(9,`
            `),o(10,"input",5),y("change",function(){return r.onCourseFilterChange()}),a(),e(11,`
            `),p(12,"label",6),e(13,`
        `),a(),e(14,`
        `),o(15,"div",4),e(16,`
            `),o(17,"input",7),y("change",function(){return r.onExamFilterChange()}),a(),e(18,`
            `),p(19,"label",8),e(20,`
        `),a(),e(21,`
        `),C(22,Ue,3,0),a(),e(23,`
    `),o(24,"table",9),e(25,`
        `),o(26,"thead",10),e(27,`
            `),o(28,"tr",11),b("predicateChange",function(c){return F(r.sortedColumn,c)||(r.sortedColumn=c),c})("ascendingChange",function(c){return F(r.listSorting,c)||(r.listSorting=c),c}),y("sortChange",function(){return r.sortRows()}),e(29,`
                `),o(30,"th",12),e(31,`
                    `),o(32,"span"),e(33,"#"),a(),e(34,`
                    `),p(35,"fa-icon",13),e(36,`
                `),a(),e(37,`
                `),o(38,"th",14),e(39,`
                    `),p(40,"span",15),e(41,`
                    `),p(42,"fa-icon",13),e(43,`
                `),a(),e(44,`
                `),C(45,Oe,8,1),o(46,"th",16),e(47,`
                    `),p(48,"span",17),e(49,`
                    `),o(50,"span",18),e(51," | "),a(),e(52,`
                    `),p(53,"span",19),e(54,`
                    `),C(55,Pe,3,1),a(),e(56,`
                `),o(57,"th",20),e(58,`
                    `),p(59,"span",21),e(60,`
                `),a(),e(61,`
                `),p(62,"th",22),e(63,`
            `),a(),e(64,`
        `),a(),e(65,`
        `),o(66,"tbody"),e(67,`
            `),K(68,Ge,34,15,null,null,r.trackId,!0),a(),e(70,`
    `),a(),e(71,`
    `),o(72,"div",23),e(73,`
        `),o(74,"ngb-pagination",24),b("pageChange",function(c){return F(r.state.page,c)||(r.state.page=c),c}),y("pageChange",function(c){return r.onPageChange(c)}),a(),e(75,`
    `),a(),e(76,`
`),a(),e(77,`
`)),n&2&&(s(6),S("ngModel",r.searchTerm),s(4),m("checked",r.isCourseFilter)("disabled",!r.isExamFilter),s(7),m("checked",r.isExamFilter)("disabled",!r.isCourseFilter),s(5),v(r.loading?22:-1),s(6),S("predicate",r.sortedColumn)("ascending",r.listSorting),s(7),m("icon",r.faSort),s(7),m("icon",r.faSort),s(3),v(r.exerciseType===r.ExerciseType.PROGRAMMING?45:-1),s(3),m("hidden",!r.isCourseFilter),s(2),m("hidden",!(r.isCourseFilter&&r.isExamFilter)),s(3),m("hidden",!r.isExamFilter),s(2),v(r.isCourseFilter&&r.isExamFilter?-1:55),s(2),m("hidden",!(r.isCourseFilter&&r.isExamFilter)),s(11),H(r.content.resultsOnPage),s(6),m("maxSize",10)("rotate",!0)("collectionSize",r.total),S("page",r.state.page),m("pageSize",r.state.pageSize))},dependencies:[L,N,Y,$,ie,Ee,Ce,ue,xe,M,le,be],encapsulation:2})}return t})();var Le=Ne(we());var je=(()=>{class t{activeModal=x(w);alertService=x(ge);exerciseType;exercise;titleKey;fileForImport;faUpload=de;ngOnInit(){this.titleKey=this.exerciseType===u.FILE_UPLOAD?"artemisApp.fileUploadExercise.importFromFile.title":`artemisApp.${this.exerciseType}Exercise.importFromFile.title`}uploadExercise(){return P(this,null,function*(){let i=new RegExp(".*.json"),r=(yield Le.default.loadAsync(this.fileForImport)).file(i);if(r.length!==1){this.alertService.error("artemisApp.programmingExercise.importFromFile.noExerciseDetailsJsonAtRootLevel");return}let l=yield r[0].async("string"),c=JSON.parse(l);if(c.type!==this.exerciseType){this.alertService.error("artemisApp.exercise.importFromFile.exerciseTypeDoesntMatch");return}switch(this.exerciseType){case u.PROGRAMMING:this.exercise=JSON.parse(l);let T=this.exercise;T.buildConfig||(T.buildConfig=fe(c)),T.auxiliaryRepositories&&T.auxiliaryRepositories.forEach((Je,Ae)=>{T.auxiliaryRepositories[Ae].id=void 0}),this.exercise=T;break;default:this.alertService.error("artemisApp.exercise.importFromFile.notSupportedExerciseType",{exerciseType:this.exerciseType});return}this.exercise.id=void 0,this.exercise.zipFileForImport=this.fileForImport,this.openImport(this.exercise)})}setFileForExerciseImport(i){if(i.target.files.length){let n=i.target.files;if(n.length!=1){this.alertService.error("artemisApp.programmingExercise.importFromFile.fileCountError");return}let r=n[0];if(r.name.toLowerCase().endsWith(".zip"))if(r.size>20971520){this.alertService.error("artemisApp.programmingExercise.importFromFile.fileTooBigError",{fileName:r.name});return}else this.fileForImport=r;else{this.alertService.error("artemisApp.programmingExercise.importFromFile.fileExtensionError");return}}}openImport(i){this.activeModal.close(i)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=I({type:t,selectors:[["jhi-exercise-import-from-file"]],inputs:{exerciseType:"exerciseType",exercise:"exercise"},decls:9,vars:3,consts:[[1,"modal-body"],["type","file","accept","application/zip",2,"margin-right","-10px","padding-right","-10px",3,"change"],["id","upload-exercise-btn",3,"onClick","disabled","icon","title"],["text","artemisApp.programmingExercise.importFromFile.description",2,"margin-left","15px"]],template:function(n,r){n&1&&(o(0,"div",0),e(1,`
    `),o(2,"input",1),y("change",function(c){return r.setFileForExerciseImport(c)}),a(),e(3,`
    `),o(4,"jhi-button",2),y("onClick",function(){return r.uploadExercise()}),a(),e(5,`
    `),p(6,"jhi-help-icon",3),e(7,`
`),a(),e(8,`
`)),n&2&&(s(4),m("disabled",r.fileForImport===void 0)("icon",r.faUpload)("title","artemisApp.programmingExercise.importFromFile.uploadForImport"))},dependencies:[M,he],encapsulation:2})}return t})();function ze(t,d){if(t&1&&(e(0,`
            `),p(1,"jhi-exercise-import",8),e(2,`
        `)),t&2){let i=g();s(),m("exerciseType",i.exerciseType)}}function Ke(t,d){if(t&1&&(e(0,`
            `),p(1,"jhi-exercise-import-from-file",8),e(2,`
        `)),t&2){let i=g();s(),m("exerciseType",i.exerciseType)}}var Re=(()=>{class t{activeTab=1;exerciseType;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=I({type:t,selectors:[["jhi-exercise-import-tabs"]],inputs:{exerciseType:"exerciseType"},decls:20,vars:4,consts:[["nav","ngbNav"],["ngbNav","",1,"nav-tabs",3,"activeIdChange","activeId"],[3,"ngbNavItem"],["id","tab1","ngbNavLink","","jhiTranslate","artemisApp.exercise.import.tabTitle"],["ngbNavContent",""],["id","tab2",3,"ngbNavItem"],["ngbNavLink","","jhiTranslate","artemisApp.exercise.importFromFile.tabTitle"],[1,"mt-2",3,"ngbNavOutlet"],[3,"exerciseType"]],template:function(n,r){if(n&1){let l=A();o(0,"ul",1,0),b("activeIdChange",function(T){return j(l),F(r.activeTab,T)||(r.activeTab=T),R(T)}),e(2,`
    `),o(3,"li",2),e(4,`
        `),p(5,"a",3),e(6,`
        `),C(7,ze,3,1,"ng-template",4),e(8,`
    `),a(),e(9,`
    `),o(10,"li",5),e(11,`
        `),p(12,"a",6),e(13,`
        `),C(14,Ke,3,1,"ng-template",4),e(15,`
    `),a(),e(16,`
`),a(),e(17,`

`),p(18,"div",7),e(19,`
`)}if(n&2){let l=J(1);S("activeId",r.activeTab),s(3),m("ngbNavItem",1),s(7),m("ngbNavItem",2),s(8),m("ngbNavOutlet",l)}},dependencies:[se,ae,oe,me,pe,L,ne,O,je,ce],encapsulation:2})}return t})();function He(t,d){if(t&1&&(e(0,`
        `),p(1,"jhi-exercise-import-tabs",3),e(2,`
    `)),t&2){let i=g();s(),m("exerciseType",i.exerciseType)}}function Ve(t,d){if(t&1&&(e(0,`
        `),p(1,"jhi-exercise-import",4),e(2,`
    `)),t&2){let i=g();s(),m("exerciseType",i.exerciseType)("programmingLanguage",i.programmingLanguage)}}var ji=(()=>{class t{activeModal=x(w);ExerciseType=u;exerciseType;titleKey;programmingLanguage;ngOnInit(){this.programmingLanguage?this.titleKey="artemisApp.programmingExercise.configureGrading.categories.importLabel":this.exerciseType===u.FILE_UPLOAD?this.titleKey="artemisApp.fileUploadExercise.home.importLabel":this.titleKey=`artemisApp.${this.exerciseType}Exercise.home.importLabel`}clear(){this.activeModal.dismiss("cancel")}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=I({type:t,selectors:[["jhi-exercise-import-wrapper"]],inputs:{exerciseType:"exerciseType",programmingLanguage:"programmingLanguage"},decls:13,vars:3,consts:[[1,"modal-header"],[1,"modal-title",3,"jhiTranslate"],["type","button","id","cancel-btn","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],["id","exercise-import-tabs",3,"exerciseType"],["id","exercise-import",3,"exerciseType","programmingLanguage"]],template:function(n,r){n&1&&(o(0,"form"),e(1,`
    `),o(2,"div",0),e(3,`
        `),p(4,"h4",1),e(5,`
        `),o(6,"button",2),y("click",function(){return r.clear()}),a(),e(7,`
    `),a(),e(8,`
    `),e(9,`
    `),C(10,He,3,1)(11,Ve,3,2),a(),e(12,`
`)),n&2&&(s(4),V("jhiTranslate",r.titleKey),s(6),v(r.exerciseType===r.ExerciseType.PROGRAMMING&&!r.programmingLanguage?10:-1),s(),v(r.exerciseType!==r.ExerciseType.PROGRAMMING||r.programmingLanguage?11:-1))},dependencies:[N,re,ee,te,L,Re,O],encapsulation:2})}return t})();export{ji as a};
//# sourceMappingURL=chunk-XHKY56WD.js.map
