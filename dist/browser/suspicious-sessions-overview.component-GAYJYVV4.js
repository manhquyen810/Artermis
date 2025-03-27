import{a as r}from"./chunk-X4WQDEX3.js";import{c as b}from"./chunk-JNO6DNVW.js";import"./chunk-EELXLOHY.js";import{e as y}from"./chunk-5GXY5RYT.js";import{a as B}from"./chunk-K3W6YFKH.js";import"./chunk-DID2YGL7.js";import{a as O}from"./chunk-U54OSGNH.js";import{i as C,m as N}from"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{E as M,n as g}from"./chunk-IOA4DPXY.js";import{Db as n,Oc as E,Tb as v,Za as h,Zb as F,dd as e,ed as c,fd as _,kc as l,rd as R,sc as D,uc as S,vc as d,wc as x,xc as o,yc as a,yd as T,zc as p,zd as f}from"./chunk-5LC5EQRR.js";import"./chunk-3E746U5Y.js";var j=["jhi-suspicious-sessions",""];function $(t,m){if(t&1&&(e(0,`
    `),o(1,"tr"),e(2,`
        `),o(3,"th",0),e(4),a(),e(5,`
        `),o(6,"td",1),e(7),a(),e(8,`
        `),o(9,"td",1),e(10),a(),e(11,`
        `),o(12,"td"),e(13),T(14,"artemisDate"),a(),e(15,`
        `),o(16,"td"),e(17,`
            `),o(18,"a",2),e(19),a(),e(20,`
        `),a(),e(21,`
        `),o(22,"td"),e(23),a(),e(24,`
    `),a(),e(25,`
`)),t&2){let i=m.$implicit,s=E();n(4),c(i.id),n(2),l("ngClass",s.suspiciousFingerprint?"suspicious":""),n(),c(i.browserFingerprintHash),n(2),l("ngClass",s.suspiciousIpAddress?"suspicious":""),n(),c(i.ipAddress),n(3),c(f(14,9,i.createdDate)),n(5),l("routerLink",s.getStudentExamLink(i.studentExam)),n(),_(`
                `,i.studentExam.id,`
            `),n(4),c(i.studentExam==null||i.studentExam.user==null?null:i.studentExam.user.login)}}var w=(()=>{class t{suspiciousSessions=h.required();suspiciousFingerprint=!1;suspiciousIpAddress=!1;ngOnInit(){this.suspiciousFingerprint=this.isSuspiciousFor(r.DIFFERENT_STUDENT_EXAMS_SAME_BROWSER_FINGERPRINT)||this.isSuspiciousFor(r.SAME_STUDENT_EXAM_DIFFERENT_BROWSER_FINGERPRINTS),this.suspiciousIpAddress=this.isSuspiciousFor(r.DIFFERENT_STUDENT_EXAMS_SAME_IP_ADDRESS)||this.isSuspiciousFor(r.SAME_STUDENT_EXAM_DIFFERENT_IP_ADDRESSES)||this.isSuspiciousFor(r.IP_ADDRESS_OUTSIDE_OF_RANGE)}getStudentExamLink(i){let s=i.id,u=i.exam?.course?.id,A=i.exam?.id;return`/course-management/${u}/exams/${A}/student-exams/${s}`}isSuspiciousFor(i){return this.suspiciousSessions().examSessions.some(s=>s.suspiciousReasons.includes(i))}static \u0275fac=function(s){return new(s||t)};static \u0275cmp=v({type:t,selectors:[["","jhi-suspicious-sessions",""]],inputs:{suspiciousSessions:[1,"suspiciousSessions"]},attrs:j,decls:2,vars:0,consts:[["scope","row"],[3,"ngClass"],[3,"routerLink"]],template:function(s,u){s&1&&d(0,$,26,11,null,null,S),s&2&&x(u.suspiciousSessions().examSessions)},dependencies:[b,N,C,M,g],styles:[".suspicious[_ngcontent-%COMP%]{color:var(--bs-warning)}"]})}return t})();var U=t=>({range:t});function k(t,m){t&1&&(e(0,`
                `),o(1,"span"),e(2,","),a(),e(3,`
            `))}function X(t,m){if(t&1&&(e(0,`
            `),p(1,"span",12),e(2,`
            `),F(3,k,4,0)),t&2){let i,s=m.$implicit,u=m.$index,A=E().$implicit,I=E();n(),l("jhiTranslate",I.mapEnumToTranslationString(s))("translateValues",R(3,U,I.ipSubnet)),n(2),D(u<((i=A.examSessions.at(0))==null||i.suspiciousReasons==null?null:i.suspiciousReasons.length)-1?3:-1)}}function G(t,m){if(t&1&&(e(0,`
    `),o(1,"p",1),e(2),T(3,"artemisTranslate"),o(4,"span",2),e(5),a(),e(6,`
    `),a(),e(7,`
    `),o(8,"p"),e(9),T(10,"artemisTranslate"),e(11,`
        `),d(12,X,4,5,null,null,S),a(),e(14,`
    `),o(15,"div",3),e(16,`
        `),o(17,"table",4),e(18,`
            `),o(19,"thead"),e(20,`
                `),o(21,"tr"),e(22,`
                    `),p(23,"th",5),e(24,`
                    `),p(25,"th",6),e(26,`
                    `),p(27,"th",7),e(28,`
                    `),p(29,"th",8),e(30,`
                    `),p(31,"th",9),e(32,`
                    `),p(33,"th",10),e(34,`
                `),a(),e(35,`
            `),a(),e(36,`
            `),p(37,"tbody",11),e(38,`
        `),a(),e(39,`
    `),a(),e(40,`
