import{a as Q}from"./chunk-MNX6OTP5.js";import{a as Pe}from"./chunk-LTHMYHP7.js";import{a as Qe}from"./chunk-U4DJRHYQ.js";import{b as ze}from"./chunk-T624HJJL.js";import{a as ne,b as B,d as ke}from"./chunk-O26CMRR4.js";import{a as Be}from"./chunk-2QXIMOEO.js";import{d as Ie}from"./chunk-AR57MWOI.js";import{N as Z,u as ve,v as be}from"./chunk-VZRSC3LP.js";import{C as we,F as ye,H as Ce,K as J,b as Te,c as G,h as K,i as _e,k as Se,m as X,n as xe}from"./chunk-WA5GEAJB.js";import{b as Ve,e as L,r as Oe,v as Me}from"./chunk-5GXY5RYT.js";import{a as te}from"./chunk-K3W6YFKH.js";import{c as Ue}from"./chunk-JXJXC4DZ.js";import{d as ie}from"./chunk-EDXSOKK5.js";import{Lc as De,Zc as Fe,b as ee,fa as Ne,q as Ee,tb as Ae,wd as Re}from"./chunk-Z4VHWOB5.js";import{a as je}from"./chunk-U54OSGNH.js";import{A as fe}from"./chunk-IOA4DPXY.js";import{A as R,Ad as le,Db as m,Dc as b,Ea as x,J as ce,L as ue,Ma as c,Mc as _,Na as u,Oc as f,P as W,Tb as C,U as q,Va as S,Yc as V,Zb as v,Zc as O,_ as he,_c as M,cd as U,dd as e,ed as se,f as N,fd as I,gd as me,kc as h,ld as j,mc as oe,md as k,nd as z,oa as A,qd as P,ra as y,rd as ge,s as w,sc as T,uc as $,vc as H,wc as Y,xc as o,yc as s,yd as E,z as F,zc as p,zd as D}from"./chunk-5LC5EQRR.js";import{a as de,b as pe}from"./chunk-3E746U5Y.js";var Ye=function(a){return a.PURGE_EXISTING="PURGE_EXISTING",a.CREATE_ONLY="CREATE_ONLY",a}(Ye||{});var ae=class{id;name;shortName;image;students;owner;createdBy;createdDate;lastModifiedBy;lastModifiedDate;constructor(){this.students=[]}};var Ke=["instance"],Le=(()=>{class a{courseService=x(Ie);ngbTypeahead;focus=new N;click=new N;inputDisabled;course;exercise;team;selectOwner=new S;searching=new S;searchQueryTooShort=new S;searchFailed=new S;searchNoResults=new S;owner;ownerOptions=[];ownerOptionsLoaded=!1;inputDisplayValue;ngOnInit(){this.team.owner&&(this.owner=L(this.team.owner),this.inputDisplayValue=this.searchResultFormatter(this.owner))}onAutocompleteSelect=i=>{this.inputDisplayValue=this.searchResultFormatter(i),this.selectOwner.emit(i)};searchInputFormatter=()=>this.inputDisplayValue;searchResultFormatter=i=>{let{login:n,name:t}=i;return`${t} (${n})`};searchMatchesUser(i,n){return[n.login,n.name].some(t=>(t||"").toLowerCase().includes(i.toLowerCase()))}onSearch=i=>{let n=this.click.pipe(ue(()=>!this.ngbTypeahead.isPopupOpen())),t=this.focus;return ce(i,t,n).pipe(y(()=>{this.searchNoResults.emit(void 0)}),A(r=>{this.searchFailed.emit(!1),this.searching.emit(!0);let d=this.ownerOptionsLoaded?w(this.ownerOptions):this.loadOwnerOptions();return R([w(r),d])}),y(()=>this.searching.emit(!1)),A(([r,d])=>{let l=He=>this.searchMatchesUser(r,He);return R([w(r),w(d&&d.filter(l))])}),y(([r,d])=>{d&&d.length===0&&this.searchNoResults.emit(r)}),F(([,r])=>r||[]))};loadOwnerOptions(){return this.courseService.getAllUsersInCourseGroup(this.course.id,"tutors").pipe(F(i=>i.body),y(i=>{this.ownerOptions=i,this.ownerOptionsLoaded=!0}),W(()=>(this.ownerOptionsLoaded=!1,this.searchFailed.emit(!0),w(void 0))))}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=C({type:a,selectors:[["jhi-team-owner-search"]],viewQuery:function(n,t){if(n&1&&V(Ke,7),n&2){let r;O(r=M())&&(t.ngbTypeahead=r.first)}},inputs:{inputDisabled:"inputDisabled",course:"course",exercise:"exercise",team:"team"},outputs:{selectOwner:"selectOwner",searching:"searching",searchQueryTooShort:"searchQueryTooShort",searchFailed:"searchFailed",searchNoResults:"searchNoResults"},decls:4,vars:8,consts:[["instance","ngbTypeahead"],["id","owner-search-input","type","text",1,"form-control",3,"ngModelChange","selectItem","focus","click","disabled","placeholder","ngModel","ngbTypeahead","resultFormatter","inputFormatter"]],template:function(n,t){if(n&1){let r=b();o(0,"input",1,0),E(2,"artemisTranslate"),z("ngModelChange",function(l){return c(r),k(t.owner,l)||(t.owner=l),u(l)}),_("selectItem",function(l){return c(r),u(t.onAutocompleteSelect(l.item))})("focus",function(){return c(r),u(t.focus.next(""))})("click",function(){return c(r),u(t.click.next(""))}),s(),e(3,`
`)}n&2&&(h("disabled",t.inputDisabled)("placeholder",D(2,6,"artemisApp.team.selectOwnerForTeam")),j("ngModel",t.owner),h("ngbTypeahead",t.onSearch)("resultFormatter",t.searchResultFormatter)("inputFormatter",t.searchInputFormatter))},dependencies:[J,G,K,X,Z,te],encapsulation:2})}return a})();var Xe=["ngbTypeahead"],We=(()=>{class a{teamService=x(Q);ngbTypeahead;course;exercise;team;studentsFromPendingTeam=[];selectStudent=new S;searching=new S;searchQueryTooShort=new S;searchFailed=new S;searchNoResults=new S;inputDisplayValue;onAutocompleteSelect=i=>{this.inputDisplayValue="",this.selectStudent.emit(i)};searchInputFormatter=()=>this.inputDisplayValue;searchResultFormatter=i=>{let{login:n,name:t}=i;return`${t} (${n})`};onSearch=i=>i.pipe(q(200),he(),y(()=>{this.searchQueryTooShort.emit(!1),this.searchFailed.emit(!1),this.searchNoResults.emit(void 0)}),y(()=>this.searching.emit(!0)),A(n=>n.length<3?(this.searchQueryTooShort.emit(!0),R([w(n),w(void 0)])):R([w(n),this.teamService.searchInCourseForExerciseTeam(this.course,this.exercise,n).pipe(F(t=>t.body)).pipe(W(()=>(this.searchFailed.emit(!0),w(void 0))))])),y(()=>this.searching.emit(!1)),y(([n,t])=>{t&&t.length===0&&this.searchNoResults.emit(n)}),F(([,n])=>n||[]),y(n=>{setTimeout(()=>{for(let t=0;t<this.typeaheadButtons.length;t++)this.userCanBeAddedToPendingTeam(n[t])||this.typeaheadButtons[t].setAttribute("disabled","")})}));userCanBeAddedToPendingTeam(i){if(this.studentsFromPendingTeam.map(n=>n.id).includes(i.id))return!1;if(i.assignedTeamId){if(!this.team.id)return!1}else return!0;return i.assignedTeamId===this.team.id}get typeaheadButtons(){return Ve(this.ngbTypeahead,"nativeElement.nextSibling.children",[])}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=C({type:a,selectors:[["jhi-team-student-search"]],viewQuery:function(n,t){if(n&1&&V(Xe,5),n&2){let r;O(r=M())&&(t.ngbTypeahead=r.first)}},inputs:{course:"course",exercise:"exercise",team:"team",studentsFromPendingTeam:"studentsFromPendingTeam"},outputs:{selectStudent:"selectStudent",searching:"searching",searchQueryTooShort:"searchQueryTooShort",searchFailed:"searchFailed",searchNoResults:"searchNoResults"},decls:4,vars:6,consts:[["ngbTypeahead",""],["id","student-search-input","type","text",1,"form-control",3,"selectItem","placeholder","ngbTypeahead","resultFormatter","inputFormatter"]],template:function(n,t){if(n&1){let r=b();o(0,"input",1,0),E(2,"artemisTranslate"),_("selectItem",function(l){return c(r),u(t.onAutocompleteSelect(l.item))}),s(),e(3,`
`)}n&2&&h("placeholder",D(2,4,"artemisApp.team.addStudentToTeam"))("ngbTypeahead",t.onSearch)("resultFormatter",t.searchResultFormatter)("inputFormatter",t.searchInputFormatter)},dependencies:[Z,te],encapsulation:2})}return a})();var Je=["editForm"],qe=()=>["required"],Ze=()=>[],et=a=>({shortName:a}),tt=()=>({standalone:!0});function it(a,g){if(a&1&&(e(0,`
                    `),o(1,"div",32),e(2,`
                        `),p(3,"span",6),e(4,`
                    `),s(),e(5,`
                `)),a&2){let i=f().$implicit;m(3),h("jhiTranslate","artemisApp.team.name."+i.key)}}function nt(a,g){if(a&1&&(e(0,`
                `),v(1,it,6,1)),a&2){f();let i=U(24);m(),T(i.invalid&&(i.dirty||i.touched)?1:-1)}}function at(a,g){if(a&1&&(e(0,`
                    `),o(1,"div",32),e(2,`
                        `),p(3,"span",6),e(4,`
                    `),s(),e(5,`
                `)),a&2){let i=f().$implicit;m(3),h("jhiTranslate","artemisApp.team.shortName."+i.key)}}function rt(a,g){if(a&1&&(e(0,`
                `),v(1,at,6,1)),a&2){f();let i=U(41);m(),T(i.invalid&&(i.dirty||i.touched)?1:-1)}}function ot(a,g){if(a&1&&(e(0,`
                    `),p(1,"fa-icon",33),e(2,`
                `)),a&2){let i=f();m(),h("icon",i.faSpinner)}}function st(a,g){a&1&&(e(0,`
                    `),p(1,"span",34),e(2,`
                `))}function mt(a,g){if(a&1&&(e(0,`
                    `),o(1,"span",35),e(2,`
                        `),p(3,"span",36),e(4,`
                        `),o(5,"strong"),e(6),s(),e(7,`
                    `),s(),e(8,`
                `)),a&2){let i=f();m(6),se(i.searchingOwnerNoResultsForQuery)}}function lt(a,g){a&1&&(e(0,`
                    `),p(1,"span",37),e(2,`
                `))}function dt(a,g){if(a&1&&(e(0,`
                    `),o(1,"span",38),e(2),s(),e(3,`
                `)),a&2){let i=f();m(),h("translateValues",ge(2,et,i.team.shortName)),m(),I(`
                        This will change the tutor for the team `,i.team.shortName,` in the whole course!
                    `)}}function pt(a,g){if(a&1&&(e(0,`
                    `),p(1,"fa-icon",33),e(2,`
                `)),a&2){let i=f();m(),h("icon",i.faSpinner)}}function ct(a,g){a&1&&(e(0,`
                    `),p(1,"span",39),e(2,`
                `))}function ut(a,g){if(a&1&&(e(0,`
                    `),o(1,"span",35),e(2,`
                        `),p(3,"span",40),e(4,`
                        `),o(5,"strong"),e(6),s(),e(7,`
                    `),s(),e(8,`
                `)),a&2){let i=f();m(6),se(i.searchingStudentsNoResultsForQuery)}}function ht(a,g){a&1&&(e(0,`
                    `),p(1,"span",41),e(2,`
                `))}function gt(a,g){if(a&1&&(e(0,`
                            `),o(1,"div",47),e(2,`
                                `),p(3,"fa-icon",48),e(4),s(),e(5,`
                        `)),a&2){let i=f().$implicit,n=f();m(3),h("icon",n.faExclamationTriangle),m(),I(`
                                Already assigned to team with id `,n.getConflictingTeam(i),`.
                            `)}}function ft(a,g){if(a&1){let i=b();e(0,`
                    `),o(1,"li",42),e(2,`
                        `),o(3,"div",43),e(4),s(),e(5,`
                        `),o(6,"div",44),e(7,`
                            `),o(8,"div",45),e(9),s(),e(10,`
                            `),o(11,"button",46),_("click",function(){let t=c(i).$implicit,r=f();return u(r.onRemoveStudent(t))}),e(12,`
                                `),p(13,"fa-icon",28),e(14,`
                            `),s(),e(15,`
                        `),s(),e(16,`
                        `),v(17,gt,6,2),s(),e(18,`
                `)}if(a&2){let i=g.$implicit,n=g.$index,t=f();m(4),I(`
                            `,n+1,`
                        `),m(2),oe("has-error",t.hasConflictingTeam(i)),m(3),me("",i.name," (",i.login,")"),m(4),h("icon",t.faTrashAlt),m(4),T(t.hasConflictingTeam(i)?17:-1)}}function Tt(a,g){a&1&&(e(0,`
                    `),o(1,"li",42),e(2,`
                        `),o(3,"div",49),e(4,"1"),s(),e(5,`
                        `),o(6,"div",44),e(7,`
                            `),p(8,"div",50),e(9,`
                        `),s(),e(10,`
                    `),s(),e(11,`
                `))}function _t(a,g){if(a&1){let i=b();e(0,`
                        `),o(1,"div",51),e(2,`
                            `),o(3,"input",52),z("ngModelChange",function(t){c(i);let r=f();return k(r.ignoreTeamSizeRecommendation,t)||(r.ignoreTeamSizeRecommendation=t),u(t)}),s(),e(4,`
                            `),o(5,"label",53),e(6,`
                                `),p(7,"span",54),e(8,`
                                `),p(9,"fa-icon",55),e(10,`
                            `),s(),e(11,`
                        `),s(),e(12,`
                    `)}if(a&2){let i=f();m(3),j("ngModel",i.ignoreTeamSizeRecommendation),h("ngModelOptions",P(3,tt)),m(6),h("icon",i.faExclamationTriangle)}}var $e=(()=>{class a{teamService=x(Q);activeModal=x(ve);editForm;team;exercise;pendingTeam;isSaving=!1;searchingStudents=!1;searchingStudentsQueryTooShort=!1;searchingStudentsFailed=!1;searchingStudentsNoResultsForQuery;searchingOwner=!1;searchingOwnerQueryTooShort=!1;searchingOwnerFailed=!1;searchingOwnerNoResultsForQuery;studentTeamConflicts=[];ignoreTeamSizeRecommendation=!1;shortNameValidator=new N;SHORT_NAME_ALREADY_TAKEN_ERROR_CODE="alreadyTaken";SHORT_NAME_PATTERN=Qe;faSave=Ae;faBan=Ne;faSpinner=Fe;faExclamationTriangle=Re;faTrashAlt=ee;ngOnInit(){this.initPendingTeam(),this.shortNameValidation(this.shortNameValidator)}initPendingTeam(){this.pendingTeam=L(this.team)}onTeamShortNameChanged(i){this.pendingTeam.shortName=i.toLowerCase(),this.shortNameValidator.next(this.pendingTeam.shortName)}onTeamNameChanged(i){if(!this.shortNameReadOnly){let n=i.replace(/[^0-9a-z]/gi,"");this.onTeamShortNameChanged(n),this.shortNameControl.markAsTouched()}}get shortNameReadOnly(){return!!this.pendingTeam.id}get shortNameControl(){return this.editForm.control.get("shortName")}get config(){return this.exercise.teamAssignmentConfig}get showIgnoreTeamSizeRecommendationOption(){return!this.recommendedTeamSize}get teamSizeViolationUnconfirmed(){return this.showIgnoreTeamSizeRecommendationOption&&!this.ignoreTeamSizeRecommendation}get recommendedTeamSize(){let i=this.pendingTeam.students?.length||0;return i>=this.config.minTeamSize&&i<=this.config.maxTeamSize}hasConflictingTeam(i){return this.findStudentTeamConflict(i)!==void 0}getConflictingTeam(i){let n=this.findStudentTeamConflict(i);return n?n.teamId:void 0}findStudentTeamConflict(i){return this.studentTeamConflicts.find(n=>n.studentLogin===i.login)}resetStudentTeamConflict(i){return this.studentTeamConflicts=this.studentTeamConflicts.filter(n=>n.studentLogin!==i.login)}isStudentAlreadyInPendingTeam(i){return this.pendingTeam.students?.find(n=>n.id===i.id)!==void 0}onAddStudent(i){this.isStudentAlreadyInPendingTeam(i)||(this.pendingTeam.students||(this.pendingTeam.students=[]),this.pendingTeam.students.push(i))}onRemoveStudent(i){this.pendingTeam.students=this.pendingTeam.students?.filter(n=>n.id!==i.id),this.resetStudentTeamConflict(i)}onSelectOwner(i){this.pendingTeam.owner=i}clear(){this.activeModal.dismiss("cancel")}save(){this.teamSizeViolationUnconfirmed||(this.team=L(this.pendingTeam),this.team.id!==void 0?this.subscribeToSaveResponse(this.teamService.update(this.exercise,this.team)):this.subscribeToSaveResponse(this.teamService.create(this.exercise,this.team)))}subscribeToSaveResponse(i){this.isSaving=!0,i.subscribe({next:n=>this.onSaveSuccess(n),error:n=>this.onSaveError(n)})}onSaveSuccess(i){this.activeModal.close(i.body),this.isSaving=!1}onSaveError(i){this.isSaving=!1;let{errorKey:n,params:t}=i.error;switch(n){case"studentsAlreadyAssignedToTeams":let{conflicts:r}=t;this.studentTeamConflicts=r;break;default:break}}shortNameValidation(i){i.pipe(q(500),A(n=>this.teamService.existsByShortName(this.exercise.course,n))).subscribe(n=>{let t=n.body,r=t?pe(de({},this.shortNameControl.errors),{[this.SHORT_NAME_ALREADY_TAKEN_ERROR_CODE]:t}):Me(this.shortNameControl.errors,this.SHORT_NAME_ALREADY_TAKEN_ERROR_CODE);this.shortNameControl.setErrors(Oe(r)?null:r)})}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=C({type:a,selectors:[["jhi-team-update-dialog"]],viewQuery:function(n,t){if(n&1&&V(Je,5),n&2){let r;O(r=M())&&(t.editForm=r.first)}},inputs:{team:"team",exercise:"exercise"},decls:121,vars:49,consts:[["editForm","ngForm"],["name","ngModel"],["shortName","ngModel"],["id","teamUpdateDialogForm","name","editForm","role","form","novalidate","",3,"ngSubmit"],[1,"modal-header"],[1,"modal-title"],[3,"jhiTranslate"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],[1,"form-group"],["jhiTranslate","artemisApp.team.name.label","for","teamName",1,"label-narrow"],["type","text","name","name","id","teamName","required","","minlength","3",1,"form-control",3,"ngModelChange","ngModel"],["jhiTranslate","artemisApp.team.shortName.label","for","teamShortName",1,"label-narrow"],["text","artemisApp.team.shortName.tooltip"],["type","text","name","shortName","id","teamShortName","required","","minlength","3",1,"form-control",3,"ngModelChange","pattern","ngModel","disabled","readOnly"],[1,"d-flex","align-items-end"],["jhiTranslate","artemisApp.team.owner.label",1,"label-narrow"],["text","artemisApp.team.owner.tooltip",1,"me-1"],["id","teamOwner",3,"selectOwner","searching","searchQueryTooShort","searchNoResults","searchFailed","inputDisabled","course","exercise","team"],["jhiTranslate","artemisApp.team.students",1,"label-narrow","me-1"],["id","teamStudents",3,"selectStudent","searching","searchQueryTooShort","searchNoResults","searchFailed","course","exercise","team","studentsFromPendingTeam"],[1,"list-group","list-group--students","my-3"],["role","alert",1,"alert","mt-3"],[1,"d-flex","justify-content-between"],["jhiTranslate","artemisApp.team.teamSizeNote",1,"font-weight-bold"],["jhiTranslate","artemisApp.team.teamSizeUnit"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary","cancel",3,"click"],[3,"icon"],["jhiTranslate","entity.action.cancel"],["type","submit",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","entity.action.save"],[1,"form-control-error","text-danger"],["animation","spin",1,"search-searching",3,"icon"],["jhiTranslate","artemisApp.team.ownerSearch.queryTooShort",1,"label-inline-message","text-danger"],[1,"label-inline-message","text-danger"],["jhiTranslate","artemisApp.team.ownerSearch.noResults"],["jhiTranslate","artemisApp.team.ownerSearch.failed",1,"label-inline-message","text-danger"],["jhiTranslate","artemisApp.team.ownerChangeWarning",1,"label-inline-message","text-danger",3,"translateValues"],["jhiTranslate","artemisApp.team.studentSearch.queryTooShort",1,"label-inline-message","text-danger"],["jhiTranslate","artemisApp.team.studentSearch.noResults"],["jhiTranslate","artemisApp.team.studentSearch.failed",1,"label-inline-message","text-danger"],[1,"list-group-item-container","d-flex","align-items-center"],[1,"list-group-item-index"],[1,"list-group-item","d-flex","align-items-center"],[1,"student-name"],[1,"jest-student-remove-link","student-remove-link","ms-4",3,"click"],[1,"list-group-item-error","hidden-md-down"],[1,"me-1",3,"icon"],[1,"list-group-item-index","text-body-secondary"],["jhiTranslate","artemisApp.team.noStudentsAddedYet",1,"text-body-secondary"],[1,"form-check"],["id","ignoreTeamSizeRecommendation","type","checkbox","value","",1,"form-check-input",3,"ngModelChange","ngModel","ngModelOptions"],["for","ignoreTeamSizeRecommendation",1,"form-check-label"],["jhiTranslate","artemisApp.team.ignoreTeamSizeRecommendation"],[1,"ms-1",3,"icon"]],template:function(n,t){if(n&1){let r=b();o(0,"form",3,0),_("ngSubmit",function(){return c(r),u(t.save())}),e(2,`
    `),o(3,"div",4),e(4,`
        `),o(5,"h4",5),e(6,`
            `),o(7,"span",6),e(8),s(),e(9,`
            `),o(10,"span"),e(11),s(),e(12,`
        `),s(),e(13,`
        `),o(14,"button",7),_("click",function(){return c(r),u(t.clear())}),s(),e(15,`
    `),s(),e(16,`
    `),o(17,"div",8),e(18,`
        `),o(19,"div",9),e(20,`
            `),p(21,"label",10),e(22,`
            `),o(23,"input",11,1),z("ngModelChange",function(l){return c(r),k(t.pendingTeam.name,l)||(t.pendingTeam.name=l),u(l)}),_("ngModelChange",function(l){return c(r),u(t.onTeamNameChanged(l))}),s(),e(25,`
            `),H(26,nt,2,1,null,null,$),E(28,"keyvalue"),E(29,"removekeys"),s(),e(30,`
        `),o(31,"div",9),e(32,`
            `),o(33,"div"),e(34,`
                `),p(35,"label",12),e(36,`
                `),p(37,"jhi-help-icon",13),e(38,`
            `),s(),e(39,`
            `),o(40,"input",14,2),z("ngModelChange",function(l){return c(r),k(t.pendingTeam.shortName,l)||(t.pendingTeam.shortName=l),u(l)}),_("ngModelChange",function(l){return c(r),u(t.onTeamShortNameChanged(l))}),s(),e(42,`
            `),H(43,rt,2,1,null,null,$),E(45,"keyvalue"),E(46,"removekeys"),s(),e(47,`
        `),o(48,"div",9),e(49,`
            `),o(50,"div",15),e(51,`
                `),o(52,"div"),e(53,`
                    `),p(54,"label",16),e(55,`
                    `),p(56,"jhi-help-icon",17),e(57,`
                `),s(),e(58,`
                `),v(59,ot,3,1)(60,st,3,0)(61,mt,9,1)(62,lt,3,0)(63,dt,4,4),s(),e(64,`
            `),o(65,"jhi-team-owner-search",18),_("selectOwner",function(l){return c(r),u(t.onSelectOwner(l))})("searching",function(l){return c(r),u(t.searchingOwner=l)})("searchQueryTooShort",function(l){return c(r),u(t.searchingOwnerQueryTooShort=l)})("searchNoResults",function(l){return c(r),u(t.searchingOwnerNoResultsForQuery=l)})("searchFailed",function(l){return c(r),u(t.searchingOwnerFailed=l)}),s(),e(66,`
        `),s(),e(67,`
        `),o(68,"div",9),e(69,`
            `),o(70,"div",15),e(71,`
                `),p(72,"label",19),e(73,`
                `),v(74,pt,3,1)(75,ct,3,0)(76,ut,9,1)(77,ht,3,0),s(),e(78,`
            `),o(79,"jhi-team-student-search",20),_("selectStudent",function(l){return c(r),u(t.onAddStudent(l))})("searching",function(l){return c(r),u(t.searchingStudents=l)})("searchQueryTooShort",function(l){return c(r),u(t.searchingStudentsQueryTooShort=l)})("searchNoResults",function(l){return c(r),u(t.searchingStudentsNoResultsForQuery=l)})("searchFailed",function(l){return c(r),u(t.searchingStudentsFailed=l)}),s(),e(80,`
            `),o(81,"ul",21),e(82,`
                `),H(83,ft,19,7,null,null,$),v(85,Tt,12,0),s(),e(86,`
            `),o(87,"div",22),e(88,`
                `),o(89,"div",23),e(90,`
                    `),o(91,"div"),e(92,`
                        `),p(93,"span",24),e(94),p(95,"span",25),e(96,`
                    `),s(),e(97,`
                    `),v(98,_t,13,4),s(),e(99,`
            `),s(),e(100,`
        `),s(),e(101,`
    `),s(),e(102,`
    `),o(103,"div",26),e(104,`
        `),o(105,"button",27),_("click",function(){return c(r),u(t.clear())}),e(106,`
            `),p(107,"fa-icon",28),e(108,"\xA0"),p(109,"span",29),e(110,`
        `),s(),e(111,`
        `),o(112,"button",30),e(113,`
            `),p(114,"fa-icon",28),e(115,"\xA0"),p(116,"span",31),e(117,`
        `),s(),e(118,`
    `),s(),e(119,`
`),s(),e(120,`
`)}if(n&2){let r=U(1),d=U(24),l=U(41);m(7),h("jhiTranslate",t.pendingTeam.id?"artemisApp.team.updateTeam.label":"artemisApp.team.createTeam.label"),m(),I(`
                `,t.pendingTeam.id?"Update Team":"Create Team",`
            `),m(3),I("(",t.exercise.title,")"),m(12),j("ngModel",t.pendingTeam.name),m(3),Y(le(29,38,D(28,36,d.errors),P(46,qe))),m(14),h("pattern",t.SHORT_NAME_PATTERN),j("ngModel",t.pendingTeam.shortName),h("disabled",t.shortNameReadOnly)("readOnly",t.shortNameReadOnly),m(3),Y(le(46,43,D(45,41,l.errors),P(47,qe))),m(16),T(t.searchingOwner?59:-1),m(),T(t.searchingOwnerQueryTooShort?60:-1),m(),T(t.searchingOwnerNoResultsForQuery?61:-1),m(),T(t.searchingOwnerFailed?62:-1),m(),T(t.team.id&&(t.team.owner==null?null:t.team.owner.id)!==(t.pendingTeam.owner==null?null:t.pendingTeam.owner.id)?63:-1),m(2),h("inputDisabled",!t.exercise.isAtLeastInstructor)("course",t.exercise.course)("exercise",t.exercise)("team",t.team),m(9),T(t.searchingStudents?74:-1),m(),T(t.searchingStudentsQueryTooShort?75:-1),m(),T(t.searchingStudentsNoResultsForQuery?76:-1),m(),T(t.searchingStudentsFailed?77:-1),m(2),h("course",t.exercise.course)("exercise",t.exercise)("team",t.team)("studentsFromPendingTeam",t.pendingTeam.students||P(48,Ze)),m(4),Y(t.pendingTeam.students),m(2),T(t.pendingTeam.students&&t.pendingTeam.students.length===0?85:-1),m(2),oe("alert-info",!t.showIgnoreTeamSizeRecommendationOption)("alert-warning",t.showIgnoreTeamSizeRecommendationOption),m(7),me(`
                        `,t.config.minTeamSize," - ",t.config.maxTeamSize,`
                        `),m(4),T(t.showIgnoreTeamSizeRecommendationOption?98:-1),m(9),h("icon",t.faBan),m(5),h("disabled",r.invalid||t.isSaving||t.teamSizeViolationUnconfirmed),m(2),h("icon",t.faSave)}},dependencies:[J,xe,G,Te,K,_e,we,ye,Ce,X,Se,je,Be,ie,Le,We,fe,Pe],styles:[`.form-control-error{margin-top:.35rem}.form-control-error+.form-control-error{margin-top:0}.search-searching{position:relative;top:-2px}.label-inline-message{position:relative;top:-4.5px;line-height:1rem;font-size:.8rem;margin-left:5px}.list-group--students{max-width:450px}.list-group--students .list-group-item-container{position:relative}.list-group--students .list-group-item-container:not(:last-child){margin-bottom:.15rem}.list-group--students .list-group-item-index{font-size:1.1rem;margin-left:1.5rem;margin-right:1rem;font-weight:500}.list-group--students .list-group-item{flex-grow:1}.list-group--students .list-group-item.has-error{background-color:var(--artemis-alert-danger-background)}.list-group--students .list-group-item-error{width:280px;position:absolute;left:100%;margin-left:2rem;color:var(--danger)}.list-group--students .student-name{flex-grow:1;width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.list-group--students .student-remove-link{background-color:transparent;border:none;-webkit-appearance:none;color:var(--bs-body-color)}.modal-footer button[disabled]{cursor:not-allowed}.hidden-md-down{display:none!important}@media (min-width: 992px){.hidden-md-down{display:block!important}}
`],encapsulation:2})}return a})();var Wi=(()=>{class a{modalService=x(be);ButtonType=ne;ButtonSize=B;team;exercise;buttonSize=B.SMALL;save=new S;faPencilAlt=Ee;faPlus=De;openTeamCreateDialog(i){i.stopPropagation();let n=this.modalService.open($e,{keyboard:!0,size:"lg",backdrop:"static"});n.componentInstance.team=this.team||new ae,n.componentInstance.exercise=this.exercise,n.result.then(t=>this.save.emit(t),()=>{})}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=C({type:a,selectors:[["jhi-team-update-button"]],inputs:{team:"team",exercise:"exercise",buttonSize:"buttonSize"},outputs:{save:"save"},decls:3,vars:4,consts:[[3,"onClick","btnType","btnSize","icon","title"]],template:function(n,t){n&1&&(e(0,`
        `),o(1,"jhi-button",0),_("onClick",function(d){return t.openTeamCreateDialog(d)}),s(),e(2,`
    `)),n&2&&(m(),h("btnType",t.ButtonType.PRIMARY)("btnSize",t.buttonSize)("icon",t.team?t.faPencilAlt:t.faPlus)("title",t.team?"artemisApp.team.updateTeam.label":"artemisApp.team.createTeam.label"))},dependencies:[ke],encapsulation:2})}return a})();function St(a,g){if(a&1){let i=b();e(0,`
            `),o(1,"button",0),_("delete",function(){c(i);let t=f();return u(t.removeTeam())}),e(2,`
                `),p(3,"fa-icon",1),e(4,`
            `),s(),e(5,`
        `)}if(a&2){let i=f();m(),h("buttonSize",i.buttonSize)("entityTitle",i.team.shortName||"")("dialogError",i.dialogError$),m(2),h("icon",i.faTrashAlt)}}var mn=(()=>{class a{alertService=x(Ue);teamService=x(Q);ButtonType=ne;ButtonSize=B;team;exercise;buttonSize=B.SMALL;delete=new S;dialogErrorSource=new N;dialogError$=this.dialogErrorSource.asObservable();faTrashAlt=ee;ngOnDestroy(){this.dialogErrorSource.unsubscribe()}removeTeam=()=>{this.teamService.delete(this.exercise,this.team.id).subscribe({next:()=>{this.delete.emit(this.team),this.dialogErrorSource.next("")},error:()=>this.alertService.error("artemisApp.team.removeTeam.error")})};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=C({type:a,selectors:[["jhi-team-delete-button"]],inputs:{team:"team",exercise:"exercise",buttonSize:"buttonSize"},outputs:{delete:"delete"},decls:2,vars:1,consts:[["jhiDeleteButton","","deleteQuestion","artemisApp.team.delete.question","deleteConfirmationText","artemisApp.team.delete.typeNameToConfirm",3,"delete","buttonSize","entityTitle","dialogError"],[1,"me-1",3,"icon"]],template:function(n,t){n&1&&(e(0,`
        `),v(1,St,6,4)),n&2&&(m(),T(t.exercise.isAtLeastInstructor?1:-1))},dependencies:[ze,ie],encapsulation:2})}return a})();export{Ye as a,ae as b,Wi as c,mn as d};
//# sourceMappingURL=chunk-22GL4PFU.js.map
