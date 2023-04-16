import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component{
  @Output() outValue = new EventEmitter();
  value: string | undefined;


OnValueChanged(){
  this.outValue.emit(this.value);
}
  
 
   
}
