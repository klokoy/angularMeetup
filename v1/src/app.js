
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/list");

  $stateProvider
    .state('list', {
      url: "/list",
      templateUrl: "views/list.html",
      controller: "ListCtrl"
    })
    .state('item', {
      url: "/:id",
      templateUrl: "views/item.html",
      controller: 'PersonCtrl'
    })
});
