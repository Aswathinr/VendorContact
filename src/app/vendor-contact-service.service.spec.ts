import { TestBed } from '@angular/core/testing';

import { VendorContactServiceService } from './vendor-contact-service.service';

describe('VendorContactServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorContactServiceService = TestBed.get(VendorContactServiceService);
    expect(service).toBeTruthy();
  });
});
