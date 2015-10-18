import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteParams, OnActivate, ComponentInstruction} from 'angular2/router';

import {PersonService} from './personService';

@Component({
    selector: 'person',
    bindings: [PersonService],
    inputs: ['id']
})
@View({
    template: `
        <div class="row" *ng-if="person">

          <div class="center-align">
              <img alt="" class="circle center-align" height="200" src="{{person.avatar}}" width="200">
          </div>

          <form class="col s12"
                (submit)="onSubmit()">

            <div class="row">
                <div class="input-field col s6">
                    <label class="active" for="first_name">First Name</label>
                    <input id="first_name" [(ng-model)]="person.firstName" placeholder="Placeholder" type="text">
                </div>
                <div class="input-field col s6">
                    <label class="active" for="last_name">Last Name</label>
                    <input id="last_name" [(ng-model)]="person.lastName" type="text">
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <label class="active" for="jobTitle">Job title</label>
                    <input id="jobTitle" [(ng-model)]="person.jobTitle" type="text">
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <label class="active" for="jobDescription">Job description</label>
                    <input id="jobDescription" [(ng-model)]="person.jobDescription" type="text">
                </div>
            </div>

            <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </div>
    `,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class Person implements OnActivate {

    service: PersonService;
    person: any;
    id: string;

    onActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        var self = this;

        self.service.get(self.id)
            .then(function(person) {
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
