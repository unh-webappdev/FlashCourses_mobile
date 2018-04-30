/*
Author: Nicholas Bielinski
Last Modified: 04/29/2018
path:"/src/pages/courses/courses.module.ts"
*/
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursesPage } from './courses';

@NgModule({
  declarations: [
    CoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(CoursesPage),
  ],
})
export class CoursesPageModule {}
