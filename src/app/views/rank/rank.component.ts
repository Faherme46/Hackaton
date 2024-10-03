import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-rank',
  standalone: true,
  imports: [],
  templateUrl: './rank.component.html',
  styleUrl: './rank.component.css'
})
export class RankComponent {

  private unsubscribe: any;
  public lavado: any[] = [];
  public doctores:any;
  public Alcohol: any;
  public winner: any;
  public horaT : any;
  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit() {

    // Escuchar actualizaciones en tiempo real de la colección "Usuarios"
    this.unsubscribe = this.firebaseService.listenToLavado((data: any) => {
      this.lavado = data;  // Actualizar la lista de usuarios en el componente

    });

    this.unsubscribe = this.firebaseService.listenToDoctores((data: any) => {
      this.doctores = data;  // Actualizar la lista de usuarios en el componente
    });

    this.unsubscribe = this.firebaseService.listenToAlcohol((data: any) => {
      this.Alcohol = data;  // Actualizar la lista de usuarios en el componente
    });
    determineWinner()
    if (this.doctores.length === 0) {
      return;
    }

    let highestActionCount = this.doctores[0].horaT;
    this.winner = this.doctores[0];

    for (let i = 1; i < this.doctores.length; i++) {
      if (this.doctores[i].horaT > highestActionCount) {
        highestActionCount = this.doctores[i].horaT;
        this.winner = this.doctores[i];
      }
    }


  }
  ngOnDestroy() {
    // Detener la escucha cuando el componente se destruye
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
function determineWinner() {
  throw new Error('Function not implemented.');
}

