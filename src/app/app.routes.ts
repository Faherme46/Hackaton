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
    loadComponent: () => import('./views/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login'
    }
  },{
    path: 'registro',
    loadComponent: () => import('./views/registro/registro.component').then(m => m.RegistroComponent),
    data: {
      title: 'Registro'
    }
  },{
    path: 'alcohol',
    loadComponent: () => import('./views/alcohol/alcohol.component').then(m => m.AlcoholComponent),
    data: {
      title: 'Registro'
    }
  },{
    path: 'rank',
    loadComponent: () => import('./views/rank/rank.component').then(m => m.RankComponent),
    data: {
      title: 'Registro'
    }
  }
];
