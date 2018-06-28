import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GlobalService } from '../../../services/global.service';

/**
 * Dialog component to show the global error set using the Global Service
 */
@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _globalService: GlobalService) { }

  ngOnInit() {
  }

  /**
   * Called by the Close button, which clears the error in the Global service.
   */
  close() {
    this.dialogRef.close();
    this._globalService.setError(null);
  }

}
