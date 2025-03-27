import{a as l}from"./chunk-VPHPBAVR.js";import{d as T}from"./chunk-CT44YL7Q.js";import{p as m}from"./chunk-DID2YGL7.js";import{Db as s,Oc as c,Tb as r,Zb as d,dd as n,fd as o,pd as f,sc as u,xc as p,yc as x,yd as E,zd as g}from"./chunk-5LC5EQRR.js";function h(t,k){if(t&1&&n(0),t&2){let e=c();o(`
        (`,e.percentUsedWorkingTime,`\u2009%)
    `)}}var F=(()=>{class t{studentExam;percentUsedWorkingTime=0;usedWorkingTime=0;ngOnInit(){if(this.studentExam.exam.testExam&&this.studentExam.started&&this.studentExam.submitted&&this.studentExam.workingTime&&this.studentExam.startedDate&&this.studentExam.submissionDate){let e=this.studentExam.workingTime;this.usedWorkingTime=Math.min(e,m(this.studentExam.submissionDate).diff(m(this.studentExam.startedDate),"seconds")),this.percentUsedWorkingTime=Math.min(100,T(this.usedWorkingTime/e*100,2))}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=r({type:t,selectors:[["jhi-test-exam-working-time"]],inputs:{studentExam:"studentExam"},features:[f([])],decls:5,vars:4,template:function(i,a){i&1&&(p(0,"span"),n(1),E(2,"artemisDurationFromSeconds"),d(3,h,1,1),x(),n(4,`
`)),i&2&&(s(),o(`
    `,g(2,2,a.usedWorkingTime),`
    `),s(2),u(a.percentUsedWorkingTime?3:-1))},dependencies:[l],encapsulation:2})}return t})();export{F as a};
//# sourceMappingURL=chunk-UQAVYGM7.js.map
