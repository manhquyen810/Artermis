import{a as se}from"./chunk-CSMVJDDI.js";import{a as oe}from"./chunk-HZP47FKH.js";import{a as re}from"./chunk-G4HSJ7ME.js";import{c as te,d as ne,e as ie,f as ae,g as le}from"./chunk-F3NFBBHK.js";import"./chunk-OTCBNILH.js";import"./chunk-G3JOQOSD.js";import{u as D,v as K}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{C as z,H as G,K as $,c as Q,h as U,m as q}from"./chunk-WA5GEAJB.js";import"./chunk-5GXY5RYT.js";import"./chunk-K3W6YFKH.js";import{b as A,c as Z}from"./chunk-JXJXC4DZ.js";import{d as h,f as ee}from"./chunk-EDXSOKK5.js";import"./chunk-DID2YGL7.js";import{Bb as E,Ga as w,Oc as S,vc as Y}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import{a as X}from"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as v}from"./chunk-U54OSGNH.js";import{h as O,i as H,m as L}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as s,Dc as f,Ea as g,Ma as _,Mc as u,Na as b,Oc as c,Pb as V,Qd as I,Tb as C,Zb as p,dd as e,ed as B,fd as y,kc as m,ld as F,md as J,nd as N,qd as W,rd as R,sc as T,vc as j,wc as P,xc as i,yc as a,zc as r}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var M=function(n){return n.ACTIVE="ACTIVE",n.PAUSED="PAUSED",n.IDLE="IDLE",n}(M||{});var de=(()=>{class n{activeModal=g(D);faTimes=S;faPause=w;cancel(){this.activeModal.dismiss("cancel")}confirm(){this.activeModal.close(!0)}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=C({type:n,selectors:[["jhi-build-agent-pause-all-modal"]],decls:38,vars:2,consts:[[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["jhiTranslate","artemisApp.buildAgents.pauseAll"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],["jhiTranslate","artemisApp.buildAgents.pauseAllWarning"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],[3,"icon"],["jhiTranslate","artemisApp.buildQueue.filter.close"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(o,l){o&1&&(i(0,"div",0),e(1,`
    `),i(2,"div",1),e(3,`
        `),i(4,"h5",2),e(5,`
            `),r(6,"span",3),e(7,`
        `),a(),e(8,`
        `),i(9,"button",4),u("click",function(){return l.cancel()}),a(),e(10,`
    `),a(),e(11,`
    `),i(12,"div",5),e(13,`
        `),i(14,"div"),e(15,`
            `),r(16,"span",6),e(17,`
        `),a(),e(18,`
    `),a(),e(19,`
    `),i(20,"div",7),e(21,`
        `),i(22,"button",8),u("click",function(){return l.cancel()}),e(23,`
            `),r(24,"fa-icon",9),e(25,`
            `),r(26,"span",10),e(27,`
        `),a(),e(28,`
        `),i(29,"button",11),u("click",function(){return l.confirm()}),e(30,`
            `),r(31,"fa-icon",9),e(32,`
            `),r(33,"span",3),e(34,`
        `),a(),e(35,`
    `),a(),e(36,`
`),a(),e(37,`
`)),o&2&&(s(24),m("icon",l.faTimes),s(7),m("icon",l.faPause))},dependencies:[h,v],encapsulation:2})}return n})();var ce=(()=>{class n{activeModal=g(D);confirmationText=V("");faTimes=S;faTrash=E;expectedConfirmationText="CLEAR DATA";buttonEnabled=I(()=>this.confirmationText()===this.expectedConfirmationText);cancel(){this.activeModal.dismiss("cancel")}confirm(){this.activeModal.close(!0)}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=C({type:n,selectors:[["jhi-build-agent-clear-distributed-data"]],inputs:{confirmationText:[1,"confirmationText"]},outputs:{confirmationText:"confirmationTextChange"},decls:44,vars:5,consts:[[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["jhiTranslate","artemisApp.buildAgents.clearDistributedData.title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],["jhiTranslate","artemisApp.buildAgents.clearDistributedData.descriptionFirst"],["jhiTranslate","artemisApp.buildAgents.clearDistributedData.descriptionSecond"],["jhiTranslate","artemisApp.buildAgents.clearDistributedData.descriptionThird"],["type","text","required","","name","confirm",1,"form-control",3,"ngModelChange","ngModel","pattern"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],[3,"icon"],["jhiTranslate","artemisApp.buildQueue.filter.close"],["type","button",1,"btn","btn-danger",3,"click","disabled"],["jhiTranslate","artemisApp.buildAgents.clearDistributedData.clearData"]],template:function(o,l){o&1&&(i(0,"div",0),e(1,`
    `),i(2,"div",1),e(3,`
        `),i(4,"h5",2),e(5,`
            `),r(6,"span",3),e(7,`
        `),a(),e(8,`
        `),i(9,"button",4),u("click",function(){return l.cancel()}),a(),e(10,`
    `),a(),e(11,`
    `),i(12,"div",5),e(13,`
        `),i(14,"div"),e(15,`
            `),r(16,"div",6),e(17,`
            `),r(18,"div",7),e(19,`
            `),r(20,"div",8),e(21,`
        `),a(),e(22,`
        `),i(23,"input",9),N("ngModelChange",function(k){return J(l.confirmationText,k)||(l.confirmationText=k),k}),a(),e(24,`
    `),a(),e(25,`
    `),i(26,"div",10),e(27,`
        `),i(28,"button",11),u("click",function(){return l.cancel()}),e(29,`
            `),r(30,"fa-icon",12),e(31,`
            `),r(32,"span",13),e(33,`
        `),a(),e(34,`
        `),i(35,"button",14),u("click",function(){return l.confirm()}),e(36,`
            `),r(37,"fa-icon",12),e(38,`
            `),r(39,"span",15),e(40,`
        `),a(),e(41,`
    `),a(),e(42,`
