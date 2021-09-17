!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@pixi/core"),require("@pixi/sprite"),require("@pixi/text"),require("@pixi/display"),require("@pixi/graphics"),require("@pixi/events"),require("emoji-regex/es2015/RGI_Emoji"),require("@pixi/math")):"function"==typeof define&&define.amd?define(["@pixi/core","@pixi/sprite","@pixi/text","@pixi/display","@pixi/graphics","@pixi/events","emoji-regex/es2015/RGI_Emoji","@pixi/math"],e):(t||self).TaggedText=e(t.core,t.sprite,t.text,t.display,t.graphics,0,t.getEmojiRegex,t.math)}(this,function(t,e,n,r,i,o,a,s){function u(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var l=u(a);function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(){return d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},d.apply(this,arguments)}function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var g,v,y,x,w=function(t,e){return d({},t,e)},m=function(t){return t[t.length-1]},b=function(t){return void 0!==t},S=function(t,e){return function(n){return[n].flat(255).reduce(t,e)}},_=function(t){return S(function(e,n){return e&&t(n)},!0)},T=function(){return{content:"",bounds:new s.Rectangle,fontProperties:{ascent:0,descent:0,fontSize:0},style:{},tags:"",textDecorations:[]}},C=function(t){return""!==t&&t.split("").every(function(t){return 0===t.search(/\s/)})},k=_(function(t){return t.content instanceof e.Sprite}),N=function(t){return"string"==typeof t.content},F=_(N),E=_(function(t){return void 0!==t&&N(t)&&C(t.content)}),j=function(t){return void 0!==t&&N(t)&&C(e=t.content)&&"\n"===e;var e},D=function(t){return void 0!==t&&_(j)(t)},M=(g=E,function(t){return!g(t)}),O=function(t){return t instanceof Object&&0===Object.keys(t).length},I=function(t){void 0===t&&(t=["\\w+"]);var e=t.join("|"),n=function(t){return"("+t+")"},r=function(t){return"(?:"+t+")"},i=r("\"|'"),o="[^"+i+"]",a=n(e),s=o+"+",u=n(r("\\s+"+r("[A-Za-z0-9_\\-]+")+"="+i+r(s)+i)+"*")+"+";return new RegExp("<"+a+u+"\\s*>|</"+a+"\\s*>","g")},P=function(t){var e,n=t[1],r=t.index;return{tag:t[0],tagName:null!=n?n:t[3],isOpening:void 0!==n,attributes:(e=t[2],void 0===e&&(e=""),""===e?{}:e.trim().split(/\s+/).reduce(function(t,e){var n=e.split("="),r=n[0].trim(),i=n[1].substr(1,n[1].length-2).trim();return t[r]=i,t},{})),index:r}},U=(v=function(t){return"("+t+")"},y=function(t){return t+"*"},new RegExp("<"+v("[A-Za-z_]"+y("[A-Za-z0-9_]"))+v(y(function(){return"[^"+[].slice.call(arguments).join("")+"]"}("/",">")))+"/>","gs")),z=function(t){return d({tag:t.tagName,children:[]},O(t.attributes)?{}:{attributes:t.attributes})},W=function(t){for(var e=t.split(" "),n="",r=0;r<e.length;r++)n+=""+e[r].charAt(0).toUpperCase()+e[r].substr(1)+" ";return n.trim()},A=function(t){return n.TextMetrics.measureFont(t.font)},R=function(t,e){if(void 0===e&&(e=!1),e)return t.updateText(!1),A(t.context);var n=A(t.context);if(10===n.ascent&&2===n.descent&&(!t.style.fontSize||t.style.fontSize>12||isNaN(t.style.fontSize)))throw new Error("getFontPropertiesOfText() returned metrics associated with a Text field that has not been updated yet. Please try using the forceUpdate parameter when you call this function.");return A(t.context)},L=((x={align:"left",valign:"baseline"}).imgDisplay="inline",x.wordWrap=!0,x.wordWrapWidth=500,x.lineSpacing=0,x.fill=0,x),G=w,q=function(t){return t.filter(b).reduce(G,{})},H=function(t,e,n){void 0===n&&(n={});var r=function(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!O(e)||!O(t))return w(e,function(t){var e={};for(var n in t){var r=t[n];e[n]=!1===isNaN(parseFloat(r))?parseFloat(r):r}return e}(t))}(n,e[t]);if(r!={})return r},V=function(t,e){return void 0===e&&(e={x:0,y:0}),new s.Rectangle(e.x+t.x,e.y+t.y,t.width,t.height)},B=function(t){return function(e){return e.map(function(t){return function(e){return d({},e,{x:e.x+t.x,y:e.y+t.y})}}(t))}},J=function(t){var e=t[0],n=m(t);return void 0===e?0:n===e?e.width:n.x+n.width-e.x},Z=function(t){return function(e){var n;return d({},e,((n={}).x=t,n))}},Y=function(t){return function(e){var n;return e.map(function(e){return void 0===n?(e.bounds.x=t,n=e.bounds):(e.bounds.x=n.x+n.width,n=e.bounds),e})}},$=function(t,e){if(void 0===t&&(t={x:NaN,y:NaN,width:NaN,height:NaN}),void 0===e&&(e={x:NaN,y:NaN,width:NaN,height:NaN}),isNaN(t.x))return e;var n=Math.min(t.x,e.x),r=Math.min(t.y,e.y);return{x:n,y:r,width:Math.max(t.x+t.width,e.x+e.width)-n,height:Math.max(t.y+t.height,e.y+e.height)-r}},X=S(function(t,e){return $(t,e.bounds)},{x:NaN,y:NaN,width:NaN,height:NaN}),K=function(t){return t.reduce(function(t,e,n){return 0===n?[Z(0)(e)]:t.concat([Z(t[n-1].x+t[n-1].width)(e)])},[])},Q=function(t){return S(function(t,e){var n,r,i=null!=(n=e.bounds.height)?n:0;return k(e)&&(i+=e.fontProperties.descent),i>(null!=(r=null==t?void 0:t.bounds.height)?r:0)?e:t},T())(t)},tt=function(t){return""!==t},et=function(t){return t.replace(/\s/g,"_🔪_$&_🔪_").split("_🔪_").filter(function(t){return""!==t})},nt={debug:!1,debugConsole:!1,splitStyle:"words",imgMap:{},skipUpdates:!1,skipDraw:!1,drawWhitespace:!1,wrapEmoji:!0},rt=16776960,it={fontFamily:"courier",fontSize:10,fill:16777215,dropShadow:!0},ot={default:L};Object.freeze(ot),Object.freeze(L);var at=function(o){var a,s;s=o,(a=y).prototype=Object.create(s.prototype),a.prototype.constructor=a,f(a,s);var u,h,g,v=y.prototype;function y(t,e,n,i){var a;void 0===t&&(t=""),void 0===e&&(e={}),void 0===n&&(n={}),(a=o.call(this,i)||this)._options=void 0,a._needsUpdate=!0,a._needsDraw=!0,a._tokens=[],a._text="",a._tagStyles={},a._textFields=[],a._sprites=[],a._decorations=[],a._spriteTemplates={},a._debugGraphics=null,a._textContainer=void 0,a._decorationContainer=void 0,a._spriteContainer=void 0,a._debugContainer=void 0,a._textContainer=new r.Container,a._spriteContainer=new r.Container,a._decorationContainer=new r.Container,a._debugContainer=new r.Container,a.addChild(a._textContainer),a.addChild(a._spriteContainer),a.addChild(a._decorationContainer),a.addChild(a._debugContainer),a.resetChildren();var s=d({},nt,n);a._options=s,e=d({default:{}},e),a.options.wrapEmoji&&(e.__EMOJI__={fontFamily:"sans-serif"});var u=d({},L,e.default);return e.default=u,a.tagStyles=e,a.options.imgMap&&a.createSpriteTemplatesFromSourceMap(a.options.imgMap),a.text=t,a}return v.setText=function(t,e){t===this._text&&!1===this._needsUpdate||(this._text=t,this._needsUpdate=!0,this.updateIfShould(e))},v.setTagStyles=function(t,e){var n=this;Object.entries(t).forEach(function(t){return n.setStyleForTag(t[0],t[1],!0)}),this._needsUpdate=!0,this.updateIfShould(e)},v.getStyleForTag=function(t,e){return void 0===e&&(e={}),H(t,this.tagStyles,e)},v.getStyleForTags=function(t){var e=this,n=t.map(function(t){return e.getStyleForTag(t.tagName,t.attributes)});return q(n)},v.setStyleForTag=function(t,e,n){return this.tagStyles[t]=e,"default"===t&&this.defaultStyle.imgSrc&&(console.error('Style "imgSrc" can not be set on the "default" style because it will add images to EVERY tag!'),this.defaultStyle.imgSrc=void 0),this._needsUpdate=!0,this.updateIfShould(n),!0},v.removeStylesForTag=function(t,e){return t in this.tagStyles&&(delete this.tagStyles[t],this._needsUpdate=!0,this.updateIfShould(e),!0)},v.setDefaultStyle=function(t,e){this.setStyleForTag("default",t,e)},v.resetChildren=function(){this._debugContainer.removeChildren(),this._textContainer.removeChildren(),this._spriteContainer.removeChildren(),this._decorationContainer.removeChildren(),this._textFields=[],this._sprites=[],this._decorations=[]},v.createSpriteTemplatesFromSourceMap=function(n){var r=this;this._spriteTemplates={},Object.entries(n).forEach(function(n){var i,o,a,s,u=n[0],l=n[1];if(l instanceof e.Sprite)a=l;else if("string"==typeof(s=l)||s instanceof t.Texture||s instanceof HTMLCanvasElement||s instanceof HTMLVideoElement)a=e.Sprite.from(l);else{if(!function(e){return e instanceof HTMLImageElement||e instanceof t.BaseTexture}(l))throw new TypeError("The spriteSource provided for key "+u+" was not in a valid format. Please use a Sprite, Texture, BaseTexture, string, HTMLImageElement, HTMLVideoElement, HTMLCanvasElement, or SVGElement");a=e.Sprite.from(t.Texture.from(l))}var c=a.texture;void 0!==c&&c.baseTexture.addListener("update",function(t){return r.onImageTextureUpdate(t)}),r.spriteTemplates[u]=a;var f=null!=(i=r.getStyleForTag(u))?i:{},h=d(((o={}).imgSrc=u,o),f);r.setStyleForTag(u,h)})},v.onImageTextureUpdate=function(t){this._needsUpdate=!0,this._needsDraw=!0,this.updateIfShould()},v.updateIfShould=function(t){return(!1===t||void 0===t&&!1===this.options.skipUpdates)&&(this.update(),!0)},v.update=function(t){var r=this.tagStyles,i=this.options.splitStyle,o=this.options.imgMap&&this.spriteTemplates,a=function(t,n,r){var i,o=null!=(i=n.default)?i:{},a=[],s={};return function t(i){var u;if("string"==typeof i)return i;var l,c=i.tag,f=i.attributes,h=o,p="";c&&(a.push({tagName:c,attributes:void 0===f?{}:f}),p=(l=a,l.map(function(t){return t.tagName})).join(","),h=function(t,e,n){var r=JSON.stringify(t);if(void 0===n[r]){var i=e.default,o=t.map(function(t){return function(t,e){return H(t.tagName,e,t.attributes)}(t,e)}),a=[i].concat(o);n[r]=q(a)}return n[r]}(a,n,s),h=function(t){var e=t.textDecoration;if(void 0===e||"normal"===e)return t;var n=t.decorationColor||t.fill||L.fill,r=t.decorationThickness||1;function i(e,i){var o,a,s,u,l;return void 0===i&&(i=e),null!=(o=t.textDecoration)&&o.includes(e)?((l={})[i+"Color"]=null!=(a=t[i+"Color"])?a:n,l[i+"Thickness"]=null!=(s=t[i+"Thickness"])?s:r,l[i+"Offset"]=null!=(u=t[i+"Offset"])?u:0,l):{}}return d({},t,i("underline"),i("overline"),i("line-through","lineThrough"))}(h));var g={style:h,tags:p,children:i.children.map(t)},v=null!=(u=h.imgSrc)?u:"";if(v){if(void 0===r)throw new Error('An image tag with imgSrc="'+v+'" was encountered, but no imgMap was provided. Please include a valid Sprite in the imgMap property in the options in your TaggedText constructor.');var y=r[v];if(void 0===y)throw new Error('An image tag with imgSrc="'+v+'" was encountered, but there was no matching sprite in the sprite map. Please include a valid Sprite in the imgMap property in the options in your TaggedText constructor.');if(y instanceof e.Sprite==0)throw new Error('The image reference you provided for "'+v+'" is not a Sprite. The imgMap can only accept PIXI.Sprite instances.');var x=function(t){return new e.Sprite(t.texture)}(y);g.children=[x].concat(g.children)}return a.pop(),g}(t)}(function(t,e,n){n&&function(t){return l.default().test(t)}(t)&&(t=function(t){var e=new RegExp("((<|</)[^>]*)?("+l.default().source+")+","gums");return t.replaceAll(e,function(t,e){return(null==e?void 0:e.length)>0?t:"<__EMOJI__>"+t+"</__EMOJI__>"})}(t)),t=function(t){return t.replace(U,function(t,e,n){void 0===n&&(n="");var r="<"+e+n+"></"+e+">";return(r=r.replace(/\s+/g," ")).replace(/\s>/g,">")})}(t);for(var r,i=I(e),o=[];r=i.exec(t);){var a=P(r);o.push(a)}var s=function(t,e){for(var n,r,i=[],o=t,a=0,s=p(e);!(r=s()).done;)if(n=r.value,void 0!==o){var u=n.index-a,l=u+n.tag.length;a+=l;var c=o.substr(0,u);i.push(c),o=o.substr(l)}return i.push(o),i}(t,o),u=function(t,e){var n={children:[]};""!==t[0]&&n.children.push(t[0]);for(var r=[n],i=0;i<e.length;i++){var o,a=e[i],s=null!=(o=t[i+1])?o:"";if(a.isOpening){var u=z(a);""!==s&&u.children.push(s),m(r).children.push(u),r.push(u)}else{var l=r.pop();if(void 0===l||l.tag!==a.tagName)throw new Error('Unexpected tag nesting. Found a closing tag "'+a.tagName+'" that doesn\'t match the previously open tag "'+(null==l?void 0:l.tag)+'"');""!==s&&m(r).children.push(s)}}return r.length>1&&console.warn("Found "+(r.length-1)+" unclosed tags in\n"+r.map(function(t){return t.tag}).join("-")),n.children}(s,o);return{children:u}}(this.text,Object.keys(this.tagStyles),this.options.wrapEmoji),r,o),s=function(t,r){var i,o;void 0===r&&(r="words");var a,s=new n.Text(""),u=t.style,l=t.children.flatMap(function t(n,i){return function(o){var u=[];if(s.style=d({},n,{wordWrap:!1,dropShadowBlur:0,dropShadowDistance:0,dropShadowAngle:0,dropShadow:!1}),"string"==typeof o){var l=function(t,e){if("words"===e)return[t].flatMap(et).filter(tt);if("characters"===e)return t.split("");var n=' Supported styles are "words" and "characters"',r=e.toLowerCase();throw 0===r.indexOf("char")?n='Did you mean "characters"?':0===r.indexOf("wor")&&(n='Did you mean "words"?'),new Error('Unsupported split style "'+e+'". '+n)}(o,r),c=l.map(function(t){var e,r,o;switch(n.textTransform){case"uppercase":s.text=t.toUpperCase();break;case"lowercase":s.text=t.toLowerCase();break;case"capitalize":s.text=W(t);break;default:s.text=t}var u=null!=(e=n.fontScaleWidth)?e:1,l=null!=(r=n.fontScaleHeight)?r:1,c=isNaN(u)||u<0?0:u,f=isNaN(l)||l<0?0:l;s.scale.set(c,f),(a=d({},R(s,!0))).ascent*=f,a.descent*=f,a.fontSize*=f;var h=V(s),p=null!=(o=s.style.strokeThickness)?o:0;p>0&&(a.descent+=p/2,a.ascent+=p/2,a.fontSize=a.ascent+a.descent);var g=function(t,e,n){var r=n.descent,i=n.ascent,o=r,a=i-o,s=e.width;return["underline","overline","lineThrough"].map(function(e){var n,u=t[e+"Color"],l=t[e+"Thickness"],c=null!=(n=t[e+"Offset"])?n:0;if(void 0!==u&&void 0!==l){var d=c;return"underline"===e?d+=i+r/2:"lineThrough"===e&&(d+=o+a/2),{color:u,bounds:{x:0,y:d,width:s,height:l}}}}).filter(function(t){return void 0!==t})}(n,h,a);return{content:t,style:n,tags:i,bounds:h,fontProperties:a,textDecorations:g}});u=u.concat(c)}else if(o instanceof e.Sprite){var f=o,h="icon"===n.imgDisplay;if(a=d({},R(s,!0)),h){var p=Math.max(f.height,1);p>1&&1===f.scale.y&&f.scale.set(a.ascent/p*.8)}var g=V(f);u.push({content:f,style:n,tags:i,bounds:g,fontProperties:a,textDecorations:void 0})}else{var v=o.children,y=o.style,x=o.tags;if(void 0===y)throw new Error("Expected to find a 'style' property on "+o);u=u.concat(v.flatMap(t(y,x)))}return u}}(u,"")),c=u.wordWrap,f=u.wordWrapWidth,h=void 0!==f&&!isNaN(f)&&f>0,g=null!=(i=u.lineSpacing)?i:0,v=null!=(o=u.align)?o:"left";return function(t,e,n,r){var i,o={x:0,y:0},a=0,s=[],u=[],l=[],c=0;function f(){void 0!==s&&s.length>0&&u.push(s),s=[],a=0}function h(){l.push(u),u=[]}function g(t){h(),o.x=0,o.y=o.y+c,c=0,v(t)}function v(t){var e,r,i,o,a=null!=(e=null==t||null==(r=t.fontProperties)?void 0:r.fontSize)?e:0,s=null!=(i=null==t||null==(o=t.bounds)?void 0:o.height)?i:0;c=Math.max(c,a,n),!1===D(t)&&(c=Math.max(c,s))}function y(t){v(t),t.bounds.x=o.x,t.bounds.y=o.y,o.x+=t.bounds.width}function x(){s.forEach(y)}function w(t){return"block"===t.style.imgDisplay}function m(t){s.push(t),a+=t.bounds.width}for(var b=0;b<t.length;b++){var S=E(i=t[b]),_=D(i),C=k(i);(S||C)&&(x(),f()),m(i),v(i),S&&(x(),f()),(_||w(i)||o.x+a>e&&u.length>0)&&g(i)}s.length>0&&(x(),f()),u.length>0&&h();var N=function(t){for(var e,n=p(t);!(e=n()).done;)for(var r=e.value,i=r.length;i>=0;){var o=r[i-=1];if(M(o))break;for(var a,s=p(o);!(a=s()).done;){var u=a.value;u.bounds.width=0,u.bounds.height=Math.min(u.bounds.height,u.fontProperties.fontSize)}}return t}(l),F=function(t,e,n){for(var r,i=T(),o=0,a=[],s=p(t);!(r=s()).done;){var u,l,c,f,h=r.value,g=[],v=Q(h),y=null!=(u=null==(l=v.bounds)?void 0:l.height)?u:0,x=null!=(c=null==(f=v.fontProperties)?void 0:f.ascent)?c:0;k(v)&&(y+=v.fontProperties.descent,x=v.bounds.height),0===y?v=i:i=v;for(var w,m=p(h);!(w=m()).done;){for(var b,S=[],_=p(w.value);!(b=_()).done;){var C=b.value;if(D(C)){var N=d({},C);S.push(N)}else{var F=C.bounds,E=C.fontProperties,j=C.style,M=F.height,O=d({},F),I=j.valign,P=E.ascent;k(C)&&(P=C.bounds.height);var U=0;switch(I){case"bottom":U=o+y-M;break;case"middle":U=o+(y-M)/2;break;case"top":U=o;break;default:U=o+x-P}O.y=U;var z=d({},C,{bounds:O});S.push(z)}}g.push(S)}o+=y+e,a.push(g)}return a}(function(t,e,n){var r,i;switch(t){case"left":r=K;break;case"right":r=function(t){return function(e){return B({x:t-J(e),y:0})(K(e))}}(e);break;case"center":r=function(t){return function(e){return B({x:(n=J(e),r=t,(r-n)/2),y:0})(K(e));var n,r}}(e);break;case"justify":i=e,r=function(t){if(0===t.length)return[];var e=t.filter(function(t){return t.width>0}),n=e.length;if(1===n){var r=t[0],o=t.slice(1);return r.x=0,[r].concat(o)}for(var a,s=[],u=function(t){return t.reduce($)}(e),l=(i-u.width)/(n-1),c=0;c<t.length;c++){var f=t[c];if(0!==f.width){var h;if(h=void 0===a?0:a.x+a.width+l,isNaN(h))throw new Error("Something went wrong with the justified layout calculation. x is NaN.");var p=Z(h)(f);a=p,s[c]=p}else s[c]=d({},f)}return s};break;default:throw new Error("Unsupported alignment type "+t+'! Use one of : "left", "right", "center", "justify"')}for(var o,a=p(n);!(o=a()).done;){for(var s,u=o.value,l=[],c=p(u);!(s=c()).done;){var f=X(s.value);if(l.push(f),isNaN(f.x))throw new Error("wordBounds not correct")}for(var h=r(l),g=0;g<u.length;g++){var v=u[g];u[g]=Y(h[g].x)(v)}}return n}(r,e,N),n);return F}(l,c&&h?f:Number.POSITIVE_INFINITY,g,v)}(a,i);return this._tokens=s,this._needsDraw=!0,this.drawIfShould(t),this.options.debugConsole&&console.log(this.toDebugString()),this._needsUpdate=!1,s},v.drawIfShould=function(t){return(!1===t||void 0===t&&!1===this.options.skipDraw)&&(this.draw(),!0)},v.draw=function(){var t=this;this.resetChildren();var e,n=this.options.drawWhitespace,r=n?this.tokensFlat:this.tokensFlat.filter(M),i=!1;r.forEach(function(n){if(F(n)&&(e=t.createTextFieldForToken(n),t.textContainer.addChild(e),t.textFields.push(e),n.textDecorations&&n.textDecorations.length>0)){for(var r,o=p(n.textDecorations);!(r=o()).done;){var a=t.createDrawingForTextDecoration(r.value);e.addChild(a),t._decorations.push(a)}i=!0}k(n)&&(t.sprites.push(e=n.content),t.spriteContainer.addChild(e));var s=n.bounds;e.x=s.x,e.y=s.y}),!1===n&&i&&console.warn("Warning: you may want to set the `drawWhitespace` option to `true` when using textDecoration (e.g. underlines) otherwise, spaces will not have text decorations."),this.options.debug&&this.drawDebug(),this._needsDraw=!1},v.createDrawingForTextDecoration=function(t){var e=t.bounds,n=t.color,r=new i.Graphics;if("string"==typeof n){if(0!==n.indexOf("#"))throw new Error("Sorry, at this point, only hex colors are supported for textDecorations like underlines. Please use either a hex number like 0x66FF33 or a string like '#66FF33'");n="0x"+n.substring(1),n=parseInt(n,16)}return r.beginFill(n).drawRect(e.x,e.y,e.width,e.height).endFill(),r},v.createTextFieldForToken=function(t){var e=t.style.textTransform,r=t.content;switch((void 0===e?"":e).toLowerCase()){case"lowercase":r=r.toLowerCase();break;case"uppercase":r=r.toUpperCase();break;case"capitalize":r=W(r)}var i=new n.Text(r,t.style),o=t.style,a=o.fontScaleWidth,s=void 0===a?1:a,u=o.fontScaleHeight,l=void 0===u?1:u,c=s=isNaN(s)||s<0?0:s,d=l=isNaN(l)||l<0?0:l,f=Math.max(s,l);if(f>1){var h;f===l?(c/=f,d=1):(d/=f,c=1);var p=null!=(h=i.style.fontSize)?h:0,g=("string"==typeof p?function(t){var e=t.split(/(%|pt|px|r?em)/),n=e[1],r=parseFloat(e[0]);switch(n){case"%":return.16*r;case"em":case"rem":return 16*r;case"pt":return 1.3281472327365*r;default:return r}}(p):p)*f;i.style.fontSize=g}return i.scale.set(c,d),i},v.toDebugString=function(){var t=this.tokens,e=this.untaggedText+"\n=====\n",n="\n    ";return void 0!==t&&(e+=t.map(function(t,e){return t.map(function(t,r){return t.map(function(t,i){var o="";F(t)?o=D(t)?"\\n":'"'+t.content+'"':k(t)&&(o="[Image]");var a="\n"+o+": ("+e+"/"+r+"/"+i+")";return a+=n+"tags: "+(0===t.tags.length?"<none>":t.tags.split(",").map(function(t){return"<"+t+">"}).join(", ")),a+=n+"style: "+Object.entries(t.style).map(function(t){return t.join(":")}).join("; "),(a+=n+"size: x:"+t.bounds.x+" y:"+t.bounds.y+" width:"+t.bounds.width+" height:"+t.bounds.height+" bottom:"+(t.bounds.height+t.bounds.y)+" right:"+(t.bounds.x+t.bounds.width))+n+"font: fontSize:"+t.fontProperties.fontSize+" ascent:"+t.fontProperties.ascent+" descent:"+t.fontProperties.descent}).join("\n")})})),e},v.drawDebug=function(){var t=this.tokens;this._debugGraphics=new i.Graphics,this.debugContainer.addChild(this._debugGraphics);var e=this._debugGraphics;function r(t,e){var r=new n.Text(t,it);return r.x=e.x+1,r.y=e.y+1,r}e.clear();for(var o=0;o<t.length;o++){var a=t[o],s=X(a);if(this.defaultStyle.wordWrap){var u,l=null!=(u=this.defaultStyle.wordWrapWidth)?u:this.width;e.endFill().lineStyle(.5,rt,.2).drawRect(0,s.y,l,s.height).endFill()}for(var c=0;c<a.length;c++)for(var d,f=p(a[c]);!(d=f()).done;){var h=d.value,g=k(h),v=h.bounds,y=v.x,x=v.y,w=v.width,m=x+(g?h.bounds.height:h.fontProperties.ascent),b=h.bounds.height;g&&(b+=h.fontProperties.descent),E(h)&&!1===this.options.drawWhitespace?e.lineStyle(1,11184810,1).beginFill(13421772,.2):e.lineStyle(1,16764108,1).beginFill(15658734,.2),D(h)?this.debugContainer.addChild(r("↩︎",{x:y,y:x+10})):e.lineStyle(.5,rt,.2).drawRect(y,x,w,b).endFill().lineStyle(1,16777113,1).beginFill().drawRect(y,m,w,1).endFill(),F(h)&&this.debugContainer.addChild(r(""+h.tags,{x:y,y:x}))}}},u=y,h=[{key:"options",get:function(){return this._options}},{key:"needsUpdate",get:function(){return this._needsUpdate}},{key:"needsDraw",get:function(){return this._needsDraw}},{key:"tokensFlat",get:function(){return this._tokens.flat(3)}},{key:"tokens",get:function(){return this._tokens}},{key:"text",get:function(){return this._text},set:function(t){this.setText(t)}},{key:"untaggedText",get:function(){return this.text.replace(I(),"")}},{key:"tagStyles",get:function(){return this._tagStyles},set:function(t){this.setTagStyles(t)}},{key:"defaultStyle",get:function(){var t;return null==(t=this.tagStyles)?void 0:t.default},set:function(t){this.setDefaultStyle(t)}},{key:"textFields",get:function(){return this._textFields}},{key:"sprites",get:function(){return this._sprites}},{key:"decorations",get:function(){return this._decorations}},{key:"spriteTemplates",get:function(){return this._spriteTemplates}},{key:"textContainer",get:function(){return this._textContainer}},{key:"decorationContainer",get:function(){return this._decorationContainer}},{key:"spriteContainer",get:function(){return this._spriteContainer}},{key:"debugContainer",get:function(){return this._debugContainer}}],g=[{key:"defaultStyles",get:function(){return ot}},{key:"defaultOptions",get:function(){return nt}}],h&&c(u.prototype,h),g&&c(u,g),y}(e.Sprite);return at});
//# sourceMappingURL=pixi-tagged-text.umd.js.map
