import { TestBed } from '@angular/core/testing';

import { ExternalConfigurationServiceService } from './external-configuration-service.service';

describe('ExternalConfigurationServiceService', () => {
  let service: ExternalConfigurationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalConfigurationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
