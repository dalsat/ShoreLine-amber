define("shoreline/ShoreLine-Widgets", ["amber/boot", "shoreline/ShoreLine-Core", "shoreline/ShoreLine-Widgets-Core", "amber_core/Kernel-Collections"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('ShoreLine-Widgets');
smalltalk.packages["ShoreLine-Widgets"].transport = {"type":"amd","amdNamespace":"shoreline"};

smalltalk.addClass('SlList', globals.SlWidget, ['container', 'filteredItems', 'sortBlock', 'sortField'], 'ShoreLine-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"data",{},smalltalk.SlList)})},
args: [],
source: "data\x0a\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SlList);

smalltalk.addMethod(
smalltalk.method({
selector: "filteredItemsFrom:",
protocol: 'filtering',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"filteredItemsFrom:",{aCollection:aCollection},smalltalk.SlList)})},
args: ["aCollection"],
source: "filteredItemsFrom: aCollection\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SlList);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.SlList.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@filteredItems"]=_st($Set())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SlList)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09filteredItems := Set new.",
messageSends: ["initialize", "new"],
referencedClasses: ["Set"]
}),
globals.SlList);

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
return self}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},globals.SlList)})},
args: ["html"],
source: "renderContentsOn: html\x0a\x09\x0a\x09html div\x0a\x09\x09class: 'panel-body';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderControlsOn: html.\x0a\x09\x09\x09container := html div ];\x0a\x09\x09yourself.",
messageSends: ["class:", "div", "with:", "renderControlsOn:", "yourself"],
referencedClasses: []
}),
globals.SlList);

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
globals.SlList);

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
globals.SlList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeaderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("panel-heading");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_(_st(self._class())._listName());
return self._renderHeadControlsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html},globals.SlList)})},
args: ["html"],
source: "renderHeaderOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'panel-heading';\x0a\x09\x09with: [\x0a\x09\x09\x09html with: self class listName.\x0a\x09\x09\x09self renderHeadControlsOn: html ].",
messageSends: ["class:", "div", "with:", "listName", "class", "renderHeadControlsOn:"],
referencedClasses: []
}),
globals.SlList);

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
}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anElement:anElement,html:html},smalltalk.SlList)})},
args: ["anElement", "html"],
source: "renderItem: anElement on: html\x0a\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SlList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItems:on:",
protocol: 'rendering',
fn: function (aCollection,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@sortBlock"];
if(($receiver = $2) == nil || $receiver == null){
$1=aCollection;
} else {
$1=_st(aCollection)._sort_(self["@sortBlock"]);
};
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._renderItem_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItems:on:",{aCollection:aCollection,html:html},smalltalk.SlList)})},
args: ["aCollection", "html"],
source: "renderItems: aCollection on: html\x0a\x0a\x09(sortBlock ifNil: [ aCollection ] ifNotNil: [ aCollection sort: sortBlock ])\x0a\x09\x09do: [ :each | self renderItem: each on: html ].",
messageSends: ["do:", "ifNil:ifNotNil:", "sort:", "renderItem:on:"],
referencedClasses: []
}),
globals.SlList);

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
return self}, function($ctx1) {$ctx1.fill(self,"renderList:on:",{aCollection:aCollection,html:html},smalltalk.SlList)})},
args: ["aCollection", "html"],
source: "renderList: aCollection on: html\x0a\x0a\x09html div: [ self renderItems: aCollection on: html ].",
messageSends: ["div:", "renderItems:on:"],
referencedClasses: []
}),
globals.SlList);

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
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.SlList)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'panel panel-default';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderHeaderOn: html.\x0a\x09\x09\x09self renderContentsOn: html ].",
messageSends: ["class:", "div", "with:", "renderHeaderOn:", "renderContentsOn:"],
referencedClasses: []
}),
globals.SlList);

smalltalk.addMethod(
smalltalk.method({
selector: "sortBlock",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sortBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sortBlock",{},smalltalk.SlList)})},
args: [],
source: "sortBlock\x0a\x0a\x09^ sortBlock",
messageSends: [],
referencedClasses: []
}),
globals.SlList);

smalltalk.addMethod(
smalltalk.method({
selector: "sortBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sortBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"sortBlock:",{aBlock:aBlock},smalltalk.SlList)})},
args: ["aBlock"],
source: "sortBlock: aBlock\x0a\x0a\x09sortBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.SlList);

smalltalk.addMethod(
smalltalk.method({
selector: "updateContents",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateList_(self._filteredItemsFrom_(self._data()));
return self}, function($ctx1) {$ctx1.fill(self,"updateContents",{},smalltalk.SlList)})},
args: [],
source: "updateContents\x0a\x0a\x09\x22ForkPool default fork: [ \x22self updateList: (self filteredItemsFrom: self data) \x22].\x22",
messageSends: ["updateList:", "filteredItemsFrom:", "data"],
referencedClasses: []
}),
globals.SlList);

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
return self}, function($ctx1) {$ctx1.fill(self,"updateList:",{aCollection:aCollection},smalltalk.SlList)})},
args: ["aCollection"],
source: "updateList: aCollection\x0a\x0a\x09container contents: [ :html | self renderList: aCollection on: html ].",
messageSends: ["contents:", "renderList:on:"],
referencedClasses: []
}),
globals.SlList);

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
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.SlList)})},
args: [],
source: "width\x0a\x0a\x09^ container asJQuery innerWidth",
messageSends: ["innerWidth", "asJQuery"],
referencedClasses: []
}),
globals.SlList);


smalltalk.addMethod(
smalltalk.method({
selector: "listName",
protocol: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"listName",{},smalltalk.SlList.klass)})},
args: [],
source: "listName\x0a\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SlList.klass);


smalltalk.addClass('SlLoadList', globals.SlList, [], 'ShoreLine-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._extractData_(self._repository());
return $1;
}, function($ctx1) {$ctx1.fill(self,"data",{},globals.SlLoadList)})},
args: [],
source: "data\x0a\x0a\x09^ self extractData: self repository",
messageSends: ["extractData:", "repository"],
referencedClasses: []
}),
globals.SlLoadList);

smalltalk.addMethod(
smalltalk.method({
selector: "extractData:",
protocol: 'actions',
fn: function (jsonData){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"extractData:",{jsonData:jsonData},globals.SlLoadList)})},
args: ["jsonData"],
source: "extractData: jsonData\x0a\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SlLoadList);

smalltalk.addMethod(
smalltalk.method({
selector: "filteredItemsFrom:",
protocol: 'filtering',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection)._select_((function(eachItem){
return smalltalk.withContext(function($ctx2) {
return _st(self["@filteredItems"])._includes_(_st(eachItem)._id());
}, function($ctx2) {$ctx2.fillBlock({eachItem:eachItem},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"filteredItemsFrom:",{aCollection:aCollection},globals.SlLoadList)})},
args: ["aCollection"],
source: "filteredItemsFrom: aCollection\x0a\x0a\x09^ aCollection select: [ :eachItem | filteredItems includes: eachItem id ].",
messageSends: ["select:", "includes:", "id"],
referencedClasses: []
}),
globals.SlLoadList);

smalltalk.addMethod(
smalltalk.method({
selector: "onLoadedData:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateData();
self._updateContents();
return self}, function($ctx1) {$ctx1.fill(self,"onLoadedData:",{anAnnouncement:anAnnouncement},globals.SlLoadList)})},
args: ["anAnnouncement"],
source: "onLoadedData: anAnnouncement\x0a\x0a\x09self updateData.\x0a\x09self updateContents.",
messageSends: ["updateData", "updateContents"],
referencedClasses: []
}),
globals.SlLoadList);

smalltalk.addMethod(
smalltalk.method({
selector: "registerEvents",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.SlLoadList.superclass.fn.prototype._registerEvents.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"registerEvents",{},globals.SlLoadList)})},
args: [],
source: "registerEvents\x0a\x0a\x09super registerEvents.\x0a\x09\x22self announcer\x0a\x09\x09on: SlDataLoadedAnnouncement\x0a\x09\x09send: #onLoadedData:\x0a\x09\x09to: self\x22",
messageSends: ["registerEvents"],
referencedClasses: []
}),
globals.SlLoadList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentsOn:",
protocol: 'events',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.SlLoadList.superclass.fn.prototype._renderContentsOn_.apply(_st(self), [html]);
self._onLoadedData_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},globals.SlLoadList)})},
args: ["html"],
source: "renderContentsOn: html\x0a\x0a\x09\x22REFACTOR!!!\x22\x0a\x09super renderContentsOn: html.\x0a\x09self onLoadedData: nil.",
messageSends: ["renderContentsOn:", "onLoadedData:"],
referencedClasses: []
}),
globals.SlLoadList);

smalltalk.addMethod(
smalltalk.method({
selector: "updateData",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@filteredItems"]=_st(self._data())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._id();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateData",{},globals.SlLoadList)})},
args: [],
source: "updateData\x0a\x0a\x09filteredItems := self data collect: [ :each | each id ].",
messageSends: ["collect:", "data", "id"],
referencedClasses: []
}),
globals.SlLoadList);


