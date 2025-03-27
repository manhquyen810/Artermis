import{a as ae}from"./chunk-OTCBNILH.js";import{a as ne,b as re}from"./chunk-VRAVBLUK.js";import{a as ie}from"./chunk-2QXIMOEO.js";import{d as Y}from"./chunk-AR57MWOI.js";import"./chunk-A5PTZAPN.js";import"./chunk-AU6UEH3U.js";import"./chunk-FGAONQTL.js";import"./chunk-HQ6UGNQX.js";import"./chunk-ZLJ76G5I.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import{c as X}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import{c as te}from"./chunk-JNO6DNVW.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as U,b as N,h as H,m as P}from"./chunk-WA5GEAJB.js";import"./chunk-5GXY5RYT.js";import{a as Q}from"./chunk-BQRUD4AM.js";import{a as Z}from"./chunk-K3W6YFKH.js";import{c as K}from"./chunk-JXJXC4DZ.js";import{d as $}from"./chunk-EDXSOKK5.js";import{b as J}from"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Qa as q,hb as z,wd as G}from"./chunk-Z4VHWOB5.js";import{b as W}from"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as ee}from"./chunk-U54OSGNH.js";import{f as F,h as O}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{L as R,O as M}from"./chunk-IOA4DPXY.js";import{Db as r,Dc as y,Ea as u,Ma as f,Mc as E,Na as v,Oc as h,Sc as A,Tb as k,Zb as C,dd as e,ed as S,fd as m,kc as l,ld as w,md as L,nd as B,qd as j,rd as V,sc as T,uc as D,vc as I,wc as b,xc as i,yc as n,yd as p,zc as c,zd as d}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var se=()=>["ROLE_ADMIN","ROLE_INSTRUCTOR"],le=s=>({title:s});function ce(s,_){if(s&1){let t=y();e(0,`
                        `),i(1,"tr",23),e(2,`
                            `),i(3,"td",12),e(4,`
                                `),i(5,"input",24),E("change",function(){let a=f(t).$implicit,x=h(2);return v(x.selectExercise(a.id))}),n(),e(6,`
                            `),n(),e(7,`
                            `),i(8,"td"),e(9),n(),e(10,`
                            `),i(11,"td"),e(12),n(),e(13,`
                            `),i(14,"td"),e(15),n(),e(16,`
                            `),i(17,"td"),e(18),p(19,"artemisDate"),n(),e(20,`
                            `),i(21,"td"),e(22),p(23,"artemisDate"),n(),e(24,`
                            `),i(25,"td"),e(26),p(27,"artemisDate"),n(),e(28,`
                            `),i(29,"td"),e(30),p(31,"artemisDate"),n(),e(32,`
                            `),i(33,"td"),e(34),p(35,"artemisTranslate"),p(36,"artemisTranslate"),n(),e(37,`
                        `),n(),e(38,`
                    `)}if(s&2){let t=_.$implicit,o=h(2);r(),A("id","exercise-",t.id,""),r(4),l("ngModel",o.isExerciseSelected(t.id)),r(4),S(t.id?t.id:""),r(3),S(t.type?t.type:""),r(3),S(t.title?t.title:""),r(3),S(d(19,11,t.releaseDate)),r(4),S(d(23,13,t.startDate)),r(4),S(d(27,15,t.dueDate)),r(4),S(d(31,17,t.assessmentDueDate)),r(4),m(`
                                `,t.includedInOverallScore==="NOT_INCLUDED"?d(35,19,"artemisApp.exercise.no"):d(36,21,"artemisApp.exercise.yes"),`
                            `)}}function pe(s,_){if(s&1){let t=y();e(0,`
                `),i(1,"button",25),E("click",function(){f(t);let a=h(2);return v(a.sendDeepLinkRequest())}),e(2,`
                    `),c(3,"span",26),e(4,`
                `),n(),e(5,`
            `)}}function de(s,_){s&1&&(e(0,`
                `),i(1,"button",27),e(2,`
                    `),c(3,"span",28),e(4,`
                `),n(),e(5,`
            `))}function me(s,_){if(s&1){let t=y();i(0,"div",2),e(1,`
    `),i(2,"div",3),e(3,`
        `),i(4,"div",4),e(5,`
            `),i(6,"h4",5),e(7),n(),e(8,`
            `),c(9,"jhi-help-icon",6),e(10,`
        `),n(),e(11,`
    `),n(),e(12,`
    `),i(13,"div",7),e(14,`
        `),i(15,"div",8),e(16,`
            `),i(17,"table",9),e(18,`
                `),i(19,"thead",10),e(20,`
                    `),i(21,"tr",11),B("predicateChange",function(a){f(t);let x=h();return L(x.predicate,a)||(x.predicate=a),v(a)})("ascendingChange",function(a){f(t);let x=h();return L(x.reverse,a)||(x.reverse=a),v(a)}),E("sortChange",function(){f(t);let a=h();return v(a.sortRows())}),e(22,`
                        `),c(23,"th",12),e(24,`
                        `),i(25,"th",13),e(26,`
                            id
                            `),c(27,"fa-icon",14),e(28,`
                        `),n(),e(29,`
                        `),i(30,"th",15),e(31),p(32,"artemisTranslate"),c(33,"fa-icon",14),e(34,`
                        `),n(),e(35,`
                        `),i(36,"th",16),e(37),p(38,"artemisTranslate"),c(39,"fa-icon",14),e(40,`
                        `),n(),e(41,`
                        `),i(42,"th",17),e(43),p(44,"artemisTranslate"),c(45,"fa-icon",14),e(46,`
                        `),n(),e(47,`
                        `),i(48,"th",18),e(49),p(50,"artemisTranslate"),c(51,"fa-icon",14),e(52,`
                        `),n(),e(53,`
                        `),i(54,"th",19),e(55),p(56,"artemisTranslate"),c(57,"fa-icon",14),e(58,`
                        `),n(),e(59,`
                        `),i(60,"th",20),e(61),p(62,"artemisTranslate"),c(63,"fa-icon",14),e(64,`
                        `),n(),e(65,`
                        `),i(66,"th",21),e(67),p(68,"artemisTranslate"),c(69,"fa-icon",14),e(70,`
                        `),n(),e(71,`
                    `),n(),e(72,`
                `),n(),e(73,`
                `),i(74,"tbody"),e(75,`
                    `),I(76,ce,39,23,null,null,D),n(),e(78,`
            `),n(),e(79,`
        `),n(),e(80,`
    `),n(),e(81,`
    `),i(82,"div",22),e(83,`
        `),i(84,"div"),e(85,`
            `),C(86,pe,6,0)(87,de,6,0),n(),e(88,`
    `),n(),e(89,`
`),n()}if(s&2){let t=h();l("hidden",!t.isLinking),r(6),l("translateValues",V(35,le,t.course==null?null:t.course.title)),r(),m(`
                Select content from course `,t.course==null?null:t.course.title,`
            `),r(14),w("predicate",t.predicate)("ascending",t.reverse),r(6),l("icon",t.faSort),r(4),m(`
                            `,d(32,21,"artemisApp.exercise.type"),`
                            `),r(2),l("icon",t.faSort),r(4),m(`
                            `,d(38,23,"artemisApp.exercise.title"),`
                            `),r(2),l("icon",t.faSort),r(4),m(`
                            `,d(44,25,"artemisApp.exercise.releaseDate"),`
                            `),r(2),l("icon",t.faSort),r(4),m(`
                            `,d(50,27,"artemisApp.exercise.startDate"),`
                            `),r(2),l("icon",t.faSort),r(4),m(`
                            `,d(56,29,"artemisApp.exercise.dueDate"),`
                            `),r(2),l("icon",t.faSort),r(4),m(`
                            `,d(62,31,"artemisApp.exercise.assessmentDueDate"),`
                            `),r(2),l("icon",t.faSort),r(4),m(`
                            `,d(68,33,"artemisApp.exercise.includedInOverallScore"),`
                            `),r(2),l("icon",t.faSort),r(7),b(t.exercises),r(10),T(t.selectedExercises!=null&&t.selectedExercises.size?86:87)}}var Re=(()=>{class s{route=u(F);sortService=u(ae);courseManagementService=u(Y);http=u(M);accountService=u(J);router=u(O);alertService=u(K);sessionStorageService=u(W);courseId;exercises;selectedExercises=new Set;course;predicate="type";reverse=!1;isLinking=!0;faSort=q;faExclamationTriangle=G;faWrench=z;ngOnInit(){this.route.params.subscribe(t=>{if(this.courseId=Number(t.courseId),!this.courseId){this.isLinking=!1;return}this.isLinking&&this.accountService.identity().then(o=>{o?this.courseManagementService.findWithExercises(this.courseId).subscribe(a=>{a?.body?.exercises&&(this.course=a.body,this.exercises=a.body.exercises)}):this.redirectUserToLoginThenTargetLink(window.location.href)})})}redirectUserToLoginThenTargetLink(t){this.router.navigate(["/"]).then(()=>{this.accountService.getAuthenticationState().subscribe(o=>{o&&window.location.replace(t)})})}sortRows(){this.sortService.sortByProperty(this.exercises,this.predicate,this.reverse)}selectExercise(t){t!==void 0&&(this.selectedExercises?.has(t)?this.selectedExercises?.delete(t):this.selectedExercises?.add(t))}isExerciseSelected(t){return t!==void 0&&this.selectedExercises?.has(t)}sendDeepLinkRequest(){if(this.selectedExercises?.size){let t=this.sessionStorageService.retrieve("ltiIdToken")??"",o=this.sessionStorageService.retrieve("clientRegistrationId")??"",a=Array.from(this.selectedExercises).join(","),x=new R().set("exerciseIds",a).set("ltiIdToken",t).set("clientRegistrationId",o);this.http.post(`api/lti/lti13/deep-linking/${this.courseId}`,null,{observe:"response",params:x}).subscribe({next:g=>{if(g.status===200){if(g.body){let oe=g.body.targetLinkUri;window.location.replace(oe)}}else this.isLinking=!1,this.alertService.error("artemisApp.lti13.deepLinking.unknownError")},error:g=>{this.isLinking=!1,X(this.alertService,g)}})}else this.alertService.error("artemisApp.lti13.deepLinking.selectToLink")}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=k({type:s,selectors:[["jhi-deep-linking"]],decls:4,vars:3,consts:[[3,"hidden",4,"jhiHasAnyAuthority"],["jhiTranslate","artemisApp.lti13.deepLinking.linkedFailed",3,"hidden"],[3,"hidden"],[1,"modal-header"],[1,"col","d-flex","flex-row","pt-3","pb-1"],["jhiTranslate","artemisApp.lti13.selectContentFromCourse",1,"modal-title",3,"translateValues"],["text","artemisApp.lti13.selectContentTooltip",1,"ps-1"],[1,"modal-body"],[1,"table-responsive"],[1,"table","table-bordered"],[1,"thead-dark"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],[1,"d-md-table-cell"],["jhiSortBy","id"],[3,"icon"],["jhiSortBy","type"],["jhiSortBy","title"],["jhiSortBy","releaseDate"],["jhiSortBy","startDate"],["jhiSortBy","dueDate"],["jhiSortBy","assessmentDueDate"],["jhiSortBy","includedInOverallScore"],[1,"modal-footer"],[3,"id"],["type","checkbox",1,"form-check-input",3,"change","ngModel"],["type","submit",1,"btn","btn-success",3,"click"],["jhiTranslate","artemisApp.lti13.deepLinking.link",1,"d-sm-inline"],["type","submit",1,"btn","btn-success","disabled"],["jhiTranslate","artemisApp.lti13.deepLinking.selectToLink",1,"d-sm-inline"]],template:function(o,a){o&1&&(C(0,me,90,37,"div",0),e(1,`
`),c(2,"h2",1),e(3,`
`)),o&2&&(l("jhiHasAnyAuthority",j(2,se)),r(2),l("hidden",a.isLinking))},dependencies:[ee,$,U,N,H,P,ie,Z,re,ne,te,Q],encapsulation:2})}return s})();export{Re as Lti13DeepLinkingComponent};
//# sourceMappingURL=lti13-deep-linking.component-RK5V5AMT.js.map
