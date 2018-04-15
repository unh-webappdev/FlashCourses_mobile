import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { Storage } from '@ionic/storage';

export interface PagePool{
  pageName: any;
  title: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;
  pages: PagePool[] = [
    {title: 'Logout', pageName: HomePage},
  ];

  constructor(private storage: Storage) {}

  gotoPage(pages: PagePool) {
    if (pages.title === 'Logout'){
     this.logout();
    }
    this.nav.setRoot(pages.pageName);
  }

  logout(){
    this.storage.remove('usertoken');
  }

}
