import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  getUsuario(id: number) {
    return this.http.get('http://localhost:8000/rsv/userdetail/' + id).pipe(
      map(
        (response: Response) => {
          const restsserver = response;
          return restsserver;
        }
      )
    );
      }
      addUser( user: object) {
       const httpOptions = {
         headers: new HttpHeaders({
           'Content-Type': 'application/json',
         })
       };
       return this.http.post('http://localhost:8000/rsv/userlist', user, httpOptions).subscribe(
        (response) => console.log(response),
        (error) => console.log(error.error)
      );
     }
}
