import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservabService } from './reservab.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-reserva-b',
  templateUrl: './reserva-b.component.html',
  styleUrls: ['./reserva-b.component.css']
})
export class ReservaBComponent implements OnInit {

  @ViewChild('f', {static: false}) reservForm: NgForm;
  bar = {};
  nombre = '';
  mesa = {id: 0, restaurante: '0', capacidad: 0};
  seleccion = false;
  constructor(private rservice: ReservabService, private route: ActivatedRoute, private auService: AuthService, private router: Router) { }
  ap = 'reservar';
  id = this.auService.id;
  message = {};
  badrequest = false;
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
         const furl = params[this.ap];
         this.rservice.getBar(furl).subscribe(
          (data: any) => {
           this.bar = data;
           this.nombre = data.nombre;
           console.log(this.bar);
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
    const cantidadr = this.reservForm.value.cant;
    const reserva = {reservante: this.id, diaReservado: diar , cantidad: cantidadr, mesad: this.mesa.id};
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
