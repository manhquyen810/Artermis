import{a as W}from"./chunk-SKB5UJGX.js";import{a as Q}from"./chunk-QU4DXSXD.js";import{b as J}from"./chunk-22YQSX6Z.js";import{b as q}from"./chunk-5AQXEKLE.js";import{l as z}from"./chunk-Z2YUBN6N.js";import{c as O}from"./chunk-JNO6DNVW.js";import{K as L}from"./chunk-VZRSC3LP.js";import{m as Y}from"./chunk-VK7JPHFE.js";import{c as B}from"./chunk-BNDLMKXK.js";import{d as $}from"./chunk-EDXSOKK5.js";import{p as v}from"./chunk-DID2YGL7.js";import{ic as M,td as U}from"./chunk-Z4VHWOB5.js";import{a as j}from"./chunk-U54OSGNH.js";import{i as k}from"./chunk-M6Z6DKZQ.js";import{s as V}from"./chunk-IOA4DPXY.js";import{Ad as R,Bd as F,Db as m,Dc as b,Ea as H,Ma as g,Mc as f,Na as _,Oc as p,Rc as T,Tb as h,Va as A,Zb as u,dd as t,fd as x,gd as N,kc as d,mc as D,qd as I,rd as K,sc as l,uc as S,vc as y,wc as w,xb as G,xc as r,yc as a,yd as E,zc as c}from"./chunk-5LC5EQRR.js";var it=e=>["./",e];function nt(e,s){if(e&1&&t(0),e&2){let i=p();x(`
            `,i.pushNumber,`
        `)}}function ot(e,s){if(e&1&&(t(0,`
            `),r(1,"span",3),t(2),a(),t(3,`
        `)),e&2){let i=p();m(2),x(`
                `,i.pushNumber+"."+(i.groupCommitIndex+1),`
            `)}}function mt(e,s){if(e&1&&(t(0,`
                `),r(1,"a",4),t(2),E(3,"truncate"),a(),t(4,`
            `)),e&2){let i,o=p(2);m(),T("ngbTooltip",o.commit.hash),d("routerLink",K(6,it,o.commit.hash)),m(),x(" ",R(3,3,(i=o.commit.hash)!==null&&i!==void 0?i:"",7)," ")}}function st(e,s){if(e&1&&(t(0,`
                `),r(1,"span",5),t(2),E(3,"truncate"),a(),t(4,`
            `)),e&2){let i,o=p(2);m(),T("ngbTooltip",o.commit.hash),m(),x(`
                    `,R(3,2,(i=o.commit.hash)!==null&&i!==void 0?i:"",7),`
                `)}}function rt(e,s){if(e&1&&(t(0,`
            `),u(1,mt,5,8)(2,st,5,5)),e&2){let i=p();m(),l(i.isRepositoryView?1:2)}}function at(e,s){if(e&1&&(t(0,`
            `),r(1,"a",6),t(2),E(3,"truncate"),a(),t(4,`
        `)),e&2){let i,o=p();m(),T("ngbTooltip",o.commit.hash),d("href",o.commit.commitUrl,G),m(),x(" ",R(3,3,(i=o.commit.hash)!==null&&i!==void 0?i:"",7)," ")}}function pt(e,s){if(e&1&&t(0),e&2){let i=p();N(`
            `,i.commit.author,", ",i.commit.authorEmail,`
        `)}}function ct(e,s){if(e&1&&t(0),e&2){let i=p();x(`
            `,i.commit.author,`
        `)}}function lt(e,s){if(e&1&&(t(0,`
            `),c(1,"jhi-result",7),t(2,`
        `)),e&2){let i=p();m(),d("result",i.commit.result)("showUngradedResults",!0)("showBadge",!0)}}function ut(e,s){if(e&1&&(t(0,`
            `),r(1,"span",3),t(2,`
                `),c(3,"fa-icon",8),t(4,`\xA0
                `),c(5,"span",9),t(6,`
            `),a(),t(7,`
        `)),e&2){let i=p();m(3),d("icon",i.faCircle)}}function dt(e,s){e&1&&(t(0,`
            `),c(1,"span",10),t(2,`
        `))}function xt(e,s){e&1&&(t(0,`
            `),c(1,"span",11),t(2,`
        `))}function ft(e,s){e&1&&(t(0,`
            `),c(1,"span",12),t(2,`
        `))}function Ct(e,s){if(e&1&&t(0),e&2){let i=p();x(`
            `,i.groupCommitCount,`
        `)}}function ht(e,s){if(e&1&&(t(0,`
                        `),c(1,"fa-icon",8),t(2,`
                    `)),e&2){let i=p(2);m(),d("icon",i.faAngleDown)}}function gt(e,s){if(e&1&&(t(0,`
                        `),c(1,"fa-icon",8),t(2,`
                    `)),e&2){let i=p(2);m(),d("icon",i.faAngleLeft)}}function _t(e,s){if(e&1){let i=b();t(0,`
            `),r(1,"button",13),f("click",function(){g(i);let n=p();return _(n.onToggleExpand())}),t(2,`
                `),r(3,"span",3),t(4,`
                    `),u(5,ht,3,1)(6,gt,3,1),a(),t(7,`
            `),a(),t(8,`
        `)}if(e&2){let i=p();m(5),l(i.isExpanded?5:6)}}var Z=(()=>{class e{commit;currentSubmissionHash;previousSubmissionHash;exerciseProjectKey;isRepositoryView=!1;rowNumber;isExpanded;pushNumber;firstCommit;groupCommitCount;groupCommitIndex;localVC;toggleExpandEvent=new A;onToggleExpand(){this.toggleExpandEvent.emit()}faCircle=z;faAngleLeft=U;faAngleDown=M;static \u0275fac=function(o){return new(o||e)};static \u0275cmp=h({type:e,selectors:[["jhi-commits-info-row"]],inputs:{commit:"commit",currentSubmissionHash:"currentSubmissionHash",previousSubmissionHash:"previousSubmissionHash",exerciseProjectKey:"exerciseProjectKey",isRepositoryView:"isRepositoryView",rowNumber:"rowNumber",isExpanded:"isExpanded",pushNumber:"pushNumber",firstCommit:"firstCommit",groupCommitCount:"groupCommitCount",groupCommitIndex:"groupCommitIndex",localVC:"localVC"},outputs:{toggleExpandEvent:"toggleExpandEvent"},decls:38,vars:19,consts:[["scope","row",1,"p-2"],[1,"p-2"],[1,"flex-container","p-2"],[1,"text-body-secondary"],[3,"routerLink","ngbTooltip"],[3,"ngbTooltip"],[3,"href","ngbTooltip"],[3,"result","showUngradedResults","showBadge"],["size","lg",3,"icon"],["jhiTranslate","artemisApp.result.noResult"],["jhiTranslate","artemisApp.programmingExercise.commitInfo.currentSubmission",1,"badge","bg-info"],["jhiTranslate","artemisApp.programmingExercise.commitInfo.previousSubmission",1,"badge","bg-info"],["jhiTranslate","artemisApp.programmingExercise.commitInfo.template",1,"badge","bg-info"],[1,"btn","btn-link",3,"click"]],template:function(o,n){o&1&&(r(0,"tr"),t(1,`
    `),r(2,"th",0),t(3,`
        `),u(4,nt,1,1)(5,ot,4,1),a(),t(6,`
    `),r(7,"td",1),t(8,`
        `),u(9,rt,3,1)(10,at,5,6),a(),t(11,`
    `),r(12,"td",1),t(13,`
        `),u(14,pt,1,2)(15,ct,1,1),a(),t(16,`
    `),r(17,"td",1),t(18),E(19,"artemisDate"),a(),t(20,`
    `),r(21,"td",1),t(22,`
        `),u(23,lt,3,3)(24,ut,8,1),a(),t(25,`
    `),r(26,"td",1),t(27),u(28,dt,3,0)(29,xt,3,0)(30,ft,3,0),a(),t(31,`
    `),r(32,"td",2),t(33,`
        `),u(34,Ct,1,1)(35,_t,9,1),a(),t(36,`
`),a(),t(37,`
`)),o&2&&(D("bg-light",n.isExpanded)("border-bottom",n.isExpanded&&n.groupCommitIndex===n.groupCommitCount-1),m(4),l(n.groupCommitIndex===0?4:5),m(5),l(n.localVC?9:10),m(5),l(n.isRepositoryView?14:15),m(4),x(`
        `,F(19,15,n.commit.timestamp,"long",!0),`
    `),m(5),l(n.commit.result?23:n.groupCommitIndex===0?24:-1),m(4),x(`
        `,n.commit.message,`
        `),m(),l(n.currentSubmissionHash===n.commit.hash?28:-1),m(),l(n.previousSubmissionHash===n.commit.hash?29:-1),m(),l(!n.previousSubmissionHash&&n.firstCommit?30:-1),m(4),l(n.groupCommitIndex===0?34:-1),m(),l(n.groupCommitIndex===0&&n.groupCommitCount>1?35:-1))},dependencies:[k,L,J,$,j,O,W],encapsulation:2})}return e})();var tt=()=>({display:"contents"});function bt(e,s){if(e&1){let i=b();t(0,`
    `),r(1,"jhi-commits-info-row",0),f("toggleExpandEvent",function(){g(i);let n=p();return _(n.toggleExpand())}),a(),t(2,`
`)}if(e&2){let i=p();m(),d("ngStyle",I(12,tt))("commit",i.commits[0])("currentSubmissionHash",i.currentSubmissionHash)("previousSubmissionHash",i.previousSubmissionHash)("exerciseProjectKey",i.exerciseProjectKey)("isRepositoryView",i.isRepositoryView)("isExpanded",i.isExpanded)("pushNumber",i.pushNumber)("firstCommit",i.groupIndex===i.groupCount-1&&i.commits.length-1===0)("groupCommitCount",i.commits.length)("groupCommitIndex",0)("localVC",i.localVC)}}function It(e,s){if(e&1){let i=b();t(0,`
        `),r(1,"jhi-commits-info-row",0),f("toggleExpandEvent",function(){g(i);let n=p(2);return _(n.toggleExpand())}),a(),t(2,`
    `)}if(e&2){let i=s.$implicit,o=s.$index,n=p(2);m(),d("ngStyle",I(12,tt))("commit",i)("currentSubmissionHash",n.currentSubmissionHash)("previousSubmissionHash",n.previousSubmissionHash)("exerciseProjectKey",n.exerciseProjectKey)("isRepositoryView",n.isRepositoryView)("isExpanded",n.isExpanded)("pushNumber",n.pushNumber)("firstCommit",n.groupIndex===n.groupCount-1&&o===n.commits.length-1)("groupCommitCount",n.commits.length)("groupCommitIndex",o)("localVC",n.localVC)}}function Et(e,s){if(e&1&&(t(0,`
    `),y(1,It,3,13,null,null,S)),e&2){let i=p();m(),w(i.commits)}}var et=(()=>{class e{commits;currentSubmissionHash;previousSubmissionHash;exerciseProjectKey;isRepositoryView=!1;groupIndex;groupCount;pushNumber;localVC;set isGroupExpanded(i){this.isExpanded!==i&&(this.isExpanded=i)}isExpanded=!1;toggleExpand(){this.isExpanded=!this.isExpanded}getIsExpanded(){return this.isExpanded}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=h({type:e,selectors:[["jhi-commits-info-group"]],inputs:{commits:"commits",currentSubmissionHash:"currentSubmissionHash",previousSubmissionHash:"previousSubmissionHash",exerciseProjectKey:"exerciseProjectKey",isRepositoryView:"isRepositoryView",groupIndex:"groupIndex",groupCount:"groupCount",pushNumber:"pushNumber",localVC:"localVC",isGroupExpanded:"isGroupExpanded"},decls:2,vars:1,consts:[[3,"toggleExpandEvent","ngStyle","commit","currentSubmissionHash","previousSubmissionHash","exerciseProjectKey","isRepositoryView","isExpanded","pushNumber","firstCommit","groupCommitCount","groupCommitIndex","localVC"]],template:function(o,n){o&1&&u(0,bt,3,13)(1,Et,3,0),o&2&&l(n.isExpanded?1:0)},dependencies:[Z,V],encapsulation:2})}return e})();var vt=()=>({display:"contents"});function St(e,s){e&1&&(t(0,`
        `),c(1,"h3",11),t(2,`
    `))}function yt(e,s){e&1&&(t(0,`
        `),c(1,"h5",12),t(2,`
    `))}function wt(e,s){e&1&&(t(0,`
            `),c(1,"span",13),t(2,`
        `))}function Tt(e,s){e&1&&(t(0,`
            `),c(1,"span",14),t(2,`
        `))}function Rt(e,s){if(e&1&&(t(0,`
                `),c(1,"jhi-commits-info-group",15),t(2,`
            `)),e&2){let i=s.$implicit,o=s.$index,n=p();m(),d("ngStyle",I(11,vt))("commits",i.commits)("currentSubmissionHash",n.currentSubmissionHash)("previousSubmissionHash",n.previousSubmissionHash)("exerciseProjectKey",n.exerciseProjectKey)("isRepositoryView",n.isRepositoryView)("groupCount",n.groupedCommits.length)("groupIndex",o)("pushNumber",o+1)("isGroupExpanded",n.isGroupsExpanded)("localVC",n.localVC)}}var ne=(()=>{class e{programmingExerciseParticipationService=H(Q);profileService=H(B);commits;currentSubmissionHash;previousSubmissionHash;participationId;submissions;exerciseProjectKey;isRepositoryView=!1;commitHashURLTemplate;commitsInfoSubscription;profileInfoSubscription;isGroupsExpanded=!0;groupedCommits=[];localVC=!1;ngOnInit(){this.profileInfoSubscription=this.profileService.getProfileInfo().subscribe(i=>{this.commitHashURLTemplate=i.commitHashURLTemplate,this.localVC=i.activeProfiles.includes(Y)}),this.commits?(this.setCommitDetails(),this.groupCommits()):this.participationId&&(this.commitsInfoSubscription=this.programmingExerciseParticipationService.retrieveCommitsInfoForParticipation(this.participationId).subscribe(i=>{i&&(this.commits=i),this.setCommitDetails(),this.groupCommits()}))}ngOnDestroy(){this.commitsInfoSubscription?.unsubscribe(),this.profileInfoSubscription?.unsubscribe()}setCommitDetails(){if(this.commits&&this.submissions)for(let i of this.commits){let o=this.findSubmissionForCommit(i,this.submissions);i.commitUrl=q(this.commitHashURLTemplate,this.exerciseProjectKey,o?.participation,o)}}findSubmissionForCommit(i,o){return o?.find(n=>n.commitHash===i.hash)}groupCommits(){if(!this.commits)return;let i=[],o=[];this.commits=this.commits?.sort((n,C)=>v(C.timestamp).isAfter(v(n.timestamp))?-1:1);for(let n=0;n<this.commits.length;n++){let C=this.commits[n];if(o.push(C),C.result){let P=v(o[o.length-1].timestamp).format("YYYY-MM-DD");i.push({key:`${P}-${C.author}`,commits:[...o].reverse(),date:P??""}),o=[]}}o.length>0&&i.push({key:"no-result",commits:[...o].reverse(),date:v(o[o.length-1].timestamp).format("YYYY-MM-DD")??""}),this.groupedCommits=i.reverse()}toggleAllExpanded(){this.isGroupsExpanded=!this.isGroupsExpanded}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=h({type:e,selectors:[["jhi-commits-info"]],inputs:{commits:"commits",currentSubmissionHash:"currentSubmissionHash",previousSubmissionHash:"previousSubmissionHash",participationId:"participationId",submissions:"submissions",exerciseProjectKey:"exerciseProjectKey",isRepositoryView:"isRepositoryView"},decls:42,vars:2,consts:[[1,"d-flex","justify-content-between"],[1,"btn","btn-secondary","me-2",3,"click"],[2,"overflow-x","auto"],[1,"table","table-responsive"],["scope","col"],["scope","col","jhiTranslate","artemisApp.programmingExercise.commitInfo.commitHash"],["scope","col","jhiTranslate","artemisApp.programmingExercise.commitInfo.author"],["scope","col","jhiTranslate","artemisApp.programmingExercise.commitInfo.date"],["scope","col","jhiTranslate","artemisApp.programmingExercise.commitInfo.result"],["scope","col","jhiTranslate","artemisApp.programmingExercise.commitInfo.message"],["scope","col","jhiTranslate","artemisApp.programmingExercise.commitInfo.commits"],["jhiTranslate","artemisApp.programmingExercise.commitInfo.history"],["jhiTranslate","artemisApp.programmingExercise.commitInfo.title"],["jhiTranslate","artemisApp.programmingExercise.configureGrading.collapseAll"],["jhiTranslate","artemisApp.programmingExercise.configureGrading.expandAll"],[3,"ngStyle","commits","currentSubmissionHash","previousSubmissionHash","exerciseProjectKey","isRepositoryView","groupCount","groupIndex","pushNumber","isGroupExpanded","localVC"]],template:function(o,n){o&1&&(r(0,"div",0),t(1,`
    `),u(2,St,3,0)(3,yt,3,0),r(4,"button",1),f("click",function(){return n.toggleAllExpanded()}),t(5,`
        `),u(6,wt,3,0)(7,Tt,3,0),a(),t(8,`
`),a(),t(9,`

`),r(10,"div",2),t(11,`
    `),r(12,"table",3),t(13,`
        `),r(14,"thead"),t(15,`
            `),r(16,"tr"),t(17,`
                `),r(18,"th",4),t(19,"#"),a(),t(20,`
                `),c(21,"th",5),t(22,`
                `),c(23,"th",6),t(24,`
                `),c(25,"th",7),t(26,`
                `),c(27,"th",8),t(28,`
                `),c(29,"th",9),t(30,`
                `),c(31,"th",10),t(32,`
            `),a(),t(33,`
        `),a(),t(34,`
        `),r(35,"tbody"),t(36,`
            `),y(37,Rt,3,12,null,null,S),a(),t(39,`
    `),a(),t(40,`
`),a(),t(41,`
`)),o&2&&(m(2),l(n.isRepositoryView?2:3),m(4),l(n.isGroupsExpanded?6:7),m(31),w(n.groupedCommits))},dependencies:[j,et,V],encapsulation:2})}return e})();export{ne as a};
//# sourceMappingURL=chunk-ASDUDRMA.js.map
