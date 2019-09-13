import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestauranteComponent} from './restaurante/restaurante.component';
import { BarComponent } from './bar/bar.component';
import { ReservaRComponent } from './restaurante/reserva-r/reserva-r.component';
import { ReservaBComponent } from './bar/reserva-b/reserva-b.component';
import { AuthComponent } from './auth/auth.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { CanActivateGuard } from './auth/auth.guard';
import { AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {path: 'restaurantes', component: RestauranteComponent,children:
  [{path: ':reservar', component: ReservaRComponent}]
},
  {path: 'bares', component: BarComponent, children:
  [{path: ':reservar', component: ReservaBComponent}]},
  {path: 'login', component: AuthComponent},
  {path: 'usuario/:id', component: UsuarioComponent, canActivate: [CanActivateGuard]},
  {path: '', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'admin', component: AdminComponent, canActivate: [CanActivateGuard]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
