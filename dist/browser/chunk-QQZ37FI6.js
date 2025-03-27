import{a as l}from"./chunk-HGMQBA4T.js";import{c as y}from"./chunk-JNO6DNVW.js";import{K as P}from"./chunk-VZRSC3LP.js";import{a as B}from"./chunk-K3W6YFKH.js";import{Ac as T,Ad as _,Bc as A,Db as n,Ed as I,Oc as c,Rc as x,Tb as f,Zb as g,dd as i,gd as d,oc as C,sc as v,sd as u,xc as s,yc as p,yd as a,zd as r}from"./chunk-5LC5EQRR.js";var D=(e,m)=>({date:e,user:m});function b(e,m){e&1&&(i(0,`
            `),s(1,"div",2),i(2,`
                `),s(3,"h6",3),i(4),a(5,"artemisTranslate"),a(6,"artemisTranslate"),p(),i(7,`
            `),p(),i(8,`
        `)),e&2&&(n(4),d(`
                    `,r(5,2,"artemisApp.plagiarism.plagiarismCases.verdict.verdict"),`
                    : `,r(6,4,"artemisApp.plagiarism.plagiarismCases.verdict.none"),`
                `))}function V(e,m){if(e&1&&(i(0,`
            `),s(1,"div",4),a(2,"artemisDate"),a(3,"artemisTranslate"),i(4,`
                `),s(5,"h6",3),i(6),a(7,"artemisTranslate"),a(8,"artemisTranslate"),p(),i(9,`
            `),p(),i(10,`
        `)),e&2){let t=c(2);n(),C(t.plagiarismCase.verdict===t.plagiarismVerdict.NO_PLAGIARISM?"bg-success":"bg-danger"),x("ngbTooltip",_(3,7,"artemisApp.plagiarism.plagiarismCases.verdict.description",u(14,D,r(2,5,t.plagiarismCase.verdictDate),t.plagiarismCase.verdictBy==null?null:t.plagiarismCase.verdictBy.name))),n(5),d("",r(7,10,"artemisApp.plagiarism.plagiarismCases.verdict.verdict")," : ",r(8,12,t.verdictTranslationString),"")}}function h(e,m){if(e&1&&(i(0,`
            `),s(1,"div",4),a(2,"artemisDate"),a(3,"artemisTranslate"),i(4,`
                `),s(5,"h6",3),i(6),a(7,"artemisTranslate"),a(8,"artemisTranslate"),p(),i(9,`
            `),p(),i(10,`
        `)),e&2){let t=c(2);n(),C(t.plagiarismCase.verdict===t.plagiarismVerdict.NO_PLAGIARISM?"bg-success":"bg-danger"),x("ngbTooltip",_(3,7,"artemisApp.plagiarism.plagiarismCases.verdict.description",u(14,D,r(2,5,t.plagiarismCase.verdictDate),t.plagiarismCase.verdictBy==null?null:t.plagiarismCase.verdictBy.name))),n(5),d("",r(7,10,"artemisApp.plagiarism.plagiarismCases.verdict.verdict")," : ",r(8,12,t.verdictTranslationString),"")}}function E(e,m){if(e&1&&(i(0,`
    `),T(1,1),i(2,`
        `),g(3,b,9,6)(4,V,11,17)(5,h,11,17,"ng-template",null,0,I),i(7,`
    `),A(),i(8,`
`)),e&2){let t=c();n(3),v(t.plagiarismCase.verdict?4:3)}}var j=(()=>{class e{plagiarismCase;hideDetails=!1;plagiarismVerdict=l;get verdictTranslationString(){switch(this.plagiarismCase.verdict){case l.PLAGIARISM:return"artemisApp.plagiarism.plagiarismCases.verdict.plagiarism";case l.POINT_DEDUCTION:return"artemisApp.plagiarism.plagiarismCases.verdict.pointDeduction";case l.WARNING:return"artemisApp.plagiarism.plagiarismCases.verdict.warning";case l.NO_PLAGIARISM:return"artemisApp.plagiarism.plagiarismCases.verdict.noPlagiarism";default:return"artemisApp.plagiarism.plagiarismCases.verdict.none"}}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=f({type:e,selectors:[["jhi-plagiarism-case-verdict"]],inputs:{plagiarismCase:"plagiarismCase",hideDetails:"hideDetails"},decls:1,vars:1,consts:[["verdict",""],[1,"my-1"],[1,"badge","bg-secondary","py-2"],[1,"mb-0"],[1,"badge","py-2",3,"ngbTooltip"]],template:function(o,S){o&1&&g(0,E,9,1),o&2&&v(S.plagiarismCase?0:-1)},dependencies:[P,y,B],encapsulation:2})}return e})();export{j as a};
//# sourceMappingURL=chunk-QQZ37FI6.js.map
