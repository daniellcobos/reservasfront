import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private http: HttpClient) { }

  getRestaurantes() {
    return this.http.get('https://danreservas.herokuapp.com/rsv/restbares').pipe(
      map(
        (response: Response) => {
          const restsserver = response;
          return restsserver;
        }
      )
    );
  }

  makeRestaurante(restaurante: object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post('https://danreservas.herokuapp.com/rsv/restbares', restaurante, httpOptions).subscribe(
     (response) => console.log(response),
     (error) => console.log(error.error)
   );
  }
}
