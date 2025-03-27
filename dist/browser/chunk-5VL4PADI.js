import{K as k,L as N,c as y,h as g,i as w,j as E,l as T,n as V,s as G,v as M}from"./chunk-WA5GEAJB.js";import{a as A}from"./chunk-K3W6YFKH.js";import{d as P}from"./chunk-EDXSOKK5.js";import{Oc as D,xc as b}from"./chunk-Z4VHWOB5.js";import{Db as l,Dc as _,Ma as p,Mc as s,Na as f,Oc as m,Rc as C,Tb as u,Va as d,Zb as h,dd as e,kc as c,sc as F,xc as n,yc as o,yd as S,zc as x,zd as v}from"./chunk-5LC5EQRR.js";function O(t,I){if(t&1){let i=_();e(0,`
                `),n(1,"fa-icon",4),s("click",function(){p(i);let r=m();return f(r.resetSearchValue())}),o(),e(2,`
            `)}if(t&2){let i=m();l(),c("icon",i.faTimes)}}function j(t,I){if(t&1&&(e(0,`
                `),x(1,"fa-icon",5),e(2,`
            `)),t&2){let i=m();l(),c("icon",i.faMagnifyingGlass)}}var W=(()=>{class t{faMagnifyingGlass=b;faTimes=D;newSearchEvent=new d;filterForm=new E({searchFilter:new T("")});setSearchValue(i){this.newSearchEvent.emit(i)}resetSearchValue(){this.filterForm.get("searchFilter")?.reset(),this.newSearchEvent.emit("")}static \u0275fac=function(a){return new(a||t)};static \u0275cmp=u({type:t,selectors:[["jhi-search-filter"]],outputs:{newSearchEvent:"newSearchEvent"},decls:14,vars:5,consts:[[3,"formGroup"],[1,"input-group","rounded-3"],["id","search","type","text","formControlName","searchFilter","aria-label","Filter Search Field","aria-describedby","filter-search-field",1,"form-control","rounded-3","border",3,"keyup","placeholder"],[1,"position-relative","my-auto","mn-icon-field"],["id","test-fa-times","tooltip","Clear search filter",1,"pointer","text-secondary",3,"click","icon"],[1,"text-secondary",3,"icon"]],template:function(a,r){a&1&&(n(0,"form",0),e(1,`
    `),n(2,"div",1),e(3,`
        `),n(4,"input",2),S(5,"artemisTranslate"),s("keyup",function(){return r.setSearchValue(r.filterForm.value.searchFilter)}),o(),e(6,`
        `),n(7,"div",3),e(8,`
            `),h(9,O,3,1)(10,j,3,1),o(),e(11,`
    `),o(),e(12,`
`),o(),e(13,`
`)),a&2&&(c("formGroup",r.filterForm),l(4),C("placeholder",v(5,3,"artemisApp.course.exercise.search.searchPlaceholder")),l(5),F(r.filterForm.value.searchFilter?9:10))},dependencies:[P,k,V,y,g,w,N,G,M,A],styles:[".mn-icon-field[_ngcontent-%COMP%]{margin-left:-1.75rem!important;z-index:10}"]})}return t})();export{W as a};
//# sourceMappingURL=chunk-5VL4PADI.js.map
