app = angular.module("myApp", []);
app.controller('MyController', [
'$scope', '$sce',
function($scope, $sce) {
$scope.$watch('email.rawHtml', function(v) {

if (v) {
$scope.email.htmlBody =
$sce.trustAsHtml($scope.email.rawHtml);
}
})
}]);