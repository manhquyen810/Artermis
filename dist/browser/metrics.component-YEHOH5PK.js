import{b as C}from"./chunk-OTNXTVPX.js";import{G as D,u as re,v as le}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as ae,c as te,h as ie,m as ne}from"./chunk-WA5GEAJB.js";import{a as ce}from"./chunk-K3W6YFKH.js";import{d as P}from"./chunk-EDXSOKK5.js";import{Ka as oe,sd as se}from"./chunk-Z4VHWOB5.js";import{a as b}from"./chunk-U54OSGNH.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{A as w,B as M,O as ee,n as Y,y as Z}from"./chunk-IOA4DPXY.js";import{A,Ad as d,Db as a,Dc as z,Ea as k,Id as R,Ma as $,Mc as E,Na as G,Oc as x,Rc as V,Rd as X,Tb as S,Za as f,Zb as g,ab as K,dd as e,ed as s,fd as v,gd as q,hd as L,id as O,kc as u,ld as U,md as H,nd as Q,sc as h,uc as y,vc as T,wc as j,xc as n,ya as J,yc as i,yd as c,zc as o,zd as I}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var me=(()=>{class r{http=k(ee);getMetrics(){return this.http.get("management/jhimetrics")}threadDump(){return this.http.get("management/threaddump")}static \u0275fac=function(m){return new(m||r)};static \u0275prov=J({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Me(r,p){if(r&1&&(e(0,`
                    `),n(1,"span"),e(2,`
                        `),n(3,"span"),e(4),i(),e(5),c(6,"number"),c(7,"number"),i(),e(8,`
                `)),r&2){let t=x().$implicit;a(4),s(t.key),a(),q(`
                        (`,d(6,3,t.value.used/1048576,"1.0-0"),"M / ",d(7,6,t.value.max/1048576,"1.0-0"),`M)
                    `)}}function be(r,p){if(r&1&&(e(0,`
                    `),n(1,"span")(2,"span"),e(3),i(),e(4),c(5,"number"),i(),e(6,`
                `)),r&2){let t=x().$implicit;a(3),s(t.key),a(),v(" ",d(5,2,t.value.used/1048576,"1.0-0"),"M")}}function Ce(r,p){if(r&1&&(e(0,`
                    `),n(1,"ngb-progressbar",1),e(2,`
                        `),n(3,"span"),e(4),c(5,"number"),i(),e(6,`
                    `),i(),e(7,`
                `)),r&2){let t=x().$implicit;a(),u("value",100*t.value.used/t.value.max)("striped",!0)("animated",!1),a(3),v("",d(5,4,t.value.used*100/t.value.max,"1.0-0"),"%")}}function Ee(r,p){if(r&1&&(e(0,`
            `),n(1,"div"),e(2,`
                `),g(3,Me,9,9)(4,be,7,5),n(5,"div"),e(6),c(7,"number"),i(),e(8,`
                `),g(9,Ce,8,7),i(),e(10,`
        `)),r&2){let t=p.$implicit;a(3),h(t.value.max!==-1?3:4),a(3),v("Committed : ",d(7,3,t.value.committed/1048576,"1.0-0"),"M"),a(3),h(t.value.max!==-1?9:-1)}}function _e(r,p){if(r&1&&(e(0,`
    `),n(1,"div"),e(2,`
        `),T(3,Ee,11,6,null,null,y),c(5,"keyvalue"),i(),e(6,`
