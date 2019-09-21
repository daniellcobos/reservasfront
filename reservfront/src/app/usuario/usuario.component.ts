import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReservarService } from '../restaurante/reserva-r/reservar.service';
import { ReservabService } from '../bar/reserva-b/reservab.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario = {nombre: 'string', ciudad: '', fondos: 0, email: '' , admin: null};
  constructor(
    private uService: UsuarioService,
    private route: ActivatedRoute,
    private rbService: ReservabService,
    private rrService: ReservarService, 
    private router: Router ) { }
  ap = 'id';
  reservasd = [];
  reservasbr = [];
  bares = [];
  restaurantes = [];
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
         const furl = params[this.ap];
         this.uService.getUsuario(furl).subscribe(
          (data: any) => {
           this.usuario = data;
           this.reservasd = data.ReservH;
           this.reservasbr = data.ReservBR;
           this.restaurantes = data.Dueñob;
           this.bares = data.Dueñod;
          }
     );
    });
  }
  borrarBreserva(id: number) {
    this.rbService.deleteReservab(id);
    setTimeout(() =>  {this.router.navigate(['']);
    }, 80
    );
  }
  borrarRreserva(id: number) {
    this.rrService.deleteReservar(id);
    setTimeout(() =>  {this.router.navigate(['']);
    }, 80
    );
  }
}
