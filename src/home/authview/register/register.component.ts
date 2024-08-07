import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
declare const checkPass : any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['/src/home/home.component.css','./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _adminService:AdminService,private _router:Router) { }

  ngOnInit(): void {

  }

  checkRePassword(){
    checkPass();
  }
  
  onRegisterUser(registerForm:NgForm){
    var username:string = registerForm.controls['username'].value;
    var email:string = registerForm.controls['email'].value;
    var password:string = registerForm.controls['password'].value;
    var outcomeMsg = 'Success';
    var userJsonObject:JSON = <JSON><any>{
      'username':username,
      'email':email,
      'password':password,
      'arr_time':new Date().getTime(),
      'is_subscribed':false
    };
    this._adminService.registerUser(userJsonObject).subscribe(
      (data) => {
                  console.log(data);
                  if(data.message.toString() == outcomeMsg){
                    this._router.navigate(['/login']);       
                  }
                },
      (error) => {console.log(error)}
    );
  }
      
}
