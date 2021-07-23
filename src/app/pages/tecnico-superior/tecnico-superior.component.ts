import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnico-superior',
  templateUrl: './tecnico-superior.component.html',
  styleUrls: ['./tecnico-superior.component.scss']
})
export class TecnicoSuperiorComponent implements OnInit {
  public id:number=undefined
  constructor() { }

  ngOnInit() {
  }

  public openFaqs(id:number) {
    return this.id = (this.id == undefined) ? this.id = id : this.id = undefined
  }

}
