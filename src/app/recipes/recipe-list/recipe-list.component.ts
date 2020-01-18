import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'first recipe for project', 'https://st3.depositphotos.com/4011313/19127/i/1600/depositphotos_191279212-stock-photo-meat-fried-grill-selective-focus.jpg'), 
    new Recipe('A test recipe', 'first recipe for project', 'https://cdn.sm-news.ru/wp-content/uploads/2019/10/09/gril-1-1200x675.jpg'), 
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
