import{a as te}from"./chunk-MPMTX2VR.js";import{a as ee}from"./chunk-FGXEI5KW.js";import{J as X,K as Q,L as $,c as q,e as c,h as B,i as H,n as k,s as Y,v as W}from"./chunk-WA5GEAJB.js";import{e as S,f as N,g as w,h as R}from"./chunk-VK7JPHFE.js";import{c as K}from"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import{a as Z}from"./chunk-K3W6YFKH.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as J}from"./chunk-U54OSGNH.js";import"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import{c as z}from"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{O as U}from"./chunk-IOA4DPXY.js";import{Db as n,Dc as M,Ea as f,Ma as A,Mc as I,Na as L,Oc as g,Rc as C,Tb as j,Yc as D,Zb as p,Zc as G,_c as V,dd as e,fd as O,kc as x,rd as h,sc as a,xc as m,ya as P,yc as l,yd as v,zc as o,zd as E}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var ie=(()=>{class t{http=f(U);save(i){return this.http.post("api/core/public/register",i)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var b="www.jhipster.tech/problem",ne=`${b}/email-already-used`,re=`${b}/login-already-used`,Ue=`${b}/email-not-found`,oe=`${b}/account-registration-blocked`;var le=["login"],F=t=>({min:t}),y=t=>({max:t});function se(t,s){t&1&&(e(0,`
                    `),m(1,"div",4)(2,"strong"),e(3,"Registration saved!"),l(),e(4," Please check your email for confirmation."),l(),e(5,`
                `))}function me(t,s){t&1&&(e(0,`
                    `),m(1,"div",5)(2,"strong"),e(3,"Registration failed!"),l(),e(4," Please try again later."),l(),e(5,`
                `))}function de(t,s){t&1&&(e(0,`
                    `),m(1,"div",6),e(2,`
                        `),m(3,"strong"),e(4,"Login name already registered!"),l(),e(5,` Please choose another one.
                    `),l(),e(6,`
                `))}function ce(t,s){t&1&&(e(0,`
                    `),m(1,"div",7)(2,"strong"),e(3,"Email is already in use!"),l(),e(4," Please choose another one."),l(),e(5,`
                `))}function _e(t,s){t&1&&(e(0,`
                    `),m(1,"div",8)(2,"strong"),e(3,"Account Registration blocked! "),l(),e(4," Please try again later."),l(),e(5,`
                `))}function ge(t,s){t&1&&(e(0,`
                    `),o(1,"div",9),e(2,`
                `))}function pe(t,s){t&1&&(e(0,`
                                        `),o(1,"small",26),e(2,`
                                    `))}function xe(t,s){if(t&1&&(e(0,`
                                        `),o(1,"small",27),e(2,`
                                    `)),t&2){let i=g(4);n(),x("translateValues",h(1,F,i.USERNAME_MIN_LENGTH))}}function ue(t,s){if(t&1&&(e(0,`
                                        `),o(1,"small",28),e(2,`
                                    `)),t&2){let i=g(4);n(),x("translateValues",h(1,y,i.USERNAME_MAX_LENGTH))}}function fe(t,s){t&1&&(e(0,`
                                        `),o(1,"small",29),e(2,`
                                    `))}function Ce(t,s){if(t&1&&(e(0,`
                                `),m(1,"div"),e(2,`
                                    `),p(3,pe,3,0)(4,xe,3,3)(5,ue,3,3)(6,fe,3,0),l(),e(7,`
                            `)),t&2){let i,r,d,_,u=g(3);n(3),a(!((i=u.registerForm.get("login"))==null||i.errors==null)&&i.errors.required?3:-1),n(),a(!((r=u.registerForm.get("login"))==null||r.errors==null)&&r.errors.minlength?4:-1),n(),a(!((d=u.registerForm.get("login"))==null||d.errors==null)&&d.errors.maxlength?5:-1),n(),a(!((_=u.registerForm.get("login"))==null||_.errors==null)&&_.errors.pattern?6:-1)}}function he(t,s){if(t&1&&(e(0,`
                            `),m(1,"div",11),e(2,`
                                `),o(3,"strong",30),e(4),l(),e(5,`
                        `)),t&2){let i=g(3);n(4),O(`
                                `,i.allowedEmailPatternReadable,`
                            `)}}function ve(t,s){t&1&&(e(0,`
                                        `),o(1,"small",31),e(2,`
                                    `))}function Ee(t,s){t&1&&(e(0,`
                                        `),o(1,"small",32),e(2,`
                                    `))}function Te(t,s){t&1&&(e(0,`
                                        `),o(1,"small",33),e(2,`
                                    `))}function we(t,s){t&1&&(e(0,`
                                        `),o(1,"small",34),e(2,`
                                    `))}function Re(t,s){t&1&&(e(0,`
                                        `),o(1,"small",35),e(2,`
                                    `))}function be(t,s){if(t&1&&(e(0,`
                                `),m(1,"div"),e(2,`
                                    `),p(3,ve,3,0)(4,Ee,3,0)(5,Te,3,0)(6,we,3,0)(7,Re,3,0),l(),e(8,`
                            `)),t&2){let i,r,d,_,u,T=g(3);n(3),a(!((i=T.registerForm.get("email"))==null||i.errors==null)&&i.errors.required?3:-1),n(),a(!((r=T.registerForm.get("email"))==null||r.errors==null)&&r.errors.invalid?4:-1),n(),a(!((d=T.registerForm.get("email"))==null||d.errors==null)&&d.errors.minlength?5:-1),n(),a(!((_=T.registerForm.get("email"))==null||_.errors==null)&&_.errors.maxlength?6:-1),n(),a(!((u=T.registerForm.get("email"))==null||u.errors==null)&&u.errors.pattern?7:-1)}}function Se(t,s){t&1&&(e(0,`
                                        `),o(1,"small",36),e(2,`
                                    `))}function Ne(t,s){if(t&1&&(e(0,`
                                        `),o(1,"small",37),e(2,`
                                    `)),t&2){let i=g(4);n(),x("translateValues",h(1,F,i.PASSWORD_MIN_LENGTH))}}function Fe(t,s){if(t&1&&(e(0,`
                                        `),o(1,"small",38),e(2,`
                                    `)),t&2){let i=g(4);n(),x("translateValues",h(1,y,i.PASSWORD_MAX_LENGTH))}}function ye(t,s){if(t&1&&(e(0,`
                                `),m(1,"div"),e(2,`
                                    `),p(3,Se,3,0)(4,Ne,3,3)(5,Fe,3,3),l(),e(6,`
                            `)),t&2){let i,r,d,_=g(3);n(3),a(!((i=_.registerForm.get("password"))==null||i.errors==null)&&i.errors.required?3:-1),n(),a(!((r=_.registerForm.get("password"))==null||r.errors==null)&&r.errors.minlength?4:-1),n(),a(!((d=_.registerForm.get("password"))==null||d.errors==null)&&d.errors.maxlength?5:-1)}}function Pe(t,s){t&1&&(e(0,`
                                        `),o(1,"small",39),e(2,`
                                    `))}function Ae(t,s){if(t&1&&(e(0,`
                                        `),o(1,"small",40),e(2,`
                                    `)),t&2){let i=g(4);n(),x("translateValues",h(1,F,i.PASSWORD_MIN_LENGTH))}}function Le(t,s){if(t&1&&(e(0,`
                                        `),o(1,"small",41),e(2,`
                                    `)),t&2){let i=g(4);n(),x("translateValues",h(1,y,i.PASSWORD_MAX_LENGTH))}}function je(t,s){if(t&1&&(e(0,`
                                `),m(1,"div"),e(2,`
                                    `),p(3,Pe,3,0)(4,Ae,3,3)(5,Le,3,3),l(),e(6,`
                            `)),t&2){let i,r,d,_=g(3);n(3),a(!((i=_.registerForm.get("confirmPassword"))==null||i.errors==null)&&i.errors.required?3:-1),n(),a(!((r=_.registerForm.get("confirmPassword"))==null||r.errors==null)&&r.errors.minlength?4:-1),n(),a(!((d=_.registerForm.get("confirmPassword"))==null||d.errors==null)&&d.errors.maxlength?5:-1)}}function Me(t,s){if(t&1){let i=M();e(0,`
                    `),m(1,"form",10),I("ngSubmit",function(){A(i);let d=g(2);return L(d.register())}),e(2,`
                        `),m(3,"div",11),e(4,`
                            `),o(5,"label",12),e(6,`
                            `),o(7,"input",13),v(8,"artemisTranslate"),e(9,`
                        `),l(),e(10,`
                        `),m(11,"div",11),e(12,`
                            `),o(13,"label",14),e(14,`
                            `),o(15,"input",15),v(16,"artemisTranslate"),e(17,`
                        `),l(),e(18,`
                        `),m(19,"div",11),e(20,`
                            `),o(21,"label",16),e(22,`
                            `),o(23,"input",17,0),v(25,"artemisTranslate"),e(26,`
                            `),p(27,Ce,8,4),l(),e(28,`
                        `),p(29,he,6,1),m(30,"div",11),e(31,`
                            `),o(32,"label",18),e(33,`
                            `),o(34,"input",19),v(35,"artemisTranslate"),e(36,`
                            `),p(37,be,9,5),l(),e(38,`
                        `),m(39,"div",11),e(40,`
                            `),o(41,"label",20),e(42,`
                            `),o(43,"input",21),v(44,"artemisTranslate"),e(45,`
                            `),p(46,ye,7,3),o(47,"jhi-password-strength-bar",22),e(48,`
                        `),l(),e(49,`
                        `),m(50,"div",11),e(51,`
                            `),o(52,"label",23),e(53,`
                            `),o(54,"input",24),v(55,"artemisTranslate"),e(56,`
                            `),p(57,je,7,3),l(),e(58,`
                        `),o(59,"button",25),e(60,`
                    `),l(),e(61,`
                `)}if(t&2){let i=g(2);n(),x("formGroup",i.registerForm),n(6),C("placeholder",E(8,14,"global.form.firstname.placeholder")),n(8),C("placeholder",E(16,16,"global.form.lastname.placeholder")),n(8),C("placeholder",E(25,18,"global.form.username.placeholder")),n(4),a(i.registerForm.get("login").invalid&&(i.registerForm.get("login").dirty||i.registerForm.get("login").touched)?27:-1),n(2),a(i.allowedEmailPatternReadable?29:-1),n(5),C("placeholder",E(35,20,"global.form.email.placeholder")),n(3),a(i.registerForm.get("email").invalid&&(i.registerForm.get("email").dirty||i.registerForm.get("email").touched)?37:-1),n(6),C("placeholder",E(44,22,"global.form.newpassword.placeholder")),n(3),a(i.registerForm.get("password").invalid&&(i.registerForm.get("password").dirty||i.registerForm.get("password").touched)?46:-1),n(),x("passwordToCheck",i.registerForm.get("password").value),n(7),C("placeholder",E(55,24,"global.form.confirmpassword.placeholder")),n(3),a(i.registerForm.get("confirmPassword").invalid&&(i.registerForm.get("confirmPassword").dirty||i.registerForm.get("confirmPassword").touched)?57:-1),n(2),x("disabled",i.registerForm.invalid)}}function Ie(t,s){if(t&1&&(e(0,`
    `),m(1,"div"),e(2,`
        `),m(3,"div",1),e(4,`
            `),m(5,"div",2),e(6,`
                `),o(7,"h1",3),e(8,`
                `),e(9,`
                `),e(10,`
                `),e(11,`
                `),e(12,`
                `),e(13,`
                `),e(14,`
                `),p(15,se,6,0)(16,me,6,0)(17,de,7,0)(18,ce,6,0)(19,_e,6,0)(20,ge,3,0),l(),e(21,`
        `),l(),e(22,`
        `),m(23,"div",1),e(24,`
            `),m(25,"div",2),e(26,`
                `),p(27,Me,62,26),l(),e(28,`
        `),l(),e(29,`
    `),l(),e(30,`
`)),t&2){let i=g();n(15),a(i.success?15:-1),n(),a(i.error?16:-1),n(),a(i.errorUserExists?17:-1),n(),a(i.errorEmailExists?18:-1),n(),a(i.errorAccountRegistrationBlocked?19:-1),n(),a(i.doNotMatch?20:-1),n(7),a(i.success?-1:27)}}var nt=(()=>{class t{translateService=f(z);registerService=f(ie);fb=f(X);profileService=f(K);login;USERNAME_MIN_LENGTH=S;USERNAME_MAX_LENGTH=N;PASSWORD_MIN_LENGTH=w;PASSWORD_MAX_LENGTH=R;doNotMatch=!1;error=!1;errorEmailExists=!1;errorUserExists=!1;errorAccountRegistrationBlocked=!1;success=!1;usernamePattern="^[a-zA-Z0-9]*";registerForm;isRegistrationEnabled=!1;allowedEmailPattern;allowedEmailPatternReadable;ngAfterViewInit(){this.login&&this.login.nativeElement.focus()}ngOnInit(){this.profileService.getProfileInfo().subscribe(i=>{if(i&&(this.isRegistrationEnabled=i.registrationEnabled||!1,this.allowedEmailPattern=i.allowedEmailPattern,this.allowedEmailPatternReadable=i.allowedEmailPatternReadable,this.allowedEmailPattern)){let r=this.allowedEmailPattern;this.registerForm.get("email").setValidators([c.required,c.minLength(4),c.maxLength(100),c.pattern(r)])}}),this.initializeForm()}initializeForm(){this.registerForm||(this.registerForm=this.fb.nonNullable.group({firstName:["",[c.required,c.minLength(2)]],lastName:["",[c.required,c.minLength(2)]],login:["",[c.required,c.minLength(S),c.maxLength(N),c.pattern(this.usernamePattern)]],email:["",[c.required,c.minLength(5),c.maxLength(100),c.email]],password:["",[c.required,c.minLength(w),c.maxLength(R)]],confirmPassword:["",[c.required,c.minLength(w),c.maxLength(R)]]}))}register(){this.doNotMatch=!1,this.error=!1,this.errorEmailExists=!1,this.errorUserExists=!1;let i=this.registerForm.get(["password"]).value;if(i!==this.registerForm.get(["confirmPassword"]).value)this.doNotMatch=!0;else{let r=new ee;r.firstName=this.registerForm.get(["firstName"]).value,r.lastName=this.registerForm.get(["lastName"]).value,r.login=this.registerForm.get(["login"]).value,r.email=this.registerForm.get(["email"]).value,r.password=i,r.langKey=this.translateService.currentLang,this.registerService.save(r).subscribe({next:()=>this.success=!0,error:d=>this.processError(d)})}}processError(i){i.status===400&&i.error.type.includes(re)?this.errorUserExists=!0:i.status===400&&i.error.type.includes(ne)?this.errorEmailExists=!0:i.status===400&&i.error.type.includes(oe)?this.errorAccountRegistrationBlocked=!0:this.error=!0}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=j({type:t,selectors:[["jhi-register"]],viewQuery:function(r,d){if(r&1&&D(le,5),r&2){let _;G(_=V())&&(d.login=_.first)}},decls:1,vars:1,consts:[["login",""],[1,"row","justify-content-center"],[1,"col-md-8"],["jhiTranslate","register.title"],["jhiTranslate","register.messages.success",1,"alert","alert-success"],["jhiTranslate","register.messages.error.fail",1,"alert","alert-danger"],["jhiTranslate","register.messages.error.userExists",1,"alert","alert-danger"],["jhiTranslate","register.messages.error.emailExists",1,"alert","alert-danger"],["jhiTranslate","register.messages.error.blocked",1,"alert","alert-danger"],["jhiTranslate","global.messages.error.dontmatch",1,"alert","alert-danger"],["name","form","role","form",3,"ngSubmit","formGroup"],[1,"form-group"],["for","firstName","jhiTranslate","global.form.firstname",1,"form-control-label"],["type","text","id","firstName","name","firstName","autocomplete","given-name","formControlName","firstName",1,"form-control",3,"placeholder"],["for","lastName","jhiTranslate","global.form.lastname",1,"form-control-label"],["type","text","id","lastName","name","lastName","autocomplete","family-name","formControlName","lastName",1,"form-control",3,"placeholder"],["for","login","jhiTranslate","global.form.username",1,"form-control-label"],["type","text","id","login","name","login","autocomplete","username","formControlName","login",1,"form-control",3,"placeholder"],["for","email","jhiTranslate","global.form.email",1,"form-control-label"],["type","email","id","email","name","email","autocomplete","email","formControlName","email",1,"form-control",3,"placeholder"],["for","password","jhiTranslate","global.form.newpassword",1,"form-control-label"],["type","password","id","password","name","password","autocomplete","new-password","formControlName","password",1,"form-control",3,"placeholder"],[3,"passwordToCheck"],["for","confirmPassword","jhiTranslate","global.form.confirmpassword",1,"form-control-label"],["type","password","id","confirmPassword","name","confirmPassword","autocomplete","new-password","formControlName","confirmPassword",1,"form-control",3,"placeholder"],["type","submit","jhiTranslate","register.form.button",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","register.messages.validate.login.required",1,"form-text","text-danger"],["jhiTranslate","register.messages.validate.login.minlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","register.messages.validate.login.maxlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","register.messages.validate.login.pattern",1,"form-text","text-danger"],["jhiTranslate","global.form.email.pattern"],["jhiTranslate","global.messages.validate.email.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.invalid",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.minlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.maxlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.pattern",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.newpassword.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.newpassword.minlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","global.messages.validate.newpassword.maxlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","global.messages.validate.confirmpassword.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.confirmpassword.minlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","global.messages.validate.confirmpassword.maxlength",1,"form-text","text-danger",3,"translateValues"]],template:function(r,d){r&1&&p(0,Ie,31,7),r&2&&a(d.isRegistrationEnabled?0:-1)},dependencies:[J,Q,k,q,B,H,$,Y,W,te,Z],encapsulation:2})}return t})();export{nt as RegisterComponent};
//# sourceMappingURL=register.component-UN32KBFA.js.map
