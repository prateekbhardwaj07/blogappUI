import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const blogRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(blogRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
