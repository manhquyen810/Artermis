import{a as R}from"./chunk-DMHWBHTD.js";import"./chunk-57BCHYEO.js";import"./chunk-IJRVZ46L.js";import"./chunk-SUUJN3EQ.js";import"./chunk-MBS3WUDO.js";import"./chunk-5JBXU6VG.js";import{d as V}from"./chunk-AR57MWOI.js";import"./chunk-A5PTZAPN.js";import"./chunk-AU6UEH3U.js";import"./chunk-FGAONQTL.js";import"./chunk-HQ6UGNQX.js";import"./chunk-ZLJ76G5I.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import{c as F}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import{K as I,b as T,h as Q,m as j}from"./chunk-WA5GEAJB.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import{c as A}from"./chunk-JXJXC4DZ.js";import"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as D}from"./chunk-U54OSGNH.js";import{f as k}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as s,Dc as q,Ea as p,Ma as g,Mc as E,Na as _,Oc as b,Tb as C,Zb as f,dd as t,ed as u,kc as M,ld as v,md as S,nd as w,rd as y,sc as h,uc as O,vc as P,wc as z,xc as e,yc as n,zc as c}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var B=o=>({param:o});function N(o,x){if(o&1&&(t(0,`
            `),c(1,"span",16),t(2,`
        `)),o&2){let i=b();s(),M("translateValues",y(1,B,i.course.title))}}function L(o,x){if(o&1){let i=q();t(0,`
                    `),e(1,"tr"),t(2,`
                        `),e(3,"td",3),t(4),n(),t(5,`
                        `),e(6,"td",5),t(7),n(),t(8,`
                        `),e(9,"td",7),t(10),n(),t(11,`
                        `),e(12,"td",17),t(13,`
                            `),e(14,"input",18),w("ngModelChange",function(r){let l=g(i).$implicit;return S(l.exportQuiz,r)||(l.exportQuiz=r),_(r)}),n(),t(15,`
                        `),n(),t(16,`
                    `),n(),t(17,`
                `)}if(o&2){let i=x.$implicit;s(4),u(i.title),s(3),u((i.exercise==null?null:i.exercise.title)||""),s(3),u(i.type),s(4),v("ngModel",i.exportQuiz)}}var it=(()=>{class o{route=p(k);quizExerciseService=p(R);courseService=p(V);alertService=p(A);questions=new Array(0);courseId;course;ngOnInit(){this.route.params.subscribe(i=>{this.courseId=i.courseId,this.loadForCourse(this.courseId)})}loadForCourse(i){this.courseService.find(this.courseId).subscribe(a=>{this.course=a.body,this.quizExerciseService.findForCourse(i).subscribe({next:r=>{let l=r.body;for(let d of l)d.course=this.course,this.quizExerciseService.find(d.id).subscribe(W=>{W.body.quizQuestions.forEach(m=>{m.exercise=d,this.questions.push(m)})})},error:r=>F(this.alertService,r)})})}exportQuiz(){this.quizExerciseService.exportQuiz(this.questions,!1)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=C({type:o,selectors:[["jhi-quiz-exercise-export"]],decls:64,vars:1,consts:[[1,"row"],[1,"table-responsive"],[1,"table","table-striped"],["width","50%"],["jhiTranslate","artemisApp.quizExercise.export.questionTitle"],["width","25%"],["jhiTranslate","artemisApp.quizExercise.export.quizExerciseTitle"],["width","20%"],["jhiTranslate","artemisApp.exercise.type"],["width","5%"],["jhiTranslate","entity.action.export"],[1,"edit-quiz-footer"],[1,"container"],[1,"edit-quiz-footer-content"],[1,"form-group"],["jhiTranslate","artemisApp.quizExercise.export.export",1,"btn","btn-success",3,"click"],["jhiTranslate","artemisApp.quizExercise.export.title",3,"translateValues"],["width","5%",1,"checkbox"],["type","checkbox",1,"form-check-input",3,"ngModelChange","ngModel"]],template:function(a,r){a&1&&(e(0,"div"),t(1,`
    `),e(2,"h2"),t(3,`
        `),f(4,N,3,3),n(),t(5,`
    `),c(6,"div",0),t(7,`
    `),c(8,"br"),t(9,`
    `),e(10,"div",1),t(11,`
        `),e(12,"table",2),t(13,`
            `),e(14,"thead"),t(15,`
                `),e(16,"tr"),t(17,`
                    `),e(18,"th",3),t(19,`
                        `),c(20,"span",4),t(21,`
                    `),n(),t(22,`
                    `),e(23,"th",5),t(24,`
                        `),c(25,"span",6),t(26,`
                    `),n(),t(27,`
                    `),e(28,"th",7),t(29,`
                        `),c(30,"span",8),t(31,`
                    `),n(),t(32,`
                    `),e(33,"th",9),t(34,`
                        `),c(35,"span",10),t(36,`
                    `),n(),t(37,`
                `),n(),t(38,`
            `),n(),t(39,`
            `),e(40,"tbody"),t(41,`
                `),P(42,L,18,4,null,null,O),n(),t(44,`
        `),n(),t(45,`
    `),n(),t(46,`
    `),e(47,"div",11),t(48,`
        `),e(49,"div",12),t(50,`
            `),e(51,"div",13),t(52,`
                `),c(53,"div",14),t(54,`
                `),e(55,"div",14),t(56,`
                    `),e(57,"button",15),E("click",function(){return r.exportQuiz()}),n(),t(58,`
                `),n(),t(59,`
            `),n(),t(60,`
        `),n(),t(61,`
    `),n(),t(62,`
