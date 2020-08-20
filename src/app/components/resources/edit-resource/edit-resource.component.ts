import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from '../../../services/helper.service';
import { SmartService } from '../../../services/smart.service';
import { GlobalService } from '../../../services/global.service';
import { Subject } from 'rxjs';
import { DataService } from '../../../services/data.service';
import { MatSelectChange, MatSnackBar } from '@angular/material';

/**
 * Component used to create/update a particular FHIR resource
 * FHIR resource fetched based on the resource type and the id.
 * POST/PUT request performed.
 * Can see and compare the request and response resource objects.
 */
@Component({
  selector: 'app-edit-resource',
  templateUrl: './edit-resource.component.html',
  styleUrls: ['./edit-resource.component.css']
})
export class EditResourceComponent implements OnInit, OnDestroy {

  /**
   * FHIR Resource type, passed via the Route parameter
   */
  resourceType: any;

  /**
   * FHIR Resource ID, passed via the Route parameter
   */
  id: any;

  /**
   * Actual resource fetched from the FHIR server based on the ID and resource type
   */
  resource: any;

  /**
   * Resource object sent to the server during the PUT request.
   */
  resourceRequest: any;

  /**
   * Resource object recieved after a success PUT request
   */
  resourceResponse: any;

  /**
   * Error occured while the PUT request is performed.
   */
  error: any;

  /**
   * Flag denoting whether the server has the capability to update a resource or the user has the required scope.
   */
  canUpdate: boolean;

  /**
   * Flag denoting whether the server has the capability to delete a resource or the user has the required scope.
   */
  canDelete: boolean;

  /**
   * Flag used to show that a request is in progress. Used by the progress indicator.
   */
  isLoading: boolean;

  /**
   * Index of the Tab selected
   */
  selectedTabIndex = 0;

  samples: any[];

  invalidJson: boolean;

  private _unsubscribe = new Subject<void>();

  constructor(
    private _zone: NgZone,
    private _route: ActivatedRoute,
    private _helperService: HelperService,
    private _smartService: SmartService,
    private _dataService: DataService,
    private _snackBar: MatSnackBar
  ) { }

  /**
   * Checks if the server has the capability to update the particular type of FHIR resource.
   * Fetch the resource from the FHIR server
   */
  ngOnInit() {
    this.resourceType = this._route.snapshot.paramMap.get('resourceType');
    this.id = this._route.snapshot.paramMap.get('id');
    this._smartService.getClient()
      .takeUntil(this._unsubscribe)
      .subscribe(smartClient => {
        this._canPerform(smartClient);
        if (this.id === 'new') {
          this.resource = { resourceType: this.resourceType };
        } else {
          this._setResource(smartClient);
        }
      });
    this._dataService.getData(this.resourceType).subscribe(samples => {
      this.samples = samples;
    });
  }

  /**
   * Fetches the resource based on the ID passed in the route parameter
   * @param smartClient Initialized SMART Client
   */
  private _setResource(smartClient: FHIR.SMART.SMARTClient) {
    this.isLoading = true;
    // Have to append patient details as a query param since it breaks otherwise.
    const readParams: FHIR.SMART.ReadParams = {
      id: this.id + '?patient=' + smartClient.patient.id, 
      type: this.resourceType
    };
    // Makes use of the SMART on FHIR JS Client read api method
    smartClient.api.read(readParams).then(response => {
      this._zone.run(() => {
        this.isLoading = false;
        this.resource = response.data;
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
   * Callback on a Success on the POST/PUT request
   */
  private _success = (response) => {
    this._zone.run(() => {
      this.isLoading = false;
      // Updates the resource object recieved after the update
      if (response.data) {
        this.resourceResponse = response.data;
      } else {
        this.resourceResponse = response;
      }
      this.selectedTabIndex = 2;
      this.error = null;
      this.openSnackBar('SUCCESS', 'OK');
    });
  }

  /**
   * Callback on an Error on the POST/PUT request
   */
  private _error = (error) => {
    this._zone.run(() => {
      this.isLoading = false;
      this.error = error;
      this.selectedTabIndex = 3;
      this.openSnackBar('ERROR OCCURED', 'OK');
    });
  }

  /**
   * Method called by the Save button.
   * The resource object in the editor is passed on to the FHIR server
   * The SMART on FHIR JS Client create/update api is used.
   */
  save() {
    this.error = null;
    this._smartService.getClient()
      .takeUntil(this._unsubscribe)
      .subscribe(smartClient => {
        this._zone.run(() => {
          // Updates the resource object sent
          this.resourceRequest = this._helperService.clone(this.resource);
          this.isLoading = true;
          if (this.id === 'new') {
            smartClient.api.create({ resource: this.resourceRequest }).then(this._success, this._error);
          } else {
            smartClient.api.update({ resource: this.resourceRequest }).then(this._success, this._error);
          }
        });
      });
  }

  /**
   * Method called by the delete button.
   * The resource object in the editor is passed on to the FHIR server
   * The SMART on FHIR JS Client delete api is used.
   */
  delete() {
    this._smartService.getClient()
      .takeUntil(this._unsubscribe)
      .subscribe(smartClient => {
        this._zone.run(() => {
          // Updates the resource object sent
          this.resourceRequest = this._helperService.clone(this.resource);
          this.isLoading = true;
          smartClient.api.delete({ resource: this.resourceRequest }).then(this._success, this._error);
        });
      });
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
          let interaction = '';
          if (this.id === 'new') {
            interaction = 'create';
          } else {
            interaction = 'update';
          }
          this.canUpdate = this._helperService.hasSupport(conformance, smartClient.tokenResponse.scope, this.resourceType, interaction);
          if (this.id !== 'new') {
            this.canDelete = this._helperService.hasSupport(conformance, smartClient.tokenResponse.scope, this.resourceType, 'delete');
          }
        });
      }, error => {
        this._zone.run(() => {
          this.error = error;
        });
      });
  }

  /**
   * Setter method used by the Ace Editor to set the value of the resource object
   */
  set code(v) {
    try {
      this.resource = JSON.parse(v);
      this.invalidJson = false;
    } catch (e) {
      this._zone.run(() => {
        this.invalidJson = true;
      });
    }
  }

  /**
   * Getter method used by the Ace Editor to get the value of the resource object
   */
  get code() {
    return JSON.stringify(this.resource, null, 2);
  }

  /**
   * Getter method used by the Ace Editor to get the value of the error object.
   */
  get codeError() {
    return JSON.stringify(this.error, null, 2);
  }

  /**
   * Getter method used by the Ace Editor to get the value of the resource request object sent.
   */
  get codeResourceRequest() {
    return JSON.stringify(this.resourceRequest, null, 2);
  }

  /**
   * Getter method used by the Ace Editor to get the value of the response object.
   */
  get codeResourceResponse() {
    return JSON.stringify(this.resourceResponse, null, 2);
  }

  /**
   * Called when a sample is selected from the dropdown.
   * @param e SelectedChanged Event
   */
  sampleSelected(e: MatSelectChange) {
    const selectedId = e.value;
    this.resource = this.samples.find(q => q.id === selectedId).resource;
    this.error = null;
  }

  /**
   * Open a snack bar at the bottom to show a small message.
   * @param message Message to be shown
   * @param action Text to be shown on the Action Button
   */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
