import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SingleComponent } from './single/single.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { DashuserComponent } from './dashuser/dashuser.component';
import { PostContentResolve } from './utils/PostContent-Resolve';

export const blogRoutes: Routes = [
  { path:'index', component: IndexComponent},
  { path:'single', component: SingleComponent},
  { path:'bloglist', component: BloglistComponent},
  { path:'dashuser', component: DashuserComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(blogRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
