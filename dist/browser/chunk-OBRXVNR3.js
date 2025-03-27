import{a as ue}from"./chunk-4CVODXGB.js";import{a as it}from"./chunk-GRLLGFUW.js";import{a as tt}from"./chunk-LTHMYHP7.js";import{a as et}from"./chunk-WIZ2YSLS.js";import{C as Je,D as Ze,h as b}from"./chunk-RTOKZMYN.js";import{a as Ye,b as me,d as pe}from"./chunk-O26CMRR4.js";import{a as Z}from"./chunk-2QXIMOEO.js";import{K as Y,u as ze,v as Re}from"./chunk-VZRSC3LP.js";import{A as Pe,B as de,C as Oe,F as je,K as P,b as se,c as K,h as V,m as G,o as ce}from"./chunk-WA5GEAJB.js";import{e as J}from"./chunk-5GXY5RYT.js";import{a as Ke}from"./chunk-BQRUD4AM.js";import{a as W}from"./chunk-K3W6YFKH.js";import{d as B}from"./chunk-EDXSOKK5.js";import{a as Qe}from"./chunk-R5BZWVRQ.js";import{p as Ce}from"./chunk-DID2YGL7.js";import{b as H}from"./chunk-CXQURQM5.js";import{Bb as Ue,G as We,Lc as qe,Tb as $e,fa as le,kb as Be,pc as He,sd as Le,tb as Ne,wd as Xe}from"./chunk-Z4VHWOB5.js";import{a as O}from"./chunk-U54OSGNH.js";import{A as Ge,n as Ve}from"./chunk-IOA4DPXY.js";import{Ac as ve,Ad as fe,Bc as Me,Db as c,Dc as C,Ea as R,Ed as Ae,Id as Fe,Ma as m,Mc as g,Na as p,Oc as d,Qd as De,Rc as w,Tb as I,Va as k,Ya as be,Yc as L,Za as j,Zb as h,Zc as X,_c as Q,cd as U,dd as e,f as Ee,fd as ye,kc as x,lc as Se,ld as S,md as v,nd as M,qd as $,sc as f,sd as _e,td as ke,uc as A,vc as F,wc as D,xc as r,ya as Ie,yc as a,yd as T,zc as l,zd as E}from"./chunk-5LC5EQRR.js";var dt=(n,_,t)=>[n,_,t];function lt(n,_){if(n&1){let t=C();e(0,`
                `),r(1,"div",1),e(2,`
                    `),r(3,"div",2),e(4,`
                        `),r(5,"input",3),g("ngModelChange",function(){m(t);let i=d(2);return p(i.exercise.presentationScoreEnabled=!i.exercise.presentationScoreEnabled)}),a(),e(6,`
                        `),r(7,"label",4),e(8,"Presentation Score Enabled"),a(),e(9,`
                        `),l(10,"fa-icon",5),T(11,"artemisTranslate"),e(12,`
                    `),a(),e(13,`
                `),a(),e(14,`
            `)}if(n&2){let t=d(2);c(5),x("ngModel",t.exercise.presentationScoreEnabled),c(5),w("ngbTooltip",E(11,3,"artemisApp.exercise.presentationScoreEnabled.description")),x("icon",t.faQuestionCircle)}}function mt(n,_){if(n&1&&(ve(0),e(1,`
            `),h(2,lt,15,5),Me()),n&2){let t=d();c(2),f(t.showPresentationScoreCheckbox()?2:-1)}}var ai=(()=>{class n{gradingSystemService=R(it);exercise;Authority=Qe;faQuestionCircle=Be;gradeStepsDTO;gradeStepsDTOSub;ngDoCheck(){!this.gradeStepsDTOSub&&this.exercise.course?.id&&(this.gradeStepsDTOSub=this.gradingSystemService.findGradeStepsForCourse(this.exercise.course.id).subscribe(t=>{t.body&&(this.gradeStepsDTO=t.body)}))}ngOnDestroy(){this.gradeStepsDTOSub&&this.gradeStepsDTOSub.unsubscribe()}showPresentationScoreCheckbox(){return this.isBasicPresentation()||this.isGradedPresentation()}isBasicPresentation(){return!!this.exercise.course?.presentationScore}isGradedPresentation(){return!!(this.exercise.course&&(this.gradeStepsDTO?.presentationsNumber??0)>0)}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=I({type:n,selectors:[["jhi-presentation-score-checkbox"]],inputs:{exercise:"exercise"},decls:3,vars:5,consts:[[4,"jhiHasAnyAuthority"],[1,"form-group"],[1,"form-check","custom-control","custom-checkbox"],["type","checkbox","id","field_presentationScoreEnabled","name","presentationScoreEnabled",1,"form-check-input","custom-control-input",3,"ngModelChange","ngModel"],["for","field_presentationScoreEnabled","jhiTranslate","artemisApp.exercise.presentationScoreEnabled.title",1,"form-check-label","custom-control-label"],[1,"text-secondary",3,"icon","ngbTooltip"]],template:function(o,i){o&1&&(e(0,`
        `),h(1,mt,3,1,"ng-container",0),e(2,`
    `)),o&2&&(c(),x("jhiHasAnyAuthority",ke(1,dt,i.Authority.ADMIN,i.Authority.INSTRUCTOR,i.Authority.EDITOR)))},dependencies:[Ke,P,se,V,G,O,B,Y,W],encapsulation:2})}return n})();var z=class{id;credits;gradingScale;instructionDescription;feedback;usageCount};var ee=(()=>{class n extends b{static ID="grading-credits.action";static IDENTIFIER="[credits]";static TEXT="0";constructor(){super(n.ID,"artemisApp.assessmentInstructions.instructions.editor.addCredits",void 0,void 0,!0)}run(t){this.addTextWithDomainActionIdentifier(t,n.TEXT,!0,!1)}getOpeningIdentifier(){return n.IDENTIFIER}}return n})();var te=(()=>{class n extends b{static ID="grading-scale.action";static IDENTIFIER="[gradingScale]";static TEXT="Add instruction grading scale here (only visible for tutors)";constructor(){super(n.ID,"artemisApp.assessmentInstructions.instructions.editor.addScale",void 0,void 0,!0)}run(t){this.addTextWithDomainActionIdentifier(t,n.TEXT,!0,!1)}getOpeningIdentifier(){return n.IDENTIFIER}}return n})();var ie=(()=>{class n extends b{static ID="grading-description.action";static IDENTIFIER="[description]";static TEXT="Add grading instruction here (only visible for tutors)";constructor(){super(n.ID,"artemisApp.assessmentInstructions.instructions.editor.addDescription",void 0,void 0,!0)}run(t){this.addTextWithDomainActionIdentifier(t,n.TEXT,!0,!1)}getOpeningIdentifier(){return n.IDENTIFIER}}return n})();var ne=(()=>{class n extends b{static ID="grading-feedback.action";static IDENTIFIER="[feedback]";static TEXT="Add feedback for students here (visible for students)";constructor(){super(n.ID,"artemisApp.assessmentInstructions.instructions.editor.addFeedback",void 0,void 0,!0)}run(t){this.addTextWithDomainActionIdentifier(t,n.TEXT,!0,!1)}getOpeningIdentifier(){return n.IDENTIFIER}}return n})();var oe=(()=>{class n extends b{static ID="grading-usage-count.action";static IDENTIFIER="[maxCountInScore]";static TEXT="0";constructor(){super(n.ID,"artemisApp.assessmentInstructions.instructions.editor.addUsageCount",void 0,void 0,!0)}run(t){this.addTextWithDomainActionIdentifier(t,n.TEXT,!0,!1)}getOpeningIdentifier(){return n.IDENTIFIER}}return n})();var N=(()=>{class n extends b{gradingInstructionAction;static ID="grading-criterion.action";static IDENTIFIER="[criterion]";static TEXT="Add criterion title (only visible to tutors)";constructor(t){super(n.ID,"artemisApp.assessmentInstructions.instructions.editor.addCriterion"),this.gradingInstructionAction=t}run(t){this.addTextWithDomainActionIdentifier(t,n.TEXT,!1,!1),this.gradingInstructionAction.executeInCurrentEditor()}getOpeningIdentifier(){return n.IDENTIFIER}}return n})();var re=(()=>{class n extends b{creditsAction;scaleAction;descriptionAction;feedbackAction;usageCountAction;static ID="grading-instruction.action";static IDENTIFIER="[instruction]";constructor(t,o,i,s,u){super(n.ID,"artemisApp.assessmentInstructions.instructions.editor.addInstruction"),this.creditsAction=t,this.scaleAction=o,this.descriptionAction=i,this.feedbackAction=s,this.usageCountAction=u}run(t){this.addTextWithDomainActionIdentifier(t,"",!1,!1),this.creditsAction.executeInCurrentEditor(),this.scaleAction.executeInCurrentEditor(),this.descriptionAction.executeInCurrentEditor(),this.feedbackAction.executeInCurrentEditor(),this.usageCountAction.executeInCurrentEditor()}getOpeningIdentifier(){return n.IDENTIFIER}}return n})();var pt=["markdownEditor"],ut=["markdownEditors"],nt=(n,_)=>({"btn-secondary":n,"btn-default":_}),he=()=>[];function gt(n,_){if(n&1){let t=C();e(0,`
                                            `),r(1,"tr",41),e(2,`
                                                `),r(3,"td"),e(4,`
                                                    `),r(5,"input",42),M("ngModelChange",function(i){let s=m(t).$implicit;return v(s.credits,i)||(s.credits=i),p(i)}),g("change",function(){let i=m(t).$implicit,s=d().$implicit,u=d(3);return p(u.updateGradingInstruction(i,s))}),a(),e(6,`
                                                `),a(),e(7,`
                                                `),r(8,"td"),e(9,`
                                                    `),r(10,"input",43),M("ngModelChange",function(i){let s=m(t).$implicit;return v(s.gradingScale,i)||(s.gradingScale=i),p(i)}),g("change",function(){let i=m(t).$implicit,s=d().$implicit,u=d(3);return p(u.updateGradingInstruction(i,s))}),a(),e(11,`
                                                `),a(),e(12,`
                                                `),r(13,"td"),e(14,`
                                                    `),r(15,"textarea",44),M("ngModelChange",function(i){let s=m(t).$implicit;return v(s.instructionDescription,i)||(s.instructionDescription=i),p(i)}),g("change",function(){let i=m(t).$implicit,s=d().$implicit,u=d(3);return p(u.updateGradingInstruction(i,s))}),a(),e(16,`
                                                `),a(),e(17,`
                                                `),r(18,"td"),e(19,`
                                                    `),r(20,"textarea",44),M("ngModelChange",function(i){let s=m(t).$implicit;return v(s.feedback,i)||(s.feedback=i),p(i)}),g("change",function(){let i=m(t).$implicit,s=d().$implicit,u=d(3);return p(u.updateGradingInstruction(i,s))}),a(),e(21,`
                                                `),a(),e(22,`
                                                `),r(23,"td"),e(24,`
                                                    `),r(25,"input",45),M("ngModelChange",function(i){let s=m(t).$implicit;return v(s.usageCount,i)||(s.usageCount=i),p(i)}),g("change",function(){let i=m(t).$implicit,s=d().$implicit,u=d(3);return p(u.updateGradingInstruction(i,s))}),a(),e(26,`
                                                `),a(),e(27,`
                                                `),r(28,"td"),e(29,`
                                                    `),r(30,"span",46),g("click",function(){let i=m(t).$implicit,s=d().$implicit,u=d(3);return p(u.deleteInstruction(i,s))}),e(31,`
                                                        `),l(32,"fa-icon",47),T(33,"artemisTranslate"),e(34,`
                                                    `),a(),e(35,`
                                                `),a(),e(36,`
                                            `),a(),e(37,`
                                        `)}if(n&2){let t=_.$implicit,o=d(4);c(5),S("ngModel",t.credits),c(5),S("ngModel",t.gradingScale),c(5),S("ngModel",t.instructionDescription),c(5),S("ngModel",t.feedback),c(5),S("ngModel",t.usageCount),c(7),w("ngbTooltip",E(33,7,"artemisApp.exercise.deleteAssessmentInstruction")),x("icon",o.faTrash)}}function xt(n,_){if(n&1){let t=C();e(0,`
                        `),r(1,"div"),e(2,`
                            `),r(3,"div",14),e(4,`
                                `),r(5,"div",15),e(6,`
                                    `),r(7,"div",16),e(8,`
                                        `),r(9,"label",17),e(10,"Assessment Criterion"),a(),e(11,`
                                        `),r(12,"input",18),M("ngModelChange",function(i){let s=m(t).$implicit;return v(s.title,i)||(s.title=i),p(i)}),g("change",function(i){let s=m(t).$implicit,u=d(3);return p(u.onCriterionTitleChange(i,s))}),a(),e(13,`
                                    `),a(),e(14,`
                                `),a(),e(15,`
                                `),r(16,"div",19),e(17,`
                                    `),r(18,"div",20),e(19,`
                                        `),r(20,"span",21),g("click",function(){let i=m(t).$implicit,s=d(3);return p(s.deleteGradingCriterion(i))}),e(21,`
                                            `),l(22,"fa-icon",12),e(23,`
                                            `),l(24,"span",22),e(25,`
                                        `),a(),e(26,`
                                    `),a(),e(27,`
                                `),a(),e(28,`
                            `),a(),e(29,`
                            `),r(30,"div",23),e(31,`
                                `),r(32,"table",24),e(33,`
                                    `),r(34,"thead"),e(35,`
                                        `),r(36,"tr"),e(37,`
                                            `),r(38,"th",25),e(39,`
                                                `),l(40,"span",26),e(41,`
                                                `),l(42,"jhi-help-icon",27),e(43,`
                                            `),a(),e(44,`
                                            `),r(45,"th",25),e(46,`
                                                `),l(47,"span",28),e(48,`
                                                `),l(49,"jhi-help-icon",29),e(50,`
                                            `),a(),e(51,`
                                            `),r(52,"th",30),e(53,`
                                                `),l(54,"span",31),e(55,`
                                                `),l(56,"jhi-help-icon",32),e(57,`
                                            `),a(),e(58,`
                                            `),r(59,"th",30),e(60,`
                                                `),l(61,"span",33),e(62,`
                                                `),l(63,"jhi-help-icon",34),e(64,`
                                            `),a(),e(65,`
                                            `),r(66,"th",25),e(67,`
                                                `),l(68,"span",35),e(69,`
                                                `),l(70,"jhi-help-icon",36),e(71,`
                                            `),a(),e(72,`
                                            `),r(73,"th",37),e(74,`
                                                `),l(75,"span",38),e(76,`
                                            `),a(),e(77,`
                                        `),a(),e(78,`
                                    `),a(),e(79,`
                                    `),r(80,"tbody"),e(81,`
                                        `),F(82,gt,38,9,null,null,A),a(),e(84,`
                                `),a(),e(85,`
                            `),a(),e(86,`
                            `),r(87,"span",39),g("click",function(){let i=m(t).$implicit,s=d(3);return p(s.addNewInstruction(i))}),e(88,`
                                `),l(89,"fa-icon",40),T(90,"artemisTranslate"),e(91,`
                            `),a(),e(92,`
                        `),a(),e(93,`
                    `)}if(n&2){let t=_.$implicit,o=d(3);c(12),S("ngModel",t.title),c(10),x("icon",o.faTrash),c(60),D(t.structuredGradingInstructions),c(7),w("ngbTooltip",E(90,4,"artemisApp.exercise.addAssessmentInstruction")),x("icon",o.faPlus)}}function _t(n,_){if(n&1){let t=C();e(0,`
                `),r(1,"div"),e(2,`
                    `),F(3,xt,94,6,null,null,A),r(5,"div",9),e(6,`
                        `),r(7,"div",10),e(8,`
                            `),r(9,"button",11),g("click",function(){m(t);let i=d(2);return p(i.addNewGradingCriterion())}),e(10,`
                                `),l(11,"fa-icon",12),e(12,`
                                `),l(13,"span",13),e(14,`
                            `),a(),e(15,`
                        `),a(),e(16,`
                    `),a(),e(17,`
                `),a(),e(18,`
            `)}if(n&2){let t=d(2);c(3),D(t.exercise.gradingCriteria),c(8),x("icon",t.faPlus)}}function ft(n,_){if(n&1){let t=C();e(0,`
                `),r(1,"div"),e(2,`
                    `),r(3,"jhi-markdown-editor-monaco",48,0),g("markdownChange",function(){m(t);let i=d(2);return p(i.prepareForSave())})("textWithDomainActionsFound",function(i){m(t);let s=d(2);return p(s.onDomainActionsFound(i))}),a(),e(5,`
                `),a(),e(6,`
            `)}if(n&2){let t=d(2);c(3),x("markdown",t.markdownEditorText)("showPreviewButton",!1)("showEditButton",!1)("domainActions",t.domainActionsForMainEditor)("enableResize",!1)("initialEditorHeight",t.MarkdownEditorHeight.MEDIUM)}}function Ct(n,_){if(n&1){let t=C();e(0,`
    `),r(1,"div",2),e(2,`
        `),r(3,"div",3),e(4,`
            `),r(5,"button",4),g("click",function(){m(t);let i=d();return p(i.switchMode())}),e(6,`
                `),l(7,"span",5),e(8,`
            `),a(),e(9,`
            `),r(10,"button",6),g("click",function(){m(t);let i=d();return p(i.switchMode())}),e(11,`
                `),l(12,"span",7),e(13,`
            `),a(),e(14,`
        `),a(),e(15,`
        `),r(16,"div",8),e(17,`
            `),e(18,`
            `),h(19,_t,19,1)(20,ft,7,6),a(),e(21,`
    `),a(),e(22,`
`)}if(n&2){let t=d();c(5),x("ngClass",_e(4,nt,t.showEditMode,!t.showEditMode)),c(5),x("ngClass",_e(7,nt,!t.showEditMode,t.showEditMode)),c(9),f(t.showEditMode?19:-1),c(),f(t.showEditMode?-1:20)}}function ht(n,_){if(n&1){let t=C();e(0,`
                                    `),r(1,"div"),e(2,`
                                        `),r(3,"div",61),e(4,`
                                            `),r(5,"jhi-markdown-editor-monaco",62,1),g("markdownChange",function(){m(t);let i=d(4);return p(i.prepareForSave())})("textWithDomainActionsFound",function(i){let s=m(t).$implicit,u=d(4);return p(u.onInstructionChange(i,s))}),a(),e(7,`
                                            `),r(8,"div",63),e(9,`
                                                `),r(10,"span",64),g("click",function(){let i=m(t).$implicit,s=d(2).$implicit,u=d(2);return p(u.resetInstruction(i,s))}),e(11,`
                                                    `),l(12,"fa-icon",47),T(13,"artemisTranslate"),e(14,`
                                                `),a(),e(15,`
                                                `),r(16,"span",65),g("click",function(){let i=m(t).$implicit,s=d(2).$implicit,u=d(2);return p(u.deleteInstruction(i,s))}),e(17,`
                                                    `),l(18,"fa-icon",47),T(19,"artemisTranslate"),e(20,`
                                                `),a(),e(21,`
                                                `),r(22,"span",66),g("click",function(){m(t);let i=d(2).$implicit,s=d(2);return p(s.addInstruction(i))}),e(23,`
                                                    `),l(24,"fa-icon",47),T(25,"artemisTranslate"),e(26,`
                                                `),a(),e(27,`
                                            `),a(),e(28,`
                                        `),a(),e(29,`
                                    `),a(),e(30,`
                                `)}if(n&2){let t=d(4);c(5),x("metaActions",$(23,he))("defaultActions",$(24,he))("headerActions",void 0)("colorAction",void 0)("showEditButton",!1)("showPreviewButton",!1)("domainActions",$(25,he))("enableFileUpload",!1)("enableResize",!1)("resizableMinHeight",t.MarkdownEditorHeight.INLINE)("linkEditorHeightToContentHeight",!0),c(7),w("ngbTooltip",E(13,17,"artemisApp.exercise.resetAssessmentInstruction")),x("icon",t.faUndo),c(6),w("ngbTooltip",E(19,19,"artemisApp.exercise.deleteAssessmentInstruction")),x("icon",t.faTrash),c(6),w("ngbTooltip",E(25,21,"artemisApp.exercise.addAssessmentInstruction")),x("icon",t.faPlus)}}function Tt(n,_){if(n&1&&(e(0,`
                            `),r(1,"div"),e(2,`
                                `),F(3,ht,31,26,null,null,A),a(),e(5,`
                        `)),n&2){let t=d().$implicit;c(3),D(t.structuredGradingInstructions)}}function wt(n,_){if(n&1){let t=C();e(0,`
                `),r(1,"div"),e(2,`
                    `),r(3,"div",53),e(4,`
                        `),r(5,"div",54),e(6,`
                            `),r(7,"div",55),e(8,`
                                `),r(9,"div",56),e(10,`
                                    `),r(11,"input",57),M("ngModelChange",function(i){let s=m(t).$implicit;return v(s.title,i)||(s.title=i),p(i)}),g("change",function(i){let s=m(t).$implicit,u=d(2);return p(u.onCriterionTitleChange(i,s))}),a(),e(12,`
                                    `),r(13,"span",58),g("click",function(){let i=m(t).$implicit,s=d(2);return p(s.resetCriterionTitle(i))}),e(14,`
                                        `),l(15,"fa-icon",40),T(16,"artemisTranslate"),e(17,`
                                    `),a(),e(18,`
                                    `),r(19,"div",59),e(20,`
                                        `),r(21,"span",60),g("click",function(){let i=m(t).$implicit,s=d(2);return p(s.deleteGradingCriterion(i))}),e(22,`
                                            `),l(23,"fa-icon",12),e(24,`
                                            `),l(25,"span",22),e(26,`
                                        `),a(),e(27,`
                                    `),a(),e(28,`
                                `),a(),e(29,`
                            `),a(),e(30,`
                        `),a(),e(31,`
                        `),h(32,Tt,6,0),a(),e(33,`
                `),a(),e(34,`
            `)}if(n&2){let t=_.$implicit,o=d(2);c(9),Se("width",75,"%"),c(2),S("ngModel",t.title),c(4),w("ngbTooltip",E(16,7,"artemisApp.exercise.resetAssessmentCriterionTitle")),x("icon",o.faUndo),c(8),x("icon",o.faTrash),c(9),f(t.structuredGradingInstructions?32:-1)}}function Et(n,_){if(n&1){let t=C();e(0,`
    `),r(1,"div",2),e(2,`
        `),r(3,"div",8),e(4,`
            `),r(5,"div",49),e(6,`
                `),r(7,"jhi-markdown-editor-monaco",50,0),g("markdownChange",function(){m(t);let i=d();return p(i.prepareForSave())})("textWithDomainActionsFound",function(i){m(t);let s=d();return p(s.setExerciseGradingInstructionText(i))}),a(),e(9,`
            `),a(),e(10,`
            `),F(11,wt,35,9,null,null,A),r(13,"div",51),e(14,`
                `),r(15,"div",10),e(16,`
                    `),r(17,"button",52),g("click",function(){m(t);let i=d();return p(i.addGradingCriterion())}),e(18,`
                        `),l(19,"fa-icon",12),e(20,`
                        `),l(21,"span",13),e(22,`
                    `),a(),e(23,`
                `),a(),e(24,`
            `),a(),e(25,`
        `),a(),e(26,`
    `),a(),e(27,`
`)}if(n&2){let t=d();c(7),x("markdown",t.markdownEditorText)("domainActions",t.domainActionsForGradingInstructionParsing)("enableFileUpload",!1)("showEditButton",!1)("showPreviewButton",!1),c(4),D(t.exercise.gradingCriteria),c(8),x("icon",t.faPlus)}}var Ki=(()=>{class n{changeDetector=R(Fe);markdownEditors;markdownEditor;exercise;instructions;criteria;backupExercise;markdownEditorText="";showEditMode;creditsAction=new ee;gradingScaleAction=new te;descriptionAction=new ie;feedbackAction=new ne;usageCountAction=new oe;gradingInstructionAction=new re(this.creditsAction,this.gradingScaleAction,this.descriptionAction,this.feedbackAction,this.usageCountAction);gradingCriterionAction=new N(this.gradingInstructionAction);domainActionsForMainEditor=[this.creditsAction,this.gradingScaleAction,this.descriptionAction,this.feedbackAction,this.usageCountAction,this.gradingInstructionAction,this.gradingCriterionAction];domainActionsForGradingInstructionParsing=[this.creditsAction,this.gradingScaleAction,this.descriptionAction,this.feedbackAction,this.usageCountAction];faPlus=qe;faTrash=Ue;faUndo=$e;MarkdownEditorHeight=Je;ngOnInit(){this.criteria=this.exercise.gradingCriteria||[],this.backupExercise=J(this.exercise),this.markdownEditorText=this.generateMarkdown(),this.showEditMode=!0}ngAfterContentInit(){this.exercise.gradingInstructionFeedbackUsed&&(this.markdownEditorText=this.initializeExerciseGradingInstructionText(),this.initializeMarkdown())}initializeMarkdown(){let t=0;this.changeDetector.detectChanges(),this.criteria.forEach(o=>{o.structuredGradingInstructions.forEach(i=>{this.markdownEditors.get(t).markdown=this.generateInstructionText(i),t+=1})})}generateMarkdown(){let t="";if(t+=this.initializeExerciseGradingInstructionText(),this.exercise.gradingCriteria)for(let o of this.exercise.gradingCriteria)o.title==null?t+=this.generateInstructionsMarkdown(o):t+=`${N.IDENTIFIER} ${o.title}
	${this.generateInstructionsMarkdown(o)}`;return t}generateInstructionsMarkdown(t){let o="";if(t.structuredGradingInstructions==null||t.structuredGradingInstructions.length===0){this.instructions=[];let i=new z;this.instructions.push(i),t.structuredGradingInstructions=this.instructions}for(let i of t.structuredGradingInstructions)o+=this.generateInstructionText(i);return o}generateInstructionText(t){return re.IDENTIFIER+`
	`+this.generateCreditsText(t)+`
	`+this.generateGradingScaleText(t)+`
	`+this.generateInstructionDescriptionText(t)+`
	`+this.generateInstructionFeedback(t)+`
	`+this.generateUsageCount(t)+`

`}generateCreditsText(t){let o=ee.TEXT,i=ee.IDENTIFIER;return t.credits==null&&(t.credits=parseFloat(o)||0),`${i} ${t.credits||o}`}generateGradingScaleText(t){return t.gradingScale==null&&(t.gradingScale=te.TEXT),`${te.IDENTIFIER} ${t.gradingScale}`}generateInstructionDescriptionText(t){return t.instructionDescription==null&&(t.instructionDescription=ie.TEXT),`${ie.IDENTIFIER} ${t.instructionDescription}`}generateInstructionFeedback(t){return t.feedback==null&&(t.feedback=ne.TEXT),`${ne.IDENTIFIER} ${t.feedback}`}generateUsageCount(t){return t.usageCount==null&&(t.usageCount=parseInt(oe.TEXT,10)||0),`${oe.IDENTIFIER} ${t.usageCount}`}initializeExerciseGradingInstructionText(){return`${this.exercise.gradingInstructions||"Add Assessment Instruction text here"}

`}prepareForSave(){this.cleanupExerciseGradingInstructions(),this.markdownEditor.parseMarkdown(),this.exercise.gradingInstructionFeedbackUsed&&this.markdownEditors.forEach(t=>{t.parseMarkdown(this.domainActionsForGradingInstructionParsing)})}cleanupExerciseGradingInstructions(){this.exercise.gradingInstructions=void 0}hasCriterionAction(t){return t.some(({action:o})=>o instanceof N)}createSubInstructionActions(t){let o,i,s=0;if(!this.hasCriterionAction(t))this.setParentForInstructionsWithNoCriterion(t);else for(let{action:u}of t)if(s++,this.setExerciseGradingInstructionText(t),u instanceof N){o=t.slice(0,s-1),o.length!==0&&this.setParentForInstructionsWithNoCriterion(o),i=t.slice(s-1),i.length!==0&&(this.instructions=[],this.groupInstructionsToCriteria(i));break}}setParentForInstructionsWithNoCriterion(t){for(let{action:o}of t)if(this.setExerciseGradingInstructionText(t),o instanceof re){let i=new ue,s=new z;i.structuredGradingInstructions=[],i.structuredGradingInstructions.push(s),this.instructions.push(s),this.criteria.push(i)}this.exercise.gradingCriteria=this.criteria,this.setInstructionParameters(t)}groupInstructionsToCriteria(t){let o=t;this.exercise.gradingCriteria==null&&(this.exercise.gradingCriteria=[]);for(let{text:i,action:s}of t)if(s instanceof N){let u=new ue;u.title=i,this.exercise.gradingCriteria.push(u),u.structuredGradingInstructions=[];let y=t.slice(1),ae=0;for(let ct of y){let Te=ct.action;if(ae++,Te instanceof re){let we=new z;u.structuredGradingInstructions.push(we),this.instructions.push(we)}if(Te instanceof N){t=t.slice(ae,t.length);break}}}this.setInstructionParameters(o.filter(({action:i})=>!(i instanceof N)))}setInstructionParameters(t){let o=0;for(let{text:i,action:s}of t){if(!this.instructions[o])break;s instanceof ee?this.instructions[o].credits=parseFloat(i):s instanceof te?this.instructions[o].gradingScale=i:s instanceof ie?this.instructions[o].instructionDescription=i:s instanceof ne?this.instructions[o].feedback=i:s instanceof oe&&(this.instructions[o].usageCount=parseInt(i,10),o++)}}onDomainActionsFound(t){this.instructions=[],this.criteria=[],this.exercise.gradingCriteria=[],this.createSubInstructionActions(t)}onInstructionChange(t,o){this.instructions=[o],this.setInstructionParameters(t)}resetInstruction(t,o){let i=this.findCriterionIndex(o,this.exercise),s=this.findCriterionIndex(o,this.backupExercise),u=this.exercise.gradingCriteria[i].structuredGradingInstructions.indexOf(t),y;s>=0&&(y=this.findInstructionIndex(t,this.backupExercise,s),y!=null&&y>=0&&(this.exercise.gradingCriteria[i].structuredGradingInstructions[u]=J(this.backupExercise.gradingCriteria[s].structuredGradingInstructions[y]))),(s<0||y==null||y<0)&&(this.exercise.gradingCriteria[i].structuredGradingInstructions[u]=new z),this.initializeMarkdown()}findCriterionIndex(t,o){return o.gradingCriteria.findIndex(i=>i.id===t.id)}findInstructionIndex(t,o,i){return o.gradingCriteria[i].structuredGradingInstructions?.findIndex(s=>s.id===t.id)}deleteInstruction(t,o){let i=this.exercise.gradingCriteria.indexOf(o),s=this.exercise.gradingCriteria[i].structuredGradingInstructions.indexOf(t);this.exercise.gradingCriteria[i].structuredGradingInstructions.splice(s,1)}addInstruction(t){this.addNewInstruction(t),this.initializeMarkdown()}addNewInstruction(t){let o=this.exercise.gradingCriteria.indexOf(t),i=new z;this.exercise.gradingCriteria[o].structuredGradingInstructions.push(i)}addGradingCriterion(){this.addNewGradingCriterion(),this.initializeMarkdown()}addNewGradingCriterion(){let t=new ue;t.structuredGradingInstructions=[],t.structuredGradingInstructions.push(new z),this.exercise.gradingCriteria==null?this.exercise.gradingCriteria=[t]:this.exercise.gradingCriteria.push(t)}onCriterionTitleChange(t,o){let i=this.exercise.gradingCriteria.indexOf(o);this.exercise.gradingCriteria[i].title=t.target.value}resetCriterionTitle(t){let o=this.findCriterionIndex(t,this.exercise),i=this.findCriterionIndex(t,this.backupExercise);i>=0?this.exercise.gradingCriteria[o].title=J(this.backupExercise.gradingCriteria[i].title):t.title=""}deleteGradingCriterion(t){let o=this.exercise.gradingCriteria.indexOf(t);this.exercise.gradingCriteria.splice(o,1)}setExerciseGradingInstructionText(t){if(!t.length)return;let{text:o,action:i}=t[0];i===void 0&&o.length>0&&(this.exercise.gradingInstructions=o)}switchMode(){this.showEditMode=!this.showEditMode,this.markdownEditorText=this.generateMarkdown()}updateGradingInstruction(t,o){let i=this.exercise.gradingCriteria.indexOf(o),s=this.exercise.gradingCriteria[i].structuredGradingInstructions.indexOf(t);this.exercise.gradingCriteria[i].structuredGradingInstructions[s]=t}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=I({type:n,selectors:[["jhi-grading-instructions-details"]],viewQuery:function(o,i){if(o&1&&(L(pt,5),L(ut,5)),o&2){let s;X(s=Q())&&(i.markdownEditor=s.first),X(s=Q())&&(i.markdownEditors=s)}},inputs:{exercise:"exercise"},decls:3,vars:2,consts:[["markdownEditor",""],["markdownEditors",""],[1,"edit-sqi"],[1,"col-12","col-sm-auto","d-flex","me-1","mb-1"],["id","edit-mode",1,"btn","btn-block",3,"click","ngClass"],["jhiTranslate","entity.action.edit"],["id","edit-text-mode",1,"btn","btn-block",3,"click","ngClass"],["jhiTranslate","artemisApp.exercise.editText"],[1,"grading-instructions-update-border"],[1,"row","mt-4"],[1,"col-12","col-sm-6","col-xl-3","mb-1"],["id","add-criterion-button",1,"btn","btn-block","btn-success",3,"click"],[3,"icon"],["jhiTranslate","artemisApp.exercise.addAssessmentCriterion"],[1,"row","border","p-2","criterion-title-row"],[1,"col-md-9","text-start"],[1,"form-inline"],["jhiTranslate","artemisApp.exercise.assessmentCriterion","for","criterionTitle",1,"form-control-label","col-sm-2"],["type","text","id","criterionTitle","name","criterionTitle","placeholder","Criterion Title",1,"form-control","col-sm-6",3,"ngModelChange","change","ngModel"],[1,"col-md-3","text-end"],[1,"col-md-auto","input-group-btn","d-flex-end"],[1,"btn","btn-md","btn-danger",3,"click"],["jhiTranslate","artemisApp.exercise.deleteAssessmentCriterion"],[1,"table-responsive"],[1,"table","table-striped"],["width","10%"],["jhiTranslate","artemisApp.exercise.credits"],["text","artemisApp.exercise.creditsHint",1,"me-1"],["jhiTranslate","artemisApp.exercise.gradingScale"],["text","artemisApp.exercise.gradingScaleHint",1,"me-1"],["width","30%"],["jhiTranslate","artemisApp.exercise.instructionDescription"],["text","artemisApp.exercise.descriptionHint",1,"me-1"],["jhiTranslate","artemisApp.exercise.feedback"],["text","artemisApp.exercise.feedbackHint",1,"me-1"],["jhiTranslate","artemisApp.exercise.limit"],["text","artemisApp.exercise.usageCountHint",1,"me-1"],["width","5%"],["jhiTranslate","artemisApp.exercise.action"],["id","add-instruction-button",1,"re-evaluate-button","mb-3",3,"click"],[3,"icon","ngbTooltip"],[1,"grading-scale-table-row"],["type","number","step","0.5",1,"form-control","input-lg",3,"ngModelChange","change","ngModel"],["type","text",1,"form-control","input-lg",3,"ngModelChange","change","ngModel"],["type","text","rows","2",1,"form-control","input-lg",3,"ngModelChange","change","ngModel"],["type","number","step","1","min","0",1,"form-control","input-lg",3,"ngModelChange","change","ngModel"],["id","delete-instruction-row",1,"instruction-delete-button","col-2",3,"click"],["size","2x",3,"icon","ngbTooltip"],[1,"markdown-editor",3,"markdownChange","textWithDomainActionsFound","markdown","showPreviewButton","showEditButton","domainActions","enableResize","initialEditorHeight"],[1,"instructions","pb-2","row-cols-2"],[1,"editor","col-md-8",3,"markdownChange","textWithDomainActionsFound","markdown","domainActions","enableFileUpload","showEditButton","showPreviewButton"],[1,"row","mt-2"],["id","add-criteria-button",1,"btn","btn-block","btn-success",3,"click"],[1,"criteria-content","pb-2"],[1,"row"],[1,"col-md-10","text-start"],[1,"input-group","mb-1"],["type","text","placeholder","Criterion Title",1,"form-control",3,"ngModelChange","change","ngModel"],["id","reset-criteria-button",1,"col-md-auto","input-group-btn","d-flex","align-items-center","p-2",2,"cursor","pointer",3,"click"],[1,"col-md-auto","input-group-btn","d-flex","align-items-center"],["id","delete-criteria-button",1,"btn","btn-block","btn-danger",3,"click"],[1,"instructions","row-cols-2","mb-1"],[1,"editor","col-md-8",3,"markdownChange","textWithDomainActionsFound","metaActions","defaultActions","headerActions","colorAction","showEditButton","showPreviewButton","domainActions","enableFileUpload","enableResize","resizableMinHeight","linkEditorHeightToContentHeight"],[1,"form-group","text-center","col-md-4",2,"display","block"],["id","reset-button",1,"re-evaluate-button",3,"click"],["id","delete-button",1,"re-evaluate-button",3,"click"],["id","add-button",1,"re-evaluate-button",3,"click"]],template:function(o,i){o&1&&(e(0,`
`),h(1,Ct,23,10)(2,Et,28,6)),o&2&&(c(),f(i.exercise.gradingInstructionFeedbackUsed?-1:1),c(),f(i.exercise.gradingInstructionFeedbackUsed?2:-1))},dependencies:[Ve,O,P,K,ce,V,de,G,B,Z,Y,Ze,W],styles:[".edit-sqi[_ngcontent-%COMP%]   .grading-instructions-update-border[_ngcontent-%COMP%]{padding:10px;border-radius:.1rem;border-width:1px;border-style:solid;border-color:var(--edit-sqi-grading-instructions-update-border);height:auto}.edit-sqi[_ngcontent-%COMP%]   .re-evaluate-button[_ngcontent-%COMP%]{display:inline-block;padding:4px;cursor:pointer}.edit-sqi[_ngcontent-%COMP%]   .re-evaluate-button[_ngcontent-%COMP%]:hover{color:#00f}.edit-sqi[_ngcontent-%COMP%]   .instruction-delete-button[_ngcontent-%COMP%]{display:inline-block;padding:4px;cursor:pointer;color:#dc3545}.edit-sqi[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}.edit-sqi[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .edit-sqi[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]   .input-group-btn[_ngcontent-%COMP%]{display:inline-block;width:auto}.edit-sqi[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0 5px 15px}.edit-sqi[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 4px}.edit-sqi[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]   .background-file[_ngcontent-%COMP%]{display:flex}.edit-sqi[_ngcontent-%COMP%]   .criterion-title-row[_ngcontent-%COMP%]{background-color:var(--edit-sqi-criterion-title-row-background)}"]})}return n})();function It(n,_){n&1&&(e(0,`
                `),r(1,"li",10),l(2,"span",11),a(),e(3,`
            `))}function bt(n,_){n&1&&(e(0,`
                `),r(1,"li",10),l(2,"span",12),a(),e(3,`
            `))}function St(n,_){n&1&&(e(0,`
                `),r(1,"li",10),l(2,"span",13),a(),e(3,`
            `))}function vt(n,_){if(n&1&&(e(0,`
                `),r(1,"li",10),l(2,"span",14),a(),e(3,`
            `)),n&2){let t=d();c(2),w("jhiTranslate",t.immediateReleaseWarning)}}function Mt(n,_){if(n&1){let t=C();e(0,`
            `),r(1,"div",15),e(2,`
                `),r(3,"input",16),g("ngModelChange",function(){m(t);let i=d();return p(i.toggleDeleteFeedback())}),a(),e(4,`
                `),l(5,"label",17),e(6,`
            `),a(),e(7,`
        `)}if(n&2){let t=d();c(3),x("ngModel",t.deleteFeedback)}}function yt(n,_){n&1&&(e(0,`
            `),r(1,"ul",15),e(2,`
                `),r(3,"li",15),l(4,"span",18),a(),e(5,`
                `),r(6,"li",15),l(7,"span",19),a(),e(8,`
            `),a(),e(9,`
        `))}function kt(n,_){if(n&1){let t=C();e(0,`
                    `),r(1,"button",20),g("click",function(){m(t);let i=d(2);return p(i.saveExerciseWithoutReevaluation())}),e(2,`
                        `),l(3,"fa-icon",8),e(4,`
                        `),l(5,"span",21),e(6,`
                    `),a(),e(7,`
                `)}if(n&2){let t=d(2);c(),x("disabled",t.instructionDeleted&&t.deleteFeedback),c(2),x("icon",t.faExclamationTriangle)}}function At(n,_){if(n&1){let t=C();e(0,`
                    `),r(1,"button",22),g("click",function(){m(t);let i=d(2);return p(i.reEvaluateExercise())}),e(2,`
                        `),l(3,"fa-icon",8),e(4,`
                        `),l(5,"span",23),e(6,`
                    `),a(),e(7,`
                `)}if(n&2){let t=d(2);c(3),x("icon",t.faCheck)}}function Ft(n,_){if(n&1&&(e(0,`
                `),h(1,kt,8,2)(2,At,8,1)),n&2){let t=d();c(),f(t.creditChanged||t.usageCountChanged||t.instructionDeleted?1:-1),c(),f(t.creditChanged||t.usageCountChanged||t.instructionDeleted?2:-1)}}function Dt(n,_){if(n&1){let t=C();e(0,`
                `),r(1,"button",24),g("click",function(){m(t);let i=d();return p(i.saveExerciseWithoutReevaluation())}),e(2,`
                    `),l(3,"fa-icon",8),e(4,`
                    `),l(5,"span",25),e(6,`
                `),a(),e(7,`
            `)}if(n&2){let t=d();c(3),x("icon",t.faCheck)}}var ot=(()=>{class n{activeModal=R(ze);instructionDeleted=!1;creditChanged=!1;deleteFeedback=!1;usageCountChanged=!1;immediateReleaseWarning="";confirmed=new k;reEvaluated=new k;canceled=new k;faBan=le;faCheck=Le;faExclamationTriangle=Xe;clear(){this.canceled.emit(),this.activeModal.close()}saveExerciseWithoutReevaluation(){this.confirmed.emit(),this.activeModal.close()}reEvaluateExercise(){this.reEvaluated.emit(),this.activeModal.close()}toggleDeleteFeedback(){this.deleteFeedback=!this.deleteFeedback}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=I({type:n,selectors:[["jhi-exercise-update-warning"]],outputs:{confirmed:"confirmed",reEvaluated:"reEvaluated"},decls:36,vars:8,consts:[[2,"padding","20px"],[1,"warning"],["jhiTranslate","artemisApp.exercise.update.warning.warning"],[1,"warning-problem"],[1,"edit-modal-footer-content"],["jhiTranslate","artemisApp.exercise.update.warning.confirmText"],[1,"form-group"],["type","button","id","cancel-button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],[3,"icon"],["jhiTranslate","entity.action.cancel"],[1,"warning-problem-element"],["jhiTranslate","artemisApp.exercise.update.warning.creditChanged"],["jhiTranslate","artemisApp.exercise.update.warning.usageCountChanged"],["jhiTranslate","artemisApp.exercise.update.warning.instructionDeleted"],[3,"jhiTranslate"],[1,"warning-info"],["type","checkbox","name","deleteFeedback","id","deleteFeedback",1,"form-check-input",3,"ngModelChange","ngModel"],["for","deleteFeedback","jhiTranslate","artemisApp.exercise.update.warning.deleteFeedback",1,"form-check-label","text-danger"],["jhiTranslate","artemisApp.exercise.update.warning.problems"],["jhiTranslate","artemisApp.exercise.update.warning.information"],["type","submit","id","no-reevaluate-button",1,"btn","btn-warning",3,"click","disabled"],["jhiTranslate","artemisApp.exercise.update.warning.saveExerciseWithoutReevaluation"],["type","submit","id","reevaluate-button",1,"btn","btn-success",3,"click"],["jhiTranslate","artemisApp.exercise.update.warning.reevaluateExercise"],["type","submit","id","save-button",1,"btn","btn-primary",3,"click"],["jhiTranslate","entity.action.save"]],template:function(o,i){o&1&&(r(0,"div",0),e(1,`
    `),r(2,"div",1),e(3,`
        `),r(4,"div"),l(5,"span",2),a(),e(6,`
        `),r(7,"ul",3),e(8,`
            `),h(9,It,4,0)(10,bt,4,0)(11,St,4,0)(12,vt,4,1),a(),e(13,`
        `),h(14,Mt,8,1)(15,yt,10,0),a(),e(16,`
    `),r(17,"div",4),e(18,`
        `),r(19,"div",1),l(20,"span",5),a(),e(21,`
        `),r(22,"div",6),e(23,`
            `),r(24,"button",7),g("click",function(){return i.clear()}),e(25,`
                `),l(26,"fa-icon",8),e(27,`
                `),l(28,"span",9),e(29,`
            `),a(),e(30,`
            `),h(31,Ft,3,2)(32,Dt,8,1),a(),e(33,`
    `),a(),e(34,`
`),a(),e(35,`
`)),o&2&&(c(9),f(i.creditChanged?9:-1),c(),f(i.usageCountChanged?10:-1),c(),f(i.instructionDeleted?11:-1),c(),f(i.immediateReleaseWarning?12:-1),c(2),f(i.instructionDeleted?14:-1),c(),f(i.creditChanged||i.usageCountChanged||i.instructionDeleted?15:-1),c(11),x("icon",i.faBan),c(5),f(i.creditChanged||i.usageCountChanged||i.instructionDeleted?31:32))},dependencies:[O,P,se,V,G,B],styles:[".warning[_ngcontent-%COMP%]{font-weight:700;font-size:18px}.warning[_ngcontent-%COMP%]   .warning-problem[_ngcontent-%COMP%]{margin:0;padding-left:20px;font-size:15px}.warning[_ngcontent-%COMP%]   .warning-problem[_ngcontent-%COMP%]   .warning-problem-element[_ngcontent-%COMP%]{padding-top:5px}.warning[_ngcontent-%COMP%]   .warning-info[_ngcontent-%COMP%]{padding-top:5px;list-style-type:none;margin:0;padding-left:0;font-size:15px;font-weight:400}.edit-modal-footer-content[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:space-between}.edit-modal-footer-content[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .edit-modal-footer-content[_ngcontent-%COMP%]   .input-group-btn[_ngcontent-%COMP%]{width:auto}.edit-modal-footer-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0}.edit-modal-footer-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 4px}"]})}return n})();var un=(()=>{class n{modalService=R(Re);ngbModalRef;instructionDeleted;creditChanged;usageCountChanged;immediateReleaseWarning;isSaving;isExamMode;open(t){let o=this.modalService.open(t,{size:"lg",backdrop:"static"});return o.componentInstance.instructionDeleted=this.instructionDeleted,o.componentInstance.creditChanged=this.creditChanged,o.componentInstance.usageCountChanged=this.usageCountChanged,o.componentInstance.immediateReleaseWarning=this.immediateReleaseWarning,o}checkExerciseBeforeUpdate(t,o,i){return t.course?.testCourse?new Promise(s=>s(this.ngbModalRef)):(this.initializeVariables(i),this.loadExercise(t,o),this.checkImmediateRelease(t,o),new Promise(s=>{(this.creditChanged||this.instructionDeleted||this.usageCountChanged||this.immediateReleaseWarning)&&(this.ngbModalRef=this.open(ot)),s(this.ngbModalRef)}))}initializeVariables(t){this.instructionDeleted=!1,this.creditChanged=!1,this.usageCountChanged=!1,this.immediateReleaseWarning="",this.isExamMode=t}loadExercise(t,o){o.gradingCriteria?.forEach(i=>{let s=t.gradingCriteria?.find(u=>u.id===i.id);s?i.structuredGradingInstructions?.forEach(u=>{let y=s.structuredGradingInstructions?.find(ae=>ae.id===u.id);y?this.checkGradingInstruction(y,u):this.instructionDeleted=!0}):this.instructionDeleted=!0})}checkGradingInstruction(t,o){this.creditChanged=t.credits!==o.credits,this.usageCountChanged=t.usageCount!==o.usageCount}checkImmediateRelease(t,o){let i=!t.releaseDate||!Ce(t.releaseDate).isValid(),s=!t.id||o.releaseDate&&Ce(o.releaseDate).isValid();i&&!this.isExamMode&&s&&(this.immediateReleaseWarning=t.startDate?"artemisApp.exercise.noReleaseDateWarning":"artemisApp.exercise.noReleaseAndStartDateWarning")}static \u0275fac=function(o){return new(o||n)};static \u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var xe=class{id;exercise;minTeamSize;maxTeamSize;constructor(){this.minTeamSize=1,this.maxTeamSize=5}};var Vt=["minTeamSize"],Gt=["maxTeamSize"],rt=()=>["required"];function Pt(n,_){if(n&1&&(e(0,`
                            `),r(1,"div",17),e(2,`
                                `),l(3,"div",18),e(4,`
                            `),a(),e(5,`
                        `)),n&2){let t=d().$implicit;c(3),x("jhiTranslate","artemisApp.exercise.form.minTeamSize."+t.key)}}function Ot(n,_){if(n&1&&(e(0,`
                        `),h(1,Pt,6,1)),n&2){d();let t=U(21);c(),f(t.invalid&&(t.dirty||t.touched)?1:-1)}}function jt(n,_){if(n&1&&(e(0,`
                            `),r(1,"div",17),e(2,`
                                `),l(3,"div",18),e(4,`
                            `),a(),e(5,`
                        `)),n&2){let t=d().$implicit;c(3),x("jhiTranslate","artemisApp.exercise.form.maxTeamSize."+t.key)}}function zt(n,_){if(n&1&&(e(0,`
                        `),h(1,jt,6,1)),n&2){d();let t=U(30);c(),f(t.invalid&&(t.dirty||t.touched)?1:-1)}}function Rt(n,_){if(n&1){let t=C();e(0,`
            `),r(1,"div",4),e(2,`
                `),r(3,"div"),e(4,`
                    `),l(5,"label",8),e(6,`
                    `),l(7,"jhi-help-icon",9),e(8,`
                `),a(),e(9,`
                `),r(10,"div"),e(11,`
                    `),r(12,"div",10),e(13,`
                        `),r(14,"div",11),e(15,`
                            `),r(16,"label",12),e(17,"Min"),a(),e(18,`
                        `),a(),e(19,`
                        `),r(20,"input",13,0),M("ngModelChange",function(i){m(t);let s=d();return v(s.config.minTeamSize,i)||(s.config.minTeamSize=i),p(i)}),g("ngModelChange",function(i){m(t);let s=d();return p(s.updateMinTeamSize(i))}),a(),e(22,`
                        `),r(23,"div",14),e(24,`
                            `),r(25,"label",15),e(26,"Max"),a(),e(27,`
                        `),a(),e(28,`
                        `),r(29,"input",16,1),M("ngModelChange",function(i){m(t);let s=d();return v(s.config.maxTeamSize,i)||(s.config.maxTeamSize=i),p(i)}),g("ngModelChange",function(i){m(t);let s=d();return p(s.updateMaxTeamSize(i))}),a(),e(31,`
                    `),a(),e(32,`
                    `),F(33,Ot,2,1,null,null,A),T(35,"keyvalue"),T(36,"removekeys"),F(37,zt,2,1,null,null,A),T(39,"keyvalue"),T(40,"removekeys"),a(),e(41,`
            `),a(),e(42,`
        `)}if(n&2){let t=U(21),o=U(30),i=d();c(20),S("ngModel",i.config.minTeamSize),c(9),S("ngModel",i.config.maxTeamSize),c(4),D(fe(36,4,E(35,2,t.errors),$(12,rt))),c(4),D(fe(40,9,E(39,7,o.errors),$(13,rt)))}}var yn=(()=>{class n{INDIVIDUAL=H.INDIVIDUAL;TEAM=H.TEAM;exercise;isImport;minTeamSizeField;maxTeamsizeField;formValid;formValidChanges=new Ee;config;modePickerOptions=[{value:H.INDIVIDUAL,labelKey:"artemisApp.exercise.modes.individual",btnClass:"btn-secondary"},{value:H.TEAM,labelKey:"artemisApp.exercise.modes.team",btnClass:"btn-info"}];inputFieldSubscriptions=[];ngOnInit(){this.config=this.exercise.teamAssignmentConfig||new xe,this.calculateFormValid()}ngAfterViewChecked(){this.minTeamSizeField?.valueChanges?.observed||this.inputFieldSubscriptions.push(this.minTeamSizeField?.valueChanges?.subscribe(()=>this.calculateFormValid())),this.maxTeamsizeField?.valueChanges?.observed||this.inputFieldSubscriptions.push(this.maxTeamsizeField?.valueChanges?.subscribe(()=>this.calculateFormValid()))}ngOnDestroy(){for(let t of this.inputFieldSubscriptions)t?.unsubscribe()}calculateFormValid(){this.formValid=!!(!this.exercise.mode||this.exercise.mode===H.INDIVIDUAL||this.maxTeamsizeField?.valid&&this.minTeamSizeField?.valid),this.formValidChanges.next(this.formValid)}get changeExerciseModeDisabled(){return!this.isImport&&!!this.exercise.id||!!this.exercise.exerciseGroup}onExerciseModeChange(t){this.exercise.mode=t,t===H.TEAM?this.applyCurrentConfig():this.exercise.teamAssignmentConfig=void 0,this.calculateFormValid()}updateMinTeamSize(t){this.config.maxTeamSize=Math.max(this.config.maxTeamSize,t),this.applyCurrentConfig()}updateMaxTeamSize(t){this.config.minTeamSize=Math.min(this.config.minTeamSize,t),this.applyCurrentConfig()}applyCurrentConfig(){this.exercise.teamAssignmentConfig=J(this.config)}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=I({type:n,selectors:[["jhi-team-config-form-group"]],viewQuery:function(o,i){if(o&1&&(L(Vt,5),L(Gt,5)),o&2){let s;X(s=Q())&&(i.minTeamSizeField=s.first),X(s=Q())&&(i.maxTeamsizeField=s.first)}},inputs:{exercise:"exercise",isImport:"isImport"},decls:22,vars:4,consts:[["minTeamSize","ngModel"],["maxTeamSize","ngModel"],[1,"form-group"],[1,"row"],[1,"col-auto"],["jhiTranslate","artemisApp.exercise.participation"],["text","artemisApp.exercise.modeTooltip"],[3,"valueChange","options","value","disabled"],["jhiTranslate","artemisApp.exercise.teamAssignmentConfig.teamSize",1,"label-narrow"],["text","artemisApp.exercise.teamAssignmentConfig.teamSizeTooltip"],[1,"input-group"],[1,"input-group-prepend"],["for","field_minTeamSize",1,"input-group-text"],["name","minTeamSize","id","field_minTeamSize","type","number","min","1","max","99","required","",1,"form-control","input-number-short",3,"ngModelChange","ngModel"],[1,"input-group-append"],["for","field_maxTeamSize",1,"input-group-text"],["name","maxTeamSize","id","field_maxTeamSize","type","number","min","1","max","99","required","",1,"form-control","input-number-short",3,"ngModelChange","ngModel"],[1,"alert","alert-danger"],[3,"jhiTranslate"]],template:function(o,i){o&1&&(r(0,"div",2),e(1,`
    `),r(2,"div",3),e(3,`
        `),r(4,"div",4),e(5,`
            `),r(6,"div"),e(7,`
                `),l(8,"label",5),e(9,`
                `),l(10,"jhi-help-icon",6),e(11,`
            `),a(),e(12,`
            `),r(13,"div"),e(14,`
                `),r(15,"jhi-mode-picker",7),g("valueChange",function(u){return i.onExerciseModeChange(u)}),a(),e(16,`
            `),a(),e(17,`
        `),a(),e(18,`
        `),h(19,Rt,43,14),a(),e(20,`
`),a(),e(21,`
`)),o&2&&(c(15),x("options",i.modePickerOptions)("value",i.exercise.mode)("disabled",i.changeExerciseModeDisabled),c(4),f(i.exercise.mode===i.TEAM?19:-1))},dependencies:[O,Z,et,P,K,ce,V,Oe,de,Pe,G,Ge,tt],styles:[".input-number-short[_ngcontent-%COMP%]{width:60px;padding-right:.5rem}"]})}return n})();var at=(()=>{class n{faHandShakeAngle=He;ButtonType=Ye;switchEditMode=be();isSimpleMode=j.required();buttonSize=j(me.MEDIUM);disabled=j(!0);toggleEditMode(){this.switchEditMode.emit()}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=I({type:n,selectors:[["jhi-switch-edit-mode-button"]],inputs:{isSimpleMode:[1,"isSimpleMode"],buttonSize:[1,"buttonSize"],disabled:[1,"disabled"]},outputs:{switchEditMode:"switchEditMode"},decls:2,vars:5,consts:[["id","switch-edit-mode-button",3,"onClick","btnType","btnSize","icon","title","disabled"]],template:function(o,i){o&1&&(r(0,"jhi-button",0),g("onClick",function(){return i.toggleEditMode()}),a(),e(1,`
`)),o&2&&x("btnType",i.ButtonType.PRIMARY)("btnSize",i.buttonSize())("icon",i.faHandShakeAngle)("title",i.isSimpleMode()?"artemisApp.programmingExercise.home.switchToAdvancedMode":"artemisApp.programmingExercise.home.switchToSimpleMode")("disabled",i.disabled())},dependencies:[pe],encapsulation:2})}return n})();var st=(()=>{class n{isCreation=!1;isImport;notificationText;notificationTextChange=new k;onInputChanged(){this.notificationTextChange.emit(this.notificationText)}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=I({type:n,selectors:[["jhi-exercise-update-notification"]],inputs:{isCreation:"isCreation",isImport:"isImport",notificationText:"notificationText"},outputs:{notificationTextChange:"notificationTextChange"},decls:4,vars:7,consts:[["minlength","3","type","text","name","notificationText","id","field_notification_text",1,"form-control","form-control-sm",3,"change","ngModelChange","placeholder","title","ngModel"]],template:function(o,i){o&1&&(r(0,"input",0),T(1,"artemisTranslate"),T(2,"artemisTranslate"),g("change",function(){return i.onInputChanged()}),M("ngModelChange",function(u){return v(i.notificationText,u)||(i.notificationText=u),u}),a(),e(3,`
`)),o&2&&(w("placeholder",E(1,3,"artemisApp.exercise.notificationText")),w("title",E(2,5,"artemisApp.exercise.notificationText")),S("ngModel",i.notificationText))},dependencies:[P,K,V,je,G,W],encapsulation:2})}return n})();function Wt(n,_){if(n&1){let t=C();e(0,`
            `),r(1,"div",8),e(2,`
                `),r(3,"div",9),T(4,"artemisTranslate"),e(5,`
                    `),r(6,"jhi-switch-edit-mode-button",10),g("switchEditMode",function(){m(t);let i=d();return p(i.switchEditMode())}),a(),e(7,`
                `),a(),e(8,`
                `),l(9,"jhi-help-icon",11),e(10,`
            `),a(),e(11,`
        `)}if(n&2){let t=d();c(3),w("ngbTooltip",E(4,6,"artemisApp.programmingExercise.auxiliaryRepository.invalidConfigurationPreventsSwitchingEditMode")),x("disableTooltip",t.areAuxiliaryRepositoriesValid()),c(3),x("isSimpleMode",t.isSimpleMode())("buttonSize",t.ButtonSize.SMALL)("disabled",!t.areAuxiliaryRepositoriesValid()),c(3),x("text",t.isSimpleMode()?"artemisApp.programmingExercise.home.advancedModeTooltip":"artemisApp.programmingExercise.home.simpleModeTooltip")}}function Bt(n,_){if(n&1){let t=C();e(0,`
        `),r(1,"jhi-exercise-update-notification",12),g("notificationTextChange",function(i){m(t);let s=d();return p(s.notificationTextChange.next(i))}),a(),e(2,`
    `)}if(n&2){let t=d();c(),x("notificationText",t.notificationText)}}function Nt(n,_){n&1&&(e(0,`
            `),l(1,"span",13),e(2,`
        `))}function Ut(n,_){if(n&1&&(e(0,`
                `),r(1,"div"),e(2,`
                    `),l(3,"p",14),e(4,`
                `),a(),e(5,`
            `)),n&2){let t=_.$implicit;c(3),w("jhiTranslate",t.translateKey)}}function $t(n,_){if(n&1&&(e(0,`
            `),F(1,Ut,6,1,null,null,A)),n&2){let t=d();c(),D(t.invalidReasons)}}function Ht(n,_){if(n&1&&(e(0,`
            `),r(1,"div",15),e(2,`
                `),l(3,"fa-icon",16),e(4,`

                `),l(5,"span",17),e(6,`
                `),r(7,"span",18),e(8),a(),e(9,`
            `),a(),e(10,`
        `)),n&2){let t=d(),o=U(11);c(),x("ngbTooltip",o),c(2),x("fixedWidth",!0)("icon",t.faExclamationCircle),c(5),ye("(",t.invalidReasons.length,")")}}var io=(()=>{class n{ButtonSize=me;faSave=Ne;faBan=le;faExclamationCircle=We;isSaving=!1;isDisabled=!1;invalidReasons=[];notificationText;switchEditMode;isImport=j();isCreation=j();isSimpleMode=j();areAuxiliaryRepositoriesValid=j(!0);notificationTextChange=new k;save=new k;onCancel=new k;saveTitle=De(()=>this.isImport()?"entity.action.import":this.isCreation()?"entity.action.generate":"entity.action.save");static \u0275fac=function(o){return new(o||n)};static \u0275cmp=I({type:n,selectors:[["jhi-form-footer"]],inputs:{isSaving:"isSaving",isDisabled:"isDisabled",invalidReasons:"invalidReasons",notificationText:"notificationText",switchEditMode:"switchEditMode",isImport:[1,"isImport"],isCreation:[1,"isCreation"],isSimpleMode:[1,"isSimpleMode"],areAuxiliaryRepositoriesValid:[1,"areAuxiliaryRepositoriesValid"]},outputs:{notificationTextChange:"notificationTextChange",save:"save",onCancel:"onCancel"},decls:25,vars:12,consts:[["tooltipTranslate",""],[1,"update-footer","gap-4"],[1,"text-start"],[1,"d-flex","gap-2","text-end"],["type","button","id","cancel-save",1,"btn","btn-sm","btn-secondary",3,"click"],[1,"sm",3,"fixedWidth","icon"],["jhiTranslate","entity.action.cancel",1,"d-none","d-sm-inline"],["id","save-entity",3,"onClick","shouldToggle","disabled","isLoading","icon","title","btnSize"],[1,"d-flex","align-items-center"],[3,"ngbTooltip","disableTooltip"],[1,"me-1",3,"switchEditMode","isSimpleMode","buttonSize","disabled"],[3,"text"],[1,"flex-grow-1","w-100",3,"notificationTextChange","notificationText"],["jhiTranslate","entity.action.saving",1,"badge","bg-secondary","align-content-center"],[3,"jhiTranslate"],["tooltip-placement","top-right auto",1,"badge","bg-danger","align-content-center","toggle-width",3,"ngbTooltip"],[3,"fixedWidth","icon"],["jhiTranslate","global.form.invalidInput",1,"d-none","d-md-inline"],[1,"d-none","d-md-inline"]],template:function(o,i){if(o&1){let s=C();r(0,"div",1),e(1,`
    `),r(2,"div",2),e(3,`
        `),h(4,Wt,12,8),a(),e(5,`
    `),h(6,Bt,3,1),r(7,"div",3),e(8,`
        `),h(9,Nt,3,0)(10,$t,3,0,"ng-template",null,0,Ae),e(12,`
        `),h(13,Ht,11,4),r(14,"button",4),g("click",function(){return m(s),p(i.onCancel.next())}),e(15,`
            `),l(16,"fa-icon",5),e(17,`
            `),l(18,"span",6),e(19,`
        `),a(),e(20,`
        `),r(21,"jhi-button",7),g("onClick",function(){return m(s),p(i.save.next())}),a(),e(22,`
    `),a(),e(23,`
`),a(),e(24,`
`)}o&2&&(c(4),f(i.isSimpleMode()!==void 0&&i.switchEditMode!==void 0&&!i.isImport()?4:-1),c(2),f(!i.isCreation()&&!i.isImport()?6:-1),c(3),f(i.isSaving?9:-1),c(4),f(i.invalidReasons.length?13:-1),c(3),x("fixedWidth",!0)("icon",i.faBan),c(5),x("shouldToggle",!0)("disabled",!!i.invalidReasons.length||i.isDisabled)("isLoading",i.isSaving)("icon",i.faSave)("title",i.saveTitle())("btnSize",i.ButtonSize.SMALL))},dependencies:[Y,at,Z,st,O,B,pe,W],styles:[".update-footer[_ngcontent-%COMP%]{margin-bottom:-1rem;padding:.5rem 0 .25rem;width:100%;position:sticky;bottom:0;left:0;z-index:10;background:var(--update-footer-background);display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border-color)}.toggle-width[_ngcontent-%COMP%]{min-width:40px}"]})}return n})();export{ai as a,Ki as b,un as c,yn as d,io as e};
//# sourceMappingURL=chunk-OBRXVNR3.js.map
