import{c as N,d as Ge}from"./chunk-2SI4Q343.js";import{a as se,b as Xt,c as rt,d as et}from"./chunk-4YACL3TM.js";import{a as Ke}from"./chunk-IJQAYIKN.js";import{a as He,b as $e,d as Ze}from"./chunk-IJRVZ46L.js";import{a as Ye}from"./chunk-SUUJN3EQ.js";import{d as Wt}from"./chunk-MD22LTSS.js";import{A as G,C as Xe}from"./chunk-RKZRHQUL.js";import{C as We,D as Rt,a as Ft,b as Pe,c as Fe,d as Le,f as ze,h as Lt,i as oe,j as re,k as Ue,l as st,m as Ne,o as Oe,p as je,q as Be,u as Re}from"./chunk-RTOKZMYN.js";import{c as Ve}from"./chunk-5QODR5GQ.js";import{d as Ut,e as Nt,f as Ot,g as jt,h as Bt}from"./chunk-KZGAUMRM.js";import{e as zt}from"./chunk-U4DJRHYQ.js";import{c as ne}from"./chunk-V7PDYRDZ.js";import{m as Me,n as Pt}from"./chunk-Z2YUBN6N.js";import{d as V}from"./chunk-CT44YL7Q.js";import{b as Ie}from"./chunk-YLNI6ED3.js";import{K as At,a as bt,v as H}from"./chunk-VZRSC3LP.js";import{A as Ct,B as Et,K as vt,b as ut,c as mt,h as xt,m as gt,o as ht,q as Ae,w as _t,x as ft,z as wt}from"./chunk-WA5GEAJB.js";import{e as z}from"./chunk-5GXY5RYT.js";import{a as Vt}from"./chunk-K3W6YFKH.js";import{d as $}from"./chunk-EDXSOKK5.js";import{B as qt,Bb as kt,Bc as It,Jc as Qe,Lc as De,Tb as Qt,V as St,Y as Tt,fa as yt,gc as ye,ic as Dt,nb as Te,nd as Mt,q as qe,wc as ke,z as Se}from"./chunk-Z4VHWOB5.js";import{a as Z}from"./chunk-U54OSGNH.js";import{n as pt,s as ve,t as be}from"./chunk-IOA4DPXY.js";import{Ac as ge,Bc as he,Db as l,Dc as C,Ea as P,Ed as ot,Id as ct,L as ue,La as dt,Ma as p,Mc as g,Na as u,Oc as d,Rc as T,Sc as X,Tb as R,Tc as ie,U as me,Va as F,Yc as K,Zb as E,Zc as J,_c as tt,cd as L,dd as t,fd as Y,gd as _e,jc as W,kc as x,ld as y,md as k,nd as Q,pd as fe,qd as we,rd as Ce,sc as w,uc as O,ud as Ee,vc as j,wb as xe,wc as B,xc as s,yc as a,yd as D,zc as c,zd as I}from"./chunk-5LC5EQRR.js";import{a as te,b as ee,j as nt}from"./chunk-3E746U5Y.js";var Yt=class extends Ze{importedFiles;backgroundFilePath;dropLocations;dragItems;correctMappings;constructor(){super($e.DRAG_AND_DROP)}};var Bn=(()=>{class o extends Lt{static ID="incorrect-multiple-choice-answer.action";static IDENTIFIER="[wrong]";static TEXT="Enter a wrong answer option here";constructor(){super(o.ID,"artemisApp.multipleChoiceQuestion.editor.addInCorrectAnswerOption")}run(e){this.addTextWithDomainActionIdentifier(e,o.TEXT)}getOpeningIdentifier(){return o.IDENTIFIER}}return o})();var Xn=(()=>{class o extends Lt{static ID="artemisApp.multipleChoiceQuestion.editor.addCorrectAnswerOption";static IDENTIFIER="[correct]";static TEXT="Enter a correct answer option here";constructor(){super(o.ID,"artemisApp.multipleChoiceQuestion.editor.addCorrectAnswerOption")}run(e){this.addTextWithDomainActionIdentifier(e,o.TEXT)}getOpeningIdentifier(){return o.IDENTIFIER}}return o})();var Ht=class{x;y;offsetX;offsetY;startX;startY};var S=function(o){return o[o.NONE=0]="NONE",o[o.CREATE=1]="CREATE",o[o.MOVE=2]="MOVE",o[o.RESIZE_BOTH=3]="RESIZE_BOTH",o[o.RESIZE_X=4]="RESIZE_X",o[o.RESIZE_Y=5]="RESIZE_Y",o}(S||{});function $t(o){return new Promise((m,e)=>{let{width:n,height:i}=o.clip,r=new Blob([o.svg],{type:"image/svg+xml"}),h=URL.createObjectURL(r),_=new Image;_.width=n,_.height=i,_.src=h,_.onload=()=>{let v=document.createElement("canvas");v.style.width=`${n}px`,v.style.height=`${i}px`;let f=1.5;v.width=n*f,v.height=i*f;let b=v.getContext("2d");b.scale(f,f),b.drawImage(_,0,0),oi(v,m)},_.onerror=v=>{e(v)}})}function oi(o,m){typeof o.toBlob=="function"?o.toBlob(m):setTimeout(()=>{let e=window.atob(o.toDataURL().split(",")[1]),n=e.length,i=new Uint8Array(n);for(let r=0;r<n;r++)i[r]=e.charCodeAt(r);m(new Blob([i],{type:"image/png"}))})}var q=200;function ro(o,m,e){return nt(this,null,function*(){let n=[...Object.entries(e.interactive.elements).filter(([,M])=>M).map(([M])=>M),...Object.entries(e.interactive.relationships).filter(([,M])=>M).map(([M])=>M)],i=[...Object.values(e.elements),...Object.values(e.relationships)],r=yield Wt.exportModelAsSvg(e,{keepOriginalSize:!0,exclude:n}),h=yield $t(r),_=new Map;_.set("diagram-background.png",h);let v=new Map,f=new Map;for(let M of n){let U=i.find(Jt=>Jt.id===M);if(!U)continue;let{dragItem:it,dropLocation:Kt}=yield si(U,e,r.clip,_);v.set(U.id,it),f.set(U.id,Kt)}let b=ci(v,f,e),A=ri(m,"diagram-background.png",[...v.values()],[...f.values()],b);return A.importedFiles=_,A})}function ri(o,m,e,n,i){let r=new Yt;return r.title=o,r.text="Fill the empty spaces in the UML diagram by dragging and dropping the elements below the diagram into the correct places.",r.scoringType=He.PROPORTIONAL_WITH_PENALTY,r.points=1,r.backgroundFilePath=m,r.dropLocations=n,r.dragItems=e,r.correctMappings=i,r}function si(o,m,e,n){return nt(this,null,function*(){let i=[G.ClassAttribute,G.ClassMethod,G.ObjectAttribute,G.ObjectMethod];return o.type in Xe?di(o,m,e,n):i.includes(o.type)?li(o,m,e):ai(o,m,e,n)})}function ai(o,m,e,n){return nt(this,null,function*(){let i=yield Wt.exportModelAsSvg(m,{include:[o.id]}),r=yield $t(i),h=`element-${o.id}.png`;n.set(h,r);let _=new et;_.pictureFilePath=h;let v=ae(i.clip,e);return new N(_,v)})}function li(o,m,e){return nt(this,null,function*(){let n=new et;n.text=o.name;let i=ae(o.bounds,e);return new N(n,i)})}function di(o,m,e,n){return nt(this,null,function*(){let r={};if(o.bounds.width<30){let A=30-o.bounds.width;r=ee(te({},r),{right:A/2,left:A/2})}if(o.bounds.height<30){let A=30-o.bounds.height;r=ee(te({},r),{top:A/2,bottom:A/2})}let h=yield Wt.exportModelAsSvg(m,{margin:r,include:[o.id]}),_=yield $t(h),v=`relationship-${o.id}.png`;n.set(v,_);let f=new et;f.pictureFilePath=v;let b=ae(h.clip,e);return new N(f,b)})}function ae(o,m){let e=new rt;return e.posX=V((o.x-(m.x??0))/m.width*q,2),e.posY=V((o.y-(m.y??0))/m.height*q,2),e.width=V(o.width/m.width*q,2),e.height=V(o.height/m.height*q,2),e}function ci(o,m,e){let n=[G.ClassAttribute,G.ClassMethod,G.ObjectAttribute],i=new Map,r=Object.values(e.elements).filter(_=>n.includes(_.type));for(let[_,v]of o.entries())for(let[f,b]of m.entries())if(_===f){let A=new N(v,b);i.set(_,[A])}for(let[_,v]of o.entries()){let f=r.find(A=>A.id===_);if(!f||!f.owner)continue;let b=r.filter(A=>A.owner===f.owner&&A.type===f.type);for(let A of b)if(A.id!==_&&i.has(A.id)){let M=new N(v,m.get(A.id));i.set(_,[...i.get(_),M])}}let h=new Map(i);for(let[_,v]of o.entries()){let f=r.find(b=>b.id===_);if(!(!f||!f.name))for(let[b]of m.entries()){let A=r.find(M=>M.id===b);if(!(!A||A.id===f.id||A.owner===f.owner||A.name!==f.name)&&h.has(b)){let M=[...h.get(b)];for(let U of M){let it=new N(v,U.dropLocation);i.set(_,[...i.get(_),it])}}}}return new Array().concat(...i.values())}function pi(o,m){if(o&1){let e=C();t(0,`
    `),s(1,"div",3),t(2,`
        `),c(3,"h4",4),t(4,`
        `),s(5,"button",5),g("click",function(){let i=p(e).dismiss;return u(i())}),a(),t(6,`
    `),a(),t(7,`
    `),s(8,"div",6),t(9,`
        `),s(10,"table",7),t(11,`
            `),s(12,"tr"),t(13,`
                `),c(14,"th",8),t(15,`
                `),c(16,"td",9),t(17,`
            `),a(),t(18,`

            `),s(19,"tr"),t(20,`
                `),c(21,"th",10),t(22,`
                `),c(23,"td",11),t(24,`
            `),a(),t(25,`

            `),s(26,"tr"),t(27,`
                `),c(28,"th",12),t(29,`
                `),c(30,"td",13),t(31,`
            `),a(),t(32,`
        `),a(),t(33,`
    `),a(),t(34,`
    `),s(35,"div",14),t(36,`
        `),s(37,"button",15),g("click",function(){let i=p(e).close;return u(i())}),t(38,"Close"),a(),t(39,`
    `),a(),t(40,`
`)}}var Zt=(()=>{class o{modalService=P(H);farQuestionCircle=Pt;open(e){this.modalService.open(e,{size:"lg"})}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=R({type:o,selectors:[["jhi-quiz-scoring-info-modal"]],decls:9,vars:1,consts:[["info",""],[1,"btn",3,"click"],[3,"icon"],[1,"modal-header"],["jhiTranslate","artemisApp.quizExercise.scoringTypeExplanation.title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"table"],["jhiTranslate","artemisApp.quizExercise.scoringType.all_or_nothing"],["jhiTranslate","artemisApp.quizExercise.scoringTypeExplanation.all_or_nothing"],["jhiTranslate","artemisApp.quizExercise.scoringType.proportional_with_penalty"],["jhiTranslate","artemisApp.quizExercise.scoringTypeExplanation.proportional_with_penalty"],["jhiTranslate","artemisApp.quizExercise.scoringType.proportional_without_penalty"],["jhiTranslate","artemisApp.quizExercise.scoringTypeExplanation.proportional_without_penalty"],[1,"modal-footer"],["type","button",1,"btn","btn-outline",3,"click"]],template:function(n,i){if(n&1){let r=C();E(0,pi,41,0,"ng-template",null,0,ot),t(2,`
`),s(3,"div"),t(4,`
    `),s(5,"button",1),g("click",function(){p(r);let _=L(1);return u(i.open(_))}),c(6,"fa-icon",2),a(),t(7,`
`),a(),t(8,`
`)}n&2&&(l(6),x("icon",i.farQuestionCircle))},dependencies:[Z,$],encapsulation:2})}return o})();var mi=["clickLayer"],xi=["backgroundImage"],gi=["markdownEditor"],hi=o=>({disabled:o}),_i=(o,m,e,n)=>({top:o,left:m,width:e,height:n}),fi=()=>[];function wi(o,m){if(o&1){let e=C();t(0,`
        `),s(1,"div",15),t(2,`
            `),s(3,"button",16),g("click",function(){p(e);let i=d();return u(i.isQuestionCollapsed=!i.isQuestionCollapsed)}),t(4,`
                `),c(5,"fa-icon",17),t(6,`
            `),a(),t(7,`
            `),s(8,"div",18),t(9,`
                `),s(10,"input",19),D(11,"artemisTranslate"),Q("ngModelChange",function(i){p(e);let r=d();return k(r.question.title,i)||(r.question.title=i),u(i)}),g("ngModelChange",function(){p(e);let i=d();return u(i.questionUpdated.emit())}),a(),t(12,`
            `),a(),t(13,`
            `),s(14,"div",20),t(15,`
                `),s(16,"div",21),t(17,`
                    `),c(18,"span",22),t(19,`
                    `),s(20,"input",23),Q("ngModelChange",function(i){p(e);let r=d();return k(r.question.points,i)||(r.question.points=i),u(i)}),g("ngModelChange",function(){p(e);let i=d();return u(i.questionUpdated.emit())}),a(),t(21,`
                `),a(),t(22,`
                `),s(23,"div",24),t(24,`
                    `),s(25,"h3",25)(26,"span",26),t(27,"DnD"),a()(),t(28,`
                `),a(),t(29,`
            `),a(),t(30,`
        `),a(),t(31,`
    `)}if(o&2){let e=d();l(3),W("aria-expanded",!e.isQuestionCollapsed)("aria-controls","collapseQuestion"+e.questionIndex),l(2),x("icon",e.isQuestionCollapsed?e.faAngleRight:e.faAngleDown),l(5),T("placeholder",I(11,7,"artemisApp.quizExercise.placeholder.shortQuestionTitle")),y("ngModel",e.question.title),l(10),x("max",e.MAX_POINTS),y("ngModel",e.question.points)}}function Ci(o,m){if(o&1){let e=C();t(0,`
        `),s(1,"div",27),t(2,`
            `),s(3,"div",11),t(4,`
                `),s(5,"div",28),t(6,`
                    `),s(7,"button",16),g("click",function(){p(e);let i=d();return u(i.isQuestionCollapsed=!i.isQuestionCollapsed)}),t(8,`
                        `),c(9,"fa-icon",17),t(10,`
                    `),a(),t(11,`
                `),a(),t(12,`
                `),s(13,"div",29),t(14,`
                    `),s(15,"div",30),t(16,`
                        `),s(17,"div",31),t(18,`
                            `),s(19,"input",32),D(20,"artemisTranslate"),D(21,"artemisTranslate"),Q("ngModelChange",function(i){p(e);let r=d();return k(r.question.title,i)||(r.question.title=i),u(i)}),a(),t(22,`
                        `),a(),t(23,`
                        `),s(24,"div",33),t(25,`
                            `),s(26,"span",34),t(27,`
                                `),s(28,"button",35),D(29,"artemisTranslate"),g("click",function(){p(e);let i=d();return u(i.resetQuestionTitle())}),t(30,`
                                    `),c(31,"fa-icon",36),t(32,`
                                `),a(),t(33,`
                            `),a(),t(34,`
                        `),a(),t(35,`
                    `),a(),t(36,`
                `),a(),t(37,`
                `),s(38,"div",37),t(39,`
                    `),s(40,"div",24),t(41,`
                        `),s(42,"h3",25)(43,"span",38),t(44,"DnD"),a()(),t(45,`
                    `),a(),t(46,`
                `),a(),t(47,`
                `),s(48,"div",39),t(49,`
                    `),s(50,"button",40),D(51,"artemisTranslate"),g("click",function(){p(e);let i=d();return u(i.moveUpQuestion())}),t(52,`
                        `),c(53,"fa-icon",36),t(54,`
                    `),a(),t(55,`
                    `),s(56,"button",41),D(57,"artemisTranslate"),g("click",function(){p(e);let i=d();return u(i.moveDownQuestion())}),t(58,`
                        `),c(59,"fa-icon",36),t(60,`
                    `),a(),t(61,`
                    `),s(62,"button",42),D(63,"artemisTranslate"),g("click",function(){p(e);let i=d();return u(i.resetQuestion())}),t(64,`
                        `),c(65,"fa-icon",36),t(66,`
                    `),a(),t(67,`
                `),a(),t(68,`
            `),a(),t(69,`
        `),a(),t(70,`
    `)}if(o&2){let e=d();l(7),W("aria-expanded",!e.isQuestionCollapsed)("aria-controls","collapseQuestion"+e.questionIndex),l(2),x("icon",e.isQuestionCollapsed?e.faAngleRight:e.faAngleDown),l(10),T("placeholder",I(20,14,"artemisApp.quizExercise.placeholder.shortQuestionTitle")),y("ngModel",e.question.title),W("aria-label",I(21,16,"artemisApp.quizExercise.placeholder.shortQuestionTitle")),l(9),x("ngbTooltip",I(29,18,"artemisApp.quizExercise.re-evaluate.resetQuestionTitle")),l(3),x("icon",e.faUndo),l(19),x("ngbTooltip",I(51,20,"artemisApp.quizExercise.re-evaluate.moveUp")),l(3),x("icon",e.faChevronUp),l(3),x("ngbTooltip",I(57,22,"artemisApp.quizExercise.re-evaluate.moveDown")),l(3),x("icon",e.faChevronDown),l(3),x("ngbTooltip",I(63,24,"artemisApp.quizExercise.re-evaluate.resetQuestion")),l(3),x("icon",e.faUndo)}}function Ei(o,m){if(o&1){let e=C();t(0,`
            `),s(1,"div",43),t(2,`
                `),s(3,"div",44),t(4,`
                    `),c(5,"span",45),t(6,`
                    `),s(7,"select",46),Q("ngModelChange",function(i){p(e);let r=d();return k(r.question.scoringType,i)||(r.question.scoringType=i),u(i)}),g("ngModelChange",function(){p(e);let i=d();return u(i.questionUpdated.emit())}),t(8,`
                        `),c(9,"option",47),t(10,`
                        `),c(11,"option",48),t(12,`
                        `),c(13,"option",49),t(14,`
                    `),a(),t(15,`
                    `),c(16,"jhi-quiz-scoring-info-modal"),t(17,`
                `),a(),t(18,`
                `),s(19,"div",44),t(20,`
                    `),s(21,"div",50),t(22,`
                        `),s(23,"input",51),Q("ngModelChange",function(i){p(e);let r=d();return k(r.question.randomizeOrder,i)||(r.question.randomizeOrder=i),u(i)}),a(),t(24,`
                        `),c(25,"label",52),t(26,`
                    `),a(),t(27,`
                `),a(),t(28,`
                `),s(29,"div",44),t(30,`
                    `),s(31,"div",53),g("click",function(){p(e);let i=d();return u(i.deleteQuestion())}),t(32,`
                        `),c(33,"fa-icon",54),t(34,`
                    `),a(),t(35,`
                `),a(),t(36,`
            `),a(),t(37,`
        `)}if(o&2){let e=d();l(7),y("ngModel",e.question.scoringType),l(16),T("id","cbRandomizeOrderDnD"+e.questionIndex),y("ngModel",e.question.randomizeOrder),l(2),T("for","cbRandomizeOrderDnD"+e.questionIndex),l(8),x("icon",e.faTrash)}}function vi(o,m){if(o&1){let e=C();t(0,`
            `),s(1,"div",55),t(2,`
                `),s(3,"div",56),t(4,`
                    `),s(5,"div",44),t(6,`
                        `),c(7,"span",45),t(8,`
                        `),s(9,"select",46),Q("ngModelChange",function(i){p(e);let r=d();return k(r.question.scoringType,i)||(r.question.scoringType=i),u(i)}),g("ngModelChange",function(){p(e);let i=d();return u(i.questionUpdated.emit())}),t(10,`
                            `),c(11,"option",47),t(12,`
                            `),c(13,"option",48),t(14,`
                            `),c(15,"option",49),t(16,`
                        `),a(),t(17,`
                        `),c(18,"jhi-quiz-scoring-info-modal"),t(19,`
                    `),a(),t(20,`
                `),a(),t(21,`
                `),s(22,"div",57),t(23,`
                    `),s(24,"div",44),t(25,`
                        `),c(26,"span",22),t(27,`
                        `),c(28,"input",58),t(29,`
                    `),a(),t(30,`
                `),a(),t(31,`
                `),s(32,"div",59),t(33,`
                    `),s(34,"div",44),t(35,`
                        `),s(36,"div",50),t(37,`
                            `),s(38,"input",51),Q("ngModelChange",function(i){p(e);let r=d();return k(r.question.randomizeOrder,i)||(r.question.randomizeOrder=i),u(i)}),a(),t(39,`
                            `),c(40,"label",52),t(41,`
                        `),a(),t(42,`
                    `),a(),t(43,`
                `),a(),t(44,`
                `),s(45,"div",60),t(46,`
                    `),s(47,"div",61),t(48,`
                        `),s(49,"button",62),g("click",function(){p(e);let i=d();return u(i.question.invalid=!0)}),a(),t(50,`
                        `),c(51,"button",63),t(52,`
                    `),a(),t(53,`
                    `),s(54,"div",64),t(55,`
                        `),s(56,"div",65),g("click",function(){p(e);let i=d();return u(i.deleteQuestion())}),t(57,`
                            `),c(58,"fa-icon",54),t(59,`
                        `),a(),t(60,`
                    `),a(),t(61,`
                `),a(),t(62,`
            `),a(),t(63,`
        `)}if(o&2){let e=d();l(9),y("ngModel",e.question.scoringType),l(19),x("value",e.question.points),l(10),T("id","cbRandomizeOrderDnD"+e.questionIndex),y("ngModel",e.question.randomizeOrder),l(2),T("for","cbRandomizeOrderDnD"+e.questionIndex),l(9),x("hidden",e.question.invalid),l(2),x("hidden",!e.question.invalid)("disabled",e.question.invalid),l(7),x("icon",e.faTrash)}}function bi(o,m){if(o&1){let e=C();t(0,`
                `),s(1,"div",66),t(2,`
                    `),s(3,"jhi-markdown-editor-monaco",67,2),g("markdownChange",function(i){p(e);let r=d();return u(r.changesInMarkdown(i))})("textWithDomainActionsFound",function(i){p(e);let r=d();return u(r.domainActionsFound(i))}),a(),t(5,`
                `),a(),t(6,`
            `)}if(o&2){let e=d();l(3),x("markdown",e.questionEditorText)("showPreviewButton",!1)("domainActions",e.dragAndDropDomainActions)}}function Ai(o,m){if(o&1){let e=C();t(0,`
                `),s(1,"div",9),t(2,`
                    `),s(3,"div",68),t(4,`
                        `),s(5,"div",31),t(6,`
                            `),t(7,`
                            `),s(8,"jhi-markdown-editor-monaco",69,2),g("markdownChange",function(i){p(e);let r=d();return u(r.changesInMarkdown(i))})("textWithDomainActionsFound",function(i){p(e);let r=d();return u(r.domainActionsFound(i))}),a(),t(10,`
                        `),a(),t(11,`
                        `),s(12,"div",33),t(13,`
                            `),s(14,"span",70),t(15,`
                                `),s(16,"button",35),D(17,"artemisTranslate"),g("click",function(){p(e);let i=d();return u(i.resetQuestionText())}),t(18,`
                                    `),c(19,"fa-icon",36),t(20,`
                                `),a(),t(21,`
                            `),a(),t(22,`
                        `),a(),t(23,`
                    `),a(),t(24,`
                `),a(),t(25,`
            `)}if(o&2){let e=d();l(8),x("markdown",e.questionEditorText)("showPreviewButton",!1)("domainActions",e.dragAndDropDomainActions)("enableFileUpload",!1),l(8),x("ngbTooltip",I(17,6,"artemisApp.quizExercise.re-evaluate.resetQuestionText")),l(3),x("icon",e.faUndo)}}function qi(o,m){o&1&&(t(0,`
                                `),c(1,"span",76),t(2,`
                            `))}function Si(o,m){o&1&&(t(0,`
                                `),c(1,"span",77),t(2,`
                            `))}function Ti(o,m){if(o&1){let e=C();t(0,`
                    `),s(1,"button",78),g("click",function(){p(e);let i=d(2);return u(i.resetBackground())}),t(2,`
                        `),c(3,"fa-icon",36),t(4,`
                    `),a(),t(5,`
                `)}if(o&2){let e=d(2);l(3),x("icon",e.faUndo)}}function yi(o,m){if(o&1){let e=C();t(0,`
            `),s(1,"div",71),t(2,`
                `),s(3,"div",72),t(4,`
                    `),s(5,"div",73),t(6,`
                        `),s(7,"button",74),g("click",function(){p(e);let i=L(16);return u(i.click())}),t(8,`
                            `),c(9,"fa-icon",36),t(10,`
                            `),E(11,qi,3,0)(12,Si,3,0),a(),t(13,`
                    `),a(),t(14,`
                    `),s(15,"input",75,3),g("change",function(i){p(e);let r=d();return u(r.setBackgroundFile(i))}),a(),t(17,`
                `),a(),t(18,`
                `),E(19,Ti,6,1),a(),t(20,`
        `)}if(o&2){let e=d();l(9),x("icon",e.faPlus),l(2),w(e.reEvaluationInProgress?-1:11),l(),w(e.reEvaluationInProgress?12:-1),l(3),X("id","backgroundFileInput",e.questionIndex,""),x("hidden",!0),l(4),w(e.reEvaluationInProgress?19:-1)}}function ki(o,m){o&1&&(t(0,`
            `),s(1,"div",79),t(2,`
                `),c(3,"span",80),t(4,`
            `),a(),t(5,`
        `))}function Qi(o,m){o&1&&(t(0,`
            `),s(1,"div",79),t(2,`
                `),c(3,"span",81),t(4,`
            `),a(),t(5,`
        `))}function Di(o,m){if(o&1){let e=C();t(0,`
                                        `),s(1,"div",95),g("click",function(){p(e);let i=d().$implicit;return u(i.invalid=!0)}),t(2,`
                                            `),c(3,"fa-icon",86),t(4,`
                                        `),a(),t(5,`
                                    `)}if(o&2){let e=d(2);l(3),x("icon",e.faBan)}}function Ii(o,m){if(o&1){let e=C();t(0,`
                                        `),s(1,"div",96),g("click",function(){p(e);let i=d().$implicit,r=d();return u(r.resetDropLocation(i))}),t(2,`
                                            `),c(3,"fa-icon",86),t(4,`
                                        `),a(),t(5,`
                                    `)}if(o&2){let e=d(2);l(3),x("icon",e.faUndo)}}function Mi(o,m){if(o&1){let e=C();t(0,`
                                        `),s(1,"div",97),g("click",function(){p(e);let i=d().$implicit,r=d();return u(r.duplicateDropLocation(i))}),t(2,`
                                            `),c(3,"fa-icon",86),t(4,`
                                        `),a(),t(5,`
                                    `)}if(o&2){let e=d(2);l(3),x("icon",e.faCopy)}}function Vi(o,m){if(o&1){let e=C();t(0,`
                                    `),s(1,"div",98),t(2),s(3,"div",99),g("click",function(){p(e);let i=d().$implicit,r=d();return u(r.deleteMappingsForDropLocation(i))}),t(4,`
                                            `),c(5,"fa-icon",86),t(6,`
                                        `),a(),t(7,`
                                    `),a(),t(8,`
                                `)}if(o&2){let e=d().$implicit,n=d();l(),x("ngClass","mapping-number mapping-color-"+n.getMappingIndex(n.getMappingsForDropLocation(e)[0])%8),l(),Y(`
                                        `,n.getMappingIndex(n.getMappingsForDropLocation(e)[0]),`
                                        `),l(3),x("icon",n.faUnlink)}}function Pi(o,m){if(o&1){let e=C();t(0,`
                            `),s(1,"div",82),g("mousedown",function(){let i=p(e).$implicit,r=d();return u(r.dropLocationMouseDown(i))})("cdkDropListDropped",function(i){let r=p(e).$implicit,h=d();return u(h.onDragDrop(r,i))}),t(2,`
                                `),s(3,"div",83),t(4),a(),t(5,`
                                `),s(6,"div",84),t(7,`
                                    `),E(8,Di,6,1)(9,Ii,6,1)(10,Mi,6,1),s(11,"div",85),g("click",function(){let i=p(e).$implicit,r=d();return u(r.deleteDropLocation(i))}),t(12,`
                                        `),c(13,"fa-icon",86),t(14,`
                                    `),a(),t(15,`
                                `),a(),t(16,`
                                `),s(17,"div",87),g("mousedown",function(){let i=p(e).$implicit,r=d();return u(r.resizeMouseDown(i,"top","left"))}),a(),t(18,`
                                `),s(19,"div",88),g("mousedown",function(){let i=p(e).$implicit,r=d();return u(r.resizeMouseDown(i,"top","center"))}),a(),t(20,`
                                `),s(21,"div",89),g("mousedown",function(){let i=p(e).$implicit,r=d();return u(r.resizeMouseDown(i,"top","right"))}),a(),t(22,`
                                `),s(23,"div",90),g("mousedown",function(){let i=p(e).$implicit,r=d();return u(r.resizeMouseDown(i,"middle","left"))}),a(),t(24,`
                                `),s(25,"div",91),g("mousedown",function(){let i=p(e).$implicit,r=d();return u(r.resizeMouseDown(i,"middle","right"))}),a(),t(26,`
                                `),s(27,"div",92),g("mousedown",function(){let i=p(e).$implicit,r=d();return u(r.resizeMouseDown(i,"bottom","left"))}),a(),t(28,`
                                `),s(29,"div",93),g("mousedown",function(){let i=p(e).$implicit,r=d();return u(r.resizeMouseDown(i,"bottom","center"))}),a(),t(30,`
                                `),s(31,"div",94),g("mousedown",function(){let i=p(e).$implicit,r=d();return u(r.resizeMouseDown(i,"bottom","right"))}),a(),t(32,`
                                `),E(33,Vi,9,3),a(),t(34,`
                        `)}if(o&2){let e=m.$implicit,n=d();l(),x("ngClass",n.dropAllowed?"drop-allowed":"")("ngStyle",Ee(10,_i,e.posY/2+"%",e.posX/2+"%",e.width/2+"%",e.height/2+"%")),l(3),_e("",e.width,"x",e.height,""),l(4),w(n.reEvaluationInProgress&&!e.invalid?8:-1),l(),w(n.reEvaluationInProgress?9:-1),l(),w(n.reEvaluationInProgress?-1:10),l(),x("ngClass",n.reEvaluationInProgress?"re-evaluate-button":"delete-button"),l(2),x("icon",n.faTrash),l(20),w(n.getMappingsForDropLocation(e).length?33:-1)}}function Fi(o,m){o&1&&(t(0,`
                `),s(1,"div",79),t(2,`
                    `),c(3,"span",100),t(4,`
                `),a(),t(5,`
            `))}function Li(o,m){o&1&&(t(0,`
                `),s(1,"div",79),t(2,`
                    `),c(3,"span",101),t(4,`
                `),a(),t(5,`
            `))}function zi(o,m){if(o&1&&(t(0,`
                                `),s(1,"div"),t(2,`
                                    `),c(3,"jhi-secured-image",109),t(4,`
                                `),a(),t(5,`
                            `)),o&2){let e=d().$implicit,n=d(2);l(3),x("src",n.filePreviewPaths.get(e.pictureFilePath))}}function Ui(o,m){if(o&1){let e=C();t(0,`
                                `),s(1,"div"),t(2,`
                                    `),s(3,"textarea",110),Q("ngModelChange",function(i){p(e);let r=d().$implicit;return k(r.text,i)||(r.text=i),u(i)}),g("ngModelChange",function(){p(e);let i=d(3);return u(i.questionUpdated.emit())}),a(),t(4,`
                                `),a(),t(5,`
                            `)}if(o&2){let e=d(),n=e.$implicit,i=e.$index;l(3),X("id","drag-item-",i,"-text"),y("ngModel",n.text)}}function Ni(o,m){if(o&1){let e=C();t(0,`
                                `),s(1,"div",111),g("click",function(){p(e);let i=d().$implicit,r=d(2);return u(r.deleteDragItem(i))}),t(2,`
                                    `),c(3,"fa-icon",86),t(4,`
                                `),a(),t(5,`
                            `)}if(o&2){let e=d(3);l(3),x("icon",e.faTrash)}}function Oi(o,m){if(o&1){let e=C();t(0,`
                                        `),s(1,"div",116),g("click",function(){p(e);let i=d(2).$implicit,r=d(2);return u(r.changeToTextDragItem(i))}),t(2,`
                                            `),c(3,"fa-icon",86),t(4,`
                                        `),a(),t(5,`
                                    `)}if(o&2){let e=d(4);l(3),x("icon",e.faFont)}}function ji(o,m){if(o&1){let e=C();t(0,`
                                        `),s(1,"div",95),g("click",function(){p(e);let i=d(2).$implicit;return u(i.invalid=!0)}),t(2,`
                                            `),c(3,"fa-icon",86),t(4,`
                                        `),a(),t(5,`
                                    `)}if(o&2){let e=d(4);l(3),x("icon",e.faBan)}}function Bi(o,m){if(o&1){let e=C();t(0,`
                                `),s(1,"div",112),t(2,`
                                    `),E(3,Oi,6,1),s(4,"div",113),g("click",function(){p(e);let i=L(7);return u(i.click())}),t(5,`
                                        `),s(6,"input",114,5),g("change",function(i){p(e);let r=d().$implicit,h=d(2);return u(h.changeToPictureDragItem(r,i))}),a(),t(8,`
                                        `),c(9,"fa-icon",86),t(10,`
                                    `),a(),t(11,`
                                    `),E(12,ji,6,1),s(13,"div",96),g("click",function(){p(e);let i=d().$implicit,r=d(2);return u(r.resetDragItem(i))}),t(14,`
                                        `),c(15,"fa-icon",86),t(16,`
                                    `),a(),t(17,`
                                    `),s(18,"div",115),g("click",function(){p(e);let i=d().$implicit,r=d(2);return u(r.deleteDragItem(i))}),t(19,`
                                        `),c(20,"fa-icon",86),t(21,`
                                    `),a(),t(22,`
                                `),a(),t(23,`
                            `)}if(o&2){let e=d().$implicit,n=d(2);l(3),w(e.pictureFilePath?3:-1),l(3),x("hidden",!0),l(3),x("icon",n.farFileImage),l(3),w(e.invalid?-1:12),l(3),x("icon",n.faUndo),l(5),x("icon",n.faTrash)}}function Ri(o,m){o&1&&(t(0,`
                                        `),c(1,"span",117),t(2,`
                                    `))}function Wi(o,m){if(o&1&&(t(0,`
                                `),s(1,"div",83),t(2,`
                                    `),E(3,Ri,3,0),a(),t(4,`
                            `)),o&2){let e=d().$implicit;l(3),w(e.invalid?3:-1)}}function Xi(o,m){if(o&1){let e=C();t(0,`
                                    `),s(1,"div",98),t(2),s(3,"div",99),g("click",function(){let i=p(e).$implicit,r=d(3);return u(r.deleteMapping(i))}),t(4,`
                                            `),c(5,"fa-icon",86),t(6,`
                                        `),a(),t(7,`
                                    `),a(),t(8,`
                                `)}if(o&2){let e=m.$implicit,n=d(3);l(),x("ngClass","mapping-number mapping-color-"+n.getMappingIndex(e)%8),l(),Y(`
                                        `,n.getMappingIndex(e),`
                                        `),l(3),x("icon",n.faUnlink)}}function Yi(o,m){}function Hi(o,m){o&1&&E(0,Yi,0,0,"ng-template")}function $i(o,m){if(o&1&&(s(0,"div",118),t(1,`
                                `),E(2,Hi,1,0,null,119),t(3,`
                            `),a()),o&2){d();let e=L(23);l(2),x("ngTemplateOutlet",e)}}function Zi(o,m){o&1&&c(0,"div")}function Gi(o,m){if(o&1&&(t(0,`
                                        `),s(1,"div"),t(2,`
                                            `),c(3,"jhi-secured-image",109),t(4,`
                                        `),a(),t(5,`
                                    `)),o&2){let e=d(2).$implicit,n=d(2);l(3),x("src",n.filePreviewPaths.get(e.pictureFilePath)||"")}}function Ki(o,m){if(o&1){let e=C();t(0,`
                                        `),s(1,"div"),t(2,`
                                            `),s(3,"textarea",122),Q("ngModelChange",function(i){p(e);let r=d(2).$implicit;return k(r.text,i)||(r.text=i),u(i)}),g("ngModelChange",function(){p(e);let i=d(4);return u(i.questionUpdated.emit())}),a(),t(4,`
                                        `),a(),t(5,`
                                    `)}if(o&2){let e=d(2).$implicit;l(3),y("ngModel",e.text)}}function Ji(o,m){if(o&1&&(t(0,`
                                `),s(1,"div",120),t(2,`
                                    `),s(3,"div",121),t(4,`
                                        `),c(5,"fa-icon",86),t(6,`
                                    `),a(),t(7,`
                                    `),E(8,Gi,6,1)(9,Ki,6,1),a(),t(10,`
                            `)),o&2){let e=d().$implicit,n=d(2);l(5),x("icon",n.faBars),l(3),w(e.pictureFilePath?8:-1),l(),w(e.pictureFilePath?-1:9)}}function tn(o,m){if(o&1&&(t(0,`
                        `),s(1,"div",103),t(2,`
                            `),E(3,zi,6,1)(4,Ui,6,3)(5,Ni,6,1)(6,Bi,24,6),s(7,"div",104),t(8,`
                                `),c(9,"fa-icon",105),t(10,`
                            `),a(),t(11,`
                            `),E(12,Wi,5,1),s(13,"div",106),t(14,`
                                `),j(15,Xi,9,3,null,null,O),a(),t(17,`
                            `),E(18,$i,4,1,"div",107),t(19,`
                            `),E(20,Zi,1,0,"div",108),t(21,`
                            `),E(22,Ji,11,3,"ng-template",null,4,ot),t(24,`
                        `),a(),t(25,`
                    `)),o&2){let e=m.$implicit,n=m.$index,i=d(2);l(),X("id","drag-item-",n,""),x("cdkDragDisabled",!1)("cdkDragData",e),l(2),w(e.pictureFilePath?3:-1),l(),w(e.pictureFilePath?-1:4),l(),w(i.reEvaluationInProgress?-1:5),l(),w(i.reEvaluationInProgress?6:-1),l(3),x("icon",i.faBars),l(3),w(i.reEvaluationInProgress?12:-1),l(3),B(i.getMappingsForDragItem(e))}}function en(o,m){if(o&1&&(t(0,`
                `),s(1,"div",102),t(2,`
                    `),j(3,tn,26,10,null,null,O),a(),t(5,`
            `)),o&2){let e=d();l(3),B(e.question.dragItems)}}function nn(o,m){o&1&&(t(0,`
                            `),c(1,"span",129),t(2,`
                        `))}function on(o,m){o&1&&(t(0,`
                            `),c(1,"span",130),t(2,`
                        `))}function rn(o,m){if(o&1){let e=C();t(0,`
            `),s(1,"div",71),t(2,`
                `),s(3,"div",123),t(4,`
                    `),s(5,"button",124),g("click",function(){p(e);let i=L(13);return u(i.click())}),t(6,`
                        `),c(7,"fa-icon",36),t(8,`
                        `),E(9,nn,3,0)(10,on,3,0),a(),t(11,`
                    `),s(12,"input",75,6),g("change",function(i){p(e);let r=d();return u(r.createImageDragItem(i))}),a(),t(14,`
                    `),s(15,"button",125),g("click",function(){p(e);let i=d();return u(i.addTextDragItem())}),t(16,`
                        `),c(17,"fa-icon",36),t(18,`
                        `),c(19,"span",126),t(20,`
                    `),a(),t(21,`
                    `),s(22,"button",127),D(23,"artemisTranslate"),g("click",function(){p(e);let i=d();return u(i.getImagesFromDropLocations())}),t(24,`
                        `),c(25,"fa-icon",36),t(26,`
                        `),c(27,"span",128),t(28,`
                    `),a(),t(29,`
                `),a(),t(30,`
            `),a(),t(31,`
        `)}if(o&2){let e=d();l(7),x("icon",e.faPlus),l(2),w(e.reEvaluationInProgress?9:-1),l(),w(e.reEvaluationInProgress?-1:10),l(2),X("id","dragItemFileInput",e.questionIndex,""),x("hidden",!0),l(5),x("icon",e.faPlus),l(5),x("ngbTooltip",I(23,9,"artemisApp.dragAndDropQuestion.cutImagesFromDropLocationTip")),l(3),x("icon",e.faScissors)}}function sn(o,m){if(o&1){let e=C();t(0,`
            `),c(1,"hr"),t(2,`
            `),s(3,"div",43),t(4,`
                `),s(5,"div",131),D(6,"artemisTranslate"),t(7,`
                    `),s(8,"button",132),g("click",function(){p(e);let i=d();return u(i.togglePreview())}),t(9,`
                        `),c(10,"fa-icon",36),t(11,`
                        `),c(12,"span",133),t(13,`
                    `),a(),t(14,`
                `),a(),t(15,`
            `),a(),t(16,`
        `)}if(o&2){let e=d();l(5),T("ngbTooltip",I(6,4,"artemisApp.dragAndDropQuestion.disabledPreviewTooltip")),x("disableTooltip",!!e.question.backgroundFilePath),l(3),x("disabled",!e.question.backgroundFilePath),l(2),x("icon",e.faEye)}}function an(o,m){if(o&1){let e=C();t(0,`
    `),s(1,"div",134),t(2,`
        `),c(3,"jhi-drag-and-drop-question",135),t(4,`
        `),c(5,"hr"),t(6,`
        `),s(7,"div",136),g("click",function(){p(e);let i=d();return u(i.togglePreview())}),t(8,`
            `),c(9,"fa-icon",36),t(10,`
            `),c(11,"span",137),t(12,`
        `),a(),t(13,`
    `),a(),t(14,`
`)}if(o&2){let e=d();l(3),x("question",e.question)("mappings",we(5,fi))("questionIndex",e.questionIndex)("filePreviewPaths",e.filePreviewPaths),l(6),x("icon",e.faPencilAlt)}}var Jo=(()=>{class o{dragAndDropQuestionUtil=P(se);modalService=P(H);changeDetector=P(ct);fileService=P(Ye);clickLayer;backgroundImage;markdownEditor;question;questionIndex;reEvaluationInProgress;filePool=new Map;questionUpdated=new F;questionDeleted=new F;questionMoveUp=new F;questionMoveDown=new F;addNewFile=new F;removeFile=new F;questionEditorText="";backupQuestion;filePreviewPaths=new Map;dropAllowed=!1;showPreview=!1;CLICK_LAYER_DIMENSION=200;isQuestionCollapsed=!1;draggingState=S.NONE;currentDropLocation;mouse;hintAction=new re;explanationAction=new oe;dragAndDropDomainActions=[this.explanationAction,this.hintAction];faBan=yt;faPlus=De;faTrash=kt;faUndo=Qt;faFont=ke;faEye=Te;faChevronUp=St;faChevronDown=It;faPencilAlt=qe;faBars=qt;faUnlink=Mt;faCopy=Qe;farFileImage=Me;faAngleRight=Tt;faAngleDown=Dt;faUpload=ye;faScissors=Se;MAX_POINTS=zt;ngOnInit(){if(this.backupQuestion=z(this.question),this.currentDropLocation=new rt,this.mouse=new Ht,this.questionEditorText=st(this.question),this.question.importedFiles){this.setBackgroundFile({target:{files:[new File([this.question.importedFiles.get("diagram-background.png")],"diagram-background.png")]}});for(let e of this.question.dragItems??[])e.pictureFilePath&&this.question.importedFiles.has(e.pictureFilePath)&&this.changeToPictureDragItem(e,{target:{files:[new File([this.question.importedFiles.get(e.pictureFilePath)],e.pictureFilePath)]}})}}ngOnChanges(e){e.question&&e.question.previousValue&&this.questionUpdated.emit(),e.question&&e.question.currentValue&&(this.backupQuestion=z(this.question)),!(!this.filePool||this.filePool.size==0)&&this.filePool.forEach((n,i)=>{n.path&&!this.filePreviewPaths.has(i)&&this.filePreviewPaths.set(i,n.path)})}ngAfterViewInit(){if(this.question.backgroundFilePath&&!this.filePreviewPaths.has(this.question.backgroundFilePath)&&(this.filePreviewPaths.set(this.question.backgroundFilePath,this.question.backgroundFilePath),setTimeout(()=>{this.changeDetector.markForCheck(),this.changeDetector.detectChanges()},0)),this.question.dragItems)for(let e in this.question.dragItems){let n=this.question.dragItems[e].pictureFilePath;n&&!this.filePreviewPaths.has(n)&&this.filePreviewPaths.set(n,n)}this.backgroundImage.endLoadingProcess.pipe(ue(e=>e==="success"),me(300)).subscribe(()=>this.adjustClickLayerWidth()),this.makeFileMapPreview(),window.onresize=()=>this.adjustClickLayerWidth()}adjustClickLayerWidth(){this.backgroundImage.element.nativeElement.style.visibility="visible",this.clickLayer.nativeElement.style.width=`${this.backgroundImage.element.nativeElement.offsetWidth}px`,this.clickLayer.nativeElement.style.left=`${this.backgroundImage.element.nativeElement.offsetLeft}px`}open(e){this.modalService.open(e,{size:"lg"})}drag(){this.dropAllowed=!0}drop(){this.dropAllowed=!1}makeFileMapPreview(){this.filePool&&(this.filePool.forEach((e,n)=>{this.filePreviewPaths.set(n,URL.createObjectURL(e.file))}),this.changeDetector.detectChanges())}setBackgroundFile(e){let n=e.target.files;if(n.length){let i=n[0];this.setBackgroundFileFromFile(i)}}setBackgroundFileFromFile(e){this.question.backgroundFilePath&&this.removeFile.emit(this.question.backgroundFilePath);let n=this.fileService.getUniqueFileName(this.fileService.getExtension(e.name),this.filePool);this.question.backgroundFilePath=n,this.filePreviewPaths.set(n,URL.createObjectURL(e)),this.addNewFile.emit({fileName:n,file:e}),this.changeDetector.detectChanges()}mouseMove(e){let n=this.clickLayer.nativeElement,i=n.getBoundingClientRect().x+window.scrollX,r=n.getBoundingClientRect().y+window.scrollY,h=n.offsetWidth,_=n.offsetHeight;this.mouseMoveAction(e,i,r,h,_)}mouseMoveAction(e,n,i,r,h){if(e.pageX?(this.mouse.x=e.pageX-n,this.mouse.y=e.pageY-i):e.clientX&&(this.mouse.x=e.clientX-n,this.mouse.y=e.clientY-i),this.mouse.x=Math.min(Math.max(0,this.mouse.x),r),this.mouse.y=Math.min(Math.max(0,this.mouse.y),h),this.draggingState!==S.NONE)switch(this.draggingState){case S.CREATE:case S.RESIZE_BOTH:this.currentDropLocation.posX=V(q*Math.min(this.mouse.x,this.mouse.startX)/r),this.currentDropLocation.posY=V(q*Math.min(this.mouse.y,this.mouse.startY)/h),this.currentDropLocation.width=V(q*Math.abs(this.mouse.x-this.mouse.startX)/r),this.currentDropLocation.height=V(q*Math.abs(this.mouse.y-this.mouse.startY)/h);break;case S.MOVE:this.currentDropLocation.posX=V(Math.min(Math.max(0,q*(this.mouse.x+this.mouse.offsetX)/r),q-this.currentDropLocation.width)),this.currentDropLocation.posY=V(Math.min(Math.max(0,q*(this.mouse.y+this.mouse.offsetY)/h),q-this.currentDropLocation.height));break;case S.RESIZE_X:this.currentDropLocation.posX=V(q*Math.min(this.mouse.x,this.mouse.startX)/r),this.currentDropLocation.width=V(q*Math.abs(this.mouse.x-this.mouse.startX)/r);break;case S.RESIZE_Y:this.currentDropLocation.posY=V(q*Math.min(this.mouse.y,this.mouse.startY)/h),this.currentDropLocation.height=V(q*Math.abs(this.mouse.y-this.mouse.startY)/h);break}}mouseUp(){if(this.draggingState!==S.NONE)switch(this.draggingState){case S.CREATE:let e=this.clickLayer.nativeElement,n=e.offsetWidth,i=e.offsetHeight;this.currentDropLocation.width/q*n<14&&this.currentDropLocation.height/q*i<14?this.deleteDropLocation(this.currentDropLocation):this.questionUpdated.emit();break;case S.MOVE:case S.RESIZE_BOTH:case S.RESIZE_X:case S.RESIZE_Y:this.questionUpdated.emit();break}this.draggingState=S.NONE,this.currentDropLocation=void 0}backgroundMouseDown(){this.question.backgroundFilePath&&this.draggingState===S.NONE&&(this.mouse.startX=this.mouse.x,this.mouse.startY=this.mouse.y,this.currentDropLocation=new rt,this.currentDropLocation.posX=this.mouse.x,this.currentDropLocation.posY=this.mouse.y,this.currentDropLocation.width=0,this.currentDropLocation.height=0,this.question.dropLocations||(this.question.dropLocations=[]),this.question.dropLocations.push(this.currentDropLocation),this.draggingState=S.CREATE)}dropLocationMouseDown(e){if(this.draggingState===S.NONE){let n=this.clickLayer.nativeElement,i=n.offsetWidth,r=n.offsetHeight,h=e.posX/q*i,_=e.posY/q*r;this.mouse.offsetX=h-this.mouse.x,this.mouse.offsetY=_-this.mouse.y,this.currentDropLocation=e,this.draggingState=S.MOVE}}deleteDropLocation(e){this.question.dropLocations=this.question.dropLocations.filter(n=>n!==e),this.deleteMappingsForDropLocation(e)}duplicateDropLocation(e){let n=new rt;n.posX=e.posX+e.width<197?e.posX+3:Math.max(0,e.posX-3),n.posY=e.posY+e.height<197?e.posY+3:Math.max(0,e.posY-3),n.width=e.width,n.height=e.height,this.question.dropLocations.push(n)}resizeMouseDown(e,n,i){if(this.draggingState===S.NONE){let r=this.clickLayer.nativeElement,h=r.offsetWidth,_=r.offsetHeight;switch(this.draggingState=S.RESIZE_BOTH,this.currentDropLocation=e,n){case"top":this.mouse.startY=(e.posY+e.height)/q*_;break;case"middle":this.draggingState=S.RESIZE_X;break;case"bottom":this.mouse.startY=e.posY/q*_;break}switch(i){case"left":this.mouse.startX=(e.posX+e.width)/q*h;break;case"center":this.draggingState=S.RESIZE_Y;break;case"right":this.mouse.startX=e.posX/q*h;break}}}addTextDragItem(){this.question.dragItems||(this.question.dragItems=[]);let e=new et;e.text="Text",this.question.dragItems.push(e),this.questionUpdated.emit()}createImageDragItem(e){let n=this.getFileFromEvent(e);if(n)return this.createImageDragItemFromFile(n)}createImageDragItemFromFile(e){let n=this.fileService.getUniqueFileName(this.fileService.getExtension(e.name),this.filePool);this.addNewFile.emit({fileName:n,file:e}),this.filePreviewPaths.set(n,URL.createObjectURL(e));let i=new et;return i.pictureFilePath=n,this.question.dragItems||(this.question.dragItems=[]),this.question.dragItems.push(i),this.questionUpdated.emit(),i}deleteDragItem(e){this.question.dragItems=this.question.dragItems.filter(n=>n!==e),e.pictureFilePath&&(this.removeFile.emit(e.pictureFilePath),this.filePreviewPaths.delete(e.pictureFilePath)),this.deleteMappingsForDragItem(e)}onDragDrop(e,n){let i=n.item.data,r=this.question.dragItems.find(h=>i.id?h.id===i.id:h.tempID===i.tempID);if(r&&(this.question.correctMappings||(this.question.correctMappings=[]),!this.question.correctMappings.some(h=>this.dragAndDropQuestionUtil.isSameEntityWithTempId(h.dropLocation,e)&&this.dragAndDropQuestionUtil.isSameEntityWithTempId(h.dragItem,r)))){let h=new N(r,e);this.question.correctMappings.push(h),this.questionUpdated.emit()}}getMappingIndex(e){let n=[];return this.question.correctMappings.some(i=>(n.some(r=>this.dragAndDropQuestionUtil.isSameEntityWithTempId(r,i.dropLocation))||n.push(i.dropLocation),this.dragAndDropQuestionUtil.isSameEntityWithTempId(i.dropLocation,e.dropLocation)))?n.length:0}getMappingsForDropLocation(e){return this.question.correctMappings||(this.question.correctMappings=[]),this.question.correctMappings.filter(n=>this.dragAndDropQuestionUtil.isSameEntityWithTempId(n.dropLocation,e))}getMappingsForDragItem(e){return this.question.correctMappings||(this.question.correctMappings=[]),this.question.correctMappings.filter(n=>this.dragAndDropQuestionUtil.isSameEntityWithTempId(n.dragItem,e)).sort((n,i)=>this.getMappingIndex(n)-this.getMappingIndex(i))}deleteMappingsForDropLocation(e){this.question.correctMappings||(this.question.correctMappings=[]),this.question.correctMappings=this.question.correctMappings.filter(n=>!this.dragAndDropQuestionUtil.isSameEntityWithTempId(n.dropLocation,e)),this.questionUpdated.emit()}deleteMappingsForDragItem(e){this.question.correctMappings||(this.question.correctMappings=[]),this.question.correctMappings=this.question.correctMappings.filter(n=>!this.dragAndDropQuestionUtil.isSameEntityWithTempId(n.dragItem,e)),this.questionUpdated.emit()}deleteMapping(e){this.question.correctMappings||(this.question.correctMappings=[]),this.question.correctMappings=this.question.correctMappings.filter(n=>n!==e),this.questionUpdated.emit()}moveUpQuestion(){this.questionMoveUp.emit()}moveDownQuestion(){this.questionMoveDown.emit()}deleteQuestion(){this.filePreviewPaths.forEach((e,n)=>this.removeFile.emit(n)),this.questionDeleted.emit()}changeToTextDragItem(e){this.removeFile.emit(e.pictureFilePath),this.filePreviewPaths.delete(e.pictureFilePath),e.pictureFilePath=void 0,e.text="Text",this.questionUpdated.emit()}changeToPictureDragItem(e,n){let i=this.getFileFromEvent(n);if(!i)return;let r=this.fileService.getUniqueFileName(this.fileService.getExtension(i.name),this.filePool);this.addNewFile.emit({fileName:r,file:i}),this.filePreviewPaths.set(r,URL.createObjectURL(i)),e.text=void 0,e.pictureFilePath=r,this.questionUpdated.emit()}getFileFromEvent(e){let n=e.target.files;if(n.length)return n[0]}resetQuestionTitle(){this.question.title=this.backupQuestion.title}resetQuestionText(){this.question.text=this.backupQuestion.text,this.question.explanation=this.backupQuestion.explanation,this.question.hint=this.backupQuestion.hint,this.questionEditorText=st(this.question)}resetQuestion(){this.question.title=this.backupQuestion.title,this.question.invalid=this.backupQuestion.invalid,this.question.randomizeOrder=this.backupQuestion.randomizeOrder,this.question.scoringType=this.backupQuestion.scoringType,this.resetBackground(),this.question.dropLocations=z(this.backupQuestion.dropLocations),this.question.dragItems=z(this.backupQuestion.dragItems),this.question.correctMappings=z(this.backupQuestion.correctMappings),this.resetQuestionText()}resetBackground(){this.removeFile.emit(this.question.backgroundFilePath),this.question.backgroundFilePath=this.backupQuestion.backgroundFilePath}resetDropLocation(e){let n=this.backupQuestion.dropLocations.find(r=>r.id===e.id),i=this.question.dropLocations.indexOf(e);this.question.dropLocations.splice(i,1),this.question.dropLocations.splice(i,0,n)}resetDragItem(e){let n=this.backupQuestion.dragItems.find(r=>r.id===e.id),i=this.question.dragItems.indexOf(e);this.question.dragItems.splice(i,1),this.question.dragItems.splice(i,0,n),e.pictureFilePath&&(this.removeFile.emit(e.pictureFilePath),this.filePreviewPaths.delete(e.pictureFilePath))}togglePreview(){this.showPreview=!this.showPreview,this.prepareForSave()}changesInMarkdown(e){this.questionEditorText=e,this.prepareForSave(),this.questionUpdated.emit(),this.changeDetector.detectChanges()}domainActionsFound(e){this.cleanupQuestion();for(let{text:n,action:i}of e)i===void 0&&n.length>0&&(this.question.text=n),i instanceof oe?this.question.explanation=n:i instanceof re&&(this.question.hint=n)}cleanupQuestion(){this.question.text=void 0,this.question.explanation=void 0,this.question.hint=void 0}prepareForSave(){this.cleanupQuestion(),this.markdownEditor.parseMarkdown()}getImagesFromDropLocations(){for(let e of this.question.dropLocations)if(this.getMappingsForDropLocation(e).length==0){let n=new Image,i="",r,h;n.onload=()=>{h=n.height,r=n.width;let _=document.createElement("canvas"),v=_.getContext("2d");if(v){let f=h/this.CLICK_LAYER_DIMENSION,b=r/this.CLICK_LAYER_DIMENSION;_.width=e.width*b,_.height=e.height*f,v.drawImage(n,e.posX*b,e.posY*f,e.width*b,e.height*f,0,0,e.width*b,e.height*f),i=_.toDataURL("image/png");let A=this.createImageDragItemFromFile(this.dataUrlToFile(i,"placeholder"+e.posX)),M=new N(A,e);this.question.correctMappings.push(M)}},n.src=this.backgroundImage.src}this.blankOutBackgroundImage()}blankOutBackgroundImage(){let e=document.createElement("canvas"),n=e.getContext("2d"),i=new Image,r,h;i.onload=()=>{if(h=i.height,r=i.width,e.width=r,e.height=h,n){let _=h/this.CLICK_LAYER_DIMENSION,v=r/this.CLICK_LAYER_DIMENSION;n.drawImage(i,0,0),n.fillStyle="white";for(let b of this.question.dropLocations)n.fillRect(b.posX*v,b.posY*_,b.width*v,b.height*_);let f=e.toDataURL("image/png");this.setBackgroundFileFromFile(this.dataUrlToFile(f,"background"))}},i.src=this.backgroundImage.src}dataUrlToBlob(e){let n=window.atob(e.split(",")[1]),i=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(n.length),h=new Uint8Array(r);for(let _=0;_<n.length;_++)h[_]=n.charCodeAt(_);return new Blob([r],{type:i})}dataUrlToFile(e,n){let i=this.dataUrlToBlob(e);return new File([i],n,{type:i.type})}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=R({type:o,selectors:[["jhi-drag-and-drop-question-edit"]],viewQuery:function(n,i){if(n&1&&(K(mi,5),K(xi,5),K(gi,5)),n&2){let r;J(r=tt())&&(i.clickLayer=r.first),J(r=tt())&&(i.backgroundImage=r.first),J(r=tt())&&(i.markdownEditor=r.first)}},inputs:{question:"question",questionIndex:"questionIndex",reEvaluationInProgress:"reEvaluationInProgress",filePool:"filePool"},outputs:{questionUpdated:"questionUpdated",questionDeleted:"questionDeleted",questionMoveUp:"questionMoveUp",questionMoveDown:"questionMoveDown",addNewFile:"addNewFile",removeFile:"removeFile"},features:[fe([se]),dt],decls:49,vars:25,consts:[["backgroundImage",""],["clickLayer",""],["markdownEditor",""],["backgroundFileInput",""],["preview",""],["reevalChangeToImageInput",""],["dragItemFileInput",""],[1,"edit-dnd-question",3,"mousemove","mouseup","hidden"],[1,"card-body","question-card-body",3,"ngbCollapse","id"],[1,"markupEditorArea"],["cdkDropListGroup",""],[1,"row"],[1,"background-area"],[2,"visibility","hidden",3,"src","alt"],[1,"click-layer",3,"mousedown","ngClass"],[1,"question-options","card-header","question-card-header"],[1,"btn","question-collapse",3,"click"],["size","3x",3,"icon"],[1,"form-group","question-title"],["id","drag-and-drop-question-title",1,"form-control",3,"ngModelChange","ngModel","placeholder"],[1,"question-card-header-inputs"],[1,"form-group","question-score"],["jhiTranslate","artemisApp.quizQuestion.score",1,"colon-suffix"],["title","score","type","number","min","0",1,"form-control",3,"ngModelChange","max","ngModel"],[1,"question-type"],[1,"mb-0"],[1,"badge","bg-warning","align-text-top"],[1,"question-options","card-header","question-card-header-reevaluation"],[1,"col-3","col-lg-1","mt-1"],[1,"col-9","col-lg-8","text-start","mt-3"],[1,"input-group","row"],[1,"col-10","col-lg-11"],[1,"form-control",2,"width","100%",3,"ngModelChange","ngModel","placeholder"],[1,"col-2","col-lg-1"],[1,"input-group-btn"],["type","button",1,"btn","btn-outline-secondary",3,"click","ngbTooltip"],[3,"icon"],[1,"col-3","col-lg-1","mt-lg-3"],[1,"badge","bg-warning","align-text-top",2,"width","60px"],[1,"col-9","col-lg-2","text-end","mt-lg-3"],["id","move-up-button","type","button",1,"btn","btn-outline-secondary",3,"click","ngbTooltip"],["id","move-down-button","type","button",1,"btn","btn-outline-secondary",3,"click","ngbTooltip"],["id","reset-button","type","button",1,"btn","btn-outline-secondary",3,"click","ngbTooltip"],[1,"question-options"],[1,"form-group"],["jhiTranslate","artemisApp.quizQuestion.scoringType",1,"colon-suffix","no-flex-shrink"],["title","scoring type",1,"form-select",3,"ngModelChange","ngModel"],["value","ALL_OR_NOTHING","jhiTranslate","artemisApp.quizExercise.scoringType.all_or_nothing"],["value","PROPORTIONAL_WITH_PENALTY","jhiTranslate","artemisApp.quizExercise.scoringType.proportional_with_penalty"],["value","PROPORTIONAL_WITHOUT_PENALTY","jhiTranslate","artemisApp.quizExercise.scoringType.proportional_without_penalty"],[1,"form-check","custom-control","custom-checkbox"],["type","checkbox",1,"form-check-input","custom-control-input",3,"ngModelChange","id","ngModel"],["jhiTranslate","artemisApp.dragAndDropQuestion.randomizeOrder",1,"form-check-label","custom-control-label",3,"for"],[1,"delete-button",3,"click"],["size","2x",3,"icon"],[1,"row","align-items-center",2,"width","100%"],[1,"col-12","col-lg-4"],[1,"col-12","col-lg-2"],["title","score","type","number","disabled","",1,"form-control","point-input",2,"width","100%",3,"value"],[1,"col-12","col-lg-3"],[1,"col-12","col-lg-3","row","justify-content-lg-end","align-items-start"],[1,"col-8","form-group"],["jhiTranslate","artemisApp.quizExercise.re-evaluate.setQuestionInvalid",1,"btn","btn-outline-secondary","invalid-button",3,"click","hidden"],["jhiTranslate","artemisApp.quizExercise.re-evaluate.questionIsInvalid",1,"btn","btn-outline-secondary","invalid-button",3,"hidden","disabled"],[1,"col-2"],["id","delete-button",1,"delete-button",3,"click"],[1,"question-content"],[1,"h-auto",3,"markdownChange","textWithDomainActionsFound","markdown","showPreviewButton","domainActions"],[1,"question-content","row"],[1,"h-auto",3,"markdownChange","textWithDomainActionsFound","markdown","showPreviewButton","domainActions","enableFileUpload"],[1,"input-group-btn",2,"vertical-align","top"],[1,"question-options","row","d-flex","justify-content-start"],[1,"input-group","col-lg-7","col-md-8","col-sm-8","col-xs-10","drag-item-file"],[1,"input-group-prepend"],["id","background-file-input-button",1,"btn","btn-outline-secondary",3,"click"],["type","file","accept","image/*",3,"change","id","hidden"],["jhiTranslate","artemisApp.dragAndDropQuestion.selectBackgroundPicture",1,"no-flex-shrink"],["jhiTranslate","artemisApp.dragAndDropQuestion.changeBackgroundPicture",1,"no-flex-shrink"],["type","button",1,"btn","btn-outline-secondary","btn-lg",3,"click"],[1,"dnd-instructions"],["jhiTranslate","artemisApp.dragAndDropQuestion.uploadBackgroundInstructions"],["jhiTranslate","artemisApp.dragAndDropQuestion.drawOnBackgroundInstructions"],["id","drop-location","cdkDropList","",1,"drop-location",3,"mousedown","cdkDropListDropped","ngClass","ngStyle"],[1,"dimensions"],[1,"drop-location-buttons"],["title","Delete",3,"click","ngClass"],["size","lg",3,"icon"],[1,"resize","top","left",3,"mousedown"],[1,"resize","top","center",3,"mousedown"],[1,"resize","top","right",3,"mousedown"],[1,"resize","middle","left",3,"mousedown"],[1,"resize","middle","right",3,"mousedown"],[1,"resize","bottom","left",3,"mousedown"],[1,"resize","bottom","center",3,"mousedown"],[1,"resize","bottom","right",3,"mousedown"],["title","Set invalid",1,"re-evaluate-button",3,"click"],["title","Reset",1,"re-evaluate-button",3,"click"],["title","Duplicate",1,"duplicate-button",3,"click"],[3,"ngClass"],[1,"unlink-mapping",3,"click"],["jhiTranslate","artemisApp.dragAndDropQuestion.addDragItemsInstructions"],["jhiTranslate","artemisApp.dragAndDropQuestion.addMappingsInstructions"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"drag-items"],["cdkDrag","",1,"drag-item",3,"id","cdkDragDisabled","cdkDragData"],["title","Move",1,"drag-handle","drag-handle-wrapper"],["size","lg",1,"drag-handle",3,"icon"],[1,"mapping-numbers-wrapper"],["class","placeholder-dnd","matchSize","",4,"cdkDragPreview"],[4,"cdkDragPlaceholder"],[3,"src"],[3,"ngModelChange","id","ngModel"],["title","Delete",1,"delete-button",3,"click"],[1,"delete-button"],["title","Change to Picture Drag Item",1,"re-evaluate-button",3,"click"],["type","file","accept","image/*",3,"change","hidden"],["title","Delete",1,"re-evaluate-button",3,"click"],["title","Change to Text Drag Item",1,"re-evaluate-button",3,"click"],["jhiTranslate","artemisApp.quizQuestion.invalid",2,"color","red"],["matchSize","",1,"placeholder-dnd"],[4,"ngTemplateOutlet"],[2,"border","1px solid","background","#fafafa","padding","4px 2px 2px 2px"],["title","Move"],["disabled","",3,"ngModelChange","ngModel"],[1,"col-lg-7","col-md-8","col-sm-8","col-xs-10","drag-item-file"],[1,"btn","btn-outline-secondary","me-2",3,"click"],["id","add-text-drag-item",1,"btn","btn-outline-secondary","me-2",3,"click"],["jhiTranslate","artemisApp.dragAndDropQuestion.addDragItemText"],["id","crop-drag-item",1,"btn","btn-outline-secondary",3,"click","ngbTooltip"],["jhiTranslate","artemisApp.dragAndDropQuestion.cutImagesFromDropLocation"],["jhiTranslate","artemisApp.dragAndDropQuestion.changeDragItemPicture"],["jhiTranslate","artemisApp.dragAndDropQuestion.addDragItemPicture"],[3,"ngbTooltip","disableTooltip"],[1,"btn","btn-outline-secondary",3,"click","disabled"],["jhiTranslate","entity.action.preview"],[1,"preview-dnd-question"],[3,"question","mappings","questionIndex","filePreviewPaths"],[1,"btn","btn-outline-secondary",3,"click"],["jhiTranslate","entity.action.edit"]],template:function(n,i){if(n&1){let r=C();s(0,"div",7),g("mousemove",function(_){return p(r),u(i.mouseMove(_))})("mouseup",function(){return p(r),u(i.mouseUp())}),t(1,`
    `),E(2,wi,32,9)(3,Ci,71,26),s(4,"div",8),t(5,`
        `),E(6,Ei,38,5)(7,vi,64,9),s(8,"div",9),t(9,`
            `),E(10,bi,7,3)(11,Ai,26,8),a(),t(12,`
        `),c(13,"hr"),t(14,`
        `),t(15,`
        `),E(16,yi,21,7)(17,ki,6,0)(18,Qi,6,0),s(19,"div",10),t(20,`
            `),s(21,"div",11),t(22,`
                `),s(23,"div",12),t(24,`
                    `),c(25,"jhi-secured-image",13,0),D(27,"artemisTranslate"),t(28,`
                    `),s(29,"div",14,1),g("mousedown",function(){return p(r),u(i.backgroundMouseDown())}),t(31,`
                        `),j(32,Pi,35,15,null,null,O),a(),t(34,`
                `),a(),t(35,`
            `),a(),t(36,`
            `),c(37,"hr"),t(38,`
            `),E(39,Fi,6,0)(40,Li,6,0)(41,en,6,0),a(),t(42,`
        `),t(43,`
        `),E(44,rn,32,11)(45,sn,17,6),a(),t(46,`
`),a(),t(47,`
`),E(48,an,15,6)}n&2&&(x("hidden",i.showPreview),l(2),w(i.reEvaluationInProgress?-1:2),l(),w(i.reEvaluationInProgress?3:-1),l(),X("id","collapseQuestion",i.questionIndex,""),x("ngbCollapse",i.isQuestionCollapsed),l(2),w(i.reEvaluationInProgress?-1:6),l(),w(i.reEvaluationInProgress?7:-1),l(3),w(i.reEvaluationInProgress?11:10),l(6),w(i.reEvaluationInProgress?-1:16),l(),w(i.question.backgroundFilePath?-1:17),l(),w(i.question.backgroundFilePath&&!i.reEvaluationInProgress?18:-1),l(7),x("src",i.filePreviewPaths.get(i.question.backgroundFilePath)||"")("alt",I(27,21,"artemisApp.dragAndDropQuestion.noBackgroundPicture")),l(4),x("ngClass",Ce(23,hi,!i.question.backgroundFilePath)),l(3),B(i.question.dropLocations),l(7),w(!i.question.dragItems||!i.question.dragItems.length?39:-1),l(),w(i.question.dragItems&&i.question.dragItems.length?40:-1),l(),w(i.question.dragItems&&i.question.dragItems.length?41:-1),l(3),w(i.reEvaluationInProgress?-1:44),l(),w(i.reEvaluationInProgress?-1:45),l(3),w(!i.reEvaluationInProgress&&i.showPreview?48:-1))},dependencies:[$,vt,ft,wt,mt,ht,ut,_t,xt,Et,Ct,gt,Z,At,bt,Zt,Rt,Nt,Ie,pt,Ot,ve,Ut,jt,be,Bt,Ge,Vt],styles:[`.edit-dnd-question .drag-items{background:#fff!important}.edit-dnd-question .drag-items .drag-item img{max-height:100%;max-width:100%;height:auto;width:auto!important;margin:auto;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%}.edit-dnd-question .resize{position:absolute;width:6px;height:6px;background:#9370db}.edit-dnd-question .resize.top{top:-3px}.edit-dnd-question .resize.middle{top:calc(50% - 3px);cursor:col-resize}.edit-dnd-question .resize.bottom{bottom:-3px}.edit-dnd-question .resize.left{left:-3px}.edit-dnd-question .resize.center{left:calc(50% - 3px);cursor:row-resize}.edit-dnd-question .resize.right{right:-3px}.edit-dnd-question .resize.top.left,.edit-dnd-question .resize.bottom.right{cursor:nwse-resize}.edit-dnd-question .resize.top.right,.edit-dnd-question .resize.bottom.left{cursor:nesw-resize}.edit-dnd-question .dimensions,.edit-dnd-question .invalid{position:absolute;left:2px;bottom:0;font-size:14px}.edit-dnd-question .drag-item-file{display:flex;margin-bottom:.5rem;margin-top:.5rem}.edit-dnd-question .background-area{position:relative;margin:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.edit-dnd-question .background-area img{max-width:100%}.edit-dnd-question .background-area .click-layer{cursor:crosshair!important;position:absolute;inset:0;z-index:1;width:100%;height:100%}.edit-dnd-question .background-area .click-layer .drop-location{align-items:center;border:1px dashed mediumpurple;cursor:move;display:flex;flex-direction:row;justify-content:center;position:absolute;background:var(--edit-quiz-q-dnd-drop-location-background);color:var(--edit-quiz-q-dnd-drop-location-color)}.edit-dnd-question .background-area .click-layer .drop-location:hover{background:var(--edit-quiz-q-dnd-drop-location-hover-bg)}.edit-dnd-question .background-area .click-layer.disabled{cursor:not-allowed!important}.edit-dnd-question .drop-location-buttons{position:absolute;top:1%;right:1%}.edit-dnd-question .placeholder-dnd{max-height:160px;max-width:160px}.edit-dnd-question .placeholder-dnd img{max-height:100%;max-width:100%;height:100%;width:100%}.edit-dnd-question .question-card-header{width:100%;padding:15px 5px 5px}.edit-dnd-question .question-card-header .row{width:100%}.edit-dnd-question .question-card-header .question-collapse{width:3.25rem}.edit-dnd-question .question-card-header-reevaluation{width:100%;padding:0}.edit-dnd-question .question-card-header-reevaluation .row{width:100%}.edit-dnd-question .question-card-header-reevaluation .question-collapse{width:3.25rem}.edit-dnd-question .card-body .form-group{display:flex;align-items:center;margin:0 5px 15px}.edit-dnd-question .card-body .form-control:disabled{background-color:var(--gray-200)}.edit-dnd-question .card-body .form-group>*{margin:0 4px}.edit-dnd-question .card-body .invalid-button{width:100%;text-overflow:ellipsis;overflow:hidden}.edit-dnd-question .card-body .delete-button{cursor:pointer}.edit-dnd-question .card-body .delete-button:hover{color:var(--red)}
`,`.edit-dnd-question .dnd-instructions,.edit-sa-question .dnd-instructions{display:flex;justify-content:space-between;margin:10px 0;font-weight:500}.edit-dnd-question .drag-items,.edit-sa-question .drag-items{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;margin:6px 0;width:100%;background:var(--quiz-drag-items-background)!important}.edit-dnd-question .drag-items .drag-item,.edit-sa-question .drag-items .drag-item{border:1px solid var(--quiz-drag-item-border);background:var(--quiz-drag-item-background);color:var(--quiz-drag-item-color);height:160px;position:relative;min-width:160px;max-width:360px;margin:10px 4px}.edit-dnd-question .drag-items .drag-item textarea,.edit-sa-question .drag-items .drag-item textarea{position:absolute;left:0;top:30px;width:158px;height:98px;padding:0 14px;text-align:center;border:none;resize:none;background:var(--quiz-drag-item-background);color:var(--quiz-drag-item-color)}.edit-dnd-question .drag-items .drag-item textarea:focus,.edit-sa-question .drag-items .drag-item textarea:focus{z-index:3}.edit-dnd-question .drag-items .drag-item .delete-button,.edit-sa-question .drag-items .drag-item .delete-button{position:absolute;top:4px;right:2px}.edit-dnd-question .drag-items .drag-item .delete-button .re-evaluate-button,.edit-sa-question .drag-items .drag-item .delete-button .re-evaluate-button{display:inline-block;padding:2px}.edit-dnd-question .drag-items .drag-item .dimensions,.edit-sa-question .drag-items .drag-item .dimensions{position:absolute;left:2px;bottom:0;font-size:14px}.edit-dnd-question .drag-items .drag-item .drag-handle-wrapper,.edit-sa-question .drag-items .drag-item .drag-handle-wrapper{position:absolute;top:4px;left:2px;cursor:pointer;display:flex;align-items:center;padding:4px}.edit-dnd-question .re-evaluate-button,.edit-sa-question .re-evaluate-button{display:inline-block;padding:4px}.edit-dnd-question .re-evaluate-button:hover,.edit-sa-question .re-evaluate-button:hover{color:#00f}.edit-dnd-question .markupEditorArea,.edit-sa-question .markupEditorArea{margin-bottom:14px}.edit-dnd-question .markupEditorArea .markdown-editor,.edit-sa-question .markupEditorArea .markdown-editor{border:1px solid var(--border-color)}.edit-dnd-question .mapping-numbers-wrapper,.edit-sa-question .mapping-numbers-wrapper{position:absolute;display:flex;justify-content:space-evenly;align-items:center;bottom:0;left:0;right:0;-webkit-transform:translate3d(0,8px,0);-moz-transform:translate3d(0,8px,0);-ms-transform:translate3d(0,8px,0);-o-transform:translate3d(0,8px,0);transform:translate3d(0,8px,0)}.edit-dnd-question .mapping-numbers-wrapper .mapping-number,.edit-sa-question .mapping-numbers-wrapper .mapping-number{position:static;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translateZ(0)}.edit-dnd-question .mapping-number,.edit-sa-question .mapping-number{position:absolute;z-index:2;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);-moz-transform:translate3d(-50%,-50%,0);-ms-transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);width:30px;height:30px;line-height:30px;background-color:#696969;color:var(--quiz-mapping-letter-number-mixin-color);border-radius:50%;text-align:center}.edit-dnd-question .mapping-number .unlink-mapping,.edit-sa-question .mapping-number .unlink-mapping{position:absolute;left:0;top:0;width:100%;height:100%;line-height:30px;color:#fff;background-color:#00000080;cursor:pointer;border-radius:50%;text-align:center;opacity:0}.edit-dnd-question .mapping-number .unlink-mapping:hover,.edit-sa-question .mapping-number .unlink-mapping:hover{opacity:1}.edit-dnd-question .mapping-color-1,.edit-sa-question .mapping-color-1{background:#2980b9}.edit-dnd-question .mapping-color-2,.edit-sa-question .mapping-color-2{background:#c0392b}.edit-dnd-question .mapping-color-3,.edit-sa-question .mapping-color-3{background:#27ae60}.edit-dnd-question .mapping-color-4,.edit-sa-question .mapping-color-4{background:#f1c40f}.edit-dnd-question .mapping-color-5,.edit-sa-question .mapping-color-5{background:#e67e22}.edit-dnd-question .mapping-color-6,.edit-sa-question .mapping-color-6{background:#8e44ad}.edit-dnd-question .mapping-color-7,.edit-sa-question .mapping-color-7{background:#1abc9c}.edit-dnd-question .mapping-color-0,.edit-sa-question .mapping-color-0{background:#2c3e50}.cdk-drag-preview img{max-height:158px;max-width:160px}.cdk-drag-preview textarea{text-align:center;border:none;resize:none}.cdk-drop-list-receiving{background:#add8e6cc!important}.cdk-drop-list-dragging{background:#90ee90!important;cursor:pointer!important}.cdk-drag{cursor:pointer}
`,`.question-options{display:flex;align-items:center;justify-content:space-between;width:100%}.question-options input,.question-options .input-group-btn{display:inline-block;width:1rem}.question-options .datepicker-input{max-width:140px}.question-options .checkbox{display:inline-block}.question-options .input-group>input{height:100%}.question-options .form-group{display:flex;align-items:center;margin:0 5px 15px}.question-options .form-group>*{margin:0 4px}.question-options .background-file{display:flex}.edit-quiz-footer-content{height:100%;display:flex;align-items:center;justify-content:space-between}.edit-quiz-footer-content .form-control,.edit-quiz-footer-content .input-group-btn{width:auto}.edit-quiz-footer-content .form-group{display:flex;align-items:center}.edit-quiz-footer-content .form-group>*{margin:0 4px}.edit-quiz-footer-content .invalid-reasons-tooltip .tooltip-inner{text-align:left;max-width:300px}.edit-quiz-footer-content .invalid-reasons-tooltip .tooltip-inner p{margin:4px 0;padding:4px}.edit-quiz-footer-content #remaining-time{text-align:center;width:100%}.edit-quiz-footer-content #remaining-time>div{text-align:center;width:100%}.edit-quiz-footer-content #remaining-time-value{font-weight:700;white-space:nowrap}.edit-quiz-footer-content #quiz-score{text-align:center;font-weight:700;color:green}.edit-quiz-footer-content #quiz-score.incorrect{color:#000}.edit-quiz-footer-content .time-warning{color:orange}.edit-quiz-footer-content .time-critical{color:red}@media (max-width: 767.98px){.edit-quiz-footer-content .connection-status-quiz{font-size:11px}}@media (max-width: 767.98px){.edit-quiz-footer-content{font-size:12px}}
`],encapsulation:2})}return o})();var at=class{id;shortAnswerSpotIndex;shortAnswerSolutionIndex;invalid=!1;solution;spot;question;constructor(m,e){this.spot=m,this.solution=e}};var Gt=class extends Xt{width;spotNr;invalid=!1;question;posX;posY;constructor(){super()}};var lt=class extends Xt{text;invalid=!1;question;posX;posY;constructor(){super()}};var Je=(()=>{class o extends Ft{insertShortAnswerOptionAction;static ID="insert-short-answer-spot.action";spotNumber=1;constructor(e){super(o.ID,"artemisApp.shortAnswerQuestion.editor.addSpot",void 0),this.insertShortAnswerOptionAction=e}run(e){let n=this.spotNumber,i=`[-spot ${n}]`,r=this.getSelectedText(e);this.replaceTextAtCurrentSelection(e,i),this.insertShortAnswerOptionAction.executeInCurrentEditor({spotNumber:n,optionText:r})}}return o})();var de=(()=>{class o extends Ft{static ID="insert-short-answer-option.action";static DEFAULT_TEXT="Enter an answer option here and ensure the spot number is correct.";static DEFAULT_TEXT_SHORT="Enter an answer option here.";constructor(){super(o.ID,"artemisApp.shortAnswerQuestion.editor.addOption",void 0),this.id=o.ID,this.translationKey="artemisApp.shortAnswerQuestion.editor.addOption"}executeInCurrentEditor(e){super.executeInCurrentEditor(e)}run(e,n){let i=n?.optionText||o.DEFAULT_TEXT,r;if(n?.spotNumber?r=`
[-option ${n.spotNumber}] ${i}`:r=`
[-option #] ${i}`,this.getLineText(e,this.getLineCount(e))?.startsWith("[-option")||(r=`

${r}`),this.insertTextAtPosition(e,this.getEndPosition(e),r),i===o.DEFAULT_TEXT){let h=this.getEndPosition(e),_=Ve(h.getLineNumber(),h.getColumn()-o.DEFAULT_TEXT.length,h.getLineNumber(),h.getColumn());this.setSelection(e,_)}e.focus()}}return o})();function ln(o,m){if(o&1){let e=C();t(0,`
    `),s(1,"div",3),t(2,`
        `),c(3,"h4",4),t(4,`
        `),s(5,"button",5),g("click",function(){let i=p(e).dismiss;return u(i())}),a(),t(6,`
    `),a(),t(7,`
    `),s(8,"div",6),t(9,`
        `),s(10,"table",7),t(11,`
            `),s(12,"tr"),t(13,`
                `),c(14,"th",8),t(15,`
                `),c(16,"td",9),t(17,`
            `),a(),t(18,`

            `),s(19,"tr"),t(20,`
                `),c(21,"th",10),t(22,`
                `),c(23,"td",11),t(24,`
            `),a(),t(25,`
        `),a(),t(26,`
    `),a(),t(27,`
    `),s(28,"div",12),t(29,`
        `),s(30,"button",13),g("click",function(){let i=p(e).close;return u(i())}),t(31,"Close"),a(),t(32,`
    `),a(),t(33,`
`)}}var ti=(()=>{class o{modalService=P(H);farQuestionCircle=Pt;open(e){this.modalService.open(e,{size:"lg"})}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=R({type:o,selectors:[["jhi-match-percentage-info-modal"]],decls:9,vars:1,consts:[["info",""],[1,"btn",3,"click"],[3,"icon"],[1,"modal-header"],["jhiTranslate","artemisApp.quizExercise.matchingInfoModalTitle",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"table"],["jhiTranslate","artemisApp.quizExercise.matchLetterCase.title"],["jhiTranslate","artemisApp.quizExercise.matchLetterCase.explanation"],["jhiTranslate","artemisApp.quizExercise.matchPercentage.explanationTitle"],["jhiTranslate","artemisApp.quizExercise.matchPercentage.explanation"],[1,"modal-footer"],["type","button",1,"btn","btn-outline",3,"click"]],template:function(n,i){if(n&1){let r=C();E(0,ln,34,0,"ng-template",null,0,ot),t(2,`
`),s(3,"div"),t(4,`
    `),s(5,"button",1),g("click",function(){p(r);let _=L(1);return u(i.open(_))}),c(6,"fa-icon",2),a(),t(7,`
`),a(),t(8,`
`)}n&2&&(l(6),x("icon",i.farQuestionCircle))},dependencies:[Z,$],encapsulation:2})}return o})();var cn=["questionEditor"],pn=["question"];function un(o,m){if(o&1){let e=C();t(0,`
        `),s(1,"div",6),t(2,`
            `),s(3,"button",7),g("click",function(){p(e);let i=d();return u(i.isQuestionCollapsed=!i.isQuestionCollapsed)}),t(4,`
                `),c(5,"fa-icon",8),t(6,`
            `),a(),t(7,`
            `),s(8,"div",9),t(9,`
                `),s(10,"input",10),D(11,"artemisTranslate"),Q("ngModelChange",function(i){p(e);let r=d();return k(r.shortAnswerQuestion.title,i)||(r.shortAnswerQuestion.title=i),u(i)}),g("ngModelChange",function(){p(e);let i=d();return u(i.questionUpdated.emit())}),a(),t(12,`
            `),a(),t(13,`
            `),s(14,"div",11),t(15,`
                `),s(16,"div",12),t(17,`
                    `),c(18,"span",13),t(19,`
                    `),s(20,"input",14),Q("ngModelChange",function(i){p(e);let r=d();return k(r.shortAnswerQuestion.points,i)||(r.shortAnswerQuestion.points=i),u(i)}),g("ngModelChange",function(){p(e);let i=d();return u(i.questionUpdated.emit())}),a(),t(21,`
                `),a(),t(22,`
                `),s(23,"div",15),t(24,`
                    `),s(25,"h3",16)(26,"span",17),t(27,"SA"),a()(),t(28,`
                `),a(),t(29,`
            `),a(),t(30,`
        `),a(),t(31,`
    `)}if(o&2){let e=d();l(3),W("aria-expanded",!e.isQuestionCollapsed)("aria-controls","collapseQuestion"+e.questionIndex),l(2),x("icon",e.isQuestionCollapsed?e.faAngleRight:e.faAngleDown),l(5),T("placeholder",I(11,7,"artemisApp.quizExercise.placeholder.questionTitle")),y("ngModel",e.shortAnswerQuestion.title),l(10),x("max",e.MAX_POINTS),y("ngModel",e.shortAnswerQuestion.points)}}function mn(o,m){if(o&1){let e=C();t(0,`
        `),s(1,"div",18),t(2,`
            `),s(3,"div",19),t(4,`
                `),s(5,"div",20),t(6,`
                    `),s(7,"button",7),g("click",function(){p(e);let i=d();return u(i.isQuestionCollapsed=!i.isQuestionCollapsed)}),t(8,`
                        `),c(9,"fa-icon",8),t(10,`
                    `),a(),t(11,`
                `),a(),t(12,`
                `),s(13,"div",21),t(14,`
                    `),s(15,"div",22),t(16,`
                        `),s(17,"div",23),t(18,`
                            `),s(19,"input",24),D(20,"artemisTranslate"),D(21,"artemisTranslate"),Q("ngModelChange",function(i){p(e);let r=d();return k(r.shortAnswerQuestion.title,i)||(r.shortAnswerQuestion.title=i),u(i)}),a(),t(22,`
                        `),a(),t(23,`
                        `),s(24,"div",25),t(25,`
                            `),s(26,"span",26),t(27,`
                                `),s(28,"button",27),D(29,"artemisTranslate"),g("click",function(){p(e);let i=d();return u(i.resetQuestionTitle())}),t(30,`
                                    `),c(31,"fa-icon",28),t(32,`
                                `),a(),t(33,`
                            `),a(),t(34,`
                        `),a(),t(35,`
                    `),a(),t(36,`
                `),a(),t(37,`
                `),s(38,"div",29),t(39,`
                    `),s(40,"div",15),t(41,`
                        `),s(42,"h3",16)(43,"span",30),t(44,"SA"),a()(),t(45,`
                    `),a(),t(46,`
                `),a(),t(47,`
                `),s(48,"div",31),t(49,`
                    `),s(50,"button",32),D(51,"artemisTranslate"),g("click",function(){p(e);let i=d();return u(i.moveUp())}),t(52,`
                        `),c(53,"fa-icon",28),t(54,`
                    `),a(),t(55,`
                    `),s(56,"button",33),D(57,"artemisTranslate"),g("click",function(){p(e);let i=d();return u(i.moveDown())}),t(58,`
                        `),c(59,"fa-icon",28),t(60,`
                    `),a(),t(61,`
                    `),s(62,"button",34),D(63,"artemisTranslate"),g("click",function(){p(e);let i=d();return u(i.resetQuestion())}),t(64,`
                        `),c(65,"fa-icon",28),t(66,`
                    `),a(),t(67,`
                `),a(),t(68,`
            `),a(),t(69,`
        `),a(),t(70,`
    `)}if(o&2){let e=d();l(7),W("aria-expanded",!e.isQuestionCollapsed)("aria-controls","collapseQuestion"+e.questionIndex),l(2),x("icon",e.isQuestionCollapsed?e.faAngleRight:e.faAngleDown),l(10),T("placeholder",I(20,14,"artemisApp.quizExercise.placeholder.shortQuestionTitle")),y("ngModel",e.shortAnswerQuestion.title),W("aria-label",I(21,16,"artemisApp.quizExercise.placeholder.shortQuestionTitle")),l(9),x("ngbTooltip",I(29,18,"artemisApp.quizExercise.re-evaluate.resetQuestionTitle")),l(3),x("icon",e.faUndo),l(19),x("ngbTooltip",I(51,20,"artemisApp.quizExercise.re-evaluate.moveUp")),l(3),x("icon",e.faChevronUp),l(3),x("ngbTooltip",I(57,22,"artemisApp.quizExercise.re-evaluate.moveDown")),l(3),x("icon",e.faChevronDown),l(3),x("ngbTooltip",I(63,24,"artemisApp.quizExercise.re-evaluate.resetQuestion")),l(3),x("icon",e.faUndo)}}function xn(o,m){if(o&1){let e=C();t(0,`
                    `),s(1,"div",36),t(2,`
                        `),s(3,"div",52),g("click",function(){p(e);let i=d(2);return u(i.deleteQuestion())}),t(4,`
                            `),c(5,"fa-icon",53),t(6,`
                        `),a(),t(7,`
                    `),a(),t(8,`
                `)}if(o&2){let e=d(2);l(5),x("icon",e.faTrash)}}function gn(o,m){if(o&1){let e=C();t(0,`
            `),s(1,"div",35),t(2,`
                `),s(3,"div",36),t(4,`
                    `),c(5,"span",37),t(6,`
                    `),s(7,"select",38),Q("ngModelChange",function(i){p(e);let r=d();return k(r.shortAnswerQuestion.scoringType,i)||(r.shortAnswerQuestion.scoringType=i),u(i)}),g("ngModelChange",function(){p(e);let i=d();return u(i.questionUpdated.emit())}),t(8,`
                        `),c(9,"option",39),t(10,`
                        `),c(11,"option",40),t(12,`
                        `),c(13,"option",41),t(14,`
                    `),a(),t(15,`
                    `),c(16,"jhi-quiz-scoring-info-modal"),t(17,`
                `),a(),t(18,`
                `),s(19,"div",42),t(20,`
                    `),c(21,"span",43),t(22,`
                    `),s(23,"div",44),t(24,`
                        `),s(25,"div",45),t(26,`
                            `),s(27,"input",46),Q("ngModelChange",function(i){p(e);let r=d();return k(r.shortAnswerQuestion.similarityValue,i)||(r.shortAnswerQuestion.similarityValue=i),u(i)}),g("ngModelChange",function(){p(e);let i=d();return u(i.questionUpdated.emit())}),a(),t(28,`
                            `),s(29,"p"),t(30),a(),t(31,`
                        `),a(),t(32,`
                    `),a(),t(33,`
                    `),c(34,"jhi-match-percentage-info-modal"),t(35,`
                    `),s(36,"div",47),t(37,`
                        `),s(38,"input",48,0),g("change",function(){p(e);let i=L(39),r=d();return u(r.toggleExactMatchCheckbox(i.checked))}),a(),t(40,`
                        `),c(41,"label",49),t(42,`
                    `),a(),t(43,`
                    `),s(44,"div",47),t(45,`
                        `),s(46,"input",50),Q("ngModelChange",function(i){p(e);let r=d();return k(r.shortAnswerQuestion.matchLetterCase,i)||(r.shortAnswerQuestion.matchLetterCase=i),u(i)}),g("ngModelChange",function(){p(e);let i=d();return u(i.questionUpdated.emit())}),a(),t(47,`
                        `),c(48,"label",51),t(49,`
                    `),a(),t(50,`
                `),a(),t(51,`
                `),E(52,xn,9,1),a(),t(53,`
        `)}if(o&2){let e=d();l(7),y("ngModel",e.shortAnswerQuestion.scoringType),l(20),T("id","matchPercentageSlider"+e.questionIndex),y("ngModel",e.shortAnswerQuestion.similarityValue),l(3),Y("",e.shortAnswerQuestion.similarityValue," %"),l(8),T("id","cbMatchAnswersExactly"+e.questionIndex),x("checked",e.shortAnswerQuestion.similarityValue===100),l(3),T("for","cbMatchAnswersExactly"+e.questionIndex),l(5),T("id","cbMatchLetterCase"+e.questionIndex),y("ngModel",e.shortAnswerQuestion.matchLetterCase),l(2),T("for","cbMatchLetterCase"+e.questionIndex),l(4),w(e.reEvaluationInProgress?-1:52)}}function hn(o,m){if(o&1){let e=C();t(0,`
            `),s(1,"div",54),t(2,`
                `),s(3,"div",55),t(4,`
                    `),s(5,"div",36),t(6,`
                        `),c(7,"span",37),t(8,`
                        `),s(9,"select",38),Q("ngModelChange",function(i){p(e);let r=d();return k(r.shortAnswerQuestion.scoringType,i)||(r.shortAnswerQuestion.scoringType=i),u(i)}),g("ngModelChange",function(){p(e);let i=d();return u(i.questionUpdated.emit())}),t(10,`
                            `),c(11,"option",39),t(12,`
                            `),c(13,"option",40),t(14,`
                            `),c(15,"option",41),t(16,`
                        `),a(),t(17,`
                        `),c(18,"jhi-quiz-scoring-info-modal"),t(19,`
                    `),a(),t(20,`
                `),a(),t(21,`
                `),s(22,"div",56),t(23,`
                    `),s(24,"div",36),t(25,`
                        `),c(26,"span",13),t(27,`
                        `),c(28,"input",57),t(29,`
                    `),a(),t(30,`
                `),a(),t(31,`
                `),s(32,"div",58),t(33,`
                    `),s(34,"div",59),t(35,`
                        `),s(36,"button",60),g("click",function(){p(e);let i=d();return u(i.shortAnswerQuestion.invalid=!0)}),a(),t(37,`
                        `),c(38,"button",61),t(39,`
                    `),a(),t(40,`
                    `),s(41,"div",25),t(42,`
                        `),s(43,"div",62),g("click",function(){p(e);let i=d();return u(i.deleteQuestion())}),t(44,`
                            `),c(45,"fa-icon",53),t(46,`
                        `),a(),t(47,`
                    `),a(),t(48,`
                `),a(),t(49,`
                `),s(50,"div",63),t(51,`
                    `),s(52,"div",64),t(53,`
                        `),s(54,"div",65),t(55,`
                            `),c(56,"span",43),t(57,`
                        `),a(),t(58,`
                        `),s(59,"div",66),t(60,`
                            `),s(61,"div",44),t(62,`
                                `),s(63,"div",67),t(64,`
                                    `),s(65,"input",68),Q("ngModelChange",function(i){p(e);let r=d();return k(r.shortAnswerQuestion.similarityValue,i)||(r.shortAnswerQuestion.similarityValue=i),u(i)}),g("ngModelChange",function(){p(e);let i=d();return u(i.questionUpdated.emit())}),a(),t(66,`
                                    `),s(67,"p",69),t(68),a(),t(69,`
                                    `),c(70,"jhi-match-percentage-info-modal"),t(71,`
                                `),a(),t(72,`
                            `),a(),t(73,`
                        `),a(),t(74,`
                    `),a(),t(75,`
                    `),s(76,"div",70),t(77,`
                        `),s(78,"div",71),t(79,`
                            `),s(80,"input",72,0),g("change",function(){p(e);let i=L(81),r=d();return u(r.toggleExactMatchCheckbox(i.checked))}),a(),t(82,`
                            `),c(83,"label",49),t(84,`
                        `),a(),t(85,`
                    `),a(),t(86,`
                    `),s(87,"div",70),t(88,`
                        `),s(89,"div",71),t(90,`
                            `),s(91,"input",73),Q("ngModelChange",function(i){p(e);let r=d();return k(r.shortAnswerQuestion.matchLetterCase,i)||(r.shortAnswerQuestion.matchLetterCase=i),u(i)}),g("ngModelChange",function(){p(e);let i=d();return u(i.questionUpdated.emit())}),a(),t(92,`
                            `),c(93,"label",51),t(94,`
                        `),a(),t(95,`
                    `),a(),t(96,`
                `),a(),t(97,`
            `),a(),t(98,`
        `)}if(o&2){let e=d();l(9),y("ngModel",e.shortAnswerQuestion.scoringType),l(19),x("value",e.shortAnswerQuestion.points),l(8),x("hidden",e.shortAnswerQuestion.invalid),l(2),x("hidden",!e.shortAnswerQuestion.invalid)("disabled",e.shortAnswerQuestion.invalid),l(7),x("icon",e.faTrash),l(20),T("id","matchPercentageSlider"+e.questionIndex),y("ngModel",e.shortAnswerQuestion.similarityValue),l(3),Y("",e.shortAnswerQuestion.similarityValue," %"),l(12),T("id","cbMatchAnswersExactly"+e.questionIndex),x("checked",e.shortAnswerQuestion.similarityValue===100),l(3),T("for","cbMatchAnswersExactly"+e.questionIndex),l(8),T("id","cbMatchLetterCase"+e.questionIndex),y("ngModel",e.shortAnswerQuestion.matchLetterCase),l(2),T("for","cbMatchLetterCase"+e.questionIndex)}}function _n(o,m){if(o&1){let e=C();t(0,`
                `),s(1,"div",74),t(2,`
                    `),s(3,"jhi-markdown-editor-monaco",75,1),Q("markdownChange",function(i){p(e);let r=d();return k(r.questionEditorText,i)||(r.questionEditorText=i),u(i)}),g("markdownChange",function(i){p(e);let r=d();return u(r.onTextChange(i))}),a(),t(5,`
                `),a(),t(6,`
            `)}if(o&2){let e=d();l(3),x("enableResize",!1)("enableFileUpload",!1)("showPreviewButton",!1)("defaultActions",e.markdownActions)("colorAction",void 0)("initialEditorHeight","external")("useDefaultMarkdownEditorOptions",!1),y("markdown",e.questionEditorText)}}function fn(o,m){o&1&&(t(0,`
                    `),c(1,"span",84),t(2,`
                `))}function wn(o,m){if(o&1){let e=C();t(0,`
                    `),s(1,"div",85),g("click",function(){p(e);let i=d(2);return u(i.addSpotAtCursorVisualMode())}),a(),t(2,`
                `)}}function Cn(o,m){o&1&&(t(0,`
                    `),c(1,"hr"),t(2,`
                `))}function En(o,m){if(o&1&&(t(0,`
                                            `),c(1,"div",88),t(2,`
                                        `)),o&2){let e=d(),n=e.$implicit,i=e.$index,r=d().$index;l(),ie("id","element-",r,"-",i,""),x("innerHTML",n,xe)}}function vn(o,m){if(o&1){let e=C();t(0,`
                                            `),s(1,"input",89),g("change",function(){p(e);let i=d().$index,r=d().$index,h=d(2);return u(h.setQuestionText("element-"+r+"-"+i+"-textInput"))}),a(),t(2,`
                                        `)}if(o&2){let e=d(),n=e.$implicit,i=e.$index,r=d().$index,h=d(2);l(),ie("id","element-",r,"-",i,"-textInput"),T("value",n),T("size",((n==null?null:n.length)||0)+1),x("maxLength",h.MAX_CHARACTER_COUNT)}}function bn(o,m){if(o&1){let e=C();t(0,`
                                                            `),s(1,"div",97),g("click",function(){p(e);let i=d(3).$implicit,r=d(3);return u(r.shortAnswerQuestionUtil.getSpot(r.shortAnswerQuestionUtil.getSpotNr(i||""),r.shortAnswerQuestion).invalid=!0)}),t(2,`
                                                                `),c(3,"fa-icon",95),t(4,`
                                                            `),a(),t(5,`
                                                        `)}if(o&2){let e=d(6);l(3),x("icon",e.faBan)}}function An(o,m){if(o&1){let e=C();t(0,`
                                                    `),s(1,"div",93),t(2,`
                                                        `),E(3,bn,6,1),s(4,"div",94),g("click",function(){p(e);let i=d(2).$implicit,r=d(3);return u(r.resetSpot(r.shortAnswerQuestionUtil.getSpot(r.shortAnswerQuestionUtil.getSpotNr(i||""),r.shortAnswerQuestion)))}),t(5,`
                                                            `),c(6,"fa-icon",95),t(7,`
                                                        `),a(),t(8,`
                                                        `),s(9,"div",96),g("click",function(){p(e);let i=d(2).$implicit,r=d(3);return u(r.deleteSpot(r.shortAnswerQuestionUtil.getSpot(r.shortAnswerQuestionUtil.getSpotNr(i||""),r.shortAnswerQuestion)))}),t(10,`
                                                            `),c(11,"fa-icon",95),t(12,`
                                                        `),a(),t(13,`
                                                    `),a(),t(14,`
                                                `)}if(o&2){let e=d(2).$implicit,n=d(3);l(3),w(n.shortAnswerQuestionUtil.getSpot(n.shortAnswerQuestionUtil.getSpotNr(e||""),n.shortAnswerQuestion).invalid?-1:3),l(3),x("icon",n.faUndo),l(3),x("ngClass",n.reEvaluationInProgress?"re-evaluate-button":"delete-button"),l(2),x("icon",n.faTrash)}}function qn(o,m){if(o&1){let e=C();t(0,`
                                            `),s(1,"div",90),t(2,`
                                                `),s(3,"div",91),g("cdkDropListDropped",function(i){p(e);let r=d().$implicit,h=d(3);return u(h.onDragDrop(h.shortAnswerQuestionUtil.getSpot(h.shortAnswerQuestionUtil.getSpotNr(r||""),h.shortAnswerQuestion),i))}),a(),t(4,`
                                                `),E(5,An,15,4),s(6,"div",92),t(7),a(),t(8,`
                                            `),a(),t(9,`
                                        `)}if(o&2){let e=d().$implicit,n=d(3);l(5),w(n.reEvaluationInProgress?5:-1),l(),x("ngClass","mapping-number mapping-color-"+n.shortAnswerQuestionUtil.getSpotNr(e||"")%8),l(),Y(`
                                                    `,n.shortAnswerQuestionUtil.getSpotNr(e||""),`
                                                `)}}function Sn(o,m){if(o&1&&(t(0,`
                                    `),s(1,"div",87),t(2,`
                                        `),E(3,En,3,4)(4,vn,3,6)(5,qn,10,3),a(),t(6,`
                                `)),o&2){let e=m.$implicit,n=d(3);l(3),w(!n.shortAnswerQuestionUtil.isInputField(e||"")&&!n.reEvaluationInProgress?3:-1),l(),w(!n.shortAnswerQuestionUtil.isInputField(e||"")&&n.reEvaluationInProgress?4:-1),l(),w(n.shortAnswerQuestionUtil.isInputField(e||"")?5:-1)}}function Tn(o,m){if(o&1&&(t(0,`
                            `),s(1,"div",86),t(2,`
                                `),j(3,Sn,7,3,null,null,O),c(5,"br"),t(6,`
                            `),a(),t(7,`
                        `)),o&2){let e=m.$implicit;l(3),B(e)}}function yn(o,m){if(o&1){let e=C();t(0,`
                        `),s(1,"span",98),t(2,`
                            `),s(3,"button",27),D(4,"artemisTranslate"),g("click",function(){p(e);let i=d(2);return u(i.resetQuestionText())}),t(5,`
                                `),c(6,"fa-icon",28),t(7,`
                            `),a(),t(8,`
                        `),a(),t(9,`
                    `)}if(o&2){let e=d(2);l(3),x("ngbTooltip",I(4,2,"artemisApp.quizExercise.re-evaluate.resetQuestionText")),l(3),x("icon",e.faUndo)}}function kn(o,m){o&1&&(t(0,`
                    `),s(1,"div",99),t(2,`
                        `),c(3,"span",100),t(4,`
                    `),a(),t(5,`
                `))}function Qn(o,m){o&1&&(t(0,`
                    `),s(1,"div",99),t(2,`
                        `),c(3,"span",101),t(4,`
                    `),a(),t(5,`
                `))}function Dn(o,m){if(o&1){let e=C();t(0,`
                                                `),s(1,"div",92),t(2),s(3,"div",111),g("click",function(){p(e);let i=d().$implicit,r=d(4);return u(r.deleteMapping(i))}),t(4,`
                                                        `),c(5,"fa-icon",95),t(6,`
                                                    `),a(),t(7,`
                                                `),a(),t(8,`
                                            `)}if(o&2){let e=d().$implicit,n=d(4);l(),x("ngClass","mapping-number mapping-color-"+(e.spot.spotNr||0)%8),l(),Y(`
                                                    `,e.spot.spotNr,`
                                                    `),l(3),x("icon",n.faUnlink)}}function In(o,m){if(o&1&&(t(0,`
                                        `),s(1,"div"),t(2,`
                                            `),E(3,Dn,9,3),a(),t(4,`
                                    `)),o&2){let e=m.$implicit;l(3),w(e.spot!==void 0?3:-1)}}function Mn(o,m){o&1&&c(0,"div")}function Vn(o,m){if(o&1){let e=C();s(0,"div",112),t(1,`
                                    `),s(2,"div",113),t(3,`
                                        `),c(4,"fa-icon",107),t(5,`
                                    `),a(),t(6,`
                                    `),s(7,"div"),t(8,`
                                        `),s(9,"textarea",114),Q("ngModelChange",function(i){p(e);let r=d().$implicit;return k(r.text,i)||(r.text=i),u(i)}),g("ngModelChange",function(){p(e);let i=d(4);return u(i.questionUpdated.emit())}),a(),t(10,`
                                    `),a(),t(11,`
                                `),a()}if(o&2){let e=d().$implicit,n=d(3);l(4),x("icon",n.faBars),l(5),y("ngModel",e.text)}}function Pn(o,m){if(o&1){let e=C();t(0,`
                            `),s(1,"div",103),t(2,`
                                `),s(3,"div"),t(4,`
                                    `),s(5,"textarea",104),Q("ngModelChange",function(i){let r=p(e).$implicit;return k(r.text,i)||(r.text=i),u(i)}),g("ngModelChange",function(){p(e);let i=d(3);return u(i.questionUpdated.emit())}),a(),t(6,`
                                `),a(),t(7,`
                                `),s(8,"div",105),g("click",function(){let i=p(e).$implicit,r=d(3);return u(r.deleteSolution(i))}),t(9,`
                                    `),c(10,"fa-icon",95),t(11,`
                                `),a(),t(12,`
                                `),s(13,"div",106),t(14,`
                                    `),c(15,"fa-icon",107),t(16,`
                                `),a(),t(17,`
                                `),s(18,"div",108),t(19,`
                                    `),j(20,In,5,1,null,null,O),a(),t(22,`
                                `),E(23,Mn,1,0,"div",109),t(24,`
                                `),E(25,Vn,12,2,"div",110),t(26,`
                            `),a(),t(27,`
                        `)}if(o&2){let e=m.$implicit,n=d(3);l(),x("cdkDragDisabled",!1)("cdkDragData",e),l(4),y("ngModel",e.text),l(5),x("icon",n.faTrash),l(5),x("icon",n.faBars),l(5),B(n.getMappingsForSolution(e))}}function Fn(o,m){if(o&1&&(t(0,`
                    `),s(1,"div",102),t(2,`
                        `),j(3,Pn,28,5,null,null,O),a(),t(5,`
                `)),o&2){let e=d(2);l(3),B(e.shortAnswerQuestion.solutions)}}function Ln(o,m){if(o&1){let e=C();t(0,`
            `),s(1,"div",76),t(2,`
                `),c(3,"h4",77),t(4,`
                `),E(5,fn,3,0),c(6,"hr"),t(7,`
                `),E(8,wn,3,0)(9,Cn,3,0),s(10,"div",67),t(11,`
                    `),s(12,"div",78,2),t(14,`
                        `),j(15,Tn,8,0,null,null,O),a(),t(17,`
                    `),E(18,yn,10,4),a(),t(19,`
                `),c(20,"hr"),t(21,`
                `),E(22,kn,6,0)(23,Qn,6,0)(24,Fn,6,0),s(25,"div",79),t(26,`
                    `),ge(27),t(28,`
                        `),s(29,"div",35),t(30,`
                            `),s(31,"div",80),t(32,`
                                `),s(33,"button",81),g("click",function(){p(e);let i=d();return u(i.addTextSolution())}),t(34,`
                                    `),c(35,"i",82),t(36,`
                                    `),c(37,"span",83),t(38,`
                                `),a(),t(39,`
                            `),a(),t(40,`
                        `),a(),t(41,`
                    `),he(),t(42,`
                `),a(),t(43,`
            `),a(),t(44,`
        `)}if(o&2){let e=d();l(5),w(e.reEvaluationInProgress?-1:5),l(3),w(e.reEvaluationInProgress?-1:8),l(),w(e.reEvaluationInProgress?-1:9),l(6),B(e.textParts),l(3),w(e.reEvaluationInProgress?18:-1),l(4),w(!e.shortAnswerQuestion.solutions||!e.shortAnswerQuestion.solutions.length?22:-1),l(),w(e.shortAnswerQuestion.solutions&&e.shortAnswerQuestion.solutions.length?23:-1),l(),w(e.shortAnswerQuestion.solutions&&e.shortAnswerQuestion.solutions.length?24:-1)}}function zn(o,m){if(o&1){let e=C();t(0,`
            `),s(1,"div",115),t(2,`
                `),s(3,"div",116),t(4,`
                    `),c(5,"div",117),t(6,`
                    `),s(7,"div",118),g("click",function(){p(e);let i=d();return u(i.togglePreview())}),a(),t(8,`
                `),a(),t(9,`
            `),a(),t(10,`
        `)}}function Un(o,m){if(o&1){let e=C();t(0,`
            `),s(1,"div",115),t(2,`
                `),s(3,"div",116),t(4,`
                    `),s(5,"div",119),g("click",function(){p(e);let i=d();return u(i.togglePreview())}),a(),t(6,`
                    `),c(7,"div",120),t(8,`
                `),a(),t(9,`
            `),a(),t(10,`
        `)}}var ns=(()=>{class o{shortAnswerQuestionUtil=P(Ke);modalService=P(H);changeDetector=P(ct);questionEditor;questionElement;markdownActions;insertShortAnswerOptionAction=new de;insertShortAnswerSpotAction=new Je(this.insertShortAnswerOptionAction);shortAnswerQuestion;set question(e){this.shortAnswerQuestion=e}questionIndex;reEvaluationInProgress;questionUpdated=new F;questionDeleted=new F;questionMoveUp=new F;questionMoveDown=new F;MAX_CHARACTER_COUNT=255;questionEditorText="";showVisualMode;isQuestionCollapsed;numberOfSpot=1;optionsWithID=[];textParts;backupQuestion;faBan=yt;faTrash=kt;faUndo=Qt;faChevronUp=St;faChevronDown=It;faBars=qt;faUnlink=Mt;faAngleRight=Tt;faAngleDown=Dt;MAX_POINTS=zt;MarkdownEditorHeight=We;ngOnInit(){this.markdownActions=[new Pe,new Fe,new Le,new je,new ze,new Ne,new Oe,new Be,this.insertShortAnswerSpotAction,this.insertShortAnswerOptionAction],this.backupQuestion=z(this.shortAnswerQuestion),this.textParts=this.parseQuestionTextIntoTextBlocks(this.shortAnswerQuestion.text),this.showVisualMode=!1,this.isQuestionCollapsed=!1}ngOnChanges(e){e.question&&e.question.previousValue&&this.questionUpdated.emit()}ngAfterViewInit(){this.reEvaluationInProgress||requestAnimationFrame(this.setupQuestionEditor.bind(this))}parseQuestionTextIntoTextBlocks(e){let n=[];return e.split(/\n+/g).forEach(r=>{let h=this.shortAnswerQuestionUtil.divideQuestionTextIntoTextParts(r)[0],_=[];if(h.forEach(v=>{if(v.includes("[-spot ",0))_.push(v);else{let f=v.split(/\s+/g);f=f.filter(b=>b!==""),f.length>0&&(_=_.concat(f))}}),_.length>0){let v=this.shortAnswerQuestionUtil.getIndentation(r);_[0]=v.concat(_[0])}n.push(_)}),n}setupQuestionEditor(){this.numberOfSpot=this.shortAnswerQuestion.spots.length+1,this.questionEditor.applyOptionPreset(Re),this.questionEditorText=this.generateMarkdown(),this.changeDetector.detectChanges(),this.parseMarkdown(this.questionEditorText),this.questionUpdated.emit()}setOptionsWithID(){this.optionsWithID=[],this.shortAnswerQuestion.solutions.forEach(e=>{let n="[-option ",i=!0;this.shortAnswerQuestionUtil.getAllSpotsForSolutions(this.shortAnswerQuestion.correctMappings,e).forEach(h=>{h&&(i?(n+=this.shortAnswerQuestion.spots?.filter(_=>this.shortAnswerQuestionUtil.isSameSpot(_,h))[0].spotNr,i=!1):n+=","+this.shortAnswerQuestion.spots?.filter(_=>this.shortAnswerQuestionUtil.isSameSpot(_,h))[0].spotNr)}),n+=n==="[-option "?"#]":"]",this.optionsWithID.push(n)})}generateMarkdown(){this.setOptionsWithID();let e=st(this.shortAnswerQuestion);return this.shortAnswerQuestion.solutions?.length&&(e+=`


`+this.shortAnswerQuestion.solutions.map((n,i)=>this.optionsWithID[i]+" "+n.text.trim()).join(`
`)),e}parseMarkdown(e){let n=e.split(/\[-option /g),i=n[0],r=i.split(/\[-spot/g).map(f=>f.split(/\]/g)).slice(1).map(f=>f[0]),h=n.map(f=>f.split(/\]/g)).slice(1);Ue(i,this.shortAnswerQuestion);let _=this.shortAnswerQuestion.solutions.filter(f=>f.id!==void 0).map(f=>f.id);this.shortAnswerQuestion.solutions=[],this.shortAnswerQuestion.correctMappings=[];let v=this.shortAnswerQuestion.spots.filter(f=>f.id!==void 0).map(f=>f.id);this.shortAnswerQuestion.spots=[];for(let f of r){let b=new Gt;b.width=15,this.shortAnswerQuestion.spots.length<v.length&&(b.id=v[this.shortAnswerQuestion.spots.length]),b.spotNr=+f.trim(),this.shortAnswerQuestion.spots.push(b)}for(let f of h){let b=new lt;b.text=f[1].trim(),this.shortAnswerQuestion.solutions.length<_.length&&(b.id=_[this.shortAnswerQuestion.solutions.length]),this.shortAnswerQuestion.solutions.push(b),this.createMapping(f[0],b)}}createMapping(e,n){let i=e.split(",").map(Number);for(let r of i){let h=this.shortAnswerQuestion.spots?.find(_=>_.spotNr===r);this.shortAnswerQuestion.correctMappings.push(new at(h,n))}}open(e){this.modalService.open(e,{size:"lg"})}addSpotAtCursor(){this.insertShortAnswerSpotAction.executeInCurrentEditor({spotNumber:this.numberOfSpot})}addOptionToSpot(e,n){this.insertShortAnswerOptionAction.executeInCurrentEditor({spotNumber:e,optionText:n})}addOption(){this.insertShortAnswerOptionAction.executeInCurrentEditor()}addSpotAtCursorVisualMode(){let e=this.questionElement.nativeElement,n=window.getSelection(),i=n.anchorNode;if(!e.contains(i))return;let r=n.focusNode.parentNode.parentElement.id.split("-").slice(1),h=Number(r[0]),_=Number(r[1]);if(r.length===0)return;let v=n.getRangeAt(0),f=v.cloneRange(),b=n.focusNode.parentNode.parentElement.firstElementChild;f.selectNodeContents(b),f.setEnd(v.endContainer,v.endOffset);let A=document.createElement("div");A.appendChild(f.cloneContents());let M=A.innerHTML,U=ne(M).length-n.toString().length,it=U+n.toString().length,Kt=this.textParts[h][_],Jt=ne(Kt).substring(U,it),ce=this.numberOfSpot,ei=this.questionEditor.monacoEditor.getText().split(/\[-option /g)[0].trim();this.textParts=this.shortAnswerQuestionUtil.divideQuestionTextIntoTextParts(ei);let pe=this.textParts[h][_];this.textParts[h][_]=pe?.substring(0,U)+"[-spot "+ce+"]"+pe?.substring(it),this.shortAnswerQuestion.text=this.textParts.map(ni=>ni.join(" ")).join(`
`);let ii=this.shortAnswerQuestionUtil.divideQuestionTextIntoTextParts(this.shortAnswerQuestion.text);this.textParts=this.shortAnswerQuestionUtil.transformTextPartsIntoHTML(ii),this.setQuestionEditorValue(this.generateMarkdown()),this.addOptionToSpot(ce,Jt),this.parseMarkdown(this.questionEditor.monacoEditor.getText()),this.questionUpdated.emit()}addTextSolution(){this.shortAnswerQuestion.solutions||(this.shortAnswerQuestion.solutions=[]);let e=new lt;e.text=de.DEFAULT_TEXT_SHORT,this.insertShortAnswerOptionAction.executeInCurrentEditor({optionText:e.text}),this.questionUpdated.emit()}deleteSolution(e){this.shortAnswerQuestion.solutions=this.shortAnswerQuestion.solutions?.filter(n=>n!==e),this.deleteMappingsForSolution(e),this.questionEditorText=this.generateMarkdown()}onDragDrop(e,n){let i=n.item.data;if(i=this.shortAnswerQuestion.solutions?.find(r=>i.id?r.id===i.id:r.tempID===i.tempID),!!i){if(this.shortAnswerQuestion.correctMappings||(this.shortAnswerQuestion.correctMappings=[]),!this.shortAnswerQuestion.correctMappings.some(r=>this.shortAnswerQuestionUtil.isSameSpot(r.spot,e)&&this.shortAnswerQuestionUtil.isSameSolution(r.solution,i))){this.deleteMapping(this.getMappingsForSolution(i).filter(h=>h.spot===void 0)[0]);let r=new at(e,i);this.shortAnswerQuestion.correctMappings.push(r),this.questionUpdated.emit()}this.questionEditorText=this.generateMarkdown()}}getMappingIndex(e){let n=[];return this.shortAnswerQuestion.correctMappings?.some(i=>(n.some(r=>this.shortAnswerQuestionUtil.isSameSpot(r,i.spot))||n.push(i.spot),this.shortAnswerQuestionUtil.isSameSpot(i.spot,e.spot)))?n.length:0}getMappingsForSolution(e){return this.shortAnswerQuestion.correctMappings||(this.shortAnswerQuestion.correctMappings=[]),this.shortAnswerQuestion.correctMappings.filter(n=>this.shortAnswerQuestionUtil.isSameSolution(n.solution,e)).sort((n,i)=>this.getMappingIndex(n)-this.getMappingIndex(i))}deleteMappingsForSolution(e){this.shortAnswerQuestion.correctMappings||(this.shortAnswerQuestion.correctMappings=[]),this.shortAnswerQuestion.correctMappings=this.shortAnswerQuestion.correctMappings.filter(n=>!this.shortAnswerQuestionUtil.isSameSolution(n.solution,e))}deleteMapping(e){this.shortAnswerQuestion.correctMappings||(this.shortAnswerQuestion.correctMappings=[]),this.shortAnswerQuestion.correctMappings=this.shortAnswerQuestion.correctMappings.filter(n=>n!==e),this.questionEditorText=this.generateMarkdown()}deleteQuestion(){this.questionDeleted.emit()}togglePreview(){this.showVisualMode=!this.showVisualMode;let e=this.shortAnswerQuestionUtil.divideQuestionTextIntoTextParts(this.shortAnswerQuestion.text);this.textParts=this.shortAnswerQuestionUtil.transformTextPartsIntoHTML(e),this.setQuestionEditorValue(this.generateMarkdown())}moveUp(){this.questionMoveUp.emit()}moveDown(){this.questionMoveDown.emit()}resetQuestionTitle(){this.shortAnswerQuestion.title=this.backupQuestion.title}resetQuestionText(){this.shortAnswerQuestion.text=this.backupQuestion.text,this.shortAnswerQuestion.spots=z(this.backupQuestion.spots),this.textParts=this.parseQuestionTextIntoTextBlocks(this.shortAnswerQuestion.text),this.shortAnswerQuestion.explanation=this.backupQuestion.explanation,this.shortAnswerQuestion.hint=this.backupQuestion.hint}resetQuestion(){this.resetQuestionTitle(),this.shortAnswerQuestion.invalid=this.backupQuestion.invalid,this.shortAnswerQuestion.randomizeOrder=this.backupQuestion.randomizeOrder,this.shortAnswerQuestion.scoringType=this.backupQuestion.scoringType,this.shortAnswerQuestion.solutions=z(this.backupQuestion.solutions),this.shortAnswerQuestion.correctMappings=z(this.backupQuestion.correctMappings),this.shortAnswerQuestion.spots=z(this.backupQuestion.spots),this.resetQuestionText()}resetSpot(e){let n=this.backupQuestion.spots.find(r=>r.id===e.id),i=this.shortAnswerQuestion.spots.indexOf(e);this.shortAnswerQuestion.spots.splice(i,1),this.shortAnswerQuestion.spots.splice(i,0,n)}deleteSpot(e){this.shortAnswerQuestion.spots=this.shortAnswerQuestion.spots?.filter(n=>n!==e),this.deleteMappingsForSpot(e),this.textParts=this.parseQuestionTextIntoTextBlocks(this.shortAnswerQuestion.text),this.textParts=this.textParts.map(n=>n.filter(i=>!i||!i.includes("[-spot "+e.spotNr+"]"))),this.shortAnswerQuestion.text=this.textParts.map(n=>n.join(" ")).join(`
`)}deleteMappingsForSpot(e){this.shortAnswerQuestion.correctMappings||(this.shortAnswerQuestion.correctMappings=[]),this.shortAnswerQuestion.correctMappings=this.shortAnswerQuestion.correctMappings.filter(n=>!this.shortAnswerQuestionUtil.isSameSpot(n.spot,e))}setQuestionText(e){let n=e.split("-").slice(1);this.textParts[Number(n[0])][Number(n[1])]=document.getElementById(e).value,this.shortAnswerQuestion.text=this.textParts.map(i=>i.join(" ")).join(`
`),this.textParts=this.parseQuestionTextIntoTextBlocks(this.shortAnswerQuestion.text)}prepareForSave(){}toggleExactMatchCheckbox(e){this.shortAnswerQuestion.similarityValue=e?100:85,this.questionUpdated.emit()}onTextChange(e){this.parseMarkdown(this.questionEditorText),this.numberOfSpot=this.getHighestSpotNumbers(e)+1,this.insertShortAnswerSpotAction.spotNumber=this.numberOfSpot,this.questionUpdated.emit()}getHighestSpotNumbers(e){let n=/\[-spot (\d+)\]/g,i=0,r=n.exec(e);for(;r;){let h=+r[1];r.length>0&&h>i&&(i=h),r=n.exec(e)}return i}setQuestionEditorValue(e){this.questionEditor.markdown=e}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=R({type:o,selectors:[["jhi-short-answer-question-edit"]],viewQuery:function(n,i){if(n&1&&(K(cn,5),K(pn,5)),n&2){let r;J(r=tt())&&(i.questionEditor=r.first),J(r=tt())&&(i.questionElement=r.first)}},inputs:{question:"question",questionIndex:"questionIndex",reEvaluationInProgress:"reEvaluationInProgress"},outputs:{questionUpdated:"questionUpdated",questionDeleted:"questionDeleted",questionMoveUp:"questionMoveUp",questionMoveDown:"questionMoveDown"},features:[dt],decls:19,vars:12,consts:[["inputElement",""],["questionEditor",""],["question",""],[1,"edit-sa-question"],[1,"card-body","question-card-body",3,"ngbCollapse","id"],[1,"markupEditorArea",3,"hidden"],[1,"question-options","card-header","question-card-header"],[1,"btn","question-collapse",3,"click"],["size","3x",3,"icon"],[1,"form-group","question-title"],["id","short-answer-question-title",1,"form-control",3,"ngModelChange","ngModel","placeholder"],[1,"question-card-header-inputs"],[1,"form-group","question-score"],["jhiTranslate","artemisApp.quizQuestion.score",1,"colon-suffix"],["title","score","type","number","min","0",1,"form-control",3,"ngModelChange","max","ngModel"],[1,"question-type"],[1,"mb-0"],[1,"badge","bg-success","align-text-top"],[1,"question-options","card-header","question-card-header-reevaluation"],[1,"row"],[1,"col-3","col-lg-1","mt-1"],[1,"col-9","col-lg-8","text-start","mt-3"],[1,"input-group","row"],[1,"col-10","col-lg-11"],[1,"form-control",2,"width","100%",3,"ngModelChange","ngModel","placeholder"],[1,"col-2","col-lg-1"],[1,"input-group-btn"],["type","button",1,"btn","btn-outline-secondary",3,"click","ngbTooltip"],[3,"icon"],[1,"col-3","col-lg-1","mt-lg-3"],[1,"badge","bg-success","align-text-top",2,"width","60px"],[1,"col-9","col-lg-2","text-end","mt-lg-3"],["id","move-up-button","type","button",1,"btn","btn-outline-secondary",3,"click","ngbTooltip"],["id","move-down-button","type","button",1,"btn","btn-outline-secondary",3,"click","ngbTooltip"],["id","reset-button","type","button",1,"btn","btn-outline-secondary",3,"click","ngbTooltip"],[1,"question-options"],[1,"form-group"],["jhiTranslate","artemisApp.quizQuestion.scoringType",1,"colon-suffix","no-flex-shrink"],["title","scoring type",1,"form-select",3,"ngModelChange","ngModel"],["value","ALL_OR_NOTHING","jhiTranslate","artemisApp.quizExercise.scoringType.all_or_nothing"],["value","PROPORTIONAL_WITH_PENALTY","jhiTranslate","artemisApp.quizExercise.scoringType.proportional_with_penalty"],["value","PROPORTIONAL_WITHOUT_PENALTY","jhiTranslate","artemisApp.quizExercise.scoringType.proportional_without_penalty"],[1,"form-group","match-percentage-container"],["jhiTranslate","artemisApp.quizExercise.answerMatching.title",1,"colon-suffix","no-flex-shrink"],[1,"slider-container"],[1,"slider-with-label"],["type","range","name","similarity-slider","min","50","max","100","step","1","value","85",3,"ngModelChange","id","ngModel"],[1,"form-group","form-check","custom-control","custom-checkbox"],["type","checkbox",1,"form-check-input","custom-control-input",3,"change","id","checked"],["jhiTranslate","artemisApp.quizExercise.matchPercentage.title",1,"form-check-label","custom-control-label",3,"for"],["type","checkbox",1,"form-check-input","custom-control-input",3,"ngModelChange","id","ngModel"],["jhiTranslate","artemisApp.quizExercise.matchLetterCase.title",1,"form-check-label","custom-control-label",3,"for"],[1,"delete-button",3,"click"],["size","2x",3,"icon"],[1,"question-options","question-options-reevaluation","row","align-items-center",2,"width","100%"],[1,"col-12","col-lg-4"],[1,"col-12","col-lg-2"],["title","score","type","number","disabled","",1,"form-control","point-input",2,"width","100%",3,"value"],[1,"col-12","col-lg-6","row","justify-content-lg-end","align-items-start"],[1,"col-8","col-lg-4","form-group"],["jhiTranslate","artemisApp.quizExercise.re-evaluate.setQuestionInvalid",1,"btn","btn-outline-secondary","invalid-button",3,"click","hidden"],["jhiTranslate","artemisApp.quizExercise.re-evaluate.questionIsInvalid",1,"btn","btn-outline-secondary","invalid-button",3,"hidden","disabled"],["id","delete-button",1,"delete-button",3,"click"],[1,"col-12","row","align-items-center","justify-content-center","justify-content-lg-start"],[1,"col-lg-6","row"],[1,"col-12","col-lg-4","form-group","mt-1"],[1,"col-12","col-lg-7"],[2,"display","flex"],["type","range","name","similarity-slider","min","50","max","100","step","1","value","85",2,"width","60%",3,"ngModelChange","id","ngModel"],[2,"margin","0.5rem"],[1,"col-12","col-lg-3",2,"padding","0 0.5rem"],[1,"form-check","custom-control","custom-checkbox"],["type","checkbox",1,"custom-control-input",3,"change","id","checked"],["type","checkbox",1,"custom-control-input",3,"ngModelChange","id","ngModel"],[1,"question-content"],[3,"markdownChange","enableResize","enableFileUpload","showPreviewButton","defaultActions","colorAction","initialEditorHeight","useDefaultMarkdownEditorOptions","markdown"],["cdkDropListGroup","",1,"edit-sa-question",2,"padding","20px"],["jhiTranslate","artemisApp.shortAnswerQuestion.editor.visualModeHeadline"],[1,"sa-question"],[1,"question-options","row","d-flex","justify-content-start"],[1,"col"],[1,"btn","btn-outline-secondary",3,"click"],[1,"fa","fa-plus"],["jhiTranslate","artemisApp.shortAnswerQuestion.addShortAnswerSolution"],["jhiTranslate","artemisApp.shortAnswerQuestion.editor.visualModeExplanation"],["jhiTranslate","artemisApp.shortAnswerQuestion.editor.addSpot",1,"btn","btn-outline-secondary",3,"click"],[1,"short-answer-question-display"],[1,"short-answer-question-display__element"],[1,"short-answer-question-container",3,"id","innerHTML"],["type","text",1,"short-answer-question-container__input",3,"change","id","value","size","maxLength"],[1,"short-answer-question-container"],["cdkDropList","",1,"short-answer-question-container__div-input",3,"cdkDropListDropped"],[3,"ngClass"],[2,"position","absolute","top","-8px","right","-4px","display","inline-flex"],["title","Reset",1,"re-evaluate-button",3,"click"],["size","lg",3,"icon"],["title","Delete",3,"click","ngClass"],["title","Set invalid",1,"re-evaluate-button",3,"click"],[1,"input-group-btn",2,"vertical-align","top"],[1,"dnd-instructions"],["jhiTranslate","artemisApp.dragAndDropQuestion.addDragItemsInstructions"],["jhiTranslate","artemisApp.dragAndDropQuestion.addMappingsInstructions"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"drag-items"],["cdkDrag","",1,"drag-item",3,"cdkDragDisabled","cdkDragData"],[3,"ngModelChange","ngModel"],["title","Delete",1,"delete-button",3,"click"],["title","Move",1,"drag-handle","drag-handle-wrapper"],["size","lg",1,"drag-handle",3,"icon"],[1,"mapping-numbers-wrapper"],[4,"cdkDragPlaceholder"],["style","border: 1px solid; background: #fafafa; padding: 4px 2px 2px 2px",4,"cdkDragPreview"],[1,"unlink-mapping",3,"click"],[2,"border","1px solid","background","#fafafa","padding","4px 2px 2px 2px"],["title","Move"],["disabled","",3,"ngModelChange","ngModel"],[1,"toolbar"],[1,"btn-group"],["jhiTranslate","artemisApp.shortAnswerQuestion.editor.text",1,"btn","btn-outline-secondary","active"],["id","short-answer-show-visual","jhiTranslate","artemisApp.shortAnswerQuestion.editor.visual",1,"btn","btn-outline-secondary",3,"click"],["id","short-answer-show-text","jhiTranslate","artemisApp.shortAnswerQuestion.editor.text",1,"btn","btn-outline-secondary",3,"click"],["jhiTranslate","artemisApp.shortAnswerQuestion.editor.visual",1,"btn","btn-outline-secondary","active"]],template:function(n,i){n&1&&(s(0,"div",3),t(1,`
    `),E(2,un,32,9)(3,mn,71,26),s(4,"div",4),t(5,`
        `),E(6,gn,54,11)(7,hn,99,15),s(8,"div",5),t(9,`
            `),E(10,_n,7,8),a(),t(11,`
        `),E(12,Ln,45,7),c(13,"hr"),t(14,`
        `),E(15,zn,11,0)(16,Un,11,0),a(),t(17,`
`),a(),t(18,`
`)),n&2&&(l(2),w(i.reEvaluationInProgress?-1:2),l(),w(i.reEvaluationInProgress?3:-1),l(),X("id","collapseQuestion",i.questionIndex,""),x("ngbCollapse",i.isQuestionCollapsed),l(2),w(i.reEvaluationInProgress?-1:6),l(),w(i.reEvaluationInProgress?7:-1),l(),x("hidden",i.showVisualMode),l(2),w(i.reEvaluationInProgress?-1:10),l(2),w(i.showVisualMode||i.reEvaluationInProgress?12:-1),l(3),w(!i.showVisualMode&&!i.reEvaluationInProgress?15:-1),l(),w(i.showVisualMode&&!i.reEvaluationInProgress?16:-1))},dependencies:[$,vt,ft,wt,mt,ht,Ae,ut,_t,xt,Et,Ct,gt,Z,At,bt,Zt,ti,Rt,Nt,Ot,pt,Ut,Bt,jt,Vt],styles:[`.edit-sa-question .short-answer-question-display{display:flex;flex-wrap:wrap;max-width:100%}.edit-sa-question .short-answer-question-display__element{display:inline-flex}.edit-sa-question .short-answer-question-display .short-answer-question-container{display:inline-block;position:relative}.edit-sa-question .short-answer-question-display .short-answer-question-container__input{border:1px solid var(--sa-question-container-input-border);line-height:35px;margin-bottom:10px}.edit-sa-question .short-answer-question-display .short-answer-question-container__div-input{background-color:var(--sa-question-container-input-background);border:1px solid var(--sa-question-container-input-border);padding:2px 3px;width:170px;height:40px}.edit-sa-question .match-percentage-container{display:flex;justify-content:center;align-items:center;width:60%;border:1px solid var(--sa-question-container-input-border)}.edit-sa-question .match-percentage-container .slider-container{display:flex;justify-content:center;width:45%}.edit-sa-question .match-percentage-container .slider-container .slider-with-label{width:80%;display:flex;justify-content:center;align-items:center;min-width:50px}.edit-sa-question .match-percentage-container .slider-container .slider-with-label input[type=range]{cursor:pointer;margin:auto;width:70%}.edit-sa-question .match-percentage-container .slider-container .slider-with-label p{margin:0 10px;min-width:40px}.edit-sa-question .question-card-header{width:100%;padding:15px 5px 5px}.edit-sa-question .question-card-header .row{width:100%}.edit-sa-question .question-card-header .question-collapse{width:3.25rem}.edit-sa-question .question-card-header-reevaluation{width:100%;padding:0}.edit-sa-question .question-card-header-reevaluation .row{width:100%}.edit-sa-question .question-card-header-reevaluation .question-collapse{width:3.25rem}.edit-sa-question .card-body .question-options-reevaluation .form-group{display:flex;align-items:center;margin:0 5px 15px}.edit-sa-question .card-body .question-options-reevaluation .form-control:disabled{background-color:var(--gray-200)}.edit-sa-question .card-body .question-options-reevaluation .form-group>*{margin:0 4px}.edit-sa-question .card-body .question-options-reevaluation .form-check{display:block;align-items:center;padding-left:0}.edit-sa-question .card-body .invalid-button{width:100%;text-overflow:ellipsis;overflow:hidden}.edit-sa-question .card-body .delete-button{cursor:pointer}.edit-sa-question .card-body .delete-button:hover{color:var(--red)}
`,`.edit-dnd-question .dnd-instructions,.edit-sa-question .dnd-instructions{display:flex;justify-content:space-between;margin:10px 0;font-weight:500}.edit-dnd-question .drag-items,.edit-sa-question .drag-items{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;margin:6px 0;width:100%;background:var(--quiz-drag-items-background)!important}.edit-dnd-question .drag-items .drag-item,.edit-sa-question .drag-items .drag-item{border:1px solid var(--quiz-drag-item-border);background:var(--quiz-drag-item-background);color:var(--quiz-drag-item-color);height:160px;position:relative;min-width:160px;max-width:360px;margin:10px 4px}.edit-dnd-question .drag-items .drag-item textarea,.edit-sa-question .drag-items .drag-item textarea{position:absolute;left:0;top:30px;width:158px;height:98px;padding:0 14px;text-align:center;border:none;resize:none;background:var(--quiz-drag-item-background);color:var(--quiz-drag-item-color)}.edit-dnd-question .drag-items .drag-item textarea:focus,.edit-sa-question .drag-items .drag-item textarea:focus{z-index:3}.edit-dnd-question .drag-items .drag-item .delete-button,.edit-sa-question .drag-items .drag-item .delete-button{position:absolute;top:4px;right:2px}.edit-dnd-question .drag-items .drag-item .delete-button .re-evaluate-button,.edit-sa-question .drag-items .drag-item .delete-button .re-evaluate-button{display:inline-block;padding:2px}.edit-dnd-question .drag-items .drag-item .dimensions,.edit-sa-question .drag-items .drag-item .dimensions{position:absolute;left:2px;bottom:0;font-size:14px}.edit-dnd-question .drag-items .drag-item .drag-handle-wrapper,.edit-sa-question .drag-items .drag-item .drag-handle-wrapper{position:absolute;top:4px;left:2px;cursor:pointer;display:flex;align-items:center;padding:4px}.edit-dnd-question .re-evaluate-button,.edit-sa-question .re-evaluate-button{display:inline-block;padding:4px}.edit-dnd-question .re-evaluate-button:hover,.edit-sa-question .re-evaluate-button:hover{color:#00f}.edit-dnd-question .markupEditorArea,.edit-sa-question .markupEditorArea{margin-bottom:14px}.edit-dnd-question .markupEditorArea .markdown-editor,.edit-sa-question .markupEditorArea .markdown-editor{border:1px solid var(--border-color)}.edit-dnd-question .mapping-numbers-wrapper,.edit-sa-question .mapping-numbers-wrapper{position:absolute;display:flex;justify-content:space-evenly;align-items:center;bottom:0;left:0;right:0;-webkit-transform:translate3d(0,8px,0);-moz-transform:translate3d(0,8px,0);-ms-transform:translate3d(0,8px,0);-o-transform:translate3d(0,8px,0);transform:translate3d(0,8px,0)}.edit-dnd-question .mapping-numbers-wrapper .mapping-number,.edit-sa-question .mapping-numbers-wrapper .mapping-number{position:static;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translateZ(0)}.edit-dnd-question .mapping-number,.edit-sa-question .mapping-number{position:absolute;z-index:2;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);-moz-transform:translate3d(-50%,-50%,0);-ms-transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);width:30px;height:30px;line-height:30px;background-color:#696969;color:var(--quiz-mapping-letter-number-mixin-color);border-radius:50%;text-align:center}.edit-dnd-question .mapping-number .unlink-mapping,.edit-sa-question .mapping-number .unlink-mapping{position:absolute;left:0;top:0;width:100%;height:100%;line-height:30px;color:#fff;background-color:#00000080;cursor:pointer;border-radius:50%;text-align:center;opacity:0}.edit-dnd-question .mapping-number .unlink-mapping:hover,.edit-sa-question .mapping-number .unlink-mapping:hover{opacity:1}.edit-dnd-question .mapping-color-1,.edit-sa-question .mapping-color-1{background:#2980b9}.edit-dnd-question .mapping-color-2,.edit-sa-question .mapping-color-2{background:#c0392b}.edit-dnd-question .mapping-color-3,.edit-sa-question .mapping-color-3{background:#27ae60}.edit-dnd-question .mapping-color-4,.edit-sa-question .mapping-color-4{background:#f1c40f}.edit-dnd-question .mapping-color-5,.edit-sa-question .mapping-color-5{background:#e67e22}.edit-dnd-question .mapping-color-6,.edit-sa-question .mapping-color-6{background:#8e44ad}.edit-dnd-question .mapping-color-7,.edit-sa-question .mapping-color-7{background:#1abc9c}.edit-dnd-question .mapping-color-0,.edit-sa-question .mapping-color-0{background:#2c3e50}.cdk-drag-preview img{max-height:158px;max-width:160px}.cdk-drag-preview textarea{text-align:center;border:none;resize:none}.cdk-drop-list-receiving{background:#add8e6cc!important}.cdk-drop-list-dragging{background:#90ee90!important;cursor:pointer!important}.cdk-drag{cursor:pointer}
`,`.question-options{display:flex;align-items:center;justify-content:space-between;width:100%}.question-options input,.question-options .input-group-btn{display:inline-block;width:1rem}.question-options .datepicker-input{max-width:140px}.question-options .checkbox{display:inline-block}.question-options .input-group>input{height:100%}.question-options .form-group{display:flex;align-items:center;margin:0 5px 15px}.question-options .form-group>*{margin:0 4px}.question-options .background-file{display:flex}.edit-quiz-footer-content{height:100%;display:flex;align-items:center;justify-content:space-between}.edit-quiz-footer-content .form-control,.edit-quiz-footer-content .input-group-btn{width:auto}.edit-quiz-footer-content .form-group{display:flex;align-items:center}.edit-quiz-footer-content .form-group>*{margin:0 4px}.edit-quiz-footer-content .invalid-reasons-tooltip .tooltip-inner{text-align:left;max-width:300px}.edit-quiz-footer-content .invalid-reasons-tooltip .tooltip-inner p{margin:4px 0;padding:4px}.edit-quiz-footer-content #remaining-time{text-align:center;width:100%}.edit-quiz-footer-content #remaining-time>div{text-align:center;width:100%}.edit-quiz-footer-content #remaining-time-value{font-weight:700;white-space:nowrap}.edit-quiz-footer-content #quiz-score{text-align:center;font-weight:700;color:green}.edit-quiz-footer-content #quiz-score.incorrect{color:#000}.edit-quiz-footer-content .time-warning{color:orange}.edit-quiz-footer-content .time-critical{color:red}@media (max-width: 767.98px){.edit-quiz-footer-content .connection-status-quiz{font-size:11px}}@media (max-width: 767.98px){.edit-quiz-footer-content{font-size:12px}}
`],encapsulation:2})}return o})();export{Yt as a,Bn as b,Xn as c,Zt as d,$t as e,ro as f,Jo as g,ns as h};
//# sourceMappingURL=chunk-AWTDBAYB.js.map
