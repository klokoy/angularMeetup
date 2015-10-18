import { Injectable } from 'angular2/angular2';

@Injectable()

var stars: [string] = [];

export class StarService{

    isStared(id) {
        return stars.indexOf(id) >= 0;
    }

    star(id) {
        stars.push(id);
    }

    unstar(id, e) {
        stars.splice(stars.indexOf(id), 1)
    }

}
