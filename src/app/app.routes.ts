import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cad',
    loadChildren: () => import('./components/cad/cad.routes').then((m) => m.CadRoutes),
  },
  {
    path: 'landing',
    loadChildren: () => import('./components/landing/landing.routes').then((m) => m.LandingRoutes),
  },
  {
    path: '',
    loadChildren: () => import('./components/landing/landing.routes').then((m) => m.LandingRoutes),
  },
  {
    path: '**',
    redirectTo: 'landing',
  },
];
