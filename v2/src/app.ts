import {Component, View, bootstrap, NgFor, bind, FORM_BINDINGS } from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PRIMARY_COMPONENT, APP_BASE_HREF, ROUTER_BINDINGS as NG_ROUTER_BINDINGS, LocationStrategy, PathLocationStrategy } from 'angular2/router';

// import {
// ROUTER_DIRECTIVES,
// ROUTER_BINDINGS,
// ROUTER_PRIMARY_COMPONENT,
// RouteConfig
// } from 'angular2/router';

import {Persons} from './persons';

@Component({
    selector: 'app'
})
@View({
    template: `
        <h1>yea</h1>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', as: 'Persons', component: Persons }
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
