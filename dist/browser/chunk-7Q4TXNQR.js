import{i as h}from"./chunk-M6Z6DKZQ.js";import{Db as i,Oc as s,Tb as c,Zb as m,dd as n,fd as u,kc as p,mc as g,rd as C,sc as d,uc as x,vc as _,wc as b,xc as r,yc as a}from"./chunk-5LC5EQRR.js";var v=t=>["/admin","user-management",t];function S(t,l){if(t&1&&(n(0,`
                `),r(1,"a",2),n(2),a(),n(3,`
            `)),t&2){let e=s().$implicit;i(),p("routerLink",C(2,v,e.login)),i(),u("",e.name," ")}}function L(t,l){if(t&1&&(n(0,`
                        `),r(1,"span"),n(2),a(),n(3,`
                    `)),t&2){let e=s(2).$implicit;i(2),u("(",e.login,")")}}function k(t,l){if(t&1&&(n(0,`
                        `),r(1,"span"),n(2),a(),n(3,`
                    `)),t&2){let e=s(2).$implicit;i(2),u("(",e.visibleRegistrationNumber,")")}}function w(t,l){if(t&1&&(n(0,`
                `),r(1,"span"),n(2),m(3,L,4,1)(4,k,4,1),a(),n(5,`
            `)),t&2){let e=s().$implicit,o=s();i(2),u("",e.name,`
                    `),i(),d(e.login?3:-1),i(),d(o.withRegistrationNumber&&e.visibleRegistrationNumber?4:-1)}}function R(t,l){if(t&1&&(n(0,`
        `),r(1,"li",1),n(2,`
            `),m(3,S,4,4)(4,w,6,3),a(),n(5,`
    `)),t&2){let e=l.$implicit,o=s();i(),g("has-error",o.hasError(e)),i(2),d(o.renderLinks?3:-1),i(),d(o.renderLinks?-1:4)}}var M=(()=>{class t{students;errorStudentLogins=[];renderLinks=!1;withRegistrationNumber=!1;errorStudentRegistrationNumbers=[];hasError(e){return e.login&&this.errorStudentLogins.includes(e.login)||this.withRegistrationNumber&&e.visibleRegistrationNumber&&this.errorStudentRegistrationNumbers.includes(e.visibleRegistrationNumber)}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["jhi-team-students-list"]],inputs:{students:"students",errorStudentLogins:"errorStudentLogins",renderLinks:"renderLinks",withRegistrationNumber:"withRegistrationNumber",errorStudentRegistrationNumbers:"errorStudentRegistrationNumbers"},decls:5,vars:0,consts:[[1,"list-group","list-group-horizontal","student-group"],[1,"list-group-item","student-group-item"],[3,"routerLink"]],template:function(o,f){o&1&&(r(0,"ul",0),n(1,`
    `),_(2,R,6,4,null,null,x),a(),n(4,`
`)),o&2&&(i(2),b(f.students))},dependencies:[h],styles:["[_nghost-%COMP%]{max-width:100%}.list-group-horizontal.student-group[_ngcontent-%COMP%]{padding:3px 0;overflow-x:auto;max-width:100%}.list-group-horizontal.student-group[_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:4px;-webkit-box-shadow:inset 0 0 4px rgba(0,0,0,.15)}.list-group-horizontal.student-group[_ngcontent-%COMP%]::-webkit-scrollbar{height:4px}.list-group-horizontal.student-group[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:4px;background-color:#bbb}.list-group-item.student-group-item[_ngcontent-%COMP%]{padding:.175rem .75rem;white-space:nowrap}.list-group-item.student-group-item.has-error[_ngcontent-%COMP%]{color:var(--artemis-alert-danger-color);background-color:var(--artemis-alert-danger-background)}"]})}return t})();export{M as a};
//# sourceMappingURL=chunk-7Q4TXNQR.js.map
