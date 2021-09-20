import { TestBed } from '@angular/core/testing';

import { KonferencijeService } from './konferencije.service';

describe('KonferencijeService', () => {
  let service: KonferencijeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KonferencijeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
