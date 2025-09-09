import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home';
import { Card } from './card/card';
import { Redirect } from './redirect/redirect';

export const routes: Routes = [
  // Default route that shows the HomeComponent at the root path ('')
  // { path: '', component: Home },

  { path: './card', component: Card },
   { path: 'redirect-to-classwork', component: Redirect }
];
