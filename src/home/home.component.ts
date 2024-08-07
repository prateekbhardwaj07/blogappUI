import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import * as $ from "jquery";
import { Router, NavigationStart} from '@angular/router';
import { NgForm } from '@angular/forms';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  title = '';
  isHomeRoute = true;
  hide = false;
  hideHeader = false;
  username:string = ""; 
  expression = '\/?admin\/?[a-z]*\/?[a-z]*'
  regex = new RegExp(this.expression);
  homeHeader = '90';
  otherHeader = '45';
  pageWithMessage:string;
  categories:string[] = [];


  constructor(private router:Router,private _commonService: CommonService,private localStorage:LocalStorageService){
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    this.localStorage.deleteOnSessionEnd();
  }

  
}
