Smalltalk createPackage: 'ShoreLine-Widgets'!
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

SlWidget subclass: #SlSummaryWidget
	instanceVariableNames: 'data'
	package: 'ShoreLine-Widgets'!

!SlSummaryWidget methodsFor: 'accessing'!

data

	^ data ifNil: [ data := TDClientProxy on: '/stacktraces' ]
!

dataDo: aBlock
	| proxy |
	
	^ SlSession current data with: #stacktraces do: aBlock
! !

!SlSummaryWidget methodsFor: 'rendering'!

renderAuthor: anAuthor on: html

	html li: anAuthor associationValue, ' (', anAuthor key, ')'
!

renderAuthors: aDictionary on: html

	(aDictionary at: #authors) then: [ :collection |
		collection contents then: [ :authors |

			html div
				class: 'summary-users';
				with: [
					html h5: 'Most active users:'.
					html ol: [ authors do: [ :each| self renderAuthor: each on: html ] ] ] ] ]
!

renderClasses: aDictionary on: html

	(aDictionary at: #classes) then: [ :r | r contents then: [ :classes |
		html div: [
			html h5: 'Most frequent classes'.
			html ol: [ classes do: [ :eachClass | html li: eachClass associationValue, ' (', eachClass key, ')' ] ] ] ] ]
!

renderNumberOfTraces: aDictionary on: html

	(aDictionary at: #numberOfTraces) then: [ :number | html div: number asString, ' stack traces in the last 7 days' ]
!

renderOn: html

	self data connect.
	self data then: [
		html h2: 'Summay widget'.
		self data summary then: [ :dictionary |
			self renderNumberOfTraces: dictionary on: html.
			self renderAuthors: dictionary on: html.
			self renderClasses: dictionary on: html ] ]
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

