import {Component} from '@angular/core'
import {CourseService} from './course.service'

/* This component decorator is like a function, receiving and object as a parameter
Here it is receiving 'selector' and 'template' 
'template contains the html that will be inserted when page is rendered'
*/
@Component({
    selector:'courses',
    template:`
        <favourite></favourite><br>
        <like></like>
        <voter></voter>
        <h2>Courses</h2>
        {{ title }}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        `
})

export class CoursesComponent {
    title = "The Title Of Courses Page";
    courses:string[];

    constructor(service : CourseService){
        this.courses = service.getCourses();
    }
}