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
    return this.id = (this.id == undefined) ? this.id = id : this.id = id
  }

  public openProgram(id:number) {
    return this.idProgram = (this.idProgram == undefined) ? this.idProgram = id : this.idProgram = id
  }

}
