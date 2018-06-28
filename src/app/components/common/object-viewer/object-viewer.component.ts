import { Component, OnInit, Input } from '@angular/core';

/**
 * Display any object passed to is as
 * 1. JSON - in the ACE Editor
 * 2. Pretty View - in the JSON Viewer
 */
@Component({
  selector: 'app-object-viewer',
  templateUrl: './object-viewer.component.html',
  styleUrls: ['./object-viewer.component.css']
})
export class ObjectViewerComponent implements OnInit {

  /**
   * Object to be displayed
   */
  @Input() value: any;

  /**
   * Title to be displayed
   */
  @Input() title: string;

  /**
   * Flag to hide the Pretty View
   */
  @Input() hideView: boolean;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Getter method used by the Ace Editor to get the value of the object.
   */
  get codeValue() {
    return JSON.stringify(this.value, null, 2);
  }

}
