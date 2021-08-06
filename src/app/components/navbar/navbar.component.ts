import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  dropOpen:boolean=false
  dropCourse:boolean=false
  activ:string=''
  constructor() { }

  ngOnInit() {
  }

  mouseOverOut(val:boolean){
    return this.dropCourse = val
  }

  mouseOverOut2(val:boolean){
    return this.dropOpen = val
  }

  changeActiveMenu(val:string) {
    this.activ = val
  }
}
