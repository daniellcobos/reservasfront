import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { BarComponent } from './bar/bar.component';
import { ReservaComponent } from './Bar/reserva/reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    BarComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
