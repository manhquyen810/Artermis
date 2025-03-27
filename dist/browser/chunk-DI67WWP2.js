import{a as w,b as O}from"./chunk-GJB34RKX.js";import{K as M,L as E,i as g,n as v,s as D}from"./chunk-WA5GEAJB.js";import{d as I,f as T}from"./chunk-EDXSOKK5.js";import{a as V}from"./chunk-U54OSGNH.js";import{Db as o,Dc as C,La as _,Ma as u,Mc as y,Na as l,Oc as d,Qa as F,Tb as h,Va as b,Xb as S,Zb as p,dd as t,kc as c,sc as f,xc as r,yc as m,zc as s}from"./chunk-5LC5EQRR.js";import{a as x}from"./chunk-3E746U5Y.js";function j(n,L){if(n&1){let e=C();t(0,`
                        `),r(1,"button",6),y("click",function(){u(e);let i=d(2);return l(i.cancelForm())}),t(2,`
                            `),s(3,"fa-icon",7),t(4,"\xA0"),s(5,"span",8),t(6,`
                        `),m(),t(7,`
                    `)}if(n&2){let e=d(2);o(3),c("icon",e.faTimes)}}function k(n,L){if(n&1){let e=C();t(0,`
            `),r(1,"form",2),y("ngSubmit",function(){u(e);let i=d();return l(i.submitForm())}),t(2,`
                `),s(3,"jhi-common-course-competency-form",3),t(4,`
                `),r(5,"div"),t(6,`
                    `),r(7,"button",4),t(8,`
                        `),s(9,"span",5),t(10,`
                    `),m(),t(11,`
                    `),p(12,j,8,1),m(),t(13,`
            `),m(),t(14,`
        `)}if(n&2){let e=d();o(),c("formGroup",e.form),o(2),c("formData",e.formData)("isEditMode",e.isEditMode)("isInConnectMode",e.isInConnectMode)("isInSingleLectureMode",e.isInSingleLectureMode)("lecturesOfCourseWithLectureUnits",e.lecturesOfCourseWithLectureUnits)("averageStudentScore",e.averageStudentScore)("form",e.form)("courseCompetency",e.competency),o(4),c("disabled",!e.isSubmitPossible),o(5),f(e.hasCancelButton?12:-1)}}var X=(()=>{class n extends w{formData={id:void 0,title:void 0,description:void 0,softDueDate:void 0,taxonomy:void 0,masteryThreshold:void 0,optional:!1};competency;formSubmitted=new b;ngOnChanges(){this.initializeForm(),this.isEditMode&&this.formData&&this.setFormValues(this.formData)}ngOnInit(){this.initializeForm()}setFormValues(e){this.form.patchValue(e)}submitForm(){let e=x({},this.form.value);this.formSubmitted.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=F(n)))(i||n)}})();static \u0275cmp=h({type:n,selectors:[["jhi-competency-form"]],inputs:{formData:"formData",competency:"competency"},outputs:{formSubmitted:"formSubmitted"},features:[S,_],decls:7,vars:1,consts:[[1,"row"],[1,"col-12"],[3,"ngSubmit","formGroup"],[3,"formData","isEditMode","isInConnectMode","isInSingleLectureMode","lecturesOfCourseWithLectureUnits","averageStudentScore","form","courseCompetency"],["id","submitButton","type","submit",1,"btn","btn-primary","me-2",3,"disabled"],["jhiTranslate","entity.action.submit"],["type","button",1,"btn","btn-secondary",3,"click"],[3,"icon"],["jhiTranslate","entity.action.cancel"]],template:function(a,i){a&1&&(r(0,"div",0),t(1,`
    `),r(2,"div",1),t(3,`
        `),p(4,k,15,11),m(),t(5,`
`),m(),t(6,`
`)),a&2&&(o(4),f(i.form?4:-1))},dependencies:[O,M,v,g,E,D,T,I,V],styles:["tr[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}"]})}return n})();export{X as a};
//# sourceMappingURL=chunk-DI67WWP2.js.map
