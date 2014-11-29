define("shoreline/ShoreLine-Widgets-Pages", ["amber/boot", "shoreline/ShoreLine-Widgets-Core"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('ShoreLine-Widgets-Pages');
smalltalk.packages["ShoreLine-Widgets-Pages"].transport = {"type":"amd","amdNamespace":"shoreline"};

smalltalk.addClass('SlMessageFrame', globals.SlFrame, [], 'ShoreLine-Widgets-Pages');
smalltalk.addMethod(
smalltalk.method({
selector: "message",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"message",{},globals.SlMessageFrame)})},
args: [],
source: "message\x0a\x0a\x09^ self contents",
messageSends: ["contents"],
referencedClasses: []
}),
globals.SlMessageFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@contents"]=aString;
return self},
args: ["aString"],
source: "message: aString\x0a\x0a\x09contents := aString",
messageSends: [],
referencedClasses: []
}),
globals.SlMessageFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "pushArgs:",
protocol: 'arguments',
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._message_(_st(aDictionary)._at_ifAbsent_("message",_st(self._class())._defaultMessage()));
return self}, function($ctx1) {$ctx1.fill(self,"pushArgs:",{aDictionary:aDictionary},globals.SlMessageFrame)})},
args: ["aDictionary"],
source: "pushArgs: aDictionary\x0a\x0a\x09self message: (aDictionary at: #message ifAbsent: self class defaultMessage)",
messageSends: ["message:", "at:ifAbsent:", "defaultMessage", "class"],
referencedClasses: []
}),
globals.SlMessageFrame);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultMessage",
protocol: 'accessing',
fn: function (){
var self=this;
return "No Message";
},
args: [],
source: "defaultMessage\x0a\x0a\x09^ 'No Message'",
messageSends: [],
referencedClasses: []
}),
globals.SlMessageFrame.klass);


smalltalk.addClass('SlErrorFrame', globals.SlMessageFrame, ['message'], 'ShoreLine-Widgets-Pages');
smalltalk.addMethod(
smalltalk.method({
selector: "renderContentsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._p();
_st($1)._class_("alert alert-danger");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._tag_("b"))._with_("Error: ");
return ($ctx2.supercall = true, globals.SlErrorFrame.superclass.fn.prototype._renderContentsOn_.apply(_st(self), [html]));
$ctx2.supercall = false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentsOn:",{html:html},globals.SlErrorFrame)})},
args: ["html"],
source: "renderContentsOn: html\x0a\x0a\x09html p\x0a\x09\x09class: 'alert alert-danger';\x0a\x09\x09with: [\x0a\x09\x09\x09(html tag: #b) with: 'Error: '.\x0a\x09\x09\x09super renderContentsOn: html ]",
messageSends: ["class:", "p", "with:", "tag:", "renderContentsOn:"],
referencedClasses: []
}),
globals.SlErrorFrame);


});
