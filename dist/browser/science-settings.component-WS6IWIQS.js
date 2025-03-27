import{a as N}from"./chunk-GG62Q4DZ.js";import"./chunk-VK7JPHFE.js";import"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import{a as G}from"./chunk-PXNUDHQF.js";import{a as P}from"./chunk-BQRUD4AM.js";import{a as j}from"./chunk-K3W6YFKH.js";import{a as B}from"./chunk-TL3DYXRE.js";import"./chunk-JXJXC4DZ.js";import{d as V}from"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Ob as D,tb as M}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import{a as w,b as O}from"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as z}from"./chunk-U54OSGNH.js";import"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as o,Dc as b,Ea as v,Ma as C,Mc as A,Na as h,Oc as l,Qa as E,Rc as x,Tb as k,Xb as F,Zb as u,dd as e,fd as m,kc as p,sc as f,uc as y,vc as T,wc as I,xc as n,yc as r,yd as d,zc as g,zd as S}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";function H(i,c){if(i&1&&(e(0,`
            `),n(1,"div",4),e(2,`
                `),g(3,"fa-icon",2),e(4,`
                `),g(5,"span",5),e(6,`
            `),r(),e(7,`
        `)),i&2){let t=l();o(3),p("icon",t.faInfoCircle)}}function U(i,c){if(i&1){let t=b();e(0,`
        `),n(1,"button",6),A("click",function(){C(t);let s=l();return h(s.saveSettings())}),e(2,`
            `),g(3,"fa-icon",7),e(4),d(5,"artemisTranslate"),r(),e(6,`
    `)}if(i&2){let t=l();o(3),p("icon",t.faSave),o(),m(`
            `,S(5,2,"artemisApp.userSettings.saveChanges"),`
        `)}}function $(i,c){if(i&1){let t=b();e(0,`
                        `),n(1,"div"),e(2,`
                            `),n(3,"dt"),e(4,`
                                `),e(5),d(6,"artemisTranslate"),r(),e(7,`
                            `),n(8,"span"),e(9,`
                                `),e(10),d(11,"artemisTranslate"),r(),e(12,`
                            `),e(13,`
                            `),n(14,"div",11),e(15,`
                                `),n(16,"div",12),e(17,`
                                    `),n(18,"input",13),A("click",function(s){C(t);let _=l(4);return h(_.toggleSetting(s))}),r(),e(19,`
                                    `),n(20,"label",14),e(21,"active"),r(),e(22,`
                                `),r(),e(23,`
                            `),r(),e(24,`
                        `),r(),e(25,`
                    `)}if(i&2){let t=c.$implicit;o(5),m(`
                                `,S(6,6,"artemisApp.userSettings.settingNames."+t.key),`
                            `),o(5),m(`
                                `,S(11,8,"artemisApp.userSettings.settingDescriptions."+t.descriptionKey),`
                            `),o(8),x("id",t.settingId),x("value",t.active),p("checked",t.active),o(2),x("for",t.settingId)}}function K(i,c){if(i&1&&(n(0,"div",10),e(1,`
                    `),n(2,"h3"),e(3,`
                        `),e(4,`
                        `),e(5),d(6,"artemisTranslate"),r(),e(7,`
                    `),T(8,$,26,10,null,null,y),r()),i&2){let t=l().$implicit;o(5),m(`
                        `,S(6,1,"artemisApp.userSettings.settingGroupNames."+t.key),`
                    `),o(3),I(t.settings)}}function L(i,c){if(i&1&&(e(0,`
            `),n(1,"div"),e(2,`
                `),u(3,K,10,3,"div",9),e(4,`
            `),r(),e(5,`
        `)),i&2){let t=c.$implicit;o(3),p("jhiHasAnyAuthority",t.restrictionLevels)}}function q(i,c){if(i&1&&(e(0,`
    `),n(1,"div",8),e(2,`
        `),T(3,L,6,1,null,null,y),r(),e(5,`
