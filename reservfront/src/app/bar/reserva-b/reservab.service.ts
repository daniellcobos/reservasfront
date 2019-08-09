import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReservabService {

  constructor(private http: HttpClient, private auService: AuthService) { }

  getBar(id: number) {
    return this.http.get('http://localhost:8000/rsv/discbares/' + String(id)).pipe(
      map(
        (response: Response) => {
          const barserver = response;
          return barserver;
        }
      )
    );
}
  makeReserva(reserva: object) {
    const httpOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'JWT ' + this.auService.token    // this is our token from the UserService (see Part 1)
      })
    };


    return this.http.post('http://localhost:8000/rsv/reservd', reserva , httpOptions) .subscribe(
      (response) => console.log(response),
      (error) => console.log(error.error)
    );
  }
  deleteReservab(id: number) {
    const httpOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'JWT ' + this.auService.token    // this is our token from the UserService (see Part 1)
      })
    };


    return this.http.delete('http://localhost:8000/rsv/brb/' + String(id) , httpOptions) .subscribe(
      (response) => console.log(response),
      (error) => console.log(error.error)
    );
}
}
