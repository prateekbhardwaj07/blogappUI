import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['/src/home/home.component.css','../category/category.component.css']
})
export class UserComponent implements OnInit {

  hideForm = false;
  hideTable = false;
  action:string = "";

  constructor(private _Activatedroute:ActivatedRoute){
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
}