`),a(),e(43,`
`)),o&2&&(s(23),F("ngModel",l.confirmationText),m("pattern","CLEAR DATA"),s(7),m("icon",l.faTimes),s(5),m("disabled",!l.buttonEnabled()),s(2),m("icon",l.faTrash))},dependencies:[h,v,$,Q,U,z,G,q],encapsulation:2})}return n})();var ue=()=>["/admin/build-agents/details"],pe=n=>({agentName:n}),_e=(n,d)=>d.id;function be(n,d){if(n&1){let t=f();e(0,`
                            `),i(1,"span",22),u("click",function(){_(t);let l=c().controls;return b(l.onSort("buildAgent.displayName"))}),e(2,`
                                `),r(3,"span",23),e(4,`
                                `),r(5,"fa-icon",7),e(6,`
                            `),a(),e(7,`
                        `)}if(n&2){let t=c().controls;s(5),m("icon",t.iconForSortPropField("buildAgent.displayName"))}}function ge(n,d){if(n&1&&(e(0,`
                            `),i(1,"a",24),e(2),a(),e(3,`
                        `)),n&2){let t=d.value,o=d.row;s(),m("routerLink",W(3,ue))("queryParams",R(4,pe,o.buildAgent.name)),s(),y(`
                                `,t,`
                            `)}}function xe(n,d){if(n&1){let t=f();e(0,`
                            `),i(1,"span",22),u("click",function(){_(t);let l=c().controls;return b(l.onSort("buildAgent.memberAddress"))}),e(2,`
                                `),r(3,"span",25),e(4,`
                                `),r(5,"fa-icon",7),e(6,`
                            `),a(),e(7,`
                        `)}if(n&2){let t=c().controls;s(5),m("icon",t.iconForSortPropField("buildAgent.memberAddress"))}}function fe(n,d){if(n&1){let t=f();e(0,`
                            `),i(1,"span",22),u("click",function(){_(t);let l=c().controls;return b(l.onSort("status"))}),e(2,`
                                `),r(3,"span",26),e(4,`
                                `),r(5,"fa-icon",7),e(6,`
                            `),a(),e(7,`
                        `)}if(n&2){let t=c().controls;s(5),m("icon",t.iconForSortPropField("status"))}}function Ae(n,d){n&1&&(e(0,`
                                    `),r(1,"span",27),e(2,`
                                `))}function Ce(n,d){n&1&&(e(0,`
                                    `),r(1,"span",28),e(2,`
                                `))}function Se(n,d){n&1&&(e(0,`
                                    `),r(1,"span",29),e(2,`
                                `))}function he(n,d){if(n&1&&(e(0,`
                            `),p(1,Ae,3,0)(2,Ce,3,0)(3,Se,3,0),e(4,`
                        `)),n&2){let t,o=d.value;s(),T((t=o)==="ACTIVE"?1:t==="IDLE"?2:t==="PAUSED"?3:-1)}}function ve(n,d){if(n&1){let t=f();e(0,`
                            `),i(1,"span",22),u("click",function(){_(t);let l=c().controls;return b(l.onSort("maxNumberOfConcurrentBuildJobs"))}),e(2,`
                                `),r(3,"span",30),e(4,`
                                `),r(5,"fa-icon",7),e(6,`
                            `),a(),e(7,`
                        `)}if(n&2){let t=c().controls;s(5),m("icon",t.iconForSortPropField("maxNumberOfConcurrentBuildJobs"))}}function ye(n,d){if(n&1&&(e(0,`
                            `),i(1,"span"),e(2),a(),e(3,`
                        `)),n&2){let t=d.value;s(2),B(t)}}function Te(n,d){if(n&1){let t=f();e(0,`
                            `),i(1,"span",22),u("click",function(){_(t);let l=c().controls;return b(l.onSort("numberOfCurrentBuildJobs"))}),e(2,`
                                `),r(3,"span",31),e(4,`
                                `),r(5,"fa-icon",7),e(6,`
                            `),a(),e(7,`
                        `)}if(n&2){let t=c().controls;s(5),m("icon",t.iconForSortPropField("numberOfCurrentBuildJobs"))}}function Be(n,d){if(n&1){let t=f();e(0,`
                                `),i(1,"button",33),u("click",function(){_(t);let l=c().row,x=c(3);return b(x.cancelAllBuildJobs(l.buildAgent))}),e(2,`
                                    `),r(3,"fa-icon",7),e(4,`
                                    `),r(5,"span",34),e(6,`
                                `),a(),e(7,`
                            `)}if(n&2){let t=c(4);s(3),m("icon",t.faTimes)}}function De(n,d){if(n&1&&(e(0,`
                            `),i(1,"span",32),e(2),a(),e(3,`
                            `),p(4,Be,8,1)),n&2){let t=d.value;s(2),B(t),s(2),T(t>0?4:-1)}}function we(n,d){if(n&1){let t=f();e(0,`
                            `),i(1,"span",22),u("click",function(){_(t);let l=c().controls;return b(l.onSort("runningBuildJobs"))}),e(2,`
                                `),r(3,"span",35),e(4,`
                                `),r(5,"fa-icon",7),e(6,`
                            `),a(),e(7,`
                        `)}if(n&2){let t=c().controls;s(5),m("icon",t.iconForSortPropField("runningBuildJobs"))}}function Ee(n,d){if(n&1){let t=f();e(0,`
                                    `),i(1,"div",36),e(2,`
                                        `),i(3,"span",37),e(4),a(),e(5,`
                                        `),i(6,"button",38),u("click",function(){let l=_(t).$implicit,x=c(4);return b(x.cancelBuildJob(l.id))}),e(7,`
                                            `),r(8,"fa-icon",7),e(9,`
                                        `),a(),e(10,`
                                    `),a(),e(11,`
                                `)}if(n&2){let t=d.$implicit,o=c(4);s(4),B(t.id),s(4),m("icon",o.faTimes)}}function ke(n,d){if(n&1&&(e(0,`
                            `),i(1,"div"),e(2,`
                                `),j(3,Ee,12,2,null,null,_e),a(),e(5,`
                        `)),n&2){let t=d.value;s(3),P(t)}}function Me(n,d){if(n&1&&(e(0,`
                `),i(1,"ngx-datatable",13),e(2,`
                    `),i(3,"ngx-datatable-column",14),e(4,`
                        `),p(5,be,8,1,"ng-template",15),e(6,`
                        `),p(7,ge,4,6,"ng-template",16),e(8,`
                    `),a(),e(9,`
                    `),i(10,"ngx-datatable-column",17),e(11,`
                        `),p(12,xe,8,1,"ng-template",15),e(13,`
                    `),a(),e(14,`
                    `),i(15,"ngx-datatable-column",18),e(16,`
                        `),p(17,fe,8,1,"ng-template",15),e(18,`
                        `),p(19,he,5,1,"ng-template",16),e(20,`
                    `),a(),e(21,`
                    `),i(22,"ngx-datatable-column",19),e(23,`
                        `),p(24,ve,8,1,"ng-template",15),e(25,`
                        `),p(26,ye,4,1,"ng-template",16),e(27,`
                    `),a(),e(28,`
                    `),i(29,"ngx-datatable-column",20),e(30,`
                        `),p(31,Te,8,1,"ng-template",15),e(32,`
                        `),p(33,De,5,2,"ng-template",16),e(34,`
                    `),a(),e(35,`
                    `),i(36,"ngx-datatable-column",21),e(37,`
                        `),p(38,we,8,1,"ng-template",15),e(39,`
                        `),p(40,ke,6,0,"ng-template",16),e(41,`
                    `),a(),e(42,`
                `),a(),e(43,`
            `)),n&2){let t=d.settings;s(),m("limit",t.limit)("sortType",t.sortType)("columnMode",t.columnMode)("headerHeight",t.headerHeight)("footerHeight",t.footerHeight)("rowHeight",t.rowHeight)("rows",t.rows)("rowClass",t.rowClass)("scrollbarH",t.scrollbarH),s(2),m("minWidth",150),s(7),m("minWidth",150),s(5),m("minWidth",150),s(7),m("minWidth",100),s(7),m("minWidth",100),s(7),m("minWidth",250)}}function Ve(n,d){if(n&1){let t=f();e(0,`
        `),i(1,"div",1),e(2,`
            `),i(3,"div"),e(4,`
                `),r(5,"h3",2),e(6,`
                `),i(7,"p"),e(8),r(9,"span",3),e(10),r(11,"span",4),e(12),r(13,"span",5),e(14,`
                `),a(),e(15,`
            `),a(),e(16,`
            `),i(17,"div"),e(18,`
                `),i(19,"button",6),u("click",function(){_(t);let l=c();return b(l.resumeAllBuildAgents())}),e(20,`
                    `),r(21,"fa-icon",7),e(22,`
                    `),r(23,"span",8),e(24,`
                `),a(),e(25,`
                `),i(26,"button",9),u("click",function(){_(t);let l=c();return b(l.displayPauseBuildAgentModal())}),e(27,`
                    `),r(28,"fa-icon",7),e(29,`
                    `),r(30,"span",10),e(31,`
                `),a(),e(32,`
                `),i(33,"button",9),u("click",function(){_(t);let l=c();return b(l.displayClearDistributedDataModal())}),e(34,`
                    `),r(35,"fa-icon",7),e(36,`
                    `),r(37,"span",11),e(38,`
                `),a(),e(39,`
            `),a(),e(40,`
        `),a(),e(41,`
        `),i(42,"jhi-data-table",12),e(43,`
            `),p(44,Me,44,15,"ng-template"),e(45,`
        `),a(),e(46,`
    `)}if(n&2){let t=c();s(8),y(`
                    `,t.buildAgents.length," "),s(2),y(": ",t.currentBuilds,`
                    `),s(2),y(" ",t.buildCapacity," "),s(9),m("icon",t.faPlay),s(7),m("icon",t.faPause),s(7),m("icon",t.faTrash),s(7),m("showPageSizeDropdown",!1)("showSearchField",!1)("allEntities",t.buildAgents)}}var bt=(()=>{class n{websocketService=g(X);buildAgentsService=g(se);buildQueueService=g(oe);router=g(O);modalService=g(K);alertService=g(Z);buildAgents=[];buildCapacity=0;currentBuilds=0;channel="/topic/admin/build-agents";websocketSubscription;restSubscription;routerLink;faTimes=S;faPause=w;faPlay=Y;faTrash=E;ngOnInit(){this.routerLink=this.router.url,this.load(),this.initWebsocketSubscription()}ngOnDestroy(){this.websocketService.unsubscribe(this.channel),this.websocketSubscription?.unsubscribe(),this.restSubscription?.unsubscribe()}initWebsocketSubscription(){this.websocketService.subscribe(this.channel),this.websocketSubscription=this.websocketService.receive(this.channel).subscribe(t=>{this.updateBuildAgents(t)})}updateBuildAgents(t){this.buildAgents=t,this.buildCapacity=this.buildAgents.filter(o=>o.status!==M.PAUSED).reduce((o,l)=>o+(l.maxNumberOfConcurrentBuildJobs||0),0),this.currentBuilds=this.buildAgents.reduce((o,l)=>o+(l.numberOfCurrentBuildJobs||0),0)}load(){this.restSubscription=this.buildAgentsService.getBuildAgentSummary().subscribe(t=>{this.updateBuildAgents(t)})}cancelBuildJob(t){this.buildQueueService.cancelBuildJob(t).subscribe()}cancelAllBuildJobs(t){if(!t?.name)return;let o=this.buildAgents.find(l=>l.buildAgent?.name===t.name);o?.buildAgent?.name&&this.buildQueueService.cancelAllRunningBuildJobsForAgent(o.buildAgent?.name).subscribe()}displayPauseBuildAgentModal(){this.modalService.open(de).result.then(o=>{o&&this.pauseAllBuildAgents()})}displayClearDistributedDataModal(){this.modalService.open(ce,{size:"lg"}).result.then(o=>{o&&this.clearDistributedData()})}pauseAllBuildAgents(){this.buildAgentsService.pauseAllBuildAgents().subscribe({next:()=>{this.load(),this.alertService.addAlert({type:A.SUCCESS,message:"artemisApp.buildAgents.alerts.buildAgentsPaused"})},error:()=>{this.alertService.addAlert({type:A.DANGER,message:"artemisApp.buildAgents.alerts.buildAgentPauseFailed"})}})}resumeAllBuildAgents(){this.buildAgentsService.resumeAllBuildAgents().subscribe({next:()=>{this.load(),this.alertService.addAlert({type:A.SUCCESS,message:"artemisApp.buildAgents.alerts.buildAgentsResumed"})},error:()=>{this.alertService.addAlert({type:A.DANGER,message:"artemisApp.buildAgents.alerts.buildAgentResumeFailed"})}})}clearDistributedData(){this.buildAgentsService.clearDistributedData().subscribe({next:()=>{this.alertService.addAlert({type:A.SUCCESS,message:"artemisApp.buildAgents.alerts.distributedDataCleared"})},error:()=>{this.alertService.addAlert({type:A.DANGER,message:"artemisApp.buildAgents.alerts.distributedDataClearFailed"})}})}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=C({type:n,selectors:[["jhi-build-agents"]],decls:4,vars:1,consts:[[2,"padding-bottom","60px"],[1,"d-flex","justify-content-between","align-items-center","border-bottom","pb-2","mb-3"],["id","build-agents-heading","jhiTranslate","artemisApp.buildAgents.summary"],["jhiTranslate","artemisApp.buildAgents.onlineAgents"],["jhiTranslate","artemisApp.buildAgents.of"],["jhiTranslate","artemisApp.buildAgents.buildJobsRunning"],[1,"btn","btn-success",3,"click"],[3,"icon"],["jhiTranslate","artemisApp.buildAgents.resumeAll"],[1,"btn","btn-danger",3,"click"],["jhiTranslate","artemisApp.buildAgents.pauseAll"],["jhiTranslate","artemisApp.buildAgents.clearDistributedData.title"],["entityType","buildAgent",3,"showPageSizeDropdown","showSearchField","allEntities"],[1,"bootstrap",3,"limit","sortType","columnMode","headerHeight","footerHeight","rowHeight","rows","rowClass","scrollbarH"],["prop","buildAgent.displayName",3,"minWidth"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["prop","buildAgent.memberAddress",3,"minWidth"],["prop","status",3,"minWidth"],["prop","maxNumberOfConcurrentBuildJobs",3,"minWidth"],["prop","numberOfCurrentBuildJobs",3,"minWidth"],["prop","runningBuildJobs",3,"minWidth"],[1,"datatable-header-cell-wrapper",3,"click"],["jhiTranslate","artemisApp.buildAgents.name",1,"datatable-header-cell-label","bold","sortable"],[3,"routerLink","queryParams"],["jhiTranslate","artemisApp.buildAgents.memberAddress",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.buildAgents.status",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.buildAgents.running"],["jhiTranslate","artemisApp.buildAgents.idle"],["jhiTranslate","artemisApp.buildAgents.paused"],["jhiTranslate","artemisApp.buildAgents.maxNumberOfConcurrentBuildJobs",1,"datatable-header-cell-label","bold","sortable"],["jhiTranslate","artemisApp.buildAgents.numberOfCurrentBuildJobs",1,"datatable-header-cell-label","bold","sortable"],[2,"margin-right","20px"],[1,"btn","btn-danger","btn-sm",3,"click"],["jhiTranslate","artemisApp.buildQueue.cancelAll"],["jhiTranslate","artemisApp.buildAgents.runningBuildJobs",1,"datatable-header-cell-label","bold","sortable"],[2,"display","flex","align-items","center"],[2,"width","200px","margin-right","10px","text-align","left"],[1,"btn","btn-danger","btn-sm",2,"margin-bottom","2px",3,"click"]],template:function(o,l){o&1&&(i(0,"div",0),e(1,`
    `),p(2,Ve,47,9),a(),e(3,`
`)),o&2&&(s(2),T(l.buildAgents?2:-1))},dependencies:[v,le,ae,ie,te,ne,re,ee,h,L,H],styles:[".wrap-long-text[_ngcontent-%COMP%]{word-break:break-all;overflow-wrap:break-word}"]})}return n})();export{bt as BuildAgentSummaryComponent};
//# sourceMappingURL=build-agent-summary.component-6PVCKMH4.js.map