`)),r&2){let t=x();a(3),j(I(5,0,t.jvmMemoryMetrics()))}}var de=(()=>{class r{jvmMemoryMetrics=f.required();updating=f(!1);static \u0275fac=function(m){return new(m||r)};static \u0275cmp=S({type:r,selectors:[["jhi-jvm-memory"]],inputs:{jvmMemoryMetrics:[1,"jvmMemoryMetrics"],updating:[1,"updating"]},decls:3,vars:1,consts:[["jhiTranslate","metrics.jvm.memory.title"],["type","success",3,"value","striped","animated"]],template:function(m,l){m&1&&(o(0,"h4",0),e(1,`
`),g(2,_e,7,2)),m&2&&(a(2),h(!l.updating()&&l.jvmMemoryMetrics()?2:-1))},dependencies:[b,D,M,w],encapsulation:2,changeDetection:0})}return r})();function ye(r,p){if(r&1&&(e(0,`
                `),o(1,"fa-icon",15),e(2,`
            `)),r&2){let t=x();a(),u("icon",t.faCheck)}}function Te(r,p){if(r&1&&(e(0,`
                `),o(1,"fa-icon",15),e(2,`
            `)),r&2){let t=x();a(),u("icon",t.faCheck)}}function je(r,p){if(r&1&&(e(0,`
                `),o(1,"fa-icon",15),e(2,`
            `)),r&2){let t=x();a(),u("icon",t.faCheck)}}function Ie(r,p){if(r&1&&(e(0,`
                `),o(1,"fa-icon",15),e(2,`
            `)),r&2){let t=x();a(),u("icon",t.faCheck)}}function ke(r,p){if(r&1&&(e(0,`
                `),o(1,"fa-icon",15),e(2,`
            `)),r&2){let t=x();a(),u("icon",t.faCheck)}}function De(r,p){if(r&1&&(e(0,`
                        `),n(1,"div",30),e(2,`
                            `),n(3,"samp"),e(4),n(5,"code"),e(6),i(),e(7,")"),i(),e(8,`
                            `),o(9,"span",31),e(10,`
                        `),i(),e(11,`
                    `)),r&2){let t=p.$implicit;a(4),q("",t.className,".",t.methodName,"("),a(2),q("",t.fileName,":",t.lineNumber,"")}}function Be(r,p){if(r&1){let t=z();e(0,`
        `),n(1,"div",16),e(2,`
            `),n(3,"h6"),e(4,`
                `),n(5,"span",17),e(6),i(),e(7),n(8,"a",18),E("click",function(){let l=$(t).$implicit;return G(l.showThreadDump=!l.showThreadDump)}),e(9,`
                    `),o(10,"span",19),e(11,`
                    `),o(12,"span",20),e(13,`
                `),i(),e(14,`
            `),i(),e(15,`
            `),n(16,"div",21),e(17,`
                `),n(18,"div",22),e(19,`
                    `),T(20,De,12,4,null,null,y),i(),e(22,`
            `),i(),e(23,`
            `),n(24,"table",23),e(25,`
                `),n(26,"caption"),e(27),i(),e(28,`
                `),n(29,"thead"),e(30,`
                    `),n(31,"tr"),e(32,`
                        `),o(33,"th",24),e(34,`
                        `),o(35,"th",25),e(36,`
                        `),o(37,"th",26),e(38,`
                        `),o(39,"th",27),e(40,`
                        `),o(41,"th",28),e(42,`
                    `),i(),e(43,`
                `),i(),e(44,`
                `),n(45,"tbody"),e(46,`
                    `),n(47,"tr"),e(48,`
                        `),n(49,"td"),e(50),i(),e(51,`
                        `),n(52,"td"),e(53),i(),e(54,`
                        `),n(55,"td"),e(56),i(),e(57,`
                        `),n(58,"td"),e(59),i(),e(60,`
                        `),n(61,"td",29),e(62,`
                            `),n(63,"code"),e(64),i(),e(65,`
                        `),i(),e(66,`
                    `),i(),e(67,`
                `),i(),e(68,`
            `),i(),e(69,`
        `),i(),e(70,`
    `)}if(r&2){let t=p.$implicit,m=x();a(5),u("ngClass",m.getBgClass(t.threadState)),a(),s(t.threadState),a(),q(`
                \xA0`,t.threadName," (ID ",t.threadId,`)
                `),a(3),u("hidden",t.showThreadDump),a(2),u("hidden",!t.showThreadDump),a(4),u("hidden",!t.showThreadDump),a(4),j(t.stackTrace),a(7),v(`
                    Threads dump:
                    `,t.threadName,`
                `),a(23),s(t.blockedTime),a(3),s(t.blockedCount),a(3),s(t.waitedTime),a(3),s(t.waitedCount),a(2),V("title",t.lockName),a(3),s(t.lockName)}}var pe=(()=>{class r{ThreadState=C;threadStateFilter;get selectedThreadState(){return this.threadStateFilter}activeModal=k(re);set selectedThreadState(t){this.threadStateFilter=t,this.refreshFilteredThreads()}threadFilter;threads=[];filteredThreads=[];threadDumpAll=0;threadDumpBlocked=0;threadDumpRunnable=0;threadDumpTimedWaiting=0;threadDumpWaiting=0;faCheck=se;ngOnInit(){this.threads.forEach(t=>{switch(t.threadState){case C.Runnable:this.threadDumpRunnable+=1;break;case C.Waiting:this.threadDumpWaiting+=1;break;case C.TimedWaiting:this.threadDumpTimedWaiting+=1;break;case C.Blocked:this.threadDumpBlocked+=1;break;default:break}}),this.threadDumpAll=this.threadDumpRunnable+this.threadDumpWaiting+this.threadDumpTimedWaiting+this.threadDumpBlocked,this.filteredThreads=this.threads}getBgClass(t){switch(t){case C.Runnable:return"bg-success";case C.Waiting:return"bg-info";case C.TimedWaiting:return"bg-warning";case C.Blocked:return"bg-danger";default:return""}}isMatchingTextFilter(t){if(this.threadFilter==null)return!0;let m=["threadName","threadId","blockedTime","blockedCount","waitedTime","waitedCount","lockName"];return Object.keys(t).filter(l=>m.includes(l)).some(l=>t[l]?.toString().toLowerCase().includes(this.threadFilter.toLowerCase()))}isMatchingSelectedThreadState(t){return this.selectedThreadState==null?!0:t.threadState===this.selectedThreadState}refreshFilteredThreads(){this.filteredThreads=this.threads?.filter(t=>this.isMatchingTextFilter(t)&&this.isMatchingSelectedThreadState(t))??[]}dismiss(){this.activeModal.dismiss()}static \u0275fac=function(m){return new(m||r)};static \u0275cmp=S({type:r,selectors:[["jhi-thread-modal"]],decls:69,vars:18,consts:[[1,"modal-header"],["jhiTranslate","metrics.jvm.threads.dump.title",1,"modal-title"],["type","button",1,"close",3,"click"],[1,"modal-body"],[1,"mb-3"],[1,"badge","bg-primary","hand",3,"click"],[1,"badge","badge-pill","badge-default"],[1,"badge","bg-success","hand",3,"click"],[1,"badge","bg-info","hand",3,"click"],[1,"badge","bg-warning","hand",3,"click"],[1,"badge","bg-danger","hand",3,"click"],[1,"mt-2"],["type","text",1,"form-control",3,"keyup","ngModelChange","ngModel"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary","float-left",3,"click"],[3,"icon"],[1,"pad"],[1,"badge",3,"ngClass"],["href","javascript:void(0);",3,"click"],["jhiTranslate","metrics.jvm.threads.dump.show",3,"hidden"],["jhiTranslate","metrics.jvm.threads.dump.hide",3,"hidden"],[1,"card",3,"hidden"],[1,"card-body"],[1,"table","table-sm","table-responsive"],["scope","col","jhiTranslate","metrics.jvm.threads.dump.blockedtime"],["scope","col","jhiTranslate","metrics.jvm.threads.dump.blockedcount"],["scope","col","jhiTranslate","metrics.jvm.threads.dump.waitedtime"],["scope","col","jhiTranslate","metrics.jvm.threads.dump.waitedcount"],["scope","col","jhiTranslate","metrics.jvm.threads.dump.lockname"],[1,"thread-dump-modal-lock",3,"title"],[1,"break"],[1,"mt-1"]],template:function(m,l){m&1&&(n(0,"div",0),e(1,`
    `),o(2,"h4",1),e(3,`
    `),n(4,"button",2),E("click",function(){return l.dismiss()}),e(5,"\xD7"),i(),e(6,`
`),i(),e(7,`
`),n(8,"div",3),e(9,`
    `),n(10,"div",4),e(11,`
        `),n(12,"span",5),E("click",function(){return l.selectedThreadState=void 0}),e(13,`
            `),g(14,ye,3,1),e(15,`
            All\xA0`),n(16,"span",6),e(17),i(),e(18,`
        `),i(),e(19,`
        `),n(20,"span",7),E("click",function(){return l.selectedThreadState=l.ThreadState.Runnable}),e(21,`
            `),g(22,Te,3,1),e(23,`
            Runnable\xA0`),n(24,"span",6),e(25),i(),e(26,`
        `),i(),e(27,`
        `),n(28,"span",8),E("click",function(){return l.selectedThreadState=l.ThreadState.Waiting}),e(29,`
            `),g(30,je,3,1),e(31,`
            Waiting\xA0`),n(32,"span",6),e(33),i(),e(34,`
        `),i(),e(35,`
        `),n(36,"span",9),E("click",function(){return l.selectedThreadState=l.ThreadState.TimedWaiting}),e(37,`
            `),g(38,Ie,3,1),e(39,`
            Timed Waiting\xA0`),n(40,"span",6),e(41),i(),e(42,`
        `),i(),e(43,`
        `),n(44,"span",10),E("click",function(){return l.selectedThreadState=l.ThreadState.Blocked}),e(45,`
            `),g(46,ke,3,1),e(47,`
            Blocked\xA0`),n(48,"span",6),e(49),i(),e(50,`
        `),i(),e(51,`
    `),i(),e(52,`
    `),n(53,"div",11),e(54,"\xA0"),i(),e(55),c(56,"artemisTranslate"),c(57,"artemisTranslate"),n(58,"input",12),E("keyup",function(){return l.refreshFilteredThreads()}),Q("ngModelChange",function(N){return H(l.threadFilter,N)||(l.threadFilter=N),N}),i(),e(59,`
    `),T(60,Be,71,14,null,null,y),i(),e(62,`
