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
  constructor(private auService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = {
      email: '',
      password: '',
    };
  }
  login() {
    this.auService.login({username: this.user.email, password: this.user.password});
    setTimeout(() =>  {this.router.navigate(['']);
    }, 100
    );
    this.auService.log.emit(true);
  }

  refreshToken() {
    this.auService.refreshToken();
  }

  logout() {
    this.auService.logout();
  }


}
