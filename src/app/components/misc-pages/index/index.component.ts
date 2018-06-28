import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ClientAppService, FhirServerService } from '../../../services';

/**
 * Component which acts as the landing page for this Sample application, which lists all the servers and clients configured.
 */
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {

  public standalonePatientApps: any[] = [];
  public ehrLaunchApps: any[] = [];
  public servers: any[];

  private _unsubscribe = new Subject<void>();

  constructor(
    private _clientAppService: ClientAppService,
    private _fhirServerService: FhirServerService,
    private _router: Router) { }

  /**
   * Gets all the FHIR servers and Client apps configured and lists them for the users to connect.
   */
  ngOnInit() {
    this._clientAppService.getStandalonePatientApps()
      .takeUntil(this._unsubscribe)
      .subscribe(apps => {
        this.standalonePatientApps = apps;
      });

    this._fhirServerService.getAllServers()
      .takeUntil(this._unsubscribe)
      .subscribe(servers => {
        this.servers = servers;
      });

    this._clientAppService.getEhrLaunchApps()
      .takeUntil(this._unsubscribe)
      .subscribe(apps => {
        this.ehrLaunchApps = apps;
      });
  }

  /**
   * Redirects the user to the Connect page
   * @param uniqueName Unique Name of a defined SMART on FHIR server
   */
  connect(uniqueName: string) {
    this._router.navigate(['/connect/' + uniqueName]);
  }

  /**
   * Method used to bind the information on the component
   * @param uniqueName Unique Name of a defined SMART on FHIR Server
   */
  server(uniqueName: string) {
    return this.servers.find(q => q.uniqueName === uniqueName);
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

}
