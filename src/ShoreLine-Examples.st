Smalltalk createPackage: 'ShoreLine-Examples'!
Widget subclass: #SlCounterWidget
	instanceVariableNames: 'counter header'
	package: 'ShoreLine-Examples'!

!SlCounterWidget methodsFor: 'accessing'!

counter
	^ counter ifNil: [ counter := TDClientProxy on: '/slcounter' ]
!

counter: aCounter
	counter := aCounter
! !

!SlCounterWidget methodsFor: 'actions'!

decrease
	self counter decrease.
	self counter then: [ self update ]
!

increase
	self counter increaseBy: 5.
	self counter then: [ self update ]
! !

!SlCounterWidget methodsFor: 'rendering'!

render
	self counter connect.
	self counter then: [ 
		self appendToJQuery: 'body' asJQuery ]
!

renderOn: html
	header := html h1 with: self counter count asString.
	html button 
		with: '++';
		onClick: [ self increase ].
	html button 
		with: '--';
		onClick: [ self decrease ]
! !

!SlCounterWidget methodsFor: 'updating'!

update
	header contents: [ :html |
		html with: self counter count asString ]
! !

!SlCounterWidget class methodsFor: 'not yet classified'!

initialize
	"self new render"
!

on: aProxy
	^ self new
		counter: aProxy;
		yourself
! !

