import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestauranteComponent} from './restaurante/restaurante.component';
import { BarComponent } from './bar/bar.component';
import { ReservaRComponent } from './restaurante/reserva-r/reserva-r.component';


const routes: Routes = [
  {path: 'restaurantes', component: RestauranteComponent,children:
  [{path: ':reservar', component: ReservaRComponent}]
},
  {path: 'bares', component: BarComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
