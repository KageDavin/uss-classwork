import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { NgModule } from '@angular/core';


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, NgModule],
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.css']
})
export class UserCardOutput {
  @Input() user: any;
}
