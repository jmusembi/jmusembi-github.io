app = angular.module('mobileApp', ['ngTouch', 'angular-gestures']);

app.controller("mobileController", function ($scope) {
    $scope.text = "Github";
    $scope.show = function () {
        $scope.text = "Nothing";
    }

})