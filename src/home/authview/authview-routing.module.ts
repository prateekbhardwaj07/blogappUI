import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core' 

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { EditblogsComponent } from "./editblogs/editblogs.component";

const authroutes: Routes = [
  { path: '', component: LoginComponent }, // default route of the module
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'editblogs/:action',component: EditblogsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(authroutes)],
  exports: [RouterModule]
})
export class AuthviewRoutingModule { }
