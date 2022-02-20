import { formatDate } from '@angular/common';
import { BaseEntity } from './BaseEntity';

export class PostContent extends BaseEntity{
    pid:number;
    heading:string;
    author:string;
    content:string;
    imagesrc:string;
    created_tm:number;
    category_id:number;

    constructor(message:object,pid:number,heading:string,author:string,content:string,imagesrc:string,created_tm:number,category_id:number){
        super(message);
        this.pid = pid;
        this.heading = heading;
        this.author = author;
        this.content = content;
        this.imagesrc = imagesrc;
        this.created_tm = created_tm;
        this.category_id = category_id;

    }

} 