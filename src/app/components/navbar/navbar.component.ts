import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  dropOpen:boolean=false
  constructor() { }

  ngOnInit() {
  }

  showDropMenu(){
    return this.dropOpen = (!this.dropOpen) ? true : false
  }
}
