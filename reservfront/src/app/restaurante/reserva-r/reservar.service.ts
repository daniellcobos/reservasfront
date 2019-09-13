import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export  class ReservarService {

  constructor(private http: HttpClient, private auService: AuthService) { }

  getRestaurante(id: number) {
    return this.http.get('https://danreservas.herokuapp.com/rsv/restbares/' + String(id)).pipe(
      map(
        (response: Response) => {
          const restsserver = response;
          return restsserver;
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


    return this.http.post('https://danreservas.herokuapp.com/rsv/reservbr', reserva , httpOptions) .pipe(map(
      (response) => response
    ));
  }
  deleteReservar(id: number) {
    const httpOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'JWT ' + this.auService.token    // this is our token from the UserService (see Part 1)
      })
    };


    return this.http.delete('https://danreservas.herokuapp.com/rsv/brr/' + String(id) , httpOptions) .subscribe(
      (response) => console.log(response),
      (error) => console.log(error.error)
    );
  }
}
