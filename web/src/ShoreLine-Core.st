Smalltalk createPackage: 'ShoreLine-Core'!
Announcer subclass: #SlAnnouncer
	instanceVariableNames: ''
	package: 'ShoreLine-Core'!
!SlAnnouncer commentStamp!
The Announcer class for ShoreLine events.!

SlAnnouncer class instanceVariableNames: 'current'!

!SlAnnouncer class methodsFor: 'accessing'!

current

	^ current ifNil: [ current := super new ]
! !

!SlAnnouncer class methodsFor: 'instance creation'!

new

	^ self shouldNotImplement
! !

Object subclass: #SlData
	instanceVariableNames: 'proxy'
	package: 'ShoreLine-Core'!

!SlData methodsFor: 'actions'!

initializeProxy

	proxy := (TDClientProxy on: self class proxyPath)
		connect;
		yourself
!

with: aSymbol do: aBlock

	proxy then: [ (proxy perform: aSymbol) then: aBlock ]
! !

!SlData methodsFor: 'initialization'!

initialize

	super initialize.
	self initializeProxy.
! !

SlData class instanceVariableNames: 'data'!

!SlData class methodsFor: 'accessing'!

current

	^ data ifNil: [ data := self new ]
!

proxyPath

	^ '/data'"'/stacktraces'"
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
	instanceVariableNames: ''
	package: 'ShoreLine-Core'!
!SlSession commentStamp!
Manages and stores the session data:
- login
- bugreports
- preferences!

!SlSession methodsFor: 'accessing'!

data

	^ SlData current
! !

!SlSession methodsFor: 'initialization'!

initialize

	super initialize.
	"data := Dictionary new."
! !

SlSession class instanceVariableNames: 'session'!

!SlSession class methodsFor: 'instance creation'!

current

	^ session ifNil: [ session := self new ]
! !

