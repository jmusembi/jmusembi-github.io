app = angular.module("xhrApp", []);
app.controller("xhrController", function($scope, $http){
	getStud = $http.get('students.json');
	getStud.success(function(data, status, headers, config) {
			$scope.students = data;		

});
	getStud.error(function(data, status, headers, config){
		console.log(status);
	});
	getStud.then(function(response) {
		var time = response.config.responseTimeStamp - response.config.requestTimeStamp;
		console.log("The time taken is" + " " + time/1000 + "s" );
	})

});

app.factory("xhrInterceptor", function() {
	var timeStampMarker = {
		request: function(config) {
			config.requestTimeStamp = new Date().getTime();
			return config;		

		},
		response: function(response) {
			response.config.responseTimeStamp = new Date().getTime();
			return response;
		}
	};
	return timeStampMarker;
});

app.config(function($httpProvider) {
	$httpProvider.interceptors.push("xhrInterceptor");
});


