import{a as C}from"./chunk-I676DYEI.js";import{a as H}from"./chunk-QNSAIL7I.js";import{a as M}from"./chunk-77MUXXWJ.js";import{a as q}from"./chunk-NYN5NU5X.js";import{a as J}from"./chunk-2HILLGW2.js";import{a as G}from"./chunk-BIK4CL5A.js";import{a as $}from"./chunk-FGXEI5KW.js";import{a as Q}from"./chunk-ZK23IHB5.js";import{a as P}from"./chunk-UQ4R3Q4B.js";import{a as O}from"./chunk-4RC7EEQU.js";import{a as E}from"./chunk-PMK72D73.js";import{c as R}from"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import"./chunk-36AB5BWM.js";import"./chunk-UHM5AJSI.js";import{c as V}from"./chunk-JNO6DNVW.js";import"./chunk-EELXLOHY.js";import"./chunk-7XXWL6ER.js";import"./chunk-VK7JPHFE.js";import"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import"./chunk-JXJXC4DZ.js";import{a as s}from"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as B}from"./chunk-U54OSGNH.js";import{i as w}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as r,Ea as d,L as j,Oc as _,Tb as N,Zb as u,dd as t,ed as l,kc as h,rc as S,rd as y,s as z,sc as f,sd as F,td as k,vc as b,wc as T,xc as i,ya as c,yc as n,yd as x,z as L,zc as p,zd as g}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var v=(()=>{class e{adminUserService=d(P);resolve(o){return o.params.login?this.adminUserService.findUser(o.params.login):z(new $)}static \u0275fac=function(a){return new(a||e)};static \u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var K=[{path:"user-management",loadComponent:()=>import("./user-management.component-4K3FL7O6.js").then(e=>e.UserManagementComponent),data:{pageTitle:"artemisApp.userManagement.home.title",defaultSort:"id,asc"}},{path:"user-management",data:{pageTitle:"artemisApp.userManagement.home.title"},children:[{path:"new",loadComponent:()=>import("./user-management-update.component-C7YRMIFT.js").then(e=>e.UserManagementUpdateComponent),resolve:{user:v},data:{pageTitle:"artemisApp.userManagement.home.createLabel"}},{path:":login",loadComponent:()=>import("./user-management-detail.component-PFWLBMR2.js").then(e=>e.UserManagementDetailComponent),resolve:{user:v},data:{pageTitle:"artemisApp.userManagement.home.title"}},{path:":login",resolve:{user:v},children:[{path:"edit",loadComponent:()=>import("./user-management-update.component-C7YRMIFT.js").then(e=>e.UserManagementUpdateComponent),data:{pageTitle:"artemisApp.userManagement.home.editLabel"}}]}]}];var U=(()=>{class e{service=d(O);resolve(o){return o.params.id?this.service.find(parseInt(o.params.id,10)).pipe(j(a=>a.ok),L(a=>a.body)):new q}static \u0275fac=function(a){return new(a||e)};static \u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var W=[{path:"system-notification-management",loadComponent:()=>import("./system-notification-management.component-7BTOXP6I.js").then(e=>e.SystemNotificationManagementComponent),data:{pageTitle:"artemisApp.systemNotification.systemNotifications",defaultSort:"id,asc"}},{path:"system-notification-management",data:{pageTitle:"artemisApp.systemNotification.systemNotifications"},children:[{path:"new",loadComponent:()=>import("./system-notification-management-update.component-J3VHV6UO.js").then(e=>e.SystemNotificationManagementUpdateComponent),data:{pageTitle:"global.generic.create"}},{path:":id",loadComponent:()=>import("./system-notification-management-detail.component-5PL2BVT3.js").then(e=>e.SystemNotificationManagementDetailComponent),resolve:{notification:U},data:{pageTitle:"artemisApp.systemNotification.systemNotifications",breadcrumbLabelVariable:"notification.body.id"}},{path:":id",resolve:{notification:U},data:{breadcrumbLabelVariable:"notification.body.id"},children:[{path:"edit",loadComponent:()=>import("./system-notification-management-update.component-J3VHV6UO.js").then(e=>e.SystemNotificationManagementUpdateComponent),data:{pageTitle:"global.generic.edit",breadcrumbLabelVariable:""}}]}]}];var A=(()=>{class e{organizationManagementService=d(Q);resolve(o){return o.params.id?this.organizationManagementService.getOrganizationById(o.params.id):new J}static \u0275fac=function(a){return new(a||e)};static \u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var X=[{path:"organization-management",loadComponent:()=>import("./organization-management.component-T6NXXM77.js").then(e=>e.OrganizationManagementComponent),data:{pageTitle:"artemisApp.organizationManagement.title"}},{path:"organization-management",data:{pageTitle:"artemisApp.organizationManagement.title"},children:[{path:"new",loadComponent:()=>import("./organization-management-update.component-GGUUGYWS.js").then(e=>e.OrganizationManagementUpdateComponent),resolve:{organization:A},data:{pageTitle:"artemisApp.organizationManagement.addLabel"}},{path:":id",loadComponent:()=>import("./organization-management-detail.component-E345VQOA.js").then(e=>e.OrganizationManagementDetailComponent),resolve:{organization:A},data:{pageTitle:"artemisApp.organizationManagement.title",breadcrumbLabelVariable:"organization.id"}},{path:":id",resolve:{organization:A},data:{breadcrumbLabelVariable:"organization.id"},children:[{path:"edit",loadComponent:()=>import("./organization-management-update.component-GGUUGYWS.js").then(e=>e.OrganizationManagementUpdateComponent),data:{pageTitle:"artemisApp.organizationManagement.addOrEditLabel",breadcrumbLabelVariable:"organization.id"}}]}]}];var Y=[{path:"lti-configuration",loadComponent:()=>import("./lti-configuration.component-HRS2HEEY.js").then(e=>e.LtiConfigurationComponent),data:{pageTitle:"global.menu.admin.lti",defaultSort:"id,desc"}},{path:"lti-configuration",data:{pageTitle:"global.menu.admin.lti"},children:[{path:"new",loadComponent:()=>import("./edit-lti-configuration.component-CTHLKFRP.js").then(e=>e.EditLtiConfigurationComponent),data:{authorities:[s.ADMIN],pageTitle:"artemisApp.lti.addOrEditLtiPlatform"},canActivate:[E]},{path:":platformId",data:{breadcrumbLabelVariable:"platform.id"},children:[{path:"edit",loadComponent:()=>import("./edit-lti-configuration.component-CTHLKFRP.js").then(e=>e.EditLtiConfigurationComponent),data:{authorities:[s.ADMIN],pageTitle:"artemisApp.lti.addOrEditLtiPlatform"},canActivate:[E]}]}]}];var te=(e,m,o)=>["/course-management",e,m,o],Z=e=>["/course-management",e],ie=(e,m)=>["/course-management",e,"exams",m];function ne(e,m){if(e&1&&(t(0,`
                                `),i(1,"td"),t(2,`
                                    `),i(3,"span",12),t(4,`
                                        `),i(5,"a",13),t(6),n(),t(7,`
                                    `),n(),t(8,`
                                `),n(),t(9,`
                            `)),e&2){let o=m;r(5),h("routerLink",y(2,Z,o.id)),r(),l(o.title)}}function ae(e,m){e&1&&(t(0,`
                                `),i(1,"td"),t(2,"-"),n(),t(3,`
                            `))}function oe(e,m){if(e&1&&(t(0,`
                        `),i(1,"tr"),t(2,`
                            `),i(3,"td"),t(4,`
                                `),i(5,"span",12),t(6,`
                                    `),i(7,"a",13),t(8),n(),t(9,`
                                `),n(),t(10,`
                            `),n(),t(11,`
                            `),u(12,ne,10,4)(13,ae,4,0),i(14,"td"),t(15),x(16,"artemisDate"),n(),t(17,`
                            `),i(18,"td"),t(19),x(20,"artemisDate"),n(),t(21,`
                        `),n(),t(22,`
                    `)),e&2){let o,a=m.$implicit;r(7),h("routerLink",k(9,te,a.course==null?null:a.course.id,a.type+"-exercises",a.id)),r(),l(a.title),r(4),f((o=a.course)?12:13,o),r(3),l(g(16,5,a.releaseDate)),r(4),l(g(20,7,a.dueDate))}}function re(e,m){if(e&1&&(t(0,`
        `),i(1,"div",4),t(2,`
            `),i(3,"table",5),t(4,`
                `),i(5,"thead"),t(6,`
                    `),i(7,"tr"),t(8,`
                        `),i(9,"th",6),t(10,`
                            `),p(11,"span",7),t(12,`
                        `),n(),t(13,`
                        `),i(14,"th",6),t(15,`
                            `),p(16,"span",8),t(17,`
                        `),n(),t(18,`
                        `),i(19,"th",9),t(20,`
                            `),p(21,"span",10),t(22,`
                        `),n(),t(23,`
                        `),i(24,"th",9),t(25,`
                            `),p(26,"span",11),t(27,`
                        `),n(),t(28,`
                    `),n(),t(29,`
                `),n(),t(30,`
                `),i(31,"tbody"),t(32,`
                    `),b(33,oe,23,13,null,null,S().trackByExercise,!0),n(),t(35,`
            `),n(),t(36,`
        `),n(),t(37,`
    `)),e&2){let o=_();r(33),T(o.upcomingExercises)}}function me(e,m){if(e&1&&(t(0,`
                                    `),i(1,"td"),t(2,`
                                        `),i(3,"span",12),t(4,`
                                            `),i(5,"a",13),t(6),n(),t(7,`
                                        `),n(),t(8,`
                                    `),n(),t(9,`
                                `)),e&2){let o=m;r(5),h("routerLink",y(2,Z,o.id)),r(),l(o.title)}}function pe(e,m){e&1&&(t(0,`
                                    `),i(1,"td"),t(2,"-"),n(),t(3,`
                                `))}function le(e,m){if(e&1&&(t(0,`
                            `),i(1,"tr"),t(2,`
                                `),i(3,"td"),t(4,`
                                    `),i(5,"span",12),t(6,`
                                        `),i(7,"a",13),t(8),n(),t(9,`
                                    `),n(),t(10,`
                                `),n(),t(11,`
                                `),u(12,me,10,4)(13,pe,4,0),i(14,"td"),t(15),x(16,"artemisDate"),n(),t(17,`
                                `),i(18,"td"),t(19),x(20,"artemisDate"),n(),t(21,`
                                `),i(22,"td"),t(23),x(24,"artemisDate"),n(),t(25,`
                            `),n(),t(26,`
                        `)),e&2){let o,a=m.$implicit;r(7),h("routerLink",F(12,ie,a.course==null?null:a.course.id,a.id)),r(),l(a.title),r(4),f((o=a.course)?12:13,o),r(3),l(g(16,6,a.visibleDate)),r(4),l(g(20,8,a.startDate)),r(4),l(g(24,10,a.endDate))}}function de(e,m){if(e&1&&(t(0,`
            `),i(1,"div",4),t(2,`
                `),i(3,"table",5),t(4,`
                    `),i(5,"thead"),t(6,`
                        `),i(7,"tr"),t(8,`
                            `),i(9,"th",6),t(10,`
                                `),p(11,"span",14),t(12,`
                            `),n(),t(13,`
                            `),i(14,"th",6),t(15,`
                                `),p(16,"span",8),t(17,`
                            `),n(),t(18,`
                            `),i(19,"th",9),t(20,`
                                `),p(21,"span",15),t(22,`
                            `),n(),t(23,`
                            `),i(24,"th",9),t(25,`
                                `),p(26,"span",16),t(27,`
                            `),n(),t(28,`
                            `),i(29,"th",9),t(30,`
                                `),p(31,"span",17),t(32,`
                            `),n(),t(33,`
                        `),n(),t(34,`
                    `),n(),t(35,`
                    `),i(36,"tbody"),t(37,`
                        `),b(38,le,27,15,null,null,S().trackByExam,!0),n(),t(40,`
                `),n(),t(41,`
            `),n(),t(42,`
        `)),e&2){let o=_();r(38),T(o.upcomingExams)}}var ee=(()=>{class e{exerciseService=d(R);examManagementService=d(G);upcomingExercises=[];upcomingExams=[];predicate;reverse;ngOnInit(){this.exerciseService.getUpcomingExercises().subscribe(o=>{this.upcomingExercises=o.body??[]}),this.examManagementService.findAllCurrentAndUpcomingExams().subscribe(o=>{this.upcomingExams=o.body??[]})}trackByExercise(o,a){return`${a.course?.id}_${a.id}`}trackByExam(o,a){return`${a.course?.id}_${a.id}`}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=N({type:e,selectors:[["jhi-upcoming-exams-and-exercises"]],decls:26,vars:2,consts:[[1,"row"],[1,"col-12","col-sm"],["jhiTranslate","artemisApp.upcomingExamsAndExercises.upcomingExercises"],["jhiTranslate","artemisApp.upcomingExamsAndExercises.upcomingExams"],[1,"table-responsive"],[1,"table","table-striped"],[1,"d-md-table-cell",2,"width","300px"],["jhiTranslate","artemisApp.upcomingExamsAndExercises.exercise"],["jhiTranslate","artemisApp.upcomingExamsAndExercises.course"],[1,"d-md-table-cell",2,"width","180px"],["jhiTranslate","artemisApp.upcomingExamsAndExercises.releaseDate"],["jhiTranslate","artemisApp.upcomingExamsAndExercises.dueDate"],[1,"bold"],[3,"routerLink"],["jhiTranslate","artemisApp.upcomingExamsAndExercises.exam"],["jhiTranslate","artemisApp.examManagement.visibleDate"],["jhiTranslate","artemisApp.examManagement.startDate"],["jhiTranslate","artemisApp.examManagement.endDate"]],template:function(a,I){a&1&&(i(0,"div"),t(1,`
    `),i(2,"div",0),t(3,`
        `),i(4,"div",1),t(5,`
            `),p(6,"h4",2),t(7,`
        `),n(),t(8,`
    `),n(),t(9,`
    `),u(10,re,38,0),p(11,"br"),t(12,`
    `),i(13,"div"),t(14,`
        `),i(15,"div",0),t(16,`
            `),i(17,"div",1),t(18,`
                `),p(19,"h4",3),t(20,`
            `),n(),t(21,`
        `),n(),t(22,`
        `),u(23,de,43,0),n(),t(24,`
