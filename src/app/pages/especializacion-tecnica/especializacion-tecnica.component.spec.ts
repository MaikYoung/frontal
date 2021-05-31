import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializacionTecnicaComponent } from './especializacion-tecnica.component';

describe('EspecializacionTecnicaComponent', () => {
  let component: EspecializacionTecnicaComponent;
  let fixture: ComponentFixture<EspecializacionTecnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecializacionTecnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializacionTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
