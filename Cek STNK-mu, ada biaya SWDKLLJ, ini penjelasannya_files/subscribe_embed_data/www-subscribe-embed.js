(function(){var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ca(a,b){if(b){for(var c=ba,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&aa(c,d,{configurable:!0,writable:!0,value:f})}}
ca("Reflect.apply",function(a){if(a)return a;var b=Function.prototype.apply;return function(a,d,e){return b.call(a,d,e)}});
ca("Reflect.construct",function(a){return a?a:function(a,c,d){void 0===d&&(d=a);d=Object.create(d.prototype||Object.prototype);return Reflect.apply(a,d,c)||d}});
var m=this;function da(a){return void 0!==a}
function p(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function ea(){}
function fa(a){a.ea=void 0;a.A=function(){return a.ea?a.ea:a.ea=new a}}
function ga(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ha(a){var b=ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function r(a){return"string"==typeof a}
function ia(a){return"number"==typeof a}
function ja(a){return"function"==ga(a)}
function la(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ma(a){return a[na]||(a[na]=++oa)}
var na="closure_uid_"+(1E9*Math.random()>>>0),oa=0;function pa(a,b,c){return a.call.apply(a.bind,arguments)}
function qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=pa:t=qa;return t.apply(null,arguments)}
function ra(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var sa=Date.now||function(){return+new Date};
function v(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&da(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function w(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Vb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var ta=window,ua=document,va=ta.location;function wa(){}
var xa=/\[native code\]/;function x(a,b,c){return a[b]=a[b]||c}
function ya(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function za(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Aa(){var a;if((a=Object.create)&&xa.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Ba=x(ta,"gapi",{});var y;y=x(ta,"___jsl",Aa());x(y,"I",0);x(y,"hel",10);function Ca(){var a=va.href;if(y.dpo)var b=y.h;else{b=y.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Da(a){var b=x(y,"PQ",[]);y.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Ea(a){return x(x(y,"H",Aa()),a,Aa())}
;var Fa=x(y,"perf",Aa());x(Fa,"g",Aa());var Ga=x(Fa,"i",Aa());x(Fa,"r",[]);Aa();Aa();function Ha(a,b,c){b&&0<b.length&&(b=Ia(b),c&&0<c.length&&(b+="___"+Ia(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=x(Ga,"_p",Aa()),x(b,c,Aa())[a]=(new Date).getTime(),b=Fa.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Ia(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Ja=Aa(),Ka=[];function La(a){throw Error("Bad hint"+(a?": "+a:""));}
Ka.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?y[b]=x(y,b,[]).concat(c):x(y,b,c)}if(b=a.u)a=x(y,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Ma=/^(\/[a-zA-Z0-9_\-]+)+$/,Na=[/\/amp\//,/\/amp$/,/^\/amp$/],Oa=/^[a-zA-Z0-9\-_\.,!]+$/,Pa=/^gapi\.loaded_[0-9]+$/,Qa=/^[a-zA-Z0-9,._-]+$/;function Ra(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Ja[f],h=null;g?h=g(e,b,c,d):La("no hint processor for: "+f);h||La("failed to generate load url");b=h;c=b.match(Sa);(d=b.match(Ta))&&1===d.length&&Ua.test(b)&&c&&1===c.length||La("failed sanity: "+a);return h}
function Va(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Wa(a);Pa.test(c)||La("invalid_callback");b=Xa(b);d=d&&d.length?Xa(d):null;return[encodeURIComponent(a.Db).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.na?"/am="+e(a.na):"",a.Ha?"/rs="+e(a.Ha):"",a.Sa?"/t="+e(a.Sa):"","/cb=",e(c)].join("")}
function Wa(a){"/"!==a.charAt(0)&&La("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))La("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Ma.test(b)||La("invalid_prefix");c=0;for(d=Na.length;c<d;++c)Na[c].test(b)&&La("invalid_prefix");c=Ya(a,
"k",!0);d=Ya(a,"am");e=Ya(a,"rs");a=Ya(a,"t");return{Db:b,version:c,na:d,Ha:e,Sa:a}}
function Xa(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Qa.test(e)&&b.push(e)}return b.join(",")}
function Ya(a,b,c){a=a[b];!a&&c&&La("missing: "+b);if(a){if(Oa.test(a))return a;La("invalid: "+b)}return null}
var Ua=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Ta=/\/cb=/g,Sa=/\/\//g;function Za(){var a=Ca();if(!a)throw Error("Bad hint");return a}
Ja.m=function(a,b,c,d){(a=a[0])||La("missing_hint");return"https://apis.google.com"+Va(a,b,c,d)};
var $a=decodeURI("%73cript"),ab=/^[-+_0-9\/A-Za-z]+={0,2}$/;function bb(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>ya.call(b,e)&&c.push(e)}return c}
function cb(){var a=y.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(ab)?a:y.nonce=null;var b=x(y,"us",[]);if(!b||!b.length)return y.nonce=null;for(var c=ua.getElementsByTagName($a),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(ab))return y.nonce=a}}return null}
function db(a){if("loading"!=ua.readyState)eb(a);else{var b=cb(),c="";null!==b&&(c=' nonce="'+b+'"');ua.write("<"+$a+' src="'+encodeURI(a)+'"'+c+"></"+$a+">")}}
function eb(a){var b=ua.createElement($a);b.setAttribute("src",a);a=cb();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=ua.getElementsByTagName($a)[0])?a.parentNode.insertBefore(b,a):(ua.head||ua.body||ua.documentElement).appendChild(b)}
function fb(a,b){var c=b&&b._c;if(c)for(var d=0;d<Ka.length;d++){var e=Ka[d][0],f=Ka[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function gb(a,b,c){hb(function(){var c=b===Ca()?x(Ba,"_",Aa()):Aa();c=x(Ea(b),"_",c);a(c)},c)}
function ib(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);fb(a,c);var d=a?a.split(":"):[],e=c.h||Za(),f=x(y,"ah",Aa());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var l=h.split("."),l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e,n=g.length&&g[g.length-1]||null,q=n;n&&n.hint==l||(q={hint:l,features:[]},g.push(q));q.features.push(h)}var R=g.length;if(1<R){var P=c.callback;P&&(c.callback=function(){0==--R&&P()})}for(;d=g.shift();)jb(d.features,c,d.hint)}else jb(d||[],c,e)}
function jb(a,b,c){function d(a,b){if(R)return 0;ta.clearTimeout(q);P.push.apply(P,u);var d=((Ba||{}).config||{}).update;d?d(f):f&&x(y,"cu",[]).push(f);if(b){Ha("me0",a,E);try{gb(b,c,n)}finally{Ha("me1",a,E)}}return 1}
a=za(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,l=b.onerror,n=void 0;"function"==typeof l&&(n=l);var q=null,R=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var l=x(Ea(c),"r",[]).sort(),P=x(Ea(c),"L",[]).sort(),E=[].concat(l);0<g&&(q=ta.setTimeout(function(){R=!0;h()},g));
var u=bb(a,P);if(u.length){var u=bb(a,l),ka=x(y,"CP",[]),S=ka.length;ka[S]=function(a){function b(){var a=ka[S+1];a&&a()}
function c(b){ka[S]=null;d(u,a)&&Da(function(){e&&e();b()})}
if(!a)return 0;Ha("ml1",u,E);0<S&&ka[S-1]?ka[S]=function(){c(b)}:c(b)};
if(u.length){var ic="loaded_"+y.I++;Ba[ic]=function(a){ka[S](a);Ba[ic]=null};
a=Ra(c,u,"gapi."+ic,l);l.push.apply(l,u);Ha("ml0",u,E);b.sync||ta.___gapisync?db(a):eb(a)}else ka[S](wa)}else d(u)&&e&&e()}
function hb(a,b){if(y.hee&&0<y.hel)try{return a()}catch(c){b&&b(c),y.hel--,ib("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Ba.load=function(a,b){return hb(function(){return ib(a,b)})};function kb(a){if(Error.captureStackTrace)Error.captureStackTrace(this,kb);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
w(kb,Error);kb.prototype.name="CustomError";var lb;var mb=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},nb=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function ob(a){a=da(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return nb("0",Math.max(0,2-b))+a}
function pb(a,b){return a<b?-1:a>b?1:0}
function qb(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function rb(a){var b=r(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var sb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},tb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e},ub=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},vb=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function wb(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function xb(a,b){return 0<=sb(a,b)}
function yb(a){return Array.prototype.concat.apply([],arguments)}
function zb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ab(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ha(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Bb(a,b,c,d){return Array.prototype.splice.apply(a,Cb(arguments,1))}
function Cb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Db(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if("array"==ga(d))for(var e=0;e<d.length;e+=8192)for(var f=Db.apply(null,Cb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function Eb(a,b,c){this.o=c;this.i=a;this.v=b;this.f=0;this.b=null}
Eb.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.i();return a};
function Fb(a,b){a.v(b);a.f<a.o&&(a.f++,b.next=a.b,a.b=b)}
;var Gb;a:{var Hb=m.navigator;if(Hb){var Ib=Hb.userAgent;if(Ib){Gb=Ib;break a}}Gb=""}function A(a){return-1!=Gb.indexOf(a)}
;function Jb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Kb(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}
function Lb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Mb(a){var b=Nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var Ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ob.length;f++)c=Ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Qb(a){m.setTimeout(function(){throw a;},0)}
var Rb;
function Sb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!A("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!A("Trident")&&!A("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(da(c.next)){c=c.next;var a=c.pa;c.pa=null;a()}};
return function(a){d.next={pa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function Tb(){this.f=this.b=null}
var Vb=new Eb(function(){return new Ub},function(a){a.reset()},100);
Tb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Ub(){this.next=this.scope=this.b=null}
Ub.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Ub.prototype.reset=function(){this.next=this.scope=this.b=null};function Wb(a,b){Xb||Yb();Zb||(Xb(),Zb=!0);var c=$b,d=Vb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Xb;function Yb(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);Xb=function(){a.then(ac)}}else Xb=function(){var a=ac;
!ja(m.setImmediate)||m.Window&&m.Window.prototype&&!A("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Rb||(Rb=Sb()),Rb(a)):m.setImmediate(a)}}
var Zb=!1,$b=new Tb;function ac(){for(var a;a=$b.remove();){try{a.b.call(a.scope)}catch(b){Qb(b)}Fb(Vb,a)}Zb=!1}
;function bc(a){bc[" "](a);return a}
bc[" "]=ea;function cc(a,b){var c=dc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var ec=A("Opera"),B=A("Trident")||A("MSIE"),fc=A("Edge"),gc=fc||B,hc=A("Gecko")&&!(-1!=Gb.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),jc=-1!=Gb.toLowerCase().indexOf("webkit")&&!A("Edge"),kc=A("Windows");function lc(){var a=m.document;return a?a.documentMode:void 0}
var mc;a:{var nc="",oc=function(){var a=Gb;if(hc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(fc)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jc)return/WebKit\/(\S+)/.exec(a);if(ec)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
oc&&(nc=oc?oc[1]:"");if(B){var pc=lc();if(null!=pc&&pc>parseFloat(nc)){mc=String(pc);break a}}mc=nc}var qc=mc,dc={};
function rc(a){return cc(a,function(){for(var b=0,c=mb(String(qc)).split("."),d=mb(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=pb(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||pb(0==g[2].length,0==h[2].length)||pb(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var sc;var tc=m.document;sc=tc&&B?lc()||("CSS1Compat"==tc.compatMode?parseInt(qc,10):5):void 0;function uc(a,b,c){ia(a)?(this.date=vc(a,b||0,c||1),wc(this,c||1)):la(a)?(this.date=vc(a.getFullYear(),a.getMonth(),a.getDate()),wc(this,a.getDate())):(this.date=new Date(sa()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),wc(this,a))}
function vc(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
k=uc.prototype;k.getFullYear=function(){return this.date.getFullYear()};
k.getMonth=function(){return this.date.getMonth()};
k.getDate=function(){return this.date.getDate()};
k.getTime=function(){return this.date.getTime()};
function xc(a){a=a.date.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b),b=60*(b-c);a=(0<a?"-":"+")+ob(c)+":"+ob(b)}return a}
k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
k.Y=function(a,b){return[this.getFullYear(),ob(this.getMonth()+1),ob(this.getDate())].join(a?"-":"")+(b?xc(this):"")};
k.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
k.toString=function(){return this.Y()};
function wc(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
k.valueOf=function(){return this.date.valueOf()};
function yc(a,b,c,d,e,f,g){this.date=ia(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():sa())}
w(yc,uc);yc.prototype.Y=function(a,b){var c=uc.prototype.Y.call(this,a);return a?c+" "+ob(this.date.getHours())+":"+ob(this.date.getMinutes())+":"+ob(this.date.getSeconds())+(b?xc(this):""):c+"T"+ob(this.date.getHours())+ob(this.date.getMinutes())+ob(this.date.getSeconds())+(b?xc(this):"")};
yc.prototype.equals=function(a){return this.getTime()==a.getTime()};
yc.prototype.toString=function(){return this.Y()};function zc(){this.i=this.i;this.o=this.o}
zc.prototype.i=!1;zc.prototype.W=function(){return this.i};
zc.prototype.dispose=function(){this.i||(this.i=!0,this.ba())};
zc.prototype.ba=function(){if(this.o)for(;this.o.length;)this.o.shift()()};
function Ac(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var Bc=!hc&&!B||B&&9<=Number(sc)||hc&&rc("1.9.1"),Cc=B&&!rc("9");function Dc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function C(a,b){return a.classList?a.classList.contains(b):xb(Dc(a),b)}
function D(a,b){a.classList?a.classList.add(b):C(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Ec(a,b){if(a.classList)z(b,function(b){D(a,b)});
else{var c={};z(Dc(a),function(a){c[a]=!0});
z(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function F(a,b){a.classList?a.classList.remove(b):C(a,b)&&(a.className=tb(Dc(a),function(a){return a!=b}).join(" "))}
function Fc(a,b){a.classList?z(b,function(b){F(a,b)}):a.className=tb(Dc(a),function(a){return!xb(b,a)}).join(" ")}
function Gc(a,b,c){c?D(a,b):F(a,b)}
function Hc(a,b,c){C(a,b)&&(F(a,b),D(a,c))}
function Ic(a,b){var c=!C(a,b);Gc(a,b,c)}
;var Jc=!B&&!(A("Safari")&&!((A("Chrome")||A("CriOS"))&&!A("Edge")||A("Coast")||A("Opera")||A("Edge")||A("Silk")||A("Android")));function Kc(a,b){return Jc&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function Lc(){this.b="";this.f=Mc}
Lc.prototype.da=!0;Lc.prototype.ca=function(){return this.b};
var Nc=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,Mc={};function Oc(a){var b=new Lc;b.b=a;return b}
Oc("about:blank");function Pc(){this.b="";this.f=Qc}
Pc.prototype.da=!0;Pc.prototype.ca=function(){return this.b};
function Rc(a){if(a instanceof Pc&&a.constructor===Pc&&a.f===Qc)return a.b;ga(a);return"type_error:SafeHtml"}
var Qc={};function Sc(a){var b=new Pc;b.b=a;return b}
Sc("<!DOCTYPE html>");Sc("");Sc("<br>");function G(a,b){this.j=da(a)?a:0;this.l=da(b)?b:0}
G.prototype.equals=function(a){return a instanceof G&&(this==a?!0:this&&a?this.j==a.j&&this.l==a.l:!1)};
function Tc(a,b){return new G(a.j-b.j,a.l-b.l)}
G.prototype.ceil=function(){this.j=Math.ceil(this.j);this.l=Math.ceil(this.l);return this};
G.prototype.floor=function(){this.j=Math.floor(this.j);this.l=Math.floor(this.l);return this};
G.prototype.round=function(){this.j=Math.round(this.j);this.l=Math.round(this.l);return this};function Uc(a,b){this.width=a;this.height=b}
k=Uc.prototype;k.jb=function(){return this.width*this.height};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!this.jb()};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Vc(a){return a?new Wc(Xc(a)):lb||(lb=new Wc)}
function H(a){return r(a)?document.getElementById(a):a}
function Yc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Zc("*",a,b)}
function I(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:c.querySelectorAll&&c.querySelector?d=c.querySelector("."+a):d=Zc("*",a,b)[0];return d||null}
function Zc(a,b,c){var d=document;c=c||d;var e=a&&"*"!=a?String(a).toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(e||b))return c.querySelectorAll(e+(b?"."+b:""));if(b&&c.getElementsByClassName){d=c.getElementsByClassName(b);if(e){c={};for(var f=a=0,g;g=d[f];f++)e==g.nodeName&&(c[a++]=g);c.length=a;return c}return d}d=c.getElementsByTagName(e||"*");if(b){c={};for(f=a=0;g=d[f];f++)e=g.className,"function"==typeof e.split&&xb(e.split(/\s+/),b)&&(c[a++]=g);c.length=a;return c}return d}
function $c(a,b){Jb(b,function(b,d){b&&b.da&&(b=b.ca());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:ad.hasOwnProperty(d)?a.setAttribute(ad[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var ad={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function bd(a){a=a.document;a=cd(a)?a.documentElement:a.body;return new Uc(a.clientWidth,a.clientHeight)}
function dd(a){var b=ed(a);a=fd(a);return B&&rc("10")&&a.pageYOffset!=b.scrollTop?new G(b.scrollLeft,b.scrollTop):new G(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function ed(a){return a.scrollingElement?a.scrollingElement:!jc&&cd(a)?a.documentElement:a.body||a.documentElement}
function fd(a){return a.parentWindow||a.defaultView}
function cd(a){return"CSS1Compat"==a.compatMode}
function gd(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function hd(a){return Bc&&void 0!=a.children?a.children:tb(a.childNodes,function(a){return 1==a.nodeType})}
function id(a){return la(a)&&1==a.nodeType}
function jd(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Xc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function kd(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Xc(a).createTextNode(String(b)))}}
function ld(a,b){var c=[];return md(a,b,c,!0)?c[0]:void 0}
function md(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||md(a,b,c,d))return!0;a=a.nextSibling}return!1}
var nd={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},od={IMG:" ",BR:"\n"};function pd(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!qd(a)||rd(a)):qd(a)&&rd(a))&&B){var c;!ja(a.getBoundingClientRect)||B&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function qd(a){return B&&!rc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function rd(a){a=a.tabIndex;return ia(a)&&0<=a&&32768>a}
function sd(a){if(Cc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];td(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Cc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function td(a,b,c){if(!(a.nodeName in nd))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in od)b.push(od[a.nodeName]);else for(a=a.firstChild;a;)td(a,b,c),a=a.nextSibling}
function ud(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return vd(a,function(a){return(!e||a.nodeName==e)&&(!c||r(a.className)&&xb(a.className.split(/\s+/),c))},!0,d)}
function J(a,b){return ud(a,null,b,void 0)}
function vd(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Wc(a){this.b=a||m.document||document}
Wc.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
Wc.prototype.createElement=function(a){return this.b.createElement(String(a))};
Wc.prototype.appendChild=function(a,b){a.appendChild(b)};
Wc.prototype.isElement=id;var wd="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function xd(){}
xd.prototype.next=function(){throw wd;};
xd.prototype.T=function(){return this};
function yd(a){if(a instanceof xd)return a;if("function"==typeof a.T)return a.T(!1);if(ha(a)){var b=0,c=new xd;c.next=function(){for(;;){if(b>=a.length)throw wd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function zd(a,b){if(ha(a))try{z(a,b,void 0)}catch(c){if(c!==wd)throw c;}else{a=yd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==wd)throw c;}}}
function Ad(a){if(ha(a))return zb(a);a=yd(a);var b=[];zd(a,function(a){b.push(a)});
return b}
;function Bd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
Bd.prototype.getHeight=function(){return this.bottom-this.top};
Bd.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
Bd.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
Bd.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Cd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Cd.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Cd.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Cd.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Dd(a,b,c){if(r(b))(b=Ed(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Ed(c,d);f&&(c.style[f]=e)}}
var Fd={};function Ed(a,b){var c=Fd[b];if(!c){var d=qb(b),c=d;void 0===a.style[d]&&(d=(jc?"Webkit":hc?"Moz":B?"ms":ec?"O":null)+rb(d),void 0!==a.style[d]&&(c=d));Fd[b]=c}return c}
function Gd(a,b){var c=Xc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Hd(a,b){return Gd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Id(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}B&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Jd(a){if(B&&!(8<=Number(sc)))return a.offsetParent;var b=Xc(a),c=Hd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Hd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Kd(a){for(var b=new Bd(0,Infinity,Infinity,0),c=Vc(a),d=c.b.body,e=c.b.documentElement,f=ed(c.b);a=Jd(a);)if(!(B&&0==a.clientWidth||jc&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Hd(a,"overflow")){var g=Ld(a),h=new G(a.clientLeft,a.clientTop);g.j+=h.j;g.l+=h.l;b.top=Math.max(b.top,g.l);b.right=Math.min(b.right,g.j+a.clientWidth);b.bottom=Math.min(b.bottom,g.l+a.clientHeight);b.left=Math.max(b.left,g.j)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
bd(fd(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Ld(a){var b=Xc(a),c=new G(0,0);var d=b?Xc(b):document;d=!B||9<=Number(sc)||cd(Vc(d).b)?d.documentElement:d.body;if(a==d)return c;a=Id(a);b=dd(Vc(b).b);c.j=a.left+b.j;c.l=a.top+b.l;return c}
function Md(a){a=Id(a);return new G(a.left,a.top)}
function Nd(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Od(a){var b=Pd;if("none"!=Hd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Pd(a){var b=a.offsetWidth,c=a.offsetHeight,d=jc&&!b&&!c;return da(b)&&!d||!a.getBoundingClientRect?new Uc(b,c):(a=Id(a),new Uc(a.right-a.left,a.bottom-a.top))}
function Qd(a){var b=Ld(a);a=Od(a);return new Cd(b.j,b.l,a.width,a.height)}
function Rd(a){return"rtl"==Hd(a,"direction")}
function Sd(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Td(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Sd(a,c):0}
var Ud={thin:2,medium:4,thick:6};function Vd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Ud?Ud[c]:Sd(a,c)}
;function Wd(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var l="HTML"==h.tagName||"BODY"==h.tagName;if(!l||"static"!=Hd(h,"position")){var n=Ld(h);l||(l=(l=Rd(h))&&hc?-h.scrollLeft:!l||gc&&rc("8")||"visible"==Hd(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft,n=Tc(n,new G(l,h.scrollTop)))}}h=n||new G;n=Qd(a);if(l=Kd(a)){var q=new Cd(l.left,l.top,l.right-l.left,l.bottom-l.top),l=Math.max(n.left,q.left),R=Math.min(n.left+n.width,q.left+q.width);if(l<=R){var P=Math.max(n.top,q.top),
q=Math.min(n.top+n.height,q.top+q.height);P<=q&&(n.left=l,n.top=P,n.width=R-l,n.height=q-P)}}l=Vc(a);P=Vc(c);if(l.b!=P.b){var R=l.b.body;var P=fd(P.b),q=new G(0,0);var E=(E=Xc(R))?fd(E):window;b:{try{bc(E.parent);var u=!0;break b}catch(ic){}u=!1}if(u){u=R;do{var ka=E==P?Ld(u):Md(u);q.j+=ka.j;q.l+=ka.l}while(E&&E!=P&&E!=E.parent&&(u=E.frameElement)&&(E=E.parent))}u=Tc(q,Ld(R));!B||9<=Number(sc)||cd(l.b)||(u=Tc(u,dd(l.b)));n.left+=u.j;n.top+=u.l}a=Xd(a,b);b=n.left;a&4?b+=n.width:a&2&&(b+=n.width/2);
b=new G(b,n.top+(a&1?n.height:0));b=Tc(b,h);e&&(b.j+=(a&4?-1:1)*e.j,b.l+=(a&1?-1:1)*e.l);var S;g&&(S=Kd(c))&&(S.top-=h.l,S.right-=h.j,S.bottom-=h.l,S.left-=h.j);return Yd(b,c,d,f,S,g,void 0)}
function Yd(a,b,c,d,e,f,g){a=new G(a.j,a.l);var h=Xd(b,c);c=Od(b);g=g?new Uc(g.width,g.height):new Uc(c.width,c.height);a=new G(a.j,a.l);g=new Uc(g.width,g.height);var l=0;if(d||0!=h)h&4?a.j-=g.width+(d?d.right:0):h&2?a.j-=g.width/2:d&&(a.j+=d.left),h&1?a.l-=g.height+(d?d.bottom:0):d&&(a.l+=d.top);if(f){if(e){d=a;h=g;l=0;65==(f&65)&&(d.j<e.left||d.j>=e.right)&&(f&=-2);132==(f&132)&&(d.l<e.top||d.l>=e.bottom)&&(f&=-5);d.j<e.left&&f&1&&(d.j=e.left,l|=1);if(f&16){var n=d.j;d.j<e.left&&(d.j=e.left,l|=
4);d.j+h.width>e.right&&(h.width=Math.min(e.right-d.j,n+h.width-e.left),h.width=Math.max(h.width,0),l|=4)}d.j+h.width>e.right&&f&1&&(d.j=Math.max(e.right-h.width,e.left),l|=1);f&2&&(l|=(d.j<e.left?16:0)|(d.j+h.width>e.right?32:0));d.l<e.top&&f&4&&(d.l=e.top,l|=2);f&32&&(n=d.l,d.l<e.top&&(d.l=e.top,l|=8),d.l+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.l,n+h.height-e.top),h.height=Math.max(h.height,0),l|=8));d.l+h.height>e.bottom&&f&4&&(d.l=Math.max(e.bottom-h.height,e.top),l|=2);f&8&&(l|=(d.l<
e.top?64:0)|(d.l+h.height>e.bottom?128:0));e=l}else e=256;l=e}f=new Cd(0,0,0,0);f.left=a.j;f.top=a.l;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;g=new G(f.left,f.top);g instanceof G?(a=g.j,g=g.l):(a=g,g=void 0);b.style.left=Nd(a,!1);b.style.top=Nd(g,!1);g=new Uc(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=cd(Vc(Xc(b)).b),!B||rc("10")||g&&rc("8")?(b=b.style,hc?b.MozBoxSizing="border-box":jc?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,
0)+"px",b.height=Math.max(c.height,0)+"px"):(a=b.style,g?(B?(h=Td(b,"paddingLeft"),d=Td(b,"paddingRight"),f=Td(b,"paddingTop"),g=Td(b,"paddingBottom"),g=new Bd(f,d,g,h)):(h=Gd(b,"paddingLeft"),d=Gd(b,"paddingRight"),f=Gd(b,"paddingTop"),g=Gd(b,"paddingBottom"),g=new Bd(parseFloat(f),parseFloat(d),parseFloat(g),parseFloat(h))),!B||9<=Number(sc)?(h=Gd(b,"borderLeftWidth"),d=Gd(b,"borderRightWidth"),f=Gd(b,"borderTopWidth"),b=Gd(b,"borderBottomWidth"),b=new Bd(parseFloat(f),parseFloat(d),parseFloat(b),
parseFloat(h))):(h=Vd(b,"borderLeft"),d=Vd(b,"borderRight"),f=Vd(b,"borderTop"),b=Vd(b,"borderBottom"),b=new Bd(f,d,b,h)),a.pixelWidth=c.width-b.left-g.left-g.right-b.right,a.pixelHeight=c.height-b.top-g.top-g.bottom-b.bottom):(a.pixelWidth=c.width,a.pixelHeight=c.height)));return e}
function Xd(a,b){return(b&8&&Rd(a)?b^4:b)&-9}
;function Zd(a,b){this.b=0;this.B=void 0;this.o=this.f=this.i=null;this.v=this.w=!1;if(a!=ea)try{var c=this;a.call(b,function(a){$d(c,2,a)},function(a){$d(c,3,a)})}catch(d){$d(this,3,d)}}
function ae(){this.next=this.context=this.f=this.i=this.b=null;this.o=!1}
ae.prototype.reset=function(){this.context=this.f=this.i=this.b=null;this.o=!1};
var be=new Eb(function(){return new ae},function(a){a.reset()},100);
function ce(a,b,c){var d=be.get();d.i=a;d.f=b;d.context=c;return d}
Zd.prototype.then=function(a,b,c){return de(this,ja(a)?a:null,ja(b)?b:null,c)};
Zd.prototype.then=Zd.prototype.then;Zd.prototype.$goog_Thenable=!0;Zd.prototype.cancel=function(a){0==this.b&&Wb(function(){var b=new ee(a);fe(this,b)},this)};
function fe(a,b){if(0==a.b)if(a.i){var c=a.i;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.o||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?fe(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):ge(c),he(c,e,3,b)))}a.i=null}else $d(a,3,b)}
function ie(a,b){a.f||2!=a.b&&3!=a.b||je(a);a.o?a.o.next=b:a.f=b;a.o=b}
function de(a,b,c,d){var e=ce(null,null,null);e.b=new Zd(function(a,g){e.i=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!da(e)&&b instanceof ee?g(b):a(e)}catch(n){g(n)}}:g});
e.b.i=a;ie(a,e);return e.b}
Zd.prototype.K=function(a){this.b=0;$d(this,2,a)};
Zd.prototype.S=function(a){this.b=0;$d(this,3,a)};
function $d(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.K,f=a.S;if(d instanceof Zd){ie(d,ce(e||ea,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(n){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(la(d))try{var l=d.then;if(ja(l)){ke(d,l,e,f,a);g=!0;break a}}catch(n){f.call(a,n);g=!0;break a}g=!1}}}g||(a.B=c,a.b=b,a.i=null,je(a),3!=b||c instanceof ee||le(a,c))}}
function ke(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function je(a){a.w||(a.w=!0,Wb(a.F,a))}
function ge(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.o=null);return b}
Zd.prototype.F=function(){for(var a;a=ge(this);)he(this,a,this.b,this.B);this.w=!1};
function he(a,b,c,d){if(3==c&&b.f&&!b.o)for(;a&&a.v;a=a.i)a.v=!1;if(b.b)b.b.i=null,me(b,c,d);else try{b.o?b.i.call(b.context):me(b,c,d)}catch(e){ne.call(null,e)}Fb(be,b)}
function me(a,b,c){2==b?a.i.call(a.context,c):a.f&&a.f.call(a.context,c)}
function le(a,b){a.v=!0;Wb(function(){a.v&&ne.call(null,b)})}
var ne=Qb;function ee(a){kb.call(this,a)}
w(ee,kb);ee.prototype.name="cancel";function K(a){zc.call(this);this.B=1;this.v=[];this.w=0;this.b=[];this.f={};this.F=!!a}
w(K,zc);k=K.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.B;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.B=e+3;d.push(e);return e};
function oe(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.R(d),b.apply(void 0,arguments))},a)}
function pe(a,b,c){if(b=a.f[b]){var d=a.b;(b=wb(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.R(b)}}
k.R=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.w)this.v.push(a),this.b[a+1]=ea;else{if(c){var d=sb(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
k.J=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var g=c[e];qe(this.b[g+1],this.b[g+2],d)}else{this.w++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.w--,0<this.v.length&&0==this.w)for(;g=this.v.pop();)this.R(g)}}return 0!=e}return!1};
function qe(a,b,c){Wb(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(z(b,this.R,this),delete this.f[a])}else this.b.length=0,this.f={}};
function re(a,b){if(b){var c=a.f[b];return c?c.length:0}var c=0,d;for(d in a.f)c+=re(a,d);return c}
k.ba=function(){K.D.ba.call(this);this.clear();this.v.length=0};function se(){}
;function te(){}
w(te,se);te.prototype.clear=function(){var a=Ad(this.T(!0)),b=this;z(a,function(a){b.remove(a)})};function ue(a){this.b=a}
w(ue,te);k=ue.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.T=function(a){var b=0,c=this.b,d=new xd;d.next=function(){if(b>=c.length)throw wd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function ve(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
w(ve,ue);function we(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
w(we,ue);var xe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ye(a){return a?decodeURI(a):a}
function ze(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Ae(a,b,c){if("array"==ga(b))for(var d=0;d<b.length;d++)Ae(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Be(a,b,c){for(c=c||0;c<b.length;c+=2)Ae(b[c],b[c+1],a);return a}
function Ce(a,b){for(var c in b)Ae(c,b[c],a);return a}
function De(a,b){return ze(2==arguments.length?Be([a],arguments[1],0):Be([a],arguments,1))}
;var Ee=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",Ee);function Fe(a){var b=arguments;if(1<b.length)Ee[b[0]]=b[1];else{var b=b[0],c;for(c in b)Ee[c]=b[c]}}
function L(a,b){return a in Ee?Ee[a]:b}
;function Ge(a){var b=p("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=L("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),Fe("ERRORS",b))}
function He(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ge(b)}}:a}
;function M(a,b){ja(a)&&(a=He(a));return window.setTimeout(a,b)}
;var Ie=p("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.R;K.prototype.publish=K.prototype.J;K.prototype.clear=K.prototype.clear;v("ytPubsubPubsubInstance",Ie);var Je=p("ytPubsubPubsubSubscribedKeys")||{};v("ytPubsubPubsubSubscribedKeys",Je);var Ke=p("ytPubsubPubsubTopicToKeys")||{};v("ytPubsubPubsubTopicToKeys",Ke);var Le=p("ytPubsubPubsubIsSynchronous")||{};v("ytPubsubPubsubIsSynchronous",Le);
function Me(a,b,c){var d=Ne();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){Je[e]&&b.apply(c||window,d)};
try{Le[a]?g():M(g,0)}catch(h){Ge(h)}},c);
Je[e]=!0;Ke[a]||(Ke[a]=[]);Ke[a].push(e);return e}return 0}
function Ne(){return p("ytPubsubPubsubInstance")}
function N(a,b){var c=Ne();return c?c.publish.apply(c,arguments):!1}
function Oe(a,b){Le[a]=!0;var c=Ne();c&&c.publish.apply(c,arguments);Le[a]=!1}
function Pe(a){var b=Ne();b&&(ia(a)?a=[a]:r(a)&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete Je[a]}))}
;function Qe(a,b){return a?a.dataset?a.dataset[Re(b)]:a.getAttribute("data-"+b):null}
var Se={};function Re(a){return Se[a]||(Se[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function Te(a,b){a&&(a.dataset?delete a.dataset[Re(b)]:a.removeAttribute("data-"+b))}
function Ue(a,b,c){a&&(a.dataset?a.dataset[Re(b)]=String(c):a.setAttribute("data-"+b,c))}
;function O(a,b){this.version=a;this.args=b}
function Ve(a,b){if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!a.Ma){var c=new a;a.Ma=c.version}var d=a.Ma}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{return Reflect.construct(a,zb(b.args))}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
O.prototype.Fb=function(){return{version:this.version,args:this.args}};function Q(a,b){this.topic=a;this.U=b}
Q.prototype.toString=function(){return this.topic};function We(a){var b=void 0;isNaN(b)&&(b=void 0);var c=p("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():M(a,b||0)}
;var Xe=p("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.R;K.prototype.publish=K.prototype.J;K.prototype.clear=K.prototype.clear;v("ytPubsub2Pubsub2Instance",Xe);var Ye=p("ytPubsub2Pubsub2SubscribedKeys")||{};v("ytPubsub2Pubsub2SubscribedKeys",Ye);var Ze=p("ytPubsub2Pubsub2TopicToKeys")||{};v("ytPubsub2Pubsub2TopicToKeys",Ze);var $e=p("ytPubsub2Pubsub2IsAsync")||{};v("ytPubsub2Pubsub2IsAsync",$e);
v("ytPubsub2Pubsub2SkipSubKey",null);function T(a,b){var c=af();return c?c.publish.call(c,a.toString(),a,b):!1}
function U(a,b,c){var d=af();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){var f=p("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(Ye[e])try{if(g&&a instanceof Q&&a!=d)try{g=Ve(a.U,g)}catch(l){throw l.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+l.message,l;}b.call(c||window,g)}catch(l){Ge(l)}},$e[a.toString()]?p("yt.scheduler.instance")?We(f):M(f,0):f())});
Ye[e]=!0;Ze[a.toString()]||(Ze[a.toString()]=[]);Ze[a.toString()].push(e);return e}
function af(){return p("ytPubsub2Pubsub2Instance")}
function bf(a,b,c){window.ytPubsub2Pubsub2SkipSubKey=a;T.call(null,b,c);window.ytPubsub2Pubsub2SkipSubKey=null}
function cf(a){var b=af();b&&(ia(a)&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete Ye[a]}))}
;var df=0;function ef(a,b){var c=Zc(a,null,b);return c.length?c[0]:null}
var ff=p("ytDomDomGetNextId")||function(){return++df};
v("ytDomDomGetNextId",ff);function gf(){var a=document,b;vb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function hf(a){var b=a.__yt_uid_key;b||(b=ff(),a.__yt_uid_key=b);return b}
function jf(a,b){a=H(a);b=H(b);return!!vd(a,function(a){return a===b},!0,void 0)}
function kf(){Gc(document.body,"hide-players",!1);z(Yc("preserve-players"),function(a){F(a,"preserve-players")})}
;var lf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function mf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in lf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
mf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
mf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
mf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Nb=p("ytEventsEventsListeners")||{};v("ytEventsEventsListeners",Nb);var nf=p("ytEventsEventsCounter")||{count:0};v("ytEventsEventsCounter",nf);function of(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Mb(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function V(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=of(a,b,c,d);if(e)return e;var e=++nf.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new mf(d);if(!vd(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new mf(b);
b.currentTarget=a;return c.call(a,b)};
g=He(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Nb[e]=[a,b,c,g,d];return e}
function pf(a,b,c){var d=a||document;return V(d,"click",function(a){var e=vd(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function qf(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function rf(a,b,c){return pf(a,b,function(a){return C(a,c)})}
function sf(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function W(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in Nb){var b=Nb[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Nb[a]}}))}
;var tf={},uf="ontouchstart"in document;function vf(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return vd(c,function(a){return C(a,b)},!0,d)}
function wf(a){var b;var c="mouseover"==a.type&&"mouseenter"in tf||"mouseout"==a.type&&"mouseleave"in tf;var d=a.type in tf||c;if("HTML"!=a.target.tagName&&d){if(c){c="mouseover"==a.type?"mouseenter":"mouseleave";var d=tf[c],e;for(e in d.f)(b=vf(c,e,a.target))&&!vd(a.relatedTarget,function(a){return a==b},!0)&&d.J(e,b,c,a)}if(c=tf[a.type])for(e in c.f)(b=vf(a.type,e,a.target))&&c.J(e,b,a.type,a)}}
V(document,"blur",wf,!0);V(document,"change",wf,!0);V(document,"click",wf);V(document,"focus",wf,!0);V(document,"mouseover",wf);V(document,"mouseout",wf);V(document,"mousedown",wf);V(document,"keydown",wf);V(document,"keyup",wf);V(document,"keypress",wf);V(document,"cut",wf);V(document,"paste",wf);uf&&(V(document,"touchstart",wf),V(document,"touchend",wf),V(document,"touchcancel",wf));function xf(a){this.v=a;this.B={};this.K=[];this.F=[]}
k=xf.prototype;k.C=function(a){return J(a,X(this))};
function X(a,b){return"yt-uix"+(a.v?"-"+a.v:"")+(b?"-"+b:"")}
k.unregister=function(){Pe(this.K);this.K.length=0;cf(this.F);this.F.length=0};
k.init=ea;k.dispose=ea;function yf(a,b,c){a.K.push(Me(b,c,a))}
function zf(a,b,c){a.F.push(U(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=t(c,a);b in tf||(tf[b]=new K);tf[b].subscribe(d,e);a.B[c]=e}
function Z(a,b,c,d){if(b in tf){var e=tf[b];pe(e,X(a,d),a.B[c]);0>=re(e)&&(e.dispose(),delete tf[b])}delete a.B[c]}
k.O=function(a,b,c){var d=this.g(a,b);if(d&&(d=p(d))){var e=Cb(arguments,2);Bb(e,0,0,a);d.apply(null,e)}};
k.g=function(a,b){return Qe(a,b)};
function Af(a,b){Ue(a,"tooltip-text",b)}
;var Bf=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};v("yt.uix.widgets_",Bf);function Cf(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==ga(b[f])?Ab(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Df(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Cf(d[1]||""),e;for(e in b)d[e]=b[e];return ze(Ce([a],d))+c}
function Ef(a){a=Ce([],a);a[0]="";return a.join("")}
;function Ff(a){a=ja(a)?{callback:a}:a||{};if(a.gapiHintOverride||L("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=Cf(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&Pb(a,{_c:{jsl:{h:b}}})}ib("gapi.iframes:gapi.iframes.style.common",a)}
;function Gf(){return p("gapi.iframes.getContext")()}
function Hf(a){(Gf()||Gf()).connectIframes(a)}
function If(a,b){Gf().addOnConnectHandler("yt",a,void 0,b)}
function Jf(){return Gf().getParentIframe()}
;sa();var Kf=da(XMLHttpRequest)?function(){return new XMLHttpRequest}:da(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Lf(){if(!Kf)return null;var a=Kf();return"open"in a?a:null}
;var Mf={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};
function Nf(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=a.match(xe)[1]||null,e=ye(a.match(xe)[3]||null);d&&e?(d=c,c=a.match(xe),d=d.match(xe),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?ye(c.match(xe)[3]||null)==e&&(Number(c.match(xe)[4]||null)||null)==(Number(a.match(xe)[4]||null)||null):!0;for(var f in Mf){if((e=d=L(Mf[f]))&&!(e=c)){var g=a,e=f,h=L("CORS_HEADER_WHITELIST")||{};e=(g=ye(g.match(xe)[3]||null))?(h=h[g])?xb(h,e):!1:!0}e&&(b[f]=d)}return b}
function Of(a,b){var c=L("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Xb&&(!ye(a.match(xe)[3]||null)||b.withCredentials||ye(a.match(xe)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.M&&b.M[c])}
function Pf(a,b){var c=b.format||"JSON";b.Yb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=L("XSRF_FIELD_NAME",void 0),e=L("XSRF_TOKEN",void 0),f=b.La;f&&(f[d]&&delete f[d],a=Df(a,f||{}));var g=b.postBody||"",f=b.M;Of(a,b)&&(f||(f={}),f[d]=e);f&&r(g)&&(d=Cf(g),Pb(d,f),g=b.Eb&&"JSON"==b.Eb?JSON.stringify(d):Ef(d));var h=!1,l,n=Qf(a,function(a){if(!h){h=!0;l&&window.clearTimeout(l);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=
!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Rf(c,a,b.Wb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.P&&b.P.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.fa&&b.fa.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.Bb&&0<b.timeout&&(l=M(function(){h||(h=!0,n.abort(),window.clearTimeout(l),b.Bb.call(b.context||m,n))},b.timeout))}
function Rf(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Sf(b):null)d={},z(b.getElementsByTagName("*"),function(a){d[a.tagName]=Tf(a)})}c&&Uf(d);
return d}
function Uf(a){if(la(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Sc(a[b]);a[c]=d}else Uf(a[b])}}
function Sf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Tf(a){var b="";z(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Qf(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&He(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Lf();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c;if(e=Nf(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var Vf={},Wf=0;function Xf(a){var b=new Image,c=""+Wf++;Vf[c]=b;b.onload=b.onerror=function(){delete Vf[c]};
b.src=a}
;function Yf(a){O.call(this,1,arguments);this.b=a}
w(Yf,O);function Zf(a){O.call(this,1,arguments);this.b=a}
w(Zf,O);function $f(a,b,c){O.call(this,3,arguments);this.i=a;this.f=b;this.b=null!=c?!!c:null}
w($f,O);function ag(a,b,c,d,e){O.call(this,2,arguments);this.f=a;this.b=b;this.o=c||null;this.i=d||null;this.source=e||null}
w(ag,O);function bg(a,b,c){O.call(this,1,arguments);this.b=a;this.f=b}
w(bg,O);function cg(a,b,c,d,e,f,g){O.call(this,1,arguments);this.f=a;this.v=b;this.b=c;this.w=d||null;this.o=e||null;this.i=f||null;this.source=g||null}
w(cg,O);
var dg=new Q("subscription-batch-subscribe",Yf),eg=new Q("subscription-batch-unsubscribe",Yf),fg=new Q("subscription-subscribe",ag),gg=new Q("subscription-subscribe-loading",Zf),hg=new Q("subscription-subscribe-loaded",Zf),ig=new Q("subscription-subscribe-success",bg),jg=new Q("subscription-subscribe-external",ag),kg=new Q("subscription-unsubscribe",cg),lg=new Q("subscription-unsubscirbe-loading",Zf),mg=new Q("subscription-unsubscribe-loaded",Zf),ng=new Q("subscription-unsubscribe-success",Zf),og=
new Q("subscription-external-unsubscribe",cg),pg=new Q("subscription-enable-ypc",Zf),qg=new Q("subscription-disable-ypc",Zf),rg=new Q("subscription-prefs",$f),sg=new Q("subscription-prefs-success",$f),tg=new Q("subscription-prefs-failure",$f);var ug="http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com https://web-ppg.corp.google.com https://web-green-qa.youtube.com https://web-release-qa.youtube.com".split(" "),vg=[gg,hg,ig,lg,mg,ng,jg,og],wg=[gg,hg,ig,lg,mg,ng,pg,qg];function xg(){var a=gf();return a?a:null}
;function yg(a,b){(a=H(a))&&a.style&&(a.style.display=b?"":"none",Gc(a,"hid",!b))}
function zg(a){return(a=H(a))?"none"!=a.style.display&&!C(a,"hid"):!1}
function Ag(a){z(arguments,function(a){!ha(a)||a instanceof Element?yg(a,!0):z(a,function(a){Ag(a)})})}
function Bg(a){z(arguments,function(a){!ha(a)||a instanceof Element?yg(a,!1):z(a,function(a){Bg(a)})})}
;function Cg(){xf.call(this,"tooltip");this.b=0;this.f={}}
w(Cg,xf);fa(Cg);k=Cg.prototype;k.register=function(){Y(this,"mouseover",this.X);Y(this,"mouseout",this.L);Y(this,"focus",this.ta);Y(this,"blur",this.oa);Y(this,"click",this.L);Y(this,"touchstart",this.Ka);Y(this,"touchend",this.Z);Y(this,"touchcancel",this.Z)};
k.unregister=function(){Z(this,"mouseover",this.X);Z(this,"mouseout",this.L);Z(this,"focus",this.ta);Z(this,"blur",this.oa);Z(this,"click",this.L);Z(this,"touchstart",this.Ka);Z(this,"touchend",this.Z);Z(this,"touchcancel",this.Z);this.dispose();Cg.D.unregister.call(this)};
k.dispose=function(){for(var a in this.f)this.L(this.f[a]);this.f={}};
k.X=function(a){if(!(this.b&&1E3>sa()-this.b)){var b=parseInt(this.g(a,"tooltip-hide-timer"),10);b&&(Te(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=t(function(){Dg(this,a);Te(a,"tooltip-show-timer")},this),c=parseInt(this.g(a,"tooltip-show-delay"),10)||0,b=M(b,c);
Ue(a,"tooltip-show-timer",b.toString());a.title&&(Af(a,Eg(this,a)),a.title="");b=ma(a).toString();this.f[b]=a}};
k.L=function(a){var b=parseInt(this.g(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),Te(a,"tooltip-show-timer"));b=t(function(){if(a){var b=H(Fg(this,a));b&&(Gg(b),gd(b),Te(a,"content-id"));b=H(Fg(this,a,"arialabel"));gd(b)}Te(a,"tooltip-hide-timer")},this);
b=M(b,50);Ue(a,"tooltip-hide-timer",b.toString());if(b=this.g(a,"tooltip-text"))a.title=b;b=ma(a).toString();delete this.f[b]};
k.ta=function(a){this.b=0;this.X(a)};
k.oa=function(a){this.b=0;this.L(a)};
k.Ka=function(a,b,c){c.changedTouches&&(this.b=0,(a=vf(b,X(this),c.changedTouches[0].target))&&this.X(a))};
k.Z=function(a,b,c){c.changedTouches&&(this.b=sa(),(a=vf(b,X(this),c.changedTouches[0].target))&&this.L(a))};
function Hg(a,b,c){Af(b,c);a=a.g(b,"content-id");(a=H(a))&&kd(a,c)}
function Eg(a,b){return a.g(b,"tooltip-text")||b.title}
function Dg(a,b){if(b){var c=Eg(a,b);if(c){var d=H(Fg(a,b));if(!d){d=document.createElement("div");d.id=Fg(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var h=Ig(a,b),l=Fg(a,b,"content");g.id=l;Ue(b,"content-id",l);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);
var n=sd(b);l=Fg(a,b,"arialabel");f=document.createElement("div");D(f,X(a,"arialabel"));f.id=l;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;kd(f,n);b.setAttribute("aria-labelledby",l);l=xg()||document.body;l.appendChild(f);l.appendChild(d);Hg(a,b,c);(c=parseInt(a.g(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",D(g,X(a,"normal-wrap")));g=C(b,X(a,"reverse"));Jg(a,b,d,e,h,g)||Jg(a,b,d,e,h,!g);var q=X(a,"tip-visible");
M(function(){D(d,q)},0)}}}}
function Jg(a,b,c,d,e,f){Gc(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=Od(b);f=new G((h.width-10)/2,f?h.height:0);var l=Ld(b);Yd(new G(l.j+f.j,l.l+f.l),c,g);f=bd(window);if(1==c.nodeType)var n=Md(c);else c=c.changedTouches?c.changedTouches[0]:c,n=new G(c.clientX,c.clientY);c=Od(d);var q=Math.floor(c.width/2),g=!!(f.height<n.l+h.height),h=!!(n.l<h.height),l=!!(n.j<q);f=!!(f.width<n.j+q);n=(c.width+3)/-2- -5;a=a.g(b,"force-tooltip-direction");if("left"==a||l)n=-5;else if("right"==a||f)n=20-c.width-
3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function Fg(a,b,c){a=X(a)+hf(b);c&&(a+="-"+c);return a}
function Ig(a,b){var c=null;kc&&C(b,X(a,"masked"))&&((c=H("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Ag(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function Gg(a){var b=H("yt-uix-tooltip-shared-mask"),c=b&&vd(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Bg(b),document.body.appendChild(b))}
;function Kg(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=De(b,"mode","subscribe"),b=De("/signin?context=popup","next",b),b=De(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Me("LOGGED_IN",function(b){Pe(L("LOGGED_IN_PUBSUB_KEY",void 0));Fe("LOGGED_IN",!0);a(b)});
Fe("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
v("yt.pubsub.publish",N);var Lg=p("ytLoggingTransportLogPayloadsQueue_")||{};v("ytLoggingTransportLogPayloadsQueue_",Lg);var Mg=p("ytLoggingTransportTokensToCttTargetIds_")||{};v("ytLoggingTransportTokensToCttTargetIds_",Mg);(new ve).isAvailable();(new we).isAvailable();function Ng(){xf.call(this,"button");this.b=null;this.i=[];this.f={}}
w(Ng,xf);fa(Ng);k=Ng.prototype;k.register=function(){Y(this,"click",this.Oa);Y(this,"keydown",this.xa);Y(this,"keypress",this.ya);yf(this,"page-scroll",this.pb)};
k.unregister=function(){Z(this,"click",this.Oa);Z(this,"keydown",this.xa);Z(this,"keypress",this.ya);Og(this);this.f={};Ng.D.unregister.call(this)};
k.Oa=function(a){a&&!a.disabled&&(Pg(this,a),this.click(a))};
k.xa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=Qg(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=ld(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.wb;else"table"==e&&(f=this.vb);f&&Rg(this,a,b,c,t(f,this))}}};
k.pb=function(){var a=this.f,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=J(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;Sg(this,d,b,!0)}};
function Rg(a,b,c,d,e){var f=zg(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=Tg(a,c)){if(da(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var l=void 0===l?"":l;var n=void 0===n?window:n;n=n.location;h=ze(Ce([b.href],h))+l;h instanceof Lc||h instanceof Lc||(h=h.da?h.ca():String(h),Nc.test(h)||(h="about:invalid#zClosurez"),h=Oc(h));h instanceof Lc&&h.constructor===Lc&&h.f===Mc?
h=h.b:(ga(h),h="type_error:SafeUrl");n.href=h}else sf(b)}else g&&Ug(a,b);else f?27==d.keyCode?(Tg(a,c),Ug(a,b)):e(b,c,d):(h=C(b,X(a,"reverse"))?38:40,d.keyCode==h&&(sf(b),d.preventDefault()))}
k.ya=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=Qg(this,a),zg(a)&&c.preventDefault())};
function Tg(a,b){var c=X(a,"menu-item-highlight"),d=I(c,b);d&&F(d,c);return d}
function Vg(a,b,c){D(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+ma(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
k.vb=function(a,b,c){var d=Tg(this,b);if(d){var e=ef("table",b);b=Zc("td",null,e);d=Wg(d,b,Zc("td",null,ef("tr",e)).length,c);-1!=d&&(Vg(this,a,b[d]),c.preventDefault())}};
k.wb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Tg(this,b);d&&(b=tb(Zc("li",null,b),zg),Vg(this,a,b[Wg(d,b,1,c)]),c.preventDefault())}};
function Wg(a,b,c,d){var e=b.length;a=sb(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Xg(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=X(a,"menu-mask"),Bg(c),b.iframeMask=c);return c}
function Sg(a,b,c,d){var e=J(b,X(a,"group")),f=!!a.g(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,g=8,h=Qd(b);if(C(b,X(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(q){}}C(b,"flip")&&(C(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.g(b,"button-has-sibling-menu")?l=Jd(e):a.g(b,"button-menu-root-container")&&(l=Yg(a,b));B&&!rc("8")&&(l=null);if(l){var n=Qd(l);n=new Bd(-n.top,n.left,n.top,-n.left)}l=new G(0,1);C(b,X(a,"center-menu"))&&(l.j-=Math.round((Od(c).width-Od(b).width)/
2));d&&(l.l+=dd(document).l);if(a=Xg(a,b))b=Od(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Wd(e,f,a,g,l,n,197),d&&Dd(a,"position","fixed");Wd(e,f,c,g,l,n,197)}
function Yg(a,b){if(a.g(b,"button-menu-root-container")){var c=a.g(b,"button-menu-root-container");return J(b,c)}return document.body}
k.Qa=function(a){if(a){var b=Qg(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.g(a,"button-has-sibling-menu")?c=a.parentNode:c=Yg(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Xg(this,a);d&&c.appendChild(d);(c=!!this.g(a,"button-menu-fixed"))&&(this.f[hf(a).toString()]=b);Sg(this,a,b,c);Oe("yt-uix-button-menu-before-show",a,b);Ag(b);d&&Ag(d);
this.O(a,"button-menu-action",!0);D(a,X(this,"active"));b=t(this.Pa,this,a,!1);d=t(this.Pa,this,a,!0);c=t(this.Hb,this,a,void 0);this.b&&Qg(this,this.b)==Qg(this,a)||Og(this);N("yt-uix-button-menu-show",a);W(this.i);this.i=[V(document,"click",d),V(document,"contextmenu",b),V(window,"resize",c)];this.b=a}}};
function Ug(a,b){if(b){var c=Qg(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Bg(c);a.O(b,"button-menu-action",!1);var d=Xg(a,b),e=hf(c).toString();delete a.f[e];M(function(){d&&d.parentNode&&(Bg(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=J(b,X(a,"group")),f=[X(a,"active")];
e&&f.push(X(a,"group-active"));Fc(b,f);N("yt-uix-button-menu-hide",b);W(a.i);a.i.length=0}}
k.Hb=function(a,b){var c=Qg(this,a);if(c){b&&(b instanceof Pc?c.innerHTML=Rc(b):kd(c,b));var d=!!this.g(a,"button-menu-fixed");Sg(this,a,c,d)}};
k.Pa=function(a,b,c){c=qf(c);var d=J(c,X(this));if(d){var d=Qg(this,d),e=Qg(this,a);if(d==e)return}var d=J(c,X(this,"menu")),e=d==Qg(this,a),f=C(c,X(this,"menu-item")),g=C(c,X(this,"menu-close"));if(!d||e&&(f||g))Ug(this,a),d&&b&&this.g(a,"button-menu-indicate-selected")&&((a=I(X(this,"content"),a))&&kd(a,sd(c)),Zg(this,d,c))};
function Zg(a,b,c){var d=X(a,"menu-item-selected");z(Yc(d,b),function(a){F(a,d)});
D(c.parentNode,d)}
function Qg(a,b){if(!b.widgetMenu){var c=a.g(b,"button-menu-id"),c=c&&H(c),d=X(a,"menu");c?Ec(c,[d,X(a,"menu-external")]):c=I(d,b);b.widgetMenu=c}return b.widgetMenu}
k.isToggled=function(a){return C(a,X(this,"toggled"))};
function Pg(a,b){if(a.g(b,"button-toggle")){var c=J(b,X(a,"group")),d=X(a,"toggled"),e=C(b,d);if(c&&a.g(c,"button-toggle-group")){var f=a.g(c,"button-toggle-group");z(Yc(X(a),c),function(a){a!=b||"optional"==f&&e?(F(a,d),a.removeAttribute("aria-pressed")):(D(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),Ic(b,d)}}
k.click=function(a){if(Qg(this,a)){var b=Qg(this,a);if(b){var c=J(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(Ug(this,c),M(t(this.Qa,this,a),1)):zg(b)?Ug(this,a):this.Qa(a)}a.focus()}this.O(a,"button-action")};
function Og(a){a.b&&Ug(a,a.b)}
;function $g(a){xf.call(this,a);this.i=null}
w($g,xf);k=$g.prototype;k.C=function(a){var b=xf.prototype.C.call(this,a);return b?b:a};
k.register=function(){yf(this,"yt-uix-kbd-nav-move-out-done",this.H)};
k.dispose=function(){$g.D.dispose.call(this);ah(this)};
k.g=function(a,b){var c=$g.D.g.call(this,a,b);return c?c:(c=$g.D.g.call(this,a,"card-config"))&&(c=p(c))&&c[b]?c[b]:null};
k.show=function(a){var b=this.C(a);if(b){D(b,X(this,"active"));var c=bh(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;ch(this,a,c);var d=X(this,"card-visible"),e=this.g(a,"card-delegate-show")&&this.g(b,"card-action");this.O(b,"card-action",a);this.i=a;Bg(c);M(t(function(){e||(Ag(c),N("yt-uix-card-show",b,a,c));dh(c);D(c,d);N("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function bh(a,b,c){var d=c||b,e=X(a,"card");c=eh(a,d);var f=H(X(a,"card")+hf(d));if(f)return a=I(X(a,"card-body"),f),jd(a,c)||(gd(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+hf(d);f.className=e;(d=a.g(d,"card-class"))&&Ec(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.g(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;gd(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function ch(a,b,c){var d=a.g(b,"orientation")||"horizontal",e=I(X(a,"anchor"),b)||b,f=a.g(b,"position"),g=!!a.g(b,"force-position"),h=a.g(b,"position-fixed"),d="horizontal"==d,l="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==f;if(n&&l){var q=13;var R=8}else n&&!l?(q=12,R=9):!n&&l?(q=9,R=12):(q=8,R=13);var P=Rd(document.body),f=Rd(b);P!=f&&(q^=4);if(d){f=b.offsetHeight/2-12;var E=new G(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,E=new G(b.offsetWidth+6,-12);var u=Od(c),f=Math.min(f,
(d?u.height:u.width)-24-6);6>f&&(f=6,d?E.l+=12-b.offsetHeight/2:E.j+=12-b.offsetWidth/2);u=null;g||(u=10);b=X(a,"card-flip");a=X(a,"card-reverse");Gc(c,b,n);Gc(c,a,l);u=Wd(e,q,c,R,E,null,u);!g&&u&&(u&48&&(n=!n,q^=4,R^=4),u&192&&(l=!l,q^=1,R^=1),Gc(c,b,n),Gc(c,a,l),Wd(e,q,c,R,E));h&&(e=parseInt(c.style.top,10),g=dd(document).l,Dd(c,"position","fixed"),Dd(c,"top",e-g+"px"));P&&(c.style.right="",e=Qd(c),e.left=e.left||parseInt(c.style.left,10),g=bd(window),c.style.left="",c.style.right=g.width-e.left-
e.width+"px");e=I("yt-uix-card-body-arrow",c);g=I("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!P&&n||P&&!n?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=I("yt-uix-card-arrow",c);n=I("yt-uix-card-arrow-background",c);l&&n&&(c="right"==d?Od(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")}
k.H=function(a){if(a=this.C(a)){var b=H(X(this,"card")+hf(a));b&&(F(a,X(this,"active")),F(b,X(this,"card-visible")),Bg(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(gd(b.cardMask),b.cardMask=null))}};
function ah(a){a.i&&a.H(a.i)}
k.Gb=function(a,b){var c=this.C(a);if(c){if(b){var d=eh(this,c);if(!d)return;b instanceof Pc?d.innerHTML=Rc(b):kd(d,b)}C(c,X(this,"active"))&&(c=bh(this,a,c),ch(this,a,c),Ag(c),dh(c))}};
k.isActive=function(a){return(a=this.C(a))?C(a,X(this,"active")):!1};
function eh(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.g(b,"card-id"))?H(c):I(d,b))||(c=document.createElement("div"));var f=c;F(f,d);D(f,e);b.cardContentNode=c}return c}
function dh(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',Ec(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function fh(){xf.call(this,"kbd-nav")}
var gh;w(fh,xf);fa(fh);k=fh.prototype;k.register=function(){Y(this,"keydown",this.va);yf(this,"yt-uix-kbd-nav-move-in",this.Da);yf(this,"yt-uix-kbd-nav-move-in-to",this.xb);yf(this,"yt-uix-kbd-move-next",this.Ea);yf(this,"yt-uix-kbd-nav-move-to",this.V)};
k.unregister=function(){Z(this,"keydown",this.va);W(gh)};
k.va=function(a,b,c){var d=c.keyCode;if(a=J(a,X(this)))switch(d){case 13:case 32:this.Da(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Kc(a,"kbdNavMoveOut");!c;){c=J(a.parentElement,X(this));if(!c)break a;c=Kc(c,"kbdNavMoveOut")}c=H(c);this.V(c);N("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&C(a,X(this,"list")))switch(d){case 40:this.Ea(b,a);break;case 38:d=document.activeElement==a,a=hh(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),ih(this,a[b]))}c.preventDefault()}};
k.Da=function(a){var b=Kc(a,"kbdNavMoveIn"),b=H(b);jh(this,a,b);this.V(b)};
k.xb=function(a){a:{var b=document;try{var c=b&&b.activeElement;break a}catch(d){}c=null}jh(this,c,a);this.V(a)};
k.V=function(a){if(a)if(pd(a))a.focus();else{var b=ld(a,function(a){return id(a)?pd(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function jh(a,b,c){b&&c&&(D(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Jc&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))}
k.Ea=function(a,b){var c=document.activeElement==b,d=hh(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),ih(this,d[c]))};
function ih(a,b){if(b){var c=ud(b,"LI");c&&(D(c,X(a,"highlight")),gh=V(b,"blur",t(function(a){F(a,X(this,"highlight"));W(gh)},a,c)))}}
function hh(a){if("UL"!=a.tagName.toUpperCase())return[];a=tb(hd(a),function(a){return"LI"==a.tagName.toUpperCase()});
return tb(ub(a,function(a){return zg(a)?ld(a,function(a){return id(a)?pd(a):!1}):!1}),function(a){return!!a})}
;function kh(){xf.call(this,"menu");this.f=this.b=null;this.i={};this.w={};this.o=null}
w(kh,xf);fa(kh);function lh(a){var b=kh.A();if(C(a,X(b)))return a;var c=b.C(a);return c?c:J(a,X(b,"content"))==b.b?b.f:null}
k=kh.prototype;k.register=function(){Y(this,"click",this.ua);Y(this,"mouseenter",this.nb);yf(this,"page-scroll",this.qb);yf(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.C(a);mh(this,a)});
this.o=new K};
k.unregister=function(){Z(this,"click",this.ua);this.f=this.b=null;W(Db(Lb(this.i)));this.i={};Jb(this.w,function(a){gd(a)},this);
this.w={};Ac(this.o);this.o=null;kh.D.unregister.call(this)};
k.ua=function(a,b,c){a&&(b=nh(this,a),!b.disabled&&jf(c.target,b)&&oh(this,a))};
k.nb=function(a,b,c){a&&C(a,X(this,"hover"))&&jf(c.target,nh(this,a))&&oh(this,a,!0)};
k.qb=function(){this.b&&this.f&&ph(this,this.f,this.b)};
function ph(a,b,c){var d=qh(a,b);if(d){var e=Od(c);if(e instanceof Uc){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Nd(e,!0);d.style.height=Nd(f,!0)}c==a.b&&(e=9,f=8,C(b,X(a,"reversed"))&&(e^=1,f^=1),C(b,X(a,"flipped"))&&(e^=4,f^=4),a=new G(0,1),d&&Wd(b,e,d,f,a,null,197),Wd(b,e,c,f,a,null,197))}
function oh(a,b,c){rh(a,b)&&!c?mh(a,b):(sh(a,b),!a.b||jf(b,a.b)?a.Ra(b):oe(a.o,t(a.Ra,a,b)))}
k.Ra=function(a){if(a){var b=th(this,a);if(b){Oe("yt-uix-menu-before-show",a,b);this.b?jf(a,this.b)||mh(this,this.f):(this.f=a,this.b=b,C(a,X(this,"sibling-content"))||(gd(b),document.body.appendChild(b)),b.style.minWidth=nh(this,a).offsetWidth-2+"px");var c=qh(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);F(b,X(this,"content-hidden"));ph(this,a,b);Ec(nh(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);N("yt-uix-menu-show",a);uh(b);vh(this,a);N("yt-uix-kbd-nav-move-in-to",
b);var d=t(this.Ib,this,a),e=t(this.tb,this,a),c=ma(a).toString();this.i[c]=[V(b,"click",e),V(document,"click",d)];C(a,X(this,"indicate-selected"))&&(d=t(this.ub,this,a),this.i[c].push(V(b,"click",d)));C(a,X(this,"hover"))&&(a=t(this.ob,this,a),this.i[c].push(V(document,"mousemove",a)))}}};
k.ob=function(a,b){var c=qf(b);c&&(jf(c,nh(this,a))||wh(this,c)||xh(this,a))};
k.Ib=function(a,b){var c;if(c=qf(b)){if(wh(this,c)){var d=J(c,X(this,"content"));var e=ud(c,"LI");e&&d&&jd(d,e)&&Oe("yt-uix-menu-item-clicked",c);c=J(c,X(this,"close-on-select"));if(!c)return;d=lh(c)}mh(this,d||a)}};
function sh(a,b){if(b){var c=J(b,X(a,"content"));c&&z(Yc(X(a),c),function(a){!jf(a,b)&&rh(this,a)&&xh(this,a)},a)}}
function mh(a,b){if(b){var c=[];c.push(b);var d=th(a,b);d&&(d=Yc(X(a),d),d=zb(d),c=c.concat(d),z(c,function(a){rh(this,a)&&xh(this,a)},a))}}
function xh(a,b){if(b){var c=th(a,b);Fc(nh(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);D(c,X(a,"content-hidden"));var d=th(a,b);d&&$c(d,{"aria-expanded":"false"});(d=qh(a,b))&&d.parentNode&&gd(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.o&&a.o.J("ROOT_MENU_REMOVED"));N("yt-uix-menu-hide",b);c=ma(b).toString();W(a.i[c]);delete a.i[c]}}
k.tb=function(a,b){var c=qf(b);c&&yh(this,a,c)};
k.ub=function(a,b){var c=qf(b);if(c){var d=nh(this,a);if(d&&(c=ud(c,"LI")))if(c=sd(c).trim(),d.hasChildNodes()){var e=Ng.A();(d=I(X(e,"content"),d))&&kd(d,c)}else kd(d,c)}};
function vh(a,b){var c=th(a,b);if(c){z(c.children,function(a){"LI"==a.tagName&&$c(a,{role:"menuitem"})});
$c(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+ma(c),c.id=d);(c=nh(a,b))&&$c(c,{"aria-controls":d})}}
function yh(a,b,c){var d=th(a,b);d&&C(b,X(a,"checked"))&&(a=ud(c,"LI"))&&(a=I("yt-ui-menu-item-checked-hid",a))&&(z(Yc("yt-ui-menu-item-checked",d),function(a){Hc(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Hc(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function rh(a,b){var c=th(a,b);return c?!C(c,X(a,"content-hidden")):!1}
function uh(a){z(Zc("UL",null,a),function(a){a.tabIndex=0;var b=fh.A();Ec(a,[X(b),X(b,"list")])})}
function th(a,b){var c=Qe(b,"menu-content-id");return c&&(c=H(c))?(Ec(c,[X(a,"content"),X(a,"content-external")]),c):b==a.f?a.b:I(X(a,"content"),b)}
function qh(a,b){var c=ma(b).toString(),d=a.w[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];z(Dc(b),function(a){e.push(a+"-mask")});
Ec(d,e);a.w[c]=d}return d||null}
function nh(a,b){return I(X(a,"trigger"),b)}
function wh(a,b){return jf(b,a.b)||jf(b,a.f)}
;function zh(){$g.call(this,"clickcard");this.b={};this.f={}}
w(zh,$g);fa(zh);k=zh.prototype;k.register=function(){zh.D.register.call(this);Y(this,"click",this.ra,"target");Y(this,"click",this.qa,"close")};
k.unregister=function(){zh.D.unregister.call(this);Z(this,"click",this.ra,"target");Z(this,"click",this.qa,"close");for(var a in this.b)W(this.b[a]);this.b={};for(a in this.f)W(this.f[a]);this.f={}};
k.ra=function(a,b,c){c.preventDefault();b=ud(c.target,"button");if(!b||!b.disabled){if(b=this.g(a,"card-target"))a=document,a=r(b)?a.getElementById(b):b;b=this.C(a);this.g(b,"disabled")||(C(b,X(this,"active"))?(this.H(a),F(b,X(this,"active"))):(this.show(a),D(b,X(this,"active"))))}};
k.show=function(a){zh.D.show.call(this,a);var b=this.C(a),c=ma(a).toString();if(!Qe(b,"click-outside-persists")){if(this.b[c])return;var b=V(document,"click",t(this.sa,this,a)),d=V(window,"blur",t(this.sa,this,a));this.b[c]=[b,d]}a=V(window,"resize",t(this.Gb,this,a,void 0));this.f[c]=a};
k.H=function(a){zh.D.H.call(this,a);a=ma(a).toString();var b=this.b[a];b&&(W(b),this.b[a]=null);if(b=this.f[a])W(b),delete this.f[a]};
k.sa=function(a,b){var c="yt-uix"+(this.v?"-"+this.v:"")+"-card",d=null;b.target&&(d=J(b.target,c)||J(lh(b.target),c));(d=d||J(document.activeElement,c)||J(lh(document.activeElement),c))||this.H(a)};
k.qa=function(a){(a=J(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.H(a)};function Ah(){$g.call(this,"hovercard")}
w(Ah,$g);fa(Ah);k=Ah.prototype;k.register=function(){Y(this,"mouseenter",this.za,"target");Y(this,"mouseleave",this.Ba,"target");Y(this,"mouseenter",this.Aa,"card");Y(this,"mouseleave",this.Ca,"card")};
k.unregister=function(){Z(this,"mouseenter",this.za,"target");Z(this,"mouseleave",this.Ba,"target");Z(this,"mouseenter",this.Aa,"card");Z(this,"mouseleave",this.Ca,"card")};
k.za=function(a){if(Bh!=a){Bh&&(this.H(Bh),Bh=null);var b=t(this.show,this,a),c=parseInt(this.g(a,"delay-show"),10),b=M(b,-1<c?c:200);Ue(a,"card-timer",b.toString());Bh=a;a.alt&&(Ue(a,"card-alt",a.alt),a.alt="");a.title&&(Ue(a,"card-title",a.title),a.title="")}};
k.Ba=function(a){var b=parseInt(this.g(a,"card-timer"),10);window.clearTimeout(b);this.C(a).isCardHidable=!0;b=parseInt(this.g(a,"delay-hide"),10);b=-1<b?b:200;M(t(this.rb,this,a),b);if(b=this.g(a,"card-alt"))a.alt=b;if(b=this.g(a,"card-title"))a.title=b};
k.rb=function(a){this.C(a).isCardHidable&&(this.H(a),Bh=null)};
k.Aa=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
k.Ca=function(a){a&&this.H(a.cardTargetNode)};
var Bh=null;function Ch(a,b,c,d,e,f){this.b=a;this.B=null;this.i=I("yt-dialog-fg",this.b)||this.b;if(a=I("yt-dialog-title",this.i)){var g="yt-dialog-title-"+ma(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.S=I("yt-dialog-focus-trap",this.b);this.ia=!1;this.o=new K;this.F=[];this.F.push(rf(this.b,t(this.yb,this),"yt-dialog-dismiss"));this.F.push(V(this.S,"focus",t(this.mb,this),!0));Dh(this);this.Va=b;this.cb=c;this.bb=d;this.K=e;this.eb=f;this.w=
this.v=null}
var Eh={LOADING:"loading",Nb:"content",Ub:"working"};function Fh(a,b){a.W()||a.o.subscribe("post-all",b)}
function Dh(a){a=I("yt-dialog-fg-content",a.b);var b=[];Jb(Eh,function(a){b.push("yt-dialog-show-"+a)});
Fc(a,b);D(a,"yt-dialog-show-content")}
k=Ch.prototype;
k.show=function(){if(!this.W()){this.B=document.activeElement;if(!this.bb){this.f||(this.f=H("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=bd(a).height,cd(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{var b=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.f.style.height=c+"px";Ag(this.f)}this.wa();c=Gh(this);Hh(c);this.v=V(document,"keydown",t(this.sb,this));c=this.b;d=Me("player-added",this.wa,this);Ue(c,"player-ready-pubsub-key",d);this.cb&&(this.w=V(document,"click",t(this.Cb,this)));Ag(this.b);this.i.setAttribute("tabindex","0");Ih(this);this.K||D(document.body,"yt-dialog-active");Og(Ng.A());ah(zh.A());ah(Ah.A());N("yt-ui-dialog-show-complete",this)}};
function Jh(){return vb(Yc("yt-dialog"),function(a){return zg(a)})}
k.wa=function(){if(!this.eb){var a=this.b;Gc(document.body,"hide-players",!0);a&&Gc(a,"preserve-players",!0)}};
function Gh(a){var b=Zc("iframe",null,a.b);z(b,function(a){var b=Qe(a,"onload");b&&(b=p(b))&&V(a,"load",b);if(b=Qe(a,"src"))a.src=b},a);
return zb(b)}
function Hh(a){z(document.getElementsByTagName("iframe"),function(b){-1==sb(a,b)&&D(b,"iframe-hid")})}
function Kh(){z(Yc("iframe-hid"),function(a){F(a,"iframe-hid")})}
k.yb=function(a){a=a.currentTarget;a.disabled||(a=Qe(a,"action")||"",this.dismiss(a))};
k.dismiss=function(a){if(!this.W()){this.o.J("pre-all");this.o.J("pre-"+a);Bg(this.b);ah(zh.A());ah(Ah.A());this.i.setAttribute("tabindex","-1");Jh()||(Bg(this.f),this.K||F(document.body,"yt-dialog-active"),kf(),Kh());this.v&&(W(this.v),this.v=null);this.w&&(W(this.w),this.w=null);var b=this.b;if(b){var c=Qe(b,"player-ready-pubsub-key");c&&(Pe(c),Te(b,"player-ready-pubsub-key"))}this.o.J("post-all");N("yt-ui-dialog-hide-complete",this);"cancel"==a&&N("yt-ui-dialog-cancelled",this);this.o&&this.o.J("post-"+
a);this.B&&this.B.focus()}};
k.setTitle=function(a){kd(I("yt-dialog-title",this.b),a)};
k.sb=function(a){M(t(function(){this.Va||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&C(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
k.Cb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
k.W=function(){return this.ia};
k.dispose=function(){zg(this.b)&&this.dismiss("dispose");W(this.F);this.F.length=0;M(t(function(){this.B=null},this),0);
this.S=this.i=null;this.o.dispose();this.o=null;this.ia=!0};
k.mb=function(a){a.stopPropagation();Ih(this)};
function Ih(a){M(t(function(){this.i&&this.i.focus()},a),0)}
v("yt.ui.Dialog",Ch);function Lh(){xf.call(this,"overlay");this.o=this.f=this.i=this.b=null}
w(Lh,xf);fa(Lh);k=Lh.prototype;k.register=function(){Y(this,"click",this.ga,"target");Y(this,"click",this.Na,"close");Mh(this)};
k.unregister=function(){Lh.D.unregister.call(this);Z(this,"click",this.ga,"target");Z(this,"click",this.Na,"close");this.o&&(Pe(this.o),this.o=null);this.f&&(W(this.f),this.f=null)};
k.ga=function(a){if(!this.b||!zg(this.b.b)){var b=this.C(a);a=Nh(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.g(b,"disable-shortcuts")||!1,d=!!this.g(b,"disable-outside-click-dismiss")||!1;this.b=new Ch(a,c);this.i=b;var e=I("yt-dialog-fg",a);if(e){var f=this.g(b,"overlay-class")||"",g=this.g(b,"overlay-style")||"default",h=this.g(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,h));Ec(e,f)}this.b.show();N("yt-uix-kbd-nav-move-to",e||a);Mh(this);c||
d||(c=t(function(a){C(a.target,"yt-dialog-base")&&Oh(this)},this),this.f=V(I("yt-dialog-base",a),"click",c));
this.O(b,"overlay-shown");N("yt-uix-overlay-shown",b)}}};
function Mh(a){a.o||(a.o=Me("yt-uix-overlay-hide",Ph));a.b&&Fh(a.b,function(){var a=Lh.A();a.i=null;a.b.dispose();a.b=null})}
function Oh(a){if(a.b){var b=a.i;a.b.dismiss("overlayhide");b&&a.O(b,"overlay-hidden");a.i=null;a.f&&(W(a.f),a.f=null);a.b=null}}
function Nh(a,b){var c;if(a)if(c=I("yt-dialog",a)){var d=H("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=J(b,"yt-dialog"));return c}
function Qh(){var a=Lh.A();if(a.i)a=I("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=Yc("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=J(a[b],"yt-dialog");if(zg(c)){a=a[b];break a}}a=null}return a}
k.Na=function(a){a&&a.disabled||N("yt-uix-overlay-hide")};
function Ph(){Oh(Lh.A())}
k.show=function(a){this.ga(a)};var Rh={},Sh=[];function Th(a){a=J(a,"yt-uix-button-subscription-container");return I("yt-dialog",I("unsubscribe-confirmation-overlay-container",a))}
function Uh(a,b){W(Sh);Sh.length=0;Rh[b]||(Rh[b]=Th(a));Lh.A().show(Rh[b]);var c=Qh();return new Zd(function(a){Sh.push(rf(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function Vh(){var a=L("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!L("SESSION_INDEX")&&!L("LOGGED_IN"))}
;function Wh(){xf.call(this,"subscription-button");this.b=this.f=!1}
w(Wh,xf);fa(Wh);Wh.prototype.register=function(){Y(this,"click",this.ha);zf(this,gg,this.Ga);zf(this,hg,this.Fa);zf(this,ig,this.Jb);zf(this,lg,this.Ga);zf(this,mg,this.Fa);zf(this,ng,this.Kb);zf(this,pg,this.Ab);zf(this,qg,this.zb)};
Wh.prototype.unregister=function(){Z(this,"click",this.ha);Wh.D.unregister.call(this)};
Wh.prototype.i=function(a){return!!this.g(a,"is-subscribed")};
var Xh={ja:"hover-enabled",Ta:"yt-uix-button-subscribe",Ua:"yt-uix-button-subscribed",Lb:"ypc-enabled",Wa:"yt-uix-button-subscription-container",Xa:"yt-subscription-button-disabled-mask-container"},Yh={Mb:"channel-external-id",Ya:"subscriber-count-show-when-subscribed",Za:"subscriber-count-tooltip",ab:"subscriber-count-title",Ob:"href",Pb:"insecure",ka:"is-subscribed",Qb:"parent-url",Rb:"clicktracking",fb:"show-unsub-confirm-dialog",Sb:"show-unsub-confirm-time-frame",gb:"style-type",la:"subscribed-timestamp",
ma:"subscription-id",Tb:"target",hb:"ypc-enabled"};k=Wh.prototype;
k.ha=function(a){var b=this.g(a,"href"),c=this.g(a,"insecure"),d=Vh(),e=!(this.f&&d),c=c&&!this.b;if(b&&(e||c))a=this.g(a,"target")||"_self",window.open(b,a);else if(!c)if(d)if(b=this.g(a,"channel-external-id"),d=this.g(a,"clicktracking"),e=Zh(this,a),c=this.g(a,"parent-url"),this.g(a,"is-subscribed")){var f=this.g(a,"subscription-id"),g=new cg(b,f,e,a,d,c);$h(this,a)?Uh(a,b).then(function(){T(kg,g)}):T(kg,g)}else T(fg,new ag(b,e,d,c));
else ai(this,a)};
k.Ga=function(a){this.N(a.b,this.Ia,!0)};
k.Fa=function(a){this.N(a.b,this.Ia,!1)};
k.Jb=function(a){this.N(a.b,this.Ja,!0,a.f)};
k.Kb=function(a){this.N(a.b,this.Ja,!1)};
k.Ab=function(a){this.N(a.b,this.lb)};
k.zb=function(a){this.N(a.b,this.kb)};
k.Ja=function(a,b,c){b?(Ue(a,Yh.ka,"true"),c&&Ue(a,Yh.ma,c),this.g(a,Yh.fb)&&(b=new yc,Ue(a,Yh.la,(b.getTime()/1E3).toString()))):(Te(a,Yh.ka),Te(a,Yh.la),Te(a,Yh.ma));bi(this,a)};
function Zh(a,b){if(!a.g(b,"ypc-enabled"))return null;var c=a.g(b,"ypc-item-type"),d=a.g(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
k.Ia=function(a,b){var c=J(a,Xh.Wa);Gc(c,Xh.Xa,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function bi(a,b){var c=a.g(b,Yh.gb),d=!!a.g(b,"is-subscribed"),c="-"+c,e=Xh.Ua+c;Gc(b,Xh.Ta+c,!d);Gc(b,e,d);a.g(b,Yh.Za)&&!a.g(b,Yh.Ya)&&(c=X(Cg.A()),Gc(b,c,!d),b.title=d?"":a.g(b,Yh.ab));d?M(function(){D(b,Xh.ja)},1E3):F(b,Xh.ja)}
k.lb=function(a){var b=!!this.g(a,"ypc-item-type"),c=!!this.g(a,"ypc-item-id");!this.g(a,"ypc-enabled")&&b&&c&&(D(a,"ypc-enabled"),Ue(a,Yh.hb,"true"))};
k.kb=function(a){this.g(a,"ypc-enabled")&&(F(a,"ypc-enabled"),Te(a,"ypc-enabled"))};
function ci(a,b){return tb(Yc(X(a)),function(a){return b==this.g(a,"channel-external-id")},a)}
k.ib=function(a,b,c){var d=Cb(arguments,2);z(a,function(a){b.apply(this,yb(a,d))},this)};
k.N=function(a,b,c){var d=ci(this,a);this.ib.apply(this,yb([d],Cb(arguments,1)))};
function ai(a,b){var c=t(function(a){a.discoverable_subscriptions&&Fe("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ha(b)},a);
Kg(c)}
function $h(a,b){if(a.b||!a.g(b,"show-unsub-confirm-dialog"))return!1;var c=a.g(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.g(b,"subscribed-timestamp"),10),(new yc).getTime()<1E3*(c+600))?!0:!1}
;function di(a){this.b=a;this.G=null;L("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(ei(this),V(this.b,"mouseover",t(this.o,this)),V(this.b,"mouseout",t(this.aa,this)),V(this.b,"click",t(this.aa,this)),U(ig,ra(this.f,!0),this),U(ng,ra(this.f,!1),this),fi(this))}
function ei(a){var b={url:L("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.b,relayOpen:"-1"};a=t(a.i,a);Gf().open(b,a)}
function fi(a){Vh()||Me("LOGGED_IN",function(){this.G&&(this.aa(),this.G.close(),this.G=null,ei(this))},a)}
di.prototype.i=function(a){this.G=a;a=Wh.A().i(this.b);this.f(a)};
di.prototype.o=function(){this.G&&this.G.restyle({show:!0})};
di.prototype.aa=function(){this.G&&this.G.restyle({show:!1})};
di.prototype.f=function(a){if(this.G){a={isSubscribed:a};try{var b=p("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER");this.G.send("msg-hovercard-subscription",a,void 0,b)}catch(c){}}};function gi(a){if(ha(a))return hi(a);if(la(a)&&!ja(a)&&!(la(a)&&0<a.nodeType))return ii(a);try{return m.JSON.stringify(a),a}catch(b){}}
function ii(a){return Kb(a,function(a){return gi(a)})}
function hi(a){return ub(a,function(a){return gi(a)})}
;function ji(a){this.f=null;this.b=a;a=Jf();var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^sa()).toString(36);a&&(Hf({role:"ytsubscribe",iframe:a,data:{id:b}}),If(t(function(a){this.f=a},this),this.b))}
ji.prototype.register=function(a,b){if(this.f)this.f.register(a,b,this.b);else{var c=t(this.register,this,a,b,this.b);If(c,this.b)}};
ji.prototype.send=function(a,b){if(this.f)this.f.send(a,b,void 0,this.b);else{var c=t(this.send,this,a,b);If(c,this.b)}};function ki(){this.b=this.f=null}
function li(a,b){var c=p("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");try{var d=c||mi(a),e=Jf();e&&e.send("onytevent",b,void 0,d)}catch(f){}}
ki.prototype.i=function(a,b){if("pubsub2"==b.eventType){var c=b.topicString;c&&a(c,b.serializedData||null)}};
function mi(a){if(!a.f){var b=p("gapi.iframes.makeWhiteListIframesFilter")(ug);a.f=b}return a.f}
;function ni(){this.b=new ki;this.i=!1;this.f={}}
function oi(a){z(vg,function(a){if(!this.f[a.toString()]){var b=U(a,function(b){var c=b?b.Fb():null;b=this.b;b.b&&(c={eventType:"pubsub2",topicString:a.toString(),serializedData:gi(c)},b.b.send("msg-youtube-pubsub",c))},this);
b&&(this.f[a.toString()]=b)}},a)}
ni.prototype.o=function(a,b){var c=wb(wg,function(b){return b.toString()==a});
if(c&&(!c.U||b)){if(c.U)try{var d=Ve(c.U,b)}catch(f){return}var e=this.f[c.toString()];e?bf(e,c,d):T(c,d)}};
ni.prototype.v=function(a){pi(this)&&li(this.b,{eventType:"subscribe",channelExternalId:a.b})};
ni.prototype.w=function(a){pi(this)&&li(this.b,{eventType:"unsubscribe",channelExternalId:a.b})};
function pi(a){return a.i||!!L("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS")}
;function qi(){Ff(function(){var a=Od(H("yt-subscribe"));a={width:a.width,height:a.height};var b=ri;Gf().ready(a,null,b)})}
function ri(a){if(a.length&&a[a.length-1]){var b=a[a.length-1];a=b.eurl;var b=b.notificationsPipeSupported,c=H("yt-subscribe"),d=Wh.A(),c=I(X(d),c);a&&c&&(Wh.A(),Ue(c,"parent-url",a));si()?(Wh.A().b=!0,b&&(Wh.A().f=!0)):c&&new di(c);a=new ni;U(ig,a.v,a);U(ng,a.w,a);if(si()){b=a.b;b.b=new ji(mi(b));oi(a);b=a.b;c=t(a.o,a);if(b.b)try{b.b.register("cmd-youtube-pubsub",ra(b.i,c))}catch(e){}a.i=!0}}}
function si(){var a=Jf().getOrigin();return xb(ug,a)}
;function ti(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Qf(c,void 0):Xf(c))}}
;function ui(a){O.call(this,1,arguments);this.b=a}
w(ui,O);function vi(a,b){O.call(this,2,arguments);this.f=a;this.b=b}
w(vi,O);function wi(a,b,c,d){O.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
w(wi,O);function xi(a,b){O.call(this,1,arguments);this.f=a;this.b=b||null}
w(xi,O);function yi(a){O.call(this,1,arguments)}
w(yi,O);var zi=new Q("ypc-core-load",ui),Ai=new Q("ypc-guide-sync-success",vi),Bi=new Q("ypc-purchase-success",wi),Ci=new Q("ypc-subscription-cancel",yi),Di=new Q("ypc-subscription-cancel-success",xi),Ei=new Q("ypc-init-subscription",yi);var Fi=!1,Gi=[];function Hi(a){a.b?Fi?T(jg,a):T(zi,new ui(function(){T(Ei,new yi(a.b))})):Ii(a.f,a.o,a.i,a.source)}
function Ji(a){a.b?Fi?T(og,a):T(zi,new ui(function(){T(Ci,new yi(a.b))})):Ki(a.f,a.v,a.o,a.i,a.source)}
function Li(a){Mi(zb(a.b))}
function Ni(a){Oi(zb(a.b))}
function Pi(a){Qi(a.i,a.f,a.b)}
function Ri(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(ig,new bg(b,c,a.b.channelInfo))}
function Si(a){var b=a.b;Jb(a.f,function(a,d){T(ig,new bg(d,a,b[d]))})}
function Ti(a){T(ng,new Zf(a.f.itemId));a.b&&a.b.length&&(Ui(a.b,ng),Ui(a.b,pg))}
function Ii(a,b,c,d){var e=new Zf(a);T(gg,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=L("PLAYBACK_ID"))&&(c.plid=d);(d=L("EVENT_ID"))&&(c.ei=d);b&&Vi(b,c);Pf("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",La:f,M:c,P:function(b,c){var d=c.response;T(ig,new bg(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&N("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&ti(d.actions)},
fa:function(){T(hg,e)}})}
function Ki(a,b,c,d,e){var f=new Zf(a);T(lg,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=L("PLAYBACK_ID"))&&(d.plid=a);(a=L("EVENT_ID"))&&(d.ei=a);c&&Vi(c,d);Pf("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",La:g,M:d,P:function(a,b){var c=b.response;T(ng,f);c.actions&&ti(c.actions)},
fa:function(){T(mg,f)}})}
function Qi(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new $f(a,b,c);Pf("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",M:d,onError:function(){T(tg,e)},
P:function(){T(sg,e)}})}}
function Mi(a){if(a.length){var b=Bb(a,0,40);T("subscription-batch-subscribe-loading");Ui(b,gg);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");Ui(b,hg)};
Pf("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",M:c,P:function(c,f){d();var e=f.response,h=e.id;if("array"==ga(h)&&h.length==b.length){var l=e.channel_info_map;z(h,function(a,c){var d=b[c];T(ig,new bg(d,a,l[d]))});
a.length?Mi(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function Oi(a){if(a.length){var b=Bb(a,0,40);T("subscription-batch-unsubscribe-loading");Ui(b,lg);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");Ui(b,mg)};
Pf("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",M:c,P:function(){d();Ui(b,ng);a.length&&Oi(a)},
onError:function(){d()}})}}
function Ui(a,b){z(a,function(a){T(b,new Zf(a))})}
function Vi(a,b){var c=Cf(a),d;for(d in c)b[d]=c[d]}
;v("yt.setConfig",Fe);v("yt.config.set",Fe);v("ytbin.www.subscribeembed.init",function(){Fi=!0;Gi.push(U(fg,Hi),U(kg,Ji));Fi||Gi.push(U(jg,Hi),U(og,Ji),U(dg,Li),U(eg,Ni),U(rg,Pi),U(Bi,Ri),U(Di,Ti),U(Ai,Si));var a=Wh.A(),b=X(a);b in Bf||(a.register(),yf(a,"yt-uix-init-"+b,a.init),yf(a,"yt-uix-dispose-"+b,a.dispose),Bf[b]=a);qi()});}).call(this);
