import{a as W,b as pe}from"./chunk-2ZSCKKMJ.js";import{a as ce}from"./chunk-4PW2JSSH.js";import{a as ne}from"./chunk-2DI3RHO4.js";import{b as ae}from"./chunk-2UXGFGK3.js";import{a as B,b as u,c as re,d as R}from"./chunk-O4VJ5OXY.js";import{b as se,f as oe,g as le}from"./chunk-BDII35IB.js";import"./chunk-LARBQRTJ.js";import{a as te}from"./chunk-UDBRF4PR.js";import{b as N}from"./chunk-ZPITQMA6.js";import"./chunk-2CUFQLAH.js";import{a as ie}from"./chunk-DRMCDU75.js";import"./chunk-Z6NSEM73.js";import"./chunk-R75LTV62.js";import"./chunk-CT44YL7Q.js";import"./chunk-EELXLOHY.js";import{q as K,r as Y,s as H}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import"./chunk-WA5GEAJB.js";import"./chunk-5GXY5RYT.js";import{a as L}from"./chunk-K3W6YFKH.js";import{d as ee}from"./chunk-EDXSOKK5.js";import"./chunk-DID2YGL7.js";import{c as J}from"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Db as q,Sa as Z,cb as Q}from"./chunk-Z4VHWOB5.js";import"./chunk-NOBD5HSR.js";import{a as V}from"./chunk-U54OSGNH.js";import{f as X}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{n as $}from"./chunk-IOA4DPXY.js";import{Db as o,Dc as E,Ea as T,Ed as z,Ma as y,Mc as d,Na as f,Oc as h,Sc as U,Tb as O,Zb as _,cd as j,dd as e,ed as M,fd as w,gd as D,kc as m,mc as C,rd as G,sc as A,uc as b,vc as F,wc as I,xc as n,yc as a,yd as g,zc as c,zd as S}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var he=s=>[s,300],ue=s=>({num:s});function ge(s,p){if(s&1&&(e(0,`
                    `),n(1,"b"),e(2),a(),e(3," "),c(4,"br"),e(5,`
                    `),n(6,"span"),e(7),g(8,"artemisTranslate"),a(),e(9," "),c(10,"br"),e(11,`
                    `),n(12,"b"),e(13),g(14,"artemisTranslate"),g(15,"artemisTranslate"),a(),e(16,`
                `)),s&2){let t=p.model,r=h();o(2),M(t.name),o(5),D("",S(8,5,"artemisApp.courseStatistics.exerciseAverage"),": ",t.value,"%"),o(6),D("",S(14,7,"artemisApp.courseStatistics.exerciseType"),`:
                        `,S(15,9,"artemisApp.courseStatistics."+r.convertTypeForTooltip(t.name,t.value)),"")}}function Se(s,p){s&1&&(e(0,`
            `),c(1,"div",14),e(2,`
        `))}function xe(s,p){s&1&&(e(0,`
                            `),n(1,"li"),e(2,`
                                `),c(3,"b",25),e(4,`
                            `),a(),e(5,`
                        `))}function Ce(s,p){if(s&1){let t=E();e(0,`
                            `),n(1,"li"),e(2,`
                                `),n(3,"label"),e(4,`
                                    `),n(5,"input",23),d("change",function(){let i=y(t).$implicit,l=h(2);return f(l.toggleType(i))}),a(),e(6,`
                                    `),n(7,"span",26),e(8),g(9,"artemisTranslate"),a(),e(10,`
                                `),a(),e(11,`
                            `),a(),e(12,`
                        `)}if(s&2){let t=p.$implicit,r=h(2);o(5),m("checked",r.exerciseTypeFilter.getCurrentFilterState(r.convertToMapKey(t))),o(3),M(S(9,2,"artemisApp.exercise-scores-chart."+t.toLowerCase()+"Plural"))}}function ve(s,p){if(s&1){let t=E();e(0,`
                            `),n(1,"li"),e(2,`
                                `),n(3,"label"),e(4,`
                                    `),n(5,"input",23),d("change",function(){y(t);let i=h(2);return f(i.toggleExercisesWithNoCategory())}),a(),e(6,`
                                    `),c(7,"span",27),e(8,`
                                `),a(),e(9,`
                            `),a(),e(10,`
                        `)}if(s&2){let t=h(2);o(5),m("checked",t.chartCategoryFilter.includeExercisesWithNoCategory)}}function ye(s,p){if(s&1){let t=E();e(0,`
                            `),n(1,"li"),e(2,`
                                `),n(3,"label"),e(4,`
                                    `),n(5,"input",23),d("change",function(){let i=y(t).$implicit,l=h(2);return f(l.toggleCategory(i))}),a(),e(6,`
                                    `),n(7,"span",26),e(8),a(),e(9,`
                                `),a(),e(10,`
                            `),a(),e(11,`
                        `)}if(s&2){let t=p.$implicit,r=h(2);o(5),m("checked",r.chartCategoryFilter.getCurrentFilterState(t)),o(3),M(t)}}function fe(s,p){if(s&1){let t=E();e(0,`
                `),n(1,"div",15),e(2,`
                    `),n(3,"button",16),e(4,`
                        `),c(5,"fa-icon",17),e(6,`
                        `),c(7,"span",18),e(8,`
                    `),a(),e(9,`
                    `),n(10,"ul",19),e(11,`
                        `),_(12,xe,6,0),F(13,Ce,13,4,null,null,b),n(15,"li",20),e(16,`
                            `),c(17,"b",21),e(18,`
                        `),a(),e(19,`
                        `),n(20,"li"),e(21,`
                            `),n(22,"label",22),e(23,`
                                `),n(24,"input",23),d("change",function(){y(t);let i=h();return f(i.toggleAllCategories())}),a(),e(25,`
                                `),c(26,"b",24),e(27,`
                            `),a(),e(28,`
                        `),a(),e(29,`
                        `),_(30,ve,11,1),F(31,ye,12,2,null,null,b),a(),e(33,`
                `),a(),e(34,`
            `)}if(s&2){let t=h();o(3),C("btn-secondary",!(t.chartCategoryFilter.numberOfActiveFilters+t.exerciseTypeFilter.numberOfActiveFilters))("btn-success",t.chartCategoryFilter.numberOfActiveFilters+t.exerciseTypeFilter.numberOfActiveFilters>0),o(2),m("icon",t.faFilter),o(2),m("translateValues",G(9,ue,t.exerciseTypeFilter.numberOfActiveFilters+t.chartCategoryFilter.numberOfActiveFilters)),o(5),A(t.exerciseTypeFilter.typeSet.size?12:-1),o(),I(t.exerciseTypeFilter.typeSet),o(11),m("checked",t.chartCategoryFilter.allCategoriesSelected),o(6),A(t.chartCategoryFilter.exercisesWithoutCategoriesPresent?30:-1),o(),I(t.chartCategoryFilter.exerciseCategories)}}function _e(s,p){if(s&1){let t=E();e(0,`
                        `),n(1,"div",28),d("click",function(){let i=y(t).$implicit,l=h();return f(l.togglePerformanceInterval(i))}),e(2,`
                            `),c(3,"div",29),e(4,`
                            `),n(5,"span"),e(6),g(7,"artemisTranslate"),a(),e(8,`
                        `),a(),e(9,`
                    `)}if(s&2){let t=p.$implicit,r=h();o(3),m("ngClass",r.displayColorMap.get(t)),o(3),M(S(7,2,"artemisApp.courseStatistics.chartLegend."+t))}}var x=function(s){return s.LOWEST="lowest",s.AVERAGE="average",s.BEST="best",s}(x||{}),me=(()=>{class s{navigationUtilService=T(ie);exerciseTypeFilter=T(W);chartCategoryFilter=T(pe);exerciseAverageScores;courseAverage;courseId;LEFT=!1;RIGHT=!0;SpanType=B;barChartLabels=[];ngxData=[];ngxColor={name:"Course statistics",selectable:!0,group:se.Ordinal,domain:[]};exerciseScoresFilteredByPerformanceInterval;currentlyDisplayableExercises;displayColorMap=new Map;numberOfSelectedIntervals=3;yAxisTickFormatting=ae;performanceIntervals=[x.LOWEST,x.AVERAGE,x.BEST];convertToMapKey=W.convertToMapKey;CRITICAL_CLASS="critical-color";MEDIAN_CLASS="median-color";BEST_CLASS="best-color";MAX_SPAN_SIZE=10;weakestThirdUpperBoundary;bestThirdLowerBoundary;currentPeriod=0;currentSize=0;faArrowLeft=q;faArrowRight=Q;faFilter=Z;ngOnInit(){this.initializeChart()}initializeChart(){this.includeAllIntervals(),this.exerciseAverageScores=this.orderAverageScores(this.exerciseAverageScores),this.setUpColorDistribution(),this.exerciseTypeFilter.initializeFilterOptions(this.exerciseAverageScores),this.chartCategoryFilter.setupCategoryFilter(this.exerciseAverageScores),this.setupChart(this.exerciseAverageScores),this.currentlyDisplayableExercises=this.exerciseAverageScores,this.exerciseScoresFilteredByPerformanceInterval=this.exerciseAverageScores,this.currentSize=this.exerciseAverageScores.length}switchTimeSpan(t){this.currentPeriod+=t?1:-1,this.setupChart(this.currentlyDisplayableExercises)}determineColor(t){return t>this.bestThirdLowerBoundary?R.GREEN:t<this.weakestThirdUpperBoundary?R.RED:R.GREY}onSelect(t){let r=this.determineChartEntry(t.name,t.value);if(r){let i=["course-management",this.courseId,"",r.exerciseId,"exercise-statistics"],l=r.exerciseType.toLowerCase();l===J.QUIZ?i[4]="quiz-point-statistic":l==="file_upload"&&(l="file-upload"),i[2]=l+"-exercises",this.navigationUtilService.routeInNewTab(i)}}determineChartEntry(t,r){let i=0,l;return this.ngxData.forEach(v=>{v.name===t&&v.value===r&&(i++,l=v)}),i===1?l:void 0}convertTypeForTooltip(t,r){let i=this.determineChartEntry(t,r);if(i){let l=i.exerciseType.toLowerCase();return l==="file_upload"?"file-upload":l}else return""}setupChart(t){this.barChartLabels=t.slice(this.currentPeriod,10+this.currentPeriod).map(r=>r.exerciseName),this.ngxData=t.slice(this.currentPeriod,10+this.currentPeriod).map((r,i)=>({name:this.barChartLabels[i],value:r.averageScore,exerciseType:r.exerciseType,exerciseId:r.exerciseId})),this.ngxColor.domain=this.ngxData.map(r=>this.determineColor(r.value))}setUpColorDistribution(){if(!this.exerciseAverageScores||this.exerciseAverageScores.length===0)return;let t=this.exerciseAverageScores.map(P=>P.averageScore),r=Math.floor(t.length/3),i=t[Math.max(r-1,0)],l=t.filter(P=>P>i);this.weakestThirdUpperBoundary=l.length>0?Math.min(...l):i;let v=t[Math.min(t.length-r,t.length-1)],k=t.filter(P=>P<v);this.bestThirdLowerBoundary=k.length>0?Math.max(...k):v}toggleType(t){let r=this.exerciseTypeFilter.toggleExerciseType(t,this.exerciseScoresFilteredByPerformanceInterval),i=this.chartCategoryFilter.applyCurrentFilter(this.exerciseScoresFilteredByPerformanceInterval);this.initializeChartWithFilter(i,r)}togglePerformanceInterval(t){let r=this.displayColorMap.get(t);this.currentPeriod=0;let i="";if(r!==""){this.numberOfSelectedIntervals===1?(this.includeAllIntervals(),this.exerciseScoresFilteredByPerformanceInterval=this.orderAverageScores(this.exerciseAverageScores)):this.deselectAllOtherIntervals(t),this.initializeFilterOptionsAndSetupChartWithCurrentVisibleScores();return}switch(t){case x.LOWEST:{i=this.CRITICAL_CLASS;break}case x.AVERAGE:{i=this.MEDIAN_CLASS;break}case x.BEST:{i=this.BEST_CLASS;break}}this.displayColorMap.set(t,i),this.numberOfSelectedIntervals+=1;let l=this.filterForPerformanceInterval(t);this.exerciseScoresFilteredByPerformanceInterval=this.orderAverageScores(this.exerciseScoresFilteredByPerformanceInterval.concat(l)),this.initializeFilterOptionsAndSetupChartWithCurrentVisibleScores()}filterForPerformanceInterval(t){let r;switch(t){case x.LOWEST:{r=i=>i.averageScore<this.weakestThirdUpperBoundary;break}case x.AVERAGE:{r=i=>i.averageScore>=this.weakestThirdUpperBoundary&&i.averageScore<=this.bestThirdLowerBoundary;break}case x.BEST:r=i=>i.averageScore>this.bestThirdLowerBoundary}return this.exerciseAverageScores.filter(r)}orderAverageScores(t){return t.sort((r,i)=>r.averageScore-i.averageScore)}initializeFilterOptionsAndSetupChartWithCurrentVisibleScores(){this.exerciseTypeFilter.initializeFilterOptions(this.exerciseScoresFilteredByPerformanceInterval),this.chartCategoryFilter.setupCategoryFilter(this.exerciseScoresFilteredByPerformanceInterval),this.setupChart(this.exerciseScoresFilteredByPerformanceInterval),this.currentlyDisplayableExercises=this.exerciseScoresFilteredByPerformanceInterval,this.currentSize=this.exerciseScoresFilteredByPerformanceInterval.length}includeAllIntervals(){this.displayColorMap.set(x.LOWEST,this.CRITICAL_CLASS),this.displayColorMap.set(x.AVERAGE,this.MEDIAN_CLASS),this.displayColorMap.set(x.BEST,this.BEST_CLASS),this.numberOfSelectedIntervals=3}deselectAllOtherIntervals(t){this.performanceIntervals.forEach(r=>{r!==t&&this.displayColorMap.set(r,"")}),this.numberOfSelectedIntervals=1,this.exerciseScoresFilteredByPerformanceInterval=this.filterForPerformanceInterval(t)}toggleCategory(t){let r=this.chartCategoryFilter.toggleCategory(this.exerciseScoresFilteredByPerformanceInterval,t),i=this.exerciseTypeFilter.applyCurrentFilter(this.exerciseScoresFilteredByPerformanceInterval);this.initializeChartWithFilter(r,i)}toggleAllCategories(){let t=this.chartCategoryFilter.toggleAllCategories(this.exerciseScoresFilteredByPerformanceInterval),r=this.exerciseTypeFilter.applyCurrentFilter(this.exerciseScoresFilteredByPerformanceInterval);this.initializeChartWithFilter(t,r)}toggleExercisesWithNoCategory(){let t=this.chartCategoryFilter.toggleExercisesWithNoCategory(this.exerciseScoresFilteredByPerformanceInterval),r=this.exerciseTypeFilter.applyCurrentFilter(this.exerciseScoresFilteredByPerformanceInterval);this.initializeChartWithFilter(t,r)}initializeChartWithFilter(t,r){this.currentlyDisplayableExercises=this.orderAverageScores(t.filter(i=>r.includes(i))),this.currentPeriod=0,this.setupChart(this.currentlyDisplayableExercises),this.currentSize=this.currentlyDisplayableExercises.length}formatDataLabel(t){return t+"%"}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=O({type:s,selectors:[["jhi-statistics-average-score-graph"]],inputs:{exerciseAverageScores:"exerciseAverageScores",courseAverage:"courseAverage",courseId:"courseId"},decls:44,vars:23,consts:[["containerRef",""],["tooltipTemplate",""],["placeholder",""],[1,"row","mb-3","d-flex","justify-content-center"],[1,"col-xl-1","d-flex","flex-column"],["jhiTranslate","artemisApp.course.averageScore"],[1,"row","col-xl-11","chart-row"],["size","2x","role","button",1,"col-1","d-flex","align-items-center","justify-content-end",3,"click","icon"],[1,"col-lg-8","ps-0","chart-container"],[3,"select","roundEdges","view","results","scheme","yScaleMax","xAxis","yAxis","yAxisTickFormatting","dataLabelFormatting","showDataLabel"],["size","2x","role","button",1,"col-1","d-flex","align-items-center","switch-forward",3,"click","icon"],[1,"col-lg-2","d-flex","flex-column","align-items-center","justify-content-center"],[1,"d-flex","align-items-center"],[1,"legend-container"],[1,"switch-forward-placeholder"],["aria-label","Filter Dropdown","ngbDropdown","",1,"filter","my-3"],["ngbDropdownToggle","","id","filter-dropdown-button",1,"btn"],[3,"icon"],["jhiTranslate","artemisApp.courseOverview.exerciseList.filter",3,"translateValues"],["ngbDropdownMenu","","aria-labelledby","filter-dropdown-button",1,"checkbox-menu","text-nowrap","pe-2"],[1,"mt-1","mb-1"],["jhiTranslate","artemisApp.courseOverview.statistics.includeIndividualCategories",1,"ms-2"],[1,"mb-1"],["type","checkbox",1,"ms-2","form-check-input",3,"change","checked"],["jhiTranslate","artemisApp.courseOverview.statistics.includeAllCategories",1,"ms-2"],["jhiTranslate","artemisApp.exercise-scores-chart.includeType",1,"ms-2"],[1,"ms-2"],["jhiTranslate","artemisApp.courseOverview.statistics.exercisesWithNoCategories",1,"ms-2"],[1,"legend-entry",3,"click"],[1,"color-legend",3,"ngClass"]],template:function(r,i){if(r&1){let l=E();n(0,"div",3),e(1,`
    `),n(2,"div",4),e(3,`
        `),c(4,"h3",5),e(5,`
        `),n(6,"h4"),e(7),g(8,"artemisTranslate"),a(),e(9,`
    `),a(),e(10,`
    `),n(11,"div",6),e(12,`
        `),n(13,"fa-icon",7),d("click",function(){return y(l),f(i.switchTimeSpan(i.LEFT))}),a(),e(14,`
        `),n(15,"div",8,0),e(17,`
            `),n(18,"ngx-charts-bar-vertical",9),d("select",function(k){return y(l),f(i.onSelect(k))}),e(19,`
                `),_(20,ge,17,11,"ng-template",null,1,z),e(22,`
            `),a(),e(23,`
        `),a(),e(24,`
        `),n(25,"fa-icon",10),d("click",function(){return y(l),f(i.switchTimeSpan(i.RIGHT))}),a(),e(26,`
        `),_(27,Se,3,0,"ng-template",null,2,z),e(29,`
        `),n(30,"div",11),e(31,`
            `),_(32,fe,35,11),n(33,"div",12),e(34,`
                `),n(35,"div",13),e(36,`
                    `),F(37,_e,10,4,null,null,b),a(),e(39,`
            `),a(),e(40,`
        `),a(),e(41,`
    `),a(),e(42,`
