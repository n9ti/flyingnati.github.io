'use strict';

angular
  .module('feedmebaackApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate'
  ])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/:branchCode', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
      // .otherwise({
      //   redirectTo: '/'
      // });

    $locationProvider.html5Mode(false);

  }]);
