import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


import { Observable, observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() log: EventEmitter<any> = new EventEmitter();

  user: {};
  logeduser: {};

  // http options used for making API calls
  private httpOptions: any;

  // the actual JWT token
  public token: string;
  public loggedin = false;
  // the token expiration date
  public tokenExpires: Date;

  // the username of the logged in user
  public username: string;
  public id: number;
  // error messages received from the login attempt
  public errors: any = [];

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  public login(user) {
    console.log(user);
    this.http.post('http://localhost:8000/rsv/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
      data => {

        this.updateData(data['token']);
        console.log(data);
      },
      err => {
        this.errors = err['error'];
        console.log(this.errors)
      }
    );

  }

  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken() {
    this.http.post('http://localhost:8000/rsv/api-token-refresh/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
        console.log(this.updateData(data['token']) );
      },
      err => {
        this.errors = err['error'];
      }
    );
  }

  public logout() {
    this.token = null;
    this.tokenExpires = null;
    this.username = null;
    this.loggedin = false;
  }

  private updateData(token) {
    this.token = token;
    this.errors = [];
    this.loggedin = true;
    // decode the token to read the username and expiration timestamp
    const tokenParts = this.token.split(/\./);
    const tokenDecoded = JSON.parse(window.atob(tokenParts[1]));
    this.tokenExpires = new Date(tokenDecoded.exp * 1000);
    this.username = tokenDecoded.email;
    this.id = tokenDecoded.user_id;
 
  }
  islogged() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedin);
        }, 800);
      }
    );
    return promise;
  }
  getToken() {
    return this.token;
  }

  change() {
    console.log('change started');
    this.log.emit(true);
   }

   getEmittedValue() {
     return this.log;
   }
 
}
