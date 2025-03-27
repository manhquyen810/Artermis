import{a as te}from"./chunk-JYHI54MX.js";import{a as ee}from"./chunk-MBS3WUDO.js";import{b as X}from"./chunk-TECMX7AA.js";import{a as K,b as Q,d as U}from"./chunk-O26CMRR4.js";import{a as J}from"./chunk-MP6UGYTC.js";import{a as $}from"./chunk-2QXIMOEO.js";import{u as z,v as N}from"./chunk-VZRSC3LP.js";import{C as W,K as B,b as D,c as I,h as j,i as O,k as V,m as F,n as k}from"./chunk-WA5GEAJB.js";import{c as G}from"./chunk-JXJXC4DZ.js";import{d as H}from"./chunk-EDXSOKK5.js";import{cc as Z,y as q}from"./chunk-Z4VHWOB5.js";import{a as M}from"./chunk-HKBU2OOC.js";import{a as Y}from"./chunk-U54OSGNH.js";import{Db as a,Dc as f,Ea as y,Ma as x,Mc as S,Na as g,Oc as l,Tb as b,Va as R,Zb as h,dd as e,ed as v,fd as A,kc as u,ld as _,md as E,nd as C,sc as d,sd as P,uc as w,vc as T,wc as L,xc as o,yc as r,zc as m}from"./chunk-5LC5EQRR.js";var re=(i,c)=>({exerciseTitle:i,courseTitle:c});function ae(i,c){if(i&1&&(e(0,`
                                `),o(1,"tr"),e(2,`
                                    `),o(3,"td"),e(4),r(),e(5,`
                                `),r(),e(6,`
                            `)),i&2){let t=c.$implicit;a(4),v(t.title)}}function se(i,c){if(i&1&&(e(0,`
                `),o(1,"div",21),e(2,`
                    `),o(3,"span",22),e(4,"You are about to download all teams'/students' submissions of the following exercises:"),r(),e(5,`
                    `),o(6,"table",23),e(7,`
                        `),o(8,"tbody"),e(9,`
                            `),T(10,ae,7,1,null,null,w),r(),e(12,`
                    `),r(),e(13,`
                `),r(),e(14,`
            `)),i&2){let t=l(2);a(10),L(t.programmingExercises)}}function pe(i,c){if(i&1&&(e(0,`
                `),o(1,"p",24),e(2,`
                    Confirm export
                `),r(),e(3,`
            `)),i&2){let t=l(2);a(),u("jhiTranslate","artemisApp.instructorDashboard.exportRepos.questions."+(t.programmingExercises[0].teamMode?"team":"individual"))("translateValues",P(2,re,t.programmingExercises[0].title,t.programmingExercises[0].course==null?null:t.programmingExercises[0].course.title))}}function le(i,c){if(i&1){let t=f();e(0,`
                `),o(1,"textarea",25),C("ngModelChange",function(n){x(t);let p=l(2);return E(p.participantIdentifierList,n)||(p.participantIdentifierList=n),g(n)}),r(),e(2,`
            `)}if(i&2){let t=l(2);a(),_("ngModel",t.participantIdentifierList),u("disabled",t.singleParticipantMode||t.repositoryExportOptions.exportAllParticipants)}}function me(i,c){if(i&1){let t=f();e(0,`
                `),o(1,"div",6),e(2,`
                    `),o(3,"label",7),e(4,`
                        `),o(5,"input",26),C("ngModelChange",function(n){x(t);let p=l(2);return E(p.repositoryExportOptions.exportAllParticipants,n)||(p.repositoryExportOptions.exportAllParticipants=n),g(n)}),r(),e(6,`
                        `),o(7,"strong",27),e(8),r(),e(9,`
                    `),r(),e(10,`
                `),r(),e(11,`
            `)}if(i&2){let t=l(2);a(5),_("ngModel",t.repositoryExportOptions.exportAllParticipants),a(2),u("jhiTranslate","artemisApp.programmingExercise.export."+(t.programmingExercises[0].teamMode?"downloadAllTeams":"downloadAllStudents")),a(),A(`
                            Or download the repositories of all `,t.programmingExercises[0].teamMode?"teams":"students",`
                        `)}}function ce(i,c){if(i&1){let t=f();e(0,`
                `),o(1,"div",6),e(2,`
                    `),o(3,"label",7),e(4,`
                        `),o(5,"input",28),C("ngModelChange",function(n){x(t);let p=l(2);return E(p.repositoryExportOptions.filterLateSubmissions,n)||(p.repositoryExportOptions.filterLateSubmissions=n),g(n)}),r(),e(6,`
                        `),m(7,"strong",29),e(8,`
                        `),m(9,"jhi-help-icon",30),e(10,`
                    `),r(),e(11,`
                `),r(),e(12,`
                `),o(13,"div",31),e(14,`
                    `),o(15,"strong",32),e(16,"Date for filter late submissions (defaults to exercise due date if not set)"),r(),e(17,`
                    `),m(18,"jhi-help-icon",33),e(19,`
                    `),o(20,"jhi-date-time-picker",34),C("ngModelChange",function(n){x(t);let p=l(2);return E(p.repositoryExportOptions.filterLateSubmissionsDate,n)||(p.repositoryExportOptions.filterLateSubmissionsDate=n),g(n)}),r(),e(21,`
                `),r(),e(22,`
            `)}if(i&2){let t=l(2);a(5),_("ngModel",t.repositoryExportOptions.filterLateSubmissions),a(15),_("ngModel",t.repositoryExportOptions.filterLateSubmissionsDate),u("disabled",!t.repositoryExportOptions.filterLateSubmissions)("shouldDisplayTimeZoneWarning",!1)}}function de(i,c){if(i&1){let t=f();e(0,`
                `),o(1,"div",6),e(2,`
                    `),o(3,"label",7),e(4,`
                        `),o(5,"input",35),C("ngModelChange",function(n){x(t);let p=l(2);return E(p.repositoryExportOptions.excludePracticeSubmissions,n)||(p.repositoryExportOptions.excludePracticeSubmissions=n),g(n)}),r(),e(6,`
                        `),m(7,"strong",36),e(8,`
                        `),m(9,"jhi-help-icon",37),e(10,`
                    `),r(),e(11,`
                `),r(),e(12,`
            `)}if(i&2){let t=l(2);a(5),_("ngModel",t.repositoryExportOptions.excludePracticeSubmissions)}}function xe(i,c){if(i&1&&(e(0,`
                            `),o(1,"strong",27),e(2),r(),e(3,`
                        `)),i&2){let t=l(3);a(),u("jhiTranslate","artemisApp.programmingExercise.export.addToProject.title."+(!t.isRepoExportForMultipleExercises&&t.programmingExercises[0].teamMode?"team":"student")),a(),A(`
                                Add `,t.programmingExercises[0].teamMode?"team":"student",` name to project
                            `)}}function ge(i,c){i&1&&(e(0,`
                            `),o(1,"strong",27),e(2," Add team/student name to project "),r(),e(3,`
                        `)),i&2&&(a(),u("jhiTranslate","artemisApp.programmingExercise.export.addToProject.title.teamOrStudent"))}function ue(i,c){if(i&1){let t=f();e(0,`
                `),o(1,"div",6),e(2,`
                    `),o(3,"label",7),e(4,`
                        `),o(5,"input",38),C("ngModelChange",function(n){x(t);let p=l(2);return E(p.repositoryExportOptions.addParticipantName,n)||(p.repositoryExportOptions.addParticipantName=n),g(n)}),r(),e(6,`
                        `),h(7,xe,4,2)(8,ge,4,1),m(9,"jhi-help-icon",39),e(10,`
                    `),r(),e(11,`
                `),r(),e(12,`
            `)}if(i&2){let t=l(2);a(5),_("ngModel",t.repositoryExportOptions.addParticipantName),a(2),d(t.isRepoExportForMultipleExercises?-1:7),a(),d(t.isRepoExportForMultipleExercises?8:-1)}}function _e(i,c){if(i&1){let t=f();e(0,`
                `),o(1,"div",6),e(2,`
                    `),o(3,"label",7),e(4,`
                        `),o(5,"input",40),C("ngModelChange",function(n){x(t);let p=l(2);return E(p.repositoryExportOptions.anonymizeRepository,n)||(p.repositoryExportOptions.anonymizeRepository=n),g(n)}),r(),e(6,`
                        `),m(7,"strong",41),e(8,`
                        `),m(9,"jhi-help-icon",42),e(10,`
                    `),r(),e(11,`
                `),r(),e(12,`
            `)}if(i&2){let t=l(2);a(5),_("ngModel",t.repositoryExportOptions.anonymizeRepository),u("disabled",!t.isAtLeastInstructor)}}function Ee(i,c){i&1&&(e(0,`
                `),o(1,"div",43),e(2,`
                    `),o(3,"span",44),e(4,`
                        `),o(5,"b"),e(6,"Note:"),r(),e(7,` This action can take several minutes depending on number and size of repositories.
                    `),r(),e(8,`
                `),r(),e(9,`
            `))}function Ce(i,c){if(i&1&&(e(0,`
                    `),o(1,"span",45),m(2,"fa-icon",46),r(),e(3,`
                `)),i&2){let t=l(2);a(2),u("icon",t.faCircleNotch)}}function fe(i,c){if(i&1){let t=f();e(0,`
    `),o(1,"form",1,0),S("ngSubmit",function(){x(t);let n=l();return g(n.exportRepos())}),e(3,`
        `),o(4,"div",2),e(5,`
            `),m(6,"h4",3),e(7,`
            `),o(8,"button",4),S("click",function(){x(t);let n=l();return g(n.clear())}),r(),e(9,`
        `),r(),e(10,`
        `),o(11,"div",5),e(12,`
            `),h(13,se,15,0)(14,pe,4,5)(15,le,3,2)(16,me,12,3)(17,ce,23,4)(18,de,13,1)(19,ue,13,3),o(20,"div",6),e(21,`
                `),o(22,"label",7),e(23,`
                    `),o(24,"input",8),C("ngModelChange",function(n){x(t);let p=l();return E(p.repositoryExportOptions.combineStudentCommits,n)||(p.repositoryExportOptions.combineStudentCommits=n),g(n)}),r(),e(25,`
                    `),m(26,"strong",9),e(27,`
                    `),m(28,"jhi-help-icon",10),e(29,`
                `),r(),e(30,`
            `),r(),e(31,`
            `),h(32,_e,13,2),o(33,"div",6),e(34,`
                `),o(35,"label",7),e(36,`
                    `),o(37,"input",11),C("ngModelChange",function(n){x(t);let p=l();return E(p.repositoryExportOptions.normalizeCodeStyle,n)||(p.repositoryExportOptions.normalizeCodeStyle=n),g(n)}),r(),e(38,`
                    `),m(39,"strong",12),e(40,`
                    `),m(41,"jhi-help-icon",13),e(42,`
                `),r(),e(43,`
            `),r(),e(44,`
            `),h(45,Ee,10,0),r(),e(46,`
        `),o(47,"div",14),e(48,`
            `),o(49,"button",15),S("click",function(){x(t);let n=l();return g(n.clear())}),e(50,`
                `),m(51,"span",16),e(52,"\xA0"),m(53,"span",17),e(54,`
            `),r(),e(55,`
            `),o(56,"button",18),e(57,`
                `),h(58,Ce,4,1),m(59,"span",19),e(60,"\xA0"),m(61,"span",20),e(62,`
            `),r(),e(63,`
        `),r(),e(64,`
    `),r(),e(65,`
`)}if(i&2){let t=l();a(13),d(t.isRepoExportForMultipleExercises?13:-1),a(),d(!t.singleParticipantMode&&!t.isRepoExportForMultipleExercises?14:-1),a(),d(!t.participationIdList&&!t.isRepoExportForMultipleExercises?15:-1),a(),d(t.isAtLeastInstructor&&!t.singleParticipantMode&&!t.isRepoExportForMultipleExercises?16:-1),a(),d(t.singleParticipantMode?-1:17),a(),d(t.singleParticipantMode?-1:18),a(),d(t.singleParticipantMode?-1:19),a(5),_("ngModel",t.repositoryExportOptions.combineStudentCommits),a(8),d(t.isAtLeastInstructor?32:-1),a(5),_("ngModel",t.repositoryExportOptions.normalizeCodeStyle),a(8),d(t.singleParticipantMode?-1:45),a(11),u("jhiFeatureToggle",t.FeatureToggle.ProgrammingExercises)("overwriteDisabled",!t.participationIdList&&!t.participantIdentifierList&&!t.repositoryExportOptions.exportAllParticipants&&!t.exportInProgress),a(2),d(t.exportInProgress?58:-1)}}function he(i,c){if(i&1&&(e(0,`
    `),o(1,"div",47),e(2,`
        `),m(3,"fa-icon",46),e(4,`
    `),r(),e(5,`
`)),i&2){let t=l();a(3),u("icon",t.faCircleNotch)}}var ie=(()=>{class i{repoExportService=y(te);activeModal=y(z);alertService=y(G);programmingExercises;participationIdList;participantIdentifierList;singleParticipantMode=!1;FeatureToggle=M;exportInProgress;repositoryExportOptions;isLoading=!1;isRepoExportForMultipleExercises;isAtLeastInstructor=!1;faCircleNotch=q;ngOnInit(){this.isLoading=!0,this.exportInProgress=!1,this.isRepoExportForMultipleExercises=this.programmingExercises.length>1,this.isAtLeastInstructor=this.programmingExercises.every(t=>t.isAtLeastInstructor),this.isLoading=!1,this.repositoryExportOptions={exportAllParticipants:this.isRepoExportForMultipleExercises,filterLateSubmissions:!1,excludePracticeSubmissions:!1,combineStudentCommits:!0,anonymizeRepository:!this.isAtLeastInstructor,addParticipantName:this.isAtLeastInstructor,normalizeCodeStyle:!1}}clear(){this.activeModal.dismiss("cancel")}exportRepos(){this.programmingExercises.forEach(t=>{if(!t.id)return;if(this.exportInProgress=!0,this.participationIdList?.length){this.repoExportService.exportReposByParticipations(t.id,this.participationIdList,this.repositoryExportOptions).subscribe({next:this.handleExportRepoResponseSuccess,error:()=>this.handleExportRepoResponseError(t.id)}).add(()=>this.activeModal.dismiss(!0));return}let s=this.repositoryExportOptions.exportAllParticipants?["ALL"]:this.participantIdentifierList.split(",").map(n=>n.trim());this.repoExportService.exportReposByParticipantIdentifiers(t.id,s,this.repositoryExportOptions).subscribe({next:this.handleExportRepoResponseSuccess,error:()=>this.handleExportRepoResponseError(t.id)}).add(()=>this.activeModal.dismiss(!0))})}handleExportRepoResponseError=t=>{this.alertService.warning("artemisApp.programmingExercise.export.notFoundMessageRepos",{exerciseId:t}),this.exportInProgress=!1};handleExportRepoResponseSuccess=t=>{this.alertService.success("artemisApp.programmingExercise.export.successMessageRepos"),this.exportInProgress=!1,ee(t)};static \u0275fac=function(s){return new(s||i)};static \u0275cmp=b({type:i,selectors:[["jhi-exercise-scores-repo-export-dialog"]],inputs:{programmingExercises:"programmingExercises",participationIdList:"participationIdList",participantIdentifierList:"participantIdentifierList",singleParticipantMode:"singleParticipantMode"},decls:2,vars:1,consts:[["exportForm","ngForm"],["name","exportForm","role","form",3,"ngSubmit"],[1,"modal-header"],["jhiTranslate","entity.exportRepos.title",1,"modal-title"],["type","button","data-dismiss","modal",1,"btn-close",3,"click"],[1,"modal-body"],[1,"checkbox"],[1,"control-label"],["type","checkbox","name","combineStudentCommits",1,"form-check-input",3,"ngModelChange","ngModel"],["jhiTranslate","artemisApp.programmingExercise.export.combineStudentCommits.title"],["text","artemisApp.programmingExercise.export.combineStudentCommits.tooltip"],["type","checkbox","name","normalizeCodeStyle",1,"form-check-input",3,"ngModelChange","ngModel"],["jhiTranslate","artemisApp.programmingExercise.export.normalizeCodeStyle.title"],["text","artemisApp.programmingExercise.export.normalizeCodeStyle.tooltip"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],[1,"glyphicon","glyphicon-ban-circle"],["jhiTranslate","entity.action.cancel"],["type","submit",1,"btn","btn-default",3,"jhiFeatureToggle","overwriteDisabled"],[1,"glyphicon","glyphicon-download-alt"],["jhiTranslate","entity.action.export"],[1,"table-responsive","m-2","p-1"],["jhiTranslate","artemisApp.instructorDashboard.exportRepos.currentlySelected",2,"font-weight","bold"],[1,"table","table-striped"],[3,"jhiTranslate","translateValues"],["name","studentIds","required","",1,"export-textarea",3,"ngModelChange","ngModel","disabled"],["type","checkbox","name","allStudents",1,"form-check-input",3,"ngModelChange","ngModel"],[3,"jhiTranslate"],["type","checkbox","name","filterLateSubmissions",1,"form-check-input",3,"ngModelChange","ngModel"],["jhiTranslate","artemisApp.programmingExercise.export.filterLateSubmissions.title"],["text","artemisApp.programmingExercise.export.filterLateSubmissions.tooltip"],[1,"form-group"],["jhiTranslate","artemisApp.programmingExercise.export.filterLateSubmissionsDate.title"],["text","artemisApp.programmingExercise.export.filterLateSubmissionsDate.tooltip"],["name","filterLateSubmissionsDate",3,"ngModelChange","ngModel","disabled","shouldDisplayTimeZoneWarning"],["type","checkbox","name","excludePracticeSubmissions",1,"form-check-input",3,"ngModelChange","ngModel"],["jhiTranslate","artemisApp.programmingExercise.export.excludePracticeSubmissions.title"],["text","artemisApp.programmingExercise.export.excludePracticeSubmissions.tooltip"],["type","checkbox","name","addParticipantName",1,"form-check-input",3,"ngModelChange","ngModel"],["text","artemisApp.programmingExercise.export.addToProject.tooltip"],["type","checkbox","name","anonymizeRepository",1,"form-check-input",3,"ngModelChange","ngModel","disabled"],["jhiTranslate","artemisApp.programmingExercise.export.anonymizeRepository.title"],["text","artemisApp.programmingExercise.export.anonymizeRepository.tooltip"],[1,"alert","alert-warning","mt-3"],["jhiTranslate","artemisApp.instructorDashboard.exportRepos.timeWarning"],[1,"me-1"],["animation","spin",3,"icon"],[1,"d-flex","justify-content-center","mt-4","mb-4"]],template:function(s,n){s&1&&h(0,fe,66,14)(1,he,6,1),s&2&&d(n.isLoading?1:0)},dependencies:[B,k,I,D,j,O,W,F,V,Y,$,X,J,H],styles:["textarea[_ngcontent-%COMP%]{width:100%}"]})}return i})();var ye=(i,c)=>[i,c],Ke=(()=>{class i{modalService=y(N);ButtonType=K;ButtonSize=Q;FeatureToggle=M;participationIdList;participantIdentifierList;singleParticipantMode=!1;programmingExercises;buttonPressed=new R;faDownload=Z;openRepoExportDialog(t){this.buttonPressed.emit(),t.stopPropagation();let s=this.modalService.open(ie,{keyboard:!0,size:"lg"});s.componentInstance.programmingExercises=this.programmingExercises,s.componentInstance.participationIdList=this.participationIdList,s.componentInstance.participantIdentifierList=this.participantIdentifierList,s.componentInstance.singleParticipantMode=this.singleParticipantMode}static \u0275fac=function(s){return new(s||i)};static \u0275cmp=b({type:i,selectors:[["jhi-programming-assessment-repo-export"]],inputs:{participationIdList:"participationIdList",participantIdentifierList:"participantIdentifierList",singleParticipantMode:"singleParticipantMode",programmingExercises:"programmingExercises"},outputs:{buttonPressed:"buttonPressed"},decls:3,vars:10,consts:[[3,"onClick","disabled","btnType","btnSize","shouldSubmit","featureToggle","icon","title"]],template:function(s,n){s&1&&(e(0,`
        `),o(1,"jhi-button",0),S("onClick",function(ne){return n.openRepoExportDialog(ne)}),r(),e(2,`
    `)),s&2&&(a(),u("disabled",!n.programmingExercises)("btnType",n.ButtonType.INFO)("btnSize",n.ButtonSize.SMALL)("shouldSubmit",!1)("featureToggle",P(7,ye,n.FeatureToggle.ProgrammingExercises,n.FeatureToggle.Exports))("icon",n.faDownload)("title",n.singleParticipantMode?"artemisApp.instructorDashboard.exportRepos.titleSingle":"artemisApp.instructorDashboard.exportRepos.title"))},dependencies:[U],encapsulation:2})}return i})();export{Ke as a};
//# sourceMappingURL=chunk-6U46KDQO.js.map
