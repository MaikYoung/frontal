import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {
  show:string = '' 

  constructor() { }

  ngOnInit() {
    this.show = 'bio'
    
  }

  public setShowValue(val:string){
    this.show = val
  }

  public changeActiveClass(val:string) {
    return { 'selected': this.show === val }
  }

}
