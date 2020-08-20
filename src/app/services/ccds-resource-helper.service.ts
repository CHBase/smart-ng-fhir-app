import { Injectable } from '@angular/core';
import { CCDS_RESOURCE_MAPPING } from '../data/ccds-resources';

/**
 * Service containing the CCDS-Resource mapping helper methods
 */
@Injectable({
  providedIn: 'root'
})
export class CCDSResourceHelperService {

  constructor() { }


  /**
   * Helper fn to get the CCDS types that can be supported by this system based 
   * on the supportedResources parsed from the Capability Statement.
   * @param supportedResources An array of supported resources parsed from the capability statement.
   */
  public getSupportedCCDSResources(supportedResources: any[]){
    return CCDS_RESOURCE_MAPPING.filter((ccdsMapping) => {
      return supportedResources.some((resource) => {
        return resource.toLowerCase() === ccdsMapping.FhirResource.toLowerCase();
      }) 
    });
  }

  /**
   * Get the CCDSResource item from it's name.
   * @param CCDSResourceName The name of the CCDS type as defined in the CCDS-Resource-Mapping data file.
   */
  public getCCDSResourceFromName(CCDSResourceName: string)
  {
    return CCDS_RESOURCE_MAPPING.find((ccdsmapping) => {
        return ccdsmapping.CCDSType.toLowerCase() === CCDSResourceName.toLowerCase();
    });
  }
}
