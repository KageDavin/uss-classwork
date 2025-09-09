import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [],
  templateUrl: './redirect.html',
  styleUrl: './redirect.css'
})

export class Redirect implements OnInit, OnDestroy {
  countdown: number = 5;
  private intervalId: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.redirect();
      }
    }, 1000); // 1000 milliseconds = 1 second
  }

  redirect(): void {
    clearInterval(this.intervalId);
    // Replace with the URL you want to redirect to
    window.location.href = "https://kagedavin.github.io/uss-classwork/my-mean-app/src/index.html";
  }
}
