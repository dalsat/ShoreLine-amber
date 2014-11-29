Smalltalk createPackage: 'ShoreLine-Core'!
Announcer subclass: #SlAnnouncer
	instanceVariableNames: ''
	package: 'ShoreLine-Core'!
!SlAnnouncer commentStamp!
The Announcer class for ShoreLine events.!

SlAnnouncer class instanceVariableNames: 'current'!

!SlAnnouncer class methodsFor: 'as yet unclassified'!

current

	^ current ifNil: [ current := super new ]
!

new

	^ self shouldNotImplement
! !

Object subclass: #SlObject
	instanceVariableNames: ''
	package: 'ShoreLine-Core'!

!SlObject methodsFor: 'accessing'!

announce: anAnnouncement

	self class announce: anAnnouncement
!

announcer

	^ self class announcer
! !

!SlObject methodsFor: 'events'!

registerEvents
! !

!SlObject methodsFor: 'initialization'!

initialize

	super initialize.
	self registerEvents.
! !

!SlObject methodsFor: 'session'!

repository

	^ self session loader repository
!

session

	^ SlSession current
! !

!SlObject class methodsFor: 'accessing'!

announce: anAnnouncement

	self announcer announce: anAnnouncement.
!

announcer

	^ SlAnnouncer current
! !

Object subclass: #SlSession
	instanceVariableNames: 'data'
	package: 'ShoreLine-Core'!
!SlSession commentStamp!
Manages and stores the session data:
- login
- bugreports
- preferences!

!SlSession methodsFor: 'accessing'!

data

	^ data
!

data: anObject

	data := anObject
! !

!SlSession methodsFor: 'initialization'!

initialize

	super initialize.
	data := Dictionary new.
! !

SlSession class instanceVariableNames: 'session'!

!SlSession class methodsFor: 'instance creation'!

current

	^ session ifNil: [ session := self new ]
! !

Widget subclass: #SlWidget
	instanceVariableNames: ''
	package: 'ShoreLine-Core'!

!SlWidget methodsFor: 'actions'!

announce: anAnnouncement

	self announcer announce: anAnnouncement.
!

announcer

	^ SlAnnouncer current
! !

!SlWidget methodsFor: 'events'!

registerEvents
! !

!SlWidget methodsFor: 'initialization'!

initialize

	super initialize.
	self registerEvents.
! !

!SlWidget methodsFor: 'session'!

session

	^ SlSession current
! !

