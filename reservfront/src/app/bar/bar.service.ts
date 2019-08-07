import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export default class BarService {

  constructor(private http: HttpClient) { }

  getBares() {
    return this.http.get('http://localhost:8000/rsv/discbares').pipe(
      map(
        (response: Response) => {
          const restsserver = response;
          return restsserver;
        }
      )
    );



}
}