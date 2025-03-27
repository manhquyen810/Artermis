import{a as K,b as R}from"./chunk-VRAVBLUK.js";import{K as H,c as W,h as L,m as O}from"./chunk-WA5GEAJB.js";import{d as $}from"./chunk-EDXSOKK5.js";import{Qa as N}from"./chunk-Z4VHWOB5.js";import{a as J}from"./chunk-U54OSGNH.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{A as P,O as D,z as M}from"./chunk-IOA4DPXY.js";import{Db as l,Dc as k,Ea as C,Ma as x,Mc as E,Na as u,Oc as m,Tb as I,Zb as j,dd as e,ed as c,jc as V,kc as v,ld as w,md as B,nd as T,sc as A,uc as f,vc as g,wc as _,xc as n,ya as F,yc as i,yd as S,z as h,zc as d,zd as b}from"./chunk-5LC5EQRR.js";import{a as y}from"./chunk-3E746U5Y.js";var q=(()=>{class r{http=C(D);getBeans(){return this.http.get("management/configprops").pipe(h(t=>Object.values(Object.values(t.contexts).map(a=>a.beans).reduce((a,o)=>y(y({},a),o)))))}getPropertySources(){return this.http.get("management/env").pipe(h(t=>t.propertySources))}static \u0275fac=function(a){return new(a||r)};static \u0275prov=F({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function G(r,s){if(r&1&&(e(0,`
                                `),n(1,"div",11),e(2,`
                                    `),n(3,"div",12),e(4),i(),e(5,`
                                    `),n(6,"div",13),e(7,`
                                        `),n(8,"span",14),e(9),S(10,"json"),i(),e(11,`
                                    `),i(),e(12,`
                                `),i(),e(13,`
                            `)),r&2){let t=s.$implicit;l(4),c(t.key),l(5),c(b(10,2,t.value))}}function Q(r,s){if(r&1&&(e(0,`
                    `),n(1,"tr"),e(2,`
                        `),n(3,"td"),e(4,`
                            `),n(5,"span"),e(6),i(),e(7,`
                        `),i(),e(8,`
                        `),n(9,"td"),e(10,`
                            `),g(11,G,14,4,null,null,f),S(13,"keyvalue"),i(),e(14,`
                    `),i(),e(15,`
                `)),r&2){let t=s.$implicit;l(6),c(t.prefix),l(5),_(b(13,1,t.properties))}}function U(r,s){if(r&1&&(e(0,`
                            `),n(1,"tr"),e(2,`
                                `),n(3,"td",18),e(4),i(),e(5,`
                                `),n(6,"td",18),e(7,`
                                    `),n(8,"span",14),e(9),i(),e(10,`
                                `),i(),e(11,`
                            `),i(),e(12,`
                        `)),r&2){let t=s.$implicit;l(4),c(t.key),l(5),c(t.value.value)}}function X(r,s){if(r&1&&(e(0,`
            `),n(1,"div"),e(2,`
                `),n(3,"h4",15),e(4,`
                    `),n(5,"span"),e(6),i(),e(7,`
                `),i(),e(8,`
                `),n(9,"table",16),e(10,`
                    `),n(11,"thead"),e(12,`
                        `),n(13,"tr"),e(14,`
                            `),n(15,"th",17),e(16,"Property"),i(),e(17,`
                            `),n(18,"th",9),e(19,"Value"),i(),e(20,`
                        `),i(),e(21,`
                    `),i(),e(22,`
                    `),n(23,"tbody"),e(24,`
                        `),g(25,U,13,2,null,null,f),S(27,"keyvalue"),i(),e(28,`
                `),i(),e(29,`
            `),i(),e(30,`
        `)),r&2){let t=s.$implicit,a=s.$index;l(3),v("id","property-source-"+a),l(3),c(t.name),l(3),V("aria-describedby","property-source-"+a),l(16),_(b(27,3,t.properties))}}function Y(r,s){if(r&1){let t=k();e(0,`
    `),n(1,"div"),e(2,`
        `),d(3,"h2",0),e(4,`
        `),d(5,"span",1),e(6,`
        `),n(7,"input",2),T("ngModelChange",function(o){x(t);let p=m();return B(p.beansFilter,o)||(p.beansFilter=o),u(o)}),E("ngModelChange",function(){x(t);let o=m();return u(o.filterAndSortBeans())}),i(),e(8,`
        `),n(9,"h3",3),e(10,"Spring configuration"),i(),e(11,`
        `),n(12,"table",4),e(13,`
            `),n(14,"thead"),e(15,`
                `),n(16,"tr",5),T("ascendingChange",function(o){x(t);let p=m();return B(p.beansAscending,o)||(p.beansAscending=o),u(o)}),E("sortChange",function(){x(t);let o=m();return u(o.filterAndSortBeans())}),e(17,`
                    `),n(18,"th",6),d(19,"span",7),e(20," "),d(21,"fa-icon",8),i(),e(22,`
                    `),n(23,"th",9),d(24,"span",10),i(),e(25,`
                `),i(),e(26,`
            `),i(),e(27,`
            `),n(28,"tbody"),e(29,`
                `),g(30,Q,16,3,null,null,f),i(),e(32,`
        `),i(),e(33,`
        `),g(34,X,31,5,null,null,f),i(),e(36,`
`)}if(r&2){let t=m();l(7),w("ngModel",t.beansFilter),l(9),w("ascending",t.beansAscending),l(5),v("icon",t.faSort),l(9),_(t.beans),l(4),_(t.propertySources)}}var ge=(()=>{class r{configurationService=C(q);allBeans;beans=[];beansFilter="";beansAscending=!0;propertySources=[];faSort=N;ngOnInit(){this.configurationService.getBeans().subscribe(t=>{this.allBeans=t,this.filterAndSortBeans()}),this.configurationService.getPropertySources().subscribe(t=>this.propertySources=t)}filterAndSortBeans(){let t=this.beansAscending?-1:1,a=this.beansAscending?1:-1;this.beans=this.allBeans.filter(o=>!this.beansFilter||o.prefix.toLowerCase().includes(this.beansFilter.toLowerCase())).sort((o,p)=>o.prefix<p.prefix?t:a)}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=I({type:r,selectors:[["jhi-configuration"]],decls:1,vars:1,consts:[["id","configuration-page-heading","jhiTranslate","configuration.title","data-cy","configurationPageHeading"],["jhiTranslate","configuration.filter"],["type","text",1,"form-control",3,"ngModelChange","ngModel"],["id","spring-configuration"],["aria-describedby","spring-configuration",1,"table","table-striped","table-bordered","table-responsive","d-table"],["jhiSort","","predicate","prefix",3,"ascendingChange","sortChange","ascending"],["jhiSortBy","prefix","scope","col",1,"w-40"],["jhiTranslate","configuration.table.prefix"],[3,"icon"],["scope","col",1,"w-60"],["jhiTranslate","configuration.table.properties"],[1,"row"],[1,"col-md-4"],[1,"col-md-8"],[1,"float-end","badge","bg-secondary","break"],[3,"id"],[1,"table","table-sm","table-striped","table-bordered","table-responsive","d-table"],["scope","col",1,"w-40"],[1,"break"]],template:function(a,o){a&1&&j(0,Y,37,3),a&2&&A(o.allBeans?0:-1)},dependencies:[J,H,W,L,O,K,R,$,M,P],encapsulation:2})}return r})();export{ge as ConfigurationComponent};
//# sourceMappingURL=configuration.component-M4HOFG72.js.map
