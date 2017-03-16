/** Filename: LinkController.js
 *	Author: LeDaniel Leung
 *	Description: angular controller to be used for holding links to 
 *					third-party websites.
**/

angular.module('personal')
	.controller('LinkController', ['$scope', function ($scope) {
		'use strict';
		$scope.facebook = 'https://www.facebook.com/ledaniel.leung';
		$scope.linkedin = 'https://www.linkedin.com/in/ledaniel-leung/';
		$scope.github   = 'https://github.com/Asianu';
	}]);