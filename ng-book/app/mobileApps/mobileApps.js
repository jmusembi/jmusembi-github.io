app = angular.module('mobileApp', ['ngTouch', 'hmTouchEvents']);

app.controller("mobileController", function ($scope) {
    $scope.text = "Github";
    $scope.show = function () {
        $scope.text = "Nothing";
    }

})