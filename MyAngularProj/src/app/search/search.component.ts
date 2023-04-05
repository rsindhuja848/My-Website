import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {}

  searchValue: string = ""

  getSearchvalue(event:any){
    console.log(event.target.value);
    this.searchValue = event.target.value;
  }
  
}
