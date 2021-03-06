import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VentaReembolsoComponent } from './venta-reembolso.component';

describe('VentaReembolsoComponent', () => {
  let component: VentaReembolsoComponent;
  let fixture: ComponentFixture<VentaReembolsoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaReembolsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaReembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
