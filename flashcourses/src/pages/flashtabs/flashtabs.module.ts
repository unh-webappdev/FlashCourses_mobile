import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashtabsPage } from './flashtabs';

@NgModule({
  declarations: [
    FlashtabsPage,
  ],
  imports: [
    IonicPageModule.forChild(FlashtabsPage),
  ]
})
export class FlashtabsPageModule {}
