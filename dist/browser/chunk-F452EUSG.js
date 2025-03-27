import{b as K}from"./chunk-2SI4Q343.js";import{a as k}from"./chunk-IJQAYIKN.js";import{c as J}from"./chunk-IJRVZ46L.js";import{a as Z}from"./chunk-DIZEKHOC.js";import{n as W}from"./chunk-Z2YUBN6N.js";import{F as O,K as V}from"./chunk-VZRSC3LP.js";import{a as B}from"./chunk-K3W6YFKH.js";import{d as X}from"./chunk-EDXSOKK5.js";import{G as D}from"./chunk-Z4VHWOB5.js";import{a as G}from"./chunk-U54OSGNH.js";import{n as L}from"./chunk-IOA4DPXY.js";import{Db as o,Dc as C,Ea as T,Ed as F,Ma as f,Mc as b,Na as g,Oc as a,Rc as v,Tb as I,Uc as U,Va as E,Zb as x,cd as Q,dd as e,ed as M,fd as y,gd as R,kc as c,pc as z,pd as H,rd as P,sc as d,td as N,uc as S,vc as w,wb as _,wc as q,xc as l,yc as u,yd as $,zc as p,zd as j}from"./chunk-5LC5EQRR.js";var A=class{id;text;isCorrect;spot;submittedAnswer};var tt=(i,r,t)=>({disabled:i,result:r,incorrect:t}),et=i=>({incorrect:i});function it(i,r){if(i&1&&(e(0,`
                                `),p(1,"div",6),e(2,`
                            `)),i&2){let t=a().$implicit;o(),c("innerHTML",t,_)}}function nt(i,r){if(i&1){let t=C();e(0,`
                                `),l(1,"div",7),e(2,`
                                    `),l(3,"input",8),b("change",function(){f(t);let s=a(4);return g(s.setSubmittedText())}),u(),e(4,`
                                `),u(),e(5,`
                            `)}if(i&2){let t=a(),n=t.$implicit,s=t.$index,h=a().$index,m=a(2);o(3),v("value",m.getSubmittedTextForSpotAsString(n)),U("id","solution-",h,"-",s,"-",m.shortAnswerQuestion.id,""),c("maxLength",m.MAX_CHARACTER_COUNT)("disabled",m.clickDisabled)}}function ot(i,r){if(i&1&&(e(0,`
                        `),l(1,"div",5),e(2,`
                            `),x(3,it,3,1)(4,nt,6,7),u(),e(5,`
                    `)),i&2){let t=r.$implicit,n=a(3);o(3),d(n.shortAnswerQuestionUtil.isInputField(t)?-1:3),o(),d(n.shortAnswerQuestionUtil.isInputField(t)?4:-1)}}function st(i,r){if(i&1&&(e(0,`
                `),l(1,"div",4),e(2,`
                    `),w(3,ot,6,2,null,null,S),p(5,"br"),e(6,`
                `),u(),e(7,`
            `)),i&2){let t=r.$implicit;o(3),q(t)}}function rt(i,r){if(i&1&&(e(0,`
        `),l(1,"div"),e(2,`
            `),w(3,st,8,0,null,null,S),u(),e(5,`
    `)),i&2){let t=a();o(3),q(t.textParts)}}function at(i,r){if(i&1&&(e(0,`
                                `),p(1,"div",6),e(2,`
                            `)),i&2){let t=a().$implicit;o(),c("innerHTML",t,_)}}function lt(i,r){if(i&1&&(e(0,`
                                `),l(1,"div",9),$(2,"artemisTranslate"),e(3,`
                                    `),p(4,"input",10),e(5,`
                                `),u(),e(6,`
                            `)),i&2){let t=a().$implicit,n=a(3);o(),c("ngbTooltip",n.classifyInputField(t)==="invalid"?j(2,7,"artemisApp.shortAnswerSpot.invalidSpot"):void 0),o(3),z("short-answer-question-container__input ",n.classifyInputField(t),""),v("value",n.getTextForSpotAsString(t)),v("size",n.getSizeForSpot(t)),c("maxLength",n.MAX_CHARACTER_COUNT)}}function ut(i,r){if(i&1&&(e(0,`
                        `),l(1,"div",5),e(2,`
                            `),x(3,at,3,1)(4,lt,7,9),u(),e(5,`
                    `)),i&2){let t=r.$implicit,n=a(3);o(3),d(n.shortAnswerQuestionUtil.isInputField(t)?-1:3),o(),d(n.shortAnswerQuestionUtil.isInputField(t)?4:-1)}}function pt(i,r){if(i&1&&(e(0,`
                `),l(1,"div",4),e(2,`
                    `),w(3,ut,6,2,null,null,S),p(5,"br"),e(6,`
                `),u(),e(7,`
            `)),i&2){let t=r.$implicit;o(3),q(t)}}function dt(i,r){if(i&1&&(e(0,`
        `),l(1,"div"),e(2,`
            `),w(3,pt,8,0,null,null,S),u(),e(5,`
    `)),i&2){let t=a();o(3),q(t.textParts)}}function ct(i,r){i&1&&(e(0,`
        `),p(1,"span",11),e(2,`
    `))}function mt(i,r){if(i&1&&(e(0,`
                `),p(1,"div",6),e(2,`
            `)),i&2){let t=a(2);o(),c("innerHTML",t.renderedQuestion.hint,_)}}function xt(i,r){if(i&1&&(e(0,`
                `),l(1,"span",13),e(2,`
                    `),p(3,"fa-icon",14),e(4,`
                    `),p(5,"span",15),e(6,`
                `),u(),e(7,`
            `)),i&2){a();let t=Q(4),n=a();o(),c("ngbPopover",t),o(2),c("icon",n.farQuestionCircle)}}function ht(i,r){if(i&1&&(e(0,`
                `),p(1,"div",6),e(2,`
            `)),i&2){let t=a(2);o(),c("innerHTML",t.renderedQuestion.explanation,_)}}function _t(i,r){if(i&1&&(e(0,`
                `),l(1,"span",16),e(2,`
                    `),p(3,"fa-icon",14),e(4,`
                    `),p(5,"span",17),e(6,`
                `),u(),e(7,`
            `)),i&2){a();let t=Q(10),n=a();o(),c("ngbPopover",t),o(2),c("icon",n.faExclamationCircle)}}function St(i,r){if(i&1&&(e(0,`
        `),l(1,"div",12),e(2,`
            `),x(3,mt,3,1,"ng-template",null,0,F),e(5,`
            `),x(6,xt,8,2),p(7,"br"),e(8,`
            `),x(9,ht,3,1,"ng-template",null,1,F),e(11,`
            `),x(12,_t,8,2),u(),e(13,`
    `)),i&2){let t=a();o(6),d(t.shortAnswerQuestion.hint?6:-1),o(6),d(t.shortAnswerQuestion.explanation&&t.showResult?12:-1)}}function wt(i,r){if(i&1&&(e(0,`
        `),l(1,"div",18),e(2,`
            `),p(3,"span",19),e(4,`
            `),l(5,"span"),e(6),u(),e(7,`
        `),u(),e(8,`
    `)),i&2){let t=a();o(6),M(t.shortAnswerQuestion.points)}}function qt(i,r){if(i&1&&(e(0,`
        `),l(1,"div",20),e(2,`
            `),p(3,"span",21),e(4,`
            `),l(5,"span",22),e(6),u(),e(7,`
            `),l(8,"span",22),e(9,`
                `),p(10,"jhi-quiz-scoring-infostudent-modal",23),e(11,`
            `),u(),e(12,`
        `),u(),e(13,`
    `)),i&2){let t=a();o(),c("ngClass",P(7,et,(t.score||0)<t.shortAnswerQuestion.points)),o(5),R("",t.score||0,"/",t.shortAnswerQuestion.points,""),o(4),c("score",t.score)("question",t.shortAnswerQuestion)("shortAnswerText",t.submittedTexts)("questionIndex",t.questionIndex)}}function ft(i,r){if(i&1){let t=C();e(0,`
                `),l(1,"div",24),b("click",function(){f(t);let s=a(2);return g(s.showSampleSolution())}),u(),e(2,`
            `)}}function gt(i,r){if(i&1){let t=C();e(0,`
                `),l(1,"div",25),b("click",function(){f(t);let s=a(2);return g(s.hideSampleSolution())}),u(),e(2,`
            `)}}function Ct(i,r){if(i&1&&(e(0,`
        `),l(1,"div"),e(2,`
            `),x(3,ft,3,0)(4,gt,3,0),u(),e(5,`
    `)),i&2){let t=a();o(3),d(t.showingSampleSolution?-1:3),o(),d(t.showingSampleSolution?4:-1)}}var Vt=(()=>{class i{artemisMarkdown=T(Z);shortAnswerQuestionUtil=T(k);shortAnswerQuestion;_forceSampleSolution;set question(t){this.shortAnswerQuestion=t,this.watchCollection()}submittedTexts;clickDisabled;showResult;questionIndex;score;set forceSampleSolution(t){this._forceSampleSolution=t,this.forceSampleSolution&&this.showSampleSolution()}get forceSampleSolution(){return this._forceSampleSolution}fnOnSubmittedTextUpdate;submittedTextsChange=new E;MAX_CHARACTER_COUNT=255;showingSampleSolution=!1;renderedQuestion;sampleSolutions=[];textParts;faExclamationCircle=D;farQuestionCircle=W;watchCollection(){this.renderedQuestion=new J;let t=this.shortAnswerQuestionUtil.divideQuestionTextIntoTextParts(this.shortAnswerQuestion.text);this.textParts=this.shortAnswerQuestionUtil.transformTextPartsIntoHTML(t),this.renderedQuestion.text=this.artemisMarkdown.safeHtmlForMarkdown(this.shortAnswerQuestion.text),this.renderedQuestion.hint=this.artemisMarkdown.safeHtmlForMarkdown(this.shortAnswerQuestion.hint),this.renderedQuestion.explanation=this.artemisMarkdown.safeHtmlForMarkdown(this.shortAnswerQuestion.explanation)}setSubmittedText(){this.submittedTexts=[];let t=0;for(let n of this.textParts){let s=0;for(let h of n){if(this.shortAnswerQuestionUtil.isInputField(h)){let m=new A;m.text=document.getElementById("solution-"+t+"-"+s+"-"+this.shortAnswerQuestion.id).value,m.spot=this.shortAnswerQuestionUtil.getSpot(this.shortAnswerQuestionUtil.getSpotNr(h),this.shortAnswerQuestion),this.submittedTexts.push(m)}s++}t++}this.submittedTextsChange.emit(this.submittedTexts),this.fnOnSubmittedTextUpdate&&this.fnOnSubmittedTextUpdate()}showSampleSolution(){this.sampleSolutions=this.shortAnswerQuestionUtil.getSampleSolutions(this.shortAnswerQuestion),this.showingSampleSolution=!0}hideSampleSolution(){this.showingSampleSolution=!1}getSubmittedTextForSpot(t){return this.submittedTexts.filter(n=>n.spot.spotNr===this.shortAnswerQuestionUtil.getSpotNr(t))[0]}getSubmittedTextForSpotAsString(t){return this.getSubmittedTextForSpot(t)?.text??""}getSubmittedTextSizeForSpot(t){let n=this.getSubmittedTextForSpotAsString(t);return n!==""?n.length+2:5}getSampleSolutionForSpot(t){let n=this.shortAnswerQuestion.spots.findIndex(s=>s.spotNr===this.shortAnswerQuestionUtil.getSpotNr(t));return this.sampleSolutions[n]}getSampleSolutionForSpotAsString(t){return this.getSampleSolutionForSpot(t)?.text??""}getSampleSolutionSizeForSpot(t){let n=this.getSampleSolutionForSpotAsString(t);return n!==""?n.length+2:5}getTextForSpotAsString(t){return this.showingSampleSolution?this.getSampleSolutionForSpotAsString(t):this.getSubmittedTextForSpotAsString(t)}getSizeForSpot(t){return this.showingSampleSolution?this.getSampleSolutionSizeForSpot(t):this.getSubmittedTextSizeForSpot(t)}classifyInputField(t){return this.shortAnswerQuestion.invalid||this.shortAnswerQuestionUtil.getSpot(this.shortAnswerQuestionUtil.getSpotNr(t),this.shortAnswerQuestion).invalid?"invalid":this.showingSampleSolution?"completely-correct":this.getSubmittedTextForSpot(t)?.isCorrect!==!0?"wrong":this.isSubmittedTextCompletelyCorrect(t)?"completely-correct":"correct"}isSubmittedTextCompletelyCorrect(t){let n=!1,h=this.shortAnswerQuestionUtil.getAllSolutionsForSpot(this.shortAnswerQuestion.correctMappings,this.shortAnswerQuestionUtil.getSpot(this.shortAnswerQuestionUtil.getSpotNr(t),this.shortAnswerQuestion))?.filter(m=>m.text?.trim()===this.getSubmittedTextForSpot(t)?.text?.trim());return h&&h.length>0&&(n=!0),n}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=I({type:i,selectors:[["jhi-short-answer-question"]],inputs:{question:"question",submittedTexts:"submittedTexts",clickDisabled:"clickDisabled",showResult:"showResult",questionIndex:"questionIndex",score:"score",forceSampleSolution:"forceSampleSolution",fnOnSubmittedTextUpdate:"fnOnSubmittedTextUpdate"},outputs:{submittedTextsChange:"submittedTextsChange"},features:[H([k])],decls:20,vars:14,consts:[["renderedHint",""],["renderedExplanation",""],[1,"sa-question",3,"ngClass"],[1,"question-title-display"],[1,"short-answer-question-display"],[1,"short-answer-question-display__element"],[3,"innerHTML"],["id","sa-question-container-A",1,"short-answer-question-container"],["type","text",1,"short-answer-question-container__input",3,"change","maxLength","disabled","value","id"],[1,"short-answer-question-container",3,"ngbTooltip"],["type","text","disabled","",3,"maxLength","value","size"],["jhiTranslate","artemisApp.quizQuestion.invalidText",2,"color","red"],[1,"hint"],["placement","right auto","triggers","mouseenter:mouseleave",1,"label","label-info",3,"ngbPopover"],[3,"icon"],["jhiTranslate","artemisApp.quizQuestion.hint"],["placement","right auto","triggers","mouseenter:mouseleave",1,"label","label-primary",3,"ngbPopover"],["jhiTranslate","artemisApp.quizQuestion.explanation"],[1,"question-score"],["jhiTranslate","artemisApp.quizQuestion.score",1,"colon-suffix"],[1,"question-score","result",3,"ngClass"],["jhiTranslate","artemisApp.quizQuestion.yourScore",1,"colon-suffix"],[1,"show-explanation"],[3,"score","question","shortAnswerText","questionIndex"],["jhiTranslate","artemisApp.quizQuestion.showSampleSolution",1,"btn","btn-outline-primary",3,"click"],["jhiTranslate","artemisApp.quizQuestion.hideSampleSolution",1,"btn","btn-outline-primary",3,"click"]],template:function(n,s){n&1&&(l(0,"div",2),e(1,`
    `),l(2,"h4",3),e(3,`
        `),l(4,"span"),e(5),u(),e(6),u(),e(7,`
    `),x(8,rt,6,0)(9,dt,6,0)(10,ct,3,0)(11,St,14,2)(12,wt,9,1)(13,qt,14,9),p(14,"br"),e(15,`
    `),p(16,"br"),e(17,`
    `),x(18,Ct,6,2),u(),e(19,`
`)),n&2&&(c("ngClass",N(10,tt,s.clickDisabled&&!s.showResult,s.showResult&&!s.forceSampleSolution,(s.score||0)<s.shortAnswerQuestion.points&&!s.forceSampleSolution)),o(5),y("",s.questionIndex,")"),o(),y(" ",s.shortAnswerQuestion.title,`
    `),o(2),d(s.showResult?-1:8),o(),d(s.showResult?9:-1),o(),d(s.shortAnswerQuestion.invalid?10:-1),o(),d(s.shortAnswerQuestion.hint||s.shortAnswerQuestion.explanation&&s.showResult?11:-1),o(),d(!s.showResult||s.forceSampleSolution?12:-1),o(),d(s.showResult&&!s.forceSampleSolution?13:-1),o(5),d(s.showResult&&!s.forceSampleSolution?18:-1))},dependencies:[L,V,G,O,X,K,B],styles:[`.sa-question{background:var(--quiz-question-background);border:1px solid var(--quiz-question-border-color);box-sizing:border-box;margin-bottom:18px;padding:20px;position:relative;width:100%;word-break:break-word}.sa-question .short-answer-question-display{display:flex;flex-wrap:wrap;max-width:100%}.sa-question .short-answer-question-display__element{display:inline-flex}.sa-question .short-answer-question-display .short-answer-question-container{display:inline-block;position:relative}.sa-question .short-answer-question-display .short-answer-question-container__input{border:1px solid var(--sa-question-container-input-border);background-color:var(--sa-question-container-input-background);color:var(--bs-body-color);line-height:35px;margin-bottom:10px}.sa-question .short-answer-question-display .short-answer-question-container__input.invalid{background:var(--sa-question-input-invalid-background)}.sa-question .short-answer-question-display .short-answer-question-container__input.wrong{background:var(--sa-question-input-wrong-background)}.sa-question .short-answer-question-display .short-answer-question-container__input.correct{background:var(--sa-question-input-correct-background)}.sa-question .short-answer-question-display .short-answer-question-container__input.completely-correct{background:var(--sa-question-input-completely-correct-background)}
`,`.dnd-question.disabled,.mc-question.disabled,.sa-question.disabled{color:var(--quiz-participation-question-disabled-color);background:var(--quiz-participation-question-disabled-background)}.dnd-question.result,.mc-question.result,.sa-question.result{border-color:var(--quiz-participation-question-result-border-color)}.dnd-question.result .show-explanation,.mc-question.result .show-explanation,.sa-question.result .show-explanation{display:inline-block}.dnd-question.result.incorrect,.mc-question.result.incorrect,.sa-question.result.incorrect{border-color:var(--quiz-participation-question-result-incorrect-border-color)}.dnd-question h2,.mc-question h2,.sa-question h2{margin:0 90px 0 0}.dnd-question h2 span,.mc-question h2 span,.sa-question h2 span{color:var(--quiz-participation-question-h2-span-color)}.dnd-question p,.mc-question p,.sa-question p{margin:10px 0;font-size:16px}.dnd-question .question-title-display,.mc-question .question-title-display,.sa-question .question-title-display{max-width:80%}.dnd-question .question-score,.mc-question .question-score,.sa-question .question-score{position:absolute;top:20px;right:20px;max-width:30%}@media (max-width: 900px){.dnd-question .question-score,.mc-question .question-score,.sa-question .question-score{position:relative;top:0;right:0;max-width:100%}}.dnd-question .question-score.result,.mc-question .question-score.result,.sa-question .question-score.result{font-weight:700;color:var(--quiz-participation-question-score-result)}.dnd-question .question-score.result.incorrect,.mc-question .question-score.result.incorrect,.sa-question .question-score.result.incorrect{color:var(--quiz-participation-question-score-incorrect-result)}.dnd-question .label,.mc-question .label,.sa-question .label{cursor:pointer;margin:2px 0}.dnd-question .label+ngb-popover-window,.mc-question .label+ngb-popover-window,.sa-question .label+ngb-popover-window{max-width:500px}.dnd-question ngb-popover-window,.mc-question ngb-popover-window,.sa-question ngb-popover-window{max-width:500px}@media (max-width: 991.98px){.dnd-question ngb-popover-window,.mc-question ngb-popover-window,.sa-question ngb-popover-window{max-width:300px!important}}@media (max-width: 575.98px){.dnd-question ngb-popover-window,.mc-question ngb-popover-window,.sa-question ngb-popover-window{max-width:200px!important}}
`],encapsulation:2})}return i})();export{Vt as a};
//# sourceMappingURL=chunk-F452EUSG.js.map
