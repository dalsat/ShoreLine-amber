define("shoreline/ShoreLine-Routing", ["amber/boot", "shoreline/ShoreLine-Core"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('ShoreLine-Routing');
smalltalk.packages["ShoreLine-Routing"].transport = {"type":"amd","amdNamespace":"shoreline"};

smalltalk.addClass('SlRoute', globals.SlObject, ['url', 'callback', 'args'], 'ShoreLine-Routing');
smalltalk.addMethod(
smalltalk.method({
selector: "argumentsOf:",
protocol: 'arguments extraction',
fn: function (anUrl){
var self=this;
var newDict;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$5,$4,$3,$2,$6,$receiver;
newDict=_st($Dictionary())._new();
$1=self["@args"];
$5=_st(anUrl)._asString();
$ctx1.sendIdx["asString"]=1;
$4=_st($5)._matchesOf_(_st(self["@url"])._asString());
if(($receiver = $4) == null || $receiver.isNil){
$3=[];
} else {
$3=$4;
};
$2=_st($3)._allButFirst();
_st($1)._with_do_($2,(function(first,second){
return smalltalk.withContext(function($ctx2) {
return _st(newDict)._at_put_(first,second);
}, function($ctx2) {$ctx2.fillBlock({first:first,second:second},$ctx1,2)})}));
$6=newDict;
return $6;
}, function($ctx1) {$ctx1.fill(self,"argumentsOf:",{anUrl:anUrl,newDict:newDict},globals.SlRoute)})},
args: ["anUrl"],
source: "argumentsOf: anUrl\x0a\x09| newDict |\x0a\x09\x0a\x09newDict := Dictionary new.\x0a\x09args\x0a\x09\x09with: ((anUrl asString matchesOf: url asString) ifNil: [ {} ]) allButFirst\x0a\x09\x09do: [ :first :second | newDict at: first put: second ].\x0a\x09^ newDict",
messageSends: ["new", "with:do:", "allButFirst", "ifNil:", "matchesOf:", "asString", "at:put:"],
referencedClasses: ["Dictionary"]
}),
globals.SlRoute);

smalltalk.addMethod(
smalltalk.method({
selector: "callback",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@callback"];
return $1;
},
args: [],
source: "callback\x0a\x09^ callback",
messageSends: [],
referencedClasses: []
}),
globals.SlRoute);

smalltalk.addMethod(
smalltalk.method({
selector: "callback:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@callback"]=anObject;
return self},
args: ["anObject"],
source: "callback: anObject\x0a\x09callback := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlRoute);

smalltalk.addMethod(
smalltalk.method({
selector: "compile",
protocol: 'arguments extraction',
fn: function (){
var self=this;
var route;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$receiver;
route=_st(self["@url"])._asString();
$2=_st(route)._matchesOf_("{([^/]+)}");
if(($receiver = $2) == null || $receiver.isNil){
$1=[];
} else {
$1=$2;
};
self["@args"]=_st($1)._allButFirst();
self["@url"]=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
_st(stream)._nextPut_("^");
$ctx2.sendIdx["nextPut:"]=1;
_st(stream)._nextPutAll_(_st(route)._replace_with_("{[^/]+}","([^/]+)"));
$3=_st(stream)._nextPut_("$");
return $3;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"compile",{route:route},globals.SlRoute)})},
args: [],
source: "compile\x0a\x09| route |\x0a\x09\x0a\x09route := url asString.\x0a\x09args := ((route matchesOf: '{([^/]+)}') ifNil: [ {} ]) allButFirst.\x0a\x09url := String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPut: '^';\x0a\x09\x09\x09nextPutAll: (route replace: '{[^/]+}' with: '([^/]+)');\x0a\x09\x09\x09nextPut: '$' ].",
messageSends: ["asString", "allButFirst", "ifNil:", "matchesOf:", "streamContents:", "nextPut:", "nextPutAll:", "replace:with:"],
referencedClasses: ["String"]
}),
globals.SlRoute);

