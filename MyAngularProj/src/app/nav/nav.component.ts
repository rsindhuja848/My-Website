import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {}

  title: string = 'eShopping'

}
