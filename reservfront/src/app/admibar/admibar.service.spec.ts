import { TestBed } from '@angular/core/testing';

import { AdmibarService } from './admibar.service';

describe('AdmibarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmibarService = TestBed.get(AdmibarService);
    expect(service).toBeTruthy();
  });
});
