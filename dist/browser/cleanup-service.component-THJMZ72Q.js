import{b as ne}from"./chunk-TECMX7AA.js";import{a as ie}from"./chunk-2QXIMOEO.js";import"./chunk-HK7MJBP6.js";import"./chunk-2CUFQLAH.js";import"./chunk-MKPB4JKY.js";import"./chunk-I76AVIQH.js";import"./chunk-H2ETPEH6.js";import"./chunk-Z6NSEM73.js";import{c as D}from"./chunk-JNO6DNVW.js";import{a as c,b as X}from"./chunk-EELXLOHY.js";import{u as Y,v as G}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as z,h as q,m as K}from"./chunk-WA5GEAJB.js";import{a as k}from"./chunk-K3W6YFKH.js";import{d as ee,f as te}from"./chunk-EDXSOKK5.js";import{p as h}from"./chunk-DID2YGL7.js";import{Ba as J,Oc as Q}from"./chunk-Z4VHWOB5.js";import{a as V}from"./chunk-U54OSGNH.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{N as H,O as Z}from"./chunk-IOA4DPXY.js";import{Db as s,Dc as M,Ea as f,Ma as T,Mc as b,Na as g,Oc as p,Rc as W,Tb as y,Za as U,Zb as C,ab as S,dd as t,f as E,fd as F,kc as u,ld as $,md as I,nd as P,rd as L,sc as v,td as A,uc as O,vc as R,wc as j,xc as r,ya as B,yc as l,yd as x,zc as d,zd as _}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var w=(()=>{class n{adminResourceUrl="api/core/admin/cleanup";http=f(Z);deleteOrphans(){return this.http.delete(`${this.adminResourceUrl}/orphans`,{observe:"response"})}deletePlagiarismComparisons(e,i){let o=c(e),a=c(i);return this.http.delete(`${this.adminResourceUrl}/plagiarism-comparisons`,{params:{deleteFrom:o,deleteTo:a},observe:"response"})}deleteNonRatedResults(e,i){let o=c(e),a=c(i);return this.http.delete(`${this.adminResourceUrl}/non-rated-results`,{params:{deleteFrom:o,deleteTo:a},observe:"response"})}deleteOldRatedResults(e,i){let o=c(e),a=c(i);return this.http.delete(`${this.adminResourceUrl}/old-rated-results`,{params:{deleteFrom:o,deleteTo:a},observe:"response"})}deleteOldSubmissionVersions(e,i){let o=c(e),a=c(i);return this.http.delete(`${this.adminResourceUrl}/old-submission-versions`,{params:{deleteFrom:o,deleteTo:a},observe:"response"})}getLastExecutions(){return this.http.get(`${this.adminResourceUrl}/last-executions`,{observe:"response"})}countOrphans(){return this.http.get(`${this.adminResourceUrl}/orphans/count`,{observe:"response"})}countPlagiarismComparisons(e,i){let o=c(e),a=c(i);return this.http.get(`${this.adminResourceUrl}/plagiarism-comparisons/count`,{params:{deleteFrom:o,deleteTo:a},observe:"response"})}countNonRatedResults(e,i){let o=c(e),a=c(i);return this.http.get(`${this.adminResourceUrl}/non-rated-results/count`,{params:{deleteFrom:o,deleteTo:a},observe:"response"})}countOldRatedResults(e,i){let o=c(e),a=c(i);return this.http.get(`${this.adminResourceUrl}/old-rated-results/count`,{params:{deleteFrom:o,deleteTo:a},observe:"response"})}countOldSubmissionVersions(e,i){let o=c(e),a=c(i);return this.http.get(`${this.adminResourceUrl}/old-submission-versions/count`,{params:{deleteFrom:o,deleteTo:a},observe:"response"})}static \u0275fac=function(i){return new(i||n)};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var re=n=>({operationName:n}),le=(n,m,e)=>({operationName:n,deleteFrom:m,deleteTo:e});function se(n,m){if(n&1&&(t(0,`
        `),d(1,"p",8),x(2,"artemisTranslate"),t(3,`
    `)),n&2){let e=p();s(),u("jhiTranslate","cleanupService.execute.questionWithoutDates")("translateValues",L(4,re,_(2,2,"cleanupService.operation."+e.operation().name)))}}function de(n,m){if(n&1&&(t(0,`
        `),d(1,"p",8),x(2,"artemisTranslate"),x(3,"artemisDate"),x(4,"artemisDate"),t(5,`
    `)),n&2){let e=p();s(),u("jhiTranslate","cleanupService.execute.question")("translateValues",A(8,le,_(2,2,"cleanupService.operation."+e.operation().name),_(3,4,e.operation().deleteFrom),_(4,6,e.operation().deleteTo)))}}function pe(n,m){if(n&1&&(t(0,`
                            `),d(1,"fa-icon",10),t(2,`
                        `)),n&2){let e=p(3);s(),u("icon",e.faTimes)}}function ce(n,m){if(n&1&&(t(0,`
                            `),d(1,"fa-icon",11),t(2,`
                        `)),n&2){let e=p(3);s(),u("icon",e.faCheckCircle)}}function me(n,m){if(n&1&&(t(0,`
                        `),C(1,pe,3,1)(2,ce,3,1)),n&2){let e=p().$implicit,i=p();s(),v(i.counts[e]>0?1:2)}}function ue(n,m){if(n&1&&(t(0,`
                `),r(1,"li"),t(2,`
                    `),d(3,"span",9),t(4),C(5,me,3,1),l(),t(6,`
            `)),n&2){let e=m.$implicit,i=p();s(3),u("jhiTranslate","cleanupService.entities."+e),s(),F(`
                    : `,i.counts[e],`
                    `),s(),v(i.operationExecuted?5:-1)}}function he(n,m){n&1&&(t(0,`
            `),d(1,"p",12),t(2,`
        `))}var ae=(()=>{class n{operation=U.required();counts={totalCount:0};operationExecuted=!1;dialogErrorSource=new E;dialogError=this.dialogErrorSource.asObservable();activeModal=f(Y);dataCleanupService=f(w);faTimes=Q;faCheckCircle=J;get cleanupKeys(){return Object.keys(this.counts)}close(){this.activeModal.close()}ngOnInit(){this.updateCounts()}executeCleanupOperation(){let e={next:()=>{this.operationExecuted=!0,this.updateCounts()},error:i=>{this.dialogErrorSource.next(i instanceof H?i.message:"An unexpected error occurred.")}};switch(this.operation().name){case"deleteOrphans":this.dataCleanupService.deleteOrphans().subscribe(e);break;case"deletePlagiarismComparisons":this.dataCleanupService.deletePlagiarismComparisons(this.operation().deleteFrom,this.operation().deleteTo).subscribe(e);break;case"deleteNonRatedResults":this.dataCleanupService.deleteNonRatedResults(this.operation().deleteFrom,this.operation().deleteTo).subscribe(e);break;case"deleteOldRatedResults":this.dataCleanupService.deleteOldRatedResults(this.operation().deleteFrom,this.operation().deleteTo).subscribe(e);break;case"deleteOldSubmissionVersions":this.dataCleanupService.deleteOldSubmissionVersions(this.operation().deleteFrom,this.operation().deleteTo).subscribe(e);break}}fetchCounts(){switch(this.operation().name){case"deleteOrphans":return this.dataCleanupService.countOrphans();case"deletePlagiarismComparisons":return this.dataCleanupService.countPlagiarismComparisons(this.operation().deleteFrom,this.operation().deleteTo);case"deleteNonRatedResults":return this.dataCleanupService.countNonRatedResults(this.operation().deleteFrom,this.operation().deleteTo);case"deleteOldRatedResults":return this.dataCleanupService.countOldRatedResults(this.operation().deleteFrom,this.operation().deleteTo);case"deleteOldSubmissionVersions":return this.dataCleanupService.countOldSubmissionVersions(this.operation().deleteFrom,this.operation().deleteTo);default:throw new Error(`Unsupported operation: ${this.operation().name}`)}}updateCounts(){this.fetchCounts().subscribe({next:e=>{this.counts=e.body},error:()=>this.dialogErrorSource.next("An error occurred while fetching updated counts.")})}get hasEntriesToDelete(){return Object.values(this.counts).some(e=>e>0)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=y({type:n,selectors:[["jhi-cleanup-operation-modal"]],inputs:{operation:[1,"operation"]},decls:30,vars:4,consts:[[1,"modal-header"],[1,"modal-title",3,"jhiTranslate"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],["jhiTranslate","cleanupService.modal.affectedEntities"],[1,"modal-footer"],["type","button","jhiTranslate","cleanupService.button.close",1,"btn","btn-secondary",3,"click"],["type","button","jhiTranslate","cleanupService.button.execute",1,"btn","btn-danger",3,"click","disabled"],[3,"jhiTranslate","translateValues"],[3,"jhiTranslate"],[1,"text-danger",3,"icon"],[1,"text-success",3,"icon"],["jhiTranslate","cleanupService.modal.noEntriesToDelete",1,"text-muted"]],template:function(i,o){i&1&&(r(0,"div",0),t(1,`
    `),d(2,"h4",1),t(3,`
    `),r(4,"button",2),b("click",function(){return o.close()}),l(),t(5,`
