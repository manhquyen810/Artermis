import{a as le}from"./chunk-2D32KPWA.js";import{D as me}from"./chunk-RTOKZMYN.js";import{b}from"./chunk-TECMX7AA.js";import{f as ie}from"./chunk-MLVGKM2P.js";import{c as q}from"./chunk-5SKDOIBQ.js";import{J as X,K as Z,L as ee,c as $,e as U,h as Y,i as Q,k as W,n as J,s as z,v as K}from"./chunk-WA5GEAJB.js";import{a as oe}from"./chunk-K3W6YFKH.js";import{d as re}from"./chunk-EDXSOKK5.js";import{p as G}from"./chunk-DID2YGL7.js";import{Oc as ne}from"./chunk-Z4VHWOB5.js";import{a as ae}from"./chunk-U54OSGNH.js";import{h as O}from"./chunk-M6Z6DKZQ.js";import{c as te}from"./chunk-E2KBL4LX.js";import{O as P}from"./chunk-IOA4DPXY.js";import{Db as m,Dc as k,Ea as c,La as M,Ma as f,Mb as L,Mc as S,Na as C,Oc as s,Qd as R,Tb as j,U as E,Ya as T,Za as v,Zb as h,ad as N,bd as A,dd as t,f as D,fd as y,kc as d,ld as B,md as I,nd as H,sc as x,xc as r,ya as V,yc as a,yd as p,z as w,zc as l,zd as u}from"./chunk-5LC5EQRR.js";import{a as F}from"./chunk-3E746U5Y.js";var we=(()=>{class n{httpClient=c(P);lectureUnitService=c(ie);resourceURL="api/lecture";create(e,i){return this.httpClient.post(`${this.resourceURL}/lectures/${i}/text-units`,e,{observe:"response"}).pipe(w(o=>this.lectureUnitService.convertLectureUnitResponseDatesFromServer(o)))}findById(e,i){return this.httpClient.get(`${this.resourceURL}/lectures/${i}/text-units/${e}`,{observe:"response"}).pipe(w(o=>this.lectureUnitService.convertLectureUnitResponseDatesFromServer(o)))}update(e,i){return this.httpClient.put(`${this.resourceURL}/lectures/${i}/text-units`,e,{observe:"response"}).pipe(w(o=>this.lectureUnitService.convertLectureUnitResponseDatesFromServer(o)))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ce(n,_){n&1&&(t(0,`
                                `),l(1,"div",15),t(2,`
                            `))}function de(n,_){n&1&&(t(0,`
                                `),l(1,"div",16),t(2,`
                            `))}function pe(n,_){if(n&1&&(t(0,`
                        `),r(1,"div",14),t(2,`
                            `),h(3,ce,3,0)(4,de,3,0),a(),t(5,`
                    `)),n&2){let e=s(2);m(3),x(!(e.nameControl==null||e.nameControl.errors==null)&&e.nameControl.errors.required?3:-1),m(),x(!(e.nameControl==null||e.nameControl.errors==null)&&e.nameControl.errors.maxlength?4:-1)}}function ue(n,_){if(n&1){let e=k();t(0,`
                            `),r(1,"button",17),S("click",function(){f(e);let o=s(2);return C(o.cancelForm())}),t(2,`
                                `),l(3,"fa-icon",18),t(4,"\xA0"),l(5,"span",19),t(6,`
                            `),a(),t(7,`
                        `)}if(n&2){let e=s(2);m(3),d("icon",e.faTimes)}}function xe(n,_){if(n&1){let e=k();t(0,`
            `),r(1,"form",2),S("ngSubmit",function(){f(e);let o=s();return C(o.submitForm())}),t(2,`
                `),r(3,"div",3),t(4,`
                    `),r(5,"label",4),t(6),p(7,"artemisTranslate"),a(),t(8,`
                    `),l(9,"input",5),p(10,"artemisTranslate"),t(11,`
                    `),h(12,pe,6,2),a(),t(13,`
                `),r(14,"div",3),t(15,`
                    `),l(16,"jhi-date-time-picker",6),p(17,"artemisTranslate"),t(18,`
                `),a(),t(19,`
                `),r(20,"div",3),t(21,`
                    `),l(22,"jhi-competency-selection",7),p(23,"artemisTranslate"),p(24,"artemisTranslate"),t(25,`
                `),a(),t(26,`
                `),r(27,"div",3),t(28,`
                    `),l(29,"label",8),t(30,`
                    `),r(31,"small",9),t(32),p(33,"artemisTranslate"),r(34,"a",10),t(35," GitHub Markdown Guide"),a(),t(36,`
                    `),a(),t(37,`
                    `),t(38,`
                    `),r(39,"jhi-markdown-editor-monaco",11),H("markdownChange",function(o){f(e);let g=s();return I(g.content,o)||(g.content=o),C(o)}),S("markdownChange",function(o){f(e);let g=s();return C(g.onMarkdownChange(o))}),a(),t(40,`
                `),a(),t(41,`
                `),r(42,"div",0),t(43,`
                    `),r(44,"div",1),t(45,`
                        `),r(46,"button",12),t(47,`
                            `),l(48,"span",13),t(49,`
                        `),a(),t(50,`
                        `),h(51,ue,8,1),a(),t(52,`
                `),a(),t(53,`
            `),a(),t(54,`
        `)}if(n&2){let e=s();m(),d("formGroup",e.form),m(5),y("",u(7,11,"artemisApp.textUnit.createTextUnit.name"),"*"),m(3),d("placeholder",u(10,13,"artemisApp.textUnit.createTextUnit.namePlaceHolder")),m(3),x(e.nameControl!=null&&e.nameControl.invalid&&(e.nameControl!=null&&e.nameControl.dirty||e.nameControl!=null&&e.nameControl.touched)?12:-1),m(4),d("labelName",u(17,15,"artemisApp.lectureUnit.releaseDate")),m(6),d("labelName",u(23,17,"artemisApp.competency.link.title"))("labelTooltip",u(24,19,"artemisApp.competency.link.lectureUnit")),m(10),y(`
                        `,u(33,21,"artemisApp.textUnit.markdownHelp"),`
                        `),m(7),B("markdown",e.content),m(7),d("disabled",!e.isFormValid()),m(5),x(e.hasCancelButton()?51:-1)}}var He=(()=>{class n{router=c(O);translateService=c(te);faTimes=ne;formData=v();isEditMode=v(!1);formSubmitted=T();hasCancelButton=v(!1);onCancel=T();datePickerComponent=L(b);content;contentLoadedFromCache=!1;firstMarkdownChangeHappened=!1;formBuilder=c(X);form=this.formBuilder.group({name:[void 0,[U.required,U.maxLength(255)]],releaseDate:[void 0],competencyLinks:[void 0]});statusChanges=q(this.form.statusChanges??"INVALID");isFormValid=R(()=>this.statusChanges()==="VALID"&&this.datePickerComponent()?.isValid());markdownChanges=new D;markdownChangesSubscription;get nameControl(){return this.form.get("name")}get releaseDateControl(){return this.form.get("releaseDate")}ngOnChanges(){this.isEditMode()&&this.formData()&&this.setFormValues(this.formData())}ngOnDestroy(){this.markdownChangesSubscription.unsubscribe()}ngOnInit(){if(window.localStorage&&window.localStorage.getItem(this.router.url)){let e=JSON.parse(window.localStorage.getItem(this.router.url));confirm(this.translateService.instant("artemisApp.textUnit.cachedMarkdown")+" "+e.date)&&(this.content=e.markdown,this.contentLoadedFromCache=!0)}this.markdownChangesSubscription=this.markdownChanges.pipe(E(500)).subscribe(e=>{this.firstMarkdownChangeHappened?this.writeToLocalStorage(e):this.firstMarkdownChangeHappened=!0})}setFormValues(e){this.form.patchValue(e),this.contentLoadedFromCache||(this.content=e.content)}submitForm(){let e=F({},this.form.value);e.content=this.content,window.localStorage&&localStorage.removeItem(this.router.url),this.formSubmitted.emit(e)}onMarkdownChange(e){this.markdownChanges.next(e)}writeToLocalStorage(e){if(window.localStorage){let i={markdown:e,date:G().format("MMM DD YYYY, HH:mm:ss")};localStorage.setItem(this.router.url,JSON.stringify(i))}}cancelForm(){this.onCancel.emit()}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["jhi-text-unit-form"]],viewQuery:function(i,o){i&1&&N(o.datePickerComponent,b,5),i&2&&A()},inputs:{formData:[1,"formData"],isEditMode:[1,"isEditMode"],hasCancelButton:[1,"hasCancelButton"]},outputs:{formSubmitted:"formSubmitted",onCancel:"onCancel"},features:[M],decls:7,vars:1,consts:[[1,"row"],[1,"col-12"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","name",1,"required"],["type","text","id","name","formControlName","name",1,"form-control",3,"placeholder"],["id","pick-releaseDate","formControlName","releaseDate",3,"labelName"],["id","competencies","formControlName","competencyLinks",3,"labelName","labelTooltip"],["for","content","jhiTranslate","artemisApp.textUnit.createTextUnit.content",1,"d-block"],["id","contentHelp",1,"form-text","mb-1","text-body-secondary"],["href","https://guides.github.com/features/mastering-markdown/"],["aria-describedby","contentHelp","id","content",1,"markdown-editor",3,"markdownChange","markdown"],["id","submitButton","type","submit",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","entity.action.submit"],[1,"alert","alert-danger"],["jhiTranslate","artemisApp.textUnit.createTextUnit.nameRequiredValidationError"],["jhiTranslate","artemisApp.textUnit.createTextUnit.nameMaxLengthValidationError"],["type","button",1,"btn","btn-secondary",3,"click"],[3,"icon"],["jhiTranslate","entity.action.cancel"]],template:function(i,o){i&1&&(r(0,"form",0),t(1,`
    `),r(2,"div",1),t(3,`
        `),h(4,xe,55,23),a(),t(5,`
`),a(),t(6,`
`)),i&2&&(m(4),x(o.form?4:-1))},dependencies:[Z,J,$,Y,Q,W,ee,z,K,ae,b,le,me,re,oe],encapsulation:2})}return n})();export{we as a,He as b};
//# sourceMappingURL=chunk-5MIORMFK.js.map
