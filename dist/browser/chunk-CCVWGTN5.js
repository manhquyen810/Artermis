import{d as he}from"./chunk-MD22LTSS.js";import{A as O,C as pe,F as ce,a as me}from"./chunk-RKZRHQUL.js";import{a as Ce}from"./chunk-RGQYMQQL.js";import{a as de}from"./chunk-656XE4CO.js";import{n as se}from"./chunk-Z2YUBN6N.js";import{f as re}from"./chunk-GERFCPB6.js";import{s as w,t as S,u as oe,y as ae}from"./chunk-R2SUWIPY.js";import{v as J}from"./chunk-VZRSC3LP.js";import{K as Z,c as X,h as q,m as Y}from"./chunk-WA5GEAJB.js";import{d as le}from"./chunk-EDXSOKK5.js";import{Oc as ie,ia as ee,jc as te,sd as ne,y as $}from"./chunk-Z4VHWOB5.js";import{a as K}from"./chunk-NOBD5HSR.js";import{a as A}from"./chunk-U54OSGNH.js";import{e as U}from"./chunk-PZTBTDSR.js";import{n as B,s as Q}from"./chunk-IOA4DPXY.js";import{Db as s,Dc as y,Ea as b,Ed as P,La as V,Ma as x,Mc as E,Na as g,Oc as c,Tb as _,Va as C,Xb as G,Yc as z,Zb as M,Zc as D,_c as I,cd as T,dd as e,kc as p,ld as N,mc as F,md as H,nd as W,rd as j,sc as h,wb as R,xc as o,yc as a,zc as l}from"./chunk-5LC5EQRR.js";import{h as fe,j as k}from"./chunk-3E746U5Y.js";var L=fe(Ce());var Se=["editorContainer"],be=["resizeContainer"],xe=(()=>{class i{editorContainer;resizeContainer;resizeOptions;umlModel;diagramType;explanation;readOnly=!1;apollonEditor;faGripLines=te;faGripLinesVertical=ee;setupInteract(){this.resizeOptions&&(0,L.default)(".resizable").resizable({edges:{left:!1,right:this.resizeOptions.horizontalResize&&".draggable-right",bottom:this.resizeOptions.verticalResize,top:!1},modifiers:[L.default.modifiers.restrictSize({min:{width:15,height:750},max:{width:2500,height:1e4}})],inertia:!0}).on("resizestart",function(t){t.target.classList.add("card-resizable")}).on("resizeend",function(t){t.target.classList.remove("card-resizable")}).on("resizemove",t=>{let r=t.target;this.resizeOptions.horizontalResize&&(r.style.width=t.rect.width+"px"),this.resizeOptions.verticalResize&&(r.style.height=t.rect.height+"px")})}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=_({type:i,selectors:[["ng-component"]],viewQuery:function(r,n){if(r&1&&(z(Se,5),z(be,5)),r&2){let d;D(d=I())&&(n.editorContainer=d.first),D(d=I())&&(n.resizeContainer=d.first)}},inputs:{resizeOptions:"resizeOptions",umlModel:"umlModel",diagramType:"diagramType",explanation:"explanation",readOnly:"readOnly"},decls:0,vars:0,template:function(r,n){},encapsulation:2})}return i})();var ge=(()=>{class i{readOnly=!1;explanation;explanationChange=new C;maxCharacterCount=3e4;onTextEditorTab=re;onExplanationInput(t){this.explanationChange.emit(t)}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=_({type:i,selectors:[["jhi-modeling-explanation-editor"]],inputs:{readOnly:"readOnly",explanation:"explanation"},outputs:{explanationChange:"explanationChange"},decls:5,vars:4,consts:[["textEditor",""],["for","explanationText","jhiTranslate","artemisApp.modelingSubmission.explanationText"],["id","explanationText",1,"text-editor-textarea",3,"ngModelChange","keydown.tab","maxLength","ngModel","readOnly","disabled"]],template:function(r,n){if(r&1){let d=y();l(0,"label",1),e(1,`
`),o(2,"textarea",2,0),W("ngModelChange",function(m){return x(d),H(n.explanation,m)||(n.explanation=m),g(m)}),E("keydown.tab",function(m){x(d);let f=T(3);return g(n.onTextEditorTab(f,m))})("ngModelChange",function(m){return x(d),g(n.onExplanationInput(m))}),a(),e(4,`
`)}r&2&&(s(2),p("maxLength",n.maxCharacterCount),N("ngModel",n.explanation),p("readOnly",n.readOnly)("disabled",n.readOnly))},dependencies:[A,Z,X,q,Y],styles:["[_nghost-%COMP%]{margin-top:15px}.text-editor-textarea[_ngcontent-%COMP%]{width:100%;height:200px;padding:10px 12px;border:1px solid var(--text-editor-border-color);border-radius:2px;background-color:var(--text-editor-background);color:var(--text-editor-color);resize:none}.text-editor-textarea[_ngcontent-%COMP%]:focus{outline:none;border:1px solid var(--artemis-dark);background-color:var(--text-editor-focus-background);box-shadow:0 0 20px #0000c80a}"]})}return i})();var we=i=>({marginTop:i}),Ae=i=>({"full-screen-margin":i});function Oe(i,u){if(i&1){let t=y();e(0,`
        `),o(1,"div",6),e(2,`
            `),l(3,"h4",7),e(4,`
            `),o(5,"button",8),E("click",function(){let n=x(t).dismiss;return g(n())}),l(6,"span",9),a(),e(7,`
        `),a(),e(8,`
        `),o(9,"div",10),e(10,`
            `),o(11,"table",11),e(12,`
                `),o(13,"tr"),e(14,`
                    `),l(15,"th",12),e(16,`
                    `),l(17,"td",13),e(18,`
                    `),o(19,"td"),l(20,"img",14),a(),e(21,`
                `),a(),e(22,`
                `),o(23,"tr"),e(24,`
                    `),l(25,"th",15),e(26,`
                    `),l(27,"td",16),e(28,`
                    `),o(29,"td"),l(30,"img",17),a(),e(31,`
                `),a(),e(32,`
                `),o(33,"tr"),e(34,`
                    `),l(35,"th",18),e(36,`
                    `),l(37,"td",19),e(38,`
                    `),o(39,"td"),l(40,"img",20),a(),e(41,`
                `),a(),e(42,`
                `),o(43,"tr"),e(44,`
                    `),l(45,"th",21),e(46,`
                    `),o(47,"td",22),e(48,`
                        To delete a class, select it with a single click and either press `),o(49,"code"),e(50,"Delete"),a(),e(51," or "),o(52,"code"),e(53,"Backspace"),a(),e(54,` on your keyboard.
                    `),a(),e(55,`
                `),a(),e(56,`
                `),o(57,"tr"),e(58,`
                    `),l(59,"th",23),e(60,`
                    `),l(61,"td",24),e(62,`
                    `),o(63,"td"),l(64,"img",25),a(),e(65,`
                `),a(),e(66,`
                `),o(67,"tr"),e(68,`
                    `),l(69,"th",26),e(70,`
                    `),l(71,"td",27),e(72,`
                    `),o(73,"td"),l(74,"img",28),a(),e(75,`
                `),a(),e(76,`
                `),o(77,"tr"),e(78,`
                    `),l(79,"th",29),e(80,`
                    `),l(81,"td",30),e(82,`
                    `),o(83,"td"),l(84,"img",31),a(),e(85,`
                `),a(),e(86,`
                `),o(87,"tr"),e(88,`
                    `),l(89,"th",32),e(90,`
                    `),o(91,"td",33),e(92,`
                        With `),o(93,"code"),e(94,"Ctrl+Z"),a(),e(95," and "),o(96,"code"),e(97,"Ctrl+Y"),a(),e(98,` you can undo and redo your changes.
                    `),a(),e(99,`
                `),a(),e(100,`
                `),o(101,"tr"),e(102,`
                    `),l(103,"th",34),e(104,`
                    `),o(105,"td",35),e(106,`
                        With `),o(107,"code"),e(108,"Ctrl+Z"),a(),e(109," and "),o(110,"code"),e(111,"Ctrl+Y"),a(),e(112,` you can undo and redo your changes.
                    `),a(),e(113,`
                `),a(),e(114,`
                `),o(115,"tr"),e(116,`
                    `),l(117,"th",36),e(118,`
                    `),o(119,"td",37),e(120,`
                        With `),o(121,"code"),e(122,"Ctrl+Z"),a(),e(123," and "),o(124,"code"),e(125,"Ctrl+Y"),a(),e(126,` you can undo and redo your changes.
                    `),a(),e(127,`
                `),a(),e(128,`
            `),a(),e(129,`
        `),a(),e(130,`
        `),o(131,"div",38),e(132,`
            `),o(133,"button",39),E("click",function(){let n=x(t).close;return g(n())}),a(),e(134,`
        `),a(),e(135,`
    `)}}function ze(i,u){if(i&1){let t=y();e(0,`
                `),o(1,"button",41),E("click",function(){x(t);let n=c(2),d=T(3);return g(n.open(d))}),e(2,`
                    `),l(3,"fa-icon",42),e(4,`\xA0
                    `),l(5,"span",43),e(6,`
                `),a(),e(7,`
            `)}if(i&2){let t=c(2);s(3),p("icon",t.farQuestionCircle)}}function De(i,u){if(i&1&&(e(0,`
                `),o(1,"div",44),e(2,`
                    `),l(3,"fa-icon",42),e(4,`
                    `),l(5,"span",45),e(6,`
                `),a(),e(7,`
            `)),i&2){let t=c(2);s(3),p("icon",t.faCheck)}}function Ie(i,u){if(i&1&&(e(0,`
                `),o(1,"div",46),e(2,`
                    `),l(3,"fa-icon",42),e(4,`
                    `),l(5,"span",47),e(6,`
                `),a(),e(7,`
            `)),i&2){let t=c(2);s(3),p("icon",t.faTimes)}}function je(i,u){if(i&1&&(e(0,`
                `),o(1,"div",48),e(2,`
                    `),l(3,"fa-icon",49),e(4,`
                    `),l(5,"span",50),e(6,`
                `),a(),e(7,`
            `)),i&2){let t=c(2);s(3),p("icon",t.faCircleNotch)}}function Le(i,u){if(i&1&&(e(0,`
        `),o(1,"div",40),e(2,`
            `),M(3,ze,8,1)(4,De,8,1)(5,Ie,8,1)(6,je,8,1),a(),e(7,`
    `)),i&2){let t=c();s(3),h(!t.readOnly&&t.showHelpButton?3:-1),s(),h(t.savedStatus&&!t.savedStatus.isChanged&&!t.savedStatus.isSaving?4:-1),s(),h(t.savedStatus&&t.savedStatus.isChanged&&!t.savedStatus.isSaving?5:-1),s(),h(t.savedStatus&&t.savedStatus.isSaving?6:-1)}}function ke(i,u){if(i&1&&(e(0,`
            `),o(1,"div",51),e(2,`
                `),l(3,"fa-icon",42),e(4,`
            `),a(),e(5,`
        `)),i&2){let t=c();s(3),p("icon",t.faGripLinesVertical)}}function Ve(i,u){if(i&1&&(e(0,`
            `),o(1,"div",52),e(2,`
                `),l(3,"fa-icon",42),e(4,`
            `),a(),e(5,`
        `)),i&2){let t=c();s(3),p("icon",t.faGripLines)}}function Re(i,u){if(i&1&&(e(0,`
        `),l(1,"div",53),e(2,`
    `)),i&2){let t=c();s(),p("innerHtml",t.readOnlySVG,R)("ngClass",j(2,Ae,t.isFullScreen))}}function Ge(i,u){if(i&1){let t=y();e(0,`
        `),o(1,"jhi-modeling-explanation-editor",54),E("explanationChange",function(n){x(t);let d=c();return g(d.onExplanationInput(n))}),a(),e(2,`
    `)}if(i&2){let t=c();s(),p("explanation",t.explanation)("readOnly",t.readOnly)}}var ft=(()=>{class i extends xe{modalService=b(J);guidedTourService=b(ae);sanitizer=b(U);showHelpButton=!0;withExplanation=!1;savedStatus;onModelChanged=new C;onModelPatch=new C;explanationChange=new C;modelSubscription;modelPatchSubscription;faCheck=ne;faTimes=ie;faCircleNotch=$;farQuestionCircle=se;htmlScroll=0;mouseDownListener;scrollListener;readonlyApollonDiagram;readOnlySVG;constructor(){super()}ngAfterViewInit(){return k(this,null,function*(){this.initializeApollonEditor(),this.readOnly?(yield this.apollonEditor?.nextRender,this.readonlyApollonDiagram=yield this.apollonEditor?.exportAsSVG(),this.readonlyApollonDiagram?.svg&&(this.readOnlySVG=this.sanitizer.bypassSecurityTrustHtml(this.readonlyApollonDiagram.svg)),this.destroyApollonEditor()):(this.guidedTourService.checkModelingComponent().subscribe(t=>{t&&this.assessModelForGuidedTour(t,this.getCurrentModel())}),this.setupInteract(),this.setupSafariScrollFix())})}initializeApollonEditor(){this.apollonEditor&&(this.apollonEditor.unsubscribeFromModelChange(this.modelSubscription),this.apollonEditor.unsubscribeFromModelChangePatches(this.modelPatchSubscription),this.apollonEditor.destroy()),i.removeAssessments(this.umlModel),this.editorContainer&&(this.apollonEditor=new he(this.editorContainer.nativeElement,{model:this.umlModel,mode:ce.Modelling,readonly:this.readOnly,type:this.diagramType||me.ClassDiagram,scale:.8}),this.modelSubscription=this.apollonEditor.subscribeToModelChange(t=>{this.onModelChanged.emit(t)}),this.modelPatchSubscription=this.apollonEditor.subscribeToModelChangePatches(t=>{this.onModelPatch.emit(t)}))}setupSafariScrollFix(){let t=/Safari/i.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)&&!/Mobi|Android/i.test(navigator.userAgent);this.readOnly||!t||(console.log("Warning: Installing hack to prevent UI scroll jumps in Safari while using Apollon!"),console.log("Warning: If you experience problems regarding the scrolling behavior, please report them at https://github.com/ls1intum/Artemis"),this.mouseDownListener=()=>{if(document.getElementsByTagName("html")[0].scrollTop!==this.htmlScroll){let n=this.htmlScroll;requestAnimationFrame(()=>window.scrollTo({top:n,left:0,behavior:"instant"}))}},this.scrollListener=()=>{this.htmlScroll=document.getElementsByTagName("html")[0].scrollTop},document.addEventListener("mousedown",this.mouseDownListener),document.addEventListener("scroll",this.scrollListener))}destroyApollonEditor(){this.apollonEditor&&(this.modelSubscription&&this.apollonEditor.unsubscribeFromModelChange(this.modelSubscription),this.modelPatchSubscription&&this.apollonEditor.unsubscribeFromModelChangePatches(this.modelPatchSubscription),this.apollonEditor.destroy(),this.apollonEditor=void 0),this.mouseDownListener&&(document.removeEventListener("mousedown",this.mouseDownListener),document.removeEventListener("scroll",this.scrollListener))}get isApollonEditorMounted(){return this.apollonEditor!=null}static removeAssessments(t){t&&(t.assessments={})}getCurrentModel(){let t=this.apollonEditor.model;return i.removeAssessments(t),t}open(t){this.modalService.open(t,{size:"lg"})}ngOnChanges(t){t.diagramType&&this.initializeApollonEditor(),t.umlModel&&t.umlModel.currentValue&&this.apollonEditor&&(this.umlModel=t.umlModel.currentValue,i.removeAssessments(this.umlModel),this.apollonEditor.model=this.umlModel)}ngOnDestroy(){try{this.destroyApollonEditor()}catch(t){K(t)}}assessModelForGuidedTour(t,r){let n=this.elementWithClass(w.name,r),d=this.elementWithClass(S.name,r),v;switch(t){case w.name:{let m=this.elementWithAttribute(w.attribute,r),f=n&&m?m.owner===n.id:!1;this.guidedTourService.updateModelingResult(t,f);break}case S.name:{let m=this.elementWithAttribute(S.attribute,r),f=this.elementWithMethod(S.method,r),Ee=d&&m&&f?m.owner===d.id&&f.owner===d.id:!1;this.guidedTourService.updateModelingResult(t,Ee);break}case oe.name:{v=Object.values(r.relationships).find(m=>m.source.element===d.id&&m.target.element===n.id&&m.type===pe.ClassInheritance),this.guidedTourService.updateModelingResult(t,!!v);break}}}elementWithClass(t,r){return Object.values(r.elements).find(n=>n.name.trim()===t&&n.type===O.Class)}elementWithAttribute(t,r){return Object.values(r.elements).find(n=>n.name.includes(t)&&n.type===O.ClassAttribute)}elementWithMethod(t,r){return Object.values(r.elements).find(n=>n.name.includes(t)&&n.type===O.ClassMethod)}get isFullScreen(){return de()}onExplanationInput(t){this.explanationChange.emit(t),this.explanation=t}importPatch(t){this.apollonEditor?.importPatch(t)}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=_({type:i,selectors:[["jhi-modeling-editor"]],inputs:{showHelpButton:"showHelpButton",withExplanation:"withExplanation",savedStatus:"savedStatus"},outputs:{onModelChanged:"onModelChanged",onModelPatch:"onModelPatch",explanationChange:"explanationChange"},features:[G,V],decls:18,vars:11,consts:[["help",""],["resizeContainer",""],["editorContainer",""],[1,"guided-tour","modeling-editor"],[1,"modeling-editor",3,"hidden","ngStyle"],[1,"apollon-container"],[1,"modal-header"],["jhiTranslate","artemisApp.modelingEditor.helpModal.title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"table"],["jhiTranslate","artemisApp.modelingEditor.helpModal.createElement.title"],["jhiTranslate","artemisApp.modelingEditor.helpModal.createElement.text"],["width","300","src","/content/images/help-create-element.png"],["jhiTranslate","artemisApp.modelingEditor.helpModal.createRelationship.title"],["jhiTranslate","artemisApp.modelingEditor.helpModal.createRelationship.text"],["width","300","src","/content/images/help-create-relationship.jpg"],["jhiTranslate","artemisApp.modelingEditor.helpModal.updateElement.title"],["jhiTranslate","artemisApp.modelingEditor.helpModal.updateElement.text"],["width","300","src","/content/images/help-update-element.jpg"],["jhiTranslate","artemisApp.modelingEditor.helpModal.deleteElement.title"],["jhiTranslate","artemisApp.modelingEditor.helpModal.deleteElement.text","colspan","2"],["jhiTranslate","artemisApp.modelingEditor.helpModal.moveElement.title"],["jhiTranslate","artemisApp.modelingEditor.helpModal.moveElement.text"],["width","300","src","/content/images/help-move-element.jpg"],["jhiTranslate","artemisApp.modelingEditor.helpModal.resizeElement.title"],["jhiTranslate","artemisApp.modelingEditor.helpModal.resizeElement.text"],["width","300","src","/content/images/help-resize-element.jpg"],["jhiTranslate","artemisApp.modelingEditor.helpModal.reconnectRelationship.title"],["jhiTranslate","artemisApp.modelingEditor.helpModal.reconnectRelationship.text"],["width","300","src","/content/images/help-reconnect-relationship.jpg"],["jhiTranslate","artemisApp.modelingEditor.helpModal.select.title"],["jhiTranslate","artemisApp.modelingEditor.helpModal.select.text","colspan","2"],["jhiTranslate","artemisApp.modelingEditor.helpModal.duplicate.title"],["jhiTranslate","artemisApp.modelingEditor.helpModal.duplicate.text","colspan","2"],["jhiTranslate","artemisApp.modelingEditor.helpModal.undo.title"],["jhiTranslate","artemisApp.modelingEditor.helpModal.undo.text","colspan","2"],[1,"modal-footer"],["type","button","jhiTranslate","entity.action.close",1,"btn","btn-outline",3,"click"],[1,"help-and-status"],[1,"btn","btn-warning",3,"click"],[3,"icon"],["jhiTranslate","artemisApp.modelingEditor.helpModal.help"],[1,"status-hint","text-success"],["jhiTranslate","artemisApp.modelingEditor.allSaved"],[1,"status-hint","text-warning"],["jhiTranslate","artemisApp.modelingEditor.unsavedChanges"],[1,"status-hint","text-info"],[1,"spin",3,"icon"],["jhiTranslate","artemisApp.modelingEditor.saving"],[1,"draggable-right"],[1,"draggable-bottom"],[1,"d-flex","align-items-center","justify-content-center","readonly-diagram","scroll-container",3,"innerHtml","ngClass"],[3,"explanationChange","explanation","readOnly"]],template:function(r,n){r&1&&(o(0,"div",3),e(1,`
    `),M(2,Oe,136,0,"ng-template",null,0,P),e(4,`
    `),M(5,Le,8,4),o(6,"div",4,1),e(8,`
        `),l(9,"div",5,2),e(11,`
        `),M(12,ke,6,1)(13,Ve,6,1),a(),e(14,`
    `),M(15,Re,3,4)(16,Ge,3,2),a(),e(17,`
`)),r&2&&(s(5),h(!n.readOnly&&!n.isFullScreen?5:-1),s(),F("resizable",n.resizeOptions),p("hidden",n.readOnly)("ngStyle",j(9,we,n.isFullScreen?"30px":"")),s(6),h(n.resizeOptions&&n.resizeOptions.horizontalResize?12:-1),s(),h(n.resizeOptions&&n.resizeOptions.verticalResize?13:-1),s(2),h(n.readOnly?15:-1),s(),h(n.withExplanation?16:-1))},dependencies:[A,le,Q,B,ge],styles:[`.readonly-diagram svg text{fill:var(--apollon-primary-contrast)}.modeling-editor{position:relative;height:100%;display:flex;flex-flow:column nowrap;background-color:var(--module-bg)}.modeling-editor .help-and-status{display:flex;flex-wrap:nowrap;align-items:center;margin-bottom:5px;gap:20px}.modeling-editor .help-and-status .spin{display:inline-block;animation:spin 4s linear infinite}@media screen and (max-width: 400px){.modeling-editor .help-and-status .status-hint>span{display:none}}.resizable{display:flex}.resizable .draggable-right,.resizable .draggable-bottom{display:flex;align-items:center;justify-content:center;min-width:15px}.apollon-container{height:100%;min-height:750px;overflow:hidden}.readonly-diagram{height:100%;overflow-x:auto;overflow-y:auto}.scroll-container{scrollbar-width:thin}.scroll-container::-webkit-scrollbar{width:6px}.scroll-container::-webkit-scrollbar-thumb{background-color:#0003;border-radius:3px}.full-screen-margin{margin-top:30px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`],encapsulation:2})}return i})();export{xe as a,ge as b,ft as c};
//# sourceMappingURL=chunk-CCVWGTN5.js.map
