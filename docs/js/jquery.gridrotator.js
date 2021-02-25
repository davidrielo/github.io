!function(t,e,o){"use strict";function i(){var t=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var e=0;e<t.length;e++)if(t[e]+"Hidden"in document)return t[e]+"Hidden";return null}function s(){var t=i();return!!t&&document[t]}function a(t){return 0===Object.keys(t).length}var n,r,h=t.event;n=h.special.debouncedresize={setup:function(){t(this).on("resize",n.handler)},teardown:function(){t(this).off("resize",n.handler)},handler:function(t,e){var o=this,i=arguments,s=function(){t.type="debouncedresize",h.dispatch.apply(o,i)};r&&clearTimeout(r),e?s():r=setTimeout(s,n.threshold)},threshold:100},Array.prototype.shuffle=function(){for(var t,e,o=this.length;o--;)t=Math.floor(Math.random()*o),e=this[o],this[o]=this[t],this[t]=e;return this};var d=t(e),c=e.Modernizr;t.GridRotator=function(e,o){if(this.jQueryel=t(o),c.backgroundsize){this.jQueryel.addClass("ri-grid-loading"),this._init(e)}},t.GridRotator.defaults={rows:2,columns:4,w1024:{rows:3,columns:8},w768:{rows:3,columns:7},w480:{rows:3,columns:5},w320:{rows:2,columns:4},w240:{rows:2,columns:3},step:"random",maxStep:3,preventClick:!0,animType:"random",animSpeed:800,animEasingOut:"linear",animEasingIn:"linear",interval:3e3,slideshow:!0,onhover:!1,nochange:[]},t.GridRotator.prototype={_init:function(e){this.options=t.extend(!0,{},t.GridRotator.defaults,e),this._config()},_config:function(){var e=this,o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};this.supportTransitions=c.csstransitions,this.supportTransforms3D=c.csstransforms3d,this.transEndEventName=o[c.prefixed("transition")]+".gridrotator",this.animTypes=this.supportTransforms3D?["fadeInOut","slideLeft","slideRight","slideTop","slideBottom","rotateLeft","rotateRight","rotateTop","rotateBottom","scale","rotate3d","rotateLeftScale","rotateRightScale","rotateTopScale","rotateBottomScale"]:["fadeInOut","slideLeft","slideRight","slideTop","slideBottom"],this.animType=this.options.animType,"random"===this.animType||this.supportTransforms3D||-1!==t.inArray(this.animType,this.animTypes)||"showHide"===this.animType||(this.animType="fadeInOut"),this.animTypesTotal=this.animTypes.length,this.jQuerylist=this.jQueryel.children("ul");var i=0,s=this.jQuerylist.find("img"),a=s.length;s.each(function(){var o=t(this),n=o.attr("src");t("<img/>").load(function(){++i,o.parent().css("background-image","url("+n+")"),i===a&&(s.remove(),e.jQueryel.removeClass("ri-grid-loading"),e.jQueryitems=e.jQuerylist.children("li"),e.jQueryitemsCache=e.jQueryitems.clone(),e.itemsTotal=e.jQueryitems.length,e.outItems=[],e._layout(function(){e._initEvents()}),e._start())}).attr("src",n)})},_layout:function(e){var o=this;this._setGridDim(),this.jQuerylist.empty(),this.jQueryitems=this.jQueryitemsCache.clone().appendTo(this.jQuerylist);var i=this.jQueryitems.filter(":gt("+(this.showTotal-1)+")"),s=i.children("a");this.outItems.length=0,s.each(function(e){o.outItems.push(t(this))}),i.remove();for(var a=document.defaultView?parseInt(document.defaultView.getComputedStyle(this.jQueryel.get(0),null).width):this.jQueryel.width(),n=Math.floor(a/this.columns),r=a-this.columns*Math.floor(n),h=0;h<this.rows;++h)for(var d=0;d<this.columns;++d){var c=this.columns*h+d,l=this.jQueryitems.eq(c);l.css({width:d<Math.floor(r)?n+1:n,height:n}),-1!==t.inArray(c,this.options.nochange)&&l.addClass("ri-nochange").data("nochange",!0)}this.options.preventClick&&this.jQueryitems.children().css("cursor","default").on("click.gridrotator",!1),e&&e.call()},_setGridDim:function(){var t=this.jQueryel.width();switch(!0){case t<240:this.rows=this.options.w240.rows,this.columns=this.options.w240.columns;break;case t<320:this.rows=this.options.w320.rows,this.columns=this.options.w320.columns;break;case t<480:this.rows=this.options.w480.rows,this.columns=this.options.w480.columns;break;case t<768:this.rows=this.options.w768.rows,this.columns=this.options.w768.columns;break;case t<1024:this.rows=this.options.w1024.rows,this.columns=this.options.w1024.columns;break;default:this.rows=this.options.rows,this.columns=this.options.columns}this.showTotal=this.rows*this.columns},_initEvents:function(){var e=this;d.on("debouncedresize.gridrotator",function(){e._layout()});var o=i();if(o){var s=o.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(s,function(){e._visChange()})}!c.touch&&this.options.onhover&&e.jQueryitems.on("mouseenter.gridrotator",function(){var o=t(this);o.data("active")||o.data("hovered")||o.data("nochange")||(o.data("hovered",!0),e._replace(o))}).on("mouseleave.gridrotator",function(){t(this).data("hovered",!1)})},_visChange:function(){s()?clearTimeout(this.playtimeout):this._start()},_start:function(){this.showTotal<this.itemsTotal&&this.options.slideshow&&this._showNext()},_getAnimType:function(){return"random"===this.animType?this.animTypes[Math.floor(Math.random()*this.animTypesTotal)]:this.animType},_getAnimProperties:function(t){var e,o={},i={},s={},a={},n=this._getAnimType(),r=0;switch(n){case"showHide":e=0,a.opacity=0;break;case"fadeInOut":a.opacity=0;break;case"slideLeft":o.left=t.width(),s.left=0,a.left=-t.width();break;case"slideRight":o.left=-t.width(),s.left=0,a.left=t.width();break;case"slideTop":o.top=t.height(),s.top=0,a.top=-t.height();break;case"slideBottom":o.top=-t.height(),s.top=0,a.top=t.height();break;case"rotateLeft":e=this.options.animSpeed/2,o.transform="rotateY(90deg)",s.transform="rotateY(0deg)",r=e,a.transform="rotateY(-90deg)";break;case"rotateRight":e=this.options.animSpeed/2,o.transform="rotateY(-90deg)",s.transform="rotateY(0deg)",r=e,a.transform="rotateY(90deg)";break;case"rotateTop":e=this.options.animSpeed/2,o.transform="rotateX(90deg)",s.transform="rotateX(0deg)",r=e,a.transform="rotateX(-90deg)";break;case"rotateBottom":e=this.options.animSpeed/2,o.transform="rotateX(-90deg)",s.transform="rotateX(0deg)",r=e,a.transform="rotateX(90deg)";break;case"scale":e=this.options.animSpeed/2,o.transform="scale(0)",i.transform="scale(1)",s.transform="scale(1)",r=e,a.transform="scale(0)";break;case"rotateLeftScale":i.transform="scale(1)",e=this.options.animSpeed/2,o.transform="scale(0.3) rotateY(90deg)",s.transform="scale(1) rotateY(0deg)",r=e,a.transform="scale(0.3) rotateY(-90deg)";break;case"rotateRightScale":i.transform="scale(1)",e=this.options.animSpeed/2,o.transform="scale(0.3) rotateY(-90deg)",s.transform="scale(1) rotateY(0deg)",r=e,a.transform="scale(0.3) rotateY(90deg)";break;case"rotateTopScale":i.transform="scale(1)",e=this.options.animSpeed/2,o.transform="scale(0.3) rotateX(90deg)",s.transform="scale(1) rotateX(0deg)",r=e,a.transform="scale(0.3) rotateX(-90deg)";break;case"rotateBottomScale":i.transform="scale(1)",e=this.options.animSpeed/2,o.transform="scale(0.3) rotateX(-90deg)",s.transform="scale(1) rotateX(0deg)",r=e,a.transform="scale(0.3) rotateX(90deg)";break;case"rotate3d":e=this.options.animSpeed/2,o.transform="rotate3d( 1, 1, 0, 90deg )",s.transform="rotate3d( 1, 1, 0, 0deg )",r=e,a.transform="rotate3d( 1, 1, 0, -90deg )"}return{startInProp:o,startOutProp:i,endInProp:s,endOutProp:a,delay:r,animSpeed:void 0!=e?e:this.options.animSpeed}},_showNext:function(t){var e=this;clearTimeout(this.playtimeout),this.playtimeout=setTimeout(function(){var t=e.options.step,o=e.options.maxStep;o>e.showTotal&&(o=e.showTotal);for(var i="random"===t?Math.floor(Math.random()*o+1):Math.min(Math.abs(t),o),s=e._getRandom(i,e.showTotal),a=0;a<i;++a){var n=e.jQueryitems.eq(s[a]);if(n.data("active")||n.data("nochange"))return e._showNext(1),!1;e._replace(n)}e._showNext()},t||Math.max(Math.abs(this.options.interval),300))},_replace:function(e){e.data("active",!0);var o=this,i=e.children("a:last"),s={width:i.width(),height:i.height()};e.data("active",!0);var n=this.outItems.shift();this.outItems.push(i.clone().css("transition","none")),n.css(s).prependTo(e);var r=this._getAnimProperties(i);n.css(r.startInProp),i.css(r.startOutProp),this._setTransition(n,"all",r.animSpeed,r.delay,this.options.animEasingIn),this._setTransition(i,"all",r.animSpeed,0,this.options.animEasingOut),this._applyTransition(n,r.endInProp,r.animSpeed,function(){var e=t(this),i=r.animSpeed===o.options.animSpeed&&a(r.endInProp)?r.animSpeed:0;setTimeout(function(){o.supportTransitions&&e.off(o.transEndEventName),e.next().remove(),e.parent().data("active",!1)},i)},0===r.animSpeed||a(r.endInProp)),this._applyTransition(i,r.endOutProp,r.animSpeed)},_getRandom:function(t,e){for(var o=[],i=0;i<e;++i)o.push(i);return o.shuffle().slice(0,t)},_setTransition:function(t,e,o,i,s){setTimeout(function(){t.css("transition",e+" "+o+"ms "+i+"ms "+s)},25)},_applyTransition:function(e,o,i,s,a){var n=this;setTimeout(function(){t.fn.applyStyle=n.supportTransitions?t.fn.css:t.fn.animate,s&&n.supportTransitions&&(e.on(n.transEndEventName,s),a&&s.call(e)),s=s||function(){return!1},e.stop().applyStyle(o,t.extend(!0,[],{duration:i+"ms",complete:s}))},25)}};var l=function(t){e.console&&e.console.error(t)};t.fn.gridrotator=function(e){var o=t.data(this,"gridrotator");if("string"==typeof e){var i=Array.prototype.slice.call(arguments,1);this.each(function(){return o?t.isFunction(o[e])&&"_"!==e.charAt(0)?void o[e].apply(o,i):void l("no such method '"+e+"' for gridrotator instance"):void l("cannot call methods on gridrotator prior to initialization; attempted to call method '"+e+"'")})}else this.each(function(){o?o._init():o=t.data(this,"gridrotator",new t.GridRotator(e,this))});return o}}(jQuery,window);