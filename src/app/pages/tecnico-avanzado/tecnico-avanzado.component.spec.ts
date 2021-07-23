import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TecnicoAvanzadoComponent } from './tecnico-avanzado.component';

describe('TecnicoAvanzadoComponent', () => {
  let component: TecnicoAvanzadoComponent;
  let fixture: ComponentFixture<TecnicoAvanzadoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoAvanzadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoAvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
