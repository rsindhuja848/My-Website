import { Component, Input, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
constructor(){}
valueEntered : any; 
ngOnInit() : void{
}

textValue(value:any){
 this.valueEntered = value;
}
  
}
