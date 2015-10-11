angular.module('app')
    .controller('PersonsCtrl', PersonsCtrl);


function PersonsCtrl(Person) {

    var vm = this;

    this.list = [];

    Person.all()
        .then(function(allPersons) {
            vm.list = allPersons;
        })

};
