(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Jl(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function zo(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=at(i)?am(i):zo(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(at(n))return n;if(tt(n))return n}}const rm=/;(?![^(]*\))/g,sm=/:([^]+)/,om=/\/\*.*?\*\//gs;function am(n){const e={};return n.replace(om,"").split(rm).forEach(t=>{if(t){const i=t.split(sm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ql(n){let e="";if(at(n))e=n;else if(Ne(n))for(let t=0;t<n.length;t++){const i=Ql(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cm=Jl(lm);function Ed(n){return!!n||n===""}const bl=n=>at(n)?n:n==null?"":Ne(n)||tt(n)&&(n.toString===Cd||!ze(n.toString))?JSON.stringify(n,wd,2):String(n),wd=(n,e)=>e&&e.__v_isRef?wd(n,e.value):Ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Td(e)?{[`Set(${e.size})`]:[...e.values()]}:tt(e)&&!Ne(e)&&!Ld(e)?String(e):e,Qe={},Tr=[],fn=()=>{},um=()=>!1,fm=/^on[^a-z]/,Uo=n=>fm.test(n),ec=n=>n.startsWith("onUpdate:"),Mt=Object.assign,tc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},dm=Object.prototype.hasOwnProperty,je=(n,e)=>dm.call(n,e),Ne=Array.isArray,Ar=n=>Bo(n)==="[object Map]",Td=n=>Bo(n)==="[object Set]",ze=n=>typeof n=="function",at=n=>typeof n=="string",nc=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",Ad=n=>tt(n)&&ze(n.then)&&ze(n.catch),Cd=Object.prototype.toString,Bo=n=>Cd.call(n),hm=n=>Bo(n).slice(8,-1),Ld=n=>Bo(n)==="[object Object]",ic=n=>at(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,So=Jl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ko=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},pm=/-(\w)/g,Ln=ko(n=>n.replace(pm,(e,t)=>t?t.toUpperCase():"")),mm=/\B([A-Z])/g,jr=ko(n=>n.replace(mm,"-$1").toLowerCase()),Vo=ko(n=>n.charAt(0).toUpperCase()+n.slice(1)),ga=ko(n=>n?`on${Vo(n)}`:""),bs=(n,e)=>!Object.is(n,e),_a=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Lo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},gm=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let jc;const _m=()=>jc||(jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let on;class vm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=on;try{return on=this,e()}finally{on=t}}}on(){on=this}off(){on=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function xm(n,e=on){e&&e.active&&e.effects.push(n)}function bm(){return on}const rc=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Dd=n=>(n.w&ui)>0,Pd=n=>(n.n&ui)>0,ym=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=ui},Mm=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Dd(r)&&!Pd(r)?r.delete(n):e[t++]=r,r.w&=~ui,r.n&=~ui}e.length=t}},yl=new WeakMap;let fs=0,ui=1;const Ml=30;let an;const ki=Symbol(""),Sl=Symbol("");class sc{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,xm(this,i)}run(){if(!this.active)return this.fn();let e=an,t=ai;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=an,an=this,ai=!0,ui=1<<++fs,fs<=Ml?ym(this):Xc(this),this.fn()}finally{fs<=Ml&&Mm(this),ui=1<<--fs,an=this.parent,ai=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){an===this?this.deferStop=!0:this.active&&(Xc(this),this.onStop&&this.onStop(),this.active=!1)}}function Xc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let ai=!0;const Rd=[];function Xr(){Rd.push(ai),ai=!1}function Yr(){const n=Rd.pop();ai=n===void 0?!0:n}function zt(n,e,t){if(ai&&an){let i=yl.get(n);i||yl.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=rc()),Id(r)}}function Id(n,e){let t=!1;fs<=Ml?Pd(n)||(n.n|=ui,t=!Dd(n)):t=!n.has(an),t&&(n.add(an),an.deps.push(n))}function qn(n,e,t,i,r,s){const a=yl.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Ne(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Ne(n)?ic(t)&&o.push(a.get("length")):(o.push(a.get(ki)),Ar(n)&&o.push(a.get(Sl)));break;case"delete":Ne(n)||(o.push(a.get(ki)),Ar(n)&&o.push(a.get(Sl)));break;case"set":Ar(n)&&o.push(a.get(ki));break}if(o.length===1)o[0]&&El(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);El(rc(l))}}function El(n,e){const t=Ne(n)?n:[...n];for(const i of t)i.computed&&Yc(i);for(const i of t)i.computed||Yc(i)}function Yc(n,e){(n!==an||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Sm=Jl("__proto__,__v_isRef,__isVue"),Od=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(nc)),Em=oc(),wm=oc(!1,!0),Tm=oc(!0),Kc=Am();function Am(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ye(this);for(let s=0,a=this.length;s<a;s++)zt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ye)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Xr();const i=Ye(this)[e].apply(this,t);return Yr(),i}}),n}function Cm(n){const e=Ye(this);return zt(e,"has",n),e.hasOwnProperty(n)}function oc(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Wm:Bd:e?Ud:zd).get(i))return i;const a=Ne(i);if(!n){if(a&&je(Kc,r))return Reflect.get(Kc,r,s);if(r==="hasOwnProperty")return Cm}const o=Reflect.get(i,r,s);return(nc(r)?Od.has(r):Sm(r))||(n||zt(i,"get",r),e)?o:bt(o)?a&&ic(r)?o:o.value:tt(o)?n?kd(o):cc(o):o}}const Lm=Nd(),Dm=Nd(!0);function Nd(n=!1){return function(t,i,r,s){let a=t[i];if(Or(a)&&bt(a)&&!bt(r))return!1;if(!n&&(!Do(r)&&!Or(r)&&(a=Ye(a),r=Ye(r)),!Ne(t)&&bt(a)&&!bt(r)))return a.value=r,!0;const o=Ne(t)&&ic(i)?Number(i)<t.length:je(t,i),l=Reflect.set(t,i,r,s);return t===Ye(s)&&(o?bs(r,a)&&qn(t,"set",i,r):qn(t,"add",i,r)),l}}function Pm(n,e){const t=je(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&qn(n,"delete",e,void 0),i}function Rm(n,e){const t=Reflect.has(n,e);return(!nc(e)||!Od.has(e))&&zt(n,"has",e),t}function Im(n){return zt(n,"iterate",Ne(n)?"length":ki),Reflect.ownKeys(n)}const Fd={get:Em,set:Lm,deleteProperty:Pm,has:Rm,ownKeys:Im},Om={get:Tm,set(n,e){return!0},deleteProperty(n,e){return!0}},Nm=Mt({},Fd,{get:wm,set:Dm}),ac=n=>n,Go=n=>Reflect.getPrototypeOf(n);function Gs(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ye(n),s=Ye(e);t||(e!==s&&zt(r,"get",e),zt(r,"get",s));const{has:a}=Go(r),o=i?ac:t?fc:ys;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function Hs(n,e=!1){const t=this.__v_raw,i=Ye(t),r=Ye(n);return e||(n!==r&&zt(i,"has",n),zt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Ws(n,e=!1){return n=n.__v_raw,!e&&zt(Ye(n),"iterate",ki),Reflect.get(n,"size",n)}function Zc(n){n=Ye(n);const e=Ye(this);return Go(e).has.call(e,n)||(e.add(n),qn(e,"add",n,n)),this}function Jc(n,e){e=Ye(e);const t=Ye(this),{has:i,get:r}=Go(t);let s=i.call(t,n);s||(n=Ye(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?bs(e,a)&&qn(t,"set",n,e):qn(t,"add",n,e),this}function Qc(n){const e=Ye(this),{has:t,get:i}=Go(e);let r=t.call(e,n);r||(n=Ye(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&qn(e,"delete",n,void 0),s}function eu(){const n=Ye(this),e=n.size!==0,t=n.clear();return e&&qn(n,"clear",void 0,void 0),t}function $s(n,e){return function(i,r){const s=this,a=s.__v_raw,o=Ye(a),l=e?ac:n?fc:ys;return!n&&zt(o,"iterate",ki),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function qs(n,e,t){return function(...i){const r=this.__v_raw,s=Ye(r),a=Ar(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?ac:e?fc:ys;return!e&&zt(s,"iterate",l?Sl:ki),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Kn(n){return function(...e){return n==="delete"?!1:this}}function Fm(){const n={get(s){return Gs(this,s)},get size(){return Ws(this)},has:Hs,add:Zc,set:Jc,delete:Qc,clear:eu,forEach:$s(!1,!1)},e={get(s){return Gs(this,s,!1,!0)},get size(){return Ws(this)},has:Hs,add:Zc,set:Jc,delete:Qc,clear:eu,forEach:$s(!1,!0)},t={get(s){return Gs(this,s,!0)},get size(){return Ws(this,!0)},has(s){return Hs.call(this,s,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:$s(!0,!1)},i={get(s){return Gs(this,s,!0,!0)},get size(){return Ws(this,!0)},has(s){return Hs.call(this,s,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:$s(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=qs(s,!1,!1),t[s]=qs(s,!0,!1),e[s]=qs(s,!1,!0),i[s]=qs(s,!0,!0)}),[n,t,e,i]}const[zm,Um,Bm,km]=Fm();function lc(n,e){const t=e?n?km:Bm:n?Um:zm;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(je(t,r)&&r in i?t:i,r,s)}const Vm={get:lc(!1,!1)},Gm={get:lc(!1,!0)},Hm={get:lc(!0,!1)},zd=new WeakMap,Ud=new WeakMap,Bd=new WeakMap,Wm=new WeakMap;function $m(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qm(n){return n.__v_skip||!Object.isExtensible(n)?0:$m(hm(n))}function cc(n){return Or(n)?n:uc(n,!1,Fd,Vm,zd)}function jm(n){return uc(n,!1,Nm,Gm,Ud)}function kd(n){return uc(n,!0,Om,Hm,Bd)}function uc(n,e,t,i,r){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=qm(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Cr(n){return Or(n)?Cr(n.__v_raw):!!(n&&n.__v_isReactive)}function Or(n){return!!(n&&n.__v_isReadonly)}function Do(n){return!!(n&&n.__v_isShallow)}function Vd(n){return Cr(n)||Or(n)}function Ye(n){const e=n&&n.__v_raw;return e?Ye(e):n}function Gd(n){return Lo(n,"__v_skip",!0),n}const ys=n=>tt(n)?cc(n):n,fc=n=>tt(n)?kd(n):n;function Hd(n){ai&&an&&(n=Ye(n),Id(n.dep||(n.dep=rc())))}function Wd(n,e){n=Ye(n);const t=n.dep;t&&El(t)}function bt(n){return!!(n&&n.__v_isRef===!0)}function wl(n){return Xm(n,!1)}function Xm(n,e){return bt(n)?n:new Ym(n,e)}class Ym{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ye(e),this._value=t?e:ys(e)}get value(){return Hd(this),this._value}set value(e){const t=this.__v_isShallow||Do(e)||Or(e);e=t?e:Ye(e),bs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ys(e),Wd(this))}}function ri(n){return bt(n)?n.value:n}const Km={get:(n,e,t)=>ri(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return bt(r)&&!bt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function $d(n){return Cr(n)?n:new Proxy(n,Km)}var qd;class Zm{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[qd]=!1,this._dirty=!0,this.effect=new sc(e,()=>{this._dirty||(this._dirty=!0,Wd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ye(this);return Hd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}qd="__v_isReadonly";function Jm(n,e,t=!1){let i,r;const s=ze(n);return s?(i=n,r=fn):(i=n.get,r=n.set),new Zm(i,r,s||!r,t)}function li(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Ho(s,e,t)}return r}function Zt(n,e,t,i){if(ze(n)){const s=li(n,e,t,i);return s&&Ad(s)&&s.catch(a=>{Ho(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Zt(n[s],e,t,i));return r}function Ho(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){li(l,null,10,[n,a,o]);return}}Qm(n,t,r,i)}function Qm(n,e,t,i=!0){console.error(n)}let Ms=!1,Tl=!1;const xt=[];let yn=0;const Lr=[];let zn=null,Ri=0;const jd=Promise.resolve();let dc=null;function Xd(n){const e=dc||jd;return n?e.then(this?n.bind(this):n):e}function eg(n){let e=yn+1,t=xt.length;for(;e<t;){const i=e+t>>>1;Ss(xt[i])<n?e=i+1:t=i}return e}function hc(n){(!xt.length||!xt.includes(n,Ms&&n.allowRecurse?yn+1:yn))&&(n.id==null?xt.push(n):xt.splice(eg(n.id),0,n),Yd())}function Yd(){!Ms&&!Tl&&(Tl=!0,dc=jd.then(Zd))}function tg(n){const e=xt.indexOf(n);e>yn&&xt.splice(e,1)}function ng(n){Ne(n)?Lr.push(...n):(!zn||!zn.includes(n,n.allowRecurse?Ri+1:Ri))&&Lr.push(n),Yd()}function tu(n,e=Ms?yn+1:0){for(;e<xt.length;e++){const t=xt[e];t&&t.pre&&(xt.splice(e,1),e--,t())}}function Kd(n){if(Lr.length){const e=[...new Set(Lr)];if(Lr.length=0,zn){zn.push(...e);return}for(zn=e,zn.sort((t,i)=>Ss(t)-Ss(i)),Ri=0;Ri<zn.length;Ri++)zn[Ri]();zn=null,Ri=0}}const Ss=n=>n.id==null?1/0:n.id,ig=(n,e)=>{const t=Ss(n)-Ss(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Zd(n){Tl=!1,Ms=!0,xt.sort(ig);const e=fn;try{for(yn=0;yn<xt.length;yn++){const t=xt[yn];t&&t.active!==!1&&li(t,null,14)}}finally{yn=0,xt.length=0,Kd(),Ms=!1,dc=null,(xt.length||Lr.length)&&Zd()}}function rg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=i[u]||Qe;d&&(r=t.map(m=>at(m)?m.trim():m)),f&&(r=t.map(gm))}let o,l=i[o=ga(e)]||i[o=ga(Ln(e))];!l&&s&&(l=i[o=ga(jr(e))]),l&&Zt(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Zt(c,n,6,r)}}function Jd(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ze(n)){const l=c=>{const u=Jd(c,e,!0);u&&(o=!0,Mt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(tt(n)&&i.set(n,null),null):(Ne(s)?s.forEach(l=>a[l]=null):Mt(a,s),tt(n)&&i.set(n,a),a)}function Wo(n,e){return!n||!Uo(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(n,e[0].toLowerCase()+e.slice(1))||je(n,jr(e))||je(n,e))}let yt=null,$o=null;function Po(n){const e=yt;return yt=n,$o=n&&n.type.__scopeId||null,e}function pc(n){$o=n}function mc(){$o=null}function Qd(n,e=yt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&du(-1);const s=Po(e);let a;try{a=n(...r)}finally{Po(s),i._d&&du(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function va(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:_,inheritAttrs:h}=n;let p,v;const E=Po(n);try{if(t.shapeFlag&4){const y=r||i;p=xn(u.call(y,y,f,s,m,d,_)),v=l}else{const y=e;p=xn(y.length>1?y(s,{attrs:l,slots:o,emit:c}):y(s,null)),v=e.props?l:sg(l)}}catch(y){_s.length=0,Ho(y,n,1),p=mt(Sn)}let b=p;if(v&&h!==!1){const y=Object.keys(v),{shapeFlag:S}=b;y.length&&S&7&&(a&&y.some(ec)&&(v=og(v,a)),b=fi(b,v))}return t.dirs&&(b=fi(b),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&(b.transition=t.transition),p=b,Po(E),p}const sg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Uo(t))&&((e||(e={}))[t]=n[t]);return e},og=(n,e)=>{const t={};for(const i in n)(!ec(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function ag(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?nu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!Wo(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?nu(i,a,c):!0:!!a;return!1}function nu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Wo(t,s))return!0}return!1}function lg({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const cg=n=>n.__isSuspense;function ug(n,e){e&&e.pendingBranch?Ne(n)?e.effects.push(...n):e.effects.push(n):ng(n)}function ii(n,e){if(it){let t=it.provides;const i=it.parent&&it.parent.provides;i===t&&(t=it.provides=Object.create(i)),t[n]=e}}function Dr(n,e,t=!1){const i=it||yt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ze(e)?e.call(i.proxy):e}}const js={};function qe(n,e,t){return eh(n,e,t)}function eh(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=Qe){const o=bm()===(it==null?void 0:it.scope)?it:null;let l,c=!1,u=!1;if(bt(n)?(l=()=>n.value,c=Do(n)):Cr(n)?(l=()=>n,i=!0):Ne(n)?(u=!0,c=n.some(b=>Cr(b)||Do(b)),l=()=>n.map(b=>{if(bt(b))return b.value;if(Cr(b))return Sr(b);if(ze(b))return li(b,o,2)})):ze(n)?e?l=()=>li(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),Zt(n,o,3,[d])}:l=fn,e&&i){const b=l;l=()=>Sr(b())}let f,d=b=>{f=v.onStop=()=>{li(b,o,4)}},m;if(ws)if(d=fn,e?t&&Zt(e,o,3,[l(),u?[]:void 0,d]):l(),r==="sync"){const b=a_();m=b.__watcherHandles||(b.__watcherHandles=[])}else return fn;let _=u?new Array(n.length).fill(js):js;const h=()=>{if(v.active)if(e){const b=v.run();(i||c||(u?b.some((y,S)=>bs(y,_[S])):bs(b,_)))&&(f&&f(),Zt(e,o,3,[b,_===js?void 0:u&&_[0]===js?[]:_,d]),_=b)}else v.run()};h.allowRecurse=!!e;let p;r==="sync"?p=h:r==="post"?p=()=>It(h,o&&o.suspense):(h.pre=!0,o&&(h.id=o.uid),p=()=>hc(h));const v=new sc(l,p);e?t?h():_=v.run():r==="post"?It(v.run.bind(v),o&&o.suspense):v.run();const E=()=>{v.stop(),o&&o.scope&&tc(o.scope.effects,v)};return m&&m.push(E),E}function fg(n,e,t){const i=this.proxy,r=at(n)?n.includes(".")?th(i,n):()=>i[n]:n.bind(i,i);let s;ze(e)?s=e:(s=e.handler,t=e);const a=it;Nr(this);const o=eh(r,s.bind(i),t);return a?Nr(a):Vi(),o}function th(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Sr(n,e){if(!tt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),bt(n))Sr(n.value,e);else if(Ne(n))for(let t=0;t<n.length;t++)Sr(n[t],e);else if(Td(n)||Ar(n))n.forEach(t=>{Sr(t,e)});else if(Ld(n))for(const t in n)Sr(n[t],e);return n}function dg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gc(()=>{n.isMounted=!0}),sh(()=>{n.isUnmounting=!0}),n}const Yt=[Function,Array],hg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},setup(n,{slots:e}){const t=Zo(),i=dg();let r;return()=>{const s=e.default&&ih(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const h of s)if(h.type!==Sn){a=h;break}}const o=Ye(n),{mode:l}=o;if(i.isLeaving)return xa(a);const c=iu(a);if(!c)return xa(a);const u=Al(c,o,i,t);Cl(c,u);const f=t.subTree,d=f&&iu(f);let m=!1;const{getTransitionKey:_}=c.type;if(_){const h=_();r===void 0?r=h:h!==r&&(r=h,m=!0)}if(d&&d.type!==Sn&&(!Ii(c,d)||m)){const h=Al(d,o,i,t);if(Cl(d,h),l==="out-in")return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},xa(a);l==="in-out"&&c.type!==Sn&&(h.delayLeave=(p,v,E)=>{const b=nh(i,d);b[String(d.key)]=d,p._leaveCb=()=>{v(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return a}}},pg=hg;function nh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Al(n,e,t,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:h,onAppear:p,onAfterAppear:v,onAppearCancelled:E}=e,b=String(n.key),y=nh(t,n),S=(x,T)=>{x&&Zt(x,i,9,T)},D=(x,T)=>{const P=T[1];S(x,T),Ne(x)?x.every($=>$.length<=1)&&P():x.length<=1&&P()},R={mode:s,persisted:a,beforeEnter(x){let T=o;if(!t.isMounted)if(r)T=h||o;else return;x._leaveCb&&x._leaveCb(!0);const P=y[b];P&&Ii(n,P)&&P.el._leaveCb&&P.el._leaveCb(),S(T,[x])},enter(x){let T=l,P=c,$=u;if(!t.isMounted)if(r)T=p||l,P=v||c,$=E||u;else return;let Y=!1;const N=x._enterCb=F=>{Y||(Y=!0,F?S($,[x]):S(P,[x]),R.delayedLeave&&R.delayedLeave(),x._enterCb=void 0)};T?D(T,[x,N]):N()},leave(x,T){const P=String(n.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return T();S(f,[x]);let $=!1;const Y=x._leaveCb=N=>{$||($=!0,T(),N?S(_,[x]):S(m,[x]),x._leaveCb=void 0,y[P]===n&&delete y[P])};y[P]=n,d?D(d,[x,Y]):Y()},clone(x){return Al(x,e,t,i)}};return R}function xa(n){if(jo(n))return n=fi(n),n.children=null,n}function iu(n){return jo(n)?n.children?n.children[0]:void 0:n}function Cl(n,e){n.shapeFlag&6&&n.component?Cl(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ih(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===ht?(a.patchFlag&128&&r++,i=i.concat(ih(a.children,e,o))):(e||a.type!==Sn)&&i.push(o!=null?fi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function qo(n){return ze(n)?{setup:n,name:n.name}:n}const ms=n=>!!n.type.__asyncLoader,jo=n=>n.type.__isKeepAlive;function mg(n,e){rh(n,"a",e)}function gg(n,e){rh(n,"da",e)}function rh(n,e,t=it){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Xo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)jo(r.parent.vnode)&&_g(i,e,t,r),r=r.parent}}function _g(n,e,t,i){const r=Xo(e,n,i,!0);Rs(()=>{tc(i[e],r)},t)}function Xo(n,e,t=it,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Xr(),Nr(t);const o=Zt(e,t,n,a);return Vi(),Yr(),o});return i?r.unshift(s):r.push(s),s}}const Xn=n=>(e,t=it)=>(!ws||n==="sp")&&Xo(n,(...i)=>e(...i),t),vg=Xn("bm"),gc=Xn("m"),xg=Xn("bu"),bg=Xn("u"),sh=Xn("bum"),Rs=Xn("um"),yg=Xn("sp"),Mg=Xn("rtg"),Sg=Xn("rtc");function Eg(n,e=it){Xo("ec",n,e)}function Ei(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Xr(),Zt(l,t,8,[n.el,o,n,e]),Yr())}}const oh="components";function Ll(n,e){return Tg(oh,n,!0,e)||n}const wg=Symbol();function Tg(n,e,t=!0,i=!1){const r=yt||it;if(r){const s=r.type;if(n===oh){const o=r_(s,!1);if(o&&(o===e||o===Ln(e)||o===Vo(Ln(e))))return s}const a=ru(r[n]||s[n],e)||ru(r.appContext[n],e);return!a&&i?s:a}}function ru(n,e){return n&&(n[e]||n[Ln(e)]||n[Vo(Ln(e))])}function Ag(n,e,t,i){let r;const s=t&&t[i];if(Ne(n)||at(n)){r=new Array(n.length);for(let a=0,o=n.length;a<o;a++)r[a]=e(n[a],a,void 0,s&&s[a])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(tt(n))if(n[Symbol.iterator])r=Array.from(n,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(n);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(n[c],c,o,s&&s[o])}}else r=[];return t&&(t[i]=r),r}function su(n,e,t={},i,r){if(yt.isCE||yt.parent&&ms(yt.parent)&&yt.parent.isCE)return e!=="default"&&(t.name=e),mt("slot",t,i&&i());let s=n[e];s&&s._c&&(s._d=!1),En();const a=s&&ah(s(t)),o=qg(ht,{key:t.key||a&&a.key||`_${e}`},a||(i?i():[]),a&&n._===1?64:-2);return!r&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),s&&s._c&&(s._d=!0),o}function ah(n){return n.some(e=>_h(e)?!(e.type===Sn||e.type===ht&&!ah(e.children)):!0)?n:null}const Dl=n=>n?xh(n)?bc(n)||n.proxy:Dl(n.parent):null,gs=Mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Dl(n.parent),$root:n=>Dl(n.root),$emit:n=>n.emit,$options:n=>_c(n),$forceUpdate:n=>n.f||(n.f=()=>hc(n.update)),$nextTick:n=>n.n||(n.n=Xd.bind(n.proxy)),$watch:n=>fg.bind(n)}),ba=(n,e)=>n!==Qe&&!n.__isScriptSetup&&je(n,e),Cg={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ba(i,e))return a[e]=1,i[e];if(r!==Qe&&je(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&je(c,e))return a[e]=3,s[e];if(t!==Qe&&je(t,e))return a[e]=4,t[e];Pl&&(a[e]=0)}}const u=gs[e];let f,d;if(u)return e==="$attrs"&&zt(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Qe&&je(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,je(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ba(r,e)?(r[e]=t,!0):i!==Qe&&je(i,e)?(i[e]=t,!0):je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Qe&&je(n,a)||ba(e,a)||(o=s[0])&&je(o,a)||je(i,a)||je(gs,a)||je(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Pl=!0;function Lg(n){const e=_c(n),t=n.proxy,i=n.ctx;Pl=!1,e.beforeCreate&&ou(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:_,activated:h,deactivated:p,beforeDestroy:v,beforeUnmount:E,destroyed:b,unmounted:y,render:S,renderTracked:D,renderTriggered:R,errorCaptured:x,serverPrefetch:T,expose:P,inheritAttrs:$,components:Y,directives:N,filters:F}=e;if(c&&Dg(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const K in a){const G=a[K];ze(G)&&(i[K]=G.bind(t))}if(r){const K=r.call(t,t);tt(K)&&(n.data=cc(K))}if(Pl=!0,s)for(const K in s){const G=s[K],ae=ze(G)?G.bind(t,t):ze(G.get)?G.get.bind(t,t):fn,oe=!ze(G)&&ze(G.set)?G.set.bind(t):fn,re=Nl({get:ae,set:oe});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>re.value,set:U=>re.value=U})}if(o)for(const K in o)lh(o[K],i,t,K);if(l){const K=ze(l)?l.call(t):l;Reflect.ownKeys(K).forEach(G=>{ii(G,K[G])})}u&&ou(u,n,"c");function X(K,G){Ne(G)?G.forEach(ae=>K(ae.bind(t))):G&&K(G.bind(t))}if(X(vg,f),X(gc,d),X(xg,m),X(bg,_),X(mg,h),X(gg,p),X(Eg,x),X(Sg,D),X(Mg,R),X(sh,E),X(Rs,y),X(yg,T),Ne(P))if(P.length){const K=n.exposed||(n.exposed={});P.forEach(G=>{Object.defineProperty(K,G,{get:()=>t[G],set:ae=>t[G]=ae})})}else n.exposed||(n.exposed={});S&&n.render===fn&&(n.render=S),$!=null&&(n.inheritAttrs=$),Y&&(n.components=Y),N&&(n.directives=N)}function Dg(n,e,t=fn,i=!1){Ne(n)&&(n=Rl(n));for(const r in n){const s=n[r];let a;tt(s)?"default"in s?a=Dr(s.from||r,s.default,!0):a=Dr(s.from||r):a=Dr(s),bt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function ou(n,e,t){Zt(Ne(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function lh(n,e,t,i){const r=i.includes(".")?th(t,i):()=>t[i];if(at(n)){const s=e[n];ze(s)&&qe(r,s)}else if(ze(n))qe(r,n.bind(t));else if(tt(n))if(Ne(n))n.forEach(s=>lh(s,e,t,i));else{const s=ze(n.handler)?n.handler.bind(t):e[n.handler];ze(s)&&qe(r,s,n)}}function _c(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ro(l,c,a,!0)),Ro(l,e,a)),tt(e)&&s.set(e,l),l}function Ro(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ro(n,s,t,!0),r&&r.forEach(a=>Ro(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Pg[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Pg={data:au,props:Li,emits:Li,methods:Li,computed:Li,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Li,directives:Li,watch:Ig,provide:au,inject:Rg};function au(n,e){return e?n?function(){return Mt(ze(n)?n.call(this,this):n,ze(e)?e.call(this,this):e)}:e:n}function Rg(n,e){return Li(Rl(n),Rl(e))}function Rl(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Tt(n,e){return n?[...new Set([].concat(n,e))]:e}function Li(n,e){return n?Mt(Mt(Object.create(null),n),e):e}function Ig(n,e){if(!n)return e;if(!e)return n;const t=Mt(Object.create(null),n);for(const i in e)t[i]=Tt(n[i],e[i]);return t}function Og(n,e,t,i=!1){const r={},s={};Lo(s,Ko,1),n.propsDefaults=Object.create(null),ch(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:jm(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ng(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ye(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Wo(n.emitsOptions,d))continue;const m=e[d];if(l)if(je(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const _=Ln(d);r[_]=Il(l,o,_,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{ch(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!je(e,f)&&((u=jr(f))===f||!je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Il(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!je(e,f))&&(delete s[f],c=!0)}c&&qn(n,"set","$attrs")}function ch(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(So(l))continue;const c=e[l];let u;r&&je(r,u=Ln(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Wo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ye(t),c=o||Qe;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Il(r,l,f,c[f],n,!je(c,f))}}return a}function Il(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=je(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&ze(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Nr(r),i=c[t]=l.call(null,e),Vi())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===jr(t))&&(i=!0))}return i}function uh(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ze(n)){const u=f=>{l=!0;const[d,m]=uh(f,e,!0);Mt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return tt(n)&&i.set(n,Tr),Tr;if(Ne(s))for(let u=0;u<s.length;u++){const f=Ln(s[u]);lu(f)&&(a[f]=Qe)}else if(s)for(const u in s){const f=Ln(u);if(lu(f)){const d=s[u],m=a[f]=Ne(d)||ze(d)?{type:d}:Object.assign({},d);if(m){const _=fu(Boolean,m.type),h=fu(String,m.type);m[0]=_>-1,m[1]=h<0||_<h,(_>-1||je(m,"default"))&&o.push(f)}}}const c=[a,o];return tt(n)&&i.set(n,c),c}function lu(n){return n[0]!=="$"}function cu(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function uu(n,e){return cu(n)===cu(e)}function fu(n,e){return Ne(e)?e.findIndex(t=>uu(t,n)):ze(e)&&uu(e,n)?0:-1}const fh=n=>n[0]==="_"||n==="$stable",vc=n=>Ne(n)?n.map(xn):[xn(n)],Fg=(n,e,t)=>{if(e._n)return e;const i=Qd((...r)=>vc(e(...r)),t);return i._c=!1,i},dh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(fh(r))continue;const s=n[r];if(ze(s))e[r]=Fg(r,s,i);else if(s!=null){const a=vc(s);e[r]=()=>a}}},hh=(n,e)=>{const t=vc(e);n.slots.default=()=>t},zg=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ye(e),Lo(e,"_",t)):dh(e,n.slots={})}else n.slots={},e&&hh(n,e);Lo(n.slots,Ko,1)},Ug=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Qe;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(Mt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,dh(e,r)),a=e}else e&&(hh(n,e),a={default:1});if(s)for(const o in r)!fh(o)&&!(o in a)&&delete r[o]};function ph(){return{app:null,config:{isNativeTag:um,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bg=0;function kg(n,e){return function(i,r=null){ze(i)||(i=Object.assign({},i)),r!=null&&!tt(r)&&(r=null);const s=ph(),a=new Set;let o=!1;const l=s.app={_uid:Bg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:l_,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&ze(c.install)?(a.add(c),c.install(l,...u)):ze(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const d=mt(i,r);return d.appContext=s,u&&e?e(d,c):n(d,c,f),o=!0,l._container=c,c.__vue_app__=l,bc(d.component)||d.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Ol(n,e,t,i,r=!1){if(Ne(n)){n.forEach((d,m)=>Ol(d,e&&(Ne(e)?e[m]:e),t,i,r));return}if(ms(i)&&!r)return;const s=i.shapeFlag&4?bc(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Qe?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(at(c)?(u[c]=null,je(f,c)&&(f[c]=null)):bt(c)&&(c.value=null)),ze(l))li(l,o,12,[a,u]);else{const d=at(l),m=bt(l);if(d||m){const _=()=>{if(n.f){const h=d?je(f,l)?f[l]:u[l]:l.value;r?Ne(h)&&tc(h,s):Ne(h)?h.includes(s)||h.push(s):d?(u[l]=[s],je(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=a,je(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(_.id=-1,It(_,t)):_()}}}const It=ug;function Vg(n){return Gg(n)}function Gg(n,e){const t=_m();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=fn,insertStaticContent:_}=n,h=(A,L,H,ee=null,Z=null,le=null,he=!1,se=null,fe=!!L.dynamicChildren)=>{if(A===L)return;A&&!Ii(A,L)&&(ee=be(A),U(A,Z,le,!0),A=null),L.patchFlag===-2&&(fe=!1,L.dynamicChildren=null);const{type:ie,ref:M,shapeFlag:g}=L;switch(ie){case Yo:p(A,L,H,ee);break;case Sn:v(A,L,H,ee);break;case ya:A==null&&E(L,H,ee,he);break;case ht:Y(A,L,H,ee,Z,le,he,se,fe);break;default:g&1?S(A,L,H,ee,Z,le,he,se,fe):g&6?N(A,L,H,ee,Z,le,he,se,fe):(g&64||g&128)&&ie.process(A,L,H,ee,Z,le,he,se,fe,Me)}M!=null&&Z&&Ol(M,A&&A.ref,le,L||A,!L)},p=(A,L,H,ee)=>{if(A==null)i(L.el=o(L.children),H,ee);else{const Z=L.el=A.el;L.children!==A.children&&c(Z,L.children)}},v=(A,L,H,ee)=>{A==null?i(L.el=l(L.children||""),H,ee):L.el=A.el},E=(A,L,H,ee)=>{[A.el,A.anchor]=_(A.children,L,H,ee,A.el,A.anchor)},b=({el:A,anchor:L},H,ee)=>{let Z;for(;A&&A!==L;)Z=d(A),i(A,H,ee),A=Z;i(L,H,ee)},y=({el:A,anchor:L})=>{let H;for(;A&&A!==L;)H=d(A),r(A),A=H;r(L)},S=(A,L,H,ee,Z,le,he,se,fe)=>{he=he||L.type==="svg",A==null?D(L,H,ee,Z,le,he,se,fe):T(A,L,Z,le,he,se,fe)},D=(A,L,H,ee,Z,le,he,se)=>{let fe,ie;const{type:M,props:g,shapeFlag:O,transition:q,dirs:J}=A;if(fe=A.el=a(A.type,le,g&&g.is,g),O&8?u(fe,A.children):O&16&&x(A.children,fe,null,ee,Z,le&&M!=="foreignObject",he,se),J&&Ei(A,null,ee,"created"),R(fe,A,A.scopeId,he,ee),g){for(const ge in g)ge!=="value"&&!So(ge)&&s(fe,ge,null,g[ge],le,A.children,ee,Z,_e);"value"in g&&s(fe,"value",null,g.value),(ie=g.onVnodeBeforeMount)&&gn(ie,ee,A)}J&&Ei(A,null,ee,"beforeMount");const ue=(!Z||Z&&!Z.pendingBranch)&&q&&!q.persisted;ue&&q.beforeEnter(fe),i(fe,L,H),((ie=g&&g.onVnodeMounted)||ue||J)&&It(()=>{ie&&gn(ie,ee,A),ue&&q.enter(fe),J&&Ei(A,null,ee,"mounted")},Z)},R=(A,L,H,ee,Z)=>{if(H&&m(A,H),ee)for(let le=0;le<ee.length;le++)m(A,ee[le]);if(Z){let le=Z.subTree;if(L===le){const he=Z.vnode;R(A,he,he.scopeId,he.slotScopeIds,Z.parent)}}},x=(A,L,H,ee,Z,le,he,se,fe=0)=>{for(let ie=fe;ie<A.length;ie++){const M=A[ie]=se?ni(A[ie]):xn(A[ie]);h(null,M,L,H,ee,Z,le,he,se)}},T=(A,L,H,ee,Z,le,he)=>{const se=L.el=A.el;let{patchFlag:fe,dynamicChildren:ie,dirs:M}=L;fe|=A.patchFlag&16;const g=A.props||Qe,O=L.props||Qe;let q;H&&wi(H,!1),(q=O.onVnodeBeforeUpdate)&&gn(q,H,L,A),M&&Ei(L,A,H,"beforeUpdate"),H&&wi(H,!0);const J=Z&&L.type!=="foreignObject";if(ie?P(A.dynamicChildren,ie,se,H,ee,J,le):he||G(A,L,se,null,H,ee,J,le,!1),fe>0){if(fe&16)$(se,L,g,O,H,ee,Z);else if(fe&2&&g.class!==O.class&&s(se,"class",null,O.class,Z),fe&4&&s(se,"style",g.style,O.style,Z),fe&8){const ue=L.dynamicProps;for(let ge=0;ge<ue.length;ge++){const C=ue[ge],z=g[C],Se=O[C];(Se!==z||C==="value")&&s(se,C,z,Se,Z,A.children,H,ee,_e)}}fe&1&&A.children!==L.children&&u(se,L.children)}else!he&&ie==null&&$(se,L,g,O,H,ee,Z);((q=O.onVnodeUpdated)||M)&&It(()=>{q&&gn(q,H,L,A),M&&Ei(L,A,H,"updated")},ee)},P=(A,L,H,ee,Z,le,he)=>{for(let se=0;se<L.length;se++){const fe=A[se],ie=L[se],M=fe.el&&(fe.type===ht||!Ii(fe,ie)||fe.shapeFlag&70)?f(fe.el):H;h(fe,ie,M,null,ee,Z,le,he,!0)}},$=(A,L,H,ee,Z,le,he)=>{if(H!==ee){if(H!==Qe)for(const se in H)!So(se)&&!(se in ee)&&s(A,se,H[se],null,he,L.children,Z,le,_e);for(const se in ee){if(So(se))continue;const fe=ee[se],ie=H[se];fe!==ie&&se!=="value"&&s(A,se,ie,fe,he,L.children,Z,le,_e)}"value"in ee&&s(A,"value",H.value,ee.value)}},Y=(A,L,H,ee,Z,le,he,se,fe)=>{const ie=L.el=A?A.el:o(""),M=L.anchor=A?A.anchor:o("");let{patchFlag:g,dynamicChildren:O,slotScopeIds:q}=L;q&&(se=se?se.concat(q):q),A==null?(i(ie,H,ee),i(M,H,ee),x(L.children,H,M,Z,le,he,se,fe)):g>0&&g&64&&O&&A.dynamicChildren?(P(A.dynamicChildren,O,H,Z,le,he,se),(L.key!=null||Z&&L===Z.subTree)&&mh(A,L,!0)):G(A,L,H,M,Z,le,he,se,fe)},N=(A,L,H,ee,Z,le,he,se,fe)=>{L.slotScopeIds=se,A==null?L.shapeFlag&512?Z.ctx.activate(L,H,ee,he,fe):F(L,H,ee,Z,le,he,fe):j(A,L,fe)},F=(A,L,H,ee,Z,le,he)=>{const se=A.component=Qg(A,ee,Z);if(jo(A)&&(se.ctx.renderer=Me),e_(se),se.asyncDep){if(Z&&Z.registerDep(se,X),!A.el){const fe=se.subTree=mt(Sn);v(null,fe,L,H)}return}X(se,A,L,H,Z,le,he)},j=(A,L,H)=>{const ee=L.component=A.component;if(ag(A,L,H))if(ee.asyncDep&&!ee.asyncResolved){K(ee,L,H);return}else ee.next=L,tg(ee.update),ee.update();else L.el=A.el,ee.vnode=L},X=(A,L,H,ee,Z,le,he)=>{const se=()=>{if(A.isMounted){let{next:M,bu:g,u:O,parent:q,vnode:J}=A,ue=M,ge;wi(A,!1),M?(M.el=J.el,K(A,M,he)):M=J,g&&_a(g),(ge=M.props&&M.props.onVnodeBeforeUpdate)&&gn(ge,q,M,J),wi(A,!0);const C=va(A),z=A.subTree;A.subTree=C,h(z,C,f(z.el),be(z),A,Z,le),M.el=C.el,ue===null&&lg(A,C.el),O&&It(O,Z),(ge=M.props&&M.props.onVnodeUpdated)&&It(()=>gn(ge,q,M,J),Z)}else{let M;const{el:g,props:O}=L,{bm:q,m:J,parent:ue}=A,ge=ms(L);if(wi(A,!1),q&&_a(q),!ge&&(M=O&&O.onVnodeBeforeMount)&&gn(M,ue,L),wi(A,!0),g&&Pe){const C=()=>{A.subTree=va(A),Pe(g,A.subTree,A,Z,null)};ge?L.type.__asyncLoader().then(()=>!A.isUnmounted&&C()):C()}else{const C=A.subTree=va(A);h(null,C,H,ee,A,Z,le),L.el=C.el}if(J&&It(J,Z),!ge&&(M=O&&O.onVnodeMounted)){const C=L;It(()=>gn(M,ue,C),Z)}(L.shapeFlag&256||ue&&ms(ue.vnode)&&ue.vnode.shapeFlag&256)&&A.a&&It(A.a,Z),A.isMounted=!0,L=H=ee=null}},fe=A.effect=new sc(se,()=>hc(ie),A.scope),ie=A.update=()=>fe.run();ie.id=A.uid,wi(A,!0),ie()},K=(A,L,H)=>{L.component=A;const ee=A.vnode.props;A.vnode=L,A.next=null,Ng(A,L.props,ee,H),Ug(A,L.children,H),Xr(),tu(),Yr()},G=(A,L,H,ee,Z,le,he,se,fe=!1)=>{const ie=A&&A.children,M=A?A.shapeFlag:0,g=L.children,{patchFlag:O,shapeFlag:q}=L;if(O>0){if(O&128){oe(ie,g,H,ee,Z,le,he,se,fe);return}else if(O&256){ae(ie,g,H,ee,Z,le,he,se,fe);return}}q&8?(M&16&&_e(ie,Z,le),g!==ie&&u(H,g)):M&16?q&16?oe(ie,g,H,ee,Z,le,he,se,fe):_e(ie,Z,le,!0):(M&8&&u(H,""),q&16&&x(g,H,ee,Z,le,he,se,fe))},ae=(A,L,H,ee,Z,le,he,se,fe)=>{A=A||Tr,L=L||Tr;const ie=A.length,M=L.length,g=Math.min(ie,M);let O;for(O=0;O<g;O++){const q=L[O]=fe?ni(L[O]):xn(L[O]);h(A[O],q,H,null,Z,le,he,se,fe)}ie>M?_e(A,Z,le,!0,!1,g):x(L,H,ee,Z,le,he,se,fe,g)},oe=(A,L,H,ee,Z,le,he,se,fe)=>{let ie=0;const M=L.length;let g=A.length-1,O=M-1;for(;ie<=g&&ie<=O;){const q=A[ie],J=L[ie]=fe?ni(L[ie]):xn(L[ie]);if(Ii(q,J))h(q,J,H,null,Z,le,he,se,fe);else break;ie++}for(;ie<=g&&ie<=O;){const q=A[g],J=L[O]=fe?ni(L[O]):xn(L[O]);if(Ii(q,J))h(q,J,H,null,Z,le,he,se,fe);else break;g--,O--}if(ie>g){if(ie<=O){const q=O+1,J=q<M?L[q].el:ee;for(;ie<=O;)h(null,L[ie]=fe?ni(L[ie]):xn(L[ie]),H,J,Z,le,he,se,fe),ie++}}else if(ie>O)for(;ie<=g;)U(A[ie],Z,le,!0),ie++;else{const q=ie,J=ie,ue=new Map;for(ie=J;ie<=O;ie++){const Ee=L[ie]=fe?ni(L[ie]):xn(L[ie]);Ee.key!=null&&ue.set(Ee.key,ie)}let ge,C=0;const z=O-J+1;let Se=!1,ve=0;const Te=new Array(z);for(ie=0;ie<z;ie++)Te[ie]=0;for(ie=q;ie<=g;ie++){const Ee=A[ie];if(C>=z){U(Ee,Z,le,!0);continue}let Ie;if(Ee.key!=null)Ie=ue.get(Ee.key);else for(ge=J;ge<=O;ge++)if(Te[ge-J]===0&&Ii(Ee,L[ge])){Ie=ge;break}Ie===void 0?U(Ee,Z,le,!0):(Te[Ie-J]=ie+1,Ie>=ve?ve=Ie:Se=!0,h(Ee,L[Ie],H,null,Z,le,he,se,fe),C++)}const Ce=Se?Hg(Te):Tr;for(ge=Ce.length-1,ie=z-1;ie>=0;ie--){const Ee=J+ie,Ie=L[Ee],Ve=Ee+1<M?L[Ee+1].el:ee;Te[ie]===0?h(null,Ie,H,Ve,Z,le,he,se,fe):Se&&(ge<0||ie!==Ce[ge]?re(Ie,H,Ve,2):ge--)}}},re=(A,L,H,ee,Z=null)=>{const{el:le,type:he,transition:se,children:fe,shapeFlag:ie}=A;if(ie&6){re(A.component.subTree,L,H,ee);return}if(ie&128){A.suspense.move(L,H,ee);return}if(ie&64){he.move(A,L,H,Me);return}if(he===ht){i(le,L,H);for(let g=0;g<fe.length;g++)re(fe[g],L,H,ee);i(A.anchor,L,H);return}if(he===ya){b(A,L,H);return}if(ee!==2&&ie&1&&se)if(ee===0)se.beforeEnter(le),i(le,L,H),It(()=>se.enter(le),Z);else{const{leave:g,delayLeave:O,afterLeave:q}=se,J=()=>i(le,L,H),ue=()=>{g(le,()=>{J(),q&&q()})};O?O(le,J,ue):ue()}else i(le,L,H)},U=(A,L,H,ee=!1,Z=!1)=>{const{type:le,props:he,ref:se,children:fe,dynamicChildren:ie,shapeFlag:M,patchFlag:g,dirs:O}=A;if(se!=null&&Ol(se,null,H,A,!0),M&256){L.ctx.deactivate(A);return}const q=M&1&&O,J=!ms(A);let ue;if(J&&(ue=he&&he.onVnodeBeforeUnmount)&&gn(ue,L,A),M&6)B(A.component,H,ee);else{if(M&128){A.suspense.unmount(H,ee);return}q&&Ei(A,null,L,"beforeUnmount"),M&64?A.type.remove(A,L,H,Z,Me,ee):ie&&(le!==ht||g>0&&g&64)?_e(ie,L,H,!1,!0):(le===ht&&g&384||!Z&&M&16)&&_e(fe,L,H),ee&&ce(A)}(J&&(ue=he&&he.onVnodeUnmounted)||q)&&It(()=>{ue&&gn(ue,L,A),q&&Ei(A,null,L,"unmounted")},H)},ce=A=>{const{type:L,el:H,anchor:ee,transition:Z}=A;if(L===ht){me(H,ee);return}if(L===ya){y(A);return}const le=()=>{r(H),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(A.shapeFlag&1&&Z&&!Z.persisted){const{leave:he,delayLeave:se}=Z,fe=()=>he(H,le);se?se(A.el,le,fe):fe()}else le()},me=(A,L)=>{let H;for(;A!==L;)H=d(A),r(A),A=H;r(L)},B=(A,L,H)=>{const{bum:ee,scope:Z,update:le,subTree:he,um:se}=A;ee&&_a(ee),Z.stop(),le&&(le.active=!1,U(he,A,L,H)),se&&It(se,L),It(()=>{A.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},_e=(A,L,H,ee=!1,Z=!1,le=0)=>{for(let he=le;he<A.length;he++)U(A[he],L,H,ee,Z)},be=A=>A.shapeFlag&6?be(A.component.subTree):A.shapeFlag&128?A.suspense.next():d(A.anchor||A.el),ye=(A,L,H)=>{A==null?L._vnode&&U(L._vnode,null,null,!0):h(L._vnode||null,A,L,null,null,null,H),tu(),Kd(),L._vnode=A},Me={p:h,um:U,m:re,r:ce,mt:F,mc:x,pc:G,pbc:P,n:be,o:n};let Le,Pe;return e&&([Le,Pe]=e(Me)),{render:ye,hydrate:Le,createApp:kg(ye,Le)}}function wi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function mh(n,e,t=!1){const i=n.children,r=e.children;if(Ne(i)&&Ne(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ni(r[s]),o.el=a.el),t||mh(a,o)),o.type===Yo&&(o.el=a.el)}}function Hg(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Wg=n=>n.__isTeleport,ht=Symbol(void 0),Yo=Symbol(void 0),Sn=Symbol(void 0),ya=Symbol(void 0),_s=[];let un=null;function En(n=!1){_s.push(un=n?null:[])}function $g(){_s.pop(),un=_s[_s.length-1]||null}let Es=1;function du(n){Es+=n}function gh(n){return n.dynamicChildren=Es>0?un||Tr:null,$g(),Es>0&&un&&un.push(n),n}function kn(n,e,t,i,r,s){return gh(Re(n,e,t,i,r,s,!0))}function qg(n,e,t,i,r){return gh(mt(n,e,t,i,r,!0))}function _h(n){return n?n.__v_isVNode===!0:!1}function Ii(n,e){return n.type===e.type&&n.key===e.key}const Ko="__vInternal",vh=({key:n})=>n??null,Eo=({ref:n,ref_key:e,ref_for:t})=>n!=null?at(n)||bt(n)||ze(n)?{i:yt,r:n,k:e,f:!!t}:n:null;function Re(n,e=null,t=null,i=0,r=null,s=n===ht?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&vh(e),ref:e&&Eo(e),scopeId:$o,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yt};return o?(xc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=at(t)?8:16),Es>0&&!a&&un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&un.push(l),l}const mt=jg;function jg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===wg)&&(n=Sn),_h(n)){const o=fi(n,e,!0);return t&&xc(o,t),Es>0&&!s&&un&&(o.shapeFlag&6?un[un.indexOf(n)]=o:un.push(o)),o.patchFlag|=-2,o}if(s_(n)&&(n=n.__vccOpts),e){e=Xg(e);let{class:o,style:l}=e;o&&!at(o)&&(e.class=Ql(o)),tt(l)&&(Vd(l)&&!Ne(l)&&(l=Mt({},l)),e.style=zo(l))}const a=at(n)?1:cg(n)?128:Wg(n)?64:tt(n)?4:ze(n)?2:0;return Re(n,e,t,i,r,a,s,!0)}function Xg(n){return n?Vd(n)||Ko in n?Mt({},n):n:null}function fi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?Kg(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&vh(o),ref:e&&e.ref?t&&r?Ne(r)?r.concat(Eo(e)):[r,Eo(e)]:Eo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ht?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fi(n.ssContent),ssFallback:n.ssFallback&&fi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Yg(n=" ",e=0){return mt(Yo,null,n,e)}function xn(n){return n==null||typeof n=="boolean"?mt(Sn):Ne(n)?mt(ht,null,n.slice()):typeof n=="object"?ni(n):mt(Yo,null,String(n))}function ni(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fi(n)}function xc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),xc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ko in e)?e._ctx=yt:r===3&&yt&&(yt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:yt},t=32):(e=String(e),i&64?(t=16,e=[Yg(e)]):t=8);n.children=e,n.shapeFlag|=t}function Kg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ql([e.class,i.class]));else if(r==="style")e.style=zo([e.style,i.style]);else if(Uo(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ne(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function gn(n,e,t,i=null){Zt(n,e,7,[t,i])}const Zg=ph();let Jg=0;function Qg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Zg,s={uid:Jg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new vm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uh(i,r),emitsOptions:Jd(i,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=rg.bind(null,s),n.ce&&n.ce(s),s}let it=null;const Zo=()=>it||yt,Nr=n=>{it=n,n.scope.on()},Vi=()=>{it&&it.scope.off(),it=null};function xh(n){return n.vnode.shapeFlag&4}let ws=!1;function e_(n,e=!1){ws=e;const{props:t,children:i}=n.vnode,r=xh(n);Og(n,t,r,e),zg(n,i);const s=r?t_(n,e):void 0;return ws=!1,s}function t_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Gd(new Proxy(n.ctx,Cg));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?i_(n):null;Nr(n),Xr();const s=li(i,n,0,[n.props,r]);if(Yr(),Vi(),Ad(s)){if(s.then(Vi,Vi),e)return s.then(a=>{hu(n,a,e)}).catch(a=>{Ho(a,n,0)});n.asyncDep=s}else hu(n,s,e)}else bh(n,e)}function hu(n,e,t){ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=$d(e)),bh(n,t)}let pu;function bh(n,e,t){const i=n.type;if(!n.render){if(!e&&pu&&!i.render){const r=i.template||_c(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Mt(Mt({isCustomElement:s,delimiters:o},a),l);i.render=pu(r,c)}}n.render=i.render||fn}Nr(n),Xr(),Lg(n),Yr(),Vi()}function n_(n){return new Proxy(n.attrs,{get(e,t){return zt(n,"get","$attrs"),e[t]}})}function i_(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=n_(n))},slots:n.slots,emit:n.emit,expose:e}}function bc(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy($d(Gd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in gs)return gs[t](n)},has(e,t){return t in e||t in gs}}))}function r_(n,e=!0){return ze(n)?n.displayName||n.name:n.name||e&&n.__name}function s_(n){return ze(n)&&"__vccOpts"in n}const Nl=(n,e)=>Jm(n,e,ws),o_=Symbol(""),a_=()=>Dr(o_),l_="3.2.47",c_="http://www.w3.org/2000/svg",Oi=typeof document<"u"?document:null,mu=Oi&&Oi.createElement("template"),u_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Oi.createElementNS(c_,n):Oi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Oi.createTextNode(n),createComment:n=>Oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{mu.innerHTML=i?`<svg>${n}</svg>`:n;const o=mu.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function f_(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function d_(n,e,t){const i=n.style,r=at(t);if(t&&!r){if(e&&!at(e))for(const s in e)t[s]==null&&Fl(i,s,"");for(const s in t)Fl(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const gu=/\s*!important$/;function Fl(n,e,t){if(Ne(t))t.forEach(i=>Fl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=h_(n,e);gu.test(t)?n.setProperty(jr(i),t.replace(gu,""),"important"):n[i]=t}}const _u=["Webkit","Moz","ms"],Ma={};function h_(n,e){const t=Ma[e];if(t)return t;let i=Ln(e);if(i!=="filter"&&i in n)return Ma[e]=i;i=Vo(i);for(let r=0;r<_u.length;r++){const s=_u[r]+i;if(s in n)return Ma[e]=s}return e}const vu="http://www.w3.org/1999/xlink";function p_(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(vu,e.slice(6,e.length)):n.setAttributeNS(vu,e,t);else{const s=cm(e);t==null||s&&!Ed(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function m_(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Ed(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}function g_(n,e,t,i){n.addEventListener(e,t,i)}function __(n,e,t,i){n.removeEventListener(e,t,i)}function v_(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=x_(e);if(i){const c=s[e]=M_(i,r);g_(n,o,c,l)}else a&&(__(n,o,a,l),s[e]=void 0)}}const xu=/(?:Once|Passive|Capture)$/;function x_(n){let e;if(xu.test(n)){e={};let i;for(;i=n.match(xu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):jr(n.slice(2)),e]}let Sa=0;const b_=Promise.resolve(),y_=()=>Sa||(b_.then(()=>Sa=0),Sa=Date.now());function M_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Zt(S_(i,t.value),e,5,[i])};return t.value=n,t.attached=y_(),t}function S_(n,e){if(Ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const bu=/^on[a-z]/,E_=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?f_(n,i,r):e==="style"?d_(n,t,i):Uo(e)?ec(e)||v_(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):w_(n,e,i,r))?m_(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),p_(n,e,i,r))};function w_(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&bu.test(e)&&ze(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||bu.test(e)&&at(t)?!1:e in n}const T_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};pg.props;const A_=["ctrl","shift","alt","meta"],C_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>A_.some(t=>n[`${t}Key`]&&!e.includes(t))},Ea=(n,e)=>(t,...i)=>{for(let r=0;r<e.length;r++){const s=C_[e[r]];if(s&&s(t,e))return}return n(t,...i)},L_=Mt({patchProp:E_},u_);let yu;function D_(){return yu||(yu=Vg(L_))}const P_=(...n)=>{const e=D_().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=R_(i);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function R_(n){return at(n)?document.querySelector(n):n}function I_(n){return{all:n=n||new Map,on:function(e,t){var i=n.get(e);i?i.push(t):n.set(e,[t])},off:function(e,t){var i=n.get(e);i&&(t?i.splice(i.indexOf(t)>>>0,1):n.set(e,[]))},emit:function(e,t){var i=n.get(e);i&&i.slice().map(function(r){r(t)}),(i=n.get("*"))&&i.slice().map(function(r){r(e,t)})}}}const wa=I_();function yh(){return{emit:wa.emit,on:wa.on,off:wa.off}}function yc(){const{uid:n,emit:e}=Zo(),{on:t,emit:i,off:r}=yh(),s=`__initd__${n}`;return t(s,a=>{e("initd",a)}),Rs(()=>{e("unload"),r(s)}),{ready:(a,o)=>{i(s,{map:a,instance:o,BMapGL:window.BMapGL})}}}const Ta={};function ds({key:n,src:e,addCalToWindow:t}){return Ta[n]||(Ta[n]=new Promise((i,r)=>{const s=document.createElement("script"),a=()=>{i(),window.document.body.removeChild(s)};t?window[n]=a:s.onload=function(){(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")&&(s.onload=null,a())},s.src=e,s.type="text/javascript",s.defer=!0,s.onerror=r,document.body.appendChild(s)})),Ta[n]}const Xs={TrackAnimation:"//mapopen.bj.bcebos.com/github/BMapGLLib/TrackAnimation/src/TrackAnimation.min.js",Mapvgl:"https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.159/dist/mapvgl.min.js",Mapv:"https://mapv.baidu.com/build/mapv.min.js",MapvThree:"https://unpkg.com/mapv-three@1.0.1/dist/mapvthree.umd.js"},O_={TrackAnimation:n=>ds({src:n||Xs.TrackAnimation,addCalToWindow:!1,key:"trackAnimation"}),Mapvgl:n=>ds({src:n||Xs.Mapvgl,addCalToWindow:!1,key:"Mapvgl"}),Mapv:n=>ds({src:n||Xs.Mapv,addCalToWindow:!1,key:"Mapv"}),MapvThree:n=>ds({src:n||Xs.MapvThree,addCalToWindow:!1,key:"MapvThree"})};function N_(n,e={}){const t=[...new Set(n)].reduce((i,r)=>{let s;return typeof r=="string"&&(s=O_[r])?i.push(s(e[r])):typeof r=="function"&&i.push(r()),i},[]);return Promise.all(t)}function Mc(n,e,t){for(const i of Object.keys(n))if(/^on/.test(i)&&n[i]){const r=i.replace(/^on/,"").toLocaleLowerCase();t.addEventListener(r,s=>{var a,o;s.preventDefault=s.preventDefault||((a=s.domEvent)===null||a===void 0?void 0:a.preventDefault.bind(s.domEvent)),s.stopPropagation=s.stopPropagation||((o=s.domEvent)===null||o===void 0?void 0:o.stopPropagation.bind(s.domEvent)),e(r,s)})}}function Gi(n){return(e,t)=>{(e===t||e!==t&&JSON.stringify(e)!==JSON.stringify(t))&&n(e)}}function Aa(n){console.error(`[Vue3 BaiduMap GL] ${n}`)}function zl(n){return Object.prototype.toString.call(n)==="[object String]"}function F_(n){return n!=null}const z_={style:{color:"#999",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},U_={name:"BMap"};var Mh=qo(Object.assign(Object.assign({},U_),{props:{ak:{type:String,required:!1},width:{type:[String,Number],required:!1,default:"100%"},height:{type:[String,Number],required:!1,default:"550px"},center:{type:[String,Object],required:!1,default:()=>({lat:39.915185,lng:116.403901})},mapType:{type:null,required:!1,default:"BMAP_NORMAL_MAP"},zoom:{type:Number,required:!1,default:14},heading:{type:Number,required:!1,default:0},tilt:{type:Number,required:!1,default:0},minZoom:{type:Number,required:!1,default:0},maxZoom:{type:Number,required:!1,default:21},noAnimation:{type:Boolean,required:!1,default:!1},mapStyleId:{type:String,required:!1},mapStyleJson:{type:Array,required:!1},showControls:{type:Boolean,required:!1,default:!1},plugins:{type:null,required:!1},pluginsSourceLink:{type:Object,required:!1},displayOptions:{type:Object,required:!1},restrictCenter:{type:Boolean,required:!1,default:!0},enableTraffic:{type:Boolean,required:!1,default:!1},enableDragging:{type:Boolean,required:!1,default:!0},enableInertialDragging:{type:Boolean,required:!1,default:!0},enableScrollWheelZoom:{type:Boolean,required:!1,default:!1},enableContinuousZoom:{type:Boolean,required:!1,default:!0},enableResizeOnCenter:{type:Boolean,required:!1,default:!0},enableDoubleClickZoom:{type:Boolean,required:!1,default:!1},enableKeyboard:{type:Boolean,required:!1,default:!0},enablePinchToZoom:{type:Boolean,required:!1,default:!0},enableAutoResize:{type:Boolean,required:!1,default:!0},onClick:{type:null,required:!1},onDblclick:{type:null,required:!1},onRightclick:{type:null,required:!1},onRightdblclick:{type:null,required:!1},onMaptypechange:{type:null,required:!1},onMousemove:{type:null,required:!1},onMouseover:{type:null,required:!1},onMouseout:{type:null,required:!1},onMovestart:{type:null,required:!1},onMoving:{type:null,required:!1},onMoveend:{type:null,required:!1},onZoomstart:{type:null,required:!1},onZoomend:{type:null,required:!1},onAddoverlay:{type:null,required:!1},onAddcontrol:{type:null,required:!1},onRemovecontrol:{type:null,required:!1},onRemoveoverlay:{type:null,required:!1},onClearoverlays:{type:null,required:!1},onDragstart:{type:null,required:!1},onDragging:{type:null,required:!1},onDragend:{type:null,required:!1},onAddtilelayer:{type:null,required:!1},onRemovetilelayer:{type:null,required:!1},onLoad:{type:null,required:!1},onResize:{type:null,required:!1},onHotspotclick:{type:null,required:!1},onHotspotover:{type:null,required:!1},onHotspotout:{type:null,required:!1},onTilesloaded:{type:null,required:!1},onTouchstart:{type:null,required:!1},onTouchmove:{type:null,required:!1},onTouchend:{type:null,required:!1},onLongpress:{type:null,required:!1}},emits:["initd","unload","pluginReady","click","dblclick","rightclick","rightdblclick","maptypechange","mousemove","mouseover","mouseout","movestart","moving","moveend","zoomstart","zoomend","addoverlay","addcontrol","removecontrol","removeoverlay","clearoverlays","dragstart","dragging","dragend","addtilelayer","removetilelayer","load","resize","hotspotclick","hotspotover","hotspotout","tilesloaded","touchstart","touchmove","touchend","longpress"],setup(n,{expose:e,emit:t}){const i=n,r=wl();let s=null,a=wl(!1);const{ready:o}=yc(),{uid:l,proxy:c}=Zo(),u=Nl(()=>zl(i.width)?i.width:`${i.width}px`),f=Nl(()=>zl(i.height)?i.height:`${i.height}px`),d=i.ak||c.$baiduMapAk,m=i.plugins&&c.$baiduMapPlugins?Object.assign(c.$baiduMapPlugins,i.plugins):i.plugins||c.$baiduMapPlugins,_=i.pluginsSourceLink&&c.$baiduMapPluginsSourceLink?Object.assign(c.$baiduMapPluginsSourceLink,i.pluginsSourceLink):i.pluginsSourceLink||c.$baiduMapPluginsSourceLink||{};d||Aa("missing required props: ak");const h=`_initBMap${d}`;function p(){ds({src:`//api.map.baidu.com/api?type=webgl&v=1.0&ak=${d}&callback=${h}`,addCalToWindow:!0,key:h}).then(()=>{const{restrictCenter:re,minZoom:U,maxZoom:ce,mapType:me,enableAutoResize:B,showControls:_e,center:be}=i;r.value&&(s=new BMapGL.Map(r.value,{restrictCenter:re,minZoom:U,maxZoom:ce,mapType:window[me],enableAutoResize:B,showControls:_e}),D(be),b(),v(),E(),Mc(i,t,s),a.value||(a.value=!0,Xd(()=>o(s,s)),m&&N_(m,_).then(()=>{t("pluginReady",s)}).catch(ye=>{Aa("plugins load error: "+ye)})))}).catch(Aa)}function v(){if(i.mapStyleId){s.setMapStyleV2({styleId:i.mapStyleId});return}else i.mapStyleJson&&s.setMapStyleV2({styleJson:i.mapStyleJson})}function E(){qe(()=>i.zoom,x),qe(()=>i.tilt,$),qe(()=>i.heading,P),qe(()=>i.center,Gi(D),{deep:!0}),qe(()=>i.mapStyleId,v),qe(()=>i.mapStyleJson,Gi(v),{deep:!0}),qe(()=>i.displayOptions,Gi(R),{deep:!0}),qe(()=>i.mapType,T),qe(()=>i.enableTraffic,S),qe(()=>i.enableDragging,Y),qe(()=>i.enableInertialDragging,N),qe(()=>i.enableScrollWheelZoom,F),qe(()=>i.enableContinuousZoom,j),qe(()=>i.enableResizeOnCenter,X),qe(()=>i.enableDoubleClickZoom,K),qe(()=>i.enableKeyboard,G),qe(()=>i.enablePinchToZoom,ae),qe(()=>i.enableAutoResize,oe)}function b(){const{enableDragging:re,enableInertialDragging:U,enableScrollWheelZoom:ce,enableContinuousZoom:me,enableResizeOnCenter:B,enableDoubleClickZoom:_e,enableKeyboard:be,enablePinchToZoom:ye,enableAutoResize:Me,enableTraffic:Le,displayOptions:Pe,mapType:A,zoom:L,tilt:H,heading:ee}=i;x(L),$(H),S(Le),P(ee),T(A),G(be),Y(re),oe(Me),ae(ye),j(me),X(B),K(_e),F(ce),N(U),R(Pe)}function y(re,U){return new BMapGL.Point(re,U)}function S(re){re?s.setTrafficOn():s.setTrafficOff()}function D(re){typeof re=="string"?s.centerAndZoom(re,i.zoom):s.centerAndZoom(y(re.lng,re.lat),i.zoom)}function R(re){s.setDisplayOptions(re||{})}function x(re){s.setZoom(re,{noAnimation:i.noAnimation})}function T(re){window[re]!==void 0&&s.setMapType(window[re])}function P(re){s.setHeading(re)}function $(re){s.setTilt(re)}function Y(re){re?s.enableDragging():s.disableDragging()}function N(re){re?s.enableInertialDragging():s.disableInertialDragging()}function F(re){re?s.enableScrollWheelZoom():s.disableScrollWheelZoom()}function j(re){re?s.enableContinuousZoom():s.disableContinuousZoom()}function X(re){re?s.enableResizeOnCenter():s.disableResizeOnCenter()}function K(re){re?s.enableDoubleClickZoom():s.disableDoubleClickZoom()}function G(re){re?s.enableKeyboard():s.disableKeyboard()}function ae(re){re?s.enablePinchToZoom():s.disablePinchToZoom()}function oe(re){re?s.enableAutoResize():s.disableAutoResize()}return gc(p),Rs(()=>{s==null||s.destroy()}),e({getMapInstance:()=>s,getBaseMapOptions:()=>i,resetCenter:()=>D(i.center),setDragging:Y}),ii("getMapInstance",()=>s),ii("parentUidGetter",l),ii("baseMapSetCenterAndZoom",re=>D(re)),ii("baseMapSetDragging",re=>Y(re)),ii("getBaseMapOptions",()=>i),(re,U)=>(En(),kn(ht,null,[Re("div",{class:"baidu-map-container",ref_key:"mapContainer",ref:r,style:zo([{width:ri(u),height:ri(f)},{background:"#f1f1f1",position:"relative",overflow:"hidden"}])},[su(re.$slots,"loading",{isLoading:!ri(a)},()=>[Re("div",z_,bl(ri(a)?"":"map loading..."),1)])],4),su(re.$slots,"default")],64))}}));Mh.__file="packages/components/map/index.vue";function Sh(n){var e;const{on:t,off:i}=yh(),r=Dr("getMapInstance"),a=Dr("parentUidGetter")||((e=Zo())===null||e===void 0?void 0:e.uid),o=r&&r(),l=`__initd__${a}`;let c;const u=({map:f})=>{c=n(f)};o?u({map:o}):t(l,u),Rs(()=>{i(l,u),c&&c()})}let tr=null;function B_(){if(tr!==null)return tr;const n="//mapopen.bj.bcebos.com/cms/react-bmap/markers_new2x_fbb9e99.png";tr={simple_red:new BMapGL.Icon(n,new BMapGL.Size(42/2,66/2),{imageOffset:new BMapGL.Size(454/2,378/2),imageSize:new BMapGL.Size(600/2,600/2)}),simple_blue:new BMapGL.Icon(n,new BMapGL.Size(42/2,66/2),{imageOffset:new BMapGL.Size(454/2,450/2),imageSize:new BMapGL.Size(600/2,600/2)}),loc_red:new BMapGL.Icon(n,new BMapGL.Size(46/2,70/2),{imageOffset:new BMapGL.Size(400/2,378/2),imageSize:new BMapGL.Size(600/2,600/2)}),loc_blue:new BMapGL.Icon(n,new BMapGL.Size(46/2,70/2),{imageOffset:new BMapGL.Size(400/2,450/2),imageSize:new BMapGL.Size(600/2,600/2)}),start:new BMapGL.Icon(n,new BMapGL.Size(50/2,80/2),{imageOffset:new BMapGL.Size(400/2,278/2),imageSize:new BMapGL.Size(600/2,600/2)}),end:new BMapGL.Icon(n,new BMapGL.Size(50/2,80/2),{imageOffset:new BMapGL.Size(450/2,278/2),imageSize:new BMapGL.Size(600/2,600/2)}),location:new BMapGL.Icon(n,new BMapGL.Size(28/2,40/2),{imageOffset:new BMapGL.Size(248/2,466/2),imageSize:new BMapGL.Size(600/2,600/2)})};for(let e=1;e<=10;e++)tr["red"+e]=new BMapGL.Icon(n,new BMapGL.Size(42/2,66/2),{imageOffset:new BMapGL.Size(42/2*(e-1),0),imageSize:new BMapGL.Size(600/2,600/2)});for(let e=1;e<=10;e++)tr["blue"+e]=new BMapGL.Icon(n,new BMapGL.Size(42/2,66/2),{imageOffset:new BMapGL.Size(42/2*(e-1),132/2),imageSize:new BMapGL.Size(600/2,600/2)});return tr}const k_={name:"BMarker"};var Eh=qo(Object.assign(Object.assign({},k_),{props:{position:{type:null,required:!0},offset:{type:Object,required:!1,default:()=>({x:0,y:0})},icon:{type:[Object,null],required:!1},zIndex:{type:Number,required:!1},enableMassClear:{type:Boolean,required:!1,default:!0},enableDragging:{type:Boolean,required:!1,default:!1},enableClicking:{type:Boolean,required:!1,default:!0},raiseOnDrag:{type:Boolean,required:!1,default:!1},draggingCursor:{type:String,required:!1,default:"pointer"},rotation:{type:Number,required:!1,default:0},title:{type:String,required:!1,default:""},onClick:{type:null,required:!1},onDblclick:{type:null,required:!1},onMousedown:{type:null,required:!1},onMouseup:{type:null,required:!1},onMouseout:{type:null,required:!1},onMouseover:{type:null,required:!1},onRemove:{type:null,required:!1},onInfowindowclose:{type:null,required:!1},onInfowindowopen:{type:null,required:!1},onDragstart:{type:null,required:!1},onDragging:{type:null,required:!1},onDragend:{type:null,required:!1},onRightClick:{type:null,required:!1}},emits:["initd","unload","click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","infowindowclose","infowindowopen","dragstart","dragging","dragend","rightclick"],setup(n,{emit:e}){const t=n,{ready:i}=yc();let r;Sh(m=>{const _=()=>{r&&m.removeOverlay(r)},h=()=>{if(!t.position)return;const{position:p,offset:v,enableMassClear:E,enableDragging:b,enableClicking:y,raiseOnDrag:S,draggingCursor:D,rotation:R,title:x,icon:T,zIndex:P}=t,$={offset:new BMapGL.Size(v.x,v.y),enableMassClear:E,enableDragging:b,enableClicking:y,raiseOnDrag:S,draggingCursor:D,title:x};T&&($.icon=s()),r=new BMapGL.Marker(new BMapGL.Point(p.lng,p.lat),$),d(R),F_(P)&&a(P),m.addOverlay(r),Mc(t,e,r),i(m,r)};return h(),qe(()=>t.position,Gi(p=>{r?o(p):h()}),{deep:!0}),qe(()=>t.icon,Gi(l),{deep:!0}),qe(()=>t.offset,Gi(f),{deep:!0}),qe(()=>t.enableDragging,c),qe(()=>t.enableMassClear,u),qe(()=>t.rotation,d),_}),ii("getOverlayInstance",()=>r);function s(){const m=B_(),{icon:_}=t;if(zl(_)&&m[_])return m[_];{const{anchor:h,imageOffset:p,imageSize:v,imageUrl:E,printImageUrl:b}=_,y={imageSize:new BMapGL.Size(v.width,v.height)};return h&&(y.anchor=new BMapGL.Size(h.x,h.y)),p&&(y.imageOffset=new BMapGL.Size(p.x,p.y)),b&&(y.printImageUrl=b),new BMapGL.Icon(E,new BMapGL.Size(v.width,v.height),y)}}function a(m){r.setZIndex(m)}function o(m){m&&m.lat&&m.lng&&r.setPosition(new BMapGL.Point(m.lng,m.lat))}function l(){r.setIcon(s())}function c(m){m?r.enableDragging():r.disableDragging()}function u(m){m?r.enableMassClear():r.disableMassClear()}function f(m){r.setOffset(new BMapGL.Size(m.x,m.y))}function d(m){r.setRotation(m)}return(m,_)=>null}}));Eh.__file="packages/components/overlay/marker/index.vue";const V_={name:"BPolyline"};var wh=qo(Object.assign(Object.assign({},V_),{props:{path:{type:Array,required:!0},strokeColor:{type:String,required:!1,default:"#000"},strokeWeight:{type:Number,required:!1,default:2},strokeOpacity:{type:Number,required:!1,default:1},strokeStyle:{type:null,required:!1,default:"solid"},enableMassClear:{type:Boolean,required:!1,default:!0},enableEditing:{type:Boolean,required:!1,default:!1},enableClicking:{type:Boolean,required:!1,default:!0},geodesic:{type:Boolean,required:!1,default:!1},clip:{type:Boolean,required:!1,default:!0},onClick:{type:null,required:!1},onDblclick:{type:null,required:!1},onMousedown:{type:null,required:!1},onMouseup:{type:null,required:!1},onMouseout:{type:null,required:!1},onMouseover:{type:null,required:!1},onRemove:{type:null,required:!1},onLineupdate:{type:null,required:!1}},emits:["initd","unload","click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],setup(n,{emit:e}){const t=n,{ready:i}=yc();let r;Sh(m=>{const _=()=>{m.removeOverlay(r)},h=()=>{if(!t.path||!t.path.length)return;const{path:p,strokeColor:v,strokeWeight:E,strokeOpacity:b,strokeStyle:y,enableMassClear:S,enableEditing:D,enableClicking:R,geodesic:x,clip:T}=t,P=s(p);r=new BMapGL.Polyline(P,{strokeColor:v,strokeWeight:E,strokeOpacity:b,strokeStyle:y,enableMassClear:S,enableEditing:D,enableClicking:R,geodesic:x,clip:T}),m.addOverlay(r),Mc(t,e,r),i(m,r)};return h(),qe(()=>t.path,Gi(p=>{r?a(p):h()}),{deep:!0}),qe(()=>t.strokeColor,o),qe(()=>t.strokeOpacity,l),qe(()=>t.strokeWeight,c),qe(()=>t.strokeStyle,u),qe(()=>t.enableMassClear,f),qe(()=>t.enableEditing,d),_}),ii("getOverlayInstance",()=>r);function s(m){return m.map(({lng:_,lat:h})=>new BMapGL.Point(_,h))}function a(m){r.setPath(s(m))}function o(m){r.setStrokeColor(m)}function l(m){r.setStrokeOpacity(m)}function c(m){r.setStrokeWeight(m)}function u(m){r.setStrokeStyle(m)}function f(m){m?r.enableMassClear():r.disableMassClear()}function d(m){m?r.enableEditing():r.disableEditing()}return(m,_)=>null}}));wh.__file="packages/components/overlay/polyline/index.vue";const G_={class:"map-view"},H_=qo({__name:"MapContainer",setup(n){const e=wl("BMAP_EARTH_MAP");return(t,i)=>(En(),kn("div",G_,[mt(ri(Mh),{ak:"Y3aGLNa2R19LW16nG4xU8RwbBCOQf83W",mapType:e.value,zoom:18,center:{lng:114.22056867383982,lat:22.42082544146885},enablePinchToZoom:!0,enableDragging:!0,enableScrollWheelZoom:!0,enableContinuousZoom:!0,enableDoubleClickZoom:!0,displayOptions:{poi:!1,poiIcon:!0,poiText:!1,overlay:!0,street:!0}},{default:Qd(()=>[mt(ri(Eh),{zIndex:99,position:{lat:22.417061,lng:114.221015},icon:"simple_red"},null,8,["position"]),mt(ri(wh),{path:[{lng:114.221015,lat:22.417061},{lng:114.222236,lat:22.419016}],"stroke-color":"#000","stroke-opacity":10,"stroke-weight":3},null,8,["path"])]),_:1},8,["mapType","center"])]))}});const Is=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},W_={components:{MapContainer:H_}},$_=Re("h1",null,"Map View",-1);function q_(n,e,t,i,r,s){const a=Ll("MapContainer");return En(),kn(ht,null,[$_,mt(a)],64)}const j_=Is(W_,[["render",q_]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="150",nr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},X_=0,Mu=1,Y_=2,Th=1,K_=2,hs=3,di=0,Ft=1,si=2,ci=0,Pr=1,Su=2,Eu=3,wu=4,Z_=5,xr=100,J_=101,Q_=102,Tu=103,Au=104,ev=200,tv=201,nv=202,iv=203,Ah=204,Ch=205,rv=206,sv=207,ov=208,av=209,lv=210,cv=0,uv=1,fv=2,Ul=3,dv=4,hv=5,pv=6,mv=7,Lh=0,gv=1,_v=2,Vn=0,vv=1,xv=2,bv=3,yv=4,Mv=5,Dh=300,Fr=301,zr=302,Bl=303,kl=304,Jo=306,Vl=1e3,ln=1001,Gl=1002,Ct=1003,Cu=1004,Ca=1005,Ot=1006,Sv=1007,Ts=1008,$i=1009,Ev=1010,wv=1011,Ph=1012,Tv=1013,Fi=1014,zi=1015,As=1016,Av=1017,Cv=1018,Rr=1020,Lv=1021,cn=1023,Dv=1024,Pv=1025,Hi=1026,Ur=1027,Rv=1028,Iv=1029,Ov=1030,Nv=1031,Fv=1033,La=33776,Da=33777,Pa=33778,Ra=33779,Lu=35840,Du=35841,Pu=35842,Ru=35843,zv=36196,Iu=37492,Ou=37496,Nu=37808,Fu=37809,zu=37810,Uu=37811,Bu=37812,ku=37813,Vu=37814,Gu=37815,Hu=37816,Wu=37817,$u=37818,qu=37819,ju=37820,Xu=37821,Ia=36492,Uv=36283,Yu=36284,Ku=36285,Zu=36286,qi=3e3,Je=3001,Bv=3200,kv=3201,Vv=0,Gv=1,vn="srgb",Cs="srgb-linear",Rh="display-p3",Oa=7680,Hv=519,Ju=35044,Qu="300 es",Hl=1035;class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Na=Math.PI/180,ef=180/Math.PI;function Os(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function Wv(n,e){return(n%e+e)%e}function Fa(n,e,t){return(1-t)*n+t*e}function tf(n){return(n&n-1)===0&&n!==0}function $v(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ys(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],_=i[8],h=r[0],p=r[3],v=r[6],E=r[1],b=r[4],y=r[7],S=r[2],D=r[5],R=r[8];return s[0]=a*h+o*E+l*S,s[3]=a*p+o*b+l*D,s[6]=a*v+o*y+l*R,s[1]=c*h+u*E+f*S,s[4]=c*p+u*b+f*D,s[7]=c*v+u*y+f*R,s[2]=d*h+m*E+_*S,s[5]=d*p+m*b+_*D,s[8]=d*v+m*y+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,_=t*f+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/_;return e[0]=f*h,e[1]=(r*c-u*i)*h,e[2]=(o*i-r*a)*h,e[3]=d*h,e[4]=(u*t-r*l)*h,e[5]=(r*s-o*t)*h,e[6]=m*h,e[7]=(i*l-c*t)*h,e[8]=(a*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(za.makeScale(e,t)),this}rotate(e){return this.premultiply(za.makeRotation(-e)),this}translate(e,t){return this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const za=new Lt;function Ih(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class ji{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],h=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=h;return}if(f!==h||l!==d||c!==m||u!==_){let p=1-o;const v=l*d+c*m+u*_+f*h,E=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const S=Math.sqrt(b),D=Math.atan2(S,v*E);p=Math.sin(p*D)/S,o=Math.sin(o*D)/S}const y=o*E;if(l=l*p+d*y,c=c*p+m*y,u=u*p+_*y,f=f*p+h*y,p===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*m-c*d,e[t+1]=l*_+u*d+c*f-o*m,e[t+2]=c*_+u*m+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"YZX":this._x=d*u*f+c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f-d*m*_;break;case"XZY":this._x=d*u*f-c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,d=-s*t-a*i-o*r;return this.x=c*l+d*-s+u*-o-f*-a,this.y=u*l+d*-a+f*-s-c*-o,this.z=f*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new W,nf=new ji;function Ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ba(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const qv=new Lt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),jv=new Lt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),oi=new W;function Xv(n){return n.convertSRGBToLinear(),oi.set(n.r,n.g,n.b).applyMatrix3(jv),n.setRGB(oi.x,oi.y,oi.z)}function Yv(n){return oi.set(n.r,n.g,n.b).applyMatrix3(qv),n.setRGB(oi.x,oi.y,oi.z).convertLinearToSRGB()}const Kv={[Cs]:n=>n,[vn]:n=>n.convertSRGBToLinear(),[Rh]:Xv},Zv={[Cs]:n=>n,[vn]:n=>n.convertLinearToSRGB(),[Rh]:Yv},wt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Cs},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Kv[e],r=Zv[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let rr;class Oh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Ls("canvas")),rr.width=e.width,rr.height=e.height;const i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ir(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ir(t[i]/255)*255):t[i]=Ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Nh{constructor(e=null){this.isSource=!0,this.uuid=Os(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ka(r[a].image)):s.push(ka(r[a]))}else s=ka(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ka(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Oh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jv=0;class Dt extends Ji{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=ln,r=ln,s=Ot,a=Ts,o=cn,l=$i,c=Dt.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Os(),this.name="",this.source=new Nh(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vl:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vl:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Dh;Dt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],_=l[9],h=l[2],p=l[6],v=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-h)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+h)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(m+1)/2,S=(v+1)/2,D=(u+d)/4,R=(f+h)/4,x=(_+p)/4;return b>y&&b>S?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=D/i,s=R/i):y>S?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=D/r,s=x/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=R/s,r=x/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-_)*(p-_)+(f-h)*(f-h)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(f-h)/E,this.z=(d-u)/E,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xi extends Ji{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Dt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ot,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fh extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qv extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ns{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<t&&(t=u),f<i&&(i=f),d<r&&(r=d),u>s&&(s=u),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<t&&(t=u),f<i&&(i=f),d<r&&(r=d),u>s&&(s=u),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Ti.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ti)}else i.boundingBox===null&&i.computeBoundingBox(),Va.copy(i.boundingBox),Va.applyMatrix4(e.matrixWorld),this.union(Va);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),Ks.subVectors(this.max,ns),sr.subVectors(e.a,ns),or.subVectors(e.b,ns),ar.subVectors(e.c,ns),Zn.subVectors(or,sr),Jn.subVectors(ar,or),Ai.subVectors(sr,ar);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-Ai.z,Ai.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,Ai.z,0,-Ai.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-Ai.y,Ai.x,0];return!Ga(t,sr,or,ar,Ks)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,sr,or,ar,Ks))?!1:(Zs.crossVectors(Zn,Jn),t=[Zs.x,Zs.y,Zs.z],Ga(t,sr,or,ar,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new W,new W,new W,new W,new W,new W,new W,new W],Ti=new W,Va=new Ns,sr=new W,or=new W,ar=new W,Zn=new W,Jn=new W,Ai=new W,ns=new W,Ks=new W,Zs=new W,Ci=new W;function Ga(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ci.fromArray(n,s);const o=r.x*Math.abs(Ci.x)+r.y*Math.abs(Ci.y)+r.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),u=i.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const e0=new Ns,is=new W,Ha=new W;class Ec{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):e0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);const t=is.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(is,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(Ha)),this.expandByPoint(is.copy(e.center).sub(Ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new W,Wa=new W,Js=new W,Qn=new W,$a=new W,Qs=new W,qa=new W;class t0{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wa.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(Wa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Js),o=Qn.dot(this.direction),l=-Qn.dot(Js),c=Qn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,_;if(u>0)if(f=a*l-o,d=a*o-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const h=1/u;f*=h,d*=h,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wa).addScaledVector(Js,d),m}intersectSphere(e,t){In.subVectors(e.center,this.origin);const i=In.dot(this.direction),r=In.dot(In)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,i,r,s){$a.subVectors(t,e),Qs.subVectors(i,e),qa.crossVectors($a,Qs);let a=this.direction.dot(qa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,e);const l=o*this.direction.dot(Qs.crossVectors(Qn,Qs));if(l<0)return null;const c=o*this.direction.dot($a.cross(Qn));if(c<0||l+c>a)return null;const u=-o*Qn.dot(qa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,d,m,_,h,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=d,v[3]=m,v[7]=_,v[11]=h,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/lr.setFromMatrixColumn(e,0).length(),s=1/lr.setFromMatrixColumn(e,1).length(),a=1/lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,_=o*u,h=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=d-h*c,t[9]=-o*l,t[2]=h-d*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,_=c*u,h=c*f;t[0]=d+h*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=h+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,_=c*u,h=c*f;t[0]=d-h*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=h-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,_=o*u,h=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+h,t[1]=l*f,t[5]=h*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,h=o*c;t[0]=l*u,t[4]=h-d*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=d-h*f}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,h=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+h,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=h*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n0,e,i0)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),ei.crossVectors(i,Vt),ei.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),ei.crossVectors(i,Vt)),ei.normalize(),eo.crossVectors(Vt,ei),r[0]=ei.x,r[4]=eo.x,r[8]=Vt.x,r[1]=ei.y,r[5]=eo.y,r[9]=Vt.y,r[2]=ei.z,r[6]=eo.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],_=i[2],h=i[6],p=i[10],v=i[14],E=i[3],b=i[7],y=i[11],S=i[15],D=r[0],R=r[4],x=r[8],T=r[12],P=r[1],$=r[5],Y=r[9],N=r[13],F=r[2],j=r[6],X=r[10],K=r[14],G=r[3],ae=r[7],oe=r[11],re=r[15];return s[0]=a*D+o*P+l*F+c*G,s[4]=a*R+o*$+l*j+c*ae,s[8]=a*x+o*Y+l*X+c*oe,s[12]=a*T+o*N+l*K+c*re,s[1]=u*D+f*P+d*F+m*G,s[5]=u*R+f*$+d*j+m*ae,s[9]=u*x+f*Y+d*X+m*oe,s[13]=u*T+f*N+d*K+m*re,s[2]=_*D+h*P+p*F+v*G,s[6]=_*R+h*$+p*j+v*ae,s[10]=_*x+h*Y+p*X+v*oe,s[14]=_*T+h*N+p*K+v*re,s[3]=E*D+b*P+y*F+S*G,s[7]=E*R+b*$+y*j+S*ae,s[11]=E*x+b*Y+y*X+S*oe,s[15]=E*T+b*N+y*K+S*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],_=e[3],h=e[7],p=e[11],v=e[15];return _*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+h*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+v*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],_=e[12],h=e[13],p=e[14],v=e[15],E=f*p*c-h*d*c+h*l*m-o*p*m-f*l*v+o*d*v,b=_*d*c-u*p*c-_*l*m+a*p*m+u*l*v-a*d*v,y=u*h*c-_*f*c+_*o*m-a*h*m-u*o*v+a*f*v,S=_*f*l-u*h*l-_*o*d+a*h*d+u*o*p-a*f*p,D=t*E+i*b+r*y+s*S;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=E*R,e[1]=(h*d*s-f*p*s-h*r*m+i*p*m+f*r*v-i*d*v)*R,e[2]=(o*p*s-h*l*s+h*r*c-i*p*c-o*r*v+i*l*v)*R,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*R,e[4]=b*R,e[5]=(u*p*s-_*d*s+_*r*m-t*p*m-u*r*v+t*d*v)*R,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*v-t*l*v)*R,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*R,e[8]=y*R,e[9]=(_*f*s-u*h*s-_*i*m+t*h*m+u*i*v-t*f*v)*R,e[10]=(a*h*s-_*o*s+_*i*c-t*h*c-a*i*v+t*o*v)*R,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*R,e[12]=S*R,e[13]=(u*h*r-_*f*r+_*i*d-t*h*d-u*i*p+t*f*p)*R,e[14]=(_*o*r-a*h*r-_*i*l+t*h*l+a*i*p-t*o*p)*R,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,_=s*f,h=a*u,p=a*f,v=o*f,E=l*c,b=l*u,y=l*f,S=i.x,D=i.y,R=i.z;return r[0]=(1-(h+v))*S,r[1]=(m+y)*S,r[2]=(_-b)*S,r[3]=0,r[4]=(m-y)*D,r[5]=(1-(d+v))*D,r[6]=(p+E)*D,r[7]=0,r[8]=(_+b)*R,r[9]=(p-E)*R,r[10]=(1-(d+h))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=lr.set(r[0],r[1],r[2]).length();const a=lr.set(r[4],r[5],r[6]).length(),o=lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/s,u=1/a,f=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,t.setFromRotationMatrix(nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),d=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,d=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const lr=new W,nn=new gt,n0=new W(0,0,0),i0=new W(1,1,1),ei=new W,eo=new W,Vt=new W,rf=new gt,sf=new ji;class Qo{constructor(e=0,t=0,i=0,r=Qo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sf.setFromEuler(this),this.setFromQuaternion(sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qo.DEFAULT_ORDER="XYZ";class zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let r0=0;const of=new W,cr=new ji,On=new gt,to=new W,rs=new W,s0=new W,o0=new ji,af=new W(1,0,0),lf=new W(0,1,0),cf=new W(0,0,1),a0={type:"added"},uf={type:"removed"};class $t extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new W,t=new Qo,i=new ji,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Lt}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(af,e)}rotateY(e){return this.rotateOnAxis(lf,e)}rotateZ(e){return this.rotateOnAxis(cf,e)}translateOnAxis(e,t){return of.copy(e).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(af,e)}translateY(e){return this.translateOnAxis(lf,e)}translateZ(e){return this.translateOnAxis(cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?to.copy(e):to.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(rs,to,this.up):On.lookAt(to,rs,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),cr.setFromRotationMatrix(On),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(a0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(uf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,s0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,o0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new W(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new W,Nn=new W,ja=new W,Fn=new W,ur=new W,fr=new W,ff=new W,Xa=new W,Ya=new W,Ka=new W;class Un{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rn.subVectors(r,t),Nn.subVectors(i,t),ja.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(Nn),l=rn.dot(ja),c=Nn.dot(Nn),u=Nn.dot(ja),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fn),Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Fn),l.set(0,0),l.addScaledVector(s,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l}static isFrontFacing(e,t,i,r){return rn.subVectors(i,t),Nn.subVectors(e,t),rn.cross(Nn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),rn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Un.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ur.subVectors(r,i),fr.subVectors(s,i),Xa.subVectors(e,i);const l=ur.dot(Xa),c=fr.dot(Xa);if(l<=0&&c<=0)return t.copy(i);Ya.subVectors(e,r);const u=ur.dot(Ya),f=fr.dot(Ya);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ur,a);Ka.subVectors(e,s);const m=ur.dot(Ka),_=fr.dot(Ka);if(_>=0&&m<=_)return t.copy(s);const h=m*c-l*_;if(h<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(fr,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return ff.subVectors(s,r),o=(f-u)/(f-u+(m-_)),t.copy(r).addScaledVector(ff,o);const v=1/(p+h+d);return a=h*v,o=d*v,t.copy(i).addScaledVector(ur,a).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let l0=0;class ea extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Pr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ah,this.blendDst=Ch,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},no={h:0,s:0,l:0};function Za(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=wt.workingColorSpace){if(e=Wv(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Za(a,s,e+1/3),this.g=Za(a,s,e),this.b=Za(a,s,e-1/3)}return wt.toWorkingColorSpace(this,r),this}setStyle(e,t=vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,wt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,wt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,wt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,wt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const i=Uh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return wt.fromWorkingColorSpace(vt.copy(this),e),Nt(vt.r*255,0,255)<<16^Nt(vt.g*255,0,255)<<8^Nt(vt.b*255,0,255)<<0}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(vt.copy(this),t);const i=vt.r,r=vt.g,s=vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=vn){wt.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,i=vt.g,r=vt.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(sn),sn.h+=e,sn.s+=t,sn.l+=i,this.setHSL(sn.h,sn.s,sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(no);const i=Fa(sn.h,no.h,t),r=Fa(sn.s,no.s,t),s=Fa(sn.l,no.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new et;et.NAMES=Uh;class Ds extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new W,io=new Ge;class wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ju,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ju&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Bh extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kh extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tn extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let c0=0;const Kt=new gt,Ja=new $t,dr=new W,Gt=new Ns,ss=new Ns,dt=new W;class gi extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ih(e)?kh:Bh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return Ja.lookAt(e),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ec);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(Gt.min,ss.min),Gt.expandByPoint(dt),dt.addVectors(Gt.max,ss.max),Gt.expandByPoint(dt)):(Gt.expandByPoint(ss.min),Gt.expandByPoint(ss.max))}Gt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)dt.fromBufferAttribute(o,c),l&&(dr.fromBufferAttribute(e,c),dt.add(dr)),r=Math.max(r,i.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<o;P++)c[P]=new W,u[P]=new W;const f=new W,d=new W,m=new W,_=new Ge,h=new Ge,p=new Ge,v=new W,E=new W;function b(P,$,Y){f.fromArray(r,P*3),d.fromArray(r,$*3),m.fromArray(r,Y*3),_.fromArray(a,P*2),h.fromArray(a,$*2),p.fromArray(a,Y*2),d.sub(f),m.sub(f),h.sub(_),p.sub(_);const N=1/(h.x*p.y-p.x*h.y);isFinite(N)&&(v.copy(d).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(N),E.copy(m).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(N),c[P].add(v),c[$].add(v),c[Y].add(v),u[P].add(E),u[$].add(E),u[Y].add(E))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let P=0,$=y.length;P<$;++P){const Y=y[P],N=Y.start,F=Y.count;for(let j=N,X=N+F;j<X;j+=3)b(i[j+0],i[j+1],i[j+2])}const S=new W,D=new W,R=new W,x=new W;function T(P){R.fromArray(s,P*3),x.copy(R);const $=c[P];S.copy($),S.sub(R.multiplyScalar(R.dot($))).normalize(),D.crossVectors(x,$);const N=D.dot(u[P])<0?-1:1;l[P*4]=S.x,l[P*4+1]=S.y,l[P*4+2]=S.z,l[P*4+3]=N}for(let P=0,$=y.length;P<$;++P){const Y=y[P],N=Y.start,F=Y.count;for(let j=N,X=N+F;j<X;j+=3)T(i[j+0]),T(i[j+1]),T(i[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),h=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,h),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,h),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let h=0,p=l.length;h<p;h++){o.isInterleavedBufferAttribute?m=l[h]*o.data.stride+o.offset:m=l[h]*u;for(let v=0;v<u;v++)d[_++]=c[m++]}return new wn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const df=new gt,_n=new t0,ro=new Ec,hf=new W,os=new W,as=new W,ls=new W,Qa=new W,so=new W,oo=new Ge,ao=new Ge,lo=new Ge,el=new W,co=new W;class Mn extends $t{constructor(e=new gi,t=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){so.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Qa.fromBufferAttribute(f,e),a?so.addScaledVector(Qa,u):so.addScaledVector(Qa.sub(t),u))}t.add(so)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(s),_n.copy(e.ray).recast(e.near),ro.containsPoint(_n.origin)===!1&&(_n.intersectSphere(ro,hf)===null||_n.origin.distanceToSquared(hf)>(e.far-e.near)**2))||(df.copy(s).invert(),_n.copy(e.ray).applyMatrix4(df),i.boundingBox!==null&&_n.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,_=f.length;m<_;m++){const h=f[m],p=r[h.materialIndex],v=Math.max(h.start,d.start),E=Math.min(o.count,Math.min(h.start+h.count,d.start+d.count));for(let b=v,y=E;b<y;b+=3){const S=o.getX(b),D=o.getX(b+1),R=o.getX(b+2);a=uo(this,p,e,_n,c,u,S,D,R),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let h=m,p=_;h<p;h+=3){const v=o.getX(h),E=o.getX(h+1),b=o.getX(h+2);a=uo(this,r,e,_n,c,u,v,E,b),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=f.length;m<_;m++){const h=f[m],p=r[h.materialIndex],v=Math.max(h.start,d.start),E=Math.min(l.count,Math.min(h.start+h.count,d.start+d.count));for(let b=v,y=E;b<y;b+=3){const S=b,D=b+1,R=b+2;a=uo(this,p,e,_n,c,u,S,D,R),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let h=m,p=_;h<p;h+=3){const v=h,E=h+1,b=h+2;a=uo(this,r,e,_n,c,u,v,E,b),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}}}function u0(n,e,t,i,r,s,a,o){let l;if(e.side===Ft?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===di,o),l===null)return null;co.copy(o),co.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(co);return c<t.near||c>t.far?null:{distance:c,point:co.clone(),object:n}}function uo(n,e,t,i,r,s,a,o,l){n.getVertexPosition(a,os),n.getVertexPosition(o,as),n.getVertexPosition(l,ls);const c=u0(n,e,t,i,os,as,ls,el);if(c){r&&(oo.fromBufferAttribute(r,a),ao.fromBufferAttribute(r,o),lo.fromBufferAttribute(r,l),c.uv=Un.getUV(el,os,as,ls,oo,ao,lo,new Ge)),s&&(oo.fromBufferAttribute(s,a),ao.fromBufferAttribute(s,o),lo.fromBufferAttribute(s,l),c.uv2=Un.getUV(el,os,as,ls,oo,ao,lo,new Ge));const u={a,b:o,c:l,normal:new W,materialIndex:0};Un.getNormal(os,as,ls,u.normal),c.face=u}return c}class Fs extends gi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(u,3)),this.setAttribute("uv",new Tn(f,2));function _(h,p,v,E,b,y,S,D,R,x,T){const P=y/R,$=S/x,Y=y/2,N=S/2,F=D/2,j=R+1,X=x+1;let K=0,G=0;const ae=new W;for(let oe=0;oe<X;oe++){const re=oe*$-N;for(let U=0;U<j;U++){const ce=U*P-Y;ae[h]=ce*E,ae[p]=re*b,ae[v]=F,c.push(ae.x,ae.y,ae.z),ae[h]=0,ae[p]=0,ae[v]=D>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(U/R),f.push(1-oe/x),K+=1}}for(let oe=0;oe<x;oe++)for(let re=0;re<R;re++){const U=d+re+j*oe,ce=d+re+j*(oe+1),me=d+(re+1)+j*(oe+1),B=d+(re+1)+j*oe;l.push(U,ce,B),l.push(ce,me,B),G+=6}o.addGroup(m,G,T),m+=G,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Br(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=Br(n[t]);for(const r in i)e[r]=i[r]}return e}function f0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vh(n){return n.getRenderTarget()===null&&n.outputEncoding===Je?vn:Cs}const d0={clone:Br,merge:At};var h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=f0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gh extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends Gh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ef*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ef*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Na*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hr=-90,pr=1;class m0 extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Wt(hr,pr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Wt(hr,pr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Wt(hr,pr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Wt(hr,pr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Wt(hr,pr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Wt(hr,pr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Vn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Hh extends Dt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g0 extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fs(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:ci});s.uniforms.tEquirect.value=t;const a=new Mn(r,s),o=t.minFilter;return t.minFilter===Ts&&(t.minFilter=Ot),new m0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const tl=new W,_0=new W,v0=new Lt;class Di{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=tl.subVectors(i,t).cross(_0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(tl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||v0.getNormalMatrix(e),r=this.coplanarPoint(tl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Ec,fo=new W;class Wh{constructor(e=new Di,t=new Di,i=new Di,r=new Di,s=new Di,a=new Di){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],d=i[8],m=i[9],_=i[10],h=i[11],p=i[12],v=i[13],E=i[14],b=i[15];return t[0].setComponents(o-r,f-l,h-d,b-p).normalize(),t[1].setComponents(o+r,f+l,h+d,b+p).normalize(),t[2].setComponents(o+s,f+c,h+m,b+v).normalize(),t[3].setComponents(o-s,f-c,h-m,b-v).normalize(),t[4].setComponents(o-a,f-u,h-_,b-E).normalize(),t[5].setComponents(o+a,f+u,h+_,b+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fo.x=r.normal.x>0?e.max.x:e.min.x,fo.y=r.normal.y>0?e.max.y:e.min.y,fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $h(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function x0(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class wc extends gi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],_=[],h=[],p=[];for(let v=0;v<u;v++){const E=v*d-a;for(let b=0;b<c;b++){const y=b*f-s;_.push(y,-E,0),h.push(0,0,1),p.push(b/o),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let E=0;E<o;E++){const b=E+c*v,y=E+c*(v+1),S=E+1+c*(v+1),D=E+1+c*v;m.push(b,y,D),m.push(y,S,D)}this.setIndex(m),this.setAttribute("position",new Tn(_,3)),this.setAttribute("normal",new Tn(h,3)),this.setAttribute("uv",new Tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}var b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0="vec3 transformed = vec3( position );",A0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,L0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,B0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,k0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ix=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cx=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,px=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,mx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_x=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,xx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Px=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ox=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ux=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ib=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ub=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,fb=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,db=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,hb=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,pb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,mb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,gb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,_b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Eb=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ab=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Db=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rb=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Kb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:b0,alphamap_pars_fragment:y0,alphatest_fragment:M0,alphatest_pars_fragment:S0,aomap_fragment:E0,aomap_pars_fragment:w0,begin_vertex:T0,beginnormal_vertex:A0,bsdfs:C0,iridescence_fragment:L0,bumpmap_pars_fragment:D0,clipping_planes_fragment:P0,clipping_planes_pars_fragment:R0,clipping_planes_pars_vertex:I0,clipping_planes_vertex:O0,color_fragment:N0,color_pars_fragment:F0,color_pars_vertex:z0,color_vertex:U0,common:B0,cube_uv_reflection_fragment:k0,defaultnormal_vertex:V0,displacementmap_pars_vertex:G0,displacementmap_vertex:H0,emissivemap_fragment:W0,emissivemap_pars_fragment:$0,encodings_fragment:q0,encodings_pars_fragment:j0,envmap_fragment:X0,envmap_common_pars_fragment:Y0,envmap_pars_fragment:K0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:cx,envmap_vertex:J0,fog_vertex:Q0,fog_pars_vertex:ex,fog_fragment:tx,fog_pars_fragment:nx,gradientmap_pars_fragment:ix,lightmap_fragment:rx,lightmap_pars_fragment:sx,lights_lambert_fragment:ox,lights_lambert_pars_fragment:ax,lights_pars_begin:lx,lights_toon_fragment:ux,lights_toon_pars_fragment:fx,lights_phong_fragment:dx,lights_phong_pars_fragment:hx,lights_physical_fragment:px,lights_physical_pars_fragment:mx,lights_fragment_begin:gx,lights_fragment_maps:_x,lights_fragment_end:vx,logdepthbuf_fragment:xx,logdepthbuf_pars_fragment:bx,logdepthbuf_pars_vertex:yx,logdepthbuf_vertex:Mx,map_fragment:Sx,map_pars_fragment:Ex,map_particle_fragment:wx,map_particle_pars_fragment:Tx,metalnessmap_fragment:Ax,metalnessmap_pars_fragment:Cx,morphcolor_vertex:Lx,morphnormal_vertex:Dx,morphtarget_pars_vertex:Px,morphtarget_vertex:Rx,normal_fragment_begin:Ix,normal_fragment_maps:Ox,normal_pars_fragment:Nx,normal_pars_vertex:Fx,normal_vertex:zx,normalmap_pars_fragment:Ux,clearcoat_normal_fragment_begin:Bx,clearcoat_normal_fragment_maps:kx,clearcoat_pars_fragment:Vx,iridescence_pars_fragment:Gx,output_fragment:Hx,packing:Wx,premultiplied_alpha_fragment:$x,project_vertex:qx,dithering_fragment:jx,dithering_pars_fragment:Xx,roughnessmap_fragment:Yx,roughnessmap_pars_fragment:Kx,shadowmap_pars_fragment:Zx,shadowmap_pars_vertex:Jx,shadowmap_vertex:Qx,shadowmask_pars_fragment:eb,skinbase_vertex:tb,skinning_pars_vertex:nb,skinning_vertex:ib,skinnormal_vertex:rb,specularmap_fragment:sb,specularmap_pars_fragment:ob,tonemapping_fragment:ab,tonemapping_pars_fragment:lb,transmission_fragment:cb,transmission_pars_fragment:ub,uv_pars_fragment:fb,uv_pars_vertex:db,uv_vertex:hb,uv2_pars_fragment:pb,uv2_pars_vertex:mb,uv2_vertex:gb,worldpos_vertex:_b,background_vert:vb,background_frag:xb,backgroundCube_vert:bb,backgroundCube_frag:yb,cube_vert:Mb,cube_frag:Sb,depth_vert:Eb,depth_frag:wb,distanceRGBA_vert:Tb,distanceRGBA_frag:Ab,equirect_vert:Cb,equirect_frag:Lb,linedashed_vert:Db,linedashed_frag:Pb,meshbasic_vert:Rb,meshbasic_frag:Ib,meshlambert_vert:Ob,meshlambert_frag:Nb,meshmatcap_vert:Fb,meshmatcap_frag:zb,meshnormal_vert:Ub,meshnormal_frag:Bb,meshphong_vert:kb,meshphong_frag:Vb,meshphysical_vert:Gb,meshphysical_frag:Hb,meshtoon_vert:Wb,meshtoon_frag:$b,points_vert:qb,points_frag:jb,shadow_vert:Xb,shadow_frag:Yb,sprite_vert:Kb,sprite_frag:Zb},xe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Lt},uv2Transform:{value:new Lt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}}},bn={basic:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new et(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:At([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:At([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new et(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:At([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:At([xe.points,xe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:At([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:At([xe.common,xe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:At([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:At([xe.sprite,xe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:At([xe.common,xe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:At([xe.lights,xe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};bn.physical={uniforms:At([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const ho={r:0,b:0,g:0};function Jb(n,e,t,i,r,s,a){const o=new et(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function _(p,v){let E=!1,b=v.isScene===!0?v.background:null;b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b));const y=n.xr,S=y.getSession&&y.getSession();S&&S.environmentBlendMode==="additive"&&(b=null),b===null?h(o,l):b&&b.isColor&&(h(b,1),E=!0),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Jo)?(u===void 0&&(u=new Mn(new Fs(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Br(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=b.encoding!==Je,(f!==b||d!==b.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,d=b.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Mn(new wc(2,2),new Yi({name:"BackgroundMaterial",uniforms:Br(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=b.encoding!==Je,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,d=b.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function h(p,v){p.getRGB(ho,Vh(n)),i.buffers.color.setClear(ho.r,ho.g,ho.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),l=v,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(o,l)},render:_}}function Qb(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(F,j,X,K,G){let ae=!1;if(a){const oe=h(K,X,j);c!==oe&&(c=oe,m(c.object)),ae=v(F,K,X,G),ae&&E(F,K,X,G)}else{const oe=j.wireframe===!0;(c.geometry!==K.id||c.program!==X.id||c.wireframe!==oe)&&(c.geometry=K.id,c.program=X.id,c.wireframe=oe,ae=!0)}G!==null&&t.update(G,34963),(ae||u)&&(u=!1,x(F,j,X,K),G!==null&&n.bindBuffer(34963,t.get(G).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function h(F,j,X){const K=X.wireframe===!0;let G=o[F.id];G===void 0&&(G={},o[F.id]=G);let ae=G[j.id];ae===void 0&&(ae={},G[j.id]=ae);let oe=ae[K];return oe===void 0&&(oe=p(d()),ae[K]=oe),oe}function p(F){const j=[],X=[],K=[];for(let G=0;G<r;G++)j[G]=0,X[G]=0,K[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:X,attributeDivisors:K,object:F,attributes:{},index:null}}function v(F,j,X,K){const G=c.attributes,ae=j.attributes;let oe=0;const re=X.getAttributes();for(const U in re)if(re[U].location>=0){const me=G[U];let B=ae[U];if(B===void 0&&(U==="instanceMatrix"&&F.instanceMatrix&&(B=F.instanceMatrix),U==="instanceColor"&&F.instanceColor&&(B=F.instanceColor)),me===void 0||me.attribute!==B||B&&me.data!==B.data)return!0;oe++}return c.attributesNum!==oe||c.index!==K}function E(F,j,X,K){const G={},ae=j.attributes;let oe=0;const re=X.getAttributes();for(const U in re)if(re[U].location>=0){let me=ae[U];me===void 0&&(U==="instanceMatrix"&&F.instanceMatrix&&(me=F.instanceMatrix),U==="instanceColor"&&F.instanceColor&&(me=F.instanceColor));const B={};B.attribute=me,me&&me.data&&(B.data=me.data),G[U]=B,oe++}c.attributes=G,c.attributesNum=oe,c.index=K}function b(){const F=c.newAttributes;for(let j=0,X=F.length;j<X;j++)F[j]=0}function y(F){S(F,0)}function S(F,j){const X=c.newAttributes,K=c.enabledAttributes,G=c.attributeDivisors;X[F]=1,K[F]===0&&(n.enableVertexAttribArray(F),K[F]=1),G[F]!==j&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,j),G[F]=j)}function D(){const F=c.newAttributes,j=c.enabledAttributes;for(let X=0,K=j.length;X<K;X++)j[X]!==F[X]&&(n.disableVertexAttribArray(X),j[X]=0)}function R(F,j,X,K,G,ae){i.isWebGL2===!0&&(X===5124||X===5125)?n.vertexAttribIPointer(F,j,X,G,ae):n.vertexAttribPointer(F,j,X,K,G,ae)}function x(F,j,X,K){if(i.isWebGL2===!1&&(F.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const G=K.attributes,ae=X.getAttributes(),oe=j.defaultAttributeValues;for(const re in ae){const U=ae[re];if(U.location>=0){let ce=G[re];if(ce===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(ce=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(ce=F.instanceColor)),ce!==void 0){const me=ce.normalized,B=ce.itemSize,_e=t.get(ce);if(_e===void 0)continue;const be=_e.buffer,ye=_e.type,Me=_e.bytesPerElement;if(ce.isInterleavedBufferAttribute){const Le=ce.data,Pe=Le.stride,A=ce.offset;if(Le.isInstancedInterleavedBuffer){for(let L=0;L<U.locationSize;L++)S(U.location+L,Le.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let L=0;L<U.locationSize;L++)y(U.location+L);n.bindBuffer(34962,be);for(let L=0;L<U.locationSize;L++)R(U.location+L,B/U.locationSize,ye,me,Pe*Me,(A+B/U.locationSize*L)*Me)}else{if(ce.isInstancedBufferAttribute){for(let Le=0;Le<U.locationSize;Le++)S(U.location+Le,ce.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Le=0;Le<U.locationSize;Le++)y(U.location+Le);n.bindBuffer(34962,be);for(let Le=0;Le<U.locationSize;Le++)R(U.location+Le,B/U.locationSize,ye,me,B*Me,B/U.locationSize*Le*Me)}}else if(oe!==void 0){const me=oe[re];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(U.location,me);break;case 3:n.vertexAttrib3fv(U.location,me);break;case 4:n.vertexAttrib4fv(U.location,me);break;default:n.vertexAttrib1fv(U.location,me)}}}}D()}function T(){Y();for(const F in o){const j=o[F];for(const X in j){const K=j[X];for(const G in K)_(K[G].object),delete K[G];delete j[X]}delete o[F]}}function P(F){if(o[F.id]===void 0)return;const j=o[F.id];for(const X in j){const K=j[X];for(const G in K)_(K[G].object),delete K[G];delete j[X]}delete o[F.id]}function $(F){for(const j in o){const X=o[j];if(X[F.id]===void 0)continue;const K=X[F.id];for(const G in K)_(K[G].object),delete K[G];delete X[F.id]}}function Y(){N(),u=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:$,initAttributes:b,enableAttribute:y,disableUnusedAttributes:D}}function ey(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function ty(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),d=n.getParameter(35660),m=n.getParameter(3379),_=n.getParameter(34076),h=n.getParameter(34921),p=n.getParameter(36347),v=n.getParameter(36348),E=n.getParameter(36349),b=d>0,y=a||e.has("OES_texture_float"),S=b&&y,D=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:D}}function ny(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Di,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,v=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const E=s?0:i,b=E*4;let y=v.clippingState||null;l.value=y,y=u(_,d,b,m);for(let S=0;S!==b;++S)y[S]=t[S];v.clippingState=y,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,_){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,_!==!0||p===null){const v=m+h*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<v)&&(p=new Float32Array(v));for(let b=0,y=m;b!==h;++b,y+=4)a.copy(f[b]).applyMatrix4(E,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function iy(n){let e=new WeakMap;function t(a,o){return o===Bl?a.mapping=Fr:o===kl&&(a.mapping=zr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Bl||o===kl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new g0(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ry extends Gh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Er=4,pf=[.125,.215,.35,.446,.526,.582],Ni=20,nl=new ry,mf=new et;let il=null;const Pi=(1+Math.sqrt(5))/2,gr=1/Pi,gf=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Pi,gr),new W(0,Pi,-gr),new W(gr,0,Pi),new W(-gr,0,Pi),new W(Pi,gr,0),new W(-Pi,gr,0)];class _f{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){il=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(il),e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:As,format:cn,encoding:qi,depthBuffer:!1},r=vf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sy(s)),this._blurMaterial=oy(s,e,t)}return r}_compileMaterial(e){const t=new Mn(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,i,r){const o=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(mf),u.toneMapping=Vn,u.autoClear=!1;const m=new Ds({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),_=new Mn(new Fs,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(mf),h=!0);for(let v=0;v<6;v++){const E=v%3;E===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):E===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const b=this._cubeSize;po(r,E*b,v>2?b:0,b,b),u.setRenderTarget(r),h&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fr||e.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;po(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,nl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gf[(r-1)%gf.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Mn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ni-1),h=s/_,p=isFinite(s)?1+Math.floor(u*h):Ni;p>Ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ni}`);const v=[];let E=0;for(let R=0;R<Ni;++R){const x=R/h,T=Math.exp(-x*x/2);v.push(T),R===0?E+=T:R<p&&(E+=2*T)}for(let R=0;R<v.length;R++)v[R]=v[R]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=v,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-i;const y=this._sizeLods[r],S=3*y*(r>b-Er?r-b+Er:0),D=4*(this._cubeSize-y);po(t,S,D,3*y,2*y),l.setRenderTarget(t),l.render(f,nl)}}function sy(n){const e=[],t=[],i=[];let r=n;const s=n-Er+1+pf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Er?l=pf[a-n+Er-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,h=3,p=2,v=1,E=new Float32Array(h*_*m),b=new Float32Array(p*_*m),y=new Float32Array(v*_*m);for(let D=0;D<m;D++){const R=D%3*2/3-1,x=D>2?0:-1,T=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];E.set(T,h*_*D),b.set(d,p*_*D);const P=[D,D,D,D,D,D];y.set(P,v*_*D)}const S=new gi;S.setAttribute("position",new wn(E,h)),S.setAttribute("uv",new wn(b,p)),S.setAttribute("faceIndex",new wn(y,v)),e.push(S),r>Er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vf(n,e,t){const i=new Xi(n,e,t);return i.texture.mapping=Jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function po(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function oy(n,e,t){const i=new Float32Array(Ni),r=new W(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function xf(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function bf(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ay(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Bl||l===kl,u=l===Fr||l===zr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new _f(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new _f(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ly(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cy(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const m=f.morphAttributes;for(const _ in m){const h=m[_];for(let p=0,v=h.length;p<v;p++)e.update(h[p],34962)}}function c(f){const d=[],m=f.index,_=f.attributes.position;let h=0;if(m!==null){const E=m.array;h=m.version;for(let b=0,y=E.length;b<y;b+=3){const S=E[b+0],D=E[b+1],R=E[b+2];d.push(S,D,D,R,R,S)}}else{const E=_.array;h=_.version;for(let b=0,y=E.length/3-1;b<y;b+=3){const S=b+0,D=b+1,R=b+2;d.push(S,D,D,R,R,S)}}const p=new(Ih(d)?kh:Bh)(d,1);p.version=h;const v=s.get(f);v&&e.remove(v),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function uy(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(s,m,o,d*l),t.update(m,s,1)}function f(d,m,_){if(_===0)return;let h,p;if(r)h=n,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,o,d*l,_),t.update(m,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function fy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function dy(n,e){return n[0]-e[0]}function hy(n,e){return Math.abs(e[1])-Math.abs(n[1])}function py(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new pt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=_!==void 0?_.length:0;let p=s.get(u);if(p===void 0||p.count!==h){let j=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",j)};var m=j;p!==void 0&&p.texture.dispose();const b=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let T=0;b===!0&&(T=1),y===!0&&(T=2),S===!0&&(T=3);let P=u.attributes.position.count*T,$=1;P>e.maxTextureSize&&($=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const Y=new Float32Array(P*$*4*h),N=new Fh(Y,P,$,h);N.type=zi,N.needsUpdate=!0;const F=T*4;for(let X=0;X<h;X++){const K=D[X],G=R[X],ae=x[X],oe=P*$*4*X;for(let re=0;re<K.count;re++){const U=re*F;b===!0&&(a.fromBufferAttribute(K,re),Y[oe+U+0]=a.x,Y[oe+U+1]=a.y,Y[oe+U+2]=a.z,Y[oe+U+3]=0),y===!0&&(a.fromBufferAttribute(G,re),Y[oe+U+4]=a.x,Y[oe+U+5]=a.y,Y[oe+U+6]=a.z,Y[oe+U+7]=0),S===!0&&(a.fromBufferAttribute(ae,re),Y[oe+U+8]=a.x,Y[oe+U+9]=a.y,Y[oe+U+10]=a.z,Y[oe+U+11]=ae.itemSize===4?a.w:1)}}p={count:h,texture:N,size:new Ge(P,$)},s.set(u,p),u.addEventListener("dispose",j)}let v=0;for(let b=0;b<d.length;b++)v+=d[b];const E=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=d===void 0?0:d.length;let h=i[u.id];if(h===void 0||h.length!==_){h=[];for(let y=0;y<_;y++)h[y]=[y,0];i[u.id]=h}for(let y=0;y<_;y++){const S=h[y];S[0]=y,S[1]=d[y]}h.sort(hy);for(let y=0;y<8;y++)y<_&&h[y][1]?(o[y][0]=h[y][0],o[y][1]=h[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(dy);const p=u.morphAttributes.position,v=u.morphAttributes.normal;let E=0;for(let y=0;y<8;y++){const S=o[y],D=S[0],R=S[1];D!==Number.MAX_SAFE_INTEGER&&R?(p&&u.getAttribute("morphTarget"+y)!==p[D]&&u.setAttribute("morphTarget"+y,p[D]),v&&u.getAttribute("morphNormal"+y)!==v[D]&&u.setAttribute("morphNormal"+y,v[D]),r[y]=R,E+=R):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),v&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const b=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function my(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const qh=new Dt,jh=new Fh,Xh=new Qv,Yh=new Hh,yf=[],Mf=[],Sf=new Float32Array(16),Ef=new Float32Array(9),wf=new Float32Array(4);function Kr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=yf[r];if(s===void 0&&(s=new Float32Array(r),yf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ta(n,e){let t=Mf[e];t===void 0&&(t=new Int32Array(e),Mf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2fv(this.addr,e),ct(t,e)}}function vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;n.uniform3fv(this.addr,e),ct(t,e)}}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4fv(this.addr,e),ct(t,e)}}function by(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;wf.set(i),n.uniformMatrix2fv(this.addr,!1,wf),ct(t,i)}}function yy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;Ef.set(i),n.uniformMatrix3fv(this.addr,!1,Ef),ct(t,i)}}function My(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;Sf.set(i),n.uniformMatrix4fv(this.addr,!1,Sf),ct(t,i)}}function Sy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ey(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2iv(this.addr,e),ct(t,e)}}function wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;n.uniform3iv(this.addr,e),ct(t,e)}}function Ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4iv(this.addr,e),ct(t,e)}}function Ay(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2uiv(this.addr,e),ct(t,e)}}function Ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;n.uniform3uiv(this.addr,e),ct(t,e)}}function Dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4uiv(this.addr,e),ct(t,e)}}function Py(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||qh,r)}function Ry(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Xh,r)}function Iy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yh,r)}function Oy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||jh,r)}function Ny(n){switch(n){case 5126:return gy;case 35664:return _y;case 35665:return vy;case 35666:return xy;case 35674:return by;case 35675:return yy;case 35676:return My;case 5124:case 35670:return Sy;case 35667:case 35671:return Ey;case 35668:case 35672:return wy;case 35669:case 35673:return Ty;case 5125:return Ay;case 36294:return Cy;case 36295:return Ly;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Ry;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Oy}}function Fy(n,e){n.uniform1fv(this.addr,e)}function zy(n,e){const t=Kr(e,this.size,2);n.uniform2fv(this.addr,t)}function Uy(n,e){const t=Kr(e,this.size,3);n.uniform3fv(this.addr,t)}function By(n,e){const t=Kr(e,this.size,4);n.uniform4fv(this.addr,t)}function ky(n,e){const t=Kr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vy(n,e){const t=Kr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gy(n,e){const t=Kr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hy(n,e){n.uniform1iv(this.addr,e)}function Wy(n,e){n.uniform2iv(this.addr,e)}function $y(n,e){n.uniform3iv(this.addr,e)}function qy(n,e){n.uniform4iv(this.addr,e)}function jy(n,e){n.uniform1uiv(this.addr,e)}function Xy(n,e){n.uniform2uiv(this.addr,e)}function Yy(n,e){n.uniform3uiv(this.addr,e)}function Ky(n,e){n.uniform4uiv(this.addr,e)}function Zy(n,e,t){const i=this.cache,r=e.length,s=ta(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||qh,s[a])}function Jy(n,e,t){const i=this.cache,r=e.length,s=ta(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Xh,s[a])}function Qy(n,e,t){const i=this.cache,r=e.length,s=ta(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Yh,s[a])}function eM(n,e,t){const i=this.cache,r=e.length,s=ta(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||jh,s[a])}function tM(n){switch(n){case 5126:return Fy;case 35664:return zy;case 35665:return Uy;case 35666:return By;case 35674:return ky;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Hy;case 35667:case 35671:return Wy;case 35668:case 35672:return $y;case 35669:case 35673:return qy;case 5125:return jy;case 36294:return Xy;case 36295:return Yy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return eM}}class nM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Ny(t.type)}}class iM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=tM(t.type)}}class rM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const rl=/(\w+)(\])?(\[|\.)?/g;function Tf(n,e){n.seq.push(e),n.map[e.id]=e}function sM(n,e,t){const i=n.name,r=i.length;for(rl.lastIndex=0;;){const s=rl.exec(i),a=rl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Tf(t,c===void 0?new nM(o,n,e):new iM(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new rM(o),Tf(t,f)),t=f}}}class wo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);sM(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Af(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let oM=0;function aM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function lM(n){switch(n){case qi:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Cf(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+aM(n.getShaderSource(e),a)}else return r}function cM(n,e){const t=lM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function uM(n,e){let t;switch(e){case vv:t="Linear";break;case xv:t="Reinhard";break;case bv:t="OptimizedCineon";break;case yv:t="ACESFilmic";break;case Mv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function dM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ps(n){return n!==""}function Lf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(n){return n.replace(pM,mM)}function mM(n,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Wl(t)}const gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pf(n){return n.replace(gM,_M)}function _M(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Th?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===K_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hs&&(e="SHADOWMAP_TYPE_VSM"),e}function xM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fr:case zr:e="ENVMAP_TYPE_CUBE";break;case Jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function yM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lh:e="ENVMAP_BLENDING_MULTIPLY";break;case gv:e="ENVMAP_BLENDING_MIX";break;case _v:e="ENVMAP_BLENDING_ADD";break}return e}function MM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function SM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=vM(t),c=xM(t),u=bM(t),f=yM(t),d=MM(t),m=t.isWebGL2?"":fM(t),_=dM(s),h=r.createProgram();let p,v,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(ps).join(`
`),p.length>0&&(p+=`
`),v=[m,_].filter(ps).join(`
`),v.length>0&&(v+=`
`)):(p=[Rf(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),v=[m,Rf(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Vn?uM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,cM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),a=Wl(a),a=Lf(a,t),a=Df(a,t),o=Wl(o),o=Lf(o,t),o=Df(o,t),a=Pf(a),o=Pf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===Qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=E+p+a,y=E+v+o,S=Af(r,35633,b),D=Af(r,35632,y);if(r.attachShader(h,S),r.attachShader(h,D),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),n.debug.checkShaderErrors){const T=r.getProgramInfoLog(h).trim(),P=r.getShaderInfoLog(S).trim(),$=r.getShaderInfoLog(D).trim();let Y=!0,N=!0;if(r.getProgramParameter(h,35714)===!1){Y=!1;const F=Cf(r,S,"vertex"),j=Cf(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+T+`
`+F+`
`+j)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||$==="")&&(N=!1);N&&(this.diagnostics={runnable:Y,programLog:T,vertexShader:{log:P,prefix:p},fragmentShader:{log:$,prefix:v}})}r.deleteShader(S),r.deleteShader(D);let R;this.getUniforms=function(){return R===void 0&&(R=new wo(r,h)),R};let x;return this.getAttributes=function(){return x===void 0&&(x=hM(r,h)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=oM++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=D,this}let EM=0;class wM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new TM(e),t.set(e,i)),i}}class TM{constructor(e){this.id=EM++,this.code=e,this.usedTimes=0}}function AM(n,e,t,i,r,s,a){const o=new zh,l=new wM,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x,T,P,$,Y){const N=$.fog,F=Y.geometry,j=x.isMeshStandardMaterial?$.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||j),K=X&&X.mapping===Jo?X.image.height:null,G=_[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const ae=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,oe=ae!==void 0?ae.length:0;let re=0;F.morphAttributes.position!==void 0&&(re=1),F.morphAttributes.normal!==void 0&&(re=2),F.morphAttributes.color!==void 0&&(re=3);let U,ce,me,B;if(G){const Pe=bn[G];U=Pe.vertexShader,ce=Pe.fragmentShader}else U=x.vertexShader,ce=x.fragmentShader,l.update(x),me=l.getVertexShaderID(x),B=l.getFragmentShaderID(x);const _e=n.getRenderTarget(),be=x.alphaTest>0,ye=x.clearcoat>0,Me=x.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:x.type,vertexShader:U,fragmentShader:ce,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:B,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:d,outputEncoding:_e===null?n.outputEncoding:_e.isXRRenderTarget===!0?_e.texture.encoding:qi,map:!!x.map,matcap:!!x.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:K,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Gv,tangentSpaceNormalMap:x.normalMapType===Vv,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Je,clearcoat:ye,clearcoatMap:ye&&!!x.clearcoatMap,clearcoatRoughnessMap:ye&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!x.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!x.iridescenceMap,iridescenceThicknessMap:Me&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Pr,alphaMap:!!x.alphaMap,alphaTest:be,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!F.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:x.toneMapped?n.toneMapping:Vn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===si,flipSided:x.side===Ft,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(v(T,x),E(T,x),T.push(n.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function v(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.map&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.lightMap&&o.enable(7),T.aoMap&&o.enable(8),T.emissiveMap&&o.enable(9),T.bumpMap&&o.enable(10),T.normalMap&&o.enable(11),T.objectSpaceNormalMap&&o.enable(12),T.tangentSpaceNormalMap&&o.enable(13),T.clearcoat&&o.enable(14),T.clearcoatMap&&o.enable(15),T.clearcoatRoughnessMap&&o.enable(16),T.clearcoatNormalMap&&o.enable(17),T.iridescence&&o.enable(18),T.iridescenceMap&&o.enable(19),T.iridescenceThicknessMap&&o.enable(20),T.displacementMap&&o.enable(21),T.specularMap&&o.enable(22),T.roughnessMap&&o.enable(23),T.metalnessMap&&o.enable(24),T.gradientMap&&o.enable(25),T.alphaMap&&o.enable(26),T.alphaTest&&o.enable(27),T.vertexColors&&o.enable(28),T.vertexAlphas&&o.enable(29),T.vertexUvs&&o.enable(30),T.vertexTangents&&o.enable(31),T.uvsVertexOnly&&o.enable(32),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.specularIntensityMap&&o.enable(15),T.specularColorMap&&o.enable(16),T.transmission&&o.enable(17),T.transmissionMap&&o.enable(18),T.thicknessMap&&o.enable(19),T.sheen&&o.enable(20),T.sheenColorMap&&o.enable(21),T.sheenRoughnessMap&&o.enable(22),T.decodeVideoTexture&&o.enable(23),T.opaque&&o.enable(24),x.push(o.mask)}function b(x){const T=_[x.type];let P;if(T){const $=bn[T];P=d0.clone($.uniforms)}else P=x.uniforms;return P}function y(x,T){let P;for(let $=0,Y=c.length;$<Y;$++){const N=c[$];if(N.cacheKey===T){P=N,++P.usedTimes;break}}return P===void 0&&(P=new SM(n,T,x,s),c.push(P)),P}function S(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function D(x){l.remove(x)}function R(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:b,acquireProgram:y,releaseProgram:S,releaseShaderCache:D,programs:c,dispose:R}}function CM(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function LM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function If(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Of(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,_,h,p){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:h,group:p},n[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=m,v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=h,v.group=p),e++,v}function o(f,d,m,_,h,p){const v=a(f,d,m,_,h,p);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):t.push(v)}function l(f,d,m,_,h,p){const v=a(f,d,m,_,h,p);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,d){t.length>1&&t.sort(f||LM),i.length>1&&i.sort(d||If),r.length>1&&r.sort(d||If)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function DM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Of,n.set(i,[a])):r>=s.length?(a=new Of,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function PM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new et};break;case"SpotLight":t={position:new W,direction:new W,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function RM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let IM=0;function OM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function NM(n,e){const t=new PM,i=RM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new W);const s=new W,a=new gt,o=new gt;function l(u,f){let d=0,m=0,_=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let h=0,p=0,v=0,E=0,b=0,y=0,S=0,D=0,R=0,x=0;u.sort(OM);const T=f===!0?Math.PI:1;for(let $=0,Y=u.length;$<Y;$++){const N=u[$],F=N.color,j=N.intensity,X=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=F.r*j*T,m+=F.g*j*T,_+=F.b*j*T;else if(N.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(N.sh.coefficients[G],j);else if(N.isDirectionalLight){const G=t.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const ae=N.shadow,oe=i.get(N);oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,r.directionalShadow[h]=oe,r.directionalShadowMap[h]=K,r.directionalShadowMatrix[h]=N.shadow.matrix,y++}r.directional[h]=G,h++}else if(N.isSpotLight){const G=t.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(F).multiplyScalar(j*T),G.distance=X,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,r.spot[v]=G;const ae=N.shadow;if(N.map&&(r.spotLightMap[R]=N.map,R++,ae.updateMatrices(N),N.castShadow&&x++),r.spotLightMatrix[v]=ae.matrix,N.castShadow){const oe=i.get(N);oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,r.spotShadow[v]=oe,r.spotShadowMap[v]=K,D++}v++}else if(N.isRectAreaLight){const G=t.get(N);G.color.copy(F).multiplyScalar(j),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),r.rectArea[E]=G,E++}else if(N.isPointLight){const G=t.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity*T),G.distance=N.distance,G.decay=N.decay,N.castShadow){const ae=N.shadow,oe=i.get(N);oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,oe.shadowCameraNear=ae.camera.near,oe.shadowCameraFar=ae.camera.far,r.pointShadow[p]=oe,r.pointShadowMap[p]=K,r.pointShadowMatrix[p]=N.shadow.matrix,S++}r.point[p]=G,p++}else if(N.isHemisphereLight){const G=t.get(N);G.skyColor.copy(N.color).multiplyScalar(j*T),G.groundColor.copy(N.groundColor).multiplyScalar(j*T),r.hemi[b]=G,b++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=_;const P=r.hash;(P.directionalLength!==h||P.pointLength!==p||P.spotLength!==v||P.rectAreaLength!==E||P.hemiLength!==b||P.numDirectionalShadows!==y||P.numPointShadows!==S||P.numSpotShadows!==D||P.numSpotMaps!==R)&&(r.directional.length=h,r.spot.length=v,r.rectArea.length=E,r.point.length=p,r.hemi.length=b,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=D+R-x,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=x,P.directionalLength=h,P.pointLength=p,P.spotLength=v,P.rectAreaLength=E,P.hemiLength=b,P.numDirectionalShadows=y,P.numPointShadows=S,P.numSpotShadows=D,P.numSpotMaps=R,r.version=IM++)}function c(u,f){let d=0,m=0,_=0,h=0,p=0;const v=f.matrixWorldInverse;for(let E=0,b=u.length;E<b;E++){const y=u[E];if(y.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),d++}else if(y.isSpotLight){const S=r.spot[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),_++}else if(y.isRectAreaLight){const S=r.rectArea[h];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(v),o.identity(),a.copy(y.matrixWorld),a.premultiply(v),o.extractRotation(a),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),h++}else if(y.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(v),m++}else if(y.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:r}}function Nf(n,e){const t=new NM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function FM(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Nf(n,e),t.set(s,[l])):a>=o.length?(l=new Nf(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class zM extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UM extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new W,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const BM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function VM(n,e,t){let i=new Wh;const r=new Ge,s=new Ge,a=new pt,o=new zM({depthPacking:kv}),l=new UM,c={},u=t.maxTextureSize,f={[di]:Ft,[Ft]:di,[si]:si},d=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:BM,fragmentShader:kM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new gi;_.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Mn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Th,this.render=function(y,S,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const R=n.getRenderTarget(),x=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),P=n.state;P.setBlending(ci),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let $=0,Y=y.length;$<Y;$++){const N=y[$],F=N.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const j=F.getFrameExtents();if(r.multiply(j),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,F.mapSize.y=s.y)),F.map===null){const K=this.type!==hs?{minFilter:Ct,magFilter:Ct}:{};F.map=new Xi(r.x,r.y,K),F.map.texture.name=N.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const X=F.getViewportCount();for(let K=0;K<X;K++){const G=F.getViewport(K);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),P.viewport(a),F.updateMatrices(N,K),i=F.getFrustum(),b(S,D,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===hs&&v(F,D),F.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(R,x,T)};function v(y,S){const D=e.update(h);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Xi(r.x,r.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(S,null,D,d,h,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(S,null,D,m,h,null)}function E(y,S,D,R,x,T){let P=null;const $=D.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if($!==void 0)P=$;else if(P=D.isPointLight===!0?l:o,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const Y=P.uuid,N=S.uuid;let F=c[Y];F===void 0&&(F={},c[Y]=F);let j=F[N];j===void 0&&(j=P.clone(),F[N]=j),P=j}return P.visible=S.visible,P.wireframe=S.wireframe,T===hs?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:f[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaTest,P.map=S.map,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,D.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(D.matrixWorld),P.nearDistance=R,P.farDistance=x),P}function b(y,S,D,R,x){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===hs)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,y.matrixWorld);const $=e.update(y),Y=y.material;if(Array.isArray(Y)){const N=$.groups;for(let F=0,j=N.length;F<j;F++){const X=N[F],K=Y[X.materialIndex];if(K&&K.visible){const G=E(y,K,R,D.near,D.far,x);n.renderBufferDirect(D,null,$,G,y,X)}}}else if(Y.visible){const N=E(y,Y,R,D.near,D.far,x);n.renderBufferDirect(D,null,$,N,y,null)}}const P=y.children;for(let $=0,Y=P.length;$<Y;$++)b(P[$],S,D,R,x)}}function GM(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const te=new pt;let pe=null;const we=new pt(0,0,0,0);return{setMask:function(Ae){pe!==Ae&&!I&&(n.colorMask(Ae,Ae,Ae,Ae),pe=Ae)},setLocked:function(Ae){I=Ae},setClear:function(Ae,Ze,ut,St,pn){pn===!0&&(Ae*=St,Ze*=St,ut*=St),te.set(Ae,Ze,ut,St),we.equals(te)===!1&&(n.clearColor(Ae,Ze,ut,St),we.copy(te))},reset:function(){I=!1,pe=null,we.set(-1,0,0,0)}}}function s(){let I=!1,te=null,pe=null,we=null;return{setTest:function(Ae){Ae?be(2929):ye(2929)},setMask:function(Ae){te!==Ae&&!I&&(n.depthMask(Ae),te=Ae)},setFunc:function(Ae){if(pe!==Ae){switch(Ae){case cv:n.depthFunc(512);break;case uv:n.depthFunc(519);break;case fv:n.depthFunc(513);break;case Ul:n.depthFunc(515);break;case dv:n.depthFunc(514);break;case hv:n.depthFunc(518);break;case pv:n.depthFunc(516);break;case mv:n.depthFunc(517);break;default:n.depthFunc(515)}pe=Ae}},setLocked:function(Ae){I=Ae},setClear:function(Ae){we!==Ae&&(n.clearDepth(Ae),we=Ae)},reset:function(){I=!1,te=null,pe=null,we=null}}}function a(){let I=!1,te=null,pe=null,we=null,Ae=null,Ze=null,ut=null,St=null,pn=null;return{setTest:function(nt){I||(nt?be(2960):ye(2960))},setMask:function(nt){te!==nt&&!I&&(n.stencilMask(nt),te=nt)},setFunc:function(nt,Xt,mn){(pe!==nt||we!==Xt||Ae!==mn)&&(n.stencilFunc(nt,Xt,mn),pe=nt,we=Xt,Ae=mn)},setOp:function(nt,Xt,mn){(Ze!==nt||ut!==Xt||St!==mn)&&(n.stencilOp(nt,Xt,mn),Ze=nt,ut=Xt,St=mn)},setLocked:function(nt){I=nt},setClear:function(nt){pn!==nt&&(n.clearStencil(nt),pn=nt)},reset:function(){I=!1,te=null,pe=null,we=null,Ae=null,Ze=null,ut=null,St=null,pn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,h=[],p=null,v=!1,E=null,b=null,y=null,S=null,D=null,R=null,x=null,T=!1,P=null,$=null,Y=null,N=null,F=null;const j=n.getParameter(35661);let X=!1,K=0;const G=n.getParameter(7938);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=K>=2);let ae=null,oe={};const re=n.getParameter(3088),U=n.getParameter(2978),ce=new pt().fromArray(re),me=new pt().fromArray(U);function B(I,te,pe){const we=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(I,Ae),n.texParameteri(I,10241,9728),n.texParameteri(I,10240,9728);for(let Ze=0;Ze<pe;Ze++)n.texImage2D(te+Ze,0,6408,1,1,0,6408,5121,we);return Ae}const _e={};_e[3553]=B(3553,3553,1),_e[34067]=B(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(2929),l.setFunc(Ul),Z(!1),le(Mu),be(2884),H(ci);function be(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function ye(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function Me(I,te){return m[I]!==te?(n.bindFramebuffer(I,te),m[I]=te,i&&(I===36009&&(m[36160]=te),I===36160&&(m[36009]=te)),!0):!1}function Le(I,te){let pe=h,we=!1;if(I)if(pe=_.get(te),pe===void 0&&(pe=[],_.set(te,pe)),I.isWebGLMultipleRenderTargets){const Ae=I.texture;if(pe.length!==Ae.length||pe[0]!==36064){for(let Ze=0,ut=Ae.length;Ze<ut;Ze++)pe[Ze]=36064+Ze;pe.length=Ae.length,we=!0}}else pe[0]!==36064&&(pe[0]=36064,we=!0);else pe[0]!==1029&&(pe[0]=1029,we=!0);we&&(t.isWebGL2?n.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Pe(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const A={[xr]:32774,[J_]:32778,[Q_]:32779};if(i)A[Tu]=32775,A[Au]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(A[Tu]=I.MIN_EXT,A[Au]=I.MAX_EXT)}const L={[ev]:0,[tv]:1,[nv]:768,[Ah]:770,[lv]:776,[ov]:774,[rv]:772,[iv]:769,[Ch]:771,[av]:775,[sv]:773};function H(I,te,pe,we,Ae,Ze,ut,St){if(I===ci){v===!0&&(ye(3042),v=!1);return}if(v===!1&&(be(3042),v=!0),I!==Z_){if(I!==E||St!==T){if((b!==xr||D!==xr)&&(n.blendEquation(32774),b=xr,D=xr),St)switch(I){case Pr:n.blendFuncSeparate(1,771,1,771);break;case Su:n.blendFunc(1,1);break;case Eu:n.blendFuncSeparate(0,769,0,1);break;case wu:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Pr:n.blendFuncSeparate(770,771,1,771);break;case Su:n.blendFunc(770,1);break;case Eu:n.blendFuncSeparate(0,769,0,1);break;case wu:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,S=null,R=null,x=null,E=I,T=St}return}Ae=Ae||te,Ze=Ze||pe,ut=ut||we,(te!==b||Ae!==D)&&(n.blendEquationSeparate(A[te],A[Ae]),b=te,D=Ae),(pe!==y||we!==S||Ze!==R||ut!==x)&&(n.blendFuncSeparate(L[pe],L[we],L[Ze],L[ut]),y=pe,S=we,R=Ze,x=ut),E=I,T=!1}function ee(I,te){I.side===si?ye(2884):be(2884);let pe=I.side===Ft;te&&(pe=!pe),Z(pe),I.blending===Pr&&I.transparent===!1?H(ci):H(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const we=I.stencilWrite;c.setTest(we),we&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),se(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?be(32926):ye(32926)}function Z(I){P!==I&&(I?n.frontFace(2304):n.frontFace(2305),P=I)}function le(I){I!==X_?(be(2884),I!==$&&(I===Mu?n.cullFace(1029):I===Y_?n.cullFace(1028):n.cullFace(1032))):ye(2884),$=I}function he(I){I!==Y&&(X&&n.lineWidth(I),Y=I)}function se(I,te,pe){I?(be(32823),(N!==te||F!==pe)&&(n.polygonOffset(te,pe),N=te,F=pe)):ye(32823)}function fe(I){I?be(3089):ye(3089)}function ie(I){I===void 0&&(I=33984+j-1),ae!==I&&(n.activeTexture(I),ae=I)}function M(I,te,pe){pe===void 0&&(ae===null?pe=33984+j-1:pe=ae);let we=oe[pe];we===void 0&&(we={type:void 0,texture:void 0},oe[pe]=we),(we.type!==I||we.texture!==te)&&(ae!==pe&&(n.activeTexture(pe),ae=pe),n.bindTexture(I,te||_e[I]),we.type=I,we.texture=te)}function g(){const I=oe[ae];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(I){ce.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ce.copy(I))}function Ee(I){me.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),me.copy(I))}function Ie(I,te){let pe=f.get(te);pe===void 0&&(pe=new WeakMap,f.set(te,pe));let we=pe.get(I);we===void 0&&(we=n.getUniformBlockIndex(te,I.name),pe.set(I,we))}function Ve(I,te){const we=f.get(te).get(I);u.get(te)!==we&&(n.uniformBlockBinding(te,we,I.__bindingPointIndex),u.set(te,we))}function Ke(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ae=null,oe={},m={},_=new WeakMap,h=[],p=null,v=!1,E=null,b=null,y=null,S=null,D=null,R=null,x=null,T=!1,P=null,$=null,Y=null,N=null,F=null,ce.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:be,disable:ye,bindFramebuffer:Me,drawBuffers:Le,useProgram:Pe,setBlending:H,setMaterial:ee,setFlipSided:Z,setCullFace:le,setLineWidth:he,setPolygonOffset:se,setScissorTest:fe,activeTexture:ie,bindTexture:M,unbindTexture:g,compressedTexImage2D:O,compressedTexImage3D:q,texImage2D:ve,texImage3D:Te,updateUBOMapping:Ie,uniformBlockBinding:Ve,texStorage2D:z,texStorage3D:Se,texSubImage2D:J,texSubImage3D:ue,compressedTexSubImage2D:ge,compressedTexSubImage3D:C,scissor:Ce,viewport:Ee,reset:Ke}}function HM(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let h;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,g){return v?new OffscreenCanvas(M,g):Ls("canvas")}function b(M,g,O,q){let J=1;if((M.width>q||M.height>q)&&(J=q/Math.max(M.width,M.height)),J<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ue=g?$v:Math.floor,ge=ue(J*M.width),C=ue(J*M.height);h===void 0&&(h=E(ge,C));const z=O?E(ge,C):h;return z.width=ge,z.height=C,z.getContext("2d").drawImage(M,0,0,ge,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ge+"x"+C+")."),z}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function y(M){return tf(M.width)&&tf(M.height)}function S(M){return o?!1:M.wrapS!==ln||M.wrapT!==ln||M.minFilter!==Ct&&M.minFilter!==Ot}function D(M,g){return M.generateMipmaps&&g&&M.minFilter!==Ct&&M.minFilter!==Ot}function R(M){n.generateMipmap(M)}function x(M,g,O,q,J=!1){if(o===!1)return g;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ue=g;return g===6403&&(O===5126&&(ue=33326),O===5131&&(ue=33325),O===5121&&(ue=33321)),g===33319&&(O===5126&&(ue=33328),O===5131&&(ue=33327),O===5121&&(ue=33323)),g===6408&&(O===5126&&(ue=34836),O===5131&&(ue=34842),O===5121&&(ue=q===Je&&J===!1?35907:32856),O===32819&&(ue=32854),O===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function T(M,g,O){return D(M,O)===!0||M.isFramebufferTexture&&M.minFilter!==Ct&&M.minFilter!==Ot?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function P(M){return M===Ct||M===Cu||M===Ca?9728:9729}function $(M){const g=M.target;g.removeEventListener("dispose",$),N(g),g.isVideoTexture&&_.delete(g)}function Y(M){const g=M.target;g.removeEventListener("dispose",Y),j(g)}function N(M){const g=i.get(M);if(g.__webglInit===void 0)return;const O=M.source,q=p.get(O);if(q){const J=q[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(M),Object.keys(q).length===0&&p.delete(O)}i.remove(M)}function F(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const O=M.source,q=p.get(O);delete q[g.__cacheKey],a.memory.textures--}function j(M){const g=M.texture,O=i.get(M),q=i.get(g);if(q.__webglTexture!==void 0&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++)n.deleteFramebuffer(O.__webglFramebuffer[J]),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[J]);else{if(n.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let J=0;J<O.__webglColorRenderbuffer.length;J++)O.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[J]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let J=0,ue=g.length;J<ue;J++){const ge=i.get(g[J]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(g[J])}i.remove(g),i.remove(M)}let X=0;function K(){X=0}function G(){const M=X;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),X+=1,M}function ae(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.encoding),g.join()}function oe(M,g){const O=i.get(M);if(M.isVideoTexture&&fe(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const q=M.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(O,M,g);return}}t.bindTexture(3553,O.__webglTexture,33984+g)}function re(M,g){const O=i.get(M);if(M.version>0&&O.__version!==M.version){ye(O,M,g);return}t.bindTexture(35866,O.__webglTexture,33984+g)}function U(M,g){const O=i.get(M);if(M.version>0&&O.__version!==M.version){ye(O,M,g);return}t.bindTexture(32879,O.__webglTexture,33984+g)}function ce(M,g){const O=i.get(M);if(M.version>0&&O.__version!==M.version){Me(O,M,g);return}t.bindTexture(34067,O.__webglTexture,33984+g)}const me={[Vl]:10497,[ln]:33071,[Gl]:33648},B={[Ct]:9728,[Cu]:9984,[Ca]:9986,[Ot]:9729,[Sv]:9985,[Ts]:9987};function _e(M,g,O){if(O?(n.texParameteri(M,10242,me[g.wrapS]),n.texParameteri(M,10243,me[g.wrapT]),(M===32879||M===35866)&&n.texParameteri(M,32882,me[g.wrapR]),n.texParameteri(M,10240,B[g.magFilter]),n.texParameteri(M,10241,B[g.minFilter])):(n.texParameteri(M,10242,33071),n.texParameteri(M,10243,33071),(M===32879||M===35866)&&n.texParameteri(M,32882,33071),(g.wrapS!==ln||g.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,10240,P(g.magFilter)),n.texParameteri(M,10241,P(g.minFilter)),g.minFilter!==Ct&&g.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Ct||g.minFilter!==Ca&&g.minFilter!==Ts||g.type===zi&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===As&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(M,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function be(M,g){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",$));const q=g.source;let J=p.get(q);J===void 0&&(J={},p.set(q,J));const ue=ae(g);if(ue!==M.__cacheKey){J[ue]===void 0&&(J[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[ue].usedTimes++;const ge=J[M.__cacheKey];ge!==void 0&&(J[M.__cacheKey].usedTimes--,ge.usedTimes===0&&F(g)),M.__cacheKey=ue,M.__webglTexture=J[ue].texture}return O}function ye(M,g,O){let q=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=35866),g.isData3DTexture&&(q=32879);const J=be(M,g),ue=g.source;t.bindTexture(q,M.__webglTexture,33984+O);const ge=i.get(ue);if(ue.version!==ge.__version||J===!0){t.activeTexture(33984+O),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const C=S(g)&&y(g.image)===!1;let z=b(g.image,C,!1,u);z=ie(g,z);const Se=y(z)||o,ve=s.convert(g.format,g.encoding);let Te=s.convert(g.type),Ce=x(g.internalFormat,ve,Te,g.encoding,g.isVideoTexture);_e(q,g,Se);let Ee;const Ie=g.mipmaps,Ve=o&&g.isVideoTexture!==!0,Ke=ge.__version===void 0||J===!0,I=T(g,z,Se);if(g.isDepthTexture)Ce=6402,o?g.type===zi?Ce=36012:g.type===Fi?Ce=33190:g.type===Rr?Ce=35056:Ce=33189:g.type===zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Hi&&Ce===6402&&g.type!==Ph&&g.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Fi,Te=s.convert(g.type)),g.format===Ur&&Ce===6402&&(Ce=34041,g.type!==Rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Rr,Te=s.convert(g.type))),Ke&&(Ve?t.texStorage2D(3553,1,Ce,z.width,z.height):t.texImage2D(3553,0,Ce,z.width,z.height,0,ve,Te,null));else if(g.isDataTexture)if(Ie.length>0&&Se){Ve&&Ke&&t.texStorage2D(3553,I,Ce,Ie[0].width,Ie[0].height);for(let te=0,pe=Ie.length;te<pe;te++)Ee=Ie[te],Ve?t.texSubImage2D(3553,te,0,0,Ee.width,Ee.height,ve,Te,Ee.data):t.texImage2D(3553,te,Ce,Ee.width,Ee.height,0,ve,Te,Ee.data);g.generateMipmaps=!1}else Ve?(Ke&&t.texStorage2D(3553,I,Ce,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,ve,Te,z.data)):t.texImage2D(3553,0,Ce,z.width,z.height,0,ve,Te,z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ve&&Ke&&t.texStorage3D(35866,I,Ce,Ie[0].width,Ie[0].height,z.depth);for(let te=0,pe=Ie.length;te<pe;te++)Ee=Ie[te],g.format!==cn?ve!==null?Ve?t.compressedTexSubImage3D(35866,te,0,0,0,Ee.width,Ee.height,z.depth,ve,Ee.data,0,0):t.compressedTexImage3D(35866,te,Ce,Ee.width,Ee.height,z.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(35866,te,0,0,0,Ee.width,Ee.height,z.depth,ve,Te,Ee.data):t.texImage3D(35866,te,Ce,Ee.width,Ee.height,z.depth,0,ve,Te,Ee.data)}else{Ve&&Ke&&t.texStorage2D(3553,I,Ce,Ie[0].width,Ie[0].height);for(let te=0,pe=Ie.length;te<pe;te++)Ee=Ie[te],g.format!==cn?ve!==null?Ve?t.compressedTexSubImage2D(3553,te,0,0,Ee.width,Ee.height,ve,Ee.data):t.compressedTexImage2D(3553,te,Ce,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(3553,te,0,0,Ee.width,Ee.height,ve,Te,Ee.data):t.texImage2D(3553,te,Ce,Ee.width,Ee.height,0,ve,Te,Ee.data)}else if(g.isDataArrayTexture)Ve?(Ke&&t.texStorage3D(35866,I,Ce,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,ve,Te,z.data)):t.texImage3D(35866,0,Ce,z.width,z.height,z.depth,0,ve,Te,z.data);else if(g.isData3DTexture)Ve?(Ke&&t.texStorage3D(32879,I,Ce,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,ve,Te,z.data)):t.texImage3D(32879,0,Ce,z.width,z.height,z.depth,0,ve,Te,z.data);else if(g.isFramebufferTexture){if(Ke)if(Ve)t.texStorage2D(3553,I,Ce,z.width,z.height);else{let te=z.width,pe=z.height;for(let we=0;we<I;we++)t.texImage2D(3553,we,Ce,te,pe,0,ve,Te,null),te>>=1,pe>>=1}}else if(Ie.length>0&&Se){Ve&&Ke&&t.texStorage2D(3553,I,Ce,Ie[0].width,Ie[0].height);for(let te=0,pe=Ie.length;te<pe;te++)Ee=Ie[te],Ve?t.texSubImage2D(3553,te,0,0,ve,Te,Ee):t.texImage2D(3553,te,Ce,ve,Te,Ee);g.generateMipmaps=!1}else Ve?(Ke&&t.texStorage2D(3553,I,Ce,z.width,z.height),t.texSubImage2D(3553,0,0,0,ve,Te,z)):t.texImage2D(3553,0,Ce,ve,Te,z);D(g,Se)&&R(q),ge.__version=ue.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Me(M,g,O){if(g.image.length!==6)return;const q=be(M,g),J=g.source;t.bindTexture(34067,M.__webglTexture,33984+O);const ue=i.get(J);if(J.version!==ue.__version||q===!0){t.activeTexture(33984+O),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const ge=g.isCompressedTexture||g.image[0].isCompressedTexture,C=g.image[0]&&g.image[0].isDataTexture,z=[];for(let te=0;te<6;te++)!ge&&!C?z[te]=b(g.image[te],!1,!0,c):z[te]=C?g.image[te].image:g.image[te],z[te]=ie(g,z[te]);const Se=z[0],ve=y(Se)||o,Te=s.convert(g.format,g.encoding),Ce=s.convert(g.type),Ee=x(g.internalFormat,Te,Ce,g.encoding),Ie=o&&g.isVideoTexture!==!0,Ve=ue.__version===void 0||q===!0;let Ke=T(g,Se,ve);_e(34067,g,ve);let I;if(ge){Ie&&Ve&&t.texStorage2D(34067,Ke,Ee,Se.width,Se.height);for(let te=0;te<6;te++){I=z[te].mipmaps;for(let pe=0;pe<I.length;pe++){const we=I[pe];g.format!==cn?Te!==null?Ie?t.compressedTexSubImage2D(34069+te,pe,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(34069+te,pe,Ee,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+te,pe,0,0,we.width,we.height,Te,Ce,we.data):t.texImage2D(34069+te,pe,Ee,we.width,we.height,0,Te,Ce,we.data)}}}else{I=g.mipmaps,Ie&&Ve&&(I.length>0&&Ke++,t.texStorage2D(34067,Ke,Ee,z[0].width,z[0].height));for(let te=0;te<6;te++)if(C){Ie?t.texSubImage2D(34069+te,0,0,0,z[te].width,z[te].height,Te,Ce,z[te].data):t.texImage2D(34069+te,0,Ee,z[te].width,z[te].height,0,Te,Ce,z[te].data);for(let pe=0;pe<I.length;pe++){const Ae=I[pe].image[te].image;Ie?t.texSubImage2D(34069+te,pe+1,0,0,Ae.width,Ae.height,Te,Ce,Ae.data):t.texImage2D(34069+te,pe+1,Ee,Ae.width,Ae.height,0,Te,Ce,Ae.data)}}else{Ie?t.texSubImage2D(34069+te,0,0,0,Te,Ce,z[te]):t.texImage2D(34069+te,0,Ee,Te,Ce,z[te]);for(let pe=0;pe<I.length;pe++){const we=I[pe];Ie?t.texSubImage2D(34069+te,pe+1,0,0,Te,Ce,we.image[te]):t.texImage2D(34069+te,pe+1,Ee,Te,Ce,we.image[te])}}}D(g,ve)&&R(34067),ue.__version=J.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Le(M,g,O,q,J){const ue=s.convert(O.format,O.encoding),ge=s.convert(O.type),C=x(O.internalFormat,ue,ge,O.encoding);i.get(g).__hasExternalTextures||(J===32879||J===35866?t.texImage3D(J,0,C,g.width,g.height,g.depth,0,ue,ge,null):t.texImage2D(J,0,C,g.width,g.height,0,ue,ge,null)),t.bindFramebuffer(36160,M),se(g)?d.framebufferTexture2DMultisampleEXT(36160,q,J,i.get(O).__webglTexture,0,he(g)):(J===3553||J>=34069&&J<=34074)&&n.framebufferTexture2D(36160,q,J,i.get(O).__webglTexture,0),t.bindFramebuffer(36160,null)}function Pe(M,g,O){if(n.bindRenderbuffer(36161,M),g.depthBuffer&&!g.stencilBuffer){let q=33189;if(O||se(g)){const J=g.depthTexture;J&&J.isDepthTexture&&(J.type===zi?q=36012:J.type===Fi&&(q=33190));const ue=he(g);se(g)?d.renderbufferStorageMultisampleEXT(36161,ue,q,g.width,g.height):n.renderbufferStorageMultisample(36161,ue,q,g.width,g.height)}else n.renderbufferStorage(36161,q,g.width,g.height);n.framebufferRenderbuffer(36160,36096,36161,M)}else if(g.depthBuffer&&g.stencilBuffer){const q=he(g);O&&se(g)===!1?n.renderbufferStorageMultisample(36161,q,35056,g.width,g.height):se(g)?d.renderbufferStorageMultisampleEXT(36161,q,35056,g.width,g.height):n.renderbufferStorage(36161,34041,g.width,g.height),n.framebufferRenderbuffer(36160,33306,36161,M)}else{const q=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let J=0;J<q.length;J++){const ue=q[J],ge=s.convert(ue.format,ue.encoding),C=s.convert(ue.type),z=x(ue.internalFormat,ge,C,ue.encoding),Se=he(g);O&&se(g)===!1?n.renderbufferStorageMultisample(36161,Se,z,g.width,g.height):se(g)?d.renderbufferStorageMultisampleEXT(36161,Se,z,g.width,g.height):n.renderbufferStorage(36161,z,g.width,g.height)}}n.bindRenderbuffer(36161,null)}function A(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),oe(g.depthTexture,0);const q=i.get(g.depthTexture).__webglTexture,J=he(g);if(g.depthTexture.format===Hi)se(g)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,q,0,J):n.framebufferTexture2D(36160,36096,3553,q,0);else if(g.depthTexture.format===Ur)se(g)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,q,0,J):n.framebufferTexture2D(36160,33306,3553,q,0);else throw new Error("Unknown depthTexture format")}function L(M){const g=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");A(g.__webglFramebuffer,M)}else if(O){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(36160,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]=n.createRenderbuffer(),Pe(g.__webglDepthbuffer[q],M,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Pe(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function H(M,g,O){const q=i.get(M);g!==void 0&&Le(q.__webglFramebuffer,M,M.texture,36064,3553),O!==void 0&&L(M)}function ee(M){const g=M.texture,O=i.get(M),q=i.get(g);M.addEventListener("dispose",Y),M.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=g.version,a.memory.textures++);const J=M.isWebGLCubeRenderTarget===!0,ue=M.isWebGLMultipleRenderTargets===!0,ge=y(M)||o;if(J){O.__webglFramebuffer=[];for(let C=0;C<6;C++)O.__webglFramebuffer[C]=n.createFramebuffer()}else{if(O.__webglFramebuffer=n.createFramebuffer(),ue)if(r.drawBuffers){const C=M.texture;for(let z=0,Se=C.length;z<Se;z++){const ve=i.get(C[z]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&se(M)===!1){const C=ue?g:[g];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer);for(let z=0;z<C.length;z++){const Se=C[z];O.__webglColorRenderbuffer[z]=n.createRenderbuffer(),n.bindRenderbuffer(36161,O.__webglColorRenderbuffer[z]);const ve=s.convert(Se.format,Se.encoding),Te=s.convert(Se.type),Ce=x(Se.internalFormat,ve,Te,Se.encoding,M.isXRRenderTarget===!0),Ee=he(M);n.renderbufferStorageMultisample(36161,Ee,Ce,M.width,M.height),n.framebufferRenderbuffer(36160,36064+z,36161,O.__webglColorRenderbuffer[z])}n.bindRenderbuffer(36161,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(J){t.bindTexture(34067,q.__webglTexture),_e(34067,g,ge);for(let C=0;C<6;C++)Le(O.__webglFramebuffer[C],M,g,36064,34069+C);D(g,ge)&&R(34067),t.unbindTexture()}else if(ue){const C=M.texture;for(let z=0,Se=C.length;z<Se;z++){const ve=C[z],Te=i.get(ve);t.bindTexture(3553,Te.__webglTexture),_e(3553,ve,ge),Le(O.__webglFramebuffer,M,ve,36064+z,3553),D(ve,ge)&&R(3553)}t.unbindTexture()}else{let C=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?C=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,q.__webglTexture),_e(C,g,ge),Le(O.__webglFramebuffer,M,g,36064,C),D(g,ge)&&R(C),t.unbindTexture()}M.depthBuffer&&L(M)}function Z(M){const g=y(M)||o,O=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let q=0,J=O.length;q<J;q++){const ue=O[q];if(D(ue,g)){const ge=M.isWebGLCubeRenderTarget?34067:3553,C=i.get(ue).__webglTexture;t.bindTexture(ge,C),R(ge),t.unbindTexture()}}}function le(M){if(o&&M.samples>0&&se(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],O=M.width,q=M.height;let J=16384;const ue=[],ge=M.stencilBuffer?33306:36096,C=i.get(M),z=M.isWebGLMultipleRenderTargets===!0;if(z)for(let Se=0;Se<g.length;Se++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let Se=0;Se<g.length;Se++){ue.push(36064+Se),M.depthBuffer&&ue.push(ge);const ve=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(ve===!1&&(M.depthBuffer&&(J|=256),M.stencilBuffer&&(J|=1024)),z&&n.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[Se]),ve===!0&&(n.invalidateFramebuffer(36008,[ge]),n.invalidateFramebuffer(36009,[ge])),z){const Te=i.get(g[Se]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Te,0)}n.blitFramebuffer(0,0,O,q,0,0,O,q,J,9728),m&&n.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let Se=0;Se<g.length;Se++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Se,36161,C.__webglColorRenderbuffer[Se]);const ve=i.get(g[Se]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Se,3553,ve,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function he(M){return Math.min(f,M.samples)}function se(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function fe(M){const g=a.render.frame;_.get(M)!==g&&(_.set(M,g),M.update())}function ie(M,g){const O=M.encoding,q=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Hl||O!==qi&&(O===Je?o===!1?e.has("EXT_sRGB")===!0&&q===cn?(M.format=Hl,M.minFilter=Ot,M.generateMipmaps=!1):g=Oh.sRGBToLinear(g):(q!==cn||J!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",O)),g}this.allocateTextureUnit=G,this.resetTextureUnits=K,this.setTexture2D=oe,this.setTexture2DArray=re,this.setTexture3D=U,this.setTextureCube=ce,this.rebindTextures=H,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=se}function WM(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===$i)return 5121;if(s===Av)return 32819;if(s===Cv)return 32820;if(s===Ev)return 5120;if(s===wv)return 5122;if(s===Ph)return 5123;if(s===Tv)return 5124;if(s===Fi)return 5125;if(s===zi)return 5126;if(s===As)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Lv)return 6406;if(s===cn)return 6408;if(s===Dv)return 6409;if(s===Pv)return 6410;if(s===Hi)return 6402;if(s===Ur)return 34041;if(s===Hl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Rv)return 6403;if(s===Iv)return 36244;if(s===Ov)return 33319;if(s===Nv)return 33320;if(s===Fv)return 36249;if(s===La||s===Da||s===Pa||s===Ra)if(a===Je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===La)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===La)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Da)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ra)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lu||s===Du||s===Pu||s===Ru)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Lu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Du)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ru)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Iu||s===Ou)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Iu)return a===Je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ou)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Nu||s===Fu||s===zu||s===Uu||s===Bu||s===ku||s===Vu||s===Gu||s===Hu||s===Wu||s===$u||s===qu||s===ju||s===Xu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Nu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Uu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ku)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$u)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ju)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ia)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ia)return a===Je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Uv||s===Yu||s===Ku||s===Zu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ia)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Yu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ku)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Rr?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class $M extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mo extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qM={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,i),v=this._getHandJoint(c,h);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class jM extends Dt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Hi,u!==Hi&&u!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hi&&(i=Fi),i===void 0&&u===Ur&&(i=Rr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1}}class XM extends Ji{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,_=null;const h=t.getContextAttributes();let p=null,v=null;const E=[],b=[],y=new Set,S=new Map,D=new Wt;D.layers.enable(1),D.viewport=new pt;const R=new Wt;R.layers.enable(2),R.viewport=new pt;const x=[D,R],T=new $M;T.layers.enable(1),T.layers.enable(2);let P=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let ce=E[U];return ce===void 0&&(ce=new sl,E[U]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(U){let ce=E[U];return ce===void 0&&(ce=new sl,E[U]=ce),ce.getGripSpace()},this.getHand=function(U){let ce=E[U];return ce===void 0&&(ce=new sl,E[U]=ce),ce.getHandSpace()};function Y(U){const ce=b.indexOf(U.inputSource);if(ce===-1)return;const me=E[ce];me!==void 0&&me.dispatchEvent({type:U.type,data:U.inputSource})}function N(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",F);for(let U=0;U<E.length;U++){const ce=b[U];ce!==null&&(b[U]=null,E[U].disconnect(ce))}P=null,$=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,v=null,re.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",N),r.addEventListener("inputsourceschange",F),h.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:m}),v=new Xi(m.framebufferWidth,m.framebufferHeight,{format:cn,type:$i,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let ce=null,me=null,B=null;h.depth&&(B=h.stencil?35056:33190,ce=h.stencil?Ur:Hi,me=h.stencil?Rr:Fi);const _e={colorFormat:32856,depthFormat:B,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(_e),r.updateRenderState({layers:[d]}),v=new Xi(d.textureWidth,d.textureHeight,{format:cn,type:$i,depthTexture:new jM(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const be=e.properties.get(v);be.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(U){for(let ce=0;ce<U.removed.length;ce++){const me=U.removed[ce],B=b.indexOf(me);B>=0&&(b[B]=null,E[B].disconnect(me))}for(let ce=0;ce<U.added.length;ce++){const me=U.added[ce];let B=b.indexOf(me);if(B===-1){for(let be=0;be<E.length;be++)if(be>=b.length){b.push(me),B=be;break}else if(b[be]===null){b[be]=me,B=be;break}if(B===-1)break}const _e=E[B];_e&&_e.connect(me)}}const j=new W,X=new W;function K(U,ce,me){j.setFromMatrixPosition(ce.matrixWorld),X.setFromMatrixPosition(me.matrixWorld);const B=j.distanceTo(X),_e=ce.projectionMatrix.elements,be=me.projectionMatrix.elements,ye=_e[14]/(_e[10]-1),Me=_e[14]/(_e[10]+1),Le=(_e[9]+1)/_e[5],Pe=(_e[9]-1)/_e[5],A=(_e[8]-1)/_e[0],L=(be[8]+1)/be[0],H=ye*A,ee=ye*L,Z=B/(-A+L),le=Z*-A;ce.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(le),U.translateZ(Z),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const he=ye+Z,se=Me+Z,fe=H-le,ie=ee+(B-le),M=Le*Me/se*he,g=Pe*Me/se*he;U.projectionMatrix.makePerspective(fe,ie,M,g,he,se)}function G(U,ce){ce===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(ce.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;T.near=R.near=D.near=U.near,T.far=R.far=D.far=U.far,(P!==T.near||$!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,$=T.far);const ce=U.parent,me=T.cameras;G(T,ce);for(let _e=0;_e<me.length;_e++)G(me[_e],ce);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),U.matrix.copy(T.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const B=U.children;for(let _e=0,be=B.length;_e<be;_e++)B[_e].updateMatrixWorld(!0);me.length===2?K(T,D,R):T.projectionMatrix.copy(D.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)},this.getPlanes=function(){return y};let ae=null;function oe(U,ce){if(u=ce.getViewerPose(c||a),_=ce,u!==null){const me=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let B=!1;me.length!==T.cameras.length&&(T.cameras.length=0,B=!0);for(let _e=0;_e<me.length;_e++){const be=me[_e];let ye=null;if(m!==null)ye=m.getViewport(be);else{const Le=f.getViewSubImage(d,be);ye=Le.viewport,_e===0&&(e.setRenderTargetTextures(v,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(v))}let Me=x[_e];Me===void 0&&(Me=new Wt,Me.layers.enable(_e),Me.viewport=new pt,x[_e]=Me),Me.matrix.fromArray(be.transform.matrix),Me.projectionMatrix.fromArray(be.projectionMatrix),Me.viewport.set(ye.x,ye.y,ye.width,ye.height),_e===0&&T.matrix.copy(Me.matrix),B===!0&&T.cameras.push(Me)}}for(let me=0;me<E.length;me++){const B=b[me],_e=E[me];B!==null&&_e!==void 0&&_e.update(B,ce,c||a)}if(ae&&ae(U,ce),ce.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ce.detectedPlanes});let me=null;for(const B of y)ce.detectedPlanes.has(B)||(me===null&&(me=[]),me.push(B));if(me!==null)for(const B of me)y.delete(B),S.delete(B),i.dispatchEvent({type:"planeremoved",data:B});for(const B of ce.detectedPlanes)if(!y.has(B))y.add(B),S.set(B,ce.lastChangedTime),i.dispatchEvent({type:"planeadded",data:B});else{const _e=S.get(B);B.lastChangedTime>_e&&(S.set(B,B.lastChangedTime),i.dispatchEvent({type:"planechanged",data:B}))}}_=null}const re=new $h;re.setAnimationLoop(oe),this.setAnimationLoop=function(U){ae=U},this.dispose=function(){}}}function YM(n,e){function t(h,p){p.color.getRGB(h.fogColor.value,Vh(n)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,v,E,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),u(h,p)):p.isMeshPhongMaterial?(r(h,p),c(h,p)):p.isMeshStandardMaterial?(r(h,p),f(h,p),p.isMeshPhysicalMaterial&&d(h,p,b)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),_(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&a(h,p)):p.isPointsMaterial?o(h,p,v,E):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===Ft&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===Ft&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(h.envMap.value=v,h.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const y=n.useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let E;p.map?E=p.map:p.specularMap?E=p.specularMap:p.displacementMap?E=p.displacementMap:p.normalMap?E=p.normalMap:p.bumpMap?E=p.bumpMap:p.roughnessMap?E=p.roughnessMap:p.metalnessMap?E=p.metalnessMap:p.alphaMap?E=p.alphaMap:p.emissiveMap?E=p.emissiveMap:p.clearcoatMap?E=p.clearcoatMap:p.clearcoatNormalMap?E=p.clearcoatNormalMap:p.clearcoatRoughnessMap?E=p.clearcoatRoughnessMap:p.iridescenceMap?E=p.iridescenceMap:p.iridescenceThicknessMap?E=p.iridescenceThicknessMap:p.specularIntensityMap?E=p.specularIntensityMap:p.specularColorMap?E=p.specularColorMap:p.transmissionMap?E=p.transmissionMap:p.thicknessMap?E=p.thicknessMap:p.sheenColorMap?E=p.sheenColorMap:p.sheenRoughnessMap&&(E=p.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),h.uvTransform.value.copy(E.matrix));let b;p.aoMap?b=p.aoMap:p.lightMap&&(b=p.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),h.uv2Transform.value.copy(b.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function a(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function o(h,p,v,E){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*v,h.scale.value=E*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),h.uvTransform.value.copy(b.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix))}function c(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function d(h,p,v){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ft&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=v.texture,h.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function _(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function KM(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(E,b){const y=b.program;i.uniformBlockBinding(E,y)}function c(E,b){let y=r[E.id];y===void 0&&(_(E),y=u(E),r[E.id]=y,E.addEventListener("dispose",p));const S=b.program;i.updateUBOMapping(E,S);const D=e.render.frame;s[E.id]!==D&&(d(E),s[E.id]=D)}function u(E){const b=f();E.__bindingPointIndex=b;const y=n.createBuffer(),S=E.__size,D=E.usage;return n.bindBuffer(35345,y),n.bufferData(35345,S,D),n.bindBuffer(35345,null),n.bindBufferBase(35345,b,y),y}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=r[E.id],y=E.uniforms,S=E.__cache;n.bindBuffer(35345,b);for(let D=0,R=y.length;D<R;D++){const x=y[D];if(m(x,D,S)===!0){const T=x.__offset,P=Array.isArray(x.value)?x.value:[x.value];let $=0;for(let Y=0;Y<P.length;Y++){const N=P[Y],F=h(N);typeof N=="number"?(x.__data[0]=N,n.bufferSubData(35345,T+$,x.__data)):N.isMatrix3?(x.__data[0]=N.elements[0],x.__data[1]=N.elements[1],x.__data[2]=N.elements[2],x.__data[3]=N.elements[0],x.__data[4]=N.elements[3],x.__data[5]=N.elements[4],x.__data[6]=N.elements[5],x.__data[7]=N.elements[0],x.__data[8]=N.elements[6],x.__data[9]=N.elements[7],x.__data[10]=N.elements[8],x.__data[11]=N.elements[0]):(N.toArray(x.__data,$),$+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,T,x.__data)}}n.bindBuffer(35345,null)}function m(E,b,y){const S=E.value;if(y[b]===void 0){if(typeof S=="number")y[b]=S;else{const D=Array.isArray(S)?S:[S],R=[];for(let x=0;x<D.length;x++)R.push(D[x].clone());y[b]=R}return!0}else if(typeof S=="number"){if(y[b]!==S)return y[b]=S,!0}else{const D=Array.isArray(y[b])?y[b]:[y[b]],R=Array.isArray(S)?S:[S];for(let x=0;x<D.length;x++){const T=D[x];if(T.equals(R[x])===!1)return T.copy(R[x]),!0}}return!1}function _(E){const b=E.uniforms;let y=0;const S=16;let D=0;for(let R=0,x=b.length;R<x;R++){const T=b[R],P={boundary:0,storage:0},$=Array.isArray(T.value)?T.value:[T.value];for(let Y=0,N=$.length;Y<N;Y++){const F=$[Y],j=h(F);P.boundary+=j.boundary,P.storage+=j.storage}if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,R>0){D=y%S;const Y=S-D;D!==0&&Y-P.boundary<0&&(y+=S-D,T.__offset=y)}y+=P.storage}return D=y%S,D>0&&(y+=S-D),E.__size=y,E.__cache={},this}function h(E){const b={boundary:0,storage:0};return typeof E=="number"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function p(E){const b=E.target;b.removeEventListener("dispose",p);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function v(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:v}}function ZM(){const n=Ls("canvas");return n.style.display="block",n}function na(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:ZM(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,d=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=qi,this.useLegacyLights=!0,this.toneMapping=Vn,this.toneMappingExposure=1;const h=this;let p=!1,v=0,E=0,b=null,y=-1,S=null;const D=new pt,R=new pt;let x=null,T=e.width,P=e.height,$=1,Y=null,N=null;const F=new pt(0,0,T,P),j=new pt(0,0,T,P);let X=!1;const K=new Wh;let G=!1,ae=!1,oe=null;const re=new gt,U=new W,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return b===null?$:1}let B=t;function _e(w,V){for(let Q=0;Q<w.length;Q++){const k=w[Q],ne=e.getContext(k,V);if(ne!==null)return ne}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sc}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",Ce,!1),e.addEventListener("webglcontextcreationerror",Ee,!1),B===null){const V=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&V.shift(),B=_e(V,w),B===null)throw _e(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let be,ye,Me,Le,Pe,A,L,H,ee,Z,le,he,se,fe,ie,M,g,O,q,J,ue,ge,C,z;function Se(){be=new ly(B),ye=new ty(B,be,n),be.init(ye),ge=new WM(B,be,ye),Me=new GM(B,be,ye),Le=new fy,Pe=new CM,A=new HM(B,be,Me,Pe,ye,ge,Le),L=new iy(h),H=new ay(h),ee=new x0(B,ye),C=new Qb(B,be,ee,ye),Z=new cy(B,ee,Le,C),le=new my(B,Z,ee,Le),q=new py(B,ye,A),M=new ny(Pe),he=new AM(h,L,H,be,ye,C,M),se=new YM(h,Pe),fe=new DM,ie=new FM(be,ye),O=new Jb(h,L,H,Me,le,u,a),g=new VM(h,le,ye),z=new KM(B,Le,ye,Me),J=new ey(B,be,Le,ye),ue=new uy(B,be,Le,ye),Le.programs=he.programs,h.capabilities=ye,h.extensions=be,h.properties=Pe,h.renderLists=fe,h.shadowMap=g,h.state=Me,h.info=Le}Se();const ve=new XM(h,B);this.xr=ve,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(T,P,!1))},this.getSize=function(w){return w.set(T,P)},this.setSize=function(w,V,Q=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=w,P=V,e.width=Math.floor(w*$),e.height=Math.floor(V*$),Q===!0&&(e.style.width=w+"px",e.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(T*$,P*$).floor()},this.setDrawingBufferSize=function(w,V,Q){T=w,P=V,$=Q,e.width=Math.floor(w*Q),e.height=Math.floor(V*Q),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(F)},this.setViewport=function(w,V,Q,k){w.isVector4?F.set(w.x,w.y,w.z,w.w):F.set(w,V,Q,k),Me.viewport(D.copy(F).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(j)},this.setScissor=function(w,V,Q,k){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,V,Q,k),Me.scissor(R.copy(j).multiplyScalar($).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(w){Me.setScissorTest(X=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor.apply(O,arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha.apply(O,arguments)},this.clear=function(w=!0,V=!0,Q=!0){let k=0;w&&(k|=16384),V&&(k|=256),Q&&(k|=1024),B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Ce,!1),e.removeEventListener("webglcontextcreationerror",Ee,!1),fe.dispose(),ie.dispose(),Pe.dispose(),L.dispose(),H.dispose(),le.dispose(),C.dispose(),z.dispose(),he.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",pe),ve.removeEventListener("sessionend",we),oe&&(oe.dispose(),oe=null),Ae.stop()};function Te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const w=Le.autoReset,V=g.enabled,Q=g.autoUpdate,k=g.needsUpdate,ne=g.type;Se(),Le.autoReset=w,g.enabled=V,g.autoUpdate=Q,g.needsUpdate=k,g.type=ne}function Ee(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ie(w){const V=w.target;V.removeEventListener("dispose",Ie),Ve(V)}function Ve(w){Ke(w),Pe.remove(w)}function Ke(w){const V=Pe.get(w).programs;V!==void 0&&(V.forEach(function(Q){he.releaseProgram(Q)}),w.isShaderMaterial&&he.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,Q,k,ne,De){V===null&&(V=ce);const Oe=ne.isMesh&&ne.matrixWorld.determinant()<0,Be=em(w,V,Q,k,ne);Me.setMaterial(k,Oe);let ke=Q.index,Xe=1;k.wireframe===!0&&(ke=Z.getWireframeAttribute(Q),Xe=2);const He=Q.drawRange,We=Q.attributes.position;let rt=He.start*Xe,Ut=(He.start+He.count)*Xe;De!==null&&(rt=Math.max(rt,De.start*Xe),Ut=Math.min(Ut,(De.start+De.count)*Xe)),ke!==null?(rt=Math.max(rt,0),Ut=Math.min(Ut,ke.count)):We!=null&&(rt=Math.max(rt,0),Ut=Math.min(Ut,We.count));const Pn=Ut-rt;if(Pn<0||Pn===1/0)return;C.setup(ne,k,Be,Q,ke);let yi,st=J;if(ke!==null&&(yi=ee.get(ke),st=ue,st.setIndex(yi)),ne.isMesh)k.wireframe===!0?(Me.setLineWidth(k.wireframeLinewidth*me()),st.setMode(1)):st.setMode(4);else if(ne.isLine){let $e=k.linewidth;$e===void 0&&($e=1),Me.setLineWidth($e*me()),ne.isLineSegments?st.setMode(1):ne.isLineLoop?st.setMode(2):st.setMode(3)}else ne.isPoints?st.setMode(0):ne.isSprite&&st.setMode(4);if(ne.isInstancedMesh)st.renderInstances(rt,Pn,ne.count);else if(Q.isInstancedBufferGeometry){const $e=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,da=Math.min(Q.instanceCount,$e);st.renderInstances(rt,Pn,da)}else st.render(rt,Pn)},this.compile=function(w,V){function Q(k,ne,De){k.transparent===!0&&k.side===si&&k.forceSinglePass===!1?(k.side=Ft,k.needsUpdate=!0,Xt(k,ne,De),k.side=di,k.needsUpdate=!0,Xt(k,ne,De),k.side=si):Xt(k,ne,De)}d=ie.get(w),d.init(),_.push(d),w.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(h.useLegacyLights),w.traverse(function(k){const ne=k.material;if(ne)if(Array.isArray(ne))for(let De=0;De<ne.length;De++){const Oe=ne[De];Q(Oe,w,k)}else Q(ne,w,k)}),_.pop(),d=null};let I=null;function te(w){I&&I(w)}function pe(){Ae.stop()}function we(){Ae.start()}const Ae=new $h;Ae.setAnimationLoop(te),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(w){I=w,ve.setAnimationLoop(w),w===null?Ae.stop():Ae.start()},ve.addEventListener("sessionstart",pe),ve.addEventListener("sessionend",we),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(V),V=ve.getCamera()),w.isScene===!0&&w.onBeforeRender(h,w,V,b),d=ie.get(w,_.length),d.init(),_.push(d),re.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(re),ae=this.localClippingEnabled,G=M.init(this.clippingPlanes,ae),f=fe.get(w,m.length),f.init(),m.push(f),Ze(w,V,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(Y,N),G===!0&&M.beginShadows();const Q=d.state.shadowsArray;if(g.render(Q,w,V),G===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),O.render(f,w),d.setupLights(h.useLegacyLights),V.isArrayCamera){const k=V.cameras;for(let ne=0,De=k.length;ne<De;ne++){const Oe=k[ne];ut(f,w,Oe,Oe.viewport)}}else ut(f,w,V);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(h,w,V),C.resetDefaultState(),y=-1,S=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Ze(w,V,Q,k){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){k&&U.setFromMatrixPosition(w.matrixWorld).applyMatrix4(re);const Oe=le.update(w),Be=w.material;Be.visible&&f.push(w,Oe,Be,Q,U.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Le.render.frame&&(w.skeleton.update(),w.skeleton.frame=Le.render.frame),!w.frustumCulled||K.intersectsObject(w))){k&&U.setFromMatrixPosition(w.matrixWorld).applyMatrix4(re);const Oe=le.update(w),Be=w.material;if(Array.isArray(Be)){const ke=Oe.groups;for(let Xe=0,He=ke.length;Xe<He;Xe++){const We=ke[Xe],rt=Be[We.materialIndex];rt&&rt.visible&&f.push(w,Oe,rt,Q,U.z,We)}}else Be.visible&&f.push(w,Oe,Be,Q,U.z,null)}}const De=w.children;for(let Oe=0,Be=De.length;Oe<Be;Oe++)Ze(De[Oe],V,Q,k)}function ut(w,V,Q,k){const ne=w.opaque,De=w.transmissive,Oe=w.transparent;d.setupLightsView(Q),G===!0&&M.setGlobalState(h.clippingPlanes,Q),De.length>0&&St(ne,V,Q),k&&Me.viewport(D.copy(k)),ne.length>0&&pn(ne,V,Q),De.length>0&&pn(De,V,Q),Oe.length>0&&pn(Oe,V,Q),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function St(w,V,Q){const k=ye.isWebGL2;oe===null&&(oe=new Xi(1024,1024,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?As:$i,minFilter:Ts,samples:k&&s===!0?4:0}));const ne=h.getRenderTarget();h.setRenderTarget(oe),h.clear();const De=h.toneMapping;h.toneMapping=Vn,pn(w,V,Q),h.toneMapping=De,A.updateMultisampleRenderTarget(oe),A.updateRenderTargetMipmap(oe),h.setRenderTarget(ne)}function pn(w,V,Q){const k=V.isScene===!0?V.overrideMaterial:null;for(let ne=0,De=w.length;ne<De;ne++){const Oe=w[ne],Be=Oe.object,ke=Oe.geometry,Xe=k===null?Oe.material:k,He=Oe.group;Be.layers.test(Q.layers)&&nt(Be,V,Q,ke,Xe,He)}}function nt(w,V,Q,k,ne,De){w.onBeforeRender(h,V,Q,k,ne,De),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ne.onBeforeRender(h,V,Q,k,w,De),ne.transparent===!0&&ne.side===si&&ne.forceSinglePass===!1?(ne.side=Ft,ne.needsUpdate=!0,h.renderBufferDirect(Q,V,k,ne,w,De),ne.side=di,ne.needsUpdate=!0,h.renderBufferDirect(Q,V,k,ne,w,De),ne.side=si):h.renderBufferDirect(Q,V,k,ne,w,De),w.onAfterRender(h,V,Q,k,ne,De)}function Xt(w,V,Q){V.isScene!==!0&&(V=ce);const k=Pe.get(w),ne=d.state.lights,De=d.state.shadowsArray,Oe=ne.state.version,Be=he.getParameters(w,ne.state,De,V,Q),ke=he.getProgramCacheKey(Be);let Xe=k.programs;k.environment=w.isMeshStandardMaterial?V.environment:null,k.fog=V.fog,k.envMap=(w.isMeshStandardMaterial?H:L).get(w.envMap||k.environment),Xe===void 0&&(w.addEventListener("dispose",Ie),Xe=new Map,k.programs=Xe);let He=Xe.get(ke);if(He!==void 0){if(k.currentProgram===He&&k.lightsStateVersion===Oe)return mn(w,Be),He}else Be.uniforms=he.getUniforms(w),w.onBuild(Q,Be,h),w.onBeforeCompile(Be,h),He=he.acquireProgram(Be,ke),Xe.set(ke,He),k.uniforms=Be.uniforms;const We=k.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(We.clippingPlanes=M.uniform),mn(w,Be),k.needsLights=nm(w),k.lightsStateVersion=Oe,k.needsLights&&(We.ambientLightColor.value=ne.state.ambient,We.lightProbe.value=ne.state.probe,We.directionalLights.value=ne.state.directional,We.directionalLightShadows.value=ne.state.directionalShadow,We.spotLights.value=ne.state.spot,We.spotLightShadows.value=ne.state.spotShadow,We.rectAreaLights.value=ne.state.rectArea,We.ltc_1.value=ne.state.rectAreaLTC1,We.ltc_2.value=ne.state.rectAreaLTC2,We.pointLights.value=ne.state.point,We.pointLightShadows.value=ne.state.pointShadow,We.hemisphereLights.value=ne.state.hemi,We.directionalShadowMap.value=ne.state.directionalShadowMap,We.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,We.spotShadowMap.value=ne.state.spotShadowMap,We.spotLightMatrix.value=ne.state.spotLightMatrix,We.spotLightMap.value=ne.state.spotLightMap,We.pointShadowMap.value=ne.state.pointShadowMap,We.pointShadowMatrix.value=ne.state.pointShadowMatrix);const rt=He.getUniforms(),Ut=wo.seqWithValue(rt.seq,We);return k.currentProgram=He,k.uniformsList=Ut,He}function mn(w,V){const Q=Pe.get(w);Q.outputEncoding=V.outputEncoding,Q.instancing=V.instancing,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function em(w,V,Q,k,ne){V.isScene!==!0&&(V=ce),A.resetTextureUnits();const De=V.fog,Oe=k.isMeshStandardMaterial?V.environment:null,Be=b===null?h.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:qi,ke=(k.isMeshStandardMaterial?H:L).get(k.envMap||Oe),Xe=k.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,He=!!k.normalMap&&!!Q.attributes.tangent,We=!!Q.morphAttributes.position,rt=!!Q.morphAttributes.normal,Ut=!!Q.morphAttributes.color,Pn=k.toneMapped?h.toneMapping:Vn,yi=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,st=yi!==void 0?yi.length:0,$e=Pe.get(k),da=d.state.lights;if(G===!0&&(ae===!0||w!==S)){const Bt=w===S&&k.id===y;M.setState(k,w,Bt)}let ft=!1;k.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==da.state.version||$e.outputEncoding!==Be||ne.isInstancedMesh&&$e.instancing===!1||!ne.isInstancedMesh&&$e.instancing===!0||ne.isSkinnedMesh&&$e.skinning===!1||!ne.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==ke||k.fog===!0&&$e.fog!==De||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==M.numPlanes||$e.numIntersection!==M.numIntersection)||$e.vertexAlphas!==Xe||$e.vertexTangents!==He||$e.morphTargets!==We||$e.morphNormals!==rt||$e.morphColors!==Ut||$e.toneMapping!==Pn||ye.isWebGL2===!0&&$e.morphTargetsCount!==st)&&(ft=!0):(ft=!0,$e.__version=k.version);let Mi=$e.currentProgram;ft===!0&&(Mi=Xt(k,V,ne));let $c=!1,ts=!1,ha=!1;const Et=Mi.getUniforms(),Si=$e.uniforms;if(Me.useProgram(Mi.program)&&($c=!0,ts=!0,ha=!0),k.id!==y&&(y=k.id,ts=!0),$c||S!==w){if(Et.setValue(B,"projectionMatrix",w.projectionMatrix),ye.logarithmicDepthBuffer&&Et.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),S!==w&&(S=w,ts=!0,ha=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Bt=Et.map.cameraPosition;Bt!==void 0&&Bt.setValue(B,U.setFromMatrixPosition(w.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Et.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||ne.isSkinnedMesh)&&Et.setValue(B,"viewMatrix",w.matrixWorldInverse)}if(ne.isSkinnedMesh){Et.setOptional(B,ne,"bindMatrix"),Et.setOptional(B,ne,"bindMatrixInverse");const Bt=ne.skeleton;Bt&&(ye.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Et.setValue(B,"boneTexture",Bt.boneTexture,A),Et.setValue(B,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pa=Q.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0&&ye.isWebGL2===!0)&&q.update(ne,Q,Mi),(ts||$e.receiveShadow!==ne.receiveShadow)&&($e.receiveShadow=ne.receiveShadow,Et.setValue(B,"receiveShadow",ne.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Si.envMap.value=ke,Si.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ts&&(Et.setValue(B,"toneMappingExposure",h.toneMappingExposure),$e.needsLights&&tm(Si,ha),De&&k.fog===!0&&se.refreshFogUniforms(Si,De),se.refreshMaterialUniforms(Si,k,$,P,oe),wo.upload(B,$e.uniformsList,Si,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(wo.upload(B,$e.uniformsList,Si,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Et.setValue(B,"center",ne.center),Et.setValue(B,"modelViewMatrix",ne.modelViewMatrix),Et.setValue(B,"normalMatrix",ne.normalMatrix),Et.setValue(B,"modelMatrix",ne.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Bt=k.uniformsGroups;for(let ma=0,im=Bt.length;ma<im;ma++)if(ye.isWebGL2){const qc=Bt[ma];z.update(qc,Mi),z.bind(qc,Mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mi}function tm(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function nm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,V,Q){Pe.get(w.texture).__webglTexture=V,Pe.get(w.depthTexture).__webglTexture=Q;const k=Pe.get(w);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=Q===void 0,k.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,V){const Q=Pe.get(w);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,Q=0){b=w,v=V,E=Q;let k=!0,ne=null,De=!1,Oe=!1;if(w){const ke=Pe.get(w);ke.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(36160,null),k=!1):ke.__webglFramebuffer===void 0?A.setupRenderTarget(w):ke.__hasExternalTextures&&A.rebindTextures(w,Pe.get(w.texture).__webglTexture,Pe.get(w.depthTexture).__webglTexture);const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const He=Pe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(ne=He[V],De=!0):ye.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?ne=Pe.get(w).__webglMultisampledFramebuffer:ne=He,D.copy(w.viewport),R.copy(w.scissor),x=w.scissorTest}else D.copy(F).multiplyScalar($).floor(),R.copy(j).multiplyScalar($).floor(),x=X;if(Me.bindFramebuffer(36160,ne)&&ye.drawBuffers&&k&&Me.drawBuffers(w,ne),Me.viewport(D),Me.scissor(R),Me.setScissorTest(x),De){const ke=Pe.get(w.texture);B.framebufferTexture2D(36160,36064,34069+V,ke.__webglTexture,Q)}else if(Oe){const ke=Pe.get(w.texture),Xe=V||0;B.framebufferTextureLayer(36160,36064,ke.__webglTexture,Q||0,Xe)}y=-1},this.readRenderTargetPixels=function(w,V,Q,k,ne,De,Oe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){Me.bindFramebuffer(36160,Be);try{const ke=w.texture,Xe=ke.format,He=ke.type;if(Xe!==cn&&ge.convert(Xe)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=He===As&&(be.has("EXT_color_buffer_half_float")||ye.isWebGL2&&be.has("EXT_color_buffer_float"));if(He!==$i&&ge.convert(He)!==B.getParameter(35738)&&!(He===zi&&(ye.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-k&&Q>=0&&Q<=w.height-ne&&B.readPixels(V,Q,k,ne,ge.convert(Xe),ge.convert(He),De)}finally{const ke=b!==null?Pe.get(b).__webglFramebuffer:null;Me.bindFramebuffer(36160,ke)}}},this.copyFramebufferToTexture=function(w,V,Q=0){const k=Math.pow(2,-Q),ne=Math.floor(V.image.width*k),De=Math.floor(V.image.height*k);A.setTexture2D(V,0),B.copyTexSubImage2D(3553,Q,0,0,w.x,w.y,ne,De),Me.unbindTexture()},this.copyTextureToTexture=function(w,V,Q,k=0){const ne=V.image.width,De=V.image.height,Oe=ge.convert(Q.format),Be=ge.convert(Q.type);A.setTexture2D(Q,0),B.pixelStorei(37440,Q.flipY),B.pixelStorei(37441,Q.premultiplyAlpha),B.pixelStorei(3317,Q.unpackAlignment),V.isDataTexture?B.texSubImage2D(3553,k,w.x,w.y,ne,De,Oe,Be,V.image.data):V.isCompressedTexture?B.compressedTexSubImage2D(3553,k,w.x,w.y,V.mipmaps[0].width,V.mipmaps[0].height,Oe,V.mipmaps[0].data):B.texSubImage2D(3553,k,w.x,w.y,Oe,Be,V.image),k===0&&Q.generateMipmaps&&B.generateMipmap(3553),Me.unbindTexture()},this.copyTextureToTexture3D=function(w,V,Q,k,ne=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=w.max.x-w.min.x+1,Oe=w.max.y-w.min.y+1,Be=w.max.z-w.min.z+1,ke=ge.convert(k.format),Xe=ge.convert(k.type);let He;if(k.isData3DTexture)A.setTexture3D(k,0),He=32879;else if(k.isDataArrayTexture)A.setTexture2DArray(k,0),He=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,k.flipY),B.pixelStorei(37441,k.premultiplyAlpha),B.pixelStorei(3317,k.unpackAlignment);const We=B.getParameter(3314),rt=B.getParameter(32878),Ut=B.getParameter(3316),Pn=B.getParameter(3315),yi=B.getParameter(32877),st=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;B.pixelStorei(3314,st.width),B.pixelStorei(32878,st.height),B.pixelStorei(3316,w.min.x),B.pixelStorei(3315,w.min.y),B.pixelStorei(32877,w.min.z),Q.isDataTexture||Q.isData3DTexture?B.texSubImage3D(He,ne,V.x,V.y,V.z,De,Oe,Be,ke,Xe,st.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(He,ne,V.x,V.y,V.z,De,Oe,Be,ke,st.data)):B.texSubImage3D(He,ne,V.x,V.y,V.z,De,Oe,Be,ke,Xe,st),B.pixelStorei(3314,We),B.pixelStorei(32878,rt),B.pixelStorei(3316,Ut),B.pixelStorei(3315,Pn),B.pixelStorei(32877,yi),ne===0&&k.generateMipmaps&&B.generateMipmap(He),Me.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){v=0,E=0,b=null,Me.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(na.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});class JM extends na{}JM.prototype.isWebGL1Renderer=!0;class Kh extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class QM extends Dt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Ot,this.magFilter=s!==void 0?s:Ot,this.generateMipmaps=!1;const u=this;function f(){u.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ia extends gi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new W,d=new W,m=[],_=[],h=[],p=[];for(let v=0;v<=i;v++){const E=[],b=v/i;let y=0;v==0&&a==0?y=.5/t:v==i&&l==Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){const D=S/t;f.x=-e*Math.cos(r+D*s)*Math.sin(a+b*o),f.y=e*Math.cos(a+b*o),f.z=e*Math.sin(r+D*s)*Math.sin(a+b*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),h.push(d.x,d.y,d.z),p.push(D+y,1-b),E.push(c++)}u.push(E)}for(let v=0;v<i;v++)for(let E=0;E<t;E++){const b=u[v][E+1],y=u[v][E],S=u[v+1][E],D=u[v+1][E+1];(v!==0||a>0)&&m.push(b,y,D),(v!==i-1||l<Math.PI)&&m.push(y,S,D)}this.setIndex(m),this.setAttribute("position",new Tn(_,3)),this.setAttribute("normal",new Tn(h,3)),this.setAttribute("uv",new Tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Ff={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class eS{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const tS=new eS;class Zh{constructor(e){this.manager=e!==void 0?e:tS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class nS extends Zh{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ff.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ls("img");function l(){u(),Ff.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Jh extends Zh{constructor(e){super(e)}load(e,t,i,r){const s=new Dt,a=new nS(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class zf{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);const Uf={type:"change"},ol={type:"start"},Bf={type:"end"};class Qh extends Ji{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nr.ROTATE,MIDDLE:nr.DOLLY,RIGHT:nr.PAN},this.touches={ONE:ir.ROTATE,TWO:ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",ie),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ie),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Uf),i.update(),s=r.NONE},this.update=function(){const C=new W,z=new ji().setFromUnitVectors(e.up,new W(0,1,0)),Se=z.clone().invert(),ve=new W,Te=new ji,Ce=2*Math.PI;return function(){const Ie=i.object.position;C.copy(Ie).sub(i.target),C.applyQuaternion(z),o.setFromVector3(C),i.autoRotate&&s===r.NONE&&T(R()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ve=i.minAzimuthAngle,Ke=i.maxAzimuthAngle;return isFinite(Ve)&&isFinite(Ke)&&(Ve<-Math.PI?Ve+=Ce:Ve>Math.PI&&(Ve-=Ce),Ke<-Math.PI?Ke+=Ce:Ke>Math.PI&&(Ke-=Ce),Ve<=Ke?o.theta=Math.max(Ve,Math.min(Ke,o.theta)):o.theta=o.theta>(Ve+Ke)/2?Math.max(Ve,o.theta):Math.min(Ke,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),C.setFromSpherical(o),C.applyQuaternion(Se),Ie.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ve.distanceToSquared(i.object.position)>a||8*(1-Te.dot(i.object.quaternion))>a?(i.dispatchEvent(Uf),ve.copy(i.object.position),Te.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",O),i.domElement.removeEventListener("pointerdown",H),i.domElement.removeEventListener("pointercancel",le),i.domElement.removeEventListener("wheel",fe),i.domElement.removeEventListener("pointermove",ee),i.domElement.removeEventListener("pointerup",Z),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ie),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new zf,l=new zf;let c=1;const u=new W;let f=!1;const d=new Ge,m=new Ge,_=new Ge,h=new Ge,p=new Ge,v=new Ge,E=new Ge,b=new Ge,y=new Ge,S=[],D={};function R(){return 2*Math.PI/60/60*i.autoRotateSpeed}function x(){return Math.pow(.95,i.zoomSpeed)}function T(C){l.theta-=C}function P(C){l.phi-=C}const $=function(){const C=new W;return function(Se,ve){C.setFromMatrixColumn(ve,0),C.multiplyScalar(-Se),u.add(C)}}(),Y=function(){const C=new W;return function(Se,ve){i.screenSpacePanning===!0?C.setFromMatrixColumn(ve,1):(C.setFromMatrixColumn(ve,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(Se),u.add(C)}}(),N=function(){const C=new W;return function(Se,ve){const Te=i.domElement;if(i.object.isPerspectiveCamera){const Ce=i.object.position;C.copy(Ce).sub(i.target);let Ee=C.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),$(2*Se*Ee/Te.clientHeight,i.object.matrix),Y(2*ve*Ee/Te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(Se*(i.object.right-i.object.left)/i.object.zoom/Te.clientWidth,i.object.matrix),Y(ve*(i.object.top-i.object.bottom)/i.object.zoom/Te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function F(C){i.object.isPerspectiveCamera?c/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(C){i.object.isPerspectiveCamera?c*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(C){d.set(C.clientX,C.clientY)}function K(C){E.set(C.clientX,C.clientY)}function G(C){h.set(C.clientX,C.clientY)}function ae(C){m.set(C.clientX,C.clientY),_.subVectors(m,d).multiplyScalar(i.rotateSpeed);const z=i.domElement;T(2*Math.PI*_.x/z.clientHeight),P(2*Math.PI*_.y/z.clientHeight),d.copy(m),i.update()}function oe(C){b.set(C.clientX,C.clientY),y.subVectors(b,E),y.y>0?F(x()):y.y<0&&j(x()),E.copy(b),i.update()}function re(C){p.set(C.clientX,C.clientY),v.subVectors(p,h).multiplyScalar(i.panSpeed),N(v.x,v.y),h.copy(p),i.update()}function U(C){C.deltaY<0?j(x()):C.deltaY>0&&F(x()),i.update()}function ce(C){let z=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?P(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),z=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?P(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),z=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),z=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),z=!0;break}z&&(C.preventDefault(),i.update())}function me(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),z=.5*(S[0].pageY+S[1].pageY);d.set(C,z)}}function B(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),z=.5*(S[0].pageY+S[1].pageY);h.set(C,z)}}function _e(){const C=S[0].pageX-S[1].pageX,z=S[0].pageY-S[1].pageY,Se=Math.sqrt(C*C+z*z);E.set(0,Se)}function be(){i.enableZoom&&_e(),i.enablePan&&B()}function ye(){i.enableZoom&&_e(),i.enableRotate&&me()}function Me(C){if(S.length==1)m.set(C.pageX,C.pageY);else{const Se=ge(C),ve=.5*(C.pageX+Se.x),Te=.5*(C.pageY+Se.y);m.set(ve,Te)}_.subVectors(m,d).multiplyScalar(i.rotateSpeed);const z=i.domElement;T(2*Math.PI*_.x/z.clientHeight),P(2*Math.PI*_.y/z.clientHeight),d.copy(m)}function Le(C){if(S.length===1)p.set(C.pageX,C.pageY);else{const z=ge(C),Se=.5*(C.pageX+z.x),ve=.5*(C.pageY+z.y);p.set(Se,ve)}v.subVectors(p,h).multiplyScalar(i.panSpeed),N(v.x,v.y),h.copy(p)}function Pe(C){const z=ge(C),Se=C.pageX-z.x,ve=C.pageY-z.y,Te=Math.sqrt(Se*Se+ve*ve);b.set(0,Te),y.set(0,Math.pow(b.y/E.y,i.zoomSpeed)),F(y.y),E.copy(b)}function A(C){i.enableZoom&&Pe(C),i.enablePan&&Le(C)}function L(C){i.enableZoom&&Pe(C),i.enableRotate&&Me(C)}function H(C){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",ee),i.domElement.addEventListener("pointerup",Z)),q(C),C.pointerType==="touch"?M(C):he(C))}function ee(C){i.enabled!==!1&&(C.pointerType==="touch"?g(C):se(C))}function Z(C){J(C),S.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",ee),i.domElement.removeEventListener("pointerup",Z)),i.dispatchEvent(Bf),s=r.NONE}function le(C){J(C)}function he(C){let z;switch(C.button){case 0:z=i.mouseButtons.LEFT;break;case 1:z=i.mouseButtons.MIDDLE;break;case 2:z=i.mouseButtons.RIGHT;break;default:z=-1}switch(z){case nr.DOLLY:if(i.enableZoom===!1)return;K(C),s=r.DOLLY;break;case nr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;G(C),s=r.PAN}else{if(i.enableRotate===!1)return;X(C),s=r.ROTATE}break;case nr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;X(C),s=r.ROTATE}else{if(i.enablePan===!1)return;G(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ol)}function se(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ae(C);break;case r.DOLLY:if(i.enableZoom===!1)return;oe(C);break;case r.PAN:if(i.enablePan===!1)return;re(C);break}}function fe(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(ol),U(C),i.dispatchEvent(Bf))}function ie(C){i.enabled===!1||i.enablePan===!1||ce(C)}function M(C){switch(ue(C),S.length){case 1:switch(i.touches.ONE){case ir.ROTATE:if(i.enableRotate===!1)return;me(),s=r.TOUCH_ROTATE;break;case ir.PAN:if(i.enablePan===!1)return;B(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ir.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;be(),s=r.TOUCH_DOLLY_PAN;break;case ir.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ye(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ol)}function g(C){switch(ue(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Me(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Le(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;A(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;L(C),i.update();break;default:s=r.NONE}}function O(C){i.enabled!==!1&&C.preventDefault()}function q(C){S.push(C)}function J(C){delete D[C.pointerId];for(let z=0;z<S.length;z++)if(S[z].pointerId==C.pointerId){S.splice(z,1);return}}function ue(C){let z=D[C.pointerId];z===void 0&&(z=new Ge,D[C.pointerId]=z),z.set(C.pageX,C.pageY)}function ge(C){const z=C.pointerId===S[0].pointerId?S[1]:S[0];return D[z.pointerId]}i.domElement.addEventListener("contextmenu",O),i.domElement.addEventListener("pointerdown",H),i.domElement.addEventListener("pointercancel",le),i.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}}const iS={data(){return{materials:[],sphere:null,scene:null}},props:["currentImageIndex","images"],watch:{currentImageIndex:function(n,e){this.changeMaterial(n)}},created(){this.initMaterial()},mounted(){this.initThree(),this.creatSphere()},methods:{initThree(){const n=new Kh,e=document.querySelector("#three"),t=new Wt(50,e.clientWidth/e.clientHeight,.1,1e3),i=new na({canvas:e});i.setSize(e.clientWidth,e.clientHeight),t.position.set(1,0,0);const r=new Qh(t,i.domElement);r.update();function s(){requestAnimationFrame(s),r.update(),i.render(n,t)}this.scene=n,s()},creatSphere(){const n=new ia(20,32,20);n.scale(-1,1,1),this.sphere=new Mn(n,this.materials[0]),this.scene.add(this.sphere)},changeMaterial(n){this.sphere.material=this.materials[n]},initMaterial(){for(var n in this.images)this.materials.push(new Ds({map:new Jh().load(this.images[n])}))}}},rS=n=>(pc("data-v-fe0c8056"),n=n(),mc(),n),sS=rS(()=>Re("canvas",{id:"three"},null,-1)),oS=[sS];function aS(n,e,t,i,r,s){return En(),kn("div",null,oS)}const lS=Is(iS,[["render",aS],["__scopeId","data-v-fe0c8056"]]),kf=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Gn=(()=>{if(typeof document>"u")return!1;const n=kf[0],e={};for(const t of kf)if((t==null?void 0:t[1])in document){for(const[r,s]of t.entries())e[n[r]]=s;return e}return!1})(),Vf={change:Gn.fullscreenchange,error:Gn.fullscreenerror};let Ht={request(n=document.documentElement,e){return new Promise((t,i)=>{const r=()=>{Ht.off("change",r),t()};Ht.on("change",r);const s=n[Gn.requestFullscreen](e);s instanceof Promise&&s.then(r).catch(i)})},exit(){return new Promise((n,e)=>{if(!Ht.isFullscreen){n();return}const t=()=>{Ht.off("change",t),n()};Ht.on("change",t);const i=document[Gn.exitFullscreen]();i instanceof Promise&&i.then(t).catch(e)})},toggle(n,e){return Ht.isFullscreen?Ht.exit():Ht.request(n,e)},onchange(n){Ht.on("change",n)},onerror(n){Ht.on("error",n)},on(n,e){const t=Vf[n];t&&document.addEventListener(t,e,!1)},off(n,e){const t=Vf[n];t&&document.removeEventListener(t,e,!1)},raw:Gn};Object.defineProperties(Ht,{isFullscreen:{get:()=>Boolean(document[Gn.fullscreenElement])},element:{enumerable:!0,get:()=>document[Gn.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[Gn.fullscreenEnabled])}});Gn||(Ht={isEnabled:!1});const Gf=Ht,cS="/videos/video1.mp4";const uS={data(){return{materials:[],sphere:null,scene:null,video:null,speed:1,videoTimeClip:[1,2,3],fullscreen:!1,renderer:null,camera:null}},props:["currentVideoIndex","videos"],watch:{currentVideoIndex:function(n,e){this.video.currentTime=this.videoTimeClip[n]}},created(){},mounted(){this.initThree(),this.creatSphere(),this.video=document.getElementById("video"),this.video.currentTime=.1},methods:{initThree(){const n=new Kh,e=document.querySelector("#thre"),t=new Wt(60,e.clientWidth/e.clientHeight,.1,1e3);this.camera=t;const i=new na({canvas:e});i.setSize(e.clientWidth,e.clientHeight),this.renderer=i,t.position.set(1,0,0);const r=new Qh(t,i.domElement);r.update();function s(){requestAnimationFrame(s),r.update(),i.render(n,t)}this.scene=n,s()},creatSphere(){const n=new ia(20,32,20);n.scale(-1,1,1);const e=document.getElementById("video"),t=new QM(e),i=new Ds({map:t});this.sphere=new Mn(n,i),this.scene.add(this.sphere)},changeMaterial(n){this.sphere.material=this.materials[n],console.log("Load Finished")},initMaterial(){for(var n in this.videos)this.materials.push(new Ds({map:new Jh().load(this.videos[n]),side:Ft}))},play(n){this.video.playbackRate=n,this.video.play()},stop(){this.video.pause()},requestFullScreen(){Gf.isEnabled&&Gf.toggle(document.getElementById("thre"))}}},_i=n=>(pc("data-v-318a8a0d"),n=n(),mc(),n),fS={id:"video-container"},dS=_i(()=>Re("canvas",{id:"thre",class:"media"},null,-1)),hS={class:"btn-group",role:"group","aria-label":"Basic example"},pS=_i(()=>Re("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-play-btn",viewBox:"0 0 16 16"},[Re("path",{d:"M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"}),Re("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"})],-1)),mS=[pS],gS=_i(()=>Re("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pause-btn",viewBox:"0 0 16 16"},[Re("path",{d:"M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"}),Re("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"})],-1)),_S=[gS],vS=_i(()=>Re("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-stop-btn",viewBox:"0 0 16 16"},[Re("path",{d:"M6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z"}),Re("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"})],-1)),xS=[vS],bS=_i(()=>Re("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-rewind-btn",viewBox:"0 0 16 16"},[Re("path",{d:"M7.21 5.093A.5.5 0 0 1 8 5.5v1.886l3.21-2.293A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8 8.614V10.5a.5.5 0 0 1-.79.407l-3.5-2.5a.5.5 0 0 1 0-.814l3.5-2.5Z"}),Re("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4Z"})],-1)),yS=[bS],MS=_i(()=>Re("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-fast-forward-btn",viewBox:"0 0 16 16"},[Re("path",{d:"M8.79 5.093A.5.5 0 0 0 8 5.5v1.886L4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L8 8.614V10.5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5Z"}),Re("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4Z"})],-1)),SS=[MS],ES=_i(()=>Re("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrows-fullscreen",viewBox:"0 0 16 16"},[Re("path",{"fill-rule":"evenodd",d:"M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"})],-1)),wS=[ES],TS=_i(()=>Re("video",{id:"video",loop:"",muted:"",crossOrigin:"anonymous",playsinline:"",style:{display:"none"}},[Re("source",{src:cS})],-1));function AS(n,e,t,i,r,s){return En(),kn(ht,null,[Re("div",fS,[dS,Re("div",hS,[Re("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=()=>{r.video.play()})},mS),Re("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=()=>{r.video.pause()})},_S),Re("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=()=>{r.video.currentTime=r.videoTimeClip[t.currentVideoIndex],r.video.pause()})},xS),Re("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=()=>{r.video.currentTime-=1})},yS),Re("button",{type:"button",class:"btn btn-primary",onClick:e[4]||(e[4]=()=>{r.video.currentTime+=1})},SS),Re("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=(...a)=>s.requestFullScreen&&s.requestFullScreen(...a))},wS)])]),TS],64)}const CS=Is(uS,[["render",AS],["__scopeId","data-v-318a8a0d"]]);const LS={data(){return{currentImageIndex:0,images:["./photos/photo1.jpg","./photos/photo2.jpg","./photos/photo3.jpg"],currentVideoIndex:0}},components:{PanoramaPhotoContainer:lS,PanoramaVideoContainer:CS},methods:{changeImage(n){this.currentImageIndex=n,this.currentVideoIndex=n,console.log(this.images[n])},nextImage(){this.currentImageIndex<this.images.length-1&&this.changeImage(++this.currentImageIndex)},lastImage(){this.currentImageIndex>0&&this.changeImage(--this.currentImageIndex)}},compatConfig:{MODE:3}},DS=Re("h1",null,"360 Images",-1),PS={class:"justy-align-center"},RS={"aria-label":"Page navigation example "},IS={class:"pagination justify-content-center"},OS={class:"page-item"},NS=Re("span",{"aria-hidden":"true"},"«",-1),FS=Re("span",{class:"sr-only"},"Previous",-1),zS=[NS,FS],US={class:"page-item"},BS=["onClick"],kS={class:"page-item"},VS=Re("span",{"aria-hidden":"true"},"»",-1),GS=Re("span",{class:"sr-only"},"Next",-1),HS=[VS,GS];function WS(n,e,t,i,r,s){const a=Ll("PanoramaPhotoContainer"),o=Ll("PanoramaVideoContainer");return En(),kn("div",null,[DS,Re("div",PS,bl(r.images[r.currentImageIndex]),1),Re("nav",RS,[Re("ul",IS,[Re("li",OS,[Re("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=Ea(l=>s.lastImage(),["prevent","stop"]))},zS)]),(En(!0),kn(ht,null,Ag(r.images,(l,c)=>(En(),kn("li",US,[Re("a",{class:"page-link",href:"#",onClick:Ea(u=>s.changeImage(c),["prevent","stop"])},bl(c+1),9,BS)]))),256)),Re("li",kS,[Re("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=Ea(l=>s.nextImage(),["prevent","stop"]))},HS)])])]),mt(a,{currentImageIndex:r.currentImageIndex,images:r.images},null,8,["currentImageIndex","images"]),mt(o,{currentVideoIndex:r.currentVideoIndex},null,8,["currentVideoIndex"])])}const $S=Is(LS,[["render",WS]]);const qS=n=>(pc("data-v-9dd0f77f"),n=n(),mc(),n),jS=qS(()=>Re("header",null,null,-1)),XS={class:"container-fluid"},YS={__name:"App",setup(n){return(e,t)=>(En(),kn(ht,null,[jS,Re("main",null,[Re("div",XS,[mt(j_),mt($S)])])],64))}},KS=Is(YS,[["__scopeId","data-v-9dd0f77f"]]);var Pt="top",qt="bottom",jt="right",Rt="left",ra="auto",Zr=[Pt,qt,jt,Rt],Ki="start",kr="end",ep="clippingParents",Ac="viewport",br="popper",tp="reference",$l=Zr.reduce(function(n,e){return n.concat([e+"-"+Ki,e+"-"+kr])},[]),Cc=[].concat(Zr,[ra]).reduce(function(n,e){return n.concat([e,e+"-"+Ki,e+"-"+kr])},[]),np="beforeRead",ip="read",rp="afterRead",sp="beforeMain",op="main",ap="afterMain",lp="beforeWrite",cp="write",up="afterWrite",fp=[np,ip,rp,sp,op,ap,lp,cp,up];function Dn(n){return n?(n.nodeName||"").toLowerCase():null}function en(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function Zi(n){var e=en(n).Element;return n instanceof e||n instanceof Element}function Jt(n){var e=en(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function Lc(n){if(typeof ShadowRoot>"u")return!1;var e=en(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function ZS(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var i=e.styles[t]||{},r=e.attributes[t]||{},s=e.elements[t];!Jt(s)||!Dn(s)||(Object.assign(s.style,i),Object.keys(r).forEach(function(a){var o=r[a];o===!1?s.removeAttribute(a):s.setAttribute(a,o===!0?"":o)}))})}function JS(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(i){var r=e.elements[i],s=e.attributes[i]||{},a=Object.keys(e.styles.hasOwnProperty(i)?e.styles[i]:t[i]),o=a.reduce(function(l,c){return l[c]="",l},{});!Jt(r)||!Dn(r)||(Object.assign(r.style,o),Object.keys(s).forEach(function(l){r.removeAttribute(l)}))})}}const Dc={name:"applyStyles",enabled:!0,phase:"write",fn:ZS,effect:JS,requires:["computeStyles"]};function An(n){return n.split("-")[0]}var Wi=Math.max,Io=Math.min,Vr=Math.round;function ql(){var n=navigator.userAgentData;return n!=null&&n.brands?n.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function dp(){return!/^((?!chrome|android).)*safari/i.test(ql())}function Gr(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var i=n.getBoundingClientRect(),r=1,s=1;e&&Jt(n)&&(r=n.offsetWidth>0&&Vr(i.width)/n.offsetWidth||1,s=n.offsetHeight>0&&Vr(i.height)/n.offsetHeight||1);var a=Zi(n)?en(n):window,o=a.visualViewport,l=!dp()&&t,c=(i.left+(l&&o?o.offsetLeft:0))/r,u=(i.top+(l&&o?o.offsetTop:0))/s,f=i.width/r,d=i.height/s;return{width:f,height:d,top:u,right:c+f,bottom:u+d,left:c,x:c,y:u}}function Pc(n){var e=Gr(n),t=n.offsetWidth,i=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:i}}function hp(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&Lc(t)){var i=e;do{if(i&&n.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function jn(n){return en(n).getComputedStyle(n)}function QS(n){return["table","td","th"].indexOf(Dn(n))>=0}function vi(n){return((Zi(n)?n.ownerDocument:n.document)||window.document).documentElement}function sa(n){return Dn(n)==="html"?n:n.assignedSlot||n.parentNode||(Lc(n)?n.host:null)||vi(n)}function Hf(n){return!Jt(n)||jn(n).position==="fixed"?null:n.offsetParent}function eE(n){var e=/firefox/i.test(ql()),t=/Trident/i.test(ql());if(t&&Jt(n)){var i=jn(n);if(i.position==="fixed")return null}var r=sa(n);for(Lc(r)&&(r=r.host);Jt(r)&&["html","body"].indexOf(Dn(r))<0;){var s=jn(r);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return r;r=r.parentNode}return null}function zs(n){for(var e=en(n),t=Hf(n);t&&QS(t)&&jn(t).position==="static";)t=Hf(t);return t&&(Dn(t)==="html"||Dn(t)==="body"&&jn(t).position==="static")?e:t||eE(n)||e}function Rc(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function vs(n,e,t){return Wi(n,Io(e,t))}function tE(n,e,t){var i=vs(n,e,t);return i>t?t:i}function pp(){return{top:0,right:0,bottom:0,left:0}}function mp(n){return Object.assign({},pp(),n)}function gp(n,e){return e.reduce(function(t,i){return t[i]=n,t},{})}var nE=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,mp(typeof e!="number"?e:gp(e,Zr))};function iE(n){var e,t=n.state,i=n.name,r=n.options,s=t.elements.arrow,a=t.modifiersData.popperOffsets,o=An(t.placement),l=Rc(o),c=[Rt,jt].indexOf(o)>=0,u=c?"height":"width";if(!(!s||!a)){var f=nE(r.padding,t),d=Pc(s),m=l==="y"?Pt:Rt,_=l==="y"?qt:jt,h=t.rects.reference[u]+t.rects.reference[l]-a[l]-t.rects.popper[u],p=a[l]-t.rects.reference[l],v=zs(s),E=v?l==="y"?v.clientHeight||0:v.clientWidth||0:0,b=h/2-p/2,y=f[m],S=E-d[u]-f[_],D=E/2-d[u]/2+b,R=vs(y,D,S),x=l;t.modifiersData[i]=(e={},e[x]=R,e.centerOffset=R-D,e)}}function rE(n){var e=n.state,t=n.options,i=t.element,r=i===void 0?"[data-popper-arrow]":i;r!=null&&(typeof r=="string"&&(r=e.elements.popper.querySelector(r),!r)||hp(e.elements.popper,r)&&(e.elements.arrow=r))}const _p={name:"arrow",enabled:!0,phase:"main",fn:iE,effect:rE,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Hr(n){return n.split("-")[1]}var sE={top:"auto",right:"auto",bottom:"auto",left:"auto"};function oE(n){var e=n.x,t=n.y,i=window,r=i.devicePixelRatio||1;return{x:Vr(e*r)/r||0,y:Vr(t*r)/r||0}}function Wf(n){var e,t=n.popper,i=n.popperRect,r=n.placement,s=n.variation,a=n.offsets,o=n.position,l=n.gpuAcceleration,c=n.adaptive,u=n.roundOffsets,f=n.isFixed,d=a.x,m=d===void 0?0:d,_=a.y,h=_===void 0?0:_,p=typeof u=="function"?u({x:m,y:h}):{x:m,y:h};m=p.x,h=p.y;var v=a.hasOwnProperty("x"),E=a.hasOwnProperty("y"),b=Rt,y=Pt,S=window;if(c){var D=zs(t),R="clientHeight",x="clientWidth";if(D===en(t)&&(D=vi(t),jn(D).position!=="static"&&o==="absolute"&&(R="scrollHeight",x="scrollWidth")),D=D,r===Pt||(r===Rt||r===jt)&&s===kr){y=qt;var T=f&&D===S&&S.visualViewport?S.visualViewport.height:D[R];h-=T-i.height,h*=l?1:-1}if(r===Rt||(r===Pt||r===qt)&&s===kr){b=jt;var P=f&&D===S&&S.visualViewport?S.visualViewport.width:D[x];m-=P-i.width,m*=l?1:-1}}var $=Object.assign({position:o},c&&sE),Y=u===!0?oE({x:m,y:h}):{x:m,y:h};if(m=Y.x,h=Y.y,l){var N;return Object.assign({},$,(N={},N[y]=E?"0":"",N[b]=v?"0":"",N.transform=(S.devicePixelRatio||1)<=1?"translate("+m+"px, "+h+"px)":"translate3d("+m+"px, "+h+"px, 0)",N))}return Object.assign({},$,(e={},e[y]=E?h+"px":"",e[b]=v?m+"px":"",e.transform="",e))}function aE(n){var e=n.state,t=n.options,i=t.gpuAcceleration,r=i===void 0?!0:i,s=t.adaptive,a=s===void 0?!0:s,o=t.roundOffsets,l=o===void 0?!0:o,c={placement:An(e.placement),variation:Hr(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Wf(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Wf(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Ic={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:aE,data:{}};var go={passive:!0};function lE(n){var e=n.state,t=n.instance,i=n.options,r=i.scroll,s=r===void 0?!0:r,a=i.resize,o=a===void 0?!0:a,l=en(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&c.forEach(function(u){u.addEventListener("scroll",t.update,go)}),o&&l.addEventListener("resize",t.update,go),function(){s&&c.forEach(function(u){u.removeEventListener("scroll",t.update,go)}),o&&l.removeEventListener("resize",t.update,go)}}const Oc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:lE,data:{}};var cE={left:"right",right:"left",bottom:"top",top:"bottom"};function To(n){return n.replace(/left|right|bottom|top/g,function(e){return cE[e]})}var uE={start:"end",end:"start"};function $f(n){return n.replace(/start|end/g,function(e){return uE[e]})}function Nc(n){var e=en(n),t=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:t,scrollTop:i}}function Fc(n){return Gr(vi(n)).left+Nc(n).scrollLeft}function fE(n,e){var t=en(n),i=vi(n),r=t.visualViewport,s=i.clientWidth,a=i.clientHeight,o=0,l=0;if(r){s=r.width,a=r.height;var c=dp();(c||!c&&e==="fixed")&&(o=r.offsetLeft,l=r.offsetTop)}return{width:s,height:a,x:o+Fc(n),y:l}}function dE(n){var e,t=vi(n),i=Nc(n),r=(e=n.ownerDocument)==null?void 0:e.body,s=Wi(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=Wi(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),o=-i.scrollLeft+Fc(n),l=-i.scrollTop;return jn(r||t).direction==="rtl"&&(o+=Wi(t.clientWidth,r?r.clientWidth:0)-s),{width:s,height:a,x:o,y:l}}function zc(n){var e=jn(n),t=e.overflow,i=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+r+i)}function vp(n){return["html","body","#document"].indexOf(Dn(n))>=0?n.ownerDocument.body:Jt(n)&&zc(n)?n:vp(sa(n))}function xs(n,e){var t;e===void 0&&(e=[]);var i=vp(n),r=i===((t=n.ownerDocument)==null?void 0:t.body),s=en(i),a=r?[s].concat(s.visualViewport||[],zc(i)?i:[]):i,o=e.concat(a);return r?o:o.concat(xs(sa(a)))}function jl(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function hE(n,e){var t=Gr(n,!1,e==="fixed");return t.top=t.top+n.clientTop,t.left=t.left+n.clientLeft,t.bottom=t.top+n.clientHeight,t.right=t.left+n.clientWidth,t.width=n.clientWidth,t.height=n.clientHeight,t.x=t.left,t.y=t.top,t}function qf(n,e,t){return e===Ac?jl(fE(n,t)):Zi(e)?hE(e,t):jl(dE(vi(n)))}function pE(n){var e=xs(sa(n)),t=["absolute","fixed"].indexOf(jn(n).position)>=0,i=t&&Jt(n)?zs(n):n;return Zi(i)?e.filter(function(r){return Zi(r)&&hp(r,i)&&Dn(r)!=="body"}):[]}function mE(n,e,t,i){var r=e==="clippingParents"?pE(n):[].concat(e),s=[].concat(r,[t]),a=s[0],o=s.reduce(function(l,c){var u=qf(n,c,i);return l.top=Wi(u.top,l.top),l.right=Io(u.right,l.right),l.bottom=Io(u.bottom,l.bottom),l.left=Wi(u.left,l.left),l},qf(n,a,i));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function xp(n){var e=n.reference,t=n.element,i=n.placement,r=i?An(i):null,s=i?Hr(i):null,a=e.x+e.width/2-t.width/2,o=e.y+e.height/2-t.height/2,l;switch(r){case Pt:l={x:a,y:e.y-t.height};break;case qt:l={x:a,y:e.y+e.height};break;case jt:l={x:e.x+e.width,y:o};break;case Rt:l={x:e.x-t.width,y:o};break;default:l={x:e.x,y:e.y}}var c=r?Rc(r):null;if(c!=null){var u=c==="y"?"height":"width";switch(s){case Ki:l[c]=l[c]-(e[u]/2-t[u]/2);break;case kr:l[c]=l[c]+(e[u]/2-t[u]/2);break}}return l}function Wr(n,e){e===void 0&&(e={});var t=e,i=t.placement,r=i===void 0?n.placement:i,s=t.strategy,a=s===void 0?n.strategy:s,o=t.boundary,l=o===void 0?ep:o,c=t.rootBoundary,u=c===void 0?Ac:c,f=t.elementContext,d=f===void 0?br:f,m=t.altBoundary,_=m===void 0?!1:m,h=t.padding,p=h===void 0?0:h,v=mp(typeof p!="number"?p:gp(p,Zr)),E=d===br?tp:br,b=n.rects.popper,y=n.elements[_?E:d],S=mE(Zi(y)?y:y.contextElement||vi(n.elements.popper),l,u,a),D=Gr(n.elements.reference),R=xp({reference:D,element:b,strategy:"absolute",placement:r}),x=jl(Object.assign({},b,R)),T=d===br?x:D,P={top:S.top-T.top+v.top,bottom:T.bottom-S.bottom+v.bottom,left:S.left-T.left+v.left,right:T.right-S.right+v.right},$=n.modifiersData.offset;if(d===br&&$){var Y=$[r];Object.keys(P).forEach(function(N){var F=[jt,qt].indexOf(N)>=0?1:-1,j=[Pt,qt].indexOf(N)>=0?"y":"x";P[N]+=Y[j]*F})}return P}function gE(n,e){e===void 0&&(e={});var t=e,i=t.placement,r=t.boundary,s=t.rootBoundary,a=t.padding,o=t.flipVariations,l=t.allowedAutoPlacements,c=l===void 0?Cc:l,u=Hr(i),f=u?o?$l:$l.filter(function(_){return Hr(_)===u}):Zr,d=f.filter(function(_){return c.indexOf(_)>=0});d.length===0&&(d=f);var m=d.reduce(function(_,h){return _[h]=Wr(n,{placement:h,boundary:r,rootBoundary:s,padding:a})[An(h)],_},{});return Object.keys(m).sort(function(_,h){return m[_]-m[h]})}function _E(n){if(An(n)===ra)return[];var e=To(n);return[$f(n),e,$f(e)]}function vE(n){var e=n.state,t=n.options,i=n.name;if(!e.modifiersData[i]._skip){for(var r=t.mainAxis,s=r===void 0?!0:r,a=t.altAxis,o=a===void 0?!0:a,l=t.fallbackPlacements,c=t.padding,u=t.boundary,f=t.rootBoundary,d=t.altBoundary,m=t.flipVariations,_=m===void 0?!0:m,h=t.allowedAutoPlacements,p=e.options.placement,v=An(p),E=v===p,b=l||(E||!_?[To(p)]:_E(p)),y=[p].concat(b).reduce(function(me,B){return me.concat(An(B)===ra?gE(e,{placement:B,boundary:u,rootBoundary:f,padding:c,flipVariations:_,allowedAutoPlacements:h}):B)},[]),S=e.rects.reference,D=e.rects.popper,R=new Map,x=!0,T=y[0],P=0;P<y.length;P++){var $=y[P],Y=An($),N=Hr($)===Ki,F=[Pt,qt].indexOf(Y)>=0,j=F?"width":"height",X=Wr(e,{placement:$,boundary:u,rootBoundary:f,altBoundary:d,padding:c}),K=F?N?jt:Rt:N?qt:Pt;S[j]>D[j]&&(K=To(K));var G=To(K),ae=[];if(s&&ae.push(X[Y]<=0),o&&ae.push(X[K]<=0,X[G]<=0),ae.every(function(me){return me})){T=$,x=!1;break}R.set($,ae)}if(x)for(var oe=_?3:1,re=function(B){var _e=y.find(function(be){var ye=R.get(be);if(ye)return ye.slice(0,B).every(function(Me){return Me})});if(_e)return T=_e,"break"},U=oe;U>0;U--){var ce=re(U);if(ce==="break")break}e.placement!==T&&(e.modifiersData[i]._skip=!0,e.placement=T,e.reset=!0)}}const bp={name:"flip",enabled:!0,phase:"main",fn:vE,requiresIfExists:["offset"],data:{_skip:!1}};function jf(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function Xf(n){return[Pt,jt,qt,Rt].some(function(e){return n[e]>=0})}function xE(n){var e=n.state,t=n.name,i=e.rects.reference,r=e.rects.popper,s=e.modifiersData.preventOverflow,a=Wr(e,{elementContext:"reference"}),o=Wr(e,{altBoundary:!0}),l=jf(a,i),c=jf(o,r,s),u=Xf(l),f=Xf(c);e.modifiersData[t]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const yp={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:xE};function bE(n,e,t){var i=An(n),r=[Rt,Pt].indexOf(i)>=0?-1:1,s=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,a=s[0],o=s[1];return a=a||0,o=(o||0)*r,[Rt,jt].indexOf(i)>=0?{x:o,y:a}:{x:a,y:o}}function yE(n){var e=n.state,t=n.options,i=n.name,r=t.offset,s=r===void 0?[0,0]:r,a=Cc.reduce(function(u,f){return u[f]=bE(f,e.rects,s),u},{}),o=a[e.placement],l=o.x,c=o.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[i]=a}const Mp={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:yE};function ME(n){var e=n.state,t=n.name;e.modifiersData[t]=xp({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Uc={name:"popperOffsets",enabled:!0,phase:"read",fn:ME,data:{}};function SE(n){return n==="x"?"y":"x"}function EE(n){var e=n.state,t=n.options,i=n.name,r=t.mainAxis,s=r===void 0?!0:r,a=t.altAxis,o=a===void 0?!1:a,l=t.boundary,c=t.rootBoundary,u=t.altBoundary,f=t.padding,d=t.tether,m=d===void 0?!0:d,_=t.tetherOffset,h=_===void 0?0:_,p=Wr(e,{boundary:l,rootBoundary:c,padding:f,altBoundary:u}),v=An(e.placement),E=Hr(e.placement),b=!E,y=Rc(v),S=SE(y),D=e.modifiersData.popperOffsets,R=e.rects.reference,x=e.rects.popper,T=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,P=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),$=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Y={x:0,y:0};if(D){if(s){var N,F=y==="y"?Pt:Rt,j=y==="y"?qt:jt,X=y==="y"?"height":"width",K=D[y],G=K+p[F],ae=K-p[j],oe=m?-x[X]/2:0,re=E===Ki?R[X]:x[X],U=E===Ki?-x[X]:-R[X],ce=e.elements.arrow,me=m&&ce?Pc(ce):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:pp(),_e=B[F],be=B[j],ye=vs(0,R[X],me[X]),Me=b?R[X]/2-oe-ye-_e-P.mainAxis:re-ye-_e-P.mainAxis,Le=b?-R[X]/2+oe+ye+be+P.mainAxis:U+ye+be+P.mainAxis,Pe=e.elements.arrow&&zs(e.elements.arrow),A=Pe?y==="y"?Pe.clientTop||0:Pe.clientLeft||0:0,L=(N=$==null?void 0:$[y])!=null?N:0,H=K+Me-L-A,ee=K+Le-L,Z=vs(m?Io(G,H):G,K,m?Wi(ae,ee):ae);D[y]=Z,Y[y]=Z-K}if(o){var le,he=y==="x"?Pt:Rt,se=y==="x"?qt:jt,fe=D[S],ie=S==="y"?"height":"width",M=fe+p[he],g=fe-p[se],O=[Pt,Rt].indexOf(v)!==-1,q=(le=$==null?void 0:$[S])!=null?le:0,J=O?M:fe-R[ie]-x[ie]-q+P.altAxis,ue=O?fe+R[ie]+x[ie]-q-P.altAxis:g,ge=m&&O?tE(J,fe,ue):vs(m?J:M,fe,m?ue:g);D[S]=ge,Y[S]=ge-fe}e.modifiersData[i]=Y}}const Sp={name:"preventOverflow",enabled:!0,phase:"main",fn:EE,requiresIfExists:["offset"]};function wE(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function TE(n){return n===en(n)||!Jt(n)?Nc(n):wE(n)}function AE(n){var e=n.getBoundingClientRect(),t=Vr(e.width)/n.offsetWidth||1,i=Vr(e.height)/n.offsetHeight||1;return t!==1||i!==1}function CE(n,e,t){t===void 0&&(t=!1);var i=Jt(e),r=Jt(e)&&AE(e),s=vi(e),a=Gr(n,r,t),o={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!t)&&((Dn(e)!=="body"||zc(s))&&(o=TE(e)),Jt(e)?(l=Gr(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):s&&(l.x=Fc(s))),{x:a.left+o.scrollLeft-l.x,y:a.top+o.scrollTop-l.y,width:a.width,height:a.height}}function LE(n){var e=new Map,t=new Set,i=[];n.forEach(function(s){e.set(s.name,s)});function r(s){t.add(s.name);var a=[].concat(s.requires||[],s.requiresIfExists||[]);a.forEach(function(o){if(!t.has(o)){var l=e.get(o);l&&r(l)}}),i.push(s)}return n.forEach(function(s){t.has(s.name)||r(s)}),i}function DE(n){var e=LE(n);return fp.reduce(function(t,i){return t.concat(e.filter(function(r){return r.phase===i}))},[])}function PE(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function RE(n){var e=n.reduce(function(t,i){var r=t[i.name];return t[i.name]=r?Object.assign({},r,i,{options:Object.assign({},r.options,i.options),data:Object.assign({},r.data,i.data)}):i,t},{});return Object.keys(e).map(function(t){return e[t]})}var Yf={placement:"bottom",modifiers:[],strategy:"absolute"};function Kf(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function oa(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,i=t===void 0?[]:t,r=e.defaultOptions,s=r===void 0?Yf:r;return function(o,l,c){c===void 0&&(c=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Yf,s),modifiersData:{},elements:{reference:o,popper:l},attributes:{},styles:{}},f=[],d=!1,m={state:u,setOptions:function(v){var E=typeof v=="function"?v(u.options):v;h(),u.options=Object.assign({},s,u.options,E),u.scrollParents={reference:Zi(o)?xs(o):o.contextElement?xs(o.contextElement):[],popper:xs(l)};var b=DE(RE([].concat(i,u.options.modifiers)));return u.orderedModifiers=b.filter(function(y){return y.enabled}),_(),m.update()},forceUpdate:function(){if(!d){var v=u.elements,E=v.reference,b=v.popper;if(Kf(E,b)){u.rects={reference:CE(E,zs(b),u.options.strategy==="fixed"),popper:Pc(b)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(P){return u.modifiersData[P.name]=Object.assign({},P.data)});for(var y=0;y<u.orderedModifiers.length;y++){if(u.reset===!0){u.reset=!1,y=-1;continue}var S=u.orderedModifiers[y],D=S.fn,R=S.options,x=R===void 0?{}:R,T=S.name;typeof D=="function"&&(u=D({state:u,options:x,name:T,instance:m})||u)}}}},update:PE(function(){return new Promise(function(p){m.forceUpdate(),p(u)})}),destroy:function(){h(),d=!0}};if(!Kf(o,l))return m;m.setOptions(c).then(function(p){!d&&c.onFirstUpdate&&c.onFirstUpdate(p)});function _(){u.orderedModifiers.forEach(function(p){var v=p.name,E=p.options,b=E===void 0?{}:E,y=p.effect;if(typeof y=="function"){var S=y({state:u,name:v,instance:m,options:b}),D=function(){};f.push(S||D)}})}function h(){f.forEach(function(p){return p()}),f=[]}return m}}var IE=oa(),OE=[Oc,Uc,Ic,Dc],NE=oa({defaultModifiers:OE}),FE=[Oc,Uc,Ic,Dc,Mp,bp,Sp,_p,yp],Bc=oa({defaultModifiers:FE});const Ep=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ap,afterRead:rp,afterWrite:up,applyStyles:Dc,arrow:_p,auto:ra,basePlacements:Zr,beforeMain:sp,beforeRead:np,beforeWrite:lp,bottom:qt,clippingParents:ep,computeStyles:Ic,createPopper:Bc,createPopperBase:IE,createPopperLite:NE,detectOverflow:Wr,end:kr,eventListeners:Oc,flip:bp,hide:yp,left:Rt,main:op,modifierPhases:fp,offset:Mp,placements:Cc,popper:br,popperGenerator:oa,popperOffsets:Uc,preventOverflow:Sp,read:ip,reference:tp,right:jt,start:Ki,top:Pt,variationPlacements:$l,viewport:Ac,write:cp},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const zE=1e6,UE=1e3,Xl="transitionend",BE=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),kE=n=>{do n+=Math.floor(Math.random()*zE);while(document.getElementById(n));return n},wp=n=>{let e=n.getAttribute("data-bs-target");if(!e||e==="#"){let t=n.getAttribute("href");if(!t||!t.includes("#")&&!t.startsWith("."))return null;t.includes("#")&&!t.startsWith("#")&&(t=`#${t.split("#")[1]}`),e=t&&t!=="#"?t.trim():null}return e},Tp=n=>{const e=wp(n);return e&&document.querySelector(e)?e:null},Hn=n=>{const e=wp(n);return e?document.querySelector(e):null},VE=n=>{if(!n)return 0;let{transitionDuration:e,transitionDelay:t}=window.getComputedStyle(n);const i=Number.parseFloat(e),r=Number.parseFloat(t);return!i&&!r?0:(e=e.split(",")[0],t=t.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(t))*UE)},Ap=n=>{n.dispatchEvent(new Event(Xl))},Wn=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),hi=n=>Wn(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(n):null,Jr=n=>{if(!Wn(n)||n.getClientRects().length===0)return!1;const e=getComputedStyle(n).getPropertyValue("visibility")==="visible",t=n.closest("details:not([open])");if(!t)return e;if(t!==n){const i=n.closest("summary");if(i&&i.parentNode!==t||i===null)return!1}return e},pi=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",Cp=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const e=n.getRootNode();return e instanceof ShadowRoot?e:null}return n instanceof ShadowRoot?n:n.parentNode?Cp(n.parentNode):null},Oo=()=>{},Us=n=>{n.offsetHeight},Lp=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,al=[],GE=n=>{document.readyState==="loading"?(al.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of al)e()}),al.push(n)):n()},Qt=()=>document.documentElement.dir==="rtl",tn=n=>{GE(()=>{const e=Lp();if(e){const t=n.NAME,i=e.fn[t];e.fn[t]=n.jQueryInterface,e.fn[t].Constructor=n,e.fn[t].noConflict=()=>(e.fn[t]=i,n.jQueryInterface)}})},Bn=n=>{typeof n=="function"&&n()},Dp=(n,e,t=!0)=>{if(!t){Bn(n);return}const i=5,r=VE(e)+i;let s=!1;const a=({target:o})=>{o===e&&(s=!0,e.removeEventListener(Xl,a),Bn(n))};e.addEventListener(Xl,a),setTimeout(()=>{s||Ap(e)},r)},kc=(n,e,t,i)=>{const r=n.length;let s=n.indexOf(e);return s===-1?!t&&i?n[r-1]:n[0]:(s+=t?1:-1,i&&(s=(s+r)%r),n[Math.max(0,Math.min(s,r-1))])},HE=/[^.]*(?=\..*)\.|.*/,WE=/\..*/,$E=/::\d+$/,ll={};let Zf=1;const Pp={mouseenter:"mouseover",mouseleave:"mouseout"},qE=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Rp(n,e){return e&&`${e}::${Zf++}`||n.uidEvent||Zf++}function Ip(n){const e=Rp(n);return n.uidEvent=e,ll[e]=ll[e]||{},ll[e]}function jE(n,e){return function t(i){return Vc(i,{delegateTarget:n}),t.oneOff&&de.off(n,i.type,e),e.apply(n,[i])}}function XE(n,e,t){return function i(r){const s=n.querySelectorAll(e);for(let{target:a}=r;a&&a!==this;a=a.parentNode)for(const o of s)if(o===a)return Vc(r,{delegateTarget:a}),i.oneOff&&de.off(n,r.type,e,t),t.apply(a,[r])}}function Op(n,e,t=null){return Object.values(n).find(i=>i.callable===e&&i.delegationSelector===t)}function Np(n,e,t){const i=typeof e=="string",r=i?t:e||t;let s=Fp(n);return qE.has(s)||(s=n),[i,r,s]}function Jf(n,e,t,i,r){if(typeof e!="string"||!n)return;let[s,a,o]=Np(e,t,i);e in Pp&&(a=(_=>function(h){if(!h.relatedTarget||h.relatedTarget!==h.delegateTarget&&!h.delegateTarget.contains(h.relatedTarget))return _.call(this,h)})(a));const l=Ip(n),c=l[o]||(l[o]={}),u=Op(c,a,s?t:null);if(u){u.oneOff=u.oneOff&&r;return}const f=Rp(a,e.replace(HE,"")),d=s?XE(n,t,a):jE(n,a);d.delegationSelector=s?t:null,d.callable=a,d.oneOff=r,d.uidEvent=f,c[f]=d,n.addEventListener(o,d,s)}function Yl(n,e,t,i,r){const s=Op(e[t],i,r);s&&(n.removeEventListener(t,s,Boolean(r)),delete e[t][s.uidEvent])}function YE(n,e,t,i){const r=e[t]||{};for(const s of Object.keys(r))if(s.includes(i)){const a=r[s];Yl(n,e,t,a.callable,a.delegationSelector)}}function Fp(n){return n=n.replace(WE,""),Pp[n]||n}const de={on(n,e,t,i){Jf(n,e,t,i,!1)},one(n,e,t,i){Jf(n,e,t,i,!0)},off(n,e,t,i){if(typeof e!="string"||!n)return;const[r,s,a]=Np(e,t,i),o=a!==e,l=Ip(n),c=l[a]||{},u=e.startsWith(".");if(typeof s<"u"){if(!Object.keys(c).length)return;Yl(n,l,a,s,r?t:null);return}if(u)for(const f of Object.keys(l))YE(n,l,f,e.slice(1));for(const f of Object.keys(c)){const d=f.replace($E,"");if(!o||e.includes(d)){const m=c[f];Yl(n,l,a,m.callable,m.delegationSelector)}}},trigger(n,e,t){if(typeof e!="string"||!n)return null;const i=Lp(),r=Fp(e),s=e!==r;let a=null,o=!0,l=!0,c=!1;s&&i&&(a=i.Event(e,t),i(n).trigger(a),o=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),c=a.isDefaultPrevented());let u=new Event(e,{bubbles:o,cancelable:!0});return u=Vc(u,t),c&&u.preventDefault(),l&&n.dispatchEvent(u),u.defaultPrevented&&a&&a.preventDefault(),u}};function Vc(n,e){for(const[t,i]of Object.entries(e||{}))try{n[t]=i}catch{Object.defineProperty(n,t,{configurable:!0,get(){return i}})}return n}const ti=new Map,cl={set(n,e,t){ti.has(n)||ti.set(n,new Map);const i=ti.get(n);if(!i.has(e)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(e,t)},get(n,e){return ti.has(n)&&ti.get(n).get(e)||null},remove(n,e){if(!ti.has(n))return;const t=ti.get(n);t.delete(e),t.size===0&&ti.delete(n)}};function Qf(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function ul(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const $n={setDataAttribute(n,e,t){n.setAttribute(`data-bs-${ul(e)}`,t)},removeDataAttribute(n,e){n.removeAttribute(`data-bs-${ul(e)}`)},getDataAttributes(n){if(!n)return{};const e={},t=Object.keys(n.dataset).filter(i=>i.startsWith("bs")&&!i.startsWith("bsConfig"));for(const i of t){let r=i.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),e[r]=Qf(n.dataset[i])}return e},getDataAttribute(n,e){return Qf(n.getAttribute(`data-bs-${ul(e)}`))}};class Bs{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const i=Wn(t)?$n.getDataAttribute(t,"config"):{};return{...this.constructor.Default,...typeof i=="object"?i:{},...Wn(t)?$n.getDataAttributes(t):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const i of Object.keys(t)){const r=t[i],s=e[i],a=Wn(s)?"element":BE(s);if(!new RegExp(r).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${r}".`)}}}const KE="5.2.3";class dn extends Bs{constructor(e,t){super(),e=hi(e),e&&(this._element=e,this._config=this._getConfig(t),cl.set(this._element,this.constructor.DATA_KEY,this))}dispose(){cl.remove(this._element,this.constructor.DATA_KEY),de.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,i=!0){Dp(e,t,i)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return cl.get(hi(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t=="object"?t:null)}static get VERSION(){return KE}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const aa=(n,e="hide")=>{const t=`click.dismiss${n.EVENT_KEY}`,i=n.NAME;de.on(document,t,`[data-bs-dismiss="${i}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),pi(this))return;const s=Hn(this)||this.closest(`.${i}`);n.getOrCreateInstance(s)[e]()})},ZE="alert",JE="bs.alert",zp=`.${JE}`,QE=`close${zp}`,ew=`closed${zp}`,tw="fade",nw="show";class la extends dn{static get NAME(){return ZE}close(){if(de.trigger(this._element,QE).defaultPrevented)return;this._element.classList.remove(nw);const t=this._element.classList.contains(tw);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),de.trigger(this._element,ew),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=la.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}aa(la,"close");tn(la);const iw="button",rw="bs.button",sw=`.${rw}`,ow=".data-api",aw="active",ed='[data-bs-toggle="button"]',lw=`click${sw}${ow}`;class ca extends dn{static get NAME(){return iw}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(aw))}static jQueryInterface(e){return this.each(function(){const t=ca.getOrCreateInstance(this);e==="toggle"&&t[e]()})}}de.on(document,lw,ed,n=>{n.preventDefault();const e=n.target.closest(ed);ca.getOrCreateInstance(e).toggle()});tn(ca);const Fe={find(n,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,n))},findOne(n,e=document.documentElement){return Element.prototype.querySelector.call(e,n)},children(n,e){return[].concat(...n.children).filter(t=>t.matches(e))},parents(n,e){const t=[];let i=n.parentNode.closest(e);for(;i;)t.push(i),i=i.parentNode.closest(e);return t},prev(n,e){let t=n.previousElementSibling;for(;t;){if(t.matches(e))return[t];t=t.previousElementSibling}return[]},next(n,e){let t=n.nextElementSibling;for(;t;){if(t.matches(e))return[t];t=t.nextElementSibling}return[]},focusableChildren(n){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,n).filter(t=>!pi(t)&&Jr(t))}},cw="swipe",Qr=".bs.swipe",uw=`touchstart${Qr}`,fw=`touchmove${Qr}`,dw=`touchend${Qr}`,hw=`pointerdown${Qr}`,pw=`pointerup${Qr}`,mw="touch",gw="pen",_w="pointer-event",vw=40,xw={endCallback:null,leftCallback:null,rightCallback:null},bw={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class No extends Bs{constructor(e,t){super(),this._element=e,!(!e||!No.isSupported())&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return xw}static get DefaultType(){return bw}static get NAME(){return cw}dispose(){de.off(this._element,Qr)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Bn(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=vw)return;const t=e/this._deltaX;this._deltaX=0,t&&Bn(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(de.on(this._element,hw,e=>this._start(e)),de.on(this._element,pw,e=>this._end(e)),this._element.classList.add(_w)):(de.on(this._element,uw,e=>this._start(e)),de.on(this._element,fw,e=>this._move(e)),de.on(this._element,dw,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===gw||e.pointerType===mw)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const yw="carousel",Mw="bs.carousel",xi=`.${Mw}`,Up=".data-api",Sw="ArrowLeft",Ew="ArrowRight",ww=500,cs="next",_r="prev",yr="left",Ao="right",Tw=`slide${xi}`,fl=`slid${xi}`,Aw=`keydown${xi}`,Cw=`mouseenter${xi}`,Lw=`mouseleave${xi}`,Dw=`dragstart${xi}`,Pw=`load${xi}${Up}`,Rw=`click${xi}${Up}`,Bp="carousel",_o="active",Iw="slide",Ow="carousel-item-end",Nw="carousel-item-start",Fw="carousel-item-next",zw="carousel-item-prev",kp=".active",Vp=".carousel-item",Uw=kp+Vp,Bw=".carousel-item img",kw=".carousel-indicators",Vw="[data-bs-slide], [data-bs-slide-to]",Gw='[data-bs-ride="carousel"]',Hw={[Sw]:Ao,[Ew]:yr},Ww={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},$w={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ks extends dn{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Fe.findOne(kw,this._element),this._addEventListeners(),this._config.ride===Bp&&this.cycle()}static get Default(){return Ww}static get DefaultType(){return $w}static get NAME(){return yw}next(){this._slide(cs)}nextWhenVisible(){!document.hidden&&Jr(this._element)&&this.next()}prev(){this._slide(_r)}pause(){this._isSliding&&Ap(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){de.one(this._element,fl,()=>this.cycle());return}this.cycle()}}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){de.one(this._element,fl,()=>this.to(e));return}const i=this._getItemIndex(this._getActive());if(i===e)return;const r=e>i?cs:_r;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&de.on(this._element,Aw,e=>this._keydown(e)),this._config.pause==="hover"&&(de.on(this._element,Cw,()=>this.pause()),de.on(this._element,Lw,()=>this._maybeEnableCycle())),this._config.touch&&No.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const i of Fe.find(Bw,this._element))de.on(i,Dw,r=>r.preventDefault());const t={leftCallback:()=>this._slide(this._directionToOrder(yr)),rightCallback:()=>this._slide(this._directionToOrder(Ao)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),ww+this._config.interval))}};this._swipeHelper=new No(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Hw[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=Fe.findOne(kp,this._indicatorsElement);t.classList.remove(_o),t.removeAttribute("aria-current");const i=Fe.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);i&&(i.classList.add(_o),i.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const i=this._getActive(),r=e===cs,s=t||kc(this._getItems(),i,r,this._config.wrap);if(s===i)return;const a=this._getItemIndex(s),o=m=>de.trigger(this._element,m,{relatedTarget:s,direction:this._orderToDirection(e),from:this._getItemIndex(i),to:a});if(o(Tw).defaultPrevented||!i||!s)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=s;const u=r?Nw:Ow,f=r?Fw:zw;s.classList.add(f),Us(s),i.classList.add(u),s.classList.add(u);const d=()=>{s.classList.remove(u,f),s.classList.add(_o),i.classList.remove(_o,f,u),this._isSliding=!1,o(fl)};this._queueCallback(d,i,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Iw)}_getActive(){return Fe.findOne(Uw,this._element)}_getItems(){return Fe.find(Vp,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return Qt()?e===yr?_r:cs:e===yr?cs:_r}_orderToDirection(e){return Qt()?e===_r?yr:Ao:e===_r?Ao:yr}static jQueryInterface(e){return this.each(function(){const t=ks.getOrCreateInstance(this,e);if(typeof e=="number"){t.to(e);return}if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}de.on(document,Rw,Vw,function(n){const e=Hn(this);if(!e||!e.classList.contains(Bp))return;n.preventDefault();const t=ks.getOrCreateInstance(e),i=this.getAttribute("data-bs-slide-to");if(i){t.to(i),t._maybeEnableCycle();return}if($n.getDataAttribute(this,"slide")==="next"){t.next(),t._maybeEnableCycle();return}t.prev(),t._maybeEnableCycle()});de.on(window,Pw,()=>{const n=Fe.find(Gw);for(const e of n)ks.getOrCreateInstance(e)});tn(ks);const qw="collapse",jw="bs.collapse",Vs=`.${jw}`,Xw=".data-api",Yw=`show${Vs}`,Kw=`shown${Vs}`,Zw=`hide${Vs}`,Jw=`hidden${Vs}`,Qw=`click${Vs}${Xw}`,dl="show",wr="collapse",vo="collapsing",eT="collapsed",tT=`:scope .${wr} .${wr}`,nT="collapse-horizontal",iT="width",rT="height",sT=".collapse.show, .collapse.collapsing",Kl='[data-bs-toggle="collapse"]',oT={parent:null,toggle:!0},aT={parent:"(null|element)",toggle:"boolean"};class Ps extends dn{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const i=Fe.find(Kl);for(const r of i){const s=Tp(r),a=Fe.find(s).filter(o=>o===this._element);s!==null&&a.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return oT}static get DefaultType(){return aT}static get NAME(){return qw}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(sT).filter(o=>o!==this._element).map(o=>Ps.getOrCreateInstance(o,{toggle:!1}))),e.length&&e[0]._isTransitioning||de.trigger(this._element,Yw).defaultPrevented)return;for(const o of e)o.hide();const i=this._getDimension();this._element.classList.remove(wr),this._element.classList.add(vo),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(vo),this._element.classList.add(wr,dl),this._element.style[i]="",de.trigger(this._element,Kw)},a=`scroll${i[0].toUpperCase()+i.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[i]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown()||de.trigger(this._element,Zw).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,Us(this._element),this._element.classList.add(vo),this._element.classList.remove(wr,dl);for(const r of this._triggerArray){const s=Hn(r);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(vo),this._element.classList.add(wr),de.trigger(this._element,Jw)};this._element.style[t]="",this._queueCallback(i,this._element,!0)}_isShown(e=this._element){return e.classList.contains(dl)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=hi(e.parent),e}_getDimension(){return this._element.classList.contains(nT)?iT:rT}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Kl);for(const t of e){const i=Hn(t);i&&this._addAriaAndCollapsedClass([t],this._isShown(i))}}_getFirstLevelChildren(e){const t=Fe.find(tT,this._config.parent);return Fe.find(e,this._config.parent).filter(i=>!t.includes(i))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const i of e)i.classList.toggle(eT,!t),i.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return typeof e=="string"&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){const i=Ps.getOrCreateInstance(this,t);if(typeof e=="string"){if(typeof i[e]>"u")throw new TypeError(`No method named "${e}"`);i[e]()}})}}de.on(document,Qw,Kl,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();const e=Tp(this),t=Fe.find(e);for(const i of t)Ps.getOrCreateInstance(i,{toggle:!1}).toggle()});tn(Ps);const td="dropdown",lT="bs.dropdown",Qi=`.${lT}`,Gc=".data-api",cT="Escape",nd="Tab",uT="ArrowUp",id="ArrowDown",fT=2,dT=`hide${Qi}`,hT=`hidden${Qi}`,pT=`show${Qi}`,mT=`shown${Qi}`,Gp=`click${Qi}${Gc}`,Hp=`keydown${Qi}${Gc}`,gT=`keyup${Qi}${Gc}`,Mr="show",_T="dropup",vT="dropend",xT="dropstart",bT="dropup-center",yT="dropdown-center",Ui='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',MT=`${Ui}.${Mr}`,Co=".dropdown-menu",ST=".navbar",ET=".navbar-nav",wT=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",TT=Qt()?"top-end":"top-start",AT=Qt()?"top-start":"top-end",CT=Qt()?"bottom-end":"bottom-start",LT=Qt()?"bottom-start":"bottom-end",DT=Qt()?"left-start":"right-start",PT=Qt()?"right-start":"left-start",RT="top",IT="bottom",OT={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},NT={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Cn extends dn{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=Fe.next(this._element,Co)[0]||Fe.prev(this._element,Co)[0]||Fe.findOne(Co,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return OT}static get DefaultType(){return NT}static get NAME(){return td}toggle(){return this._isShown()?this.hide():this.show()}show(){if(pi(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!de.trigger(this._element,pT,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(ET))for(const i of[].concat(...document.body.children))de.on(i,"mouseover",Oo);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Mr),this._element.classList.add(Mr),de.trigger(this._element,mT,e)}}hide(){if(pi(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!de.trigger(this._element,dT,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))de.off(i,"mouseover",Oo);this._popper&&this._popper.destroy(),this._menu.classList.remove(Mr),this._element.classList.remove(Mr),this._element.setAttribute("aria-expanded","false"),$n.removeDataAttribute(this._menu,"popper"),de.trigger(this._element,hT,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!Wn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${td.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof Ep>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:Wn(this._config.reference)?e=hi(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=Bc(e,this._menu,t)}_isShown(){return this._menu.classList.contains(Mr)}_getPlacement(){const e=this._parent;if(e.classList.contains(vT))return DT;if(e.classList.contains(xT))return PT;if(e.classList.contains(bT))return RT;if(e.classList.contains(yT))return IT;const t=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(_T)?t?AT:TT:t?LT:CT}_detectNavbar(){return this._element.closest(ST)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&($n.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const i=Fe.find(wT,this._menu).filter(r=>Jr(r));i.length&&kc(i,t,e===id,!i.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=Cn.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===fT||e.type==="keyup"&&e.key!==nd)return;const t=Fe.find(MT);for(const i of t){const r=Cn.getInstance(i);if(!r||r._config.autoClose===!1)continue;const s=e.composedPath(),a=s.includes(r._menu);if(s.includes(r._element)||r._config.autoClose==="inside"&&!a||r._config.autoClose==="outside"&&a||r._menu.contains(e.target)&&(e.type==="keyup"&&e.key===nd||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const o={relatedTarget:r._element};e.type==="click"&&(o.clickEvent=e),r._completeHide(o)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),i=e.key===cT,r=[uT,id].includes(e.key);if(!r&&!i||t&&!i)return;e.preventDefault();const s=this.matches(Ui)?this:Fe.prev(this,Ui)[0]||Fe.next(this,Ui)[0]||Fe.findOne(Ui,e.delegateTarget.parentNode),a=Cn.getOrCreateInstance(s);if(r){e.stopPropagation(),a.show(),a._selectMenuItem(e);return}a._isShown()&&(e.stopPropagation(),a.hide(),s.focus())}}de.on(document,Hp,Ui,Cn.dataApiKeydownHandler);de.on(document,Hp,Co,Cn.dataApiKeydownHandler);de.on(document,Gp,Cn.clearMenus);de.on(document,gT,Cn.clearMenus);de.on(document,Gp,Ui,function(n){n.preventDefault(),Cn.getOrCreateInstance(this).toggle()});tn(Cn);const rd=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",sd=".sticky-top",xo="padding-right",od="margin-right";class Zl{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,xo,t=>t+e),this._setElementAttributes(rd,xo,t=>t+e),this._setElementAttributes(sd,od,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,xo),this._resetElementAttributes(rd,xo),this._resetElementAttributes(sd,od)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,i){const r=this.getWidth(),s=a=>{if(a!==this._element&&window.innerWidth>a.clientWidth+r)return;this._saveInitialAttribute(a,t);const o=window.getComputedStyle(a).getPropertyValue(t);a.style.setProperty(t,`${i(Number.parseFloat(o))}px`)};this._applyManipulationCallback(e,s)}_saveInitialAttribute(e,t){const i=e.style.getPropertyValue(t);i&&$n.setDataAttribute(e,t,i)}_resetElementAttributes(e,t){const i=r=>{const s=$n.getDataAttribute(r,t);if(s===null){r.style.removeProperty(t);return}$n.removeDataAttribute(r,t),r.style.setProperty(t,s)};this._applyManipulationCallback(e,i)}_applyManipulationCallback(e,t){if(Wn(e)){t(e);return}for(const i of Fe.find(e,this._element))t(i)}}const Wp="backdrop",FT="fade",ad="show",ld=`mousedown.bs.${Wp}`,zT={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},UT={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class $p extends Bs{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return zT}static get DefaultType(){return UT}static get NAME(){return Wp}show(e){if(!this._config.isVisible){Bn(e);return}this._append();const t=this._getElement();this._config.isAnimated&&Us(t),t.classList.add(ad),this._emulateAnimation(()=>{Bn(e)})}hide(e){if(!this._config.isVisible){Bn(e);return}this._getElement().classList.remove(ad),this._emulateAnimation(()=>{this.dispose(),Bn(e)})}dispose(){this._isAppended&&(de.off(this._element,ld),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(FT),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=hi(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),de.on(e,ld,()=>{Bn(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Dp(e,this._getElement(),this._config.isAnimated)}}const BT="focustrap",kT="bs.focustrap",Fo=`.${kT}`,VT=`focusin${Fo}`,GT=`keydown.tab${Fo}`,HT="Tab",WT="forward",cd="backward",$T={autofocus:!0,trapElement:null},qT={autofocus:"boolean",trapElement:"element"};class qp extends Bs{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return $T}static get DefaultType(){return qT}static get NAME(){return BT}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),de.off(document,Fo),de.on(document,VT,e=>this._handleFocusin(e)),de.on(document,GT,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,de.off(document,Fo))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const i=Fe.focusableChildren(t);i.length===0?t.focus():this._lastTabNavDirection===cd?i[i.length-1].focus():i[0].focus()}_handleKeydown(e){e.key===HT&&(this._lastTabNavDirection=e.shiftKey?cd:WT)}}const jT="modal",XT="bs.modal",hn=`.${XT}`,YT=".data-api",KT="Escape",ZT=`hide${hn}`,JT=`hidePrevented${hn}`,jp=`hidden${hn}`,Xp=`show${hn}`,QT=`shown${hn}`,e1=`resize${hn}`,t1=`click.dismiss${hn}`,n1=`mousedown.dismiss${hn}`,i1=`keydown.dismiss${hn}`,r1=`click${hn}${YT}`,ud="modal-open",s1="fade",fd="show",hl="modal-static",o1=".modal.show",a1=".modal-dialog",l1=".modal-body",c1='[data-bs-toggle="modal"]',u1={backdrop:!0,focus:!0,keyboard:!0},f1={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class $r extends dn{constructor(e,t){super(e,t),this._dialog=Fe.findOne(a1,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Zl,this._addEventListeners()}static get Default(){return u1}static get DefaultType(){return f1}static get NAME(){return jT}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||de.trigger(this._element,Xp,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ud),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||de.trigger(this._element,ZT).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(fd),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])de.off(e,hn);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new $p({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new qp({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=Fe.findOne(l1,this._dialog);t&&(t.scrollTop=0),Us(this._element),this._element.classList.add(fd);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,de.trigger(this._element,QT,{relatedTarget:e})};this._queueCallback(i,this._dialog,this._isAnimated())}_addEventListeners(){de.on(this._element,i1,e=>{if(e.key===KT){if(this._config.keyboard){e.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),de.on(window,e1,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),de.on(this._element,n1,e=>{de.one(this._element,t1,t=>{if(!(this._element!==e.target||this._element!==t.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ud),this._resetAdjustments(),this._scrollBar.reset(),de.trigger(this._element,jp)})}_isAnimated(){return this._element.classList.contains(s1)}_triggerBackdropTransition(){if(de.trigger(this._element,JT).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;i==="hidden"||this._element.classList.contains(hl)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(hl),this._queueCallback(()=>{this._element.classList.remove(hl),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),i=t>0;if(i&&!e){const r=Qt()?"paddingLeft":"paddingRight";this._element.style[r]=`${t}px`}if(!i&&e){const r=Qt()?"paddingRight":"paddingLeft";this._element.style[r]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const i=$r.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof i[e]>"u")throw new TypeError(`No method named "${e}"`);i[e](t)}})}}de.on(document,r1,c1,function(n){const e=Hn(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),de.one(e,Xp,r=>{r.defaultPrevented||de.one(e,jp,()=>{Jr(this)&&this.focus()})});const t=Fe.findOne(o1);t&&$r.getInstance(t).hide(),$r.getOrCreateInstance(e).toggle(this)});aa($r);tn($r);const d1="offcanvas",h1="bs.offcanvas",Yn=`.${h1}`,Yp=".data-api",p1=`load${Yn}${Yp}`,m1="Escape",dd="show",hd="showing",pd="hiding",g1="offcanvas-backdrop",Kp=".offcanvas.show",_1=`show${Yn}`,v1=`shown${Yn}`,x1=`hide${Yn}`,md=`hidePrevented${Yn}`,Zp=`hidden${Yn}`,b1=`resize${Yn}`,y1=`click${Yn}${Yp}`,M1=`keydown.dismiss${Yn}`,S1='[data-bs-toggle="offcanvas"]',E1={backdrop:!0,keyboard:!0,scroll:!1},w1={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class mi extends dn{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return E1}static get DefaultType(){return w1}static get NAME(){return d1}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||de.trigger(this._element,_1,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Zl().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(hd);const i=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(dd),this._element.classList.remove(hd),de.trigger(this._element,v1,{relatedTarget:e})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown||de.trigger(this._element,x1).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(pd),this._backdrop.hide();const t=()=>{this._element.classList.remove(dd,pd),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Zl().reset(),de.trigger(this._element,Zp)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){de.trigger(this._element,md);return}this.hide()},t=Boolean(this._config.backdrop);return new $p({className:g1,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new qp({trapElement:this._element})}_addEventListeners(){de.on(this._element,M1,e=>{if(e.key===m1){if(!this._config.keyboard){de.trigger(this._element,md);return}this.hide()}})}static jQueryInterface(e){return this.each(function(){const t=mi.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}de.on(document,y1,S1,function(n){const e=Hn(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),pi(this))return;de.one(e,Zp,()=>{Jr(this)&&this.focus()});const t=Fe.findOne(Kp);t&&t!==e&&mi.getInstance(t).hide(),mi.getOrCreateInstance(e).toggle(this)});de.on(window,p1,()=>{for(const n of Fe.find(Kp))mi.getOrCreateInstance(n).show()});de.on(window,b1,()=>{for(const n of Fe.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&mi.getOrCreateInstance(n).hide()});aa(mi);tn(mi);const T1=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),A1=/^aria-[\w-]*$/i,C1=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,L1=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,D1=(n,e)=>{const t=n.nodeName.toLowerCase();return e.includes(t)?T1.has(t)?Boolean(C1.test(n.nodeValue)||L1.test(n.nodeValue)):!0:e.filter(i=>i instanceof RegExp).some(i=>i.test(t))},Jp={"*":["class","dir","id","lang","role",A1],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function P1(n,e,t){if(!n.length)return n;if(t&&typeof t=="function")return t(n);const r=new window.DOMParser().parseFromString(n,"text/html"),s=[].concat(...r.body.querySelectorAll("*"));for(const a of s){const o=a.nodeName.toLowerCase();if(!Object.keys(e).includes(o)){a.remove();continue}const l=[].concat(...a.attributes),c=[].concat(e["*"]||[],e[o]||[]);for(const u of l)D1(u,c)||a.removeAttribute(u.nodeName)}return r.body.innerHTML}const R1="TemplateFactory",I1={allowList:Jp,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},O1={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},N1={entry:"(string|element|function|null)",selector:"(string|element)"};class F1 extends Bs{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return I1}static get DefaultType(){return O1}static get NAME(){return R1}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[r,s]of Object.entries(this._config.content))this._setContent(e,s,r);const t=e.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&t.classList.add(...i.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,i]of Object.entries(e))super._typeCheckConfig({selector:t,entry:i},N1)}_setContent(e,t,i){const r=Fe.findOne(i,e);if(r){if(t=this._resolvePossibleFunction(t),!t){r.remove();return}if(Wn(t)){this._putElementInTemplate(hi(t),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(t);return}r.textContent=t}}_maybeSanitize(e){return this._config.sanitize?P1(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return typeof e=="function"?e(this):e}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const z1="tooltip",U1=new Set(["sanitize","allowList","sanitizeFn"]),pl="fade",B1="modal",bo="show",k1=".tooltip-inner",gd=`.${B1}`,_d="hide.bs.modal",us="hover",ml="focus",V1="click",G1="manual",H1="hide",W1="hidden",$1="show",q1="shown",j1="inserted",X1="click",Y1="focusin",K1="focusout",Z1="mouseenter",J1="mouseleave",Q1={AUTO:"auto",TOP:"top",RIGHT:Qt()?"left":"right",BOTTOM:"bottom",LEFT:Qt()?"right":"left"},eA={allowList:Jp,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},tA={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class es extends dn{constructor(e,t){if(typeof Ep>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return eA}static get DefaultType(){return tA}static get NAME(){return z1}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),de.off(this._element.closest(gd),_d,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=de.trigger(this._element,this.constructor.eventName($1)),i=(Cp(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!i)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(r),de.trigger(this._element,this.constructor.eventName(j1))),this._popper=this._createPopper(r),r.classList.add(bo),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))de.on(o,"mouseover",Oo);const a=()=>{de.trigger(this._element,this.constructor.eventName(q1)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(a,this.tip,this._isAnimated())}hide(){if(!this._isShown()||de.trigger(this._element,this.constructor.eventName(H1)).defaultPrevented)return;if(this._getTipElement().classList.remove(bo),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))de.off(r,"mouseover",Oo);this._activeTrigger[V1]=!1,this._activeTrigger[ml]=!1,this._activeTrigger[us]=!1,this._isHovered=null;const i=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),de.trigger(this._element,this.constructor.eventName(W1)))};this._queueCallback(i,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(pl,bo),t.classList.add(`bs-${this.constructor.NAME}-auto`);const i=kE(this.constructor.NAME).toString();return t.setAttribute("id",i),this._isAnimated()&&t.classList.add(pl),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new F1({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[k1]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(pl)}_isShown(){return this.tip&&this.tip.classList.contains(bo)}_createPopper(e){const t=typeof this._config.placement=="function"?this._config.placement.call(this,e,this._element):this._config.placement,i=Q1[t.toUpperCase()];return Bc(this._element,e,this._getPopperConfig(i))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_resolvePossibleFunction(e){return typeof e=="function"?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:i=>{this._getTipElement().setAttribute("data-popper-placement",i.state.placement)}}]};return{...t,...typeof this._config.popperConfig=="function"?this._config.popperConfig(t):this._config.popperConfig}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if(t==="click")de.on(this._element,this.constructor.eventName(X1),this._config.selector,i=>{this._initializeOnDelegatedTarget(i).toggle()});else if(t!==G1){const i=t===us?this.constructor.eventName(Z1):this.constructor.eventName(Y1),r=t===us?this.constructor.eventName(J1):this.constructor.eventName(K1);de.on(this._element,i,this._config.selector,s=>{const a=this._initializeOnDelegatedTarget(s);a._activeTrigger[s.type==="focusin"?ml:us]=!0,a._enter()}),de.on(this._element,r,this._config.selector,s=>{const a=this._initializeOnDelegatedTarget(s);a._activeTrigger[s.type==="focusout"?ml:us]=a._element.contains(s.relatedTarget),a._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},de.on(this._element.closest(gd),_d,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=$n.getDataAttributes(this._element);for(const i of Object.keys(t))U1.has(i)&&delete t[i];return e={...t,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:hi(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const t=es.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}tn(es);const nA="popover",iA=".popover-header",rA=".popover-body",sA={...es.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},oA={...es.DefaultType,content:"(null|string|element|function)"};class Hc extends es{static get Default(){return sA}static get DefaultType(){return oA}static get NAME(){return nA}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[iA]:this._getTitle(),[rA]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=Hc.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}tn(Hc);const aA="scrollspy",lA="bs.scrollspy",Wc=`.${lA}`,cA=".data-api",uA=`activate${Wc}`,vd=`click${Wc}`,fA=`load${Wc}${cA}`,dA="dropdown-item",vr="active",hA='[data-bs-spy="scroll"]',gl="[href]",pA=".nav, .list-group",xd=".nav-link",mA=".nav-item",gA=".list-group-item",_A=`${xd}, ${mA} > ${xd}, ${gA}`,vA=".dropdown",xA=".dropdown-toggle",bA={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},yA={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ua extends dn{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return bA}static get DefaultType(){return yA}static get NAME(){return aA}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=hi(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(t=>Number.parseFloat(t))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(de.off(this._config.target,vd),de.on(this._config.target,vd,gl,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const i=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(i.scrollTo){i.scrollTo({top:r,behavior:"smooth"});return}i.scrollTop=r}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(t=>this._observerCallback(t),e)}_observerCallback(e){const t=a=>this._targetLinks.get(`#${a.target.id}`),i=a=>{this._previousScrollData.visibleEntryTop=a.target.offsetTop,this._process(t(a))},r=(this._rootElement||document.documentElement).scrollTop,s=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const a of e){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(a));continue}const o=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&o){if(i(a),!r)return;continue}!s&&!o&&i(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=Fe.find(gl,this._config.target);for(const t of e){if(!t.hash||pi(t))continue;const i=Fe.findOne(t.hash,this._element);Jr(i)&&(this._targetLinks.set(t.hash,t),this._observableSections.set(t.hash,i))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(vr),this._activateParents(e),de.trigger(this._element,uA,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(dA)){Fe.findOne(xA,e.closest(vA)).classList.add(vr);return}for(const t of Fe.parents(e,pA))for(const i of Fe.prev(t,_A))i.classList.add(vr)}_clearActiveClass(e){e.classList.remove(vr);const t=Fe.find(`${gl}.${vr}`,e);for(const i of t)i.classList.remove(vr)}static jQueryInterface(e){return this.each(function(){const t=ua.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}de.on(window,fA,()=>{for(const n of Fe.find(hA))ua.getOrCreateInstance(n)});tn(ua);const MA="tab",SA="bs.tab",er=`.${SA}`,EA=`hide${er}`,wA=`hidden${er}`,TA=`show${er}`,AA=`shown${er}`,CA=`click${er}`,LA=`keydown${er}`,DA=`load${er}`,PA="ArrowLeft",bd="ArrowRight",RA="ArrowUp",yd="ArrowDown",Bi="active",Md="fade",_l="show",IA="dropdown",OA=".dropdown-toggle",NA=".dropdown-menu",vl=":not(.dropdown-toggle)",FA='.list-group, .nav, [role="tablist"]',zA=".nav-item, .list-group-item",UA=`.nav-link${vl}, .list-group-item${vl}, [role="tab"]${vl}`,Qp='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',xl=`${UA}, ${Qp}`,BA=`.${Bi}[data-bs-toggle="tab"], .${Bi}[data-bs-toggle="pill"], .${Bi}[data-bs-toggle="list"]`;class qr extends dn{constructor(e){super(e),this._parent=this._element.closest(FA),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),de.on(this._element,LA,t=>this._keydown(t)))}static get NAME(){return MA}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),i=t?de.trigger(t,EA,{relatedTarget:e}):null;de.trigger(e,TA,{relatedTarget:t}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(Bi),this._activate(Hn(e));const i=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(_l);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),de.trigger(e,AA,{relatedTarget:t})};this._queueCallback(i,e,e.classList.contains(Md))}_deactivate(e,t){if(!e)return;e.classList.remove(Bi),e.blur(),this._deactivate(Hn(e));const i=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(_l);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),de.trigger(e,wA,{relatedTarget:t})};this._queueCallback(i,e,e.classList.contains(Md))}_keydown(e){if(![PA,bd,RA,yd].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=[bd,yd].includes(e.key),i=kc(this._getChildren().filter(r=>!pi(r)),e.target,t,!0);i&&(i.focus({preventScroll:!0}),qr.getOrCreateInstance(i).show())}_getChildren(){return Fe.find(xl,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const i of t)this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),i=this._getOuterElement(e);e.setAttribute("aria-selected",t),i!==e&&this._setAttributeIfNotExists(i,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=Hn(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`#${e.id}`))}_toggleDropDown(e,t){const i=this._getOuterElement(e);if(!i.classList.contains(IA))return;const r=(s,a)=>{const o=Fe.findOne(s,i);o&&o.classList.toggle(a,t)};r(OA,Bi),r(NA,_l),i.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,i){e.hasAttribute(t)||e.setAttribute(t,i)}_elemIsActive(e){return e.classList.contains(Bi)}_getInnerElement(e){return e.matches(xl)?e:Fe.findOne(xl,e)}_getOuterElement(e){return e.closest(zA)||e}static jQueryInterface(e){return this.each(function(){const t=qr.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}de.on(document,CA,Qp,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!pi(this)&&qr.getOrCreateInstance(this).show()});de.on(window,DA,()=>{for(const n of Fe.find(BA))qr.getOrCreateInstance(n)});tn(qr);const kA="toast",VA="bs.toast",bi=`.${VA}`,GA=`mouseover${bi}`,HA=`mouseout${bi}`,WA=`focusin${bi}`,$A=`focusout${bi}`,qA=`hide${bi}`,jA=`hidden${bi}`,XA=`show${bi}`,YA=`shown${bi}`,KA="fade",Sd="hide",yo="show",Mo="showing",ZA={animation:"boolean",autohide:"boolean",delay:"number"},JA={animation:!0,autohide:!0,delay:5e3};class fa extends dn{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return JA}static get DefaultType(){return ZA}static get NAME(){return kA}show(){if(de.trigger(this._element,XA).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(KA);const t=()=>{this._element.classList.remove(Mo),de.trigger(this._element,YA),this._maybeScheduleHide()};this._element.classList.remove(Sd),Us(this._element),this._element.classList.add(yo,Mo),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown()||de.trigger(this._element,qA).defaultPrevented)return;const t=()=>{this._element.classList.add(Sd),this._element.classList.remove(Mo,yo),de.trigger(this._element,jA)};this._element.classList.add(Mo),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(yo),super.dispose()}isShown(){return this._element.classList.contains(yo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=t;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=t;break}}if(t){this._clearTimeout();return}const i=e.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){de.on(this._element,GA,e=>this._onInteraction(e,!0)),de.on(this._element,HA,e=>this._onInteraction(e,!1)),de.on(this._element,WA,e=>this._onInteraction(e,!0)),de.on(this._element,$A,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=fa.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}aa(fa);tn(fa);P_(KS).mount("#app");
