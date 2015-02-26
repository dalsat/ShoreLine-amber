define("shoreline/ShoreLine-Widgets", ["amber/boot", "shoreline/ShoreLine-Widgets-Core", "shoreline/ShoreLine-Core", "shoreline/ShoreLine-Pages", "amber_core/Kernel-Collections"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('ShoreLine-Widgets');
$core.packages["ShoreLine-Widgets"].innerEval = function (expr) { return eval(expr); };
$core.packages["ShoreLine-Widgets"].transport = {"type":"amd","amdNamespace":"shoreline"};

$core.addClass('SlLoadList', $globals.SlOldList, [], 'ShoreLine-Widgets');
$core.addMethod(
$core.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._extractData_(self._repository());
return $1;
}, function($ctx1) {$ctx1.fill(self,"data",{},globals.SlLoadList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "data\x0a\x0a\x09^ self extractData: self repository",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["extractData:", "repository"]
}),
$globals.SlLoadList);

$core.addMethod(
$core.method({
selector: "extractData:",
protocol: 'actions',
fn: function (jsonData){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"extractData:",{jsonData:jsonData},globals.SlLoadList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonData"],
source: "extractData: jsonData\x0a\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SlLoadList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "filteredItemsFrom: aCollection\x0a\x0a\x09^ aCollection select: [ :eachItem | filteredItems includes: eachItem id ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "includes:", "id"]
}),
$globals.SlLoadList);

$core.addMethod(
$core.method({
selector: "onLoadedData:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._updateData();
self._updateContents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onLoadedData:",{anAnnouncement:anAnnouncement},$globals.SlLoadList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onLoadedData: anAnnouncement\x0a\x0a\x09self updateData.\x0a\x09self updateContents.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateData", "updateContents"]
}),
$globals.SlLoadList);

$core.addMethod(
$core.method({
selector: "registerEvents",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.SlLoadList.superclass.fn.prototype._registerEvents.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"registerEvents",{},globals.SlLoadList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerEvents\x0a\x0a\x09super registerEvents.\x0a\x09\x22self announcer\x0a\x09\x09on: SlDataLoadedAnnouncement\x0a\x09\x09send: #onLoadedData:\x0a\x09\x09to: self\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["registerEvents"]
}),
$globals.SlLoadList);

$core.addMethod(
$core.method({
selector: "renderContentsOn:",
protocol: 'events',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.SlLoadList.superclass.fn.prototype._renderContentsOn_.apply(_st(self), [html]);
self._onLoadedData_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},globals.SlLoadList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentsOn: html\x0a\x0a\x09\x22REFACTOR!!!\x22\x0a\x09super renderContentsOn: html.\x0a\x09self onLoadedData: nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderContentsOn:", "onLoadedData:"]
}),
$globals.SlLoadList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateData\x0a\x0a\x09filteredItems := self data collect: [ :each | each id ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "data", "id"]
}),
$globals.SlLoadList);


