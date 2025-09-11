import { Routes } from '@angular/router';
import { UserFormOutput } from './user-form/user-form';
import { UserCardOutput } from './user-card/user-card';
import { Card } from './card/card';
import { DiceGame } from './dice-game/dice-game';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Services } from './services/services/services';
import { Web } from './services/web/web';
import { Mobile } from './services/mobile/mobile';
import { RouterOutlet } from '@angular/router';



export const routes: Routes = [
  { path: '', redirectTo: 'create profile', pathMatch: 'full' },
  { path: 'create profile', component: UserFormOutput },
  { path: 'display profile', component: UserCardOutput },
  { path: 'View Messages', component: Card },
    { path:'home', component: Home },
  { path: 'game', component: DiceGame },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  {
    path: 'services',
    component: Services,
    children: [
      { path: 'web', component: Web },
      { path: 'mobile', component: Mobile }
    ]
  }

];



