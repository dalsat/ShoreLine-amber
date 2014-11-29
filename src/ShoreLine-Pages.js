define("shoreline/ShoreLine-Pages", ["amber/boot", "shoreline/ShoreLine-Widgets-Core"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('ShoreLine-Pages');
smalltalk.packages["ShoreLine-Pages"].transport = {"type":"amd","amdNamespace":"shoreline"};

smalltalk.addClass('SlDetailsFrame', globals.SlFrame, ['report'], 'ShoreLine-Pages');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlTwoColumnLayout(){return globals.SlTwoColumnLayout||(typeof SlTwoColumnLayout=="undefined"?nil:SlTwoColumnLayout)}
function $SlReportMetadata(){return globals.SlReportMetadata||(typeof SlReportMetadata=="undefined"?nil:SlReportMetadata)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
($ctx1.supercall = true, globals.SlDetailsFrame.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
$2=_st($SlTwoColumnLayout())._new();
$ctx1.sendIdx["new"]=1;
_st($2)._left_(_st($SlReportMetadata())._new());
_st($2)._right_("page");
$3=_st($2)._yourself();
$1=$3;
self._contents_($1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SlDetailsFrame)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self contents: (SlTwoColumnLayout new\x0a\x09\x09left: SlReportMetadata new;\x0a\x09\x09right: 'page';\x0a\x09\x09yourself)",
messageSends: ["initialize", "contents:", "left:", "new", "right:", "yourself"],
referencedClasses: ["SlTwoColumnLayout", "SlReportMetadata"]
}),
globals.SlDetailsFrame);

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
}, function($ctx1) {$ctx1.fill(self,"report",{},smalltalk.SlDetailsFrame)})},
args: [],
source: "report\x0a\x0a\x09^ report",
messageSends: [],
referencedClasses: []
}),
globals.SlDetailsFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "report:",
protocol: 'accessing',
fn: function (aReport){
var self=this;
return smalltalk.withContext(function($ctx1) {
var $3,$2,$1,$5,$4,$8,$7,$6;
self["@report"]=aReport;
$3=self._contents();
$ctx1.sendIdx["contents"]=1;
$2=_st($3)._left();
$ctx1.sendIdx["left"]=1;
$1=_st($2)._respondsTo_("report:");
$ctx1.sendIdx["respondsTo:"]=1;
if(smalltalk.assert($1)){
$5=self._contents();
$ctx1.sendIdx["contents"]=2;
$4=_st($5)._left();
_st($4)._report_(aReport);
$ctx1.sendIdx["report:"]=1;
};
$8=self._contents();
$ctx1.sendIdx["contents"]=3;
$7=_st($8)._right();
$ctx1.sendIdx["right"]=1;
$6=_st($7)._respondsTo_("report:");
if(smalltalk.assert($6)){
_st(_st(self._contents())._right())._report_(aReport);
};
return self}, function($ctx1) {$ctx1.fill(self,"report:",{aReport:aReport},smalltalk.SlDetailsFrame)})},
args: ["aReport"],
source: "report: aReport\x0a\x0a\x09report := aReport.\x0a\x09\x0a\x09(self contents left respondsTo: #report:) ifTrue: [ self contents left report: aReport ].\x0a\x09(self contents right respondsTo: #report:) ifTrue: [ self contents right report: aReport ].\x0a\x09\x22self map: #report: withArguments: { aReport }.\x22",
messageSends: ["ifTrue:", "respondsTo:", "left", "contents", "report:", "right"],
referencedClasses: []
}),
globals.SlDetailsFrame);


smalltalk.addMethod(
smalltalk.method({
selector: "withReport:",
protocol: 'instance creation',
fn: function (aBugReport){
var self=this;
return smalltalk.withContext(function($ctx1) {
var $2,$3,$1;
$2=self._new();
_st($2)._report_(aBugReport);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withReport:",{aBugReport:aBugReport},smalltalk.SlDetailsFrame.klass)})},
args: ["aBugReport"],
source: "withReport: aBugReport\x0a\x0a\x09^ self new\x0a\x09\x09report: aBugReport;\x0a\x09\x09yourself.",
messageSends: ["report:", "new", "yourself"],
referencedClasses: []
}),
globals.SlDetailsFrame.klass);


smalltalk.addClass('SlHomePage', globals.SlFrame, [], 'ShoreLine-Pages');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.SlHomePage.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._contents_("Home Page");
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SlHomePage)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self contents: 'Home Page'.",
messageSends: ["initialize", "contents:"],
referencedClasses: []
}),
globals.SlHomePage);



