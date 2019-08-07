import { TestBed } from '@angular/core/testing';

import { ReservabService } from './reservab.service';

describe('ReservabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservabService = TestBed.get(ReservabService);
    expect(service).toBeTruthy();
  });
});
