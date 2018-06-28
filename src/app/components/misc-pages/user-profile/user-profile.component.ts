import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { SmartService, HelperService } from '../../../services';

/**
 * Component used to display the User Profile by parsing the JWT token provided in id_tokent
 */
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  /**
   * Parsed id_token JWT object
   */
  public userProfile: any;

  private _unsubscribe = new Subject<void>();

  constructor(private _zone: NgZone, private _smartService: SmartService, private _helperService: HelperService) { }

  /**
   * Read and parse the id_token, if it does exist in the tokenResponse obtained during the OAuth2.0 authorization workflow.
   */
  ngOnInit() {
    this._smartService.getClient()
      .takeUntil(this._unsubscribe)
      .subscribe(smartClient => {
        this._zone.run(() => {
          if (smartClient && smartClient.tokenResponse && smartClient.tokenResponse.id_token) {
            const id_token = smartClient.tokenResponse.id_token;
            this.userProfile = this._helperService.parseJwt(id_token);
          }
        });
      });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
