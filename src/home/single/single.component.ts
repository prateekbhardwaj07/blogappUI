import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { PostContentService } from '../services/post-content.service';
import { PostContent } from '../model/PostContent';
import { FacebookService, InitParams } from 'ngx-facebook';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['/src/home/home.component.css', './single.component.css']
})
export class SingleComponent implements OnInit {

  public content:PostContent;
  post_id:string;

  constructor(private _postcontentservie: PostContentService,private router:Router, private activatedRoute:ActivatedRoute) {
    this.post_id = String(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit(): void {

    this._postcontentservie.setPostContentPostID(this.post_id);

    this._postcontentservie.getPostContent().subscribe(
      data => {this.content = data},
      error => {console.log('Error Occurred',error.status)}
    )

  }

  ngAfterViewInit():void{
    var div:HTMLElement = document.getElementById('para_content');
    var paras = Array.from(div.getElementsByTagName('P') as HTMLCollectionOf<HTMLElement>);
    for(var i = 0;i<paras.length;i++){
      if(paras[i].tagName !== 'BR'){
        paras[i].style.margin = '0px';
        paras[i].style.padding ='1px';
        paras[i].style.width = '95%';
      }
    }
  }

  /* Timestamp to Date Format  */
	processDate(date: number): string {
		var formattedDate = formatDate(date, 'mediumDate', 'en-US');
		return formattedDate;
	}


}