`)),t&2){let i,s=m.$implicit,u=m.$index;n(2),_(`
        `,f(3,4,"artemisApp.examManagement.suspiciousBehavior.suspiciousSessions.case"),`
        `),n(3),c(u+1),n(4),_(`
        `,f(10,6,"artemisApp.examManagement.suspiciousBehavior.suspiciousSessions.reasons"),`
        `),n(3),x((i=s.examSessions.at(0))==null?null:i.suspiciousReasons),n(25),l("suspiciousSessions",s)}}var se=(()=>{class t{suspiciousSessions=[];ipSubnet;mapEnumToTranslationString(i){switch(i){case r.DIFFERENT_STUDENT_EXAMS_SAME_IP_ADDRESS:return"artemisApp.examManagement.suspiciousBehavior.suspiciousSessions.sameIpAddressDifferentStudentExams";case r.DIFFERENT_STUDENT_EXAMS_SAME_BROWSER_FINGERPRINT:return"artemisApp.examManagement.suspiciousBehavior.suspiciousSessions.sameBrowserFingerprintDifferentStudentExams";case r.SAME_STUDENT_EXAM_DIFFERENT_IP_ADDRESSES:return"artemisApp.examManagement.suspiciousBehavior.suspiciousSessions.differentIpAddressesSameStudentExam";case r.SAME_STUDENT_EXAM_DIFFERENT_BROWSER_FINGERPRINTS:return"artemisApp.examManagement.suspiciousBehavior.suspiciousSessions.differentBrowserFingerprintsSameStudentExam";case r.IP_ADDRESS_OUTSIDE_OF_RANGE:return"artemisApp.examManagement.suspiciousBehavior.suspiciousSessions.ipOutsideOfRange"}}ngOnInit(){this.suspiciousSessions=y(history.state.suspiciousSessions),this.ipSubnet=history.state.ipSubnet}static \u0275fac=function(s){return new(s||t)};static \u0275cmp=v({type:t,selectors:[["jhi-suspicious-sessions-overview"]],decls:4,vars:0,consts:[["jhiTranslate","artemisApp.examManagement.suspiciousBehavior.suspiciousSessions.title",1,"mb-3"],[1,"mb-0"],[1,"bold"],[1,"table-responsive",2,"overflow-x","auto"],[1,"table"],["scope","col","jhiTranslate","artemisApp.examSession.id"],["scope","col","jhiTranslate","artemisApp.examSession.browserFingerprintHash"],["scope","col","jhiTranslate","artemisApp.examSession.ipAddress"],["scope","col","jhiTranslate","artemisApp.examSession.createdDate"],["scope","col","jhiTranslate","artemisApp.examSession.studentExamId"],["scope","col","jhiTranslate","artemisApp.examSession.userLogin"],["jhi-suspicious-sessions","",3,"suspiciousSessions"],[1,"bold",3,"jhiTranslate","translateValues"]],template:function(s,u){s&1&&(p(0,"h5",0),e(1,`
`),d(2,G,41,8,null,null,S)),s&2&&(n(2),x(u.suspiciousSessions))},dependencies:[w,O,B],styles:[".table[_ngcontent-%COMP%]{table-layout:fixed}"]})}return t})();export{se as SuspiciousSessionsOverviewComponent};
//# sourceMappingURL=suspicious-sessions-overview.component-GAYJYVV4.js.map
