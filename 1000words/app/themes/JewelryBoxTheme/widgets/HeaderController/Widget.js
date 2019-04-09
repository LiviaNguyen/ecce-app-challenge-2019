// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/JewelryBoxTheme/widgets/HeaderController/PopupTileNodes":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/keys dojo/dom-construct dojo/query dijit/_WidgetBase dijit/_TemplatedMixin jimu/dijit/ViewStack jimu/utils".split(" "),function(u,d,r,a,p,g,h,l,x,v,y,q){return u([x,v],{baseClass:"jimu-header-more-popup",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"close" tabindex\x3d"0" data-dojo-attach-point\x3d"closeNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"pages" data-dojo-attach-point\x3d"pagesNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"points jimu-corner-bottom"\x3e\x3cdiv class\x3d"points-inner"data-dojo-attach-point\x3d"pointsNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
margin:4,postCreate:function(){this.nodes=[];this.pages=[];this.createCloseBtn();this.own(p(this.domNode,"keydown",d.hitch(this,function(c){a.hasClass(c.target,"close-btn")||c.keyCode!==g.ESCAPE||this.closeNode.focus()})))},startup:function(){this.viewStack=new y({views:[],viewType:"dom"},this.pagesNode);this.viewStack.startup();this.resize();this.nodes.length&&this.nodes[0].focus()},resize:function(){var c=this._calculateGridParam(),k;null!==c?(a.setStyle(this.domNode,q.getPositionStyle(c.position)),
this.nodeWidth=c.cellSize-this.margin,this.oldGridParam&&this.oldGridParam.rows===c.rows&&this.oldGridParam.cols===c.cols||(this.clearPages(),this.createPages(c)),this.nodes.forEach(d.hitch(this,function(a,k){this.setItemNodePosition(a,k,c)})),this.oldGridParam=c,k=l("div.close",this.domNode)[0],a.setStyle(k,{width:.25*this.nodeWidth+"px",height:.25*this.nodeWidth+"px"})):(this.oldGridParam=null,a.setStyle(this.domNode,q.getPositionStyle({left:0,top:0,width:0,height:0,zIndex:111})),this.nodeWidth=
0)},setItemNodePosition:function(c,k,e){var m,d,g=48,h=16;m=0===k%e.cols?0:this.margin/2;d=k%(e.rows*e.cols)<e.cols?0:this.margin/2;k={};"number"===typeof this.nodeWidth&&(k.width=this.nodeWidth+"px",k.height=this.nodeWidth+"px");"number"===typeof m&&(window.isRTL?k.marginRight=m+"px":k.marginLeft=m+"px");"number"===typeof d&&(k.marginTop=d+"px");if(m=l("img",c)[0])e.iconScaled&&(g*=this.nodeWidth/120),a.setStyle(m,{width:g+"px",height:g+"px"});if(g=l("div.node-label",c)[0])e.showLabel?(e.iconScaled&&
(h*=this.nodeWidth/120),a.setStyle(g,{"font-size":h+"px",display:"block"})):a.setStyle(g,{"font-size":h+"px",display:"none"});a.setStyle(c,k)},clearPages:function(){r.forEach(this.pages,function(a){this.viewStack.removeView(a.pageNode)},this);h.empty(this.pointsNode);this.pages=[];this.nodes=[]},createPages:function(a){var c,e,m,t;c=Math.ceil(this.items.length/(a.rows*a.cols));for(e=0;e<c;e++){m=h.create("div",{"class":"page"});this.createPageItems(e,m,a);this.viewStack.addView(m);if(1<c){var w=e===
c-1;t=h.create("div",{"class":"point",role:"button",tabindex:0},this.pointsNode);this.own(p(t,"click",d.hitch(this,this._onPageNodeClick,e)));this.own(p(t,"keydown",d.hitch(this,function(a,c,e){e.keyCode===g.ENTER||e.keyCode===g.SPACE?(this._onPageNodeClick(a),l(".page.view",this.viewStack.domNode)[a].children[0].focus()):c&&!e.shiftKey&&e.keyCode===g.TAB&&e.preventDefault()},e,w)))}this.pages.push({pageNode:m,pointNode:t})}0<this.viewStack.views.length&&this._selectPage(0)},_onPageNodeClick:function(a){this._selectPage(a)},
_selectPage:function(c){1<this.pages.length&&(l(".point",this.domNode).removeClass("point-selected"),a.addClass(this.pages[c].pointNode,"point-selected"));this.viewStack.switchView(this.pages[c].pageNode)},createPageItems:function(a,k,e){var c,d,g;c=this.items.length;d=e.rows*e.cols;e=(a+1)*d;g=e-c;e=Math.min(e,c);for(a*=d;a<e;a++)this.createItemNode(a,k);for(a=c;a<c+g;a++)this.createEmptyItemNode(k)},createItemNode:function(c,k){var e;c=this.items[c];e=h.create("div",{"class":"icon-node jimu-float-leading jimu-main-background",
title:c.label,settingId:c.id,"data-widget-name":c.name,role:"button",tabindex:0},k);k=h.create("img",{src:c.icon},e);window.isRTL&&c.mirrorIconForRTL&&a.addClass(k,"jimu-flipx");h.create("div",{"class":"node-label",title:c.label,innerHTML:q.stripHTML(c.label)},e);e.config=c;this.own(p(e,"click",d.hitch(this,function(){this.onNodeClicked(e)})));this.own(p(e,"keydown",d.hitch(this,function(a){if(a.keyCode===g.ENTER||a.keyCode===g.SPACE)this.onNodeClicked(e)})));this.nodes.push(e)},createEmptyItemNode:function(a){a=
h.create("div",{"class":"icon-node jimu-float-leading jimu-main-background",tabindex:0},a);this.own(p(a,"focus",d.hitch(this,function(a){q.isInNavMode()&&(1===this.viewStack.domNode.children.length?a.target.parentNode.children[0].focus():l(".point-selected",this.pointsNode)[0].previousSibling.focus())})));this.nodes.push(a);return a},createCloseBtn:function(){h.create("div",{role:"button","class":"close-inner jimu-main-background"},this.closeNode);this.own(p(this.closeNode,"click",d.hitch(this,function(){this.hide()})));
this.own(p(this.closeNode,"keydown",d.hitch(this,function(a){a.keyCode===g.ENTER||a.keyCode===g.SPACE||a.keyCode===g.ESCAPE?this.hide():a.shiftKey&&a.keyCode===g.TAB&&a.preventDefault()})));return this.closeNode},hide:function(){a.setStyle(this.domNode,"display","none")},show:function(){a.setStyle(this.domNode,"display","block")},onNodeClicked:function(a){this.hide()},openNodebyId:function(c){for(var k=0,e=this.nodes.length;k<e;k++){var d=this.nodes[k];if(c&&c===a.getAttr(d,"settingId"))return this.onNodeClicked(d),
d}},_calculateGridParam:function(){var c,d,e,g,h=!1,l=!0;c=a.getContentBox(this.popupContainer);d=Math.min(c.w,c.h)-40;if(360<=d)g=120;else{g=Math.floor(d/3);if(10>g)return null;h=!0;80>g&&(l=!1)}d=Math.floor((c.h-40)/g);e=Math.floor((c.w-40)/g);d=4<d?4:d;d=3>d?3:d;e=3>d?3:4<e?4:e;return{rows:d,cols:e,cellSize:g,iconScaled:h,showLabel:l,position:{top:(c.h-g*d)/2,bottom:(c.h-g*d)/2,left:(c.w-g*e)/2,right:(c.w-g*e)/2,width:g*e-this.margin*(e-1)/2,height:g*d-this.margin*(d-1)/2,zIndex:111}}}})})},"themes/JewelryBoxTheme/widgets/HeaderController/_build-generate_module":function(){define(["dojo/text!./Widget.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/JewelryBoxTheme/widgets/HeaderController/Widget.html":'\x3cdiv\x3e\r\n  \x3c!-- solve the bug of style delay loading --\x3e\r\n  \x3cdiv class\x3d"header-section" data-dojo-attach-point\x3d"headerNode"\x3e\r\n    \x3ca data-dojo-attach-point\x3d"logoLinkNode" target\x3d"_blank"\x3e\r\n      \x3cimg class\x3d"logo jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"logoNode" data-dojo-attach-event\x3d"onload:_onLogoLoad"\x3e\r\n    \x3c/a\x3e\r\n    \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n      \x3cdiv class\x3d"jimu-title jimu-float-leading" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"jimu-subtitle jimu-float-leading jimu-leading-margin5" data-dojo-attach-point\x3d"subtitleNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"links jimu-float-leading jimu-leading-margin25" data-dojo-attach-point\x3d"linksNode"\x3e\r\n      \x3cdiv class\x3d"dynamic-section jimu-float-leading" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"signin-section jimu-float-leading" data-dojo-attach-point\x3d"signInSectionNode"\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSigninClick"\r\n        data-dojo-attach-point\x3d"signinLinkNode"\x3e${nls.signin}\x3c/a\x3e\r\n        \x3ca href\x3d"" target\x3d"_blank" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onUserNameClick" data-dojo-attach-point\x3d"userNameLinkNode"\x3e\x3c/a\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSignoutClick" data-dojo-attach-point\x3d"signoutLinkNode"\x3e${nls.signout}\x3c/a\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"container-section" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/JewelryBoxTheme/widgets/HeaderController/css/style.css":".jimu-widget-header-controller{box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .header-section{height: 100%; overflow: hidden;}.jimu-widget-header-controller .container-section{height: 100%; min-width: 80px;}.jimu-widget-header-controller .logo{cursor: pointer; color: #fff;}.jimu-widget-header-controller .hide-logo{display: none;}.jimu-widget-header-controller .titles{height: 100%; overflow: hidden;}.jimu-widget-header-controller .jimu-title{text-align: center; height: 100%;}.jimu-widget-header-controller .jimu-subtitle{text-align: center; height: 100%;}.jimu-widget-header-controller .links{height: 100%; overflow: hidden; display: flex;}.jimu-widget-header-controller .dynamic-section,.jimu-widget-header-controller .signin-section{height: 100%; display: flex;}.jimu-widget-header-controller .links .jimu-link{height: 30px; margin-top: 5px;}.jimu-widget-header-controller .signin-section .jimu-link{color: #d9dde0; margin: auto 2px;}.jimu-widget-header-controller .dynamic-section .jimu-link:last-child,.jimu-widget-header-controller .signin-section .jimu-link:last-child{margin-right: 1em;}.jimu-rtl .jimu-widget-header-controller .dynamic-section .jimu-link:last-child,.jimu-rtl .jimu-widget-header-controller .signin-section .jimu-link:last-child{margin-left: 1em;}.jimu-widget-header-controller .icon-node{cursor: pointer; opacity: 0.6; text-align: center; border-right: 1px solid #323e4f;}.jimu-widget-header-controller .icon-node img{height: 24px; width: 24px;}.jimu-widget-header-controller .icon-node:first-child{border: none;}.jimu-widget-header-controller .icon-node:hover{opacity: 1;}.jimu-widget-header-controller .icon-node.jimu-state-selected{background-color: rgba(0, 0, 0, 0.3); opacity: 1; border: none; border-top: 2px solid #8491a1;}.jimu-widget-header-controller .drop-triangle{position: absolute; width: 0px; height: 0px; bottom: 1px; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid white;}.jimu-widget-header-controller .jimu-drop-menu{box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .jimu-drop-menu .menu-item{overflow: hidden; border-top: 1px solid rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item:hover{background-color: rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item img{width: 24px; height: 24px; cursor: pointer; margin: 8px;}.jimu-widget-header-controller .jimu-drop-menu .menu-item .label{cursor: pointer; margin-top: 12px; font-size: 14px; color: white; min-width: 50px; text-align: center; white-space: nowrap; max-width: 300px; text-overflow: ellipsis; overflow: hidden; padding-right: 8px;}.jimu-rtl .jimu-widget-header-controller .jimu-drop-menu .menu-item .label{padding-left: 8px;}.popup-links .popup-title{}.popup-links .logo{height: 30px;}.popup-links .title{color:#fff; text-align: center; font-size: 16px; width: 71.42857142857143%; overflow: hidden; white-space: nowrap; height: 100%;}.popup-links .line{width: 100%; height: 4px; border-bottom: 1px solid #393c40;}.popup-links .link-section{width: 100%; height: 66px;}.popup-links a{color: #fff; margin-left: 20px; font-size: 14px; height: 100%; width: 95%; overflow: hidden; display: inline-block;}.popup-links .link-section.signin a{color: #d9dde0;}.jimu-header-more-popup{position: absolute; border-radius: 2px; z-index: 111; background-color: #516070;}.jimu-header-more-popup .pages{position: relative; overflow: hidden; padding: 2px;}.jimu-header-more-popup .points{position: absolute; overflow: hidden; bottom: -15px; left: 0px; right: 0px; text-align: center; background-color: #bababa;}.jimu-header-more-popup .points-inner{overflow: hidden; display: flex; height: 20px; width: 100%; align-items: center; justify-content: center;}.jimu-header-more-popup .point{float: left; width: 8px; height: 8px; margin-left: 5px; border-radius: 4px; background-color: #f2f6f9; cursor: pointer;}.jimu-nav-mode .jimu-header-more-popup .point:focus{outline: none !important; border: 2px solid #24B5CC;}.jimu-header-more-popup .point-selected{background-color: #485566;}.jimu-header-more-popup .page{position: relative; overflow: hidden;}.jimu-header-more-popup .close{position: absolute; top: -3.125%; right: -3.125%; border-radius: 50%; background-color: #697a8c; cursor: pointer; z-index: 1;}.jimu-rtl .jimu-header-more-popup .close{left: -04.46428571428571%; right: auto;}.jimu-header-more-popup .close-inner{width: 80%; height: 80%; margin-left: 10%; margin-top: 10%; border-radius: 50%; background: #1d2123 url(images/close.png) no-repeat center center;}.jimu-rtl .jimu-header-more-popup .close-inner{margin-left: 0; margin-right: 10%;}.jimu-header-more-popup .icon-node{background-color: #697a8c; cursor: pointer;}.jimu-header-more-popup .icon-node.jimu-state-selected{background-color: red;}.jimu-header-more-popup img{width: 48px; height: 48px; margin: auto; margin-top: 25%; display: block;}.jimu-header-more-popup .node-label{width: 100%; text-align: center; font-size: 16px; margin-top: 5px; color: white; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; display: inline-block;}@media screen and (max-width:600px){.jimu-header-more-popup .node-label{font-size: 14px;}}.jimu-more-icon-cover{z-index: 110; position: absolute; left: 0; top: 0; width: 100%; height: 100%;}.esriPopup .titlePane {background-color: rgba(72, 85, 102, 0.9);}.jimu-widget-header-controller{display: flex; justify-content: space-between;}.jimu-widget-header-controller .header-section,.jimu-widget-header-controller .container-section {display: flex; flex-direction: row; align-items: center; flex-wrap: nowrap;}.jimu-widget-header-controller .container-section {flex-direction: row-reverse;}.jimu-widget-header-controller .titles,.jimu-widget-header-controller .links,.jimu-widget-header-controller .icon-node{flex-shrink: 0;}.jimu-widget-header-controller .icon-node{flex-basis: 40px;}",
"*now":function(u){u(['dojo/i18n!*preload*themes/JewelryBoxTheme/widgets/HeaderController/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/aspect dojo/query dojo/on dojo/keys dijit/Tooltip dojo/Deferred dojo/mouse dojo/dom-construct dojo/dom-geometry jimu/BaseWidget jimu/PoolControllerMixin jimu/tokenUtils jimu/portalUtils jimu/portalUrlUtils jimu/utils jimu/dijit/Message ./PopupTileNodes dojo/NodeList-manipulate".split(" "),function(u,d,r,a,p,g,h,l,x,v,y,q,c,k,e,m,t,w,n,z,A){return u([k,e],{baseClass:"jimu-widget-header-controller jimu-main-background",
maxIconCount:-1,createMoreIcon:!1,switchableElements:{},height:40,openedId:"",moveTopOnActive:!1,postMixInProperties:function(){this.inherited(arguments)},postCreate:function(){this.inherited(arguments);a.setAttr(this.domNode,"aria-label",this.nls._widgetLabel);this._processGroupSetting();this.switchableElements.title=this.titleNode;this.switchableElements.links=this.linksNode;this.switchableElements.subtitle=this.subtitleNode;this._handleTitleColorAndLogoLink(this.appConfig);this.position&&this.position.height&&
(this.height=this.position.height);a.setStyle(this.signInSectionNode,"display","none");this.appConfig&&this.appConfig.logo?(this.logoNode.src=this.appConfig.logo,a.removeClass(this.logoNode,"hide-logo")):(this.logoNode.src="",a.addClass(this.logoNode,"hide-logo"));this.switchableElements.title.innerHTML=n.sanitizeHTML(this.appConfig.title?this.appConfig.title:"");this.switchableElements.subtitle.innerHTML=n.sanitizeHTML(this.appConfig.subtitle?this.appConfig.subtitle:"");this._createDynamicLinks(this.appConfig.links);
this._setElementsSize();this.own(h(this.domNode,y.enter,d.hitch(this,function(){var b="",a=w.getServerByUrl(this.appConfig&&this.appConfig.portalUrl||"");w.isArcGIScom(a)&&(a="ArcGIS.com");a&&(b=this.nls.signInTo+" "+a);this.signinLinkNode.title=b})))},startup:function(){this.inherited(arguments);this.resize();setTimeout(d.hitch(this,this.resize),100)},onAction:function(b,a){"highLight"===b&&a&&(a=g('div[settingid\x3d"'+a.widgetId+'"]',this.domNode)[0],this._highLight(a));"removeHighLight"===b&&this._removeHighLight()},
onSignIn:function(b){this.inherited(arguments);a.setStyle(this.signinLinkNode,"display","none");a.setStyle(this.userNameLinkNode,"display","");a.setStyle(this.signoutLinkNode,"display","");this.userNameLinkNode.innerHTML=b.userId;a.setAttr(this.userNameLinkNode,"href",this.appConfig.portalUrl+"home/user.html");this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display","none"),a.setStyle(this.popupUserNameNode,"display",""),a.setStyle(this.popupSignoutNode,"display",""),g("a",this.popupUserNameNode).html(b.userId).attr("href",
this.appConfig.portalUrl+"home/user.html"));this.resize()},onSignOut:function(){this.inherited(arguments);this._onSignOut(this.nls.signin);t.getPortal(this.appConfig.portalUrl).loadSelfInfo().then(d.hitch(this,function(b){this._onSignOut(this.nls.signInTo+" "+b.name)}),d.hitch(this,function(b){console.error(b)}))},_onSignOut:function(b){a.setStyle(this.signinLinkNode,"display","");a.setAttr(this.signinLinkNode,"innerHTML",b);a.setStyle(this.userNameLinkNode,"display","none");a.setStyle(this.signoutLinkNode,
"display","none");this.userNameLinkNode.innerHTML="";this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display",""),a.setAttr(this.popupSigninNode,"innerHTML",b),a.setStyle(this.popupUserNameNode,"display","none"),a.setStyle(this.popupSignoutNode,"display","none"),g("a",this.popupUserNameNode).html(""));this.resize()},resize:function(){this._resize()},_resize:function(){var b=a.getContentBox(this.domNode);this._showSwitchableElements(["title","links","subtitle"]);this._createIconNodes(b);this.morePane&&
this.morePane.resize();this.popupLinkNode&&a.setStyle(jimuConfig.layoutId,{left:a.getContentBox(this.popupLinkNode).w+"px"})},destroy:function(){this.timeoutHandle&&(clearTimeout(this.timeoutHandle),this.timeoutHandle=null);this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&(a.destroy(this.moreIconPaneCoverNode),this.moreIconPaneCoverNode=null);this.popupLinkNode&&this.popupLinksVisible&&this._hidePopupLink();a.destroy(this.popupLinkNode);this.inherited(arguments)},onAppConfigChanged:function(b,
a,d){switch(a){case "attributeChange":this._onAttributeChange(b,d);break;default:return}this.appConfig=b;this.resize()},getOpenedIds:function(){this.inherited(arguments);return""===this.openedId?[]:[this.openedId]},setOpenedIds:function(b){if(0!==b.length){var a=this.getConfigById(b[0]);a&&(this.openedId&&this._switchNodeToClose(this.openedId),this.openedId=b[0],a.widgets&&"openAll"===a.openType?this._switchNodeToOpen(a.id):a.widgets||(this._getIconNodeById(a.id)?this._switchNodeToOpen(a.id):this._showIconContent(a)))}},
_onLogoLoad:function(){this.resize()},_highLight:function(a){this.hlDiv&&this._removeHighLight();if(a){var b=c.getMarginBox(a);this.hlDiv=q.create("div",{style:{position:"absolute",left:b.l+"px",top:b.t+"px",width:b.w+"px",height:b.h+"px"},"class":"icon-highlight"},a,"before")}},_removeHighLight:function(){this.hlDiv&&(q.destroy(this.hlDiv),this.hlDiv=null)},_onAttributeChange:function(b,f){"title"in f&&f.title!==this.appConfig.title&&(this.titleNode.innerHTML=n.sanitizeHTML(f.title));"subtitle"in
f&&f.subtitle!==this.appConfig.subtitle&&(this.subtitleNode.innerHTML=n.sanitizeHTML(f.subtitle));"logo"in f&&f.logo!==this.appConfig.logo&&(f.logo?(a.setAttr(this.logoNode,"src",f.logo),a.removeClass(this.logoNode,"hide-logo")):(a.removeAttr(this.logoNode,"src"),a.addClass(this.logoNode,"hide-logo")));"links"in f&&this._createDynamicLinks(f.links);this._handleTitleColorAndLogoLink(b)},_handleTitleColorAndLogoLink:function(b){b.titleColor?a.setStyle(this.titleNode,"color",b.titleColor):a.setStyle(this.titleNode,
"color","");b.logoLink?(a.setAttr(this.logoLinkNode,"href",b.logoLink),a.setAttr(this.logoLinkNode,"tabIndex",this.tabIndex),a.setAttr(this.logoNode,"alt",b.logoLink),a.setStyle(this.logoNode,"cursor","pointer")):(a.setAttr(this.logoLinkNode,"href","javascript:void(0)"),a.setAttr(this.logoLinkNode,"tabIndex",-1),a.setAttr(this.logoNode,"role","presentation"),a.setStyle(this.logoNode,"cursor","default"))},_setElementsSize:function(){a.setStyle(this.logoNode,{height:"30px"});a.setStyle(this.titleNode,
{lineHeight:this.height+"px"});a.setStyle(this.subtitleNode,{lineHeight:this.height+"px"});g(".jimu-link",this.domNode).style({lineHeight:this.height-10+"px"})},_processGroupSetting:function(){r.forEach(this.appConfig.widgetPool.groups,function(a){var b;a:{if(this.config.groupSetting)for(b=0;b<this.config.groupSetting.length;b++)if(this.config.groupSetting[b].label===a.label){b=this.config.groupSetting[b].type;break a}b="openAll"}a.openType=b},this)},_createDynamicLinks:function(b){a.empty(this.dynamicLinksNode);
r.forEach(b,function(b){a.create("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",innerHTML:n.sanitizeHTML(b.label),"class":"jimu-link jimu-align-leading jimu-leading-margin1",style:{lineHeight:this.height+"px"},tabindex:this.tabIndex},this.dynamicLinksNode)},this)},_showSwitchableElements:function(b){var f=this.switchableElements,c;for(c in f)if(f.hasOwnProperty(c))if(-1<b.indexOf(c)){var e=a.hasClass(f[c],"links")?"flex":"block";a.setStyle(f[c],"display",e);f[c].visible=!0}else a.setStyle(f[c],
"display","none"),f[c].visible=!1;this.logoClickHandle&&this.logoClickHandle.remove();this.logoKeydownHandle&&this.logoKeydownHandle.remove();0>b.indexOf("links")?(a.setAttr(this.logoLinkNode,"tabIndex",this.tabIndex),this.logoClickHandle=h(this.logoNode,"click",d.hitch(this,this._onLogoClick)),this.logoKeydownHandle=h(this.logoLinkNode,"keydown",d.hitch(this,this._onLogoKeydown))):this.popupLinksVisible&&this._hidePopupLink()},_switchSignin:function(){var a=m.getPortalCredential(this.appConfig.portalUrl);
if(a)this.onSignIn(a);else this.onSignOut()},_onLogoClick:function(){this.popupLinkNode&&a.destroy(this.popupLinkNode);this.popupLinkNode=this._createPopupLinkNode();this.popupLinksVisible?this._hidePopupLink():this._showPopupLink()},_onLogoKeydown:function(a){a.keyCode===l.ENTER&&this._onLogoClick()},_hidePopupLink:function(){a.setStyle(this.popupLinkNode,"display","none");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:0}):a.setStyle(jimuConfig.layoutId,{left:0});this.popupLinksVisible=!1},_showPopupLink:function(){a.setStyle(this.popupLinkNode,
"display","");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:a.getContentBox(this.popupLinkNode).w+"px"}):a.setStyle(jimuConfig.layoutId,{left:a.getContentBox(this.popupLinkNode).w+"px"});n.isInNavMode()&&(this.appConfig.links?g(".jimu-link a",this.popupLinkNode)[0].focus():g(".jimu-popup-link-close-btn",this.popupLinkNode)[0].focus());this.popupLinksVisible=!0},_createPopupLinkNode:function(){var b,f;a.getContentBox(jimuConfig.mainPageId);b=a.create("div",{"class":"popup-links jimu-main-background",
style:{position:"absolute",zIndex:100,top:0,bottom:0}},jimuConfig.mainPageId);window.isRTL?a.setStyle(b,{right:0,left:"50px"}):a.setStyle(b,{left:0,right:"50px"});f=a.create("div",{"class":"popup-title",style:{height:this.height+"px",width:"100%"}},b);var c=a.create("div",{"class":"jimu-float-leading jimu-leading-margin1 jimu-popup-link-close-btn",role:"button","aria-label":window.jimuNls.common.close,tabindex:"0",style:{width:"30px",height:"30px",marginTop:(this.height-30)/2+"px"}},f);this.own(h(c,
"click",d.hitch(this,function(){this._hidePopupLink()})));this.own(h(c,"keydown",d.hitch(this,function(a){n.isInNavMode()&&(a.keyCode===l.ENTER||a.keyCode===l.SPACE||a.keyCode===l.ESCAPE?(this._hidePopupLink(),this.logoLinkNode.focus()):a.keyCode===l.TAB&&!a.shiftKey&&0<this.appConfig.links.length||a.preventDefault())})));this.own(h(b,"keydown",d.hitch(this,function(f){n.isInNavMode()&&f.keyCode===l.ESCAPE&&!a.hasClass(b,"jimu-popup-link-close-btn")&&c.focus()})));var e=a.create("div",{"class":"title jimu-float-leading jimu-leading-margin1 jimu-ellipsis",
innerHTML:n.sanitizeHTML(this.appConfig.title),style:{lineHeight:this.height+"px"}},f),k="auto";try{k=a.getMarginBox(f).w-a.getMarginBox(c).w-a.getMarginExtents(e).w+"px"}catch(B){console.error(B),k="auto"}a.setStyle(e,"width",k);var m=[];r.forEach(this.appConfig.links,function(a){a=this._createLinkNode(b,a,!1);m.push(a)},this);m.length&&this.own(h(m[m.length-1],"keydown",d.hitch(this,function(a){n.isInNavMode()&&a.keyCode===l.TAB&&!a.shiftKey&&(a.preventDefault(),g("a",m[0])[0].focus())})));return b},
_createLinkNode:function(b,f,c){b=a.place('\x3cdiv class\x3d"jimu-link"\x3e\x3c/div\x3e',b);a.place('\x3cdiv class\x3d"line"\x3e\x3c/div\x3e',b);c=a.place('\x3cdiv class\x3d"'+(c?"link-section signin":"link-section")+'"\x3e\x3c/div\x3e',b);a.create("a",{href:f.url,tabindex:"0","class":"jimu-ellipsis",target:"_blank",rel:"noopener noreferrer",innerHTML:n.sanitizeHTML(f.label),title:f.label,style:{lineHeight:"66px"}},c);return b},_onSigninClick:function(){m.signInPortal(this.appConfig.portalUrl,this.appConfig.appId)},
_onSignoutClick:function(){this.appConfig.mode?new z({message:this.nls.cantSignOutTip}):m.signOutAll()},_onUserNameClick:function(){},_getHeaderSectionWidth:function(){return a.getMarginBox(this.headerNode).w},_getContainerWidth:function(a){var b=this._getHeaderSectionWidth();return a.w-b-this._getEmptyWidth(a)},_calcContainerAndEmptyWidth:function(a){var b=this._getContainerWidth(a),c=this._getEmptyWidth(a);b<2*this.iconWidth&&(this.switchableElements.subtitle.visible?(this._showSwitchableElements(["title",
"links"]),b=this._getContainerWidth(a),b<2*this.iconWidth&&(this._showSwitchableElements(["title"]),b=this._getContainerWidth(a),b<2*this.iconWidth&&(this._showSwitchableElements([]),b=this._getContainerWidth(a),b<2*this.iconWidth&&(c-=2*this.iconWidth-b,b=2*this.iconWidth,this._getContainerWidth(a))))):(this._showSwitchableElements([]),b=this._getContainerWidth(a),b<2*this.iconWidth&&(c-=2*this.iconWidth-b,b=2*this.iconWidth)));return{containerWidth:b,emptyWidth:c}},_getEmptyWidth:function(a){return.1*
a.w},_createIconNodes:function(b){var f=this.tabIndex+20;g(".icon-node",this.containerNode).remove();var c,d,e=this.getAllConfigs();this.iconWidth=b.h;c=this._calcContainerAndEmptyWidth(b);b=[];var k;this.maxIconCount=Math.floor(c.containerWidth/this.iconWidth);this.maxIconCount>=e.length?(this.headerIconCount=e.length,this.createMoreIcon=!1):(this.headerIconCount=this.maxIconCount-1,this.createMoreIcon=!0);this.createMoreIcon&&(k=this._createIconNode({label:this.nls.more,name:"__more"}),b.push(k));
var h;for(c=this.headerIconCount-1;0<=c;c--)d=e[c],k=this._createIconNode(d),d.openAtStart&&(h=k),b.push(k);b.reverse().forEach(function(b){f+=200;a.setAttr(b,"tabindex",f);b.config.inPanel||(b.config.tabIndex=f)});if(this.createMoreIcon){for(c=this.headerIconCount;c<e.length;c++)d=e[c],d.openAtStart&&(h=d);!h||this.openAtStartWidget||this.morePane||(this._showMorePane(),this.morePane.openNodebyId(h.id))}else h&&!this.openAtStartWidget&&(this.openAtStartWidget=h.config.id,this._onIconClick(h)),this.openedId&&
this.getConfigById(this.openedId)&&!1===this.getConfigById(this.openedId).inPanel&&(e=this._getIconNodeById(this.openedId),h=this.widgetManager.getWidgetById(this.openedId),e&&h?this._setOffPanelWidgetPosition(e,h):(this.widgetManager.closeWidget(this.openedId),this.openedId=""))},_createIconNode:function(b){var f,c;c="__more"===b.name?this.folderUrl+"images/more_icon.png":b.icon;f=a.create("div",{"class":"icon-node jimu-float-trailing"+(this.openedId===b.id?" jimu-state-selected":""),title:b.label,
role:"button",settingId:b.id,style:{width:this.height+"px",height:this.height+"px"},"data-widget-name":b.name},this.containerNode);c=a.create("img",{src:c,alt:b.label,style:{marginTop:(this.height-24)/2+"px"}},f);window.isRTL&&b.mirrorIconForRTL&&a.addClass(c,"jimu-flipx");"__more"===b.name?(this._morePaneNode=f,h(f,"click",d.hitch(this,this._showMorePane,b)),h(f,"keydown",d.hitch(this,function(a){a.keyCode!==l.ENTER&&a.keyCode!==l.SPACE||this._showMorePane()}))):(h(f,"click",d.hitch(this,function(){this._onIconClick(f)})),
h(f,"keydown",d.hitch(this,function(a){a.keyCode!==l.ENTER&&a.keyCode!==l.SPACE||this._onIconClick(f)})),n.addTooltipByDomNode(x,f,b.label));f.config=b;f.config.widgets&&1<f.config.widgets.length&&"dropDown"===f.config.openType&&this._createDropTriangle(f);return f},_createDropTriangle:function(b){var f=a.getMarginBox(b);a.create("div",{"class":"drop-triangle",style:{left:f.l+f.w/2-4+"px"}},b)},_onIconClick:function(a){a.config.widgets&&1!==a.config.widgets.length&&"openAll"!==a.config.openType?this.dropMenuNode?
this._closeDropMenu():this._openDropMenu(a):this.openedId&&this.openedId===a.config.id?this._switchNodeToClose(this.openedId):this.openedId?this._switchNodeToClose(this.openedId).then(d.hitch(this,function(){this._closeDropMenu();this._switchNodeToOpen(a.config.id)})):this._switchNodeToOpen(a.config.id)},_closeDropMenu:function(){this.dropMenuNode&&(a.destroy(this.dropMenuNode),this.dropMenuNode=null)},_openDropMenu:function(b){this.dropMenuNode=a.create("div",{"class":"jimu-drop-menu jimu-main-background",
title:b.config.label,style:{position:"absolute",zIndex:"101"}});a.place(this.dropMenuNode,this.containerNode);r.forEach(b.config.widgets,function(a){this._createDropMenuItem(a)},this);this._setDropMenuPosition(b);this.morePane&&this.morePane.hide()},_createDropMenuItem:function(b){var c=a.create("div",{"class":"menu-item",title:b.label,style:{height:this.height+"px"}},this.dropMenuNode);a.create("img",{"class":"jimu-float-leading",src:b.icon},c);a.create("div",{"class":"label jimu-float-leading",
innerHTML:n.sanitizeHTML(b.label)},c);this.own(h(c,"click",d.hitch(this,function(){this._closeDropMenu();this.openedId?this._switchNodeToClose(this.openedId).then(d.hitch(this,function(){this._showIconContent(c.config)})):this._showIconContent(c.config)})));c.config=b;return c},_setDropMenuPosition:function(b){var c={},c=a.getMarginBox(this.dropMenuNode),c=this._getDropdownPosition(b,c);c.zIndex=101;a.setStyle(this.dropMenuNode,n.getPositionStyle(c))},_getDropdownPosition:function(b,c){var f={};b=
a.getMarginBox(b);var d=a.getMarginBox(this.domNode);f.top=this.height+1;window.isRTL?f.right=0>b.l+b.w-c.w?0:b.l+b.w-c.w:b.l+c.w>d.w?f.right=0:f.left=b.l;return f},_switchNodeToOpen:function(a){a=this._getIconNodeById(a);this._showIconContent(a.config)},_switchNodeToClose:function(a){g(".icon-node",this.domNode).removeClass("jimu-state-selected");var b=this.appConfig.getConfigElementById(a);if(b)return!1===b.inPanel?(this.widgetManager.closeWidget(a),this.openedId="",a=new v,a.resolve(),a):this.panelManager.closePanel(a+
"_panel");a=new v;a.resolve();return a},_getIconNodeById:function(a){a=g('.icon-node[settingId\x3d"'+a+'"]',this.domNode);if(0!==a.length)return a[0]},_unSelectIcon:function(a){g('.icon-node[settingId\x3d"'+a+'"]',this.domNode).removeClass("jimu-state-selected");this.openedId=""},_showIconContent:function(b){var c;!1===b.inPanel?this.widgetManager.loadWidget(b).then(d.hitch(this,function(f){this.openedId=b.id;c=this._getIconNodeById(b.id);g(".icon-node",this.domNode).removeClass("jimu-state-selected");
a.addClass(c,"jimu-state-selected");a.setStyle(f.domNode,"zIndex",101);this._setOffPanelWidgetPosition(c,f);this.widgetManager.openWidget(f);this.own(p.after(f,"onClose",d.hitch(this,function(){this._unSelectIcon(b.id);this._switchNodeToClose(c.config.id);c.focus()})))})):this.panelManager.showPanel(b).then(d.hitch(this,function(f){c=this._getIconNodeById(b.id);g(".icon-node",this.domNode).removeClass("jimu-state-selected");a.addClass(c,"jimu-state-selected");this.openedId=b.id;this.own(p.after(f,
"onClose",d.hitch(this,function(){this._unSelectIcon(b.id);c.focus()})));this.own(h(f.closeNode,"keydown",d.hitch(this,function(a){a.keyCode===l.ESCAPE&&c.focus()})))}))},_setOffPanelWidgetPosition:function(a,c){a=this._getDropdownPosition(a,this.widgetManager.getWidgetMarginBox(c));c.setPosition(a,this.containerNode)},_showMorePane:function(){var b,c,e=[],g=this.getAllConfigs(),h=window.appInfo.isRunInMobile?jimuConfig.mainPageId:jimuConfig.mapId;for(b=this.headerIconCount;b<g.length;b++)c=g[b],
e.push(c);this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&a.destroy(this.moreIconPaneCoverNode);this._closeDropMenu();this.morePane=new A({openedId:this.openedId,items:e,popupContainer:h});this._createCoverNode();a.place(this.morePane.domNode,h);this.morePane.startup();p.after(this.morePane,"onNodeClicked",d.hitch(this,function(b){this._moveConfigToHeader(b.config);this._createIconNodes(a.getContentBox(this.domNode));this._onIconClick(this._getIconNodeById(b.config.id))}),!0);p.after(this.morePane,
"hide",d.hitch(this,function(){a.destroy(this.moreIconPaneCoverNode);this._morePaneNode.focus()}),!0)},_moveConfigToHeader:function(a){var b=this.getAllConfigs(),c=a.index;a.index=b[this.headerIconCount-1].index;b[this.headerIconCount-1].index=c},_createCoverNode:function(){this.moreIconPaneCoverNode=a.create("div",{"class":"jimu-more-icon-cover"},jimuConfig.layoutId)}})});