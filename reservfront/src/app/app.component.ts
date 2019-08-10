import { Component, OnInit} from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  log: boolean;
  title = 'reservfront';
  constructor(public auService: AuthService) {
    auService.log.subscribe(
      (onMain) => {
        this.log = onMain;
  }
   );
}

  ngOnInit() {

  }

}
