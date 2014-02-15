'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('ngblog', ['firebase', 'ngRoute']).
  config(['$routeProvider', 
  	function($routeProvider) {
	    $routeProvider.when('/Blog', {templateUrl: 'app/partials/blog.html', controller: 'blogCtrl'});
	    $routeProvider.otherwise({redirectTo: '/Blog'});
  	}
  ]);
