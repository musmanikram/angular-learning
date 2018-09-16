var myApp = angular.module("myAppModule", ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'myController'
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
            templateUrl:'views/random.html',
            controller: function ($scope) {

                $scope.random = Math.floor(Math.random() * 4);
                
            }
        };
}])

myApp.controller('myController', ['$scope', '$http', function ($scope, $http) {

    $scope.message = "Hey!!!!";

    $scope.removeNinja = function(ninja){
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);
    }

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
    }

    /*$http.get('data/ninjas.json').success(function (data) {

    });*/

    $http.get('http://localhost/~usman/angularjs/data/ninjas.json').then(function (response) {
        $scope.ninjas = response.data;
        console.log(angular.toJson($scope.ninjas));
    });


}]);

/*myAppModule.config(function () {
    
});

myAppModule.run(function () {

});*/


