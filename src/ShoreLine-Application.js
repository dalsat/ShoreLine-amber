define("shoreline/ShoreLine-Application", ["amber/boot", "amber_core/Web", "shoreline/ShoreLine-Widgets", "shoreline/ShoreLine-Core", "amber_core/Kernel-Objects"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('ShoreLine-Application');
smalltalk.packages["ShoreLine-Application"].transport = {"type":"amd","amdNamespace":"shoreline"};

smalltalk.addClass('MozPersonaLogin', globals.Widget, ['user'], 'ShoreLine-Application');
globals.MozPersonaLogin.comment="Mozilla Persona login manager.";
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {
smalltalk.MozPersonaLogin.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@user"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MozPersonaLogin)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09user := nil.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.MozPersonaLogin);

smalltalk.addMethod(
smalltalk.method({
selector: "loadLibraryDo:",
protocol: 'initialization',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) {
_st(jQuery)._getScript_onSuccess_("https://login.persona.org/include.js",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"loadLibraryDo:",{aBlock:aBlock},smalltalk.MozPersonaLogin)})},
args: ["aBlock"],
source: "loadLibraryDo: aBlock\x0a\x0a\x09jQuery getScript: 'https://login.persona.org/include.js'\x0a\x09\x09onSuccess: aBlock.",
messageSends: ["getScript:onSuccess:"],
referencedClasses: []
}),
globals.MozPersonaLogin);

smalltalk.addMethod(
smalltalk.method({
selector: "login",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {
var $1;
$1=(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(navigator)._id())._request();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"login",{},smalltalk.MozPersonaLogin)})},
args: [],
source: "login\x0a\x0a\x09^ [ navigator id request ]",
messageSends: ["request", "id"],
referencedClasses: []
}),
globals.MozPersonaLogin);

