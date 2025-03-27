import{a as re}from"./chunk-AYOCTQ7R.js";import{a as ne}from"./chunk-OTCBNILH.js";import{a as te,b as ie}from"./chunk-VRAVBLUK.js";import{d as X}from"./chunk-AR57MWOI.js";import{f as Q}from"./chunk-MLVGKM2P.js";import{c as K}from"./chunk-CK7FH6VF.js";import{c as g}from"./chunk-5MVJAZRV.js";import{c as G}from"./chunk-JXJXC4DZ.js";import{d as Z}from"./chunk-EDXSOKK5.js";import{Oc as q,Qa as J}from"./chunk-Z4VHWOB5.js";import{a as ee}from"./chunk-U54OSGNH.js";import{f as $,h as z}from"./chunk-M6Z6DKZQ.js";import{O as W}from"./chunk-IOA4DPXY.js";import{A as D,Db as o,Dc as U,Ea as m,F,Ma as S,Mc as u,Na as E,Oc as h,Sc as H,T as j,Tb as w,W as A,Ya as y,Za as b,Zb as k,aa as C,dd as e,ed as x,kc as d,ld as P,mc as L,md as _,nd as V,oa as M,r as I,sc as Y,uc as O,vc as R,wc as N,xc as n,ya as B,yc as r,z as v,zc as s}from"./chunk-5LC5EQRR.js";var ae=(()=>{class c{httpClient=m(W);lectureUnitService=m(Q);resourceURL="api/lecture";create(t,a){return t.exercise&&(t.exercise.categories=K.stringifyExerciseCategories(t.exercise)),this.httpClient.post(`${this.resourceURL}/lectures/${a}/exercise-units`,t,{observe:"response"}).pipe(v(i=>this.lectureUnitService.convertLectureUnitResponseDatesFromServer(i)))}findAllByLectureId(t){return this.httpClient.get(`${this.resourceURL}/lectures/${t}/exercise-units`,{observe:"response"}).pipe(v(a=>this.lectureUnitService.convertLectureUnitResponseArrayDatesFromServer(a)))}static \u0275fac=function(a){return new(a||c)};static \u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();function se(c,T){if(c&1){let t=U();e(0,`
                `),n(1,"button",26),u("click",function(){S(t);let i=h();return E(i.cancelForm())}),s(2,"fa-icon",13),e(3,"\xA0"),s(4,"span",27),r(),e(5,`
            `)}if(c&2){let t=h();o(2),d("icon",t.faTimes)}}function ce(c,T){if(c&1){let t=U();e(0,`
                            `),n(1,"tr",28),u("click",function(){let i=S(t).$implicit,p=h();return E(p.selectExerciseForUnitCreation(i))}),e(2,`
                                `),n(3,"td"),e(4),r(),e(5,`
                                `),n(6,"td"),e(7),r(),e(8,`
                                `),n(9,"td"),e(10),r(),e(11,`
                                `),n(12,"td"),e(13),r(),e(14,`
                                `),n(15,"td"),e(16),r(),e(17,`
                                `),n(18,"td"),e(19),r(),e(20,`
                                `),n(21,"td"),e(22),r(),e(23,`
                            `),r(),e(24,`
                        `)}if(c&2){let t=T.$implicit,a=h();o(),L("table-primary",a.isExerciseSelectedForUnitCreation(t)),H("id","exercise-",t.id,""),o(3),x(t.id?t.id:""),o(3),x(t.type?t.type:""),o(3),x(t.title?t.title:""),o(3),x(t.shortName?t.shortName:""),o(3),x(t.releaseDate?t.releaseDate.format("MMM DD YYYY, HH:mm:ss"):""),o(3),x(t.dueDate?t.dueDate.format("MMM DD YYYY, HH:mm:ss"):""),o(3),x(t.assessmentDueDate?t.assessmentDueDate.format("MMM DD YYYY, HH:mm:ss"):"")}}var ke=(()=>{class c{activatedRoute=m($);router=m(z);courseManagementService=m(X);alertService=m(G);sortService=m(ne);exerciseUnitService=m(ae);faTimes=q;faSort=J;lectureId;courseId;hasCancelButton=b();shouldNavigateOnSubmit=b(!0);onCancel=y();onExerciseUnitCreated=y();predicate="type";reverse=!1;isLoading=!1;exercisesAvailableForUnitCreation=[];exercisesToCreateUnitFor=[];ngOnInit(){this.isLoading=!0;let t=this.activatedRoute.parent.parent;D([t.paramMap,t.parent.paramMap]).pipe(A(1),M(([a,i])=>{this.lectureId??=Number(a.get("lectureId")),this.courseId??=Number(i.get("courseId"));let p=this.courseManagementService.findWithExercises(this.courseId),l=this.exerciseUnitService.findAllByLectureId(this.lectureId);return F([p,l])}),C(()=>{this.isLoading=!1})).subscribe({next:([a,i])=>{let p=a?.body?.exercises?a?.body?.exercises:[],l=i?.body?i?.body?.map(f=>f.exercise?.id):[];this.exercisesAvailableForUnitCreation=p.filter(f=>!l.includes(f.id))},error:a=>g(this.alertService,a)})}createExerciseUnits(){let t=this.exercisesToCreateUnitFor.map(a=>{let i=new re;return i.exercise=a,i});I(t).pipe(j(a=>this.exerciseUnitService.create(a,this.lectureId)),C(()=>{this.shouldNavigateOnSubmit()?this.router.navigate(["../../"],{relativeTo:this.activatedRoute}):this.onExerciseUnitCreated.emit()})).subscribe({error:a=>g(this.alertService,a)})}sortRows(){this.sortService.sortByProperty(this.exercisesAvailableForUnitCreation,this.predicate,this.reverse)}selectExerciseForUnitCreation(t){this.isExerciseSelectedForUnitCreation(t)?this.exercisesToCreateUnitFor.forEach((a,i)=>{a===t&&this.exercisesToCreateUnitFor.splice(i,1)}):this.exercisesToCreateUnitFor.push(t)}isExerciseSelectedForUnitCreation(t){return this.exercisesToCreateUnitFor.includes(t)}cancelForm(){this.onCancel.emit()}static \u0275fac=function(a){return new(a||c)};static \u0275cmp=w({type:c,selectors:[["jhi-create-exercise-unit"]],inputs:{lectureId:"lectureId",courseId:"courseId",hasCancelButton:[1,"hasCancelButton"],shouldNavigateOnSubmit:[1,"shouldNavigateOnSubmit"]},outputs:{onCancel:"onCancel",onExerciseUnitCreated:"onExerciseUnitCreated"},decls:95,vars:11,consts:[[1,"container"],[1,"row"],[1,"col-12","mx-auto"],["jhiTranslate","artemisApp.exerciseUnit.createExerciseUnit.headline"],[1,"col-sm-6","mx-auto"],["jhiTranslate","artemisApp.exerciseUnit.createExerciseUnit.description"],[1,"col-sm-6","mx-auto","text-end"],["id","createButton","type","button","jhiTranslate","entity.action.submit",1,"btn","btn-primary",3,"click","disabled"],[1,"table-responsive"],[1,"table","table-bordered"],[1,"thead-dark"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["jhiSortBy","id"],[3,"icon"],["jhiSortBy","type"],["jhiTranslate","artemisApp.exercise.type"],["jhiSortBy","title"],["jhiTranslate","artemisApp.exercise.title"],["jhiSortBy","shortName"],["jhiTranslate","artemisApp.exercise.shortName"],["jhiSortBy","releaseDate"],["jhiTranslate","artemisApp.exercise.releaseDate"],["jhiSortBy","dueDate"],["jhiTranslate","artemisApp.exercise.dueDate"],["jhiSortBy","assessmentDueDate"],["jhiTranslate","artemisApp.exercise.assessmentDueDate"],["type","button",1,"btn","btn-secondary",3,"click"],["jhiTranslate","entity.action.cancel"],[3,"click","id"]],template:function(a,i){a&1&&(n(0,"div",0),e(1,`
    `),n(2,"div",1),e(3,`
        `),n(4,"div",2),e(5,`
            `),s(6,"h2",3),e(7,`
        `),r(),e(8,`
    `),r(),e(9,`
    `),n(10,"div",1),e(11,`
        `),n(12,"div",4),e(13,`
            `),s(14,"p",5),e(15,`
        `),r(),e(16,`
        `),n(17,"div",6),e(18,`
            `),k(19,se,6,1),n(20,"button",7),u("click",function(){return i.createExerciseUnits()}),r(),e(21,`
        `),r(),e(22,`
    `),r(),e(23,`
    `),n(24,"div",1),e(25,`
        `),n(26,"div",2),e(27,`
            `),n(28,"div",8),e(29,`
                `),n(30,"table",9),e(31,`
                    `),n(32,"thead",10),e(33,`
                        `),n(34,"tr",11),V("predicateChange",function(l){return _(i.predicate,l)||(i.predicate=l),l})("ascendingChange",function(l){return _(i.reverse,l)||(i.reverse=l),l}),u("sortChange",function(){return i.sortRows()}),e(35,`
                            `),n(36,"th",12),e(37,`
                                id
                                `),s(38,"fa-icon",13),e(39,`
                            `),r(),e(40,`
                            `),n(41,"th",14),e(42,`
                                `),s(43,"span",15),e(44,`
                                `),s(45,"fa-icon",13),e(46,`
                            `),r(),e(47,`
                            `),n(48,"th",16),e(49,`
                                `),s(50,"span",17),e(51,`
                                `),s(52,"fa-icon",13),e(53,`
                            `),r(),e(54,`
                            `),n(55,"th",18),e(56,`
                                `),s(57,"span",19),e(58,`
                                `),s(59,"fa-icon",13),e(60,`
                            `),r(),e(61,`
                            `),n(62,"th",20),e(63,`
                                `),s(64,"span",21),e(65,`
                                `),s(66,"fa-icon",13),e(67,`
                            `),r(),e(68,`
                            `),n(69,"th",22),e(70,`
                                `),s(71,"span",23),e(72,`
                                `),s(73,"fa-icon",13),e(74,`
                            `),r(),e(75,`
                            `),n(76,"th",24),e(77,`
                                `),s(78,"span",25),e(79,`
                                `),s(80,"fa-icon",13),e(81,`
                            `),r(),e(82,`
                        `),r(),e(83,`
                    `),r(),e(84,`
                    `),n(85,"tbody"),e(86,`
                        `),R(87,ce,25,11,null,null,O),r(),e(89,`
                `),r(),e(90,`
            `),r(),e(91,`
        `),r(),e(92,`
    `),r(),e(93,`
`),r(),e(94,`
`)),a&2&&(o(19),Y(i.hasCancelButton()?19:-1),o(),d("disabled",i.exercisesToCreateUnitFor.length===0),o(14),P("predicate",i.predicate)("ascending",i.reverse),o(4),d("icon",i.faSort),o(7),d("icon",i.faSort),o(7),d("icon",i.faSort),o(7),d("icon",i.faSort),o(7),d("icon",i.faSort),o(7),d("icon",i.faSort),o(7),d("icon",i.faSort),o(7),N(i.exercisesAvailableForUnitCreation))},dependencies:[ee,Z,te,ie],styles:["tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:var(--lecture-unit-create-row-hover-background);cursor:pointer}"]})}return c})();export{ke as a};
//# sourceMappingURL=chunk-33RKLPG3.js.map
