import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessTokenTimerComponent, ErrorDialogComponent, ObjectViewerComponent, ResourcesMenuComponent } from '.';
import { RequestResponseLogComponent } from './request-response-log/request-response-log.component';
import { AllMaterialModule } from '../../all-material/all-material.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AceEditorModule } from 'ng2-ace-editor';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

/**
 * Angular module which contains all the components which are re-usable and are used in all the other components in the applications.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AllMaterialModule,
    NgxJsonViewerModule,
    AceEditorModule,
    RouterModule
  ],
  declarations: [
    AccessTokenTimerComponent,
    ErrorDialogComponent,
    ObjectViewerComponent,
    RequestResponseLogComponent,
    ResourcesMenuComponent
  ],
  exports: [
    AccessTokenTimerComponent,
    ErrorDialogComponent,
    ObjectViewerComponent,
    RequestResponseLogComponent,
    ResourcesMenuComponent
  ],
  entryComponents: [ErrorDialogComponent]
})
export class SmartCommonModule { }