smalltalk.addMethod(
smalltalk.method({
selector: "css",
protocol: 'configuration',
fn: function (){
var self=this;
return ".item { background: green; }";
},
args: [],
source: "css\x0a\x0a\x09^ '.item { background: green; }'",
messageSends: [],
referencedClasses: []
}),
globals.SlLoadList.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "dataUrl",
protocol: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"dataUrl",{},globals.SlLoadList.klass)})},
args: [],
source: "dataUrl\x0a\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SlLoadList.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fogBugzUrl",
protocol: 'configuration',
fn: function (){
var self=this;
return "https://pharo.fogbugz.com/f/cases/";
},
args: [],
source: "fogBugzUrl\x0a\x0a\x09^ 'https://pharo.fogbugz.com/f/cases/'",
messageSends: [],
referencedClasses: []
}),
globals.SlLoadList.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
protocol: 'configuration',
fn: function (){
var self=this;
return ".item { background: green; }";
},
args: [],
source: "style\x0a\x0a\x09^ '.item { background: green; }'",
messageSends: [],
referencedClasses: []
}),
globals.SlLoadList.klass);


smalltalk.addClass('SlReportEventList', globals.SlLoadList, ['report'], 'ShoreLine-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (anElement,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=_st(html)._tr();
_st($1)._class_("item");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._itemSelected_(anElement);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._td();
$ctx2.sendIdx["td"]=1;
_st($3)._with_(_st(anElement)._id());
$ctx2.sendIdx["with:"]=2;
return _st(_st(html)._td())._with_(_st(anElement)._title());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anElement:anElement,html:html},globals.SlReportEventList)})},
args: ["anElement", "html"],
source: "renderItem: anElement on: html\x0a\x0a\x09html tr\x0a\x09\x09class: 'item';\x0a\x09\x09onClick: [ self itemSelected: anElement ];\x0a\x09\x09with: [\x0a\x09\x09\x09html td with: anElement id.\x0a\x09\x09\x09html td with: anElement title ].",
messageSends: ["class:", "tr", "onClick:", "itemSelected:", "with:", "td", "id", "title"],
referencedClasses: []
}),
globals.SlReportEventList);

smalltalk.addMethod(
smalltalk.method({
selector: "report",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@report"];
return $1;
},
args: [],
source: "report\x0a\x0a\x09^ report",
messageSends: [],
referencedClasses: []
}),
globals.SlReportEventList);

