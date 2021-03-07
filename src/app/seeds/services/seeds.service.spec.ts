import { TestBed } from '@angular/core/testing';

import { SeedsService } from '../services/seeds.service';

describe('SeedsService', () => {
  let service: SeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
