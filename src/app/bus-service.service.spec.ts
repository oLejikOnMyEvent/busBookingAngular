import { TestBed } from '@angular/core/testing';

import { BusServiceService } from './bus-service.service';

describe('BusServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusServiceService = TestBed.get(BusServiceService);
    expect(service).toBeTruthy();
  });
});
