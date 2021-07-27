import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  dropOpen:boolean=false
  activ:string=''
  constructor() { }

  ngOnInit() {
    
  }

  showDropMenu(){
    return this.dropOpen = (!this.dropOpen) ? true : false
  }

  changeActiveMenu(val:string) {
    this.activ = val
  }
}
