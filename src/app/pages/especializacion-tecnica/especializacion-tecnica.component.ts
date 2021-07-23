import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especializacion-tecnica',
  templateUrl: './especializacion-tecnica.component.html',
  styleUrls: ['./especializacion-tecnica.component.scss']
})
export class EspecializacionTecnicaComponent implements OnInit {
  public id:number = undefined
  constructor() { }

  ngOnInit() {
  }

  public openFaqs(id:number) {
    return this.id = (this.id == undefined) ? this.id = id : this.id = undefined
  }

}
