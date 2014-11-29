Smalltalk createPackage: 'ShoreLine-Routing'!
SlObject subclass: #SlRoute
	instanceVariableNames: 'url callback args'
	package: 'ShoreLine-Routing'!

!SlRoute methodsFor: 'accessing'!

callback
	^ callback
!

callback: anObject
	callback := anObject
!

url
	^ url
!

url: anObject

	url := anObject.
	self compile.
! !

!SlRoute methodsFor: 'arguments extraction'!

argumentsOf: anUrl
	| newDict |
	
	newDict := Dictionary new.
	args
		with: ((anUrl asString matchesOf: url asString) ifNil: [ {} ]) allButFirst
		do: [ :first :second | newDict at: first put: second ].
	^ newDict
!

compile
	| route |
	
	route := url asString.
	args := ((route matchesOf: '{([^/]+)}') ifNil: [ {} ]) allButFirst.
	url := String streamContents: [ :stream |
		stream
			nextPut: '^';
			nextPutAll: (route replace: '{[^/]+}' with: '([^/]+)');
			nextPut: '$' ].
! !

!SlRoute methodsFor: 'printing'!

printOn: aStream

	super printOn: aStream.
	aStream << '(' << url asString << ')'
! !

!SlRoute methodsFor: 'routing'!

log: anUrl

	console log: (String streamContents: [ :stream |
		stream
			<< '[route] confronting '
			<< anUrl printString << ' with '
			<< url printString << ': '
			<< (anUrl asString match: anUrl) printString ])
!

match: anUrl

	"self log: anUrl."
	^ anUrl asString match: url
!

parse: anUrl

	^ (self match: anUrl)
		ifTrue: [
			self callback value: (self argumentsOf: anUrl).
			true ]
! !

!SlRoute class methodsFor: 'instance creation'!

on: aString withCallback: aBlock

	^ self new
		url: (SlUrl withHash: aString);
		callback: aBlock;
		yourself
! !

SlObject subclass: #SlRouter
	instanceVariableNames: 'routes'
	package: 'ShoreLine-Routing'!

!SlRouter methodsFor: 'events'!

registerEvents

	window
		addEventListener: 'hashchange' with: [ :event | self updateRoute ].
		"addEventListener: 'load' with: [ :event | self updateRoute ]."
!

updateRoute

	self parse: SlUrl current
! !

!SlRouter methodsFor: 'initialization'!

initialize

	super initialize.
	routes := {}.
!

initializeRoutes

	self class routes do: [ :each |
		self registerRoute: each key with: each value ]
! !

!SlRouter methodsFor: 'routing'!

parse: anUrl

	^ routes detect: [ :eachRoute | eachRoute parse: anUrl ]
!

registerRoute: aString with: aBlock

	routes add: (SlRoute on: aString withCallback: aBlock)
!

registerRoutes: anAssociationCollection

	anAssociationCollection do: [ :each | self registerRoute: each key with: each value ]
! !

!SlRouter class methodsFor: 'instance creation'!

register

	^ self new
		initializeRoutes;
		yourself
!

registerWithRoutes: aCollection

	^ self new
		registerRoutes: aCollection;
		yourself
! !

!SlRouter class methodsFor: 'routes'!

routeNotFound

	^ '.*' -> [ :arguments | self announce: (SlTestPageAnnouncement withText: '404 - page not found')]
!

routes

	^ {
	'/' -> [ :args | self announce: (SlTestPageAnnouncement withText: 'root') ].
	'/test/{id}' -> [ :args | self announce: (SlTestPageAnnouncement withText: ('/test/', (args at: 'id'))) ].
	'/reports' -> [ :args | self announce: (SlTestPageAnnouncement withText: '/reports') ].
	'/reports/{id}' -> [ :args | self announce: (SlTestPageAnnouncement withText: ('/reports/', (args at: 'id'))) ].
	
	self routeNotFound "<- fallback route" }
! !

SlObject subclass: #SlUrl
	instanceVariableNames: 'hash'
	package: 'ShoreLine-Routing'!

!SlUrl methodsFor: 'accessing'!

hash
	^ hash
!

hash: anObject

	hash := self class normalize: anObject
! !

!SlUrl methodsFor: 'comparing'!

= anObject

	^ (anObject respondsTo: #hash)
		ifTrue: [ self hash = anObject hash ]
		ifFalse: [ false ]
! !

!SlUrl methodsFor: 'converting'!

asString

	^ hash
! !

!SlUrl methodsFor: 'printing'!

printOn: aStream

	super printOn: aStream.
	aStream
		<< '('
		<< (hash ifNil: [ '' ])
		<< ')'
! !

!SlUrl class methodsFor: 'actions'!

normalize: aString

	^ aString trimLeft: '/#!!'
! !

!SlUrl class methodsFor: 'instance creation'!

current

	^ self withHash: document location hash
!

withHash: aString

	^ self new
		hash: aString;
		yourself
! !

