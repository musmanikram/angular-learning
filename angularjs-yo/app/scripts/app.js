'use strict';

/**
 * @ngdoc overview
 * @name angularjsYoApp
 * @description
 * # angularjsYoApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsYoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
            })
            .otherwise({
                redirectTo: '/'
            });
  });
