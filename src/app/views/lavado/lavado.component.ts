import { Component } from '@angular/core';

import { CollectionService } from '../../services/collection.service';
@Component({
  selector: 'app-lavado',
  standalone: true,
  imports: [],
  templateUrl: './lavado.component.html',
  styleUrl: './lavado.component.css'
})
export class LavadoComponent {
  service=new CollectionService();
  users = this.service.users;
  alcohol = this.service.alcohol;
  lavado = this.service.lavado;

}