smalltalk.addMethod(
smalltalk.method({
selector: "logout",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {
self["@user"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"logout",{},smalltalk.MozPersonaLogin)})},
args: [],
source: "logout\x0a\x0a\x09user := nil.\x0a\x09\x22^ [ navigator id logout ]\x22",
messageSends: [],
referencedClasses: []
}),
globals.MozPersonaLogin);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) {
var $1,$2;
$1=_st(html)._a();
_st($1)._href_("#");
_st($1)._onClick_(self._login());
$2=_st($1)._with_("Login");
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonOn:",{html:html},smalltalk.MozPersonaLogin)})},
args: ["html"],
source: "renderButtonOn: html\x0a\x0a\x09html a\x0a\x09\x09href: '#';\x0a\x09\x09onClick: self login;\x0a\x09\x09\x22style: self class buttonStyle;\x22\x0a\x09\x09with: 'Login'.",
messageSends: ["href:", "a", "onClick:", "login", "with:"],
referencedClasses: []
}),
globals.MozPersonaLogin);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) {
self._loadLibraryDo_((function(){
return smalltalk.withContext(function($ctx2) {
self._watch();
return self._renderButtonOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MozPersonaLogin)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09self loadLibraryDo: [\x0a\x09\x09self watch.\x0a\x09\x09self renderButtonOn: html ].",
messageSends: ["loadLibraryDo:", "watch", "renderButtonOn:"],
referencedClasses: []
}),
globals.MozPersonaLogin);

smalltalk.addMethod(
smalltalk.method({
selector: "watch",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {
self._watch_onLogin_onLogout_(self["@user"],(function(assertion){
return smalltalk.withContext(function($ctx2) {
_st(window)._alert_("login attempt");
return _st(console)._log_(assertion);
}, function($ctx2) {$ctx2.fillBlock({assertion:assertion},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._logout();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"watch",{},smalltalk.MozPersonaLogin)})},
args: [],
source: "watch\x0a\x0a\x09self watch: user\x0a\x09\x09onLogin: [ :assertion | window alert: 'login attempt'. console log: assertion ]\x0a\x09\x09onLogout: [ self logout ]\x0a\x09\x0a\x22\x09navigator id watch: (Dictionary new\x0a\x09\x09at: #loggedInUser put: user;\x0a\x09\x09at: #onlogin put: [ :assertion | window alert: 'login attempt'. console log: assertion ];\x0a\x09\x09at: #onlogout put: [ window alert: 'logout'. user := nil ];\x0a\x09\x09yourself)\x22\x0a\x09\x09\x0a\x22\x09console log: (Dictionary new\x0a\x09\x09at: #loggedInUser put: user;\x0a\x09\x09at: #onlogin put: [ :assertion | window alert: 'login attempt'. console log: assertion ];\x0a\x09\x09at: #onlogout put: [ window alert: 'logout'. user := nil ];\x0a\x09\x09yourself)\x22",
messageSends: ["watch:onLogin:onLogout:", "alert:", "log:", "logout"],
referencedClasses: []
}),
globals.MozPersonaLogin);

smalltalk.addMethod(
smalltalk.method({
selector: "watch:onLogin:onLogout:",
protocol: 'actions',
fn: function (anUser,aBlock,logoutBlock){
var self=this;
return smalltalk.withContext(function($ctx1) {
navigator.id.watch({
		loggedInUser: self['@anUser'],
		onlogin: function(assertion) { self._verify_(assertion); },
		onlogout: function() { logoutBlock(); }
	});
return self}, function($ctx1) {$ctx1.fill(self,"watch:onLogin:onLogout:",{anUser:anUser,aBlock:aBlock,logoutBlock:logoutBlock},smalltalk.MozPersonaLogin)})},
args: ["anUser", "aBlock", "logoutBlock"],
source: "watch: anUser onLogin: aBlock onLogout: logoutBlock\x0a\x0a\x09<navigator.id.watch({\x0a\x09\x09loggedInUser: self['@anUser'],\x0a\x09\x09onlogin: function(assertion) { self._verify_(assertion); },\x0a\x09\x09onlogout: function() { logoutBlock(); }\x0a\x09})>",
messageSends: [],
referencedClasses: []
}),
globals.MozPersonaLogin);


smalltalk.addMethod(
smalltalk.method({
selector: "buttonStyle",
protocol: 'style',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {
return "background: url(assets/icons/plain_sign_in_black.png) no-repeat;\x0a\x09width: 100px;\x0a\x09margin-top: 10px;\x0a\x09margin-right: 15px;";
}, function($ctx1) {$ctx1.fill(self,"buttonStyle",{},smalltalk.MozPersonaLogin.klass)})},
args: [],
source: "buttonStyle\x0a\x0a\x09^ 'background: url(assets/icons/plain_sign_in_black.png) no-repeat;\x0a\x09width: 100px;\x0a\x09margin-top: 10px;\x0a\x09margin-right: 15px;'",
messageSends: [],
referencedClasses: []
}),
globals.MozPersonaLogin.klass);


smalltalk.addClass('OldSlMainFrame', globals.SlToolbarFrame, ['pages'], 'ShoreLine-Application');
smalltalk.addMethod(
smalltalk.method({
selector: "detailsPageEvent:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@contents"])._report_(_st(anAnnouncement)._report());
self._displayPage_("details");
return self}, function($ctx1) {$ctx1.fill(self,"detailsPageEvent:",{anAnnouncement:anAnnouncement},globals.OldSlMainFrame)})},
args: ["anAnnouncement"],
source: "detailsPageEvent: anAnnouncement\x0a\x0a\x09contents report: anAnnouncement report.\x0a\x09self displayPage: #details.",
messageSends: ["report:", "report", "displayPage:"],
referencedClasses: []
}),
globals.OldSlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "displayErrorPage:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._displayPage_withArgs_("notFound",aString);
return self}, function($ctx1) {$ctx1.fill(self,"displayErrorPage:",{aString:aString},globals.OldSlMainFrame)})},
args: ["aString"],
source: "displayErrorPage: aString\x0a\x0a\x09self displayPage: #notFound withArgs: aString",
messageSends: ["displayPage:withArgs:"],
referencedClasses: []
}),
globals.OldSlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "displayPage:",
protocol: 'actions',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._displayPage_withArgs_(aSymbol,nil);
return self}, function($ctx1) {$ctx1.fill(self,"displayPage:",{aSymbol:aSymbol},globals.OldSlMainFrame)})},
args: ["aSymbol"],
source: "displayPage: aSymbol\x0a\x0a\x09self displayPage: aSymbol withArgs: nil",
messageSends: ["displayPage:withArgs:"],
referencedClasses: []
}),
globals.OldSlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "displayPage:withArgs:",
protocol: 'actions',
fn: function (aSymbol,aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $receiver;
self["@contents"]=self._pageAt_(aSymbol);
if(($receiver = aDictionary) == null || $receiver.isNil){
aDictionary;
} else {
_st(self["@contents"])._pushArgs_(aDictionary);
};
self._updateContents();
return self}, function($ctx1) {$ctx1.fill(self,"displayPage:withArgs:",{aSymbol:aSymbol,aDictionary:aDictionary},globals.OldSlMainFrame)})},
args: ["aSymbol", "aDictionary"],
source: "displayPage: aSymbol withArgs: aDictionary\x0a\x0a\x09contents := self pageAt: aSymbol.\x0a\x09aDictionary ifNotNil: [ contents pushArgs: aDictionary ].\x0a\x09\x0a\x09self updateContents.",
messageSends: ["pageAt:", "ifNotNil:", "pushArgs:", "updateContents"],
referencedClasses: []
}),
globals.OldSlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "displayReportDetails:",
protocol: 'actions',
fn: function (aReport){
var self=this;
function $SlDetailsFrame(){return globals.SlDetailsFrame||(typeof SlDetailsFrame=="undefined"?nil:SlDetailsFrame)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@pages"])._at_put_("details",_st($SlDetailsFrame())._withReport_(aReport));
self._displayPage_("details");
return self}, function($ctx1) {$ctx1.fill(self,"displayReportDetails:",{aReport:aReport},globals.OldSlMainFrame)})},
args: ["aReport"],
source: "displayReportDetails: aReport\x0a\x0a\x09pages at: #details put: (SlDetailsFrame withReport: aReport).\x0a\x09self displayPage: #details.",
messageSends: ["at:put:", "withReport:", "displayPage:"],
referencedClasses: ["SlDetailsFrame"]
}),
globals.OldSlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "errorPageEvent:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._displayErrorPage_("error");
return self}, function($ctx1) {$ctx1.fill(self,"errorPageEvent:",{anAnnouncement:anAnnouncement},globals.OldSlMainFrame)})},
args: ["anAnnouncement"],
source: "errorPageEvent: anAnnouncement\x0a\x09\x0a\x09self displayErrorPage: #error",
messageSends: ["displayErrorPage:"],
referencedClasses: []
}),
globals.OldSlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.OldSlMainFrame.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._initializePages();
self._displayPage_(_st(self._class())._defaultPage());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OldSlMainFrame)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self initializePages.\x0a\x09self displayPage: self class defaultPage",
messageSends: ["initialize", "initializePages", "displayPage:", "defaultPage", "class"],
referencedClasses: []
}),
globals.OldSlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePages",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@pages"]=_st($Dictionary())._new();
$ctx1.sendIdx["new"]=1;
_st(_st(self._class())._pages())._do_((function(eachPage){
return smalltalk.withContext(function($ctx2) {
return _st(self["@pages"])._at_put_(_st(eachPage)._key(),_st(_st(eachPage)._value())._new());
}, function($ctx2) {$ctx2.fillBlock({eachPage:eachPage},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializePages",{},globals.OldSlMainFrame)})},
args: [],
source: "initializePages\x0a\x0a\x09pages := Dictionary new.\x0a\x0a\x09self class pages do: [ :eachPage |\x0a\x09\x09pages at: eachPage key put: eachPage value new ].",
messageSends: ["new", "do:", "pages", "class", "at:put:", "key", "value"],
referencedClasses: ["Dictionary"]
}),
globals.OldSlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "pageAt:",
protocol: 'accessing',
fn: function (aSymbol){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(self["@pages"])._at_ifAbsent_(aSymbol,(function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(self["@pages"])._at_("notFound");
_st($2)._pushArgs_(_st($Dictionary())._from_(["message".__minus_gt("page not found")]));
$3=_st($2)._yourself();
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"pageAt:",{aSymbol:aSymbol},globals.OldSlMainFrame)})},
args: ["aSymbol"],
source: "pageAt: aSymbol\x0a\x0a\x09^ pages at: aSymbol ifAbsent: [\x0a\x09\x09(pages at: #notFound)\x0a\x09\x09\x09pushArgs: (Dictionary from: {#message -> 'page not found'});\x0a\x09\x09\x09yourself ]",
messageSends: ["at:ifAbsent:", "pushArgs:", "at:", "from:", "->", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.OldSlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "registerEvents",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.OldSlMainFrame.superclass.fn.prototype._registerEvents.apply(_st(self), []));
$ctx1.supercall = false;
_st(_st(self._class())._events())._do_((function(eventAssociation){
return smalltalk.withContext(function($ctx2) {
return _st(self._announcer())._on_send_to_(_st(eventAssociation)._key(),_st(eventAssociation)._value(),self);
}, function($ctx2) {$ctx2.fillBlock({eventAssociation:eventAssociation},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerEvents",{},globals.OldSlMainFrame)})},
args: [],
source: "registerEvents\x0a\x0a\x09super registerEvents.\x0a\x09\x0a\x09self class events do: [ :eventAssociation |\x0a\x09\x09self announcer\x0a\x09\x09\x09on: eventAssociation key\x0a\x09\x09\x09send: eventAssociation value\x0a\x09\x09\x09to: self ]",
messageSends: ["registerEvents", "do:", "events", "class", "on:send:to:", "announcer", "key", "value"],
referencedClasses: []
}),
globals.OldSlMainFrame);

smalltalk.addMethod(
smalltalk.method({
selector: "reportSelectedEvent:",
protocol: 'events',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._displayPage_("details");
return self}, function($ctx1) {$ctx1.fill(self,"reportSelectedEvent:",{anAnnouncement:anAnnouncement},globals.OldSlMainFrame)})},
args: ["anAnnouncement"],
source: "reportSelectedEvent: anAnnouncement\x0a\x0a\x09self displayPage: #details",
messageSends: ["displayPage:"],
referencedClasses: []
}),
globals.OldSlMainFrame);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultPage",
protocol: 'configuration',
fn: function (){
var self=this;
return "loading";
},
args: [],
source: "defaultPage\x0a\x0a\x09^ #loading",
messageSends: [],
referencedClasses: []
}),
globals.OldSlMainFrame.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "events",
protocol: 'configuration',
fn: function (){
var self=this;
function $SlDataLoadedAnnouncement(){return globals.SlDataLoadedAnnouncement||(typeof SlDataLoadedAnnouncement=="undefined"?nil:SlDataLoadedAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[_st($SlDataLoadedAnnouncement()).__minus_gt("loadedDataEvent:")];
return $1;
}, function($ctx1) {$ctx1.fill(self,"events",{},globals.OldSlMainFrame.klass)})},
args: [],
source: "events\x0a\x0a\x09^{ SlDataLoadedAnnouncement -> #loadedDataEvent: }",
messageSends: ["->"],
referencedClasses: ["SlDataLoadedAnnouncement"]
}),
globals.OldSlMainFrame.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "pages",
protocol: 'configuration',
fn: function (){
var self=this;
function $SlListFrame(){return globals.SlListFrame||(typeof SlListFrame=="undefined"?nil:SlListFrame)}
function $SlDetailsFrame(){return globals.SlDetailsFrame||(typeof SlDetailsFrame=="undefined"?nil:SlDetailsFrame)}
function $SlLoadingFrame(){return globals.SlLoadingFrame||(typeof SlLoadingFrame=="undefined"?nil:SlLoadingFrame)}
function $SlImagesFrame(){return globals.SlImagesFrame||(typeof SlImagesFrame=="undefined"?nil:SlImagesFrame)}
function $SlStackTraceListView(){return globals.SlStackTraceListView||(typeof SlStackTraceListView=="undefined"?nil:SlStackTraceListView)}
function $SlStackTraceView(){return globals.SlStackTraceView||(typeof SlStackTraceView=="undefined"?nil:SlStackTraceView)}
function $SlTestFrame(){return globals.SlTestFrame||(typeof SlTestFrame=="undefined"?nil:SlTestFrame)}
function $SlErrorFrame(){return globals.SlErrorFrame||(typeof SlErrorFrame=="undefined"?nil:SlErrorFrame)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$6,$7,$8,$1;
$2="list".__minus_gt($SlListFrame());
$ctx1.sendIdx["->"]=1;
$3="details".__minus_gt($SlDetailsFrame());
$ctx1.sendIdx["->"]=2;
$4="loading".__minus_gt($SlLoadingFrame());
$ctx1.sendIdx["->"]=3;
$5="images".__minus_gt($SlImagesFrame());
$ctx1.sendIdx["->"]=4;
$6="stacktracelist".__minus_gt($SlStackTraceListView());
$ctx1.sendIdx["->"]=5;
$7="stacktraces".__minus_gt($SlStackTraceView());
$ctx1.sendIdx["->"]=6;
$8="test".__minus_gt($SlTestFrame());
$ctx1.sendIdx["->"]=7;
$1=[$2,$3,$4,$5,$6,$7,$8,"notFound".__minus_gt($SlErrorFrame())];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pages",{},globals.OldSlMainFrame.klass)})},
args: [],
source: "pages\x0a\x0a\x09^ {\x0a\x09\x09#list -> SlListFrame.\x0a\x09\x09#details -> SlDetailsFrame.\x0a\x09\x09#loading -> SlLoadingFrame.\x0a\x09\x09#images -> SlImagesFrame.\x0a\x09\x09#stacktracelist -> SlStackTraceListView.\x0a\x09\x09#stacktraces -> SlStackTraceView.\x0a\x09\x09\x0a\x09\x09#test -> SlTestFrame.\x0a\x09\x09#notFound -> SlErrorFrame\x0a\x09}",
messageSends: ["->"],
referencedClasses: ["SlListFrame", "SlDetailsFrame", "SlLoadingFrame", "SlImagesFrame", "SlStackTraceListView", "SlStackTraceView", "SlTestFrame", "SlErrorFrame"]
}),
globals.OldSlMainFrame.klass);


