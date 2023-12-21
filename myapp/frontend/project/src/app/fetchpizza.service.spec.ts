import { TestBed } from '@angular/core/testing';

import { FetchpizzaService } from './fetchpizza.service';

describe('FetchpizzaService', () => {
  let service: FetchpizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchpizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
