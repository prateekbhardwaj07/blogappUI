import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule,FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { faUser,faBars }from '@fortawesome/free-solid-svg-icons';
import { AuthviewRoutingModule } from './authview-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditblogsComponent } from './editblogs/editblogs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, EditblogsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthviewRoutingModule,
    FontAwesomeModule
  ],  
  exports: [LoginComponent, RegisterComponent,EditblogsComponent]
})
export class AuthviewModule {
  constructor(library:FaIconLibrary){
    library.addIcons(faUser,faBars);
  }
 }
