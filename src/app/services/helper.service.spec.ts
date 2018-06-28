import { TestBed, inject } from '@angular/core/testing';

import { HelperService } from './helper.service';

describe('HelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelperService]
    });
  });

  it('should be created', inject([HelperService], (service: HelperService) => {
    expect(service).toBeTruthy();
  }));
});
