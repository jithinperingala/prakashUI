import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterialPurchaseComponent } from './meterial-purchase.component';

describe('MeterialPurchaseComponent', () => {
  let component: MeterialPurchaseComponent;
  let fixture: ComponentFixture<MeterialPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterialPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterialPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
