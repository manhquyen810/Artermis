import{a as te}from"./chunk-NRM2V3HA.js";import{a as J}from"./chunk-7NRBX6ZR.js";import{c as Q,e as Z,f as q,g as G,h as $}from"./chunk-OPXCTAUV.js";import{q as X}from"./chunk-DOLVNMRR.js";import"./chunk-U4DJRHYQ.js";import{a as ee}from"./chunk-JRBFEQNN.js";import"./chunk-DIZEKHOC.js";import"./chunk-V7PDYRDZ.js";import"./chunk-EANMTTQG.js";import{a as Y,d as O}from"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import"./chunk-VWRLJYRR.js";import"./chunk-H2ETPEH6.js";import{c as K}from"./chunk-5MVJAZRV.js";import{K as j,L,a as R}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import"./chunk-WA5GEAJB.js";import{a as P}from"./chunk-K3W6YFKH.js";import{c as V}from"./chunk-JXJXC4DZ.js";import{d as H,f as U}from"./chunk-EDXSOKK5.js";import"./chunk-DID2YGL7.js";import{Da as M,Uc as N,fa as F,kb as B}from"./chunk-Z4VHWOB5.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as W}from"./chunk-U54OSGNH.js";import{f as b,h as D}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as l,Dc as S,Ea as g,Ed as I,Ma as A,Mc as c,Na as _,Oc as u,Tb as w,Zb as h,dd as e,ed as z,kc as p,mc as k,sc as x,sd as E,wb as T,xc as r,yc as a,yd as y,zc as d,zd as v}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var ne=(n,C)=>({competencies:n,knowledgeAreas:C});function oe(n,C){if(n&1){let t=S();e(0,`
                    `),r(1,"div",21),c("click",function(){let i=A(t),m=i.competency,s=i.knowledgeArea,f=u(2);return _(f.openCompetencyDetails(m,s.title))}),e(2,`
                        `),d(3,"fa-icon",22),y(4,"artemisTranslate"),e(5,`
                        `),r(6,"h6",23),e(7),a(),e(8,`
                    `),a(),e(9,`
                `)}if(n&2){let t,o=C.competency,i=u(2);l(3),p("icon",i.getIcon(o.taxonomy))("ngbTooltip",v(4,4,"artemisApp.courseCompetency.taxonomies."+((t=o.taxonomy)!==null&&t!==void 0?t:"none")))("fixedWidth",!0),l(4),z(o.title)}}function re(n,C){if(n&1){let t=S();e(0,`
                `),r(1,"div",24),e(2,`
                    `),r(3,"jhi-standardized-competency-detail",25),c("onClose",function(){A(t);let i=u(2);return _(i.closeCompetencyDetails())}),a(),e(4,`
                `),a(),e(5,`
            `)}if(n&2){let t=u(2);l(3),p("competency",t.selectedCompetency)("knowledgeAreaTitle",t.knowledgeAreaTitle)("sourceString",t.sourceString)}}function ae(n,C){if(n&1&&(e(0,`
        `),d(1,"div",18),e(2,`
        `),r(3,"div",19),e(4,`
            `),r(5,"jhi-knowledge-area-tree",20),e(6,`
                `),h(7,oe,10,6,"ng-template",null,0,I),e(9,`
            `),a(),e(10,`
            `),h(11,re,6,3),a(),e(12,`
    `)),n&2){let t=u();l(),p("translateValues",E(4,ne,t.importCount.competencies,t.importCount.knowledgeAreas)),l(4),p("dataSource",t.dataSource)("treeControl",t.treeControl),l(6),x(t.selectedCompetency?11:-1)}}function me(n,C){n&1&&(e(0,`
        `),d(1,"span",26),e(2,`
    `))}var De=(()=>{class n{isLoading=!1;isCollapsed=!1;selectedCompetency;knowledgeAreaTitle="";sourceString="";importData;importCount;dataSource=new G;treeControl=new q(t=>t.children);fileReader=new FileReader;faFileImport=M;faBan=F;faQuestionCircle=B;faChevronRight=N;getIcon=X;ButtonType=Y;importExample=`\`\`\`
{
    "knowledgeAreas": [{
        "title": "Artificial Intelligence",
        "shortTitle": "AI",
        "description": "AI is a field in computer science...", //(optional)
        "competencies": [{
            "title": "Machine Learning",
            "description": "1. Explain examples of machine learning tasks \\n2. ....", //(optional)
            //(optional) one of REMEMBER, UNDERSTAND, APPLY, ANALYZE, EVALUATE, CREATE
            "taxonomy": "UNDERSTAND",
            //(optional) must match a source below if it exists
            "sourceId": 1,
        }],
        "children": [{
            //nested knowledge areas...
        }],
    }],
    "sources": [{
        "id": 1,
        "title": "Book about machine learning",
        "author": "Doe, Mustermann, et al.",
        "uri": "http://localhost" //(optional)
    }]
}
\`\`\``;alertService=g(V);adminStandardizedCompetencyService=g(J);activatedRoute=g(b);router=g(D);onFileChange(t){this.dataSource.data=[];let o=t.target;if(o.files?.length){let i=o.files;if(i.length!=1){this.alertService.error("artemisApp.standardizedCompetency.manage.import.error.fileCount");return}let m=i[0];if(m.name.toLowerCase().endsWith(".json"))if(m.size>20971520){this.alertService.error("artemisApp.standardizedCompetency.manage.import.error.fileTooBig");return}else this.fileReader.readAsText(m),this.fileReader.onload=()=>this.setImportDataAndCount();else{this.alertService.error("artemisApp.standardizedCompetency.manage.import.error.fileExtension");return}}}openCompetencyDetails(t,o){let i=this.importData?.sources.find(m=>m.id===t.sourceId);this.sourceString=i?Q(i):"",this.knowledgeAreaTitle=o,this.selectedCompetency=t}closeCompetencyDetails(){this.sourceString="",this.knowledgeAreaTitle="",this.selectedCompetency=void 0}importCompetencies(){this.isLoading=!0,this.adminStandardizedCompetencyService.importStandardizedCompetencyCatalog(this.importData).subscribe({next:()=>{this.isLoading=!1,this.alertService.success("artemisApp.standardizedCompetency.manage.import.success"),this.router.navigate(["../"],{relativeTo:this.activatedRoute})},error:t=>{K(this.alertService,t),this.isLoading=!1}})}toggleCollapse(){this.isCollapsed=!this.isCollapsed}cancel(){this.router.navigate(["../"],{relativeTo:this.activatedRoute})}setImportDataAndCount(){this.importData=void 0,this.importCount={knowledgeAreas:0,competencies:0};try{this.importData=JSON.parse(this.fileReader.result)}catch{this.alertService.error("artemisApp.standardizedCompetency.manage.import.error.fileSyntax")}try{this.importData&&(this.importCount=this.countKnowledgeAreasAndCompetencies({children:this.importData.knowledgeAreas}),this.importCount.knowledgeAreas-=1,this.dataSource.data=this.importData.knowledgeAreas.map(t=>Z(t)))}catch{this.importData=void 0,this.alertService.error("artemisApp.standardizedCompetency.manage.import.error.fileStructure")}}countKnowledgeAreasAndCompetencies(t){let o=t.competencies?.length??0,m=(t.children?.map(s=>this.countKnowledgeAreasAndCompetencies(s))??[]).reduce((s,f)=>({knowledgeAreas:s.knowledgeAreas+f.knowledgeAreas,competencies:s.competencies+f.competencies}),{knowledgeAreas:0,competencies:0});return{knowledgeAreas:m.knowledgeAreas+1,competencies:m.competencies+o}}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=w({type:n,selectors:[["jhi-admin-import-standardized-competencies"]],decls:43,vars:15,consts:[["competencyTemplate",""],[1,"container"],["jhiTranslate","artemisApp.standardizedCompetency.manage.import.title"],[1,"card","mt-3"],[1,"card-header","d-flex","align-items-center","mw-100","clickable",3,"click"],[1,"me-2"],[1,"rotate-icon","chevron-position",3,"icon"],["jhiTranslate","artemisApp.standardizedCompetency.manage.import.format.title",1,"mb-0"],[1,"card-body",3,"ngbCollapse"],["jhiTranslate","artemisApp.standardizedCompetency.manage.import.format.text1"],["jhiTranslate","artemisApp.standardizedCompetency.manage.import.format.text2"],["jhiTranslate","artemisApp.standardizedCompetency.manage.import.format.text3"],[3,"innerHTML"],["type","file","accept","application/json",1,"mt-3",3,"change"],["jhiTranslate","artemisApp.standardizedCompetency.manage.import.preview.title",1,"mt-3"],[1,"mt-3"],[3,"onClick","btnType","title","icon"],[3,"onClick","disabled","isLoading","icon","title"],["jhiTranslate","artemisApp.standardizedCompetency.manage.import.count",1,"mb-1",3,"translateValues"],[1,"d-flex"],[1,"d-flex","flex-grow-1","h-100","w-50",3,"dataSource","treeControl"],[1,"d-flex","align-items-center","clickable",3,"click"],[1,"me-2",3,"icon","ngbTooltip","fixedWidth"],[1,"mb-0"],[1,"card","d-flex","flex-grow-1","w-100","h-100","p-3","ms-1",2,"background-color","var(--overview-light-background-color)"],[3,"onClose","competency","knowledgeAreaTitle","sourceString"],["jhiTranslate","artemisApp.standardizedCompetency.manage.import.preview.empty"]],template:function(o,i){o&1&&(r(0,"div",1),e(1,`
    `),d(2,"h2",2),e(3,`
    `),r(4,"div",3),e(5,`
        `),r(6,"div",4),c("click",function(){return i.toggleCollapse()}),e(7,`
            `),r(8,"div",5),e(9,`
                `),d(10,"fa-icon",6),e(11,`
            `),a(),e(12,`
            `),d(13,"h5",7),e(14,`
        `),a(),e(15,`
        `),r(16,"div",8),e(17,`
            `),d(18,"p",9),e(19,`
            `),d(20,"p",10),e(21,`
            `),d(22,"p",11),e(23,`
            `),d(24,"div",12),y(25,"htmlForMarkdown"),e(26,`
        `),a(),e(27,`
    `),a(),e(28,`
    `),r(29,"input",13),c("change",function(s){return i.onFileChange(s)}),a(),e(30,`
    `),d(31,"h4",14),e(32,`
    `),h(33,ae,13,7)(34,me,3,0),r(35,"div",15),e(36,`
        `),r(37,"jhi-button",16),c("onClick",function(){return i.cancel()}),a(),e(38,`
        `),r(39,"jhi-button",17),c("onClick",function(){return i.importCompetencies()}),a(),e(40,`
    `),a(),e(41,`
`),a(),e(42,`
`)),o&2&&(l(10),k("rotated",!i.isCollapsed),p("icon",i.faChevronRight),l(6),p("ngbCollapse",i.isCollapsed),l(8),p("innerHTML",v(25,13,i.importExample),T),l(9),x(i.importCount&&(i.importCount!=null&&i.importCount.knowledgeAreas)?33:34),l(4),p("btnType",i.ButtonType.SECONDARY)("title","entity.action.cancel")("icon",i.faBan),l(2),p("disabled",!i.importData)("isLoading",i.isLoading)("icon",i.faFileImport)("title","entity.action.to-import"))},dependencies:[U,H,te,$,R,ee,P,L,j,W,O],encapsulation:2})}return n})();export{De as AdminImportStandardizedCompetenciesComponent};
//# sourceMappingURL=admin-import-standardized-competencies.component-LVZYAKC4.js.map
