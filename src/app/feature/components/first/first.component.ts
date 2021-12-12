import { Component, OnInit } from '@angular/core';
import { Genre } from './enums/genre';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name!: string;
  description!: string;
  price!: number;
  category! : Genre;
  isAvailable!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.name = "Battlefield V";
    this.description = "Battlefield V is a first-person shooter video game developed by DICE and published by Electronic Arts. Battlefield V is the sixteenth installment in the Battlefield series and the successor to 2016's Battlefield 1.";
    this.price = 123;
    this.category = Genre.Action;
    this.isAvailable = true;
  }
}
