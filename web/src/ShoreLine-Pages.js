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



$core.addClass('SlPage', $globals.SlFrame, [], 'ShoreLine-Pages');

$core.addMethod(
$core.method({
selector: "enabled",
protocol: 'accessing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "enabled\x0a\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlPage.klass);

$core.addMethod(
$core.method({
selector: "id",
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
}, function($ctx1) {$ctx1.fill(self,"id",{},$globals.SlPage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SlPage.klass);

$core.addMethod(
$core.method({
selector: "order",
protocol: 'accessing',
fn: function (){
var self=this;
return (10);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "order\x0a\x0a\x09^ 10",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlPage.klass);

$core.addMethod(
$core.method({
selector: "path",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._routes())._first();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"path",{},$globals.SlPage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "path\x0a\x0a\x09^ self routes first",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["first", "routes"]
}),
$globals.SlPage.klass);

$core.addMethod(
$core.method({
selector: "routes",
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
}, function($ctx1) {$ctx1.fill(self,"routes",{},$globals.SlPage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "routes\x0a\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SlPage.klass);

$core.addMethod(
$core.method({
selector: "showInMenu",
protocol: 'accessing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showInMenu\x0a\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlPage.klass);

$core.addMethod(
$core.method({
selector: "title",
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
}, function($ctx1) {$ctx1.fill(self,"title",{},$globals.SlPage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SlPage.klass);


$core.addClass('SlClassPage', $globals.SlPage, [], 'ShoreLine-Pages');
$core.addMethod(
$core.method({
selector: "displayClass:",
protocol: 'actions',
fn: function (className){
var self=this;
function $SlClassWidget(){return $globals.SlClassWidget||(typeof SlClassWidget=="undefined"?nil:SlClassWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@contents"]=$recv($SlClassWidget())._withClass_(className);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"displayClass:",{className:className},$globals.SlClassPage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["className"],
source: "displayClass: className\x0a\x0a\x09contents := SlClassWidget withClass: className",
referencedClasses: ["SlClassWidget"],
//>>excludeEnd("ide");
messageSends: ["withClass:"]
}),
$globals.SlClassPage);

$core.addMethod(
$core.method({
selector: "displayList",
protocol: 'actions',
fn: function (){
var self=this;
function $SlClassListWidget(){return $globals.SlClassListWidget||(typeof SlClassListWidget=="undefined"?nil:SlClassListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@contents"]=$recv($SlClassListWidget())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"displayList",{},$globals.SlClassPage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayList\x0a\x0a\x09contents := SlClassListWidget new",
referencedClasses: ["SlClassListWidget"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.SlClassPage);

$core.addMethod(
$core.method({
selector: "initializeContents",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlClassListWidget(){return $globals.SlClassListWidget||(typeof SlClassListWidget=="undefined"?nil:SlClassListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(html)._with_($recv($SlClassListWidget())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeContents",{},$globals.SlClassPage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeContents\x0a\x0a\x09^ [ :html |\x0a\x09\x09html with: SlClassListWidget new ]",
referencedClasses: ["SlClassListWidget"],
//>>excludeEnd("ide");
messageSends: ["with:", "new"]
}),
$globals.SlClassPage);

$core.addMethod(
$core.method({
selector: "pushArgs:",
protocol: 'arguments',
fn: function (aDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aDictionary)._at_ifPresent_ifAbsent_("className",(function(className){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._displayClass_(className);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({className:className},$ctx1,1)});
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
}, function($ctx1) {$ctx1.fill(self,"pushArgs:",{aDictionary:aDictionary},$globals.SlClassPage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "pushArgs: aDictionary\x0a\x09\x0a\x09aDictionary at: #className\x0a\x09\x09ifPresent: [ :className | self displayClass: className ]\x0a\x09\x09ifAbsent: [ self displayList ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:ifAbsent:", "displayClass:", "displayList"]
}),
$globals.SlClassPage);


$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "class";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x0a\x09^ #class",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlClassPage.klass);

$core.addMethod(
$core.method({
selector: "order",
protocol: 'accessing',
fn: function (){
var self=this;
return (30);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "order\x0a\x0a\x09^ 30",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlClassPage.klass);

$core.addMethod(
$core.method({
selector: "routes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["/classes","/classes/{className}"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "routes\x0a\x0a\x09^ { '/classes'.\x0a\x09\x09'/classes/{className}' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlClassPage.klass);

$core.addMethod(
$core.method({
selector: "showInMenu",
protocol: 'accessing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showInMenu\x0a\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlClassPage.klass);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x0a\x09^ 'Classes'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlClassPage.klass);


$core.addClass('SlHomePage', $globals.SlPage, [], 'ShoreLine-Pages');
$core.addMethod(
$core.method({
selector: "initializeContents",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlSummaryWidget(){return $globals.SlSummaryWidget||(typeof SlSummaryWidget=="undefined"?nil:SlSummaryWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(function(html){
var summaryCanvas;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._h1_("Home Page");
summaryCanvas=$recv($recv(html)._div())._id_("summary-widget");
summaryCanvas;
return $recv($recv($SlSummaryWidget())._new())._appendToJQuery_($recv(summaryCanvas)._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html,summaryCanvas:summaryCanvas},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeContents",{},$globals.SlHomePage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeContents\x0a\x0a\x09^ [ :html | | summaryCanvas |\x0a\x09\x09html h1: 'Home Page'.\x0a\x09\x09summaryCanvas := html div id: 'summary-widget'.\x0a\x09\x09SlSummaryWidget new appendToJQuery: summaryCanvas asJQuery ]",
referencedClasses: ["SlSummaryWidget"],
//>>excludeEnd("ide");
messageSends: ["h1:", "id:", "div", "appendToJQuery:", "new", "asJQuery"]
}),
$globals.SlHomePage);


$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "home";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x0a\x09^ #home",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlHomePage.klass);

$core.addMethod(
$core.method({
selector: "order",
protocol: 'accessing',
fn: function (){
var self=this;
return (1);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "order\x0a\x0a\x09^ 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlHomePage.klass);

$core.addMethod(
$core.method({
selector: "routes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["/"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "routes\x0a\x0a\x09^ { '/' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlHomePage.klass);

$core.addMethod(
$core.method({
selector: "showInMenu",
protocol: 'accessing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showInMenu\x0a\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlHomePage.klass);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Home";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x0a\x09^ 'Home'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlHomePage.klass);


$core.addClass('SlStackTracePage', $globals.SlPage, [], 'ShoreLine-Pages');
$core.addMethod(
$core.method({
selector: "displayList",
protocol: 'actions',
fn: function (){
var self=this;
function $SlStackTraceListWidget(){return $globals.SlStackTraceListWidget||(typeof SlStackTraceListWidget=="undefined"?nil:SlStackTraceListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@contents"]=$recv($SlStackTraceListWidget())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"displayList",{},$globals.SlStackTracePage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayList\x0a\x0a\x09contents := SlStackTraceListWidget new.",
referencedClasses: ["SlStackTraceListWidget"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.SlStackTracePage);

$core.addMethod(
$core.method({
selector: "displayTrace:",
protocol: 'actions',
fn: function (traceId){
var self=this;
function $SlStackTraceWidget(){return $globals.SlStackTraceWidget||(typeof SlStackTraceWidget=="undefined"?nil:SlStackTraceWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@contents"]=$recv($SlStackTraceWidget())._withId_(traceId);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"displayTrace:",{traceId:traceId},$globals.SlStackTracePage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["traceId"],
source: "displayTrace: traceId\x0a\x0a\x09contents := SlStackTraceWidget withId: traceId.",
referencedClasses: ["SlStackTraceWidget"],
//>>excludeEnd("ide");
messageSends: ["withId:"]
}),
$globals.SlStackTracePage);

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
}, function($ctx1) {$ctx1.fill(self,"pushArgs:",{aDictionary:aDictionary,id:id},$globals.SlStackTracePage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "pushArgs: aDictionary\x0a\x09| id |\x0a\x09\x0a\x09aDictionary at: #id\x0a\x09\x09ifPresent: [ :traceId | self displayTrace: traceId ]\x0a\x09\x09ifAbsent: [ self displayList ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:ifAbsent:", "displayTrace:", "displayList"]
}),
$globals.SlStackTracePage);


$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "stacktraces";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x0a\x09^ #stacktraces",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlStackTracePage.klass);

$core.addMethod(
$core.method({
selector: "order",
protocol: 'accessing',
fn: function (){
var self=this;
return (10);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "order\x0a\x0a\x09^ 10",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlStackTracePage.klass);

$core.addMethod(
$core.method({
selector: "routes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["/stacktraces","/stacktraces/{id}"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "routes\x0a\x0a\x09^ {\x0a\x09\x09'/stacktraces'.\x0a\x09\x09'/stacktraces/{id}' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlStackTracePage.klass);

$core.addMethod(
$core.method({
selector: "showInMenu",
protocol: 'accessing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showInMenu\x0a\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlStackTracePage.klass);

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
$globals.SlStackTracePage.klass);


$core.addClass('SlTestPage', $globals.SlPage, [], 'ShoreLine-Pages');
$core.addMethod(
$core.method({
selector: "initializeContents",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlMessageFrame(){return $globals.SlMessageFrame||(typeof SlMessageFrame=="undefined"?nil:SlMessageFrame)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($SlMessageFrame())._new();
$recv($2)._message_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(html)._h2_("Test OK");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeContents",{},$globals.SlTestPage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeContents\x0a\x0a\x09^ SlMessageFrame new\x0a\x09\x09message: [ :html | html h2: 'Test OK' ];\x0a\x09\x09yourself",
referencedClasses: ["SlMessageFrame"],
//>>excludeEnd("ide");
messageSends: ["message:", "new", "h2:", "yourself"]
}),
$globals.SlTestPage);


$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "test";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x0a\x09^ #test",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlTestPage.klass);

$core.addMethod(
$core.method({
selector: "order",
protocol: 'accessing',
fn: function (){
var self=this;
return (100);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "order\x0a\x0a\x09^ 100",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlTestPage.klass);

$core.addMethod(
$core.method({
selector: "routes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["/test"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "routes\x0a\x0a\x09^ { '/test' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlTestPage.klass);

$core.addMethod(
$core.method({
selector: "showInMenu",
protocol: 'accessing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showInMenu\x0a\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlTestPage.klass);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Test";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x0a\x09^ 'Test'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlTestPage.klass);


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
self["@toolbar"]=$recv($SlToolbar())._withItems_(self._toolbarItems());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlToolbarFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09toolbar := SlToolbar withItems: self toolbarItems.",
referencedClasses: ["SlToolbar"],
//>>excludeEnd("ide");
messageSends: ["initialize", "withItems:", "toolbarItems"]
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

$core.addMethod(
$core.method({
selector: "toolbarItems",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toolbarItems\x0a\x0a\x09^ {}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlToolbarFrame);



$core.addClass('SlMainFrame', $globals.SlToolbarFrame, ['pages'], 'ShoreLine-Pages');
$core.addMethod(
$core.method({
selector: "displayPage:",
protocol: 'actions',
fn: function (aSlPage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._displayPage_withArgs_(aSlPage,[]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"displayPage:",{aSlPage:aSlPage},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSlPage"],
source: "displayPage: aSlPage\x0a\x0a\x09self displayPage: aSlPage withArgs: {}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["displayPage:withArgs:"]
}),
$globals.SlMainFrame);

$core.addMethod(
$core.method({
selector: "displayPage:withArgs:",
protocol: 'actions',
fn: function (aSlPage,aDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._displayPageNamed_withArgs_($recv(aSlPage)._id(),aDictionary);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"displayPage:withArgs:",{aSlPage:aSlPage,aDictionary:aDictionary},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSlPage", "aDictionary"],
source: "displayPage: aSlPage withArgs: aDictionary\x0a\x0a\x09self displayPageNamed: aSlPage id withArgs: aDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["displayPageNamed:withArgs:", "id"]
}),
$globals.SlMainFrame);

$core.addMethod(
$core.method({
selector: "displayPageNamed:withArgs:",
protocol: 'actions',
fn: function (aString,aDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._contents_(self._pageAt_(aString));
$recv(self["@contents"])._pushArgs_(aDictionary);
self._updateContents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"displayPageNamed:withArgs:",{aString:aString,aDictionary:aDictionary},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDictionary"],
source: "displayPageNamed: aString withArgs: aDictionary\x0a\x0a\x09self contents: (self pageAt: aString).\x0a\x09contents pushArgs: aDictionary.\x0a\x09\x0a\x09self updateContents.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "pageAt:", "pushArgs:", "updateContents"]
}),
$globals.SlMainFrame);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $ShoreLine(){return $globals.ShoreLine||(typeof ShoreLine=="undefined"?nil:ShoreLine)}
function $SlErrorFrame(){return $globals.SlErrorFrame||(typeof SlErrorFrame=="undefined"?nil:SlErrorFrame)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
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
$recv($recv($ShoreLine())._pages())._do_((function(eachPage){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self["@pages"];
$2=$recv(eachPage)._id();
$3=$recv(eachPage)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=2;
//>>excludeEnd("ctx");
return $recv($1)._at_put_($2,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachPage:eachPage},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@pages"])._at_put_("error",$recv($SlErrorFrame())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09pages := Dictionary new.\x0a\x09\x0a\x09ShoreLine pages do: [ :eachPage |\x0a\x09\x09pages at: eachPage id put: eachPage new ].\x0a\x09pages at: #error put: SlErrorFrame new.\x0a\x09\x22self class pages do: [ :eachPage |\x0a\x09\x09pages at: eachPage key put: eachPage value new ].\x22",
referencedClasses: ["Dictionary", "ShoreLine", "SlErrorFrame"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "do:", "pages", "at:put:", "id"]
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
self._displayPageNamed_withArgs_("error",$1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pageNotFound:",{args:args},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["args"],
source: "pageNotFound: args\x0a\x0a\x09self displayPageNamed: #error withArgs: (Dictionary from: { #message -> ('Page ', (args at: #url), ' not found') })",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["displayPageNamed:withArgs:", "from:", "->", ",", "at:"]
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
selector: "toolbarItems",
protocol: 'accessing',
fn: function (){
var self=this;
function $ShoreLine(){return $globals.ShoreLine||(typeof ShoreLine=="undefined"?nil:ShoreLine)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($ShoreLine())._menuPages();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toolbarItems",{},$globals.SlMainFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toolbarItems\x0a\x0a\x09^ ShoreLine menuPages",
referencedClasses: ["ShoreLine"],
//>>excludeEnd("ide");
messageSends: ["menuPages"]
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

});
