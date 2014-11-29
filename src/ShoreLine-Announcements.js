define("shoreline/ShoreLine-Announcements", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('ShoreLine-Announcements');
smalltalk.packages["ShoreLine-Announcements"].transport = {"type":"amd","amdNamespace":"shoreline"};

smalltalk.addClass('SlAnnouncement', globals.Object, [], 'ShoreLine-Announcements');
globals.SlAnnouncement.comment="Root event for all ShoreLine events.";


smalltalk.addClass('SlDataLoadedAnnouncement', globals.SlAnnouncement, ['data'], 'ShoreLine-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@data"];
return $1;
},
args: [],
source: "data\x0a\x09^ data",
messageSends: [],
referencedClasses: []
}),
globals.SlDataLoadedAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "data:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@data"]=anObject;
return self},
args: ["anObject"],
source: "data: anObject\x0a\x09data := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlDataLoadedAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "withData:",
protocol: 'instance creation',
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._data_(data);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withData:",{data:data},globals.SlDataLoadedAnnouncement.klass)})},
args: ["data"],
source: "withData: data\x0a\x0a\x09^ self new\x0a\x09\x09data: data;\x0a\x09\x09yourself",
messageSends: ["data:", "new", "yourself"],
referencedClasses: []
}),
globals.SlDataLoadedAnnouncement.klass);


smalltalk.addClass('SlReportsDataLoadedAnnouncement', globals.SlDataLoadedAnnouncement, ['data'], 'ShoreLine-Announcements');


smalltalk.addClass('SlHeliosPopupAnnouncement', globals.SlAnnouncement, [], 'ShoreLine-Announcements');


smalltalk.addClass('SlNavigationAnnouncement', globals.SlAnnouncement, [], 'ShoreLine-Announcements');


smalltalk.addClass('SlDetailsPageAnnouncement', globals.SlNavigationAnnouncement, ['report'], 'ShoreLine-Announcements');
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
}, function($ctx1) {$ctx1.fill(self,"report",{},smalltalk.SlDetailsPageAnnouncement)})},
args: [],
source: "report\x0a\x0a\x09^ report",
messageSends: [],
referencedClasses: []
}),
globals.SlDetailsPageAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "report:",
protocol: 'accessing',
fn: function (aReport){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@report"]=aReport;
return self}, function($ctx1) {$ctx1.fill(self,"report:",{aReport:aReport},smalltalk.SlDetailsPageAnnouncement)})},
args: ["aReport"],
source: "report: aReport\x0a\x0a\x09report := aReport",
messageSends: [],
referencedClasses: []
}),
globals.SlDetailsPageAnnouncement);


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
}, function($ctx1) {$ctx1.fill(self,"withReport:",{aReport:aReport},smalltalk.SlDetailsPageAnnouncement.klass)})},
args: ["aReport"],
source: "withReport: aReport\x0a\x0a\x09^ self new\x0a\x09\x09report: aReport;\x0a\x09\x09yourself.",
messageSends: ["report:", "new", "yourself"],
referencedClasses: []
}),
globals.SlDetailsPageAnnouncement.klass);


smalltalk.addClass('SlErrorPageAnnouncement', globals.SlNavigationAnnouncement, ['message'], 'ShoreLine-Announcements');

smalltalk.addMethod(
smalltalk.method({
selector: "withMessge:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._message_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withMessge:",{aString:aString},globals.SlErrorPageAnnouncement.klass)})},
args: ["aString"],
source: "withMessge: aString\x0a\x0a\x09^ self new\x0a\x09\x09message: aString;\x0a\x09\x09yourself.",
messageSends: ["message:", "new", "yourself"],
referencedClasses: []
}),
globals.SlErrorPageAnnouncement.klass);


smalltalk.addClass('SlHomePageAnnouncement', globals.SlNavigationAnnouncement, [], 'ShoreLine-Announcements');


smalltalk.addClass('SlReportPageAnnouncement', globals.SlNavigationAnnouncement, ['reportId'], 'ShoreLine-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "reportId",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@reportId"];
return $1;
},
args: [],
source: "reportId\x0a\x09^ reportId",
messageSends: [],
referencedClasses: []
}),
globals.SlReportPageAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "reportId:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@reportId"]=anObject;
return self},
args: ["anObject"],
source: "reportId: anObject\x0a\x09reportId := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlReportPageAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "withReportId:",
protocol: 'instance creation',
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._reportId_(anId);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withReportId:",{anId:anId},globals.SlReportPageAnnouncement.klass)})},
args: ["anId"],
source: "withReportId: anId\x0a\x0a\x09^ self new\x0a\x09\x09reportId: anId;\x0a\x09\x09yourself",
messageSends: ["reportId:", "new", "yourself"],
referencedClasses: []
}),
globals.SlReportPageAnnouncement.klass);


