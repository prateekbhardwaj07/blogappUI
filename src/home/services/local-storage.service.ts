import { Inject, Injectable } from '@angular/core';
import { faThinkPeaks } from '@fortawesome/free-brands-svg-icons';
import { LOCAL_STORAGE,StorageService } from 'ngx-webstorage-service';

export const STORAGE_KEY = 'local_Arr';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  updateLocalArr = [];
  constructor(@Inject(LOCAL_STORAGE) private storage:StorageService) { }

  public storeOnLocalStorage(toAddItem:string):boolean{
    //get current local stored array
    const currentLocalArr = this.storage.get(STORAGE_KEY)||[];
    if(currentLocalArr.length>1){
      currentLocalArr.splice(0,currentLocalArr.length);
    }
    //push new item in array
    currentLocalArr.push(toAddItem);

    //insert update array to local storage
    this.storage.set(STORAGE_KEY,currentLocalArr);


    console.log(this.storage.get(STORAGE_KEY)||'Local Storage Empty');

    return (this.storage.get(STORAGE_KEY) == undefined)?false:true;
  }

  public getArrayfromLocal():string{
    let localArr = this.storage.get(STORAGE_KEY);
    if(localArr != undefined && localArr.length > 0){
     return localArr[localArr.length-1]; 
    }
    return "";
  }
  public deleteOnSessionEnd():void{
    this.storage.clear();
  }
}
