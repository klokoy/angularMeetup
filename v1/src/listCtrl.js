angular.module('app')
    .controller('ListCtrl', function($scope, Person) {

        $scope.list = [];

        Person.all()
            .then(function(allPersons) {
                $scope.list = allPersons;
            })

    })
