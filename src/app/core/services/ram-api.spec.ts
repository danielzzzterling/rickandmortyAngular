import { TestBed } from '@angular/core/testing';

import { RamApi } from './ram-api';

describe('RamApi', () => {
  let service: RamApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
