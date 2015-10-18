var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/list");

    $stateProvider
        .state('list', {
            url: "/list",
            template: "<persons></persons>"
        })
        .state('item', {
            url: "/:id",
            template: "<person></person>"
        })
});
