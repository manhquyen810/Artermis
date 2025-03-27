import{a as X}from"./chunk-QQZ37FI6.js";import"./chunk-HGMQBA4T.js";import{a as K}from"./chunk-5FAM7LIP.js";import{a as J}from"./chunk-UKRIKOVV.js";import{b as H}from"./chunk-MBS3WUDO.js";import{a as U}from"./chunk-UDBRF4PR.js";import"./chunk-4I367PEU.js";import"./chunk-CT44YL7Q.js";import{c as G}from"./chunk-JNO6DNVW.js";import"./chunk-EELXLOHY.js";import"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import"./chunk-WA5GEAJB.js";import"./chunk-5GXY5RYT.js";import{a as R}from"./chunk-K3W6YFKH.js";import{c as M}from"./chunk-JXJXC4DZ.js";import{d as Q}from"./chunk-EDXSOKK5.js";import"./chunk-DID2YGL7.js";import{h as N,m as L}from"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-NOBD5HSR.js";import{a as q}from"./chunk-U54OSGNH.js";import{f as $,i as z}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Ad as k,Db as r,Dc as V,Ea as C,Ma as I,Mc as T,Na as b,Nb as w,Oc as c,Rd as D,Sc as F,Tb as E,Zb as h,ad as A,bd as W,dd as t,fd as _,gd as P,kc as d,rd as O,sc as u,sd as j,td as B,uc as y,vc as v,wc as S,xc as s,yc as a,yd as x,zc as p,zd as g}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var Y=["plagExerciseElement"],Z=(n,o,e)=>["/course-management",n,o,e,"plagiarism"],ee=(n,o)=>["/course-management",n,"plagiarism-cases",o],te=n=>({count:n}),ie=(n,o)=>o.id;function ne(n,o){if(n&1&&(t(0,`
                                    `),p(1,"fa-icon",16),t(2,`
                                `)),n&2){let e=c().$implicit,i=c(2);r(),d("icon",i.getIcon(e.type))}}function re(n,o){if(n&1&&(t(0,`
                                `),s(1,"div",19),t(2,`
                                    `),s(3,"a",20),t(4),a(),t(5,`
                                `),a(),t(6,`
                            `)),n&2){let e=c().$implicit,i=c(3);r(3),d("routerLink",j(3,ee,i.courseId,e.id)),r(),P(`
                                        `,e.student.name," (",e.student.login,`)
                                    `)}}function se(n,o){if(n&1&&(t(0,`
                                `),s(1,"div",21),t(2,`
                                    `),s(3,"span"),t(4),x(5,"artemisTranslate"),a(),t(6,`
                                `),a(),t(7,`
                            `)),n&2){let e=c().$implicit;r(4),_(`
                                        `,k(5,1,"artemisApp.plagiarism.plagiarismCases.appearsInComparisons",O(4,te,e.plagiarismSubmissions==null?null:e.plagiarismSubmissions.length)),`
                                    `)}}function ae(n,o){if(n&1&&(t(0,`
                                `),s(1,"div",22),t(2),x(3,"artemisTranslate"),x(4,"artemisDate"),a(),t(5,`
                            `)),n&2){let e=c().$implicit;r(2),P(`
                                    `,g(3,2,"artemisApp.plagiarism.plagiarismCases.notifiedAt")," ",g(4,4,e.post.creationDate),`
                                `)}}function oe(n,o){n&1&&(t(0,`
                                `),p(1,"div",23),t(2,`
                            `))}function le(n,o){n&1&&(t(0,`
                                `),p(1,"div",24),t(2,`
                            `))}function me(n,o){n&1&&(t(0,`
                                `),p(1,"div",25),t(2,`
                            `))}function pe(n,o){if(n&1&&(t(0,`
                        `),s(1,"div",17),t(2,`
                            `),h(3,re,7,6)(4,se,8,6)(5,ae,6,6)(6,oe,3,0)(7,le,3,0)(8,me,3,0),s(9,"div",11),t(10,`
                                `),p(11,"jhi-plagiarism-case-verdict",18),t(12,`
                            `),a(),t(13,`
                        `),a(),t(14,`
                    `)),n&2){let e=o.$implicit,i=c(3);r(3),u(e.student?3:-1),r(),u(e.plagiarismSubmissions?4:-1),r(),u(e.post?5:-1),r(),u(e.post?-1:6),r(),u(i.hasStudentAnswer(e)?7:-1),r(),u(i.hasStudentAnswer(e)?-1:8),r(3),d("plagiarismCase",e)("hideDetails",!0)}}function ce(n,o){if(n&1&&(t(0,`
            `),s(1,"div",8,0),t(3,`
                `),s(4,"div",9),t(5,`
                    `),s(6,"div",10),t(7,`
                        `),s(8,"div",11),t(9,`
                            `),s(10,"h5",12),t(11,`
                                `),h(12,ne,3,1),t(13),s(14,"small"),t(15,`
                                    `),s(16,"a",13),t(17,`
                                    `),a(),t(18,`
                                `),a(),t(19,`
                            `),a(),t(20,`
                        `),a(),t(21,`
                        `),s(22,"div",11),t(23,`
                            `),p(24,"jhi-progress-bar",14),x(25,"artemisTranslate"),t(26,`
                        `),a(),t(27,`
                        `),s(28,"div",11),t(29,`
                            `),p(30,"jhi-progress-bar",14),x(31,"artemisTranslate"),t(32,`
                        `),a(),t(33,`
                        `),s(34,"div",11),t(35,`
                            `),p(36,"jhi-progress-bar",14),x(37,"artemisTranslate"),t(38,`
                        `),a(),t(39,`
                    `),a(),t(40,`
                `),a(),t(41,`
                `),s(42,"div",15),t(43,`
                    `),v(44,pe,15,8,null,null,y),a(),t(46,`
            `),a(),t(47,`
        `)),n&2){let e=o.$implicit,i=c(2);r(),d("id","exercise-with-plagiarism-case-"+e.id),r(11),u(e.type?12:-1),r(),_(`
                                `,e.title,`
                                `),r(3),F("id","plagiarism-detection-link-",e.id,""),d("routerLink",B(24,Z,i.courseId,i.getExerciseUrlSegment(e.type),e.id)),r(8),d("denominator",i.numberOfCases(i.groupedPlagiarismCases[e.id]))("numerator",i.numberOfCasesWithPost(i.groupedPlagiarismCases[e.id]))("percentage",i.percentageOfCasesWithPost(i.groupedPlagiarismCases[e.id]))("tooltip",g(25,18,"artemisApp.plagiarism.plagiarismCases.casesWithPost")),r(6),d("denominator",i.numberOfCasesWithPost(i.groupedPlagiarismCases[e.id]))("numerator",i.numberOfCasesWithStudentAnswer(i.groupedPlagiarismCases[e.id]))("percentage",i.percentageOfCasesWithStudentAnswer(i.groupedPlagiarismCases[e.id]))("tooltip",g(31,20,"artemisApp.plagiarism.plagiarismCases.casesWithStudentAnswer")),r(6),d("denominator",i.numberOfCases(i.groupedPlagiarismCases[e.id]))("numerator",i.numberOfCasesWithVerdict(i.groupedPlagiarismCases[e.id]))("percentage",i.percentageOfCasesWithVerdict(i.groupedPlagiarismCases[e.id]))("tooltip",g(37,22,"artemisApp.plagiarism.plagiarismCases.casesWithVerdict")),r(8),S(i.groupedPlagiarismCases[e.id])}}function de(n,o){if(n&1){let e=V();t(0,`
    `),s(1,"div"),t(2,`
        `),s(3,"div",5),t(4,`
            `),s(5,"div",6),t(6,`
                `),s(7,"button",7),T("click",function(){I(e);let l=c();return b(l.exportPlagiarismCases())}),a(),t(8,`
            `),a(),t(9,`
        `),a(),t(10,`
        `),v(11,ce,48,28,null,null,ie),a(),t(13,`
