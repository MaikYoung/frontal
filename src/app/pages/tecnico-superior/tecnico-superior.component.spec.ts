import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoSuperiorComponent } from './tecnico-superior.component';

describe('TecnicoSuperiorComponent', () => {
  let component: TecnicoSuperiorComponent;
  let fixture: ComponentFixture<TecnicoSuperiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoSuperiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
