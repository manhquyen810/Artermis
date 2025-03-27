import{m as L}from"./chunk-VK7JPHFE.js";import{c as E}from"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import{d as T,f as k}from"./chunk-EDXSOKK5.js";import{b as A}from"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{ca as U}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as y}from"./chunk-U54OSGNH.js";import{g as S,i as _,j as b,m as h}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as a,Ea as d,Oc as c,Tb as C,Zb as m,dd as t,ed as g,kc as x,ra as f,sc as s,xb as v,xc as n,yc as r,zc as o}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";function P(e,l){if(e&1&&(t(0,`
                    `),o(1,"img",13),t(2,`
                `)),e&2){let i=c();a(),x("src",i.currentUser.imageUrl,v)}}function M(e,l){if(e&1&&(t(0,`
                    `),o(1,"fa-icon",14),t(2,`
                `)),e&2){let i=c();a(),x("icon",i.faUser)}}function O(e,l){if(e&1&&(t(0,`
                            `),n(1,"span",16),t(2),r(),t(3,`
                        `)),e&2){let i=c(2);a(2),g(i.currentUser.name)}}function j(e,l){if(e&1&&(t(0,`
                    `),n(1,"div"),t(2,`
                        `),m(3,O,4,1),o(4,"br"),t(5,`
                        `),n(6,"span",15),t(7),r(),t(8,`
                    `),r(),t(9,`
                `)),e&2){let i=c();a(3),s(i.currentUser.name?3:-1),a(4),g(i.currentUser.login)}}function I(e,l){e&1&&(t(0,`
                        `),n(1,"a",18),t(2,`
                        `),r(),t(3,`
                    `))}function w(e,l){if(e&1&&(t(0,`
                    `),o(1,"a",17),t(2,`
                    `),m(3,I,4,0)),e&2){let i=c();a(3),s(i.isAtLeastTutor?3:-1)}}var W=(()=>{class e{profileService=d(E);accountService=d(A);faUser=U;currentUser;localVCEnabled=!1;isAtLeastTutor=!1;ngOnInit(){this.profileService.getProfileInfo().subscribe(i=>{this.localVCEnabled=i.activeProfiles.includes(L)}),this.accountService.getAuthenticationState().pipe(f(i=>{this.currentUser=i,this.isAtLeastTutor=this.accountService.isAtLeastTutor()})).subscribe()}static \u0275fac=function(p){return new(p||e)};static \u0275cmp=C({type:e,selectors:[["jhi-user-settings"]],decls:44,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-lg-3","col-sm-12"],[1,"d-flex","flex-column"],["id","navigation-bar",1,"list-group","d-block","pt-2"],["jhiTranslate","artemisApp.userSettings.userSettings",1,"list-group-item","disabled","fw-bold"],["routerLink","account","routerLinkActive","active","jhiTranslate","artemisApp.userSettings.accountInformation",1,"list-group-item","btn","btn-outline-primary"],["routerLink","notifications","routerLinkActive","active","jhiTranslate","artemisApp.userSettings.notificationSettings",1,"list-group-item","btn","btn-outline-primary"],["routerLink","science","routerLinkActive","active","jhiTranslate","artemisApp.userSettings.scienceSettings",1,"list-group-item","btn","btn-outline-primary"],["routerLink","ide-preferences","routerLinkActive","active",1,"list-group-item","btn","btn-outline-primary"],["jhiTranslate","artemisApp.userSettings.categories.IDE_PREFERENCES"],[1,"col-lg-8","col-sm-12"],["id","current-settings"],["alt","User Profile Picture",1,"user-settings-container-profile-picture","rounded-3",3,"src"],["id","avatar","size","3x",3,"icon"],["id","login"],["id","user-header"],["routerLink","ssh","routerLinkActive","active","jhiTranslate","artemisApp.userSettings.sshSettings",1,"list-group-item","btn","btn-outline-primary"],["routerLink","vcs-token","routerLinkActive","active","jhiTranslate","artemisApp.userSettings.vcsAccessTokenSettings",1,"list-group-item","btn","btn-outline-primary"]],template:function(p,u){p&1&&(n(0,"div",0),t(1,`
    `),n(2,"div",1),t(3,`
        `),n(4,"div",2),t(5,`
            `),t(6,`
            `),n(7,"div",3),t(8,`
                `),m(9,P,3,1)(10,M,3,1)(11,j,10,2),r(),t(12,`
            `),t(13,`
            `),n(14,"section",4),t(15,`
                `),o(16,"span",5),t(17,`
                `),o(18,"a",6),t(19,`
                `),o(20,"a",7),t(21,`
                `),o(22,"a",8),t(23,`
                `),m(24,w,4,1),n(25,"a",9),t(26,`
                    `),t(27,`
                    `),o(28,"span",10),t(29,`
                `),r(),t(30,`
            `),r(),t(31,`
        `),r(),t(32,`
        `),t(33,`
        `),n(34,"div",11),t(35,`
            `),n(36,"section",12),t(37,`
                `),o(38,"router-outlet"),t(39,`
            `),r(),t(40,`
        `),r(),t(41,`
    `),r(),t(42,`
`),r(),t(43,`
`)),p&2&&(a(9),s(u.currentUser&&u.currentUser.imageUrl?9:10),a(2),s(u.currentUser?11:-1),a(13),s(u.localVCEnabled?24:-1))},dependencies:[y,h,S,_,b,k,T],styles:["#avatar[_ngcontent-%COMP%]{padding-top:8px;padding-right:15px}#user-header[_ngcontent-%COMP%]{font-size:x-large;font-weight:600;color:var(--bs-body-color)}#login[_ngcontent-%COMP%]{color:var(--bs-secondary);font-size:medium;font-weight:400}#navigation-bar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:medium;text-align:left}.section[_ngcontent-%COMP%]{padding-top:20px}.user-settings-container-profile-picture[_ngcontent-%COMP%]{width:4rem;height:4rem}"]})}return e})();export{W as UserSettingsContainerComponent};
//# sourceMappingURL=user-settings-container.component-HMNEHYPX.js.map
