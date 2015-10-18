angular
    .module('app')
    .directive('star', starDirective)
    .controller('StarCtrl', StarCtrl);

function starDirective() {
    return {
        restrict: 'E',
        templateUrl: 'views/star.html',
        scope: {
            person: '='
        },
        controller: StarCtrl,
        controllerAs: 'star'
    }
}

function StarCtrl(StarService) {

    var vm = this;

    vm.isStared = StarService.isStared;
    vm.star = StarService.star;
    vm.unstar = StarService.unstar;

};
