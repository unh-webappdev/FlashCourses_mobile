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

  decks: DeckModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: ApiProvider) {
      this.initializeDecks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DecksPage');
  }

  initializeDecks() {
      this.apiProvider.getGetObject("/courses/api/course/detail/" + this.navParams.get('course_unique_id'),{})
      .subscribe(_decks => {this.decks = _decks.decks});
  }

  toCards(deckid) {
    this.navCtrl.push(CardsPage, {deckid: deckid});
  }

  doRefresh(refresher) {
    this.initializeDecks();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

}
