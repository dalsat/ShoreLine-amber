Smalltalk createPackage: 'ShoreLine'!
Widget subclass: #MozPersonaLogin
	instanceVariableNames: 'user'
	package: 'ShoreLine'!
!MozPersonaLogin commentStamp!
Mozilla Persona login manager.!

!MozPersonaLogin methodsFor: 'actions'!

login

	"^ [ navigator id request ]"
!

logout

	user := nil.
	"^ [ navigator id logout ]"
!

watch

	self watch: user
		onLogin: [ :assertion | window alert: 'login attempt'. console log: assertion ]
		onLogout: [ self logout ]

"	navigator id watch: (Dictionary new
		at: #loggedInUser put: user;
		at: #onlogin put: [ :assertion | window alert: 'login attempt'. console log: assertion ];
		at: #onlogout put: [ window alert: 'logout'. user := nil ];
		yourself)"

"	console log: (Dictionary new
		at: #loggedInUser put: user;
		at: #onlogin put: [ :assertion | window alert: 'login attempt'. console log: assertion ];
		at: #onlogout put: [ window alert: 'logout'. user := nil ];
		yourself)"
!

watch: anUser onLogin: aBlock onLogout: logoutBlock

	<navigator.id.watch({
		loggedInUser: self['@anUser'],
		onlogin: function(assertion) { self._verify_(assertion); },
		onlogout: function() { logoutBlock(); }
	})>
! !

!MozPersonaLogin methodsFor: 'initialization'!

initialize

	super initialize.
	user := nil.
!

loadLibraryDo: aBlock

	"jQuery getScript: 'https://login.persona.org/include.js'
		onSuccess: aBlock."
! !

!MozPersonaLogin methodsFor: 'rendering'!

renderButtonOn: html

	html a
		href: '#';
		onClick: self login;
		"style: self class buttonStyle;"
		with: 'Login'.
!

renderOn: html

	self loadLibraryDo: [
		self watch.
		self renderButtonOn: html ].
! !

!MozPersonaLogin class methodsFor: 'style'!

buttonStyle

	^ 'background: url(assets/icons/plain_sign_in_black.png) no-repeat;
	width: 100px;
	margin-top: 10px;
	margin-right: 15px;'
! !

SlWidget subclass: #ShoreLine
	instanceVariableNames: 'root router'
	package: 'ShoreLine'!
!ShoreLine commentStamp!
The main rooter of the application.!

!ShoreLine methodsFor: 'accessing'!

root

	^ root
!

start

	self root appendToJQuery: self class canvas asJQuery.
	router update.
! !

!ShoreLine methodsFor: 'events'!

registerEvents

	super registerEvents.

	self announcer
		on: SlHeliosPopupAnnouncement
		do: [ (require value: 'amber/devel') popupHelios ].
! !

!ShoreLine methodsFor: 'initialization'!

initialize

	super initialize.
	root := self class startWidget new.
	router := self initializeRouter.
!

initializeRouter

	^ SlRouter
		withRoutes: (self class pages collect: [ :eachPage |
			eachPage routes -> [ :args | self root displayPage: eachPage withArgs: args ] ])
		notFound: [ :args | self root pageNotFound: args ]
! !

!ShoreLine methodsFor: 'navigation'!

url: aString

	window location hash: aString
! !

ShoreLine class instanceVariableNames: 'current'!

!ShoreLine class methodsFor: 'accessing'!

canvas

	^ 'body'
!

current

	^ current ifNil: [ current := self new ]
!

menuPages

	^ self pages select: #showInMenu
!

pages

	^ SlPage allSubclasses select: #enabled
!

startWidget

	^ SlMainFrame
! !

!ShoreLine class methodsFor: 'starting'!

start

	self current start
! !

Object subclass: #SlSettings
	instanceVariableNames: ''
	package: 'ShoreLine'!

!SlSettings class methodsFor: 'status'!

colors

	^ Dictionary from: {
		'Active' -> '#FF6600'.
		'Work Needed' -> '#FF0000'.
		'Closed' -> 'rgb(128,128,128)'.
		'Resolved' -> '#666666'.
		'Working On' -> '#3388FF'.
		'On Hold' -> '#55FFFF'.
		'unknown' -> 'lightgray'
	}
!

statuses

	^ #( unknown Resolved Fixed Work Active )
! !

