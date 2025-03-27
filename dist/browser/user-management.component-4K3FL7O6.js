import{a as Ke}from"./chunk-ST7GO324.js";import{a as Qe}from"./chunk-LYZAUST5.js";import"./chunk-MYJYCKA4.js";import"./chunk-PH44QM5B.js";import"./chunk-WL6UHE7V.js";import"./chunk-BIK4CL5A.js";import{a as B}from"./chunk-W7RIOT23.js";import"./chunk-GERFCPB6.js";import{a as P,b as He,c as $e}from"./chunk-DLAFGQEJ.js";import{a as Xe}from"./chunk-ZMTDPOTL.js";import{a as qe,b as Ye}from"./chunk-VRAVBLUK.js";import{a as ze,b as Ge}from"./chunk-T624HJJL.js";import"./chunk-HQTS6JOY.js";import{a as Le}from"./chunk-HMZID6NQ.js";import{a as F,b as Be,d as Pe}from"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import{a as I}from"./chunk-UQ4R3Q4B.js";import{a as We}from"./chunk-2QXIMOEO.js";import"./chunk-AR57MWOI.js";import"./chunk-A5PTZAPN.js";import"./chunk-AU6UEH3U.js";import"./chunk-FGAONQTL.js";import"./chunk-HQ6UGNQX.js";import"./chunk-ZLJ76G5I.js";import"./chunk-MLVGKM2P.js";import"./chunk-CK7FH6VF.js";import"./chunk-PUNMJFMR.js";import"./chunk-R75LTV62.js";import{c as N}from"./chunk-5MVJAZRV.js";import"./chunk-XBLNBTXN.js";import"./chunk-G3JOQOSD.js";import"./chunk-G4I63THF.js";import"./chunk-PZ7IDTIM.js";import"./chunk-CT44YL7Q.js";import{c as De}from"./chunk-JNO6DNVW.js";import"./chunk-5YQ3ACZE.js";import"./chunk-EELXLOHY.js";import{D as be,M as ve,v as Ce}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as Se,L as ye,c as de,h as pe,i as ue,j as xe,l as ge,n as he,s as _e,v as fe}from"./chunk-WA5GEAJB.js";import{c as je}from"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import{a as Ie}from"./chunk-K3W6YFKH.js";import{a as Ne,c as j}from"./chunk-JXJXC4DZ.js";import{d as Re}from"./chunk-EDXSOKK5.js";import{b as Ve}from"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{Lc as Ue,Oc as ke,Qa as Te,Sa as Me,hb as Ae,nb as we,sc as Fe}from"./chunk-Z4VHWOB5.js";import{a as Ee}from"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as Oe}from"./chunk-U54OSGNH.js";import{f as se,h as me,i as ce}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{n as le}from"./chunk-IOA4DPXY.js";import{A as $,Db as l,Dc as _,Ea as h,Ed as oe,Ma as u,Mc as g,Na as x,Oc as c,Tb as k,Va as R,Yc as J,Zb as E,Zc as Z,_c as ee,ab as Y,cd as te,dd as e,ed as S,f as A,fd as ie,kc as m,ld as O,md as V,nd as D,oa as K,oc as Q,qd as ne,ra as q,rc as X,rd as y,sc as C,sd as re,td as ae,uc as w,vc as T,wc as M,xc as i,yc as n,yd as b,zc as s,zd as v}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var Je=(()=>{class o{adminUserService=h(I);alertService=h(j);deleteDialogService=h(ze);deletionCompleted=new R;users=Y(void 0);dialogErrorSource=new A;dialogError=this.dialogErrorSource.asObservable();faEraser=Fe;ButtonType=F;loadUserList(){this.adminUserService.queryNotEnrolledUsers().subscribe({next:t=>{let r=t.body;this.users.set(r),r.length===0?this.alertService.info("artemisApp.userManagement.notEnrolled.delete.cancel"):this.openDeleteDialog()},error:t=>{N(this.alertService,t)}})}openDeleteDialog(){let t=new R;t.subscribe(()=>this.onConfirm());let r={requireConfirmationOnlyForAdditionalChecks:!1,entityTitle:(this.users()??[]).length.toString(),deleteQuestion:"artemisApp.userManagement.notEnrolled.delete.question",translateValues:{users:this.users()?.join(", ")},deleteConfirmationText:"artemisApp.userManagement.batch.delete.typeNumberToConfirm",actionType:Le.Delete,buttonType:F.ERROR,delete:t,dialogError:this.dialogError};this.deleteDialogService.openDeleteDialog(r,!0)}onConfirm(){let t=this.users();t&&this.adminUserService.deleteUsers(t).subscribe({next:()=>{this.deletionCompleted.emit(),this.dialogErrorSource.next("")},error:r=>this.dialogErrorSource.next(r.message)})}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=k({type:o,selectors:[["jhi-delete-users-button"]],outputs:{deletionCompleted:"deletionCompleted"},decls:2,vars:5,consts:[["type","submit",3,"click","icon","btnType","title"]],template:function(r,a){r&1&&(i(0,"jhi-button",0),g("click",function(){return a.loadUserList()}),n(),e(1,`
`)),r&2&&(Q("me-1"),m("icon",a.faEraser)("btnType",a.ButtonType.ERROR)("title","artemisApp.userManagement.notEnrolled.delete.caption"))},dependencies:[Pe],encapsulation:2})}return o})();var nt=["filterModal"],rt=()=>["./new"],at=(o,p)=>({"btn-secondary":o,"btn-success":p}),U=o=>({num:o}),Ze=o=>["./",o],ot=o=>["./",o,"edit"],lt=(o,p,t)=>({page:o,totalItems:p,itemsPerPage:t});function st(o,p){o&1&&(e(0,`
                                    `),i(1,"div",48),e(2,`
                                        `),s(3,"div",49),e(4,`
                                    `),n(),e(5,`
                                `))}function mt(o,p){o&1&&(e(0,`
                                    `),s(1,"span",50),e(2,`
                                `))}function ct(o,p){if(o&1){let t=_();e(0,`
                                        `),i(1,"button",62),g("click",function(){u(t);let a=c().$implicit,d=c(3);return x(d.setActive(a,!1))}),n(),e(2,`
                                    `)}if(o&2){let t=c().$implicit,r=c(3);l(),m("disabled",!r.currentAccount||r.currentAccount.login===t.login)}}function dt(o,p){if(o&1){let t=_();e(0,`
                                        `),i(1,"button",63),g("click",function(){u(t);let a=c().$implicit,d=c(3);return x(d.setActive(a,!0))}),n(),e(2,`
                                    `)}}function pt(o,p){if(o&1){let t=_();e(0,`
                                            `),i(1,"button",64),g("click",function(){u(t);let a=c().$implicit,d=c(3);return x(d.ldapSync(a.id))}),n(),e(2,`
                                        `)}}function ut(o,p){if(o&1){let t=_();e(0,`
                            `),i(1,"tr"),e(2,`
                                `),i(3,"td"),e(4,`
                                    `),i(5,"input",51),g("change",function(){let a=u(t).$implicit,d=c(3);return x(d.toggleUser(a))}),n(),e(6,`
                                `),n(),e(7,`
                                `),i(8,"td"),e(9,`
                                    `),i(10,"a",52),e(11),n(),e(12,`
                                `),n(),e(13,`
                                `),i(14,"td"),e(15,`
                                    `),s(16,"jhi-profile-picture",53),e(17,`
                                `),n(),e(18,`
                                `),i(19,"td"),e(20,`
                                    `),s(21,"ngb-highlight",54),e(22,`
                                `),n(),e(23,`
                                `),i(24,"td"),e(25,`
                                    `),s(26,"ngb-highlight",54),e(27,`
                                `),n(),e(28,`
                                `),i(29,"td"),e(30,`
                                    `),s(31,"ngb-highlight",54),e(32,`
                                `),n(),e(33,`
                                `),i(34,"td"),e(35,`
                                    `),s(36,"ngb-highlight",54),e(37,`
                                `),n(),e(38,`
                                `),i(39,"td"),e(40,`
                                    `),E(41,ct,3,1)(42,dt,3,0),n(),e(43,`
                                `),i(44,"td"),e(45),n(),e(46,`
                                `),i(47,"td"),e(48),b(49,"artemisTranslate"),n(),e(50,`
                                `),i(51,"td"),e(52),b(53,"artemisDate"),n(),e(54,`
                                `),i(55,"td"),e(56),n(),e(57,`
                                `),i(58,"td"),e(59),b(60,"artemisDate"),n(),e(61,`
                                `),i(62,"td",55),e(63,`
                                    `),i(64,"div",56),e(65,`
                                        `),i(66,"a",57),e(67,`
                                            `),s(68,"fa-icon",5),e(69,`
                                            `),s(70,"span",58),e(71,`
                                        `),n(),e(72,`
                                        `),i(73,"a",59),e(74,`
                                            `),s(75,"fa-icon",5),e(76,`
                                            `),s(77,"span",60),e(78,`
                                        `),n(),e(79,`
                                        `),E(80,pt,3,0),i(81,"button",61),g("delete",function(){let a=u(t).$implicit,d=c(3);return x(d.deleteUser(a.login))}),e(82,`
                                            `),s(83,"fa-icon",5),e(84,`
                                        `),n(),e(85,`
                                    `),n(),e(86,`
                                `),n(),e(87,`
                            `),n(),e(88,`
                        `)}if(o&2){let t=p.$implicit,r=c(3);l(5),m("disabled",!r.currentAccount||r.currentAccount.login===t.login)("checked",r.selectedUsers.includes(t)),l(5),m("routerLink",y(36,Ze,t.login)),l(),S(t.id),l(5),m("authorId",t.id)("authorName",t.name)("imageUrl",t.imageUrl),l(5),m("result",t.login)("term",r.searchTerm),l(5),m("result",t.email)("term",r.searchTerm),l(5),m("result",t.visibleRegistrationNumber)("term",r.searchTerm),l(5),m("result",t.name)("term",r.searchTerm),l(5),C(t.activated?41:42),l(4),S(t.langKey),l(3),S(v(49,30,t.internal?"global.generic.yes":"global.generic.no")),l(4),S(v(53,32,t.createdDate)),l(4),S(t.lastModifiedBy),l(3),S(v(60,34,t.lastModifiedDate)),l(7),m("routerLink",y(38,Ze,t.login)),l(2),m("icon",r.faEye),l(5),m("routerLink",y(40,ot,t.login)),l(2),m("icon",r.faWrench),l(5),C(r.isLdapProfileActive&&!t.internal?80:-1),l(),m("entityTitle",t.login)("dialogError",r.dialogError)("disabled",!r.currentAccount||r.currentAccount.login===t.login),l(2),m("icon",r.faTimes)}}function xt(o,p){if(o&1&&(e(0,`
                    `),i(1,"tbody"),e(2,`
                        `),T(3,ut,89,42,null,null,X().trackIdentity,!0),n(),e(5,`
                `)),o&2){let t=c(2);l(3),M(t.users)}}function gt(o,p){if(o&1){let t=_();e(0,`
        `),i(1,"div",7),e(2,`
            `),i(3,"form",8),e(4,`
                `),i(5,"div",9),e(6,`
                    `),i(7,"div",10),e(8,`
                        `),i(9,"div",11),e(10,`
                            `),i(11,"div",12),e(12,`
                                `),s(13,"label",13),e(14,`
                                `),i(15,"input",14),g("blur",function(){u(t);let a=c();return x(a.loadAll())})("keydown",function(a){u(t);let d=c();return x(d.onKeydown(a))}),n(),e(16,`
                                `),i(17,"button",15),g("click",function(){u(t);let a=c();return x(a.loadAll())}),e(18,`
                                    `),s(19,"span",16),e(20,`
                                `),n(),e(21,`
                                `),E(22,st,6,0)(23,mt,3,0),n(),e(24,`
                        `),n(),e(25,`
                        `),i(26,"div",17),e(27,`
                            `),i(28,"div",18),e(29,`
                                `),i(30,"jhi-delete-users-button",19),g("deletionCompleted",function(){u(t);let a=c();return x(a.deleteNotEnrolledUsersComplete())}),n(),e(31,`
                                `),i(32,"button",20),g("delete",function(){u(t);let a=c();return x(a.deleteAllSelectedUsers())}),e(33,`
                                    `),s(34,"fa-icon",5),e(35,`
                                `),n(),e(36,`
                                `),i(37,"button",21),g("click",function(){u(t);let a=c(),d=te(30);return x(a.open(d))}),e(38,`
                                    `),s(39,"fa-icon",5),e(40,`
                                    `),s(41,"span",22),e(42,`
                                `),n(),e(43,`
                            `),n(),e(44,`
                        `),n(),e(45,`
                    `),n(),e(46,`
                `),n(),e(47,`
            `),n(),e(48,`
            `),i(49,"table",23),e(50,`
                `),i(51,"thead"),e(52,`
                    `),i(53,"tr",24),D("predicateChange",function(a){u(t);let d=c();return V(d.predicate,a)||(d.predicate=a),x(a)})("ascendingChange",function(a){u(t);let d=c();return V(d.ascending,a)||(d.ascending=a),x(a)}),g("sortChange",function(){u(t);let a=c();return x(a.transition())}),e(54,`
                        `),i(55,"th",25),e(56,`
                            `),s(57,"span",26),e(58,`
                            `),i(59,"input",27),g("change",function(){u(t);let a=c();return x(a.toggleAllUserSelection())}),n(),e(60,`
                        `),n(),e(61,`
                        `),i(62,"th",28),e(63,`
                            `),s(64,"span",29),e(65,`
                            `),s(66,"fa-icon",5),e(67,`
                        `),n(),e(68,`
                        `),i(69,"th"),e(70,`
                            `),s(71,"span",30),e(72,`
                        `),n(),e(73,`
                        `),i(74,"th",31),e(75,`
                            `),s(76,"span",32),e(77,`
                            `),s(78,"fa-icon",5),e(79,`
                        `),n(),e(80,`
                        `),i(81,"th",33),e(82,`
                            `),s(83,"span",34),e(84,`
                            `),s(85,"fa-icon",5),e(86,`
                        `),n(),e(87,`
                        `),i(88,"th",35),e(89,`
                            `),s(90,"span",36),e(91,`
                            `),s(92,"fa-icon",5),e(93,`
                        `),n(),e(94,`
                        `),i(95,"th",37),e(96,`
                            `),s(97,"span",38),e(98,`
                            `),s(99,"fa-icon",5),e(100,`
                        `),n(),e(101,`
                        `),s(102,"th"),e(103,`
                        `),i(104,"th",39),e(105,`
                            `),s(106,"span",40),e(107,`
                            `),s(108,"fa-icon",5),e(109,`
                        `),n(),e(110,`
                        `),i(111,"th",39),e(112,`
                            `),s(113,"span",41),e(114,`
                            `),s(115,"fa-icon",5),e(116,`
                        `),n(),e(117,`
                        `),i(118,"th",42),e(119,`
                            `),s(120,"span",43),e(121,`
                            `),s(122,"fa-icon",5),e(123,`
                        `),n(),e(124,`
                        `),i(125,"th",44),e(126,`
                            `),s(127,"span",45),e(128,`
                            `),s(129,"fa-icon",5),e(130,`
                        `),n(),e(131,`
                        `),i(132,"th",46),e(133,`
                            `),s(134,"span",47),e(135,`
                            `),s(136,"fa-icon",5),e(137,`
                        `),n(),e(138,`
                        `),s(139,"th"),e(140,`
                    `),n(),e(141,`
                `),n(),e(142,`
                `),E(143,xt,6,0),n(),e(144,`
        `),n(),e(145,`
    `)}if(o&2){let t=c();l(3),m("formGroup",t.userSearchForm),l(19),C(t.searchInvalid?22:-1),l(),C(t.loadingSearchResult?23:-1),l(9),m("buttonSize",t.medium)("entityTitle",t.selectedUsers.length.toString())("dialogError",t.dialogError)("disabled",!t.selectedUsers.length),l(2),m("icon",t.faTimes),l(3),m("ngClass",re(25,at,!t.filters.numberOfAppliedFilters,!!t.filters.numberOfAppliedFilters)),l(2),m("icon",t.faFilter),l(2),m("translateValues",y(28,U,t.filters.numberOfAppliedFilters)),l(12),O("predicate",t.predicate)("ascending",t.ascending),l(6),m("checked",t.selectedUsers.length===t.usersWithoutCurrentUser.length),l(7),m("icon",t.faSort),l(12),m("icon",t.faSort),l(7),m("icon",t.faSort),l(7),m("icon",t.faSort),l(7),m("icon",t.faSort),l(9),m("icon",t.faSort),l(7),m("icon",t.faSort),l(7),m("icon",t.faSort),l(7),m("icon",t.faSort),l(7),m("icon",t.faSort),l(7),C(t.users?143:-1)}}function ht(o,p){if(o&1){let t=_();e(0,`
        `),i(1,"div"),e(2,`
            `),i(3,"div",65),e(4,`
                `),s(5,"jhi-item-count",66),e(6,`
            `),n(),e(7,`
            `),i(8,"div",65),e(9,`
                `),i(10,"ngb-pagination",67),D("pageChange",function(a){u(t);let d=c();return V(d.page,a)||(d.page=a),x(a)}),g("pageChange",function(){u(t);let a=c();return x(a.transition())}),n(),e(11,`
            `),n(),e(12,`
        `),n(),e(13,`
    `)}if(o&2){let t=c();l(5),m("params",ae(7,lt,t.page,t.totalItems,t.itemsPerPage)),l(5),m("collectionSize",t.totalItems),O("page",t.page),m("pageSize",t.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}function _t(o,p){if(o&1){let t=_();e(0,`
                            `),i(1,"li",107),e(2,`
                                `),i(3,"label"),e(4,`
                                    `),i(5,"input",27),g("change",function(){let a=u(t).$implicit,d=c(2);return x(d.toggleAuthorityFilter(d.filters.authorityFilter,a))}),n(),e(6,`
                                    `),i(7,"span",108),e(8),b(9,"artemisTranslate"),n(),e(10,`
                                `),n(),e(11,`
                            `),n(),e(12,`
                        `)}if(o&2){let t=p.$implicit,r=c(2);l(5),m("checked",r.filters.authorityFilter.has(t)),l(3),S(v(9,2,"artemisApp.userManagement.filter.authority."+t.toString().toLowerCase()))}}function ft(o,p){if(o&1){let t=_();e(0,`
                            `),i(1,"li",11),e(2,`
                                `),i(3,"label"),e(4,`
                                    `),i(5,"input",109),g("change",function(){let a=u(t).$implicit,d=c(2);return x(d.toggleOriginFilter(a))}),n(),e(6,`
                                    `),i(7,"span",110),e(8),b(9,"artemisTranslate"),n(),e(10,`
                                `),n(),e(11,`
                            `),n(),e(12,`
                        `)}if(o&2){let t=p.$implicit,r=c(2);l(5),m("checked",r.filters.originFilter.has(t)),l(3),S(v(9,2,"artemisApp.userManagement.filter.origin."+t.toString().toLowerCase()))}}function St(o,p){if(o&1){let t=_();e(0,`
                            `),i(1,"li",11),e(2,`
                                `),i(3,"label"),e(4,`
                                    `),i(5,"input",109),g("change",function(){let a=u(t).$implicit,d=c(2);return x(d.toggleRegistrationNumberFilter(a))}),n(),e(6,`
                                    `),i(7,"span",110),e(8),b(9,"artemisTranslate"),n(),e(10,`
                                `),n(),e(11,`
                            `),n(),e(12,`
                        `)}if(o&2){let t=p.$implicit,r=c(2);l(5),m("checked",r.filters.registrationNumberFilter.has(t)),l(3),ie(`
                                        `,v(9,2,"artemisApp.userManagement.filter.registrationNumber."+t.toString().toLowerCase()),`
                                    `)}}function yt(o,p){if(o&1){let t=_();e(0,`
                            `),i(1,"li",11),e(2,`
                                `),i(3,"label"),e(4,`
                                    `),i(5,"input",109),g("change",function(){let a=u(t).$implicit,d=c(2);return x(d.toggleStatusFilter(a))}),n(),e(6,`
                                    `),i(7,"span",110),e(8),b(9,"artemisTranslate"),n(),e(10,`
                                `),n(),e(11,`
                            `),n(),e(12,`
                        `)}if(o&2){let t=p.$implicit,r=c(2);l(5),m("checked",r.filters.statusFilter.has(t)),l(3),S(v(9,2,"artemisApp.userManagement.filter.status."+t.toString().toLowerCase()))}}function Ct(o,p){if(o&1){let t=_();e(0,`
    `),i(1,"div",68),e(2,`
        `),s(3,"h5",69),e(4,`
        `),i(5,"button",70),g("click",function(){let a=u(t).$implicit;return x(a.dismiss())}),n(),e(6,`
    `),n(),e(7,`
    `),i(8,"div",71),e(9,`
        `),i(10,"div",9),e(11,`
            `),i(12,"div",72),e(13,`
                `),i(14,"div",73),e(15,`
                    `),s(16,"h5",74),e(17,`
                    `),s(18,"jhi-help-icon",75),e(19,`
                `),n(),e(20,`
            `),n(),e(21,`
            `),i(22,"div",76),e(23,`
                `),i(24,"div",77),e(25,`
                    `),i(26,"div",78),e(27,`
                        `),i(28,"div",10),e(29,`
                            `),i(30,"div",79),e(31,`
                                `),i(32,"input",80),g("click",function(){u(t);let a=c();return x(a.selectAllRoles())}),n(),e(33,`
                                `),s(34,"label",81),e(35,`
                            `),n(),e(36,`
                            `),i(37,"div",82),e(38,`
                                `),i(39,"input",83),g("click",function(){u(t);let a=c();return x(a.selectEmptyRoles())}),n(),e(40,`
                                `),s(41,"label",84),e(42,`
                                `),s(43,"jhi-help-icon",85),e(44,`
                            `),n(),e(45,`
                            `),i(46,"div",79),e(47,`
                                `),i(48,"input",86),g("click",function(){u(t);let a=c();return x(a.deselectAllRoles())}),n(),e(49,`
                                `),s(50,"label",87),e(51,`
                            `),n(),e(52,`
                        `),n(),e(53,`
                    `),n(),e(54,`
                `),n(),e(55,`
            `),n(),e(56,`
            `),i(57,"div",76),e(58,`
                `),i(59,"div",88),e(60,`
                    `),i(61,"ul",89),e(62,`
                        `),T(63,_t,13,4,null,null,w),n(),e(65,`
                `),n(),e(66,`
            `),n(),e(67,`
            `),i(68,"div",90),e(69,`
                `),i(70,"div",91),e(71,`
                    `),s(72,"h5",92),e(73,`
                    `),s(74,"jhi-help-icon",93),e(75,`
                `),n(),e(76,`
            `),n(),e(77,`
            `),i(78,"div",76),e(79,`
                `),i(80,"div",88),e(81,`
                    `),i(82,"ul",89),e(83,`
                        `),T(84,ft,13,4,null,null,w),i(86,"li",94),e(87,`
                            `),i(88,"input",95),g("click",function(){u(t);let a=c();return x(a.toggleOriginFilter())}),n(),e(89,`
                            `),s(90,"label",96),e(91,`
                        `),n(),e(92,`
                    `),n(),e(93,`
                `),n(),e(94,`
            `),n(),e(95,`
            `),i(96,"div",90),e(97,`
                `),i(98,"div",91),e(99,`
                    `),s(100,"h5",97),e(101,`
                    `),s(102,"jhi-help-icon",98),e(103,`
                `),n(),e(104,`
            `),n(),e(105,`
            `),i(106,"div",76),e(107,`
                `),i(108,"div",88),e(109,`
                    `),i(110,"ul",89),e(111,`
                        `),T(112,St,13,4,null,null,w),i(114,"li",94),e(115,`
                            `),i(116,"input",99),g("click",function(){u(t);let a=c();return x(a.toggleRegistrationNumberFilter())}),n(),e(117,`
                            `),s(118,"label",100),e(119,`
                        `),n(),e(120,`
                    `),n(),e(121,`
                `),n(),e(122,`
            `),n(),e(123,`
            `),i(124,"div",72),e(125,`
                `),i(126,"div",91),e(127,`
                    `),s(128,"h5",101),e(129,`
                    `),s(130,"jhi-help-icon",102),e(131,`
                `),n(),e(132,`
            `),n(),e(133,`
            `),i(134,"div",76),e(135,`
                `),i(136,"div",88),e(137,`
                    `),i(138,"ul",89),e(139,`
                        `),T(140,yt,13,4,null,null,w),i(142,"li",94),e(143,`
                            `),i(144,"input",95),g("click",function(){u(t);let a=c();return x(a.toggleStatusFilter())}),n(),e(145,`
                            `),s(146,"label",96),e(147,`
                        `),n(),e(148,`
                    `),n(),e(149,`
                `),n(),e(150,`
            `),n(),e(151,`
        `),n(),e(152,`
    `),n(),e(153,`
    `),i(154,"div",103),e(155,`
        `),i(156,"button",104),g("click",function(){let a=u(t).$implicit;return x(a.close())}),n(),e(157,`
        `),i(158,"button",105),g("click",function(){u(t);let a=c();return x(a.applyFilter())}),e(159,`
            `),s(160,"span",106),e(161,`
        `),n(),e(162,`
    `),n(),e(163,`
`)}if(o&2){let t=c();l(16),m("translateValues",y(10,U,t.filters.authorityFilter.size)),l(16),m("checked",t.filters.authorityFilter.size===t.authorityFilters.length&&!t.filters.noAuthority),l(7),m("checked",t.filters.authorityFilter.size===0&&t.filters.noAuthority),l(9),m("checked",t.filters.authorityFilter.size===0&&!t.filters.noAuthority),l(15),M(t.authorityFilters),l(9),m("translateValues",y(12,U,t.filters.originFilter.size)),l(12),M(t.originFilters),l(4),m("checked",t.filters.originFilter.size===0),l(12),m("translateValues",y(14,U,t.filters.registrationNumberFilter.size)),l(12),M(t.registrationNumberFilters),l(4),m("checked",t.filters.registrationNumberFilter.size===0),l(12),m("translateValues",y(16,U,t.filters.statusFilter.size)),l(12),M(t.statusFilters),l(4),m("checked",t.filters.statusFilter.size===0)}}var L=class{authorityFilter=new Set;originFilter=new Set;statusFilter=new Set;registrationNumberFilter=new Set;noAuthority=!1;adjustOptions(p){return this.noAuthority?p=p.append("authorities","NO_AUTHORITY"):p=p.append("authorities",[...this.authorityFilter].join(",")),p=p.append("origins",[...this.originFilter].join(",")),p=p.append("registrationNumbers",[...this.registrationNumberFilter].join(",")),p=p.append("status",[...this.statusFilter].join(",")),p}get numberOfAppliedFilters(){return this.authorityFilter.size+this.originFilter.size+this.registrationNumberFilter.size+this.statusFilter.size+(this.noAuthority?1:0)}},z=function(o){return o.ADMIN="ADMIN",o.INSTRUCTOR="INSTRUCTOR",o.EDITOR="EDITOR",o.TA="TA",o.USER="USER",o}(z||{}),G=function(o){return o.INTERNAL="INTERNAL",o.EXTERNAL="EXTERNAL",o}(G||{}),W=function(o){return o.WITH_REG_NO="WITH_REG_NO",o.WITHOUT_REG_NO="WITHOUT_REG_NO",o}(W||{}),H=function(o){return o.ACTIVATED="ACTIVATED",o.DEACTIVATED="DEACTIVATED",o}(H||{}),f=function(o){return o.AUTHORITY="artemis.userManagement.authority",o.NO_AUTHORITY="artemis.userManagement.noAuthority",o.ORIGIN="artemis.userManagement.origin",o.STATUS="artemis.userManagement.status",o.REGISTRATION_NUMBER="artemis.userManagement.registrationNumber",o}(f||{}),xi=(()=>{class o{adminUserService=h(I);alertService=h(j);accountService=h(Ve);activatedRoute=h(se);router=h(me);eventManager=h(Ne);localStorage=h(Ee);modalService=h(Ce);profileService=h(je);filterModal;search=new A;loadingSearchResult=!1;currentAccount;users;selectedUsers=[];userListSubscription;totalItems=0;itemsPerPage=50;page;predicate;ascending;searchTermString="";searchInvalid=!1;isLdapProfileActive;filters=new L;faFilter=Me;authorityKey=f.AUTHORITY;statusKey=f.STATUS;originKey=f.ORIGIN;registrationKey=f.REGISTRATION_NUMBER;dialogErrorSource=new A;dialogError=this.dialogErrorSource.asObservable();userSearchForm;faSort=Te;faPlus=Ue;faTimes=ke;faEye=we;faWrench=Ae;medium=Be.MEDIUM;ButtonType=F;ngOnInit(){this.initFilters(),this.search.pipe(q(()=>this.loadingSearchResult=!0),K(()=>this.adminUserService.query({page:this.page-1,pageSize:this.itemsPerPage,searchTerm:this.searchTermString,sortingOrder:this.ascending?B.ASCENDING:B.DESCENDING,sortedColumn:this.predicate,filters:this.filters},this.filters))).subscribe({next:t=>{this.loadingSearchResult=!1,this.onSuccess(t.body||[],t.headers)},error:t=>{this.loadingSearchResult=!1,N(this.alertService,t)}}),this.userSearchForm=new xe({searchControl:new ge("",{updateOn:"change"})}),this.accountService.identity().then(t=>{this.currentAccount=t,this.userListSubscription=this.eventManager.subscribe("userListModification",()=>this.loadAll()),this.handleNavigation()}),this.profileService.getProfileInfo().subscribe(t=>{this.isLdapProfileActive=t.activeProfiles&&(t.activeProfiles?.includes("ldap")||t.activeProfiles?.includes("ldap-only"))})}ngOnDestroy(){this.userListSubscription&&this.eventManager.destroy(this.userListSubscription),this.dialogErrorSource.unsubscribe()}initFilters(){this.filters.authorityFilter=this.initFilter(f.AUTHORITY,z),this.filters.originFilter=this.initFilter(f.ORIGIN,G),this.filters.registrationNumberFilter=this.initFilter(f.REGISTRATION_NUMBER,W),this.filters.statusFilter=this.initFilter(f.STATUS,H),this.filters.noAuthority=!!this.localStorage.retrieve(f.NO_AUTHORITY)}initFilter(t,r){let a=this.localStorage.retrieve(t),d=a?a.split(",").map(et=>r[et]).filter(Boolean):new Set;return new Set(d)}toggleFilter(t,r,a){t.has(r)?t.delete(r):t.add(r),a&&this.localStorage.store(a,Array.from(t).join(","))}toggleAuthorityFilter(t,r){this.filters.noAuthority=!1,this.updateNoAuthority(!1),this.toggleFilter(t,r,this.authorityKey)}toggleOriginFilter(t){let r=this.filters.originFilter;this.deselectFilter(r,this.originKey),t&&this.toggleFilter(r,t,this.originKey)}toggleStatusFilter(t){let r=this.filters.statusFilter;this.deselectFilter(r,this.statusKey),t&&this.toggleFilter(r,t,this.statusKey)}toggleRegistrationNumberFilter(t){let r=this.filters.registrationNumberFilter;this.deselectFilter(r,this.registrationKey),t&&this.toggleFilter(r,t,this.registrationKey)}deselectFilter(t,r){t.size&&this.toggleFilter(t,Array.from(t).pop(),r)}get authorityFilters(){return Object.values(z)}get originFilters(){return Object.values(G)}get statusFilters(){return Object.values(H)}get registrationNumberFilters(){return Object.values(W)}updateNoAuthority(t){this.localStorage.store(f.NO_AUTHORITY,t),this.filters.noAuthority=t}deselectAllRoles(){this.filters.authorityFilter.clear(),this.localStorage.clear(f.AUTHORITY),this.updateNoAuthority(!1)}selectEmptyRoles(){this.filters.authorityFilter.clear(),this.updateNoAuthority(!0)}selectAllRoles(){this.filters.authorityFilter=new Set(this.authorityFilters),this.updateNoAuthority(!1)}open(t){this.modalService.open(t)}applyFilter(){this.loadAll(),this.modalService.dismissAll()}setActive(t,r){t.activated=r,this.adminUserService.update(t).subscribe(()=>{this.loadAll()})}toggleAllUserSelection(){let t=this.usersWithoutCurrentUser;this.selectedUsers.length===t.length?this.selectedUsers=[]:this.selectedUsers=[...t]}get usersWithoutCurrentUser(){return this.users.filter(t=>this.currentAccount&&this.currentAccount.login!==t.login)}toggleUser(t){let r=this.selectedUsers.indexOf(t);r>-1?this.selectedUsers.splice(r,1):this.selectedUsers.push(t)}deleteAllSelectedUsers(){let t=this.selectedUsers.map(r=>r.login);this.adminUserService.deleteUsers(t).subscribe({next:()=>{this.eventManager.broadcast({name:"userListModification",content:"Deleted users"}),this.selectedUsers=[],this.dialogErrorSource.next("")},error:r=>this.dialogErrorSource.next(r.message)})}deleteNotEnrolledUsersComplete(){this.eventManager.broadcast({name:"userListModification",content:"Deleted users"})}loadAll(){this.searchTerm=this.searchControl.value,this.searchTerm.length>=3||this.searchTerm.length===0?(this.searchInvalid=!1,this.search.next()):this.searchInvalid=!0}trackIdentity(t,r){return r.id??-1}transition(){this.router.navigate(["/admin/user-management"],{relativeTo:this.activatedRoute.parent,queryParams:{page:this.page,sort:`${this.predicate},${this.ascending?P:He}`}})}handleNavigation(){$({data:this.activatedRoute.data,params:this.activatedRoute.queryParamMap}).subscribe(({data:t,params:r})=>{let a=r.get("page");this.page=a!=null?+a:1;let d=(r.get($e)??t.defaultSort).split(",");this.predicate=d[0],this.ascending=d[1]===P,this.loadAll()})}deleteUser(t){this.adminUserService.deleteUser(t).subscribe({next:()=>{this.eventManager.broadcast({name:"userListModification",content:"Deleted a user"}),this.dialogErrorSource.next("")},error:r=>this.dialogErrorSource.next(r.message)})}ldapSync(t){this.adminUserService.syncLdap(t).subscribe(()=>{this.loadAll()})}onSuccess(t,r){this.totalItems=Number(r.get("X-Total-Count")),this.users=t}set searchTerm(t){this.searchTermString=t}get searchTerm(){return this.searchTermString}get searchControl(){return this.userSearchForm.get("searchControl")}onKeydown(t){t.key==="Enter"&&(t.preventDefault(),this.loadAll())}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=k({type:o,selectors:[["jhi-user-management"]],viewQuery:function(r,a){if(r&1&&J(nt,5),r&2){let d;Z(d=ee())&&(a.filterModal=d.first)}},decls:32,vars:7,consts:[["content",""],[1,"d-flex","justify-content-between"],["id","user-management-page-heading","jhiTranslate","artemisApp.userManagement.home.title"],[1,"me-1",3,"adminUserMode","buttonType"],[1,"btn","btn-primary","jh-create-entity",3,"routerLink"],[3,"icon"],["jhiTranslate","artemisApp.userManagement.home.createLabel"],[1,"table-responsive"],[3,"formGroup"],[1,"container-fluid"],[1,"row"],[1,"col"],[1,"form-group","form-inline"],["for","field_searchTerm","jhiTranslate","artemisApp.userManagement.searchForUser",1,"form-control-label"],["type","text","name","searchTerm","id","field_searchTerm","formControlName","searchControl",1,"form-control","ms-3",3,"blur","keydown"],[1,"btn","btn-primary","ms-3",3,"click"],["jhiTranslate","artemisApp.userManagement.search"],[1,"col","p-0"],[1,"d-flex","justify-content-center","justify-content-md-end"],[3,"deletionCompleted"],["jhiDeleteButton","","deleteQuestion","artemisApp.userManagement.batch.delete.question","deleteConfirmationText","artemisApp.userManagement.batch.delete.typeNumberToConfirm",3,"delete","buttonSize","entityTitle","dialogError","disabled"],[1,"btn",3,"click","ngClass"],["jhiTranslate","artemisApp.userManagement.filter.modal.open",1,"d-s-none","d-md-inline",3,"translateValues"],["aria-describedby","user-management-page-heading",1,"table","table-striped","user-management-table"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],[1,"user-management-select-all"],["jhiTranslate","artemisApp.userManagement.batch.all",1,"pe-1"],["type","checkbox",1,"form-check-input",3,"change","checked"],["jhiSortBy","id"],["jhiTranslate","global.field.id"],["jhiTranslate","artemisApp.userManagement.profilePicture"],["jhiSortBy","login"],["jhiTranslate","artemisApp.userManagement.login"],["jhiSortBy","email"],["jhiTranslate","artemisApp.userManagement.email"],["jhiSortBy","registrationNumber"],["jhiTranslate","artemisApp.userManagement.registrationNumber"],["jhiSortBy","lastName"],["jhiTranslate","artemisApp.userManagement.name"],["jhiSortBy","langKey"],["jhiTranslate","artemisApp.userManagement.langKey"],["jhiTranslate","artemisApp.userManagement.internal"],["jhiSortBy","createdDate"],["jhiTranslate","artemisApp.userManagement.createdDate"],["jhiSortBy","lastModifiedBy"],["jhiTranslate","artemisApp.userManagement.lastModifiedBy"],["jhiSortBy","lastModifiedDate"],["jhiTranslate","artemisApp.userManagement.lastModifiedDate"],[1,"alert","alert-danger","ms-3","mb-0"],["jhiTranslate","artemisApp.userManagement.searchError"],["jhiTranslate","artemisApp.userManagement.loading",1,"ms-3"],["type","checkbox",1,"form-check-input",3,"change","disabled","checked"],[3,"routerLink"],["imageSizeInRem","1.5","fontSizeInRem","0.6","imageId","user-profile-picture","defaultPictureId","user-default-profile-picture",3,"authorId","authorName","imageUrl"],[3,"result","term"],[1,"text-end"],[1,"btn-group","flex-btn-group-container"],[1,"btn","btn-info","btn-sm",3,"routerLink"],["jhiTranslate","entity.action.view",1,"d-none","d-md-inline"],["queryParamsHandling","merge",1,"btn","btn-warning","btn-sm",3,"routerLink"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["jhiDeleteButton","","deleteQuestion","artemisApp.userManagement.delete.question",3,"delete","entityTitle","dialogError","disabled"],["jhiTranslate","artemisApp.userManagement.activated",1,"btn","btn-success","btn-sm",3,"click","disabled"],["jhiTranslate","artemisApp.userManagement.deactivated",1,"btn","btn-danger","btn-sm",3,"click"],["jhiTranslate","entity.action.ldap",1,"btn","btn-success","btn-sm",3,"click"],[1,"row","justify-content-center"],[3,"params"],[3,"pageChange","collectionSize","page","pageSize","maxSize","rotate","boundaryLinks"],[1,"modal-header"],["jhiTranslate","artemisApp.userManagement.filter.modal.title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"row","user-management-border-bottom"],[1,"col","d-flex","flex-row","pb-1"],["jhiTranslate","artemisApp.userManagement.filter.authority.title",1,"my-0",3,"translateValues"],["text","artemisApp.userManagement.filter.authority.tooltip",1,"ps-1"],[1,"row","user-management-background-accent"],[1,"col","pt-2","user-management-line-bottom"],[1,"container-fluid","mb-2","radio-selection-width","px-0"],[1,"form-check","col-3","d-flex","justify-content-center"],["id","authorityFilter","type","radio",1,"form-check-input",3,"click","checked"],["for","authorityFilter","jhiTranslate","artemisApp.userManagement.filter.all",1,"form-check-label","ps-1"],[1,"form-check","col-6","d-flex","justify-content-center"],["id","emptyRoles","type","radio",1,"form-check-input",3,"click","checked"],["for","emptyRoles","jhiTranslate","artemisApp.userManagement.filter.authority.without",1,"form-check-label","ps-1"],["text","artemisApp.userManagement.filter.authority.withoutTooltip",1,"ps-1"],["id","deselectAll","type","radio",1,"form-check-input",3,"click","checked"],["for","deselectAll","jhiTranslate","artemisApp.userManagement.filter.none",1,"form-check-label","ps-1"],[1,"col","container","px-3"],[1,"text-nowrap","list-unstyled","row","my-0","py-2"],[1,"row","row","user-management-border-bottom"],[1,"col","d-flex","flex-row","pt-3","pb-1"],["jhiTranslate","artemisApp.userManagement.filter.origin.title",1,"my-0",3,"translateValues"],["text","artemisApp.userManagement.filter.origin.tooltip",1,"ps-1"],[1,"col-3"],["type","radio",1,"form-check-input",3,"click","checked"],["jhiTranslate","artemisApp.userManagement.filter.none",1,"form-check-label","ps-1"],["jhiTranslate","artemisApp.userManagement.filter.registrationNumber.title",1,"my-0",3,"translateValues"],["text","artemisApp.userManagement.filter.registrationNumber.tooltip",1,"ps-1"],["id","toggleRegistrationNumberFilter","type","radio",1,"form-check-input",3,"click","checked"],["for","toggleRegistrationNumberFilter","jhiTranslate","artemisApp.userManagement.filter.none",1,"form-check-label","ps-1"],["jhiTranslate","artemisApp.userManagement.filter.status.title",1,"my-0",3,"translateValues"],["text","artemisApp.userManagement.filter.status.tooltip",1,"ps-1"],[1,"modal-footer"],["type","button","jhiTranslate","artemisApp.userManagement.filter.modal.close",1,"btn","btn-secondary",3,"click"],[1,"btn","btn-primary",3,"click"],["jhiTranslate","artemisApp.userManagement.filter.apply"],[1,"col-4"],[1,"ms-2"],["type","radio",1,"form-check-input",3,"change","checked"],[1,"ps-1"]],template:function(r,a){r&1&&(i(0,"div"),e(1,`
    `),i(2,"div"),e(3,`
        `),i(4,"div",1),e(5,`
            `),i(6,"h2"),e(7,`
                `),s(8,"span",2),e(9,`
            `),n(),e(10,`
            `),i(11,"div"),e(12,`
                `),s(13,"jhi-user-import-button",3),e(14,`
                `),i(15,"a",4),e(16,`
                    `),s(17,"fa-icon",5),e(18,`
                    `),s(19,"span",6),e(20,`
                `),n(),e(21,`
            `),n(),e(22,`
        `),n(),e(23,`
    `),n(),e(24,`
    `),E(25,gt,146,30)(26,ht,14,11),n(),e(27,`
`),e(28,`
`),E(29,Ct,164,18,"ng-template",null,0,oe),e(31,`
`)),r&2&&(l(13),m("adminUserMode",!0)("buttonType",a.ButtonType.PRIMARY_OUTLINE),l(2),m("routerLink",ne(6,rt)),l(2),m("icon",a.faPlus),l(8),C(a.users?25:-1),l(),C(a.users?26:-1))},dependencies:[Oe,Ke,ce,Re,Se,he,de,pe,ue,ye,_e,fe,Je,Ge,le,qe,Ye,Qe,ve,Xe,be,We,De,Ie],styles:[".course-modal-section[_ngcontent-%COMP%]{max-height:100px;list-style-type:none;overflow-y:scroll}.course-modal-section[_ngcontent-%COMP%]   .course-modal-section-title[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;overflow:hidden}.user-management-select-all[_ngcontent-%COMP%]{min-width:70px}.radio-selection-width[_ngcontent-%COMP%]{width:80%}.user-management-background-accent[_ngcontent-%COMP%]{background:var(--user-management-background-color)}.user-management-border-bottom[_ngcontent-%COMP%]{border-bottom:2px solid var(--overview-blue-border-color)}.user-management-line-bottom[_ngcontent-%COMP%]{border-bottom:1px solid var(--user-management-border-color)}"]})}return o})();export{z as AuthorityFilter,G as OriginFilter,W as RegistrationNumberFilter,H as StatusFilter,L as UserFilter,xi as UserManagementComponent,f as UserStorageKey};
//# sourceMappingURL=user-management.component-4K3FL7O6.js.map
