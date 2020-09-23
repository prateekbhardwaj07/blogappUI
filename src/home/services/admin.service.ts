import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { BaseEntity } from '../model/BaseEntity';
import { PostContent } from '../model/PostContent';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private createCtrgUrl = 'http://localhost:8080/blogapp/createCategoryDb';
  categoryParams:HttpParams;
  postcontent:PostContent;
  
  constructor(private http: HttpClient) { }

  createCategory():Observable<BaseEntity>{
    const headers = {'content-type':'application/json'};
    return this.http.post<BaseEntity>(this.createCtrgUrl,{'headers':headers,'params':this.categoryParams});
  }

  setCategoryParams(category_name:string,keywords:string,created_on:number){
    this.categoryParams = new HttpParams()
      .set('category_name',category_name)
      .set('keywords',keywords)
      .set('created_on',created_on.toString());
  }


  createPost(formdata:FormData):Observable<BaseEntity>{
    const headers = {'content-type':'multipart/form-data'};
    const body = formdata;
    return this.http.post<BaseEntity>(this.createCtrgUrl,body,{'headers':headers,});
  }
}
