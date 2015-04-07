Smalltalk createPackage: 'ShoreLine-Tests'!
TestCase subclass: #ShoreLineTest
	instanceVariableNames: ''
	package: 'ShoreLine-Tests'!

TestCase subclass: #SlRouteTest
	instanceVariableNames: ''
	package: 'ShoreLine-Tests'!

!SlRouteTest methodsFor: 'as yet unclassified'!

testMatch
	| route |

	route := SlRoute on: '/test' withCallback: [ :e | e ].
	
	self assert: (route match: 'test').
	self assert: (route match: 'test/message') not.
!

testMatchArgs
	| route |

	route := SlRoute on: '/test/{message}' withCallback: [ :e | e ].
	
	self assert: (route match: 'test') not.
	self assert: (route match: 'test/message').
! !