`),n(63,"div",13),e(64,`
    `),n(65,"button",14),E("click",function(){return l.dismiss()}),e(66,"Done"),i(),e(67,`
`),i(),e(68,`
`)),m&2&&(a(14),h(l.selectedThreadState===void 0?14:-1),a(3),s(l.threadDumpAll),a(5),h(l.selectedThreadState===l.ThreadState.Runnable?22:-1),a(3),s(l.threadDumpRunnable),a(5),h(l.selectedThreadState===l.ThreadState.Waiting?30:-1),a(3),s(l.threadDumpWaiting),a(5),h(l.selectedThreadState===l.ThreadState.TimedWaiting?38:-1),a(3),s(l.threadDumpTimedWaiting),a(5),h(l.selectedThreadState===l.ThreadState.Blocked?46:-1),a(3),s(l.threadDumpBlocked),a(6),L(`
    `,I(56,14,"metrics.filter"),": ",l.filteredThreads.length," ",I(57,16,"metrics.matches"),`
    `),a(3),U("ngModel",l.threadFilter),a(2),j(l.filteredThreads))},dependencies:[b,P,ae,te,ie,ne,Y,ce],encapsulation:2,changeDetection:0})}return r})();var xe=(()=>{class r{threadStats=K({all:0,runnable:0,timedWaiting:0,waiting:0,blocked:0});changeDetector=k(R);modalService=k(le);threads=f([]);constructor(){X(()=>this.computeThreadStats())}computeThreadStats(){this.threads().forEach(t=>{switch(t.threadState){case C.Runnable:this.threadStats().runnable+=1;break;case C.Waiting:this.threadStats().waiting+=1;break;case C.TimedWaiting:this.threadStats().timedWaiting+=1;break;case C.Blocked:this.threadStats().blocked+=1;break}}),this.threadStats().all=this.threadStats().runnable+this.threadStats().waiting+this.threadStats().timedWaiting+this.threadStats().blocked,this.changeDetector.markForCheck()}open(){let t=this.modalService.open(pe,{size:"xl"});t.componentInstance.threads=this.threads()}static \u0275fac=function(m){return new(m||r)};static \u0275cmp=S({type:r,selectors:[["jhi-jvm-threads"]],inputs:{threads:[1,"threads"]},decls:55,vars:37,consts:[["jhiTranslate","metrics.jvm.threads.title"],["jhiTranslate","metrics.jvm.threads.runnable"],["type","success",3,"value","max","striped","animated"],["jhiTranslate","metrics.jvm.threads.timedwaiting"],["type","warning",3,"value","max","striped","animated"],["jhiTranslate","metrics.jvm.threads.waiting"],["jhiTranslate","metrics.jvm.threads.blocked"],["data-toggle","modal","data-target","#threadDump",1,"hand","btn","btn-primary","btn-sm",3,"click"]],template:function(m,l){m&1&&(o(0,"h4",0),e(1,`

`),n(2,"span"),o(3,"span",1),e(4),i(),e(5,`

`),n(6,"ngb-progressbar",2),e(7,`
    `),n(8,"span"),e(9),c(10,"number"),i(),e(11,`
`),i(),e(12,`

`),n(13,"span"),o(14,"span",3),e(15),i(),e(16,`

`),n(17,"ngb-progressbar",4),e(18,`
    `),n(19,"span"),e(20),c(21,"number"),i(),e(22,`
`),i(),e(23,`

`),n(24,"span"),o(25,"span",5),e(26),i(),e(27,`

`),n(28,"ngb-progressbar",4),e(29,`
    `),n(30,"span"),e(31),c(32,"number"),i(),e(33,`
`),i(),e(34,`

`),n(35,"span"),o(36,"span",6),e(37),i(),e(38,`

`),n(39,"ngb-progressbar",2),e(40,`
    `),n(41,"span"),e(42),c(43,"number"),i(),e(44,`
`),i(),e(45,`

`),n(46,"div"),e(47),i(),e(48,`

`),n(49,"button",7),E("click",function(){return l.open()}),e(50,`
    `),n(51,"span"),e(52,"Expand"),i(),e(53,`
`),i(),e(54,`
`)),m&2&&(a(4),v(" ",l.threadStats().runnable,""),a(2),u("value",l.threadStats().runnable)("max",l.threadStats().all)("striped",!0)("animated",!1),a(3),v("",d(10,25,l.threadStats().runnable*100/l.threadStats().all,"1.0-0"),"%"),a(6),v(" (",l.threadStats().timedWaiting,")"),a(2),u("value",l.threadStats().timedWaiting)("max",l.threadStats().all)("striped",!0)("animated",!1),a(3),v("",d(21,28,l.threadStats().timedWaiting*100/l.threadStats().all,"1.0-0"),"%"),a(6),v(" (",l.threadStats().waiting,")"),a(2),u("value",l.threadStats().waiting)("max",l.threadStats().all)("striped",!0)("animated",!1),a(3),v("",d(32,31,l.threadStats().waiting*100/l.threadStats().all,"1.0-0"),"%"),a(6),v(" (",l.threadStats().blocked,")"),a(2),u("value",l.threadStats().blocked)("max",l.threadStats().all)("striped",!0)("animated",!1),a(3),v("",d(43,34,l.threadStats().blocked*100/l.threadStats().all,"1.0-0"),"%"),a(5),v("Total: ",l.threadStats().all,""))},dependencies:[b,D,M],encapsulation:2,changeDetection:0})}return r})();function Ne(r,p){if(r&1&&(e(0,`
    `),n(1,"div",0),e(2,`
        `),n(3,"div",1),e(4,"Uptime"),i(),e(5,`
        `),n(6,"div",2),e(7),i(),e(8,`
    `),i(),e(9,`
    `),n(10,"div",0),e(11,`
        `),n(12,"div",1),e(13,"Start time"),i(),e(14,`
        `),n(15,"div",2),e(16),c(17,"date"),i(),e(18,`
    `),i(),e(19,`
    `),n(20,"div",0),e(21,`
        `),n(22,"div",3),e(23,"Process CPU usage"),i(),e(24,`
        `),n(25,"div",4),e(26),c(27,"number"),i(),e(28,`
    `),i(),e(29,`
    `),n(30,"ngb-progressbar",5),e(31,`
        `),n(32,"span"),e(33),c(34,"number"),i(),e(35,`
    `),i(),e(36,`
    `),n(37,"div",0),e(38,`
        `),n(39,"div",3),e(40,"System CPU usage"),i(),e(41,`
        `),n(42,"div",4),e(43),c(44,"number"),i(),e(45,`
    `),i(),e(46,`
    `),n(47,"ngb-progressbar",5),e(48,`
        `),n(49,"span"),e(50),c(51,"number"),i(),e(52,`
    `),i(),e(53,`
    `),n(54,"div",0),e(55,`
        `),n(56,"div",3),e(57,"System CPU count"),i(),e(58,`
        `),n(59,"div",4),e(60),i(),e(61,`
    `),i(),e(62,`
    `),n(63,"div",0),e(64,`
        `),n(65,"div",3),e(66,"System 1m Load average"),i(),e(67,`
        `),n(68,"div",4),e(69),c(70,"number"),i(),e(71,`
    `),i(),e(72,`
    `),n(73,"div",0),e(74,`
        `),n(75,"div",3),e(76,"Process files max"),i(),e(77,`
        `),n(78,"div",4),e(79),c(80,"number"),i(),e(81,`
    `),i(),e(82,`
    `),n(83,"div",0),e(84,`
        `),n(85,"div",3),e(86,"Process files open"),i(),e(87,`
        `),n(88,"div",4),e(89),c(90,"number"),i(),e(91,`
    `),i(),e(92,`
