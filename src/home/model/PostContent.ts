import { formatDate } from '@angular/common';

export class PostContent {

    message:string;
    heading:string;
    author:string;
    content:string;
    imagesrc:string;
    created_tm:number;
    category_id:number;

    constructor(message:string,heading:string,author:string,content:string,imagesrc:string,created_tm:number,category_id:number){
        this.message = message;
        this.heading = heading;
        this.author = author;
        this.content = content;
        this.imagesrc = imagesrc;
        this.created_tm = created_tm;
        this.category_id = category_id;

    }

} 