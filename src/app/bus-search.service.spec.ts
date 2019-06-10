import { TestBed } from '@angular/core/testing';

import { BusSearchService } from './bus-search.service';

describe('BusSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusSearchService = TestBed.get(BusSearchService);
    expect(service).toBeTruthy();
  });
});
