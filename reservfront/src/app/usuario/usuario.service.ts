import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  getUsuario(id: number) {
    return this.http.get('https://danreservas.herokuapp.com/rsv/userdetail/' + id).pipe(
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
       return this.http.post('https://danreservas.herokuapp.com/rsv/userlist', user, httpOptions).subscribe(
        (response) => console.log(response),
        (error) => console.log(error.error)
      );
     }
}
