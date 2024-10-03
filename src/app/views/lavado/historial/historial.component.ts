import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.component.html',
  styleUrl: '../lavado.component.css'
})
export class HistorialComponent {

  @Input() alcoholTab!:boolean;
  @Input() lavado:any[]=[];
  @Input() doctores:any[]=[]

  getName(id: any) {
    return this.doctores[id.toString()].nombre;
  }
}
