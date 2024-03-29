System.register(['angular2/angular2'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1;
    var stars, StarService;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
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
                StarService.prototype.unstar = function (id) {
                    stars.splice(stars.indexOf(id), 1);
                };
                StarService = __decorate([
                    angular2_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], StarService);
                return StarService;
            })();
            exports_1("StarService", StarService);
        }
    }
});
