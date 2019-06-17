import { TestBed } from '@angular/core/testing';

import { BuyTicketListService } from './buy-ticket-list.service';

describe('BuyTicketListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyTicketListService = TestBed.get(BuyTicketListService);
    expect(service).toBeTruthy();
  });
});
