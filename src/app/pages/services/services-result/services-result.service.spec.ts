import { TestBed } from '@angular/core/testing';

import { ServicesResultService } from './services-result.service';

describe('ServicesResultService', () => {
  let service: ServicesResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
