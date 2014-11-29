Smalltalk createPackage: 'ShoreLine-Announcements'!
Object subclass: #SlAnnouncement
	instanceVariableNames: ''
	package: 'ShoreLine-Announcements'!
!SlAnnouncement commentStamp!
Root event for all ShoreLine events.!

SlAnnouncement subclass: #SlDataLoadedAnnouncement
	instanceVariableNames: 'data'
	package: 'ShoreLine-Announcements'!

!SlDataLoadedAnnouncement methodsFor: 'accessing'!

data
	^ data
!

data: anObject
	data := anObject
! !

!SlDataLoadedAnnouncement class methodsFor: 'instance creation'!

withData: data

	^ self new
		data: data;
		yourself
! !

SlDataLoadedAnnouncement subclass: #SlReportsDataLoadedAnnouncement
	instanceVariableNames: 'data'
	package: 'ShoreLine-Announcements'!

SlAnnouncement subclass: #SlHeliosPopupAnnouncement
	instanceVariableNames: ''
	package: 'ShoreLine-Announcements'!

SlAnnouncement subclass: #SlNavigationAnnouncement
	instanceVariableNames: ''
	package: 'ShoreLine-Announcements'!

SlNavigationAnnouncement subclass: #SlDetailsPageAnnouncement
	instanceVariableNames: 'report'
	package: 'ShoreLine-Announcements'!

!SlDetailsPageAnnouncement methodsFor: 'accessing'!

report

	^ report
!

report: aReport

	report := aReport
! !

!SlDetailsPageAnnouncement class methodsFor: 'instance creation'!

withReport: aReport

	^ self new
		report: aReport;
		yourself.
! !

SlNavigationAnnouncement subclass: #SlErrorPageAnnouncement
	instanceVariableNames: 'message'
	package: 'ShoreLine-Announcements'!

!SlErrorPageAnnouncement class methodsFor: 'instance creation'!

withMessge: aString

	^ self new
		message: aString;
		yourself.
! !

SlNavigationAnnouncement subclass: #SlHomePageAnnouncement
	instanceVariableNames: ''
	package: 'ShoreLine-Announcements'!

SlNavigationAnnouncement subclass: #SlReportPageAnnouncement
	instanceVariableNames: 'reportId'
	package: 'ShoreLine-Announcements'!

!SlReportPageAnnouncement methodsFor: 'accessing'!

reportId
	^ reportId
!

reportId: anObject
	reportId := anObject
! !

!SlReportPageAnnouncement class methodsFor: 'instance creation'!

withReportId: anId

	^ self new
		reportId: anId;
		yourself
! !

SlNavigationAnnouncement subclass: #SlTestPageAnnouncement
	instanceVariableNames: 'text'
	package: 'ShoreLine-Announcements'!

!SlTestPageAnnouncement methodsFor: 'accessing'!

text
	^ text
!

text: anObject
	text := anObject
! !

!SlTestPageAnnouncement class methodsFor: 'instance creation'!

withText: aString

	^ self new
		text: aString;
		yourself
! !

SlAnnouncement subclass: #SlProjectAnnouncement
	instanceVariableNames: 'project'
	package: 'ShoreLine-Announcements'!

!SlProjectAnnouncement methodsFor: 'accessing'!

project

	^ project
!

project: anObject

	project := anObject
! !

!SlProjectAnnouncement class methodsFor: 'instance creation'!

withProject: aProject

	^ self new
		project: aProject;
		yourself.
! !

SlProjectAnnouncement subclass: #SlProjectSelectedAnnouncement
	instanceVariableNames: 'showAll hideAll'
	package: 'ShoreLine-Announcements'!

!SlProjectSelectedAnnouncement methodsFor: 'accessing'!

hideAll

	^ hideAll
!

hideAll: aBoolean

	hideAll := aBoolean
!

showAll

	^ showAll
!

showAll: aBoolean

	showAll := aBoolean
! !

