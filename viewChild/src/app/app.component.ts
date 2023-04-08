import { Component, ViewChild,ElementRef} from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewChild';
  @ViewChild('dobInput')
  dateOfBirth!: ElementRef<any>;
  @ViewChild('ageInput')
  age!: ElementRef<any>;
  @ViewChild('DemoComponent' , {static: true}) demoComp! : DemoComponent;
  
  calculateAge(){
    let birthYear= new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
    let currentYear= new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
    
  }
}
