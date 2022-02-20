import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User, usertypes } from '../../model/User';
import { AdminService } from '../../services/admin.service';
import { TokenStoreService } from '../../services/token-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['/src/home/home.component.css', './login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _adminService: AdminService,private _tokenService: TokenStoreService,private _router:Router) { }

  ngOnInit(): void {
  }

  onLoginUser(loginForm: NgForm) {
    var username:string = loginForm.controls['username'].value;
    var password:string = loginForm.controls['password'].value;
    var user_role:string = loginForm.controls['user_type'].value;
    var role_id:number = Object.keys(usertypes).indexOf(user_role);
    var outcomeMsg:string = 'Success';
    var user:User = new User(0,username,password,'',role_id+1,[''],new Date().getTime(),false);
    var userJSON = User.decodeToJSON(user);
    this._adminService.loginUser(userJSON).subscribe(
      (data:any) => {
        if (data.message.toString() == outcomeMsg) {
          console.log('Returned with Success',data.jwt);
          this._tokenService.saveToken(data.jwt);
          // redirection to index page
          window.alert("Logged In Successfully");
          this._router.navigate(['/index']);
        }
        else {
          window.alert("Username/Password Incorrect");
          console.log('Error Occured');
        }
      },
      (error:string) => { console.log(error) }
    )

  }
}
