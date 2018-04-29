/*
Author: Omu Oreva David
Last Modified: 04/28/2018
path:"/src/pages/about/about.ts"
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  showModal(modalNo) {
    let thisModal = this.modalCtrl.create(modalView, modalNo);
    thisModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
}

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      FlashCourses
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content padding>
        <h4>{{view.content}}</h4>
        <p>{{view.more}}</p>
</ion-content>
`
})
export class modalView {
  view;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var modalPages = [
      {
        content: 'FlashCourses contact information',
        more: 'more text on this...'
      },
      {
        content: 'FlashCourses Privacy Policy information',
        more: 'more text on this...'
      },
      {
        content: 'FlashCourses Terms of Service',
        more: 'more text on this...'
      },
    ];
    this.view = modalPages[this.params.get('pageNo')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}