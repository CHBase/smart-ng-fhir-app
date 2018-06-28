import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FHIR_SERVERS } from '../data/fhir-servers';
import { FhirServer } from '../models/fhir-server';

/**
 * Service to get the SMART on FHIR servers defined.
 * The same sample application can be configured to work against different configured SMART on FHIR servers.
 * For this sample app, we are making using of a hardcoded array defined in fhir-servers.ts
 */
@Injectable({
  providedIn: 'root'
})
export class FhirServerService {

  constructor() { }

  /**
   * Fetch the SMART on FHIR server by the unique name defined
   * @param {string} uniqueName Unique name of the SMART on FHIR Server
   * @returns {Observable<FhirServer>} Observable to the FhirServer based on the uniqueName
   */
  getServer(uniqueName: string): Observable<FhirServer> {
    return Observable.create(observer => {
      observer.next(FHIR_SERVERS.find(q => q.uniqueName === uniqueName));
      observer.complete();
    });
  }


  /**
   * Fetch all the SMART on FHIR servers defined
   */
  getAllServers(): Observable<any[]> {
    return Observable.create(observer => {
      observer.next(FHIR_SERVERS);
      observer.complete();
    });
  }
}