smalltalk.addMethod(
smalltalk.method({
selector: "report:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@report"]=anObject;
return self},
args: ["anObject"],
source: "report: anObject\x0a\x0a\x09report := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlReportEventList);


smalltalk.addMethod(
smalltalk.method({
selector: "listName",
protocol: 'configuration',
fn: function (){
var self=this;
return "Events";
},
args: [],
source: "listName\x0a\x0a\x09^ 'Events'",
messageSends: [],
referencedClasses: []
}),
globals.SlReportEventList.klass);


smalltalk.addClass('SlReportList', globals.SlLoadList, ['filterBlock'], 'ShoreLine-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "extractData:",
protocol: 'initialization',
fn: function (aJSONObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@filterBlock"];
if(($receiver = $2) == nil || $receiver == null){
$1=_st(aJSONObject)._reports();
$ctx1.sendIdx["reports"]=1;
} else {
$1=_st(_st(aJSONObject)._reports())._select_(self["@filterBlock"]);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"extractData:",{aJSONObject:aJSONObject},globals.SlReportList)})},
args: ["aJSONObject"],
source: "extractData: aJSONObject\x0a\x0a\x09^ filterBlock\x0a\x09\x09ifNil: [ aJSONObject reports ]\x0a\x09\x09ifNotNil: [ aJSONObject reports select: filterBlock ]",
messageSends: ["ifNil:ifNotNil:", "reports", "select:"],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "filterBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@filterBlock"];
return $1;
},
args: [],
source: "filterBlock\x0a\x0a\x09^ filterBlock",
messageSends: [],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "filterBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@filterBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "filterBlock: aBlock\x0a\x0a\x09filterBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "filterEvent:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._filterBlock_(_st(anAnnouncement)._sortBlock());
self._updateContents();
return self}, function($ctx1) {$ctx1.fill(self,"filterEvent:",{anAnnouncement:anAnnouncement},globals.SlReportList)})},
args: ["anAnnouncement"],
source: "filterEvent: anAnnouncement\x0a\x0a\x09self filterBlock: anAnnouncement sortBlock.\x0a\x09self updateContents.",
messageSends: ["filterBlock:", "sortBlock", "updateContents"],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "itemSelected:",
protocol: 'events',
fn: function (aReport){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._location_("#!/report/".__comma(_st(aReport)._id()));
return self}, function($ctx1) {$ctx1.fill(self,"itemSelected:",{aReport:aReport},globals.SlReportList)})},
args: ["aReport"],
source: "itemSelected: aReport\x0a\x0a\x09\x22self announce: (SlDetailsPageAnnouncement withReport: aReport).\x22\x0a\x09\x0a\x09window location: '#!/report/', aReport id",
messageSends: ["location:", ",", "id"],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "projectSelectedEvent:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(anAnnouncement)._showAll();
if(smalltalk.assert($1)){
self._updateData();
};
$2=_st(anAnnouncement)._hideAll();
if(smalltalk.assert($2)){
_st(self["@filteredItems"])._removeAll();
};
$3=_st(anAnnouncement)._project();
$ctx1.sendIdx["project"]=1;
if(($receiver = $3) == nil || $receiver == null){
$3;
} else {
self._reportsForProject_visible_(_st(anAnnouncement)._project(),false);
};
self._updateContents();
return self}, function($ctx1) {$ctx1.fill(self,"projectSelectedEvent:",{anAnnouncement:anAnnouncement},globals.SlReportList)})},
args: ["anAnnouncement"],
source: "projectSelectedEvent: anAnnouncement\x0a\x0a\x09anAnnouncement showAll ifTrue: [ self updateData ].\x0a\x09anAnnouncement hideAll ifTrue: [ filteredItems removeAll ].\x0a\x09anAnnouncement project ifNotNil: [ self reportsForProject: anAnnouncement project visible: false ].\x0a\x0a\x09self updateContents.",
messageSends: ["ifTrue:", "showAll", "updateData", "hideAll", "removeAll", "ifNotNil:", "project", "reportsForProject:visible:", "updateContents"],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "registerEvents",
protocol: 'events',
fn: function (){
var self=this;
function $SlProjectSelectedAnnouncement(){return globals.SlProjectSelectedAnnouncement||(typeof SlProjectSelectedAnnouncement=="undefined"?nil:SlProjectSelectedAnnouncement)}
function $SlReportSortedAnnouncement(){return globals.SlReportSortedAnnouncement||(typeof SlReportSortedAnnouncement=="undefined"?nil:SlReportSortedAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1;
globals.SlReportList.superclass.fn.prototype._registerEvents.apply(_st(self), []);
$1=self._announcer();
$ctx1.sendIdx["announcer"]=1;
_st($1)._on_send_to_($SlProjectSelectedAnnouncement(),"projectSelectedEvent:",self);
$ctx1.sendIdx["on:send:to:"]=1;
_st(self._announcer())._on_send_to_($SlReportSortedAnnouncement(),"sortEvent:",self);
return self}, function($ctx1) {$ctx1.fill(self,"registerEvents",{},globals.SlReportList)})},
args: [],
source: "registerEvents\x0a\x0a\x09super registerEvents.\x0a\x0a\x09self announcer\x0a\x09\x09on: SlProjectSelectedAnnouncement\x0a\x09\x09send: #projectSelectedEvent:\x0a\x09\x09to: self.\x0a\x09\x0a\x09self announcer\x0a\x09\x09on: SlReportSortedAnnouncement\x0a\x09\x09send: #sortEvent:\x0a\x09\x09to: self.",
messageSends: ["registerEvents", "on:send:to:", "announcer"],
referencedClasses: ["SlProjectSelectedAnnouncement", "SlReportSortedAnnouncement"]
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCanvasOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$5,$3,$1;
$2=_st(html)._div();
_st($2)._class_("report-bar");
_st($2)._style_("border: 1px solid;");
$ctx1.sendIdx["style:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._tag_("svg");
_st($4)._at_put_("width",(100));
$ctx2.sendIdx["at:put:"]=1;
_st($4)._at_put_("height",(35));
$5=_st($4)._style_("border: 1px solid;");
return $5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"renderCanvasOn:",{html:html},globals.SlReportList)})},
args: ["html"],
source: "renderCanvasOn: html\x0a\x0a\x09^ html div\x0a\x09\x09class: 'report-bar';\x0a\x09\x09style: \x22'position: absolute; ',\x22 'border: 1px solid;';\x0a\x09\x09with: [\x0a\x09\x09\x09(html tag: 'svg')\x0a\x09\x09\x09\x09at: 'width' put: 100;\x0a\x09\x09\x09\x09at: 'height' put: 35;\x0a\x09\x09\x09\x09style: \x22'position: absolute; ',\x22 'border: 1px solid;' ]",
messageSends: ["class:", "div", "style:", "with:", "at:put:", "tag:"],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("controls pull-right");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx3) {
self._renderResizeOn_(html);
return self._renderZoomControlsOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderHeadControlsOn:",{html:html},globals.SlReportList)})},
args: ["html"],
source: "renderHeadControlsOn: html\x0a\x0a\x22\x09html div\x0a\x09\x09class: 'navbar navbar-default';\x0a\x09\x09with: [\x0a\x09\x09\x09super renderControlsOn: html.\x0a\x22\x09\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'controls pull-right';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09\x22class: 'pull-right';\x22\x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09self renderResizeOn: html.\x0a\x09\x09\x09\x09\x09\x09\x09self renderZoomControlsOn: html ] ] \x22]\x22",
messageSends: ["class:", "div", "with:", "renderResizeOn:", "renderZoomControlsOn:"],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (aReport,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._tr();
_st($1)._class_("item");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._itemSelected_(aReport);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderReportData_on_(aReport,html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{aReport:aReport,html:html},globals.SlReportList)})},
args: ["aReport", "html"],
source: "renderItem: aReport on: html\x0a\x0a\x09html tr\x0a\x09\x09class: 'item';\x0a\x09\x09onClick: [ self itemSelected: aReport ];\x0a\x09\x09with: [\x0a\x09\x09\x09\x22self renderReportVisualization: aReport on: html.\x22\x0a\x09\x09\x09self renderReportData: aReport on: html ]",
messageSends: ["class:", "tr", "onClick:", "itemSelected:", "with:", "renderReportData:on:"],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderList:on:",
protocol: 'rendering',
fn: function (aCollection,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._table();
_st($1)._class_("table table-hover");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderTableHeaderOn_(html);
return _st(_st(html)._tbody())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderItems_on_(aCollection,html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderList:on:",{aCollection:aCollection,html:html},globals.SlReportList)})},
args: ["aCollection", "html"],
source: "renderList: aCollection on: html\x0a\x09\x0a\x09html table\x0a\x09\x09class: 'table table-hover';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderTableHeaderOn: html.\x0a\x09\x09\x09html tbody with: [ self renderItems: aCollection on: html ] ].",
messageSends: ["class:", "table", "with:", "renderTableHeaderOn:", "tbody", "renderItems:on:"],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderReportData:on:",
protocol: 'rendering',
fn: function (aReport,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4;
$1=_st(html)._td();
$ctx1.sendIdx["td"]=1;
_st($1)._with_(_st(aReport)._id());
$ctx1.sendIdx["with:"]=1;
$2=_st(html)._td();
$ctx1.sendIdx["td"]=2;
_st($2)._with_(_st(aReport)._title());
$ctx1.sendIdx["with:"]=2;
$3=_st(html)._td();
$ctx1.sendIdx["td"]=3;
_st($3)._style_("white-space: nowrap");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(html)._tag_("small");
$ctx2.sendIdx["tag:"]=1;
return _st($5)._with_(_st(_st(aReport)._lastActivity())._asDateString());
$ctx2.sendIdx["with:"]=4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=3;
_st(_st(html)._td())._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._tag_("small"))._with_(_st(aReport)._numberOfEvents());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=5;
return self}, function($ctx1) {$ctx1.fill(self,"renderReportData:on:",{aReport:aReport,html:html},globals.SlReportList)})},
args: ["aReport", "html"],
source: "renderReportData: aReport on: html\x0a\x0a\x09html td with: aReport id.\x0a\x09html td with: aReport title.\x0a\x09html td\x0a\x09\x09style: 'white-space: nowrap';\x0a\x09\x09with: [ (html tag: 'small') with: aReport lastActivity asDateString ].\x0a\x09html td with: [ (html tag: 'small') with: aReport numberOfEvents ].",
messageSends: ["with:", "td", "id", "title", "style:", "tag:", "asDateString", "lastActivity", "numberOfEvents"],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderReportVisualization:on:",
protocol: 'rendering',
fn: function (aReport,html){
var self=this;
function $SlReportVisualization(){return globals.SlReportVisualization||(typeof SlReportVisualization=="undefined"?nil:SlReportVisualization)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._span();
_st($1)._style_("position: absolute; margin-top: 20px;");
$2=_st($1)._with_(_st(_st($SlReportVisualization())._onReport_(aReport))._width_(_st(self._width()).__star((0.97))));
return self}, function($ctx1) {$ctx1.fill(self,"renderReportVisualization:on:",{aReport:aReport,html:html},globals.SlReportList)})},
args: ["aReport", "html"],
source: "renderReportVisualization: aReport on: html\x0a\x0a\x09html span\x0a\x09\x09style: 'position: absolute; margin-top: 20px;';\x0a\x09\x09with: ((SlReportVisualization onReport: aReport) width: self width * 0.97).",
messageSends: ["style:", "span", "with:", "width:", "onReport:", "*", "width"],
referencedClasses: ["SlReportVisualization"]
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderResizeOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._class_("btn btn-default btn-sm");
$ctx1.sendIdx["class:"]=1;
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._resizeWidth();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._span())._class_("glyphicon glyphicon-align-right");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderResizeOn:",{html:html},globals.SlReportList)})},
args: ["html"],
source: "renderResizeOn: html\x0a\x09\x0a\x09\x0a\x09html button\x0a\x09\x09class: 'btn btn-default btn-sm';\x0a\x09\x09onClick: [ self resizeWidth ];\x0a\x09\x09with: [ html span class: 'glyphicon glyphicon-align-right' \x22align-justify\x22 ].",
messageSends: ["class:", "button", "onClick:", "resizeWidth", "with:", "span"],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTableHeaderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._th();
$ctx2.sendIdx["th"]=1;
_st($1)._with_("Id");
$ctx2.sendIdx["with:"]=2;
$2=_st(html)._th();
$ctx2.sendIdx["th"]=2;
_st($2)._with_("Title");
$ctx2.sendIdx["with:"]=3;
$3=_st(html)._th();
$ctx2.sendIdx["th"]=3;
_st($3)._with_("Last Activity");
$ctx2.sendIdx["with:"]=4;
return _st(_st(html)._th())._with_("Events");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderTableHeaderOn:",{html:html},globals.SlReportList)})},
args: ["html"],
source: "renderTableHeaderOn: html\x0a\x0a\x09html tr with: [\x0a\x09\x09html th with: 'Id'.\x0a\x09\x09html th with: 'Title'.\x0a\x09\x09html th with: 'Last Activity'.\x0a\x09\x09html th with: 'Events'.]",
messageSends: ["with:", "tr", "th"],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderZoomControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$4,$6,$7,$2;
$1=_st(html)._div();
_st($1)._class_("btn-group btn-group-sm");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
$ctx2.sendIdx["button"]=1;
_st($3)._class_("btn btn-default");
$ctx2.sendIdx["class:"]=2;
_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._zoomIn();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["onClick:"]=1;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._span();
$ctx3.sendIdx["span"]=1;
return _st($5)._class_("glyphicon glyphicon-plus");
$ctx3.sendIdx["class:"]=3;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=2;
$4;
$6=_st(html)._button();
_st($6)._class_("btn btn-default");
$ctx2.sendIdx["class:"]=4;
_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._zoomOut();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$7=_st($6)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._span())._class_("glyphicon glyphicon-minus");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
return $7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderZoomControlsOn:",{html:html},globals.SlReportList)})},
args: ["html"],
source: "renderZoomControlsOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'btn-group btn-group-sm';\x0a\x09\x09with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09onClick: [ self zoomIn ];\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html span\x0a\x09\x09\x09\x09class: 'glyphicon glyphicon-plus' ].\x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09onClick: [ self zoomOut ];\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html span\x0a\x09\x09\x09\x09\x09class: 'glyphicon glyphicon-minus' ] ]",
messageSends: ["class:", "div", "with:", "button", "onClick:", "zoomIn", "span", "zoomOut"],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "reportsForProject:visible:",
protocol: 'actions',
fn: function (aProject,aBoolean){
var self=this;
var reportsInProject;
return smalltalk.withContext(function($ctx1) { 
reportsInProject=_st(_st(aProject)._reports())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._id();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
if(smalltalk.assert(aBoolean)){
_st(self["@filteredItems"])._addAll_(reportsInProject);
} else {
_st(reportsInProject)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self["@filteredItems"])._remove_ifAbsent_(each,(function(){
}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"reportsForProject:visible:",{aProject:aProject,aBoolean:aBoolean,reportsInProject:reportsInProject},globals.SlReportList)})},
args: ["aProject", "aBoolean"],
source: "reportsForProject: aProject visible: aBoolean\x0a\x09| reportsInProject |\x0a\x09\x0a\x09reportsInProject := aProject reports collect: [ :each | each id ].\x0a\x0a\x09aBoolean\x0a\x09\x09ifTrue: [ filteredItems addAll: reportsInProject ]\x0a\x09\x09ifFalse: [ reportsInProject do: [ :each | filteredItems remove: each ifAbsent: [] ] ].",
messageSends: ["collect:", "reports", "id", "ifTrue:ifFalse:", "addAll:", "do:", "remove:ifAbsent:"],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "sortEvent:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._sortBlock_(_st(anAnnouncement)._sortBlock());
self._updateContents();
return self}, function($ctx1) {$ctx1.fill(self,"sortEvent:",{anAnnouncement:anAnnouncement},globals.SlReportList)})},
args: ["anAnnouncement"],
source: "sortEvent: anAnnouncement\x0a\x0a\x09self sortBlock: anAnnouncement sortBlock.\x0a\x09self updateContents.",
messageSends: ["sortBlock:", "sortBlock", "updateContents"],
referencedClasses: []
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "zoomIn",
protocol: 'actions',
fn: function (){
var self=this;
function $SlVisualizationZoomAnnouncement(){return globals.SlVisualizationZoomAnnouncement||(typeof SlVisualizationZoomAnnouncement=="undefined"?nil:SlVisualizationZoomAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
self._announce_(_st($SlVisualizationZoomAnnouncement())._zoomInOn_("SlReportVisualization"));
return self}, function($ctx1) {$ctx1.fill(self,"zoomIn",{},globals.SlReportList)})},
args: [],
source: "zoomIn\x0a\x0a\x09self announce: (SlVisualizationZoomAnnouncement zoomInOn: #SlReportVisualization)",
messageSends: ["announce:", "zoomInOn:"],
referencedClasses: ["SlVisualizationZoomAnnouncement"]
}),
globals.SlReportList);

