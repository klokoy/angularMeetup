import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteParams, OnActivate, ComponentInstruction} from 'angular2/router';

import {PersonService} from './person.service';

@Component({
    selector: 'person',
    bindings: [PersonService],
    inputs: ['id']
})
@View({
    templateUrl: 'src/person.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class Person implements OnActivate {

    service: PersonService;
    person: any;
    id: string;

    onActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        var self = this;

        self.service.get(self.id)
            .then(function(person: any) {
            self.person = person;
        });
    }

    constructor(params: RouteParams, personService: PersonService) {
        this.id = params.get('id');
        this.service = personService;
    }

    onSubmit() {
        console.log('submit: ', this.person)
    }

}