smalltalk.addMethod(
smalltalk.method({
selector: "log:",
protocol: 'routing',
fn: function (anUrl){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $5,$6,$4,$3,$7,$2,$1;
_st(console)._log_(_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
$5=_st(stream).__lt_lt("[route] confronting ");
$6=_st(anUrl)._printString();
$ctx2.sendIdx["printString"]=1;
$4=_st($5).__lt_lt($6);
$ctx2.sendIdx["<<"]=5;
$3=_st($4).__lt_lt(" with ");
$ctx2.sendIdx["<<"]=4;
$7=_st(self["@url"])._printString();
$ctx2.sendIdx["printString"]=2;
$2=_st($3).__lt_lt($7);
$ctx2.sendIdx["<<"]=3;
$1=_st($2).__lt_lt(": ");
$ctx2.sendIdx["<<"]=2;
return _st($1).__lt_lt(_st(_st(_st(anUrl)._asString())._match_(anUrl))._printString());
$ctx2.sendIdx["<<"]=1;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"log:",{anUrl:anUrl},globals.SlRoute)})},
args: ["anUrl"],
source: "log: anUrl\x0a\x0a\x09console log: (String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09<< '[route] confronting '\x0a\x09\x09\x09<< anUrl printString << ' with '\x0a\x09\x09\x09<< url printString << ': '\x0a\x09\x09\x09<< (anUrl asString match: anUrl) printString ])",
messageSends: ["log:", "streamContents:", "<<", "printString", "match:", "asString"],
referencedClasses: ["String"]
}),
globals.SlRoute);

smalltalk.addMethod(
smalltalk.method({
selector: "match:",
protocol: 'routing',
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anUrl)._asString())._match_(self["@url"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"match:",{anUrl:anUrl},globals.SlRoute)})},
args: ["anUrl"],
source: "match: anUrl\x0a\x0a\x09\x22self log: anUrl.\x22\x0a\x09^ anUrl asString match: url",
messageSends: ["match:", "asString"],
referencedClasses: []
}),
globals.SlRoute);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
protocol: 'routing',
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._match_(anUrl);
if(smalltalk.assert($2)){
_st(self._callback())._value_(self._argumentsOf_(anUrl));
$1=true;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{anUrl:anUrl},globals.SlRoute)})},
args: ["anUrl"],
source: "parse: anUrl\x0a\x0a\x09^ (self match: anUrl)\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self callback value: (self argumentsOf: anUrl).\x0a\x09\x09\x09true ]",
messageSends: ["ifTrue:", "match:", "value:", "callback", "argumentsOf:"],
referencedClasses: []
}),
globals.SlRoute);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
($ctx1.supercall = true, globals.SlRoute.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]));
$ctx1.supercall = false;
$1=_st(_st(aStream).__lt_lt("(")).__lt_lt(_st(self["@url"])._asString());
$ctx1.sendIdx["<<"]=2;
_st($1).__lt_lt(")");
$ctx1.sendIdx["<<"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.SlRoute)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x0a\x09super printOn: aStream.\x0a\x09aStream << '(' << url asString << ')'",
messageSends: ["printOn:", "<<", "asString"],
referencedClasses: []
}),
globals.SlRoute);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@url"];
return $1;
},
args: [],
source: "url\x0a\x09^ url",
messageSends: [],
referencedClasses: []
}),
globals.SlRoute);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=anObject;
self._compile();
return self}, function($ctx1) {$ctx1.fill(self,"url:",{anObject:anObject},globals.SlRoute)})},
args: ["anObject"],
source: "url: anObject\x0a\x0a\x09url := anObject.\x0a\x09self compile.",
messageSends: ["compile"],
referencedClasses: []
}),
globals.SlRoute);


