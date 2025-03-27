import{a as me}from"./chunk-LI7VA7ZH.js";import"./chunk-DLAFGQEJ.js";import{a as ce}from"./chunk-ZMTDPOTL.js";import{a as oe,b as se}from"./chunk-VRAVBLUK.js";import{b as re}from"./chunk-T624HJJL.js";import"./chunk-HQTS6JOY.js";import"./chunk-HMZID6NQ.js";import"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import{a as ne}from"./chunk-4RC7EEQU.js";import{c as ee}from"./chunk-5MVJAZRV.js";import"./chunk-G3JOQOSD.js";import{c as ae}from"./chunk-JNO6DNVW.js";import"./chunk-EELXLOHY.js";import{D as q}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import"./chunk-WA5GEAJB.js";import"./chunk-5GXY5RYT.js";import"./chunk-K3W6YFKH.js";import{a as Z,c as $}from"./chunk-JXJXC4DZ.js";import{d as te}from"./chunk-EDXSOKK5.js";import{b as Y}from"./chunk-R5BZWVRQ.js";import{p as w}from"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Lc as J,Oc as K,Qa as O,hb as G,nb as Q}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as ie}from"./chunk-U54OSGNH.js";import{f as U,h as H,i as X}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as s,Dc as b,Ea as p,Ma as g,Mc as S,Na as x,Oc as d,Tb as k,Zb as v,dd as e,ed as u,f as M,kc as m,ld as D,md as y,nd as T,qd as W,rc as B,rd as I,sc as C,td as z,vc as F,wc as R,xc as r,ya as V,yc as o,yd as P,zc as c,zd as N}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var le=(()=>{class n{parse(t){if(t.length===0)throw new Error("input must not be of zero length");let i=t.split(","),a={};return i.forEach(l=>{let _=l.split(";");if(_.length!==2)throw new Error('section could not be split on ";"');let pe=_[0].replace(/<(.*)>/,"$1").trim(),E={};if(pe.replace(/([^?=&]+)(=([^&]*))?/g,(A,j,Ce,L)=>(j!==void 0&&(E[j]=L),L??"")),E.page!==void 0){let A=_[1].replace(/rel="(.*)"/,"$1").trim();a[A]=parseInt(E.page,10)}}),a}static \u0275fac=function(i){return new(i||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ge=()=>["./new"],xe=(n,f,t)=>({page:n,totalItems:f,itemsPerPage:t}),ue=n=>["./",n],he=n=>["./",n,"edit"];function Se(n,f){n&1&&(e(0,`
                                        `),c(1,"span",29),e(2,`
                                    `))}function ye(n,f){n&1&&(e(0,`
                                        `),c(1,"span",30),e(2,`
                                    `))}function _e(n,f){n&1&&(e(0,`
                                        `),c(1,"span",31),e(2,`
                                    `))}function Ee(n,f){if(n&1){let t=b();e(0,`
                        `),r(1,"tr"),e(2,`
                            `),r(3,"td"),e(4),o(),e(5,`
                            `),r(6,"td"),e(7),o(),e(8,`
                            `),r(9,"td"),e(10),o(),e(11,`
                            `),r(12,"td"),e(13),o(),e(14,`
                            `),r(15,"td"),e(16,`
                                `),v(17,Se,3,0)(18,ye,3,0)(19,_e,3,0),e(20,`
                            `),o(),e(21,`
                            `),r(22,"td"),e(23),P(24,"artemisDate"),o(),e(25,`
                            `),r(26,"td"),e(27),P(28,"artemisDate"),o(),e(29,`
                            `),r(30,"td",22),e(31,`
                                `),r(32,"div",23),e(33,`
                                    `),r(34,"a",24),e(35,`
                                        `),c(36,"fa-icon",2),e(37,`
                                        `),c(38,"span",25),e(39,`
                                    `),o(),e(40,`
                                    `),r(41,"a",26),e(42,`
                                        `),c(43,"fa-icon",2),e(44,`
                                        `),c(45,"span",27),e(46,`
                                    `),o(),e(47,`
                                    `),r(48,"button",28),S("delete",function(){let a=g(t).$implicit,l=d(2);return x(l.deleteNotification(a.id))}),e(49,`
                                        `),c(50,"fa-icon",2),e(51,`
                                    `),o(),e(52,`
                                `),o(),e(53,`
                            `),o(),e(54,`
                        `),o(),e(55,`
                    `)}if(n&2){let t,i=f.$implicit,a=d(2);s(4),u(i.id),s(3),u(i.title),s(3),u(i.text),s(3),u(i.type),s(4),C((t=a.getNotificationState(i))===a.ACTIVE?17:t===a.EXPIRED?18:t===a.SCHEDULED?19:-1),s(6),u(N(24,14,i.notificationDate)),s(4),u(N(28,16,i.expireDate)),s(7),m("routerLink",I(18,ue,i.id)),s(2),m("icon",a.faEye),s(5),m("routerLink",I(20,he,i.id)),s(2),m("icon",a.faWrench),s(5),m("entityTitle",i.title?i.title:"")("dialogError",a.dialogError$),s(2),m("icon",a.faTimes)}}function ve(n,f){if(n&1){let t=b();e(0,`
        `),r(1,"div",4),e(2,`
            `),r(3,"table",5),e(4,`
                `),r(5,"thead"),e(6,`
                    `),r(7,"tr",6),T("predicateChange",function(a){g(t);let l=d();return y(l.predicate,a)||(l.predicate=a),x(a)})("ascendingChange",function(a){g(t);let l=d();return y(l.reverse,a)||(l.reverse=a),x(a)}),S("sortChange",function(){g(t);let a=d();return x(a.transition())}),e(8,`
                        `),r(9,"th",7),c(10,"span",8),e(11," "),c(12,"fa-icon",2),o(),e(13,`
                        `),r(14,"th",9),c(15,"span",10),e(16," "),c(17,"fa-icon",2),o(),e(18,`
                        `),r(19,"th",11),c(20,"span",12),e(21," "),c(22,"fa-icon",2),o(),e(23,`
                        `),r(24,"th",13),c(25,"span",14),e(26," "),c(27,"fa-icon",2),o(),e(28,`
                        `),c(29,"th"),e(30,`
                        `),r(31,"th",15),c(32,"span",16),e(33," "),c(34,"fa-icon",2),o(),e(35,`
                        `),r(36,"th",17),c(37,"span",18),e(38," "),c(39,"fa-icon",2),o(),e(40,`
                        `),c(41,"th"),e(42,`
                    `),o(),e(43,`
                `),o(),e(44,`
                `),r(45,"tbody"),e(46,`
                    `),F(47,Ee,56,22,null,null,B().trackIdentity,!0),o(),e(49,`
            `),o(),e(50,`
        `),o(),e(51,`
        `),r(52,"div"),e(53,`
            `),r(54,"div",19),e(55,`
                `),c(56,"jhi-item-count",20),e(57,`
            `),o(),e(58,`
            `),r(59,"div",19),e(60,`
                `),r(61,"ngb-pagination",21),T("pageChange",function(a){g(t);let l=d();return y(l.page,a)||(l.page=a),x(a)}),S("pageChange",function(){g(t);let a=d();return x(a.loadPage(a.page))}),o(),e(62,`
            `),o(),e(63,`
        `),o(),e(64,`
    `)}if(n&2){let t=d();s(7),D("predicate",t.predicate)("ascending",t.reverse),s(5),m("icon",t.faSort),s(5),m("icon",t.faSort),s(5),m("icon",t.faSort),s(5),m("icon",t.faSort),s(7),m("icon",t.faSort),s(5),m("icon",t.faSort),s(8),R(t.notifications),s(9),m("params",z(15,xe,t.page,t.totalItems,t.itemsPerPage)),s(5),m("collectionSize",t.totalItems),D("page",t.page),m("pageSize",t.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}var h=function(n){return n.SCHEDULED="SCHEDULED",n.ACTIVE="ACTIVE",n.EXPIRED="EXPIRED",n}(h||{}),Ge=(()=>{class n{systemNotificationService=p(ne);adminSystemNotificationService=p(me);alertService=p($);accountService=p(Y);parseLinks=p(le);activatedRoute=p(U);router=p(H);eventManager=p(Z);SCHEDULED=h.SCHEDULED;ACTIVE=h.ACTIVE;EXPIRED=h.EXPIRED;currentAccount;notifications;error;success;routeData;links;predicate="notificationDate";previousPage;reverse;page=1;itemsPerPage=50;totalItems=0;dialogErrorSource=new M;dialogError$=this.dialogErrorSource.asObservable();faSort=O;faPlus=J;faTimes=K;faEye=Q;faWrench=G;constructor(){this.routeData=this.activatedRoute.data.subscribe(t=>{let i=t.pagingParams;i&&(this.page=i.page,this.previousPage=i.page,this.reverse=i.ascending,this.predicate=i.predicate)})}ngOnInit(){this.accountService.identity().then(t=>{this.currentAccount=t,this.loadAll(),this.registerChangeInUsers()})}ngOnDestroy(){this.routeData.unsubscribe(),this.dialogErrorSource.unsubscribe()}registerChangeInUsers(){this.eventManager.subscribe("notificationListModification",()=>this.loadAll())}deleteNotification(t){this.adminSystemNotificationService.delete(t).subscribe({next:()=>{this.eventManager.broadcast({name:"notificationListModification",content:"Deleted a system notification"}),this.dialogErrorSource.next("")},error:i=>this.dialogErrorSource.next(i.message)})}loadAll(){this.systemNotificationService.query({page:this.page-1,size:this.itemsPerPage,sort:this.sort()}).subscribe({next:t=>this.onSuccess(t.body,t.headers),error:t=>ee(this.alertService,t)})}trackIdentity(t,i){return i.id??-1}getNotificationState(t){return t.notificationDate.isAfter(w())?h.SCHEDULED:t.expireDate?.isAfter(w())??!0?h.ACTIVE:h.EXPIRED}sort(){let t=[];return this.predicate&&t.push(this.predicate+","+(this.reverse?"asc":"desc")),this.predicate!=="id"&&t.push("id"),t}loadPage(t){t!==this.previousPage&&(this.previousPage=t,this.transition())}transition(){this.router.navigate(["/admin/system-notification-management"],{queryParams:{page:this.page,sort:this.predicate+","+(this.reverse?"asc":"desc")}}),this.loadAll()}onSuccess(t,i){this.links=this.parseLinks.parse(i.get("link")),this.totalItems=Number(i.get("X-Total-Count")),this.notifications=t}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=k({type:n,selectors:[["jhi-system-notification-management"]],decls:16,vars:4,consts:[["id","system-notification-management-page-heading","jhiTranslate","artemisApp.systemNotification.systemNotifications"],[1,"btn","btn-primary","float-end","jh-create-entity",3,"routerLink"],[3,"icon"],["jhiTranslate","artemisApp.systemNotification.createLabel"],[1,"table-responsive"],[1,"table","table-striped"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["jhiSortBy","id"],["jhiTranslate","global.field.id"],["jhiSortBy","title"],["jhiTranslate","artemisApp.systemNotification.title"],["jhiSortBy","text"],["jhiTranslate","artemisApp.systemNotification.text"],["jhiSortBy","type"],["jhiTranslate","artemisApp.systemNotification.type"],["jhiSortBy","notificationDate"],["jhiTranslate","artemisApp.systemNotification.notificationDate"],["jhiSortBy","expireDate"],["jhiTranslate","artemisApp.systemNotification.expireDate"],[1,"row","justify-content-center"],[3,"params"],["id","pagination",3,"pageChange","collectionSize","page","pageSize","maxSize","rotate","boundaryLinks"],[1,"text-end"],[1,"btn-group","flex-btn-group-container"],["id","viewButton",1,"btn","btn-info","btn-sm",3,"routerLink"],["jhiTranslate","entity.action.view",1,"d-none","d-md-inline"],["id","editButton","queryParamsHandling","merge",1,"btn","btn-warning","btn-sm",3,"routerLink"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["jhiDeleteButton","","deleteQuestion","artemisApp.systemNotification.delete.question",3,"delete","entityTitle","dialogError"],["jhiTranslate","artemisApp.systemNotification.active",1,"badge","bg-success"],["jhiTranslate","artemisApp.systemNotification.expired",1,"badge","bg-danger"],["jhiTranslate","artemisApp.systemNotification.scheduled",1,"badge","bg-info"]],template:function(i,a){i&1&&(r(0,"div"),e(1,`
    `),r(2,"h2"),e(3,`
        `),c(4,"span",0),e(5,`
        `),r(6,"a",1),e(7,`
            `),c(8,"fa-icon",2),e(9," "),c(10,"span",3),e(11,`
        `),o(),e(12,`
    `),o(),e(13,`
    `),v(14,ve,65,19),o(),e(15,`
`)),i&2&&(s(6),m("routerLink",W(3,ge)),s(2),m("icon",a.faPlus),s(6),C(a.notifications?14:-1))},dependencies:[ie,X,te,oe,se,re,ce,q,ae],encapsulation:2})}return n})();export{Ge as SystemNotificationManagementComponent};
//# sourceMappingURL=system-notification-management.component-7BTOXP6I.js.map
