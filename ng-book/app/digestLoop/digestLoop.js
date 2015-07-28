angular.module('digestApp', []).controller('digestCtrl', function($scope) {
    $scope.count = 0;
    $scope.b = [{value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
    {value: 6}];

    $scope.$watch('b', function() {
        // do something here
        $scope.count += 1;
    });
});