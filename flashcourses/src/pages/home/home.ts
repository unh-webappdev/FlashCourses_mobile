import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { Storage } from '@ionic/storage';
import { FlashtabsPage } from '../flashtabs/flashtabs';
import { ApiProvider } from '../../providers/api/api';
import { TokenModel } from '../login/TokenModel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Token:TokenModel;
  toRegistration = RegistrationPage;

  constructor(public navCtrl: NavController, public storage:Storage,public loadingCtrl: LoadingController,private api_service:ApiProvider) {
  }

  isLoggedin(){
    this.storage.get('usertoken').then((val) => {
      if (!val){
        this.navCtrl.push(LoginPage);
      }
      else{
        this.refresh();
        // added this for right now
        // refresh wasnt working correctly, so it wouldn't take me to the login page
        this.navCtrl.push(LoginPage);
      }
    });
  }

  onRefreshSuccesful(token:string){
    this.navCtrl.setRoot(FlashtabsPage);
    this.storage.set('usertoken', token);
  }

  refresh(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present().then(() => {
      this.storage.get('userrefresh').then((val) => {
        this.api_service.getPostObject("/api/token/refresh/",{"refresh":val})
        .subscribe(token =>{
          this.Token = token,this.onRefreshSuccesful(this.Token.access)
        })
      })
    });
    loader.dismiss();
  }
}
