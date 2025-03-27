import{a as E,b as le,c as fe,d as ue,e as ge,f as pe}from"./chunk-GITU5WHL.js";import{b as se}from"./chunk-65Z25AP3.js";import{b as F,f as P,g as ce,j as D}from"./chunk-3JSWSN6W.js";import{b as de}from"./chunk-T624HJJL.js";import{b as oe}from"./chunk-O26CMRR4.js";import{K as J}from"./chunk-VZRSC3LP.js";import{C as $,K as H,c as q,h as z,m as Q,o as K}from"./chunk-WA5GEAJB.js";import{a as ie}from"./chunk-K3W6YFKH.js";import{d as ae,e as re}from"./chunk-EDXSOKK5.js";import{Bb as Z,Fd as ne,b as X,kb as Y,sd as ee,wd as te}from"./chunk-Z4VHWOB5.js";import{a as y}from"./chunk-U54OSGNH.js";import{Ad as W,Db as r,Dc as S,Ea as T,Ma as b,Mc as m,Na as k,Oc as c,Tb as v,Va as _,Za as N,Zb as x,dd as e,ed as G,f as j,fd as U,kc as s,ld as M,mc as R,md as w,nd as B,rd as L,sc as p,uc as O,vc as A,wc as I,xc as o,yc as d,yd as h,zc as l,zd as C}from"./chunk-5LC5EQRR.js";import{j as V}from"./chunk-3E746U5Y.js";var ke=i=>({text:i});function _e(i,g){if(i&1&&(e(0,`
            `),l(1,"jhi-feedback-suggestion-badge",11),e(2,`
        `)),i&2){let t=c();r(),s("feedback",t.feedback)("useDefaultText",t.useDefaultFeedbackSuggestionBadgeText)}}function xe(i,g){if(i&1&&(e(0,`
            `),l(1,"jhi-grading-instruction-link-icon",12),e(2,`
        `)),i&2){let t=c();r(),s("feedback",t.feedback)}}function he(i,g){if(i&1){let t=S();e(0,`
            `),o(1,"button",13),h(2,"feedbackContent"),h(3,"quoted"),m("delete",function(){b(t);let n=c();return k(n.delete())}),e(4,`
                `),l(5,"fa-icon",14),e(6,`
            `),d(),e(7,`
        `)}if(i&2){let t=c();r(),s("buttonSize",t.ButtonSize.SMALL)("translateValues",L(11,ke,W(3,8,C(2,6,t.feedback)," ")))("dialogError",t.dialogError$)("renderButtonStyle",!1)("renderButtonText",!1),r(4),s("icon",t.faTrashAlt)}}function Ce(i,g){if(i&1){let t=S();e(0,`
            `),o(1,"div",15),e(2,`
                `),o(3,"button",16),m("click",function(){b(t);let n=c();return k(n.onAcceptSuggestion.emit(n.feedback))}),e(4,`
                    `),l(5,"fa-icon",14),e(6,`
                    `),l(7,"span",17),e(8,`
                `),d(),e(9,`
                `),o(10,"button",18),m("click",function(){b(t);let n=c();return k(n.onDiscardSuggestion.emit(n.feedback))}),e(11,`
                    `),l(12,"fa-icon",14),e(13,`
                    `),l(14,"span",19),e(15,`
                `),d(),e(16,`
            `),d(),e(17,`
        `)}if(i&2){let t=c();r(5),s("icon",t.faCheck),r(7),s("icon",t.faTrash)}}function Fe(i,g){if(i&1&&(e(0,`
                    `),o(1,"div"),e(2,`
                        `),l(3,"fa-icon",20),h(4,"artemisTranslate"),e(5,`
                    `),d(),e(6,`
                `)),i&2){let t=c();r(3),s("icon",t.faQuestionCircle)("ngbTooltip",C(4,2,"artemisApp.assessment.feedbackHint"))}}function Se(i,g){if(i&1&&(e(0,`
                    `),o(1,"div"),e(2,`
                        `),o(3,"span"),e(4),d(),e(5,`
                    `),d(),e(6,`
                `)),i&2){let t=c();r(4),G(t.feedback.gradingInstruction.feedback)}}function Te(i,g){if(i&1&&(e(0,`
                    `),o(1,"span",21),e(2),h(3,"artemisTranslate"),d(),e(4,`
                `)),i&2){let t=c(2);r(2),U("",C(3,1,"artemisApp.exampleSubmission.feedback."+t.feedback.correctionStatus)," ")}}function De(i,g){if(i&1&&(e(0,`
                    `),o(1,"span",22),e(2),h(3,"artemisTranslate"),d(),e(4,`
                `)),i&2){let t=c(2);r(2),U("",C(3,1,"artemisApp.exampleSubmission.feedback."+t.feedback.correctionStatus)," ")}}function ve(i,g){if(i&1&&(e(0,`
                    `),o(1,"fa-layers"),e(2,`
                        `),l(3,"fa-icon",23),e(4,`
                        `),l(5,"fa-icon",24),e(6,`
                    `),d(),e(7,`
                `)),i&2){let t=c(2);r(3),s("icon",t.faExclamationTriangle),r(2),s("icon",t.faExclamation)}}function ye(i,g){if(i&1&&(e(0,`
            `),o(1,"div"),e(2,`
                `),x(3,Te,5,3)(4,De,5,3)(5,ve,8,2),d(),e(6,`
        `)),i&2){let t=c();r(3),p(t.feedback.correctionStatus==="CORRECT"?3:-1),r(),p(t.feedback.correctionStatus!=="CORRECT"?4:-1),r(),p(t.feedback.correctionStatus!=="CORRECT"?5:-1)}}var me=(()=>{class i{structuredGradingCriterionService=T(E);feedback;resultId=N.required();isSuggestion;readOnly;highlightDifferences;useDefaultFeedbackSuggestionBadgeText;onFeedbackChange=new _;onFeedbackDelete=new _;onAcceptSuggestion=new _;onDiscardSuggestion=new _;feedbackService=T(se);faTrashAlt=X;faQuestionCircle=Y;faExclamation=ne;faExclamationTriangle=te;faCheck=ee;faTrash=Z;Feedback=D;ButtonSize=oe;dialogErrorSource=new j;dialogError$=this.dialogErrorSource.asObservable();ngOnInit(){this.loadLongFeedback()}loadLongFeedback(){return V(this,null,function*(){this.feedback.id&&this.feedback.hasLongFeedbackText&&(this.feedback.detailText=yield this.feedbackService.getLongFeedbackText(this.feedback.id),this.onFeedbackChange.emit(this.feedback))})}emitChanges(){this.feedback.type===F.AUTOMATIC&&(this.feedback.type=F.AUTOMATIC_ADAPTED),D.updateFeedbackTypeOnChange(this.feedback),this.onFeedbackChange.emit(this.feedback)}delete(){this.onFeedbackDelete.emit(this.feedback),this.dialogErrorSource.next("")}updateFeedbackOnDrop(t){t.stopPropagation(),this.structuredGradingCriterionService.updateFeedbackWithStructuredGradingInstructionEvent(this.feedback,t),this.onFeedbackChange.emit(this.feedback)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=v({type:i,selectors:[["jhi-unreferenced-feedback-detail"]],inputs:{feedback:"feedback",resultId:[1,"resultId"],isSuggestion:"isSuggestion",readOnly:"readOnly",highlightDifferences:"highlightDifferences",useDefaultFeedbackSuggestionBadgeText:"useDefaultFeedbackSuggestionBadgeText"},outputs:{onFeedbackChange:"onFeedbackChange",onFeedbackDelete:"onFeedbackDelete",onAcceptSuggestion:"onAcceptSuggestion",onDiscardSuggestion:"onDiscardSuggestion"},decls:41,vars:24,consts:[[1,"unreferenced-feedback-detail","card","mb-3",3,"drop","dragover"],[1,"card-header"],[1,"card-body"],[1,"form-group","row"],["for","feedback-points","jhiTranslate","artemisApp.exercise.score",1,"col-4","feedback-label"],["id","feedback-points","type","number","step","0.5",1,"col","form-control",3,"ngModelChange","ngModel","disabled","readOnly","required"],[1,"col-4","assessment-label"],["jhiTranslate","artemisApp.assessment.detail.feedback",1,"pe-0"],[1,"col","p-0"],["id","feedback-textarea","rows","2",1,"form-control",3,"ngModelChange","ngModel","readOnly","disabled","placeholder","required"],[3,"feedback","highlightDifferences"],[3,"feedback","useDefaultText"],[3,"feedback"],["jhiDeleteButton","","deleteQuestion","artemisApp.feedback.delete.question",1,"btn","float-end",3,"delete","buttonSize","translateValues","dialogError","renderButtonStyle","renderButtonText"],[3,"icon"],[1,"row","float-end","suggestion-action-buttons"],[1,"btn","btn-success","m-1","btn-sm",3,"click"],["jhiTranslate","artemisApp.assessment.detail.accept"],[1,"btn","btn-danger","m-1","btn-sm",3,"click"],["jhiTranslate","artemisApp.assessment.detail.discard"],[1,"text-secondary","ps-1",3,"icon","ngbTooltip"],[1,"text-success"],[1,"text-danger"],[1,"text-warning",3,"icon"],["size","2x","transform","shrink-10",1,"text-dark","exclamation-icon",3,"icon"]],template:function(a,n){a&1&&(o(0,"div",0),m("drop",function(u){return n.updateFeedbackOnDrop(u)})("dragover",function(u){return u.preventDefault()}),e(1,`
    `),o(2,"div",1),e(3,`
        `),x(4,_e,3,2)(5,xe,3,1)(6,he,8,13)(7,Ce,18,2),d(),e(8,`
    `),o(9,"div",2),e(10,`
        `),o(11,"div",3),e(12,`
            `),l(13,"label",4),e(14,`
            `),o(15,"input",5),B("ngModelChange",function(u){return w(n.feedback.credits,u)||(n.feedback.credits=u),u}),m("ngModelChange",function(){return n.emitChanges()}),d(),e(16,`
        `),d(),e(17,`
        `),o(18,"div",3),e(19,`
            `),o(20,"div",6),e(21,`
                `),l(22,"label",7),e(23,`
                `),x(24,Fe,7,4),d(),e(25,`
            `),o(26,"div",8),e(27,`
                `),x(28,Se,7,1),o(29,"textarea",9),h(30,"artemisTranslate"),h(31,"artemisTranslate"),B("ngModelChange",function(u){return w(n.feedback.detailText,u)||(n.feedback.detailText=u),u}),m("ngModelChange",function(){return n.emitChanges()}),d(),e(32,`
            `),d(),e(33,`
        `),d(),e(34,`
        `),e(35,`
        `),x(36,ye,7,3),l(37,"jhi-assessment-correction-round-badge",10),e(38,`
    `),d(),e(39,`
`),d(),e(40,`
`)),a&2&&(R("is-suggestion",n.isSuggestion),r(4),p(n.isSuggestion||n.Feedback.isFeedbackSuggestion(n.feedback)?4:-1),r(),p(n.feedback.gradingInstruction?5:-1),r(),p(n.readOnly?-1:6),r(),p(n.isSuggestion?7:-1),r(8),M("ngModel",n.feedback.credits),s("disabled",!!n.feedback.gradingInstruction||n.readOnly)("readOnly",!!n.feedback.gradingInstruction||n.readOnly)("required",!n.feedback.gradingInstruction),r(9),p(n.feedback.gradingInstruction?24:-1),r(4),p(n.feedback.gradingInstruction?28:-1),r(),M("ngModel",n.feedback.detailText),s("readOnly",n.readOnly)("disabled",n.readOnly)("placeholder",n.feedback.gradingInstruction!=null&&n.feedback.gradingInstruction.feedback?C(30,20,"artemisApp.assessment.additionalFeedbackCommentPlaceholder"):C(31,22,"artemisApp.assessment.feedbackCommentPlaceholder"))("required",!(n.feedback.gradingInstruction!=null&&n.feedback.gradingInstruction.feedback)),r(7),p(n.feedback.correctionStatus!==void 0?36:-1),r(),s("feedback",n.feedback)("highlightDifferences",n.highlightDifferences))},dependencies:[le,fe,de,ae,y,H,q,K,z,$,Q,J,re,ue,ie,ge,pe],styles:[".card-body[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:5px}.assessment-label[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{float:left}fa-icon.exclamation-icon[_ngcontent-%COMP%]{width:16px;margin-top:-6px}.is-suggestion[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%], .is-suggestion[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{background-color:var(--feedback-suggestions-background)}.is-suggestion[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .is-suggestion[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{background-color:var(--feedback-suggestions-input-background)}.is-suggestion[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{opacity:.6;transition:opacity .2s ease-in-out}.is-suggestion[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{opacity:1}.suggestion-action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:fit-content}.assessment-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:5px}"]})}return i})();function Ee(i,g){i&1&&(e(0,`
                `),o(1,"div",5),e(2,`
                    `),o(3,"div",6),e(4,`
                        `),l(5,"p",7),e(6,`
                    `),d(),e(7,`
                `),d(),e(8,`
            `))}function Oe(i,g){if(i&1){let t=S();e(0,`
                `),o(1,"div",8),e(2,`
                    `),o(3,"jhi-unreferenced-feedback-detail",9),m("onFeedbackChange",function(){let n=b(t).$implicit,f=c();return k(f.updateFeedback(n))})("onFeedbackDelete",function(){let n=b(t).$implicit,f=c();return k(f.deleteFeedback(n))}),d(),e(4,`
                `),d(),e(5,`
            `)}if(i&2){let t=g.$implicit,a=c();r(3),s("feedback",t)("resultId",a.resultId)("readOnly",a.readOnly)("highlightDifferences",a.highlightDifferences)("useDefaultFeedbackSuggestionBadgeText",a.useDefaultFeedbackSuggestionBadgeText)}}function Ae(i,g){if(i&1){let t=S();e(0,`
                `),o(1,"div",8),e(2,`
                    `),o(3,"jhi-unreferenced-feedback-detail",10),m("onAcceptSuggestion",function(n){b(t);let f=c();return k(f.acceptSuggestion(n))})("onDiscardSuggestion",function(n){b(t);let f=c();return k(f.discardSuggestion(n))}),d(),e(4,`
                `),d(),e(5,`
            `)}if(i&2){let t=g.$implicit,a=c();r(3),s("feedback",t)("resultId",a.resultId)("isSuggestion",!0)("readOnly",!0)("useDefaultFeedbackSuggestionBadgeText",a.useDefaultFeedbackSuggestionBadgeText)}}var st=(()=>{class i{structuredGradingCriterionService=T(E);FeedbackType=F;unreferencedFeedback=[];assessmentsAreValid;readOnly;highlightDifferences;useDefaultFeedbackSuggestionBadgeText=!1;resultId;addReferenceIdForExampleSubmission=!1;set feedbacks(t){this.unreferencedFeedback=[...t]}feedbackSuggestions=[];feedbacksChange=new _;onAcceptSuggestion=new _;onDiscardSuggestion=new _;deleteFeedback(t){let a=this.unreferencedFeedback.indexOf(t);this.unreferencedFeedback.splice(a,1),this.feedbacksChange.emit(this.unreferencedFeedback),this.validateFeedback()}validateFeedback(){if(!this.unreferencedFeedback||this.unreferencedFeedback.length===0){this.assessmentsAreValid=!1;return}for(let t of this.unreferencedFeedback)if(t.credits==null||isNaN(t.credits)){this.assessmentsAreValid=!1;return}this.assessmentsAreValid=!0}updateFeedback(t){let a=this.unreferencedFeedback.indexOf(t);a<0?this.unreferencedFeedback.push(t):this.unreferencedFeedback[a]=t,this.validateFeedback(),this.feedbacksChange.emit(this.unreferencedFeedback)}addUnreferencedFeedback(){let t=new D;t.type=F.MANUAL_UNREFERENCED,this.addReferenceIdForExampleSubmission&&(t.reference=this.generateNewUnreferencedFeedbackReference().toString()),this.unreferencedFeedback.push(t),this.validateFeedback(),this.feedbacksChange.emit(this.unreferencedFeedback)}generateNewUnreferencedFeedbackReference(){if(this.unreferencedFeedback.length===0)return 1;let t=this.unreferencedFeedback.map(a=>{let n=+(a.reference??"0");return isNaN(n)?0:n});return Math.max(...t.concat([0]))+1}acceptSuggestion(t){this.feedbackSuggestions=this.feedbackSuggestions.filter(a=>a!==t),t.type=F.MANUAL_UNREFERENCED,t.text=(t.text??P).replace(P,ce),this.updateFeedback(t),this.onAcceptSuggestion.emit(t)}discardSuggestion(t){this.feedbackSuggestions=this.feedbackSuggestions.filter(a=>a!==t),this.onDiscardSuggestion.emit(t)}createAssessmentOnDrop(t){this.addUnreferencedFeedback();let a=this.unreferencedFeedback.last();a&&(this.structuredGradingCriterionService.updateFeedbackWithStructuredGradingInstructionEvent(a,t),this.updateFeedback(a))}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=v({type:i,selectors:[["jhi-unreferenced-feedback"]],inputs:{readOnly:"readOnly",highlightDifferences:"highlightDifferences",useDefaultFeedbackSuggestionBadgeText:"useDefaultFeedbackSuggestionBadgeText",resultId:"resultId",addReferenceIdForExampleSubmission:"addReferenceIdForExampleSubmission",feedbacks:"feedbacks",feedbackSuggestions:"feedbackSuggestions"},outputs:{feedbacksChange:"feedbacksChange",onAcceptSuggestion:"onAcceptSuggestion",onDiscardSuggestion:"onDiscardSuggestion"},decls:18,vars:2,consts:[[3,"drop","dragover"],[1,"col-md-6"],["jhiTranslate","artemisApp.fileUploadAssessment.addFeedback",1,"add-unreferenced-feedback","btn","btn-success","mt-4",3,"click","disabled"],[1,"row","mt-4"],["jhiTranslate","artemisApp.assessment.detail.feedback",1,"col-12"],[1,"col-12","col-lg-8","col-xl-6"],["role","alert",1,"alert","alert-secondary","text-center"],["jhiTranslate","artemisApp.fileUploadAssessment.assessInstructionWithDropOption"],[1,"col-12","col-lg-6","col-xl-6"],[3,"onFeedbackChange","onFeedbackDelete","feedback","resultId","readOnly","highlightDifferences","useDefaultFeedbackSuggestionBadgeText"],[3,"onAcceptSuggestion","onDiscardSuggestion","feedback","resultId","isSuggestion","readOnly","useDefaultFeedbackSuggestionBadgeText"]],template:function(a,n){a&1&&(o(0,"div",0),m("drop",function(u){return n.createAssessmentOnDrop(u)})("dragover",function(u){return u.preventDefault()}),e(1,`
    `),o(2,"div",1),e(3,`
        `),o(4,"button",2),m("click",function(){return n.addUnreferencedFeedback()}),d(),e(5,`
        `),o(6,"div",3),e(7,`
            `),l(8,"h4",4),e(9,`
            `),x(10,Ee,9,0),A(11,Oe,6,5,null,null,O),A(13,Ae,6,5,null,null,O),d(),e(15,`
    `),d(),e(16,`
`),d(),e(17,`
`)),a&2&&(r(4),s("disabled",n.readOnly),r(6),p(n.unreferencedFeedback.length+n.feedbackSuggestions.length===0?10:-1),r(),I(n.unreferencedFeedback),r(2),I(n.feedbackSuggestions))},dependencies:[y,me],encapsulation:2})}return i})();export{st as a};
//# sourceMappingURL=chunk-7OWNIVQU.js.map
