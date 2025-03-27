import{c as f}from"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import{a as g}from"./chunk-K3W6YFKH.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as x}from"./chunk-U54OSGNH.js";import{f as v}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as o,Ea as s,Tb as u,dd as e,ed as d,fd as l,xc as i,yc as n,yd as m,zd as p}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var I=(()=>{class r{activatedRoute=s(v);profileService=s(f);versionString;allowedMinimumVersion;ngOnInit(){this.activatedRoute.queryParams.subscribe(a=>{this.versionString=a.versionString,this.profileService.getProfileInfo().subscribe(t=>{this.allowedMinimumVersion=t.allowedMinimumOrionVersion})})}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=u({type:r,selectors:[["jhi-orion-outdated"]],decls:18,vars:8,consts:[["jhiTranslate","artemisApp.orion.version.outdated",1,"text-danger","font-weight-bold"],[1,"font-weight-bold"],[1,"badge","bg-pill","bg-danger"],[1,"badge","bg-pill","bg-info"]],template:function(t,c){t&1&&(e(0,`
        `),i(1,"h2",0),e(2,"The version of Orion you are currently using is outdated!"),n(),e(3,`
        `),i(4,"div",1),e(5),m(6,"artemisTranslate"),i(7,"span",2),e(8),n(),e(9,`!
        `),n(),e(10,`
        `),i(11,"div"),e(12),m(13,"artemisTranslate"),i(14,"span",3),e(15),n(),e(16,`
        `),n(),e(17,`
    `)),t&2&&(o(5),l(`
            `,p(6,4,"artemisApp.orion.version.usedVersion"),""),o(3),d(c.versionString),o(4),l(`
            `,p(13,6,"artemisApp.orion.version.allowedVersion"),""),o(3),d(c.allowedMinimumVersion))},dependencies:[x,g],encapsulation:2})}return r})();export{I as OrionOutdatedComponent};
//# sourceMappingURL=orion-outdated.component-ZWMG5UBM.js.map
