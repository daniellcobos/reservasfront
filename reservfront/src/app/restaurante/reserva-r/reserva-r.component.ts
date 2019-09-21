import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservarService } from './reservar.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-reserva-r',
  templateUrl: './reserva-r.component.html',
  styleUrls: ['./reserva-r.component.css']
})
export class ReservaRComponent implements OnInit {
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
         const furl = params[this.ap];
         this.rservice.getRestaurante(furl).subscribe(
          (data: any) => {
           this.restaurante = data;
           this.nombre = data.nombre;
           console.log(this.restaurante);
          }
     );
    });
  }
  selectMesa(mid: number, cap: number ) {
   this.mesa.id = mid;
   this.mesa.restaurante = this.nombre;
   this.mesa.capacidad = cap;
   this.seleccion = true;
   console.log(this.mesa);
  }
  createReserva() {
    const diar = this.reservForm.value.dia;
    const horar = this.reservForm.value.hora;
    const cantidadr = this.reservForm.value.cant;
    const reserva = {reservante: this.id, diaReservado: diar, horaReservada: horar, cantidad: cantidadr, mesa: this.mesa.id};
    console.log(reserva);
    this.rservice.makeReserva(reserva).subscribe(
       (data: any) => {
         this.message = data;
         this.badrequest = false;

       },
       (error) =>  {
         this.badrequest = true;
         this.message = error.error; }
    );
  }
}


