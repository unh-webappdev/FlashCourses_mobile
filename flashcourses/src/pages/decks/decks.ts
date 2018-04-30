/*
Author: Raghava Adusumilli
Last Modified: 04/29/2018
path:"/src/pages/decks/decks.ts"
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { CardsPage } from '../cards/cards';
import { DeckModel } from './deckModel';

@IonicPage()
@Component({
  selector: 'page-decks',
  templateUrl: 'decks.html',
})
export class DecksPage {

  staticDecks: DeckModel[]; /** Used for search refresh*/
  decks: DeckModel[];

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

  toCards(deckid) {
    this.navCtrl.push(CardsPage, {deckid: deckid});
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
