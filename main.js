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

module.exports = "<div>\r\n  <mat-toolbar color=\"primary\">\r\n    <button *ngIf=\"isLoggedIn$ | async\" mat-icon-button (click)=\"snav.toggle()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <span>Sample FHIR Application using Angular and SMART Javascript Client Library</span>\r\n    <span class=\"spacer\"></span>\r\n    <app-access-token-timer></app-access-token-timer>\r\n    <span class=\"min-padding\">\r\n      <button mat-raised-button (click)=\"requestResponseLog.toggle();\">Request Response Logs</button>\r\n    </span>\r\n    <span class=\"min-padding\" *ngIf=\"isLoggedIn$ | async\">\r\n      <button mat-raised-button color=\"warn\" *ngIf=\"canSwitchPatient\" (click)=\"switchPatient();snav.toggle();\">Switch Patient</button>\r\n    </span>\r\n    <span class=\"min-padding\">\r\n      <button mat-raised-button color=\"warn\" *ngIf=\"isLoggedIn$ | async\" (click)=\"logout();snav.toggle();\">Signout</button>\r\n    </span>\r\n  </mat-toolbar>\r\n  <mat-sidenav-container class=\"side-nav-container\">\r\n    <mat-sidenav #snav mode=\"side\" opened=\"false\">\r\n      <mat-nav-list *ngIf=\"isLoggedIn$ | async\">\r\n        <a routerLink=\"/conformance\" mat-list-item>Conformance</a>\r\n        <a routerLink=\"/state\" mat-list-item>State</a>\r\n        <a routerLink=\"/token\" mat-list-item>Access Token</a>\r\n        <a routerLink=\"/user-profile\" mat-list-item>User Profile</a>\r\n        <app-resources-menu></app-resources-menu>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav #requestResponseLog opened=\"false\" mode=\"side\" position=\"end\">\r\n      <app-request-response-log></app-request-response-log>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <div>\r\n        <div class=\"container\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>"

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

module.exports = "<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>\r\n    <div>{{title}}</div>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <mat-tab-group>\r\n      <mat-tab label=\"View\" *ngIf=\"!hideView\">\r\n        <ngx-json-viewer *ngIf=\"value\" [json]=\"value\"></ngx-json-viewer>\r\n      </mat-tab>\r\n      <mat-tab label=\"JSON\">\r\n        <ace-editor [text]=\"codeValue\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </mat-card-content>\r\n</mat-card>"

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

module.exports = "<div class=\"min-padding\" style=\"float: right;\">\r\n  <button mat-raised-button color=\"warn\" (click)=\"clearLogs()\">Cleare Logs</button>\r\n</div>\r\n<mat-accordion>\r\n  <mat-expansion-panel expanded>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Request Response Log\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Log of all the FHIR API requests made by this app.\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <div>\r\n      <div *ngFor=\"let log of logs\">\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                {{log.request.method}} {{log.response.status}} {{log.request.url}}\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <mat-tab-group>\r\n                    <mat-tab label=\"Body\">\r\n                      <ace-editor [text]=\"log.request.body\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Headers\">\r\n                      <ace-editor [text]=\"log.request.headers\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n                    </mat-tab>\r\n                  </mat-tab-group>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <mat-tab-group>\r\n                    <mat-tab label=\"Body\">\r\n                      <ace-editor [text]=\"log.response.data\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Headers\">\r\n                      <ace-editor [text]=\"log.response.headers\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n                    </mat-tab>\r\n                  </mat-tab-group>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </div>\r\n    </div>\r\n  </mat-expansion-panel>\r\n</mat-accordion>"

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

