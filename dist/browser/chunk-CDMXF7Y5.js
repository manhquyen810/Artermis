import{F as T}from"./chunk-VZRSC3LP.js";import{d as k}from"./chunk-EDXSOKK5.js";import{H as h}from"./chunk-Z4VHWOB5.js";import{a as P}from"./chunk-U54OSGNH.js";import{i as g}from"./chunk-M6Z6DKZQ.js";import{Db as o,Ed as _,Oc as c,Tb as d,Zb as a,cd as u,dd as t,ed as C,kc as r,sc as x,uc as v,vc as y,wc as f,xc as m,yc as l,zc as s}from"./chunk-5LC5EQRR.js";function A(e,i){e&1&&(t(0," "),s(1,"span",4))}function E(e,i){if(e&1&&(t(0,`
                        `),m(1,"a",7),t(2),l(),t(3,`
                    `)),e&2){let n=c().$implicit,p=c(3);o(),r("routerLink",p.navigationArray),o(),C(n.competency.title)}}function F(e,i){if(e&1&&(t(0,`
                    `),a(1,E,4,2)),e&2){let n=i.$implicit;o(),x(n.competency!=null&&n.competency.title?1:-1)}}function w(e,i){if(e&1&&(t(0,`
        `),m(1,"div"),t(2,`
            `),s(3,"small",5),t(4,`
            `),m(5,"ul",6),t(6,`
                `),y(7,F,2,1,null,null,v),l(),t(9,`
        `),l(),t(10,`
    `)),e&2){let n=c(2);o(7),f(n.competencyLinks)}}function j(e,i){if(e&1&&(t(0,`
        `),s(1,"a",8),t(2,`
    `)),e&2){let n=c(2);o(),r("routerLink",n.navigationArray)}}function S(e,i){if(e&1&&(t(0,`
    `),a(1,w,11,0)(2,j,3,1)),e&2){let n=c();o(),x(n.competencyLinks!=null&&n.competencyLinks.length?1:2)}}var N=(()=>{class e{courseId;competencyLinks=[];navigateTo="courseCompetencies";navigationArray=[];faFlag=h;ngOnInit(){if(this.courseId)switch(this.navigateTo){case"courseCompetencies":{this.navigationArray=["/courses",`${this.courseId}`,"competencies"];break}case"competencyManagement":{this.navigationArray=["/course-management",`${this.courseId}`,"competency-management"];break}}}static \u0275fac=function(p){return new(p||e)};static \u0275cmp=d({type:e,selectors:[["jhi-competencies-popover"]],inputs:{courseId:"courseId",competencyLinks:"competencyLinks",navigateTo:"navigateTo"},decls:11,vars:4,consts:[["popTitle",""],["popContent",""],["type","button","popoverClass","competency-popover",1,"btn","btn-sm","btn-primary","competency-button",3,"ngbPopover","popoverTitle"],[3,"icon","fixedWidth"],["jhiTranslate","artemisApp.competency.competencyPopover.connectedCompetencies",1,"font-weight-bold"],["jhiTranslate","artemisApp.competency.competencyPopover.explanation"],[1,"list-group"],[1,"list-group-item",3,"routerLink"],["jhiTranslate","artemisApp.competency.competencyPopover.noCompetencies",3,"routerLink"]],template:function(p,b){if(p&1&&(a(0,A,2,0,"ng-template",null,0,_),t(2,`
`),a(3,S,3,1,"ng-template",null,1,_),t(5,`
`),m(6,"button",2),t(7,`
    `),s(8,"fa-icon",3),t(9,`
`),l(),t(10,`
`)),p&2){let L=u(1),I=u(4);o(6),r("ngbPopover",I)("popoverTitle",L),o(2),r("icon",b.faFlag)("fixedWidth",!0)}},dependencies:[P,g,T,k],styles:[`.competency-button{width:100%}.competency-popover{max-width:1000px!important}
`],encapsulation:2})}return e})();export{N as a};
//# sourceMappingURL=chunk-CDMXF7Y5.js.map
