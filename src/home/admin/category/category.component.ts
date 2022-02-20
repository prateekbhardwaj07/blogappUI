import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../model/Category';
import { AdminService } from "../../services/admin.service";
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['/src/home/home.component.css','./category.component.css']
})
export class CategoryComponent implements OnInit {

  hideForm = false;
  hideTable = false;
  action:string = "";
  categoryList:Category[];
  visibleCategories:Category[];
  faAngleDoubleDown = faAngleDoubleDown;
  length:number;
  isManage:boolean;

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
        this.getAllCategories();
      }
    });

    console.log('After Manage Function');
    
  }

  getAllCategories(){
    
    this._adminService.getCategories().subscribe(
      (data) => { this.categoryList = data,console.log(data) },
      (error) => { console.log('Error occurred with status',error.status) },
      () => { this.setVisibleValues(this.categoryList) }
    );
    
  }

  setVisibleValues(categories:Category[]){
    this.length = categories.length;
    console.log('Category List Length',length);
    if(this.length > 5){
      this.visibleCategories = categories.slice(0,5);
    }
    else{
      this.visibleCategories = categories.slice(0,this.length);
    }

  }

  onCategorySubmit(categoryForm:NgForm){
    
    this._adminService.setCategoryParams(categoryForm.controls["category_name"].value,categoryForm.controls["keywords"].value,Date.now());
    
    this._adminService.createCategory().subscribe(
      (data) => {console.log(data)},
      (error) => {console.log(error.status)}
    );
    
  }

  loadMoreCategories(){
    
    if(this.length > this.visibleCategories.length){
      this.visibleCategories = this.categoryList.slice(0,this.length);
    }
    else{
      console.log("Already Reached Last");
    }

  }

  
}
