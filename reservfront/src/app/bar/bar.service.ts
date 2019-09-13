import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export  class BarService {

  constructor(private http: HttpClient) { }

  getBares() {
    return this.http.get('https://danreservas.herokuapp.com/rsv/discbares').pipe(
      map(
        (response: Response) => {
          const restsserver = response;
          return restsserver;
        }
      )
    );
  }

  makeBar(bar: object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post('https://danreservas.herokuapp.com/rsv/discbares', bar, httpOptions).subscribe(
     (response) => console.log(response),
     (error) => console.log(error.error)
   );
  }

}
