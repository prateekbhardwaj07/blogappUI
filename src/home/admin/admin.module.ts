import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { HomeModule } from '../home.module';
import { FontAwesomeModule,FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoryComponent, UserComponent, PostsComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
  constructor(library:FaIconLibrary){
    library.addIcons(faAngleDoubleDown);
  }
 }
