import { Component, OnInit} from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  log: boolean;
  title = 'reservfront';
  constructor(public auService: AuthService, private router: Router) {
    auService.log.subscribe(
      (onMain) => {
        this.log = onMain;
  }
   );
}
  cerrar(){
    this.auService.logout();
    this.log = false;
    this.router.navigate(['']);
  }
  ngOnInit() {

  }

}
