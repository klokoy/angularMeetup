import { Injectable } from 'angular2/angular2';

@Injectable()

export class PersonService {
    url: string;

    constructor() {
        this.url = 'http://localhost:3000';
    }

    public all() {
        return window
            .fetch(this.url + '/persons')
            .then(function(res) {
            return res.json();
        });
    }

    public get(id: string) {
        return window
            .fetch(this.url + '/persons/' + id)
            .then(function(res) {
            return res.json();
        })
    }
}
