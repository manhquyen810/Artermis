import{c as S}from"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as _}from"./chunk-U54OSGNH.js";import{f as C,i as E}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{L as h,O as b}from"./chunk-IOA4DPXY.js";import{B as d,Db as c,Ea as o,Oc as x,Tb as f,Zb as l,dd as t,kc as v,qd as g,sc as s,xc as a,ya as u,yc as n,zc as m}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var j=(()=>{class e{http=o(b);get(i){return this.http.get("api/core/public/activate",{params:new h().set("key",i)})}static \u0275fac=function(r){return new(r||e)};static \u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var T=()=>["/"];function k(e,p){e&1&&(t(0,`
                    `),a(1,"div",3),t(2,`
                        `),a(3,"span",4)(4,"strong"),t(5,"Your user account has been activated."),n(),t(6," Please "),n(),t(7,`
                        `),m(8,"a",5),t(9,`.
                    `),n(),t(10,`
                `)),e&2&&(c(8),v("routerLink",g(1,T)))}function P(e,p){e&1&&(t(0,`
                    `),a(1,"div",6),t(2,`
                        `),a(3,"strong"),t(4,"Your user could not be activated."),n(),t(5,` Please use the registration form to sign up.
                    `),n(),t(6,`
                `))}function R(e,p){if(e&1&&(t(0,`
    `),a(1,"div"),t(2,`
        `),a(3,"div",0),t(4,`
            `),a(5,"div",1),t(6,`
                `),m(7,"h1",2),t(8,`
                `),l(9,k,11,2)(10,P,7,0),n(),t(11,`
        `),n(),t(12,`
    `),n(),t(13,`
`)),e&2){let i=x();c(9),s(i.success?9:-1),c(),s(i.error?10:-1)}}var B=(()=>{class e{activateService=o(j);route=o(C);profileService=o(S);error=!1;success=!1;isRegistrationEnabled=!1;ngOnInit(){this.profileService.getProfileInfo().subscribe(i=>{i&&(this.isRegistrationEnabled=i.registrationEnabled||!1,this.isRegistrationEnabled&&this.activateAccount())})}activateAccount(){this.route.queryParams.pipe(d(i=>this.activateService.get(i.key))).subscribe({next:()=>this.success=!0,error:()=>this.error=!0})}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=f({type:e,selectors:[["jhi-activate"]],decls:1,vars:1,consts:[[1,"row","justify-content-center"],[1,"col-md-8"],["jhiTranslate","activate.title"],[1,"alert","alert-success"],["jhiTranslate","activate.messages.success"],["jhiTranslate","global.messages.info.authenticated.link",1,"alert-link",3,"routerLink"],["jhiTranslate","activate.messages.error",1,"alert","alert-danger"]],template:function(r,y){r&1&&l(0,R,14,2),r&2&&s(y.isRegistrationEnabled?0:-1)},dependencies:[_,E],encapsulation:2})}return e})();export{B as ActivateComponent};
//# sourceMappingURL=activate.component-NJJYCB5C.js.map
