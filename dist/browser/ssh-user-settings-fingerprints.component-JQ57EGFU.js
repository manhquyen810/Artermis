import{a as w}from"./chunk-DTGQ3VYB.js";import{a as M,b as P}from"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import"./chunk-WA5GEAJB.js";import"./chunk-K3W6YFKH.js";import"./chunk-EDXSOKK5.js";import"./chunk-Z4VHWOB5.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as E}from"./chunk-U54OSGNH.js";import{i as b}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{O as _}from"./chunk-IOA4DPXY.js";import{Db as r,Ea as g,Oc as m,Tb as u,Zb as v,dd as t,fd as s,kc as h,qd as C,sc as p,x as f,xc as n,ya as S,yc as i,zc as d}from"./chunk-5LC5EQRR.js";import{j as c}from"./chunk-3E746U5Y.js";var F=(()=>{class e{error;http=g(_);getSshFingerprints(){return c(this,null,function*(){return yield f(this.http.get("api/programming/ssh-fingerprints"))})}static \u0275fac=function(l){return new(l||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var y=()=>[".."];function T(e,x){if(e&1&&(t(0,`
            `),n(1,"div",10),t(2,`
                `),n(3,"div",11),t(4),i(),t(5,`
                `),n(6,"div",12),t(7),i(),t(8,`
            `),i(),t(9,`
        `)),e&2){let o=m();r(4),s(`
                    `,"RSA",`
                `),r(3),s(`
                    `,o.sshFingerprints.RSA,`
                `)}}function k(e,x){if(e&1&&(t(0,`
            `),n(1,"div",10),t(2,`
                `),n(3,"div",11),t(4),i(),t(5,`
                `),n(6,"div",12),t(7),i(),t(8,`
            `),i(),t(9,`
        `)),e&2){let o=m();r(4),s(`
                    `,"ED25519",`
                `),r(3),s(`
                    `,o.sshFingerprints.EdDSA,`
                `)}}function A(e,x){if(e&1&&(t(0,`
            `),n(1,"div",13),t(2,`
                `),n(3,"div",11),t(4),i(),t(5,`
                `),n(6,"div",12),t(7),i(),t(8,`
            `),i(),t(9,`
        `)),e&2){let o=m();r(4),s(`
                    `,"ECDSA",`
                `),r(3),s(`
                    `,o.sshFingerprints.ECDSA,`
                `)}}function I(e,x){if(e&1&&(t(0,`
            `),n(1,"div",13),t(2,`
                `),n(3,"div",11),t(4),i(),t(5,`
                `),n(6,"div",12),t(7),i(),t(8,`
            `),i(),t(9,`
        `)),e&2){let o=m();r(4),s(`
                    `,"ECDSA",`
                `),r(3),s(`
                    `,o.sshFingerprints.EC,`
                `)}}var J=(()=>{class e{sshUserSettingsService=g(F);sshFingerprints;documentationType="SshSetup";ButtonType=M;ButtonSize=P;ngOnInit(){return c(this,null,function*(){this.sshFingerprints=yield this.sshUserSettingsService.getSshFingerprints()})}static \u0275fac=function(l){return new(l||e)};static \u0275cmp=u({type:e,selectors:[["jhi-account-information"]],decls:37,vars:8,consts:[["jhiTranslate","artemisApp.userSettings.sshSettingsPage.sshFingerprints"],[1,"list-group","d-block"],[1,"list-group-item"],[1,"d-flex","flex-wrap"],[1,"font-medium"],["jhiTranslate","artemisApp.userSettings.sshSettingsPage.fingerprintsExplanation",1,"mt-4"],[3,"documentationType","displayString"],[1,"d-flex","justify-content-between","align-items-center","mt-4"],[1,"btn","rounded-btn","btn-primary","btn-sm",3,"routerLink"],["jhiTranslate","artemisApp.userSettings.sshSettingsPage.back",1,"jhi-btn__title",2,"font-size","small"],[1,"row","small-text"],[1,"column","left"],[1,"column","right"],[1,"row"]],template:function(l,a){l&1&&(d(0,"h1",0),t(1,`

`),n(2,"div",1),t(3,`
    `),t(4,`
    `),n(5,"div",2),t(6,`
        `),n(7,"div",3),t(8,`
            `),n(9,"p",4),t(10,`
                `),n(11,"span",5),t(12," "),i(),t(13,`
                `),d(14,"jhi-documentation-link",6),t(15,`
            `),i(),t(16,`
        `),i(),t(17,`

        `),v(18,T,10,2)(19,k,10,2)(20,A,10,2)(21,I,10,2),n(22,"div",7),t(23,`
            `),d(24,"div"),t(25,`
            `),n(26,"div"),t(27,`
                `),n(28,"a",8),t(29,`
                    `),d(30,"span",9),t(31,`
                `),i(),t(32,`
            `),i(),t(33,`
        `),i(),t(34,`
    `),i(),t(35,`
`),i(),t(36,`
`)),l&2&&(r(14),h("documentationType",a.documentationType)("displayString","artemisApp.userSettings.sshSettingsPage.fingerprintsLearnMore"),r(4),p(a.sshFingerprints&&a.sshFingerprints.RSA?18:-1),r(),p(a.sshFingerprints&&a.sshFingerprints.EdDSA?19:-1),r(),p(a.sshFingerprints&&a.sshFingerprints.ECDSA?20:-1),r(),p(a.sshFingerprints&&a.sshFingerprints.EC?21:-1),r(7),h("routerLink",C(7,y)))},dependencies:[E,w,b],styles:[".column[_ngcontent-%COMP%]{float:left;padding:10px}.left[_ngcontent-%COMP%]{width:15%}.right[_ngcontent-%COMP%]{width:85%}","textarea[_ngcontent-%COMP%]{max-width:600px;width:100%;height:150px;resize:none;font-size:small;font-family:Bitstream Vera Sans Mono,Courier New,monospace;border-color:var(--border-color)!important}.bold-text[_ngcontent-%COMP%]{font-weight:700}.large-text[_ngcontent-%COMP%]{font-size:large}.small-text[_ngcontent-%COMP%]{font-size:small}.text-and-date[_ngcontent-%COMP%]{display:flex;gap:5px}.small-text-area[_ngcontent-%COMP%]{height:30px}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:20px 0;font-size:16px;text-align:left}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:15px}.btn[_ngcontent-%COMP%]{border-radius:0}.rounded-btn[_ngcontent-%COMP%]{border-radius:2px;border-top-width:0}.bottom-border[_ngcontent-%COMP%]{border-bottom-width:2px}.container[_ngcontent-%COMP%]{position:relative}.narrower-box[_ngcontent-%COMP%]{max-width:500px;margin:0 auto}.font-medium[_ngcontent-%COMP%]{font-size:medium}.icon-column[_ngcontent-%COMP%]{width:auto;margin-right:15px}.vertical-center[_ngcontent-%COMP%]{margin:0;position:absolute;top:50%;left:50%;-ms-transform:translateY(-50%);transform:translateY(-50%)}.abbreviate-hash[_ngcontent-%COMP%]{font-size:x-small;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:var(--ssh-key-settings-table-hover-background)}a[_ngcontent-%COMP%]:link:hover{text-decoration:none!important}.dropdown-content[_ngcontent-%COMP%]{overflow-y:auto;position:absolute;background-color:var(--dropdown-bg);border:1px solid var(--border-color);z-index:3000;border-radius:4px}.dropdown-toggle[_ngcontent-%COMP%]:after{display:none}"]})}return e})();export{J as SshUserSettingsFingerprintsComponent};
//# sourceMappingURL=ssh-user-settings-fingerprints.component-JQ57EGFU.js.map
