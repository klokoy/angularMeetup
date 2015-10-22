angular.module('app')
    .controller('PersonsCtrl', function($scope, Person) {

        $scope.persons = [];

        Person.all()
            .then(function(allPersons) {
                $scope.persons = allPersons;
            })

    })
