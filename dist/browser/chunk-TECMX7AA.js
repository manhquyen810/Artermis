import{a as ce,c as se,d as de,e as ue}from"./chunk-HK7MJBP6.js";import{K}from"./chunk-VZRSC3LP.js";import{K as J,a as X,c as B,h as $,m as H}from"./chunk-WA5GEAJB.js";import{a as oe}from"./chunk-K3W6YFKH.js";import{b as re,c as le,d as me}from"./chunk-EDXSOKK5.js";import{p as v}from"./chunk-DID2YGL7.js";import{Bd as ae,Zb as ie,ea as ee,i as Y,kb as te,vd as ne}from"./chunk-Z4VHWOB5.js";import{a as pe}from"./chunk-U54OSGNH.js";import{n as G,t as U}from"./chunk-IOA4DPXY.js";import{Ad as j,Db as a,Dc as M,Ed as W,Ma as h,Mc as k,Na as b,Oc as f,Pb as O,Qd as C,Rc as w,Tb as S,Ya as N,Yc as L,Za as m,Zb as c,Zc as R,_c as Z,ab as y,cd as s,dd as t,fd as z,kc as r,mc as V,pd as Q,rd as F,sc as g,sd as _,xa as A,xc as d,yc as u,yd as I,zc as p,zd as q}from"./chunk-5LC5EQRR.js";var ge=["dateInput"],_e=(e,o)=>({"is-invalid":e,"border-warning":o}),Ce=e=>({timeZone:e}),P=(e,o)=>({$implicit:e,icon:o}),xe=e=>({labelName:e});function ve(e,o){if(e&1&&(t(0,`
    `),d(1,"label",12),t(2),u(),t(3,`
`)),e&2){let i=f();a(2),z(`
        `,i.labelName(),`
    `)}}function De(e,o){if(e&1&&(t(0,`
    `),d(1,"fa-stack",13),t(2,`
        `),p(3,"fa-icon",14),t(4,`
    `),u(),t(5,`
`)),e&2){let i=f();a(),r("ngbTooltip",i.labelTooltip()),a(2),r("icon",i.faQuestionCircle)}}function he(e,o){if(e&1&&(t(0,`
    `),d(1,"fa-stack",15),I(2,"artemisTranslate"),t(3,`
        `),p(4,"fa-icon",16),t(5,`
        `),p(6,"fa-icon",17),t(7,`
    `),u(),t(8,`
`)),e&2){let i=f();a(),w("ngbTooltip",j(2,3,"entity.timeZoneWarning",F(6,Ce,i.currentTimeZone))),a(3),r("icon",i.faGlobe),a(2),r("icon",i.faClock)}}function be(e,o){}function ye(e,o){e&1&&c(0,be,0,0,"ng-template")}function ke(e,o){if(e&1&&(t(0,`
            `),c(1,ye,1,0,null,18),t(2,`
        `)),e&2){let i=f(),l=s(13),n=s(30);a(),r("ngTemplateOutlet",l)("ngTemplateOutletContext",_(2,P,n,i.faClock))}}function we(e,o){}function Fe(e,o){e&1&&c(0,we,0,0,"ng-template")}function Ie(e,o){if(e&1&&(t(0,`
            `),c(1,Fe,1,0,null,18),t(2,`
        `)),e&2){let i=f(),l=s(13),n=s(27);a(),r("ngTemplateOutlet",l)("ngTemplateOutletContext",_(2,P,n,i.faCalendarAlt))}}function Ee(e,o){}function Pe(e,o){e&1&&c(0,Ee,0,0,"ng-template")}function Ae(e,o){if(e&1&&(t(0,`
            `),c(1,Pe,1,0,null,18),t(2,`
        `)),e&2){let i=f(),l=s(13),n=s(24);a(),r("ngTemplateOutlet",l)("ngTemplateOutletContext",_(2,P,n,i.faCalendarAlt))}}function Ne(e,o){if(e&1&&(t(0,`
        `),d(1,"button",19),t(2,`
            `),p(3,"fa-icon",9),t(4,`
        `),u(),t(5,`
    `)),e&2){let i=o.$implicit,l=o.icon;a(),r("owlDateTimeTrigger",i),a(2),r("icon",l)}}function Oe(e,o){if(e&1&&(t(0,`
    `),p(1,"div",20),t(2,`
`)),e&2){let i=f();a(),r("translateValues",F(1,xe,i.labelName()))}}function Se(e,o){if(e&1&&(t(0,`
    `),d(1,"div",21),t(2,`
        `),p(3,"fa-icon",22),t(4,`
        `),p(5,"span",23),I(6,"artemisTranslate"),t(7,`
    `),u(),t(8,`
`)),e&2){let i=f();a(3),r("icon",i.faTriangleExclamation),a(2),w("ngbTooltip",q(6,2,"entity.warningToolTip"))}}var E=function(e){return e[e.CALENDAR=0]="CALENDAR",e[e.TIMER=1]="TIMER",e[e.DEFAULT=2]="DEFAULT",e}(E||{}),Je=(()=>{class e{faCalendarAlt=Y;faGlobe=ee;faClock=ie;faQuestionCircle=te;faCircleXmark=ae;faTriangleExclamation=ne;dateInput;labelName=m();hideLabelName=m(!1);labelTooltip=m();value=O();disabled=m(!1);error=m();warning=m();requiredField=m(!1);startAt=m();min=m();max=m();shouldDisplayTimeZoneWarning=m(!0);pickerType=m(E.DEFAULT);valueChange=N();isInputValid=y(!1);dateInputValue=y("");isValid=C(()=>!(this.error()||!this.isInputValid()||this.requiredField()&&!this.dateInputValue()||this.warning()));updateSignals(){this.isInputValid.set(!this.dateInput?.invalid),this.dateInputValue.set(this.dateInput?.value)}onChange;valueChanged(){this.valueChange.emit(),this.updateSignals()}writeValue(i){v.isDayjs(i)?this.value.set(i.toDate()):this.value.set(i),this.updateSignals()}registerOnTouched(i){}registerOnChange(i){this.onChange=i}updateField(i){this.value.set(i),this.onChange?.(v(this.value())),this.valueChanged()}get currentTimeZone(){return Intl.DateTimeFormat().resolvedOptions().timeZone}startDate=C(()=>this.convertToDate(this.startAt?.()??v().startOf("minutes")));minDate=C(()=>this.convertToDate(this.min?.()));maxDate=C(()=>this.convertToDate(this.max?.()));convertToDate(i){return i!=null&&i.isValid()?i.toDate():null}clearDate(){this.dateInput.reset(void 0),this.updateSignals()}DateTimePickerType=E;static \u0275fac=function(l){return new(l||e)};static \u0275cmp=S({type:e,selectors:[["jhi-date-time-picker"]],viewQuery:function(l,n){if(l&1&&L(ge,5),l&2){let T;R(T=Z())&&(n.dateInput=T.first)}},inputs:{labelName:[1,"labelName"],hideLabelName:[1,"hideLabelName"],labelTooltip:[1,"labelTooltip"],value:[1,"value"],disabled:[1,"disabled"],error:[1,"error"],warning:[1,"warning"],requiredField:[1,"requiredField"],startAt:[1,"startAt"],min:[1,"min"],max:[1,"max"],shouldDisplayTimeZoneWarning:[1,"shouldDisplayTimeZoneWarning"],pickerType:[1,"pickerType"]},outputs:{value:"valueChange",valueChange:"valueChange"},features:[Q([{provide:X,multi:!0,useExisting:A(()=>e)}])],decls:35,vars:21,consts:[["dateInput","ngModel"],["owlTrigger",""],["dtDefault",""],["dtCalendar",""],["dtTimer",""],[1,"d-flex"],["id","date-input-field","name","datePicker",1,"form-control","position-relative","ps-5",3,"ngModelChange","ngClass","ngModel","disabled","min","max","owlDateTime"],[1,"position-relative"],["type","button",1,"btn","position-absolute",2,"right","0",3,"click"],[3,"icon"],[3,"startAt"],[3,"pickerType"],["for","date-input-field",1,"form-control-label","col"],[1,"text-secondary","icon-full-size",3,"ngbTooltip"],["stackItemSize","1x",3,"icon"],[1,"icon-full-size",3,"ngbTooltip"],["stackItemSize","1x",1,"text-lightgrey",3,"icon"],["stackItemSize","1x","transform","shrink-6 down-5 right-5",1,"text-secondary",3,"icon"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button",1,"btn","position-absolute",3,"owlDateTimeTrigger"],["jhiTranslate","entity.dateMissingOrNotValid",1,"invalid-feedback",3,"translateValues"],[1,"invalid-feedback"],[1,"text-warning",3,"icon"],["jhiTranslate","entity.warningError",1,"visible-date-warning",3,"ngbTooltip"]],template:function(l,n){if(l&1){let T=M();c(0,ve,4,1)(1,De,6,2)(2,he,9,8),d(3,"div",5),t(4,`
    `),d(5,"input",6,0),k("ngModelChange",function(D){return h(T),b(n.updateField(D))}),u(),t(7,`
    `),c(8,ke,3,5)(9,Ie,3,5)(10,Ae,3,5),t(11,`

    `),c(12,Ne,6,2,"ng-template",null,1,W),t(14,`
    `),d(15,"div",7),t(16,`
        `),d(17,"button",8),k("click",function(){return h(T),b(n.clearDate())}),t(18,`
            `),p(19,"fa-icon",9),t(20,`
        `),u(),t(21,`
    `),u(),t(22,`

    `),p(23,"owl-date-time",10,2),t(25,`
    `),p(26,"owl-date-time",11,3),t(28,`
    `),p(29,"owl-date-time",11,4),t(31,`
`),u(),t(32,`
`),c(33,Oe,3,3)(34,Se,9,4)}if(l&2){let T,x=s(6),D=s(24),fe=s(27),Te=s(30);g(n.labelName()&&!n.hideLabelName()?0:-1),a(),g(n.labelTooltip()?1:-1),a(),g(n.shouldDisplayTimeZoneWarning()?2:-1),a(3),V("ng-invalid",!n.isValid()),r("ngClass",_(18,_e,!n.isValid(),n.warning()))("ngModel",n.value())("disabled",n.disabled())("min",n.minDate())("max",n.maxDate())("owlDateTime",n.pickerType()===n.DateTimePickerType.CALENDAR?fe:n.pickerType()===n.DateTimePickerType.TIMER?Te:D),a(3),g((T=n.pickerType())===n.DateTimePickerType.TIMER?8:T===n.DateTimePickerType.CALENDAR?9:10),a(11),r("icon",n.faCircleXmark),a(4),r("startAt",n.startDate()),a(3),r("pickerType","calendar"),a(3),r("pickerType","timer"),a(4),g(x.invalid||n.requiredField()&&!x.value?33:-1),a(),g(n.warning()?34:-1)}},dependencies:[le,K,me,re,J,B,$,H,ue,ce,de,se,G,U,pe,oe],styles:[".icon-full-size[_ngcontent-%COMP%]{height:1rem;width:1rem}.form-control.is-invalid[_ngcontent-%COMP%]{background-image:none}.visible-date-warning[_ngcontent-%COMP%]{color:var(--bs-body-color)!important}.border-warning[_ngcontent-%COMP%]{border-color:var(--warning)!important}"]})}return e})();export{E as a,Je as b};
//# sourceMappingURL=chunk-TECMX7AA.js.map
