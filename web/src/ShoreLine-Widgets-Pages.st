Smalltalk createPackage: 'ShoreLine-Widgets-Pages'!
SlFrame subclass: #SlMessageFrame
	instanceVariableNames: ''
	package: 'ShoreLine-Widgets-Pages'!

!SlMessageFrame methodsFor: 'accessing'!

message

	^ self contents
!

message: aString

	contents := aString
! !

!SlMessageFrame methodsFor: 'arguments'!

pushArgs: aDictionary

	self message: (aDictionary at: 'message' ifAbsent: self class defaultMessage)
! !

SlMessageFrame subclass: #SlErrorFrame
	instanceVariableNames: 'message'
	package: 'ShoreLine-Widgets-Pages'!

!SlErrorFrame methodsFor: 'accessing'!

message: aString

	self contents: aString
! !

!SlErrorFrame methodsFor: 'arguments'!

pushArgs: aDictionary

	self message: (aDictionary at: 'message' ifAbsent: 'Error (no error message)')
! !

!SlErrorFrame class methodsFor: 'instance creation'!

withMessage: aString

	^ self new
		message: aString;
		yourself
! !

