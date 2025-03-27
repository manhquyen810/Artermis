import{a as J}from"./chunk-MPMTX2VR.js";import{C as O,J as W,K as z,L as X,c as V,e as f,h as D,i as G,n as q,s as I,v as H}from"./chunk-WA5GEAJB.js";import{g as h,h as g}from"./chunk-VK7JPHFE.js";import{a as B}from"./chunk-K3W6YFKH.js";import{a as Q}from"./chunk-U54OSGNH.js";import{f as k,i as M}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{O as L}from"./chunk-IOA4DPXY.js";import{Db as n,Dc as R,Ea as w,Ma as T,Mc as b,Na as S,Oc as u,Rc as C,Tb as y,Yc as N,Zb as _,Zc as E,_c as j,dd as e,kc as p,qd as A,rd as x,sc as a,xc as l,ya as F,yc as d,yd as v,zc as s,zd as P}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var K=(()=>{class t{http=w(L);save(i,o){return this.http.post("api/core/public/account/reset-password/finish",{key:i,newPassword:o})}static \u0275fac=function(o){return new(o||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $=["newPassword"],ee=()=>["/"],U=t=>({min:t}),Y=t=>({max:t});function te(t,m){t&1&&(e(0,`
            `),l(1,"div",4),e(2,`
                `),l(3,"strong"),e(4,"The password reset key is missing."),d(),e(5,`
            `),d(),e(6,`
        `))}function ie(t,m){t&1&&(e(0,`
            `),l(1,"div",5),e(2,`
                `),s(3,"span",6),e(4,`
            `),d(),e(5,`
        `))}function ne(t,m){t&1&&(e(0,`
            `),l(1,"div",7),e(2,`
                `),s(3,"span",8),e(4,`
            `),d(),e(5,`
        `))}function oe(t,m){t&1&&(e(0,`
            `),l(1,"div",9),e(2,`
                `),s(3,"span",10),e(4,`
                `),s(5,"a",11),e(6,`
            `),d(),e(7,`
        `)),t&2&&(n(5),p("routerLink",A(1,ee)))}function re(t,m){t&1&&(e(0,`
            `),s(1,"div",12),e(2,`
        `))}function se(t,m){t&1&&(e(0,`
                                    `),s(1,"small",21),e(2,`
                                `))}function ae(t,m){if(t&1&&(e(0,`
                                    `),s(1,"small",22),e(2,`
                                `)),t&2){let i=u(3);n(),p("translateValues",x(1,U,i.PASSWORD_MIN_LENGTH))}}function le(t,m){if(t&1&&(e(0,`
                                    `),s(1,"small",23),e(2,`
                                `)),t&2){let i=u(3);n(),p("translateValues",x(1,Y,i.PASSWORD_MAX_LENGTH))}}function de(t,m){if(t&1&&(e(0,`
                            `),l(1,"div"),e(2,`
                                `),_(3,se,3,0)(4,ae,3,3)(5,le,3,3),d(),e(6,`
                        `)),t&2){let i,o,r,c=u(2);n(3),a(!((i=c.passwordForm.get("newPassword"))==null||i.errors==null)&&i.errors.required?3:-1),n(),a(!((o=c.passwordForm.get("newPassword"))==null||o.errors==null)&&o.errors.minlength?4:-1),n(),a(!((r=c.passwordForm.get("newPassword"))==null||r.errors==null)&&r.errors.maxlength?5:-1)}}function me(t,m){t&1&&(e(0,`
                                    `),s(1,"small",24),e(2,`
                                `))}function ce(t,m){if(t&1&&(e(0,`
                                    `),s(1,"small",25),e(2,`
                                `)),t&2){let i=u(3);n(),p("translateValues",x(1,U,i.PASSWORD_MIN_LENGTH))}}function pe(t,m){if(t&1&&(e(0,`
                                    `),s(1,"small",26),e(2,`
                                `)),t&2){let i=u(3);n(),p("translateValues",x(1,Y,i.PASSWORD_MAX_LENGTH))}}function ue(t,m){if(t&1&&(e(0,`
                            `),l(1,"div"),e(2,`
                                `),_(3,me,3,0)(4,ce,3,3)(5,pe,3,3),d(),e(6,`
                        `)),t&2){let i,o,r,c=u(2);n(3),a(!((i=c.passwordForm.get("confirmPassword"))==null||i.errors==null)&&i.errors.required?3:-1),n(),a(!((o=c.passwordForm.get("confirmPassword"))==null||o.errors==null)&&o.errors.minlength?4:-1),n(),a(!((r=c.passwordForm.get("confirmPassword"))==null||r.errors==null)&&r.errors.maxlength?5:-1)}}function fe(t,m){if(t&1){let i=R();e(0,`
            `),l(1,"div"),e(2,`
                `),l(3,"form",13),b("ngSubmit",function(){T(i);let r=u();return S(r.finishReset())}),e(4,`
                    `),l(5,"div",14),e(6,`
                        `),s(7,"label",15),e(8,`
                        `),s(9,"input",16,0),v(11,"artemisTranslate"),e(12,`
                        `),_(13,de,7,3),s(14,"jhi-password-strength-bar",17),e(15,`
                    `),d(),e(16,`
                    `),l(17,"div",14),e(18,`
                        `),s(19,"label",18),e(20,`
                        `),s(21,"input",19),v(22,"artemisTranslate"),e(23,`
                        `),_(24,ue,7,3),d(),e(25,`
                    `),s(26,"button",20),e(27,`
                `),d(),e(28,`
            `),d(),e(29,`
        `)}if(t&2){let i=u();n(3),p("formGroup",i.passwordForm),n(6),C("placeholder",P(11,8,"global.form.newpassword.placeholder")),p("maxLength",i.PASSWORD_MAX_LENGTH),n(4),a(i.passwordForm.get("newPassword").invalid&&(i.passwordForm.get("newPassword").dirty||i.passwordForm.get("newPassword").touched)?13:-1),n(),p("passwordToCheck",i.passwordForm.get("newPassword").value),n(7),C("placeholder",P(22,10,"global.form.confirmpassword.placeholder")),n(3),a(i.passwordForm.get("confirmPassword").invalid&&(i.passwordForm.get("confirmPassword").dirty||i.passwordForm.get("confirmPassword").touched)?24:-1),n(2),p("disabled",i.passwordForm.invalid)}}var je=(()=>{class t{passwordResetFinishService=w(K);route=w(k);fb=w(W);newPassword;PASSWORD_MIN_LENGTH=h;PASSWORD_MAX_LENGTH=g;initialized=!1;doNotMatch=!1;error=!1;success=!1;key="";passwordForm;ngOnInit(){this.route.queryParams.subscribe(i=>{i.key&&(this.key=i.key),this.initialized=!0}),this.initializeForm()}initializeForm(){this.passwordForm||(this.passwordForm=this.fb.nonNullable.group({newPassword:["",[f.required,f.minLength(h),f.maxLength(g)]],confirmPassword:["",[f.required,f.minLength(h),f.maxLength(g)]]}))}ngAfterViewInit(){this.newPassword&&this.newPassword.nativeElement.focus()}finishReset(){this.doNotMatch=!1,this.error=!1;let i=this.passwordForm.get(["newPassword"]).value,o=this.passwordForm.get(["confirmPassword"]).value;i!==o?this.doNotMatch=!0:this.passwordResetFinishService.save(this.key,i).subscribe({next:()=>this.success=!0,error:()=>this.error=!0})}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=y({type:t,selectors:[["jhi-password-reset-finish"]],viewQuery:function(o,r){if(o&1&&N($,5),o&2){let c;E(c=j())&&(r.newPassword=c.first)}},decls:14,vars:6,consts:[["newPassword",""],[1,"row","justify-content-center"],[1,"col-md-4"],["jhiTranslate","reset.finish.title"],["jhiTranslate","reset.finish.messages.keymissing",1,"alert","alert-danger"],[1,"alert","alert-warning"],["jhiTranslate","reset.finish.messages.info"],[1,"alert","alert-danger"],["jhiTranslate","reset.finish.messages.error"],[1,"alert","alert-success"],["jhiTranslate","reset.finish.messages.success"],["jhiTranslate","reset.finish.messages.success-part2",1,"alert-link",3,"routerLink"],["jhiTranslate","global.messages.error.dontmatch",1,"alert","alert-danger"],["name","form","role","form",3,"ngSubmit","formGroup"],[1,"form-group"],["for","newPassword","jhiTranslate","global.form.newpassword",1,"form-control-label"],["type","password","id","newPassword","name","newPassword","formControlName","newPassword","required","",1,"form-control",3,"placeholder","maxLength"],[3,"passwordToCheck"],["for","confirmPassword","jhiTranslate","global.form.confirmpassword",1,"form-control-label"],["type","password","id","confirmPassword","name","confirmPassword","formControlName","confirmPassword","required","",1,"form-control",3,"placeholder"],["type","submit","jhiTranslate","reset.finish.form.button",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","global.messages.validate.newpassword.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.newpassword.minlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","global.messages.validate.newpassword.maxlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","global.messages.validate.confirmpassword.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.confirmpassword.minlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","global.messages.validate.confirmpassword.maxlength",1,"form-text","text-danger",3,"translateValues"]],template:function(o,r){o&1&&(l(0,"div",1),e(1,`
    `),l(2,"div",2),e(3,`
        `),s(4,"h1",3),e(5,`
        `),_(6,te,7,0)(7,ie,6,0)(8,ne,6,0)(9,oe,8,2)(10,re,3,0)(11,fe,30,12),d(),e(12,`
`),d(),e(13,`
`)),o&2&&(n(6),a(r.initialized&&!r.key?6:-1),n(),a(r.key&&!r.success?7:-1),n(),a(r.error?8:-1),n(),a(r.success?9:-1),n(),a(r.doNotMatch?10:-1),n(),a(r.key&&!r.success?11:-1))},dependencies:[Q,M,z,q,V,D,G,O,X,I,H,J,B],encapsulation:2})}return t})();export{je as PasswordResetFinishComponent};
//# sourceMappingURL=password-reset-finish.component-UWVQGG6S.js.map
