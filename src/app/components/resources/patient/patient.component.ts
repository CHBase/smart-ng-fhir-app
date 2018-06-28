import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { SmartService } from '../../../services/smart.service';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit, OnDestroy {
  public patient: any;
  public error: any;

  private _unsubscribe = new Subject<void>();

  constructor(private _zone: NgZone, private _smartService: SmartService) { }

  /**
   * Fetch the Patient Resource based on the Patient in Context
   */
  ngOnInit() {
    this._smartService.getClient()
      .takeUntil(this._unsubscribe)
      .subscribe(smartClient => {
        const api: FHIR.SMART.Api = smartClient.api;
        const searchParams: FHIR.SMART.SearchParams = {
          type: 'Patient',
          patient: smartClient.patient.id,
        };
        // Makes use of the SMART on FHIR JS Client search api method
        api.search(searchParams).then(response => {
          this._zone.run(() => {
            this.patient = response.data;
            this.error = null;
          });
        }, error => {
          this._zone.run(() => {
            this.error = error;
          });
        });
      });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
