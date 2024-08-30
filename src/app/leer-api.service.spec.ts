import { TestBed } from '@angular/core/testing';

import { LeerApiService } from './leer-api.service';

describe('LeerApiService', () => {
  let service: LeerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