smalltalk.addClass('SlListFrame', globals.SlFrame, [], 'ShoreLine-Pages');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlTwoColumnLayout(){return globals.SlTwoColumnLayout||(typeof SlTwoColumnLayout=="undefined"?nil:SlTwoColumnLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
($ctx1.supercall = true, globals.SlListFrame.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
$1=_st($SlTwoColumnLayout())._new();
_st($1)._left_(self._initializeControlPanel());
_st($1)._right_(self._initializeViewPanel());
$2=_st($1)._yourself();
self._contents_($2);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SlListFrame)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self contents: (SlTwoColumnLayout new\x0a\x09\x09left: self initializeControlPanel;\x0a\x09\x09right: self initializeViewPanel;\x0a\x09\x09yourself)",
messageSends: ["initialize", "contents:", "left:", "new", "initializeControlPanel", "right:", "initializeViewPanel", "yourself"],
referencedClasses: ["SlTwoColumnLayout"]
}),
globals.SlListFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeControlPanel",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlTabbedContainer(){return globals.SlTabbedContainer||(typeof SlTabbedContainer=="undefined"?nil:SlTabbedContainer)}
function $SlFilterList(){return globals.SlFilterList||(typeof SlFilterList=="undefined"?nil:SlFilterList)}
function $SlProjectList(){return globals.SlProjectList||(typeof SlProjectList=="undefined"?nil:SlProjectList)}
return smalltalk.withContext(function($ctx1) {
var $2,$3,$4,$5,$1;
$2=_st($SlTabbedContainer())._new();
$ctx1.sendIdx["new"]=1;
$3=$2;
$4=_st($SlFilterList())._new();
$ctx1.sendIdx["new"]=2;
_st($3)._tabNamed_with_("Filters",$4);
$ctx1.sendIdx["tabNamed:with:"]=1;
_st($2)._tabNamed_with_("Projects",_st($SlProjectList())._new());
$5=_st($2)._yourself();
$1=$5;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeControlPanel",{},globals.SlListFrame)})},
args: [],
source: "initializeControlPanel\x0a\x0a\x09^ SlTabbedContainer new\x0a\x09\x09tabNamed: 'Filters' with: SlFilterList new;\x0a\x09\x09tabNamed: 'Projects' with: SlProjectList new;\x0a\x09\x09\x22tabNamed: 'SourceArea' with: SourceArea new;\x22\x0a\x09\x09yourself",
messageSends: ["tabNamed:with:", "new", "yourself"],
referencedClasses: ["SlTabbedContainer", "SlFilterList", "SlProjectList"]
}),
globals.SlListFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeViewPanel",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlReportList(){return globals.SlReportList||(typeof SlReportList=="undefined"?nil:SlReportList)}
return smalltalk.withContext(function($ctx1) {
var $1;
$1=_st($SlReportList())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeViewPanel",{},globals.SlListFrame)})},
args: [],
source: "initializeViewPanel\x0a\x0a\x09^ SlReportList new",
messageSends: ["new"],
referencedClasses: ["SlReportList"]
}),
globals.SlListFrame);



smalltalk.addClass('SlToolbarFrame', globals.SlFrame, ['toolbar'], 'ShoreLine-Pages');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlToolbar(){return smalltalk.SlToolbar||(typeof SlToolbar=="undefined"?nil:SlToolbar)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.SlToolbarFrame.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@toolbar"]=_st($SlToolbar())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SlToolbarFrame)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09toolbar := SlToolbar new.",
messageSends: ["initialize", "new"],
referencedClasses: ["SlToolbar"]
}),
globals.SlToolbarFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(self["@toolbar"]);
smalltalk.SlToolbarFrame.superclass.fn.prototype._renderOn_.apply(_st(self), [html]);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.SlToolbarFrame)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html with: toolbar.\x09\x09\x0a\x09super renderOn: html.",
messageSends: ["with:", "renderOn:"],
referencedClasses: []
}),
globals.SlToolbarFrame);



