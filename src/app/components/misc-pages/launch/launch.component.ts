import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { ClientAppService, GlobalService, FhirServerService } from '../../../services';

/**
 * Component used by the route '/launch/{uniqueName}'
 * When registering the application on the server, the Launch URL should be pointing to this route
 * with the specific unique name for the client application
 */
@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit, OnDestroy {

  private _unsubscribe = new Subject<void>();

  constructor(
    private _clientAppService: ClientAppService,
    private _route: ActivatedRoute,
    private _globalService: GlobalService,
    private _fhirServerService: FhirServerService
  ) { }

  /**
   * Steps performed
   * 1. Identify the SMART on FHIR client application and server details based on the {uniqueName} route parameter.
   * 2. Call FHIR.oauth2.authorize() with the specific OAuth2 configuration of the identified application.
   */
  ngOnInit() {
    this._clientAppService.getAllClientApps()
      .takeUntil(this._unsubscribe)
      .subscribe(clientApps => {
        const uniqueName = this._route.snapshot.paramMap.get('uniqueName');
        const clientApp = clientApps.find(q => q.uniqueName === uniqueName);
        this._fhirServerService.getServer(clientApp.server)
          .takeUntil(this._unsubscribe)
          .subscribe(server => {
            const clientSettings: FHIR.SMART.OAuth2ClientSettings = {
              client_id: clientApp.clientId,
              // Adding the scopes launch openid and profile
              scope: clientApp.scopes + ' offline_access launch openid profile',
              redirect_uri: clientApp.redirectUri,
              state: uniqueName
            };
            // If the client application has a secret, adding it into the configuration
            if (clientApp.secret) {
              clientSettings.secret = clientApp.secret;
            }
            const oauth2Configuration: FHIR.SMART.OAuth2Configuration = {
              client: clientSettings,
              server: server.baseUrl
            };
            // The authorize method of the SMART on FHIR JS client, will take care of completing the OAuth2.0 Workflow
            FHIR.oauth2.authorize(oauth2Configuration, (authError) => {
              this._globalService.setError(authError);
            });
          });
      });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

}
