define("shoreline/ShoreLine-Router", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('ShoreLine-Router');
smalltalk.packages["ShoreLine-Router"].transport = {"type":"amd","amdNamespace":"shoreline"};

smalltalk.addClass('SlRoute', globals.Object, ['url', 'callback', 'args'], 'ShoreLine-Router');
smalltalk.addMethod(
smalltalk.method({
selector: "argumentsOf:",
protocol: 'arguments extraction',
fn: function (aString){
var self=this;
var newDict;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$5,$receiver;
newDict=_st($Dictionary())._new();
$1=self["@args"];
$4=_st(aString)._matchesOf_(_st(self["@url"])._asString());
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
$5=newDict;
return $5;
}, function($ctx1) {$ctx1.fill(self,"argumentsOf:",{aString:aString,newDict:newDict},globals.SlRoute)})},
args: ["aString"],
source: "argumentsOf: aString\x0a\x09| newDict |\x0a\x09\x0a\x09newDict := Dictionary new.\x0a\x09args\x0a\x09\x09with: ((aString matchesOf: url asString) ifNil: [ {} ]) allButFirst\x0a\x09\x09do: [ :first :second | newDict at: first put: second ].\x0a\x09^ newDict",
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
route=self["@url"];
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
source: "compile\x0a\x09| route |\x0a\x09\x0a\x09route := url.\x0a\x09args := ((route matchesOf: '{([^/]+)}') ifNil: [ {} ]) allButFirst.\x0a\x09url := String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPut: '^';\x0a\x09\x09\x09nextPutAll: (route replace: '{[^/]+}' with: '([^/]+)');\x0a\x09\x09\x09nextPut: '$' ].",
messageSends: ["allButFirst", "ifNil:", "matchesOf:", "streamContents:", "nextPut:", "nextPutAll:", "replace:with:"],
referencedClasses: ["String"]
}),
globals.SlRoute);

smalltalk.addMethod(
smalltalk.method({
selector: "handleRequest:",
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
}, function($ctx1) {$ctx1.fill(self,"handleRequest:",{anUrl:anUrl},globals.SlRoute)})},
args: ["anUrl"],
source: "handleRequest: anUrl\x0a\x0a\x09^ (self match: anUrl)\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self callback value: (self argumentsOf: anUrl).\x0a\x09\x09\x09true ]",
messageSends: ["ifTrue:", "match:", "value:", "callback", "argumentsOf:"],
referencedClasses: []
}),
globals.SlRoute);

smalltalk.addMethod(
smalltalk.method({
selector: "log:",
protocol: 'routing',
fn: function (aString){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
_st(console)._log_(_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
$4=_st(_st(stream).__lt_lt("[route] confronting ")).__lt_lt(aString);
$ctx2.sendIdx["<<"]=5;
$3=_st($4).__lt_lt(" with ");
$ctx2.sendIdx["<<"]=4;
$2=_st($3).__lt_lt(self["@url"]);
$ctx2.sendIdx["<<"]=3;
$1=_st($2).__lt_lt(": ");
$ctx2.sendIdx["<<"]=2;
return _st($1).__lt_lt(_st(_st(self["@url"])._match_(aString))._printString());
$ctx2.sendIdx["<<"]=1;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"log:",{aString:aString},globals.SlRoute)})},
args: ["aString"],
source: "log: aString\x0a\x0a\x09console log: (String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09<< '[route] confronting '\x0a\x09\x09\x09<< aString << ' with '\x0a\x09\x09\x09<< url << ': '\x0a\x09\x09\x09<< (url match: aString) printString ])",
messageSends: ["log:", "streamContents:", "<<", "printString", "match:"],
referencedClasses: ["String"]
}),
globals.SlRoute);

smalltalk.addMethod(
smalltalk.method({
selector: "match:",
protocol: 'routing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aString)._match_(self["@url"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"match:",{aString:aString},globals.SlRoute)})},
args: ["aString"],
source: "match: aString\x0a\x0a\x09\x22self log: aString.\x22\x0a\x09^ aString match: url",
messageSends: ["match:"],
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
self["@url"]=_st(anObject)._trimLeft_("/#!");
self._compile();
return self}, function($ctx1) {$ctx1.fill(self,"url:",{anObject:anObject},globals.SlRoute)})},
args: ["anObject"],
source: "url: anObject\x0a\x0a\x09url := anObject trimLeft: '/#!'.\x0a\x09self compile.",
messageSends: ["trimLeft:", "compile"],
referencedClasses: []
}),
globals.SlRoute);


smalltalk.addMethod(
smalltalk.method({
selector: "on:withCallback:",
protocol: 'instance creation',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._url_(aString);
_st($2)._callback_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:withCallback:",{aString:aString,aBlock:aBlock},globals.SlRoute.klass)})},
args: ["aString", "aBlock"],
source: "on: aString withCallback: aBlock\x0a\x0a\x09^ self new\x0a\x09\x09url: aString;\x0a\x09\x09callback: aBlock;\x0a\x09\x09yourself",
messageSends: ["url:", "new", "callback:", "yourself"],
referencedClasses: []
}),
globals.SlRoute.klass);


