import{k as O}from"./chunk-3JSWSN6W.js";import{p as w}from"./chunk-Z2YUBN6N.js";import{a as P}from"./chunk-2CSD5TLZ.js";import{K as S}from"./chunk-VZRSC3LP.js";import{a as M}from"./chunk-K3W6YFKH.js";import{d as h}from"./chunk-EDXSOKK5.js";import{k as E}from"./chunk-CXQURQM5.js";import{wd as y}from"./chunk-Z4VHWOB5.js";import{a as D}from"./chunk-U54OSGNH.js";import{c as A}from"./chunk-E2KBL4LX.js";import{Db as a,Ea as p,Oc as f,Tb as v,Zb as u,dd as t,fd as T,kc as s,mc as x,sc as m,uc as k,vc as g,wb as b,wc as C,xc as l,yc as c,yd as _,zc as o,zd as F}from"./chunk-5LC5EQRR.js";function j(i,d){i&1&&(t(0,`
            `),o(1,"span",2),t(2,`
        `))}function I(i,d){i&1&&(t(0,`
            `),o(1,"span",3),t(2,`
        `))}function L(i,d){if(i&1&&(t(0,`
                `),o(1,"fa-icon",7),_(2,"artemisTranslate"),t(3,`
            `)),i&2){let n=f(2);a(),s("icon",n.faExclamationTriangle)("ngbTooltip",F(2,2,"artemisApp.assessment.subsequentFeedback"))}}function q(i,d){if(i&1&&(t(0,`
        `),l(1,"div",4),t(2,`
            `),l(3,"span",5),t(4),c(),t(5,`
            `),o(6,"span",6),t(7,`
            `),u(8,L,4,4),c(),t(9,`
    `)),i&2){let n,e=d.$implicit,r=f();a(),x("positive-feedback",(e==null?null:e.credits)&&e.credits>0)("negative-feedback",(e==null?null:e.credits)&&e.credits<0)("neutral-feedback",(e==null?null:e.credits)===0||(e==null?null:e.isSubsequent)),a(3),T("",r.pointTranslation((n=e==null?null:e.credits)!==null&&n!==void 0?n:0),":"),a(2),s("innerHTML",r.buildFeedbackTextForReview(e),b),a(2),m(e.isSubsequent?8:-1)}}var ee=(()=>{class i{translateService=p(A);localeConversionService=p(P);feedback;additional;course;faCommentDots=w;faExclamationTriangle=y;getCourseFromExercise=E;buildFeedbackTextForReview=O;pointTranslation(n){let e=Math.abs(n)===1;return this.translateService.instant(`artemisApp.assessment.detail.points.${e?"one":"many"}`,{points:this.localeConversionService.toLocaleString(n,this.course?.accuracyOfScores)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["jhi-additional-feedback"]],inputs:{feedback:"feedback",additional:"additional",course:"course"},decls:17,vars:3,consts:[["id","additional-feedback"],[3,"icon"],["jhiTranslate","artemisApp.assessment.additionalFeedback"],["jhiTranslate","artemisApp.assessment.feedback"],[1,"alert"],[1,"feedback-points"],[3,"innerHTML"],[1,"float-end",3,"icon","ngbTooltip"]],template:function(e,r){e&1&&(l(0,"div",0),t(1,`
    `),l(2,"b"),t(3,`
        `),o(4,"fa-icon",1),t(5,`\xA0
        `),u(6,j,3,0)(7,I,3,0),t(8,`
        :`),c(),t(9,`
    `),o(10,"br"),t(11,`
    `),o(12,"br"),t(13,`
    `),g(14,q,10,9,null,null,k),c(),t(16,`
`)),e&2&&(a(4),s("icon",r.faCommentDots),a(2),m(r.additional?6:-1),a(),m(r.additional?-1:7),a(7),C(r.feedback))},dependencies:[h,D,S,M],styles:["div.positive-feedback[_ngcontent-%COMP%]{color:var(--artemis-alert-success-color);background-color:var(--artemis-alert-success-background);border-color:var(--artemis-alert-success-broder)}div.negative-feedback[_ngcontent-%COMP%]{color:var(--artemis-alert-danger-color);background-color:var(--artemis-alert-danger-background);border-color:var(--artemis-alert-danger-broder)}div.neutral-feedback[_ngcontent-%COMP%]{color:var(--artemis-alert-neutral-color);background-color:var(--artemis-alert-neutral-background);border-color:var(--artemis-alert-neutral-border)}.feedback-points[_ngcontent-%COMP%]{font-weight:700}"]})}return i})();export{ee as a};
//# sourceMappingURL=chunk-23SCGJT4.js.map
