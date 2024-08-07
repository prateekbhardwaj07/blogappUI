import { Injectable } from '@angular/core';
import { PostContent } from '../model/PostContent';
import { IPostContent } from '../model/IPostContent';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostContentService {

  private contentByID = 'http://localhost:8080/getpostcontent';
  PostContentObj:PostContent;
  params = new HttpParams();

  constructor(private http:HttpClient) { }

  getPostContent():Observable<PostContent>{
    return this.http.get<PostContent>(this.contentByID,{'params':this.params});
  }
  getIPostContent():Observable<IPostContent[]>{
    return this.http.get<IPostContent[]>(this.contentByID,{'params':this.params}).pipe(delay(1000));
  }
  
  setPostContentPostID(post_id: string) {
    if (this.params.get('post_id')!=undefined) {
      this.params = this.params.delete('post_id');
      this.params = this.params.append('post_id', post_id);
    }
    else{
      this.params = this.params.set('post_id', post_id);
    }
    console.log(this.params.get('post_id'));
  }

}
//http://localhost:8080/blogapp/getpostcontent