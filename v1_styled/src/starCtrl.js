angular
    .module('app')
    .controller('StarCtrl', StarCtrl);

function StarCtrl(Star) {

    var vm = this;

    vm.isStared = Star.isStared;
    vm.star = Star.star;
    vm.unstar = Star.unstar;

};
