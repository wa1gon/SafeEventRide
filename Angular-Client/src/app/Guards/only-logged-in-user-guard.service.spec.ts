/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OnlyLoggedInUserGuard.serviceService } from './only-logged-in-user-guard.service';

describe('Service: OnlyLoggedInUserGuard.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyLoggedInUserGuard.serviceService]
    });
  });

  it('should ...', inject([OnlyLoggedInUserGuard.serviceService], (service: OnlyLoggedInUserGuard.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