smalltalk.addClass('ShoreLine', globals.SlObject, ['root', 'router'], 'ShoreLine-Application');
globals.ShoreLine.comment="The main rooter of the application.";
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.ShoreLine.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@root"]=_st(_st(self._class())._startWidget())._new();
self["@router"]=self._initializeRouter();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.ShoreLine)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09root := self class startWidget new.\x0a\x09router := self initializeRouter.",
messageSends: ["initialize", "new", "startWidget", "class", "initializeRouter"],
referencedClasses: []
}),
globals.ShoreLine);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeRouter",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlRouter(){return globals.SlRouter||(typeof SlRouter=="undefined"?nil:SlRouter)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st($SlRouter())._withRoutes_notFound_(_st(_st(self._class())._routes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._key()).__minus_gt((function(args){
return smalltalk.withContext(function($ctx3) {
$2=self._root();
$ctx3.sendIdx["root"]=1;
return _st($2)._displayPage_withArgs_(_st(each)._value(),args);
}, function($ctx3) {$ctx3.fillBlock({args:args},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})),(function(args){
return smalltalk.withContext(function($ctx2) {
return _st(self._root())._pageNotFound_(args);
}, function($ctx2) {$ctx2.fillBlock({args:args},$ctx1,3)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeRouter",{},globals.ShoreLine)})},
args: [],
source: "initializeRouter\x0a\x0a\x09^ SlRouter\x0a\x09\x09withRoutes: (self class routes collect: [ :each |\x0a\x09\x09\x09each key -> [ :args | self root displayPage: each value withArgs: args ] ])\x0a\x09\x09notFound: [ :args | self root pageNotFound: args ]",
messageSends: ["withRoutes:notFound:", "collect:", "routes", "class", "->", "key", "displayPage:withArgs:", "root", "value", "pageNotFound:"],
referencedClasses: ["SlRouter"]
}),
globals.ShoreLine);

smalltalk.addMethod(
smalltalk.method({
selector: "registerEvents",
protocol: 'events',
fn: function (){
var self=this;
function $SlHeliosPopupAnnouncement(){return globals.SlHeliosPopupAnnouncement||(typeof SlHeliosPopupAnnouncement=="undefined"?nil:SlHeliosPopupAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.ShoreLine.superclass.fn.prototype._registerEvents.apply(_st(self), []));
$ctx1.supercall = false;
_st(self._announcer())._on_do_($SlHeliosPopupAnnouncement(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(require)._value_("amber/devel"))._popupHelios();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerEvents",{},globals.ShoreLine)})},
args: [],
source: "registerEvents\x0a\x0a\x09super registerEvents.\x0a\x09\x0a\x09self announcer\x0a\x09\x09on: SlHeliosPopupAnnouncement\x0a\x09\x09do: [ (require value: 'amber/devel') popupHelios ].",
messageSends: ["registerEvents", "on:do:", "announcer", "popupHelios", "value:"],
referencedClasses: ["SlHeliosPopupAnnouncement"]
}),
globals.ShoreLine);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@root"];
return $1;
},
args: [],
source: "root\x0a\x0a\x09^ root",
messageSends: [],
referencedClasses: []
}),
globals.ShoreLine);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._root())._appendToJQuery_(_st(_st(self._class())._canvas())._asJQuery());
_st(self["@router"])._update();
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.ShoreLine)})},
args: [],
source: "start\x0a\x0a\x09self root appendToJQuery: self class canvas asJQuery.\x0a\x09router update.",
messageSends: ["appendToJQuery:", "root", "asJQuery", "canvas", "class", "update"],
referencedClasses: []
}),
globals.ShoreLine);


