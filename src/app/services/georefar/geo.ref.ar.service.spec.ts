import { TestBed } from '@angular/core/testing';

import { Geo.Ref.ArService } from './geo.ref.ar.service';

describe('Geo.Ref.ArService', () => {
  let service: Geo.Ref.ArService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Geo.Ref.ArService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
