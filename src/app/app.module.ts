import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';
import { MensajesComponent } from './mensajes/mensajes/mensajes.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [

    AppComponent,
    ProyectosComponent,
    ProyectoDetalleComponent,
    MensajesComponent,
    UploadComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
