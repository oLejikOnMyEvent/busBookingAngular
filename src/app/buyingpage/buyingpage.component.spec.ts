import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingpageComponent } from './buyingpage.component';

describe('BuyingpageComponent', () => {
  let component: BuyingpageComponent;
  let fixture: ComponentFixture<BuyingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
