import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecipeStartComponent, RecipeEditComponent]
})
export class RecipeModule { }
