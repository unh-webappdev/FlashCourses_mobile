/*
Author: Raghava Adusumilli
Last Modified: 04/29/2018
path:"/src/pages/cards/cards.module.ts"
*/

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsPage } from './cards';

@NgModule({
  declarations: [
    CardsPage,
  ],
  imports: [
    IonicPageModule.forChild(CardsPage),
  ],
})
export class CardsPageModule {}