smalltalk.addClass('SlTestPageAnnouncement', globals.SlNavigationAnnouncement, ['text'], 'ShoreLine-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "text",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@text"];
return $1;
},
args: [],
source: "text\x0a\x09^ text",
messageSends: [],
referencedClasses: []
}),
globals.SlTestPageAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@text"]=anObject;
return self},
args: ["anObject"],
source: "text: anObject\x0a\x09text := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlTestPageAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "withText:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withText:",{aString:aString},globals.SlTestPageAnnouncement.klass)})},
args: ["aString"],
source: "withText: aString\x0a\x0a\x09^ self new\x0a\x09\x09text: aString;\x0a\x09\x09yourself",
messageSends: ["text:", "new", "yourself"],
referencedClasses: []
}),
globals.SlTestPageAnnouncement.klass);


smalltalk.addClass('SlProjectAnnouncement', globals.SlAnnouncement, ['project'], 'ShoreLine-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "project",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@project"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"project",{},smalltalk.SlProjectAnnouncement)})},
args: [],
source: "project\x0a\x0a\x09^ project",
messageSends: [],
referencedClasses: []
}),
globals.SlProjectAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "project:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@project"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"project:",{anObject:anObject},smalltalk.SlProjectAnnouncement)})},
args: ["anObject"],
source: "project: anObject\x0a\x0a\x09project := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlProjectAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "withProject:",
protocol: 'instance creation',
fn: function (aProject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._project_(aProject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withProject:",{aProject:aProject},smalltalk.SlProjectAnnouncement.klass)})},
args: ["aProject"],
source: "withProject: aProject\x0a\x0a\x09^ self new\x0a\x09\x09project: aProject;\x0a\x09\x09yourself.",
messageSends: ["project:", "new", "yourself"],
referencedClasses: []
}),
globals.SlProjectAnnouncement.klass);


smalltalk.addClass('SlProjectSelectedAnnouncement', globals.SlProjectAnnouncement, ['showAll', 'hideAll'], 'ShoreLine-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "hideAll",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hideAll"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hideAll",{},smalltalk.SlProjectSelectedAnnouncement)})},
args: [],
source: "hideAll\x0a\x0a\x09^ hideAll",
messageSends: [],
referencedClasses: []
}),
globals.SlProjectSelectedAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "hideAll:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hideAll"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"hideAll:",{aBoolean:aBoolean},smalltalk.SlProjectSelectedAnnouncement)})},
args: ["aBoolean"],
source: "hideAll: aBoolean\x0a\x0a\x09hideAll := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.SlProjectSelectedAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SlProjectSelectedAnnouncement.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@showAll"]=false;
self["@hideAll"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SlProjectSelectedAnnouncement)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09showAll := false.\x0a\x09hideAll := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.SlProjectSelectedAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "showAll",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@showAll"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"showAll",{},smalltalk.SlProjectSelectedAnnouncement)})},
args: [],
source: "showAll\x0a\x0a\x09^ showAll",
messageSends: [],
referencedClasses: []
}),
globals.SlProjectSelectedAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "showAll:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@showAll"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"showAll:",{aBoolean:aBoolean},smalltalk.SlProjectSelectedAnnouncement)})},
args: ["aBoolean"],
source: "showAll: aBoolean\x0a\x0a\x09showAll := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.SlProjectSelectedAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "hideAll",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._hideAll_(true);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"hideAll",{},smalltalk.SlProjectSelectedAnnouncement.klass)})},
args: [],
source: "hideAll\x0a\x0a\x09^ self new\x0a\x09\x09hideAll: true;\x0a\x09\x09yourself",
messageSends: ["hideAll:", "new", "yourself"],
referencedClasses: []
}),
globals.SlProjectSelectedAnnouncement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "showAll",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._showAll_(true);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"showAll",{},smalltalk.SlProjectSelectedAnnouncement.klass)})},
args: [],
source: "showAll\x0a\x0a\x09^ self new\x0a\x09\x09showAll: true;\x0a\x09\x09yourself",
messageSends: ["showAll:", "new", "yourself"],
referencedClasses: []
}),
globals.SlProjectSelectedAnnouncement.klass);