smalltalk.addMethod(
smalltalk.method({
selector: "on:withCallback:",
protocol: 'instance creation',
fn: function (aString,aBlock){
var self=this;
function $SlUrl(){return globals.SlUrl||(typeof SlUrl=="undefined"?nil:SlUrl)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._url_(_st($SlUrl())._withHash_(aString));
_st($2)._callback_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:withCallback:",{aString:aString,aBlock:aBlock},globals.SlRoute.klass)})},
args: ["aString", "aBlock"],
source: "on: aString withCallback: aBlock\x0a\x0a\x09^ self new\x0a\x09\x09url: (SlUrl withHash: aString);\x0a\x09\x09callback: aBlock;\x0a\x09\x09yourself",
messageSends: ["url:", "new", "withHash:", "callback:", "yourself"],
referencedClasses: ["SlUrl"]
}),
globals.SlRoute.klass);


smalltalk.addClass('SlRouter', globals.SlObject, ['routes'], 'ShoreLine-Routing');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.SlRouter.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@routes"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SlRouter)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09routes := {}.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.SlRouter);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeRoutes",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._class())._routes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._registerRoute_with_(_st(each)._key(),_st(each)._value());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeRoutes",{},globals.SlRouter)})},
args: [],
source: "initializeRoutes\x0a\x0a\x09self class routes do: [ :each |\x0a\x09\x09self registerRoute: each key with: each value ]",
messageSends: ["do:", "routes", "class", "registerRoute:with:", "key", "value"],
referencedClasses: []
}),
globals.SlRouter);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
protocol: 'routing',
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@routes"])._detect_((function(eachRoute){
return smalltalk.withContext(function($ctx2) {
return _st(eachRoute)._parse_(anUrl);
}, function($ctx2) {$ctx2.fillBlock({eachRoute:eachRoute},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{anUrl:anUrl},globals.SlRouter)})},
args: ["anUrl"],
source: "parse: anUrl\x0a\x0a\x09^ routes detect: [ :eachRoute | eachRoute parse: anUrl ]",
messageSends: ["detect:", "parse:"],
referencedClasses: []
}),
globals.SlRouter);

