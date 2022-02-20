import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import * as $ from "jquery";
import { Router, NavigationStart} from '@angular/router';
import { CommonService } from '../home/services/common.service'
import { NgForm } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  title = 'TestApp';
  isHomeRoute = true;
  hide = false;
  hideHeader = false;
  username:string = ""; 
  expression = '\/?admin\/?[a-z]*\/?[a-z]*'
  regex = new RegExp(this.expression);
  homeHeader = '90';
  otherHeader = '45';
  pageWithMessage:string;
  categories:string[] = ["pchacks","socialhacks","mobilehacks","oshacks"];


  constructor(private router:Router,private _commonService: CommonService,private localStorage:LocalStorageService){
  }

  ngOnInit(): void {
    $(document).ready(function(){
    $('#menu-toggle').on('click',function(){
      $('.nav').toggleClass('showing');
      $('.nav ul').toggleClass('showing');
      $('.page-wrapper').toggleClass('responsiveLayout');
    });
    });

    this.router.events.subscribe((events) => {
      if (events instanceof NavigationStart) {
        if (events.url === '/index' || events.url === "/bloglist" || events.url === '/single' || events.url === '/dashuser') {
          this.hide = false;
          this.username = "Prateek";
          this.isHomeRoute = true;
        } 
        else if(this.regex.test(events.url) === true)
        {
          this.hide = true;
          this.username = "Prateek";
          this.isHomeRoute = false;
        }
        else 
        {
          this.hide = true;
          this.username = "Guest";
          this.isHomeRoute = false;
        }
      }
    });
    console.log(this.homeHeader);
  }

  ngOnDestroy():void{
    this.localStorage.deleteOnSessionEnd();
  }

  onMailSubmit(contactForm:NgForm){
    var message = contactForm.controls['message'].value;
    this._commonService.contactUsForm(message,0).subscribe(
			data => { this.pageWithMessage = data.toString() },
			error => { console.log('Error :', error.status + error.statusText) }
    )
    // go to next page with message
    console.log(this.pageWithMessage);
  }

  onAreaInput(event:any){
    var element = event.target;
    element.style.color="black";
    element.style.background = "white";  
  }
}
