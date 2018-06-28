import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { SmartService } from '../../../services';

/**
 * Displays the Time left for the Access Token in context.
 * Shows the Refresh Token button, if there is a refresh_token in the Token Response from the FHIR server.
 */
@Component({
  selector: 'app-access-token-timer',
  templateUrl: './access-token-timer.component.html',
  styleUrls: ['./access-token-timer.component.css']
})
export class AccessTokenTimerComponent implements OnInit, OnDestroy {

  /**
   * Access Token validity time displayed in seconds
   */
  timeLeft: Number;

  /**
   * Async Observable used to identify is a user is logged in.
   */
  isLoggedIn$: Observable<boolean>;

  /**
   * Flag used to identify, if there is a refresh_token in the Token Response from the FHIR Server.
   */
  canRefresh: boolean;

  private _unsubscribe = new Subject<void>();

  constructor(private _authService: AuthService, private _smartService: SmartService, private _router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this._authService.isLoggedIn;

    if (this._smartService.getRefreshToken()) {
      this.canRefresh = true;
    }

    this._smartService.getTimeLeft()
      .takeUntil(this._unsubscribe)
      .subscribe(timeLeft => {
        if (this._smartService.getRefreshToken()) {
          this.canRefresh = true;
        }
        this.timeLeft = timeLeft;
      });
  }

  /**
   * Called by the Refresh Token button, which initiates the OAuth2.0 Refresh token workflow.
   */
  refreshAccessToken() {
    this._smartService.refreshAccessToken();
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