smalltalk.addClass('SlRouter', globals.Object, ['routes', 'notFound'], 'ShoreLine-Router');
smalltalk.addMethod(
smalltalk.method({
selector: "handleRequest:",
protocol: 'routing',
fn: function (anUrl){
var self=this;
var url;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
url=_st(anUrl)._trimLeft_("/#!");
$1=_st(self["@routes"])._detect_ifNone_((function(eachRoute){
return smalltalk.withContext(function($ctx2) {
return _st(eachRoute)._handleRequest_(url);
}, function($ctx2) {$ctx2.fillBlock({eachRoute:eachRoute},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._notFound())._value_(_st($Dictionary())._with_("url".__minus_gt(url)));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"handleRequest:",{anUrl:anUrl,url:url},globals.SlRouter)})},
args: ["anUrl"],
source: "handleRequest: anUrl\x0a\x09| url |\x0a\x09url := anUrl trimLeft: '/#!'.\x0a\x09^ routes\x0a\x09\x09detect: [ :eachRoute | eachRoute handleRequest: url ]\x0a\x09\x09ifNone: [ self notFound value: (Dictionary with: #url -> url) ]",
messageSends: ["trimLeft:", "detect:ifNone:", "handleRequest:", "value:", "notFound", "with:", "->"],
referencedClasses: ["Dictionary"]
}),
globals.SlRouter);

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
self._registerEvents();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SlRouter)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09routes := {}.\x0a\x09self registerEvents.",
messageSends: ["initialize", "registerEvents"],
referencedClasses: []
}),
globals.SlRouter);

smalltalk.addMethod(
smalltalk.method({
selector: "notFound",
protocol: 'routing',
fn: function (){
var self=this;
var $1;
$1=self["@notFound"];
return $1;
},
args: [],
source: "notFound\x0a\x0a\x09^ notFound",
messageSends: [],
referencedClasses: []
}),
globals.SlRouter);

smalltalk.addMethod(
smalltalk.method({
selector: "notFound:",
protocol: 'routing',
fn: function (aBlock){
var self=this;
self["@notFound"]=aBlock;
return self},
args: ["aBlock"],
source: "notFound: aBlock\x0a\x0a\x09notFound := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.SlRouter);

smalltalk.addMethod(
smalltalk.method({
selector: "register:with:",
protocol: 'routing',
fn: function (aString,aBlock){
var self=this;
function $SlRoute(){return globals.SlRoute||(typeof SlRoute=="undefined"?nil:SlRoute)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@routes"])._add_(_st($SlRoute())._on_withCallback_(aString,aBlock));
return self}, function($ctx1) {$ctx1.fill(self,"register:with:",{aString:aString,aBlock:aBlock},globals.SlRouter)})},
args: ["aString", "aBlock"],
source: "register: aString with: aBlock\x0a\x0a\x09routes add: (SlRoute on: aString withCallback: aBlock)",
messageSends: ["add:", "on:withCallback:"],
referencedClasses: ["SlRoute"]
}),
globals.SlRouter);

smalltalk.addMethod(
smalltalk.method({
selector: "registerAll:",
protocol: 'routing',
fn: function (anAssociationCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anAssociationCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._register_with_(_st(each)._key(),_st(each)._value());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerAll:",{anAssociationCollection:anAssociationCollection},globals.SlRouter)})},
args: ["anAssociationCollection"],
source: "registerAll: anAssociationCollection\x0a\x0a\x09anAssociationCollection do: [ :each | self register: each key with: each value ]",
messageSends: ["do:", "register:with:", "key", "value"],
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
return self._update();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerEvents",{},globals.SlRouter)})},
args: [],
source: "registerEvents\x0a\x0a\x09window\x0a\x09\x09\x22addEventListener: 'load' with: [ :event | self update ];\x22\x0a\x09\x09addEventListener: 'hashchange' with: [ :event | self update ].",
messageSends: ["addEventListener:with:", "update"],
referencedClasses: []
}),
globals.SlRouter);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._handleRequest_(_st(_st(document)._location())._hash());
return self}, function($ctx1) {$ctx1.fill(self,"update",{},globals.SlRouter)})},
args: [],
source: "update\x0a\x0a\x09self handleRequest: document location hash",
messageSends: ["handleRequest:", "hash", "location"],
referencedClasses: []
}),
globals.SlRouter);


smalltalk.addMethod(
smalltalk.method({
selector: "withRoutes:",
protocol: 'instance creation',
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._registerAll_(aDictionary);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withRoutes:",{aDictionary:aDictionary},globals.SlRouter.klass)})},
args: ["aDictionary"],
source: "withRoutes: aDictionary\x0a\x0a\x09^ self new\x0a\x09\x09registerAll: aDictionary;\x0a\x09\x09yourself",
messageSends: ["registerAll:", "new", "yourself"],
referencedClasses: []
}),
globals.SlRouter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withRoutes:notFound:",
protocol: 'instance creation',
fn: function (aCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._registerAll_(aCollection);
_st($2)._notFound_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withRoutes:notFound:",{aCollection:aCollection,aBlock:aBlock},globals.SlRouter.klass)})},
args: ["aCollection", "aBlock"],
source: "withRoutes: aCollection notFound: aBlock\x0a\x0a\x09^ self new\x0a\x09\x09registerAll: aCollection;\x0a\x09\x09notFound: aBlock;\x0a\x09\x09yourself",
messageSends: ["registerAll:", "new", "notFound:", "yourself"],
referencedClasses: []
}),
globals.SlRouter.klass);

});
