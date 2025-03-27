import{a as ce}from"./chunk-PVMY5D66.js";import{a as de}from"./chunk-DO3GZ3ZH.js";import{b as me}from"./chunk-TECMX7AA.js";import"./chunk-HK7MJBP6.js";import"./chunk-2CUFQLAH.js";import"./chunk-MKPB4JKY.js";import"./chunk-I76AVIQH.js";import"./chunk-H2ETPEH6.js";import"./chunk-Z6NSEM73.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import{c as b}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import{K as J}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{A as H,B as $,C as z,K as G,c as q,h as K,m as Q,o as Z}from"./chunk-WA5GEAJB.js";import"./chunk-5GXY5RYT.js";import{a as se}from"./chunk-K3W6YFKH.js";import{c as re}from"./chunk-JXJXC4DZ.js";import{d as le}from"./chunk-EDXSOKK5.js";import"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Lc as ie,Oc as ne,fa as Y,kb as ee,tb as te,wd as ae}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as oe}from"./chunk-U54OSGNH.js";import{f as F,h as R}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import{c as X}from"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{N as O}from"./chunk-IOA4DPXY.js";import{A as C,Db as r,Dc as D,Ea as h,Ma as u,Mc as _,Na as g,Oc as p,Rc as W,Sc as j,Tb as N,U as w,Zb as P,dd as e,f as M,fd as y,gd as B,ia as I,kc as c,ld as f,md as x,nd as v,oa as A,sc as E,uc as L,vc as k,wc as V,xc as n,yc as a,yd as S,zc as o,zd as U}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";function pe(m,T){if(m&1){let t=D();e(0,`
                    `),n(1,"tr",23),e(2,`
                        `),n(3,"td"),e(4,`
                            `),n(5,"input",24),v("ngModelChange",function(i){let l=u(t).$index,d=p();return x(d.units[l].unitName,i)||(d.units[l].unitName=i),g(i)}),a(),e(6,`
                        `),a(),e(7,`
                        `),n(8,"td"),e(9,`
                            `),n(10,"jhi-date-time-picker",25),v("ngModelChange",function(i){let l=u(t).$index,d=p();return x(d.units[l].releaseDate,i)||(d.units[l].releaseDate=i),g(i)}),a(),e(11,`
                        `),a(),e(12,`
                        `),n(13,"td"),e(14,`
                            `),n(15,"input",26),v("ngModelChange",function(i){let l=u(t).$implicit;return x(l.startPage,i)||(l.startPage=i),g(i)}),a(),e(16,`
                        `),a(),e(17,`
                        `),n(18,"td"),e(19,`
                            `),n(20,"input",27),v("ngModelChange",function(i){let l=u(t).$implicit;return x(l.endPage,i)||(l.endPage=i),g(i)}),a(),e(21,`
                        `),a(),e(22,`
                        `),n(23,"td"),e(24,`
                            `),n(25,"div",28),e(26,`
                                `),n(27,"button",29),_("click",function(){let i=u(t).$index,l=p();return g(l.deleteRow(i))}),o(28,"fa-icon",12),a(),e(29,`
                            `),a(),e(30,`
                        `),a(),e(31,`
                    `),a(),e(32,`
                `)}if(m&2){let t=T.$implicit,s=T.$index,i=p();r(),j("id","unit-row-",s,""),r(4),c("defaultValue",t.unitName),f("ngModel",i.units[s].unitName),r(5),c("shouldDisplayTimeZoneWarning",!1),f("ngModel",i.units[s].releaseDate),r(5),c("max",t.endPage)("min",1)("defaultValue",t.startPage),f("ngModel",t.startPage),r(5),c("max",i.numberOfPages)("min",t.startPage)("defaultValue",t.endPage),f("ngModel",t.endPage),r(7),c("disabled",i.units&&i.units.length===1),r(),c("icon",i.faTimes)}}function he(m,T){if(m&1&&(e(0,`
        `),n(1,"div",30),e(2,`
            `),o(3,"fa-icon",12),e(4),S(5,"artemisTranslate"),a(),e(6,`
    `)),m&2){let t=p();r(3),c("icon",t.faExclamationTriangle),r(),y(`
            `,U(5,2,"artemisApp.attachmentUnit.createAttachmentUnits.noUnitDetected"),`
        `)}}function ue(m,T){if(m&1&&(e(0,`
        `),n(1,"div",31),e(2,`
            `),o(3,"fa-icon",12),e(4,`
            `),n(5,"span"),e(6),a(),e(7,`
        `),a(),e(8,`
    `)),m&2){let t=p();r(3),c("icon",t.faExclamationTriangle),r(3),y(`
                `,t.invalidUnitTableMessage,`
            `)}}var De=(()=>{class m{activatedRoute=h(F);router=h(R);attachmentUnitService=h(ce);alertService=h(re);translateService=h(X);lectureId;courseId;isLoading;isProcessingMode;units=[];numberOfPages;faSave=te;faBan=Y;faTimes=ne;faPlus=ie;faExclamationTriangle=ae;faQuestionCircle=ee;invalidUnitTableMessage;keyphrases;search=new M;removedSlidesNumbers;file;filename;MINUTES_UNTIL_DELETION=29;constructor(){this.file=this.router.getCurrentNavigation()?.extras?.state?.file;let t=this.activatedRoute.parent.parent;C([t.paramMap,t.parent.paramMap]).subscribe(([s])=>{this.lectureId=Number(s.get("lectureId")),this.courseId=Number(s.get("courseId"))})}ngOnInit(){if(this.keyphrases="",this.removedSlidesNumbers=[],this.isLoading=!0,this.isProcessingMode=!0,!this.file){this.alertService.error(this.translateService.instant("artemisApp.attachmentUnit.createAttachmentUnits.noFile")),this.isLoading=!0;return}setTimeout(()=>{this.attachmentUnitService.uploadSlidesForProcessing(this.lectureId,this.file).pipe(I({delay:1e3*60*this.MINUTES_UNTIL_DELETION})).subscribe({next:t=>{this.filename=t.body},error:t=>{b(this.alertService,t),this.isLoading=!1}})},1e3*60*this.MINUTES_UNTIL_DELETION),this.attachmentUnitService.uploadSlidesForProcessing(this.lectureId,this.file).pipe(A(t=>{if(t instanceof O)throw new Error(t.message);return this.filename=t.body,this.attachmentUnitService.getSplitUnitsData(this.lectureId,this.filename)})).subscribe({next:t=>{this.units=t.body.units||this.units,this.numberOfPages=t.body.numberOfPages,this.isLoading=!1},error:t=>{b(this.alertService,t),this.isLoading=!1}}),this.search.pipe(w(500),A(()=>this.attachmentUnitService.getSlidesToRemove(this.lectureId,this.filename,this.keyphrases))).subscribe({next:t=>{t.body&&(this.removedSlidesNumbers=t.body.map(s=>s+1))},error:t=>{b(this.alertService,t)}})}createAttachmentUnits(){if(this.validUnitInformation()){this.isLoading=!0;let t={units:this.units,numberOfPages:this.numberOfPages,removeSlidesCommaSeparatedKeyPhrases:this.keyphrases};this.attachmentUnitService.createUnits(this.lectureId,this.filename,t).subscribe({next:()=>{this.router.navigate(["../../"],{relativeTo:this.activatedRoute}),this.isLoading=!1},error:s=>{b(this.alertService,s)}})}}set searchTerm(t){t.trim()!==""?(this.keyphrases=t,this.search.next()):this.removedSlidesNumbers=[]}get searchTerm(){return this.keyphrases}cancelSplit(){this.router.navigate(["course-management",this.courseId.toString(),"lectures",this.lectureId.toString()])}addRow(){let t={unitName:"",startPage:0,endPage:0};return this.units.push(t),!0}deleteRow(t){return this.units.length===1?!1:(this.units.splice(t,1),!0)}validUnitInformation(){for(let t of this.units){if(!t.unitName)return this.invalidUnitTableMessage=this.translateService.instant("artemisApp.attachmentUnit.createAttachmentUnits.validation.empty.unitName"),!1;if(t.startPage===null)return this.invalidUnitTableMessage=this.translateService.instant("artemisApp.attachmentUnit.createAttachmentUnits.validation.empty.startPage"),!1;if(t.endPage===null)return this.invalidUnitTableMessage=this.translateService.instant("artemisApp.attachmentUnit.createAttachmentUnits.validation.empty.endPage"),!1;if(t.startPage<1)return this.invalidUnitTableMessage=this.translateService.instant("artemisApp.attachmentUnit.createAttachmentUnits.validation.startPage"),!1;if(t.startPage>this.numberOfPages)return this.invalidUnitTableMessage=this.translateService.instant("artemisApp.attachmentUnit.createAttachmentUnits.validation.startPageBigger",{max:this.numberOfPages??""}),!1;if(t.endPage<1)return this.invalidUnitTableMessage=this.translateService.instant("artemisApp.attachmentUnit.createAttachmentUnits.validation.endPageLower"),!1;if(t.endPage>this.numberOfPages)return this.invalidUnitTableMessage=this.translateService.instant("artemisApp.attachmentUnit.createAttachmentUnits.validation.endPage",{max:this.numberOfPages??""}),!1;if(t.startPage>t.endPage)return this.invalidUnitTableMessage=this.translateService.instant("artemisApp.attachmentUnit.createAttachmentUnits.validation.invalidPages",{unitName:t.unitName??""}),!1}return this.invalidUnitTableMessage=void 0,!0}static \u0275fac=function(s){return new(s||m)};static \u0275cmp=N({type:m,selectors:[["jhi-attachment-units"]],decls:88,vars:20,consts:[[3,"isLoading"],[1,"col-4"],["id","page-heading"],["jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnits.split.unit"],[1,"table-responsive"],[1,"table","table-striped"],["jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnits.split.unitName"],["jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnits.split.releaseDate"],["jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnits.split.startPage"],["jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnits.split.endPage"],["id","lecture-preview",1,"table-body"],[1,"btn","btn-success","mt-2",3,"click"],[3,"icon"],[1,"mt-3","mb-3"],["jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnits.removeSlides",1,"px-1"],[1,"alert","alert-warning","mt-3","ml-3"],["jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnits.removeSlidesInfo.firstLine"],["jhiTranslate","artemisApp.attachmentUnit.createAttachmentUnits.removeSlidesInfo.secondLine"],["type","text","id","removeSlidesCommaSeparatedKeyPhrases","autocomplete","off",1,"form-control",3,"ngModelChange","placeholder","ngModel"],["type","button",1,"btn","btn-primary",3,"click","ngbTooltip","disabled"],["jhiTranslate","entity.action.submit"],[1,"btn","btn-secondary",3,"click"],["jhiTranslate","entity.action.cancel"],[3,"id"],["required","","type","text","name","unitName","placeholder","Unit Name","autocomplete","off",1,"form-control",3,"ngModelChange","defaultValue","ngModel"],["name","releaseDate","id","release-date",3,"ngModelChange","shouldDisplayTimeZoneWarning","ngModel"],["required","","type","number","name","startPage","placeholder","Start Page","autocomplete","off",1,"form-control",3,"ngModelChange","max","min","defaultValue","ngModel"],["required","","type","number","name","endPage","placeholder","End Page","autocomplete","off",1,"form-control",3,"ngModelChange","max","min","defaultValue","ngModel"],[1,"text-center"],[1,"btn","btn-danger",3,"click","disabled"],[1,"alert","alert-danger","mt-3"],[1,"alert","alert-warning","mt-3"]],template:function(s,i){s&1&&(n(0,"jhi-lecture-unit-layout",0),e(1,`
    `),n(2,"div",1),e(3,`
        `),n(4,"h2",2),e(5,`
            `),o(6,"span",3),e(7,`
        `),a(),e(8,`
    `),a(),e(9,`
    `),n(10,"div",4),e(11,`
        `),n(12,"table",5),e(13,`
            `),n(14,"thead"),e(15,`
                `),n(16,"tr"),e(17,`
                    `),n(18,"th"),o(19,"span",6),a(),e(20,`
                    `),n(21,"th"),e(22,`
                        `),o(23,"span",7),e(24,`
                    `),a(),e(25,`
                    `),n(26,"th"),o(27,"span",8),a(),e(28,`
                    `),n(29,"th"),o(30,"span",9),a(),e(31,`
                    `),o(32,"th"),e(33,`
                `),a(),e(34,`
            `),a(),e(35,`
            `),n(36,"tbody",10),e(37,`
                `),k(38,pe,33,16,null,null,L),n(40,"button",11),_("click",function(){return i.addRow()}),e(41,`
                    `),o(42,"fa-icon",12),e(43),S(44,"artemisTranslate"),a(),e(45,`
            `),a(),e(46,`
        `),a(),e(47,`
    `),a(),e(48,`
    `),n(49,"div",13),e(50,`
        `),o(51,"span",14),e(52,`
        `),n(53,"div"),e(54,`
            `),n(55,"div",15),e(56,`
                `),n(57,"ul"),e(58,`
                    `),o(59,"li",16),e(60,`
                    `),o(61,"li",17),e(62,`
                    `),n(63,"li"),e(64),S(65,"artemisTranslate"),a(),e(66,`
                `),a(),e(67,`
            `),a(),e(68,`
            `),n(69,"input",18),S(70,"artemisTranslate"),v("ngModelChange",function(d){return x(i.searchTerm,d)||(i.searchTerm=d),d}),a(),e(71,`
        `),a(),e(72,`
    `),a(),e(73,`
    `),P(74,he,7,4),n(75,"button",19),S(76,"artemisTranslate"),_("click",function(){return i.createAttachmentUnits()}),e(77,`
        `),o(78,"span",20),e(79,`
    `),a(),e(80,`
    `),n(81,"button",21),_("click",function(){return i.cancelSplit()}),o(82,"fa-icon",12),e(83,"\xA0"),o(84,"span",22),a(),e(85,`
    `),P(86,ue,9,2),a(),e(87,`
`)),s&2&&(c("isLoading",i.isLoading),r(38),V(i.units),r(4),c("icon",i.faPlus),r(),y("",U(44,12,"artemisApp.attachmentUnit.createAttachmentUnits.addUnit"),`
                `),r(21),B(`
                        `,U(65,14,"artemisApp.attachmentUnit.createAttachmentUnits.removeSlidesInfo.thirdLine"),`
                        `,i.removedSlidesNumbers.length>0?i.removedSlidesNumbers:"-",`
                    `),r(5),W("placeholder",U(70,16,"artemisApp.attachmentUnit.createAttachmentUnits.removeSlidesPlaceholder")),f("ngModel",i.searchTerm),r(5),E(i.units.length<1?74:-1),r(),c("ngbTooltip",U(76,18,"artemisApp.attachmentUnit.createAttachmentUnits.processTimeInfo"))("disabled",i.units.length<1),r(7),c("icon",i.faBan),r(4),E(i.invalidUnitTableMessage?86:-1))},dependencies:[de,oe,G,q,Z,K,z,$,H,Q,me,le,J,se],encapsulation:2})}return m})();export{De as AttachmentUnitsComponent};
//# sourceMappingURL=attachment-units.component-7IMTOG44.js.map
