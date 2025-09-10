import { Routes } from '@angular/router';
import { UserFormOutput } from './user-form/user-form';
import { UserCardOutput } from './user-card/user-card';


export const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', component: UserFormOutput },
  { path: 'card', component: UserCardOutput }

];
