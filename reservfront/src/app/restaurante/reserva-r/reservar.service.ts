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
    return this.http.get('http://localhost:8000/rsv/restbares/' + String(id)).pipe(
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


    return this.http.post('http://localhost:8000/rsv/reservbr', reserva , httpOptions) .subscribe(
      (response) => console.log(response),
      (error) => console.log(error.error)
    );



  }
}
