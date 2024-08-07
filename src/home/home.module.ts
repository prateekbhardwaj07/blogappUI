import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AuthviewModule } from './authview/authview.module';


import { HttpClientModule} from '@angular/common/http';
import { ParaTransform } from './para-transform.pipe';
import { FootbalComponent } from './footbal/footbal.component';


@NgModule({
  declarations: [
    HomeComponent,
    ParaTransform,
    FootbalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HomeRoutingModule,
    AuthviewModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {
 }