`),l(),t(6,`
`),r(7,"div",3),t(8,`
    `),C(9,se,4,6)(10,de,6,12),r(11,"div"),t(12,`
        `),d(13,"p",4),t(14,`
        `),r(15,"ul"),t(16,`
            `),R(17,ue,7,3,null,null,O),l(),t(19,`
        `),C(20,he,3,0),l(),t(21,`
`),l(),t(22,`
`),r(23,"div",5),t(24,`
    `),r(25,"button",6),b("click",function(){return o.close()}),l(),t(26,`
    `),r(27,"button",7),b("click",function(){return o.executeCleanupOperation()}),l(),t(28,`
`),l(),t(29,`
`)),i&2&&(s(2),u("jhiTranslate","cleanupService.operation."+o.operation().name),s(7),v(o.operation().name==="deleteOrphans"?9:10),s(8),j(o.cleanupKeys),s(3),v(o.hasEntriesToDelete?-1:20),s(7),u("disabled",!o.hasEntriesToDelete))},dependencies:[V,D,k,te,ee],encapsulation:2})}return n})();function xe(n,m){if(n&1){let e=M();t(0,`
                                `),r(1,"div",11),t(2,`
                                    `),r(3,"jhi-date-time-picker",12),x(4,"artemisTranslate"),P("ngModelChange",function(o){T(e);let a=p().$implicit;return I(a.deleteFrom,o)||(a.deleteFrom=o),g(o)}),b("valueChange",function(){T(e);let o=p().$implicit,a=p();return g(a.validateDates(o))}),l(),t(5,`
                                `),l(),t(6,`
                            `)}if(n&2){let e=p().$implicit;s(3),u("labelName",_(4,5,"cleanupService.table.deleteFrom"))("hideLabelName",!0),$("ngModel",e.deleteFrom),u("shouldDisplayTimeZoneWarning",!1)("error",!e.datesValid())}}function _e(n,m){n&1&&(t(0,`
                                    `),d(1,"span",14),t(2,`
                                `))}function Ce(n,m){if(n&1){let e=M();t(0,`
                                `),r(1,"div",11),t(2,`
                                    `),r(3,"jhi-date-time-picker",13),x(4,"artemisTranslate"),P("ngModelChange",function(o){T(e);let a=p().$implicit;return I(a.deleteTo,o)||(a.deleteTo=o),g(o)}),b("valueChange",function(){T(e);let o=p().$implicit,a=p();return g(a.validateDates(o))}),l(),t(5,`
                                `),l(),t(6,`
                                `),C(7,_e,3,0)}if(n&2){let e=p().$implicit;s(3),u("labelName",_(4,6,"cleanupService.table.deleteTo"))("hideLabelName",!0),$("ngModel",e.deleteTo),u("shouldDisplayTimeZoneWarning",!1)("error",!e.datesValid()),s(4),v(e.datesValid()?-1:7)}}function ve(n,m){n&1&&(t(0),x(1,"artemisTranslate")),n&2&&F(`
                                `,_(1,1,"cleanupService.notRunYet"),`
                            `)}function fe(n,m){if(n&1&&(t(0),x(1,"artemisDate")),n&2){let e=p().$implicit;F(`
                                `,_(1,1,e.lastExecuted),`
                            `)}}function be(n,m){if(n&1){let e=M();t(0,`
                    `),r(1,"tr"),t(2,`
                        `),r(3,"td"),t(4,`
                            `),d(5,"span",8),t(6,`
                            `),d(7,"jhi-help-icon",9),t(8,`
                        `),l(),t(9,`
                        `),r(10,"td"),t(11,`
                            `),C(12,xe,7,7),l(),t(13,`
                        `),r(14,"td"),t(15,`
                            `),C(16,Ce,8,8),l(),t(17,`
                        `),r(18,"td"),t(19,`
                            `),C(20,ve,2,3)(21,fe,2,3),l(),t(22,`
                        `),r(23,"td"),t(24,`
                            `),r(25,"button",10),b("click",function(){let o=T(e).$implicit,a=p();return g(a.openCleanupOperationModal(o))}),t(26),x(27,"artemisTranslate"),l(),t(28,`
                        `),l(),t(29,`
                    `),l(),t(30,`
                `)}if(n&2){let e=m.$implicit;s(5),u("jhiTranslate","cleanupService.operation."+e.name),s(2),W("text","cleanupService.tooltip."+e.name),s(5),v(e.name!=="deleteOrphans"?12:-1),s(4),v(e.name!=="deleteOrphans"?16:-1),s(4),v(e.lastExecuted?21:20),s(5),u("disabled",!e.datesValid()),s(),F(`
                                `,_(27,7,"entity.action.delete"),`
                            `)}}var et=(()=>{class n{dialogErrorSource=new E;dialogError=this.dialogErrorSource.asObservable();dataCleanupService=f(w);modalService=f(G);cleanupOperations=[{name:"deleteOrphans",deleteFrom:h().subtract(12,"months"),deleteTo:h().subtract(6,"months"),lastExecuted:void 0,datesValid:S(!0)},{name:"deletePlagiarismComparisons",deleteFrom:h().subtract(12,"months"),deleteTo:h().subtract(6,"months"),lastExecuted:void 0,datesValid:S(!0)},{name:"deleteNonRatedResults",deleteFrom:h().subtract(12,"months"),deleteTo:h().subtract(6,"months"),lastExecuted:void 0,datesValid:S(!0)},{name:"deleteOldRatedResults",deleteFrom:h().subtract(12,"months"),deleteTo:h().subtract(6,"months"),lastExecuted:void 0,datesValid:S(!0)},{name:"deleteOldSubmissionVersions",deleteFrom:h().subtract(12,"months"),deleteTo:h().subtract(6,"months"),lastExecuted:void 0,datesValid:S(!0)}];ngOnInit(){this.loadLastExecutions()}loadLastExecutions(){this.dataCleanupService.getLastExecutions().subscribe(e=>{let i=e.body;i&&i.length>0&&this.cleanupOperations.forEach((o,a)=>{let N=i[a];N&&N.executionDate&&(o.lastExecuted=X(N.executionDate))})})}validateDates(e){let i=e.deleteFrom&&e.deleteTo&&h(e.deleteTo).isAfter(h(e.deleteFrom));e.datesValid.set(i)}openCleanupOperationModal(e){let i=this.modalService.open(ae,{size:"lg",backdrop:"static"});i.componentInstance.operation=S(e)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=y({type:n,selectors:[["jhi-cleanup-service"]],decls:35,vars:0,consts:[["id","cleanup-page-heading","jhiTranslate","cleanupService.title"],[1,"table-responsive"],["id","cleanupOperations","aria-describedby","cleanup-page-heading",1,"table","table-striped"],["scope","col","jhiTranslate","cleanupService.table.operation"],["scope","col","jhiTranslate","cleanupService.table.deleteFrom"],["scope","col","jhiTranslate","cleanupService.table.deleteTo"],["scope","col","jhiTranslate","cleanupService.table.lastExecuted"],["scope","col"],[3,"jhiTranslate"],[1,"ps-1",3,"text"],["id","execute-operation",1,"btn","btn-md","btn-danger",3,"click","disabled"],[1,"col-md-12"],["id","deleteFromDate",3,"ngModelChange","valueChange","labelName","hideLabelName","ngModel","shouldDisplayTimeZoneWarning","error"],["id","deleteToDate",3,"ngModelChange","valueChange","labelName","hideLabelName","ngModel","shouldDisplayTimeZoneWarning","error"],["jhiTranslate","cleanupService.error.datesInvalid",1,"invalid-feedback"]],template:function(i,o){i&1&&(r(0,"div"),t(1,`
    `),r(2,"h2"),t(3,`
        `),d(4,"span",0),t(5,`
    `),l(),t(6,`
    `),r(7,"div",1),t(8,`
        `),r(9,"table",2),t(10,`
            `),r(11,"thead"),t(12,`
                `),r(13,"tr"),t(14,`
                    `),d(15,"th",3),t(16,`
                    `),d(17,"th",4),t(18,`
                    `),d(19,"th",5),t(20,`
                    `),d(21,"th",6),t(22,`
                    `),d(23,"th",7),t(24,`
                `),l(),t(25,`
            `),l(),t(26,`
            `),r(27,"tbody"),t(28,`
                `),R(29,be,31,9,null,null,O),l(),t(31,`
        `),l(),t(32,`
    `),l(),t(33,`
`),l(),t(34,`
`)),i&2&&(s(29),j(o.cleanupOperations))},dependencies:[ne,k,ie,V,z,q,K,D],encapsulation:2})}return n})();export{et as CleanupServiceComponent};
//# sourceMappingURL=cleanup-service.component-THJMZ72Q.js.map
