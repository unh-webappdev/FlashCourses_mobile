import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toLogin = LoginPage;

  toRegistration = RegistrationPage;

  constructor(public navCtrl: NavController) {

  }

}
