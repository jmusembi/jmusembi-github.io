app = angular.module("animationsApp", ["ngAnimate"]);
app.controller("myCtrl", ["$scope", function($scope) {
    $scope.slideIn = false;
}]);