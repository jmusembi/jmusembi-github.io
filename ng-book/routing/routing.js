angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
	templateUrl: 'routing.html'
	})
	.when('/introduction', {
	templateUrl: 'introduction.html'
	})
	.when('/advanced', {
	templateUrl: 'advanced.html'
	})
	.otherwise({
	redirectTo: '/'
	});
	}]).directive('sidebox', function() {
	return {
	restrict: 'EA',
	scope: {
	title: '@'
	},
transclude: true,
template: '<div class="sidebox">\
<div class="content">\
<h2 class="header">{{ title }}</h2>\
<span class="content" ng-transclude>\
</span>\
</div>\
</div>'
}
});
