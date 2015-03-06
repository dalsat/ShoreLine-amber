define("shoreline/ShoreLine-Announcements", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('ShoreLine-Announcements');
$core.packages["ShoreLine-Announcements"].innerEval = function (expr) { return eval(expr); };
$core.packages["ShoreLine-Announcements"].transport = {"type":"amd","amdNamespace":"shoreline"};

$core.addClass('SlAnnouncement', $globals.Object, [], 'ShoreLine-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SlAnnouncement.comment="Root event for all ShoreLine events.";
//>>excludeEnd("ide");


$core.addClass('SlHeliosPopupAnnouncement', $globals.SlAnnouncement, [], 'ShoreLine-Announcements');


$core.addClass('SlProjectAnnouncement', $globals.SlAnnouncement, ['project'], 'ShoreLine-Announcements');
$core.addMethod(
$core.method({
selector: "project",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@project"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "project\x0a\x0a\x09^ project",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlProjectAnnouncement);

$core.addMethod(
$core.method({
selector: "project:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@project"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "project: anObject\x0a\x0a\x09project := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlProjectAnnouncement);


$core.addMethod(
$core.method({
selector: "withProject:",
protocol: 'instance creation',
fn: function (aProject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._project_(aProject);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withProject:",{aProject:aProject},$globals.SlProjectAnnouncement.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProject"],
source: "withProject: aProject\x0a\x0a\x09^ self new\x0a\x09\x09project: aProject;\x0a\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["project:", "new", "yourself"]
}),
$globals.SlProjectAnnouncement.klass);


$core.addClass('SlProjectSelectedAnnouncement', $globals.SlProjectAnnouncement, ['showAll', 'hideAll'], 'ShoreLine-Announcements');
$core.addMethod(
$core.method({
selector: "hideAll",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@hideAll"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hideAll\x0a\x0a\x09^ hideAll",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlProjectSelectedAnnouncement);

$core.addMethod(
$core.method({
selector: "hideAll:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@hideAll"]=aBoolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "hideAll: aBoolean\x0a\x0a\x09hideAll := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlProjectSelectedAnnouncement);

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
$globals.SlProjectSelectedAnnouncement.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@showAll"]=false;
self["@hideAll"]=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlProjectSelectedAnnouncement)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09showAll := false.\x0a\x09hideAll := false.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.SlProjectSelectedAnnouncement);

$core.addMethod(
$core.method({
selector: "showAll",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@showAll"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showAll\x0a\x0a\x09^ showAll",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlProjectSelectedAnnouncement);

$core.addMethod(
$core.method({
selector: "showAll:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@showAll"]=aBoolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "showAll: aBoolean\x0a\x0a\x09showAll := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlProjectSelectedAnnouncement);


$core.addMethod(
$core.method({
selector: "hideAll",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._hideAll_(true);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hideAll",{},$globals.SlProjectSelectedAnnouncement.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hideAll\x0a\x0a\x09^ self new\x0a\x09\x09hideAll: true;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hideAll:", "new", "yourself"]
}),
$globals.SlProjectSelectedAnnouncement.klass);

$core.addMethod(
$core.method({
selector: "showAll",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._showAll_(true);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showAll",{},$globals.SlProjectSelectedAnnouncement.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showAll\x0a\x0a\x09^ self new\x0a\x09\x09showAll: true;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["showAll:", "new", "yourself"]
}),
$globals.SlProjectSelectedAnnouncement.klass);


$core.addClass('SlReportAnnouncement', $globals.SlAnnouncement, ['report'], 'ShoreLine-Announcements');
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
$globals.SlReportAnnouncement);

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
$globals.SlReportAnnouncement);


$core.addMethod(
$core.method({
selector: "withReport:",
protocol: 'instance creation',
fn: function (aReport){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._report_(aReport);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withReport:",{aReport:aReport},$globals.SlReportAnnouncement.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReport"],
source: "withReport: aReport\x0a\x0a\x09^ self new\x0a\x09\x09report: aReport;\x0a\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["report:", "new", "yourself"]
}),
$globals.SlReportAnnouncement.klass);


$core.addClass('SlReportFilteredAnnouncement', $globals.SlReportAnnouncement, ['block'], 'ShoreLine-Announcements');
$core.addMethod(
$core.method({
selector: "block",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@block"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "block\x0a\x0a\x09^ block",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportFilteredAnnouncement);

$core.addMethod(
$core.method({
selector: "block:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@block"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "block: anObject\x0a\x0a\x09block := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportFilteredAnnouncement);


$core.addMethod(
$core.method({
selector: "withBlock:",
protocol: 'instance creation',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._block_(aBlock);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withBlock:",{aBlock:aBlock},$globals.SlReportFilteredAnnouncement.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withBlock: aBlock\x0a\x0a\x09^ self new\x0a\x09\x09block: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["block:", "new", "yourself"]
}),
$globals.SlReportFilteredAnnouncement.klass);


$core.addClass('SlReportSelectedAnnouncement', $globals.SlReportAnnouncement, [], 'ShoreLine-Announcements');


$core.addClass('SlReportSortedAnnouncement', $globals.SlReportAnnouncement, ['sortingBlock', 'reverse'], 'ShoreLine-Announcements');
$core.addMethod(
$core.method({
selector: "reverse",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@reverse"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reverse\x0a\x0a\x09^ reverse",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportSortedAnnouncement);

$core.addMethod(
$core.method({
selector: "reverse:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@reverse"]=aBoolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "reverse: aBoolean\x0a\x0a\x09reverse := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportSortedAnnouncement);

$core.addMethod(
$core.method({
selector: "sortBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sortingBlock"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sortBlock\x0a\x0a\x09^ sortingBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportSortedAnnouncement);

$core.addMethod(
$core.method({
selector: "sortBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@sortingBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "sortBlock: aBlock\x0a\x0a\x09sortingBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlReportSortedAnnouncement);


$core.addMethod(
$core.method({
selector: "withSortBlock:",
protocol: 'instance creation',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._sortBlock_(aBlock);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withSortBlock:",{aBlock:aBlock},$globals.SlReportSortedAnnouncement.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withSortBlock: aBlock\x0a\x0a\x09^ self new\x0a\x09\x09sortBlock: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sortBlock:", "new", "yourself"]
}),
$globals.SlReportSortedAnnouncement.klass);


$core.addClass('SlVisualizationAnnouncement', $globals.SlAnnouncement, ['targetClass', 'action'], 'ShoreLine-Announcements');
$core.addMethod(
$core.method({
selector: "action",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@action"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "action\x0a\x0a\x09^ action",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlVisualizationAnnouncement);

$core.addMethod(
$core.method({
selector: "action:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@action"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "action: anObject\x0a\x0a\x09action := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlVisualizationAnnouncement);

$core.addMethod(
$core.method({
selector: "targetClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@targetClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "targetClass\x0a\x0a\x09^ targetClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlVisualizationAnnouncement);

$core.addMethod(
$core.method({
selector: "targetClass:",
protocol: 'accessing',
fn: function (aSymbol){
var self=this;
self["@targetClass"]=aSymbol;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "targetClass: aSymbol\x0a\x0a\x09targetClass := aSymbol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlVisualizationAnnouncement);


$core.addMethod(
$core.method({
selector: "onClass:",
protocol: 'instance creation',
fn: function (aSymbol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._targetClass_(aSymbol);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClass:",{aSymbol:aSymbol},$globals.SlVisualizationAnnouncement.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "onClass: aSymbol\x0a\x0a\x09^ self new\x0a\x09\x09targetClass: aSymbol;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["targetClass:", "new", "yourself"]
}),
$globals.SlVisualizationAnnouncement.klass);

$core.addMethod(
$core.method({
selector: "onClass:withAction:",
protocol: 'instance creation',
fn: function (aSymbol,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._targetClass_(aSymbol);
$recv($2)._action_(aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClass:withAction:",{aSymbol:aSymbol,aString:aString},$globals.SlVisualizationAnnouncement.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol", "aString"],
source: "onClass: aSymbol withAction: aString\x0a\x0a\x09^ self new\x0a\x09\x09targetClass: aSymbol;\x0a\x09\x09action: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["targetClass:", "new", "action:", "yourself"]
}),
$globals.SlVisualizationAnnouncement.klass);


$core.addClass('SlVisualizationZoomAnnouncement', $globals.SlVisualizationAnnouncement, [], 'ShoreLine-Announcements');
$core.addMethod(
$core.method({
selector: "zoomIn",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._action_("zoomIn");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zoomIn",{},$globals.SlVisualizationZoomAnnouncement)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "zoomIn\x0a\x0a\x09self action: #zoomIn",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["action:"]
}),
$globals.SlVisualizationZoomAnnouncement);

$core.addMethod(
$core.method({
selector: "zoomOut",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._action_("zoomOut");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zoomOut",{},$globals.SlVisualizationZoomAnnouncement)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "zoomOut\x0a\x0a\x09self action: #zoomOut",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["action:"]
}),
$globals.SlVisualizationZoomAnnouncement);


$core.addMethod(
$core.method({
selector: "zoomInOn:",
protocol: 'instance creation',
fn: function (aSymbol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._onClass_(aSymbol);
$recv($2)._zoomIn();
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zoomInOn:",{aSymbol:aSymbol},$globals.SlVisualizationZoomAnnouncement.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "zoomInOn: aSymbol\x0a\x0a\x09^ (self onClass: aSymbol)\x0a\x09\x09zoomIn;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["zoomIn", "onClass:", "yourself"]
}),
$globals.SlVisualizationZoomAnnouncement.klass);

$core.addMethod(
$core.method({
selector: "zoomOutOn:",
protocol: 'instance creation',
fn: function (aSymbol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._onClass_(aSymbol);
$recv($2)._zoomOut();
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zoomOutOn:",{aSymbol:aSymbol},$globals.SlVisualizationZoomAnnouncement.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "zoomOutOn: aSymbol\x0a\x0a\x09^ (self onClass: aSymbol)\x0a\x09\x09zoomOut;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["zoomOut", "onClass:", "yourself"]
}),
$globals.SlVisualizationZoomAnnouncement.klass);

});
