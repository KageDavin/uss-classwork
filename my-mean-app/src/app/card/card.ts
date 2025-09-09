import { Component } from '@angular/core';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
  standalone: true
})
export class Card {


  messages: string[] = [
    'Message 1: Hello from the first card!',
    'Message 2: Angular and Bootstrap are great!',
    'Message 3: This is a new, exciting message.',
    'Message 4: Thanks for clicking!'
  ];

  currentMessage: string = this.messages[0];

  private messageIndex: number = 0;

  changeMessage(): void {

    this.messageIndex = (this.messageIndex + 1) % this.messages.length;
    this.currentMessage = this.messages[this.messageIndex];
  }
}
