import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import { Router } from '@angular/router';
import { faUserCircle, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { PostOutline } from '../model/PostOutline';
import { PostOutlineService } from '../services/post-outline.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['/src/home/home.component.css','./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  faUserCircle = faUserCircle;
  faCalender = faCalendar;
  faAngleDoubleDown = faAngleDoubleDown;
  category_name:string;
  postoutlineArr:PostOutline[];
  visiblePosts:PostOutline[];
  flag:number = 0;
  
  constructor(private router:Router,private _postoutlineService:PostOutlineService) { 
    this.category_name = String(this.router.getCurrentNavigation().extras.state.category_name);
    console.log(this.category_name);
  }

  ngOnInit(): void {
    
    this._postoutlineService.setCategoryNameParam(this.category_name);
    this._postoutlineService.getCategoryPosts().subscribe(
      (data)=>{ this.postoutlineArr=data,console.log(data) },
      (error)=>{ console.log(error.status) },
      () =>{ this.setPostsInVisibleArr(this.postoutlineArr) }
    )

  }

  setPostsInVisibleArr(posts:PostOutline[]){
    var length = posts.length;
    if(this.flag*7 < length)
    {
      if(length % 7 == 0 && length > 7){
        this.visiblePosts = posts.slice(this.flag*7,(this.flag+1)*7);
        this.flag++;
      }
      else if(length % 7 > 0 && length > 7){
        var rem:number = length % 7;
        if((this.flag*7) == (length-rem) ){
          this.visiblePosts = posts.slice(this.flag*7,this.flag*7+rem);
        } 
        else{
          this.visiblePosts = posts.slice(this.flag*7,(this.flag+1)*7);
        }
        this.flag++;
      }
      else{
        this.visiblePosts = posts.slice(0,length);
        this.flag++;
      }
    }
    console.log(this.visiblePosts);
  }

  loadMoreActicle(){
    this.setPostsInVisibleArr(this.postoutlineArr);
  }
}
