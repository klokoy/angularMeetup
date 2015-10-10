angular
    .module('app')
    .service('Person', function($http) {

        this.all = function() {
            return $http.get('http://localhost:3000/persons')
                .then(function(response) {
                    return response.data;
                });
        }

        this.get = function(id) {
            return $http.get('http://localhost:3000/persons/' + id)
                .then(function(response) {
                    return response.data;
                });
        }

    });
