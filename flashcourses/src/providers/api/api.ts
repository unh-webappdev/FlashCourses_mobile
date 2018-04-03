import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Api Provider helps in making server restapi calls
*/
@Injectable()
export class ApiProvider {

  this.API_URL = 'http://159.65.236.42';
  this.AUTH_TOKEN = '';

  constructor(public http: HttpClient) {
    this.http.post(this.apiUrl+'/users', JSON.stringify(data), {
      headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
    })
  }

  getAuthToken() {
    if (this.AUTH_TOKEN != '') {
      return this.AUTH_TOKEN;
    } else {
      // TODO get Auth token from storage and return
    }
  }

  /*
    url_params: HttpParams object
    E.g. new HttpParams().set('id', '3')
  */
  getGetObject(endpoint, url_params) {
    this.http.get(this.API_URL + '/flashcards/api/deck/list/', {
      headers: new HttpHeaders().set('Authorization', getAuthToken()),
      params: url_params,
    })
  }

  /*
    body_params: should be a json object
    url_params: HttpParams object
    E.g. new HttpParams().set('id', '3')
  */
  getPostObject(endpoint, body_params, url_params) {
    this.http.post(thsi.API_URL + endpoint, JSON.stringify(body_params), {
      headers: new HttpHeaders().set('Authorization', getAuthToken()),
      params: url_params,
    })
  }

  /*
    returns all the decks of flashcards fetched from the server.
  */
  getDecks() {
    return new Promise(resolve => {
      getGetObject('/flashcards/api/deck/list/', {}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
