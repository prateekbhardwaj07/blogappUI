import { Injectable } from '@angular/core';
import { PostOutline } from '../model/PostOutline';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { param } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class PostOutlineService {

  private trendsUrl = 'http://localhost:8080/gettrendposts';
  private recentsUrl = 'http://localhost:8080/getrecentposts';
  private postsrowscount = 'http://localhost:8080/getoutlinerowscount';
  private categoryUrl = 'http://localhost:8080/getCategoryPosts';
  PostOutlineObj: PostOutline[];
  postParams = new HttpParams();
  categoryParams = new HttpParams();



  constructor(private http: HttpClient) { }

  getTrendingPosts(): Observable<PostOutline[]> {
    return this.http.get<PostOutline[]>(this.trendsUrl);
  }

  getRecentPosts(): Observable<PostOutline[]> {
    return this.http.get<PostOutline[]>(this.recentsUrl, { 'params': this.postParams });
  }

  getPostsRowsCountDB(): Observable<number> {
    return this.http.get<number>(this.postsrowscount);
  }

  getCategoryPosts(): Observable<PostOutline[]>{
    return this.http.get<PostOutline[]>(this.categoryUrl,{'params':this.categoryParams});
  }

  setRecentPostsOffset(offset: string) {
    if (this.postParams.has('offset')) {
      this.postParams.delete('offset');
      this.postParams.append('offset', offset);
    }
    this.postParams = this.postParams.set("offset", offset);
  }

  setCategoryNameParam(category_name:string){
    if (this.categoryParams.has('category_name')) {
      this.categoryParams.delete('category_name');
      this.categoryParams.append('category_name', category_name);
    }
    this.categoryParams = this.categoryParams.set('category_name', category_name);
  }


  // http://localhost:8080/blogapp/gettrendposts
  // http://localhost:8080/blogapp/getrecentposts
  // http://localhost:8080/blogapp/getoutlinerowscount

}