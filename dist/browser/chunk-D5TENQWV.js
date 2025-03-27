import{a as M}from"./chunk-SPPWZSHK.js";import{c as T}from"./chunk-CCVWGTN5.js";import{a as w}from"./chunk-JRBFEQNN.js";import{a as g}from"./chunk-DIZEKHOC.js";import{c as I}from"./chunk-CK7FH6VF.js";import{a as C}from"./chunk-K3W6YFKH.js";import{a as y}from"./chunk-U54OSGNH.js";import{f as h}from"./chunk-M6Z6DKZQ.js";import{Db as a,Ea as c,Oc as s,Tb as _,Zb as x,dd as i,ed as v,kc as m,sc as p,wb as u,xc as n,yc as l,yd as S,zc as r,zd as f}from"./chunk-5LC5EQRR.js";function b(t,d){if(t&1&&(i(0,`
            `),n(1,"jhi-header-exercise-page-with-details",9),i(2,`
                `),n(3,"span",10),i(4),l(),i(5,`
            `),l(),i(6,`
        `)),t&2){let e=s(2);a(),m("exercise",e.exercise)("course",e.exercise==null||e.exercise.exerciseGroup==null||e.exercise.exerciseGroup.exam==null?null:e.exercise.exerciseGroup.exam.course),a(3),v(e.exercise!=null&&e.exercise.exerciseGroup?e.exercise.exerciseGroup.title:e.exercise.title)}}function H(t,d){if(t&1&&(i(0,`
                            `),n(1,"dd",11),i(2,`
                                `),r(3,"jhi-modeling-editor",12),i(4,`
                            `),l(),i(5,`
                        `)),t&2){let e=s(3);a(3),m("readOnly",!0)("diagramType",e.exampleSolutionInfo==null||e.exampleSolutionInfo.modelingExercise==null?null:e.exampleSolutionInfo.modelingExercise.diagramType)("umlModel",e.exampleSolutionInfo==null?null:e.exampleSolutionInfo.exampleSolutionUML)("withExplanation",!!(!(e.exampleSolutionInfo==null||e.exampleSolutionInfo.modelingExercise==null)&&e.exampleSolutionInfo.modelingExercise.exampleSolutionExplanation))("explanation",(e.exampleSolutionInfo==null||e.exampleSolutionInfo.modelingExercise==null?null:e.exampleSolutionInfo.modelingExercise.exampleSolutionExplanation)||"")}}function k(t,d){if(t&1&&(i(0,`
                        `),x(1,H,6,5),r(2,"dd",5),i(3,`
                    `)),t&2){let e=s(2);a(),p(e.exampleSolutionInfo!=null&&e.exampleSolutionInfo.exampleSolutionUML&&(e.exampleSolutionInfo!=null&&e.exampleSolutionInfo.modelingExercise)?1:-1),a(),m("innerHTML",e.exampleSolutionInfo==null?null:e.exampleSolutionInfo.exampleSolution,u)}}function j(t,d){t&1&&(i(0,`
                        `),r(1,"dd",5),S(2,"artemisTranslate"),i(3,`
                    `)),t&2&&(a(),m("innerHTML",f(2,1,"artemisApp.exercise.emptyExampleSolution"),u))}function A(t,d){if(t&1&&(i(0,`
    `),n(1,"div"),i(2,`
        `),x(3,b,7,3),n(4,"div",0),i(5,`
            `),n(6,"div",1),i(7,`
                `),i(8,`
                `),n(9,"div",2),i(10,`
                    `),n(11,"div",3),i(12,`
                        `),r(13,"h3",4),i(14,`
                        `),r(15,"p",5),S(16,"htmlForMarkdown"),S(17,"artemisTranslate"),i(18,`
                    `),l(),i(19,`
                `),l(),i(20,`
                `),i(21,`
                `),n(22,"div",6),i(23,`
                    `),r(24,"h3",7),i(25,`
                `),l(),i(26,`
                `),n(27,"dl",8),i(28,`
                    `),x(29,k,4,2)(30,j,4,3),l(),i(31,`
            `),l(),i(32,`
        `),l(),i(33,`
    `),l(),i(34,`
`)),t&2){let e=s();a(3),p(e.displayHeader?3:-1),a(12),m("innerHTML",e.exercise!=null&&e.exercise.problemStatement?f(16,3,e.exercise.problemStatement):f(17,5,"artemisApp.exercise.emptyProblemStatement"),u),a(14),p(e.exampleSolutionInfo!=null&&e.exampleSolutionInfo.exampleSolutionUML||e.exampleSolutionInfo!=null&&e.exampleSolutionInfo.exampleSolution?29:30)}}var J=(()=>{class t{exerciseService=c(I);route=c(h);artemisMarkdown=c(g);displayedExerciseId;exercise;exampleSolutionInfo;exerciseId;displayHeader=!0;ngOnInit(){this.route.params.subscribe(e=>{let o=this.exerciseId||parseInt(e.exerciseId,10),E=this.displayedExerciseId!==o;this.displayedExerciseId=o,E&&this.loadExercise()})}loadExercise(){this.exercise=void 0,this.exerciseService.getExerciseForExampleSolution(this.displayedExerciseId).subscribe(e=>{let o=e.body;this.exercise=o,this.exampleSolutionInfo=I.extractExampleSolutionInfo(o,this.artemisMarkdown)})}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=_({type:t,selectors:[["jhi-example-solution"]],inputs:{exerciseId:"exerciseId",displayHeader:"displayHeader"},decls:1,vars:1,consts:[[1,"row"],[1,"col","pe-0","flex-grow-1"],["id","problem-statement",1,"row","mt-2","mb-2","align-items-baseline"],[1,"col-12","col-md-12","markdown-preview","problem-statement"],["jhiTranslate","artemisApp.exercise.problemStatement"],[3,"innerHTML"],[1,"row","mb-2","mt-2","align-items-baseline"],["jhiTranslate","artemisApp.exercise.exampleSolution",1,"pe-2"],[1,"row-md","jh-entity-details","markdown-preview"],[3,"exercise","course"],["pagetitle",""],[1,"editor-outline-background"],[3,"readOnly","diagramType","umlModel","withExplanation","explanation"]],template:function(o,E){o&1&&x(0,A,35,7),o&2&&p(E.exercise?0:-1)},dependencies:[M,y,T,C,w],encapsulation:2})}return t})();export{J as a};
//# sourceMappingURL=chunk-D5TENQWV.js.map
