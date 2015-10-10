angular
    .module('app')
    .controller('StarCtrl', function($scope, Star) {

        $scope.isStared = Star.isStared;
        $scope.star = Star.star;
        $scope.unstar = Star.unstar;

    });
