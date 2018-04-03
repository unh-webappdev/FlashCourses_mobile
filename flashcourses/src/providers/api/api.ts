import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Api Provider helps in making server restapi calls
*/
@Injectable()
export class ApiProvider {

  API_URL: string = 'http://159.65.236.42';
  AUTH_TOKEN: string = '';

  constructor(public http: HttpClient) {
  }

  getAuthToken(): string {
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
  getGetObject(endpoint, url_params): Observable<Object> {
    return this.http.get(this.API_URL + '/flashcards/api/deck/list/', {
      headers: new HttpHeaders().set('Authorization', this.getAuthToken()),
      params: url_params,
    });
  }

  /*
    body_params: should be a json object
    url_params: HttpParams object
    E.g. new HttpParams().set('id', '3')
  */
  getPostObject(endpoint, body_params, url_params): Observable<Object> {
    return this.http.post(this.API_URL + endpoint, JSON.stringify(body_params), {
      headers: new HttpHeaders().set('Authorization', this.getAuthToken()),
      params: url_params,
    });
  }

  /*
    returns all the decks of flashcards fetched from the server.
  */
  getDecks() {
    return new Promise(resolve => {
      this.getGetObject('/flashcards/api/deck/list/', {}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}