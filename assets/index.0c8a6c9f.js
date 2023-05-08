(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function A(){}const Ce=t=>t;function We(t){return t()}function Me(){return Object.create(null)}function F(t){t.forEach(We)}function Te(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ue;function E(t,e){return ue||(ue=document.createElement("a")),ue.href=e,t===ue.href}function it(t){return Object.keys(t).length===0}const Je=typeof window<"u";let Xe=Je?()=>window.performance.now():()=>Date.now(),Ee=Je?t=>requestAnimationFrame(t):A;const te=new Set;function Ye(t){te.forEach(e=>{e.c(t)||(te.delete(e),e.f())}),te.size!==0&&Ee(Ye)}function Ke(t){let e;return te.size===0&&Ee(Ye),{promise:new Promise(n=>{te.add(e={c:t,f:n})}),abort(){te.delete(e)}}}function c(t,e){t.appendChild(e)}function Qe(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function rt(t){const e=f("style");return ot(Qe(t),e),e.sheet}function ot(t,e){c(t.head||t,e)}function L(t,e,n){t.insertBefore(e,n||null)}function T(t){t.parentNode.removeChild(t)}function ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function Ue(t){return document.createTextNode(t)}function y(){return Ue(" ")}function P(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function at(t){return function(e){return e.preventDefault(),t.call(this,e)}}function i(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ft(t){return Array.from(t.childNodes)}function ut(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function oe(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Pe(t,e,n){t.classList[n?"add":"remove"](e)}function dt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,s,e),l}const pe=new Map;let he=0;function mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function gt(t,e){const n={stylesheet:rt(e),rules:{}};return pe.set(t,n),n}function Ze(t,e,n,s,l,r,o,m=0){const a=16.666/s;let u=`{
`;for(let b=0;b<=1;b+=a){const x=e+(n-e)*r(b);u+=b*100+`%{${o(x,1-x)}}
`}const d=u+`100% {${o(n,1-n)}}
}`,p=`__svelte_${mt(d)}_${m}`,g=Qe(t),{stylesheet:h,rules:_}=pe.get(g)||gt(g,t);_[p]||(_[p]=!0,h.insertRule(`@keyframes ${p} ${d}`,h.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${p} ${s}ms linear ${l}ms 1 both`,he+=1,p}function Se(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),l=n.length-s.length;l&&(t.style.animation=s.join(", "),he-=l,he||pt())}function pt(){Ee(()=>{he||(pe.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),pe.clear())})}let ce;function re(t){ce=t}function et(){if(!ce)throw new Error("Function called outside component initialization");return ce}function tt(t){et().$$.on_mount.push(t)}function ht(t){et().$$.on_destroy.push(t)}const ie=[],Ne=[],me=[],He=[],vt=Promise.resolve();let ze=!1;function _t(){ze||(ze=!0,vt.then(nt))}function V(t){me.push(t)}const ke=new Set;let de=0;function nt(){const t=ce;do{for(;de<ie.length;){const e=ie[de];de++,re(e),yt(e.$$)}for(re(null),ie.length=0,de=0;Ne.length;)Ne.pop()();for(let e=0;e<me.length;e+=1){const n=me[e];ke.has(n)||(ke.add(n),n())}me.length=0}while(ie.length);for(;He.length;)He.pop()();ze=!1,ke.clear(),re(t)}function yt(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}let le;function st(){return le||(le=Promise.resolve(),le.then(()=>{le=null})),le}function ve(t,e,n){t.dispatchEvent(dt(`${e?"intro":"outro"}${n}`))}const ge=new Set;let W;function _e(){W={r:0,c:[],p:W}}function ye(){W.r||F(W.c),W=W.p}function z(t,e){t&&t.i&&(ge.delete(t),t.i(e))}function j(t,e,n,s){if(t&&t.o){if(ge.has(t))return;ge.add(t),W.c.push(()=>{ge.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const lt={duration:0};function be(t,e,n){let s=e(t,n),l=!1,r,o,m=0;function a(){r&&Se(t,r)}function u(){const{delay:p=0,duration:g=300,easing:h=Ce,tick:_=A,css:v}=s||lt;v&&(r=Ze(t,0,1,g,p,h,v,m++)),_(0,1);const b=Xe()+p,x=b+g;o&&o.abort(),l=!0,V(()=>ve(t,!0,"start")),o=Ke(S=>{if(l){if(S>=x)return _(1,0),ve(t,!0,"end"),a(),l=!1;if(S>=b){const G=h((S-b)/g);_(G,1-G)}}return l})}let d=!1;return{start(){d||(d=!0,Se(t),Te(s)?(s=s(),st().then(u)):u())},invalidate(){d=!1},end(){l&&(a(),l=!1)}}}function $e(t,e,n){let s=e(t,n),l=!0,r;const o=W;o.r+=1;function m(){const{delay:a=0,duration:u=300,easing:d=Ce,tick:p=A,css:g}=s||lt;g&&(r=Ze(t,1,0,u,a,d,g));const h=Xe()+a,_=h+u;V(()=>ve(t,!1,"start")),Ke(v=>{if(l){if(v>=_)return p(0,1),ve(t,!1,"end"),--o.r||F(o.c),!1;if(v>=h){const b=d((v-h)/u);p(1-b,b)}}return l})}return Te(s)?st().then(()=>{s=s(),m()}):m(),{end(a){a&&s.tick&&s.tick(1,0),l&&(r&&Se(t,r),l=!1)}}}function ee(t){t&&t.c()}function X(t,e,n,s){const{fragment:l,on_mount:r,on_destroy:o,after_update:m}=t.$$;l&&l.m(e,n),s||V(()=>{const a=r.map(We).filter(Te);o?o.push(...a):F(a),t.$$.on_mount=[]}),m.forEach(V)}function Y(t,e){const n=t.$$;n.fragment!==null&&(F(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(ie.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(t,e,n,s,l,r,o,m=[-1]){const a=ce;re(t);const u=t.$$={fragment:null,ctx:null,props:r,update:A,not_equal:l,bound:Me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Me(),dirty:m,skip_bound:!1,root:e.target||a.$$.root};o&&o(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(p,g,...h)=>{const _=h.length?h[0]:g;return u.ctx&&l(u.ctx[p],u.ctx[p]=_)&&(!u.skip_bound&&u.bound[p]&&u.bound[p](_),d&&bt(t,p)),g}):[],u.update(),d=!0,F(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const p=ft(e.target);u.fragment&&u.fragment.l(p),p.forEach(T)}else u.fragment&&u.fragment.c();e.intro&&z(t.$$.fragment),X(t,e.target,e.anchor,e.customElement),nt()}re(a)}class U{$destroy(){Y(this,1),this.$destroy=A}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function $t(t){const e=t-1;return e*e*e+1}function Ie(t,{delay:e=0,duration:n=400,easing:s=Ce}={}){const l=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*l}`}}function ae(t,{delay:e=0,duration:n=400,easing:s=$t,x:l=0,y:r=0,opacity:o=0}={}){const m=getComputedStyle(t),a=+m.opacity,u=m.transform==="none"?"":m.transform,d=a*(1-o);return{delay:e,duration:n,easing:s,css:(p,g)=>`
			transform: ${u} translate(${(1-p)*l}px, ${(1-p)*r}px);
			opacity: ${a-d*g}`}}function Oe(t){let e,n,s,l,r,o,m,a,u,d;return{c(){e=f("div"),n=f("ul"),s=f("li"),s.textContent="About",l=y(),r=f("li"),r.textContent="Works",i(s,"href","#about"),i(s,"class","svelte-1e2300e"),i(r,"href","#works"),i(r,"class","svelte-1e2300e"),i(n,"class","svelte-1e2300e"),i(e,"class","sidemenu svelte-1e2300e")},m(p,g){L(p,e,g),c(e,n),c(n,s),c(n,l),c(n,r),a=!0,u||(d=[P(s,"click",t[2]),P(r,"click",t[2])],u=!0)},p:A,i(p){a||(V(()=>{m&&m.end(1),o=be(e,ae,{x:-300}),o.start()}),a=!0)},o(p){o&&o.invalidate(),m=$e(e,ae,{x:-300}),a=!1},d(p){p&&T(e),p&&m&&m.end(),u=!1,F(d)}}}function wt(t){let e,n,s,l,r,o,m,a,u,d,p,g,h,_,v=t[1]&&Oe(t);return{c(){e=f("nav"),n=f("div"),n.textContent="Syam SV",s=y(),l=f("div"),r=f("ul"),o=f("li"),o.textContent="About",m=y(),a=f("li"),a.textContent="Works",u=y(),d=f("div"),d.innerHTML=`<div>---</div> 
		<div>---</div> 
		<div>---</div>`,p=y(),v&&v.c(),i(n,"class","left-nav svelte-1e2300e"),i(o,"href","#about"),i(o,"class","svelte-1e2300e"),i(a,"href","#works"),i(a,"class","svelte-1e2300e"),i(r,"class","svelte-1e2300e"),i(l,"class","right-nav svelte-1e2300e"),i(d,"class","hamburger svelte-1e2300e"),i(e,"class","svelte-1e2300e"),Pe(e,"scrolled",t[0])},m(b,x){L(b,e,x),c(e,n),c(e,s),c(e,l),c(l,r),c(r,o),c(r,m),c(r,a),c(e,u),c(e,d),c(e,p),v&&v.m(e,null),g=!0,h||(_=[P(o,"click",t[2]),P(a,"click",t[2]),P(d,"click",at(t[3]))],h=!0)},p(b,[x]){b[1]?v?(v.p(b,x),x&2&&z(v,1)):(v=Oe(b),v.c(),z(v,1),v.m(e,null)):v&&(_e(),j(v,1,1,()=>{v=null}),ye()),x&1&&Pe(e,"scrolled",b[0])},i(b){g||(z(v),g=!0)},o(b){j(v),g=!1},d(b){b&&T(e),v&&v.d(),h=!1,F(_)}}}const kt=300;function xt(t,e,n){let s=!1,l=!1;function r({target:m}){n(1,l=!l);const a=document.querySelector(m.getAttribute("href"));!a||a.scrollIntoView({behavior:"smooth"})}return tt(()=>{window.onscroll=()=>{window.scrollY>kt?n(0,s=!0):(n(0,s=!1),n(1,l=!1))}}),ht(()=>{window.onscroll=()=>{}}),[s,l,r,()=>n(1,l=!l)]}class St extends U{constructor(e){super(),Q(this,e,xt,wt,K,{})}}const zt="/assets/ghost1.8c7df026.svg",It="/assets/happy.d08fbc34.svg",Ct="/assets/annoyed.b357e085.svg",Tt="/assets/wtfh.02b6cc9d.svg",qe="/assets/question.cfd737d0.svg",Re="/assets/exclaim.233b5d25.svg",Et="/assets/filler1.cece4d9d.svg",At="/assets/filler3.9345c54c.svg";function Be(t,e,n){const s=t.slice();return s[2]=e[n],s}function De(t){let e,n,s;return{c(){e=f("div"),n=f("img"),E(n.src,s=t[2].image)||i(n,"src",s),i(n,"alt",""),i(n,"class","svelte-1wvptth"),i(e,"class","filler svelte-1wvptth"),oe(e,"margin",t[2].top+" "+t[2].right+" "+t[2].bottom+" "+t[2].left)},m(l,r){L(l,e,r),c(e,n)},p:A,d(l){l&&T(e)}}}function Lt(t){let e,n,s,l,r,o,m,a,u,d,p,g,h,_,v,b,x,S,G,ne,M,R,q,Z,B,J,N=t[1],k=[];for(let $=0;$<N.length;$+=1)k[$]=De(Be(t,N,$));return{c(){e=f("section");for(let $=0;$<k.length;$+=1)k[$].c();n=y(),s=f("div"),l=f("img"),o=y(),m=f("div"),m.innerHTML=`<span class="greeting svelte-1wvptth">Hello !</span> 
        <span class="greeting2 svelte-1wvptth">I&#39;m Syam SV</span>`,a=y(),u=f("section"),d=f("div"),d.textContent=`Coding is a huge source of inspiration for me. I enjoy doing it and
        providing memorable experiences for others. I usually sleep or listen to
        music when I'm not coding or discovering new things.`,p=y(),g=f("div"),h=f("div"),_=f("img"),b=y(),x=f("div"),S=f("img"),ne=y(),M=f("img"),q=y(),Z=f("div"),B=f("img"),E(l.src,r=zt)||i(l,"src",r),i(l,"class","img svelte-1wvptth"),i(l,"alt","ghost"),i(s,"class","left1"),i(m,"class","right1 svelte-1wvptth"),i(e,"class","container1 svelte-1wvptth"),i(d,"class","left2 svelte-1wvptth"),E(_.src,v=It)||i(_,"src",v),i(_,"alt",""),i(_,"class","img2 svelte-1wvptth"),E(S.src,G=Ct)||i(S,"src",G),i(S,"alt",""),i(S,"class","img2 svelte-1wvptth"),oe(S,"transform","scaleX("+t[0]+")"),E(M.src,R=t[0]==1?qe:Re)||i(M,"src",R),i(M,"alt",""),i(M,"class","img3 svelte-1wvptth"),E(B.src,J=Tt)||i(B,"src",J),i(B,"alt",""),i(B,"class","img2 svelte-1wvptth"),i(g,"class","right2 svelte-1wvptth"),i(u,"class","container2 svelte-1wvptth"),i(u,"id","about")},m($,H){L($,e,H);for(let w=0;w<k.length;w+=1)k[w].m(e,null);c(e,n),c(e,s),c(s,l),c(e,o),c(e,m),L($,a,H),L($,u,H),c(u,d),c(u,p),c(u,g),c(g,h),c(h,_),c(g,b),c(g,x),c(x,S),c(x,ne),c(x,M),c(g,q),c(g,Z),c(Z,B)},p($,[H]){if(H&2){N=$[1];let w;for(w=0;w<N.length;w+=1){const O=Be($,N,w);k[w]?k[w].p(O,H):(k[w]=De(O),k[w].c(),k[w].m(e,n))}for(;w<k.length;w+=1)k[w].d(1);k.length=N.length}H&1&&oe(S,"transform","scaleX("+$[0]+")"),H&1&&!E(M.src,R=$[0]==1?qe:Re)&&i(M,"src",R)},i:A,o:A,d($){$&&T(e),ct(k,$),$&&T(a),$&&T(u)}}}function jt(t,e,n){const s=[{image:Et,top:"20em",right:"-50em",bottom:"0em",left:"0em"},{image:At,top:"-34em",right:"0em",bottom:"0em",left:"-40em"}];let l=1;return setInterval(()=>{n(0,l=-l)},1e3),[l,s]}class Mt extends U{constructor(e){super(),Q(this,e,jt,Lt,K,{})}}const Pt="/assets/think.938f77ab.svg";function Nt(t){let e,n,s,l,r,o,m,a,u;return{c(){e=f("section"),n=f("div"),s=f("span"),l=Ue(t[0]),r=y(),o=f("img"),a=y(),u=f("div"),u.innerHTML=`So, once again, I&#39;m Syam SV, a self-taught and motivated developer
        bringing you programming and design just for fun. I have experience
        developing web and desktop applications(web technology), including front-end and
        back-end development.<br/><br/> I am currently in India, where I&#39;m at VIT
        Bhopal pursuing a B.Tech in cybersecurity and digital forensics. I am fascinated
        by 3D effects, animations, and the creation of intuitive, dynamic user experiences.
        I&#39;m interested in the entire web and 3D world and enjoy working on challenging
        projects with positive people.`,i(s,"class","middle3 svelte-8cpv1g"),i(o,"draggable","false"),E(o.src,m=Pt)||i(o,"src",m),i(o,"alt",""),i(o,"class","svelte-8cpv1g"),i(n,"class","left3 svelte-8cpv1g"),i(u,"class","right3 svelte-8cpv1g"),i(e,"class","container3 svelte-8cpv1g")},m(d,p){L(d,e,p),c(e,n),c(n,s),c(s,l),c(n,r),c(n,o),c(e,a),c(e,u)},p(d,[p]){p&1&&ut(l,d[0])},i:A,o:A,d(d){d&&T(e)}}}function Ht(t,e,n){const s=["HTML","Css","Javascript","Typescript","Svelte","React","Python","Node Js","Java","C++","Go","Blender","Git","Sass","npm","Yarn","SQL","Tauri","Electron"],l=s.length;let r=0,o;return setInterval(function(){n(0,o=s[r]),r=(r+1)%l},1e3),[o]}class Ot extends U{constructor(e){super(),Q(this,e,Ht,Nt,K,{})}}const qt="/assets/circle.3d64f8dd.svg",Rt="/assets/board.dcf4034b.svg";function Bt(t){let e,n,s,l,r,o,m,a,u;return{c(){e=f("section"),n=f("div"),n.innerHTML=`The lion&#39;s share of the tasks I worked on were  personal or group
        projects ranging from web apps to shell applications. It was a fun
        journey learning different technologies, discovering bugs and logical
        errors, debugging them, deleting, restarting from scratch, and finishing
        them with satisfaction.
        <br/><br/>
        This website, built in Svelte and heavily influenced by doddle animations,
        is one of my all-time favorites. In addition, I&#39;m currently working on <a href="https://github.com/simple-svelte-ui" class="svelte-1iph16n">simple-svelte-ui</a>,
        a svelte component library. Not to mention <a href="https://github.com/syamsv/Pyosint" class="svelte-1iph16n">Pyosint</a> and <a href="https://github.com/syamsv/Arjuna" class="svelte-1iph16n">Arjuna</a>, two projects
        on which I collaborated with a fantastic team, and the list goes on.`,s=y(),l=f("div"),r=f("span"),r.textContent="More on Github",o=y(),m=f("a"),a=f("img"),i(n,"class","left4 svelte-1iph16n"),i(r,"class","middle4 svelte-1iph16n"),i(a,"draggable","false"),i(a,"class","img4 svelte-1iph16n"),E(a.src,u=Rt)||i(a,"src",u),i(a,"alt",""),i(m,"href","https://github.com/syamsv?tab=repositories"),i(l,"class","right4 svelte-1iph16n"),i(e,"class","container4 svelte-1iph16n"),i(e,"id","works")},m(d,p){L(d,e,p),c(e,n),c(e,s),c(e,l),c(l,r),c(l,o),c(l,m),c(m,a)},p:A,i:A,o:A,d(d){d&&T(e)}}}class Dt extends U{constructor(e){super(),Q(this,e,null,Bt,K,{})}}function Ve(t){let e,n,s,l,r,o;return{c(){e=f("div"),n=f("img"),E(n.src,s=qt)||i(n,"src",s),i(n,"alt",""),i(n,"class","svelte-1pquf5"),i(e,"class","loader svelte-1pquf5")},m(m,a){L(m,e,a),c(e,n),o=!0},p:A,i(m){o||(V(()=>{r&&r.end(1),l=be(e,Ie,{}),l.start()}),o=!0)},o(m){l&&l.invalidate(),r=$e(e,Ie,{}),o=!1},d(m){m&&T(e),m&&r&&r.end()}}}function Vt(t){let e,n,s,l,r,o,m,a,u,d,p,g=!t[0]&&Ve();return s=new St({}),o=new Mt({}),a=new Ot({}),d=new Dt({}),{c(){g&&g.c(),e=y(),n=f("div"),ee(s.$$.fragment),l=y(),r=f("main"),ee(o.$$.fragment),m=y(),ee(a.$$.fragment),u=y(),ee(d.$$.fragment),i(r,"id","home"),i(r,"class","svelte-1pquf5")},m(h,_){g&&g.m(h,_),L(h,e,_),L(h,n,_),X(s,n,null),c(n,l),c(n,r),X(o,r,null),c(r,m),X(a,r,null),c(r,u),X(d,r,null),p=!0},p(h,[_]){h[0]?g&&(_e(),j(g,1,1,()=>{g=null}),ye()):g?(g.p(h,_),_&1&&z(g,1)):(g=Ve(),g.c(),z(g,1),g.m(e.parentNode,e))},i(h){p||(z(g),z(s.$$.fragment,h),z(o.$$.fragment,h),z(a.$$.fragment,h),z(d.$$.fragment,h),p=!0)},o(h){j(g),j(s.$$.fragment,h),j(o.$$.fragment,h),j(a.$$.fragment,h),j(d.$$.fragment,h),p=!1},d(h){g&&g.d(h),h&&T(e),h&&T(n),Y(s),Y(o),Y(a),Y(d)}}}function Ft(t,e,n){let s=!1;return tt(()=>{setTimeout(()=>{n(0,s=!0),window.scroll(0,0)},2e3)}),[s]}class Gt extends U{constructor(e){super(),Q(this,e,Ft,Vt,K,{})}}const Wt="/assets/mouse.94875d9b.svg",Jt="/assets/linkedin.0e5ba365.svg",Xt="/assets/github.85f780d7.svg",Yt="/assets/twitter.b06783ab.svg",Kt="/assets/mail.cf2c4e15.svg",Qt="/assets/popupghost.b2db0809.svg";function Fe(t){let e,n,s,l,r;return{c(){e=f("img"),i(e,"draggable","false"),E(e.src,n=Qt)||i(e,"src",n),i(e,"alt",""),i(e,"class","popupghost svelte-1gzokh8")},m(o,m){L(o,e,m),r=!0},p:A,i(o){r||(V(()=>{l&&l.end(1),s=be(e,ae,{y:100,duration:500}),s.start()}),r=!0)},o(o){s&&s.invalidate(),l=$e(e,ae,{y:-100,duration:500}),r=!1},d(o){o&&T(e),o&&l&&l.end()}}}function Ge(t){let e,n,s,l;return{c(){e=f("span"),e.textContent="copied to clipboard",i(e,"class","footerc svelte-1gzokh8")},m(r,o){L(r,e,o),l=!0},i(r){l||(V(()=>{s&&s.end(1),n=be(e,ae,{y:200,duration:600}),n.start()}),l=!0)},o(r){n&&n.invalidate(),s=$e(e,Ie,{}),l=!1},d(r){r&&T(e),r&&s&&s.end()}}}function Ut(t){let e,n,s,l,r,o,m,a,u,d,p,g,h,_,v,b,x,S,G,ne,M,R,q,Z,B,J,N,k,$,H,w,O,Ae,Le,fe,we,je,I=t[0]&&Fe(),C=t[1]&&Ge();return{c(){e=f("footer"),n=f("div"),s=f("ul"),l=f("li"),l.textContent="Home",r=y(),o=f("li"),o.textContent="About",m=y(),a=f("li"),a.textContent="Works",u=y(),d=f("a"),d.innerHTML='<li class="svelte-1gzokh8">Resume</li>',p=y(),g=f("div"),I&&I.c(),h=y(),_=f("div"),v=f("ul"),b=f("li"),x=f("a"),S=f("img"),ne=y(),M=f("li"),R=f("a"),q=f("img"),B=y(),J=f("li"),N=f("a"),k=f("img"),H=y(),w=f("li"),O=f("img"),Le=y(),C&&C.c(),i(l,"href","#home"),i(l,"class","svelte-1gzokh8"),i(o,"href","#about"),i(o,"class","svelte-1gzokh8"),i(a,"href","#works"),i(a,"class","svelte-1gzokh8"),i(d,"href","https://github.com/d8rkmind/public/raw/main/data/Syam_SV_Resume.pdf"),i(d,"class","svelte-1gzokh8"),i(s,"class","svelte-1gzokh8"),i(n,"class","fleft svelte-1gzokh8"),i(g,"class","fright svelte-1gzokh8"),i(S,"draggable","false"),E(S.src,G=Jt)||i(S,"src",G),i(S,"alt","Linkedin"),i(S,"class","img5 svelte-1gzokh8"),i(x,"href","https://linkedin.com/in/syam-sv-7b411a242"),i(b,"class","svelte-1gzokh8"),i(q,"draggable","false"),E(q.src,Z=Xt)||i(q,"src",Z),i(q,"alt","Github"),i(q,"class","img5 svelte-1gzokh8"),i(R,"href","https://github.com/d8rkmind"),i(M,"class","svelte-1gzokh8"),i(k,"draggable","false"),E(k.src,$=Yt)||i(k,"src",$),i(k,"alt","Twitter"),i(k,"class","img5 svelte-1gzokh8"),i(N,"href","https://twitter.com/SyamSv"),i(J,"class","svelte-1gzokh8"),i(O,"draggable","false"),E(O.src,Ae=Kt)||i(O,"src",Ae),i(O,"alt","Github"),i(O,"class","img5 svelte-1gzokh8"),i(w,"class","mail svelte-1gzokh8"),i(v,"class","svelte-1gzokh8"),i(_,"class","fmiddle svelte-1gzokh8"),i(e,"class","svelte-1gzokh8")},m(D,se){L(D,e,se),c(e,n),c(n,s),c(s,l),c(s,r),c(s,o),c(s,m),c(s,a),c(s,u),c(s,d),c(e,p),c(e,g),I&&I.m(g,null),c(e,h),c(e,_),c(_,v),c(v,b),c(b,x),c(x,S),c(v,ne),c(v,M),c(M,R),c(R,q),c(v,B),c(v,J),c(J,N),c(N,k),c(v,H),c(v,w),c(w,O),c(w,Le),C&&C.m(w,null),fe=!0,we||(je=[P(l,"click",xe),P(o,"click",xe),P(a,"click",xe),P(O,"click",t[2]),P(e,"mouseenter",t[3]),P(e,"mouseleave",t[4])],we=!0)},p(D,[se]){D[0]?I?(I.p(D,se),se&1&&z(I,1)):(I=Fe(),I.c(),z(I,1),I.m(g,null)):I&&(_e(),j(I,1,1,()=>{I=null}),ye()),D[1]?C?se&2&&z(C,1):(C=Ge(),C.c(),z(C,1),C.m(w,null)):C&&(_e(),j(C,1,1,()=>{C=null}),ye())},i(D){fe||(z(I),z(C),fe=!0)},o(D){j(I),j(C),fe=!1},d(D){D&&T(e),I&&I.d(),C&&C.d(),we=!1,F(je)}}}function xe({target:t}){const e=document.querySelector(t.getAttribute("href"));!e||e.scrollIntoView({behavior:"smooth"})}function Zt(t,e,n){let s=!1,l=!1;function r(){n(1,l=!0),navigator.clipboard.writeText("syamsv01@gmail.com"),setTimeout(()=>{n(1,l=!1)},1e3)}function o(){n(0,s=!0),console.log(s)}function m(){n(0,s=!1),console.log(s)}return[s,l,r,o,m]}class en extends U{constructor(e){super(),Q(this,e,Zt,Ut,K,{})}}function tn(t){let e,n,s;return{c(){e=f("div"),n=f("img"),E(n.src,s=Wt)||i(n,"src",s),i(n,"alt",""),i(n,"class","mouseimg svelte-17fk4nt"),i(e,"class","trail svelte-17fk4nt"),oe(e,"transform","translate("+t[0]+"px, "+t[1]+"px)")},m(l,r){L(l,e,r),c(e,n)},p(l,r){r&3&&oe(e,"transform","translate("+l[0]+"px, "+l[1]+"px)")},d(l){l&&T(e)}}}function nn(t){let e,n,s,l,r,o,m,a,u=!t[3]&&tn(t);return s=new Gt({}),r=new en({}),{c(){e=f("div"),u&&u.c(),n=y(),ee(s.$$.fragment),l=y(),ee(r.$$.fragment),i(e,"class","wrap svelte-17fk4nt")},m(d,p){L(d,e,p),u&&u.m(e,null),c(e,n),X(s,e,null),c(e,l),X(r,e,null),o=!0,m||(a=P(e,"mousemove",t[2]),m=!0)},p(d,[p]){d[3]||u.p(d,p)},i(d){o||(z(s.$$.fragment,d),z(r.$$.fragment,d),o=!0)},o(d){j(s.$$.fragment,d),j(r.$$.fragment,d),o=!1},d(d){d&&T(e),u&&u.d(),Y(s),Y(r),m=!1,a()}}}function sn(t,e,n){let s=window.innerWidth/2,l=window.innerHeight/3;function r(m){n(0,s=m.clientX),n(1,l=m.clientY)}const o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);return[s,l,r,o]}class ln extends U{constructor(e){super(),Q(this,e,sn,nn,K,{})}}new ln({target:document.getElementById("app")});
