Smalltalk createPackage: 'ShoreLine-Widgets-Core'!
SlWidget subclass: #SlContainer
	instanceVariableNames: 'contents'
	package: 'ShoreLine-Widgets-Core'!

!SlContainer methodsFor: 'accessing'!

contents

	^ contents
!

contentsCollection

	^ (contents respondsTo: #do:) ifTrue: [ contents ] ifFalse: [ { contents } ]
! !

!SlContainer methodsFor: 'actions'!

map: aSelector withArguments: aCollection
	
	self contentsCollection do: [ :each | (each respondsTo: aSelector) ifTrue: [ console log: contents class name. contents perform: aSelector withArguments: aCollection] ].
	
	self contentsCollection do: [ :each |
		(each respondsTo: #map:withArguments:) ifTrue: [ each map: aSelector withArguments: aCollection ] ].
!

propagateMessage: aSelector

	(contents respondsTo: aSelector) ifTrue: [ contents perform: aSelector ].
	(contents respondsTo: #propagateMessage:) ifTrue: [ contents perform: #propagateMessage: ].
! !

SlContainer subclass: #SlFrame
	instanceVariableNames: 'frame debug'
	package: 'ShoreLine-Widgets-Core'!

!SlFrame methodsFor: 'arguments'!

pushArgs: aDictionary
! !

!SlFrame methodsFor: 'initialization'!

initialize

	super initialize.
	contents := nil.
	debug := false.
! !

!SlFrame methodsFor: 'rendering'!

renderContentsOn: html

	debug ifTrue: [ self renderDebugControlsOn: html ].
	html with: contents.
!

renderDebugControlsOn: html

	html a
		href: '#';
		onClick: [ self updateContents ];
		with: 'refresh'.
!

renderOn: html

	frame := html div
		"style: 'margin: 0.5em;';"
		with: [ self renderContentsOn: html ]
!

updateContents

	frame ifNotNil: [ frame contents: [ :html | self renderContentsOn: html ] ]
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

