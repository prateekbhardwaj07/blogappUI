import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { PostContentService } from '../services/post-content.service';
import { PostContent } from '../model/PostContent';
import { Router, ActivatedRoute  } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['/src/home/home.component.css', './single.component.css']
})


export class SingleComponent implements OnInit {

  public content:PostContent;
  post_id:string;
  browserRefresh:boolean;
  isLoaded:boolean = false;

  constructor(private _postcontentservice: PostContentService,private localStorage:LocalStorageService,private router:Router,private route:ActivatedRoute) {
    
  }

  ngOnInit(): void {
    console.log(this.localStorage.getArrayfromLocal());
    this.post_id = (history.state.post_id != undefined)?history.state.post_id:this.localStorage.getArrayfromLocal();
    console.log('PostID',this.post_id);
    if(this.post_id != undefined){
      this._postcontentservice.setPostContentPostID(this.post_id);
      this.localStorage.storeOnLocalStorage(this.post_id);
      this._postcontentservice.getPostContent().subscribe(
        (data)=>{ this.content=data,console.log(this.post_id)},
        (error)=>{ console.log(error.status)},
        () => {this.isLoaded = true}
      )
    }
    
  }

  ngAfterViewInit():void{
    var div:HTMLElement = document.getElementById('para_content');
    if(this.isLoaded){
      var paras = Array.from(div.getElementsByTagName('P') as HTMLCollectionOf<HTMLElement>);
      for(var i = 0;i<paras.length;i++){
        if(paras[i].tagName !== 'BR'){
          paras[i].style.margin = '0px';
          paras[i].style.padding ='1px';
          paras[i].style.width = '95%';
        }
      }
    }
    
  }


  /* Timestamp to Date Format  */
	processDate(date: number): string {
		var formattedDate = formatDate(date, 'mediumDate', 'en-US');
		return formattedDate;
	}



}
    // this.router.events
    //   .pipe(
    //     filter(event => event instanceof NavigationEnd)
    //   )
    //   .subscribe((event: NavigationEnd) => {
    //     console.log('Got the Event URL as ', event.url);
    //     if(event.urlAfterRedirects.includes('project')) {
    //       console.log('Url after redirect',event.urlAfterRedirects.toString());
    //     }
    //   });
        // this._postcontentservie.getPostContent().subscribe(
    //   data => {this.content = data},
    //   error => {console.log('Error Occurred',error.status)}
    // )

