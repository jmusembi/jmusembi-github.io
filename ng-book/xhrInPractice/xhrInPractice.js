app = angular.module("xhrApp", []);
app.config(function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];

});

app.controller("xhrController", function($scope, $http) {
	get = $http.get("https://api.github.com");
	get.success(function(data, status, headers, config) {
		$scope.data = data;
		$scope.headers = headers();
		$scope.status = status;
		console.log(config);
});
	del = $http.delete("https://api.github.com/emojis");
	del.error(function(data, status, headers, config) {
		$scope.del_data = data;
		$scope.del_headers = headers();
		$scope.del_status = status;

	})

	
})