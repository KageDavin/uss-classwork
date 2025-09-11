import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dice-game',
  standalone: true,
  templateUrl: './dice-game.html',
  styleUrls: ['./dice-game.css']
})
export class DiceGame {
  dice1 = signal<number>(0);
  dice2 = signal<number>(0);
  total = signal<number>(0);
  rollCount = signal<number>(0);
  score = signal<number>(0);

  rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  rollAll(): void {
    const d1 = this.rollDice();
    const d2 = this.rollDice();
    const sum = d1 + d2;

    this.dice1.set(d1);
    this.dice2.set(d2);
    this.total.set(sum);
    this.rollCount.update(c => c + 1);
    this.score.update(s => s + sum);

    if (this.score() >= 100) {
      alert(`🎉 You reached 100 in ${this.rollCount()} rolls!`);
    }
  }
}
