System.register(['angular2/angular2', 'angular2/router', './person'], function(exports_1) {
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
    var angular2_1, router_1, person_1;
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
            }],
        execute: function() {
            Persons = (function () {
                function Persons() {
                    var self = this;
                    self.list = [1, 2, 3, 4];
                    window.fetch('http://localhost:3000/persons')
                        .then(function (response) {
                        response.json()
                            .then(function (all) {
                            self.list = all;
                        });
                    });
                }
                Persons = __decorate([
                    angular2_1.Component({
                        selector: 'persons'
                    }),
                    angular2_1.View({
                        template: "\n        <h2>\n            The data:\n        </h2>\n\n        <table class=\"striped\">\n            <thead>\n                <tr>\n                    <th data-field=\"avatar\"></th>\n                    <th data-field=\"star\"></th>\n                    <th data-field=\"firstName\">First name</th>\n                    <th data-field=\"lastName\">Last name</th>\n                    <th data-field=\"jobTitle\">Job title</th>\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr *ng-for=\"#person of list\" [router-link] = \"['../Person', {id: person.id}]\">\n                    <td><img alt=\"\" class=\"circle\" height=\"36\" src=\"{{person.avatar}}\" width=\"36\"></td>\n                    <td>\n                        <!--span ng-controller=\"StarCtrl as star\">\n                            <i class=\"material-icons\" ng-click=\"star.star(person.id);$event.stopPropagation();\" ng-if=\"!star.isStared(person.id)\">star_border</i>\n                            <i class=\"material-icons\" ng-click=\"star.unstar(person.id);$event.stopPropagation();\" ng-if=\"star.isStared(person.id)\">star</i>\n                        </span-->\n                    </td>\n                    <td>{{person.firstName}}</td>\n                    <td>{{person.lastName}}</td>\n                    <td>{{person.jobTitle}}</td>\n                </tr>\n            </tbody>\n        </table>\n\n    ",
                        directives: [angular2_1.NgFor, person_1.Person, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Persons);
                return Persons;
            })();
            exports_1("Persons", Persons);
        }
    }
});
