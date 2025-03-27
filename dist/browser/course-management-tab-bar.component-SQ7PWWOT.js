import{a as Pe}from"./chunk-AQVCH6R6.js";import{a as g}from"./chunk-AI6LQFKB.js";import{a as we}from"./chunk-66AWMTNA.js";import{a as Oe}from"./chunk-C7XGVC6R.js";import"./chunk-MYJYCKA4.js";import{b as Le}from"./chunk-PH44QM5B.js";import"./chunk-BIK4CL5A.js";import"./chunk-GERFCPB6.js";import{b as ke}from"./chunk-T624HJJL.js";import"./chunk-HQTS6JOY.js";import"./chunk-HMZID6NQ.js";import{b as Ae}from"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import{a as Me}from"./chunk-NF2MKYY2.js";import{a as ye}from"./chunk-FXB5LS64.js";import{b as he}from"./chunk-ZPITQMA6.js";import{d as fe}from"./chunk-AR57MWOI.js";import"./chunk-A5PTZAPN.js";import"./chunk-AU6UEH3U.js";import"./chunk-FGAONQTL.js";import"./chunk-HQ6UGNQX.js";import"./chunk-ZLJ76G5I.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import{k as Se}from"./chunk-CT44YL7Q.js";import{a as Te,b as Ee}from"./chunk-YLNI6ED3.js";import"./chunk-ZFM7LHJQ.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import"./chunk-WA5GEAJB.js";import{k as O,n as be,q as ge,r as Ce,s as _e}from"./chunk-VK7JPHFE.js";import{c as de}from"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import{a as xe}from"./chunk-BQRUD4AM.js";import{a as ve}from"./chunk-K3W6YFKH.js";import{a as pe}from"./chunk-JXJXC4DZ.js";import{d as E}from"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{A as Y,Bb as re,Gb as ae,H as $,Ld as me,N as K,Ta as ee,Vb as se,Wa as te,Ya as ne,_c as le,ac as ce,hb as ie,nb as oe,qa as X,rc as ue,s as G,u as Q,va as J,wa as Z}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import{a as q}from"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as A}from"./chunk-U54OSGNH.js";import{f as N,g as V,h as S,i as T,j as W}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{s as U}from"./chunk-IOA4DPXY.js";import{Bb as H,Db as i,Dc as y,Ea as x,La as B,Ma as _,Mc as C,Na as h,Oc as u,Tb as v,Zb as f,dd as e,ed as L,f as j,fd as z,kc as o,mc as b,rd as l,s as I,sc as m,xc as s,yc as c,yd as M,z as R,zc as r,zd as w}from"./chunk-5LC5EQRR.js";import{a as D,b as F}from"./chunk-3E746U5Y.js";var He=n=>({backgroundColor:n}),De=n=>({color:n}),ze=n=>["/courses",n];function Ue(n,p){if(n&1){let t=y();e(0,`
                                `),s(1,"div",10),C("click",function(){_(t);let d=u(2);return h(d.toggleCourseDescription())}),e(2),M(3,"artemisTranslate"),r(4,"fa-icon",11),e(5,`
                                `),c(),e(6,`
                            `)}if(n&2){let t=u(2);i(2),z(`
                                    `,w(3,4,"artemisApp.courseOverview."+(t.longDescriptionShown?"showLess":"showMore")),`
                                    \xA0 `),i(2),b("rotate180",t.longDescriptionShown),o("icon",t.faArrowDown)}}function Ne(n,p){if(n&1&&(e(0,`
                        `),s(1,"div",8),e(2,`
                            `),s(3,"h6",9),e(4),c(),e(5,`
                            `),f(6,Ue,7,6),c(),e(7,`
                    `)),n&2){let t=u();i(3),o("ngStyle",l(3,De,t.contentColor)),i(),L(t.courseDescription),i(2),m(t.enableShowMore?6:-1)}}function Ve(n,p){if(n&1&&(e(0,`
            `),s(1,"div",12),e(2,`
                `),r(3,"jhi-secured-image",13),M(4,"artemisTranslate"),e(5,`
            `),c(),e(6,`
        `)),n&2){let t=u();i(3),o("src",t.course.courseIcon)("cachingStrategy",t.CachingStrategy.LOCAL_STORAGE)("alt",w(4,3,"artemisApp.courseOverview.noCourseIcon"))}}var Fe=(()=>{class n{router=x(S);ARTEMIS_DEFAULT_COLOR=O;CachingStrategy=Te;course;courseColor;contentColor;courseDescription;enableShowMore=!1;longDescriptionShown=!1;faArrowDown=ue;ngOnChanges(){this.courseColor=this.course.color||O,this.contentColor=Le(this.courseColor),this.adjustCourseDescription()}onResize(){this.adjustCourseDescription()}toggleCourseDescription(){this.longDescriptionShown=!this.longDescriptionShown,this.adjustCourseDescription()}adjustCourseDescription(){let t=window.innerWidth/(this.course.courseIcon?3.6:3.4);this.course&&this.course.description&&(this.enableShowMore=this.course.description.length>t,this.enableShowMore&&!this.longDescriptionShown?this.courseDescription=this.course.description.slice(0,t)+"\u2026":this.courseDescription=this.course.description)}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=v({type:n,selectors:[["jhi-header-course"]],hostBindings:function(a,d){a&1&&C("resize",function(){return d.onResize()},!1,H)},inputs:{course:"course"},features:[B],decls:25,vars:14,consts:[["id","course-detail-info-bar",1,"course-info-bar",3,"ngStyle"],[1,"row"],[1,"col","general-info"],[1,"d-flex","justify-content-between"],[1,"course-description"],["id","course-header-title",1,"fw-medium",3,"ngStyle"],["id","student-view-button",1,"d-flex","align-items-center","justify-content-center","manage-button-container"],["jhiTranslate","artemisApp.courseOverview.studentView",1,"btn","btn-secondary","manage-button",3,"routerLink"],[2,"display","block"],["id","course-header-description",1,"fw-normal",3,"ngStyle"],["role","button",1,"fw-medium","show-more","d-flex","h6",3,"click"],[1,"rotate-icon",3,"icon"],[1,"col-auto","d-none","d-lg-flex","justify-content-end","course-icon"],[1,"d-flex","justify-content-center","align-items-center",3,"src","cachingStrategy","alt"]],template:function(a,d){a&1&&(s(0,"div",0),e(1,`
    `),s(2,"div",1),e(3,`
        `),s(4,"div",2),e(5,`
            `),s(6,"div",3),e(7,`
                `),s(8,"div",4),e(9,`
                    `),s(10,"h3",5),e(11),c(),e(12,`
                    `),f(13,Ne,8,5),c(),e(14,`
                `),s(15,"div",6),e(16,`
                    `),r(17,"a",7),e(18,`
                `),c(),e(19,`
            `),c(),e(20,`
        `),c(),e(21,`
        `),f(22,Ve,7,5),c(),e(23,`
`),c(),e(24,`
`)),a&2&&(o("ngStyle",l(8,He,d.courseColor)),i(10),b("mb-0",!d.courseDescription),o("ngStyle",l(10,De,d.contentColor)),i(),L(d.course.title),i(2),m(d.courseDescription?13:-1),i(4),o("routerLink",l(12,ze,d.course.id)),i(5),m(d.course.courseIcon?22:-1))},dependencies:[U,E,A,T,Ee,ve],styles:[".show-more[_ngcontent-%COMP%]{margin-bottom:0}.course-icon[_ngcontent-%COMP%]     img{border-radius:50%;max-width:100%;max-height:80px}@media (max-width: 1024px){.row[_ngcontent-%COMP%]{flex-direction:column}.btn[_ngcontent-%COMP%]{width:100%;margin-top:10px}}.rotate180[_ngcontent-%COMP%]{transform:rotate(180deg)}.manage-button-container[_ngcontent-%COMP%]{margin-left:.5em}.manage-button[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.course-description[_ngcontent-%COMP%]{overflow-wrap:anywhere;justify-content:space-between}"]})}return n})();var We=n=>["/course-management",n,"exams"],qe=n=>["/course-management",n,"exercises"],Ge=n=>["/course-management",n,"course-statistics"],Qe=n=>["/course-management",n,"assessment-dashboard"],Ye=n=>["/course-management",n,"lectures"],$e=n=>["/course-management",n,"iris-settings"],Ke=n=>["/courses",n,"communication"],Xe=n=>["/course-management",n,"tutorial-groups"],Je=n=>["/course-management",n,"competency-management"],Ze=n=>["/course-management",n,"learning-path-management"],et=n=>["/course-management",n,"scores"],tt=n=>["/course-management",n,"faqs"],nt=n=>["/course-management",n,"build-queue"],it=n=>["/course-management",n,"lti-configuration"],ot=n=>["/course-management",n,"edit"];function rt(n,p){if(n&1&&(e(0,`
                `),s(1,"a",9),e(2,`
                    `),r(3,"fa-icon",4),e(4,`
                    `),r(5,"span",10),e(6,`
                `),c(),e(7,`
            `)),n&2){let t=u(2);i(),o("routerLink",l(2,Ye,t.course.id)),i(2),o("icon",t.faFilePdf)}}function at(n,p){if(n&1&&(e(0,`
                `),s(1,"a",11),e(2,`
                    `),r(3,"fa-icon",4),e(4,`
                    `),r(5,"span",12),e(6,`
                `),c(),e(7,`
            `)),n&2){let t=u(2);i(),o("routerLink",l(2,$e,t.course.id)),i(2),o("icon",t.faRobot)}}function st(n,p){if(n&1&&(e(0,`
                `),s(1,"a",3),e(2,`
                    `),r(3,"fa-icon",4),e(4,`
                    `),r(5,"span",13),e(6,`
                    `),r(7,"fa-icon",4),e(8,`
                `),c(),e(9,`
            `)),n&2){let t=u(2);i(),o("routerLink",l(3,Ke,t.course.id)),i(2),o("icon",t.faComments),i(4),o("icon",t.faArrowUpRightFromSquare)}}function ct(n,p){if(n&1&&(e(0,`
                `),s(1,"a",14),e(2,`
                    `),r(3,"fa-icon",4),e(4,`
                    `),r(5,"span",15),e(6,`
                `),c(),e(7,`
            `)),n&2){let t=u(2);i(),b("active",t.shouldHighlightTutorialsLink()),o("jhiFeatureToggleLink",t.FeatureToggle.TutorialGroups)("routerLink",l(5,Xe,t.course.id)),i(2),o("icon",t.faPersonChalkboard)}}function ut(n,p){if(n&1&&(e(0,`
                `),s(1,"jhi-feature-overlay",16),e(2,`
                    `),s(3,"a",3),e(4,`
                        `),r(5,"fa-icon",4),e(6,`
                        `),r(7,"span",17),e(8,`
                    `),c(),e(9,`
                `),c(),e(10,`
            `)),n&2){let t=u(2);i(),o("enabled",t.atlasEnabled),i(2),o("routerLink",l(3,Je,t.course.id)),i(2),o("icon",t.faFlag)}}function lt(n,p){if(n&1&&(e(0,`
                `),s(1,"jhi-feature-overlay",16),e(2,`
                    `),s(3,"a",18),e(4,`
                        `),r(5,"fa-icon",4),e(6,`
                        `),r(7,"span",19),e(8,`
                    `),c(),e(9,`
                `),c(),e(10,`
            `)),n&2){let t=u(2);i(),o("enabled",t.atlasEnabled),i(2),o("jhiFeatureToggleHide",t.FeatureToggle.LearningPaths)("routerLink",l(4,Ze,t.course.id)),i(2),o("icon",t.faNetworkWired)}}function mt(n,p){if(n&1&&(e(0,`
                `),s(1,"a",3),e(2,`
                    `),r(3,"fa-icon",4),e(4,`
                    `),r(5,"span",20),e(6,`
                `),c(),e(7,`
            `)),n&2){let t=u(2);i(),o("routerLink",l(2,et,t.course.id)),i(2),o("icon",t.faTable)}}function dt(n,p){if(n&1&&(e(0,`
                `),s(1,"a",3),e(2,`
                    `),r(3,"fa-icon",4),e(4,`
                    `),r(5,"span",21),e(6,`
                `),c(),e(7,`
            `)),n&2){let t=u(2);i(),o("routerLink",l(2,tt,t.course.id)),i(2),o("icon",t.faQuestion)}}function pt(n,p){if(n&1&&(e(0,`
                `),s(1,"a",3),e(2,`
                    `),r(3,"fa-icon",4),e(4,`
                    `),r(5,"span",22),e(6,`
                `),c(),e(7,`
            `)),n&2){let t=u(2);i(),o("routerLink",l(2,nt,t.course.id)),i(2),o("icon",t.faList)}}function xt(n,p){if(n&1&&(e(0,`
                `),s(1,"a",23),e(2,`
                    `),r(3,"fa-icon",4),e(4,`
                    `),r(5,"span",24),e(6,`
                `),c(),e(7,`
            `)),n&2){let t=u(2);i(),o("routerLink",l(2,it,t.course.id)),i(2),o("icon",t.faPuzzlePiece)}}function ft(n,p){if(n&1&&(e(0,`
                        `),s(1,"button",27),e(2,`
                            `),r(3,"fa-icon",4),e(4,`
                            `),r(5,"span",28),e(6,`
                        `),c(),e(7,`
                    `)),n&2){let t=u(3);i(),o("routerLink",l(2,ot,t.course.id)),i(2),o("icon",t.faWrench)}}function bt(n,p){if(n&1&&(e(0,`
                        `),r(1,"jhi-course-exam-archive-button",29),e(2,`
                    `)),n&2){let t=u(3);i(),o("archiveMode","Course")("course",t.course)}}function gt(n,p){if(n&1){let t=y();s(0,"button",30),C("delete",function(){_(t);let d=u(3);return h(d.deleteCourse(d.course.id))}),e(1,`
                        `),r(2,"fa-icon",4),e(3,`
                    `),c()}if(n&2){let t=u(3);o("buttonSize",t.ButtonSize.MEDIUM)("entityTitle",t.course.title||"")("fetchEntitySummary",t.fetchCourseDeletionSummary())("dialogError",t.dialogError$),i(2),o("icon",t.faTrash)}}function Ct(n,p){if(n&1&&(e(0,`
                `),s(1,"div",25),e(2,`
                    `),f(3,ft,8,4)(4,bt,3,2)(5,gt,4,5,"button",26),e(6,`
                `),c(),e(7,`
            `)),n&2){let t=u(2);i(3),m(t.course.isAtLeastInstructor?3:-1),i(),m(t.course.isAtLeastInstructor?4:-1),i(),o("jhiHasAnyAuthority","ROLE_ADMIN")}}function _t(n,p){if(n&1&&(e(0,`
    `),s(1,"div",0),e(2,`
        `),r(3,"jhi-header-course",1),e(4,`
        `),s(5,"div",2),e(6,`
            `),s(7,"a",3),e(8,`
                `),r(9,"fa-icon",4),e(10,`
                `),r(11,"span",5),e(12,`
            `),c(),e(13,`
            `),s(14,"a",3),e(15,`
                `),r(16,"fa-icon",4),e(17,`
                `),r(18,"span",6),e(19,`
            `),c(),e(20,`
            `),f(21,rt,8,4),s(22,"a",3),e(23,`
                `),r(24,"fa-icon",4),e(25,`
                `),r(26,"span",7),e(27,`
            `),c(),e(28,`
            `),f(29,at,8,4)(30,st,10,5)(31,ct,8,7)(32,ut,11,5)(33,lt,11,6),s(34,"a",3),e(35,`
                `),r(36,"fa-icon",4),e(37,`
                `),r(38,"span",8),e(39,`
            `),c(),e(40,`
            `),f(41,mt,8,4)(42,dt,8,4)(43,pt,8,4)(44,xt,8,4)(45,Ct,8,3),c(),e(46,`
    `),c(),e(47,`
`)),n&2){let t=u();i(3),o("course",t.course),i(4),o("routerLink",l(22,We,t.course.id)),i(2),o("icon",t.faGraduationCap),i(5),o("routerLink",l(24,qe,t.course.id)),i(2),o("icon",t.faListAlt),i(5),m(t.course.isAtLeastEditor?21:-1),i(),o("routerLink",l(26,Ge,t.course.id)),i(2),o("icon",t.faChartBar),i(5),m(t.course.isAtLeastInstructor&&t.irisEnabled?29:-1),i(),m(t.isCommunicationEnabled?30:-1),i(),m(t.course.tutorialGroupsConfiguration||t.course.isAtLeastInstructor?31:-1),i(),m(t.course.isAtLeastInstructor?32:-1),i(),m(t.course.isAtLeastInstructor?33:-1),i(),b("active",t.shouldHighlightAssessmentLink()),o("routerLink",l(28,Qe,t.course.id)),i(2),o("icon",t.faUserCheck),i(5),m(t.course.isAtLeastInstructor?41:-1),i(),m(t.course.isAtLeastTutor&&t.course.faqEnabled?42:-1),i(),m(t.course.isAtLeastInstructor&&t.localCIActive?43:-1),i(),m(t.ltiEnabled&&t.course.onlineCourse&&t.course.isAtLeastInstructor?44:-1),i(),m(t.shouldShowControlButtons()?45:-1)}}var cn=(()=>{class n{eventManager=x(pe);courseManagementService=x(fe);courseAdminService=x(Me);route=x(N);router=x(S);profileService=x(de);courseAccessStorageService=x(g);FeatureToggle=q;ButtonSize=Ae;course;paramSub;courseSub;eventSubscriber;localCIActive=!1;dialogErrorSource=new j;dialogError$=this.dialogErrorSource.asObservable();faArrowUpRightFromSquare=ne;faTrash=re;faEye=oe;faWrench=ie;faTable=Y;faUserCheck=Q;faFlag=$;faNetworkWired=ce;faListAlt=se;faChartBar=Z;faFilePdf=ae;faComments=G;faClipboard=X;faGraduationCap=me;faPersonChalkboard=J;faRobot=le;faPuzzlePiece=te;faList=K;faQuestion=ee;isCommunicationEnabled=!1;atlasEnabled=!1;irisEnabled=!1;ltiEnabled=!1;ngOnInit(){let t=0;this.paramSub=this.route.firstChild?.params.subscribe(a=>{t=a.courseId,this.subscribeToCourseUpdates(t)}),this.eventSubscriber=this.eventManager.subscribe("courseModification",()=>{this.subscribeToCourseUpdates(t)}),this.profileService.getProfileInfo().subscribe(a=>{a&&(this.atlasEnabled=a.activeProfiles.includes(ge),this.irisEnabled=a.activeProfiles.includes(Ce),this.ltiEnabled=a.activeProfiles.includes(_e),this.localCIActive=a?.activeProfiles.includes(be))}),this.courseAccessStorageService.onCourseAccessed(t,g.STORAGE_KEY,g.MAX_DISPLAYED_RECENTLY_ACCESSED_COURSES_OVERVIEW),this.courseAccessStorageService.onCourseAccessed(t,g.STORAGE_KEY_DROPDOWN,g.MAX_DISPLAYED_RECENTLY_ACCESSED_COURSES_DROPDOWN)}ngAfterViewInit(){Se()}subscribeToCourseUpdates(t){this.courseSub=this.courseManagementService.find(t).subscribe(a=>{this.course=a.body,this.isCommunicationEnabled=he(this.course)})}ngOnDestroy(){this.paramSub&&this.paramSub.unsubscribe(),this.courseSub&&this.courseSub.unsubscribe(),this.eventManager.destroy(this.eventSubscriber)}deleteCourse(t){this.courseAdminService.delete(t).subscribe({next:()=>{this.eventManager.broadcast({name:"courseListModification",content:"Deleted an course"}),this.dialogErrorSource.next("")},error:a=>this.dialogErrorSource.next(a.message)}),this.router.navigate(["/course-management"])}shouldHighlightTutorialsLink(){return/tutorial-groups/.test(this.router.url)}shouldHighlightAssessmentLink(){return/^(?!.*exams).*(grading-system|plagiarism-cases|assessment-dashboard)/.test(this.router.url)}shouldShowControlButtons(){return/course-management\/[0-9]+(\/edit)?$/.test(this.router.url)}getExistingSummaryEntries(){let t=new Map;this.course?.exercises?.forEach(k=>{if(k.type===void 0)return;let Re=t.get(k.type)??0;t.set(k.type,Re+1)});let a=this.course?.numberOfStudents??0,d=this.course?.numberOfTeachingAssistants??0,P=this.course?.numberOfEditors??0,je=this.course?.numberOfInstructors??0,Ie=this.course?.testCourse;return{"artemisApp.course.delete.summary.numberStudents":a,"artemisApp.course.delete.summary.numberTutors":d,"artemisApp.course.delete.summary.numberEditors":P,"artemisApp.course.delete.summary.numberInstructors":je,"artemisApp.course.delete.summary.isTestCourse":Ie}}fetchCourseDeletionSummary(){return this.course?.id===void 0?I({}):this.courseAdminService.getDeletionSummary(this.course.id).pipe(R(t=>{let a=t.body;return a===null?{}:F(D({},this.getExistingSummaryEntries()),{"artemisApp.course.delete.summary.numberExams":a.numberExams,"artemisApp.course.delete.summary.numberLectures":a.numberLectures,"artemisApp.course.delete.summary.numberProgrammingExercises":a.numberProgrammingExercises,"artemisApp.course.delete.summary.numberTextExercises":a.numberTextExercises,"artemisApp.course.delete.summary.numberFileUploadExercises":a.numberFileUploadExercises,"artemisApp.course.delete.summary.numberQuizExercises":a.numberQuizExercises,"artemisApp.course.delete.summary.numberModelingExercises":a.numberModelingExercises,"artemisApp.course.delete.summary.numberBuilds":a.numberOfBuilds,"artemisApp.course.delete.summary.numberCommunicationPosts":a.numberOfCommunicationPosts,"artemisApp.course.delete.summary.numberAnswerPosts":a.numberOfAnswerPosts})}))}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=v({type:n,selectors:[["jhi-course-management-tab-bar"]],decls:3,vars:1,consts:[[1,"mt-n3"],[3,"course"],[1,"tab-bar"],["routerLinkActive","active",1,"tab-link",3,"routerLink"],[3,"icon"],["jhiTranslate","artemisApp.courseOverview.menu.exams",1,"tab-link-text"],["jhiTranslate","artemisApp.courseOverview.menu.exercises",1,"tab-link-text"],["jhiTranslate","artemisApp.courseOverview.menu.statistics",1,"tab-link-text"],["jhiTranslate","entity.action.assessmentDashboard",1,"tab-link-text"],["id","lectures","routerLinkActive","active",1,"tab-link",3,"routerLink"],["jhiTranslate","artemisApp.courseOverview.menu.lectures",1,"tab-link-text"],["id","iris-settings","routerLinkActive","active",1,"tab-link",3,"routerLink"],["jhiTranslate","artemisApp.iris.settings.button.course.title",1,"tab-link-text"],["jhiTranslate","artemisApp.metis.communication.label",1,"tab-link-text"],["routerLinkActive","active",1,"tab-link",3,"jhiFeatureToggleLink","routerLink"],["jhiTranslate","artemisApp.entities.tutorialGroup.plural",1,"tab-link-text"],[3,"enabled"],["jhiTranslate","artemisApp.competency.competencyButton",1,"tab-link-text"],["routerLinkActive","active",1,"tab-link",3,"jhiFeatureToggleHide","routerLink"],["jhiTranslate","artemisApp.learningPath.learningPathButton",1,"tab-link-text"],["jhiTranslate","entity.action.scores",1,"tab-link-text"],["jhiTranslate","entity.action.faq",1,"tab-link-text"],["jhiTranslate","artemisApp.buildQueue.title",1,"tab-link-text"],["id","lti-settings","routerLinkActive","active",1,"tab-link",3,"routerLink"],["jhiTranslate","global.menu.admin.lti",1,"tab-link-text"],[1,"controls"],["id","delete-course","jhiDeleteButton","","entitySummaryTitle","artemisApp.course.delete.summary.title","deleteQuestion","artemisApp.course.delete.question","deleteConfirmationText","artemisApp.course.delete.typeNameToConfirm","style","margin-right: 0 !important",3,"buttonSize","entityTitle","fetchEntitySummary","dialogError","delete",4,"jhiHasAnyAuthority"],["id","edit-course","routerLinkActive","active",1,"btn","btn-warning","btn-md",3,"routerLink"],["jhiTranslate","entity.action.edit",1,"d-none","d-xl-inline"],[1,"archive-button",3,"archiveMode","course"],["id","delete-course","jhiDeleteButton","","entitySummaryTitle","artemisApp.course.delete.summary.title","deleteQuestion","artemisApp.course.delete.question","deleteConfirmationText","artemisApp.course.delete.typeNameToConfirm",2,"margin-right","0 !important",3,"delete","buttonSize","entityTitle","fetchEntitySummary","dialogError"]],template:function(a,d){a&1&&(f(0,_t,48,30),r(1,"router-outlet"),e(2,`
`)),a&2&&m(d.course?0:-1)},dependencies:[Fe,W,T,E,A,we,Oe,Pe,ke,V,ye,xe],styles:['.tab-bar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;padding:.5rem 0;margin-bottom:.5rem;border-bottom:1px solid var(--overview-border-color)}.tab-bar[_ngcontent-%COMP%]   .tab-link[_ngcontent-%COMP%]{display:inline-block;position:relative;color:var(--tab-bar-color);text-decoration:none;padding-bottom:2px;margin:.5rem 1rem .5rem 0;border-bottom:2px solid transparent}.tab-bar[_ngcontent-%COMP%]   .tab-link[_ngcontent-%COMP%]:hover{color:var(--tab-bar-color-hover);border-bottom:2px solid var(--tab-bar-color-hover)}.tab-bar[_ngcontent-%COMP%]   .tab-link.active[_ngcontent-%COMP%]{color:var(--tab-bar-color-active);border-bottom:2px solid var(--tab-bar-color-active)}.tab-bar[_ngcontent-%COMP%]   .tab-link.newMessage[_ngcontent-%COMP%]:after{position:absolute;content:"";border-radius:50%;background-color:var(--bs-danger);padding:.5rem;top:0;right:0;transform:translate(50%,-50%)}@media (max-width: 720px){.tab-bar[_ngcontent-%COMP%]   .tab-link[_ngcontent-%COMP%]   .tab-link-text[_ngcontent-%COMP%]{display:none}.tab-bar[_ngcontent-%COMP%]   .tab-link[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:first-child{font-size:calc(var(--bs-body-font-size) * 1.6)}}.tab-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;margin-left:auto;gap:.5rem}.tab-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{box-shadow:0 2px 0 var(--overview-tab-active-border-color)}']})}return n})();export{cn as CourseManagementTabBarComponent};
//# sourceMappingURL=course-management-tab-bar.component-SQ7PWWOT.js.map
