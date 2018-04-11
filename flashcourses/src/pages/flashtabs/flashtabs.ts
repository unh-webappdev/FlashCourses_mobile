import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the FlashtabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flashtabs',
  templateUrl: 'flashtabs.html'
})
export class FlashtabsPage {
  aboutRoot = AboutPage;


  constructor(public navCtrl: NavController,) {
  }
}