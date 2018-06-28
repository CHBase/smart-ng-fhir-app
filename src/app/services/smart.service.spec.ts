import { TestBed, inject } from '@angular/core/testing';

import { SmartService } from './smart.service';

describe('SmartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartService]
    });
  });

  it('should be created', inject([SmartService], (service: SmartService) => {
    expect(service).toBeTruthy();
  }));
});
