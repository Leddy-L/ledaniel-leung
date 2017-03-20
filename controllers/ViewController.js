/** Filename: ViewController.js
 *	Author: LeDaniel Leung
 *	Description: angular controller to control the view displayed.
**/

angular.module('personal')
	.controller('ViewController', ['$scope', function($scope){
		'use strict';
		$scope.page = 'home';
		$scope.update = function(ref){
			$scope.page = ref;
		};
	}]);