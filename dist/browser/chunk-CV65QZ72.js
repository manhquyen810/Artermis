import{a as pe}from"./chunk-SLVT6IA5.js";import{u as T,v as ee}from"./chunk-VZRSC3LP.js";import{K as $,b as G,c as J,h as K,i as Q,k as X,m as Y,n as Z}from"./chunk-WA5GEAJB.js";import{n as ce,p as de}from"./chunk-VK7JPHFE.js";import{c as me}from"./chunk-BNDLMKXK.js";import{c as k}from"./chunk-JXJXC4DZ.js";import{d as w}from"./chunk-EDXSOKK5.js";import{j as le}from"./chunk-CXQURQM5.js";import{Oc as oe,Tb as re,Zc as se,fa as ne,sd as ae,y as ie}from"./chunk-Z4VHWOB5.js";import{a as te}from"./chunk-HKBU2OOC.js";import{a as M}from"./chunk-U54OSGNH.js";import{i as q}from"./chunk-M6Z6DKZQ.js";import{O as H}from"./chunk-IOA4DPXY.js";import{Db as a,Dc as E,Ea as x,Ib as j,Ma as u,Mc as _,Na as C,Oc as m,Tb as R,Vb as D,Zb as f,_a as V,cd as U,dd as e,ed as y,fd as I,gd as z,kc as p,lc as L,ld as h,md as v,nd as S,rd as P,sc as g,sd as b,tc as F,vc as N,wc as W,xc as n,ya as B,yc as r,zc as l}from"./chunk-5LC5EQRR.js";var xe=(()=>{class t{http=x(H);RESOURCE_URL="api/exercise/programming-exercises";checkConsistencyForProgrammingExercise(i){return this.http.get(`${this.RESOURCE_URL}/${i}/consistency-check`,{responseType:"json"})}static \u0275fac=function(o){return new(o||t)};static \u0275prov=B({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ce=(t,d)=>["/course-management",t,"programming-exercises",d];function _e(t,d){t&1&&(e(0,`
                `),n(1,"div",7),e(2,`
                    `),n(3,"div",8),e(4,`
                        `),l(5,"span",9),e(6,`
                    `),r(),e(7,`
                `),r(),e(8,`
            `))}function fe(t,d){if(t&1&&(e(0,`
                        `),n(1,"div"),e(2,`
                            `),n(3,"span",11),l(4,"fa-icon",12),r(),e(5,`
                            `),l(6,"br"),e(7,`
                            `),l(8,"span",13),e(9,`
                        `),r(),e(10,`
                    `)),t&2){let i=m(2);a(4),p("icon",i.faTimes)}}function Ee(t,d){if(t&1&&(e(0,`
                        `),n(1,"div"),e(2,`
                            `),n(3,"span",14),l(4,"fa-icon",12),r(),e(5,`
                            `),l(6,"br"),e(7,`
                            `),l(8,"span",15),e(9,`
                        `),r(),e(10,`
                    `)),t&2){let i=m(2);a(4),p("icon",i.faCheck)}}function he(t,d){if(t&1&&(e(0,`
                `),n(1,"div",10),e(2,`
                    `),f(3,fe,11,1)(4,Ee,11,1),r(),e(5,`
            `)),t&2){let i=m();a(3),g(i.inconsistencies!=null&&i.inconsistencies.length?3:4)}}function ve(t,d){if(t&1&&(e(0,`
                                            `),n(1,"span"),e(2),r(),e(3,`
                                        `)),t&2){let i=m().$implicit;a(2),y(i.programmingExercise.title)}}function Se(t,d){if(t&1&&(e(0,`
                                `),n(1,"tr"),e(2,`
                                    `),n(3,"td"),e(4,`
                                        `),n(5,"a",20),e(6,`
                                            `),n(7,"span"),e(8),r(),e(9,`
                                        `),r(),e(10,`
                                        `),f(11,ve,4,1),r(),e(12,`
                                    `),n(13,"td"),e(14,`
                                        `),l(15,"span",21),e(16,`
                                    `),r(),e(17,`
                                `),r(),e(18,`
                            `)),t&2){let i=d.$implicit;a(5),p("routerLink",b(4,Ce,i.programmingExerciseCourseId,i.programmingExercise.id)),a(3),y(i.programmingExercise.title),a(3),g(i.programmingExerciseCourseId===void 0?11:-1),a(4),p("jhiTranslate","artemisApp.consistencyCheck.error."+i.type)}}function ye(t,d){if(t&1&&(e(0,`
                `),n(1,"div",16),e(2,`
                    `),n(3,"table",17),e(4,`
                        `),n(5,"thead"),e(6,`
                            `),n(7,"tr"),e(8,`
                                `),n(9,"th"),l(10,"span",18),r(),e(11,`
                                `),n(12,"th"),l(13,"span",19),r(),e(14,`
                            `),r(),e(15,`
                        `),r(),e(16,`
                        `),n(17,"tbody"),e(18,`
                            `),N(19,Se,19,7,null,null,F),r(),e(21,`
                    `),r(),e(22,`
                `),r(),e(23,`
            `)),t&2){let i=m();a(19),W(i.inconsistencies)}}var Ye=(()=>{class t{activeModal=x(T);consistencyCheckService=x(xe);alertService=x(k);exercisesToCheck;inconsistencies=[];isLoading=!0;faTimes=oe;faCheck=ae;ngOnInit(){this.isLoading=!0;let i=this.exercisesToCheck.length;this.exercisesToCheck.forEach(o=>{let s=le(o);this.consistencyCheckService.checkConsistencyForProgrammingExercise(o.id).subscribe({next:c=>{this.inconsistencies=this.inconsistencies.concat(c),this.inconsistencies.map(A=>A.programmingExerciseCourseId=s||void 0),--i===0&&(this.isLoading=!1)},error:c=>{this.alertService.error(c),this.isLoading=!1}})})}closeModal(){this.activeModal.close()}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=R({type:t,selectors:[["jhi-consistency-check"]],inputs:{exercisesToCheck:"exercisesToCheck"},decls:25,vars:2,consts:[[1,"modal-header"],["jhiTranslate","artemisApp.consistencyCheck.title",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],[1,"justify-content-center","p-1"],["jhiTranslate","artemisApp.consistencyCheck.text"],["jhiTranslate","artemisApp.consistencyCheck.warning"],[1,"d-flex","justify-content-center","m-5"],["role","status",1,"spinner-border"],["jhiTranslate","loading",1,"sr-only"],[1,"mt-3","text-center"],[1,"h1","text-danger"],[3,"icon"],["jhiTranslate","artemisApp.consistencyCheck.inconsistenciesFound"],[1,"h1","text-success"],["jhiTranslate","artemisApp.consistencyCheck.noInconsistencies"],[1,"table-responsive","p-1","my-5"],[1,"table","table-striped"],["jhiTranslate","artemisApp.programmingExercise.detail.title"],["jhiTranslate","artemisApp.consistencyCheck.error.type"],[3,"routerLink"],[3,"jhiTranslate"]],template:function(o,s){o&1&&(n(0,"div"),e(1,`
    `),n(2,"div",0),e(3,`
        `),l(4,"h4",1),e(5,`
        `),n(6,"button",2),_("click",function(){return s.closeModal()}),r(),e(7,`
    `),r(),e(8,`
    `),n(9,"div",3),e(10,`
        `),n(11,"div",4),e(12,`
            `),l(13,"span",5),e(14,`
            `),l(15,"br"),e(16,`
            `),l(17,"small",6),e(18,`
            `),f(19,_e,9,0)(20,he,6,1)(21,ye,24,0),r(),e(22,`
    `),r(),e(23,`
`),r(),e(24,`
`)),o&2&&(a(19),g(s.isLoading?19:20),a(2),g(!s.isLoading&&(s.inconsistencies!=null&&s.inconsistencies.length)?21:-1))},dependencies:[M,w,q],encapsulation:2})}return t})();var ge=t=>({title:t}),Pe=t=>({ciPlatform:t}),Re=t=>({vcPlatform:t}),be=(t,d)=>({vcPlatform:t,ciPlatform:d});function Te(t,d){if(t&1){let i=E();e(0,`
                    `),n(1,"li"),e(2,`
                        `),n(3,"div",17),e(4,`
                            `),n(5,"label",18),e(6,`
                                `),n(7,"input",19),S("ngModelChange",function(s){u(i);let c=m(2);return v(c.programmingExerciseResetOptions.deleteBuildPlans,s)||(c.programmingExerciseResetOptions.deleteBuildPlans=s),C(s)}),_("ngModelChange",function(){u(i);let s=m(2);return C(s.programmingExerciseResetOptions.deleteRepositories=s.programmingExerciseResetOptions.deleteBuildPlans&&s.programmingExerciseResetOptions.deleteRepositories)}),r(),e(8,`
                                `),n(9,"span",20),e(10),r(),e(11,`
                            `),r(),e(12,`
                        `),r(),e(13,`
                    `),r(),e(14,`
                `)}if(t&2){let i=m(2);a(7),h("ngModel",i.programmingExerciseResetOptions.deleteBuildPlans),a(2),p("translateValues",P(3,Pe,i.continuousIntegrationName)),a(),I(`
                                    Delete student build plans (on `,i.continuousIntegrationName,`)
                                `)}}function ke(t,d){t&1&&(e(0,`
                    `),n(1,"div",21),e(2,`
                        `),l(3,"span",22),e(4,`
                    `),r(),e(5,`
                `))}function we(t,d){if(t&1){let i=E();e(0,`
                    `),n(1,"li"),e(2,`
                        `),n(3,"div",17),e(4,`
                            `),n(5,"label",18),e(6,`
                                `),n(7,"input",23),S("ngModelChange",function(s){u(i);let c=m(2);return v(c.programmingExerciseResetOptions.deleteRepositories,s)||(c.programmingExerciseResetOptions.deleteRepositories=s),C(s)}),_("ngModelChange",function(s){u(i);let c=m(2);return C(c.programmingExerciseResetOptions.deleteBuildPlans=!!s||c.programmingExerciseResetOptions.deleteBuildPlans)}),r(),e(8,`
                                `),n(9,"span",24),e(10),r(),e(11,`
                            `),r(),e(12,`
                        `),r(),e(13,`
                    `),r(),e(14,`
                `)}if(t&2){let i=m(2);a(7),h("ngModel",i.programmingExerciseResetOptions.deleteRepositories),a(2),p("translateValues",P(3,Re,i.versionControlName)),a(),I(`
                                    Delete student repositories (on `,i.versionControlName,`).
                                `)}}function Me(t,d){if(t&1){let i=E();e(0,`
                    `),n(1,"li"),e(2,`
                        `),n(3,"div",17),e(4,`
                            `),n(5,"label",18),e(6,`
                                `),n(7,"input",25),S("ngModelChange",function(s){u(i);let c=m(2);return v(c.programmingExerciseResetOptions.deleteParticipationsSubmissionsAndResults,s)||(c.programmingExerciseResetOptions.deleteParticipationsSubmissionsAndResults=s),C(s)}),r(),e(8,`
                                `),l(9,"span",26),e(10,`
                            `),r(),e(11,`
                        `),r(),e(12,`
                    `),r(),e(13,`
                `)}if(t&2){let i=m(2);a(7),h("ngModel",i.programmingExerciseResetOptions.deleteParticipationsSubmissionsAndResults)}}function Ae(t,d){if(t&1&&(e(0,`
                    `),n(1,"div",27),e(2,`
                        `),n(3,"span",28),e(4),r(),e(5,`
                    `),r(),e(6,`
                `)),t&2){let i=m(2);a(3),p("translateValues",b(3,be,i.versionControlName,i.continuousIntegrationName)),a(),z(`
                            Deleting student participations, submissions, and results without removing the associated repositories and build plans may lead to undeleted artifacts
                            on
                            `,i.versionControlName," and ",i.continuousIntegrationName,`. Please carefully review if this is the desired action before proceeding.
                        `)}}function Ie(t,d){if(t&1){let i=E();e(0,`
                    `),n(1,"li"),e(2,`
                        `),n(3,"div",17),e(4,`
                            `),n(5,"label",18),e(6,`
                                `),n(7,"input",29),S("ngModelChange",function(s){u(i);let c=m(2);return v(c.programmingExerciseResetOptions.recreateBuildPlans,s)||(c.programmingExerciseResetOptions.recreateBuildPlans=s),C(s)}),r(),e(8,`
                                `),l(9,"span",30),e(10,`
                            `),r(),e(11,`
                        `),r(),e(12,`
                    `),r(),e(13,`
                `)}if(t&2){let i=m(2);a(7),h("ngModel",i.programmingExerciseResetOptions.recreateBuildPlans),a(2),p("jhiTranslate",i.hasCustomizedBuildPlans?"artemisApp.programmingExercise.reset.recreateCustomizedBuildPlans":"artemisApp.programmingExercise.reset.recreateBuildPlans")}}function Oe(t,d){if(t&1&&(e(0,`
                        `),n(1,"span"),l(2,"fa-icon",31),e(3,"\xA0"),r(),e(4,`
                    `)),t&2){let i=m(2);a(2),p("icon",i.faSpinner)}}function Be(t,d){if(t&1){let i=E();e(0,`
    `),n(1,"form",1,0),_("ngSubmit",function(){u(i);let s=m();return C(s.resetProgrammingExercise())}),e(3,`
        `),n(4,"div",2),e(5,`
            `),l(6,"h4",3),e(7,`
            `),n(8,"button",4),_("click",function(){u(i);let s=m();return C(s.clear())}),r(),e(9,`
        `),r(),e(10,`
        `),n(11,"div",5),e(12,`
            `),n(13,"p",6),e(14,`
                Please select the operations you want to perform on `),n(15,"strong"),e(16),r(),e(17,`:
            `),r(),e(18,`
            `),n(19,"ul",7),e(20,`
                `),f(21,Te,15,5)(22,ke,6,0)(23,we,15,5)(24,Me,14,1)(25,Ae,7,6)(26,Ie,14,2),r(),e(27,`
            `),n(28,"div",8),e(29,`
                `),n(30,"label",9),e(31,`
                    Please type in the name to confirm
                `),r(),e(32,`
                `),n(33,"input",10),S("ngModelChange",function(s){u(i);let c=m();return v(c.confirmText,s)||(c.confirmText=s),C(s)}),r(),e(34,`
            `),r(),e(35,`
        `),r(),e(36,`
        `),n(37,"div",11),e(38,`
            `),n(39,"button",12),_("click",function(){u(i);let s=m();return C(s.clear())}),e(40,`
                `),l(41,"fa-icon",13),e(42,"\xA0"),l(43,"span",14),e(44,`
            `),r(),e(45,`
            `),n(46,"div"),e(47,`
                `),n(48,"button",15),e(49,`
                    `),f(50,Oe,5,1),l(51,"fa-icon",13),e(52,`\xA0
                    `),l(53,"span",16),e(54,`
                `),r(),e(55,`
            `),r(),e(56,`
        `),r(),e(57,`
    `),r(),e(58,`
`)}if(t&2){let i=U(2),o=m();a(13),p("jhiTranslate","artemisApp.programmingExercise.reset.pleaseSelectOperations")("translateValues",P(19,ge,o.programmingExercise.title)),a(3),y(o.programmingExercise.title),a(5),g(o.programmingExercise.isAtLeastInstructor?21:-1),a(),g(o.programmingExercise.isAtLeastInstructor&&o.programmingExerciseResetOptions.deleteBuildPlans&&!o.programmingExerciseResetOptions.deleteRepositories?22:-1),a(),g(o.programmingExercise.isAtLeastInstructor?23:-1),a(),g(o.programmingExercise.isAtLeastInstructor?24:-1),a(),g(o.programmingExercise.isAtLeastInstructor&&!o.programmingExerciseResetOptions.deleteRepositories&&o.programmingExerciseResetOptions.deleteParticipationsSubmissionsAndResults?25:-1),a(),g(o.programmingExercise.isAtLeastEditor?26:-1),a(4),p("jhiTranslate","artemisApp.programmingExercise.reset.question")("translateValues",P(21,ge,o.programmingExercise.title)),a(3),h("ngModel",o.confirmText),a(6),p("disabled",o.resetInProgress),a(2),p("icon",o.faBan),a(5),L("cursor",i.form.invalid||!o.canSubmit?"not-allowed":"pointer"),a(2),p("disabled",i.form.invalid||!o.canSubmit),a(2),g(o.resetInProgress?50:-1),a(),p("icon",o.faUndo)}}function Ve(t,d){if(t&1&&(e(0,`
    `),n(1,"div",32),e(2,`
        `),l(3,"fa-icon",31),e(4,`
    `),r(),e(5,`
`)),t&2){let i=m();a(3),p("icon",i.faCircleNotch)}}var ue=(()=>{class t{alertService=x(k);profileService=x(me);programmingExerciseService=x(pe);activeModal=x(T);FeatureToggle=te;programmingExercise;programmingExerciseResetOptions;isLoading=!1;resetInProgress;confirmText;versionControlName;continuousIntegrationName;hasCustomizedBuildPlans=!1;faBan=ne;faCircleNotch=ie;faSpinner=se;faUndo=re;ngOnInit(){this.isLoading=!0,this.profileService.getProfileInfo().subscribe(i=>{i&&(this.versionControlName=i.versionControlName,this.continuousIntegrationName=i.continuousIntegrationName,this.hasCustomizedBuildPlans=i?.activeProfiles.includes(ce)||i?.activeProfiles.includes(de))}),this.resetInProgress=!1,this.programmingExerciseResetOptions={deleteBuildPlans:!1,deleteRepositories:!1,deleteParticipationsSubmissionsAndResults:!1,recreateBuildPlans:!1},this.isLoading=!1}clear(){this.activeModal.dismiss("cancel")}resetProgrammingExercise(){this.programmingExercise.id&&(this.resetInProgress=!0,this.programmingExerciseService.reset(this.programmingExercise.id,this.programmingExerciseResetOptions).subscribe({next:this.handleResetResponse,error:()=>{this.alertService.error("artemisApp.programmingExercise.reset.errorMessage"),this.resetInProgress=!1}}))}handleResetResponse=()=>{this.alertService.success("artemisApp.programmingExercise.reset.successMessage"),this.activeModal.dismiss(!0),this.resetInProgress=!1};get canSubmit(){return this.confirmText===this.programmingExercise.title&&this.hasSelectedOptions&&!this.resetInProgress}get hasSelectedOptions(){return this.programmingExerciseResetOptions.deleteBuildPlans||this.programmingExerciseResetOptions.deleteRepositories||this.programmingExerciseResetOptions.deleteParticipationsSubmissionsAndResults||this.programmingExerciseResetOptions.recreateBuildPlans}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=R({type:t,selectors:[["jhi-programming-exercise-reset-dialog"]],inputs:{programmingExercise:"programmingExercise"},decls:2,vars:1,consts:[["resetForm","ngForm"],["name","resetForm","role","form",3,"ngSubmit"],[1,"modal-header"],["jhiTranslate","entity.resetProgrammingExercise.title",1,"modal-title"],["type","button","data-dismiss","modal",1,"btn-close",3,"click"],[1,"modal-body"],[3,"jhiTranslate","translateValues"],[1,"list-unstyled"],[1,"form-group"],["for","confirm-exercise-name",1,"text-danger",3,"jhiTranslate","translateValues"],["id","confirm-exercise-name","type","text","name","confirmExerciseName",1,"form-control",3,"ngModelChange","ngModel"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click","disabled"],[3,"icon"],["jhiTranslate","entity.action.cancel"],["type","submit",1,"btn","btn-danger",3,"disabled"],["jhiTranslate","entity.action.reset"],[1,"checkbox"],[1,"control-label"],["type","checkbox","name","deleteBuildPlans",1,"form-check-input",3,"ngModelChange","ngModel"],["jhiTranslate","artemisApp.programmingExercise.reset.deleteBuildPlans.title",3,"translateValues"],[1,"alert","alert-info","my-2"],["jhiTranslate","artemisApp.programmingExercise.reset.deleteBuildPlans.info"],["type","checkbox","name","deleteRepositories",1,"form-check-input",3,"ngModelChange","ngModel"],["jhiTranslate","artemisApp.programmingExercise.reset.deleteRepositories.title",3,"translateValues"],["type","checkbox","name","deleteParticipationsSubmissionsAndResults",1,"form-check-input",3,"ngModelChange","ngModel"],["jhiTranslate","artemisApp.programmingExercise.reset.deleteParticipationsSubmissionsAndResults"],[1,"alert","alert-warning","my-2"],["jhiTranslate","artemisApp.programmingExercise.reset.artefactsWarning",3,"translateValues"],["type","checkbox","name","recreateBuildPlans",1,"form-check-input",3,"ngModelChange","ngModel"],[3,"jhiTranslate"],["animation","spin",3,"icon"],[1,"d-flex","justify-content-center","mt-4","mb-4"]],template:function(o,s){o&1&&f(0,Be,59,23)(1,Ve,6,1),o&2&&g(s.isLoading?1:0)},dependencies:[$,Z,J,G,K,Q,Y,X,M,w],styles:["textarea[_ngcontent-%COMP%]{width:100%}"]})}return t})();var Pt=(()=>{class t{modalService=x(ee);renderer=x(j);elementRef=x(V);programmingExercise;ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"btn"),this.renderer.addClass(this.elementRef.nativeElement,"btn-danger"),this.renderer.addClass(this.elementRef.nativeElement,"btn-sm")}onClick(i){i.stopPropagation();let o=this.modalService.open(ue,{keyboard:!0,size:"lg"});o.componentInstance.programmingExercise=this.programmingExercise}static \u0275fac=function(o){return new(o||t)};static \u0275dir=D({type:t,selectors:[["","jhiProgrammingExerciseResetButton",""]],hostBindings:function(o,s){o&1&&_("click",function(A){return s.onClick(A)})},inputs:{programmingExercise:"programmingExercise"}})}return t})();export{xe as a,Ye as b,Pt as c};
//# sourceMappingURL=chunk-CV65QZ72.js.map
