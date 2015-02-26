Smalltalk createPackage: 'ShoreLine-Router'!
Object subclass: #SlRoute
	instanceVariableNames: 'url callback args'
	package: 'ShoreLine-Router'!

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

argumentsOf: aString
	| newDict |
	
	newDict := Dictionary new.
	args
		with: ((aString matchesOf: url asString) ifNil: [ {} ]) allButFirst
		do: [ :first :second | newDict at: first put: second ].
	^ newDict
!

compile
	| route |
	
	route := self class normalize: url.
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

handleRequest: anUrl

	^ (self match: anUrl)
		ifTrue: [
			self callback value: (self argumentsOf: anUrl).
			true ]
!

log: aString

	console log: (String streamContents: [ :stream |
		stream
			<< '[route] confronting '
			<< aString << ' with '
			<< url << ': '
			<< (aString match: url) printString ])
!

match: aString

	"self log: aString."
	^ aString match: url
! !

!SlRoute class methodsFor: 'instance creation'!

on: aString withCallback: aBlock

	^ self new
		url: aString;
		callback: aBlock;
		yourself
! !

!SlRoute class methodsFor: 'utils'!

normalize: anUrl

	^ '/', (anUrl trimLeft: '/#!!')
! !

Object subclass: #SlRouter
	instanceVariableNames: 'routes notFound'
	package: 'ShoreLine-Router'!

!SlRouter methodsFor: 'events'!

registerEvents

	window
		addEventListener: 'load' with: [ :event | self update ];
		addEventListener: 'hashchange' with: [ :event | self update ].
!

update

	self handleRequest: document location hash
! !

!SlRouter methodsFor: 'initialization'!

initialize

	super initialize.
	routes := {}.
	self registerEvents.
! !

!SlRouter methodsFor: 'routing'!

handleRequest: anUrl
	| url |
	url := SlRoute normalize: anUrl.
	^ routes
		detect: [ :eachRoute | eachRoute handleRequest: url ]
		ifNone: [ self notFound value: (Dictionary from: { #url -> url }) ]
!

notFound

	^ notFound
!

notFound: aBlock

	notFound := aBlock
!

register: aString with: aBlock

	routes add: (SlRoute on: aString withCallback: aBlock)
!

registerAll: anAssociationCollection

	anAssociationCollection do: [ :each | self register: each key with: each value ]
! !

!SlRouter class methodsFor: 'instance creation'!

withRoutes: aDictionary

	^ self new
		registerAll: aDictionary;
		yourself
!

withRoutes: aCollection notFound: aBlock

	^ self new
		registerAll: aCollection;
		notFound: aBlock;
		yourself
! !

