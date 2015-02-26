Smalltalk createPackage: 'ShoreLine-Widgets-Core'!
SlWidget subclass: #SlContainer
	instanceVariableNames: 'canvas contents'
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

	(contents respondsTo: aSelector) ifTrue: [ contents perform: aSelector ].
	(contents respondsTo: #propagateMessage:) ifTrue: [ contents perform: #propagateMessage: ].
!

removemap: aSelector withArguments: aCollection
	
	self contentsCollection do: [ :each | (each respondsTo: aSelector) ifTrue: [ console log: contents class name. contents perform: aSelector withArguments: aCollection] ].
	
	self contentsCollection do: [ :each |
		(each respondsTo: #map:withArguments:) ifTrue: [ each map: aSelector withArguments: aCollection ] ].
! !

!SlContainer methodsFor: 'rendering'!

renderContentsOn: html

	html with: self contents.
!

renderOn: html

	canvas := html div with: [ self renderContentsOn: html ]
!

updateContents

	canvas contents: [ :html | self renderContentsOn: html ]
!

updateContents: anObject

	self contents: anObject.
	self updateContents
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
	"self contents: nil."
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
		onClick: [ self updateContents ];
		with: 'refresh'.
!

renderOn: html

	super renderOn: html.
	canvas class: 'container-fluid'.
! !

SlContainer subclass: #SlFramedContainer
	instanceVariableNames: ''
	package: 'ShoreLine-Widgets-Core'!

SlFramedContainer subclass: #SlList
	instanceVariableNames: ''
	package: 'ShoreLine-Widgets-Core'!

!SlList methodsFor: 'accessing'!

data

	^ self session data at: self dataTag
!

dataDo: aBlock

	aBlock value: self extractData
!

dataTag

	^ self subclassResponsibility
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

!SlList methodsFor: 'actions'!

updateContents

	self data then: [ super updateContents ]
! !

!SlList methodsFor: 'rendering'!

renderContentsOn: html

	self data then: [ :data |
		html div: [
			html div
				class: 'panel panel-default';
				with: [
					self renderTitleOn: html.
					html div
						class: 'panel-body';
						with: [ self renderList: self contents on: html ] ] ] ]
!

renderItem: anItem on: html

	self subclassResponsibility
!

renderList: aCollection on: html

	html table
		class: 'table';
		with: [
			self renderListHeaderOn: html.
			
			aCollection do: [ :each | self renderItem: each on: html ] ]
!

renderListHeaderOn: html

	self header ifNotEmpty: [ :header |
		html tr with: [ header do: [ :each | html th with: each ] ] ]
!

renderOn: html

	super renderOn: html.
	self data then: [ self dataDo: [ :data | self updateContents: data ] ]
!

renderTitleOn: html

	self title ifNotEmpty: [ :title |
		html div
			class: 'panel-heading';
			with: title ]
! !

SlWidget subclass: #SlNewList
	instanceVariableNames: 'container sortField'
	package: 'ShoreLine-Widgets-Core'!

!SlNewList methodsFor: 'accessing'!

width

	^ container asJQuery innerWidth
! !

!SlNewList methodsFor: 'actions'!

updateContents

	self updateList: self data
!

updateList: aCollection

	container contents: [ :html | self renderList: aCollection on: html ].
! !

!SlNewList methodsFor: 'initialization'!

initialize

	super initialize.
! !

!SlNewList methodsFor: 'rendering'!

render

	^ self subclassResponsibility
!

renderContentsOn: html
	
	html div
		class: 'panel-body';
		with: [
			self renderControlsOn: html.
			container := html div ];
		yourself.
!

renderControlsOn: html
!

renderHeadControlsOn: html
!

renderHeaderOn: html

	self class listName ifNotNil: [
		html div
			class: 'panel-heading';
			with: [
				html with: self class listName.
				self renderHeadControlsOn: html ] ]
!

renderItem: anElement on: html

	^ self subclassResponsibility
!

renderItems: aCollection on: html

	(sortBlock ifNil: [ aCollection ] ifNotNil: [ aCollection sort: sortBlock ])
		do: [ :each | self renderItem: each on: html ].
!

renderList: aCollection on: html

	html div: [ self renderItems: aCollection on: html ].
!

renderOn: html

	html div
		class: 'panel panel-default';
		with: [
			self renderHeaderOn: html.
			self renderContentsOn: html ].
	
	self render.
	"self updateContents."
! !

!SlNewList class methodsFor: 'configuration'!

listName

	^ nil
! !

SlWidget subclass: #SlOldList
	instanceVariableNames: 'container filteredItems sortBlock sortField'
	package: 'ShoreLine-Widgets-Core'!

!SlOldList methodsFor: 'accessing'!

data

	^ self subclassResponsibility
!

sortBlock

	^ sortBlock
!

sortBlock: aBlock

	sortBlock := aBlock
!

width

	^ container asJQuery innerWidth
! !

!SlOldList methodsFor: 'actions'!

updateContents

	"ForkPool default fork: [ "self updateList: (self filteredItemsFrom: self data) "]."
!

updateList: aCollection

	container contents: [ :html | self renderList: aCollection on: html ].
! !

!SlOldList methodsFor: 'filtering'!

filteredItemsFrom: aCollection

	self subclassResponsibility
! !

!SlOldList methodsFor: 'initialization'!

initialize

	super initialize.
	filteredItems := Set new.
! !

!SlOldList methodsFor: 'rendering'!

renderContentsOn: html
	
	html div
		class: 'panel-body';
		with: [
			self renderControlsOn: html.
			container := html div ];
		yourself.
!

renderControlsOn: html
!

renderHeadControlsOn: html
!

renderHeaderOn: html

	html div
		class: 'panel-heading';
		with: [
			html with: self class listName.
			self renderHeadControlsOn: html ].
!

renderItem: anElement on: html

	^ self subclassResponsibility
!

renderItems: aCollection on: html

	(sortBlock ifNil: [ aCollection ] ifNotNil: [ aCollection sort: sortBlock ])
		do: [ :each | self renderItem: each on: html ].
!

renderList: aCollection on: html

	html div: [ self renderItems: aCollection on: html ].
!

renderOn: html

	html div
		class: 'panel panel-default';
		with: [
			self renderHeaderOn: html.
			self renderContentsOn: html ].
! !

!SlOldList class methodsFor: 'configuration'!

listName

	^ self subclassResponsibility
! !

