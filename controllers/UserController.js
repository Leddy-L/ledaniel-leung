/** Filename: UserController.js
 *	Author: LeDaniel Leung
 *	Description: angular controller to be used for holding personal
 *					info.
**/

angular.module('personal')
	.controller('UserController', ['$scope', function ($scope) {
		'use strict';
		$scope.person = {
			name: 'LeDaniel Leung',
			email: 'l6leung@ucsd.edu',
			school: 'University of California, San Diego',
			address: '8950 Costa Verde Blvd. \nApt. 4221',
			phone_number: '(858) 437 4481',
			description: 'I am currently a sophomore at UCSD studying Computer\
							Science and Cognitive Science with a focus in Human\
							Computer Interaction. I am an incoming Systems\
							Engineer Intern at Northrop Grumman, and am looking\
							to grow my skills as a software developer. My passion\
							is to create software designed to improve the human\
							experience with technology.'
		};
	}]);
