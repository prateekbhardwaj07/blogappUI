import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from "../../services/admin.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['/src/home/home.component.css','../category/category.component.css']
})
export class PostsComponent implements OnInit {


  hideForm = false;
  hideTable = false;
  action:string = "";
  postImage:File;

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

  onPostDataSubmit(postForm:NgForm){
    var formdata = new FormData();
    formdata.append('postHeading',postForm.controls['post_heading'].value);
    formdata.append('postAuthor',postForm.controls['author'].value);
    formdata.append('postContent',postForm.controls['post_content'].value);
    formdata.append('postImage',this.postImage);
    formdata.append('category_name',postForm.controls['category_name'].value);

    this._adminService.createPost(formdata).subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error.status)}
    );
    
  }

  onfileselect(event:any){
    if(event.target.files.length>0){
      var file = event.target.files[0];
      file = this.postImage;
    }
  }

}
