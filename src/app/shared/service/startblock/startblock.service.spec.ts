import {TestBed} from '@angular/core/testing';

import {StartblockService} from './startblock.service';

describe('StartblockService', () => {
  let service: StartblockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartblockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
