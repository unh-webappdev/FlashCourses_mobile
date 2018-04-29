/*
Author: Nicholas Bielinski
Last Modified: 04/29/2018
path:"/src/pages/courses/courses.ts"
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { CourseModel } from './courseModel';

/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {
  CoursesList: String[];
  courses: CourseModel[];



  constructor(public navCtrl: NavController, public navParams: NavParams, private api_service: ApiProvider) {
    // when the page loads, load data
    this.initializeCourses();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }

  // this grabs the data from the API
  // on th einstitution page, I grabbed the UUID of the school
  // now I am using the institution detail endpoint which will give me
  // all course objects from that school
  initializeCourses() {
    this.api_service.getGetObject("/courses/api/institution/detail/" + this.navParams.get('data'), {})
      .subscribe(_courses => { this.courses = _courses.courses, this.CoursesList = _courses });

  }

  resetFilter() {

  }

  getItems(ev: any) {
    this.resetFilter();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is anything other than an empty string, start the filter
    // if the value is an empty string, this means user cleared search box
    // reload values on else statement
    if (val && val.trim() != '') {
      this.courses = this.courses.filter((course) => {
        return (course.course_title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else{
      this.initializeCourses();
    }
  }

  doRefresh(refresher) {
    this.initializeCourses();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
}
