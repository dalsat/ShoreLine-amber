define("shoreline/ShoreLine-Examples", ["amber/boot", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('ShoreLine-Examples');
$core.packages["ShoreLine-Examples"].transport = {"type":"amd","amdNamespace":"shoreline"};

$core.addClass('SlCounterWidget', $globals.Widget, ['counter', 'header'], 'ShoreLine-Examples');
$core.addMethod(
$core.method({
selector: "counter",
protocol: 'accessing',
fn: function (){
var self=this;
function $TDClientProxy(){return $globals.TDClientProxy||(typeof TDClientProxy=="undefined"?nil:TDClientProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@counter"];
if(($receiver = $2) == null || $receiver.isNil){
self["@counter"]=$recv($TDClientProxy())._on_("/slcounter");
$1=self["@counter"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"counter",{},$globals.SlCounterWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "counter\x0a\x09^ counter ifNil: [ counter := TDClientProxy on: '/slcounter' ]",
referencedClasses: ["TDClientProxy"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:"]
}),
$globals.SlCounterWidget);

$core.addMethod(
$core.method({
selector: "counter:",
protocol: 'accessing',
fn: function (aCounter){
var self=this;
self["@counter"]=aCounter;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCounter"],
source: "counter: aCounter\x0a\x09counter := aCounter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlCounterWidget);

$core.addMethod(
$core.method({
selector: "decrease",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._counter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["counter"]=1;
//>>excludeEnd("ctx");
$recv($1)._decrease();
$recv(self._counter())._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._update();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"decrease",{},$globals.SlCounterWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "decrease\x0a\x09self counter decrease.\x0a\x09self counter then: [ self update ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["decrease", "counter", "then:", "update"]
}),
$globals.SlCounterWidget);

$core.addMethod(
$core.method({
selector: "increase",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._counter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["counter"]=1;
//>>excludeEnd("ctx");
$recv($1)._increaseBy_((5));
$recv(self._counter())._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._update();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"increase",{},$globals.SlCounterWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "increase\x0a\x09self counter increaseBy: 5.\x0a\x09self counter then: [ self update ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["increaseBy:", "counter", "then:", "update"]
}),
$globals.SlCounterWidget);

$core.addMethod(
$core.method({
selector: "render",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._counter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["counter"]=1;
//>>excludeEnd("ctx");
$recv($1)._connect();
$recv(self._counter())._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._appendToJQuery_("body"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"render",{},$globals.SlCounterWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "render\x0a\x09self counter connect.\x0a\x09self counter then: [ \x0a\x09\x09self appendToJQuery: 'body' asJQuery ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["connect", "counter", "then:", "appendToJQuery:", "asJQuery"]
}),
$globals.SlCounterWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
self["@header"]=$recv($recv(html)._h1())._with_($recv($recv(self._counter())._count())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$1=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("++");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._increase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$3=$recv(html)._button();
$recv($3)._with_("--");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._decrease();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.SlCounterWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09header := html h1 with: self counter count asString.\x0a\x09html button \x0a\x09\x09with: '++';\x0a\x09\x09onClick: [ self increase ].\x0a\x09html button \x0a\x09\x09with: '--';\x0a\x09\x09onClick: [ self decrease ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "asString", "count", "counter", "button", "onClick:", "increase", "decrease"]
}),
$globals.SlCounterWidget);

$core.addMethod(
$core.method({
selector: "update",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@header"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(html)._with_($recv($recv(self._counter())._count())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.SlCounterWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09header contents: [ :html |\x0a\x09\x09html with: self counter count asString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "with:", "asString", "count", "counter"]
}),
$globals.SlCounterWidget);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22self new render\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlCounterWidget.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'not yet classified',
fn: function (aProxy){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._counter_(aProxy);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aProxy:aProxy},$globals.SlCounterWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProxy"],
source: "on: aProxy\x0a\x09^ self new\x0a\x09\x09counter: aProxy;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["counter:", "new", "yourself"]
}),
$globals.SlCounterWidget.klass);

});
