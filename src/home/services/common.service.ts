import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { BaseEntity } from '../model/BaseEntity';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private subscribeMailUrl = 'http://localhost:8080/blogapp/subscribeUserEmail';
  private contactUsFormUrl = 'http://localhost:8080/blogapp/contactus'

  constructor(private http: HttpClient) { }

  subscribeMail(Email:string):Observable<BaseEntity>{
    const headers = {'content-type':'application/json'};
    const body = {"email":Email};
    return this.http.post<BaseEntity>(this.subscribeMailUrl,body,{'headers':headers});
  }

  contactUsForm(Message:string,UserID:number){
    const headers = {'content-type':'application/json'};
    var object = {"message": Message,"user_id":UserID.toString()}
    const body = JSON.stringify(object);
    return this.http.post(this.subscribeMailUrl,body,{'headers':headers});
  }

}
