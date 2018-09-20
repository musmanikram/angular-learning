var myApp = angular.module("myApp.page2", ['ngRoute']);

myApp.config(['$routeProvider'], function ($routeProvider) {
    $routeProvider.when('/page2', {
        templateUrl: 'views/page2.html',
        redirectTo: '/page2Controller'
    })
});

myApp.controller('page2Controller', ['$scope', function () {

    console.log('page2');

}]);