`),n(),t(25,`
`)),a&2&&(r(10),f(I.upcomingExercises?10:-1),r(13),f(I.upcomingExams?23:-1))},dependencies:[B,w,V],styles:[".table[_ngcontent-%COMP%]{table-layout:fixed}"]})}return e})();var se=[{path:"audits",loadComponent:()=>import("./audits.component-WZARV3SZ.js").then(e=>e.AuditsComponent),data:{pageTitle:"audits.title",defaultSort:"auditEventDate,desc"}},{path:"configuration",loadComponent:()=>import("./configuration.component-M4HOFG72.js").then(e=>e.ConfigurationComponent),data:{pageTitle:"configuration.title"}},{path:"feature-toggles",loadComponent:()=>import("./admin-feature-toggle.component-UHR2SVP6.js").then(e=>e.AdminFeatureToggleComponent),data:{pageTitle:"featureToggles.title"}},{path:"health",loadComponent:()=>import("./health.component-UTZMXS7S.js").then(e=>e.HealthComponent),data:{pageTitle:"health.title"}},{path:"logs",loadComponent:()=>import("./logs.component-65M27JFC.js").then(e=>e.LogsComponent),data:{pageTitle:"logs.title"}},{path:"docs",loadComponent:()=>import("./docs.component-IBL7FKPQ.js").then(e=>e.DocsComponent),data:{pageTitle:"global.menu.admin.apidocs"}},{path:"metrics",loadComponent:()=>import("./metrics.component-YEHOH5PK.js").then(e=>e.MetricsComponent),data:{pageTitle:"metrics.title"}},{path:"user-statistics",loadComponent:()=>import("./statistics.component-TMH5ERUO.js").then(e=>e.StatisticsComponent),data:{pageTitle:"statistics.title"}},{path:"build-queue",loadComponent:()=>import("./build-queue.component-67ANSOSP.js").then(e=>e.BuildQueueComponent),data:{pageTitle:"artemisApp.buildQueue.title"},canActivate:[C]},{path:"build-agents",loadComponent:()=>import("./build-agent-summary.component-6PVCKMH4.js").then(e=>e.BuildAgentSummaryComponent),data:{pageTitle:"artemisApp.buildAgents.title"},canActivate:[C]},{path:"build-agents/details",loadComponent:()=>import("./build-agent-details.component-UAZ6QNKB.js").then(e=>e.BuildAgentDetailsComponent),data:{pageTitle:"artemisApp.buildAgents.title"},canActivate:[C]},{path:"standardized-competencies",loadComponent:()=>import("./standardized-competency-management.component-O3DAVLDP.js").then(e=>e.StandardizedCompetencyManagementComponent),data:{pageTitle:"artemisApp.standardizedCompetency.title"},canDeactivate:[M]},{path:"standardized-competencies",data:{pageTitle:"artemisApp.standardizedCompetency.title"},children:[{path:"import",loadComponent:()=>import("./admin-import-standardized-competencies.component-LVZYAKC4.js").then(e=>e.AdminImportStandardizedCompetenciesComponent),data:{pageTitle:"artemisApp.standardizedCompetency.import.title"}}]},{path:"privacy-statement",loadComponent:()=>import("./legal-document-update.component-ZG2I5U4B.js").then(e=>e.LegalDocumentUpdateComponent),data:{authorities:[s.ADMIN]}},{path:"imprint",loadComponent:()=>import("./legal-document-update.component-ZG2I5U4B.js").then(e=>e.LegalDocumentUpdateComponent),data:{authorities:[s.ADMIN]}},{path:"iris",loadComponent:()=>import("./iris-global-settings-update.component-SFQNC4YD.js").then(e=>e.IrisGlobalSettingsUpdateComponent),data:{authorities:[s.ADMIN],pageTitle:"artemisApp.iris.settings.title.global"},canActivate:[E,H],canDeactivate:[M]},{path:"cleanup-service",loadComponent:()=>import("./cleanup-service.component-THJMZ72Q.js").then(e=>e.CleanupServiceComponent),data:{pageTitle:"cleanupService.title"}},{path:"upcoming-exams-and-exercises",component:ee,data:{pageTitle:"artemisApp.upcomingExamsAndExercises.upcomingExamsAndExercises"}},...X,...K,...W,...Y],it=se;export{it as default};
//# sourceMappingURL=admin.routes-HPCYNS6O.js.map
