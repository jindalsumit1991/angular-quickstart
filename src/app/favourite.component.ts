import {Component} from '@angular/core';

@Component({
    selector: 'favourite',
    templateUrl: 'app/favourite.template.html',
    styles:[`
        .glyphicon-star {
            color: orange;
        }
    `] 
})
export class FavouriteComponent{
    isFavourite = false;

    onClick(){
        this.isFavourite = !this.isFavourite;
    }
}