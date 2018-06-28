import { TestBed, inject } from '@angular/core/testing';

import { FhirServerService } from './fhir-server.service';

describe('FhirServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FhirServerService]
    });
  });

  it('should be created', inject([FhirServerService], (service: FhirServerService) => {
    expect(service).toBeTruthy();
  }));
});
