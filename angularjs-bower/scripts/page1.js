var myApp = angular.module("myApp.page1", ['ngRoute']);

myApp.config(['$routeProvider'], function ($routeProvider) {
    $routeProvider.when('/page1', {
        templateUrl: 'views/page1.html',
        redirectTo: '/page1Controller'
    })
});

myApp.controller('page1Controller', ['$scope', function () {

    console.log('page1');

}]);