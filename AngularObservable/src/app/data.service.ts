import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  //dataEmitter = new EventEmitter();
  dataEmitter = new Subject<string>();
  emitData(data:any){
    this.dataEmitter.next(data);
  }
}
