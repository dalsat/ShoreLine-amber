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
	instanceVariableNames: 'proxies'
	package: 'ShoreLine-Core'!

!SlData methodsFor: 'accessing'!

at: aSymbol

	^ proxies at: aSymbol ifAbsentPut: [ self loadProxy: aSymbol ]
! !

!SlData methodsFor: 'actions'!

loadProxy: aSymbol

	^ (TDClientProxy on: (self class proxies at: aSymbol))
		"connect;"
		yourself
!

with: aSymbol do: aBlock
	| proxy |
	proxy := self at: aSymbol.
	proxy connect.
	proxy then: (aBlock value: proxy)
! !

!SlData methodsFor: 'initialization'!

initialize

	super initialize.
	proxies := Dictionary new.
! !

SlData class instanceVariableNames: 'data'!

!SlData class methodsFor: 'accessing'!

current

	^ data ifNil: [ data := self new ]
!

proxies

	^ Dictionary from: {
		#stacktraces -> '/stacktraces'
	}
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

