import { Injectable } from '@angular/core';
import { PostContent } from '../model/PostContent';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostContentService {

  private contentByID = 'assets/static/postcontentbypostid.json';
  PostContentObj:PostContent;
  params = new HttpParams();

  constructor(private http:HttpClient) { }

  getPostContent():Observable<PostContent>{
    return this.http.get<PostContent>(this.contentByID,{'params':this.params});
  }
  
  setPostContentPostID(post_id: string) {
    if (this.params.has('post_id')) {
      this.params.delete('post_id');
      this.params.append('post_id', post_id);
    }
    this.params = this.params.set('post_id', post_id);
  }

}
//http://localhost:8080/blogapp/getpostcontentbyid