module.exports = "<mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\r\n<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>\r\n    <div class=\"row\">\r\n      <span>{{resourceType}} ID: {{id}}</span>\r\n      <span style=\"float: right\">\r\n        <button color=\"warn\" mat-raised-button *ngIf=\"canDelete\" (click)=\"delete()\">Delete</button>\r\n      </span>\r\n    </div>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <div>\r\n      <mat-tab-group [selectedIndex]=\"selectedTabIndex\">\r\n        <mat-tab *ngIf=\"resource\" label=\"JSON\">\r\n          <ace-editor [(text)]=\"code\" style=\"height:500px;\" [theme]=\"'eclipse'\" [autoUpdateContent]=\"false\"></ace-editor>\r\n        </mat-tab>\r\n        <mat-tab *ngIf=\"resource\" label=\"View\">\r\n          <ngx-json-viewer *ngIf=\"resource\" [json]=\"resource\"></ngx-json-viewer>\r\n        </mat-tab>\r\n        <mat-tab *ngIf=\"resourceRequest || resourceResponse\" label=\"Request-Response\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <h4>Request</h4>\r\n              <ace-editor [text]=\"codeResourceRequest\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <h4>Response</h4>\r\n              <ace-editor [text]=\"codeResourceResponse\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab *ngIf=\"error\" label=\"Error\">\r\n          <ace-editor *ngIf=\"error\" [text]=\"codeError\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-raised-button color=\"primary\" *ngIf=\"!error && canUpdate && !resourceResponse\" (click)=\"save()\">SAVE</button>\r\n    <button mat-raised-button color=\"warn\" routerLink=\"/resources/{{resourceType}}\">CANCEL</button>\r\n  </mat-card-actions>\r\n</mat-card>"

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
    function EditResourceComponent(_zone, _route, _helperService, _smartService) {
        var _this = this;
        this._zone = _zone;
        this._route = _route;
        this._helperService = _helperService;
        this._smartService = _smartService;
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
            try {
                this.resource = JSON.parse(v);
            }
            catch (e) {
                console.log('error occored while you were typing the JSON');
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
            _services_smart_service__WEBPACK_IMPORTED_MODULE_3__["SmartService"]])
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

module.exports = "<mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\r\n<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 col-xs-1\">\r\n        <span>{{resourceType}}</span>\r\n      </div>\r\n      <div class=\"col-xs-3 col-md-9\">\r\n      </div>\r\n      <button mat-raised-button color=\"primary\" routerLink=\"/resources/{{resourceType}}/new\">Add</button>\r\n    </div>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Filter\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Specify the filter as JSON(mongodb-like query syntax)\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <div class=\"min-padding\">\r\n          Search Parameters Supported\r\n          <mat-list role=\"list\">\r\n            <mat-list-item role=\"listitem\" *ngFor=\"let param of searchParams\" matTooltip=\"{{param.documentation}}\">\r\n              <h4 mat-line>{{param.name}}</h4>\r\n              <p mat-line>{{param.type}}</p>\r\n              <div>{{param.documentation}}</div>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </div>\r\n        <ace-editor [(text)]=\"queryCode\" style=\"height:100px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n        <div class=\"min-padding\">\r\n          <span class=\"min-padding\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"applyFilter()\">Apply</button>\r\n          </span>\r\n          <button mat-raised-button color=\"warn\" (click)=\"reset()\">Reset</button>\r\n        </div>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n    <app-resources-table *ngIf=\"!error\" [bundle]=\"resources\" [resourceType]=\"resourceType\"></app-resources-table>\r\n  </mat-card-content>\r\n</mat-card>\r\n<app-object-viewer *ngIf=\"error\" title=\"Error\" [value]=\"error\" hideView=\"true\"></app-object-viewer>"

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
            }
            catch (e) {
                console.log('error occored while you were typing the JSON');
            }
        },
        enumerable: true,
        configurable: true
    });
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

module.exports = "<mat-tab-group>\r\n  <mat-tab label=\"LIST\">\r\n    <mat-list *ngIf=\"bundle\">\r\n      <div *ngFor=\"let entry of bundle.entry\">\r\n        <div *ngIf=\"entry.resource.resourceType !== 'OperationOutcome'\">\r\n          <mat-list-item>\r\n            <p mat-line>ID: {{entry.resource.id}} </p>\r\n            <button mat-raised-button color=\"primary\" routerLink=\"/resources/{{entry.resource.resourceType}}/{{entry.resource.id}}\">View</button>\r\n          </mat-list-item>\r\n        </div>\r\n      </div>\r\n    </mat-list>\r\n    <div *ngIf=\"bundle && bundle.total == 0\">\r\n      There are no resources of type {{resourceType}}\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"JSON\">\r\n    <ace-editor [text]=\"codeBundle\" style=\"height:500px;\" [theme]=\"'eclipse'\"></ace-editor>\r\n  </mat-tab>\r\n</mat-tab-group>"

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
        name: 'CHBase PPE - Sample Standalone and EHR Launch App',
        uniqueName: 'chbaseppe1',
        clientId: '6faa0fe6-8eb2-4217-8c4f-0910f7fed0b5',
        redirectUri: 'http://localhost:4200/redirect/chbaseppe1',
        launchUrl: 'http://localhost:4200/launch/chbaseppe1',
        scopes: 'patient/*.*',
        standalonePatient: true,
        ehrLaunch: true,
        server: 'chbaseppe',
        secret: '5e24b756-9a70-4ea7-a602-150c639280a3'
    },
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
            patientStandalone: [],
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
            headers: httpHeaders
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