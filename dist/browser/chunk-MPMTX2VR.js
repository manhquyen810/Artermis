import{a as f}from"./chunk-U54OSGNH.js";import{Ea as d,Ib as h,Tb as p,_a as g,dd as n,xc as m,yc as c,zc as r}from"./chunk-5LC5EQRR.js";var k=(()=>{class o{renderer=d(h);elementRef=d(g);colors=["#F00","#F90","#FF0","#9F0","#0F0"];measureStrength(t){let e=0,i=/[$-/:-?{-~!"^_`[\]]/g,l=/[a-z]+/.test(t),s=/[A-Z]+/.test(t),x=/[0-9]+/.test(t),u=i.test(t),a=[l,s,x,u].filter(C=>C===!0).length;return e+=2*t.length+(t.length>=10?1:0),e+=a*10,e=t.length<=6?Math.min(e,10):e,e=a===1?Math.min(e,10):e,e=a===2?Math.min(e,20):e,e=a===3?Math.min(e,40):e,e}getColor(t){let e=0;return t<=10?e=0:t<=20?e=1:t<=30?e=2:t<=40?e=3:e=4,{idx:e+1,color:this.colors[e]}}set passwordToCheck(t){if(t){let e=this.getColor(this.measureStrength(t)),i=this.elementRef.nativeElement;i.className&&this.renderer.removeClass(i,i.className);let l=i.getElementsByTagName("li");for(let s=0;s<l.length;s++)s<e.idx?this.renderer.setStyle(l[s],"backgroundColor",e.color):this.renderer.setStyle(l[s],"backgroundColor","#DDD")}}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["jhi-password-strength-bar"]],inputs:{passwordToCheck:"passwordToCheck"},decls:19,vars:0,consts:[["id","strength"],["jhiTranslate","global.messages.validate.newpassword.strength"],["id","strengthBar"],[1,"point"]],template:function(e,i){e&1&&(n(0," "),m(1,"div",0),n(2,`
        `),m(3,"small",1),n(4,"Password strength:"),c(),n(5,`
        `),m(6,"ul",2),n(7,`
            `),r(8,"li",3),n(9,`
            `),r(10,"li",3),n(11,`
            `),r(12,"li",3),n(13,`
            `),r(14,"li",3),n(15,`
            `),r(16,"li",3),n(17,`
        `),c(),n(18,`
    `),c())},dependencies:[f],styles:["ul#strength[_ngcontent-%COMP%]{display:inline;list-style:none;margin:0 0 0 15px;padding:0;vertical-align:2px}.point[_ngcontent-%COMP%]{background:#ddd;border-radius:2px;display:inline-block;height:5px;margin-right:1px;width:20px}.point[_ngcontent-%COMP%]:last-child{margin:0!important}"]})}return o})();export{k as a};
//# sourceMappingURL=chunk-MPMTX2VR.js.map
