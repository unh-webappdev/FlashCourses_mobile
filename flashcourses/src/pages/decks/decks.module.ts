/*
Author: Raghava Adusumilli
Last Modified: 04/29/2018
path:"/src/pages/decks/decks.module.ts"
*/

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DecksPage } from './decks';

@NgModule({
  declarations: [
    DecksPage,
  ],
  imports: [
    IonicPageModule.forChild(DecksPage),
  ],
})
export class DecksPageModule {}
