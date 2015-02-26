define("shoreline/ShoreLine-Core", ["amber/boot", "amber_core/Kernel-Announcements", "amber_core/Kernel-Objects", "amber-contrib-web/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('ShoreLine-Core');
$core.packages["ShoreLine-Core"].innerEval = function (expr) { return eval(expr); };
$core.packages["ShoreLine-Core"].transport = {"type":"amd","amdNamespace":"shoreline"};

$core.addClass('SlAnnouncer', $globals.Announcer, [], 'ShoreLine-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SlAnnouncer.comment="The Announcer class for ShoreLine events.";
//>>excludeEnd("ide");

$globals.SlAnnouncer.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
$globals.SlAnnouncer.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@current"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.SlAnnouncer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x0a\x09^ current ifNil: [ current := super new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.SlAnnouncer.klass);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._shouldNotImplement();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.SlAnnouncer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x0a\x09^ self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.SlAnnouncer.klass);


$core.addClass('SlData', $globals.Object, ['proxies'], 'ShoreLine-Core');
$core.addMethod(
$core.method({
selector: "at:",
protocol: 'accessing',
fn: function (aSymbol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@proxies"])._at_ifAbsentPut_(aSymbol,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._loadProxy_(aSymbol);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aSymbol:aSymbol},$globals.SlData)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "at: aSymbol\x0a\x0a\x09^ proxies at: aSymbol ifAbsentPut: [ self loadProxy: aSymbol ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsentPut:", "loadProxy:"]
}),
$globals.SlData);

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
$globals.SlData.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@proxies"]=$recv($Dictionary())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlData)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09proxies := Dictionary new.",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.SlData);

$core.addMethod(
$core.method({
selector: "loadProxy:",
protocol: 'actions',
fn: function (aSymbol){
var self=this;
function $TDClientProxy(){return $globals.TDClientProxy||(typeof TDClientProxy=="undefined"?nil:TDClientProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($TDClientProxy())._on_($recv($recv(self._class())._proxies())._at_(aSymbol));
$recv($2)._connect();
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadProxy:",{aSymbol:aSymbol},$globals.SlData)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "loadProxy: aSymbol\x0a\x0a\x09^ (TDClientProxy on: (self class proxies at: aSymbol))\x0a\x09\x09connect;\x0a\x09\x09yourself",
referencedClasses: ["TDClientProxy"],
//>>excludeEnd("ide");
messageSends: ["connect", "on:", "at:", "proxies", "class", "yourself"]
}),
$globals.SlData);

$core.addMethod(
$core.method({
selector: "with:do:",
protocol: 'actions',
fn: function (aSymbol,aBlock){
var self=this;
var proxy;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
proxy=self._at_(aSymbol);
$recv(proxy)._then_($recv(aBlock)._value_(proxy));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:do:",{aSymbol:aSymbol,aBlock:aBlock,proxy:proxy},$globals.SlData)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol", "aBlock"],
source: "with: aSymbol do: aBlock\x0a\x09| proxy |\x0a\x09proxy := self at: aSymbol.\x0a\x09proxy then: (aBlock value: proxy)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "then:", "value:"]
}),
$globals.SlData);


$globals.SlData.klass.iVarNames = ['data'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@data"];
if(($receiver = $2) == null || $receiver.isNil){
self["@data"]=self._new();
$1=self["@data"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.SlData.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x0a\x09^ data ifNil: [ data := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.SlData.klass);

$core.addMethod(
$core.method({
selector: "proxies",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Dictionary())._from_(["stacktraces".__minus_gt("/stacktraces")]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"proxies",{},$globals.SlData.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "proxies\x0a\x0a\x09^ Dictionary from: {\x0a\x09\x09#stacktraces -> '/stacktraces'\x0a\x09}",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["from:", "->"]
}),
$globals.SlData.klass);


$core.addClass('SlObject', $globals.Object, [], 'ShoreLine-Core');
$core.addMethod(
$core.method({
selector: "announce:",
protocol: 'accessing',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._class())._announce_(anAnnouncement);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},$globals.SlObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x0a\x09self class announce: anAnnouncement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["announce:", "class"]
}),
$globals.SlObject);

$core.addMethod(
$core.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._announcer();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.SlObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x0a\x09^ self class announcer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["announcer", "class"]
}),
$globals.SlObject);

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
$globals.SlObject.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._registerEvents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self registerEvents.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "registerEvents"]
}),
$globals.SlObject);

$core.addMethod(
$core.method({
selector: "registerEvents",
protocol: 'events',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerEvents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlObject);

$core.addMethod(
$core.method({
selector: "repository",
protocol: 'session',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._session())._loader())._repository();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"repository",{},$globals.SlObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "repository\x0a\x0a\x09^ self session loader repository",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["repository", "loader", "session"]
}),
$globals.SlObject);

$core.addMethod(
$core.method({
selector: "session",
protocol: 'session',
fn: function (){
var self=this;
function $SlSession(){return $globals.SlSession||(typeof SlSession=="undefined"?nil:SlSession)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($SlSession())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"session",{},$globals.SlObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "session\x0a\x0a\x09^ SlSession current",
referencedClasses: ["SlSession"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.SlObject);


$core.addMethod(
$core.method({
selector: "announce:",
protocol: 'accessing',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_(anAnnouncement);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},$globals.SlObject.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x0a\x09self announcer announce: anAnnouncement.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer"]
}),
$globals.SlObject.klass);

$core.addMethod(
$core.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
function $SlAnnouncer(){return $globals.SlAnnouncer||(typeof SlAnnouncer=="undefined"?nil:SlAnnouncer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($SlAnnouncer())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.SlObject.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x0a\x09^ SlAnnouncer current",
referencedClasses: ["SlAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.SlObject.klass);


$core.addClass('SlSession', $globals.Object, [], 'ShoreLine-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SlSession.comment="Manages and stores the session data:\x0a- login\x0a- bugreports\x0a- preferences";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
function $SlData(){return $globals.SlData||(typeof SlData=="undefined"?nil:SlData)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($SlData())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"data",{},$globals.SlSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "data\x0a\x0a\x09^ SlData current",
referencedClasses: ["SlData"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.SlSession);

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
$globals.SlSession.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x22data := Dictionary new.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.SlSession);


$globals.SlSession.klass.iVarNames = ['session'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@session"];
if(($receiver = $2) == null || $receiver.isNil){
self["@session"]=self._new();
$1=self["@session"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.SlSession.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x0a\x09^ session ifNil: [ session := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.SlSession.klass);


$core.addClass('SlWidget', $globals.Widget, [], 'ShoreLine-Core');
$core.addMethod(
$core.method({
selector: "announce:",
protocol: 'actions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_(anAnnouncement);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},$globals.SlWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x0a\x09self announcer announce: anAnnouncement.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer"]
}),
$globals.SlWidget);

$core.addMethod(
$core.method({
selector: "announcer",
protocol: 'actions',
fn: function (){
var self=this;
function $SlAnnouncer(){return $globals.SlAnnouncer||(typeof SlAnnouncer=="undefined"?nil:SlAnnouncer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($SlAnnouncer())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.SlWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x0a\x09^ SlAnnouncer current",
referencedClasses: ["SlAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.SlWidget);

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
$globals.SlWidget.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._registerEvents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self registerEvents.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "registerEvents"]
}),
$globals.SlWidget);

$core.addMethod(
$core.method({
selector: "registerEvents",
protocol: 'events',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerEvents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlWidget);

$core.addMethod(
$core.method({
selector: "session",
protocol: 'session',
fn: function (){
var self=this;
function $SlSession(){return $globals.SlSession||(typeof SlSession=="undefined"?nil:SlSession)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($SlSession())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"session",{},$globals.SlWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "session\x0a\x0a\x09^ SlSession current",
referencedClasses: ["SlSession"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.SlWidget);


});
