import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservarService } from '../restaurante/reserva-r/reservar.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-admirestaurante',
  templateUrl: './admirestaurante.component.html',
  styleUrls: ['./admirestaurante.component.css']
})
export class AdmirestauranteComponent implements OnInit {
  @ViewChild('f', {static: false}) reservForm: NgForm;
  restaurante = {nombre: '', tipo: '', ciudad: '', direccion: '', mesa: []};

  nombre = '';
  mesa = {id: 0, restaurante: '0', capacidad: 0};
  seleccion = false;
  messages = {};
  constructor(private rservice: ReservarService, private route: ActivatedRoute, private auService: AuthService, private router: Router) { }
  ap = 'reservar';
  id = this.auService.id;
  message: any;
  badrequest = false;
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
         const furl = params['id'];
         this.rservice.getRestaurante(furl).subscribe(
          (data: any) => {
           this.restaurante = data;
           this.nombre = data.nombre;
           console.log(this.restaurante);
          }
     );
    });
  }

}
