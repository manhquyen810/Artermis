import{a as V,b as D}from"./chunk-DRSQQEUE.js";import"./chunk-7XXWL6ER.js";import{a as $}from"./chunk-PXNUDHQF.js";import{a as O}from"./chunk-BQRUD4AM.js";import{a as j}from"./chunk-K3W6YFKH.js";import{a as B}from"./chunk-TL3DYXRE.js";import"./chunk-JXJXC4DZ.js";import{d as L}from"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Ob as M,tb as P}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as W}from"./chunk-U54OSGNH.js";import"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as r,Dc as h,Ea as A,Ma as S,Mc as y,Na as C,Oc as c,Qa as w,Rc as u,Sc as k,Tb as F,Xb as N,Zb as f,dd as t,fd as m,kc as d,sc as x,uc as E,vc as T,wc as b,xc as n,yc as o,yd as g,zc as v,zd as _}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";function G(i,p){if(i&1){let e=h();t(0,`
        `),n(1,"button",4),y("click",function(){S(e);let a=c();return C(a.saveSettings())}),t(2,`
            `),v(3,"fa-icon",5),t(4),g(5,"artemisTranslate"),o(),t(6,`
    `)}if(i&2){let e=c();r(3),d("icon",e.faSave),r(),m(`
            `,_(5,2,"artemisApp.userSettings.saveChanges"),`
        `)}}function H(i,p){if(i&1){let e=h();t(0,`
                                    `),n(1,"div",10),t(2,`
                                        `),n(3,"input",11),y("click",function(a){S(e);let s=c(5);return C(s.toggleSetting(a,s.communicationChannel.WEBAPP))}),o(),t(4,`
                                        `),n(5,"label",12),t(6,"WebApp"),o(),t(7,`
                                    `),o(),t(8,`
                                `)}if(i&2){let e=c().$implicit;r(3),u("id",e.settingId),u("value",e.webapp),d("checked",e.webapp),r(2),u("for",e.settingId)}}function U(i,p){if(i&1){let e=h();t(0,`
                                    `),n(1,"div",13),t(2,`
                                        `),n(3,"input",11),y("click",function(a){S(e);let s=c(5);return C(s.toggleSetting(a,s.communicationChannel.EMAIL))}),o(),t(4,`
                                        `),n(5,"label",12),t(6,"Email"),o(),t(7,`
                                    `),o(),t(8,`
                                `)}if(i&2){let e=c().$implicit;r(3),k("id","",e.settingId," email"),u("value",e.email),d("checked",e.email),r(2),k("for","",e.settingId," email")}}function K(i,p){if(i&1&&(t(0,`
                        `),n(1,"div"),t(2,`
                            `),n(3,"dt"),t(4,`
                                `),t(5),g(6,"artemisTranslate"),o(),t(7,`
                            `),n(8,"span"),t(9,`
                                `),t(10),g(11,"artemisTranslate"),o(),t(12,`
                            `),t(13,`
                            `),n(14,"div",9),t(15,`
                                `),f(16,H,9,4)(17,U,9,6),o(),t(18,`
                        `),o(),t(19,`
                    `)),i&2){let e=p.$implicit;r(5),m(`
                                `,_(6,4,"artemisApp.userSettings.settingNames."+e.key),`
                            `),r(5),m(`
                                `,_(11,6,"artemisApp.userSettings.settingDescriptions."+e.descriptionKey),`
                            `),r(6),x(e.webapp!==void 0&&(e.webappSupport===void 0||e.webappSupport)?16:-1),r(),x(e.email!==void 0&&e.emailSupport?17:-1)}}function q(i,p){if(i&1&&(n(0,"div",8),t(1,`
                    `),n(2,"h3"),t(3,`
                        `),t(4,`
                        `),t(5),g(6,"artemisTranslate"),o(),t(7,`
                    `),T(8,K,20,8,null,null,E),o()),i&2){let e=c().$implicit;r(5),m(`
                        `,_(6,1,"artemisApp.userSettings.settingGroupNames."+e.key),`
                    `),r(3),b(e.settings)}}function J(i,p){if(i&1&&(t(0,`
            `),n(1,"div"),t(2,`
                `),f(3,q,10,3,"div",7),t(4,`
            `),o(),t(5,`
        `)),i&2){let e=p.$implicit;r(3),d("jhiHasAnyAuthority",e.restrictionLevels)}}function Q(i,p){if(i&1&&(t(0,`
    `),n(1,"div",6),t(2,`
        `),T(3,J,6,1,null,null,E),o(),t(5,`
