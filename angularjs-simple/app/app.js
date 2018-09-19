var myApp = angular.module("myAppModule", ['ngRoute', 'ngAnimate']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'myController'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'myController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .when('/contact-success', {
            templateUrl: 'views/contact-success.html'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'myController'
        }).otherwise({
            redirectTo: '/home'
        })



}]);

myApp.directive('randomNinja', [function () {
        return {
            restrict: 'E',
            scope: {
                ninjas: '=',
                title: '='

            },
            transclude: true,
            replace: true,
            templateUrl:'views/random.html',
            controller: function ($scope) {

                $scope.random = Math.floor(Math.random() * 4);
                
            }
        };
}]);

myApp.controller('myController', ['$scope', '$http', function ($scope, $http) {

    $scope.message = "Hey!!!!";

    $scope.removeNinja = function(ninja){
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);
    };

    $scope.addNinja = function(){

        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available: true
        });

        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";
    };

    $scope.removeAll = function(){
        $scope.ninjas = [];
    };

    /*$http.get('data/ninjas.json').success(function (data) {

    });*/

    $http.get('/data/ninjas.json').then(function (response) {
        $scope.ninjas = response.data;
        console.log(angular.toJson($scope.ninjas));
    });


}]);


myApp.controller('ContactController', ['$scope', '$location', function ($scope, $location) {
    
    $scope.sendMessage = function () {
        $location.path("http://localhost/~usman/angularjs/contact-success");
    }
    
}]);

/*myAppModule.config(function () {
    
});

myAppModule.run(function () {

});*/


