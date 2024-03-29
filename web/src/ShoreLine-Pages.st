Smalltalk createPackage: 'ShoreLine-Pages'!
SlFrame subclass: #SlDetailsFrame
	instanceVariableNames: 'report'
	package: 'ShoreLine-Pages'!

!SlDetailsFrame methodsFor: 'accessing'!

report

	^ report
!

report: aReport

	report := aReport.
	
	(self contents left respondsTo: #report:) ifTrue: [ self contents left report: aReport ].
	(self contents right respondsTo: #report:) ifTrue: [ self contents right report: aReport ].
	"self map: #report: withArguments: { aReport }."
! !

!SlDetailsFrame methodsFor: 'initialization'!

initialize

	super initialize.
	self contents: (SlTwoColumnLayout new
		left: SlReportMetadata new;
		right: 'page';
		yourself)
! !

!SlDetailsFrame class methodsFor: 'instance creation'!

withReport: aBugReport

	^ self new
		report: aBugReport;
		yourself.
! !

SlFrame subclass: #SlListFrame
	instanceVariableNames: ''
	package: 'ShoreLine-Pages'!

!SlListFrame methodsFor: 'initialization'!

initialize

	super initialize.
	
	self contents: (SlTwoColumnLayout new
		left: self initializeControlPanel;
		right: self initializeViewPanel;
		yourself)
!

initializeControlPanel

	^ SlTabbedContainer new
		tabNamed: 'Filters' with: SlFilterList new;
		tabNamed: 'Projects' with: SlProjectList new;
		"tabNamed: 'SourceArea' with: SourceArea new;"
		yourself
!

initializeViewPanel

	^ SlReportList new
! !

SlFrame subclass: #SlPage
	instanceVariableNames: ''
	package: 'ShoreLine-Pages'!

!SlPage methodsFor: 'accessing'!

title

	^ nil
! !

!SlPage methodsFor: 'as yet unclassified'!

renderRow: anObject on: html

	[ :updateHtml | updateHtml with: anObject ] appendToJQuery: (html div class: 'row sl-row'; yourself) asJQuery
	"(html div class: 'row sl-row'; yourself) contents: [ :updateHtml | updateHtml with: anObject ]"
!

renderSection: aString on: html

	html div
		class: 'row section';
		with: [ html div class: 'col-xs-12'; with: [ html h4: aString ]  ]
!

renderSeparatorOn: html

	self renderSection: '' on: html
! !

!SlPage methodsFor: 'rendering'!

renderOn: html

	self renderTitleOn: html.
	super renderOn: html.
	canvas class: 'container-fluid'.
!

renderTitleOn: html

	self title ifNotNil: [
		html div
			class: 'title';
			with: [ html h1: self title ] ]
! !

!SlPage class methodsFor: 'accessing'!

enabled

	^ true
!

id

	^ self subclassResponsibility
!

order

	^ 10
!

path

	^ self routes first
!

routes

	^ self subclassResponsibility
!

showInMenu

	^ false
!

title

	^ self subclassResponsibility
! !

SlPage subclass: #SlClassPage
	instanceVariableNames: ''
	package: 'ShoreLine-Pages'!

!SlClassPage methodsFor: 'actions'!

displayClass: className

	contents := SlClassWidget withClass: className
!

displayList

	contents := SlPanel title: 'Classes' with: SlClassListWidget lastWeek.
! !

!SlClassPage methodsFor: 'arguments'!

pushArgs: aDictionary
	
	aDictionary at: #className
		ifPresent: [ :className | self displayClass: className ]
		ifAbsent: [ self displayList ]
! !

!SlClassPage methodsFor: 'initialization'!

initializeContents

	^ [ :html |
		html h1: 'banana'.
		SlPanel
			title: 'Classes'
			with: html with: SlClassListWidget new ]
! !

!SlClassPage class methodsFor: 'accessing'!

id

	^ #class
!

order

	^ 30
!

routes

	^ { '/classes'.
		'/classes/{className}' }
!

showInMenu

	^ true
!

title

	^ 'Classes'
! !

SlPage subclass: #SlHomePage
	instanceVariableNames: ''
	package: 'ShoreLine-Pages'!

!SlHomePage methodsFor: 'accessing'!

title

	^ 'ShoreLine'
! !

!SlHomePage methodsFor: 'initialization'!

initializeContents

	^ [ :html |
		html div with: SlSummaryWidget new.
		html div with: SlSystemViewWidget new ]
!

renderContentsOn: html

	self renderSection: 'Summary' on: html.
	self renderRow: [ 
		html div
			class: 'xol-xs-12';
			with: SlSummaryWidget new ]
		on: html.
	
	self renderRow: [
		html div
			class: 'col-xs-4';
			with: (SlPanel title: 'Top Reporters' with: SlUserListWidget lastDay ).
					
		html div
			class: 'col-xs-4';
			with: (SlPanel title: 'The Troublesome Classes' with: SlClassListWidget lastDay).

		html div
			class: 'col-xs-4';
			with: SlSystemViewWidget new]
		on: html.

	self renderSeparatorOn: html.
	self
		renderRow: [
			html div
				class: 'col-xs-5';
				with: SlSystemViewWidget new ]
		on: html
! !

!SlHomePage methodsFor: 'rendering'!

renderTitleOn: html

	html div
		class: 'title';
		with: [ html h1: [ self renderLogoOn: html ] ]
! !

!SlHomePage class methodsFor: 'accessing'!

id

	^ #home
!

order

	^ 1
!

routes

	^ { '/' }
!

showInMenu

	^ true
!

title

	^ 'Home'
! !

SlPage subclass: #SlStackTracePage
	instanceVariableNames: ''
	package: 'ShoreLine-Pages'!

!SlStackTracePage methodsFor: 'actions'!

displayList

	contents := SlStackTraceListWidget new.
!

displayTrace: traceId

	contents := SlStackTraceWidget withId: traceId.
! !

!SlStackTracePage methodsFor: 'arguments'!

pushArgs: aDictionary
	| id |
	
	aDictionary at: #id
		ifPresent: [ :traceId | self displayTrace: traceId ]
		ifAbsent: [ self displayList ]
! !

!SlStackTracePage class methodsFor: 'accessing'!

id

	^ #stacktraces
!

order

	^ 10
!

routes

	^ {
		'/stacktraces'.
		'/stacktraces/{id}' }
!

showInMenu

	^ true
!

title

	^ 'Stack Traces'
! !

SlPage subclass: #SlTestPage
	instanceVariableNames: ''
	package: 'ShoreLine-Pages'!

!SlTestPage methodsFor: 'initialization'!

initializeContents

	^ SlMessageFrame new
		message: [ :html | html h2: 'Test OK' ];
		yourself
! !

!SlTestPage class methodsFor: 'accessing'!

enabled

	^ false
!

id

	^ #test
!

order

	^ 100
!

routes

	^ { '/test' }
!

showInMenu

	^ true
!

title

	^ 'Test'
! !

SlPage subclass: #SlUserPage
	instanceVariableNames: ''
	package: 'ShoreLine-Pages'!

!SlUserPage methodsFor: 'actions'!

displayList

	contents := SlUserListWidget lastWeek.
!

displayUser: userName

	contents := SlUserWidget named: userName.
! !

!SlUserPage methodsFor: 'arguments'!

pushArgs: aDictionary
	
	aDictionary at: #username
		ifPresent: [ :userId | self displayUser: userId ]
		ifAbsent: [ self displayList ]
! !

!SlUserPage class methodsFor: 'as yet unclassified'!

enabled

	^ true
!

id

	^ #users
!

order

	^ 40
!

routes

	^ { '/users'.
		'users/{username}'}
!

showInMenu

	^ true
!

title

	^ 'Users'
! !

SlFrame subclass: #SlToolbarFrame
	instanceVariableNames: 'toolbar'
	package: 'ShoreLine-Pages'!

!SlToolbarFrame methodsFor: 'accessing'!

toolbarItems

	^ {}
! !

!SlToolbarFrame methodsFor: 'initialization'!

initialize

	super initialize.
	toolbar := SlToolbar withItems: self toolbarItems.
! !

!SlToolbarFrame methodsFor: 'rendering'!

renderOn: html

	html with: toolbar.		
	super renderOn: html.
! !

SlToolbarFrame subclass: #SlMainFrame
	instanceVariableNames: 'pages'
	package: 'ShoreLine-Pages'!

!SlMainFrame methodsFor: 'accessing'!

pageAt: aSymbol

	^ pages at: aSymbol "ifAbsent: []"
!

toolbarItems

	^ ShoreLine menuPages
! !

!SlMainFrame methodsFor: 'actions'!

displayPage: aSlPage

	self displayPage: aSlPage withArgs: {}
!

displayPage: aSlPage withArgs: aDictionary

	self displayPageNamed: aSlPage id withArgs: aDictionary
!

displayPageNamed: aString withArgs: aDictionary

	self contents: (self pageAt: aString).
	contents pushArgs: aDictionary.
	
	self refresh.
!

pageNotFound: args

	self displayPageNamed: #error withArgs: (Dictionary from: { #message -> ('Page ', (args at: #url), ' not found') })
! !

!SlMainFrame methodsFor: 'events'!

registerEvents

	super registerEvents.
	
	self class events do: [ :eventAssociation |
		self announcer
			on: eventAssociation key
			send: eventAssociation value
			to: self ]
! !

!SlMainFrame methodsFor: 'initialization'!

initialize

	super initialize.
	pages := Dictionary new.
	
	ShoreLine pages do: [ :eachPage |
		pages at: eachPage id put: eachPage new ].
	pages at: #error put: SlErrorFrame new.
	"self class pages do: [ :eachPage |
		pages at: eachPage key put: eachPage value new ]."
! !

!SlMainFrame class methodsFor: 'configuration'!

events

	^{}
! !