`),a(),e(43,`
`)}if(r&2){let l=j(16);o(7),D("",S(8,19,"artemisApp.courseStatistics.courseAverage"),": ",i.courseAverage,"%"),o(6),C("hidden",!(i.currentSize>i.MAX_SPAN_SIZE&&i.currentPeriod>0)),m("icon",i.faArrowLeft),o(5),m("roundEdges",!1)("view",G(21,he,l.offsetWidth))("results",i.ngxData)("scheme",i.ngxColor)("yScaleMax",100)("xAxis",!0)("yAxis",!0)("yAxisTickFormatting",i.yAxisTickFormatting)("dataLabelFormatting",i.formatDataLabel)("showDataLabel",!0),o(7),C("hidden",!(i.currentSize>i.MAX_SPAN_SIZE+i.currentPeriod)),m("icon",i.faArrowRight),o(7),A(i.exerciseTypeFilter.typeSet.size>0?32:-1),o(5),I(i.performanceIntervals)}},dependencies:[V,ee,le,oe,H,Y,K,$,L],styles:[".color-legend[_ngcontent-%COMP%]{width:15px;height:15px;border-radius:3px;border:1px solid;margin-right:5px}.legend-entry[_ngcontent-%COMP%]{cursor:pointer;display:inline-flex;align-items:center;width:100%}.legend-container[_ngcontent-%COMP%]{background:var(--stat-av-sc-legend-background);padding:5px;border-radius:5px;max-width:300px}.switch-forward[_ngcontent-%COMP%]{max-width:30px!important}.switch-forward-placeholder[_ngcontent-%COMP%]{width:60px;height:300px}.hidden[_ngcontent-%COMP%]{visibility:hidden}.critical-color[_ngcontent-%COMP%]{background:var(--stat-av-sc-legend-critical)}.median-color[_ngcontent-%COMP%]{background:var(--stat-av-sc-legend-median)}.best-color[_ngcontent-%COMP%]{background:var(--stat-av-sc-legend-best)}.chart-container[_ngcontent-%COMP%]{max-width:83%}.chart-row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding-left:0;padding-right:0}","[_nghost-%COMP%]  .textDataLabel{font-weight:bolder;font-size:small!important;alignment-baseline:middle;text-anchor:start}@media (min-width: 1420px){[_nghost-%COMP%]  .textDataLabel{transform:rotate(0);font-size:medium!important;alignment-baseline:baseline;text-anchor:middle}}"]})}return s})();function Te(s,p){if(s&1&&(e(0,`
        `),c(1,"jhi-statistics-average-score-graph",13),e(2,`
    `)),s&2){let t=h();o(),m("exerciseAverageScores",t.courseStatistics.averageScoresOfExercises)("courseAverage",t.courseStatistics.averageScoreOfCourse)("courseId",t.courseId)}}function Ae(s,p){s&1&&(e(0,`
                `),c(1,"hr"),e(2,`
            `))}function Ee(s,p){if(s&1&&(e(0,`
        `),n(1,"div",14),e(2,`
            `),_(3,Ae,3,0),c(4,"jhi-statistics-graph",15),e(5,`
        `),a(),e(6,`
    `)),s&2){let t=p.$implicit,r=p.$index,i=h();o(),U("id","graph-",r,""),o(2),A(r!==0?3:-1),o(),m("graphType",t)("currentSpan",i.currentSpan)("statisticsView",i.statisticsView)("entityId",i.courseId)}}var tt=(()=>{class s{service=T(ne);route=T(X);documentationType="Statistics";SpanType=B;graph=u;graphTypes;currentSpan=B.WEEK;statisticsView=re.COURSE;paramSub;courseId;course;defaultTitle="Course";selectedValueAverageScore;currentAverageScore=0;currentAbsolutePoints=0;currentMaxPoints=1;exerciseTitles;selectedValueAverageRating;currentAverageRating=0;currentAverageRatingInPercent=0;tutorNames;courseStatistics;ngOnInit(){this.paramSub=this.route.params.subscribe(t=>{this.courseId=t.courseId}),this.route.data.subscribe(({course:t})=>{this.course=t,this.initializeGraphTypes()}),this.service.getCourseStatistics(this.courseId).subscribe(t=>{this.courseStatistics=t})}initializeGraphTypes(){this.graphTypes=[u.SUBMISSIONS,u.ACTIVE_USERS,u.RELEASED_EXERCISES,u.EXERCISES_DUE,u.ACTIVE_TUTORS,u.CREATED_RESULTS,u.CREATED_FEEDBACKS,N(this.course)&&u.POSTS,N(this.course)&&u.RESOLVED_POSTS,u.CONDUCTED_EXAMS,u.EXAM_PARTICIPATIONS,u.EXAM_REGISTRATIONS].filter(Boolean)}onTabChanged(t){this.currentSpan=t}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=O({type:s,selectors:[["jhi-course-management-statistics"]],decls:56,vars:27,consts:[[1,"row","mb-5"],[1,"d-flex","align-items-center"],["id","statistics-page-heading","jhiTranslate","statistics.course_statistics_title"],[3,"type"],[1,"separator","w-100","mb-4"],[1,"col-md-2"],["data-toggle","buttons",1,"col-md-9","btn-group","btn-group-toggle"],[1,"btn","btn-secondary"],["type","radio","name","options","id","option1",3,"click"],["type","radio","name","options","id","option2","checked","",3,"click"],["type","radio","name","options","id","option3",3,"click"],["type","radio","name","options","id","option4",3,"click"],["type","radio","name","options","id","option5",3,"click"],[3,"exerciseAverageScores","courseAverage","courseId"],[1,"graph",3,"id"],[3,"graphType","currentSpan","statisticsView","entityId"]],template:function(r,i){r&1&&(n(0,"div"),e(1,`
    `),n(2,"div",0),e(3,`
        `),n(4,"div",1),e(5,`
            `),c(6,"h2",2),e(7,`
            `),c(8,"jhi-documentation-button",3),e(9,`
        `),a(),e(10,`
    `),a(),e(11,`
    `),_(12,Te,3,3),c(13,"div",4),e(14,`
    `),n(15,"div",0),e(16,`
        `),c(17,"div",5),e(18,`
        `),n(19,"div",6),e(20,`
            `),n(21,"label",7),e(22,`
                `),n(23,"input",8),d("click",function(){return i.onTabChanged(i.SpanType.DAY)}),a(),e(24),g(25,"artemisTranslate"),a(),e(26,`
            `),n(27,"label",7),e(28,`
                `),n(29,"input",9),d("click",function(){return i.onTabChanged(i.SpanType.WEEK)}),a(),e(30),g(31,"artemisTranslate"),a(),e(32,`
            `),n(33,"label",7),e(34,`
                `),n(35,"input",10),d("click",function(){return i.onTabChanged(i.SpanType.MONTH)}),a(),e(36),g(37,"artemisTranslate"),a(),e(38,`
            `),n(39,"label",7),e(40,`
                `),n(41,"input",11),d("click",function(){return i.onTabChanged(i.SpanType.QUARTER)}),a(),e(42),g(43,"artemisTranslate"),a(),e(44,`
            `),n(45,"label",7),e(46,`
                `),n(47,"input",12),d("click",function(){return i.onTabChanged(i.SpanType.YEAR)}),a(),e(48),g(49,"artemisTranslate"),a(),e(50,`
        `),a(),e(51,`
    `),a(),e(52,`
    `),F(53,Ee,7,7,null,null,b),a(),e(55,`
`)),r&2&&(o(8),m("type",i.documentationType),o(4),A(i.courseStatistics?12:-1),o(9),C("active",i.currentSpan===i.SpanType.DAY),o(3),w("",S(25,17,"statistics.span.day"),`
            `),o(3),C("active",i.currentSpan===i.SpanType.WEEK),o(3),w("",S(31,19,"statistics.span.week"),`
            `),o(3),C("active",i.currentSpan===i.SpanType.MONTH),o(3),w("",S(37,21,"statistics.span.month"),`
            `),o(3),C("active",i.currentSpan===i.SpanType.QUARTER),o(3),w("",S(43,23,"statistics.span.quarter"),`
            `),o(3),C("active",i.currentSpan===i.SpanType.YEAR),o(3),w("",S(49,25,"statistics.span.year"),`
            `),o(5),I(i.graphTypes))},dependencies:[V,te,me,ce,L],styles:[".separator[_ngcontent-%COMP%]{border-top:3px solid lightgray}"]})}return s})();export{tt as CourseManagementStatisticsComponent};
//# sourceMappingURL=course-management-statistics.component-5EBDDT6Y.js.map
