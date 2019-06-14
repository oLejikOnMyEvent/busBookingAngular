import { TestBed } from '@angular/core/testing';

import { BusFlightService } from './bus-flight.service';

describe('BusFlightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusFlightService = TestBed.get(BusFlightService);
    expect(service).toBeTruthy();
  });
});
