import { Component, Input, OnInit } from '@angular/core';
import jsonData from "../../../../assets/json_files/dummy_data.json";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }
  totalCards: number = 2;
  availableCards: number = 1
  cardData: any = []

  ngOnInit(): void {
    this.cardData = jsonData
  }

  calculateProgressPercentage(salePrice: number, maxPrice: number): number {
    return (salePrice / maxPrice) * 100;
  }
}
