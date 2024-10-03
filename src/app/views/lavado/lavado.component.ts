import { Component, OnInit, OnDestroy, booleanAttribute } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { CommonModule } from '@angular/common';
import { HistorialComponent } from './historial/historial.component';
import { ActivatedRoute } from '@angular/router';
import { AreasComponent } from "./areas/areas.component";
@Component({
  selector: 'app-lavado',
  standalone: true,
  imports: [CommonModule, HistorialComponent, AreasComponent],
  templateUrl: './lavado.component.html',
  styleUrl: './lavado.component.css'
})
export class LavadoComponent {


  private unsubscribe: any;
  private unsubscribe2: any;
  public lavado: any[] = [];
  public doctores: any;
  public alcoholTab: boolean = false;
  public alcoholValue:string | null='1';
  public tabs:any={
    1:'Historial ',
    2:'Grafica Mensual ',
    3:'Grafica Areas '
  }

  public tab:string | null='1';
  constructor(private firebaseService: FirebaseService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.unsubscribe = this.firebaseService.listenToDoctores((data: any) => {
          this.doctores = data;  // Actualizar la lista de usuarios en el componente
        });
    // Escuchar actualizaciones en tiempo real de la colección "Usuarios"
    this.unsubscribe2 = this.firebaseService.listenToLavado((data: any) => {
      this.lavado = data;  // Actualizar la lista de usuarios en el componente
    });
    this.alcoholTab=this.route.snapshot.paramMap.get('alcohol')==='1';
    this.alcoholValue=this.route.snapshot.paramMap.get('alcohol');
    this.tab=this.route.snapshot.paramMap.get('tab');


  }
  ngOnDestroy() {
    // Detener la escucha cuando el componente se destruye
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }


}
