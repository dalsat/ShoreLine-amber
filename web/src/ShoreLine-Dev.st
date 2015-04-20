Smalltalk createPackage: 'ShoreLine-Dev'!
SlWidget subclass: #SlHeliosButton
	instanceVariableNames: ''
	package: 'ShoreLine-Dev'!

!SlHeliosButton methodsFor: 'events'!

clickEvent

	self announce: SlHeliosPopupAnnouncement new
! !

!SlHeliosButton methodsFor: 'rendering'!

renderOn: html

	html button
		class: 'btn btn-default navbar-btn navbar-nav navbar-right';
		onClick: [ self clickEvent ];
		with: 'Helios'
! !

