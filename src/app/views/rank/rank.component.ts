import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { CommonModule } from '@angular/common';
import { Script } from 'vm';

@Component({
  selector: 'app-rank',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rank.component.html',
  styleUrl: './rank.component.css'
})
export class RankComponent {

  private unsubscribe: any;
  public lavado: any[] = [];
  public doctores: any[] = [];
  public Alcohol: any[] = [];
  public winner: any;
  public horaT: any;
  public scores: any[] = [];
  public orderList: any[] = [];
  public i: number = 0;
  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit() {

    // Escuchar actualizaciones en tiempo real de la colección "Usuarios"
    this.unsubscribe = this.firebaseService.listenToLavado((data: any) => {
      this.lavado = data;  // Actualizar la lista de usuarios en el componente

    });
    this.unsubscribe = this.firebaseService.listenToAlcohol((data: any) => {
      this.Alcohol = data;  // Actualizar la lista de usuarios en el componente
    });

    this.unsubscribe = this.firebaseService.listenToDoctores((data: any) => {
      this.doctores = Object.values(data);  // Actualizar la lista de usuarios en el componente
      this.setScores();
      this.setOrder();
    });



  }
  ngOnDestroy() {
    // Detener la escucha cuando el componente se destruye
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
  setScores() {

    // Crear un mapa de conteo para los puntajes de lavado y alcohol
    let scoreMap: { [key: number]: number } = {};

    // Contar los puntajes de 'lavado'
    this.lavado.forEach(e => {
      if (!scoreMap[e.idUsuario]) {
        scoreMap[e.idUsuario] = 0;
      }
      scoreMap[e.idUsuario]++;
    });

    // Contar los puntajes de 'Alcohol'
    this.Alcohol.forEach(e => {
      if (!scoreMap[e.idUsuario]) {
        scoreMap[e.idUsuario] = 0;
      }
      scoreMap[e.idUsuario]++;
    });

    // Recorrer la lista de doctores y asignar los puntajes
    this.doctores.forEach(element => {
      const score = scoreMap[element.idUsuario] || 0; // Si no tiene puntaje, asignar 0
      this.scores.push({
        idUsuario: element.idUsuario,
        score: score,
        nombre: element.nombre,
        area: element.area
      });
    });
  }
  setOrder() {
    this.scores.sort((a, b) => {

      return b.score - a.score; // Ordena de mayor a menor
    });
  }

  getName(id: any) {
    return this.doctores[id.toString()].nombre;
  }
}


