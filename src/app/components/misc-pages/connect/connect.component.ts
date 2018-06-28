import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ClientAppService, FhirServerService, GlobalService } from '../../../services';

/**
 * Component which displays the Server and Client Application information which the user is going to connect to.
 * Allows the user to select the scopes to be requested during the OAuth2.0 workflow.
 */
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit, OnDestroy {
  app: any;
  server: any;
  scopes: any;
  accessType = 'online_access';
  additionalScopes = '';

  private _unsubscribe = new Subject<void>();

  constructor(private _clientAppService: ClientAppService,
    private _fhirServerService: FhirServerService,
    private _route: ActivatedRoute,
    private _globalService: GlobalService) { }

  ngOnInit() {
    this._clientAppService.getAllClientApps()
      .takeUntil(this._unsubscribe)
      .subscribe(apps => {
        const uniqueName = this._route.snapshot.paramMap.get('uniqueName');
        // Get the app based on the route parameter
        this.app = apps.find(q => q.uniqueName === uniqueName);
        const scopesString: string = this.app.scopes;
        const scopesArray = scopesString.split(',');
        const scopes = scopesArray.map(scope => {
          return { value: scope.trim(), checked: true };
        });
        // Add the default scopes requried for a patient standalone launch
        scopes.push({ value: 'launch/patient', checked: true });
        scopes.push({ value: 'openid', checked: true });
        scopes.push({ value: 'profile', checked: true });
        this.scopes = scopes;
        const serverUniqueName = this.app.server;
        this._fhirServerService.getServer(serverUniqueName)
          .takeUntil(this._unsubscribe)
          .subscribe(server => {
            this.server = server;
          });
      });
  }

  /**
   * Method called by the Connect button.
   * Initiates the OAuth2.0 Authorization workflow passing the scopes selected.
   * Makes use of the FHIR.oauth.authorize method in SMART JS Client library.
   */
  connect() {
    let selectedScopes = this.scopes.filter(q => q.checked === true).map(v => v.value).join(' ');
    if (this.server.supportsAccessTypes === true) {
      selectedScopes = selectedScopes + ' ' + this.accessType;
    }
    if (this.additionalScopes !== '') {
      selectedScopes = selectedScopes + ' ' + this.additionalScopes;
    }
    const clientSettings: FHIR.SMART.OAuth2ClientSettings = {
      client_id: this.app.clientId,
      scope: selectedScopes,
      redirect_uri: this.app.redirectUri,
      state: this.app.uniqueName,
    };
    if (this.app.secret) {
      clientSettings.secret = this.app.secret;
    }
    const oauth2Configuration: FHIR.SMART.OAuth2Configuration = {
      client: clientSettings,
      server: this.server.baseUrl
    };
    FHIR.oauth2.authorize(oauth2Configuration, (authError) => {
      this._globalService.setError(authError);
    });
  }

  /**
   * Method called by the Toggle All button, which toggles all the scopes checkboxes
   */
  toggleAll() {
    this.scopes.forEach(element => {
      element.checked = !element.checked;
    });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
