import{a as gt}from"./chunk-A3NV42OL.js";import{c as Tt,d as bt}from"./chunk-22GL4PFU.js";import{a as q}from"./chunk-MNX6OTP5.js";import"./chunk-LTHMYHP7.js";import"./chunk-U4DJRHYQ.js";import"./chunk-MBS3WUDO.js";import{e as ut,f as ft}from"./chunk-DXTZ4GAW.js";import{a as G}from"./chunk-G4HSJ7ME.js";import{c as O,d as H,e as N,f as U,g as R}from"./chunk-F3NFBBHK.js";import"./chunk-OTCBNILH.js";import"./chunk-T624HJJL.js";import"./chunk-HQTS6JOY.js";import"./chunk-HMZID6NQ.js";import{b as _t}from"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import"./chunk-2QXIMOEO.js";import"./chunk-ZPITQMA6.js";import{b as xt}from"./chunk-DRMCDU75.js";import"./chunk-AR57MWOI.js";import"./chunk-A5PTZAPN.js";import"./chunk-AU6UEH3U.js";import"./chunk-FGAONQTL.js";import"./chunk-HQ6UGNQX.js";import"./chunk-ZLJ76G5I.js";import"./chunk-MLVGKM2P.js";import{c as V}from"./chunk-CK7FH6VF.js";import{b as D,e as ct}from"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import{c as dt}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import{a as pt}from"./chunk-PZ7IDTIM.js";import{c as B}from"./chunk-JNO6DNVW.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import{K as I}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import"./chunk-WA5GEAJB.js";import{b as F}from"./chunk-5GXY5RYT.js";import{a as j}from"./chunk-K3W6YFKH.js";import{c as W}from"./chunk-JXJXC4DZ.js";import{d as z}from"./chunk-EDXSOKK5.js";import{b as k}from"./chunk-R5BZWVRQ.js";import{p as rt}from"./chunk-DID2YGL7.js";import{c as J}from"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{H as mt,oa as st}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as M}from"./chunk-U54OSGNH.js";import{f as lt,h as L,i as P}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Ad as y,Db as a,Dc as b,Ea as h,Ma as f,Mc as g,Na as T,Oc as s,Rc as w,Tb as A,Zb as p,dd as e,ed as v,fd as x,gd as et,kc as c,mc as tt,qd as it,rd as E,sc as _,sd as nt,td as at,ud as ot,xb as $,xc as r,yc as l,yd as u,zc as d,zd as C}from"./chunk-5LC5EQRR.js";import{a as Q,b as X,j as Z}from"./chunk-3E746U5Y.js";var wt=(i,o)=>["/courses",i,"exercises",o],St=(i,o,t)=>["/courses",i,"exercises",o,"teams",t],Et=(i,o,t,n)=>["/course-management",i,o,t,"participations",n,"submissions"];function yt(i,o){if(i&1&&(e(0,`
    `),d(1,"jhi-assessment-warning",1),e(2,`
`)),i&2){let t=s();a(),c("exercise",t.exercise)("submissions",t.submissions)}}function Dt(i,o){if(i&1){let t=b();e(0,`
                    `),r(1,"span",11),g("click",function(){f(t);let m=s().controls;return T(m.onSort("title"))}),e(2,`
                        `),d(3,"span",12),e(4,`
                        `),d(5,"fa-icon",13),e(6,`
                    `),l(),e(7,`
                `)}if(i&2){let t=s().controls;a(5),c("icon",t.iconForSortPropField("title"))}}function At(i,o){if(i&1&&(e(0,`
                    `),r(1,"a",14),e(2),l(),e(3,`
                `)),i&2){let t=o.row,n=s(2);a(),c("routerLink",nt(2,wt,n.course.id,t.id)),a(),x(`
                        `,t.title,`
                    `)}}function Lt(i,o){if(i&1){let t=b();e(0,`
                    `),r(1,"span",11),g("click",function(){f(t);let m=s().controls;return T(m.onSort("releaseDate"))}),e(2,`
                        `),d(3,"span",15),e(4,`
                        `),d(5,"fa-icon",13),e(6,`
                    `),l(),e(7,`
                `)}if(i&2){let t=s().controls;a(5),c("icon",t.iconForSortPropField("releaseDate"))}}function Pt(i,o){if(i&1&&(e(0),u(1,"artemisDate"),u(2,"artemisTranslate")),i&2){let t=o.value,n=s(2);x(`
                    `,t?y(1,1,n.dayjs(t),"short-date"):C(2,4,"artemisApp.exercise.dateNotSet"),`
                `)}}function It(i,o){if(i&1){let t=b();e(0,`
                    `),r(1,"span",11),g("click",function(){f(t);let m=s().controls;return T(m.onSort("dueDate"))}),e(2,`
                        `),d(3,"span",16),e(4,`
                        `),d(5,"fa-icon",13),e(6,`
                    `),l(),e(7,`
                `)}if(i&2){let t=s().controls;a(5),c("icon",t.iconForSortPropField("individualDueDate"))}}function kt(i,o){if(i&1&&(e(0),u(1,"artemisDate"),u(2,"artemisTranslate")),i&2){let t=o.value,n=s(2);x(`
                    `,t?y(1,1,n.dayjs(t),"short-date"):C(2,4,"artemisApp.exercise.dateNotSet"),`
                `)}}function Ft(i,o){if(i&1){let t=b();e(0,`
                        `),r(1,"a",17),g("click",function(){f(t);let m=s(3);return T(m.onActivate())}),l(),e(2,`
                    `)}if(i&2){let t=s().row,n=s(2);a(),c("routerLink",at(1,St,n.course.id,t.id,t.team.id))}}function Wt(i,o){i&1&&(e(0,`
                        `),d(1,"span",18),e(2,`
                    `))}function Vt(i,o){if(i&1&&(e(0,`
                    `),p(1,Ft,3,5)(2,Wt,3,0)),i&2){let t=o.row,n=s(2);a(),_(n.exercise.id!==t.id?1:2)}}function jt(i,o){if(i&1){let t=b();e(0,`
                        `),r(1,"span",11),g("click",function(){f(t);let m=s(2).controls;return T(m.onSort("id"))}),e(2,`
                            `),d(3,"span",20),e(4,`
                            `),d(5,"fa-icon",13),e(6,`
                        `),l(),e(7,`
                    `)}if(i&2){let t=s(2).controls;a(5),c("icon",t.iconForSortPropField("id"))}}function zt(i,o){if(i&1&&(e(0,`
                                `),r(1,"div"),e(2,`
                                    `),r(3,"a",14),e(4),l(),e(5,`
                                `),l(),e(6,`
                            `)),i&2){let t=s(2).row,n=s(3);a(3),c("routerLink",ot(2,Et,n.course.id,t.type+"-exercises",t.id,t.participation.id)),a(),x(`
                                        `,t.participation.id,`
                                    `)}}function Mt(i,o){if(i&1&&e(0),i&2){let t=s(2).row;x(`
                                `,t.participation.id,`
                            `)}}function Bt(i,o){if(i&1&&(e(0,`
                            `),p(1,zt,7,7)(2,Mt,1,1)),i&2){let t=s(4);a(),_(t.exercise.isAtLeastInstructor?1:2)}}function Ot(i,o){i&1&&(e(0,`
                            `),r(1,"div",21),e(2,"\u2013"),l(),e(3,`
                        `))}function Ht(i,o){if(i&1&&(e(0,`
                        `),p(1,Bt,3,1)(2,Ot,4,0)),i&2){let t=o.row;a(),_(t.participation?1:2)}}function Nt(i,o){i&1&&(e(0,`
                `),r(1,"ngx-datatable-column",19),e(2,`
                    `),p(3,jt,8,1,"ng-template",4),e(4,`
                    `),p(5,Ht,3,1,"ng-template",5),e(6,`
                `),l(),e(7,`
            `)),i&2&&(a(),c("minWidth",150)("width",150)("maxWidth",150))}function Ut(i,o){if(i&1){let t=b();e(0,`
                    `),r(1,"span",11),g("click",function(){f(t);let m=s().controls;return T(m.onSort("participation.initializationDate"))}),e(2,`
                        `),d(3,"span",22),e(4,`
                        `),d(5,"fa-icon",13),e(6,`
                    `),l(),e(7,`
                `)}if(i&2){let t=s().controls;a(5),c("icon",t.iconForSortPropField("participation.initializationDate"))}}function Rt(i,o){if(i&1&&(e(0),u(1,"artemisDate")),i&2){let t=s().row;x(`
                        `,C(1,1,t.participation.initializationDate),`
                    `)}}function Gt(i,o){i&1&&(e(0),u(1,"artemisTranslate")),i&2&&x(`
                        `,C(1,1,"artemisApp.participation.initializationNotYetStarted"),`
                    `)}function qt(i,o){if(i&1&&(e(0,`
                    `),p(1,Rt,2,3)(2,Gt,2,3)),i&2){let t=o.row;a(),_(t.participation?1:2)}}function Yt(i,o){i&1&&(e(0,`
                        `),r(1,"span",24),e(2,`
                            `),d(3,"span",25),e(4,`
                        `),l(),e(5,`
                    `))}function Jt(i,o){if(i&1&&(e(0,`
                                `),d(1,"fa-icon",30),u(2,"artemisTranslate"),e(3,`
                            `)),i&2){let t=s(4);a(),w("ngbTooltip",C(2,2,"artemisApp.team.detail.participationsTable.complaintOrMoreFeedbackRequest")),c("icon",t.faFlag)}}function Kt(i,o){if(i&1&&(e(0,`
                        `),r(1,"div",26),e(2,`
                            `),r(3,"div",27),u(4,"artemisTranslate"),e(5,`
                                `),r(6,"a",28),d(7,"fa-icon",29),e(8),u(9,"artemisTranslate"),l(),e(10,`
                            `),l(),e(11,`
                            `),p(12,Jt,4,4),l(),e(13,`
                    `)),i&2){let t=o.row,n=s(3);a(3),w("ngbTooltip",C(4,9,"artemisApp.team.detail.participationsTable.columns.assessment.tooltip")),c("disableTooltip",!n.isAssessmentButtonDisabled(t,t.submission)),a(3),tt("disabled",n.isAssessmentButtonDisabled(t,t.submission)),c("routerLink",n.getAssessmentLink(t,t.participation,t.submission)),a(),c("icon",n.faFolderOpen)("fixedWidth",!0),a(),x(`
                                    `,C(9,11,"artemisApp.exerciseAssessmentDashboard."+n.assessmentAction(t.submission)+"Assessment"),""),a(4),_(!(t.submission==null||t.submission.result==null)&&t.submission.result.hasComplaint?12:-1)}}function Qt(i,o){i&1&&(e(0,`
                `),r(1,"ngx-datatable-column",23),e(2,`
                    `),p(3,Yt,6,0,"ng-template",4),e(4,`
                    `),p(5,Kt,14,13,"ng-template",5),e(6,`
                `),l(),e(7,`
            `)),i&2&&(a(),c("minWidth",200)("width",200))}function Xt(i,o){if(i&1&&(e(0,`
        `),r(1,"ngx-datatable",2),e(2,`
            `),r(3,"ngx-datatable-column",3),e(4,`
                `),p(5,Dt,8,1,"ng-template",4),e(6,`
                `),p(7,At,4,5,"ng-template",5),e(8,`
            `),l(),e(9,`
            `),r(10,"ngx-datatable-column",6),e(11,`
                `),p(12,Lt,8,1,"ng-template",4),e(13,`
                `),p(14,Pt,3,6,"ng-template",7),e(15,`
            `),l(),e(16,`
            `),r(17,"ngx-datatable-column",8),e(18,`
                `),p(19,It,8,1,"ng-template",4),e(20,`
                `),p(21,kt,3,6,"ng-template",7),e(22,`
            `),l(),e(23,`
            `),r(24,"ngx-datatable-column",9),e(25,`
                `),p(26,Vt,3,1,"ng-template",5),e(27,`
            `),l(),e(28,`
            `),p(29,Nt,8,3),r(30,"ngx-datatable-column",10),e(31,`
                `),p(32,Ut,8,1,"ng-template",4),e(33,`
                `),p(34,qt,3,1,"ng-template",5),e(35,`
            `),l(),e(36,`
            `),p(37,Qt,8,2),l(),e(38,`
    `)),i&2){let t=o.settings,n=s();a(),c("limit",t.limit)("sortType",t.sortType)("columnMode",t.columnMode)("headerHeight",t.headerHeight)("footerHeight",0)("rowHeight",t.rowHeight)("rows",t.rows)("rowClass",n.rowClass(n.exercise))("scrollbarH",t.scrollbarH),a(2),c("minWidth",180)("width",200)("maxWidth",240)("frozenLeft",!0),a(7),c("minWidth",160)("width",160)("maxWidth",160)("frozenLeft",!0),a(7),c("minWidth",160)("width",160)("maxWidth",160)("frozenLeft",!0),a(7),c("minWidth",120)("width",120)("maxWidth",120)("frozenLeft",!0),a(5),_(n.isAdmin?29:-1),a(),c("minWidth",190)("width",190)("maxWidth",190),a(7),_(n.isTeamOwner||n.exercise.isAtLeastInstructor?37:-1)}}var Zt="datatable-row-current-exercise",Y=function(i){return i.START="start",i.CONTINUE="continue",i.OPEN="open",i}(Y||{});var ht=(()=>{class i{teamService=h(q);alertService=h(W);router=h(L);accountService=h(k);ExerciseType=J;dayjs=rt;team;course;exercise;isAdmin=!1;isTeamOwner=!1;exercises=[];submissions=[];isLoading;faFolderOpen=st;faFlag=mt;ngOnInit(){this.loadAll()}loadAll(){this.isLoading=!0,this.teamService.findCourseWithExercisesAndParticipationsForTeam(this.course,this.team).subscribe({next:t=>{this.exercises=this.transformExercisesFromServer(t.body.exercises||[]).map(n=>X(Q({},n),{isAtLeastTutor:this.accountService.isAtLeastTutorInCourse(n.course),isAtLeastEditor:this.accountService.isAtLeastEditorInCourse(n.course),isAtLeastInstructor:this.accountService.isAtLeastInstructorInCourse(n.course)})),this.submissions=this.exercises.filter(n=>n.submission).map(n=>n.submission),this.isLoading=!1},error:t=>this.onError(t)})}transformExercisesFromServer(t){return V.convertExercisesDateFromServer(t).map(n=>{n.team=n.teams[0];let m=F(n,"studentParticipations[0]",void 0);return n.participation=m,n.individualDueDate=ft(n,n.participation),n.submission=F(n,"participation.submissions[0]",void 0),n.submission&&(n.submission.participation=m,ct(n.submission,F(n,"participation.results[0]",void 0)),n.submission.results&&(D(n.submission).participation=m)),n})}rowClass=t=>n=>t.id===n.id?Zt:"";openAssessmentEditor(t,n,m){return Z(this,null,function*(){let S=this.getAssessmentLink(t,n,m);yield this.router.navigate(S)})}getAssessmentLink(t,n,m){let S=m==="new"||m==null?"new":m.id;return xt(t.type,this.course.id,t.id,n?.id,S,void 0,void 0)}assessmentAction(t){return!t||!D(t)||t.submissionExerciseType==="programming"&&D(t).assessmentType===pt.AUTOMATIC?Y.START:D(t).completionDate?Y.OPEN:Y.CONTINUE}onActivate(){window.scroll(0,0)}isAssessmentButtonDisabled(t,n){return!n||!n.submitted?!0:t.dueDate?t.type===J.PROGRAMMING||!t.isAtLeastInstructor?!ut(t,n.participation):!t.isAtLeastInstructor:!1}onError(t){dt(this.alertService,t),this.isLoading=!1}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=A({type:i,selectors:[["jhi-team-participation-table"]],inputs:{team:"team",course:"course",exercise:"exercise",isAdmin:"isAdmin",isTeamOwner:"isTeamOwner"},decls:6,vars:5,consts:[[3,"isLoading","showPageSizeDropdown","showSearchField","allEntities"],[3,"exercise","submissions"],[1,"bootstrap",3,"limit","sortType","columnMode","headerHeight","footerHeight","rowHeight","rows","rowClass","scrollbarH"],["prop","title",3,"minWidth","width","maxWidth","frozenLeft"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["prop","releaseDate",3,"minWidth","width","maxWidth","frozenLeft"],["ngx-datatable-cell-template","",1,"me-5"],["prop","individualDueDate",3,"minWidth","width","maxWidth","frozenLeft"],[3,"minWidth","width","maxWidth","frozenLeft"],["prop","participation.initializationDate",3,"minWidth","width","maxWidth"],[1,"datatable-header-cell-wrapper",3,"click"],["jhiTranslate","artemisApp.exercise.exercise",1,"datatable-header-cell-label","bold","sortable"],[3,"icon"],[3,"routerLink"],["jhiTranslate","artemisApp.exercise.releaseDate",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.exercise.dueDate",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","entity.action.view",3,"click","routerLink"],["jhiTranslate","entity.action.view",1,"current-team"],["prop","participation",3,"minWidth","width","maxWidth"],["jhiTranslate","artemisApp.team.detail.participationsTable.columns.participationId.label",1,"datatable-header-cell-label","bold","sortable"],[1,"text-center"],["jhiTranslate","artemisApp.participation.initializationDate",1,"datatable-header-cell-label","bold","sortable"],[3,"minWidth","width"],[1,"datatable-header-cell-wrapper"],["jhiTranslate","artemisApp.team.detail.participationsTable.columns.assessment.label",1,"datatable-header-cell-label","bold"],[1,"d-flex","justify-content-start","align-items-center"],["placement","left auto",3,"ngbTooltip","disableTooltip"],[1,"btn","btn-warning","btn-sm",3,"routerLink"],[3,"icon","fixedWidth"],[1,"mx-3",3,"icon","ngbTooltip"]],template:function(n,m){n&1&&(p(0,yt,3,2),r(1,"jhi-data-table",0),e(2,`
    `),p(3,Xt,39,30,"ng-template"),e(4,`
`),l(),e(5,`
`)),n&2&&(_(m.exercise&&m.exercise.isAtLeastInstructor?0:-1),a(),c("isLoading",m.isLoading)("showPageSizeDropdown",!1)("showSearchField",!1)("allEntities",m.exercises))},dependencies:[gt,G,R,U,N,O,H,M,z,P,I,B,j],styles:[`.ngx-datatable.bootstrap .datatable-header .datatable-header-cell{border-bottom:none!important}.datatable-row-wrapper:last-child .datatable-body-row{border-bottom:1px solid var(--team-participation-table-last-row-border-bottom)}.datatable-row-left>.datatable-body-cell:last-child{position:relative;overflow:visible!important}.datatable-row-left>.datatable-body-cell:last-child:after{content:" ";position:absolute;width:5px;right:-5px;top:-1px;height:calc(100% + 1px);box-shadow:8px 0 12px -15px inset var(--team-participation-table-box-shadow-color)}.datatable-row-odd .datatable-row-left,.datatable-header-inner .datatable-row-left{background-color:var(--team-participation-table-header-inner-background)}.datatable-cell-space-left .datatable-header-cell-template-wrap,.datatable-cell-space-left .datatable-body-cell-label{padding-left:50px}.datatable-row-current-exercise{background-color:var(--team-participation-table-current-exercise-bg)!important}.datatable-row-current-exercise.datatable-row-even .datatable-row-left,.datatable-row-current-exercise.datatable-row-odd .datatable-row-left{background-color:var(--team-participation-table-current-exercise-bg)}.current-team{font-weight:700;color:var(--team-participation-table-current-exercise-text)}.btn[disabled]:hover{cursor:not-allowed}
`],encapsulation:2})}return i})();var $t=()=>[],K=i=>["/admin","user-management",i],te=i=>({courseTitle:i});function ee(i,o){if(i&1&&(e(0,`
                            `),r(1,"a",9),e(2),l(),e(3,`
                        `)),i&2){let t=s(2);a(),c("routerLink",E(2,K,t.team.owner==null?null:t.team.owner.login)),a(),v(t.team.owner==null?null:t.team.owner.name)}}function ie(i,o){if(i&1&&(e(0,`
                            `),r(1,"a",10),e(2),l(),e(3,`
                        `)),i&2){let t=s(2);a(),c("href","mailto:"+t.team.owner.email,$),a(),v(t.team.owner==null?null:t.team.owner.name)}}function ne(i,o){i&1&&(e(0,`
                            `),d(1,"span",11),e(2,`
                        `))}function ae(i,o){if(i&1&&(e(0,`
                            `),r(1,"a",9),e(2),l(),e(3,`
                        `)),i&2){let t=s(2);a(),c("routerLink",E(2,K,t.team.createdBy)),a(),x("(",t.team.createdBy,")")}}function oe(i,o){if(i&1&&(e(0,`
                                `),r(1,"a",9),e(2),l(),e(3,`
                            `)),i&2){let t=s(3);a(),c("routerLink",E(2,K,t.team.lastModifiedBy)),a(),x("(",t.team.lastModifiedBy,")")}}function re(i,o){if(i&1&&(e(0,`
                        `),r(1,"span",7),e(2,`
                            `),r(3,"span",6),e(4,"Last modified:"),l(),e(5,`
                            `),r(6,"span",12),u(7,"artemisDate"),e(8),l(),e(9,`
                            `),p(10,oe,4,4),l(),e(11,`
                    `)),i&2){let t=s(2);a(6),w("ngbTooltip",C(7,3,t.team.lastModifiedDate)),a(2),x(`
                                `,t.team.lastModifiedDate.fromNow(),`
                            `),a(2),_(t.isAdmin?10:-1)}}function le(i,o){if(i&1){let t=b();e(0,`
                        `),r(1,"jhi-team-update-button",14),g("save",function(m){f(t);let S=s(3);return T(S.onTeamUpdate(m))}),l(),e(2,`
                    `)}if(i&2){let t=s(3);a(),c("exercise",t.exercise)("team",t.team)("buttonSize",t.ButtonSize.MEDIUM)}}function me(i,o){if(i&1){let t=b();e(0,`
                        `),r(1,"jhi-team-delete-button",15),g("delete",function(){f(t);let m=s(3);return T(m.onTeamDelete())}),l(),e(2,`
                    `)}if(i&2){let t=s(3);a(),c("exercise",t.exercise)("team",t.team)("buttonSize",t.ButtonSize.MEDIUM)}}function se(i,o){if(i&1&&(e(0,`
                `),r(1,"div",13),e(2,`
                    `),p(3,le,3,3)(4,me,3,3),l(),e(5,`
            `)),i&2){let t=s(2);a(3),_(t.exercise.isAtLeastInstructor||(t.team.owner==null?null:t.team.owner.id)===t.currentUser.id?3:-1),a(),_(t.exercise.isAtLeastInstructor?4:-1)}}function pe(i,o){if(i&1&&(e(0,`
        `),r(1,"div",1),e(2,`
            `),r(3,"div",2),e(4,`
                `),r(5,"h2",3),e(6,`
                    `),r(7,"span"),e(8),l(),r(9,"code",4),e(10),l(),e(11,`
                `),l(),e(12,`
                `),r(13,"div"),e(14,`
                    `),r(15,"span",5),e(16,`
                        `),r(17,"span",6),e(18,"Tutor:"),l(),e(19,`
                        `),p(20,ee,4,4)(21,ie,4,2)(22,ne,3,0),l(),e(23,`
                    `),r(24,"span",7),e(25,`
                        `),r(26,"span",6),e(27,"Created:"),l(),e(28,`
                        `),r(29,"span",8),u(30,"artemisDate"),e(31),l(),e(32,`
                        `),p(33,ae,4,4),l(),e(34,`
                    `),p(35,re,12,5),l(),e(36,`
            `),l(),e(37,`
            `),p(38,se,6,2),l(),e(39,`
    `)),i&2){let t=s();a(8),et("",t.exercise.title," - ",t.team.name,""),a(2),v(t.team.shortName),a(10),_(t.isAdmin&&t.team.owner?20:-1),a(),_(!t.isAdmin&&t.team.owner?21:-1),a(),_(t.team.owner?-1:22),a(7),w("ngbTooltip",C(30,11,t.team.createdDate)),a(2),x(`
                            `,t.team.createdDate.fromNow(),`
                        `),a(2),_(t.isAdmin?33:-1),a(2),_(t.team.lastModifiedDate&&t.team.lastModifiedDate.isAfter(t.team.createdDate)?35:-1),a(3),_(t.exercise.isAtLeastTutor?38:-1)}}function ce(i,o){if(i&1){let t=b();e(0,`
                        `),r(1,"span",22),g("click",function(){f(t);let m=s().controls;return T(m.onSort("login"))}),e(2,`
                            `),d(3,"span",23),e(4,`
                            `),d(5,"fa-icon",24),e(6,`
                        `),l(),e(7,`
                    `)}if(i&2){let t=s().controls;a(5),c("icon",t.iconForSortPropField("login"))}}function de(i,o){if(i&1&&(e(0,`
                        `),r(1,"span"),e(2),l(),e(3,`
                    `)),i&2){let t=o.value;a(2),v(t)}}function _e(i,o){if(i&1){let t=b();e(0,`
                        `),r(1,"span",22),g("click",function(){f(t);let m=s().controls;return T(m.onSort("name"))}),e(2,`
                            `),d(3,"span",25),e(4,`
                            `),d(5,"fa-icon",24),e(6,`
                        `),l(),e(7,`
                    `)}if(i&2){let t=s().controls;a(5),c("icon",t.iconForSortPropField("name"))}}function xe(i,o){if(i&1&&(e(0,`
                        `),r(1,"span"),e(2),l(),e(3,`
                    `)),i&2){let t=o.value;a(2),v(t)}}function ue(i,o){if(i&1){let t=b();e(0,`
                        `),r(1,"span",22),g("click",function(){f(t);let m=s().controls;return T(m.onSort("email"))}),e(2,`
                            `),d(3,"span",26),e(4,`
                            `),d(5,"fa-icon",24),e(6,`
                        `),l(),e(7,`
                    `)}if(i&2){let t=s().controls;a(5),c("icon",t.iconForSortPropField("email"))}}function fe(i,o){if(i&1&&(e(0,`
                        `),r(1,"span"),e(2),l(),e(3,`
                    `)),i&2){let t=o.value;a(2),v(t)}}function Te(i,o){if(i&1&&(e(0,`
            `),r(1,"ngx-datatable",16),e(2,`
                `),r(3,"ngx-datatable-column",17),e(4,`
                    `),p(5,ce,8,1,"ng-template",18),e(6,`
                    `),p(7,de,4,1,"ng-template",19),e(8,`
                `),l(),e(9,`
                `),r(10,"ngx-datatable-column",20),e(11,`
                    `),p(12,_e,8,1,"ng-template",18),e(13,`
                    `),p(14,xe,4,1,"ng-template",19),e(15,`
                `),l(),e(16,`
                `),r(17,"ngx-datatable-column",21),e(18,`
                    `),p(19,ue,8,1,"ng-template",18),e(20,`
                    `),p(21,fe,4,1,"ng-template",19),e(22,`
                `),l(),e(23,`
            `),l(),e(24,`
        `)),i&2){let t=o.settings;a(),c("limit",t.limit)("sortType",t.sortType)("columnMode",t.columnMode)("headerHeight",t.headerHeight)("footerHeight",0)("rowHeight",t.rowHeight)("rows",t.rows)("rowClass",t.rowClass)("scrollbarH",t.scrollbarH),a(2),c("minWidth",150)("width",250)("maxWidth",250),a(7),c("minWidth",150)("width",250)("maxWidth",250),a(7),c("minWidth",150)("width",250)}}function be(i,o){if(i&1&&(e(0,`
        `),r(1,"h4",27),e(2),u(3,"artemisTranslate"),r(4,"code",4),e(5),l(),e(6,`
        `),l(),e(7,`
        `),d(8,"jhi-team-participation-table",28),e(9,`
    `)),i&2){let t=s();a(2),x(`
            `,y(3,7,"artemisApp.team.detail.participationsTable.title",E(10,te,t.exercise.course.title)),`
            `),a(3),v(t.team.shortName),a(3),c("team",t.team)("course",t.exercise.course)("exercise",t.exercise)("isAdmin",t.isAdmin)("isTeamOwner",t.isTeamOwner)}}var Ti=(()=>{class i{route=h(lt);alertService=h(W);exerciseService=h(V);teamService=h(q);accountService=h(k);router=h(L);ButtonSize=_t;team;exercise;isLoading;isTransitioning;currentUser;isAdmin=!1;isTeamOwner=!1;constructor(){this.accountService.identity().then(t=>{this.currentUser=t,this.isAdmin=this.accountService.isAdmin(),this.setTeamOwnerFlag()})}ngOnInit(){this.route.params.subscribe({next:t=>{this.setLoadingState(!0),this.exerciseService.find(t.exerciseId).subscribe({next:n=>{this.exercise=n.body,this.teamService.find(this.exercise,t.teamId).subscribe({next:m=>{this.team=m.body,this.setTeamOwnerFlag(),this.setLoadingState(!1)},error:this.onLoadError})},error:this.onLoadError})},error:this.onLoadError})}setTeamOwnerFlag(){this.currentUser&&this.team&&(this.isTeamOwner=this.currentUser.id===this.team.owner?.id)}setLoadingState(t){this.exercise&&this.team&&!this.isLoading?this.isTransitioning=t:this.isLoading=t}onLoadError(t){this.alertService.error(t.message),this.isLoading=!1}onTeamUpdate(t){this.team=t}onTeamDelete(){this.router.navigate(["/course-management",this.exercise.course?.id,"exercises",this.exercise.id,"teams"])}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=A({type:i,selectors:[["jhi-team"]],decls:10,vars:8,consts:[[3,"isLoading","isTransitioning","showPageSizeDropdown","showSearchField","allEntities"],[1,"d-flex"],[1,"mb-2"],[1,"d-flex","align-items-baseline","mb-2"],[1,"ms-2","team-short-name"],[1,"d-inline-block"],[1,"text-body-secondary","font-weight-bolder"],[1,"d-inline-block","ms-2"],["tooltipClass","date-tooltip",3,"ngbTooltip"],[3,"routerLink"],[3,"href"],["jhiTranslate","artemisApp.team.detail.noOwner",1,"font-weight-bold"],["position","top","tooltipClass","date-tooltip",3,"ngbTooltip"],[1,"d-flex","ms-auto"],[3,"save","exercise","team","buttonSize"],[1,"ms-1",3,"delete","exercise","team","buttonSize"],[1,"bootstrap",3,"limit","sortType","columnMode","headerHeight","footerHeight","rowHeight","rows","rowClass","scrollbarH"],["prop","login",3,"minWidth","width","maxWidth"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["prop","name",3,"minWidth","width","maxWidth"],["prop","email",3,"minWidth","width"],[1,"datatable-header-cell-wrapper",3,"click"],["jhiTranslate","artemisApp.team.detail.students.login",1,"datatable-header-cell-label","bold","sortable"],[3,"icon"],["jhiTranslate","artemisApp.team.detail.students.name",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.team.detail.students.email",1,"datatable-header-cell-label","bold","sortable"],[1,"mt-4","d-flex","align-items-baseline"],[3,"team","course","exercise","isAdmin","isTeamOwner"]],template:function(n,m){n&1&&(r(0,"div"),e(1,`
    `),p(2,pe,40,13),r(3,"jhi-data-table",0),e(4,`
        `),p(5,Te,25,17,"ng-template"),e(6,`
    `),l(),e(7,`
    `),p(8,be,10,12),l(),e(9,`
`)),n&2&&(a(2),_(m.exercise&&m.team?2:-1),a(),c("isLoading",m.isLoading)("isTransitioning",m.isTransitioning)("showPageSizeDropdown",!1)("showSearchField",!1)("allEntities",(m.team==null?null:m.team.students)||it(7,$t)),a(5),_(m.exercise&&m.team?8:-1))},dependencies:[P,M,I,Tt,bt,G,R,U,N,O,H,z,ht,B,j],styles:[`.date-tooltip{width:115px!important}.team-short-name{padding:.3rem .6rem 0;background:var(--team-short-name-background);border-radius:3px;font-size:100%;line-height:1.2;color:var(--team-short-name-color)}
`],encapsulation:2})}return i})();export{Ti as TeamComponent};
//# sourceMappingURL=team.component-OWRJGC5G.js.map
