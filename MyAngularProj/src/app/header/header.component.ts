import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  slogan : string='Shop and Save';
  source : string= "/assets/shopping.jpg";
  constructor(){}
  ngOnInit(): void {
  }
}
