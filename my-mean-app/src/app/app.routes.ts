import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home';
import { Card } from './card/card';

export const routes: Routes = [
  // Default route that shows the HomeComponent at the root path ('')
  // { path: '', component: Home },

  { path: './card', component: Card }
];
