import { Injectable } from '@angular/core';
import { PostOutline } from '../model/PostOutline';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { param } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class PostOutlineService {

  private trendsUrl = 'assets/static/trendingposts.json';
  private recentsUrl = 'assets/static/recentposts.json';
  private postsrowscount = 'assets/static/postoutlinerows.json';
  PostOutlineObj: PostOutline[];
  params = new HttpParams();



  constructor(private http: HttpClient) { }

  getTrendingPosts(): Observable<PostOutline[]> {
    return this.http.get<PostOutline[]>(this.trendsUrl);
  }

  getRecentPosts(): Observable<PostOutline[]> {
    return this.http.get<PostOutline[]>(this.recentsUrl, { 'params': this.params });
  }

  getPostsRowsCountDB(): Observable<number> {
    return this.http.get<number>(this.postsrowscount);
  }

  setRecentPostsOffset(offset: string) {
    if (this.params.has('offset')) {
      this.params.delete('offset');
      this.params.append('offset', offset);
    }
    this.params = this.params.set("offset", offset);
  }

  // http://localhost:8080/blogapp/gettrendposts
  // http://localhost:8080/blogapp/getrecentposts
  // http://localhost:8080/blogapp/getoutlinerowscount

}