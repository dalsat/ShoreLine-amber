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

SlFrame subclass: #SlHomePage
	instanceVariableNames: ''
	package: 'ShoreLine-Pages'!

!SlHomePage methodsFor: 'initialization'!

initialize

	super initialize.
	"self contents: 'Home Page'."
	self contents: self initializeContents.
!

initializeContents

	^ [ :html |
		html with: 'hello home page!!'.
		html ol: [
			ShoreLine routes do: [ :eachRoute |
				html li: [ html a href: '#', eachRoute key; with: eachRoute key ] ] ] ]
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

SlFrame subclass: #SlStackTraceFrame
	instanceVariableNames: ''
	package: 'ShoreLine-Pages'!

!SlStackTraceFrame methodsFor: 'actions'!

displayList

	contents := SlStackTraceList new.
!

displayTrace: traceId

	contents := SlStackTrace withId: traceId.
! !

!SlStackTraceFrame methodsFor: 'arguments'!

pushArgs: aDictionary
	| id |
	
	aDictionary at: #id
		ifPresent: [ :traceId | self displayTrace: traceId ]
		ifAbsent: [ self displayList ]
! !

SlFrame subclass: #SlToolbarFrame
	instanceVariableNames: 'toolbar'
	package: 'ShoreLine-Pages'!

!SlToolbarFrame methodsFor: 'initialization'!

initialize

	super initialize.
	toolbar := SlToolbar new.
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
! !

!SlMainFrame methodsFor: 'actions'!

displayPage: aSymbol

	self displayPage: aSymbol withArgs: {}
!

displayPage: aSymbol withArgs: aDictionary

	self contents: (self pageAt: aSymbol).
	contents pushArgs: aDictionary.
	
	self updateContents.
!

displayReportDetails: aReport

	pages at: #details put: (SlDetailsFrame withReport: aReport).
	self displayPage: #details.
!

pageNotFound: args

	self displayPage: #notFound withArgs: (Dictionary from: { #message -> ('Page ', (args at: #url), ' not found') })
! !

!SlMainFrame methodsFor: 'events'!

detailsPageEvent: anAnnouncement

	contents report: anAnnouncement report.
	self displayPage: #details.
!

errorPageEvent: anAnnouncement
	
	self displayErrorPage: #error
!

registerEvents

	super registerEvents.
	
	self class events do: [ :eventAssociation |
		self announcer
			on: eventAssociation key
			send: eventAssociation value
			to: self ]
!

reportSelectedEvent: anAnnouncement

	self displayPage: #details
! !

!SlMainFrame methodsFor: 'initialization'!

initialize

	super initialize.
	pages := Dictionary new.
	
	self class pages do: [ :eachPage |
		pages at: eachPage key put: eachPage value new ].
! !

!SlMainFrame class methodsFor: 'configuration'!

events

	^{}
!

pages

	^ {
		#home -> SlHomePage.
		"#list -> SlListFrame."
		#details -> SlDetailsFrame.
		"#images -> SlImagesFrame.
		#stacktracelist -> SlStackTraceListView."
		#stacktraces -> SlStackTraceFrame.
		
		#test -> SlMessageFrame.
		#notFound -> SlErrorFrame
	}
! !

