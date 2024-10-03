import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-mensual',
  standalone: true,
  imports: [],
  templateUrl: './mensual.component.html',
  styleUrl: '../lavado.component.css'
})
export class MensualComponent {
  @Input() alcoholTab!:boolean;
  @Input() lavado:any[]=[];
  @Input() doctores:any[]=[]
  getName(id: any) {
    return this.doctores[id.toString()].nombre;
  }
}
