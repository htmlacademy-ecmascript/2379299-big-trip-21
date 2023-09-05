(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",r="minute",s="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},_={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+v(i,2,"0")+":"+v(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,l),s=n-r<0,a=t.clone().add(i+(s?-1:1),l);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:a,D:d,h:s,m:r,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",g={};g[y]=m;var $=function(e){return e instanceof T},b=function e(t,n,i){var r;if(!t)return y;if("string"==typeof t){var s=t.toLowerCase();g[s]&&(r=s),n&&(g[s]=n,r=s);var a=t.split("-");if(!r&&a.length>1)return e(a[0])}else{var o=t.name;g[o]=t,r=o}return!i&&r&&(y=r),r||!i&&y},M=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new T(n)},w=_;w.l=b,w.i=$,w.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var T=function(){function m(e){this.$L=b(e.locale,null,!0),this.parse(e)}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return M(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<M(e)},v.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,c=!!w.u(t)||t,p=w.p(e),f=function(e,t){var i=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},h=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return c?f(1,0):f(31,11);case l:return c?f(1,v):f(0,v+1);case o:var g=this.$locale().weekStart||0,$=(m<g?m+7:m)-g;return f(c?_-$:_+(6-$),v);case a:case d:return h(y+"Hours",0);case s:return h(y+"Minutes",1);case r:return h(y+"Seconds",2);case i:return h(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var o,c=w.p(e),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[d]=p+"Date",o[l]=p+"Month",o[u]=p+"FullYear",o[s]=p+"Hours",o[r]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[c],h=c===a?this.$D+(t-this.$W):t;if(c===l||c===u){var m=this.clone().set(d,1);m.$d[f](h),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[w.p(e)]()},v.add=function(n,c){var d,p=this;n=Number(n);var f=w.p(c),h=function(e){var t=M(p);return w.w(t.date(t.date()+Math.round(e*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===a)return h(1);if(f===o)return h(7);var m=(d={},d[r]=e,d[s]=t,d[i]=1e3,d)[f]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=w.z(this),s=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,r,s){return e&&(e[n]||e(t,i))||r[n].slice(0,s)},f=function(e){return w.s(s%12||12,e,"0")},m=u||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(h,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return o+1;case"MM":return w.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,c,3);case"MMMM":return d(c,o);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(s);case"HH":return w.s(s,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,p){var f,h=this,m=w.p(d),v=M(n),_=(v.utcOffset()-this.utcOffset())*e,y=this-v,g=function(){return w.m(h,v)};switch(m){case u:f=g()/12;break;case l:f=g();break;case c:f=g()/3;break;case o:f=(y-_)/6048e5;break;case a:f=(y-_)/864e5;break;case s:f=y/t;break;case r:f=y/e;break;case i:f=y/1e3;break;default:f=y}return p?f:w.a(f)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return g[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=b(e,t,!0);return i&&(n.$L=i),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),k=T.prototype;return M.prototype=k,[["$ms",n],["$s",i],["$m",r],["$H",s],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,T,M),e.$i=!0),M},M.locale=b,M.isDayjs=$,M.unix=function(e){return M(1e3*e)},M.en=g[y],M.Ls=g,M.p={},M}()}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}class i{getTemplate(){return' <section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class r{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n    <div class="trip-filters__filter">\n      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n    </div>\n\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}var s=n(484),a=n.n(s);const o="HH:mm";function l(e){return e[Math.floor(Math.random()*e.length)]}function c(e){return e?a()(e).format(o):""}function u(e){return e<10?`0${e}`:e}function d(e){return a()(e).format("DD/MM/YY HH:mm")}class p{constructor({point:e}){this.point=e}getTemplate(){return function(e){const{basePrice:t,destination:n,type:i,dateFrom:r,dateTo:s,isFavorite:o,offers:l}=e,d=(p=r)?a()(p).format("D MMMM"):"";var p;const f=c(r),h=c(s);var m,v;const _=function(e){const t=e%60;return`${u(Math.floor(e/60))}H ${u(t)}M`}((m=r,v=s,a()(v).diff(a()(m),"minute"))),y=o?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn";return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="2019-03-18">${d}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${i} ${n.name}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">${f}</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">${h}</time>\n          </p>\n          <p class="event__duration">${_}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${t}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${g=l,g.map((e=>`<li class="event__offer">\n      <span class="event__offer-title">${e.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n      </li>`)).join("")}\n        </ul>\n        <button class="${y}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`;var g}(this.point)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class f{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class h{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const m=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],v=["Paris","Kyoto","Venice","Prague","Cape Town","Sydney","Santorini","Rio de Janeiro","Quebec City","Budapest"],_=["A bustling metropolis with a mix of modern skyscrapers and historic temples.","A coastal city known for its picturesque harbors and vibrant nightlife.","Nestled among mountains, this city boasts stunning views and serene parks.","Famed for its canals, bridges, and artistic heritage.","A city where ancient traditions meet cutting-edge technology.","Home to grand monuments, wide boulevards, and charming cafés.","Known for its vibrant street markets and a rich tapestry of cultures.","A desert oasis with a skyline that reaches for the clouds.","Steeped in history, offering cobblestone streets and quaint architecture.","A city that never sleeps, always buzzing with energy and excitement."],y=["Sunlit city square","Rainy alleyway","Historic downtown","Skyscraper silhouette","Bustling marketplace","Tranquil city park","Glowing streetlights","Iconic city bridge","Cobblestone streets","City skyline at dusk"],g=new class{constructor(e,t){this.min=e,this.max=t,this.generatedNumbers=new Set}generate(){if(this.generatedNumbers.size===this.max-this.min+1)throw new Error("All numbers in the range have been generated");let e;do{e=Math.floor(Math.random()*(this.max-this.min+1))+this.min}while(this.generatedNumbers.has(e));return this.generatedNumbers.add(e),e}}(1,100),$=[{id:11,description:l(_),name:l(v),pictures:[{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)},{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)},{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)},{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)}]},{id:12,description:l(_),name:l(v),pictures:[{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)},{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)},{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)},{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)},{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)}]},{id:13,description:l(_),name:l(v),pictures:[{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)},{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)},{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)},{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)}]},{id:14,description:l(_),name:l(v),pictures:[{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)},{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)},{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)},{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)},{src:`https://loremflickr.com/248/152?random=${g.generate()}`,description:l(y)}]}],b=[{type:l(m),offers:[{id:1,title:"Upgrade 1",price:120}]},{type:l(m),offers:[{id:2,title:"Upgrade 2",price:220}]},{type:l(m),offers:[{id:3,title:"Upgrade 3",price:320}]},{type:l(m),offers:[{id:4,title:"Upgrade 4",price:420}]}],M=[{id:g.generate(),basePrice:1100,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:11,isFavorite:!1,offers:[1,2],type:l(m)},{id:g.generate(),basePrice:2100,dateFrom:"2019-08-10T10:44:56.845Z",dateTo:"2019-08-11T11:44:13.375Z",destination:12,isFavorite:!0,offers:[2],type:l(m)},{id:g.generate(),basePrice:3100,dateFrom:"2019-09-10T20:55:56.845Z",dateTo:"2019-09-11T11:22:15.375Z",destination:13,isFavorite:!1,offers:[3],type:l(m)},{id:g.generate(),basePrice:4100,dateFrom:"2019-07-12T12:45:56.845Z",dateTo:"2019-07-13T11:12:33.375Z",destination:14,isFavorite:!1,offers:[4],type:l(m)}].map((e=>(e.offers=e.offers.map((e=>{for(const t of b){const n=t.offers.find((t=>t.id===e));if(n)return n}return null})),e.destination=$.find((t=>t.id===e.destination)),e)));function w(){return l(M)}const T={basePrice:1100,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:11,isFavorite:!1,offers:[1],type:"taxi"};class k{constructor({point:e=T}){this.point=e}getTemplate(){return function(e){const{destination:t,type:n,dateFrom:i,dateTo:r,basePrice:s,offers:a}=e,o=d(i),l=d(r),c=t.pictures.reduce(((e,t)=>{const{src:n,description:i}=t;return e+`<img class="event__photo" src="${n}" alt="${i}">`}),""),u=m.reduce(((e,t)=>{const i=t.toLowerCase();return e+`<div class="event__type-item">\n      <input id="event-type-${i}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${i}"${t===n?"checked":""} >\n      <label class="event__type-label  event__type-label--${i}" for="event-type-${i}-1">${t}</label>\n      </div>`}),""),p=v.reduce(((e,t)=>e+`<option value="${t}"></option>`),""),f=(h=a,b.reduce(((e,t)=>(t.offers.forEach((t=>{const{title:n,price:i}=t,r=n.toLowerCase(),s=h.find((e=>e.title===n));e+=`<div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${r}-1" type="checkbox" name="event-offer-${r}" ${s?"checked":""}>\n        <label class="event__offer-label" for="event-offer-${r}-1">\n          <span class="event__offer-title">${n}class</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${i}</span>\n        </label>\n      </div>`})),e)),""));var h;return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${u}\n\n\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${n}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${t.name}" list="destination-list-1">\n            <datalist id="destination-list-1">\n            ${p}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${o}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${l}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${s}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Cancel</button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n            <div class="event__available-offers">\n            ${f}\n            </div>\n          </section>\n\n\n          <section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">${t.name}</h3>\n          <p class="event__destination-description">${t.description}</p>\n\n          <div class="event__photos-container">\n            <div class="event__photos-tape">\n              ${c}\n            </div>\n          </div>\n        </section>\n\n\n        </section>\n      </form>\n    </li>`}(this.point)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const S=document.querySelector(".trip-main"),D=document.querySelector(".trip-events"),x=new class{points=Array.from({length:7},w);getPoints(){return this.points}},E=new class{listInfo=new i;ListFilter=new r;constructor({siteMainContainer:e}){this.siteMainContainer=e}init(){t(this.listInfo,this.siteMainContainer,"afterbegin"),t(this.ListFilter,this.siteMainContainer)}}({siteMainContainer:S}),O=new class{listSort=new h;containerForEvent=new f;constructor({container:e,pointModel:t}){this.container=e,this.pointModel=t}init(){this.boardpoints=[...this.pointModel.getPoints()],t(this.listSort,this.container),t(this.containerForEvent,this.container),t(new k({point:this.boardpoints[0]}),this.containerForEvent.getElement());for(let e=1;e<this.boardpoints.length;e++)t(new p({point:this.boardpoints[e]}),this.containerForEvent.getElement())}}({container:D,pointModel:x});E.init(),O.init()})()})();
//# sourceMappingURL=bundle.c80492174e2ed1237c19.js.map