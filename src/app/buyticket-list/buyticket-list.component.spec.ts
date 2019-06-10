import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyticketListComponent } from './buyticket-list.component';

describe('BuyticketListComponent', () => {
  let component: BuyticketListComponent;
  let fixture: ComponentFixture<BuyticketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyticketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyticketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
