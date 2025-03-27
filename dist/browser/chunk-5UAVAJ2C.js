import{a as P,b as O}from"./chunk-GJB34RKX.js";import{d,k as w}from"./chunk-DOLVNMRR.js";import{K as E,L as T,i as v,n as D,s as M}from"./chunk-WA5GEAJB.js";import{d as I,f as q}from"./chunk-EDXSOKK5.js";import{a as V}from"./chunk-U54OSGNH.js";import{Db as o,Dc as x,La as F,Ma as p,Mc as y,Na as l,Oc as u,Qa as b,Tb as S,Va as h,Xb as g,Zb as f,dd as t,kc as a,sc as C,xc as r,yc as m,zc as c}from"./chunk-5LC5EQRR.js";import{a as _}from"./chunk-3E746U5Y.js";var L=class extends w{constructor(){super(d.PREREQUISITE)}};function k(i,j){if(i&1){let e=x();t(0,`
                        `),r(1,"button",6),y("click",function(){p(e);let n=u(2);return l(n.cancelForm())}),t(2,`
                            `),c(3,"fa-icon",7),t(4,"\xA0"),c(5,"span",8),t(6,`
                        `),m(),t(7,`
                    `)}if(i&2){let e=u(2);o(3),a("icon",e.faTimes)}}function G(i,j){if(i&1){let e=x();t(0,`
            `),r(1,"form",2),y("ngSubmit",function(){p(e);let n=u();return l(n.submitForm())}),t(2,`
                `),c(3,"jhi-common-course-competency-form",3),t(4,`
                `),r(5,"div"),t(6,`
                    `),r(7,"button",4),t(8,`
                        `),c(9,"span",5),t(10,`
                    `),m(),t(11,`
                    `),f(12,k,8,1),m(),t(13,`
            `),m(),t(14,`
        `)}if(i&2){let e=u();o(),a("formGroup",e.form),o(2),a("formData",e.formData)("isEditMode",e.isEditMode)("isInConnectMode",e.isInConnectMode)("isInSingleLectureMode",e.isInSingleLectureMode)("lecturesOfCourseWithLectureUnits",e.lecturesOfCourseWithLectureUnits)("averageStudentScore",e.averageStudentScore)("form",e.form)("courseCompetency",e.prerequisite),o(4),a("disabled",!e.isSubmitPossible),o(5),C(e.hasCancelButton?12:-1)}}var ie=(()=>{class i extends P{formData={id:void 0,title:void 0,description:void 0,softDueDate:void 0,taxonomy:void 0,masteryThreshold:void 0,optional:!1};prerequisite;formSubmitted=new h;CourseCompetencyType=d;ngOnChanges(){this.initializeForm(),this.isEditMode&&this.formData&&this.setFormValues(this.formData)}ngOnInit(){this.initializeForm()}setFormValues(e){this.form.patchValue(e)}submitForm(){let e=_({},this.form.value);this.formSubmitted.emit(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(i)))(n||i)}})();static \u0275cmp=S({type:i,selectors:[["jhi-prerequisite-form"]],inputs:{formData:"formData",prerequisite:"prerequisite"},outputs:{formSubmitted:"formSubmitted"},features:[g,F],decls:7,vars:1,consts:[[1,"row"],[1,"col-12"],[3,"ngSubmit","formGroup"],[3,"formData","isEditMode","isInConnectMode","isInSingleLectureMode","lecturesOfCourseWithLectureUnits","averageStudentScore","form","courseCompetency"],["id","submitButton","type","submit",1,"btn","btn-primary","me-2",3,"disabled"],["jhiTranslate","entity.action.submit"],["type","button",1,"btn","btn-secondary",3,"click"],[3,"icon"],["jhiTranslate","entity.action.cancel"]],template:function(s,n){s&1&&(r(0,"div",0),t(1,`
    `),r(2,"div",1),t(3,`
        `),f(4,G,15,11),m(),t(5,`
`),m(),t(6,`
`)),s&2&&(o(4),C(n.form?4:-1))},dependencies:[O,E,D,v,T,M,q,I,V],styles:["tr[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}"]})}return i})();export{L as a,ie as b};
//# sourceMappingURL=chunk-5UAVAJ2C.js.map
