import { TestBed } from '@angular/core/testing';

import { AdmirService } from './admir.service';

describe('AdmirService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmirService = TestBed.get(AdmirService);
    expect(service).toBeTruthy();
  });
});
