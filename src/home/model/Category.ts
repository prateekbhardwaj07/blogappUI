import { Timestamp } from "rxjs";
import { BaseEntity } from './BaseEntity';

export class Category extends BaseEntity{
    cid:number;
    category_name:string;
    created_on:number;
    keywords:object;

    constructor(message:object,cid:number,category_name:string,created_on:number,keywords:object){
        super(message);
        this.cid = cid;
        this.category_name = category_name;
        this.created_on = created_on;
        this.keywords = keywords;
    }
}