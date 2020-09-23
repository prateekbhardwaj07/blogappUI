import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editblogs',
  templateUrl: './editblogs.component.html',
  styleUrls: ['/src/home/home.component.css','./editblogs.component.css']
})
export class EditblogsComponent implements OnInit {

  hideAddDiv = false;
  hidePrevDiv = false;
  action:string = "";

  constructor(private _Activatedroute:ActivatedRoute){
      
  }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.action = params.get("action");
      if(this.action === "addblog") {
        this.hideAddDiv = false;
        this.hidePrevDiv = true;
      }
      else if ( this.action === "prevblog"){
        this.hidePrevDiv = false;
        this.hideAddDiv = true;
      }
    });
    console.log(this.action+" "+this.hideAddDiv+" "+this.hidePrevDiv);
  }

}
