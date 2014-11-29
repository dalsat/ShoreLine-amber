define("shoreline/ShoreLine-Widgets-Core", ["amber/boot", "shoreline/ShoreLine-Core"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('ShoreLine-Widgets-Core');
smalltalk.packages["ShoreLine-Widgets-Core"].transport = {"type":"amd","amdNamespace":"shoreline"};

smalltalk.addClass('SlContainer', globals.SlWidget, ['canvas', 'contents'], 'ShoreLine-Widgets-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@contents"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},globals.SlContainer)})},
args: [],
source: "contents\x0a\x0a\x09^ contents ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.SlContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@contents"]=anObject;
return self},
args: ["anObject"],
source: "contents: anObject\x0a\x09contents := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "propagateMessage:",
protocol: 'fix',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@contents"])._respondsTo_(aSelector);
$ctx1.sendIdx["respondsTo:"]=1;
if(smalltalk.assert($1)){
_st(self["@contents"])._perform_(aSelector);
$ctx1.sendIdx["perform:"]=1;
};
$2=_st(self["@contents"])._respondsTo_("propagateMessage:");
if(smalltalk.assert($2)){
_st(self["@contents"])._perform_("propagateMessage:");
};
return self}, function($ctx1) {$ctx1.fill(self,"propagateMessage:",{aSelector:aSelector},smalltalk.SlContainer)})},
args: ["aSelector"],
source: "propagateMessage: aSelector\x0a\x0a\x09(contents respondsTo: aSelector) ifTrue: [ contents perform: aSelector ].\x0a\x09(contents respondsTo: #propagateMessage:) ifTrue: [ contents perform: #propagateMessage: ].",
messageSends: ["ifTrue:", "respondsTo:", "perform:"],
referencedClasses: []
}),
globals.SlContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "removemap:withArguments:",
protocol: 'fix',
fn: function (aSelector,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._contentsCollection();
$ctx1.sendIdx["contentsCollection"]=1;
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st(each)._respondsTo_(aSelector);
$ctx2.sendIdx["respondsTo:"]=1;
if(smalltalk.assert($2)){
_st(console)._log_(_st(_st(self["@contents"])._class())._name());
return _st(self["@contents"])._perform_withArguments_(aSelector,aCollection);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
_st(self._contentsCollection())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$3=_st(each)._respondsTo_("map:withArguments:");
if(smalltalk.assert($3)){
return _st(each)._map_withArguments_(aSelector,aCollection);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removemap:withArguments:",{aSelector:aSelector,aCollection:aCollection},globals.SlContainer)})},
args: ["aSelector", "aCollection"],
source: "removemap: aSelector withArguments: aCollection\x0a\x09\x0a\x09self contentsCollection do: [ :each | (each respondsTo: aSelector) ifTrue: [ console log: contents class name. contents perform: aSelector withArguments: aCollection] ].\x0a\x09\x0a\x09self contentsCollection do: [ :each |\x0a\x09\x09(each respondsTo: #map:withArguments:) ifTrue: [ each map: aSelector withArguments: aCollection ] ].",
messageSends: ["do:", "contentsCollection", "ifTrue:", "respondsTo:", "log:", "name", "class", "perform:withArguments:", "map:withArguments:"],
referencedClasses: []
}),
globals.SlContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(self._contents());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},globals.SlContainer)})},
args: ["html"],
source: "renderContentsOn: html\x0a\x0a\x09html with: self contents.",
messageSends: ["with:", "contents"],
referencedClasses: []
}),
globals.SlContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=_st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderContentsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.SlContainer)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09canvas := html div with: [ self renderContentsOn: html ]",
messageSends: ["with:", "div", "renderContentsOn:"],
referencedClasses: []
}),
globals.SlContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "updateContents",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return self._renderContentsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateContents",{},globals.SlContainer)})},
args: [],
source: "updateContents\x0a\x0a\x09canvas contents: [ :html | self renderContentsOn: html ]",
messageSends: ["contents:", "renderContentsOn:"],
referencedClasses: []
}),
globals.SlContainer);



smalltalk.addClass('SlFrame', globals.SlContainer, ['debug'], 'ShoreLine-Widgets-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.SlFrame.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@debug"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SlFrame)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x22self contents: nil.\x22\x0a\x09debug := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.SlFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "pushArgs:",
protocol: 'arguments',
fn: function (aDictionary){
var self=this;
return self},
args: ["aDictionary"],
source: "pushArgs: aDictionary",
messageSends: [],
referencedClasses: []
}),
globals.SlFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@debug"];
if(smalltalk.assert($1)){
self._renderDebugControlsOn_(html);
};
($ctx1.supercall = true, globals.SlFrame.superclass.fn.prototype._renderContentsOn_.apply(_st(self), [html]));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},globals.SlFrame)})},
args: ["html"],
source: "renderContentsOn: html\x0a\x0a\x09debug ifTrue: [ self renderDebugControlsOn: html ].\x0a\x09super renderContentsOn: html",
messageSends: ["ifTrue:", "renderDebugControlsOn:", "renderContentsOn:"],
referencedClasses: []
}),
globals.SlFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "renderDebugControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._a();
_st($1)._href_("#");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._updateContents();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._with_("refresh");
return self}, function($ctx1) {$ctx1.fill(self,"renderDebugControlsOn:",{html:html},smalltalk.SlFrame)})},
args: ["html"],
source: "renderDebugControlsOn: html\x0a\x0a\x09html a\x0a\x09\x09href: '#';\x0a\x09\x09onClick: [ self updateContents ];\x0a\x09\x09with: 'refresh'.",
messageSends: ["href:", "a", "onClick:", "updateContents", "with:"],
referencedClasses: []
}),
globals.SlFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.SlFrame.superclass.fn.prototype._renderOn_.apply(_st(self), [html]));
$ctx1.supercall = false;
_st(self["@canvas"])._class_("container-fluid");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.SlFrame)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09super renderOn: html.\x0a\x09canvas class: 'container-fluid'.",
messageSends: ["renderOn:", "class:"],
referencedClasses: []
}),
globals.SlFrame);



