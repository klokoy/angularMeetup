import {Component, View, bootstrap, NgFor, bind, FORM_BINDINGS } from 'angular2/angular2';
import {
RouteConfig,
ROUTER_DIRECTIVES,
ROUTER_PRIMARY_COMPONENT,
APP_BASE_HREF, ROUTER_BINDINGS as NG_ROUTER_BINDINGS,
LocationStrategy,
PathLocationStrategy,
RouterLink} from 'angular2/router';

// import {
// ROUTER_DIRECTIVES,
// ROUTER_BINDINGS,
// ROUTER_PRIMARY_COMPONENT,
// RouteConfig
// } from 'angular2/router';

import {Persons} from './persons';
import {Person} from './person';
import {PersonService} from './personService';

@Component({
    selector: 'app'
})
@View({
    template: `
        <div class="container">
            <div class="row">

                <h1 class="center-align" [router-link]=" ['./List'] ">
                    1 to 2
                </h1>

                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, RouterLink]
})

@RouteConfig([
    { path: '/', as: 'Persons', component: Persons },
    { path: '/list', as: 'List', component: Persons },
    { path: '/item/:id', as: 'Person', component: Person }
])

export class App {
}

// bootstrap(App, [Persons, ROUTER_PROVIDERS]);



const ROUTER_BINDINGS: Array<any> = [
    NG_ROUTER_BINDINGS,
    bind(ROUTER_PRIMARY_COMPONENT).toValue(App),
    bind(LocationStrategy).toClass(PathLocationStrategy),
    bind(APP_BASE_HREF).toValue('/')
];

const APP_BINDINGS: Array<any> = [
    ROUTER_BINDINGS,
];

bootstrap(App, APP_BINDINGS);
