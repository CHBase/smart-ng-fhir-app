import { TestBed, inject } from '@angular/core/testing';

import { ClientAppService } from './client-app.service';

describe('ServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientAppService]
    });
  });

  it('should be created', inject([ClientAppService], (service: ClientAppService) => {
    expect(service).toBeTruthy();
  }));
});
