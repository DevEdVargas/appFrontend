import { Component, OnInit } from '@angular/core';
import { MensajeService } from 'src/app/servicios/mensaje.service';

@Component({
  selector: 'efbv-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(public mensajeService : MensajeService) { }

  ngOnInit(): void {
  }

}
