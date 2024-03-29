angular
    .module('app')
    .service('StarService', StarService);

function StarService() {

    var stars = [];

    this.isStared = function(id) {
        return stars.indexOf(id) >= 0;
    }

    this.star = function(id) {
        stars.push(id);
    }

    this.unstar = function(id, e) {
        stars.splice(stars.indexOf(id), 1)
    }

};
