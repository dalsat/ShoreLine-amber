Smalltalk createPackage: 'ShoreLine-Widgets'!
SlOldList subclass: #SlLoadList
	instanceVariableNames: ''
	package: 'ShoreLine-Widgets'!

!SlLoadList methodsFor: 'accessing'!

data

	^ self extractData: self repository
! !

!SlLoadList methodsFor: 'actions'!

extractData: jsonData

	^ self subclassResponsibility
! !

!SlLoadList methodsFor: 'events'!

onLoadedData: anAnnouncement

	self updateData.
	self updateContents.
!

registerEvents

	super registerEvents.
	"self announcer
		on: SlDataLoadedAnnouncement
		send: #onLoadedData:
		to: self"
!

renderContentsOn: html

	"REFACTOR!!!!!!"
	super renderContentsOn: html.
	self onLoadedData: nil.
!

updateData

	filteredItems := self data collect: [ :each | each id ].
! !

!SlLoadList methodsFor: 'filtering'!

filteredItemsFrom: aCollection

	^ aCollection select: [ :eachItem | filteredItems includes: eachItem id ].
! !

!SlLoadList class methodsFor: 'configuration'!

css

	^ '.item { background: green; }'
!

dataUrl

	^ self subclassResponsibility
!

fogBugzUrl

	^ 'https://pharo.fogbugz.com/f/cases/'
!

style

	^ '.item { background: green; }'
! !

SlLoadList subclass: #SlReportEventList
	instanceVariableNames: 'report'
	package: 'ShoreLine-Widgets'!

!SlReportEventList methodsFor: 'accessing'!

report

	^ report
!

report: anObject

	report := anObject
! !

!SlReportEventList methodsFor: 'rendering'!

renderItem: anElement on: html

	html tr
		class: 'item';
		onClick: [ self itemSelected: anElement ];
		with: [
			html td with: anElement id.
			html td with: anElement title ].
! !

!SlReportEventList class methodsFor: 'configuration'!

listName

	^ 'Events'
! !

SlLoadList subclass: #SlReportList
	instanceVariableNames: 'filterBlock'
	package: 'ShoreLine-Widgets'!

!SlReportList methodsFor: 'accessing'!

filterBlock

	^ filterBlock
!

filterBlock: aBlock

	filterBlock := aBlock
! !

!SlReportList methodsFor: 'actions'!

reportsForProject: aProject visible: aBoolean
	| reportsInProject |
	
	reportsInProject := aProject reports collect: [ :each | each id ].

	aBoolean
		ifTrue: [ filteredItems addAll: reportsInProject ]
		ifFalse: [ reportsInProject do: [ :each | filteredItems remove: each ifAbsent: [] ] ].
!

