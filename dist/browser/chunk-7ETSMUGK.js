import{a as b}from"./chunk-TWQT4PWU.js";import{a as ie,b as ne}from"./chunk-NV4PYWIT.js";import{a as $}from"./chunk-BIK4CL5A.js";import{a as ee,b as te}from"./chunk-VRAVBLUK.js";import{d as Z}from"./chunk-O26CMRR4.js";import{c as y}from"./chunk-5MVJAZRV.js";import{D as H,M as Q}from"./chunk-VZRSC3LP.js";import{K,c as q,h as N,i as L,k as z,m as R,n as U}from"./chunk-WA5GEAJB.js";import{c as X}from"./chunk-JXJXC4DZ.js";import{d as J}from"./chunk-EDXSOKK5.js";import{a as Y}from"./chunk-U54OSGNH.js";import{O}from"./chunk-IOA4DPXY.js";import{Db as m,Dc as h,Ea as E,Ma as u,Mb as j,Mc as C,Na as _,Oc as p,Qa as M,Tb as G,Xb as A,Zb as g,ab as S,ad as D,bd as W,dd as e,fd as B,kc as c,ld as I,mc as V,md as f,nd as v,rc as k,sc as d,vc as F,wc as P,xc as o,ya as w,yc as a,z as T,zc as l}from"./chunk-5LC5EQRR.js";var re=(()=>{class i extends ie{http=E(O);static RESOURCE_URL="api/exam/exams";search(t,r){let n=this.createHttpParams(t);return this.http.get(`${i.RESOURCE_URL}?withExercises=${r.withExercises}`,{params:n,observe:"response"}).pipe(T(s=>s&&s.body))}static \u0275fac=(()=>{let t;return function(n){return(t||(t=M(i)))(n||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ae(i,x){i&1&&(e(0,`
            `),l(1,"h4",2),e(2,`
        `))}function me(i,x){i&1&&(e(0,`
            `),l(1,"h4",3),e(2,`
        `))}function se(i,x){i&1&&(e(0,`
                    `),l(1,"span",22),e(2,`
                `))}function le(i,x){i&1&&(e(0,`
                                    `),l(1,"span",27),e(2,`
                                `))}function pe(i,x){i&1&&(e(0,`
                                    `),l(1,"span",28),e(2,`
                                `))}function ce(i,x){if(i&1){let t=h();e(0,`
                                    `),o(1,"jhi-button",29),C("onClick",function(){u(t);let n=p().$implicit,s=p(2);return _(s.selectImport(n))}),a(),e(2,`
                                `)}i&2&&(m(),c("title","artemisApp.exercise.import.table.doImport"))}function xe(i,x){if(i&1){let t=h();e(0,`
                                    `),o(1,"jhi-button",29),C("onClick",function(){u(t);let n=p().$implicit,s=p(2);return _(s.openExerciseSelection(n))}),a(),e(2,`
                                `)}i&2&&(m(),c("title","artemisApp.examManagement.exerciseGroup.selectExerciseGroup"))}function de(i,x){if(i&1&&(e(0,`
                        `),o(1,"tr",23),e(2,`
                            `),o(3,"td",19),e(4,`
                                `),o(5,"span"),e(6),a(),e(7,`
                            `),a(),e(8,`
                            `),o(9,"td",24),e(10,`
                                `),l(11,"ngb-highlight",25),e(12,`
                            `),a(),e(13,`
                            `),o(14,"td",24),e(15,`
                                `),l(16,"ngb-highlight",25),e(17,`
                            `),a(),e(18,`
                            `),o(19,"td",26),e(20,`
                                `),g(21,le,3,0)(22,pe,3,0),a(),e(23,`
                            `),o(24,"td",19),e(25,`
                                `),g(26,ce,3,1)(27,xe,3,1),a(),e(28,`
                        `),a(),e(29,`
                    `)),i&2){let t=x.$implicit,r=p(2);m(5),V("ngb-highlight",""+t.id===r.searchTerm),m(),B(" ",t.id,""),m(5),c("result",t.title)("term",r.searchTerm),m(5),c("result",t.course.title)("term",r.searchTerm),m(5),d(t.testExam?-1:21),m(),d(t.testExam?22:-1),m(4),d(r.subsequentExerciseGroupSelection()?-1:26),m(),d(r.subsequentExerciseGroupSelection()?27:-1)}}function ue(i,x){if(i&1){let t=h();e(0,`
        `),o(1,"div",4),e(2,`
            `),o(3,"div",5),e(4,`
                `),l(5,"span",6),e(6,`:
                `),o(7,"input",7),v("ngModelChange",function(n){u(t);let s=p();return f(s.searchTerm,n)||(s.searchTerm=n),_(n)}),a(),e(8,`
                `),g(9,se,3,0),a(),e(10,`
            `),o(11,"table",8),e(12,`
                `),o(13,"thead",9),e(14,`
                    `),o(15,"tr",10),v("predicateChange",function(n){u(t);let s=p();return f(s.sortedColumn,n)||(s.sortedColumn=n),_(n)})("ascendingChange",function(n){u(t);let s=p();return f(s.listSorting,n)||(s.listSorting=n),_(n)}),C("sortChange",function(){u(t);let n=p();return _(n.sortRows())}),e(16,`
                        `),o(17,"th",11),e(18,`
                            `),o(19,"span"),e(20,"#"),a(),e(21,`
                            `),l(22,"fa-icon",12),e(23,`
                        `),a(),e(24,`
                        `),o(25,"th",13),e(26,`
                            `),l(27,"span",14),e(28,`
                            `),l(29,"fa-icon",12),e(30,`
                        `),a(),e(31,`
                        `),o(32,"th",15),e(33,`
                            `),l(34,"span",16),e(35,`
                            `),l(36,"fa-icon",12),e(37,`
                        `),a(),e(38,`
                        `),o(39,"th",17),e(40,`
                            `),l(41,"span",18),e(42,`
                            `),l(43,"fa-icon",12),e(44,`
                        `),a(),e(45,`
                        `),l(46,"th",19),e(47,`
                    `),a(),e(48,`
                `),a(),e(49,`
                `),o(50,"tbody"),e(51,`
                    `),F(52,de,30,11,null,null,k().trackId,!0),a(),e(54,`
            `),a(),e(55,`
            `),o(56,"div",20),e(57,`
                `),o(58,"ngb-pagination",21),v("pageChange",function(n){u(t);let s=p();return f(s.state.page,n)||(s.state.page=n),_(n)}),C("pageChange",function(n){u(t);let s=p();return _(s.onPageChange(n))}),a(),e(59,`
            `),a(),e(60,`
        `),a(),e(61,`
    `)}if(i&2){let t=p();m(7),I("ngModel",t.searchTerm),m(2),d(t.loading?9:-1),m(6),I("predicate",t.sortedColumn)("ascending",t.listSorting),m(7),c("icon",t.faSort),m(7),c("icon",t.faSort),m(7),c("icon",t.faSort),m(7),c("icon",t.faSort),m(9),P(t.content.resultsOnPage),m(6),c("maxSize",10)("rotate",!0)("collectionSize",t.total),I("page",t.state.page),c("pageSize",t.state.pageSize)}}function _e(i,x){i&1&&(e(0,`
                    `),l(1,"p",33),e(2,`
                `))}function ge(i,x){i&1&&(e(0,`
                    `),l(1,"p",34),e(2,`
                `))}function Ce(i,x){if(i&1){let t=h();e(0,`
        `),o(1,"div",4),e(2,`
            `),o(3,"div",5),e(4,`
                `),g(5,_e,3,0)(6,ge,3,0),a(),e(7,`
            `),l(8,"jhi-exam-exercise-import",30),e(9,`
        `),a(),e(10,`
        `),o(11,"div",31),e(12,`
            `),o(13,"jhi-button",32),C("onClick",function(){u(t);let n=p();return _(n.performImportOfExerciseGroups())}),a(),e(14,`
        `),a(),e(15,`
    `)}if(i&2){let t=p();m(5),d(t.isImportingExercises?-1:5),m(),d(t.isImportingExercises?6:-1),m(2),c("exam",t.exam)("importInSameCourse",t.isImportInSameCourse),m(5),c("title","artemisApp.exercise.import.table.doImport")("disabled",t.isImportingExercises)("isLoading",t.isImportingExercises)}}var qe=(()=>{class i extends ne{examManagementService=E($);alertService=E(X);subsequentExerciseGroupSelection=S(!1);targetCourseId=S(void 0);targetExamId=S(void 0);examExerciseImportComponent=j.required(b);exam;isImportingExercises=!1;isImportInSameCourse=!1;constructor(){let t=E(re);super(t)}openExerciseSelection(t){this.examManagementService.findWithExercisesAndWithoutCourseId(t.id).subscribe({next:r=>{this.exam=r.body,this.isImportInSameCourse=this.exam.course?.id===this.targetCourseId()},error:r=>y(this.alertService,r)})}performImportOfExerciseGroups(){if(this.subsequentExerciseGroupSelection()&&this.exam&&this.targetExamId()&&this.targetCourseId()){if(!this.examExerciseImportComponent().validateUserInput()){this.alertService.error("artemisApp.examManagement.exerciseGroup.importModal.invalidExerciseConfiguration");return}this.isImportingExercises=!0,this.exam.exerciseGroups=this.examExerciseImportComponent().mapSelectedExercisesToExerciseGroups(),this.examManagementService.importExerciseGroup(this.targetCourseId(),this.targetExamId(),this.exam.exerciseGroups).subscribe({next:t=>{this.isImportingExercises=!1,this.activeModal.close(t.body)},error:t=>{let r=t.error?.errorKey;if(r==="invalidKey"){this.exam.exerciseGroups=t.error.params.exerciseGroups,this.examExerciseImportComponent().updateMapsAfterRejectedImportDueToInvalidProjectKey();let n=t.error.numberOfInvalidProgrammingExercises;this.alertService.error("artemisApp.examManagement.exerciseGroup.importModal.invalidKey",{number:n})}else r==="duplicatedProgrammingExerciseShortName"||r==="duplicatedProgrammingExerciseTitle"?(this.exam.exerciseGroups=t.error.params.exerciseGroups,this.examExerciseImportComponent().updateMapsAfterRejectedImportDueToDuplicatedShortNameOrTitle(),this.alertService.error("artemisApp.examManagement.exerciseGroup.importModal."+r)):y(this.alertService,t);this.isImportingExercises=!1}})}}createOptions(){return{withExercises:this.subsequentExerciseGroupSelection()}}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=G({type:i,selectors:[["jhi-exam-import"]],viewQuery:function(r,n){r&1&&D(n.examExerciseImportComponent,b,5),r&2&&W()},features:[A],decls:13,vars:4,consts:[[1,"modal-header"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],["jhiTranslate","artemisApp.examManagement.importExam",1,"modal-title"],["jhiTranslate","artemisApp.examManagement.exerciseGroup.import",1,"modal-title"],[1,"modal-body"],[1,"form-group","form-inline"],["jhiTranslate","artemisApp.examManagement.import.search"],["type","text","name","searchExcercise",1,"form-control","ms-2",3,"ngModelChange","ngModel"],[1,"table","table-striped","flex"],[1,"thead-dark"],["jhiSort","",1,"flex-row",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["jhiSortBy","ID",1,"col-1"],[3,"icon"],["jhiSortBy","TITLE",1,"col-4"],["jhiTranslate","artemisApp.exercise.import.table.title"],["jhiSortBy","COURSE_TITLE",1,"col-4"],["jhiTranslate","artemisApp.exercise.import.table.course"],["jhiSortBy","EXAM_MODE",1,"col-4"],["jhiTranslate","artemisApp.examManagement.testExam.examMode"],[1,"col-1"],[1,"d-flex","justify-content-between","p-2"],[3,"pageChange","maxSize","rotate","collectionSize","page","pageSize"],["jhiTranslate","artemisApp.exercise.import.loading",1,"ms-3"],[1,"flex-row"],[1,"text-break","col-4"],[3,"result","term"],[1,"text-break","col-2"],["jhiTranslate","artemisApp.examManagement.testExam.realExam",1,"badge","bg-success"],["jhiTranslate","artemisApp.examManagement.testExam.testExam",1,"badge","bg-primary"],[3,"onClick","title"],[3,"exam","importInSameCourse"],[1,"modal-footer"],[3,"onClick","title","disabled","isLoading"],["jhiTranslate","artemisApp.examManagement.exerciseGroup.selectExerciseGroupExplanation"],["jhiTranslate","artemisApp.examManagement.exerciseGroup.importModal.isImporting"]],template:function(r,n){r&1&&(o(0,"form"),e(1,`
    `),o(2,"div",0),e(3,`
        `),g(4,ae,3,0)(5,me,3,0),o(6,"button",1),C("click",function(){return n.clear()}),a(),e(7,`
    `),a(),e(8,`
    `),e(9,`
    `),g(10,ue,62,13)(11,Ce,16,7),a(),e(12,`
`)),r&2&&(m(4),d(n.subsequentExerciseGroupSelection()?-1:4),m(),d(n.subsequentExerciseGroupSelection()?5:-1),m(5),d(n.exam?-1:10),m(),d(n.exam&&n.subsequentExerciseGroupSelection()?11:-1))},dependencies:[K,U,q,N,L,R,z,Y,ee,te,J,Q,Z,H,b],encapsulation:2})}return i})();export{qe as a};
//# sourceMappingURL=chunk-7ETSMUGK.js.map
