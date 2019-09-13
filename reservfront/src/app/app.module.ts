import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { BarComponent } from './bar/bar.component';
import { ReservaBComponent } from './bar/reserva-b/reserva-b.component';
import { ReservaRComponent} from './restaurante/reserva-r/reserva-r.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import { AuthService } from 'src/app/auth/auth.service';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { CanActivateGuard } from './auth/auth.guard';
import {RestauranteService} from './restaurante/restaurante.service';
import {BarService} from './bar/Bar.service';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    BarComponent,
    ReservaBComponent,
    ReservaRComponent,
    AuthComponent,
    UsuarioComponent,
    HomeComponent,
    RegistroComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [AuthService, CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
