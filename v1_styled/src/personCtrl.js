angular
    .module('app')
    .controller('PersonCtrl', PersonCtrl);

function PersonCtrl($stateParams, Person) {

    var vm = this;

    Person.get($stateParams.id)
        .then(function(thePerson) {
            vm.data = thePerson;
        });

    vm.submit = function() {
        console.log(vm.data);
    }
};
