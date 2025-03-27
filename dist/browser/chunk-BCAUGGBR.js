import{e as g}from"./chunk-PR2Y3QVB.js";import{a as T}from"./chunk-VPHPBAVR.js";import{Db as m,Oc as d,Tb as a,Zb as o,dd as s,fd as x,gd as f,pd as c,sc as r,xc as p,yc as u,yd as E,zd as l}from"./chunk-5LC5EQRR.js";function h(e,D){if(e&1&&s(0),e&2){let t=d();f(`
        (`,t.percentDifference>0?"+":"","",t.percentDifference,`\u2009%)
    `)}}var w=(()=>{class e{studentExam;percentDifference=0;isTestRun=!1;isTestExam=!1;ngOnInit(){this.isTestRun=this.studentExam.testRun??!1,this.isTestExam=this.studentExam.exam?.testExam??!1,this.studentExam.exam&&this.studentExam.workingTime&&!this.isTestRun&&!this.isTestExam&&(this.percentDifference=g(this.studentExam.exam,this.studentExam.workingTime))}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=a({type:e,selectors:[["jhi-student-exam-working-time"]],inputs:{studentExam:"studentExam"},features:[c([])],decls:5,vars:4,template:function(n,i){n&1&&(p(0,"span"),s(1),E(2,"artemisDurationFromSeconds"),o(3,h,1,2),u(),s(4,`
`)),n&2&&(m(),x(`
    `,l(2,2,i.studentExam.workingTime),`
    `),m(2),r(!i.isTestRun&&!i.isTestExam&&i.percentDifference!==0?3:-1))},dependencies:[T],encapsulation:2})}return e})();export{w as a};
//# sourceMappingURL=chunk-BCAUGGBR.js.map
