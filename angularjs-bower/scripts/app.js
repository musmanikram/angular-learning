var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider'], function ($routeProvider) {
    $routeProvider.otherwise({
            redirectTo: '/home'
    })
});