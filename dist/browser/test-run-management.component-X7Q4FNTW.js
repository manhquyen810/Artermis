import{a as Ee}from"./chunk-HUX6AUUW.js";import{a as k}from"./chunk-VPHPBAVR.js";import{a as ve}from"./chunk-OTCBNILH.js";import{a as Te}from"./chunk-BIK4CL5A.js";import{a as be,b as Se}from"./chunk-VRAVBLUK.js";import{b as Ce}from"./chunk-T624HJJL.js";import"./chunk-HQTS6JOY.js";import"./chunk-HMZID6NQ.js";import"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import"./chunk-PUNMJFMR.js";import{c as I}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-PZ7IDTIM.js";import{c as he}from"./chunk-JNO6DNVW.js";import"./chunk-EELXLOHY.js";import{K as ce,u as le,v as de}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{A as ae,B as re,C as oe,K as se,L as me,c as U,e as E,h as X,i as Y,j as Z,l as P,n as ee,o as te,s as ne,v as ie}from"./chunk-WA5GEAJB.js";import"./chunk-5GXY5RYT.js";import{a as ge}from"./chunk-K3W6YFKH.js";import{c as _e}from"./chunk-JXJXC4DZ.js";import{d as fe}from"./chunk-EDXSOKK5.js";import{b as ue}from"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Oc as xe,Qa as pe}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as D}from"./chunk-U54OSGNH.js";import{f as J,i as K}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as s,Dc as b,Ea as _,Ma as h,Mc as f,Na as C,Oc as d,Qd as F,Rc as V,Tb as A,Zb as u,ab as T,dd as e,ed as g,f as $,fd as j,kc as l,ld as O,mc as R,md as G,nd as q,pd as H,rc as W,rd as L,sc as x,sd as z,td as Q,uc as B,vc as y,wc as M,xc as i,yc as a,yd as S,zc as m,zd as v}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";function ke(r,c){if(r&1){let t=b();e(0,`
                                            `),i(1,"tr",24),f("click",function(){let o=h(t).$implicit,p=d().$implicit,w=d();return C(w.onSelectExercise(o,p))}),e(2,`
                                                `),i(3,"td"),e(4),a(),e(5,`
                                                `),i(6,"td"),e(7),a(),e(8,`
                                                `),i(9,"td"),e(10),a(),e(11,`
                                                `),i(12,"td"),e(13),a(),e(14,`
                                            `),a(),e(15,`
                                        `)}if(r&2){let t=c.$implicit,n=d().$implicit,o=d();s(),R("active",n.id&&t.id===(o.testRunConfiguration[n.id]==null?null:o.testRunConfiguration[n.id].id)),l("id","exercise-"+t.id),s(3),g(t.id),s(3),g(t.title),s(3),g(t.difficulty),s(3),g(t.type)}}function we(r,c){if(r&1&&(e(0,`
                        `),i(1,"tr"),e(2,`
                            `),i(3,"td"),e(4,`
                                `),i(5,"b"),e(6),a(),e(7,`
                            `),a(),e(8,`
                            `),i(9,"td"),e(10,`
                                `),i(11,"table",20),e(12,`
                                    `),i(13,"thead"),e(14,`
                                        `),i(15,"tr"),e(16,`
                                            `),i(17,"th"),e(18,"#"),a(),e(19,`
                                            `),m(20,"th",21),e(21,`
                                            `),m(22,"th",22),e(23,`
                                            `),m(24,"th",23),e(25,`
                                        `),a(),e(26,`
                                    `),a(),e(27,`
                                    `),i(28,"tbody"),e(29,`
                                        `),y(30,ke,16,7,null,null,B),a(),e(32,`
                                `),a(),e(33,`
                            `),a(),e(34,`
                        `),a(),e(35,`
                    `)),r&2){let t=c.$implicit;s(6),j(" ",t.title," "),s(24),M(t.exercises)}}var Re=(()=>{class r{activeModal=_(le);artemisDurationFromSecondsPipe=_(k);exam;workingTimeForm;testRunConfiguration={};ngOnInit(){this.initWorkingTimeForm(),this.ignoreEmptyExerciseGroups();for(let t of this.exam.exerciseGroups)t.exercises?.length===1&&this.onSelectExercise(t.exercises[0],t)}createTestRun(){if(this.testRunConfigured){let t=new Ee;t.exam=this.exam,t.exercises=[];for(let n of this.exam.exerciseGroups)t.exercises.push(this.testRunConfiguration[n.id]);t.workingTime=this.workingTimeForm.controls.minutes.value*60+this.workingTimeForm.controls.seconds.value,this.activeModal.close(t)}}onSelectExercise(t,n){this.testRunConfiguration[n.id]=t}get testRunConfigured(){return Object.keys(this.testRunConfiguration).length===this.exam.exerciseGroups?.length}cancel(){this.activeModal.dismiss("cancel")}ignoreEmptyExerciseGroups(){let t=[];for(let n of this.exam.exerciseGroups)n.exercises&&n.exercises.length>0&&t.push(n);this.exam.exerciseGroups=t}initWorkingTimeForm(){let t=this.exam.endDate?.diff(this.exam.startDate,"seconds"),o=this.artemisDurationFromSecondsPipe.transform(t??0).split(":");this.workingTimeForm=new Z({minutes:new P({value:parseInt(o[0]?o[0]:"0",10),disabled:!!this.exam.visible},[E.min(0),E.required]),seconds:new P({value:parseInt(o[1]?o[1]:"0",10),disabled:!!this.exam.visible},[E.min(0),E.max(59),E.required])})}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=A({type:r,selectors:[["jhi-create-test-run-modal"]],features:[H([k])],decls:60,vars:2,consts:[[1,"modal-content"],[1,"modal-header"],["id","createTestRunModal","jhiTranslate","artemisApp.examManagement.testRun.setup",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],[1,"mb-3"],["jhiTranslate","artemisApp.studentExams.workingTime"],["jhiTranslate","artemisApp.examManagement.testRun.setWorkingTime"],[1,"d-flex","gap-1","align-items-center",3,"formGroup"],["formControlName","minutes","id","workingTimeMinutes","type","number","min","0","step","1","required","",1,"form-control",2,"width","70px","height","35px"],["formControlName","seconds","id","workingTimeSeconds","type","number","min","0","max","59","step","1","required","",1,"form-control",2,"width","70px","height","35px"],["jhiTranslate","artemisApp.exam.exercises"],["jhiTranslate","artemisApp.examManagement.testRun.setupHint"],[1,"table","table-striped"],[1,"thead-dark"],["jhiTranslate","artemisApp.examScores.titleExerciseGroupColumn"],["jhiTranslate","artemisApp.examScores.titleExerciseColumn"],[1,"modal-footer"],["type","button","jhiTranslate","global.form.cancel",1,"btn","btn-secondary",3,"click"],["id","createTestRunButton","type","button","data-dismiss","modal","jhiTranslate","artemisApp.examManagement.testRun.setup",1,"btn","btn-primary",3,"click","disabled"],[1,"table","table-hover","table-striped"],["jhiTranslate","artemisApp.exercise.title"],["jhiTranslate","artemisApp.exercise.difficulty"],["jhiTranslate","artemisApp.exercise.type"],[3,"click","id"]],template:function(n,o){n&1&&(i(0,"div",0),e(1,`
    `),i(2,"div",1),e(3,`
        `),m(4,"h4",2),e(5,`
        `),i(6,"button",3),f("click",function(){return o.cancel()}),a(),e(7,`
    `),a(),e(8,`
    `),i(9,"div",4),e(10,`
        `),i(11,"div",5),e(12,`
            `),i(13,"h5"),m(14,"span",6),a(),e(15,`
            `),m(16,"p",7),e(17,`
            `),i(18,"form",8),e(19,`
                `),m(20,"input",9),e(21,`
                :
                `),m(22,"input",10),e(23,`
            `),a(),e(24,`
        `),a(),e(25,`
        `),i(26,"div",5),e(27,`
            `),m(28,"h5",11),e(29,`
            `),m(30,"p",12),e(31,`
            `),i(32,"table",13),e(33,`
                `),i(34,"thead",14),e(35,`
                    `),i(36,"tr"),e(37,`
                        `),m(38,"th",15),e(39,`
                        `),m(40,"th",16),e(41,`
                    `),a(),e(42,`
                `),a(),e(43,`
                `),i(44,"tbody"),e(45,`
                    `),y(46,we,36,1,null,null,B),a(),e(48,`
            `),a(),e(49,`
        `),a(),e(50,`
        `),i(51,"div",17),e(52,`
            `),i(53,"button",18),f("click",function(){return o.cancel()}),a(),e(54,`
            `),i(55,"button",19),f("click",function(){return o.createTestRun()}),a(),e(56,`
        `),a(),e(57,`
    `),a(),e(58,`
`),a(),e(59,`
`)),n&2&&(s(18),l("formGroup",o.workingTimeForm),s(28),M(o.exam.exerciseGroups),s(9),l("disabled",!o.testRunConfigured))},dependencies:[D,se,ee,U,te,X,Y,oe,re,ae,me,ne,ie],styles:[".table[_ngcontent-%COMP%]   tr.active[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:#3e8acc;color:#fff}"]})}return r})();var Ae=(r,c)=>["/course-management",r,"exams",c,"test-runs","assess"],ye=r=>[r],je=(r,c,t)=>["/course-management",r,"exams",c,"test-runs",t];function Fe(r,c){r&1&&(e(0,`
                                `),m(1,"span",11),e(2,`
                            `))}function Ie(r,c){if(r&1){let t=b();e(0,`
                        `),i(1,"button",9),f("click",function(){h(t);let o=d();return C(o.openCreateTestRunModal())}),e(2,`
                            `),u(3,Fe,3,0),m(4,"span",10),e(5,`
                        `),a(),e(6,`
                    `)}if(r&2){let t=d();s(),l("disabled",t.isLoading()||!t.examContainsExercises()),s(2),x(t.isLoading()?3:-1)}}function De(r,c){if(r&1&&(e(0,`
                            `),i(1,"a",12),e(2,`
                                `),m(3,"span",13),e(4,`
                            `),a(),e(5,`
                        `)),r&2){let t,n=d(2);s(),R("disabled",n.isLoading()||!n.testRunCanBeAssessed()),l("routerLink",z(3,Ae,(t=n.course())==null?null:t.id,(t=n.exam())==null?null:t.id))}}function Be(r,c){if(r&1&&(e(0,`
                    `),i(1,"div",5),S(2,"artemisTranslate"),e(3,`
                        `),u(4,De,6,6),a(),e(5,`
                `)),r&2){let t,n=d();s(),l("ngbTooltip",v(2,3,"artemisApp.examManagement.testRun.assessTestRunDisabled"))("disableTooltip",n.testRunCanBeAssessed()),s(3),x((t=n.course())!=null&&t.isAtLeastInstructor?4:-1)}}function Ve(r,c){r&1&&(e(0,`
                                                            `),m(1,"span",41),e(2,`
                                                        `))}function Ge(r,c){r&1&&(e(0,`
                                                            `),m(1,"span",42),e(2,`
                                                        `))}function Le(r,c){if(r&1&&(e(0,`
                                                    `),i(1,"a",40),e(2,`
                                                        `),u(3,Ve,3,0)(4,Ge,3,0),a(),e(5,`
                                                `)),r&2){let t=d(3).$implicit;s(),l("routerLink",L(3,ye,"../test-runs/"+t.id+"/conduction")),s(2),x(t.started?-1:3),s(),x(t.started?4:-1)}}function Pe(r,c){if(r&1&&(e(0,`
                                                    `),i(1,"a",43),e(2,`
                                                        `),m(3,"span",44),e(4,`
                                                    `),a(),e(5,`
                                                `)),r&2){let t=d(3).$implicit;s(),l("routerLink","../test-runs/"+t.id+"/summary")}}function Ne(r,c){if(r&1&&(e(0,`
                                                `),u(1,Le,6,5)(2,Pe,6,1)),r&2){let t=d(2).$implicit;s(),x(t.submitted?2:1)}}function $e(r,c){if(r&1&&(e(0,`
                                                `),i(1,"a",43),e(2,`
                                                    `),m(3,"span",44),e(4,`
                                                `),a(),e(5,`
                                            `)),r&2){let t=d(2).$implicit;s(),l("routerLink","../test-runs/"+t.id+"/summary")}}function We(r,c){if(r&1){let t=b();e(0,`
                                                `),i(1,"button",45),S(2,"artemisTranslate"),f("delete",function(){h(t);let o=d(2).$implicit,p=d(2);return C(p.deleteTestRun(o.id))}),e(3,`
                                                    `),m(4,"fa-icon",19),e(5,`
                                                `),a(),e(6,`
                                            `)}if(r&2){let t=d(4);s(),l("entityTitle",v(2,3,"artemisApp.examManagement.testRun.testRun"))("dialogError",t.dialogError$),s(3),l("icon",t.faTimes)}}function Oe(r,c){if(r&1&&(e(0,`
                                        `),i(1,"div",37),e(2,`
                                            `),u(3,Ne,3,1)(4,$e,6,1),i(5,"a",38),e(6,`
                                                `),m(7,"span",39),e(8,`
                                            `),a(),e(9,`
                                            `),u(10,We,7,5),a(),e(11,`
                                    `)),r&2){let t,n=d().$implicit,o=d(2);s(3),x((n.user==null?null:n.user.id)===((t=o.instructor())==null?null:t.id)?3:4),s(2),R("disabled",n.started),l("routerLink",Q(5,je,o.course().id,o.exam().id,n.id)),s(5),x(n.id?10:-1)}}function qe(r,c){if(r&1&&(e(0,`
                        `),i(1,"tr",29),e(2,`
                            `),i(3,"td",30),e(4,`
                                `),i(5,"a",31),e(6),a(),e(7,`
                            `),a(),e(8,`
                            `),i(9,"td"),e(10,`
                                `),i(11,"a"),e(12),a(),e(13,`
                            `),a(),e(14,`
                            `),i(15,"td",32),e(16),S(17,"artemisDurationFromSeconds"),a(),e(18,`
                            `),m(19,"td",33),e(20,`
                            `),m(21,"td",34),e(22,`
                            `),i(23,"td"),e(24),S(25,"artemisDate"),a(),e(26,`
                            `),i(27,"td",35),e(28,`
                                `),i(29,"div",36),e(30,`
                                    `),u(31,Oe,12,9),a(),e(32,`
                            `),a(),e(33,`
                        `),a(),e(34,`
                    `)),r&2){let t,n=c.$implicit,o=d(2);s(),l("id","testrun-"+n.id),s(4),l("routerLink",L(14,ye,n.id)),s(),g(n.id),s(6),j(" ",(n.user==null?null:n.user.name)||"--",""),s(4),g(v(17,10,n.workingTime||0)),s(3),V("jhiTranslate",n.started?"global.generic.yes":"global.generic.no"),s(2),V("jhiTranslate",n.submitted?"global.generic.yes":"global.generic.no"),s(3),g(v(25,12,n.submissionDate)),s(3),l("width",350),s(4),x((t=o.course())!=null&&t.isAtLeastInstructor?31:-1)}}function He(r,c){if(r&1){let t=b();e(0,`
        `),i(1,"div",14),e(2,`
            `),i(3,"table",15),e(4,`
                `),i(5,"thead"),e(6,`
                    `),i(7,"tr",16),q("predicateChange",function(o){h(t);let p=d();return G(p.predicate,o)||(p.predicate=o),C(o)})("ascendingChange",function(o){h(t);let p=d();return G(p.ascending,o)||(p.ascending=o),C(o)}),f("sortChange",function(){h(t);let o=d();return C(o.sortRows())}),e(8,`
                        `),i(9,"th",17),e(10,`
                            `),m(11,"span",18),e(12,`
                            `),m(13,"fa-icon",19),e(14,`
                        `),a(),e(15,`
                        `),i(16,"th",17),e(17,`
                            `),m(18,"span",20),e(19,`
                            `),m(20,"fa-icon",19),e(21,`
                        `),a(),e(22,`
                        `),i(23,"th",21),e(24,`
                            `),m(25,"span",22),e(26,`
                            `),m(27,"fa-icon",19),e(28,`
                        `),a(),e(29,`
                        `),i(30,"th",23),e(31,`
                            `),m(32,"span",24),e(33,`
                            `),m(34,"fa-icon",19),e(35,`
                        `),a(),e(36,`
                        `),i(37,"th",25),e(38,`
                            `),m(39,"span",26),e(40,`
                            `),m(41,"fa-icon",19),e(42,`
                        `),a(),e(43,`
                        `),i(44,"th",27),e(45,`
                            `),m(46,"span",28),e(47,`
                            `),m(48,"fa-icon",19),e(49,`
                        `),a(),e(50,`
                        `),m(51,"th"),e(52,`
                    `),a(),e(53,`
                `),a(),e(54,`
                `),i(55,"tbody"),e(56,`
                    `),y(57,qe,35,16,null,null,W().trackId,!0),a(),e(59,`
            `),a(),e(60,`
        `),a(),e(61,`
    `)}if(r&2){let t=d();s(7),O("predicate",t.predicate)("ascending",t.ascending),s(6),l("icon",t.faSort),s(7),l("icon",t.faSort),s(7),l("icon",t.faSort),s(7),l("icon",t.faSort),s(7),l("icon",t.faSort),s(7),l("icon",t.faSort),s(9),M(t.testRuns())}}var bt=(()=>{class r{route=_(J);alertService=_(_e);examManagementService=_(Te);accountService=_(ue);sortService=_(ve);modalService=_(de);course=T(void 0);exam=T(void 0);isLoading=T(!1);isExamStarted=F(()=>this.exam()?.started||!1);testRuns=T([]);instructor=T(void 0);predicate=T("id");ascending=T(!0);testRunCanBeAssessed=F(()=>{let t=this.testRuns(),n=this.instructor();return t.some(o=>o.user?.id===n?.id&&o.submitted)});examContainsExercises=F(()=>{let t=this.exam();return!!t?.exerciseGroups&&t.exerciseGroups.some(n=>n.exercises&&n.exercises.length>0)});dialogErrorSource=new $;dialogError$=this.dialogErrorSource.asObservable();faSort=pe;faTimes=xe;ngOnInit(){this.examManagementService.find(Number(this.route.snapshot.paramMap.get("courseId")),Number(this.route.snapshot.paramMap.get("examId")),!1,!0).subscribe({next:t=>{this.exam.set(t.body),this.course.set(this.exam().course);let n=this.course();n.isAtLeastInstructor=this.accountService.isAtLeastInstructorInCourse(n),this.examManagementService.findAllTestRunsForExam(n.id,this.exam().id).subscribe({next:o=>{this.testRuns.set(o.body)},error:o=>I(this.alertService,o)})},error:t=>I(this.alertService,t)}),this.accountService.identity().then(t=>{t&&this.instructor.set(t)})}openCreateTestRunModal(){let t=this.modalService.open(Re,{size:"lg",backdrop:"static"});t.componentInstance.exam=this.exam(),t.result.then(n=>{this.examManagementService.createTestRun(this.course().id,this.exam().id,n).subscribe({next:o=>{o.body!=null&&this.testRuns.update(p=>[...p,o.body])},error:o=>{I(this.alertService,o)}})}).catch(()=>{})}deleteTestRun(t){this.examManagementService.deleteTestRun(this.course().id,this.exam().id,t).subscribe({next:()=>{this.testRuns.update(n=>n.filter(o=>o.id!==t)),this.dialogErrorSource.next("")},error:n=>this.dialogErrorSource.next(n.message)})}trackId(t,n){return n.id}sortRows(){this.sortService.sortByProperty(this.testRuns(),this.predicate(),this.ascending())}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=A({type:r,selectors:[["jhi-test-run-management"]],decls:33,vars:8,consts:[[1,"d-flex"],[1,"mb-3"],["jhiTranslate","artemisApp.examManagement.testRun.title"],[1,"ms-auto"],[1,"d-flex","mb-1"],[3,"ngbTooltip","disableTooltip"],[2,"padding-bottom","10px"],["jhiTranslate","artemisApp.examManagement.testRun.text"],["jhiTranslate","artemisApp.examManagement.testRun.reminderToDelete",1,"alert","alert-warning"],["id","createTestRunButton",1,"btn","btn-primary","btn-sm","me-1","mb-1",2,"height","40px",3,"click","disabled"],["jhiTranslate","artemisApp.examManagement.testRun.setup"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[1,"btn","btn-primary","btn-sm","me-1","mb-1",2,"height","40px","display","inline-flex","align-items","center",3,"routerLink"],["jhiTranslate","artemisApp.examManagement.testRun.assess"],[1,"table-responsive"],[1,"table","table-striped"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["jhiSortBy","id",1,"d-none","d-md-table-cell"],["jhiTranslate","global.field.id"],[3,"icon"],["jhiTranslate","artemisApp.examManagement.testRun.author"],["jhiSortBy","workingTime"],["jhiTranslate","artemisApp.studentExams.workingTime"],["jhiSortBy","started",1,"d-none","d-md-table-cell"],["jhiTranslate","artemisApp.studentExams.started"],["jhiSortBy","submitted",1,"d-none","d-md-table-cell"],["jhiTranslate","artemisApp.studentExams.submitted"],["jhiSortBy","submissionDate",1,"d-none","d-md-table-cell"],["jhiTranslate","artemisApp.studentExams.submissionDate"],[3,"id"],[1,"testrun-id","d-none","d-md-table-cell"],[3,"routerLink"],[1,"working-time"],[1,"started",3,"jhiTranslate"],[1,"submitted",3,"jhiTranslate"],[3,"width"],[1,"w-100","text-end"],[1,"btn-group"],[1,"manage-worktime","btn","btn-primary","btn-sm","me-1","mb-1",3,"routerLink"],["jhiTranslate","artemisApp.examManagement.testRun.manage"],[1,"start-testrun","btn","btn-primary","btn-sm","me-1","mb-1",3,"routerLink"],["jhiTranslate","artemisApp.course.startDate"],["jhiTranslate","artemisApp.examParticipation.continueAfterHandInEarly"],[1,"btn","btn-primary","btn-sm","me-1","mb-1",3,"routerLink"],["jhiTranslate","artemisApp.exam.summary"],["jhiDeleteButton","","deleteQuestion","artemisApp.examManagement.testRun.delete.question","deleteConfirmationText","artemisApp.examManagement.testRun.delete.typeNameToConfirm",1,"delete-testrun","btn","btn-primary","btn-sm","me-1","mb-1",3,"delete","entityTitle","dialogError"]],template:function(n,o){if(n&1&&(i(0,"div"),e(1,`
    `),i(2,"div",0),e(3,`
        `),i(4,"div",1),e(5,`
            `),i(6,"h2"),m(7,"span",2),e(8),a(),e(9,`
        `),a(),e(10,`
        `),i(11,"div",3),e(12,`
            `),i(13,"div",4),e(14,`
                `),i(15,"div",5),S(16,"artemisTranslate"),e(17,`
                    `),u(18,Ie,7,2),a(),e(19,`
                `),u(20,Be,6,5),a(),e(21,`
        `),a(),e(22,`
    `),a(),e(23,`
    `),i(24,"div",6),e(25,`
        `),m(26,"span",7),e(27,`
    `),a(),e(28,`
    `),m(29,"div",8),e(30,`
    `),u(31,He,62,8),a(),e(32,`
`)),n&2){let p,w,N;s(8),g((p=o.exam())==null?null:p.title),s(7),l("ngbTooltip",v(16,6,"artemisApp.examManagement.testRun.createTestRunDisabled"))("disableTooltip",o.examContainsExercises()),s(3),x((w=o.course())!=null&&w.isAtLeastInstructor?18:-1),s(2),x(o.exam()&&!((N=o.exam())!=null&&N.testExam)?20:-1),s(11),x(o.testRuns()?31:-1)}},dependencies:[D,ce,K,be,Se,fe,Ce,he,ge,k],encapsulation:2})}return r})();export{bt as TestRunManagementComponent};
//# sourceMappingURL=test-run-management.component-X7Q4FNTW.js.map
