import {Component, View, NgFor, NgIf} from 'angular2/angular2';

import {StarService} from './star.service';

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
    directives: [NgFor, NgIf]
})

export class Star {

    service: StarService;

    constructor(starService: StarService) {
        this.service = starService;
    }

    isStared(id: string) { return this.service.isStared(id) }

    star(id: string) {
        this.service.star(id);
    }

    unstar(id: string) {
        this.service.unstar(id);
    }
}
