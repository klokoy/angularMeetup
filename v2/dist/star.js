System.register(['angular2/angular2', './star.service'], function(exports_1) {
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
    var angular2_1, star_service_1;
    var Star;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (star_service_1_1) {
                star_service_1 = star_service_1_1;
            }],
        execute: function() {
            Star = (function () {
                function Star(starService) {
                    this.service = starService;
                }
                Star.prototype.isStared = function (id) {
                    return this.service.isStared(id);
                };
                Star.prototype.star = function (id) {
                    this.service.star(id);
                };
                Star.prototype.unstar = function (id) {
                    this.service.unstar(id);
                };
                Star = __decorate([
                    angular2_1.Component({
                        selector: 'star',
                        bindings: [star_service_1.StarService],
                        inputs: ['person']
                    }),
                    angular2_1.View({
                        template: "\n        <span>\n            <i class=\"material-icons\" (click)=\"star(person.id);$event.stopPropagation();\" *ng-if=\"!isStared(person.id)\">star_border</i>\n            <i class=\"material-icons\" (click)=\"unstar(person.id);$event.stopPropagation();\" *ng-if=\"isStared(person.id)\">star</i>\n        </span>\n    ",
                        directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [star_service_1.StarService])
                ], Star);
                return Star;
            })();
            exports_1("Star", Star);
        }
    }
});
