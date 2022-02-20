import { formatDate } from '@angular/common';
import { post } from 'jquery';
import { BaseEntity } from './BaseEntity';

export class PostOutline extends BaseEntity {
    pid:number;
    heading:string;
    author:string;
    relatedtxt:string;
    created_tm:number;
    imagesrc:string;

    constructor(message:object,pid:number,heading:string,author:string,relatedtxt:string,created_tm:number,imagesrc:string){
        super(message);
        this.pid = pid;
        this.heading = heading;
        this.author = author;
        this.relatedtxt = relatedtxt;
        this.created_tm = created_tm;
        this.imagesrc = imagesrc;

    }

} 