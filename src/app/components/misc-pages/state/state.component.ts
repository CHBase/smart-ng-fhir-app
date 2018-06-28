import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SmartService } from '../../../services';

/**
 * Component which displays the current stat of the SMART Client Application
 * Client
 * Server
 * Authorization Provider
 */
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit, OnDestroy {

  public state: any;

  private _unsubscribe = new Subject<void>();

  constructor(private _zone: NgZone, private _smartService: SmartService) { }

  ngOnInit() {
    this._smartService.getClient()
      .takeUntil(this._unsubscribe)
      .subscribe(smartClient => {
        this._zone.run(() => {
          this.state = smartClient.state;
        });
      });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
