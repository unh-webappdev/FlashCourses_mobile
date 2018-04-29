/*
Author: Omu Oreva David
Last Modified: 04/24/2018
path:"/src/pages/institutions/institutions.ts"
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { CoursesPage } from '../courses/courses';
import { InstitutionModel } from './InstitutionModel';

@IonicPage()
@Component({
  selector: 'page-institutions',
  templateUrl: 'institutions.html',
})
export class InstitutionsPage {
  items:any;
  InstitutionList: InstitutionModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private api_service:ApiProvider) {
    this.initializeInstitutions();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstitutionsPage');
  }

  initializeInstitutions(){
    this.api_service.getGetObject("/courses/api/institution/list/",{})
    .subscribe(institutions =>{this.items = institutions,
      this.InstitutionList = Array.from(this.items);
    });
  }

  resettoFilter(){
    this.InstitutionList = Array.from(this.items);
  }

  toCourses(institution){
      console.log("in the method to courses");
      this.navCtrl.push(CoursesPage, {data: institution});
  }

  doRefresh(refresher) {
    this.initializeInstitutions();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  getInstitutions(ev: any) {
    this.resettoFilter();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.InstitutionList = this.InstitutionList.filter((institution) => {
        return (institution.institution_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}
