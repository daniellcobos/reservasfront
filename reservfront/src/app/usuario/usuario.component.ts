import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario = {nombre: 'string', ciudad: '', fondos: 0, email: '' };
  constructor(private uService: UsuarioService, private route: ActivatedRoute) { }
  ap = 'id';
  reservasd = [];
  reservasbr = [];
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
         const furl = params[this.ap];
         this.uService.getUsuario(furl).subscribe(
          (data: any) => {
           this.usuario = data;
           this.reservasd = data.ReservH;
           this.reservasbr = data.ReservBR;
           console.log(this.usuario);
           console.log(this.reservasd);
           console.log(this.reservasbr);
          }
     );
    });
  }

}
