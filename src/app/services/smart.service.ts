declare var jwt: any;
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { GlobalService } from './global.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { timer } from 'rxjs/observable/timer';
import { HelperService } from './helper.service';

/**
 * Service which encapsulates the SMART on FHIR JS client and exposes methods to get an instance of the SMART Client
 * and perform API operations it.
 */
@Injectable({
  providedIn: 'root'
})
export class SmartService {

  /**
   * Cached copy of the SMART client
   */
  private _smartClient: any = null;
  private _smartClientSubject = new ReplaySubject<any>(1);

  /**
   * Cached copy of the Server Conformance(Capability statement)
   */
  private _conformance: any = null;
  private _conformanceSubject = new ReplaySubject<any>(1);

  /**
   * Cached copy of the Current AccessToken
   */
  private _accessToken: any;
  private _accessTokenValidityLeft = new ReplaySubject<Number>(1);

  /**
   * Flag used to identify, whether there is already an FHIR request to fetch the capability statment in progress.
   */
  private _conformanceRequestInProgress: boolean;

  constructor(private _globalService: GlobalService, private _http: HttpClient, private _helperService: HelperService) { }

  /**
   * The callback function which is called when a SMART client is ready to be used by the client application.
   * THe SMART on FHIR JS client library FHIR.oauth2.ready() method will take care of
   * 1. fetching the access_token if the OAuth2.0 authorization flow is progress
   * 2. Intitialize the SMART Client with the current state of the application
   * (Client application configuration, Server configuration, Access Token, Scopes etc)
   */
  oauth2ReadyCallback = (smartClient: FHIR.SMART.SMARTClient) => {
    if (!this._smartClient) {
      this._smartClient = smartClient;
      this._smartClientSubject.next(smartClient);
    }
  }

  /**
   * The callback function called when a SMART client is not initialized correctly
   */
  oauth2ReadyErrback = (error: any) => {
    // this._globalService.setError({ error: error });
  }

  /**
   * @returns {Observable<FHIR.SMART.SMARTClient>} Get a SMART on FHIR client using which the application can perform API calls
   *  and retrive state information.
   */
  public getClient(): Observable<FHIR.SMART.SMARTClient> {
    FHIR.oauth2.ready(this.oauth2ReadyCallback, this.oauth2ReadyErrback);
    return this._smartClientSubject.asObservable();
  }


  /**
   * Method to reset the cached SMART client cached in the service.
   * eg. When the refresh token workflow is completed
   */
  public resetClient() {
    this._smartClientSubject = new ReplaySubject<any>(0);
    this._smartClient = null;
  }

  /**
   * Callback method called once a SMART client is initialized. (Used by the getConformance method)
   * Used only if for some reason, the SMART Client was not initialized when the getConformance method is called.
   */
  private _oauth2ReadyCallbackConformance = (smartClient: FHIR.SMART.SMARTClient) => {
    this._conformanceRequestInProgress = true;
    this._smartClient.api.conformance({}).then(response => {
      this._conformance = response.data;
      this._conformanceRequestInProgress = false;
      this._conformanceSubject.next(response.data);
    });
  }

  /**
   * Method to get the Capability statement of the SMART on FHIR in context
   */
  public getConformance(): Observable<any> {
    // If there is a request which is already in progress, we will avoid duplicate requests
    if (!this._conformanceRequestInProgress) {
      this._conformanceRequestInProgress = true;
      // If its already cached, use that
      if (!this._conformance && this._smartClient) {
        this._smartClient.api.conformance({}).then(response => {
          this._conformance = response.data;
          this._conformanceRequestInProgress = false;
          this._conformanceSubject.next(response.data);
        });
      }
      // If cache is empty and the SMART client is not initialized
      if (!this._conformance && !this._smartClient) {
        FHIR.oauth2.ready(this._oauth2ReadyCallbackConformance, this.oauth2ReadyErrback);
      }
    }
    return this._conformanceSubject.asObservable();
  }


  /**
   * Method which makes the OAuth2.0 refresh_token call and updates the access token in context.
   * @param smartClient SMART Client in context
   */
  private _refreshAccessToken(smartClient: FHIR.SMART.SMARTClient): any {
    const token_uri = smartClient.state.provider.oauth2.token_uri;
    const headers: any = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json, text/javascript, */*;'
    };
    if (smartClient.state.client.secret) {
      const authHeader = 'Basic ' + btoa(smartClient.state.client.client_id + ':' + smartClient.state.client.secret);
      headers['Authorization'] = authHeader;
    }
    const httpHeaders: HttpHeaders = new HttpHeaders(headers);
    const httpOptions = {
      headers: httpHeaders,
      withCredentials: true
    };
    const refresh_token = this.getRefreshToken();
    const params: any = {
      'grant_type': 'refresh_token',
      'refresh_token': refresh_token
    };
    const bodyParams = Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');

    // Calling the Token endpoint to get the refresh token using the Angular HttpClient, since the SMART on FHIR JS client
    // does not provide a method
    this._http.post<any>(token_uri, bodyParams, httpOptions).subscribe(response => {
      const existingTokenRespsonse = smartClient.tokenResponse;
      existingTokenRespsonse.access_token = response.access_token;
      existingTokenRespsonse.refresh_token = response.refresh_token;
      // The new tokenResponse is updated in the SessionStorage. The SMART on FHIR JS client makes use of this.
      sessionStorage.setItem('tokenResponse', JSON.stringify(existingTokenRespsonse));
      this.resetClient();
    }, error => {
      this._globalService.setError({ error: error });
    });
  }

  /**
   * Callback method used if the SMART Client is not initialized and the SMART OAuth ready method is called
   */
  oauth2ReadyCallbackRefreshToken = (smartClient: FHIR.SMART.SMARTClient) => {
    this._refreshAccessToken(smartClient);
  }


  /**
   * Method to initiate an OAuth2.0 Refresh Token call
   */
  public refreshAccessToken() {
    if (!this._smartClient) {
      FHIR.oauth2.ready(this.oauth2ReadyCallbackRefreshToken, this.oauth2ReadyErrback);
    } else {
      this._refreshAccessToken(this._smartClient);
    }
  }

  /**
   * Get the refresh_token from the Token Response, if it exists
   */
  getRefreshToken() {
    const tokenResponse = sessionStorage.getItem('tokenResponse');
    if (tokenResponse) {
      const token = JSON.parse(tokenResponse);
      if (token.refresh_token) {
        return token.refresh_token;
      }
    }
  }

  /**
   * Method to find the AccessToken Expiry
   * @returns {Observable<Number>} Number of seconds left for the access token to expire
   */
  getTimeLeft(): Observable<Number> {
    // Makes use of the Observable timer to check every second if the token has expired and notifies the subscriber.
    const timerObservable = timer(0, 1000);
    timerObservable.subscribe(x => {
      const tokenResponse = sessionStorage.getItem('tokenResponse');
      if (tokenResponse) {
        const tokenResponseJson = JSON.parse(tokenResponse);
        if (tokenResponseJson) {
          const payloadCheck = this.parseJwt(tokenResponseJson.access_token);
          const timeLeft = payloadCheck['exp'] - Math.floor(Date.now() / 1000);
          this._accessTokenValidityLeft.next(timeLeft);
        } else {
          this._accessTokenValidityLeft.next(0);
        }
      } else {
        this._accessTokenValidityLeft.next(0);
      }
    });
    return this._accessTokenValidityLeft.asObservable();
  }

  parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  }
}
