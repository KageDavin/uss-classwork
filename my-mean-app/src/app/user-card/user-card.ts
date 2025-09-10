import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [NgModel, CommonModule, Input],
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.css'],
})
export class UserCardOutput {
  @Input() user: any;
}
