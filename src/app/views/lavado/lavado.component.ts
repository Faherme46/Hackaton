import { Component,OnInit,OnDestroy } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { CollectionService } from '../../services/collection.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lavado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lavado.component.html',
  styleUrl: './lavado.component.css'
})
export class LavadoComponent {


  private unsubscribe: any;
  public lavado: any[] = [];
  public doctores:any;
  public alcoholTab:boolean=false;
  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit() {

    // Escuchar actualizaciones en tiempo real de la colección "Usuarios"
    this.unsubscribe = this.firebaseService.listenToLavado((data: any) => {
      this.lavado = data;  // Actualizar la lista de usuarios en el componente
    });
    this.unsubscribe = this.firebaseService.listenToDoctores((data: any) => {
      this.lavado = data;  // Actualizar la lista de usuarios en el componente
    });

  }
  ngOnDestroy() {
    // Detener la escucha cuando el componente se destruye
    if (this.unsubscribe) {
      this.unsubscribe();
    }
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
