import {TestBed} from '@angular/core/testing';

import {DeliveryBackendService} from './delivery-backend.service';

describe('DeliveryBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliveryBackendService = TestBed.get(DeliveryBackendService);
    expect(service).toBeTruthy();
  });
});
