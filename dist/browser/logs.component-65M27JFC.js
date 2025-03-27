import{a as H,b as $}from"./chunk-VRAVBLUK.js";import{K as D,c as B,h as I,m as W}from"./chunk-WA5GEAJB.js";import{d as G}from"./chunk-EDXSOKK5.js";import{Qa as N}from"./chunk-Z4VHWOB5.js";import{a as U}from"./chunk-U54OSGNH.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{D as R,O as j,n as M}from"./chunk-IOA4DPXY.js";import{Bd as P,Db as s,Dc as h,Ea as C,Ma as g,Mc as p,Na as m,Oc as c,Tb as w,Zb as L,dd as t,ed as F,fd as k,kc as d,ld as b,md as f,nd as v,rd as A,sc as y,uc as E,vc as V,wc as T,xc as l,ya as S,yc as a,yd as O,zc as _}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var u=class{name;level;constructor(x,e){this.name=x,this.level=e}};var q=(()=>{class o{http=C(j);changeLevel(e,i){return this.http.post(`management/loggers/${e}`,{configuredLevel:i})}findAll(){return this.http.get("management/loggers")}static \u0275fac=function(i){return new(i||o)};static \u0275prov=S({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var J=o=>({total:o});function K(o,x){if(o&1){let e=h();t(0,`
                `),l(1,"tr"),t(2,`
                    `),l(3,"td"),t(4,`
                        `),l(5,"small"),t(6),O(7,"slice"),a(),t(8,`
                    `),a(),t(9,`
                    `),l(10,"td"),t(11,`
                        `),l(12,"button",12),p("click",function(){let n=g(e).$implicit,r=c(2);return m(r.changeLevel(n.name,"TRACE"))}),t(13,"TRACE"),a(),t(14,`
                        `),l(15,"button",12),p("click",function(){let n=g(e).$implicit,r=c(2);return m(r.changeLevel(n.name,"DEBUG"))}),t(16,"DEBUG"),a(),t(17,`
                        `),l(18,"button",12),p("click",function(){let n=g(e).$implicit,r=c(2);return m(r.changeLevel(n.name,"INFO"))}),t(19,"INFO"),a(),t(20,`
                        `),l(21,"button",12),p("click",function(){let n=g(e).$implicit,r=c(2);return m(r.changeLevel(n.name,"WARN"))}),t(22,"WARN"),a(),t(23,`
                        `),l(24,"button",12),p("click",function(){let n=g(e).$implicit,r=c(2);return m(r.changeLevel(n.name,"ERROR"))}),t(25,"ERROR"),a(),t(26,`
                        `),l(27,"button",12),p("click",function(){let n=g(e).$implicit,r=c(2);return m(r.changeLevel(n.name,"OFF"))}),t(28,"OFF"),a(),t(29,`
                    `),a(),t(30,`
                `),a(),t(31,`
            `)}if(o&2){let e=x.$implicit;s(6),F(P(7,7,e.name,0,140)),s(6),d("ngClass",e.level==="TRACE"?"btn-primary":"btn-light"),s(3),d("ngClass",e.level==="DEBUG"?"btn-success":"btn-light"),s(3),d("ngClass",e.level==="INFO"?"btn-info":"btn-light"),s(3),d("ngClass",e.level==="WARN"?"btn-warning":"btn-light"),s(3),d("ngClass",e.level==="ERROR"?"btn-danger":"btn-light"),s(3),d("ngClass",e.level==="OFF"?"btn-secondary":"btn-light")}}function Q(o,x){if(o&1){let e=h();t(0,`
    `),l(1,"div",0),t(2,`
        `),_(3,"h2",1),t(4,`
        `),l(5,"p",2),t(6),a(),t(7,`
        `),_(8,"span",3),t(9,`
        `),l(10,"input",4),v("ngModelChange",function(n){g(e);let r=c();return f(r.filter,n)||(r.filter=n),m(n)}),p("ngModelChange",function(){g(e);let n=c();return m(n.filterAndSort())}),a(),t(11,`
        `),l(12,"table",5),t(13,`
            `),l(14,"thead"),t(15,`
                `),l(16,"tr",6),v("predicateChange",function(n){g(e);let r=c();return f(r.orderProp,n)||(r.orderProp=n),m(n)})("ascendingChange",function(n){g(e);let r=c();return f(r.ascending,n)||(r.ascending=n),m(n)}),p("sortChange",function(){g(e);let n=c();return m(n.filterAndSort())}),t(17,`
                    `),l(18,"th",7),_(19,"span",8),t(20," "),_(21,"fa-icon",9),a(),t(22,`
                    `),l(23,"th",10),_(24,"span",11),t(25," "),_(26,"fa-icon",9),a(),t(27,`
                `),a(),t(28,`
            `),a(),t(29,`
            `),V(30,K,32,11,null,null,E),a(),t(32,`
    `),a(),t(33,`
`)}if(o&2){let e=c();s(5),d("translateValues",A(7,J,e.loggers.length)),s(),k("There are ",e.loggers.length," loggers."),s(4),b("ngModel",e.filter),s(6),b("predicate",e.orderProp)("ascending",e.ascending),s(5),d("icon",e.faSort),s(5),d("icon",e.faSort),s(4),T(e.filteredAndOrderedLoggers)}}var _e=(()=>{class o{logsService=C(q);loggers;filteredAndOrderedLoggers;filter="";orderProp="name";ascending=!0;faSort=N;ngOnInit(){this.findAndExtractLoggers()}changeLevel(e,i){this.logsService.changeLevel(e,i).subscribe(()=>this.findAndExtractLoggers())}filterAndSort(){this.filteredAndOrderedLoggers=this.loggers.filter(e=>!this.filter||e.name.toLowerCase().includes(this.filter.toLowerCase())).sort((e,i)=>e[this.orderProp]<i[this.orderProp]?this.ascending?-1:1:e[this.orderProp]>i[this.orderProp]?this.ascending?1:-1:this.orderProp==="level"?e.name<i.name?-1:1:0)}findAndExtractLoggers(){this.logsService.findAll().subscribe(e=>{this.loggers=Object.entries(e.loggers).map(([i,n])=>new u(i,n.effectiveLevel)),this.filterAndSort()})}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=w({type:o,selectors:[["jhi-logs"]],decls:1,vars:1,consts:[[1,"table-responsive"],["id","logs-page-heading","jhiTranslate","logs.title","data-cy","logsPageHeading"],["jhiTranslate","logs.nbloggers",3,"translateValues"],["jhiTranslate","logs.filter"],["type","text",1,"form-control",3,"ngModelChange","ngModel"],["aria-describedby","logs-page-heading",1,"table","table-sm","table-striped","table-bordered"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["jhiSortBy","name","scope","col"],["jhiTranslate","logs.table.name"],[3,"icon"],["jhiSortBy","level","scope","col"],["jhiTranslate","logs.table.level"],[1,"btn","btn-sm",3,"click","ngClass"]],template:function(i,n){i&1&&L(0,Q,34,9),i&2&&y(n.loggers?0:-1)},dependencies:[U,D,B,I,W,H,$,G,M,R],styles:[".btn-danger[_ngcontent-%COMP%]{background-color:#dc3545!important}.btn-warning[_ngcontent-%COMP%]{background-color:#ffc107!important}.btn-info[_ngcontent-%COMP%]{background-color:#17a2b8!important}.btn-success[_ngcontent-%COMP%]{background-color:#28a745!important}.btn-primary[_ngcontent-%COMP%]{background-color:#3e8acc!important}"]})}return o})();export{_e as LogsComponent};
//# sourceMappingURL=logs.component-65M27JFC.js.map
