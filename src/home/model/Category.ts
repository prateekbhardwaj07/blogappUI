import { Timestamp } from "rxjs";

export class Category{
    cid:number;
    category_name:string;
    created_on:number;
    keywords:string;

    constructor(cid:number,category_name:string,created_on:number,keywords:string){
        this.cid = cid;
        this.category_name = category_name;
        this.created_on = created_on;
        this.keywords = keywords;
    }
}