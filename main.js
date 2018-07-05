(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-material/all-material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/all-material/all-material.module.ts ***!
  \*****************************************************/
/*! exports provided: AllMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMaterialModule", function() { return AllMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllMaterialModule = /** @class */ (function () {
    function AllMaterialModule() {
    }
    AllMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"]
            ],
            declarations: []
        })
    ], AllMaterialModule);
    return AllMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _misc_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misc/auth-guard */ "./src/app/misc/auth-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            providers: [_misc_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGaurd"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-nav-container {\r\n    position: absolute;\r\n    top: 60px;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.float-right {\r\n    float: right;\r\n}\r\n\r\n.card-no-data {\r\n    min-height: 300px;\r\n}\r\n\r\n.center {\r\n    margin: auto;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n      <button *ngIf=\"isLoggedIn$ | async\" mat-icon-button (click)=\"snav.toggle()\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n      <span>Sample SMART on FHIR Application</span>\r\n      <span class=\"spacer\"></span>\r\n      <app-access-token-timer></app-access-token-timer>\r\n      <span class=\"min-padding\">\r\n        <button mat-raised-button (click)=\"requestResponseLog.toggle();logsHidden = !logsHidden;\" *ngIf=\"logsHidden\">Show Request Response Logs</button>\r\n        <button mat-raised-button (click)=\"requestResponseLog.toggle();logsHidden = !logsHidden;\" *ngIf=\"!logsHidden\">Hide Request Response Logs</button>\r\n      </span>\r\n      <span class=\"min-padding\" *ngIf=\"isLoggedIn$ | async\">\r\n        <button mat-raised-button color=\"warn\" *ngIf=\"canSwitchPatient\" (click)=\"switchPatient();snav.toggle();\">Switch Patient</button>\r\n      </span>\r\n      <span class=\"min-padding\">\r\n        <button mat-raised-button color=\"warn\" *ngIf=\"isLoggedIn$ | async\" (click)=\"logout();snav.toggle();\">Signout</button>\r\n      </span>\r\n    </mat-toolbar-row>\r\n    <mat-toolbar-row *ngIf=\"isLoggedIn$ | async\">\r\n      <h4>Server: {{connectedServer}}</h4>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n  <mat-sidenav-container class=\"side-nav-container\">\r\n    <mat-sidenav #snav mode=\"side\" opened=\"false\">\r\n      <mat-nav-list *ngIf=\"isLoggedIn$ | async\">\r\n        <a routerLink=\"/conformance\" mat-list-item>Conformance</a>\r\n        <a routerLink=\"/state\" mat-list-item>State</a>\r\n        <a routerLink=\"/token\" mat-list-item>Access Token</a>\r\n        <a routerLink=\"/user-profile\" mat-list-item>User Profile</a>\r\n        <app-resources-menu></app-resources-menu>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav #requestResponseLog opened=\"false\" mode=\"side\" position=\"end\">\r\n      <app-request-response-log></app-request-response-log>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <div>\r\n        <div class=\"container\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _components_common_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common/error-dialog/error-dialog.component */ "./src/app/components/common/error-dialog/error-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Root Application Component
 */
var AppComponent = /** @class */ (function () {
    function AppComponent(_zone, _router, _dialog, _authService, _globalService, _smartService) {
        this._zone = _zone;
        this._router = _router;
        this._dialog = _dialog;
        this._authService = _authService;
        this._globalService = _globalService;
        this._smartService = _smartService;
        /**
          * @ignore
          */
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.logsHidden = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Ensure the components are destroyed and initialized again when the routes change
        this._router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.isLoggedIn$ = this._authService.isLoggedIn;
        // Open the Common Error Dialog screen, whenever an error has been reported anywhere in the applciation
        this._globalService.getError()
            .takeUntil(this._unsubscribe)
            .subscribe(function (error) {
            if (error) {
                _this._zone.run(function () {
                    _this.openErrorDialog(error);
                });
            }
        });
        // Determining if the application has the 'launch/patient' scope
        this.isLoggedIn$.subscribe(function (isLoggedIn) {
            if (isLoggedIn) {
                _this._smartService.getClient()
                    .takeUntil(_this._unsubscribe)
                    .subscribe(function (smartClient) {
                    _this._zone.run(function () {
                        _this.canSwitchPatient = smartClient.state.client.scope.indexOf('launch/patient') !== -1;
                        _this.connectedServer = smartClient.state.server;
                    });
                });
            }
        });
    };
    /**
     * Called by the Logout button on the header
     */
    AppComponent.prototype.logout = function () {
        this._authService.logout();
    };
    /**
     * Called by the Switch Patient button on the header
     */
    AppComponent.prototype.switchPatient = function () {
        var _this = this;
        this._authService.logout();
        this._smartService.getClient()
            .takeUntil(this._unsubscribe)
            .subscribe(function (smartClient) {
            _this._zone.run(function () {
                // Initiates the OAuth2.0 workflow, so that the user can select another record.
                var oauth2Configuration = smartClient.state;
                FHIR.oauth2.authorize(oauth2Configuration);
            });
        });
    };
    AppComponent.prototype.openErrorDialog = function (error) {
        var dialogRef = this._dialog.open(_components_common_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ErrorDialogComponent"], {
            minHeight: 700,
            minWidth: 800,
            data: { error: error }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["SmartService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_takeUntil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/takeUntil */ "./node_modules/rxjs-compat/_esm5/add/operator/takeUntil.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _all_material_all_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./all-material/all-material.module */ "./src/app/all-material/all-material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_misc_pages_misc_pages_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/misc-pages/misc-pages.module */ "./src/app/components/misc-pages/misc-pages.module.ts");
/* harmony import */ var _components_resources_resources_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/resources/resources.module */ "./src/app/components/resources/resources.module.ts");
/* harmony import */ var _components_common_smart_common_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/common/smart-common.module */ "./src/app/components/common/smart-common.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _all_material_all_material_module__WEBPACK_IMPORTED_MODULE_9__["AllMaterialModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_6__["NgxJsonViewerModule"],
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_7__["AceEditorModule"],
                _components_common_smart_common_module__WEBPACK_IMPORTED_MODULE_14__["SmartCommonModule"],
                _components_misc_pages_misc_pages_module__WEBPACK_IMPORTED_MODULE_12__["MiscPagesModule"],
                _components_resources_resources_module__WEBPACK_IMPORTED_MODULE_13__["ResourcesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/common/access-token-timer/access-token-timer.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/common/access-token-timer/access-token-timer.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/access-token-timer/access-token-timer.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/common/access-token-timer/access-token-timer.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"timeLeft>0\">\r\n  Access Token: {{timeLeft}} s\r\n</span>\r\n<span *ngIf=\"(isLoggedIn$ | async) && (!timeLeft || timeLeft<=0)\">\r\n  Access token has expired.\r\n</span>\r\n<span *ngIf=\"isLoggedIn$ | async\" class=\"min-padding\">\r\n  <button mat-raised-button color=\"warn\" *ngIf=\"canRefresh\" (click)=\"refreshAccessToken()\">Refresh Access Token</button>\r\n</span>"

/***/ }),

/***/ "./src/app/components/common/access-token-timer/access-token-timer.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/common/access-token-timer/access-token-timer.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AccessTokenTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessTokenTimerComponent", function() { return AccessTokenTimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Displays the Time left for the Access Token in context.
 * Shows the Refresh Token button, if there is a refresh_token in the Token Response from the FHIR server.
 */
var AccessTokenTimerComponent = /** @class */ (function () {
    function AccessTokenTimerComponent(_authService, _smartService, _router) {
        this._authService = _authService;
        this._smartService = _smartService;
        this._router = _router;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AccessTokenTimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn$ = this._authService.isLoggedIn;
        if (this._smartService.getRefreshToken()) {
            this.canRefresh = true;
        }
        this._smartService.getTimeLeft()
            .takeUntil(this._unsubscribe)
            .subscribe(function (timeLeft) {
            if (_this._smartService.getRefreshToken()) {
                _this.canRefresh = true;
            }
            _this.timeLeft = timeLeft;
        });
    };
    /**
     * Called by the Refresh Token button, which initiates the OAuth2.0 Refresh token workflow.
     */
    AccessTokenTimerComponent.prototype.refreshAccessToken = function () {
        this._smartService.refreshAccessToken();
    };
    AccessTokenTimerComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    AccessTokenTimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-token-timer',
            template: __webpack_require__(/*! ./access-token-timer.component.html */ "./src/app/components/common/access-token-timer/access-token-timer.component.html"),
            styles: [__webpack_require__(/*! ./access-token-timer.component.css */ "./src/app/components/common/access-token-timer/access-token-timer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services__WEBPACK_IMPORTED_MODULE_4__["SmartService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AccessTokenTimerComponent);
    return AccessTokenTimerComponent;
}());



/***/ }),

/***/ "./src/app/components/common/error-dialog/error-dialog.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/common/error-dialog/error-dialog.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/error-dialog/error-dialog.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/common/error-dialog/error-dialog.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <app-object-viewer *ngIf=\"data\" title=\"Error\" [value]=\"data\" hideView=\"true\"></app-object-viewer>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button  color=\"warn\" (click)=\"close()\">Close</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/common/error-dialog/error-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/error-dialog/error-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: ErrorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return ErrorDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/global.service */ "./src/app/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
 * Dialog component to show the global error set using the Global Service
 */
var ErrorDialogComponent = /** @class */ (function () {
    function ErrorDialogComponent(dialogRef, data, _globalService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._globalService = _globalService;
    }
    ErrorDialogComponent.prototype.ngOnInit = function () {
    };
    /**
     * Called by the Close button, which clears the error in the Global service.
     */
    ErrorDialogComponent.prototype.close = function () {
        this.dialogRef.close();
        this._globalService.setError(null);
    };
    ErrorDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-dialog',
            template: __webpack_require__(/*! ./error-dialog.component.html */ "./src/app/components/common/error-dialog/error-dialog.component.html"),
            styles: [__webpack_require__(/*! ./error-dialog.component.css */ "./src/app/components/common/error-dialog/error-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/common/index.ts":
/*!********************************************!*\
  !*** ./src/app/components/common/index.ts ***!
  \********************************************/
/*! exports provided: ErrorDialogComponent, AccessTokenTimerComponent, ObjectViewerComponent, ResourcesMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _access_token_timer_access_token_timer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-token-timer/access-token-timer.component */ "./src/app/components/common/access-token-timer/access-token-timer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessTokenTimerComponent", function() { return _access_token_timer_access_token_timer_component__WEBPACK_IMPORTED_MODULE_0__["AccessTokenTimerComponent"]; });

/* harmony import */ var _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-dialog/error-dialog.component */ "./src/app/components/common/error-dialog/error-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ErrorDialogComponent"]; });

/* harmony import */ var _object_viewer_object_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object-viewer/object-viewer.component */ "./src/app/components/common/object-viewer/object-viewer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectViewerComponent", function() { return _object_viewer_object_viewer_component__WEBPACK_IMPORTED_MODULE_2__["ObjectViewerComponent"]; });

/* harmony import */ var _resources_menu_resources_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources-menu/resources-menu.component */ "./src/app/components/common/resources-menu/resources-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourcesMenuComponent", function() { return _resources_menu_resources_menu_component__WEBPACK_IMPORTED_MODULE_3__["ResourcesMenuComponent"]; });







/***/ }),

/***/ "./src/app/components/common/object-viewer/object-viewer.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/common/object-viewer/object-viewer.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/object-viewer/object-viewer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/common/object-viewer/object-viewer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>\r\n    <div>{{title}}</div>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <mat-tab-group>\r\n      <mat-tab label=\"View\" *ngIf=\"!hideView\">\r\n        <ngx-json-viewer *ngIf=\"value\" [json]=\"value\"></ngx-json-viewer>\r\n      </mat-tab>\r\n      <mat-tab label=\"JSON\">\r\n        <ace-editor mode=\"text\" [text]=\"codeValue\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/common/object-viewer/object-viewer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/common/object-viewer/object-viewer.component.ts ***!
  \****************************************************************************/
/*! exports provided: ObjectViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectViewerComponent", function() { return ObjectViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Display any object passed to is as
 * 1. JSON - in the ACE Editor
 * 2. Pretty View - in the JSON Viewer
 */
var ObjectViewerComponent = /** @class */ (function () {
    function ObjectViewerComponent() {
    }
    ObjectViewerComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ObjectViewerComponent.prototype, "codeValue", {
        /**
         * Getter method used by the Ace Editor to get the value of the object.
         */
        get: function () {
            return JSON.stringify(this.value, null, 2);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ObjectViewerComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ObjectViewerComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ObjectViewerComponent.prototype, "hideView", void 0);
    ObjectViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-object-viewer',
            template: __webpack_require__(/*! ./object-viewer.component.html */ "./src/app/components/common/object-viewer/object-viewer.component.html"),
            styles: [__webpack_require__(/*! ./object-viewer.component.css */ "./src/app/components/common/object-viewer/object-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ObjectViewerComponent);
    return ObjectViewerComponent;
}());



/***/ }),

/***/ "./src/app/components/common/request-response-log/request-response-log.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/common/request-response-log/request-response-log.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/request-response-log/request-response-log.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/common/request-response-log/request-response-log.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min-padding\" style=\"float: right;\">\r\n  <button mat-raised-button color=\"warn\" (click)=\"clearLogs()\">Cleare Logs</button>\r\n</div>\r\n<mat-accordion>\r\n  <mat-expansion-panel expanded>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Request Response Log\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Log of all the FHIR API requests made by this app.\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <div>\r\n      <div *ngFor=\"let log of logs\">\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                {{log.request.method}} {{log.response.status}} {{log.request.url}}\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <mat-tab-group>\r\n                    <mat-tab label=\"Body\">\r\n                      <ace-editor mode=\"text\" [text]=\"log.request.body\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Headers\">\r\n                      <ace-editor mode=\"text\" [text]=\"log.request.headers\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n                    </mat-tab>\r\n                  </mat-tab-group>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <mat-tab-group>\r\n                    <mat-tab label=\"Body\">\r\n                      <ace-editor mode=\"text\" [text]=\"log.response.data\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Headers\">\r\n                      <ace-editor mode=\"text\" [text]=\"log.response.headers\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n                    </mat-tab>\r\n                  </mat-tab-group>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </div>\r\n    </div>\r\n  </mat-expansion-panel>\r\n</mat-accordion>"

/***/ }),

/***/ "./src/app/components/common/request-response-log/request-response-log.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/common/request-response-log/request-response-log.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RequestResponseLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestResponseLogComponent", function() { return RequestResponseLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Makes use of the xhook library to intercept all XMLHttpRequests from this application
 * and pushes them into a local in-memory javascript array variable.
 * Displays the list of requests sent and their corresponding responses.
 */
var RequestResponseLogComponent = /** @class */ (function () {
    function RequestResponseLogComponent() {
        this.logs = [];
    }
    RequestResponseLogComponent.prototype.ngOnInit = function () {
        var _this = this;
        xhook.after(function (request, response) {
            if (request.url.indexOf('sockjs-node') === -1) {
                request['body'] = _this.format(request['body'], false);
                request['headers'] = _this.format(request['headers'], true);
                response['data'] = _this.format(response['data'], false);
                response['headers'] = _this.format(response['headers'], true);
                _this.logs.push({
                    request: request,
                    response: response
                });
            }
        });
    };
    /**
     * Method used to parse the text and create an object.
     * @param text String to format
     * @param isObject Flag to identify if the text parameter is an object or not
     */
    RequestResponseLogComponent.prototype.format = function (text, isObject) {
        try {
            if (!isObject) {
                var obj = JSON.parse(text);
                return JSON.stringify(obj, null, 2);
            }
            else {
                return JSON.stringify(text, null, 2);
            }
        }
        catch (e) {
            return text;
        }
    };
    /**
     * Called by the Clear Logs button, which removes all the request-response logs from the memory.
     */
    RequestResponseLogComponent.prototype.clearLogs = function () {
        this.logs = [];
    };
    RequestResponseLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-response-log',
            template: __webpack_require__(/*! ./request-response-log.component.html */ "./src/app/components/common/request-response-log/request-response-log.component.html"),
            styles: [__webpack_require__(/*! ./request-response-log.component.css */ "./src/app/components/common/request-response-log/request-response-log.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestResponseLogComponent);
    return RequestResponseLogComponent;
}());



/***/ }),

/***/ "./src/app/components/common/resources-menu/resources-menu.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/common/resources-menu/resources-menu.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/resources-menu/resources-menu.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/common/resources-menu/resources-menu.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a *ngFor=\"let resource of supportedResources\" routerLink=\"/resources/{{resource}}\" mat-list-item>{{resource}}</a>"

/***/ }),

/***/ "./src/app/components/common/resources-menu/resources-menu.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/common/resources-menu/resources-menu.component.ts ***!
  \******************************************************************************/
/*! exports provided: ResourcesMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesMenuComponent", function() { return ResourcesMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _services_smart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/smart.service */ "./src/app/services/smart.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component used to display the Side Navigation menu based on the Capability of the server and the user scopes in context.
 */
var ResourcesMenuComponent = /** @class */ (function () {
    function ResourcesMenuComponent(_zone, _helperService, _smartService) {
        this._zone = _zone;
        this._helperService = _helperService;
        this._smartService = _smartService;
        /**
         * List of FHIR resource types that supports read operation based on the user scopes and capability statement of the FHIR server.
         */
        this.supportedResources = [];
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ResourcesMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._smartService.getClient()
            .takeUntil(this._unsubscribe)
            .subscribe(function (smartClient) {
            _this._smartService.getConformance()
                .takeUntil(_this._unsubscribe)
                .subscribe(function (conformance) {
                _this._zone.run(function () {
                    _this.supportedResources = _this._helperService.resourcesSupported(conformance, smartClient.tokenResponse.scope, 'read');
                });
            });
        });
    };
    ResourcesMenuComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    ResourcesMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resources-menu',
            template: __webpack_require__(/*! ./resources-menu.component.html */ "./src/app/components/common/resources-menu/resources-menu.component.html"),
            styles: [__webpack_require__(/*! ./resources-menu.component.css */ "./src/app/components/common/resources-menu/resources-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"], _services_smart_service__WEBPACK_IMPORTED_MODULE_2__["SmartService"]])
    ], ResourcesMenuComponent);
    return ResourcesMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/common/smart-common.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/common/smart-common.module.ts ***!
  \**********************************************************/
/*! exports provided: SmartCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartCommonModule", function() { return SmartCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/app/components/common/index.ts");
/* harmony import */ var _request_response_log_request_response_log_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-response-log/request-response-log.component */ "./src/app/components/common/request-response-log/request-response-log.component.ts");
/* harmony import */ var _all_material_all_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../all-material/all-material.module */ "./src/app/all-material/all-material.module.ts");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/**
 * Angular module which contains all the components which are re-usable and are used in all the other components in the applications.
 */
var SmartCommonModule = /** @class */ (function () {
    function SmartCommonModule() {
    }
    SmartCommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _all_material_all_material_module__WEBPACK_IMPORTED_MODULE_4__["AllMaterialModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_5__["NgxJsonViewerModule"],
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_6__["AceEditorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ],
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_2__["AccessTokenTimerComponent"],
                ___WEBPACK_IMPORTED_MODULE_2__["ErrorDialogComponent"],
                ___WEBPACK_IMPORTED_MODULE_2__["ObjectViewerComponent"],
                _request_response_log_request_response_log_component__WEBPACK_IMPORTED_MODULE_3__["RequestResponseLogComponent"],
                ___WEBPACK_IMPORTED_MODULE_2__["ResourcesMenuComponent"]
            ],
            exports: [
                ___WEBPACK_IMPORTED_MODULE_2__["AccessTokenTimerComponent"],
                ___WEBPACK_IMPORTED_MODULE_2__["ErrorDialogComponent"],
                ___WEBPACK_IMPORTED_MODULE_2__["ObjectViewerComponent"],
                _request_response_log_request_response_log_component__WEBPACK_IMPORTED_MODULE_3__["RequestResponseLogComponent"],
                ___WEBPACK_IMPORTED_MODULE_2__["ResourcesMenuComponent"]
            ],
            entryComponents: [___WEBPACK_IMPORTED_MODULE_2__["ErrorDialogComponent"]]
        })
    ], SmartCommonModule);
    return SmartCommonModule;
}());



/***/ }),

/***/ "./src/app/components/misc-pages/access-token/access-token.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/misc-pages/access-token/access-token.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/misc-pages/access-token/access-token.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/misc-pages/access-token/access-token.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-object-viewer title=\"Access Token\" [value]=\"tokenResponse\"></app-object-viewer>"

/***/ }),

/***/ "./src/app/components/misc-pages/access-token/access-token.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/misc-pages/access-token/access-token.component.ts ***!
  \******************************************************************************/
/*! exports provided: AccessTokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessTokenComponent", function() { return AccessTokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component used to display the Current Token Response provided by the SMART Client api.
 */
var AccessTokenComponent = /** @class */ (function () {
    function AccessTokenComponent(_zone, _smartService) {
        this._zone = _zone;
        this._smartService = _smartService;
        this._unsubscribe = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AccessTokenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._smartService.getClient()
            .takeUntil(this._unsubscribe)
            .subscribe(function (smartClient) {
            _this._zone.run(function () {
                _this.tokenResponse = smartClient.tokenResponse;
            });
        });
    };
    AccessTokenComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    AccessTokenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-token',
            template: __webpack_require__(/*! ./access-token.component.html */ "./src/app/components/misc-pages/access-token/access-token.component.html"),
            styles: [__webpack_require__(/*! ./access-token.component.css */ "./src/app/components/misc-pages/access-token/access-token.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _services__WEBPACK_IMPORTED_MODULE_1__["SmartService"]])
    ], AccessTokenComponent);
    return AccessTokenComponent;
}());



/***/ }),

/***/ "./src/app/components/misc-pages/conformance/conformance.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/misc-pages/conformance/conformance.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/misc-pages/conformance/conformance.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/misc-pages/conformance/conformance.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-object-viewer title=\"Server Capability\" [value]=\"conformance\"></app-object-viewer>"

/***/ }),

/***/ "./src/app/components/misc-pages/conformance/conformance.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/misc-pages/conformance/conformance.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConformanceComponent", function() { return ConformanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component which displays the Capability Statement of the SMART on FHIR connected to.
 */
var ConformanceComponent = /** @class */ (function () {
    function ConformanceComponent(_zone, _smartService) {
        this._zone = _zone;
        this._smartService = _smartService;
        /**
         * Capability statement of the SMART on FHIR Server
         */
        this.conformance = {};
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ConformanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._smartService.getClient()
            .takeUntil(this._unsubscribe)
            .subscribe(function (smartClient) {
            // Makes a FHIR API call to the '/metadata' endpoint to get the CapabilityStatement
            _this._smartService.getConformance()
                .takeUntil(_this._unsubscribe)
                .subscribe(function (conformance) {
                _this._zone.run(function () {
                    _this.conformance = conformance;
                });
            });
        });
    };
    ConformanceComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    ConformanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conformance',
            template: __webpack_require__(/*! ./conformance.component.html */ "./src/app/components/misc-pages/conformance/conformance.component.html"),
            styles: [__webpack_require__(/*! ./conformance.component.css */ "./src/app/components/misc-pages/conformance/conformance.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _services__WEBPACK_IMPORTED_MODULE_2__["SmartService"]])
    ], ConformanceComponent);
    return ConformanceComponent;
}());



/***/ }),

/***/ "./src/app/components/misc-pages/connect/connect.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/misc-pages/connect/connect.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n}\r\n\r\n.row {\r\n    padding: 10px\r\n}"

/***/ }),

/***/ "./src/app/components/misc-pages/connect/connect.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/misc-pages/connect/connect.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-content>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <mat-card class=\"mat-elevation-z8\">\r\n          <mat-card-title>\r\n            Client\r\n          </mat-card-title>\r\n          <mat-card-content>\r\n            <p>Name: {{app.name}}</p>\r\n            <p>Unique Name: {{app.uniqueName}}</p>\r\n            <p>Client_Id: {{app.clientId}}</p>\r\n            <p>Redirect Uri: {{app.redirectUri}}</p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <mat-card class=\"mat-elevation-z8\">\r\n          <mat-card-title>\r\n            Server\r\n          </mat-card-title>\r\n          <mat-card-content>\r\n            <p>Name: {{server.name}}</p>\r\n            <p>Unique Name: {{server.uniqueName}}</p>\r\n            <p>Base Url: {{server.baseUrl}}</p>\r\n            <div *ngIf=\"server.information && server.information.patientStandalone\">\r\n              <p>Information</p>\r\n              <ol>\r\n                <li *ngFor=\"let information of server.information.patientStandalone\">{{information}}</li>\r\n              </ol>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <p>Select the Scopes</p>\r\n      <button mat-line mat-button (click)=\"toggleAll()\">Toggle All</button>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <div class=\"checkbox\" *ngFor=\"let scope of scopes\">\r\n                  <div class=\"col-xs-4\">\r\n                    <mat-checkbox name=\"scopes\" value=\"{{scope.value}}\" [(ngModel)]=\"scope.checked\"> {{scope.value}}</mat-checkbox>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"server.supportsAccessTypes\">\r\n        <p>Access Type</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <mat-radio-group [(ngModel)]=\"accessType\">\r\n              <div class=\"col-xs-2\">\r\n                <mat-radio-button value=\"online_access\">Online Access</mat-radio-button>\r\n              </div>\r\n              <div class=\"col-xs-2\">\r\n                <mat-radio-button value=\"offline_access\">Offline Access</mat-radio-button>\r\n              </div>\r\n            </mat-radio-group>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"example-form\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Additional Scopes (Comma Seperated)\" [(ngModel)]=\"additionalScopes\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-raised-button color=\"primary\" (click)=\"connect();\">CONNECT</button>\r\n    <button mat-raised-button color=\"warn\" routerLink=\"/index\">CANCEL</button>\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/misc-pages/connect/connect.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/misc-pages/connect/connect.component.ts ***!
  \********************************************************************/
/*! exports provided: ConnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return ConnectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component which displays the Server and Client Application information which the user is going to connect to.
 * Allows the user to select the scopes to be requested during the OAuth2.0 workflow.
 */
var ConnectComponent = /** @class */ (function () {
    function ConnectComponent(_clientAppService, _fhirServerService, _route, _globalService) {
        this._clientAppService = _clientAppService;
        this._fhirServerService = _fhirServerService;
        this._route = _route;
        this._globalService = _globalService;
        this.accessType = 'online_access';
        this.additionalScopes = '';
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ConnectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._clientAppService.getAllClientApps()
            .takeUntil(this._unsubscribe)
            .subscribe(function (apps) {
            var uniqueName = _this._route.snapshot.paramMap.get('uniqueName');
            // Get the app based on the route parameter
            _this.app = apps.find(function (q) { return q.uniqueName === uniqueName; });
            var scopesString = _this.app.scopes;
            var scopesArray = scopesString.split(',');
            var scopes = scopesArray.map(function (scope) {
                return { value: scope.trim(), checked: true };
            });
            // Add the default scopes requried for a patient standalone launch
            scopes.push({ value: 'launch/patient', checked: true });
            scopes.push({ value: 'openid', checked: true });
            scopes.push({ value: 'profile', checked: true });
            _this.scopes = scopes;
            var serverUniqueName = _this.app.server;
            _this._fhirServerService.getServer(serverUniqueName)
                .takeUntil(_this._unsubscribe)
                .subscribe(function (server) {
                _this.server = server;
            });
        });
    };
    /**
     * Method called by the Connect button.
     * Initiates the OAuth2.0 Authorization workflow passing the scopes selected.
     * Makes use of the FHIR.oauth.authorize method in SMART JS Client library.
     */
    ConnectComponent.prototype.connect = function () {
        var _this = this;
        var selectedScopes = this.scopes.filter(function (q) { return q.checked === true; }).map(function (v) { return v.value; }).join(' ');
        if (this.server.supportsAccessTypes === true) {
            selectedScopes = selectedScopes + ' ' + this.accessType;
        }
        if (this.additionalScopes !== '') {
            selectedScopes = selectedScopes + ' ' + this.additionalScopes;
        }
        var clientSettings = {
            client_id: this.app.clientId,
            scope: selectedScopes,
            redirect_uri: this.app.redirectUri,
            state: this.app.uniqueName,
        };
        if (this.app.secret) {
            clientSettings.secret = this.app.secret;
        }
        var oauth2Configuration = {
            client: clientSettings,
            server: this.server.baseUrl
        };
        FHIR.oauth2.authorize(oauth2Configuration, function (authError) {
            _this._globalService.setError(authError);
        });
    };
    /**
     * Method called by the Toggle All button, which toggles all the scopes checkboxes
     */
    ConnectComponent.prototype.toggleAll = function () {
        this.scopes.forEach(function (element) {
            element.checked = !element.checked;
        });
    };
    ConnectComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    ConnectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connect',
            template: __webpack_require__(/*! ./connect.component.html */ "./src/app/components/misc-pages/connect/connect.component.html"),
            styles: [__webpack_require__(/*! ./connect.component.css */ "./src/app/components/misc-pages/connect/connect.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["ClientAppService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["FhirServerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], ConnectComponent);
    return ConnectComponent;
}());



/***/ }),

/***/ "./src/app/components/misc-pages/index.ts":
/*!************************************************!*\
  !*** ./src/app/components/misc-pages/index.ts ***!
  \************************************************/
/*! exports provided: AccessTokenComponent, ConformanceComponent, ConnectComponent, IndexComponent, LaunchComponent, RedirectComponent, StateComponent, UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _access_token_access_token_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-token/access-token.component */ "./src/app/components/misc-pages/access-token/access-token.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessTokenComponent", function() { return _access_token_access_token_component__WEBPACK_IMPORTED_MODULE_0__["AccessTokenComponent"]; });

/* harmony import */ var _conformance_conformance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conformance/conformance.component */ "./src/app/components/misc-pages/conformance/conformance.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConformanceComponent", function() { return _conformance_conformance_component__WEBPACK_IMPORTED_MODULE_1__["ConformanceComponent"]; });

/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect/connect.component */ "./src/app/components/misc-pages/connect/connect.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return _connect_connect_component__WEBPACK_IMPORTED_MODULE_2__["ConnectComponent"]; });

/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/components/misc-pages/index/index.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]; });

/* harmony import */ var _launch_launch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./launch/launch.component */ "./src/app/components/misc-pages/launch/launch.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LaunchComponent", function() { return _launch_launch_component__WEBPACK_IMPORTED_MODULE_4__["LaunchComponent"]; });

/* harmony import */ var _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redirect/redirect.component */ "./src/app/components/misc-pages/redirect/redirect.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedirectComponent", function() { return _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_5__["RedirectComponent"]; });

/* harmony import */ var _state_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/state.component */ "./src/app/components/misc-pages/state/state.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return _state_state_component__WEBPACK_IMPORTED_MODULE_6__["StateComponent"]; });

/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/components/misc-pages/user-profile/user-profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"]; });











/***/ }),

/***/ "./src/app/components/misc-pages/index/index.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/misc-pages/index/index.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/misc-pages/index/index.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/misc-pages/index/index.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n  <mat-tab label=\"Standalone - Patient Apps\">\r\n    <mat-card class=\"mat-elevation-z8\">\r\n      <mat-card-content>\r\n        <div>\r\n          <mat-list role=\"list\">\r\n            <mat-list-item role=\"listitem\" *ngFor=\"let app of standalonePatientApps\">\r\n              <button mat-raised-button color=\"primary\" (click)=\"connect(app.uniqueName);\">{{app.name}}</button>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </mat-tab>\r\n  <mat-tab label=\"Launch from EHR - Provider Apps\">\r\n    <mat-card class=\"mat-elevation-z8\">\r\n      <mat-card-content>\r\n        <div>\r\n          <mat-card *ngFor=\"let app of ehrLaunchApps\">\r\n            <mat-card-title>\r\n              <div>{{app.name}}</div>\r\n            </mat-card-title>\r\n            <mat-card-content>\r\n              <div>\r\n                <h4>FHIR Server: {{server(app.server).baseUrl}}</h4>\r\n                <p>Client_Id: {{app.clientId}}</p>\r\n                <p>Redirect Uri: {{app.redirectUri}}</p>\r\n                <p>Launch Url: {{app.launchUrl}}</p>\r\n                <div *ngIf=\"server(app.server).information && server(app.server).information.ehrLaunch\">\r\n                  <p>Information</p>\r\n                  <ol>\r\n                    <li *ngFor=\"let information of  server(app.server).information.ehrLaunch\">{{information}}</li>\r\n                  </ol>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/components/misc-pages/index/index.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/misc-pages/index/index.component.ts ***!
  \****************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component which acts as the landing page for this Sample application, which lists all the servers and clients configured.
 */
var IndexComponent = /** @class */ (function () {
    function IndexComponent(_clientAppService, _fhirServerService, _router) {
        this._clientAppService = _clientAppService;
        this._fhirServerService = _fhirServerService;
        this._router = _router;
        this.standalonePatientApps = [];
        this.ehrLaunchApps = [];
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Gets all the FHIR servers and Client apps configured and lists them for the users to connect.
     */
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._clientAppService.getStandalonePatientApps()
            .takeUntil(this._unsubscribe)
            .subscribe(function (apps) {
            _this.standalonePatientApps = apps;
        });
        this._fhirServerService.getAllServers()
            .takeUntil(this._unsubscribe)
            .subscribe(function (servers) {
            _this.servers = servers;
        });
        this._clientAppService.getEhrLaunchApps()
            .takeUntil(this._unsubscribe)
            .subscribe(function (apps) {
            _this.ehrLaunchApps = apps;
        });
    };
    /**
     * Redirects the user to the Connect page
     * @param uniqueName Unique Name of a defined SMART on FHIR server
     */
    IndexComponent.prototype.connect = function (uniqueName) {
        this._router.navigate(['/connect/' + uniqueName]);
    };
    /**
     * Method used to bind the information on the component
     * @param uniqueName Unique Name of a defined SMART on FHIR Server
     */
    IndexComponent.prototype.server = function (uniqueName) {
        return this.servers.find(function (q) { return q.uniqueName === uniqueName; });
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/components/misc-pages/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/components/misc-pages/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["ClientAppService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["FhirServerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/components/misc-pages/launch/launch.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/misc-pages/launch/launch.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/misc-pages/launch/launch.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/misc-pages/launch/launch.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  The SMART on FHIR App has been launched from EMR......\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/misc-pages/launch/launch.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/misc-pages/launch/launch.component.ts ***!
  \******************************************************************/
/*! exports provided: LaunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchComponent", function() { return LaunchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component used by the route '/launch/{uniqueName}'
 * When registering the application on the server, the Launch URL should be pointing to this route
 * with the specific unique name for the client application
 */
var LaunchComponent = /** @class */ (function () {
    function LaunchComponent(_clientAppService, _route, _globalService, _fhirServerService) {
        this._clientAppService = _clientAppService;
        this._route = _route;
        this._globalService = _globalService;
        this._fhirServerService = _fhirServerService;
        this._unsubscribe = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Steps performed
     * 1. Identify the SMART on FHIR client application and server details based on the {uniqueName} route parameter.
     * 2. Call FHIR.oauth2.authorize() with the specific OAuth2 configuration of the identified application.
     */
    LaunchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._clientAppService.getAllClientApps()
            .takeUntil(this._unsubscribe)
            .subscribe(function (clientApps) {
            var uniqueName = _this._route.snapshot.paramMap.get('uniqueName');
            var clientApp = clientApps.find(function (q) { return q.uniqueName === uniqueName; });
            _this._fhirServerService.getServer(clientApp.server)
                .takeUntil(_this._unsubscribe)
                .subscribe(function (server) {
                var clientSettings = {
                    client_id: clientApp.clientId,
                    // Adding the scopes launch openid and profile
                    scope: clientApp.scopes + ' offline_access launch openid profile',
                    redirect_uri: clientApp.redirectUri,
                    state: uniqueName
                };
                // If the client application has a secret, adding it into the configuration
                if (clientApp.secret) {
                    clientSettings.secret = clientApp.secret;
                }
                var oauth2Configuration = {
                    client: clientSettings,
                    server: server.baseUrl
                };
                // The authorize method of the SMART on FHIR JS client, will take care of completing the OAuth2.0 Workflow
                FHIR.oauth2.authorize(oauth2Configuration, function (authError) {
                    _this._globalService.setError(authError);
                });
            });
        });
    };
    LaunchComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    LaunchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-launch',
            template: __webpack_require__(/*! ./launch.component.html */ "./src/app/components/misc-pages/launch/launch.component.html"),
            styles: [__webpack_require__(/*! ./launch.component.css */ "./src/app/components/misc-pages/launch/launch.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["ClientAppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["FhirServerService"]])
    ], LaunchComponent);
    return LaunchComponent;
}());



/***/ }),

/***/ "./src/app/components/misc-pages/misc-pages-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/misc-pages/misc-pages-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: MiscPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscPagesRoutingModule", function() { return MiscPagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/app/components/misc-pages/index.ts");
/* harmony import */ var _misc_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../misc/auth-guard */ "./src/app/misc/auth-guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'index', component: ___WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: 'state', component: ___WEBPACK_IMPORTED_MODULE_2__["StateComponent"], canActivate: [_misc_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"]] },
    { path: 'token', component: ___WEBPACK_IMPORTED_MODULE_2__["AccessTokenComponent"], canActivate: [_misc_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"]] },
    { path: 'user-profile', component: ___WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"], canActivate: [_misc_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"]] },
    { path: 'conformance', component: ___WEBPACK_IMPORTED_MODULE_2__["ConformanceComponent"], canActivate: [_misc_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"]] },
    { path: 'connect/:uniqueName', component: ___WEBPACK_IMPORTED_MODULE_2__["ConnectComponent"] },
    { path: 'launch/:uniqueName', component: ___WEBPACK_IMPORTED_MODULE_2__["LaunchComponent"] },
    { path: 'redirect/:uniqueName', component: ___WEBPACK_IMPORTED_MODULE_2__["RedirectComponent"] },
];
var MiscPagesRoutingModule = /** @class */ (function () {
    function MiscPagesRoutingModule() {
    }
    MiscPagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], MiscPagesRoutingModule);
    return MiscPagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/misc-pages/misc-pages.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/misc-pages/misc-pages.module.ts ***!
  \************************************************************/
/*! exports provided: MiscPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscPagesModule", function() { return MiscPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _access_token_access_token_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access-token/access-token.component */ "./src/app/components/misc-pages/access-token/access-token.component.ts");
/* harmony import */ var _conformance_conformance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conformance/conformance.component */ "./src/app/components/misc-pages/conformance/conformance.component.ts");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connect/connect.component */ "./src/app/components/misc-pages/connect/connect.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./src/app/components/misc-pages/index/index.component.ts");
/* harmony import */ var _launch_launch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./launch/launch.component */ "./src/app/components/misc-pages/launch/launch.component.ts");
/* harmony import */ var _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./redirect/redirect.component */ "./src/app/components/misc-pages/redirect/redirect.component.ts");
/* harmony import */ var _state_state_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state/state.component */ "./src/app/components/misc-pages/state/state.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/components/misc-pages/user-profile/user-profile.component.ts");
/* harmony import */ var _misc_pages_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./misc-pages-routing.module */ "./src/app/components/misc-pages/misc-pages-routing.module.ts");
/* harmony import */ var _all_material_all_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../all-material/all-material.module */ "./src/app/all-material/all-material.module.ts");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var _common_smart_common_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/smart-common.module */ "./src/app/components/common/smart-common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















/**
 * Modules containing all the components which does not directly make FHIR API Calls except ConformanceComponent
 */
var MiscPagesModule = /** @class */ (function () {
    function MiscPagesModule() {
    }
    MiscPagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _all_material_all_material_module__WEBPACK_IMPORTED_MODULE_11__["AllMaterialModule"],
                _common_smart_common_module__WEBPACK_IMPORTED_MODULE_14__["SmartCommonModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_12__["NgxJsonViewerModule"],
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_13__["AceEditorModule"],
                _misc_pages_routing_module__WEBPACK_IMPORTED_MODULE_10__["MiscPagesRoutingModule"]
            ],
            declarations: [
                _access_token_access_token_component__WEBPACK_IMPORTED_MODULE_2__["AccessTokenComponent"],
                _conformance_conformance_component__WEBPACK_IMPORTED_MODULE_3__["ConformanceComponent"],
                _connect_connect_component__WEBPACK_IMPORTED_MODULE_4__["ConnectComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
                _launch_launch_component__WEBPACK_IMPORTED_MODULE_6__["LaunchComponent"],
                _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_7__["RedirectComponent"],
                _state_state_component__WEBPACK_IMPORTED_MODULE_8__["StateComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"]
            ]
        })
    ], MiscPagesModule);
    return MiscPagesModule;
}());



/***/ }),

/***/ "./src/app/components/misc-pages/redirect/redirect.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/misc-pages/redirect/redirect.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border-width: 0px;\r\n    display: table;\r\n    width: 100%;\r\n}\r\n\r\n.inner {\r\n    text-align: center;\r\n    height: 300px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}"

/***/ }),

/***/ "./src/app/components/misc-pages/redirect/redirect.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/misc-pages/redirect/redirect.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"wrapper\">\r\n    <div class=\"inner\">\r\n      <button mat-raised-button color=\"warn\" routerLink=\"/index\">RECONNECT</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/misc-pages/redirect/redirect.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/misc-pages/redirect/redirect.component.ts ***!
  \**********************************************************************/
/*! exports provided: RedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectComponent", function() { return RedirectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component which handles the OAuth Token workflow and initializes the SMART Client
 * Initializes the SMART client and redirects to the Home page.
 */
var RedirectComponent = /** @class */ (function () {
    function RedirectComponent(_router, _authService, _globalService) {
        var _this = this;
        this._router = _router;
        this._authService = _authService;
        this._globalService = _globalService;
        /**
         * Callback method when an error occurs during the OAuth2.0 token workflow
         */
        this.oauth2ReadyErrback = function (error) {
            _this._globalService.setError({ error: error });
        };
        /**
         * Callback method once the SMART client has been initialized after the OAuth2.0 token workflow.
         */
        this.oauth2ReadyCallback = function (smartClient) {
            _this._authService.login();
        };
    }
    RedirectComponent.prototype.ngOnInit = function () {
        // Calling the SMART JS Client ready method to initialize the SMART Client
        FHIR.oauth2.ready(this.oauth2ReadyCallback, this.oauth2ReadyErrback);
    };
    RedirectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-redirect',
            template: __webpack_require__(/*! ./redirect.component.html */ "./src/app/components/misc-pages/redirect/redirect.component.html"),
            styles: [__webpack_require__(/*! ./redirect.component.css */ "./src/app/components/misc-pages/redirect/redirect.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]])
    ], RedirectComponent);
    return RedirectComponent;
}());



/***/ }),

/***/ "./src/app/components/misc-pages/state/state.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/misc-pages/state/state.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/misc-pages/state/state.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/misc-pages/state/state.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-object-viewer title=\"State\" [value]=\"state\"></app-object-viewer>"

/***/ }),

/***/ "./src/app/components/misc-pages/state/state.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/misc-pages/state/state.component.ts ***!
  \****************************************************************/
/*! exports provided: StateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return StateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component which displays the current stat of the SMART Client Application
 * Client
 * Server
 * Authorization Provider
 */
var StateComponent = /** @class */ (function () {
    function StateComponent(_zone, _smartService) {
        this._zone = _zone;
        this._smartService = _smartService;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    StateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._smartService.getClient()
            .takeUntil(this._unsubscribe)
            .subscribe(function (smartClient) {
            _this._zone.run(function () {
                _this.state = smartClient.state;
            });
        });
    };
    StateComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    StateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-state',
            template: __webpack_require__(/*! ./state.component.html */ "./src/app/components/misc-pages/state/state.component.html"),
            styles: [__webpack_require__(/*! ./state.component.css */ "./src/app/components/misc-pages/state/state.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _services__WEBPACK_IMPORTED_MODULE_2__["SmartService"]])
    ], StateComponent);
    return StateComponent;
}());



/***/ }),

/***/ "./src/app/components/misc-pages/user-profile/user-profile.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/misc-pages/user-profile/user-profile.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/misc-pages/user-profile/user-profile.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/misc-pages/user-profile/user-profile.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-object-viewer title=\"User Profile\" [value]=\"userProfile\"></app-object-viewer>"

/***/ }),

/***/ "./src/app/components/misc-pages/user-profile/user-profile.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/misc-pages/user-profile/user-profile.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component used to display the User Profile by parsing the JWT token provided in id_tokent
 */
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(_zone, _smartService, _helperService) {
        this._zone = _zone;
        this._smartService = _smartService;
        this._helperService = _helperService;
        this._unsubscribe = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /**
     * Read and parse the id_token, if it does exist in the tokenResponse obtained during the OAuth2.0 authorization workflow.
     */
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._smartService.getClient()
            .takeUntil(this._unsubscribe)
            .subscribe(function (smartClient) {
            _this._zone.run(function () {
                if (smartClient && smartClient.tokenResponse && smartClient.tokenResponse.id_token) {
                    var id_token = smartClient.tokenResponse.id_token;
                    _this.userProfile = _this._helperService.parseJwt(id_token);
                }
            });
        });
    };
    UserProfileComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/misc-pages/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/misc-pages/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _services__WEBPACK_IMPORTED_MODULE_2__["SmartService"], _services__WEBPACK_IMPORTED_MODULE_2__["HelperService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/edit-resource/edit-resource.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/resources/edit-resource/edit-resource.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resources/edit-resource/edit-resource.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/resources/edit-resource/edit-resource.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\r\n<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>\r\n    <div class=\"row\">\r\n      <span>{{resourceType}} ID: {{id}}</span>\r\n      <span style=\"float: right\">\r\n        <button color=\"warn\" mat-raised-button *ngIf=\"canDelete\" (click)=\"delete()\">Delete</button>\r\n      </span>\r\n    </div>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <div *ngIf=\"!resourceResponse\">\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Samples\" (selectionChange)=\"sampleSelected($event)\">\r\n          <mat-option *ngFor=\"let sample of samples\" [value]=\"sample.id\">\r\n            {{sample.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-tab-group [selectedIndex]=\"selectedTabIndex\">\r\n        <mat-tab *ngIf=\"resource\" label=\"JSON\">\r\n          <ace-editor mode=\"text\" [(text)]=\"code\" style=\"height:500px;\" [theme]=\"'eclipse'\" [autoUpdateContent]=\"true\"></ace-editor>\r\n        </mat-tab>\r\n        <mat-tab *ngIf=\"resource\" label=\"View\">\r\n          <ngx-json-viewer *ngIf=\"resource\" [json]=\"resource\"></ngx-json-viewer>\r\n        </mat-tab>\r\n        <mat-tab *ngIf=\"resourceRequest || resourceResponse\" label=\"Request-Response\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <h4>Request</h4>\r\n              <ace-editor mode=\"text\" [text]=\"codeResourceRequest\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <h4>Response</h4>\r\n              <ace-editor mode=\"text\" [text]=\"codeResourceResponse\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab *ngIf=\"error\" label=\"Error\">\r\n          <ace-editor mode=\"text\" *ngIf=\"error\" [text]=\"codeError\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-raised-button color=\"primary\" *ngIf=\"((!error && canUpdate && !resourceResponse) || (error && id==='new')) && !invalidJson\"\r\n      (click)=\"save()\">SAVE</button>\r\n    <button mat-raised-button color=\"warn\" routerLink=\"/resources/{{resourceType}}\">CANCEL</button>\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/resources/edit-resource/edit-resource.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/resources/edit-resource/edit-resource.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditResourceComponent", function() { return EditResourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _services_smart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/smart.service */ "./src/app/services/smart.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Component used to create/update a particular FHIR resource
 * FHIR resource fetched based on the resource type and the id.
 * POST/PUT request performed.
 * Can see and compare the request and response resource objects.
 */
var EditResourceComponent = /** @class */ (function () {
    function EditResourceComponent(_zone, _route, _helperService, _smartService, _dataService, _snackBar) {
        var _this = this;
        this._zone = _zone;
        this._route = _route;
        this._helperService = _helperService;
        this._smartService = _smartService;
        this._dataService = _dataService;
        this._snackBar = _snackBar;
        /**
         * Index of the Tab selected
         */
        this.selectedTabIndex = 0;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Callback on a Success on the POST/PUT request
         */
        this._success = function (response) {
            _this._zone.run(function () {
                _this.isLoading = false;
                // Updates the resource object recieved after the update
                if (response.data) {
                    _this.resourceResponse = response.data;
                }
                else {
                    _this.resourceResponse = response;
                }
                _this.selectedTabIndex = 2;
                _this.error = null;
                _this.openSnackBar('SUCCESS', 'OK');
            });
        };
        /**
         * Callback on an Error on the POST/PUT request
         */
        this._error = function (error) {
            _this._zone.run(function () {
                _this.isLoading = false;
                _this.error = error;
                _this.selectedTabIndex = 3;
                _this.openSnackBar('ERROR OCCURED', 'OK');
            });
        };
    }
    /**
     * Checks if the server has the capability to update the particular type of FHIR resource.
     * Fetch the resource from the FHIR server
     */
    EditResourceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resourceType = this._route.snapshot.paramMap.get('resourceType');
        this.id = this._route.snapshot.paramMap.get('id');
        this._smartService.getClient()
            .takeUntil(this._unsubscribe)
            .subscribe(function (smartClient) {
            _this._canPerform(smartClient);
            if (_this.id === 'new') {
                _this.resource = { resourceType: _this.resourceType };
            }
            else {
                _this._setResource(smartClient);
            }
        });
        this._dataService.getData(this.resourceType).subscribe(function (samples) {
            _this.samples = samples;
        });
    };
    /**
     * Fetches the resource based on the ID passed in the route parameter
     * @param smartClient Initialized SMART Client
     */
    EditResourceComponent.prototype._setResource = function (smartClient) {
        var _this = this;
        this.isLoading = true;
        var readParams = {
            id: this.id,
            type: this.resourceType
        };
        // Makes use of the SMART on FHIR JS Client read api method
        smartClient.api.read(readParams).then(function (response) {
            _this._zone.run(function () {
                _this.isLoading = false;
                _this.resource = response.data;
                _this.error = null;
            });
        }, function (error) {
            _this._zone.run(function () {
                _this.isLoading = false;
                _this.error = error;
            });
        });
    };
    /**
     * Method called by the Save button.
     * The resource object in the editor is passed on to the FHIR server
     * The SMART on FHIR JS Client create/update api is used.
     */
    EditResourceComponent.prototype.save = function () {
        var _this = this;
        this.error = null;
        this._smartService.getClient()
            .takeUntil(this._unsubscribe)
            .subscribe(function (smartClient) {
            _this._zone.run(function () {
                // Updates the resource object sent
                _this.resourceRequest = _this._helperService.clone(_this.resource);
                _this.isLoading = true;
                if (_this.id === 'new') {
                    smartClient.api.create({ resource: _this.resourceRequest }).then(_this._success, _this._error);
                }
                else {
                    smartClient.api.update({ resource: _this.resourceRequest }).then(_this._success, _this._error);
                }
            });
        });
    };
    /**
     * Method called by the delete button.
     * The resource object in the editor is passed on to the FHIR server
     * The SMART on FHIR JS Client delete api is used.
     */
    EditResourceComponent.prototype.delete = function () {
        var _this = this;
        this._smartService.getClient()
            .takeUntil(this._unsubscribe)
            .subscribe(function (smartClient) {
            _this._zone.run(function () {
                // Updates the resource object sent
                _this.resourceRequest = _this._helperService.clone(_this.resource);
                _this.isLoading = true;
                smartClient.api.delete({ resource: _this.resourceRequest }).then(_this._success, _this._error);
            });
        });
    };
    /**
     * Method checks if the server has the capability to perform the particular interaction on  the particular FHIR resource type and
     * the user has the required scope in context.
     * @param smartClient Initialized SMART Client
     */
    EditResourceComponent.prototype._canPerform = function (smartClient) {
        var _this = this;
        this._smartService.getConformance()
            .takeUntil(this._unsubscribe)
            .subscribe(function (conformance) {
            _this._zone.run(function () {
                var interaction = '';
                if (_this.id === 'new') {
                    interaction = 'create';
                }
                else {
                    interaction = 'update';
                }
                _this.canUpdate = _this._helperService.hasSupport(conformance, smartClient.tokenResponse.scope, _this.resourceType, interaction);
                if (_this.id !== 'new') {
                    _this.canDelete = _this._helperService.hasSupport(conformance, smartClient.tokenResponse.scope, _this.resourceType, 'delete');
                }
            });
        }, function (error) {
            _this._zone.run(function () {
                _this.error = error;
            });
        });
    };
    Object.defineProperty(EditResourceComponent.prototype, "code", {
        /**
         * Getter method used by the Ace Editor to get the value of the resource object
         */
        get: function () {
            return JSON.stringify(this.resource, null, 2);
        },
        /**
         * Setter method used by the Ace Editor to set the value of the resource object
         */
        set: function (v) {
            var _this = this;
            try {
                this.resource = JSON.parse(v);
                this.invalidJson = false;
            }
            catch (e) {
                this._zone.run(function () {
                    _this.invalidJson = true;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditResourceComponent.prototype, "codeError", {
        /**
         * Getter method used by the Ace Editor to get the value of the error object.
         */
        get: function () {
            return JSON.stringify(this.error, null, 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditResourceComponent.prototype, "codeResourceRequest", {
        /**
         * Getter method used by the Ace Editor to get the value of the resource request object sent.
         */
        get: function () {
            return JSON.stringify(this.resourceRequest, null, 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditResourceComponent.prototype, "codeResourceResponse", {
        /**
         * Getter method used by the Ace Editor to get the value of the response object.
         */
        get: function () {
            return JSON.stringify(this.resourceResponse, null, 2);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Called when a sample is selected from the dropdown.
     * @param e SelectedChanged Event
     */
    EditResourceComponent.prototype.sampleSelected = function (e) {
        var selectedId = e.value;
        this.resource = this.samples.find(function (q) { return q.id === selectedId; }).resource;
        this.error = null;
    };
    /**
     * Open a snack bar at the bottom to show a small message.
     * @param message Message to be shown
     * @param action Text to be shown on the Action Button
     */
    EditResourceComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    };
    EditResourceComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    EditResourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-resource',
            template: __webpack_require__(/*! ./edit-resource.component.html */ "./src/app/components/resources/edit-resource/edit-resource.component.html"),
            styles: [__webpack_require__(/*! ./edit-resource.component.css */ "./src/app/components/resources/edit-resource/edit-resource.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"],
            _services_smart_service__WEBPACK_IMPORTED_MODULE_3__["SmartService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], EditResourceComponent);
    return EditResourceComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/index.ts":
/*!***********************************************!*\
  !*** ./src/app/components/resources/index.ts ***!
  \***********************************************/
/*! exports provided: EditResourceComponent, PatientComponent, ResourcesTableComponent, ResourcesTableContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_resource_edit_resource_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-resource/edit-resource.component */ "./src/app/components/resources/edit-resource/edit-resource.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditResourceComponent", function() { return _edit_resource_edit_resource_component__WEBPACK_IMPORTED_MODULE_0__["EditResourceComponent"]; });

/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/components/resources/patient/patient.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return _patient_patient_component__WEBPACK_IMPORTED_MODULE_1__["PatientComponent"]; });

/* harmony import */ var _resources_table_resources_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources-table/resources-table.component */ "./src/app/components/resources/resources-table/resources-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourcesTableComponent", function() { return _resources_table_resources_table_component__WEBPACK_IMPORTED_MODULE_2__["ResourcesTableComponent"]; });

/* harmony import */ var _resources_table_container_resources_table_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources-table-container/resources-table-container.component */ "./src/app/components/resources/resources-table-container/resources-table-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourcesTableContainerComponent", function() { return _resources_table_container_resources_table_container_component__WEBPACK_IMPORTED_MODULE_3__["ResourcesTableContainerComponent"]; });







/***/ }),

/***/ "./src/app/components/resources/patient/patient.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/resources/patient/patient.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resources/patient/patient.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/resources/patient/patient.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-object-viewer title=\"Patient\" [value]=\"patient\"></app-object-viewer>\r\n<app-object-viewer *ngIf=\"error\" title=\"Error\" [value]=\"error\" hideView=\"true\"></app-object-viewer>"

/***/ }),

/***/ "./src/app/components/resources/patient/patient.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/resources/patient/patient.component.ts ***!
  \*******************************************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_smart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/smart.service */ "./src/app/services/smart.service.ts");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientComponent = /** @class */ (function () {
    function PatientComponent(_zone, _smartService) {
        this._zone = _zone;
        this._smartService = _smartService;
        this._unsubscribe = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Fetch the Patient Resource based on the Patient in Context
     */
    PatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._smartService.getClient()
            .takeUntil(this._unsubscribe)
            .subscribe(function (smartClient) {
            var api = smartClient.api;
            var searchParams = {
                type: 'Patient',
                patient: smartClient.patient.id,
            };
            // Makes use of the SMART on FHIR JS Client search api method
            api.search(searchParams).then(function (response) {
                _this._zone.run(function () {
                    _this.patient = response.data;
                    _this.error = null;
                });
            }, function (error) {
                _this._zone.run(function () {
                    _this.error = error;
                });
            });
        });
    };
    PatientComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    PatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/components/resources/patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.css */ "./src/app/components/resources/patient/patient.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _services_smart_service__WEBPACK_IMPORTED_MODULE_1__["SmartService"]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/resources-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/resources/resources-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ResourcesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesRoutingModule", function() { return ResourcesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/app/components/resources/index.ts");
/* harmony import */ var _misc_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../misc/auth-guard */ "./src/app/misc/auth-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'resources/Patient', component: ___WEBPACK_IMPORTED_MODULE_3__["PatientComponent"], canActivate: [_misc_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGaurd"]] },
    { path: 'resources/:resourceType', component: ___WEBPACK_IMPORTED_MODULE_3__["ResourcesTableContainerComponent"], canActivate: [_misc_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGaurd"]] },
    { path: 'resources/:resourceType/:id', component: ___WEBPACK_IMPORTED_MODULE_3__["EditResourceComponent"], canActivate: [_misc_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGaurd"]] },
];
var ResourcesRoutingModule = /** @class */ (function () {
    function ResourcesRoutingModule() {
    }
    ResourcesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ResourcesRoutingModule);
    return ResourcesRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/resources/resources-table-container/resources-table-container.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/resources/resources-table-container/resources-table-container.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resources/resources-table-container/resources-table-container.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/resources/resources-table-container/resources-table-container.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\r\n<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 col-xs-1\">\r\n        <span>{{resourceType}}</span>\r\n      </div>\r\n      <div class=\"col-xs-3 col-md-9\">\r\n      </div>\r\n      <button *ngIf=\"canCreate\" mat-raised-button color=\"primary\" routerLink=\"/resources/{{resourceType}}/new\">Add</button>\r\n    </div>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Filter\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Specify the filter as JSON [\r\n            <a href=\"https://github.com/FHIR/fhir.js/blob/master/README.md#search\">Reference</a>]\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <div class=\"min-padding\">\r\n          Search Parameters Supported\r\n          <mat-list role=\"list\">\r\n            <mat-list-item role=\"listitem\" *ngFor=\"let param of searchParams\" matTooltip=\"{{param.documentation}}\">\r\n              <h4 mat-line>{{param.name}}</h4>\r\n              <p mat-line>{{param.type}}</p>\r\n              <div>{{param.documentation}}</div>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </div>\r\n        <ace-editor mode=\"text\" [(text)]=\"queryCode\" style=\"height:100px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n        <div class=\"min-padding\">\r\n          <span class=\"min-padding\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"applyFilter()\" *ngIf=\"!invalidJson\">Apply</button>\r\n          </span>\r\n          <button mat-raised-button color=\"warn\" (click)=\"reset()\">Reset</button>\r\n        </div>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n    <app-resources-table *ngIf=\"!error\" [bundle]=\"resources\" [resourceType]=\"resourceType\"></app-resources-table>\r\n  </mat-card-content>\r\n</mat-card>\r\n<app-object-viewer *ngIf=\"error\" title=\"Error\" [value]=\"error\" hideView=\"true\"></app-object-viewer>"

/***/ }),

/***/ "./src/app/components/resources/resources-table-container/resources-table-container.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/resources/resources-table-container/resources-table-container.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ResourcesTableContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesTableContainerComponent", function() { return ResourcesTableContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _services_smart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/smart.service */ "./src/app/services/smart.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Component which fetches the FHIR resources based on the route parameter FHIR resource type
 * Option to specify the query object
 * Filter lists all the Search parameters supported by the FHIR server for this resource type
 */
var ResourcesTableContainerComponent = /** @class */ (function () {
    function ResourcesTableContainerComponent(_helperService, _route, _zone, _smartService) {
        this._helperService = _helperService;
        this._route = _route;
        this._zone = _zone;
        this._smartService = _smartService;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    /**
     * List the Supported Search parameters in the filter and performs the search based on the FHIR Resource type
     * and the patient in context.
     */
    ResourcesTableContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (val) {
            _this.resourceType = _this._route.snapshot.paramMap.get('resourceType');
            _this._smartService.getClient()
                .takeUntil(_this._unsubscribe)
                .subscribe(function (smartClient) {
                _this._setSupportedSearchParams(smartClient);
                _this._searchByPatientId(smartClient);
                _this._canPerform(smartClient);
            });
        });
    };
    /**
     * Set the search parameters supported by the resource type in the filter by parsing the Capability statement of the FHIR Server
     * @param smartClient Initialized SMART Client
     */
    ResourcesTableContainerComponent.prototype._setSupportedSearchParams = function (smartClient) {
        var _this = this;
        this._smartService.getConformance()
            .takeUntil(this._unsubscribe)
            .subscribe(function (conformance) {
            _this._zone.run(function () {
                _this.searchParams = _this._helperService.searchParamsSupported(conformance, _this.resourceType);
            });
        });
    };
    /**
     * Perform the FHIR API Search call based on the resource type and the patient in context
     * @param smartClient Initialized SMART Client
     */
    ResourcesTableContainerComponent.prototype._searchByPatientId = function (smartClient) {
        this.query = {
            patient: smartClient.patient.id
        };
        this._search(smartClient);
    };
    /**
     * Perform the FHIR API Search call based on the resource type and the query object set via the filter
     * @param smartClient Initialized SMART Client
     */
    ResourcesTableContainerComponent.prototype._search = function (smartClient) {
        var _this = this;
        console.log(this.query);
        this.isLoading = true;
        var searchParams = {
            type: this.resourceType,
            query: this.query
        };
        // Makes use of the SMART on FHIR JS Client search api method
        smartClient.api.search(searchParams).then(function (response) {
            _this._zone.run(function () {
                _this.isLoading = false;
                _this.resources = response.data;
                _this.error = null;
            });
        }, function (error) {
            _this._zone.run(function () {
                _this.isLoading = false;
                _this.error = error;
            });
        });
    };
    /**
     * Called by the Apply button, to apply the query object in the editor and perform the FHIR API Call
     */
    ResourcesTableContainerComponent.prototype.applyFilter = function () {
        var _this = this;
        this._smartService.getClient()
            .takeUntil(this._unsubscribe)
            .subscribe(function (smartClient) {
            _this._search(smartClient);
        });
    };
    /**
     * Called by the Reset button in the filter to clear the current query object and reset.
     */
    ResourcesTableContainerComponent.prototype.reset = function () {
        var _this = this;
        this._smartService.getClient()
            .takeUntil(this._unsubscribe)
            .subscribe(function (smartClient) {
            _this._searchByPatientId(smartClient);
        });
    };
    Object.defineProperty(ResourcesTableContainerComponent.prototype, "queryCode", {
        /**
         * Getter method used by the Ace Editor to get the value of the query object
         */
        get: function () {
            return JSON.stringify(this.query, null, 2);
        },
        /**
         * Setter method used by the Ace Editor to set the value of the query object
         */
        set: function (v) {
            try {
                this.query = JSON.parse(v);
                this.invalidJson = false;
            }
            catch (e) {
                this.invalidJson = true;
                console.log('error occored while you were typing the JSON');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method checks if the server has the capability to perform the particular interaction on  the particular FHIR resource type and
     * the user has the required scope in context.
     * @param smartClient Initialized SMART Client
     */
    ResourcesTableContainerComponent.prototype._canPerform = function (smartClient) {
        var _this = this;
        this._smartService.getConformance()
            .takeUntil(this._unsubscribe)
            .subscribe(function (conformance) {
            _this._zone.run(function () {
                _this.canCreate = _this._helperService.hasSupport(conformance, smartClient.tokenResponse.scope, _this.resourceType, 'create');
                console.log(_this.canCreate);
            });
        }, function (error) {
            _this._zone.run(function () {
                _this.error = error;
            });
        });
    };
    ResourcesTableContainerComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    ResourcesTableContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resources-table-container',
            template: __webpack_require__(/*! ./resources-table-container.component.html */ "./src/app/components/resources/resources-table-container/resources-table-container.component.html"),
            styles: [__webpack_require__(/*! ./resources-table-container.component.css */ "./src/app/components/resources/resources-table-container/resources-table-container.component.css")]
        }),
        __metadata("design:paramtypes", [_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _services_smart_service__WEBPACK_IMPORTED_MODULE_3__["SmartService"]])
    ], ResourcesTableContainerComponent);
    return ResourcesTableContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/resources-table/resources-table.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/resources/resources-table/resources-table.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resources/resources-table/resources-table.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/resources/resources-table/resources-table.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n  <mat-tab label=\"LIST\">\r\n    <mat-list *ngIf=\"bundle\">\r\n      <div>Total Number of resources on the Server:{{bundle.total}}</div>\r\n      <div *ngIf=\"bundle.entry\">Number of resources returned by the Query:{{bundle.entry.length}}</div>\r\n      <div *ngFor=\"let entry of bundle.entry\">\r\n        <div *ngIf=\"entry.resource.resourceType !== 'OperationOutcome'\">\r\n          <mat-list-item>\r\n            <p mat-line>ID: {{entry.resource.id}} </p>\r\n            <button mat-raised-button color=\"primary\" routerLink=\"/resources/{{entry.resource.resourceType}}/{{entry.resource.id}}\">View</button>\r\n          </mat-list-item>\r\n        </div>\r\n      </div>\r\n    </mat-list>\r\n    <div *ngIf=\"bundle && bundle.total == 0\">\r\n      There are no resources of type {{resourceType}}\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"JSON\">\r\n    <ace-editor mode=\"text\" [text]=\"codeBundle\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n  </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/components/resources/resources-table/resources-table.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/resources/resources-table/resources-table.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ResourcesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesTableComponent", function() { return ResourcesTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourcesTableComponent = /** @class */ (function () {
    function ResourcesTableComponent() {
    }
    ResourcesTableComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ResourcesTableComponent.prototype, "codeBundle", {
        /**
         * Getter method used by the Ace Editor to get the value of the bundle object
         */
        get: function () {
            return JSON.stringify(this.bundle, null, 2);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResourcesTableComponent.prototype, "bundle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ResourcesTableComponent.prototype, "resourceType", void 0);
    ResourcesTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resources-table',
            template: __webpack_require__(/*! ./resources-table.component.html */ "./src/app/components/resources/resources-table/resources-table.component.html"),
            styles: [__webpack_require__(/*! ./resources-table.component.css */ "./src/app/components/resources/resources-table/resources-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourcesTableComponent);
    return ResourcesTableComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/resources.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/resources/resources.module.ts ***!
  \**********************************************************/
/*! exports provided: ResourcesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesModule", function() { return ResourcesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/app/components/resources/index.ts");
/* harmony import */ var _resources_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources-routing.module */ "./src/app/components/resources/resources-routing.module.ts");
/* harmony import */ var _all_material_all_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../all-material/all-material.module */ "./src/app/all-material/all-material.module.ts");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var _common_smart_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/smart-common.module */ "./src/app/components/common/smart-common.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Angular Module containing all the components which are used by the routes under '/resources'
 */
var ResourcesModule = /** @class */ (function () {
    function ResourcesModule() {
    }
    ResourcesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _all_material_all_material_module__WEBPACK_IMPORTED_MODULE_4__["AllMaterialModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_5__["NgxJsonViewerModule"],
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_6__["AceEditorModule"],
                _resources_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResourcesRoutingModule"],
                _common_smart_common_module__WEBPACK_IMPORTED_MODULE_7__["SmartCommonModule"]
            ],
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_2__["EditResourceComponent"],
                ___WEBPACK_IMPORTED_MODULE_2__["PatientComponent"],
                ___WEBPACK_IMPORTED_MODULE_2__["ResourcesTableComponent"],
                ___WEBPACK_IMPORTED_MODULE_2__["ResourcesTableContainerComponent"]
            ]
        })
    ], ResourcesModule);
    return ResourcesModule;
}());



/***/ }),

/***/ "./src/app/data/client-apps.ts":
/*!*************************************!*\
  !*** ./src/app/data/client-apps.ts ***!
  \*************************************/
/*! exports provided: CLIENT_APPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_APPS", function() { return CLIENT_APPS; });
/**
 * List of SMART on FHIR Client Applications defined in the SAMPLE APPLICATION
 */
var CLIENT_APPS = [
    {
        name: 'CHBase PPE - Sample App - Live Demo',
        uniqueName: 'sampleappdocs',
        clientId: '7be9756f-1cb2-4c7c-9b8c-b2acc2325994',
        redirectUri: 'https://chbase.github.io/smart-ng-fhir-app/redirect/sampleappdocs',
        launchUrl: 'https://chbase.github.io/smart-ng-fhir-app/launch/sampleappdocs',
        scopes: 'patient/*.*',
        standalonePatient: true,
        ehrLaunch: true,
        server: 'chbaseppe',
        secret: 'c55a4f55-c639-4995-8696-d8bbd9c43db7'
    }
];


/***/ }),

/***/ "./src/app/data/fhir-servers.ts":
/*!**************************************!*\
  !*** ./src/app/data/fhir-servers.ts ***!
  \**************************************/
/*! exports provided: FHIR_SERVERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FHIR_SERVERS", function() { return FHIR_SERVERS; });
/**
 * List of SMART on FHIR Servers defined in the SAMPLE APPLICATION
 */
var FHIR_SERVERS = [
    {
        uniqueName: 'chbaseppe',
        name: 'CHBase PPE',
        baseUrl: 'https://platform.ppe.chbase.com/api/fhir',
        information: {
            patientStandalone: [
                'Application Configuration Center: https://acc.ppe.chbase.com',
                'CHBase Shell: https://shell.ppe.chbase.com',
                'Developer Portal: https://developer.chbase.com/FHIR',
            ],
            ehrLaunch: [
                'Login to the CHBase Shell and visit the App directory page',
                'Click on Learn more about the app',
                'Click on Go to application (external link)'
            ]
        },
        supportsAccessTypes: true
    }
];


/***/ }),

/***/ "./src/app/data/resources/allergyIntolerances.ts":
/*!*******************************************************!*\
  !*** ./src/app/data/resources/allergyIntolerances.ts ***!
  \*******************************************************/
/*! exports provided: ALLERGY_INTOLERANCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLERGY_INTOLERANCES", function() { return ALLERGY_INTOLERANCES; });
// tslint:disable:quotemark
var ALLERGY_INTOLERANCES = [
    {
        id: 1,
        name: 'General Example',
        resource: {
            "resourceType": "AllergyIntolerance",
            "clinicalStatus": "active",
            "category": [
                "food"
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "227493005",
                        "display": "Cashew nuts"
                    }
                ]
            },
            "onsetDateTime": "2004",
            "asserter": {
                "reference": "#practitioner-00a3a874-74cd-4f1c-a5dc-cab976893ae7"
            },
            "reaction": [
                {
                    "manifestation": [
                        {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "39579001",
                                    "display": "Anaphylactic reaction"
                                }
                            ]
                        }
                    ]
                }
            ],
            "contained": [
                {
                    "resourceType": "Practitioner",
                    "id": "#practitioner-00a3a874-74cd-4f1c-a5dc-cab976893ae7",
                    "extension": [
                        {
                            "url": "person-organisation",
                            "valueString": "Care Hospitals Inc"
                        }
                    ],
                    "identifier": [
                        {
                            "value": "00a3a874-74cd-4f1c-a5dc-cab976893ae7"
                        }
                    ],
                    "name": [
                        {
                            "text": "John Doe",
                            "family": "Doe",
                            "given": [
                                "John",
                                "T"
                            ]
                        }
                    ],
                    "address": [
                        {
                            "use": "work",
                            "text": "Care Hospitals Inc"
                        },
                        {
                            "text": "business address",
                            "line": [
                                "1 Back Lane"
                            ],
                            "city": "Holmfirth",
                            "district": "HUDDERSFIELD",
                            "postalCode": "HD7 1HQ",
                            "country": "UK"
                        }
                    ],
                    "qualification": [
                        {
                            "code": {
                                "text": "Certified Medical Assistant"
                            }
                        }
                    ]
                }
            ]
        }
    }
];


/***/ }),

/***/ "./src/app/data/resources/conditions.ts":
/*!**********************************************!*\
  !*** ./src/app/data/resources/conditions.ts ***!
  \**********************************************/
/*! exports provided: CONDITIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONDITIONS", function() { return CONDITIONS; });
// tslint:disable:quotemark
var CONDITIONS = [
    {
        id: 1,
        name: 'General Condition Example',
        resource: {
            "resourceType": "Condition",
            "clinicalStatus": "active",
            "code": {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "39065001",
                        "display": "Burn of ear"
                    }
                ],
                "text": "Burnt Ear"
            },
            "onsetDateTime": "2012-05-24",
            "abatementDateTime": "2012-05-26",
            "note": {
                "text": "Condition Note"
            }
        }
    }
];


/***/ }),

/***/ "./src/app/data/resources/diagnosticReports.ts":
/*!*****************************************************!*\
  !*** ./src/app/data/resources/diagnosticReports.ts ***!
  \*****************************************************/
/*! exports provided: DIAGNOSTIC_REPORTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIAGNOSTIC_REPORTS", function() { return DIAGNOSTIC_REPORTS; });
// tslint:disable:quotemark
var DIAGNOSTIC_REPORTS = [
    {
        id: 1,
        name: 'General Example',
        resource: {
            "resourceType": "DiagnosticReport",
            "contained": [
                {
                    "resourceType": "Observation",
                    "id": "r1",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "718-7",
                                "display": "Hemoglobin [Mass/volume] in Blood"
                            }
                        ],
                        "text": "Haemoglobin"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 176,
                        "unit": "g/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "g/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 135,
                                "unit": "g/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "g/L"
                            },
                            "high": {
                                "value": 180,
                                "unit": "g/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "g/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r2",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "789-8",
                                "display": "Erythrocytes [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "Red Cell Count"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 5.9,
                        "unit": "x10*12/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*12/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 4.2,
                                "unit": "x10*12/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*12/L"
                            },
                            "high": {
                                "value": 6.0,
                                "unit": "x10*12/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*12/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r3",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "4544-3",
                                "display": "Hematocrit [Volume Fraction] of Blood by Automated count"
                            }
                        ],
                        "text": "Haematocrit"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 55,
                        "unit": "%"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 38,
                                "unit": "%"
                            },
                            "high": {
                                "value": 52,
                                "unit": "%"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r4",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "787-2",
                                "display": "Erythrocyte mean corpuscular volume [Entitic volume] by Automated count"
                            }
                        ],
                        "text": "Mean Cell Volume"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 99,
                        "unit": "fL",
                        "system": "http://unitsofmeasure.org",
                        "code": "fL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 80,
                                "unit": "fL",
                                "system": "http://unitsofmeasure.org",
                                "code": "fL"
                            },
                            "high": {
                                "value": 98,
                                "unit": "fL",
                                "system": "http://unitsofmeasure.org",
                                "code": "fL"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r5",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "785-6",
                                "display": "Erythrocyte mean corpuscular hemoglobin [Entitic mass] by Automated count"
                            }
                        ],
                        "text": "Mean Cell Haemoglobin"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36,
                        "unit": "pg",
                        "system": "http://unitsofmeasure.org",
                        "code": "pg"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 27,
                                "unit": "pg",
                                "system": "http://unitsofmeasure.org",
                                "code": "pg"
                            },
                            "high": {
                                "value": 35,
                                "unit": "pg",
                                "system": "http://unitsofmeasure.org",
                                "code": "pg"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r6",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "777-3",
                                "display": "Platelets [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "Platelet Count"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 444,
                        "unit": "x10*9/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*9/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 150,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            },
                            "high": {
                                "value": 450,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r7",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "6690-2",
                                "display": "Leukocytes [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "White Cell Count"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 4.6,
                        "unit": "x10*9/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*9/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 4.0,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            },
                            "high": {
                                "value": 11.0,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r8",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "770-8",
                                "display": "Neutrophils/100 leukocytes in Blood by Automated count"
                            }
                        ],
                        "text": "Neutrophils"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "%",
                        "system": "http://unitsofmeasure.org",
                        "code": "%"
                    }
                },
                {
                    "resourceType": "Observation",
                    "id": "r9",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "751-8",
                                "display": "Neutrophils [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "Neutrophils"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.9,
                        "unit": "x10*9/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*9/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 2.0,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            },
                            "high": {
                                "value": 7.5,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r10",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "736-9",
                                "display": "Lymphocytes/100 leukocytes in Blood by Automated count"
                            }
                        ],
                        "text": "Lymphocytes"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "%",
                        "system": "http://unitsofmeasure.org",
                        "code": "%"
                    }
                },
                {
                    "resourceType": "Observation",
                    "id": "r11",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "731-0",
                                "display": "Lymphocytes [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "Lymphocytes"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.9,
                        "unit": "x10*9/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*9/L"
                    },
                    "interpretation": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/v2/0078",
                                "code": "L"
                            }
                        ]
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 1.1,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            },
                            "high": {
                                "value": 4.0,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r12",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "5905-5",
                                "display": "Monocytes/100 leukocytes in Blood by Automated count"
                            }
                        ],
                        "text": "Monocytes"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "%",
                        "system": "http://unitsofmeasure.org",
                        "code": "%"
                    }
                },
                {
                    "resourceType": "Observation",
                    "id": "r13",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "742-7",
                                "display": "Monocytes [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "Monocytes"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.9,
                        "unit": "x10*9/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*9/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0.2,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            },
                            "high": {
                                "value": 1.0,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r14",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "713-8",
                                "display": "Eosinophils/100 leukocytes in Blood by Automated count"
                            }
                        ],
                        "text": "Eosinophils"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "%",
                        "system": "http://unitsofmeasure.org",
                        "code": "%"
                    }
                },
                {
                    "resourceType": "Observation",
                    "id": "r15",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "711-2",
                                "display": "Eosinophils [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "Eosinophils"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.92,
                        "unit": "x10*9/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*9/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0.04,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            },
                            "high": {
                                "value": 0.40,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r16",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "706-2",
                                "display": "Basophils/100 leukocytes in Blood by Automated count"
                            }
                        ],
                        "text": "Basophils"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "%",
                        "system": "http://unitsofmeasure.org",
                        "code": "%"
                    }
                },
                {
                    "resourceType": "Observation",
                    "id": "r17",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "704-7",
                                "display": "Basophils [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "Basophils"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.92,
                        "unit": "x10*9/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*9/L"
                    },
                    "referenceRange": [
                        {
                            "high": {
                                "value": 0.21,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            }
                        }
                    ]
                }
            ],
            "issued": "2011-03-04T11:45:33+11:00",
            "result": [
                {
                    "reference": "#r1"
                },
                {
                    "reference": "#r2"
                },
                {
                    "reference": "#r3"
                },
                {
                    "reference": "#r4"
                },
                {
                    "reference": "#r5"
                },
                {
                    "reference": "#r6"
                },
                {
                    "reference": "#r7"
                },
                {
                    "reference": "#r8"
                },
                {
                    "reference": "#r9"
                },
                {
                    "reference": "#r10"
                },
                {
                    "reference": "#r11"
                },
                {
                    "reference": "#r12"
                },
                {
                    "reference": "#r13"
                },
                {
                    "reference": "#r14"
                },
                {
                    "reference": "#r15"
                },
                {
                    "reference": "#r16"
                },
                {
                    "reference": "#r17"
                }
            ]
        }
    }
];


/***/ }),

/***/ "./src/app/data/resources/documentReferences.ts":
/*!******************************************************!*\
  !*** ./src/app/data/resources/documentReferences.ts ***!
  \******************************************************/
/*! exports provided: DOCUMENT_REFERENCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT_REFERENCES", function() { return DOCUMENT_REFERENCES; });
// tslint:disable:quotemark
var DOCUMENT_REFERENCES = [
    {
        id: 1,
        name: 'CCR',
        resource: {
            "resourceType": "DocumentReference",
            "id": "example",
            "status": "current",
            "type": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "51899-3",
                        "display": "Details Document"
                    }
                ]
            },
            "indexed": "2005-12-24T09:43:41+05:30",
            "content": [
                {
                    "attachment": {
                        "contentType": "application/xml",
                        // tslint:disable-next-line:max-line-length
                        "data": "PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8Q2xpbmljYWxEb2N1bWVudCB0ZW1wbGF0ZUlkPSIyLjE2Ljg0MC4xLjExMzg4My4zLjI3LjE3NzYiPg0KCTwhLS0gDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICBDREEgSGVhZGVyDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KLS0+DQoJPGlkIGV4dGVuc2lvbj0iYzI2NiIgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMy45MzMiLz4NCgk8Y29kZSBjb2RlPSIxMTQ4OC00IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjEiIGRpc3BsYXlOYW1lPSJDb25zdWx0YXRpb24gbm90ZSIvPg0KCTx0aXRsZT5Hb29kIEhlYWx0aCBDbGluaWMgQ29uc3VsdGF0aW9uIE5vdGU8L3RpdGxlPg0KCTxlZmZlY3RpdmVUaW1lIHZhbHVlPSIyMDAwMDQwNyIvPg0KCTxjb25maWRlbnRpYWxpdHlDb2RlIGNvZGU9Ik4iIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjUuMjUiLz4NCgk8c2V0SWQgZXh0ZW5zaW9uPSJCQjM1IiByb290PSIyLjE2Ljg0MC4xLjExMzg4My4zLjkzMyIvPg0KCTx2ZXJzaW9uTnVtYmVyIHZhbHVlPSIyIi8+DQoJPGxlZ2FsQXV0aGVudGljYXRvcj4NCgkJPHRpbWUgdmFsdWU9IjIwMDAwNDA4Ii8+DQoJCTxzaWduYXR1cmVDb2RlIGNvZGU9IlMiLz4NCgkJPGFzc2lnbmVkRW50aXR5Pg0KCQkJPGlkIGV4dGVuc2lvbj0iS1AwMDAxNyIgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMy45MzMiLz4NCgkJCTxhc3NpZ25lZFBlcnNvbj4NCgkJCQk8bmFtZT4NCgkJCQkJPGdpdmVuPlJvYmVydDwvZ2l2ZW4+DQoJCQkJCTxmYW1pbHk+RG9saW48L2ZhbWlseT4NCgkJCQkJPHN1ZmZpeD5NRDwvc3VmZml4Pg0KCQkJCTwvbmFtZT4NCgkJCTwvYXNzaWduZWRQZXJzb24+DQoJCQk8cmVwcmVzZW50ZWRPcmdhbml6YXRpb24+DQoJCQkJPGlkIGV4dGVuc2lvbj0iTTM0NSIgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMy45MzMiLz4NCgkJCTwvcmVwcmVzZW50ZWRPcmdhbml6YXRpb24+DQoJCTwvYXNzaWduZWRFbnRpdHk+DQoJPC9sZWdhbEF1dGhlbnRpY2F0b3I+DQoJPGF1dGhvcj4NCgkJPHRpbWUgdmFsdWU9IjIwMDAwNDA3Ii8+DQoJCTxhc3NpZ25lZEF1dGhvcj4NCgkJCTxpZCBleHRlbnNpb249IktQMDAwMTciIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjMuOTMzIi8+DQoJCQk8YXNzaWduZWRQZXJzb24+DQoJCQkJPG5hbWU+DQoJCQkJCTxnaXZlbj5Sb2JlcnQ8L2dpdmVuPg0KCQkJCQk8ZmFtaWx5PkRvbGluPC9mYW1pbHk+DQoJCQkJCTxzdWZmaXg+TUQ8L3N1ZmZpeD4NCgkJCQk8L25hbWU+DQoJCQk8L2Fzc2lnbmVkUGVyc29uPg0KCQkJPHJlcHJlc2VudGVkT3JnYW5pemF0aW9uPg0KCQkJCTxpZCBleHRlbnNpb249Ik0zNDUiIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjMuOTMzIi8+DQoJCQk8L3JlcHJlc2VudGVkT3JnYW5pemF0aW9uPg0KCQk8L2Fzc2lnbmVkQXV0aG9yPg0KCTwvYXV0aG9yPg0KCTxjdXN0b2RpYW4+DQoJCTxhc3NpZ25lZEN1c3RvZGlhbj4NCgkJCTxyZXByZXNlbnRlZEN1c3RvZGlhbk9yZ2FuaXphdGlvbj4NCgkJCQk8aWQgZXh0ZW5zaW9uPSJNMzQ1IiByb290PSIyLjE2Ljg0MC4xLjExMzg4My4zLjkzMyIvPg0KCQkJCTxuYW1lPkdvb2QgSGVhbHRoIENsaW5pYzwvbmFtZT4NCgkJCTwvcmVwcmVzZW50ZWRDdXN0b2RpYW5Pcmdhbml6YXRpb24+DQoJCTwvYXNzaWduZWRDdXN0b2RpYW4+DQoJPC9jdXN0b2RpYW4+DQoJPHJlY29yZFRhcmdldD4NCgkJPHBhdGllbnRSb2xlPg0KCQkJPGlkIGV4dGVuc2lvbj0iMTIzNDUiIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjMuOTMzIi8+DQoJCQk8cGF0aWVudFBhdGllbnQ+DQoJCQkJPG5hbWU+DQoJCQkJCTxnaXZlbj5IZW5yeTwvZ2l2ZW4+DQoJCQkJCTxmYW1pbHk+TGV2aW48L2ZhbWlseT4NCgkJCQkJPHN1ZmZpeD50aGUgN3RoPC9zdWZmaXg+DQoJCQkJPC9uYW1lPg0KCQkJCTxhZG1pbmlzdHJhdGl2ZUdlbmRlckNvZGUgY29kZT0iTSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNS4xIi8+DQoJCQkJPGJpcnRoVGltZSB2YWx1ZT0iMTkzMjA5MjQiLz4NCgkJCTwvcGF0aWVudFBhdGllbnQ+DQoJCQk8cHJvdmlkZXJPcmdhbml6YXRpb24+DQoJCQkJPGlkIGV4dGVuc2lvbj0iTTM0NSIgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMy45MzMiLz4NCgkJCTwvcHJvdmlkZXJPcmdhbml6YXRpb24+DQoJCTwvcGF0aWVudFJvbGU+DQoJPC9yZWNvcmRUYXJnZXQ+DQoJPHJlbGF0ZWREb2N1bWVudCB0eXBlQ29kZT0iUlBMQyI+DQoJCTxwYXJlbnREb2N1bWVudD4NCgkJCTxpZCBleHRlbnNpb249ImExMjMiIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjMuOTMzIi8+DQoJCQk8c2V0SWQgZXh0ZW5zaW9uPSJCQjM1IiByb290PSIyLjE2Ljg0MC4xLjExMzg4My4zLjkzMyIvPg0KCQkJPHZlcnNpb25OdW1iZXIgdmFsdWU9IjEiLz4NCgkJPC9wYXJlbnREb2N1bWVudD4NCgk8L3JlbGF0ZWREb2N1bWVudD4NCgk8Y29tcG9uZW50T2Y+DQoJCTxjdXJyZW50RW5jb3VudGVyPg0KCQkJPGlkIGV4dGVuc2lvbj0iS1BFTkMxMzMyIiByb290PSIyLjE2Ljg0MC4xLjExMzg4My4zLjkzMyIvPg0KCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3Ii8+DQoJCQk8bG9jYXRpb24+DQoJCQkJPGhlYWx0aENhcmVGYWNpbGl0eSBjbGFzc0NvZGU9IkRTRExPQyI+DQoJCQkJCTxjb2RlIGNvZGU9IkdJTSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNS4xMDU4OCIgZGlzcGxheU5hbWU9IkdlbmVyYWwgaW50ZXJuYWwgbWVkaWNpbmUgY2xpbmljIi8+DQoJCQkJPC9oZWFsdGhDYXJlRmFjaWxpdHk+DQoJCQk8L2xvY2F0aW9uPg0KCQkJPGVuY291bnRlclBlcmZvcm1lciB0eXBlQ29kZT0iQ09OIj4NCgkJCQk8dGltZSB2YWx1ZT0iMjAwMDA0MDciLz4NCgkJCQk8YXNzaWduZWRFbnRpdHk+DQoJCQkJCTxpZCBleHRlbnNpb249IktQMDAwMTciIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjMuOTMzIi8+DQoJCQkJCTxhc3NpZ25lZFBlcnNvbj4NCgkJCQkJCTxuYW1lPg0KCQkJCQkJCTxnaXZlbj5Sb2JlcnQ8L2dpdmVuPg0KCQkJCQkJCTxmYW1pbHk+RG9saW48L2ZhbWlseT4NCgkJCQkJCQk8c3VmZml4Pk1EPC9zdWZmaXg+DQoJCQkJCQk8L25hbWU+DQoJCQkJCTwvYXNzaWduZWRQZXJzb24+DQoJCQkJCTxyZXByZXNlbnRlZE9yZ2FuaXphdGlvbj4NCgkJCQkJCTxpZCBleHRlbnNpb249Ik0zNDUiIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjMuOTMzIi8+DQoJCQkJCTwvcmVwcmVzZW50ZWRPcmdhbml6YXRpb24+DQoJCQkJPC9hc3NpZ25lZEVudGl0eT4NCgkJCTwvZW5jb3VudGVyUGVyZm9ybWVyPg0KCQk8L2N1cnJlbnRFbmNvdW50ZXI+DQoJPC9jb21wb25lbnRPZj4NCgk8IS0tIA0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgQ0RBIEJvZHkNCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQotLT4NCgk8Y29tcG9uZW50Pg0KCQk8U3RydWN0dXJlZEJvZHk+DQoJCQk8IS0tIA0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgSGlzdG9yeSBvZiBQcmVzZW50IElsbG5lc3Mgc2VjdGlvbg0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCi0tPg0KCQkJPGNvbXBvbmVudD4NCgkJCQk8c2VjdGlvbj4NCgkJCQkJPGNvZGUgY29kZT0iMTAxNjQtMiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4xIiBjb2RlU3lzdGVtTmFtZT0iTE9JTkMiLz4NCgkJCQkJPHRpdGxlPkhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzPC90aXRsZT4NCgkJCQkJPHRleHQ+SGVucnkgTGV2aW4sIHRoZSA3dGggaXMgYSA2NyB5ZWFyIG9sZCBtYWxlIHJlZmVycmVkIGZvciBmdXJ0aGVyIGFzdGhtYSBtYW5hZ2VtZW50LiBPbnNldCBvZiBhc3RobWEgaW4gaGlzIDxjb250ZW50IHJldmlzZWQ9ImRlbGV0ZSI+dHdlbnRpZXM8L2NvbnRlbnQ+PGNvbnRlbnQgcmV2aXNlZD0iaW5zZXJ0Ij50ZWVuczwvY29udGVudD4uIEhlIHdhcyBob3NwaXRhbGl6ZWQgdHdpY2UgbGFzdCB5ZWFyLCBhbmQgYWxyZWFkeSB0d2ljZSB0aGlzIHllYXIuIEhlIGhhcyBub3QgYmVlbiBhYmxlIHRvIGJlIHdlYW5lZCBvZmYgc3Rlcm9pZHMgZm9yIHRoZSBwYXN0IHNldmVyYWwgbW9udGhzLiANCgkJCQkJCTwvdGV4dD4NCgkJCQk8L3NlY3Rpb24+DQoJCQk8L2NvbXBvbmVudD4NCgkJCTwhLS0gDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICBQYXN0IE1lZGljYWwgSGlzdG9yeSBzZWN0aW9uDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KLS0+DQoJCQk8Y29tcG9uZW50Pg0KCQkJCTxzZWN0aW9uPg0KCQkJCQk8Y29kZSBjb2RlPSIxMDE1My0yIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjEiIGNvZGVTeXN0ZW1OYW1lPSJMT0lOQyIvPg0KCQkJCQk8dGl0bGU+UGFzdCBNZWRpY2FsIEhpc3Rvcnk8L3RpdGxlPg0KCQkJCQk8dGV4dD4NCgkJCQkJCTxsaXN0Pg0KCQkJCQkJCTxpdGVtPg0KCQkJCQkJCQk8Y29udGVudCBJRD0iYTEiPkFzdGhtYTwvY29udGVudD4NCgkJCQkJCQk8L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+DQoJCQkJCQkJCTxjb250ZW50IElEPSJhMiI+SHlwZXJ0ZW5zaW9uIChzZWUgSFROLmNkYSBmb3IgZGV0YWlscyk8L2NvbnRlbnQ+DQoJCQkJCQkJPC9pdGVtPg0KCQkJCQkJCTxpdGVtPg0KCQkJCQkJCQk8Y29udGVudCBJRD0iYTMiPk9zdGVvYXJ0aHJpdGlzLCANCgkJCQkJCQkJCTxjb250ZW50IElEPSJhNCI+cmlnaHQga25lZTwvY29udGVudD4NCgkJCQkJCQkJPC9jb250ZW50Pg0KCQkJCQkJCTwvaXRlbT4NCgkJCQkJCTwvbGlzdD4NCgkJCQkJPC90ZXh0Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8T2JzZXJ2YXRpb24gY2xhc3NDb2RlPSJDT05EIj4NCgkJCQkJCQk8Y29kZSBjb2RlPSIzOTE1NDAwOCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9ImNsaW5pY2FsIGRpYWdub3NpcyIvPg0KCQkJCQkJCTxlZmZlY3RpdmVUaW1lIHZhbHVlPSIxOTUwIi8+DQoJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iMTk1OTY3MDAxIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQXN0aG1hIj4NCgkJCQkJCQkJPG9yaWdpbmFsVGV4dD4NCgkJCQkJCQkJCTxyZWZlcmVuY2UgdmFsdWU9IiNhMSIvPg0KCQkJCQkJCQk8L29yaWdpbmFsVGV4dD4NCgkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCTxyZWZlcmVuY2UgdHlwZUNvZGU9IlhDUlBUIj4NCgkJCQkJCQkJPCEtLSBBIHJlZmVyZW5jZSBvZiB0eXBlICJYQ1JQVCIgY2FuIGJlIHVzZWQgdG8gc2hvdyB0aGF0IHRoaXMgcHJvYmxlbSBsaXN0IHZhbHVlIGlzIGV4Y2VycHRlZCBmcm9tIHRoZSByZWZlcmVuY2VkIGV4dGVybmFsIG9ic2VydmF0aW9uLiAtLT4NCgkJCQkJCQkJPEV4dGVybmFsT2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8aWQgcm9vdD0iMTIzLjQ1Ni43ODkuMjMuMTciLz4NCgkJCQkJCQkJPC9FeHRlcm5hbE9ic2VydmF0aW9uPg0KCQkJCQkJCTwvcmVmZXJlbmNlPg0KCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJPC9lbnRyeT4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPE9ic2VydmF0aW9uIGNsYXNzQ29kZT0iQ09ORCI+DQoJCQkJCQkJPGNvZGUgY29kZT0iMzkxNTQwMDgiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJjbGluaWNhbCBkaWFnbm9zaXMiLz4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSI1OTYyMTAwMCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkhUTiI+DQoJCQkJCQkJCTxvcmlnaW5hbFRleHQ+DQoJCQkJCQkJCQk8cmVmZXJlbmNlIHZhbHVlPSIjYTIiLz4NCgkJCQkJCQkJPC9vcmlnaW5hbFRleHQ+DQoJCQkJCQkJPC92YWx1ZT4NCgkJCQkJCQk8cmVmZXJlbmNlIHR5cGVDb2RlPSJTUFJUIj4NCgkJCQkJCQkJPHNlcGVyYXRhYmxlSW5kIHZhbHVlPSJmYWxzZSIvPg0KCQkJCQkJCQk8RXh0ZXJuYWxEb2N1bWVudD4NCgkJCQkJCQkJCTxpZCByb290PSIxMjMuNDU2Ljc4OSIvPg0KCQkJCQkJCQkJPHRleHQgbWVkaWFUeXBlPSJtdWx0aXBhcnQvcmVsYXRlZCI+DQoJCQkJCQkJCQkJPHJlZmVyZW5jZSB2YWx1ZT0iSFROLmNkYSIvPg0KCQkJCQkJCQkJPC90ZXh0Pg0KCQkJCQkJCQkJPHNldElkIHJvb3Q9IjE0Ny44OS45MDAxIi8+DQoJCQkJCQkJCQk8dmVyc2lvbk51bWJlciB2YWx1ZT0iMSIvPg0KCQkJCQkJCQk8L0V4dGVybmFsRG9jdW1lbnQ+DQoJCQkJCQkJPC9yZWZlcmVuY2U+DQoJCQkJCQkJPHJlZmVyZW5jZSB0eXBlQ29kZT0iWENSUFQiPg0KCQkJCQkJCQk8RXh0ZXJuYWxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxpZCByb290PSIxMjMuNDU2Ljc4OS4yMy4xOCIvPg0KCQkJCQkJCQk8L0V4dGVybmFsT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9yZWZlcmVuY2U+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8T2JzZXJ2YXRpb24gY2xhc3NDb2RlPSJDT05EIj4NCgkJCQkJCQk8Y29kZSBjb2RlPSIzOTE1NDAwOCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9ImNsaW5pY2FsIGRpYWdub3NpcyIvPg0KCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iQ0QiIGNvZGU9IjM5NjI3NTAwNiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Ik9zdGVvYXJ0aHJpdGlzIj4NCgkJCQkJCQkJPG9yaWdpbmFsVGV4dD4NCgkJCQkJCQkJCTxyZWZlcmVuY2UgdmFsdWU9IiNhMyIvPg0KCQkJCQkJCQk8L29yaWdpbmFsVGV4dD4NCgkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCTx0YXJnZXRTaXRlQ29kZSBjb2RlPSI0OTA3NjAwMCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IktuZWUgam9pbnQiPg0KCQkJCQkJCQk8b3JpZ2luYWxUZXh0Pg0KCQkJCQkJCQkJPHJlZmVyZW5jZSB2YWx1ZT0iI2E0Ii8+DQoJCQkJCQkJCTwvb3JpZ2luYWxUZXh0Pg0KCQkJCQkJCQk8cXVhbGlmaWVyPg0KCQkJCQkJCQkJPG5hbWUgY29kZT0iNzg2MTUwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJ3aXRoIGxhdGVyYWxpdHkiLz4NCgkJCQkJCQkJCTx2YWx1ZSBjb2RlPSIyNDAyODAwNyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9InJpZ2h0Ii8+DQoJCQkJCQkJCTwvcXVhbGlmaWVyPg0KCQkJCQkJCTwvdGFyZ2V0U2l0ZUNvZGU+DQoJCQkJCQkJPHJlZmVyZW5jZSB0eXBlQ29kZT0iWENSUFQiPg0KCQkJCQkJCQk8RXh0ZXJuYWxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxpZCByb290PSIxMjMuNDU2Ljc4OS4yMy4xOCIvPg0KCQkJCQkJCQk8L0V4dGVybmFsT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9yZWZlcmVuY2U+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCTwvc2VjdGlvbj4NCgkJCTwvY29tcG9uZW50Pg0KCQkJPCEtLSANCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogIE1lZGljYXRpb25zIHNlY3Rpb24NCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQotLT4NCgkJCTxjb21wb25lbnQ+DQoJCQkJPHNlY3Rpb24+DQoJCQkJCTxjb2RlIGNvZGU9IjEwMTYwLTAiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIgY29kZVN5c3RlbU5hbWU9IkxPSU5DIi8+DQoJCQkJCTx0aXRsZT5NZWRpY2F0aW9uczwvdGl0bGU+DQoJCQkJCTx0ZXh0Pg0KCQkJCQkJPGxpc3Q+DQoJCQkJCQkJPGl0ZW0+VGhlb2R1ciAyMDBtZyBCSUQ8L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+UHJvdmVudGlsIGluaGFsZXIgMnB1ZmZzIFFJRCBQUk48L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+UHJlZG5pc29uZSAyMG1nIHFkPC9pdGVtPg0KCQkJCQkJCTxpdGVtPkhDVFogMjVtZyBxZDwvaXRlbT4NCgkJCQkJCTwvbGlzdD4NCgkJCQkJPC90ZXh0Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8U3Vic3RhbmNlQWRtaW5pc3RyYXRpb24+DQoJCQkJCQkJPHRleHQ+VGhlb2R1ciAyMDBtZyBCSUQ8L3RleHQ+DQoJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgeHNpOnR5cGU9IlBJVkxfVFMiIGluc3RpdHV0aW9uU3BlY2lmaWVkPSJ0cnVlIj4NCgkJCQkJCQkJPHBlcmlvZCB2YWx1ZT0iMTIiIHVuaXQ9ImgiLz4NCgkJCQkJCQk8L2VmZmVjdGl2ZVRpbWU+DQoJCQkJCQkJPHJvdXRlQ29kZSBjb2RlPSJQTyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNS4xMTIiIGNvZGVTeXN0ZW1OYW1lPSJSb3V0ZU9mQWRtaW5pc3RyYXRpb24iLz4NCgkJCQkJCQk8ZG9zZVF1YW50aXR5Pg0KCQkJCQkJCQk8Y2VudGVyIHZhbHVlPSIyMDAiIHVuaXQ9Im1nIi8+DQoJCQkJCQkJPC9kb3NlUXVhbnRpdHk+DQoJCQkJCQkJPGNvbnN1bWFibGU+DQoJCQkJCQkJCTxtYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCQkJPG1hbnVmYWN0dXJlZExhYmVsZWREcnVnPg0KCQkJCQkJCQkJCTxjb2RlIGNvZGU9IjY2NDkzMDAzIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iVGhlb3BoeWxsaW5lIi8+DQoJCQkJCQkJCQk8L21hbnVmYWN0dXJlZExhYmVsZWREcnVnPg0KCQkJCQkJCQk8L21hbnVmYWN0dXJlZFByb2R1Y3Q+DQoJCQkJCQkJPC9jb25zdW1hYmxlPg0KCQkJCQkJPC9TdWJzdGFuY2VBZG1pbmlzdHJhdGlvbj4NCgkJCQkJPC9lbnRyeT4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPFN1YnN0YW5jZUFkbWluaXN0cmF0aW9uPg0KCQkJCQkJCTx0ZXh0PlByb3ZlbnRpbCBpbmhhbGVyIDJwdWZmcyBRSUQgUFJOPC90ZXh0Pg0KCQkJCQkJCTxlZmZlY3RpdmVUaW1lIHhzaTp0eXBlPSJQSVZMX1RTIiBpbnN0aXR1dGlvblNwZWNpZmllZD0idHJ1ZSI+DQoJCQkJCQkJCTxwZXJpb2QgdmFsdWU9IjYiIHVuaXQ9ImgiLz4NCgkJCQkJCQk8L2VmZmVjdGl2ZVRpbWU+DQoJCQkJCQkJPHByaW9yaXR5Q29kZSBjb2RlPSJQUk4iLz4NCgkJCQkJCQk8cm91dGVDb2RlIGNvZGU9IklQSU5ITCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNS4xMTIiIGNvZGVTeXN0ZW1OYW1lPSJSb3V0ZU9mQWRtaW5pc3RyYXRpb24iIGRpc3BsYXlOYW1lPSJJbmhhbGF0aW9uLCBvcmFsIi8+DQoJCQkJCQkJPGRvc2VRdWFudGl0eT4NCgkJCQkJCQkJPGNlbnRlciB2YWx1ZT0iMiIvPg0KCQkJCQkJCTwvZG9zZVF1YW50aXR5Pg0KCQkJCQkJCTxjb25zdW1hYmxlPg0KCQkJCQkJCQk8bWFudWZhY3R1cmVkUHJvZHVjdD4NCgkJCQkJCQkJCTxtYW51ZmFjdHVyZWRMYWJlbGVkRHJ1Zz4NCgkJCQkJCQkJCQk8Y29kZSBjb2RlPSI5MTE0MzAwMyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkFsYnV0ZXJvbCIvPg0KCQkJCQkJCQkJPC9tYW51ZmFjdHVyZWRMYWJlbGVkRHJ1Zz4NCgkJCQkJCQkJPC9tYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCTwvY29uc3VtYWJsZT4NCgkJCQkJCTwvU3Vic3RhbmNlQWRtaW5pc3RyYXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxTdWJzdGFuY2VBZG1pbmlzdHJhdGlvbj4NCgkJCQkJCQk8aWQgcm9vdD0iMTAuMjMuMjcuMTIzIi8+DQoJCQkJCQkJPHRleHQ+UHJlZG5pc29uZSAyMG1nIHFkPC90ZXh0Pg0KCQkJCQkJCTxlZmZlY3RpdmVUaW1lIHhzaTp0eXBlPSJQSVZMX1RTIiBpbnN0aXR1dGlvblNwZWNpZmllZD0idHJ1ZSI+DQoJCQkJCQkJCTxwZXJpb2QgdmFsdWU9IjI0IiB1bml0PSJoIi8+DQoJCQkJCQkJPC9lZmZlY3RpdmVUaW1lPg0KCQkJCQkJCTxyb3V0ZUNvZGUgY29kZT0iUE8iIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjUuMTEyIiBjb2RlU3lzdGVtTmFtZT0iUm91dGVPZkFkbWluaXN0cmF0aW9uIi8+DQoJCQkJCQkJPGRvc2VRdWFudGl0eT4NCgkJCQkJCQkJPGNlbnRlciB2YWx1ZT0iMjAiIHVuaXQ9Im1nIi8+DQoJCQkJCQkJPC9kb3NlUXVhbnRpdHk+DQoJCQkJCQkJPGNvbnN1bWFibGU+DQoJCQkJCQkJCTxtYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCQkJPG1hbnVmYWN0dXJlZExhYmVsZWREcnVnPg0KCQkJCQkJCQkJCTxjb2RlIGNvZGU9IjEwMzEyMDAzIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iUHJlZG5pc29uZSBwcmVwYXJhdGlvbiIvPg0KCQkJCQkJCQkJPC9tYW51ZmFjdHVyZWRMYWJlbGVkRHJ1Zz4NCgkJCQkJCQkJPC9tYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCTwvY29uc3VtYWJsZT4NCgkJCQkJCTwvU3Vic3RhbmNlQWRtaW5pc3RyYXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxTdWJzdGFuY2VBZG1pbmlzdHJhdGlvbj4NCgkJCQkJCQk8dGV4dD5IQ1RaIDI1bWcgcWQ8L3RleHQ+DQoJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgeHNpOnR5cGU9IlBJVkxfVFMiIGluc3RpdHV0aW9uU3BlY2lmaWVkPSJ0cnVlIj4NCgkJCQkJCQkJPHBlcmlvZCB2YWx1ZT0iMjQiIHVuaXQ9ImgiLz4NCgkJCQkJCQk8L2VmZmVjdGl2ZVRpbWU+DQoJCQkJCQkJPHJvdXRlQ29kZSBjb2RlPSJQTyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNS4xMTIiIGNvZGVTeXN0ZW1OYW1lPSJSb3V0ZU9mQWRtaW5pc3RyYXRpb24iLz4NCgkJCQkJCQk8Y29uc3VtYWJsZT4NCgkJCQkJCQkJPG1hbnVmYWN0dXJlZFByb2R1Y3Q+DQoJCQkJCQkJCQk8bWFudWZhY3R1cmVkTGFiZWxlZERydWc+DQoJCQkJCQkJCQkJPGNvZGUgY29kZT0iMzc2MjA5MDA2IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iSHlkcm9jaGxvcm90aGlhemlkZSAyNW1nIHRhYmxldCIvPg0KCQkJCQkJCQkJPC9tYW51ZmFjdHVyZWRMYWJlbGVkRHJ1Zz4NCgkJCQkJCQkJPC9tYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCTwvY29uc3VtYWJsZT4NCgkJCQkJCTwvU3Vic3RhbmNlQWRtaW5pc3RyYXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJPC9zZWN0aW9uPg0KCQkJPC9jb21wb25lbnQ+DQoJCQk8IS0tIA0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgQWxsZXJnaWVzICYgQWR2ZXJzZSBSZWFjdGlvbnMgc2VjdGlvbg0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCi0tPg0KCQkJPGNvbXBvbmVudD4NCgkJCQk8c2VjdGlvbj4NCgkJCQkJPGNvZGUgY29kZT0iMTAxNTUtMCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4xIiBjb2RlU3lzdGVtTmFtZT0iTE9JTkMiLz4NCgkJCQkJPHRpdGxlPkFsbGVyZ2llcyBhbmQgQWR2ZXJzZSBSZWFjdGlvbnM8L3RpdGxlPg0KCQkJCQk8dGV4dD4NCgkJCQkJCTxsaXN0Pg0KCQkJCQkJCTxpdGVtPlBlbmljaWxsaW4gLSBIaXZlczwvaXRlbT4NCgkJCQkJCQk8aXRlbT5Bc3BpcmluIC0gV2hlZXppbmc8L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+Q29kZWluZSAtIEl0Y2hpbmcgYW5kIG5hdXNlYTwvaXRlbT4NCgkJCQkJCTwvbGlzdD4NCgkJCQkJPC90ZXh0Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJPGNvZGUgY29kZT0iODQxMDAwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJoaXN0b3J5IHRha2luZyAocHJvY2VkdXJlKSIvPg0KCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iQ0QiIGNvZGU9IjI0NzQ3MjAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkhpdmVzIi8+DQoJCQkJCQkJPGVudHJ5UmVsYXRpb25zaGlwIHR5cGVDb2RlPSJNRlNUIj4NCgkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iODQxMDAwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJoaXN0b3J5IHRha2luZyAocHJvY2VkdXJlKSIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iOTE5MzYwMDUiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJBbGxlcmd5IHRvIHBlbmljaWxsaW4iLz4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5UmVsYXRpb25zaGlwPg0KCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJPC9lbnRyeT4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCTxjb2RlIGNvZGU9Ijg0MTAwMDA3IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iaGlzdG9yeSB0YWtpbmcgKHByb2NlZHVyZSkiLz4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSI1NjAxODAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IldoZWV6aW5nIi8+DQoJCQkJCQkJPGVudHJ5UmVsYXRpb25zaGlwIHR5cGVDb2RlPSJNRlNUIj4NCgkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iODQxMDAwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJoaXN0b3J5IHRha2luZyAocHJvY2VkdXJlKSIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iMjkzNTg2MDAxIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQWxsZXJneSB0byBhc3BpcmluIi8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeVJlbGF0aW9uc2hpcD4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSI4NDEwMDAwNyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Imhpc3RvcnkgdGFraW5nIChwcm9jZWR1cmUpIi8+DQoJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iMzI3MzgwMDAiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJQcnVyaXRpcyIvPg0KCQkJCQkJCTxlbnRyeVJlbGF0aW9uc2hpcCB0eXBlQ29kZT0iTUZTVCI+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxpZCByb290PSIyLjE2Ljg0MC4xLjExMzg4My4zLjkzMy4yNS40NyIvPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iODQxMDAwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJoaXN0b3J5IHRha2luZyAocHJvY2VkdXJlKSIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iNjIwMTQwMDMiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJBZHZlcnNlIHJlYWN0aW9uIHRvIGRydWciPg0KCQkJCQkJCQkJCTxxdWFsaWZpZXI+DQoJCQkJCQkJCQkJCTxuYW1lIGNvZGU9IjI0NjA3NTAwMyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9ImNhdXNhdGl2ZSBhZ2VudCIvPg0KCQkJCQkJCQkJCQk8dmFsdWUgY29kZT0iMTQ3NjAwMiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9ImNvZGVpbmUiLz4NCgkJCQkJCQkJCQk8L3F1YWxpZmllcj4NCgkJCQkJCQkJCTwvdmFsdWU+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeVJlbGF0aW9uc2hpcD4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSI4NDEwMDAwNyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Imhpc3RvcnkgdGFraW5nIChwcm9jZWR1cmUpIi8+DQoJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iNzM4NzkwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJOYXVzZWEiLz4NCgkJCQkJCQk8ZW50cnlSZWxhdGlvbnNoaXAgdHlwZUNvZGU9Ik1GU1QiPg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8aWQgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMy45MzMuMjUuNDciLz4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9Ijg0MTAwMDA3IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2Ii8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeVJlbGF0aW9uc2hpcD4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJPC9zZWN0aW9uPg0KCQkJPC9jb21wb25lbnQ+DQoJCQk8IS0tIA0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgRmFtaWx5IEhpc3Rvcnkgc2VjdGlvbg0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCi0tPg0KCQkJPGNvbXBvbmVudD4NCgkJCQk8c2VjdGlvbj4NCgkJCQkJPGNvZGUgY29kZT0iMTAxNTctMiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4xIiBjb2RlU3lzdGVtTmFtZT0iTE9JTkMiLz4NCgkJCQkJPHRpdGxlPkZhbWlseSBoaXN0b3J5PC90aXRsZT4NCgkJCQkJPHRleHQ+DQoJCQkJCQk8bGlzdD4NCgkJCQkJCQk8aXRlbT5GYXRoZXIgaGFkIGZhdGFsIE1JIGluIGhpcyBlYXJseSA1MCdzLjwvaXRlbT4NCgkJCQkJCQk8aXRlbT5ObyBjYW5jZXIgb3IgZGlhYmV0ZXMuPC9pdGVtPg0KCQkJCQkJPC9saXN0Pg0KCQkJCQk8L3RleHQ+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSI4NDEwMDAwNyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Imhpc3RvcnkgdGFraW5nIChwcm9jZWR1cmUpIi8+DQoJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjE5NzAiLz4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyMjI5ODAwNiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Ik1JIi8+DQoJCQkJCQkJPHN1YmplY3Q+DQoJCQkJCQkJCTxyZWxhdGVkU3ViamVjdCBjbGFzc0NvZGU9IlBSUyI+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSJGVEgiLz4NCgkJCQkJCQkJPC9yZWxhdGVkU3ViamVjdD4NCgkJCQkJCQk8L3N1YmplY3Q+DQoJCQkJCQkJPGVudHJ5UmVsYXRpb25zaGlwIHR5cGVDb2RlPSJDQVVTIj4NCgkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iODQxMDAwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJoaXN0b3J5IHRha2luZyAocHJvY2VkdXJlKSIvPg0KCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjE5NzAiLz4NCgkJCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iQ0QiIGNvZGU9IjM5OTM0NzAwOCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9ImRlYXRoIi8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeVJlbGF0aW9uc2hpcD4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbiBuZWdhdGlvbkluZD0idHJ1ZSI+DQoJCQkJCQkJPGNvZGUgY29kZT0iODQxMDAwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJoaXN0b3J5IHRha2luZyAocHJvY2VkdXJlKSIvPg0KCQkJCQkJCTxlZmZlY3RpdmVUaW1lPg0KCQkJCQkJCQk8aGlnaCB2YWx1ZT0iMjAwMDA0MDciIGluY2x1c2l2ZT0idHJ1ZSIvPg0KCQkJCQkJCTwvZWZmZWN0aXZlVGltZT4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyNzU5MzcwMDEiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJGYW1pbHkgaGlzdG9yeSBvZiBjYW5jZXIiLz4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSI4NDEwMDAwNyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Imhpc3RvcnkgdGFraW5nIChwcm9jZWR1cmUpIi8+DQoJCQkJCQkJPGVmZmVjdGl2ZVRpbWU+DQoJCQkJCQkJCTxoaWdoIHZhbHVlPSIyMDAwMDQwNyIgaW5jbHVzaXZlPSJ0cnVlIi8+DQoJCQkJCQkJPC9lZmZlY3RpdmVUaW1lPg0KCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iQ0QiIGNvZGU9IjE2MDI3NDAwNSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Ik5vIGZhbWlseSBoaXN0b3J5IG9mIGRpYWJldGVzIi8+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCTwvc2VjdGlvbj4NCgkJCTwvY29tcG9uZW50Pg0KCQkJPCEtLSANCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogIFNvY2lhbCBIaXN0b3J5IHNlY3Rpb24NCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQotLT4NCgkJCTxjb21wb25lbnQ+DQoJCQkJPHNlY3Rpb24+DQoJCQkJCTxjb2RlIGNvZGU9IjI5NzYyLTIiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIgY29kZVN5c3RlbU5hbWU9IkxPSU5DIi8+DQoJCQkJCTx0aXRsZT5Tb2NpYWwgSGlzdG9yeTwvdGl0bGU+DQoJCQkJCTx0ZXh0Pg0KCQkJCQkJPGxpc3Q+DQoJCQkJCQkJPGl0ZW0+U21va2luZyA6OiAxIFBQRCBiZXR3ZWVuIHRoZSBhZ2VzIG9mIDIwIGFuZCA1NSwgYW5kIHRoZW4gaGUgcXVpdC48L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+QWxjb2hvbCA6OiByYXJlPC9pdGVtPg0KCQkJCQkJPC9saXN0Pg0KCQkJCQk8L3RleHQ+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSIyMjk4MTkwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJUb2JhY2NvIHVzZSBhbmQgZXhwb3N1cmUiLz4NCgkJCQkJCQk8ZWZmZWN0aXZlVGltZT4NCgkJCQkJCQkJPGxvdyB2YWx1ZT0iMTk1NSIvPg0KCQkJCQkJCQk8aGlnaCB2YWx1ZT0iMTk5MCIvPg0KCQkJCQkJCTwvZWZmZWN0aXZlVGltZT4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyNjY5MjQwMDgiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJleC1oZWF2eSBjaWdhcmV0dGUgc21va2VyICgyMC0zOS9kYXkpIi8+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJPGNvZGUgY29kZT0iMTYwNjI1MDA0IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iRGF0ZSBjZWFzZWQgc21va2luZyIvPg0KCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iVFMiIHZhbHVlPSIxOTkwIi8+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJPGNvZGUgY29kZT0iMTYwNTczMDAzIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQWxjb2hvbCBpbnRha2UiLz4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyNjY5MTcwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJUcml2aWFsIGRyaW5rZXIgLSAgbGVzcyB0aGFuIDEvZGF5Ii8+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCTwvc2VjdGlvbj4NCgkJCTwvY29tcG9uZW50Pg0KCQkJPCEtLSANCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogIFBoeXNpY2FsIEV4YW0gc2VjdGlvbg0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCi0tPg0KCQkJPGNvbXBvbmVudD4NCgkJCQk8c2VjdGlvbj4NCgkJCQkJPGNvZGUgY29kZT0iMTEzODQtNSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4xIiBjb2RlU3lzdGVtTmFtZT0iTE9JTkMiLz4NCgkJCQkJPHRpdGxlPlBoeXNpY2FsIEV4YW1pbmF0aW9uPC90aXRsZT4NCgkJCQkJPCEtLSANCiAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgICAgICAgICAgUGh5c2ljYWwgRXhhbSAgLSBWaXRhbCBTaWducw0KICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogICAgICAgICAgLS0+DQoJCQkJCTxjb21wb25lbnQ+DQoJCQkJCQk8c2VjdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSI4NzE2LTMiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIgY29kZVN5c3RlbU5hbWU9IkxPSU5DIi8+DQoJCQkJCQkJPHRpdGxlPlZpdGFsIFNpZ25zPC90aXRsZT4NCgkJCQkJCQk8dGV4dD4NCgkJCQkJCQkJPHRhYmxlPg0KCQkJCQkJCQkJPHRyPg0KCQkJCQkJCQkJCTx0aD5EYXRlIC8gVGltZTwvdGg+DQoJCQkJCQkJCQkJPHRoPkFwcmlsIDcsIDIwMDAgMTQ6MzA8L3RoPg0KCQkJCQkJCQkJCTx0aD5BcHJpbCA3LCAyMDAwIDE1OjMwPC90aD4NCgkJCQkJCQkJCTwvdHI+DQoJCQkJCQkJCQk8dHI+DQoJCQkJCQkJCQkJPHRoPkhlaWdodDwvdGg+DQoJCQkJCQkJCQkJPHRkPjE3NyBjbSAoNjkuNyBpbik8L3RkPg0KCQkJCQkJCQkJPC90cj4NCgkJCQkJCQkJCTx0cj4NCgkJCQkJCQkJCQk8dGg+V2VpZ2h0PC90aD4NCgkJCQkJCQkJCQk8dGQ+MTk0LjAgbGJzICg4OC4wIGtnKTwvdGQ+DQoJCQkJCQkJCQk8L3RyPg0KCQkJCQkJCQkJPHRyPg0KCQkJCQkJCQkJCTx0aD5CTUk8L3RoPg0KCQkJCQkJCQkJCTx0ZD4yOC4xIGtnL20yPC90ZD4NCgkJCQkJCQkJCTwvdHI+DQoJCQkJCQkJCQk8dHI+DQoJCQkJCQkJCQkJPHRoPkJTQTwvdGg+DQoJCQkJCQkJCQkJPHRkPjIuMDUgbTI8L3RkPg0KCQkJCQkJCQkJPC90cj4NCgkJCQkJCQkJCTx0cj4NCgkJCQkJCQkJCQk8dGg+VGVtcGVyYXR1cmU8L3RoPg0KCQkJCQkJCQkJCTx0ZD4zNi45IEMgKDk4LjUgRik8L3RkPg0KCQkJCQkJCQkJCTx0ZD4zNi45IEMgKDk4LjUgRik8L3RkPg0KCQkJCQkJCQkJPC90cj4NCgkJCQkJCQkJCTx0cj4NCgkJCQkJCQkJCQk8dGg+UHVsc2U8L3RoPg0KCQkJCQkJCQkJCTx0ZD44NiAvIG1pbnV0ZTwvdGQ+DQoJCQkJCQkJCQkJPHRkPjg0IC8gbWludXRlPC90ZD4NCgkJCQkJCQkJCTwvdHI+DQoJCQkJCQkJCQk8dHI+DQoJCQkJCQkJCQkJPHRoPlJoeXRobTwvdGg+DQoJCQkJCQkJCQkJPHRkPlJlZ3VsYXI8L3RkPg0KCQkJCQkJCQkJCTx0ZD5SZWd1bGFyPC90ZD4NCgkJCQkJCQkJCTwvdHI+DQoJCQkJCQkJCQk8dHI+DQoJCQkJCQkJCQkJPHRoPlJlc3BpcmF0aW9uczwvdGg+DQoJCQkJCQkJCQkJPHRkPjE2IC8gbWludXRlLCB1bmxhYm9yZWQ8L3RkPg0KCQkJCQkJCQkJCTx0ZD4xNCAvIG1pbnV0ZTwvdGQ+DQoJCQkJCQkJCQk8L3RyPg0KCQkJCQkJCQkJPHRyPg0KCQkJCQkJCQkJCTx0aD5TeXN0b2xpYzwvdGg+DQoJCQkJCQkJCQkJPHRkPjEzMiBtbUhnPC90ZD4NCgkJCQkJCQkJCQk8dGQ+MTM1IG1tSGc8L3RkPg0KCQkJCQkJCQkJPC90cj4NCgkJCQkJCQkJCTx0cj4NCgkJCQkJCQkJCQk8dGg+RGlhc3RvbGljPC90aD4NCgkJCQkJCQkJCQk8dGQ+ODYgbW1IZzwvdGQ+DQoJCQkJCQkJCQkJPHRkPjg4IG1tSGc8L3RkPg0KCQkJCQkJCQkJPC90cj4NCgkJCQkJCQkJCTx0cj4NCgkJCQkJCQkJCQk8dGg+UG9zaXRpb24gLyBDdWZmPC90aD4NCgkJCQkJCQkJCQk8dGQ+TGVmdCBBcm08L3RkPg0KCQkJCQkJCQkJCTx0ZD5MZWZ0IEFybTwvdGQ+DQoJCQkJCQkJCQk8L3RyPg0KCQkJCQkJCQk8L3RhYmxlPg0KCQkJCQkJCTwvdGV4dD4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjUwMzczMDAwIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQm9keSBoZWlnaHQgbWVhc3VyZSIvPg0KCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTQzMCIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJQUSIgdmFsdWU9IjEuNzciIHVuaXQ9Im0iPg0KCQkJCQkJCQkJCTx0cmFuc2xhdGlvbiB2YWx1ZT0iNjkuNyIgY29kZT0iW2luX0ldIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjgiIGNvZGVTeXN0ZW1OYW1lPSJVQ1VNIi8+DQoJCQkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQkJCTwvZW50cnk+DQoJCQkJCQkJPGVudHJ5Pg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIzNjM4MDgwMDEiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJCb2R5IHdlaWdodCBtZWFzdXJlIi8+DQoJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNDMwIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IlBRIiB2YWx1ZT0iMTk0LjAiIHVuaXQ9IltsYl9hcF0iPg0KCQkJCQkJCQkJCTx0cmFuc2xhdGlvbiB2YWx1ZT0iODguMCIgY29kZT0ia2ciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOCIgY29kZVN5c3RlbU5hbWU9IlVDVU0iLz4NCgkJCQkJCQkJCTwvdmFsdWU+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjYwNjIxMDA5IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQm9keSBtYXNzIGluZGV4Ii8+DQoJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNDMwIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IlJUT19QUV9QUSI+DQoJCQkJCQkJCQkJPG51bWVyYXRvciB2YWx1ZT0iMjguMSIgdW5pdD0ia2ciLz4NCgkJCQkJCQkJCQk8ZGVub21pbmF0b3IgdmFsdWU9IjEiIHVuaXQ9ImFyIi8+DQoJCQkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQkJCTwvZW50cnk+DQoJCQkJCQkJPGVudHJ5Pg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIzMDE4OTgwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJCb2R5IHN1cmZhY2UgYXJlYSIvPg0KCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTQzMCIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJQUSIgdmFsdWU9IjIuMDUiIHVuaXQ9ImFyIi8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjM4NjcyNTAwNyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkJvZHkgdGVtcGVyYXR1cmUiLz4NCgkJCQkJCQkJCTxlZmZlY3RpdmVUaW1lIHZhbHVlPSIyMDAwMDQwNzE0MzAiLz4NCgkJCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iUFEiIHZhbHVlPSIzNi45IiB1bml0PSJDZWwiPg0KCQkJCQkJCQkJCTx0cmFuc2xhdGlvbiB2YWx1ZT0iOTguNSIgY29kZT0iW2RlZ0ZdIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjgiIGNvZGVTeXN0ZW1OYW1lPSJVQ1VNIi8+DQoJCQkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQkJCTwvZW50cnk+DQoJCQkJCQkJPGVudHJ5Pg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIzNjQwNzUwMDUiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJIZWFydCByYXRlIi8+DQoJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNDMwIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IlJUT19QUV9QUSI+DQoJCQkJCQkJCQkJPG51bWVyYXRvciB2YWx1ZT0iODYiLz4NCgkJCQkJCQkJCQk8ZGVub21pbmF0b3IgdmFsdWU9IjEiIHVuaXQ9Im1pbiIvPg0KCQkJCQkJCQkJPC92YWx1ZT4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5Pg0KCQkJCQkJCTxlbnRyeT4NCgkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iMzY0MDc1MDA1IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iSGVhcnQgcmF0ZSIvPg0KCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTUzMCIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJSVE9fUFFfUFEiPg0KCQkJCQkJCQkJCTxudW1lcmF0b3IgdmFsdWU9Ijg0Ii8+DQoJCQkJCQkJCQkJPGRlbm9taW5hdG9yIHZhbHVlPSIxIiB1bml0PSJtaW4iLz4NCgkJCQkJCQkJCTwvdmFsdWU+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjM2NDA3NDAwOSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IlJlZ3VsYXJpdHkgb2YgaGVhcnQgcmh5dGhtIi8+DQoJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNDMwIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyNDg2NDkwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJIZWFydCByZWd1bGFyIi8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjM2NDA3NDAwOSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IlJlZ3VsYXJpdHkgb2YgaGVhcnQgcmh5dGhtIi8+DQoJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNTMwIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyNDg2NDkwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJIZWFydCByZWd1bGFyIi8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9Ijg2MjkwMDA1IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iUmVzcGlyYXRvcnkgcmF0ZSIvPg0KCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTQzMCIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJSVE9fUFFfUFEiPg0KCQkJCQkJCQkJCTxudW1lcmF0b3IgdmFsdWU9IjE2Ii8+DQoJCQkJCQkJCQkJPGRlbm9taW5hdG9yIHZhbHVlPSIxIiB1bml0PSJtaW4iLz4NCgkJCQkJCQkJCTwvdmFsdWU+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjI3ODkwNzAwOSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IlJlc3BpcmF0b3J5IHBhdHRlcm4iLz4NCgkJCQkJCQkJCTxlZmZlY3RpdmVUaW1lIHZhbHVlPSIyMDAwMDQwNzE0MzAiLz4NCgkJCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iQ0QiIGNvZGU9IjI3NjM2MjAwMiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkJyZWF0aGluZyBlYXNpbHkiLz4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5Pg0KCQkJCQkJCTxlbnRyeT4NCgkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iODYyOTAwMDUiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJSZXNwaXJhdG9yeSByYXRlIi8+DQoJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNTMwIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IlJUT19QUV9QUSI+DQoJCQkJCQkJCQkJPG51bWVyYXRvciB2YWx1ZT0iMTQiLz4NCgkJCQkJCQkJCQk8ZGVub21pbmF0b3IgdmFsdWU9IjEiIHVuaXQ9Im1pbiIvPg0KCQkJCQkJCQkJPC92YWx1ZT4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5Pg0KCQkJCQkJCTxlbnRyeT4NCgkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iMjUxMDc2MDA4IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQ3VmZiBibG9vZCBwcmVzc3VyZSIvPg0KCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTQzMCIvPg0KCQkJCQkJCQkJPHRhcmdldFNpdGVDb2RlIGNvZGU9IjM2ODIwODAwNiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkxlZnQgYXJtIi8+DQoJCQkJCQkJCQk8ZW50cnlSZWxhdGlvbnNoaXAgdHlwZUNvZGU9IkNPTVAiPg0KCQkJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCQkJPGNvZGUgY29kZT0iMjcxNjQ5MDA2IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iU3lzdG9saWMgQlAiLz4NCgkJCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTUzMCIvPg0KCQkJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IlBRIiB2YWx1ZT0iMTMyIiB1bml0PSJtbVtIZ10iLz4NCgkJCQkJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQkJCQkJPC9lbnRyeVJlbGF0aW9uc2hpcD4NCgkJCQkJCQkJCTxlbnRyeVJlbGF0aW9uc2hpcCB0eXBlQ29kZT0iQ09NUCI+DQoJCQkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJCQk8Y29kZSBjb2RlPSIyNzE2NTAwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJEaWFzdG9saWMgQlAiLz4NCgkJCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTUzMCIvPg0KCQkJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IlBRIiB2YWx1ZT0iODYiIHVuaXQ9Im1tW0hnXSIvPg0KCQkJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8L2VudHJ5UmVsYXRpb25zaGlwPg0KCQkJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQkJCTwvZW50cnk+DQoJCQkJCQkJPGVudHJ5Pg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIyNTEwNzYwMDgiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJDdWZmIGJsb29kIHByZXNzdXJlIi8+DQoJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNTMwIi8+DQoJCQkJCQkJCQk8dGFyZ2V0U2l0ZUNvZGUgY29kZT0iMzY4MjA4MDA2IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iTGVmdCBhcm0iLz4NCgkJCQkJCQkJCTxlbnRyeVJlbGF0aW9uc2hpcCB0eXBlQ29kZT0iQ09NUCI+DQoJCQkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJCQk8Y29kZSBjb2RlPSIyNzE2NDkwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJTeXN0b2xpYyBCUCIvPg0KCQkJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNTMwIi8+DQoJCQkJCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iUFEiIHZhbHVlPSIxMzUiIHVuaXQ9Im1tW0hnXSIvPg0KCQkJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8L2VudHJ5UmVsYXRpb25zaGlwPg0KCQkJCQkJCQkJPGVudHJ5UmVsYXRpb25zaGlwIHR5cGVDb2RlPSJDT01QIj4NCgkJCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQkJCTxjb2RlIGNvZGU9IjI3MTY1MDAwNiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkRpYXN0b2xpYyBCUCIvPg0KCQkJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNTMwIi8+DQoJCQkJCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iUFEiIHZhbHVlPSI4OCIgdW5pdD0ibW1bSGddIi8+DQoJCQkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTwvZW50cnlSZWxhdGlvbnNoaXA+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCTwvc2VjdGlvbj4NCgkJCQkJPC9jb21wb25lbnQ+DQoJCQkJCTwhLS0gDQogICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgICAgICAgICAgIFBoeXNpY2FsIEV4YW0gIC0gU2tpbg0KICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogICAgICAgICAgLS0+DQoJCQkJCTxjb21wb25lbnQ+DQoJCQkJCQk8c2VjdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSI4NzA5LTgiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIgY29kZVN5c3RlbU5hbWU9IkxPSU5DIi8+DQoJCQkJCQkJPHRpdGxlPlNraW4gRXhhbTwvdGl0bGU+DQoJCQkJCQkJPHRleHQ+RXJ5dGhlbWF0b3VzIHJhc2gsIHBhbG1hciBzdXJmYWNlLCBsZWZ0IGluZGV4IGZpbmdlci4NCgkJCQkJCQkJIDxyZW5kZXJNdWx0aU1lZGlhIHJlZmVyZW5jZWRPYmplY3Q9Ik1NMSIvPg0KCQkJCQkJCTwvdGV4dD4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjEwNjA3NjAwMSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IlNraW4gZmluZGluZyIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iMjcxODA3MDAzIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iUmFzaCIvPg0KCQkJCQkJCQkJPHRhcmdldFNpdGVDb2RlIGNvZGU9IjQ4ODU2MDA0IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iU2tpbiBvZiBwYWxtZXIgc3VyZmFjZSBvZiBpbmRleCBmaW5nZXIiPg0KCQkJCQkJCQkJCTxxdWFsaWZpZXI+DQoJCQkJCQkJCQkJCTxuYW1lIGNvZGU9Ijc4NjE1MDA3IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0id2l0aCBsYXRlcmFsaXR5Ii8+DQoJCQkJCQkJCQkJCTx2YWx1ZSBjb2RlPSI3NzcxMDAwIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0ibGVmdCIvPg0KCQkJCQkJCQkJCTwvcXVhbGlmaWVyPg0KCQkJCQkJCQkJPC90YXJnZXRTaXRlQ29kZT4NCgkJCQkJCQkJCTxlbnRyeVJlbGF0aW9uc2hpcCB0eXBlQ29kZT0iU1BSVCI+DQoJCQkJCQkJCQkJPFJlZ2lvbk9mSW50ZXJlc3QgTU1JRD0iTU0xIj4NCgkJCQkJCQkJCQkJPGlkIHJvb3Q9IjEwLjIzLjQ1NjcuNDQ4OSIvPg0KCQkJCQkJCQkJCQk8Y29kZSBjb2RlPSJFTExJUFNFIi8+DQoJCQkJCQkJCQkJCTx2YWx1ZT4zIDEgMyA3IDIgNCA0IDQ8L3ZhbHVlPg0KCQkJCQkJCQkJCQk8ZW50cnlSZWxhdGlvbnNoaXAgdHlwZUNvZGU9IlNVQkoiPg0KCQkJCQkJCQkJCQkJPE9ic2VydmF0aW9uTWVkaWE+DQoJCQkJCQkJCQkJCQkJPGlkIHJvb3Q9IjEwLjIzLjQ1NjcuMzQ1Ii8+DQoJCQkJCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJFRCIgbWVkaWFUeXBlPSJpbWFnZS9qcGVnIj4NCgkJCQkJCQkJCQkJCQkJPHJlZmVyZW5jZSB2YWx1ZT0ibGVmdGhhbmQuanBlZyIvPg0KCQkJCQkJCQkJCQkJCTwvdmFsdWU+DQoJCQkJCQkJCQkJCQk8L09ic2VydmF0aW9uTWVkaWE+DQoJCQkJCQkJCQkJCTwvZW50cnlSZWxhdGlvbnNoaXA+DQoJCQkJCQkJCQkJPC9SZWdpb25PZkludGVyZXN0Pg0KCQkJCQkJCQkJPC9lbnRyeVJlbGF0aW9uc2hpcD4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5Pg0KCQkJCQkJPC9zZWN0aW9uPg0KCQkJCQk8L2NvbXBvbmVudD4NCgkJCQkJPCEtLSANCiAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgICAgICAgICAgUGh5c2ljYWwgRXhhbSAgLSBMdW5ncw0KICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogICAgICAgICAgLS0+DQoJCQkJCTxjb21wb25lbnQ+DQoJCQkJCQk8c2VjdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSI4NzEwLTYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIgY29kZVN5c3RlbU5hbWU9IkxPSU5DIi8+DQoJCQkJCQkJPHRpdGxlPkx1bmdzPC90aXRsZT4NCgkJCQkJCQk8dGV4dD5DbGVhciB3aXRoIG5vIHdoZWV6ZS4gR29vZCBhaXIgZmxvdy48L3RleHQ+DQoJCQkJCQkJPGVudHJ5Pg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIzMDE3MDgwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJSZXNwaXJhdG9yeSBzb3VuZHMiLz4NCgkJCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iQ0QiIGNvZGU9IjQ4MzQ4MDA3IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQ2hlc3QgY2xlYXIiLz4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5Pg0KCQkJCQkJCTxlbnRyeT4NCgkJCQkJCQkJPE9ic2VydmF0aW9uIG5lZ2F0aW9uSW5kPSJ0cnVlIj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjUyNjUzMDA4IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iUmVzcGlyYXRvcnkgc291bmRzIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSI1NjAxODAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IldoZWV6aW5nIi8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCTwvc2VjdGlvbj4NCgkJCQkJPC9jb21wb25lbnQ+DQoJCQkJCTwhLS0gDQogICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgICAgICAgICAgIFBoeXNpY2FsIEV4YW0gIC0gQ2FyZGlhYw0KICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogICAgICAgICAgLS0+DQoJCQkJCTxjb21wb25lbnQ+DQoJCQkJCQk8c2VjdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSIxMDIyMy0yIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjEiIGNvZGVTeXN0ZW1OYW1lPSJMT0lOQyIvPg0KCQkJCQkJCTx0aXRsZT5DYXJkaWFjPC90aXRsZT4NCgkJCQkJCQk8dGV4dD5SUlIgd2l0aCBubyBtdXJtdXIsIG5vIFMzLCBubyBTNC48L3RleHQ+DQoJCQkJCQkJPGVudHJ5Pg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIzNjQwNjYwMDgiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJDYXJkaW92YXNjdWxhciBvYnNlcnZhYmxlIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSI3Njg2MzAwMyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Ik5vcm1hbCBoZWFydCByYXRlIi8+DQoJCQkJCQkJCQk8bWV0aG9kQ29kZSBjb2RlPSIzNzkzMTAwNiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkF1c2N1bHRhdGlvbiIvPg0KCQkJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQkJCTwvZW50cnk+DQoJCQkJCQkJPGVudHJ5Pg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24gbmVnYXRpb25JbmQ9InRydWUiPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iMzY0MDY2MDA4IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQ2FyZGlvdmFzY3VsYXIgb2JzZXJ2YWJsZSIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iODg2MTAwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJoZWFydCBtdXJtdXIiLz4NCgkJCQkJCQkJCTxtZXRob2RDb2RlIGNvZGU9IjM3OTMxMDA2IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQXVzY3VsdGF0aW9uIi8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbiBuZWdhdGlvbkluZD0idHJ1ZSI+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIzNjQwNjYwMDgiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJDYXJkaW92YXNjdWxhciBvYnNlcnZhYmxlIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyNzc0NTUwMDIiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJUaGlyZCBoZWFydCBzb3VuZCIvPg0KCQkJCQkJCQkJPG1ldGhvZENvZGUgY29kZT0iMzc5MzEwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJBdXNjdWx0YXRpb24iLz4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5Pg0KCQkJCQkJCTxlbnRyeT4NCgkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iMzY0MDY2MDA4IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQ2FyZGlvdmFzY3VsYXIgb2JzZXJ2YWJsZSIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iNjA3MjEwMDIiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJGb3VydGggaGVhcnQgc291bmQgaW5hdWRpYmxlIi8+DQoJCQkJCQkJCQk8bWV0aG9kQ29kZSBjb2RlPSIzNzkzMTAwNiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkF1c2N1bHRhdGlvbiIvPg0KCQkJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQkJCTwvZW50cnk+DQoJCQkJCQk8L3NlY3Rpb24+DQoJCQkJCTwvY29tcG9uZW50Pg0KCQkJCTwvc2VjdGlvbj4NCgkJCTwvY29tcG9uZW50Pg0KCQkJPCEtLSANCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogIExhYnMgc2VjdGlvbg0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCi0tPg0KCQkJPGNvbXBvbmVudD4NCgkJCQk8c2VjdGlvbj4NCgkJCQkJPGNvZGUgY29kZT0iMTE1MDItMiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4xIiBjb2RlU3lzdGVtTmFtZT0iTE9JTkMiLz4NCgkJCQkJPHRpdGxlPkxhYnM8L3RpdGxlPg0KCQkJCQk8dGV4dD4NCgkJCQkJCTxsaXN0Pg0KCQkJCQkJCTxpdGVtPkNYUiAwMi8wMy8xOTk5OiBIeXBlcmluZmxhdGVkLiBOb3JtYWwgY2FyZGlhYyBzaWxob3VldHRlLCBjbGVhciBsdW5ncy48L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+UGVhayBGbG93IHRvZGF5OiAyNjAgbC9tPC9pdGVtPg0KCQkJCQkJPC9saXN0Pg0KCQkJCQk8L3RleHQ+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8aWQgcm9vdD0iMTAuMjMuNDU3My4xNTg3NyIvPg0KCQkJCQkJCTxjb2RlIGNvZGU9IjI4MjI5MDAwNSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkltYWdpbmcgaW50ZXJwcmV0YXRpb24iLz4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyNDk2NzQwMDEiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJDaGVzdCBoeXBlcmluZmxhdGVkIi8+DQoJCQkJCQkJPHJlZmVyZW5jZSB0eXBlQ29kZT0iU1BSVCI+DQoJCQkJCQkJCTxFeHRlcm5hbE9ic2VydmF0aW9uIGNsYXNzQ29kZT0iREdJTUciPg0KCQkJCQkJCQkJPGlkIHJvb3Q9IjEyMy40NTYuMjU1NyIvPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iNTYzNTAwMDQiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJDaGVzdC1YLXJheSIvPg0KCQkJCQkJCQk8L0V4dGVybmFsT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9yZWZlcmVuY2U+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJPGlkIHJvb3Q9IjEwLjIzLjQ1NzMuMTU4NzgiLz4NCgkJCQkJCQk8Y29kZSBjb2RlPSIyODIyOTAwMDUiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJJbWFnaW5nIGludGVycHJldGF0aW9uIi8+DQoJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgbnVsbEZsYXZvcj0iT1RIIj4NCgkJCQkJCQkJPG9yaWdpbmFsVGV4dD5ub3JtYWwgY2FyZGlhYyBzaWxob3VldHRlPC9vcmlnaW5hbFRleHQ+DQoJCQkJCQkJPC92YWx1ZT4NCgkJCQkJCQk8cmVmZXJlbmNlIHR5cGVDb2RlPSJTUFJUIj4NCgkJCQkJCQkJPEV4dGVybmFsT2JzZXJ2YXRpb24gY2xhc3NDb2RlPSJER0lNRyI+DQoJCQkJCQkJCQk8aWQgcm9vdD0iMTIzLjQ1Ni4yNTU3Ii8+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSI1NjM1MDAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkNoZXN0LVgtcmF5Ii8+DQoJCQkJCQkJCTwvRXh0ZXJuYWxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8L3JlZmVyZW5jZT4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbiBuZWdhdGlvbkluZD0idHJ1ZSI+DQoJCQkJCQkJPGlkIHJvb3Q9IjEwLjIzLjQ1NzMuMTU4NzkiLz4NCgkJCQkJCQk8Y29kZSBjb2RlPSIyODIyOTAwMDUiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJJbWFnaW5nIGludGVycHJldGF0aW9uIi8+DQoJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgbnVsbEZsYXZvcj0iT1RIIj4NCgkJCQkJCQkJPG9yaWdpbmFsVGV4dD5yYWRpb3BhY2l0aWVzPC9vcmlnaW5hbFRleHQ+DQoJCQkJCQkJPC92YWx1ZT4NCgkJCQkJCQk8cmVmZXJlbmNlIHR5cGVDb2RlPSJTUFJUIj4NCgkJCQkJCQkJPEV4dGVybmFsT2JzZXJ2YXRpb24gY2xhc3NDb2RlPSJER0lNRyI+DQoJCQkJCQkJCQk8aWQgcm9vdD0iMTIzLjQ1Ni4yNTU3Ii8+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSI1NjM1MDAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkNoZXN0LVgtcmF5Ii8+DQoJCQkJCQkJCTwvRXh0ZXJuYWxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8L3JlZmVyZW5jZT4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8aWQgcm9vdD0iMTAuMjMuNDU3My4xNTg3OSIvPg0KCQkJCQkJCTxjb2RlIGNvZGU9IjMxMzE5MzAwMiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IlBlYWsgZmxvdyIvPg0KCQkJCQkJCTxlZmZlY3RpdmVUaW1lIHZhbHVlPSIyMDAwMDQwNyIvPg0KCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iUlRPX1BRX1BRIj4NCgkJCQkJCQkJPG51bWVyYXRvciB2YWx1ZT0iMjYwIiB1bml0PSJsIi8+DQoJCQkJCQkJCTxkZW5vbWluYXRvciB2YWx1ZT0iMSIgdW5pdD0ibWluIi8+DQoJCQkJCQkJPC92YWx1ZT4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJPC9zZWN0aW9uPg0KCQkJPC9jb21wb25lbnQ+DQoJCQk8IS0tIA0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgSW4tb2ZmaWNlIFByb2NlZHVyZSBzZWN0aW9uDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KLS0+DQoJCQk8Y29tcG9uZW50Pg0KCQkJCTxzZWN0aW9uPg0KCQkJCQk8Y29kZSBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjEiIGNvZGVTeXN0ZW1OYW1lPSJMT0lOQyIgbnVsbEZsYXZvcj0iT1RIIi8+DQoJCQkJCTx0aXRsZT5Jbi1vZmZpY2UgUHJvY2VkdXJlczwvdGl0bGU+DQoJCQkJCTx0ZXh0Pg0KCQkJCQkJPGxpc3Q+DQoJCQkJCQkJPGl0ZW0+U3V0dXJlIHJlbW92YWwsIGxlZnQgZm9yZWFybS48L2l0ZW0+DQoJCQkJCQk8L2xpc3Q+DQoJCQkJCTwvdGV4dD4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPFByb2NlZHVyZT4NCgkJCQkJCQk8Y29kZSBjb2RlPSIzMDU0OTAwMSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IlN1dHVyZSByZW1vdmFsIi8+DQoJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTQzMCIvPg0KCQkJCQkJCTx0YXJnZXRTaXRlQ29kZSBjb2RlPSI2NjQ4MDAwOCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkxlZnQgZm9yZWFybSIvPg0KCQkJCQkJPC9Qcm9jZWR1cmU+DQoJCQkJCTwvZW50cnk+DQoJCQkJPC9zZWN0aW9uPg0KCQkJPC9jb21wb25lbnQ+DQoJCQk8IS0tIA0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgQXNzZXNzbWVudCBzZWN0aW9uDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KLS0+DQoJCQk8Y29tcG9uZW50Pg0KCQkJCTxzZWN0aW9uPg0KCQkJCQk8Y29kZSBjb2RlPSIxMTQ5Ni03IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjEiIGNvZGVTeXN0ZW1OYW1lPSJMT0lOQyIvPg0KCQkJCQk8dGl0bGU+QXNzZXNzbWVudDwvdGl0bGU+DQoJCQkJCTx0ZXh0Pg0KCQkJCQkJPGxpc3Q+DQoJCQkJCQkJPGl0ZW0+QXN0aG1hLCB3aXRoIHByaW9yIHNtb2tpbmcgaGlzdG9yeS4gRGlmZmljdWx0eSB3ZWFuaW5nIG9mZiBzdGVyb2lkcy4gV2lsbCB0cnkgZ3JhZHVhbCB0YXBlci48L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+SHlwZXJ0ZW5zaW9uLCB3ZWxsLWNvbnRyb2xsZWQuPC9pdGVtPg0KCQkJCQkJCTxpdGVtPkNvbnRhY3QgZGVybWF0aXRpcyBvbiBmaW5nZXIuPC9pdGVtPg0KCQkJCQkJPC9saXN0Pg0KCQkJCQk8L3RleHQ+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbiBjbGFzc0NvZGU9IkNPTkQiPg0KCQkJCQkJCTxjb2RlIGNvZGU9IjE0NjU3MDA5IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iRXN0YWJsaXNoZWQgZGlhZ25vc2lzIi8+DQoJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTUzMCIvPg0KCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iQ0QiIGNvZGU9IjE5NTk2NzAwMSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkFzdGhtYSI+DQoJCQkJCQkJCTx0cmFuc2xhdGlvbiBjb2RlPSI0OTM5MCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4yIiBjb2RlU3lzdGVtTmFtZT0iSUNEOUNNIiBkaXNwbGF5TmFtZT0iQVNUSE1BIFcvTyBTVEFUVVMgQVNUSE1BVElDVVMiLz4NCgkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCTxyZWZlcmVuY2UgdHlwZUNvZGU9IkVMTksiPg0KCQkJCQkJCQk8RXh0ZXJuYWxPYnNlcnZhdGlvbiBjbGFzc0NvZGU9IkNPTkQiPg0KCQkJCQkJCQkJPGlkIHJvb3Q9IjEwLjIzLjI3LjExMS4xNyIvPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iMTQ2NTcwMDkiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJFc3RhYmxpc2hlZCBkaWFnbm9zaXMiLz4NCgkJCQkJCQkJPC9FeHRlcm5hbE9ic2VydmF0aW9uPg0KCQkJCQkJCTwvcmVmZXJlbmNlPg0KCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJPC9lbnRyeT4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPE9ic2VydmF0aW9uIGNsYXNzQ29kZT0iQ09ORCI+DQoJCQkJCQkJPGNvZGUgY29kZT0iMTQ2NTcwMDkiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJFc3RhYmxpc2hlZCBkaWFnbm9zaXMiLz4NCgkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNTMwIi8+DQoJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iNTk2MjEwMDAiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJFc3NlbnRpYWwgaHlwZXJ0ZW5zaW9uIj4NCgkJCQkJCQkJPHRyYW5zbGF0aW9uIGNvZGU9IjQwMTkiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMiIgY29kZVN5c3RlbU5hbWU9IklDRDlDTSIgZGlzcGxheU5hbWU9IkhZUEVSVEVOU0lPTiBOT1MiLz4NCgkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCTxyZWZlcmVuY2UgdHlwZUNvZGU9IkVMTksiPg0KCQkJCQkJCQk8RXh0ZXJuYWxPYnNlcnZhdGlvbiBjbGFzc0NvZGU9IkNPTkQiPg0KCQkJCQkJCQkJPGlkIHJvb3Q9IjEwLjIzLjI3LjExMS4xNzMyIi8+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIxNDY1NzAwOSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkVzdGFibGlzaGVkIGRpYWdub3NpcyIvPg0KCQkJCQkJCQk8L0V4dGVybmFsT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9yZWZlcmVuY2U+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8T2JzZXJ2YXRpb24gY2xhc3NDb2RlPSJDT05EIj4NCgkJCQkJCQk8Y29kZSBjb2RlPSIxNDY1NzAwOSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkVzdGFibGlzaGVkIGRpYWdub3NpcyIvPg0KCQkJCQkJCTxlZmZlY3RpdmVUaW1lIHZhbHVlPSIyMDAwMDQwNzE1MzAiLz4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSI0MDI3NTAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkNvbnRhY3QgZGVybWF0aXRpcyI+DQoJCQkJCQkJCTx0cmFuc2xhdGlvbiBjb2RlPSI2OTIuOSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4yIiBjb2RlU3lzdGVtTmFtZT0iSUNEOUNNIiBkaXNwbGF5TmFtZT0iQ29udGFjdCBEZXJtYXRpdGlzLCBOT1MiLz4NCgkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCTx0YXJnZXRTaXRlQ29kZSBjb2RlPSI0ODg1NjAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IlNraW4gb2YgcGFsbWVyIHN1cmZhY2Ugb2YgaW5kZXggZmluZ2VyIj4NCgkJCQkJCQkJPHF1YWxpZmllcj4NCgkJCQkJCQkJCTxuYW1lIGNvZGU9Ijc4NjE1MDA3IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0id2l0aCBsYXRlcmFsaXR5Ii8+DQoJCQkJCQkJCQk8dmFsdWUgY29kZT0iNzc3MTAwMCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9ImxlZnQiLz4NCgkJCQkJCQkJPC9xdWFsaWZpZXI+DQoJCQkJCQkJPC90YXJnZXRTaXRlQ29kZT4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJPC9zZWN0aW9uPg0KCQkJPC9jb21wb25lbnQ+DQoJCQk8IS0tIA0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgUGxhbiBzZWN0aW9uDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KLS0+DQoJCQk8Y29tcG9uZW50Pg0KCQkJCTxzZWN0aW9uIHRlbXBsYXRlSWQ9IjIuMTYuODQwLjEuMTEzODgzLjMuMjcuMzU0Ij4NCgkJCQkJPGNvZGUgY29kZT0iMTE1MHgteSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuMy45MzMuMjc4LjQ3IiBjb2RlU3lzdGVtTmFtZT0iTXlMb2NhbENvZGVTeXN0ZW0iLz4NCgkJCQkJPHRpdGxlPlBsYW48L3RpdGxlPg0KCQkJCQk8dGV4dD4NCgkJCQkJCTxsaXN0Pg0KCQkJCQkJCTxpdGVtPkNvbXBsZXRlIFBGVHMgd2l0aCBsdW5nIHZvbHVtZXMuPC9pdGVtPg0KCQkJCQkJCTxpdGVtPkNoZW0tNyB0b21vcnJvdy48L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+VGVhY2ggcGVhayBmbG93IHJhdGUgbWVhc3VyZW1lbnQuPC9pdGVtPg0KCQkJCQkJCTxpdGVtPkRlY3JlYXNlIHByZWRuaXNvbmUgdG8gMjBxT0QgYWx0ZXJuYXRpbmcgd2l0aCAxOHFPRC48L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+SHlkcm9jb3J0aXNvbmUgY3JlYW0gdG8gZmluZ2VyIEJJRC48L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+UlRDIDEgd2Vlay48L2l0ZW0+DQoJCQkJCQk8L2xpc3Q+DQoJCQkJCTwvdGV4dD4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPE9ic2VydmF0aW9uIG1vb2RDb2RlPSJJTlQiPg0KCQkJCQkJCTxpZC8+DQoJCQkJCQkJPGNvZGUgY29kZT0iMjM0MjYwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJQdWxtb25hcnkgZnVuY3Rpb24gdGVzdCIvPg0KCQkJCQkJCTx0ZXh0PkNvbXBsZXRlIFBGVHMgd2l0aCBsdW5nIHZvbHVtZXMuPC90ZXh0Pg0KCQkJCQkJCTxlbnRyeVJlbGF0aW9uc2hpcCB0eXBlQ29kZT0iQ09NUCI+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbiBtb29kQ29kZT0iSU5UIj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjI1MjQ3MjAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Ikx1bmcgdm9sdW1lIHRlc3QiLz4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5UmVsYXRpb25zaGlwPg0KCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJPC9lbnRyeT4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPE9ic2VydmF0aW9uIG1vb2RDb2RlPSJJTlQiPg0KCQkJCQkJCTxjb2RlIGNvZGU9IjI0MzIwLTQiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIgY29kZVN5c3RlbU5hbWU9IkxPSU5DIj4NCgkJCQkJCQkJPG9yaWdpbmFsVGV4dD5DaGVtLTc8L29yaWdpbmFsVGV4dD4NCgkJCQkJCQkJPHRyYW5zbGF0aW9uIGNvZGU9ImFZVTd0NiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuMy45MzMuMjc4LjQ3IiBjb2RlU3lzdGVtTmFtZT0iTXlMb2NhbENvZGVTeXN0ZW0iIGRpc3BsYXlOYW1lPSJDaGVtNyIvPg0KCQkJCQkJCTwvY29kZT4NCgkJCQkJCQk8dGV4dD5DaGVtLTcgdG9tb3Jyb3c8L3RleHQ+DQoJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA4Ii8+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8QWN0IG1vb2RDb2RlPSJJTlQiPg0KCQkJCQkJCTxpZC8+DQoJCQkJCQkJPGNvZGUgY29kZT0iMjIzNDY4MDA5IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iVGVhY2hpbmcgb2Ygc2tpbGxzIj4NCgkJCQkJCQkJPHF1YWxpZmllcj4NCgkJCQkJCQkJCTxuYW1lIGNvZGU9IjM2MzcwMjAwNiIgZGlzcGxheU5hbWU9ImhhcyBmb2N1cyIvPg0KCQkJCQkJCQkJPHZhbHVlIGNvZGU9IjI5ODkzMDA2IiBkaXNwbGF5TmFtZT0iUGVhayBmbG93IHJhdGUgbWVhc3VyZW1lbnQiLz4NCgkJCQkJCQkJPC9xdWFsaWZpZXI+DQoJCQkJCQkJPC9jb2RlPg0KCQkJCQkJPC9BY3Q+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxTdWJzdGFuY2VBZG1pbmlzdHJhdGlvbiBtb29kQ29kZT0iUlFPIj4NCgkJCQkJCQk8dGV4dD5wcmVkbmlzb25lIDIwcU9EIGFsdGVybmF0aW5nIHdpdGggMThxT0QuPC90ZXh0Pg0KCQkJCQkJCTxyb3V0ZUNvZGUgY29kZT0iUE8iIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjUuMTEyIiBjb2RlU3lzdGVtTmFtZT0iUm91dGVPZkFkbWluaXN0cmF0aW9uIi8+DQoJCQkJCQkJPGNvbnN1bWFibGU+DQoJCQkJCQkJCTxtYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCQkJPG1hbnVmYWN0dXJlZExhYmVsZWREcnVnPg0KCQkJCQkJCQkJCTxjb2RlIGNvZGU9IjEwMzEyMDAzIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iUHJlZG5pc29uZSBwcmVwYXJhdGlvbiIvPg0KCQkJCQkJCQkJPC9tYW51ZmFjdHVyZWRMYWJlbGVkRHJ1Zz4NCgkJCQkJCQkJPC9tYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCTwvY29uc3VtYWJsZT4NCgkJCQkJCTwvU3Vic3RhbmNlQWRtaW5pc3RyYXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxTdWJzdGFuY2VBZG1pbmlzdHJhdGlvbiBtb29kQ29kZT0iUlFPIj4NCgkJCQkJCQk8dGV4dD5IeWRyb2NvcnRpc29uZSBjcmVhbSB0byBmaW5nZXIgQklELjwvdGV4dD4NCgkJCQkJCQk8ZWZmZWN0aXZlVGltZSB4c2k6dHlwZT0iUElWTF9UUyIgaW5zdGl0dXRpb25TcGVjaWZpZWQ9InRydWUiPg0KCQkJCQkJCQk8cGVyaW9kIHZhbHVlPSIxMiIgdW5pdD0iaCIvPg0KCQkJCQkJCTwvZWZmZWN0aXZlVGltZT4NCgkJCQkJCQk8cm91dGVDb2RlIGNvZGU9IlNLSU4iIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjUuMTEyIiBjb2RlU3lzdGVtTmFtZT0iUm91dGVPZkFkbWluaXN0cmF0aW9uIiBkaXNwbGF5TmFtZT0iVG9waWNhbCBhcHBsaWNhdGlvbiwgc2tpbiIvPg0KCQkJCQkJCTxhcHByb2FjaFNpdGVDb2RlIGNvZGU9IjQ4ODU2MDA0IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iU2tpbiBvZiBwYWxtZXIgc3VyZmFjZSBvZiBpbmRleCBmaW5nZXIiPg0KCQkJCQkJCQk8cXVhbGlmaWVyPg0KCQkJCQkJCQkJPG5hbWUgY29kZT0iNzg2MTUwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJ3aXRoIGxhdGVyYWxpdHkiLz4NCgkJCQkJCQkJCTx2YWx1ZSBjb2RlPSI3NzcxMDAwIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0ibGVmdCIvPg0KCQkJCQkJCQk8L3F1YWxpZmllcj4NCgkJCQkJCQk8L2FwcHJvYWNoU2l0ZUNvZGU+DQoJCQkJCQkJPGNvbnN1bWFibGU+DQoJCQkJCQkJCTxtYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCQkJPG1hbnVmYWN0dXJlZExhYmVsZWREcnVnPg0KCQkJCQkJCQkJCTxjb2RlIGNvZGU9IjMzMTY0NjAwNSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Ikh5ZHJvY29ydGlzb25lIGNyZWFtIi8+DQoJCQkJCQkJCQk8L21hbnVmYWN0dXJlZExhYmVsZWREcnVnPg0KCQkJCQkJCQk8L21hbnVmYWN0dXJlZFByb2R1Y3Q+DQoJCQkJCQkJPC9jb25zdW1hYmxlPg0KCQkJCQkJPC9TdWJzdGFuY2VBZG1pbmlzdHJhdGlvbj4NCgkJCQkJPC9lbnRyeT4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPEVuY291bnRlciBtb29kQ29kZT0iUlFPIj4NCgkJCQkJCQk8Y29kZSBjb2RlPSIxODUzODkwMDkiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJGb2xsb3ctdXAgdmlzaXQiLz4NCgkJCQkJCQk8ZWZmZWN0aXZlVGltZT4NCgkJCQkJCQkJPGxvdyB2YWx1ZT0iMjAwMDA0MTIiLz4NCgkJCQkJCQkJPGhpZ2ggdmFsdWU9IjIwMDAwNDE3Ii8+DQoJCQkJCQkJPC9lZmZlY3RpdmVUaW1lPg0KCQkJCQkJPC9FbmNvdW50ZXI+DQoJCQkJCTwvZW50cnk+DQoJCQkJPC9zZWN0aW9uPg0KCQkJPC9jb21wb25lbnQ+DQoJCTwvU3RydWN0dXJlZEJvZHk+DQoJPC9jb21wb25lbnQ+DQo8L0NsaW5pY2FsRG9jdW1lbnQ+"
                    }
                }
            ]
        }
    },
    {
        id: 2,
        name: 'CDA',
        resource: {
            "resourceType": "DocumentReference",
            "status": "current",
            "type": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "51899-3",
                        "display": "Details Document"
                    }
                ]
            },
            "indexed": "2005-12-24T09:43:41+05:30",
            "content": [
                {
                    "attachment": {
                        "contentType": "application/xml",
                        // tslint:disable-next-line:max-line-length
                        "data": "PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8Q2xpbmljYWxEb2N1bWVudCB0ZW1wbGF0ZUlkPSIyLjE2Ljg0MC4xLjExMzg4My4zLjI3LjE3NzYiPg0KCTwhLS0gDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICBDREEgSGVhZGVyDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KLS0+DQoJPGlkIGV4dGVuc2lvbj0iYzI2NiIgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMy45MzMiLz4NCgk8Y29kZSBjb2RlPSIxMTQ4OC00IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjEiIGRpc3BsYXlOYW1lPSJDb25zdWx0YXRpb24gbm90ZSIvPg0KCTx0aXRsZT5Hb29kIEhlYWx0aCBDbGluaWMgQ29uc3VsdGF0aW9uIE5vdGU8L3RpdGxlPg0KCTxlZmZlY3RpdmVUaW1lIHZhbHVlPSIyMDAwMDQwNyIvPg0KCTxjb25maWRlbnRpYWxpdHlDb2RlIGNvZGU9Ik4iIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjUuMjUiLz4NCgk8c2V0SWQgZXh0ZW5zaW9uPSJCQjM1IiByb290PSIyLjE2Ljg0MC4xLjExMzg4My4zLjkzMyIvPg0KCTx2ZXJzaW9uTnVtYmVyIHZhbHVlPSIyIi8+DQoJPGxlZ2FsQXV0aGVudGljYXRvcj4NCgkJPHRpbWUgdmFsdWU9IjIwMDAwNDA4Ii8+DQoJCTxzaWduYXR1cmVDb2RlIGNvZGU9IlMiLz4NCgkJPGFzc2lnbmVkRW50aXR5Pg0KCQkJPGlkIGV4dGVuc2lvbj0iS1AwMDAxNyIgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMy45MzMiLz4NCgkJCTxhc3NpZ25lZFBlcnNvbj4NCgkJCQk8bmFtZT4NCgkJCQkJPGdpdmVuPlJvYmVydDwvZ2l2ZW4+DQoJCQkJCTxmYW1pbHk+RG9saW48L2ZhbWlseT4NCgkJCQkJPHN1ZmZpeD5NRDwvc3VmZml4Pg0KCQkJCTwvbmFtZT4NCgkJCTwvYXNzaWduZWRQZXJzb24+DQoJCQk8cmVwcmVzZW50ZWRPcmdhbml6YXRpb24+DQoJCQkJPGlkIGV4dGVuc2lvbj0iTTM0NSIgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMy45MzMiLz4NCgkJCTwvcmVwcmVzZW50ZWRPcmdhbml6YXRpb24+DQoJCTwvYXNzaWduZWRFbnRpdHk+DQoJPC9sZWdhbEF1dGhlbnRpY2F0b3I+DQoJPGF1dGhvcj4NCgkJPHRpbWUgdmFsdWU9IjIwMDAwNDA3Ii8+DQoJCTxhc3NpZ25lZEF1dGhvcj4NCgkJCTxpZCBleHRlbnNpb249IktQMDAwMTciIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjMuOTMzIi8+DQoJCQk8YXNzaWduZWRQZXJzb24+DQoJCQkJPG5hbWU+DQoJCQkJCTxnaXZlbj5Sb2JlcnQ8L2dpdmVuPg0KCQkJCQk8ZmFtaWx5PkRvbGluPC9mYW1pbHk+DQoJCQkJCTxzdWZmaXg+TUQ8L3N1ZmZpeD4NCgkJCQk8L25hbWU+DQoJCQk8L2Fzc2lnbmVkUGVyc29uPg0KCQkJPHJlcHJlc2VudGVkT3JnYW5pemF0aW9uPg0KCQkJCTxpZCBleHRlbnNpb249Ik0zNDUiIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjMuOTMzIi8+DQoJCQk8L3JlcHJlc2VudGVkT3JnYW5pemF0aW9uPg0KCQk8L2Fzc2lnbmVkQXV0aG9yPg0KCTwvYXV0aG9yPg0KCTxjdXN0b2RpYW4+DQoJCTxhc3NpZ25lZEN1c3RvZGlhbj4NCgkJCTxyZXByZXNlbnRlZEN1c3RvZGlhbk9yZ2FuaXphdGlvbj4NCgkJCQk8aWQgZXh0ZW5zaW9uPSJNMzQ1IiByb290PSIyLjE2Ljg0MC4xLjExMzg4My4zLjkzMyIvPg0KCQkJCTxuYW1lPkdvb2QgSGVhbHRoIENsaW5pYzwvbmFtZT4NCgkJCTwvcmVwcmVzZW50ZWRDdXN0b2RpYW5Pcmdhbml6YXRpb24+DQoJCTwvYXNzaWduZWRDdXN0b2RpYW4+DQoJPC9jdXN0b2RpYW4+DQoJPHJlY29yZFRhcmdldD4NCgkJPHBhdGllbnRSb2xlPg0KCQkJPGlkIGV4dGVuc2lvbj0iMTIzNDUiIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjMuOTMzIi8+DQoJCQk8cGF0aWVudFBhdGllbnQ+DQoJCQkJPG5hbWU+DQoJCQkJCTxnaXZlbj5IZW5yeTwvZ2l2ZW4+DQoJCQkJCTxmYW1pbHk+TGV2aW48L2ZhbWlseT4NCgkJCQkJPHN1ZmZpeD50aGUgN3RoPC9zdWZmaXg+DQoJCQkJPC9uYW1lPg0KCQkJCTxhZG1pbmlzdHJhdGl2ZUdlbmRlckNvZGUgY29kZT0iTSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNS4xIi8+DQoJCQkJPGJpcnRoVGltZSB2YWx1ZT0iMTkzMjA5MjQiLz4NCgkJCTwvcGF0aWVudFBhdGllbnQ+DQoJCQk8cHJvdmlkZXJPcmdhbml6YXRpb24+DQoJCQkJPGlkIGV4dGVuc2lvbj0iTTM0NSIgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMy45MzMiLz4NCgkJCTwvcHJvdmlkZXJPcmdhbml6YXRpb24+DQoJCTwvcGF0aWVudFJvbGU+DQoJPC9yZWNvcmRUYXJnZXQ+DQoJPHJlbGF0ZWREb2N1bWVudCB0eXBlQ29kZT0iUlBMQyI+DQoJCTxwYXJlbnREb2N1bWVudD4NCgkJCTxpZCBleHRlbnNpb249ImExMjMiIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjMuOTMzIi8+DQoJCQk8c2V0SWQgZXh0ZW5zaW9uPSJCQjM1IiByb290PSIyLjE2Ljg0MC4xLjExMzg4My4zLjkzMyIvPg0KCQkJPHZlcnNpb25OdW1iZXIgdmFsdWU9IjEiLz4NCgkJPC9wYXJlbnREb2N1bWVudD4NCgk8L3JlbGF0ZWREb2N1bWVudD4NCgk8Y29tcG9uZW50T2Y+DQoJCTxjdXJyZW50RW5jb3VudGVyPg0KCQkJPGlkIGV4dGVuc2lvbj0iS1BFTkMxMzMyIiByb290PSIyLjE2Ljg0MC4xLjExMzg4My4zLjkzMyIvPg0KCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3Ii8+DQoJCQk8bG9jYXRpb24+DQoJCQkJPGhlYWx0aENhcmVGYWNpbGl0eSBjbGFzc0NvZGU9IkRTRExPQyI+DQoJCQkJCTxjb2RlIGNvZGU9IkdJTSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNS4xMDU4OCIgZGlzcGxheU5hbWU9IkdlbmVyYWwgaW50ZXJuYWwgbWVkaWNpbmUgY2xpbmljIi8+DQoJCQkJPC9oZWFsdGhDYXJlRmFjaWxpdHk+DQoJCQk8L2xvY2F0aW9uPg0KCQkJPGVuY291bnRlclBlcmZvcm1lciB0eXBlQ29kZT0iQ09OIj4NCgkJCQk8dGltZSB2YWx1ZT0iMjAwMDA0MDciLz4NCgkJCQk8YXNzaWduZWRFbnRpdHk+DQoJCQkJCTxpZCBleHRlbnNpb249IktQMDAwMTciIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjMuOTMzIi8+DQoJCQkJCTxhc3NpZ25lZFBlcnNvbj4NCgkJCQkJCTxuYW1lPg0KCQkJCQkJCTxnaXZlbj5Sb2JlcnQ8L2dpdmVuPg0KCQkJCQkJCTxmYW1pbHk+RG9saW48L2ZhbWlseT4NCgkJCQkJCQk8c3VmZml4Pk1EPC9zdWZmaXg+DQoJCQkJCQk8L25hbWU+DQoJCQkJCTwvYXNzaWduZWRQZXJzb24+DQoJCQkJCTxyZXByZXNlbnRlZE9yZ2FuaXphdGlvbj4NCgkJCQkJCTxpZCBleHRlbnNpb249Ik0zNDUiIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjMuOTMzIi8+DQoJCQkJCTwvcmVwcmVzZW50ZWRPcmdhbml6YXRpb24+DQoJCQkJPC9hc3NpZ25lZEVudGl0eT4NCgkJCTwvZW5jb3VudGVyUGVyZm9ybWVyPg0KCQk8L2N1cnJlbnRFbmNvdW50ZXI+DQoJPC9jb21wb25lbnRPZj4NCgk8IS0tIA0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgQ0RBIEJvZHkNCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQotLT4NCgk8Y29tcG9uZW50Pg0KCQk8U3RydWN0dXJlZEJvZHk+DQoJCQk8IS0tIA0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgSGlzdG9yeSBvZiBQcmVzZW50IElsbG5lc3Mgc2VjdGlvbg0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCi0tPg0KCQkJPGNvbXBvbmVudD4NCgkJCQk8c2VjdGlvbj4NCgkJCQkJPGNvZGUgY29kZT0iMTAxNjQtMiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4xIiBjb2RlU3lzdGVtTmFtZT0iTE9JTkMiLz4NCgkJCQkJPHRpdGxlPkhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzPC90aXRsZT4NCgkJCQkJPHRleHQ+SGVucnkgTGV2aW4sIHRoZSA3dGggaXMgYSA2NyB5ZWFyIG9sZCBtYWxlIHJlZmVycmVkIGZvciBmdXJ0aGVyIGFzdGhtYSBtYW5hZ2VtZW50LiBPbnNldCBvZiBhc3RobWEgaW4gaGlzIDxjb250ZW50IHJldmlzZWQ9ImRlbGV0ZSI+dHdlbnRpZXM8L2NvbnRlbnQ+PGNvbnRlbnQgcmV2aXNlZD0iaW5zZXJ0Ij50ZWVuczwvY29udGVudD4uIEhlIHdhcyBob3NwaXRhbGl6ZWQgdHdpY2UgbGFzdCB5ZWFyLCBhbmQgYWxyZWFkeSB0d2ljZSB0aGlzIHllYXIuIEhlIGhhcyBub3QgYmVlbiBhYmxlIHRvIGJlIHdlYW5lZCBvZmYgc3Rlcm9pZHMgZm9yIHRoZSBwYXN0IHNldmVyYWwgbW9udGhzLiANCgkJCQkJCTwvdGV4dD4NCgkJCQk8L3NlY3Rpb24+DQoJCQk8L2NvbXBvbmVudD4NCgkJCTwhLS0gDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICBQYXN0IE1lZGljYWwgSGlzdG9yeSBzZWN0aW9uDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KLS0+DQoJCQk8Y29tcG9uZW50Pg0KCQkJCTxzZWN0aW9uPg0KCQkJCQk8Y29kZSBjb2RlPSIxMDE1My0yIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjEiIGNvZGVTeXN0ZW1OYW1lPSJMT0lOQyIvPg0KCQkJCQk8dGl0bGU+UGFzdCBNZWRpY2FsIEhpc3Rvcnk8L3RpdGxlPg0KCQkJCQk8dGV4dD4NCgkJCQkJCTxsaXN0Pg0KCQkJCQkJCTxpdGVtPg0KCQkJCQkJCQk8Y29udGVudCBJRD0iYTEiPkFzdGhtYTwvY29udGVudD4NCgkJCQkJCQk8L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+DQoJCQkJCQkJCTxjb250ZW50IElEPSJhMiI+SHlwZXJ0ZW5zaW9uIChzZWUgSFROLmNkYSBmb3IgZGV0YWlscyk8L2NvbnRlbnQ+DQoJCQkJCQkJPC9pdGVtPg0KCQkJCQkJCTxpdGVtPg0KCQkJCQkJCQk8Y29udGVudCBJRD0iYTMiPk9zdGVvYXJ0aHJpdGlzLCANCgkJCQkJCQkJCTxjb250ZW50IElEPSJhNCI+cmlnaHQga25lZTwvY29udGVudD4NCgkJCQkJCQkJPC9jb250ZW50Pg0KCQkJCQkJCTwvaXRlbT4NCgkJCQkJCTwvbGlzdD4NCgkJCQkJPC90ZXh0Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8T2JzZXJ2YXRpb24gY2xhc3NDb2RlPSJDT05EIj4NCgkJCQkJCQk8Y29kZSBjb2RlPSIzOTE1NDAwOCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9ImNsaW5pY2FsIGRpYWdub3NpcyIvPg0KCQkJCQkJCTxlZmZlY3RpdmVUaW1lIHZhbHVlPSIxOTUwIi8+DQoJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iMTk1OTY3MDAxIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQXN0aG1hIj4NCgkJCQkJCQkJPG9yaWdpbmFsVGV4dD4NCgkJCQkJCQkJCTxyZWZlcmVuY2UgdmFsdWU9IiNhMSIvPg0KCQkJCQkJCQk8L29yaWdpbmFsVGV4dD4NCgkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCTxyZWZlcmVuY2UgdHlwZUNvZGU9IlhDUlBUIj4NCgkJCQkJCQkJPCEtLSBBIHJlZmVyZW5jZSBvZiB0eXBlICJYQ1JQVCIgY2FuIGJlIHVzZWQgdG8gc2hvdyB0aGF0IHRoaXMgcHJvYmxlbSBsaXN0IHZhbHVlIGlzIGV4Y2VycHRlZCBmcm9tIHRoZSByZWZlcmVuY2VkIGV4dGVybmFsIG9ic2VydmF0aW9uLiAtLT4NCgkJCQkJCQkJPEV4dGVybmFsT2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8aWQgcm9vdD0iMTIzLjQ1Ni43ODkuMjMuMTciLz4NCgkJCQkJCQkJPC9FeHRlcm5hbE9ic2VydmF0aW9uPg0KCQkJCQkJCTwvcmVmZXJlbmNlPg0KCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJPC9lbnRyeT4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPE9ic2VydmF0aW9uIGNsYXNzQ29kZT0iQ09ORCI+DQoJCQkJCQkJPGNvZGUgY29kZT0iMzkxNTQwMDgiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJjbGluaWNhbCBkaWFnbm9zaXMiLz4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSI1OTYyMTAwMCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkhUTiI+DQoJCQkJCQkJCTxvcmlnaW5hbFRleHQ+DQoJCQkJCQkJCQk8cmVmZXJlbmNlIHZhbHVlPSIjYTIiLz4NCgkJCQkJCQkJPC9vcmlnaW5hbFRleHQ+DQoJCQkJCQkJPC92YWx1ZT4NCgkJCQkJCQk8cmVmZXJlbmNlIHR5cGVDb2RlPSJTUFJUIj4NCgkJCQkJCQkJPHNlcGVyYXRhYmxlSW5kIHZhbHVlPSJmYWxzZSIvPg0KCQkJCQkJCQk8RXh0ZXJuYWxEb2N1bWVudD4NCgkJCQkJCQkJCTxpZCByb290PSIxMjMuNDU2Ljc4OSIvPg0KCQkJCQkJCQkJPHRleHQgbWVkaWFUeXBlPSJtdWx0aXBhcnQvcmVsYXRlZCI+DQoJCQkJCQkJCQkJPHJlZmVyZW5jZSB2YWx1ZT0iSFROLmNkYSIvPg0KCQkJCQkJCQkJPC90ZXh0Pg0KCQkJCQkJCQkJPHNldElkIHJvb3Q9IjE0Ny44OS45MDAxIi8+DQoJCQkJCQkJCQk8dmVyc2lvbk51bWJlciB2YWx1ZT0iMSIvPg0KCQkJCQkJCQk8L0V4dGVybmFsRG9jdW1lbnQ+DQoJCQkJCQkJPC9yZWZlcmVuY2U+DQoJCQkJCQkJPHJlZmVyZW5jZSB0eXBlQ29kZT0iWENSUFQiPg0KCQkJCQkJCQk8RXh0ZXJuYWxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxpZCByb290PSIxMjMuNDU2Ljc4OS4yMy4xOCIvPg0KCQkJCQkJCQk8L0V4dGVybmFsT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9yZWZlcmVuY2U+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8T2JzZXJ2YXRpb24gY2xhc3NDb2RlPSJDT05EIj4NCgkJCQkJCQk8Y29kZSBjb2RlPSIzOTE1NDAwOCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9ImNsaW5pY2FsIGRpYWdub3NpcyIvPg0KCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iQ0QiIGNvZGU9IjM5NjI3NTAwNiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Ik9zdGVvYXJ0aHJpdGlzIj4NCgkJCQkJCQkJPG9yaWdpbmFsVGV4dD4NCgkJCQkJCQkJCTxyZWZlcmVuY2UgdmFsdWU9IiNhMyIvPg0KCQkJCQkJCQk8L29yaWdpbmFsVGV4dD4NCgkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCTx0YXJnZXRTaXRlQ29kZSBjb2RlPSI0OTA3NjAwMCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IktuZWUgam9pbnQiPg0KCQkJCQkJCQk8b3JpZ2luYWxUZXh0Pg0KCQkJCQkJCQkJPHJlZmVyZW5jZSB2YWx1ZT0iI2E0Ii8+DQoJCQkJCQkJCTwvb3JpZ2luYWxUZXh0Pg0KCQkJCQkJCQk8cXVhbGlmaWVyPg0KCQkJCQkJCQkJPG5hbWUgY29kZT0iNzg2MTUwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJ3aXRoIGxhdGVyYWxpdHkiLz4NCgkJCQkJCQkJCTx2YWx1ZSBjb2RlPSIyNDAyODAwNyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9InJpZ2h0Ii8+DQoJCQkJCQkJCTwvcXVhbGlmaWVyPg0KCQkJCQkJCTwvdGFyZ2V0U2l0ZUNvZGU+DQoJCQkJCQkJPHJlZmVyZW5jZSB0eXBlQ29kZT0iWENSUFQiPg0KCQkJCQkJCQk8RXh0ZXJuYWxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxpZCByb290PSIxMjMuNDU2Ljc4OS4yMy4xOCIvPg0KCQkJCQkJCQk8L0V4dGVybmFsT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9yZWZlcmVuY2U+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCTwvc2VjdGlvbj4NCgkJCTwvY29tcG9uZW50Pg0KCQkJPCEtLSANCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogIE1lZGljYXRpb25zIHNlY3Rpb24NCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQotLT4NCgkJCTxjb21wb25lbnQ+DQoJCQkJPHNlY3Rpb24+DQoJCQkJCTxjb2RlIGNvZGU9IjEwMTYwLTAiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIgY29kZVN5c3RlbU5hbWU9IkxPSU5DIi8+DQoJCQkJCTx0aXRsZT5NZWRpY2F0aW9uczwvdGl0bGU+DQoJCQkJCTx0ZXh0Pg0KCQkJCQkJPGxpc3Q+DQoJCQkJCQkJPGl0ZW0+VGhlb2R1ciAyMDBtZyBCSUQ8L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+UHJvdmVudGlsIGluaGFsZXIgMnB1ZmZzIFFJRCBQUk48L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+UHJlZG5pc29uZSAyMG1nIHFkPC9pdGVtPg0KCQkJCQkJCTxpdGVtPkhDVFogMjVtZyBxZDwvaXRlbT4NCgkJCQkJCTwvbGlzdD4NCgkJCQkJPC90ZXh0Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8U3Vic3RhbmNlQWRtaW5pc3RyYXRpb24+DQoJCQkJCQkJPHRleHQ+VGhlb2R1ciAyMDBtZyBCSUQ8L3RleHQ+DQoJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgeHNpOnR5cGU9IlBJVkxfVFMiIGluc3RpdHV0aW9uU3BlY2lmaWVkPSJ0cnVlIj4NCgkJCQkJCQkJPHBlcmlvZCB2YWx1ZT0iMTIiIHVuaXQ9ImgiLz4NCgkJCQkJCQk8L2VmZmVjdGl2ZVRpbWU+DQoJCQkJCQkJPHJvdXRlQ29kZSBjb2RlPSJQTyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNS4xMTIiIGNvZGVTeXN0ZW1OYW1lPSJSb3V0ZU9mQWRtaW5pc3RyYXRpb24iLz4NCgkJCQkJCQk8ZG9zZVF1YW50aXR5Pg0KCQkJCQkJCQk8Y2VudGVyIHZhbHVlPSIyMDAiIHVuaXQ9Im1nIi8+DQoJCQkJCQkJPC9kb3NlUXVhbnRpdHk+DQoJCQkJCQkJPGNvbnN1bWFibGU+DQoJCQkJCQkJCTxtYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCQkJPG1hbnVmYWN0dXJlZExhYmVsZWREcnVnPg0KCQkJCQkJCQkJCTxjb2RlIGNvZGU9IjY2NDkzMDAzIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iVGhlb3BoeWxsaW5lIi8+DQoJCQkJCQkJCQk8L21hbnVmYWN0dXJlZExhYmVsZWREcnVnPg0KCQkJCQkJCQk8L21hbnVmYWN0dXJlZFByb2R1Y3Q+DQoJCQkJCQkJPC9jb25zdW1hYmxlPg0KCQkJCQkJPC9TdWJzdGFuY2VBZG1pbmlzdHJhdGlvbj4NCgkJCQkJPC9lbnRyeT4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPFN1YnN0YW5jZUFkbWluaXN0cmF0aW9uPg0KCQkJCQkJCTx0ZXh0PlByb3ZlbnRpbCBpbmhhbGVyIDJwdWZmcyBRSUQgUFJOPC90ZXh0Pg0KCQkJCQkJCTxlZmZlY3RpdmVUaW1lIHhzaTp0eXBlPSJQSVZMX1RTIiBpbnN0aXR1dGlvblNwZWNpZmllZD0idHJ1ZSI+DQoJCQkJCQkJCTxwZXJpb2QgdmFsdWU9IjYiIHVuaXQ9ImgiLz4NCgkJCQkJCQk8L2VmZmVjdGl2ZVRpbWU+DQoJCQkJCQkJPHByaW9yaXR5Q29kZSBjb2RlPSJQUk4iLz4NCgkJCQkJCQk8cm91dGVDb2RlIGNvZGU9IklQSU5ITCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNS4xMTIiIGNvZGVTeXN0ZW1OYW1lPSJSb3V0ZU9mQWRtaW5pc3RyYXRpb24iIGRpc3BsYXlOYW1lPSJJbmhhbGF0aW9uLCBvcmFsIi8+DQoJCQkJCQkJPGRvc2VRdWFudGl0eT4NCgkJCQkJCQkJPGNlbnRlciB2YWx1ZT0iMiIvPg0KCQkJCQkJCTwvZG9zZVF1YW50aXR5Pg0KCQkJCQkJCTxjb25zdW1hYmxlPg0KCQkJCQkJCQk8bWFudWZhY3R1cmVkUHJvZHVjdD4NCgkJCQkJCQkJCTxtYW51ZmFjdHVyZWRMYWJlbGVkRHJ1Zz4NCgkJCQkJCQkJCQk8Y29kZSBjb2RlPSI5MTE0MzAwMyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkFsYnV0ZXJvbCIvPg0KCQkJCQkJCQkJPC9tYW51ZmFjdHVyZWRMYWJlbGVkRHJ1Zz4NCgkJCQkJCQkJPC9tYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCTwvY29uc3VtYWJsZT4NCgkJCQkJCTwvU3Vic3RhbmNlQWRtaW5pc3RyYXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxTdWJzdGFuY2VBZG1pbmlzdHJhdGlvbj4NCgkJCQkJCQk8aWQgcm9vdD0iMTAuMjMuMjcuMTIzIi8+DQoJCQkJCQkJPHRleHQ+UHJlZG5pc29uZSAyMG1nIHFkPC90ZXh0Pg0KCQkJCQkJCTxlZmZlY3RpdmVUaW1lIHhzaTp0eXBlPSJQSVZMX1RTIiBpbnN0aXR1dGlvblNwZWNpZmllZD0idHJ1ZSI+DQoJCQkJCQkJCTxwZXJpb2QgdmFsdWU9IjI0IiB1bml0PSJoIi8+DQoJCQkJCQkJPC9lZmZlY3RpdmVUaW1lPg0KCQkJCQkJCTxyb3V0ZUNvZGUgY29kZT0iUE8iIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjUuMTEyIiBjb2RlU3lzdGVtTmFtZT0iUm91dGVPZkFkbWluaXN0cmF0aW9uIi8+DQoJCQkJCQkJPGRvc2VRdWFudGl0eT4NCgkJCQkJCQkJPGNlbnRlciB2YWx1ZT0iMjAiIHVuaXQ9Im1nIi8+DQoJCQkJCQkJPC9kb3NlUXVhbnRpdHk+DQoJCQkJCQkJPGNvbnN1bWFibGU+DQoJCQkJCQkJCTxtYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCQkJPG1hbnVmYWN0dXJlZExhYmVsZWREcnVnPg0KCQkJCQkJCQkJCTxjb2RlIGNvZGU9IjEwMzEyMDAzIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iUHJlZG5pc29uZSBwcmVwYXJhdGlvbiIvPg0KCQkJCQkJCQkJPC9tYW51ZmFjdHVyZWRMYWJlbGVkRHJ1Zz4NCgkJCQkJCQkJPC9tYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCTwvY29uc3VtYWJsZT4NCgkJCQkJCTwvU3Vic3RhbmNlQWRtaW5pc3RyYXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxTdWJzdGFuY2VBZG1pbmlzdHJhdGlvbj4NCgkJCQkJCQk8dGV4dD5IQ1RaIDI1bWcgcWQ8L3RleHQ+DQoJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgeHNpOnR5cGU9IlBJVkxfVFMiIGluc3RpdHV0aW9uU3BlY2lmaWVkPSJ0cnVlIj4NCgkJCQkJCQkJPHBlcmlvZCB2YWx1ZT0iMjQiIHVuaXQ9ImgiLz4NCgkJCQkJCQk8L2VmZmVjdGl2ZVRpbWU+DQoJCQkJCQkJPHJvdXRlQ29kZSBjb2RlPSJQTyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNS4xMTIiIGNvZGVTeXN0ZW1OYW1lPSJSb3V0ZU9mQWRtaW5pc3RyYXRpb24iLz4NCgkJCQkJCQk8Y29uc3VtYWJsZT4NCgkJCQkJCQkJPG1hbnVmYWN0dXJlZFByb2R1Y3Q+DQoJCQkJCQkJCQk8bWFudWZhY3R1cmVkTGFiZWxlZERydWc+DQoJCQkJCQkJCQkJPGNvZGUgY29kZT0iMzc2MjA5MDA2IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iSHlkcm9jaGxvcm90aGlhemlkZSAyNW1nIHRhYmxldCIvPg0KCQkJCQkJCQkJPC9tYW51ZmFjdHVyZWRMYWJlbGVkRHJ1Zz4NCgkJCQkJCQkJPC9tYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCTwvY29uc3VtYWJsZT4NCgkJCQkJCTwvU3Vic3RhbmNlQWRtaW5pc3RyYXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJPC9zZWN0aW9uPg0KCQkJPC9jb21wb25lbnQ+DQoJCQk8IS0tIA0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgQWxsZXJnaWVzICYgQWR2ZXJzZSBSZWFjdGlvbnMgc2VjdGlvbg0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCi0tPg0KCQkJPGNvbXBvbmVudD4NCgkJCQk8c2VjdGlvbj4NCgkJCQkJPGNvZGUgY29kZT0iMTAxNTUtMCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4xIiBjb2RlU3lzdGVtTmFtZT0iTE9JTkMiLz4NCgkJCQkJPHRpdGxlPkFsbGVyZ2llcyBhbmQgQWR2ZXJzZSBSZWFjdGlvbnM8L3RpdGxlPg0KCQkJCQk8dGV4dD4NCgkJCQkJCTxsaXN0Pg0KCQkJCQkJCTxpdGVtPlBlbmljaWxsaW4gLSBIaXZlczwvaXRlbT4NCgkJCQkJCQk8aXRlbT5Bc3BpcmluIC0gV2hlZXppbmc8L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+Q29kZWluZSAtIEl0Y2hpbmcgYW5kIG5hdXNlYTwvaXRlbT4NCgkJCQkJCTwvbGlzdD4NCgkJCQkJPC90ZXh0Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJPGNvZGUgY29kZT0iODQxMDAwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJoaXN0b3J5IHRha2luZyAocHJvY2VkdXJlKSIvPg0KCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iQ0QiIGNvZGU9IjI0NzQ3MjAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkhpdmVzIi8+DQoJCQkJCQkJPGVudHJ5UmVsYXRpb25zaGlwIHR5cGVDb2RlPSJNRlNUIj4NCgkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iODQxMDAwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJoaXN0b3J5IHRha2luZyAocHJvY2VkdXJlKSIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iOTE5MzYwMDUiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJBbGxlcmd5IHRvIHBlbmljaWxsaW4iLz4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5UmVsYXRpb25zaGlwPg0KCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJPC9lbnRyeT4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCTxjb2RlIGNvZGU9Ijg0MTAwMDA3IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iaGlzdG9yeSB0YWtpbmcgKHByb2NlZHVyZSkiLz4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSI1NjAxODAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IldoZWV6aW5nIi8+DQoJCQkJCQkJPGVudHJ5UmVsYXRpb25zaGlwIHR5cGVDb2RlPSJNRlNUIj4NCgkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iODQxMDAwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJoaXN0b3J5IHRha2luZyAocHJvY2VkdXJlKSIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iMjkzNTg2MDAxIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQWxsZXJneSB0byBhc3BpcmluIi8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeVJlbGF0aW9uc2hpcD4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSI4NDEwMDAwNyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Imhpc3RvcnkgdGFraW5nIChwcm9jZWR1cmUpIi8+DQoJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iMzI3MzgwMDAiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJQcnVyaXRpcyIvPg0KCQkJCQkJCTxlbnRyeVJlbGF0aW9uc2hpcCB0eXBlQ29kZT0iTUZTVCI+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxpZCByb290PSIyLjE2Ljg0MC4xLjExMzg4My4zLjkzMy4yNS40NyIvPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iODQxMDAwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJoaXN0b3J5IHRha2luZyAocHJvY2VkdXJlKSIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iNjIwMTQwMDMiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJBZHZlcnNlIHJlYWN0aW9uIHRvIGRydWciPg0KCQkJCQkJCQkJCTxxdWFsaWZpZXI+DQoJCQkJCQkJCQkJCTxuYW1lIGNvZGU9IjI0NjA3NTAwMyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9ImNhdXNhdGl2ZSBhZ2VudCIvPg0KCQkJCQkJCQkJCQk8dmFsdWUgY29kZT0iMTQ3NjAwMiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9ImNvZGVpbmUiLz4NCgkJCQkJCQkJCQk8L3F1YWxpZmllcj4NCgkJCQkJCQkJCTwvdmFsdWU+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeVJlbGF0aW9uc2hpcD4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSI4NDEwMDAwNyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Imhpc3RvcnkgdGFraW5nIChwcm9jZWR1cmUpIi8+DQoJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iNzM4NzkwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJOYXVzZWEiLz4NCgkJCQkJCQk8ZW50cnlSZWxhdGlvbnNoaXAgdHlwZUNvZGU9Ik1GU1QiPg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8aWQgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMy45MzMuMjUuNDciLz4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9Ijg0MTAwMDA3IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2Ii8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeVJlbGF0aW9uc2hpcD4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJPC9zZWN0aW9uPg0KCQkJPC9jb21wb25lbnQ+DQoJCQk8IS0tIA0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgRmFtaWx5IEhpc3Rvcnkgc2VjdGlvbg0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCi0tPg0KCQkJPGNvbXBvbmVudD4NCgkJCQk8c2VjdGlvbj4NCgkJCQkJPGNvZGUgY29kZT0iMTAxNTctMiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4xIiBjb2RlU3lzdGVtTmFtZT0iTE9JTkMiLz4NCgkJCQkJPHRpdGxlPkZhbWlseSBoaXN0b3J5PC90aXRsZT4NCgkJCQkJPHRleHQ+DQoJCQkJCQk8bGlzdD4NCgkJCQkJCQk8aXRlbT5GYXRoZXIgaGFkIGZhdGFsIE1JIGluIGhpcyBlYXJseSA1MCdzLjwvaXRlbT4NCgkJCQkJCQk8aXRlbT5ObyBjYW5jZXIgb3IgZGlhYmV0ZXMuPC9pdGVtPg0KCQkJCQkJPC9saXN0Pg0KCQkJCQk8L3RleHQ+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSI4NDEwMDAwNyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Imhpc3RvcnkgdGFraW5nIChwcm9jZWR1cmUpIi8+DQoJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjE5NzAiLz4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyMjI5ODAwNiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Ik1JIi8+DQoJCQkJCQkJPHN1YmplY3Q+DQoJCQkJCQkJCTxyZWxhdGVkU3ViamVjdCBjbGFzc0NvZGU9IlBSUyI+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSJGVEgiLz4NCgkJCQkJCQkJPC9yZWxhdGVkU3ViamVjdD4NCgkJCQkJCQk8L3N1YmplY3Q+DQoJCQkJCQkJPGVudHJ5UmVsYXRpb25zaGlwIHR5cGVDb2RlPSJDQVVTIj4NCgkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iODQxMDAwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJoaXN0b3J5IHRha2luZyAocHJvY2VkdXJlKSIvPg0KCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjE5NzAiLz4NCgkJCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iQ0QiIGNvZGU9IjM5OTM0NzAwOCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9ImRlYXRoIi8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeVJlbGF0aW9uc2hpcD4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbiBuZWdhdGlvbkluZD0idHJ1ZSI+DQoJCQkJCQkJPGNvZGUgY29kZT0iODQxMDAwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJoaXN0b3J5IHRha2luZyAocHJvY2VkdXJlKSIvPg0KCQkJCQkJCTxlZmZlY3RpdmVUaW1lPg0KCQkJCQkJCQk8aGlnaCB2YWx1ZT0iMjAwMDA0MDciIGluY2x1c2l2ZT0idHJ1ZSIvPg0KCQkJCQkJCTwvZWZmZWN0aXZlVGltZT4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyNzU5MzcwMDEiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJGYW1pbHkgaGlzdG9yeSBvZiBjYW5jZXIiLz4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSI4NDEwMDAwNyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Imhpc3RvcnkgdGFraW5nIChwcm9jZWR1cmUpIi8+DQoJCQkJCQkJPGVmZmVjdGl2ZVRpbWU+DQoJCQkJCQkJCTxoaWdoIHZhbHVlPSIyMDAwMDQwNyIgaW5jbHVzaXZlPSJ0cnVlIi8+DQoJCQkJCQkJPC9lZmZlY3RpdmVUaW1lPg0KCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iQ0QiIGNvZGU9IjE2MDI3NDAwNSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Ik5vIGZhbWlseSBoaXN0b3J5IG9mIGRpYWJldGVzIi8+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCTwvc2VjdGlvbj4NCgkJCTwvY29tcG9uZW50Pg0KCQkJPCEtLSANCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogIFNvY2lhbCBIaXN0b3J5IHNlY3Rpb24NCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQotLT4NCgkJCTxjb21wb25lbnQ+DQoJCQkJPHNlY3Rpb24+DQoJCQkJCTxjb2RlIGNvZGU9IjI5NzYyLTIiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIgY29kZVN5c3RlbU5hbWU9IkxPSU5DIi8+DQoJCQkJCTx0aXRsZT5Tb2NpYWwgSGlzdG9yeTwvdGl0bGU+DQoJCQkJCTx0ZXh0Pg0KCQkJCQkJPGxpc3Q+DQoJCQkJCQkJPGl0ZW0+U21va2luZyA6OiAxIFBQRCBiZXR3ZWVuIHRoZSBhZ2VzIG9mIDIwIGFuZCA1NSwgYW5kIHRoZW4gaGUgcXVpdC48L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+QWxjb2hvbCA6OiByYXJlPC9pdGVtPg0KCQkJCQkJPC9saXN0Pg0KCQkJCQk8L3RleHQ+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSIyMjk4MTkwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJUb2JhY2NvIHVzZSBhbmQgZXhwb3N1cmUiLz4NCgkJCQkJCQk8ZWZmZWN0aXZlVGltZT4NCgkJCQkJCQkJPGxvdyB2YWx1ZT0iMTk1NSIvPg0KCQkJCQkJCQk8aGlnaCB2YWx1ZT0iMTk5MCIvPg0KCQkJCQkJCTwvZWZmZWN0aXZlVGltZT4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyNjY5MjQwMDgiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJleC1oZWF2eSBjaWdhcmV0dGUgc21va2VyICgyMC0zOS9kYXkpIi8+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJPGNvZGUgY29kZT0iMTYwNjI1MDA0IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iRGF0ZSBjZWFzZWQgc21va2luZyIvPg0KCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iVFMiIHZhbHVlPSIxOTkwIi8+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJPGNvZGUgY29kZT0iMTYwNTczMDAzIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQWxjb2hvbCBpbnRha2UiLz4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyNjY5MTcwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJUcml2aWFsIGRyaW5rZXIgLSAgbGVzcyB0aGFuIDEvZGF5Ii8+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCTwvc2VjdGlvbj4NCgkJCTwvY29tcG9uZW50Pg0KCQkJPCEtLSANCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogIFBoeXNpY2FsIEV4YW0gc2VjdGlvbg0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCi0tPg0KCQkJPGNvbXBvbmVudD4NCgkJCQk8c2VjdGlvbj4NCgkJCQkJPGNvZGUgY29kZT0iMTEzODQtNSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4xIiBjb2RlU3lzdGVtTmFtZT0iTE9JTkMiLz4NCgkJCQkJPHRpdGxlPlBoeXNpY2FsIEV4YW1pbmF0aW9uPC90aXRsZT4NCgkJCQkJPCEtLSANCiAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgICAgICAgICAgUGh5c2ljYWwgRXhhbSAgLSBWaXRhbCBTaWducw0KICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogICAgICAgICAgLS0+DQoJCQkJCTxjb21wb25lbnQ+DQoJCQkJCQk8c2VjdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSI4NzE2LTMiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIgY29kZVN5c3RlbU5hbWU9IkxPSU5DIi8+DQoJCQkJCQkJPHRpdGxlPlZpdGFsIFNpZ25zPC90aXRsZT4NCgkJCQkJCQk8dGV4dD4NCgkJCQkJCQkJPHRhYmxlPg0KCQkJCQkJCQkJPHRyPg0KCQkJCQkJCQkJCTx0aD5EYXRlIC8gVGltZTwvdGg+DQoJCQkJCQkJCQkJPHRoPkFwcmlsIDcsIDIwMDAgMTQ6MzA8L3RoPg0KCQkJCQkJCQkJCTx0aD5BcHJpbCA3LCAyMDAwIDE1OjMwPC90aD4NCgkJCQkJCQkJCTwvdHI+DQoJCQkJCQkJCQk8dHI+DQoJCQkJCQkJCQkJPHRoPkhlaWdodDwvdGg+DQoJCQkJCQkJCQkJPHRkPjE3NyBjbSAoNjkuNyBpbik8L3RkPg0KCQkJCQkJCQkJPC90cj4NCgkJCQkJCQkJCTx0cj4NCgkJCQkJCQkJCQk8dGg+V2VpZ2h0PC90aD4NCgkJCQkJCQkJCQk8dGQ+MTk0LjAgbGJzICg4OC4wIGtnKTwvdGQ+DQoJCQkJCQkJCQk8L3RyPg0KCQkJCQkJCQkJPHRyPg0KCQkJCQkJCQkJCTx0aD5CTUk8L3RoPg0KCQkJCQkJCQkJCTx0ZD4yOC4xIGtnL20yPC90ZD4NCgkJCQkJCQkJCTwvdHI+DQoJCQkJCQkJCQk8dHI+DQoJCQkJCQkJCQkJPHRoPkJTQTwvdGg+DQoJCQkJCQkJCQkJPHRkPjIuMDUgbTI8L3RkPg0KCQkJCQkJCQkJPC90cj4NCgkJCQkJCQkJCTx0cj4NCgkJCQkJCQkJCQk8dGg+VGVtcGVyYXR1cmU8L3RoPg0KCQkJCQkJCQkJCTx0ZD4zNi45IEMgKDk4LjUgRik8L3RkPg0KCQkJCQkJCQkJCTx0ZD4zNi45IEMgKDk4LjUgRik8L3RkPg0KCQkJCQkJCQkJPC90cj4NCgkJCQkJCQkJCTx0cj4NCgkJCQkJCQkJCQk8dGg+UHVsc2U8L3RoPg0KCQkJCQkJCQkJCTx0ZD44NiAvIG1pbnV0ZTwvdGQ+DQoJCQkJCQkJCQkJPHRkPjg0IC8gbWludXRlPC90ZD4NCgkJCQkJCQkJCTwvdHI+DQoJCQkJCQkJCQk8dHI+DQoJCQkJCQkJCQkJPHRoPlJoeXRobTwvdGg+DQoJCQkJCQkJCQkJPHRkPlJlZ3VsYXI8L3RkPg0KCQkJCQkJCQkJCTx0ZD5SZWd1bGFyPC90ZD4NCgkJCQkJCQkJCTwvdHI+DQoJCQkJCQkJCQk8dHI+DQoJCQkJCQkJCQkJPHRoPlJlc3BpcmF0aW9uczwvdGg+DQoJCQkJCQkJCQkJPHRkPjE2IC8gbWludXRlLCB1bmxhYm9yZWQ8L3RkPg0KCQkJCQkJCQkJCTx0ZD4xNCAvIG1pbnV0ZTwvdGQ+DQoJCQkJCQkJCQk8L3RyPg0KCQkJCQkJCQkJPHRyPg0KCQkJCQkJCQkJCTx0aD5TeXN0b2xpYzwvdGg+DQoJCQkJCQkJCQkJPHRkPjEzMiBtbUhnPC90ZD4NCgkJCQkJCQkJCQk8dGQ+MTM1IG1tSGc8L3RkPg0KCQkJCQkJCQkJPC90cj4NCgkJCQkJCQkJCTx0cj4NCgkJCQkJCQkJCQk8dGg+RGlhc3RvbGljPC90aD4NCgkJCQkJCQkJCQk8dGQ+ODYgbW1IZzwvdGQ+DQoJCQkJCQkJCQkJPHRkPjg4IG1tSGc8L3RkPg0KCQkJCQkJCQkJPC90cj4NCgkJCQkJCQkJCTx0cj4NCgkJCQkJCQkJCQk8dGg+UG9zaXRpb24gLyBDdWZmPC90aD4NCgkJCQkJCQkJCQk8dGQ+TGVmdCBBcm08L3RkPg0KCQkJCQkJCQkJCTx0ZD5MZWZ0IEFybTwvdGQ+DQoJCQkJCQkJCQk8L3RyPg0KCQkJCQkJCQk8L3RhYmxlPg0KCQkJCQkJCTwvdGV4dD4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjUwMzczMDAwIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQm9keSBoZWlnaHQgbWVhc3VyZSIvPg0KCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTQzMCIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJQUSIgdmFsdWU9IjEuNzciIHVuaXQ9Im0iPg0KCQkJCQkJCQkJCTx0cmFuc2xhdGlvbiB2YWx1ZT0iNjkuNyIgY29kZT0iW2luX0ldIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjgiIGNvZGVTeXN0ZW1OYW1lPSJVQ1VNIi8+DQoJCQkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQkJCTwvZW50cnk+DQoJCQkJCQkJPGVudHJ5Pg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIzNjM4MDgwMDEiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJCb2R5IHdlaWdodCBtZWFzdXJlIi8+DQoJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNDMwIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IlBRIiB2YWx1ZT0iMTk0LjAiIHVuaXQ9IltsYl9hcF0iPg0KCQkJCQkJCQkJCTx0cmFuc2xhdGlvbiB2YWx1ZT0iODguMCIgY29kZT0ia2ciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOCIgY29kZVN5c3RlbU5hbWU9IlVDVU0iLz4NCgkJCQkJCQkJCTwvdmFsdWU+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjYwNjIxMDA5IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQm9keSBtYXNzIGluZGV4Ii8+DQoJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNDMwIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IlJUT19QUV9QUSI+DQoJCQkJCQkJCQkJPG51bWVyYXRvciB2YWx1ZT0iMjguMSIgdW5pdD0ia2ciLz4NCgkJCQkJCQkJCQk8ZGVub21pbmF0b3IgdmFsdWU9IjEiIHVuaXQ9ImFyIi8+DQoJCQkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQkJCTwvZW50cnk+DQoJCQkJCQkJPGVudHJ5Pg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIzMDE4OTgwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJCb2R5IHN1cmZhY2UgYXJlYSIvPg0KCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTQzMCIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJQUSIgdmFsdWU9IjIuMDUiIHVuaXQ9ImFyIi8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjM4NjcyNTAwNyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkJvZHkgdGVtcGVyYXR1cmUiLz4NCgkJCQkJCQkJCTxlZmZlY3RpdmVUaW1lIHZhbHVlPSIyMDAwMDQwNzE0MzAiLz4NCgkJCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iUFEiIHZhbHVlPSIzNi45IiB1bml0PSJDZWwiPg0KCQkJCQkJCQkJCTx0cmFuc2xhdGlvbiB2YWx1ZT0iOTguNSIgY29kZT0iW2RlZ0ZdIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjgiIGNvZGVTeXN0ZW1OYW1lPSJVQ1VNIi8+DQoJCQkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQkJCTwvZW50cnk+DQoJCQkJCQkJPGVudHJ5Pg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIzNjQwNzUwMDUiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJIZWFydCByYXRlIi8+DQoJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNDMwIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IlJUT19QUV9QUSI+DQoJCQkJCQkJCQkJPG51bWVyYXRvciB2YWx1ZT0iODYiLz4NCgkJCQkJCQkJCQk8ZGVub21pbmF0b3IgdmFsdWU9IjEiIHVuaXQ9Im1pbiIvPg0KCQkJCQkJCQkJPC92YWx1ZT4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5Pg0KCQkJCQkJCTxlbnRyeT4NCgkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iMzY0MDc1MDA1IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iSGVhcnQgcmF0ZSIvPg0KCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTUzMCIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJSVE9fUFFfUFEiPg0KCQkJCQkJCQkJCTxudW1lcmF0b3IgdmFsdWU9Ijg0Ii8+DQoJCQkJCQkJCQkJPGRlbm9taW5hdG9yIHZhbHVlPSIxIiB1bml0PSJtaW4iLz4NCgkJCQkJCQkJCTwvdmFsdWU+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjM2NDA3NDAwOSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IlJlZ3VsYXJpdHkgb2YgaGVhcnQgcmh5dGhtIi8+DQoJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNDMwIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyNDg2NDkwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJIZWFydCByZWd1bGFyIi8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjM2NDA3NDAwOSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IlJlZ3VsYXJpdHkgb2YgaGVhcnQgcmh5dGhtIi8+DQoJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNTMwIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyNDg2NDkwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJIZWFydCByZWd1bGFyIi8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9Ijg2MjkwMDA1IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iUmVzcGlyYXRvcnkgcmF0ZSIvPg0KCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTQzMCIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJSVE9fUFFfUFEiPg0KCQkJCQkJCQkJCTxudW1lcmF0b3IgdmFsdWU9IjE2Ii8+DQoJCQkJCQkJCQkJPGRlbm9taW5hdG9yIHZhbHVlPSIxIiB1bml0PSJtaW4iLz4NCgkJCQkJCQkJCTwvdmFsdWU+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjI3ODkwNzAwOSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IlJlc3BpcmF0b3J5IHBhdHRlcm4iLz4NCgkJCQkJCQkJCTxlZmZlY3RpdmVUaW1lIHZhbHVlPSIyMDAwMDQwNzE0MzAiLz4NCgkJCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iQ0QiIGNvZGU9IjI3NjM2MjAwMiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkJyZWF0aGluZyBlYXNpbHkiLz4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5Pg0KCQkJCQkJCTxlbnRyeT4NCgkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iODYyOTAwMDUiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJSZXNwaXJhdG9yeSByYXRlIi8+DQoJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNTMwIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IlJUT19QUV9QUSI+DQoJCQkJCQkJCQkJPG51bWVyYXRvciB2YWx1ZT0iMTQiLz4NCgkJCQkJCQkJCQk8ZGVub21pbmF0b3IgdmFsdWU9IjEiIHVuaXQ9Im1pbiIvPg0KCQkJCQkJCQkJPC92YWx1ZT4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5Pg0KCQkJCQkJCTxlbnRyeT4NCgkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iMjUxMDc2MDA4IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQ3VmZiBibG9vZCBwcmVzc3VyZSIvPg0KCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTQzMCIvPg0KCQkJCQkJCQkJPHRhcmdldFNpdGVDb2RlIGNvZGU9IjM2ODIwODAwNiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkxlZnQgYXJtIi8+DQoJCQkJCQkJCQk8ZW50cnlSZWxhdGlvbnNoaXAgdHlwZUNvZGU9IkNPTVAiPg0KCQkJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCQkJPGNvZGUgY29kZT0iMjcxNjQ5MDA2IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iU3lzdG9saWMgQlAiLz4NCgkJCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTUzMCIvPg0KCQkJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IlBRIiB2YWx1ZT0iMTMyIiB1bml0PSJtbVtIZ10iLz4NCgkJCQkJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQkJCQkJPC9lbnRyeVJlbGF0aW9uc2hpcD4NCgkJCQkJCQkJCTxlbnRyeVJlbGF0aW9uc2hpcCB0eXBlQ29kZT0iQ09NUCI+DQoJCQkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJCQk8Y29kZSBjb2RlPSIyNzE2NTAwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJEaWFzdG9saWMgQlAiLz4NCgkJCQkJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTUzMCIvPg0KCQkJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IlBRIiB2YWx1ZT0iODYiIHVuaXQ9Im1tW0hnXSIvPg0KCQkJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8L2VudHJ5UmVsYXRpb25zaGlwPg0KCQkJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQkJCTwvZW50cnk+DQoJCQkJCQkJPGVudHJ5Pg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIyNTEwNzYwMDgiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJDdWZmIGJsb29kIHByZXNzdXJlIi8+DQoJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNTMwIi8+DQoJCQkJCQkJCQk8dGFyZ2V0U2l0ZUNvZGUgY29kZT0iMzY4MjA4MDA2IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iTGVmdCBhcm0iLz4NCgkJCQkJCQkJCTxlbnRyeVJlbGF0aW9uc2hpcCB0eXBlQ29kZT0iQ09NUCI+DQoJCQkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJCQk8Y29kZSBjb2RlPSIyNzE2NDkwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJTeXN0b2xpYyBCUCIvPg0KCQkJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNTMwIi8+DQoJCQkJCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iUFEiIHZhbHVlPSIxMzUiIHVuaXQ9Im1tW0hnXSIvPg0KCQkJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8L2VudHJ5UmVsYXRpb25zaGlwPg0KCQkJCQkJCQkJPGVudHJ5UmVsYXRpb25zaGlwIHR5cGVDb2RlPSJDT01QIj4NCgkJCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQkJCTxjb2RlIGNvZGU9IjI3MTY1MDAwNiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkRpYXN0b2xpYyBCUCIvPg0KCQkJCQkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNTMwIi8+DQoJCQkJCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iUFEiIHZhbHVlPSI4OCIgdW5pdD0ibW1bSGddIi8+DQoJCQkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTwvZW50cnlSZWxhdGlvbnNoaXA+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCTwvc2VjdGlvbj4NCgkJCQkJPC9jb21wb25lbnQ+DQoJCQkJCTwhLS0gDQogICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgICAgICAgICAgIFBoeXNpY2FsIEV4YW0gIC0gU2tpbg0KICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogICAgICAgICAgLS0+DQoJCQkJCTxjb21wb25lbnQ+DQoJCQkJCQk8c2VjdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSI4NzA5LTgiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIgY29kZVN5c3RlbU5hbWU9IkxPSU5DIi8+DQoJCQkJCQkJPHRpdGxlPlNraW4gRXhhbTwvdGl0bGU+DQoJCQkJCQkJPHRleHQ+RXJ5dGhlbWF0b3VzIHJhc2gsIHBhbG1hciBzdXJmYWNlLCBsZWZ0IGluZGV4IGZpbmdlci4NCgkJCQkJCQkJIDxyZW5kZXJNdWx0aU1lZGlhIHJlZmVyZW5jZWRPYmplY3Q9Ik1NMSIvPg0KCQkJCQkJCTwvdGV4dD4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjEwNjA3NjAwMSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IlNraW4gZmluZGluZyIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iMjcxODA3MDAzIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iUmFzaCIvPg0KCQkJCQkJCQkJPHRhcmdldFNpdGVDb2RlIGNvZGU9IjQ4ODU2MDA0IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iU2tpbiBvZiBwYWxtZXIgc3VyZmFjZSBvZiBpbmRleCBmaW5nZXIiPg0KCQkJCQkJCQkJCTxxdWFsaWZpZXI+DQoJCQkJCQkJCQkJCTxuYW1lIGNvZGU9Ijc4NjE1MDA3IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0id2l0aCBsYXRlcmFsaXR5Ii8+DQoJCQkJCQkJCQkJCTx2YWx1ZSBjb2RlPSI3NzcxMDAwIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0ibGVmdCIvPg0KCQkJCQkJCQkJCTwvcXVhbGlmaWVyPg0KCQkJCQkJCQkJPC90YXJnZXRTaXRlQ29kZT4NCgkJCQkJCQkJCTxlbnRyeVJlbGF0aW9uc2hpcCB0eXBlQ29kZT0iU1BSVCI+DQoJCQkJCQkJCQkJPFJlZ2lvbk9mSW50ZXJlc3QgTU1JRD0iTU0xIj4NCgkJCQkJCQkJCQkJPGlkIHJvb3Q9IjEwLjIzLjQ1NjcuNDQ4OSIvPg0KCQkJCQkJCQkJCQk8Y29kZSBjb2RlPSJFTExJUFNFIi8+DQoJCQkJCQkJCQkJCTx2YWx1ZT4zIDEgMyA3IDIgNCA0IDQ8L3ZhbHVlPg0KCQkJCQkJCQkJCQk8ZW50cnlSZWxhdGlvbnNoaXAgdHlwZUNvZGU9IlNVQkoiPg0KCQkJCQkJCQkJCQkJPE9ic2VydmF0aW9uTWVkaWE+DQoJCQkJCQkJCQkJCQkJPGlkIHJvb3Q9IjEwLjIzLjQ1NjcuMzQ1Ii8+DQoJCQkJCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJFRCIgbWVkaWFUeXBlPSJpbWFnZS9qcGVnIj4NCgkJCQkJCQkJCQkJCQkJPHJlZmVyZW5jZSB2YWx1ZT0ibGVmdGhhbmQuanBlZyIvPg0KCQkJCQkJCQkJCQkJCTwvdmFsdWU+DQoJCQkJCQkJCQkJCQk8L09ic2VydmF0aW9uTWVkaWE+DQoJCQkJCQkJCQkJCTwvZW50cnlSZWxhdGlvbnNoaXA+DQoJCQkJCQkJCQkJPC9SZWdpb25PZkludGVyZXN0Pg0KCQkJCQkJCQkJPC9lbnRyeVJlbGF0aW9uc2hpcD4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5Pg0KCQkJCQkJPC9zZWN0aW9uPg0KCQkJCQk8L2NvbXBvbmVudD4NCgkJCQkJPCEtLSANCiAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgICAgICAgICAgUGh5c2ljYWwgRXhhbSAgLSBMdW5ncw0KICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogICAgICAgICAgLS0+DQoJCQkJCTxjb21wb25lbnQ+DQoJCQkJCQk8c2VjdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSI4NzEwLTYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIgY29kZVN5c3RlbU5hbWU9IkxPSU5DIi8+DQoJCQkJCQkJPHRpdGxlPkx1bmdzPC90aXRsZT4NCgkJCQkJCQk8dGV4dD5DbGVhciB3aXRoIG5vIHdoZWV6ZS4gR29vZCBhaXIgZmxvdy48L3RleHQ+DQoJCQkJCQkJPGVudHJ5Pg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIzMDE3MDgwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJSZXNwaXJhdG9yeSBzb3VuZHMiLz4NCgkJCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iQ0QiIGNvZGU9IjQ4MzQ4MDA3IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQ2hlc3QgY2xlYXIiLz4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5Pg0KCQkJCQkJCTxlbnRyeT4NCgkJCQkJCQkJPE9ic2VydmF0aW9uIG5lZ2F0aW9uSW5kPSJ0cnVlIj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjUyNjUzMDA4IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iUmVzcGlyYXRvcnkgc291bmRzIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSI1NjAxODAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IldoZWV6aW5nIi8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCTwvc2VjdGlvbj4NCgkJCQkJPC9jb21wb25lbnQ+DQoJCQkJCTwhLS0gDQogICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgICAgICAgICAgIFBoeXNpY2FsIEV4YW0gIC0gQ2FyZGlhYw0KICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogICAgICAgICAgLS0+DQoJCQkJCTxjb21wb25lbnQ+DQoJCQkJCQk8c2VjdGlvbj4NCgkJCQkJCQk8Y29kZSBjb2RlPSIxMDIyMy0yIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjEiIGNvZGVTeXN0ZW1OYW1lPSJMT0lOQyIvPg0KCQkJCQkJCTx0aXRsZT5DYXJkaWFjPC90aXRsZT4NCgkJCQkJCQk8dGV4dD5SUlIgd2l0aCBubyBtdXJtdXIsIG5vIFMzLCBubyBTNC48L3RleHQ+DQoJCQkJCQkJPGVudHJ5Pg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIzNjQwNjYwMDgiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJDYXJkaW92YXNjdWxhciBvYnNlcnZhYmxlIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSI3Njg2MzAwMyIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Ik5vcm1hbCBoZWFydCByYXRlIi8+DQoJCQkJCQkJCQk8bWV0aG9kQ29kZSBjb2RlPSIzNzkzMTAwNiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkF1c2N1bHRhdGlvbiIvPg0KCQkJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQkJCTwvZW50cnk+DQoJCQkJCQkJPGVudHJ5Pg0KCQkJCQkJCQk8T2JzZXJ2YXRpb24gbmVnYXRpb25JbmQ9InRydWUiPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iMzY0MDY2MDA4IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQ2FyZGlvdmFzY3VsYXIgb2JzZXJ2YWJsZSIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iODg2MTAwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJoZWFydCBtdXJtdXIiLz4NCgkJCQkJCQkJCTxtZXRob2RDb2RlIGNvZGU9IjM3OTMxMDA2IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQXVzY3VsdGF0aW9uIi8+DQoJCQkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9lbnRyeT4NCgkJCQkJCQk8ZW50cnk+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbiBuZWdhdGlvbkluZD0idHJ1ZSI+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIzNjQwNjYwMDgiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJDYXJkaW92YXNjdWxhciBvYnNlcnZhYmxlIi8+DQoJCQkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyNzc0NTUwMDIiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJUaGlyZCBoZWFydCBzb3VuZCIvPg0KCQkJCQkJCQkJPG1ldGhvZENvZGUgY29kZT0iMzc5MzEwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJBdXNjdWx0YXRpb24iLz4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5Pg0KCQkJCQkJCTxlbnRyeT4NCgkJCQkJCQkJPE9ic2VydmF0aW9uPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iMzY0MDY2MDA4IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iQ2FyZGlvdmFzY3VsYXIgb2JzZXJ2YWJsZSIvPg0KCQkJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iNjA3MjEwMDIiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJGb3VydGggaGVhcnQgc291bmQgaW5hdWRpYmxlIi8+DQoJCQkJCQkJCQk8bWV0aG9kQ29kZSBjb2RlPSIzNzkzMTAwNiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkF1c2N1bHRhdGlvbiIvPg0KCQkJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQkJCTwvZW50cnk+DQoJCQkJCQk8L3NlY3Rpb24+DQoJCQkJCTwvY29tcG9uZW50Pg0KCQkJCTwvc2VjdGlvbj4NCgkJCTwvY29tcG9uZW50Pg0KCQkJPCEtLSANCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQogIExhYnMgc2VjdGlvbg0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCi0tPg0KCQkJPGNvbXBvbmVudD4NCgkJCQk8c2VjdGlvbj4NCgkJCQkJPGNvZGUgY29kZT0iMTE1MDItMiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4xIiBjb2RlU3lzdGVtTmFtZT0iTE9JTkMiLz4NCgkJCQkJPHRpdGxlPkxhYnM8L3RpdGxlPg0KCQkJCQk8dGV4dD4NCgkJCQkJCTxsaXN0Pg0KCQkJCQkJCTxpdGVtPkNYUiAwMi8wMy8xOTk5OiBIeXBlcmluZmxhdGVkLiBOb3JtYWwgY2FyZGlhYyBzaWxob3VldHRlLCBjbGVhciBsdW5ncy48L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+UGVhayBGbG93IHRvZGF5OiAyNjAgbC9tPC9pdGVtPg0KCQkJCQkJPC9saXN0Pg0KCQkJCQk8L3RleHQ+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8aWQgcm9vdD0iMTAuMjMuNDU3My4xNTg3NyIvPg0KCQkJCQkJCTxjb2RlIGNvZGU9IjI4MjI5MDAwNSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkltYWdpbmcgaW50ZXJwcmV0YXRpb24iLz4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSIyNDk2NzQwMDEiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJDaGVzdCBoeXBlcmluZmxhdGVkIi8+DQoJCQkJCQkJPHJlZmVyZW5jZSB0eXBlQ29kZT0iU1BSVCI+DQoJCQkJCQkJCTxFeHRlcm5hbE9ic2VydmF0aW9uIGNsYXNzQ29kZT0iREdJTUciPg0KCQkJCQkJCQkJPGlkIHJvb3Q9IjEyMy40NTYuMjU1NyIvPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iNTYzNTAwMDQiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJDaGVzdC1YLXJheSIvPg0KCQkJCQkJCQk8L0V4dGVybmFsT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9yZWZlcmVuY2U+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8T2JzZXJ2YXRpb24+DQoJCQkJCQkJPGlkIHJvb3Q9IjEwLjIzLjQ1NzMuMTU4NzgiLz4NCgkJCQkJCQk8Y29kZSBjb2RlPSIyODIyOTAwMDUiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJJbWFnaW5nIGludGVycHJldGF0aW9uIi8+DQoJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgbnVsbEZsYXZvcj0iT1RIIj4NCgkJCQkJCQkJPG9yaWdpbmFsVGV4dD5ub3JtYWwgY2FyZGlhYyBzaWxob3VldHRlPC9vcmlnaW5hbFRleHQ+DQoJCQkJCQkJPC92YWx1ZT4NCgkJCQkJCQk8cmVmZXJlbmNlIHR5cGVDb2RlPSJTUFJUIj4NCgkJCQkJCQkJPEV4dGVybmFsT2JzZXJ2YXRpb24gY2xhc3NDb2RlPSJER0lNRyI+DQoJCQkJCQkJCQk8aWQgcm9vdD0iMTIzLjQ1Ni4yNTU3Ii8+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSI1NjM1MDAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkNoZXN0LVgtcmF5Ii8+DQoJCQkJCQkJCTwvRXh0ZXJuYWxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8L3JlZmVyZW5jZT4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbiBuZWdhdGlvbkluZD0idHJ1ZSI+DQoJCQkJCQkJPGlkIHJvb3Q9IjEwLjIzLjQ1NzMuMTU4NzkiLz4NCgkJCQkJCQk8Y29kZSBjb2RlPSIyODIyOTAwMDUiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJJbWFnaW5nIGludGVycHJldGF0aW9uIi8+DQoJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgbnVsbEZsYXZvcj0iT1RIIj4NCgkJCQkJCQkJPG9yaWdpbmFsVGV4dD5yYWRpb3BhY2l0aWVzPC9vcmlnaW5hbFRleHQ+DQoJCQkJCQkJPC92YWx1ZT4NCgkJCQkJCQk8cmVmZXJlbmNlIHR5cGVDb2RlPSJTUFJUIj4NCgkJCQkJCQkJPEV4dGVybmFsT2JzZXJ2YXRpb24gY2xhc3NDb2RlPSJER0lNRyI+DQoJCQkJCQkJCQk8aWQgcm9vdD0iMTIzLjQ1Ni4yNTU3Ii8+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSI1NjM1MDAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkNoZXN0LVgtcmF5Ii8+DQoJCQkJCQkJCTwvRXh0ZXJuYWxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8L3JlZmVyZW5jZT4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbj4NCgkJCQkJCQk8aWQgcm9vdD0iMTAuMjMuNDU3My4xNTg3OSIvPg0KCQkJCQkJCTxjb2RlIGNvZGU9IjMxMzE5MzAwMiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IlBlYWsgZmxvdyIvPg0KCQkJCQkJCTxlZmZlY3RpdmVUaW1lIHZhbHVlPSIyMDAwMDQwNyIvPg0KCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iUlRPX1BRX1BRIj4NCgkJCQkJCQkJPG51bWVyYXRvciB2YWx1ZT0iMjYwIiB1bml0PSJsIi8+DQoJCQkJCQkJCTxkZW5vbWluYXRvciB2YWx1ZT0iMSIgdW5pdD0ibWluIi8+DQoJCQkJCQkJPC92YWx1ZT4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJPC9zZWN0aW9uPg0KCQkJPC9jb21wb25lbnQ+DQoJCQk8IS0tIA0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgSW4tb2ZmaWNlIFByb2NlZHVyZSBzZWN0aW9uDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KLS0+DQoJCQk8Y29tcG9uZW50Pg0KCQkJCTxzZWN0aW9uPg0KCQkJCQk8Y29kZSBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjEiIGNvZGVTeXN0ZW1OYW1lPSJMT0lOQyIgbnVsbEZsYXZvcj0iT1RIIi8+DQoJCQkJCTx0aXRsZT5Jbi1vZmZpY2UgUHJvY2VkdXJlczwvdGl0bGU+DQoJCQkJCTx0ZXh0Pg0KCQkJCQkJPGxpc3Q+DQoJCQkJCQkJPGl0ZW0+U3V0dXJlIHJlbW92YWwsIGxlZnQgZm9yZWFybS48L2l0ZW0+DQoJCQkJCQk8L2xpc3Q+DQoJCQkJCTwvdGV4dD4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPFByb2NlZHVyZT4NCgkJCQkJCQk8Y29kZSBjb2RlPSIzMDU0OTAwMSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IlN1dHVyZSByZW1vdmFsIi8+DQoJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTQzMCIvPg0KCQkJCQkJCTx0YXJnZXRTaXRlQ29kZSBjb2RlPSI2NjQ4MDAwOCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkxlZnQgZm9yZWFybSIvPg0KCQkJCQkJPC9Qcm9jZWR1cmU+DQoJCQkJCTwvZW50cnk+DQoJCQkJPC9zZWN0aW9uPg0KCQkJPC9jb21wb25lbnQ+DQoJCQk8IS0tIA0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgQXNzZXNzbWVudCBzZWN0aW9uDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KLS0+DQoJCQk8Y29tcG9uZW50Pg0KCQkJCTxzZWN0aW9uPg0KCQkJCQk8Y29kZSBjb2RlPSIxMTQ5Ni03IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjEiIGNvZGVTeXN0ZW1OYW1lPSJMT0lOQyIvPg0KCQkJCQk8dGl0bGU+QXNzZXNzbWVudDwvdGl0bGU+DQoJCQkJCTx0ZXh0Pg0KCQkJCQkJPGxpc3Q+DQoJCQkJCQkJPGl0ZW0+QXN0aG1hLCB3aXRoIHByaW9yIHNtb2tpbmcgaGlzdG9yeS4gRGlmZmljdWx0eSB3ZWFuaW5nIG9mZiBzdGVyb2lkcy4gV2lsbCB0cnkgZ3JhZHVhbCB0YXBlci48L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+SHlwZXJ0ZW5zaW9uLCB3ZWxsLWNvbnRyb2xsZWQuPC9pdGVtPg0KCQkJCQkJCTxpdGVtPkNvbnRhY3QgZGVybWF0aXRpcyBvbiBmaW5nZXIuPC9pdGVtPg0KCQkJCQkJPC9saXN0Pg0KCQkJCQk8L3RleHQ+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxPYnNlcnZhdGlvbiBjbGFzc0NvZGU9IkNPTkQiPg0KCQkJCQkJCTxjb2RlIGNvZGU9IjE0NjU3MDA5IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iRXN0YWJsaXNoZWQgZGlhZ25vc2lzIi8+DQoJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA3MTUzMCIvPg0KCQkJCQkJCTx2YWx1ZSB4c2k6dHlwZT0iQ0QiIGNvZGU9IjE5NTk2NzAwMSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkFzdGhtYSI+DQoJCQkJCQkJCTx0cmFuc2xhdGlvbiBjb2RlPSI0OTM5MCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4yIiBjb2RlU3lzdGVtTmFtZT0iSUNEOUNNIiBkaXNwbGF5TmFtZT0iQVNUSE1BIFcvTyBTVEFUVVMgQVNUSE1BVElDVVMiLz4NCgkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCTxyZWZlcmVuY2UgdHlwZUNvZGU9IkVMTksiPg0KCQkJCQkJCQk8RXh0ZXJuYWxPYnNlcnZhdGlvbiBjbGFzc0NvZGU9IkNPTkQiPg0KCQkJCQkJCQkJPGlkIHJvb3Q9IjEwLjIzLjI3LjExMS4xNyIvPg0KCQkJCQkJCQkJPGNvZGUgY29kZT0iMTQ2NTcwMDkiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJFc3RhYmxpc2hlZCBkaWFnbm9zaXMiLz4NCgkJCQkJCQkJPC9FeHRlcm5hbE9ic2VydmF0aW9uPg0KCQkJCQkJCTwvcmVmZXJlbmNlPg0KCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJPC9lbnRyeT4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPE9ic2VydmF0aW9uIGNsYXNzQ29kZT0iQ09ORCI+DQoJCQkJCQkJPGNvZGUgY29kZT0iMTQ2NTcwMDkiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJFc3RhYmxpc2hlZCBkaWFnbm9zaXMiLz4NCgkJCQkJCQk8ZWZmZWN0aXZlVGltZSB2YWx1ZT0iMjAwMDA0MDcxNTMwIi8+DQoJCQkJCQkJPHZhbHVlIHhzaTp0eXBlPSJDRCIgY29kZT0iNTk2MjEwMDAiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJFc3NlbnRpYWwgaHlwZXJ0ZW5zaW9uIj4NCgkJCQkJCQkJPHRyYW5zbGF0aW9uIGNvZGU9IjQwMTkiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMiIgY29kZVN5c3RlbU5hbWU9IklDRDlDTSIgZGlzcGxheU5hbWU9IkhZUEVSVEVOU0lPTiBOT1MiLz4NCgkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCTxyZWZlcmVuY2UgdHlwZUNvZGU9IkVMTksiPg0KCQkJCQkJCQk8RXh0ZXJuYWxPYnNlcnZhdGlvbiBjbGFzc0NvZGU9IkNPTkQiPg0KCQkJCQkJCQkJPGlkIHJvb3Q9IjEwLjIzLjI3LjExMS4xNzMyIi8+DQoJCQkJCQkJCQk8Y29kZSBjb2RlPSIxNDY1NzAwOSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkVzdGFibGlzaGVkIGRpYWdub3NpcyIvPg0KCQkJCQkJCQk8L0V4dGVybmFsT2JzZXJ2YXRpb24+DQoJCQkJCQkJPC9yZWZlcmVuY2U+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8T2JzZXJ2YXRpb24gY2xhc3NDb2RlPSJDT05EIj4NCgkJCQkJCQk8Y29kZSBjb2RlPSIxNDY1NzAwOSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkVzdGFibGlzaGVkIGRpYWdub3NpcyIvPg0KCQkJCQkJCTxlZmZlY3RpdmVUaW1lIHZhbHVlPSIyMDAwMDQwNzE1MzAiLz4NCgkJCQkJCQk8dmFsdWUgeHNpOnR5cGU9IkNEIiBjb2RlPSI0MDI3NTAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IkNvbnRhY3QgZGVybWF0aXRpcyI+DQoJCQkJCQkJCTx0cmFuc2xhdGlvbiBjb2RlPSI2OTIuOSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4yIiBjb2RlU3lzdGVtTmFtZT0iSUNEOUNNIiBkaXNwbGF5TmFtZT0iQ29udGFjdCBEZXJtYXRpdGlzLCBOT1MiLz4NCgkJCQkJCQk8L3ZhbHVlPg0KCQkJCQkJCTx0YXJnZXRTaXRlQ29kZSBjb2RlPSI0ODg1NjAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9IlNraW4gb2YgcGFsbWVyIHN1cmZhY2Ugb2YgaW5kZXggZmluZ2VyIj4NCgkJCQkJCQkJPHF1YWxpZmllcj4NCgkJCQkJCQkJCTxuYW1lIGNvZGU9Ijc4NjE1MDA3IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0id2l0aCBsYXRlcmFsaXR5Ii8+DQoJCQkJCQkJCQk8dmFsdWUgY29kZT0iNzc3MTAwMCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9ImxlZnQiLz4NCgkJCQkJCQkJPC9xdWFsaWZpZXI+DQoJCQkJCQkJPC90YXJnZXRTaXRlQ29kZT4NCgkJCQkJCTwvT2JzZXJ2YXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJPC9zZWN0aW9uPg0KCQkJPC9jb21wb25lbnQ+DQoJCQk8IS0tIA0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiAgUGxhbiBzZWN0aW9uDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KLS0+DQoJCQk8Y29tcG9uZW50Pg0KCQkJCTxzZWN0aW9uIHRlbXBsYXRlSWQ9IjIuMTYuODQwLjEuMTEzODgzLjMuMjcuMzU0Ij4NCgkJCQkJPGNvZGUgY29kZT0iMTE1MHgteSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuMy45MzMuMjc4LjQ3IiBjb2RlU3lzdGVtTmFtZT0iTXlMb2NhbENvZGVTeXN0ZW0iLz4NCgkJCQkJPHRpdGxlPlBsYW48L3RpdGxlPg0KCQkJCQk8dGV4dD4NCgkJCQkJCTxsaXN0Pg0KCQkJCQkJCTxpdGVtPkNvbXBsZXRlIFBGVHMgd2l0aCBsdW5nIHZvbHVtZXMuPC9pdGVtPg0KCQkJCQkJCTxpdGVtPkNoZW0tNyB0b21vcnJvdy48L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+VGVhY2ggcGVhayBmbG93IHJhdGUgbWVhc3VyZW1lbnQuPC9pdGVtPg0KCQkJCQkJCTxpdGVtPkRlY3JlYXNlIHByZWRuaXNvbmUgdG8gMjBxT0QgYWx0ZXJuYXRpbmcgd2l0aCAxOHFPRC48L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+SHlkcm9jb3J0aXNvbmUgY3JlYW0gdG8gZmluZ2VyIEJJRC48L2l0ZW0+DQoJCQkJCQkJPGl0ZW0+UlRDIDEgd2Vlay48L2l0ZW0+DQoJCQkJCQk8L2xpc3Q+DQoJCQkJCTwvdGV4dD4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPE9ic2VydmF0aW9uIG1vb2RDb2RlPSJJTlQiPg0KCQkJCQkJCTxpZC8+DQoJCQkJCQkJPGNvZGUgY29kZT0iMjM0MjYwMDYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJQdWxtb25hcnkgZnVuY3Rpb24gdGVzdCIvPg0KCQkJCQkJCTx0ZXh0PkNvbXBsZXRlIFBGVHMgd2l0aCBsdW5nIHZvbHVtZXMuPC90ZXh0Pg0KCQkJCQkJCTxlbnRyeVJlbGF0aW9uc2hpcCB0eXBlQ29kZT0iQ09NUCI+DQoJCQkJCQkJCTxPYnNlcnZhdGlvbiBtb29kQ29kZT0iSU5UIj4NCgkJCQkJCQkJCTxjb2RlIGNvZGU9IjI1MjQ3MjAwNCIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Ikx1bmcgdm9sdW1lIHRlc3QiLz4NCgkJCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJCQk8L2VudHJ5UmVsYXRpb25zaGlwPg0KCQkJCQkJPC9PYnNlcnZhdGlvbj4NCgkJCQkJPC9lbnRyeT4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPE9ic2VydmF0aW9uIG1vb2RDb2RlPSJJTlQiPg0KCQkJCQkJCTxjb2RlIGNvZGU9IjI0MzIwLTQiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIgY29kZVN5c3RlbU5hbWU9IkxPSU5DIj4NCgkJCQkJCQkJPG9yaWdpbmFsVGV4dD5DaGVtLTc8L29yaWdpbmFsVGV4dD4NCgkJCQkJCQkJPHRyYW5zbGF0aW9uIGNvZGU9ImFZVTd0NiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuMy45MzMuMjc4LjQ3IiBjb2RlU3lzdGVtTmFtZT0iTXlMb2NhbENvZGVTeXN0ZW0iIGRpc3BsYXlOYW1lPSJDaGVtNyIvPg0KCQkJCQkJCTwvY29kZT4NCgkJCQkJCQk8dGV4dD5DaGVtLTcgdG9tb3Jyb3c8L3RleHQ+DQoJCQkJCQkJPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMDAwNDA4Ii8+DQoJCQkJCQk8L09ic2VydmF0aW9uPg0KCQkJCQk8L2VudHJ5Pg0KCQkJCQk8ZW50cnk+DQoJCQkJCQk8QWN0IG1vb2RDb2RlPSJJTlQiPg0KCQkJCQkJCTxpZC8+DQoJCQkJCQkJPGNvZGUgY29kZT0iMjIzNDY4MDA5IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iVGVhY2hpbmcgb2Ygc2tpbGxzIj4NCgkJCQkJCQkJPHF1YWxpZmllcj4NCgkJCQkJCQkJCTxuYW1lIGNvZGU9IjM2MzcwMjAwNiIgZGlzcGxheU5hbWU9ImhhcyBmb2N1cyIvPg0KCQkJCQkJCQkJPHZhbHVlIGNvZGU9IjI5ODkzMDA2IiBkaXNwbGF5TmFtZT0iUGVhayBmbG93IHJhdGUgbWVhc3VyZW1lbnQiLz4NCgkJCQkJCQkJPC9xdWFsaWZpZXI+DQoJCQkJCQkJPC9jb2RlPg0KCQkJCQkJPC9BY3Q+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxTdWJzdGFuY2VBZG1pbmlzdHJhdGlvbiBtb29kQ29kZT0iUlFPIj4NCgkJCQkJCQk8dGV4dD5wcmVkbmlzb25lIDIwcU9EIGFsdGVybmF0aW5nIHdpdGggMThxT0QuPC90ZXh0Pg0KCQkJCQkJCTxyb3V0ZUNvZGUgY29kZT0iUE8iIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjUuMTEyIiBjb2RlU3lzdGVtTmFtZT0iUm91dGVPZkFkbWluaXN0cmF0aW9uIi8+DQoJCQkJCQkJPGNvbnN1bWFibGU+DQoJCQkJCQkJCTxtYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCQkJPG1hbnVmYWN0dXJlZExhYmVsZWREcnVnPg0KCQkJCQkJCQkJCTxjb2RlIGNvZGU9IjEwMzEyMDAzIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iUHJlZG5pc29uZSBwcmVwYXJhdGlvbiIvPg0KCQkJCQkJCQkJPC9tYW51ZmFjdHVyZWRMYWJlbGVkRHJ1Zz4NCgkJCQkJCQkJPC9tYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCTwvY29uc3VtYWJsZT4NCgkJCQkJCTwvU3Vic3RhbmNlQWRtaW5pc3RyYXRpb24+DQoJCQkJCTwvZW50cnk+DQoJCQkJCTxlbnRyeT4NCgkJCQkJCTxTdWJzdGFuY2VBZG1pbmlzdHJhdGlvbiBtb29kQ29kZT0iUlFPIj4NCgkJCQkJCQk8dGV4dD5IeWRyb2NvcnRpc29uZSBjcmVhbSB0byBmaW5nZXIgQklELjwvdGV4dD4NCgkJCQkJCQk8ZWZmZWN0aXZlVGltZSB4c2k6dHlwZT0iUElWTF9UUyIgaW5zdGl0dXRpb25TcGVjaWZpZWQ9InRydWUiPg0KCQkJCQkJCQk8cGVyaW9kIHZhbHVlPSIxMiIgdW5pdD0iaCIvPg0KCQkJCQkJCTwvZWZmZWN0aXZlVGltZT4NCgkJCQkJCQk8cm91dGVDb2RlIGNvZGU9IlNLSU4iIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjUuMTEyIiBjb2RlU3lzdGVtTmFtZT0iUm91dGVPZkFkbWluaXN0cmF0aW9uIiBkaXNwbGF5TmFtZT0iVG9waWNhbCBhcHBsaWNhdGlvbiwgc2tpbiIvPg0KCQkJCQkJCTxhcHByb2FjaFNpdGVDb2RlIGNvZGU9IjQ4ODU2MDA0IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0iU2tpbiBvZiBwYWxtZXIgc3VyZmFjZSBvZiBpbmRleCBmaW5nZXIiPg0KCQkJCQkJCQk8cXVhbGlmaWVyPg0KCQkJCQkJCQkJPG5hbWUgY29kZT0iNzg2MTUwMDciIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJ3aXRoIGxhdGVyYWxpdHkiLz4NCgkJCQkJCQkJCTx2YWx1ZSBjb2RlPSI3NzcxMDAwIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42Ljk2IiBjb2RlU3lzdGVtTmFtZT0iU05PTUVEIENUIiBkaXNwbGF5TmFtZT0ibGVmdCIvPg0KCQkJCQkJCQk8L3F1YWxpZmllcj4NCgkJCQkJCQk8L2FwcHJvYWNoU2l0ZUNvZGU+DQoJCQkJCQkJPGNvbnN1bWFibGU+DQoJCQkJCQkJCTxtYW51ZmFjdHVyZWRQcm9kdWN0Pg0KCQkJCQkJCQkJPG1hbnVmYWN0dXJlZExhYmVsZWREcnVnPg0KCQkJCQkJCQkJCTxjb2RlIGNvZGU9IjMzMTY0NjAwNSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi45NiIgY29kZVN5c3RlbU5hbWU9IlNOT01FRCBDVCIgZGlzcGxheU5hbWU9Ikh5ZHJvY29ydGlzb25lIGNyZWFtIi8+DQoJCQkJCQkJCQk8L21hbnVmYWN0dXJlZExhYmVsZWREcnVnPg0KCQkJCQkJCQk8L21hbnVmYWN0dXJlZFByb2R1Y3Q+DQoJCQkJCQkJPC9jb25zdW1hYmxlPg0KCQkJCQkJPC9TdWJzdGFuY2VBZG1pbmlzdHJhdGlvbj4NCgkJCQkJPC9lbnRyeT4NCgkJCQkJPGVudHJ5Pg0KCQkJCQkJPEVuY291bnRlciBtb29kQ29kZT0iUlFPIj4NCgkJCQkJCQk8Y29kZSBjb2RlPSIxODUzODkwMDkiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiIGRpc3BsYXlOYW1lPSJGb2xsb3ctdXAgdmlzaXQiLz4NCgkJCQkJCQk8ZWZmZWN0aXZlVGltZT4NCgkJCQkJCQkJPGxvdyB2YWx1ZT0iMjAwMDA0MTIiLz4NCgkJCQkJCQkJPGhpZ2ggdmFsdWU9IjIwMDAwNDE3Ii8+DQoJCQkJCQkJPC9lZmZlY3RpdmVUaW1lPg0KCQkJCQkJPC9FbmNvdW50ZXI+DQoJCQkJCTwvZW50cnk+DQoJCQkJPC9zZWN0aW9uPg0KCQkJPC9jb21wb25lbnQ+DQoJCTwvU3RydWN0dXJlZEJvZHk+DQoJPC9jb21wb25lbnQ+DQo8L0NsaW5pY2FsRG9jdW1lbnQ+"
                    }
                }
            ]
        }
    },
    {
        id: 3,
        name: 'File',
        resource: {
            "resourceType": "DocumentReference",
            "status": "current",
            "type": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "51899-3",
                        "display": "Details Document"
                    }
                ]
            },
            "indexed": "2005-12-24T09:43:41+05:30",
            "content": [
                {
                    "attachment": {
                        "contentType": "application/octet-stream",
                        // tslint:disable-next-line:max-line-length
                        "data": "TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVml2YW11cyBjb25kaW1lbnR1bSBzYWdpdHRpcyBsYWN1cywgbGFvcmVldCBsdWN0dXMgbGlndWxhIGxhb3JlZXQgdXQuIFZlc3RpYnVsdW0gdWxsYW1jb3JwZXIgYWNjdW1zYW4gdmVsaXQgdmVsIHZlaGljdWxhLiBQcm9pbiB0ZW1wb3IgbGFjdXMgYXJjdS4gTnVuYyBhdCBlbGl0IGNvbmRpbWVudHVtLCBzZW1wZXIgbmlzaSBldCwgY29uZGltZW50dW0gbWkuIEluIHZlbmVuYXRpcyBibGFuZGl0IG5pYmggYXQgc29sbGljaXR1ZGluLiBWZXN0aWJ1bHVtIGRhcGlidXMgbWF1cmlzIGF0IG9yY2kgbWF4aW11cyBwZWxsZW50ZXNxdWUuIE51bGxhbSBpZCBlbGVtZW50dW0gaXBzdW0uIFN1c3BlbmRpc3NlIGN1cnN1cyBsb2JvcnRpcyB2aXZlcnJhLiBQcm9pbiBldCBlcmF0IGF0IG1hdXJpcyB0aW5jaWR1bnQgcG9ydHRpdG9yIHZpdGFlIGFjIGR1aS4NCg0KRG9uZWMgdnVscHV0YXRlIGxvcmVtIHRvcnRvciwgbmVjIGZlcm1lbnR1bSBuaWJoIGJpYmVuZHVtIHZlbC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUHJhZXNlbnQgZGljdHVtIGx1Y3R1cyBtYXNzYSwgbm9uIGV1aXNtb2QgbGFjdXMuIFBlbGxlbnRlc3F1ZSBjb25kaW1lbnR1bSBkb2xvciBlc3QsIHV0IGRhcGlidXMgbGVjdHVzIGx1Y3R1cyBhYy4gVXQgc2FnaXR0aXMgY29tbW9kbyBhcmN1LiBJbnRlZ2VyIG5pc2kgbnVsbGEsIGZhY2lsaXNpcyBzaXQgYW1ldCBudWxsYSBxdWlzLCBlbGVpZmVuZCBzdXNjaXBpdCBwdXJ1cy4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLiBBbGlxdWFtIGV1aXNtb2QgdWx0cmljZXMgbG9yZW0sIHNpdCBhbWV0IGltcGVyZGlldCBlc3QgdGluY2lkdW50IHZlbC4gUGhhc2VsbHVzIGRpY3R1bSBqdXN0byBzaXQgYW1ldCBsaWd1bGEgdmFyaXVzIGFsaXF1ZXQgYXVjdG9yIGV0IG1ldHVzLiBGdXNjZSB2aXRhZSB0b3J0b3IgZXQgbmlzaSBwdWx2aW5hciB2ZXN0aWJ1bHVtIGVnZXQgaW4gcmlzdXMuIERvbmVjIGFudGUgZXgsIHBsYWNlcmF0IGEgbG9yZW0gZWdldCwgdWx0cmljaWVzIGJpYmVuZHVtIHB1cnVzLiBOYW0gc2l0IGFtZXQgbmVxdWUgbm9uIGFudGUgbGFvcmVldCBydXRydW0uIE51bGxhbSBhbGlxdWV0IGNvbW1vZG8gdXJuYSwgc2VkIHVsbGFtY29ycGVyIG9kaW8gZmV1Z2lhdCBpZC4gTWF1cmlzIG5pc2kgc2FwaWVuLCBwb3J0dGl0b3IgaW4gY29uZGltZW50dW0gbmVjLCB2ZW5lbmF0aXMgZXUgdXJuYS4gUGVsbGVudGVzcXVlIGZldWdpYXQgZGlhbSBlc3QsIGF0IHJob25jdXMgb3JjaSBwb3J0dGl0b3Igbm9uLg0KDQpOdWxsYSBsdWN0dXMgc2VtIHNpdCBhbWV0IG5pc2kgY29uc2VxdWF0LCBpZCBvcm5hcmUgaXBzdW0gZGlnbmlzc2ltLiBTZWQgZWxlbWVudHVtIGVsaXQgbmliaCwgZXUgY29uZGltZW50dW0gb3JjaSB2aXZlcnJhIHF1aXMuIEFlbmVhbiBzdXNjaXBpdCB2aXRhZSBmZWxpcyBub24gc3VzY2lwaXQuIFN1c3BlbmRpc3NlIHBoYXJldHJhIHR1cnBpcyBub24gZXJvcyBzZW1wZXIgZGljdHVtLiBFdGlhbSB0aW5jaWR1bnQgdmVuZW5hdGlzIHZlbmVuYXRpcy4gUHJhZXNlbnQgZWdldCBncmF2aWRhIGxvcmVtLCB1dCBjb25ndWUgZGlhbS4gRXRpYW0gZmFjaWxpc2lzIGVsaXQgYXQgcG9ydHRpdG9yIGVnZXN0YXMuIFByYWVzZW50IGNvbnNlcXVhdCwgdmVsaXQgbm9uIHZ1bHB1dGF0ZSBjb252YWxsaXMsIGxpZ3VsYSBkaWFtIHNhZ2l0dGlzIHVybmEsIGluIHZlbmVuYXRpcyBuaXNpIGp1c3RvIHV0IG1hdXJpcy4gVmVzdGlidWx1bSBwb3N1ZXJlIHNvbGxpY2l0dWRpbiBtaSwgZXQgdnVscHV0YXRlIG5pc2wgZnJpbmdpbGxhIG5vbi4gTnVsbGEgb3JuYXJlIHByZXRpdW0gdmVsaXQgYSBldWlzbW9kLiBOdW5jIHNhZ2l0dGlzIHZlbmVuYXRpcyB2ZXN0aWJ1bHVtLiBOdW5jIHNvZGFsZXMgbGliZXJvIGEgZXN0IG9ybmFyZSB1bHRyaWNpZXMuIFNlZCBzZWQgbGVvIHNlZCBvcmNpIHBlbGxlbnRlc3F1ZSB1bHRyaWNlcy4gTWF1cmlzIHNvbGxpY2l0dWRpbiwgc2VtIHF1aXMgcGxhY2VyYXQgb3JuYXJlLCB2ZWxpdCBhcmN1IGNvbnZhbGxpcyBsaWd1bGEsIHByZXRpdW0gZmluaWJ1cyBuaXNsIHNhcGllbiB2ZWwgc2VtLiBWaXZhbXVzIHNpdCBhbWV0IHRvcnRvciBpZCBsb3JlbSBjb25zZXF1YXQgaGVuZHJlcml0LiBOdWxsYW0gYXQgZHVpIHJpc3VzLg0KDQpWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGZldWdpYXQgc2VtcGVyIHZlbGl0IGNvbnNlcXVhdCBmYWNpbGlzaXMuIEV0aWFtIGZhY2lsaXNpcyBqdXN0byBub24gaWFjdWxpcyBkaWN0dW0uIEZ1c2NlIHR1cnBpcyBuZXF1ZSwgcGhhcmV0cmEgdXQgb2RpbyBldSwgaGVuZHJlcml0IHJob25jdXMgbGFjdXMuIE51bmMgb3JjaSBmZWxpcywgaW1wZXJkaWV0IHZlbCBpbnRlcmR1bSBxdWlzLCBwb3J0YSBldSBpcHN1bS4gUGVsbGVudGVzcXVlIGRpY3R1bSBzZW0gbGFjaW5pYSwgYXVjdG9yIGR1aSBpbiwgbWFsZXN1YWRhIG51bmMuIE1hZWNlbmFzIHNpdCBhbWV0IG1vbGxpcyBlcm9zLiBQcm9pbiBmcmluZ2lsbGEgdml2ZXJyYSBsaWd1bGEsIHNvbGxpY2l0dWRpbiB2aXZlcnJhIGFudGUgc29sbGljaXR1ZGluIGNvbmd1ZS4gRG9uZWMgbW9sbGlzIGZlbGlzIGV1IGxpYmVybyBtYWxlc3VhZGEsIGV0IGxhY2luaWEgcmlzdXMgaW50ZXJkdW0uDQoNCkV0aWFtIHZpdGFlIGFjY3Vtc2FuIGF1Z3VlLiBVdCB1cm5hIG9yY2ksIG1hbGVzdWFkYSB1dCBuaXNpIGEsIGNvbmRpbWVudHVtIGdyYXZpZGEgbWFnbmEuIE51bGxhIGJpYmVuZHVtIGV4IGluIHZ1bHB1dGF0ZSBzYWdpdHRpcy4gTnVsbGEgZmFjaWxpc2kuIE51bGxhbSBmYXVjaWJ1cyBldCBtZXR1cyBhYyBjb25zZXF1YXQuIFF1aXNxdWUgdGVtcG9yIGVyb3MgdmVsaXQsIGlkIG1hdHRpcyBuaWJoIGFsaXF1ZXQgYS4gQWVuZWFuIHRlbXBvciBlbGl0IHV0IGZpbmlidXMgYXVjdG9yLiBTZWQgYXQgaW1wZXJkaWV0IG1hdXJpcy4gVmVzdGlidWx1bSBwaGFyZXRyYSBub24gbGFjdXMgc2VkIHB1bHZpbmFyLiBTZWQgcGVsbGVudGVzcXVlIG1hZ25hIGEgZXJvcyB2b2x1dHBhdCB1bGxhbWNvcnBlci4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIERvbmVjIGlwc3VtIG1pLCBmZXVnaWF0IGluIGVyb3Mgc2VkLCB2YXJpdXMgbGFjaW5pYSB0dXJwaXMuIERvbmVjIHZ1bHB1dGF0ZSB0aW5jaWR1bnQgZHVpIGFjIGxhb3JlZXQuIFNlZCBpbiBlcm9zIGR1aS4gUGVsbGVudGVzcXVlIHBsYWNlcmF0IHRyaXN0aXF1ZSBsaWd1bGEgZXUgZmluaWJ1cy4gUHJvaW4gbmVjIGZhdWNpYnVzIGZlbGlzLCBldSBjb21tb2RvIGlwc3VtLg0KDQpJbnRlZ2VyIGV1IGhlbmRyZXJpdCBkaWFtLCBzZWQgY29uc2VjdGV0dXIgbnVuYy4gQWxpcXVhbSBhIHNlbSB2aXRhZSBsZW8gZmVybWVudHVtIGZhdWNpYnVzIHF1aXMgYXQgc2VtLiBFdGlhbSBibGFuZGl0LCBxdWFtIHF1aXMgZmVybWVudHVtIHZhcml1cywgYW50ZSB1cm5hIHVsdHJpY2llcyBsZWN0dXMsIHZlbCBwZWxsZW50ZXNxdWUgbGlndWxhIGFyY3UgbmVjIGVsaXQuIERvbmVjIHBsYWNlcmF0IGFudGUgaW4gZW5pbSBzY2VsZXJpc3F1ZSBwcmV0aXVtLiBEb25lYyBldCByaG9uY3VzIGVyYXQuIEFlbmVhbiB0ZW1wb3IgbmlzaSB2aXRhZSBhdWd1ZSB0aW5jaWR1bnQgbHVjdHVzLiBOYW0gY29uZGltZW50dW0gZGljdHVtIGFudGUsIGV0IGxhb3JlZXQgbmVxdWUgcGVsbGVudGVzcXVlIGlkLiBDdXJhYml0dXIgY29uc2VjdGV0dXIgY3Vyc3VzIG5lcXVlIGFsaXF1YW0gcG9ydGEuIFV0IGludGVyZHVtIG51bmMgbmVjIG5pYmggdmVzdGlidWx1bSwgaW4gc2FnaXR0aXMgbWV0dXMgZmFjaWxpc2lzLiBQZWxsZW50ZXNxdWUgZmV1Z2lhdCBjb25kaW1lbnR1bSBtZXR1cy4gRXRpYW0gdmVuZW5hdGlzIHF1YW0gYXQgYW50ZSByaG9uY3VzIHZlc3RpYnVsdW0uIE1hZWNlbmFzIHN1c2NpcGl0IGNvbmd1ZSBwZWxsZW50ZXNxdWUuIFZlc3RpYnVsdW0gc3VzY2lwaXQgc2NlbGVyaXNxdWUgZmVybWVudHVtLiBOdWxsYSBpYWN1bGlzIHJpc3VzIGFjIHZ1bHB1dGF0ZSBwb3J0dGl0b3IuDQoNCk1hdXJpcyBuZWMgbWV0dXMgdmVsIGRvbG9yIGJsYW5kaXQgZmF1Y2lidXMgZXQgdmVsIG1hZ25hLiBVdCB0aW5jaWR1bnQgaXBzdW0gbm9uIG51bmMgZGFwaWJ1cywgc2VkIGJsYW5kaXQgbWkgY29uZGltZW50dW0uIFF1aXNxdWUgcGhhcmV0cmEgaW50ZXJkdW0gcXVhbSBuZWMgZmV1Z2lhdC4gU2VkIHBlbGxlbnRlc3F1ZSBudWxsYSBldCB0dXJwaXMgYmxhbmRpdCBpbnRlcmR1bS4gQ3VyYWJpdHVyIGF0IG1ldHVzIHZpdGFlIGF1Z3VlIGVsZW1lbnR1bSB2aXZlcnJhLiBTZWQgbWF0dGlzIGxvcmVtIG5vbiBlbmltIGZlcm1lbnR1bSBmaW5pYnVzLiBTZWQgYXQgZHVpIGluIG1hZ25hIGRpZ25pc3NpbSBhY2N1bXNhbi4gUHJvaW4gdGluY2lkdW50IHVsdHJpY2llcyBjdXJzdXMuIE1hZWNlbmFzIHRpbmNpZHVudCBtYWduYSBhdCB1cm5hIGZhdWNpYnVzIGxhY2luaWEuDQoNClF1aXNxdWUgdmVuZW5hdGlzIGp1c3RvIHNpdCBhbWV0IHRvcnRvciBjb25kaW1lbnR1bSwgbmVjIHRpbmNpZHVudCB0ZWxsdXMgdml2ZXJyYS4gTW9yYmkgcmlzdXMgaXBzdW0sIGNvbnNlcXVhdCBjb252YWxsaXMgbWFsZXN1YWRhIG5vbiwgZmVybWVudHVtIG5vbiB2ZWxpdC4gTnVsbGEgZmFjaWxpc2lzIG9yY2kgZWdldCBsaWd1bGEgbWF0dGlzIGZlcm1lbnR1bS4gQWxpcXVhbSB2ZWwgdmVsaXQgdWx0cmljaWVzLCBzb2xsaWNpdHVkaW4gbmliaCBldSwgY29uZ3VlIHZlbGl0LiBEb25lYyBudWxsYSBsb3JlbSwgZXVpc21vZCBpZCBjdXJzdXMgYXQsIHNvbGxpY2l0dWRpbiBldCBhcmN1LiBQcm9pbiB2aXRhZSB0aW5jaWR1bnQgaXBzdW0uIFZpdmFtdXMgZWxlbWVudHVtIGVsZWlmZW5kIGp1c3RvLCBwbGFjZXJhdCBpbnRlcmR1bSBudWxsYSBydXRydW0gaWQuDQoNClBoYXNlbGx1cyBmcmluZ2lsbGEgbHVjdHVzIG1hZ25hLCBhIGZpbmlidXMganVzdG8gZGFwaWJ1cyBhLiBOYW0gcmlzdXMgZmVsaXMsIHJob25jdXMgZWdldCBkaWFtIHNpdCBhbWV0LCBjb25ndWUgZmFjaWxpc2lzIG5pYmguIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gUHJhZXNlbnQgY29uc2VxdWF0IGV1aXNtb2QgZGlhbSwgZWdldCB2b2x1dHBhdCBtYWduYSBjb252YWxsaXMgYXQuIE1hdXJpcyBwbGFjZXJhdCBwZWxsZW50ZXNxdWUgaW1wZXJkaWV0LiBOdWxsYSBwb3J0YSBzY2VsZXJpc3F1ZSBlbmltLCBldCBzY2VsZXJpc3F1ZSBuZXF1ZSBiaWJlbmR1bSBpbi4gUHJvaW4gZWdldCB0dXJwaXMgbmlzaS4gU3VzcGVuZGlzc2UgdXQgZXN0IGEgZXJhdCBlZ2VzdGFzIGVsZWlmZW5kIGF0IGV1aXNtb2QgYXJjdS4gRG9uZWMgYWxpcXVldCwgbmlzaSBzZWQgZmF1Y2lidXMgY29uZGltZW50dW0sIG5pc2kgbWV0dXMgZGljdHVtIGVyb3MsIG5lYyBkaWduaXNzaW0ganVzdG8gb2RpbyBpZCBudWxsYS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIE1hZWNlbmFzIHNvbGxpY2l0dWRpbiwganVzdG8gaWQgZWxlbWVudHVtIGVsZWlmZW5kLCBqdXN0byBuZXF1ZSBhbGlxdWV0IG5pYmgsIGZpbmlidXMgbWFsZXN1YWRhIG1ldHVzIGVyYXQgZWdldCBuZXF1ZS4gU3VzcGVuZGlzc2UgbmVjIGF1Y3RvciBvcmNpLiBBZW5lYW4gZXQgdmVzdGlidWx1bSBudWxsYS4gTnVsbGFtIGhlbmRyZXJpdCBhdWd1ZSB0cmlzdGlxdWUsIGNvbW1vZG8gbWV0dXMgaWQsIHNvZGFsZXMgbG9yZW0uIEV0aWFtIGZldWdpYXQgZHVpIGVzdCwgdml0YWUgYXVjdG9yIHJpc3VzIGNvbnZhbGxpcyBub24uDQoNCk1hZWNlbmFzIHR1cnBpcyBlbmltLCBjb25zZWN0ZXR1ciBlZ2V0IGxlY3R1cyBldSwgaGVuZHJlcml0IHBvc3VlcmUgbGFjdXMuIFByYWVzZW50IGVmZmljaXR1ciwgZmVsaXMgZWdldCBkYXBpYnVzIGNvbnNlY3RldHVyLCBuaXNpIG1hc3NhIGRpZ25pc3NpbSBlbmltLCBuZWMgc2VtcGVyIGRvbG9yIGVzdCBldSB1cm5hLiBOdWxsYW0gdXQgc29kYWxlcyBsb3JlbS4gQWxpcXVhbSBkYXBpYnVzIGZhdWNpYnVzIGRpYW0uIFZlc3RpYnVsdW0gdmVsIG1hZ25hIGV0IGRvbG9yIGdyYXZpZGEgaW1wZXJkaWV0IHV0IHNpdCBhbWV0IHNlbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3VyYWJpdHVyIGVsZW1lbnR1bSBtZXR1cyB0aW5jaWR1bnQgbnVsbGEgZXVpc21vZCB1bHRyaWNpZXMuIER1aXMgZWxlbWVudHVtIG5lYyBuZXF1ZSBpbiBwb3J0dGl0b3IuIE51bGxhIHNhZ2l0dGlzIGxvcmVtIGVsaXQsIGV0IGNvbnNlY3RldHVyIGFudGUgbGFvcmVldCBldS4gTWFlY2VuYXMgbnVsbGEgdGVsbHVzLCBzY2VsZXJpc3F1ZSBhYyBlcmF0IHNlZCwgZmVybWVudHVtIGRhcGlidXMgbWV0dXMuIERvbmVjIHRpbmNpZHVudCBmZXJtZW50dW0gbW9sZXN0aWUuDQoNClNlZCBjb25zZXF1YXQgbWkgYXQgbWF4aW11cyBmYXVjaWJ1cy4gUGVsbGVudGVzcXVlIGFsaXF1ZXQgdGluY2lkdW50IHNhcGllbiB2ZWwgYXVjdG9yLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gUHJhZXNlbnQgYWNjdW1zYW4gbnVuYyBlZ2V0IGxlbyBhbGlxdWFtLCBmYWNpbGlzaXMgaGVuZHJlcml0IHR1cnBpcyBlZ2VzdGFzLiBNb3JiaSBpbiB1bHRyaWNpZXMgbWF1cmlzLCBhIGVsZWlmZW5kIHR1cnBpcy4gUXVpc3F1ZSBmcmluZ2lsbGEgbWFzc2EgaWFjdWxpcyByaXN1cyB1bHRyaWNlcywgc2l0IGFtZXQgdGluY2lkdW50IGR1aSB2YXJpdXMuIFF1aXNxdWUgbWF4aW11cyBwb3J0YSB0cmlzdGlxdWUuIFByb2luIHRpbmNpZHVudCwgdHVycGlzIHV0IHRlbXBvciBwcmV0aXVtLCBsZWN0dXMgaXBzdW0gdWxsYW1jb3JwZXIgbGVvLCBhYyB0aW5jaWR1bnQgZmVsaXMgZHVpIG5vbiBsZW8uIEFlbmVhbiBwb3J0YSBhdWd1ZSBsaWd1bGEsIG5vbiBjb25zZXF1YXQgaXBzdW0gYWxpcXVldCBldC4gU3VzcGVuZGlzc2UgdXQgc3VzY2lwaXQgZXguIFBlbGxlbnRlc3F1ZSB2aXRhZSBsYWNpbmlhIGFyY3UuIEN1cmFiaXR1ciBlZ2V0IHRpbmNpZHVudCBudWxsYSwgbm9uIGJpYmVuZHVtIG1ldHVzLiBOdWxsYW0gbWkgaXBzdW0sIGVsZWlmZW5kIHZpdGFlIHRvcnRvciBwdWx2aW5hciwgZmFjaWxpc2lzIHNvbGxpY2l0dWRpbiBpcHN1bS4NCg0KVmVzdGlidWx1bSBtb2xlc3RpZSByaXN1cyBsb3JlbSwgYXQgZmV1Z2lhdCBsb3JlbSBjb25ndWUgc2VkLiBQaGFzZWxsdXMgdWxsYW1jb3JwZXIgbGFvcmVldCBlbmltLCBuZWMgYWxpcXVhbSB0dXJwaXMgc2NlbGVyaXNxdWUgZXQuIEV0aWFtIGRpY3R1bSBtZXR1cyBpbiBlbGl0IGFsaXF1YW0gZGFwaWJ1cy4gVml2YW11cyB2ZWwgbGVjdHVzIHZlbGl0LiBOYW0gc2VkIHB1cnVzIGx1Y3R1cywgY29tbW9kbyBkdWkgcXVpcywgbWFsZXN1YWRhIGR1aS4gTnVsbGEgcG9ydHRpdG9yIGFsaXF1ZXQgZWxpdCBzaXQgYW1ldCB2aXZlcnJhLiBQcm9pbiB0ZW1wb3IgbnVsbGEgdXJuYSwgbm9uIGFsaXF1ZXQgbWV0dXMgbWF4aW11cyBxdWlzLiBBbGlxdWFtIGFjIGxlY3R1cyBuZWMgbWkgYWxpcXVhbSBzYWdpdHRpcy4gUXVpc3F1ZSB2ZW5lbmF0aXMgcXVhbSBlZ2V0IG5pc2wgdGVtcG9yLCBlZ2VzdGFzIHJ1dHJ1bSBlcm9zIGVsZWlmZW5kLiBOdWxsYW0gdmVuZW5hdGlzIGNvbW1vZG8gdmVsaXQsIG5vbiB0ZW1wb3IgbWF1cmlzIGZlcm1lbnR1bSB1dC4gSW4gYSBtZXR1cyBxdWlzIGVyYXQgY3Vyc3VzIHNhZ2l0dGlzLiBEb25lYyBjb25ndWUgbmlzbCBpbiB2aXZlcnJhIGVnZXN0YXMuDQoNClZlc3RpYnVsdW0gZmFjaWxpc2lzIGxpZ3VsYSBtYWduYSwgZXUgb3JuYXJlIGxlY3R1cyB2YXJpdXMgZXQuIE1hdXJpcyBmYWNpbGlzaXMgZmF1Y2lidXMgcXVhbSwgcXVpcyBtb2xsaXMgZXJvcyBjb252YWxsaXMgbm9uLiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuIFByYWVzZW50IHNpdCBhbWV0IHJ1dHJ1bSBlcmF0LiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBEb25lYyBsb3JlbSBtaSwgc2FnaXR0aXMgYSBmcmluZ2lsbGEgc2l0IGFtZXQsIHNhZ2l0dGlzIGJpYmVuZHVtIG1hdXJpcy4gSW4gaW4gZGlhbSBldCBsb3JlbSBydXRydW0gZWxlaWZlbmQgYSBldCBmZWxpcy4gU2VkIGFjIG1hZ25hIHF1aXMgZW5pbSBmYXVjaWJ1cyBkaWN0dW0uIFN1c3BlbmRpc3NlIGJsYW5kaXQgZW5pbSBldSBleCBsYW9yZWV0IGdyYXZpZGEuDQoNClN1c3BlbmRpc3NlIHNlZCBzZW1wZXIgZmVsaXMuIEV0aWFtIG1hdHRpcyBtYWduYSBtaSwgc3VzY2lwaXQgdWxsYW1jb3JwZXIgdGVsbHVzIGV1aXNtb2Qgc2VkLiBBZW5lYW4gY29uZ3VlIHNjZWxlcmlzcXVlIGxpZ3VsYSBpZCBzb2RhbGVzLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIE51bmMgc2VtIGxlY3R1cywgZ3JhdmlkYSBhYyBkdWkgbm9uLCBwaGFyZXRyYSBwb3N1ZXJlIGxlby4gTWFlY2VuYXMgbGFjdXMgbGliZXJvLCBmYWNpbGlzaXMgZXQgZWxpdCB2aXRhZSwgY29tbW9kbyBmYWNpbGlzaXMgc2VtLiBWaXZhbXVzIGlkIG5pc2wgbnVsbGEuIEludGVnZXIgYXQgbWF4aW11cyBkdWkuIFV0IGEgdGluY2lkdW50IGxvcmVtLiBWaXZhbXVzIHZpdGFlIGxpZ3VsYSB2ZWwgbGFjdXMgY3Vyc3VzIGNvbmRpbWVudHVtLiBQaGFzZWxsdXMgcXVpcyBtYXVyaXMgbG9ib3J0aXMsIGZpbmlidXMgbG9yZW0gaW4sIHZ1bHB1dGF0ZSBleC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGZhdWNpYnVzIGFsaXF1YW0gbWV0dXMsIHF1aXMgdmFyaXVzIGVsaXQgcG9ydHRpdG9yIGlkLiBWaXZhbXVzIGRpZ25pc3NpbSBzb2xsaWNpdHVkaW4gc2NlbGVyaXNxdWUuIE1vcmJpIHRpbmNpZHVudCwgZG9sb3IgcXVpcyB2ZWhpY3VsYSBjb25zZXF1YXQsIGR1aSBkaWFtIGNvbmRpbWVudHVtIG51bmMsIHZpdGFlIHNjZWxlcmlzcXVlIG9kaW8gbGliZXJvIG5lYyBsaWd1bGEuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOw0KDQpDdXJhYml0dXIgZHVpIG5pc2ksIGlhY3VsaXMgYXQgY3Vyc3VzIGEsIGFsaXF1YW0gaW4gb2Rpby4gU2VkIG1hdHRpcyBlZ2V0IG1hdXJpcyBub24gcHJldGl1bS4gQ3JhcyBmYXVjaWJ1cyBlcm9zIGlkIGZpbmlidXMgdnVscHV0YXRlLiBDdXJhYml0dXIgaW1wZXJkaWV0IHZhcml1cyBjdXJzdXMuIEFsaXF1YW0gdmVsIGZlbGlzIHF1aXMgcmlzdXMgbWF0dGlzIGxvYm9ydGlzLiBWaXZhbXVzIG5vbiBsaWJlcm8gYXQgZG9sb3IgZWxlbWVudHVtIG1heGltdXMgYSBzaXQgYW1ldCBxdWFtLiBOdWxsYW0gcXVpcyB0dXJwaXMgcmhvbmN1cywgc2FnaXR0aXMgdXJuYSBldSwgcGVsbGVudGVzcXVlIGR1aS4gVXQgYXQgc2VtIGVyb3MuIEN1cmFiaXR1ciBhIGxlY3R1cyBkdWkuIFZpdmFtdXMgc2l0IGFtZXQgbGFjdXMgcXVpcyBudW5jIGxvYm9ydGlzIHVsdHJpY2llcyBxdWlzIGFsaXF1ZXQgZXguIFByb2luIHNpdCBhbWV0IGV4IG1hZ25hLiBEdWlzIGFjY3Vtc2FuIHN1c2NpcGl0IGZhY2lsaXNpcy4gQWVuZWFuIHF1aXMgZXJvcyBwcmV0aXVtLCB2YXJpdXMgc2VtIHNpdCBhbWV0LCBwbGFjZXJhdCBlc3QuIEZ1c2NlIGxlbyBleCwgdml2ZXJyYSBxdWlzIHF1YW0gYSwgZmF1Y2lidXMgcG9ydHRpdG9yIGlwc3VtLiBNYWVjZW5hcyB0ZW1wdXMgdHVycGlzIGFjIGVzdCBwb3J0YSBzb2xsaWNpdHVkaW4gdml0YWUgc2l0IGFtZXQgbWV0dXMuIEV0aWFtIG1hdHRpcyBldWlzbW9kIG1hbGVzdWFkYS4NCg0KSW4gY29uc2VxdWF0IGR1aSBuaWJoLCB1dCBwZWxsZW50ZXNxdWUgb2RpbyB0ZW1wdXMgc2VkLiBOdWxsYW0gY29uc2VjdGV0dXIgYXVndWUgbm9uIGJsYW5kaXQgZmVybWVudHVtLiBOdWxsYW0gZmluaWJ1cyBtYXNzYSBub24gc2VtIHN1c2NpcGl0LCBub24gaGVuZHJlcml0IHR1cnBpcyBwb3N1ZXJlLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIEFlbmVhbiB2aXRhZSB2ZXN0aWJ1bHVtIG9yY2kuIFF1aXNxdWUgZXN0IGlwc3VtLCB2aXZlcnJhIGEgbGliZXJvIGVnZXQsIHRyaXN0aXF1ZSBtYXhpbXVzIHRlbGx1cy4gU2VkIGZpbmlidXMgZXQgcHVydXMgcXVpcyBwcmV0aXVtLiBTdXNwZW5kaXNzZSBub24gbWFsZXN1YWRhIGVyYXQuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gU2VkIGlkIHNlbSBwdXJ1cy4gRG9uZWMgdXQgc29sbGljaXR1ZGluIG5pc2wuIEluIGZlcm1lbnR1bSB1dCBlc3QgdmVsIGZpbmlidXMuDQoNCkN1cmFiaXR1ciB2ZWwgdml2ZXJyYSBlbmltLiBNYXVyaXMgaW4gbWkgZWZmaWNpdHVyIGZlbGlzIHNhZ2l0dGlzIGxvYm9ydGlzLiBEdWlzIGFjIGZlbGlzIGEgbmliaCBncmF2aWRhIGhlbmRyZXJpdC4gSW50ZWdlciBldSBzb2RhbGVzIGF1Z3VlLCBhIGNvbW1vZG8gc2FwaWVuLiBOYW0gc2VkIGxvcmVtIGxpYmVyby4gTmFtIGNvbnZhbGxpcyBlZ2VzdGFzIGFsaXF1ZXQuIE5hbSBuZXF1ZSBzZW0sIHNvZGFsZXMgYXQgbHVjdHVzIHNlZCwgaWFjdWxpcyBhdCB1cm5hLiBWZXN0aWJ1bHVtIGVnZXN0YXMgdHVycGlzIHV0IHZ1bHB1dGF0ZSB0ZW1wb3IuIE1vcmJpIGRpYW0gZXN0LCB2dWxwdXRhdGUgcG9ydGEgb3JjaSBxdWlzLCByaG9uY3VzIHRyaXN0aXF1ZSBmZWxpcy4gRXRpYW0gZGFwaWJ1cyB2ZW5lbmF0aXMgbWFzc2EgZXQgbGFjaW5pYS4gU3VzcGVuZGlzc2UgbW9sbGlzIG1ldHVzIGluIGVsZWlmZW5kIHRpbmNpZHVudC4gUHJhZXNlbnQgZmVybWVudHVtIGR1aSBtaSwgbmVjIHVsbGFtY29ycGVyIG5pYmggYWNjdW1zYW4gaW4uIFBoYXNlbGx1cyBsYWN1cyBlc3QsIHBoYXJldHJhIHNlZCBvcmNpIGV1LCB2ZWhpY3VsYSBzZW1wZXIgbnVuYy4gU2VkIG1heGltdXMsIGRvbG9yIG5lYyB1bHRyaWNpZXMgdm9sdXRwYXQsIGVsaXQgc2VtIGVsZW1lbnR1bSB1cm5hLCBpbiBjb25kaW1lbnR1bSByaXN1cyBhdWd1ZSBhYyBtYXVyaXMuIEluIGlkIHRvcnRvciB2ZWxpdC4gUGVsbGVudGVzcXVlIGVnZXQgZmVsaXMgdGVsbHVzLg0KDQpTZWQgZHVpIGxpZ3VsYSwgaGVuZHJlcml0IGVnZXQgZnJpbmdpbGxhIHZlbCwgc3VzY2lwaXQgc2l0IGFtZXQgc2FwaWVuLiBDcmFzIG1hdHRpcyBlbmltIGVnZXQgbG9yZW0gZ3JhdmlkYSBlZmZpY2l0dXIgdmVsIGVnZXQgbGlndWxhLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gU2VkIG5pc2wgbWFzc2EsIGhlbmRyZXJpdCBlZ2V0IGZyaW5naWxsYSBxdWlzLCBjb25zZXF1YXQgbmVjIGxpZ3VsYS4gUGVsbGVudGVzcXVlIG1heGltdXMgcmlzdXMgdml0YWUgZmV1Z2lhdCBhbGlxdWV0LiBDcmFzIHZlbCBhdWN0b3IgcXVhbSwgZGlnbmlzc2ltIGxvYm9ydGlzIHZlbGl0LiBOdWxsYSBwb3J0dGl0b3IgZWxpdCB2aXRhZSBhbnRlIGdyYXZpZGEgdWx0cmljZXMuIE51bGxhIGNvbmd1ZSB0b3J0b3Igc2VtLCBhdCBlZmZpY2l0dXIgZHVpIGVsZWlmZW5kIGV0LiBQcmFlc2VudCBsYWNpbmlhIHRlbGx1cyBub24gbnVsbGEgaWFjdWxpcyByaG9uY3VzLiBNYWVjZW5hcyBmcmluZ2lsbGEgZGlhbSBldCB0ZWxsdXMgZnJpbmdpbGxhLCBmaW5pYnVzIGlhY3VsaXMgbWFnbmEgY29tbW9kby4gTWF1cmlzIG1heGltdXMgZXN0IHNpdCBhbWV0IGlhY3VsaXMgcG9ydHRpdG9yLiBJbiBldCBsb3JlbSBhbGlxdWV0LCB1bHRyaWNpZXMgZXJhdCBhLCB2ZWhpY3VsYSBlcm9zLiBWZXN0aWJ1bHVtIGZhdWNpYnVzIGxpZ3VsYSBkYXBpYnVzIG9yY2kgbWFsZXN1YWRhLCBhIHBoYXJldHJhIGRvbG9yIGltcGVyZGlldC4gSW50ZWdlciBpZCB0b3J0b3IgbnVsbGEuDQoNCkN1cmFiaXR1ciB0aW5jaWR1bnQgbmlzaSBlZ2V0IG1heGltdXMgY29uc2VjdGV0dXIuIFBoYXNlbGx1cyBmZWxpcyBlcm9zLCBtb2xsaXMgc2VkIGFsaXF1ZXQgYSwgcGhhcmV0cmEgYXQgc2VtLiBDcmFzIGEgZmFjaWxpc2lzIGxpYmVyby4gTWF1cmlzIGR1aSBsaWd1bGEsIGJpYmVuZHVtIHF1aXMgdWxsYW1jb3JwZXIgc2VkLCBjb25kaW1lbnR1bSBzaXQgYW1ldCBlcmF0LiBOYW0gdGluY2lkdW50IHRvcnRvciB0ZWxsdXMsIGFjIHBvcnR0aXRvciBzYXBpZW4gdmFyaXVzIG5vbi4gTW9yYmkgY29udmFsbGlzLCBhdWd1ZSBldCB0aW5jaWR1bnQgcG9ydHRpdG9yLCB1cm5hIGp1c3RvIGNvbnZhbGxpcyBpcHN1bSwgc2VkIGxhb3JlZXQgbWkgZWxpdCBhIHB1cnVzLiBDdXJhYml0dXIgY29tbW9kbyB2ZWwgbGlndWxhIHZlbCBmYWNpbGlzaXMuIEludGVnZXIgdml0YWUgdmVoaWN1bGEgbGVjdHVzLiBOdWxsYSBsdWN0dXMgZWZmaWNpdHVyIHRvcnRvciwgdmVsIHRlbXBvciBudWxsYSBjdXJzdXMgaW4uIE51bGxhIGdyYXZpZGEgcmlzdXMgc2VkIHRlbGx1cyB0cmlzdGlxdWUsIGlkIGFjY3Vtc2FuIGF1Z3VlIGxvYm9ydGlzLiBJbnRlZ2VyIHF1YW0gdGVsbHVzLCBiaWJlbmR1bSBpZCBhdWd1ZSBuZWMsIHZlbmVuYXRpcyB1bGxhbWNvcnBlciBpcHN1bS4NCg0KQ3VyYWJpdHVyIHB1bHZpbmFyIHBlbGxlbnRlc3F1ZSBlbmltLCBhdCB2YXJpdXMgbGliZXJvIGxhb3JlZXQgZXQuIERvbmVjIHZlc3RpYnVsdW0gc2FwaWVuIG5lYyBmZWxpcyB2ZW5lbmF0aXMgY29uZ3VlLiBEdWlzIGVnZXQgdGVsbHVzIG1hbGVzdWFkYSwgdnVscHV0YXRlIG1hdXJpcyBub24sIHZhcml1cyBuZXF1ZS4gRG9uZWMgdXQgcmlzdXMgYSBsaWJlcm8gdmVzdGlidWx1bSBwaGFyZXRyYSBhdCBpbiBuaWJoLiBOdW5jIGN1cnN1cywgZXggc2VkIGRpZ25pc3NpbSBjb25kaW1lbnR1bSwgbWF1cmlzIGZlbGlzIGdyYXZpZGEgZXgsIHNpdCBhbWV0IGVmZmljaXR1ciBlcm9zIG9yY2kgaW4gYXJjdS4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBDdXJhYml0dXIgdmVzdGlidWx1bSBjb25zZWN0ZXR1ciBkYXBpYnVzLiBOdWxsYSBlZ2VzdGFzIGRvbG9yIGRpYW0uIFByYWVzZW50IGdyYXZpZGEgdml0YWUgbmVxdWUgc2VkIGlhY3VsaXMuIEluIGF0IGVzdCBzaXQgYW1ldCBhbnRlIG1hbGVzdWFkYSB2b2x1dHBhdCBpZCBwcmV0aXVtIGxpYmVyby4NCg0KVml2YW11cyBpbXBlcmRpZXQgc3VzY2lwaXQgdG9ydG9yIGluIHVsdHJpY2llcy4gQWVuZWFuIGEgZG9sb3IgYXQgb2RpbyB2aXZlcnJhIHB1bHZpbmFyLiBWZXN0aWJ1bHVtIHBvcnRhIHVybmEgbm9uIG51bGxhIGZlcm1lbnR1bSwgbm9uIGZyaW5naWxsYSBhbnRlIGVsZW1lbnR1bS4gQ3VyYWJpdHVyIGludGVyZHVtIG1hdXJpcyBhIG5pc2wgcGxhY2VyYXQsIGFjIGNvbW1vZG8gbGVjdHVzIHNhZ2l0dGlzLiBJbiBmaW5pYnVzIGFudGUgbmVjIGxvcmVtIHB1bHZpbmFyIGNvbnZhbGxpcy4gTWF1cmlzIGxhY2luaWEsIGZlbGlzIHZpdGFlIGltcGVyZGlldCBwcmV0aXVtLCBpcHN1bSBsb3JlbSBvcm5hcmUgbmlzaSwgc2VkIHZlbmVuYXRpcyBlc3QgZHVpIG5lYyBhdWd1ZS4gVmVzdGlidWx1bSBhIGVzdCBjb252YWxsaXMsIHZ1bHB1dGF0ZSBsZWN0dXMgZXQsIGFsaXF1YW0gbnVuYy4gTnVsbGFtIHBlbGxlbnRlc3F1ZSBkaWFtIGEgbnVsbGEgcG9ydGEgZmVybWVudHVtLg0KDQpFdGlhbSByaXN1cyBsaWJlcm8sIGxhY2luaWEgYXQgdGVtcG9yIHNpdCBhbWV0LCBpYWN1bGlzIHF1aXMgbWFnbmEuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEludGVnZXIgcGhhcmV0cmEgZnJpbmdpbGxhIGltcGVyZGlldC4gUHJhZXNlbnQgdmFyaXVzIGZyaW5naWxsYSBsaWJlcm8sIHNlZCBhY2N1bXNhbiBuaWJoIGRpZ25pc3NpbSBldS4gU3VzcGVuZGlzc2UgdWx0cmljaWVzIGRpY3R1bSBuaXNsIGV0IGRpZ25pc3NpbS4gTnVuYyBlbGVpZmVuZCBudWxsYSB0ZWxsdXMsIGEgZmV1Z2lhdCBtYXNzYSB2YXJpdXMgYmxhbmRpdC4gRG9uZWMgb3JuYXJlIHJpc3VzIGF0IGF1Z3VlIGRhcGlidXMgYmliZW5kdW0uDQoNCkFsaXF1YW0gY29uZGltZW50dW0gaWQgdHVycGlzIHZlbCBmYXVjaWJ1cy4gTmFtIGxpZ3VsYSBudWxsYSwgcmhvbmN1cyBlZ2V0IHRlbXB1cyBldCwgcGVsbGVudGVzcXVlIGFjIGF1Z3VlLiBTdXNwZW5kaXNzZSB1bHRyaWNpZXMgYmxhbmRpdCBhcmN1LCBxdWlzIHByZXRpdW0gZHVpIHBlbGxlbnRlc3F1ZSB2aXRhZS4gTnVuYyBpbXBlcmRpZXQgaXBzdW0gbWF1cmlzLCB1dCBwb3J0dGl0b3IgZmVsaXMgcnV0cnVtIHF1aXMuIFZlc3RpYnVsdW0gcG9ydHRpdG9yIHZ1bHB1dGF0ZSBuaXNpLCBub24gZWdlc3RhcyBlcm9zIGV1aXNtb2Qgc2l0IGFtZXQuIEN1cmFiaXR1ciBxdWlzIHJob25jdXMgZXguIE5hbSBjb25zZWN0ZXR1ciBsaWJlcm8gZXUgdG9ydG9yIHNhZ2l0dGlzLCBxdWlzIHJob25jdXMgZXggZWZmaWNpdHVyLiBTZWQgc2FnaXR0aXMsIGxpZ3VsYSBpbiBtb2xsaXMgcG9zdWVyZSwgdG9ydG9yIHF1YW0gY29uZGltZW50dW0gdGVsbHVzLCBpbiB2YXJpdXMgZWxpdCBlc3QgaW1wZXJkaWV0IGlwc3VtLiBEb25lYyBlZ2V0IGFyY3UgZXUgdG9ydG9yIHBvcnRhIHBvc3VlcmUuIFByb2luIG5vbiBleCBmZXJtZW50dW0sIHBvcnRhIHRvcnRvciBhYywgcG9ydHRpdG9yIG5pYmguIEludGVnZXIgc2VkIGVnZXN0YXMgbGVvLCBpbiBzY2VsZXJpc3F1ZSBmZWxpcy4gRHVpcyBhdWN0b3IgbnVsbGEgcXVpcyB0dXJwaXMgcHJldGl1bSwgbmVjIGxhY2luaWEgdmVsaXQgY29udmFsbGlzLg0KDQpNYWVjZW5hcyB1dCBuaXNsIGRpY3R1bSwgcG9ydGEgbmlzaSBpZCwgYmliZW5kdW0gdGVsbHVzLiBOdWxsYW0gaW50ZXJkdW0gbWV0dXMgZWdldCBjdXJzdXMgc29sbGljaXR1ZGluLiBTdXNwZW5kaXNzZSByaG9uY3VzIHNvZGFsZXMgdWxsYW1jb3JwZXIuIEFsaXF1YW0gbmlzaSBvcmNpLCBkaWduaXNzaW0gZXUgbGFjaW5pYSB2ZWwsIGNvbnNlY3RldHVyIGVnZXQgZW5pbS4gTmFtIG5lYyBtYWduYSBqdXN0by4gU2VkIGxhY3VzIGVyYXQsIHZhcml1cyBldCBlcm9zIGluLCB2aXZlcnJhIHZlaGljdWxhIG5pc2kuIEFlbmVhbiBzaXQgYW1ldCBsaWJlcm8gdmVsIHRvcnRvciB0ZW1wdXMgaW50ZXJkdW0uIERvbmVjIHBoYXJldHJhIG1pIHV0IGVuaW0gdmVzdGlidWx1bSwgZXQgdGVtcG9yIHRlbGx1cyBjdXJzdXMuIEluIHZlbmVuYXRpcyB2aXRhZSBxdWFtIGF0IHRlbXBvci4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIEV0aWFtIGNvbmRpbWVudHVtIHZlaGljdWxhIG1hdXJpcy4gTnVuYyB1dCBwb3J0YSBpcHN1bS4gTWF1cmlzIG1hdHRpcyBtb2xlc3RpZSBtaSBzZWQgc29kYWxlcy4gTnVuYyBzb2RhbGVzIG1hdXJpcyBldSBhY2N1bXNhbiBwaGFyZXRyYS4NCg0KUGhhc2VsbHVzIHZlbCBsZW8gbmVjIGxpZ3VsYSBkaWduaXNzaW0gdmVzdGlidWx1bSBxdWlzIHNpdCBhbWV0IG5pYmguIENyYXMgYXVjdG9yIHZlc3RpYnVsdW0gY29uZ3VlLiBNYWVjZW5hcyBtYXR0aXMgcHVsdmluYXIgZXJvcywgcXVpcyBlZ2VzdGFzIGVyb3MgYXVjdG9yIHNpdCBhbWV0LiBFdGlhbSBzZWQgbGFjdXMgcXVpcyBsZWN0dXMgZGlnbmlzc2ltIGFsaXF1ZXQgaWQgdml0YWUgZHVpLiBOdWxsYSBhYyBlbGVtZW50dW0gbGliZXJvLiBDdXJhYml0dXIgYWxpcXVldCBlc3QgdmVsIG1vbGVzdGllIHVsdHJpY2VzLiBQcm9pbiBwZWxsZW50ZXNxdWUgaWFjdWxpcyBmZWxpcyBldCB0aW5jaWR1bnQuDQoNCkluIGV0IGVyb3MgdGVsbHVzLiBNYWVjZW5hcyB0aW5jaWR1bnQgbmVxdWUgdGVsbHVzLCBxdWlzIGFsaXF1YW0gbG9yZW0gdm9sdXRwYXQgdml0YWUuIFZlc3RpYnVsdW0gcG9ydHRpdG9yLCB1cm5hIGFjIGJsYW5kaXQgYmxhbmRpdCwgZXJhdCBzYXBpZW4gdnVscHV0YXRlIHF1YW0sIHV0IHRlbXBvciB2ZWxpdCBsZW8gcXVpcyBuaWJoLiBTZWQgdWx0cmljZXMgbGVjdHVzIHV0IHVybmEgbWF4aW11cyBjb25ndWUuIERvbmVjIHRlbXBvciBmZWxpcyB2ZWwgYWxpcXVldCBsb2JvcnRpcy4gUHJvaW4gc29kYWxlcyBjb25zZWN0ZXR1ciBlc3QgZmF1Y2lidXMgdGVtcHVzLiBWZXN0aWJ1bHVtIHZ1bHB1dGF0ZSBudWxsYSBldCBjb25zZWN0ZXR1ciBwbGFjZXJhdC4gTWFlY2VuYXMgaWQgc29kYWxlcyB1cm5hLiBJbiBwdXJ1cyB0b3J0b3IsIG1hdHRpcyB1dCBuaXNsIGlkLCBtYXhpbXVzIGN1cnN1cyBsZW8uIER1aXMgc3VzY2lwaXQgaWQgZXJhdCBpbiBvcm5hcmUuIE51bGxhIHF1aXMgY29udmFsbGlzIHRvcnRvciwgaWQgZWZmaWNpdHVyIHRlbGx1cy4gQWxpcXVhbSBhYyBydXRydW0gbnVuYy4gTnVsbGEgbnVsbGEgbGVjdHVzLCBtb2xlc3RpZSBzZWQgZGljdHVtIHZpdmVycmEsIHNvbGxpY2l0dWRpbiBldCBuaXNpLiBQcm9pbiBwb3J0dGl0b3Igc2NlbGVyaXNxdWUgbWkgaWQgcG9ydGEuIEluIGludGVyZHVtIHBlbGxlbnRlc3F1ZSBvcmNpLCBhYyBjb252YWxsaXMgcHVydXMuDQoNClBlbGxlbnRlc3F1ZSBpYWN1bGlzIGFjIGVsaXQgYXQgc2VtcGVyLiBNb3JiaSBsYW9yZWV0IHRlbGx1cyBuZWMgbmliaCBwb3N1ZXJlIGZyaW5naWxsYS4gSW4gZmFjaWxpc2lzIGFyY3UgZXUgZmV1Z2lhdCBoZW5kcmVyaXQuIFBlbGxlbnRlc3F1ZSBjdXJzdXMgYW50ZSBlcm9zLCBhIG1heGltdXMgbWV0dXMgbG9ib3J0aXMgc2VkLiBJbiB0ZW1wb3IgcXVhbSBxdWlzIHVybmEgZWdlc3RhcywgYSB2dWxwdXRhdGUgbWF1cmlzIHRlbXB1cy4gRnVzY2Ugbm9uIGNvbW1vZG8gdXJuYSwgdXQgbW9sZXN0aWUgZXJvcy4gSW50ZWdlciBjdXJzdXMgdml0YWUgbmVxdWUgdml0YWUgdGluY2lkdW50LiBNb3JiaSBldCBhdWd1ZSBjb25zZXF1YXQsIHNvZGFsZXMgcmlzdXMgaW4sIHRlbXB1cyBudW5jLiBJbiBhdCBtb2xsaXMgbmlzaS4gUGhhc2VsbHVzIHRlbXBvciBkdWkgZXUgZXJvcyBhdWN0b3IsIGlkIGNvbmd1ZSB0ZWxsdXMgdmVzdGlidWx1bS4NCg0KUGhhc2VsbHVzIGRpZ25pc3NpbSBlZ2VzdGFzIGxvcmVtIHNlZCBzb2RhbGVzLiBOdWxsYW0gdmFyaXVzIG51bmMgc2VkIGp1c3RvIGRpY3R1bSwgbmVjIGNvbW1vZG8gaXBzdW0gZmFjaWxpc2lzLiBWZXN0aWJ1bHVtIG1hdXJpcyBuaXNpLCBmYWNpbGlzaXMgYWMgZWxlbWVudHVtIHF1aXMsIGZpbmlidXMgZXUgc2VtLiBVdCBwbGFjZXJhdCBlcm9zIHNpdCBhbWV0IG5pYmggbHVjdHVzLCB2aXRhZSB0aW5jaWR1bnQgbWkgY29udmFsbGlzLiBDdXJhYml0dXIgdXQgbGFjdXMgZmVsaXMuIFZpdmFtdXMgcHVsdmluYXIgcXVpcyByaXN1cyB2aXRhZSBhbGlxdWFtLiBJbnRlZ2VyIGRpZ25pc3NpbSBzYXBpZW4gbWFzc2EsIG5lYyBjdXJzdXMgdXJuYSBmZXJtZW50dW0gZXUuIFV0IGV0IHRyaXN0aXF1ZSBzYXBpZW4uIFBoYXNlbGx1cyBudW5jIGF1Z3VlLCBjb21tb2RvIGZlcm1lbnR1bSBzZW1wZXIgcXVpcywgYmliZW5kdW0gYSBtYWduYS4gRHVpcyBhIHNhcGllbiBzZWQgZXggZ3JhdmlkYSBpbXBlcmRpZXQgaW4gdml0YWUgbGVjdHVzLiBWaXZhbXVzIHZlc3RpYnVsdW0gbGVjdHVzIGxpZ3VsYS4gUGhhc2VsbHVzIHNhcGllbiBlcmF0LCBpbXBlcmRpZXQgaW4gaGVuZHJlcml0IHNlZCwgYWxpcXVhbSBzaXQgYW1ldCBlcmF0LiBQcm9pbiBmZWxpcyBhdWd1ZSwgbWF0dGlzIHNlZCBxdWFtIHZpdGFlLCBjdXJzdXMgdHJpc3RpcXVlIHJpc3VzLiBQcmFlc2VudCB1bGxhbWNvcnBlciBldWlzbW9kIHNlbSBhdWN0b3IgdGluY2lkdW50LiBTZWQgdnVscHV0YXRlIHNhZ2l0dGlzIGRpYW0uIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4NCg0KU2VkIG9yY2kganVzdG8sIHByZXRpdW0gYWMgc2NlbGVyaXNxdWUgbmVjLCBldWlzbW9kIGV0IGF1Z3VlLiBTZWQgY29tbW9kbyBtYXNzYSBzaXQgYW1ldCBvZGlvIHBvc3VlcmUgZWZmaWNpdHVyIHF1aXMgdXQgbnVuYy4gTW9yYmkgcG9zdWVyZSBlbmltIGFudGUsIGVnZXQgZGlnbmlzc2ltIGVyYXQgdml2ZXJyYSBuZWMuIEluIGxvYm9ydGlzIG5vbiBlbmltIGluIGRhcGlidXMuIENyYXMgZnJpbmdpbGxhIGN1cnN1cyBwdXJ1cyBpZCB2ZWhpY3VsYS4gSW4gc2NlbGVyaXNxdWUgYXVndWUgZXUgdHJpc3RpcXVlIGNvbmd1ZS4gVmVzdGlidWx1bSBhdCB2ZWhpY3VsYSB1cm5hLiBEb25lYyBhIHJob25jdXMgbWV0dXMsIGluIGRpY3R1bSB0ZWxsdXMuIE1hdXJpcyBhYyBzYWdpdHRpcyBvZGlvLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIERvbmVjIG5pYmggdGVsbHVzLCBsYW9yZWV0IHZlbCBtb2xsaXMgdmVsLCBkaWN0dW0gbm9uIGxvcmVtLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDdXJhYml0dXIgZXJhdCByaXN1cywgbGFjaW5pYSBxdWlzIG9kaW8gdWx0cmljZXMsIGltcGVyZGlldCBkaWduaXNzaW0gZXJvcy4NCg0KQ3VyYWJpdHVyIHBlbGxlbnRlc3F1ZSBwdXJ1cyBpcHN1bSwgZXUgc2VtcGVyIG5pYmggdmFyaXVzIHF1aXMuIE51bmMgZXggZXJvcywgbW9sbGlzIGFjIGJpYmVuZHVtIGV0LCB0aW5jaWR1bnQgaWQgdHVycGlzLiBNYWVjZW5hcyB1bHRyaWNpZXMgcHVydXMgdml0YWUgcXVhbSByaG9uY3VzLCBhYyBmaW5pYnVzIGF1Z3VlIGxvYm9ydGlzLiBQcm9pbiBtb2xlc3RpZSB0cmlzdGlxdWUgZmVsaXMgaWQgbW9sZXN0aWUuIE1hZWNlbmFzIG5lYyBkdWkgc2VkIGxlY3R1cyB0aW5jaWR1bnQgcmhvbmN1cy4gTW9yYmkgdXQgc2FwaWVuIHJob25jdXMgYW50ZSBwb3N1ZXJlIGVsZW1lbnR1bS4gTnVsbGEgZGlnbmlzc2ltIGxpYmVybyBldCBsaWJlcm8gc3VzY2lwaXQsIG5vbiB1bGxhbWNvcnBlciBxdWFtIGZpbmlidXMuIFZlc3RpYnVsdW0gYWNjdW1zYW4gYWxpcXVldCB0b3J0b3Igc2VkIGNvbnNlcXVhdC4gTW9yYmkgdmVsIHNlbSB2ZWwgZmVsaXMgdWx0cmljaWVzIHNvbGxpY2l0dWRpbiBpbiBlZ2V0IGVuaW0uIFV0IHF1aXMgbG9yZW0gZXQgbGVvIHNlbXBlciBhY2N1bXNhbiBhdCBzZWQgZWxpdC4gQ3JhcyByaXN1cyBmZWxpcywgaW1wZXJkaWV0IHF1aXMgZmFjaWxpc2lzIGEsIG1heGltdXMgdml0YWUgdG9ydG9yLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuIFBlbGxlbnRlc3F1ZSBsYWNpbmlhIGFsaXF1ZXQgdGluY2lkdW50LiBVdCB2ZW5lbmF0aXMgbGFjdXMgbmVjIG5lcXVlIGJsYW5kaXQgaGVuZHJlcml0IGF0IGEgbmlzaS4NCg0KSW50ZWdlciBhIGJsYW5kaXQgbnVuYy4gUGVsbGVudGVzcXVlIGNvbnNlY3RldHVyIGlkIGRvbG9yIG5vbiB1bHRyaWNpZXMuIER1aXMgbG9ib3J0aXMsIGVsaXQgdml0YWUgZWxlbWVudHVtIGJsYW5kaXQsIG1hdXJpcyBlbGl0IHRlbXBvciBmZWxpcywgZXUgc29kYWxlcyBhcmN1IGxpYmVybyB2ZWwgbmlzbC4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBOdW5jIHV0IGFyY3Ugdml0YWUgbmVxdWUgZ3JhdmlkYSB2YXJpdXMgdXQgYWMgbGVvLiBOdWxsYSBuZWMgbHVjdHVzIHF1YW0uIEZ1c2NlIHBsYWNlcmF0IG5pc2wgYXVndWUsIHNpdCBhbWV0IHByZXRpdW0gZXN0IHZlaGljdWxhIHZlbC4gU2VkIHNlbSBhcmN1LCBkYXBpYnVzIGF0IG5pc2wgZWdldCwgZmF1Y2lidXMgZWZmaWNpdHVyIG1hc3NhLiBTZWQgdXQgdHVycGlzIHJob25jdXMsIHN1c2NpcGl0IGxhY3VzIG1hbGVzdWFkYSwgY29uZGltZW50dW0gZWxpdC4gVmVzdGlidWx1bSBpbXBlcmRpZXQgdGluY2lkdW50IGR1aSBzaXQgYW1ldCBsb2JvcnRpcy4gRG9uZWMgbmVxdWUgbWksIGlhY3VsaXMgcXVpcyBvcm5hcmUgYXQsIHZhcml1cyBhYyBxdWFtLiBQaGFzZWxsdXMgdmVsIGlhY3VsaXMgbnVuYy4gU2VkIGxhY2luaWEgcGhhcmV0cmEgZWxlaWZlbmQuIFNlZCBjb252YWxsaXMgZXN0IGEgbnVuYyBsYW9yZWV0IGNvbW1vZG8uIE1hdXJpcyB2ZWhpY3VsYSBsZW8gZXN0LCBzZWQgaWFjdWxpcyBsZW8gdnVscHV0YXRlIGFjLg0KDQpEb25lYyBhIHRlbGx1cyBldCBkaWFtIGludGVyZHVtIHByZXRpdW0uIFN1c3BlbmRpc3NlIHZ1bHB1dGF0ZSBtaSBkdWksIGV0IHNvbGxpY2l0dWRpbiBudW5jIHZlaGljdWxhIGEuIENyYXMgb3JuYXJlLCBkdWkgaW4gZ3JhdmlkYSBtYXhpbXVzLCBwdXJ1cyBvZGlvIGJpYmVuZHVtIGxlY3R1cywgbmVjIGNvbnNlcXVhdCBtYWduYSBuaXNsIHZlbCBtYXNzYS4gQ3JhcyBldCBsZWN0dXMgc2NlbGVyaXNxdWUsIGlhY3VsaXMgbGlndWxhIG5lYywgbG9ib3J0aXMganVzdG8uIE5hbSBmaW5pYnVzIGxlbyBhIHBoYXJldHJhIHRlbXB1cy4gQ3VyYWJpdHVyIGdyYXZpZGEsIGp1c3RvIHNlZCBjb25ndWUgZXVpc21vZCwgZHVpIGxlY3R1cyBwb3N1ZXJlIG5pc2wsIGF0IGRhcGlidXMgbG9yZW0gYW50ZSBlZ2V0IG1hc3NhLiBNYXVyaXMgYXVjdG9yIHBlbGxlbnRlc3F1ZSBhbGlxdWFtLiBOdW5jIGZhdWNpYnVzIG5lcXVlIGZlcm1lbnR1bSB0aW5jaWR1bnQgdml2ZXJyYS4gVXQgdml2ZXJyYSBzYXBpZW4gYWMgYW50ZSBwbGFjZXJhdCBjb21tb2RvLg0KDQpBbGlxdWFtIGV1IG51bGxhIHBoYXJldHJhLCBjdXJzdXMgbmliaCBjb21tb2RvLCB2ZW5lbmF0aXMgdmVsaXQuIEZ1c2NlIHNhZ2l0dGlzIHNpdCBhbWV0IGxvcmVtIGV1IHNhZ2l0dGlzLiBNYXVyaXMgaWFjdWxpcyBldSBzYXBpZW4gaW4gcmhvbmN1cy4gUGhhc2VsbHVzIGNvbW1vZG8gb2RpbyBpbiBjb25kaW1lbnR1bSBjb25zZXF1YXQuIFByYWVzZW50IGNvbnZhbGxpcyBtb2xlc3RpZSBhdWd1ZSBzaXQgYW1ldCBibGFuZGl0LiBOdWxsYSBsaWJlcm8gcmlzdXMsIHBvcnR0aXRvciB2YXJpdXMgZWxlaWZlbmQgYXQsIGVsZWlmZW5kIGV1IGlwc3VtLiBQZWxsZW50ZXNxdWUgdmVsIHF1YW0gdWx0cmljaWVzLCBlZ2VzdGFzIGxvcmVtIGV0LCBtb2xsaXMgbmliaC4gUXVpc3F1ZSBsb2JvcnRpcyBwdWx2aW5hciBhdWd1ZSwgdml0YWUgY29uc2VjdGV0dXIganVzdG8gZmFjaWxpc2lzIHNjZWxlcmlzcXVlLiBBbGlxdWFtIHRyaXN0aXF1ZSwgbWFnbmEgdml0YWUgZnJpbmdpbGxhIGRhcGlidXMsIG51bGxhIHF1YW0gdmVoaWN1bGEgdG9ydG9yLCBub24gZXVpc21vZCBvZGlvIGxvcmVtIHF1aXMgYXJjdS4gSW50ZWdlciB0aW5jaWR1bnQgZWxlaWZlbmQgdm9sdXRwYXQuDQoNClBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLiBNb3JiaSBldCBwb3J0YSBsaWJlcm8uIEFsaXF1YW0gYSB0aW5jaWR1bnQgZXJvcy4gTnVuYyB1bHRyaWNlcyBmZXVnaWF0IHZvbHV0cGF0LiBBZW5lYW4gdml0YWUgdGVtcG9yIGFudGUuIFBoYXNlbGx1cyB1dCB2ZXN0aWJ1bHVtIGlwc3VtLiBWaXZhbXVzIGFsaXF1YW0gbGFjdXMgcnV0cnVtIG5lcXVlIHRpbmNpZHVudCBiaWJlbmR1bS4gRG9uZWMgZGlhbSByaXN1cywgYmliZW5kdW0gbmVjIGFsaXF1ZXQgdml0YWUsIGNvbnNlcXVhdCB2ZW5lbmF0aXMgcHVydXMuIFByYWVzZW50IGV1IHZlc3RpYnVsdW0gbWkuDQoNCkRvbmVjIGFjY3Vtc2FuIGludGVyZHVtIGxlbywgcXVpcyB2ZWhpY3VsYSByaXN1cyBmYWNpbGlzaXMgZXUuIENyYXMgc2VtcGVyIG5pYmggcXVpcyBzY2VsZXJpc3F1ZSBlbGVpZmVuZC4gRG9uZWMgcHVydXMgbGVjdHVzLCB2dWxwdXRhdGUgZXUgcHVsdmluYXIgZXUsIHZlc3RpYnVsdW0gc2l0IGFtZXQgZW5pbS4gVmVzdGlidWx1bSBldWlzbW9kIGFudGUgZ3JhdmlkYSwgY29tbW9kbyBkdWkgbmVjLCBpbnRlcmR1bSBlcmF0LiBNb3JiaSBpZCBlcmF0IGFjIHR1cnBpcyBwZWxsZW50ZXNxdWUgdWx0cmljaWVzIGV1IHNlZCBzYXBpZW4uIFByYWVzZW50IGdyYXZpZGEgb2RpbyBzZWQgaXBzdW0gY29tbW9kbyBmYXVjaWJ1cy4gQ3JhcyBhYyBsdWN0dXMgYXVndWUuIEludGVnZXIgbm9uIGFudGUgdmVsIG1hdXJpcyB0cmlzdGlxdWUgZnJpbmdpbGxhIGV1IGluIG1hZ25hLiBEb25lYyB2b2x1dHBhdCB2ZWxpdCBhdCBsaWJlcm8gcG9zdWVyZSwgaW4gcG9zdWVyZSBsaWd1bGEgY29uZ3VlLiBQaGFzZWxsdXMgdmVzdGlidWx1bSB0ZWxsdXMgbnVuYywgdml0YWUgbGFjaW5pYSB0dXJwaXMgc2VtcGVyIGV0LiBFdGlhbSBpbXBlcmRpZXQgbmVxdWUgdmVsIG5pYmggZ3JhdmlkYSB0ZW1wb3IuIENyYXMgc2l0IGFtZXQgZXVpc21vZCBqdXN0by4gRXRpYW0gaWQgbnVsbGEgcXVpcyBsaWJlcm8gbG9ib3J0aXMgdmVzdGlidWx1bS4gQ3VyYWJpdHVyIGV0IGRvbG9yIHZlbCBleCBldWlzbW9kIG1hdHRpcyBhdCBhdWN0b3IgbmlzaS4NCg0KVml2YW11cyBlbGVtZW50dW0gcG9zdWVyZSBmZWxpcyBhYyB2YXJpdXMuIFZpdmFtdXMgYSBtZXR1cyB0ZWxsdXMuIEludGVnZXIgYXVjdG9yIHRpbmNpZHVudCBmZWxpcyB2ZWwgYmxhbmRpdC4gUHJvaW4gYXQgbmlzaSBudWxsYS4gSW50ZWdlciB1dCBxdWFtIHVsdHJpY2llcywgdmVzdGlidWx1bSB0ZWxsdXMgc2VkLCBsYW9yZWV0IG1hc3NhLiBBZW5lYW4gZ3JhdmlkYSBwaGFyZXRyYSBuZXF1ZSwgdml0YWUgZWxlbWVudHVtIHVybmEgdWx0cmljZXMgbmVjLiBTZWQgdmVuZW5hdGlzIGVuaW0gdmVsIG5lcXVlIHNhZ2l0dGlzIHZlaGljdWxhLiBTdXNwZW5kaXNzZSBzZW1wZXIsIGxlbyBwZWxsZW50ZXNxdWUgdGVtcG9yIGZhY2lsaXNpcywgbGVjdHVzIGVuaW0gc2NlbGVyaXNxdWUgZG9sb3IsIHZlbCBwbGFjZXJhdCBvcmNpIG1pIGV0IGxpZ3VsYS4gU2VkIGF1Z3VlIGp1c3RvLCBmcmluZ2lsbGEgaW4gZGlhbSBhYywgaWFjdWxpcyBlZ2VzdGFzIGlwc3VtLiBOdW5jIHZ1bHB1dGF0ZSB2ZWxpdCBlZ2V0IGxlbyBzb2xsaWNpdHVkaW4gcGhhcmV0cmEuIER1aXMgYSBuaXNsIGlkIHJpc3VzIHByZXRpdW0gcGxhY2VyYXQgc2VkIGV1IGxlY3R1cy4gU2VkIG1hbGVzdWFkYSwgZGlhbSBzaXQgYW1ldCB2ZXN0aWJ1bHVtIG1heGltdXMsIHNlbSByaXN1cyBhbGlxdWV0IGFudGUsIHF1aXMgcnV0cnVtIG1hZ25hIHRlbGx1cyBhYyBudW5jLiBWaXZhbXVzIHZlbCBudW5jIGxhb3JlZXQsIGNvbmRpbWVudHVtIG51bmMgaWQsIGNvbmd1ZSBpcHN1bS4gTmFtIHZlbCBmaW5pYnVzIG1ldHVzLg0KDQpMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuIER1aXMgZGFwaWJ1cyB2dWxwdXRhdGUgc2VtIGEgbWF0dGlzLiBDdXJhYml0dXIgcGhhcmV0cmEgZGFwaWJ1cyBzY2VsZXJpc3F1ZS4gSW4gaWQgbGVjdHVzIGFjIHRvcnRvciB2YXJpdXMgY29uZ3VlIHNlZCB2ZWwgbnVuYy4gU3VzcGVuZGlzc2UgbmVjIG9ybmFyZSBudW5jLiBQZWxsZW50ZXNxdWUgaGVuZHJlcml0IGVsaXQgbmVjIGZhY2lsaXNpcyByaG9uY3VzLiBDdXJhYml0dXIgYXVjdG9yIG5lcXVlIGluIGxhY3VzIHByZXRpdW0gcnV0cnVtLiBEdWlzIHBoYXJldHJhIHBlbGxlbnRlc3F1ZSBtZXR1cyBzZWQgZmluaWJ1cy4gUGVsbGVudGVzcXVlIHZlbGl0IG5pYmgsIHVsdHJpY2VzIHV0IGFsaXF1ZXQgZXUsIGltcGVyZGlldCBpZCBkb2xvci4gSW4gY29uc2VxdWF0IGV4IGFjIG5pYmggaW1wZXJkaWV0IGZpbmlidXMuDQoNCkN1cmFiaXR1ciBub24gYXJjdSBpbnRlcmR1bSwgbG9ib3J0aXMgbWFzc2EgbmVjLCBsb2JvcnRpcyBhcmN1LiBOdWxsYSBmYWNpbGlzaS4gTmFtIHVsbGFtY29ycGVyIHRlbGx1cyBhdCB0dXJwaXMgcGVsbGVudGVzcXVlLCBlZ2V0IHZpdmVycmEgdXJuYSBlZ2VzdGFzLiBEb25lYyBuZWMgZWxlaWZlbmQgbWkuIER1aXMgcmhvbmN1cyBpbiBuaXNpIHF1aXMgdHJpc3RpcXVlLiBTZWQgcnV0cnVtIGludGVyZHVtIGVzdCwgbm9uIGhlbmRyZXJpdCBleCB2b2x1dHBhdCBhLiBQaGFzZWxsdXMgZXQgbWFzc2EgcGVsbGVudGVzcXVlIG9kaW8gZGlnbmlzc2ltIGNvbmd1ZS4gQ3JhcyBvZGlvIGR1aSwgZmF1Y2lidXMgbmVjIHB1cnVzIG5vbiwgaW1wZXJkaWV0IHZvbHV0cGF0IG9yY2kuIFByYWVzZW50IGx1Y3R1cyBuaXNpIGluIHRlbGx1cyB0aW5jaWR1bnQgc3VzY2lwaXQuIFBoYXNlbGx1cyBzb2RhbGVzIHNlbXBlciBvcmNpLCBzZWQgcGxhY2VyYXQgZW5pbSBncmF2aWRhIHV0LiBOdWxsYSB2aXRhZSB0dXJwaXMgYXQgZGlhbSBwZWxsZW50ZXNxdWUgYWNjdW1zYW4gdml0YWUgbmVjIGxpZ3VsYS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IEFsaXF1YW0gZmFjaWxpc2lzIG1hbGVzdWFkYSBzZW0sIGlkIGVsZWlmZW5kIGxlY3R1cyBtYXR0aXMgYS4NCg0KU3VzcGVuZGlzc2UgY29tbW9kbyBhYyBsaWd1bGEgbm9uIHRlbXBvci4gRG9uZWMgdWx0cmljaWVzIHNlbSBldCBlbGl0IHRpbmNpZHVudCB0ZW1wdXMuIFBlbGxlbnRlc3F1ZSBlbGl0IGVyYXQsIHBsYWNlcmF0IGluIHB1cnVzIHZlbCwgcHVsdmluYXIgYmliZW5kdW0gbGVvLiBWZXN0aWJ1bHVtIGF1Y3RvciBmZXJtZW50dW0gdmFyaXVzLiBNYXVyaXMgdXQgZXggYSBuZXF1ZSBmZXVnaWF0IG1vbGxpcy4gUHJvaW4gb3JuYXJlIG51bGxhIGRvbG9yLCBhdCB2aXZlcnJhIG1hc3NhIHZ1bHB1dGF0ZSB2ZWwuIERvbmVjIG1vbGVzdGllIG1hc3NhIHNlZCBuZXF1ZSBhbGlxdWV0IGNvbmd1ZSBhIHNlZCBudWxsYS4gTnVsbGFtIGVnZXN0YXMgcGxhY2VyYXQgZXggdmVsIGV1aXNtb2QuIE1hZWNlbmFzIGF0IHNjZWxlcmlzcXVlIGVsaXQuIFBoYXNlbGx1cyBtb2xlc3RpZSwgZWxpdCBuZWMgc3VzY2lwaXQgYWxpcXVldCwgbWFnbmEgcHVydXMgc3VzY2lwaXQgbGVvLCB1dCB0cmlzdGlxdWUgb3JjaSBtYXVyaXMgdXQgcHVydXMuIFN1c3BlbmRpc3NlIHZlbmVuYXRpcyBlZ2VzdGFzIGxlY3R1cyBhYyB2b2x1dHBhdC4gRHVpcyBsdWN0dXMsIGVzdCBldCBmcmluZ2lsbGEgb3JuYXJlLCBhdWd1ZSBvZGlvIGZhdWNpYnVzIGF1Z3VlLCB2aXRhZSB2b2x1dHBhdCBuaWJoIG5pc2kgcXVpcyBsaWJlcm8uIEV0aWFtIGF0IHR1cnBpcyBlZ2V0IGVuaW0gcGhhcmV0cmEgbW9sZXN0aWUuIE1hdXJpcyB2ZWhpY3VsYSBldWlzbW9kIGRvbG9yIGVnZXQgZXVpc21vZC4gSW50ZWdlciB1dCBsYWNpbmlhIG1hZ25hLCBoZW5kcmVyaXQgZmF1Y2lidXMgbWV0dXMuDQoNClBlbGxlbnRlc3F1ZSBjb21tb2RvIHZpdGFlIG1hZ25hIGJsYW5kaXQgZmVybWVudHVtLiBEb25lYyBhbGlxdWV0LCBsZW8gdml0YWUgZnJpbmdpbGxhIGZyaW5naWxsYSwgcXVhbSBlc3QgZmFjaWxpc2lzIGV4LCBmZXJtZW50dW0gZmVybWVudHVtIG5lcXVlIGR1aSBldSBkaWFtLiBOYW0gcmhvbmN1cyBxdWFtIG5pYmgsIGV0IGZlcm1lbnR1bSBudW5jIHRlbXBvciBpbi4gQWVuZWFuIHZpdmVycmEsIHR1cnBpcyB1dCBpbXBlcmRpZXQgZGljdHVtLCBtYXVyaXMgbWF1cmlzIHRlbXBvciBsb3JlbSwgcXVpcyB0ZW1wb3Igc2FwaWVuIGp1c3RvIGFjIGR1aS4gUHJvaW4gbmVjIG5pYmggbGFjdXMuIERvbmVjIHZlbCBsYWN1cyBpZCBsaWd1bGEgcHVsdmluYXIgcG9ydGEgdml0YWUgbmVjIG5pYmguIFN1c3BlbmRpc3NlIHVsbGFtY29ycGVyIGFsaXF1ZXQgc29sbGljaXR1ZGluLiBEb25lYyBzaXQgYW1ldCBvcmNpIHNlZCBhcmN1IGVmZmljaXR1ciBsYWNpbmlhLg0KDQpNYXVyaXMgc2l0IGFtZXQgdWxsYW1jb3JwZXIgc2FwaWVuLiBTZWQgYXQgcmlzdXMgYW50ZS4gRG9uZWMgdWx0cmljZXMgcHVsdmluYXIgcGVsbGVudGVzcXVlLiBDcmFzIHNlZCBlbmltIGV0IG1hdXJpcyBhY2N1bXNhbiBzdXNjaXBpdCBub24gcXVpcyBkaWFtLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBWaXZhbXVzIHZpdGFlIGVuaW0gcHVydXMuIERvbmVjIGV1IG1pIHR1cnBpcy4gSW50ZWdlciByaXN1cyBmZWxpcywgZGlnbmlzc2ltIGRhcGlidXMgZXN0IGVnZXQsIHZ1bHB1dGF0ZSBzdXNjaXBpdCBuaXNpLg0KDQpTZWQgdWx0cmljZXMsIGxvcmVtIHBvcnR0aXRvciBjb252YWxsaXMgY29tbW9kbywgZXggYXVndWUgcG9ydGEgc2FwaWVuLCBkaWduaXNzaW0gY29uZ3VlIGV4IG1hc3NhIHZpdGFlIHF1YW0uIFNlZCBncmF2aWRhIHR1cnBpcyBpbiBkdWkgdmVuZW5hdGlzLCBpbiBzdXNjaXBpdCBhcmN1IGhlbmRyZXJpdC4gVmVzdGlidWx1bSBydXRydW0gZWxpdCBpZCBmZWxpcyBmZXJtZW50dW0gYWxpcXVldC4gTWF1cmlzIGluIGZhdWNpYnVzIGxpZ3VsYSwgYXQgZXVpc21vZCBvcmNpLiBDdXJhYml0dXIgdGVsbHVzIHJpc3VzLCBmYXVjaWJ1cyBhIGVyb3MgZXUsIGZlcm1lbnR1bSBwcmV0aXVtIGRvbG9yLiBWaXZhbXVzIGludGVyZHVtIGp1c3RvIHZlbGl0LCBhYyBvcm5hcmUgbWFzc2EgcmhvbmN1cyBuZWMuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLiBVdCB2ZWxpdCBuaXNpLCByaG9uY3VzIHNpdCBhbWV0IGxlbyBwb3N1ZXJlLCB2ZWhpY3VsYSBibGFuZGl0IG9yY2kuIFN1c3BlbmRpc3NlIHB1cnVzIGFyY3UsIGN1cnN1cyBhIG9kaW8gYSwgYWNjdW1zYW4gbWF0dGlzIGFudGUuIE51bGxhbSBmZXVnaWF0IHRlbGx1cyBhdCBsYWN1cyBkaWN0dW0gbW9sbGlzLiBEb25lYyBqdXN0byBuaWJoLCBjb25zZXF1YXQgaWQgbGVvIGEsIHRlbXB1cyBwaGFyZXRyYSBlbGl0LiBGdXNjZSBpbnRlcmR1bSBwbGFjZXJhdCBkb2xvciB1dCBzYWdpdHRpcy4NCg0KUHJhZXNlbnQgZWdldCBmYWNpbGlzaXMgbmlzbCwgbmVjIGxhY2luaWEgcHVydXMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBGdXNjZSBoZW5kcmVyaXQgdm9sdXRwYXQgaGVuZHJlcml0LiBBbGlxdWFtIHV0IHZlbGl0IHZpdGFlIG1pIHNjZWxlcmlzcXVlIHJob25jdXMuIFBoYXNlbGx1cyBtb2xsaXMgcmhvbmN1cyBvcm5hcmUuIFByYWVzZW50IGRpY3R1bSBpbXBlcmRpZXQgbmlzaSBzaXQgYW1ldCB0cmlzdGlxdWUuIEFsaXF1YW0gdXQgdmVoaWN1bGEgZXJhdC4gUHJhZXNlbnQgbG9ib3J0aXMgbWF4aW11cyBleCBzZWQgZmF1Y2lidXMuDQoNCkluIHVsdHJpY2llcyB2aXZlcnJhIGxpYmVybyB2aXRhZSB1bHRyaWNlcy4gUGVsbGVudGVzcXVlIHZpdGFlIHBoYXJldHJhIG1pLiBTZWQgdXJuYSBsaWJlcm8sIHZvbHV0cGF0IGlkIGhlbmRyZXJpdCBlZ2V0LCBkaWduaXNzaW0gdml0YWUgZW5pbS4gU2VkIGJsYW5kaXQgbnVsbGEgYSBlc3QgdGVtcG9yLCBhYyBlbGVpZmVuZCB0b3J0b3IgaGVuZHJlcml0LiBJbnRlZ2VyIGdyYXZpZGEgZGlhbSBpZCB1bHRyaWNlcyB2b2x1dHBhdC4gTmFtIGVsaXQgbmlzaSwgcG9ydHRpdG9yIGlhY3VsaXMgbnVsbGEgdXQsIG1heGltdXMgdmVzdGlidWx1bSBsYWN1cy4gQWxpcXVhbSBuZWMgYW50ZSB1bGxhbWNvcnBlciwgbW9sbGlzIGRvbG9yIGV1LCBncmF2aWRhIG5pc2kuIFZlc3RpYnVsdW0gdWx0cmljaWVzIGNvbmd1ZSBjb25ndWUuDQoNCkNsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gRXRpYW0gYWNjdW1zYW4gbnVuYyBldSBudWxsYSB0cmlzdGlxdWUgbW9sbGlzLiBDcmFzIHBsYWNlcmF0IHNlbXBlciB2dWxwdXRhdGUuIFNlZCBpZCB0aW5jaWR1bnQgcXVhbS4gVXQgcG9ydGEgaW50ZXJkdW0gb3JjaSwgZXQgZXVpc21vZCBvZGlvIHRyaXN0aXF1ZSB2aXRhZS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVuYyBhdCBzZW0gbmliaC4gSW50ZWdlciBub24gYWxpcXVldCBsb3JlbSwgZXQgYXVjdG9yIHVybmEuIERvbmVjIHZpdmVycmEgbWF1cmlzIG5lYyBxdWFtIGNvbnNlcXVhdCB0ZW1wdXMuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gU2VkIGEgZXggc2VtcGVyLCBhbGlxdWFtIHZlbGl0IGV1LCB1bHRyaWNlcyBkb2xvci4NCg0KRG9uZWMgdmVsIGVyb3MgZWdlc3RhcyBuaWJoIGV1aXNtb2QgZGFwaWJ1cyBuZWMgYSBkaWFtLiBNYXVyaXMgY29uZGltZW50dW0gbm9uIGxpZ3VsYSBxdWlzIGdyYXZpZGEuIFBlbGxlbnRlc3F1ZSB2b2x1dHBhdCBtYXhpbXVzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlbWVudHVtIHVybmEgY29udmFsbGlzIGlkLiBJbnRlZ2VyIHZlbCBkdWkgbHVjdHVzLCBhY2N1bXNhbiBuaWJoIHZpdGFlLCByaG9uY3VzIHR1cnBpcy4gQ3VyYWJpdHVyIG1vbGxpcyBhbnRlIGRpYW0sIHBoYXJldHJhIHRpbmNpZHVudCBsaWd1bGEgdWxsYW1jb3JwZXIgZXQuIFV0IGRpZ25pc3NpbSBkaWN0dW0gbGFjdXMsIGF0IGRpZ25pc3NpbSBlcm9zLiBWZXN0aWJ1bHVtIGxvYm9ydGlzIHRyaXN0aXF1ZSBsYWN1cywgYXQgZXVpc21vZCBpcHN1bSB2ZW5lbmF0aXMgZWdldC4gQWVuZWFuIHRyaXN0aXF1ZSBpZCBxdWFtIGluIGlhY3VsaXMuIEN1cmFiaXR1ciBwaGFyZXRyYSBlZmZpY2l0dXIgZG9sb3IuIFZpdmFtdXMgYWMgZXJvcyBuZXF1ZS4gSW4gc2l0IGFtZXQgaWFjdWxpcyBwdXJ1cy4gQWxpcXVhbSBldCBsZW8gYSB2ZWxpdCBhY2N1bXNhbiBzYWdpdHRpcyBldCBxdWlzIGVuaW0uIFBlbGxlbnRlc3F1ZSBtYWduYSBleCwgZnJpbmdpbGxhIGlkIG9yY2kgZXQsIG1vbGxpcyBmZXJtZW50dW0gc2VtLg0KDQpGdXNjZSBpbnRlcmR1bSBpYWN1bGlzIGR1aSwgaW4gYWxpcXVldCB1cm5hIGZpbmlidXMgdXQuIFZlc3RpYnVsdW0gYWNjdW1zYW4gc29sbGljaXR1ZGluIGxpZ3VsYSBldCB0cmlzdGlxdWUuIE51bmMgY3Vyc3VzIHZlbmVuYXRpcyBkaWFtLCBzaXQgYW1ldCBhbGlxdWV0IGVyYXQgdmVuZW5hdGlzIHZpdGFlLiBOdWxsYW0gbGFjaW5pYSBvcmNpIGVnZXQgbHVjdHVzIHJob25jdXMuIE1hZWNlbmFzIG1hdXJpcyBuaWJoLCBwaGFyZXRyYSBjb21tb2RvIG1vbGVzdGllIHZpdGFlLCBmYXVjaWJ1cyBpbiBlcm9zLiBVdCBhIHByZXRpdW0gdHVycGlzLCBzaXQgYW1ldCBldWlzbW9kIGZlbGlzLiBJbnRlZ2VyIHZpdmVycmEgZW5pbSB1dCBlbGVpZmVuZCB2b2x1dHBhdC4gVml2YW11cyBlbGVtZW50dW0gbGVjdHVzIGluIG5pYmggaW50ZXJkdW0sIHNlZCBkaWN0dW0gdXJuYSBwb3J0dGl0b3IuIFZlc3RpYnVsdW0gbW9sZXN0aWUgb3JjaSBub24gdHJpc3RpcXVlIHZlc3RpYnVsdW0uIE5hbSBudWxsYSBsZW8sIGZldWdpYXQgZXUgaGVuZHJlcml0IHV0LCBjb252YWxsaXMgdXQgYW50ZS4gRG9uZWMgcGhhcmV0cmEgbG9yZW0gcXVpcyBsZWN0dXMgZ3JhdmlkYSwgbm9uIGV1aXNtb2QgZW5pbSBpbXBlcmRpZXQuIEN1cmFiaXR1ciBhYyBlbGl0IGV4Lg0KDQpTZWQgbGFjdXMgc2VtLCBmaW5pYnVzIGEgbWF0dGlzIGF0LCBmaW5pYnVzIG5vbiBudW5jLiBVdCBhdCBudWxsYSB1bHRyaWNpZXMsIHZvbHV0cGF0IGxpYmVybyB2aXRhZSwgY29udmFsbGlzIGxlby4gQ3JhcyBxdWlzIHNlbSBtZXR1cy4gUHJvaW4gdHVycGlzIHJpc3VzLCBzdXNjaXBpdCBuZWMgZmF1Y2lidXMgaW4sIHZlaGljdWxhIHZlbCBqdXN0by4gRnVzY2UgY29tbW9kbyBhcmN1IGF0IG1ldHVzIGNvbnNlY3RldHVyLCBpbiBlZmZpY2l0dXIgZHVpIGVnZXN0YXMuIENyYXMgZWdldCBhdWd1ZSBtYXhpbXVzLCB2ZXN0aWJ1bHVtIHNhcGllbiB1dCwgbGFvcmVldCBtYWduYS4gSW50ZWdlciBtYWxlc3VhZGEgbnVsbGEgYXQgc2NlbGVyaXNxdWUgZmV1Z2lhdC4gQ3JhcyBwdWx2aW5hciwgdGVsbHVzIHNpdCBhbWV0IHVsbGFtY29ycGVyIGZlcm1lbnR1bSwgcHVydXMgbG9yZW0gbGFvcmVldCBudW5jLCBlbGVtZW50dW0gbW9sbGlzIGVyYXQgbWFzc2EgcXVpcyBvZGlvLiBEdWlzIGVsZWlmZW5kIG51bGxhIGluIGxpZ3VsYSBydXRydW0gY29uZ3VlLiBQcmFlc2VudCBpYWN1bGlzLCBtYXNzYSBjb25ndWUgZWdlc3RhcyBlZ2VzdGFzLCB0dXJwaXMgZmVsaXMgZWxlaWZlbmQgZXJhdCwgdXQgbG9ib3J0aXMgbWV0dXMgZXJhdCBhdCBzZW0uIFZpdmFtdXMgcXVpcyBkb2xvciBlZ2V0IGxlbyBkaWN0dW0gdnVscHV0YXRlLiBOdWxsYSBzZWQgbmlzbCB2ZWxpdC4gQ3VyYWJpdHVyIGxhY2luaWEgdmVsaXQgbGFjdXMsIGF0IHVsbGFtY29ycGVyIGVsaXQgY3Vyc3VzIG5vbi4gQWxpcXVhbSBkaWduaXNzaW0gZW5pbSBsaWd1bGEsIHV0IGZyaW5naWxsYSBsZWN0dXMgYWxpcXVldCBzZWQuIE1vcmJpIGNvbmRpbWVudHVtIGxlY3R1cyBub24gYXVndWUgbGFjaW5pYSwgdXQgdWxsYW1jb3JwZXIgbGliZXJvIHVsdHJpY2llcy4gUHJhZXNlbnQgcG9zdWVyZSB1cm5hIHNhcGllbiwgYXVjdG9yIG1vbGVzdGllIG1hZ25hIHBlbGxlbnRlc3F1ZSBwbGFjZXJhdC4NCg0KU3VzcGVuZGlzc2Ugc2l0IGFtZXQgcXVhbSBwaGFyZXRyYSwgZGlnbmlzc2ltIG5lcXVlIGluLCBpbXBlcmRpZXQgbnVuYy4gTmFtIG1heGltdXMgY29tbW9kbyBtb2xlc3RpZS4gTWF1cmlzIG1heGltdXMgcHVsdmluYXIgY29uZ3VlLiBQcm9pbiB1dCB0dXJwaXMgcGVsbGVudGVzcXVlLCBjb21tb2RvIHF1YW0gZmF1Y2lidXMsIHZvbHV0cGF0IG1ldHVzLiBOdWxsYSBkaWduaXNzaW0gdWx0cmljZXMgZmluaWJ1cy4gUXVpc3F1ZSBhY2N1bXNhbiBlZ2VzdGFzIGVzdCBpbiBjb25zZXF1YXQuIEV0aWFtIHZlbCBuaWJoIGVsZW1lbnR1bSwgc29kYWxlcyB0b3J0b3IgaW4sIGRpY3R1bSBlcm9zLiBBbGlxdWFtIHNvZGFsZXMgY29uZGltZW50dW0gdnVscHV0YXRlLiBNYXVyaXMgbHVjdHVzIHNhcGllbiBuZWMgdHVycGlzIHZlc3RpYnVsdW0gdm9sdXRwYXQuIEZ1c2NlIG1hc3NhIGxlbywgaW1wZXJkaWV0IG5lYyBleCBzZWQsIG1heGltdXMgdWx0cmljZXMgb2Rpby4NCg0KTWFlY2VuYXMganVzdG8gYXJjdSwgZGljdHVtIG9ybmFyZSBlcmF0IGlkLCBmYWNpbGlzaXMgZXVpc21vZCBudW5jLiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuIFByYWVzZW50IGZhdWNpYnVzIGV4IG5vbiBkaWFtIG1hbGVzdWFkYSB2ZWhpY3VsYS4gTmFtIHNlZCBhbGlxdWFtIGxpZ3VsYS4gRXRpYW0gaWQgZWxpdCBmcmluZ2lsbGEsIGVsZW1lbnR1bSBlbGl0IHNpdCBhbWV0LCBkaWN0dW0gdmVsaXQuIFZlc3RpYnVsdW0gaWQgb2RpbyB1dCBlbmltIHZ1bHB1dGF0ZSBsYW9yZWV0IHNlZCBzZWQgYXJjdS4gUHJhZXNlbnQgcG9ydHRpdG9yIHZlc3RpYnVsdW0gdHVycGlzIGluIHB1bHZpbmFyLiBNb3JiaSBlbGl0IG51bmMsIGNvbW1vZG8gYSBzY2VsZXJpc3F1ZSBldSwgaW50ZXJkdW0gYXQgZHVpLiBNb3JiaSB2ZXN0aWJ1bHVtIHRlbXBvciBsaWJlcm8sIGVnZXQgZmF1Y2lidXMgbWF1cmlzIGRpY3R1bSBpZC4gQWVuZWFuIGRpZ25pc3NpbSwgbmliaCBzaXQgYW1ldCB2YXJpdXMgbW9sbGlzLCBxdWFtIGFyY3UgdmVuZW5hdGlzIGxlY3R1cywgaWQgZmVybWVudHVtIHJpc3VzIHF1YW0gZXQgZHVpLiBOdW5jIGNvbmRpbWVudHVtIGRpY3R1bSBleC4NCg0KUGVsbGVudGVzcXVlIGlwc3VtIGF1Z3VlLCBpYWN1bGlzIHZlbCBhY2N1bXNhbiBsb2JvcnRpcywgbW9sZXN0aWUgdmVsIHNhcGllbi4gQ3JhcyBwbGFjZXJhdCBxdWlzIHVybmEgYXQgZGlnbmlzc2ltLiBTZWQgZnJpbmdpbGxhIHBlbGxlbnRlc3F1ZSB0ZWxsdXMgc2l0IGFtZXQgZWZmaWNpdHVyLiBJbiBsdWN0dXMgZnJpbmdpbGxhIG5pYmgsIHF1aXMgZnJpbmdpbGxhIGVuaW0gZmF1Y2lidXMgaW4uIER1aXMgYWMgcG9ydHRpdG9yIG5lcXVlLCBhYyB1bGxhbWNvcnBlciBleC4gTW9yYmkgc2VkIHZlbmVuYXRpcyBhdWd1ZS4gU2VkIHF1aXMgaWFjdWxpcyBxdWFtLCBhYyBncmF2aWRhIG1ldHVzLiBOdWxsYSBmYWNpbGlzaS4NCg0KTmFtIGp1c3RvIG1hc3NhLCB2YXJpdXMgbHVjdHVzIHRvcnRvciBhLCB0cmlzdGlxdWUgdGluY2lkdW50IG5pYmguIE5hbSBub24gb3JuYXJlIGVzdCwgYXQgdGVtcG9yIGxpYmVyby4gRXRpYW0gbWF4aW11cyBvcmNpIGVnZXQgYWxpcXVhbSBlbGVpZmVuZC4gU3VzcGVuZGlzc2Ugb3JuYXJlIHNlbSB2aXRhZSBsZW8gdWxsYW1jb3JwZXIsIHNpdCBhbWV0IHBvcnR0aXRvciBkdWkgZmFjaWxpc2lzLiBNYWVjZW5hcyBwbGFjZXJhdCBuaXNpIG5vbiBlbmltIG1vbGVzdGllIGFjY3Vtc2FuLiBBZW5lYW4gbWFsZXN1YWRhIGp1c3RvIGF0IGxvcmVtIHByZXRpdW0gZmV1Z2lhdC4gU2VkIGJsYW5kaXQgcG9zdWVyZSBudWxsYSBhIGNvbnZhbGxpcy4gTnVuYyBhbGlxdWFtLCBtaSB2ZWwgZmF1Y2lidXMgZGFwaWJ1cywgcmlzdXMgbGVvIGFsaXF1YW0gbGFjdXMsIHNpdCBhbWV0IHNlbXBlciBkdWkgbWF1cmlzIGEgc2VtLiBFdGlhbSBwcmV0aXVtIGVsaXQgZXJhdCwgdml0YWUgYmxhbmRpdCBtZXR1cyBhbGlxdWFtIGluLiBQZWxsZW50ZXNxdWUgbm9uIG5pc2wgYXQgbWF1cmlzIHBvcnRhIHNjZWxlcmlzcXVlLiBDcmFzIHZpdGFlIG1hbGVzdWFkYSB0ZWxsdXMuDQoNCkZ1c2NlIGFjIHZlbGl0IG51bmMuIFBoYXNlbGx1cyBldSBhbGlxdWV0IGp1c3RvLiBBbGlxdWFtIGlkIGFsaXF1YW0gb2Rpby4gVml2YW11cyBzb2xsaWNpdHVkaW4gcGhhcmV0cmEgcGhhcmV0cmEuIE1vcmJpIG5lYyBibGFuZGl0IHNlbSwgcXVpcyBmZXJtZW50dW0gZXJhdC4gUGVsbGVudGVzcXVlIHNlZCByaXN1cyBzaXQgYW1ldCBudW5jIGVsZWlmZW5kIHRpbmNpZHVudC4gQ3VyYWJpdHVyIHNpdCBhbWV0IG1hbGVzdWFkYSBsaWJlcm8uIEluIHByZXRpdW0gcnV0cnVtIG1hdXJpcyB2aXRhZSBzdXNjaXBpdC4gTnVsbGEgdHJpc3RpcXVlIHBvc3VlcmUgZW5pbSBxdWlzIG1hdHRpcy4gVmVzdGlidWx1bSB0aW5jaWR1bnQsIHRvcnRvciBxdWlzIGVmZmljaXR1ciBjb252YWxsaXMsIG1pIG5pc2kgZmF1Y2lidXMgc2VtLCB2ZWwgY3Vyc3VzIG1hdXJpcyBsZWN0dXMgZXUgbnVuYy4gRnVzY2UgYXQgbWFsZXN1YWRhIG51bGxhLCB1dCBtYXR0aXMgZHVpLiBOdW5jIHBvcnRhIHRyaXN0aXF1ZSBsYW9yZWV0LiBBZW5lYW4gbm9uIGVzdCBhdWd1ZS4gUGhhc2VsbHVzIGNvbmd1ZSBtYXNzYSBkb2xvciwgYWMgdm9sdXRwYXQgc2FwaWVuIHZpdmVycmEgdXQuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLg0KDQpJbnRlZ2VyIGN1cnN1cyB0dXJwaXMgbm9uIGxlbyB2ZWhpY3VsYSBtb2xlc3RpZS4gQ3JhcyBwZWxsZW50ZXNxdWUgc2FnaXR0aXMgZXJvcyBldSB2dWxwdXRhdGUuIE51bGxhbSBpbiBsYWNpbmlhIGRpYW0uIEFlbmVhbiBpYWN1bGlzIHZ1bHB1dGF0ZSBpbXBlcmRpZXQuIFV0IGRpY3R1bSBhY2N1bXNhbiBzYXBpZW4sIGFjIGVnZXN0YXMgcXVhbSBhbGlxdWFtIGVnZXQuIE1hdXJpcyBtYWxlc3VhZGEgbWF1cmlzIGFjIHNjZWxlcmlzcXVlIGRhcGlidXMuIE51bmMgZXN0IGF1Z3VlLCBpbXBlcmRpZXQgc2l0IGFtZXQgdml2ZXJyYSBldSwgZGljdHVtIHF1aXMgc2FwaWVuLiBOdWxsYW0gcHJldGl1bSBub24gbGlndWxhIG5vbiBpbnRlcmR1bS4gQ3VyYWJpdHVyIHZpdGFlIGxvcmVtIHZpdGFlIG9yY2kgdWxsYW1jb3JwZXIgbHVjdHVzIG1hbGVzdWFkYSBlZ2V0IGxpZ3VsYS4gSW50ZWdlciBzYWdpdHRpcyBwb3J0dGl0b3IgZWxlaWZlbmQuIFF1aXNxdWUgY29uc2VjdGV0dXIgbWkgZXQgYXVjdG9yIGRpY3R1bS4gUGVsbGVudGVzcXVlIGF1Y3RvciBudWxsYSBtYWduYSwgbm9uIHRpbmNpZHVudCBwdXJ1cyBtYWxlc3VhZGEgZXUuIENyYXMgY29uc2VxdWF0IG5pc2wgbnVuYy4gRHVpcyBtYXhpbXVzIGF0IHJpc3VzIHNpdCBhbWV0IGx1Y3R1cy4gU2VkIHNpdCBhbWV0IGR1aSBhYyB2ZWxpdCBlZ2VzdGFzIGRpY3R1bS4gVmVzdGlidWx1bSBldSB0ZWxsdXMgdnVscHV0YXRlLCBtYXR0aXMgbnVuYyBzdXNjaXBpdCwgcG9ydGEgbmlzbC4NCg0KUGhhc2VsbHVzIGF0IHBlbGxlbnRlc3F1ZSBtYXNzYS4gVml2YW11cyBhdWN0b3IgdG9ydG9yIGxpYmVybywgZWdldCBlbGVpZmVuZCBtaSBzYWdpdHRpcyB2aXRhZS4gTnVsbGEgYXQgbWFzc2EgbmlzbC4gU3VzcGVuZGlzc2UgcG90ZW50aS4gU3VzcGVuZGlzc2UgZWxpdCBhcmN1LCB0aW5jaWR1bnQgc2VkIGludGVyZHVtIGlkLCBncmF2aWRhIGluIGxvcmVtLiBNb3JiaSBwZWxsZW50ZXNxdWUgaW4gdXJuYSBxdWlzIGJsYW5kaXQuIE1hdXJpcyBzZW1wZXIgc2VtIGRpYW0sIGV1aXNtb2QgY29uZ3VlIHJpc3VzIHNvZGFsZXMgc2VkLiBDdXJhYml0dXIgbWF4aW11cyB2aXRhZSBlcm9zIGV1IGVmZmljaXR1ci4gRG9uZWMgbGFvcmVldCB0dXJwaXMgYXVndWUsIGF0IHByZXRpdW0gZXN0IHBvc3VlcmUgc2l0IGFtZXQuIEV0aWFtIGVnZXQgbWV0dXMgZWdldCBpcHN1bSBjb21tb2RvIG1hbGVzdWFkYS4gTWF1cmlzIG1hdHRpcywgdG9ydG9yIHZlbCBwcmV0aXVtIGFsaXF1ZXQsIG1pIGxvcmVtIG9ybmFyZSB2ZWxpdCwgYSB2aXZlcnJhIGF1Z3VlIG5pc2kgbmVjIHNhcGllbi4gTWF1cmlzIHBvc3VlcmUgYWMgZW5pbSBzZWQgc2VtcGVyLiBTZWQgdmVuZW5hdGlzLCBuaXNsIHNpdCBhbWV0IHBvc3VlcmUgcnV0cnVtLCBlcm9zIG1ldHVzIHZlbmVuYXRpcyBzYXBpZW4sIG5vbiByaG9uY3VzIHNlbSBvZGlvIHF1aXMgcHVydXMuIENyYXMgc2l0IGFtZXQgc2NlbGVyaXNxdWUgdG9ydG9yLg0KDQpOdW5jIGVnZXQgZWxpdCBlbGl0LiBOdWxsYSBvcm5hcmUsIG9yY2kgbm9uIG1heGltdXMgZ3JhdmlkYSwgcXVhbSBtaSBtb2xsaXMgbnVuYywgZXUgZ3JhdmlkYSBkdWkgZGlhbSBhdCBuaWJoLiBEb25lYyB2aXRhZSBuaWJoIGxpYmVyby4gRG9uZWMgaW4gZWxlaWZlbmQgbmVxdWUuIEluIHRlbGx1cyBzYXBpZW4sIGVsZWlmZW5kIGluIGF1Z3VlIGV0LCBwZWxsZW50ZXNxdWUgZGljdHVtIGxhY3VzLiBFdGlhbSBjb25ndWUgcG9ydHRpdG9yIHNhcGllbiBlZ2V0IGVnZXN0YXMuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gRnVzY2UgZmV1Z2lhdCwgaXBzdW0gdXQgYWxpcXVldCBmcmluZ2lsbGEsIG5pYmggbWV0dXMgb3JuYXJlIGRvbG9yLCB1dCBzZW1wZXIgdXJuYSB0ZWxsdXMgbmVjIG9yY2kuIFZpdmFtdXMgZWdldCB1cm5hIHV0IG5pc2kgZGFwaWJ1cyBzb2xsaWNpdHVkaW4uIEFsaXF1YW0gbGlndWxhIGV4LCBwbGFjZXJhdCBuZWMgbmlzaSBjb252YWxsaXMsIG1hdHRpcyBzdXNjaXBpdCBudWxsYS4gRG9uZWMgY3Vyc3VzIG5lYyBzZW0gY29uc2VxdWF0IHRlbXB1cy4gQWVuZWFuIGV0IG9ybmFyZSBkb2xvciwgdmVsIGJpYmVuZHVtIG1hZ25hLiBTZWQgdGVtcG9yIHRpbmNpZHVudCBsb3JlbS4NCg0KTWFlY2VuYXMgdml0YWUgdml2ZXJyYSB0ZWxsdXMuIEludGVnZXIgaW4gZ3JhdmlkYSBudW5jLiBOdW5jIG5pc2kgcXVhbSwgZmF1Y2lidXMgZWdldCBjb252YWxsaXMgc2l0IGFtZXQsIGRpZ25pc3NpbSBzaXQgYW1ldCBlc3QuIFNlZCBwaGFyZXRyYSBwb3J0YSBjb21tb2RvLiBOdWxsYSBmYWNpbGlzaS4gRHVpcyBzZWQgdXJuYSBvcmNpLiBBbGlxdWFtIGxpYmVybyBzYXBpZW4sIGJpYmVuZHVtIHZlbCBsYWN1cyBuZWMsIGVnZXN0YXMgYmxhbmRpdCBsaWJlcm8uIFN1c3BlbmRpc3NlIGVsZWlmZW5kIGxvYm9ydGlzIG1pLCB2ZW5lbmF0aXMgZWdlc3RhcyBmZWxpcyBzb2xsaWNpdHVkaW4gbm9uLiBNb3JiaSB0aW5jaWR1bnQgYXVndWUgYXVndWUsIGlkIGltcGVyZGlldCB2ZWxpdCBpYWN1bGlzIG5lYy4gUHJhZXNlbnQgYSBtYWduYSBibGFuZGl0LCBmZXJtZW50dW0gbWF1cmlzIGFsaXF1ZXQsIHZvbHV0cGF0IG51bGxhLiBOYW0gcnV0cnVtIGFudGUgYXVjdG9yIHB1cnVzIHJ1dHJ1bSBtYXhpbXVzIHNlZCB2ZWwgbGFjdXMuIE51bGxhbSBjb25zZXF1YXQgZHVpIHJ1dHJ1bSBsdWN0dXMgc2FnaXR0aXMuIE51bmMgZmF1Y2lidXMsIG5lcXVlIHRlbXB1cyBhY2N1bXNhbiBlbGVpZmVuZCwgc2VtIG9kaW8gYWxpcXVldCB0dXJwaXMsIGNvbnNlY3RldHVyIHVsdHJpY2llcyBzZW0gbWkgaWQgbWF1cmlzLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFNlZCBmcmluZ2lsbGEgbWV0dXMgaWQgYW50ZSBhbGlxdWV0IGF1Y3Rvci4gU2VkIGV0IG5pc2wgbGFjdXMuDQoNClBoYXNlbGx1cyBtb2xlc3RpZSBuZXF1ZSBmZWxpcywgYWMgcGhhcmV0cmEgbWV0dXMgbW9sbGlzIHZpdGFlLiBRdWlzcXVlIHZ1bHB1dGF0ZSBkdWkgZWxlbWVudHVtIGVyb3MgZGljdHVtLCBsb2JvcnRpcyBsYWNpbmlhIGxlY3R1cyBjb25ndWUuIFByb2luIGVsZWlmZW5kIHRlbGx1cyBuZXF1ZSwgbm9uIGZlcm1lbnR1bSBhdWd1ZSBzb2RhbGVzIHV0LiBOYW0gbGFvcmVldCBtYXR0aXMgdHVycGlzLCBlZ2V0IGRpZ25pc3NpbSBlcm9zIHRpbmNpZHVudCBzaXQgYW1ldC4gRHVpcyBlbGl0IGV4LCBldWlzbW9kIHF1aXMgZHVpIHNlZCwgYWxpcXVldCB2aXZlcnJhIHB1cnVzLiBOdWxsYSBlZmZpY2l0dXIgbWF0dGlzIHRlbGx1cyBzaXQgYW1ldCBsYW9yZWV0LiBWZXN0aWJ1bHVtIGV0IG5lcXVlIGEgbWFnbmEgYXVjdG9yIGJsYW5kaXQgbmVjIGVnZXQgbWF1cmlzLiBTZWQgdHVycGlzIHVybmEsIG9ybmFyZSBub24gbWFnbmEgZXQsIGV1aXNtb2QgYWxpcXVldCBpcHN1bS4gU2VkIG1vbGVzdGllIGxpZ3VsYSBub24gZW5pbSBncmF2aWRhIHBvcnR0aXRvci4gUHJhZXNlbnQgdml0YWUgaGVuZHJlcml0IHVybmEuIFZlc3RpYnVsdW0gcGVsbGVudGVzcXVlIHNlbSBzaXQgYW1ldCBkaWFtIG1heGltdXMgdm9sdXRwYXQuIENyYXMgdml2ZXJyYSBlZmZpY2l0dXIgcXVhbSwgZXUgY29tbW9kbyBzYXBpZW4gY29uc2VxdWF0IGVnZXQuIEFlbmVhbiBwb3J0dGl0b3Igc2FnaXR0aXMgbGFjdXMgbm9uIHNjZWxlcmlzcXVlLg0KDQpQcmFlc2VudCB0ZW1wb3IgZWxpdCBydXRydW0gbWFsZXN1YWRhIGRhcGlidXMuIFBlbGxlbnRlc3F1ZSB0aW5jaWR1bnQgbGVjdHVzIHV0IGF1Y3RvciBydXRydW0uIE1hdXJpcyB1dCBhY2N1bXNhbiBuaXNpLCBhdCB2ZW5lbmF0aXMgbmlzbC4gU3VzcGVuZGlzc2UgdmVsIGp1c3RvIG1vbGVzdGllLCBydXRydW0gcXVhbSBzaXQgYW1ldCwgZ3JhdmlkYSBsZWN0dXMuIE5hbSBjb25zZXF1YXQgbGFjdXMgbmVjIGxpZ3VsYSBjb25kaW1lbnR1bSwgc2l0IGFtZXQgYWxpcXVhbSB0b3J0b3IgYmliZW5kdW0uIEN1cmFiaXR1ciBuZWMgdmVuZW5hdGlzIHJpc3VzLiBWaXZhbXVzIHV0IHF1YW0gaW4gZXggZmluaWJ1cyBlZmZpY2l0dXIgbm9uIHZpdGFlIGxvcmVtLiBTZWQgZWxlaWZlbmQgdHVycGlzIGFjIHB1cnVzIGxhb3JlZXQgaW1wZXJkaWV0Lg0KDQpJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuIFNlZCBleCB0b3J0b3IsIGVnZXN0YXMgbmVjIGF1Y3RvciBzaXQgYW1ldCwgbGFvcmVldCB0ZW1wb3IgdXJuYS4gVXQgZXUgbnVsbGEgZXQgdXJuYSBsYWNpbmlhIG1vbGVzdGllIHZpdGFlIGV1IG1hdXJpcy4gTnVsbGFtIGZhdWNpYnVzIG1heGltdXMgbmVxdWUgYWMgdHJpc3RpcXVlLiBOYW0gcXVpcyBmYWNpbGlzaXMgbWksIHF1aXMgYXVjdG9yIGVuaW0uIE51bmMgYWxpcXVldCBtaSBtaSwgaW4gbW9sbGlzIGRvbG9yIHVsdHJpY2llcyBzaXQgYW1ldC4gU2VkIHZlbCBzY2VsZXJpc3F1ZSBhbnRlLCBxdWlzIGVmZmljaXR1ciBtYXNzYS4gRG9uZWMgYSB0ZW1wb3IganVzdG8uIE51bGxhIGZhY2lsaXNpLg0KDQpDcmFzIHBlbGxlbnRlc3F1ZSBlbmltIGEgcXVhbSBkYXBpYnVzLCBzZWQgdGluY2lkdW50IGRvbG9yIGFsaXF1ZXQuIFByYWVzZW50IGV1IG5lcXVlIG51bmMuIFByb2luIGxvYm9ydGlzIHZlbmVuYXRpcyBjb252YWxsaXMuIE51bGxhbSB0ZW1wdXMgbmliaCBlbGVtZW50dW0gbWFnbmEgZmF1Y2lidXMgZGljdHVtLiBJbiBmaW5pYnVzIGhlbmRyZXJpdCBtYWxlc3VhZGEuIE1vcmJpIGludGVyZHVtIGVnZXN0YXMgbGliZXJvIHZlbCBzYWdpdHRpcy4gRG9uZWMgY29uc2VxdWF0IGVzdCBqdXN0bywgZXQgZGljdHVtIG5pYmggc2FnaXR0aXMgdXQuIFZlc3RpYnVsdW0gdmVzdGlidWx1bSB0ZW1wdXMgYXJjdSB2aXRhZSB2ZWhpY3VsYS4NCg0KUGhhc2VsbHVzIGEgbmlzbCBtYWxlc3VhZGEsIHBoYXJldHJhIGR1aSBzaXQgYW1ldCwgdWx0cmljaWVzIGVyb3MuIFNlZCBhbGlxdWFtIGVsaXQgcXVpcyBlbGl0IHBvcnR0aXRvciwgdml0YWUgdGVtcG9yIG9yY2kgY29tbW9kby4gTmFtIHNlbXBlciBwbGFjZXJhdCBpcHN1bSwgcXVpcyBpbnRlcmR1bSBleCB0cmlzdGlxdWUgZWdldC4gUHJvaW4gdmVoaWN1bGEgZG9sb3IgZWdldCBkaWFtIGVmZmljaXR1ciBtYWxlc3VhZGEuIFNlZCBsb2JvcnRpcywgdHVycGlzIGVnZXQgZGlnbmlzc2ltIG1hbGVzdWFkYSwgZmVsaXMgbmVxdWUgcG9zdWVyZSBqdXN0bywgYWMgc2FnaXR0aXMgZXN0IGVyb3MgaWQgdXJuYS4gUXVpc3F1ZSBtYXR0aXMgc2VtIGlkIGVuaW0gcnV0cnVtLCBtYXhpbXVzIGxhb3JlZXQgbGFjdXMgcG9ydHRpdG9yLiBNYWVjZW5hcyB1dCBkaWFtIGFjIGR1aSBpbnRlcmR1bSBzYWdpdHRpcyBldCBhdCBsZWN0dXMuIFN1c3BlbmRpc3NlIGNvbnNlcXVhdCBsYWN1cyBpbiBudW5jIGZhY2lsaXNpcywgZXQgcmhvbmN1cyB0ZWxsdXMgcGVsbGVudGVzcXVlLg0KDQpGdXNjZSB0aW5jaWR1bnQgZGljdHVtIHRlbXBvci4gTWF1cmlzIG5lYyB0ZWxsdXMgcG9zdWVyZSBvZGlvIGhlbmRyZXJpdCBzb2RhbGVzLiBDcmFzIHNpdCBhbWV0IGRhcGlidXMgdmVsaXQuIENyYXMgcmlzdXMgdHVycGlzLCB2ZWhpY3VsYSBzZWQgbG9ib3J0aXMgbm9uLCB2b2x1dHBhdCB1dCBsZW8uIEludGVnZXIgYXQgZWZmaWNpdHVyIHJpc3VzLCBuZWMgdm9sdXRwYXQgdHVycGlzLiBQaGFzZWxsdXMgaW4gYXJjdSBzZWQgbnVuYyB2YXJpdXMgZWxlaWZlbmQgdXQgbmVjIGR1aS4gRG9uZWMgcGhhcmV0cmEgYXJjdSBlZ2V0IGR1aSBjb25zZWN0ZXR1ciwgZXQgc2VtcGVyIGVsaXQgcnV0cnVtLiBJbnRlZ2VyIHF1aXMgb3JuYXJlIG5pc2wsIGV0IHNjZWxlcmlzcXVlIGVuaW0uIEluIGxpYmVybyBsaWd1bGEsIHBvcnR0aXRvciBub24gZW5pbSBhLCBzY2VsZXJpc3F1ZSBtb2xlc3RpZSBuaWJoLg0KDQpTZWQgdHJpc3RpcXVlIGF1Y3RvciB0ZWxsdXMgaWQgZmFjaWxpc2lzLiBRdWlzcXVlIGxhb3JlZXQgYXVjdG9yIG1hc3NhIHV0IHZlbmVuYXRpcy4gU2VkIGVsZW1lbnR1bSBxdWlzIG5lcXVlIG5vbiBhY2N1bXNhbi4gU3VzcGVuZGlzc2UgZXJvcyBqdXN0bywgdGVtcHVzIGRhcGlidXMgZmFjaWxpc2lzIGVnZXQsIHZlaGljdWxhIGV1IG1hZ25hLiBDcmFzIHNvZGFsZXMgbWF1cmlzIGFjIHRpbmNpZHVudCBwZWxsZW50ZXNxdWUuIFZlc3RpYnVsdW0gaGVuZHJlcml0IGRpY3R1bSBsZWN0dXMsIHF1aXMgdGVtcG9yIHR1cnBpcy4gTW9yYmkgb2RpbyByaXN1cywgdWxsYW1jb3JwZXIgYWMgcXVhbSB2ZWwsIG1hdHRpcyBkaWN0dW0gbWFnbmEuIFZpdmFtdXMgaW4gZHVpIGRpYW0uIE51bGxhIG5vbiB0cmlzdGlxdWUgbGVjdHVzLCBxdWlzIGlhY3VsaXMgbWFnbmEuIFNlZCB2ZWwgbmlzaSBhIGFudGUgYWxpcXVldCBhY2N1bXNhbi4gU3VzcGVuZGlzc2UgZGFwaWJ1cyBsYWN1cyByaXN1cywgYXQgdnVscHV0YXRlIHNhcGllbiBmYXVjaWJ1cyBub24uIFNlZCBjb252YWxsaXMgbnVuYyB2ZWwgcmlzdXMgbHVjdHVzIG1heGltdXMuIFByYWVzZW50IGEgbnVsbGEgdGVtcHVzLCB2YXJpdXMgZW5pbSBub24sIGFsaXF1YW0gdGVsbHVzLiBWZXN0aWJ1bHVtIG5vbiBtYXNzYSBpZCBkaWFtIGFsaXF1YW0gc3VzY2lwaXQgbm9uIG5lYyBwdXJ1cy4gVml2YW11cyBjdXJzdXMgZGljdHVtIHJpc3VzIGlkIHZ1bHB1dGF0ZS4gSW4gY29tbW9kbyBwb3J0YSB0ZWxsdXMsIHNlZCBwaGFyZXRyYSBtYXVyaXMgdmVoaWN1bGEgdmVsLg0KDQpOdWxsYSBmYWNpbGlzaS4gTmFtIGhlbmRyZXJpdCBpbnRlcmR1bSB2YXJpdXMuIE1hZWNlbmFzIGF0IGVsZW1lbnR1bSBtYWduYS4gU3VzcGVuZGlzc2UgZXQganVzdG8gYWNjdW1zYW4sIHBvc3VlcmUgbWF1cmlzIGV1LCBoZW5kcmVyaXQgbWV0dXMuIFZpdmFtdXMgYWxpcXVhbSB1bHRyaWNpZXMgcXVhbSBwb3J0YSBjb25zZXF1YXQuIFBoYXNlbGx1cyBjb21tb2RvLCBvZGlvIG5vbiB1bHRyaWNlcyB1bHRyaWNlcywgbGVjdHVzIGRpYW0gdGVtcG9yIGxhY3VzLCB2aXRhZSBsdWN0dXMgb3JjaSBpcHN1bSB2ZWwgcXVhbS4gTWF1cmlzIHV0IHN1c2NpcGl0IGxvcmVtLCBlZ2V0IGVmZmljaXR1ciBhbnRlLiBJbiBpZCBpbnRlcmR1bSBkdWksIGluIHRlbXBvciBsZW8uIFZpdmFtdXMgZXQgbmliaCB2ZWwgb2RpbyBpbXBlcmRpZXQgdmFyaXVzLiBBZW5lYW4gZmV1Z2lhdCBkb2xvciBldSBtb2xlc3RpZSBhbGlxdWV0Lg0KDQpQZWxsZW50ZXNxdWUgZGFwaWJ1cyBvZGlvIHNpdCBhbWV0IGV4IHZlc3RpYnVsdW0gYmxhbmRpdC4gQWVuZWFuIGNvbnNlcXVhdCBtYXVyaXMgc2VkIG51bGxhIGx1Y3R1cyB2ZW5lbmF0aXMuIFN1c3BlbmRpc3NlIHBvcnR0aXRvciwgbG9yZW0gdmVsIHNhZ2l0dGlzIHZlaGljdWxhLCBmZWxpcyBuaXNsIHBvc3VlcmUgZXJvcywgdXQgZWZmaWNpdHVyIGVzdCBqdXN0byBxdWlzIGxhY3VzLiBEb25lYyBjb252YWxsaXMgbmlzaSBhYyB0cmlzdGlxdWUgZmVybWVudHVtLiBOdWxsYW0gZGljdHVtIGNvbW1vZG8gY29uc2VjdGV0dXIuIEZ1c2NlIHF1aXMgdG9ydG9yIHNlZCBudW5jIHBlbGxlbnRlc3F1ZSBoZW5kcmVyaXQuIFV0IGF1Y3RvciBzY2VsZXJpc3F1ZSBsZW8gYXQgZWdlc3Rhcy4gUGVsbGVudGVzcXVlIG5vbiBwdXJ1cyBzZW0uIFV0IHRlbXBvciBzY2VsZXJpc3F1ZSB0dXJwaXMsIGNvbmRpbWVudHVtIHZlbmVuYXRpcyBuaXNpIHVsdHJpY2llcyBldS4gUGhhc2VsbHVzIHV0IGVyYXQgaWQgbWV0dXMgdGVtcHVzIGNvbnZhbGxpcyBzZWQgbm9uIGVsaXQuIFBlbGxlbnRlc3F1ZSB2b2x1dHBhdCBkdWkgaXBzdW0sIG5vbiBjb252YWxsaXMgcmlzdXMgY29uc2VxdWF0IGV0LiBOdWxsYW0gdmVoaWN1bGEgcG9ydGEgbWV0dXMsIHNpdCBhbWV0IGNvbmd1ZSBleCBmYXVjaWJ1cyBwdWx2aW5hci4gVml2YW11cyBzZWQgdWx0cmljaWVzIGxpYmVyby4gUHJhZXNlbnQgdmVuZW5hdGlzIGFjY3Vtc2FuIGFudGUgZXQgaW50ZXJkdW0uDQoNCk1hZWNlbmFzIHZpdGFlIGVuaW0gZXQgYXVndWUgdmVzdGlidWx1bSB2ZWhpY3VsYS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIFF1aXNxdWUgZXQgbGlndWxhIG5vbiBtYXNzYSBlbGVtZW50dW0gdnVscHV0YXRlLiBJbnRlZ2VyIHNlZCBlcm9zIHVsdHJpY2VzIG9kaW8gZGlnbmlzc2ltIGRpZ25pc3NpbSBpZCBuZWMgZWxpdC4gU2VkIHBvc3VlcmUsIG1ldHVzIGF0IHNhZ2l0dGlzIHNlbXBlciwgZG9sb3IgYXVndWUgdWx0cmljaWVzIGF1Z3VlLCB2ZWwgY29uZ3VlIG1hc3NhIGxvcmVtIHBvc3VlcmUgZW5pbS4gU2VkIGRpZ25pc3NpbSBpbiB0dXJwaXMgc3VzY2lwaXQgc29sbGljaXR1ZGluLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRXRpYW0gbWF1cmlzIGZlbGlzLCBsdWN0dXMgbmVjIGRpYW0gdmVsLCBmYWNpbGlzaXMgdWx0cmljaWVzIGxhY3VzLiBBZW5lYW4gcHVsdmluYXIgcHVydXMgdml0YWUgYXJjdSBncmF2aWRhIHNlbXBlci4gUGhhc2VsbHVzIG1vbGxpcywgZHVpIGV0IG1hbGVzdWFkYSBlZmZpY2l0dXIsIG1pIHRlbGx1cyB0ZW1wb3IgZHVpLCBub24gc2VtcGVyIG51bmMgZG9sb3IgbmVjIHRlbGx1cy4gTnVsbGFtIGdyYXZpZGEgZmF1Y2lidXMgbnVuYywgaW4gdmVoaWN1bGEgbWF1cmlzIHJ1dHJ1bSBpZC4NCg0KU3VzcGVuZGlzc2UgcHJldGl1bSBsZWN0dXMgdXQgbWF1cmlzIGZhdWNpYnVzIGVsZW1lbnR1bS4gQWVuZWFuIHRlbXB1cyBtYXNzYSBpbiBzZW0gbHVjdHVzLCBhdCBjb21tb2RvIGp1c3RvIGx1Y3R1cy4gUXVpc3F1ZSB0aW5jaWR1bnQgbmlzaSBzaXQgYW1ldCBkYXBpYnVzIG1hbGVzdWFkYS4gTmFtIG1hc3NhIGRvbG9yLCBlbGVpZmVuZCBhIGRpZ25pc3NpbSBzaXQgYW1ldCwgcGxhY2VyYXQgZWdldCBlc3QuIFN1c3BlbmRpc3NlIG9kaW8gbmlzaSwgbHVjdHVzIGFsaXF1ZXQgZmV1Z2lhdCB1dCwgdmVoaWN1bGEgZWdldCBtZXR1cy4gTmFtIGVsZW1lbnR1bSBzaXQgYW1ldCBtaSBpbiB2ZWhpY3VsYS4gRnVzY2UgdHJpc3RpcXVlIG51bmMgZXUgZGFwaWJ1cyBzYWdpdHRpcy4gQWVuZWFuIG5lYyBoZW5kcmVyaXQgdHVycGlzLg0KDQpQZWxsZW50ZXNxdWUgcXVhbSBuZXF1ZSwgcnV0cnVtIGEgc2FnaXR0aXMgYSwgYWNjdW1zYW4gaWQgbmlzaS4gSW4gYWMgZWxlaWZlbmQgc2VtLiBQcm9pbiBlbGl0IHR1cnBpcywgYWxpcXVhbSBuZWMgZW5pbSBzaXQgYW1ldCwgdmVoaWN1bGEgZWxlbWVudHVtIHJpc3VzLiBTZWQgdnVscHV0YXRlIGVnZXQgdmVsaXQgdmVsIHBoYXJldHJhLiBQcm9pbiBsb2JvcnRpcyB2dWxwdXRhdGUgbWF1cmlzIHZpdGFlIGRhcGlidXMuIEV0aWFtIHBsYWNlcmF0IHRlbGx1cyBvcmNpLCBldSBjb25zZXF1YXQgbWkgZWxlaWZlbmQgZXUuIERvbmVjIGZhY2lsaXNpcyBhbnRlIHV0IGVsaXQgbG9ib3J0aXMsIG1hbGVzdWFkYSBibGFuZGl0IGlwc3VtIHBsYWNlcmF0LiBBZW5lYW4gbWFzc2EgbGVjdHVzLCB2ZWhpY3VsYSBpZCB1cm5hIHF1aXMsIGNvbmRpbWVudHVtIGxvYm9ydGlzIHZlbGl0LiBNYXVyaXMgc3VzY2lwaXQgZXVpc21vZCBlbmltLiBQaGFzZWxsdXMgY3Vyc3VzIGlhY3VsaXMgbmlzbCBxdWlzIGJsYW5kaXQuIE51bmMgaWQgYW50ZSBldSBxdWFtIG9ybmFyZSBncmF2aWRhLg0KDQpGdXNjZSBzYXBpZW4gcHVydXMsIHByZXRpdW0gc2l0IGFtZXQgcmlzdXMgaWQsIHZpdmVycmEgZWZmaWNpdHVyIGVyYXQuIFNlZCBmaW5pYnVzIGRvbG9yIGF0IGVuaW0gZWdlc3RhcyBwcmV0aXVtLiBDcmFzIHV0IGN1cnN1cyBlcmF0LiBEb25lYyBhIHRyaXN0aXF1ZSByaXN1cy4gU3VzcGVuZGlzc2UgaW4gZXggcGxhY2VyYXQsIGN1cnN1cyBpcHN1bSBldCwgaGVuZHJlcml0IHRvcnRvci4gU2VkIG1pIG5pc2wsIHJ1dHJ1bSBpZCBsaWJlcm8gc2l0IGFtZXQsIHBvcnR0aXRvciBzYWdpdHRpcyByaXN1cy4gUHJvaW4gc2l0IGFtZXQgdWxsYW1jb3JwZXIgZXN0Lg0KDQpOdWxsYSBzY2VsZXJpc3F1ZSB0ZWxsdXMgdmVuZW5hdGlzIHBoYXJldHJhIHZlbmVuYXRpcy4gRnVzY2UgbWF0dGlzIGZhdWNpYnVzIGZpbmlidXMuIEN1cmFiaXR1ciBlZ2V0IGNvbW1vZG8gbWFzc2EsIG5lYyB2ZW5lbmF0aXMgcXVhbS4gUGVsbGVudGVzcXVlIGluIHJpc3VzIGluIHB1cnVzIGNvbmd1ZSBsb2JvcnRpcy4gTnVuYyBjdXJzdXMgZGlhbSB1dCBtaSBpbnRlcmR1bSwgcXVpcyB2b2x1dHBhdCBsaWJlcm8gdnVscHV0YXRlLiBTdXNwZW5kaXNzZSBvZGlvIHJpc3VzLCBzY2VsZXJpc3F1ZSBpZCB2ZWxpdCBpZCwgbG9ib3J0aXMgYWxpcXVhbSB0b3J0b3IuIFNlZCBmYWNpbGlzaXMgYXVndWUgdml0YWUgZmVybWVudHVtIHN1c2NpcGl0LiBOdWxsYSB2aXRhZSBlZmZpY2l0dXIgaXBzdW0sIGVmZmljaXR1ciBjb25zZXF1YXQgYW50ZS4gQWVuZWFuIGxpYmVybyBlcm9zLCBhbGlxdWV0IHF1aXMgbW9sbGlzIGVnZXQsIHBlbGxlbnRlc3F1ZSBhdCBtYWduYS4gRHVpcyBkaWduaXNzaW0gdmVzdGlidWx1bSBkb2xvciwgcXVpcyB0ZW1wb3IgdmVsaXQgZmV1Z2lhdCB2dWxwdXRhdGUuIFZlc3RpYnVsdW0gbmliaCBxdWFtLCBzdXNjaXBpdCBlZ2V0IHNlbSB1dCwgY29uc2VjdGV0dXIgdmVzdGlidWx1bSBsaWJlcm8uDQoNClNlZCBhYyBkaWduaXNzaW0gc2FwaWVuLCBuZWMgbHVjdHVzIHF1YW0uIEN1cmFiaXR1ciByaG9uY3VzIGRpY3R1bSBkaWFtIGVnZXQgY29uZ3VlLiBGdXNjZSBibGFuZGl0IGxvYm9ydGlzIGF1Z3VlLCBldSBzb2xsaWNpdHVkaW4gdG9ydG9yIGltcGVyZGlldCBzaXQgYW1ldC4gSW50ZWdlciBldCBtYXVyaXMgcG9ydGEsIGNvbnNlcXVhdCBuaXNsIGEsIGF1Y3RvciBvZGlvLiBNYWVjZW5hcyBmYWNpbGlzaXMgcmlzdXMgZXQgZGFwaWJ1cyB2b2x1dHBhdC4gRG9uZWMgZmFjaWxpc2lzIGxlbyBmZWxpcywgZXUgbGFvcmVldCBhdWd1ZSBwb3N1ZXJlIHNpdCBhbWV0LiBEb25lYyBpbXBlcmRpZXQgbWV0dXMgdXQgY29uc2VjdGV0dXIgYWxpcXVldC4NCg0KTnVsbGEgdmVsaXQgb3JjaSwgZWdlc3RhcyBuZWMgZ3JhdmlkYSBuZWMsIHNvbGxpY2l0dWRpbiB1dCBhbnRlLiBEb25lYyB2b2x1dHBhdCBsZWN0dXMgYSBmZXVnaWF0IHZlbmVuYXRpcy4gRG9uZWMgc2VkIHVsbGFtY29ycGVyIGF1Z3VlLiBOdWxsYSB1dCBwb3J0dGl0b3IgYXVndWUuIE5hbSBkaWN0dW0sIHRlbGx1cyBhIHB1bHZpbmFyIGV1aXNtb2QsIGxpZ3VsYSBvZGlvIG1vbGxpcyBudWxsYSwgc2VkIG1vbGVzdGllIG51bGxhIG9yY2kgcXVpcyBsZW8uIE1vcmJpIHF1aXMgZWxlbWVudHVtIGFyY3UuIE51bGxhIGZhY2lsaXNpLiBEdWlzIGludGVyZHVtIGp1c3RvIGV0IG5pc2wgdGluY2lkdW50IGNvbnNlcXVhdC4gU2VkIGF0IGNvbmd1ZSBtYXNzYSwgZWdldCBmZXJtZW50dW0gZWxpdC4gTmFtIHZ1bHB1dGF0ZSBpbXBlcmRpZXQgYW50ZSBzZWQgaGVuZHJlcml0Lg0KDQpQcmFlc2VudCBzYWdpdHRpcyBwb3N1ZXJlIGxhY3VzIG5lYyBkaWduaXNzaW0uIE51bGxhbSBlZ2V0IG1ldHVzIGEgZWxpdCB2ZWhpY3VsYSBzb2RhbGVzLiBOdWxsYSBibGFuZGl0IGlwc3VtIGVyYXQsIHNpdCBhbWV0IGxhb3JlZXQgdG9ydG9yIGRhcGlidXMgc2l0IGFtZXQuIFF1aXNxdWUgZXQgdmVsaXQgc2l0IGFtZXQgYXJjdSBtYWxlc3VhZGEgb3JuYXJlIGEgbm9uIGxpYmVyby4gUHJhZXNlbnQgZXUgcmlzdXMgc2VkIHRvcnRvciBtYXR0aXMgbWF0dGlzLiBDcmFzIGVnZXQgbmliaCBlbmltLiBVdCBpcHN1bSBlbmltLCBzb2RhbGVzIGFjIHZ1bHB1dGF0ZSB1dCwgcHJldGl1bSBldSBudW5jLiBQaGFzZWxsdXMgdml0YWUgZWZmaWNpdHVyIG5pc2wuIFByYWVzZW50IHRpbmNpZHVudCBqdXN0byBtaSwgYSBjb25zZWN0ZXR1ciBzZW0gZmF1Y2lidXMgdml0YWUuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGFjIGltcGVyZGlldCBuaXNsLiBQcmFlc2VudCBjb25zZWN0ZXR1ciB2ZWwgYXVndWUgZXUgcGxhY2VyYXQuIFBlbGxlbnRlc3F1ZSBhbGlxdWV0IGFjIG9yY2kgZXQgYXVjdG9yLiBWZXN0aWJ1bHVtIGVnZXQgYXVndWUgb3JuYXJlLCBvcm5hcmUgZHVpIGV1LCB2ZW5lbmF0aXMgZmVsaXMuDQoNCkN1cmFiaXR1ciB2b2x1dHBhdCBqdXN0byBtZXR1cywgdml0YWUgaGVuZHJlcml0IGxpYmVybyBjb25ndWUgdml0YWUuIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBQaGFzZWxsdXMgZXQgYmxhbmRpdCB2ZWxpdC4gTWF1cmlzIGVsZW1lbnR1bSBwdXJ1cyBhYyBxdWFtIHRlbXBvciwgYSBvcm5hcmUgbmlzaSBtb2xlc3RpZS4gRXRpYW0gZmF1Y2lidXMsIHNhcGllbiB2aXRhZSBhbGlxdWFtIHBoYXJldHJhLCBlc3QgbGliZXJvIGRpZ25pc3NpbSB0b3J0b3IsIGV0IGFjY3Vtc2FuIHVybmEgbGFjdXMgaWQgZGlhbS4gUXVpc3F1ZSBmaW5pYnVzIHZlbGl0IGlwc3VtLCBldSB1bGxhbWNvcnBlciBuZXF1ZSBzYWdpdHRpcyBhYy4gRXRpYW0gYW50ZSBmZWxpcywgcG9ydHRpdG9yIGV0IHRlbGx1cyBpZCwgZGljdHVtIHZhcml1cyBudWxsYS4gTnVsbGFtIGV0IGxhb3JlZXQgdHVycGlzLiBTdXNwZW5kaXNzZSBlZ2V0IGZyaW5naWxsYSBtYXVyaXMuIFBlbGxlbnRlc3F1ZSB2aXRhZSBsb3JlbSBtYWduYS4gVXQgcHJldGl1bSBsZWN0dXMgdml0YWUgcnV0cnVtIGJpYmVuZHVtLiBOdWxsYW0gdml0YWUgdmFyaXVzIHNlbSwgZXUgY29tbW9kbyBsZW8uIEluIHNpdCBhbWV0IGVyb3MgZnJpbmdpbGxhLCBtYXR0aXMgbGlndWxhIHZlc3RpYnVsdW0sIGFsaXF1ZXQgdHVycGlzLiBDcmFzIG9ybmFyZSB0cmlzdGlxdWUgbGVjdHVzLCBhdCBlZ2VzdGFzIGVyYXQgcGVsbGVudGVzcXVlIGNvbmRpbWVudHVtLg0KDQpEdWlzIGNvbnZhbGxpcyBjb25zZWN0ZXR1ciBpcHN1bSBuZWMgc2VtcGVyLiBQcmFlc2VudCBwb3N1ZXJlIHNhcGllbiB1dCBtYXNzYSBmYXVjaWJ1cyBmaW5pYnVzLiBGdXNjZSBzZWQgbGFjaW5pYSBsaWd1bGEsIGluIHJ1dHJ1bSBvcmNpLiBWZXN0aWJ1bHVtIHNlbSBtYWduYSwgdGVtcHVzIGZlcm1lbnR1bSBkdWkgdXQsIGV1aXNtb2QgZmFjaWxpc2lzIGV4LiBQZWxsZW50ZXNxdWUgY29uc2VjdGV0dXIgZWxlaWZlbmQgdml2ZXJyYS4gU2VkIHBlbGxlbnRlc3F1ZSBuaWJoIHZpdGFlIGVsaXQgYWxpcXVldCwgYWMgZXVpc21vZCBlcmF0IHBlbGxlbnRlc3F1ZS4gQ3JhcyB2ZWxpdCBvcmNpLCBzb2RhbGVzIHNlZCBibGFuZGl0IHZpdGFlLCB1bHRyaWNlcyBuZWMgZW5pbS4gRnVzY2UgZWZmaWNpdHVyIGVuaW0gZXUgbWFzc2EgZmF1Y2lidXMgcHVsdmluYXIuIER1aXMgaWQganVzdG8gdmVsIGRpYW0gbW9sbGlzIGx1Y3R1cyBldCBhIGVyYXQuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gUHJhZXNlbnQgYWNjdW1zYW4gbWFnbmEgZWdldCByaXN1cyBmaW5pYnVzIGRpY3R1bS4gTWFlY2VuYXMgaW1wZXJkaWV0IGEgbWV0dXMgdmVsIGFsaXF1YW0uDQoNClNlZCBydXRydW0gc2FnaXR0aXMgZXN0LCBldSBwb3N1ZXJlIGFyY3Ugc29kYWxlcyB2ZWwuIEZ1c2NlIGVsaXQgZXgsIGZyaW5naWxsYSBldCB0ZW1wb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGVnZXQgbGVvLiBRdWlzcXVlIGNvbnZhbGxpcyBlc3QgZW5pbSwgYXQgYWxpcXVldCB0dXJwaXMgZmluaWJ1cyBldS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIFV0IGZpbmlidXMgbGVvIHZpdGFlIGludGVyZHVtIHBoYXJldHJhLiBQcm9pbiBwaGFyZXRyYSBtYWduYSBlZ2V0IGVyYXQgZ3JhdmlkYSwgZWxlaWZlbmQgcGhhcmV0cmEgYW50ZSBmaW5pYnVzLiBOdWxsYW0gdmVsaXQgbGFjdXMsIHBlbGxlbnRlc3F1ZSBlZ2V0IGVyb3MgYSwgY29uc2VjdGV0dXIgdWxsYW1jb3JwZXIgcmlzdXMuIE51bGxhIHNvZGFsZXMsIHR1cnBpcyBpbiBjb252YWxsaXMgdWx0cmljaWVzLCBuaXNsIGFyY3UgYWxpcXVldCBxdWFtLCBxdWlzIHNhZ2l0dGlzIHRlbGx1cyBsaWd1bGEgZXQgZGlhbS4gUHJvaW4gbmVjIGZlbGlzIGRhcGlidXMsIGxvYm9ydGlzIGxvcmVtIGlkLCBwZWxsZW50ZXNxdWUgb2Rpby4gUXVpc3F1ZSBwb3J0YSBsYWNpbmlhIGVyYXQgYXQgdmVuZW5hdGlzLg0KDQpEdWlzIHZvbHV0cGF0IGRvbG9yIGF0IG5pc2kgdmVzdGlidWx1bSBoZW5kcmVyaXQuIEZ1c2NlIG5vbiBtYXVyaXMgYSBuaXNsIHBoYXJldHJhIGRpZ25pc3NpbS4gQWVuZWFuIHVsdHJpY2VzIHZlbmVuYXRpcyBkYXBpYnVzLiBOYW0gZmF1Y2lidXMgdml0YWUgbWFzc2EgbmVjIGZhY2lsaXNpcy4gQWxpcXVhbSBpZCBuaXNpIGV1IHVybmEgZ3JhdmlkYSB0ZW1wdXMuIE51bGxhIGVyb3MgdGVsbHVzLCB0ZW1wdXMgc2VkIGxhb3JlZXQgbm9uLCBwb3N1ZXJlIGV1IGRpYW0uIE1vcmJpIGV1IGFjY3Vtc2FuIG51bmMsIHF1aXMgYWxpcXVldCBkb2xvci4gU2VkIHZhcml1cyB2YXJpdXMgdGVsbHVzLCBuZWMgbW9sbGlzIGxhY3VzIHVsdHJpY2llcyBlZ2V0LiBEb25lYyBwbGFjZXJhdCBibGFuZGl0IG1hdXJpcyBub24gdGVtcHVzLiBEb25lYyBjb25ndWUgbmVxdWUgZXUgcmlzdXMgb3JuYXJlLCB2aXRhZSBibGFuZGl0IHB1cnVzIHZhcml1cy4gRHVpcyB0cmlzdGlxdWUgdXJuYSBxdWlzIHBvcnRhIGVmZmljaXR1ci4gU3VzcGVuZGlzc2UgYSB0dXJwaXMgdmVsIHF1YW0gc29kYWxlcyBkaWN0dW0uIEludGVnZXIgcmhvbmN1cywgc2VtIHF1aXMgdWxsYW1jb3JwZXIgZWZmaWNpdHVyLCBlbmltIG5pc2kgdmVoaWN1bGEgdXJuYSwgcXVpcyB0cmlzdGlxdWUgZW5pbSBlbmltIHF1aXMgbGlndWxhLiBTZWQgZXQgZHVpIHF1aXMgbGVjdHVzIGxhY2luaWEgY29uc2VjdGV0dXIgc2VkIGVnZXQgbmVxdWUuIFZpdmFtdXMgZXUgaW50ZXJkdW0gb3JjaSwgdXQgdmVoaWN1bGEgbmlzaS4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLg0KDQpTdXNwZW5kaXNzZSBiaWJlbmR1bSBtb2xlc3RpZSB1bHRyaWNpZXMuIEZ1c2NlIHV0IG9ybmFyZSBhbnRlLCBldCBmYWNpbGlzaXMgZmVsaXMuIE51bmMgZmFjaWxpc2lzLCBuZXF1ZSB2ZWwgYmliZW5kdW0gc2VtcGVyLCBvcmNpIHRvcnRvciBjb252YWxsaXMganVzdG8sIGVnZXQgbGFvcmVldCBzZW0gbnVuYyBuZWMgbWFzc2EuIE51bGxhIGV1IG1ldHVzIGFsaXF1ZXQgZXJhdCBsb2JvcnRpcyBkaWduaXNzaW0uIFNlZCBtYWxlc3VhZGEgaXBzdW0gZHVpLCBhYyBhbGlxdWV0IGRvbG9yIGxvYm9ydGlzIHNpdCBhbWV0LiBQcm9pbiB1dCB2aXZlcnJhIG1pLCBldSBsb2JvcnRpcyBudW5jLiBTZWQgYWMgZGljdHVtIGVyb3MuIEV0aWFtIGEgbWV0dXMgc2NlbGVyaXNxdWUsIGxvYm9ydGlzIG5lcXVlIGF0LCBwbGFjZXJhdCBzZW0uIEN1cmFiaXR1ciB2ZXN0aWJ1bHVtIHNvbGxpY2l0dWRpbiBzZW0sIGV1IGZpbmlidXMgbGliZXJvLg0KDQpEb25lYyBhIGN1cnN1cyBudW5jLiBQcm9pbiBtb2xsaXMgbW9sbGlzIHRlbGx1cyB2ZWhpY3VsYSBjb252YWxsaXMuIENyYXMgbm9uIHVsdHJpY2llcyBzZW0uIENyYXMgYWMgZWxlaWZlbmQgbGVjdHVzLCBzaXQgYW1ldCBwdWx2aW5hciBsaWJlcm8uIE5hbSBpbnRlcmR1bSB1bGxhbWNvcnBlciBlcmF0IGEgbW9sbGlzLiBDcmFzIG1hc3NhIGxpZ3VsYSwgcGxhY2VyYXQgY29uZGltZW50dW0gdG9ydG9yIG5vbiwgdGluY2lkdW50IHVsdHJpY2llcyBxdWFtLiBOdW5jIGlkIG5pc2wgbWF1cmlzLiBQZWxsZW50ZXNxdWUgcHVsdmluYXIgcHVydXMgYWMgbHVjdHVzIHZvbHV0cGF0LiBOdWxsYSBmYWNpbGlzaS4gTnVsbGEgZmVybWVudHVtIHRlbGx1cyB0b3J0b3IsIGV0IGVnZXN0YXMgZG9sb3IgcnV0cnVtIGVmZmljaXR1ci4gUGhhc2VsbHVzIG5vbiB1cm5hIGV1IG5pc2kgcnV0cnVtIGxvYm9ydGlzLiBQaGFzZWxsdXMgdml0YWUgbmlzaSBmcmluZ2lsbGEsIHZvbHV0cGF0IGFudGUgaWQsIHBsYWNlcmF0IHR1cnBpcy4gUGhhc2VsbHVzIG1vbGVzdGllIG1vbGxpcyBtZXR1cywgdmVsIHNvbGxpY2l0dWRpbiBhdWd1ZSBzYWdpdHRpcyBldS4gQ3VyYWJpdHVyIHRlbXB1cyBjb25ndWUgbmliaC4gVmVzdGlidWx1bSB1bHRyaWNpZXMgbWkgZXUgbG9yZW0gYWxpcXVhbSBwb3J0dGl0b3IuIEludGVnZXIgYmxhbmRpdCBwb3N1ZXJlIGFudGUsIGV0IGZlcm1lbnR1bSBtaSBwZWxsZW50ZXNxdWUgdml0YWUuDQoNCkR1aXMgdHJpc3RpcXVlIGp1c3RvIGFjIHVsdHJpY2VzIHRyaXN0aXF1ZS4gQWVuZWFuIGNvbnZhbGxpcyBtYXNzYSBhdCBsYW9yZWV0IGFsaXF1YW0uIFNlZCBjb252YWxsaXMgdmVzdGlidWx1bSBlcm9zLCBhdCB2YXJpdXMgbWkgcHJldGl1bSBxdWlzLiBWZXN0aWJ1bHVtIHZ1bHB1dGF0ZSBvcmNpIGluIGFyY3UgZWdlc3RhcyBmZXVnaWF0LiBGdXNjZSBhdCBsYWN1cyBhbnRlLiBTZWQgdmVzdGlidWx1bSBiaWJlbmR1bSBmZWxpcy4gRHVpcyBhdCBncmF2aWRhIG1pLiBOdWxsYW0gc2VkIGx1Y3R1cyBpcHN1bS4gUXVpc3F1ZSBsb2JvcnRpcyBlbGl0IGV0IG5pc2wgbW9sZXN0aWUsIHV0IHZpdmVycmEgZXN0IGVsZWlmZW5kLiBQZWxsZW50ZXNxdWUgdml0YWUgZWdlc3RhcyBtaS4gQ3VyYWJpdHVyIGVsZW1lbnR1bSBwaGFyZXRyYSB0ZW1wdXMuIEZ1c2NlIGFudGUgZXN0LCBldWlzbW9kIHZlbCBtaSB1dCwgcHJldGl1bSBhY2N1bXNhbiBzZW0uIFZpdmFtdXMgcnV0cnVtIHRlbGx1cyBldCBleCBiaWJlbmR1bSBmYXVjaWJ1cy4NCg0KRXRpYW0gZmV1Z2lhdCBsb3JlbSBpZCBpcHN1bSBpbnRlcmR1bSwgY29tbW9kbyBydXRydW0gYXVndWUgYmliZW5kdW0uIE51bmMgdml2ZXJyYSBydXRydW0gYWxpcXVhbS4gUXVpc3F1ZSBhYyByaXN1cyBtYWduYS4gTWFlY2VuYXMgdmVsIGRvbG9yIGFjY3Vtc2FuLCBmaW5pYnVzIG9kaW8gcXVpcywgbG9ib3J0aXMgbWFzc2EuIFV0IGV1IGxlY3R1cyB0dXJwaXMuIEluIHVsdHJpY2llcyB1bHRyaWNpZXMgYXVndWUgc2l0IGFtZXQgdGluY2lkdW50LiBWaXZhbXVzIHZpdGFlIHNvZGFsZXMgbGVvLiBNYXVyaXMgZWdldCB2ZWxpdCBzaXQgYW1ldCByaXN1cyBzY2VsZXJpc3F1ZSBibGFuZGl0LiBEdWlzIGFjY3Vtc2FuIHNlbXBlciByaXN1cyBhdCB2dWxwdXRhdGUuIEludGVnZXIgdXQgdGVsbHVzIG5vbiBvcmNpIGZlcm1lbnR1bSBwZWxsZW50ZXNxdWUgYWMgYXQgZHVpLiBEb25lYyBzZW0gdGVsbHVzLCBwcmV0aXVtIGVnZXQgbGFjdXMgc3VzY2lwaXQsIGFsaXF1ZXQgZmluaWJ1cyBwdXJ1cy4gU2VkIGFjY3Vtc2FuIGxpYmVybyBzaXQgYW1ldCBxdWFtIG1hdHRpcyBjb25ndWUuIE1hdXJpcyBldCBsZWN0dXMgYXQgbmVxdWUgY29udmFsbGlzIGZhdWNpYnVzIHZlbCBxdWlzIG9kaW8uIFByb2luIHNlZCBuaXNpIGEgcHVydXMgcG9ydGEgbWFsZXN1YWRhIGVnZXQgc2VkIGxvcmVtLiBOdW5jIGFjY3Vtc2FuLCBvZGlvIG5lYyBhbGlxdWV0IGF1Y3RvciwganVzdG8gbWF1cmlzIGZyaW5naWxsYSBvcmNpLCBuZWMgcHVsdmluYXIganVzdG8gbmliaCBuZWMgbGVvLg0KDQpOdWxsYSBtb2xsaXMgcHVydXMgcXVpcyBuaXNsIGZhY2lsaXNpcywgZXQgZGljdHVtIGV4IHBvc3VlcmUuIFBlbGxlbnRlc3F1ZSBkaWN0dW0gbGVjdHVzIGF0IGVsZWlmZW5kIGludGVyZHVtLiBDdXJhYml0dXIgc3VzY2lwaXQgcG9ydGEgY3Vyc3VzLiBGdXNjZSBvcm5hcmUgZGlhbSBvcmNpLCBzZWQgZXVpc21vZCB0ZWxsdXMgbW9sZXN0aWUgZXUuIEFsaXF1YW0gcXVpcyBncmF2aWRhIGxlY3R1cy4gU2VkIG1heGltdXMgYSByaXN1cyBzaXQgYW1ldCBibGFuZGl0LiBEdWlzIGltcGVyZGlldCwgbGFjdXMgdXQgdGVtcHVzIHNvbGxpY2l0dWRpbiwgbmlzaSBtYXVyaXMgY29uc2VxdWF0IGxhY3VzLCB2ZXN0aWJ1bHVtIG1heGltdXMgZXJvcyBkaWFtIHZlbCBvcmNpLiBJbiBkaWduaXNzaW0gcHVydXMgc2NlbGVyaXNxdWUgdXJuYSB0aW5jaWR1bnQsIGV1IGZyaW5naWxsYSB0b3J0b3IgdGluY2lkdW50LiBVdCBzaXQgYW1ldCBhdWd1ZSBhYyBzZW0gYWNjdW1zYW4gbW9sZXN0aWUgcXVpcyBldSBleC4gVmVzdGlidWx1bSBudWxsYSBuaXNpLCBhbGlxdWFtIG5vbiBtb2xsaXMgZXQsIGZpbmlidXMgc2l0IGFtZXQgYXVndWUuIE5hbSBtYXR0aXMsIHNhcGllbiBub24gdml2ZXJyYSBtb2xsaXMsIG5pc2kgdmVsaXQgZGljdHVtIGp1c3RvLCB1dCB0aW5jaWR1bnQgZmVsaXMgbWkgZWdldCBkb2xvci4NCg0KQ3VyYWJpdHVyIGVnZXN0YXMgbWF4aW11cyBhcmN1IGluIHZlbmVuYXRpcy4gTnVsbGEgaW4gbWF1cmlzIHVybmEuIEFsaXF1YW0gZWdldCBsZWN0dXMgbm9uIHR1cnBpcyBwaGFyZXRyYSBmaW5pYnVzIGV1IHZlbCBsaWJlcm8uIE1hdXJpcyBwb3J0dGl0b3IgbG9ib3J0aXMgZXJvcyBhIGxhb3JlZXQuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gQ3JhcyBjb25zZWN0ZXR1ciBwdWx2aW5hciBldWlzbW9kLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuDQoNCkFsaXF1YW0gaW4gbnVuYyBlZ2V0IG5pc2kgcG9zdWVyZSBldWlzbW9kLiBQcm9pbiBhbnRlIHRvcnRvciwgbGFvcmVldCB2ZWwgb3JuYXJlIHNpdCBhbWV0LCBpbXBlcmRpZXQgcXVpcyB0b3J0b3IuIERvbmVjIHBvc3VlcmUgZXQgYXVndWUgbm9uIHBoYXJldHJhLiBBbGlxdWFtIHVsbGFtY29ycGVyIGlhY3VsaXMgZXJvcywgbmVjIGNvbmd1ZSBtaSByaG9uY3VzIGlkLiBTZWQgYmliZW5kdW0gbmlzbCBhYyBuaXNpIGZyaW5naWxsYSBzZW1wZXIuIFZpdmFtdXMgdml0YWUgbWFnbmEgYWMgbGVjdHVzIGF1Y3RvciBlZmZpY2l0dXIgZWdldCBsYW9yZWV0IHRvcnRvci4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4NCg0KVmVzdGlidWx1bSBjb25kaW1lbnR1bSBtb2xsaXMgZXJvcywgYSBhbGlxdWFtIHB1cnVzIGNvbmd1ZSB2aXRhZS4gRG9uZWMgbWF4aW11cyBzYXBpZW4gZXJvcywgaW4gdmVzdGlidWx1bSBzZW0gdWx0cmljZXMgYWMuIE1hdXJpcyBjb25kaW1lbnR1bSwgbGliZXJvIGFjIGV1aXNtb2QgZWxlbWVudHVtLCBhdWd1ZSBvZGlvIGFsaXF1ZXQgbGlndWxhLCB2aXRhZSBwb3J0dGl0b3IgdGVsbHVzIG1hdXJpcyB2aXRhZSB0b3J0b3IuIFZpdmFtdXMgdHJpc3RpcXVlIGV1IGVsaXQgYWMgY29uZGltZW50dW0uIFZlc3RpYnVsdW0gdWx0cmljZXMgZHVpIHZlbGl0LCBxdWlzIHVsdHJpY2VzIGZlbGlzIG1hbGVzdWFkYSBldS4gVXQganVzdG8gZHVpLCBkaWduaXNzaW0gdXQgbGFvcmVldCBhdCwgaGVuZHJlcml0IGF0IGVuaW0uIEluIHVsbGFtY29ycGVyIG1hZ25hIHZpdGFlIGNvbnZhbGxpcyBmYWNpbGlzaXMuIFByb2luIHJob25jdXMgcGhhcmV0cmEgbGFjdXMsIGFjIHZhcml1cyBlbGl0IHNlbXBlciBzZWQuDQoNClF1aXNxdWUgZGljdHVtIG1hdXJpcyBub24gbWV0dXMgZGFwaWJ1cyB1bHRyaWNpZXMuIERvbmVjIG5lcXVlIG51bmMsIGNvbnNlY3RldHVyIHV0IGVzdCBhLCBldWlzbW9kIHNhZ2l0dGlzIGVuaW0uIFN1c3BlbmRpc3NlIGRpY3R1bSwgbWV0dXMgbm9uIGxvYm9ydGlzIGFsaXF1ZXQsIG5pYmggbWF1cmlzIHVsdHJpY2VzIGxpZ3VsYSwgaWQgcGVsbGVudGVzcXVlIGRvbG9yIHRlbGx1cyBzZWQgZG9sb3IuIE51bmMgYWMgdGluY2lkdW50IG1pLiBOdWxsYSBub24gbnVuYyB2aXRhZSBvcmNpIGNvbnZhbGxpcyB1bHRyaWNpZXMuIE51bGxhbSB2aXRhZSBtb2xlc3RpZSB0b3J0b3IuIEFsaXF1YW0gc2l0IGFtZXQgbmlzbCB1dCByaXN1cyBtYWxlc3VhZGEgcHJldGl1bS4gU2VkIGVsaXQgbmliaCwgY29tbW9kbyB2ZWwgbG9yZW0gc2l0IGFtZXQsIHB1bHZpbmFyIGRhcGlidXMgZXN0LiBOdW5jIGV1IHF1YW0gc2VkIHRlbGx1cyB2aXZlcnJhIGNvbmd1ZSB1dCB1dCBudW5jLiBWaXZhbXVzIGV1IGNvbnNlcXVhdCBtZXR1cy4gQWxpcXVhbSBldCBtYXVyaXMgb2Rpby4gUGhhc2VsbHVzIHBvc3VlcmUgZmluaWJ1cyBzb2xsaWNpdHVkaW4uIEFsaXF1YW0gbG9ib3J0aXMgZWxlbWVudHVtIG5pc2kuIEluIHBoYXJldHJhIHRpbmNpZHVudCBtYXNzYSBpbiBpbXBlcmRpZXQuDQoNCk51bmMgbWF1cmlzIGR1aSwgdGVtcHVzIG5vbiBtYXNzYSBzaXQgYW1ldCwgcGxhY2VyYXQgdmVoaWN1bGEgcXVhbS4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLiBQZWxsZW50ZXNxdWUgZXUgdGVtcG9yIGRvbG9yLCBpbiBtb2xlc3RpZSBlcm9zLiBDcmFzIG51bGxhIGF1Z3VlLCBncmF2aWRhIGEgb2RpbyBhYywgZWxlbWVudHVtIG9ybmFyZSBsZWN0dXMuIERvbmVjIHNlbSBsaWd1bGEsIGZldWdpYXQgbm9uIGZlbGlzIG5vbiwgbG9ib3J0aXMgdnVscHV0YXRlIGxlby4gTmFtIGhlbmRyZXJpdCwgZWxpdCBzZWQgZmluaWJ1cyBsYWNpbmlhLCBkb2xvciBwdXJ1cyB2b2x1dHBhdCBuZXF1ZSwgc2VkIHZlc3RpYnVsdW0gaXBzdW0gbWFnbmEgYmxhbmRpdCBlbGl0LiBTZWQgbW9sZXN0aWUsIGxlbyB2ZWwgZnJpbmdpbGxhIHBvcnRhLCBhbnRlIGxhY3VzIGNvbnNlY3RldHVyIGFudGUsIGNvbmd1ZSBwdWx2aW5hciBlbmltIG1hdXJpcyBmcmluZ2lsbGEgbmlzbC4gVXQgZXVpc21vZCBpYWN1bGlzIHNhcGllbiwgbGFvcmVldCBtYXhpbXVzIGVzdCBmYWNpbGlzaXMgaW4uIEZ1c2NlIGVmZmljaXR1ciBlc3QgYWMgZG9sb3IgY3Vyc3VzLCB0ZW1wdXMgZmluaWJ1cyBuaWJoIHRpbmNpZHVudC4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIEZ1c2NlIHVsdHJpY2llcyBuaXNpIHJpc3VzLCBhYyBsdWN0dXMgbGVvIHN1c2NpcGl0IHV0Lg0KDQpTZWQgc2VkIG5pc2wgYWMgbGlndWxhIG1heGltdXMgYWxpcXVhbS4gQ3VyYWJpdHVyIGF0IHVsdHJpY2llcyBhcmN1LiBJbnRlZ2VyIGFjY3Vtc2FuIG9yY2kgc2FwaWVuLCBhYyB1bHRyaWNlcyBuaXNpIGNvbmd1ZSBpbi4gUHJhZXNlbnQgbGVvIHNlbSwgY29uZGltZW50dW0gbm9uIGdyYXZpZGEgZXQsIGNvbmRpbWVudHVtIGF0IG5lcXVlLiBJbnRlZ2VyIGNvbnZhbGxpcyB2ZWxpdCBlc3QsIHF1aXMgdGluY2lkdW50IHR1cnBpcyBtYXhpbXVzIHNlZC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIFBoYXNlbGx1cyBvcm5hcmUsIG9kaW8gZ3JhdmlkYSBwb3N1ZXJlIHBlbGxlbnRlc3F1ZSwgc2FwaWVuIGVyYXQgZGFwaWJ1cyB0ZWxsdXMsIHNlZCBtYWxlc3VhZGEgc2VtIHJpc3VzIGluIGxpZ3VsYS4gUHJhZXNlbnQgZXJvcyBudWxsYSwgc29sbGljaXR1ZGluIGV0IGZyaW5naWxsYSBldSwgdGVtcG9yIGEgbmVxdWUuIFBlbGxlbnRlc3F1ZSBpbnRlcmR1bSBhbnRlIHR1cnBpcywgY29tbW9kbyB1bGxhbWNvcnBlciB2ZWxpdCBlbGVpZmVuZCBhLiBWaXZhbXVzIGxhb3JlZXQgcXVhbSBzaXQgYW1ldCBsYW9yZWV0IHZ1bHB1dGF0ZS4gTW9yYmkgdm9sdXRwYXQgcnV0cnVtIG5pc2wgdWxsYW1jb3JwZXIgcHJldGl1bS4NCg0KTnVsbGFtIGlhY3VsaXMgZGlhbSBlZ2V0IG5lcXVlIHRyaXN0aXF1ZSB0aW5jaWR1bnQuIFNlZCBlZmZpY2l0dXIgdmFyaXVzIGF1Z3VlLCBzZWQgZmVybWVudHVtIG1pIHRpbmNpZHVudCBpbi4gUXVpc3F1ZSBudW5jIGxvcmVtLCB0ZW1wb3IgYWMgY3Vyc3VzIHF1aXMsIGZpbmlidXMgYSBsZWN0dXMuIFByYWVzZW50IGF0IG1ldHVzIGVnZXQgbGFjdXMgdmFyaXVzIHNhZ2l0dGlzLiBWaXZhbXVzIGVmZmljaXR1ciB2ZWhpY3VsYSB2ZWhpY3VsYS4gRXRpYW0gYXQgbW9sZXN0aWUgZXJvcywgcnV0cnVtIHBlbGxlbnRlc3F1ZSB0b3J0b3IuIER1aXMgZmV1Z2lhdCBuaWJoIHV0IG1pIGJsYW5kaXQsIHZpdGFlIHZlaGljdWxhIGVyYXQgc3VzY2lwaXQuIFNlZCBzaXQgYW1ldCB2aXZlcnJhIGxpYmVyby4gQWxpcXVhbSBwcmV0aXVtLCBlc3QgaWQgcHJldGl1bSB2aXZlcnJhLCBmZWxpcyBtZXR1cyBjb25ndWUgZGlhbSwgYSBtYWxlc3VhZGEgaXBzdW0gbG9yZW0gZWdldCBudWxsYS4gRG9uZWMgdml0YWUgZXggdGluY2lkdW50LCBmYWNpbGlzaXMgcHVydXMgdXQsIGVmZmljaXR1ciB0b3J0b3IuDQoNCk51bmMgb3JuYXJlIG9yY2kgYXQgdXJuYSBiaWJlbmR1bSwgZWdldCBzb2xsaWNpdHVkaW4gbmliaCB1bHRyaWNlcy4gRG9uZWMgZXVpc21vZCwgYXVndWUgaW4gc29kYWxlcyBlZ2VzdGFzLCBvcmNpIGV4IGltcGVyZGlldCBmZWxpcywgZWdldCBhY2N1bXNhbiB1cm5hIG1hZ25hIG5vbiBuaXNsLiBRdWlzcXVlIG5lYyBkdWkgc2VkIG1ldHVzIGZpbmlidXMgcG9ydHRpdG9yLiBTZWQgbmliaCBhdWd1ZSwgZWdlc3RhcyBxdWlzIHRpbmNpZHVudCB2aXRhZSwgbW9sZXN0aWUgYXQgdGVsbHVzLiBDcmFzIHBvc3VlcmUgYXJjdSBhY2N1bXNhbiwgaW50ZXJkdW0gbWV0dXMgc2VkLCB1bHRyaWNlcyBudWxsYS4gVmVzdGlidWx1bSB1dCB2b2x1dHBhdCBvZGlvLCBxdWlzIHVsdHJpY2VzIGFyY3UuIER1aXMgbm9uIG5pYmggcGxhY2VyYXQsIHJ1dHJ1bSBkdWkgc2VkLCBwb3J0YSBhbnRlLiBBZW5lYW4gbmVjIGxpZ3VsYSB2aXRhZSB2ZWxpdCBhdWN0b3IgZmF1Y2lidXMuIEluIG5vbiBmYXVjaWJ1cyBtYWduYSwgc2VkIGludGVyZHVtIGFudGUuDQoNCk51bGxhIGVzdCBmZWxpcywgYmxhbmRpdCBldSBuaWJoIHZpdGFlLCBmZXJtZW50dW0gcG9zdWVyZSBsZW8uIFN1c3BlbmRpc3NlIGV1IHRyaXN0aXF1ZSBvcmNpLiBOdWxsYW0gZXUgZGlhbSBhIGVyYXQgbWF4aW11cyBiaWJlbmR1bS4gRG9uZWMgc2l0IGFtZXQgdWxsYW1jb3JwZXIgYW50ZSwgYXQgdm9sdXRwYXQgdGVsbHVzLiBQcm9pbiBldSB0ZW1wdXMgZW5pbS4gUXVpc3F1ZSBhIG5pc2kgcmhvbmN1cyBudWxsYSBydXRydW0gc2VtcGVyIHNpdCBhbWV0IHV0IGV4LiBDdXJhYml0dXIgZWdldCBsdWN0dXMgbWkuIERvbmVjIGNvbmd1ZSBuaXNpIHR1cnBpcywgaWQgbGFvcmVldCBvcmNpIHBvcnR0aXRvciB1dC4gRXRpYW0gdmVsIGNvbnNlY3RldHVyIG1hc3NhLiBBZW5lYW4gc2VkIG1hbGVzdWFkYSBtYXVyaXMuIENyYXMgYmliZW5kdW0gYW50ZSBzYXBpZW4sIG5lYyBmcmluZ2lsbGEgbmlzaSB2dWxwdXRhdGUgcXVpcy4gQ3VyYWJpdHVyIGxvYm9ydGlzIHZlbCBtaSBhIGNvbmRpbWVudHVtLg0KDQpOdW5jIGVuaW0gbGliZXJvLCBjb25ndWUgZWdldCBqdXN0byB2ZWwsIG1heGltdXMgcG9ydGEgZXJvcy4gVXQgdmVsIG9kaW8gaW4gbWkgdGVtcHVzIGNvbnZhbGxpcy4gU2VkIGF1Y3RvciBxdWlzIGRpYW0gYSBhY2N1bXNhbi4gSW4gdml0YWUgZXggZXUgbmlzbCBldWlzbW9kIGF1Y3Rvci4gUHJvaW4gbWF1cmlzIGVuaW0sIHBvcnRhIGlkIG5lcXVlIGF0LCBlZ2VzdGFzIGNvbW1vZG8gbWV0dXMuIEZ1c2NlIHNpdCBhbWV0IGVsZWlmZW5kIG1hZ25hLCB1bHRyaWNlcyBpbXBlcmRpZXQgZG9sb3IuIFNlZCB0dXJwaXMgbmliaCwgbGFvcmVldCBldCBjdXJzdXMgdmVsLCBjb252YWxsaXMgc2VkIGVzdC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIHZlaGljdWxhIHVybmEgbmVjIG9kaW8gYWNjdW1zYW4gcGhhcmV0cmEuIENyYXMgYXQgc3VzY2lwaXQgc2VtLiBQcmFlc2VudCBjb21tb2RvIHNlbSB2ZWwgZXJvcyBtYWxlc3VhZGEgc29kYWxlcy4gQWVuZWFuIHBvcnRhIGRhcGlidXMgaXBzdW0sIG5vbiBwcmV0aXVtIG51bmMgYmliZW5kdW0gdml0YWUuIEFsaXF1YW0gYmliZW5kdW0sIGRpYW0gdmVsIGNvbnNlY3RldHVyIGFsaXF1ZXQsIGxvcmVtIG5pc2wgbWF4aW11cyBlbmltLCB2ZWwgY29udmFsbGlzIGVsaXQgbWFnbmEgaW4gcHVydXMuDQoNClBoYXNlbGx1cyB0aW5jaWR1bnQgZWdldCBudW5jIGV0IHByZXRpdW0uIE51bGxhbSBvcmNpIHR1cnBpcywgbG9ib3J0aXMgcXVpcyBuaWJoIHNlZCwgb3JuYXJlIGV1aXNtb2QgbmliaC4gTmFtIGFjIHB1cnVzIG5vbiBlcmF0IHZlaGljdWxhIHZvbHV0cGF0IGlkIHZlbCBxdWFtLiBFdGlhbSBhdWd1ZSBuZXF1ZSwgY29tbW9kbyB2aXRhZSBuaWJoIGVnZXQsIHB1bHZpbmFyIHByZXRpdW0gbWF1cmlzLiBNb3JiaSBncmF2aWRhIHNjZWxlcmlzcXVlIGFsaXF1YW0uIENyYXMgZHVpIHZlbGl0LCBmYXVjaWJ1cyBuZWMgZmVybWVudHVtIGFjLCBkYXBpYnVzIHZlaGljdWxhIGF1Z3VlLiBBbGlxdWFtIGNvbW1vZG8gc29kYWxlcyBtYXVyaXMsIG5lYyBwaGFyZXRyYSBmZWxpcyBwbGFjZXJhdCB2ZXN0aWJ1bHVtLiBEb25lYyBtb2xsaXMsIGVyYXQgdml0YWUgYWNjdW1zYW4gdGVtcHVzLCBhdWd1ZSBkdWkgdmFyaXVzIGxhY3VzLCB2ZWwgdmVuZW5hdGlzIHNhcGllbiB2ZWxpdCBpZCBleC4gTWFlY2VuYXMgdXQgZnJpbmdpbGxhIGR1aSwgdml0YWUgY29uZGltZW50dW0gZG9sb3IuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLiBQZWxsZW50ZXNxdWUgc3VzY2lwaXQgYWMgZXggZXQgaW1wZXJkaWV0LiBOdW5jIG5lYyBhcmN1IHNpdCBhbWV0IG1hdXJpcyBpYWN1bGlzIGVnZXN0YXMuIFBlbGxlbnRlc3F1ZSB1dCBlZmZpY2l0dXIgdGVsbHVzLiBNb3JiaSBoZW5kcmVyaXQgbGFvcmVldCBjb25kaW1lbnR1bS4gRnVzY2UgZXQgcGhhcmV0cmEgdXJuYSwgbmVjIGFsaXF1ZXQgZGlhbS4NCg0KTWF1cmlzIGVnZXQgdmVsaXQgZXUgdHVycGlzIHZ1bHB1dGF0ZSByaG9uY3VzLiBDcmFzIHZvbHV0cGF0IG1pIGV1IG1ldHVzIGFsaXF1ZXQsIHNpdCBhbWV0IGhlbmRyZXJpdCB1cm5hIHZvbHV0cGF0LiBFdGlhbSBmcmluZ2lsbGEgZXQgbmlzaSB2ZWwgbW9sZXN0aWUuIFBoYXNlbGx1cyB2ZWhpY3VsYSBzaXQgYW1ldCBxdWFtIGxhY2luaWEgYmliZW5kdW0uIFBlbGxlbnRlc3F1ZSBldCBvcm5hcmUgbGliZXJvLiBRdWlzcXVlIHZlbCBpYWN1bGlzIG5pYmgsIGF0IGRpY3R1bSBvcmNpLiBNb3JiaSBzdXNjaXBpdCBmZWxpcyBldCBkaWFtIG1hbGVzdWFkYSBjb25zZXF1YXQuIEFlbmVhbiBldSBlcm9zIHNlZCBlcm9zIGVmZmljaXR1ciBhbGlxdWFtIHVsbGFtY29ycGVyIGRhcGlidXMgYXJjdS4gQ3JhcyBzb2RhbGVzIGlwc3VtIHNlZCBpcHN1bSBjb252YWxsaXMgb3JuYXJlIGF0IGlkIG1pLiBDdXJhYml0dXIgbHVjdHVzIHB1cnVzIG5vbiBxdWFtIGxvYm9ydGlzIHZlbmVuYXRpcy4gU3VzcGVuZGlzc2UgZmluaWJ1cyBtb2xlc3RpZSBhcmN1IG5lYyBwb3J0dGl0b3IuIE51bGxhbSBlZ2V0IGxvYm9ydGlzIGR1aS4gUXVpc3F1ZSBwb3J0YSBldCBpcHN1bSBzZWQgc29sbGljaXR1ZGluLiBTZWQgYmliZW5kdW0gc2FwaWVuIGV1IGxhY2luaWEgZGlnbmlzc2ltLiBNb3JiaSB2YXJpdXMgZmluaWJ1cyB2b2x1dHBhdC4NCg0KTWF1cmlzIG1hbGVzdWFkYSBuaWJoIHB1bHZpbmFyIHF1YW0gaGVuZHJlcml0LCBldSBjb252YWxsaXMgc2FwaWVuIGVsZWlmZW5kLiBOdW5jIGVmZmljaXR1ciBwZWxsZW50ZXNxdWUgcmlzdXMsIHV0IHB1bHZpbmFyIGxhY3VzIGludGVyZHVtIGVnZXQuIE1vcmJpIGVnZXQgbGFjdXMgcXVhbS4gVXQgbGVvIGlwc3VtLCBlbGVpZmVuZCBlZ2V0IHZvbHV0cGF0IGluLCBlZmZpY2l0dXIgc2VkIG1hdXJpcy4gQWVuZWFuIHZvbHV0cGF0IGNvbnNlcXVhdCBtYWxlc3VhZGEuIE51bGxhbSBjdXJzdXMgbWFsZXN1YWRhIHZlaGljdWxhLiBWaXZhbXVzIHZpdGFlIG1pIHVsbGFtY29ycGVyLCB1bGxhbWNvcnBlciBuaXNpIGFjLCBzY2VsZXJpc3F1ZSBtYXVyaXMuIFV0IHF1aXMgbnVuYyBkb2xvci4gU2VkIHZlbCB2ZWhpY3VsYSBsYWN1cywgYSBwb3J0YSBxdWFtLiBOdWxsYSBxdWlzIG1pIHF1aXMgcHVydXMgbW9sZXN0aWUgY29udmFsbGlzLiBOdWxsYW0gcGVsbGVudGVzcXVlIG5pc2wgZXUgbWV0dXMgdGVtcG9yIHBsYWNlcmF0LiBEb25lYyB0ZWxsdXMgbWFzc2EsIHRlbXBvciBzaXQgYW1ldCBkdWkgcGhhcmV0cmEsIGZlcm1lbnR1bSBsYW9yZWV0IHF1YW0uDQoNCkR1aXMgYWNjdW1zYW4gbWFzc2EgdmVsIG5pc2wgYXVjdG9yLCBlbGVtZW50dW0gdmVzdGlidWx1bSB0ZWxsdXMgc29sbGljaXR1ZGluLiBNb3JiaSBpbXBlcmRpZXQgc2FnaXR0aXMgcGhhcmV0cmEuIE1vcmJpIGFjIGNvbW1vZG8gYW50ZS4gQ3VyYWJpdHVyIGFjIG5pc2wgYXQgZWxpdCBydXRydW0gcG9zdWVyZS4gTnVsbGFtIHF1YW0gZG9sb3IsIGhlbmRyZXJpdCBpZCBncmF2aWRhIGluLCBjb25ndWUgdmVzdGlidWx1bSBlcmF0LiBFdGlhbSBwb3N1ZXJlIGV4IHZlbCB2ZWxpdCBoZW5kcmVyaXQgc3VzY2lwaXQgaW4gc2l0IGFtZXQgdXJuYS4gTnVsbGEgYWxpcXVhbSBkaWduaXNzaW0gbWksIHNlZCBjb21tb2RvIHNlbSB2ZW5lbmF0aXMgc2l0IGFtZXQuIEV0aWFtIG1hbGVzdWFkYSB1bHRyaWNpZXMgcmhvbmN1cy4gQWxpcXVhbSBhYyBncmF2aWRhIG1hc3NhLCBpZCB2dWxwdXRhdGUgZG9sb3IuIERvbmVjIHBvcnR0aXRvciBwb3J0YSBwb3N1ZXJlLg0KDQpTdXNwZW5kaXNzZSBldSBlZ2VzdGFzIHJpc3VzLiBJbiBldSBmZXVnaWF0IGVyYXQsIGEgYWNjdW1zYW4gZXJvcy4gUHJvaW4gcGhhcmV0cmEgZG9sb3IgYXQgc2VtIGNvbnNlY3RldHVyIGxhb3JlZXQuIFF1aXNxdWUgaW4gZWZmaWNpdHVyIG9yY2ksIGluIGlhY3VsaXMgbmlzbC4gTnVuYyB0dXJwaXMgbmliaCwgc2NlbGVyaXNxdWUgc2l0IGFtZXQgZXN0IGF0LCBpYWN1bGlzIHBvcnR0aXRvciBsaWJlcm8uIERvbmVjIHBvcnR0aXRvciBvZGlvIGF0IGxpYmVybyB0cmlzdGlxdWUgY29uZ3VlLiBQcm9pbiBzZW1wZXIgbm9uIGRpYW0gZXQgZWxlbWVudHVtLiBJbiBlcm9zIG9kaW8sIHBvcnR0aXRvciB2aXRhZSBiaWJlbmR1bSBpbiwgYWNjdW1zYW4gZXUgdmVsaXQuIFBlbGxlbnRlc3F1ZSBzaXQgYW1ldCBmZXVnaWF0IGp1c3RvLg0KDQpEb25lYyBvcm5hcmUgY29udmFsbGlzIG1hZ25hLCBldCBmaW5pYnVzIGV4IHN1c2NpcGl0IGluLiBQcm9pbiB1bHRyaWNlcyBkaWFtIHV0IGZpbmlidXMgc2VtcGVyLiBWZXN0aWJ1bHVtIHBlbGxlbnRlc3F1ZSBuaXNsIHNpdCBhbWV0IG9yY2kgZWdlc3RhcywgZXQgbW9sZXN0aWUgbGlndWxhIGxhY2luaWEuIEluIHRvcnRvciBvZGlvLCBjb252YWxsaXMgbm9uIHZ1bHB1dGF0ZSB2ZWwsIGx1Y3R1cyBhIHRlbGx1cy4gTnVsbGFtIHNlZCBlbmltIHNpdCBhbWV0IGxhY3VzIGFsaXF1YW0gaGVuZHJlcml0LiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gQWxpcXVhbSBmZXJtZW50dW0gYSBwdXJ1cyBldSB0cmlzdGlxdWUuIER1aXMgbWF4aW11cyBudWxsYSBkb2xvciwgdXQgY29uc2VxdWF0IG1hdXJpcyBkaWN0dW0gdmVsLg0KDQpDdXJhYml0dXIgcG9ydHRpdG9yIGp1c3RvIHZlbCBlbGl0IHZvbHV0cGF0IHVsdHJpY2VzLiBBZW5lYW4gbmVjIG1pIHB1cnVzLiBOdW5jIGNvbmRpbWVudHVtIHRvcnRvciBsZW8sIGlkIGN1cnN1cyBuaXNpIGxhY2luaWEgaW4uIEludGVnZXIgZWxlaWZlbmQgZmluaWJ1cyBjb252YWxsaXMuIE1vcmJpIGV0IHZlbGl0IHNhcGllbi4gUGhhc2VsbHVzIGZldWdpYXQgcGxhY2VyYXQgcHVydXMgYXQgc3VzY2lwaXQuIER1aXMgZXVpc21vZCBwdWx2aW5hciBuZXF1ZSwgaWQgbHVjdHVzIG51bmMgc2NlbGVyaXNxdWUgdmVsLiBVdCBldSBmZXJtZW50dW0gbGlndWxhLCBub24gZnJpbmdpbGxhIG5pc2wuIFByYWVzZW50IHNpdCBhbWV0IHZlaGljdWxhIGRvbG9yLiBGdXNjZSBmZXJtZW50dW0gbWV0dXMgdmVsIGlwc3VtIGxhb3JlZXQgZmFjaWxpc2lzLg0KDQpMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWaXZhbXVzIGNvbmRpbWVudHVtIHNhZ2l0dGlzIGxhY3VzLCBsYW9yZWV0IGx1Y3R1cyBsaWd1bGEgbGFvcmVldCB1dC4gVmVzdGlidWx1bSB1bGxhbWNvcnBlciBhY2N1bXNhbiB2ZWxpdCB2ZWwgdmVoaWN1bGEuIFByb2luIHRlbXBvciBsYWN1cyBhcmN1LiBOdW5jIGF0IGVsaXQgY29uZGltZW50dW0sIHNlbXBlciBuaXNpIGV0LCBjb25kaW1lbnR1bSBtaS4gSW4gdmVuZW5hdGlzIGJsYW5kaXQgbmliaCBhdCBzb2xsaWNpdHVkaW4uIFZlc3RpYnVsdW0gZGFwaWJ1cyBtYXVyaXMgYXQgb3JjaSBtYXhpbXVzIHBlbGxlbnRlc3F1ZS4gTnVsbGFtIGlkIGVsZW1lbnR1bSBpcHN1bS4gU3VzcGVuZGlzc2UgY3Vyc3VzIGxvYm9ydGlzIHZpdmVycmEuIFByb2luIGV0IGVyYXQgYXQgbWF1cmlzIHRpbmNpZHVudCBwb3J0dGl0b3Igdml0YWUgYWMgZHVpLg0KDQpEb25lYyB2dWxwdXRhdGUgbG9yZW0gdG9ydG9yLCBuZWMgZmVybWVudHVtIG5pYmggYmliZW5kdW0gdmVsLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQcmFlc2VudCBkaWN0dW0gbHVjdHVzIG1hc3NhLCBub24gZXVpc21vZCBsYWN1cy4gUGVsbGVudGVzcXVlIGNvbmRpbWVudHVtIGRvbG9yIGVzdCwgdXQgZGFwaWJ1cyBsZWN0dXMgbHVjdHVzIGFjLiBVdCBzYWdpdHRpcyBjb21tb2RvIGFyY3UuIEludGVnZXIgbmlzaSBudWxsYSwgZmFjaWxpc2lzIHNpdCBhbWV0IG51bGxhIHF1aXMsIGVsZWlmZW5kIHN1c2NpcGl0IHB1cnVzLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIEFsaXF1YW0gZXVpc21vZCB1bHRyaWNlcyBsb3JlbSwgc2l0IGFtZXQgaW1wZXJkaWV0IGVzdCB0aW5jaWR1bnQgdmVsLiBQaGFzZWxsdXMgZGljdHVtIGp1c3RvIHNpdCBhbWV0IGxpZ3VsYSB2YXJpdXMgYWxpcXVldCBhdWN0b3IgZXQgbWV0dXMuIEZ1c2NlIHZpdGFlIHRvcnRvciBldCBuaXNpIHB1bHZpbmFyIHZlc3RpYnVsdW0gZWdldCBpbiByaXN1cy4gRG9uZWMgYW50ZSBleCwgcGxhY2VyYXQgYSBsb3JlbSBlZ2V0LCB1bHRyaWNpZXMgYmliZW5kdW0gcHVydXMuIE5hbSBzaXQgYW1ldCBuZXF1ZSBub24gYW50ZSBsYW9yZWV0IHJ1dHJ1bS4gTnVsbGFtIGFsaXF1ZXQgY29tbW9kbyB1cm5hLCBzZWQgdWxsYW1jb3JwZXIgb2RpbyBmZXVnaWF0IGlkLiBNYXVyaXMgbmlzaSBzYXBpZW4sIHBvcnR0aXRvciBpbiBjb25kaW1lbnR1bSBuZWMsIHZlbmVuYXRpcyBldSB1cm5hLiBQZWxsZW50ZXNxdWUgZmV1Z2lhdCBkaWFtIGVzdCwgYXQgcmhvbmN1cyBvcmNpIHBvcnR0aXRvciBub24uDQoNCk51bGxhIGx1Y3R1cyBzZW0gc2l0IGFtZXQgbmlzaSBjb25zZXF1YXQsIGlkIG9ybmFyZSBpcHN1bSBkaWduaXNzaW0uIFNlZCBlbGVtZW50dW0gZWxpdCBuaWJoLCBldSBjb25kaW1lbnR1bSBvcmNpIHZpdmVycmEgcXVpcy4gQWVuZWFuIHN1c2NpcGl0IHZpdGFlIGZlbGlzIG5vbiBzdXNjaXBpdC4gU3VzcGVuZGlzc2UgcGhhcmV0cmEgdHVycGlzIG5vbiBlcm9zIHNlbXBlciBkaWN0dW0uIEV0aWFtIHRpbmNpZHVudCB2ZW5lbmF0aXMgdmVuZW5hdGlzLiBQcmFlc2VudCBlZ2V0IGdyYXZpZGEgbG9yZW0sIHV0IGNvbmd1ZSBkaWFtLiBFdGlhbSBmYWNpbGlzaXMgZWxpdCBhdCBwb3J0dGl0b3IgZWdlc3Rhcy4gUHJhZXNlbnQgY29uc2VxdWF0LCB2ZWxpdCBub24gdnVscHV0YXRlIGNvbnZhbGxpcywgbGlndWxhIGRpYW0gc2FnaXR0aXMgdXJuYSwgaW4gdmVuZW5hdGlzIG5pc2kganVzdG8gdXQgbWF1cmlzLiBWZXN0aWJ1bHVtIHBvc3VlcmUgc29sbGljaXR1ZGluIG1pLCBldCB2dWxwdXRhdGUgbmlzbCBmcmluZ2lsbGEgbm9uLiBOdWxsYSBvcm5hcmUgcHJldGl1bSB2ZWxpdCBhIGV1aXNtb2QuIE51bmMgc2FnaXR0aXMgdmVuZW5hdGlzIHZlc3RpYnVsdW0uIE51bmMgc29kYWxlcyBsaWJlcm8gYSBlc3Qgb3JuYXJlIHVsdHJpY2llcy4gU2VkIHNlZCBsZW8gc2VkIG9yY2kgcGVsbGVudGVzcXVlIHVsdHJpY2VzLiBNYXVyaXMgc29sbGljaXR1ZGluLCBzZW0gcXVpcyBwbGFjZXJhdCBvcm5hcmUsIHZlbGl0IGFyY3UgY29udmFsbGlzIGxpZ3VsYSwgcHJldGl1bSBmaW5pYnVzIG5pc2wgc2FwaWVuIHZlbCBzZW0uIFZpdmFtdXMgc2l0IGFtZXQgdG9ydG9yIGlkIGxvcmVtIGNvbnNlcXVhdCBoZW5kcmVyaXQuIE51bGxhbSBhdCBkdWkgcmlzdXMuDQoNClZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgZmV1Z2lhdCBzZW1wZXIgdmVsaXQgY29uc2VxdWF0IGZhY2lsaXNpcy4gRXRpYW0gZmFjaWxpc2lzIGp1c3RvIG5vbiBpYWN1bGlzIGRpY3R1bS4gRnVzY2UgdHVycGlzIG5lcXVlLCBwaGFyZXRyYSB1dCBvZGlvIGV1LCBoZW5kcmVyaXQgcmhvbmN1cyBsYWN1cy4gTnVuYyBvcmNpIGZlbGlzLCBpbXBlcmRpZXQgdmVsIGludGVyZHVtIHF1aXMsIHBvcnRhIGV1IGlwc3VtLiBQZWxsZW50ZXNxdWUgZGljdHVtIHNlbSBsYWNpbmlhLCBhdWN0b3IgZHVpIGluLCBtYWxlc3VhZGEgbnVuYy4gTWFlY2VuYXMgc2l0IGFtZXQgbW9sbGlzIGVyb3MuIFByb2luIGZyaW5naWxsYSB2aXZlcnJhIGxpZ3VsYSwgc29sbGljaXR1ZGluIHZpdmVycmEgYW50ZSBzb2xsaWNpdHVkaW4gY29uZ3VlLiBEb25lYyBtb2xsaXMgZmVsaXMgZXUgbGliZXJvIG1hbGVzdWFkYSwgZXQgbGFjaW5pYSByaXN1cyBpbnRlcmR1bS4NCg0KRXRpYW0gdml0YWUgYWNjdW1zYW4gYXVndWUuIFV0IHVybmEgb3JjaSwgbWFsZXN1YWRhIHV0IG5pc2kgYSwgY29uZGltZW50dW0gZ3JhdmlkYSBtYWduYS4gTnVsbGEgYmliZW5kdW0gZXggaW4gdnVscHV0YXRlIHNhZ2l0dGlzLiBOdWxsYSBmYWNpbGlzaS4gTnVsbGFtIGZhdWNpYnVzIGV0IG1ldHVzIGFjIGNvbnNlcXVhdC4gUXVpc3F1ZSB0ZW1wb3IgZXJvcyB2ZWxpdCwgaWQgbWF0dGlzIG5pYmggYWxpcXVldCBhLiBBZW5lYW4gdGVtcG9yIGVsaXQgdXQgZmluaWJ1cyBhdWN0b3IuIFNlZCBhdCBpbXBlcmRpZXQgbWF1cmlzLiBWZXN0aWJ1bHVtIHBoYXJldHJhIG5vbiBsYWN1cyBzZWQgcHVsdmluYXIuIFNlZCBwZWxsZW50ZXNxdWUgbWFnbmEgYSBlcm9zIHZvbHV0cGF0IHVsbGFtY29ycGVyLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gRG9uZWMgaXBzdW0gbWksIGZldWdpYXQgaW4gZXJvcyBzZWQsIHZhcml1cyBsYWNpbmlhIHR1cnBpcy4gRG9uZWMgdnVscHV0YXRlIHRpbmNpZHVudCBkdWkgYWMgbGFvcmVldC4gU2VkIGluIGVyb3MgZHVpLiBQZWxsZW50ZXNxdWUgcGxhY2VyYXQgdHJpc3RpcXVlIGxpZ3VsYSBldSBmaW5pYnVzLiBQcm9pbiBuZWMgZmF1Y2lidXMgZmVsaXMsIGV1IGNvbW1vZG8gaXBzdW0uDQoNCkludGVnZXIgZXUgaGVuZHJlcml0IGRpYW0sIHNlZCBjb25zZWN0ZXR1ciBudW5jLiBBbGlxdWFtIGEgc2VtIHZpdGFlIGxlbyBmZXJtZW50dW0gZmF1Y2lidXMgcXVpcyBhdCBzZW0uIEV0aWFtIGJsYW5kaXQsIHF1YW0gcXVpcyBmZXJtZW50dW0gdmFyaXVzLCBhbnRlIHVybmEgdWx0cmljaWVzIGxlY3R1cywgdmVsIHBlbGxlbnRlc3F1ZSBsaWd1bGEgYXJjdSBuZWMgZWxpdC4gRG9uZWMgcGxhY2VyYXQgYW50ZSBpbiBlbmltIHNjZWxlcmlzcXVlIHByZXRpdW0uIERvbmVjIGV0IHJob25jdXMgZXJhdC4gQWVuZWFuIHRlbXBvciBuaXNpIHZpdGFlIGF1Z3VlIHRpbmNpZHVudCBsdWN0dXMuIE5hbSBjb25kaW1lbnR1bSBkaWN0dW0gYW50ZSwgZXQgbGFvcmVldCBuZXF1ZSBwZWxsZW50ZXNxdWUgaWQuIEN1cmFiaXR1ciBjb25zZWN0ZXR1ciBjdXJzdXMgbmVxdWUgYWxpcXVhbSBwb3J0YS4gVXQgaW50ZXJkdW0gbnVuYyBuZWMgbmliaCB2ZXN0aWJ1bHVtLCBpbiBzYWdpdHRpcyBtZXR1cyBmYWNpbGlzaXMuIFBlbGxlbnRlc3F1ZSBmZXVnaWF0IGNvbmRpbWVudHVtIG1ldHVzLiBFdGlhbSB2ZW5lbmF0aXMgcXVhbSBhdCBhbnRlIHJob25jdXMgdmVzdGlidWx1bS4gTWFlY2VuYXMgc3VzY2lwaXQgY29uZ3VlIHBlbGxlbnRlc3F1ZS4gVmVzdGlidWx1bSBzdXNjaXBpdCBzY2VsZXJpc3F1ZSBmZXJtZW50dW0uIE51bGxhIGlhY3VsaXMgcmlzdXMgYWMgdnVscHV0YXRlIHBvcnR0aXRvci4NCg0KTWF1cmlzIG5lYyBtZXR1cyB2ZWwgZG9sb3IgYmxhbmRpdCBmYXVjaWJ1cyBldCB2ZWwgbWFnbmEuIFV0IHRpbmNpZHVudCBpcHN1bSBub24gbnVuYyBkYXBpYnVzLCBzZWQgYmxhbmRpdCBtaSBjb25kaW1lbnR1bS4gUXVpc3F1ZSBwaGFyZXRyYSBpbnRlcmR1bSBxdWFtIG5lYyBmZXVnaWF0LiBTZWQgcGVsbGVudGVzcXVlIG51bGxhIGV0IHR1cnBpcyBibGFuZGl0IGludGVyZHVtLiBDdXJhYml0dXIgYXQgbWV0dXMgdml0YWUgYXVndWUgZWxlbWVudHVtIHZpdmVycmEuIFNlZCBtYXR0aXMgbG9yZW0gbm9uIGVuaW0gZmVybWVudHVtIGZpbmlidXMuIFNlZCBhdCBkdWkgaW4gbWFnbmEgZGlnbmlzc2ltIGFjY3Vtc2FuLiBQcm9pbiB0aW5jaWR1bnQgdWx0cmljaWVzIGN1cnN1cy4gTWFlY2VuYXMgdGluY2lkdW50IG1hZ25hIGF0IHVybmEgZmF1Y2lidXMgbGFjaW5pYS4NCg0KUXVpc3F1ZSB2ZW5lbmF0aXMganVzdG8gc2l0IGFtZXQgdG9ydG9yIGNvbmRpbWVudHVtLCBuZWMgdGluY2lkdW50IHRlbGx1cyB2aXZlcnJhLiBNb3JiaSByaXN1cyBpcHN1bSwgY29uc2VxdWF0IGNvbnZhbGxpcyBtYWxlc3VhZGEgbm9uLCBmZXJtZW50dW0gbm9uIHZlbGl0LiBOdWxsYSBmYWNpbGlzaXMgb3JjaSBlZ2V0IGxpZ3VsYSBtYXR0aXMgZmVybWVudHVtLiBBbGlxdWFtIHZlbCB2ZWxpdCB1bHRyaWNpZXMsIHNvbGxpY2l0dWRpbiBuaWJoIGV1LCBjb25ndWUgdmVsaXQuIERvbmVjIG51bGxhIGxvcmVtLCBldWlzbW9kIGlkIGN1cnN1cyBhdCwgc29sbGljaXR1ZGluIGV0IGFyY3UuIFByb2luIHZpdGFlIHRpbmNpZHVudCBpcHN1bS4gVml2YW11cyBlbGVtZW50dW0gZWxlaWZlbmQganVzdG8sIHBsYWNlcmF0IGludGVyZHVtIG51bGxhIHJ1dHJ1bSBpZC4NCg0KUGhhc2VsbHVzIGZyaW5naWxsYSBsdWN0dXMgbWFnbmEsIGEgZmluaWJ1cyBqdXN0byBkYXBpYnVzIGEuIE5hbSByaXN1cyBmZWxpcywgcmhvbmN1cyBlZ2V0IGRpYW0gc2l0IGFtZXQsIGNvbmd1ZSBmYWNpbGlzaXMgbmliaC4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBQcmFlc2VudCBjb25zZXF1YXQgZXVpc21vZCBkaWFtLCBlZ2V0IHZvbHV0cGF0IG1hZ25hIGNvbnZhbGxpcyBhdC4gTWF1cmlzIHBsYWNlcmF0IHBlbGxlbnRlc3F1ZSBpbXBlcmRpZXQuIE51bGxhIHBvcnRhIHNjZWxlcmlzcXVlIGVuaW0sIGV0IHNjZWxlcmlzcXVlIG5lcXVlIGJpYmVuZHVtIGluLiBQcm9pbiBlZ2V0IHR1cnBpcyBuaXNpLiBTdXNwZW5kaXNzZSB1dCBlc3QgYSBlcmF0IGVnZXN0YXMgZWxlaWZlbmQgYXQgZXVpc21vZCBhcmN1LiBEb25lYyBhbGlxdWV0LCBuaXNpIHNlZCBmYXVjaWJ1cyBjb25kaW1lbnR1bSwgbmlzaSBtZXR1cyBkaWN0dW0gZXJvcywgbmVjIGRpZ25pc3NpbSBqdXN0byBvZGlvIGlkIG51bGxhLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gTWFlY2VuYXMgc29sbGljaXR1ZGluLCBqdXN0byBpZCBlbGVtZW50dW0gZWxlaWZlbmQsIGp1c3RvIG5lcXVlIGFsaXF1ZXQgbmliaCwgZmluaWJ1cyBtYWxlc3VhZGEgbWV0dXMgZXJhdCBlZ2V0IG5lcXVlLiBTdXNwZW5kaXNzZSBuZWMgYXVjdG9yIG9yY2kuIEFlbmVhbiBldCB2ZXN0aWJ1bHVtIG51bGxhLiBOdWxsYW0gaGVuZHJlcml0IGF1Z3VlIHRyaXN0aXF1ZSwgY29tbW9kbyBtZXR1cyBpZCwgc29kYWxlcyBsb3JlbS4gRXRpYW0gZmV1Z2lhdCBkdWkgZXN0LCB2aXRhZSBhdWN0b3IgcmlzdXMgY29udmFsbGlzIG5vbi4NCg0KTWFlY2VuYXMgdHVycGlzIGVuaW0sIGNvbnNlY3RldHVyIGVnZXQgbGVjdHVzIGV1LCBoZW5kcmVyaXQgcG9zdWVyZSBsYWN1cy4gUHJhZXNlbnQgZWZmaWNpdHVyLCBmZWxpcyBlZ2V0IGRhcGlidXMgY29uc2VjdGV0dXIsIG5pc2kgbWFzc2EgZGlnbmlzc2ltIGVuaW0sIG5lYyBzZW1wZXIgZG9sb3IgZXN0IGV1IHVybmEuIE51bGxhbSB1dCBzb2RhbGVzIGxvcmVtLiBBbGlxdWFtIGRhcGlidXMgZmF1Y2lidXMgZGlhbS4gVmVzdGlidWx1bSB2ZWwgbWFnbmEgZXQgZG9sb3IgZ3JhdmlkYSBpbXBlcmRpZXQgdXQgc2l0IGFtZXQgc2VtLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDdXJhYml0dXIgZWxlbWVudHVtIG1ldHVzIHRpbmNpZHVudCBudWxsYSBldWlzbW9kIHVsdHJpY2llcy4gRHVpcyBlbGVtZW50dW0gbmVjIG5lcXVlIGluIHBvcnR0aXRvci4gTnVsbGEgc2FnaXR0aXMgbG9yZW0gZWxpdCwgZXQgY29uc2VjdGV0dXIgYW50ZSBsYW9yZWV0IGV1LiBNYWVjZW5hcyBudWxsYSB0ZWxsdXMsIHNjZWxlcmlzcXVlIGFjIGVyYXQgc2VkLCBmZXJtZW50dW0gZGFwaWJ1cyBtZXR1cy4gRG9uZWMgdGluY2lkdW50IGZlcm1lbnR1bSBtb2xlc3RpZS4NCg0KU2VkIGNvbnNlcXVhdCBtaSBhdCBtYXhpbXVzIGZhdWNpYnVzLiBQZWxsZW50ZXNxdWUgYWxpcXVldCB0aW5jaWR1bnQgc2FwaWVuIHZlbCBhdWN0b3IuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLiBQcmFlc2VudCBhY2N1bXNhbiBudW5jIGVnZXQgbGVvIGFsaXF1YW0sIGZhY2lsaXNpcyBoZW5kcmVyaXQgdHVycGlzIGVnZXN0YXMuIE1vcmJpIGluIHVsdHJpY2llcyBtYXVyaXMsIGEgZWxlaWZlbmQgdHVycGlzLiBRdWlzcXVlIGZyaW5naWxsYSBtYXNzYSBpYWN1bGlzIHJpc3VzIHVsdHJpY2VzLCBzaXQgYW1ldCB0aW5jaWR1bnQgZHVpIHZhcml1cy4gUXVpc3F1ZSBtYXhpbXVzIHBvcnRhIHRyaXN0aXF1ZS4gUHJvaW4gdGluY2lkdW50LCB0dXJwaXMgdXQgdGVtcG9yIHByZXRpdW0sIGxlY3R1cyBpcHN1bSB1bGxhbWNvcnBlciBsZW8sIGFjIHRpbmNpZHVudCBmZWxpcyBkdWkgbm9uIGxlby4gQWVuZWFuIHBvcnRhIGF1Z3VlIGxpZ3VsYSwgbm9uIGNvbnNlcXVhdCBpcHN1bSBhbGlxdWV0IGV0LiBTdXNwZW5kaXNzZSB1dCBzdXNjaXBpdCBleC4gUGVsbGVudGVzcXVlIHZpdGFlIGxhY2luaWEgYXJjdS4gQ3VyYWJpdHVyIGVnZXQgdGluY2lkdW50IG51bGxhLCBub24gYmliZW5kdW0gbWV0dXMuIE51bGxhbSBtaSBpcHN1bSwgZWxlaWZlbmQgdml0YWUgdG9ydG9yIHB1bHZpbmFyLCBmYWNpbGlzaXMgc29sbGljaXR1ZGluIGlwc3VtLg0KDQpWZXN0aWJ1bHVtIG1vbGVzdGllIHJpc3VzIGxvcmVtLCBhdCBmZXVnaWF0IGxvcmVtIGNvbmd1ZSBzZWQuIFBoYXNlbGx1cyB1bGxhbWNvcnBlciBsYW9yZWV0IGVuaW0sIG5lYyBhbGlxdWFtIHR1cnBpcyBzY2VsZXJpc3F1ZSBldC4gRXRpYW0gZGljdHVtIG1ldHVzIGluIGVsaXQgYWxpcXVhbSBkYXBpYnVzLiBWaXZhbXVzIHZlbCBsZWN0dXMgdmVsaXQuIE5hbSBzZWQgcHVydXMgbHVjdHVzLCBjb21tb2RvIGR1aSBxdWlzLCBtYWxlc3VhZGEgZHVpLiBOdWxsYSBwb3J0dGl0b3IgYWxpcXVldCBlbGl0IHNpdCBhbWV0IHZpdmVycmEuIFByb2luIHRlbXBvciBudWxsYSB1cm5hLCBub24gYWxpcXVldCBtZXR1cyBtYXhpbXVzIHF1aXMuIEFsaXF1YW0gYWMgbGVjdHVzIG5lYyBtaSBhbGlxdWFtIHNhZ2l0dGlzLiBRdWlzcXVlIHZlbmVuYXRpcyBxdWFtIGVnZXQgbmlzbCB0ZW1wb3IsIGVnZXN0YXMgcnV0cnVtIGVyb3MgZWxlaWZlbmQuIE51bGxhbSB2ZW5lbmF0aXMgY29tbW9kbyB2ZWxpdCwgbm9uIHRlbXBvciBtYXVyaXMgZmVybWVudHVtIHV0LiBJbiBhIG1ldHVzIHF1aXMgZXJhdCBjdXJzdXMgc2FnaXR0aXMuIERvbmVjIGNvbmd1ZSBuaXNsIGluIHZpdmVycmEgZWdlc3Rhcy4NCg0KVmVzdGlidWx1bSBmYWNpbGlzaXMgbGlndWxhIG1hZ25hLCBldSBvcm5hcmUgbGVjdHVzIHZhcml1cyBldC4gTWF1cmlzIGZhY2lsaXNpcyBmYXVjaWJ1cyBxdWFtLCBxdWlzIG1vbGxpcyBlcm9zIGNvbnZhbGxpcyBub24uIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gUHJhZXNlbnQgc2l0IGFtZXQgcnV0cnVtIGVyYXQuIFN1c3BlbmRpc3NlIHBvdGVudGkuIERvbmVjIGxvcmVtIG1pLCBzYWdpdHRpcyBhIGZyaW5naWxsYSBzaXQgYW1ldCwgc2FnaXR0aXMgYmliZW5kdW0gbWF1cmlzLiBJbiBpbiBkaWFtIGV0IGxvcmVtIHJ1dHJ1bSBlbGVpZmVuZCBhIGV0IGZlbGlzLiBTZWQgYWMgbWFnbmEgcXVpcyBlbmltIGZhdWNpYnVzIGRpY3R1bS4gU3VzcGVuZGlzc2UgYmxhbmRpdCBlbmltIGV1IGV4IGxhb3JlZXQgZ3JhdmlkYS4NCg0KU3VzcGVuZGlzc2Ugc2VkIHNlbXBlciBmZWxpcy4gRXRpYW0gbWF0dGlzIG1hZ25hIG1pLCBzdXNjaXBpdCB1bGxhbWNvcnBlciB0ZWxsdXMgZXVpc21vZCBzZWQuIEFlbmVhbiBjb25ndWUgc2NlbGVyaXNxdWUgbGlndWxhIGlkIHNvZGFsZXMuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gTnVuYyBzZW0gbGVjdHVzLCBncmF2aWRhIGFjIGR1aSBub24sIHBoYXJldHJhIHBvc3VlcmUgbGVvLiBNYWVjZW5hcyBsYWN1cyBsaWJlcm8sIGZhY2lsaXNpcyBldCBlbGl0IHZpdGFlLCBjb21tb2RvIGZhY2lsaXNpcyBzZW0uIFZpdmFtdXMgaWQgbmlzbCBudWxsYS4gSW50ZWdlciBhdCBtYXhpbXVzIGR1aS4gVXQgYSB0aW5jaWR1bnQgbG9yZW0uIFZpdmFtdXMgdml0YWUgbGlndWxhIHZlbCBsYWN1cyBjdXJzdXMgY29uZGltZW50dW0uIFBoYXNlbGx1cyBxdWlzIG1hdXJpcyBsb2JvcnRpcywgZmluaWJ1cyBsb3JlbSBpbiwgdnVscHV0YXRlIGV4LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgZmF1Y2lidXMgYWxpcXVhbSBtZXR1cywgcXVpcyB2YXJpdXMgZWxpdCBwb3J0dGl0b3IgaWQuIFZpdmFtdXMgZGlnbmlzc2ltIHNvbGxpY2l0dWRpbiBzY2VsZXJpc3F1ZS4gTW9yYmkgdGluY2lkdW50LCBkb2xvciBxdWlzIHZlaGljdWxhIGNvbnNlcXVhdCwgZHVpIGRpYW0gY29uZGltZW50dW0gbnVuYywgdml0YWUgc2NlbGVyaXNxdWUgb2RpbyBsaWJlcm8gbmVjIGxpZ3VsYS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7DQoNCkN1cmFiaXR1ciBkdWkgbmlzaSwgaWFjdWxpcyBhdCBjdXJzdXMgYSwgYWxpcXVhbSBpbiBvZGlvLiBTZWQgbWF0dGlzIGVnZXQgbWF1cmlzIG5vbiBwcmV0aXVtLiBDcmFzIGZhdWNpYnVzIGVyb3MgaWQgZmluaWJ1cyB2dWxwdXRhdGUuIEN1cmFiaXR1ciBpbXBlcmRpZXQgdmFyaXVzIGN1cnN1cy4gQWxpcXVhbSB2ZWwgZmVsaXMgcXVpcyByaXN1cyBtYXR0aXMgbG9ib3J0aXMuIFZpdmFtdXMgbm9uIGxpYmVybyBhdCBkb2xvciBlbGVtZW50dW0gbWF4aW11cyBhIHNpdCBhbWV0IHF1YW0uIE51bGxhbSBxdWlzIHR1cnBpcyByaG9uY3VzLCBzYWdpdHRpcyB1cm5hIGV1LCBwZWxsZW50ZXNxdWUgZHVpLiBVdCBhdCBzZW0gZXJvcy4gQ3VyYWJpdHVyIGEgbGVjdHVzIGR1aS4gVml2YW11cyBzaXQgYW1ldCBsYWN1cyBxdWlzIG51bmMgbG9ib3J0aXMgdWx0cmljaWVzIHF1aXMgYWxpcXVldCBleC4gUHJvaW4gc2l0IGFtZXQgZXggbWFnbmEuIER1aXMgYWNjdW1zYW4gc3VzY2lwaXQgZmFjaWxpc2lzLiBBZW5lYW4gcXVpcyBlcm9zIHByZXRpdW0sIHZhcml1cyBzZW0gc2l0IGFtZXQsIHBsYWNlcmF0IGVzdC4gRnVzY2UgbGVvIGV4LCB2aXZlcnJhIHF1aXMgcXVhbSBhLCBmYXVjaWJ1cyBwb3J0dGl0b3IgaXBzdW0uIE1hZWNlbmFzIHRlbXB1cyB0dXJwaXMgYWMgZXN0IHBvcnRhIHNvbGxpY2l0dWRpbiB2aXRhZSBzaXQgYW1ldCBtZXR1cy4gRXRpYW0gbWF0dGlzIGV1aXNtb2QgbWFsZXN1YWRhLg0KDQpJbiBjb25zZXF1YXQgZHVpIG5pYmgsIHV0IHBlbGxlbnRlc3F1ZSBvZGlvIHRlbXB1cyBzZWQuIE51bGxhbSBjb25zZWN0ZXR1ciBhdWd1ZSBub24gYmxhbmRpdCBmZXJtZW50dW0uIE51bGxhbSBmaW5pYnVzIG1hc3NhIG5vbiBzZW0gc3VzY2lwaXQsIG5vbiBoZW5kcmVyaXQgdHVycGlzIHBvc3VlcmUuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gQWVuZWFuIHZpdGFlIHZlc3RpYnVsdW0gb3JjaS4gUXVpc3F1ZSBlc3QgaXBzdW0sIHZpdmVycmEgYSBsaWJlcm8gZWdldCwgdHJpc3RpcXVlIG1heGltdXMgdGVsbHVzLiBTZWQgZmluaWJ1cyBldCBwdXJ1cyBxdWlzIHByZXRpdW0uIFN1c3BlbmRpc3NlIG5vbiBtYWxlc3VhZGEgZXJhdC4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LiBTZWQgaWQgc2VtIHB1cnVzLiBEb25lYyB1dCBzb2xsaWNpdHVkaW4gbmlzbC4gSW4gZmVybWVudHVtIHV0IGVzdCB2ZWwgZmluaWJ1cy4NCg0KQ3VyYWJpdHVyIHZlbCB2aXZlcnJhIGVuaW0uIE1hdXJpcyBpbiBtaSBlZmZpY2l0dXIgZmVsaXMgc2FnaXR0aXMgbG9ib3J0aXMuIER1aXMgYWMgZmVsaXMgYSBuaWJoIGdyYXZpZGEgaGVuZHJlcml0LiBJbnRlZ2VyIGV1IHNvZGFsZXMgYXVndWUsIGEgY29tbW9kbyBzYXBpZW4uIE5hbSBzZWQgbG9yZW0gbGliZXJvLiBOYW0gY29udmFsbGlzIGVnZXN0YXMgYWxpcXVldC4gTmFtIG5lcXVlIHNlbSwgc29kYWxlcyBhdCBsdWN0dXMgc2VkLCBpYWN1bGlzIGF0IHVybmEuIFZlc3RpYnVsdW0gZWdlc3RhcyB0dXJwaXMgdXQgdnVscHV0YXRlIHRlbXBvci4gTW9yYmkgZGlhbSBlc3QsIHZ1bHB1dGF0ZSBwb3J0YSBvcmNpIHF1aXMsIHJob25jdXMgdHJpc3RpcXVlIGZlbGlzLiBFdGlhbSBkYXBpYnVzIHZlbmVuYXRpcyBtYXNzYSBldCBsYWNpbmlhLiBTdXNwZW5kaXNzZSBtb2xsaXMgbWV0dXMgaW4gZWxlaWZlbmQgdGluY2lkdW50LiBQcmFlc2VudCBmZXJtZW50dW0gZHVpIG1pLCBuZWMgdWxsYW1jb3JwZXIgbmliaCBhY2N1bXNhbiBpbi4gUGhhc2VsbHVzIGxhY3VzIGVzdCwgcGhhcmV0cmEgc2VkIG9yY2kgZXUsIHZlaGljdWxhIHNlbXBlciBudW5jLiBTZWQgbWF4aW11cywgZG9sb3IgbmVjIHVsdHJpY2llcyB2b2x1dHBhdCwgZWxpdCBzZW0gZWxlbWVudHVtIHVybmEsIGluIGNvbmRpbWVudHVtIHJpc3VzIGF1Z3VlIGFjIG1hdXJpcy4gSW4gaWQgdG9ydG9yIHZlbGl0LiBQZWxsZW50ZXNxdWUgZWdldCBmZWxpcyB0ZWxsdXMuDQoNClNlZCBkdWkgbGlndWxhLCBoZW5kcmVyaXQgZWdldCBmcmluZ2lsbGEgdmVsLCBzdXNjaXBpdCBzaXQgYW1ldCBzYXBpZW4uIENyYXMgbWF0dGlzIGVuaW0gZWdldCBsb3JlbSBncmF2aWRhIGVmZmljaXR1ciB2ZWwgZWdldCBsaWd1bGEuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLiBTZWQgbmlzbCBtYXNzYSwgaGVuZHJlcml0IGVnZXQgZnJpbmdpbGxhIHF1aXMsIGNvbnNlcXVhdCBuZWMgbGlndWxhLiBQZWxsZW50ZXNxdWUgbWF4aW11cyByaXN1cyB2aXRhZSBmZXVnaWF0IGFsaXF1ZXQuIENyYXMgdmVsIGF1Y3RvciBxdWFtLCBkaWduaXNzaW0gbG9ib3J0aXMgdmVsaXQuIE51bGxhIHBvcnR0aXRvciBlbGl0IHZpdGFlIGFudGUgZ3JhdmlkYSB1bHRyaWNlcy4gTnVsbGEgY29uZ3VlIHRvcnRvciBzZW0sIGF0IGVmZmljaXR1ciBkdWkgZWxlaWZlbmQgZXQuIFByYWVzZW50IGxhY2luaWEgdGVsbHVzIG5vbiBudWxsYSBpYWN1bGlzIHJob25jdXMuIE1hZWNlbmFzIGZyaW5naWxsYSBkaWFtIGV0IHRlbGx1cyBmcmluZ2lsbGEsIGZpbmlidXMgaWFjdWxpcyBtYWduYSBjb21tb2RvLiBNYXVyaXMgbWF4aW11cyBlc3Qgc2l0IGFtZXQgaWFjdWxpcyBwb3J0dGl0b3IuIEluIGV0IGxvcmVtIGFsaXF1ZXQsIHVsdHJpY2llcyBlcmF0IGEsIHZlaGljdWxhIGVyb3MuIFZlc3RpYnVsdW0gZmF1Y2lidXMgbGlndWxhIGRhcGlidXMgb3JjaSBtYWxlc3VhZGEsIGEgcGhhcmV0cmEgZG9sb3IgaW1wZXJkaWV0LiBJbnRlZ2VyIGlkIHRvcnRvciBudWxsYS4NCg0KQ3VyYWJpdHVyIHRpbmNpZHVudCBuaXNpIGVnZXQgbWF4aW11cyBjb25zZWN0ZXR1ci4gUGhhc2VsbHVzIGZlbGlzIGVyb3MsIG1vbGxpcyBzZWQgYWxpcXVldCBhLCBwaGFyZXRyYSBhdCBzZW0uIENyYXMgYSBmYWNpbGlzaXMgbGliZXJvLiBNYXVyaXMgZHVpIGxpZ3VsYSwgYmliZW5kdW0gcXVpcyB1bGxhbWNvcnBlciBzZWQsIGNvbmRpbWVudHVtIHNpdCBhbWV0IGVyYXQuIE5hbSB0aW5jaWR1bnQgdG9ydG9yIHRlbGx1cywgYWMgcG9ydHRpdG9yIHNhcGllbiB2YXJpdXMgbm9uLiBNb3JiaSBjb252YWxsaXMsIGF1Z3VlIGV0IHRpbmNpZHVudCBwb3J0dGl0b3IsIHVybmEganVzdG8gY29udmFsbGlzIGlwc3VtLCBzZWQgbGFvcmVldCBtaSBlbGl0IGEgcHVydXMuIEN1cmFiaXR1ciBjb21tb2RvIHZlbCBsaWd1bGEgdmVsIGZhY2lsaXNpcy4gSW50ZWdlciB2aXRhZSB2ZWhpY3VsYSBsZWN0dXMuIE51bGxhIGx1Y3R1cyBlZmZpY2l0dXIgdG9ydG9yLCB2ZWwgdGVtcG9yIG51bGxhIGN1cnN1cyBpbi4gTnVsbGEgZ3JhdmlkYSByaXN1cyBzZWQgdGVsbHVzIHRyaXN0aXF1ZSwgaWQgYWNjdW1zYW4gYXVndWUgbG9ib3J0aXMuIEludGVnZXIgcXVhbSB0ZWxsdXMsIGJpYmVuZHVtIGlkIGF1Z3VlIG5lYywgdmVuZW5hdGlzIHVsbGFtY29ycGVyIGlwc3VtLg0KDQpDdXJhYml0dXIgcHVsdmluYXIgcGVsbGVudGVzcXVlIGVuaW0sIGF0IHZhcml1cyBsaWJlcm8gbGFvcmVldCBldC4gRG9uZWMgdmVzdGlidWx1bSBzYXBpZW4gbmVjIGZlbGlzIHZlbmVuYXRpcyBjb25ndWUuIER1aXMgZWdldCB0ZWxsdXMgbWFsZXN1YWRhLCB2dWxwdXRhdGUgbWF1cmlzIG5vbiwgdmFyaXVzIG5lcXVlLiBEb25lYyB1dCByaXN1cyBhIGxpYmVybyB2ZXN0aWJ1bHVtIHBoYXJldHJhIGF0IGluIG5pYmguIE51bmMgY3Vyc3VzLCBleCBzZWQgZGlnbmlzc2ltIGNvbmRpbWVudHVtLCBtYXVyaXMgZmVsaXMgZ3JhdmlkYSBleCwgc2l0IGFtZXQgZWZmaWNpdHVyIGVyb3Mgb3JjaSBpbiBhcmN1LiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIEN1cmFiaXR1ciB2ZXN0aWJ1bHVtIGNvbnNlY3RldHVyIGRhcGlidXMuIE51bGxhIGVnZXN0YXMgZG9sb3IgZGlhbS4gUHJhZXNlbnQgZ3JhdmlkYSB2aXRhZSBuZXF1ZSBzZWQgaWFjdWxpcy4gSW4gYXQgZXN0IHNpdCBhbWV0IGFudGUgbWFsZXN1YWRhIHZvbHV0cGF0IGlkIHByZXRpdW0gbGliZXJvLg0KDQpWaXZhbXVzIGltcGVyZGlldCBzdXNjaXBpdCB0b3J0b3IgaW4gdWx0cmljaWVzLiBBZW5lYW4gYSBkb2xvciBhdCBvZGlvIHZpdmVycmEgcHVsdmluYXIuIFZlc3RpYnVsdW0gcG9ydGEgdXJuYSBub24gbnVsbGEgZmVybWVudHVtLCBub24gZnJpbmdpbGxhIGFudGUgZWxlbWVudHVtLiBDdXJhYml0dXIgaW50ZXJkdW0gbWF1cmlzIGEgbmlzbCBwbGFjZXJhdCwgYWMgY29tbW9kbyBsZWN0dXMgc2FnaXR0aXMuIEluIGZpbmlidXMgYW50ZSBuZWMgbG9yZW0gcHVsdmluYXIgY29udmFsbGlzLiBNYXVyaXMgbGFjaW5pYSwgZmVsaXMgdml0YWUgaW1wZXJkaWV0IHByZXRpdW0sIGlwc3VtIGxvcmVtIG9ybmFyZSBuaXNpLCBzZWQgdmVuZW5hdGlzIGVzdCBkdWkgbmVjIGF1Z3VlLiBWZXN0aWJ1bHVtIGEgZXN0IGNvbnZhbGxpcywgdnVscHV0YXRlIGxlY3R1cyBldCwgYWxpcXVhbSBudW5jLiBOdWxsYW0gcGVsbGVudGVzcXVlIGRpYW0gYSBudWxsYSBwb3J0YSBmZXJtZW50dW0uDQoNCkV0aWFtIHJpc3VzIGxpYmVybywgbGFjaW5pYSBhdCB0ZW1wb3Igc2l0IGFtZXQsIGlhY3VsaXMgcXVpcyBtYWduYS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW50ZWdlciBwaGFyZXRyYSBmcmluZ2lsbGEgaW1wZXJkaWV0LiBQcmFlc2VudCB2YXJpdXMgZnJpbmdpbGxhIGxpYmVybywgc2VkIGFjY3Vtc2FuIG5pYmggZGlnbmlzc2ltIGV1LiBTdXNwZW5kaXNzZSB1bHRyaWNpZXMgZGljdHVtIG5pc2wgZXQgZGlnbmlzc2ltLiBOdW5jIGVsZWlmZW5kIG51bGxhIHRlbGx1cywgYSBmZXVnaWF0IG1hc3NhIHZhcml1cyBibGFuZGl0LiBEb25lYyBvcm5hcmUgcmlzdXMgYXQgYXVndWUgZGFwaWJ1cyBiaWJlbmR1bS4NCg0KQWxpcXVhbSBjb25kaW1lbnR1bSBpZCB0dXJwaXMgdmVsIGZhdWNpYnVzLiBOYW0gbGlndWxhIG51bGxhLCByaG9uY3VzIGVnZXQgdGVtcHVzIGV0LCBwZWxsZW50ZXNxdWUgYWMgYXVndWUuIFN1c3BlbmRpc3NlIHVsdHJpY2llcyBibGFuZGl0IGFyY3UsIHF1aXMgcHJldGl1bSBkdWkgcGVsbGVudGVzcXVlIHZpdGFlLiBOdW5jIGltcGVyZGlldCBpcHN1bSBtYXVyaXMsIHV0IHBvcnR0aXRvciBmZWxpcyBydXRydW0gcXVpcy4gVmVzdGlidWx1bSBwb3J0dGl0b3IgdnVscHV0YXRlIG5pc2ksIG5vbiBlZ2VzdGFzIGVyb3MgZXVpc21vZCBzaXQgYW1ldC4gQ3VyYWJpdHVyIHF1aXMgcmhvbmN1cyBleC4gTmFtIGNvbnNlY3RldHVyIGxpYmVybyBldSB0b3J0b3Igc2FnaXR0aXMsIHF1aXMgcmhvbmN1cyBleCBlZmZpY2l0dXIuIFNlZCBzYWdpdHRpcywgbGlndWxhIGluIG1vbGxpcyBwb3N1ZXJlLCB0b3J0b3IgcXVhbSBjb25kaW1lbnR1bSB0ZWxsdXMsIGluIHZhcml1cyBlbGl0IGVzdCBpbXBlcmRpZXQgaXBzdW0uIERvbmVjIGVnZXQgYXJjdSBldSB0b3J0b3IgcG9ydGEgcG9zdWVyZS4gUHJvaW4gbm9uIGV4IGZlcm1lbnR1bSwgcG9ydGEgdG9ydG9yIGFjLCBwb3J0dGl0b3IgbmliaC4gSW50ZWdlciBzZWQgZWdlc3RhcyBsZW8sIGluIHNjZWxlcmlzcXVlIGZlbGlzLiBEdWlzIGF1Y3RvciBudWxsYSBxdWlzIHR1cnBpcyBwcmV0aXVtLCBuZWMgbGFjaW5pYSB2ZWxpdCBjb252YWxsaXMuDQoNCk1hZWNlbmFzIHV0IG5pc2wgZGljdHVtLCBwb3J0YSBuaXNpIGlkLCBiaWJlbmR1bSB0ZWxsdXMuIE51bGxhbSBpbnRlcmR1bSBtZXR1cyBlZ2V0IGN1cnN1cyBzb2xsaWNpdHVkaW4uIFN1c3BlbmRpc3NlIHJob25jdXMgc29kYWxlcyB1bGxhbWNvcnBlci4gQWxpcXVhbSBuaXNpIG9yY2ksIGRpZ25pc3NpbSBldSBsYWNpbmlhIHZlbCwgY29uc2VjdGV0dXIgZWdldCBlbmltLiBOYW0gbmVjIG1hZ25hIGp1c3RvLiBTZWQgbGFjdXMgZXJhdCwgdmFyaXVzIGV0IGVyb3MgaW4sIHZpdmVycmEgdmVoaWN1bGEgbmlzaS4gQWVuZWFuIHNpdCBhbWV0IGxpYmVybyB2ZWwgdG9ydG9yIHRlbXB1cyBpbnRlcmR1bS4gRG9uZWMgcGhhcmV0cmEgbWkgdXQgZW5pbSB2ZXN0aWJ1bHVtLCBldCB0ZW1wb3IgdGVsbHVzIGN1cnN1cy4gSW4gdmVuZW5hdGlzIHZpdGFlIHF1YW0gYXQgdGVtcG9yLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gRXRpYW0gY29uZGltZW50dW0gdmVoaWN1bGEgbWF1cmlzLiBOdW5jIHV0IHBvcnRhIGlwc3VtLiBNYXVyaXMgbWF0dGlzIG1vbGVzdGllIG1pIHNlZCBzb2RhbGVzLiBOdW5jIHNvZGFsZXMgbWF1cmlzIGV1IGFjY3Vtc2FuIHBoYXJldHJhLg0KDQpQaGFzZWxsdXMgdmVsIGxlbyBuZWMgbGlndWxhIGRpZ25pc3NpbSB2ZXN0aWJ1bHVtIHF1aXMgc2l0IGFtZXQgbmliaC4gQ3JhcyBhdWN0b3IgdmVzdGlidWx1bSBjb25ndWUuIE1hZWNlbmFzIG1hdHRpcyBwdWx2aW5hciBlcm9zLCBxdWlzIGVnZXN0YXMgZXJvcyBhdWN0b3Igc2l0IGFtZXQuIEV0aWFtIHNlZCBsYWN1cyBxdWlzIGxlY3R1cyBkaWduaXNzaW0gYWxpcXVldCBpZCB2aXRhZSBkdWkuIE51bGxhIGFjIGVsZW1lbnR1bSBsaWJlcm8uIEN1cmFiaXR1ciBhbGlxdWV0IGVzdCB2ZWwgbW9sZXN0aWUgdWx0cmljZXMuIFByb2luIHBlbGxlbnRlc3F1ZSBpYWN1bGlzIGZlbGlzIGV0IHRpbmNpZHVudC4NCg0KSW4gZXQgZXJvcyB0ZWxsdXMuIE1hZWNlbmFzIHRpbmNpZHVudCBuZXF1ZSB0ZWxsdXMsIHF1aXMgYWxpcXVhbSBsb3JlbSB2b2x1dHBhdCB2aXRhZS4gVmVzdGlidWx1bSBwb3J0dGl0b3IsIHVybmEgYWMgYmxhbmRpdCBibGFuZGl0LCBlcmF0IHNhcGllbiB2dWxwdXRhdGUgcXVhbSwgdXQgdGVtcG9yIHZlbGl0IGxlbyBxdWlzIG5pYmguIFNlZCB1bHRyaWNlcyBsZWN0dXMgdXQgdXJuYSBtYXhpbXVzIGNvbmd1ZS4gRG9uZWMgdGVtcG9yIGZlbGlzIHZlbCBhbGlxdWV0IGxvYm9ydGlzLiBQcm9pbiBzb2RhbGVzIGNvbnNlY3RldHVyIGVzdCBmYXVjaWJ1cyB0ZW1wdXMuIFZlc3RpYnVsdW0gdnVscHV0YXRlIG51bGxhIGV0IGNvbnNlY3RldHVyIHBsYWNlcmF0LiBNYWVjZW5hcyBpZCBzb2RhbGVzIHVybmEuIEluIHB1cnVzIHRvcnRvciwgbWF0dGlzIHV0IG5pc2wgaWQsIG1heGltdXMgY3Vyc3VzIGxlby4gRHVpcyBzdXNjaXBpdCBpZCBlcmF0IGluIG9ybmFyZS4gTnVsbGEgcXVpcyBjb252YWxsaXMgdG9ydG9yLCBpZCBlZmZpY2l0dXIgdGVsbHVzLiBBbGlxdWFtIGFjIHJ1dHJ1bSBudW5jLiBOdWxsYSBudWxsYSBsZWN0dXMsIG1vbGVzdGllIHNlZCBkaWN0dW0gdml2ZXJyYSwgc29sbGljaXR1ZGluIGV0IG5pc2kuIFByb2luIHBvcnR0aXRvciBzY2VsZXJpc3F1ZSBtaSBpZCBwb3J0YS4gSW4gaW50ZXJkdW0gcGVsbGVudGVzcXVlIG9yY2ksIGFjIGNvbnZhbGxpcyBwdXJ1cy4NCg0KUGVsbGVudGVzcXVlIGlhY3VsaXMgYWMgZWxpdCBhdCBzZW1wZXIuIE1vcmJpIGxhb3JlZXQgdGVsbHVzIG5lYyBuaWJoIHBvc3VlcmUgZnJpbmdpbGxhLiBJbiBmYWNpbGlzaXMgYXJjdSBldSBmZXVnaWF0IGhlbmRyZXJpdC4gUGVsbGVudGVzcXVlIGN1cnN1cyBhbnRlIGVyb3MsIGEgbWF4aW11cyBtZXR1cyBsb2JvcnRpcyBzZWQuIEluIHRlbXBvciBxdWFtIHF1aXMgdXJuYSBlZ2VzdGFzLCBhIHZ1bHB1dGF0ZSBtYXVyaXMgdGVtcHVzLiBGdXNjZSBub24gY29tbW9kbyB1cm5hLCB1dCBtb2xlc3RpZSBlcm9zLiBJbnRlZ2VyIGN1cnN1cyB2aXRhZSBuZXF1ZSB2aXRhZSB0aW5jaWR1bnQuIE1vcmJpIGV0IGF1Z3VlIGNvbnNlcXVhdCwgc29kYWxlcyByaXN1cyBpbiwgdGVtcHVzIG51bmMuIEluIGF0IG1vbGxpcyBuaXNpLiBQaGFzZWxsdXMgdGVtcG9yIGR1aSBldSBlcm9zIGF1Y3RvciwgaWQgY29uZ3VlIHRlbGx1cyB2ZXN0aWJ1bHVtLg0KDQpQaGFzZWxsdXMgZGlnbmlzc2ltIGVnZXN0YXMgbG9yZW0gc2VkIHNvZGFsZXMuIE51bGxhbSB2YXJpdXMgbnVuYyBzZWQganVzdG8gZGljdHVtLCBuZWMgY29tbW9kbyBpcHN1bSBmYWNpbGlzaXMuIFZlc3RpYnVsdW0gbWF1cmlzIG5pc2ksIGZhY2lsaXNpcyBhYyBlbGVtZW50dW0gcXVpcywgZmluaWJ1cyBldSBzZW0uIFV0IHBsYWNlcmF0IGVyb3Mgc2l0IGFtZXQgbmliaCBsdWN0dXMsIHZpdGFlIHRpbmNpZHVudCBtaSBjb252YWxsaXMuIEN1cmFiaXR1ciB1dCBsYWN1cyBmZWxpcy4gVml2YW11cyBwdWx2aW5hciBxdWlzIHJpc3VzIHZpdGFlIGFsaXF1YW0uIEludGVnZXIgZGlnbmlzc2ltIHNhcGllbiBtYXNzYSwgbmVjIGN1cnN1cyB1cm5hIGZlcm1lbnR1bSBldS4gVXQgZXQgdHJpc3RpcXVlIHNhcGllbi4gUGhhc2VsbHVzIG51bmMgYXVndWUsIGNvbW1vZG8gZmVybWVudHVtIHNlbXBlciBxdWlzLCBiaWJlbmR1bSBhIG1hZ25hLiBEdWlzIGEgc2FwaWVuIHNlZCBleCBncmF2aWRhIGltcGVyZGlldCBpbiB2aXRhZSBsZWN0dXMuIFZpdmFtdXMgdmVzdGlidWx1bSBsZWN0dXMgbGlndWxhLiBQaGFzZWxsdXMgc2FwaWVuIGVyYXQsIGltcGVyZGlldCBpbiBoZW5kcmVyaXQgc2VkLCBhbGlxdWFtIHNpdCBhbWV0IGVyYXQuIFByb2luIGZlbGlzIGF1Z3VlLCBtYXR0aXMgc2VkIHF1YW0gdml0YWUsIGN1cnN1cyB0cmlzdGlxdWUgcmlzdXMuIFByYWVzZW50IHVsbGFtY29ycGVyIGV1aXNtb2Qgc2VtIGF1Y3RvciB0aW5jaWR1bnQuIFNlZCB2dWxwdXRhdGUgc2FnaXR0aXMgZGlhbS4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0Lg0KDQpTZWQgb3JjaSBqdXN0bywgcHJldGl1bSBhYyBzY2VsZXJpc3F1ZSBuZWMsIGV1aXNtb2QgZXQgYXVndWUuIFNlZCBjb21tb2RvIG1hc3NhIHNpdCBhbWV0IG9kaW8gcG9zdWVyZSBlZmZpY2l0dXIgcXVpcyB1dCBudW5jLiBNb3JiaSBwb3N1ZXJlIGVuaW0gYW50ZSwgZWdldCBkaWduaXNzaW0gZXJhdCB2aXZlcnJhIG5lYy4gSW4gbG9ib3J0aXMgbm9uIGVuaW0gaW4gZGFwaWJ1cy4gQ3JhcyBmcmluZ2lsbGEgY3Vyc3VzIHB1cnVzIGlkIHZlaGljdWxhLiBJbiBzY2VsZXJpc3F1ZSBhdWd1ZSBldSB0cmlzdGlxdWUgY29uZ3VlLiBWZXN0aWJ1bHVtIGF0IHZlaGljdWxhIHVybmEuIERvbmVjIGEgcmhvbmN1cyBtZXR1cywgaW4gZGljdHVtIHRlbGx1cy4gTWF1cmlzIGFjIHNhZ2l0dGlzIG9kaW8uIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gRG9uZWMgbmliaCB0ZWxsdXMsIGxhb3JlZXQgdmVsIG1vbGxpcyB2ZWwsIGRpY3R1bSBub24gbG9yZW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuIEN1cmFiaXR1ciBlcmF0IHJpc3VzLCBsYWNpbmlhIHF1aXMgb2RpbyB1bHRyaWNlcywgaW1wZXJkaWV0IGRpZ25pc3NpbSBlcm9zLg0KDQpDdXJhYml0dXIgcGVsbGVudGVzcXVlIHB1cnVzIGlwc3VtLCBldSBzZW1wZXIgbmliaCB2YXJpdXMgcXVpcy4gTnVuYyBleCBlcm9zLCBtb2xsaXMgYWMgYmliZW5kdW0gZXQsIHRpbmNpZHVudCBpZCB0dXJwaXMuIE1hZWNlbmFzIHVsdHJpY2llcyBwdXJ1cyB2aXRhZSBxdWFtIHJob25jdXMsIGFjIGZpbmlidXMgYXVndWUgbG9ib3J0aXMuIFByb2luIG1vbGVzdGllIHRyaXN0aXF1ZSBmZWxpcyBpZCBtb2xlc3RpZS4gTWFlY2VuYXMgbmVjIGR1aSBzZWQgbGVjdHVzIHRpbmNpZHVudCByaG9uY3VzLiBNb3JiaSB1dCBzYXBpZW4gcmhvbmN1cyBhbnRlIHBvc3VlcmUgZWxlbWVudHVtLiBOdWxsYSBkaWduaXNzaW0gbGliZXJvIGV0IGxpYmVybyBzdXNjaXBpdCwgbm9uIHVsbGFtY29ycGVyIHF1YW0gZmluaWJ1cy4gVmVzdGlidWx1bSBhY2N1bXNhbiBhbGlxdWV0IHRvcnRvciBzZWQgY29uc2VxdWF0LiBNb3JiaSB2ZWwgc2VtIHZlbCBmZWxpcyB1bHRyaWNpZXMgc29sbGljaXR1ZGluIGluIGVnZXQgZW5pbS4gVXQgcXVpcyBsb3JlbSBldCBsZW8gc2VtcGVyIGFjY3Vtc2FuIGF0IHNlZCBlbGl0LiBDcmFzIHJpc3VzIGZlbGlzLCBpbXBlcmRpZXQgcXVpcyBmYWNpbGlzaXMgYSwgbWF4aW11cyB2aXRhZSB0b3J0b3IuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gUGVsbGVudGVzcXVlIGxhY2luaWEgYWxpcXVldCB0aW5jaWR1bnQuIFV0IHZlbmVuYXRpcyBsYWN1cyBuZWMgbmVxdWUgYmxhbmRpdCBoZW5kcmVyaXQgYXQgYSBuaXNpLg0KDQpJbnRlZ2VyIGEgYmxhbmRpdCBudW5jLiBQZWxsZW50ZXNxdWUgY29uc2VjdGV0dXIgaWQgZG9sb3Igbm9uIHVsdHJpY2llcy4gRHVpcyBsb2JvcnRpcywgZWxpdCB2aXRhZSBlbGVtZW50dW0gYmxhbmRpdCwgbWF1cmlzIGVsaXQgdGVtcG9yIGZlbGlzLCBldSBzb2RhbGVzIGFyY3UgbGliZXJvIHZlbCBuaXNsLiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuIE51bmMgdXQgYXJjdSB2aXRhZSBuZXF1ZSBncmF2aWRhIHZhcml1cyB1dCBhYyBsZW8uIE51bGxhIG5lYyBsdWN0dXMgcXVhbS4gRnVzY2UgcGxhY2VyYXQgbmlzbCBhdWd1ZSwgc2l0IGFtZXQgcHJldGl1bSBlc3QgdmVoaWN1bGEgdmVsLiBTZWQgc2VtIGFyY3UsIGRhcGlidXMgYXQgbmlzbCBlZ2V0LCBmYXVjaWJ1cyBlZmZpY2l0dXIgbWFzc2EuIFNlZCB1dCB0dXJwaXMgcmhvbmN1cywgc3VzY2lwaXQgbGFjdXMgbWFsZXN1YWRhLCBjb25kaW1lbnR1bSBlbGl0LiBWZXN0aWJ1bHVtIGltcGVyZGlldCB0aW5jaWR1bnQgZHVpIHNpdCBhbWV0IGxvYm9ydGlzLiBEb25lYyBuZXF1ZSBtaSwgaWFjdWxpcyBxdWlzIG9ybmFyZSBhdCwgdmFyaXVzIGFjIHF1YW0uIFBoYXNlbGx1cyB2ZWwgaWFjdWxpcyBudW5jLiBTZWQgbGFjaW5pYSBwaGFyZXRyYSBlbGVpZmVuZC4gU2VkIGNvbnZhbGxpcyBlc3QgYSBudW5jIGxhb3JlZXQgY29tbW9kby4gTWF1cmlzIHZlaGljdWxhIGxlbyBlc3QsIHNlZCBpYWN1bGlzIGxlbyB2dWxwdXRhdGUgYWMuDQoNCkRvbmVjIGEgdGVsbHVzIGV0IGRpYW0gaW50ZXJkdW0gcHJldGl1bS4gU3VzcGVuZGlzc2UgdnVscHV0YXRlIG1pIGR1aSwgZXQgc29sbGljaXR1ZGluIG51bmMgdmVoaWN1bGEgYS4gQ3JhcyBvcm5hcmUsIGR1aSBpbiBncmF2aWRhIG1heGltdXMsIHB1cnVzIG9kaW8gYmliZW5kdW0gbGVjdHVzLCBuZWMgY29uc2VxdWF0IG1hZ25hIG5pc2wgdmVsIG1hc3NhLiBDcmFzIGV0IGxlY3R1cyBzY2VsZXJpc3F1ZSwgaWFjdWxpcyBsaWd1bGEgbmVjLCBsb2JvcnRpcyBqdXN0by4gTmFtIGZpbmlidXMgbGVvIGEgcGhhcmV0cmEgdGVtcHVzLiBDdXJhYml0dXIgZ3JhdmlkYSwganVzdG8gc2VkIGNvbmd1ZSBldWlzbW9kLCBkdWkgbGVjdHVzIHBvc3VlcmUgbmlzbCwgYXQgZGFwaWJ1cyBsb3JlbSBhbnRlIGVnZXQgbWFzc2EuIE1hdXJpcyBhdWN0b3IgcGVsbGVudGVzcXVlIGFsaXF1YW0uIE51bmMgZmF1Y2lidXMgbmVxdWUgZmVybWVudHVtIHRpbmNpZHVudCB2aXZlcnJhLiBVdCB2aXZlcnJhIHNhcGllbiBhYyBhbnRlIHBsYWNlcmF0IGNvbW1vZG8uDQoNCkFsaXF1YW0gZXUgbnVsbGEgcGhhcmV0cmEsIGN1cnN1cyBuaWJoIGNvbW1vZG8sIHZlbmVuYXRpcyB2ZWxpdC4gRnVzY2Ugc2FnaXR0aXMgc2l0IGFtZXQgbG9yZW0gZXUgc2FnaXR0aXMuIE1hdXJpcyBpYWN1bGlzIGV1IHNhcGllbiBpbiByaG9uY3VzLiBQaGFzZWxsdXMgY29tbW9kbyBvZGlvIGluIGNvbmRpbWVudHVtIGNvbnNlcXVhdC4gUHJhZXNlbnQgY29udmFsbGlzIG1vbGVzdGllIGF1Z3VlIHNpdCBhbWV0IGJsYW5kaXQuIE51bGxhIGxpYmVybyByaXN1cywgcG9ydHRpdG9yIHZhcml1cyBlbGVpZmVuZCBhdCwgZWxlaWZlbmQgZXUgaXBzdW0uIFBlbGxlbnRlc3F1ZSB2ZWwgcXVhbSB1bHRyaWNpZXMsIGVnZXN0YXMgbG9yZW0gZXQsIG1vbGxpcyBuaWJoLiBRdWlzcXVlIGxvYm9ydGlzIHB1bHZpbmFyIGF1Z3VlLCB2aXRhZSBjb25zZWN0ZXR1ciBqdXN0byBmYWNpbGlzaXMgc2NlbGVyaXNxdWUuIEFsaXF1YW0gdHJpc3RpcXVlLCBtYWduYSB2aXRhZSBmcmluZ2lsbGEgZGFwaWJ1cywgbnVsbGEgcXVhbSB2ZWhpY3VsYSB0b3J0b3IsIG5vbiBldWlzbW9kIG9kaW8gbG9yZW0gcXVpcyBhcmN1LiBJbnRlZ2VyIHRpbmNpZHVudCBlbGVpZmVuZCB2b2x1dHBhdC4NCg0KUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIE1vcmJpIGV0IHBvcnRhIGxpYmVyby4gQWxpcXVhbSBhIHRpbmNpZHVudCBlcm9zLiBOdW5jIHVsdHJpY2VzIGZldWdpYXQgdm9sdXRwYXQuIEFlbmVhbiB2aXRhZSB0ZW1wb3IgYW50ZS4gUGhhc2VsbHVzIHV0IHZlc3RpYnVsdW0gaXBzdW0uIFZpdmFtdXMgYWxpcXVhbSBsYWN1cyBydXRydW0gbmVxdWUgdGluY2lkdW50IGJpYmVuZHVtLiBEb25lYyBkaWFtIHJpc3VzLCBiaWJlbmR1bSBuZWMgYWxpcXVldCB2aXRhZSwgY29uc2VxdWF0IHZlbmVuYXRpcyBwdXJ1cy4gUHJhZXNlbnQgZXUgdmVzdGlidWx1bSBtaS4NCg0KRG9uZWMgYWNjdW1zYW4gaW50ZXJkdW0gbGVvLCBxdWlzIHZlaGljdWxhIHJpc3VzIGZhY2lsaXNpcyBldS4gQ3JhcyBzZW1wZXIgbmliaCBxdWlzIHNjZWxlcmlzcXVlIGVsZWlmZW5kLiBEb25lYyBwdXJ1cyBsZWN0dXMsIHZ1bHB1dGF0ZSBldSBwdWx2aW5hciBldSwgdmVzdGlidWx1bSBzaXQgYW1ldCBlbmltLiBWZXN0aWJ1bHVtIGV1aXNtb2QgYW50ZSBncmF2aWRhLCBjb21tb2RvIGR1aSBuZWMsIGludGVyZHVtIGVyYXQuIE1vcmJpIGlkIGVyYXQgYWMgdHVycGlzIHBlbGxlbnRlc3F1ZSB1bHRyaWNpZXMgZXUgc2VkIHNhcGllbi4gUHJhZXNlbnQgZ3JhdmlkYSBvZGlvIHNlZCBpcHN1bSBjb21tb2RvIGZhdWNpYnVzLiBDcmFzIGFjIGx1Y3R1cyBhdWd1ZS4gSW50ZWdlciBub24gYW50ZSB2ZWwgbWF1cmlzIHRyaXN0aXF1ZSBmcmluZ2lsbGEgZXUgaW4gbWFnbmEuIERvbmVjIHZvbHV0cGF0IHZlbGl0IGF0IGxpYmVybyBwb3N1ZXJlLCBpbiBwb3N1ZXJlIGxpZ3VsYSBjb25ndWUuIFBoYXNlbGx1cyB2ZXN0aWJ1bHVtIHRlbGx1cyBudW5jLCB2aXRhZSBsYWNpbmlhIHR1cnBpcyBzZW1wZXIgZXQuIEV0aWFtIGltcGVyZGlldCBuZXF1ZSB2ZWwgbmliaCBncmF2aWRhIHRlbXBvci4gQ3JhcyBzaXQgYW1ldCBldWlzbW9kIGp1c3RvLiBFdGlhbSBpZCBudWxsYSBxdWlzIGxpYmVybyBsb2JvcnRpcyB2ZXN0aWJ1bHVtLiBDdXJhYml0dXIgZXQgZG9sb3IgdmVsIGV4IGV1aXNtb2QgbWF0dGlzIGF0IGF1Y3RvciBuaXNpLg0KDQpWaXZhbXVzIGVsZW1lbnR1bSBwb3N1ZXJlIGZlbGlzIGFjIHZhcml1cy4gVml2YW11cyBhIG1ldHVzIHRlbGx1cy4gSW50ZWdlciBhdWN0b3IgdGluY2lkdW50IGZlbGlzIHZlbCBibGFuZGl0LiBQcm9pbiBhdCBuaXNpIG51bGxhLiBJbnRlZ2VyIHV0IHF1YW0gdWx0cmljaWVzLCB2ZXN0aWJ1bHVtIHRlbGx1cyBzZWQsIGxhb3JlZXQgbWFzc2EuIEFlbmVhbiBncmF2aWRhIHBoYXJldHJhIG5lcXVlLCB2aXRhZSBlbGVtZW50dW0gdXJuYSB1bHRyaWNlcyBuZWMuIFNlZCB2ZW5lbmF0aXMgZW5pbSB2ZWwgbmVxdWUgc2FnaXR0aXMgdmVoaWN1bGEuIFN1c3BlbmRpc3NlIHNlbXBlciwgbGVvIHBlbGxlbnRlc3F1ZSB0ZW1wb3IgZmFjaWxpc2lzLCBsZWN0dXMgZW5pbSBzY2VsZXJpc3F1ZSBkb2xvciwgdmVsIHBsYWNlcmF0IG9yY2kgbWkgZXQgbGlndWxhLiBTZWQgYXVndWUganVzdG8sIGZyaW5naWxsYSBpbiBkaWFtIGFjLCBpYWN1bGlzIGVnZXN0YXMgaXBzdW0uIE51bmMgdnVscHV0YXRlIHZlbGl0IGVnZXQgbGVvIHNvbGxpY2l0dWRpbiBwaGFyZXRyYS4gRHVpcyBhIG5pc2wgaWQgcmlzdXMgcHJldGl1bSBwbGFjZXJhdCBzZWQgZXUgbGVjdHVzLiBTZWQgbWFsZXN1YWRhLCBkaWFtIHNpdCBhbWV0IHZlc3RpYnVsdW0gbWF4aW11cywgc2VtIHJpc3VzIGFsaXF1ZXQgYW50ZSwgcXVpcyBydXRydW0gbWFnbmEgdGVsbHVzIGFjIG51bmMuIFZpdmFtdXMgdmVsIG51bmMgbGFvcmVldCwgY29uZGltZW50dW0gbnVuYyBpZCwgY29uZ3VlIGlwc3VtLiBOYW0gdmVsIGZpbmlidXMgbWV0dXMuDQoNCkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gRHVpcyBkYXBpYnVzIHZ1bHB1dGF0ZSBzZW0gYSBtYXR0aXMuIEN1cmFiaXR1ciBwaGFyZXRyYSBkYXBpYnVzIHNjZWxlcmlzcXVlLiBJbiBpZCBsZWN0dXMgYWMgdG9ydG9yIHZhcml1cyBjb25ndWUgc2VkIHZlbCBudW5jLiBTdXNwZW5kaXNzZSBuZWMgb3JuYXJlIG51bmMuIFBlbGxlbnRlc3F1ZSBoZW5kcmVyaXQgZWxpdCBuZWMgZmFjaWxpc2lzIHJob25jdXMuIEN1cmFiaXR1ciBhdWN0b3IgbmVxdWUgaW4gbGFjdXMgcHJldGl1bSBydXRydW0uIER1aXMgcGhhcmV0cmEgcGVsbGVudGVzcXVlIG1ldHVzIHNlZCBmaW5pYnVzLiBQZWxsZW50ZXNxdWUgdmVsaXQgbmliaCwgdWx0cmljZXMgdXQgYWxpcXVldCBldSwgaW1wZXJkaWV0IGlkIGRvbG9yLiBJbiBjb25zZXF1YXQgZXggYWMgbmliaCBpbXBlcmRpZXQgZmluaWJ1cy4NCg0KQ3VyYWJpdHVyIG5vbiBhcmN1IGludGVyZHVtLCBsb2JvcnRpcyBtYXNzYSBuZWMsIGxvYm9ydGlzIGFyY3UuIE51bGxhIGZhY2lsaXNpLiBOYW0gdWxsYW1jb3JwZXIgdGVsbHVzIGF0IHR1cnBpcyBwZWxsZW50ZXNxdWUsIGVnZXQgdml2ZXJyYSB1cm5hIGVnZXN0YXMuIERvbmVjIG5lYyBlbGVpZmVuZCBtaS4gRHVpcyByaG9uY3VzIGluIG5pc2kgcXVpcyB0cmlzdGlxdWUuIFNlZCBydXRydW0gaW50ZXJkdW0gZXN0LCBub24gaGVuZHJlcml0IGV4IHZvbHV0cGF0IGEuIFBoYXNlbGx1cyBldCBtYXNzYSBwZWxsZW50ZXNxdWUgb2RpbyBkaWduaXNzaW0gY29uZ3VlLiBDcmFzIG9kaW8gZHVpLCBmYXVjaWJ1cyBuZWMgcHVydXMgbm9uLCBpbXBlcmRpZXQgdm9sdXRwYXQgb3JjaS4gUHJhZXNlbnQgbHVjdHVzIG5pc2kgaW4gdGVsbHVzIHRpbmNpZHVudCBzdXNjaXBpdC4gUGhhc2VsbHVzIHNvZGFsZXMgc2VtcGVyIG9yY2ksIHNlZCBwbGFjZXJhdCBlbmltIGdyYXZpZGEgdXQuIE51bGxhIHZpdGFlIHR1cnBpcyBhdCBkaWFtIHBlbGxlbnRlc3F1ZSBhY2N1bXNhbiB2aXRhZSBuZWMgbGlndWxhLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgQWxpcXVhbSBmYWNpbGlzaXMgbWFsZXN1YWRhIHNlbSwgaWQgZWxlaWZlbmQgbGVjdHVzIG1hdHRpcyBhLg0KDQpTdXNwZW5kaXNzZSBjb21tb2RvIGFjIGxpZ3VsYSBub24gdGVtcG9yLiBEb25lYyB1bHRyaWNpZXMgc2VtIGV0IGVsaXQgdGluY2lkdW50IHRlbXB1cy4gUGVsbGVudGVzcXVlIGVsaXQgZXJhdCwgcGxhY2VyYXQgaW4gcHVydXMgdmVsLCBwdWx2aW5hciBiaWJlbmR1bSBsZW8uIFZlc3RpYnVsdW0gYXVjdG9yIGZlcm1lbnR1bSB2YXJpdXMuIE1hdXJpcyB1dCBleCBhIG5lcXVlIGZldWdpYXQgbW9sbGlzLiBQcm9pbiBvcm5hcmUgbnVsbGEgZG9sb3IsIGF0IHZpdmVycmEgbWFzc2EgdnVscHV0YXRlIHZlbC4gRG9uZWMgbW9sZXN0aWUgbWFzc2Egc2VkIG5lcXVlIGFsaXF1ZXQgY29uZ3VlIGEgc2VkIG51bGxhLiBOdWxsYW0gZWdlc3RhcyBwbGFjZXJhdCBleCB2ZWwgZXVpc21vZC4gTWFlY2VuYXMgYXQgc2NlbGVyaXNxdWUgZWxpdC4gUGhhc2VsbHVzIG1vbGVzdGllLCBlbGl0IG5lYyBzdXNjaXBpdCBhbGlxdWV0LCBtYWduYSBwdXJ1cyBzdXNjaXBpdCBsZW8sIHV0IHRyaXN0aXF1ZSBvcmNpIG1hdXJpcyB1dCBwdXJ1cy4gU3VzcGVuZGlzc2UgdmVuZW5hdGlzIGVnZXN0YXMgbGVjdHVzIGFjIHZvbHV0cGF0LiBEdWlzIGx1Y3R1cywgZXN0IGV0IGZyaW5naWxsYSBvcm5hcmUsIGF1Z3VlIG9kaW8gZmF1Y2lidXMgYXVndWUsIHZpdGFlIHZvbHV0cGF0IG5pYmggbmlzaSBxdWlzIGxpYmVyby4gRXRpYW0gYXQgdHVycGlzIGVnZXQgZW5pbSBwaGFyZXRyYSBtb2xlc3RpZS4gTWF1cmlzIHZlaGljdWxhIGV1aXNtb2QgZG9sb3IgZWdldCBldWlzbW9kLiBJbnRlZ2VyIHV0IGxhY2luaWEgbWFnbmEsIGhlbmRyZXJpdCBmYXVjaWJ1cyBtZXR1cy4NCg0KUGVsbGVudGVzcXVlIGNvbW1vZG8gdml0YWUgbWFnbmEgYmxhbmRpdCBmZXJtZW50dW0uIERvbmVjIGFsaXF1ZXQsIGxlbyB2aXRhZSBmcmluZ2lsbGEgZnJpbmdpbGxhLCBxdWFtIGVzdCBmYWNpbGlzaXMgZXgsIGZlcm1lbnR1bSBmZXJtZW50dW0gbmVxdWUgZHVpIGV1IGRpYW0uIE5hbSByaG9uY3VzIHF1YW0gbmliaCwgZXQgZmVybWVudHVtIG51bmMgdGVtcG9yIGluLiBBZW5lYW4gdml2ZXJyYSwgdHVycGlzIHV0IGltcGVyZGlldCBkaWN0dW0sIG1hdXJpcyBtYXVyaXMgdGVtcG9yIGxvcmVtLCBxdWlzIHRlbXBvciBzYXBpZW4ganVzdG8gYWMgZHVpLiBQcm9pbiBuZWMgbmliaCBsYWN1cy4gRG9uZWMgdmVsIGxhY3VzIGlkIGxpZ3VsYSBwdWx2aW5hciBwb3J0YSB2aXRhZSBuZWMgbmliaC4gU3VzcGVuZGlzc2UgdWxsYW1jb3JwZXIgYWxpcXVldCBzb2xsaWNpdHVkaW4uIERvbmVjIHNpdCBhbWV0IG9yY2kgc2VkIGFyY3UgZWZmaWNpdHVyIGxhY2luaWEuDQoNCk1hdXJpcyBzaXQgYW1ldCB1bGxhbWNvcnBlciBzYXBpZW4uIFNlZCBhdCByaXN1cyBhbnRlLiBEb25lYyB1bHRyaWNlcyBwdWx2aW5hciBwZWxsZW50ZXNxdWUuIENyYXMgc2VkIGVuaW0gZXQgbWF1cmlzIGFjY3Vtc2FuIHN1c2NpcGl0IG5vbiBxdWlzIGRpYW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuIFZpdmFtdXMgdml0YWUgZW5pbSBwdXJ1cy4gRG9uZWMgZXUgbWkgdHVycGlzLiBJbnRlZ2VyIHJpc3VzIGZlbGlzLCBkaWduaXNzaW0gZGFwaWJ1cyBlc3QgZWdldCwgdnVscHV0YXRlIHN1c2NpcGl0IG5pc2kuDQoNClNlZCB1bHRyaWNlcywgbG9yZW0gcG9ydHRpdG9yIGNvbnZhbGxpcyBjb21tb2RvLCBleCBhdWd1ZSBwb3J0YSBzYXBpZW4sIGRpZ25pc3NpbSBjb25ndWUgZXggbWFzc2Egdml0YWUgcXVhbS4gU2VkIGdyYXZpZGEgdHVycGlzIGluIGR1aSB2ZW5lbmF0aXMsIGluIHN1c2NpcGl0IGFyY3UgaGVuZHJlcml0LiBWZXN0aWJ1bHVtIHJ1dHJ1bSBlbGl0IGlkIGZlbGlzIGZlcm1lbnR1bSBhbGlxdWV0LiBNYXVyaXMgaW4gZmF1Y2lidXMgbGlndWxhLCBhdCBldWlzbW9kIG9yY2kuIEN1cmFiaXR1ciB0ZWxsdXMgcmlzdXMsIGZhdWNpYnVzIGEgZXJvcyBldSwgZmVybWVudHVtIHByZXRpdW0gZG9sb3IuIFZpdmFtdXMgaW50ZXJkdW0ganVzdG8gdmVsaXQsIGFjIG9ybmFyZSBtYXNzYSByaG9uY3VzIG5lYy4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIFV0IHZlbGl0IG5pc2ksIHJob25jdXMgc2l0IGFtZXQgbGVvIHBvc3VlcmUsIHZlaGljdWxhIGJsYW5kaXQgb3JjaS4gU3VzcGVuZGlzc2UgcHVydXMgYXJjdSwgY3Vyc3VzIGEgb2RpbyBhLCBhY2N1bXNhbiBtYXR0aXMgYW50ZS4gTnVsbGFtIGZldWdpYXQgdGVsbHVzIGF0IGxhY3VzIGRpY3R1bSBtb2xsaXMuIERvbmVjIGp1c3RvIG5pYmgsIGNvbnNlcXVhdCBpZCBsZW8gYSwgdGVtcHVzIHBoYXJldHJhIGVsaXQuIEZ1c2NlIGludGVyZHVtIHBsYWNlcmF0IGRvbG9yIHV0IHNhZ2l0dGlzLg0KDQpQcmFlc2VudCBlZ2V0IGZhY2lsaXNpcyBuaXNsLCBuZWMgbGFjaW5pYSBwdXJ1cy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IEZ1c2NlIGhlbmRyZXJpdCB2b2x1dHBhdCBoZW5kcmVyaXQuIEFsaXF1YW0gdXQgdmVsaXQgdml0YWUgbWkgc2NlbGVyaXNxdWUgcmhvbmN1cy4gUGhhc2VsbHVzIG1vbGxpcyByaG9uY3VzIG9ybmFyZS4gUHJhZXNlbnQgZGljdHVtIGltcGVyZGlldCBuaXNpIHNpdCBhbWV0IHRyaXN0aXF1ZS4gQWxpcXVhbSB1dCB2ZWhpY3VsYSBlcmF0LiBQcmFlc2VudCBsb2JvcnRpcyBtYXhpbXVzIGV4IHNlZCBmYXVjaWJ1cy4NCg0KSW4gdWx0cmljaWVzIHZpdmVycmEgbGliZXJvIHZpdGFlIHVsdHJpY2VzLiBQZWxsZW50ZXNxdWUgdml0YWUgcGhhcmV0cmEgbWkuIFNlZCB1cm5hIGxpYmVybywgdm9sdXRwYXQgaWQgaGVuZHJlcml0IGVnZXQsIGRpZ25pc3NpbSB2aXRhZSBlbmltLiBTZWQgYmxhbmRpdCBudWxsYSBhIGVzdCB0ZW1wb3IsIGFjIGVsZWlmZW5kIHRvcnRvciBoZW5kcmVyaXQuIEludGVnZXIgZ3JhdmlkYSBkaWFtIGlkIHVsdHJpY2VzIHZvbHV0cGF0LiBOYW0gZWxpdCBuaXNpLCBwb3J0dGl0b3IgaWFjdWxpcyBudWxsYSB1dCwgbWF4aW11cyB2ZXN0aWJ1bHVtIGxhY3VzLiBBbGlxdWFtIG5lYyBhbnRlIHVsbGFtY29ycGVyLCBtb2xsaXMgZG9sb3IgZXUsIGdyYXZpZGEgbmlzaS4gVmVzdGlidWx1bSB1bHRyaWNpZXMgY29uZ3VlIGNvbmd1ZS4NCg0KQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLiBFdGlhbSBhY2N1bXNhbiBudW5jIGV1IG51bGxhIHRyaXN0aXF1ZSBtb2xsaXMuIENyYXMgcGxhY2VyYXQgc2VtcGVyIHZ1bHB1dGF0ZS4gU2VkIGlkIHRpbmNpZHVudCBxdWFtLiBVdCBwb3J0YSBpbnRlcmR1bSBvcmNpLCBldCBldWlzbW9kIG9kaW8gdHJpc3RpcXVlIHZpdGFlLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdW5jIGF0IHNlbSBuaWJoLiBJbnRlZ2VyIG5vbiBhbGlxdWV0IGxvcmVtLCBldCBhdWN0b3IgdXJuYS4gRG9uZWMgdml2ZXJyYSBtYXVyaXMgbmVjIHF1YW0gY29uc2VxdWF0IHRlbXB1cy4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLiBTZWQgYSBleCBzZW1wZXIsIGFsaXF1YW0gdmVsaXQgZXUsIHVsdHJpY2VzIGRvbG9yLg0KDQpEb25lYyB2ZWwgZXJvcyBlZ2VzdGFzIG5pYmggZXVpc21vZCBkYXBpYnVzIG5lYyBhIGRpYW0uIE1hdXJpcyBjb25kaW1lbnR1bSBub24gbGlndWxhIHF1aXMgZ3JhdmlkYS4gUGVsbGVudGVzcXVlIHZvbHV0cGF0IG1heGltdXMgbGlndWxhLCBzaXQgYW1ldCBlbGVtZW50dW0gdXJuYSBjb252YWxsaXMgaWQuIEludGVnZXIgdmVsIGR1aSBsdWN0dXMsIGFjY3Vtc2FuIG5pYmggdml0YWUsIHJob25jdXMgdHVycGlzLiBDdXJhYml0dXIgbW9sbGlzIGFudGUgZGlhbSwgcGhhcmV0cmEgdGluY2lkdW50IGxpZ3VsYSB1bGxhbWNvcnBlciBldC4gVXQgZGlnbmlzc2ltIGRpY3R1bSBsYWN1cywgYXQgZGlnbmlzc2ltIGVyb3MuIFZlc3RpYnVsdW0gbG9ib3J0aXMgdHJpc3RpcXVlIGxhY3VzLCBhdCBldWlzbW9kIGlwc3VtIHZlbmVuYXRpcyBlZ2V0LiBBZW5lYW4gdHJpc3RpcXVlIGlkIHF1YW0gaW4gaWFjdWxpcy4gQ3VyYWJpdHVyIHBoYXJldHJhIGVmZmljaXR1ciBkb2xvci4gVml2YW11cyBhYyBlcm9zIG5lcXVlLiBJbiBzaXQgYW1ldCBpYWN1bGlzIHB1cnVzLiBBbGlxdWFtIGV0IGxlbyBhIHZlbGl0IGFjY3Vtc2FuIHNhZ2l0dGlzIGV0IHF1aXMgZW5pbS4gUGVsbGVudGVzcXVlIG1hZ25hIGV4LCBmcmluZ2lsbGEgaWQgb3JjaSBldCwgbW9sbGlzIGZlcm1lbnR1bSBzZW0uDQoNCkZ1c2NlIGludGVyZHVtIGlhY3VsaXMgZHVpLCBpbiBhbGlxdWV0IHVybmEgZmluaWJ1cyB1dC4gVmVzdGlidWx1bSBhY2N1bXNhbiBzb2xsaWNpdHVkaW4gbGlndWxhIGV0IHRyaXN0aXF1ZS4gTnVuYyBjdXJzdXMgdmVuZW5hdGlzIGRpYW0sIHNpdCBhbWV0IGFsaXF1ZXQgZXJhdCB2ZW5lbmF0aXMgdml0YWUuIE51bGxhbSBsYWNpbmlhIG9yY2kgZWdldCBsdWN0dXMgcmhvbmN1cy4gTWFlY2VuYXMgbWF1cmlzIG5pYmgsIHBoYXJldHJhIGNvbW1vZG8gbW9sZXN0aWUgdml0YWUsIGZhdWNpYnVzIGluIGVyb3MuIFV0IGEgcHJldGl1bSB0dXJwaXMsIHNpdCBhbWV0IGV1aXNtb2QgZmVsaXMuIEludGVnZXIgdml2ZXJyYSBlbmltIHV0IGVsZWlmZW5kIHZvbHV0cGF0LiBWaXZhbXVzIGVsZW1lbnR1bSBsZWN0dXMgaW4gbmliaCBpbnRlcmR1bSwgc2VkIGRpY3R1bSB1cm5hIHBvcnR0aXRvci4gVmVzdGlidWx1bSBtb2xlc3RpZSBvcmNpIG5vbiB0cmlzdGlxdWUgdmVzdGlidWx1bS4gTmFtIG51bGxhIGxlbywgZmV1Z2lhdCBldSBoZW5kcmVyaXQgdXQsIGNvbnZhbGxpcyB1dCBhbnRlLiBEb25lYyBwaGFyZXRyYSBsb3JlbSBxdWlzIGxlY3R1cyBncmF2aWRhLCBub24gZXVpc21vZCBlbmltIGltcGVyZGlldC4gQ3VyYWJpdHVyIGFjIGVsaXQgZXguDQoNClNlZCBsYWN1cyBzZW0sIGZpbmlidXMgYSBtYXR0aXMgYXQsIGZpbmlidXMgbm9uIG51bmMuIFV0IGF0IG51bGxhIHVsdHJpY2llcywgdm9sdXRwYXQgbGliZXJvIHZpdGFlLCBjb252YWxsaXMgbGVvLiBDcmFzIHF1aXMgc2VtIG1ldHVzLiBQcm9pbiB0dXJwaXMgcmlzdXMsIHN1c2NpcGl0IG5lYyBmYXVjaWJ1cyBpbiwgdmVoaWN1bGEgdmVsIGp1c3RvLiBGdXNjZSBjb21tb2RvIGFyY3UgYXQgbWV0dXMgY29uc2VjdGV0dXIsIGluIGVmZmljaXR1ciBkdWkgZWdlc3Rhcy4gQ3JhcyBlZ2V0IGF1Z3VlIG1heGltdXMsIHZlc3RpYnVsdW0gc2FwaWVuIHV0LCBsYW9yZWV0IG1hZ25hLiBJbnRlZ2VyIG1hbGVzdWFkYSBudWxsYSBhdCBzY2VsZXJpc3F1ZSBmZXVnaWF0LiBDcmFzIHB1bHZpbmFyLCB0ZWxsdXMgc2l0IGFtZXQgdWxsYW1jb3JwZXIgZmVybWVudHVtLCBwdXJ1cyBsb3JlbSBsYW9yZWV0IG51bmMsIGVsZW1lbnR1bSBtb2xsaXMgZXJhdCBtYXNzYSBxdWlzIG9kaW8uIER1aXMgZWxlaWZlbmQgbnVsbGEgaW4gbGlndWxhIHJ1dHJ1bSBjb25ndWUuIFByYWVzZW50IGlhY3VsaXMsIG1hc3NhIGNvbmd1ZSBlZ2VzdGFzIGVnZXN0YXMsIHR1cnBpcyBmZWxpcyBlbGVpZmVuZCBlcmF0LCB1dCBsb2JvcnRpcyBtZXR1cyBlcmF0IGF0IHNlbS4gVml2YW11cyBxdWlzIGRvbG9yIGVnZXQgbGVvIGRpY3R1bSB2dWxwdXRhdGUuIE51bGxhIHNlZCBuaXNsIHZlbGl0LiBDdXJhYml0dXIgbGFjaW5pYSB2ZWxpdCBsYWN1cywgYXQgdWxsYW1jb3JwZXIgZWxpdCBjdXJzdXMgbm9uLiBBbGlxdWFtIGRpZ25pc3NpbSBlbmltIGxpZ3VsYSwgdXQgZnJpbmdpbGxhIGxlY3R1cyBhbGlxdWV0IHNlZC4gTW9yYmkgY29uZGltZW50dW0gbGVjdHVzIG5vbiBhdWd1ZSBsYWNpbmlhLCB1dCB1bGxhbWNvcnBlciBsaWJlcm8gdWx0cmljaWVzLiBQcmFlc2VudCBwb3N1ZXJlIHVybmEgc2FwaWVuLCBhdWN0b3IgbW9sZXN0aWUgbWFnbmEgcGVsbGVudGVzcXVlIHBsYWNlcmF0Lg0KDQpTdXNwZW5kaXNzZSBzaXQgYW1ldCBxdWFtIHBoYXJldHJhLCBkaWduaXNzaW0gbmVxdWUgaW4sIGltcGVyZGlldCBudW5jLiBOYW0gbWF4aW11cyBjb21tb2RvIG1vbGVzdGllLiBNYXVyaXMgbWF4aW11cyBwdWx2aW5hciBjb25ndWUuIFByb2luIHV0IHR1cnBpcyBwZWxsZW50ZXNxdWUsIGNvbW1vZG8gcXVhbSBmYXVjaWJ1cywgdm9sdXRwYXQgbWV0dXMuIE51bGxhIGRpZ25pc3NpbSB1bHRyaWNlcyBmaW5pYnVzLiBRdWlzcXVlIGFjY3Vtc2FuIGVnZXN0YXMgZXN0IGluIGNvbnNlcXVhdC4gRXRpYW0gdmVsIG5pYmggZWxlbWVudHVtLCBzb2RhbGVzIHRvcnRvciBpbiwgZGljdHVtIGVyb3MuIEFsaXF1YW0gc29kYWxlcyBjb25kaW1lbnR1bSB2dWxwdXRhdGUuIE1hdXJpcyBsdWN0dXMgc2FwaWVuIG5lYyB0dXJwaXMgdmVzdGlidWx1bSB2b2x1dHBhdC4gRnVzY2UgbWFzc2EgbGVvLCBpbXBlcmRpZXQgbmVjIGV4IHNlZCwgbWF4aW11cyB1bHRyaWNlcyBvZGlvLg0KDQpNYWVjZW5hcyBqdXN0byBhcmN1LCBkaWN0dW0gb3JuYXJlIGVyYXQgaWQsIGZhY2lsaXNpcyBldWlzbW9kIG51bmMuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gUHJhZXNlbnQgZmF1Y2lidXMgZXggbm9uIGRpYW0gbWFsZXN1YWRhIHZlaGljdWxhLiBOYW0gc2VkIGFsaXF1YW0gbGlndWxhLiBFdGlhbSBpZCBlbGl0IGZyaW5naWxsYSwgZWxlbWVudHVtIGVsaXQgc2l0IGFtZXQsIGRpY3R1bSB2ZWxpdC4gVmVzdGlidWx1bSBpZCBvZGlvIHV0IGVuaW0gdnVscHV0YXRlIGxhb3JlZXQgc2VkIHNlZCBhcmN1LiBQcmFlc2VudCBwb3J0dGl0b3IgdmVzdGlidWx1bSB0dXJwaXMgaW4gcHVsdmluYXIuIE1vcmJpIGVsaXQgbnVuYywgY29tbW9kbyBhIHNjZWxlcmlzcXVlIGV1LCBpbnRlcmR1bSBhdCBkdWkuIE1vcmJpIHZlc3RpYnVsdW0gdGVtcG9yIGxpYmVybywgZWdldCBmYXVjaWJ1cyBtYXVyaXMgZGljdHVtIGlkLiBBZW5lYW4gZGlnbmlzc2ltLCBuaWJoIHNpdCBhbWV0IHZhcml1cyBtb2xsaXMsIHF1YW0gYXJjdSB2ZW5lbmF0aXMgbGVjdHVzLCBpZCBmZXJtZW50dW0gcmlzdXMgcXVhbSBldCBkdWkuIE51bmMgY29uZGltZW50dW0gZGljdHVtIGV4Lg0KDQpQZWxsZW50ZXNxdWUgaXBzdW0gYXVndWUsIGlhY3VsaXMgdmVsIGFjY3Vtc2FuIGxvYm9ydGlzLCBtb2xlc3RpZSB2ZWwgc2FwaWVuLiBDcmFzIHBsYWNlcmF0IHF1aXMgdXJuYSBhdCBkaWduaXNzaW0uIFNlZCBmcmluZ2lsbGEgcGVsbGVudGVzcXVlIHRlbGx1cyBzaXQgYW1ldCBlZmZpY2l0dXIuIEluIGx1Y3R1cyBmcmluZ2lsbGEgbmliaCwgcXVpcyBmcmluZ2lsbGEgZW5pbSBmYXVjaWJ1cyBpbi4gRHVpcyBhYyBwb3J0dGl0b3IgbmVxdWUsIGFjIHVsbGFtY29ycGVyIGV4LiBNb3JiaSBzZWQgdmVuZW5hdGlzIGF1Z3VlLiBTZWQgcXVpcyBpYWN1bGlzIHF1YW0sIGFjIGdyYXZpZGEgbWV0dXMuIE51bGxhIGZhY2lsaXNpLg0KDQpOYW0ganVzdG8gbWFzc2EsIHZhcml1cyBsdWN0dXMgdG9ydG9yIGEsIHRyaXN0aXF1ZSB0aW5jaWR1bnQgbmliaC4gTmFtIG5vbiBvcm5hcmUgZXN0LCBhdCB0ZW1wb3IgbGliZXJvLiBFdGlhbSBtYXhpbXVzIG9yY2kgZWdldCBhbGlxdWFtIGVsZWlmZW5kLiBTdXNwZW5kaXNzZSBvcm5hcmUgc2VtIHZpdGFlIGxlbyB1bGxhbWNvcnBlciwgc2l0IGFtZXQgcG9ydHRpdG9yIGR1aSBmYWNpbGlzaXMuIE1hZWNlbmFzIHBsYWNlcmF0IG5pc2kgbm9uIGVuaW0gbW9sZXN0aWUgYWNjdW1zYW4uIEFlbmVhbiBtYWxlc3VhZGEganVzdG8gYXQgbG9yZW0gcHJldGl1bSBmZXVnaWF0LiBTZWQgYmxhbmRpdCBwb3N1ZXJlIG51bGxhIGEgY29udmFsbGlzLiBOdW5jIGFsaXF1YW0sIG1pIHZlbCBmYXVjaWJ1cyBkYXBpYnVzLCByaXN1cyBsZW8gYWxpcXVhbSBsYWN1cywgc2l0IGFtZXQgc2VtcGVyIGR1aSBtYXVyaXMgYSBzZW0uIEV0aWFtIHByZXRpdW0gZWxpdCBlcmF0LCB2aXRhZSBibGFuZGl0IG1ldHVzIGFsaXF1YW0gaW4uIFBlbGxlbnRlc3F1ZSBub24gbmlzbCBhdCBtYXVyaXMgcG9ydGEgc2NlbGVyaXNxdWUuIENyYXMgdml0YWUgbWFsZXN1YWRhIHRlbGx1cy4NCg0KRnVzY2UgYWMgdmVsaXQgbnVuYy4gUGhhc2VsbHVzIGV1IGFsaXF1ZXQganVzdG8uIEFsaXF1YW0gaWQgYWxpcXVhbSBvZGlvLiBWaXZhbXVzIHNvbGxpY2l0dWRpbiBwaGFyZXRyYSBwaGFyZXRyYS4gTW9yYmkgbmVjIGJsYW5kaXQgc2VtLCBxdWlzIGZlcm1lbnR1bSBlcmF0LiBQZWxsZW50ZXNxdWUgc2VkIHJpc3VzIHNpdCBhbWV0IG51bmMgZWxlaWZlbmQgdGluY2lkdW50LiBDdXJhYml0dXIgc2l0IGFtZXQgbWFsZXN1YWRhIGxpYmVyby4gSW4gcHJldGl1bSBydXRydW0gbWF1cmlzIHZpdGFlIHN1c2NpcGl0LiBOdWxsYSB0cmlzdGlxdWUgcG9zdWVyZSBlbmltIHF1aXMgbWF0dGlzLiBWZXN0aWJ1bHVtIHRpbmNpZHVudCwgdG9ydG9yIHF1aXMgZWZmaWNpdHVyIGNvbnZhbGxpcywgbWkgbmlzaSBmYXVjaWJ1cyBzZW0sIHZlbCBjdXJzdXMgbWF1cmlzIGxlY3R1cyBldSBudW5jLiBGdXNjZSBhdCBtYWxlc3VhZGEgbnVsbGEsIHV0IG1hdHRpcyBkdWkuIE51bmMgcG9ydGEgdHJpc3RpcXVlIGxhb3JlZXQuIEFlbmVhbiBub24gZXN0IGF1Z3VlLiBQaGFzZWxsdXMgY29uZ3VlIG1hc3NhIGRvbG9yLCBhYyB2b2x1dHBhdCBzYXBpZW4gdml2ZXJyYSB1dC4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuDQoNCkludGVnZXIgY3Vyc3VzIHR1cnBpcyBub24gbGVvIHZlaGljdWxhIG1vbGVzdGllLiBDcmFzIHBlbGxlbnRlc3F1ZSBzYWdpdHRpcyBlcm9zIGV1IHZ1bHB1dGF0ZS4gTnVsbGFtIGluIGxhY2luaWEgZGlhbS4gQWVuZWFuIGlhY3VsaXMgdnVscHV0YXRlIGltcGVyZGlldC4gVXQgZGljdHVtIGFjY3Vtc2FuIHNhcGllbiwgYWMgZWdlc3RhcyBxdWFtIGFsaXF1YW0gZWdldC4gTWF1cmlzIG1hbGVzdWFkYSBtYXVyaXMgYWMgc2NlbGVyaXNxdWUgZGFwaWJ1cy4gTnVuYyBlc3QgYXVndWUsIGltcGVyZGlldCBzaXQgYW1ldCB2aXZlcnJhIGV1LCBkaWN0dW0gcXVpcyBzYXBpZW4uIE51bGxhbSBwcmV0aXVtIG5vbiBsaWd1bGEgbm9uIGludGVyZHVtLiBDdXJhYml0dXIgdml0YWUgbG9yZW0gdml0YWUgb3JjaSB1bGxhbWNvcnBlciBsdWN0dXMgbWFsZXN1YWRhIGVnZXQgbGlndWxhLiBJbnRlZ2VyIHNhZ2l0dGlzIHBvcnR0aXRvciBlbGVpZmVuZC4gUXVpc3F1ZSBjb25zZWN0ZXR1ciBtaSBldCBhdWN0b3IgZGljdHVtLiBQZWxsZW50ZXNxdWUgYXVjdG9yIG51bGxhIG1hZ25hLCBub24gdGluY2lkdW50IHB1cnVzIG1hbGVzdWFkYSBldS4gQ3JhcyBjb25zZXF1YXQgbmlzbCBudW5jLiBEdWlzIG1heGltdXMgYXQgcmlzdXMgc2l0IGFtZXQgbHVjdHVzLiBTZWQgc2l0IGFtZXQgZHVpIGFjIHZlbGl0IGVnZXN0YXMgZGljdHVtLiBWZXN0aWJ1bHVtIGV1IHRlbGx1cyB2dWxwdXRhdGUsIG1hdHRpcyBudW5jIHN1c2NpcGl0LCBwb3J0YSBuaXNsLg0KDQpQaGFzZWxsdXMgYXQgcGVsbGVudGVzcXVlIG1hc3NhLiBWaXZhbXVzIGF1Y3RvciB0b3J0b3IgbGliZXJvLCBlZ2V0IGVsZWlmZW5kIG1pIHNhZ2l0dGlzIHZpdGFlLiBOdWxsYSBhdCBtYXNzYSBuaXNsLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBTdXNwZW5kaXNzZSBlbGl0IGFyY3UsIHRpbmNpZHVudCBzZWQgaW50ZXJkdW0gaWQsIGdyYXZpZGEgaW4gbG9yZW0uIE1vcmJpIHBlbGxlbnRlc3F1ZSBpbiB1cm5hIHF1aXMgYmxhbmRpdC4gTWF1cmlzIHNlbXBlciBzZW0gZGlhbSwgZXVpc21vZCBjb25ndWUgcmlzdXMgc29kYWxlcyBzZWQuIEN1cmFiaXR1ciBtYXhpbXVzIHZpdGFlIGVyb3MgZXUgZWZmaWNpdHVyLiBEb25lYyBsYW9yZWV0IHR1cnBpcyBhdWd1ZSwgYXQgcHJldGl1bSBlc3QgcG9zdWVyZSBzaXQgYW1ldC4gRXRpYW0gZWdldCBtZXR1cyBlZ2V0IGlwc3VtIGNvbW1vZG8gbWFsZXN1YWRhLiBNYXVyaXMgbWF0dGlzLCB0b3J0b3IgdmVsIHByZXRpdW0gYWxpcXVldCwgbWkgbG9yZW0gb3JuYXJlIHZlbGl0LCBhIHZpdmVycmEgYXVndWUgbmlzaSBuZWMgc2FwaWVuLiBNYXVyaXMgcG9zdWVyZSBhYyBlbmltIHNlZCBzZW1wZXIuIFNlZCB2ZW5lbmF0aXMsIG5pc2wgc2l0IGFtZXQgcG9zdWVyZSBydXRydW0sIGVyb3MgbWV0dXMgdmVuZW5hdGlzIHNhcGllbiwgbm9uIHJob25jdXMgc2VtIG9kaW8gcXVpcyBwdXJ1cy4gQ3JhcyBzaXQgYW1ldCBzY2VsZXJpc3F1ZSB0b3J0b3IuDQoNCk51bmMgZWdldCBlbGl0IGVsaXQuIE51bGxhIG9ybmFyZSwgb3JjaSBub24gbWF4aW11cyBncmF2aWRhLCBxdWFtIG1pIG1vbGxpcyBudW5jLCBldSBncmF2aWRhIGR1aSBkaWFtIGF0IG5pYmguIERvbmVjIHZpdGFlIG5pYmggbGliZXJvLiBEb25lYyBpbiBlbGVpZmVuZCBuZXF1ZS4gSW4gdGVsbHVzIHNhcGllbiwgZWxlaWZlbmQgaW4gYXVndWUgZXQsIHBlbGxlbnRlc3F1ZSBkaWN0dW0gbGFjdXMuIEV0aWFtIGNvbmd1ZSBwb3J0dGl0b3Igc2FwaWVuIGVnZXQgZWdlc3Rhcy4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLiBGdXNjZSBmZXVnaWF0LCBpcHN1bSB1dCBhbGlxdWV0IGZyaW5naWxsYSwgbmliaCBtZXR1cyBvcm5hcmUgZG9sb3IsIHV0IHNlbXBlciB1cm5hIHRlbGx1cyBuZWMgb3JjaS4gVml2YW11cyBlZ2V0IHVybmEgdXQgbmlzaSBkYXBpYnVzIHNvbGxpY2l0dWRpbi4gQWxpcXVhbSBsaWd1bGEgZXgsIHBsYWNlcmF0IG5lYyBuaXNpIGNvbnZhbGxpcywgbWF0dGlzIHN1c2NpcGl0IG51bGxhLiBEb25lYyBjdXJzdXMgbmVjIHNlbSBjb25zZXF1YXQgdGVtcHVzLiBBZW5lYW4gZXQgb3JuYXJlIGRvbG9yLCB2ZWwgYmliZW5kdW0gbWFnbmEuIFNlZCB0ZW1wb3IgdGluY2lkdW50IGxvcmVtLg0KDQpNYWVjZW5hcyB2aXRhZSB2aXZlcnJhIHRlbGx1cy4gSW50ZWdlciBpbiBncmF2aWRhIG51bmMuIE51bmMgbmlzaSBxdWFtLCBmYXVjaWJ1cyBlZ2V0IGNvbnZhbGxpcyBzaXQgYW1ldCwgZGlnbmlzc2ltIHNpdCBhbWV0IGVzdC4gU2VkIHBoYXJldHJhIHBvcnRhIGNvbW1vZG8uIE51bGxhIGZhY2lsaXNpLiBEdWlzIHNlZCB1cm5hIG9yY2kuIEFsaXF1YW0gbGliZXJvIHNhcGllbiwgYmliZW5kdW0gdmVsIGxhY3VzIG5lYywgZWdlc3RhcyBibGFuZGl0IGxpYmVyby4gU3VzcGVuZGlzc2UgZWxlaWZlbmQgbG9ib3J0aXMgbWksIHZlbmVuYXRpcyBlZ2VzdGFzIGZlbGlzIHNvbGxpY2l0dWRpbiBub24uIE1vcmJpIHRpbmNpZHVudCBhdWd1ZSBhdWd1ZSwgaWQgaW1wZXJkaWV0IHZlbGl0IGlhY3VsaXMgbmVjLiBQcmFlc2VudCBhIG1hZ25hIGJsYW5kaXQsIGZlcm1lbnR1bSBtYXVyaXMgYWxpcXVldCwgdm9sdXRwYXQgbnVsbGEuIE5hbSBydXRydW0gYW50ZSBhdWN0b3IgcHVydXMgcnV0cnVtIG1heGltdXMgc2VkIHZlbCBsYWN1cy4gTnVsbGFtIGNvbnNlcXVhdCBkdWkgcnV0cnVtIGx1Y3R1cyBzYWdpdHRpcy4gTnVuYyBmYXVjaWJ1cywgbmVxdWUgdGVtcHVzIGFjY3Vtc2FuIGVsZWlmZW5kLCBzZW0gb2RpbyBhbGlxdWV0IHR1cnBpcywgY29uc2VjdGV0dXIgdWx0cmljaWVzIHNlbSBtaSBpZCBtYXVyaXMuIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gU2VkIGZyaW5naWxsYSBtZXR1cyBpZCBhbnRlIGFsaXF1ZXQgYXVjdG9yLiBTZWQgZXQgbmlzbCBsYWN1cy4NCg0KUGhhc2VsbHVzIG1vbGVzdGllIG5lcXVlIGZlbGlzLCBhYyBwaGFyZXRyYSBtZXR1cyBtb2xsaXMgdml0YWUuIFF1aXNxdWUgdnVscHV0YXRlIGR1aSBlbGVtZW50dW0gZXJvcyBkaWN0dW0sIGxvYm9ydGlzIGxhY2luaWEgbGVjdHVzIGNvbmd1ZS4gUHJvaW4gZWxlaWZlbmQgdGVsbHVzIG5lcXVlLCBub24gZmVybWVudHVtIGF1Z3VlIHNvZGFsZXMgdXQuIE5hbSBsYW9yZWV0IG1hdHRpcyB0dXJwaXMsIGVnZXQgZGlnbmlzc2ltIGVyb3MgdGluY2lkdW50IHNpdCBhbWV0LiBEdWlzIGVsaXQgZXgsIGV1aXNtb2QgcXVpcyBkdWkgc2VkLCBhbGlxdWV0IHZpdmVycmEgcHVydXMuIE51bGxhIGVmZmljaXR1ciBtYXR0aXMgdGVsbHVzIHNpdCBhbWV0IGxhb3JlZXQuIFZlc3RpYnVsdW0gZXQgbmVxdWUgYSBtYWduYSBhdWN0b3IgYmxhbmRpdCBuZWMgZWdldCBtYXVyaXMuIFNlZCB0dXJwaXMgdXJuYSwgb3JuYXJlIG5vbiBtYWduYSBldCwgZXVpc21vZCBhbGlxdWV0IGlwc3VtLiBTZWQgbW9sZXN0aWUgbGlndWxhIG5vbiBlbmltIGdyYXZpZGEgcG9ydHRpdG9yLiBQcmFlc2VudCB2aXRhZSBoZW5kcmVyaXQgdXJuYS4gVmVzdGlidWx1bSBwZWxsZW50ZXNxdWUgc2VtIHNpdCBhbWV0IGRpYW0gbWF4aW11cyB2b2x1dHBhdC4gQ3JhcyB2aXZlcnJhIGVmZmljaXR1ciBxdWFtLCBldSBjb21tb2RvIHNhcGllbiBjb25zZXF1YXQgZWdldC4gQWVuZWFuIHBvcnR0aXRvciBzYWdpdHRpcyBsYWN1cyBub24gc2NlbGVyaXNxdWUuDQoNClByYWVzZW50IHRlbXBvciBlbGl0IHJ1dHJ1bSBtYWxlc3VhZGEgZGFwaWJ1cy4gUGVsbGVudGVzcXVlIHRpbmNpZHVudCBsZWN0dXMgdXQgYXVjdG9yIHJ1dHJ1bS4gTWF1cmlzIHV0IGFjY3Vtc2FuIG5pc2ksIGF0IHZlbmVuYXRpcyBuaXNsLiBTdXNwZW5kaXNzZSB2ZWwganVzdG8gbW9sZXN0aWUsIHJ1dHJ1bSBxdWFtIHNpdCBhbWV0LCBncmF2aWRhIGxlY3R1cy4gTmFtIGNvbnNlcXVhdCBsYWN1cyBuZWMgbGlndWxhIGNvbmRpbWVudHVtLCBzaXQgYW1ldCBhbGlxdWFtIHRvcnRvciBiaWJlbmR1bS4gQ3VyYWJpdHVyIG5lYyB2ZW5lbmF0aXMgcmlzdXMuIFZpdmFtdXMgdXQgcXVhbSBpbiBleCBmaW5pYnVzIGVmZmljaXR1ciBub24gdml0YWUgbG9yZW0uIFNlZCBlbGVpZmVuZCB0dXJwaXMgYWMgcHVydXMgbGFvcmVldCBpbXBlcmRpZXQuDQoNCkludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gU2VkIGV4IHRvcnRvciwgZWdlc3RhcyBuZWMgYXVjdG9yIHNpdCBhbWV0LCBsYW9yZWV0IHRlbXBvciB1cm5hLiBVdCBldSBudWxsYSBldCB1cm5hIGxhY2luaWEgbW9sZXN0aWUgdml0YWUgZXUgbWF1cmlzLiBOdWxsYW0gZmF1Y2lidXMgbWF4aW11cyBuZXF1ZSBhYyB0cmlzdGlxdWUuIE5hbSBxdWlzIGZhY2lsaXNpcyBtaSwgcXVpcyBhdWN0b3IgZW5pbS4gTnVuYyBhbGlxdWV0IG1pIG1pLCBpbiBtb2xsaXMgZG9sb3IgdWx0cmljaWVzIHNpdCBhbWV0LiBTZWQgdmVsIHNjZWxlcmlzcXVlIGFudGUsIHF1aXMgZWZmaWNpdHVyIG1hc3NhLiBEb25lYyBhIHRlbXBvciBqdXN0by4gTnVsbGEgZmFjaWxpc2kuDQoNCkNyYXMgcGVsbGVudGVzcXVlIGVuaW0gYSBxdWFtIGRhcGlidXMsIHNlZCB0aW5jaWR1bnQgZG9sb3IgYWxpcXVldC4gUHJhZXNlbnQgZXUgbmVxdWUgbnVuYy4gUHJvaW4gbG9ib3J0aXMgdmVuZW5hdGlzIGNvbnZhbGxpcy4gTnVsbGFtIHRlbXB1cyBuaWJoIGVsZW1lbnR1bSBtYWduYSBmYXVjaWJ1cyBkaWN0dW0uIEluIGZpbmlidXMgaGVuZHJlcml0IG1hbGVzdWFkYS4gTW9yYmkgaW50ZXJkdW0gZWdlc3RhcyBsaWJlcm8gdmVsIHNhZ2l0dGlzLiBEb25lYyBjb25zZXF1YXQgZXN0IGp1c3RvLCBldCBkaWN0dW0gbmliaCBzYWdpdHRpcyB1dC4gVmVzdGlidWx1bSB2ZXN0aWJ1bHVtIHRlbXB1cyBhcmN1IHZpdGFlIHZlaGljdWxhLg0KDQpQaGFzZWxsdXMgYSBuaXNsIG1hbGVzdWFkYSwgcGhhcmV0cmEgZHVpIHNpdCBhbWV0LCB1bHRyaWNpZXMgZXJvcy4gU2VkIGFsaXF1YW0gZWxpdCBxdWlzIGVsaXQgcG9ydHRpdG9yLCB2aXRhZSB0ZW1wb3Igb3JjaSBjb21tb2RvLiBOYW0gc2VtcGVyIHBsYWNlcmF0IGlwc3VtLCBxdWlzIGludGVyZHVtIGV4IHRyaXN0aXF1ZSBlZ2V0LiBQcm9pbiB2ZWhpY3VsYSBkb2xvciBlZ2V0IGRpYW0gZWZmaWNpdHVyIG1hbGVzdWFkYS4gU2VkIGxvYm9ydGlzLCB0dXJwaXMgZWdldCBkaWduaXNzaW0gbWFsZXN1YWRhLCBmZWxpcyBuZXF1ZSBwb3N1ZXJlIGp1c3RvLCBhYyBzYWdpdHRpcyBlc3QgZXJvcyBpZCB1cm5hLiBRdWlzcXVlIG1hdHRpcyBzZW0gaWQgZW5pbSBydXRydW0sIG1heGltdXMgbGFvcmVldCBsYWN1cyBwb3J0dGl0b3IuIE1hZWNlbmFzIHV0IGRpYW0gYWMgZHVpIGludGVyZHVtIHNhZ2l0dGlzIGV0IGF0IGxlY3R1cy4gU3VzcGVuZGlzc2UgY29uc2VxdWF0IGxhY3VzIGluIG51bmMgZmFjaWxpc2lzLCBldCByaG9uY3VzIHRlbGx1cyBwZWxsZW50ZXNxdWUuDQoNCkZ1c2NlIHRpbmNpZHVudCBkaWN0dW0gdGVtcG9yLiBNYXVyaXMgbmVjIHRlbGx1cyBwb3N1ZXJlIG9kaW8gaGVuZHJlcml0IHNvZGFsZXMuIENyYXMgc2l0IGFtZXQgZGFwaWJ1cyB2ZWxpdC4gQ3JhcyByaXN1cyB0dXJwaXMsIHZlaGljdWxhIHNlZCBsb2JvcnRpcyBub24sIHZvbHV0cGF0IHV0IGxlby4gSW50ZWdlciBhdCBlZmZpY2l0dXIgcmlzdXMsIG5lYyB2b2x1dHBhdCB0dXJwaXMuIFBoYXNlbGx1cyBpbiBhcmN1IHNlZCBudW5jIHZhcml1cyBlbGVpZmVuZCB1dCBuZWMgZHVpLiBEb25lYyBwaGFyZXRyYSBhcmN1IGVnZXQgZHVpIGNvbnNlY3RldHVyLCBldCBzZW1wZXIgZWxpdCBydXRydW0uIEludGVnZXIgcXVpcyBvcm5hcmUgbmlzbCwgZXQgc2NlbGVyaXNxdWUgZW5pbS4gSW4gbGliZXJvIGxpZ3VsYSwgcG9ydHRpdG9yIG5vbiBlbmltIGEsIHNjZWxlcmlzcXVlIG1vbGVzdGllIG5pYmguDQoNClNlZCB0cmlzdGlxdWUgYXVjdG9yIHRlbGx1cyBpZCBmYWNpbGlzaXMuIFF1aXNxdWUgbGFvcmVldCBhdWN0b3IgbWFzc2EgdXQgdmVuZW5hdGlzLiBTZWQgZWxlbWVudHVtIHF1aXMgbmVxdWUgbm9uIGFjY3Vtc2FuLiBTdXNwZW5kaXNzZSBlcm9zIGp1c3RvLCB0ZW1wdXMgZGFwaWJ1cyBmYWNpbGlzaXMgZWdldCwgdmVoaWN1bGEgZXUgbWFnbmEuIENyYXMgc29kYWxlcyBtYXVyaXMgYWMgdGluY2lkdW50IHBlbGxlbnRlc3F1ZS4gVmVzdGlidWx1bSBoZW5kcmVyaXQgZGljdHVtIGxlY3R1cywgcXVpcyB0ZW1wb3IgdHVycGlzLiBNb3JiaSBvZGlvIHJpc3VzLCB1bGxhbWNvcnBlciBhYyBxdWFtIHZlbCwgbWF0dGlzIGRpY3R1bSBtYWduYS4gVml2YW11cyBpbiBkdWkgZGlhbS4gTnVsbGEgbm9uIHRyaXN0aXF1ZSBsZWN0dXMsIHF1aXMgaWFjdWxpcyBtYWduYS4gU2VkIHZlbCBuaXNpIGEgYW50ZSBhbGlxdWV0IGFjY3Vtc2FuLiBTdXNwZW5kaXNzZSBkYXBpYnVzIGxhY3VzIHJpc3VzLCBhdCB2dWxwdXRhdGUgc2FwaWVuIGZhdWNpYnVzIG5vbi4gU2VkIGNvbnZhbGxpcyBudW5jIHZlbCByaXN1cyBsdWN0dXMgbWF4aW11cy4gUHJhZXNlbnQgYSBudWxsYSB0ZW1wdXMsIHZhcml1cyBlbmltIG5vbiwgYWxpcXVhbSB0ZWxsdXMuIFZlc3RpYnVsdW0gbm9uIG1hc3NhIGlkIGRpYW0gYWxpcXVhbSBzdXNjaXBpdCBub24gbmVjIHB1cnVzLiBWaXZhbXVzIGN1cnN1cyBkaWN0dW0gcmlzdXMgaWQgdnVscHV0YXRlLiBJbiBjb21tb2RvIHBvcnRhIHRlbGx1cywgc2VkIHBoYXJldHJhIG1hdXJpcyB2ZWhpY3VsYSB2ZWwu"
                    }
                }
            ]
        }
    }
];


/***/ }),

/***/ "./src/app/data/resources/immunizations.ts":
/*!*************************************************!*\
  !*** ./src/app/data/resources/immunizations.ts ***!
  \*************************************************/
/*! exports provided: IMMUNIZATIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMMUNIZATIONS", function() { return IMMUNIZATIONS; });
// tslint:disable:quotemark
var IMMUNIZATIONS = [
    {
        id: 1,
        name: 'General Example',
        resource: {
            "resourceType": "Immunization",
            "vaccineCode": {
                "coding": [
                    {
                        "system": "urn:oid:1.2.36.1.2001.1005.17",
                        "code": "FLUVAX"
                    }
                ],
                "text": "Fluvax (Influenza)"
            },
            "date": "2013-01-10",
            "manufacturer": {
                "reference": "Organization/hl7"
            },
            "lotNumber": "AAJN11K",
            "expirationDate": "2015-02-15",
            "site": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/v3/ActSite",
                        "code": "LA",
                        "display": "left arm"
                    }
                ]
            },
            "route": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/v3/RouteOfAdministration",
                        "code": "IM",
                        "display": "Injection, intramuscular"
                    }
                ]
            },
            "note": [
                {
                    "text": "Notes on adminstration of vaccine"
                }
            ]
        }
    }
];


/***/ }),

/***/ "./src/app/data/resources/medicationStatement.ts":
/*!*******************************************************!*\
  !*** ./src/app/data/resources/medicationStatement.ts ***!
  \*******************************************************/
/*! exports provided: MEDICATION_STATEMENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDICATION_STATEMENTS", function() { return MEDICATION_STATEMENTS; });
// tslint:disable:quotemark
var MEDICATION_STATEMENTS = [
    {
        id: 1,
        name: 'General Example',
        resource: {
            "resourceType": "MedicationStatement",
            "contained": [
                {
                    "resourceType": "Medication",
                    "id": "medc011e2c9-25ba-4319-9bf9-dc023c21e82c",
                    "extension": [
                        {
                            "url": "https://fhir.chbase.com/fhir/stu3/StructuredDefinition/medication",
                            "extension": [
                                {
                                    "url": "generic-name",
                                    "valueCodeableConcept": {
                                        "coding": [
                                            {
                                                "system": "http://hl7.org/fhir/sid/ndc",
                                                "code": "50580-506-02",
                                                "display": "Tylenol PM"
                                            }
                                        ],
                                        "text": "Tylenol PM"
                                    }
                                },
                                {
                                    "url": "strength",
                                    "extension": [
                                        {
                                            "url": "display",
                                            "valueString": "600mg"
                                        },
                                        {
                                            "url": "quantity",
                                            "valueQuantity": {
                                                "value": 3,
                                                "unit": "tab",
                                                "system": "http://hl7.org/fhir/v3/orderableDrugForm",
                                                "code": "tab"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/sid/ndc",
                                "code": "50580-506-02",
                                "display": "Tylenol PM"
                            }
                        ],
                        "text": "Tylenol PM"
                    }
                }
            ],
            "medicationReference": {
                "reference": "#medc011e2c9-25ba-4319-9bf9-dc023c21e82c"
            },
            "dosage": [
                {
                    "text": "3 Tablets per day",
                    "timing": {
                        "repeat": {
                            "period": 3
                        }
                    },
                    "route": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "260548002",
                                "display": "Oral"
                            }
                        ],
                        "text": "By mouth"
                    },
                    "doseQuantity": {
                        "value": 3,
                        "unit": "tab",
                        "system": "http://hl7.org/fhir/v3/orderableDrugForm",
                        "code": "tab"
                    }
                }
            ]
        }
    }
];


/***/ }),

/***/ "./src/app/data/resources/observations.ts":
/*!************************************************!*\
  !*** ./src/app/data/resources/observations.ts ***!
  \************************************************/
/*! exports provided: OBSERVATIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBSERVATIONS", function() { return OBSERVATIONS; });
// tslint:disable:quotemark
var OBSERVATIONS = [
    {
        id: 1,
        name: 'Blank',
        resource: {
            "resourceType": "Observation"
        }
    },
    {
        id: 2,
        name: 'Weight',
        resource: {
            "resourceType": "Observation",
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "29463-7",
                        "display": "Body Weight"
                    }
                ]
            },
            "effectiveDateTime": "2016-03-28",
            "valueQuantity": {
                "value": 185,
                "unit": "lbs",
                "system": "http://unitsofmeasure.org",
                "code": "[lb_av]"
            }
        }
    },
    {
        id: 3,
        name: 'Height',
        resource: {
            "resourceType": "Observation",
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "8302-2",
                        "display": "Body height"
                    }
                ],
                "text": "Body height"
            },
            "effectiveDateTime": "1999-07-02",
            "valueQuantity": {
                "value": 66.899999999999991,
                "unit": "in",
                "system": "http://unitsofmeasure.org",
                "code": "[in_i]"
            }
        }
    },
    {
        id: 4,
        name: 'Length',
        resource: {
            "resourceType": "Observation",
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "8306-3",
                        "display": "Body height --lying"
                    }
                ],
                "text": "Body Length"
            },
            "effectiveDateTime": "1999-07-02",
            "valueQuantity": {
                "value": 25,
                "unit": "cm",
                "system": "http://unitsofmeasure.org",
                "code": "cm"
            }
        }
    },
    {
        id: 5,
        name: 'Heart Rate',
        resource: {
            "resourceType": "Observation",
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "8867-4",
                        "display": "Heart rate"
                    }
                ],
                "text": "Heart rate"
            },
            "effectiveDateTime": "1999-07-02",
            "valueQuantity": {
                "value": 44,
                "unit": "beats/minute",
                "system": "http://unitsofmeasure.org",
                "code": "/min"
            }
        }
    },
    {
        id: 6,
        name: 'Blood Pressure',
        resource: {
            "resourceType": "Observation",
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ]
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "85354-9",
                        "display": "Bood pressure panel with all children optional"
                    }
                ],
                "text": "Blood pressure systolic & diastolic"
            },
            "effectiveDateTime": "2012-09-17",
            "component": [
                {
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8480-6",
                                "display": "Systolic blood pressure"
                            },
                            {
                                "system": "http://snomed.info/sct",
                                "code": "271649006",
                                "display": "Systolic blood pressure"
                            },
                            {
                                "system": "http://acme.org/devices/clinical-codes",
                                "code": "bp-s",
                                "display": "Systolic Blood pressure"
                            }
                        ]
                    },
                    "valueQuantity": {
                        "value": 107,
                        "unit": "mmHg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mm[Hg]"
                    }
                },
                {
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8462-4",
                                "display": "Diastolic blood pressure"
                            }
                        ]
                    },
                    "valueQuantity": {
                        "value": 60,
                        "unit": "mmHg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mm[Hg]"
                    }
                }
            ]
        }
    },
    {
        id: 7,
        name: 'Blood Glucose',
        resource: {
            "resourceType": "Observation",
            "status": "final",
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "15074-8",
                        "display": "Glucose [Moles/volume] in Blood"
                    }
                ]
            },
            "effectivePeriod": {
                "start": "2013-04-02T09:30:10+01:00"
            },
            "valueQuantity": {
                "value": 6.3,
                "unit": "mmol/l",
                "system": "http://unitsofmeasure.org",
                "code": "mmol/L"
            }
        }
    },
    {
        id: 8,
        name: 'Vitals Panel',
        resource: {
            "resourceType": "Observation",
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "85353-1",
                        "display": "Vital signs, weight, height, head circumference, oxygen saturation and BMI panel"
                    }
                ],
                "text": "Vital signs Panel"
            },
            "effectiveDateTime": "1999-07-02",
            "contained": [
                {
                    "resourceType": "Observation",
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "Heart rate"
                            }
                        ],
                        "text": "Heart rate"
                    },
                    "effectiveDateTime": "1999-07-02",
                    "valueQuantity": {
                        "value": 44,
                        "unit": "beats/minute",
                        "system": "http://unitsofmeasure.org",
                        "code": "/min"
                    }
                },
                {
                    "resourceType": "Observation",
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "29463-7",
                                "display": "Body Weight"
                            }
                        ]
                    },
                    "effectiveDateTime": "2016-03-28",
                    "valueQuantity": {
                        "value": 185,
                        "unit": "lbs",
                        "system": "http://unitsofmeasure.org",
                        "code": "[lb_av]"
                    }
                }
            ]
        }
    },
    {
        id: 9,
        name: 'Exercise',
        resource: {
            "resourceType": "Observation",
            "text": {
                "div": "New Swim"
            },
            "extension": [
                {
                    "url": "https://developer.chbase.com/fhir/stu3/StructuredDefinition/thing-flags",
                    "valueString": "None"
                },
                {
                    "url": "https://developer.chbase.com/fhir/stu3/StructuredDefinition/thing-state",
                    "valueString": "Active"
                },
                {
                    "url": "https://developer.chbase.com/fhir/stu3/StructuredDefinition/exercise-detail",
                    "extension": [
                        {
                            "url": "name",
                            "valueString": "lap 1"
                        },
                        {
                            "url": "type",
                            "valueCoding": {
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/exercise-activities",
                                "version": "1",
                                "code": "swimming"
                            }
                        },
                        {
                            "url": "value",
                            "valueQuantity": {
                                "value": 30,
                                "unit": "seconds",
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/duration-units",
                                "code": "s"
                            }
                        }
                    ]
                },
                {
                    "url": "https://developer.chbase.com/fhir/stu3/StructuredDefinition/exercise-detail",
                    "extension": [
                        {
                            "url": "name",
                            "valueString": "lap 2"
                        },
                        {
                            "url": "type",
                            "valueCoding": {
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/exercise-activities",
                                "version": "1",
                                "code": "swimming"
                            }
                        },
                        {
                            "url": "value",
                            "valueQuantity": {
                                "value": 28,
                                "unit": "seconds",
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/duration-units",
                                "code": "s"
                            }
                        }
                    ]
                },
                {
                    "url": "https://developer.chbase.com/fhir/stu3/StructuredDefinition/exercise-segment",
                    "extension": [
                        {
                            "url": "activity",
                            "valueCodeableConcept": {
                                "coding": [
                                    {
                                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/exercise-activities",
                                        "version": "1",
                                        "code": "swimming"
                                    }
                                ],
                                "text": "Swimming"
                            }
                        },
                        {
                            "url": "title",
                            "valueString": "Segment 1"
                        },
                        {
                            "url": "duration",
                            "valueDecimal": 180
                        },
                        {
                            "url": "distance",
                            "valueQuantity": {
                                "value": 31.5,
                                "unit": "m"
                            }
                        },
                        {
                            "url": "offset",
                            "valueDecimal": 43.3
                        },
                        {
                            "url": "https://developer.chbase.com/fhir/stu3/StructuredDefinition/exercise-detail",
                            "extension": [
                                {
                                    "url": "name",
                                    "valueString": "segment 1 - lap 1"
                                },
                                {
                                    "url": "type",
                                    "valueCoding": {
                                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/exercise-activities",
                                        "version": "1",
                                        "code": "swimming"
                                    }
                                },
                                {
                                    "url": "value",
                                    "valueQuantity": {
                                        "value": 46.2,
                                        "unit": "seconds",
                                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/duration-units",
                                        "code": "s"
                                    }
                                }
                            ]
                        },
                        {
                            "url": "https://developer.chbase.com/fhir/stu3/StructuredDefinition/exercise-detail",
                            "extension": [
                                {
                                    "url": "name",
                                    "valueString": "segment 1 - lap 2"
                                },
                                {
                                    "url": "type",
                                    "valueCoding": {
                                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/exercise-activities",
                                        "version": "1",
                                        "code": "swimming"
                                    }
                                },
                                {
                                    "url": "value",
                                    "valueQuantity": {
                                        "value": 21,
                                        "unit": "seconds",
                                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/duration-units",
                                        "code": "s"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            "status": "final",
            "code": {
                "coding": [
                    {
                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/thing-type-names",
                        "version": "1",
                        "code": "txtNameexercise",
                        "display": "Exercise"
                    }
                ]
            },
            "effectiveDateTime": "2017-08-25T16:05:54.081-07:00",
            "component": [
                {
                    "code": {
                        "text": "exercise-distance"
                    },
                    "valueQuantity": {
                        "value": 30,
                        "unit": "m",
                        "system": "http://unitsofmeasure.org",
                        "code": "m"
                    }
                },
                {
                    "code": {
                        "text": "exercise-duration"
                    },
                    "valueQuantity": {
                        "value": 10,
                        "unit": "min",
                        "system": "http://unitsofmeasure.org",
                        "code": "min"
                    }
                },
                {
                    "code": {
                        "text": "exercise-activity"
                    },
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/exercise-activities",
                                "version": "1",
                                "code": "swimming"
                            }
                        ],
                        "text": "Swimming"
                    }
                }
            ]
        }
    },
    {
        id: 10,
        name: 'Sleep Journal',
        resource: {
            "resourceType": "Observation",
            "extension": [
                {
                    "url": "https://developer.chbase.com/fhir/stu3/ValueSet/fhir-extensions/thing-flags",
                    "valueString": "None"
                },
                {
                    "url": "https://developer.chbase.com/fhir/stu3/ValueSet/fhir-extensions/thing-state",
                    "valueString": "Active"
                }
            ],
            "status": "final",
            "code": {
                "coding": [
                    {
                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/thing-type-names",
                        "version": "1",
                        "code": "txtNamesleepjournal-am",
                        "display": "\tSleep session"
                    }
                ]
            },
            "effectiveDateTime": "2017-08-29T16:24:44.25-07:00",
            "component": [
                {
                    "code": {
                        "text": "sleep-journal-bed-time"
                    },
                    "valueTime": "22:30:00.9"
                },
                {
                    "code": {
                        "text": "sleep-journal-wake-time"
                    },
                    "valueTime": "06:28:59.1823"
                },
                {
                    "code": {
                        "text": "sleep-journal-sleep-minutes"
                    },
                    "valueQuantity": {
                        "value": 100,
                        "unit": "min",
                        "system": "http://unitsofmeasure.org",
                        "code": "min"
                    }
                },
                {
                    "code": {
                        "text": "sleep-journal-settling-minutes"
                    },
                    "valueQuantity": {
                        "value": 110,
                        "unit": "min",
                        "system": "http://unitsofmeasure.org",
                        "code": "min"
                    }
                },
                {
                    "code": {
                        "text": "sleep-journal-awakening"
                    },
                    "valuePeriod": {
                        "start": "2017-08-29T23:30:00-07:00",
                        "end": "2017-08-30T00:10:00-07:00"
                    }
                },
                {
                    "code": {
                        "text": "sleep-journal-awakening"
                    },
                    "valuePeriod": {
                        "start": "2017-08-29T00:30:00-07:00",
                        "end": "2017-08-29T00:40:00-07:00"
                    }
                },
                {
                    "code": {
                        "text": "sleep-journal-wake-state"
                    },
                    "valueString": "Tired"
                },
                {
                    "code": {
                        "text": "sleep-journal-medication"
                    },
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/RxNorm/Mayo",
                                "version": "2",
                                "code": "ccabbac8-58f0-4e88-a1eb-538e21e7524d"
                            }
                        ],
                        "text": "Benzaclin"
                    }
                }
            ]
        }
    },
    {
        id: 11,
        name: 'Body Composition',
        resource: {
            "resourceType": "Observation",
            "extension": [
                {
                    "url": "https://developer.chbase.com/fhir/stu3/ValueSet/fhir-extensions/thing-flags",
                    "valueString": "None"
                },
                {
                    "url": "https://developer.chbase.com/fhir/stu3/ValueSet/fhir-extensions/thing-state",
                    "valueString": "Active"
                }
            ],
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/thing-type-names",
                        "version": "1",
                        "code": "txtNamebody-composition",
                        "display": "Body composition"
                    }
                ]
            },
            "effectiveDateTime": "2017-08-03T08:30:01-07:00",
            "bodySite": {
                "coding": [
                    {
                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/body-composition-sites",
                        "version": "1",
                        "code": "Trunk"
                    }
                ],
                "text": "Trunk"
            },
            "method": {
                "coding": [
                    {
                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/body-composition-measurement-methods",
                        "version": "1",
                        "code": "DXA"
                    }
                ],
                "text": "DXA/DEXA"
            },
            "component": [
                {
                    "code": {
                        "coding": [
                            {
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/body-composition-measurement-names",
                                "version": "1",
                                "code": "fat-percent"
                            }
                        ],
                        "text": "Body fat percentage"
                    }
                },
                {
                    "code": {
                        "coding": [
                            {
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/body-composition-measurement-names",
                                "version": "1",
                                "code": "fat-percent"
                            }
                        ],
                        "text": "Body fat percentage"
                    },
                    "valueQuantity": {
                        "value": 10,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                {
                    "code": {
                        "coding": [
                            {
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/body-composition-measurement-names",
                                "version": "1",
                                "code": "fat-percent"
                            }
                        ],
                        "text": "Body fat percentage"
                    },
                    "valueQuantity": {
                        "value": 0.15,
                        "unit": "%",
                        "system": "http://unitsofmeasure.org",
                        "code": "%"
                    }
                }
            ]
        }
    },
    {
        id: 12,
        name: 'Body Dimension',
        resource: {
            "resourceType": "Observation",
            "extension": [
                {
                    "url": "https://developer.chbase.com/fhir/stu3/ValueSet/fhir-extensions/thing-flags",
                    "valueString": "None"
                },
                {
                    "url": "https://developer.chbase.com/fhir/stu3/ValueSet/fhir-extensions/thing-state",
                    "valueString": "Active"
                }
            ],
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/thing-type-names",
                        "version": "1",
                        "code": "txtNamebody-dimension",
                        "display": "Body dimension"
                    }
                ]
            },
            "effectiveDateTime": "2017-08-02T11:13:14-07:00",
            "valueQuantity": {
                "value": 0.15,
                "unit": "m",
                "system": "http://unitsofmeasure.org",
                "code": "m"
            },
            "method": {
                "coding": [
                    {
                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/body-dimension-measurement-names",
                        "version": "1",
                        "code": "BicepCircumferenceLeft"
                    }
                ],
                "text": "Left bicep size"
            }
        }
    }
];


/***/ }),

/***/ "./src/app/data/resources/procedures.ts":
/*!**********************************************!*\
  !*** ./src/app/data/resources/procedures.ts ***!
  \**********************************************/
/*! exports provided: PROCEDURES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCEDURES", function() { return PROCEDURES; });
// tslint:disable:quotemark
var PROCEDURES = [
    {
        id: 1,
        name: 'General Example',
        resource: {
            "resourceType": "Procedure",
            "code": {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "80146002",
                        "display": "Appendectomy (Procedure)"
                    }
                ],
                "text": "Appendectomy"
            },
            "performedDateTime": "2013-04-05",
            "performer": [
                {
                    "actor": {
                        "display": "Dr Cecil Surgeon"
                    }
                }
            ],
            "bodySite": [
                {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368225008",
                            "display": "Entire Left Forearm"
                        }
                    ],
                    "text": "Left forearm"
                }
            ],
        }
    }
];


/***/ }),

/***/ "./src/app/misc/auth-guard.ts":
/*!************************************!*\
  !*** ./src/app/misc/auth-guard.ts ***!
  \************************************/
/*! exports provided: AuthGaurd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurd", function() { return AuthGaurd; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Authentication Guard applied on all the routes, which requires a valid user context
 */
var AuthGaurd = /** @class */ (function () {
    function AuthGaurd(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGaurd.prototype.canActivate = function (route, state) {
        var _this = this;
        return this._authService.isLoggedIn
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this._router.navigate(['/index']);
                return false;
            }
            return true;
        }));
    };
    AuthGaurd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGaurd);
    return AuthGaurd;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global.service */ "./src/app/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Service which contains the methods to manage the logged in User
 */
var AuthService = /** @class */ (function () {
    function AuthService(_router, _globalService) {
        this._router = _router;
        this._globalService = _globalService;
        this.loggedIn = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    /**
     * Logout the active user. Clears the Session and navigates to the landing page.
     */
    AuthService.prototype.logout = function () {
        sessionStorage.clear();
        this.loggedIn.next(false);
        this._router.navigate(['/index']);
    };
    /**
     * Flags that a user has logged in to the application
     */
    AuthService.prototype.login = function () {
        this.loggedIn.next(true);
        this._router.navigate(['/resources/Patient']);
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        /**
         * Method called to check if there is an active user logged in to the application.
         * @returns {Observable<boolean>} Subscribers get notified when the state changes.
         */
        get: function () {
            if (sessionStorage.getItem('tokenResponse')) {
                this.loggedIn.next(true);
            }
            else {
                this.loggedIn.next(false);
            }
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/client-app.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/client-app.service.ts ***!
  \************************************************/
/*! exports provided: ClientAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAppService", function() { return ClientAppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_client_apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/client-apps */ "./src/app/data/client-apps.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Service to get the SMART on FHIR client applications defined against different servers.
 * The same sample application can be configured to work against different configured SMART on FHIR servers.
 * For this sample app, we are making using of a hardcoded array defined in client-app.ts
 */
var ClientAppService = /** @class */ (function () {
    function ClientAppService() {
        this._ehrLanchAppsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_data_client_apps__WEBPACK_IMPORTED_MODULE_2__["CLIENT_APPS"].filter(function (q) { return q.ehrLaunch === true; }));
        this._allClientAppSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_data_client_apps__WEBPACK_IMPORTED_MODULE_2__["CLIENT_APPS"]);
    }
    /**
     * Get all the SMART on FHIR client applications configured, which can act as a standalone patient facing application.
     */
    ClientAppService.prototype.getStandalonePatientApps = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            observer.next(_data_client_apps__WEBPACK_IMPORTED_MODULE_2__["CLIENT_APPS"].filter(function (q) { return q.standalonePatient === true; }));
            observer.complete();
        });
    };
    /**
    * Get all the SMART on FHIR client applications configured, which can be launch from an EHR system.
    */
    ClientAppService.prototype.getEhrLaunchApps = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            observer.next(_data_client_apps__WEBPACK_IMPORTED_MODULE_2__["CLIENT_APPS"].filter(function (q) { return q.ehrLaunch === true; }));
            observer.complete();
        });
    };
    /**
     * Get all the SMART on FHIR client applications configured for this sample application.
     */
    ClientAppService.prototype.getAllClientApps = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            observer.next(_data_client_apps__WEBPACK_IMPORTED_MODULE_2__["CLIENT_APPS"]);
            observer.complete();
        });
    };
    ClientAppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ClientAppService);
    return ClientAppService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_resources_observations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/resources/observations */ "./src/app/data/resources/observations.ts");
/* harmony import */ var _data_resources_conditions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/resources/conditions */ "./src/app/data/resources/conditions.ts");
/* harmony import */ var _data_resources_documentReferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/resources/documentReferences */ "./src/app/data/resources/documentReferences.ts");
/* harmony import */ var _data_resources_procedures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/resources/procedures */ "./src/app/data/resources/procedures.ts");
/* harmony import */ var _data_resources_medicationStatement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/resources/medicationStatement */ "./src/app/data/resources/medicationStatement.ts");
/* harmony import */ var _data_resources_allergyIntolerances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/resources/allergyIntolerances */ "./src/app/data/resources/allergyIntolerances.ts");
/* harmony import */ var _data_resources_immunizations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/resources/immunizations */ "./src/app/data/resources/immunizations.ts");
/* harmony import */ var _data_resources_diagnosticReports__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/resources/diagnosticReports */ "./src/app/data/resources/diagnosticReports.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getData = function (resourceType) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            switch (resourceType.toLocaleLowerCase()) {
                case 'observation':
                    observer.next(_data_resources_observations__WEBPACK_IMPORTED_MODULE_2__["OBSERVATIONS"]);
                    break;
                case 'condition':
                    observer.next(_data_resources_conditions__WEBPACK_IMPORTED_MODULE_3__["CONDITIONS"]);
                    break;
                case 'documentreference':
                    observer.next(_data_resources_documentReferences__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT_REFERENCES"]);
                    break;
                case 'procedure':
                    observer.next(_data_resources_procedures__WEBPACK_IMPORTED_MODULE_5__["PROCEDURES"]);
                    break;
                case 'medicationstatement':
                    observer.next(_data_resources_medicationStatement__WEBPACK_IMPORTED_MODULE_6__["MEDICATION_STATEMENTS"]);
                    break;
                case 'allergyintolerance':
                    observer.next(_data_resources_allergyIntolerances__WEBPACK_IMPORTED_MODULE_7__["ALLERGY_INTOLERANCES"]);
                    break;
                case 'immunization':
                    observer.next(_data_resources_immunizations__WEBPACK_IMPORTED_MODULE_8__["IMMUNIZATIONS"]);
                    break;
                case 'diagnosticreport':
                    observer.next(_data_resources_diagnosticReports__WEBPACK_IMPORTED_MODULE_9__["DIAGNOSTIC_REPORTS"]);
                    break;
            }
            observer.complete();
        });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/fhir-server.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/fhir-server.service.ts ***!
  \*************************************************/
/*! exports provided: FhirServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FhirServerService", function() { return FhirServerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_fhir_servers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/fhir-servers */ "./src/app/data/fhir-servers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Service to get the SMART on FHIR servers defined.
 * The same sample application can be configured to work against different configured SMART on FHIR servers.
 * For this sample app, we are making using of a hardcoded array defined in fhir-servers.ts
 */
var FhirServerService = /** @class */ (function () {
    function FhirServerService() {
    }
    /**
     * Fetch the SMART on FHIR server by the unique name defined
     * @param {string} uniqueName Unique name of the SMART on FHIR Server
     * @returns {Observable<FhirServer>} Observable to the FhirServer based on the uniqueName
     */
    FhirServerService.prototype.getServer = function (uniqueName) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            observer.next(_data_fhir_servers__WEBPACK_IMPORTED_MODULE_2__["FHIR_SERVERS"].find(function (q) { return q.uniqueName === uniqueName; }));
            observer.complete();
        });
    };
    /**
     * Fetch all the SMART on FHIR servers defined
     */
    FhirServerService.prototype.getAllServers = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            observer.next(_data_fhir_servers__WEBPACK_IMPORTED_MODULE_2__["FHIR_SERVERS"]);
            observer.complete();
        });
    };
    FhirServerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FhirServerService);
    return FhirServerService;
}());



/***/ }),

/***/ "./src/app/services/global.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Service which acts as Global Event Bus
 * Only use to set the error object from various components.
 */
var GlobalService = /** @class */ (function () {
    function GlobalService(_route) {
        this._route = _route;
        this._error = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    /**
     * Method to publish that an application wide error has occured.
     * @param error Error object
     */
    GlobalService.prototype.setError = function (error) {
        this._error.next(error);
    };
    /**
     * Get the last error published anywhere in the application via setError method
     * Subscribed in the AppComponent and an Error Modal screen is shown when ever an error occurs.
     */
    GlobalService.prototype.getError = function () {
        return this._error.asObservable();
    };
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/services/helper.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/helper.service.ts ***!
  \********************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Service containing the helper methods
 * Check if the resource is supported by the server, if the user has scope to a particular resource etc
 */
var HelperService = /** @class */ (function () {
    function HelperService() {
    }
    /**
     * Method to parse the capability statement and retrive the search parameters of a particular resource type.
     * @param conformance Capability statement of the SMART on FHIR server
     * @param resourceType Type of FHIR resource
     * @returns {any[]} The list of search parameters
     */
    HelperService.prototype.searchParamsSupported = function (conformance, resourceType) {
        if (conformance && conformance.rest
            && conformance.rest.length > 0 && conformance.rest[0].resource
            && conformance.rest[0].resource.length > 0
            && resourceType) {
            var resourceTypeConformance = conformance.rest[0].resource.find(function (q) { return q.type === resourceType; });
            if (resourceTypeConformance && resourceTypeConformance.searchParam && resourceTypeConformance.searchParam.length > 0) {
                return resourceTypeConformance.searchParam;
            }
        }
        return [];
    };
    /**
     * Get the list of resource types that the current user has scopes and ther server supports.
     * @param conformance Capability statement of the SMART on FHIR server
     * @param scopes Scopes available for the current user
     * @param interaction The operation we are try to check eg. read, create, update, delete
     * @returns {any[]} List of resource types supported.
     */
    HelperService.prototype.resourcesSupported = function (conformance, scopes, interaction) {
        if (conformance && conformance.rest
            && conformance.rest.length > 0 && conformance.rest[0].resource
            && conformance.rest[0].resource.length > 0) {
            return conformance.rest[0].resource
                .filter(function (q) { return (q.interaction.findIndex(function (x) { return x.code === interaction; }) !== -1); })
                .map(function (y) { return y.type; })
                .filter(function (q) {
                if (scopes) {
                    return scopes.toLowerCase().indexOf(q.toLowerCase() + '.' + interaction) !== -1 ||
                        scopes.toLowerCase().indexOf(q.toLowerCase() + '.*') !== -1 ||
                        scopes.toLowerCase().indexOf('patient/*.*') !== -1;
                }
                else {
                    return true;
                }
            });
        }
        return [];
    };
    /**
     * Check if the logged in user has the required scope along with the server capability to perform the specific operation
     * for a specific type of FHIR resource.
     * @param conformance Capability statement of the SMART on FHIR server
     * @param scopes Scopes available for the current user
     * @param interaction The operation we are try to check eg. read, create, update, delete
     * @param resourceType The type of FHIR resource
     * @returns {boolean} Has support or not
     */
    HelperService.prototype.hasSupport = function (conformance, scopes, resourceType, interaction) {
        var resourcesSupported = this.resourcesSupported(conformance, scopes, interaction);
        return resourcesSupported.findIndex(function (q) { return q === resourceType; }) !== -1;
    };
    /**
     * Easy method to deep clone an object
     * @param obj Object to be cloned
     */
    HelperService.prototype.clone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    /**
     * Helper method to find how many seconds until the passed data from now.
     * @param date The date we need to find the duration till
     */
    HelperService.prototype.howLong = function (date) {
        var currentDate = new Date();
        var dif = date.getTime() - currentDate.getTime();
        var seconds = Math.round(dif / 1000);
        return seconds;
    };
    /**
     * Helper method to parse JWT
     * @param {string} token JWT
     * @returns {any} Object
     */
    HelperService.prototype.parseJwt = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
    HelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AuthService, GlobalService, ClientAppService, FhirServerService, HelperService, SmartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _client_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-app.service */ "./src/app/services/client-app.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientAppService", function() { return _client_app_service__WEBPACK_IMPORTED_MODULE_1__["ClientAppService"]; });

/* harmony import */ var _fhir_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fhir-server.service */ "./src/app/services/fhir-server.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FhirServerService", function() { return _fhir_server_service__WEBPACK_IMPORTED_MODULE_2__["FhirServerService"]; });

/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global.service */ "./src/app/services/global.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]; });

/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper.service */ "./src/app/services/helper.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return _helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]; });

/* harmony import */ var _smart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smart.service */ "./src/app/services/smart.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SmartService", function() { return _smart_service__WEBPACK_IMPORTED_MODULE_5__["SmartService"]; });

/**
 * Barrel for all the services in this folder
 */








/***/ }),

/***/ "./src/app/services/smart.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/smart.service.ts ***!
  \*******************************************/
/*! exports provided: SmartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartService", function() { return SmartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/observable/timer */ "./node_modules/rxjs-compat/_esm5/observable/timer.js");
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper.service */ "./src/app/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Service which encapsulates the SMART on FHIR JS client and exposes methods to get an instance of the SMART Client
 * and perform API operations it.
 */
var SmartService = /** @class */ (function () {
    function SmartService(_globalService, _http, _helperService) {
        var _this = this;
        this._globalService = _globalService;
        this._http = _http;
        this._helperService = _helperService;
        /**
         * Cached copy of the SMART client
         */
        this._smartClient = null;
        this._smartClientSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        /**
         * Cached copy of the Server Conformance(Capability statement)
         */
        this._conformance = null;
        this._conformanceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this._accessTokenValidityLeft = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        /**
         * The callback function which is called when a SMART client is ready to be used by the client application.
         * THe SMART on FHIR JS client library FHIR.oauth2.ready() method will take care of
         * 1. fetching the access_token if the OAuth2.0 authorization flow is progress
         * 2. Intitialize the SMART Client with the current state of the application
         * (Client application configuration, Server configuration, Access Token, Scopes etc)
         */
        this.oauth2ReadyCallback = function (smartClient) {
            if (!_this._smartClient) {
                _this._smartClient = smartClient;
                _this._smartClientSubject.next(smartClient);
            }
        };
        /**
         * The callback function called when a SMART client is not initialized correctly
         */
        this.oauth2ReadyErrback = function (error) {
            // this._globalService.setError({ error: error });
        };
        /**
         * Callback method called once a SMART client is initialized. (Used by the getConformance method)
         * Used only if for some reason, the SMART Client was not initialized when the getConformance method is called.
         */
        this._oauth2ReadyCallbackConformance = function (smartClient) {
            _this._conformanceRequestInProgress = true;
            _this._smartClient.api.conformance({}).then(function (response) {
                _this._conformance = response.data;
                _this._conformanceRequestInProgress = false;
                _this._conformanceSubject.next(response.data);
            });
        };
        /**
         * Callback method used if the SMART Client is not initialized and the SMART OAuth ready method is called
         */
        this.oauth2ReadyCallbackRefreshToken = function (smartClient) {
            _this._refreshAccessToken(smartClient);
        };
    }
    /**
     * @returns {Observable<FHIR.SMART.SMARTClient>} Get a SMART on FHIR client using which the application can perform API calls
     *  and retrive state information.
     */
    SmartService.prototype.getClient = function () {
        FHIR.oauth2.ready(this.oauth2ReadyCallback, this.oauth2ReadyErrback);
        return this._smartClientSubject.asObservable();
    };
    /**
     * Method to reset the cached SMART client cached in the service.
     * eg. When the refresh token workflow is completed
     */
    SmartService.prototype.resetClient = function () {
        this._smartClientSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](0);
        this._smartClient = null;
    };
    /**
     * Method to get the Capability statement of the SMART on FHIR in context
     */
    SmartService.prototype.getConformance = function () {
        var _this = this;
        // If there is a request which is already in progress, we will avoid duplicate requests
        if (!this._conformanceRequestInProgress) {
            this._conformanceRequestInProgress = true;
            // If its already cached, use that
            if (!this._conformance && this._smartClient) {
                this._smartClient.api.conformance({}).then(function (response) {
                    _this._conformance = response.data;
                    _this._conformanceRequestInProgress = false;
                    _this._conformanceSubject.next(response.data);
                });
            }
            // If cache is empty and the SMART client is not initialized
            if (!this._conformance && !this._smartClient) {
                FHIR.oauth2.ready(this._oauth2ReadyCallbackConformance, this.oauth2ReadyErrback);
            }
        }
        return this._conformanceSubject.asObservable();
    };
    /**
     * Method which makes the OAuth2.0 refresh_token call and updates the access token in context.
     * @param smartClient SMART Client in context
     */
    SmartService.prototype._refreshAccessToken = function (smartClient) {
        var _this = this;
        var token_uri = smartClient.state.provider.oauth2.token_uri;
        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json, text/javascript, */*;'
        };
        if (smartClient.state.client.secret) {
            var authHeader = 'Basic ' + btoa(smartClient.state.client.client_id + ':' + smartClient.state.client.secret);
            headers['Authorization'] = authHeader;
        }
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"](headers);
        var httpOptions = {
            headers: httpHeaders,
            withCredentials: true
        };
        var refresh_token = this.getRefreshToken();
        var params = {
            'grant_type': 'refresh_token',
            'refresh_token': refresh_token
        };
        var bodyParams = Object.keys(params).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
        // Calling the Token endpoint to get the refresh token using the Angular HttpClient, since the SMART on FHIR JS client
        // does not provide a method
        this._http.post(token_uri, bodyParams, httpOptions).subscribe(function (response) {
            var existingTokenRespsonse = smartClient.tokenResponse;
            existingTokenRespsonse.access_token = response.access_token;
            existingTokenRespsonse.refresh_token = response.refresh_token;
            // The new tokenResponse is updated in the SessionStorage. The SMART on FHIR JS client makes use of this.
            sessionStorage.setItem('tokenResponse', JSON.stringify(existingTokenRespsonse));
            var expiresIn = existingTokenRespsonse.expires_in;
            var currentDate = new Date();
            var expiresOn = new Date();
            expiresOn.setSeconds(currentDate.getSeconds() + expiresIn);
            // Storing till when the access token is valid in SessionStorage, which will be used to display the countdown timer
            sessionStorage.setItem('tokenExpiresOn', expiresOn.toString());
            _this.resetClient();
        }, function (error) {
            _this._globalService.setError({ error: error });
        });
    };
    /**
     * Method to initiate an OAuth2.0 Refresh Token call
     */
    SmartService.prototype.refreshAccessToken = function () {
        if (!this._smartClient) {
            FHIR.oauth2.ready(this.oauth2ReadyCallbackRefreshToken, this.oauth2ReadyErrback);
        }
        else {
            this._refreshAccessToken(this._smartClient);
        }
    };
    /**
     * Get the refresh_token from the Token Response, if it exists
     */
    SmartService.prototype.getRefreshToken = function () {
        var tokenResponse = sessionStorage.getItem('tokenResponse');
        if (tokenResponse) {
            var token = JSON.parse(tokenResponse);
            if (token.refresh_token) {
                return token.refresh_token;
            }
        }
    };
    /**
     * Method to find the AccessToken Expiry
     * @returns {Observable<Number>} Number of seconds left for the access token to expire
     */
    SmartService.prototype.getTimeLeft = function () {
        var _this = this;
        // Makes use of the Observable timer to check every second if the token has expired and notifies the subscriber.
        var timerObservable = Object(rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, 1000);
        timerObservable.subscribe(function (x) {
            var tokenResponse = sessionStorage.getItem('tokenResponse');
            var tokenExpiresOn = sessionStorage.getItem('tokenExpiresOn');
            if (!tokenExpiresOn) {
                if (tokenResponse) {
                    var token = JSON.parse(tokenResponse);
                    var accessToken = token.access_token;
                    if (accessToken) {
                        if (accessToken !== _this._accessToken) {
                            _this._accessToken = accessToken;
                            var expiresIn = token.expires_in;
                            var currentDate = new Date();
                            var expiresOn = new Date();
                            expiresOn.setSeconds(currentDate.getSeconds() + expiresIn);
                            sessionStorage.setItem('tokenExpiresOn', expiresOn.toString());
                            var seconds = _this._helperService.howLong(expiresOn);
                            _this._accessTokenValidityLeft.next(seconds);
                        }
                    }
                }
                else {
                    _this._accessTokenValidityLeft.next(0);
                }
            }
            else {
                var getDiff = _this._helperService.howLong(new Date(tokenExpiresOn));
                if (getDiff >= 0) {
                    _this._accessTokenValidityLeft.next(getDiff);
                }
            }
        });
        return this._accessTokenValidityLeft.asObservable();
    };
    SmartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]])
    ], SmartService);
    return SmartService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GIT\smart-ng-fhir-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map