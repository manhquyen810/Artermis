import{a as me}from"./chunk-7Q4TXNQR.js";import{a as rt}from"./chunk-7DTX5HC5.js";import{a as w,b as se,c as ot,d as at}from"./chunk-22GL4PFU.js";import{a as $}from"./chunk-MNX6OTP5.js";import{a as nt}from"./chunk-U4DJRHYQ.js";import{a as it}from"./chunk-G4HSJ7ME.js";import{c as Je,d as Ke,e as Ze,f as et,g as tt}from"./chunk-F3NFBBHK.js";import{a as _t}from"./chunk-WL6UHE7V.js";import{b as qe}from"./chunk-T624HJJL.js";import{a as Xe}from"./chunk-HMZID6NQ.js";import{a as ne,b as A,d as re}from"./chunk-O26CMRR4.js";import{a as ae}from"./chunk-FGXEI5KW.js";import{a as oe}from"./chunk-2QXIMOEO.js";import{d as Qe}from"./chunk-AR57MWOI.js";import{c as Ge}from"./chunk-CK7FH6VF.js";import{c as Ye}from"./chunk-JNO6DNVW.js";import{N as ke,u as Oe,v as Ve}from"./chunk-VZRSC3LP.js";import{K as z,c as M,h as B,i as je,k as Le,m as P,n as Re,p as K}from"./chunk-WA5GEAJB.js";import{m as te,x as $e}from"./chunk-5GXY5RYT.js";import{a as ie}from"./chunk-K3W6YFKH.js";import{c as He}from"./chunk-JXJXC4DZ.js";import{d as W}from"./chunk-EDXSOKK5.js";import{b as Ue}from"./chunk-R5BZWVRQ.js";import{Lc as ze,Zc as ee,ed as We,fa as Be,gc as Pe,y as Me}from"./chunk-Z4VHWOB5.js";import{a as U}from"./chunk-U54OSGNH.js";import{f as Ae,h as Ne,i as De}from"./chunk-M6Z6DKZQ.js";import{c as Z}from"./chunk-E2KBL4LX.js";import{n as Fe}from"./chunk-IOA4DPXY.js";import{A as pe,Db as s,Dc as v,Ea as T,Id as Ie,J as _e,L as fe,Ma as _,Mc as g,Na as f,Oc as d,P as Te,Tb as E,Va as y,Yc as X,Zb as h,Zc as q,_c as J,cd as ue,dd as e,ed as j,f as N,fd as C,kc as p,ld as Ee,mc as D,md as ye,nd as we,oa as de,qd as L,ra as G,rd as Q,s as V,sc as x,sd as xe,td as he,uc as Ce,vc as ve,wc as be,xb as Se,xc as o,yc as a,yd as I,z as k,zc as l,zd as F}from"./chunk-5LC5EQRR.js";import{h as gt,j as ge}from"./chunk-3E746U5Y.js";var st=(()=>{class i{teamService=T($);ButtonType=ne;ButtonSize=A;teams;buttonSize=A.SMALL;faFileExport=We;exportTeams(t){t.stopPropagation(),this.teamService.exportTeams(this.teams)}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["jhi-teams-export-button"]],inputs:{teams:"teams",buttonSize:"buttonSize"},decls:3,vars:4,consts:[[3,"onClick","btnType","btnSize","icon","title"]],template:function(r,n){r&1&&(e(0,`
        `),o(1,"jhi-button",0),g("onClick",function(u){return n.exportTeams(u)}),a(),e(2,`
    `)),r&2&&(s(),p("btnType",n.ButtonType.PRIMARY)("btnSize",n.buttonSize)("icon",n.faFileExport)("title","artemisApp.team.exportTeams.buttonLabel"))},dependencies:[re],encapsulation:2})}return i})();var mt=gt(_t());function ft(i,c){if(i&1&&(e(0,`
        `),l(1,"fa-icon",4),e(2,`
    `)),i&2){let t=d();s(),p("icon",t.faSpinner)}}var S=Object.freeze({registrationNumber:"registrationnumber",matrikelNummer:"matrikelnummer",matriculationNumber:"matriculationnumber",name:"name",vorname:"vorname",nachname:"nachname",firstName:"firstname",familyName:"familyname",lastName:"lastname",surname:"surname",login:"login",username:"username",user:"user",benutzer:"benutzer",benutzerName:"benutzername",team:"team",teamName:"teamname",gruppe:"gruppe"}),lt=(()=>{class i{changeDetector=T(Ie);translateService=T(Z);teamsChanged=new y;sourceTeams;importedTeams=[];importFile;importFileName;loading;faSpinner=ee;generateFileReader(){return new FileReader}onFileLoadImport(t){return ge(this,null,function*(){try{if(this.importFile?.type==="application/json")this.importedTeams=JSON.parse(t.result);else if(this.importFile?.type==="text/csv"){let n=yield this.parseCSVFile(t.result);this.importedTeams=this.convertCsvEntries(n)}else throw new Error(this.translateService.instant("artemisApp.team.invalidFileType",{fileType:this.importFile?.type}));this.sourceTeams=this.convertTeams(this.importedTeams),this.teamsChanged.emit(this.sourceTeams),this.loading=!1,this.importFile=void 0,this.importFileName="";let r=document.getElementById("importFileInput");r&&(r.value="")}catch(r){this.loading=!1;let n=`${this.translateService.instant("artemisApp.team.errors.importFailed")} ${r}`;alert(n)}})}setImportFile(t){if(t.target.files.length){let n=t.target.files;this.importFile=n[0],this.importFileName=this.importFile.name,this.loading=!0}if(!this.importFile)return;let r=this.generateFileReader();r.onload=()=>this.onFileLoadImport(r),r.readAsText(this.importFile),this.changeDetector.detectChanges()}parseCSVFile(t){return new Promise((r,n)=>{(0,mt.parse)(t,{download:!1,header:!0,transformHeader:m=>m.toLowerCase().replace(" ","").replace("_",""),skipEmptyLines:!0,complete:m=>r(m.data),error:m=>n(m)})})}convertCsvEntries(t){return t.map(r=>({registrationNumber:r[S.registrationNumber]||r[S.matrikelNummer]||r[S.matriculationNumber]||void 0,username:r[S.login]||r[S.username]||r[S.user]||r[S.benutzer]||r[S.benutzerName]||void 0,firstName:r[S.firstName]||r[S.vorname]||void 0,lastName:r[S.lastName]||r[S.familyName]||r[S.surname]||r[S.name]||r[S.nachname]||void 0,teamName:r[S.teamName]||r[S.team]||r[S.gruppe]||void 0}))}convertTeams(t){let r=[];return t.forEach((n,m)=>{let u=new ae;u.firstName=n.firstName??"",u.lastName=n.lastName??"",u.visibleRegistrationNumber=n.registrationNumber,u.login=n.username;let b=m+1;if((typeof n.username!="string"||!n.username.trim())&&(typeof n.registrationNumber!="string"||!n.registrationNumber.trim()))throw new Error(this.translateService.instant("artemisApp.team.missingUserNameOrId",{entryNr:b}));if(u.name=`${u.firstName} ${u.lastName}`.trim(),typeof n.teamName!="string"||!n.teamName.trim())throw new Error(this.translateService.instant("artemisApp.team.teamName.missingTeamName",{entryNr:b,studentName:u.name}));let H=n.teamName.replace(/[^0-9a-z]/gi,"").toLowerCase();if(!H.match(nt))throw new Error(this.translateService.instant("artemisApp.team.teamName.pattern",{entryNr:b,teamName:H}));let ce=r.findIndex(O=>O.name===n.teamName);if(ce===-1){let O=new se;O.name=n.teamName,O.shortName=H,O.students=[u],r.push(O)}else r[ce].students=[...r[ce].students,u]}),r}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["jhi-teams-import-from-file-form"]],outputs:{teamsChanged:"teamsChanged"},decls:13,vars:1,consts:[["jhiTranslate","artemisApp.team.sourceFile.label",1,"label-narrow"],["text","artemisApp.team.sourceFile.tooltip",1,"me-1"],[1,"custom-file"],["id","importFileInput","type","file","accept",".json,.csv","placeholder","Upload file...",1,"custom-file-input",3,"change"],["animation","spin",1,"loading-spinner",3,"icon"]],template:function(r,n){r&1&&(o(0,"div"),e(1,`
    `),l(2,"label",0),e(3,`
    `),l(4,"jhi-help-icon",1),e(5,`
    `),h(6,ft,3,1),a(),e(7,`
`),o(8,"div",2),e(9,`
    `),o(10,"input",3),g("change",function(u){return n.setImportFile(u)}),a(),e(11,`
`),a(),e(12,`
`)),r&2&&(s(6),x(n.loading?6:-1))},dependencies:[U,oe,W],styles:["[_nghost-%COMP%]{width:100%}"]})}return i})();var Tt=["instance"],pt=(()=>{class i{courseService=T(Qe);translateService=T(Z);ngbTypeahead;focus$=new N;click$=new N;course;ignoreExercises;selectExercise=new y;searching=new y;searchQueryTooShort=new y;searchFailed=new y;searchNoResults=new y;exercise;exerciseOptions=[];exerciseOptionsLoaded=!1;inputDisplayValue;onAutocompleteSelect=t=>{this.inputDisplayValue=this.searchResultFormatter(t),this.selectExercise.emit(t)};searchInputFormatter=()=>this.inputDisplayValue;searchResultFormatter=t=>{let{title:r,releaseDate:n}=t,m=n?n.format(Ye.format(this.translateService.currentLang,"short-date")):"";return r+(n?` (${m})`:"")};searchMatchesExercise(t,r){return r.title.toLowerCase().includes(t.toLowerCase())}onSearch=t=>{let r=this.click$.pipe(fe(()=>!this.ngbTypeahead.isPopupOpen())),n=this.focus$;return _e(t,n,r).pipe(G(()=>{this.searchNoResults.emit(void 0)}),de(m=>{this.searchFailed.emit(!1),this.searching.emit(!0);let u=this.exerciseOptionsLoaded?V(this.exerciseOptions):this.loadExerciseOptions();return pe([V(m),u])}),G(()=>this.searching.emit(!1)),de(([m,u])=>{let b=H=>this.searchMatchesExercise(m,H);return pe([V(m),V(u&&u.filter(b))])}),G(([m,u])=>{u&&u.length===0&&this.searchNoResults.emit(m)}),k(([,m])=>m||[]),k(m=>$e(m,["releaseDate","id"])))};loadExerciseOptions(){return this.courseService.findWithExercises(this.course.id).pipe(k(t=>t.body.exercises||[])).pipe(k(t=>t.filter(r=>r.teamMode))).pipe(k(t=>t.filter(r=>!this.ignoreExercises.map(n=>n.id).includes(r.id)))).pipe(G(t=>{this.exerciseOptions=t,this.exerciseOptionsLoaded=!0})).pipe(Te(()=>(this.exerciseOptionsLoaded=!1,this.searchFailed.emit(!0),V(null))))}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["jhi-team-exercise-search"]],viewQuery:function(r,n){if(r&1&&X(Tt,7),r&2){let m;q(m=J())&&(n.ngbTypeahead=m.first)}},inputs:{course:"course",ignoreExercises:"ignoreExercises"},outputs:{selectExercise:"selectExercise",searching:"searching",searchQueryTooShort:"searchQueryTooShort",searchFailed:"searchFailed",searchNoResults:"searchNoResults"},decls:4,vars:7,consts:[["instance","ngbTypeahead"],["id","exercise-search-input","type","text",1,"form-control",3,"ngModelChange","selectItem","focus","click","placeholder","ngModel","ngbTypeahead","resultFormatter","inputFormatter"]],template:function(r,n){if(r&1){let m=v();o(0,"input",1,0),I(2,"artemisTranslate"),we("ngModelChange",function(b){return _(m),ye(n.exercise,b)||(n.exercise=b),f(b)}),g("selectItem",function(b){return _(m),f(n.onAutocompleteSelect(b.item))})("focus",function(){return _(m),f(n.focus$.next(""))})("click",function(){return _(m),f(n.click$.next(""))}),a(),e(3,`
`)}r&2&&(p("placeholder",F(2,5,"artemisApp.team.selectExerciseForImport")),Ee("ngModel",n.exercise),p("ngbTypeahead",n.onSearch)("resultFormatter",n.searchResultFormatter)("inputFormatter",n.searchInputFormatter))},dependencies:[z,M,B,P,ke,ie],encapsulation:2})}return i})();var St=["importForm"],dt=(i,c)=>({"btn-primary":i,"btn-default":c}),Ct=i=>[i],le=()=>[],vt=i=>({number:i});function bt(i,c){i&1&&(e(0,`
                `),l(1,"p",18),e(2,`
            `))}function Et(i,c){i&1&&(e(0,`
                `),l(1,"p",19),e(2,`
            `))}function yt(i,c){if(i&1){let t=v();e(0,`
            `),o(1,"div",12),e(2,`
                `),o(3,"div",20),e(4,`
                    `),o(5,"jhi-teams-import-from-file-form",21),g("teamsChanged",function(n){_(t);let m=d();return f(m.onTeamsChanged(n))}),a(),e(6,`
                `),a(),e(7,`
            `),a(),e(8,`
        `)}}function wt(i,c){if(i&1&&(e(0,`
                        `),l(1,"fa-icon",25),e(2,`
                    `)),i&2){let t=d(2);s(),p("icon",t.faSpinner)}}function It(i,c){i&1&&(e(0,`
                        `),o(1,"span",26),e(2,`
                            `),l(3,"span",27),e(4,`
                        `),a(),e(5,`
                    `))}function Ft(i,c){if(i&1&&(e(0,`
                        `),o(1,"span",26),e(2,`
                            `),l(3,"span",28),e(4,`
                            `),o(5,"strong"),e(6),a(),e(7,`
                        `),a(),e(8,`
                    `)),i&2){let t=d(2);s(6),j(t.searchingExercisesNoResultsForQuery)}}function At(i,c){i&1&&(e(0,`
                        `),l(1,"span",29),e(2,`
                    `))}function Nt(i,c){if(i&1){let t=v();e(0,`
            `),o(1,"div",12),e(2,`
                `),o(3,"div",20),e(4,`
                    `),o(5,"div"),e(6,`
                        `),l(7,"label",22),e(8,`
                        `),l(9,"jhi-help-icon",23),e(10,`
                    `),a(),e(11,`
                    `),h(12,wt,3,1)(13,It,6,0)(14,Ft,9,1)(15,At,3,0),a(),e(16,`
                `),o(17,"jhi-team-exercise-search",24),g("selectExercise",function(n){_(t);let m=d();return f(m.onSelectSourceExercise(n))})("searching",function(n){_(t);let m=d();return f(m.searchingExercises=n)})("searchNoResults",function(n){_(t);let m=d();return f(m.searchingExercisesNoResultsForQuery=n)})("searchFailed",function(n){_(t);let m=d();return f(m.searchingExercisesFailed=n)}),a(),e(18,`
            `),a(),e(19,`
        `)}if(i&2){let t=d();s(12),x(t.searchingExercises?12:-1),s(),x(t.searchingExercisesNoResultsForQuery===""?13:-1),s(),x(t.searchingExercisesNoResultsForQuery?14:-1),s(),x(t.searchingExercisesFailed?15:-1),s(2),p("course",t.exercise.course)("ignoreExercises",Q(6,Ct,t.exercise))}}function Dt(i,c){if(i&1&&(e(0,`
                        `),l(1,"fa-icon",25),e(2,`
                    `)),i&2){let t=d(2);s(),p("icon",t.faSpinner)}}function jt(i,c){i&1&&(e(0,`
                        `),l(1,"span",33),e(2,`
                    `))}function Lt(i,c){if(i&1&&(e(0,`
                                `),o(1,"li",35),e(2,`
                                    `),o(3,"div",36),e(4),a(),e(5,`
                                    `),o(6,"div",37),e(7,`
                                        `),o(8,"div",38),e(9),a(),e(10,`
                                        `),l(11,"jhi-team-students-list",39),e(12,`
                                    `),a(),e(13,`
                                `),a(),e(14,`
                            `)),i&2){let t=c.$implicit,r=c.$index,n=d(3);s(4),C(`
                                        `,r+1,`
                                    `),s(2),D("has-error",n.teamShortNamesAlreadyExistingInExercise.includes(t.shortName))("has-success",n.isSourceTeamFreeOfAnyConflicts(t)),s(3),j(t.shortName),s(2),p("students",t.students||L(10,le))("errorStudentLogins",n.problematicLogins)("withRegistrationNumber",!0)("errorStudentRegistrationNumbers",n.problematicRegistrationNumbers)}}function Rt(i,c){i&1&&(e(0,`
                                            `),l(1,"span",42),e(2,`
                                        `))}function Ot(i,c){i&1&&(e(0,`
                                            `),l(1,"span",43),e(2,`
                                        `))}function Vt(i,c){if(i&1&&(e(0,`
                                `),o(1,"li",35),e(2,`
                                    `),o(3,"div",40),e(4,"1"),a(),e(5,`
                                    `),o(6,"div",41),e(7,`
                                        `),h(8,Rt,3,0)(9,Ot,3,0),a(),e(10,`
                                `),a(),e(11,`
                            `)),i&2){let t=d(3);s(6),D("has-warning",(t.sourceTeams==null?null:t.sourceTeams.length)===0),s(2),x(t.showImportFromExercise&&(t.sourceTeams==null?null:t.sourceTeams.length)===0?8:-1),s(),x(!t.showImportFromExercise&&(t.sourceTeams==null?null:t.sourceTeams.length)===0?9:-1)}}function kt(i,c){if(i&1&&(e(0,`
                            `),o(1,"div",44),e(2,`
                                `),l(3,"hr",45),e(4,`
                                `),o(5,"div"),e(6,`
                                    `),l(7,"label",46),e(8,`
                                    `),l(9,"jhi-help-icon",47),e(10,`
                                `),a(),e(11,`
                                `),o(12,"div",48),e(13,`
                                    `),o(14,"div",49),e(15,`
                                        `),o(16,"div"),e(17,`
                                            `),o(18,"div",50),e(19,`
                                                `),o(20,"div",38),e(21),I(22,"artemisTranslate"),a(),e(23,`
                                                `),l(24,"jhi-team-students-list",51),e(25,`
                                            `),a(),e(26,`
                                            `),o(27,"div",52),e(28,`
                                                `),l(29,"label",53),e(30,`
                                                `),l(31,"jhi-help-icon",54),e(32,`
                                            `),a(),e(33,`
                                        `),a(),e(34,`
                                        `),o(35,"div"),e(36,`
                                            `),o(37,"div",50),e(38,`
                                                `),o(39,"div",38),e(40),I(41,"artemisTranslate"),a(),e(42,`
                                                `),l(43,"jhi-team-students-list",51),e(44,`
                                            `),a(),e(45,`
                                            `),o(46,"div",52),e(47,`
                                                `),l(48,"label",55),e(49,`
                                                `),l(50,"jhi-help-icon",56),e(51,`
                                            `),a(),e(52,`
                                        `),a(),e(53,`
                                        `),o(54,"div"),e(55,`
                                            `),o(56,"div",50),e(57,`
                                                `),o(58,"div",38),e(59),I(60,"artemisTranslate"),a(),e(61,`
                                                `),l(62,"jhi-team-students-list",57),e(63,`
                                            `),a(),e(64,`
                                            `),o(65,"div",52),e(66,`
                                                `),l(67,"label",58),e(68,`
                                                `),l(69,"jhi-help-icon",59),e(70,`
                                            `),a(),e(71,`
                                        `),a(),e(72,`
                                    `),a(),e(73,`
                                `),a(),e(74,`
                            `),a(),e(75,`
                        `)),i&2){let t=d(3);s(18),D("has-success",!0),s(3),C("",F(22,11,"artemisApp.team.sourceTeams.legend.teamShortName"),"1"),s(3),p("students",t.sampleTeamForLegend.students||L(17,le)),s(13),D("has-error",!0),s(3),C("",F(41,13,"artemisApp.team.sourceTeams.legend.teamShortName"),"2"),s(3),p("students",t.sampleTeamForLegend.students||L(18,le)),s(16),C("",F(60,15,"artemisApp.team.sourceTeams.legend.teamShortName"),"3"),s(3),p("students",t.sampleTeamForLegend.students||L(19,le))("errorStudentLogins",t.sampleErrorStudentLoginsForLegend)}}function Mt(i,c){if(i&1&&(e(0,`
                    `),o(1,"div"),e(2,`
                        `),o(3,"ul",34),e(4,`
                            `),ve(5,Lt,15,11,null,null,Ce),h(7,Vt,12,4),a(),e(8,`
                        `),h(9,kt,76,20),a(),e(10,`
                `)),i&2){let t=d(2);s(5),be(t.sourceTeams),s(2),x(!t.sourceTeams||t.sourceTeams.length===0?7:-1),s(2),x(t.showLegend?9:-1)}}function Bt(i,c){if(i&1&&(e(0,`
            `),o(1,"div",30),e(2,`
                `),o(3,"div",20),e(4,`
                    `),o(5,"div"),e(6,`
                        `),l(7,"label",31),e(8,`
                        `),l(9,"jhi-help-icon",32),e(10,`
                    `),a(),e(11,`
                    `),h(12,Dt,3,1)(13,jt,3,0),a(),e(14,`
                `),h(15,Mt,11,2),a(),e(16,`
        `)),i&2){let t=d();s(12),x(t.loadingSourceTeams?12:-1),s(),x(t.loadingSourceTeamsFailed?13:-1),s(2),x(t.sourceTeams?15:-1)}}function Pt(i,c){if(i&1){let t=v();e(0,`
            `),l(1,"hr",60),e(2,`
            `),o(3,"div",61),e(4,`
                `),o(5,"div"),e(6,`
                    `),l(7,"label",62),e(8,`
                    `),l(9,"jhi-help-icon",63),e(10,`
                `),a(),e(11,`
                `),o(12,"div",64),e(13,`
                    `),o(14,"label",65),e(15,`
                        `),o(16,"input",66),g("click",function(){_(t);let n=d();return f(n.updateImportStrategy(n.ImportStrategy.PURGE_EXISTING))}),a(),e(17,`
                        `),o(18,"div",67),e(19,`
                            `),o(20,"strong"),e(21),I(22,"artemisTranslate"),l(23,"span",68),e(24,`
                            `),a(),e(25,`
                            `),l(26,"p",69),e(27,`
                        `),a(),e(28,`
                    `),a(),e(29,`
                    `),o(30,"label",65),e(31,`
                        `),o(32,"input",66),g("click",function(){_(t);let n=d();return f(n.updateImportStrategy(n.ImportStrategy.CREATE_ONLY))}),a(),e(33,`
                        `),o(34,"div",67),e(35,`
                            `),o(36,"strong"),e(37),I(38,"artemisTranslate"),l(39,"span",70),e(40,`
                            `),a(),e(41,`
                            `),l(42,"p",71),e(43,`
                        `),a(),e(44,`
                    `),a(),e(45,`
                `),a(),e(46,`
            `),a(),e(47,`
        `)}if(i&2){let t=d();s(16),p("ngModel",t.importStrategy)("value",t.ImportStrategy.PURGE_EXISTING),s(5),C(`
                                `,F(22,10,"artemisApp.team.importStrategy.options.purgeExisting.label"),`
                                `),s(5),D("text-body-secondary",t.importStrategy!==t.ImportStrategy.PURGE_EXISTING),s(6),p("ngModel",t.importStrategy)("value",t.ImportStrategy.CREATE_ONLY),s(5),C(`
                                `,F(38,12,"artemisApp.team.importStrategy.options.createOnly.label"),`
                                `),s(5),D("text-body-secondary",t.importStrategy!==t.ImportStrategy.CREATE_ONLY)}}function zt(i,c){i&1&&(e(0,`
                    `),o(1,"div"),e(2,`
                        `),l(3,"strong",73),e(4,`
                    `),a(),e(5,`
                `))}function Wt(i,c){i&1&&(e(0,`
                                `),l(1,"strong",74),e(2,`
                            `))}function Ut(i,c){i&1&&(e(0,`
                                `),l(1,"strong",75),e(2,`
                            `))}function $t(i,c){if(i&1&&(e(0,`
                        `),o(1,"div"),e(2,`
                            `),h(3,Wt,3,0)(4,Ut,3,0),a(),e(5,`
                    `)),i&2){let t=d(3);s(3),x(t.sourceTeams.length===0?3:-1),s(),x(t.sourceTeams.length>0?4:-1)}}function Ht(i,c){if(i&1&&(e(0,`
                            `),o(1,"div",77),l(2,"strong",78),e(3),a(),e(4,`
                        `)),i&2){let t=d(4);s(3),C(" ",t.numberOfTeamsToBeDeleted,"")}}function Gt(i,c){if(i&1&&(e(0,`
                                    `),o(1,"span",80),e(2),a(),e(3,`
                                `)),i&2){let t=d(5);s(),p("translateValues",Q(2,vt,t.sourceTeams.length)),s(),C(`
                                        (out of `,t.sourceTeams.length,`)
                                    `)}}function Qt(i,c){if(i&1&&(e(0,`
                            `),o(1,"div",77),e(2,`
                                `),l(3,"strong",79),e(4),h(5,Gt,4,4),a(),e(6,`
                        `)),i&2){let t=d(4);s(4),C(" ",t.numberOfTeamsToBeImported,`
                                `),s(),x(t.numberOfTeamsToBeImported<t.sourceTeams.length?5:-1)}}function Yt(i,c){if(i&1&&(e(0,`
                        `),h(1,Ht,5,1)(2,Qt,7,2),o(3,"div"),l(4,"strong",76),e(5),a(),e(6,`
                    `)),i&2){let t=d(3);s(),x(t.numberOfTeamsToBeDeleted>0?1:-1),s(),x(t.numberOfTeamsToBeImported!==t.numberOfTeamsAfterImport?2:-1),s(3),C(" ",t.numberOfTeamsAfterImport,"")}}function Xt(i,c){if(i&1&&(e(0,`
                    `),h(1,$t,6,2)(2,Yt,7,3)),i&2){let t=d(2);s(),x(t.numberOfTeamsToBeImported===0?1:-1),s(),x(t.numberOfTeamsToBeImported>0?2:-1)}}function qt(i,c){if(i&1&&(e(0,`
            `),o(1,"div",72),e(2,`
                `),h(3,zt,6,0)(4,Xt,3,2),a(),e(5,`
        `)),i&2){let t=d();s(3),x(t.studentsAppearInMultipleTeams?3:4)}}function Jt(i,c){if(i&1&&(e(0,`
                `),o(1,"button",81),e(2,`
                    `),l(3,"fa-icon",82),e(4,`
                    `),l(5,"span",83),e(6,`
                    `),l(7,"fa-icon",84),e(8,`
                `),a(),e(9,`
            `)),i&2){let t=d(),r=ue(1);s(),p("disabled",r.invalid||t.isSubmitDisabled),s(2),p("icon",t.faUpload),s(4),p("hidden",!t.isImporting)("icon",t.faCircleNotch)}}function Kt(i,c){if(i&1){let t=v();e(0,`
                `),o(1,"button",85),g("delete",function(){_(t);let n=d();return f(n.purgeAndImportTeams())}),e(2,`
                    `),l(3,"fa-icon",86),e(4,`
                    `),l(5,"span",87),e(6,` +
                    `),l(7,"span",83),e(8,`
                    `),l(9,"fa-icon",84),e(10,`
                `),a(),e(11,`
            `)}if(i&2){let t=d(),r=ue(1);s(),p("disabled",r.invalid||t.isSubmitDisabled)("renderButtonText",!1)("renderButtonStyle",!1)("entityTitle",t.exercise.title||"")("dialogError",t.dialogError$),s(2),p("icon",t.faUpload),s(6),p("hidden",!t.isImporting)("icon",t.faCircleNotch)}}var ut=(()=>{class i{teamService=T($);activeModal=T(Oe);alertService=T(He);ImportStrategy=w;ActionType=Xe;importForm;exercise;teams;sourceExercise;searchingExercises=!1;searchingExercisesFailed=!1;searchingExercisesNoResultsForQuery;sourceTeams;loadingSourceTeams=!1;loadingSourceTeamsFailed=!1;importStrategy;defaultImportStrategy=w.CREATE_ONLY;isImporting=!1;showImportFromExercise=!0;teamShortNamesAlreadyExistingInExercise=[];sourceTeamsFreeOfConflicts=[];conflictingRegistrationNumbersSet=new Set;conflictingLoginsSet=new Set;studentsAppearInMultipleTeams=!1;dialogErrorSource=new N;dialogError$=this.dialogErrorSource.asObservable();faBan=Be;faSpinner=ee;faCircleNotch=Me;faUpload=Pe;ngOnInit(){this.computePotentialConflictsBasedOnExistingTeams()}ngOnDestroy(){this.dialogErrorSource.unsubscribe()}loadSourceTeams(t){this.sourceTeams=void 0,this.loadingSourceTeams=!0,this.loadingSourceTeamsFailed=!1,this.teamService.findAllByExerciseId(t.id).subscribe({next:r=>{this.sourceTeams=r.body,this.computeSourceTeamsFreeOfConflicts(),this.loadingSourceTeams=!1},error:()=>{this.loadingSourceTeams=!1,this.loadingSourceTeamsFailed=!0}})}onSelectSourceExercise(t){this.sourceExercise=t,this.initImportStrategy(),this.loadSourceTeams(t)}initImportStrategy(){this.importStrategy=this.teams.length===0?this.defaultImportStrategy:void 0}computePotentialConflictsBasedOnExistingTeams(){this.teamShortNamesAlreadyExistingInExercise=this.teams.map(n=>n.shortName);let t=te(this.teams,n=>n.students.map(m=>m.login)),r=te(this.teams,n=>n.students.map(m=>m.visibleRegistrationNumber||""));this.conflictingRegistrationNumbersSet=this.addArrayToSet(this.conflictingRegistrationNumbersSet,r),this.conflictingLoginsSet=this.addArrayToSet(this.conflictingLoginsSet,t)}computeSourceTeamsFreeOfConflicts(){this.sourceTeamsFreeOfConflicts=this.sourceTeams.filter(t=>this.isSourceTeamFreeOfAnyConflicts(t))}isSourceTeamFreeOfAnyConflicts(t){return!(this.teamShortNamesAlreadyExistingInExercise.includes(t.shortName)||t.students.some(r=>r.login&&this.conflictingLoginsSet.has(r.login))||!this.showImportFromExercise&&t.students.some(r=>r.visibleRegistrationNumber&&this.conflictingRegistrationNumbersSet.has(r.visibleRegistrationNumber)))}get numberOfConflictFreeSourceTeams(){return this.sourceTeamsFreeOfConflicts.length}get numberOfTeamsToBeDeleted(){switch(this.importStrategy){case w.PURGE_EXISTING:return this.teams.length;case w.CREATE_ONLY:return 0;default:return 0}}get numberOfTeamsToBeImported(){switch(this.importStrategy){case w.PURGE_EXISTING:return this.sourceTeams.length;case w.CREATE_ONLY:return this.numberOfConflictFreeSourceTeams;default:return 0}}get numberOfTeamsAfterImport(){switch(this.importStrategy){case w.PURGE_EXISTING:return this.sourceTeams.length;case w.CREATE_ONLY:return this.teams.length+this.numberOfConflictFreeSourceTeams;default:return 0}}get showImportStrategyChoices(){return this.showImportFromExercise?this.sourceExercise!==void 0&&this.sourceTeams!==void 0&&this.sourceTeams.length>0&&this.teams.length>0:this.sourceTeams!==void 0&&this.sourceTeams.length>0&&this.teams.length>0}updateImportStrategy(t){this.importStrategy=t}get showImportPreviewNumbers(){return this.showImportFromExercise?this.sourceExercise!==void 0&&this.sourceTeams!==void 0&&this.sourceTeams.length>0&&!!this.importStrategy:this.studentsAppearInMultipleTeams||this.sourceTeams!==void 0&&this.sourceTeams.length>0&&!!this.importStrategy}get isSubmitDisabled(){return this.showImportFromExercise?this.isImporting||!this.sourceExercise||!this.sourceTeams||!this.importStrategy||!this.numberOfTeamsToBeImported:!this.sourceTeams||this.sourceTeams.length===0||!this.importStrategy||!this.numberOfTeamsToBeImported||this.studentsAppearInMultipleTeams}clear(){this.activeModal.dismiss("cancel")}purgeAndImportTeams(){this.dialogErrorSource.next(""),this.importTeams()}importTeams(){this.isSubmitDisabled||(this.showImportFromExercise?(this.isImporting=!0,this.teamService.importTeamsFromSourceExercise(this.exercise,this.sourceExercise,this.importStrategy).subscribe({next:t=>this.onSaveSuccess(t),error:t=>this.onSaveError(t)})):this.sourceTeams&&(this.resetConflictingSets(),this.teamService.importTeams(this.exercise,this.sourceTeams,this.importStrategy).subscribe({next:t=>this.onSaveSuccess(t),error:t=>this.onSaveError(t)})))}onTeamsChanged(t){this.initImportStrategy(),this.sourceTeams=t,this.resetConflictingSets();let r=te(t,u=>u.students??[]),n=this.findIdentifiersWhichAppearsMultipleTimes(r,"login"),m=this.findIdentifiersWhichAppearsMultipleTimes(r,"visibleRegistrationNumber");this.studentsAppearInMultipleTeams=n.length>0||m.length>0,this.conflictingRegistrationNumbersSet=this.addArrayToSet(this.conflictingRegistrationNumbersSet,m),this.conflictingLoginsSet=this.addArrayToSet(this.conflictingLoginsSet,n),this.computeSourceTeamsFreeOfConflicts()}findIdentifiersWhichAppearsMultipleTimes(t,r){let n=new Map;return t.forEach(m=>{let u=m[r];u&&(n.get(u)?n.set(u,n.get(u)+1):n.set(u,1))}),[...n.keys()].filter(m=>n.get(m)>1)}onSaveSuccess(t){this.activeModal.close(t.body),this.isImporting=!1,setTimeout(()=>{this.alertService.success("artemisApp.team.importSuccess",{numberOfImportedTeams:this.numberOfTeamsToBeImported})},500)}onSaveError(t){let{errorKey:r,params:n}=t.error;switch(r){case"studentsNotFound":let{registrationNumbers:m,logins:u}=n;this.onStudentsNotFoundError(m,u);break;case"studentsAppearMultipleTimes":let{students:b}=n;this.onStudentsAppearMultipleTimesError(b);break;default:this.alertService.error("artemisApp.team.importError");break}this.isImporting=!1}onStudentsNotFoundError(t,r){let n=t,m=r;n.length>0&&(this.alertService.error("artemisApp.team.errors.registrationNumbersNotFound",{registrationNumbers:n}),this.conflictingRegistrationNumbersSet=this.addArrayToSet(this.conflictingRegistrationNumbersSet,n)),m.length>0&&(this.alertService.error("artemisApp.team.errors.loginsNotFound",{logins:m}),this.conflictingLoginsSet=this.addArrayToSet(this.conflictingLoginsSet,m))}onStudentsAppearMultipleTimesError(t){if(t.length>0){this.studentsAppearInMultipleTeams=!0;let r=t.map(m=>m.first);this.conflictingLoginsSet=this.addArrayToSet(this.conflictingLoginsSet,r);let n=t.map(m=>m.second);this.conflictingRegistrationNumbersSet=this.addArrayToSet(this.conflictingRegistrationNumbersSet,n),this.alertService.error("artemisApp.team.errors.studentsAppearMultipleTimes",{students:t.map(m=>`${m.first}:${m.second}`).join(",")})}}setShowImportFromExercise(t){this.showImportFromExercise=t,this.sourceTeams=void 0,this.sourceExercise=void 0,this.initImportStrategy(),this.isImporting=!1,this.resetConflictingSets()}get sampleTeamForLegend(){let t=new se,r=new ae(1,"ga12abc","John","Doe","john.doe@tum.de");return r.name=`${r.firstName} ${r.lastName}`,t.students=[r],t}get sampleErrorStudentLoginsForLegend(){return this.sampleTeamForLegend.students.map(t=>t.login).filter(t=>t!==void 0)}get showLegend(){return!!(this.sourceTeams&&this.numberOfConflictFreeSourceTeams!==this.sourceTeams.length)}get problematicRegistrationNumbers(){return[...this.conflictingRegistrationNumbersSet]}get problematicLogins(){return[...this.conflictingLoginsSet]}addArrayToSet(t,r){return new Set([...r,...t.values()])}resetConflictingSets(){this.conflictingLoginsSet=new Set,this.conflictingRegistrationNumbersSet=new Set,this.studentsAppearInMultipleTeams=!1,this.computePotentialConflictsBasedOnExistingTeams()}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["jhi-teams-import-dialog"]],viewQuery:function(r,n){if(r&1&&X(St,5),r&2){let m;q(m=J())&&(n.importForm=m.first)}},inputs:{exercise:"exercise",teams:"teams"},decls:62,vars:20,consts:[["editForm","ngForm"],["id","teamsImportDialogForm","name","importForm","role","form","novalidate","",3,"ngSubmit"],[1,"modal-header"],[1,"modal-title"],[3,"jhiTranslate"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],[1,"w100","row","justify-content-center","card-header"],[1,"btn-group"],[1,"btn",3,"click","ngClass"],["jhiTranslate","artemisApp.team.importTeams.fromAnExercise"],["jhiTranslate","artemisApp.team.importTeams.fromAFile"],[1,"form-group"],[1,"modal-footer"],[1,"flex-grow-1","d-flex","justify-content-end"],["type","button","data-dismiss","modal",1,"btn","btn-secondary","cancel",3,"click"],[3,"icon"],["jhiTranslate","entity.action.cancel"],["jhiTranslate","artemisApp.team.importTeams.introTextExercise",1,"intro-text"],["jhiTranslate","artemisApp.team.importTeams.introTextFile",1,"intro-text"],[1,"d-flex","align-items-end"],[3,"teamsChanged"],["jhiTranslate","artemisApp.team.sourceExercise.label",1,"label-narrow"],["text","artemisApp.team.sourceExercise.tooltip",1,"me-1"],["id","teamExercises",3,"selectExercise","searching","searchNoResults","searchFailed","course","ignoreExercises"],["animation","spin",1,"loading-spinner",3,"icon"],[1,"error-message","text-danger"],["jhiTranslate","artemisApp.team.exerciseSearch.noResults"],["jhiTranslate","artemisApp.team.exerciseSearch.noResultsForSearchTerm"],["jhiTranslate","artemisApp.team.exerciseSearch.failed",1,"error-message","text-danger"],[1,"form-group","mt-2"],["jhiTranslate","artemisApp.team.sourceTeams.label",1,"label-narrow"],["text","artemisApp.team.sourceTeams.tooltip",1,"me-1"],["jhiTranslate","artemisApp.team.loadSourceTeams.failed",1,"error-message","text-danger"],[1,"list-group","list-group--teams","mt-2"],[1,"list-group-item-container","d-flex","align-items-center"],[1,"list-group-item-index"],[1,"list-group-item","list-group-item--teams"],[1,"team-name"],[1,"team-students",3,"students","errorStudentLogins","withRegistrationNumber","errorStudentRegistrationNumbers"],[1,"list-group-item-index","text-body-secondary"],[1,"list-group-item","list-group-item--teams","py-5"],["jhiTranslate","artemisApp.team.noTeamsInSourceExercise"],["jhiTranslate","artemisApp.team.noTeamsInFile"],[1,"source-teams-legend-container","mt-4"],[1,"mt-3","mb-2"],["jhiTranslate","artemisApp.team.sourceTeams.legend.label"],["text","artemisApp.team.sourceTeams.legend.tooltip",1,"me-1"],[1,"source-teams-legend-box"],[1,"source-teams-legend","d-flex","justify-content-between"],[1,"list-group-item--teams"],[1,"team-students",3,"students"],[1,"label-with-tooltip"],["jhiTranslate","artemisApp.team.sourceTeams.legend.items.conflictFreeTeam.label"],["text","artemisApp.team.sourceTeams.legend.items.conflictFreeTeam.tooltip",1,"me-1"],["jhiTranslate","artemisApp.team.sourceTeams.legend.items.teamShortNameConflict.label"],["text","artemisApp.team.sourceTeams.legend.items.teamShortNameConflict.tooltip",1,"me-1"],[1,"team-students",3,"students","errorStudentLogins"],["jhiTranslate","artemisApp.team.sourceTeams.legend.items.studentConflict.label"],["text","artemisApp.team.sourceTeams.legend.items.studentConflict.tooltip",1,"me-1"],[1,"my-4"],[1,"form-group","mb-0"],["jhiTranslate","artemisApp.team.importStrategy.label",1,"label-narrow"],["text","artemisApp.team.importStrategy.tooltip",1,"me-1"],[1,"d-flex","flex-column","mt-2","ps-2"],[1,"d-flex","align-items-start"],["type","radio","name","importStrategy",1,"radio-input-with-explanation",3,"click","ngModel","value"],[1,"ms-2","radio-label-with-explanation"],["jhiTranslate","artemisApp.team.importStrategy.options.purgeExisting.badge",1,"badge","bg-danger","ms-1"],["jhiTranslate","artemisApp.team.importStrategy.options.purgeExisting.explanation",1,"explanation","mb-2"],["jhiTranslate","artemisApp.team.importStrategy.options.createOnly.badge",1,"badge","bg-success","ms-1"],["jhiTranslate","artemisApp.team.importStrategy.options.createOnly.explanation",1,"explanation","mb-0"],[1,"flex-shrink-0","me-2","d-flex"],["jhiTranslate","artemisApp.team.importPreview.studentsInMultipleTeams"],["jhiTranslate","artemisApp.team.importPreview.noTeamsToImport"],["jhiTranslate","artemisApp.team.importPreview.noConflictFreeTeamsToImport"],["jhiTranslate","artemisApp.team.importPreview.totalTeamsAfterImport"],[1,"me-3"],["jhiTranslate","artemisApp.team.importPreview.teamsToBeDeleted"],["jhiTranslate","artemisApp.team.importPreview.teamsToBeImported"],["jhiTranslate","artemisApp.team.importPreview.outOf",3,"translateValues"],["type","submit",1,"btn","btn-warning",3,"disabled"],[1,"me-2",3,"icon"],["jhiTranslate","entity.action.to-import"],["animation","spin",1,"ms-1",3,"hidden","icon"],["jhiDeleteButton","","deleteQuestion","artemisApp.team.purgeConfirmationDialog.question","deleteConfirmationText","artemisApp.team.purgeConfirmationDialog.typeNameToConfirm",1,"btn","btn-warning",3,"delete","disabled","renderButtonText","renderButtonStyle","entityTitle","dialogError"],[1,"me-1",3,"icon"],["jhiTranslate","entity.action.purge"]],template:function(r,n){if(r&1){let m=v();o(0,"form",1,0),g("ngSubmit",function(){return _(m),f(n.importTeams())}),e(2,`
    `),o(3,"div",2),e(4,`
        `),o(5,"h4",3),e(6,`
            `),o(7,"span",4),e(8," Import teams into: "),a(),e(9,`
            `),o(10,"span"),e(11),a(),e(12,`
        `),a(),e(13,`
        `),o(14,"button",5),g("click",function(){return _(m),f(n.clear())}),a(),e(15,`
    `),a(),e(16,`
    `),o(17,"div",6),e(18,`
        `),o(19,"div",7),e(20,`
            `),o(21,"div",8),e(22,`
                `),o(23,"div",9),g("click",function(){return _(m),f(n.setShowImportFromExercise(!0))}),e(24,`
                    `),l(25,"span",10),e(26,`
                `),a(),e(27,`
                `),o(28,"div",9),g("click",function(){return _(m),f(n.setShowImportFromExercise(!1))}),e(29,`
                    `),l(30,"span",11),e(31,`
                `),a(),e(32,`
            `),a(),e(33,`
        `),a(),e(34,`
        `),o(35,"div",12),e(36,`
            `),h(37,bt,3,0)(38,Et,3,0),a(),e(39,`
        `),h(40,yt,9,0)(41,Nt,20,8)(42,Bt,17,3)(43,Pt,48,14),a(),e(44,`
    `),o(45,"div",13),e(46,`
        `),h(47,qt,6,1),o(48,"div",14),e(49,`
            `),o(50,"button",15),g("click",function(){return _(m),f(n.clear())}),e(51,`
                `),l(52,"fa-icon",16),e(53,"\xA0"),l(54,"span",17),e(55,`
            `),a(),e(56,`
            `),h(57,Jt,10,4)(58,Kt,12,8),a(),e(59,`
    `),a(),e(60,`
`),a(),e(61,`
`)}r&2&&(s(7),p("jhiTranslate","artemisApp.team.importTeams.dialogTitle"),s(4),j(n.exercise.title),s(12),p("ngClass",xe(14,dt,n.showImportFromExercise,!n.showImportFromExercise)),s(5),p("ngClass",xe(17,dt,!n.showImportFromExercise,n.showImportFromExercise)),s(9),x(n.showImportFromExercise?37:-1),s(),x(n.showImportFromExercise?-1:38),s(2),x(n.showImportFromExercise?-1:40),s(),x(n.showImportFromExercise?41:-1),s(),x(n.sourceExercise||n.sourceTeams?42:-1),s(),x(n.showImportStrategyChoices?43:-1),s(4),x(n.showImportPreviewNumbers&&n.sourceTeams?47:-1),s(5),p("icon",n.faBan),s(5),x(n.importStrategy!==n.ImportStrategy.PURGE_EXISTING?57:-1),s(),x(n.importStrategy===n.ImportStrategy.PURGE_EXISTING?58:-1))},dependencies:[z,Re,M,K,B,je,P,Le,U,Fe,lt,oe,W,pt,me,qe,ie],styles:[`:host{display:block}.loading-spinner{position:relative;top:-2px}.error-message{position:relative;top:-4.5px;line-height:1rem;font-size:.8rem;margin-left:5px}.intro-text{color:var(--secondary)}.list-group--teams{max-height:max(240px,100vh - 740px);overflow-y:auto}.list-group--teams .list-group-item-container{position:relative;margin-bottom:.15rem}.list-group--teams .list-group-item-index{min-width:30px;text-align:right;margin-left:.5rem;margin-right:1rem;font-size:1.1rem;font-weight:500}.list-group-item--teams{display:flex!important;align-items:center;flex-grow:1;overflow-x:hidden;padding:.3rem 1rem;border-radius:.15rem!important;background-color:var(--bs-body-bg)}.list-group-item--teams.has-success{color:var(--artemis-alert-success-color);background-color:var(--artemis-alert-success-background)}.list-group-item--teams.has-warning{color:var(--artemis-alert-warning-color);background-color:var(--artemis-alert-warning-background)}.list-group-item--teams.has-error{background-color:var(--artemis-alert-danger-background)}.list-group-item--teams.has-error .team-name{color:var(--artemis-alert-danger-color)}.source-teams-legend-container{margin-left:calc(30px + 1.5rem);opacity:.4;transition:.2s ease-out opacity}.source-teams-legend-container:hover{opacity:1;transition:.1s ease-in opacity;transition-delay:.2s}.source-teams-legend-box{background:#0064dc0a;padding:12px 15px 0;border-radius:.2rem;border:1px solid rgba(0,0,0,.075)}.source-teams-legend{cursor:default;font-size:12.5px}.source-teams-legend>*{flex-grow:1}.source-teams-legend>*:not(:first-child){margin-left:25px}.source-teams-legend .list-group-item--teams{padding:0 .5rem;font-size:11px;border:1px solid rgba(0,0,0,.125);border-radius:.15rem}.source-teams-legend .list-group-item--teams .team-name{width:unset}.source-teams-legend .list-group-item--teams .team-students{font-size:11px}.source-teams-legend .list-group-item--teams .team-students .student-group-item{padding-top:0;padding-bottom:0}.source-teams-legend .label-with-tooltip{margin-top:3px}.source-teams-legend .label-with-tooltip label{color:var(--secondary)}.team-name{width:135px;margin-right:15px;flex-shrink:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.team-students{flex-grow:1;overflow-x:hidden;font-size:12.5px}.label-narrow{display:inline-block;margin-bottom:.1rem}.radio-input-with-explanation{height:1.35rem}.radio-label-with-explanation .badge{position:relative;top:-1px;font-size:85%}.radio-label-with-explanation .explanation{max-width:66%}.modal-footer{justify-content:space-between}.modal-footer button[disabled]{cursor:not-allowed}
`],encapsulation:2})}return i})();var xt=(()=>{class i{modalService=T(Ve);ButtonType=ne;ButtonSize=A;exercise;teams;buttonSize=A.SMALL;save=new y;faPlus=ze;openTeamsImportDialog(t){t.stopPropagation();let r=this.modalService.open(ut,{keyboard:!0,size:"lg",backdrop:"static"});r.componentInstance.exercise=this.exercise,r.componentInstance.teams=this.teams,r.result.then(n=>this.save.emit(n),()=>{})}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["jhi-teams-import-button"]],inputs:{exercise:"exercise",teams:"teams",buttonSize:"buttonSize"},outputs:{save:"save"},decls:3,vars:4,consts:[[3,"onClick","btnType","btnSize","icon","title"]],template:function(r,n){r&1&&(e(0,`
        `),o(1,"jhi-button",0),g("onClick",function(u){return n.openTeamsImportDialog(u)}),a(),e(2,`
    `)),r&2&&(s(),p("btnType",n.ButtonType.PRIMARY)("btnSize",n.buttonSize)("icon",n.faPlus)("title","artemisApp.team.importTeams.buttonLabel"))},dependencies:[re],encapsulation:2})}return i})();var Zt=()=>["name","shortName","students.name","students.login","owner.name","owner.login"],ht=(i,c,t)=>["/course-management",i,"exercises",c,"teams",t],ei=i=>["/admin","user-management",i];function ti(i,c){if(i&1&&(e(0,`
                `),l(1,"jhi-teams-export-button",13),e(2,`
            `)),i&2){let t=d();s(),p("teams",t.teams)("buttonSize",t.ButtonSize.MEDIUM)}}function ii(i,c){if(i&1){let t=v();e(0,`
                `),o(1,"jhi-teams-import-button",14),g("save",function(n){_(t);let m=d();return f(m.onTeamsImport(n))}),a(),e(2,`
            `)}if(i&2){let t=d();s(),p("exercise",t.exercise)("teams",t.teams)("buttonSize",t.ButtonSize.MEDIUM)}}function ni(i,c){if(i&1){let t=v();e(0,`
                        `),o(1,"span",24),g("click",function(){_(t);let n=d().controls;return f(n.onSort("id"))}),e(2,`
                            `),l(3,"span",25),e(4,`
                            `),l(5,"fa-icon",26),e(6,`
                        `),a(),e(7,`
                    `)}if(i&2){let t=d().controls;s(5),p("icon",t.iconForSortPropField("id"))}}function ri(i,c){if(i&1&&(e(0,`
                        `),o(1,"a",27),e(2),a(),e(3,`
                    `)),i&2){let t=c.value,r=d(2);s(),p("routerLink",he(2,ht,r.exercise==null||r.exercise.course==null?null:r.exercise.course.id,r.exercise==null?null:r.exercise.id,t)),s(),C(`
                            `,t,`
                        `)}}function oi(i,c){if(i&1){let t=v();e(0,`
                        `),o(1,"span",24),g("click",function(){_(t);let n=d().controls;return f(n.onSort("name"))}),e(2,`
                            `),l(3,"span",28),e(4,`
                            `),l(5,"fa-icon",26),e(6,`
                        `),a(),e(7,`
                    `)}if(i&2){let t=d().controls;s(5),p("icon",t.iconForSortPropField("name"))}}function ai(i,c){if(i&1&&(e(0,`
                        `),o(1,"span"),e(2),a(),e(3,`
                    `)),i&2){let t=c.value;s(2),j(t)}}function si(i,c){if(i&1){let t=v();e(0,`
                        `),o(1,"span",24),g("click",function(){_(t);let n=d().controls;return f(n.onSort("shortName"))}),e(2,`
                            `),l(3,"span",29),e(4,`
                            `),l(5,"fa-icon",26),e(6,`
                        `),a(),e(7,`
                    `)}if(i&2){let t=d().controls;s(5),p("icon",t.iconForSortPropField("shortName"))}}function mi(i,c){if(i&1&&(e(0,`
                        `),o(1,"a",27),e(2),a(),e(3,`
                    `)),i&2){let t=c.row,r=d(2);s(),p("routerLink",he(2,ht,r.exercise==null||r.exercise.course==null?null:r.exercise.course.id,r.exercise==null?null:r.exercise.id,t.id)),s(),C(`
                            `,t.shortName,`
                        `)}}function li(i,c){if(i&1){let t=v();e(0,`
                        `),o(1,"span",24),g("click",function(){_(t);let n=d().controls;return f(n.onSort("owner.name"))}),e(2,`
                            `),l(3,"span",30),e(4,`
                            `),l(5,"fa-icon",26),e(6,`
                        `),a(),e(7,`
                    `)}if(i&2){let t=d().controls;s(5),p("icon",t.iconForSortPropField("owner.name"))}}function ci(i,c){if(i&1&&(e(0,`
                            `),o(1,"a",27),e(2),a(),e(3,`
                        `)),i&2){let t=d().value;s(),p("routerLink",Q(2,ei,t==null?null:t.login)),s(),C(" ",t==null?null:t.name,"")}}function pi(i,c){if(i&1&&(e(0,`
                            `),o(1,"a",31),e(2),a(),e(3,`
                        `)),i&2){let t=d().value;s(),p("href","mailto:"+(t==null?null:t.email),Se),s(),j(t==null?null:t.name)}}function di(i,c){i&1&&(e(0,`
                            `),l(1,"span",32),e(2,`
                        `))}function ui(i,c){if(i&1&&(e(0,`
                        `),h(1,ci,4,4)(2,pi,4,2)(3,di,3,0)),i&2){let t=c.value,r=d(2);s(),x(r.isAdmin?1:-1),s(),x(!r.isAdmin&&t?2:-1),s(),x(!r.isAdmin&&!t?3:-1)}}function xi(i,c){i&1&&(e(0,`
                        `),o(1,"span",33),e(2,`
                            `),l(3,"span",34),e(4,`
                        `),a(),e(5,`
                    `))}function hi(i,c){if(i&1&&(e(0,`
                        `),l(1,"jhi-team-students-list",35),e(2,`
                    `)),i&2){let t=c.value,r=d(2);s(),p("students",t)("renderLinks",r.isAdmin)}}function gi(i,c){if(i&1){let t=v();e(0,`
                                `),o(1,"jhi-team-update-button",37),g("save",function(n){_(t);let m=d(3);return f(m.onTeamUpdate(n))}),a(),e(2,`
                            `)}if(i&2){let t=d().row,r=d(2);s(),p("exercise",r.exercise)("team",t)}}function _i(i,c){if(i&1){let t=v();e(0,`
                                `),o(1,"jhi-team-delete-button",38),g("delete",function(n){_(t);let m=d(3);return f(m.onTeamDelete(n))}),a(),e(2,`
                            `)}if(i&2){let t=d().row,r=d(2);s(),p("exercise",r.exercise)("team",t)}}function fi(i,c){if(i&1&&(e(0,`
                        `),o(1,"div",36),e(2,`
                            `),h(3,gi,3,2)(4,_i,3,2),a(),e(5,`
                    `)),i&2){let t=c.row,r=d(2);s(3),x(r.exercise.isAtLeastInstructor||(t.owner==null?null:t.owner.id)===r.currentUser.id?3:-1),s(),x(r.exercise.isAtLeastInstructor?4:-1)}}function Ti(i,c){if(i&1&&(e(0,`
            `),o(1,"ngx-datatable",15),e(2,`
                `),o(3,"ngx-datatable-column",16),e(4,`
                    `),h(5,ni,8,1,"ng-template",17),e(6,`
                    `),h(7,ri,4,6,"ng-template",18),e(8,`
                `),a(),e(9,`
                `),o(10,"ngx-datatable-column",19),e(11,`
                    `),h(12,oi,8,1,"ng-template",17),e(13,`
                    `),h(14,ai,4,1,"ng-template",18),e(15,`
                `),a(),e(16,`
                `),o(17,"ngx-datatable-column",20),e(18,`
                    `),h(19,si,8,1,"ng-template",17),e(20,`
                    `),h(21,mi,4,6,"ng-template",18),e(22,`
                `),a(),e(23,`
                `),o(24,"ngx-datatable-column",21),e(25,`
                    `),h(26,li,8,1,"ng-template",17),e(27,`
                    `),h(28,ui,4,3,"ng-template",18),e(29,`
                `),a(),e(30,`
                `),o(31,"ngx-datatable-column",22),e(32,`
                    `),h(33,xi,6,0,"ng-template",17),e(34,`
                    `),h(35,hi,3,2,"ng-template",18),e(36,`
                `),a(),e(37,`
                `),o(38,"ngx-datatable-column",23),e(39,`
                    `),h(40,fi,6,2,"ng-template",18),e(41,`
                `),a(),e(42,`
            `),a(),e(43,`
        `)),i&2){let t=c.settings;s(),p("limit",t.limit)("sortType",t.sortType)("columnMode",t.columnMode)("headerHeight",t.headerHeight)("footerHeight",t.footerHeight)("rowHeight",t.rowHeight)("rows",t.rows)("rowClass",t.rowClass)("scrollbarH",t.scrollbarH),s(2),p("minWidth",60)("width",60)("maxWidth",60),s(7),p("minWidth",100)("width",120)("maxWidth",160),s(7),p("minWidth",100)("width",120)("maxWidth",160),s(7),p("minWidth",140)("width",160),s(7),p("minWidth",200)("width",600),s(7),p("minWidth",220)("width",220)("maxWidth",220)}}var R=function(i){return i.ALL="all",i.OWN="own",i}(R||{}),pr=(()=>{class i{route=T(Ae);router=T(Ne);exerciseService=T(Ge);teamService=T($);accountService=T(Ue);FilterProp=R;ButtonSize=A;teams=[];teamCriteria={filterProp:R.ALL};filteredTeamsSize=0;exercise;dialogErrorSource=new N;dialogError$=this.dialogErrorSource.asObservable();isLoading;currentUser;isAdmin=!1;constructor(){this.accountService.identity().then(t=>{this.currentUser=t,this.isAdmin=this.accountService.isAdmin()})}ngOnInit(){this.initTeamFilter(),this.loadAll()}ngOnDestroy(){this.dialogErrorSource.unsubscribe()}loadAll(){this.route.params.subscribe(t=>{this.isLoading=!0,this.exerciseService.find(t.exerciseId).subscribe(r=>{this.exercise=r.body;let n=this.teamCriteria.filterProp===R.OWN?this.currentUser.id:void 0;this.teamService.findAllByExerciseId(t.exerciseId,n).subscribe(m=>{this.teams=m.body,this.isLoading=!1})})})}initTeamFilter(){switch(this.route.snapshot.queryParamMap.get("filter")){case R.OWN:this.teamCriteria.filterProp=R.OWN;break;default:this.teamCriteria.filterProp=R.ALL;break}}updateTeamFilter(t){this.teamCriteria.filterProp=t,this.router.navigate([],{relativeTo:this.route,queryParams:{filter:t},queryParamsHandling:"merge",replaceUrl:!0}),this.loadAll()}onTeamUpdate(t){this.upsertTeam(t)}onTeamDelete(t){this.deleteTeam(t)}onTeamsImport(t){this.teams=t}handleTeamsSizeChange=t=>{this.filteredTeamsSize=t};searchResultFormatter=rt;searchTextFromTeam=t=>t.shortName;upsertTeam(t){let r=this.teams.findIndex(n=>n.id===t.id);r===-1?this.teams=[...this.teams,t]:this.teams=Object.assign([],this.teams,{[r]:t})}deleteTeam(t){this.teams=this.teams.filter(r=>r.id!==t.id)}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["jhi-teams"]],decls:46,vars:16,consts:[[1,"d-flex"],[1,"mb-3"],[1,"mb-1"],["jhiTranslate","artemisApp.team.home.title"],[1,"d-flex","align-items-center"],[1,"radio-inline","mb-0","d-flex","align-items-center"],["type","radio",3,"click","ngModel","value"],["jhiTranslate","artemisApp.team.filters.all",1,"ms-1"],[1,"radio-inline","ms-2","mb-0","d-flex","align-items-center"],["jhiTranslate","artemisApp.team.filters.own",1,"ms-1"],[1,"d-flex","ms-auto"],[3,"save","exercise","buttonSize"],["entityType","team","entitiesPerPageTranslation","artemisApp.exercise.resultsPerPage","showAllEntitiesTranslation","artemisApp.exercise.showAllResults","searchPlaceholderTranslation","artemisApp.exercise.searchForTeams",3,"entitiesSizeChange","isLoading","allEntities","searchFields","searchTextFromEntity","searchResultFormatter"],[1,"me-2",3,"teams","buttonSize"],[1,"me-2",3,"save","exercise","teams","buttonSize"],[1,"bootstrap",3,"limit","sortType","columnMode","headerHeight","footerHeight","rowHeight","rows","rowClass","scrollbarH"],["prop","id",3,"minWidth","width","maxWidth"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["prop","name",3,"minWidth","width","maxWidth"],[3,"minWidth","width","maxWidth"],["prop","owner",3,"minWidth","width"],["prop","students",3,"minWidth","width"],["prop","",3,"minWidth","width","maxWidth"],[1,"datatable-header-cell-wrapper",3,"click"],["jhiTranslate","global.field.id",1,"datatable-header-cell-label","bold","sortable"],[3,"icon"],[3,"routerLink"],["jhiTranslate","artemisApp.team.name.label",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.team.shortName.label",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.team.tutor",1,"datatable-header-cell-label","bold","sortable"],[3,"href"],["jhiTranslate","artemisApp.team.detail.noOwner",1,"font-weight-bold"],[1,"datatable-header-cell-wrapper",2,"cursor","text"],["jhiTranslate","artemisApp.team.students",1,"datatable-header-cell-label","bold"],[3,"students","renderLinks"],[1,"w-100","text-end"],[3,"save","exercise","team"],[1,"ms-1",3,"delete","exercise","team"]],template:function(r,n){r&1&&(o(0,"div"),e(1,`
    `),o(2,"div",0),e(3,`
        `),o(4,"div",1),e(5,`
            `),o(6,"h2",2),e(7,`
                `),o(8,"span"),e(9),a(),e(10),l(11,"span",3),e(12,`
            `),a(),e(13,`
            `),o(14,"div",4),e(15,`
                `),o(16,"label",5),e(17,`
                    `),o(18,"input",6),g("click",function(){return n.updateTeamFilter(n.FilterProp.ALL)}),a(),e(19,`
                    `),l(20,"span",7),e(21,`
                `),a(),e(22,`
                `),o(23,"label",8),e(24,`
                    `),o(25,"input",6),g("click",function(){return n.updateTeamFilter(n.FilterProp.OWN)}),a(),e(26,`
                    `),l(27,"span",9),e(28,`
                `),a(),e(29,`
            `),a(),e(30,`
        `),a(),e(31,`
        `),o(32,"div",10),e(33,`
            `),h(34,ti,3,2)(35,ii,3,3),o(36,"jhi-team-update-button",11),g("save",function(u){return n.onTeamUpdate(u)}),a(),e(37,`
        `),a(),e(38,`
    `),a(),e(39,`
    `),o(40,"jhi-data-table",12),g("entitiesSizeChange",function(u){return n.handleTeamsSizeChange(u)}),e(41,`
        `),h(42,Ti,44,25,"ng-template"),e(43,`
    `),a(),e(44,`
`),a(),e(45,`
`)),r&2&&(s(9),C("",n.exercise==null?null:n.exercise.title," - "),s(),C("",n.filteredTeamsSize," "),s(8),p("ngModel",n.teamCriteria.filterProp)("value",n.FilterProp.ALL),s(7),p("ngModel",n.teamCriteria.filterProp)("value",n.FilterProp.OWN),s(9),x(n.exercise!=null&&n.exercise.isAtLeastEditor&&n.teams&&n.teams.length>0?34:-1),s(),x(n.exercise!=null&&n.exercise.isAtLeastEditor?35:-1),s(),p("exercise",n.exercise)("buttonSize",n.ButtonSize.MEDIUM),s(4),p("isLoading",n.isLoading)("allEntities",n.teams)("searchFields",L(15,Zt))("searchTextFromEntity",n.searchTextFromTeam)("searchResultFormatter",n.searchResultFormatter))},dependencies:[U,z,M,K,B,P,st,xt,ot,it,tt,et,Ze,Je,Ke,W,De,me,at],encapsulation:2})}return i})();export{R as a,pr as b};
//# sourceMappingURL=chunk-AVJFEEMQ.js.map
