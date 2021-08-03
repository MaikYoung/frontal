import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  imagePath:any = []
  imageObj:any = {}

  constructor() { 
    this.imageObj = [
      [0, "/assets/images/carousel-2.jpg"], 
      [1, "/assets/images/carousel-1.jpg"], 
      [2, "/assets/images/carousel-3.jpg"], 
    ]
    
    this.randomImage()
  }

  ngOnInit() {
   setInterval(() => {
     this.randomImage()
   }, 4000)
  }

  public randomImage() {
    if(this.imagePath[0] === 0) {
      this.imagePath = this.imageObj[1]
    }else if(this.imagePath[0] === 1){
      this.imagePath = this.imageObj[2]
    }else{
      this.imagePath = this.imageObj[0]
    }
  }

  
  

}