smalltalk.addMethod(
smalltalk.method({
selector: "zoomOut",
protocol: 'actions',
fn: function (){
var self=this;
function $SlVisualizationZoomAnnouncement(){return globals.SlVisualizationZoomAnnouncement||(typeof SlVisualizationZoomAnnouncement=="undefined"?nil:SlVisualizationZoomAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
self._announce_(_st($SlVisualizationZoomAnnouncement())._zoomOutOn_("SlReportVisualization"));
return self}, function($ctx1) {$ctx1.fill(self,"zoomOut",{},globals.SlReportList)})},
args: [],
source: "zoomOut\x0a\x0a\x09self announce: (SlVisualizationZoomAnnouncement zoomOutOn: #SlReportVisualization)",
messageSends: ["announce:", "zoomOutOn:"],
referencedClasses: ["SlVisualizationZoomAnnouncement"]
}),
globals.SlReportList);


smalltalk.addMethod(
smalltalk.method({
selector: "listName",
protocol: 'configuration',
fn: function (){
var self=this;
return "Reports";
},
args: [],
source: "listName\x0a\x0a\x09^ 'Reports'",
messageSends: [],
referencedClasses: []
}),
globals.SlReportList.klass);


smalltalk.addClass('SlSelectList', globals.SlLoadList, ['selected'], 'ShoreLine-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
globals.SlSelectList.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@selected"]=_st($Set())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SlSelectList)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09selected := Set new.",
messageSends: ["initialize", "new"],
referencedClasses: ["Set"]
}),
globals.SlSelectList);

smalltalk.addMethod(
smalltalk.method({
selector: "itemSelected:",
protocol: 'events',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._select_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"itemSelected:",{anElement:anElement},globals.SlSelectList)})},
args: ["anElement"],
source: "itemSelected: anElement\x0a\x0a\x09self select: anElement",
messageSends: ["select:"],
referencedClasses: []
}),
globals.SlSelectList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (anElement,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._a();
_st($1)._class_("list-group-item".__comma(self._selecedItemClass()));
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._itemSelected_(anElement);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._with_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anElement:anElement,html:html},globals.SlSelectList)})},
args: ["anElement", "html"],
source: "renderItem: anElement on: html\x0a\x0a\x09html a\x0a\x09\x09class: 'list-group-item', self selecedItemClass;\x0a\x09\x09onClick: [ self itemSelected: anElement ];\x0a\x09\x09with: anElement.",
messageSends: ["class:", "a", ",", "selecedItemClass", "onClick:", "itemSelected:", "with:"],
referencedClasses: []
}),
globals.SlSelectList);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
protocol: 'actions',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@selected"])._add_(_st(anElement)._id());
return self}, function($ctx1) {$ctx1.fill(self,"select:",{anElement:anElement},globals.SlSelectList)})},
args: ["anElement"],
source: "select: anElement\x0a\x0a\x09selected add: anElement id",
messageSends: ["add:", "id"],
referencedClasses: []
}),
globals.SlSelectList);

smalltalk.addMethod(
smalltalk.method({
selector: "selectAll",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "selectAll",
messageSends: [],
referencedClasses: []
}),
globals.SlSelectList);

smalltalk.addMethod(
smalltalk.method({
selector: "selected",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selected"];
return $1;
},
args: [],
source: "selected\x0a\x0a\x09^ selected",
messageSends: [],
referencedClasses: []
}),
globals.SlSelectList);

smalltalk.addMethod(
smalltalk.method({
selector: "selected:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@selected"]=anObject;
return self},
args: ["anObject"],
source: "selected: anObject\x0a\x0a\x09selected := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlSelectList);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItemClass:",
protocol: 'style',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@selected"])._includes_(anElement);
if(smalltalk.assert($2)){
$1="selected-project";
} else {
$1="";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItemClass:",{anElement:anElement},globals.SlSelectList)})},
args: ["anElement"],
source: "selectedItemClass: anElement\x0a\x0a\x09^ (selected includes: anElement)\x0a\x09\x09ifTrue: [ 'selected-project' ]\x0a\x09\x09ifFalse: [ '' ]",
messageSends: ["ifTrue:ifFalse:", "includes:"],
referencedClasses: []
}),
globals.SlSelectList);

smalltalk.addMethod(
smalltalk.method({
selector: "unselectAll",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "unselectAll\x0a\x0a\x09\x22selected removeAll\x22",
messageSends: [],
referencedClasses: []
}),
globals.SlSelectList);



smalltalk.addClass('SlProjectList', globals.SlSelectList, [], 'ShoreLine-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "extractData:",
protocol: 'actions',
fn: function (aJSONObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aJSONObject)._projects();
return $1;
}, function($ctx1) {$ctx1.fill(self,"extractData:",{aJSONObject:aJSONObject},globals.SlProjectList)})},
args: ["aJSONObject"],
source: "extractData: aJSONObject\x0a\x0a\x09^ aJSONObject projects",
messageSends: ["projects"],
referencedClasses: []
}),
globals.SlProjectList);

smalltalk.addMethod(
smalltalk.method({
selector: "hideAllEvent",
protocol: 'events',
fn: function (){
var self=this;
function $SlProjectSelectedAnnouncement(){return globals.SlProjectSelectedAnnouncement||(typeof SlProjectSelectedAnnouncement=="undefined"?nil:SlProjectSelectedAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
self._announce_(_st($SlProjectSelectedAnnouncement())._hideAll());
self._selectAll();
return self}, function($ctx1) {$ctx1.fill(self,"hideAllEvent",{},globals.SlProjectList)})},
args: [],
source: "hideAllEvent\x0a\x0a\x09self announce: (SlProjectSelectedAnnouncement hideAll).\x0a\x09self selectAll",
messageSends: ["announce:", "hideAll", "selectAll"],
referencedClasses: ["SlProjectSelectedAnnouncement"]
}),
globals.SlProjectList);

smalltalk.addMethod(
smalltalk.method({
selector: "itemSelected:",
protocol: 'events',
fn: function (anElement){
var self=this;
function $SlProjectSelectedAnnouncement(){return globals.SlProjectSelectedAnnouncement||(typeof SlProjectSelectedAnnouncement=="undefined"?nil:SlProjectSelectedAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
globals.SlProjectList.superclass.fn.prototype._itemSelected_.apply(_st(self), [anElement]);
self._announce_(_st($SlProjectSelectedAnnouncement())._withProject_(anElement));
return self}, function($ctx1) {$ctx1.fill(self,"itemSelected:",{anElement:anElement},globals.SlProjectList)})},
args: ["anElement"],
source: "itemSelected: anElement\x0a\x0a\x09super itemSelected: anElement.\x0a\x09self announce: (SlProjectSelectedAnnouncement withProject: anElement)",
messageSends: ["itemSelected:", "announce:", "withProject:"],
referencedClasses: ["SlProjectSelectedAnnouncement"]
}),
globals.SlProjectList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_("btn-group btn-group-justified");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
$ctx2.sendIdx["a"]=1;
_st($3)._class_("btn btn-default btn-block");
$ctx2.sendIdx["class:"]=2;
_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showAllEvent();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["onClick:"]=1;
$4=_st($3)._with_("Show all");
$ctx2.sendIdx["with:"]=2;
$4;
$5=_st(html)._a();
_st($5)._class_("btn btn-default btn-block");
_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._hideAllEvent();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$6=_st($5)._with_("Hide all");
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderControlsOn:",{html:html},globals.SlProjectList)})},
args: ["html"],
source: "renderControlsOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'btn-group btn-group-justified';\x0a\x09\x09with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09class: 'btn btn-default btn-block';\x0a\x09\x09\x09\x09onClick: [ self showAllEvent ];\x0a\x09\x09\x09\x09with: 'Show all'.\x0a\x09\x09\x09\x09\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09class: 'btn btn-default btn-block';\x0a\x09\x09\x09\x09onClick: [ self hideAllEvent ];\x0a\x09\x09\x09\x09with: 'Hide all'. ]",
messageSends: ["class:", "div", "with:", "a", "onClick:", "showAllEvent", "hideAllEvent"],
referencedClasses: []
}),
globals.SlProjectList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (anElement,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._a();
_st($1)._class_("list-group-item");
$ctx1.sendIdx["class:"]=1;
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._itemSelected_(anElement);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._span();
_st($3)._class_("badge");
$4=_st($3)._with_(_st(anElement)._numberOfReports());
$4;
return _st(html)._span_(_st(anElement)._title());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anElement:anElement,html:html},globals.SlProjectList)})},
args: ["anElement", "html"],
source: "renderItem: anElement on: html\x0a\x0a\x22\x09super\x0a\x09\x09renderItem: [\x0a\x09\x09\x09html span class: 'badge'; with: anElement numberOfReports.\x0a\x09\x09\x09html span: anElement title. ]\x0a\x09\x09on: html.\x0a\x22\x09\x09\x0a\x09html a\x0a\x09\x09class: 'list-group-item';\x0a\x09\x09onClick: [ self itemSelected: anElement ];\x0a\x09\x09with: [\x0a\x09\x09\x09html span class: 'badge'; with: anElement numberOfReports.\x0a\x09\x09\x09html span: anElement title. ].",
messageSends: ["class:", "a", "onClick:", "itemSelected:", "with:", "span", "numberOfReports", "span:", "title"],
referencedClasses: []
}),
globals.SlProjectList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderList:on:",
protocol: 'rendering',
fn: function (aCollection,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("list-group");
_st($1)._style_("margin: 0px");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderItems_on_(aCollection,html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderList:on:",{aCollection:aCollection,html:html},globals.SlProjectList)})},
args: ["aCollection", "html"],
source: "renderList: aCollection on: html\x0a\x0a\x09html div\x0a\x09\x09class: 'list-group';\x0a\x09\x09style: 'margin: 0px';\x0a\x09\x09with: [ self renderItems: aCollection on: html ]",
messageSends: ["class:", "div", "style:", "with:", "renderItems:on:"],
referencedClasses: []
}),
globals.SlProjectList);

