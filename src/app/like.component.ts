import {Component, Input} from '@angular/core';

@Component({
    selector: 'like',
    template: `
        <i 
            class="glyphicon glyphicon-heart"
            [class.highlighted]="iLike"
            (click)="toggleLike()">
            </i>
            <span>{{ likeCount }}</span>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        .highlighted {
            color: deeppink;
        }
    `]
})
export class LikeComponent{
    @Input() likeCount = 0;
    @Input() iLike = false;

    toggleLike(){
        this.iLike = !this.iLike;
        this.likeCount += this.iLike ? 1 : -1;
    }
}