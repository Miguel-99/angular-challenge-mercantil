import { TestBed } from '@angular/core/testing';

import { GeoRefArService } from './geo-ref-ar.service';

describe('GeoRefArService', () => {
  let service: GeoRefArService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoRefArService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
