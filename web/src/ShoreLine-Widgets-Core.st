Smalltalk createPackage: 'ShoreLine-Widgets-Core'!
Widget subclass: #SlWidget
	instanceVariableNames: 'canvas'
	package: 'ShoreLine-Widgets-Core'!

!SlWidget methodsFor: 'accessing'!

data

	^ SlData current at: self class dataTag
!

dataDo: aBlock
	| proxy |
	
	^ SlData current with: self class dataTag do: aBlock
!

session

	^ SlSession current
! !

!SlWidget methodsFor: 'actions'!

announce: anAnnouncement

	self announcer announce: anAnnouncement.
!

announcer

	^ SlAnnouncer current
! !

!SlWidget methodsFor: 'events'!

registerEvents
! !

!SlWidget methodsFor: 'initialization'!

initialize

	super initialize.
	self registerEvents.
! !

!SlWidget methodsFor: 'navigation'!

url: aString

	ShoreLine current url: aString
! !

!SlWidget methodsFor: 'rendering'!

empty

	canvas asJQuery empty
!

refresh

	"canvas contents: [ :html | self renderContentsOn: html ]"
	[ :newHtml | self empty; renderContentsOn: newHtml ] appendToJQuery: canvas asJQuery
!

renderContentsOn: html

	^ self subclassResponsibility
!

renderLoadingPaneOn: html

	html with: 'Loading...'
!

renderLogoOn: html

	html span class: 'shore'; with: 'Shore'.
	html span class: 'line'; with: 'Line'.
!

renderOn: html

	canvas := html div with: [ self renderLoadingPaneOn: html ].
	self refresh.
! !

!SlWidget class methodsFor: 'configuration'!

dataTag

	^ #stacktraces
! !

SlWidget subclass: #SlContainer
	instanceVariableNames: 'contents'
	package: 'ShoreLine-Widgets-Core'!

!SlContainer methodsFor: 'accessing'!

contents

	^ contents ifNil: [ '' ]
!

contents: anObject
	contents := anObject
! !

!SlContainer methodsFor: 'fix'!

propagateMessage: aSelector

	(self contents respondsTo: aSelector) ifTrue: [ self contents perform: aSelector ].
	(self contents respondsTo: #propagateMessage:) ifTrue: [ self contents perform: #propagateMessage: ].
!

removemap: aSelector withArguments: aCollection
	
	self contentsCollection do: [ :each | (each respondsTo: aSelector) ifTrue: [ console log: contents class name. contents perform: aSelector withArguments: aCollection] ].
	
	self contentsCollection do: [ :each |
		(each respondsTo: #map:withArguments:) ifTrue: [ each map: aSelector withArguments: aCollection ] ].
! !

!SlContainer methodsFor: 'initialization'!

initialize

	super initialize.
	contents := self initializeContents.
!

initializeContents

	^ ''
! !

!SlContainer methodsFor: 'rendering'!

renderContentsOn: html

	html with: self contents.
!

updateContents: anObject

	self contents: anObject.
	self refresh
! !

SlContainer subclass: #SlFrame
	instanceVariableNames: 'debug'
	package: 'ShoreLine-Widgets-Core'!

!SlFrame methodsFor: 'arguments'!

pushArgs: aDictionary
! !

!SlFrame methodsFor: 'initialization'!

initialize

	super initialize.
	debug := false.
! !

!SlFrame methodsFor: 'rendering'!

renderContentsOn: html

	debug ifTrue: [ self renderDebugControlsOn: html ].
	super renderContentsOn: html
!

renderDebugControlsOn: html

	html a
		href: '#';
		onClick: [ self refresh ];
		with: 'refresh'.
! !

SlContainer subclass: #SlFramedContainer
	instanceVariableNames: ''
	package: 'ShoreLine-Widgets-Core'!

SlFramedContainer subclass: #SlList
	instanceVariableNames: ''
	package: 'ShoreLine-Widgets-Core'!

!SlList methodsFor: 'accessing'!

dataDo: aBlock

	self data then: [ self extractData then: [ :r1 | r1 contents then: [ :r2 | aBlock value: r2 ] ] ]
!

extractData

	^ self subclassResponsibility
!

header

	^ {}
!

title

	^ ''
! !

!SlList methodsFor: 'rendering'!

renderContentsOn: html

	html div: [
		html div
			class: 'panel panel-default';
			with: [
				self renderTitleOn: html.
				html div
					class: 'panel-body';
					with: [ self renderListOn: html ] ] ]
!

renderItem: anItem on: html

	self subclassResponsibility
!

renderList: aCollection on: html

	html table
		class: 'table';
		with: [
			self renderListHeaderOn: html.
			
			self data then: [ self extractData then: [
				[ html tbody with: [
					aCollection do: [ :each |
						self renderItem: each on: html ] ] ] appendToJQuery: html div asJQuery ] ] ]
!

renderListHeaderOn: html

	self header ifNotEmpty: [ :header |
		html thead with: [ html tr with: [ header do: [ :each | html th with: each ] ] ] ]
!

renderListOn: html
	| dynamicCanvas |

	dynamicCanvas := html div.

	self dataDo: [ :collection |
		[ :updateHtml | 
			updateHtml table
				class: 'table';
				with: [
					self renderListHeaderOn: updateHtml.

					updateHtml tbody with: [
						collection do: [ :each |
							self renderItem: each on: updateHtml ] ] ] ] appendToJQuery: dynamicCanvas asJQuery ]
!

renderTitleOn: html

	self title ifNotEmpty: [ :title |
		html div
			class: 'panel-heading';
			with: title ]
! !

