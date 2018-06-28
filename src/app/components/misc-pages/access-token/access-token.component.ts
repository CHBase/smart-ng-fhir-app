import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, SmartService } from '../../../services';
import { Subject } from 'rxjs/internal/Subject';

/**
 * Component used to display the Current Token Response provided by the SMART Client api.
 */
@Component({
  selector: 'app-access-token',
  templateUrl: './access-token.component.html',
  styleUrls: ['./access-token.component.css']
})
export class AccessTokenComponent implements OnInit, OnDestroy {

  /**
   * Token response obtained during the SMART OAuth2.0 authorization workflow.
   */
  public tokenResponse: any;

  private _unsubscribe = new Subject<void>();

  constructor(private _zone: NgZone, private _smartService: SmartService) { }

  ngOnInit() {
    this._smartService.getClient()
      .takeUntil(this._unsubscribe)
      .subscribe(smartClient => {
        this._zone.run(() => {
          this.tokenResponse = smartClient.tokenResponse;
        });
      });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
