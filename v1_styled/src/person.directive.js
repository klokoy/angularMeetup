angular
    .module('app')
    .directive('person', personDirective);

function personDirective() {
    return {
        restrict: 'E',
        templateUrl: 'views/person.html',
        scope: {},
        controller: PersonCtrl,
        controllerAs: 'person'
    }
}

function PersonCtrl($stateParams, PersonService) {

    var vm = this;

    PersonService.get($stateParams.id)
        .then(function(thePerson) {
            vm.data = thePerson;
        });

    vm.submit = function() {
        console.log(vm.data);
    }
};