`)),r&2){let t=x();a(7),s(t.convertMillisecondsToDuration(t.systemMetrics()["process.uptime"])),a(9),s(d(17,16,t.systemMetrics()["process.start.time"],"full")),a(10),v("",d(27,19,100*t.systemMetrics()["process.cpu.usage"],"1.0-2")," %"),a(4),u("value",100*t.systemMetrics()["process.cpu.usage"])("striped",!0)("animated",!1),a(3),v("",d(34,22,100*t.systemMetrics()["process.cpu.usage"],"1.0-2")," %"),a(10),v("",d(44,25,100*t.systemMetrics()["system.cpu.usage"],"1.0-2")," %"),a(4),u("value",100*t.systemMetrics()["system.cpu.usage"])("striped",!0)("animated",!1),a(3),v("",d(51,28,100*t.systemMetrics()["system.cpu.usage"],"1.0-2")," %"),a(10),s(t.systemMetrics()["system.cpu.count"]),a(9),s(d(70,31,t.systemMetrics()["system.load.average.1m"],"1.0-2")),a(10),s(d(80,34,t.systemMetrics()["process.files.max"],"1.0-0")),a(10),s(d(90,37,t.systemMetrics()["process.files.open"],"1.0-0"))}}var ue=(()=>{class r{systemMetrics=f.required();updating=f(!1);convertMillisecondsToDuration(t){let m={year:315576e5,month:2629746e3,day:864e5,hour:36e5,minute:6e4,second:1e3},l="";for(let[_,N]of Object.entries(m))if(Math.floor(t/N)>0){let W="";Math.floor(t/N)>1&&(W="s"),l+=`${Math.floor(t/N).toString()} ${_.toString()}${W} `,t=t-N*Math.floor(t/N)}return l}static \u0275fac=function(m){return new(m||r)};static \u0275cmp=S({type:r,selectors:[["jhi-metrics-system"]],inputs:{systemMetrics:[1,"systemMetrics"],updating:[1,"updating"]},decls:4,vars:1,consts:[[1,"row"],[1,"col-md-4"],[1,"col-md-8","text-right"],[1,"col-md-9"],[1,"col-md-3","text-right"],["type","success",3,"value","striped","animated"]],template:function(m,l){m&1&&(n(0,"h4"),e(1,"System"),i(),e(2,`
`),g(3,Ne,93,40)),m&2&&(a(3),h(!l.updating()&&l.systemMetrics()?3:-1))},dependencies:[D,M,Z],encapsulation:2,changeDetection:0})}return r})();function qe(r,p){if(r&1&&(e(0,`
            `),n(1,"div"),e(2,`
                `),n(3,"span"),e(4),c(5,"number"),c(6,"number"),i(),e(7,`
                `),n(8,"ngb-progressbar",3),e(9,`
                    `),n(10,"span"),e(11),c(12,"number"),i(),e(13,`
                `),i(),e(14,`
            `),i(),e(15,`
        `)),r&2){let t=x();a(4),q(`
                    GC Live Data Size/GC Max Data Size (`,d(5,7,t.garbageCollectorMetrics()["jvm.gc.live.data.size"]/1048576,"1.0-0"),`M /
                    `,d(6,10,t.garbageCollectorMetrics()["jvm.gc.max.data.size"]/1048576,"1.0-0"),`M)
                `),a(4),u("max",t.garbageCollectorMetrics()["jvm.gc.max.data.size"])("value",t.garbageCollectorMetrics()["jvm.gc.live.data.size"])("striped",!0)("animated",!1),a(3),v(" ",d(12,13,100*t.garbageCollectorMetrics()["jvm.gc.live.data.size"]/t.garbageCollectorMetrics()["jvm.gc.max.data.size"],"1.0-2"),"% ")}}function we(r,p){if(r&1&&(e(0,`
        `),n(1,"div"),e(2,`
            `),n(3,"span"),e(4),c(5,"number"),c(6,"number"),i(),e(7,`
            `),n(8,"ngb-progressbar",3),e(9,`
                `),n(10,"span"),e(11),c(12,"number"),i(),e(13,`
            `),i(),e(14,`
        `),i(),e(15,`
    `)),r&2){let t=x();a(4),q(`
                GC Memory Promoted/GC Memory Allocated (`,d(5,7,t.garbageCollectorMetrics()["jvm.gc.memory.promoted"]/1048576,"1.0-0"),`M /
                `,d(6,10,t.garbageCollectorMetrics()["jvm.gc.memory.allocated"]/1048576,"1.0-0"),`M)
            `),a(4),u("max",t.garbageCollectorMetrics()["jvm.gc.memory.allocated"])("value",t.garbageCollectorMetrics()["jvm.gc.memory.promoted"])("striped",!0)("animated",!1),a(3),v(" ",d(12,13,100*t.garbageCollectorMetrics()["jvm.gc.memory.promoted"]/t.garbageCollectorMetrics()["jvm.gc.memory.allocated"],"1.0-2"),"% ")}}function Fe(r,p){if(r&1&&(e(0,`
        `),n(1,"div",1),e(2,`
            `),n(3,"div",4),e(4,"Classes loaded"),i(),e(5,`
            `),n(6,"div",5),e(7),i(),e(8,`
        `),i(),e(9,`
        `),n(10,"div",1),e(11,`
            `),n(12,"div",4),e(13,"Classes unloaded"),i(),e(14,`
            `),n(15,"div",5),e(16),i(),e(17,`
        `),i(),e(18,`
    `)),r&2){let t=x();a(7),s(t.garbageCollectorMetrics().classesLoaded),a(9),s(t.garbageCollectorMetrics().classesUnloaded)}}function Re(r,p){if(r&1&&(e(0,`
        `),n(1,"div",6),e(2,`
            `),n(3,"table",7),e(4,`
                `),n(5,"thead"),e(6,`
                    `),n(7,"tr"),e(8,`
                        `),o(9,"th",8),e(10,`
                        `),o(11,"th",9),e(12,`
                        `),o(13,"th",10),e(14,`
                        `),o(15,"th",11),e(16,`
                        `),o(17,"th",12),e(18,`
                        `),o(19,"th",13),e(20,`
                        `),o(21,"th",14),e(22,`
                        `),o(23,"th",15),e(24,`
                        `),o(25,"th",16),e(26,`
                    `),i(),e(27,`
                `),i(),e(28,`
                `),n(29,"tbody"),e(30,`
                    `),n(31,"tr"),e(32,`
                        `),n(33,"td"),e(34,"jvm.gc.pause"),i(),e(35,`
                        `),n(36,"td",17),e(37),i(),e(38,`
                        `),n(39,"td",17),e(40),c(41,"number"),i(),e(42,`
                        `),n(43,"td",17),e(44),c(45,"number"),i(),e(46,`
                        `),n(47,"td",17),e(48),c(49,"number"),i(),e(50,`
                        `),n(51,"td",17),e(52),c(53,"number"),i(),e(54,`
                        `),n(55,"td",17),e(56),c(57,"number"),i(),e(58,`
                        `),n(59,"td",17),e(60),c(61,"number"),i(),e(62,`
                        `),n(63,"td",17),e(64),c(65,"number"),i(),e(66,`
                    `),i(),e(67,`
                `),i(),e(68,`
            `),i(),e(69,`
        `),i(),e(70,`
    `)),r&2){let t=x();a(37),s(t.garbageCollectorMetrics()["jvm.gc.pause"].count),a(3),s(d(41,8,t.garbageCollectorMetrics()["jvm.gc.pause"].mean,"1.0-3")),a(4),s(d(45,11,t.garbageCollectorMetrics()["jvm.gc.pause"]["0.0"],"1.0-3")),a(4),s(d(49,14,t.garbageCollectorMetrics()["jvm.gc.pause"]["0.5"],"1.0-3")),a(4),s(d(53,17,t.garbageCollectorMetrics()["jvm.gc.pause"]["0.75"],"1.0-3")),a(4),s(d(57,20,t.garbageCollectorMetrics()["jvm.gc.pause"]["0.95"],"1.0-3")),a(4),s(d(61,23,t.garbageCollectorMetrics()["jvm.gc.pause"]["0.99"],"1.0-3")),a(4),s(d(65,26,t.garbageCollectorMetrics()["jvm.gc.pause"].max,"1.0-3"))}}var he=(()=>{class r{garbageCollectorMetrics=f.required();updating=f(!1);static \u0275fac=function(m){return new(m||r)};static \u0275cmp=S({type:r,selectors:[["jhi-metrics-garbagecollector"]],inputs:{garbageCollectorMetrics:[1,"garbageCollectorMetrics"],updating:[1,"updating"]},decls:21,vars:4,consts:[["id","garbageCollectorMetricsTitle","jhiTranslate","metrics.jvm.gc.title"],[1,"row"],[1,"col-md-4"],["type","success",3,"max","value","striped","animated"],[1,"col-md-9"],[1,"col-md-3","text-right"],[1,"table-responsive"],["aria-describedby","garbageCollectorMetrics",1,"table","table-striped"],["scope","col"],["scope","col","jhiTranslate","metrics.servicesstats.table.count",1,"text-right"],["scope","col","jhiTranslate","metrics.servicesstats.table.mean",1,"text-right"],["scope","col","jhiTranslate","metrics.servicesstats.table.min",1,"text-right"],["scope","col","jhiTranslate","metrics.servicesstats.table.p50",1,"text-right"],["scope","col","jhiTranslate","metrics.servicesstats.table.p75",1,"text-right"],["scope","col","jhiTranslate","metrics.servicesstats.table.p95",1,"text-right"],["scope","col","jhiTranslate","metrics.servicesstats.table.p99",1,"text-right"],["scope","col","jhiTranslate","metrics.servicesstats.table.max",1,"text-right"],[1,"text-right"]],template:function(m,l){m&1&&(o(0,"h3",0),e(1,`