`)}if(n&2){let e=c();r(11),S(e.exercisesWithPlagiarismCases)}}function ue(n,o){if(n&1&&(t(0),x(1,"artemisTranslate")),n&2){let e=c();_(`
    `,g(1,1,"artemisApp.plagiarism.plagiarismCases."+(e.examId?"noExamCases":"noCourseCases")),`
`)}}var Te=(()=>{class n{plagiarismCasesService=C(K);route=C($);alertService=C(M);courseId;examId;plagiarismCases=[];groupedPlagiarismCases;exercisesWithPlagiarismCases=[];exerciseWithPlagCasesElements=w("plagExerciseElement");getExerciseUrlSegment=L;getIcon=N;documentationType="PlagiarismChecks";constructor(){D(()=>{let e=Number(this.route.snapshot.queryParamMap?.get("exerciseId"));e&&this.scrollToExerciseAfterViewInit(e)})}ngOnInit(){this.courseId=Number(this.route.snapshot.paramMap.get("courseId")),this.examId=Number(this.route.snapshot.paramMap.get("examId")),(this.examId?this.plagiarismCasesService.getExamPlagiarismCasesForInstructor(this.courseId,this.examId):this.plagiarismCasesService.getCoursePlagiarismCasesForInstructor(this.courseId)).subscribe({next:i=>{this.plagiarismCases=i.body,this.groupedPlagiarismCases=this.getGroupedPlagiarismCasesByExercise(this.plagiarismCases)}})}scrollToExerciseAfterViewInit(e){let i=this.exerciseWithPlagCasesElements().find(l=>l.nativeElement.id==="exercise-with-plagiarism-case-"+e);i&&i.nativeElement.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}numberOfCases(e){return e.length}numberOfCasesWithVerdict(e){return e.filter(i=>!!i.verdict).length}percentageOfCasesWithVerdict(e){return this.numberOfCasesWithVerdict(e)/this.numberOfCases(e)*100||0}numberOfCasesWithPost(e){return e.filter(i=>!!i.post).length}percentageOfCasesWithPost(e){return this.numberOfCasesWithPost(e)/this.numberOfCases(e)*100||0}numberOfCasesWithStudentAnswer(e){return e.filter(i=>this.hasStudentAnswer(i)).length}percentageOfCasesWithStudentAnswer(e){return this.numberOfCasesWithStudentAnswer(e)/this.numberOfCasesWithPost(e)*100||0}hasStudentAnswer(e){return!!e.post&&!!e.post.answers&&e.post.answers.some(i=>i.author?.id===e.student?.id)}sanitizeCSVField(e){return e==null?"-":String(e).replace(/;/g,'";"')}exportPlagiarismCases(){let i=[["Student Login","Matr. Nr.","Exercise","Verdict","Verdict Date","Verdict By"].join(";")+`
`];this.plagiarismCases.reduce((l,m)=>{let f=[this.sanitizeCSVField(m.student?.login),this.sanitizeCSVField(m.student?.visibleRegistrationNumber),this.sanitizeCSVField(m.exercise?.title)];return m.verdict?f.push(this.sanitizeCSVField(m.verdict),this.sanitizeCSVField(m.verdictDate),this.sanitizeCSVField(m.verdictBy?.name)):f.push("No verdict yet","-","-"),l.push(f.join(";")+`
`),l},i);try{H(new Blob(i,{type:"text/csv"}),"plagiarism-cases.csv")}catch{this.alertService.error("artemisApp.plagiarism.plagiarismCases.export.error")}}getGroupedPlagiarismCasesByExercise(e){return e.reduce((i,l)=>{let m=l.exercise?.id;return m===void 0||(i[m]||(i[m]=[],this.exercisesWithPlagiarismCases.push(l.exercise)),i[m].push(l)),i},{})}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=E({type:n,selectors:[["jhi-plagiarism-cases-instructor-view"]],viewQuery:function(i,l){i&1&&A(l.exerciseWithPlagCasesElements,Y,5),i&2&&W()},decls:11,vars:2,consts:[["plagExerciseElement",""],[1,"d-flex","align-items-center"],["jhiTranslate","artemisApp.plagiarism.cases.plagiarismCases"],[3,"type"],["jhiTranslate","artemisApp.plagiarism.cases.pageSubtitle"],[1,"plagiarism-cases--toolbar","row","mb-3"],[1,"col-auto"],["jhiTranslate","artemisApp.plagiarism.cases.exportCsv",1,"btn","btn-primary",3,"click"],[1,"card","mb-2",3,"id"],[1,"card-header"],[1,"row"],[1,"col-3"],[1,"mb-0"],["jhiTranslate","artemisApp.plagiarism.plagiarismCases.viewComparisons",3,"id","routerLink"],[3,"denominator","numerator","percentage","tooltip"],[1,"card-body"],[3,"icon"],[1,"row","mb-3"],[3,"plagiarismCase","hideDetails"],[1,"col-1","text-center"],[3,"routerLink"],[1,"col-2","text-center"],[1,"col-3","text-center"],["jhiTranslate","artemisApp.plagiarism.plagiarismCases.notNotified",1,"col-3","text-center"],["jhiTranslate","artemisApp.plagiarism.plagiarismCases.respondedByStudent",1,"col-3","text-center"],["jhiTranslate","artemisApp.plagiarism.plagiarismCases.notResponded",1,"col-3","text-center"]],template:function(i,l){i&1&&(s(0,"div",1),t(1,`
    `),p(2,"h3",2),t(3,`
    `),p(4,"jhi-documentation-button",3),t(5,`
`),a(),t(6,`
`),p(7,"h4",4),t(8,`
`),h(9,de,14,0)(10,ue,2,3)),i&2&&(r(4),d("type",l.documentationType),r(5),u(l.plagiarismCases&&l.plagiarismCases.length>0?9:10))},dependencies:[q,U,Q,z,J,X,G,R],encapsulation:2})}return n})();export{Te as PlagiarismCasesInstructorViewComponent};
//# sourceMappingURL=plagiarism-cases-instructor-view.component-NFPAYKIW.js.map
