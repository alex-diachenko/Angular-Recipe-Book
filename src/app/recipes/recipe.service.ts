import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'Just-awesome',
            'https://e1.edimdoma.ru/data/recipes/0004/9511/49511-ed4_wide.jpg?1468492295', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('Potatoes', 20),
                new Ingredient('Lemon', 1)
            ]), 
        new Recipe(
            'Super Burger',
            'Just taste it',
            'https://media-cdn.tripadvisor.com/media/photo-s/17/ba/a6/31/burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
                new Ingredient('Fries', 20),
                new Ingredient('Cheese', 4)
            ]), 
      ];
    
      constructor(private slService: ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice();
      }
    
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}