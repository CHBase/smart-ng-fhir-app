import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { GENERATE_CCDA_SETTINGS } from 'src/app/data/generate-ccda-settings';
import { HelperService, SmartService } from 'src/app/services';
import { CCDSResourceHelperService } from 'src/app/services/ccds-resource-helper.service';

@Component({
  selector: 'app-generate-ccda',
  templateUrl: './generate-ccda.component.html',
  styleUrls: ['./generate-ccda.component.css']
})
export class GenerateCcdaComponent implements OnInit, OnDestroy {
  /**
   * Query object passed to the SMART JS Client Search api.
   */
  query: any;

  /**
   * Error occured while trying to fetch the resource
   */
  error: any;

  /**
   * Flag to show that a request to fetch FHIR resources are in progress. Used by the Loading indicator.
   */
  isLoading: boolean;

  /**
   * Flag to show whether the json entered in the editor is a valid JSON or not. The save button is hidden based on this flag.
   */
  invalidJson: boolean;

  /**
   * Search Parameters supported by the FHIR Server for this particular FHIR Resource Type
   */
  searchParams: any;

  /**
   * List of resources fetched from the FHIR server based on the query object
   */
  resources: any;

  private _unsubscribe = new Subject<void>();

  constructor(
    private _smartService: SmartService,
    private _helperService: HelperService,
    private _route: ActivatedRoute,
    private _zone: NgZone,
    private _CCDSResourceHelperService: CCDSResourceHelperService
  ) { }

  ngOnInit() {
    this._setSupportedSearchParams();
  }

  /**
   * Set the search parameters supported by the resource type in the filter
   */
  private _setSupportedSearchParams() {
    this.searchParams = GENERATE_CCDA_SETTINGS.SearchQueryParameters;
    this.query = this.searchParams;
  }

  /**
   * Called by the Apply button, to apply the query object in the editor and perform the FHIR API Call
   */
  submit() {
    this._smartService.getClient()
      .takeUntil(this._unsubscribe)
      .subscribe(smartClient => {
        this.generateCCDA(smartClient);
      });
  }

  /**
   * Called by the Reset button in the filter to clear the current query object and reset.
   */
  reset() {
    this._setSupportedSearchParams();
  }

  generateCCDA(smartClient: FHIR.SMART.SMARTClient) {
    this.isLoading = true;
    console.log(this.query);
    const searchParams: FHIR.SMART.SearchParams = {
      type: GENERATE_CCDA_SETTINGS.Endpoint,
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
   * Setter method used by the Ace Editor to set the value of the query object
   */
  set queryCode(v) {
    try {
      this.query = JSON.parse(v);
      this.invalidJson = false;
    } catch (e) {
      this.invalidJson = true;
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
