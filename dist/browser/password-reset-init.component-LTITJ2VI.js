import{c as O}from"./chunk-5MVJAZRV.js";import{u as z,v as H}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{K as Q,c as A,h as D,m as N}from"./chunk-WA5GEAJB.js";import{c as B}from"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import{a as Y}from"./chunk-K3W6YFKH.js";import{c as K}from"./chunk-JXJXC4DZ.js";import"./chunk-DID2YGL7.js";import"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as R}from"./chunk-U54OSGNH.js";import"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import{c as W}from"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{O as F}from"./chunk-IOA4DPXY.js";import{Db as o,Dc as T,Ea as l,Ma as g,Mc as f,Na as S,Oc as u,Rc as v,Tb as w,Yc as b,Zb as P,Zc as M,_c as U,dd as e,fd as C,gd as y,kc as c,ld as I,md as V,nd as j,rd as x,sc as p,xb as h,xc as i,ya as k,yc as a,yd as q,zc as d,zd as L}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var J=(()=>{class t{http=l(F);save(n){return this.http.post("api/core/public/account/reset-password/init",n)}static \u0275fac=function(s){return new(s||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var X=t=>({provider:t});function te(t,_){if(t&1&&(e(0,`
            `),i(1,"span"),e(2,`
                `),d(3,"span",7),e(4,`
                `),d(5,"a",8),e(6,`
            `),a(),e(7,`
        `)),t&2){let n=u();o(5),v("href",n.externalPasswordResetLink,h)}}function ne(t,_){if(t&1&&(e(0,`
            `),i(1,"span",9),e(2),a(),e(3,`
        `)),t&2){let n=u();o(),c("translateValues",x(3,X,n.externalCredentialProvider)),o(),y("The password reset links for ",n.externalCredentialProvider,` are not provided. Please notify the administrator. If you know how to reset your password for
                `,n.externalCredentialProvider," you can do it yourself.")}}var Z=(()=>{class t{activeModal=l(z);externalCredentialProvider;externalPasswordResetLink;clear(){this.activeModal.dismiss()}static \u0275fac=function(s){return new(s||t)};static \u0275cmp=w({type:t,selectors:[["jhi-external-user-password-reset-modal"]],decls:21,vars:6,consts:[[1,"modal-header"],[1,"modal-title"],["jhiTranslate","reset.request.external.modalHeader"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],["jhiTranslate","reset.request.external.explanation",3,"translateValues"],["type","button","data-dismiss","modal","jhiTranslate","reset.request.external.confirm",1,"btn","btn-primary",3,"click"],["jhiTranslate","reset.request.external.hint"],["target","_blank","rel","external noopener noreferrer","jhiTranslate","reset.request.external.linkTitle",3,"href"],["jhiTranslate","reset.request.external.noLink",3,"translateValues"]],template:function(s,r){s&1&&(i(0,"div"),e(1,`
    `),i(2,"div",0),e(3,`
        `),i(4,"h4",1),d(5,"span",2),a(),e(6,`
        `),i(7,"button",3),f("click",function(){return r.clear()}),a(),e(8,`
    `),a(),e(9,`
    `),i(10,"div",4),e(11,`
        `),i(12,"span",5),e(13),a(),e(14,`
        `),P(15,te,8,1)(16,ne,4,5),i(17,"button",6),f("click",function(){return r.clear()}),a(),e(18,`
    `),a(),e(19,`
`),a(),e(20,`
`)),s&2&&(o(12),c("translateValues",x(4,X,r.externalCredentialProvider)),o(),C("Your account credentials are not with Artemis but ",r.externalCredentialProvider,"."),o(2),p(r.externalPasswordResetLink?15:-1),o(),p(r.externalPasswordResetLink?-1:16))},dependencies:[R],encapsulation:2})}return t})();var re=["emailUsername"],$=t=>({provider:t});function ie(t,_){if(t&1&&(e(0,`
            `),i(1,"div",10),e(2),a(),e(3,`
        `)),t&2){let n=u();o(),c("translateValues",x(3,$,n.externalCredentialProvider)),o(),y(`
                The password reset links for `,n.externalCredentialProvider,` are not provided. Please notify the administrator. If you know how to reset your password for
                `,n.externalCredentialProvider,` you can do it yourself.
            `)}}function ae(t,_){if(t&1&&(e(0,`
            `),i(1,"div",11),e(2,`
                `),i(3,"span",12),e(4),a(),e(5,`
                `),d(6,"a",13),e(7,`
            `),a(),e(8,`
        `)),t&2){let n=u();o(3),c("translateValues",x(3,$,n.externalCredentialProvider)),o(),C("If you use your credentials from ",n.externalCredentialProvider," instead of Artemis, please reset your password here:"),o(2),v("href",n.externalPasswordResetLink,h)}}var Me=(()=>{class t{passwordResetInitService=l(J);profileService=l(B);alertService=l(K);translateService=l(W);modalService=l(H);emailUsernameElement;emailUsernameValue="";useExternal;externalCredentialProvider;externalPasswordResetLink;externalResetModalRef;ngOnInit(){this.profileService.getProfileInfo().subscribe(n=>{if(n){this.useExternal=n.useExternal,this.externalCredentialProvider=n.externalCredentialProvider;let s=this.translateService.currentLang,r=n.externalPasswordResetLinkMap;r.get(s)?this.externalPasswordResetLink=r.get(s):this.externalPasswordResetLink=r.get("en")}})}ngAfterViewInit(){this.emailUsernameElement&&this.emailUsernameElement.nativeElement.focus()}requestReset(){if(!this.emailUsernameValue){this.alertService.error("reset.request.messages.info");return}this.passwordResetInitService.save(this.emailUsernameValue).subscribe({next:()=>{this.alertService.success("reset.request.messages.success")},error:n=>{this.useExternal&&n?.error?.errorKey==="externalUser"?(this.externalResetModalRef=this.modalService.open(Z,{size:"lg",backdrop:"static"}),this.externalResetModalRef.componentInstance.externalCredentialProvider=this.externalCredentialProvider,this.externalResetModalRef.componentInstance.externalPasswordResetLink=this.externalPasswordResetLink):O(this.alertService,n)}})}static \u0275fac=function(s){return new(s||t)};static \u0275cmp=w({type:t,selectors:[["jhi-password-reset-init"]],viewQuery:function(s,r){if(s&1&&b(re,5),s&2){let m;M(m=U())&&(r.emailUsernameElement=m.first)}},decls:26,vars:6,consts:[["emailUsername",""],[1,"row","justify-content-center"],[1,"col-md-8"],["jhiTranslate","reset.request.title"],[1,"alert","alert-warning"],["jhiTranslate","reset.request.messages.info"],[1,"form-group"],["for","emailUsername","jhiTranslate","reset.request.form.emailUsername",1,"form-control-label"],["type","text","id","emailUsername","name","emailUsername",1,"form-control",3,"ngModelChange","placeholder","ngModel"],["type","submit","jhiTranslate","reset.request.form.button",1,"btn","btn-primary",3,"click"],["jhiTranslate","reset.request.external.noLink",1,"alert","alert-danger",3,"translateValues"],[1,"alert","alert-info"],["jhiTranslate","reset.request.external.generalHint",3,"translateValues"],["target","_blank","rel","external noopener noreferrer","jhiTranslate","reset.request.external.linkTitle",3,"href"]],template:function(s,r){if(s&1){let m=T();i(0,"div",1),e(1,`
    `),i(2,"div",2),e(3,`
        `),d(4,"h1",3),e(5,`
        `),P(6,ie,4,5)(7,ae,9,5),i(8,"div",4),e(9,`
            `),d(10,"span",5),e(11,`
        `),a(),e(12,`
        `),i(13,"div",6),e(14,`
            `),d(15,"label",7),e(16,`
            `),i(17,"input",8,0),q(19,"artemisTranslate"),j("ngModelChange",function(E){return g(m),V(r.emailUsernameValue,E)||(r.emailUsernameValue=E),S(E)}),a(),e(20,`
        `),a(),e(21,`
        `),i(22,"button",9),f("click",function(){return g(m),S(r.requestReset())}),a(),e(23,`
    `),a(),e(24,`
`),a(),e(25,`
`)}s&2&&(o(6),p(r.useExternal&&!r.externalPasswordResetLink?6:-1),o(),p(r.useExternal&&r.externalPasswordResetLink?7:-1),o(10),v("placeholder",L(19,4,"reset.request.form.emailUsername")),I("ngModel",r.emailUsernameValue))},dependencies:[R,Q,A,D,N,Y],encapsulation:2})}return t})();export{Me as PasswordResetInitComponent};
//# sourceMappingURL=password-reset-init.component-LTITJ2VI.js.map