`),n(2,"div",1),e(3,`
    `),n(4,"div",2),e(5,`
        `),g(6,qe,16,16),i(),e(7,`
`),i(),e(8,`
`),n(9,"div",2),e(10,`
    `),g(11,we,16,16),i(),e(12,`
`),n(13,"div",2),e(14,`
    `),g(15,Fe,19,2),i(),e(16,`
`),n(17,"div",1),e(18,`
    `),g(19,Re,71,29),i(),e(20,`
`)),m&2&&(a(6),h(l.garbageCollectorMetrics()&&l.garbageCollectorMetrics()["jvm.gc.live.data.size"]?6:-1),a(5),h(l.garbageCollectorMetrics()?11:-1),a(4),h(l.garbageCollectorMetrics()?15:-1),a(4),h(!l.updating()&&l.garbageCollectorMetrics()?19:-1))},dependencies:[b,D,M],encapsulation:2,changeDetection:0})}return r})();var F=r=>isNaN(r)?0:r;function Pe(r,p){if(r&1&&(e(0,`
                `),n(1,"tr"),e(2,`
                    `),n(3,"td"),e(4),i(),e(5,`
                    `),n(6,"td"),e(7,`
                        `),n(8,"ngb-progressbar",6),e(9,`
                            `),n(10,"span"),e(11),i(),e(12,`
                        `),i(),e(13,`
                    `),i(),e(14,`
                    `),n(15,"td",7),e(16),c(17,"number"),i(),e(18,`
                    `),n(19,"td",7),e(20),c(21,"number"),i(),e(22,`
                `),i(),e(23,`
            `)),r&2){let t=p.$implicit,m=x(2);a(4),s(t.key),a(4),u("max",m.requestMetrics().all.count)("value",t.value.count)("striped",!0)("animated",!1),a(3),s(t.value.count),a(5),v(`
                        `,d(17,8,m.filterNaN(t.value.mean),"1.0-2"),`
                    `),a(4),s(d(21,11,t.value.max,"1.0-2"))}}function We(r,p){if(r&1&&(e(0,`
    `),n(1,"table",1),e(2,`
        `),n(3,"thead"),e(4,`
            `),n(5,"tr"),e(6,`
                `),o(7,"th",2),e(8,`
                `),o(9,"th",3),e(10,`
                `),o(11,"th",4),e(12,`
                `),o(13,"th",5),e(14,`
            `),i(),e(15,`
        `),i(),e(16,`
        `),n(17,"tbody"),e(18,`
            `),T(19,Pe,24,14,null,null,y),c(21,"keyvalue"),i(),e(22,`
    `),i(),e(23,`
