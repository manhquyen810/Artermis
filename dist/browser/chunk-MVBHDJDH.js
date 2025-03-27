import{a as D}from"./chunk-POPNQ63B.js";import{a as N}from"./chunk-RPFDXKEJ.js";import{a as b}from"./chunk-SKB5UJGX.js";import{a as j}from"./chunk-TBEJU7WR.js";import{p as I}from"./chunk-DID2YGL7.js";import{f as L}from"./chunk-CXQURQM5.js";import{a as O}from"./chunk-U54OSGNH.js";import{i as w}from"./chunk-M6Z6DKZQ.js";import{n as E,s as T}from"./chunk-IOA4DPXY.js";import{Ad as h,Db as n,Oc as d,Tb as f,Zb as x,dd as e,ed as y,kc as r,rd as _,sc as m,sd as u,uc as g,vc as C,wc as v,xc as s,yc as l,yd as S,zc as p}from"./chunk-5LC5EQRR.js";var k=(i,c)=>["/courses",i,"exercises",c],F=i=>({backgroundColor:i});function z(i,c){if(i&1&&(e(0,`
    `),s(1,"span",0),e(2,`
        `),s(3,"a",1),e(4,`
            `),p(5,"jhi-not-released-tag",2),e(6,`
        `),l(),e(7,`
    `),l(),e(8,`
`)),i&2){let t=d();n(),r("ngClass",t.isSmall?"small":"fw-medium h4"),n(2),r("routerLink",u(3,k,t.exercise.course==null?null:t.exercise.course.id,t.exercise.id)),n(2),r("exercise",t.exercise)}}function B(i,c){if(i&1&&(e(0,`
    `),s(1,"span",0),e(2,`
        `),p(3,"span",3),e(4,`
    `),l(),e(5,`
`)),i&2){let t=d();n(),r("ngClass",t.isSmall?"small":"fw-medium h4")}}function M(i,c){if(i&1&&(e(0,`
    `),s(1,"span",0),e(2,`
        `),s(3,"a",1),e(4,`
            `),p(5,"jhi-included-in-score-badge",4),e(6,`
        `),l(),e(7,`
    `),l(),e(8,`
`)),i&2){let t=d();n(),r("ngClass",t.isSmall?"small":"fw-medium h4"),n(2),r("routerLink",u(3,k,t.exercise.course==null?null:t.exercise.course.id,t.exercise.id)),n(2),r("includedInOverallScore",t.exercise.includedInOverallScore)}}function R(i,c){if(i&1&&(e(0,`
        `),s(1,"span",0),e(2,`
            `),s(3,"span",5),e(4),S(5,"truncate"),l(),e(6,`
        `),l(),e(7,`
    `)),i&2){let t=d().$implicit,a=d();n(),r("ngClass",a.isSmall?"small":"fw-medium h4"),n(2),r("ngStyle",_(6,F,t.color)),n(),y(h(5,3,t.category,30))}}function A(i,c){if(i&1&&(e(0,`
    `),x(1,R,8,8)),i&2){let t=c.$implicit;n(),m(t.category?1:-1)}}function P(i,c){if(i&1&&(e(0,`
    `),s(1,"span",0),e(2,`
        `),p(3,"jhi-difficulty-badge",6),e(4,`
    `),l(),e(5,`
`)),i&2){let t,a=d();n(),r("ngClass",a.isSmall?"small":"fw-medium h4"),n(2),r("exercise",a.exercise)("showNoLevel",(t=a.showTags.difficultyIfNoLevel)!==null&&t!==void 0?t:!1)}}var X=(()=>{class i{IncludedInOverallScore=L;dayjs=I;exercise;isSmall=!1;showTags={notReleased:!1,quizLive:!1,difficulty:!1,difficultyIfNoLevel:!1,includedInScore:!1};asQuizExercise(t){return t}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=f({type:i,selectors:[["jhi-exercise-categories"]],inputs:{exercise:"exercise",isSmall:"isSmall",showTags:"showTags"},decls:6,vars:4,consts:[[3,"ngClass"],[3,"routerLink"],[3,"exercise"],["jhiTranslate","artemisApp.courseOverview.exerciseList.live",1,"badge","bg-success"],[3,"includedInOverallScore"],[1,"badge",3,"ngStyle"],[3,"exercise","showNoLevel"]],template:function(a,o){a&1&&(x(0,z,9,6)(1,B,6,1)(2,M,9,6),C(3,A,2,1,null,null,g),x(5,P,6,3)),a&2&&(m(o.exercise.releaseDate&&o.dayjs(o.exercise.releaseDate).isAfter(o.dayjs())&&o.showTags.notReleased?0:-1),n(),m(o.asQuizExercise(o.exercise).isActiveQuiz&&o.showTags.quizLive?1:-1),n(),m(o.exercise.includedInOverallScore!==o.IncludedInOverallScore.INCLUDED_COMPLETELY&&o.showTags.includedInScore?2:-1),n(),v(o.exercise.categories),n(2),m(o.exercise.difficulty&&o.showTags.difficulty?5:-1))},dependencies:[E,w,j,O,D,T,N,b],styles:["h4[_ngcontent-%COMP%]{margin-bottom:.25rem;margin-right:.25rem}"]})}return i})();export{X as a};
//# sourceMappingURL=chunk-MVBHDJDH.js.map
