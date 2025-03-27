import{a as A}from"./chunk-LBU7A5ET.js";import{a as se}from"./chunk-7VLYAOO4.js";import{a as Y}from"./chunk-36AB5BWM.js";import{b as $}from"./chunk-UHM5AJSI.js";import"./chunk-CT44YL7Q.js";import{u as q,v as Z}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{F as z,H as B,K as X,b as j,c as I,h as F,i as W,k as U,m as D,n as G}from"./chunk-WA5GEAJB.js";import{e as te,f as ne,g as ie,h as oe}from"./chunk-VK7JPHFE.js";import{c as ee}from"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import{a as re}from"./chunk-K3W6YFKH.js";import{a as E,c as y}from"./chunk-JXJXC4DZ.js";import{d as ae}from"./chunk-EDXSOKK5.js";import{b as Q}from"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import{y as K}from"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as le}from"./chunk-U54OSGNH.js";import{f as O,h as V,i as R}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import{c as J}from"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as l,Dc as w,Ea as c,Ib as H,Ma as h,Mc as _,Na as x,Oc as m,Tb as C,Zb as f,cd as P,dd as e,ed as M,kc as p,ld as S,md as v,nd as b,qd as T,rd as L,sc as u,xc as o,yc as r,yd as N,zc as d,zd as k}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var ce=(()=>{class i{modal=c(q);title;text;static \u0275fac=function(a){return new(a||i)};static \u0275cmp=C({type:i,selectors:[["jhi-modal-confirm-autofocus"]],decls:25,vars:6,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close button","aria-describedby","modal-title",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["type","button","ngbAutofocus","",1,"btn","btn-danger",3,"click"]],template:function(a,t){a&1&&(o(0,"div",0),e(1,`
    `),o(2,"h4",1),e(3),N(4,"artemisTranslate"),r(),e(5,`
    `),o(6,"button",2),_("click",function(){return t.modal.dismiss("Cross click")}),r(),e(7,`
`),r(),e(8,`
`),o(9,"div",3),e(10,`
    `),o(11,"p"),e(12),N(13,"artemisTranslate"),r(),e(14,`
`),r(),e(15,`
`),o(16,"div",4),e(17,`
    `),o(18,"button",5),_("click",function(){return t.modal.dismiss("cancel click")}),e(19,"Cancel"),r(),e(20,`
    `),o(21,"button",6),_("click",function(){return t.modal.close("Ok click")}),e(22,"Ok"),r(),e(23,`
`),r(),e(24,`
`)),a&2&&(l(3),M(k(4,2,t.title)),l(9),M(k(13,4,t.text)))},dependencies:[re],encapsulation:2})}return i})();var de=(()=>{class i{loginService=c(A);eventManager=c(E);alertService=c(y);rememberMe=!0;acceptedTerms=!1;saml2Profile;ngOnInit(){document.cookie.indexOf("SAML2flow=")>=0&&(document.cookie="SAML2flow=; expires=Thu, 01 Jan 1970 00:00:00 UTC; ; SameSite=Lax;",this.loginSAML2())}loginSAML2(){this.loginService.loginSAML2(this.rememberMe).then(()=>{this.eventManager.broadcast({name:"authenticationSuccess",content:"Sending Authentication Success"})}).catch(n=>{if(n.status===401)document.cookie="SAML2flow=true; max-age=120; SameSite=Lax;",window.location.replace("/saml2/authenticate");else if(n.status===403){let a="Forbidden",t=n.headers.get("X-artemisApp-error");t&&(a+=": "+t),this.alertService.warning(a)}})}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=C({type:i,selectors:[["jhi-saml2-login"]],inputs:{rememberMe:"rememberMe",acceptedTerms:"acceptedTerms",saml2Profile:"saml2Profile"},decls:6,vars:2,consts:[["type","button","id","saml2Button",1,"btn","btn-primary","btn-lg",3,"click","disabled"]],template:function(a,t){a&1&&(o(0,"button",0),_("click",function(){return t.loginSAML2()}),e(1,`
    `),o(2,"span"),e(3),r(),e(4,`
`),r(),e(5,`
`)),a&2&&(p("disabled",!t.acceptedTerms),l(3),M(t.saml2Profile.buttonLabel||"SAML2 Login"))},encapsulation:2})}return i})();var pe=()=>({updateOn:"change"}),ge=i=>({account:i}),ue=()=>["privacy"],he=i=>({provider:i});function xe(i,g){i&1&&(e(0,`
                    `),o(1,"div",28),e(2,"Please sign in with your account."),r(),e(3,`
                `)),i&2&&(l(),p("jhiTranslate","home.login.traditional.pleaseSignIn"))}function fe(i,g){if(i&1&&(e(0,`
                    `),o(1,"div",29),e(2,`
                        Sign in with your account.
                    `),r(),e(3,`
                `)),i&2){let n=m(2);l(),p("jhiTranslate","home.login.traditional.pleaseSignInAccount")("translateValues",L(2,ge,n.accountName))}}function _e(i,g){i&1&&(e(0,`
                                `),o(1,"div",30),e(2,`
                                    `),o(3,"span",31),e(4,"Failed to sign in!"),r(),e(5,` Please check your login and password and try again.
                                `),r(),e(6,`
                            `))}function Ce(i,g){if(i&1&&(e(0,`
                                `),d(1,"span",32),e(2,`
                            `)),i&2){let n=m(2);l(),p("jhiTranslate",n.errorMessageUsername)}}function Se(i,g){i&1&&(e(0,`
                                `),d(1,"span",33),e(2,`
                            `))}function ve(i,g){if(i&1){let n=w();e(0,`
                                `),o(1,"div",20),e(2,`
                                    `),o(3,"label",34),e(4,`
                                        `),o(5,"input",35),b("ngModelChange",function(t){h(n);let s=m(2);return v(s.userAcceptedTerms,t)||(s.userAcceptedTerms=t),x(t)}),r(),e(6,`
                                        `),d(7,"a",36),e(8,`
                                    `),r(),e(9,`
                                `),r(),e(10,`
                            `)}if(i&2){let n=m(2);l(5),S("ngModel",n.userAcceptedTerms),l(2),p("routerLink",T(2,ue))}}function be(i,g){if(i&1&&(e(0,`
                                    `),o(1,"span",37),d(2,"fa-icon",38),r(),e(3,`
                                `)),i&2){let n=m(2);l(2),p("icon",n.faCircleNotch)}}function Me(i,g){i&1&&(e(0,`
                            `),o(1,"div"),e(2,`
                                `),d(3,"span",39),e(4,`\xA0
                                `),d(5,"a",40),e(6,`
                            `),r(),e(7,`
                        `))}function Te(i,g){if(i&1){let n=w();e(0,`
            `),o(1,"div",8),e(2,`
                `),e(3,`
                `),f(4,xe,4,1)(5,fe,4,4),o(6,"div",9),e(7,`
                    `),o(8,"form",10),_("change",function(t){h(n);let s=m();return x(s.inputChange(t))})("ngSubmit",function(){h(n);let t=m();return x(t.login())}),e(9,`
                        `),o(10,"div",11),e(11,`
                            `),f(12,_e,7,0),r(),e(13,`
                        `),o(14,"div",12),e(15,`
                            `),d(16,"label",13),e(17,`
                            `),o(18,"input",14,0),b("ngModelChange",function(t){h(n);let s=m();return v(s.username,t)||(s.username=t),x(t)}),_("ngModelChange",function(){h(n);let t=m();return x(t.checkFormValidity())})("blur",function(){h(n);let t=m();return x(t.usernameTouched=!0)}),r(),e(20,`
                            `),f(21,Ce,3,1),r(),e(22,`
                        `),o(23,"div",11),e(24,`
                            `),o(25,"div",15),e(26,`
                                `),d(27,"label",16),e(28,`
                                `),o(29,"div",17),e(30,`
                                    `),d(31,"a",18),e(32,`
                                `),r(),e(33,`
                            `),r(),e(34,`
                            `),o(35,"input",19,1),b("ngModelChange",function(t){h(n);let s=m();return v(s.password,t)||(s.password=t),x(t)}),_("ngModelChange",function(){h(n);let t=m();return x(t.checkFormValidity())})("blur",function(){h(n);let t=m();return x(t.passwordTouched=!0)}),r(),e(37,`
                            `),f(38,Se,3,0),r(),e(39,`
                        `),o(40,"div",11),e(41,`
                            `),o(42,"div",20),e(43,`
                                `),o(44,"label",21),e(45,`
                                    `),o(46,"input",22),b("ngModelChange",function(t){h(n);let s=m();return v(s.rememberMe,t)||(s.rememberMe=t),x(t)}),r(),e(47,`
                                    `),d(48,"span",23),e(49,`
                                `),r(),e(50,`
                            `),r(),e(51,`
                            `),f(52,ve,11,3),r(),e(53,`
                        `),o(54,"div",24),e(55,`
                            `),o(56,"button",25),e(57,`
                                `),f(58,be,4,1),d(59,"span",26),e(60,`
                            `),r(),e(61,`
                        `),r(),e(62,`
                    `),r(),e(63,`
                    `),o(64,"div",27),e(65,`
                        `),f(66,Me,8,0),r(),e(67,`
                `),r(),e(68,`
            `),r(),e(69,`
        `)}if(i&2){let n=P(19),a=P(36),t=m();l(4),u(t.accountName?-1:4),l(),u(t.accountName?5:-1),l(7),u(t.authenticationError?12:-1),l(6),S("ngModel",t.username),p("ngModelOptions",T(20,pe))("pattern",t.usernameRegexPattern)("placeholder",t.usernamePlaceholderTranslated)("minlength",t.USERNAME_MIN_LENGTH)("maxLength",t.USERNAME_MAX_LENGTH),l(3),u(n.errors&&(n.dirty||n.touched)&&t.usernameTouched?21:-1),l(14),S("ngModel",t.password),p("ngModelOptions",T(21,pe))("minlength",t.PASSWORD_MIN_LENGTH)("maxLength",t.PASSWORD_MAX_LENGTH),l(3),u(a.errors&&(a.dirty||a.touched)&&t.passwordTouched?38:-1),l(8),S("ngModel",t.rememberMe),l(6),u(t.needsToAcceptTerms?52:-1),l(4),p("disabled",t.isSubmittingLogin||!t.userAcceptedTerms&&t.needsToAcceptTerms||!t.isFormValid),l(2),u(t.isSubmittingLogin?58:-1),l(8),u(t.isRegistrationEnabled?66:-1)}}function we(i,g){i&1&&(e(0,`
            `),o(1,"div",41),e(2,`
                `),d(3,"div",42),e(4,`
                `),d(5,"div",43),e(6,`
            `),r(),e(7,`
        `))}function Ee(i,g){i&1&&(e(0,`
                        `),o(1,"div",28),e(2,"Please sign in via Single Sign-on."),r(),e(3,`
                    `)),i&2&&(l(),p("jhiTranslate","home.login.saml2.pleaseSignIn"))}function ye(i,g){if(i&1&&(e(0,`
                        `),o(1,"div",48),e(2,`
                            Please sign in.
                        `),r(),e(3,`
                    `)),i&2){let n=m(2);l(),p("jhiTranslate","home.login.saml2.pleaseSignInProvider")("translateValues",L(2,he,n.profileInfo.saml2.identityProviderName))}}function Ae(i,g){if(i&1){let n=w();e(0,`
                                `),o(1,"div",20),e(2,`
                                    `),o(3,"label",34),e(4,`
                                        `),o(5,"input",49),b("ngModelChange",function(t){h(n);let s=m(2);return v(s.userAcceptedTerms,t)||(s.userAcceptedTerms=t),x(t)}),r(),e(6,`
                                        `),d(7,"a",36),e(8,`
                                    `),r(),e(9,`
                                `),r(),e(10,`
                            `)}if(i&2){let n=m(2);l(5),S("ngModel",n.userAcceptedTerms),l(2),p("routerLink",T(2,ue))}}function Pe(i,g){if(i&1&&(e(0,`
            `),o(1,"div",44),e(2,`
                `),e(3,`
                `),o(4,"div",45),e(5,`
                    `),f(6,Ee,4,1)(7,ye,4,4),o(8,"div",46),e(9,`
                        `),o(10,"div",11),e(11,`
                            `),f(12,Ae,11,3),r(),e(13,`
                        `),d(14,"jhi-saml2-login",47),e(15,`
                    `),r(),e(16,`
                `),r(),e(17,`
            `),r(),e(18,`
        `)),i&2){let n=m();l(6),u(n.profileInfo.saml2.identityProviderName?-1:6),l(),u(n.profileInfo.saml2.identityProviderName?7:-1),l(5),u(n.needsToAcceptTerms?12:-1),l(2),p("acceptedTerms",!n.needsToAcceptTerms||n.userAcceptedTerms)("rememberMe",n.rememberMe)("saml2Profile",n.profileInfo.saml2)}}var dt=(()=>{class i{router=c(V);activatedRoute=c(O);accountService=c(Q);loginService=c(A);stateStorageService=c(Y);renderer=c(H);eventManager=c(E);orionConnectorService=c(se);modalService=c(Z);profileService=c(ee);alertService=c(y);translateService=c(J);USERNAME_MIN_LENGTH=te;USERNAME_MAX_LENGTH=ne;PASSWORD_MIN_LENGTH=ie;PASSWORD_MAX_LENGTH=oe;authenticationError=!1;account;modalRef;password;rememberMe=!0;needsToAcceptTerms=!1;userAcceptedTerms=!1;username;credentials;isRegistrationEnabled=!1;isPasswordLoginDisabled=!1;loading=!0;mainElementFocused=!1;usernamePlaceholder="global.form.username.placeholder";usernamePlaceholderTranslated="Login or email";usernameRegexPattern=/^[a-zA-Z0-9.@_-]{4,50}$/;errorMessageUsername="home.errors.usernameIncorrect";accountName;externalUserManagementActive=!0;isFormValid=!1;isSubmittingLogin=!1;profileInfo=void 0;faCircleNotch=K;usernameTouched=!1;passwordTouched=!1;ngOnInit(){this.profileService.getProfileInfo().subscribe(a=>{a&&this.initializeWithProfileInfo(a)}),this.accountService.identity().then(a=>{this.currentUserCallback(a),a||(this.loading=!1)}),this.registerAuthenticationSuccess();let n=this.accountService.getAndClearPrefilledUsername();n&&(this.username=n)}initializeWithProfileInfo(n){this.profileInfo=n,this.externalUserManagementActive=!1,this.accountName=n.accountName,n.allowedLdapUsernamePattern&&(this.usernameRegexPattern=new RegExp(n.allowedLdapUsernamePattern)),this.accountName==="TUM"&&(this.usernamePlaceholder="global.form.username.tumPlaceholder",this.errorMessageUsername="home.errors.tumWarning",this.usernameRegexPattern=new RegExp(/^(?!.*@.*@)[a-zA-Z0-9.@_-]{7,50}$/)),this.usernamePlaceholderTranslated=this.translateService.instant(this.usernamePlaceholder),this.translateService.onLangChange.subscribe(()=>{this.usernamePlaceholderTranslated=this.translateService.instant(this.usernamePlaceholder)}),this.isRegistrationEnabled=!!n.registrationEnabled,this.needsToAcceptTerms=!!n.needsToAcceptTerms,this.activatedRoute.queryParams.subscribe(a=>{let t=a.hasOwnProperty("showLoginForm");this.isPasswordLoginDisabled=!!this.profileInfo?.saml2&&this.profileInfo.saml2.passwordLoginDisabled&&!t})}registerAuthenticationSuccess(){let n=this.eventManager.subscribe("authenticationSuccess",()=>{this.eventManager.destroy(n),this.accountService.identity().then(a=>{this.currentUserCallback(a)})})}ngAfterViewChecked(){if(this.mainElementFocused||this.loading)return;let n=this.renderer.selectRootElement(this.isPasswordLoginDisabled?"#saml2Button":"#username",!0);n&&(n.focus(),this.mainElementFocused=!0),this.loginService.lastLogoutWasForceful()&&this.alertService.error("home.errors.sessionExpired")}login(){this.isSubmittingLogin=!0,this.loginService.login({username:this.username,password:this.password,rememberMe:this.rememberMe}).then(()=>this.handleLoginSuccess()).catch(()=>{this.authenticationError=!0}).finally(()=>this.isSubmittingLogin=!1)}handleLoginSuccess(){this.authenticationError=!1,(this.router.url==="/register"||/^\/activate\//.test(this.router.url)||/^\/reset\//.test(this.router.url))&&this.router.navigate([""]),this.eventManager.broadcast({name:"authenticationSuccess",content:"Sending Authentication Success"}),this.handleOrionLogin()}handleOrionLogin(){if(!$)return;let n=this.modalService.open(ce,{size:"lg",backdrop:"static"});n.componentInstance.text="login.ide.confirmation",n.componentInstance.title="login.ide.title",n.result.then(()=>this.orionConnectorService.login(this.username,this.password),()=>{})}currentUserCallback(n){if(this.account=n,n){let a=this.stateStorageService.getUrl();a&&a!==""?(this.stateStorageService.storeUrl(""),this.router.navigateByUrl(a)):this.router.navigate(["courses"])}}isAuthenticated(){return this.accountService.isAuthenticated()}inputChange(n){n.target&&n.target.name==="username"&&(this.username=n.target.value),n.target&&n.target.name==="password"&&(this.password=n.target.value)}checkFormValidity(){this.isFormValid=this.username!==void 0&&this.username.length>=this.USERNAME_MIN_LENGTH&&this.username.length<=this.USERNAME_MAX_LENGTH&&this.password!==void 0&&this.password.length>=this.PASSWORD_MIN_LENGTH&&this.password.length<=this.PASSWORD_MAX_LENGTH}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=C({type:i,selectors:[["jhi-home"]],decls:19,vars:4,consts:[["usernameForm","ngModel"],["passwordForm","ngModel"],[1,"container-fluid",3,"hidden"],[1,"row"],[1,"col-md-8","offset-md-2","text-center"],["jhiTranslate","home.title"],["jhiTranslate","home.subtitle",1,"lead"],[1,"row","row-divided","my-4","justify-content-center"],[1,"login-col","col-12","col-xl-5","h-100"],[1,"login-form"],["name","loginForm","role","form",1,"mb-5",3,"change","ngSubmit"],[1,"form-group"],[1,"form-group","pb-2"],["for","username","jhiTranslate","global.form.username",1,"mb-2"],["autocomplete","username","id","username","name","username","type","text","tabindex","1",1,"form-control",3,"ngModelChange","blur","ngModel","ngModelOptions","pattern","placeholder","minlength","maxLength"],[1,"d-flex","mb-2"],["for","password","jhiTranslate","login.form.password"],[1,"ms-auto"],["jhiTranslate","login.password.forgot","routerLink","account/reset/request","tabindex","4",1,"text-primary","small"],["autocomplete","current-password","id","password","name","password","type","password","tabindex","2",1,"form-control",3,"ngModelChange","blur","ngModel","ngModelOptions","minlength","maxLength"],[1,"form-check"],["for","rememberMe",1,"form-check-label"],["checked","","id","rememberMe","name","rememberMe","type","checkbox",1,"form-check-input",3,"ngModelChange","ngModel"],["jhiTranslate","login.form.rememberme"],[1,"btn-toolbar"],["id","login-button","type","submit","tabindex","3",1,"btn","btn-primary","w-100",3,"disabled"],["jhiTranslate","login.form.button"],[1,"text-center"],[1,"lead","text-center",3,"jhiTranslate"],[1,"lead","text-center","mb-4",3,"jhiTranslate","translateValues"],["jhiTranslate","home.errors.failedToLogin",1,"alert","alert-danger","my-3"],[1,"bold"],[1,"mt-1","text-danger","small",3,"jhiTranslate"],["jhiTranslate","home.errors.passwordIncorrect",1,"mt-1","text-danger","small"],["for","acceptTerms",1,"form-check-label"],["checked","","id","acceptTerms","name","acceptTerms","type","checkbox",1,"form-check-input",3,"ngModelChange","ngModel"],["jhiTranslate","login.form.acceptTerms",3,"routerLink"],[1,"me-1"],["animation","spin",3,"icon"],["jhiTranslate","global.messages.info.register.noaccount"],["jhiTranslate","global.messages.info.register.link","routerLink","account/register",1,"text-primary"],[1,"col-12","col-xl-2","py-5","h-100"],["jhiTranslate","login.divider",1,"d-none","d-xl-block","vertical-divider"],["jhiTranslate","login.divider",1,"d-xl-none","horizontal-divider"],[1,"login-col","col-12","col-xl-5"],[1,"h-100","d-flex","flex-column","align-items-center","justify-content-center"],[1,"saml2-center","d-flex","flex-column","align-items-center","justify-content-center","flex-grow-1"],[1,"d-block","text-center",3,"acceptedTerms","rememberMe","saml2Profile"],[1,"lead","text-center",3,"jhiTranslate","translateValues"],["type","checkbox",1,"form-check-input",3,"ngModelChange","ngModel"]],template:function(a,t){a&1&&(o(0,"div",2),e(1,`
    `),o(2,"div",3),e(3,`
        `),o(4,"div",4),e(5,`
            `),d(6,"h1",5),e(7,`
            `),d(8,"p",6),e(9,`
        `),r(),e(10,`
    `),r(),e(11,`
    `),o(12,"div",7),e(13,`
        `),f(14,Te,70,22)(15,we,8,0)(16,Pe,19,6),r(),e(17,`
`),r(),e(18,`
`)),a&2&&(p("hidden",t.loading||t.account),l(14),u(t.isPasswordLoginDisabled?-1:14),l(),u(!t.isPasswordLoginDisabled&&(t.profileInfo!=null&&t.profileInfo.saml2)?15:-1),l(),u(t.profileInfo!=null&&t.profileInfo.saml2?16:-1))},dependencies:[le,X,G,I,j,F,W,z,B,D,U,R,ae,de],styles:['.login-col[_ngcontent-%COMP%]{min-height:150px;width:455px;min-width:455px}.login-col[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{max-width:360px;margin:auto}.row-divided[_ngcontent-%COMP%]{position:relative}.vertical-divider[_ngcontent-%COMP%]{position:absolute;height:calc(50% - .5rem);width:auto;top:50%;left:50%;margin:0;padding:0;line-height:0;text-align:center;text-transform:uppercase;transform:translate(-50%)}.vertical-divider[_ngcontent-%COMP%]:before, .vertical-divider[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;z-index:-1;border-left:1px solid var(--border-color);border-right:1px solid var(--border-color);width:0;height:calc(100% - 1rem)}.vertical-divider[_ngcontent-%COMP%]:before{top:-100%}.vertical-divider[_ngcontent-%COMP%]:after{top:auto;bottom:0}.horizontal-divider[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;margin:0;padding:0;line-height:0;text-transform:uppercase}.horizontal-divider[_ngcontent-%COMP%]:before, .horizontal-divider[_ngcontent-%COMP%]:after{content:"";flex:1;border-bottom:2px solid var(--border-color)}.horizontal-divider[_ngcontent-%COMP%]:before{margin-right:1rem;margin-left:15%}.horizontal-divider[_ngcontent-%COMP%]:after{margin-left:1rem;margin-right:15%}@media (min-width: 1200px){.saml2-center[_ngcontent-%COMP%]{margin-top:-40px}}@media (max-width: 576px){h1[_ngcontent-%COMP%]{font-size:1.6rem}.lead[_ngcontent-%COMP%]{font-size:.85rem}.login-col[_ngcontent-%COMP%]{width:385px;min-width:385px}}']})}return i})();export{dt as HomeComponent};
//# sourceMappingURL=home.component-HPLFR5ZP.js.map
