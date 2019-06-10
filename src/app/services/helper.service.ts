import { Injectable } from '@angular/core';

/**
 * Service containing the helper methods
 * Check if the resource is supported by the server, if the user has scope to a particular resource etc
 */
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  /**
   * Method to parse the capability statement and retrive the search parameters of a particular resource type.
   * @param conformance Capability statement of the SMART on FHIR server
   * @param resourceType Type of FHIR resource
   * @returns {any[]} The list of search parameters
   */
  public searchParamsSupported(conformance: any, resourceType: string): any[] {
    if (conformance && conformance.rest
      && conformance.rest.length > 0 && conformance.rest[0].resource
      && conformance.rest[0].resource.length > 0
      && resourceType) {
      const resourceTypeConformance = conformance.rest[0].resource.find(q => q.type === resourceType);
      if (resourceTypeConformance && resourceTypeConformance.searchParam && resourceTypeConformance.searchParam.length > 0) {
        return resourceTypeConformance.searchParam;
      }
    }
    return [];
  }

  /**
   * Get the list of resource types that the current user has scopes and ther server supports.
   * @param conformance Capability statement of the SMART on FHIR server
   * @param scopes Scopes available for the current user
   * @param interaction The operation we are try to check eg. read, create, update, delete
   * @returns {any[]} List of resource types supported.
   */
  public resourcesSupported(conformance: any, scopes: string, interaction: string): any[] {
    if (conformance && conformance.rest
      && conformance.rest.length > 0 && conformance.rest[0].resource
      && conformance.rest[0].resource.length > 0) {
      return conformance.rest[0].resource
        .filter(q => (q.interaction && q.interaction.findIndex(x => x.code === interaction) !== -1))
        .map(y => y.type)
        .filter(q => {
          if (scopes) {
            return scopes.toLowerCase().indexOf(q.toLowerCase() + '.' + interaction) !== -1 ||
              scopes.toLowerCase().indexOf(q.toLowerCase() + '.*') !== -1 ||
              scopes.toLowerCase().indexOf('patient/*.*') !== -1;
          } else {
            return true;
          }
        });
    }
    return [];
  }

  /**
   * Check if the logged in user has the required scope along with the server capability to perform the specific operation
   * for a specific type of FHIR resource.
   * @param conformance Capability statement of the SMART on FHIR server
   * @param scopes Scopes available for the current user
   * @param interaction The operation we are try to check eg. read, create, update, delete
   * @param resourceType The type of FHIR resource
   * @returns {boolean} Has support or not
   */
  public hasSupport(conformance: any, scopes: string, resourceType: string, interaction: string): boolean {
    const resourcesSupported = this.resourcesSupported(conformance, scopes, interaction);
    return resourcesSupported.findIndex(q => q === resourceType) !== -1;
  }

  /**
   * Easy method to deep clone an object
   * @param obj Object to be cloned
   */
  public clone(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  /**
   * Helper method to find how many seconds until the passed data from now.
   * @param date The date we need to find the duration till
   */
  public howLong(date: Date): Number {
    const currentDate = new Date();
    const dif = date.getTime() - currentDate.getTime();
    const seconds = Math.round(dif / 1000);
    return seconds;
  }

  /**
   * Helper method to parse JWT
   * @param {string} token JWT
   * @returns {any} Object
   */
  public parseJwt(token): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  /**
   * Helper function to check if a target object has any keys from the src object
   * @param target
   * @param src 
   */
  public hasIntersectingKeys(target: any, src: any): boolean {
    if (target === {} || src === {})
    {
      return false;
    }

    for(let srcKey in src)
    {
      if (target.hasOwnProperty(srcKey))
      {
        return true;
      }
    }

    return false;
  }
}


