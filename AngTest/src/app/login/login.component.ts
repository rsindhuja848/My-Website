import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnChanges {
   loginForm: FormGroup;
   value: string;
   myObs:Observable<any>;

  ngOnInit(): void {
    this.http.get('https://myangproj-2b262-default-rtdb.firebaseio.com/data.json')
    .pipe((map(response => {
      const data=[];
      for(const key in response){
        if(response.hasOwnProperty(key))
        data.push({...response[key],id:key})
      }
      return data;
    }
    )))
    .subscribe((data) =>{
      console.log(data);
      this.myObs =of(data);
      this.getObsValue();
    })
  this.loginForm = new FormGroup({
    username: new FormControl('Hello', Validators.required),
    password: new FormControl('', Validators.required)
  });

  this.loginForm.valueChanges.subscribe(data => {
    this.value=data.username;
 });
    
}

getObsValue(){
  this.myObs.subscribe(value =>{
    console.log("value of observable", value);
  })
}

data=
[
{"name":"John", "age":30, "car":'Volvo'},
{"name":"Ragini", "age":20, "car":'Ferrari'},
{"name":"Peter", "age":31, "car":'Benz'},
]
ngOnChanges() {}
 

  constructor(private http:HttpClient) {}

  onSubmit() {
     this.http.post('https://myangproj-2b262-default-rtdb.firebaseio.com/data.json',this.data).subscribe((res) =>{
        console.log(res);
     })
  }
  setDefault(){
    this.loginForm.setValue({
      username: 'sindhuja',
      password: 'abc134'
    })
  }
}
