
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/list");

  $stateProvider
    .state('list', {
      url: "/list",
      templateUrl: "views/persons.html",
      controller: "PersonsCtrl"
    })
    .state('item', {
      url: "/item/:id",
      templateUrl: "views/person.html",
      controller: 'PersonCtrl'
    });
});
