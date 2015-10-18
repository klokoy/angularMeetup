import {Component, View, NgFor} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

import {Person} from './person';
import {PersonService} from './personService';

@Component({
    selector: 'persons',
    bindings: [PersonService]
})
@View({
    template: `
        <h2>
            The data:
        </h2>

        <table class="striped">
            <thead>
                <tr>
                    <th data-field="avatar"></th>
                    <th data-field="star"></th>
                    <th data-field="firstName">First name</th>
                    <th data-field="lastName">Last name</th>
                    <th data-field="jobTitle">Job title</th>
                </tr>
            </thead>

            <tbody>
                <tr *ng-for="#person of list" [router-link] = "['../Person', {id: person.id}]">
                    <td><img alt="" class="circle" height="36" src="{{person.avatar}}" width="36"></td>
                    <td>
                        <!--span ng-controller="StarCtrl as star">
                            <i class="material-icons" ng-click="star.star(person.id);$event.stopPropagation();" ng-if="!star.isStared(person.id)">star_border</i>
                            <i class="material-icons" ng-click="star.unstar(person.id);$event.stopPropagation();" ng-if="star.isStared(person.id)">star</i>
                        </span-->
                    </td>
                    <td>{{person.firstName}}</td>
                    <td>{{person.lastName}}</td>
                    <td>{{person.jobTitle}}</td>
                </tr>
            </tbody>
        </table>

    `,
    directives: [NgFor, Person, RouterLink]
})

export class Persons {

    service: PersonService;

    constructor(personService: PersonService) {
        var self = this;
        self.list = [1, 2, 3, 4]

        self.service = personService;

        self.service
            .all()
            .then(function(all) {
            self.list = all;
        })

    }

}
