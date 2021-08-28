import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnico-superior',
  templateUrl: './tecnico-superior.component.html',
  styleUrls: ['./tecnico-superior.component.scss']
})
export class TecnicoSuperiorComponent implements OnInit {
  public id:number=undefined
  public idProgram:number=undefined
  constructor() { }

  ngOnInit() {
  }

  public openFaqs(id:number) {
    if(this.id == undefined){
      this.id = id
    }else if (this.id == id) {
      this.id = undefined
    }else{
      this.id = id
    }
  }

  public openProgram(id:number) {
    if(this.idProgram == undefined){
      this.idProgram = id
    }else if (this.idProgram == id) {
      this.idProgram = undefined
    }else{
      this.idProgram = id
    }
  }

}
