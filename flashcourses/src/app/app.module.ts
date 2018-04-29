import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ApiProvider } from '../providers/api/api';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { AboutPage, modalView } from '../pages/about/about';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FlashtabsPage } from '../pages/flashtabs/flashtabs';
import { IonicStorageModule } from '@ionic/storage';
import { InstitutionsPage } from '../pages/institutions/institutions';
import { CoursesPage } from '../pages/courses/courses';
import { DecksPage } from '../pages/decks/decks';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AboutPage,
    RegistrationPage,
    FlashtabsPage,
    InstitutionsPage,
    CoursesPage,
    DecksPage, modalView
  ],
  imports: [
    BrowserModule, HttpModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AboutPage,
    RegistrationPage,
    FlashtabsPage,
    InstitutionsPage,
    CoursesPage,
    DecksPage, modalView
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    HttpClientModule,
  ]
})
export class AppModule {}
