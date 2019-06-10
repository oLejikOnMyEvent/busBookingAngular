import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusHistoryComponent } from './bus-history.component';

describe('BusHistoryComponent', () => {
  let component: BusHistoryComponent;
  let fixture: ComponentFixture<BusHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
