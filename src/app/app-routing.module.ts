import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowRecipiesComponent } from './show-recipies/show-recipies.component';

const routes: Routes = [
  {
    //localhost:4200-login page
    path:'',component:ShowRecipiesComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
