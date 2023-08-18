(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},_=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+_(i,2,"0")+":"+_(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:a,D:d,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",y={};y[g]=h;var b=function(e){return e instanceof T},$=function e(t,n,i){var s;if(!t)return g;if("string"==typeof t){var r=t.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;y[o]=t,s=o}return!i&&s&&(g=s),s||!i&&g},M=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new T(n)},w=m;w.l=$,w.i=b,w.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var T=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var _=h.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return w},_.isValid=function(){return!(this.$d.toString()===p)},_.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return M(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<M(e)},_.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,c=!!w.u(t)||t,p=w.p(e),f=function(e,t){var i=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},v=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,_=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(p){case u:return c?f(1,0):f(31,11);case l:return c?f(1,_):f(0,_+1);case o:var y=this.$locale().weekStart||0,b=(h<y?h+7:h)-y;return f(c?m-b:m+(6-b),_);case a:case d:return v(g+"Hours",0);case r:return v(g+"Minutes",1);case s:return v(g+"Seconds",2);case i:return v(g+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var o,c=w.p(e),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[d]=p+"Date",o[l]=p+"Month",o[u]=p+"FullYear",o[r]=p+"Hours",o[s]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[c],v=c===a?this.$D+(t-this.$W):t;if(c===l||c===u){var h=this.clone().set(d,1);h.$d[f](v),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[w.p(e)]()},_.add=function(n,c){var d,p=this;n=Number(n);var f=w.p(c),v=function(e){var t=M(p);return w.w(t.date(t.date()+Math.round(e*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===a)return v(1);if(f===o)return v(7);var h=(d={},d[s]=e,d[r]=t,d[i]=1e3,d)[f]||1,_=this.$d.getTime()+n*h;return w.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},f=function(e){return w.s(r%12||12,e,"0")},h=u||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(v,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return o+1;case"MM":return w.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,c,3);case"MMMM":return d(c,o);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(r);case"HH":return w.s(r,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return h(r,a,!0);case"A":return h(r,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,d,p){var f,v=this,h=w.p(d),_=M(n),m=(_.utcOffset()-this.utcOffset())*e,g=this-_,y=function(){return w.m(v,_)};switch(h){case u:f=y()/12;break;case l:f=y();break;case c:f=y()/3;break;case o:f=(g-m)/6048e5;break;case a:f=(g-m)/864e5;break;case r:f=g/t;break;case s:f=g/e;break;case i:f=g/1e3;break;default:f=g}return p?f:w.a(f)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return y[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},_.clone=function(){return w.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},h}(),S=T.prototype;return M.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,T,M),e.$i=!0),M},M.locale=$,M.isDayjs=b,M.unix=function(e){return M(1e3*e)},M.en=y[g],M.Ls=y,M.p={},M}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}class i{getTemplate(){return' <section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class s{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n    <div class="trip-filters__filter">\n      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n    </div>\n\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}var r=n(484),a=n.n(r);const o="HH:mm";function l(e){return e[Math.floor(Math.random()*e.length)]}function c(e){return e?a()(e).format(o):""}function u(e){return e<10?`0${e}`:e}class d{constructor({point:e}){this.point=e}getTemplate(){return function(e){const{basePrice:t,destination:n,type:i,dateFrom:s,dateTo:r,isFavorite:o,offers:l}=e,d=(p=s)?a()(p).format("D MMMM"):"";var p;const f=c(s),v=c(r);var h,_;const m=function(e){const t=e%60;return`${u(Math.floor(e/60))}H ${u(t)}M`}((h=s,_=r,a()(_).diff(a()(h),"minute"))),g=o?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn";return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="2019-03-18">${d}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${i} ${n.name}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">${f}</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">${v}</time>\n          </p>\n          <p class="event__duration">${m}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${t}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${y=l,y.map((e=>`<li class="event__offer">\n      <span class="event__offer-title">${e.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n      </li>`))}\n        </ul>\n        <button class="${g}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`;var y}(this.point)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class p{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class f{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const v=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],h=["Paris","Kyoto","Venice","Prague","Cape Town","Sydney","Santorini","Rio de Janeiro","Quebec City","Budapest"],_=["A bustling metropolis with a mix of modern skyscrapers and historic temples.","A coastal city known for its picturesque harbors and vibrant nightlife.","Nestled among mountains, this city boasts stunning views and serene parks.","Famed for its canals, bridges, and artistic heritage.","A city where ancient traditions meet cutting-edge technology.","Home to grand monuments, wide boulevards, and charming cafés.","Known for its vibrant street markets and a rich tapestry of cultures.","A desert oasis with a skyline that reaches for the clouds.","Steeped in history, offering cobblestone streets and quaint architecture.","A city that never sleeps, always buzzing with energy and excitement."],m=["Sunlit city square","Rainy alleyway","Historic downtown","Skyscraper silhouette","Bustling marketplace","Tranquil city park","Glowing streetlights","Iconic city bridge","Cobblestone streets","City skyline at dusk"],g={basePrice:1100,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:11,isFavorite:!1,offers:[1],type:"taxi"};class y{constructor({point:e=g}){this.point=e}getTemplate(){return function(e){const{destination:t,type:n}=e;return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${v.map((e=>{const t=e.toLowerCase();return`<div class="event__type-item">\n          <input id="event-type-${t}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}">\n          <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${e}</label>\n         </div>`})).join("")}\n\n\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              Flight\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n            <datalist id="destination-list-1">\n              <option value="Amsterdam"></option>\n              <option value="Geneva"></option>\n              <option value="Chamonix"></option>\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Cancel</button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n            <div class="event__available-offers">\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n                <label class="event__offer-label" for="event-offer-luggage-1">\n                  <span class="event__offer-title">Add luggage</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">30</span>\n                </label>\n              </div>\n\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n                <label class="event__offer-label" for="event-offer-comfort-1">\n                  <span class="event__offer-title">Switch to comfort class</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">100</span>\n                </label>\n              </div>\n\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n                <label class="event__offer-label" for="event-offer-meal-1">\n                  <span class="event__offer-title">Add meal</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">15</span>\n                </label>\n              </div>\n\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n                <label class="event__offer-label" for="event-offer-seats-1">\n                  <span class="event__offer-title">Choose seats</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">5</span>\n                </label>\n              </div>\n\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n                <label class="event__offer-label" for="event-offer-train-1">\n                  <span class="event__offer-title">Travel by train</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">40</span>\n                </label>\n              </div>\n            </div>\n          </section>\n\n          <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n\n            <div class="event__photos-container">\n              <div class="event__photos-tape">\n                <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n                <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n                <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n                <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n                <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n              </div>\n            </div>\n          </section>\n        </section>\n      </form>\n    </li>`}(this.point)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const b=new class{constructor(e,t){this.min=e,this.max=t,this.generatedNumbers=new Set}generate(){if(this.generatedNumbers.size===this.max-this.min+1)throw new Error("All numbers in the range have been generated");let e;do{e=Math.floor(Math.random()*(this.max-this.min+1))+this.min}while(this.generatedNumbers.has(e));return this.generatedNumbers.add(e),e}}(1,10),$=[{id:11,description:l(_),name:l(h),pictures:[{src:`https://loremflickr.com/248/152?random=${b.generate()}`,description:l(m)}]},{id:12,description:l(_),name:l(h),pictures:[{src:`https://loremflickr.com/248/152?random=${b.generate()}`,description:l(m)}]},{id:13,description:l(_),name:l(h),pictures:[{src:`https://loremflickr.com/248/152?random=${b.generate()}`,description:l(m)}]},{id:14,description:l(_),name:l(h),pictures:[{src:`https://loremflickr.com/248/152?random=${b.generate()}`,description:l(m)}]}],M=[{type:l(v),offers:[{id:1,title:"Upgrade 1",price:120}]},{type:l(v),offers:[{id:2,title:"Upgrade 2",price:220}]},{type:l(v),offers:[{id:3,title:"Upgrade 3",price:320}]},{type:l(v),offers:[{id:4,title:"Upgrade 4",price:420}]}],w=[{id:b.generate(),basePrice:1100,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:11,isFavorite:!1,offers:[1,2],type:l(v)},{id:b.generate(),basePrice:2100,dateFrom:"2019-08-10T10:44:56.845Z",dateTo:"2019-08-11T11:44:13.375Z",destination:12,isFavorite:!0,offers:[2],type:l(v)},{id:b.generate(),basePrice:3100,dateFrom:"2019-09-10T20:55:56.845Z",dateTo:"2019-09-11T11:22:15.375Z",destination:13,isFavorite:!1,offers:[3],type:l(v)},{id:b.generate(),basePrice:4100,dateFrom:"2019-07-12T12:45:56.845Z",dateTo:"2019-07-13T11:12:33.375Z",destination:14,isFavorite:!1,offers:[4],type:l(v)}].map((e=>(e.offers=e.offers.map((e=>{for(const t of M){const n=t.offers.find((t=>t.id===e));if(n)return n}return null})),e.destination=$.find((t=>t.id===e.destination)),e)));function T(){return l(w)}const S=document.querySelector(".trip-main"),k=document.querySelector(".trip-events"),D=new class{points=Array.from({length:7},T);getPoints(){return this.points}},x=new class{listInfo=new i;ListFilter=new s;constructor({siteMainContainer:e}){this.siteMainContainer=e}init(){t(this.listInfo,this.siteMainContainer,"afterbegin"),t(this.ListFilter,this.siteMainContainer)}}({siteMainContainer:S}),E=new class{listSort=new f;containerForEvent=new p;constructor({container:e,pointModel:t}){this.container=e,this.pointModel=t}init(){this.boardpoints=[...this.pointModel.getPoints()],t(this.listSort,this.container),t(this.containerForEvent,this.container),t(new y({point:this.boardpoints[0]}),this.containerForEvent.getElement());for(let e=1;e<this.boardpoints.length;e++)t(new d({point:this.boardpoints[e]}),this.containerForEvent.getElement())}}({container:k,pointModel:D});x.init(),E.init()})()})();
//# sourceMappingURL=bundle.074c3bd60c8b8727dae6.js.map