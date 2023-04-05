import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {}

  products:any= [
   {id:1 , name:'Dell xps', price: '$1200', color: 'silver' ,Availability : 'Available', image:'/assets/images/Dell-Laptop.jpg'},
   {id:2 , name:'Smart Watch', price: '$500', color: 'Rose gold' ,Availability : 'Not Available', image:'/assets/images/smart-watch.jpg'},
   {id:3 , name:'Smart phone- iphone', price: '$1700', color: 'Red' ,Availability : 'Available', image:'/assets/images/iphone.jpg'},
   {id:4 , name:'Samsung Galaxy', price: '$1500', color: 'Black' ,Availability : 'Not Available', image:'/assets/images/samsung-galaxy.jpg'},
   {id:5 , name:'Apple Desktop', price: '$1000', color: 'silver' ,Availability : 'Available', image:'/assets/images/apple-desktop.jpg'},
  ]

}
