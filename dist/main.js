(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/error/404.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/404.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\r\n  <a class=\"closebtn\" (click)=\"closeNav($event)\">&times;</a>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\" routerLink=\"/home\" (click)=\"closeNav($event)\">Home</li>\r\n    <li class=\"list-group-item\" routerLink=\"/stores\" (click)=\"closeNav($event)\">Stores</li>\r\n    <li class=\"list-group-item\" routerLink=\"/categories\" (click)=\"closeNav($event)\">Categories</li>\r\n    <li class=\"list-group-item\" routerLink=\"/blogs\" (click)=\"closeNav($event)\">Blogs</li>\r\n  </ul>\r\n</div>\r\n<nav class=\"header_area\">\r\n  <div class=\"custom_container\">\r\n    <div class=\"nav-wrapper\">\r\n      <a class=\"brand-logo d-none d-md-block\"><img src=\"assets/img/brand/icon.png\" class=\"logoImg\" /></a>\r\n      <a style=\"margin-left: 40px;\" class=\"brand-logo d-block d-sm-none\"><img src=\"assets/img/brand/icon.png\"\r\n          class=\"logoImg\" /></a>\r\n      <a href=\"\" class=\"button-collapse\" (click)=\"openNav($event)\">\r\n        <i class=\"fa fa-bars\"></i></a>\r\n      <ul class=\"left_menu hide-on-med-and-down\">\r\n        <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\r\n        <li><a routerLink=\"/categories\" routerLinkActive=\"active\">Categories</a></li>\r\n        <li><a routerLink=\"/stores\" routerLinkActive=\"active\">Stores</a></li>\r\n        <li><a routerLink=\"/blogs\" routerLinkActive=\"active\">Blogs</a></li>\r\n      </ul>\r\n      <ul class=\"right right_menu hide-on-med-and-down\">\r\n        <li class=\"search_min\">\r\n          <ul class=\"search_from\">\r\n            <li class=\"notifications follow\">\r\n              <input (input)=\"searchFunc(searchBox)\" (focus)=\"switch=true\" (focusout)=\"focusOutFunc()\"\r\n                [(ngModel)]=\"searchBox\" placeholder=\"Search By Brand Name Or Website\" type=\"text\">\r\n              <div class=\"dropdown-menu\" style=\"width: 100%\" *ngIf=\"searchBox && switch\">\r\n                <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <div class=\"text-center\" *ngIf=\"!storeArray && !noResult\">\r\n                        <div class=\"lds-ripple\">\r\n                          <div></div>\r\n                          <div></div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"text-center\" *ngIf=\"noResult\">\r\n                        <br>\r\n                        No result found for \"{{searchBox}}\"\r\n                        <br>\r\n                        <br>\r\n                      </div>\r\n                    </tr>\r\n                    <tr *ngFor=\"let store of storeArray | keyvalue\">\r\n                      <td class=\"text-center\" [routerLink]=\"['/store', store.value.storeURL]\">\r\n                        <div class=\"avatar\">\r\n                          <img [src]=\"store.value.img\" class=\"rounded-circle\">\r\n                        </div>\r\n                      </td>\r\n                      <td [routerLink]=\"['/store', store.value.storeURL]\">\r\n                        <div>{{store.value.name}}</div>\r\n                        <div class=\"small text-muted\">\r\n                          <span>Store</span>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </li>\r\n            <li><a class=\"search_icon\"><i class=\"icon-magnifier\"></i></a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class=\"app-body\" style=\"margin-top: 30px;\">\r\n  <main class=\"main\">\r\n    <div class=\"container-fluid rmHorizontalPadding\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </main>\r\n</div>\r\n\r\n<footer class=\"footer_area\">\r\n  <div class=\"footer_row row\" style=\"padding:25px 20px auto !important\">\r\n    <div class=\"col l3 m6 footer_col\">\r\n      <div class=\"popular_posts\">\r\n        <h3 class=\"categories_tittle text-center\">Popular Blogs</h3>\r\n        <div class=\"text-center m-5\" *ngIf=\"!blogArray\">\r\n          <div class=\"lds-ripple\">\r\n            <div></div>\r\n            <div></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\" [routerLink]=\"['/blog', blog.value._id]\"\r\n          *ngFor=\"let blog of blogArray | keyvalue\">\r\n          <div class=\"col-lg-3 col-sm-12 p_img\">\r\n            <div class=\"manAvatar\">\r\n              <img [src]=\"blog.value.img\" class=\"customImgRound\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-9 col-sm-12 s9 p_content\">\r\n            <span class=\".d-none .d-sm-block\"><br><br></span>\r\n            <a>{{blog.value.title}}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col l3 m6 footer_col footer_trending text-center\">\r\n      <div class=\"social_Sharing\" style=\"padding-top: 0;\">\r\n        <h3 class=\"categories_tittle\">Social Sharing</h3>\r\n        <ul class=\"social_icon\">\r\n          <li><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\r\n          <li><a href=\"\" class=\"googleplus\"><i class=\"fa fa-youtube\"></i></a></li>\r\n          <li><a href=\"\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a></li>\r\n        </ul>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <div class=\"social_Sharing text-center\" style=\"padding-top: 0;\">\r\n        <h3 class=\"categories_tittle\">Contact Us</h3>\r\n        <br>\r\n        <br>\r\n        <form #emailForm=\"ngForm\" novalidate (ngSubmit)=\"addEmailToDB(contactEmail)\">\r\n          <div class=\"input-group mb-3\">\r\n            <input type=\"email\"\r\n              style=\"background:transparent;color:white;font-size: 1.2em;height: 34px;width: 75%;border:1px solid\"\r\n              name=\"email\" [email]=\"true\" required [(ngModel)]=\"contactEmail\" class=\"form-control\"\r\n              placeholder=\"Enter your email..\" />\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-secondary\" type=\"submit\" id=\"button-addon2\"\r\n                [disabled]=\"!emailForm.form.valid\">Send</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"col l3 m6 footer_col text-center\">\r\n      <h3 class=\"categories_tittle text-center\">Navigate</h3>\r\n      <br>\r\n      <br>\r\n      <div class=\"popular_posts\">\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/home\">Home</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/stores\">Stores</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/categories\">Caategories</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/blogs\">Blogs</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/about\">About</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">>\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/privacy\">Privacy & Policy</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">>\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/termsandconditions\">Terms & Conditions</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">>\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/sitemap\">SiteMap</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"copy_right\">\r\n    � 2020 <a href=\"\">BuyMeDeal</a>. All rights reserved.\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/menu/menu.module": [
		"./src/app/menu/menu.module.ts",
		"app-menu-menu-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line
            selector: 'body',
            template: '<router-outlet></router-outlet>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _error_404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error/404.component */ "./src/app/error/404.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @coreui/angular */ "./node_modules/@coreui/angular/fesm5/coreui-angular.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
                    timeOut: 4000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                }),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_16__["AppHeaderModule"],
                // AppSidebarModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot()
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _error_404_component__WEBPACK_IMPORTED_MODULE_11__["P404Component"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"]
            ],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PathLocationStrategy"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/404.component */ "./src/app/error/404.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");





