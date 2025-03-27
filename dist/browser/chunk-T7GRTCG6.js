import{c as I}from"./chunk-5MVJAZRV.js";import{K as U}from"./chunk-VZRSC3LP.js";import{A as Q,B as W,C as B,K as F,b as V,c as A,h as R,m as z,o as k}from"./chunk-WA5GEAJB.js";import{a as N}from"./chunk-K3W6YFKH.js";import{d as L}from"./chunk-EDXSOKK5.js";import{c as y,d as q}from"./chunk-CXQURQM5.js";import{kb as j}from"./chunk-Z4VHWOB5.js";import{a as O}from"./chunk-U54OSGNH.js";import{Db as a,Dc as w,Ma as c,Mc as M,Na as g,Rc as v,Tb as D,Yc as C,Zc as f,_c as h,c as T,dd as e,f as _,kc as l,ld as b,md as x,nd as S,xc as t,yc as n,yd as P,zc as m,zd as E}from"./chunk-5LC5EQRR.js";function ee(u,G,d,s){return u===void 0?new T(i=>{i.complete()}):new T(i=>{G.findAllCategoriesOfCourse(u).subscribe({next:o=>{let p=d.convertExerciseCategoriesAsStringFromServer(o.body);i.next(p),i.complete()},error:o=>{I(s,o),i.complete()}})})}var X=["continuous_plagiarism_control_enabled"],H=["exercise.plagiarismDetectionConfig!.similarityThreshol"],J=["exercise.plagiarismDetectionConfig.minimumScore"],K=["exercise.plagiarismDetectionConfig.minimumSize"],Y=["exercise.plagiarismDetectionConfig!.continuousPlagiarismControlPlagiarismCaseStudentResponsePeriod"],ue=(()=>{class u{exercise;fieldCPCEnabled;fieldThreshhold;fieldMinScore;fieldMinSize;fieldResponsePeriod;fieldCPCEnabledSubscription;fieldTreshholdSubscription;fieldMinScoreSubscription;fieldMinSizeSubscription;fieldResponsePeriodSubscription;isCPCCollapsed=!0;minimumSizeTooltip;formValid;formValidChanges=new _;faQuestionCircle=j;ngOnInit(){this.minimumSizeTooltip=this.getMinimumSizeTooltip(),this.exercise.plagiarismDetectionConfig||(this.exercise.plagiarismDetectionConfig=q)}ngAfterViewInit(){this.fieldCPCEnabledSubscription=this.fieldCPCEnabled?.valueChanges?.subscribe(()=>this.calculateFormValid()),this.fieldTreshholdSubscription=this.fieldThreshhold?.valueChanges?.subscribe(()=>this.calculateFormValid()),this.fieldMinScoreSubscription=this.fieldMinScore?.valueChanges?.subscribe(()=>this.calculateFormValid()),this.fieldMinSizeSubscription=this.fieldMinSize?.valueChanges?.subscribe(()=>this.calculateFormValid()),this.fieldResponsePeriodSubscription=this.fieldResponsePeriod?.valueChanges?.subscribe(()=>this.calculateFormValid())}ngOnDestroy(){this.fieldCPCEnabledSubscription?.unsubscribe(),this.fieldTreshholdSubscription?.unsubscribe(),this.fieldMinScoreSubscription?.unsubscribe(),this.fieldMinSizeSubscription?.unsubscribe(),this.fieldResponsePeriodSubscription?.unsubscribe()}calculateFormValid(){this.formValid=!!(!this.exercise.plagiarismDetectionConfig?.continuousPlagiarismControlEnabled||this.fieldThreshhold?.valid&&this.fieldMinScore?.valid&&this.fieldMinSize?.valid&&this.fieldResponsePeriod?.valid),this.formValidChanges.next(this.formValid)}toggleCPCEnabled(){let d=this.exercise.plagiarismDetectionConfig,s=!d.continuousPlagiarismControlEnabled;d.continuousPlagiarismControlEnabled=s,d.continuousPlagiarismControlPostDueDateChecksEnabled=s}getMinimumSizeTooltip(){switch(this.exercise.type){case y.PROGRAMMING:return"artemisApp.plagiarism.minimumSizeTooltipProgrammingExercise";case y.TEXT:return"artemisApp.plagiarism.minimumSizeTooltipTextExercise";case y.MODELING:return"artemisApp.plagiarism.minimumSizeTooltipModelingExercise"}}static \u0275fac=function(s){return new(s||u)};static \u0275cmp=D({type:u,selectors:[["jhi-exercise-update-plagiarism"]],viewQuery:function(s,i){if(s&1&&(C(X,5),C(H,5),C(J,5),C(K,5),C(Y,5)),s&2){let o;f(o=h())&&(i.fieldCPCEnabled=o.first),f(o=h())&&(i.fieldThreshhold=o.first),f(o=h())&&(i.fieldMinScore=o.first),f(o=h())&&(i.fieldMinSize=o.first),f(o=h())&&(i.fieldResponsePeriod=o.first)}},inputs:{exercise:"exercise"},decls:108,vars:33,consts:[["continuous_plagiarism_control_enabled","ngModel"],["exercise.plagiarismDetectionConfig.continuousPlagiarismControlPostDueDateChecksEnabled","ngModel"],["exercise.plagiarismDetectionConfig!.similarityThreshol","ngModel"],["exercise.plagiarismDetectionConfig.minimumScore","ngModel"],["exercise.plagiarismDetectionConfig.minimumSize","ngModel"],["exercise.plagiarismDetectionConfig!.continuousPlagiarismControlPlagiarismCaseStudentResponsePeriod","ngModel"],[1,"form-group","col-auto","border","border-warning","p-3"],["type","button",1,"btn","btn-secondary","me-1",3,"click","jhiTranslate"],["placement","bottom auto",3,"icon","ngbTooltip"],[1,"badge","rounded-pill","text-bg-warning","ms-1"],[1,"row",3,"hidden"],[1,"plagiarism-option"],[1,"form-check","form-check-inline"],["type","checkbox","id","continuous_plagiarism_control_enabled","name","exercise.plagiarismDetectionConfig.continuousPlagiarismControlEnabled",1,"plagiarism-option-checkbox","form-check-input",3,"ngModelChange","ngModel"],["jhiTranslate","artemisApp.plagiarism.continuousPlagiarismControlEnabled",1,"plagiarism-option-label"],["type","checkbox","id","continuous_plagiarism_control_post_due_date_checks_enabled","name","exercise.plagiarismDetectionConfig.continuousPlagiarismControlPostDueDateChecksEnabled",1,"plagiarism-option-checkbox","form-check-input",3,"ngModelChange","disabled","ngModel"],["jhiTranslate","artemisApp.plagiarism.continuousPlagiarismControlPostDueDateChecksEnabled",1,"plagiarism-option-label"],[1,"row"],[1,"col"],[1,"form-group"],["jhiTranslate","artemisApp.plagiarism.similarityThreshold",1,"form-control-label"],["type","number","required","","min","0","max","100","step","5","id","plagiarism-similarity-threshold","name","plagiarismChecksSimilarityThresholdPercentage",1,"form-control",3,"ngModelChange","ngModel","disabled"],["jhiTranslate","artemisApp.plagiarism.minimumScore",1,"form-control-label"],["type","number","required","","min","0","max","100","id","plagiarism-minimum-score","name","exercise.plagiarismDetectionConfig.minimumScore",1,"form-control",3,"ngModelChange","ngModel","disabled"],["jhiTranslate","artemisApp.plagiarism.minimumSize",1,"form-control-label"],["type","number","required","","min","0","max","100","id","plagiarism-minimum-size","name","exercise.plagiarismDetectionConfig.minimumSize",1,"form-control",3,"ngModelChange","ngModel","disabled"],["jhiTranslate","artemisApp.plagiarism.plagiarismCaseResponsePeriod",1,"form-control-label"],["type","number","required","","min","7","max","31","step","1","id","plagiarism-case-response-period","name","continuousPlagiarismControlPlagiarismCaseStudentResponsePeriod",1,"form-control",3,"ngModelChange","ngModel","disabled"]],template:function(s,i){if(s&1){let o=w();t(0,"div",6),e(1,`
    `),e(2,`
    `),t(3,"button",7),M("click",function(){return c(o),g(i.isCPCCollapsed=!i.isCPCCollapsed)}),n(),e(4,`
    `),m(5,"fa-icon",8),P(6,"artemisTranslate"),e(7,`
    `),t(8,"span",9),e(9,"BETA"),n(),e(10,`
    `),t(11,"div",10),e(12,`
        `),t(13,"div",11),e(14,`
            `),t(15,"div",12),e(16,`
                `),t(17,"input",13,0),M("ngModelChange",function(){return c(o),g(i.toggleCPCEnabled())}),n(),e(19,`
                `),m(20,"div",14),e(21,`
            `),n(),e(22,`
        `),n(),e(23,`
        `),t(24,"div",11),e(25,`
            `),t(26,"div",12),e(27,`
                `),t(28,"input",15,1),S("ngModelChange",function(r){return c(o),x(i.exercise.plagiarismDetectionConfig.continuousPlagiarismControlPostDueDateChecksEnabled,r)||(i.exercise.plagiarismDetectionConfig.continuousPlagiarismControlPostDueDateChecksEnabled=r),g(r)}),n(),e(30,`
                `),m(31,"div",16),e(32,`
            `),n(),e(33,`
        `),n(),e(34,`
        `),t(35,"div",17),e(36,`
            `),t(37,"div",18),e(38,`
                `),t(39,"div",19),e(40,`
                    `),t(41,"div"),e(42,`
                        `),m(43,"label",20),e(44,`
                        `),m(45,"fa-icon",8),P(46,"artemisTranslate"),e(47,`
                    `),n(),e(48,`
                    `),t(49,"input",21,2),S("ngModelChange",function(r){return c(o),x(i.exercise.plagiarismDetectionConfig.similarityThreshold,r)||(i.exercise.plagiarismDetectionConfig.similarityThreshold=r),g(r)}),n(),e(51,`
                `),n(),e(52,`
            `),n(),e(53,`
            `),t(54,"div",18),e(55,`
                `),t(56,"div",19),e(57,`
                    `),t(58,"div"),e(59,`
                        `),m(60,"label",22),e(61,`
                        `),m(62,"fa-icon",8),P(63,"artemisTranslate"),e(64,`
                    `),n(),e(65,`
                    `),t(66,"input",23,3),S("ngModelChange",function(r){return c(o),x(i.exercise.plagiarismDetectionConfig.minimumScore,r)||(i.exercise.plagiarismDetectionConfig.minimumScore=r),g(r)}),n(),e(68,`
                `),n(),e(69,`
            `),n(),e(70,`
            `),t(71,"div",18),e(72,`
                `),t(73,"div",19),e(74,`
                    `),t(75,"div"),e(76,`
                        `),m(77,"label",24),e(78,`
                        `),m(79,"fa-icon",8),P(80,"artemisTranslate"),e(81,`
                    `),n(),e(82,`
                    `),t(83,"input",25,4),S("ngModelChange",function(r){return c(o),x(i.exercise.plagiarismDetectionConfig.minimumSize,r)||(i.exercise.plagiarismDetectionConfig.minimumSize=r),g(r)}),n(),e(85,`
                `),n(),e(86,`
            `),n(),e(87,`
            `),t(88,"div",18),e(89,`
                `),t(90,"div",19),e(91,`
                    `),t(92,"div"),e(93,`
                        `),m(94,"label",26),e(95,`
                        `),m(96,"fa-icon",8),P(97,"artemisTranslate"),e(98,`
                    `),n(),e(99,`
                    `),t(100,"input",27,5),S("ngModelChange",function(r){return c(o),x(i.exercise.plagiarismDetectionConfig.continuousPlagiarismControlPlagiarismCaseStudentResponsePeriod,r)||(i.exercise.plagiarismDetectionConfig.continuousPlagiarismControlPlagiarismCaseStudentResponsePeriod=r),g(r)}),n(),e(102,`
                `),n(),e(103,`
            `),n(),e(104,`
        `),n(),e(105,`
    `),n(),e(106,`
`),n(),e(107,`
`)}s&2&&(a(3),v("jhiTranslate",i.isCPCCollapsed?"artemisApp.plagiarism.showContinuousPlagiarismControl":"artemisApp.plagiarism.hideContinuousPlagiarismControl"),a(2),l("icon",i.faQuestionCircle)("ngbTooltip",E(6,23,"artemisApp.plagiarism.continuousPlagiarismControlTooltip")),a(6),l("hidden",i.isCPCCollapsed),a(6),l("ngModel",i.exercise.plagiarismDetectionConfig.continuousPlagiarismControlEnabled),a(11),l("disabled",!(i.exercise.plagiarismDetectionConfig!=null&&i.exercise.plagiarismDetectionConfig.continuousPlagiarismControlEnabled)),b("ngModel",i.exercise.plagiarismDetectionConfig.continuousPlagiarismControlPostDueDateChecksEnabled),a(17),l("icon",i.faQuestionCircle)("ngbTooltip",E(46,25,"artemisApp.plagiarism.similarityThresholdTooltip")),a(4),b("ngModel",i.exercise.plagiarismDetectionConfig.similarityThreshold),l("disabled",!i.exercise.plagiarismDetectionConfig.continuousPlagiarismControlEnabled),a(13),l("icon",i.faQuestionCircle)("ngbTooltip",E(63,27,"artemisApp.plagiarism.minimumScoreTooltip")),a(4),b("ngModel",i.exercise.plagiarismDetectionConfig.minimumScore),l("disabled",!i.exercise.plagiarismDetectionConfig.continuousPlagiarismControlEnabled),a(13),l("icon",i.faQuestionCircle)("ngbTooltip",E(80,29,i.minimumSizeTooltip)),a(4),b("ngModel",i.exercise.plagiarismDetectionConfig.minimumSize),l("disabled",!i.exercise.plagiarismDetectionConfig.continuousPlagiarismControlEnabled),a(13),l("icon",i.faQuestionCircle)("ngbTooltip",E(97,31,"artemisApp.plagiarism.plagiarismCaseResponsePeriodTooltip")),a(4),b("ngModel",i.exercise.plagiarismDetectionConfig.continuousPlagiarismControlPlagiarismCaseStudentResponsePeriod),l("disabled",!i.exercise.plagiarismDetectionConfig.continuousPlagiarismControlEnabled))},dependencies:[O,L,U,F,A,k,V,R,B,W,Q,z,N],encapsulation:2})}return u})();export{ee as a,ue as b};
//# sourceMappingURL=chunk-T7GRTCG6.js.map
