import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, map, of } from 'rxjs';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService){
  }
  
  title = 'AngularObservable';
// First Method of creating Observable
  // myObservable = new Observable((observer) => {
  //    console.log("Inside a Observable");
  //    setTimeout(() => {
  //     observer.next("1");
  //    }, 1000);
  //    setTimeout(() => {
  //     observer.next("2");
  //    }, 2000);
  //    setTimeout(() => {
  //     observer.next("3");
  //    }, 3000);
  //    setTimeout(() => {
  //     observer.error(new Error("Something went wrong"));
  //    }, 4000);
  //    setTimeout(() => {
  //     observer.next("4");
  //    }, 4000);
  //    setTimeout(() => {
  //     observer.complete();
  //    }, 5000);
  //   //  observer.next("2");
  //   //  observer.next("3");
  //   //  observer.next("4");
  // });

  // second Method to create observable but depreceted

  // myObservable = Observable.create((observer) =>{

  // });

  // Create using operator

  array1 = [1,2,3,4,5,6,7];
  array2 = ['A','B','C','D','E'];
 // myObservable = of(this.array1,this.array2,20,'Hello')
 //of accepts variable number of arguments , returns the complete array


 //from operator iterates over array and returns one value at a time, accepts only one argument

 myObservable = from(this.array1).pipe(map((val) => {
  return val * 5;
 }),filter((val) => val >= 30));

//  transObs=this.myObservable.pipe(map((val)=>{
//      return val * 5;
//  }))

//  filterObs= this.transObs.pipe(filter((val)=>{
//     return val >= 30
//  }))

  ngOnInit(): void {
    this.myObservable.subscribe((data)=>{
      console.log(data);
    }, (err)=>{
      alert(err.message);
    },() => {
      alert("observable completed the signal");
    }
    )
  }
}
