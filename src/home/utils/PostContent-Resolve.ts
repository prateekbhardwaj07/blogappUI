import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";  
import { Observable } from "rxjs";
import { PostContentService } from '../services/post-content.service';
import { IPostContent } from '../model/IPostContent';

@Injectable()
export class PostContentResolve implements Resolve<IPostContent[]>{
    constructor(private postcontentService:PostContentService){

    }
    resolve(route:ActivatedRouteSnapshot):Observable<IPostContent[]>{
        return this.postcontentService.getIPostContent();
    }
}