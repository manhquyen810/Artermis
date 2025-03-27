import{a as Lt}from"./chunk-IL7JUOEF.js";import{a as Bt}from"./chunk-SUUJN3EQ.js";import{a as wt}from"./chunk-EHCOTJGL.js";import{b as yt,c as gt}from"./chunk-RNPAFOPW.js";import{a as Ft}from"./chunk-JRBFEQNN.js";import{b as F}from"./chunk-TECMX7AA.js";import{b as bt}from"./chunk-T624HJJL.js";import{a as vt}from"./chunk-ZLJ76G5I.js";import{e as Ct}from"./chunk-MLVGKM2P.js";import{c as St}from"./chunk-JNO6DNVW.js";import{K as dt}from"./chunk-VZRSC3LP.js";import{c as Z}from"./chunk-5SKDOIBQ.js";import{J as lt,K as ct,L as mt,c as tt,e as et,h as it,i as nt,n as at,s as rt,v as ot}from"./chunk-WA5GEAJB.js";import{a as Tt}from"./chunk-K3W6YFKH.js";import{d as At}from"./chunk-EDXSOKK5.js";import{p as g}from"./chunk-DID2YGL7.js";import{Bb as ut,Mb as xt,Oc as _t,Zc as ft,kb as pt,nb as ht,q as st}from"./chunk-Z4VHWOB5.js";import{a as Et}from"./chunk-U54OSGNH.js";import{f as K,i as Y}from"./chunk-M6Z6DKZQ.js";import{n as J}from"./chunk-IOA4DPXY.js";import{Ad as X,Db as o,Dc as S,Ea as E,Ma as C,Mb as I,Mc as T,Na as v,Oc as d,Qd as D,Rc as M,Rd as z,Sc as w,Tb as V,Yc as H,Za as B,Zb as h,Zc as $,_c as Q,ab as y,ad as R,bd as G,dd as t,ed as b,f as k,fd as A,gd as W,kc as p,mc as N,rc as U,rd as L,sc as u,td as q,vc as j,wb as O,wc as P,xc as i,yc as n,yd as x,zc as l,zd as _}from"./chunk-5LC5EQRR.js";var Dt=["fileInput"],kt=r=>({"edit-overlay-container":r}),Ot=(r,s,e)=>["/course-management",r,"lectures",s,"attachments",e],It=r=>({extensions:r});function Vt(r,s){if(r&1&&(t(0,`
                    `),i(1,"div"),t(2,`
                        `),i(3,"h2"),l(4,"span",4),t(5),n(),t(6,`
                        `),l(7,"hr"),t(8,`
                        `),i(9,"div",3),t(10,`
                            `),i(11,"div",5),t(12,`
                                `),i(13,"dt"),l(14,"span",6),n(),t(15,`
                                `),i(16,"dd"),t(17,`
                                    `),i(18,"span"),t(19),x(20,"artemisDate"),n(),t(21,`
                                `),n(),t(22,`
                            `),n(),t(23,`
                            `),i(24,"div",5),t(25,`
                                `),i(26,"dt"),l(27,"span",7),n(),t(28,`
                                `),i(29,"dd"),t(30,`
                                    `),i(31,"span"),t(32),x(33,"artemisDate"),n(),t(34,`
                                `),n(),t(35,`
                            `),n(),t(36,`
                        `),n(),t(37,`
                        `),i(38,"div",3),t(39,`
                            `),i(40,"div",2),t(41,`
                                `),i(42,"dt"),l(43,"span",8),n(),t(44,`
                                `),l(45,"dd",9),x(46,"htmlForMarkdown"),t(47,`
                            `),n(),t(48,`
                        `),n(),t(49,`
                        `),l(50,"hr",10),t(51,`
                        `),i(52,"div",3),t(53,`
                            `),i(54,"div",2),t(55,`
                                `),l(56,"h4",11),t(57,`
                            `),n(),t(58,`
                        `),n(),t(59,`
                    `),n(),t(60,`
                `)),r&2){let e,a=d(2);o(5),W(": ",a.lecture().title," - ",(e=a.lecture().course)==null?null:e.shortName,""),o(14),b(_(20,5,a.lecture().startDate)),o(13),b(_(33,7,a.lecture().endDate)),o(13),p("innerHTML",_(46,9,a.lecture().description),O)}}function Nt(r,s){if(r&1){let e=S();t(0,`
                                                        `),i(1,"a",26),T("click",function(){C(e);let c=d().$implicit,m=d(3);return v(m.downloadAttachment(c.name||"",c.link||""))}),t(2),n(),t(3,`
                                                    `)}if(r&2){let e=d().$implicit;o(2),A(`
                                                            `,e.name,`
                                                        `)}}function Ut(r,s){if(r&1&&(t(0,`
                                                        `),i(1,"a",27),t(2,`
                                                            `),l(3,"fa-icon",28),t(4),x(5,"artemisTranslate"),n(),t(6,`
                                                    `)),r&2){let e=d(4);o(3),p("icon",e.faSpinner),o(),A(`
                                                            `,_(5,2,"artemisApp.courseOverview.lectureDetails.isDownloading"),`
                                                        `)}}function jt(r,s){if(r&1&&t(0),r&2){let e=d().$implicit;A(`
                                                        `,e.name,`
                                                    `)}}function Pt(r,s){if(r&1&&(t(0,`
                                                            `),i(1,"button",29),x(2,"artemisTranslate"),t(3,`
                                                                `),l(4,"fa-icon",24),t(5,`
                                                                `),l(6,"span",30),t(7,`
                                                            `),n(),t(8,`
                                                        `)),r&2){let e,a=d().$implicit,c=d(3);o(),p("routerLink",q(5,Ot,(e=c.lecture().course)==null?null:e.id,c.lecture().id,a.id))("ngbTooltip",_(2,3,"entity.action.view")),o(3),p("icon",c.faEye)}}function Mt(r,s){if(r&1){let e=S();t(0,`
                                                            `),i(1,"button",31),T("delete",function(){C(e);let c=d().$implicit,m=d(3);return v(m.deleteAttachment(c))}),t(2,`
                                                                `),l(3,"fa-icon",24),t(4,`
                                                            `),n(),t(5,`
                                                        `)}if(r&2){let e,a=d().$implicit,c=d(3);o(),p("disabled",((e=c.attachmentToBeUpdatedOrCreated())==null?null:e.id)===(a==null?null:a.id))("entityTitle",(a==null?null:a.name)||"")("dialogError",c.dialogError$),o(2),p("icon",c.faTrash)}}function Ht(r,s){r&1&&(t(0,`
                                                    `),l(1,"div",32),t(2,`
                                                `))}function $t(r,s){if(r&1){let e=S();t(0,`
                                            `),i(1,"tr",20),t(2,`
                                                `),i(3,"td"),t(4),n(),t(5,`
                                                `),i(6,"td"),t(7,`
                                                    `),h(8,Nt,4,1)(9,Ut,7,4)(10,jt,1,1),n(),t(11,`
                                                `),i(12,"td"),t(13),n(),t(14,`
                                                `),i(15,"td"),t(16),x(17,"artemisDate"),n(),t(18,`
                                                `),i(19,"td"),t(20),x(21,"artemisDate"),n(),t(22,`
                                                `),i(23,"td"),t(24),n(),t(25,`
                                                `),i(26,"td",21),t(27,`
                                                    `),i(28,"div",22),t(29,`
                                                        `),h(30,Pt,9,9),i(31,"button",23),T("click",function(){let c=C(e).$implicit,m=d(3);return v(m.editAttachment(c))}),t(32,`
                                                            `),l(33,"fa-icon",24),t(34,`
                                                            `),l(35,"span",25),t(36,`
                                                        `),n(),t(37,`
                                                        `),h(38,Mt,6,4),n(),t(39,`
                                                `),n(),t(40,`
                                                `),h(41,Ht,3,0),n(),t(42,`
                                        `)}if(r&2){let e,a,c,m=s.$implicit,f=d(3);o(),p("ngClass",L(16,kt,((e=f.attachmentToBeUpdatedOrCreated())==null?null:e.id)===(m==null?null:m.id))),o(3),A(`
                                                    `,m.id,`
                                                `),o(4),u(f.isDownloadingAttachmentLink?f.isDownloadingAttachmentLink===m.link?9:10:8),o(5),b(m.attachmentType),o(3),b(_(17,12,m.releaseDate)),o(4),b(_(21,14,m.uploadDate)),o(4),A(`
                                                    `,m.version,`
                                                `),o(6),u(f.viewButtonAvailable[m.id]?30:-1),o(),p("disabled",((a=f.attachmentToBeUpdatedOrCreated())==null?null:a.id)===(m==null?null:m.id)),o(2),p("icon",f.faPencilAlt),o(5),u(f.lecture().isAtLeastInstructor?38:-1),o(3),u(((c=f.attachmentToBeUpdatedOrCreated())==null?null:c.id)===(m==null?null:m.id)?41:-1)}}function Qt(r,s){if(r&1&&(t(0,`
                            `),i(1,"td",12),t(2,`
                                `),i(3,"table",13),t(4,`
                                    `),i(5,"thead"),t(6,`
                                        `),i(7,"tr"),t(8,`
                                            `),i(9,"th"),l(10,"span",14),n(),t(11,`
                                            `),i(12,"th"),l(13,"span",15),n(),t(14,`
                                            `),i(15,"th"),l(16,"span",16),n(),t(17,`
                                            `),i(18,"th"),l(19,"span",17),n(),t(20,`
                                            `),i(21,"th"),l(22,"span",18),n(),t(23,`
                                            `),i(24,"th"),l(25,"span",19),n(),t(26,`
                                            `),l(27,"th"),t(28,`
                                        `),n(),t(29,`
                                    `),n(),t(30,`
                                    `),i(31,"tbody"),t(32,`
                                        `),j(33,$t,43,18,null,null,U().trackId,!0),n(),t(35,`
                                `),n(),t(36,`
                            `),n(),t(37,`
                        `)),r&2){let e=d(2);o(33),P(e.attachments)}}function Rt(r,s){r&1&&(t(0,`
                                    `),l(1,"h4",49),t(2,`
                                `))}function Gt(r,s){r&1&&(t(0,`
                                    `),l(1,"h4",50),t(2,`
                                `))}function Wt(r,s){if(r&1&&(t(0,`
                                        `),i(1,"div",51),t(2),n(),t(3,`
                                    `)),r&2){let e=d(3);o(2),A(`
                                            `,e.errorMessage,`
                                        `)}}function qt(r,s){r&1&&(t(0,`
                                    `),i(1,"div",35),t(2,`
                                        `),l(3,"label",52),t(4,`
                                        `),l(5,"input",53),x(6,"artemisTranslate"),t(7,`
                                    `),n(),t(8,`
                                `)),r&2&&(o(5),p("placeholder",_(6,1,"artemisApp.lecture.attachments.notificationPlaceholder")))}function Xt(r,s){if(r&1){let e=S();t(0,`
                    `),i(1,"form",33),t(2,`
                        `),i(3,"div",3),t(4,`
                            `),i(5,"div",2),t(6,`
                                `),h(7,Rt,3,0)(8,Gt,3,0),n(),t(9,`
                        `),n(),t(10,`
                        `),i(11,"div",3),t(12,`
                            `),i(13,"div",34),t(14,`
                                `),i(15,"div",35),t(16,`
                                    `),l(17,"label",36),t(18,`
                                    `),l(19,"input",37),t(20,`
                                `),n(),t(21,`
                                `),i(22,"div",35),t(23,`
                                    `),i(24,"label",38),t(25,"File"),n(),t(26,`
                                    `),l(27,"small",39),t(28,`
                                    `),l(29,"fa-icon",40),x(30,"artemisTranslate"),t(31,`
                                    `),i(32,"div",41),t(33,`
                                        `),i(34,"div",42),t(35,`
                                            `),i(36,"input",43,0),x(38,"artemisTranslate"),T("change",function(c){C(e);let m=d(2);return v(m.setLectureAttachment(c))}),n(),t(39,`
                                        `),n(),t(40,`
                                    `),n(),t(41,`
                                    `),h(42,Wt,4,1),n(),t(43,`
                                `),i(44,"div",35),t(45,`
                                    `),l(46,"jhi-date-time-picker",44),x(47,"artemisTranslate"),t(48,`
                                `),n(),t(49,`
                                `),h(50,qt,9,3),n(),t(51,`
                        `),n(),t(52,`
                        `),i(53,"div",3),t(54,`
                            `),i(55,"div",2),t(56,`
                                `),i(57,"button",45),T("click",function(){C(e);let c=d(2);return v(c.saveAttachment())}),t(58,`
                                    `),l(59,"fa-icon",24),t(60,`\xA0
                                    `),l(61,"span",46),t(62,`
                                `),n(),t(63,`
                                `),i(64,"button",47),T("click",function(){C(e);let c=d(2);return v(c.cancel())}),t(65,`
                                    `),l(66,"fa-icon",24),t(67,"\xA0"),l(68,"span",48),t(69,`
                                `),n(),t(70,`
                            `),n(),t(71,`
                        `),n(),t(72,`
                    `),n(),t(73,`
                `)}if(r&2){let e=d(2);o(),p("formGroup",e.form),o(6),u(e.attachmentToBeUpdatedOrCreated().id?8:7),o(17),w("for","lectureAttachmentInput",e.attachmentToBeUpdatedOrCreated().name,""),o(5),p("icon",e.faQuestionCircle)("ngbTooltip",X(30,20,"artemisApp.lecture.attachments.fileLimitationTooltip",L(27,It,e.allowedFileExtensions))),o(7),N("ng-invalid",!e.isFileSelectionValid())("invalid-file-input-margin",!e.isFileSelectionValid()),w("id","lectureAttachmentInput",e.attachmentToBeUpdatedOrCreated().name,""),p("accept",e.acceptedFileExtensionsFileBrowser)("placeholder",_(38,23,"artemisApp.lecture.attachments.chooseFile")),o(6),u(e.erroredFile?42:-1),o(4),M("labelName",_(47,25,"artemisApp.lecture.attachments.releaseDate")),o(4),u(e.attachmentToBeUpdatedOrCreated().id?50:-1),o(7),p("disabled",!e.isFormValid()),o(2),p("icon",e.faPaperclip),o(7),p("icon",e.faTimes)}}function zt(r,s){if(r&1){let e=S();t(0,`
                    `),i(1,"div",3),t(2,`
                        `),i(3,"div",2),t(4,`
                            `),i(5,"button",54),T("click",function(){C(e);let c=d(2);return v(c.addAttachment())}),t(6,`
                                `),l(7,"fa-icon",24),t(8,"\xA0"),l(9,"span",55),t(10,`
                            `),n(),t(11,`
                        `),n(),t(12,`
                    `),n(),t(13,`
                `)}if(r&2){let e=d(2);o(7),p("icon",e.faPaperclip)}}function Jt(r,s){if(r&1&&(t(0,`
            `),i(1,"div"),t(2,`
                `),h(3,Vt,61,11),i(4,"div",3),t(5,`
                    `),i(6,"div",2),t(7,`
                        `),h(8,Qt,38,0),n(),t(9,`
                `),n(),t(10,`
                `),h(11,Xt,74,29)(12,zt,14,1),n(),t(13,`
        `)),r&2){let e=d();o(3),u(e.showHeader()?3:-1),o(5),u(e.attachments&&e.attachments.length>0?8:-1),o(3),u(e.attachmentToBeUpdatedOrCreated()?11:12)}}var be=(()=>{class r{faSpinner=ft;faTimes=_t;faTrash=ut;faPencilAlt=st;faPaperclip=xt;faQuestionCircle=pt;faEye=ht;allowedFileExtensions=yt;acceptedFileExtensionsFileBrowser=gt;activatedRoute=E(K);attachmentService=E(Ct);lectureService=E(vt);fileService=E(Bt);formBuilder=E(lt);fileInput;datePickerComponent=I(F);lectureId=B();showHeader=B(!0);lecture=y(new wt);attachments=[];attachmentToBeUpdatedOrCreated=y(void 0);attachmentBackup;attachmentFile=y(void 0);isDownloadingAttachmentLink;notificationText;erroredFile;errorMessage;viewButtonAvailable={};dialogErrorSource=new k;dialogError$=this.dialogErrorSource.asObservable();routeDataSubscription;form=this.formBuilder.group({attachmentName:[void 0,[et.required]],attachmentFileName:[void 0],releaseDate:[void 0],notificationText:[void 0]});isFileSelectionValid=D(()=>this.attachmentFile()||this.attachmentToBeUpdatedOrCreated()?.link);statusChanges=Z(this.form.statusChanges??"INVALID");isFormValid=D(()=>!this.attachmentToBeUpdatedOrCreated()||this.statusChanges()==="VALID"&&this.isFileSelectionValid()&&this.datePickerComponent()?.isValid());constructor(){z(()=>{this.notificationText=void 0,this.routeDataSubscription?.unsubscribe(),this.routeDataSubscription=this.activatedRoute.parent.data.subscribe(({lecture:e})=>{this.lectureId()?this.lectureService.findWithDetails(this.lectureId()).subscribe(a=>{this.lecture.set(a.body),this.loadAttachments()}):(this.lecture.set(e),this.loadAttachments())})})}loadAttachments(){this.attachmentService.findAllByLectureId(this.lecture().id).subscribe(e=>{this.attachments=e.body,this.attachments.forEach(a=>{this.viewButtonAvailable[a.id]=this.isViewButtonAvailable(a.link)})})}ngOnDestroy(){this.dialogErrorSource.unsubscribe(),this.routeDataSubscription?.unsubscribe()}isViewButtonAvailable(e){return e.endsWith(".pdf")??!1}addAttachment(){let e=new Lt;e.lecture=this.lecture(),e.attachmentType="FILE",e.version=0,e.uploadDate=g(),this.attachmentToBeUpdatedOrCreated.set(e)}saveAttachment(){if(this.attachmentToBeUpdatedOrCreated()&&(this.attachmentToBeUpdatedOrCreated().version++,this.attachmentToBeUpdatedOrCreated().uploadDate=g(),this.attachmentToBeUpdatedOrCreated().name=this.form.value.attachmentName??void 0,this.attachmentToBeUpdatedOrCreated().releaseDate=this.form.value.releaseDate??void 0,this.notificationText=this.form.value.notificationText??void 0,!(!this.attachmentFile()&&!this.attachmentToBeUpdatedOrCreated().id)))if(this.attachmentToBeUpdatedOrCreated().id){let e={};this.notificationText&&(e.notificationText=this.notificationText),this.attachmentService.update(this.attachmentToBeUpdatedOrCreated().id,this.attachmentToBeUpdatedOrCreated(),this.attachmentFile(),e).subscribe({next:a=>{this.resetAttachmentFormVariables(),this.notificationText=void 0,this.attachments=this.attachments.map(c=>c.id===a.body.id?a.body:c)},error:a=>this.handleFailedUpload(a)})}else this.attachmentService.create(this.attachmentToBeUpdatedOrCreated(),this.attachmentFile()).subscribe({next:e=>{this.attachments.push(e.body),this.lectureService.findWithDetails(this.lecture().id).subscribe(a=>{this.lecture.set(a.body)}),this.loadAttachments(),this.resetAttachmentFormVariables()},error:e=>this.handleFailedUpload(e)})}clearFormValues(){this.form.reset({attachmentName:void 0,attachmentFileName:void 0,releaseDate:void 0,notificationText:void 0})}resetAttachmentFormVariables(){this.attachmentFile.set(void 0),this.attachmentToBeUpdatedOrCreated.set(void 0),this.attachmentBackup=void 0,this.clearFormValues()}handleFailedUpload(e){this.errorMessage=e.message,this.erroredFile=this.attachmentFile(),this.fileInput.nativeElement.value="",this.attachmentFile.set(void 0),this.resetAttachment()}setFormValues(e){this.form.patchValue(e)}editAttachment(e){this.fileInput&&(this.fileInput.nativeElement.value=""),this.setFormValues({attachmentName:e?.name,releaseDate:g(e?.releaseDate),notificationText:this.notificationText}),this.attachmentToBeUpdatedOrCreated.set(e),this.attachmentBackup=Object.assign({},e,{})}deleteAttachment(e){this.attachmentService.delete(e.id).subscribe({next:()=>{this.attachments=this.attachments.filter(a=>a.id!==e.id),this.dialogErrorSource.next("")},error:a=>this.dialogErrorSource.next(a.message)})}cancel(){this.attachmentBackup&&this.resetAttachment(),this.attachmentToBeUpdatedOrCreated.set(void 0),this.erroredFile=void 0,this.resetAttachmentFormVariables()}resetAttachment(){this.attachmentBackup&&(this.attachments=this.attachments.map(e=>(e.id===this.attachmentBackup.id&&(e=this.attachmentBackup),e)),this.attachmentBackup=void 0)}trackId(e,a){return a.id}downloadAttachment(e,a){this.isDownloadingAttachmentLink||(this.isDownloadingAttachmentLink=a,this.fileService.downloadFileByAttachmentName(a,e),this.isDownloadingAttachmentLink=void 0)}setLectureAttachment(e){let a=e.target;if(!a.files?.length)return;let c=a.files[0];if(this.attachmentFile.set(c),this.attachmentToBeUpdatedOrCreated().link=c.name,this.attachmentToBeUpdatedOrCreated().name=this.form.value.attachmentName??void 0,!this.attachmentToBeUpdatedOrCreated().name){let m=this.determineAttachmentNameBasedOnFileName(c.name);this.attachmentToBeUpdatedOrCreated().name=m,this.form.patchValue({attachmentName:m})}}determineAttachmentNameBasedOnFileName(e){let a=/\.[^/.]+$/;return e.replace(a,"")}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=V({type:r,selectors:[["jhi-lecture-attachments"]],viewQuery:function(a,c){if(a&1&&(R(c.datePickerComponent,F,5),H(Dt,5)),a&2){G();let m;$(m=Q())&&(c.fileInput=m.first)}},inputs:{lectureId:[1,"lectureId"],showHeader:[1,"showHeader"]},decls:7,vars:1,consts:[["fileInput",""],[1,"row","justify-content-center"],[1,"col-12"],[1,"row"],["jhiTranslate","artemisApp.lecture.attachments.title"],[1,"col-6"],["jhiTranslate","artemisApp.lecture.startDate"],["jhiTranslate","artemisApp.lecture.endDate"],["jhiTranslate","artemisApp.lecture.description"],[1,"markdown-preview","editor-outline-background",3,"innerHTML"],[1,"mt-2","mb-2"],["jhiTranslate","artemisApp.lecture.attachments.attachments"],[1,"table-responsive"],[1,"table","table-striped","position-relative"],["jhiTranslate","global.field.id"],["jhiTranslate","artemisApp.lecture.attachments.name"],["jhiTranslate","artemisApp.lecture.attachments.type"],["jhiTranslate","artemisApp.lecture.attachments.releaseDate"],["jhiTranslate","artemisApp.lecture.attachments.uploadDate"],["jhiTranslate","artemisApp.lecture.attachments.version"],[3,"ngClass"],[1,"text-end"],[1,"flex-btn-group-container"],["type","button",1,"btn","btn-primary","btn-sm","me-1",3,"click","disabled"],[3,"icon"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],[1,"text-primary",3,"click"],[1,"text-primary"],["animation","spin",3,"icon"],["type","button",1,"btn","btn-primary","btn-sm","me-1",3,"routerLink","ngbTooltip"],["jhiTranslate","entity.action.view",1,"d-none","d-md-inline"],["type","button","jhiDeleteButton","","deleteQuestion","artemisApp.attachment.deleteQuestion",3,"delete","disabled","entityTitle","dialogError"],["jhiTranslate","artemisApp.lecture.attachments.isBeingEdited",1,"edit-overlay"],[3,"formGroup"],[1,"col-12","col-md-6"],[1,"form-group"],["for","attachmentName","jhiTranslate","artemisApp.lecture.attachments.name"],["type","text","id","attachmentName","name","attachmentName","formControlName","attachmentName",1,"form-control"],["jhiTranslate","artemisApp.lecture.attachments.file",1,"form-control-label",3,"for"],["id","fileHelp","jhiTranslate","artemisApp.lecture.attachments.fileLimitation",1,"form-text","text-body-secondary"],[3,"icon","ngbTooltip"],[1,"input-group","background-file"],[1,"custom-file","overflow-ellipsis"],["type","file","formControlName","attachmentFileName","aria-describedby","fileHelp",1,"custom-file-input",3,"change","id","accept","placeholder"],["formControlName","releaseDate",3,"labelName"],["id","upload-attachment","type","button",1,"btn","btn-primary","me-2",3,"click","disabled"],["jhiTranslate","entity.action.saveAttachment"],["type","button",1,"btn","btn-secondary",3,"click"],["jhiTranslate","entity.action.cancel"],["jhiTranslate","artemisApp.lecture.attachments.newAttachment"],["jhiTranslate","artemisApp.lecture.attachments.editAttachment"],["id","too-large-file-alert",1,"alert","alert-danger"],["for","attachmentName","jhiTranslate","artemisApp.lecture.attachments.notificationText"],["type","text","id","notificationText","formControlName","notificationText",1,"form-control",3,"placeholder"],["type","button","id","add-attachment",1,"btn","btn-primary",3,"click"],["jhiTranslate","entity.action.addAttachment"]],template:function(a,c){a&1&&(i(0,"div",1),t(1,`
    `),i(2,"div",2),t(3,`
        `),h(4,Jt,14,3),n(),t(5,`
`),n(),t(6,`
`)),a&2&&(o(4),u(c.lecture()?4:-1))},dependencies:[Et,J,At,Y,dt,bt,ct,at,tt,it,nt,mt,rt,ot,F,St,Tt,Ft],styles:[".edit-overlay[_ngcontent-%COMP%]{position:absolute;display:inline-flex;left:0;right:0;justify-content:center;z-index:9;font-size:18px;box-shadow:none}.edit-overlay-container[_ngcontent-%COMP%]{background-color:var(--lecture-attachment-edit-overlay-color)}.edit-overlay-container[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{opacity:10%}.edit-overlay-container[_ngcontent-%COMP%] > td[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{pointer-events:none;cursor:default}.invalid-file-input-margin[_ngcontent-%COMP%]{padding-left:.5em}"]})}return r})();export{be as a};
//# sourceMappingURL=chunk-SCKWR57U.js.map