!SlProjectSelectedAnnouncement methodsFor: 'initialization'!

initialize

	super initialize.
	showAll := false.
	hideAll := false.
! !

!SlProjectSelectedAnnouncement class methodsFor: 'instance creation'!

hideAll

	^ self new
		hideAll: true;
		yourself
!

showAll

	^ self new
		showAll: true;
		yourself
! !

SlAnnouncement subclass: #SlReportAnnouncement
	instanceVariableNames: 'report'
	package: 'ShoreLine-Announcements'!

!SlReportAnnouncement methodsFor: 'accessing'!

report

	^ report
!

report: anObject

	report := anObject
! !

!SlReportAnnouncement class methodsFor: 'instance creation'!

withReport: aReport

	^ self new
		report: aReport;
		yourself.
! !

SlReportAnnouncement subclass: #SlReportFilteredAnnouncement
	instanceVariableNames: 'block'
	package: 'ShoreLine-Announcements'!

!SlReportFilteredAnnouncement methodsFor: 'accessing'!

block

	^ block
!

block: anObject

	block := anObject
! !

!SlReportFilteredAnnouncement class methodsFor: 'instance creation'!

withBlock: aBlock

	^ self new
		block: aBlock;
		yourself
! !

SlReportAnnouncement subclass: #SlReportSelectedAnnouncement
	instanceVariableNames: ''
	package: 'ShoreLine-Announcements'!

SlReportAnnouncement subclass: #SlReportSortedAnnouncement
	instanceVariableNames: 'sortingBlock reverse'
	package: 'ShoreLine-Announcements'!

!SlReportSortedAnnouncement methodsFor: 'accessing'!

reverse

	^ reverse
!

reverse: aBoolean

	reverse := aBoolean
!

sortBlock

	^ sortingBlock
!

sortBlock: aBlock

	sortingBlock := aBlock
! !

!SlReportSortedAnnouncement class methodsFor: 'instance creation'!

withSortBlock: aBlock

	^ self new
		sortBlock: aBlock;
		yourself
! !

SlAnnouncement subclass: #SlURLAnnouncement
	instanceVariableNames: 'url'
	package: 'ShoreLine-Announcements'!

!SlURLAnnouncement methodsFor: 'as yet unclassified'!

url

	^ url
!

url: anURL

	url := anURL
! !

!SlURLAnnouncement class methodsFor: 'instance creation'!

withURL: anURL

	^ self new
		url: anURL;
		yourself
! !

SlAnnouncement subclass: #SlVisualizationAnnouncement
	instanceVariableNames: 'targetClass action'
	package: 'ShoreLine-Announcements'!

!SlVisualizationAnnouncement methodsFor: 'accessing'!

action

	^ action
!

action: anObject

	action := anObject
!

targetClass

	^ targetClass
!

targetClass: aSymbol

	targetClass := aSymbol
! !

!SlVisualizationAnnouncement class methodsFor: 'instance creation'!

onClass: aSymbol

	^ self new
		targetClass: aSymbol;
		yourself
!

onClass: aSymbol withAction: aString

	^ self new
		targetClass: aSymbol;
		action: aString;
		yourself
! !

SlVisualizationAnnouncement subclass: #SlVisualizationRefreshAnnouncement
	instanceVariableNames: ''
	package: 'ShoreLine-Announcements'!

SlVisualizationAnnouncement subclass: #SlVisualizationZoomAnnouncement
	instanceVariableNames: ''
	package: 'ShoreLine-Announcements'!

!SlVisualizationZoomAnnouncement methodsFor: 'actions'!

zoomIn

	self action: #zoomIn
!

zoomOut

	self action: #zoomOut
! !

!SlVisualizationZoomAnnouncement class methodsFor: 'instance creation'!

zoomInOn: aSymbol

	^ (self onClass: aSymbol)
		zoomIn;
		yourself
!

zoomOutOn: aSymbol

	^ (self onClass: aSymbol)
		zoomOut;
		yourself
! !

