import{a as q}from"./chunk-RPFDXKEJ.js";import{a as K,c as Z}from"./chunk-U4DJRHYQ.js";import{a as X}from"./chunk-2QXIMOEO.js";import{K as j,b as R,c as k,h as W,m as V}from"./chunk-WA5GEAJB.js";import{d as L}from"./chunk-EDXSOKK5.js";import{c as E,h as $}from"./chunk-CXQURQM5.js";import{Rb as z,wc as B}from"./chunk-Z4VHWOB5.js";import{a as H}from"./chunk-U54OSGNH.js";import{n as D}from"./chunk-IOA4DPXY.js";import{Db as l,Dc as _,Ma as h,Mc as P,Na as g,Oc as m,Sc as T,Tb as b,Za as O,Zb as y,dd as t,ed as v,kc as d,ld as f,mc as F,md as C,nd as S,oc as A,rd as N,sc as u,vc as G,wc as I,xc as o,yc as a,zc as c}from"./chunk-5LC5EQRR.js";var w=s=>({"form-control":!0,"is-invalid":s}),U=(s,p)=>p.id;function Y(s,p){s&1&&(t(0,`
    `),o(1,"div",6),t(2,`
        `),c(3,"span",7),t(4,`
    `),a(),t(5,`
`))}function ee(s,p){s&1&&(t(0,`
                                    `),o(1,"th",22),t(2,`
                                        `),c(3,"label",23),t(4,`
                                        `),c(5,"jhi-help-icon",24),t(6,`
                                    `),a(),t(7,`
                                `))}function te(s,p){if(s&1){let e=_();t(0,`
                                            `),o(1,"input",12),S("ngModelChange",function(n){h(e);let r=m().$implicit;return C(r.title,n)||(r.title=n),g(n)}),a(),t(2,`
                                        `)}if(s&2){let e=m().$implicit;l(),d("ngClass",N(4,w,(e==null||e.title==null?null:e.title.length)===0))("id","exercise-"+e.id+"-title")("name","exercise-"+e.id+"-title"),f("ngModel",e.title)}}function ie(s,p){if(s&1){let e=_();t(0,`
                                            `),o(1,"input",30),S("ngModelChange",function(n){h(e);let r=m().$implicit;return C(r.title,n)||(r.title=n),g(n)}),P("change",function(){h(e);let n=m().$implicit,r=m().$implicit,x=m();return g(x.checkForDuplicatedTitlesOrShortNamesOfProgrammingExercise(n,r,!0))}),a(),t(2,`
                                        `)}if(s&2){let e=m().$implicit,i=m(2);l(),A(N(6,w,!i.validateTitleOfProgrammingExercise(e))),d("id","exercise-"+e.id+"-title")("name","exercise-"+e.id+"-title")("placeholder",i.getBlocklistTitleOfProgrammingExercise(e.id)),f("ngModel",e.title)}}function ne(s,p){if(s&1){let e=_();t(0,`
                                        `),o(1,"td"),t(2,`
                                            `),o(3,"input",31),S("ngModelChange",function(n){h(e);let r=m().$implicit;return C(r.shortName,n)||(r.shortName=n),g(n)}),P("change",function(){h(e);let n=m().$implicit,r=m().$implicit,x=m();return g(x.checkForDuplicatedTitlesOrShortNamesOfProgrammingExercise(n,r,!1))}),a(),t(4,`
                                        `),a(),t(5,`
                                    `)}if(s&2){let e=m().$implicit,i=m(2);l(3),d("ngClass",N(5,w,!i.validateShortNameOfProgrammingExercise(e)))("id","programming-exercise-"+e.id+"-shortName")("name","programming-exercise-"+e.id+"-shortName")("placeholder",i.getBlocklistShortNameOfProgrammingExercise(e.id)),f("ngModel",e.shortName)}}function re(s,p){if(s&1){let e=_();t(0,`
                                `),o(1,"tr",25),t(2,`
                                    `),o(3,"td"),t(4,`
                                        `),o(5,"h4",26),t(6,`
                                            `),o(7,"input",27),P("click",function(){let n=h(e).$implicit,r=m().$implicit,x=m();return g(x.onSelectExercise(n,r))}),a(),t(8,`
                                        `),a(),t(9,`
                                    `),a(),t(10,`
                                    `),o(11,"td"),t(12),a(),t(13,`
                                    `),o(14,"td"),t(15,`
                                        `),c(16,"fa-icon",28),t(17,`
                                    `),a(),t(18,`
                                    `),o(19,"td"),t(20,`
                                        `),y(21,te,3,6)(22,ie,3,8),a(),t(23,`
                                    `),y(24,ne,6,7),o(25,"td"),t(26,`
                                        `),c(27,"jhi-difficulty-badge",29),t(28,`
                                    `),a(),t(29,`
                                `),a(),t(30,`
                            `)}if(s&2){let e=p.$implicit,i=m().$implicit,n=m();l(),d("id","exercise-"+e.id),l(6),d("checked",n.exerciseIsSelected(e,i)),l(5),v(e.id),l(4),d("icon",n.getExerciseIcon(e.type)),l(5),u(e.type!==n.exerciseType.PROGRAMMING?21:-1),l(),u(e.type===n.exerciseType.PROGRAMMING?22:-1),l(2),u(e.type===n.exerciseType.PROGRAMMING?24:-1),l(3),d("exercise",e)("showNoLevel",!1)}}function oe(s,p){if(s&1){let e=_();t(0,`
            `),o(1,"tr"),t(2,`
                `),o(3,"td"),t(4,`
                    `),t(5,`
                    `),o(6,"table",8),t(7,`
                        `),o(8,"tbody"),t(9,`
                            `),o(10,"tr",2),t(11,`
                                `),o(12,"td",9),t(13,`
                                    `),o(14,"label",10),t(15,"Title"),a(),t(16,`
                                `),a(),t(17,`
                                `),o(18,"td",11),t(19,`
                                    `),o(20,"input",12),S("ngModelChange",function(n){let r=h(e).$implicit;return C(r.title,n)||(r.title=n),g(n)}),a(),t(21,`
                                `),a(),t(22,`
                            `),a(),t(23,`
                            `),o(24,"tr"),t(25,`
                                `),o(26,"td",9),t(27,`
                                    `),c(28,"label",13),t(29,`
                                `),a(),t(30,`
                                `),o(31,"td"),t(32,`
                                    `),o(33,"input",14),S("ngModelChange",function(n){let r=h(e).$implicit;return C(r.isMandatory,n)||(r.isMandatory=n),g(n)}),a(),t(34,`
                                `),a(),t(35,`
                            `),a(),t(36,`
                        `),a(),t(37,`
                    `),a(),t(38,`
                `),a(),t(39,`
                `),o(40,"td"),t(41,`
                    `),t(42,`
                    `),o(43,"table",15),t(44,`
                        `),o(45,"thead"),t(46,`
                            `),o(47,"tr"),t(48,`
                                `),c(49,"th",16),t(50,`
                                `),o(51,"th",17),t(52,"#"),a(),t(53,`
                                `),c(54,"th",18),t(55,`
                                `),o(56,"th"),t(57,`
                                    `),c(58,"label",19),t(59,`
                                    `),c(60,"jhi-help-icon",20),t(61,`
                                `),a(),t(62,`
                                `),y(63,ee,8,0),c(64,"th",21),t(65,`
                            `),a(),t(66,`
                        `),a(),t(67,`
                        `),o(68,"tbody"),t(69,`
                            `),G(70,re,31,9,null,null,U),a(),t(72,`
                    `),a(),t(73,`
                `),a(),t(74,`
            `),a(),t(75,`
        `)}if(s&2){let e=p.$implicit,i=m();l(),F("exerciseGroupNotSelected",!i.exerciseGroupContainsExercises(e)),l(19),T("id","exerciseGroup-",e.id,"-title"),T("name","exerciseGroup-",e.id,"-title"),d("ngClass",N(16,w,(e==null||e.title==null?null:e.title.length)===0)),f("ngModel",e.title),l(8),T("for","exerciseGroup-",e.id,"-mandatory'"),l(5),d("id","exerciseGroup-"+e.id+"-mandatory")("name","exerciseGroup-"+e.id+"-mandatory"),f("ngModel",e.isMandatory),l(23),A(i.exerciseGroupContainsProgrammingExercises(e)?"mediumbox":"largebox"),l(7),u(i.exerciseGroupContainsProgrammingExercises(e)?63:-1),l(7),I(e.exercises)}}var fe=(()=>{class s{exam=O.required();importInSameCourse=O(!1);selectedExercises=new Map;titleAndShortNameOfProgrammingExercises=new Map;exercisesWithDuplicatedTitles=new Map;exercisesWithDuplicatedShortNames=new Map;exerciseType=E;containsProgrammingExercises=new Map;SHORT_NAME_REGEX=RegExp("(^(?![\\s\\S]))|^[a-zA-Z][a-zA-Z0-9]*$|"+K);faCheckDouble=z;faFont=B;getExerciseIcon=$;ngOnInit(){this.initializeSelectedExercisesAndContainsProgrammingExercisesMaps(),this.importInSameCourse()&&this.initializeTitleAndShortNameMap()}updateMapsAfterRejectedImportDueToInvalidProjectKey(){this.titleAndShortNameOfProgrammingExercises.clear(),this.initializeTitleAndShortNameMap(),this.selectedExercises.clear(),this.containsProgrammingExercises.clear(),this.initializeSelectedExercisesAndContainsProgrammingExercisesMaps()}updateMapsAfterRejectedImportDueToDuplicatedShortNameOrTitle(){this.titleAndShortNameOfProgrammingExercises.clear(),this.selectedExercises.clear(),this.containsProgrammingExercises.clear(),this.initializeSelectedExercisesAndContainsProgrammingExercisesMaps()}initializeSelectedExercisesAndContainsProgrammingExercisesMaps(){this.exam().exerciseGroups?.forEach(i=>{this.selectedExercises.set(i,new Set(i.exercises))});let e=new Set;this.exam().exerciseGroups.forEach(i=>{let n=!!i.exercises?.some(r=>r.type===E.PROGRAMMING);this.containsProgrammingExercises.set(i,n),i.exercises?.forEach(r=>{r.type===E.PROGRAMMING&&r.title&&(e.has(r.title)?(this.titleAndShortNameOfProgrammingExercises.set(r.id,[r.title,""]),r.title=""):(e.add(r.title),this.titleAndShortNameOfProgrammingExercises.delete(r.id)))})})}initializeTitleAndShortNameMap(){this.selectedExercises.forEach(e=>{e.forEach(i=>{i.type===E.PROGRAMMING&&this.titleAndShortNameOfProgrammingExercises.set(i.id,[i.title,i.shortName])})})}onSelectExercise(e,i){this.selectedExercises.get(i).has(e)?(this.selectedExercises.get(i).delete(e),this.exercisesWithDuplicatedTitles.delete(e.id)&&this.removeProgrammingExerciseFromDuplicates(e.title,!0),this.exercisesWithDuplicatedShortNames.delete(e.id)&&this.removeProgrammingExerciseFromDuplicates(e.shortName,!1)):(this.selectedExercises.get(i).add(e),e.type===E.PROGRAMMING&&(this.checkForDuplicatedTitlesOrShortNamesOfProgrammingExercise(e,i,!0),this.checkForDuplicatedTitlesOrShortNamesOfProgrammingExercise(e,i,!1)))}exerciseIsSelected(e,i){return this.selectedExercises.get(i).has(e)}exerciseGroupContainsExercises(e){return this.selectedExercises.get(e).size>0}exerciseGroupContainsProgrammingExercises(e){return!!this.containsProgrammingExercises.get(e)}getBlocklistTitleOfProgrammingExercise(e){let i=this.titleAndShortNameOfProgrammingExercises.get(e)?.first();return i||""}getBlocklistShortNameOfProgrammingExercise(e){let i=this.titleAndShortNameOfProgrammingExercises.get(e)?.last();return i||""}mapSelectedExercisesToExerciseGroups(){let e=[];return this.selectedExercises?.forEach((i,n)=>{i.size>0&&(n.exercises=Array.from(i.values()),e.push(n))}),e}validateTitleOfProgrammingExercise(e){return!!e.title?.length&&Z.test(e.title)&&!this.exercisesWithDuplicatedTitles.has(e.id)&&(e.title!==this.getBlocklistTitleOfProgrammingExercise(e.id)||this.getBlocklistShortNameOfProgrammingExercise(e.id)==="")}validateShortNameOfProgrammingExercise(e){return e.shortName?.length>2&&this.SHORT_NAME_REGEX.test(e.shortName)&&!this.exercisesWithDuplicatedShortNames.has(e.id)&&e.shortName!==this.getBlocklistShortNameOfProgrammingExercise(e.id)}checkForDuplicatedTitlesOrShortNamesOfProgrammingExercise(e,i,n){if(!this.exerciseIsSelected(e,i))return;let r=n?this.exercisesWithDuplicatedTitles:this.exercisesWithDuplicatedShortNames,x=!1;this.selectedExercises.forEach(Q=>{Q.forEach(M=>{M.type===E.PROGRAMMING&&M!==e&&(n&&M.title===e.title||!n&&M.shortName===e.shortName)&&(x=!0,r.set(M.id,n?e.title:e.shortName))})});let J=r.get(e.id);r.delete(e.id)&&this.removeProgrammingExerciseFromDuplicates(J,n),x&&r.set(e.id,n?e.title:e.shortName)}removeProgrammingExerciseFromDuplicates(e,i){let n=i?this.exercisesWithDuplicatedTitles:this.exercisesWithDuplicatedShortNames,r=Array.from(n.keys()).filter(x=>n.get(x)===e);r.length<=1&&r.forEach(x=>n.delete(x))}validateUserInput(){let e=!0;return this.selectedExercises?.forEach((i,n)=>{n.title?.length>0||(e=!1),i.size>0&&i.forEach(r=>{if(!e)return!1;r.type===E.PROGRAMMING?e=this.validateTitleOfProgrammingExercise(r)&&this.validateShortNameOfProgrammingExercise(r):e=r.title?.length>0})}),e}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=b({type:s,selectors:[["jhi-exam-exercise-import"]],inputs:{exam:[1,"exam"],importInSameCourse:[1,"importInSameCourse"]},decls:25,vars:1,consts:[[1,"table","table-striped"],[1,"thead-dark","align-center"],[1,"w-25"],["jhiTranslate","artemisApp.examScores.titleExerciseGroupColumn"],["text","artemisApp.examManagement.exerciseGroup.importModal.exerciseGroupTooltip"],["jhiTranslate","artemisApp.examScores.titleExerciseColumn",1,"w-75"],[1,"alert","alert-info"],["jhiTranslate","artemisApp.examManagement.exerciseGroup.importModal.infoProgrammingExercises"],[1,"table","table-hover","table-striped"],[1,"justify-content-center"],["for","'exerciseGroup-' + exerciseGroup.id + '-title'","jhiTranslate","artemisApp.examManagement.exerciseGroup.title",1,"form-check-label"],[1,"w-75"],["type","text",3,"ngModelChange","ngClass","id","name","ngModel"],["jhiTranslate","artemisApp.examManagement.exerciseGroup.mandatory",1,"form-check-label",3,"for"],["type","checkbox",1,"form-check-input",3,"ngModelChange","id","name","ngModel"],[1,"table","table-hover","table-striped","text-center"],["jhiTranslate","artemisApp.examManagement.exerciseGroup.importModal.selected",1,"smallbox"],[1,"smallbox"],["jhiTranslate","artemisApp.exercise.type",1,"smallbox"],["jhiTranslate","artemisApp.exercise.title"],["text","artemisApp.examManagement.exerciseGroup.importModal.exerciseTitleTooltip"],["jhiTranslate","artemisApp.exercise.difficulty",1,"smallbox"],[1,"mediumbox"],["jhiTranslate","artemisApp.exercise.shortName",1,"label-narrow"],["text","artemisApp.examManagement.exerciseGroup.importModal.shortNameTooltip"],[3,"id"],[1,"form-check","d-flex","justify-content-center"],["type","checkbox",1,"form-check-input",3,"click","checked"],["size","2x",3,"icon"],[1,"me-1",3,"exercise","showNoLevel"],["type","text",3,"ngModelChange","change","id","name","placeholder","ngModel"],["type","text",3,"ngModelChange","change","ngClass","id","name","placeholder","ngModel"]],template:function(i,n){i&1&&(y(0,Y,6,0),o(1,"table",0),t(2,`
    `),o(3,"thead",1),t(4,`
        `),o(5,"tr"),t(6,`
            `),o(7,"th",2),t(8,`
                `),c(9,"label",3),t(10,`
                `),c(11,"jhi-help-icon",4),t(12,`
            `),a(),t(13,`
            `),c(14,"th",5),t(15,`
        `),a(),t(16,`
    `),a(),t(17,`
    `),o(18,"tbody"),t(19,`
        `),t(20,`
        `),G(21,oe,76,18,null,null,U),a(),t(23,`
`),a(),t(24,`
`)),i&2&&(u(n.containsProgrammingExercises.size!==0?0:-1),l(21),I(n.exam().exerciseGroups))},dependencies:[H,X,j,k,R,W,V,D,L,q],styles:[".exerciseGroupNotSelected[_ngcontent-%COMP%]{background-color:gray}.smallbox[_ngcontent-%COMP%]{width:50px}.mediumbox[_ngcontent-%COMP%]{width:200px}.largebox[_ngcontent-%COMP%]{width:400px}.flex[_ngcontent-%COMP%]{flex-wrap:wrap}"]})}return s})();export{fe as a};
//# sourceMappingURL=chunk-TWQT4PWU.js.map
