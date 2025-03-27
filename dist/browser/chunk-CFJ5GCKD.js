import{a as z}from"./chunk-YOWUV6EQ.js";import{a as A}from"./chunk-X3HHHVRJ.js";import{a as V}from"./chunk-K3W6YFKH.js";import{Bb as x,Db as l,Dc as B,Ma as u,Mc as m,Na as p,Oc as d,Sc as y,Tb as S,Yc as k,Za as _,Zb as C,Zc as F,_c as T,dd as i,fd as w,kc as g,sc as v,vc as h,wc as b,xc as a,yc as s,yd as H,zc as f,zd as E}from"./chunk-5LC5EQRR.js";var $=["statusBar"],I=(n,c)=>c.title;function M(n,c){if(n&1){let e=B();i(0,`
                `),a(1,"div",4),i(2,`
                    `),a(3,"div",5),m("click",function(){let o=u(e).$implicit,r=d(2);return p(r.scrollToHeadline(o.title))}),i(4,`
                        `),f(5,"jhi-checklist-check",6),i(6,`
                    `),s(),i(7,`
                    `),a(8,"a",7),m("click",function(){let o=u(e).$implicit,r=d(2);return p(r.scrollToHeadline(o.title))}),i(9),H(10,"artemisTranslate"),s(),i(11,`
                `),s(),i(12,`
            `)}if(n&2){let e=c.$implicit,t=c.$index;l(),y("id","status-bar-section-item-",t,""),l(4),g("checkAttribute",e.valid)("iconColor",e.empty&&e.valid?"var(--bs-gray)":void 0),l(4),w(`
                        `,E(10,5,e.title),`
                    `)}}function D(n,c){if(n&1&&(i(0,`
    `),a(1,"div",1,0),i(3,`
        `),f(4,"hr",2),i(5,`
        `),a(6,"div",3),i(7,`
            `),h(8,M,13,7,null,null,I),s(),i(10,`
    `),s(),i(11,`
`)),n&2){let e=d();l(8),b(e.formStatusSections())}}var J=(()=>{class n{formStatusSections=_.required();statusBar;onResizeAddDistanceFromStatusBarToNavbar(){z()}ngAfterViewInit(){this.onResizeAddDistanceFromStatusBarToNavbar()}scrollToHeadline(e){let t=document.getElementById(e);if(t){let o=document.querySelector("jhi-navbar")?.getBoundingClientRect().height,r=this.statusBar?.nativeElement.getBoundingClientRect().height,R=o+r;t.style.scrollMarginTop=`${R}px`,t.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["jhi-form-status-bar"]],viewQuery:function(t,o){if(t&1&&k($,5),t&2){let r;F(r=T())&&(o.statusBar=r.first)}},hostBindings:function(t,o){t&1&&m("resize",function(){return o.onResizeAddDistanceFromStatusBarToNavbar()},!1,x)},inputs:{formStatusSections:[1,"formStatusSections"]},decls:1,vars:1,consts:[["statusBar",""],[1,"form-status-bar-container","pt-2","pb-1"],[1,"form-status-line"],[1,"d-flex","justify-content-between"],[1,"d-flex","flex-column","align-items-center",3,"id"],[1,"form-status-circle","border","rounded-circle",3,"click"],[1,"fa-sm","position-absolute","top-50","start-50","translate-middle",3,"checkAttribute","iconColor"],[1,"d-none","d-sm-inline","link-primary",3,"click"]],template:function(t,o){t&1&&C(0,D,12,0),t&2&&v(o.formStatusSections()?0:-1)},dependencies:[A,V],styles:[".form-status-bar-container[_ngcontent-%COMP%]{position:sticky;top:0;z-index:7;background-color:var(--bs-card-bg)}.form-status-line[_ngcontent-%COMP%]{position:absolute;top:calc(16px + .5rem);right:0;left:0;margin:0}.form-status-circle[_ngcontent-%COMP%]{position:relative;z-index:8;height:1.5rem;width:1.5rem;background-color:var(--bs-card-bg);cursor:pointer}"]})}return n})();export{J as a};
//# sourceMappingURL=chunk-CFJ5GCKD.js.map
