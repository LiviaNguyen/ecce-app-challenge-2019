// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/dnd/move dijit/_TemplatedMixin jimu/BaseWidgetPanel jimu/utils dojox/layout/ResizeHandle ./a11y/OnScreenWidgetPanel dojo/touch".split(" "),function(f,d,b,g,k,l,m,h,n,p){f=f([m,l],{baseClass:"jimu-panel jimu-on-screen-widget-panel jimu-main-background",_positionInfoBox:null,_originalBox:null,widgetIcon:null,_resizeOnOpen:!0,templateString:'\x3cdiv data-dojo-attach-point\x3d"boxNode"\x3e\x3cdiv class\x3d"jimu-panel-title jimu-main-background" data-dojo-attach-point\x3d"titleNode"\x3e\x3cdiv class\x3d"title-label jimu-vcenter-text jimu-float-leading jimu-leading-padding1"data-dojo-attach-point\x3d"titleLabelNode"\x3e${label}\x3c/div\x3e\x3cdiv class\x3d"btns-container"\x3e\x3cdiv tabindex\x3d"0" class\x3d"foldable-btn jimu-vcenter" aria-label\x3d"${headerNls.foldWindow}" role\x3d"button"data-dojo-attach-point\x3d"foldableNode"data-dojo-attach-event\x3d"onclick:_onFoldableBtnClicked,onkeydown:_onFoldableBtnKeyDown"\x3e\x3c/div\x3e\x3cdiv tabindex\x3d"0" class\x3d"max-btn jimu-vcenter" aria-label\x3d"${headerNls.maxWindow}" role\x3d"button"data-dojo-attach-point\x3d"maxNode"data-dojo-attach-event\x3d"onclick:_onMaxBtnClicked,onkeydown:_onMaxBtnKeyDown"\x3e\x3c/div\x3e\x3cdiv tabindex\x3d"0" class\x3d"close-btn jimu-vcenter" aria-label\x3d"${headerNls.closeWindow}" role\x3d"button"data-dojo-attach-point\x3d"closeNode"data-dojo-attach-event\x3d"onclick:_onCloseBtnClicked,onkeydown:_onCloseBtnKey"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"jimu-panel-content" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\x3c/div\x3e',
postMixInProperties:function(){this.headerNls=window.jimuNls.panelHeader},postCreate:function(){this._originalBox={w:400,h:410}},startup:function(){this.inherited(arguments);this._normalizePositionObj(this.position);this._makeOriginalBox();this.makePositionInfoBox();this.makeMoveable(this._positionInfoBox.w,.25*this._positionInfoBox.w);this.a11y_init()},_onMaxBtnClicked:function(a){a.stopPropagation();this._getPositionInfo().isRunInMobile&&("maximized"===this.windowState?(b.setAttr(this.maxNode,"aria-label",
this.headerNls.maxWindow),this.panelManager.normalizePanel(this)):(b.setAttr(this.maxNode,"aria-label",this.headerNls.restoreWindow),this.panelManager.maximizePanel(this),b.removeClass(this.foldableNode,"fold-up"),b.addClass(this.foldableNode,"fold-down"),b.setAttr(this.foldableNode,"aria-label",this.headerNls.foldWindow)),this._setMobilePosition());this.panelManager.activatePanel(this)},_onFoldableBtnClicked:function(a){a&&a.stopPropagation();this._getPositionInfo().isRunInMobile&&("minimized"===
this.windowState?(b.removeClass(this.foldableNode,"fold-up"),b.addClass(this.foldableNode,"fold-down"),b.setAttr(this.foldableNode,"aria-label",this.headerNls.foldWindow),this.panelManager.normalizePanel(this)):(b.removeClass(this.foldableNode,"fold-down"),b.addClass(this.foldableNode,"fold-up"),b.setAttr(this.foldableNode,"aria-label",this.headerNls.unfoldWindow),this.panelManager.minimizePanel(this)),b.setAttr(this.maxNode,"aria-label",this.headerNls.maxWindow),this._setMobilePosition())},_onCloseBtnClicked:function(a){a.preventDefault();
a.stopPropagation();this.panelManager.closePanel(this)},_normalizePositionObj:function(a){var b=this._getLayoutBox();a.left=isFinite(a.left)?a.left:b.w-a.right;a.top=isFinite(a.top)?a.top:b.h-a.bottom;delete a.right;delete a.bottom;this.position=d.mixin(d.clone(this.position),a)},makePositionInfoBox:function(){this._positionInfoBox={w:this.position.width||400,h:this.position.height||410,l:this.position.left||0,t:this.position.top||0}},_makeOriginalBox:function(){this._originalBox={w:this.position.width||
400,h:this.position.height||410,l:this.position.left||0,t:this.position.top||0}},makeResizable:function(){this.disableResizable();this.resizeHandle=(new n({targetId:this,minWidth:this._originalBox.w,minHeight:this._originalBox.h,activeResize:!1})).placeAt(this.domNode);this.resizeHandle.startup()},disableResizable:function(){this.resizeHandle&&(this.resizeHandle.destroy(),this.resizeHandle=null)},makeMoveable:function(a,e){this.disableMoveable();var c=b.getMarginBox(jimuConfig.layoutId);c.l=c.l-a+
e;c.w+=2*(a-e);this.moveable=new k.boxConstrainedMoveable(this.domNode,{box:c,handle:this.titleNode,within:!0});this.own(g(this.moveable,"Moving",d.hitch(this,this.onMoving)));this.own(g(this.moveable,"MoveStop",d.hitch(this,this.onMoveStop)))},disableMoveable:function(){this.moveable&&(this.moveable.destroy(),this.moveable=null)},createHandleNode:function(){return this.titleNode},onOpen:function(){this._resizeOnOpen&&(this.resize(),this._resizeOnOpen=!1);window.appInfo.isRunInMobile&&(this._setMobilePosition(),
h.isInNavMode()&&"minimized"===this.windowState&&this._onFoldableBtnClicked());this.inherited(arguments)},_switchToMobileUI:function(){b.removeClass(this.titleNode,"title-normal");b.addClass(this.titleNode,"title-full");b.setStyle(this.foldableNode,"display","block");b.setStyle(this.maxNode,"display","block");"normal"===this.windowState?(b.removeClass(this.foldableNode,"fold-up"),b.addClass(this.foldableNode,"fold-down"),b.setAttr(this.foldableNode,"aria-label",this.headerNls.foldWindow)):(b.removeClass(this.foldableNode,
"fold-down"),b.addClass(this.foldableNode,"fold-up"),b.setAttr(this.foldableNode,"aria-label",this.headerNls.unfoldWindow))},_switchToDesktopUI:function(){b.removeClass(this.titleNode,"title-full");b.addClass(this.titleNode,"title-normal");b.setStyle(this.foldableNode,"display","none");b.setStyle(this.maxNode,"display","none")},resize:function(a){var b=this._getPositionInfo(),c={left:b.position.left,top:b.position.top,width:this._positionInfoBox.w,height:this._positionInfoBox.h};a&&(a.t=this.domNode.offsetTop,
c.left=isFinite(a.l)?a.l:c.left,c.top=isFinite(a.t)?a.t:c.top,c.width=isFinite(a.w)?a.w:c.width,c.height=isFinite(a.h)?a.h:c.height,this._normalizePositionObj(d.clone(c)),this.makePositionInfoBox(),c.width=this._positionInfoBox.w,c.height=this._positionInfoBox.h);b.position=c;this._onResponsible(b);this.inherited(arguments)},_onResponsible:function(a){a.isRunInMobile?(this._setMobilePosition(),this.disableMoveable(),this.disableResizable(),this._switchToMobileUI()):(this._setDesktopPosition(a.position),
this.makeResizable(),this.makeMoveable(this._positionInfoBox.w,.25*this._positionInfoBox.w),this._switchToDesktopUI())},setPosition:function(a){this._normalizePositionObj(a);this.makePositionInfoBox();a=this._getPositionInfo();this._onResponsible(a)},destroy:function(){this.widgetIcon=null;this.inherited(arguments)},_getLayoutBox:function(){var a=jimuConfig.layoutId,a="map"===this.position.relativeTo?jimuConfig.mapId:jimuConfig.layoutId;return b.getMarginBox(a)},_getPositionInfo:function(){var a=
{isRunInMobile:!1,position:{left:0,top:5}},b=this._getLayoutBox(),c=this._positionInfoBox.l;if(window.appInfo.isRunInMobile)return a.isRunInMobile=!0,a;window.isRTL?(a.position.left=b.w-c,a.position.left+this._positionInfoBox.w>b.w&&(a.position.left-=this._positionInfoBox.w,0>a.position.left&&(a.position.left=b.w-this._positionInfoBox.w))):(a.position.left=c,a.position.left+this._positionInfoBox.w>b.w&&(a.position.left=b.w>this._positionInfoBox.w?b.w-this._positionInfoBox.w:0));c=this._positionInfoBox.t;
b=b.h-c;c>=b?c>=this._positionInfoBox.h&&(a.position.top=this._positionInfoBox.t-this._positionInfoBox.h-40-3):b>=this._positionInfoBox.h&&(a.position.top=this._positionInfoBox.t+40+3);return a},_setMobilePosition:function(){window.appInfo.isRunInMobile&&this.domNode&&this.domNode.parentNode!==b.byId(jimuConfig.layoutId)&&b.place(this.domNode,jimuConfig.layoutId);var a=this.panelManager.getPositionOnMobile(this);this.position.zIndex&&(a.zIndex=this.position.zIndex);var e=h.getPositionStyle(a);d.mixin(e,
a.borderRadiusStyle);b.setStyle(this.domNode,e)},_setDesktopPosition:function(a){!window.appInfo.isRunInMobile&&this.domNode&&this.domNode.parentNode!==b.byId(jimuConfig.mapId)&&b.place(this.domNode,jimuConfig.mapId);b.setStyle(this.domNode,{left:a.left+"px",right:"auto",top:a.top+"px",width:(a.width||this.position.width||this._originalBox.w)+"px",height:(a.height||this.position.height||this._originalBox.h)+"px"})},onMoving:function(a){b.setStyle(a.node,"opacity",.9)},onMoveStop:function(a){b.setStyle(a.node,
"opacity",1);a=b.getMarginBox(a.node);this._normalizePositionObj(d.clone({left:a.l,top:a.t,width:a.w,height:a.h}));this.makePositionInfoBox()}});f.extend(p);return f});