import { Routes } from '@angular/router';
import { UserFormOutput } from './user-form/user-form';
import { UserCardOutput } from './user-card/user-card';
import { Card } from './card/card';


export const routes: Routes = [
  { path: '', redirectTo: 'create profile', pathMatch: 'full' },
  { path: 'create profile', component: UserFormOutput },
  { path: 'display profile', component: UserCardOutput },
  { path: 'View Messages', component: Card }

];
