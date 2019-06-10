import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusFlightComponent } from './bus-flight.component';

describe('BusFlightComponent', () => {
  let component: BusFlightComponent;
  let fixture: ComponentFixture<BusFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
