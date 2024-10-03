import { Component,OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { FirebaseService } from '../../services/firebase.service';
import { CommonModule } from '@angular/common';
import { Stream } from 'stream';
@Component({
  selector: 'app-alcohol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alcohol.component.html',
  styleUrl: './alcohol.component.css'
})
export class AlcoholComponent {

  usuarios: any[] = [];
  private unsubscribe: any;


  constructor(private firebaseService: FirebaseService) {

  }
  ngOnInit() {
    // Escuchar actualizaciones en tiempo real de la colección "Usuarios"
    this.unsubscribe = this.firebaseService.listenToUsuarios((data: any) => {
      this.usuarios = data;  // Actualizar la lista de usuarios en el componente
    });
  }

}
