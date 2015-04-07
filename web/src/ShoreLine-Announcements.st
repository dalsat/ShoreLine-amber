Smalltalk createPackage: 'ShoreLine-Announcements'!
Object subclass: #SlAnnouncement
	instanceVariableNames: ''
	package: 'ShoreLine-Announcements'!
!SlAnnouncement commentStamp!
Root event for all ShoreLine events.!

SlAnnouncement subclass: #SlHeliosPopupAnnouncement
	instanceVariableNames: ''
	package: 'ShoreLine-Announcements'!

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

