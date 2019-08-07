import { Component, OnInit } from '@angular/core';
import { ReservarService } from './reservar.service';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-reserva-r',
  templateUrl: './reserva-r.component.html',
  styleUrls: ['./reserva-r.component.css']
})
export class ReservaRComponent implements OnInit {
  restaurante: object = {};
  constructor(private rservice: ReservarService, private route: ActivatedRoute) { }
  ap = 'reservar';
  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
         const furl = params[this.ap];
         this.rservice.getRestaurante(furl).subscribe(
          (data: any) => {
           this.restaurante = data;
           console.log(this.restaurante);
          }
    );

  });
  }
}
