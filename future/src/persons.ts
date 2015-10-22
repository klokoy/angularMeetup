import {Component, View, NgFor} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

import {Person} from './person';
import {PersonService} from './person.service';
import {Star} from './star';

@Component({
    selector: 'persons',
    bindings: [PersonService]
})
@View({
    templateUrl: 'src/persons.html',
    directives: [NgFor, Person, RouterLink, Star]
})

export class Persons {

    service: PersonService;
    list: any[];

    constructor(personService: PersonService) {
        var vm = this;
        vm.persons = [1, 2, 3, 4]

        vm.service = personService;

        vm.service
            .all()
            .then(function(all: any[]) {
            vm.persons = all;
        })
    }
}
