
import { Observable, Subject } from 'rxjs';
import { Component, OnInit, NgZone, AfterViewChecked, DoCheck, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService, GlobalService, SmartService } from './services';
import { ErrorDialogComponent } from './components/common/error-dialog/error-dialog.component';

/**
 * Root Application Component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  /**
   * Async Observable used in the template to identify whether a user has logged in or not.
   */
  isLoggedIn$: Observable<boolean>;

  /**
   * Flag based on which the Switch Patient button is displayed on the Header
   * This is decided based on whether the current application scopes contains the scope 'launch/patient'
   */
  canSwitchPatient: boolean;

  /**
    * @ignore
    */
  private _unsubscribe = new Subject<void>();

  /**
   * SMART on FHIR Server the application is connected to.
   */
  connectedServer: string;

  logsHidden = true;
  initialized = false;
  constructor(
    private _zone: NgZone,
    private _router: Router,
    private _dialog: MatDialog,
    private _authService: AuthService,
    private _globalService: GlobalService,
    private _smartService: SmartService,
  ) { }

  ngOnInit(): void {
    // Ensure the components are destroyed and initialized again when the routes change
    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.isLoggedIn$ = this._authService.isLoggedIn;

    // Open the Common Error Dialog screen, whenever an error has been reported anywhere in the applciation
    this._globalService.getError()
      .takeUntil(this._unsubscribe)
      .subscribe(error => {
        if (error) {
          this._zone.run(() => {
            this.openErrorDialog(error);
          });
        }
      });

    // Determining if the application has the 'launch/patient' scope
    this.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn && !this.initialized) {
        this._smartService.getClient()
          .takeUntil(this._unsubscribe)
          .subscribe(smartClient => {
            this._zone.run(() => {
              this.initialized = true;
              this.canSwitchPatient = smartClient.state.client.scope.indexOf('launch/patient') !== -1;
              this.connectedServer = smartClient.state.server;
            });
          });
      }
    });
  }

  /**
   * Called by the Logout button on the header
   */
  logout() {
    this._authService.logout();
  }

  /**
   * Called by the Switch Patient button on the header
   */
  switchPatient() {
    this._authService.logout();
    this._smartService.getClient()
      .takeUntil(this._unsubscribe)
      .subscribe(smartClient => {
        this._zone.run(() => {
          // Initiates the OAuth2.0 workflow, so that the user can select another record.
          const oauth2Configuration = smartClient.state;
          FHIR.oauth2.authorize(oauth2Configuration);
        });
      });
  }

  openErrorDialog(error: any) {
    const dialogRef = this._dialog.open(ErrorDialogComponent, {
      minHeight: 700,
      minWidth: 800,
      data: { error: error }
    });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

}
