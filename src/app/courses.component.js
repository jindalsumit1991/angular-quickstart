"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var course_service_1 = require("./course.service");
/* This component decorator is like a function, receiving and object as a parameter
Here it is receiving 'selector' and 'template'
'template contains the html that will be inserted when page is rendered'
*/
var CoursesComponent = (function () {
    function CoursesComponent(service) {
        this.title = "The Title Of Courses Page";
        this.courses = service.getCourses();
    }
    return CoursesComponent;
}());
CoursesComponent = __decorate([
    core_1.Component({
        selector: 'courses',
        template: "\n        <favourite></favourite><br>\n        <like></like>\n        <voter></voter>\n        <h2>Courses</h2>\n        {{ title }}\n        <input type=\"text\" autoGrow />\n        <ul>\n            <li *ngFor=\"let course of courses\">\n                {{ course }}\n            </li>\n        </ul>\n        "
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], CoursesComponent);
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map