define("shoreline/ShoreLine-Layout", ["amber/boot", "shoreline/ShoreLine-Widgets-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('ShoreLine-Layout');
$core.packages["ShoreLine-Layout"].innerEval = function (expr) { return eval(expr); };
$core.packages["ShoreLine-Layout"].transport = {"type":"amd","amdNamespace":"shoreline"};

$core.addClass('SlLayout', $globals.SlContainer, [], 'ShoreLine-Layout');
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
$1=$recv(self["@contents"])._at_ifAbsent_(aSymbol,nil);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aSymbol:aSymbol},$globals.SlLayout)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "at: aSymbol\x0a\x0a\x09^ contents at: aSymbol ifAbsent: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:"]
}),
$globals.SlLayout);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (aSymbol,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@contents"])._at_put_(aSymbol,anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aSymbol:aSymbol,anObject:anObject},$globals.SlLayout)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol", "anObject"],
source: "at: aSymbol put: anObject\x0a\x0a\x09^ contents at: aSymbol put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.SlLayout);

$core.addMethod(
$core.method({
selector: "initializeContents",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Dictionary())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeContents",{},$globals.SlLayout)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeContents\x0a\x0a\x09^ Dictionary new.",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.SlLayout);



$core.addClass('SlTwoColumnLayout', $globals.SlLayout, [], 'ShoreLine-Layout');
$core.addMethod(
$core.method({
selector: "left",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_("left");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"left",{},$globals.SlTwoColumnLayout)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "left\x0a\x0a\x09^ self at: #left",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.SlTwoColumnLayout);

$core.addMethod(
$core.method({
selector: "left:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_put_("left",anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"left:",{anObject:anObject},$globals.SlTwoColumnLayout)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "left: anObject\x0a\x0a\x09^ self at: #left put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.SlTwoColumnLayout);

$core.addMethod(
$core.method({
selector: "leftSize",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._class())._columnSize())._at_("left");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"leftSize",{},$globals.SlTwoColumnLayout)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "leftSize\x0a\x0a\x09^ self class columnSize at: #left",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "columnSize", "class"]
}),
$globals.SlTwoColumnLayout);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$6,$5,$7,$8,$9,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SlTwoColumnLayout.superclass.fn.prototype._renderOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("row");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$4=$3;
$6=$recv(self._leftSize())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$5="left-column col-md-".__comma($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($4)._class_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$7=$recv($3)._with_(self._left());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$7;
$8=$recv(html)._div();
$recv($8)._class_("right-column col-md-".__comma($recv(self._rightSize())._asString()));
$9=$recv($8)._with_(self._right());
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.SlTwoColumnLayout)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09super renderOn: html.\x0a\x0a\x09html div\x0a\x09\x09class: 'row';\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'left-column col-md-', self leftSize asString;\x0a\x09\x09\x09\x09with: self left.\x0a\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'right-column col-md-', self rightSize asString;\x0a\x09\x09\x09\x09with: self right. ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderOn:", "class:", "div", "with:", ",", "asString", "leftSize", "left", "rightSize", "right"]
}),
$globals.SlTwoColumnLayout);

$core.addMethod(
$core.method({
selector: "right",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_("right");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"right",{},$globals.SlTwoColumnLayout)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "right\x0a\x0a\x09^ self at: #right",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.SlTwoColumnLayout);

$core.addMethod(
$core.method({
selector: "right:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_put_("right",anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"right:",{anObject:anObject},$globals.SlTwoColumnLayout)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "right: anObject\x0a\x0a\x09^ self at: #right put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.SlTwoColumnLayout);

$core.addMethod(
$core.method({
selector: "rightSize",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._class())._columnSize())._at_("right");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rightSize",{},$globals.SlTwoColumnLayout)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rightSize\x0a\x0a\x09^ self class columnSize at: #right",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "columnSize", "class"]
}),
$globals.SlTwoColumnLayout);


$core.addMethod(
$core.method({
selector: "columnSize",
protocol: 'configuration',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Dictionary())._new();
$recv($2)._at_put_("left",(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_("right",(9));
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"columnSize",{},$globals.SlTwoColumnLayout.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "columnSize\x0a\x0a\x09^ Dictionary new\x0a\x09\x09at: #left put: 3;\x0a\x09\x09at:\x09#right put: 9;\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "yourself"]
}),
$globals.SlTwoColumnLayout.klass);

});
