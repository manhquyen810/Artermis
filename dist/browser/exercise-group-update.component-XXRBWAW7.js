import{a as L}from"./chunk-EJ5LGD43.js";import{c as B}from"./chunk-5MVJAZRV.js";import{j as N}from"./chunk-VZRSC3LP.js";import"./chunk-5SKDOIBQ.js";import{C as k,K as F,b as E,c as T,h as w,i as V,k as A,m as I,n as j}from"./chunk-WA5GEAJB.js";import{c as W}from"./chunk-JXJXC4DZ.js";import{d as D}from"./chunk-EDXSOKK5.js";import"./chunk-DID2YGL7.js";import{fa as R,tb as U}from"./chunk-Z4VHWOB5.js";import"./chunk-NOBD5HSR.js";import{a as q}from"./chunk-U54OSGNH.js";import{f as _,h as C}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import"./chunk-IOA4DPXY.js";import{Db as a,Dc as y,Ea as l,Ma as c,Mc as g,Na as u,Rc as G,Tb as b,cd as M,dd as e,kc as d,ld as h,md as v,nd as S,xc as i,yc as r,zc as n}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var ie=(()=>{class x{route=l(_);router=l(C);exerciseGroupService=l(L);alertService=l(W);alertType="info";courseId;exam;exerciseGroup;isSaving=!1;faBan=R;faSave=U;ngOnInit(){this.courseId=Number(this.route.snapshot.paramMap.get("courseId")),this.route.data.subscribe(({exam:s,exerciseGroup:o})=>{this.exam=s,this.exerciseGroup=o})}save(){this.isSaving=!0,this.exerciseGroup.id!==void 0?this.subscribeToSaveResponse(this.exerciseGroupService.update(this.courseId,this.exam.id,this.exerciseGroup)):(this.exerciseGroup.exam=this.exam,this.subscribeToSaveResponse(this.exerciseGroupService.create(this.courseId,this.exam.id,this.exerciseGroup)))}previousState(){this.router.navigate(["course-management",this.courseId,"exams",this.route.snapshot.paramMap.get("examId"),"exercise-groups"])}subscribeToSaveResponse(s){s.subscribe({next:()=>this.onSaveSuccess(),error:o=>this.onSaveError(o)})}onSaveSuccess(){this.isSaving=!1,this.previousState()}onSaveError(s){B(this.alertService,s),this.isSaving=!1}static \u0275fac=function(o){return new(o||x)};static \u0275cmp=b({type:x,selectors:[["jhi-exercise-group-update"]],decls:43,vars:8,consts:[["editForm","ngForm"],[3,"jhiTranslate"],["name","editForm","role","form",3,"ngSubmit"],[1,"form-group"],["for","title","jhiTranslate","artemisApp.examManagement.exerciseGroup.title",1,"form-check-label"],["required","","type","text","name","title","id","title",1,"form-control",3,"ngModelChange","ngModel"],[1,"form-check"],["type","checkbox","id","isMandatory","name","isMandatory",1,"form-check-input",3,"ngModelChange","ngModel"],["for","isMandatory","jhiTranslate","artemisApp.examManagement.exerciseGroup.mandatory",1,"form-check-label"],[3,"type","dismissible"],["jhiTranslate","artemisApp.examManagement.exerciseGroup.titleInfo"],[1,"mt-3"],["type","button",1,"btn","btn-secondary",3,"click"],[3,"icon"],["jhiTranslate","entity.action.cancel"],["type","submit","id","save-group",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","entity.action.save"]],template:function(o,t){if(o&1){let m=y();i(0,"div"),e(1,`
    `),n(2,"h4",1),e(3,`
    `),i(4,"form",2,0),g("ngSubmit",function(){return c(m),u(t.save())}),e(6,`
        `),i(7,"div",3),e(8,`
            `),n(9,"label",4),e(10,`
            `),i(11,"input",5),S("ngModelChange",function(p){return c(m),v(t.exerciseGroup.title,p)||(t.exerciseGroup.title=p),u(p)}),r(),e(12,`
        `),r(),e(13,`
        `),i(14,"div",6),e(15,`
            `),i(16,"input",7),S("ngModelChange",function(p){return c(m),v(t.exerciseGroup.isMandatory,p)||(t.exerciseGroup.isMandatory=p),u(p)}),r(),e(17,`
            `),n(18,"label",8),e(19,`
        `),r(),e(20,`
        `),i(21,"ngb-alert",9),e(22,`
            `),n(23,"span",10),e(24,`
        `),r(),e(25,`
        `),i(26,"div",11),e(27,`
            `),i(28,"button",12),g("click",function(){return c(m),u(t.previousState())}),n(29,"fa-icon",13),e(30,"\xA0"),n(31,"span",14),r(),e(32,`
            `),i(33,"button",15),e(34,`
                `),n(35,"fa-icon",13),e(36,"\xA0"),n(37,"span",16),e(38,`
            `),r(),e(39,`
        `),r(),e(40,`
    `),r(),e(41,`
`),r(),e(42,`
`)}if(o&2){let m=M(5);a(2),G("jhiTranslate",t.exerciseGroup.id?"artemisApp.examManagement.exerciseGroup.update":"artemisApp.examManagement.exerciseGroup.create"),a(9),h("ngModel",t.exerciseGroup.title),a(5),h("ngModel",t.exerciseGroup.isMandatory),a(5),d("type",t.alertType)("dismissible",!1),a(8),d("icon",t.faBan),a(4),d("disabled",m.form.invalid||t.isSaving),a(2),d("icon",t.faSave)}},dependencies:[q,F,j,T,E,w,V,k,I,A,N,D],encapsulation:2})}return x})();export{ie as ExerciseGroupUpdateComponent};
//# sourceMappingURL=exercise-group-update.component-XXRBWAW7.js.map
