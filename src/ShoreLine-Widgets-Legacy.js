define("shoreline/ShoreLine-Widgets-Legacy", ["amber/boot", "shoreline/ShoreLine-Widgets-Core", "shoreline/ShoreLine-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('ShoreLine-Widgets-Legacy');
$core.packages["ShoreLine-Widgets-Legacy"].innerEval = function (expr) { return eval(expr); };
$core.packages["ShoreLine-Widgets-Legacy"].transport = {"type":"amd","amdNamespace":"shoreline"};

$core.addClass('SlLoadList', $globals.SlOldList, [], 'ShoreLine-Widgets-Legacy');
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
$1=self._extractData_(self._repository());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"data",{},$globals.SlLoadList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extractData:",{jsonData:jsonData},$globals.SlLoadList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aCollection)._select_((function(eachItem){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@filteredItems"])._includes_($recv(eachItem)._id());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachItem:eachItem},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"filteredItemsFrom:",{aCollection:aCollection},$globals.SlLoadList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlLoadList.superclass.fn.prototype._registerEvents.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerEvents",{},$globals.SlLoadList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlLoadList.superclass.fn.prototype._renderContentsOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._onLoadedData_(nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},$globals.SlLoadList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@filteredItems"]=$recv(self._data())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateData",{},$globals.SlLoadList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataUrl",{},$globals.SlLoadList.klass)});
//>>excludeEnd("ctx");
},
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


$core.addClass('SlReportEventList', $globals.SlLoadList, ['report'], 'ShoreLine-Widgets-Legacy');
$core.addMethod(
$core.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (anElement,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$recv(html)._tr();
$recv($1)._class_("item");
$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._itemSelected_(anElement);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["td"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_($recv(anElement)._id());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $recv($recv(html)._td())._with_($recv(anElement)._title());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anElement:anElement,html:html},$globals.SlReportEventList)});
//>>excludeEnd("ctx");
},
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
return self;

},
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


