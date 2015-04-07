Smalltalk createPackage: 'ShoreLine-Layout'!
SlContainer subclass: #SlLayout
	instanceVariableNames: ''
	package: 'ShoreLine-Layout'!

!SlLayout methodsFor: 'accessing'!

at: aSymbol

	^ contents at: aSymbol ifAbsent: nil
!

at: aSymbol put: anObject

	^ contents at: aSymbol put: anObject
! !

!SlLayout methodsFor: 'initialization'!

initializeContents

	^ Dictionary new.
! !

SlLayout subclass: #SlTwoColumnLayout
	instanceVariableNames: ''
	package: 'ShoreLine-Layout'!

!SlTwoColumnLayout methodsFor: 'accessing'!

left

	^ self at: #left
!

left: anObject

	^ self at: #left put: anObject
!

leftSize

	^ self class columnSize at: #left
!

right

	^ self at: #right
!

right: anObject

	^ self at: #right put: anObject
!

rightSize

	^ self class columnSize at: #right
! !

!SlTwoColumnLayout methodsFor: 'rendering'!

renderOn: html

	super renderOn: html.

	html div
		class: 'row';
		with: [
			html div
				class: 'left-column col-md-', self leftSize asString;
				with: self left.

			html div
				class: 'right-column col-md-', self rightSize asString;
				with: self right. ]
! !

!SlTwoColumnLayout class methodsFor: 'configuration'!

columnSize

	^ Dictionary new
		at: #left put: 3;
		at:	#right put: 9;
		yourself
! !

