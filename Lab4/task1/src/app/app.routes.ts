import { Routes } from '@angular/router';
import {Routehome} from './components/routehome/routehome';
import {Routeuser} from './components/routeuser/routeuser';

export const routes: Routes = [
    {
    path: '',
    title: 'App Home Page',
    component: Routehome,
  },
  {
    path: 'routeuser',
    title: 'App User Page',
    component: Routeuser,
  },
];

