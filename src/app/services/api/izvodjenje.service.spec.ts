import { TestBed } from '@angular/core/testing';

import { IzvodjenjeService } from './izvodjenje.service';

describe('IzvodjenjeService', () => {
  let service: IzvodjenjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IzvodjenjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
