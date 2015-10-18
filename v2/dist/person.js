System.register(['angular2/angular2', 'angular2/router', './person.service'], function(exports_1) {
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
    var angular2_1, router_1, person_service_1;
    var Person;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            }],
        execute: function() {
            Person = (function () {
                function Person(params, personService) {
                    this.id = params.get('id');
                    this.service = personService;
                }
                Person.prototype.onActivate = function (next, prev) {
                    var self = this;
                    self.service.get(self.id)
                        .then(function (person) {
                        self.person = person;
                    });
                };
                Person.prototype.onSubmit = function () {
                    console.log('submit: ', this.person);
                };
                Person = __decorate([
                    angular2_1.Component({
                        selector: 'person',
                        bindings: [person_service_1.PersonService],
                        inputs: ['id']
                    }),
                    angular2_1.View({
                        template: "\n        <div class=\"row\" *ng-if=\"person\">\n\n          <div class=\"center-align\">\n              <img alt=\"\" class=\"circle center-align\" height=\"200\" src=\"{{person.avatar}}\" width=\"200\">\n          </div>\n\n          <form class=\"col s12\"\n                (submit)=\"onSubmit()\">\n\n            <div class=\"row\">\n                <div class=\"input-field col s6\">\n                    <label class=\"active\" for=\"first_name\">First Name</label>\n                    <input id=\"first_name\" [(ng-model)]=\"person.firstName\" placeholder=\"Placeholder\" type=\"text\">\n                </div>\n                <div class=\"input-field col s6\">\n                    <label class=\"active\" for=\"last_name\">Last Name</label>\n                    <input id=\"last_name\" [(ng-model)]=\"person.lastName\" type=\"text\">\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <label class=\"active\" for=\"jobTitle\">Job title</label>\n                    <input id=\"jobTitle\" [(ng-model)]=\"person.jobTitle\" type=\"text\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <label class=\"active\" for=\"jobDescription\">Job description</label>\n                    <input id=\"jobDescription\" [(ng-model)]=\"person.jobDescription\" type=\"text\">\n                </div>\n            </div>\n\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n          </form>\n        </div>\n    ",
                        directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _a) || Object, person_service_1.PersonService])
                ], Person);
                return Person;
                var _a;
            })();
            exports_1("Person", Person);
        }
    }
});
