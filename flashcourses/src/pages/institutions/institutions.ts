import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the InstitutionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-institutions',
  templateUrl: 'institutions.html',
})
export class InstitutionsPage {
  InstitutionList:String[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private api_service:ApiProvider) {
    this.initializeInstitutions();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstitutionsPage');
  }

  initializeInstitutions(){
    this.api_service.getGetObject("/courses/api/institution/list/",{})
    .subscribe(institutions =>{this.InstitutionList = institutions
    });
  }

  doRefresh(refresher) {
    this.initializeInstitutions();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

}
