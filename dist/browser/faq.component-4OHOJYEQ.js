import{a as ve}from"./chunk-OLYZKWDJ.js";import{a as Fe}from"./chunk-5VL4PADI.js";import{a as Ce}from"./chunk-KYUIVIOO.js";import{a as qe,b as w}from"./chunk-LWFATUYQ.js";import{a as be}from"./chunk-QZKVSIAC.js";import{a as _e}from"./chunk-JRBFEQNN.js";import"./chunk-DIZEKHOC.js";import"./chunk-V7PDYRDZ.js";import"./chunk-EANMTTQG.js";import{a as ge}from"./chunk-OTCBNILH.js";import{a as he,b as Se}from"./chunk-VRAVBLUK.js";import{b as xe}from"./chunk-T624HJJL.js";import"./chunk-HQTS6JOY.js";import"./chunk-HMZID6NQ.js";import"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import{c as pe}from"./chunk-5MVJAZRV.js";import{P as X,q as G,r as K,s as U}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import"./chunk-WA5GEAJB.js";import{r as de}from"./chunk-VK7JPHFE.js";import{c as le}from"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import"./chunk-K3W6YFKH.js";import{c as ce}from"./chunk-JXJXC4DZ.js";import{d as me,f as ue}from"./chunk-EDXSOKK5.js";import{b as se}from"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Bb as ne,Lc as re,Q as Z,Qa as te,Sa as ie,ed as ae,ga as ee,q as Y,sd as oe}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as fe}from"./chunk-U54OSGNH.js";import{f as W,i as J,m as Q}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{E as z,n as O}from"./chunk-IOA4DPXY.js";import{Db as o,Dc as b,Ea as f,Ma as h,Mc as x,Na as S,Oc as p,Rc as A,Sc as q,Tb as V,U as B,Zb as _,dd as e,ed as M,f as L,g as D,kc as c,ld as R,md as j,nd as $,qd as H,rd as y,sc as g,sd as N,uc as I,vc as v,wb as C,wc as F,xc as n,yc as r,yd as E,z as P,zc as l,zd as T}from"./chunk-5LC5EQRR.js";import{j as k}from"./chunk-3E746U5Y.js";var Te=(s,m)=>({"btn-secondary":s,"btn-success":m}),we=s=>({num:s}),Ie=()=>["new"],ye=s=>[s,"edit"],Ae=(s,m)=>m.id;function je(s,m){if(s&1){let t=b();e(0,`
                                `),n(1,"li"),e(2,`
                                    `),n(3,"label",30),e(4,`
                                        `),n(5,"input",31),x("change",function(){let a=h(t).$implicit,d=p(2);return S(d.toggleFilters(a.category))}),r(),e(6,`
                                        `),l(7,"jhi-custom-exercise-category-badge",32),e(8,`
                                    `),r(),e(9,`
                                `),r(),e(10,`
                            `)}if(s&2){let t=m.$implicit,i=p(2);o(5),q("id","category-",t.category,""),c("checked",i.activeFilters.has(t.category)),o(2),c("category",t)}}function ke(s,m){if(s&1&&(e(0,`
                        `),n(1,"ul",29),e(2,`
                            `),v(3,je,11,4,null,null,I),r(),e(5,`
                    `)),s&2){let t=p();o(3),F(t.existingCategories)}}function Le(s,m){if(s&1){let t=b();e(0,`
                        `),n(1,"button",33),x("click",function(){h(t);let a=p();return S(a.ingestFaqsInPyris())}),e(2,`
                            `),l(3,"fa-icon",10),e(4,`
                            `),l(5,"span",34),e(6,`
                        `),r(),e(7,`
                    `)}if(s&2){let t=p();o(3),c("icon",t.faFileExport)}}function De(s,m){if(s&1&&(e(0,`
                                    `),l(1,"jhi-custom-exercise-category-badge",42),e(2,`
                                `)),s&2){let t=m.$implicit;o(),c("category",t)}}function Pe(s,m){if(s&1){let t=b();e(0,`
                                    `),n(1,"div",41),e(2,`
                                        `),n(3,"button",43),x("click",function(){h(t);let a=p().$implicit,d=p();return S(d.acceptProposedFaq(d.courseId,a))}),e(4,`
                                            `),l(5,"fa-icon",10),e(6,`
                                            `),l(7,"span",44),e(8,`
                                        `),r(),e(9,`
                                        `),n(10,"button",45),x("click",function(){h(t);let a=p().$implicit,d=p();return S(d.rejectFaq(d.courseId,a))}),e(11,`
                                            `),l(12,"fa-icon",10),e(13,`
                                            `),l(14,"span",46),e(15,`
                                        `),r(),e(16,`
                                    `),r(),e(17,`
                                `)}if(s&2){let t=p().$implicit,i=p();o(5),c("icon",i.faCheck),o(5),q("id","reject-faq-",t.id,""),o(2),c("icon",i.faCancel)}}function Be(s,m){if(s&1&&(e(0,`
                                        `),n(1,"a",47),e(2,`
                                            `),l(3,"fa-icon",10),e(4,`
                                            `),l(5,"span",48),e(6,`
                                        `),r(),e(7,`
                                    `)),s&2){let t=p().$implicit,i=p();o(),c("routerLink",y(2,ye,t.id)),o(2),c("icon",i.faPencilAlt)}}function Ve(s,m){if(s&1){let t=b();e(0,`
                                        `),n(1,"button",49),x("delete",function(){h(t);let a=p().$implicit,d=p();return S(d.deleteFaq(d.courseId,a.id))}),e(2,`
                                            `),l(3,"fa-icon",10),e(4,`
                                        `),r(),e(5,`
                                    `)}if(s&2){let t=p().$implicit,i=p();o(),q("id","delete-faq-",t.id,""),c("entityTitle",t.questionTitle||"")("dialogError",i.dialogError$),o(2),c("icon",i.faTrash)}}function Me(s,m){if(s&1&&(e(0,`
                    `),n(1,"tr",35),e(2,`
                        `),n(3,"td"),e(4,`
                            `),n(5,"a",36),e(6),r(),e(7,`
                        `),r(),e(8,`
                        `),n(9,"td"),e(10,`
                            `),l(11,"p",37),E(12,"htmlForMarkdown"),e(13,`
                        `),r(),e(14,`
                        `),n(15,"td"),e(16,`
                            `),l(17,"p",37),E(18,"htmlForMarkdown"),e(19,`
                        `),r(),e(20,`
                        `),n(21,"td"),e(22,`
                            `),l(23,"p",37),E(24,"htmlForMarkdown"),e(25,`
                        `),r(),e(26,`
                        `),n(27,"td"),e(28,`
                            `),n(29,"div",38),e(30,`
                                `),v(31,De,3,1,null,null,I),r(),e(33,`
                        `),r(),e(34,`
                        `),n(35,"td",39),e(36,`
                            `),n(37,"div",40),e(38,`
                                `),_(39,Pe,18,4),n(40,"div",41),e(41,`
                                    `),_(42,Be,8,4)(43,Ve,6,5),r(),e(44,`
                            `),r(),e(45,`
                        `),r(),e(46,`
                    `),r(),e(47,`
                `)),s&2){let t=m.$implicit,i=p();o(),q("id","faq-",t.id,""),o(4),c("routerLink",y(16,ye,t.id)),o(),M(t.id),o(5),c("innerHTML",T(12,10,t.questionTitle),C),o(6),c("innerHTML",T(18,12,t.questionAnswer),C),o(6),c("innerHTML",T(24,14,t.faqState),C),o(8),F(t.categories),o(8),g(t.faqState===i.FaqState.PROPOSED&&i.isAtLeastInstructor?39:-1),o(3),g(i.isAtLeastInstructor||t.faqState!==i.FaqState.ACCEPTED?42:-1),o(),g(i.isAtLeastInstructor?43:-1)}}var ht=(()=>{class s{FaqState=w;faqs;course;filteredFaqs;existingCategories;courseId;hasCategories=!1;isAtLeastInstructor=!1;faqIngestionEnabled=!1;irisEnabled=!1;dialogErrorSource=new L;dialogError$=this.dialogErrorSource.asObservable();routeDataSubscription;activeFilters=new Set;searchInput=new D("");predicate="id";ascending=!0;faEdit=Z;faPlus=re;faTrash=ne;faPencilAlt=Y;faFilter=ie;faSort=te;faCancel=ee;faCheck=oe;faFileExport=ae;faqService=f(qe);route=f(W);alertService=f(ce);sortService=f(ge);accountService=f(se);profileService=f(le);irisSettingsService=f(be);profileInfoSubscription;constructor(){this.predicate="id",this.ascending=!0}ngOnInit(){this.courseId=Number(this.route.snapshot.paramMap.get("courseId")),this.loadAll(),this.loadCourseFaqCategories(this.courseId),this.searchInput.pipe(B(300)).subscribe(t=>{this.refreshFaqList(t)}),this.routeDataSubscription=this.route.data.subscribe(t=>{let i=t.course;i&&(this.course=i,this.isAtLeastInstructor=this.accountService.isAtLeastInstructorInCourse(i))}),this.profileInfoSubscription=this.profileService.getProfileInfo().subscribe(t=>k(this,null,function*(){this.irisEnabled=t.activeProfiles.includes(de),this.irisEnabled&&this.irisSettingsService.getCombinedCourseSettings(this.courseId).subscribe(i=>{this.faqIngestionEnabled=i?.irisFaqIngestionSettings?.enabled||!1})}))}ngOnDestroy(){this.dialogErrorSource.complete(),this.searchInput.complete(),this.routeDataSubscription?.unsubscribe(),this.profileInfoSubscription?.unsubscribe()}deleteFaq(t,i){this.faqService.delete(t,i).subscribe({next:()=>this.handleDeleteSuccess(i),error:a=>this.dialogErrorSource.next(a.message)})}handleDeleteSuccess(t){this.faqs=this.faqs.filter(i=>i.id!==t),this.dialogErrorSource.next(""),this.loadCourseFaqCategories(this.courseId)}toggleFilters(t){this.activeFilters=this.faqService.toggleFilter(t,this.activeFilters),this.refreshFaqList(this.searchInput.getValue())}applyFilters(){this.filteredFaqs=this.faqService.applyFilters(this.activeFilters,this.faqs)}sortRows(){this.sortService.sortByProperty(this.filteredFaqs,this.predicate,this.ascending)}loadAll(){this.faqService.findAllByCourseId(this.courseId).pipe(P(t=>t.body)).subscribe({next:t=>{this.faqs=t,this.applyFilters(),this.sortRows()},error:t=>pe(this.alertService,t)})}loadCourseFaqCategories(t){Ce(t,this.alertService,this.faqService).subscribe(i=>{this.existingCategories=i,this.hasCategories=i.length>0,this.checkAppliedFilter(this.activeFilters,this.existingCategories)})}checkAppliedFilter(t,i){t.forEach(a=>{i.some(d=>d.category===a)||t.delete(a)}),this.applyFilters()}applySearch(t){this.filteredFaqs=this.filteredFaqs.filter(i=>this.faqService.hasSearchTokens(i,t))}setSearchValue(t){this.searchInput.next(t)}refreshFaqList(t){this.applyFilters(),this.applySearch(t)}updateFaqState(t,i,a,d){let u=i.faqState;i.faqState=a,i.course=this.course,this.faqService.update(t,i).subscribe({next:()=>this.alertService.success(d,{title:i.questionTitle}),error:Ee=>{this.dialogErrorSource.next(Ee.message),i.faqState=u}})}rejectFaq(t,i){this.updateFaqState(t,i,w.REJECTED,"artemisApp.faq.rejected")}acceptProposedFaq(t,i){this.updateFaqState(t,i,w.ACCEPTED,"artemisApp.faq.accepted")}ingestFaqsInPyris(){this.faqs.first()&&this.faqService.ingestFaqsInPyris(this.courseId).subscribe({next:()=>this.alertService.success("artemisApp.iris.ingestionAlert.allFaqsSuccess"),error:()=>{this.alertService.error("artemisApp.iris.ingestionAlert.allFaqsError")}})}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=V({type:s,selectors:[["jhi-faq"]],decls:103,vars:23,consts:[[1,"row"],[1,"col-4","d-flex","align-items-center"],["id","page-heading"],["jhiTranslate","artemisApp.faq.home.title"],[1,"d-flex","justify-content-between","bd-highlight","mb-3","gap-2"],[1,"flex-grow-1"],[3,"newSearchEvent"],["aria-label","Button group with nested dropdown","role","group",1,"btn-group"],["aria-label","Filter Dropdown","ngbDropdown","",1,"me-2"],["ngbDropdownToggle","","id","filter-dropdown-button",1,"btn",3,"ngClass","disabled"],[3,"icon"],["jhiTranslate","artemisApp.courseOverview.exerciseList.filter",1,"d-sm-none","d-md-inline",3,"translateValues"],[1,"d-flex","justify-content-end","align-items-center","gap-2"],[1,"btn","btn-primary","mb-1",3,"id","routerLink"],[3,"jhiTranslate"],[1,"table-responsive"],[1,"table","table-striped"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["jhiSortBy","id",1,"d-md-table-cell"],["jhiTranslate","global.field.id"],["jhiSortBy","questionTitle"],["jhiTranslate","artemisApp.faq.table.questionTitle"],["jhiSortBy","questionAnswer"],["jhiTranslate","artemisApp.faq.table.questionAnswer"],["jhiSortBy","faqState"],["jhiTranslate","artemisApp.faq.table.state"],["jhiSortBy","categories"],["jhiTranslate","artemisApp.faq.table.categories"],["id","faq-preview"],["ngbDropdownMenu","","aria-labelledby","filter-dropdown-button",1,"checkbox-menu","text-nowrap","pe-2"],[1,"d-flex","align-items-center"],["type","checkbox",1,"ms-2","form-check-input",3,"change","id","checked"],[1,"mt-2","ms-1",3,"category"],[1,"btn","btn-primary","jh-create-entity","mb-1",3,"click"],["jhiTranslate","artemisApp.faq.home.ingestLabel"],[3,"id"],[3,"routerLink"],[1,"markdown-preview",3,"innerHTML"],[1,"d-flex"],[1,"text-end"],[1,"btn-group","flex-btn-group-container"],[1,"btn-group-vertical","me-1","mb-1"],[3,"category"],[1,"btn","btn-success","btn-sm",3,"click"],["jhiTranslate","artemisApp.faq.home.accept",1,"d-none","d-md-inline"],["type","button",1,"mt-1","btn","btn-sm","btn-warning",3,"click","id"],["jhiTranslate","artemisApp.faq.home.reject",1,"d-none","d-md-inline"],[1,"btn","btn-primary","btn-sm",3,"routerLink"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["jhiDeleteButton","","deleteQuestion","artemisApp.faq.delete.question","deleteConfirmationText","artemisApp.faq.delete.typeNameToConfirm",1,"mt-1",3,"delete","id","entityTitle","dialogError"]],template:function(i,a){i&1&&(n(0,"div"),e(1,`
    `),n(2,"div",0),e(3,`
        `),n(4,"div",1),e(5,`
            `),n(6,"h2",2),e(7,`
                `),l(8,"span",3),e(9,`
            `),r(),e(10,`
        `),r(),e(11,`
        `),n(12,"div",4),e(13,`
            `),n(14,"div",5),e(15,`
                `),n(16,"jhi-search-filter",6),x("newSearchEvent",function(u){return a.setSearchValue(u)}),r(),e(17,`
            `),r(),e(18,`
            `),n(19,"div",7),e(20,`
                `),n(21,"div",8),e(22,`
                    `),n(23,"button",9),e(24,`
                        `),l(25,"fa-icon",10),e(26,`
                        `),l(27,"span",11),e(28,`
                    `),r(),e(29,`
                    `),_(30,ke,6,0),r(),e(31,`
                `),n(32,"div",12),e(33,`
                    `),n(34,"a",13),e(35,`
                        `),l(36,"fa-icon",10),e(37,`
                        `),l(38,"span",14),e(39,`
                    `),r(),e(40,`
                    `),_(41,Le,8,1),r(),e(42,`
            `),r(),e(43,`
        `),r(),e(44,`
    `),r(),e(45,`
    `),l(46,"br"),e(47,`

    `),n(48,"div",15),e(49,`
        `),n(50,"table",16),e(51,`
            `),n(52,"thead"),e(53,`
                `),n(54,"tr",17),$("predicateChange",function(u){return j(a.predicate,u)||(a.predicate=u),u})("ascendingChange",function(u){return j(a.ascending,u)||(a.ascending=u),u}),x("sortChange",function(){return a.sortRows()}),e(55,`
                    `),n(56,"th",18),e(57,`
                        `),l(58,"span",19),e(59,`
                        `),l(60,"fa-icon",10),e(61,`
                    `),r(),e(62,`
                    `),n(63,"th",20),e(64,`
                        `),l(65,"span",21),e(66,`
                        `),l(67,"fa-icon",10),e(68,`
                    `),r(),e(69,`
                    `),n(70,"th",22),e(71,`
                        `),l(72,"span",23),e(73,`
                        `),l(74,"fa-icon",10),e(75,`
                    `),r(),e(76,`
                    `),n(77,"th",24),e(78,`
                        `),l(79,"span",25),e(80,`
                        `),l(81,"fa-icon",10),e(82,`
                    `),r(),e(83,`
                    `),n(84,"th",26),e(85,`
                        `),l(86,"span",27),e(87,`
                        `),l(88,"fa-icon",10),e(89,`
                    `),r(),e(90,`
                    `),l(91,"th"),e(92,`
                `),r(),e(93,`
            `),r(),e(94,`
            `),n(95,"tbody",28),e(96,`
                `),v(97,Me,48,18,null,null,Ae),r(),e(99,`
        `),r(),e(100,`
    `),r(),e(101,`
