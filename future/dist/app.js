System.register(['angular2/angular2', 'angular2/router', './persons', './person'], function(exports_1) {
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
    var angular2_1, router_1, persons_1, person_1;
    var App, ROUTER_BINDINGS, APP_BINDINGS;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (persons_1_1) {
                persons_1 = persons_1_1;
            },
            function (person_1_1) {
                person_1 = person_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    angular2_1.Component({
                        selector: 'app'
                    }),
                    angular2_1.View({
                        template: "\n        <div class=\"container\">\n            <div class=\"row\">\n\n                <h1 class=\"center-align\" [router-link]=\" ['./List'] \">\n                    1 to 2\n                </h1>\n\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterLink]
                    }),
                    router_1.RouteConfig([
                        { path: '/', redirectTo: '/list' },
                        { path: '/list', as: 'List', component: persons_1.Persons },
                        { path: '/item/:id', as: 'Person', component: person_1.Person }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("App", App);
            // bootstrap(App, [Persons, ROUTER_PROVIDERS]);
            ROUTER_BINDINGS = [
                router_1.ROUTER_BINDINGS,
                angular2_1.bind(router_1.ROUTER_PRIMARY_COMPONENT).toValue(App),
                angular2_1.bind(router_1.LocationStrategy).toClass(router_1.PathLocationStrategy),
                angular2_1.bind(router_1.APP_BASE_HREF).toValue('/')
            ];
            APP_BINDINGS = [
                ROUTER_BINDINGS,
            ];
            angular2_1.bootstrap(App, APP_BINDINGS);
        }
    }
});
