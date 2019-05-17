import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resources-table',
  templateUrl: './resources-table.component.html',
  styleUrls: ['./resources-table.component.css']
})
export class ResourcesTableComponent implements OnInit {

  /**
   * FHIR Resource Bundle passed on, which will be listed.
   */
  @Input() bundle: any;

  /**
   * Type of FHIR Resources
   */
  @Input() resourceType: string;

  /**
   * Patient-Id of the currently logged-in user.
   */
  @Input() patient: string;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Getter method used by the Ace Editor to get the value of the bundle object
   */
  get codeBundle() {
    return JSON.stringify(this.bundle, null, 2);
  }
}
