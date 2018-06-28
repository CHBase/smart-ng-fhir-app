import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CLIENT_APPS } from '../data/client-apps';
import { ClientApp } from '../models/client-app';

/**
 * Service to get the SMART on FHIR client applications defined against different servers.
 * The same sample application can be configured to work against different configured SMART on FHIR servers.
 * For this sample app, we are making using of a hardcoded array defined in client-app.ts
 */
@Injectable({
  providedIn: 'root'
})
export class ClientAppService {

  private _ehrLanchAppsSubject: BehaviorSubject<ClientApp[]> =
    new BehaviorSubject<ClientApp[]>(CLIENT_APPS.filter(q => q.ehrLaunch === true));

  private _allClientAppSubject: BehaviorSubject<ClientApp[]> =
    new BehaviorSubject<ClientApp[]>(CLIENT_APPS);

  constructor() { }

  /**
   * Get all the SMART on FHIR client applications configured, which can act as a standalone patient facing application.
   */
  getStandalonePatientApps(): Observable<ClientApp[]> {
    return Observable.create(observer => {
      observer.next(CLIENT_APPS.filter(q => q.standalonePatient === true));
      observer.complete();
    });
  }

   /**
   * Get all the SMART on FHIR client applications configured, which can be launch from an EHR system.
   */
  getEhrLaunchApps(): Observable<ClientApp[]> {
    return Observable.create(observer => {
      observer.next(CLIENT_APPS.filter(q => q.ehrLaunch === true));
      observer.complete();
    });
  }

  /**
   * Get all the SMART on FHIR client applications configured for this sample application.
   */
  getAllClientApps(): Observable<ClientApp[]> {
    return Observable.create(observer => {
      observer.next(CLIENT_APPS);
      observer.complete();
    });
  }
}