smalltalk.addClass('SlReportAnnouncement', globals.SlAnnouncement, ['report'], 'ShoreLine-Announcements');
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
}, function($ctx1) {$ctx1.fill(self,"report",{},smalltalk.SlReportAnnouncement)})},
args: [],
source: "report\x0a\x0a\x09^ report",
messageSends: [],
referencedClasses: []
}),
globals.SlReportAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "report:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@report"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"report:",{anObject:anObject},smalltalk.SlReportAnnouncement)})},
args: ["anObject"],
source: "report: anObject\x0a\x0a\x09report := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlReportAnnouncement);


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
}, function($ctx1) {$ctx1.fill(self,"withReport:",{aReport:aReport},smalltalk.SlReportAnnouncement.klass)})},
args: ["aReport"],
source: "withReport: aReport\x0a\x0a\x09^ self new\x0a\x09\x09report: aReport;\x0a\x09\x09yourself.",
messageSends: ["report:", "new", "yourself"],
referencedClasses: []
}),
globals.SlReportAnnouncement.klass);


smalltalk.addClass('SlReportFilteredAnnouncement', globals.SlReportAnnouncement, ['block'], 'ShoreLine-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "block",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@block"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"block",{},smalltalk.SlReportFilteredAnnouncement)})},
args: [],
source: "block\x0a\x0a\x09^ block",
messageSends: [],
referencedClasses: []
}),
globals.SlReportFilteredAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "block:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@block"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"block:",{anObject:anObject},smalltalk.SlReportFilteredAnnouncement)})},
args: ["anObject"],
source: "block: anObject\x0a\x0a\x09block := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlReportFilteredAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "withBlock:",
protocol: 'instance creation',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._block_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withBlock:",{aBlock:aBlock},smalltalk.SlReportFilteredAnnouncement.klass)})},
args: ["aBlock"],
source: "withBlock: aBlock\x0a\x0a\x09^ self new\x0a\x09\x09block: aBlock;\x0a\x09\x09yourself",
messageSends: ["block:", "new", "yourself"],
referencedClasses: []
}),
globals.SlReportFilteredAnnouncement.klass);


smalltalk.addClass('SlReportSelectedAnnouncement', globals.SlReportAnnouncement, [], 'ShoreLine-Announcements');


smalltalk.addClass('SlReportSortedAnnouncement', globals.SlReportAnnouncement, ['sortingBlock', 'reverse'], 'ShoreLine-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "reverse",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@reverse"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverse",{},smalltalk.SlReportSortedAnnouncement)})},
args: [],
source: "reverse\x0a\x0a\x09^ reverse",
messageSends: [],
referencedClasses: []
}),
globals.SlReportSortedAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "reverse:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@reverse"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"reverse:",{aBoolean:aBoolean},smalltalk.SlReportSortedAnnouncement)})},
args: ["aBoolean"],
source: "reverse: aBoolean\x0a\x0a\x09reverse := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.SlReportSortedAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "sortBlock",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sortingBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sortBlock",{},smalltalk.SlReportSortedAnnouncement)})},
args: [],
source: "sortBlock\x0a\x0a\x09^ sortingBlock",
messageSends: [],
referencedClasses: []
}),
globals.SlReportSortedAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "sortBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sortingBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"sortBlock:",{aBlock:aBlock},smalltalk.SlReportSortedAnnouncement)})},
args: ["aBlock"],
source: "sortBlock: aBlock\x0a\x0a\x09sortingBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.SlReportSortedAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "withSortBlock:",
protocol: 'instance creation',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._sortBlock_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withSortBlock:",{aBlock:aBlock},smalltalk.SlReportSortedAnnouncement.klass)})},
args: ["aBlock"],
source: "withSortBlock: aBlock\x0a\x0a\x09^ self new\x0a\x09\x09sortBlock: aBlock;\x0a\x09\x09yourself",
messageSends: ["sortBlock:", "new", "yourself"],
referencedClasses: []
}),
globals.SlReportSortedAnnouncement.klass);


smalltalk.addClass('SlURLAnnouncement', globals.SlAnnouncement, ['url'], 'ShoreLine-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var $1;
$1=self["@url"];
return $1;
},
args: [],
source: "url\x0a\x0a\x09^ url",
messageSends: [],
referencedClasses: []
}),
globals.SlURLAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
protocol: 'as yet unclassified',
fn: function (anURL){
var self=this;
self["@url"]=anURL;
return self},
args: ["anURL"],
source: "url: anURL\x0a\x0a\x09url := anURL",
messageSends: [],
referencedClasses: []
}),
globals.SlURLAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "withURL:",
protocol: 'instance creation',
fn: function (anURL){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._url_(anURL);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withURL:",{anURL:anURL},globals.SlURLAnnouncement.klass)})},
args: ["anURL"],
source: "withURL: anURL\x0a\x0a\x09^ self new\x0a\x09\x09url: anURL;\x0a\x09\x09yourself",
messageSends: ["url:", "new", "yourself"],
referencedClasses: []
}),
globals.SlURLAnnouncement.klass);