`)),i&2){let e=c();r(3),b(e.userSettings.groups)}}var I=function(i){return i[i.WEBAPP=0]="WEBAPP",i[i.EMAIL=1]="EMAIL",i}(I||{}),st=(()=>{class i extends ${notificationSettingsService=A(D);faSave=P;faInfoCircle=M;userSettings;settings;communicationChannel=I;ngOnInit(){this.userSettingsCategory=B.NOTIFICATION_SETTINGS,this.changeEventMessage=V;let e=this.notificationSettingsService.getNotificationSettings();e.length===0?super.ngOnInit():(this.userSettings=this.userSettingsService.loadSettingsSuccessAsSettingsStructure(e,this.userSettingsCategory),this.settings=this.userSettingsService.extractIndividualSettingsFromSettingsStructure(this.userSettings),this.changeDetector.detectChanges())}toggleSetting(e,l){this.settingsChanged=!0;let a=e.currentTarget.id;a.indexOf(" ")!==-1&&(a=a.slice(0,a.indexOf(" ")));let s=this.settings.find(z=>z.settingId===a);if(s){switch(l){case I.WEBAPP:{s.webapp=!s.webapp;break}case I.EMAIL:{s.email=!s.email;break}}s.changed=!0}}static \u0275fac=(()=>{let e;return function(a){return(e||(e=w(i)))(a||i)}})();static \u0275cmp=F({type:i,selectors:[["jhi-notification-settings"]],features:[N],decls:20,vars:6,consts:[[1,"d-flex","justify-content-between"],[1,"d-inline-flex","userSettings-info"],[1,"ng-fa-icon",3,"icon"],["jhiTranslate","artemisApp.userSettings.notificationSettingsFilterInfo",1,"ps-1"],["type","button","id","apply-changes-button",1,"btn","btn-primary",3,"click"],[1,"ng",3,"icon"],[1,"list-group","d-block"],["class","list-group-item",4,"jhiHasAnyAuthority"],[1,"list-group-item"],[1,"d-flex"],[1,"form-check","pe-3"],["type","checkbox",1,"form-check-input",3,"click","checked","id","value"],[1,"form-check-label",3,"for"],[1,"form-check"]],template:function(l,a){l&1&&(n(0,"div",0),t(1,`
    `),n(2,"div"),t(3,`
        `),n(4,"h1"),t(5,`
            `),t(6),g(7,"artemisTranslate"),o(),t(8,`
        `),n(9,"div",1),t(10,`
            `),v(11,"fa-icon",2),t(12,`
            `),v(13,"span",3),t(14,`
        `),o(),t(15,`
    `),o(),t(16,`
    `),f(17,G,7,4),o(),t(18,`
`),f(19,Q,6,0)),l&2&&(r(6),m(`
            `,_(7,4,"artemisApp.userSettings.categories."+a.userSettingsCategory),`
        `),r(5),d("icon",a.faInfoCircle),r(6),x(a.settingsChanged?17:-1),r(2),x(a.userSettings?19:-1))},dependencies:[L,W,O,j],styles:["#apply-changes-button[_ngcontent-%COMP%]{width:250px;height:40px;font-size:large;border:0}h3[_ngcontent-%COMP%]{font-weight:700;text-underline-offset:3px}dt[_ngcontent-%COMP%]{font-size:large;font-weight:500}dd[_ngcontent-%COMP%]{font-size:larger}.userSettings-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-style:italic;color:gray;font-size:large;font-weight:bolder}.userSettings-info[_ngcontent-%COMP%]   .ng-fa-icon[_ngcontent-%COMP%]{color:gray}.form-check[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:5px}"]})}return i})();export{I as NotificationSettingsCommunicationChannel,st as NotificationSettingsComponent};
//# sourceMappingURL=notification-settings.component-FCW5SHXU.js.map
