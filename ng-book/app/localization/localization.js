var app = angular.module('localApp', ['pascalprecht.translate']);
app.config(function($translateProvider) {
$translateProvider.translations({
HEADLINE: 'Hello there, This is my awesome app!',
INTRO_TEXT: 'And it has i18n support!'
});
});