zoomIn

	self announce: (SlVisualizationZoomAnnouncement zoomInOn: #SlReportVisualization)
!

zoomOut

	self announce: (SlVisualizationZoomAnnouncement zoomOutOn: #SlReportVisualization)
! !

!SlReportList methodsFor: 'events'!

filterEvent: anAnnouncement

	self filterBlock: anAnnouncement sortBlock.
	self updateContents.
!

itemSelected: aReport

	"self announce: (SlDetailsPageAnnouncement withReport: aReport)."
	
	window location: '#!!/report/', aReport id
!

projectSelectedEvent: anAnnouncement

	anAnnouncement showAll ifTrue: [ self updateData ].
	anAnnouncement hideAll ifTrue: [ filteredItems removeAll ].
	anAnnouncement project ifNotNil: [ self reportsForProject: anAnnouncement project visible: false ].

	self updateContents.
!

registerEvents

	super registerEvents.

	self announcer
		on: SlProjectSelectedAnnouncement
		send: #projectSelectedEvent:
		to: self.
	
	self announcer
		on: SlReportSortedAnnouncement
		send: #sortEvent:
		to: self.
!

sortEvent: anAnnouncement

	self sortBlock: anAnnouncement sortBlock.
	self updateContents.
! !

!SlReportList methodsFor: 'initialization'!

extractData: aJSONObject

	^ filterBlock
		ifNil: [ aJSONObject reports ]
		ifNotNil: [ aJSONObject reports select: filterBlock ]
! !

!SlReportList methodsFor: 'rendering'!

renderCanvasOn: html

	^ html div
		class: 'report-bar';
		style: "'position: absolute; '," 'border: 1px solid;';
		with: [
			(html tag: 'svg')
				at: 'width' put: 100;
				at: 'height' put: 35;
				style: "'position: absolute; '," 'border: 1px solid;' ]
!

renderHeadControlsOn: html

"	html div
		class: 'navbar navbar-default';
		with: [
			super renderControlsOn: html.
"	
			html div
				class: 'controls pull-right';
				with: [
					html div
						"class: 'pull-right';"
						with: [
							self renderResizeOn: html.
							self renderZoomControlsOn: html ] ] "]"
!

renderItem: aReport on: html

	html tr
		class: 'item';
		onClick: [ self itemSelected: aReport ];
		with: [
			"self renderReportVisualization: aReport on: html."
			self renderReportData: aReport on: html ]
!

renderList: aCollection on: html
	
	html table
		class: 'table table-hover';
		with: [
			self renderTableHeaderOn: html.
			html tbody with: [ self renderItems: aCollection on: html ] ].
!

renderReportData: aReport on: html

	html td with: aReport id.
	html td with: aReport title.
	html td
		style: 'white-space: nowrap';
		with: [ (html tag: 'small') with: aReport lastActivity asDateString ].
	html td with: [ (html tag: 'small') with: aReport numberOfEvents ].
!

renderReportVisualization: aReport on: html

	html span
		style: 'position: absolute; margin-top: 20px;';
		with: ((SlReportVisualization onReport: aReport) width: self width * 0.97).
!

renderResizeOn: html
	
	
	html button
		class: 'btn btn-default btn-sm';
		onClick: [ self resizeWidth ];
		with: [ html span class: 'glyphicon glyphicon-align-right' "align-justify" ].
!

renderTableHeaderOn: html

	html tr with: [
		html th with: 'Id'.
		html th with: 'Title'.
		html th with: 'Last Activity'.
		html th with: 'Events'.]
!

renderZoomControlsOn: html

	html div
		class: 'btn-group btn-group-sm';
		with: [
			html button
			class: 'btn btn-default';
			onClick: [ self zoomIn ];
			with: [
				html span
				class: 'glyphicon glyphicon-plus' ].
				html button
				class: 'btn btn-default';
				onClick: [ self zoomOut ];
				with: [
					html span
					class: 'glyphicon glyphicon-minus' ] ]
! !

!SlReportList class methodsFor: 'configuration'!

listName

	^ 'Reports'
! !

SlLoadList subclass: #SlSelectList
	instanceVariableNames: 'selected'
	package: 'ShoreLine-Widgets'!

!SlSelectList methodsFor: 'accessing'!

selected

	^ selected
!

selected: anObject

	selected := anObject
! !

!SlSelectList methodsFor: 'actions'!

select: anElement

	selected add: anElement id
!

selectAll
!

unselectAll

	"selected removeAll"
! !

!SlSelectList methodsFor: 'events'!

itemSelected: anElement

	self select: anElement
! !

!SlSelectList methodsFor: 'initialization'!

initialize

	super initialize.
	selected := Set new.
! !

!SlSelectList methodsFor: 'rendering'!

renderItem: anElement on: html

	html a
		class: 'list-group-item', self selecedItemClass;
		onClick: [ self itemSelected: anElement ];
		with: anElement.
! !

!SlSelectList methodsFor: 'style'!

selectedItemClass: anElement

	^ (selected includes: anElement)
		ifTrue: [ 'selected-project' ]
		ifFalse: [ '' ]
! !

SlSelectList subclass: #SlProjectList
	instanceVariableNames: ''
	package: 'ShoreLine-Widgets'!

!SlProjectList methodsFor: 'actions'!

extractData: aJSONObject

	^ aJSONObject projects
! !

!SlProjectList methodsFor: 'events'!

hideAllEvent

	self announce: (SlProjectSelectedAnnouncement hideAll).
	self selectAll
!

itemSelected: anElement

	super itemSelected: anElement.
	self announce: (SlProjectSelectedAnnouncement withProject: anElement)
!

showAllEvent

	self announce: (SlProjectSelectedAnnouncement showAll).
	self unselectAll
! !

!SlProjectList methodsFor: 'rendering'!

renderControlsOn: html

	html div
		class: 'btn-group btn-group-justified';
		with: [
			html a
				class: 'btn btn-default btn-block';
				onClick: [ self showAllEvent ];
				with: 'Show all'.
				
			html a
				class: 'btn btn-default btn-block';
				onClick: [ self hideAllEvent ];
				with: 'Hide all'. ]
!

renderItem: anElement on: html

"	super
		renderItem: [
			html span class: 'badge'; with: anElement numberOfReports.
			html span: anElement title. ]
		on: html.
"		
	html a
		class: 'list-group-item';
		onClick: [ self itemSelected: anElement ];
		with: [
			html span class: 'badge'; with: anElement numberOfReports.
			html span: anElement title. ].
!

renderList: aCollection on: html

	html div
		class: 'list-group';
		style: 'margin: 0px';
		with: [ self renderItems: aCollection on: html ]
! !

!SlProjectList class methodsFor: 'configuration'!

listName

	^ 'Projects'
! !

SlOldList subclass: #SlOldStaticList
	instanceVariableNames: ''
	package: 'ShoreLine-Widgets'!

!SlOldStaticList methodsFor: 'accessing'!

data

	^ self class defaultFilters
! !

!SlOldStaticList methodsFor: 'filtering'!

filteredItemsFrom: aCollection

	"not filtering for now"
	^ aCollection
! !

!SlOldStaticList methodsFor: 'rendering'!

renderContentsOn: html
	
	super renderContentsOn: html.	
	self updateContents
! !

SlOldStaticList subclass: #SlFilterList
	instanceVariableNames: 'filters selected configure'
	package: 'ShoreLine-Widgets'!

!SlFilterList methodsFor: 'accessing'!

selected

	^ selected
!

selected: anObject

	selected := anObject
! !

!SlFilterList methodsFor: 'block generation'!

eval: aString
	| compiler |
	
	compiler := Compiler new.
	[ compiler parseExpression: aString ] on: Error do: [ :ex | ^ self alert: ex messageText ].
	^ compiler evaluateExpression: aString
!

evalStringAsBlock: aString

	^ self eval: (String new writeStream
		nextPutAll: '[ ';
		nextPutAll: aString;
		nextPutAll: ' ]';
		contents)
! !

!SlFilterList methodsFor: 'events'!

configureEvent

	window alert: 'configure filter'
!

itemSelected: anElement

"	selected = anElement key
		ifTrue: [ reverse := reverse not ]
		ifFalse: [
			reverse := false.
			selected := anElement key ].
"			
	self announce: (SlReportFilteredAnnouncement withBlock: (self evalStringAsBlock: anElement value)).
	"self updateContents."
! !

!SlFilterList methodsFor: 'initialization'!

initialize

	super initialize.
	configure := true.
	filters := self class defaultFilters.
! !

!SlFilterList methodsFor: 'rendering'!

renderConfigureOn: html
	| element |
	
	element := html span
		id: 'banana';
		class: 'glyphicon glyphicon-cog';
		onClick: [ self configureEvent ].
	
	"element asJQuery tooltip."
	"element element asJQuery tooltip."
!

renderItem: anElement on: html

	html a
		class: 'list-group-item';
		onClick: [ self itemSelected: anElement ];
		with: [
			html span: anElement key.
			configure ifTrue: [ self renderConfigureOn: html ].

			"selected = anElement key ifTrue: [ self renderArrowOn: html ]" ].
! !

!SlFilterList class methodsFor: 'configuration'!

listName

	^ 'Controls'
! !

!SlFilterList class methodsFor: 'filters'!

defaultFilters

	^ OrderedCollection new
		add: self testFilter;
		yourself
!

testFilter

	^ 'Test Filter' -> ' :each | each project id = 5'
! !

SlOldStaticList subclass: #SlSortList
	instanceVariableNames: 'selected configure reverse'
	package: 'ShoreLine-Widgets'!

!SlSortList methodsFor: 'accessing'!

selected

	^ selected
!

selected: anObject

	selected := anObject
! !

!SlSortList methodsFor: 'block generation'!

blockFromString: aString

	^ self eval: (String new writeStream
		nextPutAll: '[ ';
		nextPutAll: aString;
		nextPutAll: (reverse ifTrue: [ ' not' ] ifFalse: [ '' ])
		nextPutAll: ' ]';
		contents)
!

eval: aString
	| compiler |
	
	compiler := Compiler new.
	[ compiler parseExpression: aString ] on: Error do: [ :ex | ^ self alert: ex messageText ].
	^ compiler evaluateExpression: aString
!

sortByFieldBlock: anAccessor
	
	^ self blockFromString: (self class sortByFieldString: anAccessor)
! !

!SlSortList methodsFor: 'events'!

itemSelected: anElement

	selected = anElement key
		ifTrue: [ reverse := reverse not ]
		ifFalse: [
			reverse := false.
			selected := anElement key ].
			
	self announce: (SlReportSortedAnnouncement withSortBlock: (self class sortByFieldString: anElement value)).
	self updateContents.
! !

!SlSortList methodsFor: 'initialization'!

initialize

	super initialize.
	configure := true.
	reverse := false.
! !

!SlSortList methodsFor: 'rendering'!

renderArrowOn: html

	html span
		class: 'pull-right ',
			(reverse ifTrue: [ 'glyphicon glyphicon-chevron-up' ] ifFalse: [ 'glyphicon glyphicon-chevron-down' ])
!

renderConfigureOn: html
	| element |
	
	element := html span
		id: 'banana';
		class: 'glyphicon glyphicon-cog';
		onClick: [ ].
	
	"element element asJQuery tooltip."
!

renderItem: anElement on: html

	html a
		class: 'list-group-item';
		onClick: [ self itemSelected: anElement ];
		with: [
			configure ifTrue: [ self renderConfigureOn: html ].
			html span: anElement key.
			selected = anElement key ifTrue: [ self renderArrowOn: html ] ].
! !

!SlSortList class methodsFor: 'configuration'!

listName

	^ 'Controls'
! !

!SlSortList class methodsFor: 'filters'!

defaultFilters

	^ self defaultFiltersMapping collect: [ :each | each key -> (self sortByFieldString: each value) ]
!

sortByFieldString: anAccessor

	^ ':a :b | a ', anAccessor, ' < b ', anAccessor
! !

SlWidget subclass: #SlReportMetadata
	instanceVariableNames: 'report'
	package: 'ShoreLine-Widgets'!

!SlReportMetadata methodsFor: 'accessing'!

report

	^ report
!

report: anObject

	report := anObject
! !

!SlReportMetadata methodsFor: 'rendering'!

renderField: aSelector on: html

	html div
		class: 'report-metadata-', aSelector;
		with: (report perform: aSelector)
!

renderOn: html

	html div
		class: 'report-metadata';
		with: [
			self class fields do: [ :each | self renderField: each on: html ] ].
! !

!SlReportMetadata class methodsFor: 'configuration'!

fields

	^ #( id title status project )
! !

!SlReportMetadata class methodsFor: 'instance creation'!

withReport: aReport

	^ self new
		report: aReport;
		yourself
! !

SlToolbarFrame subclass: #SlStackTrace
	instanceVariableNames: 'stacktrace traceId'
	package: 'ShoreLine-Widgets'!

!SlStackTrace methodsFor: 'accessing'!

stacktrace

	^ stacktrace ifNil: [ stacktrace := TDClientProxy on: '/stacktraces' ]
! !

!SlStackTrace methodsFor: 'arguments'!

pushArgs: aDictionary

	traceId := aDictionary at: #id
! !

!SlStackTrace methodsFor: 'rendering'!

renderOn: html

	self stacktrace
		connect;
		then: [
			| trace |
			trace := stacktrace list at: traceId ifAbsent: [ nil ].
			
			html div
				class: 'container';
				with: [
					html div
						class: 'panel panel-default';
						with: [
							html div
								class: 'panel-heading';
								with: 'StackTrace ', traceId.
							html div
								class: 'panel-body';
								with: [ self renderStackTrace: trace on: html ] ] ] ]
!

renderStackTrace: aStackTrace on: html

	self renderStackTraceMetadata: aStackTrace on: html.
	self renderStackTraceEvents: aStackTrace on: html.
!

renderStackTraceEvents: aStackTrace on: html

	aStackTrace stacktrace do: [ :each |
		html div: each contents ]
!

renderStackTraceMetadata: aStackTrace on: html

	html div: (Date fromString: aStackTrace date) asDateString.
	html div: aStackTrace author.
! !

SlList subclass: #SlStackTraceList
	instanceVariableNames: 'stacktrace'
	package: 'ShoreLine-Widgets'!

!SlStackTraceList methodsFor: 'accessing'!

dataDo: aBlock

	self extractData then: [ :r1 | r1 contents then: [ :r2 | aBlock value: r2 ] ]
!

dataTag

	^ #stacktraces
!

extractData

	^ self data "reportsOnDate: (Date fromString: '2014/12/15')"reportsWithAuthor: 'TommasoDalSasso'
!

header

	^ { 'Date'. 'Author'. 'Creation Date'. 'Class'. 'Method' }
!

title

	^ 'Stack Traces'
! !

!SlStackTraceList methodsFor: 'rendering'!

renderItem: aStacktrace on: html

	html tr with: [
		| date |
		date := Date fromString: aStacktrace date.
		
		html td with: date asDateString.
		html td with: aStacktrace author.

		html td with: date asDateString.
		html td with: aStacktrace topClass.
		html td with: aStacktrace topMethod ]
! !

SlContainer subclass: #SlTabbedContainer
	instanceVariableNames: ''
	package: 'ShoreLine-Widgets'!

!SlTabbedContainer methodsFor: 'initialization'!

initialize

	super initialize.
	contents := Dictionary new.
! !

!SlTabbedContainer methodsFor: 'rendering'!

renderContentsOn: html

	html div
		class: 'tab-contents';
		with: [
			contents keysAndValuesDo: [ :key :value |
				html div
					class: 'tab-pane';
					id: key;
					with: value ] ]
!

renderNavbarOn: html

	html ul
		class: 'nav nav-tabs';
		with: [
			contents keysDo: [ :key |
				html li
					with: [
						html a
							href: '#', key;
							onClick: [ :this :event |
								event preventDefault.
								"window alert: this."
								this tab: 'show' ] currySelf;
							at: 'data-toggle' put: 'tab';
							with: key ] ] ]
!

renderOn: html

	"self renderNavbarOn: html."
	self renderContentsOn: html
! !

!SlTabbedContainer methodsFor: 'tabs'!

tabNamed: aString

	^ self contents at: aString
!

tabNamed: aString with: aWidget

	self contents at: aString put: aWidget
! !

SlWidget subclass: #SlToolbar
	instanceVariableNames: 'data list login'
	package: 'ShoreLine-Widgets'!

!SlToolbar methodsFor: 'initialization'!

initialize
	
	super initialize.
	"login := MozPersonaLogin new."
! !

!SlToolbar methodsFor: 'rendering'!

renderControlsOn: html

	html ul
		class: 'nav navbar-nav';
		with: [
			| backLink |
			backLink := html li: [ html a class: 'glyphicon glyphicon-chevron-left' ].
			backLink asJQuery slideToggle ].
!

renderDebugControlsOn: html

	html button
		class: 'btn btn-default navbar-btn navbar-right';
		onClick: [ self announce: SlHeliosPopupAnnouncement new ];
		with: 'Helios'
!

renderHeaderOn: html

	html div
		class: 'navbar-header';
		with: [ html a
			class: 'navbar-brand';
			onClick: [ self announce: SlHomePageAnnouncement new ];
			with: [ self renderLogoOn: html ] ]
!

renderLogoOn: html
	
	"colors: #ffffff rgb(224, 71, 45)"
	html span
		class: 'shoreline-logo';
		with: [
			html span class: 'logo-shore'; with: 'Shore'.
			html span class: 'logo-line'; with: 'Line' ]
!

renderMenuItem: aMenuItem on: html

	html li: [ html a
		href: '#';
		onClick: [ self announce: aMenuItem value new ];
		with: aMenuItem key ].
!

renderMenuOn: html

	html ul
		class: 'nav navbar-nav';
		with: [
			self class menuItems do: [ :eachItem | self renderMenuItem: eachItem on: html ] ].
!

renderOn: html

	html nav
		class: 'navbar navbar-default navbar-fixed-top';
		at: 'role' put: 'navigation';
		with: [
			self renderControlsOn: html.
			self renderHeaderOn: html.
			self renderMenuOn: html.
			self renderUserOn: html.
			self renderDebugControlsOn: html ].
!

renderUserOn: html

	html ul
		class: 'nav navbar-nav navbar-right';
		with: [ html li: login ].
! !

!SlToolbar class methodsFor: 'items'!

menuItems

	^ {
		"'Helios' -> SlHeliosPopupAnnouncement."
		'Menu Items' -> nil
	}
! !

!Array methodsFor: '*ShoreLine-Widgets'!

d3

	^ JSObjectProxy on: self
! !

