import { formatDate } from '@angular/common';

export class PostOutline {

    message:string;
    heading:string;
    author:string;
    relatedtxt:string;
    created_tm:number;
    imagesrc:string;

    constructor(message:string,heading:string,author:string,relatedtxt:string,created_tm:number,imagesrc:string){
        this.message = message;
        this.heading = heading;
        this.author = author;
        this.relatedtxt = relatedtxt;
        this.created_tm = created_tm;
        this.imagesrc = imagesrc;

    }

} 