`),r(),e(102,`
`)),i&2&&(o(23),c("ngClass",N(17,Te,a.activeFilters.size===0,a.activeFilters.size>0))("disabled",!a.hasCategories),o(2),c("icon",a.faFilter),o(2),c("translateValues",y(20,we,a.activeFilters.size)),o(3),g(a.hasCategories?30:-1),o(4),A("id",a.isAtLeastInstructor?"create-faq":"propose-faq"),c("routerLink",H(22,Ie)),o(2),c("icon",a.faPlus),o(2),A("jhiTranslate",a.isAtLeastInstructor?"artemisApp.faq.home.createLabel":"artemisApp.faq.home.proposeLabel"),o(3),g(a.isAtLeastInstructor&&a.faqIngestionEnabled?41:-1),o(13),R("predicate",a.predicate)("ascending",a.ascending),o(6),c("icon",a.faSort),o(7),c("icon",a.faSort),o(7),c("icon",a.faSort),o(7),c("icon",a.faSort),o(7),c("icon",a.faSort),o(9),F(a.filteredFaqs))},dependencies:[ve,Fe,X,U,K,G,_e,fe,ue,me,xe,Q,J,Se,he,z,O],encapsulation:2})}return s})();export{ht as FaqComponent};
//# sourceMappingURL=faq.component-4OHOJYEQ.js.map
