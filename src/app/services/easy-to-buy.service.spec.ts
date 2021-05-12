import { TestBed } from '@angular/core/testing';

import { EasyToBuyService } from './easy-to-buy.service';

describe('EasyToBuyService', () => {
  let service: EasyToBuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyToBuyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