var routes = [
    {
        path: '',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
        children: [
            {
                path: '',
                loadChildren: 'app/menu/menu.module#MenuModule'
            }
        ]
    },
    { path: '**', component: _error_404_component__WEBPACK_IMPORTED_MODULE_3__["P404Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.fetchAPI = function (url) {
        return this._http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.postAPI = function (url, reqData) {
        return this._http.post(url, reqData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.putAPI = function (url, reqData) {
        return this._http.post(url, reqData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.deleteAPI = function (url, reqData) {
        return this._http.delete(url, reqData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.fetchAPIWithLimit = function (url, limit, id, skip) {
        var params = {
            skipNo: skip,
            limitNo: limit,
            quer: id
        };
        return this._http.get(url, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.fetchOnlyLimit = function (url, limit) {
        return this._http.get(url, { params: { limitNo: limit } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.fetchWithQuery = function (url, id) {
        return this._http.get(url, { params: { _id: id } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.fetchAPIUsingId = function (url, id) {
        return this._http.get(url, { params: { _id: id } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.sortAPI = function (url, updatedArray) {
        return this._http.post(url, updatedArray)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/error/404.component.ts":
/*!****************************************!*\
  !*** ./src/app/error/404.component.ts ***!
  \****************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var P404Component = /** @class */ (function () {
    function P404Component() {
    }
    P404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./404.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/404.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], P404Component);
    return P404Component;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover {\n  text-decoration: none;\n}\n\n.logoImg {\n  width: 71px;\n  height: 71px;\n  margin-top: 5px;\n}\n\n.dropdown-content {\n  display: block;\n  opacity: 1;\n}\n\n.dropdown-menu {\n  display: block;\n  margin-top: 15px;\n}\n\n.rmHorizontalPadding {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\nnav {\n  position: fixed;\n  z-index: 9;\n}\n\n.btn_group {\n  float: left !important;\n}\n\n.confirm {\n  min-width: 70px !important;\n}\n\ntable {\n  font-size: 1.15em;\n}\n\ntr:hover {\n  cursor: pointer;\n}\n\n.manAvatar {\n  width: 50px;\n  height: 50px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50%;\n  margin-left: 10px;\n}\n\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  background-color: #232F42;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n}\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n\n.sidenav > ul > li {\n  background: transparent;\n  color: #fff;\n  font-size: 1.5em;\n  line-height: 2.3em;\n}\n\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n\n  .sidenav a {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9EOlxcRGFuaXNoIHdvcmtcXEJ1eU1lRGVhbFxcQnV5TWVEZWFsLUZST05UL3NyY1xcYXBwXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxxQkFBQTtBQ0VSOztBREY2QjtFQUFTLFdBQUE7RUFBVyxZQUFBO0VBQVksZUFBQTtBQ1E3RDs7QURSNEU7RUFBa0IsY0FBQTtFQUFjLFVBQUE7QUNhNUc7O0FEYnNIO0VBQWUsY0FBQTtFQUFjLGdCQUFBO0FDa0JuSjs7QURsQm1LO0VBQXFCLDJCQUFBO0VBQTBCLDBCQUFBO0FDdUJsTjs7QUR2QjJPO0VBQUksZUFBQTtFQUFlLFVBQUE7QUM0QjlQOztBRDVCd1E7RUFBVyxzQkFBQTtBQ2dDblI7O0FEaEN3UztFQUFTLDBCQUFBO0FDb0NqVDs7QURwQzBVO0VBQU0saUJBQUE7QUN3Q2hWOztBRHhDaVc7RUFBUyxlQUFBO0FDNEMxVzs7QUQ1Q3lYO0VBQVcsV0FBQTtFQUFXLFlBQUE7RUFBWSxrQkFBQTtFQUFrQixnQkFBQTtFQUFnQixrQkFBQTtFQUFrQixpQkFBQTtBQ3FEL2M7O0FEckRnZTtFQUFTLFlBQUE7RUFBWSxRQUFBO0VBQVEsZUFBQTtFQUFlLFdBQUE7RUFBVyxNQUFBO0VBQU0sT0FBQTtFQUFPLHlCQUFBO0VBQXlCLGtCQUFBO0VBQWtCLGdCQUFBO0VBQWUsaUJBQUE7QUNrRTlsQjs7QURsRSttQjtFQUFXLHlCQUFBO0VBQXlCLHFCQUFBO0VBQXFCLGVBQUE7RUFBZSxjQUFBO0VBQWMsY0FBQTtFQUFjLGdCQUFBO0FDMkVudEI7O0FEM0VrdUI7RUFBbUIsdUJBQUE7RUFBdUIsV0FBQTtFQUFXLGdCQUFBO0VBQWdCLGtCQUFBO0FDa0Z2eUI7O0FEbEZ5ekI7RUFBaUIsY0FBQTtBQ3NGMTBCOztBRHRGdzFCO0VBQW1CLGtCQUFBO0VBQWtCLE1BQUE7RUFBTSxXQUFBO0VBQVcsZUFBQTtFQUFlLGlCQUFBO0FDOEY3NUI7O0FEOUY4NkI7RUFBc0M7SUFBUyxpQkFBQTtFQ21HMzlCOztFRG5HNCtCO0lBQVcsZUFBQTtFQ3VHdi9CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVye3RleHQtZGVjb3JhdGlvbjpub25lfS5sb2dvSW1ne3dpZHRoOjcxcHg7aGVpZ2h0OjcxcHg7bWFyZ2luLXRvcDo1cHh9LmRyb3Bkb3duLWNvbnRlbnR7ZGlzcGxheTpibG9jaztvcGFjaXR5OjF9LmRyb3Bkb3duLW1lbnV7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOjE1cHh9LnJtSG9yaXpvbnRhbFBhZGRpbmd7cGFkZGluZy1yaWdodDowIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6MCFpbXBvcnRhbnR9bmF2e3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6OX0uYnRuX2dyb3Vwe2Zsb2F0OmxlZnQhaW1wb3J0YW50fS5jb25maXJte21pbi13aWR0aDo3MHB4IWltcG9ydGFudH10YWJsZXtmb250LXNpemU6MS4xNWVtfXRyOmhvdmVye2N1cnNvcjpwb2ludGVyfS5tYW5BdmF0YXJ7d2lkdGg6NTBweDtoZWlnaHQ6NTBweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luLWxlZnQ6MTBweH0uc2lkZW5hdntoZWlnaHQ6MTAwJTt3aWR0aDowO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTA7dG9wOjA7bGVmdDowO2JhY2tncm91bmQtY29sb3I6IzIzMkY0MjtvdmVyZmxvdy14OmhpZGRlbjt0cmFuc2l0aW9uOi41cztwYWRkaW5nLXRvcDo2MHB4fS5zaWRlbmF2IGF7cGFkZGluZzo4cHggOHB4IDhweCAzMnB4O3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtc2l6ZToyNXB4O2NvbG9yOiM4MTgxODE7ZGlzcGxheTpibG9jazt0cmFuc2l0aW9uOi4zc30uc2lkZW5hdiA+IHVsID4gbGl7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxLjVlbTtsaW5lLWhlaWdodDoyLjNlbX0uc2lkZW5hdiBhOmhvdmVye2NvbG9yOiNmMWYxZjF9LnNpZGVuYXYgLmNsb3NlYnRue3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjI1cHg7Zm9udC1zaXplOjM2cHg7bWFyZ2luLWxlZnQ6NTBweH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpey5zaWRlbmF2e3BhZGRpbmctdG9wOjE1cHh9LnNpZGVuYXYgYXtmb250LXNpemU6MThweH19IiwiYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxvZ29JbWcge1xuICB3aWR0aDogNzFweDtcbiAgaGVpZ2h0OiA3MXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5ybUhvcml6b250YWxQYWRkaW5nIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxubmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5O1xufVxuXG4uYnRuX2dyb3VwIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmNvbmZpcm0ge1xuICBtaW4td2lkdGg6IDcwcHggIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICBmb250LXNpemU6IDEuMTVlbTtcbn1cblxudHI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYW5BdmF0YXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5zaWRlbmF2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyRjQyO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG4uc2lkZW5hdiBhIHtcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnNpZGVuYXYgPiB1bCA+IGxpIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBsaW5lLWhlaWdodDogMi4zZW07XG59XG5cbi5zaWRlbmF2IGE6aG92ZXIge1xuICBjb2xvcjogI2YxZjFmMTtcbn1cblxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG5cbiAgLnNpZGVuYXYgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var MenuComponent = /** @class */ (function () {
    function MenuComponent(_dataService, router, toastr, _document) {
        var _this = this;
        this._dataService = _dataService;
        this.router = router;
        this.toastr = toastr;
        this.sidebarMinimized = true;
        this.switch = false;
        this.mouseLoc = false;
        this.noResult = false;
        this.storeArray = null;
        this.blogArray = null;
        this.searchBox = null;
        this.isBusy = false;
        this.changes = new MutationObserver(function (mutations) {
            _this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
        });
        this.element = _document.body;
        this.changes.observe(this.element, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
    MenuComponent.prototype.ngOnDestroy = function () { this.changes.disconnect(); };
    MenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._dataService.fetchOnlyLimit("/userDisplay/fetchTopBlogs", 4).subscribe(function (res) {
            if (res.data)
                _this.blogArray = res.data;
            else
                console.log(res.message);
        });
    };
    MenuComponent.prototype.searchFunc = function (queri) {
        var _this = this;
        if (!queri)
            return;
        this.noResult = false;
        this.storeArray = null;
        this._dataService.fetchAPIWithLimit("/userDisplay/searchQuery", 10, queri, "").subscribe(function (res) {
            if (res.data) {
                _this.storeArray = res.data;
                console.log(_this.storeArray);
            }
            else
                _this.noResult = true;
        });
    };
    MenuComponent.prototype.addEmailToDB = function (emailId) {
        var _this = this;
        if (this.isBusy)
            return;
        this.isBusy = true;
        this._dataService.postAPI("/userDisplay/addEmailToDB", { emailId: emailId }).subscribe(function (res) {
            if (res.data) {
                _this.contactEmail = "";
                _this.isBusy = false;
                _this.toastr.success('We received your Email', 'Success');
            }
            else {
                _this.isBusy = false;
                _this.toastr.error(res.message, 'Error');
            }
        });
    };
    MenuComponent.prototype.focusOutFunc = function () {
        var _this = this;
        setTimeout(function () {
            _this.switch = false;
        }, 300);
    };
    MenuComponent.prototype.openNav = function (e) {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "250px";
    };
    MenuComponent.prototype.closeNav = function (e) {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "0";
    };
    MenuComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], Object])
    ], MenuComponent);
    return MenuComponent;
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
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    useJit: true,
    preserveWhitespaces: true
});
// .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Danish work\BuyMeDeal\BuyMeDeal-FRONT\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map