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
      this.doctores = data;  // Actualizar la lista de usuarios en el componente
      console.log(data)
    });

  }
  ngOnDestroy() {
    // Detener la escucha cuando el componente se destruye
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  getName(id:any){

    return;
  }
}
