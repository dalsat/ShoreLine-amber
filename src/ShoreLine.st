Smalltalk createPackage: 'ShoreLine'!
Object subclass: #ShoreLine
	instanceVariableNames: ''
	package: 'ShoreLine'!

!ShoreLine methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
! !

!ShoreLine methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ]
! !

!ShoreLine class methodsFor: 'starting'!

start
	self new augmentPage
! !

