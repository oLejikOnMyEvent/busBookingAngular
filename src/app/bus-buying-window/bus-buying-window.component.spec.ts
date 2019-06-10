import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBuyingWindowComponent } from './bus-buying-window.component';

describe('BusBuyingWindowComponent', () => {
  let component: BusBuyingWindowComponent;
  let fixture: ComponentFixture<BusBuyingWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusBuyingWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusBuyingWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