smalltalk.addClass('SlMainFrame', globals.SlToolbarFrame, ['pages'], 'ShoreLine-Pages');
smalltalk.addMethod(
smalltalk.method({
selector: "detailsPageEvent:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) {
_st(self["@contents"])._report_(_st(anAnnouncement)._report());
self._displayPage_("details");
return self}, function($ctx1) {$ctx1.fill(self,"detailsPageEvent:",{anAnnouncement:anAnnouncement},globals.SlMainFrame)})},
args: ["anAnnouncement"],
source: "detailsPageEvent: anAnnouncement\x0a\x0a\x09contents report: anAnnouncement report.\x0a\x09self displayPage: #details.",
messageSends: ["report:", "report", "displayPage:"],
referencedClasses: []
}),
globals.SlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "displayPage:",
protocol: 'actions',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._displayPage_withArgs_(aSymbol,nil);
return self}, function($ctx1) {$ctx1.fill(self,"displayPage:",{aSymbol:aSymbol},globals.SlMainFrame)})},
args: ["aSymbol"],
source: "displayPage: aSymbol\x0a\x0a\x09self displayPage: aSymbol withArgs: nil",
messageSends: ["displayPage:withArgs:"],
referencedClasses: []
}),
globals.SlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "displayPage:withArgs:",
protocol: 'actions',
fn: function (aSymbol,aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $receiver;
self._contents_(self._pageAt_(aSymbol));
if(($receiver = aDictionary) == null || $receiver.isNil){
aDictionary;
} else {
_st(self["@contents"])._pushArgs_(aDictionary);
};
self._updateContents();
return self}, function($ctx1) {$ctx1.fill(self,"displayPage:withArgs:",{aSymbol:aSymbol,aDictionary:aDictionary},globals.SlMainFrame)})},
args: ["aSymbol", "aDictionary"],
source: "displayPage: aSymbol withArgs: aDictionary\x0a\x0a\x09self contents: (self pageAt: aSymbol).\x0a\x09aDictionary ifNotNil: [ contents pushArgs: aDictionary ].\x0a\x09\x0a\x09self updateContents.",
messageSends: ["contents:", "pageAt:", "ifNotNil:", "pushArgs:", "updateContents"],
referencedClasses: []
}),
globals.SlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "displayReportDetails:",
protocol: 'actions',
fn: function (aReport){
var self=this;
function $SlDetailsFrame(){return smalltalk.SlDetailsFrame||(typeof SlDetailsFrame=="undefined"?nil:SlDetailsFrame)}
return smalltalk.withContext(function($ctx1) {
_st(self["@pages"])._at_put_("details",_st($SlDetailsFrame())._withReport_(aReport));
self._displayPage_("details");
return self}, function($ctx1) {$ctx1.fill(self,"displayReportDetails:",{aReport:aReport},smalltalk.SlMainFrame)})},
args: ["aReport"],
source: "displayReportDetails: aReport\x0a\x0a\x09pages at: #details put: (SlDetailsFrame withReport: aReport).\x0a\x09self displayPage: #details.",
messageSends: ["at:put:", "withReport:", "displayPage:"],
referencedClasses: ["SlDetailsFrame"]
}),
globals.SlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "errorPageEvent:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) {
self._displayErrorPage_("error");
return self}, function($ctx1) {$ctx1.fill(self,"errorPageEvent:",{anAnnouncement:anAnnouncement},globals.SlMainFrame)})},
args: ["anAnnouncement"],
source: "errorPageEvent: anAnnouncement\x0a\x09\x0a\x09self displayErrorPage: #error",
messageSends: ["displayErrorPage:"],
referencedClasses: []
}),
globals.SlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.SlMainFrame.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@pages"]=_st($Dictionary())._new();
$ctx1.sendIdx["new"]=1;
_st(_st(self._class())._pages())._do_((function(eachPage){
return smalltalk.withContext(function($ctx2) {
return _st(self["@pages"])._at_put_(_st(eachPage)._key(),_st(_st(eachPage)._value())._new());
}, function($ctx2) {$ctx2.fillBlock({eachPage:eachPage},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SlMainFrame)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09pages := Dictionary new.\x0a\x09\x0a\x09self class pages do: [ :eachPage |\x0a\x09\x09pages at: eachPage key put: eachPage value new ].",
messageSends: ["initialize", "new", "do:", "pages", "class", "at:put:", "key", "value"],
referencedClasses: ["Dictionary"]
}),
globals.SlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "pageAt:",
protocol: 'accessing',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@pages"])._at_(aSymbol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"pageAt:",{aSymbol:aSymbol},globals.SlMainFrame)})},
args: ["aSymbol"],
source: "pageAt: aSymbol\x0a\x0a\x09^ pages at: aSymbol \x22ifAbsent: []\x22",
messageSends: ["at:"],
referencedClasses: []
}),
globals.SlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "pageNotFound:",
protocol: 'actions',
fn: function (args){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=_st("Page ".__comma(_st(args)._at_("url"))).__comma(" not found");
$ctx1.sendIdx[","]=1;
$3="message".__minus_gt($4);
$2=[$3];
$1=_st($Dictionary())._from_($2);
self._displayPage_withArgs_("notFound",$1);
return self}, function($ctx1) {$ctx1.fill(self,"pageNotFound:",{args:args},globals.SlMainFrame)})},
args: ["args"],
source: "pageNotFound: args\x0a\x0a\x09self displayPage: #notFound withArgs: (Dictionary from: { #message -> ('Page ', (args at: #url), ' not found') })",
messageSends: ["displayPage:withArgs:", "from:", "->", ",", "at:"],
referencedClasses: ["Dictionary"]
}),
globals.SlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "registerEvents",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {
globals.SlMainFrame.superclass.fn.prototype._registerEvents.apply(_st(self), []);
_st(_st(self._class())._events())._do_((function(eventAssociation){
return smalltalk.withContext(function($ctx2) {
return _st(self._announcer())._on_send_to_(_st(eventAssociation)._key(),_st(eventAssociation)._value(),self);
}, function($ctx2) {$ctx2.fillBlock({eventAssociation:eventAssociation},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerEvents",{},globals.SlMainFrame)})},
args: [],
source: "registerEvents\x0a\x0a\x09super registerEvents.\x0a\x09\x0a\x09self class events do: [ :eventAssociation |\x0a\x09\x09self announcer\x0a\x09\x09\x09on: eventAssociation key\x0a\x09\x09\x09send: eventAssociation value\x0a\x09\x09\x09to: self ]",
messageSends: ["registerEvents", "do:", "events", "class", "on:send:to:", "announcer", "key", "value"],
referencedClasses: []
}),
globals.SlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "reportSelectedEvent:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) {
self._displayPage_("details");
return self}, function($ctx1) {$ctx1.fill(self,"reportSelectedEvent:",{anAnnouncement:anAnnouncement},globals.SlMainFrame)})},
args: ["anAnnouncement"],
source: "reportSelectedEvent: anAnnouncement\x0a\x0a\x09self displayPage: #details",
messageSends: ["displayPage:"],
referencedClasses: []
}),
globals.SlMainFrame);


