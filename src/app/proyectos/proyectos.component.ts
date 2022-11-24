import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto';

//import { PROYECTOS } from '../lista-proyectos';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'efbv-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos? : Proyecto[];

  seleccionado? : Proyecto;

  seleccionar(item: Proyecto){
    this.seleccionado = item;
  }
  constructor(private proyectoService : ProyectoService) { }

/**
 *
 */

  getProyectos(): void{
   this.proyectoService.getProyectos()
   .subscribe(proyectos => this.proyectos = proyectos);
  }
  ngOnInit(): void {
    this.getProyectos();
  }

}
