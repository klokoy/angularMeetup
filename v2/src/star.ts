import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

import {StarService} from './starService';

@Component({
    selector: 'star',
    bindings: [StarService],
    inputs: ['person']
})
@View({
    template: `
        <span>
            <i class="material-icons" (click)="star(person.id);$event.stopPropagation();" *ng-if="!isStared(person.id)">star_border</i>
            <i class="material-icons" (click)="unstar(person.id);$event.stopPropagation();" *ng-if="isStared(person.id)">star</i>
        </span>
    `,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class Star {

    service: StarService;

    constructor(starService: StarService) {
        this.service = starService;
    }

    isStared(id) {
        return this.service.isStared(id);
    }

    star(id) {
        this.service.star(id);
    }

    unstar(id) {
        this.service.unstar(id);
    }

}
