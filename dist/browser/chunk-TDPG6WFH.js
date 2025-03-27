import{a as O}from"./chunk-WIZ2YSLS.js";import{a as B}from"./chunk-2QXIMOEO.js";import{A as T,B as A,C as G,H as V,K as W,c as E,h as v,m as M,o as N}from"./chunk-WA5GEAJB.js";import{a as D}from"./chunk-U54OSGNH.js";import{Db as m,Dc as _,La as P,Ma as p,Mc as c,Na as g,Oc as l,Tb as b,Zb as f,dd as e,kc as w,ld as h,md as x,nd as S,sc as C,xc as n,yc as i,zc as u}from"./chunk-5LC5EQRR.js";function j(a,y){if(a&1){let t=_();e(0,`
                `),n(1,"div",2),e(2,`
                    `),n(3,"div"),e(4,`
                        `),u(5,"label",6),e(6,`
                    `),i(),e(7,`
                    `),n(8,"div"),e(9,`
                        `),n(10,"div",7),e(11,`
                            `),n(12,"div",8),e(13,`
                                `),n(14,"label",9),e(15,"Number"),i(),e(16,`
                            `),i(),e(17,`
                            `),n(18,"input",10),S("ngModelChange",function(r){p(t);let o=l(2);return x(o.gradingScale.course.presentationScore,r)||(o.gradingScale.course.presentationScore=r),g(r)}),c("ngModelChange",function(r){p(t);let o=l(2);return g(o.updatePresentationScore(r))}),i(),e(19,`
                        `),i(),e(20,`
                    `),i(),e(21,`
                `),i(),e(22,`
            `)}if(a&2){let t=l(2);m(18),h("ngModel",t.gradingScale.course.presentationScore)}}function I(a,y){if(a&1){let t=_();e(0,`
                `),n(1,"div",2),e(2,`
                    `),n(3,"div"),e(4,`
                        `),u(5,"label",11),e(6,`
                    `),i(),e(7,`
                    `),n(8,"div"),e(9,`
                        `),n(10,"div",7),e(11,`
                            `),n(12,"div",8),e(13,`
                                `),u(14,"label",12),e(15,`
                            `),i(),e(16,`
                            `),n(17,"input",13),S("ngModelChange",function(r){p(t);let o=l(2);return x(o.presentationsConfig.presentationsNumber,r)||(o.presentationsConfig.presentationsNumber=r),g(r)}),c("ngModelChange",function(r){p(t);let o=l(2);return g(o.updatePresentationsNumber(r))}),i(),e(18,`
                            `),n(19,"div",8),e(20,`
                                `),n(21,"label",14),e(22,"Combined Weight"),i(),e(23,`
                            `),i(),e(24,`
                            `),n(25,"input",15),S("ngModelChange",function(r){p(t);let o=l(2);return x(o.presentationsConfig.presentationsWeight,r)||(o.presentationsConfig.presentationsWeight=r),g(r)}),c("ngModelChange",function(r){p(t);let o=l(2);return g(o.updatePresentationsWeight(r))}),i(),e(26,`
                        `),i(),e(27,`
                    `),i(),e(28,`
                `),i(),e(29,`
            `)}if(a&2){let t=l(2);m(17),h("ngModel",t.presentationsConfig.presentationsNumber),m(8),h("ngModel",t.presentationsConfig.presentationsWeight)}}function k(a,y){if(a&1){let t=_();e(0,`
    `),n(1,"div",0),e(2,`
        `),n(3,"div",1),e(4,`
            `),n(5,"div",2),e(6,`
                `),n(7,"div"),e(8,`
                    `),u(9,"label",3),e(10,`
                    `),u(11,"jhi-help-icon",4),e(12,`
                `),i(),e(13,`
                `),n(14,"div"),e(15,`
                    `),n(16,"jhi-mode-picker",5),c("valueChange",function(r){p(t);let o=l();return g(o.onPresentationTypeChange(r))}),i(),e(17,`
                `),i(),e(18,`
            `),i(),e(19,`
            `),f(20,j,23,1)(21,I,30,2),i(),e(22,`
    `),i(),e(23,`
`)}if(a&2){let t=l();m(16),w("options",t.modePickerOptions)("value",t.presentationsConfig.presentationType),m(4),C(t.presentationsConfig.presentationType===t.BASIC&&t.gradingScale.course!==void 0?20:-1),m(),C(t.presentationsConfig.presentationType===t.GRADED?21:-1)}}var s=function(a){return a.NONE="none",a.BASIC="basic",a.GRADED="graded",a}(s||{}),Q=(()=>{class a{NONE=s.NONE;BASIC=s.BASIC;GRADED=s.GRADED;modePickerOptions=[{value:s.NONE,labelKey:"artemisApp.gradingSystem.presentationType.none",btnClass:"btn-secondary"},{value:s.BASIC,labelKey:"artemisApp.gradingSystem.presentationType.basic",btnClass:"btn-secondary"},{value:s.GRADED,labelKey:"artemisApp.gradingSystem.presentationType.graded",btnClass:"btn-secondary"}];gradingScale;presentationsConfig;ngOnChanges(){this.initializePresentationConfig()}initializePresentationConfig(){this.isGradedPresentation()?this.presentationsConfig.presentationType=s.GRADED:this.isBasicPresentation()?this.presentationsConfig.presentationType=s.BASIC:this.presentationsConfig.presentationType=s.NONE,this.presentationsConfig.presentationsNumber=this.gradingScale.presentationsNumber,this.presentationsConfig.presentationsWeight=this.gradingScale.presentationsWeight}isBasicPresentation(){return(this.gradingScale.course?.presentationScore??0)>0}isGradedPresentation(){let t=!0;return t&&=(this.gradingScale.presentationsWeight??-1)>=0,t&&=(this.gradingScale.presentationsNumber??-1)>0,t}onPresentationTypeChange(t){switch(this.presentationsConfig.presentationType=t,t){case s.NONE:{this.updatePresentationScore(void 0),this.updatePresentationsNumber(void 0),this.updatePresentationsWeight(void 0);break}case s.BASIC:{this.updatePresentationScore(2),this.updatePresentationsNumber(void 0),this.updatePresentationsWeight(void 0);break}case s.GRADED:{this.updatePresentationScore(void 0),this.updatePresentationsNumber(2),this.updatePresentationsWeight(20);break}}}updatePresentationScore(t){this.gradingScale.course&&(this.presentationsConfig.presentationScore=(t??-1)>0?t:void 0,this.gradingScale.course.presentationScore=this.presentationsConfig.presentationScore)}updatePresentationsNumber(t){this.presentationsConfig.presentationsNumber=(t??-1)>0?t:void 0,this.gradingScale.presentationsNumber=this.presentationsConfig.presentationsNumber}updatePresentationsWeight(t){this.presentationsConfig.presentationsWeight=(t??-1)>=0?t:void 0,this.gradingScale.presentationsWeight=this.presentationsConfig.presentationsWeight}static \u0275fac=function(d){return new(d||a)};static \u0275cmp=b({type:a,selectors:[["jhi-grading-system-presentations"]],inputs:{gradingScale:"gradingScale",presentationsConfig:"presentationsConfig"},features:[P],decls:1,vars:1,consts:[[1,"form-group"],[1,"row"],[1,"col-auto"],["jhiTranslate","artemisApp.gradingSystem.presentationType.title",1,"label-narrow"],["text","artemisApp.gradingSystem.presentationType.description"],[3,"valueChange","options","value"],["jhiTranslate","artemisApp.gradingSystem.basicPresentation.label",1,"label-narrow"],[1,"input-group"],[1,"input-group-prepend"],["for","field_numberBasicPresentations","jhiTranslate","artemisApp.gradingSystem.gradedPresentation.number",1,"input-group-text"],["name","numBasicPresentations","id","field_numberBasicPresentations","type","number","min","1","pattern","\\d*","required","",1,"form-control","input-number-short",3,"ngModelChange","ngModel"],["jhiTranslate","artemisApp.gradingSystem.gradedPresentation.label",1,"label-narrow"],["for","field_numberPresentations","jhiTranslate","artemisApp.gradingSystem.gradedPresentation.number",1,"input-group-text"],["name","numPresentations","id","field_numberPresentations","type","number","min","1","pattern","\\d*","required","",1,"form-control","input-number-short",3,"ngModelChange","ngModel"],["for","field_weightPresentations","jhiTranslate","artemisApp.gradingSystem.gradedPresentation.weight",1,"input-group-text"],["name","weightPresentations","id","field_weightPresentations","type","number","min","0","max","99","required","",1,"form-control","input-number-short",3,"ngModelChange","ngModel"]],template:function(d,r){d&1&&f(0,k,24,4),d&2&&C(r.gradingScale.course?0:-1)},dependencies:[D,W,E,N,v,G,V,A,T,M,O,B],styles:[".input-number-short[_ngcontent-%COMP%]{width:72px;padding-right:.5rem}"]})}return a})();export{s as a,Q as b};
//# sourceMappingURL=chunk-TDPG6WFH.js.map
