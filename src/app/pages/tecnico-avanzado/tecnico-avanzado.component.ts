import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnico-avanzado',
  templateUrl: './tecnico-avanzado.component.html',
  styleUrls: ['./tecnico-avanzado.component.scss']
})
export class TecnicoAvanzadoComponent implements OnInit {
  public id:number = undefined
  constructor() { }

  ngOnInit() {
  }

  public openFaqs(id:number) {
    return this.id = (this.id == undefined) ? this.id = id : this.id = undefined
  }

}
