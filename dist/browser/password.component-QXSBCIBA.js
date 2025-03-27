import{a as k}from"./chunk-MPMTX2VR.js";import{C as q,G,J as I,K as H,L as O,c as A,e as u,h as M,i as V,n as D,s as L,v as R}from"./chunk-WA5GEAJB.js";import{g as v,h as P}from"./chunk-VK7JPHFE.js";import{a as B}from"./chunk-K3W6YFKH.js";import{b as W}from"./chunk-R5BZWVRQ.js";import"./chunk-DID2YGL7.js";import"./chunk-CXQURQM5.js";import"./chunk-S4QLGR2R.js";import"./chunk-Z4VHWOB5.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as X}from"./chunk-U54OSGNH.js";import"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{O as j}from"./chunk-IOA4DPXY.js";import{Db as o,Dc as E,Ea as x,Ma as S,Mc as y,Na as b,Oc as c,Rc as g,Tb as F,Zb as p,dd as e,ed as N,kc as _,rd as f,sc as s,xc as l,ya as T,yc as r,yd as C,zc as a,zd as h}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var z=(()=>{class t{http=x(j);save(n,i){return this.http.post("api/core/account/change-password",{currentPassword:i,newPassword:n})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=T({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var U=t=>({username:t}),J=t=>({min:t}),K=t=>({max:t});function Y(t,d){t&1&&(e(0,`
                        `),l(1,"div",13),e(2,`
                            `),l(3,"strong"),e(4,"Password changed!"),r(),e(5,`
                        `),r(),e(6,`
                    `))}function Z(t,d){t&1&&(e(0,`
                        `),l(1,"div",14)(2,"strong"),e(3,"An error has occurred!"),r(),e(4," The password could not be changed."),r(),e(5,`
                    `))}function $(t,d){t&1&&(e(0,`
                        `),a(1,"div",15),e(2,`
                    `))}function ee(t,d){t&1&&(e(0,`
                                        `),a(1,"small",16),e(2,`
                                    `))}function te(t,d){if(t&1&&(e(0,`
                                `),l(1,"div"),e(2,`
                                    `),p(3,ee,3,0),r(),e(4,`
                            `)),t&2){let n,i=c(3);o(3),s(!((n=i.passwordForm.get("currentPassword"))==null||n.errors==null)&&n.errors.required?3:-1)}}function ne(t,d){t&1&&(e(0,`
                                        `),a(1,"small",17),e(2,`
                                    `))}function oe(t,d){if(t&1&&(e(0,`
                                        `),a(1,"small",18),e(2,`
                                    `)),t&2){let n=c(4);o(),_("translateValues",f(1,J,n.PASSWORD_MIN_LENGTH))}}function ie(t,d){if(t&1&&(e(0,`
                                        `),a(1,"small",19),e(2,`
                                    `)),t&2){let n=c(4);o(),_("translateValues",f(1,K,n.PASSWORD_MAX_LENGTH))}}function re(t,d){if(t&1&&(e(0,`
                                `),l(1,"div"),e(2,`
                                    `),p(3,ne,3,0)(4,oe,3,3)(5,ie,3,3),r(),e(6,`
                            `)),t&2){let n,i,m,w=c(3);o(3),s(!((n=w.passwordForm.get("newPassword"))==null||n.errors==null)&&n.errors.required?3:-1),o(),s(!((i=w.passwordForm.get("newPassword"))==null||i.errors==null)&&i.errors.minlength?4:-1),o(),s(!((m=w.passwordForm.get("newPassword"))==null||m.errors==null)&&m.errors.maxlength?5:-1)}}function ae(t,d){t&1&&(e(0,`
                                        `),a(1,"small",20),e(2,`
                                    `))}function se(t,d){if(t&1&&(e(0,`
                                        `),a(1,"small",21),e(2,`
                                    `)),t&2){let n=c(4);o(),_("translateValues",f(1,J,n.PASSWORD_MIN_LENGTH))}}function le(t,d){if(t&1&&(e(0,`
                                        `),a(1,"small",22),e(2,`
                                    `)),t&2){let n=c(4);o(),_("translateValues",f(1,K,n.PASSWORD_MAX_LENGTH))}}function de(t,d){if(t&1&&(e(0,`
                                `),l(1,"div"),e(2,`
                                    `),p(3,ae,3,0)(4,se,3,3)(5,le,3,3),r(),e(6,`
                            `)),t&2){let n,i,m,w=c(3);o(3),s(!((n=w.passwordForm.get("confirmPassword"))==null||n.errors==null)&&n.errors.required?3:-1),o(),s(!((i=w.passwordForm.get("confirmPassword"))==null||i.errors==null)&&i.errors.minlength?4:-1),o(),s(!((m=w.passwordForm.get("confirmPassword"))==null||m.errors==null)&&m.errors.maxlength?5:-1)}}function me(t,d){if(t&1){let n=E();e(0,`
                `),l(1,"div",1),e(2,`
                    `),l(3,"h2",2),e(4,`
                        Password for `),l(5,"strong"),e(6),r(),e(7,`
                    `),r(),e(8,`
                    `),p(9,Y,7,0)(10,Z,6,0)(11,$,3,0),l(12,"form",3),y("ngSubmit",function(){S(n);let m=c(2);return b(m.changePassword())}),e(13,`
                        `),l(14,"div",4),e(15,`
                            `),a(16,"label",5),e(17,`
                            `),a(18,"input",6),C(19,"artemisTranslate"),e(20,`
                            `),p(21,te,5,1),r(),e(22,`
                        `),l(23,"div",4),e(24,`
                            `),a(25,"label",7),e(26,`
                            `),a(27,"input",8),C(28,"artemisTranslate"),e(29,`
                            `),p(30,re,7,3),a(31,"jhi-password-strength-bar",9),e(32,`
                        `),r(),e(33,`
                        `),l(34,"div",4),e(35,`
                            `),a(36,"label",10),e(37,`
                            `),a(38,"input",11),C(39,"artemisTranslate"),e(40,`
                            `),p(41,de,7,3),r(),e(42,`
                        `),a(43,"button",12),e(44,`
                    `),r(),e(45,`
                `),r(),e(46,`
            `)}if(t&2){let n=c(2);o(3),_("translateValues",f(21,U,n.user.login)),o(3),N(n.user.login),o(3),s(n.success?9:-1),o(),s(n.error?10:-1),o(),s(n.doNotMatch?11:-1),o(),_("formGroup",n.passwordForm),o(6),g("placeholder",h(19,15,"global.form.currentpassword.placeholder")),o(3),s(n.passwordForm.get("currentPassword").invalid&&(n.passwordForm.get("currentPassword").dirty||n.passwordForm.get("currentPassword").touched)?21:-1),o(6),g("placeholder",h(28,17,"global.form.newpassword.placeholder")),_("maxlength",n.PASSWORD_MAX_LENGTH),o(3),s(n.passwordForm.get("newPassword").invalid&&(n.passwordForm.get("newPassword").dirty||n.passwordForm.get("newPassword").touched)?30:-1),o(),_("passwordToCheck",n.passwordForm.get("newPassword").value),o(7),g("placeholder",h(39,19,"global.form.confirmpassword.placeholder")),o(3),s(n.passwordForm.get("confirmPassword").invalid&&(n.passwordForm.get("confirmPassword").dirty||n.passwordForm.get("confirmPassword").touched)?41:-1),o(2),_("disabled",n.passwordForm.invalid)}}function ce(t,d){if(t&1&&(e(0,`
    `),l(1,"div"),e(2,`
        `),l(3,"div",0),e(4,`
            `),p(5,me,47,23),r(),e(6,`
    `),r(),e(7,`
`)),t&2){let n=c();o(5),s(n.user?5:-1)}}var Fe=(()=>{class t{passwordService=x(z);accountService=x(W);fb=x(I);PASSWORD_MIN_LENGTH=v;PASSWORD_MAX_LENGTH=P;doNotMatch=!1;error=!1;success=!1;user;passwordForm;passwordResetEnabled=!1;ngOnInit(){this.accountService.identity().then(n=>{this.user=n,this.passwordResetEnabled=n?.internal||!1}),this.initializeForm()}initializeForm(){this.passwordForm||(this.passwordForm=this.fb.nonNullable.group({currentPassword:["",[u.required]],newPassword:["",[u.required,u.minLength(v),u.maxLength(P)]],confirmPassword:["",[u.required,u.minLength(v),u.maxLength(P)]]}))}changePassword(){this.error=!1,this.success=!1,this.doNotMatch=!1;let n=this.passwordForm.get(["newPassword"]).value;n!==this.passwordForm.get(["confirmPassword"]).value?this.doNotMatch=!0:this.passwordService.save(n,this.passwordForm.get(["currentPassword"]).value).subscribe({next:()=>this.success=!0,error:()=>this.error=!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["jhi-password"]],decls:1,vars:1,consts:[[1,"row","justify-content-center"],[1,"col-md-8"],["jhiTranslate","password.title",3,"translateValues"],["name","form","role","form",3,"ngSubmit","formGroup"],[1,"form-group"],["for","currentPassword","jhiTranslate","global.form.currentpassword",1,"form-control-label"],["type","password","id","currentPassword","name","currentPassword","autocomplete","current-password","formControlName","currentPassword","required","",1,"form-control",3,"placeholder"],["for","newPassword","jhiTranslate","global.form.newpassword",1,"form-control-label"],["type","password","id","newPassword","name","newPassword","autocomplete","new-password","formControlName","newPassword","required","",1,"form-control",3,"placeholder","maxlength"],[3,"passwordToCheck"],["for","confirmPassword","jhiTranslate","global.form.confirmpassword",1,"form-control-label"],["type","password","id","confirmPassword","name","confirmPassword","formControlName","confirmPassword","required","",1,"form-control",3,"placeholder"],["type","submit","jhiTranslate","password.form.button",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","password.messages.success",1,"alert","alert-success"],["jhiTranslate","password.messages.error",1,"alert","alert-danger"],["jhiTranslate","global.messages.error.dontmatch",1,"alert","alert-danger"],["jhiTranslate","global.messages.validate.oldpassword.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.newpassword.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.newpassword.minlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","global.messages.validate.newpassword.maxlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","global.messages.validate.confirmpassword.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.confirmpassword.minlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","global.messages.validate.confirmpassword.maxlength",1,"form-text","text-danger",3,"translateValues"]],template:function(i,m){i&1&&p(0,ce,8,1),i&2&&s(m.passwordResetEnabled?0:-1)},dependencies:[X,H,D,A,M,V,q,G,O,L,R,k,B],encapsulation:2})}return t})();export{Fe as PasswordComponent};
//# sourceMappingURL=password.component-QXSBCIBA.js.map
