if (self.CavalryLogger) { CavalryLogger.start_js(["BpHEY"]); }

__d("PrivacyBaseFilterConst",[],(function a(b,c,d,e,f,g){f.exports={FRIEND_LIST:129,FRIENDS_PLUS_GAMER_FRIENDS:128,FRIENDS_MINUS_ACQUAINTANCES:127,FACEBOOK_EMPLOYEES:112,CUSTOM:111,EVERYONE:80,EVERYONE_MINOR_DEPRECATED:75,NETWORKS_FRIENDS_OF_FRIENDS:60,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,MUTUAL_FRIENDS_DEPRECATED:35,SELF:10,NOBODY:0};}),null);
__d('AnimationUtils',[],(function a(b,c,d,e,f,g){'use strict';var h={timingFunction:'ease',delay:'0s',iterationCount:'1',direction:'normal',fillMode:'none',playState:'running'},i={buildAnimationRule:function j(k,l){return '.'+k+' { animation:'+l+'; }';},updateAnimationRule:function j(k,l,m){var n=i.findCssRuleIndex(k,l),o=l.cssRules[n];return o.cssText.slice(0,-3)+(','+m+'; }');},removeAnimationRule:function j(k,l){var m=l.split(','),n=m.findIndex(function(t){return t.indexOf(k)>-1;});if(n===-1)return l;var o=m[n],p=o.indexOf(':'),q=o.indexOf(';'),r='';if(p>-1){r=o.substring(0,p+1);m.shift();r+=m.join(',');return r;}else{m.splice(n,1);r=m.join(',');var s=q>-1?'; }':'';return r+s;}},buildAnimation:function j(k,l){var m=arguments.length<=2||arguments[2]===undefined?{}:arguments[2],n=Object.assign({},h,m),o='';o+=' '+k+' '+l+' '+n.timingFunction;o+=' '+n.delay+' '+n.iterationCount;o+=' '+n.direction+' '+n.fillMode;o+=' '+n.playState;return o;},findCssRuleIndex:function j(k,l){var m=Array.from(l.cssRules);return m.findIndex(function(n){return n.cssText.indexOf(k)>-1;});}};f.exports=i;}),null);