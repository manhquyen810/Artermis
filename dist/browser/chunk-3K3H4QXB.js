import{a as Ne}from"./chunk-DJL2LECX.js";import{a as Ve}from"./chunk-ND2AMZB2.js";import{g as k,h as ke}from"./chunk-JZSZQ37X.js";import{a as je}from"./chunk-RGQYMQQL.js";import{a as Ee,d as Ae}from"./chunk-O26CMRR4.js";import{D as b,F as be,f as P,g as Te,h as w,i as T}from"./chunk-QH7SWO42.js";import{K as pe,L as me}from"./chunk-VZRSC3LP.js";import{b as X}from"./chunk-5SKDOIBQ.js";import{J as ce,K as le,L as de,b as ee,c as te,h as ie,i as ne,m as oe,n as re,s as se,v as ae}from"./chunk-WA5GEAJB.js";import{a as ye}from"./chunk-K3W6YFKH.js";import{d as Me,f as De}from"./chunk-EDXSOKK5.js";import{Db as Ce,Ec as ge,Lc as ve,Oc as Se,Sa as ue,Tc as we,Uc as Pe,fc as he,ia as _e,lc as xe,yc as fe}from"./chunk-Z4VHWOB5.js";import{a as Oe}from"./chunk-U54OSGNH.js";import{f as J,h as K}from"./chunk-M6Z6DKZQ.js";import{A as G,Db as s,Dc as h,Ea as g,Ma as m,Mb as A,Mc as C,Na as _,Nb as L,Oc as c,Rc as q,Rd as $,Tb as R,Vb as B,Xb as U,Za as E,Zb as x,ad as y,bd as H,dd as e,f as j,kc as p,ld as Q,md as Y,nd as Z,pa as O,pd as M,sc as u,vc as z,wc as W,xc as o,yc as r,yd as v,z as D,zc as l,zd as S}from"./chunk-5LC5EQRR.js";import{a as F,b as I,h as Ie}from"./chunk-3E746U5Y.js";var V=Ie(je());var Fe=(()=>{class i{metisService=g(b);searchText;currentPostContextFilter;formGroup;ButtonType=Ee;course;createdPost;posts=[];isLoading=!0;currentSortCriterion=T.CREATION_DATE;currentSortDirection;SortBy=T;SortDirection=w;postsSubscription;paramSubscription;faPlus=ve;faTimes=Se;faFilter=ue;faSearch=fe;faLongArrowAltUp=he;faLongArrowAltDown=ge;onSelectContext(){this.setFilterAndSort(),this.metisService.getFilteredPosts(this.currentPostContextFilter)}onDestroy(){this.paramSubscription?.unsubscribe(),this.postsSubscription?.unsubscribe()}static \u0275fac=function(a){return new(a||i)};static \u0275dir=B({type:i,features:[M([b])]})}return i})();var Le=["postingThread"],Re=["itemsContainer"],Be=(i,d)=>d.id;function Ue(i,d){i&1&&(e(0,`
                        `),l(1,"div",12),e(2,`
                    `))}function ze(i,d){if(i&1){let t=h();e(0,`
                                `),o(1,"div",14),e(2,`
                                    `),o(3,"fa-icon",15),C("click",function(){m(t);let n=c(4);return _(n.resetCurrentPost())}),r(),e(4,`
                                    `),l(5,"span",16),e(6,`
                                    `),l(7,"jhi-posting-thread",17),e(8,`
                                `),r(),e(9,`
                            `)}if(i&2){let t=c(4);s(3),p("icon",t.faArrowLeft),s(4),p("post",t.currentPost)("showAnswers",!0)("id","item-"+(t.currentPost==null?null:t.currentPost.id))("showChannelReference",!1)}}function We(i,d){if(i&1){let t=h();e(0,`
                                                    `),o(1,"div",41),C("click",function(){m(t);let n=c(5);return _(n.onChangeSortDir())}),e(2,`
                                                        `),l(3,"fa-icon",42),v(4,"artemisTranslate"),e(5,`
                                                    `),r(),e(6,`
                                                `)}if(i&2){let t=c(5);s(3),p("icon",t.faLongArrowRight)("ngbTooltip",S(4,2,"artemisApp.metis.discussionSection.defaultSortCriterion"))}}function qe(i,d){if(i&1){let t=h();e(0,`
                                                    `),o(1,"div",41),C("click",function(){m(t);let n=c(5);return _(n.onChangeSortDir())}),e(2,`
                                                        `),l(3,"fa-icon",42),v(4,"artemisTranslate"),v(5,"artemisTranslate"),e(6,`
                                                    `),r(),e(7,`
                                                `)}if(i&2){let t=c(5);s(3),p("icon",t.currentSortDirection===t.SortDirection.ASCENDING?t.faLongArrowAltUp:t.faLongArrowAltDown)("ngbTooltip",t.currentSortDirection===t.SortDirection.ASCENDING?S(4,2,"artemisApp.metis.overview.sortAscending"):S(5,4,"artemisApp.metis.overview.sortDescending"))}}function He(i,d){if(i&1&&(e(0,`
                                        `),l(1,"jhi-posting-thread",43,1),e(3,`
                                    `)),i&2){let t=d.$implicit,a=c(5);s(),p("id","item-"+t.id)("post",t)("showAnswers",a.posts.length===1)("showChannelReference",!1)("isCommunicationPage",!1)}}function Qe(i,d){if(i&1){let t=h();e(0,`
                                `),o(1,"div",18),e(2,`
                                    `),e(3,`
                                    `),o(4,"div",19),e(5,`
                                        `),o(6,"input",20),v(7,"artemisTranslate"),Z("ngModelChange",function(n){m(t);let f=c(4);return Y(f.searchText,n)||(f.searchText=n),_(n)}),C("keyup.enter",function(){m(t);let n=c(4);return _(n.onSelectContext())}),r(),e(8,`
                                        `),o(9,"jhi-button",21),C("onClick",function(){m(t);let n=c(4);return n.searchText="",_(n.onSelectContext())}),r(),e(10,`
                                        `),o(11,"jhi-button",22),C("onClick",function(){m(t);let n=c(4);return _(n.onSelectContext())}),r(),e(12,`
                                    `),r(),e(13,`
                                `),r(),e(14,`
                                `),o(15,"form",23),e(16,`
                                    `),e(17,`
                                    `),o(18,"div",24),e(19,`
                                        `),e(20,`
                                        `),o(21,"div",11),e(22,`
                                            `),o(23,"div",25),e(24,`
                                                `),e(25,`
                                                `),o(26,"div",26),e(27,`
                                                    `),l(28,"fa-icon",27),e(29,`
                                                    `),o(30,"div",28),e(31,`
                                                        `),o(32,"input",29),C("change",function(){m(t);let n=c(4);return _(n.onSelectContext())}),r(),e(33,`
                                                        `),l(34,"label",30),e(35,`
                                                    `),r(),e(36,`
                                                    `),o(37,"div",28),e(38,`
                                                        `),o(39,"input",31),C("change",function(){m(t);let n=c(4);return _(n.onSelectContext())}),r(),e(40,`
                                                        `),l(41,"label",32),e(42,`
                                                    `),r(),e(43,`
                                                    `),o(44,"div",28),e(45,`
                                                        `),o(46,"input",33),C("change",function(){m(t);let n=c(4);return _(n.onSelectContext())}),r(),e(47,`
                                                        `),l(48,"label",34),e(49,`
                                                    `),r(),e(50,`
                                                `),r(),e(51,`
                                            `),r(),e(52,`
                                        `),r(),e(53,`
                                        `),e(54,`
                                        `),o(55,"div",35),e(56,`
                                            `),o(57,"div",36),e(58,`
                                                `),o(59,"div",37),e(60,`
                                                    `),l(61,"span",38),e(62,`
                                                `),r(),e(63,`
                                                `),x(64,We,7,4)(65,qe,8,6),r(),e(66,`
                                        `),r(),e(67,`
                                    `),r(),e(68,`
                                `),r(),e(69,`
                                `),l(70,"div",39),e(71,`
                                `),o(72,"div",40,0),C("scrolledUp",function(){m(t);let n=c(4);return _(n.fetchNextPage())}),e(74,`
                                    `),z(75,He,4,5,null,null,Be),r(),e(77,`
                            `)}if(i&2){let t=c(4);s(6),q("placeholder",S(7,10,"artemisApp.metis.discussionSection.searchBarDefault")),Q("ngModel",t.searchText),s(3),p("btnType",t.ButtonType.SECONDARY)("icon",t.faTimes),s(2),p("icon",t.faSearch),s(4),p("formGroup",t.formGroup),s(13),p("icon",t.faFilter),s(36),u(t.currentSortDirection?-1:64),s(),u(t.currentSortDirection?65:-1),s(7),p("scrollWindow",!1),s(3),W(t.posts)}}function Ye(i,d){i&1&&(e(0,`
                                `),o(1,"div",44),e(2,`
                                    `),l(3,"div",45),e(4,`
                                `),r(),e(5,`
                            `))}function Ze(i,d){i&1&&(e(0,`
                                `),o(1,"div",44),e(2,`
                                    `),l(3,"div",46),e(4,`
                                `),r(),e(5,`
                            `))}function $e(i,d){if(i&1&&(e(0,`
                                                `),l(1,"fa-icon",5),e(2,`
                                            `)),i&2){let t=c(5);s(),p("icon",t.faPlus)}}function Je(i,d){if(i&1&&(e(0,`
                                                `),l(1,"fa-icon",5),e(2,`
                                            `)),i&2){let t=c(5);s(),p("icon",t.faTimes)}}function Ke(i,d){i&1&&(e(0,`
                                                `),l(1,"span",50),e(2,`
                                            `))}function Xe(i,d){i&1&&(e(0,`
                                                `),l(1,"span",51),e(2,`
                                            `))}function et(i,d){if(i&1){let t=h();e(0,`
                                            `),o(1,"jhi-message-inline-input",52),C("onCreate",function(){m(t);let n=c(5);return _(n.createEmptyPost())}),r(),e(2,`
                                        `)}if(i&2){let t=c(5);s(),p("posting",t.createdPost)}}function tt(i,d){if(i&1){let t=h();e(0,`
                                `),o(1,"div",47),e(2,`
                                    `),o(3,"div",48),e(4,`
                                        `),o(5,"button",49),C("click",function(){m(t);let n=c(4);return _(n.toggleSendMessage())}),e(6,`
                                            `),x(7,$e,3,1)(8,Je,3,1)(9,Ke,3,0)(10,Xe,3,0),r(),e(11,`
                                        `),x(12,et,3,1),r(),e(13,`
                                `),r(),e(14,`
                            `)}if(i&2){let t=c(4);s(7),u(t.shouldSendMessage?-1:7),s(),u(t.shouldSendMessage?8:-1),s(),u(t.shouldSendMessage?-1:9),s(),u(t.shouldSendMessage?10:-1),s(2),u(t.shouldSendMessage?12:-1)}}function it(i,d){if(i&1&&(e(0,`
                        `),o(1,"div",13),e(2,`
                            `),x(3,ze,10,5)(4,Qe,78,12)(5,Ye,6,0)(6,Ze,6,0)(7,tt,15,5),r(),e(8,`
                    `)),i&2){let t=c(3);s(3),u(t.currentPost!==void 0?3:4),s(2),u(t.isLoading?5:-1),s(),u(!t.isLoading&&t.posts.length===0?6:-1),s(),u(t.createdPost&&!t.isLoading&&!t.channel.isArchived?7:-1)}}function nt(i,d){if(i&1){let t=h();e(0,`
            `),o(1,"div",3),e(2,`
                `),o(3,"div",4),e(4,`
                    `),l(5,"fa-icon",5),e(6,`
                `),r(),e(7,`
                `),o(8,"div",6),e(9,`
                    `),e(10,`
                    `),o(11,"div",7),v(12,"artemisTranslate"),C("click",function(){m(t);let n=c(2);return _(n.collapsed=!0)}),e(13,`
                        `),o(14,"div",8),e(15,`
                            `),o(16,"div",9),e(17,`
                                `),l(18,"h5",10),e(19,`
                            `),r(),e(20,`
                            `),o(21,"div",11),e(22,`
                                `),l(23,"fa-icon",5),e(24,`
                            `),r(),e(25,`
                        `),r(),e(26,`
                    `),r(),e(27,`
                    `),e(28,`
                    `),x(29,Ue,3,0)(30,it,9,4),r(),e(31,`
            `),r(),e(32,`
        `)}if(i&2){let t=c(2);s(5),p("icon",t.faGripLinesVertical),s(6),p("ngbTooltip",S(12,4,"artemisApp.metis.communication.hide")),s(12),p("icon",t.faChevronRight),s(6),u(t.noChannelAvailable?29:30)}}function ot(i,d){if(i&1){let t=h();e(0,`
            `),o(1,"div",53),v(2,"artemisTranslate"),C("click",function(){m(t);let n=c(2);return _(n.collapsed=!1)}),e(3,`
                `),l(4,"fa-icon",54),e(5,`
                `),l(6,"span",55),e(7,`
                `),l(8,"fa-icon",54),e(9,`
            `),r(),e(10,`
        `)}if(i&2){let t=c(2);s(),p("ngbTooltip",S(2,3,"artemisApp.metis.communication.show")),s(3),p("icon",t.faChevronLeft),s(4),p("icon",t.faChevronLeft)}}function rt(i,d){if(i&1&&(e(0,`
    `),o(1,"div",2),e(2,`
        `),x(3,nt,33,6)(4,ot,11,5),r(),e(5,`
`)),i&2){let t=c();s(3),u(t.collapsed?4:3)}}var It=(()=>{class i extends Fe{channelService=g(be);activatedRoute=g(J);router=g(K);formBuilder=g(ce);exercise=E();lecture=E();postCreateEditModal=A(k);messages=L("postingThread");messages$=X(this.messages);content=A("itemsContainer");ngUnsubscribe=new j;previousScrollDistanceFromTop;page=1;PAGE_SIZE=50;totalNumberOfPosts=0;messagesContainerHeight=700;viewChildrenInitialized=!1;currentSortDirection=w.DESCENDING;channel;noChannelAvailable;collapsed=!1;currentPostId;currentPost;shouldSendMessage;PAGE_TYPE=Te.PAGE_SECTION;faChevronRight=Pe;faChevronLeft=we;faGripLinesVertical=_e;faArrowLeft=Ce;faLongArrowRight=xe;constructor(){super(),$(()=>this.loadData(this.exercise(),this.lecture()))}loadData(t,a){this.paramSubscription=G({params:this.activatedRoute.params,queryParams:this.activatedRoute.queryParams}).subscribe(n=>{this.currentPostId=+n.queryParams.postId,this.course=t?.course??a?.course,this.metisService.setCourse(this.course),this.metisService.setPageType(this.PAGE_TYPE),n.params.courseId?this.setChannel(n.params.courseId):this.course?.id&&this.setChannel(this.course.id),this.createEmptyPost(),this.resetFormGroup()}),this.postsSubscription=this.metisService.posts.subscribe(n=>{this.viewChildrenInitialized&&this.content()&&(this.previousScrollDistanceFromTop=this.content().nativeElement.scrollHeight-this.content().nativeElement.scrollTop),this.posts=n.slice().sort((f,N)=>f.displayPriority===P.PINNED&&N.displayPriority!==P.PINNED?1:f.displayPriority!==P.PINNED&&N.displayPriority===P.PINNED?-1:0).reverse(),this.isLoading=!1,this.currentPostId&&this.posts.length>0&&(this.currentPost=this.posts.find(f=>f.id===this.currentPostId))}),this.metisService.totalNumberOfPosts.pipe(O(this.ngUnsubscribe)).subscribe(n=>{this.totalNumberOfPosts=n})}ngOnDestroy(){super.onDestroy(),this.postCreateEditModal()?.modalRef?.close()}onChangeSortDir(){this.currentSortDirection=this.currentSortDirection===w.DESCENDING?w.ASCENDING:w.DESCENDING,this.onSelectContext()}setChannel(t){let a=()=>({next:n=>{if(this.channel=n??void 0,this.resetFormGroup(),this.setFilterAndSort(),!this.channel?.id){this.noChannelAvailable=!0,this.collapsed=!0;return}this.metisService.getFilteredPosts(this.currentPostContextFilter,!0,this.channel),this.createEmptyPost(),this.resetFormGroup()}});this.lecture()?this.channelService.getChannelOfLecture(t,this.lecture().id).pipe(D(n=>n.body)).subscribe(a()):this.exercise()&&this.channelService.getChannelOfExercise(t,this.exercise().id).pipe(D(n=>n.body)).subscribe(a())}createEmptyPost(){if(this.channel){let t=this.channel;this.shouldSendMessage=!1,this.createdPost=this.metisService.createEmptyPostForContext(t)}else this.createdPost=this.metisService.createEmptyPostForContext()}ngAfterViewInit(){(0,V.default)(".expanded-discussion").resizable({edges:{left:".draggable-left",right:!1,bottom:!1,top:!1},modifiers:[V.default.modifiers.restrictSize({min:{width:375,height:0},max:{width:600,height:4e3}})],inertia:!0}).on("resizestart",function(t){t.target.classList.add("card-resizable")}).on("resizeend",function(t){t.target.classList.remove("card-resizable")}).on("resizemove",function(t){let a=t.target;a.style.width=t.rect.width+"px"}),this.messages$.pipe(O(this.ngUnsubscribe)).subscribe(()=>{this.handleScrollOnNewMessage()}),this.viewChildrenInitialized=!0}handleScrollOnNewMessage=()=>{(this.posts.length>0&&this.content()?.nativeElement.scrollTop===0&&this.page===1||this.previousScrollDistanceFromTop===this.messagesContainerHeight)&&this.scrollToBottomOfMessages()};scrollToBottomOfMessages(){this.viewChildrenInitialized&&this.content()?.nativeElement&&(this.content().nativeElement.scrollTop=this.content().nativeElement.scrollHeight)}fetchNextPage(){this.posts.length<this.totalNumberOfPosts&&(this.page+=1,this.commandMetisToFetchPosts()),this.content()?.nativeElement&&(this.content().nativeElement.scrollTop=this.content().nativeElement.scrollTop+this.PAGE_SIZE)}commandMetisToFetchPosts(t=!1){this.currentPostContextFilter&&(this.currentPostContextFilter=I(F({},this.currentPostContextFilter),{page:this.page-1}),this.metisService.getFilteredPosts(this.currentPostContextFilter,t,this.channel))}setFilterAndSort(){this.page=1,this.scrollToBottomOfMessages(),this.currentPostContextFilter={courseId:void 0,conversationId:this.channel?.id,searchText:this.searchText?.trim(),filterToUnresolved:this.formGroup.get("filterToUnresolved")?.value,filterToOwn:this.formGroup.get("filterToOwn")?.value,filterToAnsweredOrReacted:this.formGroup.get("filterToAnsweredOrReacted")?.value,pagingEnabled:!0,page:0,pageSize:this.PAGE_SIZE,postSortCriterion:T.CREATION_DATE,sortingOrder:this.currentSortDirection}}resetCurrentPost(){this.currentPost=void 0,this.currentPostId=void 0,this.router.navigate([],{queryParams:{postId:this.currentPostId},queryParamsHandling:"merge"})}resetFormGroup(){this.formGroup=this.formBuilder.group({conversationId:this.channel?.id,exerciseId:this.exercise()?.id,lectureId:this.lecture()?.id,filterToUnresolved:!1,filterToOwn:!1,filterToAnsweredOrReacted:!1})}toggleSendMessage(){this.shouldSendMessage=!this.shouldSendMessage}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=R({type:i,selectors:[["jhi-discussion-section"]],viewQuery:function(a,n){a&1&&(y(n.postCreateEditModal,k,5),y(n.messages,Le,5),y(n.content,Re,5)),a&2&&H(3)},inputs:{exercise:[1,"exercise"],lecture:[1,"lecture"]},features:[M([b]),U],decls:2,vars:1,consts:[["itemsContainer",""],["postingThread",""],[1,"h-100"],[1,"postings-container","expanded-discussion"],[1,"draggable-left"],[3,"icon"],[1,"card","mb-3"],[1,"card-header","text-white",3,"click","ngbTooltip"],[1,"row","flex-grow-1"],[1,"col"],["jhiTranslate","artemisApp.metis.communication.label",1,"mb-0","fw-medium"],[1,"col-auto"],["jhiTranslate","artemisApp.metis.channel.noChannel",1,"card-body"],[1,"card-body","pt-0"],[1,"my-2"],[1,"back-button","me-2","clickable",3,"click","icon"],["jhiTranslate","artemisApp.metis.post.showAllPosts",1,"back-instruction"],[3,"post","showAnswers","id","showChannelReference"],[1,"row","ps-0"],[1,"input-group","px-0","my-2"],["id","search","name","searchText",1,"form-control",3,"ngModelChange","keyup.enter","ngModel","placeholder"],[3,"onClick","btnType","icon"],["id","search-submit",1,"ms-1",3,"onClick","icon"],[3,"formGroup"],[1,"row","justify-content-between"],[1,"row"],[1,"col-auto","px-0","selection-prefix","d-flex","flex-wrap"],[1,"pe-2",3,"icon"],[1,"form-group","pe-2"],["type","checkbox","formControlName","filterToUnresolved","name","filterToUnresolved","id","filterToUnresolved",1,"form-check-input",3,"change"],["for","filterToUnresolved","jhiTranslate","artemisApp.metis.overview.filterToUnresolved",1,"p-0"],["type","checkbox","formControlName","filterToOwn","name","filterToOwn","id","filterToOwn",1,"form-check-input",3,"change"],["for","filterToOwn","jhiTranslate","artemisApp.metis.overview.filterToOwn",1,"p-0"],["type","checkbox","formControlName","filterToAnsweredOrReacted","name","filterToAnsweredOrReacted","id","filterToAnsweredOrReacted",1,"form-check-input",3,"change"],["for","filterToAnsweredOrReacted","jhiTranslate","artemisApp.metis.overview.filterToAnsweredOrReacted",1,"p-0"],[1,"col-auto","ps-0"],[1,"row","align-items-baseline"],[1,"col-auto","pe-1"],["jhiTranslate","artemisApp.metis.discussionSection.sortByDate"],[1,"bold-line","row","mt-1","mb-2"],["infinite-scroll","",1,"items-container",3,"scrolledUp","scrollWindow"],[1,"col-auto","p-0","clickable",3,"click"],[3,"icon","ngbTooltip"],[1,"item",3,"id","post","showAnswers","showChannelReference","isCommunicationPage"],[1,"post-result-information","row","mt-2"],["jhiTranslate","artemisApp.metis.discussionSection.loadingMessages",1,"col-12"],["jhiTranslate","artemisApp.metis.discussionSection.noMessages",1,"col-12"],[1,"row","mt-2"],[1,"col-12"],["id","new-post",1,"btn","btn-sm","btn-primary",3,"click"],["jhiTranslate","artemisApp.metis.newMessage",1,"d-none","d-md-inline"],["jhiTranslate","artemisApp.metis.collapseNewMessage",1,"d-none","d-md-inline"],[1,"message-input",3,"onCreate","posting"],[1,"postings-container","collapsed-discussion","text-white",3,"click","ngbTooltip"],[1,"expand-postings-icon",3,"icon"],["jhiTranslate","artemisApp.metis.communication.label",1,"h5"]],template:function(a,n){a&1&&(e(0,`
`),x(1,rt,6,1)),a&2&&(s(),u(n.course?1:-1))},dependencies:[De,Me,Ne,le,re,te,ee,ie,ne,oe,de,se,ae,Ve,ke,ye,Oe,me,pe,Ae],styles:[".post-result-information[_ngcontent-%COMP%]{font-size:small;font-style:italic}.post-separation-line[_ngcontent-%COMP%]{height:1px;background:var(--metis-light-gray)}.bold-line[_ngcontent-%COMP%]{height:2px;background:var(--metis-light-gray)}.icon[_ngcontent-%COMP%]{color:var(--metis-gray)}.resolved[_ngcontent-%COMP%]{color:var(--metis-green)}.post-header-author-date[_ngcontent-%COMP%]{line-height:1.1}.post-content-padding[_ngcontent-%COMP%]{padding-left:3.42rem}.post-authority-icon-student[_ngcontent-%COMP%]{display:none}.reference[_ngcontent-%COMP%]{font-weight:200;display:inline-flex}.hideAfter5Seconds[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_cssAnimation 5s forwards;animation:_ngcontent-%COMP%_cssAnimation 5s forwards}@keyframes _ngcontent-%COMP%_cssAnimation{0%{opacity:1}90%{opacity:1}to{opacity:0}}@-webkit-keyframes _ngcontent-%COMP%_cssAnimation{0%{opacity:1}90%{opacity:1}to{opacity:0}}.card[_ngcontent-%COMP%]{border-radius:.25em}@media (max-width: 575.98px){.post-header-author-date[_ngcontent-%COMP%]{flex-direction:column;gap:0!important}.post-content-padding[_ngcontent-%COMP%]{margin-left:0}.post-header-date-separator[_ngcontent-%COMP%]{display:none}.post-header-date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6c757d;font-size:.75rem!important}}.post-delete-button-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;z-index:0;background-color:#0d6efd4d;animation:_ngcontent-%COMP%_increaseWidth 6s forwards linear}@media (prefers-reduced-motion){.post-delete-button-background[_ngcontent-%COMP%]{animation:none}}.post-delete-button-label[_ngcontent-%COMP%]{position:relative;z-index:1}@keyframes _ngcontent-%COMP%_increaseWidth{0%{width:0}to{width:100%}}.postings-container[_ngcontent-%COMP%]{display:flex;height:100%;margin-left:auto}.postings-container[_ngcontent-%COMP%]   .back-instruction[_ngcontent-%COMP%]{font-size:12px}.expanded-discussion[_ngcontent-%COMP%]{width:375px}.expanded-discussion[_ngcontent-%COMP%]   .draggable-left[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:15px}.expanded-discussion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:inherit;min-width:360px}.expanded-discussion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{display:inline-flex;justify-content:space-between;align-items:center;background-color:var(--artemis-dark);cursor:pointer;border-radius:.25em .25em 0 0}.expanded-discussion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{display:flex}.expanded-discussion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] > .col-auto[_ngcontent-%COMP%]:last-child{display:flex;flex-direction:column;justify-content:center}.expanded-discussion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]{max-height:700px;overflow-y:auto}.collapsed-discussion[_ngcontent-%COMP%]{width:38px;justify-content:space-between;flex-flow:column nowrap;background-color:var(--artemis-dark);margin-left:auto;cursor:pointer}.collapsed-discussion[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{writing-mode:vertical-rl;margin:auto}.collapsed-discussion[_ngcontent-%COMP%]   .expand-postings-icon[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem;place-self:center}@media screen and (max-width: 832px){.expanded-discussion[_ngcontent-%COMP%]{max-width:230px!important}.expanded-discussion[_ngcontent-%COMP%]   .draggable-left[_ngcontent-%COMP%]{display:none}.expanded-discussion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:inherit;min-width:230px}}"]})}return i})();export{It as a};
//# sourceMappingURL=chunk-3K3H4QXB.js.map
