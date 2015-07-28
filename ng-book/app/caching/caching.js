app = angular.module("cacheApp", []);
app.controller("cacheController", function($scope, $http){
    getStud = $http.get('AllSets.json', {cache: true});
    getStud.success(function(data, status, headers, config) {
            $scope.students = data; 

})});