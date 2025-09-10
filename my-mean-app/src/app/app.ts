import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { UserFormOutput } from './user-form/user-form';
import { UserCardOutput } from './user-card/user-card';
import { Card } from './card/card';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserFormOutput, UserCardOutput, Card],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  user = signal<any>(null);

  updateUser(data: any) {
    this.user.set(data);
  }
}
