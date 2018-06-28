import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EditResourceComponent, PatientComponent,
  ResourcesTableComponent, ResourcesTableContainerComponent
} from '.';
import { ResourcesRoutingModule } from './resources-routing.module';
import { AllMaterialModule } from '../../all-material/all-material.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AceEditorModule } from 'ng2-ace-editor';
import { SmartCommonModule } from '../common/smart-common.module';

/**
 * Angular Module containing all the components which are used by the routes under '/resources'
 */
@NgModule({
  imports: [
    CommonModule,
    AllMaterialModule,
    NgxJsonViewerModule,
    AceEditorModule,
    ResourcesRoutingModule,
    SmartCommonModule
  ],
  declarations: [
    EditResourceComponent,
    PatientComponent,
    ResourcesTableComponent,
    ResourcesTableContainerComponent
  ]
})
export class ResourcesModule { }