smalltalk.addClass('SlNewList', globals.SlWidget, ['container', 'sortField'], 'ShoreLine-Widgets-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.SlNewList.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SlNewList)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.SlNewList);

smalltalk.addMethod(
smalltalk.method({
selector: "render",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"render",{},globals.SlNewList)})},
args: [],
source: "render\x0a\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SlNewList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("panel-body");
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderControlsOn_(html);
self["@container"]=_st(html)._div();
return self["@container"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._yourself();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},globals.SlNewList)})},
args: ["html"],
source: "renderContentsOn: html\x0a\x09\x0a\x09html div\x0a\x09\x09class: 'panel-body';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderControlsOn: html.\x0a\x09\x09\x09container := html div ];\x0a\x09\x09yourself.",
messageSends: ["class:", "div", "with:", "renderControlsOn:", "yourself"],
referencedClasses: []
}),
globals.SlNewList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderControlsOn: html",
messageSends: [],
referencedClasses: []
}),
globals.SlNewList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderHeadControlsOn: html",
messageSends: [],
referencedClasses: []
}),
globals.SlNewList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeaderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4,$receiver;
$2=self._class();
$ctx1.sendIdx["class"]=1;
$1=_st($2)._listName();
$ctx1.sendIdx["listName"]=1;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$3=_st(html)._div();
_st($3)._class_("panel-heading");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_(_st(self._class())._listName());
return self._renderHeadControlsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=1;
$4;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html},globals.SlNewList)})},
args: ["html"],
source: "renderHeaderOn: html\x0a\x0a\x09self class listName ifNotNil: [\x0a\x09\x09html div\x0a\x09\x09\x09class: 'panel-heading';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html with: self class listName.\x0a\x09\x09\x09\x09self renderHeadControlsOn: html ] ]",
messageSends: ["ifNotNil:", "listName", "class", "class:", "div", "with:", "renderHeadControlsOn:"],
referencedClasses: []
}),
globals.SlNewList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (anElement,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anElement:anElement,html:html},globals.SlNewList)})},
args: ["anElement", "html"],
source: "renderItem: anElement on: html\x0a\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SlNewList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItems:on:",
protocol: 'rendering',
fn: function (aCollection,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@sortBlock"];
if(($receiver = $2) == null || $receiver.isNil){
$1=aCollection;
} else {
$1=_st(aCollection)._sort_(self["@sortBlock"]);
};
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._renderItem_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItems:on:",{aCollection:aCollection,html:html},globals.SlNewList)})},
args: ["aCollection", "html"],
source: "renderItems: aCollection on: html\x0a\x0a\x09(sortBlock ifNil: [ aCollection ] ifNotNil: [ aCollection sort: sortBlock ])\x0a\x09\x09do: [ :each | self renderItem: each on: html ].",
messageSends: ["do:", "ifNil:ifNotNil:", "sort:", "renderItem:on:"],
referencedClasses: []
}),
globals.SlNewList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderList:on:",
protocol: 'rendering',
fn: function (aCollection,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._div_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderItems_on_(aCollection,html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderList:on:",{aCollection:aCollection,html:html},globals.SlNewList)})},
args: ["aCollection", "html"],
source: "renderList: aCollection on: html\x0a\x0a\x09html div: [ self renderItems: aCollection on: html ].",
messageSends: ["div:", "renderItems:on:"],
referencedClasses: []
}),
globals.SlNewList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("panel panel-default");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderHeaderOn_(html);
return self._renderContentsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self._render();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.SlNewList)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'panel panel-default';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderHeaderOn: html.\x0a\x09\x09\x09self renderContentsOn: html ].\x0a\x09\x0a\x09self render.\x0a\x09\x22self updateContents.\x22",
messageSends: ["class:", "div", "with:", "renderHeaderOn:", "renderContentsOn:", "render"],
referencedClasses: []
}),
globals.SlNewList);

smalltalk.addMethod(
smalltalk.method({
selector: "updateContents",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateList_(self._data());
return self}, function($ctx1) {$ctx1.fill(self,"updateContents",{},globals.SlNewList)})},
args: [],
source: "updateContents\x0a\x0a\x09self updateList: self data",
messageSends: ["updateList:", "data"],
referencedClasses: []
}),
globals.SlNewList);

smalltalk.addMethod(
smalltalk.method({
selector: "updateList:",
protocol: 'actions',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@container"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return self._renderList_on_(aCollection,html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateList:",{aCollection:aCollection},globals.SlNewList)})},
args: ["aCollection"],
source: "updateList: aCollection\x0a\x0a\x09container contents: [ :html | self renderList: aCollection on: html ].",
messageSends: ["contents:", "renderList:on:"],
referencedClasses: []
}),
globals.SlNewList);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@container"])._asJQuery())._innerWidth();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},globals.SlNewList)})},
args: [],
source: "width\x0a\x0a\x09^ container asJQuery innerWidth",
messageSends: ["innerWidth", "asJQuery"],
referencedClasses: []
}),
globals.SlNewList);


smalltalk.addMethod(
smalltalk.method({
selector: "listName",
protocol: 'configuration',
fn: function (){
var self=this;
return nil;
},
args: [],
source: "listName\x0a\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
globals.SlNewList.klass);

});