globals.ShoreLine.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
protocol: 'accessing',
fn: function (){
var self=this;
return "body";
},
args: [],
source: "canvas\x0a\x0a\x09^ 'body'",
messageSends: [],
referencedClasses: []
}),
globals.ShoreLine.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == null){
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.ShoreLine.klass)})},
args: [],
source: "current\x0a\x0a\x09^ current ifNil: [ current := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.ShoreLine.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "routes",
protocol: 'routes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$6,$1;
$2="/".__minus_gt("home");
$ctx1.sendIdx["->"]=1;
$3="/test/{message}".__minus_gt("test");
$ctx1.sendIdx["->"]=2;
$4="/reports".__minus_gt("images");
$ctx1.sendIdx["->"]=3;
$5="/reports/{id}".__minus_gt("test");
$ctx1.sendIdx["->"]=4;
$6="/stacktraces".__minus_gt("stacktracelist");
$ctx1.sendIdx["->"]=5;
$1=[$2,$3,$4,$5,$6,"/stacktraces/{id}".__minus_gt("stacktraces")];
return $1;
}, function($ctx1) {$ctx1.fill(self,"routes",{},globals.ShoreLine.klass)})},
args: [],
source: "routes\x0a\x0a\x09^ {\x0a\x09'/' -> #home.\x0a\x09'/test/{message}' -> #test.\x0a\x09'/reports' -> #images.\x0a\x09'/reports/{id}' -> #test.\x0a\x09'/stacktraces' -> #stacktracelist.\x0a\x09'/stacktraces/{id}' -> #stacktraces\x0a\x09}",
messageSends: ["->"],
referencedClasses: []
}),
globals.ShoreLine.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {
_st(self._current())._start();
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.ShoreLine.klass)})},
args: [],
source: "start\x0a\x0a\x09self current start",
messageSends: ["start", "current"],
referencedClasses: []
}),
globals.ShoreLine.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "startWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $SlMainFrame(){return globals.SlMainFrame||(typeof SlMainFrame=="undefined"?nil:SlMainFrame)}
return $SlMainFrame();
},
args: [],
source: "startWidget\x0a\x0a\x09^ SlMainFrame\x0a\x09\x22^ SlTestFrame\x22",
messageSends: [],
referencedClasses: ["SlMainFrame"]
}),
globals.ShoreLine.klass);


