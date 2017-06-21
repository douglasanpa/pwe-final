!function(e,t,n){function i(e){return this._state={"html":null,"css":null,"js":null,"console":!0,"hide":!1},this._readonly=!1,this._codeArea=null,this._snip=null,this._menu=null,this._footer=null,this._jQuerySelect=null,this._d3Select=null,this._knockoutSelect=null,this._angularJSSelect=null,this._reactJSSelect=null,this._hide=!1,this._console=!0,this._boxHtml=null,this._boxCss=null,this._boxJs=null,this._boxResult=null,this._codeMirrorHtml=null,this._codeMirrorCss=null,this._codeMirrorJs=null,e.readonly!==n&&e.readonly&&(this._readonly=!0),this}function r(){return this._state={"html":null,"css":null,"js":null,"console":!1,"hide":!1},this._menu=null,this._snip=null,this._results=null,this._boxResult=null,this}function a(e,t,n){return e.replace(/^(?=.)/gm,new Array(t*n+1).join(" "))}function o(e){var t="\n\n<!-- begin snippet: js hide: "+e.hide+" console: "+e.console+" babel: "+e.babel+" -->\n\n";return""!=e.js&&(t+="<!-- language: lang-js -->\n\n"+a(e.js,1,4)+"\n\n"),""!=e.css&&(t+="<!-- language: lang-css -->\n\n"+a(e.css,1,4)+"\n\n"),""!=e.html&&(t+="<!-- language: lang-html -->\n\n"+a(e.html,1,4)+"\n\n"),t+="<!-- end snippet -->\n\n"}function s(e,t,n,i){var r=/<!--\s+language:\s*lang-js\s+-->([\s\S]*?)(?:<!--\s+language:|$)/gi,a=/<!--\s+language:\s*lang-css\s+-->([\s\S]*?)(?:<!--\s+language:|$)/gi,o=/<!--\s+language:\s*lang-html\s+-->([\s\S]*?)(?:<!--\s+language:|$)/gi;try{var s=r.exec(e),c=a.exec(e),u=o.exec(e),l="",d="",p="";if(null!=s&&(l=s[1].trim().replace(/^    /gm,"")),null!=c&&(d=c[1].trim().replace(/^    /gm,"")),null!=u&&(p=u[1].trim().replace(/^    /gm,"")),""==l&&""==d&&""==p)return null;var f={"js":l,"css":d,"html":p,"console":n===!0||"true"===n,"hide":t===!0||"true"===t,"babel":i===!0||"true"===i};return f}catch(h){return null}}function c(e){if(!StackExchange.snippets.renderer)return e;var t="sandbox"in document.createElement("iframe");if(!t)return e;var n=/<!--\s+begin snippet:\s*[a-z]+\s*(?:hide:\s*([a-zA-Z]+))?\s*(?:console:\s*([a-zA-Z]+))?\s*(?:babel:\s*([a-zA-Z]+))?\s+-->([\s\S]*?)<!--\s+end snippet\s+-->/gi;return e=e.replace(n,function(e,t,n,i,r){return StackExchange.snippets.renderer(r,t,n,i)})}function u(){StackExchange.snippets.renderer&&StackExchange.snippets.redraw||(StackExchange.snippets.redraw=function(){e("div.snippet").each(function(){var t=e(this);return t.closest(".downvoted-answer").length>0?!0:(l(t),void 0)})},StackExchange.snippets.renderer=function(t,n,i,r){n||(n=!1),i||(i=!1),r||(r=!1);var a=s(t,n,i,r);if(null==a)return t;var o=e('<div class="snippet" data-lang="js" data-hide="'+n+'" data-console="'+i+'"></div>'),c=e('<div class="snippet-code"></div>');n&&c.addClass("snippet-currently-hidden"),o.append(c),""!=a.js&&c.append(e('<pre class="snippet-code-js lang-js prettyprint-override">').append(e("<code>").text(a.js))),""!=a.css&&c.append(e('<pre class="snippet-code-css lang-css prettyprint-override">').append(e("<code>").text(a.css))),""!=a.html&&c.append(e('<pre class="snippet-code-html lang-html prettyprint-override">').append(e("<code>").text(a.html)));var u=p();return c.snippet({"state":a}),v[u]=o,"<pre>"+u+"</pre>"},StackExchange.snippets.redraw())}function l(t){var n=t.find(".snippet-code");0==n.length&&(n=t);var i=n.find("pre.snippet-code-js").text(),r=n.find("pre.snippet-code-css").text(),a=n.find("pre.snippet-code-html").text(),o={"js":i,"css":r,"html":a,"console":t.data("console")===!0,"hide":t.data("hide")===!0,"babel":t.data("babel")===!0};if(n.snippet({"state":o}),(StackExchange.options.user.isAnonymous||0==t.parent().length||0==e("textarea#wmd-input").length||e(".popup-suggested-edit").length)&&t.find(".copySnippet").hide(),t.data("hide")===!0){n.hide(),n.addClass("snippet-currently-hidden"),t.find(".snippet-display").remove();var s=e('<div class="snippet-display" style="vertical-align: center"></div>').append(e("<p></p>").append(e('<a class="snippet-show-link-chevron"><span class="expander-arrow-hide" style="vertical-align: middle;"></span><a class="snippet-show-link"><span class="show-hide" data-ishidden="true" style="vertical-align: middle">Show code snippet</span></a>')));s.click(function(){n.toggle();var t=e(this).find(".show-hide");t.data("ishidden")===!0?(t.text("Hide code snippet"),e(this).find(".expander-arrow-hide").removeClass("expander-arrow-hide").addClass("expander-arrow-show"),t.data("ishidden",!1)):(t.text("Show code snippet"),e(this).find(".expander-arrow-show").removeClass("expander-arrow-show").addClass("expander-arrow-hide"),t.data("ishidden",!0))}),t.prepend(s)}else n.show(),n.removeClass("snippet-currently-hidden"),t.find(".snippet-display").remove()}var d=!1,p=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}}(),f=StackExchange.settings.snippets.renderDomain,h=null,g=function(t){return h?e.when():e.ajax("/snippets/editor-ui"+(t?"?readOnly=true":""),{"success":function(e){h=e}})};e.fn.snippet=function(a){return a=a||{},this.each(function(){var o=e(this),s=o.data("_snippet");if(!s){var c=a.markdownPluginMode!==n&&a.markdownPluginMode;if(s=c?new i(a):new r(a),c){var u=function(){s.uiInnerHtml=h,s.generate(o),s.resize(),e(t).resize(function(){s.resize()}),o.data("_snippet",s),a.resize!==n&&a.resize&&s.resize(),a.state!==n&&null!=a.state&&s.load(a.state)};StackExchange.using("snippetsJsCodeMirror",function(){setTimeout(function(){g(a.readonly).then(u)},1)})}else s.generate(o),o.data("_snippet",s),a.resize!==n&&a.resize&&s.resize(),a.state!==n&&null!=a.state&&s.load(a.state)}})},i.prototype={"uiInnerHtml":null,"registerExternalLibChange":function(t,n,i,r){t.change(function(){var t=e(this).val(),a=r.getValue(),o=!1,s=n.replace(/\*version\*/g,t);return a=a.replace(i,function(){return o=!0,""==t&&(s=""),s}),a=a.trim(),o?(r.setValue(a),void 0):(""!=t&&(r.setValue(s+"\n"+a),r.save()),void 0)})},"generate":function(t){function n(e,t,n){var r=CodeMirror.fromTextArea(e,{"electricChars":!1,"smartIndent":!1,"lineNumbers":!0,"lineWrapping":!0,"mode":t,"tabSize":2,"indentWithTabs":!1,"readOnly":i._readonly});return r.on("change",function(){d=!0,r.save()}),r.beautify=function(){r.setValue(n(r.getValue().trim(),{"indent_size":r.options.tabSize,"indent_char":" "}))},r}var i=this;return i._snip?i._snip:(i._snip=e(i.uiInnerHtml),e(i._snip).find("#snpte-close-button").click(function(t){return StackExchange.helpers.closePopups(e(this).closest(".snippet-modal"),"esc"),t.preventDefault(),!1}),i._jQuerySelect=i._snip.find("#snpte-jquery-select"),i._d3Select=i._snip.find("#snpte-d3-select"),i._knockoutSelect=i._snip.find("#snpte-knockout-select"),i._angularJSSelect=i._snip.find("#snpte-angular-select"),i._reactJSSelect=i._snip.find("#snpte-react-select"),i._hide=i._snip.find("#snpte-hide-snippet"),i._console=i._snip.find("#snpte-show-console"),i._babel=i._snip.find("#snpte-use-babel"),i._snip.find("#snpte-button-run").click(function(){i.run()}),i._snip.find("#snpte-button-tidy").click(function(){i._codeMirrorHtml.beautify(),i._codeMirrorCss.beautify(),i._codeMirrorJs.beautify()}),i._snip.find("#snpte-button-insert").click(function(){StackExchange.helpers.closePopups(e(".snippet-modal"))}),i._snip.find("#snpte-button-reset").click(function(){i.clear()}),t.empty().append(i._snip),i._boxHtml=i._snip.find("#snpte-box-edit-html"),i._boxCss=i._snip.find("#snpte-box-edit-css"),i._boxJs=i._snip.find("#snpte-box-edit-js"),i._boxResult=i._snip.find("#snpte-box-edit-result"),CodeMirror.commands.insertTab=CodeMirror.commands.insertSoftTab,CodeMirror.keyMap.default["Shift-Tab"]="indentLess",CodeMirror.commands.indentAuto=function(e){e.beautify()},i._codeMirrorHtml=n(i._boxHtml[0],"htmlmixed",html_beautify),i._codeMirrorCss=n(i._boxCss[0],"css",css_beautify),i._codeMirrorJs=n(i._boxJs[0],"javascript",js_beautify),i.registerExternalLibChange(i._jQuerySelect,'<script src="https://ajax.googleapis.com/ajax/libs/jquery/*version*/jquery.min.js"></script>',/^<script src="https:\/\/ajax\.googleapis\.com\/ajax\/libs\/jquery\/.*?\/jquery\.min\.js"><\/script>/gim,i._codeMirrorHtml),i.registerExternalLibChange(i._d3Select,'<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/*version*/d3.min.js"></script>',/^<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/d3\/.*?\/d3\.min\.js"><\/script>/gim,i._codeMirrorHtml),i.registerExternalLibChange(i._knockoutSelect,'<script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/*version*/knockout-min.js"></script>',/^<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/knockout\/.*?\/knockout-min\.js"><\/script>/gim,i._codeMirrorHtml),i.registerExternalLibChange(i._angularJSSelect,'<script src="https://ajax.googleapis.com/ajax/libs/angularjs/*version*/angular.min.js"></script>',/^<script src="https:\/\/ajax\.googleapis\.com\/ajax\/libs\/angularjs\/.*?\/angular\.min\.js"><\/script>/gim,i._codeMirrorHtml),i.registerExternalLibChange(i._reactJSSelect,'<script src="https://cdnjs.cloudflare.com/ajax/libs/react/*version*/react.min.js"></script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/react/*version*/react-dom.min.js"></script>',/^<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/react\/.*?\/react\.min\.js"><\/script>\n<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/react\/.*?\/react-dom\.min\.js"><\/script>/gim,i._codeMirrorHtml),i._snip.find("#snpte-button-extlib").click(function(){function e(e,t){return e.length<t.length?!1:(e=e.toLowerCase(),0!=e.indexOf("https://")&&0!=e.indexOf("http://")&&0!=e.indexOf("//")?!1:e.substr(e.length-t.length,t.length).toLowerCase()==t.toLowerCase()?!0:!1)}var t=prompt("Please enter the URL of an external JS or CSS file");if(null!=t&&""!=t&&""!=t.trim()){var n=i._codeMirrorHtml.getValue();if(e(t,".css")){var r='<link href="'+t+'" rel="stylesheet"/>';i._codeMirrorHtml.setValue(r+"\n"+n)}else if(e(t,".js")){var r='<script src="'+t+'"></script>';i._codeMirrorHtml.setValue(r+"\n"+n)}else alert("Sorry, but that resource is invalid. Resources must begin with http:// or https:// and allowed extensions are: .css, .js")}}),e.each([i._codeMirrorHtml,i._codeMirrorCss,i._codeMirrorJs],function(t,n){n.on("focus",function(){e(n.getInputField()).parent().parent().parent().children(".-name").hide()}),n.on("blur",function(){e(n.getInputField()).parent().parent().parent().children(".-name").show()})}),void 0)},"run":function(){this.save(),this.writeResult()},"load":function(e){null!=e.html&&(this._state.html=e.html,this._boxHtml.val(e.html)),null!=e.css&&(this._state.css=e.css,this._boxCss.val(e.css)),null!=e.js&&(this._state.js=e.js,this._boxJs.val(e.js)),null!=e.console&&(this._state.console=e.console,e.console===!1&&this._console.prop("checked",e.console)),null!=e.hide&&(this._state.hide=e.hide,e.hide===!0&&this._hide.prop("checked",e.hide)),null!=e.babel&&(this._state.babel=e.babel,e.babel===!0&&this._babel.prop("checked",e.babel)),this._codeMirrorHtml.setValue(e.html),this._codeMirrorCss.setValue(e.css),this._codeMirrorJs.setValue(e.js),d=!1;var t=null,n=this._codeMirrorHtml.getValue();t=/^<script src="https:\/\/ajax\.googleapis\.com\/ajax\/libs\/jquery\/(.*?)\/jquery\.min\.js"><\/script>/gim.exec(n),t&&t.length>1&&this._jQuerySelect.val(t[1]),t=/^<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/d3\/(.*?)\/d3\.min\.js"><\/script>/gim.exec(n),t&&t.length>1&&this._d3Select.val(t[1]),t=/^<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/knockout\/(.*?)\/knockout-min\.js"><\/script>/gim.exec(n),t&&t.length>1&&this._knockoutSelect.val(t[1]),t=/^<script src="https:\/\/ajax\.googleapis\.com\/ajax\/libs\/angularjs\/(.*?)\/angular\.min\.js"><\/script>/gim.exec(n),t&&t.length>1&&this._angularJSSelect.val(t[1])},"clear":function(){this._boxHtml.val(""),this._boxCss.val(""),this._boxJs.val(""),this._jQuerySelect.val(""),this._d3Select.val(""),this._knockoutSelect.val(""),this._angularJSSelect.val(""),this._reactJSSelect.val(""),this._console.prop("checked",!0),this._hide.prop("checked",!1),this._babel.prop("checked",!1);var t="";null!=f&&(t="//"+f);var n=t+"/js",i=e('<form style="display: none;" action="'+n+'" method="GET" target="'+this._boxResult.attr("name")+'"></form>').appendTo("body");i.submit(),this._codeMirrorHtml.setValue(""),this._codeMirrorCss.setValue(""),this._codeMirrorJs.setValue("")},"save":function(){var e=this;return e._state.html=e._boxHtml.val(),e._state.css=e._boxCss.val(),e._state.js=e._boxJs.val(),e._state.console=e._console.prop("checked"),e._state.hide=e._hide.prop("checked"),e._state.babel=e._babel.prop("checked"),e._state},"writeResult":function(){var t=this,n=t._state.css,i=t._state.js,r=t._state.html,a=t._state.console,o=t._state.babel;if(""!=n||""!=i||""!=r){var s="";null!=f&&(s="//"+f);var c=s+"/js",u=e('<form style="display: none;" action="'+c+'" method="POST" target="'+t._boxResult.attr("name")+'"></form>');e('<textarea name="js"></textarea>').val(i).appendTo(u),e('<textarea name="css"></textarea>').val(n).appendTo(u),e('<textarea name="html"></textarea>').val(r).appendTo(u),e('<input type="text" name="console"></input>').attr("value",a===!0).appendTo(u),e('<input type="text" name="babel"></input>').attr("value",o===!0).appendTo(u),u.appendTo("body"),u.submit(),u.remove()}},"resize":function(){var e=d;if(!this.uiInnerHtml){var t=this._menu.outerHeight(!0),n=this._footer.outerHeight(!0),i=this._snip.height()-t-n;this._codeArea.css({"height":i})}this._codeMirrorHtml.refresh(),this._codeMirrorCss.refresh(),this._codeMirrorJs.refresh(),d=e}},r.prototype={"generate":function(n){var i=this;if(i._snip)return i._snip;i._expandedSnippet=null,i._boxResult=e('<iframe name="'+p()+'" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameBorder="0"></iframe>'),i._snip=!0;var r=e('<button type="button"><span class="icon-play-white _hover"></span> Run code snippet</button>').click(function(){i.run(),s.hide()}),a=e('<button type="button" class="hideResults btn-clear">Hide results</button>').click(function(){i.hide(),s.show()});if(a.hide(),!StackExchange.options.isMobile)var s=e('<div class="popout-code"><a class="snippet-expand-link">Expand snippet</a></div>').click(function(){var n=i._expandedSnippet;if(n){var r=n.element;r.removeClass("expanded-snippet"),r.find(".snippet-expand-link").text("Expand snippet"),r.find(".snippet-show-link").show(),r.find(".snippet-show-link-chevron").show(),n.parent.children().length?e(n.parent.children()[n.indexWithinParent]).before(r):e(n.parent).append(r),i._expandedSnippet=null,e(".topbar").show(),e(".container").show(),e(".so-header").show(),e("#footer").show(),c.show(),e(t).scrollTop(m)}else{m=e(t).scrollTop();var r=e(this).closest(".snippet");i._expandedSnippet={"element":r,"indexWithinParent":r.index(),"parent":r.parent()},r.addClass("expanded-snippet"),r.find(".snippet-expand-link").text("Return to post"),r.find(".snippet-show-link").hide(),r.find(".snippet-show-link-chevron").hide(),e(".topbar").hide(),e(".container").hide(),e(".so-header").hide(),e("#footer").hide(),e("body").append(r),c.hide()}});var c=e('<input class="copySnippet btn-secondary" type="button" value="Copy snippet to answer"></input>').click(function(){var t=e("#show-editor-button"),n=e("#post-editor").find("textarea.wmd-input");if(t.is(":visible")){var r=t.offset().top;e("html").animate({"scrollTop":r-60}),e("body").animate({"scrollTop":r-60},{"complete":function(){t.children("input").click()}})}else{var a=n.offset().top;e("html, body").animate({"scrollTop":a-60})}var s=i._state,c=o(s);n.val(n.val()+"\n\n"+c),StackExchange.MarkdownEditor.refreshAllPreviews()}),u=e('<div class="snippet-ctas"></div>').append(r).append(c).append(a);StackExchange.options.isMobile||u.append(s),i._results=e('<div class="snippet-result-code"></div>').append(i._boxResult),i._results.hide();var l=e('<div class="snippet-result"></div>').append(u).append(i._results);return n.append(l),i._snip},"run":function(){var t=this;t._boxResult||(t._boxResult=e('<iframe name="'+p()+'" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameBorder="0"></iframe>'),t._results.append(t._boxResult)),t._boxResult.parent().is(":hidden")&&(t._boxResult.closest(".snippet-result").find(".hideResults").css("display",""),t._boxResult.parent().slideDown(200,function(){if(!t._expandedSnippet){var n=e('<div class="popout"><a>Full page</a></div>'),i=e('<div class="popin"><a>Close</a></div>').hide();n.click(function(){t._boxResult.data("_style",t._boxResult.attr("style")),t._boxResult.css({"position":"fixed","top":0,"left":0,"width":"100%","height":"100%","background-color":"#FFFFFF","z-index":9e3}),t._boxResult.parent().css("position",""),e(this).hide(),i.show(),e("body").css("overflow","hidden")}),i.click(function(){t._boxResult.removeAttr("style"),t._boxResult.attr("style",t._boxResult.data("_style")),t._boxResult.parent().css("position","relative"),e(this).hide(),n.show(),e("body").css("overflow","")}),e(this).append(n).append(i)}})),this.writeResult()},"hide":function(){var t=this;t._boxResult.parent().is(":visible")&&(t._boxResult.closest(".snippet-result").find(".hideResults").hide(),t._boxResult.parent().children(".popout").remove(),t._boxResult.parent().children(".popin").remove(),t._boxResult.parent().slideUp(200,function(){e(this).hide(),t._boxResult.remove(),delete t._boxResult}))},"load":function(e){null!=e.css&&(this._state.css=e.css),null!=e.js&&(this._state.js=e.js),null!=e.html&&(this._state.html=e.html),null!=e.console&&(this._state.console=e.console),null!=e.hide&&(this._state.hide=e.hide),null!=e.babel&&(this._state.babel=e.babel)},"writeResult":function(){var t=this,n=t._state.css,i=t._state.js,r=t._state.html,a=t._state.console,o=t._state.babel;if(""!=n||""!=i||""!=r){var s="";null!=f&&(s="//"+f);var c=s+"/js",u=e('<form style="display: none;" action="'+c+'" method="POST" target="'+t._boxResult.attr("name")+'"></form>');e('<textarea name="js"></textarea>').val(i).appendTo(u),e('<textarea name="css"></textarea>').val(n).appendTo(u),e('<textarea name="html"></textarea>').val(r).appendTo(u),e('<input type="text" name="console"></input>').attr("value",a===!0).appendTo(u),e('<input type="text" name="babel"></input>').attr("value",o===!0).appendTo(u),u.appendTo("body"),u.submit(),u.remove()}},"resize":function(){}};var m,v={};StackExchange.snippets=function(){function t(e,t,n,i,r){function a(e,t,n){for(var i=-1,r=-1;;){if(r=t.indexOf(e,r+1),-1==r)break;(0>i||Math.abs(r-n)<Math.abs(r-i))&&(i=r)}return i}return e.replace(/<!--\s+begin snippet:\s*[a-z]+\s*(?:hide:\s*([a-zA-Z]+))?\s*(?:console:\s*([a-zA-Z]+))?\s*(?:babel:\s*([a-zA-Z]+))?\s+-->([\s\S]*?)<!--\s+end snippet\s+-->/gi,function(e,o,s,c,u,l){var d={"payload":{"code":u,"hide":null!=o&&"true"===o.toLowerCase(),"console":null!=s&&"true"===s.toLowerCase(),"babel":null!=c&&"true"===c.toLowerCase()},"pos":a(e,t,l),"len":e.length};return-1===d.pos?e:(r.push(d),e+"\n\n"+n+i+"-"+(r.length-1)+"%")})}function n(){u(),StackExchange.externalEditor&&i&&(i=!1,StackExchange.externalEditor.init({"thingName":"snippet","thingFinder":t,"editLabel":"edit the above snippet","getDivContent":function(t){var n=null;t&&(n=s(t.code,t.hide,t.console,t.babel));var i=e('<div class="modal auto-center snippet-modal"></div>');return i.snippet({"markdownPluginMode":!0,"state":n}),i},"buttonTooltip":"JavaScript/HTML/CSS snippet","buttonImageUrl":"/content/Shared/balsamiq/wmd-mockup-button.png","onShow":function(t){var n=e(".snippet-modal"),i=function(e){var i=n.data("_snippet").save();if(e||""==i.html&&""==i.css&&""==i.js)t(null);else{var r=o(i);t(r,r)}};n.on("popupClosing",function(e){var t="esc"==e.closeTrigger;if(!t||d)return t&&!confirm("Are you sure you want to abandon any changes?")?(e.preventDefault(),void 0):(i(t),void 0)})}})),StackExchange.MarkdownEditor&&StackExchange.MarkdownEditor.creationCallbacks.add(function(t,n){var i=t.getConverter().hooks;i.chain("preConversion",c);var r=e("#wmd-preview"+n);r.on("wmdrefresh",function(){r.find("pre").each(function(){var t=e(this),n=t.text();if(v[n]){var i=v[n];delete v[n],l(i),t.replaceWith(e("<p></p>").append(i))}})})})}var i=!0;return{"init":n,"initSnippetRenderer":u,"makeSnippets":c}}()}(jQuery,window);