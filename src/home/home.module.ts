import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AuthviewModule } from './authview/authview.module';
import { AdminModule } from  './admin/admin.module';
import { PostOutlineService } from './services/post-outline.service';
import { CommonService } from './services/common.service';
import { PostContentService } from './services/post-content.service';


import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule} from 'ngx-slick-carousel';
import { IndexComponent } from './index/index.component';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule,FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { faFacebook,faTwitter,faYoutube,faLinkedin,faTelegram,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faUser,faBars,faPhone,faEnvelope,faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faBlogger } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt,faCalendar,faUserCircle} from '@fortawesome/free-regular-svg-icons'
import { FacebookModule } from 'ngx-facebook';

import { SingleComponent } from './single/single.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { DashuserComponent } from './dashuser/dashuser.component';
import { ParaTransform } from './para-transform.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
    SingleComponent,
    BloglistComponent,
    DashuserComponent,
    ParaTransform
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlickCarouselModule,
    FontAwesomeModule,
    ChartsModule,
    FormsModule,
    HomeRoutingModule,
    AuthviewModule,
    AdminModule,
    FacebookModule.forRoot()
  ],
  providers: [PostOutlineService,PostContentService,CommonService],
  bootstrap: [HomeComponent]
})
export class HomeModule {
  
  constructor(library:FaIconLibrary){
    library.addIcons(faFacebook,faTwitter,faYoutube,faLinkedin,faTelegram,
      faWhatsapp,faUser,faBars,faPhone,faEnvelope,faEnvelopeOpenText,faBlogger,faCalendarAlt,faCalendar,faUserCircle);
  }
 }
