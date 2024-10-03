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

  public doctores:any;
  public alcoholTab:boolean=true;

  constructor(private firebaseService: FirebaseService) {

  }
  ngOnInit() {
    // Escuchar actualizaciones en tiempo real de la colección "Usuarios"
    this.unsubscribe = this.firebaseService.listenToAlcohol((data: any) => {
      this.lavado = data;  // Actualizar la lista de usuarios en el componente
    });
    this.unsubscribe = this.firebaseService.listenToDoctores((data: any) => {
      this.doctores = data;  // Actualizar la lista de usuarios en el componente
    });
  }
  ngOnDestroy() {
    // Detener la escucha cuando el componente se destruye
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
  getName(id:any){
    return this.doctores[id];
  }

}
