import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/takeUntil';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AceEditorModule } from 'ng2-ace-editor';
import { AppComponent } from './app.component';
import { AllMaterialModule } from './all-material/all-material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MiscPagesModule } from './components/misc-pages/misc-pages.module';
import { ResourcesModule } from './components/resources/resources.module';
import { SmartCommonModule } from './components/common/smart-common.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AllMaterialModule,
    NgxJsonViewerModule,
    AceEditorModule,
    SmartCommonModule,
    MiscPagesModule,
    ResourcesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
