import { TestBed } from '@angular/core/testing';

import { CartitemdataService } from './cartitemdata.service';

describe('CartitemdataService', () => {
  let service: CartitemdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartitemdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
