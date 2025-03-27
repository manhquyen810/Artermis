import{i as b}from"./chunk-5QODR5GQ.js";import{a as k}from"./chunk-Z2YUBN6N.js";import{s as L}from"./chunk-VZRSC3LP.js";import{A as I,B as H,K as B,c as V,h as D,m as N,o as F}from"./chunk-WA5GEAJB.js";import{a as W}from"./chunk-K3W6YFKH.js";import{d as X,f as Z}from"./chunk-EDXSOKK5.js";import{Xb as G,y as j}from"./chunk-Z4VHWOB5.js";import{a as P}from"./chunk-U54OSGNH.js";import{Db as o,Dc as h,Ma as c,Mc as w,Na as f,Oc as p,Pb as g,Rc as z,Tb as _,Ya as C,Za as s,Zb as S,dd as e,fd as T,kc as l,ld as y,md as E,nd as M,sc as x,xc as a,yc as r,yd as v,zc as m,zd as A}from"./chunk-5LC5EQRR.js";function J(t,q){if(t&1&&(e(0,`
            `),m(1,"fa-icon",3),v(2,"artemisTranslate"),e(3,`
        `)),t&2){let i=p();o(),z("title",A(2,2,"artemisApp.editor.loadingFile")),l("icon",i.faCircleNotch)}}function K(t,q){if(t&1){let i=h();e(0,`
        `),a(1,"div",4),e(2,`
            `),a(3,"button",5),e(4,`
                `),m(5,"fa-icon",2),e(6,`
            `),r(),e(7,`
            `),a(8,"div",6),e(9,`
                `),a(10,"div",7),e(11,`
                    `),m(12,"span",8),e(13,`
                    `),a(14,"input",9),M("ngModelChange",function(n){c(i);let u=p();return E(u.tabSize,n)||(u.tabSize=n),f(n)}),w("change",function(){c(i);let n=p();return f(n.validateTabSize())}),r(),e(15,`
                `),r(),e(16,`
            `),r(),e(17,`
        `),r(),e(18,`
    `)}if(t&2){let i=p();o(),l("autoClose","outside"),o(4),l("icon",i.faGear),o(9),l("max",i.MAX_TAB_SIZE),y("ngModel",i.tabSize)}}var le=(()=>{class t{fileName=s();isLoading=s(!1);showTabSizeSelector=s(!0);onValidateTabSize=C();tabSize=g(4);MAX_TAB_SIZE=b;farFileAlt=k;faCircleNotch=j;faGear=G;validateTabSize(){this.tabSize.set(Math.max(1,Math.min(this.tabSize(),b))),this.onValidateTabSize.emit(this.tabSize())}static \u0275fac=function(d){return new(d||t)};static \u0275cmp=_({type:t,selectors:[["jhi-code-editor-header"]],inputs:{fileName:[1,"fileName"],isLoading:[1,"isLoading"],showTabSizeSelector:[1,"showTabSizeSelector"],tabSize:[1,"tabSize"]},outputs:{onValidateTabSize:"onValidateTabSize",tabSize:"tabSizeChange"},decls:13,vars:4,consts:[[1,"d-flex","justify-content-between","card-header","bg-primary","text-white"],[1,"mt-1","card-title"],[3,"icon"],["animation","spin",1,"ms-2",3,"icon","title"],["ngbDropdown","","placement","bottom-end auto","aria-label","Code Editor Settings",1,"ms-2",3,"autoClose"],["ngbDropdownToggle","","type","button","id","dropdownCodeEditorSettings","aria-expanded","false",1,"btn","btn-sm","btn-primary"],["ngbDropdownMenu","","aria-labelledby","dropdownCodeEditorSettings"],["ngbDropdownItem","",1,"d-flex"],["jhiTranslate","artemisApp.editor.tabSize",1,"dropdown-item"],["type","number","min","1","step","1","size","1",1,"form-control-sm",3,"ngModelChange","change","max","ngModel"]],template:function(d,n){d&1&&(a(0,"div",0),e(1,`
    `),a(2,"h3",1),e(3,`
        `),m(4,"fa-icon",2),e(5,`
        `),a(6,"span"),e(7),r(),e(8,`
        `),S(9,J,4,4),r(),e(10,`
    `),S(11,K,19,4),r(),e(12,`
`)),d&2&&(o(4),l("icon",n.farFileAlt),o(3),T(" \xA0",n.fileName(),""),o(2),x(n.isLoading()?9:-1),o(2),x(n.showTabSizeSelector()?11:-1))},dependencies:[L,W,B,V,F,D,H,I,N,Z,X,P],encapsulation:2,changeDetection:0})}return t})();export{le as a};
//# sourceMappingURL=chunk-G5WFAKZV.js.map
