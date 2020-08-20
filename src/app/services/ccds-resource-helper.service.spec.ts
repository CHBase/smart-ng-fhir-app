import { TestBed, inject } from '@angular/core/testing';
import { CCDSResourceHelperService } from './ccds-resource-helper.service';


describe('CCDSResourceHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CCDSResourceHelperService]
    });
  });

  it('should be created', inject([CCDSResourceHelperService], (service: CCDSResourceHelperService) => {
    expect(service).toBeTruthy();
  }));
});
