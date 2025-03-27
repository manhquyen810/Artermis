import{a as V}from"./chunk-J2B6GP6U.js";import{q as G,r as J,t as K}from"./chunk-DOLVNMRR.js";import{a as Q}from"./chunk-JRBFEQNN.js";import{a as N}from"./chunk-KYCCMZSV.js";import{K as F}from"./chunk-VZRSC3LP.js";import{a as H}from"./chunk-K3W6YFKH.js";import{d as B}from"./chunk-EDXSOKK5.js";import{p as z}from"./chunk-DID2YGL7.js";import{a as U}from"./chunk-U54OSGNH.js";import{i as R}from"./chunk-M6Z6DKZQ.js";import{c as L}from"./chunk-E2KBL4LX.js";import{n as q}from"./chunk-IOA4DPXY.js";import{Db as i,Ea as k,Oc as d,Pc as I,Qc as j,Tb as D,Za as g,Zb as x,dd as e,ed as f,fd as P,kc as p,mc as E,sc as a,sd as A,wb as S,xc as r,yc as s,yd as C,zc as m,zd as _}from"./chunk-5LC5EQRR.js";var W=["*"],X=(t,c)=>["/courses",t,"competencies",c];function Y(t,c){if(t&1&&(e(0,`
        `),m(1,"a",11),e(2,`
    `)),t&2){let n,l=d();i(),p("routerLink",A(1,X,l.courseId(),(n=l.competency())==null?null:n.id))}}function Z(t,c){t&1&&(e(0,`
                        `),m(1,"span",12),e(2,`
                    `))}function $(t,c){t&1&&(e(0,`
                        `),m(1,"span",13),e(2,`
                    `))}function ee(t,c){if(t&1&&(e(0,`
                    `),m(1,"p",14),C(2,"htmlForMarkdown"),e(3,`
                `)),t&2){let n,l=d();i(),p("innerHTML",_(2,1,(n=l.competency())==null?null:n.description),S)}}function te(t,c){if(t&1&&(e(0,`
                            `),r(1,"span",15),e(2),s(),e(3,`
                        `)),t&2){let n=d(2);i(2),f(n.competency().linkedCourseCompetency.course.title)}}function ne(t,c){if(t&1&&(e(0,`
                            `),r(1,"span",16),e(2),s(),e(3,`
                        `)),t&2){let n=d(2);i(2),f(n.competency().linkedCourseCompetency.course.semester)}}function ie(t,c){if(t&1&&(e(0,`
                    `),r(1,"div"),e(2,`
                        `),x(3,te,4,1)(4,ne,4,1),s(),e(5,`
                `)),t&2){let n=d();i(3),a(n.competency().linkedCourseCompetency.course.title?3:-1),i(),a(n.competency().linkedCourseCompetency.course.semester?4:-1)}}function oe(t,c){if(t&1&&(e(0,`
                `),r(1,"div",17),e(2,`
                    `),m(3,"span",18),e(4,`
                    `),r(5,"span",19),e(6),C(7,"artemisTimeAgo"),s(),e(8,`
                `),s(),e(9,`
            `)),t&2){let n=d();i(5),p("ngClass",n.softDueDatePassed&&!n.isMastered?"bg-danger":"bg-success"),i(),P(`
                        `,_(7,2,n.competency().softDueDate),`
                    `)}}function re(t,c){if(t&1&&(e(0,`
                `),r(1,"div",20),e(2,`
                    `),m(3,"jhi-competency-rings",21),e(4,`
                `),s(),e(5,`
            `)),t&2){let n=d();i(3),p("progress",n.progress)("mastery",n.mastery)("hideProgress",n.hideProgress())}}var ve=(()=>{class t{translateService=k(L);courseId=g();competency=g();isPrerequisite=g();hideProgress=g(!1);noProgressRings=g(!1);getIcon=G;getUserProgress(){let n=this.competency()?.userProgress?.first();return n||{progress:0,confidence:1}}get progress(){return J(this.getUserProgress())}get mastery(){return K(this.getUserProgress())}get isMastered(){return this.mastery>=100}get softDueDatePassed(){return z().isAfter(this.competency()?.softDueDate)}static \u0275fac=function(l){return new(l||t)};static \u0275cmp=D({type:t,selectors:[["jhi-competency-card"]],inputs:{courseId:[1,"courseId"],competency:[1,"competency"],isPrerequisite:[1,"isPrerequisite"],hideProgress:[1,"hideProgress"],noProgressRings:[1,"noProgressRings"]},ngContentSelectors:W,decls:41,vars:20,consts:[[1,"course-exercise-row","row","align-items-center","justify-content-between","mb-2","mt-2","position-relative",3,"id"],[1,"col-auto","d-none","d-sm-block"],[1,"exercise-row-icon"],["size","2x","container","body",3,"icon","ngbTooltip"],[1,"col"],[1,"row"],[1,"col-auto","d-sm-none"],[1,"fw-medium"],[3,"icon"],[1,"col-sm","col","py-2"],[1,"m-0"],[1,"stretched-link",3,"routerLink"],["jhiTranslate","artemisApp.competency.mastered",1,"badge","text-white","text-bg-success"],["id","optional-badge","jhiTranslate","artemisApp.competency.optional",1,"badge","text-white","bg-warning"],[1,"m-0","markdown-preview",3,"innerHTML"],[1,"badge","bg-primary"],[1,"badge","bg-secondary"],[1,"col-sm","col","py-2",2,"max-width","fit-content"],["jhiTranslate","artemisApp.competency.competencyCard.softDueDate",2,"vertical-align","middle"],["id","date-badge",1,"badge",3,"ngClass"],[1,"col-sm","col","text-end","py-1","px-2",2,"max-width","95px"],[3,"progress","mastery","hideProgress"]],template:function(l,o){if(l&1&&(I(),r(0,"div",0),e(1,`
    `),x(2,Y,3,4),r(3,"div",1),e(4,`
        `),r(5,"a",2),e(6,`
            `),m(7,"fa-icon",3),C(8,"artemisTranslate"),e(9,`
        `),s(),e(10,`
    `),s(),e(11,`
    `),r(12,"div",4),e(13,`
        `),r(14,"div",5),e(15,`
            `),r(16,"div",6),e(17,`
                `),r(18,"h4",7),e(19,`
                    `),m(20,"fa-icon",8),e(21,`
                `),s(),e(22,`
            `),s(),e(23,`
            `),r(24,"div",9),e(25,`
                `),r(26,"h4",10),e(27),x(28,Z,3,0)(29,$,3,0),s(),e(30,`
                `),x(31,ee,4,3)(32,ie,6,2),j(33),e(34,`
            `),s(),e(35,`
            `),x(36,oe,10,4)(37,re,6,3),s(),e(38,`
    `),s(),e(39,`
`),s(),e(40,`
`)),l&2){let v,h,u,M,w,b,O,y,T;E("border-secondary",o.isPrerequisite())("border-success",o.isMastered)("text-secondary",o.isMastered),p("id","competency-card-"+((v=o.competency())==null?null:v.id)),i(2),a(o.courseId()&&!o.isPrerequisite()?2:-1),i(5),p("icon",o.getIcon((h=o.competency())==null?null:h.taxonomy))("ngbTooltip",_(8,18,"artemisApp.courseCompetency.taxonomies."+((u=(u=o.competency())==null?null:u.taxonomy)!==null&&u!==void 0?u:"none"))),i(13),p("icon",o.getIcon((M=o.competency())==null?null:M.taxonomy)),i(7),P(`
                    `,(w=o.competency())==null?null:w.title,`
                    `),i(),a(o.isMastered?28:-1),i(),a((b=o.competency())!=null&&b.optional?29:-1),i(2),a((O=o.competency())!=null&&O.description?31:-1),i(),a(o.isPrerequisite()&&(!((y=o.competency())==null||y.linkedCourseCompetency==null)&&y.linkedCourseCompetency.course)?32:-1),i(4),a((T=o.competency())!=null&&T.softDueDate?36:-1),i(),a(o.noProgressRings()?-1:37)}},dependencies:[R,B,F,U,q,V,H,N,Q],styles:["[_nghost-%COMP%]{cursor:pointer}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{padding:5px 0;background-color:var(--overview-light-background-color);border-radius:var(--bs-border-radius-lg)}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{min-height:35px;align-items:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]:hover{background-color:var(--hover-slightly-darker-body-bg)}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .exercise-link[_ngcontent-%COMP%]{color:#212529}[_nghost-%COMP%]   .course-exercise-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding:.5rem 1rem}[_nghost-%COMP%]   .exercise-row-icon[_ngcontent-%COMP%]{color:var(--bs-body-color);display:flex;align-items:center;justify-content:center;min-width:40px}[_nghost-%COMP%]   .exercise-row-icon[_ngcontent-%COMP%] > fa-icon[_ngcontent-%COMP%]{z-index:1}[_nghost-%COMP%]   .result[_ngcontent-%COMP%]{width:unset;z-index:2}[_nghost-%COMP%]   .due-date[_ngcontent-%COMP%]{z-index:1}.raised-actions[_ngcontent-%COMP%]{position:relative;z-index:1}@media (min-width: 768px){.max-width[_ngcontent-%COMP%]{max-width:90%}}@media (max-width: 767px){.max-width[_ngcontent-%COMP%]{max-width:100%}}.exercise-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}"]})}return t})();export{ve as a};
//# sourceMappingURL=chunk-LQRMY4JN.js.map
