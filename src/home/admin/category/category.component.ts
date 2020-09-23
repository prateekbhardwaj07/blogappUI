import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../model/Category';
import { AdminService } from "../../services/admin.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['/src/home/home.component.css','./category.component.css']
})
export class CategoryComponent implements OnInit {

  hideForm = false;
  hideTable = false;
  action:string = "";
  category:Category;

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
      }
    });
    console.log(this.action+" "+this.hideForm+" "+this.hideTable);

  }

  onCategorySubmit(categoryForm:NgForm){
    
    this._adminService.setCategoryParams(categoryForm.controls["category_name"].value,categoryForm.controls["keywords"].value,Date.now());
    
    /* Post Call for Category Creation */
    this._adminService.createCategory().subscribe(
      (data) => {console.log(data)},
      (error) => {console.log(error.status)}
    );
    
  }


  
}
