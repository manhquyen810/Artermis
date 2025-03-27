import{a as $}from"./chunk-USOMQCKZ.js";import{b as l}from"./chunk-6EYB5QBP.js";import{a as q}from"./chunk-2QXIMOEO.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import{o as M,p as O,q as N,r as R,s as j}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import"./chunk-WA5GEAJB.js";import"./chunk-K3W6YFKH.js";import{d as Y}from"./chunk-EDXSOKK5.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Bb as V,Lc as B}from"./chunk-Z4VHWOB5.js";import{a as A}from"./chunk-U54OSGNH.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{n as k,t as F}from"./chunk-IOA4DPXY.js";import{Cc as S,Db as g,Dc as I,Ea as T,Ed as y,Ma as _,Mc as C,Na as x,Oc as m,Tb as w,Zb as u,ab as D,cd as v,dd as t,fd as h,kc as p,rd as b,sc as L,uc as f,vc as P,wc as E,xc as a,yc as o,zc as d}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";function H(n,s){return!n||!s?!1:n.deepLink==s.deepLink}var U=n=>({language:n});function G(n,s){n&1&&S(0)}function J(n,s){n&1&&S(0)}function K(n,s){if(n&1){let e=I();t(0,`
        `),a(1,"div",3),t(2,`
            `),a(3,"div",8),t(4,`
                `),a(5,"h5"),t(6),o(),t(7,`
                `),a(8,"button",9),C("click",function(){let r=_(e).$implicit,c=m();return x(c.removeProgrammingLanguage(r))}),t(9,`
                    `),d(10,"fa-icon",10),t(11,`
                `),o(),t(12,`
            `),o(),t(13,`
            `),u(14,J,1,0,"ng-container",7),t(15,`
        `),o(),t(16,`
    `)}if(n&2){let e=s.$implicit,i=m(),r=v(24);g(6),h(`
                    `,e,`
                `),g(4),p("icon",i.faTrash),g(4),p("ngTemplateOutlet",r)("ngTemplateOutletContext",b(4,U,e))}}function Q(n,s){if(n&1){let e=I();t(0,`
                        `),a(1,"button",15),C("click",function(){let r=_(e).$implicit,c=m(2);return x(c.addProgrammingLanguage(r))}),t(2),o(),t(3,`
                    `)}if(n&2){let e=s.$implicit;g(2),h(`
                            `,e,`
                        `)}}function W(n,s){if(n&1&&(t(0,`
        `),a(1,"div",11),t(2,`
            `),a(3,"div",12),t(4,`
                `),a(5,"button",13),t(6,`
                    `),d(7,"fa-icon",10),t(8,`
                `),o(),t(9,`
                `),a(10,"div",14),t(11,`
                    `),P(12,Q,4,1,null,null,f),o(),t(14,`
            `),o(),t(15,`
        `),o(),t(16,`
    `)),n&2){let e=m();g(7),p("icon",e.faPlus),g(5),E(e.remainingProgrammingLanguages)}}function X(n,s){if(n&1){let e=I();t(0,`
            `),a(1,"div",17),C("click",function(){let r=_(e).$implicit,c=m().language,z=m();return x(z.changeIde(c,r))}),t(2),o(),t(3,`
        `)}if(n&2){let e=s.$implicit,i=m().language,r=m();g(),p("ngClass",r.isIdeOfProgrammingLanguage(i,e)?"btn-primary selected":"btn-default"),g(),h(`
                `,e.name,`
            `)}}function Z(n,s){if(n&1&&(t(0,`
    `),a(1,"div",16),t(2,`
        `),P(3,X,4,2,null,null,f),o(),t(5,`
`)),n&2){let e=m();g(3),E(e.PREDEFINED_IDE)}}var ue=(()=>{class n{ideSettingsService=T($);ProgrammingLanguage=l;faPlus=B;faTrash=V;PREDEFINED_IDE=[{name:"VS Code",deepLink:"vscode://vscode.git/clone?url={cloneUrl}"}];programmingLanguageToIde=D(new Map([[l.EMPTY,this.PREDEFINED_IDE[0]]]));assignedProgrammingLanguages=[];remainingProgrammingLanguages=Object.values(l).filter(e=>e!==l.EMPTY);ngOnInit(){this.ideSettingsService.loadPredefinedIdes().subscribe(e=>{this.PREDEFINED_IDE=e}),this.ideSettingsService.loadIdePreferences(!0).then(e=>{e.has(l.EMPTY)||e.set(l.EMPTY,this.PREDEFINED_IDE[0]),this.programmingLanguageToIde.set(e),this.assignedProgrammingLanguages=Array.from(e.keys()).filter(i=>i!==l.EMPTY),this.remainingProgrammingLanguages=Array.from(Object.values(l).filter(i=>!this.assignedProgrammingLanguages.includes(i)&&i!==l.EMPTY))})}addProgrammingLanguage(e){this.ideSettingsService.saveIdePreference(e,this.PREDEFINED_IDE[0]).subscribe(i=>{this.programmingLanguageToIde.update(r=>new Map(r.set(e,i))),this.assignedProgrammingLanguages.push(e),this.remainingProgrammingLanguages=this.remainingProgrammingLanguages.filter(r=>r!==e)})}changeIde(e,i){this.ideSettingsService.saveIdePreference(e,i).subscribe(r=>{this.programmingLanguageToIde.update(c=>new Map(c.set(e,r)))})}removeProgrammingLanguage(e){this.ideSettingsService.deleteIdePreference(e).subscribe(()=>{let i=new Map(this.programmingLanguageToIde());i.delete(e),this.programmingLanguageToIde.set(i),this.remainingProgrammingLanguages.push(e),this.assignedProgrammingLanguages=this.assignedProgrammingLanguages.filter(r=>r!==e)})}isIdeOfProgrammingLanguage(e,i){return H(this.programmingLanguageToIde().get(e),i)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=w({type:n,selectors:[["jhi-ide-preferences"]],decls:26,vars:5,consts:[["ideButtonRow",""],["jhiTranslate","artemisApp.userSettings.categories.IDE_PREFERENCES"],[1,"list-group","d-block"],[1,"list-group-item","pb-3"],["jhiTranslate","artemisApp.userSettings.idePreferencesPage.description"],["placement","right auto","text","artemisApp.userSettings.idePreferencesPage.jetbrainsHelp"],["jhiTranslate","artemisApp.userSettings.idePreferencesPage.default",1,"py-2"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"item-container","d-flex","flex-row","justify-content-between","align-items-center","pb-2"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],[3,"icon"],[1,"list-group-item"],["ngbDropdown","",1,"d-inline-block"],["type","button","id","dropdown","ngbDropdownToggle","",1,"btn","btn-primary"],["ngbDropdownMenu","","aria-labelledby","dropdown"],["ngbDropdownItem","",3,"click"],[1,"btn-group"],[1,"btn",3,"click","ngClass"]],template:function(i,r){if(i&1&&(d(0,"h1",1),t(1,`
`),a(2,"div",2),t(3,`
    `),a(4,"div",3),t(5,`
        `),a(6,"dt"),t(7,`
            `),d(8,"span",4),t(9,`
            `),d(10,"jhi-help-icon",5),t(11,`
        `),o(),t(12,`
        `),d(13,"h5",6),t(14,`
        `),u(15,G,1,0,"ng-container",7),t(16,`
    `),o(),t(17,`
    `),t(18,`
    `),P(19,K,17,6,null,null,f),u(21,W,17,1),o(),t(22,`

`),u(23,Z,6,0,"ng-template",null,0,y),t(25,`
`)),i&2){let c=v(24);g(15),p("ngTemplateOutlet",c)("ngTemplateOutletContext",b(3,U,r.ProgrammingLanguage.EMPTY)),g(4),E(r.assignedProgrammingLanguages),g(2),L(r.remainingProgrammingLanguages.length?21:-1)}},dependencies:[A,q,F,Y,j,R,N,O,M,k],styles:["dt[_ngcontent-%COMP%]{font-weight:500}span[_ngcontent-%COMP%]{color:var(--secondary)}.btn-default[_ngcontent-%COMP%]:hover{border:1px solid var(--primary)}.dropdown-toggle[_ngcontent-%COMP%]:after{display:none}"],changeDetection:0})}return n})();export{ue as IdeSettingsComponent};
//# sourceMappingURL=ide-settings.component-3OQCHJB5.js.map
