angular.module('wizardApp', ['wizardapp.controllers']);

angular.module('wizardapp.controllers', [])
    .controller('WizardSignupController',
    function($scope, $state) {
    go2 = function ($state) {
        $state.go("st2");
    };
    go3 = function ($state) {
        $state.go("st3");
    }  
});

angular.module('wizardApp', [
'ui.router', 'wizardapp.controllers'
])
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
    .state('st1', {
    url: '/step_1',
    templateUrl: 'step_1.html',
    controller: function ($state) {
        $scope.submit = $state.go("st2");
    }
    })
    .state('st2', {
    url: '/step_2',
    templateUrl: 'step_2.html'
    })
    .state('st3', {
    url: '/finish',
    templateUrl: 'step_3.html'
    });
});