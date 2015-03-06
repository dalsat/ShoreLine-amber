define("shoreline/ShoreLine", ["amber/boot", "amber-contrib-web/Web", "amber_core/Kernel-Objects", "shoreline/ShoreLine-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('ShoreLine');
$core.packages["ShoreLine"].innerEval = function (expr) { return eval(expr); };
$core.packages["ShoreLine"].transport = {"type":"amd","amdNamespace":"shoreline"};

$core.addClass('MozPersonaLogin', $globals.Widget, ['user'], 'ShoreLine');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MozPersonaLogin.comment="Mozilla Persona login manager.";
//>>excludeEnd("ide");
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
$globals.MozPersonaLogin.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@user"]=nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MozPersonaLogin)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09user := nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.MozPersonaLogin);

$core.addMethod(
$core.method({
selector: "loadLibraryDo:",
protocol: 'initialization',
fn: function (aBlock){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "loadLibraryDo: aBlock\x0a\x0a\x09\x22jQuery getScript: 'https://login.persona.org/include.js'\x0a\x09\x09onSuccess: aBlock.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MozPersonaLogin);

$core.addMethod(
$core.method({
selector: "login",
protocol: 'actions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "login\x0a\x0a\x09\x22^ [ navigator id request ]\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MozPersonaLogin);

$core.addMethod(
$core.method({
selector: "logout",
protocol: 'actions',
fn: function (){
var self=this;
self["@user"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "logout\x0a\x0a\x09user := nil.\x0a\x09\x22^ [ navigator id logout ]\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MozPersonaLogin);

$core.addMethod(
$core.method({
selector: "renderButtonOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._a();
$recv($1)._href_("#");
$recv($1)._onClick_(self._login());
$2=$recv($1)._with_("Login");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonOn:",{html:html},$globals.MozPersonaLogin)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonOn: html\x0a\x0a\x09html a\x0a\x09\x09href: '#';\x0a\x09\x09onClick: self login;\x0a\x09\x09\x22style: self class buttonStyle;\x22\x0a\x09\x09with: 'Login'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["href:", "a", "onClick:", "login", "with:"]
}),
$globals.MozPersonaLogin);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._loadLibraryDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._watch();
return self._renderButtonOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.MozPersonaLogin)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09self loadLibraryDo: [\x0a\x09\x09self watch.\x0a\x09\x09self renderButtonOn: html ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["loadLibraryDo:", "watch", "renderButtonOn:"]
}),
$globals.MozPersonaLogin);

$core.addMethod(
$core.method({
selector: "watch",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._watch_onLogin_onLogout_(self["@user"],(function(assertion){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(window)._alert_("login attempt");
return $recv(console)._log_(assertion);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({assertion:assertion},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._logout();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"watch",{},$globals.MozPersonaLogin)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "watch\x0a\x0a\x09self watch: user\x0a\x09\x09onLogin: [ :assertion | window alert: 'login attempt'. console log: assertion ]\x0a\x09\x09onLogout: [ self logout ]\x0a\x0a\x22\x09navigator id watch: (Dictionary new\x0a\x09\x09at: #loggedInUser put: user;\x0a\x09\x09at: #onlogin put: [ :assertion | window alert: 'login attempt'. console log: assertion ];\x0a\x09\x09at: #onlogout put: [ window alert: 'logout'. user := nil ];\x0a\x09\x09yourself)\x22\x0a\x0a\x22\x09console log: (Dictionary new\x0a\x09\x09at: #loggedInUser put: user;\x0a\x09\x09at: #onlogin put: [ :assertion | window alert: 'login attempt'. console log: assertion ];\x0a\x09\x09at: #onlogout put: [ window alert: 'logout'. user := nil ];\x0a\x09\x09yourself)\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["watch:onLogin:onLogout:", "alert:", "log:", "logout"]
}),
$globals.MozPersonaLogin);

$core.addMethod(
$core.method({
selector: "watch:onLogin:onLogout:",
protocol: 'actions',
fn: function (anUser,aBlock,logoutBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
navigator.id.watch({
		loggedInUser: self['@anUser'],
		onlogin: function(assertion) { self._verify_(assertion); },
		onlogout: function() { logoutBlock(); }
	});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"watch:onLogin:onLogout:",{anUser:anUser,aBlock:aBlock,logoutBlock:logoutBlock},$globals.MozPersonaLogin)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anUser", "aBlock", "logoutBlock"],
source: "watch: anUser onLogin: aBlock onLogout: logoutBlock\x0a\x0a\x09<navigator.id.watch({\x0a\x09\x09loggedInUser: self['@anUser'],\x0a\x09\x09onlogin: function(assertion) { self._verify_(assertion); },\x0a\x09\x09onlogout: function() { logoutBlock(); }\x0a\x09})>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MozPersonaLogin);


$core.addMethod(
$core.method({
selector: "buttonStyle",
protocol: 'style',
fn: function (){
var self=this;
return "background: url(assets/icons/plain_sign_in_black.png) no-repeat;\x0a\x09width: 100px;\x0a\x09margin-top: 10px;\x0a\x09margin-right: 15px;";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "buttonStyle\x0a\x0a\x09^ 'background: url(assets/icons/plain_sign_in_black.png) no-repeat;\x0a\x09width: 100px;\x0a\x09margin-top: 10px;\x0a\x09margin-right: 15px;'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MozPersonaLogin.klass);


$core.addClass('ShoreLine', $globals.SlWidget, ['root', 'router'], 'ShoreLine');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ShoreLine.comment="The main rooter of the application.";
//>>excludeEnd("ide");
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
$globals.ShoreLine.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@root"]=$recv($recv(self._class())._startWidget())._new();
self["@router"]=self._initializeRouter();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ShoreLine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09root := self class startWidget new.\x0a\x09router := self initializeRouter.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "startWidget", "class", "initializeRouter"]
}),
$globals.ShoreLine);

$core.addMethod(
$core.method({
selector: "initializeRouter",
protocol: 'initialization',
fn: function (){
var self=this;
function $SlRouter(){return $globals.SlRouter||(typeof SlRouter=="undefined"?nil:SlRouter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv($SlRouter())._withRoutes_notFound_($recv($recv(self._class())._pages())._collect_((function(eachPage){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(eachPage)._path()).__minus_gt((function(args){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=self._root();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["root"]=1;
//>>excludeEnd("ctx");
return $recv($2)._displayPage_withArgs_(eachPage,args);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({args:args},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachPage:eachPage},$ctx1,1)});
//>>excludeEnd("ctx");
})),(function(args){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._root())._pageNotFound_(args);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({args:args},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeRouter",{},$globals.ShoreLine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeRouter\x0a\x0a\x09^ SlRouter\x0a\x09\x09withRoutes: (self class pages collect: [ :eachPage |\x0a\x09\x09\x09eachPage path -> [ :args | self root displayPage: eachPage withArgs: args ] ])\x0a\x09\x09notFound: [ :args | self root pageNotFound: args ]",
referencedClasses: ["SlRouter"],
//>>excludeEnd("ide");
messageSends: ["withRoutes:notFound:", "collect:", "pages", "class", "->", "path", "displayPage:withArgs:", "root", "pageNotFound:"]
}),
$globals.ShoreLine);

$core.addMethod(
$core.method({
selector: "registerEvents",
protocol: 'events',
fn: function (){
var self=this;
function $SlHeliosPopupAnnouncement(){return $globals.SlHeliosPopupAnnouncement||(typeof SlHeliosPopupAnnouncement=="undefined"?nil:SlHeliosPopupAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ShoreLine.superclass.fn.prototype._registerEvents.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._announcer())._on_do_($SlHeliosPopupAnnouncement(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(require)._value_("amber/devel"))._popupHelios();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerEvents",{},$globals.ShoreLine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerEvents\x0a\x0a\x09super registerEvents.\x0a\x0a\x09self announcer\x0a\x09\x09on: SlHeliosPopupAnnouncement\x0a\x09\x09do: [ (require value: 'amber/devel') popupHelios ].",
referencedClasses: ["SlHeliosPopupAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["registerEvents", "on:do:", "announcer", "popupHelios", "value:"]
}),
$globals.ShoreLine);

$core.addMethod(
$core.method({
selector: "root",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@root"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "root\x0a\x0a\x09^ root",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ShoreLine);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._root())._appendToJQuery_($recv($recv(self._class())._canvas())._asJQuery());
$recv(self["@router"])._update();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.ShoreLine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x0a\x09self root appendToJQuery: self class canvas asJQuery.\x0a\x09router update.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "root", "asJQuery", "canvas", "class", "update"]
}),
$globals.ShoreLine);

$core.addMethod(
$core.method({
selector: "url:",
protocol: 'navigation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(window)._location())._hash_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},$globals.ShoreLine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "url: aString\x0a\x0a\x09window location hash: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hash:", "location"]
}),
$globals.ShoreLine);


$globals.ShoreLine.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "canvas",
protocol: 'accessing',
fn: function (){
var self=this;
return "body";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canvas\x0a\x0a\x09^ 'body'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ShoreLine.klass);

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
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.ShoreLine.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x0a\x09^ current ifNil: [ current := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.ShoreLine.klass);

$core.addMethod(
$core.method({
selector: "menuPages",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._pages())._select_("showInMenu");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"menuPages",{},$globals.ShoreLine.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuPages\x0a\x0a\x09^ self pages select: #showInMenu",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "pages"]
}),
$globals.ShoreLine.klass);

$core.addMethod(
$core.method({
selector: "pages",
protocol: 'accessing',
fn: function (){
var self=this;
function $SlPage(){return $globals.SlPage||(typeof SlPage=="undefined"?nil:SlPage)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($SlPage())._allSubclasses())._select_("enabled");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pages",{},$globals.ShoreLine.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pages\x0a\x0a\x09^ SlPage allSubclasses select: #enabled",
referencedClasses: ["SlPage"],
//>>excludeEnd("ide");
messageSends: ["select:", "allSubclasses"]
}),
$globals.ShoreLine.klass);

$core.addMethod(
$core.method({
selector: "routes",
protocol: 'routes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$6,$7,$1;
$2="/".__minus_gt("home");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$3="/test/{message}".__minus_gt("test");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$4="/reports".__minus_gt("images");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$5="/reports/{id}".__minus_gt("test");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$6="/stacktraces".__minus_gt("stacktraces");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$7="/stacktraces/author/{authorName}".__minus_gt("stacktraces");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=6;
//>>excludeEnd("ctx");
$1=[$2,$3,$4,$5,$6,$7,"/stacktraces/{id}".__minus_gt("stacktraces")];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"routes",{},$globals.ShoreLine.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "routes\x0a\x0a\x09^ {\x0a\x09'/' -> #home.\x0a\x09'/test/{message}' -> #test.\x0a\x09'/reports' -> #images.\x0a\x09'/reports/{id}' -> #test.\x0a\x09'/stacktraces' -> #stacktraces.\x0a\x09'/stacktraces/author/{authorName}' -> #stacktraces.\x0a\x09'/stacktraces/{id}' -> #stacktraces\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["->"]
}),
$globals.ShoreLine.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._current())._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.ShoreLine.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x0a\x09self current start",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["start", "current"]
}),
$globals.ShoreLine.klass);

$core.addMethod(
$core.method({
selector: "startWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $SlMainFrame(){return $globals.SlMainFrame||(typeof SlMainFrame=="undefined"?nil:SlMainFrame)}
return $SlMainFrame();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startWidget\x0a\x0a\x09^ SlMainFrame\x0a\x09\x22^ SlTestFrame\x22",
referencedClasses: ["SlMainFrame"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ShoreLine.klass);


$core.addClass('SlSettings', $globals.Object, [], 'ShoreLine');

$core.addMethod(
$core.method({
selector: "colors",
protocol: 'status',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$5,$6,$7,$8,$2,$1;
$3="Active".__minus_gt("#FF6600");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$4="Work Needed".__minus_gt("#FF0000");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$5="Closed".__minus_gt("rgb(128,128,128)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$6="Resolved".__minus_gt("#666666");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$7="Working On".__minus_gt("#3388FF");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$8="On Hold".__minus_gt("#55FFFF");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=6;
//>>excludeEnd("ctx");
$2=[$3,$4,$5,$6,$7,$8,"unknown".__minus_gt("lightgray")];
$1=$recv($Dictionary())._from_($2);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colors",{},$globals.SlSettings.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "colors\x0a\x0a\x09^ Dictionary from: {\x0a\x09\x09'Active' -> '#FF6600'.\x0a\x09\x09'Work Needed' -> '#FF0000'.\x0a\x09\x09'Closed' -> 'rgb(128,128,128)'.\x0a\x09\x09'Resolved' -> '#666666'.\x0a\x09\x09'Working On' -> '#3388FF'.\x0a\x09\x09'On Hold' -> '#55FFFF'.\x0a\x09\x09'unknown' -> 'lightgray'\x0a\x09}",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["from:", "->"]
}),
$globals.SlSettings.klass);

$core.addMethod(
$core.method({
selector: "statuses",
protocol: 'status',
fn: function (){
var self=this;
var $1;
$1=["unknown", "Resolved", "Fixed", "Work", "Active"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "statuses\x0a\x0a\x09^ #( unknown Resolved Fixed Work Active )",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SlSettings.klass);

});
