import{b as A}from"./chunk-T624HJJL.js";import"./chunk-HQTS6JOY.js";import"./chunk-HMZID6NQ.js";import"./chunk-O26CMRR4.js";import"./chunk-MP6UGYTC.js";import{a as I}from"./chunk-ZK23IHB5.js";import"./chunk-XBLNBTXN.js";import"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import"./chunk-WA5GEAJB.js";import"./chunk-5GXY5RYT.js";import"./chunk-K3W6YFKH.js";import"./chunk-JXJXC4DZ.js";import{d as M}from"./chunk-EDXSOKK5.js";import"./chunk-DID2YGL7.js";import{Lc as _,Oc as j,hb as T,nb as O}from"./chunk-Z4VHWOB5.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as C}from"./chunk-U54OSGNH.js";import{i as y}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as r,Dc as b,Ea as g,Ma as u,Mc as v,Na as f,Oc as p,Tb as h,dd as e,ed as d,f as x,kc as s,qd as z,rd as c,vc as E,wc as S,xc as t,yc as n,zc as o}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var L=()=>["./new"],F=l=>["./",l],P=l=>["./",l,"edit"];function D(l,k){if(l&1){let i=b();e(0,`
                    `),t(1,"tr"),e(2,`
                        `),t(3,"td"),e(4,`
                            `),t(5,"span"),e(6),n(),e(7,`
                        `),n(),e(8,`
                        `),t(9,"td"),e(10,`
                            `),t(11,"span"),e(12),n(),e(13,`
                        `),n(),e(14,`
                        `),t(15,"td"),e(16,`
                            `),t(17,"span"),e(18),n(),e(19,`
                        `),n(),e(20,`
                        `),t(21,"td"),e(22),n(),e(23,`
                        `),t(24,"td"),e(25),n(),e(26,`
                        `),t(27,"td"),e(28),n(),e(29,`
                        `),t(30,"td"),e(31),n(),e(32,`
                        `),t(33,"td"),e(34),n(),e(35,`
                        `),t(36,"td",14),e(37,`
                            `),t(38,"div",15),e(39,`
                                `),t(40,"button",16),e(41,`
                                    `),o(42,"fa-icon",2),e(43,`
                                    `),o(44,"span",17),e(45,`
                                `),n(),e(46,`
                                `),t(47,"button",18),e(48,`
                                    `),o(49,"fa-icon",2),e(50,`
                                    `),o(51,"span",19),e(52,`
                                `),n(),e(53,`
                                `),t(54,"button",20),v("delete",function(){let m=u(i).$implicit,w=p();return f(w.deleteOrganization(m.id))}),e(55,`
                                    `),o(56,"fa-icon",2),e(57,`
                                `),n(),e(58,`
                            `),n(),e(59,`
                        `),n(),e(60,`
                    `),n(),e(61,`
                `)}if(l&2){let i=k.$implicit,a=p();r(6),d(i.id),r(6),d(i.name),r(6),d(i.shortName),r(4),d(i.url),r(3),d(i.description),r(3),d(i.numberOfUsers),r(3),d(i.numberOfCourses),r(3),d(i.emailPattern),r(6),s("routerLink",c(15,F,i.id)),r(2),s("icon",a.faEye),r(5),s("routerLink",c(17,P,i.id)),r(2),s("icon",a.faWrench),r(5),s("entityTitle",i.name)("dialogError",a.dialogError$),r(2),s("icon",a.faTimes)}}var G=(()=>{class l{organizationService=g(I);organizations;dialogErrorSource=new x;dialogError$=this.dialogErrorSource.asObservable();faPlus=_;faTimes=j;faEye=O;faWrench=T;ngOnInit(){this.organizationService.getOrganizations().subscribe(i=>{this.organizations=i,this.organizationService.getNumberOfUsersAndCoursesOfOrganizations().subscribe(a=>{for(let m=0;m<a.length;m++)this.organizations[m].numberOfUsers=a[m].numberOfUsers,this.organizations[m].numberOfCourses=a[m].numberOfCourses})})}deleteOrganization(i){this.organizationService.deleteOrganization(i).subscribe({next:()=>{this.dialogErrorSource.next(""),this.organizations=this.organizations.filter(a=>a.id!==i)},error:a=>{this.dialogErrorSource.next("An error occurred while removing the organization: "+a.message)}})}trackIdentity(i,a){return a.id??-1}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=h({type:l,selectors:[["jhi-organization-management"]],decls:56,vars:3,consts:[["id","organization-management-page-heading","jhiTranslate","artemisApp.organizationManagement.title"],[1,"btn","btn-primary","float-end","jh-create-entity",3,"routerLink"],[3,"icon"],["jhiTranslate","artemisApp.organizationManagement.addLabel"],[1,"table-responsive"],[1,"table","table-striped"],["jhiTranslate","global.field.id"],["jhiTranslate","artemisApp.organizationManagement.name"],["jhiTranslate","artemisApp.organizationManagement.shortName"],["jhiTranslate","artemisApp.organizationManagement.url"],["jhiTranslate","artemisApp.organizationManagement.description"],["jhiTranslate","artemisApp.organizationManagement.users"],["jhiTranslate","artemisApp.organizationManagement.courses"],["jhiTranslate","artemisApp.organizationManagement.emailPattern"],[1,"text-end"],[1,"btn-group","flex-btn-group-container"],["type","submit",1,"btn","btn-info","btn-sm",3,"routerLink"],["jhiTranslate","entity.action.view",1,"d-none","d-md-inline"],["type","submit","queryParamsHandling","merge",1,"btn","btn-warning","btn-sm",3,"routerLink"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["jhiDeleteButton","","deleteQuestion","artemisApp.organizationManagement.delete.question",3,"delete","entityTitle","dialogError"]],template:function(a,m){a&1&&(t(0,"div"),e(1,`
    `),t(2,"h2"),e(3,`
        `),o(4,"span",0),e(5,`
        `),t(6,"button",1),e(7,`
            `),o(8,"fa-icon",2),e(9," "),o(10,"span",3),e(11,`
        `),n(),e(12,`
    `),n(),e(13,`
    `),t(14,"div",4),e(15,`
        `),t(16,"table",5),e(17,`
            `),t(18,"thead"),e(19,`
                `),t(20,"tr"),e(21,`
                    `),t(22,"th"),o(23,"span",6),n(),e(24,`
                    `),t(25,"th"),o(26,"span",7),n(),e(27,`
                    `),t(28,"th"),o(29,"span",8),n(),e(30,`
                    `),t(31,"th"),o(32,"span",9),n(),e(33,`
                    `),t(34,"th"),o(35,"span",10),n(),e(36,`
                    `),t(37,"th"),o(38,"span",11),n(),e(39,`
                    `),t(40,"th"),o(41,"span",12),n(),e(42,`
                    `),t(43,"th"),o(44,"span",13),n(),e(45,`
                `),n(),e(46,`
            `),n(),e(47,`
            `),t(48,"tbody"),e(49,`
                `),E(50,D,62,19,null,null,m.trackIdentity,!0),n(),e(52,`
        `),n(),e(53,`
    `),n(),e(54,`
`),n(),e(55,`
`)),a&2&&(r(6),s("routerLink",z(2,L)),r(2),s("icon",m.faPlus),r(42),S(m.organizations))},dependencies:[C,y,M,A],encapsulation:2})}return l})();export{G as OrganizationManagementComponent};
//# sourceMappingURL=organization-management.component-T6NXXM77.js.map
