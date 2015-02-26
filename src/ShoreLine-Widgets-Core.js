define("shoreline/ShoreLine-Widgets-Core", ["amber/boot", "shoreline/ShoreLine-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('ShoreLine-Widgets-Core');
$core.packages["ShoreLine-Widgets-Core"].innerEval = function (expr) { return eval(expr); };
$core.packages["ShoreLine-Widgets-Core"].transport = {"type":"amd","amdNamespace":"shoreline"};

$core.addClass('SlContainer', $globals.SlWidget, ['canvas', 'contents'], 'ShoreLine-Widgets-Core');
$core.addMethod(
$core.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@contents"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents",{},$globals.SlContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x0a\x09^ contents ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.SlContainer);

$core.addMethod(
$core.method({
selector: "contents:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@contents"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "contents: anObject\x0a\x09contents := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlContainer);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlContainer.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@contents"]=self._initializeContents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09contents := self initializeContents.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "initializeContents"]
}),
$globals.SlContainer);

$core.addMethod(
$core.method({
selector: "initializeContents",
protocol: 'initialization',
fn: function (){
var self=this;
return "";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeContents\x0a\x0a\x09^ ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlContainer);

$core.addMethod(
$core.method({
selector: "propagateMessage:",
protocol: 'fix',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self["@contents"])._respondsTo_(aSelector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["respondsTo:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$recv(self["@contents"])._perform_(aSelector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["perform:"]=1;
//>>excludeEnd("ctx");
};
$2=$recv(self["@contents"])._respondsTo_("propagateMessage:");
if($core.assert($2)){
$recv(self["@contents"])._perform_("propagateMessage:");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"propagateMessage:",{aSelector:aSelector},$globals.SlContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "propagateMessage: aSelector\x0a\x0a\x09(contents respondsTo: aSelector) ifTrue: [ contents perform: aSelector ].\x0a\x09(contents respondsTo: #propagateMessage:) ifTrue: [ contents perform: #propagateMessage: ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "respondsTo:", "perform:"]
}),
$globals.SlContainer);

$core.addMethod(
$core.method({
selector: "removemap:withArguments:",
protocol: 'fix',
fn: function (aSelector,aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=self._contentsCollection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["contentsCollection"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(each)._respondsTo_(aSelector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["respondsTo:"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$recv(console)._log_($recv($recv(self["@contents"])._class())._name());
return $recv(self["@contents"])._perform_withArguments_(aSelector,aCollection);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv(self._contentsCollection())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(each)._respondsTo_("map:withArguments:");
if($core.assert($3)){
return $recv(each)._map_withArguments_(aSelector,aCollection);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removemap:withArguments:",{aSelector:aSelector,aCollection:aCollection},$globals.SlContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector", "aCollection"],
source: "removemap: aSelector withArguments: aCollection\x0a\x09\x0a\x09self contentsCollection do: [ :each | (each respondsTo: aSelector) ifTrue: [ console log: contents class name. contents perform: aSelector withArguments: aCollection] ].\x0a\x09\x0a\x09self contentsCollection do: [ :each |\x0a\x09\x09(each respondsTo: #map:withArguments:) ifTrue: [ each map: aSelector withArguments: aCollection ] ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "contentsCollection", "ifTrue:", "respondsTo:", "log:", "name", "class", "perform:withArguments:", "map:withArguments:"]
}),
$globals.SlContainer);

$core.addMethod(
$core.method({
selector: "renderContentsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(html)._with_(self._contents());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},$globals.SlContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentsOn: html\x0a\x0a\x09html with: self contents.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "contents"]
}),
$globals.SlContainer);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@canvas"]=$recv($recv(html)._div())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderContentsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.SlContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09canvas := html div with: [ self renderContentsOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "div", "renderContentsOn:"]
}),
$globals.SlContainer);

$core.addMethod(
$core.method({
selector: "updateContents",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@canvas"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderContentsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateContents",{},$globals.SlContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateContents\x0a\x0a\x09canvas contents: [ :html | self renderContentsOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "renderContentsOn:"]
}),
$globals.SlContainer);

$core.addMethod(
$core.method({
selector: "updateContents:",
protocol: 'rendering',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._contents_(anObject);
self._updateContents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateContents:",{anObject:anObject},$globals.SlContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "updateContents: anObject\x0a\x0a\x09self contents: anObject.\x0a\x09self updateContents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "updateContents"]
}),
$globals.SlContainer);



$core.addClass('SlFrame', $globals.SlContainer, ['debug'], 'ShoreLine-Widgets-Core');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlFrame.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@debug"]=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09debug := false.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.SlFrame);

$core.addMethod(
$core.method({
selector: "pushArgs:",
protocol: 'arguments',
fn: function (aDictionary){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "pushArgs: aDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlFrame);

$core.addMethod(
$core.method({
selector: "renderContentsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self["@debug"];
if($core.assert($1)){
self._renderDebugControlsOn_(html);
};
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlFrame.superclass.fn.prototype._renderContentsOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},$globals.SlFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentsOn: html\x0a\x0a\x09debug ifTrue: [ self renderDebugControlsOn: html ].\x0a\x09super renderContentsOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "renderDebugControlsOn:", "renderContentsOn:"]
}),
$globals.SlFrame);

$core.addMethod(
$core.method({
selector: "renderDebugControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._a();
$recv($1)._href_("#");
$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._updateContents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._with_("refresh");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderDebugControlsOn:",{html:html},$globals.SlFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderDebugControlsOn: html\x0a\x0a\x09html a\x0a\x09\x09href: '#';\x0a\x09\x09onClick: [ self updateContents ];\x0a\x09\x09with: 'refresh'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["href:", "a", "onClick:", "updateContents", "with:"]
}),
$globals.SlFrame);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlFrame.superclass.fn.prototype._renderOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self["@canvas"])._class_("container-fluid");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.SlFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09super renderOn: html.\x0a\x09canvas class: 'container-fluid'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderOn:", "class:"]
}),
$globals.SlFrame);



$core.addClass('SlFramedContainer', $globals.SlContainer, [], 'ShoreLine-Widgets-Core');


$core.addClass('SlList', $globals.SlFramedContainer, [], 'ShoreLine-Widgets-Core');
$core.addMethod(
$core.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._session())._data())._at_(self._dataTag());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"data",{},$globals.SlList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "data\x0a\x0a\x09^ self session data at: self dataTag",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "session", "dataTag"]
}),
$globals.SlList);

