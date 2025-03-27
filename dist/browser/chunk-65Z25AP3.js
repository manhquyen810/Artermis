import{a as fe}from"./chunk-5M3YV54C.js";import{a as mt}from"./chunk-RYZEETVB.js";import{a as te}from"./chunk-VTF2OQPK.js";import{a as dt}from"./chunk-N4VVKRBU.js";import{b as ot,e as at,u as rt,v as st,y as lt,z as ct}from"./chunk-5AQXEKLE.js";import{b as $,d as Je,e as Qe,f as Ze,g as et,h as tt,i as it,j,l as nt}from"./chunk-3JSWSN6W.js";import{a as pt}from"./chunk-KYCCMZSV.js";import{b as We}from"./chunk-2UXGFGK3.js";import{d as _e}from"./chunk-O4VJ5OXY.js";import{a as qe,b as ee,e as Xe,g as Ye}from"./chunk-BDII35IB.js";import{b as xe,c as V}from"./chunk-6EYB5QBP.js";import{a as ue}from"./chunk-PZ7IDTIM.js";import{e as Ke,f as Z}from"./chunk-CT44YL7Q.js";import{c as ze}from"./chunk-JNO6DNVW.js";import{K as X,u as Be}from"./chunk-VZRSC3LP.js";import{c as $e}from"./chunk-BNDLMKXK.js";import{e as Ve}from"./chunk-5GXY5RYT.js";import{a as D}from"./chunk-K3W6YFKH.js";import{d as B}from"./chunk-EDXSOKK5.js";import{c as O,k as Q}from"./chunk-CXQURQM5.js";import{Nc as He,Sc as Ue,Y as je,ic as Y,wd as J,y as Ge}from"./chunk-Z4VHWOB5.js";import{a as G}from"./chunk-U54OSGNH.js";import{c as M}from"./chunk-E2KBL4LX.js";import{n as q,t as Oe,x as De}from"./chunk-IOA4DPXY.js";import{Ad as me,Bd as pe,Cc as Ne,Db as r,Dc as S,Ea as b,Ed as Me,La as Re,Ma as F,Mc as E,Na as y,Oc as c,P as ae,Qa as we,Rc as le,Sa as Pe,Tb as I,Zb as u,cd as ce,dd as i,ed as v,fd as g,gd as de,kc as x,mc as se,oa as re,ra as Ae,rd as U,s as w,sc as d,sd as Le,t as Se,uc as P,vc as N,wb as z,wc as L,xb as W,xc as s,ya as k,yc as l,yd as f,z as Ee,zc as m,zd as C}from"./chunk-5LC5EQRR.js";import{a as R,b as K,d as ye,j as Ie}from"./chunk-3E746U5Y.js";var ut=t=>new DOMParser().parseFromString(t,"text/html").body.textContent;var H=function(t){return t.ERROR="ERROR",t.WARNING="WARNING",t.OTHER="OTHER",t}(H||{}),ie=class t extends Array{mavenErrorLogRegex=/\[?(ERROR)?\]?.*\/?(src\/.+):\[(\d+),(\d+)\]\s(.*$)/;gradleErrorLogRegex=/(src\/.+):(\d+)():\s(error:)\s(.*$)/;swiftErrorLogRegex=/.*\/?(Sources\/.+):(\d+):(\d+):\s(error:)(.*$)/;static fromBuildLogs(a){let e=a.map(p=>{var _=p,{log:n}=_,o=ye(_,["log"]);let h=H.OTHER;return n&&(n.trimStart().startsWith("[ERROR]")?h=H.ERROR:n.trimStart().startsWith("WARNING")&&(h=H.WARNING)),R({log:n,type:h},o)});return new t(...e)}extractErrors(a,e){let n;return a===xe.SWIFT?n=this.swiftErrorLogRegex:e===V.PLAIN_GRADLE||e===V.GRADLE_GRADLE?n=this.gradleErrorLogRegex:n=this.mavenErrorLogRegex,Array.from(this.map(({log:o,time:p})=>({log:o.split(`
`,1)[0].trim().match(n),time:p})).filter(({log:o})=>o&&o.length===6&&(o[0]?.includes(":[")||o[1]==="ERROR"||o[4]==="error:")).map(({log:o,time:p})=>{let _=[...o];if(a===xe.SWIFT||e===V.PLAIN_GRADLE||e===V.GRADLE_GRADLE){let h=_.splice(_.indexOf("error:"),1)[0];_.unshift(h)}return{log:_,time:p}}).map(({log:[,,o,p,_,h],time:Fe})=>({type:"error",fileName:o,row:Math.max(parseInt(p,10)-1,0),column:Math.max(parseInt(_,10)-1,0),text:ut(h)||"",timestamp:Date.parse(Fe)})))}};var T=class{name;members=[];credits;maxCredits;color;open=!1;addAllItems(a){return a.forEach(e=>e.color=this.color),this.members=[...this.members,...a],this.calculateCredits(),this}isEmpty(){return this.members.length===0}calculateCredits(){return this.credits=this.members.filter(a=>a.type!=="Subsequent").reduce((a,e)=>a+(e.credits??0),0),this}},ne=t=>t.members!==void 0;var xt=()=>[new Ce,new he,new be],Ce=class extends T{constructor(){super(),this.name="wrong",this.color="danger",this.open=!0}shouldContain(a){let e=a.type!=="Subsequent";return a.credits!==void 0&&a.credits<0&&e}},he=class extends T{constructor(){super(),this.name="info",this.color="info",this.open=!1}shouldContain(a){let e=a.type==="Subsequent";return a.credits!==void 0&&a.credits===0||e}},be=class extends T{constructor(){super(),this.name="correct",this.color="success",this.open=!1}shouldContain(a){let e=a.type!=="Subsequent";return a.credits!==void 0&&a.credits>0&&e}};var _t=(()=>{class t{translateService=b(M);create(e,n){return e.map(o=>this.createFeedbackItem(o,n))}group(e){let n=xt().map(o=>o.addAllItems(e.filter(o.shouldContain))).filter(o=>!o.isEmpty());return n.length===1&&(n[0].open=!0),n}createFeedbackItem(e,n){return e.gradingInstruction?this.createGradingInstructionFeedbackItem(e,n):{type:"Reviewer",name:this.translateService.instant("artemisApp.result.detail.feedback"),title:e.text,text:e.detailText,positive:e.positive,credits:e.credits,feedbackReference:e}}createGradingInstructionFeedbackItem(e,n){let o=e.gradingInstruction;return{type:e.isSubsequent?"Subsequent":"Reviewer",name:n?this.translateService.instant("artemisApp.course.reviewer"):this.translateService.instant("artemisApp.result.detail.feedback"),title:e.text,text:o.feedback+(e.detailText?`
${e.detailText}`:""),positive:e.positive,credits:e.credits,feedbackReference:e}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var oe=class{filePath;startLine;endLine;startColumn;endColumn;rule;category;message;priority;penalty;static fromFeedback(a){return JSON.parse(a.detailText)}};var ft=t=>[new ge,new Te(t),new ve,new ke],ge=class extends T{constructor(){super(),this.name="wrong",this.color="danger",this.open=!0}shouldContain(a){let e=a.type==="Reviewer"&&a.credits!==void 0&&a.credits<0,n=a.type==="Test",o=a.positive===!1||a.positive===void 0&&a.credits===0;return e||n&&o}},Te=class extends T{constructor(a){super(),this.name="warning",this.color="warning";let e=a;this.maxCredits=e.maxStaticCodeAnalysisPenalty&&e.maxStaticCodeAnalysisPenalty*e.maxPoints,this.open=!0}shouldContain(a){return a.type==="Static Code Analysis"||a.type==="Submission Policy"}},ve=class extends T{constructor(){super(),this.name="info",this.color="info",this.open=!1}shouldContain(a){let e=a.type==="Reviewer"&&a.credits===0,n=a.type==="Subsequent";return e||n}},ke=class extends T{constructor(){super(),this.name="correct",this.color="success",this.open=!1}shouldContain(a){let e=a.type==="Reviewer"&&a.credits!==void 0&&a.credits>0,n=a.type==="Test",o=a.positive===!0||a.positive===void 0&&!!a.credits;return e||n&&o}};var Ct=(()=>{class t{translateService=b(M);create(e,n){return e.map(o=>this.createFeedbackItem(o,n))}group(e,n){let o=ft(n).map(p=>p.addAllItems(e.filter(p.shouldContain))).filter(p=>!p.isEmpty());return o.length===1&&(o[0].open=!0),o}createFeedbackItem(e,n){return j.isSubmissionPolicyFeedback(e)?this.createSubmissionPolicyFeedbackItem(e):j.isStaticCodeAnalysisFeedback(e)?this.createScaFeedbackItem(e,n):j.isFeedbackSuggestion(e)?this.createFeedbackSuggestionItem(e,n):e.type===$.AUTOMATIC&&!j.isNonGradedFeedbackSuggestion(e)?this.createAutomaticFeedbackItem(e,n):e.type===$.AUTOMATIC&&j.isNonGradedFeedbackSuggestion(e)?this.createNonGradedFeedbackItem(e):(e.type===$.MANUAL||e.type===$.MANUAL_UNREFERENCED)&&e.gradingInstruction?this.createGradingInstructionFeedbackItem(e,n):this.createReviewerFeedbackItem(e,n)}createSubmissionPolicyFeedbackItem(e){let n=e.text.substring(Qe.length);return{color:"primary",type:"Submission Policy",name:this.translateService.instant("artemisApp.programmingExercise.submissionPolicy.title"),title:n,text:e.detailText,positive:!1,credits:e.credits,feedbackReference:e}}createScaFeedbackItem(e,n){let o=e.text.substring(Je.length),p=oe.fromFeedback(e),_=n?`${p.rule}: ${p.message}`:p.message;return{type:"Static Code Analysis",name:this.translateService.instant("artemisApp.result.detail.codeIssue.name"),title:this.translateService.instant("artemisApp.result.detail.codeIssue.title",{scaCategory:o,location:this.getIssueLocation(p)}),text:_,positive:!1,credits:p.penalty?-p.penalty:e.credits,feedbackReference:e}}createFeedbackSuggestionItem(e,n){let o=e.text??"";for(let p of[et,tt,Ze])if(o.startsWith(p)){o=o.substring(p.length);break}return{type:"Reviewer",name:n?this.translateService.instant("artemisApp.course.reviewer"):this.translateService.instant("artemisApp.result.detail.feedback"),title:o,text:e.detailText,positive:e.positive,credits:e.credits,feedbackReference:e}}createAutomaticFeedbackItem(e,n){let o;return n&&e.testCase?.testName&&(e.positive===void 0?o=this.translateService.instant("artemisApp.result.detail.test.noInfo",{name:e.testCase.testName}):o=e.positive?this.translateService.instant("artemisApp.result.detail.test.passed",{name:e.testCase.testName}):this.translateService.instant("artemisApp.result.detail.test.failed",{name:e.testCase.testName})),{type:"Test",name:this.translateService.instant("artemisApp.result.detail.test.name"),title:o,text:e.detailText,positive:e.positive,credits:e.credits,feedbackReference:e}}createNonGradedFeedbackItem(e){return{type:"Reviewer",name:this.translateService.instant("artemisApp.result.detail.feedback"),title:e.text?.slice(it.length),text:e.detailText,positive:e.positive,credits:e.credits,feedbackReference:e}}createGradingInstructionFeedbackItem(e,n){let o=e.gradingInstruction;return{type:e.isSubsequent?"Subsequent":"Reviewer",name:n?this.translateService.instant("artemisApp.course.reviewer"):this.translateService.instant("artemisApp.result.detail.feedback"),title:e.text,text:o.feedback+(e.detailText?`
${e.detailText}`:""),positive:e.positive,credits:e.credits,feedbackReference:e}}createReviewerFeedbackItem(e,n){return{type:"Reviewer",name:n?this.translateService.instant("artemisApp.course.reviewer"):this.translateService.instant("artemisApp.result.detail.feedback"),title:e.text,text:e.detailText,positive:e.positive,credits:e.credits,feedbackReference:e}}getIssueLocation(e){let n=!e.endLine||e.startLine===e.endLine?this.translateService.instant("artemisApp.result.detail.codeIssue.line",{line:e.startLine}):this.translateService.instant("artemisApp.result.detail.codeIssue.lines",{from:e.startLine,to:e.endLine});if(e.startColumn){let o=!e.endColumn||e.startColumn===e.endColumn?this.translateService.instant("artemisApp.result.detail.codeIssue.column",{column:e.startColumn}):this.translateService.instant("artemisApp.result.detail.codeIssue.columns",{from:e.startColumn,to:e.endColumn});return`${e.filePath} ${n} ${o}`}return`${e.filePath} ${n}`}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ht=(()=>{class t extends te{filterFeedback=(e,n)=>n?e.filter(o=>o.testCase?.id&&n.includes(o.testCase.id)):[...e];getLongFeedbackText(e){return Ie(this,null,function*(){let n=`assessment/feedbacks/${e}/long-feedback`;return yield this.get(n,{responseType:"text"})})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=we(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bt=(()=>{class t{create=(e,n)=>{let o=this.summarizePoints(e),p=[{name:"scores",series:o.map(h=>({name:h.name,value:this.calculatePercentage(h,n)}))}],_={name:"Feedback Detail",selectable:!0,group:ee.Ordinal,domain:o.map(h=>`var(--bs-${h.color})`)};return{xScaleMax:100,results:p,scheme:_}};summarizePoints=e=>{let[n,o,p]=this.separateByCredits(e.slice()),_=this.sumCredits(n),h=this.sumCredits(p);return _+h<0?this.clearCredits(e):[...this.subtractCredits(n,h),...o,...this.absCredits(p)]};subtractCredits=(e,n)=>e.map(o=>{let p=0,_=o.credits??0;return _+n>=0&&(p=_+n),n=Math.min(n+_,0),K(R({},o),{credits:p})});separateByCredits=e=>[e.filter(n=>(n.credits??0)>0),e.filter(n=>(n.credits??0)===0),e.filter(n=>(n.credits??0)<0)];sumCredits=e=>e.reduce((n,o)=>(o.credits??0)+n,0);absCredits=e=>e.map(n=>K(R({},n),{credits:Math.abs(n.credits??0)}));clearCredits=e=>e.map(n=>K(R({},n),{credits:0}));capCredits=(e,n)=>{if(!n||e*n<0)return e;let o=Math.abs(e),p=Math.abs(n);return Math.sign(e)*Math.min(o,p)};calculatePercentage=(e,n)=>{let o=this.capCredits(e.credits??0,e.maxCredits);return Ke(o/n.maxPoints,Q(n))};static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function kt(t,a){if(t&1&&(i(0,`
    `),s(1,"div"),i(2,`
        `),m(3,"span",1),i(4,`
        `),m(5,"a",2),i(6,`
    `),l(),i(7,`
`)),t&2){let e=c();r(5),x("href",e.downloadText,W)("download",e.downloadFilename)}}var gt=(()=>{class t{longFeedbackService=b(mt);MAX_DISPLAYABLE_LENGTH=2e4;feedback;text;downloadText;downloadFilename;ngOnInit(){this.text=this.feedback.text??"",this.feedback.feedbackReference.hasLongFeedbackText&&this.loadLongFeedback()}loadLongFeedback(){if(this.feedback.feedbackReference.id){let e=this.feedback.feedbackReference.id;this.longFeedbackService.find(e).subscribe(n=>{let o=n.body;(o.length??0)>this.MAX_DISPLAYABLE_LENGTH?this.setDownloadInfo(o):this.text=o})}}setDownloadInfo(e){this.downloadText="data:text/plain;charset=utf-8,"+encodeURIComponent(e),this.downloadFilename=`feedback_${this.feedback.feedbackReference.id}.txt`}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=I({type:t,selectors:[["jhi-feedback-text"]],inputs:{feedback:"feedback"},decls:9,vars:2,consts:[[1,"feedback-text"],["jhiTranslate","artemisApp.feedback.truncatedInfo"],["jhiTranslate","artemisApp.feedback.downloadFullFeedback",3,"href","download"]],template:function(n,o){n&1&&(u(0,kt,8,2),m(1,"br"),i(2,`
`),s(3,"div",0),i(4,`
    `),s(5,"p"),i(6),l(),i(7,`
`),l(),i(8,`
`)),n&2&&(d(o.downloadText?0:-1),r(6),v(o.text))},dependencies:[G],styles:[".feedback-text[_ngcontent-%COMP%]{font-family:monospace}.feedback-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline;white-space:pre-wrap;word-break:break-word}"]})}return t})();function Ft(t,a){if(t&1&&(i(0,`
        `),s(1,"p"),i(2),l(),i(3,`
    `)),t&2){let e=c();r(2),v(e.feedback.text)}}function yt(t,a){if(t&1){let e=S();i(0,`
            `),s(1,"div"),i(2,`
                `),s(3,"div",1),E("click",function(){F(e);let o=c(2);return y(o.debounceToggleCollapse())}),i(4,`
                    `),m(5,"fa-icon",2),i(6,`
                    `),s(7,"strong"),i(8),f(9,"artemisTranslate"),l(),i(10,`
                `),l(),i(11,`
                `),i(12,`
                `),s(13,"p"),i(14),l(),i(15,`
            `),l(),i(16,`
        `)}if(t&2){let e=c(2);r(5),x("icon",e.faAngleRight),r(3),g(" (",C(9,3,"artemisApp.result.seeMore"),") "),r(6),v(e.previewText)}}function It(t,a){if(t&1){let e=S();i(0,`
            `),s(1,"div"),i(2,`
                `),s(3,"fa-icon",3),E("click",function(){F(e);let o=c(2);return y(o.debounceToggleCollapse())}),l(),i(4,`
                `),m(5,"jhi-feedback-text",4),i(6,`
            `),l(),i(7,`
        `)}if(t&2){let e=c(2);r(3),x("icon",e.faAngleDown),r(2),x("feedback",e.feedback)}}function St(t,a){if(t&1&&(i(0,`
        `),u(1,yt,17,5)(2,It,8,2)),t&2){let e=c();r(),d(e.isCollapsed?1:2)}}var Tt=(()=>{class t{FEEDBACK_PREVIEW_CHARACTER_LIMIT=300;feedback;previewText;isCollapsed=!0;faAngleDown=Y;faAngleRight=je;debounceToggleCollapse=te.debounce(this.toggleCollapse.bind(this),200);ngOnInit(){this.previewText=this.computeFeedbackPreviewText(this.feedback.text)}computeFeedbackPreviewText(e){if(this.feedback.feedbackReference.hasLongFeedbackText)return e?.slice(0,this.FEEDBACK_PREVIEW_CHARACTER_LIMIT);if(!(!e||e.length<this.FEEDBACK_PREVIEW_CHARACTER_LIMIT))return e.includes(`
`)?e.slice(0,e.indexOf(`
`)).slice(0,this.FEEDBACK_PREVIEW_CHARACTER_LIMIT):e.slice(0,this.FEEDBACK_PREVIEW_CHARACTER_LIMIT)}toggleCollapse(){this.isCollapsed=!this.isCollapsed}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=I({type:t,selectors:[["jhi-feedback-collapse"]],inputs:{feedback:"feedback"},decls:5,vars:1,consts:[[1,"feedback-text"],[1,"d-inline","fa-angle",3,"click"],[3,"icon"],[1,"fa-angle",3,"click","icon"],[3,"feedback"]],template:function(n,o){n&1&&(s(0,"div",0),i(1,`
    `),u(2,Ft,4,1)(3,St,3,1),l(),i(4,`
`)),n&2&&(r(2),d(o.previewText?3:2))},dependencies:[B,gt,D],styles:[".feedback-text[_ngcontent-%COMP%]{font-family:monospace}.feedback-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline;white-space:pre-wrap;word-break:break-word}.fa-angle[_ngcontent-%COMP%]{cursor:pointer}"]})}return t})();function Et(t,a){if(t&1&&(i(0,`
                        `),m(1,"fa-icon",5),f(2,"artemisTranslate"),i(3,`
                    `)),t&2){let e=c(3);r(),x("icon",e.faExclamationTriangle)("ngbTooltip",C(2,2,"artemisApp.assessment.subsequentFeedback"))}}function At(t,a){if(t&1&&(i(0,`
                `),s(1,"span",4),i(2),u(3,Et,4,4),l(),i(4,`
            `)),t&2){let e=c(2);r(2),g(`
                    `,e.roundValueSpecifiedByCourseSettings(e.feedbackItem.credits,e.course),`P
                    `),r(),d(e.feedbackItem.type==="Subsequent"?3:-1)}}function Rt(t,a){if(t&1&&(i(0,`
            `),m(1,"jhi-feedback-collapse",6),i(2,`
        `)),t&2){let e=c(2);r(),x("feedback",e.feedbackItem)}}function wt(t,a){t&1&&m(0,"p",7)}function Pt(t,a){if(t&1&&(i(0,`
    `),s(1,"div",0),i(2,`
        `),s(3,"div",1),i(4,`
            `),s(5,"h4",2),i(6),l(),i(7,`
            `),u(8,At,5,2),l(),i(9,`
        `),u(10,Rt,3,1)(11,wt,1,0,"p",3),i(12,`
    `),l(),i(13,`
`)),t&2){let e=c();r(),x("ngClass","alert-"+e.feedbackItem.color),r(5),de("",e.feedbackItem.name," ",e.feedbackItem.title&&"\xB7 "+e.feedbackItem.title,""),r(2),d(e.feedbackItem.credits?8:-1),r(2),d(e.feedbackItem.text?10:-1)}}function Nt(t,a){if(t&1&&(i(0,`
                `),s(1,"span",12),i(2),l(),i(3,`
            `)),t&2){let e=c(2);r(2),g("",e.roundValueSpecifiedByCourseSettings(e.feedbackItemGroup.credits,e.course),"P ")}}function Lt(t,a){if(t&1&&(i(0,`
                    `),m(1,"jhi-feedback-node",14),i(2,`
                `)),t&2){let e=a.$implicit,n=c(3);r(),x("feedbackItemNode",e)("course",n.course)}}function Mt(t,a){if(t&1&&(i(0,`
            `),s(1,"div",13),i(2,`
                `),N(3,Lt,3,2,null,null,P),l(),i(5,`
        `)),t&2){let e=c(2);r(3),L(e.feedbackItemGroup.members)}}function Ot(t,a){if(t&1){let e=S();i(0,`
    `),s(1,"div",8),i(2,`
        `),s(3,"div",9),E("click",function(){F(e);let o=c();return y(o.feedbackItemGroup.open=!o.feedbackItemGroup.open)}),i(4,`
            `),s(5,"div",10),i(6,`
                `),m(7,"fa-icon",11),i(8,`
                `),s(9,"h4",2),i(10),f(11,"artemisTranslate"),l(),i(12,`
            `),l(),i(13,`
            `),u(14,Nt,4,1),l(),i(15,`
        `),u(16,Mt,6,0),l(),i(17,`
`)}if(t&2){let e=c();r(3),x("ngClass","bg-"+e.feedbackItemGroup.color),r(4),x("icon",e.feedbackItemGroup.open?e.faAngleUp:e.faAngleDown),r(3),de("",C(11,6,"artemisApp.feedback.group."+e.feedbackItemGroup.name)," (",e.feedbackItemGroup.members.length,")"),r(4),d(e.feedbackItemGroup.credits!==0?14:-1),r(2),d(e.feedbackItemGroup.open?16:-1)}}var vt=(()=>{class t{roundValueSpecifiedByCourseSettings=Z;feedbackItemNode;course;feedbackItem;feedbackItemGroup;faExclamationTriangle=J;faAngleUp=Ue;faAngleDown=Y;ngOnInit(){ne(this.feedbackItemNode)?this.feedbackItemGroup=this.feedbackItemNode:this.feedbackItem=this.feedbackItemNode}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=I({type:t,selectors:[["jhi-feedback-node"]],inputs:{feedbackItemNode:"feedbackItemNode",course:"course"},decls:2,vars:2,consts:[[1,"alert","feedback-item",3,"ngClass"],[1,"feedback-item__header"],[1,"feedback-item__category"],["jhiTranslate","artemisApp.result.noFeedback",4,"ngElse"],[1,"fw-bold","feedback-item__credits"],[3,"icon","ngbTooltip"],[1,"d-block","mt-3",3,"feedback"],["jhiTranslate","artemisApp.result.noFeedback"],[1,"feedback-item-group"],[1,"feedback-group",3,"click","ngClass"],[1,"feedback-group__left"],[1,"me-2",3,"icon"],[1,"fw-bold"],[1,"mx-3"],[3,"feedbackItemNode","course"]],template:function(n,o){n&1&&u(0,Pt,14,5)(1,Ot,18,8),n&2&&(d(o.feedbackItem?0:-1),r(),d(o.feedbackItemGroup?1:-1))},dependencies:[t,q,B,X,Tt,G,D],styles:[".feedback-item__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:2rem}.feedback-item__category[_ngcontent-%COMP%]{margin-bottom:0;font-size:var(--bs-body-font-size);font-weight:700}.feedback-group[_ngcontent-%COMP%]{display:flex;border-radius:.15rem;margin-bottom:1rem;padding:1rem;align-items:center;justify-content:space-between;cursor:pointer}.feedback-group__left[_ngcontent-%COMP%]{display:flex;align-items:center}"]})}return t})();var Dt=t=>({taskName:t}),Bt=t=>({date:t}),Gt=t=>({score:t}),jt=(t,a)=>({score:t,points:a}),Ht=t=>[t,80];function Ut(t,a){if(t&1&&(i(0,`
            `),m(1,"h3",5),f(2,"artemisTranslate"),i(3,`
        `)),t&2){let e=c(2);r(),x("innerHTML",me(2,1,"artemisApp.result.detail.feedbackForTask",U(4,Dt,e.taskName)),z)}}function Vt(t,a){t&1&&(i(0,`
            `),m(1,"h3",6),i(2,`
        `))}function $t(t,a){if(t&1){let e=S();i(0,`
            `),s(1,"button",7),E("click",function(){F(e);let o=c(2);return y(o.activeModal.close())}),i(2,`
                `),m(3,"fa-icon",8),i(4,`
            `),l(),i(5,`
        `)}if(t&2){let e=c(2);r(3),x("icon",e.faXmark)}}function Kt(t,a){if(t&1&&(i(0,`
    `),s(1,"div",4),i(2,`
        `),u(3,Ut,4,6)(4,Vt,3,0)(5,$t,6,1),l(),i(6,`
`)),t&2){let e=c();r(3),d(e.taskName?3:4),r(2),d(e.activeModal?5:-1)}}function zt(t,a){if(t&1&&(i(0,`
        `),s(1,"div",9),m(2,"h6",10),f(3,"artemisTranslate"),l(),i(4,`
    `)),t&2){let e=c();r(2),x("innerHTML",C(3,1,e.messageKey),z)}}function Wt(t,a){if(t&1&&(i(0,`
        `),s(1,"div",9),i(2,`
            `),m(3,"h6",10),f(4,"artemisTranslate"),i(5,`
        `),l(),i(6,`
    `)),t&2){let e=c();r(3),x("innerHTML",me(4,1,"artemisApp.result.afterDueDateFeedbackHidden",U(4,Bt,e.latestDueDate)),z)}}function qt(t,a){if(t&1&&(i(0,`
        `),s(1,"div",11),i(2,`
            `),m(3,"fa-icon",12),i(4,`
        `),l(),i(5,`
    `)),t&2){let e=c();r(3),x("icon",e.faCircleNotch)}}function Xt(t,a){t&1&&(i(0,`
                                    `),m(1,"span",17),i(2,`
                                `))}function Yt(t,a){if(t&1&&(i(0,`
                                        `),m(1,"span",18),i(2,`
                                    `)),t&2){let e=c(5);r(),x("translateValues",U(1,Gt,e.roundValueSpecifiedByCourseSettings(e.result.score,e.course)))}}function Jt(t,a){if(t&1&&(i(0,`
                                            `),m(1,"span",19),i(2,`
                                        `)),t&2){let e,n=c(6);r(),x("translateValues",Le(1,jt,n.roundValueSpecifiedByCourseSettings((e=n.result.score)!==null&&e!==void 0?e:0,n.course),n.roundValueSpecifiedByCourseSettings(((e=n.result.score)!==null&&e!==void 0?e:0)*n.exercise.maxPoints/100,n.course)))}}function Qt(t,a){if(t&1&&(i(0,`
                                        `),u(1,Jt,3,4)),t&2){let e=c(5);r(),d(e.exercise&&e.exercise.maxPoints?1:-1)}}function Zt(t,a){if(t&1&&(i(0,`
                                    `),u(1,Yt,3,3)(2,Qt,2,1)),t&2){let e=c(4);r(),d(e.exercise!=null&&e.exercise.maxPoints?2:1)}}function ei(t,a){if(t&1&&(i(0,`
                                `),s(1,"span",20),f(2,"artemisTranslate"),i(3),f(4,"artemisTranslate"),f(5,"uppercase"),l(),i(6,`
                            `)),t&2){let e=c(4);r(),le("ngbTooltip",C(2,3,e.badge.tooltip)),x("ngClass",e.badge.class),r(2),g(`
                                    `,C(5,7,C(4,5,e.badge.text)),`
                                `)}}function ti(t,a){if(t&1&&(i(0,`
                                    `),s(1,"a",22),i(2),l(),i(3,`
                                `)),t&2){let e=c(5);r(),le("href",e.commitUrl,W),r(),v(e.commitHash)}}function ii(t,a){if(t&1&&i(0),t&2){let e=c(5);g(`
                                    `,e.commitHash,`
                                `)}}function ni(t,a){if(t&1&&(i(0,`
                            `),s(1,"p"),i(2),f(3,"artemisTranslate"),s(4,"span",21),f(5,"artemisDate"),i(6),f(7,"artemisTimeAgo"),l(),i(8),f(9,"artemisTranslate"),u(10,ti,4,2)(11,ii,1,1),l(),i(12,`
                        `)),t&2){let e=c(4);r(2),g(`
                                `,C(3,5,"artemisApp.feedback.modal.submitted"),`
                                `),r(2),x("ngbTooltip",C(5,7,e.result.submission.submissionDate)),r(2),g(`
                                    `,C(7,9,e.result.submission.submissionDate),`
                                `),r(2),g(`
                                - `,C(9,11,"artemisApp.feedback.modal.linkedToCommit"),`:
                                `),r(2),d(e.commitUrl?10:11)}}function oi(t,a){if(t&1&&(i(0,`
                    `),s(1,"div"),i(2,`
                        `),s(3,"div",16),i(4,`
                            `),s(5,"h4"),i(6,`
                                `),u(7,Xt,3,0)(8,Zt,3,1),l(),i(9,`

                            `),u(10,ei,7,9),l(),i(11,`

                        `),i(12,`
                        `),u(13,ni,13,13),l(),i(14,`
                `)),t&2){let e=c(3);r(7),d(e.result.assessmentType===e.AssessmentType.AUTOMATIC_ATHENA?7:8),r(3),d(e.badge?10:-1),r(3),d(e.exerciseType===e.ExerciseType.PROGRAMMING&&e.result.submission?13:-1)}}function ai(t,a){if(t&1&&(i(0,`
                    `),s(1,"div",23),i(2,`
                        `),s(3,"div",24,1),i(5,`
                            `),m(6,"ngx-charts-bar-horizontal-stacked",25),i(7,`
                        `),l(),i(8,`
                    `),l(),i(9,`
                `)),t&2){let e=ce(4),n=c(3);r(6),x("view",U(10,Ht,e.offsetWidth))("results",n.chartData.results)("scheme",n.chartData.scheme)("xScaleMax",n.chartData.xScaleMax)("xAxis",!0)("xAxisTickFormatting",n.xAxisFormatting)("legend",!0)("legendTitle","")("legendPosition",n.legendPosition)("tooltipDisabled",!0)}}function ri(t,a){t&1&&(i(0,`
                    `),m(1,"hr"),i(2,`
                `))}function si(t,a){t&1&&Ne(0)}function li(t,a){t&1&&(i(0,`
                    `),m(1,"hr"),i(2,`
                `))}function ci(t,a){t&1&&(i(0,`
                            `),m(1,"p",28),i(2,`
                        `))}function di(t,a){t&1&&(i(0,`
                                `),m(1,"p",29),i(2,`
                            `))}function mi(t,a){t&1&&(i(0,`
                                `),m(1,"p",30),i(2,`
                            `))}function pi(t,a){if(t&1&&(i(0,`
                            `),u(1,di,3,0)(2,mi,3,0)),t&2){let e=c(4);r(),d((e.exercise==null?null:e.exercise.assessmentType)!==e.AssessmentType.AUTOMATIC?1:-1),r(),d((e.exercise==null?null:e.exercise.assessmentType)===e.AssessmentType.AUTOMATIC?2:-1)}}function ui(t,a){if(t&1&&(i(0,`
                    `),s(1,"div"),i(2,`
                        `),s(3,"div",26),i(4,`
                            `),s(5,"div",27),i(6),f(7,"artemisTranslate"),f(8,"uppercase"),l(),i(9,`
                        `),l(),i(10,`
                        `),u(11,ci,3,0)(12,pi,3,2),l(),i(13,`
                `)),t&2){let e=c(3);r(6),v(C(8,4,C(7,2,"artemisApp.result.preliminary"))),r(5),d((e.result==null?null:e.result.assessmentType)===e.AssessmentType.AUTOMATIC_ATHENA?11:12)}}function xi(t,a){if(t&1&&(i(0,`
                        `),m(1,"jhi-feedback-node",31),i(2,`
                    `)),t&2){let e=a.$implicit,n=c(3);r(),x("feedbackItemNode",e)("course",n.course)}}function _i(t,a){if(t&1&&(i(0,`
            `),s(1,"div",13),i(2,`
                `),u(3,oi,15,3)(4,ai,10,12)(5,ri,3,0)(6,si,1,0,"ng-container",14),i(7,`

                `),u(8,li,3,0)(9,ui,14,6),s(10,"div",15),i(11,`
                    `),N(12,xi,3,2,null,null,P),l(),i(14,`
            `),l(),i(15,`
        `)),t&2){let e=c(2),n=ce(9);r(3),d(e.isExamReviewPage?-1:3),r(),d(e.showScoreChart&&(e.result.participation!=null&&e.result.participation.exercise)?4:-1),r(),d(e.isExamReviewPage?-1:5),r(),x("ngTemplateOutlet",e.buildLogs!=null&&e.buildLogs.length?n:null),r(2),d(e.buildLogs!=null&&e.buildLogs.length?8:-1),r(),d(!e.loadingFailed&&e.resultIsPreliminary(e.result)?9:-1),r(3),L(e.feedbackItemNodes)}}function fi(t,a){if(t&1&&(i(0,`
                            `),s(1,"dt",34),i(2),f(3,"artemisDate"),l(),i(4,`
                        `)),t&2){let e=c().$implicit;r(2),v(pe(3,1,e.time,"short",!0))}}function Ci(t,a){if(t&1&&(i(0,`
                        `),i(1,`
                        `),u(2,fi,5,5),s(3,"dd"),i(4),l(),i(5,`
                    `)),t&2){let e=a.$implicit,n=a.$index,o=c(4);r(2),d(n===0||e.time!==o.buildLogs[n-1].time?2:-1),r(),se("text-danger",e.type===o.BuildLogType.ERROR)("font-weight-bold",e.type===o.BuildLogType.ERROR)("text-warning",e.type===o.BuildLogType.WARNING)("mb-3",n+1<o.buildLogs.length&&e.time!==o.buildLogs[n+1].time),r(),g(`
                            `,e.log,`
                        `)}}function hi(t,a){if(t&1&&(i(0,`
                `),m(1,"h4",32),i(2,`
                `),s(3,"dl",33),i(4,`
                    `),N(5,Ci,6,10,null,null,P),l(),i(7,`
            `)),t&2){let e=c(3);r(5),L(e.buildLogs)}}function bi(t,a){t&1&&(i(0,`
                    `),m(1,"h4",35),i(2,`
                `))}function gi(t,a){t&1&&(i(0,`
                    `),m(1,"span",35),i(2,`
                `))}function Ti(t,a){t&1&&(i(0,`
                    `),m(1,"p",36),i(2,`
                `))}function vi(t,a){if(t&1&&(i(0,`
                `),u(1,bi,3,0)(2,gi,3,0)(3,Ti,3,0)),t&2){let e=c(3);r(),d(e.isExamReviewPage?2:1),r(2),d(e.isOnlyCompilationTested?3:-1)}}function ki(t,a){if(t&1&&(i(0,`
            `),u(1,hi,8,0)(2,vi,4,2)),t&2){let e=c(2);r(),d(e.buildLogs!=null&&e.buildLogs.length?1:2)}}function Fi(t,a){if(t&1&&(i(0,`
        `),u(1,_i,16,6)(2,ki,3,1)),t&2){let e=c();r(),d(!e.loadingFailed&&(e.feedbackItemNodes!=null&&e.feedbackItemNodes.length)?1:2)}}function yi(t,a){if(t&1&&(i(0,`
                        `),s(1,"dt",34),i(2),f(3,"artemisDate"),l(),i(4,`
                    `)),t&2){let e=c().$implicit;r(2),v(pe(3,1,e.time,"short",!0))}}function Ii(t,a){if(t&1&&(i(0,`
                    `),i(1,`
                    `),u(2,yi,5,5),s(3,"dd"),i(4),l(),i(5,`
                `)),t&2){let e=a.$implicit,n=a.$index,o=c(3);r(2),d(n===0||e.time!==o.buildLogs[n-1].time?2:-1),r(),se("text-danger",e.type===o.BuildLogType.ERROR)("font-weight-bold",e.type===o.BuildLogType.ERROR)("text-warning",e.type===o.BuildLogType.WARNING)("mb-3",n+1<o.buildLogs.length&&e.time!==o.buildLogs[n+1].time),r(),g(`
                        `,e.log,`
                    `)}}function Si(t,a){if(t&1&&(i(0,`
            `),m(1,"h4",32),i(2,`
            `),s(3,"dl",33),i(4,`
                `),N(5,Ii,6,10,null,null,P),l(),i(7,`
        `)),t&2){let e=c(2);r(5),L(e.buildLogs)}}function Ei(t,a){t&1&&(i(0,`
                `),m(1,"h4",35),i(2,`
            `))}function Ai(t,a){t&1&&(i(0,`
                `),m(1,"span",35),i(2,`
            `))}function Ri(t,a){t&1&&(i(0,`
                `),m(1,"p",36),i(2,`
            `))}function wi(t,a){if(t&1&&(i(0,`
            `),i(1,`
            `),u(2,Ei,3,0)(3,Ai,3,0)(4,Ri,3,0)),t&2){let e=c(2);r(2),d(e.isExamReviewPage?3:2),r(2),d(e.isOnlyCompilationTested?4:-1)}}function Pi(t,a){if(t&1&&(i(0,`
        `),u(1,Si,8,0)(2,wi,5,2)),t&2){let e=c();r(),d(e.buildLogs!=null&&e.buildLogs.length?1:2)}}function Ni(t,a){if(t&1){let e=S();i(0,`
        `),s(1,"button",37),E("click",function(){F(e);let o=c();return y(o.activeModal.close("Close click"))}),i(2,"Close"),l(),i(3,`
    `)}}var Eo=(()=>{class t{resultService=b(fe);buildLogService=b(dt);translateService=b(M);profileService=b($e);feedbackService=b(ht);feedbackChartService=b(bt);injector=b(Pe);activeModal=b(Be,{optional:!0});BuildLogType=H;AssessmentType=ue;ExerciseType=O;resultIsPreliminary=lt;roundValueSpecifiedByCourseSettings=Z;xAxisFormatting=We;exercise;result;feedbackFilter;showScoreChart=!1;exerciseType;messageKey=void 0;showMissingAutomaticFeedbackInformation=!1;latestDueDate;taskName;numberOfNotExecutedTests;isExamReviewPage=!1;isPrinting=!1;faXmark=He;faCircleNotch=Ge;faExclamationTriangle=J;showTestDetails=!1;isLoading=!1;loadingFailed=!1;buildLogs;course;isOnlyCompilationTested;commitHashURLTemplate;commitHash;commitUrl;chartData={xScaleMax:100,scheme:{name:"Feedback Detail",selectable:!0,group:ee.Ordinal,domain:[_e.GREEN,_e.RED]},results:[]};labels;legendPosition=qe.Below;badge;feedbackItemService;feedbackItemNodes;feedbackItemNodesBeforePrinting;constructor(){let e=this.translateService,n=e.instant("artemisApp.result.chart.points"),o=e.instant("artemisApp.result.chart.deductions");this.labels=[n,o]}ngOnInit(){this.isLoading=!0,this.initializeExerciseInformation(),this.feedbackItemService=this.exerciseType===O.PROGRAMMING?this.injector.get(Ct):this.injector.get(_t),this.initFeedbackInformation(),this.commitHash=this.getCommitHash().slice(0,11),this.isOnlyCompilationTested=st(this.result,rt(this.exercise,this.result.participation,this.result,!1)),this.profileService.getProfileInfo().subscribe(e=>{this.commitHashURLTemplate=e?.commitHashURLTemplate,this.commitUrl=this.getCommitUrl(this.result,this.exercise,this.commitHashURLTemplate)})}ngOnChanges(e){e.isPrinting&&(e.isPrinting.currentValue?(this.feedbackItemNodesBeforePrinting=Ve(this.feedbackItemNodes),this.expandFeedbackItemGroups()):this.feedbackItemNodes=this.feedbackItemNodesBeforePrinting)}initializeExerciseInformation(){this.exercise??=this.result.participation?.exercise,this.exercise&&(this.course=Q(this.exercise)),!this.exerciseType&&this.exercise?.type&&(this.exerciseType=this.exercise.type),!this.exerciseType&&at(this.result?.participation)&&(this.exerciseType=O.PROGRAMMING),this.showTestDetails=this.exercise?.isAtLeastTutor||this.exerciseType===O.PROGRAMMING&&this.exercise?.showTestNamesToStudents||!1}initFeedbackInformation(){w(this.result.feedbacks).pipe(re(e=>e?.length?(e.forEach(n=>n.result=this.result),w(e)):this.resultService.getFeedbackDetailsForResult(this.result.participation.id,this.result).pipe(Ee(n=>n.body))),re(e=>{if(e?.length){this.result.feedbacks=e;let n=this.feedbackService.filterFeedback(e,this.feedbackFilter);nt(n);let o=this.feedbackItemService.create(n,this.showTestDetails);this.feedbackItemNodes=this.feedbackItemService.group(o,this.exercise),this.isExamReviewPage&&this.expandFeedbackItemGroups()}return this.result.assessmentType!==ue.AUTOMATIC_ATHENA&&this.exerciseType===O.PROGRAMMING&&this.result.participation&&(!this.result.submission||this.result.submission.buildFailed)?this.fetchAndSetBuildLogs(this.result.participation.id,this.result.id):(this.showScoreChart&&this.updateChart(this.feedbackItemNodes),ct(this.result)&&(this.badge=fe.evaluateBadge(this.result.participation,this.result)),w(null))}),ae(()=>(this.loadingFailed=!0,w(null)))).subscribe(()=>{this.isLoading=!1})}fetchAndSetBuildLogs=(e,n)=>this.buildLogService.getBuildLogs(e,n).pipe(Ae(o=>{this.buildLogs=ie.fromBuildLogs(o)}),ae(o=>o.status===403?w(null):Se(()=>o)));updateChart(e){if(!this.exercise||e.length===0){this.showScoreChart=!1;return}this.chartData=this.feedbackChartService.create(e,this.exercise)}getCommitHash(){return this.result?.submission?.commitHash??"n.a."}expandFeedbackItemGroups(){this.feedbackItemNodes.forEach(e=>{ne(e)&&(e.open=!0)})}getCommitUrl(e,n,o){let p=n?.projectKey,_=e.submission;return ot(o,p,e.participation,_)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=I({type:t,selectors:[["jhi-result-detail"]],inputs:{exercise:"exercise",result:"result",feedbackFilter:"feedbackFilter",showScoreChart:"showScoreChart",exerciseType:"exerciseType",messageKey:"messageKey",showMissingAutomaticFeedbackInformation:"showMissingAutomaticFeedbackInformation",latestDueDate:"latestDueDate",taskName:"taskName",numberOfNotExecutedTests:"numberOfNotExecutedTests",isExamReviewPage:"isExamReviewPage",isPrinting:"isPrinting"},features:[Re],decls:16,vars:5,consts:[["buildLogsContainer",""],["containerRef",""],[1,"modal-body","position-relative"],[1,"modal-footer"],[1,"modal-header","feedback-header"],[1,"modal-title",3,"innerHTML"],["jhiTranslate","artemisApp.result.detail.feedback",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"feedback-header__close",3,"click"],["size","xl",3,"icon"],[1,"mb-3"],[3,"innerHTML"],["id","result-detail-spinner",1,"text-body-secondary","d-flex","justify-content-center"],["animation","spin","size","lg",3,"icon"],[1,"result-detail-container"],[4,"ngTemplateOutlet"],[1,"feedback-list"],[1,"d-flex","justify-content-between","align-items-start"],["jhiTranslate","artemisApp.result.resultString.automaticAIFeedbackSuccessfulTooltip"],["jhiTranslate","artemisApp.result.score",3,"translateValues"],["jhiTranslate","artemisApp.result.scoreWithPoints",3,"translateValues"],["id","result-score-badge",1,"badge",3,"ngClass","ngbTooltip"],[3,"ngbTooltip"],["target","_blank","rel","noopener noreferrer",3,"href"],[1,"result-score-chart"],["id","feedback-chart",1,"chart-space"],[3,"view","results","scheme","xScaleMax","xAxis","xAxisTickFormatting","legend","legendTitle","legendPosition","tooltipDisabled"],[1,"d-flex","justify-content-end","m-1"],[1,"badge","bg-warning"],["jhiTranslate","artemisApp.result.preliminaryTooltipAthena"],["jhiTranslate","artemisApp.result.preliminaryTooltipSemiAutomatic"],["jhiTranslate","artemisApp.result.preliminaryTooltip"],[3,"feedbackItemNode","course"],["jhiTranslate","artemisApp.result.buildError"],[1,"buildoutput","dl-horizontal"],[1,"mb-1"],["jhiTranslate","artemisApp.result.noResultDetails"],["jhiTranslate","artemisApp.result.onlyCompilationTested",1,"mb-0"],["id","feedback-close","type","button",1,"btn","btn-outline-dark",3,"click"]],template:function(n,o){n&1&&(u(0,Kt,7,2),s(1,"div",2),i(2,`
    `),i(3,`
    `),u(4,zt,5,3)(5,Wt,7,6)(6,qt,6,1)(7,Fi,3,1)(8,Pi,3,1,"ng-template",null,0,Me),i(10,`
`),l(),i(11,`
`),s(12,"div",3),i(13,`
    `),u(14,Ni,4,0),l(),i(15,`
`)),n&2&&(d(o.isExamReviewPage?-1:0),r(4),d(o.messageKey?4:-1),r(),d(o.showMissingAutomaticFeedbackInformation?5:-1),r(),d(o.isLoading?6:7),r(8),d(o.activeModal?14:-1))},dependencies:[G,B,q,X,Ye,Xe,Oe,vt,De,ze,D,pt],styles:["[_nghost-%COMP%]   .feedback-header[_ngcontent-%COMP%]{color:#fff;background-color:var(--artemis-dark);display:flex;justify-content:space-between}[_nghost-%COMP%]   .feedback-header__close[_ngcontent-%COMP%]{background:none;border:none;color:#fff}[_nghost-%COMP%]   .result-score-chart[_ngcontent-%COMP%]{margin-bottom:3rem}[_nghost-%COMP%]   .result-score-chart[_ngcontent-%COMP%]   .chart-tooltip-space[_ngcontent-%COMP%]   .chart-tooltip-space-content[_ngcontent-%COMP%]{width:250px;height:20px;top:-15px;position:absolute}[_nghost-%COMP%]   -shadowcsshost  .legend-labels{background-color:transparent!important;text-align:center!important;font-weight:bolder}[_nghost-%COMP%]   -shadowcsshost  .legend-label{color:var(--artemis-dark)!important}[_nghost-%COMP%]   -shadowcsshost  .legend-label-color{border:1px solid}[_nghost-%COMP%]   .modal-footer[_ngcontent-%COMP%]{min-width:100%}"]})}return t})();export{ie as a,ht as b,Eo as c};
//# sourceMappingURL=chunk-65Z25AP3.js.map
