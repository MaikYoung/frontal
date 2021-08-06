import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  imagePath:number = undefined
  loadStyle:boolean = false
  constructor() { 
    this.randomImage()
  }

  ngOnInit() {
   setInterval(() => {
     this.randomImage()
   }, 5000)
  }

  randomImage() {
    this.loadStyle = false
    if(this.imagePath == 0){
      this.imagePath = 1
    }else if(this.imagePath == 1){
      this.imagePath = 2
    }else{
      this.imagePath = 0
    }
    setInterval(() => {
      this.loadStyle = true
    }, 0.1);
  }

  
  

}
