define("shoreline/ShoreLine-Core", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Web", "amber_core/Kernel-Announcements"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('ShoreLine-Core');
smalltalk.packages["ShoreLine-Core"].transport = {"type":"amd","amdNamespace":"shoreline"};

smalltalk.addClass('SlAnnouncer', globals.Announcer, [], 'ShoreLine-Core');
globals.SlAnnouncer.comment="The Announcer class for ShoreLine events.";

globals.SlAnnouncer.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == null){
self["@current"]=smalltalk.SlAnnouncer.klass.superclass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.SlAnnouncer.klass)})},
args: [],
source: "current\x0a\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.SlAnnouncer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shouldNotImplement();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.SlAnnouncer.klass)})},
args: [],
source: "new\x0a\x0a\x09^ self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
globals.SlAnnouncer.klass);


smalltalk.addClass('SlObject', globals.Object, [], 'ShoreLine-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
protocol: 'accessing',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._class())._announce_(anAnnouncement);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},globals.SlObject)})},
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x0a\x09self class announce: anAnnouncement",
messageSends: ["announce:", "class"],
referencedClasses: []
}),
globals.SlObject);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._announcer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},globals.SlObject)})},
args: [],
source: "announcer\x0a\x0a\x09^ self class announcer",
messageSends: ["announcer", "class"],
referencedClasses: []
}),
globals.SlObject);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.SlObject.superclass.fn.prototype._initialize.apply(_st(self), []);
self._registerEvents();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SlObject)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self registerEvents.",
messageSends: ["initialize", "registerEvents"],
referencedClasses: []
}),
globals.SlObject);

smalltalk.addMethod(
smalltalk.method({
selector: "registerEvents",
protocol: 'events',
fn: function (){
var self=this;
return self},
args: [],
source: "registerEvents",
messageSends: [],
referencedClasses: []
}),
globals.SlObject);

smalltalk.addMethod(
smalltalk.method({
selector: "repository",
protocol: 'session',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._session())._loader())._repository();
return $1;
}, function($ctx1) {$ctx1.fill(self,"repository",{},globals.SlObject)})},
args: [],
source: "repository\x0a\x0a\x09^ self session loader repository",
messageSends: ["repository", "loader", "session"],
referencedClasses: []
}),
globals.SlObject);

smalltalk.addMethod(
smalltalk.method({
selector: "session",
protocol: 'session',
fn: function (){
var self=this;
function $SlSession(){return globals.SlSession||(typeof SlSession=="undefined"?nil:SlSession)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($SlSession())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"session",{},globals.SlObject)})},
args: [],
source: "session\x0a\x0a\x09^ SlSession current",
messageSends: ["current"],
referencedClasses: ["SlSession"]
}),
globals.SlObject);


smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
protocol: 'accessing',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(anAnnouncement);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},globals.SlObject.klass)})},
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x0a\x09self announcer announce: anAnnouncement.",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
globals.SlObject.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
function $SlAnnouncer(){return globals.SlAnnouncer||(typeof SlAnnouncer=="undefined"?nil:SlAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($SlAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},globals.SlObject.klass)})},
args: [],
source: "announcer\x0a\x0a\x09^ SlAnnouncer current",
messageSends: ["current"],
referencedClasses: ["SlAnnouncer"]
}),
globals.SlObject.klass);


smalltalk.addClass('SlSession', globals.Object, ['data'], 'ShoreLine-Core');
globals.SlSession.comment="Manages and stores the session data:\x0a- login\x0a- bugreports\x0a- preferences";
smalltalk.addMethod(
smalltalk.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {
var $1;
$1=self["@data"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"data",{},smalltalk.SlSession)})},
args: [],
source: "data\x0a\x0a\x09^ data",
messageSends: [],
referencedClasses: []
}),
globals.SlSession);

smalltalk.addMethod(
smalltalk.method({
selector: "data:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) {
self["@data"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"data:",{anObject:anObject},smalltalk.SlSession)})},
args: ["anObject"],
source: "data: anObject\x0a\x0a\x09data := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlSession);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.SlSession.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@data"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SlSession)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09data := Dictionary new.",
messageSends: ["initialize", "new"],
referencedClasses: ["Dictionary"]
}),
globals.SlSession);


globals.SlSession.klass.iVarNames = ['session'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {
var $2,$1;
$2=self["@session"];
if(($receiver = $2) == nil || $receiver == null){
self["@session"]=self._new();
$1=self["@session"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.SlSession.klass)})},
args: [],
source: "current\x0a\x0a\x09^ session ifNil: [ session := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.SlSession.klass);


smalltalk.addClass('SlWidget', globals.Widget, [], 'ShoreLine-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
protocol: 'actions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(anAnnouncement);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},smalltalk.SlWidget)})},
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x0a\x09self announcer announce: anAnnouncement.",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
globals.SlWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
protocol: 'actions',
fn: function (){
var self=this;
function $SlAnnouncer(){return smalltalk.SlAnnouncer||(typeof SlAnnouncer=="undefined"?nil:SlAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($SlAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.SlWidget)})},
args: [],
source: "announcer\x0a\x0a\x09^ SlAnnouncer current",
messageSends: ["current"],
referencedClasses: ["SlAnnouncer"]
}),
globals.SlWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SlWidget.superclass.fn.prototype._initialize.apply(_st(self), []);
self._registerEvents();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SlWidget)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self registerEvents.",
messageSends: ["initialize", "registerEvents"],
referencedClasses: []
}),
globals.SlWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerEvents",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"registerEvents",{},smalltalk.SlWidget)})},
args: [],
source: "registerEvents",
messageSends: [],
referencedClasses: []
}),
globals.SlWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "session",
protocol: 'session',
fn: function (){
var self=this;
function $SlSession(){return smalltalk.SlSession||(typeof SlSession=="undefined"?nil:SlSession)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($SlSession())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"session",{},smalltalk.SlWidget)})},
args: [],
source: "session\x0a\x0a\x09^ SlSession current",
messageSends: ["current"],
referencedClasses: ["SlSession"]
}),
globals.SlWidget);


});
