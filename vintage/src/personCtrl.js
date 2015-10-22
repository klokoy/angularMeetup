angular
    .module('app')
    .controller('PersonCtrl', function($scope, $stateParams, Person) {

        Person.get($stateParams.id)
            .then(function (thePerson) {
                $scope.person = thePerson;
            });

        $scope.submit = function () {
            console.log($scope.person);
        }
    });
