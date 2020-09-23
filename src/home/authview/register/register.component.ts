import { Component, OnInit } from '@angular/core';
declare const checkPass : any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['/src/home/home.component.css','./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  checkRePassword(){
    checkPass();
  }
  
}
