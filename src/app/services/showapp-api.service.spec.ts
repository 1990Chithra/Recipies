import { TestBed } from '@angular/core/testing';

import { ShowappApiService } from './showapp-api.service';

describe('ShowappApiService', () => {
  let service: ShowappApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowappApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
