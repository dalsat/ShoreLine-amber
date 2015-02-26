define("shoreline/ShoreLine-Router", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('ShoreLine-Router');
$core.packages["ShoreLine-Router"].innerEval = function (expr) { return eval(expr); };
$core.packages["ShoreLine-Router"].transport = {"type":"amd","amdNamespace":"shoreline"};

$core.addClass('SlRoute', $globals.Object, ['url', 'callback', 'args'], 'ShoreLine-Router');
$core.addMethod(
$core.method({
selector: "argumentsOf:",
protocol: 'arguments extraction',
fn: function (aString){
var self=this;
var newDict;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$5,$receiver;
newDict=$recv($Dictionary())._new();
$1=self["@args"];
$4=$recv(aString)._matchesOf_($recv(self["@url"])._asString());
if(($receiver = $4) == null || $receiver.isNil){
$3=[];
} else {
$3=$4;
};
$2=$recv($3)._allButFirst();
$recv($1)._with_do_($2,(function(first,second){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newDict)._at_put_(first,second);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({first:first,second:second},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$5=newDict;
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"argumentsOf:",{aString:aString,newDict:newDict},$globals.SlRoute)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "argumentsOf: aString\x0a\x09| newDict |\x0a\x09\x0a\x09newDict := Dictionary new.\x0a\x09args\x0a\x09\x09with: ((aString matchesOf: url asString) ifNil: [ {} ]) allButFirst\x0a\x09\x09do: [ :first :second | newDict at: first put: second ].\x0a\x09^ newDict",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "with:do:", "allButFirst", "ifNil:", "matchesOf:", "asString", "at:put:"]
}),
$globals.SlRoute);

$core.addMethod(
$core.method({
selector: "callback",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@callback"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "callback\x0a\x09^ callback",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlRoute);

$core.addMethod(
$core.method({
selector: "callback:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@callback"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "callback: anObject\x0a\x09callback := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlRoute);

$core.addMethod(
$core.method({
selector: "compile",
protocol: 'arguments extraction',
fn: function (){
var self=this;
var route;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$receiver;
route=self["@url"];
$2=$recv(route)._matchesOf_("{([^/]+)}");
if(($receiver = $2) == null || $receiver.isNil){
$1=[];
} else {
$1=$2;
};
self["@args"]=$recv($1)._allButFirst();
self["@url"]=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._nextPut_("^");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($recv(route)._replace_with_("{[^/]+}","([^/]+)"));
$3=$recv(stream)._nextPut_("$");
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compile",{route:route},$globals.SlRoute)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compile\x0a\x09| route |\x0a\x09\x0a\x09route := url.\x0a\x09args := ((route matchesOf: '{([^/]+)}') ifNil: [ {} ]) allButFirst.\x0a\x09url := String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPut: '^';\x0a\x09\x09\x09nextPutAll: (route replace: '{[^/]+}' with: '([^/]+)');\x0a\x09\x09\x09nextPut: '$' ].",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["allButFirst", "ifNil:", "matchesOf:", "streamContents:", "nextPut:", "nextPutAll:", "replace:with:"]
}),
$globals.SlRoute);

$core.addMethod(
$core.method({
selector: "handleRequest:",
protocol: 'routing',
fn: function (anUrl){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._match_(anUrl);
if($core.assert($2)){
$recv(self._callback())._value_(self._argumentsOf_(anUrl));
$1=true;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleRequest:",{anUrl:anUrl},$globals.SlRoute)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anUrl"],
source: "handleRequest: anUrl\x0a\x0a\x09^ (self match: anUrl)\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self callback value: (self argumentsOf: anUrl).\x0a\x09\x09\x09true ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "match:", "value:", "callback", "argumentsOf:"]
}),
$globals.SlRoute);

$core.addMethod(
$core.method({
selector: "log:",
protocol: 'routing',
fn: function (aString){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$recv(console)._log_($recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv($recv(stream).__lt_lt("[route] confronting ")).__lt_lt(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=5;
//>>excludeEnd("ctx");
$3=$recv($4).__lt_lt(" with ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=4;
//>>excludeEnd("ctx");
$2=$recv($3).__lt_lt(self["@url"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__lt_lt(": ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
return $recv($1).__lt_lt($recv($recv(self["@url"])._match_(aString))._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"log:",{aString:aString},$globals.SlRoute)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "log: aString\x0a\x0a\x09console log: (String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09<< '[route] confronting '\x0a\x09\x09\x09<< aString << ' with '\x0a\x09\x09\x09<< url << ': '\x0a\x09\x09\x09<< (url match: aString) printString ])",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["log:", "streamContents:", "<<", "printString", "match:"]
}),
$globals.SlRoute);

$core.addMethod(
$core.method({
selector: "match:",
protocol: 'routing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._log_(aString);
$1=$recv(aString)._match_(self["@url"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"match:",{aString:aString},$globals.SlRoute)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "match: aString\x0a\x0a\x09self log: aString.\x0a\x09^ aString match: url",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:", "match:"]
}),
$globals.SlRoute);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
$globals.SlRoute.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($recv(aStream).__lt_lt("(")).__lt_lt($recv(self["@url"])._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv($1).__lt_lt(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.SlRoute)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x0a\x09super printOn: aStream.\x0a\x09aStream << '(' << url asString << ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "<<", "asString"]
}),
$globals.SlRoute);

$core.addMethod(
$core.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@url"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "url\x0a\x09^ url",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlRoute);

$core.addMethod(
$core.method({
selector: "url:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@url"]=anObject;
self._compile();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"url:",{anObject:anObject},$globals.SlRoute)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "url: anObject\x0a\x0a\x09url := anObject.\x0a\x09self compile.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["compile"]
}),
$globals.SlRoute);


$core.addMethod(
$core.method({
selector: "on:withCallback:",
protocol: 'instance creation',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._url_(aString);
$recv($2)._callback_(aBlock);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:withCallback:",{aString:aString,aBlock:aBlock},$globals.SlRoute.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "on: aString withCallback: aBlock\x0a\x0a\x09^ self new\x0a\x09\x09url: aString;\x0a\x09\x09callback: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["url:", "new", "callback:", "yourself"]
}),
$globals.SlRoute.klass);


$core.addClass('SlRouter', $globals.Object, ['routes', 'notFound'], 'ShoreLine-Router');
$core.addMethod(
$core.method({
selector: "handleRequest:",
protocol: 'routing',
fn: function (anUrl){
var self=this;
var url;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
url=$recv(anUrl)._trimLeft_("/#!");
$1=$recv(self["@routes"])._detect_ifNone_((function(eachRoute){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(eachRoute)._handleRequest_(url);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachRoute:eachRoute},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._notFound())._value_(url);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleRequest:",{anUrl:anUrl,url:url},$globals.SlRouter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anUrl"],
source: "handleRequest: anUrl\x0a\x09| url |\x0a\x09url := anUrl trimLeft: '/#!'.\x0a\x09^ routes detect: [ :eachRoute | eachRoute handleRequest: url ] ifNone: [ self notFound value: url ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trimLeft:", "detect:ifNone:", "handleRequest:", "value:", "notFound"]
}),
$globals.SlRouter);

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
$globals.SlRouter.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@routes"]=[];
self._registerEvents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlRouter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09routes := {}.\x0a\x09self registerEvents.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "registerEvents"]
}),
$globals.SlRouter);

$core.addMethod(
$core.method({
selector: "notFound",
protocol: 'routing',
fn: function (){
var self=this;
var $1;
$1=self["@notFound"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notFound\x0a\x0a\x09^ notFound",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlRouter);

$core.addMethod(
$core.method({
selector: "notFound:",
protocol: 'routing',
fn: function (aBlock){
var self=this;
self["@notFound"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "notFound: aBlock\x0a\x0a\x09notFound := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlRouter);

$core.addMethod(
$core.method({
selector: "register:with:",
protocol: 'routing',
fn: function (aString,aBlock){
var self=this;
function $SlRoute(){return $globals.SlRoute||(typeof SlRoute=="undefined"?nil:SlRoute)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@routes"])._add_($recv($SlRoute())._on_withCallback_(aString,aBlock));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"register:with:",{aString:aString,aBlock:aBlock},$globals.SlRouter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "register: aString with: aBlock\x0a\x0a\x09routes add: (SlRoute on: aString withCallback: aBlock)",
referencedClasses: ["SlRoute"],
//>>excludeEnd("ide");
messageSends: ["add:", "on:withCallback:"]
}),
$globals.SlRouter);

$core.addMethod(
$core.method({
selector: "registerAll:",
protocol: 'routing',
fn: function (anAssociationCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anAssociationCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._register_with_($recv(each)._key(),$recv(each)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerAll:",{anAssociationCollection:anAssociationCollection},$globals.SlRouter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAssociationCollection"],
source: "registerAll: anAssociationCollection\x0a\x0a\x09anAssociationCollection do: [ :each | self register: each key with: each value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "register:with:", "key", "value"]
}),
$globals.SlRouter);

$core.addMethod(
$core.method({
selector: "registerEvents",
protocol: 'events',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=window;
$recv($1)._addEventListener_with_("load",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._update();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["update"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addEventListener:with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._addEventListener_with_("hashchange",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._update();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerEvents",{},$globals.SlRouter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerEvents\x0a\x0a\x09window\x0a\x09\x09addEventListener: 'load' with: [ :event | self update ];\x0a\x09\x09addEventListener: 'hashchange' with: [ :event | self update ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addEventListener:with:", "update"]
}),
$globals.SlRouter);

$core.addMethod(
$core.method({
selector: "update",
protocol: 'events',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._handleRequest_($recv($recv(document)._location())._hash());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.SlRouter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x0a\x09self handleRequest: document location hash",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["handleRequest:", "hash", "location"]
}),
$globals.SlRouter);


$core.addMethod(
$core.method({
selector: "withRoutes:",
protocol: 'instance creation',
fn: function (aDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._registerAll_(aDictionary);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withRoutes:",{aDictionary:aDictionary},$globals.SlRouter.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "withRoutes: aDictionary\x0a\x0a\x09^ self new\x0a\x09\x09registerAll: aDictionary;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["registerAll:", "new", "yourself"]
}),
$globals.SlRouter.klass);

$core.addMethod(
$core.method({
selector: "withRoutes:notFound:",
protocol: 'instance creation',
fn: function (aCollection,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._registerAll_(aCollection);
$recv($2)._notFound_(aBlock);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withRoutes:notFound:",{aCollection:aCollection,aBlock:aBlock},$globals.SlRouter.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "aBlock"],
source: "withRoutes: aCollection notFound: aBlock\x0a\x0a\x09^ self new\x0a\x09\x09registerAll: aCollection;\x0a\x09\x09notFound: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["registerAll:", "new", "notFound:", "yourself"]
}),
$globals.SlRouter.klass);

});
