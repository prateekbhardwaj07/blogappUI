import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { User, usertypes } from '../../model/User';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['/src/home/home.component.css','../category/category.component.css']
})
export class UserComponent implements OnInit {

  hideForm = false;
  hideTable = false;
  action:string = "";
  users:User[];
  faAngleDoubleDown = faAngleDoubleDown;
  usersList:User[];
  visibleusers:User[];
  length:number;

  constructor(private _Activatedroute:ActivatedRoute,private _adminService:AdminService){
  }

  ngOnInit(): void {
    $(document).ready(function (){
      $('.navsidebar .list_edit div').on('click',function(){
          console.log("clicked me");
      		$(this).toggleClass('bigeditdiv');
      		$(this).children('.nested_actions').toggle(10);
        });
    });

    this._Activatedroute.paramMap.subscribe(params => {
      this.action = params.get("id");
      if(this.action === "create") {
        this.hideForm = false;
        this.hideTable = true;
      }
      else if ( this.action === "manage"){
        this.hideTable = false;
        this.hideForm = true;
        this.getAllUsers();
      }
    });
    console.log(this.action+" "+this.hideForm+" "+this.hideTable);
  }

  onUserSubmit(userForm:NgForm){
    var username:string = userForm.controls['user_name'].value;
    var password:string = userForm.controls['password'].value;
    var user_role:string = userForm.controls['user_type'].value;
    var role_id:number = Object.keys(usertypes).indexOf(user_role);
    var interests:string = userForm.controls['interests'].value;
    var userJsonObject:JSON = <JSON><any>{
      'username':username,
      'email':'',
      'password':password,
      'role_id':role_id+1,
      'interests':interests,
      'arr_time':new Date().getTime(),
      'is_subscribed':false
    };

    this._adminService.createUser(userJsonObject).subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error.status)},
      ()=>{console.log('Completed')}
    );
    
  }

  getAllUsers(){
    
    this._adminService.getUsers().subscribe(
      (data) => { this.usersList = data,console.log(data) },
      (error) => { console.log('Error occurred with status',error.status) },
      () => { this.setVisibleValues(this.usersList) }
    );
    
  }

  setVisibleValues(users:User[]){
    this.length = users.length;
    console.log('Category List Length',length);
    if(this.length > 5){
      this.visibleusers = users.slice(0,5);
    }
    else{
      this.visibleusers = users.slice(0,this.length);
    }

  }

  loadMoreUser(){
    if(this.length > this.visibleusers.length){
      this.visibleusers = this.usersList.slice(0,this.length);
    }
    else{
      console.log("Already Reached Last");
    }
  }
}


