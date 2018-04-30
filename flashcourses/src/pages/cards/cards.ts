/*
Author: Raghava Adusumilli
Last Modified: 04/29/2018
path:"/src/pages/cards/cards.ts"
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { CardModel } from './cardModel';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  cards:CardModel[];
  selected:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: ApiProvider) {
    this.initializeCards();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

  initializeCards() {
      this.apiProvider.getGetObject("/flashcards/api/deck/detail/" + this.navParams.get('deckid'),{})
      .subscribe(_cards => {this.cards = _cards.cards});
  }

  next() {
    this.selected = (this.selected + 1) % this.cards.length;
  }


  prev() {
    this.selected = (this.selected - 1 + this.cards.length) % this.cards.length;
  }

  isSelected(i):boolean {
      return this.selected == i;
  }

  doRefresh(refresher) {
    this.initializeCards();
    setTimeout(() => {
      refresher.complete();
      this.selected = 0;
    }, 2000);
  }

}
