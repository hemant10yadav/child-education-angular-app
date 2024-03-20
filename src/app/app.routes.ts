import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage)
  },
  {
    path: 'subscribe',
    loadComponent: () => import('./subscribe-form/subscribe-form.component').then((m) => m.SubscribeFormComponent)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