smalltalk.addMethod(
smalltalk.method({
selector: "showAllEvent",
protocol: 'events',
fn: function (){
var self=this;
function $SlProjectSelectedAnnouncement(){return globals.SlProjectSelectedAnnouncement||(typeof SlProjectSelectedAnnouncement=="undefined"?nil:SlProjectSelectedAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
self._announce_(_st($SlProjectSelectedAnnouncement())._showAll());
self._unselectAll();
return self}, function($ctx1) {$ctx1.fill(self,"showAllEvent",{},globals.SlProjectList)})},
args: [],
source: "showAllEvent\x0a\x0a\x09self announce: (SlProjectSelectedAnnouncement showAll).\x0a\x09self unselectAll",
messageSends: ["announce:", "showAll", "unselectAll"],
referencedClasses: ["SlProjectSelectedAnnouncement"]
}),
globals.SlProjectList);


smalltalk.addMethod(
smalltalk.method({
selector: "listName",
protocol: 'configuration',
fn: function (){
var self=this;
return "Projects";
},
args: [],
source: "listName\x0a\x0a\x09^ 'Projects'",
messageSends: [],
referencedClasses: []
}),
globals.SlProjectList.klass);


smalltalk.addClass('SlStaticList', globals.SlList, [], 'ShoreLine-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._defaultFilters();
return $1;
}, function($ctx1) {$ctx1.fill(self,"data",{},smalltalk.SlStaticList)})},
args: [],
source: "data\x0a\x0a\x09^ self class defaultFilters",
messageSends: ["defaultFilters", "class"],
referencedClasses: []
}),
globals.SlStaticList);

smalltalk.addMethod(
smalltalk.method({
selector: "filteredItemsFrom:",
protocol: 'filtering',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return aCollection;
}, function($ctx1) {$ctx1.fill(self,"filteredItemsFrom:",{aCollection:aCollection},smalltalk.SlStaticList)})},
args: ["aCollection"],
source: "filteredItemsFrom: aCollection\x0a\x0a\x09\x22not filtering for now\x22\x0a\x09^ aCollection",
messageSends: [],
referencedClasses: []
}),
globals.SlStaticList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SlStaticList.superclass.fn.prototype._renderContentsOn_.apply(_st(self), [html]);
self._updateContents();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},smalltalk.SlStaticList)})},
args: ["html"],
source: "renderContentsOn: html\x0a\x09\x0a\x09super renderContentsOn: html.\x09\x0a\x09self updateContents",
messageSends: ["renderContentsOn:", "updateContents"],
referencedClasses: []
}),
globals.SlStaticList);



smalltalk.addClass('SlFilterList', globals.SlStaticList, ['filters', 'selected', 'configure'], 'ShoreLine-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "configureEvent",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._alert_("configure filter");
return self}, function($ctx1) {$ctx1.fill(self,"configureEvent",{},smalltalk.SlFilterList)})},
args: [],
source: "configureEvent\x0a\x0a\x09window alert: 'configure filter'",
messageSends: ["alert:"],
referencedClasses: []
}),
globals.SlFilterList);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:",
protocol: 'block generation',
fn: function (aString){
var self=this;
var compiler;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
compiler=_st($Compiler())._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(compiler)._parseExpression_(aString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
$1=self._alert_(_st(ex)._messageText());
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)})}));
$2=_st(compiler)._evaluateExpression_(aString);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,compiler:compiler},smalltalk.SlFilterList)})},
args: ["aString"],
source: "eval: aString\x0a\x09| compiler |\x0a\x09\x0a\x09compiler := Compiler new.\x0a\x09[ compiler parseExpression: aString ] on: Error do: [ :ex | ^ self alert: ex messageText ].\x0a\x09^ compiler evaluateExpression: aString",
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "evaluateExpression:"],
referencedClasses: ["Compiler", "Error"]
}),
globals.SlFilterList);

smalltalk.addMethod(
smalltalk.method({
selector: "evalStringAsBlock:",
protocol: 'block generation',
fn: function (aString){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$2,$1;
$3=_st(_st($String())._new())._writeStream();
_st($3)._nextPutAll_("[ ");
$ctx1.sendIdx["nextPutAll:"]=1;
_st($3)._nextPutAll_(aString);
$ctx1.sendIdx["nextPutAll:"]=2;
_st($3)._nextPutAll_(" ]");
$4=_st($3)._contents();
$2=$4;
$1=self._eval_($2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"evalStringAsBlock:",{aString:aString},smalltalk.SlFilterList)})},
args: ["aString"],
source: "evalStringAsBlock: aString\x0a\x0a\x09^ self eval: (String new writeStream\x0a\x09\x09nextPutAll: '[ ';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: ' ]';\x0a\x09\x09contents)",
messageSends: ["eval:", "nextPutAll:", "writeStream", "new", "contents"],
referencedClasses: ["String"]
}),
globals.SlFilterList);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SlFilterList.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@configure"]=true;
self["@filters"]=_st(self._class())._defaultFilters();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SlFilterList)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09configure := true.\x0a\x09filters := self class defaultFilters.",
messageSends: ["initialize", "defaultFilters", "class"],
referencedClasses: []
}),
globals.SlFilterList);

smalltalk.addMethod(
smalltalk.method({
selector: "itemSelected:",
protocol: 'events',
fn: function (anElement){
var self=this;
function $SlReportFilteredAnnouncement(){return smalltalk.SlReportFilteredAnnouncement||(typeof SlReportFilteredAnnouncement=="undefined"?nil:SlReportFilteredAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
self._announce_(_st($SlReportFilteredAnnouncement())._withBlock_(self._evalStringAsBlock_(_st(anElement)._value())));
return self}, function($ctx1) {$ctx1.fill(self,"itemSelected:",{anElement:anElement},smalltalk.SlFilterList)})},
args: ["anElement"],
source: "itemSelected: anElement\x0a\x0a\x22\x09selected = anElement key\x0a\x09\x09ifTrue: [ reverse := reverse not ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09reverse := false.\x0a\x09\x09\x09selected := anElement key ].\x0a\x22\x09\x09\x09\x0a\x09self announce: (SlReportFilteredAnnouncement withBlock: (self evalStringAsBlock: anElement value)).\x0a\x09\x22self updateContents.\x22",
messageSends: ["announce:", "withBlock:", "evalStringAsBlock:", "value"],
referencedClasses: ["SlReportFilteredAnnouncement"]
}),
globals.SlFilterList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderConfigureOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var element;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._span();
_st($1)._id_("banana");
_st($1)._class_("glyphicon glyphicon-cog");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._configureEvent();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
element=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderConfigureOn:",{html:html,element:element},smalltalk.SlFilterList)})},
args: ["html"],
source: "renderConfigureOn: html\x0a\x09| element |\x0a\x09\x0a\x09element := html span\x0a\x09\x09id: 'banana';\x0a\x09\x09class: 'glyphicon glyphicon-cog';\x0a\x09\x09onClick: [ self configureEvent ].\x0a\x09\x0a\x09\x22element asJQuery tooltip.\x22\x0a\x09\x22element element asJQuery tooltip.\x22",
messageSends: ["id:", "span", "class:", "onClick:", "configureEvent"],
referencedClasses: []
}),
globals.SlFilterList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (anElement,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=_st(html)._a();
_st($1)._class_("list-group-item");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._itemSelected_(anElement);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._span_(_st(anElement)._key());
$3=self["@configure"];
if(smalltalk.assert($3)){
return self._renderConfigureOn_(html);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anElement:anElement,html:html},smalltalk.SlFilterList)})},
args: ["anElement", "html"],
source: "renderItem: anElement on: html\x0a\x0a\x09html a\x0a\x09\x09class: 'list-group-item';\x0a\x09\x09onClick: [ self itemSelected: anElement ];\x0a\x09\x09with: [\x0a\x09\x09\x09html span: anElement key.\x0a\x09\x09\x09configure ifTrue: [ self renderConfigureOn: html ].\x0a\x0a\x09\x09\x09\x22selected = anElement key ifTrue: [ self renderArrowOn: html ]\x22 ].",
messageSends: ["class:", "a", "onClick:", "itemSelected:", "with:", "span:", "key", "ifTrue:", "renderConfigureOn:"],
referencedClasses: []
}),
globals.SlFilterList);

