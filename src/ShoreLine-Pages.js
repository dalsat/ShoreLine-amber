define("shoreline/ShoreLine-Pages", ["amber/boot", "shoreline/ShoreLine-Widgets-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('ShoreLine-Pages');
$core.packages["ShoreLine-Pages"].innerEval = function (expr) { return eval(expr); };
$core.packages["ShoreLine-Pages"].transport = {"type":"amd","amdNamespace":"shoreline"};

$core.addClass('SlDetailsFrame', $globals.SlFrame, ['report'], 'ShoreLine-Pages');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlTwoColumnLayout(){return $globals.SlTwoColumnLayout||(typeof SlTwoColumnLayout=="undefined"?nil:SlTwoColumnLayout)}
function $SlReportMetadata(){return $globals.SlReportMetadata||(typeof SlReportMetadata=="undefined"?nil:SlReportMetadata)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlDetailsFrame.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=$recv($SlTwoColumnLayout())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($2)._left_($recv($SlReportMetadata())._new());
$recv($2)._right_("page");
$3=$recv($2)._yourself();
$1=$3;
self._contents_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlDetailsFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self contents: (SlTwoColumnLayout new\x0a\x09\x09left: SlReportMetadata new;\x0a\x09\x09right: 'page';\x0a\x09\x09yourself)",
referencedClasses: ["SlTwoColumnLayout", "SlReportMetadata"],
//>>excludeEnd("ide");
messageSends: ["initialize", "contents:", "left:", "new", "right:", "yourself"]
}),
$globals.SlDetailsFrame);

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
$globals.SlDetailsFrame);

