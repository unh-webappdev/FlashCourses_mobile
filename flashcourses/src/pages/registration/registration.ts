import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from "@angular/forms";
import { ToastController } from 'ionic-angular';
import { ToastOptions } from 'ionic-angular/components/toast/toast-options';
import { ApiProvider } from '../../providers/api/api';
import { FlashtabsPage } from '../flashtabs/flashtabs';
import { LoadingController } from 'ionic-angular';
import { TokenModel } from '../login/TokenModel';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  public registrationForm: any;
  toastOptions:ToastOptions;
  Token:TokenModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _form: FormBuilder,
   private _service:ApiProvider, private _toast:ToastController,public loadingCtrl: LoadingController, private storage: Storage) {
    this.registrationForm = this._form.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      username: ["", Validators.required],
    });
    this.toastOptions = {message : 'Please provide valid entriess', duration:2000}
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  onLoginSuccesful(token:string, refresh:string){
    this.navCtrl.setRoot(FlashtabsPage);
    this.storage.set('usertoken', token);
    this.storage.set('userrefresh', refresh);
  }

  login(){
    let loader = this.loadingCtrl.create({
      content: "Flashcourses is validating your information...",
    });
    loader.present().then(() => {
      this._service.login({"username":this.registrationForm.controls['username'].value,"password":this.registrationForm.controls['password'].value})
      .subscribe(token =>{
        this.Token = token,this.onLoginSuccesful(this.Token.access, this.Token.refresh)
      },
      ()=><any>this._toast.create(this.toastOptions).present()
      .then(() => {
        loader.dismiss();
      })
    )});
    loader.dismiss();
  }

  onRegistrationSuccesful(){
    this.login()
  }

  register() {
    let loader = this.loadingCtrl.create({
      content: "Flashcourses is validating your information...",
    });
    loader.present().then(() => {
      this._service.getPostObject("/accounts/api/registration/",{"username":this.registrationForm.controls['username'].value,"email":this.registrationForm.controls['email'].value, "password":this.registrationForm.controls['password'].value})
    .subscribe(result => this.onRegistrationSuccesful(),
    ()=><any>this._toast.create(this.toastOptions).present().then(
      () =>{loader.dismiss();})
    )});
    loader.dismiss();
  }

}
