import{a as Ee}from"./chunk-UFNSBNWD.js";import"./chunk-AWTDBAYB.js";import{b as Pe,c as be}from"./chunk-TDXQOKRD.js";import"./chunk-F75WZTS2.js";import"./chunk-2SI4Q343.js";import{a as F}from"./chunk-4YACL3TM.js";import{a as W}from"./chunk-IJQAYIKN.js";import"./chunk-DMHWBHTD.js";import"./chunk-57BCHYEO.js";import{b as y}from"./chunk-IJRVZ46L.js";import"./chunk-SUUJN3EQ.js";import"./chunk-MD22LTSS.js";import"./chunk-RKZRHQUL.js";import"./chunk-GAUWMTOK.js";import"./chunk-RTOKZMYN.js";import"./chunk-5QODR5GQ.js";import"./chunk-RNPAFOPW.js";import{a as ze,b as Qe,d as qe,e as Ce,f as ve}from"./chunk-KZGAUMRM.js";import"./chunk-656XE4CO.js";import"./chunk-YGSJB6WY.js";import"./chunk-O2WHE2S3.js";import"./chunk-JJUII2KT.js";import"./chunk-U4DJRHYQ.js";import"./chunk-DIZEKHOC.js";import"./chunk-V7PDYRDZ.js";import"./chunk-EANMTTQG.js";import"./chunk-PNTOXB52.js";import"./chunk-EGRHWZRV.js";import"./chunk-MBS3WUDO.js";import"./chunk-BNRTXX46.js";import"./chunk-Z2YUBN6N.js";import"./chunk-OTCBNILH.js";import"./chunk-AO5E7TEY.js";import{a as fe}from"./chunk-BIK4CL5A.js";import"./chunk-VRAVBLUK.js";import{b as _e}from"./chunk-T624HJJL.js";import"./chunk-HQTS6JOY.js";import"./chunk-HMZID6NQ.js";import"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import"./chunk-VWRLJYRR.js";import"./chunk-35PLMJNP.js";import"./chunk-QH7SWO42.js";import"./chunk-P2M2VQE3.js";import"./chunk-GXOKLIFX.js";import"./chunk-5JBXU6VG.js";import"./chunk-4I367PEU.js";import"./chunk-ZPITQMA6.js";import"./chunk-VL2AJDYR.js";import"./chunk-2CSD5TLZ.js";import"./chunk-ZM53HDCE.js";import"./chunk-MKPB4JKY.js";import"./chunk-I76AVIQH.js";import"./chunk-H2ETPEH6.js";import"./chunk-Z6NSEM73.js";import"./chunk-AR57MWOI.js";import"./chunk-A5PTZAPN.js";import"./chunk-AU6UEH3U.js";import"./chunk-FGAONQTL.js";import"./chunk-HQ6UGNQX.js";import"./chunk-ZLJ76G5I.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import{c as L}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import{a as ge}from"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import"./chunk-CT44YL7Q.js";import"./chunk-YLNI6ED3.js";import"./chunk-ZFM7LHJQ.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import{K as ce}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as me,b as pe,h as ue,m as de}from"./chunk-WA5GEAJB.js";import"./chunk-DRSQQEUE.js";import"./chunk-7XXWL6ER.js";import"./chunk-VK7JPHFE.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import"./chunk-K3W6YFKH.js";import"./chunk-TL3DYXRE.js";import{c as I}from"./chunk-JXJXC4DZ.js";import{d as k}from"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import{p as se}from"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{G,Lc as xe,Oc as he}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as A}from"./chunk-U54OSGNH.js";import{f as le}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{O as re,s as oe,z as ae}from"./chunk-IOA4DPXY.js";import{Db as s,Dc as E,Ea as _,Ed as U,Id as ne,La as K,Ma as h,Mc as f,Na as g,Oc as l,Rc as D,Tb as b,Va as w,Yc as R,Zb as x,Zc as j,_c as O,cd as S,dd as e,ed as Q,f as B,fd as P,kc as m,ld as J,md as X,nd as Y,pd as Z,rd as ee,sc as c,sd as te,td as ie,uc as q,vc as C,wc as v,xc as a,ya as H,yc as r,yd as T,zc as d,zd as M}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var V=class{id;exam;quizGroups=[];quizQuestions=[];maxPoints=0;randomizeQuestionOrder=!1};var Se=(()=>{class n{http=_(re);update(t,i,o,u){let z=ge(u);return this.http.put(`api/quiz/courses/${t}/exams/${i}/quiz-pools`,o,{params:z,observe:"response"})}find(t,i){return this.http.get(`api/quiz/courses/${t}/exams/${i}/quiz-pools`,{observe:"response"})}static \u0275fac=function(i){return new(i||n)};static \u0275prov=H({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var N=class{id;name};function De(n,p){if(n&1&&(e(0,`
                    `),a(1,"div",2),e(2,`
                        `),a(3,"div",3),e(4),r(),e(5,`
                        `),a(6,"div",4),e(7,"MC"),r(),e(8,`
                        `),a(9,"div",5),e(10),r(),e(11,`
                    `),r(),e(12,`
                `)),n&2){let t=l().$implicit;s(4),P(`
                            `,t.title,`
                        `),s(6),Q(t.points)}}function Te(n,p){if(n&1&&(e(0,`
                    `),a(1,"div",2),e(2,`
                        `),a(3,"div",6),e(4),r(),e(5,`
                        `),a(6,"div",7),e(7,"DnD"),r(),e(8,`
                        `),a(9,"div",8),e(10),r(),e(11,`
                    `),r(),e(12,`
                `)),n&2){let t=l().$implicit;s(4),P(`
                            `,t.title,`
                        `),s(6),Q(t.points)}}function Me(n,p){if(n&1&&(e(0,`
                    `),a(1,"div",2),e(2,`
                        `),a(3,"div",9),e(4),r(),e(5,`
                        `),a(6,"div",10),e(7,"SA"),r(),e(8,`
                        `),a(9,"div",11),e(10),r(),e(11,`
                    `),r(),e(12,`
                `)),n&2){let t=l().$implicit;s(4),P(`
                            `,t.title,`
                        `),s(6),Q(t.points)}}function Ge(n,p){if(n&1&&(e(0,`
        `),a(1,"div",1),e(2,`
            `),x(3,De,13,2)(4,Te,13,2)(5,Me,13,2),e(6,`
        `),r(),e(7,`
    `)),n&2){let t,i=p.$implicit,o=l();s(),m("cdkDragDisabled",o.disabled),s(2),c((t=i.type)===o.MULTIPLE_CHOICE?3:t===o.DRAG_AND_DROP?4:t===o.SHORT_ANSWER?5:-1)}}var ye=(()=>{class n{quizQuestions;disabled=!1;onQuizQuestionDropped=new w;MULTIPLE_CHOICE=y.MULTIPLE_CHOICE;DRAG_AND_DROP=y.DRAG_AND_DROP;SHORT_ANSWER=y.SHORT_ANSWER;handleOnDropQuestion(t){t.previousContainer===t.container?ze(t.container.data,t.previousIndex,t.currentIndex):Qe(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex);let i=t.container.data[t.currentIndex];this.onQuizQuestionDropped.emit(i)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=b({type:n,selectors:[["jhi-quiz-pool-mapping-question-list"]],inputs:{quizQuestions:"quizQuestions",disabled:"disabled"},outputs:{onQuizQuestionDropped:"onQuizQuestionDropped"},decls:5,vars:1,consts:[["cdkDropList","","cdkDropListOrientation","horizontal",1,"question-list","d-flex","flex-row","flex-wrap",3,"cdkDropListDropped","cdkDropListData"],["cdkDrag","",1,"text-center","mx-1","my-1",3,"cdkDragDisabled"],[1,"d-flex","flex-wrap"],[1,"question","px-2","my-0","border-info"],[1,"question-type","bg-info","text-white"],[1,"question-points","border-info"],[1,"question","px-2","my-0","border-warning"],[1,"question-type","bg-warning","text-white"],[1,"question-points","border-warning"],[1,"question","px-2","my-0","border-success"],[1,"question-type","bg-success","text-white"],[1,"question-points","border-success"]],template:function(i,o){i&1&&(a(0,"div",0),f("cdkDropListDropped",function(z){return o.handleOnDropQuestion(z)}),e(1,`
    `),C(2,Ge,8,2,null,null,q),r(),e(4,`
