angular.module('app')
    .controller('ListCtrl', function($scope, Person) {

        $scope.list = [1, 2, 3, 4];

        Person.all()
            .then(function(allPersons) {
                $scope.list = allPersons;
            })

    })
