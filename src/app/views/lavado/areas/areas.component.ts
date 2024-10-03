import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [],
  templateUrl: './areas.component.html',
  styleUrl: '../lavado.component.css'
})
export class AreasComponent {
  @Input() alcoholTab!:boolean;
  @Input() lavado:any[]=[];
  @Input() doctores:any[]=[]
  getName(id: any) {
    return this.doctores[id.toString()].nombre;
  }
}
