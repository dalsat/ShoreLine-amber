define("shoreline/ShoreLine-Widgets-Pages", ["amber/boot", "amber-contrib-web/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('ShoreLine-Widgets-Pages');
$core.packages["ShoreLine-Widgets-Pages"].innerEval = function (expr) { return eval(expr); };
$core.packages["ShoreLine-Widgets-Pages"].transport = {"type":"amd","amdNamespace":"shoreline"};

$core.addClass('SlMessageFrame', $globals.Widget, [], 'ShoreLine-Widgets-Pages');
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
$globals.SlMessageFrame.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SlMessageFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x22contents := self class message.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.SlMessageFrame);

$core.addMethod(
$core.method({
selector: "message",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._contents();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"message",{},$globals.SlMessageFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "message\x0a\x0a\x09^ self contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents"]
}),
$globals.SlMessageFrame);

$core.addMethod(
$core.method({
selector: "message:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "message: aString\x0a\x0a\x09\x22contents := aString\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlMessageFrame);

$core.addMethod(
$core.method({
selector: "pushArgs:",
protocol: 'arguments',
fn: function (aDictionary){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "pushArgs: aDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlMessageFrame);



$core.addClass('SlErrorFrame', $globals.SlMessageFrame, ['message'], 'ShoreLine-Widgets-Pages');
$core.addMethod(
$core.method({
selector: "pushArgs:",
protocol: 'arguments',
fn: function (aDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._message_($recv(aDictionary)._at_ifAbsent_("message","Error (no error message)"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pushArgs:",{aDictionary:aDictionary},$globals.SlErrorFrame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "pushArgs: aDictionary\x0a\x0a\x09self message: (aDictionary at: 'message' ifAbsent: 'Error (no error message)')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["message:", "at:ifAbsent:"]
}),
$globals.SlErrorFrame);


$core.addMethod(
$core.method({
selector: "withMessage:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._message_(aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withMessage:",{aString:aString},$globals.SlErrorFrame.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "withMessage: aString\x0a\x0a\x09^ self new\x0a\x09\x09message: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["message:", "new", "yourself"]
}),
$globals.SlErrorFrame.klass);

});