$core.addClass('SlReportList', $globals.SlLoadList, ['filterBlock'], 'ShoreLine-Widgets-Legacy');
$core.addMethod(
$core.method({
selector: "extractData:",
protocol: 'initialization',
fn: function (aJSONObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@filterBlock"];
if(($receiver = $2) == null || $receiver.isNil){
$1=$recv(aJSONObject)._reports();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["reports"]=1;
//>>excludeEnd("ctx");
} else {
$1=$recv($recv(aJSONObject)._reports())._select_(self["@filterBlock"]);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extractData:",{aJSONObject:aJSONObject},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
return self;

},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._filterBlock_($recv(anAnnouncement)._sortBlock());
self._updateContents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"filterEvent:",{anAnnouncement:anAnnouncement},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(window)._location_("#!/report/".__comma($recv(aReport)._id()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"itemSelected:",{aReport:aReport},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=$recv(anAnnouncement)._showAll();
if($core.assert($1)){
self._updateData();
};
$2=$recv(anAnnouncement)._hideAll();
if($core.assert($2)){
$recv(self["@filteredItems"])._removeAll();
};
$3=$recv(anAnnouncement)._project();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["project"]=1;
//>>excludeEnd("ctx");
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
self._reportsForProject_visible_($recv(anAnnouncement)._project(),false);
};
self._updateContents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"projectSelectedEvent:",{anAnnouncement:anAnnouncement},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
function $SlProjectSelectedAnnouncement(){return $globals.SlProjectSelectedAnnouncement||(typeof SlProjectSelectedAnnouncement=="undefined"?nil:SlProjectSelectedAnnouncement)}
function $SlReportSortedAnnouncement(){return $globals.SlReportSortedAnnouncement||(typeof SlReportSortedAnnouncement=="undefined"?nil:SlReportSortedAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlReportList.superclass.fn.prototype._registerEvents.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self._announcer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announcer"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($SlProjectSelectedAnnouncement(),"projectSelectedEvent:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$recv(self._announcer())._on_send_to_($SlReportSortedAnnouncement(),"sortEvent:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerEvents",{},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$4,$5,$3,$1;
$2=$recv(html)._div();
$recv($2)._class_("report-bar");
$recv($2)._style_("border: 1px solid;");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["style:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(html)._tag_("svg");
$recv($4)._at_put_("width",(100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($4)._at_put_("height",(35));
$5=$recv($4)._style_("border: 1px solid;");
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderCanvasOn:",{html:html},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("controls pull-right");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._div())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._renderResizeOn_(html);
return self._renderZoomControlsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
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
}, function($ctx1) {$ctx1.fill(self,"renderHeadControlsOn:",{html:html},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._tr();
$recv($1)._class_("item");
$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._itemSelected_(aReport);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderReportData_on_(aReport,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{aReport:aReport,html:html},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._table();
$recv($1)._class_("table table-hover");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderTableHeaderOn_(html);
return $recv($recv(html)._tbody())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderItems_on_(aCollection,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
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
}, function($ctx1) {$ctx1.fill(self,"renderList:on:",{aCollection:aCollection,html:html},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4;
$1=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["td"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_($recv(aReport)._id());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["td"]=2;
//>>excludeEnd("ctx");
$recv($2)._with_($recv(aReport)._title());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$3=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["td"]=3;
//>>excludeEnd("ctx");
$recv($3)._style_("white-space: nowrap");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(html)._tag_("small");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tag:"]=1;
//>>excludeEnd("ctx");
return $recv($5)._with_($recv($recv(aReport)._lastActivity())._asDateString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$recv($recv(html)._td())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._tag_("small"))._with_($recv(aReport)._numberOfEvents());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderReportData:on:",{aReport:aReport,html:html},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
function $SlReportVisualization(){return $globals.SlReportVisualization||(typeof SlReportVisualization=="undefined"?nil:SlReportVisualization)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._span();
$recv($1)._style_("position: absolute; margin-top: 20px;");
$2=$recv($1)._with_($recv($recv($SlReportVisualization())._onReport_(aReport))._width_($recv(self._width()).__star((0.97))));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderReportVisualization:on:",{aReport:aReport,html:html},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._button();
$recv($1)._class_("btn btn-default btn-sm");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._resizeWidth();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._span())._class_("glyphicon glyphicon-align-right");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderResizeOn:",{html:html},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$recv($recv(html)._tr())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._th();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["th"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("Id");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$2=$recv(html)._th();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["th"]=2;
//>>excludeEnd("ctx");
$recv($2)._with_("Title");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$3=$recv(html)._th();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["th"]=3;
//>>excludeEnd("ctx");
$recv($3)._with_("Last Activity");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
return $recv($recv(html)._th())._with_("Events");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTableHeaderOn:",{html:html},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$4,$6,$7,$2;
$1=$recv(html)._div();
$recv($1)._class_("btn-group btn-group-sm");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($3)._class_("btn btn-default");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._zoomIn();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=1;
//>>excludeEnd("ctx");
return $recv($5)._class_("glyphicon glyphicon-plus");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4;
$6=$recv(html)._button();
$recv($6)._class_("btn btn-default");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
$recv($6)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._zoomOut();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
$7=$recv($6)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._span())._class_("glyphicon glyphicon-minus");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderZoomControlsOn:",{html:html},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
reportsInProject=$recv($recv(aProject)._reports())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert(aBoolean)){
$recv(self["@filteredItems"])._addAll_(reportsInProject);
} else {
$recv(reportsInProject)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@filteredItems"])._remove_ifAbsent_(each,(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reportsForProject:visible:",{aProject:aProject,aBoolean:aBoolean,reportsInProject:reportsInProject},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._sortBlock_($recv(anAnnouncement)._sortBlock());
self._updateContents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sortEvent:",{anAnnouncement:anAnnouncement},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
function $SlVisualizationZoomAnnouncement(){return $globals.SlVisualizationZoomAnnouncement||(typeof SlVisualizationZoomAnnouncement=="undefined"?nil:SlVisualizationZoomAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._announce_($recv($SlVisualizationZoomAnnouncement())._zoomInOn_("SlReportVisualization"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zoomIn",{},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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
function $SlVisualizationZoomAnnouncement(){return $globals.SlVisualizationZoomAnnouncement||(typeof SlVisualizationZoomAnnouncement=="undefined"?nil:SlVisualizationZoomAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._announce_($recv($SlVisualizationZoomAnnouncement())._zoomOutOn_("SlReportVisualization"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zoomOut",{},$globals.SlReportList)});
//>>excludeEnd("ctx");
},
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


$core.addClass('SlSelectList', $globals.SlLoadList, ['selected'], 'ShoreLine-Widgets-Legacy');
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
$globals.SlSelectList.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@selected"]=$recv($Set())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlSelectList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._select_(anElement);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"itemSelected:",{anElement:anElement},$globals.SlSelectList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._a();
$recv($1)._class_("list-group-item".__comma(self._selecedItemClass()));
$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._itemSelected_(anElement);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._with_(anElement);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anElement:anElement,html:html},$globals.SlSelectList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@selected"])._add_($recv(anElement)._id());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{anElement:anElement},$globals.SlSelectList)});
//>>excludeEnd("ctx");
},
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
return self;

},
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
return self;

},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@selected"])._includes_(anElement);
if($core.assert($2)){
$1="selected-project";
} else {
$1="";
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedItemClass:",{anElement:anElement},$globals.SlSelectList)});
//>>excludeEnd("ctx");
},
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
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unselectAll\x0a\x0a\x09\x22selected removeAll\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlSelectList);



$core.addClass('SlProjectList', $globals.SlSelectList, [], 'ShoreLine-Widgets-Legacy');
$core.addMethod(
$core.method({
selector: "extractData:",
protocol: 'actions',
fn: function (aJSONObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aJSONObject)._projects();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extractData:",{aJSONObject:aJSONObject},$globals.SlProjectList)});
//>>excludeEnd("ctx");
},
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
function $SlProjectSelectedAnnouncement(){return $globals.SlProjectSelectedAnnouncement||(typeof SlProjectSelectedAnnouncement=="undefined"?nil:SlProjectSelectedAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._announce_($recv($SlProjectSelectedAnnouncement())._hideAll());
self._selectAll();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hideAllEvent",{},$globals.SlProjectList)});
//>>excludeEnd("ctx");
},
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
function $SlProjectSelectedAnnouncement(){return $globals.SlProjectSelectedAnnouncement||(typeof SlProjectSelectedAnnouncement=="undefined"?nil:SlProjectSelectedAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlProjectList.superclass.fn.prototype._itemSelected_.apply($recv(self), [anElement]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._announce_($recv($SlProjectSelectedAnnouncement())._withProject_(anElement));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"itemSelected:",{anElement:anElement},$globals.SlProjectList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$2;
$1=$recv(html)._div();
$recv($1)._class_("btn-group btn-group-justified");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$recv($3)._class_("btn btn-default btn-block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._showAllEvent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$4=$recv($3)._with_("Show all");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._a();
$recv($5)._class_("btn btn-default btn-block");
$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._hideAllEvent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
$6=$recv($5)._with_("Hide all");
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
}, function($ctx1) {$ctx1.fill(self,"renderControlsOn:",{html:html},$globals.SlProjectList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._a();
$recv($1)._class_("list-group-item");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._itemSelected_(anElement);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._span();
$recv($3)._class_("badge");
$4=$recv($3)._with_($recv(anElement)._numberOfReports());
$4;
return $recv(html)._span_($recv(anElement)._title());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anElement:anElement,html:html},$globals.SlProjectList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("list-group");
$recv($1)._style_("margin: 0px");
$2=$recv($1)._with_((function(){
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
}, function($ctx1) {$ctx1.fill(self,"renderList:on:",{aCollection:aCollection,html:html},$globals.SlProjectList)});
//>>excludeEnd("ctx");
},
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
function $SlProjectSelectedAnnouncement(){return $globals.SlProjectSelectedAnnouncement||(typeof SlProjectSelectedAnnouncement=="undefined"?nil:SlProjectSelectedAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._announce_($recv($SlProjectSelectedAnnouncement())._showAll());
self._unselectAll();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showAllEvent",{},$globals.SlProjectList)});
//>>excludeEnd("ctx");
},
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


$core.addClass('SlOldStaticList', $globals.SlOldList, [], 'ShoreLine-Widgets-Legacy');
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



$core.addClass('SlFilterList', $globals.SlOldStaticList, ['filters', 'selected', 'configure'], 'ShoreLine-Widgets-Legacy');
$core.addMethod(
$core.method({
selector: "configureEvent",
protocol: 'events',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(window)._alert_("configure filter");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"configureEvent",{},$globals.SlFilterList)});
//>>excludeEnd("ctx");
},
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
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
compiler=$recv($Compiler())._new();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(compiler)._parseExpression_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._alert_($recv(ex)._messageText());
throw $early=[$1];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$2=$recv(compiler)._evaluateExpression_(aString);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,compiler:compiler},$globals.SlFilterList)});
//>>excludeEnd("ctx");
},
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
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$1;
$3=$recv($recv($String())._new())._writeStream();
$recv($3)._nextPutAll_("[ ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($3)._nextPutAll_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv($3)._nextPutAll_(" ]");
$4=$recv($3)._contents();
$2=$4;
$1=self._eval_($2);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evalStringAsBlock:",{aString:aString},$globals.SlFilterList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlFilterList.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@configure"]=true;
self["@filters"]=$recv(self._class())._defaultFilters();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlFilterList)});
//>>excludeEnd("ctx");
},
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
function $SlReportFilteredAnnouncement(){return $globals.SlReportFilteredAnnouncement||(typeof SlReportFilteredAnnouncement=="undefined"?nil:SlReportFilteredAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._announce_($recv($SlReportFilteredAnnouncement())._withBlock_(self._evalStringAsBlock_($recv(anElement)._value())));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"itemSelected:",{anElement:anElement},$globals.SlFilterList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._span();
$recv($1)._id_("banana");
$recv($1)._class_("glyphicon glyphicon-cog");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._configureEvent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
element=$2;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderConfigureOn:",{html:html,element:element},$globals.SlFilterList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$recv(html)._a();
$recv($1)._class_("list-group-item");
$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._itemSelected_(anElement);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._span_($recv(anElement)._key());
$3=self["@configure"];
if($core.assert($3)){
return self._renderConfigureOn_(html);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anElement:anElement,html:html},$globals.SlFilterList)});
//>>excludeEnd("ctx");
},
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
$globals.SlFilterList);

$core.addMethod(
$core.method({
selector: "selected:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@selected"]=anObject;
return self;

},
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
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($OrderedCollection())._new();
$recv($2)._add_(self._testFilter());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultFilters",{},$globals.SlFilterList.klass)});
//>>excludeEnd("ctx");
},
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
return "Controls";

},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="Test Filter".__minus_gt(" :each | each project id = 5");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFilter",{},$globals.SlFilterList.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFilter\x0a\x0a\x09^ 'Test Filter' -> ' :each | each project id = 5'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["->"]
}),
$globals.SlFilterList.klass);


$core.addClass('SlSortList', $globals.SlOldStaticList, ['selected', 'configure', 'reverse'], 'ShoreLine-Widgets-Legacy');
$core.addMethod(
$core.method({
selector: "blockFromString:",
protocol: 'block generation',
fn: function (aString){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$6,$5,$7,$2,$1;
$3=$recv($recv($String())._new())._writeStream();
$recv($3)._nextPutAll_("[ ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($3)._nextPutAll_(aString);
$4=$3;
$6=self["@reverse"];
if($core.assert($6)){
$5=" not";
} else {
$5="";
};
$recv($4)._nextPutAll_nextPutAll_($5," ]");
$7=$recv($3)._contents();
$2=$7;
$1=self._eval_($2);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blockFromString:",{aString:aString},$globals.SlSortList)});
//>>excludeEnd("ctx");
},
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
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
compiler=$recv($Compiler())._new();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(compiler)._parseExpression_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._alert_($recv(ex)._messageText());
throw $early=[$1];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$2=$recv(compiler)._evaluateExpression_(aString);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,compiler:compiler},$globals.SlSortList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlSortList.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@configure"]=true;
self["@reverse"]=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlSortList)});
//>>excludeEnd("ctx");
},
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
function $SlReportSortedAnnouncement(){return $globals.SlReportSortedAnnouncement||(typeof SlReportSortedAnnouncement=="undefined"?nil:SlReportSortedAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self["@selected"];
$3=$recv(anElement)._key();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["key"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($3);
if($core.assert($1)){
self["@reverse"]=$recv(self["@reverse"])._not();
self["@reverse"];
} else {
self["@reverse"]=false;
self["@reverse"];
self["@selected"]=$recv(anElement)._key();
self["@selected"];
};
self._announce_($recv($SlReportSortedAnnouncement())._withSortBlock_($recv(self._class())._sortByFieldString_($recv(anElement)._value())));
self._updateContents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"itemSelected:",{anElement:anElement},$globals.SlSortList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$1=$recv(html)._span();
$4=self["@reverse"];
if($core.assert($4)){
$3="glyphicon glyphicon-chevron-up";
} else {
$3="glyphicon glyphicon-chevron-down";
};
$2="pull-right ".__comma($3);
$recv($1)._class_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderArrowOn:",{html:html},$globals.SlSortList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._span();
$recv($1)._id_("banana");
$recv($1)._class_("glyphicon glyphicon-cog");
$2=$recv($1)._onClick_((function(){

}));
element=$2;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderConfigureOn:",{html:html,element:element},$globals.SlSortList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$2;
$1=$recv(html)._a();
$recv($1)._class_("list-group-item");
$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._itemSelected_(anElement);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=self["@configure"];
if($core.assert($3)){
self._renderConfigureOn_(html);
};
$4=$recv(anElement)._key();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["key"]=1;
//>>excludeEnd("ctx");
$recv(html)._span_($4);
$5=$recv(self["@selected"]).__eq($recv(anElement)._key());
if($core.assert($5)){
return self._renderArrowOn_(html);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anElement:anElement,html:html},$globals.SlSortList)});
//>>excludeEnd("ctx");
},
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
$globals.SlSortList);

$core.addMethod(
$core.method({
selector: "selected:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@selected"]=anObject;
return self;

},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._blockFromString_($recv(self._class())._sortByFieldString_(anAccessor));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sortByFieldBlock:",{anAccessor:anAccessor},$globals.SlSortList)});
//>>excludeEnd("ctx");
},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._defaultFiltersMapping())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._key()).__minus_gt(self._sortByFieldString_($recv(each)._value()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultFilters",{},$globals.SlSortList.klass)});
//>>excludeEnd("ctx");
},
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
return "Controls";

},
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(":a :b | a ".__comma(anAccessor)).__comma(" < b ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(anAccessor);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sortByFieldString:",{anAccessor:anAccessor},$globals.SlSortList.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAccessor"],
source: "sortByFieldString: anAccessor\x0a\x0a\x09^ ':a :b | a ', anAccessor, ' < b ', anAccessor",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [","]
}),
$globals.SlSortList.klass);


$core.addClass('SlReportMetadata', $globals.SlWidget, ['report'], 'ShoreLine-Widgets-Legacy');
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

});
