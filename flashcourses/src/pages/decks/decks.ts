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

  decks: String

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: ApiProvider) {
      apiProvider.getGetObject("/flashcards/api/deck/list/",{})
      .subscribe(function(decks) {
          this.decks = decks;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DecksPage');
  }

}
