import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SmartService } from '../../../services';

/**
 * Component which displays the Capability Statement of the SMART on FHIR connected to.
 */
@Component({
  selector: 'app-conformance',
  templateUrl: './conformance.component.html',
  styleUrls: ['./conformance.component.css']
})
export class ConformanceComponent implements OnInit, OnDestroy {

  /**
   * Capability statement of the SMART on FHIR Server
   */
  public conformance: any = {};
  public error: any;

  private _unsubscribe = new Subject<void>();

  constructor(private _zone: NgZone, private _smartService: SmartService) { }

  ngOnInit() {
    this._smartService.getClient()
      .takeUntil(this._unsubscribe)
      .subscribe(smartClient => {
        // Makes a FHIR API call to the '/metadata' endpoint to get the CapabilityStatement
        this._smartService.getConformance()
          .takeUntil(this._unsubscribe)
          .subscribe(conformance => {
            this._zone.run(() => {
              this.conformance = conformance;
            });
          });
      });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
