import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstitutionsPage } from './institutions';

@NgModule({
  declarations: [
    InstitutionsPage,
  ],
  imports: [
    IonicPageModule.forChild(InstitutionsPage),
  ],
})
export class InstitutionsPageModule {}
