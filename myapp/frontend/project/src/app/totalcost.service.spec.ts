import { TestBed } from '@angular/core/testing';

import { TotalcostService } from './totalcost.service';

describe('TotalcostService', () => {
  let service: TotalcostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalcostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
