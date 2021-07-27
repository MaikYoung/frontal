import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  imagePath:string = ""
  imageObj:any = {}

  constructor() { 
    this.imageObj = ["/assets/images/carousel-1.jpg", "/assets/images/carousel-2.jpg", "/assets/images/carousel-3.jpg", ]
    this.randomImage()
  }

  ngOnInit() {
   setInterval(() => {
     this.randomImage()
   }, 4000)
  }

  public randomImage() {
    this.imagePath = this.imageObj[Math.floor(Math.random() * this.imageObj.length)]
    
    
  }

  
  

}