`)),r&2){let t=x();a(19),j(I(21,0,t.requestMetrics().percode))}}var ve=(()=>{class r{requestMetrics=f.required();updating=f(!1);filterNaN=t=>F(t);static \u0275fac=function(m){return new(m||r)};static \u0275cmp=S({type:r,selectors:[["jhi-metrics-request"]],inputs:{requestMetrics:[1,"requestMetrics"],updating:[1,"updating"]},decls:3,vars:1,consts:[["id","requestMetrics","jhiTranslate","metrics.jvm.http.title"],["aria-describedby","requestMetrics",1,"table","table-striped"],["scope","col","jhiTranslate","metrics.jvm.http.table.code"],["scope","col","jhiTranslate","metrics.jvm.http.table.count"],["scope","col","jhiTranslate","metrics.jvm.http.table.mean",1,"text-right"],["scope","col","jhiTranslate","metrics.jvm.http.table.max",1,"text-right"],["type","success",3,"max","value","striped","animated"],[1,"text-right"]],template:function(m,l){m&1&&(o(0,"h3",0),e(1,`
`),g(2,We,24,2)),m&2&&(a(2),h(!l.updating()&&l.requestMetrics()?2:-1))},dependencies:[b,D,M,w],encapsulation:2,changeDetection:0})}return r})();function Ae(r,p){if(r&1&&(e(0,`
                        `),n(1,"tr"),e(2,`
                            `),n(3,"td"),e(4),i(),e(5,`
                            `),n(6,"td"),e(7),i(),e(8,`
                            `),n(9,"td",5),e(10),i(),e(11,`
                            `),n(12,"td",5),e(13),c(14,"number"),i(),e(15,`
                            `),n(16,"td",5),e(17),c(18,"number"),i(),e(19,`
                        `),i(),e(20,`
                    `)),r&2){let t=p.$implicit,m=x().$implicit;a(4),s(t.key),a(3),s(m.key),a(3),s(t.value.count),a(3),s(d(14,5,t.value.mean,"1.0-3")),a(4),s(d(18,8,t.value.max,"1.0-3"))}}function Je(r,p){if(r&1&&(e(0,`
                    `),T(1,Ae,21,11,null,null,y),c(3,"keyvalue")),r&2){let t=p.$implicit;a(),j(I(3,0,t.value))}}function $e(r,p){if(r&1&&(e(0,`
    `),n(1,"div",1),e(2,`
        `),n(3,"table",2),e(4,`
            `),n(5,"thead"),e(6,`
                `),n(7,"tr"),e(8,`
                    `),n(9,"th",3),e(10,"Method"),i(),e(11,`
                    `),n(12,"th",3),e(13,"Endpoint url"),i(),e(14,`
                    `),n(15,"th",4),e(16,"Count"),i(),e(17,`
                    `),n(18,"th",4),e(19,"Mean"),i(),e(20,`
                    `),n(21,"th",4),e(22,"Max"),i(),e(23,`
                `),i(),e(24,`
            `),i(),e(25,`
            `),n(26,"tbody"),e(27,`
                `),T(28,Je,4,2,null,null,y),c(30,"keyvalue"),i(),e(31,`
        `),i(),e(32,`
    `),i(),e(33,`
`)),r&2){let t=x();a(28),j(I(30,0,t.endpointsRequestsMetrics()))}}var ge=(()=>{class r{endpointsRequestsMetrics=f.required();updating=f(!1);static \u0275fac=function(m){return new(m||r)};static \u0275cmp=S({type:r,selectors:[["jhi-metrics-endpoints-requests"]],inputs:{endpointsRequestsMetrics:[1,"endpointsRequestsMetrics"],updating:[1,"updating"]},decls:4,vars:1,consts:[["id","endpointsRequestsMetrics"],[1,"table-responsive"],["aria-describedby","endpointsRequestsMetrics",1,"table","table-striped"],["scope","col"],["scope","col",1,"text-right"],[1,"text-right"]],template:function(m,l){m&1&&(n(0,"h3",0),e(1,"Endpoints requests (time in millisecond)"),i(),e(2,`
`),g(3,$e,34,2)),m&2&&(a(3),h(!l.updating()&&l.endpointsRequestsMetrics()?3:-1))},dependencies:[M,w],encapsulation:2,changeDetection:0})}return r})();function Ge(r,p){if(r&1&&(e(0,`
                    `),n(1,"tr"),e(2,`
                        `),n(3,"td"),e(4),i(),e(5,`
                        `),n(6,"td",12),e(7),i(),e(8,`
                        `),n(9,"td",12),e(10),i(),e(11,`
                        `),n(12,"td",12),e(13),i(),e(14,`
                        `),n(15,"td",12),e(16),i(),e(17,`
                        `),n(18,"td",12),e(19),i(),e(20,`
                        `),n(21,"td",12),e(22),i(),e(23,`
                        `),n(24,"td",12),e(25),c(26,"number"),i(),e(27,`
                        `),n(28,"td",12),e(29),c(30,"number"),i(),e(31,`
                    `),i(),e(32,`
                `)),r&2){let t=p.$implicit,m=x(2);a(4),s(t.key),a(3),s(t.value["cache.gets.hit"]),a(3),s(t.value["cache.gets.miss"]),a(3),s(t.value["cache.gets.hit"]+t.value["cache.gets.miss"]),a(3),s(t.value["cache.puts"]),a(3),s(t.value["cache.removals"]),a(3),s(t.value["cache.evictions"]),a(3),v(`
                            `,d(26,9,m.filterNaN(100*t.value["cache.gets.hit"]/(t.value["cache.gets.hit"]+t.value["cache.gets.miss"])),"1.0-4"),`
                        `),a(4),v(`
                            `,d(30,12,m.filterNaN(100*t.value["cache.gets.miss"]/(t.value["cache.gets.hit"]+t.value["cache.gets.miss"])),"1.0-4"),`
                        `)}}function Ke(r,p){if(r&1&&(e(0,`
    `),n(1,"div",1),e(2,`
        `),n(3,"table",2),e(4,`
            `),n(5,"thead"),e(6,`
                `),n(7,"tr"),e(8,`
                    `),o(9,"th",3),e(10,`
                    `),o(11,"th",4),e(12,`
                    `),o(13,"th",5),e(14,`
                    `),o(15,"th",6),e(16,`
                    `),o(17,"th",7),e(18,`
                    `),o(19,"th",8),e(20,`
                    `),o(21,"th",9),e(22,`
                    `),o(23,"th",10),e(24,`
                    `),o(25,"th",11),e(26,`
                `),i(),e(27,`
            `),i(),e(28,`
            `),n(29,"tbody"),e(30,`
                `),T(31,Ge,33,15,null,null,y),c(33,"keyvalue"),i(),e(34,`
        `),i(),e(35,`
    `),i(),e(36,`
