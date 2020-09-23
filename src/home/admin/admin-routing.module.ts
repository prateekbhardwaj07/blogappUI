import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';


const adminroutes: Routes = [
    { path: 'admin/category/:id', component: CategoryComponent},
    { path: 'admin/user/:id', component: UserComponent},
    { path: 'admin/posts/:id', component: PostsComponent},
    { path: 'admin', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(adminroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

 }
