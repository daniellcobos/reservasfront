import { Component, OnInit } from '@angular/core';
import {RestauranteService} from './restaurante.service';
import Restaurante from './restaurante.model';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {
  restaurante: Restaurante[] = [];
  constructor(private rservice: RestauranteService) { }

  ngOnInit() {
    this.rservice.getRestaurantes().subscribe(
      (data: any) => {
      this.restaurante = data;
      }
    );
  }

}