smalltalk.addMethod(
smalltalk.method({
selector: "selected",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selected"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selected",{},smalltalk.SlFilterList)})},
args: [],
source: "selected\x0a\x0a\x09^ selected",
messageSends: [],
referencedClasses: []
}),
globals.SlFilterList);

smalltalk.addMethod(
smalltalk.method({
selector: "selected:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selected"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"selected:",{anObject:anObject},smalltalk.SlFilterList)})},
args: ["anObject"],
source: "selected: anObject\x0a\x0a\x09selected := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlFilterList);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultFilters",
protocol: 'filters',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($OrderedCollection())._new();
_st($2)._add_(self._testFilter());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFilters",{},smalltalk.SlFilterList.klass)})},
args: [],
source: "defaultFilters\x0a\x0a\x09^ OrderedCollection new\x0a\x09\x09add: self testFilter;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "testFilter", "yourself"],
referencedClasses: ["OrderedCollection"]
}),
globals.SlFilterList.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "listName",
protocol: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Controls";
}, function($ctx1) {$ctx1.fill(self,"listName",{},smalltalk.SlFilterList.klass)})},
args: [],
source: "listName\x0a\x0a\x09^ 'Controls'",
messageSends: [],
referencedClasses: []
}),
globals.SlFilterList.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "testFilter",
protocol: 'filters',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="Test Filter".__minus_gt(" :each | each project id = 5");
return $1;
}, function($ctx1) {$ctx1.fill(self,"testFilter",{},smalltalk.SlFilterList.klass)})},
args: [],
source: "testFilter\x0a\x0a\x09^ 'Test Filter' -> ' :each | each project id = 5'",
messageSends: ["->"],
referencedClasses: []
}),
globals.SlFilterList.klass);


smalltalk.addClass('SlSortList', globals.SlStaticList, ['selected', 'configure', 'reverse'], 'ShoreLine-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "blockFromString:",
protocol: 'block generation',
fn: function (aString){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$6,$5,$7,$2,$1;
$3=_st(_st($String())._new())._writeStream();
_st($3)._nextPutAll_("[ ");
$ctx1.sendIdx["nextPutAll:"]=1;
_st($3)._nextPutAll_(aString);
$4=$3;
$6=self["@reverse"];
if(smalltalk.assert($6)){
$5=" not";
} else {
$5="";
};
_st($4)._nextPutAll_nextPutAll_($5," ]");
$7=_st($3)._contents();
$2=$7;
$1=self._eval_($2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"blockFromString:",{aString:aString},smalltalk.SlSortList)})},
args: ["aString"],
source: "blockFromString: aString\x0a\x0a\x09^ self eval: (String new writeStream\x0a\x09\x09nextPutAll: '[ ';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: (reverse ifTrue: [ ' not' ] ifFalse: [ '' ])\x0a\x09\x09nextPutAll: ' ]';\x0a\x09\x09contents)",
messageSends: ["eval:", "nextPutAll:", "writeStream", "new", "nextPutAll:nextPutAll:", "ifTrue:ifFalse:", "contents"],
referencedClasses: ["String"]
}),
globals.SlSortList);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:",
protocol: 'block generation',
fn: function (aString){
var self=this;
var compiler;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
compiler=_st($Compiler())._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(compiler)._parseExpression_(aString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
$1=self._alert_(_st(ex)._messageText());
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)})}));
$2=_st(compiler)._evaluateExpression_(aString);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,compiler:compiler},smalltalk.SlSortList)})},
args: ["aString"],
source: "eval: aString\x0a\x09| compiler |\x0a\x09\x0a\x09compiler := Compiler new.\x0a\x09[ compiler parseExpression: aString ] on: Error do: [ :ex | ^ self alert: ex messageText ].\x0a\x09^ compiler evaluateExpression: aString",
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "evaluateExpression:"],
referencedClasses: ["Compiler", "Error"]
}),
globals.SlSortList);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SlSortList.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@configure"]=true;
self["@reverse"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SlSortList)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09configure := true.\x0a\x09reverse := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.SlSortList);

smalltalk.addMethod(
smalltalk.method({
selector: "itemSelected:",
protocol: 'events',
fn: function (anElement){
var self=this;
function $SlReportSortedAnnouncement(){return smalltalk.SlReportSortedAnnouncement||(typeof SlReportSortedAnnouncement=="undefined"?nil:SlReportSortedAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self["@selected"];
$3=_st(anElement)._key();
$ctx1.sendIdx["key"]=1;
$1=_st($2).__eq($3);
if(smalltalk.assert($1)){
self["@reverse"]=_st(self["@reverse"])._not();
self["@reverse"];
} else {
self["@reverse"]=false;
self["@reverse"];
self["@selected"]=_st(anElement)._key();
self["@selected"];
};
self._announce_(_st($SlReportSortedAnnouncement())._withSortBlock_(_st(self._class())._sortByFieldString_(_st(anElement)._value())));
self._updateContents();
return self}, function($ctx1) {$ctx1.fill(self,"itemSelected:",{anElement:anElement},smalltalk.SlSortList)})},
args: ["anElement"],
source: "itemSelected: anElement\x0a\x0a\x09selected = anElement key\x0a\x09\x09ifTrue: [ reverse := reverse not ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09reverse := false.\x0a\x09\x09\x09selected := anElement key ].\x0a\x09\x09\x09\x0a\x09self announce: (SlReportSortedAnnouncement withSortBlock: (self class sortByFieldString: anElement value)).\x0a\x09self updateContents.",
messageSends: ["ifTrue:ifFalse:", "=", "key", "not", "announce:", "withSortBlock:", "sortByFieldString:", "class", "value", "updateContents"],
referencedClasses: ["SlReportSortedAnnouncement"]
}),
globals.SlSortList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderArrowOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2;
$1=_st(html)._span();
$4=self["@reverse"];
if(smalltalk.assert($4)){
$3="glyphicon glyphicon-chevron-up";
} else {
$3="glyphicon glyphicon-chevron-down";
};
$2="pull-right ".__comma($3);
_st($1)._class_($2);
return self}, function($ctx1) {$ctx1.fill(self,"renderArrowOn:",{html:html},smalltalk.SlSortList)})},
args: ["html"],
source: "renderArrowOn: html\x0a\x0a\x09html span\x0a\x09\x09class: 'pull-right ',\x0a\x09\x09\x09(reverse ifTrue: [ 'glyphicon glyphicon-chevron-up' ] ifFalse: [ 'glyphicon glyphicon-chevron-down' ])",
messageSends: ["class:", "span", ",", "ifTrue:ifFalse:"],
referencedClasses: []
}),
globals.SlSortList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderConfigureOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var element;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._span();
_st($1)._id_("banana");
_st($1)._class_("glyphicon glyphicon-cog");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
element=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderConfigureOn:",{html:html,element:element},smalltalk.SlSortList)})},
args: ["html"],
source: "renderConfigureOn: html\x0a\x09| element |\x0a\x09\x0a\x09element := html span\x0a\x09\x09id: 'banana';\x0a\x09\x09class: 'glyphicon glyphicon-cog';\x0a\x09\x09onClick: [ ].\x0a\x09\x0a\x09\x22element element asJQuery tooltip.\x22",
messageSends: ["id:", "span", "class:", "onClick:"],
referencedClasses: []
}),
globals.SlSortList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (anElement,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$2;
$1=_st(html)._a();
_st($1)._class_("list-group-item");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._itemSelected_(anElement);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=self["@configure"];
if(smalltalk.assert($3)){
self._renderConfigureOn_(html);
};
$4=_st(anElement)._key();
$ctx2.sendIdx["key"]=1;
_st(html)._span_($4);
$5=_st(self["@selected"]).__eq(_st(anElement)._key());
if(smalltalk.assert($5)){
return self._renderArrowOn_(html);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anElement:anElement,html:html},smalltalk.SlSortList)})},
args: ["anElement", "html"],
source: "renderItem: anElement on: html\x0a\x0a\x09html a\x0a\x09\x09class: 'list-group-item';\x0a\x09\x09onClick: [ self itemSelected: anElement ];\x0a\x09\x09with: [\x0a\x09\x09\x09configure ifTrue: [ self renderConfigureOn: html ].\x0a\x09\x09\x09html span: anElement key.\x0a\x09\x09\x09selected = anElement key ifTrue: [ self renderArrowOn: html ] ].",
messageSends: ["class:", "a", "onClick:", "itemSelected:", "with:", "ifTrue:", "renderConfigureOn:", "span:", "key", "=", "renderArrowOn:"],
referencedClasses: []
}),
globals.SlSortList);

