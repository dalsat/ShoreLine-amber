Smalltalk createPackage: 'ShoreLine-Widgets-Legacy'!
SlWidget subclass: #SlNewList
	instanceVariableNames: 'container sortField'
	package: 'ShoreLine-Widgets-Legacy'!

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

	"(sortBlock ifNil: [ aCollection ] ifNotNil: [ aCollection sort: sortBlock ])
		do: [ :each | self renderItem: each on: html ]."
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
	package: 'ShoreLine-Widgets-Legacy'!

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

SlOldList subclass: #SlLoadList
	instanceVariableNames: ''
	package: 'ShoreLine-Widgets-Legacy'!

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
	package: 'ShoreLine-Widgets-Legacy'!

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
	package: 'ShoreLine-Widgets-Legacy'!

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
	package: 'ShoreLine-Widgets-Legacy'!

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
	package: 'ShoreLine-Widgets-Legacy'!

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
	package: 'ShoreLine-Widgets-Legacy'!

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
	package: 'ShoreLine-Widgets-Legacy'!

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
	package: 'ShoreLine-Widgets-Legacy'!

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
	package: 'ShoreLine-Widgets-Legacy'!

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