smalltalk.addClass('SlVisualizationAnnouncement', globals.SlAnnouncement, ['targetClass', 'action'], 'ShoreLine-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "action",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@action"];
return $1;
},
args: [],
source: "action\x0a\x0a\x09^ action",
messageSends: [],
referencedClasses: []
}),
globals.SlVisualizationAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "action:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@action"]=anObject;
return self},
args: ["anObject"],
source: "action: anObject\x0a\x0a\x09action := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlVisualizationAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "targetClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@targetClass"];
return $1;
},
args: [],
source: "targetClass\x0a\x0a\x09^ targetClass",
messageSends: [],
referencedClasses: []
}),
globals.SlVisualizationAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "targetClass:",
protocol: 'accessing',
fn: function (aSymbol){
var self=this;
self["@targetClass"]=aSymbol;
return self},
args: ["aSymbol"],
source: "targetClass: aSymbol\x0a\x0a\x09targetClass := aSymbol",
messageSends: [],
referencedClasses: []
}),
globals.SlVisualizationAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "onClass:",
protocol: 'instance creation',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._targetClass_(aSymbol);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"onClass:",{aSymbol:aSymbol},globals.SlVisualizationAnnouncement.klass)})},
args: ["aSymbol"],
source: "onClass: aSymbol\x0a\x0a\x09^ self new\x0a\x09\x09targetClass: aSymbol;\x0a\x09\x09yourself",
messageSends: ["targetClass:", "new", "yourself"],
referencedClasses: []
}),
globals.SlVisualizationAnnouncement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "onClass:withAction:",
protocol: 'instance creation',
fn: function (aSymbol,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._targetClass_(aSymbol);
_st($2)._action_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"onClass:withAction:",{aSymbol:aSymbol,aString:aString},globals.SlVisualizationAnnouncement.klass)})},
args: ["aSymbol", "aString"],
source: "onClass: aSymbol withAction: aString\x0a\x0a\x09^ self new\x0a\x09\x09targetClass: aSymbol;\x0a\x09\x09action: aString;\x0a\x09\x09yourself",
messageSends: ["targetClass:", "new", "action:", "yourself"],
referencedClasses: []
}),
globals.SlVisualizationAnnouncement.klass);


smalltalk.addClass('SlVisualizationRefreshAnnouncement', globals.SlVisualizationAnnouncement, [], 'ShoreLine-Announcements');


smalltalk.addClass('SlVisualizationZoomAnnouncement', globals.SlVisualizationAnnouncement, [], 'ShoreLine-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "zoomIn",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._action_("zoomIn");
return self}, function($ctx1) {$ctx1.fill(self,"zoomIn",{},globals.SlVisualizationZoomAnnouncement)})},
args: [],
source: "zoomIn\x0a\x0a\x09self action: #zoomIn",
messageSends: ["action:"],
referencedClasses: []
}),
globals.SlVisualizationZoomAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "zoomOut",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._action_("zoomOut");
return self}, function($ctx1) {$ctx1.fill(self,"zoomOut",{},globals.SlVisualizationZoomAnnouncement)})},
args: [],
source: "zoomOut\x0a\x0a\x09self action: #zoomOut",
messageSends: ["action:"],
referencedClasses: []
}),
globals.SlVisualizationZoomAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "zoomInOn:",
protocol: 'instance creation',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._onClass_(aSymbol);
_st($2)._zoomIn();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"zoomInOn:",{aSymbol:aSymbol},globals.SlVisualizationZoomAnnouncement.klass)})},
args: ["aSymbol"],
source: "zoomInOn: aSymbol\x0a\x0a\x09^ (self onClass: aSymbol)\x0a\x09\x09zoomIn;\x0a\x09\x09yourself",
messageSends: ["zoomIn", "onClass:", "yourself"],
referencedClasses: []
}),
globals.SlVisualizationZoomAnnouncement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "zoomOutOn:",
protocol: 'instance creation',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._onClass_(aSymbol);
_st($2)._zoomOut();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"zoomOutOn:",{aSymbol:aSymbol},globals.SlVisualizationZoomAnnouncement.klass)})},
args: ["aSymbol"],
source: "zoomOutOn: aSymbol\x0a\x0a\x09^ (self onClass: aSymbol)\x0a\x09\x09zoomOut;\x0a\x09\x09yourself",
messageSends: ["zoomOut", "onClass:", "yourself"],
referencedClasses: []
}),
globals.SlVisualizationZoomAnnouncement.klass);

});
