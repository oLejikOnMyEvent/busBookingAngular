import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBusToComponent } from './search-bus-to.component';

describe('SearchBusToComponent', () => {
  let component: SearchBusToComponent;
  let fixture: ComponentFixture<SearchBusToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBusToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBusToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
