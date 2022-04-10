import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleentryComponent } from './saleentry.component';

describe('SaleentryComponent', () => {
  let component: SaleentryComponent;
  let fixture: ComponentFixture<SaleentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