smalltalk.addMethod(
smalltalk.method({
selector: "selected",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selected"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selected",{},smalltalk.SlSortList)})},
args: [],
source: "selected\x0a\x0a\x09^ selected",
messageSends: [],
referencedClasses: []
}),
globals.SlSortList);

smalltalk.addMethod(
smalltalk.method({
selector: "selected:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selected"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"selected:",{anObject:anObject},smalltalk.SlSortList)})},
args: ["anObject"],
source: "selected: anObject\x0a\x0a\x09selected := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlSortList);

smalltalk.addMethod(
smalltalk.method({
selector: "sortByFieldBlock:",
protocol: 'block generation',
fn: function (anAccessor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._blockFromString_(_st(self._class())._sortByFieldString_(anAccessor));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sortByFieldBlock:",{anAccessor:anAccessor},smalltalk.SlSortList)})},
args: ["anAccessor"],
source: "sortByFieldBlock: anAccessor\x0a\x09\x0a\x09^ self blockFromString: (self class sortByFieldString: anAccessor)",
messageSends: ["blockFromString:", "sortByFieldString:", "class"],
referencedClasses: []
}),
globals.SlSortList);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultFilters",
protocol: 'filters',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._defaultFiltersMapping())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._key()).__minus_gt(self._sortByFieldString_(_st(each)._value()));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFilters",{},smalltalk.SlSortList.klass)})},
args: [],
source: "defaultFilters\x0a\x0a\x09^ self defaultFiltersMapping collect: [ :each | each key -> (self sortByFieldString: each value) ]",
messageSends: ["collect:", "defaultFiltersMapping", "->", "key", "sortByFieldString:", "value"],
referencedClasses: []
}),
globals.SlSortList.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "listName",
protocol: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Controls";
}, function($ctx1) {$ctx1.fill(self,"listName",{},smalltalk.SlSortList.klass)})},
args: [],
source: "listName\x0a\x0a\x09^ 'Controls'",
messageSends: [],
referencedClasses: []
}),
globals.SlSortList.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sortByFieldString:",
protocol: 'filters',
fn: function (anAccessor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(":a :b | a ".__comma(anAccessor)).__comma(" < b ");
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(anAccessor);
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"sortByFieldString:",{anAccessor:anAccessor},smalltalk.SlSortList.klass)})},
args: ["anAccessor"],
source: "sortByFieldString: anAccessor\x0a\x0a\x09^ ':a :b | a ', anAccessor, ' < b ', anAccessor",
messageSends: [","],
referencedClasses: []
}),
globals.SlSortList.klass);


smalltalk.addClass('SlReportMetadata', globals.SlWidget, ['report'], 'ShoreLine-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "renderField:on:",
protocol: 'rendering',
fn: function (aSelector,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("report-metadata-".__comma(aSelector));
$2=_st($1)._with_(_st(self["@report"])._perform_(aSelector));
return self}, function($ctx1) {$ctx1.fill(self,"renderField:on:",{aSelector:aSelector,html:html},smalltalk.SlReportMetadata)})},
args: ["aSelector", "html"],
source: "renderField: aSelector on: html\x0a\x0a\x09html div\x0a\x09\x09class: 'report-metadata-', aSelector;\x0a\x09\x09with: (report perform: aSelector)",
messageSends: ["class:", "div", ",", "with:", "perform:"],
referencedClasses: []
}),
globals.SlReportMetadata);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("report-metadata");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._class())._fields())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return self._renderField_on_(each,html);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.SlReportMetadata)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'report-metadata';\x0a\x09\x09with: [\x0a\x09\x09\x09self class fields do: [ :each | self renderField: each on: html ] ].",
messageSends: ["class:", "div", "with:", "do:", "fields", "class", "renderField:on:"],
referencedClasses: []
}),
globals.SlReportMetadata);

smalltalk.addMethod(
smalltalk.method({
selector: "report",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@report"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"report",{},smalltalk.SlReportMetadata)})},
args: [],
source: "report\x0a\x0a\x09^ report",
messageSends: [],
referencedClasses: []
}),
globals.SlReportMetadata);

smalltalk.addMethod(
smalltalk.method({
selector: "report:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@report"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"report:",{anObject:anObject},smalltalk.SlReportMetadata)})},
args: ["anObject"],
source: "report: anObject\x0a\x0a\x09report := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlReportMetadata);


smalltalk.addMethod(
smalltalk.method({
selector: "fields",
protocol: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["id", "title", "status", "project"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fields",{},smalltalk.SlReportMetadata.klass)})},
args: [],
source: "fields\x0a\x0a\x09^ #( id title status project )",
messageSends: [],
referencedClasses: []
}),
globals.SlReportMetadata.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withReport:",
protocol: 'instance creation',
fn: function (aReport){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._report_(aReport);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withReport:",{aReport:aReport},smalltalk.SlReportMetadata.klass)})},
args: ["aReport"],
source: "withReport: aReport\x0a\x0a\x09^ self new\x0a\x09\x09report: aReport;\x0a\x09\x09yourself",
messageSends: ["report:", "new", "yourself"],
referencedClasses: []
}),
globals.SlReportMetadata.klass);


smalltalk.addClass('SlTabbedContainer', globals.SlContainer, [], 'ShoreLine-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.SlTabbedContainer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@contents"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SlTabbedContainer)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09contents := Dictionary new.",
messageSends: ["initialize", "new"],
referencedClasses: ["Dictionary"]
}),
globals.SlTabbedContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("tab-contents");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@contents"])._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._div();
_st($3)._class_("tab-pane");
_st($3)._id_(key);
$4=_st($3)._with_(value);
return $4;
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},smalltalk.SlTabbedContainer)})},
args: ["html"],
source: "renderContentsOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'tab-contents';\x0a\x09\x09with: [\x0a\x09\x09\x09contents keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09class: 'tab-pane';\x0a\x09\x09\x09\x09\x09id: key;\x0a\x09\x09\x09\x09\x09with: value ] ]",
messageSends: ["class:", "div", "with:", "keysAndValuesDo:", "id:"],
referencedClasses: []
}),
globals.SlTabbedContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "renderNavbarOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._ul();
_st($1)._class_("nav nav-tabs");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@contents"])._keysDo_((function(key){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$3=_st(html)._a();
_st($3)._href_("#".__comma(key));
_st($3)._onClick_(_st((function(this_,event){
return smalltalk.withContext(function($ctx5) {
_st(event)._preventDefault();
return _st(this_)._tab_("show");
}, function($ctx5) {$ctx5.fillBlock({this_:this_,event:event},$ctx4,4)})}))._currySelf());
_st($3)._at_put_("data-toggle","tab");
$4=_st($3)._with_(key);
return $4;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=2;
}, function($ctx3) {$ctx3.fillBlock({key:key},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderNavbarOn:",{html:html},smalltalk.SlTabbedContainer)})},
args: ["html"],
source: "renderNavbarOn: html\x0a\x0a\x09html ul\x0a\x09\x09class: 'nav nav-tabs';\x0a\x09\x09with: [\x0a\x09\x09\x09contents keysDo: [ :key |\x0a\x09\x09\x09\x09html li\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09href: '#', key;\x0a\x09\x09\x09\x09\x09\x09\x09onClick: [ :this :event |\x0a\x09\x09\x09\x09\x09\x09\x09\x09event preventDefault.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x22window alert: this.\x22\x0a\x09\x09\x09\x09\x09\x09\x09\x09this tab: 'show' ] currySelf;\x0a\x09\x09\x09\x09\x09\x09\x09at: 'data-toggle' put: 'tab';\x0a\x09\x09\x09\x09\x09\x09\x09with: key ] ] ]",
messageSends: ["class:", "ul", "with:", "keysDo:", "li", "href:", "a", ",", "onClick:", "currySelf", "preventDefault", "tab:", "at:put:"],
referencedClasses: []
}),
globals.SlTabbedContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderContentsOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.SlTabbedContainer)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09\x22self renderNavbarOn: html.\x22\x0a\x09self renderContentsOn: html",
messageSends: ["renderContentsOn:"],
referencedClasses: []
}),
globals.SlTabbedContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "tabNamed:",
protocol: 'tabs',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._contents())._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabNamed:",{aString:aString},smalltalk.SlTabbedContainer)})},
args: ["aString"],
source: "tabNamed: aString\x0a\x0a\x09^ self contents at: aString",
messageSends: ["at:", "contents"],
referencedClasses: []
}),
globals.SlTabbedContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "tabNamed:with:",
protocol: 'tabs',
fn: function (aString,aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._contents())._at_put_(aString,aWidget);
return self}, function($ctx1) {$ctx1.fill(self,"tabNamed:with:",{aString:aString,aWidget:aWidget},smalltalk.SlTabbedContainer)})},
args: ["aString", "aWidget"],
source: "tabNamed: aString with: aWidget\x0a\x0a\x09self contents at: aString put: aWidget",
messageSends: ["at:put:", "contents"],
referencedClasses: []
}),
globals.SlTabbedContainer);



