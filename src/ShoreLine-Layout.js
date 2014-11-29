define("shoreline/ShoreLine-Layout", ["amber/boot", "shoreline/ShoreLine-Widgets-Core"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('ShoreLine-Layout');
smalltalk.packages["ShoreLine-Layout"].transport = {"type":"amd","amdNamespace":"shoreline"};

smalltalk.addClass('SlLayout', globals.SlContainer, [], 'ShoreLine-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'accessing',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@contents"])._at_ifAbsent_(aSymbol,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{aSymbol:aSymbol},smalltalk.SlLayout)})},
args: ["aSymbol"],
source: "at: aSymbol\x0a\x0a\x09^ contents at: aSymbol ifAbsent: nil",
messageSends: ["at:ifAbsent:"],
referencedClasses: []
}),
globals.SlLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (aSymbol,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@contents"])._at_put_(aSymbol,anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aSymbol:aSymbol,anObject:anObject},smalltalk.SlLayout)})},
args: ["aSymbol", "anObject"],
source: "at: aSymbol put: anObject\x0a\x0a\x09^ contents at: aSymbol put: anObject",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.SlLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.SlLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@contents"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SlLayout)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09contents := Dictionary new.",
messageSends: ["initialize", "new"],
referencedClasses: ["Dictionary"]
}),
globals.SlLayout);



smalltalk.addClass('SlTwoColumnLayout', globals.SlLayout, [], 'ShoreLine-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "left",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_("left");
return $1;
}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.SlTwoColumnLayout)})},
args: [],
source: "left\x0a\x0a\x09^ self at: #left",
messageSends: ["at:"],
referencedClasses: []
}),
globals.SlTwoColumnLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_put_("left",anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"left:",{anObject:anObject},smalltalk.SlTwoColumnLayout)})},
args: ["anObject"],
source: "left: anObject\x0a\x0a\x09^ self at: #left put: anObject",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.SlTwoColumnLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftSize",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._class())._columnSize())._at_("left");
return $1;
}, function($ctx1) {$ctx1.fill(self,"leftSize",{},smalltalk.SlTwoColumnLayout)})},
args: [],
source: "leftSize\x0a\x0a\x09^ self class columnSize at: #left",
messageSends: ["at:", "columnSize", "class"],
referencedClasses: []
}),
globals.SlTwoColumnLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$6,$5,$7,$8,$9,$2;
smalltalk.SlTwoColumnLayout.superclass.fn.prototype._renderOn_.apply(_st(self), [html]);
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("row");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=2;
$4=$3;
$6=_st(self._leftSize())._asString();
$ctx2.sendIdx["asString"]=1;
$5="left-column col-md-".__comma($6);
$ctx2.sendIdx[","]=1;
_st($4)._class_($5);
$ctx2.sendIdx["class:"]=2;
$7=_st($3)._with_(self._left());
$ctx2.sendIdx["with:"]=2;
$7;
$8=_st(html)._div();
_st($8)._class_("right-column col-md-".__comma(_st(self._rightSize())._asString()));
$9=_st($8)._with_(self._right());
return $9;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.SlTwoColumnLayout)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09super renderOn: html.\x0a\x0a\x09html div\x0a\x09\x09class: 'row';\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'left-column col-md-', self leftSize asString;\x0a\x09\x09\x09\x09with: self left.\x0a\x09\x09\x09\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'right-column col-md-', self rightSize asString;\x0a\x09\x09\x09\x09with: self right. ]",
messageSends: ["renderOn:", "class:", "div", "with:", ",", "asString", "leftSize", "left", "rightSize", "right"],
referencedClasses: []
}),
globals.SlTwoColumnLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_("right");
return $1;
}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.SlTwoColumnLayout)})},
args: [],
source: "right\x0a\x0a\x09^ self at: #right",
messageSends: ["at:"],
referencedClasses: []
}),
globals.SlTwoColumnLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_put_("right",anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"right:",{anObject:anObject},smalltalk.SlTwoColumnLayout)})},
args: ["anObject"],
source: "right: anObject\x0a\x0a\x09^ self at: #right put: anObject",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.SlTwoColumnLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rightSize",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._class())._columnSize())._at_("right");
return $1;
}, function($ctx1) {$ctx1.fill(self,"rightSize",{},smalltalk.SlTwoColumnLayout)})},
args: [],
source: "rightSize\x0a\x0a\x09^ self class columnSize at: #right",
messageSends: ["at:", "columnSize", "class"],
referencedClasses: []
}),
globals.SlTwoColumnLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "columnSize",
protocol: 'configuration',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_("left",(3));
$ctx1.sendIdx["at:put:"]=1;
_st($2)._at_put_("right",(9));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"columnSize",{},smalltalk.SlTwoColumnLayout.klass)})},
args: [],
source: "columnSize\x0a\x0a\x09^ Dictionary new\x0a\x09\x09at: #left put: 3;\x0a\x09\x09at:\x09#right put: 9;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.SlTwoColumnLayout.klass);

});