$core.addMethod(
$core.method({
selector: "css",
protocol: 'configuration',
fn: function (){
var self=this;
return ".item { background: green; }";
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "css\x0a\x0a\x09^ '.item { background: green; }'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlLoadList.klass);

$core.addMethod(
$core.method({
selector: "dataUrl",
protocol: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"dataUrl",{},globals.SlLoadList.klass)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataUrl\x0a\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SlLoadList.klass);

$core.addMethod(
$core.method({
selector: "fogBugzUrl",
protocol: 'configuration',
fn: function (){
var self=this;
return "https://pharo.fogbugz.com/f/cases/";
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fogBugzUrl\x0a\x0a\x09^ 'https://pharo.fogbugz.com/f/cases/'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlLoadList.klass);

$core.addMethod(
$core.method({
selector: "style",
protocol: 'configuration',
fn: function (){
var self=this;
return ".item { background: green; }";
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "style\x0a\x0a\x09^ '.item { background: green; }'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlLoadList.klass);


$core.addClass('SlReportEventList', $globals.SlLoadList, ['report'], 'ShoreLine-Widgets');
$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement", "html"],
source: "renderItem: anElement on: html\x0a\x0a\x09html tr\x0a\x09\x09class: 'item';\x0a\x09\x09onClick: [ self itemSelected: anElement ];\x0a\x09\x09with: [\x0a\x09\x09\x09html td with: anElement id.\x0a\x09\x09\x09html td with: anElement title ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "tr", "onClick:", "itemSelected:", "with:", "td", "id", "title"]
}),
$globals.SlReportEventList);

$core.addMethod(
$core.method({
selector: "report",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@report"];
return $1;
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "report\x0a\x0a\x09^ report",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportEventList);

$core.addMethod(
$core.method({
selector: "report:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@report"]=anObject;
return self},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "report: anObject\x0a\x0a\x09report := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportEventList);


$core.addMethod(
$core.method({
selector: "listName",
protocol: 'configuration',
fn: function (){
var self=this;
return "Events";
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listName\x0a\x0a\x09^ 'Events'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportEventList.klass);


$core.addClass('SlReportList', $globals.SlLoadList, ['filterBlock'], 'ShoreLine-Widgets');
$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSONObject"],
source: "extractData: aJSONObject\x0a\x0a\x09^ filterBlock\x0a\x09\x09ifNil: [ aJSONObject reports ]\x0a\x09\x09ifNotNil: [ aJSONObject reports select: filterBlock ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "reports", "select:"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
selector: "filterBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@filterBlock"];
return $1;
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "filterBlock\x0a\x0a\x09^ filterBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
selector: "filterBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@filterBlock"]=aBlock;
return self},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "filterBlock: aBlock\x0a\x0a\x09filterBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
selector: "filterEvent:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._filterBlock_(_st(anAnnouncement)._sortBlock());
self._updateContents();
return self}, function($ctx1) {$ctx1.fill(self,"filterEvent:",{anAnnouncement:anAnnouncement},globals.SlReportList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "filterEvent: anAnnouncement\x0a\x0a\x09self filterBlock: anAnnouncement sortBlock.\x0a\x09self updateContents.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["filterBlock:", "sortBlock", "updateContents"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
selector: "itemSelected:",
protocol: 'events',
fn: function (aReport){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._location_("#!/report/".__comma(_st(aReport)._id()));
return self}, function($ctx1) {$ctx1.fill(self,"itemSelected:",{aReport:aReport},globals.SlReportList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReport"],
source: "itemSelected: aReport\x0a\x0a\x09\x22self announce: (SlDetailsPageAnnouncement withReport: aReport).\x22\x0a\x09\x0a\x09window location: '#!/report/', aReport id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["location:", ",", "id"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "projectSelectedEvent: anAnnouncement\x0a\x0a\x09anAnnouncement showAll ifTrue: [ self updateData ].\x0a\x09anAnnouncement hideAll ifTrue: [ filteredItems removeAll ].\x0a\x09anAnnouncement project ifNotNil: [ self reportsForProject: anAnnouncement project visible: false ].\x0a\x0a\x09self updateContents.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "showAll", "updateData", "hideAll", "removeAll", "ifNotNil:", "project", "reportsForProject:visible:", "updateContents"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerEvents\x0a\x0a\x09super registerEvents.\x0a\x0a\x09self announcer\x0a\x09\x09on: SlProjectSelectedAnnouncement\x0a\x09\x09send: #projectSelectedEvent:\x0a\x09\x09to: self.\x0a\x09\x0a\x09self announcer\x0a\x09\x09on: SlReportSortedAnnouncement\x0a\x09\x09send: #sortEvent:\x0a\x09\x09to: self.",
referencedClasses: ["SlProjectSelectedAnnouncement", "SlReportSortedAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["registerEvents", "on:send:to:", "announcer"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderCanvasOn: html\x0a\x0a\x09^ html div\x0a\x09\x09class: 'report-bar';\x0a\x09\x09style: \x22'position: absolute; ',\x22 'border: 1px solid;';\x0a\x09\x09with: [\x0a\x09\x09\x09(html tag: 'svg')\x0a\x09\x09\x09\x09at: 'width' put: 100;\x0a\x09\x09\x09\x09at: 'height' put: 35;\x0a\x09\x09\x09\x09style: \x22'position: absolute; ',\x22 'border: 1px solid;' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "style:", "with:", "at:put:", "tag:"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderHeadControlsOn: html\x0a\x0a\x22\x09html div\x0a\x09\x09class: 'navbar navbar-default';\x0a\x09\x09with: [\x0a\x09\x09\x09super renderControlsOn: html.\x0a\x22\x09\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'controls pull-right';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09\x22class: 'pull-right';\x22\x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09self renderResizeOn: html.\x0a\x09\x09\x09\x09\x09\x09\x09self renderZoomControlsOn: html ] ] \x22]\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "renderResizeOn:", "renderZoomControlsOn:"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReport", "html"],
source: "renderItem: aReport on: html\x0a\x0a\x09html tr\x0a\x09\x09class: 'item';\x0a\x09\x09onClick: [ self itemSelected: aReport ];\x0a\x09\x09with: [\x0a\x09\x09\x09\x22self renderReportVisualization: aReport on: html.\x22\x0a\x09\x09\x09self renderReportData: aReport on: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "tr", "onClick:", "itemSelected:", "with:", "renderReportData:on:"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "html"],
source: "renderList: aCollection on: html\x0a\x09\x0a\x09html table\x0a\x09\x09class: 'table table-hover';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderTableHeaderOn: html.\x0a\x09\x09\x09html tbody with: [ self renderItems: aCollection on: html ] ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "table", "with:", "renderTableHeaderOn:", "tbody", "renderItems:on:"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReport", "html"],
source: "renderReportData: aReport on: html\x0a\x0a\x09html td with: aReport id.\x0a\x09html td with: aReport title.\x0a\x09html td\x0a\x09\x09style: 'white-space: nowrap';\x0a\x09\x09with: [ (html tag: 'small') with: aReport lastActivity asDateString ].\x0a\x09html td with: [ (html tag: 'small') with: aReport numberOfEvents ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "td", "id", "title", "style:", "tag:", "asDateString", "lastActivity", "numberOfEvents"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReport", "html"],
source: "renderReportVisualization: aReport on: html\x0a\x0a\x09html span\x0a\x09\x09style: 'position: absolute; margin-top: 20px;';\x0a\x09\x09with: ((SlReportVisualization onReport: aReport) width: self width * 0.97).",
referencedClasses: ["SlReportVisualization"],
//>>excludeEnd("ide");
messageSends: ["style:", "span", "with:", "width:", "onReport:", "*", "width"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderResizeOn: html\x0a\x09\x0a\x09\x0a\x09html button\x0a\x09\x09class: 'btn btn-default btn-sm';\x0a\x09\x09onClick: [ self resizeWidth ];\x0a\x09\x09with: [ html span class: 'glyphicon glyphicon-align-right' \x22align-justify\x22 ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "button", "onClick:", "resizeWidth", "with:", "span"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTableHeaderOn: html\x0a\x0a\x09html tr with: [\x0a\x09\x09html th with: 'Id'.\x0a\x09\x09html th with: 'Title'.\x0a\x09\x09html th with: 'Last Activity'.\x0a\x09\x09html th with: 'Events'.]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "tr", "th"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderZoomControlsOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'btn-group btn-group-sm';\x0a\x09\x09with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09onClick: [ self zoomIn ];\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html span\x0a\x09\x09\x09\x09class: 'glyphicon glyphicon-plus' ].\x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09onClick: [ self zoomOut ];\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html span\x0a\x09\x09\x09\x09\x09class: 'glyphicon glyphicon-minus' ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "button", "onClick:", "zoomIn", "span", "zoomOut"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProject", "aBoolean"],
source: "reportsForProject: aProject visible: aBoolean\x0a\x09| reportsInProject |\x0a\x09\x0a\x09reportsInProject := aProject reports collect: [ :each | each id ].\x0a\x0a\x09aBoolean\x0a\x09\x09ifTrue: [ filteredItems addAll: reportsInProject ]\x0a\x09\x09ifFalse: [ reportsInProject do: [ :each | filteredItems remove: each ifAbsent: [] ] ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "reports", "id", "ifTrue:ifFalse:", "addAll:", "do:", "remove:ifAbsent:"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
selector: "sortEvent:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._sortBlock_(_st(anAnnouncement)._sortBlock());
self._updateContents();
return self}, function($ctx1) {$ctx1.fill(self,"sortEvent:",{anAnnouncement:anAnnouncement},globals.SlReportList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "sortEvent: anAnnouncement\x0a\x0a\x09self sortBlock: anAnnouncement sortBlock.\x0a\x09self updateContents.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sortBlock:", "sortBlock", "updateContents"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
selector: "zoomIn",
protocol: 'actions',
fn: function (){
var self=this;
function $SlVisualizationZoomAnnouncement(){return globals.SlVisualizationZoomAnnouncement||(typeof SlVisualizationZoomAnnouncement=="undefined"?nil:SlVisualizationZoomAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
self._announce_(_st($SlVisualizationZoomAnnouncement())._zoomInOn_("SlReportVisualization"));
return self}, function($ctx1) {$ctx1.fill(self,"zoomIn",{},globals.SlReportList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "zoomIn\x0a\x0a\x09self announce: (SlVisualizationZoomAnnouncement zoomInOn: #SlReportVisualization)",
referencedClasses: ["SlVisualizationZoomAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["announce:", "zoomInOn:"]
}),
$globals.SlReportList);

$core.addMethod(
$core.method({
selector: "zoomOut",
protocol: 'actions',
fn: function (){
var self=this;
function $SlVisualizationZoomAnnouncement(){return globals.SlVisualizationZoomAnnouncement||(typeof SlVisualizationZoomAnnouncement=="undefined"?nil:SlVisualizationZoomAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
self._announce_(_st($SlVisualizationZoomAnnouncement())._zoomOutOn_("SlReportVisualization"));
return self}, function($ctx1) {$ctx1.fill(self,"zoomOut",{},globals.SlReportList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "zoomOut\x0a\x0a\x09self announce: (SlVisualizationZoomAnnouncement zoomOutOn: #SlReportVisualization)",
referencedClasses: ["SlVisualizationZoomAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["announce:", "zoomOutOn:"]
}),
$globals.SlReportList);


$core.addMethod(
$core.method({
selector: "listName",
protocol: 'configuration',
fn: function (){
var self=this;
return "Reports";
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listName\x0a\x0a\x09^ 'Reports'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportList.klass);


$core.addClass('SlSelectList', $globals.SlLoadList, ['selected'], 'ShoreLine-Widgets');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
globals.SlSelectList.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@selected"]=_st($Set())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SlSelectList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09selected := Set new.",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.SlSelectList);

$core.addMethod(
$core.method({
selector: "itemSelected:",
protocol: 'events',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._select_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"itemSelected:",{anElement:anElement},globals.SlSelectList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "itemSelected: anElement\x0a\x0a\x09self select: anElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:"]
}),
$globals.SlSelectList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement", "html"],
source: "renderItem: anElement on: html\x0a\x0a\x09html a\x0a\x09\x09class: 'list-group-item', self selecedItemClass;\x0a\x09\x09onClick: [ self itemSelected: anElement ];\x0a\x09\x09with: anElement.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "a", ",", "selecedItemClass", "onClick:", "itemSelected:", "with:"]
}),
$globals.SlSelectList);

$core.addMethod(
$core.method({
selector: "select:",
protocol: 'actions',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@selected"])._add_(_st(anElement)._id());
return self}, function($ctx1) {$ctx1.fill(self,"select:",{anElement:anElement},globals.SlSelectList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "select: anElement\x0a\x0a\x09selected add: anElement id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "id"]
}),
$globals.SlSelectList);

$core.addMethod(
$core.method({
selector: "selectAll",
protocol: 'actions',
fn: function (){
var self=this;
return self},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectAll",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlSelectList);

$core.addMethod(
$core.method({
selector: "selected",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selected"];
return $1;
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selected\x0a\x0a\x09^ selected",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlSelectList);

$core.addMethod(
$core.method({
selector: "selected:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@selected"]=anObject;
return self},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "selected: anObject\x0a\x0a\x09selected := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlSelectList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "selectedItemClass: anElement\x0a\x0a\x09^ (selected includes: anElement)\x0a\x09\x09ifTrue: [ 'selected-project' ]\x0a\x09\x09ifFalse: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "includes:"]
}),
$globals.SlSelectList);

$core.addMethod(
$core.method({
selector: "unselectAll",
protocol: 'actions',
fn: function (){
var self=this;
return self},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unselectAll\x0a\x0a\x09\x22selected removeAll\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlSelectList);



$core.addClass('SlProjectList', $globals.SlSelectList, [], 'ShoreLine-Widgets');
$core.addMethod(
$core.method({
selector: "extractData:",
protocol: 'actions',
fn: function (aJSONObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aJSONObject)._projects();
return $1;
}, function($ctx1) {$ctx1.fill(self,"extractData:",{aJSONObject:aJSONObject},globals.SlProjectList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSONObject"],
source: "extractData: aJSONObject\x0a\x0a\x09^ aJSONObject projects",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["projects"]
}),
$globals.SlProjectList);

$core.addMethod(
$core.method({
selector: "hideAllEvent",
protocol: 'events',
fn: function (){
var self=this;
function $SlProjectSelectedAnnouncement(){return globals.SlProjectSelectedAnnouncement||(typeof SlProjectSelectedAnnouncement=="undefined"?nil:SlProjectSelectedAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
self._announce_(_st($SlProjectSelectedAnnouncement())._hideAll());
self._selectAll();
return self}, function($ctx1) {$ctx1.fill(self,"hideAllEvent",{},globals.SlProjectList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hideAllEvent\x0a\x0a\x09self announce: (SlProjectSelectedAnnouncement hideAll).\x0a\x09self selectAll",
referencedClasses: ["SlProjectSelectedAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["announce:", "hideAll", "selectAll"]
}),
$globals.SlProjectList);

$core.addMethod(
$core.method({
selector: "itemSelected:",
protocol: 'events',
fn: function (anElement){
var self=this;
function $SlProjectSelectedAnnouncement(){return globals.SlProjectSelectedAnnouncement||(typeof SlProjectSelectedAnnouncement=="undefined"?nil:SlProjectSelectedAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
globals.SlProjectList.superclass.fn.prototype._itemSelected_.apply(_st(self), [anElement]);
self._announce_(_st($SlProjectSelectedAnnouncement())._withProject_(anElement));
return self}, function($ctx1) {$ctx1.fill(self,"itemSelected:",{anElement:anElement},globals.SlProjectList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "itemSelected: anElement\x0a\x0a\x09super itemSelected: anElement.\x0a\x09self announce: (SlProjectSelectedAnnouncement withProject: anElement)",
referencedClasses: ["SlProjectSelectedAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["itemSelected:", "announce:", "withProject:"]
}),
$globals.SlProjectList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderControlsOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'btn-group btn-group-justified';\x0a\x09\x09with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09class: 'btn btn-default btn-block';\x0a\x09\x09\x09\x09onClick: [ self showAllEvent ];\x0a\x09\x09\x09\x09with: 'Show all'.\x0a\x09\x09\x09\x09\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09class: 'btn btn-default btn-block';\x0a\x09\x09\x09\x09onClick: [ self hideAllEvent ];\x0a\x09\x09\x09\x09with: 'Hide all'. ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "a", "onClick:", "showAllEvent", "hideAllEvent"]
}),
$globals.SlProjectList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement", "html"],
source: "renderItem: anElement on: html\x0a\x0a\x22\x09super\x0a\x09\x09renderItem: [\x0a\x09\x09\x09html span class: 'badge'; with: anElement numberOfReports.\x0a\x09\x09\x09html span: anElement title. ]\x0a\x09\x09on: html.\x0a\x22\x09\x09\x0a\x09html a\x0a\x09\x09class: 'list-group-item';\x0a\x09\x09onClick: [ self itemSelected: anElement ];\x0a\x09\x09with: [\x0a\x09\x09\x09html span class: 'badge'; with: anElement numberOfReports.\x0a\x09\x09\x09html span: anElement title. ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "a", "onClick:", "itemSelected:", "with:", "span", "numberOfReports", "span:", "title"]
}),
$globals.SlProjectList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "html"],
source: "renderList: aCollection on: html\x0a\x0a\x09html div\x0a\x09\x09class: 'list-group';\x0a\x09\x09style: 'margin: 0px';\x0a\x09\x09with: [ self renderItems: aCollection on: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "style:", "with:", "renderItems:on:"]
}),
$globals.SlProjectList);

$core.addMethod(
$core.method({
selector: "showAllEvent",
protocol: 'events',
fn: function (){
var self=this;
function $SlProjectSelectedAnnouncement(){return globals.SlProjectSelectedAnnouncement||(typeof SlProjectSelectedAnnouncement=="undefined"?nil:SlProjectSelectedAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
self._announce_(_st($SlProjectSelectedAnnouncement())._showAll());
self._unselectAll();
return self}, function($ctx1) {$ctx1.fill(self,"showAllEvent",{},globals.SlProjectList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showAllEvent\x0a\x0a\x09self announce: (SlProjectSelectedAnnouncement showAll).\x0a\x09self unselectAll",
referencedClasses: ["SlProjectSelectedAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["announce:", "showAll", "unselectAll"]
}),
$globals.SlProjectList);


$core.addMethod(
$core.method({
selector: "listName",
protocol: 'configuration',
fn: function (){
var self=this;
return "Projects";
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listName\x0a\x0a\x09^ 'Projects'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlProjectList.klass);


$core.addClass('SlOldStaticList', $globals.SlOldList, [], 'ShoreLine-Widgets');
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
$1=$recv(self._class())._defaultFilters();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"data",{},$globals.SlOldStaticList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "data\x0a\x0a\x09^ self class defaultFilters",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["defaultFilters", "class"]
}),
$globals.SlOldStaticList);

$core.addMethod(
$core.method({
selector: "filteredItemsFrom:",
protocol: 'filtering',
fn: function (aCollection){
var self=this;
return aCollection;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "filteredItemsFrom: aCollection\x0a\x0a\x09\x22not filtering for now\x22\x0a\x09^ aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlOldStaticList);

$core.addMethod(
$core.method({
selector: "renderContentsOn:",
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
$globals.SlOldStaticList.superclass.fn.prototype._renderContentsOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._updateContents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},$globals.SlOldStaticList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentsOn: html\x0a\x09\x0a\x09super renderContentsOn: html.\x09\x0a\x09self updateContents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderContentsOn:", "updateContents"]
}),
$globals.SlOldStaticList);



$core.addClass('SlFilterList', $globals.SlOldStaticList, ['filters', 'selected', 'configure'], 'ShoreLine-Widgets');
$core.addMethod(
$core.method({
selector: "configureEvent",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._alert_("configure filter");
return self}, function($ctx1) {$ctx1.fill(self,"configureEvent",{},smalltalk.SlFilterList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "configureEvent\x0a\x0a\x09window alert: 'configure filter'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alert:"]
}),
$globals.SlFilterList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "eval: aString\x0a\x09| compiler |\x0a\x09\x0a\x09compiler := Compiler new.\x0a\x09[ compiler parseExpression: aString ] on: Error do: [ :ex | ^ self alert: ex messageText ].\x0a\x09^ compiler evaluateExpression: aString",
referencedClasses: ["Compiler", "Error"],
//>>excludeEnd("ide");
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "evaluateExpression:"]
}),
$globals.SlFilterList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "evalStringAsBlock: aString\x0a\x0a\x09^ self eval: (String new writeStream\x0a\x09\x09nextPutAll: '[ ';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: ' ]';\x0a\x09\x09contents)",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["eval:", "nextPutAll:", "writeStream", "new", "contents"]
}),
$globals.SlFilterList);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SlFilterList.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@configure"]=true;
self["@filters"]=_st(self._class())._defaultFilters();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SlFilterList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09configure := true.\x0a\x09filters := self class defaultFilters.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "defaultFilters", "class"]
}),
$globals.SlFilterList);

$core.addMethod(
$core.method({
selector: "itemSelected:",
protocol: 'events',
fn: function (anElement){
var self=this;
function $SlReportFilteredAnnouncement(){return smalltalk.SlReportFilteredAnnouncement||(typeof SlReportFilteredAnnouncement=="undefined"?nil:SlReportFilteredAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
self._announce_(_st($SlReportFilteredAnnouncement())._withBlock_(self._evalStringAsBlock_(_st(anElement)._value())));
return self}, function($ctx1) {$ctx1.fill(self,"itemSelected:",{anElement:anElement},smalltalk.SlFilterList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "itemSelected: anElement\x0a\x0a\x22\x09selected = anElement key\x0a\x09\x09ifTrue: [ reverse := reverse not ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09reverse := false.\x0a\x09\x09\x09selected := anElement key ].\x0a\x22\x09\x09\x09\x0a\x09self announce: (SlReportFilteredAnnouncement withBlock: (self evalStringAsBlock: anElement value)).\x0a\x09\x22self updateContents.\x22",
referencedClasses: ["SlReportFilteredAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["announce:", "withBlock:", "evalStringAsBlock:", "value"]
}),
$globals.SlFilterList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderConfigureOn: html\x0a\x09| element |\x0a\x09\x0a\x09element := html span\x0a\x09\x09id: 'banana';\x0a\x09\x09class: 'glyphicon glyphicon-cog';\x0a\x09\x09onClick: [ self configureEvent ].\x0a\x09\x0a\x09\x22element asJQuery tooltip.\x22\x0a\x09\x22element element asJQuery tooltip.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "span", "class:", "onClick:", "configureEvent"]
}),
$globals.SlFilterList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement", "html"],
source: "renderItem: anElement on: html\x0a\x0a\x09html a\x0a\x09\x09class: 'list-group-item';\x0a\x09\x09onClick: [ self itemSelected: anElement ];\x0a\x09\x09with: [\x0a\x09\x09\x09html span: anElement key.\x0a\x09\x09\x09configure ifTrue: [ self renderConfigureOn: html ].\x0a\x0a\x09\x09\x09\x22selected = anElement key ifTrue: [ self renderArrowOn: html ]\x22 ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "a", "onClick:", "itemSelected:", "with:", "span:", "key", "ifTrue:", "renderConfigureOn:"]
}),
$globals.SlFilterList);

$core.addMethod(
$core.method({
selector: "selected",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selected"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selected",{},smalltalk.SlFilterList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selected\x0a\x0a\x09^ selected",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlFilterList);

$core.addMethod(
$core.method({
selector: "selected:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selected"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"selected:",{anObject:anObject},smalltalk.SlFilterList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "selected: anObject\x0a\x0a\x09selected := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlFilterList);


$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultFilters\x0a\x0a\x09^ OrderedCollection new\x0a\x09\x09add: self testFilter;\x0a\x09\x09yourself",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["add:", "new", "testFilter", "yourself"]
}),
$globals.SlFilterList.klass);

$core.addMethod(
$core.method({
selector: "listName",
protocol: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Controls";
}, function($ctx1) {$ctx1.fill(self,"listName",{},smalltalk.SlFilterList.klass)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listName\x0a\x0a\x09^ 'Controls'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlFilterList.klass);

$core.addMethod(
$core.method({
selector: "testFilter",
protocol: 'filters',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="Test Filter".__minus_gt(" :each | each project id = 5");
return $1;
}, function($ctx1) {$ctx1.fill(self,"testFilter",{},smalltalk.SlFilterList.klass)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFilter\x0a\x0a\x09^ 'Test Filter' -> ' :each | each project id = 5'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["->"]
}),
$globals.SlFilterList.klass);


$core.addClass('SlSortList', $globals.SlOldStaticList, ['selected', 'configure', 'reverse'], 'ShoreLine-Widgets');
$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "blockFromString: aString\x0a\x0a\x09^ self eval: (String new writeStream\x0a\x09\x09nextPutAll: '[ ';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: (reverse ifTrue: [ ' not' ] ifFalse: [ '' ])\x0a\x09\x09nextPutAll: ' ]';\x0a\x09\x09contents)",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["eval:", "nextPutAll:", "writeStream", "new", "nextPutAll:nextPutAll:", "ifTrue:ifFalse:", "contents"]
}),
$globals.SlSortList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "eval: aString\x0a\x09| compiler |\x0a\x09\x0a\x09compiler := Compiler new.\x0a\x09[ compiler parseExpression: aString ] on: Error do: [ :ex | ^ self alert: ex messageText ].\x0a\x09^ compiler evaluateExpression: aString",
referencedClasses: ["Compiler", "Error"],
//>>excludeEnd("ide");
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "evaluateExpression:"]
}),
$globals.SlSortList);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SlSortList.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@configure"]=true;
self["@reverse"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SlSortList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09configure := true.\x0a\x09reverse := false.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.SlSortList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "itemSelected: anElement\x0a\x0a\x09selected = anElement key\x0a\x09\x09ifTrue: [ reverse := reverse not ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09reverse := false.\x0a\x09\x09\x09selected := anElement key ].\x0a\x09\x09\x09\x0a\x09self announce: (SlReportSortedAnnouncement withSortBlock: (self class sortByFieldString: anElement value)).\x0a\x09self updateContents.",
referencedClasses: ["SlReportSortedAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "key", "not", "announce:", "withSortBlock:", "sortByFieldString:", "class", "value", "updateContents"]
}),
$globals.SlSortList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderArrowOn: html\x0a\x0a\x09html span\x0a\x09\x09class: 'pull-right ',\x0a\x09\x09\x09(reverse ifTrue: [ 'glyphicon glyphicon-chevron-up' ] ifFalse: [ 'glyphicon glyphicon-chevron-down' ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "span", ",", "ifTrue:ifFalse:"]
}),
$globals.SlSortList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderConfigureOn: html\x0a\x09| element |\x0a\x09\x0a\x09element := html span\x0a\x09\x09id: 'banana';\x0a\x09\x09class: 'glyphicon glyphicon-cog';\x0a\x09\x09onClick: [ ].\x0a\x09\x0a\x09\x22element element asJQuery tooltip.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "span", "class:", "onClick:"]
}),
$globals.SlSortList);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement", "html"],
source: "renderItem: anElement on: html\x0a\x0a\x09html a\x0a\x09\x09class: 'list-group-item';\x0a\x09\x09onClick: [ self itemSelected: anElement ];\x0a\x09\x09with: [\x0a\x09\x09\x09configure ifTrue: [ self renderConfigureOn: html ].\x0a\x09\x09\x09html span: anElement key.\x0a\x09\x09\x09selected = anElement key ifTrue: [ self renderArrowOn: html ] ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "a", "onClick:", "itemSelected:", "with:", "ifTrue:", "renderConfigureOn:", "span:", "key", "=", "renderArrowOn:"]
}),
$globals.SlSortList);

$core.addMethod(
$core.method({
selector: "selected",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selected"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selected",{},smalltalk.SlSortList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selected\x0a\x0a\x09^ selected",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlSortList);

$core.addMethod(
$core.method({
selector: "selected:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selected"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"selected:",{anObject:anObject},smalltalk.SlSortList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "selected: anObject\x0a\x0a\x09selected := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlSortList);

$core.addMethod(
$core.method({
selector: "sortByFieldBlock:",
protocol: 'block generation',
fn: function (anAccessor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._blockFromString_(_st(self._class())._sortByFieldString_(anAccessor));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sortByFieldBlock:",{anAccessor:anAccessor},smalltalk.SlSortList)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAccessor"],
source: "sortByFieldBlock: anAccessor\x0a\x09\x0a\x09^ self blockFromString: (self class sortByFieldString: anAccessor)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["blockFromString:", "sortByFieldString:", "class"]
}),
$globals.SlSortList);


$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultFilters\x0a\x0a\x09^ self defaultFiltersMapping collect: [ :each | each key -> (self sortByFieldString: each value) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "defaultFiltersMapping", "->", "key", "sortByFieldString:", "value"]
}),
$globals.SlSortList.klass);

$core.addMethod(
$core.method({
selector: "listName",
protocol: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Controls";
}, function($ctx1) {$ctx1.fill(self,"listName",{},smalltalk.SlSortList.klass)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listName\x0a\x0a\x09^ 'Controls'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlSortList.klass);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAccessor"],
source: "sortByFieldString: anAccessor\x0a\x0a\x09^ ':a :b | a ', anAccessor, ' < b ', anAccessor",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [","]
}),
$globals.SlSortList.klass);


$core.addClass('SlReportMetadata', $globals.SlWidget, ['report'], 'ShoreLine-Widgets');
$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector", "html"],
source: "renderField: aSelector on: html\x0a\x0a\x09html div\x0a\x09\x09class: 'report-metadata-', aSelector;\x0a\x09\x09with: (report perform: aSelector)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", ",", "with:", "perform:"]
}),
$globals.SlReportMetadata);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'report-metadata';\x0a\x09\x09with: [\x0a\x09\x09\x09self class fields do: [ :each | self renderField: each on: html ] ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "do:", "fields", "class", "renderField:on:"]
}),
$globals.SlReportMetadata);

$core.addMethod(
$core.method({
selector: "report",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@report"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"report",{},smalltalk.SlReportMetadata)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "report\x0a\x0a\x09^ report",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportMetadata);

$core.addMethod(
$core.method({
selector: "report:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@report"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"report:",{anObject:anObject},smalltalk.SlReportMetadata)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "report: anObject\x0a\x0a\x09report := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportMetadata);


$core.addMethod(
$core.method({
selector: "fields",
protocol: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["id", "title", "status", "project"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fields",{},smalltalk.SlReportMetadata.klass)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fields\x0a\x0a\x09^ #( id title status project )",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportMetadata.klass);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReport"],
source: "withReport: aReport\x0a\x0a\x09^ self new\x0a\x09\x09report: aReport;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["report:", "new", "yourself"]
}),
$globals.SlReportMetadata.klass);


$core.addClass('SlStackTrace', $globals.SlToolbarFrame, ['stacktrace', 'traceId'], 'ShoreLine-Widgets');
$core.addMethod(
$core.method({
selector: "pushArgs:",
protocol: 'arguments',
fn: function (aDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@traceId"]=$recv(aDictionary)._at_("id");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pushArgs:",{aDictionary:aDictionary},$globals.SlStackTrace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "pushArgs: aDictionary\x0a\x0a\x09traceId := aDictionary at: #id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.SlStackTrace);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$5,$7,$8,$9,$10,$6,$4,$2;
$1=self._stacktrace();
$recv($1)._connect();
$2=$recv($1)._then_((function(){
var trace;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
trace=$recv($recv(self["@stacktrace"])._list())._at_ifAbsent_(self["@traceId"],(function(){
return nil;

}));
trace;
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($3)._class_("container");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($5)._class_("panel panel-default");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$6=$recv($5)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$7=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["div"]=3;
//>>excludeEnd("ctx");
$recv($7)._class_("panel-heading");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$8=$recv($7)._with_("StackTrace ".__comma(self["@traceId"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$8;
$9=$recv(html)._div();
$recv($9)._class_("panel-body");
$10=$recv($9)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return self._renderStackTrace_on_(trace,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,5)});
//>>excludeEnd("ctx");
}));
return $10;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({trace:trace},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.SlStackTrace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09self stacktrace\x0a\x09\x09connect;\x0a\x09\x09then: [\x0a\x09\x09\x09| trace |\x0a\x09\x09\x09trace := stacktrace list at: traceId ifAbsent: [ nil ].\x0a\x09\x09\x09\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'container';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09class: 'panel panel-default';\x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'panel-heading';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'StackTrace ', traceId.\x0a\x09\x09\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'panel-body';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: [ self renderStackTrace: trace on: html ] ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["connect", "stacktrace", "then:", "at:ifAbsent:", "list", "class:", "div", "with:", ",", "renderStackTrace:on:"]
}),
$globals.SlStackTrace);

$core.addMethod(
$core.method({
selector: "renderStackTrace:on:",
protocol: 'rendering',
fn: function (aStackTrace,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._renderStackTraceMetadata_on_(aStackTrace,html);
self._renderStackTraceEvents_on_(aStackTrace,html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderStackTrace:on:",{aStackTrace:aStackTrace,html:html},$globals.SlStackTrace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStackTrace", "html"],
source: "renderStackTrace: aStackTrace on: html\x0a\x0a\x09self renderStackTraceMetadata: aStackTrace on: html.\x0a\x09self renderStackTraceEvents: aStackTrace on: html.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderStackTraceMetadata:on:", "renderStackTraceEvents:on:"]
}),
$globals.SlStackTrace);

$core.addMethod(
$core.method({
selector: "renderStackTraceEvents:on:",
protocol: 'rendering',
fn: function (aStackTrace,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(aStackTrace)._stacktrace())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(html)._div_($recv(each)._contents());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderStackTraceEvents:on:",{aStackTrace:aStackTrace,html:html},$globals.SlStackTrace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStackTrace", "html"],
source: "renderStackTraceEvents: aStackTrace on: html\x0a\x0a\x09aStackTrace stacktrace do: [ :each |\x0a\x09\x09html div: each contents ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "stacktrace", "div:", "contents"]
}),
$globals.SlStackTrace);

$core.addMethod(
$core.method({
selector: "renderStackTraceMetadata:on:",
protocol: 'rendering',
fn: function (aStackTrace,html){
var self=this;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(html)._div_($recv($recv($Date())._fromString_($recv(aStackTrace)._date()))._asDateString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div:"]=1;
//>>excludeEnd("ctx");
$recv(html)._div_($recv(aStackTrace)._author());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderStackTraceMetadata:on:",{aStackTrace:aStackTrace,html:html},$globals.SlStackTrace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStackTrace", "html"],
source: "renderStackTraceMetadata: aStackTrace on: html\x0a\x0a\x09html div: (Date fromString: aStackTrace date) asDateString.\x0a\x09html div: aStackTrace author.",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["div:", "asDateString", "fromString:", "date", "author"]
}),
$globals.SlStackTrace);

$core.addMethod(
$core.method({
selector: "stacktrace",
protocol: 'accessing',
fn: function (){
var self=this;
function $TDClientProxy(){return $globals.TDClientProxy||(typeof TDClientProxy=="undefined"?nil:TDClientProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@stacktrace"];
if(($receiver = $2) == null || $receiver.isNil){
self["@stacktrace"]=$recv($TDClientProxy())._on_("/stacktraces");
$1=self["@stacktrace"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stacktrace",{},$globals.SlStackTrace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stacktrace\x0a\x0a\x09^ stacktrace ifNil: [ stacktrace := TDClientProxy on: '/stacktraces' ]",
referencedClasses: ["TDClientProxy"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:"]
}),
$globals.SlStackTrace);



$core.addClass('SlStackTraceList', $globals.SlList, ['stacktrace'], 'ShoreLine-Widgets');
$core.addMethod(
$core.method({
selector: "dataDo:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._extractData())._then_((function(r1){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(r1)._contents())._then_((function(r2){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(r2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({r2:r2},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r1:r1},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["then:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataDo:",{aBlock:aBlock},$globals.SlStackTraceList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "dataDo: aBlock\x0a\x0a\x09self extractData then: [ :r1 | r1 contents then: [ :r2 | aBlock value: r2 ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["then:", "extractData", "contents", "value:"]
}),
$globals.SlStackTraceList);

$core.addMethod(
$core.method({
selector: "dataTag",
protocol: 'accessing',
fn: function (){
var self=this;
return "stacktraces";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataTag\x0a\x0a\x09^ #stacktraces",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlStackTraceList);

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
$1=$recv(self._data())._reportsWithAuthor_("TommasoDalSasso");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extractData",{},$globals.SlStackTraceList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "extractData\x0a\x0a\x09^ self data \x22reportsOnDate: (Date fromString: '2014/12/15')\x22reportsWithAuthor: 'TommasoDalSasso'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reportsWithAuthor:", "data"]
}),
$globals.SlStackTraceList);

$core.addMethod(
$core.method({
selector: "header",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["Date","Author","Creation Date","Class","Method"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "header\x0a\x0a\x09^ { 'Date'. 'Author'. 'Creation Date'. 'Class'. 'Method' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlStackTraceList);

$core.addMethod(
$core.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (aStacktrace,html){
var self=this;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$recv($recv(html)._tr())._with_((function(){
var date;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
date=$recv($Date())._fromString_($recv(aStacktrace)._date());
date;
$1=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["td"]=1;
//>>excludeEnd("ctx");
$2=$recv(date)._asDateString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asDateString"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$3=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["td"]=2;
//>>excludeEnd("ctx");
$recv($3)._with_($recv(aStacktrace)._author());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$4=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["td"]=3;
//>>excludeEnd("ctx");
$recv($4)._with_($recv(date)._asDateString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$5=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["td"]=4;
//>>excludeEnd("ctx");
$recv($5)._with_($recv(aStacktrace)._topClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
return $recv($recv(html)._td())._with_($recv(aStacktrace)._topMethod());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({date:date},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{aStacktrace:aStacktrace,html:html},$globals.SlStackTraceList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStacktrace", "html"],
source: "renderItem: aStacktrace on: html\x0a\x0a\x09html tr with: [\x0a\x09\x09| date |\x0a\x09\x09date := Date fromString: aStacktrace date.\x0a\x09\x09\x0a\x09\x09html td with: date asDateString.\x0a\x09\x09html td with: aStacktrace author.\x0a\x0a\x09\x09html td with: date asDateString.\x0a\x09\x09html td with: aStacktrace topClass.\x0a\x09\x09html td with: aStacktrace topMethod ]",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["with:", "tr", "fromString:", "date", "td", "asDateString", "author", "topClass", "topMethod"]
}),
$globals.SlStackTraceList);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Stack Traces";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x0a\x09^ 'Stack Traces'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlStackTraceList);



$core.addClass('SlTabbedContainer', $globals.SlContainer, [], 'ShoreLine-Widgets');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.SlTabbedContainer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@contents"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SlTabbedContainer)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09contents := Dictionary new.",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.SlTabbedContainer);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentsOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'tab-contents';\x0a\x09\x09with: [\x0a\x09\x09\x09contents keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09class: 'tab-pane';\x0a\x09\x09\x09\x09\x09id: key;\x0a\x09\x09\x09\x09\x09with: value ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "keysAndValuesDo:", "id:"]
}),
$globals.SlTabbedContainer);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderNavbarOn: html\x0a\x0a\x09html ul\x0a\x09\x09class: 'nav nav-tabs';\x0a\x09\x09with: [\x0a\x09\x09\x09contents keysDo: [ :key |\x0a\x09\x09\x09\x09html li\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09href: '#', key;\x0a\x09\x09\x09\x09\x09\x09\x09onClick: [ :this :event |\x0a\x09\x09\x09\x09\x09\x09\x09\x09event preventDefault.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x22window alert: this.\x22\x0a\x09\x09\x09\x09\x09\x09\x09\x09this tab: 'show' ] currySelf;\x0a\x09\x09\x09\x09\x09\x09\x09at: 'data-toggle' put: 'tab';\x0a\x09\x09\x09\x09\x09\x09\x09with: key ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "with:", "keysDo:", "li", "href:", "a", ",", "onClick:", "currySelf", "preventDefault", "tab:", "at:put:"]
}),
$globals.SlTabbedContainer);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderContentsOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.SlTabbedContainer)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09\x22self renderNavbarOn: html.\x22\x0a\x09self renderContentsOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderContentsOn:"]
}),
$globals.SlTabbedContainer);

$core.addMethod(
$core.method({
selector: "tabNamed:",
protocol: 'tabs',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._contents())._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabNamed:",{aString:aString},smalltalk.SlTabbedContainer)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "tabNamed: aString\x0a\x0a\x09^ self contents at: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "contents"]
}),
$globals.SlTabbedContainer);

$core.addMethod(
$core.method({
selector: "tabNamed:with:",
protocol: 'tabs',
fn: function (aString,aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._contents())._at_put_(aString,aWidget);
return self}, function($ctx1) {$ctx1.fill(self,"tabNamed:with:",{aString:aString,aWidget:aWidget},smalltalk.SlTabbedContainer)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aWidget"],
source: "tabNamed: aString with: aWidget\x0a\x0a\x09self contents at: aString put: aWidget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "contents"]
}),
$globals.SlTabbedContainer);



$core.addClass('SlToolbar', $globals.SlWidget, ['data', 'list', 'login'], 'ShoreLine-Widgets');
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
$globals.SlToolbar.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlToolbar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x09\x22login := MozPersonaLogin new.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.SlToolbar);

$core.addMethod(
$core.method({
selector: "renderControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._ul();
$recv($1)._class_("nav navbar-nav");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
var backLink;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
backLink=$recv(html)._li_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._a())._class_("glyphicon glyphicon-chevron-left");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
backLink;
return $recv($recv(backLink)._asJQuery())._slideToggle();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({backLink:backLink},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderControlsOn:",{html:html},$globals.SlToolbar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderControlsOn: html\x0a\x0a\x09html ul\x0a\x09\x09class: 'nav navbar-nav';\x0a\x09\x09with: [\x0a\x09\x09\x09| backLink |\x0a\x09\x09\x09backLink := html li: [ html a class: 'glyphicon glyphicon-chevron-left' ].\x0a\x09\x09\x09backLink asJQuery slideToggle ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "with:", "li:", "a", "slideToggle", "asJQuery"]
}),
$globals.SlToolbar);

$core.addMethod(
$core.method({
selector: "renderDebugControlsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $SlHeliosPopupAnnouncement(){return $globals.SlHeliosPopupAnnouncement||(typeof SlHeliosPopupAnnouncement=="undefined"?nil:SlHeliosPopupAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._button();
$recv($1)._class_("btn btn-default navbar-btn navbar-right");
$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._announce_($recv($SlHeliosPopupAnnouncement())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._with_("Helios");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderDebugControlsOn:",{html:html},$globals.SlToolbar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderDebugControlsOn: html\x0a\x0a\x09html button\x0a\x09\x09class: 'btn btn-default navbar-btn navbar-right';\x0a\x09\x09onClick: [ self announce: SlHeliosPopupAnnouncement new ];\x0a\x09\x09with: 'Helios'",
referencedClasses: ["SlHeliosPopupAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["class:", "button", "onClick:", "announce:", "new", "with:"]
}),
$globals.SlToolbar);

$core.addMethod(
$core.method({
selector: "renderHeaderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $SlHomePageAnnouncement(){return $globals.SlHomePageAnnouncement||(typeof SlHomePageAnnouncement=="undefined"?nil:SlHomePageAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._div();
$recv($1)._class_("navbar-header");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._a();
$recv($3)._class_("navbar-brand");
$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._announce_($recv($SlHomePageAnnouncement())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderLogoOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html},$globals.SlToolbar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderHeaderOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'navbar-header';\x0a\x09\x09with: [ html a\x0a\x09\x09\x09class: 'navbar-brand';\x0a\x09\x09\x09onClick: [ self announce: SlHomePageAnnouncement new ];\x0a\x09\x09\x09with: [ self renderLogoOn: html ] ]",
referencedClasses: ["SlHomePageAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "a", "onClick:", "announce:", "new", "renderLogoOn:"]
}),
$globals.SlToolbar);

$core.addMethod(
$core.method({
selector: "renderLogoOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$2;
$1=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["span"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("shoreline-logo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["span"]=2;
//>>excludeEnd("ctx");
$recv($3)._class_("logo-shore");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._with_("Shore");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._span();
$recv($5)._class_("logo-line");
$6=$recv($5)._with_("Line");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderLogoOn:",{html:html},$globals.SlToolbar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderLogoOn: html\x0a\x09\x0a\x09\x22colors: #ffffff rgb(224, 71, 45)\x22\x0a\x09html span\x0a\x09\x09class: 'shoreline-logo';\x0a\x09\x09with: [\x0a\x09\x09\x09html span class: 'logo-shore'; with: 'Shore'.\x0a\x09\x09\x09html span class: 'logo-line'; with: 'Line' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "span", "with:"]
}),
$globals.SlToolbar);

$core.addMethod(
$core.method({
selector: "renderMenuItem:on:",
protocol: 'rendering',
fn: function (aMenuItem,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv(html)._li_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._a();
$recv($1)._href_("#");
$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._announce_($recv($recv(aMenuItem)._value())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._with_($recv(aMenuItem)._key());
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderMenuItem:on:",{aMenuItem:aMenuItem,html:html},$globals.SlToolbar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMenuItem", "html"],
source: "renderMenuItem: aMenuItem on: html\x0a\x0a\x09html li: [ html a\x0a\x09\x09href: '#';\x0a\x09\x09onClick: [ self announce: aMenuItem value new ];\x0a\x09\x09with: aMenuItem key ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["li:", "href:", "a", "onClick:", "announce:", "new", "value", "with:", "key"]
}),
$globals.SlToolbar);

$core.addMethod(
$core.method({
selector: "renderMenuOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._ul();
$recv($1)._class_("nav navbar-nav");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self._class())._menuItems())._do_((function(eachItem){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderMenuItem_on_(eachItem,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({eachItem:eachItem},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderMenuOn:",{html:html},$globals.SlToolbar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderMenuOn: html\x0a\x0a\x09html ul\x0a\x09\x09class: 'nav navbar-nav';\x0a\x09\x09with: [\x0a\x09\x09\x09self class menuItems do: [ :eachItem | self renderMenuItem: eachItem on: html ] ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "with:", "do:", "menuItems", "class", "renderMenuItem:on:"]
}),
$globals.SlToolbar);

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
$1=$recv(html)._nav();
$recv($1)._class_("navbar navbar-default navbar-fixed-top");
$recv($1)._at_put_("role","navigation");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderControlsOn_(html);
self._renderHeaderOn_(html);
self._renderMenuOn_(html);
self._renderUserOn_(html);
return self._renderDebugControlsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.SlToolbar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html nav\x0a\x09\x09class: 'navbar navbar-default navbar-fixed-top';\x0a\x09\x09at: 'role' put: 'navigation';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderControlsOn: html.\x0a\x09\x09\x09self renderHeaderOn: html.\x0a\x09\x09\x09self renderMenuOn: html.\x0a\x09\x09\x09self renderUserOn: html.\x0a\x09\x09\x09self renderDebugControlsOn: html ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "nav", "at:put:", "with:", "renderControlsOn:", "renderHeaderOn:", "renderMenuOn:", "renderUserOn:", "renderDebugControlsOn:"]
}),
$globals.SlToolbar);

$core.addMethod(
$core.method({
selector: "renderUserOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._ul();
$recv($1)._class_("nav navbar-nav navbar-right");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(html)._li_(self["@login"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderUserOn:",{html:html},$globals.SlToolbar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderUserOn: html\x0a\x0a\x09html ul\x0a\x09\x09class: 'nav navbar-nav navbar-right';\x0a\x09\x09with: [ html li: login ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "with:", "li:"]
}),
$globals.SlToolbar);


$core.addMethod(
$core.method({
selector: "menuItems",
protocol: 'items',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=["Menu Items".__minus_gt(nil)];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"menuItems",{},$globals.SlToolbar.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuItems\x0a\x0a\x09^ {\x0a\x09\x09\x22'Helios' -> SlHeliosPopupAnnouncement.\x22\x0a\x09\x09'Menu Items' -> nil\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["->"]
}),
$globals.SlToolbar.klass);

$core.addMethod(
$core.method({
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
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "d3\x0a\x0a\x09^ JSObjectProxy on: self",
referencedClasses: ["JSObjectProxy"],
//>>excludeEnd("ide");
messageSends: ["on:"]
}),
$globals.Array);

});
