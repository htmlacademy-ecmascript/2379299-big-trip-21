(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(537),i=n.n(r),s=n(645),a=n.n(s)()(i());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&a[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),s="/*# ".concat(i," */");return[t].concat([s]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",r="second",i="minute",s="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},_={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),s=n-i<0,a=t.clone().add(r+(s?-1:1),l);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:a,D:d,h:s,m:i,s:r,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=h;var g=function(e){return e instanceof k},$=function e(t,n,r){var i;if(!t)return y;if("string"==typeof t){var s=t.toLowerCase();b[s]&&(i=s),n&&(b[s]=n,i=s);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var o=t.name;b[o]=t,i=o}return!r&&i&&(y=i),i||!r&&y},w=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},M=_;M.l=$,M.i=g,M.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var v=h.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(f);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return w(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<w(e)},v.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,c=!!M.u(t)||t,p=M.p(e),f=function(e,t){var r=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?r:r.endOf(a)},m=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return c?f(1,0):f(31,11);case l:return c?f(1,v):f(0,v+1);case o:var b=this.$locale().weekStart||0,g=(h<b?h+7:h)-b;return f(c?_-g:_+(6-g),v);case a:case d:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case r:return m(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var o,c=M.p(e),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[d]=p+"Date",o[l]=p+"Month",o[u]=p+"FullYear",o[s]=p+"Hours",o[i]=p+"Minutes",o[r]=p+"Seconds",o[n]=p+"Milliseconds",o)[c],m=c===a?this.$D+(t-this.$W):t;if(c===l||c===u){var h=this.clone().set(d,1);h.$d[f](m),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[M.p(e)]()},v.add=function(n,c){var d,p=this;n=Number(n);var f=M.p(c),m=function(e){var t=w(p);return M.w(t.date(t.date()+Math.round(e*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===a)return m(1);if(f===o)return m(7);var h=(d={},d[i]=e,d[s]=t,d[r]=1e3,d)[f]||1,v=this.$d.getTime()+n*h;return M.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),s=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},f=function(e){return M.s(s%12||12,e,"0")},h=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return M.s(t.$y,4,"0");case"M":return o+1;case"MM":return M.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,c,3);case"MMMM":return d(c,o);case"D":return t.$D;case"DD":return M.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(s);case"HH":return M.s(s,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return h(s,a,!0);case"A":return h(s,a,!1);case"m":return String(a);case"mm":return M.s(a,2,"0");case"s":return String(t.$s);case"ss":return M.s(t.$s,2,"0");case"SSS":return M.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,p){var f,m=this,h=M.p(d),v=w(n),_=(v.utcOffset()-this.utcOffset())*e,y=this-v,b=function(){return M.m(m,v)};switch(h){case u:f=b()/12;break;case l:f=b();break;case c:f=b()/3;break;case o:f=(y-_)/6048e5;break;case a:f=(y-_)/864e5;break;case s:f=y/t;break;case i:f=y/e;break;case r:f=y/1e3;break;default:f=y}return p?f:M.a(f)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return b[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},h}(),S=k.prototype;return w.prototype=S,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,k,w),e.$i=!0),w},w.locale=$,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=b[y],w.Ls=b,w.p={},w}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},a=[],o=0;o<e.length;o++){var l=e[o],c=r.base?l[0]+r.base:l[0],u=s[c]||0,d="".concat(c," ").concat(u);s[c]=u+1;var p=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=i(f,r);r.byIndex=o,t.splice(o,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var s=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var o=n(s[a]);t[o].references--}for(var l=r(e,i),c=0;c<s.length;c++){var u=n(s[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}s=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={id:r,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";function e(e,t,n="beforeend"){if(!(e instanceof y))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function t(e,t){if(!(e instanceof y&&t instanceof y))throw new Error("Can replace only components");const n=e.element,r=t.element,i=r.parentElement;if(null===i)throw new Error("Parent element doesn't exist");i.replaceChild(n,r)}var r=n(379),i=n.n(r),s=n(795),a=n.n(s),o=n(569),l=n.n(o),c=n(565),u=n.n(c),d=n(216),p=n.n(d),f=n(589),m=n.n(f),h=n(10),v={};v.styleTagTransform=m(),v.setAttributes=u(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),i()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const _="shake";class y{#e=null;constructor(){if(new.target===y)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(_),setTimeout((()=>{this.element.classList.remove(_),e?.()}),600)}}class b extends y{_state={};updateElement(e){e&&(this._setState(e),this.#t())}_restoreHandlers(){throw new Error("Abstract method not implemented: restoreHandlers")}_setState(e){this._state=structuredClone({...this._state,...e})}#t(){const e=this.element,t=e.parentElement;this.removeElement();const n=this.element;t.replaceChild(n,e),this._restoreHandlers()}}class g extends b{get template(){return' <section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>'}}class $ extends b{get template(){return'<form class="trip-filters" action="#" method="get">\n    <div class="trip-filters__filter">\n      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n    </div>\n\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>'}}var w=n(484),M=n.n(w);const k="HH:mm";function S(e){return e[Math.floor(Math.random()*e.length)]}function A(e){return e?M()(e).format(k):""}function E(e){return e<10?`0${e}`:e}function x(e){return M()(e).format("DD/MM/YY HH:mm")}class C extends b{#n=null;#r=null;constructor({point:e,onClick:t}){super(),this.#r=e,this.#n=t,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#i)}get template(){return function(e){const{basePrice:t,destination:n,type:r,dateFrom:i,dateTo:s,isFavorite:a,offers:o}=e,l=(c=i)?M()(c).format("D MMMM"):"";var c;const u=A(i),d=A(s);var p,f;const m=function(e){const t=e%60;return`${E(Math.floor(e/60))}H ${E(t)}M`}((p=i,f=s,M()(f).diff(M()(p),"minute"))),h=a?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn";return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="2019-03-18">${l}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${r} ${n.name}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">${u}</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">${d}</time>\n          </p>\n          <p class="event__duration">${m}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${t}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${v=o,v.map((e=>`<li class="event__offer">\n      <span class="event__offer-title">${e.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n      </li>`)).join("")}\n        </ul>\n        <button class="${h}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`;var v}(this.#r)}#i=e=>{e.preventDefault(),this.#n()}}class T extends b{get template(){return'<ul class="trip-events__list"></ul>'}}class D extends b{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}}const O=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],F=["Paris","Kyoto","Venice","Prague","Cape Town","Sydney","Santorini","Rio de Janeiro","Quebec City","Budapest"],H=["A bustling metropolis with a mix of modern skyscrapers and historic temples.","A coastal city known for its picturesque harbors and vibrant nightlife.","Nestled among mountains, this city boasts stunning views and serene parks.","Famed for its canals, bridges, and artistic heritage.","A city where ancient traditions meet cutting-edge technology.","Home to grand monuments, wide boulevards, and charming cafés.","Known for its vibrant street markets and a rich tapestry of cultures.","A desert oasis with a skyline that reaches for the clouds.","Steeped in history, offering cobblestone streets and quaint architecture.","A city that never sleeps, always buzzing with energy and excitement."],L=["Sunlit city square","Rainy alleyway","Historic downtown","Skyscraper silhouette","Bustling marketplace","Tranquil city park","Glowing streetlights","Iconic city bridge","Cobblestone streets","City skyline at dusk"],P=new class{constructor(e,t){this.min=e,this.max=t,this.generatedNumbers=new Set}generate(){if(this.generatedNumbers.size===this.max-this.min+1)throw new Error("All numbers in the range have been generated");let e;do{e=Math.floor(Math.random()*(this.max-this.min+1))+this.min}while(this.generatedNumbers.has(e));return this.generatedNumbers.add(e),e}}(1,100),B=[{id:11,description:S(H),name:S(F),pictures:[{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)},{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)},{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)},{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)}]},{id:12,description:S(H),name:S(F),pictures:[{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)},{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)},{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)},{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)},{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)}]},{id:13,description:S(H),name:S(F),pictures:[{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)},{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)},{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)},{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)}]},{id:14,description:S(H),name:S(F),pictures:[{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)},{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)},{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)},{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)},{src:`https://loremflickr.com/248/152?random=${P.generate()}`,description:S(L)}]}],I=[{type:S(O),offers:[{id:1,title:"Upgrade 1",price:120}]},{type:S(O),offers:[{id:2,title:"Upgrade 2",price:220}]},{type:S(O),offers:[{id:3,title:"Upgrade 3",price:320}]},{type:S(O),offers:[{id:4,title:"Upgrade 4",price:420}]}],Z=[{id:P.generate(),basePrice:1100,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:11,isFavorite:!1,offers:[1,2],type:S(O)},{id:P.generate(),basePrice:2100,dateFrom:"2019-08-10T10:44:56.845Z",dateTo:"2019-08-11T11:44:13.375Z",destination:12,isFavorite:!0,offers:[2],type:S(O)},{id:P.generate(),basePrice:3100,dateFrom:"2019-09-10T20:55:56.845Z",dateTo:"2019-09-11T11:22:15.375Z",destination:13,isFavorite:!1,offers:[3],type:S(O)},{id:P.generate(),basePrice:4100,dateFrom:"2019-07-12T12:45:56.845Z",dateTo:"2019-07-13T11:12:33.375Z",destination:14,isFavorite:!1,offers:[4],type:S(O)}].map((e=>(e.offers=e.offers.map((e=>{for(const t of I){const n=t.offers.find((t=>t.id===e));if(n)return n}return null})),e.destination=B.find((t=>t.id===e.destination)),e)));function N(){return S(Z)}const Y={basePrice:1100,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:11,isFavorite:!1,offers:[1],type:"taxi"};class U extends b{#r=null;#s=null;constructor({point:e=Y,onFormSubmit:t}){super(),this.#r=e,this.#s=t,this.element.querySelector("form").addEventListener("submit",this.#a)}get template(){return function(e){const{destination:t,type:n,dateFrom:r,dateTo:i,basePrice:s,offers:a}=e,o=x(r),l=x(i),c=t.pictures.reduce(((e,t)=>{const{src:n,description:r}=t;return e+`<img class="event__photo" src="${n}" alt="${r}">`}),""),u=O.reduce(((e,t)=>{const r=t.toLowerCase();return e+`<div class="event__type-item">\n      <input id="event-type-${r}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${r}"${t===n?"checked":""} >\n      <label class="event__type-label  event__type-label--${r}" for="event-type-${r}-1">${t}</label>\n      </div>`}),""),d=F.reduce(((e,t)=>e+`<option value="${t}"></option>`),""),p=(f=a,I.reduce(((e,t)=>(t.offers.forEach((t=>{const{title:n,price:r}=t,i=n.toLowerCase(),s=f.find((e=>e.title===n));e+=`<div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${i}-1" type="checkbox" name="event-offer-${i}" ${s?"checked":""}>\n        <label class="event__offer-label" for="event-offer-${i}-1">\n          <span class="event__offer-title">${n}class</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${r}</span>\n        </label>\n      </div>`})),e)),""));var f;return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${u}\n\n\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${n}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${t.name}" list="destination-list-1">\n            <datalist id="destination-list-1">\n            ${d}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${o}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${l}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${s}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Cancel</button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n            <div class="event__available-offers">\n            ${p}\n            </div>\n          </section>\n\n\n          <section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">${t.name}</h3>\n          <p class="event__destination-description">${t.description}</p>\n\n          <div class="event__photos-container">\n            <div class="event__photos-tape">\n              ${c}\n            </div>\n          </div>\n        </section>\n\n\n        </section>\n      </form>\n    </li>`}(this.#r)}#a=e=>{e.preventDefault(),this.#s()}}const j=document.querySelector(".trip-main"),q=document.querySelector(".trip-events"),W=new class{#o=Array.from({length:7},N);get points(){return this.#o}},z=new class{#l=null;#c=new g;#u=new $;constructor({siteMainContainer:e}){this.#l=e}init(){e(this.#c,this.#l,"afterbegin"),e(this.#u,this.#l)}}({siteMainContainer:j}),R=new class{#d=null;#p=null;#f=new D;#m=new T;#h=[];constructor({container:e,pointModel:t}){this.#d=e,this.#p=t}init(){this.#h=[...this.#p.points],e(this.#f,this.#d),e(this.#m,this.#d);for(let e=0;e<this.#h.length;e++)this.#v(this.#h[e])}#v(n){const r=e=>{"Escape"===e.key&&(e.preventDefault(),a(),document.removeEventListener("keydown",r))},i=new C({point:n,onClick:()=>{t(s,i),document.addEventListener("keydown",r)}}),s=new U({point:n,onFormSubmit:()=>{a(),document.removeEventListener("keydown",r)}});function a(){t(i,s)}e(i,this.#m.element)}}({container:q,pointModel:W});z.init(),R.init()})()})();
//# sourceMappingURL=bundle.cfa2cba51041d9171cce.js.map