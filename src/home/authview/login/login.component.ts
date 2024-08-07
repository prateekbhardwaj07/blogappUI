import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
    var outcomeMsg:string = 'Success';
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
