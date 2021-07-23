import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EspecializacionTecnicaComponent } from './especializacion-tecnica.component';

describe('EspecializacionTecnicaComponent', () => {
  let component: EspecializacionTecnicaComponent;
  let fixture: ComponentFixture<EspecializacionTecnicaComponent>;

  beforeEach(waitForAsync(() => {
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
