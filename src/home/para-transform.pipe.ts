import { Pipe,PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Pipe({
    name:'ParaTransform'
})

export class ParaTransform implements PipeTransform{
    constructor(private _sanitizer:DomSanitizer){

    }
    transform(value:string){
        var returnVal:string = '';
        var parser = new DOMParser();
        var paras = Array.from(parser.parseFromString(value,"text/html").getElementsByTagName('P') as HTMLCollectionOf<HTMLElement>);
        console.log(paras.length);
        for(let i=0;i<paras.length;i++){
            if(paras[i].tagName == 'P'){
                console.log(paras[i].innerHTML);
                paras[i].setAttribute('class','fetched');
            }
        } 
    }
}