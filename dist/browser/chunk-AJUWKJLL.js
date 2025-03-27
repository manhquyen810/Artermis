import{a as Q}from"./chunk-W2XOXZZX.js";import{a as H}from"./chunk-4PW2JSSH.js";import{a as N}from"./chunk-2DI3RHO4.js";import{b as W}from"./chunk-2UXGFGK3.js";import{a as I,b as E,c as $,d as K}from"./chunk-O4VJ5OXY.js";import{b as z,f as Y,g as q}from"./chunk-BDII35IB.js";import{a as G}from"./chunk-DRMCDU75.js";import{c as P}from"./chunk-CK7FH6VF.js";import{d as U}from"./chunk-CT44YL7Q.js";import{a as j}from"./chunk-K3W6YFKH.js";import{k as L}from"./chunk-CXQURQM5.js";import{a as y}from"./chunk-U54OSGNH.js";import{f as M}from"./chunk-M6Z6DKZQ.js";import{Db as o,Dc as T,Ea as u,Ed as F,Ma as p,Mc as x,Na as m,Oc as c,Sc as V,Tb as g,Zb as S,cd as R,dd as t,ed as w,fd as f,kc as h,mc as _,rd as B,sc as v,uc as O,vc as A,wc as k,xc as s,yc as a,yd as b,zc as l,zd as C}from"./chunk-5LC5EQRR.js";var ee=r=>[r,250];function te(r,d){if(r&1&&(t(0,`
                `),s(1,"b"),t(2),a(),t(3," "),l(4,"br"),t(5,`
                `),s(6,"span"),t(7),a(),t(8,`
            `)),r&2){let e=d.model,i=c();o(2),w(e.name),o(5),w(i.lookUpAbsoluteValue(e.name))}}var X=(()=>{class r{navigationService=u(G);averageScoreOfExercise;scoreDistribution;numberOfExerciseScores;exerciseType;courseId;exerciseId;ngxData=[];ngxColor={name:"Statistics",selectable:!0,group:z.Ordinal,domain:[K.DARK_BLUE]};yAxisTickFormatting=W;barChartLabels=[];relativeChartData=[];ngOnInit(){this.initializeChart()}initializeChart(){if(this.barChartLabels=["[0, 10)","[10, 20)","[20, 30)","[30, 40)","[40, 50)","[50, 60)","[60, 70)","[70, 80)","[80, 90)","[90, 100]"],this.numberOfExerciseScores&&this.numberOfExerciseScores>0){this.relativeChartData=[];for(let e of this.scoreDistribution)this.relativeChartData.push(U(e*100/this.numberOfExerciseScores))}else this.relativeChartData=new Array(10).fill(0);this.ngxData=this.relativeChartData.map((e,i)=>({name:this.barChartLabels[i],value:e}))}lookUpAbsoluteValue(e){let i=this.barChartLabels.indexOf(e);return this.scoreDistribution[i]}selectChartBar(e){let i=this.barChartLabels.indexOf(e.name),n=[`/course-management/${this.courseId}/${this.exerciseType}-exercises/${this.exerciseId}/scores`];this.navigationService.routeInNewTab(n,{queryParams:{scoreRangeFilter:i}})}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=g({type:r,selectors:[["jhi-statistics-score-distribution-graph"]],inputs:{averageScoreOfExercise:"averageScoreOfExercise",scoreDistribution:"scoreDistribution",numberOfExerciseScores:"numberOfExerciseScores",exerciseType:"exerciseType",courseId:"courseId",exerciseId:"exerciseId"},decls:18,vars:11,consts:[["containerRef",""],["tooltipTemplate",""],[1,"row","mb-3"],[1,"col-xl-2"],["jhiTranslate","statistics.score_distribution"],[1,"col-xl-9"],[3,"select","roundEdges","view","results","scheme","xAxis","yAxis","yScaleMax","showDataLabel","yAxisTickFormatting"]],template:function(i,n){if(i&1){let D=T();s(0,"div",2),t(1,`
    `),s(2,"div",3),t(3,`
        `),l(4,"h3",4),t(5,`
    `),a(),t(6,`
    `),s(7,"div",5,0),t(9,`
        `),s(10,"ngx-charts-bar-vertical",6),x("select",function(J){return p(D),m(n.selectChartBar(J))}),t(11,`
            `),S(12,te,9,2,"ng-template",null,1,F),t(14,`
        `),a(),t(15,`
    `),a(),t(16,`
`),a(),t(17,`
`)}if(i&2){let D=R(8);o(10),h("roundEdges",!1)("view",B(9,ee,D.offsetWidth))("results",n.ngxData)("scheme",n.ngxColor)("xAxis",!0)("yAxis",!0)("yScaleMax",100)("showDataLabel",!0)("yAxisTickFormatting",n.yAxisTickFormatting)}},dependencies:[y,q,Y],styles:["[_nghost-%COMP%]  .textDataLabel{font-weight:bolder;font-size:small!important;alignment-baseline:middle;text-anchor:start}@media (min-width: 1420px){[_nghost-%COMP%]  .textDataLabel{transform:rotate(0);font-size:medium!important;alignment-baseline:baseline;text-anchor:middle}}"]})}return r})();function ie(r,d){if(r&1&&(t(0,`
            `),l(1,"jhi-statistics-score-distribution-graph",12),t(2,`
        `)),r&2){let e=c(2);o(),h("averageScoreOfExercise",e.exerciseStatistics==null?null:e.exerciseStatistics.averageScoreOfExercise)("scoreDistribution",e.exerciseStatistics==null?null:e.exerciseStatistics.scoreDistribution)("numberOfExerciseScores",e.exerciseStatistics==null?null:e.exerciseStatistics.numberOfExerciseScores)("exerciseType",e.exercise.type)("courseId",e.course.id)("exerciseId",e.exercise.id)}}function ne(r,d){r&1&&(t(0,`
                    `),l(1,"hr"),t(2,`
                `))}function re(r,d){if(r&1&&(t(0,`
            `),s(1,"div",13),t(2,`
                `),S(3,ne,3,0),l(4,"jhi-statistics-graph",14),t(5,`
            `),a(),t(6,`
        `)),r&2){let e=d.$implicit,i=d.$index,n=c(2);o(),V("id","exercise-statistics-graph-",i,""),o(2),v(i!==0?3:-1),o(),h("graphType",e)("currentSpan",n.currentSpan)("statisticsView",n.statisticsView)("entityId",n.exercise.id)}}function se(r,d){if(r&1){let e=T();t(0,`
    `),s(1,"div"),t(2,`
        `),l(3,"h2",0),t(4,`
        `),s(5,"div",1),t(6,`
            `),l(7,"jhi-exercise-detail-statistics",2),t(8,`
        `),a(),t(9,`
        `),S(10,ie,3,6),l(11,"div",3),t(12,`
        `),s(13,"div",4),t(14,`
            `),s(15,"div",5),t(16,`
                `),s(17,"label",6),t(18,`
                    `),s(19,"input",7),x("click",function(){p(e);let n=c();return m(n.onTabChanged(n.SpanType.DAY))}),a(),t(20),b(21,"artemisTranslate"),a(),t(22,`
                `),s(23,"label",6),t(24,`
                    `),s(25,"input",8),x("click",function(){p(e);let n=c();return m(n.onTabChanged(n.SpanType.WEEK))}),a(),t(26),b(27,"artemisTranslate"),a(),t(28,`
                `),s(29,"label",6),t(30,`
                    `),s(31,"input",9),x("click",function(){p(e);let n=c();return m(n.onTabChanged(n.SpanType.MONTH))}),a(),t(32),b(33,"artemisTranslate"),a(),t(34,`
                `),s(35,"label",6),t(36,`
                    `),s(37,"input",10),x("click",function(){p(e);let n=c();return m(n.onTabChanged(n.SpanType.QUARTER))}),a(),t(38),b(39,"artemisTranslate"),a(),t(40,`
                `),s(41,"label",6),t(42,`
                    `),s(43,"input",11),x("click",function(){p(e);let n=c();return m(n.onTabChanged(n.SpanType.YEAR))}),a(),t(44),b(45,"artemisTranslate"),a(),t(46,`
            `),a(),t(47,`
        `),a(),t(48,`
        `),A(49,re,7,7,null,null,O),a(),t(51,`
`)}if(r&2){let e=c();o(7),h("exercise",e.exercise)("doughnutStats",e.exerciseStatistics)("exerciseType",e.exercise.type),o(3),v(e.exerciseStatistics?10:-1),o(7),_("active",e.currentSpan===e.SpanType.DAY),o(3),f("",C(21,19,"statistics.span.day"),`
                `),o(3),_("active",e.currentSpan===e.SpanType.WEEK),o(3),f("",C(27,21,"statistics.span.week"),`
                `),o(3),_("active",e.currentSpan===e.SpanType.MONTH),o(3),f("",C(33,23,"statistics.span.month"),`
                `),o(3),_("active",e.currentSpan===e.SpanType.QUARTER),o(3),f("",C(39,25,"statistics.span.quarter"),`
                `),o(3),_("active",e.currentSpan===e.SpanType.YEAR),o(3),f("",C(45,27,"statistics.span.year"),`
                `),o(5),k(e.graphTypes)}}var Ve=(()=>{class r{service=u(N);route=u(M);exerciseService=u(P);SpanType=I;graphTypes=[E.SUBMISSIONS,E.ACTIVE_USERS,E.ACTIVE_TUTORS,E.CREATED_RESULTS,E.CREATED_FEEDBACKS];currentSpan=I.WEEK;statisticsView=$.EXERCISE;paramSub;exercise;course;exerciseStatistics;ngOnInit(){let e=0;this.paramSub=this.route.params.subscribe(i=>{e=i.exerciseId}),this.exerciseService.find(e).subscribe(i=>{this.exercise=i.body,this.course=L(this.exercise)}),this.service.getExerciseStatistics(e).subscribe(i=>{this.exerciseStatistics=i})}onTabChanged(e){this.currentSpan=e}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=g({type:r,selectors:[["jhi-exercise-statistics"]],decls:1,vars:1,consts:[["id","statistics-page-heading","jhiTranslate","exercise-statistics.title",1,"row","mb-5","col-md-2"],[1,"mb-3","d-flex","justify-content-around"],[3,"exercise","doughnutStats","exerciseType"],[1,"separator","w-100","mb-4"],[1,"row","mb-5"],["data-toggle","buttons",1,"offset-md-2","col-md-9","btn-group","btn-group-toggle"],[1,"btn","btn-secondary"],["type","radio","name","options","id","option1",3,"click"],["type","radio","name","options","id","option2","checked","",3,"click"],["type","radio","name","options","id","option3",3,"click"],["type","radio","name","options","id","option4",3,"click"],["type","radio","name","options","id","option5",3,"click"],[3,"averageScoreOfExercise","scoreDistribution","numberOfExerciseScores","exerciseType","courseId","exerciseId"],[1,"graph",3,"id"],[3,"graphType","currentSpan","statisticsView","entityId"]],template:function(i,n){i&1&&S(0,se,52,29),i&2&&v(n.exercise?0:-1)},dependencies:[y,Q,X,H,j],styles:[".separator[_ngcontent-%COMP%]{border-top:3px solid lightgray}"]})}return r})();export{Ve as a};
//# sourceMappingURL=chunk-AJUWKJLL.js.map
