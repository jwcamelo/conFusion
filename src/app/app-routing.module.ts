import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishService } from './services/dish.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DishService]
})
export class AppRoutingModule { }
