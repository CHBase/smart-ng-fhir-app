import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

/**
 * Service which acts as Global Event Bus
 * Only use to set the error object from various components.
 */
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _error = new ReplaySubject<any>(1);

  constructor(private _route: ActivatedRoute) { }

  /**
   * Method to publish that an application wide error has occured.
   * @param error Error object
   */
  setError(error: any) {
    this._error.next(error);
  }

  /**
   * Get the last error published anywhere in the application via setError method
   * Subscribed in the AppComponent and an Error Modal screen is shown when ever an error occurs.
   */
  public getError(): Observable<any> {
    return this._error.asObservable();
  }
}
