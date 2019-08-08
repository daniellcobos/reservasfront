import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  @ViewChild('f', {static: false}) userForm: NgForm;
  constructor(private uService: UsuarioService) { }

  ngOnInit() {
  }
  crearUsuario(){
    const namef = this.userForm.value.name;
    const unamef = this.userForm.value.username;
    const emailf = this.userForm.value.email;
    const passwordf = this.userForm.value.password;
    const ciudadf = this.userForm.value.ciudad;
    const adminf = this.userForm.controls['admin'].value;
    const usuario = {username: unamef, email: emailf, name: namef, fondos: 0, ciudad: ciudadf , admin: adminf, password: passwordf };
    this.uService.addUser(usuario);
  }
}
