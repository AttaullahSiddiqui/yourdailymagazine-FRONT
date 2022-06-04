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

module.exports = "<!-- <div id=\"mySidenav\" class=\"sidenav\">\r\n  <a class=\"closebtn\" (click)=\"closeNav($event)\">&times;</a>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\" routerLink=\"/\" (click)=\"closeNav($event)\">Home</li>\r\n    <li class=\"list-group-item\" routerLink=\"/stores\" (click)=\"closeNav($event)\">Stores</li>\r\n    <li class=\"list-group-item\" routerLink=\"/categories\" (click)=\"closeNav($event)\">Categories</li>\r\n    <li class=\"list-group-item\" routerLink=\"/blogs\" (click)=\"closeNav($event)\">Blogs</li>\r\n    \r\n    <li class=\"list-group-item\" routerLink=\"/about\" (click)=\"closeNav($event)\">About</li>\r\n    <li class=\"list-group-item\" routerLink=\"/privacy\" (click)=\"closeNav($event)\">Privacy</li>\r\n    <li class=\"list-group-item\" routerLink=\"/termsandconditions\" (click)=\"closeNav($event)\">Terms & Conditions</li>\r\n  </ul>\r\n</div> -->\r\n<!-- <nav class=\"header_area\" (click)=\"closeDropDown()\">\r\n  <div class=\"custom_container\">\r\n    <div class=\"nav-wrapper\">\r\n      <a class=\"brand-logo d-block d-sm-none mobileSearch\" (click)=\"showMobSearch=!showMobSearch\"><i\r\n          [ngClass]=\"{'colorGreen': showMobSearch}\" class=\"icon-magnifier d-block\"></i></a>\r\n      <a href=\"\" class=\"button-collapse\" (click)=\"openNav($event)\">\r\n        <i class=\"fa fa-bars\"></i></a>\r\n      <ul class=\"left_menu hide-on-med-and-down\">\r\n        <li><a routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\r\n        <li><a routerLink=\"/categories\" routerLinkActive=\"active\">Categories</a>\r\n        </li>\r\n        <li><a routerLink=\"/stores\" routerLinkActive=\"active\">Stores</a></li>\r\n        <li><a routerLink=\"/blogs\" routerLinkActive=\"active\">Blogs</a></li>\r\n      </ul>\r\n      <ul class=\"right right_menu hide-on-med-and-down\">\r\n        <li class=\"search_min\">\r\n          <ul class=\"search_from\">\r\n            <li class=\"notifications follow\">\r\n              <input (input)=\"searchFunc(searchBox)\" (focus)=\"switch=true\" (focusout)=\"focusOutFunc()\"\r\n                [(ngModel)]=\"searchBox\" placeholder=\"Search By Store or Blog Name..\" type=\"text\">\r\n              <div class=\"dropdown-menu\" style=\"width: 100%;max-height: 80vh;overflow-y:auto;\"\r\n                *ngIf=\"searchBox && switch\">\r\n                <table class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <div class=\"text-center\" *ngIf=\"!storeArray && !noResult\">\r\n                        <div class=\"lds-ripple\">\r\n                          <div></div>\r\n                          <div></div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"text-center\" *ngIf=\"noResult\">\r\n                        <br>\r\n                        No result found for \"{{searchBox}}\"\r\n                        <br>\r\n                        <br>\r\n                      </div>\r\n                    </tr>\r\n                    <tr *ngFor=\"let store of storeArray | keyvalue\">\r\n                      <td class=\"text-center\" [routerLink]=\"['/store', store.value.storeURL]\">\r\n                        <div class=\"avatar2\">\r\n                          <img [src]=\"store.value.img\" class=\"rounded-circle\">\r\n                        </div>\r\n                      </td>\r\n                      <td [routerLink]=\"['/store', store.value.storeURL]\">\r\n                        <div>{{store.value.name}}</div>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav> -->\r\n\r\n<div class=\"container\" style=\"width:85%;\" *ngIf=\"!isLinkActive('/')\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark text-center\"\r\n    style=\"height: 80px;border-radius: 8px;max-width: inherit;background-color: #0c0a0a !important;\">\r\n    <a class=\"navbar-brand\" href=\"\"><img src=\"../../assets/img/brand/bmd_latest.jpg\" alt=\"Brnad Logo\" width=\"75\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mx-auto\">\r\n        <li class=\"nav-item\" routerLink=\"/\">\r\n          <a class=\"nav-link\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLink=\"/categories\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\">Categories </a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLink=\"/stores\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\">Stores </a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLink=\"/blogs\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\">Blogs </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<div class=\"alert alert-secondary text-center cursor-pointer\" [ngClass]=\"{'largeAlert': mobile}\"\r\n  [routerLink]=\"['/event']\" role=\"alert\" *ngIf=\"eventBarText\">\r\n  <strong>Hurry Up !</strong> <br *ngIf=\"mobile\"> {{eventBarText}} &nbsp; <br *ngIf=\"mobile\"> <a class=\"alert-link\">Shop\r\n    Now</a>\r\n</div>\r\n\r\n<input class=\"form-control mobSearch\" (input)=\"searchFunc(searchBox)\" [(ngModel)]=\"searchBox\" *ngIf=\"showMobSearch\"\r\n  type=\"text\" placeholder=\"Type keyword..\">\r\n\r\n<table class=\"table table-striped table-outline mb-0 searchTable\" *ngIf=\"showMobSearch && searchBox\">\r\n  <tbody>\r\n    <tr class=\"text-center\">\r\n      <div class=\"text-center\" *ngIf=\"!storeArray && !noResult\">\r\n        <!-- <div class=\"text-center\" *ngIf=\"!storeArray && !noResult\"> -->\r\n        <div class=\"lds-ripple\">\r\n          <div></div>\r\n          <div></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-center\" *ngIf=\"noResult\">\r\n        <br>\r\n        No result found for \"{{searchBox}}\"\r\n        <br>\r\n        <br>\r\n      </div>\r\n    </tr>\r\n    <tr *ngFor=\"let store of storeArray | keyvalue\">\r\n      <td class=\"text-center\" [routerLink]=\"['/store', store.value.storeURL]\"\r\n        (click)=\"showMobSearch=false;searchBox=''\">\r\n        <div class=\"avatar2\">\r\n          <img [src]=\"store.value.img\" class=\"rounded-circle\">\r\n        </div>\r\n      </td>\r\n      <td [routerLink]=\"['/store', store.value.storeURL]\" (click)=\"showMobSearch=false;searchBox=''\">\r\n        <div>{{store.value.name}}</div>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<div class=\"app-body mt-0\" (click)=\"closeDropDown()\">\r\n  <main class=\"main\">\r\n    <div class=\"container-fluid px-0\" style=\"background-color: white\" [ngClass]=\"{'addMarginTop': !isLinkActive('/')}\">\r\n      <!-- [ngClass]=\"{'addMarginTop': !eventBarText && !showMobSearch}\"> -->\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </main>\r\n</div>\r\n\r\n<footer class=\"footer_area\">\r\n  <!--<div class=\"footer_row row\" style=\"padding:25px 20px auto !important\">\r\n    <div class=\"col-xs-12 col-md-4 l3 m6 footer_col\">\r\n      <div class=\"popular_posts\">\r\n        <h3 class=\"categories_tittle text-center\">Popular Blogs</h3>\r\n        <div class=\"text-center m-5\" *ngIf=\"!blogArray\">\r\n          <div class=\"lds-ripple\">\r\n            <div></div>\r\n            <div></div>\r\n          </div>\r\n        </div>\r\n        <ngb-carousel *ngIf=\"blogArray\" interval=\"5000\" [pauseOnHover]=\"false\" [showNavigationArrows]=\"false\">\r\n          <ng-template ngbSlide>\r\n            <ng-container>\r\n              <div class=\"list-group\">\r\n                <a class=\"list-group-item list-group-item-action mx-0\" [routerLink]=\"['/blog', blog.value.blogURL]\"\r\n                  *ngFor=\"let blog of blogArray | keyvalue | slice:0:4\">\r\n                  <div class=\"d-flex w-100 justify-content-between\">\r\n                    <h4 class=\"mb-1\">{{blog.value.title | slice:0:40}}</h4>\r\n                  </div>\r\n                  <p>{{blog.value.CreatedAt | date}}</p>\r\n                </a>\r\n              </div>\r\n              <br>\r\n              <br>\r\n            </ng-container>\r\n          </ng-template>\r\n          <ng-template ngbSlide>\r\n            <ng-container>\r\n              <div class=\"list-group\">\r\n                <a class=\"list-group-item list-group-item-action mx-0\" [routerLink]=\"['/blog', blog.value.blogURL]\"\r\n                  *ngFor=\"let blog of blogArray | keyvalue | slice:4:8\">\r\n                  <div class=\"d-flex w-100 justify-content-between\">\r\n                    <h4 class=\"mb-1\">{{blog.value.title | slice:0:40}}</h4>\r\n                  </div>\r\n                  <p>{{blog.value.CreatedAt | date}}</p>\r\n                </a>\r\n              </div>\r\n              <br>\r\n              <br>\r\n            </ng-container>\r\n          </ng-template>\r\n        </ngb-carousel>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 l3 m6 footer_col text-center\">\r\n      <h3 class=\"categories_tittle text-center\">Navigate</h3>\r\n      <br>\r\n      <br>\r\n      <div class=\"popular_posts\">\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/\">Home</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/stores\">Stores</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/categories\">Categories</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/blogs\">Blogs</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/about\">About</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/privacy\">Privacy & Policy</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/termsandconditions\">Terms & Conditions</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/sitemap\">SiteMap</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-4 l3 m6 footer_col footer_trending text-center\">\r\n      <div class=\"social_Sharing\" style=\"padding-top: 0;\">\r\n        <h3 class=\"categories_tittle\">Social Sharing</h3>\r\n        <ul class=\"social_icon\">\r\n          <li><a href=\"https://twitter.com/BuyMeDeal1\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li>\r\n          <li><a class=\"instagram\" href=\"https://www.instagram.com/buymedeal/\" target=\"_blank\"><i\r\n                class=\"fa fa-instagram\"></i></a></li>\r\n          <li><a class=\"facebook\" href=\"https://www.facebook.com/Buymedeal-104706475339144\" target=\"_blank\"><i\r\n                class=\"fa fa-facebook\"></i></a></li>\r\n        </ul>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <div class=\"social_Sharing text-center\" style=\"padding:0 20px 0 20px\">\r\n        <h3 class=\"categories_tittle\">Connect With Us</h3>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <form #emailForm=\"ngForm\" novalidate (ngSubmit)=\"addEmailToDB(contactEmail)\">\r\n          <div class=\"input-group mb-3\">\r\n            <input type=\"email\"\r\n              style=\"background:transparent;color:white;font-size: 1.2em;height: 50px;width: 70%;border:1px solid #066163;\"\r\n              name=\"email\" [email]=\"true\" required [(ngModel)]=\"contactEmail\" class=\"form-control pl-3\"\r\n              placeholder=\"Enter your email..\" />\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-secondary\" type=\"submit\"\r\n                style=\"height: 53px;margin-top: -1px;background-color: #066163 !important;color:white;padding-right: 25px !important;padding-left: 25px !important;\"\r\n                [disabled]=\"!emailForm.form.valid\">Send</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"copy_right text-center py-4\">\r\n    <a href=\"https://twitter.com/BuyMeDeal1\" target=\"_blank\"><i class=\"fa fa-twitter customIconSiz\"></i></a>\r\n    <a class=\"instagram\" href=\"https://www.instagram.com/buymedeal/\" target=\"_blank\"><i\r\n        class=\"fa fa-instagram customIconSiz\"></i></a>\r\n    <!-- <a class=\"facebook customIconSiz\" href=\"https://www.facebook.com/Buymedeal-104706475339144\" target=\"_blank\"><i\r\n        class=\"fa fa-facebook\"></i></a> -->\r\n  </div>\r\n  <hr style=\"border-color: #e75555;width: 50%;\">\r\n  <div class=\"copy_right\">\r\n    &copy; 2022 <a href=\"\">BuyMeDeal</a>. All rights reserved.\r\n  </div>\r\n</footer>\r\n<div class=\"modal fade\" id=\"dropDownModal\" data-backdrop=\"true\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\"\r\n  style=\"max-height: 100vh !important;width: 70%;height:fit-content;overflow-y:scroll;background-color:#EBECF0;margin-top: 80px !important;\">\r\n  <div class=\"modal-dialog my-0\" role=\"document\" style=\"max-width: 100%;width: 100%;\">\r\n    <div class=\"modal-content\" (mouseleave)=\"closeDropDown()\">\r\n      <!-- <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Delete Coupon</h4>\r\n        <button type=\"button\" class=\"close\" id=\"closebtn\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div> -->\r\n      <div class=\"modal-body p-0\">\r\n        <section class=\"min_container min_pages\">\r\n          <div class=\"section_row\">\r\n            <div class=\"col-md-3 px-0\">\r\n              <div class=\"left_side_bar pb-0 mt-0\">\r\n                <div class=\"interests pt-0\">\r\n                  <ul class=\"interests_list pt-0\">\r\n                    <li (click)=\"fetchStores('5e7212be3f58470017428b28','Apparel And Clothing')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='5e7212be3f58470017428b28'}\"><a><i\r\n                          class=\"fa fa-hotel fa-lg\"></i>Apparel & Clothing</a>\r\n                    </li>\r\n                    <li (click)=\"fetchStores('5e7212c53f58470017428b29','Books')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='5e7212c53f58470017428b29'}\"><a><i\r\n                          class=\"fa fa-shopping-cart fa-lg\"></i>Books</a>\r\n                    </li>\r\n                    <li (click)=\"fetchStores('606b04b0e6445a00176c7fd5','Office Supplies')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='606b04b0e6445a00176c7fd5'}\"><a><i\r\n                          class=\"fa fa-bar-chart fa-lg\"></i>Office Supplies</a>\r\n                    </li>\r\n                    <li (click)=\"fetchStores('606b04e7e6445a00176c7fd6','Lifestyle & Accessories')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='606b04e7e6445a00176c7fd6'}\"><a><i\r\n                          class=\"fa fa-puzzle-piece fa-lg\"></i>Lifestyle & Accessories</a>\r\n                    </li>\r\n                    <li (click)=\"fetchStores('5e7213613f58470017428b38','Automotive')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='5e7213613f58470017428b38'}\"><a><i\r\n                          class=\"fa fa-plus-square fa-lg\"></i>Automotive</a>\r\n                    </li>\r\n                    <li (click)=\"fetchStores('5e7212d83f58470017428b2b','Electronics')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='5e7212d83f58470017428b2b'}\"><a><i\r\n                          class=\"fa fa-briefcase fa-lg\"></i>Electronics</a>\r\n                    </li>\r\n                    <li (click)=\"fetchStores('5e7212993f58470017428b23','Home & Garden')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='5e7212993f58470017428b23'}\"><a><i\r\n                          class=\"fa fa-home\"></i>Home & Garden</a></li>\r\n                    <li (click)=\"fetchStores('5e7212a03f58470017428b24','Baby & Kids')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='5e7212a03f58470017428b24'}\"><a><i\r\n                          class=\"fa fa-life-ring\"></i>Baby & Kids</a></li>\r\n                    <li (click)=\"fetchStores('606b058ce6445a00176c7fd8','Sports Accessories')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='606b058ce6445a00176c7fd8'}\"><a><i\r\n                          class=\"fa fa-object-group\"></i>Sports Accessories</a></li>\r\n                    <li (click)=\"fetchStores('606b05bee6445a00176c7fd9','Bed & Bath')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='606b05bee6445a00176c7fd9'}\"><a><i\r\n                          class=\"fa fa-hotel\"></i>Bed & Bath</a></li>\r\n                    <li (click)=\"fetchStores('606b05e9e6445a00176c7fda','Tech Accessories')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='606b05e9e6445a00176c7fda'}\"><a><i\r\n                          class=\"fa fa-bank\"></i>Tech Accessories</a></li>\r\n                  </ul>\r\n                  <br>\r\n                  <br>\r\n                  <br>\r\n                  <button type=\"button\" class=\"btn btn-outline-dark btn-block\" routerLink=\"/categories\"\r\n                    (click)=\"closeDropDown()\">View All\r\n                    Categories</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-9 text-center\">\r\n              <p class=\"display-4 mt-1\" style=\"font-size:3.2em\">{{dropDownSelected}}</p>\r\n              <p class=\"display-5\" style=\"font-size: 1.8em;font-weight: 200;margin-top: 8vh;\"\r\n                *ngIf=\"!navStoresArr.length\">No store in this\r\n                Category...</p>\r\n              <div class=\"row justify-content-center mb-0 mt-4\">\r\n                <div class=\"col-md-3 cursor-pointer rounded\" *ngFor=\"let store of navStoresArr | keyvalue\"\r\n                  [routerLink]=\"['/store', store.value.storeURL]\">\r\n                  <div class=\"brand-card dropp\">\r\n                    <div class=\"brand-card-header\">\r\n                      <img [src]=\"store.value.img\" class=\"rounded-circle2 roundImg\" width=\"100\" height=\"100\" />\r\n                    </div>\r\n                    <div class=\"brand-card-body text-center\">\r\n                      <p class=\"display-5 text-muted\" style=\"font-size: 1.3em;\">{{store.value.name}}</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-outline-dark\"\r\n                style=\"position: absolute;bottom: 0 !important;left: 42%;\" [routerLink]=\"['/category', selectedCatURL]\"\r\n                (click)=\"closeDropDown()\">View All Stores</button>\r\n            </div>\r\n          </div>\r\n        </section>\r\n      </div>\r\n      <!-- <div class=\"modal-footer text-center\" style=\"justify-content: center;\">\r\n        <i class=\"fa fa-chevron-up cursor-pointer\" aria-hidden=\"true\" style=\"font-size: 2.4em;color:#066163\"\r\n          id=\"closebtn\" data-dismiss=\"modal\"></i>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _error_404_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error/404.component */ "./src/app/error/404.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @coreui/angular */ "./node_modules/@coreui/angular/fesm5/coreui-angular.js");




















// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

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
                    positionClass: "toast-top-right",
                    preventDuplicates: true,
                }),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_19__["AppHeaderModule"],
                // AppSidebarModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_17__["CollapseModule"].forRoot(),
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _error_404_component__WEBPACK_IMPORTED_MODULE_12__["P404Component"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__["MenuComponent"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["BsModalService"],
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PathLocationStrategy"],
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
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
        return this._http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.postAPI = function (url, reqData) {
        return this._http
            .post(url, reqData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.putAPI = function (url, reqData) {
        return this._http
            .post(url, reqData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.deleteAPI = function (url, reqData) {
        return this._http
            .delete(url, reqData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.fetchAPIWithLimit = function (url, limit, id, skip) {
        var params = {
            skipNo: skip,
            limitNo: limit,
            quer: id,
        };
        return this._http
            .get(url, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.fetchAPIForProduct = function (url, catQuer, storeQuer, tagQuer, limit, skip) {
        var params = {
            skipNo: skip,
            limitNo: limit,
            catId: catQuer,
            storeId: storeQuer,
            tags: tagQuer,
        };
        return this._http
            .get(url, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.fetchOnlyLimit = function (url, limit) {
        return this._http
            .get(url, { params: { limitNo: limit } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.fetchWithQuery = function (url, id) {
        return this._http
            .get(url, { params: { _id: id } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.fetchAPIUsingId = function (url, id) {
        return this._http
            .get(url, { params: { _id: id } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.sortAPI = function (url, updatedArray) {
        return this._http
            .post(url, updatedArray)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
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

module.exports = "a:hover {\n  text-decoration: none;\n}\n\n.jumbotron {\n  padding: 0 !important;\n}\n\n.logoImg {\n  height: 71px;\n  margin-top: 5px;\n}\n\n.logoImg:hover {\n  cursor: pointer;\n}\n\n.dropdown-menu {\n  display: block;\n  margin-top: 15px;\n}\n\n.addMarginTop {\n  margin-top: 70px;\n}\n\nnav {\n  position: fixed;\n  z-index: 9;\n}\n\n.btn_group {\n  float: left !important;\n}\n\n.confirm {\n  min-width: 70px !important;\n}\n\ntable {\n  font-size: 1.15em;\n}\n\ntr:hover {\n  cursor: pointer;\n}\n\n.manAvatar {\n  width: 50px;\n  height: 50px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50%;\n  margin-left: 10px;\n}\n\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  background-color: #232f42;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n}\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n\n.sidenav > ul > li {\n  background: 0 0;\n  color: #fff;\n  font-size: 1.5em;\n  line-height: 2.3em;\n}\n\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n.imageAdjust {\n  width: inherit;\n  height: inherit;\n  -ms-interpolation-mode: nearest-neighbor;\n      image-rendering: -moz-crisp-edges;\n      image-rendering: pixelated;\n}\n\n.btn-store {\n  color: #ddd;\n  min-width: 254px;\n  padding: 12px 20px !important;\n  border-color: #ddd !important;\n  height: 64px;\n}\n\n.btn-store:focus,\n.btn-store:hover {\n  color: #fff !important;\n}\n\n.btn-store .btn-caption,\n.btn-store .btn-label {\n  display: block;\n  text-align: left;\n  line-height: 1;\n}\n\n.btn-store .btn-caption {\n  font-size: 24px;\n}\n\nnav td,\ntable.searchTable td {\n  font-size: 1.55em;\n  font-weight: 700;\n  padding: 0.55rem;\n  height: auto;\n  color: #333;\n  vertical-align: middle;\n  border: none;\n  font-family: futura;\n  letter-spacing: 0.6px;\n}\n\nnav td > .avatar2,\ntable.searchTable td > .avatar2 {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\nnav tr,\ntable.searchTable tr {\n  border-bottom: 1px solid #066163;\n}\n\nnav tr:hover {\n  background-color: #066163;\n}\n\nnav tr:hover td {\n  color: white;\n}\n\n.rounded-circle {\n  width: 80px !important;\n  height: 80px !important;\n}\n\n.rounded-circle2 {\n  width: 80px !important;\n  height: 80px !important;\n  border-radius: 50%;\n  margin-top: 22px;\n  border: 1px groove #e00965;\n}\n\n.avatar2 {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n}\n\n.mdi-36px {\n  font-size: 39px;\n  margin-right: 10px;\n}\n\n.h105 {\n  height: 105px;\n}\n\n.h70 {\n  height: 70px;\n}\n\n.list-group a.list-group-item {\n  background-color: transparent;\n  color: #7b8aa3;\n  border: none;\n}\n\n.list-group a.list-group-item:hover {\n  border-bottom: none;\n  border: 1px solid #7b8aa3;\n}\n\n.list-group a.list-group-item:not(:last-child) {\n  border-bottom: 1px solid #7b8aa3;\n}\n\n.list-group p {\n  color: #7b8aa3;\n}\n\n.section_row ul > li:hover {\n  cursor: pointer;\n}\n\n.dropp {\n  border-color: #1d9471 !important;\n  border-radius: 30px;\n  border-width: 2px;\n}\n\n.activeClr a {\n  color: #e5166b !important;\n}\n\n.modal {\n  pointer-events: none !important;\n}\n\n.modal-backdrop {\n  display: none !important;\n}\n\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 98% !important;\n  }\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n\n  .sidenav a {\n    font-size: 18px;\n  }\n}\n\ndiv.alert {\n  margin-top: 80px;\n  font-size: 1.5em;\n  margin-bottom: 0;\n  font-family: futura;\n}\n\ndiv.alert a {\n  text-decoration: underline;\n}\n\ndiv.largeAlert {\n  font-size: 1.8em !important;\n}\n\n.alert-link {\n  color: #25cbb0 !important;\n}\n\n.list-group-item h4 {\n  font-family: futuraHeading;\n  font-weight: 900;\n}\n\n.jumbotron {\n  padding: 1rem 1rem !important;\n}\n\ni.navListIcon {\n  color: #066163;\n}\n\na.mobileSearch {\n  margin-left: 60%;\n  height: 80px;\n}\n\na.mobileSearch > i {\n  font-size: 1.2em;\n  font-weight: bold;\n  margin-top: 43%;\n}\n\n.colorGreen {\n  color: #e75555;\n}\n\ninput.mobSearch {\n  width: 80%;\n  position: relative;\n  left: 10%;\n  font-size: 1.6em;\n  height: 60px !important;\n  border: 1px solid #9e9e9e;\n  margin-bottom: 0;\n  margin-top: 95px !important;\n}\n\ninput.mobSearch::-webkit-input-placeholder {\n  margin-left: 20px !important;\n}\n\ninput.mobSearch::-moz-placeholder {\n  margin-left: 20px !important;\n}\n\ninput.mobSearch:-ms-input-placeholder {\n  margin-left: 20px !important;\n}\n\ninput.mobSearch::-ms-input-placeholder {\n  margin-left: 20px !important;\n}\n\ninput.mobSearch::placeholder {\n  margin-left: 20px !important;\n}\n\ntable.searchTable {\n  width: 80%;\n  position: relative;\n  left: 10%;\n}\n\n.customIconSiz {\n  font-size: 2em;\n  border: 2px solid grey;\n  margin: auto 14px;\n  padding: 20px;\n  border-radius: 50%;\n}\n\na.nav-link {\n  padding-right: 30px !important;\n  padding-left: 30px !important;\n  font-size: 1.6em;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9EOlxcRGFuaXNoIHdvcmtcXFlvdXJEYWlseU1hZ2F6aW5lXFxZb3VyRGFpbHlNYWdhemluZS1GUk9OVC9zcmNcXGFwcFxcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0FDRUo7O0FEQUE7RUFFSSxZQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUNNSjs7QURKQTtFQUNJLHNCQUFBO0FDT0o7O0FETEE7RUFDSSwwQkFBQTtBQ1FKOztBRE5BO0VBQ0ksaUJBQUE7QUNTSjs7QURQQTtFQUNJLGVBQUE7QUNVSjs7QURSQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNXSjs7QURUQTtFQUNJLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDWUo7O0FEVkE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNhSjs7QURYQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2NKOztBRFpBO0VBQ0ksY0FBQTtBQ2VKOztBRGJBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7TUFBQSxpQ0FBQTtNQUFBLDBCQUFBO0FDaUJKOztBRE5BO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNTSjs7QURQQTs7RUFFSSxzQkFBQTtBQ1VKOztBRFJBOztFQUVJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNXSjs7QURUQTtFQUNJLGVBQUE7QUNZSjs7QURWQTs7RUFFSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNhSjs7QURYQTs7RUFFSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUNjSjs7QURaQTs7RUFFSSxnQ0FBQTtBQ2VKOztBRGJBO0VBQ0kseUJBQUE7QUNnQko7O0FEZkk7RUFDSSxZQUFBO0FDaUJSOztBRFRBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQ1lKOztBRFZBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ2FKOztBRFhBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDY0o7O0FEWkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNlSjs7QURiQTtFQUNJLGFBQUE7QUNnQko7O0FEZEE7RUFDSSxZQUFBO0FDaUJKOztBRGZBO0VBQ0ksNkJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ2tCSjs7QURoQkE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDbUJKOztBRGpCQTtFQUNJLGdDQUFBO0FDb0JKOztBRGxCQTtFQUNJLGNBQUE7QUNxQko7O0FEbkJBO0VBQ0ksZUFBQTtBQ3NCSjs7QURqQkE7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNvQko7O0FEbEJBO0VBQ0kseUJBQUE7QUNxQko7O0FEbkJBO0VBQ0ksK0JBQUE7QUNzQko7O0FEcEJBO0VBQ0ksd0JBQUE7QUN1Qko7O0FEckJBO0VBQ0k7SUFDSSx5QkFBQTtFQ3dCTjtBQUNGOztBRHRCQTtFQUNJO0lBQ0ksaUJBQUE7RUN3Qk47O0VEdEJFO0lBQ0ksZUFBQTtFQ3lCTjtBQUNGOztBRFRBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBSUEsbUJBQUE7QUNRSjs7QURYSTtFQUNJLDBCQUFBO0FDYVI7O0FEVEE7RUFDSSwyQkFBQTtBQ1lKOztBRFZBO0VBQ0kseUJBQUE7QUNhSjs7QURYQTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7QUNjSjs7QURaQTtFQUNJLDZCQUFBO0FDZUo7O0FEYkE7RUFDSSxjQUFBO0FDZ0JKOztBRGRBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDaUJKOztBRGhCSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDa0JSOztBRGZBO0VBQ0ksY0FBQTtBQ2tCSjs7QURoQkE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQ21CSjs7QURqQkE7RUFDSSw0QkFBQTtBQ29CSjs7QURyQkE7RUFDSSw0QkFBQTtBQ29CSjs7QURyQkE7RUFDSSw0QkFBQTtBQ29CSjs7QURyQkE7RUFDSSw0QkFBQTtBQ29CSjs7QURyQkE7RUFDSSw0QkFBQTtBQ29CSjs7QURsQkE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDcUJKOztBRG5CQTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDc0JKOztBRHBCQTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDdUJKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmp1bWJvdHJvbiB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ29JbWcge1xyXG4gICAgLy8gd2lkdGg6IDcxcHg7XHJcbiAgICBoZWlnaHQ6IDcxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmxvZ29JbWc6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wZG93bi1tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uYWRkTWFyZ2luVG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxubmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk7XHJcbn1cclxuLmJ0bl9ncm91cCB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb25maXJtIHtcclxuICAgIG1pbi13aWR0aDogNzBweCAhaW1wb3J0YW50O1xyXG59XHJcbnRhYmxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG59XHJcbnRyOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWFuQXZhdGFyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmY0MjtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG4uc2lkZW5hdiBhIHtcclxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG4uc2lkZW5hdiA+IHVsID4gbGkge1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuM2VtO1xyXG59XHJcbi5zaWRlbmF2IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuLmltYWdlQWRqdXN0IHtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XHJcbn1cclxuLy8gLmFwcExpbmsgLmNhcmQge1xyXG4vLyAgICAgYmFja2dyb3VuZDogMCAwO1xyXG4vLyAgICAgYm9yZGVyOiBub25lO1xyXG4vLyAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuLy8gfVxyXG4vLyAuYXBwTGluayB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjMjgzNTQ5O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5idG4tc3RvcmUge1xyXG4gICAgY29sb3I6ICNkZGQ7XHJcbiAgICBtaW4td2lkdGg6IDI1NHB4O1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZGQgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjRweDtcclxufVxyXG4uYnRuLXN0b3JlOmZvY3VzLFxyXG4uYnRuLXN0b3JlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1zdG9yZSAuYnRuLWNhcHRpb24sXHJcbi5idG4tc3RvcmUgLmJ0bi1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG4uYnRuLXN0b3JlIC5idG4tY2FwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxubmF2IHRkLFxyXG50YWJsZS5zZWFyY2hUYWJsZSB0ZCB7XHJcbiAgICBmb250LXNpemU6IDEuNTVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nOiAwLjU1cmVtO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IGZ1dHVyYTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxufVxyXG5uYXYgdGQgPiAuYXZhdGFyMixcclxudGFibGUuc2VhcmNoVGFibGUgdGQgPiAuYXZhdGFyMiB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcbm5hdiB0cixcclxudGFibGUuc2VhcmNoVGFibGUgdHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjYxNjM7XHJcbn1cclxubmF2IHRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjYxNjM7XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbi8vIG5hdiB0ZCB7XHJcbi8vICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICAgIHBhZGRpbmc6IDAuNTVyZW07XHJcbi8vIH1cclxuLnJvdW5kZWQtY2lyY2xlIHtcclxuICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcclxufVxyXG4ucm91bmRlZC1jaXJjbGUyIHtcclxuICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBib3JkZXI6IDFweCBncm9vdmUgI2UwMDk2NTtcclxufVxyXG4uYXZhdGFyMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4ubWRpLTM2cHgge1xyXG4gICAgZm9udC1zaXplOiAzOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5oMTA1IHtcclxuICAgIGhlaWdodDogMTA1cHg7XHJcbn1cclxuLmg3MCB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAgYS5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzdiOGFhMztcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4ubGlzdC1ncm91cCBhLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdiOGFhMztcclxufVxyXG4ubGlzdC1ncm91cCBhLmxpc3QtZ3JvdXAtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjN2I4YWEzO1xyXG59XHJcbi5saXN0LWdyb3VwIHAge1xyXG4gICAgY29sb3I6ICM3YjhhYTM7XHJcbn1cclxuLnNlY3Rpb25fcm93IHVsID4gbGk6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zZWN0aW9uX3JvdyB1bCA+IGxpIHtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG4uZHJvcHAge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWQ5NDcxICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbn1cclxuLmFjdGl2ZUNsciBhIHtcclxuICAgIGNvbG9yOiAjZTUxNjZiICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1vZGFsIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1vZGFsLWJhY2tkcm9wIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAubW9kYWwteGwge1xyXG4gICAgICAgIG1heC13aWR0aDogOTglICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZW5hdiBhIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbn1cclxuLy8gbGkjZXZlbnRCdG4ge1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbi8vIH1cclxuLy8gbGkjZXZlbnRCdG4gPiBhIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjYxNjM7XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4vLyAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggLTUwcHggMzZweCAtMjhweCBpbnNldDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gICAgIGhlaWdodDogNzBweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDglO1xyXG4vLyB9XHJcbmRpdi5hbGVydCB7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICAgIGZvbnQtZmFtaWx5OiBmdXR1cmE7XHJcbn1cclxuZGl2LmxhcmdlQWxlcnQge1xyXG4gICAgZm9udC1zaXplOiAxLjhlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5hbGVydC1saW5rIHtcclxuICAgIGNvbG9yOiAjMjVjYmIwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbSBoNCB7XHJcbiAgICBmb250LWZhbWlseTogZnV0dXJhSGVhZGluZztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuLmp1bWJvdHJvbiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gIWltcG9ydGFudDtcclxufVxyXG5pLm5hdkxpc3RJY29uIHtcclxuICAgIGNvbG9yOiAjMDY2MTYzO1xyXG59XHJcbmEubW9iaWxlU2VhcmNoIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICA+IGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDMlO1xyXG4gICAgfVxyXG59XHJcbi5jb2xvckdyZWVuIHtcclxuICAgIGNvbG9yOiAjZTc1NTU1O1xyXG59XHJcbmlucHV0Lm1vYlNlYXJjaCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzllOWU5ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA5NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW5wdXQubW9iU2VhcmNoOjpwbGFjZWhvbGRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbnRhYmxlLnNlYXJjaFRhYmxlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbn1cclxuLmN1c3RvbUljb25TaXoge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xyXG4gICAgbWFyZ2luOiBhdXRvIDE0cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbmEubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4iLCJhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uanVtYm90cm9uIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubG9nb0ltZyB7XG4gIGhlaWdodDogNzFweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubG9nb0ltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmFkZE1hcmdpblRvcCB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbm5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTtcbn1cblxuLmJ0bl9ncm91cCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5jb25maXJtIHtcbiAgbWluLXdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHtcbiAgZm9udC1zaXplOiAxLjE1ZW07XG59XG5cbnRyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFuQXZhdGFyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmY0MjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cblxuLnNpZGVuYXYgYSB7XG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzgxODE4MTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5zaWRlbmF2ID4gdWwgPiBsaSB7XG4gIGJhY2tncm91bmQ6IDAgMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjNlbTtcbn1cblxuLnNpZGVuYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4uc2lkZW5hdiAuY2xvc2VidG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5pbWFnZUFkanVzdCB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xufVxuXG4uYnRuLXN0b3JlIHtcbiAgY29sb3I6ICNkZGQ7XG4gIG1pbi13aWR0aDogMjU0cHg7XG4gIHBhZGRpbmc6IDEycHggMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkZGQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG4uYnRuLXN0b3JlOmZvY3VzLFxuLmJ0bi1zdG9yZTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tc3RvcmUgLmJ0bi1jYXB0aW9uLFxuLmJ0bi1zdG9yZSAuYnRuLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uYnRuLXN0b3JlIC5idG4tY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxubmF2IHRkLFxudGFibGUuc2VhcmNoVGFibGUgdGQge1xuICBmb250LXNpemU6IDEuNTVlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMC41NXJlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzMzMztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogZnV0dXJhO1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG59XG5cbm5hdiB0ZCA+IC5hdmF0YXIyLFxudGFibGUuc2VhcmNoVGFibGUgdGQgPiAuYXZhdGFyMiB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxubmF2IHRyLFxudGFibGUuc2VhcmNoVGFibGUgdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NjE2Mztcbn1cblxubmF2IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NjE2Mztcbn1cbm5hdiB0cjpob3ZlciB0ZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJvdW5kZWQtY2lyY2xlIHtcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yb3VuZGVkLWNpcmNsZTIge1xuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBib3JkZXI6IDFweCBncm9vdmUgI2UwMDk2NTtcbn1cblxuLmF2YXRhcjIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLm1kaS0zNnB4IHtcbiAgZm9udC1zaXplOiAzOXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5oMTA1IHtcbiAgaGVpZ2h0OiAxMDVweDtcbn1cblxuLmg3MCB7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLmxpc3QtZ3JvdXAgYS5saXN0LWdyb3VwLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM3YjhhYTM7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmxpc3QtZ3JvdXAgYS5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2I4YWEzO1xufVxuXG4ubGlzdC1ncm91cCBhLmxpc3QtZ3JvdXAtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3YjhhYTM7XG59XG5cbi5saXN0LWdyb3VwIHAge1xuICBjb2xvcjogIzdiOGFhMztcbn1cblxuLnNlY3Rpb25fcm93IHVsID4gbGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wcCB7XG4gIGJvcmRlci1jb2xvcjogIzFkOTQ3MSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxuLmFjdGl2ZUNsciBhIHtcbiAgY29sb3I6ICNlNTE2NmIgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJhY2tkcm9wIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5tb2RhbC14bCB7XG4gICAgbWF4LXdpZHRoOiA5OCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5zaWRlbmF2IHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgfVxuXG4gIC5zaWRlbmF2IGEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuZGl2LmFsZXJ0IHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6IGZ1dHVyYTtcbn1cbmRpdi5hbGVydCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmRpdi5sYXJnZUFsZXJ0IHtcbiAgZm9udC1zaXplOiAxLjhlbSAhaW1wb3J0YW50O1xufVxuXG4uYWxlcnQtbGluayB7XG4gIGNvbG9yOiAjMjVjYmIwICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0gaDQge1xuICBmb250LWZhbWlseTogZnV0dXJhSGVhZGluZztcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAhaW1wb3J0YW50O1xufVxuXG5pLm5hdkxpc3RJY29uIHtcbiAgY29sb3I6ICMwNjYxNjM7XG59XG5cbmEubW9iaWxlU2VhcmNoIHtcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuYS5tb2JpbGVTZWFyY2ggPiBpIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDQzJTtcbn1cblxuLmNvbG9yR3JlZW4ge1xuICBjb2xvcjogI2U3NTU1NTtcbn1cblxuaW5wdXQubW9iU2VhcmNoIHtcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMCU7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ZTllO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiA5NXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0Lm1vYlNlYXJjaDo6cGxhY2Vob2xkZXIge1xuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuXG50YWJsZS5zZWFyY2hUYWJsZSB7XG4gIHdpZHRoOiA4MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTAlO1xufVxuXG4uY3VzdG9tSWNvblNpeiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBtYXJnaW46IGF1dG8gMTRweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5hLm5hdi1saW5rIHtcbiAgcGFkZGluZy1yaWdodDogMzBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjZlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */"

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
        this.mobile = false;
        this.navStoresArr = [];
        this.productQuery = "5e7212be3f58470017428b28";
        this.dropDownSelected = null;
        this.selectedCatURL = null;
        // eventTitle = "";
        this.eventBarText = "";
        this.showMobSearch = false;
        this.changes = new MutationObserver(function (mutations) {
            _this.sidebarMinimized =
                _document.body.classList.contains("sidebar-minimized");
        });
        this.element = _document.body;
        this.changes.observe(this.element, {
            attributes: true,
            attributeFilter: ["class"],
        });
        if (window.screen.width < 450)
            this.mobile = true;
        else
            this.mobile = false;
        this._dataService
            .fetchAPI("/userDisplay/fetchEventName")
            .subscribe(function (res) {
            if (res.data) {
                _this.eventBarText = res.data["eventBarText"];
                // this.eventTitle = res.data['eventName'];
            }
        });
    }
    MenuComponent.prototype.ngOnDestroy = function () {
        this.changes.disconnect();
    };
    MenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._dataService
            .fetchOnlyLimit("/userDisplay/fetchTopBlogs", 8)
            .subscribe(function (res) {
            if (res.data)
                _this.blogArray = res.data;
        });
        this.fetchStores("5e7212be3f58470017428b28", "Apparel & Clothing");
    };
    MenuComponent.prototype.searchFunc = function (queri) {
        var _this = this;
        if (!queri)
            return;
        this.noResult = false;
        this.storeArray = null;
        this._dataService
            .fetchAPIWithLimit("/userDisplay/searchQuery", 10, queri, "")
            .subscribe(function (res) {
            if (res.data) {
                _this.storeArray = res.data;
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
        this._dataService
            .postAPI("/userDisplay/addEmailToDB", { emailId: emailId })
            .subscribe(function (res) {
            if (res.data) {
                _this.contactEmail = "";
                _this.isBusy = false;
                _this.toastr.success("We received your Email", "Success");
            }
            else {
                _this.isBusy = false;
                _this.toastr.error(res.message, "Error");
            }
        });
    };
    MenuComponent.prototype.focusOutFunc = function () {
        var _this = this;
        setTimeout(function () {
            _this.switch = false;
        }, 300);
    };
    MenuComponent.prototype.fetchStores = function (catId, selectedCat) {
        var _this = this;
        this._dataService
            .fetchWithQuery("/userDisplay/fetchStoresDropDown", catId)
            .subscribe(function (res) {
            if (res.data) {
                _this.navStoresArr = [];
                _this.navStoresArr = res.data;
            }
            else {
                _this.navStoresArr = [];
                _this.errorHandler(res.message);
            }
        });
        this.productQuery = catId;
        this.dropDownSelected = selectedCat;
        this.selectedCatURL = selectedCat.replace(/ /g, "-").toLowerCase();
    };
    MenuComponent.prototype.openDropDown = function () {
        setTimeout(function () {
            $("#dropDownModal").modal("show");
        }, 100);
    };
    MenuComponent.prototype.closeDropDown = function () {
        // document.getElementById('closebtn').click();
        $("#dropDownModal").modal("hide");
    };
    MenuComponent.prototype.openNav = function (e) {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "250px";
    };
    MenuComponent.prototype.closeNav = function (e) {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "0";
    };
    MenuComponent.prototype.openAndroidLink = function () {
        window.open("https://play.google.com/store/apps/details?id=io.publishers.digmycart", "_blank");
    };
    MenuComponent.prototype.isLinkActive = function (url) {
        var queryParamsIndex = this.router.url.indexOf("?");
        var baseUrl = queryParamsIndex === -1
            ? this.router.url
            : this.router.url.slice(0, queryParamsIndex);
        return baseUrl === url;
    };
    MenuComponent.prototype.openIosLink = function () {
        this.toastr.success("Coming soon...", "IOS App");
    };
    MenuComponent.prototype.errorHandler = function (err) {
        this.toastr.error(err, "Error");
    };
    MenuComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-menu",
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], Object])
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

module.exports = __webpack_require__(/*! D:\Danish work\YourDailyMagazine\YourDailyMagazine-FRONT\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map