import{a as V}from"./chunk-DMHWBHTD.js";import{b as M}from"./chunk-T624HJJL.js";import{a as A}from"./chunk-HMZID6NQ.js";import{a as re,b as oe,d as ae}from"./chunk-O26CMRR4.js";import{a as te,b as ne}from"./chunk-5JBXU6VG.js";import{c as ie}from"./chunk-CK7FH6VF.js";import{a as ee,c as B}from"./chunk-JXJXC4DZ.js";import{d as L}from"./chunk-EDXSOKK5.js";import{A as g,Bb as Y,Ca as W,Lc as J,Oc as K,Qa as H,Tb as Z,Vb as X,ed as w,gb as G,hb as S,nb as Q,rb as T,za as R}from"./chunk-Z4VHWOB5.js";import{a as I}from"./chunk-U54OSGNH.js";import{f as O,h as U,i as $}from"./chunk-M6Z6DKZQ.js";import{Db as r,Dc as z,Ea as f,Ma as m,Mc as E,Na as p,Oc as u,Sc as C,Tb as y,Tc as j,Va as v,Zb as _,dd as i,f as q,fd as k,kc as l,mc as D,pc as h,sc as x,sd as b,uc as F,vc as P,wc as N,xc as s,yc as c,zc as a}from"./chunk-5LC5EQRR.js";var le=(t,o)=>[t,"quiz-exercises",o,"preview"],ue=(t,o)=>[t,"quiz-exercises",o,"solution"],de=(t,o)=>[t,"quiz-exercises",o,"quiz-point-statistic"],xe=(t,o)=>[t,"quiz-exercises",o,"scores"],me=(t,o)=>[t,"quiz-exercises",o,"participations"],pe=(t,o)=>[t,"quiz-exercises",o,"edit"],Ee=(t,o)=>[t,"quiz-exercises",o,"re-evaluate"];function ze(t,o){if(t&1&&(i(0,`
                `),s(1,"a",8),i(2,`
                    `),a(3,"fa-icon",1),i(4,`
                    `),a(5,"span",9),i(6,`
                `),c(),i(7,`
            `)),t&2){let e=u(2);r(),l("routerLink",b(2,me,e.baseUrl,e.quizExercise.id)),r(2),l("icon",e.faListAlt)}}function fe(t,o){if(t&1&&(i(0,`
        `),s(1,"div"),i(2,`
            `),s(3,"a",0),i(4,`
                `),a(5,"fa-icon",1),i(6,`
                `),a(7,"span",2),i(8,`
            `),c(),i(9,`
            `),s(10,"a",3),i(11,`
                `),a(12,"fa-icon",1),i(13,`
                `),a(14,"span",4),i(15,`
            `),c(),i(16,`
        `),c(),i(17,`
        `),s(18,"div"),i(19,`
            `),s(20,"a",5),i(21,`
                `),s(22,"span"),i(23,`
                    `),a(24,"fa-icon",1),i(25,`
                    `),a(26,"span",6),i(27,`
                `),c(),i(28,`
            `),c(),i(29,`
            `),s(30,"a",5),i(31,`
                `),a(32,"fa-icon",1),i(33,`
                `),a(34,"span",7),i(35,`
            `),c(),i(36,`
            `),_(37,ze,8,5),c(),i(38,`
    `)),t&2){let e=u();r(),h("",e.isDetailPage?"d-flex":"btn-group-vertical me-1 mb-1"," "),r(2),l("routerLink",b(15,le,e.baseUrl,e.quizExercise.id)),r(2),l("icon",e.faEye),r(5),l("routerLink",b(18,ue,e.baseUrl,e.quizExercise.id)),r(2),l("icon",e.faEye),r(6),h("",e.isDetailPage?"d-flex":"btn-group-vertical me-1 mb-1"," "),r(2),l("routerLink",b(21,de,e.baseUrl,e.quizExercise.id)),r(4),l("icon",e.faSignal),r(6),l("routerLink",b(24,xe,e.baseUrl,e.quizExercise.id)),r(2),l("icon",e.faTable),r(5),x(e.isDetailPage?37:-1)}}function _e(t,o){if(t&1){let e=z();i(0,`
            `),s(1,"button",10),E("click",function(){m(e);let n=u();return p(n.exportQuizExercise(!0))}),i(2,`
                `),a(3,"fa-icon",1),i(4,`
                `),a(5,"span",11),i(6,`
            `),c(),i(7,`
        `)}if(t&2){let e=u();r(3),l("icon",e.faFileExport)}}function be(t,o){if(t&1&&(i(0,`
            `),s(1,"a",12),i(2,`
                `),a(3,"fa-icon",1),i(4,`
                `),a(5,"span",13),i(6,`
            `),c(),i(7,`
        `)),t&2){let e=u();r(),D("disabled",!e.quizExercise.isEditable),l("routerLink",b(4,pe,e.baseUrl,e.quizExercise.id)),r(2),l("icon",e.faWrench)}}function Ce(t,o){if(t&1){let e=z();i(0,`
                `),s(1,"jhi-button",15),E("onClick",function(){m(e);let n=u(2);return p(n.evaluateQuizExercise())}),c(),i(2,`
            `)}if(t&2){let e=u(2);r(),l("btnType",e.ButtonType.WARNING)("btnSize",e.ButtonSize.SMALL)("title","artemisApp.quizExercise.evaluateQuizExercise")("icon",e.faClipboardCheck)("isLoading",e.isEvaluatingQuizExercise)}}function he(t,o){if(t&1&&(i(0,`
            `),s(1,"a",12),i(2,`
                `),a(3,"fa-icon",1),i(4,`
                `),a(5,"span",14),i(6,`
            `),c(),i(7,`
            `),_(8,Ce,3,5)),t&2){let e=u();r(),l("routerLink",b(3,Ee,e.baseUrl,e.quizExercise.id)),r(2),l("icon",e.faWrench),r(5),x(e.isDetailPage?8:-1)}}function ve(t,o){if(t&1){let e=z();i(0,`
        `),s(1,"div"),i(2,`
            `),s(3,"button",16),E("delete",function(){m(e);let n=u();return p(n.resetQuizExercise())}),i(4,`
                `),a(5,"fa-icon",1),i(6,`
            `),c(),i(7,`
            `),s(8,"button",17),E("delete",function(){m(e);let n=u();return p(n.deleteQuizExercise())}),i(9,`
                `),a(10,"fa-icon",1),i(11,`
            `),c(),i(12,`
        `),c(),i(13,`
    `)}if(t&2){let e=u();r(),h("",e.isDetailPage?"d-flex":"btn-group-vertical me-1 mb-1"," "),r(2),l("entityTitle",e.quizExercise.title||"")("actionType",e.ActionType.Reset)("dialogError",e.dialogError$),r(2),l("icon",e.faUndo),r(3),C("id","delete-quiz-",e.quizExercise.id,""),l("entityTitle",e.quizExercise.title||"")("dialogError",e.dialogError$),r(2),l("icon",e.faTrash)}}var Je=(()=>{class t{quizExerciseService=f(V);eventManager=f(ee);alertService=f(B);exerciseService=f(ie);route=f(O);router=f(U);ActionType=A;faEye=Q;faSignal=T;faTable=g;faFileExport=w;faWrench=S;faTrash=Y;faListAlt=X;faUndo=Z;faClipboardCheck=G;ButtonType=re;ButtonSize=oe;dialogErrorSource=new q;dialogError$=this.dialogErrorSource.asObservable();courseId;examId;isExamMode;baseUrl;isEvaluatingQuizExercise;isDetailPage;quizExercise;loadQuizExercises=new v;ngOnInit(){this.courseId=Number(this.route.snapshot.paramMap.get("courseId")),this.examId=Number(this.route.snapshot.paramMap.get("examId"));let e=Number(this.route.snapshot.paramMap.get("exerciseGroupId"));this.examId&&e&&(this.isExamMode=!0),this.isExamMode?this.baseUrl=`/course-management/${this.courseId}/exams/${this.examId}/exercise-groups/${e}`:this.baseUrl=`/course-management/${this.courseId}`}exportQuizExercise(e){this.quizExerciseService.find(this.quizExercise.id).subscribe(d=>{let n=d.body;this.quizExerciseService.exportQuiz(n.quizQuestions,e,n.title)})}deleteQuizExercise(){this.quizExerciseService.delete(this.quizExercise.id).subscribe({next:()=>{this.eventManager.broadcast({name:"quizExerciseListModification",content:"Deleted an quizExercise"}),this.dialogErrorSource.next(""),this.isDetailPage&&this.router.navigate(["course-management",this.quizExercise.course.id,"exercises"])},error:e=>this.dialogErrorSource.next(e.message)})}resetQuizExercise(){this.exerciseService.reset(this.quizExercise.id).subscribe({next:()=>{this.eventManager.broadcast({name:"quizExerciseListModification",content:"Reset an quizExercise"}),this.dialogErrorSource.next(""),this.alertService.success("artemisApp.quizExercise.resetSuccessful",{title:this.quizExercise.title}),this.loadQuizExercises.emit()},error:e=>this.dialogErrorSource.next(e.message)})}evaluateQuizExercise(){this.isEvaluatingQuizExercise=!0,this.exerciseService.evaluateQuizExercise(this.quizExercise.id).subscribe({next:()=>{this.alertService.success("artemisApp.quizExercise.evaluateQuizExerciseSuccess"),this.isEvaluatingQuizExercise=!1},error:e=>{this.dialogErrorSource.next(e.message),this.isEvaluatingQuizExercise=!1}})}static \u0275fac=function(d){return new(d||t)};static \u0275cmp=y({type:t,selectors:[["jhi-quiz-exercise-manage-buttons"]],inputs:{isDetailPage:"isDetailPage",quizExercise:"quizExercise"},outputs:{loadQuizExercises:"loadQuizExercises"},decls:11,vars:11,consts:[["id","preview-quiz",1,"btn","btn-success","btn-sm","me-1","mb-1",3,"routerLink"],[3,"icon"],["jhiTranslate","artemisApp.quizExercise.preview",1,"d-none","d-md-inline"],[1,"btn","btn-success","btn-sm","me-1","mb-1",3,"routerLink"],["jhiTranslate","artemisApp.quizExercise.solution",1,"d-none","d-md-inline"],[1,"btn","btn-info","btn-sm","me-1","mb-1",3,"routerLink"],["jhiTranslate","global.menu.entities.quizStatistic",1,"d-none","d-md-inline"],["jhiTranslate","entity.action.scores",1,"d-none","d-md-inline"],[1,"btn","btn-primary","btn-sm","me-1","mb-1",3,"routerLink"],["jhiTranslate","artemisApp.exercise.participations",1,"d-none","d-md-inline"],["type","submit",1,"btn","btn-warning","btn-sm","me-1","mb-1",3,"click"],["jhiTranslate","entity.action.export",1,"d-none","d-md-inline"],[1,"btn","btn-warning","btn-sm","me-1","mb-1",3,"routerLink"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["jhiTranslate","entity.action.re-evaluate",1,"d-none","d-md-inline"],[1,"me-1","mb-1",3,"onClick","btnType","btnSize","title","icon","isLoading"],["jhiDeleteButton","","deleteConfirmationText","artemisApp.exercise.delete.typeNameToConfirm","deleteQuestion","artemisApp.quizExercise.reset.question",1,"mb-1",3,"delete","entityTitle","actionType","dialogError"],["jhiDeleteButton","","deleteQuestion","artemisApp.quizExercise.delete.question","deleteConfirmationText","artemisApp.exercise.delete.typeNameToConfirm",1,"mb-1",3,"delete","entityTitle","dialogError","id"]],template:function(d,n){d&1&&(s(0,"div"),i(1,`
    `),_(2,fe,39,27),s(3,"div"),i(4,`
        `),_(5,_e,8,1)(6,be,8,7)(7,he,9,6),c(),i(8,`
    `),_(9,ve,14,12),c(),i(10,`
`)),d&2&&(h("btn-group ",n.isDetailPage?"flex-wrap":"flex-btn-group-container",""),r(2),x(n.quizExercise.isAtLeastTutor?2:-1),r(),h("",n.isDetailPage?"d-flex":"btn-group-vertical me-1 mb-1"," "),r(2),x(n.quizExercise.isAtLeastEditor?5:-1),r(),x(n.quizExercise.isAtLeastEditor&&!n.quizExercise.quizEnded?6:-1),r(),x(n.quizExercise.isAtLeastInstructor&&n.quizExercise.quizEnded?7:-1),r(2),x(n.quizExercise.isAtLeastInstructor?9:-1))},dependencies:[$,L,I,ae,M],encapsulation:2})}return t})();function qe(t,o){if(t&1){let e=z();i(0,`
    `),s(1,"button",0),E("click",function(){m(e);let n=u();return p(n.openForPractice())}),i(2,`
        `),a(3,"fa-icon",1),i(4,`
        `),a(5,"span",2),i(6,`
    `),c(),i(7,`
`)}if(t&2){let e=u();r(3),l("icon",e.faPlayCircle)}}function ye(t,o){if(t&1){let e=z();i(0,`
    `),s(1,"button",3),E("click",function(){m(e);let n=u();return p(n.startQuiz())}),i(2,`
        `),a(3,"fa-icon",1),i(4,`
        `),a(5,"span",4),i(6,`
    `),c(),i(7,`
`)}if(t&2){let e=u();r(),C("id","instructor-quiz-start-",e.quizExercise.id,""),r(2),l("icon",e.faPlayCircle)}}function ge(t,o){if(t&1&&(i(0,`
                `),s(1,"span"),i(2),c(),i(3,`
            `)),t&2){let e=u().$implicit;r(2),k(" PW: ",e.password," ")}}function Se(t,o){t&1&&(i(0,`
                `),s(1,"span"),i(2," Running "),c(),i(3,`
            `))}function Qe(t,o){t&1&&(i(0,`
                `),s(1,"span"),i(2," Done "),c(),i(3,`
            `))}function Te(t,o){if(t&1){let e=z();i(0,`
                `),s(1,"button",3),E("click",function(){m(e);let n=u().$implicit,se=u(2);return p(se.startBatch(n.id))}),i(2,`
                    `),a(3,"fa-icon",1),i(4,`
                    `),a(5,"span",4),i(6,`
                `),c(),i(7,`
            `)}if(t&2){let e=u().$implicit,d=u(2);r(),j("id","instructor-quiz-start-",d.quizExercise.id,"-",e.id,""),r(2),l("icon",d.faPlayCircle)}}function we(t,o){if(t&1&&(i(0,`
        `),s(1,"div"),i(2),_(3,ge,4,1)(4,Se,4,0)(5,Qe,4,0)(6,Te,8,4),c(),i(7,`
    `)),t&2){let e=o.$implicit;r(2),k(`
            ID: `,e.id,`
            `),r(),x(e.ended?-1:3),r(),x(e.started&&!e.ended?4:-1),r(),x(e.ended?5:-1),r(),x(e.started?-1:6)}}function Be(t,o){if(t&1){let e=z();i(0,`
    `),P(1,we,8,5,null,null,F),s(3,"div"),i(4,`
        `),s(5,"button",5),E("click",function(){m(e);let n=u();return p(n.addBatch())}),i(6,`
            `),a(7,"fa-icon",1),i(8,`
            `),a(9,"span",6),i(10,`
        `),c(),i(11,`
    `),c(),i(12,`
`)}if(t&2){let e=u();r(),N(e.quizExercise.quizBatches),r(4),C("id","instructor-quiz-add-",e.quizExercise.id,""),r(2),l("icon",e.faPlus)}}function Le(t,o){if(t&1){let e=z();i(0,`
    `),s(1,"button",7),E("delete",function(){m(e);let n=u();return p(n.endQuiz())}),i(2,`
        `),a(3,"fa-icon",1),i(4,`
    `),c(),i(5,`
`)}if(t&2){let e=u();r(),C("id","quiz-set-end-",e.quizExercise.id,""),l("actionType",e.ActionType.EndNow)("entityTitle",e.quizExercise.title||"")("dialogError",e.dialogError$),r(2),l("icon",e.faStopCircle)}}function Ie(t,o){if(t&1){let e=z();i(0,`
    `),s(1,"button",3),E("click",function(){m(e);let n=u();return p(n.showQuiz())}),i(2,`
        `),a(3,"fa-icon",1),i(4,`
        `),a(5,"span",8),i(6,`
    `),c(),i(7,`
`)}if(t&2){let e=u();r(),C("id","quiz-set-visible-",e.quizExercise.id,""),r(2),l("icon",e.faEye)}}var pi=(()=>{class t{quizExerciseService=f(V);alertService=f(B);QuizMode=ne;QuizStatus=te;ActionType=A;faSort=H;faPlus=J;faTimes=K;faEye=Q;faWrench=S;faTable=g;faSignal=T;faFileExport=w;faPlayCircle=R;faStopCircle=W;dialogErrorSource=new q;dialogError$=this.dialogErrorSource.asObservable();quizExercise;loadOne=new v;handleNewQuizExercise=new v;openForPractice(){this.quizExerciseService.openForPractice(this.quizExercise.id).subscribe({next:e=>{this.handleNewQuizExercise.emit(e.body)},error:e=>{this.onError(e)}})}startQuiz(){this.quizExerciseService.start(this.quizExercise.id).subscribe({next:e=>{this.handleNewQuizExercise.emit(e.body)},error:e=>{this.onError(e)}})}endQuiz(){return this.quizExerciseService.end(this.quizExercise.id).subscribe({next:e=>{this.handleNewQuizExercise.emit(e.body),this.dialogErrorSource.next("")},error:e=>this.dialogErrorSource.next(e.message)})}startBatch(e){this.quizExerciseService.startBatch(e).subscribe({next:()=>{this.loadOne.emit(this.quizExercise.id)},error:d=>{this.onError(d)}})}addBatch(){this.quizExerciseService.addBatch(this.quizExercise.id).subscribe({next:()=>{this.loadOne.emit(this.quizExercise.id)},error:e=>{this.onError(e)}})}showQuiz(){this.quizExerciseService.setVisible(this.quizExercise.id).subscribe({next:e=>{this.handleNewQuizExercise.emit(e.body)},error:e=>{this.onError(e)}})}onError(e){this.alertService.error(e.headers.get("X-artemisApp-error")),this.loadOne.emit(this.quizExercise.id)}static \u0275fac=function(d){return new(d||t)};static \u0275cmp=y({type:t,selectors:[["jhi-quiz-exercise-lifecycle-buttons"]],inputs:{quizExercise:"quizExercise"},outputs:{loadOne:"loadOne",handleNewQuizExercise:"handleNewQuizExercise"},decls:5,vars:5,consts:[["type","submit",1,"btn","btn-warning","btn-sm","me-1","mb-1",3,"click"],[3,"icon"],["jhiTranslate","artemisApp.quizExercise.openForPractice",1,"d-none","d-md-inline"],["type","submit",1,"btn","btn-warning","btn-sm","me-1","mb-1",3,"click","id"],["jhiTranslate","artemisApp.quizExercise.startQuiz",1,"d-none","d-md-inline"],["type","submit",1,"btn","btn-primary","btn-sm","me-1","mb-1",3,"click","id"],["jhiTranslate","artemisApp.quizExercise.addBatch",1,"d-none","d-md-inline"],["jhiDeleteButton","","deleteQuestion","artemisApp.quizExercise.endNow.question","deleteConfirmationText","artemisApp.exercise.delete.typeNameToConfirm",1,"mb-1",3,"delete","id","actionType","entityTitle","dialogError"],["jhiTranslate","artemisApp.quizExercise.showNow",1,"d-none","d-md-inline"]],template:function(d,n){d&1&&_(0,qe,8,1)(1,ye,8,3)(2,Be,13,3)(3,Le,6,6)(4,Ie,8,3),d&2&&(x(n.quizExercise.status===n.QuizStatus.CLOSED&&n.quizExercise.isAtLeastEditor?0:-1),r(),x((n.quizExercise.status===n.QuizStatus.VISIBLE||n.quizExercise.status===n.QuizStatus.INVISIBLE)&&n.quizExercise.quizMode===n.QuizMode.SYNCHRONIZED&&n.quizExercise.isAtLeastEditor?1:-1),r(),x((n.quizExercise.status===n.QuizStatus.VISIBLE||n.quizExercise.status===n.QuizStatus.ACTIVE)&&n.quizExercise.quizMode===n.QuizMode.BATCHED?2:-1),r(),x((n.quizExercise.status===n.QuizStatus.VISIBLE||n.quizExercise.status===n.QuizStatus.ACTIVE)&&n.quizExercise.quizMode!==n.QuizMode.SYNCHRONIZED&&n.quizExercise.isAtLeastInstructor?3:-1),r(),x(n.quizExercise.status===n.QuizStatus.INVISIBLE&&n.quizExercise.isAtLeastEditor?4:-1))},dependencies:[L,I,M],encapsulation:2})}return t})();export{Je as a,pi as b};
//# sourceMappingURL=chunk-C7F7TEC3.js.map
