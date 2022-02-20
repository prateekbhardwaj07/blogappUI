import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostOutline } from 'src/home/model/PostOutline';
import { AdminService } from "../../services/admin.service";
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['/src/home/home.component.css','../category/category.component.css']
})
export class PostsComponent implements OnInit {

  faAngleDoubleDown = faAngleDoubleDown;
  hideForm = false;
  hideTable = false;
  action:string = "";
  postImage:File;
  postsList:PostOutline[];
  visiblePosts:PostOutline[];
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
        this.getAllPosts();
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
      (error)=>{console.log(error.status)},
      ()=>{console.log('Complete')}
    );
    
  }

  onfileselect(event:any){
    if(event.target.files.length>0){
      var file = event.target.files[0];
      this.postImage = file;
      console.log(this.postImage.name);
    }
  }

  getAllPosts(){
    
    this._adminService.getPosts().subscribe(
      (data) => { this.postsList = data,console.log(data) },
      (error) => { console.log('Error occurred with status',error.status) },
      () => { this.setVisibleValues(this.postsList) }
    );
    
  }

  setVisibleValues(posts:PostOutline[]){
    this.length = posts.length;
    console.log('Posts List Length',length);
    if(this.length > 5){
      this.visiblePosts = posts.slice(0,5);
    }
    else{
      this.visiblePosts = posts.slice(0,this.length);
    }
    console.log(this.visiblePosts.length);
  }

  loadMorePosts(){
    if(this.length > this.visiblePosts.length){
      this.visiblePosts = this.postsList.slice(0,this.length);
    }
    else{
      console.log("Already Reached Last");
    }
  }
}
