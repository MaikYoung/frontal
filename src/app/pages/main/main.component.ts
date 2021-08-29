import { NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  imagePath:number = undefined
  loadStyle:boolean = false
  reviewActive:number = 2
  constructor(
    
  ) { 
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

  changeReviewActive(action:string) {
    if(action == '++'){
      if(this.reviewActive == 3){
        return this.reviewActive = 1
      }
      this.reviewActive++
    }else if (action == '--'){
      if(this.reviewActive == 1){
        return this.reviewActive = 3
      }
      this.reviewActive--
    }else{
      this.reviewActive = 2
    }
  }
  
  

}
