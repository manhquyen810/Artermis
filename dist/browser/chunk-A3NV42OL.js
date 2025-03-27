import{d as h}from"./chunk-EDXSOKK5.js";import{p as x}from"./chunk-DID2YGL7.js";import{wd as g}from"./chunk-Z4VHWOB5.js";import{a as D}from"./chunk-U54OSGNH.js";import{Db as s,La as p,Oc as u,Tb as d,Zb as r,dd as i,kc as f,sc as a,xc as m,yc as c,zc as o}from"./chunk-5LC5EQRR.js";function _(t,l){t&1&&(i(0,`
                        `),o(1,"span",2),i(2,`
                    `))}function v(t,l){t&1&&(i(0,`
                        `),o(1,"span",3),i(2,`
                    `))}function w(t,l){if(t&1&&(i(0,`
                `),m(1,"div",0),i(2,`
                    `),o(3,"fa-icon",1),i(4,`
                    `),r(5,_,3,0)(6,v,3,0),c(),i(7,`
            `)),t&2){let e=u();s(3),f("icon",e.faExclamationTriangle),s(2),a(e.isBeforeExerciseDueDate?5:-1),s(),a(e.isBeforeExerciseDueDate?-1:6)}}var j=(()=>{class t{exercise;submissions=[];isBeforeExerciseDueDate=!1;showWarning=!1;faExclamationTriangle=g;ngOnChanges(){if(this.exercise.dueDate){let e=x();this.isBeforeExerciseDueDate=e.isBefore(this.exercise.dueDate),this.showWarning=e.isBefore(this.getLatestDueDate())&&!this.exercise.allowFeedbackRequests}}getLatestDueDate(){return this.submissions.map(e=>e.participation?.individualDueDate).reduce((e,n)=>n&&n.isAfter(e)?n:e,this.exercise.dueDate)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["jhi-assessment-warning"]],inputs:{exercise:"exercise",submissions:"submissions"},features:[p],decls:5,vars:1,consts:[[1,"card-header"],["size","2x","placement","bottom auto",1,"text-warning",3,"icon"],["jhiTranslate","artemisApp.assessment.dashboard.warning"],["jhiTranslate","artemisApp.assessment.dashboard.warningIndividual"]],template:function(n,C){n&1&&(i(0,`
        `),m(1,"h6"),i(2,`
            `),r(3,w,8,3),c(),i(4,`
    `)),n&2&&(s(3),a(C.showWarning?3:-1))},dependencies:[h,D],encapsulation:2})}return t})();export{j as a};
//# sourceMappingURL=chunk-A3NV42OL.js.map
