//Factory vs Service
app = angular.module("myApp", []);
app.service("myService", function() {
	this.sayHello = function(greeting, name) {
		return "Service: \n" + " " + greeting + " " + name;
	};
});

app.factory("myFactory", function() {
	return{
		sayHello: function(greeting, name) {
			return "Factory: \n" + " " + greeting + " " + name;
		}
	}
	});

app.value();

app.controller("myController", function($scope, myFactory, myService){
	$scope.factoryHello =  myFactory.sayHello("Hi", " Joseph");
	$scope.serviceHello =myService.sayHello("Alloha", "Joseph");

});