`)),i&2&&(m("cdkDropListData",o.quizQuestions),s(2),v(o.quizQuestions))},dependencies:[ve,qe],styles:[`.question-list{min-height:2.5rem}.cdk-drag{cursor:pointer;height:2rem;line-height:1.8rem}.cdk-drag .question{width:8rem!important;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;background:var(--text-editor-background);color:var(--text-editor-color)}.cdk-drag .question-type{width:3rem;font-weight:700}.cdk-drag .question-points{width:2rem;background:var(--text-editor-background);color:var(--text-editor-color)}.border-info{border:1px solid var(--cyan)}.border-warning{border:1px solid var(--yellow)}.border-success{border:1px solid var(--green)}.cdk-drop-list-dragging{background:var(--dnd-question-drop-list-dragging-background)!important;cursor:pointer}.cdk-drop-list-dragging .cdk-drag{transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag-placeholder{opacity:0}.cdk-drop-list-receiving{background:var(--dnd-question-drop-list-receiving-background)!important}
`],encapsulation:2})}return n})();var Ie=n=>({display:n});function ke(n,p){if(n&1){let t=E();e(0,`
            `),a(1,"div",9),e(2,`
                `),d(3,"label",10),e(4,`
                `),d(5,"input",11,0),e(7,`
            `),r(),e(8,`
            `),a(9,"div",12),e(10,`
                `),a(11,"a",13),f("click",function(){h(t);let o=S(6);return l().addGroup(o.value),g(o.value="")}),e(12,`
                    `),d(13,"fa-icon",4),e(14,`
                    `),d(15,"span",14),e(16,`
                `),r(),e(17,`
            `),r(),e(18,`
        `)}if(n&2){let t=l();s(13),m("icon",t.faPlus)}}function Ae(n,p){if(n&1){let t=E();e(0,`
                                    `),a(1,"button",20),f("delete",function(){h(t);let o=l().$index,u=l(2);return g(u.deleteGroup(o))}),e(2,`
                                        `),d(3,"fa-icon",4),e(4,`
                                    `),r(),e(5,`
                                `)}if(n&2){let t=l().$implicit,i=l(2);s(),m("entityTitle",t.name)("dialogError",i.dialogError$),s(2),m("icon",i.faTimes)}}function Ve(n,p){if(n&1){let t=E();e(0,`
                        `),a(1,"tr"),e(2,`
                            `),a(3,"td"),e(4),r(),e(5,`
                            `),a(6,"td"),e(7,`
                                `),a(8,"jhi-quiz-pool-mapping-question-list",8),f("onQuizQuestionDropped",function(o){let u=h(t).$implicit,z=l(2);return g(z.handleOnQuizQuestionDropped(o,u))}),r(),e(9,`
                            `),r(),e(10,`
                            `),a(11,"td"),e(12,`
                                `),x(13,Ae,6,3),r(),e(14,`
                        `),r(),e(15,`
                    `)}if(n&2){let t=p.$implicit,i=l(2);s(4),Q(t.name),s(4),m("disabled",i.disabled)("quizQuestions",i.quizGroupNameQuestionsMap.get(t.name)),s(5),c(i.disabled?-1:13)}}function Ne(n,p){if(n&1&&(e(0,`
        `),a(1,"div",15),e(2,`
            `),a(3,"table",16),e(4,`
                `),a(5,"thead"),e(6,`
                    `),a(7,"tr"),e(8,`
                        `),a(9,"th"),e(10,`
                            `),d(11,"span",17),e(12,`
                        `),r(),e(13,`
                        `),a(14,"th",18),e(15,`
                            `),d(16,"span",19),e(17,`
                        `),r(),e(18,`
                        `),d(19,"th"),e(20,`
                    `),r(),e(21,`
                `),r(),e(22,`
                `),a(23,"tbody"),e(24,`
                    `),C(25,Ve,16,4,null,null,q),r(),e(27,`
            `),r(),e(28,`
        `),r(),e(29,`
    `)),n&2){let t=l();s(25),v(t.quizGroups)}}function Re(n,p){if(n&1&&(e(0,`
            `),a(1,"div"),e(2,`
                `),d(3,"fa-icon",4),e(4,`
                `),d(5,"span",21),e(6,`
            `),r(),e(7,`
        `)),n&2){let t=l();s(3),m("icon",t.faExclamationCircle)}}var we=(()=>{class n{alertService=_(I);quizGroups=[];quizQuestions=[];disabled=!1;onQuizGroupUpdated=new w;onQuizQuestionDropped=new w;quizGroupNameQuestionsMap=new Map;unmappedQuizQuestions=[];faPlus=xe;faTimes=he;faExclamationCircle=G;dialogErrorSource=new B;dialogError$=this.dialogErrorSource.asObservable();ngOnInit(){this.handleUpdate()}ngOnChanges(){this.handleUpdate()}ngOnDestroy(){this.dialogErrorSource.unsubscribe()}handleOnQuizQuestionDropped(t,i){t.quizGroup=i,this.onQuizQuestionDropped.emit()}addGroup(t){if(t.length==0)this.alertService.error("artemisApp.quizPool.invalidReasons.groupNameEmpty");else if(t.length>100)this.alertService.error("artemisApp.quizPool.invalidReasons.groupNameLength");else if(this.quizGroupNameQuestionsMap.has(t))this.alertService.error("artemisApp.quizPool.invalidReasons.groupSameName");else{let i=new N;i.name=t,this.quizGroups.push(i),this.quizGroupNameQuestionsMap.set(i.name,new Array),this.onQuizGroupUpdated.emit()}}deleteGroup(t){let i=this.quizGroups[t];for(let o of this.quizGroupNameQuestionsMap.get(i.name))this.addQuestion(o),o.quizGroup=void 0;this.quizGroups.splice(t,1),this.quizGroupNameQuestionsMap.delete(i.name),this.dialogErrorSource.next(""),this.onQuizGroupUpdated.emit()}addQuestion(t){this.unmappedQuizQuestions.push(t)}deleteQuestion(t){let i=t.quizGroup?.name;if(i){let u=this.quizGroupNameQuestionsMap.get(i).filter(z=>z!==t);this.quizGroupNameQuestionsMap.set(i,u)}else this.unmappedQuizQuestions=this.unmappedQuizQuestions.filter(o=>o!==t)}getGroupNamesWithNoQuestion(){let t=new Array;for(let[i,o]of this.quizGroupNameQuestionsMap)o.length==0&&t.push(i);return t}hasGroupsWithNoQuestion(){return this.getGroupNamesWithNoQuestion().length>0}getGroupNamesWithDifferentQuestionPoints(){let t=new Array;for(let[i,o]of this.quizGroupNameQuestionsMap)o.every(u=>u.points===o[0].points)||t.push(i);return t}hasGroupsWithDifferentQuestionPoints(){return this.getGroupNamesWithDifferentQuestionPoints().length>0}getMaxPoints(){let t=0;for(let i of this.quizGroupNameQuestionsMap.values())i.length>0&&(t+=i[0].points??0);return t+=this.unmappedQuizQuestions.reduce((i,o)=>i+(o.points??0),0),t}handleUpdate(){this.quizGroupNameQuestionsMap=new Map;for(let t of this.quizGroups)this.quizGroupNameQuestionsMap.set(t.name,[]);this.unmappedQuizQuestions=[];for(let t of this.quizQuestions)t.quizGroup?this.quizGroupNameQuestionsMap.get(t.quizGroup.name).push(t):this.unmappedQuizQuestions.push(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=b({type:n,selectors:[["jhi-quiz-pool-mapping"]],inputs:{quizGroups:"quizGroups",quizQuestions:"quizQuestions",disabled:"disabled"},outputs:{onQuizGroupUpdated:"onQuizGroupUpdated",onQuizQuestionDropped:"onQuizQuestionDropped"},features:[K],decls:24,vars:9,consts:[["groupName",""],["cdkDropListGroup",""],[1,"form-group","row"],[1,"mb-2"],[3,"icon"],["jhiTranslate","artemisApp.quizPool.groupExplanation"],[1,"mt-3","mb-5",3,"ngStyle"],[1,"question-list-container","px-3","py-3"],[3,"onQuizQuestionDropped","disabled","quizQuestions"],[1,"col-12","col-lg-10"],["for","groupName","jhiTranslate","artemisApp.quizPool.groupName"],["required","","id","groupName","name","groupName",1,"form-control"],[1,"col-12","col-lg-2","d-flex","align-items-end","mt-2","mt-lg-0"],[1,"btn","btn-primary","text-truncate","w-100",3,"click"],["jhiTranslate","artemisApp.quizPool.addGroup"],[1,"table-wrapper","table-responsive"],[1,"table","table-striped"],["jhiTranslate","artemisApp.quizPool.group"],[1,"w-75"],["jhiTranslate","artemisApp.quizExercise.questions"],["jhiDeleteButton","","deleteQuestion","artemisApp.quizPool.delete.question",1,"delete-group","mb-0",3,"delete","entityTitle","dialogError"],["jhiTranslate","artemisApp.quizPool.dragExplanation"]],template:function(i,o){i&1&&(a(0,"div",1),e(1,`
    `),a(2,"div",2),e(3,`
        `),a(4,"div",3),e(5,`
            `),d(6,"fa-icon",4),e(7,`
            `),d(8,"span",5),e(9,`
        `),r(),e(10,`
        `),x(11,ke,19,1),r(),e(12,`
    `),x(13,Ne,30,0),a(14,"div",6),e(15,`
        `),x(16,Re,8,1),a(17,"div",7),e(18,`
            `),a(19,"jhi-quiz-pool-mapping-question-list",8),f("onQuizQuestionDropped",function(z){return o.handleOnQuizQuestionDropped(z)}),r(),e(20,`
        `),r(),e(21,`
    `),r(),e(22,`
`),r(),e(23,`
`)),i&2&&(s(6),m("icon",o.faExclamationCircle),s(5),c(o.disabled?-1:11),s(2),c(o.quizGroups.length>0?13:-1),s(),m("ngStyle",ee(7,Ie,o.quizQuestions.length>0?"block":"none")),s(2),c(o.disabled?-1:16),s(3),m("disabled",o.disabled)("quizQuestions",o.unmappedQuizQuestions))},dependencies:[Ce,k,A,ye,_e,oe],styles:[".table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{table-layout:fixed;min-width:30rem}.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:5rem;vertical-align:middle}.question-list-container[_ngcontent-%COMP%]{border:1px solid var(--border-color)}"]})}return n})();var je=["quizPoolQuestionMapping"],Oe=["quizQuestionsEdit"],Ue=(n,p,t)=>({index:n,threshold:p,name:t}),Le=(n,p)=>({index:n,name:p});function Fe(n,p){n&1&&(e(0,`
                            `),d(1,"span",24),e(2,`
                        `))}function We(n,p){n&1&&(e(0,`
                            `),d(1,"span",25),e(2,`
                        `))}function $e(n,p){if(n&1&&(e(0,`
                                        `),d(1,"p",26),e(2,`
                                    `)),n&2){let t=l().$implicit;s(),D("jhiTranslate",t.translateKey),m("translateValues",ie(2,Ue,t.translateValues.index,t.translateValues.threshold,t.translateValues.name))}}function Be(n,p){if(n&1&&(e(0,`
                                        `),d(1,"p",27),e(2,`
                                    `)),n&2){let t=l().$implicit;s(),D("jhiTranslate",t.translateKey)}}function He(n,p){if(n&1&&(e(0,`
                                `),a(1,"div"),e(2,`
                                    `),x(3,$e,3,6),T(4,"json"),x(5,Be,3,1),T(6,"json"),r(),e(7,`
                            `)),n&2){let t=p.$implicit;s(3),c(M(4,2,t.translateValues)!=="{}"?3:-1),s(2),c(M(6,4,t.translateValues)==="{}"?5:-1)}}function Ke(n,p){if(n&1&&(e(0,`
                            `),C(1,He,8,6,null,null,q)),n&2){let t=l(2);s(),v(t.invalidReasons)}}function Je(n,p){if(n&1&&(e(0,`
                                        `),d(1,"p",26),e(2,`
                                    `)),n&2){let t=l().$implicit;s(),D("jhiTranslate",t.translateKey),m("translateValues",te(2,Le,t.translateValues.index,t.translateValues.name))}}function Xe(n,p){if(n&1&&(e(0,`
                                        `),d(1,"p",27),e(2,`
                                    `)),n&2){let t=l().$implicit;s(),D("jhiTranslate",t.translateKey)}}function Ye(n,p){if(n&1&&(e(0,`
                                `),a(1,"div"),e(2,`
                                    `),x(3,Je,3,5),T(4,"json"),x(5,Xe,3,1),T(6,"json"),r(),e(7,`
                            `)),n&2){let t=p.$implicit;s(3),c(M(4,2,t.translateValues)!=="{}"?3:-1),s(2),c(M(6,4,t.translateValues)==="{}"?5:-1)}}function Ze(n,p){if(n&1&&(e(0,`
                            `),C(1,Ye,8,6,null,null,q)),n&2){let t=l(2);s(),v(t.warningReasons)}}function et(n,p){if(n&1&&(e(0,`
                            `),a(1,"span",28),e(2,`
                                `),d(3,"fa-icon",29),e(4,`
                                `),d(5,"span",30),e(6,`
                                `),a(7,"span"),e(8),r(),e(9,`
                            `),r(),e(10,`
                        `)),n&2){l();let t=S(57),i=l();s(),m("ngbTooltip",t),s(2),m("icon",i.faExclamationCircle),s(5),P("(",i.invalidReasons.length,")")}}function tt(n,p){if(n&1&&(e(0,`
                            `),a(1,"span",31),e(2,`
                                `),d(3,"span",32),e(4,`
                                `),a(5,"span"),e(6),r(),e(7,`
                            `),r(),e(8,`
                        `)),n&2){l();let t=S(60),i=l();s(),m("ngbTooltip",t),s(5),P("(",i.warningReasons.length,")")}}function it(n,p){if(n&1){let t=E();e(0,`
    `),a(1,"div",4),e(2,`
        `),a(3,"div"),e(4,`
            `),d(5,"h4",5),e(6,`
            `),a(7,"h4",6),e(8,`
                `),a(9,"span",7),e(10,`
                    `),d(11,"span",8),e(12,`\xA0
                    `),a(13,"span",9),e(14),r(),e(15,`
                    `),d(16,"span",10),e(17,`
                `),r(),e(18,`
            `),r(),e(19,`
        `),r(),e(20,`
        `),a(21,"div",11),e(22,`
            `),a(23,"jhi-quiz-pool-mapping",12,0),f("onQuizGroupUpdated",function(){h(t);let o=l();return g(o.handleUpdate())})("onQuizQuestionDropped",function(){h(t);let o=l();return g(o.handleUpdate())}),r(),e(25,`
        `),r(),e(26,`
        `),a(27,"div",13),e(28,`
            `),a(29,"div",14),e(30,`
                `),a(31,"input",15),Y("ngModelChange",function(o){h(t);let u=l();return X(u.quizPool.randomizeQuestionOrder,o)||(u.quizPool.randomizeQuestionOrder=o),g(o)}),f("ngModelChange",function(){h(t);let o=l();return g(o.handleUpdate())}),r(),e(32,`
                `),d(33,"label",16),e(34,`
            `),r(),e(35,`
        `),r(),e(36,`
        `),a(37,"div",11),e(38,`
            `),a(39,"div",17),e(40,`
                `),a(41,"jhi-quiz-question-list-edit",18,1),f("onQuestionAdded",function(o){h(t);let u=l();return g(u.handleQuestionAdded(o))})("onQuestionDeleted",function(o){h(t);let u=l();return g(u.handleQuestionDeleted(o))})("onQuestionUpdated",function(){h(t);let o=l();return g(o.handleUpdate())}),r(),e(43,`
            `),r(),e(44,`
        `),r(),e(45,`
        `),a(46,"div",19),e(47,`
            `),a(48,"div",20),e(49,`
                `),a(50,"div",21),e(51,`
                    `),a(52,"div",22),e(53,`
                        `),x(54,Fe,3,0)(55,We,3,0)(56,Ke,3,0,"ng-template",null,2,U),e(58,`
                        `),x(59,Ze,3,0,"ng-template",null,3,U),e(61,`
                        `),x(62,et,11,3)(63,tt,9,2),a(64,"button",23),f("click",function(){h(t);let o=l();return g(o.save())}),r(),e(65,`
                    `),r(),e(66,`
                `),r(),e(67,`
            `),r(),e(68,`
        `),r(),e(69,`
    `),r(),e(70,`
`)}if(n&2){let t=S(57),i=l();s(14),Q(i.quizPool.maxPoints),s(9),m("quizGroups",i.quizPool.quizGroups)("quizQuestions",i.quizPool.quizQuestions)("disabled",i.isExamStarted),s(8),J("ngModel",i.quizPool.randomizeQuestionOrder),s(10),m("courseId",i.courseId)("quizQuestions",i.quizPool.quizQuestions)("disabled",i.isExamStarted),s(13),c(i.hasPendingChanges&&i.isValid&&!i.isSaving?54:-1),s(),c(i.isSaving?55:-1),s(7),c(i.isValid?-1:62),s(),c(i.warningReasons.length>0?63:-1),s(),m("disabled",i.isSaving||!i.hasPendingChanges||!i.isValid||i.isExamStarted)("ngbTooltip",i.isValid?"":t)}}var oi=(()=>{class n{route=_(le);quizPoolService=_(Se);examService=_(fe);changeDetectorRef=_(ne);dragAndDropQuestionUtil=_(F);shortAnswerQuestionUtil=_(W);alertService=_(I);quizPoolMappingComponent;quizQuestionsEditComponent;faExclamationCircle=G;quizPool;savedQuizPool;isSaving;isValid;hasPendingChanges;invalidReasons=[];warningReasons=[];courseId;examId;isExamStarted;ngOnInit(){this.courseId=Number(this.route.snapshot.paramMap.get("courseId")),this.examId=Number(this.route.snapshot.paramMap.get("examId")),this.checkIfExamStarted(),this.initializeQuizPool()}handleQuestionAdded(t){this.quizPoolMappingComponent.addQuestion(t),this.handleUpdate()}handleQuestionDeleted(t){this.quizPoolMappingComponent.deleteQuestion(t),this.handleUpdate()}save(){if(!this.hasPendingChanges||!this.isValid)return;this.isSaving=!0,this.quizQuestionsEditComponent.parseAllQuestions();let t={};this.quizPool.maxPoints=this.quizPoolMappingComponent.getMaxPoints(),this.quizPoolService.update(this.courseId,this.examId,this.quizPool,t).subscribe({next:i=>{i.body?this.onSaveSuccess(i.body):this.onSaveError()},error:()=>this.onSaveError()})}checkIfExamStarted(){this.examService.find(this.courseId,this.examId).subscribe({next:t=>{let i=t.body;this.isExamStarted=i.startDate?i.startDate.isBefore(se()):!1,this.changeDetectorRef.detectChanges()},error:t=>{L(this.alertService,t)}})}initializeQuizPool(){this.quizPoolService.find(this.courseId,this.examId).subscribe({next:t=>{let i=t.body;i?(this.quizPool=i,this.savedQuizPool=JSON.stringify(this.quizPool),this.isValid=!0,this.computeReasons()):(this.quizPool=new V,this.quizPool.quizGroups=[],this.quizPool.quizQuestions=[],this.hasPendingChanges=!1,this.isValid=!0,this.changeDetectorRef.detectChanges())},error:t=>{L(this.alertService,t)}})}handleUpdate(){this.hasPendingChanges=JSON.stringify(this.quizPool)!==this.savedQuizPool,this.isValid=this.isConfigurationValid(),this.computeReasons()}computeReasons(){this.changeDetectorRef.detectChanges(),this.invalidReasons=this.getInvalidReasons(),this.warningReasons=this.getWarningReasons(),this.changeDetectorRef.detectChanges()}isConfigurationValid(){let t=this.quizPool.quizQuestions.every(o=>Pe(o,this.dragAndDropQuestionUtil,this.shortAnswerQuestionUtil)),i=this.quizPool.quizQuestions?.map(o=>o.points??0).reduce((o,u)=>o+u,0);return(this.quizPool.quizQuestions.length===0||t&&i>0)&&!this.quizPoolMappingComponent.hasGroupsWithNoQuestion()&&!this.quizPoolMappingComponent.hasGroupsWithDifferentQuestionPoints()}getInvalidReasons(){let t=new Array;if(this.quizPool.quizQuestions.forEach((i,o)=>{be(t,i,o,this.dragAndDropQuestionUtil,this.shortAnswerQuestionUtil)}),this.quizPoolMappingComponent.hasGroupsWithNoQuestion()){let i=this.quizPoolMappingComponent.getGroupNamesWithNoQuestion();for(let o of i)t.push({translateKey:"artemisApp.quizPool.invalidReasons.groupNoQuestion",translateValues:{name:o}})}if(this.quizPoolMappingComponent.hasGroupsWithDifferentQuestionPoints()){let i=this.quizPoolMappingComponent.getGroupNamesWithDifferentQuestionPoints();for(let o of i)t.push({translateKey:"artemisApp.quizPool.invalidReasons.groupHasDifferentQuestionPoints",translateValues:{name:o}})}return t}getWarningReasons(){let t=new Array;return this.quizPool.quizQuestions.forEach((i,o)=>{i.type===y.MULTIPLE_CHOICE&&i.answerOptions.some(u=>!u.explanation)&&t.push({translateKey:"artemisApp.quizExercise.invalidReasons.explanationIsMissing",translateValues:{index:o+1}})}),t}onSaveSuccess(t){this.isSaving=!1,this.hasPendingChanges=!1,this.quizPool=t,this.savedQuizPool=JSON.stringify(t),this.changeDetectorRef.detectChanges()}onSaveError=()=>{this.alertService.error("artemisApp.quizExercise.saveError"),this.isSaving=!1,this.changeDetectorRef.detectChanges()};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=b({type:n,selectors:[["jhi-quiz-pool"]],viewQuery:function(i,o){if(i&1&&(R(je,5),R(Oe,5)),i&2){let u;j(u=O())&&(o.quizPoolMappingComponent=u.first),j(u=O())&&(o.quizQuestionsEditComponent=u.first)}},features:[Z([F,W])],decls:1,vars:1,consts:[["quizPoolQuestionMapping",""],["quizQuestionsEdit",""],["tooltipTranslate",""],["warningTranslate",""],[1,"row"],["jhiTranslate","artemisApp.quizPool.editTitle",1,"title-container"],[1,"max-score-container"],[1,"badge","bg-info","align-text-top","float-end"],["jhiTranslate","artemisApp.quizExercise.maxScore"],[1,"badge","max-score"],["jhiTranslate","artemisApp.quizExercise.maxScore",1,"sr-only"],[1,"row","mt-3"],[3,"onQuizGroupUpdated","onQuizQuestionDropped","quizGroups","quizQuestions","disabled"],[1,"row","px-3"],[1,"form-check","custom-control","custom-checkbox"],["type","checkbox","id","cbRandomizeOrder",1,"form-check-input","custom-control-input",3,"ngModelChange","ngModel"],["for","cbRandomizeOrder","jhiTranslate","artemisApp.quizExercise.randomizeQuestionOrder",1,"form-check-label","custom-control-label"],[1,"edit-quiz"],[3,"onQuestionAdded","onQuestionDeleted","onQuestionUpdated","courseId","quizQuestions","disabled"],[1,"edit-quiz-footer"],[1,"container"],[1,"edit-quiz-footer-content"],[1,"form-group"],["id","quiz-save","jhiTranslate","entity.action.save","tooltip-placement","top-right auto","tooltip-class","invalid-reasons-tooltip",1,"btn","btn-success",3,"click","disabled","ngbTooltip"],["jhiTranslate","artemisApp.quizExercise.edit.pendingChanges",1,"badge","bg-secondary"],["jhiTranslate","artemisApp.quizExercise.edit.saving",1,"badge","bg-secondary"],[3,"jhiTranslate","translateValues"],[3,"jhiTranslate"],["tooltip-placement","top-right auto",1,"badge","bg-danger",3,"ngbTooltip"],[3,"icon"],["jhiTranslate","artemisApp.quizExercise.edit.invalidInput"],["tooltip-placement","top-right auto",1,"badge","bg-warning",3,"ngbTooltip"],["jhiTranslate","artemisApp.quizExercise.edit.warning"]],template:function(i,o){i&1&&x(0,it,71,14),i&2&&c(o.quizPool?0:-1)},dependencies:[A,we,me,pe,ue,de,Ee,ce,k,ae],styles:[`.title-container{float:left}.max-score-container{float:right}.max-score{background:var(--quiz-exercise-detail-max-score-background);color:var(--quiz-exercise-detail-max-score-color)}.edit-quiz-footer{height:100px;position:sticky;bottom:0;left:0;right:0;z-index:10;border-top:1px solid var(--border-color);background:var(--edit-quiz-footer-background);padding-top:10px}.edit-quiz-footer .container{height:100%}.edit-quiz-footer .container .edit-quiz-footer-content{flex-wrap:wrap}
`,`.question-options{display:flex;align-items:center;justify-content:space-between;width:100%}.question-options input,.question-options .input-group-btn{display:inline-block;width:1rem}.question-options .datepicker-input{max-width:140px}.question-options .checkbox{display:inline-block}.question-options .input-group>input{height:100%}.question-options .form-group{display:flex;align-items:center;margin:0 5px 15px}.question-options .form-group>*{margin:0 4px}.question-options .background-file{display:flex}.edit-quiz-footer-content{height:100%;display:flex;align-items:center;justify-content:space-between}.edit-quiz-footer-content .form-control,.edit-quiz-footer-content .input-group-btn{width:auto}.edit-quiz-footer-content .form-group{display:flex;align-items:center}.edit-quiz-footer-content .form-group>*{margin:0 4px}.edit-quiz-footer-content .invalid-reasons-tooltip .tooltip-inner{text-align:left;max-width:300px}.edit-quiz-footer-content .invalid-reasons-tooltip .tooltip-inner p{margin:4px 0;padding:4px}.edit-quiz-footer-content #remaining-time{text-align:center;width:100%}.edit-quiz-footer-content #remaining-time>div{text-align:center;width:100%}.edit-quiz-footer-content #remaining-time-value{font-weight:700;white-space:nowrap}.edit-quiz-footer-content #quiz-score{text-align:center;font-weight:700;color:green}.edit-quiz-footer-content #quiz-score.incorrect{color:#000}.edit-quiz-footer-content .time-warning{color:orange}.edit-quiz-footer-content .time-critical{color:red}@media (max-width: 767.98px){.edit-quiz-footer-content .connection-status-quiz{font-size:11px}}@media (max-width: 767.98px){.edit-quiz-footer-content{font-size:12px}}
`],encapsulation:2,changeDetection:0})}return n})();export{oi as QuizPoolComponent};
//# sourceMappingURL=quiz-pool.component-25A4N4JR.js.map
