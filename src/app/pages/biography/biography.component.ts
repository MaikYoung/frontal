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
    console.log("entrando", this.show);
    
  }

  public setShowValue(val:string){
    this.show = val
    console.log(this.show);
    
  }

}
