import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export  class ReservarService {

  constructor(private http: HttpClient) { }

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
}
