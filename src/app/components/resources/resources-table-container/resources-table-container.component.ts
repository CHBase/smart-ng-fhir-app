import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HelperService } from '../../../services/helper.service';
import { SmartService } from '../../../services/smart.service';
import { Subscription, Subject } from 'rxjs';

/**
 * Component which fetches the FHIR resources based on the route parameter FHIR resource type
 * Option to specify the query object
 * Filter lists all the Search parameters supported by the FHIR server for this resource type
 */
@Component({
  selector: 'app-resources-table-container',
  templateUrl: './resources-table-container.component.html',
  styleUrls: ['./resources-table-container.component.css']
})
export class ResourcesTableContainerComponent implements OnInit, OnDestroy {

  /**
   * FHIR Resource Type to be fetched
   */
  resourceType: string;

  /**
   * List of resources fetched from the FHIR server based on the query object
   */
  resources: any;

  /**
   * Query object passed to the SMART JS Client Search api.
   */
  query: any;

  /**
   * Search Parameters supported by the FHIR Server for this particular FHIR Resource Type
   */
  searchParams: any;

  /**
   * Error occured while trying to fetch the resource
   */
  error: any;

  /**
   * Flag to show that a request to fetch FHIR resources are in progress. Used by the Loading indicator.
   */
  isLoading: boolean;

  private _unsubscribe = new Subject<void>();

  constructor(
    private _helperService: HelperService,
    private _route: ActivatedRoute,
    private _zone: NgZone,
    private _smartService: SmartService
  ) { }

  /**
   * List the Supported Search parameters in the filter and performs the search based on the FHIR Resource type
   * and the patient in context.
   */
  ngOnInit() {
    this._route.params.subscribe(val => {
      this.resourceType = this._route.snapshot.paramMap.get('resourceType');
      this._smartService.getClient()
        .takeUntil(this._unsubscribe)
        .subscribe(smartClient => {
          this._setSupportedSearchParams(smartClient);
          this._searchByPatientId(smartClient);
        });
    });
  }

  /**
   * Set the search parameters supported by the resource type in the filter by parsing the Capability statement of the FHIR Server
   * @param smartClient Initialized SMART Client
   */
  private _setSupportedSearchParams(smartClient: FHIR.SMART.SMARTClient) {
    this._smartService.getConformance()
      .takeUntil(this._unsubscribe)
      .subscribe(conformance => {
        this._zone.run(() => {
          this.searchParams = this._helperService.searchParamsSupported(conformance, this.resourceType);
        });
      });
  }

  /**
   * Perform the FHIR API Search call based on the resource type and the patient in context
   * @param smartClient Initialized SMART Client
   */
  private _searchByPatientId(smartClient: FHIR.SMART.SMARTClient) {
    this.query = {
      patient: smartClient.patient.id
    };
    this._search(smartClient);
  }

  /**
   * Perform the FHIR API Search call based on the resource type and the query object set via the filter
   * @param smartClient Initialized SMART Client
   */
  private _search(smartClient: FHIR.SMART.SMARTClient) {
    console.log(this.query);
    this.isLoading = true;
    const searchParams: FHIR.SMART.SearchParams = {
      type: this.resourceType,
      query: this.query
    };
    // Makes use of the SMART on FHIR JS Client search api method
    smartClient.api.search(searchParams).then(response => {
      this._zone.run(() => {
        this.isLoading = false;
        this.resources = response.data;
        this.error = null;
      });
    }, error => {
      this._zone.run(() => {
        this.isLoading = false;
        this.error = error;
      });
    });
  }

  /**
   * Called by the Apply button, to apply the query object in the editor and perform the FHIR API Call
   */
  applyFilter() {
    this._smartService.getClient()
      .takeUntil(this._unsubscribe)
      .subscribe(smartClient => {
        this._search(smartClient);
      });
  }

  /**
   * Called by the Reset button in the filter to clear the current query object and reset.
   */
  reset() {
    this._smartService.getClient()
      .takeUntil(this._unsubscribe)
      .subscribe(smartClient => {
        this._searchByPatientId(smartClient);
      });
  }

  /**
   * Setter method used by the Ace Editor to set the value of the query object
   */
  set queryCode(v) {
    try {
      this.query = JSON.parse(v);
    } catch (e) {
      console.log('error occored while you were typing the JSON');
    }
  }

  /**
   * Getter method used by the Ace Editor to get the value of the query object
   */
  get queryCode() {
    return JSON.stringify(this.query, null, 2);
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

}
