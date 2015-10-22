System.register([], function(exports_1) {
    var stars, StarService;
    return {
        setters:[],
        execute: function() {
            stars = [];
            StarService = (function () {
                function StarService() {
                }
                StarService.prototype.isStared = function (id) {
                    return stars.indexOf(id) >= 0;
                };
                StarService.prototype.star = function (id) {
                    stars.push(id);
                };
                StarService.prototype.unstar = function (id, e) {
                    stars.splice(stars.indexOf(id), 1);
                };
                return StarService;
            })();
            exports_1("StarService", StarService);
        }
    }
});
