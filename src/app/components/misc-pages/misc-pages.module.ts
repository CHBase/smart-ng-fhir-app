import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessTokenComponent } from './access-token/access-token.component';
import { ConformanceComponent } from './conformance/conformance.component';
import { ConnectComponent } from './connect/connect.component';
import { IndexComponent } from './index/index.component';
import { LaunchComponent } from './launch/launch.component';
import { RedirectComponent } from './redirect/redirect.component';
import { StateComponent } from './state/state.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MiscPagesRoutingModule } from './misc-pages-routing.module';
import { AllMaterialModule } from '../../all-material/all-material.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AceEditorModule } from 'ng2-ace-editor';
import { SmartCommonModule } from '../common/smart-common.module';
import { FormsModule } from '@angular/forms';

/**
 * Modules containing all the components which does not directly make FHIR API Calls except ConformanceComponent
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AllMaterialModule,
    SmartCommonModule,
    NgxJsonViewerModule,
    AceEditorModule,
    MiscPagesRoutingModule
  ],
  declarations: [
    AccessTokenComponent,
    ConformanceComponent,
    ConnectComponent,
    IndexComponent,
    LaunchComponent,
    RedirectComponent,
    StateComponent,
    UserProfileComponent
  ]
})
export class MiscPagesModule { }
