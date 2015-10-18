import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'person',
    inputs: ['id']
})
@View({
    template: `
        This is the person view
        id: {{id}}
    `
})

export class Person {


    constructor() {

    }

}
