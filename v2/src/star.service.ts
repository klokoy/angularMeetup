import { Injectable } from 'angular2/angular2';

var stars: string[] = [];

@Injectable()

export class StarService{

    isStared(id: string) {
        return stars.indexOf(id) >= 0;
    }

    star(id: string) {
        stars.push(id);
    }

    unstar(id: string) {
        stars.splice(stars.indexOf(id), 1)
    }

}
