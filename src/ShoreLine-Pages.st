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

	^ self subclassResponsibility
!

showInMenu

	^ false
!

title

	^ self subclassResponsibility
! !

SlPage subclass: #SlHomePage
	instanceVariableNames: ''
	package: 'ShoreLine-Pages'!

!SlHomePage methodsFor: 'initialization'!

initializeContents

	^ [ :html |
		html h1: 'Home Page'.		
		html div: SlSummaryWidget new ]
! !

!SlHomePage class methodsFor: 'accessing'!

id

	^ #home
!

order

	^ 1
!

path

	^ '/'
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

	contents := SlStackTraceList new.
!

displayTrace: traceId

	contents := SlStackTrace withId: traceId.
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

path

	^ '/stacktraces'
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
		message: 'Test Page';
		yourself
! !

!SlTestPage class methodsFor: 'accessing'!

id

	^ #test
!

order

	^ 100
!

path

	^ '/test'
!

showInMenu

	^ true
!

title

	^ 'Test'
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
	
	self updateContents.
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

