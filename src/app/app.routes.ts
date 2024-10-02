import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lavado',
    loadComponent: () => import('./views/lavado/lavado.component').then(m => m.LavadoComponent),
    data: {
      title: 'Lavado'
    }
  },{
    path: 'login',
    loadComponent: () => import('./views/lavado/lavado.component').then(m => m.LavadoComponent),
    data: {
      title: 'Login'
    }
  }
];
