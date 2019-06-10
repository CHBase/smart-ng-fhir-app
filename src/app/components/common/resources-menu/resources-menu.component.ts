import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { HelperService } from '../../../services/helper.service';
import { SmartService } from '../../../services/smart.service';
import { Subject } from 'rxjs';
import { CCDSResourceHelperService } from 'src/app/services/ccds-resource-helper.service';
import { environment } from 'src/environments/environment.prod';

/**
 * Component used to display the Side Navigation menu based on the Capability of the server and the user scopes in context.
 */
@Component({
  selector: 'app-resources-menu',
  templateUrl: './resources-menu.component.html',
  styleUrls: ['./resources-menu.component.css']
})
export class ResourcesMenuComponent implements OnInit, OnDestroy {

  /**
   * List of FHIR resource types that supports read operation based on the user scopes and capability statement of the FHIR server.
   */
  supportedResources = [];

  /**
   * List of CCDS types that can be supported based on the FHIR resources supported.
   */
  supportedCCDSTypes = [];

  /**
   * Determine if we need to show the CCDS menu instead of the plain resource menu
   */
  showCCDSResourceMenuInstead: boolean;

  private _unsubscribe = new Subject<void>();

  constructor(private _zone: NgZone, private _helperService: HelperService, private _smartService: SmartService, private _CCDSResourceHelperService: CCDSResourceHelperService) { }

  ngOnInit() {
    this.showCCDSResourceMenuInstead = environment.showCCDSResourceMenuInstead;
    this._smartService.getClient()
      .takeUntil(this._unsubscribe)
      .subscribe(smartClient => {
        this._smartService.getConformance()
          .takeUntil(this._unsubscribe)
          .subscribe(conformance => {
            this._zone.run(() => {
              this.supportedResources = this._helperService.resourcesSupported(conformance, smartClient.tokenResponse.scope, 'read');
              this.supportedCCDSTypes = this._CCDSResourceHelperService.getSupportedCCDSResources(this.supportedResources);
            });
          });
      });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

}
