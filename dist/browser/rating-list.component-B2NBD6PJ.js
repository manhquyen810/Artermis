import{a as D}from"./chunk-LZCUSXEX.js";import{a as W}from"./chunk-NPMFKF37.js";import{a as P}from"./chunk-OTCBNILH.js";import{a as B,b as F}from"./chunk-VRAVBLUK.js";import{d as k}from"./chunk-EDXSOKK5.js";import"./chunk-DID2YGL7.js";import{c as O}from"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Qa as w,oa as I}from"./chunk-Z4VHWOB5.js";import{a as A}from"./chunk-U54OSGNH.js";import{f as b,h as L}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as a,Dc as C,Ea as c,Ma as h,Mc as u,Na as f,Oc as g,Tb as y,dd as e,ed as d,fd as R,kc as l,ld as T,md as S,nd as j,uc as v,vc as E,wc as _,xc as t,yc as i,zc as s}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";function N(m,M){if(m&1){let n=C();e(0,`
                    `),t(1,"tr"),e(2,`
                        `),t(3,"td"),e(4),i(),e(5,`
                        `),t(6,"td"),e(7,`
                            `),t(8,"span"),e(9),i(),e(10,`
                        `),i(),e(11,`
                        `),t(12,"td"),e(13,`
                            `),t(14,"span"),e(15),i(),e(16,`
                        `),i(),e(17,`
                        `),t(18,"td"),e(19,`
                            `),t(20,"span"),e(21),i(),e(22,`
                        `),i(),e(23,`
                        `),t(24,"td"),e(25,`
                            `),t(26,"span"),e(27),i(),e(28,`
                        `),i(),e(29,`
                        `),t(30,"td"),e(31,`
                            `),t(32,"span"),e(33),i(),e(34,`
                        `),i(),e(35,`
                        `),t(36,"td"),e(37,`
                            `),t(38,"span"),s(39,"star-rating",26),i(),e(40,`
                        `),i(),e(41,`
                        `),t(42,"td",27),e(43,`
                            `),t(44,"button",28),u("click",function(){let r=h(n).$implicit,x=g();return f(x.openResult(r))}),e(45,`
                                `),s(46,"fa-icon",29),e(47,`
                                `),s(48,"span",30),e(49,`
                            `),i(),e(50,`
                        `),i(),e(51,`
                    `),i(),e(52,`
                `)}if(m&2){let n=M.$implicit,o=g();a(4),R(`
                            `,n.id,`
                        `),a(5),d(n.result==null||n.result.participation==null||n.result.participation.exercise==null?null:n.result.participation.exercise.title),a(6),d(n.result==null||n.result.participation==null||n.result.participation.exercise==null?null:n.result.participation.exercise.type),a(6),d(n.result==null||n.result.assessor==null?null:n.result.assessor.login),a(6),d(n.result==null||n.result.assessor==null?null:n.result.assessor.name),a(6),d(n.result==null?null:n.result.assessmentType),a(6),l("value",n.rating||0)("readOnly",!0)("totalStars",5),a(7),l("icon",o.faFolderOpen)("fixedWidth",!0)}}var ee=(()=>{class m{ratingService=c(D);route=c(b);sortService=c(P);router=c(L);ratings=[];courseId;ratingsSortingPredicate="id";ratingsReverseOrder=!1;faSort=w;faFolderOpen=I;ngOnInit(){this.route.parent.params.subscribe(n=>{this.courseId=Number(n.courseId)}),this.ratingService.getRatingsForDashboard(this.courseId).subscribe(n=>{this.ratings=n})}sortRows(){this.sortService.sortByProperty(this.ratings,this.ratingsSortingPredicate,this.ratingsReverseOrder)}openResult(n){let o=n.result?.participation,r=n.result?.participation?.exercise;o&&r&&(r.type===O.PROGRAMMING?this.router.navigate(["/courses",this.courseId,`${r.type}-exercises`,r.id,"code-editor",o.id]):this.router.navigate(["/courses",this.courseId,`${r.type}-exercises`,r.id,"participate",o.id]))}static \u0275fac=function(o){return new(o||m)};static \u0275cmp=y({type:m,selectors:[["jhi-rating-list"]],decls:91,vars:11,consts:[[1,"course-info-bar"],[1,"row","justify-content-between"],[1,"col-md-8"],["jhiTranslate","artemisApp.ratingList.title"],[1,"col-12","mt-4"],[1,"row","table-responsive"],[3,"hidden"],["jhiTranslate","artemisApp.ratingList.noRatingToShow"],[1,"table",3,"hidden"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["jhiSortBy","id"],[1,"th-link"],[3,"icon"],["jhiSortBy","result.participation.exercise.title"],["jhiTranslate","artemisApp.ratingList.exercise",1,"th-link"],["jhiSortBy","result.participation.exercise.type"],["jhiTranslate","artemisApp.ratingList.exerciseType",1,"th-link"],["jhiSortBy","result.assessor.login"],["jhiTranslate","artemisApp.complaint.listOfComplaints.assessorLogin",1,"th-link"],["jhiSortBy","result.assessor.name"],["jhiTranslate","artemisApp.complaint.listOfComplaints.assessorName",1,"th-link"],["jhiSortBy","rating.result.assessmentType"],["jhiTranslate","artemisApp.ratingList.assessmentType",1,"th-link"],["jhiSortBy","rating"],["jhiTranslate","artemisApp.ratingList.rating",1,"th-link"],["jhiTranslate","artemisApp.ratingList.actions",1,"text-center"],["checkedColor","gold","uncheckedColor","grey","size","24",3,"value","readOnly","totalStars"],[1,"text-center"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"icon","fixedWidth"],["jhiTranslate","artemisApp.ratingList.openSubmission"]],template:function(o,r){o&1&&(t(0,"div",0),e(1,`
    `),t(2,"div",1),e(3,`
        `),t(4,"div",2),e(5,`
            `),t(6,"h2"),e(7,`
                `),s(8,"span",3),e(9,`
            `),i(),e(10,`
        `),i(),e(11,`
    `),i(),e(12,`
`),i(),e(13,`
`),t(14,"div",4),e(15,`
    `),t(16,"div",5),e(17,`
        `),t(18,"div",6),e(19,`
            `),s(20,"span",7),e(21,`
        `),i(),e(22,`
        `),t(23,"table",8),e(24,`
            `),t(25,"thead"),e(26,`
                `),t(27,"tr",9),j("predicateChange",function(p){return S(r.ratingsSortingPredicate,p)||(r.ratingsSortingPredicate=p),p})("ascendingChange",function(p){return S(r.ratingsReverseOrder,p)||(r.ratingsReverseOrder=p),p}),u("sortChange",function(){return r.sortRows()}),e(28,`
                    `),t(29,"th",10),e(30,`
                        `),t(31,"a",11),e(32,"#"),i(),e(33,`
                        `),s(34,"fa-icon",12),e(35,`
                    `),i(),e(36,`
                    `),t(37,"th",13),e(38,`
                        `),s(39,"a",14),e(40,`
                        `),s(41,"fa-icon",12),e(42,`
                    `),i(),e(43,`
                    `),t(44,"th",15),e(45,`
                        `),s(46,"a",16),e(47,`
                        `),s(48,"fa-icon",12),e(49,`
                    `),i(),e(50,`
                    `),t(51,"th",17),e(52,`
                        `),s(53,"a",18),e(54,`
                        `),s(55,"fa-icon",12),e(56,`
                    `),i(),e(57,`
                    `),t(58,"th",19),e(59,`
                        `),s(60,"a",20),e(61,`
                        `),s(62,"fa-icon",12),e(63,`
                    `),i(),e(64,`
                    `),t(65,"th",21),e(66,`
                        `),s(67,"a",22),e(68,`
                        `),s(69,"fa-icon",12),e(70,`
                    `),i(),e(71,`
                    `),t(72,"th",23),e(73,`
                        `),s(74,"a",24),e(75,`
                        `),s(76,"fa-icon",12),e(77,`
                    `),i(),e(78,`
                    `),s(79,"th",25),e(80,`
                `),i(),e(81,`
            `),i(),e(82,`
            `),t(83,"tbody"),e(84,`
                `),E(85,N,53,11,null,null,v),i(),e(87,`
        `),i(),e(88,`
    `),i(),e(89,`
`),i(),e(90,`
`)),o&2&&(a(18),l("hidden",r.ratings.length!==0),a(5),l("hidden",r.ratings.length===0),a(4),T("predicate",r.ratingsSortingPredicate)("ascending",r.ratingsReverseOrder),a(7),l("icon",r.faSort),a(7),l("icon",r.faSort),a(7),l("icon",r.faSort),a(7),l("icon",r.faSort),a(7),l("icon",r.faSort),a(7),l("icon",r.faSort),a(7),l("icon",r.faSort),a(9),_(r.ratings))},dependencies:[A,B,F,k,W],encapsulation:2})}return m})();export{ee as RatingListComponent};
//# sourceMappingURL=rating-list.component-B2NBD6PJ.js.map
