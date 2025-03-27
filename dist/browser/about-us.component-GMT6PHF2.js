import{a as I}from"./chunk-VK7JPHFE.js";import{c as N}from"./chunk-BNDLMKXK.js";import"./chunk-BQNBT6PW.js";import"./chunk-5GXY5RYT.js";import{a as O}from"./chunk-K3W6YFKH.js";import"./chunk-XUCCGZJR.js";import"./chunk-HKBU2OOC.js";import"./chunk-5ZXXURLP.js";import"./chunk-NOBD5HSR.js";import{a as k}from"./chunk-U54OSGNH.js";import"./chunk-M6Z6DKZQ.js";import"./chunk-3Y6745HG.js";import"./chunk-E2KBL4LX.js";import"./chunk-PZTBTDSR.js";import{O as j}from"./chunk-IOA4DPXY.js";import{Db as a,Ea as u,Oc as h,Rc as T,Tb as C,Zb as S,dd as t,ed as p,fd as A,kc as d,sc as x,uc as g,vc as f,wc as b,xb as c,xc as i,ya as _,yc as n,yd as w,zc as o,zd as y}from"./chunk-5LC5EQRR.js";import{a as E,b as U}from"./chunk-3E746U5Y.js";var R=(()=>{class r{http=u(j);STATIC_CONTENT_URL="public/content/";getStaticHtmlFromArtemisServer(e){return this.http.get(`${this.STATIC_CONTENT_URL}${e}`,{responseType:"text"})}getStaticJsonFromArtemisServer(e){return this.http.get(`${this.STATIC_CONTENT_URL}${e}`)}static \u0275fac=function(l){return new(l||r)};static \u0275prov=_({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var v=class{fullName;photoDirectory;sortBy;role;website;constructor(m,e,l,s,P){this.fullName=m,this.photoDirectory=e,this.sortBy=l,this.role=s,this.website=P}getSortIndex(){return this.sortBy||this.fullName.split(" ").last()||this.fullName}};function M(r,m){if(r&1&&(t(0,`
                `),i(1,"li"),t(2,`
                    `),o(3,"span",17),t(4,`
                `),n(),t(5,`
            `)),r&2){let e=m.$implicit;a(3),d("jhiTranslate","artemisApp.aboutUsOverview."+e[0]+".text")("translateValues",e[1])}}function L(r,m){if(r&1&&(t(0,`
                `),i(1,"div",19),t(2,`
                    `),i(3,"div",20),t(4,`
                        `),i(5,"div",21),t(6,`
                            `),i(7,"div",22),o(8,"img",23),n(),t(9,`
                            `),i(10,"div",24),t(11,`
                                `),i(12,"h4",25),t(13),n(),t(14,`
                                `),i(15,"h5"),t(16),w(17,"artemisTranslate"),n(),t(18,`
                                `),i(19,"span"),t(20,`
                                    `),o(21,"i"),t(22,`
                                    `),o(23,"a",26),t(24,`
                                `),n(),t(25,`
                            `),n(),t(26,`
                        `),n(),t(27,`
                    `),n(),t(28,`
                `),n(),t(29,`
            `)),r&2){let e=m.$implicit;a(8),d("src",e.photoDirectory,c),a(5),p(e.fullName),a(3),p(y(17,4,"artemisApp.aboutUsOverview.roles."+e.role)),a(7),T("href",e.website,c)}}function B(r,m){if(r&1&&(t(0,`
        `),i(1,"div",18),t(2,`
            `),f(3,L,30,6,null,null,g),n(),t(5,`
    `)),r&2){let e=h();a(3),b(e.data.projectManagers)}}function z(r,m){if(r&1&&(t(0,`
                    `),i(1,"div",29),t(2,`
                        `),o(3,"img",30),t(4,`
                        `),i(5,"div",31),t(6,`
                            `),i(7,"small",32),t(8),n(),t(9,`
                        `),n(),t(10,`
                    `),n(),t(11,`
                `)),r&2){let e=m.$implicit;a(3),d("src",e.photoDirectory,c),a(5),p(e.fullName)}}function $(r,m){if(r&1&&(t(0,`
        `),i(1,"div",10),t(2,`
            `),o(3,"h3",27),t(4,`
            `),i(5,"div",28),t(6,`
                `),f(7,z,12,2,null,null,g),n(),t(9,`
        `),n(),t(10,`
    `)),r&2){let e=h();a(7),b(e.data.contributors)}}function D(r,m){if(r&1&&(t(0,`
            `),i(1,"div"),t(2,`
                `),o(3,"div",33),t(4,`
                `),i(5,"div",13),t(6),n(),t(7,`
            `),n(),t(8,`
        `)),r&2){let e=h();a(6),p(e.operatorAdminName)}}function q(r,m){if(r&1&&(t(0,`
            `),i(1,"div"),t(2,`
                `),o(3,"div",34),t(4,`
                `),i(5,"div",13),t(6,`
                    `),i(7,"a",35),t(8),n(),t(9,`
                `),n(),t(10,`
            `),n(),t(11,`
        `)),r&2){let e=h();a(7),d("href",e.email,c),a(),A(`
                        `,e.operatorContactEmail,`
                    `)}}var nt=(()=>{class r{profileService=u(N);staticContentService=u(R);ISSUE_BASE_URL="https://github.com/ls1intum/Artemis/issues/new?projects=ls1intum/1";BUG_REPORT_URL=`${this.ISSUE_BASE_URL}&labels=bug&template=bug-report.yml`;FEATURE_REQUEST_URL=`${this.ISSUE_BASE_URL}&labels=feature&template=feature-request.yml`;RELEASE_NOTES_URL=`https://github.com/ls1intum/Artemis/releases/tag/${I}`;email;data;gitCommitId;gitBranchName;operatorName;operatorAdminName;operatorContactEmail;SECTIONS=[["exercises.programming",{programmingUrl:"https://docs.artemis.cit.tum.de/user/exercises/programming/"}],["exercises.quiz",{quizUrl:"https://docs.artemis.cit.tum.de/user/exercises/quiz/"}],["exercises.modeling",{modelingUrl:"https://docs.artemis.cit.tum.de/user/exercises/modeling/",apollonUrl:"https://apollon.ase.in.tum.de/"}],["exercises.text",{textUrl:"https://docs.artemis.cit.tum.de/user/exercises/textual/",athenaUrl:"https://github.com/ls1intum/Athena"}],["exercises.fileUpload",{fileUploadUrl:"https://docs.artemis.cit.tum.de/user/exercises/file-upload/"}],["exam",{examModeUrl:"https://docs.artemis.cit.tum.de/user/exam_mode/",studentFeatureUrl:"/features/students",instructorFeatureUrl:"/features/instructors"}],["grading",{gradingUrl:"https://docs.artemis.cit.tum.de/user/grading/"}],["assessment",{assessmentUrl:"https://docs.artemis.cit.tum.de/user/exercises/assessment/"}],["communication",{communicationUrl:"https://docs.artemis.cit.tum.de/user/communication/"}],["notifications",{notificationsURL:"https://docs.artemis.cit.tum.de/user/notifications"}],["teamExercises",{teamExercisesUrl:"https://docs.artemis.cit.tum.de/user/exercises/team-exercises/"}],["lectures",{lecturesUrl:"https://docs.artemis.cit.tum.de/user/lectures/"}],["integratedMarkdownEditor",{markdownEditorUrl:"https://docs.artemis.cit.tum.de/user/markdown-support/"}],["plagiarismChecks",{jPlagUrl:"https://github.com/jplag/JPlag/",plagiarismChecksUrl:"https://docs.artemis.cit.tum.de/user/plagiarism-check/"}],["learningAnalytics",{learningAnalyticsUrl:"https://docs.artemis.cit.tum.de/user/learning-analytics/"}],["adaptiveLearning",{adaptiveLearningUrl:"https://docs.artemis.cit.tum.de/user/adaptive-learning/"}],["tutorialGroups",{tutorialGroupsUrl:"https://docs.artemis.cit.tum.de/user/tutorialgroups/"}],["iris",{irisUrl:"https://artemis.tum.de/about-iris"}],["scalable",{scalingUrl:"https://docs.artemis.cit.tum.de/user/scaling/"}],["highUserSatisfaction",{userExperienceUrl:"https://docs.artemis.cit.tum.de/user/user-experience/"}],["customizable",{customizableUrl:"https://docs.artemis.cit.tum.de/user/courses/customizable"}],["openSource",{openSourceUrl:"https://docs.artemis.cit.tum.de/dev/open-source/"}]];ngOnInit(){this.staticContentService.getStaticJsonFromArtemisServer("about-us.json").subscribe(e=>{this.data=U(E({},e),{contributors:e.contributors.map(l=>new v(l.fullName,l.photoDirectory,l.sortBy,l.role,l.website))}),this.data?.contributors?.sort((l,s)=>l.getSortIndex().localeCompare(s.getSortIndex()))}),this.profileService.getProfileInfo().subscribe(e=>{this.contact=e.contact,e.git&&(this.gitCommitId=e.git.commit.id.abbrev,this.gitBranchName=e.git.branch),this.operatorName=e.operatorName,this.operatorAdminName=e.operatorAdminName,this.operatorContactEmail=e.contact})}set contact(e){this.email="mailto:"+e+"?body=Note%3A%20Please%20send%20only%20support%2Ffeature%20request%20or%20bug%20reports%20regarding%20the%20Artemis%20Platform%20to%20this%20address.%20Please%20check%20our%20public%20bug%20tracker%20at%20https%3A%2F%2Fgithub.com%2Fls1intum%2FArtemis%20for%20known%20bugs.%0AFor%20questions%20regarding%20exercises%20and%20their%20content%2C%20please%20contact%20your%20instructors."}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=C({type:r,selectors:[["jhi-about-us"]],decls:84,vars:11,consts:[[1,"page"],[1,"card-title","ms-2"],["jhiTranslate","artemisApp.aboutUsOverview.title",1,"mb-3","mt-3","font-weight-bold"],["jhiTranslate","artemisApp.aboutUsOverview.getInTouch",1,"mb-3","ms-2","font-weight-bold"],["rel","noreferrer noopener","target","_blank","jhiTranslate","bug",1,"footer-text","ms-3",3,"href"],["target","_blank","jhiTranslate","feature",1,"footer-text","ms-3",3,"href"],["target","_top","jhiTranslate","contact",1,"footer-text","ms-3",3,"href"],["target","_blank","jhiTranslate","releaseNotes",1,"footer-text","ms-3",3,"href"],[1,"mb-5","ms-2"],["jhiTranslate","artemisApp.aboutUsOverview.feature",1,"mb-3","font-weight-bold"],[1,"mt-5","ms-2","me-2"],["jhiTranslate","artemisApp.git.title",1,"font-weight-bold"],["jhiTranslate","artemisApp.git.branch",1,"inline-block","fixed-width"],[1,"inline-block"],["jhiTranslate","artemisApp.git.commit",1,"inline-block","fixed-width"],["jhiTranslate","artemisApp.operatorInfo.title",1,"font-weight-bold"],["jhiTranslate","artemisApp.operatorInfo.name",1,"inline-block","fixed-width"],[3,"jhiTranslate","translateValues"],[1,"row","ms-4","me-4","mb-4"],[1,"project-manager"],[1,"card-body"],[1,"row","ms-1"],[1,"col-md-4"],[1,"img-fluid","w-100","rounded",3,"src"],[1,"col-md-8"],[1,"font-weight-bold"],["target","_blank","rel","noopener noreferrer","jhiTranslate","artemisApp.aboutUsOverview.website",3,"href"],["jhiTranslate","artemisApp.aboutUsOverview.contributors",1,"font-weight-bold"],[1,"row"],[1,"contributor","text-center"],[1,"img-fluid",3,"src"],[1,"text-center"],["id","contributorsName",1,"font-weight-bold"],["jhiTranslate","artemisApp.operatorInfo.admin",1,"inline-block","fixed-width"],["jhiTranslate","artemisApp.operatorInfo.adminEmail",1,"inline-block","fixed-width"],["target","_top",1,"footer-text",3,"href"]],template:function(l,s){l&1&&(i(0,"div",0),t(1,`
    `),i(2,"div",1),t(3,`
        `),o(4,"h2",2),t(5,`
    `),n(),t(6,`
    `),i(7,"div"),t(8,`
        `),o(9,"h3",3),t(10,`
        `),i(11,"ul"),t(12,`
            `),i(13,"li"),t(14,`
                `),o(15,"a",4),t(16,`
            `),n(),t(17,`
            `),i(18,"li"),t(19,`
                `),o(20,"a",5),t(21,`
            `),n(),t(22,`
            `),i(23,"li"),t(24,`
                `),o(25,"a",6),t(26,`
            `),n(),t(27,`
            `),i(28,"li"),t(29,`
                `),o(30,"a",7),t(31,`
            `),n(),t(32,`
        `),n(),t(33,`
    `),n(),t(34,`
    `),i(35,"div",8),t(36,`
        `),o(37,"h3",9),t(38,`
        `),i(39,"ol"),t(40,`
            `),f(41,M,6,2,null,null,g),n(),t(43,`
    `),n(),t(44,`
    `),S(45,B,6,0)(46,$,11,0),i(47,"div",10),t(48,`
        `),o(49,"h3",11),t(50,`
        `),i(51,"div"),t(52,`
            `),o(53,"div",12),t(54,`
            `),i(55,"div",13),t(56),n(),t(57,`
        `),n(),t(58,`
        `),i(59,"div"),t(60,`
            `),o(61,"div",14),t(62,`
            `),i(63,"div",13),t(64),n(),t(65,`
        `),n(),t(66,`
    `),n(),t(67,`
    `),i(68,"div",10),t(69,`
        `),o(70,"h3",15),t(71,`
        `),i(72,"div"),t(73,`
            `),o(74,"div",16),t(75,`
            `),i(76,"div",13),t(77),n(),t(78,`
        `),n(),t(79,`
        `),S(80,D,9,1)(81,q,12,2),n(),t(82,`
`),n(),t(83,`
`)),l&2&&(a(15),d("href",s.BUG_REPORT_URL,c),a(5),d("href",s.FEATURE_REQUEST_URL,c),a(5),d("href",s.email,c),a(5),d("href",s.RELEASE_NOTES_URL,c),a(11),b(s.SECTIONS),a(4),x(s.data&&s.data.projectManagers?45:-1),a(),x(s.data&&s.data.contributors?46:-1),a(10),p(s.gitBranchName),a(8),p(s.gitCommitId),a(13),p(s.operatorName),a(3),x(s.operatorAdminName?80:-1),a(),x(s.operatorContactEmail?81:-1))},dependencies:[k,O],styles:["@media (min-width: 768px) and (max-width: 1024px){.page[_ngcontent-%COMP%]   .contributor[_ngcontent-%COMP%]{flex:0 0 20%;max-width:20%}.page[_ngcontent-%COMP%]   .project-manager[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}}@media (max-width: 767px){.page[_ngcontent-%COMP%]   .contributor[_ngcontent-%COMP%]{flex:0 0 33.3%;max-width:33.3%}.page[_ngcontent-%COMP%]   .project-manager[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}}.contributor[_ngcontent-%COMP%]{padding-right:15px;padding-left:15px;flex:0 0 8.333333%;max-width:8.333333%}.project-manager[_ngcontent-%COMP%]{flex:0 0 50%;max-width:50%}.inline-block[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;margin-right:20px}.fixed-width[_ngcontent-%COMP%]{width:200px}"]})}return r})();export{nt as AboutUsComponent};
//# sourceMappingURL=about-us.component-GMT6PHF2.js.map
