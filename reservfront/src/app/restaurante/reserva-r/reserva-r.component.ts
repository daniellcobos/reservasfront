import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservarService } from './reservar.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-reserva-r',
  templateUrl: './reserva-r.component.html',
  styleUrls: ['./reserva-r.component.css']
})
export class ReservaRComponent implements OnInit {
  @ViewChild('f', {static: false}) reservForm: NgForm;
  restaurante = {};
  nombre = '';
  mesa = {id: 0, restaurante: '0', capacidad: 0};
  seleccion = false;
  constructor(private rservice: ReservarService, private route: ActivatedRoute) { }
  ap = 'reservar';
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
    const reserva = {reservante: 0, dia: diar, hora: horar, cantidad: cantidadr, mesa: this.mesa.id};
    console.log(reserva);
  }
}
