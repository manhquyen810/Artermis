import{a as ce}from"./chunk-OTCBNILH.js";import{b as ue}from"./chunk-AR57MWOI.js";import{c as de}from"./chunk-5MVJAZRV.js";import{c as O}from"./chunk-JNO6DNVW.js";import{F as re}from"./chunk-VZRSC3LP.js";import{A as oe,B as ae,K as se,c as ee,h as te,m as ne,o as ie}from"./chunk-WA5GEAJB.js";import{a as V}from"./chunk-K3W6YFKH.js";import{c as pe}from"./chunk-JXJXC4DZ.js";import{d as me}from"./chunk-EDXSOKK5.js";import{p as U}from"./chunk-DID2YGL7.js";import{$ as le}from"./chunk-Z4VHWOB5.js";import{a as F}from"./chunk-U54OSGNH.js";import{t as Y}from"./chunk-IOA4DPXY.js";import{Ac as Q,Bc as W,Cd as M,Db as a,Dc as b,Dd as y,Ea as f,Fb as k,Id as I,La as w,Ma as _,Mc as x,Na as g,Oc as p,Rc as $,Tb as R,Va as E,Xc as q,Zb as c,Zc as z,_c as J,cd as K,dd as e,ed as X,fd as S,hd as A,kc as u,lc as N,oc as L,rc as H,rd as D,sc as m,sd as G,vc as P,wc as Z,xc as s,yc as r,yd as C,z as B,zc as h,zd as T}from"./chunk-5LC5EQRR.js";var j=function(n){return n.ACTIVE="ACTIVE",n.CANCELLED="CANCELLED",n}(j||{});var xe=["jhi-session-row",""],fe=(n,l)=>[n,"short-date",!1,l,!0],_e=n=>({$implicit:n});function ge(n,l){if(n&1&&(e(0,`
        `),s(1,"td"),e(2),r(),e(3,`
    `)),n&2){let t=p();a(2),X(t.session.id)}}function Se(n,l){if(n&1&&(e(0,`
                    `),h(1,"fa-icon",5),e(2,`
                `)),n&2){let t=p(2);a(),u("icon",t.faUmbrellaBeach)}}function Te(n,l){if(n&1&&(e(0,`
            `),s(1,"button",4),C(2,"artemisTranslate"),e(3,`
                `),c(4,Se,3,1),e(5),C(6,"artemisTranslate"),r(),e(7,`
        `)),n&2){let t=p();a(),u("disabled",!t.cancellationReason)("ngbPopover",t.cancellationReason?t.cancellationReason:"")("animation",!1)("popoverTitle",T(2,6,"artemisApp.entities.tutorialFreePeriod.reason")),a(3),m(t.overlapsWithFreePeriod?4:-1),a(),S(`
                `,T(6,8,"artemisApp.pages.tutorialGroupSessionManagement.cancelled"),`
            `)}}function ve(n,l){n&1&&(e(0,`
                        `),s(1,"span",9),e(2," "),r(),e(3,`
                    `))}function be(n,l){if(n&1){let t=b();e(0,`
            `),s(1,"div",6),e(2,`
                `),s(3,"input",7,0),x("ngModelChange",function(i){_(t);let d=p();return g(d.onAttendanceInput(i))}),r(),e(5,`
                `),s(6,"button",8),x("click",function(){_(t);let i=p();return g(i.saveAttendanceCount())}),e(7,`
                    `),c(8,ve,4,0),e(9),C(10,"artemisTranslate"),r(),e(11,`
            `),r(),e(12,`
        `)}if(n&2){let t=K(4),o=p();a(3),u("ngModel",o.session.attendanceCount)("readOnly",o.isUpdatingAttendance),a(3),N("visibility",o.attendanceDiffersFromPersistedValue&&t.valid?"visible":"hidden"),u("disabled",o.isUpdatingAttendance),a(2),m(o.isUpdatingAttendance?8:-1),a(),S(`
                    `,T(10,7,o.isUpdatingAttendance?"entity.action.saving":"entity.action.save"),`
                `)}}function Ge(n,l){if(n&1&&e(0),n&2){let t,o=p();S(`
            `,(t=o.session.attendanceCount)!==null&&t!==void 0?t:"",`
        `)}}function ye(n,l){n&1&&(e(0,`
                `),h(1,"div",10),e(2,`
            `))}function we(n,l){if(n&1&&(e(0,`
        `),s(1,"td"),e(2,`
            `),c(3,ye,3,0),r(),e(4,`
    `)),n&2){let t=p();a(3),m(t.hasSchedule?-1:3)}}function Ee(n,l){}function Re(n,l){if(n&1&&(e(0,`
        `),s(1,"td"),e(2,`
            `),s(3,"div",11),e(4,`
                `),c(5,Ee,0,0,"ng-template",12),e(6,`
            `),r(),e(7,`
        `),r(),e(8,`
    `)),n&2){let t=p();a(5),u("ngTemplateOutlet",t.extraColumn)("ngTemplateOutletContext",D(2,_e,t.session))}}var Ce=(()=>{class n{changeDetectorRef=f(I);tutorialGroupSessionService=f(ue);alertService=f(pe);class="tutorial-group-session-row";showIdColumn=!1;extraColumn;session;tutorialGroup;timeZone=void 0;isReadOnly=!1;attendanceChanged=new E;persistedAttendanceCount=void 0;attendanceDiffersFromPersistedValue=!1;isUpdatingAttendance=!1;cancellationReason;isCancelled=!1;overlapsWithFreePeriod=!1;faUmbrellaBeach=le;hasSchedule=!1;ngOnChanges(){this.session&&(this.isCancelled=this.session.status===j.CANCELLED,this.hasSchedule=!!this.session.tutorialGroupSchedule,this.overlapsWithFreePeriod=!!this.session.tutorialGroupFreePeriod,this.isCancelled&&(this.overlapsWithFreePeriod?this.cancellationReason=this.session.tutorialGroupFreePeriod?.reason?this.session.tutorialGroupFreePeriod.reason:void 0:this.cancellationReason=this.session.statusExplanation?this.session.statusExplanation:void 0),this.persistedAttendanceCount=this.session.attendanceCount,this.attendanceDiffersFromPersistedValue=!1,this.changeDetectorRef.detectChanges())}onAttendanceInput(t){this.session.attendanceCount=t===null?void 0:t,this.attendanceDiffersFromPersistedValue=this.persistedAttendanceCount!==this.session.attendanceCount}saveAttendanceCount(){this.isUpdatingAttendance=!0,this.tutorialGroupSessionService.updateAttendanceCount(this.tutorialGroup.course.id,this.tutorialGroup.id,this.session.id,this.session.attendanceCount).pipe(B(t=>t.body)).subscribe({next:t=>{this.session=t,this.persistedAttendanceCount=this.session.attendanceCount,this.attendanceDiffersFromPersistedValue=!1,this.attendanceChanged.emit(this.session)},error:t=>{de(this.alertService,t),this.session.attendanceCount=this.persistedAttendanceCount,this.attendanceDiffersFromPersistedValue=!1}}).add(()=>{this.isUpdatingAttendance=!1,this.changeDetectorRef.detectChanges()})}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=R({type:n,selectors:[["","jhi-session-row",""]],hostVars:2,hostBindings:function(o,i){o&2&&L(i.class)},inputs:{showIdColumn:"showIdColumn",extraColumn:"extraColumn",session:"session",tutorialGroup:"tutorialGroup",timeZone:"timeZone",isReadOnly:"isReadOnly"},outputs:{attendanceChanged:"attendanceChanged"},features:[w],attrs:xe,decls:30,vars:31,consts:[["attendance","ngModel"],["type","button","placement","top",1,"btn","btn-outline-info",3,"ngbPopover","animation","autoClose"],[1,"d-inline-block","text-truncate",2,"max-width","150px"],[1,"attendance-column"],["type","button","placement","top",1,"btn","btn-outline-danger","ms-2",3,"disabled","ngbPopover","animation","popoverTitle"],[3,"icon"],[1,"input-group"],["type","number","name","attendance","min","0","max","3000","aria-labelledby","attendanceHeader",1,"form-control","attendance-input",3,"ngModelChange","ngModel","readOnly"],["type","button",1,"btn","btn-outline-secondary",3,"click","disabled"],[1,"spinner-border","spinner-border-sm"],["role","alert","jhiTranslate","artemisApp.pages.tutorialGroupSessionManagement.differsFromSchedule",1,"alert","alert-info"],[1,"extra-buttons"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){o&1&&(Q(0),e(1,`
    `),c(2,ge,4,1),s(3,"td"),e(4,`
        `),s(5,"span"),e(6),C(7,"artemisDate"),C(8,"artemisDate"),C(9,"artemisDate"),r(),e(10,`
        `),c(11,Te,8,10),r(),e(12,`
    `),s(13,"td"),e(14,`
        `),s(15,"button",1),e(16,`
            `),s(17,"span",2),e(18),r(),e(19,`
        `),r(),e(20,`
    `),r(),e(21,`
    `),s(22,"td",3),e(23,`
        `),c(24,be,13,9)(25,Ge,1,1),r(),e(26,`
    `),c(27,we,5,1)(28,Re,9,4),W(),e(29,`
`)),o&2&&(a(2),m(i.showIdColumn?2:-1),a(4),A(`
            `,y(7,12,G(28,fe,i.session.start,i.timeZone)),`
            `,M(8,18,i.session.start,"time",!1,i.timeZone),` -
            `,M(9,23,i.session.end,"time",!1,i.timeZone),`
        `),a(5),m(i.isCancelled?11:-1),a(4),u("ngbPopover",i.session.location)("animation",!1)("autoClose","outside"),a(3),S(`
                `,i.session.location,`
            `),a(6),m(i.isReadOnly?25:24),a(3),m(i.tutorialGroup.tutorialGroupSchedule?27:-1),a(),m(i.extraColumn?28:-1))},dependencies:[re,me,se,ee,ie,te,ae,oe,ne,F,Y,O,V],styles:[`.tutorial-group-session-row .extra-buttons{visibility:hidden}.tutorial-group-session-row:hover .extra-buttons{visibility:visible}.tutorial-group-session-row .attendance-input{background-color:var(--bs-table-bg);width:50px}
`],encapsulation:2,changeDetection:0})}return n})();var Ae=n=>({timeZone:n}),De=(n,l)=>[n,"long-date",!1,l,!0],Ie=(n,l)=>[n,"time",!1,l,!1];function Ve(n,l){n&1&&(e(0,`
                    `),h(1,"th",12),e(2,`
                `))}function Fe(n,l){n&1&&(e(0,`
                    `),h(1,"th",13),e(2,`
                `))}function Oe(n,l){n&1&&(e(0,`
                    `),h(1,"th"),e(2,`
                `))}function Pe(n,l){if(n&1){let t=b();e(0,`
                `),s(1,"tr",14),x("attendanceChanged",function(i){_(t);let d=p();return g(d.onAttendanceChanged(i))}),r(),e(2,`
            `)}if(n&2){let t=p();a(),u("extraColumn",t.extraColumn)("session",t.nextSession)("tutorialGroup",t.tutorialGroup)("timeZone",t.timeZone)("showIdColumn",t.showIdColumn)("isReadOnly",t.isReadOnly)}}function Ze(n,l){if(n&1){let t=b();e(0,`
                `),s(1,"tr",15),x("attendanceChanged",function(i){_(t);let d=p();return g(d.onAttendanceChanged(i))}),r(),e(2,`
            `)}if(n&2){let t=l.$implicit,o=p();a(),u("hidden",o.isCollapsed)("extraColumn",o.extraColumn)("session",t)("timeZone",o.timeZone)("tutorialGroup",o.tutorialGroup)("showIdColumn",o.showIdColumn)("isReadOnly",o.isReadOnly)}}function Me(n,l){if(n&1){let t=b();e(0,`
                    `),s(1,"tr",16),x("attendanceChanged",function(i){_(t);let d=p(2);return g(d.onAttendanceChanged(i))}),r(),e(2,`
                `)}if(n&2){let t=l.$implicit,o=p(2);a(),u("hidden",o.isCollapsed)("extraColumn",o.extraColumn)("session",t)("tutorialGroup",o.tutorialGroup)("timeZone",o.timeZone)("showIdColumn",o.showIdColumn)("isReadOnly",o.isReadOnly)}}function Ue(n,l){if(n&1&&(e(0,`
                `),P(1,Me,3,7,null,null,H().trackSession,!0)),n&2){let t=p();a(),Z(t.pastSessions)}}var Et=(()=>{class n{sortService=f(ce);changeDetectorRef=f(I);extraColumn;tutorialGroup;sessions=[];timeZone=void 0;timeZoneUsedForDisplay=U.tz.guess();showIdColumn=!1;isReadOnly=!1;attendanceUpdated=new E;upcomingSessions=[];pastSessions=[];nextSession=void 0;isCollapsed=!0;get numberOfColumns(){let t=this.tutorialGroup.tutorialGroupSchedule?4:3;return this.extraColumn&&t++,this.showIdColumn&&t++,t}ngOnChanges(t){for(let o in t)if(t.hasOwnProperty(o)){let i=t[o];switch(o){case"sessions":{i.currentValue&&this.splitIntoUpcomingAndPastSessions(this.sortService.sortByProperty(i.currentValue,"start",!1));break}case"timeZone":{i.currentValue&&(this.timeZoneUsedForDisplay=i.currentValue,this.changeDetectorRef.detectChanges());break}case"tutorialGroup":{i.currentValue&&(this.nextSession=i.currentValue.nextSession,this.changeDetectorRef.detectChanges());break}}}}getCurrentDate(){return U()}trackSession(t,o){return`${o.id}`}splitIntoUpcomingAndPastSessions(t){let o=[],i=[],d=this.getCurrentDate();for(let v of t)v.end.isBefore(d)?i.push(v):o.push(v);this.upcomingSessions=o,this.pastSessions=i,this.changeDetectorRef.detectChanges()}onAttendanceChanged(t){if(t.id===this.nextSession?.id){this.nextSession=t;let o=this.upcomingSessions.findIndex(d=>d.id===t.id);o!==-1&&(this.upcomingSessions[o]=t);let i=this.pastSessions.findIndex(d=>d.id===t.id);i!==-1&&(this.pastSessions[i]=t),this.changeDetectorRef.detectChanges()}this.attendanceUpdated.emit()}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=R({type:n,selectors:[["jhi-tutorial-group-sessions-table"]],contentQueries:function(o,i,d){if(o&1&&q(d,k,7),o&2){let v;z(v=J())&&(i.extraColumn=v.first)}},inputs:{tutorialGroup:"tutorialGroup",sessions:"sessions",timeZone:"timeZone",showIdColumn:"showIdColumn",isReadOnly:"isReadOnly"},outputs:{attendanceUpdated:"attendanceUpdated"},features:[w],decls:64,vars:38,consts:[[1,"table-responsive","session-table"],[1,"col-12","mb-2"],["jhiTranslate","artemisApp.pages.tutorialGroupSessionManagement.timeZoneExplanation",1,"alert","alert-info",3,"translateValues"],[1,"table","table-sm"],["jhiTranslate","artemisApp.entities.tutorialGroupSession.date"],[3,"jhiTranslate"],["id","attendanceHeader","jhiTranslate","artemisApp.entities.tutorialGroupSession.attendance",1,"attendance-column"],[1,"table-dark","text-center"],[3,"colSpan"],[1,"text-center"],["type","button","jhiTranslate","artemisApp.pages.tutorialGroupSessionManagement.showAll",1,"btn","btn-sm","btn-outline-secondary",3,"click"],[3,"hidden"],["jhiTranslate","global.field.id"],["jhiTranslate","artemisApp.pages.tutorialGroupSessionManagement.columns.notes"],["jhi-session-row","",3,"attendanceChanged","extraColumn","session","tutorialGroup","timeZone","showIdColumn","isReadOnly"],["jhi-session-row","",3,"attendanceChanged","hidden","extraColumn","session","timeZone","tutorialGroup","showIdColumn","isReadOnly"],["jhi-session-row","",3,"attendanceChanged","hidden","extraColumn","session","tutorialGroup","timeZone","showIdColumn","isReadOnly"]],template:function(o,i){o&1&&(s(0,"div",0),e(1,`
    `),s(2,"div",1),e(3,`
        `),h(4,"div",2),e(5,`
    `),r(),e(6,`
    `),s(7,"table",3),e(8,`
        `),s(9,"thead"),e(10,`
            `),s(11,"tr"),e(12,`
                `),c(13,Ve,3,0),h(14,"th",4),e(15,`
                `),s(16,"th"),e(17,`
                    `),h(18,"span",5),e(19,`
                `),r(),e(20,`
                `),h(21,"th",6),e(22,`
                `),c(23,Fe,3,0)(24,Oe,3,0),r(),e(25,`
        `),r(),e(26,`
        `),s(27,"tbody"),e(28,`
            `),e(29,`
            `),c(30,Pe,3,6),s(31,"tr",7),e(32,`
                `),s(33,"td",8),e(34),C(35,"artemisTranslate"),s(36,"div",9),e(37,`
                        `),s(38,"button",10),x("click",function(){return i.isCollapsed=!i.isCollapsed}),r(),e(39,`
                    `),r(),e(40,`
                `),r(),e(41,`
            `),r(),e(42,`
            `),P(43,Ze,3,7,null,null,i.trackSession,!0),s(45,"tr",11),e(46,`
                `),s(47,"td",8),e(48,`
                    `),s(49,"div",9),e(50,`
                        `),s(51,"h4"),e(52),C(53,"artemisTranslate"),C(54,"artemisDate"),C(55,"artemisDate"),r(),e(56,`
                    `),r(),e(57,`
                `),r(),e(58,`
            `),r(),e(59,`
            `),c(60,Ue,3,0),r(),e(61,`
    `),r(),e(62,`
`),r(),e(63,`
`)),o&2&&(a(4),u("translateValues",D(30,Ae,i.timeZoneUsedForDisplay)),a(9),m(i.showIdColumn?13:-1),a(5),$("jhiTranslate",i.tutorialGroup.isOnline?"artemisApp.forms.scheduleForm.locationInput.labelOnline":"artemisApp.forms.scheduleForm.locationInput.labelOffline"),a(5),m(i.tutorialGroup.tutorialGroupSchedule?23:-1),a(),m(i.extraColumn?24:-1),a(6),m(i.nextSession?30:-1),a(3),u("colSpan",i.numberOfColumns),a(),S(`
                    `,T(35,14,"artemisApp.pages.tutorialGroupSessionManagement.divider"),`
                    `),a(9),Z(i.upcomingSessions),a(2),u("hidden",i.isCollapsed),a(2),u("colSpan",i.numberOfColumns),a(5),A(`
                            `,T(53,16,"artemisApp.pages.tutorialGroupSessionManagement.currentDate"),`
                            `,y(54,18,G(32,De,i.getCurrentDate(),i.timeZoneUsedForDisplay)),`
                            `,y(55,24,G(35,Ie,i.getCurrentDate(),i.timeZoneUsedForDisplay)),`
                        `),a(8),m(i.pastSessions&&i.pastSessions.length>0?60:-1))},dependencies:[F,Ce,O,V],styles:[`.session-table .attendance-column{width:200px}
`],encapsulation:2,changeDetection:0})}return n})();export{j as a,Et as b};
//# sourceMappingURL=chunk-7YN5BABD.js.map
