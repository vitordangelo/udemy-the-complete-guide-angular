import { Ingredient } from '../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Salada Simples',
      'O tomate pode ser substituído por tomate cereja',
      'http://img.itdg.com.br/tdg/images/recipes/000/000/233/169092/169092_original.jpg?mode=crop&width=370&height=278',
      [ new Ingredient('Tomate', 1), new Ingredient('Milho', 1) ]),
    new Recipe('Tabule Tropical',
      'Muito simples e saudável',
      'http://img.itdg.com.br/tdg/images/recipes/000/006/311/28182/28182_original.jpg?mode=crop&width=370&height=278',
      [ new Ingredient('Alface', 1), new Ingredient('Tomate', 1), new Ingredient('Ervilha', 1), new Ingredient('Couve', 1) ]),
    new Recipe('Salada de Macarrão',
      'Salada de Macarrão deliciosa',
      'http://img.itdg.com.br/tdg/images/recipes/000/002/765/11858/11858_original.jpg?mode=crop&width=370&height=278',
      [ new Ingredient('Macarrão', 1), new Ingredient('Alface', 1), new Ingredient('Tomate', 1) ]),
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