$core.addMethod(
$core.method({
selector: "dataDo:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBlock)._value_(self._extractData());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataDo:",{aBlock:aBlock},$globals.SlList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "dataDo: aBlock\x0a\x0a\x09aBlock value: self extractData",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "extractData"]
}),
$globals.SlList);

$core.addMethod(
$core.method({
selector: "dataTag",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataTag",{},$globals.SlList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataTag\x0a\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SlList);

$core.addMethod(
$core.method({
selector: "extractData",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extractData",{},$globals.SlList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "extractData\x0a\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SlList);

$core.addMethod(
$core.method({
selector: "header",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "header\x0a\x0a\x09^ {}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlList);

$core.addMethod(
$core.method({
selector: "renderContentsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$recv(self._data())._then_((function(data){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(html)._div_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("panel panel-default");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
self._renderTitleOn_(html);
$3=$recv(html)._div();
$recv($3)._class_("panel-body");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return self._renderList_on_(self._contents(),html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)});
//>>excludeEnd("ctx");
}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},$globals.SlList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentsOn: html\x0a\x0a\x09self data then: [ :data |\x0a\x09\x09html div: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'panel panel-default';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09self renderTitleOn: html.\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09class: 'panel-body';\x0a\x09\x09\x09\x09\x09\x09with: [ self renderList: self contents on: html ] ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["then:", "data", "div:", "class:", "div", "with:", "renderTitleOn:", "renderList:on:", "contents"]
}),
$globals.SlList);

$core.addMethod(
$core.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (anItem,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anItem:anItem,html:html},$globals.SlList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem", "html"],
source: "renderItem: anItem on: html\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SlList);

$core.addMethod(
$core.method({
selector: "renderList:on:",
protocol: 'rendering',
fn: function (aCollection,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._table();
$recv($1)._class_("table");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderListHeaderOn_(html);
return $recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderItem_on_(each,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderList:on:",{aCollection:aCollection,html:html},$globals.SlList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "html"],
source: "renderList: aCollection on: html\x0a\x0a\x09html table\x0a\x09\x09class: 'table';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderListHeaderOn: html.\x0a\x09\x09\x09\x0a\x09\x09\x09aCollection do: [ :each | self renderItem: each on: html ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "table", "with:", "renderListHeaderOn:", "do:", "renderItem:on:"]
}),
$globals.SlList);

$core.addMethod(
$core.method({
selector: "renderListHeaderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._header())._ifNotEmpty_((function(header){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._tr())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(header)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($recv(html)._th())._with_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({header:header},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderListHeaderOn:",{html:html},$globals.SlList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderListHeaderOn: html\x0a\x0a\x09self header ifNotEmpty: [ :header |\x0a\x09\x09html tr with: [ header do: [ :each | html th with: each ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotEmpty:", "header", "with:", "tr", "do:", "th"]
}),
$globals.SlList);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlList.superclass.fn.prototype._renderOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._data())._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._dataDo_((function(data){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._updateContents_(data);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({data:data},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.SlList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09super renderOn: html.\x0a\x09self data then: [ self dataDo: [ :data | self updateContents: data ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderOn:", "then:", "data", "dataDo:", "updateContents:"]
}),
$globals.SlList);

$core.addMethod(
$core.method({
selector: "renderTitleOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv(self._title())._ifNotEmpty_((function(title){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._div();
$recv($1)._class_("panel-heading");
$2=$recv($1)._with_(title);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({title:title},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTitleOn:",{html:html},$globals.SlList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTitleOn: html\x0a\x0a\x09self title ifNotEmpty: [ :title |\x0a\x09\x09html div\x0a\x09\x09\x09class: 'panel-heading';\x0a\x09\x09\x09with: title ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotEmpty:", "title", "class:", "div", "with:"]
}),
$globals.SlList);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x0a\x09^ ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlList);

$core.addMethod(
$core.method({
selector: "updateContents",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlList.superclass.fn.prototype._updateContents.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateContents",{},$globals.SlList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateContents\x0a\x0a\x09self data then: [ super updateContents ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["then:", "data", "updateContents"]
}),
$globals.SlList);



$core.addClass('SlNewList', $globals.SlWidget, ['container', 'sortField'], 'ShoreLine-Widgets-Core');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlNewList.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlNewList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.SlNewList);

$core.addMethod(
$core.method({
selector: "render",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"render",{},$globals.SlNewList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "render\x0a\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SlNewList);

$core.addMethod(
$core.method({
selector: "renderContentsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("panel-body");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderControlsOn_(html);
self["@container"]=$recv(html)._div();
return self["@container"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},$globals.SlNewList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentsOn: html\x0a\x09\x0a\x09html div\x0a\x09\x09class: 'panel-body';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderControlsOn: html.\x0a\x09\x09\x09container := html div ];\x0a\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "renderControlsOn:", "yourself"]
}),
$globals.SlNewList);

$core.addMethod(
$core.method({
selector: "renderControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderControlsOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlNewList);

$core.addMethod(
$core.method({
selector: "renderHeadControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderHeadControlsOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlNewList);

$core.addMethod(
$core.method({
selector: "renderHeaderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$receiver;
$2=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._listName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["listName"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$3=$recv(html)._div();
$recv($3)._class_("panel-heading");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._with_($recv(self._class())._listName());
return self._renderHeadControlsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$4;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html},$globals.SlNewList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderHeaderOn: html\x0a\x0a\x09self class listName ifNotNil: [\x0a\x09\x09html div\x0a\x09\x09\x09class: 'panel-heading';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html with: self class listName.\x0a\x09\x09\x09\x09self renderHeadControlsOn: html ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "listName", "class", "class:", "div", "with:", "renderHeadControlsOn:"]
}),
$globals.SlNewList);

$core.addMethod(
$core.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (anElement,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anElement:anElement,html:html},$globals.SlNewList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement", "html"],
source: "renderItem: anElement on: html\x0a\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SlNewList);

$core.addMethod(
$core.method({
selector: "renderItems:on:",
protocol: 'rendering',
fn: function (aCollection,html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "html"],
source: "renderItems: aCollection on: html\x0a\x0a\x09\x22(sortBlock ifNil: [ aCollection ] ifNotNil: [ aCollection sort: sortBlock ])\x0a\x09\x09do: [ :each | self renderItem: each on: html ].\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlNewList);

$core.addMethod(
$core.method({
selector: "renderList:on:",
protocol: 'rendering',
fn: function (aCollection,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(html)._div_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderItems_on_(aCollection,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderList:on:",{aCollection:aCollection,html:html},$globals.SlNewList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "html"],
source: "renderList: aCollection on: html\x0a\x0a\x09html div: [ self renderItems: aCollection on: html ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["div:", "renderItems:on:"]
}),
$globals.SlNewList);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("panel panel-default");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderHeaderOn_(html);
return self._renderContentsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._render();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.SlNewList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'panel panel-default';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderHeaderOn: html.\x0a\x09\x09\x09self renderContentsOn: html ].\x0a\x09\x0a\x09self render.\x0a\x09\x22self updateContents.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "renderHeaderOn:", "renderContentsOn:", "render"]
}),
$globals.SlNewList);

$core.addMethod(
$core.method({
selector: "updateContents",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._updateList_(self._data());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateContents",{},$globals.SlNewList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateContents\x0a\x0a\x09self updateList: self data",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateList:", "data"]
}),
$globals.SlNewList);

$core.addMethod(
$core.method({
selector: "updateList:",
protocol: 'actions',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@container"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderList_on_(aCollection,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateList:",{aCollection:aCollection},$globals.SlNewList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "updateList: aCollection\x0a\x0a\x09container contents: [ :html | self renderList: aCollection on: html ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "renderList:on:"]
}),
$globals.SlNewList);

$core.addMethod(
$core.method({
selector: "width",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@container"])._asJQuery())._innerWidth();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width",{},$globals.SlNewList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x0a\x09^ container asJQuery innerWidth",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["innerWidth", "asJQuery"]
}),
$globals.SlNewList);


$core.addMethod(
$core.method({
selector: "listName",
protocol: 'configuration',
fn: function (){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listName\x0a\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlNewList.klass);


$core.addClass('SlOldList', $globals.SlWidget, ['container', 'filteredItems', 'sortBlock', 'sortField'], 'ShoreLine-Widgets-Core');
$core.addMethod(
$core.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"data",{},$globals.SlOldList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "data\x0a\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "filteredItemsFrom:",
protocol: 'filtering',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"filteredItemsFrom:",{aCollection:aCollection},$globals.SlOldList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "filteredItemsFrom: aCollection\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlOldList.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@filteredItems"]=$recv($Set())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlOldList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09filteredItems := Set new.",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "renderContentsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("panel-body");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderControlsOn_(html);
self["@container"]=$recv(html)._div();
return self["@container"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},$globals.SlOldList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentsOn: html\x0a\x09\x0a\x09html div\x0a\x09\x09class: 'panel-body';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderControlsOn: html.\x0a\x09\x09\x09container := html div ];\x0a\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "renderControlsOn:", "yourself"]
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "renderControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderControlsOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "renderHeadControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderHeadControlsOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "renderHeaderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("panel-heading");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._with_($recv(self._class())._listName());
return self._renderHeadControlsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html},$globals.SlOldList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderHeaderOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'panel-heading';\x0a\x09\x09with: [\x0a\x09\x09\x09html with: self class listName.\x0a\x09\x09\x09self renderHeadControlsOn: html ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "listName", "class", "renderHeadControlsOn:"]
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (anElement,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anElement:anElement,html:html},$globals.SlOldList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement", "html"],
source: "renderItem: anElement on: html\x0a\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "renderItems:on:",
protocol: 'rendering',
fn: function (aCollection,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@sortBlock"];
if(($receiver = $2) == null || $receiver.isNil){
$1=aCollection;
} else {
$1=$recv(aCollection)._sort_(self["@sortBlock"]);
};
$recv($1)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderItem_on_(each,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItems:on:",{aCollection:aCollection,html:html},$globals.SlOldList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "html"],
source: "renderItems: aCollection on: html\x0a\x0a\x09(sortBlock ifNil: [ aCollection ] ifNotNil: [ aCollection sort: sortBlock ])\x0a\x09\x09do: [ :each | self renderItem: each on: html ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifNil:ifNotNil:", "sort:", "renderItem:on:"]
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "renderList:on:",
protocol: 'rendering',
fn: function (aCollection,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(html)._div_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderItems_on_(aCollection,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderList:on:",{aCollection:aCollection,html:html},$globals.SlOldList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "html"],
source: "renderList: aCollection on: html\x0a\x0a\x09html div: [ self renderItems: aCollection on: html ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["div:", "renderItems:on:"]
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("panel panel-default");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderHeaderOn_(html);
return self._renderContentsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.SlOldList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'panel panel-default';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderHeaderOn: html.\x0a\x09\x09\x09self renderContentsOn: html ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "renderHeaderOn:", "renderContentsOn:"]
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "sortBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sortBlock"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sortBlock\x0a\x0a\x09^ sortBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "sortBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@sortBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "sortBlock: aBlock\x0a\x0a\x09sortBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "updateContents",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._updateList_(self._filteredItemsFrom_(self._data()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateContents",{},$globals.SlOldList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateContents\x0a\x0a\x09\x22ForkPool default fork: [ \x22self updateList: (self filteredItemsFrom: self data) \x22].\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateList:", "filteredItemsFrom:", "data"]
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "updateList:",
protocol: 'actions',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@container"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderList_on_(aCollection,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateList:",{aCollection:aCollection},$globals.SlOldList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "updateList: aCollection\x0a\x0a\x09container contents: [ :html | self renderList: aCollection on: html ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "renderList:on:"]
}),
$globals.SlOldList);

$core.addMethod(
$core.method({
selector: "width",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@container"])._asJQuery())._innerWidth();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width",{},$globals.SlOldList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x0a\x09^ container asJQuery innerWidth",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["innerWidth", "asJQuery"]
}),
$globals.SlOldList);


$core.addMethod(
$core.method({
selector: "listName",
protocol: 'configuration',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"listName",{},$globals.SlOldList.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listName\x0a\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SlOldList.klass);

});
