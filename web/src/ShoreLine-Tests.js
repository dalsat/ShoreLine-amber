define("shoreline/ShoreLine-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('ShoreLine-Tests');
$core.packages["ShoreLine-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["ShoreLine-Tests"].transport = {"type":"amd","amdNamespace":"shoreline"};

$core.addClass('ShoreLineTest', $globals.TestCase, [], 'ShoreLine-Tests');


$core.addClass('SlRouteTest', $globals.TestCase, [], 'ShoreLine-Tests');
$core.addMethod(
$core.method({
selector: "testMatch",
protocol: 'tests',
fn: function (){
var self=this;
var route;
function $SlRoute(){return $globals.SlRoute||(typeof SlRoute=="undefined"?nil:SlRoute)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
route=$recv($SlRoute())._on_withCallback_("/test",(function(e){
return e;

}));
$1=$recv(route)._match_("test");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["match:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv($recv(route)._match_("test/message"))._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMatch",{route:route},$globals.SlRouteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMatch\x0a\x09| route |\x0a\x0a\x09route := SlRoute on: '/test' withCallback: [ :e | e ].\x0a\x09\x0a\x09self assert: (route match: 'test').\x0a\x09self assert: (route match: 'test/message') not.",
referencedClasses: ["SlRoute"],
//>>excludeEnd("ide");
messageSends: ["on:withCallback:", "assert:", "match:", "not"]
}),
$globals.SlRouteTest);

$core.addMethod(
$core.method({
selector: "testMatchArgs",
protocol: 'tests',
fn: function (){
var self=this;
var route;
function $SlRoute(){return $globals.SlRoute||(typeof SlRoute=="undefined"?nil:SlRoute)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
route=$recv($SlRoute())._on_withCallback_("/test/{message}",(function(e){
return e;

}));
$2=$recv(route)._match_("test");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["match:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._not();
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(route)._match_("test/message"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMatchArgs",{route:route},$globals.SlRouteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMatchArgs\x0a\x09| route |\x0a\x0a\x09route := SlRoute on: '/test/{message}' withCallback: [ :e | e ].\x0a\x09\x0a\x09self assert: (route match: 'test') not.\x0a\x09self assert: (route match: 'test/message').",
referencedClasses: ["SlRoute"],
//>>excludeEnd("ide");
messageSends: ["on:withCallback:", "assert:", "not", "match:"]
}),
$globals.SlRouteTest);


});
