import{a as Ue,b as Me}from"./chunk-NV4PYWIT.js";import{b as Ne}from"./chunk-X4L2PWEV.js";import{a as Be}from"./chunk-EHCOTJGL.js";import{a as Re}from"./chunk-QZKVSIAC.js";import{a as Pe}from"./chunk-JRBFEQNN.js";import"./chunk-DIZEKHOC.js";import"./chunk-V7PDYRDZ.js";import"./chunk-EANMTTQG.js";import{a as ke}from"./chunk-OTCBNILH.js";import"./chunk-W7RIOT23.js";import{a as N,b as U}from"./chunk-VRAVBLUK.js";import{b as Ae}from"./chunk-T624HJJL.js";import"./chunk-HQTS6JOY.js";import"./chunk-HMZID6NQ.js";import{d as De}from"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import{a as we}from"./chunk-UDBRF4PR.js";import{a as Le}from"./chunk-ZLJ76G5I.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import{c as V}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import{c as je}from"./chunk-JNO6DNVW.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import{D as xe,M as fe,q as me,r as pe,s as de,v as ue}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as ce,c as ne,h as re,i as oe,k as ae,m as le,n as se}from"./chunk-WA5GEAJB.js";import{r as Fe}from"./chunk-VK7JPHFE.js";import{c as Te}from"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import"./chunk-K3W6YFKH.js";import{c as Ie}from"./chunk-JXJXC4DZ.js";import{d as R}from"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import{p as Z}from"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Bb as ye,Da as he,Lc as ve,Qa as ge,Sa as Se,Wa as Ce,ed as Ee,q as _e,qc as be}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as B}from"./chunk-U54OSGNH.js";import{f as ee,h as te,i as ie}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{O as X,n as K}from"./chunk-IOA4DPXY.js";import{Db as l,Dc as I,Ea as _,L as M,Ma as S,Mc as f,Na as C,Oc as m,Rc as P,Sc as Q,Tb as k,Xb as $,Zb as g,dd as e,ed as y,f as W,kc as c,ld as L,md as b,nd as F,qd as Y,rc as q,rd as v,sc as h,sd as J,uc as O,vc as E,wb as G,wc as T,xc as r,ya as H,yc as o,yd as D,z as j,zc as s,zd as A}from"./chunk-5LC5EQRR.js";import{j as z}from"./chunk-3E746U5Y.js";var Ve=(()=>{class n extends Ue{http=_(X);static RESOURCE_URL="api/lecture/lectures";constructor(){super()}search(t){let a=this.createHttpParams(t);return this.http.get(`${n.RESOURCE_URL}`,{params:a,observe:"response"}).pipe(j(i=>i&&i.body))}static \u0275fac=function(a){return new(a||n)};static \u0275prov=H({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ge(n,d){if(n&1&&(e(0,`
                `),s(1,"span",15),e(2,`
            `)),n&2){let t=m();l(),P("jhiTranslate","artemisApp."+t.entityName+".import.loading")}}function $e(n,d){if(n&1&&(e(0,`
                        `),r(1,"th",16),e(2,`
                            `),s(3,"span",5),e(4,`
                            `),s(5,"fa-icon",11),e(6,`
                        `),o(),e(7,`
                    `)),n&2){let t=d.$implicit,a=m();l(),c("jhiSortBy",t.name),l(2),c("jhiTranslate","artemisApp."+a.entityName+".import.table."+t.name),l(2),c("icon",a.faSort)}}function qe(n,d){if(n&1&&(e(0,`
                            `),r(1,"td",19),e(2,`
                                `),s(3,"ngb-highlight",20),e(4,`
                            `),o(),e(5,`
                        `)),n&2){let t=d.$implicit,a=m().$implicit,i=m();l(3),c("result",t.getProperty(a))("term",i.searchTerm)}}function Qe(n,d){if(n&1){let t=I();e(0,`
                    `),r(1,"tr",17),e(2,`
                        `),r(3,"td",12),e(4,`
                            `),r(5,"span"),e(6),o(),e(7,`
                        `),o(),e(8,`
                        `),E(9,qe,6,2,null,null,O),r(11,"td",12),e(12,`
                            `),r(13,"jhi-button",18),f("onClick",function(){let i=S(t).$implicit,p=m();return C(p.selectImport(i))}),o(),e(14,`
                        `),o(),e(15,`
                    `),o(),e(16,`
                `)}if(n&2){let t=d.$implicit,a=m();l(6),y(t.id),l(3),T(a.columns),l(4),c("disabled",a.disabledIds.includes(t.id))("title","artemisApp."+a.entityName+".import.table.doImport")}}var Ye=[{name:"TITLE",getProperty(n){return n.title}},{name:"COURSE_TITLE",getProperty(n){return n.course?.title}},{name:"SEMESTER",getProperty(n){return n.course?.semester}}],ze=(()=>{class n extends Me{constructor(){let t=_(Ve);super(t),this.columns=Ye,this.entityName="lecture"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=k({type:n,selectors:[["jhi-lecture-import"]],features:[$],decls:53,vars:12,consts:[[1,"modal-header"],[1,"modal-title",3,"jhiTranslate"],["aria-hidden","true","data-dismiss","modal","type","button",1,"btn-close",3,"click"],[1,"modal-body"],[1,"form-group","form-inline"],[3,"jhiTranslate"],["name","search","type","text",1,"form-control","ms-2",3,"ngModelChange","ngModel"],[1,"table","table-striped","align-middle","flex"],[1,"thead-dark"],["jhiSort","",1,"flex-row",3,"sortChange","ascendingChange","predicateChange","ascending","predicate"],["jhiSortBy","ID",1,"col-1"],[3,"icon"],[1,"col-1"],[1,"d-flex","justify-content-between","p-2"],[3,"pageChange","page","collectionSize","maxSize","pageSize","rotate"],[1,"ms-3",3,"jhiTranslate"],[1,"col-4",3,"jhiSortBy"],[1,"flex-row"],[3,"onClick","disabled","title"],[1,"text-break","col-4"],[3,"result","term"]],template:function(a,i){a&1&&(r(0,"form"),e(1,`
    `),r(2,"div",0),e(3,`
        `),s(4,"h4",1),e(5,`
        `),r(6,"button",2),f("click",function(){return i.clear()}),o(),e(7,`
    `),o(),e(8,`
    `),r(9,"div",3),e(10,`
        `),r(11,"div",4),e(12,`
            `),s(13,"span",5),e(14,`
            `),r(15,"input",6),F("ngModelChange",function(u){return b(i.searchTerm,u)||(i.searchTerm=u),u}),o(),e(16,`
            `),g(17,Ge,3,1),o(),e(18,`
        `),r(19,"table",7),e(20,`
            `),r(21,"thead",8),e(22,`
                `),r(23,"tr",9),f("sortChange",function(){return i.sortRows()}),F("ascendingChange",function(u){return b(i.listSorting,u)||(i.listSorting=u),u})("predicateChange",function(u){return b(i.sortedColumn,u)||(i.sortedColumn=u),u}),e(24,`
                    `),e(25,`
                    `),r(26,"th",10),e(27,`
                        `),r(28,"span"),e(29,"#"),o(),e(30,`
                        `),s(31,"fa-icon",11),e(32,`
                    `),o(),e(33,`
                    `),E(34,$e,8,3,null,null,O),s(36,"th",12),e(37,`
                `),o(),e(38,`
            `),o(),e(39,`
            `),r(40,"tbody"),e(41,`
                `),E(42,Qe,17,3,null,null,i.trackId,!0),o(),e(44,`
        `),o(),e(45,`
        `),r(46,"div",13),e(47,`
            `),r(48,"ngb-pagination",14),f("pageChange",function(u){return i.onPageChange(u)}),F("pageChange",function(u){return b(i.state.page,u)||(i.state.page=u),u}),o(),e(49,`
        `),o(),e(50,`
    `),o(),e(51,`
`),o(),e(52,`
`)),a&2&&(l(4),P("jhiTranslate","artemisApp."+i.entityName+".import.label"),l(9),P("jhiTranslate","artemisApp."+i.entityName+".import.search"),l(2),L("ngModel",i.searchTerm),l(2),h(i.loading?17:-1),l(6),L("ascending",i.listSorting)("predicate",i.sortedColumn),l(8),c("icon",i.faSort),l(3),T(i.columns),l(8),T(i.content.resultsOnPage),l(6),L("page",i.state.page),c("collectionSize",i.total)("maxSize",10)("pageSize",i.state.pageSize)("rotate",!0))},dependencies:[ce,se,ne,re,oe,le,ae,B,N,U,R,fe,De,xe],encapsulation:2})}return n})();var Je=(n,d)=>({"btn-secondary":n,"btn-success":d}),Ke=n=>({num:n}),Xe=()=>["new"],We=n=>[n],Ze=n=>[n,"attachments"],et=n=>[n,"unit-management"],tt=n=>[n,"edit"];function it(n,d){if(n&1){let t=I();e(0,`
                        `),r(1,"button",25),f("click",function(){S(t);let i=m();return C(i.ingestLecturesInPyris())}),e(2,`
                            `),s(3,"fa-icon",9),e(4,`
                            `),s(5,"span",26),e(6,`
                        `),o(),e(7,`
                    `)}if(n&2){let t=m();l(3),c("icon",t.faFileExport)}}function nt(n,d){if(n&1&&(e(0,`
                            `),r(1,"th",43),e(2,`
                                `),s(3,"span",44),e(4,`
                                `),s(5,"fa-icon",9),e(6,`
                            `),o(),e(7,`
                        `)),n&2){let t=m(2);l(5),c("icon",t.faSort)}}function rt(n,d){n&1&&(e(0,`
                                            `),s(1,"span",51),e(2,`
                                        `))}function ot(n,d){n&1&&(e(0,`
                                            `),s(1,"span",52),e(2,`
                                        `))}function at(n,d){n&1&&(e(0,`
                                            `),s(1,"span",53),e(2,`
                                        `))}function lt(n,d){n&1&&(e(0,`
                                            `),s(1,"span",54),e(2,`
                                        `))}function st(n,d){n&1&&(e(0,`
                                            `),s(1,"span",55),e(2,`
                                        `))}function ct(n,d){n&1&&(e(0,`
                                            `),s(1,"span",56),e(2,`
                                        `))}function mt(n,d){if(n&1&&(e(0,`
                                `),r(1,"td"),e(2,`
                                    `),g(3,rt,3,0)(4,ot,3,0)(5,at,3,0)(6,lt,3,0)(7,st,3,0)(8,ct,3,0),e(9,`
                                `),o(),e(10,`
                            `)),n&2){let t,a=m().$implicit,i=m(2);l(3),h((t=a.ingested)===i.IngestionState.NOT_STARTED?3:t===i.IngestionState.IN_PROGRESS?4:t===i.IngestionState.PARTIALLY_INGESTED?5:t===i.IngestionState.DONE?6:t===i.IngestionState.ERROR?7:8)}}function pt(n,d){if(n&1&&(e(0,`
                                            `),r(1,"a",57),e(2,`
                                                `),s(3,"fa-icon",9),e(4,`
                                                `),s(5,"span",58),e(6,`
                                            `),o(),e(7,`
                                        `)),n&2){let t=m().$implicit,a=m(2);l(),c("routerLink",v(2,Ze,t.id)),l(2),c("icon",a.faFile)}}function dt(n,d){if(n&1&&(e(0,`
                                            `),r(1,"a",59),e(2,`
                                                `),s(3,"fa-icon",9),e(4,`
                                                `),s(5,"span",60),e(6,`
                                            `),o(),e(7,`
                                        `)),n&2){let t=m().$implicit,a=m(2);l(),c("routerLink",v(2,et,t.id)),l(2),c("icon",a.faPuzzlePiece)}}function ut(n,d){if(n&1&&(e(0,`
                                            `),r(1,"a",61),e(2,`
                                                `),s(3,"fa-icon",9),e(4,`
                                                `),s(5,"span",62),e(6,`
                                            `),o(),e(7,`
                                        `)),n&2){let t=m().$implicit,a=m(2);l(),c("routerLink",v(2,tt,t.id)),l(2),c("icon",a.faPencilAlt)}}function xt(n,d){if(n&1){let t=I();e(0,`
                                            `),r(1,"button",63),f("delete",function(){S(t);let i=m().$implicit,p=m(2);return C(p.deleteLecture(i.id))}),e(2,`
                                                `),s(3,"fa-icon",9),e(4,`
                                            `),o(),e(5,`
                                        `)}if(n&2){let t=m().$implicit,a=m(2);l(),c("entityTitle",t.title||"")("dialogError",a.dialogError$),l(2),c("icon",a.faTrash)}}function ft(n,d){if(n&1&&(e(0,`
                        `),r(1,"tr",45),e(2,`
                            `),r(3,"td"),e(4,`
                                `),r(5,"a",46),e(6),o(),e(7,`
                            `),o(),e(8,`
                            `),r(9,"td"),e(10,`
                                `),r(11,"a",46),e(12),o(),e(13,`
                            `),o(),e(14,`
                            `),s(15,"td",47),D(16,"htmlForMarkdown"),e(17,`
                            `),r(18,"td"),e(19),D(20,"artemisDate"),o(),e(21,`
                            `),r(22,"td"),e(23),D(24,"artemisDate"),o(),e(25,`
                            `),r(26,"td"),e(27),D(28,"artemisDate"),o(),e(29,`
                            `),g(30,mt,11,1),r(31,"td",48),e(32,`
                                `),r(33,"div",49),e(34,`
                                    `),r(35,"div",50),e(36,`
                                        `),g(37,pt,8,4)(38,dt,8,4),o(),e(39,`
                                    `),r(40,"div",50),e(41,`
                                        `),g(42,ut,8,4)(43,xt,6,3),o(),e(44,`
                                `),o(),e(45,`
                            `),o(),e(46,`
                        `),o(),e(47,`
                    `)),n&2){let t=d.$implicit,a=m(2);l(),Q("id","lecture-",t.id,""),l(4),c("routerLink",v(23,We,t.id)),l(),y(t.id),l(5),c("routerLink",v(25,We,t.id)),l(),y(t.title),l(3),c("innerHTML",A(16,15,t.description),G),l(4),y(A(20,17,t.visibleDate)),l(4),y(A(24,19,t.startDate)),l(4),y(A(28,21,t.endDate)),l(3),h(a.lectureIngestionEnabled?30:-1),l(7),h(t.isAtLeastEditor?37:-1),l(),h(t.isAtLeastEditor?38:-1),l(4),h(t.isAtLeastEditor?42:-1),l(),h(t.isAtLeastInstructor?43:-1)}}function _t(n,d){if(n&1){let t=I();e(0,`
        `),r(1,"div",27),e(2,`
            `),r(3,"table",28),e(4,`
                `),r(5,"thead"),e(6,`
                    `),r(7,"tr",29),F("predicateChange",function(i){S(t);let p=m();return b(p.predicate,i)||(p.predicate=i),C(i)})("ascendingChange",function(i){S(t);let p=m();return b(p.ascending,i)||(p.ascending=i),C(i)}),f("sortChange",function(){S(t);let i=m();return C(i.sortRows())}),e(8,`
                        `),r(9,"th",30),e(10,`
                            `),s(11,"span",31),e(12,`
                            `),s(13,"fa-icon",9),e(14,`
                        `),o(),e(15,`
                        `),r(16,"th",32),e(17,`
                            `),s(18,"span",33),e(19,`
                            `),s(20,"fa-icon",9),e(21,`
                        `),o(),e(22,`
                        `),r(23,"th",34),e(24,`
                            `),s(25,"span",35),e(26,`
                            `),s(27,"fa-icon",9),e(28,`
                        `),o(),e(29,`
                        `),r(30,"th",36),e(31,`
                            `),s(32,"span",37),e(33,`
                            `),s(34,"fa-icon",9),e(35,`
                        `),o(),e(36,`
                        `),r(37,"th",38),e(38,`
                            `),s(39,"span",39),e(40,`
                            `),s(41,"fa-icon",9),e(42,`
                        `),o(),e(43,`
                        `),r(44,"th",40),e(45,`
                            `),s(46,"span",41),e(47,`
                            `),s(48,"fa-icon",9),e(49,`
                        `),o(),e(50,`
                        `),g(51,nt,8,1),s(52,"th"),e(53,`
                    `),o(),e(54,`
                `),o(),e(55,`
                `),r(56,"tbody",42),e(57,`
                    `),E(58,ft,48,27,null,null,q().trackId,!0),o(),e(60,`
            `),o(),e(61,`
        `),o(),e(62,`
    `)}if(n&2){let t=m();l(7),L("predicate",t.predicate)("ascending",t.ascending),l(6),c("icon",t.faSort),l(7),c("icon",t.faSort),l(7),c("icon",t.faSort),l(7),c("icon",t.faSort),l(7),c("icon",t.faSort),l(7),c("icon",t.faSort),l(3),h(t.lectureIngestionEnabled?51:-1),l(7),T(t.filteredLectures)}}var w=function(n){return n.PAST="filterPast",n.CURRENT="filterCurrent",n.FUTURE="filterFuture",n.UNSPECIFIED="filterUnspecifiedDates",n}(w||{}),ci=(()=>{class n{lectureService=_(Le);route=_(ee);router=_(te);alertService=_(Ie);modalService=_(ue);sortService=_(ke);profileService=_(Te);irisSettingsService=_(Re);lectures;filteredLectures;courseId;dialogErrorSource=new W;dialogError$=this.dialogErrorSource.asObservable();activeFilters=new Set;predicate;ascending;irisEnabled=!1;filterType=w;documentationType="Lecture";ingestionState;faPlus=ve;faFileImport=he;faFileExport=Ee;faTrash=ye;faPencilAlt=_e;faFile=be;faPuzzlePiece=Ce;faFilter=Se;faSort=ge;lectureIngestionEnabled=!1;IngestionState=Ne;profileInfoSubscription;constructor(){this.predicate="id",this.ascending=!0}ngOnInit(){this.courseId=Number(this.route.snapshot.paramMap.get("courseId")),this.profileInfoSubscription=this.profileService.getProfileInfo().subscribe(t=>z(this,null,function*(){this.irisEnabled=t.activeProfiles.includes(Fe),this.irisEnabled&&this.irisSettingsService.getCombinedCourseSettings(this.courseId).subscribe(a=>{this.lectureIngestionEnabled=a?.irisLectureIngestionSettings?.enabled||!1})})),this.loadAll()}ngOnDestroy(){this.dialogErrorSource.unsubscribe(),this.profileInfoSubscription?.unsubscribe()}trackId(t,a){return a.id}openImportModal(){this.modalService.open(ze,{size:"lg",backdrop:"static"}).result.then(a=>{this.lectureService.import(this.courseId,a.id).pipe(M(i=>i.ok),j(i=>i.body)).subscribe({next:i=>{this.lectures.push(i),this.router.navigate(["course-management",i.course.id,"lectures",i.id])},error:i=>V(this.alertService,i)})},()=>{})}deleteLectureFromDisplayedLectures(t){this.dialogErrorSource.next(""),this.lectures=this.lectures.filter(a=>a.id!==t),this.applyFilters()}deleteLecture(t){this.lectureService.delete(t).subscribe({next:()=>{this.deleteLectureFromDisplayedLectures(t)},error:a=>this.dialogErrorSource.next(a.message)})}toggleFilters(t){t.forEach(a=>this.activeFilters.has(a)?this.activeFilters.delete(a):this.activeFilters.add(a)),this.applyFilters()}sortRows(){this.sortService.sortByProperty(this.filteredLectures,this.predicate,this.ascending)}loadAll(){this.lectureService.findAllByCourseIdWithSlides(this.courseId).pipe(M(t=>t.ok),j(t=>t.body)).subscribe({next:t=>{this.lectures=t.map(a=>{let i=new Be;return Object.assign(i,a),i}),this.lectureIngestionEnabled&&this.updateIngestionStates(),this.applyFilters()},error:t=>V(this.alertService,t)})}applyFilters(){if(this.activeFilters.size===0)this.filteredLectures=this.lectures;else{let t=Z(),a=[],i=this.lectures.filter(x=>x.endDate?.isBefore(t)),p=this.lectures.filter(x=>x.startDate&&x.endDate?x.startDate.isSameOrBefore(t)&&x.endDate.isSameOrAfter(t):x.startDate?x.startDate.isSameOrBefore(t):x.endDate?x.endDate.isSameOrAfter(t):!1),u=this.lectures.filter(x=>x.startDate?.isAfter(t)),He=this.lectures.filter(x=>x.startDate===void 0&&x.endDate===void 0);a=this.activeFilters.has(w.PAST)?a.concat(i):a,a=this.activeFilters.has(w.CURRENT)?a.concat(p):a,a=this.activeFilters.has(w.FUTURE)?a.concat(u):a,a=this.activeFilters.has(w.UNSPECIFIED)?a.concat(He):a,this.filteredLectures=a}this.sortRows()}ingestLecturesInPyris(){this.lectures.first()&&this.lectureService.ingestLecturesInPyris(this.lectures.first().course.id).subscribe({next:()=>this.alertService.success("artemisApp.iris.ingestionAlert.allLecturesSuccess"),error:()=>{this.alertService.error("artemisApp.iris.ingestionAlert.allLecturesError")}})}updateIngestionStates(){this.lectureService.getIngestionState(this.courseId).subscribe({next:t=>{if(t.body){let a=t.body;this.lectures.forEach(i=>{if(i.id){let p=a[i.id];p!==void 0&&(i.ingested=p)}})}},error:()=>{this.alertService.error("artemisApp.iris.ingestionAlert.pyrisError")}})}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=k({type:n,selectors:[["jhi-lecture"]],decls:96,vars:19,consts:[[1,"row"],[1,"col-4","d-flex","align-items-center"],["id","page-heading"],["jhiTranslate","artemisApp.lecture.home.title"],[3,"type"],[1,"d-flex","flex-row-reverse","bd-highlight","mb-3"],["aria-label","Button group with nested dropdown","role","group",1,"btn-group"],["aria-label","Filter Dropdown","ngbDropdown","",1,"me-2"],["ngbDropdownToggle","","id","filter-dropdown-button",1,"btn",3,"ngClass"],[3,"icon"],["jhiTranslate","artemisApp.courseOverview.exerciseList.filter",1,"d-s-none","d-md-inline",3,"translateValues"],["ngbDropdownMenu","","aria-labelledby","filter-dropdown-button",1,"checkbox-menu","text-nowrap","pe-2"],["id","filterPast","type","checkbox",1,"ms-2","form-check-input",3,"change","checked"],["jhiTranslate","artemisApp.lecture.home.filterOptions.filterPast",1,"ms-2"],["id","filterCurrent","type","checkbox",1,"ms-2","form-check-input",3,"change","checked"],["jhiTranslate","artemisApp.lecture.home.filterOptions.filterCurrent",1,"ms-2"],["id","filterFuture","type","checkbox",1,"ms-2","form-check-input",3,"change","checked"],["jhiTranslate","artemisApp.lecture.home.filterOptions.filterFuture",1,"ms-2"],["id","filterUnspecified","type","checkbox",1,"ms-2","form-check-input",3,"change","checked"],["jhiTranslate","artemisApp.lecture.home.filterOptions.filterUnspecifiedDates",1,"ms-2"],[1,"d-flex-end","text-end"],["id","lecture-import-button",1,"btn","btn-primary","jh-create-entity","import-lecture","text-truncate","mb-1",3,"click"],["jhiTranslate","artemisApp.lecture.import.label"],["id","jh-create-entity",1,"btn","btn-primary","jh-create-entity","create-lecture","mb-1",3,"routerLink"],["jhiTranslate","artemisApp.lecture.home.createLabel"],["id","backend-trigger-button",1,"btn","btn-primary","jh-create-entity","mb-1",3,"click"],["jhiTranslate","artemisApp.lecture.home.ingestLecturesInPyrisLabel"],[1,"table-responsive"],[1,"table","table-striped"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["jhiSortBy","id",1,"d-md-table-cell"],["jhiTranslate","global.field.id"],["jhiSortBy","title"],["jhiTranslate","artemisApp.lecture.title"],["jhiSortBy","description"],["jhiTranslate","artemisApp.lecture.description"],["jhiSortBy","visibleDate"],["jhiTranslate","artemisApp.lecture.visibleDate"],["jhiSortBy","startDate"],["jhiTranslate","artemisApp.lecture.startDate"],["jhiSortBy","endDate"],["jhiTranslate","artemisApp.lecture.endDate"],["id","lecture-preview",1,"markdown-preview"],["jhiSortBy","ingested"],["jhiTranslate","artemisApp.lecture.ingestionState"],[3,"id"],[3,"routerLink"],[3,"innerHTML"],[1,"text-end"],[1,"btn-group","flex-btn-group-container"],[1,"btn-group-vertical","me-1","mb-1"],["jhiTranslate","artemisApp.iris.ingestionStates.notStarted"],["jhiTranslate","artemisApp.iris.ingestionStates.inProgress"],["jhiTranslate","artemisApp.iris.ingestionStates.partiallyIngested"],["jhiTranslate","artemisApp.iris.ingestionStates.done"],["jhiTranslate","artemisApp.iris.ingestionStates.error"],["jhiTranslate","artemisApp.iris.ingestionStates.loading"],[1,"btn","btn-primary","mb-1","btn-sm",3,"routerLink"],["jhiTranslate","entity.action.attachments",1,"d-none","d-md-inline"],["id","units",1,"btn","btn-primary","btn-sm",3,"routerLink"],["jhiTranslate","entity.action.units",1,"d-none","d-md-inline"],[1,"btn","btn-primary","btn-sm",3,"routerLink"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["jhiDeleteButton","","id","delete-lecture","deleteQuestion","artemisApp.lecture.delete.question","deleteConfirmationText","artemisApp.lecture.delete.typeNameToConfirm",1,"mt-1",3,"delete","entityTitle","dialogError"]],template:function(a,i){a&1&&(r(0,"div"),e(1,`
    `),r(2,"div",0),e(3,`
        `),r(4,"div",1),e(5,`
            `),r(6,"h2",2),e(7,`
                `),s(8,"span",3),e(9,`
            `),o(),e(10,`
            `),s(11,"jhi-documentation-button",4),e(12,`
        `),o(),e(13,`
        `),r(14,"div",5),e(15,`
            `),r(16,"div",6),e(17,`
                `),r(18,"div",7),e(19,`
                    `),r(20,"button",8),e(21,`
                        `),s(22,"fa-icon",9),e(23,`
                        `),s(24,"span",10),e(25,`
                    `),o(),e(26,`
                    `),r(27,"ul",11),e(28,`
                        `),r(29,"li"),e(30,`
                            `),r(31,"label"),e(32,`
                                `),r(33,"input",12),f("change",function(){return i.toggleFilters([i.filterType.PAST])}),o(),e(34,`
                                `),s(35,"span",13),e(36,`
                            `),o(),e(37,`
                        `),o(),e(38,`
                        `),r(39,"li"),e(40,`
                            `),r(41,"label"),e(42,`
                                `),r(43,"input",14),f("change",function(){return i.toggleFilters([i.filterType.CURRENT])}),o(),e(44,`
                                `),s(45,"span",15),e(46,`
                            `),o(),e(47,`
                        `),o(),e(48,`
                        `),r(49,"li"),e(50,`
                            `),r(51,"label"),e(52,`
                                `),r(53,"input",16),f("change",function(){return i.toggleFilters([i.filterType.FUTURE])}),o(),e(54,`
                                `),s(55,"span",17),e(56,`
                            `),o(),e(57,`
                        `),o(),e(58,`
                        `),r(59,"li"),e(60,`
                            `),r(61,"label"),e(62,`
                                `),r(63,"input",18),f("change",function(){return i.toggleFilters([i.filterType.UNSPECIFIED])}),o(),e(64,`
                                `),s(65,"span",19),e(66,`
                            `),o(),e(67,`
                        `),o(),e(68,`
                    `),o(),e(69,`
                `),o(),e(70,`
                `),r(71,"div",20),e(72,`
                    `),r(73,"button",21),f("click",function(){return i.openImportModal()}),e(74,`
                        `),s(75,"fa-icon",9),e(76,`
                        `),s(77,"span",22),e(78,`
                    `),o(),e(79,`
                    `),r(80,"a",23),e(81,`
                        `),s(82,"fa-icon",9),e(83,`
                        `),s(84,"span",24),e(85,`
                    `),o(),e(86,`
                    `),g(87,it,8,1),o(),e(88,`
            `),o(),e(89,`
        `),o(),e(90,`
    `),o(),e(91,`
    `),s(92,"br"),e(93,`
    `),g(94,_t,63,9),o(),e(95,`
`)),a&2&&(l(11),c("type",i.documentationType),l(9),c("ngClass",J(13,Je,i.activeFilters.size===0,i.activeFilters.size>0)),l(2),c("icon",i.faFilter),l(2),c("translateValues",v(16,Ke,i.activeFilters.size)),l(9),c("checked",i.activeFilters.has(i.filterType.PAST)),l(10),c("checked",i.activeFilters.has(i.filterType.CURRENT)),l(10),c("checked",i.activeFilters.has(i.filterType.FUTURE)),l(10),c("checked",i.activeFilters.has(i.filterType.UNSPECIFIED)),l(12),c("icon",i.faFileImport),l(5),c("routerLink",Y(18,Xe)),l(2),c("icon",i.faPlus),l(5),h(i.lectureIngestionEnabled?87:-1),l(7),h(i.filteredLectures?94:-1))},dependencies:[B,we,de,pe,K,R,me,ie,N,U,Ae,je,Pe],encapsulation:2})}return n})();export{ci as LectureComponent,w as LectureDateFilter};
//# sourceMappingURL=lecture.component-GTFZE5SU.js.map
