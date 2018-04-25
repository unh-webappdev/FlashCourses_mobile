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
  staticDecks: String[]; /** Used for search refresh*/

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: ApiProvider) {
      this.initializeDecks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DecksPage');
  }

  initializeDecks() {
      this.apiProvider.getGetObject("/courses/api/course/tree/" + this.navParams.get('course_unique_id'),{})
      .subscribe(_decks => {this.decks = _decks.decks, this.staticDecks = _decks.decks});
  } 

  resettoFilter(){
    this.decks = this.staticDecks;
  }

  searchForDeck(event: any) {
    this.resettoFilter();
    let val = event.target.value;
    if (val && val.trim() != '') {
      this.decks = this.decks.filter(deck => {
        return (deck.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  doRefresh(refresher) {
    this.initializeDecks();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

}
