import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {AuthorService} from './author.service';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';
import {FavouriteComponent} from './favourite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  CoursesComponent,
                  AuthorsComponent,
                  AutoGrowDirective,
                  FavouriteComponent,
                  LikeComponent,
                  VoterComponent,
                  ],
  bootstrap:    [ AppComponent ],
  providers:    [ AuthorService, CourseService ]
})
export class AppModule {}