smalltalk.addMethod(
smalltalk.method({
selector: "events",
protocol: 'configuration',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;
},
args: [],
source: "events\x0a\x0a\x09^{}",
messageSends: [],
referencedClasses: []
}),
globals.SlMainFrame.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "pages",
protocol: 'configuration',
fn: function (){
var self=this;
function $SlHomePage(){return globals.SlHomePage||(typeof SlHomePage=="undefined"?nil:SlHomePage)}
function $SlListFrame(){return globals.SlListFrame||(typeof SlListFrame=="undefined"?nil:SlListFrame)}
function $SlDetailsFrame(){return globals.SlDetailsFrame||(typeof SlDetailsFrame=="undefined"?nil:SlDetailsFrame)}
function $SlMessageFrame(){return globals.SlMessageFrame||(typeof SlMessageFrame=="undefined"?nil:SlMessageFrame)}
function $SlErrorFrame(){return globals.SlErrorFrame||(typeof SlErrorFrame=="undefined"?nil:SlErrorFrame)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$2="home".__minus_gt($SlHomePage());
$ctx1.sendIdx["->"]=1;
$3="list".__minus_gt($SlListFrame());
$ctx1.sendIdx["->"]=2;
$4="details".__minus_gt($SlDetailsFrame());
$ctx1.sendIdx["->"]=3;
$5="test".__minus_gt($SlMessageFrame());
$ctx1.sendIdx["->"]=4;
$1=[$2,$3,$4,$5,"notFound".__minus_gt($SlErrorFrame())];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pages",{},globals.SlMainFrame.klass)})},
args: [],
source: "pages\x0a\x0a\x09^ {\x0a\x09\x09#home -> SlHomePage.\x0a\x09\x09#list -> SlListFrame.\x0a\x09\x09#details -> SlDetailsFrame.\x0a\x22\x09\x09#images -> SlImagesFrame.\x0a\x09\x09#stacktracelist -> SlStackTraceListView.\x0a\x09\x09#stacktraces -> SlStackTraceView.\x0a\x22\x09\x09\x0a\x09\x09#test -> SlMessageFrame.\x0a\x09\x09#notFound -> SlErrorFrame\x0a\x09}",
messageSends: ["->"],
referencedClasses: ["SlHomePage", "SlListFrame", "SlDetailsFrame", "SlMessageFrame", "SlErrorFrame"]
}),
globals.SlMainFrame.klass);

});
