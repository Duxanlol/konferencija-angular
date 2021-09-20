import { TestBed } from '@angular/core/testing';

import { NavbarMessagingService } from './navbar-messaging.service';

describe('NavbarMessagingService', () => {
  let service: NavbarMessagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarMessagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
