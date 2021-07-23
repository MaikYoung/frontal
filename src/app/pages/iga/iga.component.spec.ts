import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IgaComponent } from './iga.component';

describe('IgaComponent', () => {
  let component: IgaComponent;
  let fixture: ComponentFixture<IgaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
