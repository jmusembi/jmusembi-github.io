angular.module('myApp', [])
.controller('allergyController', function($scope) {
	$scope.answer={};
    $scope.choices = [
      {name: 'Yes'},
      {name: 'No'},
     
    ];

    $scope.fields = [
    {placeholder: 'Allergy', isRequired: true},
    {placeholder: 'Severity', isRequired: true}
    ];
    $scope.submit = function() {
    	alert( "it");
    }
});