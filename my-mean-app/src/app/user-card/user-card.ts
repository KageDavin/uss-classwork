import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.css'],
})
export class UserCardOutput {
  @Input() user: any;
}
