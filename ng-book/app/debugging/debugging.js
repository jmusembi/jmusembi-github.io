angular.module('myApp', [])
.controller('allergyController', function($scope) {
  $scope.answer={};
    $scope.choices = [
      {name: 'Yes'},
      {name: 'No'}      
     
    ];
      var rootEle = document.querySelector("html");
      console.log(rootEle);
      var ele = angular.element(rootEle);
      console.log(ele);
      var ctrl = ele.controller();
      console.log(ctrl);
      var injector = ele.injector();
      console.log(injector);
      var data = ele.inheritedData();
      console.log(data);


    $scope.fields = [
    {placeholder: 'Allergy', isRequired: true},
    {placeholder: 'Severity', isRequired: true}
    ];
    $scope.submit = function() {
      alert( "it");
    }
});