$core.addMethod(
$core.method({
selector: "report:",
protocol: 'accessing',
fn: function (aReport){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$4,$8,$7,$6;
self["@report"]=aReport;
$3=self._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["contents"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._left();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["left"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._respondsTo_("report:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["respondsTo:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$5=self._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["contents"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._left();
$recv($4)._report_(aReport);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["report:"]=1;
//>>excludeEnd("ctx");
};
$8=self._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["contents"]=3;
//>>excludeEnd("ctx");
$7=$recv($8)._right();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["right"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._respondsTo_("report:");
if($core.assert($6)){
$recv($recv(self._contents())._right())._report_(aReport);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"report:",{aReport:aReport},$globals.SlDetailsFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReport"],
source: "report: aReport\x0a\x0a\x09report := aReport.\x0a\x09\x0a\x09(self contents left respondsTo: #report:) ifTrue: [ self contents left report: aReport ].\x0a\x09(self contents right respondsTo: #report:) ifTrue: [ self contents right report: aReport ].\x0a\x09\x22self map: #report: withArguments: { aReport }.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "respondsTo:", "left", "contents", "report:", "right"]
}),
$globals.SlDetailsFrame);


$core.addMethod(
$core.method({
selector: "withReport:",
protocol: 'instance creation',
fn: function (aBugReport){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._report_(aBugReport);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withReport:",{aBugReport:aBugReport},$globals.SlDetailsFrame.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBugReport"],
source: "withReport: aBugReport\x0a\x0a\x09^ self new\x0a\x09\x09report: aBugReport;\x0a\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["report:", "new", "yourself"]
}),
$globals.SlDetailsFrame.klass);


$core.addClass('SlHomePage', $globals.SlFrame, [], 'ShoreLine-Pages');
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
$globals.SlHomePage.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._contents_(self._initializeContents());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlHomePage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x22self contents: 'Home Page'.\x22\x0a\x09self contents: self initializeContents.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "contents:", "initializeContents"]
}),
$globals.SlHomePage);

$core.addMethod(
$core.method({
selector: "initializeContents",
protocol: 'initialization',
fn: function (){
var self=this;
function $ShoreLine(){return $globals.ShoreLine||(typeof ShoreLine=="undefined"?nil:ShoreLine)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$5,$4,$6,$1;
$1=(function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._with_("hello home page!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return $recv(html)._ol_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($ShoreLine())._routes())._do_((function(eachRoute){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(html)._li_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$2=$recv(html)._a();
$3=$2;
$5=$recv(eachRoute)._key();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["key"]=1;
//>>excludeEnd("ctx");
$4="#".__comma($5);
$recv($3)._href_($4);
$6=$recv($2)._with_($recv(eachRoute)._key());
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({eachRoute:eachRoute},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeContents",{},$globals.SlHomePage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeContents\x0a\x0a\x09^ [ :html |\x0a\x09\x09html with: 'hello home page!'.\x0a\x09\x09html ol: [\x0a\x09\x09\x09ShoreLine routes do: [ :eachRoute |\x0a\x09\x09\x09\x09html li: [ html a href: '#', eachRoute key; with: eachRoute key ] ] ] ]",
referencedClasses: ["ShoreLine"],
//>>excludeEnd("ide");
messageSends: ["with:", "ol:", "do:", "routes", "li:", "href:", "a", ",", "key"]
}),
$globals.SlHomePage);



$core.addClass('SlListFrame', $globals.SlFrame, [], 'ShoreLine-Pages');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlTwoColumnLayout(){return $globals.SlTwoColumnLayout||(typeof SlTwoColumnLayout=="undefined"?nil:SlTwoColumnLayout)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlListFrame.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($SlTwoColumnLayout())._new();
$recv($1)._left_(self._initializeControlPanel());
$recv($1)._right_(self._initializeViewPanel());
$2=$recv($1)._yourself();
self._contents_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlListFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self contents: (SlTwoColumnLayout new\x0a\x09\x09left: self initializeControlPanel;\x0a\x09\x09right: self initializeViewPanel;\x0a\x09\x09yourself)",
referencedClasses: ["SlTwoColumnLayout"],
//>>excludeEnd("ide");
messageSends: ["initialize", "contents:", "left:", "new", "initializeControlPanel", "right:", "initializeViewPanel", "yourself"]
}),
$globals.SlListFrame);

$core.addMethod(
$core.method({
selector: "initializeControlPanel",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlTabbedContainer(){return $globals.SlTabbedContainer||(typeof SlTabbedContainer=="undefined"?nil:SlTabbedContainer)}
function $SlFilterList(){return $globals.SlFilterList||(typeof SlFilterList=="undefined"?nil:SlFilterList)}
function $SlProjectList(){return $globals.SlProjectList||(typeof SlProjectList=="undefined"?nil:SlProjectList)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1;
$2=$recv($SlTabbedContainer())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$3=$2;
$4=$recv($SlFilterList())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($3)._tabNamed_with_("Filters",$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tabNamed:with:"]=1;
//>>excludeEnd("ctx");
$recv($2)._tabNamed_with_("Projects",$recv($SlProjectList())._new());
$5=$recv($2)._yourself();
$1=$5;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeControlPanel",{},$globals.SlListFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeControlPanel\x0a\x0a\x09^ SlTabbedContainer new\x0a\x09\x09tabNamed: 'Filters' with: SlFilterList new;\x0a\x09\x09tabNamed: 'Projects' with: SlProjectList new;\x0a\x09\x09\x22tabNamed: 'SourceArea' with: SourceArea new;\x22\x0a\x09\x09yourself",
referencedClasses: ["SlTabbedContainer", "SlFilterList", "SlProjectList"],
//>>excludeEnd("ide");
messageSends: ["tabNamed:with:", "new", "yourself"]
}),
$globals.SlListFrame);

$core.addMethod(
$core.method({
selector: "initializeViewPanel",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlReportList(){return $globals.SlReportList||(typeof SlReportList=="undefined"?nil:SlReportList)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($SlReportList())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeViewPanel",{},$globals.SlListFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeViewPanel\x0a\x0a\x09^ SlReportList new",
referencedClasses: ["SlReportList"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.SlListFrame);



$core.addClass('SlStackTraceFrame', $globals.SlFrame, [], 'ShoreLine-Pages');
$core.addMethod(
$core.method({
selector: "displayList",
protocol: 'actions',
fn: function (){
var self=this;
function $SlStackTraceList(){return $globals.SlStackTraceList||(typeof SlStackTraceList=="undefined"?nil:SlStackTraceList)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@contents"]=$recv($SlStackTraceList())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"displayList",{},$globals.SlStackTraceFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayList\x0a\x0a\x09contents := SlStackTraceList new.",
referencedClasses: ["SlStackTraceList"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.SlStackTraceFrame);

$core.addMethod(
$core.method({
selector: "displayTrace:",
protocol: 'actions',
fn: function (traceId){
var self=this;
function $SlStackTrace(){return $globals.SlStackTrace||(typeof SlStackTrace=="undefined"?nil:SlStackTrace)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@contents"]=$recv($SlStackTrace())._withId_(traceId);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"displayTrace:",{traceId:traceId},$globals.SlStackTraceFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["traceId"],
source: "displayTrace: traceId\x0a\x0a\x09contents := SlStackTrace withId: traceId.",
referencedClasses: ["SlStackTrace"],
//>>excludeEnd("ide");
messageSends: ["withId:"]
}),
$globals.SlStackTraceFrame);

$core.addMethod(
$core.method({
selector: "pushArgs:",
protocol: 'arguments',
fn: function (aDictionary){
var self=this;
var id;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aDictionary)._at_ifPresent_ifAbsent_("id",(function(traceId){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._displayTrace_(traceId);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({traceId:traceId},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._displayList();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pushArgs:",{aDictionary:aDictionary,id:id},$globals.SlStackTraceFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "pushArgs: aDictionary\x0a\x09| id |\x0a\x09\x0a\x09aDictionary at: #id\x0a\x09\x09ifPresent: [ :traceId | self displayTrace: traceId ]\x0a\x09\x09ifAbsent: [ self displayList ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:ifAbsent:", "displayTrace:", "displayList"]
}),
$globals.SlStackTraceFrame);



$core.addClass('SlToolbarFrame', $globals.SlFrame, ['toolbar'], 'ShoreLine-Pages');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlToolbar(){return $globals.SlToolbar||(typeof SlToolbar=="undefined"?nil:SlToolbar)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlToolbarFrame.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@toolbar"]=$recv($SlToolbar())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlToolbarFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09toolbar := SlToolbar new.",
referencedClasses: ["SlToolbar"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.SlToolbarFrame);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(html)._with_(self["@toolbar"]);
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlToolbarFrame.superclass.fn.prototype._renderOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.SlToolbarFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html with: toolbar.\x09\x09\x0a\x09super renderOn: html.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "renderOn:"]
}),
$globals.SlToolbarFrame);



$core.addClass('SlMainFrame', $globals.SlToolbarFrame, ['pages'], 'ShoreLine-Pages');
$core.addMethod(
$core.method({
selector: "detailsPageEvent:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@contents"])._report_($recv(anAnnouncement)._report());
self._displayPage_("details");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"detailsPageEvent:",{anAnnouncement:anAnnouncement},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "detailsPageEvent: anAnnouncement\x0a\x0a\x09contents report: anAnnouncement report.\x0a\x09self displayPage: #details.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["report:", "report", "displayPage:"]
}),
$globals.SlMainFrame);

$core.addMethod(
$core.method({
selector: "displayPage:",
protocol: 'actions',
fn: function (aSymbol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._displayPage_withArgs_(aSymbol,[]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"displayPage:",{aSymbol:aSymbol},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "displayPage: aSymbol\x0a\x0a\x09self displayPage: aSymbol withArgs: {}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["displayPage:withArgs:"]
}),
$globals.SlMainFrame);

$core.addMethod(
$core.method({
selector: "displayPage:withArgs:",
protocol: 'actions',
fn: function (aSymbol,aDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._contents_(self._pageAt_(aSymbol));
$recv(self["@contents"])._pushArgs_(aDictionary);
self._updateContents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"displayPage:withArgs:",{aSymbol:aSymbol,aDictionary:aDictionary},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol", "aDictionary"],
source: "displayPage: aSymbol withArgs: aDictionary\x0a\x0a\x09self contents: (self pageAt: aSymbol).\x0a\x09contents pushArgs: aDictionary.\x0a\x09\x0a\x09self updateContents.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "pageAt:", "pushArgs:", "updateContents"]
}),
$globals.SlMainFrame);

$core.addMethod(
$core.method({
selector: "displayReportDetails:",
protocol: 'actions',
fn: function (aReport){
var self=this;
function $SlDetailsFrame(){return $globals.SlDetailsFrame||(typeof SlDetailsFrame=="undefined"?nil:SlDetailsFrame)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@pages"])._at_put_("details",$recv($SlDetailsFrame())._withReport_(aReport));
self._displayPage_("details");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"displayReportDetails:",{aReport:aReport},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReport"],
source: "displayReportDetails: aReport\x0a\x0a\x09pages at: #details put: (SlDetailsFrame withReport: aReport).\x0a\x09self displayPage: #details.",
referencedClasses: ["SlDetailsFrame"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "withReport:", "displayPage:"]
}),
$globals.SlMainFrame);

$core.addMethod(
$core.method({
selector: "errorPageEvent:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._displayErrorPage_("error");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorPageEvent:",{anAnnouncement:anAnnouncement},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "errorPageEvent: anAnnouncement\x0a\x09\x0a\x09self displayErrorPage: #error",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["displayErrorPage:"]
}),
$globals.SlMainFrame);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlMainFrame.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@pages"]=$recv($Dictionary())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($recv(self._class())._pages())._do_((function(eachPage){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@pages"])._at_put_($recv(eachPage)._key(),$recv($recv(eachPage)._value())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachPage:eachPage},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09pages := Dictionary new.\x0a\x09\x0a\x09self class pages do: [ :eachPage |\x0a\x09\x09pages at: eachPage key put: eachPage value new ].",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "do:", "pages", "class", "at:put:", "key", "value"]
}),
$globals.SlMainFrame);

$core.addMethod(
$core.method({
selector: "pageAt:",
protocol: 'accessing',
fn: function (aSymbol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pages"])._at_(aSymbol);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pageAt:",{aSymbol:aSymbol},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "pageAt: aSymbol\x0a\x0a\x09^ pages at: aSymbol \x22ifAbsent: []\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.SlMainFrame);

$core.addMethod(
$core.method({
selector: "pageNotFound:",
protocol: 'actions',
fn: function (args){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=$recv("Page ".__comma($recv(args)._at_("url"))).__comma(" not found");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$3="message".__minus_gt($4);
$2=[$3];
$1=$recv($Dictionary())._from_($2);
self._displayPage_withArgs_("notFound",$1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pageNotFound:",{args:args},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["args"],
source: "pageNotFound: args\x0a\x0a\x09self displayPage: #notFound withArgs: (Dictionary from: { #message -> ('Page ', (args at: #url), ' not found') })",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["displayPage:withArgs:", "from:", "->", ",", "at:"]
}),
$globals.SlMainFrame);

$core.addMethod(
$core.method({
selector: "registerEvents",
protocol: 'events',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlMainFrame.superclass.fn.prototype._registerEvents.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($recv(self._class())._events())._do_((function(eventAssociation){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._announcer())._on_send_to_($recv(eventAssociation)._key(),$recv(eventAssociation)._value(),self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eventAssociation:eventAssociation},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerEvents",{},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerEvents\x0a\x0a\x09super registerEvents.\x0a\x09\x0a\x09self class events do: [ :eventAssociation |\x0a\x09\x09self announcer\x0a\x09\x09\x09on: eventAssociation key\x0a\x09\x09\x09send: eventAssociation value\x0a\x09\x09\x09to: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["registerEvents", "do:", "events", "class", "on:send:to:", "announcer", "key", "value"]
}),
$globals.SlMainFrame);

$core.addMethod(
$core.method({
selector: "reportSelectedEvent:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._displayPage_("details");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reportSelectedEvent:",{anAnnouncement:anAnnouncement},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "reportSelectedEvent: anAnnouncement\x0a\x0a\x09self displayPage: #details",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["displayPage:"]
}),
$globals.SlMainFrame);


$core.addMethod(
$core.method({
selector: "events",
protocol: 'configuration',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "events\x0a\x0a\x09^{}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlMainFrame.klass);

$core.addMethod(
$core.method({
selector: "pages",
protocol: 'configuration',
fn: function (){
var self=this;
function $SlHomePage(){return $globals.SlHomePage||(typeof SlHomePage=="undefined"?nil:SlHomePage)}
function $SlDetailsFrame(){return $globals.SlDetailsFrame||(typeof SlDetailsFrame=="undefined"?nil:SlDetailsFrame)}
function $SlStackTraceFrame(){return $globals.SlStackTraceFrame||(typeof SlStackTraceFrame=="undefined"?nil:SlStackTraceFrame)}
function $SlMessageFrame(){return $globals.SlMessageFrame||(typeof SlMessageFrame=="undefined"?nil:SlMessageFrame)}
function $SlErrorFrame(){return $globals.SlErrorFrame||(typeof SlErrorFrame=="undefined"?nil:SlErrorFrame)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1;
$2="home".__minus_gt($SlHomePage());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$3="details".__minus_gt($SlDetailsFrame());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$4="stacktraces".__minus_gt($SlStackTraceFrame());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$5="test".__minus_gt($SlMessageFrame());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$1=[$2,$3,$4,$5,"notFound".__minus_gt($SlErrorFrame())];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pages",{},$globals.SlMainFrame.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pages\x0a\x0a\x09^ {\x0a\x09\x09#home -> SlHomePage.\x0a\x09\x09\x22#list -> SlListFrame.\x22\x0a\x09\x09#details -> SlDetailsFrame.\x0a\x09\x09\x22#images -> SlImagesFrame.\x0a\x09\x09#stacktracelist -> SlStackTraceListView.\x22\x0a\x09\x09#stacktraces -> SlStackTraceFrame.\x0a\x09\x09\x0a\x09\x09#test -> SlMessageFrame.\x0a\x09\x09#notFound -> SlErrorFrame\x0a\x09}",
referencedClasses: ["SlHomePage", "SlDetailsFrame", "SlStackTraceFrame", "SlMessageFrame", "SlErrorFrame"],
//>>excludeEnd("ide");
messageSends: ["->"]
}),
$globals.SlMainFrame.klass);

});
