import { Component, OnInit, ViewChild } from '@angular/core';
import { RestauranteService } from '../restaurante/restaurante.service';
import { BarService } from '../bar/bar.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  creabar = false;
  crearest = false;
  usuario: object;
  @ViewChild('r', {static: false}) restForm: NgForm;
  @ViewChild('b', {static: false}) barForm: NgForm;
  constructor(private rservice: RestauranteService, private bservice: BarService , private auService: AuthService) { }
  dueñoid: number;
  ngOnInit() {
    this.dueñoid = this.auService.id;
  }
  toggleBar() {
    this.creabar = true;
    this.crearest = false;
  }
  toggleRestr() {
    this.crearest = true;
    this.creabar = false;
  }
  registrarBar(){
    const nombref = this.barForm.value.nombre;
    const tipof = this.barForm.value.tipo;
    const ciudadf = this.barForm.value.ciudad;
    const direccionf = this.barForm.value.direccion;
    const bar = {nombre: nombref, tipo: tipof, ciudad: ciudadf , direccion: direccionf, dueño: this.dueñoid};
    this.bservice.makeBar(bar);
  }
  registrarRest() {
    const nombref = this.restForm.value.nombre;
    const tipof = this.restForm.value.tipo;
    const ciudadf = this.restForm.value.ciudad;
    const direccionf = this.restForm.value.direccion;
    const rest = {nombre: nombref, tipo: tipof, ciudad: ciudadf , direccion: direccionf, dueño: this.dueñoid};
    this.rservice.makeRestaurante(rest);
  }


}
