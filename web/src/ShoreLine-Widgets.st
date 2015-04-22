Smalltalk createPackage: 'ShoreLine-Widgets'!
SlWidget subclass: #SlClassWidget
	instanceVariableNames: 'className'
	package: 'ShoreLine-Widgets'!

!SlClassWidget methodsFor: 'accessing'!

className
	^ className
!

className: anObject
	className := anObject
! !

!SlClassWidget methodsFor: 'rendering'!

renderClassSummaryOn: html

	self dataDo: [ :data |
	(data summaryForClass: self className) then: [ :counts |
		html div: [
			html with: 'summary: '.
			counts contents then: [ :countContents |
				html with: (countContents collect: #key) ] ] ] ]
!

renderContentsOn: html

	html with: 'Class widget: ', self className.
	self renderClassSummaryOn: html.
! !

!SlClassWidget class methodsFor: 'configuration'!

dataTag

	^ #stacktraces
! !

!SlClassWidget class methodsFor: 'instance creation'!

withClass: aString

	^ self new
		className: aString;
		yourself
! !

SlList subclass: #SlListTile
	instanceVariableNames: 'numberOfHours'
	package: 'ShoreLine-Widgets'!

!SlListTile methodsFor: 'accessing'!

numberOfHours
	^ numberOfHours
!

numberOfHours: anObject
	numberOfHours := anObject
! !

!SlListTile class methodsFor: 'instance creation'!

lastDay

	^ self new
		numberOfHours: 24;
		yourself
!

lastWeek

	^ self new
		numberOfHours: 24 * 7;
		yourself
! !

SlListTile subclass: #SlClassListWidget
	instanceVariableNames: ''
	package: 'ShoreLine-Widgets'!

!SlClassListWidget methodsFor: 'rendering'!

extractData: proxy

	^ proxy classesInLast: self numberOfHours
!

renderClass: aClass on: html

	html td with: [ html a href: ('#/classes/', aClass associationValue); with: aClass associationValue ].
	html td with: aClass key
!

renderContentsOn: html
	
	self dataDo: [ :classes |
		html table
			class: 'table';
			with: [
				html thead with: [
					html tr with: [
						html th with: 'Class Name'.
						html th with: 'Number of Stack Traces' ] ].
				html tbody with: [ classes do: [ :eachClass | 
					html tr with: [ self renderClass: eachClass on: html ] ] ] ] ]
! !

!SlClassListWidget class methodsFor: 'configuration'!

dataTag

	^ #stacktraces
! !

SlListTile subclass: #SlStackTraceListWidget
	instanceVariableNames: 'stacktrace'
	package: 'ShoreLine-Widgets'!

!SlStackTraceListWidget methodsFor: 'accessing'!

extractData: proxy

	^ proxy tracesInLastHours: 24
!

header

	^ { 'Date'. 'Time'. 'Author'. 'Class'. 'Method' }
!

title

	^ 'Stack Traces'
! !

!SlStackTraceListWidget methodsFor: 'rendering'!

renderItem: aStackTrace on: html

	html tr
		onClick: [ self url: '/stacktraces/', aStackTrace traceId ];
		with: [
			| date |
			date := Date fromString: aStackTrace date.

			html td with: date asDateString.
			html td with: date asTimeString.

			html td with: aStackTrace author.
			html td with: aStackTrace topClass.
			html td with: aStackTrace topMethod ]
!

renderList: aCollection on: html

	super renderList: aCollection on: html.

	html nav with: [
		html ul
			class: 'pager';
			with: [
				html li: [
					html a
						onClick: [ self updateContents ];
						with: 'Load Older' ] ] ]
! !

!SlStackTraceListWidget class methodsFor: 'as yet unclassified'!

dataTag

	^ #stacktraces
! !

SlListTile subclass: #SlUserListWidget
	instanceVariableNames: ''
	package: 'ShoreLine-Widgets'!

!SlUserListWidget methodsFor: 'rendering'!

extractData: proxy

	^ proxy authorsInLast: self numberOfHours
!

renderAuthor: anAuthor withIndex: aNumber on: html

	html tr
		"onClick: [ self url: '/users/', anAuthor associationValue ];"
		with: [
			html td with: [ (html tag: #b) with: aNumber ].
			html td with: [ html a href: '#/users/', anAuthor associationValue; with: anAuthor associationValue ].
			html td with: anAuthor key ]
!

renderContentsOn: html

	self dataDo: [ :authors |
		html table
			class: 'table table-hover table-striped';
			with: [
				html thead with: [
					html tr with: [
						html th with: '#'.
						html th with: 'User Name'.
						html th with: 'Number of Traces' ] ].
						html tbody with: [ authors withIndexDo: [ :each :i |
							self renderAuthor: each withIndex: i on: html ] ] ] ]
! !

!SlUserListWidget class methodsFor: 'configuration'!

dataTag

	^ #users
! !

SlWidget subclass: #SlStackTraceWidget
	instanceVariableNames: 'traceId'
	package: 'ShoreLine-Widgets'!

!SlStackTraceWidget methodsFor: 'accessing'!

traceId
	^ traceId
!

traceId: anObject
	traceId := anObject
! !

!SlStackTraceWidget methodsFor: 'rendering'!

renderContentsOn: html

	self dataDo: [ :data |
		(data traceWithId: traceId) then: [ :trace |
			html div
				class: 'container';
				with: [
					html div
						class: 'panel panel-default';
						with: [
							html div
								class: 'panel-heading';
								with: 'StackTrace #', traceId, ' and ', trace date.
							html div
								class: 'panel-body';
								with: [ self renderStackTrace: trace on: html ] ] ] ] ]
!

renderStackTrace: aStackTrace on: html

	self renderStackTraceMetadata: aStackTrace on: html.
	self renderStackTraceEvents: aStackTrace on: html.
!

renderStackTraceEvents: aStackTrace on: html

	html table
		class: 'table';
		with: [
			html tbody with: [
				aStackTrace stacktrace do: [ :eachEvent |
					html tr with: [
						html td with: [
							html a
								onClick: [ self url: '/classes/', eachEvent signature ];
								with: [ html div: eachEvent contents ] ] ] ] ] ]
!

renderStackTraceMetadata: aStackTrace on: html

	html div: (Date fromString: aStackTrace date) asDateString.
	html div: aStackTrace author.
! !

!SlStackTraceWidget class methodsFor: 'as yet unclassified'!

dataTag

	^ #stacktraces
! !

!SlStackTraceWidget class methodsFor: 'instance creation'!

withId: id

	^ self new
		traceId: id;
		yourself
! !

SlWidget subclass: #SlSummaryWidget
	instanceVariableNames: ''
	package: 'ShoreLine-Widgets'!

!SlSummaryWidget methodsFor: 'rendering'!

renderContentsOn: html

	self dataDo: [ :data | (data summaryInLast: 24) then: [ :number |
		html div
			class: 'alert alert-info';
			with: [
				(html tag: 'b') with: 'Summary'.
				html span: ' of the last 24 hours: '.
				html with: number asString, ' stack traces submitted' ] ] ]
! !

!SlSummaryWidget class methodsFor: 'configuration'!

dataTag

	^ #stacktraces
! !

SlWidget subclass: #SlSystemViewWidget
	instanceVariableNames: ''
	package: 'ShoreLine-Widgets'!

!SlSystemViewWidget methodsFor: 'rendering'!

renderContentsOn: html

	html with: (SlPanel
				title: 'Pharo 4'
				with: [ self renderImageOn: html ])
!

renderImageOn: html

	html img
		style: 'margin: auto; width: 100%;';
		src: 'data/system.svg';
		alt: 'Map of the Pharo System'
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
	instanceVariableNames: 'items login'
	package: 'ShoreLine-Widgets'!

!SlToolbar methodsFor: 'accessing'!

items
	^ items
!

items: anObject
	items := anObject sorted: [ :a :b | a order < b order ]
!

login
	^ login
!

login: anObject
	login := anObject
! !

!SlToolbar methodsFor: 'initialization'!

initialize
	
	super initialize.
	login := MozPersonaLogin new.
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
	
	SlHeliosButton ifNotNil: [ :widget | html with: widget new ]
!

renderHeaderOn: html

	html div
		class: 'navbar-header';
		with: [ html a
			class: 'navbar-brand';
			onClick: [ self url: '/' ];
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

renderMenuItem: aSlPage on: html

	html li: [ html a
		href: '#', aSlPage path;
		"onClick: aSlPage route;" "[ self announce: aMenuItem value new ];"
		with: aSlPage title ].
!

renderMenuOn: html

	html ul
		class: 'nav navbar-nav';
		with: [
			items do: [ :eachItem | self renderMenuItem: eachItem on: html ] ]
!

renderOn: html

	html nav
		id: 'toolbar';
		class: 'navbar navbar-default navbar-fixed-top';
		style: 'padding: 0px 15px';
		at: 'role' put: 'navigation';
		with: [
			self renderControlsOn: html.
			self renderHeaderOn: html.
			self renderMenuOn: html.
			self renderUserOn: html.
			self renderDebugControlsOn: html ]
!

renderUserOn: html

	html ul
		class: 'nav navbar-nav navbar-right';
		with: [ html li: login ].
! !

!SlToolbar class methodsFor: 'instance creation'!

withItems: aCollection

	^ self new
		items: aCollection;
		yourself
! !

SlWidget subclass: #SlUserWidget
	instanceVariableNames: 'username'
	package: 'ShoreLine-Widgets'!

!SlUserWidget methodsFor: 'accessing'!

username
	^ username
!

username: anObject
	username := anObject
! !

!SlUserWidget methodsFor: 'rendering'!

renderContentsOn: html

	html with: 'User ', self username
! !

!SlUserWidget class methodsFor: 'configuration'!

dataTag

	^ #users
! !

!SlUserWidget class methodsFor: 'instance creation'!

named: aString

	^ self new
		username: aString;
		yourself
! !

!Array methodsFor: '*ShoreLine-Widgets'!

d3

	^ JSObjectProxy on: self
! !