smalltalk.addMethod(
smalltalk.method({
selector: "registerEvents",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._addEventListener_with_("hashchange",(function(event){
return smalltalk.withContext(function($ctx2) {
return self._updateRoute();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerEvents",{},globals.SlRouter)})},
args: [],
source: "registerEvents\x0a\x0a\x09window\x0a\x09\x09addEventListener: 'hashchange' with: [ :event | self updateRoute ].\x0a\x09\x09\x22addEventListener: 'load' with: [ :event | self updateRoute ].\x22",
messageSends: ["addEventListener:with:", "updateRoute"],
referencedClasses: []
}),
globals.SlRouter);

smalltalk.addMethod(
smalltalk.method({
selector: "registerRoute:with:",
protocol: 'routing',
fn: function (aString,aBlock){
var self=this;
function $SlRoute(){return globals.SlRoute||(typeof SlRoute=="undefined"?nil:SlRoute)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@routes"])._add_(_st($SlRoute())._on_withCallback_(aString,aBlock));
return self}, function($ctx1) {$ctx1.fill(self,"registerRoute:with:",{aString:aString,aBlock:aBlock},globals.SlRouter)})},
args: ["aString", "aBlock"],
source: "registerRoute: aString with: aBlock\x0a\x0a\x09routes add: (SlRoute on: aString withCallback: aBlock)",
messageSends: ["add:", "on:withCallback:"],
referencedClasses: ["SlRoute"]
}),
globals.SlRouter);

smalltalk.addMethod(
smalltalk.method({
selector: "registerRoutes:",
protocol: 'routing',
fn: function (anAssociationCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anAssociationCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._registerRoute_with_(_st(each)._key(),_st(each)._value());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerRoutes:",{anAssociationCollection:anAssociationCollection},globals.SlRouter)})},
args: ["anAssociationCollection"],
source: "registerRoutes: anAssociationCollection\x0a\x0a\x09anAssociationCollection do: [ :each | self registerRoute: each key with: each value ]",
messageSends: ["do:", "registerRoute:with:", "key", "value"],
referencedClasses: []
}),
globals.SlRouter);

smalltalk.addMethod(
smalltalk.method({
selector: "updateRoute",
protocol: 'events',
fn: function (){
var self=this;
function $SlUrl(){return globals.SlUrl||(typeof SlUrl=="undefined"?nil:SlUrl)}
return smalltalk.withContext(function($ctx1) { 
self._parse_(_st($SlUrl())._current());
return self}, function($ctx1) {$ctx1.fill(self,"updateRoute",{},globals.SlRouter)})},
args: [],
source: "updateRoute\x0a\x0a\x09self parse: SlUrl current",
messageSends: ["parse:", "current"],
referencedClasses: ["SlUrl"]
}),
globals.SlRouter);


smalltalk.addMethod(
smalltalk.method({
selector: "register",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeRoutes();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"register",{},globals.SlRouter.klass)})},
args: [],
source: "register\x0a\x0a\x09^ self new\x0a\x09\x09initializeRoutes;\x0a\x09\x09yourself",
messageSends: ["initializeRoutes", "new", "yourself"],
referencedClasses: []
}),
globals.SlRouter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "registerWithRoutes:",
protocol: 'instance creation',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._registerRoutes_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerWithRoutes:",{aCollection:aCollection},globals.SlRouter.klass)})},
args: ["aCollection"],
source: "registerWithRoutes: aCollection\x0a\x0a\x09^ self new\x0a\x09\x09registerRoutes: aCollection;\x0a\x09\x09yourself",
messageSends: ["registerRoutes:", "new", "yourself"],
referencedClasses: []
}),
globals.SlRouter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "routeNotFound",
protocol: 'routes',
fn: function (){
var self=this;
function $SlTestPageAnnouncement(){return globals.SlTestPageAnnouncement||(typeof SlTestPageAnnouncement=="undefined"?nil:SlTestPageAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=".*".__minus_gt((function(arguments){
return smalltalk.withContext(function($ctx2) {
return self._announce_(_st($SlTestPageAnnouncement())._withText_("404 - page not found"));
}, function($ctx2) {$ctx2.fillBlock({arguments:arguments},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"routeNotFound",{},globals.SlRouter.klass)})},
args: [],
source: "routeNotFound\x0a\x0a\x09^ '.*' -> [ :arguments | self announce: (SlTestPageAnnouncement withText: '404 - page not found')]",
messageSends: ["->", "announce:", "withText:"],
referencedClasses: ["SlTestPageAnnouncement"]
}),
globals.SlRouter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "routes",
protocol: 'routes',
fn: function (){
var self=this;
function $SlTestPageAnnouncement(){return globals.SlTestPageAnnouncement||(typeof SlTestPageAnnouncement=="undefined"?nil:SlTestPageAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$7,$6,$5,$4,$9,$8,$1;
$2="/".__minus_gt((function(args){
return smalltalk.withContext(function($ctx2) {
$3=_st($SlTestPageAnnouncement())._withText_("root");
$ctx2.sendIdx["withText:"]=1;
return self._announce_($3);
$ctx2.sendIdx["announce:"]=1;
}, function($ctx2) {$ctx2.fillBlock({args:args},$ctx1,1)})}));
$ctx1.sendIdx["->"]=1;
$4="/test/{id}".__minus_gt((function(args){
return smalltalk.withContext(function($ctx2) {
$7=_st(args)._at_("id");
$ctx2.sendIdx["at:"]=1;
$6="/test/".__comma($7);
$ctx2.sendIdx[","]=1;
$5=_st($SlTestPageAnnouncement())._withText_($6);
$ctx2.sendIdx["withText:"]=2;
return self._announce_($5);
$ctx2.sendIdx["announce:"]=2;
}, function($ctx2) {$ctx2.fillBlock({args:args},$ctx1,2)})}));
$ctx1.sendIdx["->"]=2;
$8="/reports".__minus_gt((function(args){
return smalltalk.withContext(function($ctx2) {
$9=_st($SlTestPageAnnouncement())._withText_("/reports");
$ctx2.sendIdx["withText:"]=3;
return self._announce_($9);
$ctx2.sendIdx["announce:"]=3;
}, function($ctx2) {$ctx2.fillBlock({args:args},$ctx1,3)})}));
$ctx1.sendIdx["->"]=3;
$1=[$2,$4,$8,"/reports/{id}".__minus_gt((function(args){
return smalltalk.withContext(function($ctx2) {
return self._announce_(_st($SlTestPageAnnouncement())._withText_("/reports/".__comma(_st(args)._at_("id"))));
}, function($ctx2) {$ctx2.fillBlock({args:args},$ctx1,4)})})),self._routeNotFound()];
return $1;
}, function($ctx1) {$ctx1.fill(self,"routes",{},globals.SlRouter.klass)})},
args: [],
source: "routes\x0a\x0a\x09^ {\x0a\x09'/' -> [ :args | self announce: (SlTestPageAnnouncement withText: 'root') ].\x0a\x09'/test/{id}' -> [ :args | self announce: (SlTestPageAnnouncement withText: ('/test/', (args at: 'id'))) ].\x0a\x09'/reports' -> [ :args | self announce: (SlTestPageAnnouncement withText: '/reports') ].\x0a\x09'/reports/{id}' -> [ :args | self announce: (SlTestPageAnnouncement withText: ('/reports/', (args at: 'id'))) ].\x0a\x09\x0a\x09self routeNotFound \x22<- fallback route\x22 }",
messageSends: ["->", "announce:", "withText:", ",", "at:", "routeNotFound"],
referencedClasses: ["SlTestPageAnnouncement"]
}),
globals.SlRouter.klass);


