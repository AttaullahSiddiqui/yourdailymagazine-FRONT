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

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\r\n  <a class=\"closebtn\" (click)=\"closeNav($event)\">&times;</a>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\" routerLink=\"/home\" (click)=\"closeNav($event)\">Home</li>\r\n    <li class=\"list-group-item\" routerLink=\"/stores\" (click)=\"closeNav($event)\">Stores</li>\r\n    <li class=\"list-group-item\" routerLink=\"/categories\" (click)=\"closeNav($event)\">Categories</li>\r\n    <li class=\"list-group-item\" routerLink=\"/blogs\" (click)=\"closeNav($event)\">Blogs</li>\r\n    <!-- <li class=\"list-group-item\" routerLink=\"/products\" (click)=\"closeNav($event)\">Products</li> -->\r\n    <li class=\"list-group-item\" routerLink=\"/about\" (click)=\"closeNav($event)\">About</li>\r\n    <li class=\"list-group-item\" routerLink=\"/privacy\" (click)=\"closeNav($event)\">Privacy</li>\r\n    <li class=\"list-group-item\" routerLink=\"/termsandconditions\" (click)=\"closeNav($event)\">Terms & Conditions</li>\r\n  </ul>\r\n</div>\r\n<nav class=\"header_area\" (click)=\"closeDropDown()\">\r\n  <div class=\"custom_container\">\r\n    <div class=\"nav-wrapper\">\r\n      <a class=\"brand-logo d-block d-sm-none mobileSearch\" (click)=\"showMobSearch=!showMobSearch\"><i\r\n          [ngClass]=\"{'colorGreen': showMobSearch}\" class=\"icon-magnifier d-block\"></i></a>\r\n      <a class=\"brand-logo d-none d-md-block cursor-pointer\" routerLink=\"/home\"><img\r\n          src=\"assets/img/brand/bmd_latest.jpg\" class=\"logoImg\" /></a>\r\n      <a style=\"margin-left: 13%;\" class=\"brand-logo d-block d-sm-none\"><img src=\"assets/img/brand/bmd_latest.jpg\"\r\n          class=\"logoImg\" /></a>\r\n      <a href=\"\" class=\"button-collapse\" (click)=\"openNav($event)\">\r\n        <i class=\"fa fa-bars\"></i></a>\r\n      <ul class=\"left_menu hide-on-med-and-down\">\r\n        <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\r\n        <li><a routerLink=\"/categories\" routerLinkActive=\"active\">Categories</a>\r\n        </li>\r\n        <li><a routerLink=\"/stores\" routerLinkActive=\"active\">Stores</a></li>\r\n        <li><a routerLink=\"/blogs\" routerLinkActive=\"active\">Blogs</a></li>\r\n        <!-- <li><a routerLink=\"/products\" routerLinkActive=\"active\">Products</a></li> -->\r\n        <!-- <li (mouseenter)=\"openDropDown()\"><a><i class=\"cui-chevron-bottom icons font-2xl navListIcon\"></i></a> -->\r\n        <!-- </li> -->\r\n      </ul>\r\n      <ul class=\"right right_menu hide-on-med-and-down\">\r\n        <li class=\"search_min\">\r\n          <ul class=\"search_from\">\r\n            <li class=\"notifications follow\">\r\n              <input style=\"border-radius: 2rem;\" (input)=\"searchFunc(searchBox)\" (focus)=\"switch=true\"\r\n                (focusout)=\"focusOutFunc()\" [(ngModel)]=\"searchBox\" placeholder=\"Search By Brand Name Or Website\"\r\n                type=\"text\">\r\n              <div class=\"dropdown-menu\" style=\"width: 100%;max-height: 80vh;overflow-y:auto;\"\r\n                *ngIf=\"searchBox && switch\">\r\n                <table class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <div class=\"text-center\" *ngIf=\"!storeArray && !noResult\">\r\n                        <div class=\"lds-ripple\">\r\n                          <div></div>\r\n                          <div></div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"text-center\" *ngIf=\"noResult\">\r\n                        <br>\r\n                        No result found for \"{{searchBox}}\"\r\n                        <br>\r\n                        <br>\r\n                      </div>\r\n                    </tr>\r\n                    <tr *ngFor=\"let store of storeArray | keyvalue\">\r\n                      <td class=\"text-center\" [routerLink]=\"['/store', store.value.storeURL]\">\r\n                        <div class=\"avatar2\">\r\n                          <img [src]=\"store.value.img\" class=\"rounded-circle\">\r\n                        </div>\r\n                      </td>\r\n                      <td [routerLink]=\"['/store', store.value.storeURL]\">\r\n                        <div>{{store.value.name}}</div>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </li>\r\n            <li><a class=\"search_icon\" style=\"border-radius: 0 2rem 2rem 0;\"><i class=\"icon-magnifier\"></i></a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"alert alert-secondary text-center cursor-pointer\" [ngClass]=\"{'largeAlert': mobile}\"\r\n  [routerLink]=\"['/event']\" role=\"alert\" *ngIf=\"eventBarText\">\r\n  <strong>Hurry Up !</strong> <br *ngIf=\"mobile\"> {{eventBarText}} &nbsp; <br *ngIf=\"mobile\"> <a class=\"alert-link\">Shop\r\n    Now</a>\r\n</div>\r\n\r\n<input class=\"form-control mobSearch\" (input)=\"searchFunc(searchBox)\" [(ngModel)]=\"searchBox\" *ngIf=\"showMobSearch\"\r\n  type=\"text\" placeholder=\"Type keyword..\">\r\n\r\n<table class=\"table table-striped table-outline mb-0 searchTable\" *ngIf=\"showMobSearch && searchBox\">\r\n  <tbody>\r\n    <tr class=\"text-center\">\r\n      <div class=\"text-center\" *ngIf=\"!storeArray && !noResult\">\r\n        <!-- <div class=\"text-center\" *ngIf=\"!storeArray && !noResult\"> -->\r\n        <div class=\"lds-ripple\">\r\n          <div></div>\r\n          <div></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-center\" *ngIf=\"noResult\">\r\n        <br>\r\n        No result found for \"{{searchBox}}\"\r\n        <br>\r\n        <br>\r\n      </div>\r\n    </tr>\r\n    <tr *ngFor=\"let store of storeArray | keyvalue\">\r\n      <td class=\"text-center\" [routerLink]=\"['/store', store.value.storeURL]\"\r\n        (click)=\"showMobSearch=false;searchBox=''\">\r\n        <div class=\"avatar2\">\r\n          <img [src]=\"store.value.img\" class=\"rounded-circle\">\r\n        </div>\r\n      </td>\r\n      <td [routerLink]=\"['/store', store.value.storeURL]\" (click)=\"showMobSearch=false;searchBox=''\">\r\n        <div>{{store.value.name}}</div>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<div class=\"app-body mt-0\" (click)=\"closeDropDown()\">\r\n  <main class=\"main\">\r\n    <div class=\"container-fluid px-0\" [ngClass]=\"{'addMarginTop': !eventBarText && !showMobSearch}\"\r\n      style=\"background-color: #EBECF0\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </main>\r\n</div>\r\n\r\n<footer class=\"footer_area\">\r\n  <div class=\"footer_row row\" style=\"padding:25px 20px auto !important\">\r\n    <div class=\"col-xs-12 col-md-4 l3 m6 footer_col text-center\">\r\n      <h3 class=\"categories_tittle text-center\">Navigate</h3>\r\n      <br>\r\n      <br>\r\n      <div class=\"popular_posts\">\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/home\">Home</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/stores\">Stores</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/categories\">Categories</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/blogs\">Blogs</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/about\">About</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/privacy\">Privacy & Policy</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/termsandconditions\">Terms & Conditions</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row valign-wrapper popular_item\">\r\n          <div class=\"col s9 p_content\">\r\n            <a routerLink=\"/sitemap\">SiteMap</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 l3 m6 footer_col\">\r\n      <div class=\"popular_posts\">\r\n        <h3 class=\"categories_tittle text-center\">Popular Blogs</h3>\r\n        <div class=\"text-center m-5\" *ngIf=\"!blogArray\">\r\n          <div class=\"lds-ripple\">\r\n            <div></div>\r\n            <div></div>\r\n          </div>\r\n        </div>\r\n        <ngb-carousel *ngIf=\"blogArray\" interval=\"5000\" [pauseOnHover]=\"false\" [showNavigationArrows]=\"false\">\r\n          <ng-template ngbSlide>\r\n            <ng-container>\r\n              <div class=\"list-group\">\r\n                <a class=\"list-group-item list-group-item-action mx-0\" [routerLink]=\"['/blog', blog.value.blogURL]\"\r\n                  *ngFor=\"let blog of blogArray | keyvalue | slice:0:4\">\r\n                  <div class=\"d-flex w-100 justify-content-between\">\r\n                    <h4 class=\"mb-1\">{{blog.value.title | slice:0:40}}</h4>\r\n                  </div>\r\n                  <p>{{blog.value.CreatedAt | date}}</p>\r\n                </a>\r\n              </div>\r\n              <br>\r\n              <br>\r\n            </ng-container>\r\n          </ng-template>\r\n          <ng-template ngbSlide>\r\n            <ng-container>\r\n              <div class=\"list-group\">\r\n                <a class=\"list-group-item list-group-item-action mx-0\" [routerLink]=\"['/blog', blog.value.blogURL]\"\r\n                  *ngFor=\"let blog of blogArray | keyvalue | slice:4:8\">\r\n                  <div class=\"d-flex w-100 justify-content-between\">\r\n                    <h4 class=\"mb-1\">{{blog.value.title | slice:0:40}}</h4>\r\n                  </div>\r\n                  <p>{{blog.value.CreatedAt | date}}</p>\r\n                </a>\r\n              </div>\r\n              <br>\r\n              <br>\r\n            </ng-container>\r\n          </ng-template>\r\n        </ngb-carousel>\r\n        <!-- <div class=\"row valign-wrapper popular_item\" [routerLink]=\"['/blog', blog.value._id]\"\r\n          *ngFor=\"let blog of blogArray | keyvalue\">\r\n          <div class=\"col-lg-3 col-sm-12 p_img\">\r\n            <div class=\"manAvatar\">\r\n              <img [src]=\"blog.value.img\" class=\"customImgRound imageAdjust\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-9 col-sm-12 s9 p_content\">\r\n            <span class=\".d-none .d-sm-block\"><br><br></span>\r\n            <a>{{blog.value.title}}</a>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 l3 m6 footer_col footer_trending text-center\">\r\n      <div class=\"social_Sharing\" style=\"padding-top: 0;\">\r\n        <h3 class=\"categories_tittle\">Social Sharing</h3>\r\n        <ul class=\"social_icon\">\r\n          <li><a href=\"https://twitter.com/BuyMeDeal1\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li>\r\n          <!-- <li><a class=\"googleplus\" href=\"https://www.youtube.com/channel/UCn0uamtcjb0CzqA2JiVlWgg\" target=\"_blank\"><i\r\n                class=\"fa fa-youtube\"></i></a></li> -->\r\n          <li><a class=\"instagram\" href=\"https://www.instagram.com/buymedeal/\" target=\"_blank\"><i\r\n                class=\"fa fa-instagram\"></i></a></li>\r\n          <li><a class=\"facebook\" href=\"https://www.facebook.com/Buymedeal-104706475339144\" target=\"_blank\"><i\r\n                class=\"fa fa-facebook\"></i></a></li>\r\n          <!-- <br *ngIf=\"!mobile\"> -->\r\n          <!-- <li><a class=\"pinterest\" href=\"https://www.pinterest.com/dig_mycart/\" target=\"_blank\"><i\r\n                class=\"fa fa-pinterest\"></i></a></li>\r\n          <li><a class=\"tumblr\" href=\"https://www.tumblr.com/blog/digmycart\" target=\"_blank\"><i\r\n                class=\"fa fa-tumblr\"></i></a></li> -->\r\n        </ul>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <div class=\"social_Sharing text-center\" style=\"padding:0 20px 0 20px\">\r\n        <h3 class=\"categories_tittle\">Connect With Us</h3>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <form #emailForm=\"ngForm\" novalidate (ngSubmit)=\"addEmailToDB(contactEmail)\">\r\n          <div class=\"input-group mb-3\">\r\n            <input type=\"email\"\r\n              style=\"background:transparent;color:white;font-size: 1.2em;height: 50px;width: 70%;border:1px solid #ecbe13;border-top-left-radius: 25px;border-bottom-left-radius: 25px;\"\r\n              name=\"email\" [email]=\"true\" required [(ngModel)]=\"contactEmail\" class=\"form-control pl-3\"\r\n              placeholder=\"Enter your email..\" />\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-secondary\" type=\"submit\"\r\n                style=\"height: 53px;margin-top: -1px;background-color: #ecbe13 !important;color:white;border-top-right-radius: 20px;border-bottom-right-radius: 20px;padding-right: 25px !important;padding-left: 25px !important;\"\r\n                [disabled]=\"!emailForm.form.valid\">Send</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"copy_right\">\r\n    &copy; 2022 <a href=\"\">BuyMeDeal</a>. All rights reserved.\r\n  </div>\r\n</footer>\r\n<div class=\"modal fade\" id=\"dropDownModal\" data-backdrop=\"true\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\"\r\n  style=\"max-height: 100vh !important;width: 70%;height:fit-content;overflow-y:scroll;background-color:#EBECF0;margin-top: 80px !important;\">\r\n  <div class=\"modal-dialog my-0\" role=\"document\" style=\"max-width: 100%;width: 100%;\">\r\n    <div class=\"modal-content\" style=\"background-color: #EBECF0;\" (mouseleave)=\"closeDropDown()\">\r\n      <!-- <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Delete Coupon</h4>\r\n        <button type=\"button\" class=\"close\" id=\"closebtn\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div> -->\r\n      <div class=\"modal-body p-0\">\r\n        <section class=\"min_container min_pages\">\r\n          <div class=\"section_row\">\r\n            <div class=\"col-md-3 px-0\">\r\n              <div class=\"left_side_bar pb-0 mt-0\" style=\"background-color: #EBECF0;\">\r\n                <div class=\"interests pt-0\">\r\n                  <ul class=\"interests_list pt-0\">\r\n                    <li (click)=\"fetchStores('5e7212be3f58470017428b28','Apparel And Clothing')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='5e7212be3f58470017428b28'}\"><a><i\r\n                          class=\"fa fa-hotel fa-lg\"></i>Apparel & Clothing</a>\r\n                    </li>\r\n                    <li (click)=\"fetchStores('5e7212c53f58470017428b29','Books')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='5e7212c53f58470017428b29'}\"><a><i\r\n                          class=\"fa fa-shopping-cart fa-lg\"></i>Books</a>\r\n                    </li>\r\n                    <li (click)=\"fetchStores('606b04b0e6445a00176c7fd5','Office Supplies')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='606b04b0e6445a00176c7fd5'}\"><a><i\r\n                          class=\"fa fa-bar-chart fa-lg\"></i>Office Supplies</a>\r\n                    </li>\r\n                    <li (click)=\"fetchStores('606b04e7e6445a00176c7fd6','Lifestyle & Accessories')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='606b04e7e6445a00176c7fd6'}\"><a><i\r\n                          class=\"fa fa-puzzle-piece fa-lg\"></i>Lifestyle & Accessories</a>\r\n                    </li>\r\n                    <li (click)=\"fetchStores('5e7213613f58470017428b38','Automotive')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='5e7213613f58470017428b38'}\"><a><i\r\n                          class=\"fa fa-plus-square fa-lg\"></i>Automotive</a>\r\n                    </li>\r\n                    <li (click)=\"fetchStores('5e7212d83f58470017428b2b','Electronics')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='5e7212d83f58470017428b2b'}\"><a><i\r\n                          class=\"fa fa-briefcase fa-lg\"></i>Electronics</a>\r\n                    </li>\r\n                    <li (click)=\"fetchStores('5e7212993f58470017428b23','Home & Garden')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='5e7212993f58470017428b23'}\"><a><i\r\n                          class=\"fa fa-home\"></i>Home & Garden</a></li>\r\n                    <li (click)=\"fetchStores('5e7212a03f58470017428b24','Baby & Kids')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='5e7212a03f58470017428b24'}\"><a><i\r\n                          class=\"fa fa-life-ring\"></i>Baby & Kids</a></li>\r\n                    <li (click)=\"fetchStores('606b058ce6445a00176c7fd8','Sports Accessories')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='606b058ce6445a00176c7fd8'}\"><a><i\r\n                          class=\"fa fa-object-group\"></i>Sports Accessories</a></li>\r\n                    <li (click)=\"fetchStores('606b05bee6445a00176c7fd9','Bed & Bath')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='606b05bee6445a00176c7fd9'}\"><a><i\r\n                          class=\"fa fa-hotel\"></i>Bed & Bath</a></li>\r\n                    <li (click)=\"fetchStores('606b05e9e6445a00176c7fda','Tech Accessories')\"\r\n                      [ngClass]=\"{'activeClr': productQuery=='606b05e9e6445a00176c7fda'}\"><a><i\r\n                          class=\"fa fa-bank\"></i>Tech Accessories</a></li>\r\n                  </ul>\r\n                  <br>\r\n                  <br>\r\n                  <br>\r\n                  <button type=\"button\" class=\"btn btn-outline-dark btn-block\" routerLink=\"/categories\"\r\n                    (click)=\"closeDropDown()\">View All\r\n                    Categories</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-9 text-center\">\r\n              <p class=\"display-4 mt-1\" style=\"font-size:3.2em\">{{dropDownSelected}}</p>\r\n              <p class=\"display-5\" style=\"font-size: 1.8em;font-weight: 200;margin-top: 8vh;\"\r\n                *ngIf=\"!navStoresArr.length\">No store in this\r\n                Category...</p>\r\n              <div class=\"row justify-content-center mb-0 mt-4\">\r\n                <div class=\"col-md-3 cursor-pointer rounded\" *ngFor=\"let store of navStoresArr | keyvalue\"\r\n                  [routerLink]=\"['/store', store.value.storeURL]\">\r\n                  <div class=\"brand-card dropp\">\r\n                    <div class=\"brand-card-header\">\r\n                      <img [src]=\"store.value.img\" class=\"rounded-circle2 roundImg\" width=\"100\" height=\"100\" />\r\n                    </div>\r\n                    <div class=\"brand-card-body text-center\">\r\n                      <p class=\"display-5 text-muted\" style=\"font-size: 1.3em;\">{{store.value.name}}</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-outline-dark\"\r\n                style=\"position: absolute;bottom: 0 !important;left: 42%;\" [routerLink]=\"['/category', selectedCatURL]\"\r\n                (click)=\"closeDropDown()\">View All Stores</button>\r\n            </div>\r\n          </div>\r\n        </section>\r\n      </div>\r\n      <!-- <div class=\"modal-footer text-center\" style=\"justify-content: center;\">\r\n        <i class=\"fa fa-chevron-up cursor-pointer\" aria-hidden=\"true\" style=\"font-size: 2.4em;color:#ecbe13\"\r\n          id=\"closebtn\" data-dismiss=\"modal\"></i>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "a:hover {\n  text-decoration: none;\n}\n\n.jumbotron {\n  padding: 0 !important;\n}\n\n.logoImg {\n  height: 71px;\n  margin-top: 5px;\n}\n\n.logoImg:hover {\n  cursor: pointer;\n}\n\n.dropdown-menu {\n  display: block;\n  margin-top: 15px;\n}\n\n.addMarginTop {\n  margin-top: 70px;\n}\n\nnav {\n  position: fixed;\n  z-index: 9;\n}\n\n.btn_group {\n  float: left !important;\n}\n\n.confirm {\n  min-width: 70px !important;\n}\n\ntable {\n  font-size: 1.15em;\n}\n\ntr:hover {\n  cursor: pointer;\n}\n\n.manAvatar {\n  width: 50px;\n  height: 50px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50%;\n  margin-left: 10px;\n}\n\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  background-color: #232f42;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n}\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n\n.sidenav > ul > li {\n  background: 0 0;\n  color: #fff;\n  font-size: 1.5em;\n  line-height: 2.3em;\n}\n\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n.imageAdjust {\n  width: inherit;\n  height: inherit;\n  -ms-interpolation-mode: nearest-neighbor;\n      image-rendering: -moz-crisp-edges;\n      image-rendering: pixelated;\n}\n\n.btn-store {\n  color: #ddd;\n  min-width: 254px;\n  padding: 12px 20px !important;\n  border-color: #ddd !important;\n  height: 64px;\n}\n\n.btn-store:focus,\n.btn-store:hover {\n  color: #fff !important;\n}\n\n.btn-store .btn-caption,\n.btn-store .btn-label {\n  display: block;\n  text-align: left;\n  line-height: 1;\n}\n\n.btn-store .btn-caption {\n  font-size: 24px;\n}\n\nnav td,\ntable.searchTable td {\n  font-size: 1.4em;\n  font-weight: 600;\n  padding: 0.55rem;\n  height: auto;\n  color: #333;\n  vertical-align: middle;\n  border: none;\n}\n\nnav td > .avatar2,\ntable.searchTable td > .avatar2 {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\nnav tr,\ntable.searchTable tr {\n  border-bottom: 1px solid #747070;\n}\n\nnav tr:hover {\n  background-color: #70ccb0;\n}\n\nnav tr:hover td {\n  color: white;\n}\n\n.rounded-circle {\n  width: 65px !important;\n  height: 65px !important;\n}\n\n.rounded-circle2 {\n  width: 80px !important;\n  height: 80px !important;\n  border-radius: 50%;\n  margin-top: 22px;\n  border: 1px groove #e00965;\n}\n\n.avatar2 {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n}\n\n.mdi-36px {\n  font-size: 39px;\n  margin-right: 10px;\n}\n\n.h105 {\n  height: 105px;\n}\n\n.h70 {\n  height: 70px;\n}\n\n.list-group a.list-group-item {\n  background-color: transparent;\n  color: #7b8aa3;\n  border: none;\n}\n\n.list-group a.list-group-item:hover {\n  border-bottom: none;\n  border: 1px solid #7b8aa3;\n}\n\n.list-group a.list-group-item:not(:last-child) {\n  border-bottom: 1px solid #7b8aa3;\n}\n\n.list-group p {\n  color: #7b8aa3;\n}\n\n.section_row ul > li:hover {\n  cursor: pointer;\n}\n\n.dropp {\n  border-color: #1d9471 !important;\n  border-radius: 30px;\n  border-width: 2px;\n}\n\n.activeClr a {\n  color: #e5166b !important;\n}\n\n.modal {\n  pointer-events: none !important;\n}\n\n.modal-backdrop {\n  display: none !important;\n}\n\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 98% !important;\n  }\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n\n  .sidenav a {\n    font-size: 18px;\n  }\n}\n\ndiv.alert {\n  margin-top: 80px;\n  font-size: 1.5em;\n  margin-bottom: 0;\n  font-family: futura;\n}\n\ndiv.alert a {\n  text-decoration: underline;\n}\n\ndiv.largeAlert {\n  font-size: 1.8em !important;\n}\n\n.alert-link {\n  color: #25cbb0 !important;\n}\n\n.list-group-item h4 {\n  font-family: futuraHeading;\n  font-weight: 900;\n}\n\n.jumbotron {\n  padding: 1rem 1rem !important;\n}\n\ni.navListIcon {\n  color: #ecbe13;\n}\n\na.mobileSearch {\n  margin-left: 60%;\n  height: 80px;\n}\n\na.mobileSearch > i {\n  font-size: 1.2em;\n  font-weight: bold;\n  margin-top: 43%;\n}\n\n.colorGreen {\n  color: #316b83;\n}\n\ninput.mobSearch {\n  width: 80%;\n  position: relative;\n  left: 10%;\n  font-size: 1.6em;\n  height: 60px !important;\n  border: 1px solid #9e9e9e;\n  margin-bottom: 0;\n  margin-top: 95px !important;\n}\n\ninput.mobSearch::-webkit-input-placeholder {\n  margin-left: 20px !important;\n}\n\ninput.mobSearch::-moz-placeholder {\n  margin-left: 20px !important;\n}\n\ninput.mobSearch:-ms-input-placeholder {\n  margin-left: 20px !important;\n}\n\ninput.mobSearch::-ms-input-placeholder {\n  margin-left: 20px !important;\n}\n\ninput.mobSearch::placeholder {\n  margin-left: 20px !important;\n}\n\ntable.searchTable {\n  width: 80%;\n  position: relative;\n  left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9EOlxcRGFuaXNoIHdvcmtcXEJ1eU1lRGVhbFxcQnV5TWVEZWFsLUZST05UL3NyY1xcYXBwXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7QUNFSjs7QURBQTtFQUVJLFlBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQ01KOztBREpBO0VBQ0ksc0JBQUE7QUNPSjs7QURMQTtFQUNJLDBCQUFBO0FDUUo7O0FETkE7RUFDSSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0ksZUFBQTtBQ1VKOztBRFJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1dKOztBRFRBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNZSjs7QURWQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2FKOztBRFhBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDY0o7O0FEWkE7RUFDSSxjQUFBO0FDZUo7O0FEYkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtNQUFBLGlDQUFBO01BQUEsMEJBQUE7QUNpQko7O0FETkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ1NKOztBRFBBOztFQUVJLHNCQUFBO0FDVUo7O0FEUkE7O0VBRUksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1dKOztBRFRBO0VBQ0ksZUFBQTtBQ1lKOztBRFZBOztFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDYUo7O0FEWEE7O0VBRUksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FDY0o7O0FEWkE7O0VBRUksZ0NBQUE7QUNlSjs7QURiQTtFQUNJLHlCQUFBO0FDZ0JKOztBRGZJO0VBQ0ksWUFBQTtBQ2lCUjs7QURUQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUNZSjs7QURWQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNhSjs7QURYQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2NKOztBRFpBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDZUo7O0FEYkE7RUFDSSxhQUFBO0FDZ0JKOztBRGRBO0VBQ0ksWUFBQTtBQ2lCSjs7QURmQTtFQUNJLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNrQko7O0FEaEJBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQ21CSjs7QURqQkE7RUFDSSxnQ0FBQTtBQ29CSjs7QURsQkE7RUFDSSxjQUFBO0FDcUJKOztBRG5CQTtFQUNJLGVBQUE7QUNzQko7O0FEakJBO0VBQ0ksZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDb0JKOztBRGxCQTtFQUNJLHlCQUFBO0FDcUJKOztBRG5CQTtFQUNJLCtCQUFBO0FDc0JKOztBRHBCQTtFQUNJLHdCQUFBO0FDdUJKOztBRHJCQTtFQUNJO0lBQ0kseUJBQUE7RUN3Qk47QUFDRjs7QUR0QkE7RUFDSTtJQUNJLGlCQUFBO0VDd0JOOztFRHRCRTtJQUNJLGVBQUE7RUN5Qk47QUFDRjs7QURUQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUlBLG1CQUFBO0FDUUo7O0FEWEk7RUFDSSwwQkFBQTtBQ2FSOztBRFRBO0VBQ0ksMkJBQUE7QUNZSjs7QURWQTtFQUNJLHlCQUFBO0FDYUo7O0FEWEE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0FDY0o7O0FEWkE7RUFDSSw2QkFBQTtBQ2VKOztBRGJBO0VBQ0ksY0FBQTtBQ2dCSjs7QURkQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ2lCSjs7QURoQkk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2tCUjs7QURmQTtFQUNJLGNBQUE7QUNrQko7O0FEaEJBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNtQko7O0FEakJBO0VBQ0ksNEJBQUE7QUNvQko7O0FEckJBO0VBQ0ksNEJBQUE7QUNvQko7O0FEckJBO0VBQ0ksNEJBQUE7QUNvQko7O0FEckJBO0VBQ0ksNEJBQUE7QUNvQko7O0FEckJBO0VBQ0ksNEJBQUE7QUNvQko7O0FEbEJBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ3FCSiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5qdW1ib3Ryb24ge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dvSW1nIHtcclxuICAgIC8vIHdpZHRoOiA3MXB4O1xyXG4gICAgaGVpZ2h0OiA3MXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5sb2dvSW1nOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmFkZE1hcmdpblRvcCB7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcbm5hdiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcbi5idG5fZ3JvdXAge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4uY29uZmlybSB7XHJcbiAgICBtaW4td2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxufVxyXG50YWJsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMTVlbTtcclxufVxyXG50cjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1hbkF2YXRhciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uc2lkZW5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzJmNDI7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuLnNpZGVuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuLnNpZGVuYXYgPiB1bCA+IGxpIHtcclxuICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjNlbTtcclxufVxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcbi5zaWRlbmF2IC5jbG9zZWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbi5pbWFnZUFkanVzdCB7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xyXG59XHJcbi8vIC5hcHBMaW5rIC5jYXJkIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IDAgMDtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbi8vIH1cclxuLy8gLmFwcExpbmsge1xyXG4vLyAgICAgYmFja2dyb3VuZDogIzI4MzU0OTtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG4uYnRuLXN0b3JlIHtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgbWluLXdpZHRoOiAyNTRweDtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuLmJ0bi1zdG9yZTpmb2N1cyxcclxuLmJ0bi1zdG9yZTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tc3RvcmUgLmJ0bi1jYXB0aW9uLFxyXG4uYnRuLXN0b3JlIC5idG4tbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuLmJ0bi1zdG9yZSAuYnRuLWNhcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbm5hdiB0ZCxcclxudGFibGUuc2VhcmNoVGFibGUgdGQge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAwLjU1cmVtO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbm5hdiB0ZCA+IC5hdmF0YXIyLFxyXG50YWJsZS5zZWFyY2hUYWJsZSB0ZCA+IC5hdmF0YXIyIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxubmF2IHRyLFxyXG50YWJsZS5zZWFyY2hUYWJsZSB0ciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDExNiwgMTEyLCAxMTIpO1xyXG59XHJcbm5hdiB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBjY2IwO1xyXG4gICAgdGQge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG4vLyBuYXYgdGQge1xyXG4vLyAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICBwYWRkaW5nOiAwLjU1cmVtO1xyXG4vLyB9XHJcbi5yb3VuZGVkLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJvdW5kZWQtY2lyY2xlMiB7XHJcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNlMDA5NjU7XHJcbn1cclxuLmF2YXRhcjIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLm1kaS0zNnB4IHtcclxuICAgIGZvbnQtc2l6ZTogMzlweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uaDEwNSB7XHJcbiAgICBoZWlnaHQ6IDEwNXB4O1xyXG59XHJcbi5oNzAge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcbi5saXN0LWdyb3VwIGEubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICM3YjhhYTM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmxpc3QtZ3JvdXAgYS5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YjhhYTM7XHJcbn1cclxuLmxpc3QtZ3JvdXAgYS5saXN0LWdyb3VwLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzdiOGFhMztcclxufVxyXG4ubGlzdC1ncm91cCBwIHtcclxuICAgIGNvbG9yOiAjN2I4YWEzO1xyXG59XHJcbi5zZWN0aW9uX3JvdyB1bCA+IGxpOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2VjdGlvbl9yb3cgdWwgPiBsaSB7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuLmRyb3BwIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzFkOTQ3MSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG59XHJcbi5hY3RpdmVDbHIgYSB7XHJcbiAgICBjb2xvcjogI2U1MTY2YiAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLm1vZGFsLXhsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgLnNpZGVuYXYge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGVuYXYgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcbi8vIGxpI2V2ZW50QnRuIHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4vLyB9XHJcbi8vIGxpI2V2ZW50QnRuID4gYSB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNiZTEzO1xyXG4vLyAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuLy8gICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IC01MHB4IDM2cHggLTI4cHggaW5zZXQ7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbi8vICAgICBoZWlnaHQ6IDcwcHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA4JTtcclxuLy8gfVxyXG5kaXYuYWxlcnQge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgICBmb250LWZhbWlseTogZnV0dXJhO1xyXG59XHJcbmRpdi5sYXJnZUFsZXJ0IHtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW0gIWltcG9ydGFudDtcclxufVxyXG4uYWxlcnQtbGluayB7XHJcbiAgICBjb2xvcjogIzI1Y2JiMCAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0gaDQge1xyXG4gICAgZm9udC1mYW1pbHk6IGZ1dHVyYUhlYWRpbmc7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcbi5qdW1ib3Ryb24ge1xyXG4gICAgcGFkZGluZzogMXJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuaS5uYXZMaXN0SWNvbiB7XHJcbiAgICBjb2xvcjogI2VjYmUxMztcclxufVxyXG5hLm1vYmlsZVNlYXJjaCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgPiBpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQzJTtcclxuICAgIH1cclxufVxyXG4uY29sb3JHcmVlbiB7XHJcbiAgICBjb2xvcjogIzMxNmI4MztcclxufVxyXG5pbnB1dC5tb2JTZWFyY2gge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ZTllOWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogOTVweCAhaW1wb3J0YW50O1xyXG59XHJcbmlucHV0Lm1vYlNlYXJjaDo6cGxhY2Vob2xkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG50YWJsZS5zZWFyY2hUYWJsZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTAlO1xyXG59XHJcbiIsImE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5qdW1ib3Ryb24ge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvSW1nIHtcbiAgaGVpZ2h0OiA3MXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5sb2dvSW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uYWRkTWFyZ2luVG9wIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxubmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5O1xufVxuXG4uYnRuX2dyb3VwIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmNvbmZpcm0ge1xuICBtaW4td2lkdGg6IDcwcHggIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICBmb250LXNpemU6IDEuMTVlbTtcbn1cblxudHI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYW5BdmF0YXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5zaWRlbmF2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyZjQyO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG4uc2lkZW5hdiBhIHtcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnNpZGVuYXYgPiB1bCA+IGxpIHtcbiAgYmFja2dyb3VuZDogMCAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuM2VtO1xufVxuXG4uc2lkZW5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5zaWRlbmF2IC5jbG9zZWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmltYWdlQWRqdXN0IHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XG59XG5cbi5idG4tc3RvcmUge1xuICBjb2xvcjogI2RkZDtcbiAgbWluLXdpZHRoOiAyNTRweDtcbiAgcGFkZGluZzogMTJweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi5idG4tc3RvcmU6Zm9jdXMsXG4uYnRuLXN0b3JlOmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1zdG9yZSAuYnRuLWNhcHRpb24sXG4uYnRuLXN0b3JlIC5idG4tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5idG4tc3RvcmUgLmJ0bi1jYXB0aW9uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5uYXYgdGQsXG50YWJsZS5zZWFyY2hUYWJsZSB0ZCB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDAuNTVyZW07XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICMzMzM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxubmF2IHRkID4gLmF2YXRhcjIsXG50YWJsZS5zZWFyY2hUYWJsZSB0ZCA+IC5hdmF0YXIyIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG5uYXYgdHIsXG50YWJsZS5zZWFyY2hUYWJsZSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzQ3MDcwO1xufVxuXG5uYXYgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBjY2IwO1xufVxubmF2IHRyOmhvdmVyIHRkIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucm91bmRlZC1jaXJjbGUge1xuICB3aWR0aDogNjVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbn1cblxuLnJvdW5kZWQtY2lyY2xlMiB7XG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZTAwOTY1O1xufVxuXG4uYXZhdGFyMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubWRpLTM2cHgge1xuICBmb250LXNpemU6IDM5cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmgxMDUge1xuICBoZWlnaHQ6IDEwNXB4O1xufVxuXG4uaDcwIHtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4ubGlzdC1ncm91cCBhLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzdiOGFhMztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubGlzdC1ncm91cCBhLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YjhhYTM7XG59XG5cbi5saXN0LWdyb3VwIGEubGlzdC1ncm91cC1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzdiOGFhMztcbn1cblxuLmxpc3QtZ3JvdXAgcCB7XG4gIGNvbG9yOiAjN2I4YWEzO1xufVxuXG4uc2VjdGlvbl9yb3cgdWwgPiBsaTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3BwIHtcbiAgYm9yZGVyLWNvbG9yOiAjMWQ5NDcxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuXG4uYWN0aXZlQ2xyIGEge1xuICBjb2xvcjogI2U1MTY2YiAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtYmFja2Ryb3Age1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm1vZGFsLXhsIHtcbiAgICBtYXgtd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG5cbiAgLnNpZGVuYXYgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG5kaXYuYWxlcnQge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogZnV0dXJhO1xufVxuZGl2LmFsZXJ0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuZGl2LmxhcmdlQWxlcnQge1xuICBmb250LXNpemU6IDEuOGVtICFpbXBvcnRhbnQ7XG59XG5cbi5hbGVydC1saW5rIHtcbiAgY29sb3I6ICMyNWNiYjAgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSBoNCB7XG4gIGZvbnQtZmFtaWx5OiBmdXR1cmFIZWFkaW5nO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uanVtYm90cm9uIHtcbiAgcGFkZGluZzogMXJlbSAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbmkubmF2TGlzdEljb24ge1xuICBjb2xvcjogI2VjYmUxMztcbn1cblxuYS5tb2JpbGVTZWFyY2gge1xuICBtYXJnaW4tbGVmdDogNjAlO1xuICBoZWlnaHQ6IDgwcHg7XG59XG5hLm1vYmlsZVNlYXJjaCA+IGkge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNDMlO1xufVxuXG4uY29sb3JHcmVlbiB7XG4gIGNvbG9yOiAjMzE2YjgzO1xufVxuXG5pbnB1dC5tb2JTZWFyY2gge1xuICB3aWR0aDogODAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwJTtcbiAgZm9udC1zaXplOiAxLjZlbTtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ZTllOWU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDk1cHggIWltcG9ydGFudDtcbn1cblxuaW5wdXQubW9iU2VhcmNoOjpwbGFjZWhvbGRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlLnNlYXJjaFRhYmxlIHtcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMCU7XG59Il19 */"

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

module.exports = __webpack_require__(/*! D:\Danish work\BuyMeDeal\BuyMeDeal-FRONT\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map