import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { HomeModule } from '../home.module';


@NgModule({
  declarations: [CategoryComponent, UserComponent, PostsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
