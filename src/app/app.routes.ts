import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {path:'',
    redirectTo:'higiene/1/1',
    pathMatch:'full'
  },
  {

    path: 'higiene/:alcohol/:tab',
    loadComponent: () => import('./views/lavado/lavado.component').then(m => m.LavadoComponent),
    data: {
      title: 'Lavado',
      routes:'/lavado'
    }
  },{
    path: 'login',
    component:LoginComponent,
    data: {
      title: 'Login',
      routes:'/login'
    }
  },{
    path: 'registro',
    loadComponent: () => import('./views/registro/registro.component').then(m => m.RegistroComponent),
    data: {
      title: 'Registro'
    }
  },{
    path: 'rank',
    loadComponent: () => import('./views/rank/rank.component').then(m => m.RankComponent),
    data: {
      title: 'Registro'
    }
  },{
    path: 'dashboard',
    loadComponent: () => import('./views/dashboard/dashboard.component').then(m => m.DashboardComponent),
    data: {
      title: 'Dashboard'
    }
  }
];