`)),r&2){let t=x();a(31),j(I(33,0,t.cacheMetrics()))}}var fe=(()=>{class r{cacheMetrics=f.required();updating=f(!1);filterNaN=t=>F(t);static \u0275fac=function(m){return new(m||r)};static \u0275cmp=S({type:r,selectors:[["jhi-metrics-cache"]],inputs:{cacheMetrics:[1,"cacheMetrics"],updating:[1,"updating"]},decls:3,vars:1,consts:[["id","cacheMetrics","jhiTranslate","metrics.cache.title"],[1,"table-responsive"],["aria-describedby","cacheMetrics",1,"table","table-striped"],["scope","col","jhiTranslate","metrics.cache.cachename"],["scope","col","jhiTranslate","metrics.cache.hits",1,"text-right"],["scope","col","jhiTranslate","metrics.cache.misses",1,"text-right"],["scope","col","jhiTranslate","metrics.cache.gets",1,"text-right"],["scope","col","jhiTranslate","metrics.cache.puts",1,"text-right"],["scope","col","jhiTranslate","metrics.cache.removals",1,"text-right"],["scope","col","jhiTranslate","metrics.cache.evictions",1,"text-right"],["scope","col","jhiTranslate","metrics.cache.hitPercent",1,"text-right"],["scope","col","jhiTranslate","metrics.cache.missPercent",1,"text-right"],[1,"text-right"]],template:function(m,l){m&1&&(o(0,"h3",0),e(1,`
`),g(2,Ke,37,2)),m&2&&(a(2),h(!l.updating()&&l.cacheMetrics()?2:-1))},dependencies:[b,M,w],encapsulation:2,changeDetection:0})}return r})();function ze(r,p){if(r&1&&(e(0,`
    `),n(1,"div",1),e(2,`
        `),n(3,"table",2),e(4,`
            `),n(5,"thead"),e(6,`
                `),n(7,"tr"),e(8,`
                    `),n(9,"th",3),e(10,`
                        `),o(11,"span",4),e(12),i(),e(13,`
                    `),o(14,"th",5),e(15,`
                    `),o(16,"th",6),e(17,`
                    `),o(18,"th",7),e(19,`
                    `),o(20,"th",8),e(21,`
                    `),o(22,"th",9),e(23,`
                    `),o(24,"th",10),e(25,`
                    `),o(26,"th",11),e(27,`
                    `),o(28,"th",12),e(29,`
                `),i(),e(30,`
            `),i(),e(31,`
            `),n(32,"tbody"),e(33,`
                `),n(34,"tr"),e(35,`
                    `),n(36,"td"),e(37,"Acquire"),i(),e(38,`
                    `),n(39,"td",13),e(40),i(),e(41,`
                    `),n(42,"td",13),e(43),c(44,"number"),i(),e(45,`
                    `),n(46,"td",13),e(47),c(48,"number"),i(),e(49,`
                    `),n(50,"td",13),e(51),c(52,"number"),i(),e(53,`
                    `),n(54,"td",13),e(55),c(56,"number"),i(),e(57,`
                    `),n(58,"td",13),e(59),c(60,"number"),i(),e(61,`
                    `),n(62,"td",13),e(63),c(64,"number"),i(),e(65,`
                    `),n(66,"td",13),e(67),c(68,"number"),i(),e(69,`
                `),i(),e(70,`
                `),n(71,"tr"),e(72,`
                    `),n(73,"td"),e(74,"Creation"),i(),e(75,`
                    `),n(76,"td",13),e(77),i(),e(78,`
                    `),n(79,"td",13),e(80),c(81,"number"),i(),e(82,`
                    `),n(83,"td",13),e(84),c(85,"number"),i(),e(86,`
                    `),n(87,"td",13),e(88),c(89,"number"),i(),e(90,`
                    `),n(91,"td",13),e(92),c(93,"number"),i(),e(94,`
                    `),n(95,"td",13),e(96),c(97,"number"),i(),e(98,`
                    `),n(99,"td",13),e(100),c(101,"number"),i(),e(102,`
                    `),n(103,"td",13),e(104),c(105,"number"),i(),e(106,`
                `),i(),e(107,`
                `),n(108,"tr"),e(109,`
                    `),n(110,"td"),e(111,"Usage"),i(),e(112,`
                    `),n(113,"td",13),e(114),i(),e(115,`
                    `),n(116,"td",13),e(117),c(118,"number"),i(),e(119,`
                    `),n(120,"td",13),e(121),c(122,"number"),i(),e(123,`
                    `),n(124,"td",13),e(125),c(126,"number"),i(),e(127,`
                    `),n(128,"td",13),e(129),c(130,"number"),i(),e(131,`
                    `),n(132,"td",13),e(133),c(134,"number"),i(),e(135,`
                    `),n(136,"td",13),e(137),c(138,"number"),i(),e(139,`
                    `),n(140,"td",13),e(141),c(142,"number"),i(),e(143,`
                `),i(),e(144,`
            `),i(),e(145,`
        `),i(),e(146,`
    `),i(),e(147,`
`)),r&2){let t=x();a(12),O(" (active: ",t.datasourceMetrics().active.value,", min: ",t.datasourceMetrics().min.value,`, max:
                        `,t.datasourceMetrics().max.value,", idle: ",t.datasourceMetrics().idle.value,`)
                    `),a(28),s(t.datasourceMetrics().acquire.count),a(3),s(d(44,28,t.filterNaN(t.datasourceMetrics().acquire.mean),"1.0-2")),a(4),s(d(48,31,t.datasourceMetrics().acquire["0.0"],"1.0-3")),a(4),s(d(52,34,t.datasourceMetrics().acquire["0.5"],"1.0-3")),a(4),s(d(56,37,t.datasourceMetrics().acquire["0.75"],"1.0-3")),a(4),s(d(60,40,t.datasourceMetrics().acquire["0.95"],"1.0-3")),a(4),s(d(64,43,t.datasourceMetrics().acquire["0.99"],"1.0-3")),a(4),s(d(68,46,t.filterNaN(t.datasourceMetrics().acquire.max),"1.0-2")),a(10),s(t.datasourceMetrics().creation.count),a(3),s(d(81,49,t.filterNaN(t.datasourceMetrics().creation.mean),"1.0-2")),a(4),s(d(85,52,t.datasourceMetrics().creation["0.0"],"1.0-3")),a(4),s(d(89,55,t.datasourceMetrics().creation["0.5"],"1.0-3")),a(4),s(d(93,58,t.datasourceMetrics().creation["0.75"],"1.0-3")),a(4),s(d(97,61,t.datasourceMetrics().creation["0.95"],"1.0-3")),a(4),s(d(101,64,t.datasourceMetrics().creation["0.99"],"1.0-3")),a(4),s(d(105,67,t.filterNaN(t.datasourceMetrics().creation.max),"1.0-2")),a(10),s(t.datasourceMetrics().usage.count),a(3),s(d(118,70,t.filterNaN(t.datasourceMetrics().usage.mean),"1.0-2")),a(4),s(d(122,73,t.datasourceMetrics().usage["0.0"],"1.0-3")),a(4),s(d(126,76,t.datasourceMetrics().usage["0.5"],"1.0-3")),a(4),s(d(130,79,t.datasourceMetrics().usage["0.75"],"1.0-3")),a(4),s(d(134,82,t.datasourceMetrics().usage["0.95"],"1.0-3")),a(4),s(d(138,85,t.datasourceMetrics().usage["0.99"],"1.0-3")),a(4),s(d(142,88,t.filterNaN(t.datasourceMetrics().usage.max),"1.0-2"))}}var Se=(()=>{class r{datasourceMetrics=f.required();updating=f(!1);filterNaN=t=>F(t);static \u0275fac=function(m){return new(m||r)};static \u0275cmp=S({type:r,selectors:[["jhi-metrics-datasource"]],inputs:{datasourceMetrics:[1,"datasourceMetrics"],updating:[1,"updating"]},decls:3,vars:1,consts:[["id","datasourceMetrics","jhiTranslate","metrics.datasource.title"],[1,"table-responsive"],["aria-describedby","datasourceMetrics",1,"table","table-striped"],["scope","col"],["jhiTranslate","metrics.datasource.usage"],["scope","col","jhiTranslate","metrics.datasource.count",1,"text-right"],["scope","col","jhiTranslate","metrics.datasource.mean",1,"text-right"],["scope","col","jhiTranslate","metrics.servicesstats.table.min",1,"text-right"],["scope","col","jhiTranslate","metrics.servicesstats.table.p50",1,"text-right"],["scope","col","jhiTranslate","metrics.servicesstats.table.p75",1,"text-right"],["scope","col","jhiTranslate","metrics.servicesstats.table.p95",1,"text-right"],["scope","col","jhiTranslate","metrics.servicesstats.table.p99",1,"text-right"],["scope","col","jhiTranslate","metrics.datasource.max",1,"text-right"],[1,"text-right"]],template:function(m,l){m&1&&(o(0,"h3",0),e(1,`
