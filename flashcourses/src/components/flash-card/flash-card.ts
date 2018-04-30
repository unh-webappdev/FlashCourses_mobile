/*
Author: Raghava Adusumilli
Last Modified: 04/29/2018
path:"/src/components/flash-card/flash-card.ts"
*/

import { Component } from '@angular/core';

@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {

  flipped: boolean = false;

  constructor() {

  }

  flip(){
    this.flipped = !this.flipped;
  }

}
