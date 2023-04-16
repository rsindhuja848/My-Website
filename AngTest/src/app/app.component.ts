import { Component, ViewChild } from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){}
  title = 'AngTest';
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  
  navigateTo(){
   this.router.navigate(['./input-output']);
  }
  
  goToLogin(){
    this.router.navigate(['./login']);
  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