`),g(2,ze,148,91)),m&2&&(a(2),h(l.updating()?-1:2))},dependencies:[b,M],encapsulation:2,changeDetection:0})}return r})();function Ve(r,p){if(r&1&&(e(0,`
        `),n(1,"div",5),e(2,`
            `),o(3,"jhi-jvm-memory",6),e(4,`
            `),o(5,"jhi-jvm-threads",7),e(6,`
            `),o(7,"jhi-metrics-system",8),e(8,`
        `),i(),e(9,`
    `)),r&2){let t=x();a(3),u("updating",t.updatingMetrics)("jvmMemoryMetrics",t.metrics.jvm),a(2),u("threads",t.threads),a(2),u("updating",t.updatingMetrics)("systemMetrics",t.metrics.processMetrics)}}function Le(r,p){if(r&1&&(e(0,`
        `),o(1,"jhi-metrics-garbagecollector",9),e(2,`
    `)),r&2){let t=x();a(),u("updating",t.updatingMetrics)("garbageCollectorMetrics",t.metrics.garbageCollector)}}function Oe(r,p){r&1&&(e(0,`
        `),o(1,"div",10),e(2,`
    `))}function Ue(r,p){if(r&1&&(e(0,`
        `),o(1,"jhi-metrics-request",11),e(2,`
    `)),r&2){let t=x();a(),u("updating",t.updatingMetrics)("requestMetrics",t.metrics["http.server.requests"])}}function He(r,p){if(r&1&&(e(0,`
        `),o(1,"jhi-metrics-endpoints-requests",12),e(2,`
    `)),r&2){let t=x();a(),u("updating",t.updatingMetrics)("endpointsRequestsMetrics",t.metrics.services)}}function Qe(r,p){if(r&1&&(e(0,`
        `),o(1,"jhi-metrics-cache",13),e(2,`
    `)),r&2){let t=x();a(),u("updating",t.updatingMetrics)("cacheMetrics",t.metrics.cache)}}function Xe(r,p){if(r&1&&(e(0,`
        `),o(1,"jhi-metrics-datasource",14),e(2,`
    `)),r&2){let t=x();a(),u("updating",t.updatingMetrics)("datasourceMetrics",t.metrics.databases)}}var wi=(()=>{class r{metricsService=k(me);changeDetector=k(R);metrics;threads=[];updatingMetrics=!0;faSync=oe;ngOnInit(){this.refresh()}refresh(){this.updatingMetrics=!0,A([this.metricsService.getMetrics(),this.metricsService.threadDump()]).subscribe(([t,m])=>{this.metrics=t,this.threads=m.threads,this.updatingMetrics=!1,this.changeDetector.markForCheck()})}metricsKeyExists(t){return!!this.metrics?.[t]}metricsKeyExistsAndObjectNotEmpty(t){return!!(this.metrics?.[t]&&JSON.stringify(this.metrics[t])!=="{}")}static \u0275fac=function(m){return new(m||r)};static \u0275cmp=S({type:r,selectors:[["jhi-metrics"]],decls:22,vars:8,consts:[["id","metrics-page-heading","jhiTranslate","metrics.title","data-cy","metricsPageHeading"],[1,"btn","btn-primary","float-right",3,"click"],[3,"icon"],["jhiTranslate","metrics.refresh.button"],["jhiTranslate","metrics.jvm.title"],[1,"row"],[1,"col-md-4",3,"updating","jvmMemoryMetrics"],[1,"col-md-4",3,"threads"],[1,"col-md-4",3,"updating","systemMetrics"],[3,"updating","garbageCollectorMetrics"],["jhiTranslate","metrics.updating",1,"well","well-lg"],[3,"updating","requestMetrics"],[3,"updating","endpointsRequestsMetrics"],[3,"updating","cacheMetrics"],[3,"updating","datasourceMetrics"]],template:function(m,l){m&1&&(n(0,"div"),e(1,`
    `),n(2,"h2"),e(3,`
        `),o(4,"span",0),e(5,`
        `),n(6,"button",1),E("click",function(){return l.refresh()}),o(7,"fa-icon",2),e(8," "),o(9,"span",3),i(),e(10,`
    `),i(),e(11,`
    `),o(12,"h3",4),e(13,`
    `),g(14,Ve,10,5)(15,Le,3,2)(16,Oe,3,0)(17,Ue,3,2)(18,He,3,2)(19,Qe,3,2)(20,Xe,3,2),i(),e(21,`
`)),m&2&&(a(7),u("icon",l.faSync),a(7),h(l.metrics&&!l.updatingMetrics?14:-1),a(),h(l.metrics&&l.metricsKeyExists("garbageCollector")?15:-1),a(),h(l.updatingMetrics?16:-1),a(),h(l.metrics&&l.metricsKeyExists("http.server.requests")?17:-1),a(),h(l.metrics&&l.metricsKeyExists("services")?18:-1),a(),h(l.metrics&&l.metricsKeyExists("cache")?19:-1),a(),h(l.metrics&&l.metricsKeyExistsAndObjectNotEmpty("databases")?20:-1))},dependencies:[b,P,de,xe,ue,he,ve,ge,fe,Se],encapsulation:2,changeDetection:0})}return r})();export{wi as MetricsComponent};
//# sourceMappingURL=metrics.component-YEHOH5PK.js.map
