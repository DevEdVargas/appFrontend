import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Proyecto } from '../proyecto';
import { PROYECTOS } from '../lista-proyectos';

import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private mensajeService : MensajeService) { }

  getProyectos(): Observable<Proyecto[]>{
    this.mensajeService.agregar("ProyectoService: obtiene la lista de proyectos. ")
    return of (PROYECTOS);
  }

}
