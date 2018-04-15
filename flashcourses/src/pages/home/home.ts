import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { Storage } from '@ionic/storage';
import { FlashtabsPage } from '../flashtabs/flashtabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toRegistration = RegistrationPage;

  constructor(public navCtrl: NavController, public storage:Storage) {
  }

  isLoggedin(){
    this.storage.get('usertoken').then((val) => {
      if (!val){
        this.navCtrl.setRoot(LoginPage);
      }
      else{
        this.navCtrl.setRoot(FlashtabsPage);
      }
    });
  }
}