`),n(),t(63,`
`)),a&2&&(s(4),h(r.course?4:-1),s(38),z(r.questions))},dependencies:[D,I,T,Q,j],styles:[".edit-quiz-footer[_ngcontent-%COMP%]{height:80px;position:sticky;bottom:0;left:0;right:0;z-index:10;border-top:1px solid var(--border-color);background:var(--edit-quiz-footer-background)}.edit-quiz-footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{height:100%}",".question-options[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}.question-options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .question-options[_ngcontent-%COMP%]   .input-group-btn[_ngcontent-%COMP%]{display:inline-block;width:1rem}.question-options[_ngcontent-%COMP%]   .datepicker-input[_ngcontent-%COMP%]{max-width:140px}.question-options[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{display:inline-block}.question-options[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{height:100%}.question-options[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0 5px 15px}.question-options[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 4px}.question-options[_ngcontent-%COMP%]   .background-file[_ngcontent-%COMP%]{display:flex}.edit-quiz-footer-content[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:space-between}.edit-quiz-footer-content[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .edit-quiz-footer-content[_ngcontent-%COMP%]   .input-group-btn[_ngcontent-%COMP%]{width:auto}.edit-quiz-footer-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{display:flex;align-items:center}.edit-quiz-footer-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 4px}.edit-quiz-footer-content[_ngcontent-%COMP%]   .invalid-reasons-tooltip[_ngcontent-%COMP%]   .tooltip-inner[_ngcontent-%COMP%]{text-align:left;max-width:300px}.edit-quiz-footer-content[_ngcontent-%COMP%]   .invalid-reasons-tooltip[_ngcontent-%COMP%]   .tooltip-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0;padding:4px}.edit-quiz-footer-content[_ngcontent-%COMP%]   #remaining-time[_ngcontent-%COMP%]{text-align:center;width:100%}.edit-quiz-footer-content[_ngcontent-%COMP%]   #remaining-time[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{text-align:center;width:100%}.edit-quiz-footer-content[_ngcontent-%COMP%]   #remaining-time-value[_ngcontent-%COMP%]{font-weight:700;white-space:nowrap}.edit-quiz-footer-content[_ngcontent-%COMP%]   #quiz-score[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:green}.edit-quiz-footer-content[_ngcontent-%COMP%]   #quiz-score.incorrect[_ngcontent-%COMP%]{color:#000}.edit-quiz-footer-content[_ngcontent-%COMP%]   .time-warning[_ngcontent-%COMP%]{color:orange}.edit-quiz-footer-content[_ngcontent-%COMP%]   .time-critical[_ngcontent-%COMP%]{color:red}@media (max-width: 767.98px){.edit-quiz-footer-content[_ngcontent-%COMP%]   .connection-status-quiz[_ngcontent-%COMP%]{font-size:11px}}@media (max-width: 767.98px){.edit-quiz-footer-content[_ngcontent-%COMP%]{font-size:12px}}"]})}return o})();export{it as QuizExerciseExportComponent};
//# sourceMappingURL=quiz-exercise-export.component-UNJDEFQN.js.map
