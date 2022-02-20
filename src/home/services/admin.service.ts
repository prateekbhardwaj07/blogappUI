import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { BaseEntity } from '../model/BaseEntity';
import { PostContent } from '../model/PostContent';
import { Category } from '../model/Category';
import { PostOutline } from '../model/PostOutline';
import { User } from '../model/User';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private signUpUserUrl = 'http://localhost:8080/processRegister'
  private loginUserUrl  = 'http://localhost:8080/processLogin';
  private createCtrgUrl = 'http://localhost:8080/createCategoryDb';
  private createPostUrl = 'http://localhost:8080/createPostDb';
  private createUserUrl = 'http://localhost:8080/createUserDb';
  private getAllPostUrl = 'assets/static/allpostoutlines.json';
  private getAllCtrgUrl = 'assets/static/allcategories.json';
  private getAllUserUrl = 'assets/static/allusers.json';

  categoryParams:HttpParams;
  userParams:HttpParams;
  postcontent:PostContent;
  
  constructor(private http: HttpClient){}

  registerUser(user:JSON):Observable<BaseEntity>{
    const headers = {'content-type':'application/json'};
    const body = JSON.stringify(user);
    return this.http.post<BaseEntity>(this.signUpUserUrl,body,{'headers':headers});
  }

  loginUser(user:JSON):Observable<any>{
    const headers = {'content-type':'application/json'};
    const body = JSON.stringify(user);
    return this.http.post<any>(this.loginUserUrl,body,{'headers':headers});
  }

  createCategory():Observable<BaseEntity>{
    const headers = {'content-type':'application/json'};
    return this.http.post<BaseEntity>(this.createCtrgUrl,{'headers':headers,'params':this.categoryParams});
  }

  createPost(formdata:FormData):Observable<BaseEntity>{
    const headers = {'content-type':'multipart/form-data'};
    const body = formdata;
    return this.http.post<BaseEntity>(this.createPostUrl,body,{'headers':headers});
  }

  createUser(user:JSON):Observable<BaseEntity>{
    const headers = {'content-type':'application/json'};
    const body = JSON.stringify(user);
    return this.http.post<BaseEntity>(this.createUserUrl,body,{'headers':headers});
  }

  getCategories():Observable<Category[]>{
    const headers = {'content-type':'application/json'};
    return this.http.get<Category[]>(this.getAllCtrgUrl,{'headers':headers});
  }

  getPosts():Observable<PostOutline[]>{
    const headers = {'content-type':'application/json'};
    return this.http.get<PostOutline[]>(this.getAllPostUrl,{'headers':headers});
  }

  getUsers():Observable<User[]>{
    const headers = {'content-type':'application/json'};
    return this.http.get<User[]>(this.getAllUserUrl,{'headers':headers});
  }

  setUserParams(username:string,password:string,role_id:number){
    this.userParams = new HttpParams()
        .set('username',username)
        .set('password',password)
        .set('role_id',role_id.toString());
  }
  setCategoryParams(category_name:string,keywords:string,created_on:number){
    this.categoryParams = new HttpParams()
      .set('category_name',category_name)
      .set('keywords',keywords)
      .set('created_on',created_on.toString());
  }

  convertInteresttoArray(interests:string):string[]{
    var interestArr:string[];
    if(interests.length > 0 && interests.search(/,/) >= 0){
      interestArr = interests.split(','); 
    }
    else if(interests.length == 0){
      interestArr = [' ']; 
    }
    else{
      interestArr = [interests];
    }
    return interestArr;
  }

}
