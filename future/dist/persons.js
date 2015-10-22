System.register(['angular2/angular2', 'angular2/router', './person', './person.service', './star'], function(exports_1) {
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
    var angular2_1, router_1, person_1, person_service_1, star_1;
    var Persons;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (person_1_1) {
                person_1 = person_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            },
            function (star_1_1) {
                star_1 = star_1_1;
            }],
        execute: function() {
            Persons = (function () {
                function Persons(personService) {
                    var vm = this;
                    vm.persons = [1, 2, 3, 4];
                    vm.service = personService;
                    vm.service
                        .all()
                        .then(function (all) {
                        vm.persons = all;
                    });
                }
                Persons = __decorate([
                    angular2_1.Component({
                        selector: 'persons',
                        bindings: [person_service_1.PersonService]
                    }),
                    angular2_1.View({
                        templateUrl: 'src/persons.html',
                        directives: [angular2_1.NgFor, person_1.Person, router_1.RouterLink, star_1.Star]
                    }), 
                    __metadata('design:paramtypes', [person_service_1.PersonService])
                ], Persons);
                return Persons;
            })();
            exports_1("Persons", Persons);
        }
    }
});
