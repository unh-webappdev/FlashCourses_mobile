import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the DecksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decks',
  templateUrl: 'decks.html',
})
export class DecksPage {

  decks: String[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: ApiProvider) {
      this.initializeDecks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DecksPage');
  }

  initializeDecks() {
      this.apiProvider.getGetObject("/courses/api/course/tree/" + this.navParams.get('course_unique_id'),{})
      .subscribe(_decks => {this.decks = _decks.decks});
  } 

  doRefresh(refresher) {
    this.initializeDecks();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

}
