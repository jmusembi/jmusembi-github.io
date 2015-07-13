angular.module('myApp', [])
			.controller('MyController', function($scope, $interpolate){
        $scope.firstName = "Joseph";
        $scope.lastName = "";
        $scope.card = "First Name: {{ firstName }}\n Last Name: {{ firstName }}\n Patient Number";
        $scope.$watch('card', function(card){
          if (card) {
            var template = $interpolate(card);
            $scope.patientCard = template({firstName: $scope.firstName}, {lastName: $scope.lastName});
          }
        });
				
	
		});
