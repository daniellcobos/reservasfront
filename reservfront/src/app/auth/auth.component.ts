import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild('f', {static: false}) userForm: NgForm;
  user: {email: string, password: string};
  loggeduser: {};
  defaultid = 0;
  message: any;
  badrequest = false;
  constructor(public auService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = {
      email: '',
      password: '',
    };
  }
  login() {
    const user = {username: this.user.email, password: this.user.password}
    this.auService.login(user).subscribe(
      (data: any) => {
        this.message = data;
        this.badrequest = false;
        this.auService.log.emit(true);
        setTimeout(() => {
          this.router.navigate(['usuario', this.auService.id]);
        }, 100);

      },
      (error) =>  {
        this.message = error.error;
        this.badrequest = true;
        this.auService.log.emit(false); }
    );

  }

  refreshToken() {
    this.auService.refreshToken();
  }

  logout() {
    this.auService.logout();
  }


}
