define("shoreline/ShoreLine-Widgets", ["amber/boot", "shoreline/ShoreLine-Pages", "shoreline/ShoreLine-Widgets-Core", "shoreline/ShoreLine-Core", "amber_core/Kernel-Collections"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('ShoreLine-Widgets');
$core.packages["ShoreLine-Widgets"].innerEval = function (expr) { return eval(expr); };
$core.packages["ShoreLine-Widgets"].transport = {"type":"amd","amdNamespace":"shoreline"};

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



$core.addClass('SlSummaryWidget', $globals.SlWidget, ['data'], 'ShoreLine-Widgets');
$core.addMethod(
$core.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
function $TDClientProxy(){return $globals.TDClientProxy||(typeof TDClientProxy=="undefined"?nil:TDClientProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@data"];
if(($receiver = $2) == null || $receiver.isNil){
self["@data"]=$recv($TDClientProxy())._on_("/stacktraces");
$1=self["@data"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"data",{},$globals.SlSummaryWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "data\x0a\x0a\x09^ data ifNil: [ data := TDClientProxy on: '/stacktraces' ]",
referencedClasses: ["TDClientProxy"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:"]
}),
$globals.SlSummaryWidget);

$core.addMethod(
$core.method({
selector: "dataDo:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
var proxy;
function $SlSession(){return $globals.SlSession||(typeof SlSession=="undefined"?nil:SlSession)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($SlSession())._current())._data())._with_do_("stacktraces",aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataDo:",{aBlock:aBlock,proxy:proxy},$globals.SlSummaryWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "dataDo: aBlock\x0a\x09| proxy |\x0a\x09\x0a\x09^ SlSession current data with: #stacktraces do: aBlock",
referencedClasses: ["SlSession"],
//>>excludeEnd("ide");
messageSends: ["with:do:", "data", "current"]
}),
$globals.SlSummaryWidget);

$core.addMethod(
$core.method({
selector: "renderAuthor:withIndex:on:",
protocol: 'rendering',
fn: function (anAuthor,aNumber,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv($recv(html)._tr())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["td"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._tag_("b"))._with_(aNumber);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$2=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["td"]=2;
//>>excludeEnd("ctx");
$recv($2)._with_($recv(anAuthor)._associationValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
return $recv($recv(html)._td())._with_($recv(anAuthor)._key());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderAuthor:withIndex:on:",{anAuthor:anAuthor,aNumber:aNumber,html:html},$globals.SlSummaryWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAuthor", "aNumber", "html"],
source: "renderAuthor: anAuthor withIndex: aNumber on: html\x0a\x0a\x09html tr with: [\x0a\x09\x09html td with: [ (html tag: #b) with: aNumber ].\x0a\x09\x09html td with: anAuthor associationValue.\x0a\x09\x09html td with: anAuthor key ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "tr", "td", "tag:", "associationValue", "key"]
}),
$globals.SlSummaryWidget);

$core.addMethod(
$core.method({
selector: "renderAuthors:on:",
protocol: 'rendering',
fn: function (aDictionary,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$6,$4,$7,$9,$11,$10,$8,$2;
$recv($recv(aDictionary)._at_("authors"))._then_((function(collection){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(collection)._contents())._then_((function(authors){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("summary-users panel panel-default");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($3)._class_("panel-heading");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$5=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["div"]=3;
//>>excludeEnd("ctx");
$recv($5)._class_("panel-title");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$6=$recv($5)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx6) {
//>>excludeEnd("ctx");
return $recv(html)._h5_("Top Reporters");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4;
$7=$recv(html)._div();
$recv($7)._class_("panel-body");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
$8=$recv($7)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$9=$recv(html)._table();
$recv($9)._class_("table table-hover table-striped");
$10=$recv($9)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx6) {
//>>excludeEnd("ctx");
$recv($recv(html)._thead())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx7) {
//>>excludeEnd("ctx");
return $recv($recv(html)._tr())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx8) {
//>>excludeEnd("ctx");
$11=$recv(html)._th();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx8.sendIdx["th"]=1;
//>>excludeEnd("ctx");
$recv($11)._with_("User Name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx8.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
return $recv($recv(html)._th())._with_("Number of Traces");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx8.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx8) {$ctx8.fillBlock({},$ctx7,9)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx7.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx7) {$ctx7.fillBlock({},$ctx6,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx6.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
return $recv($recv(html)._tbody())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx7) {
//>>excludeEnd("ctx");
return $recv(authors)._withIndexDo_((function(each,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx8) {
//>>excludeEnd("ctx");
return self._renderAuthor_withIndex_on_(each,i,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx8) {$ctx8.fillBlock({each:each,i:i},$ctx7,11)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx7) {$ctx7.fillBlock({},$ctx6,10)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
return $10;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
return $8;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({authors:authors},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({collection:collection},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["then:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderAuthors:on:",{aDictionary:aDictionary,html:html},$globals.SlSummaryWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary", "html"],
source: "renderAuthors: aDictionary on: html\x0a\x0a\x09(aDictionary at: #authors) then: [ :collection |\x0a\x09\x09collection contents then: [ :authors |\x0a\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'summary-users panel panel-default';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09class: 'panel-heading';\x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'panel-title';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: [ html h5: 'Top Reporters' ] ].\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09class: 'panel-body';\x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09html table\x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'table table-hover table-striped';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09html thead with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html th with: 'User Name'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html th with: 'Number of Traces' ] ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09html tbody with: [ authors withIndexDo: [ :each :i |\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09self renderAuthor: each withIndex: i on: html ] ] ] ] ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["then:", "at:", "contents", "class:", "div", "with:", "h5:", "table", "thead", "tr", "th", "tbody", "withIndexDo:", "renderAuthor:withIndex:on:"]
}),
$globals.SlSummaryWidget);

$core.addMethod(
$core.method({
selector: "renderClasses:on:",
protocol: 'rendering',
fn: function (aDictionary,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$2;
$recv($recv(aDictionary)._at_("classes"))._then_((function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(r)._contents())._then_((function(classes){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(html)._div_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$recv(html)._h5_("The troublesome classes");
$1=$recv(html)._table();
$recv($1)._class_("table");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$recv($recv(html)._thead())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx6) {
//>>excludeEnd("ctx");
$3=$recv(html)._tr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx6.sendIdx["tr"]=1;
//>>excludeEnd("ctx");
return $recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx7) {
//>>excludeEnd("ctx");
$4=$recv(html)._th();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx7.sendIdx["th"]=1;
//>>excludeEnd("ctx");
$recv($4)._with_("Class Name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx7.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
return $recv($recv(html)._th())._with_("Number of Stack Traces");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx7.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx7) {$ctx7.fillBlock({},$ctx6,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx6.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $recv($recv(html)._tbody())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx6) {
//>>excludeEnd("ctx");
return $recv(classes)._do_((function(eachClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx7) {
//>>excludeEnd("ctx");
return $recv($recv(html)._tr())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx8) {
//>>excludeEnd("ctx");
$5=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx8.sendIdx["td"]=1;
//>>excludeEnd("ctx");
$recv($5)._with_($recv(eachClass)._associationValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx8.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
return $recv($recv(html)._td())._with_($recv(eachClass)._key());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx8) {$ctx8.fillBlock({},$ctx7,9)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx7.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx7) {$ctx7.fillBlock({eachClass:eachClass},$ctx6,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({classes:classes},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["then:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderClasses:on:",{aDictionary:aDictionary,html:html},$globals.SlSummaryWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary", "html"],
source: "renderClasses: aDictionary on: html\x0a\x0a\x09(aDictionary at: #classes) then: [ :r | r contents then: [ :classes |\x0a\x09\x09html div: [\x0a\x09\x09\x09html h5: 'The troublesome classes'.\x0a\x09\x09\x09html table\x0a\x09\x09\x09\x09class: 'table';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html thead with: [\x0a\x09\x09\x09\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09\x09\x09\x09html th with: 'Class Name'.\x0a\x09\x09\x09\x09\x09\x09\x09html th with: 'Number of Stack Traces' ] ].\x0a\x09\x09\x09\x09\x09html tbody with: [\x0a\x09\x09\x09\x09\x09\x09classes do: [ :eachClass | html tr with: [\x0a\x09\x09\x09\x09\x09\x09\x09html td with: eachClass associationValue.\x0a\x09\x09\x09\x09\x09\x09\x09html td with: eachClass key ] ] ] ] ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["then:", "at:", "contents", "div:", "h5:", "class:", "table", "with:", "thead", "tr", "th", "tbody", "do:", "td", "associationValue", "key"]
}),
$globals.SlSummaryWidget);

$core.addMethod(
$core.method({
selector: "renderNumberOfTraces:on:",
protocol: 'rendering',
fn: function (aDictionary,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aDictionary)._at_("numberOfTraces"))._then_((function(number){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(html)._div_($recv($recv(number)._asString()).__comma(" stack traces in the last 7 days"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({number:number},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderNumberOfTraces:on:",{aDictionary:aDictionary,html:html},$globals.SlSummaryWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary", "html"],
source: "renderNumberOfTraces: aDictionary on: html\x0a\x0a\x09(aDictionary at: #numberOfTraces) then: [ :number | html div: number asString, ' stack traces in the last 7 days' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["then:", "at:", "div:", ",", "asString"]
}),
$globals.SlSummaryWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$6,$4,$7,$9,$10,$11,$12,$8;
$1=self._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["data"]=1;
//>>excludeEnd("ctx");
$recv($1)._connect();
$2=self._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["data"]=2;
//>>excludeEnd("ctx");
$recv($2)._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._h2_("Summay widget");
return $recv($recv(self._data())._summary())._then_((function(dictionary){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($3)._class_("row");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$5=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($5)._class_("col-xs-4");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$6=$recv($5)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return self._renderNumberOfTraces_on_(dictionary,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$4;
$7=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["div"]=3;
//>>excludeEnd("ctx");
$recv($7)._class_("row");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$8=$recv($7)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$9=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["div"]=4;
//>>excludeEnd("ctx");
$recv($9)._class_("col-xs-4");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
$10=$recv($9)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return self._renderAuthors_on_(dictionary,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$10;
$11=$recv(html)._div();
$recv($11)._class_("col-xs-4");
$12=$recv($11)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return self._renderClasses_on_(dictionary,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,7)});
//>>excludeEnd("ctx");
}));
return $12;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $8;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({dictionary:dictionary},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["then:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.SlSummaryWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09self data connect.\x0a\x09self data then: [\x0a\x09\x09html h2: 'Summay widget'.\x0a\x09\x09self data summary then: [ :dictionary |\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'row';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09class: 'col-xs-4';\x0a\x09\x09\x09\x09\x09\x09with: [ self renderNumberOfTraces: dictionary on: html ] ].\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'row';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09class: 'col-xs-4';\x0a\x09\x09\x09\x09\x09\x09with: [ self renderAuthors: dictionary on: html ].\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09class: 'col-xs-4';\x0a\x09\x09\x09\x09\x09\x09with: [ self renderClasses: dictionary on: html ] ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["connect", "data", "then:", "h2:", "summary", "class:", "div", "with:", "renderNumberOfTraces:on:", "renderAuthors:on:", "renderClasses:on:"]
}),
$globals.SlSummaryWidget);



$core.addClass('SlTabbedContainer', $globals.SlContainer, [], 'ShoreLine-Widgets');
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
$globals.SlTabbedContainer.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@contents"]=$recv($Dictionary())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlTabbedContainer)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("tab-contents");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@contents"])._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._class_("tab-pane");
$recv($3)._id_(key);
$4=$recv($3)._with_(value);
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},$globals.SlTabbedContainer)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._ul();
$recv($1)._class_("nav nav-tabs");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@contents"])._keysDo_((function(key){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$3=$recv(html)._a();
$recv($3)._href_("#".__comma(key));
$recv($3)._onClick_($recv((function(this_,event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$recv(event)._preventDefault();
return $recv(this_)._tab_("show");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({this_:this_,event:event},$ctx4,4)});
//>>excludeEnd("ctx");
}))._currySelf());
$recv($3)._at_put_("data-toggle","tab");
$4=$recv($3)._with_(key);
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({key:key},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderNavbarOn:",{html:html},$globals.SlTabbedContainer)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._renderContentsOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.SlTabbedContainer)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._contents())._at_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tabNamed:",{aString:aString},$globals.SlTabbedContainer)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._contents())._at_put_(aString,aWidget);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tabNamed:with:",{aString:aString,aWidget:aWidget},$globals.SlTabbedContainer)});
//>>excludeEnd("ctx");
},
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
