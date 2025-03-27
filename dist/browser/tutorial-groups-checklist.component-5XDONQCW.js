import{a as I}from"./chunk-X237AILQ.js";import{a as w}from"./chunk-X3HHHVRJ.js";import{d as F}from"./chunk-AR57MWOI.js";import"./chunk-A5PTZAPN.js";import"./chunk-AU6UEH3U.js";import{a as M}from"./chunk-FGAONQTL.js";import"./chunk-HQ6UGNQX.js";import"./chunk-ZLJ76G5I.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import{c as Z}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import"./chunk-5GXY5RYT.js";import{c as E}from"./chunk-JXJXC4DZ.js";import{d as D}from"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Lc as L,hb as j}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as P}from"./chunk-U54OSGNH.js";import{f as A,i as G}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{A as C,Db as o,Ea as l,Id as _,Oc as p,Tb as y,W as b,Zb as f,aa as k,dd as e,f as x,kc as s,mc as g,oa as v,pa as T,rd as d,sc as m,sd as S,xc as r,yc as a,zc as n}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var U=i=>["/course-management",i,"edit"],O=i=>["/course-management",i,"tutorial-groups"],R=(i,u)=>["/course-management",i,"tutorial-groups","configuration",u,"edit"],W=i=>["/course-management",i,"create-tutorial-groups-configuration"];function z(i,u){if(i&1&&(e(0,`
                        `),r(1,"a",16),e(2,`
                            `),n(3,"fa-icon",9),e(4,"\xA0"),n(5,"span",17),e(6,`
                        `),a(),e(7,`
                    `)),i&2){let t=p(2);o(),g("disabled",!t.isTimeZoneConfigured),s("routerLink",S(4,R,t.course.id,t.course.tutorialGroupsConfiguration.id)),o(2),s("icon",t.faPlus)}}function B(i,u){if(i&1&&(e(0,`
                        `),r(1,"a",16),e(2,`
                            `),n(3,"fa-icon",9),e(4,"\xA0"),n(5,"span",18),e(6,`
                        `),a(),e(7,`
                    `)),i&2){let t=p(2);o(),g("disabled",!t.isTimeZoneConfigured),s("routerLink",d(4,W,t.course.id)),o(2),s("icon",t.faPlus)}}function N(i,u){if(i&1&&(e(0,`
        `),r(1,"div",1),e(2,`
            `),r(3,"div",2),e(4,`
                `),n(5,"h1",3),e(6,`
                `),n(7,"p",4),e(8,`
            `),a(),e(9,`
            `),n(10,"hr"),e(11,`
            `),r(12,"div",2),e(13,`
                `),n(14,"p",5),e(15,`
                `),r(16,"div"),e(17,`
                    `),n(18,"jhi-checklist-check",6),e(19,`
                    `),n(20,"label",7),e(21,`
                    `),r(22,"a",8),e(23,`
                        `),n(24,"fa-icon",9),e(25,"\xA0"),n(26,"span",10),e(27,`
                    `),a(),e(28,`
                `),a(),e(29,`
            `),a(),e(30,`
            `),n(31,"hr"),e(32,`
            `),r(33,"div",2),e(34,`
                `),n(35,"p",11),e(36,`
                `),r(37,"table"),e(38,`
                    `),n(39,"jhi-checklist-check",12),e(40,`
                    `),n(41,"label",13),e(42,`
                    `),f(43,z,8,7)(44,B,8,6),a(),e(45,`
            `),a(),e(46,`
            `),n(47,"hr"),e(48,`
            `),r(49,"div",2),e(50,`
                `),r(51,"button",14),e(52,`
                    `),n(53,"span",15),e(54,`
                `),a(),e(55,`
            `),a(),e(56,`
        `),a(),e(57,`
    `)),i&2){let t=p();o(18),s("checkAttribute",t.isTimeZoneConfigured),o(4),s("routerLink",d(8,U,t.course.id)),o(2),s("icon",t.faWrench),o(15),s("checkAttribute",t.isTutorialGroupConfigurationCreated),o(4),m(t.isTutorialGroupConfigurationCreated?43:-1),o(),m(t.isTutorialGroupConfigurationCreated?-1:44),o(7),s("routerLink",d(10,O,t.course.id))("disabled",!t.isFullyConfigured)}}var se=(()=>{class i{activatedRoute=l(A);courseManagementService=l(F);alertService=l(E);tutorialGroupsConfigurationService=l(M);cdr=l(_);isLoading=!1;course;isTimeZoneConfigured=!1;isTutorialGroupConfigurationCreated=!1;faWrench=j;faPlus=L;ngUnsubscribe=new x;get isFullyConfigured(){return this.isTimeZoneConfigured&&this.isTutorialGroupConfigurationCreated}ngOnInit(){this.isLoading=!0,this.activatedRoute.paramMap.pipe(b(1),v(t=>{let c=Number(t.get("courseId"));return C([this.courseManagementService.find(c),this.tutorialGroupsConfigurationService.getOneOfCourse(c)])}),k(()=>this.isLoading=!1),T(this.ngUnsubscribe)).subscribe({next:([t,c])=>{t.body&&(this.course=t.body,this.isTimeZoneConfigured=!!this.course.timeZone),c.body&&(this.course.tutorialGroupsConfiguration=c.body,this.isTutorialGroupConfigurationCreated=!!this.course.tutorialGroupsConfiguration)},error:t=>Z(this.alertService,t)}).add(()=>this.cdr.detectChanges())}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}static \u0275fac=function(c){return new(c||i)};static \u0275cmp=y({type:i,selectors:[["jhi-tutorial-groups-checklist"]],decls:4,vars:2,consts:[[3,"isLoading"],[1,"row"],[1,"col-12"],["jhiTranslate","artemisApp.pages.checklist.title"],["jhiTranslate","artemisApp.pages.checklist.explanation"],["jhiTranslate","artemisApp.pages.checklist.timeZoneExplanation"],["id","timeZone",3,"checkAttribute"],["for","timeZone","jhiTranslate","artemisApp.pages.checklist.timeZone",1,"form-check-label","pe-4"],[1,"btn","btn-warning","btn-md","my-2",3,"routerLink"],[3,"icon"],["jhiTranslate","artemisApp.pages.checklist.editCourse"],["jhiTranslate","artemisApp.pages.checklist.configurationExplanation"],["id","configuration",3,"checkAttribute"],["for","configuration","jhiTranslate","artemisApp.pages.checklist.configuration",1,"form-check-label","pe-4"],[1,"btn","btn-primary","btn-md","my-2",3,"routerLink","disabled"],["jhiTranslate","artemisApp.pages.checklist.continueToManagement"],[1,"btn","btn-primary","btn-md","my-2",3,"routerLink"],["jhiTranslate","artemisApp.pages.tutorialGroupsManagement.editConfigurationButton"],["jhiTranslate","artemisApp.pages.checklist.createConfiguration"]],template:function(c,h){c&1&&(r(0,"jhi-loading-indicator-container",0),e(1,`
    `),f(2,N,58,12),a(),e(3,`
`)),c&2&&(s("isLoading",h.isLoading),o(2),m(h.course?2:-1))},dependencies:[I,P,w,G,D],encapsulation:2,changeDetection:0})}return i})();export{se as TutorialGroupsChecklistComponent};
//# sourceMappingURL=tutorial-groups-checklist.component-5XDONQCW.js.map