`)),i&2){let t=l();o(3),I(t.userSettings.groups)}}var oe=(()=>{class i extends G{scienceSettingsService=v(N);featureToggleService=v(O);faSave=M;faInfoCircle=D;featureToggleActiveSubscription;featureToggleActive=!1;userSettings;settings;ngOnInit(){this.userSettingsCategory=B.SCIENCE_SETTINGS;let t=this.scienceSettingsService.getScienceSettings();t.length===0?super.ngOnInit():(this.userSettings=this.userSettingsService.loadSettingsSuccessAsSettingsStructure(t,this.userSettingsCategory),this.settings=this.userSettingsService.extractIndividualSettingsFromSettingsStructure(this.userSettings),this.changeDetector.detectChanges()),this.featureToggleService.getFeatureToggleActive(w.Science).subscribe(a=>{this.featureToggleActive=a})}ngOnDestroy(){this.featureToggleActiveSubscription&&this.featureToggleActiveSubscription.unsubscribe()}toggleSetting(t){this.settingsChanged=!0;let a=t.currentTarget.id,s=this.settings.find(_=>_.settingId===a);s&&(s.active=!s.active,s.changed=!0)}static \u0275fac=(()=>{let t;return function(s){return(t||(t=E(i)))(s||i)}})();static \u0275cmp=k({type:i,selectors:[["jhi-science-settings"]],features:[F],decls:21,vars:7,consts:[[1,"d-flex","justify-content-between"],[1,"d-flex","userSettings-info"],[1,"ng-fa-icon",3,"icon"],["jhiTranslate","artemisApp.userSettings.scienceSettingsInfo",1,"ps-1"],[1,"d-flex","mt-2","userSettings-info"],["jhiTranslate","artemisApp.userSettings.scienceSettingsFeatureDisabled",1,"ps-1"],["type","button","id","apply-changes-button",1,"btn","btn-primary",3,"click"],[1,"ng",3,"icon"],[1,"list-group","d-block"],["class","list-group-item",4,"jhiHasAnyAuthority"],[1,"list-group-item"],[1,"d-flex"],[1,"form-check","pe-3"],["type","checkbox",1,"form-check-input",3,"click","checked","id","value"],[1,"form-check-label",3,"for"]],template:function(a,s){a&1&&(n(0,"div",0),e(1,`
    `),n(2,"div"),e(3,`
        `),n(4,"h1"),e(5,`
            `),e(6),d(7,"artemisTranslate"),r(),e(8,`
        `),n(9,"div",1),e(10,`
            `),g(11,"fa-icon",2),e(12,`
            `),g(13,"span",3),e(14,`
        `),r(),e(15,`
        `),u(16,H,8,1),r(),e(17,`
    `),u(18,U,7,4),r(),e(19,`
`),u(20,q,6,0)),a&2&&(o(6),m(`
            `,S(7,5,"artemisApp.userSettings.categories."+s.userSettingsCategory),`
        `),o(5),p("icon",s.faInfoCircle),o(5),f(s.featureToggleActive?-1:16),o(2),f(s.settingsChanged?18:-1),o(2),f(s.userSettings?20:-1))},dependencies:[V,z,P,j],styles:["#apply-changes-button[_ngcontent-%COMP%]{width:250px;height:40px;font-size:large;border:0}h3[_ngcontent-%COMP%]{font-weight:700;text-underline-offset:3px}dt[_ngcontent-%COMP%]{font-size:large;font-weight:500}dd[_ngcontent-%COMP%]{font-size:larger}.userSettings-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-style:italic;color:gray;font-size:large;font-weight:bolder}.userSettings-info[_ngcontent-%COMP%]   .ng-fa-icon[_ngcontent-%COMP%]{color:gray}.form-check[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:5px}"]})}return i})();export{oe as ScienceSettingsComponent};
//# sourceMappingURL=science-settings.component-WS6IWIQS.js.map
