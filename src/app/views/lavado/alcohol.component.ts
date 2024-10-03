import { Component,OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { FirebaseService } from '../../services/firebase.service';
import { CommonModule } from '@angular/common';
import { Stream } from 'stream';
@Component({
  selector: 'app-alcohol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lavado.component.html',
  styleUrl: './lavado.component.css'
})
export class AlcoholComponent {

  lavado: any[] = [];
  private unsubscribe: any;
  public alcoholTab:boolean=true;

  constructor(private firebaseService: FirebaseService) {

  }
  ngOnInit() {
    // Escuchar actualizaciones en tiempo real de la colección "Usuarios"
    this.unsubscribe = this.firebaseService.listenToAlcohol((data: any) => {
      this.lavado = data;  // Actualizar la lista de usuarios en el componente

    });
  }

  getTime(str:string){
    // Obtener la hora y los minutos
    let date= new Date(str);
    let horas = date.getHours().toString().padStart(2, '0');   // Devuelve las horas en formato 2 dígitos
    let minutos = date.getMinutes().toString().padStart(2, '0'); // Devuelve los minutos en formato 2 dígitos

    // Formato hh:mm
    return `${horas}:${minutos}`;
   }
}
