import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientsList: Ingredient[] = [
    new Ingredient('tomatoes', 5),
    new Ingredient('jalapenos', 10)
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
