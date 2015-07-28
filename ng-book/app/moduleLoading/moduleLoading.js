angular.module('myApp', [])
.config(function($provide, $compileProvider) {
$provide.factory('myFactory', function() {
var service = {};
return service;
});
$compileProvider.directive('myDirective',
function() {
return {
template: '<button>Click me</button>'
}
})
});