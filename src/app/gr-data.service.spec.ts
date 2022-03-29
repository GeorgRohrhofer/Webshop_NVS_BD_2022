import { TestBed } from '@angular/core/testing';

import { GrDataService } from './gr-data.service';

describe('GrDataService', () => {
  let service: GrDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
