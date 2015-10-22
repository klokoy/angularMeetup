angular.module('app')
    .directive('persons', personsDirective);

function personsDirective() {
    return {
        restrict: 'E',
        templateUrl: 'views/persons.html',
        scope: {},
        controller: PersonsCtrl,
        controllerAs: 'persons'
    }
}

function PersonsCtrl(PersonService) {

    var vm = this;

    vm.list = [];

    PersonService.all()
        .then(function(allPersons) {
            vm.list = allPersons;
        })

};
