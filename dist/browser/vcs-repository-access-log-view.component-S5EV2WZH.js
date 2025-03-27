import{a as w}from"./chunk-QU4DXSXD.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import{c as L}from"./chunk-5SKDOIBQ.js";import{c as I}from"./chunk-JXJXC4DZ.js";import"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as T}from"./chunk-U54OSGNH.js";import{f}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Ac as u,Bc as E,Db as s,Ea as m,Qd as l,Rd as S,Tb as v,ab as h,dd as e,ed as a,uc as g,vc as y,w as x,wc as A,xc as i,yc as n,zc as o}from"./chunk-5LC5EQRR.js";import{j as p}from"./chunk-3E746U5Y.js";function j(c,d){if(c&1&&(e(0,`
                    `),i(1,"tr",11),e(2,`
                        `),i(3,"td",12),e(4),n(),e(5,`
                        `),i(6,"td",12),e(7),n(),e(8,`
                        `),i(9,"td",12),e(10),n(),e(11,`
                        `),i(12,"td",12),e(13),n(),e(14,`
                        `),i(15,"td",12),e(16),n(),e(17,`
                        `),i(18,"td",12),e(19),n(),e(20,`
                        `),i(21,"td",12),e(22),n(),e(23,`
                    `),n(),e(24,`
                `)),c&2){let t=d.$implicit,r=d.$index;s(4),a(r),s(3),a(t.userId),s(3),a(t.name+", "+t.email),s(3),a(t.repositoryActionType),s(3),a(t.authenticationMechanism),s(3),a(t.commitHash),s(3),a(t.timestamp)}}var H=(()=>{class c{route=m(f);programmingExerciseParticipationService=m(w);alertService=m(I);vcsAccessLogEntries=h([]);params=L(this.route.params,{requireSync:!0});participationId=l(()=>{let t=this.params().repositoryId;if(t)return Number(t)});exerciseId=l(()=>Number(this.params().exerciseId));repositoryType=l(()=>String(this.params().repositoryType));constructor(){S(()=>p(this,null,function*(){this.participationId()?yield this.loadVcsAccessLogForParticipation(this.participationId()):yield this.loadVcsAccessLog(this.exerciseId(),this.repositoryType())}))}loadVcsAccessLogForParticipation(t){return p(this,null,function*(){yield this.extractEntries(()=>this.programmingExerciseParticipationService.getVcsAccessLogForParticipation(t))})}loadVcsAccessLog(t,r){return p(this,null,function*(){yield this.extractEntries(()=>this.programmingExerciseParticipationService.getVcsAccessLogForRepository(t,r))})}extractEntries(t){return p(this,null,function*(){try{let r=yield x(t());r&&this.vcsAccessLogEntries.set(r)}catch{this.alertService.error("artemisApp.repository.vcsAccessLog.error")}})}static \u0275fac=function(r){return new(r||c)};static \u0275cmp=v({type:c,selectors:[["jhi-vcs-repository-access-log-view"]],decls:40,vars:0,consts:[[1,"d-flex","justify-content-between"],["jhiTranslate","artemisApp.repository.vcsAccessLog.title"],[2,"overflow-x","auto"],[1,"table","table-responsive"],["scope","col"],["scope","col","jhiTranslate","artemisApp.repository.vcsAccessLog.userId"],["scope","col","jhiTranslate","artemisApp.repository.vcsAccessLog.author"],["scope","col","jhiTranslate","artemisApp.repository.vcsAccessLog.actionType"],["scope","col","jhiTranslate","artemisApp.repository.vcsAccessLog.authMechanism"],["scope","col","jhiTranslate","artemisApp.repository.vcsAccessLog.commitHash"],["scope","col","jhiTranslate","artemisApp.repository.vcsAccessLog.timeStamp"],[1,"w-25"],[1,"p-2"]],template:function(r,V){r&1&&(u(0),e(1,`
    `),i(2,"div",0),e(3,`
        `),o(4,"h3",1),e(5,`
    `),n(),e(6,`

    `),i(7,"div",2),e(8,`
        `),i(9,"table",3),e(10,`
            `),i(11,"thead"),e(12,`
                `),i(13,"tr"),e(14,`
                    `),i(15,"th",4),e(16,"#"),n(),e(17,`
                    `),o(18,"th",5),e(19,`
                    `),o(20,"th",6),e(21,`
                    `),o(22,"th",7),e(23,`
                    `),o(24,"th",8),e(25,`
                    `),o(26,"th",9),e(27,`
                    `),o(28,"th",10),e(29,`
                `),n(),e(30,`
            `),n(),e(31,`
            `),i(32,"tbody"),e(33,`
                `),y(34,j,25,7,null,null,g),n(),e(36,`
        `),n(),e(37,`
    `),n(),e(38,`
`),E(),e(39,`
`)),r&2&&(s(34),A(V.vcsAccessLogEntries()))},dependencies:[T],encapsulation:2})}return c})();export{H as VcsRepositoryAccessLogViewComponent};
//# sourceMappingURL=vcs-repository-access-log-view.component-S5EV2WZH.js.map