smalltalk.addClass('SlSettings', globals.Object, [], 'ShoreLine-Application');

smalltalk.addMethod(
smalltalk.method({
selector: "colors",
protocol: 'status',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) {
var $3,$4,$5,$6,$7,$8,$2,$1;
$3="Active".__minus_gt("#FF6600");
$ctx1.sendIdx["->"]=1;
$4="Work Needed".__minus_gt("#FF0000");
$ctx1.sendIdx["->"]=2;
$5="Closed".__minus_gt("rgb(128,128,128)");
$ctx1.sendIdx["->"]=3;
$6="Resolved".__minus_gt("#666666");
$ctx1.sendIdx["->"]=4;
$7="Working On".__minus_gt("#3388FF");
$ctx1.sendIdx["->"]=5;
$8="On Hold".__minus_gt("#55FFFF");
$ctx1.sendIdx["->"]=6;
$2=[$3,$4,$5,$6,$7,$8,"unknown".__minus_gt("lightgray")];
$1=_st($Dictionary())._from_($2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"colors",{},smalltalk.SlSettings.klass)})},
args: [],
source: "colors\x0a\x0a\x09^ Dictionary from: {\x0a\x09\x09'Active' -> '#FF6600'.\x0a\x09\x09'Work Needed' -> '#FF0000'.\x0a\x09\x09'Closed' -> 'rgb(128,128,128)'.\x0a\x09\x09'Resolved' -> '#666666'.\x0a\x09\x09'Working On' -> '#3388FF'.\x0a\x09\x09'On Hold' -> '#55FFFF'.\x0a\x09\x09'unknown' -> 'lightgray'\x0a\x09}",
messageSends: ["from:", "->"],
referencedClasses: ["Dictionary"]
}),
globals.SlSettings.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "statuses",
protocol: 'status',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {
var $1;
$1=["unknown", "Resolved", "Fixed", "Work", "Active"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"statuses",{},smalltalk.SlSettings.klass)})},
args: [],
source: "statuses\x0a\x0a\x09^ #( unknown Resolved Fixed Work Active )",
messageSends: [],
referencedClasses: []
}),
globals.SlSettings.klass);

});
