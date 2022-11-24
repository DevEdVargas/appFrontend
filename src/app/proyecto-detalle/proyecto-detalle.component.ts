import { Component, OnInit, Input } from '@angular/core';

import { Proyecto } from '../proyecto';
@Component({
  selector: 'efbv-proyecto-detalle',
  templateUrl: './proyecto-detalle.component.html',
  styleUrls: ['./proyecto-detalle.component.css']
})
export class ProyectoDetalleComponent implements OnInit {

  @Input() seleccionado? : Proyecto;

  constructor() { }

  ngOnInit(): void {
  }

}
