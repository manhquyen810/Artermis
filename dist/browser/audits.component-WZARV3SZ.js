import"./chunk-DLAFGQEJ.js";import{a as Z}from"./chunk-ZMTDPOTL.js";import{a as K,b as Q}from"./chunk-VRAVBLUK.js";import{a as G}from"./chunk-G3JOQOSD.js";import{c as J}from"./chunk-JNO6DNVW.js";import"./chunk-EELXLOHY.js";import{D as U}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{C as k,K as O,c as R,h as z,m as N}from"./chunk-WA5GEAJB.js";import{d as H}from"./chunk-EDXSOKK5.js";import"./chunk-DID2YGL7.js";import{Qa as Y}from"./chunk-Z4VHWOB5.js";import{a as X}from"./chunk-U54OSGNH.js";import{f as B,h as q}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{O as W,y as V}from"./chunk-IOA4DPXY.js";import{A as w,Bd as F,Db as d,Dc as E,Ea as u,Ma as h,Mc as C,Na as _,Oc as m,Tb as T,Zb as D,dd as t,ed as S,fd as j,kc as g,ld as y,md as x,nd as v,sc as f,td as I,uc as A,vc as M,wc as P,xc as i,ya as b,yc as n,yd as L,zc as s}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var $=(()=>{class a{http=u(W);query(e){let r=G(e);return this.http.get("api/core/admin/audits",{params:r,observe:"response"})}static \u0275fac=function(r){return new(r||a)};static \u0275prov=b({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var it=(a,p,e)=>({page:a,totalItems:p,itemsPerPage:e});function nt(a,p){if(a&1){let e=E();t(0,`
                        `),i(1,"tr",16),v("predicateChange",function(o){h(e);let l=m(2);return x(l.predicate,o)||(l.predicate=o),_(o)})("ascendingChange",function(o){h(e);let l=m(2);return x(l.ascending,o)||(l.ascending=o),_(o)}),C("sortChange",function(){h(e);let o=m(2);return _(o.transition())}),t(2,`
                            `),i(3,"th",17),s(4,"span",18),t(5," "),s(6,"fa-icon",19),n(),t(7,`
                            `),i(8,"th",20),s(9,"span",21),t(10," "),s(11,"fa-icon",19),n(),t(12,`
                            `),i(13,"th",22),s(14,"span",23),t(15," "),s(16,"fa-icon",19),n(),t(17,`
                            `),i(18,"th",24),s(19,"span",25),n(),t(20,`
                        `),n(),t(21,`
                    `)}if(a&2){let e=m(2);d(),y("predicate",e.predicate)("ascending",e.ascending),d(5),g("icon",e.faSort),d(5),g("icon",e.faSort),d(5),g("icon",e.faSort)}}function at(a,p){a&1&&(t(0,`
                        `),i(1,"tr"),t(2,`
                            `),i(3,"th",24),s(4,"span",18),n(),t(5,`
                            `),i(6,"th",24),s(7,"span",21),n(),t(8,`
                            `),i(9,"th",24),s(10,"span",23),n(),t(11,`
                            `),i(12,"th",24),s(13,"span",25),n(),t(14,`
                        `),n(),t(15,`
                    `))}function ot(a,p){if(a&1&&(t(0,`
                                    `),i(1,"span"),t(2),n(),t(3,`
                                `)),a&2){let e=m().$implicit;d(2),S(e.data.message)}}function rt(a,p){if(a&1&&(t(0,`
                                    `),i(1,"span"),s(2,"span",26),t(3),n(),t(4,`
                                `)),a&2){let e=m().$implicit;d(3),j(" ",e.data.remoteAddress,"")}}function dt(a,p){if(a&1&&(t(0,`
                        `),i(1,"tr"),t(2,`
                            `),i(3,"td"),t(4),L(5,"artemisDate"),n(),t(6,`
                            `),i(7,"td"),t(8,`
                                `),i(9,"small"),t(10),n(),t(11,`
                            `),n(),t(12,`
                            `),i(13,"td"),t(14),n(),t(15,`
                            `),i(16,"td"),t(17,`
                                `),D(18,ot,4,1)(19,rt,5,1),n(),t(20,`
                        `),n(),t(21,`
                    `)),a&2){let e=p.$implicit;d(4),S(F(5,5,e.timestamp,"long",!0)),d(6),S(e.principal),d(4),S(e.type),d(4),f(e.data!=null&&e.data.message?18:-1),d(),f(e.data!=null&&e.data.remoteAddress?19:-1)}}function st(a,p){if(a&1){let e=E();t(0,`
        `),i(1,"div",11),t(2,`
            `),i(3,"table",12),t(4,`
                `),i(5,"thead"),t(6,`
                    `),D(7,nt,22,5)(8,at,16,0),n(),t(9,`
                `),i(10,"tbody"),t(11,`
                    `),M(12,dt,22,9,null,null,A),n(),t(14,`
            `),n(),t(15,`
        `),n(),t(16,`
        `),i(17,"div"),t(18,`
            `),i(19,"div",13),t(20,`
                `),s(21,"jhi-item-count",14),t(22,`
            `),n(),t(23,`
            `),i(24,"div",13),t(25,`
                `),i(26,"ngb-pagination",15),v("pageChange",function(o){h(e);let l=m();return x(l.page,o)||(l.page=o),_(o)}),C("pageChange",function(){h(e);let o=m();return _(o.transition())}),n(),t(27,`
            `),n(),t(28,`
        `),n(),t(29,`
    `)}if(a&2){let e=m();d(7),f(e.canLoad?7:8),d(5),P(e.audits),d(9),g("params",I(9,it,e.page,e.totalItems,e.itemsPerPage)),d(5),g("collectionSize",e.totalItems),y("page",e.page),g("pageSize",e.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)("disabled",!e.canLoad)}}function lt(a,p){a&1&&(t(0,`
        `),i(1,"div",27),t(2,`
            `),s(3,"span",28),t(4,`
        `),n(),t(5,`
    `))}var It=(()=>{class a{auditsService=u($);activatedRoute=u(B);datePipe=u(V);router=u(q);audits;fromDate="";predicate;ascending;toDate="";canLoad;page=1;itemsPerPage=50;totalItems=0;dateFormat="yyyy-MM-dd";faSort=Y;ngOnInit(){this.toDate=this.today(),this.fromDate=this.previousMonth(),this.canLoad=this.calculateCanLoad(),this.handleNavigation()}calculateCanLoad(){return this.fromDate!==""&&this.toDate!==""}transition(){this.canLoad&&this.router.navigate(["/admin/audits"],{queryParams:{page:this.page,sort:this.predicate+","+(this.ascending?"asc":"desc"),from:this.fromDate,to:this.toDate}})}previousMonth(){let e=new Date;return e.getMonth()===0?e=new Date(e.getFullYear()-1,11,e.getDate()):e=new Date(e.getFullYear(),e.getMonth()-1,e.getDate()),this.datePipe.transform(e,this.dateFormat)}today(){let e=new Date;return e.setDate(e.getDate()+1),this.datePipe.transform(e,this.dateFormat)}handleNavigation(){w({data:this.activatedRoute.data,params:this.activatedRoute.queryParamMap}).subscribe(({data:e,params:r})=>{let o=r.get("page");this.page=o!==null?+o:1;let l=(r.get("sort")??e.defaultSort).split(",");this.predicate=l[0],this.ascending=l[1]==="asc",r.get("from")&&(this.fromDate=this.datePipe.transform(r.get("from"),this.dateFormat)),r.get("to")&&(this.toDate=this.datePipe.transform(r.get("to"),this.dateFormat)),this.canLoad=this.calculateCanLoad(),this.loadData()})}loadData(){this.auditsService.query({page:this.page-1,size:this.itemsPerPage,sort:this.sort(),fromDate:this.fromDate,toDate:this.toDate}).subscribe(e=>this.onSuccess(e.body,e.headers))}sort(){let e=[this.predicate+","+(this.ascending?"asc":"desc")];return this.predicate!=="id"&&e.push("id"),e}onSuccess(e,r){this.totalItems=Number(r.get("X-Total-Count")),this.audits=e||[]}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=T({type:a,selectors:[["jhi-audit"]],decls:32,vars:3,consts:[["id","audits-page-heading","jhiTranslate","audits.title"],[1,"row"],[1,"col-md-5"],["jhiTranslate","audits.filter.title"],[1,"input-group","mb-3"],[1,"input-group-prepend"],["jhiTranslate","audits.filter.from",1,"input-group-text"],["type","date","name","start","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"input-group-append"],["jhiTranslate","audits.filter.to",1,"input-group-text"],["type","date","name","end","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"table-responsive"],["aria-describedby","audits-page-heading",1,"table","table-sm","table-striped"],[1,"row","justify-content-center"],[3,"params"],[3,"pageChange","collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","disabled"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["scope","col","jhiSortBy","auditEventDate"],["jhiTranslate","audits.table.header.date"],[3,"icon"],["scope","col","jhiSortBy","principal"],["jhiTranslate","audits.table.header.principal"],["scope","col","jhiSortBy","auditEventType"],["jhiTranslate","audits.table.header.status"],["scope","col"],["jhiTranslate","audits.table.header.data"],["jhiTranslate","audits.table.data.remoteAddress"],[1,"alert","alert-warning"],["jhiTranslate","audits.notFound"]],template:function(r,o){r&1&&(i(0,"div"),t(1,`
    `),s(2,"h2",0),t(3,`
    `),i(4,"div",1),t(5,`
        `),i(6,"div",2),t(7,`
            `),s(8,"h4",3),t(9,`
            `),i(10,"div",4),t(11,`
                `),i(12,"div",5),t(13,`
                    `),s(14,"span",6),t(15,`
                `),n(),t(16,`
                `),i(17,"input",7),v("ngModelChange",function(c){return x(o.fromDate,c)||(o.fromDate=c),c}),C("ngModelChange",function(){return o.transition()}),n(),t(18,`
                `),i(19,"div",8),t(20,`
                    `),s(21,"span",9),t(22,`
                `),n(),t(23,`
                `),i(24,"input",10),v("ngModelChange",function(c){return x(o.toDate,c)||(o.toDate=c),c}),C("ngModelChange",function(){return o.transition()}),n(),t(25,`
            `),n(),t(26,`
        `),n(),t(27,`
    `),n(),t(28,`
    `),D(29,st,30,13)(30,lt,6,0),n(),t(31,`
`)),r&2&&(d(17),y("ngModel",o.fromDate),d(7),y("ngModel",o.toDate),d(5),f(o.audits!=null&&o.audits.length?29:30))},dependencies:[X,O,R,z,k,N,K,Q,H,Z,U,J],encapsulation:2})}return a})();export{It as AuditsComponent};
//# sourceMappingURL=audits.component-WZARV3SZ.js.map
