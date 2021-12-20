import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HelperService } from '../../../services/helper.service';
import { SmartService } from '../../../services/smart.service';
import { Subscription, Subject } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material';
import { CCDSResourceHelperService } from 'src/app/services/ccds-resource-helper.service';
import { CCDSResourceMapping } from 'src/app/models/ccds-resource';
import { environment } from 'src/environments/environment.prod';

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
   * The CCDS resource type mapping for this object
   */
  ccdsResourceType: CCDSResourceMapping;
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
   * True, if the user has the specific-date tab selected; false otherwise.
   */
  useSpecificDateParam: boolean;

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
   * Flag denoting whether the server has the capability to create a resource or the user has the required scope.
   */
  canCreate: boolean;

  private _unsubscribe = new Subject<void>();
  private readonly _lastUpdatedParam = '_lastUpdated';

  constructor(
    private _helperService: HelperService,
    private _route: ActivatedRoute,
    private _zone: NgZone,
    private _smartService: SmartService,
    private _CCDSResourceHelperService: CCDSResourceHelperService
  ) { }

  /**
   * List the Supported Search parameters in the filter and performs the search based on the FHIR Resource type
   * and the patient in context.
   */
  ngOnInit() {
    this._route.params.subscribe(val => {
      this.resourceType = this._route.snapshot.paramMap.get('resourceType');
      if(!!environment.showCCDSResourceMenuInstead){
        this.ccdsResourceType = this._CCDSResourceHelperService.getCCDSResourceFromName(this._route.snapshot.fragment);
        console.log(this.ccdsResourceType);
      }   
      this._smartService.getClient()
        .takeUntil(this._unsubscribe)
        .subscribe(smartClient => {
          this._setSupportedSearchParams(smartClient);
          this._searchByPatientId(smartClient);
          this._canPerform(smartClient);
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
    this._search(smartClient, null, null, null);
  }

  /**
   * Perform the FHIR API Search call based on the resource type and the query object set via the filter
   * @param smartClient Initialized SMART Client
   * @param startDate Filter start date
   * @param endDate Filter end date
   */
  private _search(smartClient: FHIR.SMART.SMARTClient, specificDate: string, startDate: string, endDate: string) {
    let dateParamToUse = this._getDateParamToUse();
    this._setDateParam(dateParamToUse, specificDate, startDate, endDate);
    if (!!environment.showCCDSResourceMenuInstead)
    {
      if (!this._helperService.hasIntersectingKeys(this.query, this.ccdsResourceType.SearchQueryParameters))
      {
        // Adding a check for intersecting keys so that a user is able
        // to modify query parameters that are defined in SearchQueryParameters.
        this.query = Object.assign(this.query, this.ccdsResourceType.SearchQueryParameters);
      }
    }
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
        if (!!environment.showCCDSResourceMenuInstead && !!response.data && !!response.data.total)
        {
          let responseDataCopy = this._helperService.clone(response.data)
          // filter the results
          responseDataCopy.entry = responseDataCopy.entry.filter(this.ccdsResourceType.SearchSetFilter);
          this.resources = responseDataCopy;
        }
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
 * Event handler to detect date parameter type change.
 * @param event MatTabChangeEvent
 */
  OnDateTabChange(event: MatTabChangeEvent){
    this.useSpecificDateParam = (event.index === 0);
    // console.log('useSpecificDateParam set to ' + this.useSpecificDateParam);
  }

  /**
   * Utility function to get the supported date param for a resource.
   */
  _getDateParamToUse() {

    if (!!this.searchParams)
    {
      let dateParam = this._lastUpdatedParam;
      this.searchParams.forEach(param => {
        if (param.name.includes("date"))
        {
          dateParam = param.name;
        }
      });
      return dateParam;
    }

    return this._lastUpdatedParam;
  }

  /**
   * Utility function to add date filters to the query parameter.
   * @param paramToUse 
   * @param specificDate
   * @param startDate 
   * @param endDate 
   */
  _setDateParam(paramToUse: string, specificDate:string, startDate: string, endDate: string)
  {
    let dateParams = null;

    if (typeof this.useSpecificDateParam === "undefined") this.useSpecificDateParam = true; // Default selected tab is 'specific-date' (0)

    if (this.useSpecificDateParam && !!specificDate)
    {
      dateParams = {
        '$eq' : specificDate
      };
    }
    if (!this.useSpecificDateParam && !!startDate)
    {
      if (!dateParams) dateParams = {};
      dateParams['$ge'] = startDate;
    }
    if (!this.useSpecificDateParam && !!endDate)
    {
      if (!dateParams) dateParams = {};
      dateParams['$le'] = endDate;
    }

    if (!!dateParams)
    {
      //console.log(dateParams);
      this.query[paramToUse] = dateParams;
    }
  }

  /**
   * Called by the Apply button, to apply the query object in the editor and perform the FHIR API Call
   */
  applyFilter(specificDate: string, startDate: string, endDate: string) {
    this._smartService.getClient()
      .takeUntil(this._unsubscribe)
      .subscribe(smartClient => {
        this._search(smartClient, specificDate, startDate, endDate);
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

  /**
   * Method checks if the server has the capability to perform the particular interaction on  the particular FHIR resource type and
   * the user has the required scope in context.
   * @param smartClient Initialized SMART Client
   */
  private _canPerform(smartClient: FHIR.SMART.SMARTClient) {
    this._smartService.getConformance()
      .takeUntil(this._unsubscribe)
      .subscribe(conformance => {
        this._zone.run(() => {
          this.canCreate = this._helperService.hasSupport(conformance, smartClient.tokenResponse.scope, this.resourceType, 'create');
          console.log(`this.canCreate : ${this.canCreate}`);
        });
      }, error => {
        this._zone.run(() => {
          this.error = error;
        });
      });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

}