smalltalk.addClass('SlToolbar', globals.SlWidget, ['data', 'list', 'login'], 'ShoreLine-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $MozPersonaLogin(){return smalltalk.MozPersonaLogin||(typeof MozPersonaLogin=="undefined"?nil:MozPersonaLogin)}
return smalltalk.withContext(function($ctx1) { 
self["@login"]=_st($MozPersonaLogin())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SlToolbar)})},
args: [],
source: "initialize\x0a\x0a\x09login := MozPersonaLogin new.",
messageSends: ["new"],
referencedClasses: ["MozPersonaLogin"]
}),
globals.SlToolbar);

smalltalk.addMethod(
smalltalk.method({
selector: "renderControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._ul();
_st($1)._class_("nav navbar-nav");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
var backLink;
return smalltalk.withContext(function($ctx2) {
backLink=_st(html)._li_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._a())._class_("glyphicon glyphicon-chevron-left");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
backLink;
return _st(_st(backLink)._asJQuery())._slideToggle();
}, function($ctx2) {$ctx2.fillBlock({backLink:backLink},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderControlsOn:",{html:html},smalltalk.SlToolbar)})},
args: ["html"],
source: "renderControlsOn: html\x0a\x0a\x09html ul\x0a\x09\x09class: 'nav navbar-nav';\x0a\x09\x09with: [\x0a\x09\x09\x09| backLink |\x0a\x09\x09\x09backLink := html li: [ html a class: 'glyphicon glyphicon-chevron-left' ].\x0a\x09\x09\x09backLink asJQuery slideToggle ].",
messageSends: ["class:", "ul", "with:", "li:", "a", "slideToggle", "asJQuery"],
referencedClasses: []
}),
globals.SlToolbar);

smalltalk.addMethod(
smalltalk.method({
selector: "renderDebugControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $SlHeliosPopupAnnouncement(){return globals.SlHeliosPopupAnnouncement||(typeof SlHeliosPopupAnnouncement=="undefined"?nil:SlHeliosPopupAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._class_("btn btn-default navbar-btn navbar-right");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._announce_(_st($SlHeliosPopupAnnouncement())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._with_("Helios");
return self}, function($ctx1) {$ctx1.fill(self,"renderDebugControlsOn:",{html:html},globals.SlToolbar)})},
args: ["html"],
source: "renderDebugControlsOn: html\x0a\x0a\x09html button\x0a\x09\x09class: 'btn btn-default navbar-btn navbar-right';\x0a\x09\x09onClick: [ self announce: SlHeliosPopupAnnouncement new ];\x0a\x09\x09with: 'Helios'",
messageSends: ["class:", "button", "onClick:", "announce:", "new", "with:"],
referencedClasses: ["SlHeliosPopupAnnouncement"]
}),
globals.SlToolbar);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeaderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $SlHomePageAnnouncement(){return smalltalk.SlHomePageAnnouncement||(typeof SlHomePageAnnouncement=="undefined"?nil:SlHomePageAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("navbar-header");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
_st($3)._class_("navbar-brand");
_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._announce_(_st($SlHomePageAnnouncement())._new());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderLogoOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html},smalltalk.SlToolbar)})},
args: ["html"],
source: "renderHeaderOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'navbar-header';\x0a\x09\x09with: [ html a\x0a\x09\x09\x09class: 'navbar-brand';\x0a\x09\x09\x09onClick: [ self announce: SlHomePageAnnouncement new ];\x0a\x09\x09\x09with: [ self renderLogoOn: html ] ]",
messageSends: ["class:", "div", "with:", "a", "onClick:", "announce:", "new", "renderLogoOn:"],
referencedClasses: ["SlHomePageAnnouncement"]
}),
globals.SlToolbar);

smalltalk.addMethod(
smalltalk.method({
selector: "renderLogoOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._span();
$ctx1.sendIdx["span"]=1;
_st($1)._class_("shoreline-logo");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._span();
$ctx2.sendIdx["span"]=2;
_st($3)._class_("logo-shore");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_("Shore");
$ctx2.sendIdx["with:"]=2;
$4;
$5=_st(html)._span();
_st($5)._class_("logo-line");
$6=_st($5)._with_("Line");
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderLogoOn:",{html:html},globals.SlToolbar)})},
args: ["html"],
source: "renderLogoOn: html\x0a\x09\x0a\x09\x22colors: #ffffff rgb(224, 71, 45)\x22\x0a\x09html span\x0a\x09\x09class: 'shoreline-logo';\x0a\x09\x09with: [\x0a\x09\x09\x09html span class: 'logo-shore'; with: 'Shore'.\x0a\x09\x09\x09html span class: 'logo-line'; with: 'Line' ]",
messageSends: ["class:", "span", "with:"],
referencedClasses: []
}),
globals.SlToolbar);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMenuItem:on:",
protocol: 'rendering',
fn: function (aMenuItem,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(html)._li_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._a();
_st($1)._href_("#");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._announce_(_st(_st(aMenuItem)._value())._new());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$2=_st($1)._with_(_st(aMenuItem)._key());
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderMenuItem:on:",{aMenuItem:aMenuItem,html:html},globals.SlToolbar)})},
args: ["aMenuItem", "html"],
source: "renderMenuItem: aMenuItem on: html\x0a\x0a\x09html li: [ html a\x0a\x09\x09href: '#';\x0a\x09\x09onClick: [ self announce: aMenuItem value new ];\x0a\x09\x09with: aMenuItem key ].",
messageSends: ["li:", "href:", "a", "onClick:", "announce:", "new", "value", "with:", "key"],
referencedClasses: []
}),
globals.SlToolbar);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMenuOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._ul();
_st($1)._class_("nav navbar-nav");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._class())._menuItems())._do_((function(eachItem){
return smalltalk.withContext(function($ctx3) {
return self._renderMenuItem_on_(eachItem,html);
}, function($ctx3) {$ctx3.fillBlock({eachItem:eachItem},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderMenuOn:",{html:html},globals.SlToolbar)})},
args: ["html"],
source: "renderMenuOn: html\x0a\x0a\x09html ul\x0a\x09\x09class: 'nav navbar-nav';\x0a\x09\x09with: [\x0a\x09\x09\x09self class menuItems do: [ :eachItem | self renderMenuItem: eachItem on: html ] ].",
messageSends: ["class:", "ul", "with:", "do:", "menuItems", "class", "renderMenuItem:on:"],
referencedClasses: []
}),
globals.SlToolbar);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._nav();
_st($1)._class_("navbar navbar-default navbar-fixed-top");
_st($1)._at_put_("role","navigation");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderControlsOn_(html);
self._renderHeaderOn_(html);
self._renderMenuOn_(html);
self._renderUserOn_(html);
return self._renderDebugControlsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.SlToolbar)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html nav\x0a\x09\x09class: 'navbar navbar-default navbar-fixed-top';\x0a\x09\x09at: 'role' put: 'navigation';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderControlsOn: html.\x0a\x09\x09\x09self renderHeaderOn: html.\x0a\x09\x09\x09self renderMenuOn: html.\x0a\x09\x09\x09self renderUserOn: html.\x0a\x09\x09\x09self renderDebugControlsOn: html ].",
messageSends: ["class:", "nav", "at:put:", "with:", "renderControlsOn:", "renderHeaderOn:", "renderMenuOn:", "renderUserOn:", "renderDebugControlsOn:"],
referencedClasses: []
}),
globals.SlToolbar);

smalltalk.addMethod(
smalltalk.method({
selector: "renderUserOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._ul();
_st($1)._class_("nav navbar-nav navbar-right");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(html)._li_(self["@login"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderUserOn:",{html:html},smalltalk.SlToolbar)})},
args: ["html"],
source: "renderUserOn: html\x0a\x0a\x09html ul\x0a\x09\x09class: 'nav navbar-nav navbar-right';\x0a\x09\x09with: [ html li: login ].",
messageSends: ["class:", "ul", "with:", "li:"],
referencedClasses: []
}),
globals.SlToolbar);


smalltalk.addMethod(
smalltalk.method({
selector: "menuItems",
protocol: 'items',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["Menu Items".__minus_gt(nil)];
return $1;
}, function($ctx1) {$ctx1.fill(self,"menuItems",{},globals.SlToolbar.klass)})},
args: [],
source: "menuItems\x0a\x0a\x09^ {\x0a\x09\x09\x22'Helios' -> SlHeliosPopupAnnouncement.\x22\x0a\x09\x09'Menu Items' -> nil\x0a\x09}",
messageSends: ["->"],
referencedClasses: []
}),
globals.SlToolbar.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "d3",
protocol: '*ShoreLine-Widgets',
fn: function (){
var self=this;
function $JSObjectProxy(){return smalltalk.JSObjectProxy||(typeof JSObjectProxy=="undefined"?nil:JSObjectProxy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($JSObjectProxy())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"d3",{},smalltalk.Array)})},
args: [],
source: "d3\x0a\x0a\x09^ JSObjectProxy on: self",
messageSends: ["on:"],
referencedClasses: ["JSObjectProxy"]
}),
globals.Array);

});
