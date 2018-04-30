/*
Author: Omu Oreva David
Last Modified: 04/29/2018
path:"/src/pages/flashtabs/flashtabs.ts"
*/

import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AboutPage } from '../about/about';
import { InstitutionsPage } from '../institutions/institutions';

@IonicPage()
@Component({
  selector: 'page-flashtabs',
  templateUrl: 'flashtabs.html'
})
export class FlashtabsPage {
  aboutRoot = AboutPage;
  institutionsRoot = InstitutionsPage;

  constructor(public navCtrl: NavController,) {
  }
}
