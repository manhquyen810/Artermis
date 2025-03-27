import{a as k,b as w}from"./chunk-GXLYQKDJ.js";import{c as M}from"./chunk-CCVWGTN5.js";import{a as b}from"./chunk-A2A6JFSH.js";import{a as T}from"./chunk-DIZEKHOC.js";import{d as A}from"./chunk-O26CMRR4.js";import{c as u}from"./chunk-CXQURQM5.js";import{a as v}from"./chunk-U54OSGNH.js";import{Db as n,Ea as g,Oc as m,Tb as I,Vb as h,Zb as x,_a as S,dd as t,ed as y,kc as d,sc as p,wb as f,xb as E,xc as r,yc as a,zc as c}from"./chunk-5LC5EQRR.js";var P=(()=>{class i{constructor(){let e=g(S);e.nativeElement.target="_blank",e.nativeElement.rel="noopener noreferrer"}static \u0275fac=function(o){return new(o||i)};static \u0275dir=h({type:i,selectors:[["","jhiSecureLink",""]]})}return i})();function D(i,l){if(i&1&&(t(0,`
            `),r(1,"jhi-expandable-section",3),t(2,`
                `),c(3,"p",4),t(4,`
            `),a(),t(5,`
        `)),i&2){let e=m(2);n(3),d("innerHTML",e.gradingInstructions,f)}}function L(i,l){if(i&1&&(t(0,`
            `),r(1,"jhi-expandable-section",5),t(2,`
                `),c(3,"jhi-structured-grading-instructions-assessment-layout",6),t(4,`
            `),a(),t(5,`
        `)),i&2){let e=m(2);n(3),d("readonly",e.readOnly)("criteria",e.gradingCriteria)}}function O(i,l){if(i&1&&(t(0,`
    `),r(1,"div",2),t(2,`
        `),x(3,D,6,1)(4,L,6,2),a(),t(5,`
`)),i&2){let e=m();n(3),p(e.gradingInstructions?3:-1),n(),p(e.gradingCriteria&&e.gradingCriteria.length>0?4:-1)}}function H(i,l){if(i&1&&(t(0,`
            `),c(1,"jhi-programming-exercise-instructions",7),t(2,`
        `)),i&2){let e=m();n(),d("exercise",e.programmingExercise)("participation",e.programmingParticipation?e.programmingParticipation:e.programmingExercise.templateParticipation)("personalParticipation",!1)}}function G(i,l){if(i&1&&(t(0,`
            `),c(1,"p",4),t(2,`
        `)),i&2){let e=m();n(),d("innerHTML",e.problemStatement,f)}}function R(i,l){if(i&1&&(t(0,`
            `),r(1,"div",8),t(2,`
                `),r(3,"a",9),t(4,`
                    `),c(5,"jhi-button",10),t(6,`
                `),a(),t(7,`
            `),a(),t(8,`
        `)),i&2){let e=m();n(3),d("href",e.programmingExercise==null||e.programmingExercise.solutionParticipation==null?null:e.programmingExercise.solutionParticipation.repositoryUri,E)}}function F(i,l){if(i&1&&(t(0,`
                `),c(1,"jhi-modeling-editor",11),t(2,`
            `)),i&2){let e=m(2);n(),d("readOnly",!0)("diagramType",e.sampleSolutionDiagramType)("umlModel",e.sampleSolutionModel)}}function K(i,l){if(i&1&&(t(0,`
                `),c(1,"p",4),t(2,`
            `)),i&2){let e=m(2);n(),d("innerHTML",e.sampleSolutionExplanation,f)}}function N(i,l){if(i&1&&(t(0,`
            `),x(1,F,3,3)(2,K,3,1)),i&2){let e=m();n(),p(e.sampleSolutionModel?1:-1),n(),p(e.sampleSolutionExplanation?2:-1)}}function U(i,l){i&1&&(t(0,`
    `),r(1,"jhi-expandable-section",12),t(2,`
        `),c(3,"p",13),t(4,`
    `),a(),t(5,`
`))}var ae=(()=>{class i{markdownService=g(T);exercise;programmingExercise;problemStatement;gradingInstructions;sampleSolutionExplanation;sampleSolutionModel;sampleSolutionDiagramType;isAssessmentTraining=!1;showAssessmentInstructions=!0;readOnly;programmingParticipation;gradingCriteria;ExerciseType=u;set exerciseInput(e){this.exercise=e,this.problemStatement=this.markdownService.safeHtmlForMarkdown(e.problemStatement),e.gradingInstructions&&(this.gradingInstructions=this.markdownService.safeHtmlForMarkdown(e.gradingInstructions)),this.gradingCriteria=e.gradingCriteria;let o;switch(e.type){case u.MODELING:let s=e;o=s.exampleSolutionExplanation,s.exampleSolutionModel&&(this.sampleSolutionModel=JSON.parse(s.exampleSolutionModel)),this.sampleSolutionDiagramType=s.diagramType;break;case u.TEXT:o=e.exampleSolution;break;case u.FILE_UPLOAD:o=e.exampleSolution;break;case u.PROGRAMMING:this.programmingExercise=e}o&&(this.sampleSolutionExplanation=this.markdownService.safeHtmlForMarkdown(o))}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=I({type:i,selectors:[["jhi-assessment-instructions"]],inputs:{isAssessmentTraining:"isAssessmentTraining",showAssessmentInstructions:"showAssessmentInstructions",readOnly:"readOnly",programmingParticipation:"programmingParticipation",gradingCriteria:"gradingCriteria",exerciseInput:[0,"exercise","exerciseInput"]},decls:17,vars:5,consts:[["headerKey","artemisApp.assessmentInstructions.problemStatement"],["headerKey","artemisApp.assessmentInstructions.sampleSolution"],[1,"border","p-2"],["headerKey","artemisApp.assessmentInstructions.assessmentInstructions"],[1,"markdown-preview",3,"innerHTML"],["headerKey","artemisApp.assessmentInstructions.structuredGradingInstructions"],[3,"readonly","criteria"],[3,"exercise","participation","personalParticipation"],[1,"mb-3"],["jhiSecureLink","",3,"href"],["jhiTranslate","artemisApp.exerciseAssessmentDashboard.programmingExercise.exampleSolution"],[3,"readOnly","diagramType","umlModel"],["headerKey","artemisApp.assessmentInstructions.trainingEvaluationCriteria.title"],["jhiTranslate","artemisApp.assessmentInstructions.trainingEvaluationCriteria.description"]],template:function(o,s){if(o&1&&(x(0,O,6,2),r(1,"h3"),t(2),a(),t(3,`
`),r(4,"jhi-expandable-section",0),t(5,`
    `),x(6,H,3,3)(7,G,3,1),t(8,`
`),a(),t(9,`
`),r(10,"jhi-expandable-section",1),t(11,`
    `),x(12,R,9,1)(13,N,3,2),t(14,`
`),a(),t(15,`
`),x(16,U,6,0)),o&2){let C,_;p(s.showAssessmentInstructions&&(s.gradingInstructions||s.gradingCriteria&&s.gradingCriteria.length>0)?0:-1),n(2),y(s.exercise.title),n(4),p((C=s.exercise.type)===s.ExerciseType.PROGRAMMING?6:7),n(6),p((_=s.exercise.type)===s.ExerciseType.PROGRAMMING?12:13),n(4),p(s.isAssessmentTraining?16:-1)}},dependencies:[k,w,b,P,A,v,M],encapsulation:2})}return i})();export{P as a,ae as b};
//# sourceMappingURL=chunk-3DNS47RB.js.map