smalltalk.addClass('SlUrl', globals.SlObject, ['hash'], 'ShoreLine-Routing');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(anObject)._respondsTo_("hash");
if(smalltalk.assert($2)){
$3=self._hash();
$ctx1.sendIdx["hash"]=1;
$1=_st($3).__eq(_st(anObject)._hash());
} else {
$1=false;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject},globals.SlUrl)})},
args: ["anObject"],
source: "= anObject\x0a\x0a\x09^ (anObject respondsTo: #hash)\x0a\x09\x09ifTrue: [ self hash = anObject hash ]\x0a\x09\x09ifFalse: [ false ]",
messageSends: ["ifTrue:ifFalse:", "respondsTo:", "=", "hash"],
referencedClasses: []
}),
globals.SlUrl);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
var $1;
$1=self["@hash"];
return $1;
},
args: [],
source: "asString\x0a\x0a\x09^ hash",
messageSends: [],
referencedClasses: []
}),
globals.SlUrl);

smalltalk.addMethod(
smalltalk.method({
selector: "hash",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@hash"];
return $1;
},
args: [],
source: "hash\x0a\x09^ hash",
messageSends: [],
referencedClasses: []
}),
globals.SlUrl);

smalltalk.addMethod(
smalltalk.method({
selector: "hash:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hash"]=_st(self._class())._normalize_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"hash:",{anObject:anObject},globals.SlUrl)})},
args: ["anObject"],
source: "hash: anObject\x0a\x0a\x09hash := self class normalize: anObject",
messageSends: ["normalize:", "class"],
referencedClasses: []
}),
globals.SlUrl);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1,$receiver;
($ctx1.supercall = true, globals.SlUrl.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]));
$ctx1.supercall = false;
$2=_st(aStream).__lt_lt("(");
$4=self["@hash"];
if(($receiver = $4) == null || $receiver.isNil){
$3="";
} else {
$3=$4;
};
$1=_st($2).__lt_lt($3);
$ctx1.sendIdx["<<"]=2;
_st($1).__lt_lt(")");
$ctx1.sendIdx["<<"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.SlUrl)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09<< '('\x0a\x09\x09<< (hash ifNil: [ '' ])\x0a\x09\x09<< ')'",
messageSends: ["printOn:", "<<", "ifNil:"],
referencedClasses: []
}),
globals.SlUrl);


smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._withHash_(_st(_st(document)._location())._hash());
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.SlUrl.klass)})},
args: [],
source: "current\x0a\x0a\x09^ self withHash: document location hash",
messageSends: ["withHash:", "hash", "location"],
referencedClasses: []
}),
globals.SlUrl.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "normalize:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aString)._trimLeft_("/#!");
return $1;
}, function($ctx1) {$ctx1.fill(self,"normalize:",{aString:aString},globals.SlUrl.klass)})},
args: ["aString"],
source: "normalize: aString\x0a\x0a\x09^ aString trimLeft: '/#!'",
messageSends: ["trimLeft:"],
referencedClasses: []
}),
globals.SlUrl.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withHash:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._hash_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withHash:",{aString:aString},globals.SlUrl.klass)})},
args: ["aString"],
source: "withHash: aString\x0a\x0a\x09^ self new\x0a\x09\x09hash: aString;\x0a\x09\x09yourself",
messageSends: ["hash:", "new", "yourself"],
referencedClasses: []
}),
globals.SlUrl.klass);

});
