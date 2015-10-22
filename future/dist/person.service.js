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
    var PersonService;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            PersonService = (function () {
                function PersonService() {
                    this.url = 'http://localhost:3000';
                }
                PersonService.prototype.all = function () {
                    return window
                        .fetch(this.url + '/persons')
                        .then(function (res) {
                        return res.json();
                    });
                };
                PersonService.prototype.get = function (id) {
                    return window
                        .fetch(this.url + '/persons/' + id)
                        .then(function (res) {
                        return res.json();
                    });
                };
                PersonService = __decorate([
                    angular2_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PersonService);
                return PersonService;
            })();
            exports_1("PersonService", PersonService);
        }
    }
});
