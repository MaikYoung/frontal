import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PoliticaCookiesComponent } from './politica-cookies.component';

describe('PoliticaCookiesComponent', () => {
  let component: PoliticaCookiesComponent;
  let fixture: ComponentFixture<PoliticaCookiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaCookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
