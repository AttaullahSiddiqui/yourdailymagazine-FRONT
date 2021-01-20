(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-menu-menu-module"],{

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js ***!
  \***********************************************************************/
/*! exports provided: ModalDismissReasons, NgbAccordion, NgbAccordionConfig, NgbAccordionModule, NgbActiveModal, NgbAlert, NgbAlertConfig, NgbAlertModule, NgbButtonLabel, NgbButtonsModule, NgbCalendar, NgbCalendarGregorian, NgbCalendarHebrew, NgbCalendarIslamicCivil, NgbCalendarIslamicUmalqura, NgbCalendarPersian, NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbCheckBox, NgbCollapse, NgbCollapseModule, NgbDate, NgbDateAdapter, NgbDateNativeAdapter, NgbDateNativeUTCAdapter, NgbDateParserFormatter, NgbDatepicker, NgbDatepickerConfig, NgbDatepickerI18n, NgbDatepickerI18nHebrew, NgbDatepickerModule, NgbDropdown, NgbDropdownAnchor, NgbDropdownConfig, NgbDropdownItem, NgbDropdownMenu, NgbDropdownModule, NgbDropdownToggle, NgbHighlight, NgbInputDatepicker, NgbModal, NgbModalConfig, NgbModalModule, NgbModalRef, NgbModule, NgbNavbar, NgbPagination, NgbPaginationConfig, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationModule, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPanel, NgbPanelContent, NgbPanelHeader, NgbPanelTitle, NgbPanelToggle, NgbPopover, NgbPopoverConfig, NgbPopoverModule, NgbProgressbar, NgbProgressbarConfig, NgbProgressbarModule, NgbRadio, NgbRadioGroup, NgbRating, NgbRatingConfig, NgbRatingModule, NgbSlide, NgbSlideEventDirection, NgbSlideEventSource, NgbTab, NgbTabContent, NgbTabTitle, NgbTabset, NgbTabsetConfig, NgbTabsetModule, NgbTimeAdapter, NgbTimepicker, NgbTimepickerConfig, NgbTimepickerI18n, NgbTimepickerModule, NgbToast, NgbToastConfig, NgbToastHeader, NgbToastModule, NgbTooltip, NgbTooltipConfig, NgbTooltipModule, NgbTypeahead, NgbTypeaheadConfig, NgbTypeaheadModule, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDismissReasons", function() { return ModalDismissReasons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordion", function() { return NgbAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionConfig", function() { return NgbAccordionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionModule", function() { return NgbAccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbActiveModal", function() { return NgbActiveModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlert", function() { return NgbAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlertConfig", function() { return NgbAlertConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlertModule", function() { return NgbAlertModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbButtonLabel", function() { return NgbButtonLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbButtonsModule", function() { return NgbButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendar", function() { return NgbCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarGregorian", function() { return NgbCalendarGregorian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarHebrew", function() { return NgbCalendarHebrew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicCivil", function() { return NgbCalendarIslamicCivil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicUmalqura", function() { return NgbCalendarIslamicUmalqura; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarPersian", function() { return NgbCalendarPersian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarousel", function() { return NgbCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselConfig", function() { return NgbCarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselModule", function() { return NgbCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCheckBox", function() { return NgbCheckBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCollapse", function() { return NgbCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCollapseModule", function() { return NgbCollapseModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDate", function() { return NgbDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateAdapter", function() { return NgbDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateNativeAdapter", function() { return NgbDateNativeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateNativeUTCAdapter", function() { return NgbDateNativeUTCAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateParserFormatter", function() { return NgbDateParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepicker", function() { return NgbDatepicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerConfig", function() { return NgbDatepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18n", function() { return NgbDatepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18nHebrew", function() { return NgbDatepickerI18nHebrew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerModule", function() { return NgbDatepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdown", function() { return NgbDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownAnchor", function() { return NgbDropdownAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownConfig", function() { return NgbDropdownConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownItem", function() { return NgbDropdownItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownMenu", function() { return NgbDropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownModule", function() { return NgbDropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownToggle", function() { return NgbDropdownToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbHighlight", function() { return NgbHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbInputDatepicker", function() { return NgbInputDatepicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModal", function() { return NgbModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalConfig", function() { return NgbModalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalModule", function() { return NgbModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalRef", function() { return NgbModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModule", function() { return NgbModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbNavbar", function() { return NgbNavbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPagination", function() { return NgbPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationConfig", function() { return NgbPaginationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationEllipsis", function() { return NgbPaginationEllipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationFirst", function() { return NgbPaginationFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationLast", function() { return NgbPaginationLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationModule", function() { return NgbPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationNext", function() { return NgbPaginationNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationNumber", function() { return NgbPaginationNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationPrevious", function() { return NgbPaginationPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanel", function() { return NgbPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelContent", function() { return NgbPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelHeader", function() { return NgbPanelHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelTitle", function() { return NgbPanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelToggle", function() { return NgbPanelToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopover", function() { return NgbPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverConfig", function() { return NgbPopoverConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverModule", function() { return NgbPopoverModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbar", function() { return NgbProgressbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarConfig", function() { return NgbProgressbarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarModule", function() { return NgbProgressbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRadio", function() { return NgbRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRadioGroup", function() { return NgbRadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRating", function() { return NgbRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRatingConfig", function() { return NgbRatingConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRatingModule", function() { return NgbRatingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbSlide", function() { return NgbSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbSlideEventDirection", function() { return NgbSlideEventDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbSlideEventSource", function() { return NgbSlideEventSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTab", function() { return NgbTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabContent", function() { return NgbTabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabTitle", function() { return NgbTabTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabset", function() { return NgbTabset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetConfig", function() { return NgbTabsetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetModule", function() { return NgbTabsetModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimeAdapter", function() { return NgbTimeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepicker", function() { return NgbTimepicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerConfig", function() { return NgbTimepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerI18n", function() { return NgbTimepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerModule", function() { return NgbTimepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbToast", function() { return NgbToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbToastConfig", function() { return NgbToastConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbToastHeader", function() { return NgbToastHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbToastModule", function() { return NgbToastModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltip", function() { return NgbTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipConfig", function() { return NgbTooltipConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipModule", function() { return NgbTooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeahead", function() { return NgbTypeahead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadConfig", function() { return NgbTypeaheadConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadModule", function() { return NgbTypeaheadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NGB_CAROUSEL_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NGB_DATEPICKER_CALENDAR_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return ARIA_LIVE_DELAY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return Live; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return NgbCalendarHijri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return ContentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgbDatepickerMonthView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgbDatepickerDayView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgbDatepickerNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgbDatepickerNavigationSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NGB_DATEPICKER_18N_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgbDatepickerI18nDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NGB_DATEPICKER_DATE_ADAPTER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NgbDateStructAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return NGB_DATEPICKER_PARSER_FORMATTER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return NgbDateISOParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return NgbPopoverWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return NGB_DATEPICKER_TIME_ADAPTER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return NgbTimeStructAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return NGB_TIMEPICKER_I18N_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return NgbTimepickerI18nDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return NgbTooltipWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return NgbTypeaheadWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return NgbDatepickerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return NgbDatepickerKeyMapService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return NgbModalBackdrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return NgbModalWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return NgbModalStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return ScrollBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return ARIA_LIVE_DELAY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function toInteger(value) {
    return parseInt("" + value, 10);
}
/**
 * @param {?} value
 * @return {?}
 */
function toString(value) {
    return (value !== undefined && value !== null) ? "" + value : '';
}
/**
 * @param {?} value
 * @param {?} max
 * @param {?=} min
 * @return {?}
 */
function getValueInRange(value, max, min) {
    if (min === void 0) { min = 0; }
    return Math.max(Math.min(value, max), min);
}
/**
 * @param {?} value
 * @return {?}
 */
function isString(value) {
    return typeof value === 'string';
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumber(value) {
    return !isNaN(toInteger(value));
}
/**
 * @param {?} value
 * @return {?}
 */
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */
function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
/**
 * @param {?} text
 * @return {?}
 */
function regExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
/**
 * @param {?} element
 * @param {?} className
 * @return {?}
 */
function hasClassName(element, className) {
    return element && element.className && element.className.split &&
        element.className.split(/\s+/).indexOf(className) >= 0;
}
if (typeof Element !== 'undefined' && !Element.prototype.closest) {
    // Polyfill for ie10+
    if (!Element.prototype.matches) {
        // IE uses the non-standard name: msMatchesSelector
        Element.prototype.matches = ((/** @type {?} */ (Element.prototype))).msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = (/**
     * @param {?} s
     * @return {?}
     */
    function (s) {
        /** @type {?} */
        var el = this;
        if (!document.documentElement.contains(el)) {
            return null;
        }
        do {
            if (el.matches(s)) {
                return el;
            }
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    });
}
/**
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function closest(element, selector) {
    if (!selector) {
        return null;
    }
    return element.closest(selector);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configuration service for the [NgbAccordion](#/components/accordion/api#NgbAccordion) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all accordions used in the application.
 */
var NgbAccordionConfig = /** @class */ (function () {
    function NgbAccordionConfig() {
        this.closeOthers = false;
    }
    NgbAccordionConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbAccordionConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbAccordionConfig_Factory() { return new NgbAccordionConfig(); }, token: NgbAccordionConfig, providedIn: "root" });
    return NgbAccordionConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var nextId = 0;
/**
 * A directive that wraps an accordion panel header with any HTML markup and a toggling button
 * marked with [`NgbPanelToggle`](#/components/accordion/api#NgbPanelToggle).
 * See the [header customization demo](#/components/accordion/examples#header) for more details.
 *
 * You can also use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to customize only the panel title.
 *
 * \@since 4.1.0
 */
var NgbPanelHeader = /** @class */ (function () {
    function NgbPanelHeader(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPanelHeader]' },] }
    ];
    /** @nocollapse */
    NgbPanelHeader.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgbPanelHeader;
}());
/**
 * A directive that wraps only the panel title with HTML markup inside.
 *
 * You can also use [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader) to customize the full panel header.
 */
var NgbPanelTitle = /** @class */ (function () {
    function NgbPanelTitle(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelTitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPanelTitle]' },] }
    ];
    /** @nocollapse */
    NgbPanelTitle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgbPanelTitle;
}());
/**
 * A directive that wraps the accordion panel content.
 */
var NgbPanelContent = /** @class */ (function () {
    function NgbPanelContent(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPanelContent]' },] }
    ];
    /** @nocollapse */
    NgbPanelContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgbPanelContent;
}());
/**
 * A directive that wraps an individual accordion panel with title and collapsible content.
 */
var NgbPanel = /** @class */ (function () {
    function NgbPanel() {
        /**
         *  If `true`, the panel is disabled an can't be toggled.
         */
        this.disabled = false;
        /**
         *  An optional id for the panel that must be unique on the page.
         *
         *  If not provided, it will be auto-generated in the `ngb-panel-xxx` format.
         */
        this.id = "ngb-panel-" + nextId++;
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    NgbPanel.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.titleTpl = this.titleTpls.first;
        this.headerTpl = this.headerTpls.first;
        this.contentTpl = this.contentTpls.first;
    };
    NgbPanel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngb-panel' },] }
    ];
    NgbPanel.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        titleTpls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbPanelTitle, { descendants: false },] }],
        headerTpls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbPanelHeader, { descendants: false },] }],
        contentTpls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbPanelContent, { descendants: false },] }]
    };
    return NgbPanel;
}());
/**
 * Accordion is a collection of collapsible panels (bootstrap cards).
 *
 * It can ensure only one panel is opened at a time and allows to customize panel
 * headers.
 */
var NgbAccordion = /** @class */ (function () {
    function NgbAccordion(config) {
        /**
         * An array or comma separated strings of panel ids that should be opened **initially**.
         *
         * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
         * the `(panelChange)` event.
         */
        this.activeIds = [];
        /**
         * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
         */
        this.destroyOnHide = true;
        /**
         * Event emitted right before the panel toggle happens.
         *
         * See [NgbPanelChangeEvent](#/components/accordion/api#NgbPanelChangeEvent) for payload details.
         */
        this.panelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Checks if a panel with a given id is expanded.
     */
    /**
     * Checks if a panel with a given id is expanded.
     * @param {?} panelId
     * @return {?}
     */
    NgbAccordion.prototype.isExpanded = /**
     * Checks if a panel with a given id is expanded.
     * @param {?} panelId
     * @return {?}
     */
    function (panelId) { return this.activeIds.indexOf(panelId) > -1; };
    /**
     * Expands a panel with a given id.
     *
     * Has no effect if the panel is already expanded or disabled.
     */
    /**
     * Expands a panel with a given id.
     *
     * Has no effect if the panel is already expanded or disabled.
     * @param {?} panelId
     * @return {?}
     */
    NgbAccordion.prototype.expand = /**
     * Expands a panel with a given id.
     *
     * Has no effect if the panel is already expanded or disabled.
     * @param {?} panelId
     * @return {?}
     */
    function (panelId) { this._changeOpenState(this._findPanelById(panelId), true); };
    /**
     * Expands all panels, if `[closeOthers]` is `false`.
     *
     * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
     */
    /**
     * Expands all panels, if `[closeOthers]` is `false`.
     *
     * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
     * @return {?}
     */
    NgbAccordion.prototype.expandAll = /**
     * Expands all panels, if `[closeOthers]` is `false`.
     *
     * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.closeOtherPanels) {
            if (this.activeIds.length === 0 && this.panels.length) {
                this._changeOpenState(this.panels.first, true);
            }
        }
        else {
            this.panels.forEach((/**
             * @param {?} panel
             * @return {?}
             */
            function (panel) { return _this._changeOpenState(panel, true); }));
        }
    };
    /**
     * Collapses a panel with the given id.
     *
     * Has no effect if the panel is already collapsed or disabled.
     */
    /**
     * Collapses a panel with the given id.
     *
     * Has no effect if the panel is already collapsed or disabled.
     * @param {?} panelId
     * @return {?}
     */
    NgbAccordion.prototype.collapse = /**
     * Collapses a panel with the given id.
     *
     * Has no effect if the panel is already collapsed or disabled.
     * @param {?} panelId
     * @return {?}
     */
    function (panelId) { this._changeOpenState(this._findPanelById(panelId), false); };
    /**
     * Collapses all opened panels.
     */
    /**
     * Collapses all opened panels.
     * @return {?}
     */
    NgbAccordion.prototype.collapseAll = /**
     * Collapses all opened panels.
     * @return {?}
     */
    function () {
        var _this = this;
        this.panels.forEach((/**
         * @param {?} panel
         * @return {?}
         */
        function (panel) { _this._changeOpenState(panel, false); }));
    };
    /**
     * Toggles a panel with the given id.
     *
     * Has no effect if the panel is disabled.
     */
    /**
     * Toggles a panel with the given id.
     *
     * Has no effect if the panel is disabled.
     * @param {?} panelId
     * @return {?}
     */
    NgbAccordion.prototype.toggle = /**
     * Toggles a panel with the given id.
     *
     * Has no effect if the panel is disabled.
     * @param {?} panelId
     * @return {?}
     */
    function (panelId) {
        /** @type {?} */
        var panel = this._findPanelById(panelId);
        if (panel) {
            this._changeOpenState(panel, !panel.isOpen);
        }
    };
    /**
     * @return {?}
     */
    NgbAccordion.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // active id updates
        if (isString(this.activeIds)) {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        // update panels open states
        this.panels.forEach((/**
         * @param {?} panel
         * @return {?}
         */
        function (panel) { return panel.isOpen = !panel.disabled && _this.activeIds.indexOf(panel.id) > -1; }));
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0]);
            this._updateActiveIds();
        }
    };
    /**
     * @private
     * @param {?} panel
     * @param {?} nextState
     * @return {?}
     */
    NgbAccordion.prototype._changeOpenState = /**
     * @private
     * @param {?} panel
     * @param {?} nextState
     * @return {?}
     */
    function (panel, nextState) {
        if (panel && !panel.disabled && panel.isOpen !== nextState) {
            /** @type {?} */
            var defaultPrevented_1 = false;
            this.panelChange.emit({ panelId: panel.id, nextState: nextState, preventDefault: (/**
                 * @return {?}
                 */
                function () { defaultPrevented_1 = true; }) });
            if (!defaultPrevented_1) {
                panel.isOpen = nextState;
                if (nextState && this.closeOtherPanels) {
                    this._closeOthers(panel.id);
                }
                this._updateActiveIds();
            }
        }
    };
    /**
     * @private
     * @param {?} panelId
     * @return {?}
     */
    NgbAccordion.prototype._closeOthers = /**
     * @private
     * @param {?} panelId
     * @return {?}
     */
    function (panelId) {
        this.panels.forEach((/**
         * @param {?} panel
         * @return {?}
         */
        function (panel) {
            if (panel.id !== panelId) {
                panel.isOpen = false;
            }
        }));
    };
    /**
     * @private
     * @param {?} panelId
     * @return {?}
     */
    NgbAccordion.prototype._findPanelById = /**
     * @private
     * @param {?} panelId
     * @return {?}
     */
    function (panelId) { return this.panels.find((/**
     * @param {?} p
     * @return {?}
     */
    function (p) { return p.id === panelId; })); };
    /**
     * @private
     * @return {?}
     */
    NgbAccordion.prototype._updateActiveIds = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeIds = this.panels.filter((/**
         * @param {?} panel
         * @return {?}
         */
        function (panel) { return panel.isOpen && !panel.disabled; })).map((/**
         * @param {?} panel
         * @return {?}
         */
        function (panel) { return panel.id; }));
    };
    NgbAccordion.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-accordion',
                    exportAs: 'ngbAccordion',
                    host: { 'class': 'accordion', 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                    template: "\n    <ng-template #t ngbPanelHeader let-panel>\n      <button class=\"btn btn-link\" [ngbPanelToggle]=\"panel\">\n        {{panel.title}}<ng-template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></ng-template>\n      </button>\n    </ng-template>\n    <ng-template ngFor let-panel [ngForOf]=\"panels\">\n      <div class=\"card\">\n        <div role=\"tab\" id=\"{{panel.id}}-header\" [class]=\"'card-header ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')\">\n          <ng-template [ngTemplateOutlet]=\"panel.headerTpl?.templateRef || t\"\n                       [ngTemplateOutletContext]=\"{$implicit: panel, opened: panel.isOpen}\"></ng-template>\n        </div>\n        <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\"\n             class=\"collapse\" [class.show]=\"panel.isOpen\" *ngIf=\"!destroyOnHide || panel.isOpen\">\n          <div class=\"card-body\">\n               <ng-template [ngTemplateOutlet]=\"panel.contentTpl?.templateRef\"></ng-template>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    NgbAccordion.ctorParameters = function () { return [
        { type: NgbAccordionConfig }
    ]; };
    NgbAccordion.propDecorators = {
        panels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbPanel,] }],
        activeIds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closeOtherPanels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['closeOthers',] }],
        destroyOnHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        panelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgbAccordion;
}());
/**
 * A directive to put on a button that toggles panel opening and closing.
 *
 * To be used inside the [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader)
 *
 * \@since 4.1.0
 */
var NgbPanelToggle = /** @class */ (function () {
    function NgbPanelToggle(accordion, panel) {
        this.accordion = accordion;
        this.panel = panel;
    }
    Object.defineProperty(NgbPanelToggle.prototype, "ngbPanelToggle", {
        set: /**
         * @param {?} panel
         * @return {?}
         */
        function (panel) {
            if (panel) {
                this.panel = panel;
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbPanelToggle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'button[ngbPanelToggle]',
                    host: {
                        'type': 'button',
                        '[disabled]': 'panel.disabled',
                        '[class.collapsed]': '!panel.isOpen',
                        '[attr.aria-expanded]': 'panel.isOpen',
                        '[attr.aria-controls]': 'panel.id',
                        '(click)': 'accordion.toggle(panel.id)'
                    }
                },] }
    ];
    /** @nocollapse */
    NgbPanelToggle.ctorParameters = function () { return [
        { type: NgbAccordion },
        { type: NgbPanel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
    ]; };
    NgbPanelToggle.propDecorators = {
        ngbPanelToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbPanelToggle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGB_ACCORDION_DIRECTIVES = [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle];
var NgbAccordionModule = /** @class */ (function () {
    function NgbAccordionModule() {
    }
    NgbAccordionModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] }
    ];
    return NgbAccordionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configuration service for the [NgbAlert](#/components/alert/api#NgbAlert) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all alerts used in the application.
 */
var NgbAlertConfig = /** @class */ (function () {
    function NgbAlertConfig() {
        this.dismissible = true;
        this.type = 'warning';
    }
    NgbAlertConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbAlertConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbAlertConfig_Factory() { return new NgbAlertConfig(); }, token: NgbAlertConfig, providedIn: "root" });
    return NgbAlertConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Alert is a component to provide contextual feedback messages for user.
 *
 * It supports several alert types and can be dismissed.
 */
var NgbAlert = /** @class */ (function () {
    function NgbAlert(config, _renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        /**
         * An event emitted when the close button is clicked. It has no payload and only relevant for dismissible alerts.
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismissible = config.dismissible;
        this.type = config.type;
    }
    /**
     * @return {?}
     */
    NgbAlert.prototype.closeHandler = /**
     * @return {?}
     */
    function () { this.close.emit(null); };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgbAlert.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var typeChange = changes['type'];
        if (typeChange && !typeChange.firstChange) {
            this._renderer.removeClass(this._element.nativeElement, "alert-" + typeChange.previousValue);
            this._renderer.addClass(this._element.nativeElement, "alert-" + typeChange.currentValue);
        }
    };
    /**
     * @return {?}
     */
    NgbAlert.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this._renderer.addClass(this._element.nativeElement, "alert-" + this.type); };
    NgbAlert.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-alert',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    host: { 'role': 'alert', 'class': 'alert', '[class.alert-dismissible]': 'dismissible' },
                    template: "\n    <ng-content></ng-content>\n    <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" i18n-aria-label=\"@@ngb.alert.close\"\n      (click)=\"closeHandler()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    ",
                    styles: ["ngb-alert{display:block}"]
                }] }
    ];
    /** @nocollapse */
    NgbAlert.ctorParameters = function () { return [
        { type: NgbAlertConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NgbAlert.propDecorators = {
        dismissible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgbAlert;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbAlertModule = /** @class */ (function () {
    function NgbAlertModule() {
    }
    NgbAlertModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [NgbAlert], exports: [NgbAlert], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], entryComponents: [NgbAlert] },] }
    ];
    return NgbAlertModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbButtonLabel = /** @class */ (function () {
    function NgbButtonLabel() {
    }
    NgbButtonLabel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbButtonLabel]',
                    host: { '[class.btn]': 'true', '[class.active]': 'active', '[class.disabled]': 'disabled', '[class.focus]': 'focused' }
                },] }
    ];
    return NgbButtonLabel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGB_CHECKBOX_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return NgbCheckBox; })),
    multi: true
};
/**
 * Allows to easily create Bootstrap-style checkbox buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */
var NgbCheckBox = /** @class */ (function () {
    function NgbCheckBox(_label, _cd) {
        this._label = _label;
        this._cd = _cd;
        /**
         * If `true`, the checkbox button will be disabled
         */
        this.disabled = false;
        /**
         * The form control value when the checkbox is checked.
         */
        this.valueChecked = true;
        /**
         * The form control value when the checkbox is unchecked.
         */
        this.valueUnChecked = false;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(NgbCheckBox.prototype, "focused", {
        set: /**
         * @param {?} isFocused
         * @return {?}
         */
        function (isFocused) {
            this._label.focused = isFocused;
            if (!isFocused) {
                this.onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    NgbCheckBox.prototype.onInputChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var modelToPropagate = $event.target.checked ? this.valueChecked : this.valueUnChecked;
        this.onChange(modelToPropagate);
        this.onTouched();
        this.writeValue(modelToPropagate);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbCheckBox.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbCheckBox.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgbCheckBox.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._label.disabled = isDisabled;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgbCheckBox.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = value === this.valueChecked;
        this._label.active = this.checked;
        // label won't be updated, if it is inside the OnPush component when [ngModel] changes
        this._cd.markForCheck();
    };
    NgbCheckBox.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbButton][type=checkbox]',
                    host: {
                        '[checked]': 'checked',
                        '[disabled]': 'disabled',
                        '(change)': 'onInputChange($event)',
                        '(focus)': 'focused = true',
                        '(blur)': 'focused = false'
                    },
                    providers: [NGB_CHECKBOX_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    NgbCheckBox.ctorParameters = function () { return [
        { type: NgbButtonLabel },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    NgbCheckBox.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        valueChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        valueUnChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbCheckBox;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGB_RADIO_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return NgbRadioGroup; })),
    multi: true
};
/** @type {?} */
var nextId$1 = 0;
/**
 * Allows to easily create Bootstrap-style radio buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */
var NgbRadioGroup = /** @class */ (function () {
    function NgbRadioGroup() {
        this._radios = new Set();
        this._value = null;
        /**
         * Name of the radio group applied to radio input elements.
         *
         * Will be applied to all radio input elements inside the group,
         * unless [`NgbRadio`](#/components/buttons/api#NgbRadio)'s specify names themselves.
         *
         * If not provided, will be generated in the `ngb-radio-xx` format.
         */
        this.name = "ngb-radio-" + nextId$1++;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(NgbRadioGroup.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) { this.setDisabledState(isDisabled); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} radio
     * @return {?}
     */
    NgbRadioGroup.prototype.onRadioChange = /**
     * @param {?} radio
     * @return {?}
     */
    function (radio) {
        this.writeValue(radio.value);
        this.onChange(radio.value);
    };
    /**
     * @return {?}
     */
    NgbRadioGroup.prototype.onRadioValueUpdate = /**
     * @return {?}
     */
    function () { this._updateRadiosValue(); };
    /**
     * @param {?} radio
     * @return {?}
     */
    NgbRadioGroup.prototype.register = /**
     * @param {?} radio
     * @return {?}
     */
    function (radio) { this._radios.add(radio); };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbRadioGroup.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbRadioGroup.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgbRadioGroup.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._disabled = isDisabled;
        this._updateRadiosDisabled();
    };
    /**
     * @param {?} radio
     * @return {?}
     */
    NgbRadioGroup.prototype.unregister = /**
     * @param {?} radio
     * @return {?}
     */
    function (radio) { this._radios.delete(radio); };
    /**
     * @param {?} value
     * @return {?}
     */
    NgbRadioGroup.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        this._updateRadiosValue();
    };
    /**
     * @private
     * @return {?}
     */
    NgbRadioGroup.prototype._updateRadiosValue = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._radios.forEach((/**
         * @param {?} radio
         * @return {?}
         */
        function (radio) { return radio.updateValue(_this._value); }));
    };
    /**
     * @private
     * @return {?}
     */
    NgbRadioGroup.prototype._updateRadiosDisabled = /**
     * @private
     * @return {?}
     */
    function () { this._radios.forEach((/**
     * @param {?} radio
     * @return {?}
     */
    function (radio) { return radio.updateDisabled(); })); };
    NgbRadioGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbRadioGroup]', host: { 'role': 'radiogroup' }, providers: [NGB_RADIO_VALUE_ACCESSOR] },] }
    ];
    NgbRadioGroup.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbRadioGroup;
}());
/**
 * A directive that marks an input of type "radio" as a part of the
 * [`NgbRadioGroup`](#/components/buttons/api#NgbRadioGroup).
 */
var NgbRadio = /** @class */ (function () {
    function NgbRadio(_group, _label, _renderer, _element, _cd) {
        this._group = _group;
        this._label = _label;
        this._renderer = _renderer;
        this._element = _element;
        this._cd = _cd;
        this._value = null;
        this._group.register(this);
        this.updateDisabled();
    }
    Object.defineProperty(NgbRadio.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        /**
         * The form control value when current radio button is checked.
         */
        set: /**
         * The form control value when current radio button is checked.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            /** @type {?} */
            var stringValue = value ? value.toString() : '';
            this._renderer.setProperty(this._element.nativeElement, 'value', stringValue);
            this._group.onRadioValueUpdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._group.disabled || this._disabled; },
        /**
         * If `true`, current radio button will be disabled.
         */
        set: /**
         * If `true`, current radio button will be disabled.
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this._disabled = isDisabled !== false;
            this.updateDisabled();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "focused", {
        set: /**
         * @param {?} isFocused
         * @return {?}
         */
        function (isFocused) {
            if (this._label) {
                this._label.focused = isFocused;
            }
            if (!isFocused) {
                this._group.onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () { return this._checked; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "nameAttr", {
        get: /**
         * @return {?}
         */
        function () { return this.name || this._group.name; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgbRadio.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { this._group.unregister(this); };
    /**
     * @return {?}
     */
    NgbRadio.prototype.onChange = /**
     * @return {?}
     */
    function () { this._group.onRadioChange(this); };
    /**
     * @param {?} value
     * @return {?}
     */
    NgbRadio.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // label won't be updated, if it is inside the OnPush component when [ngModel] changes
        if (this.value !== value) {
            this._cd.markForCheck();
        }
        this._checked = this.value === value;
        this._label.active = this._checked;
    };
    /**
     * @return {?}
     */
    NgbRadio.prototype.updateDisabled = /**
     * @return {?}
     */
    function () { this._label.disabled = this.disabled; };
    NgbRadio.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbButton][type=radio]',
                    host: {
                        '[checked]': 'checked',
                        '[disabled]': 'disabled',
                        '[name]': 'nameAttr',
                        '(change)': 'onChange()',
                        '(focus)': 'focused = true',
                        '(blur)': 'focused = false'
                    }
                },] }
    ];
    /** @nocollapse */
    NgbRadio.ctorParameters = function () { return [
        { type: NgbRadioGroup },
        { type: NgbButtonLabel },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    NgbRadio.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }]
    };
    return NgbRadio;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGB_BUTTON_DIRECTIVES = [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio];
var NgbButtonsModule = /** @class */ (function () {
    function NgbButtonsModule() {
    }
    NgbButtonsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_BUTTON_DIRECTIVES, exports: NGB_BUTTON_DIRECTIVES },] }
    ];
    return NgbButtonsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configuration service for the [NgbCarousel](#/components/carousel/api#NgbCarousel) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all carousels used in the application.
 */
var NgbCarouselConfig = /** @class */ (function () {
    function NgbCarouselConfig() {
        this.interval = 5000;
        this.wrap = true;
        this.keyboard = true;
        this.pauseOnHover = true;
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true;
    }
    NgbCarouselConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbCarouselConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbCarouselConfig_Factory() { return new NgbCarouselConfig(); }, token: NgbCarouselConfig, providedIn: "root" });
    return NgbCarouselConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var nextId$2 = 0;
/**
 * A directive that wraps the individual carousel slide.
 */
var NgbSlide = /** @class */ (function () {
    function NgbSlide(tplRef) {
        this.tplRef = tplRef;
        /**
         * Slide id that must be unique for the entire document.
         *
         * If not provided, will be generated in the `ngb-slide-xx` format.
         */
        this.id = "ngb-slide-" + nextId$2++;
    }
    NgbSlide.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbSlide]' },] }
    ];
    /** @nocollapse */
    NgbSlide.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    NgbSlide.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbSlide;
}());
/**
 * Carousel is a component to easily create and control slideshows.
 *
 * Allows to set intervals, change the way user interacts with the slides and provides a programmatic API.
 */
var NgbCarousel = /** @class */ (function () {
    function NgbCarousel(config, _platformId, _ngZone, _cd) {
        this._platformId = _platformId;
        this._ngZone = _ngZone;
        this._cd = _cd;
        this.NgbSlideEventSource = NgbSlideEventSource;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._interval$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
        this._mouseHover$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this._pauseOnHover$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this._pause$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this._wrap$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        /**
         * An event emitted right after the slide transition is completed.
         *
         * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
         */
        this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
        this.pauseOnHover = config.pauseOnHover;
        this.showNavigationArrows = config.showNavigationArrows;
        this.showNavigationIndicators = config.showNavigationIndicators;
    }
    Object.defineProperty(NgbCarousel.prototype, "interval", {
        get: /**
         * @return {?}
         */
        function () { return this._interval$.value; },
        /**
         * Time in milliseconds before the next slide is shown.
         */
        set: /**
         * Time in milliseconds before the next slide is shown.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._interval$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbCarousel.prototype, "wrap", {
        get: /**
         * @return {?}
         */
        function () { return this._wrap$.value; },
        /**
         * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
         */
        set: /**
         * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._wrap$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbCarousel.prototype, "pauseOnHover", {
        get: /**
         * @return {?}
         */
        function () { return this._pauseOnHover$.value; },
        /**
         * If `true`, will pause slide switching when mouse cursor hovers the slide.
         *
         * @since 2.2.0
         */
        set: /**
         * If `true`, will pause slide switching when mouse cursor hovers the slide.
         *
         * \@since 2.2.0
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pauseOnHover$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgbCarousel.prototype.mouseEnter = /**
     * @return {?}
     */
    function () {
        this._mouseHover$.next(true);
    };
    /**
     * @return {?}
     */
    NgbCarousel.prototype.mouseLeave = /**
     * @return {?}
     */
    function () {
        this._mouseHover$.next(false);
    };
    /**
     * @return {?}
     */
    NgbCarousel.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // setInterval() doesn't play well with SSR and protractor,
        // so we should run it in the browser and outside Angular
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId)) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var hasNextSlide$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(_this.slide.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
                 * @param {?} slideEvent
                 * @return {?}
                 */
                function (slideEvent) { return slideEvent.current; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(_this.activeId)), _this._wrap$, _this.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null)))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(_a, 2), currentSlideId = _b[0], wrap = _b[1];
                    /** @type {?} */
                    var slideArr = _this.slides.toArray();
                    /** @type {?} */
                    var currentSlideIdx = _this._getSlideIdxById(currentSlideId);
                    return wrap ? slideArr.length > 1 : currentSlideIdx < slideArr.length - 1;
                })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])());
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(_this._pause$, _this._pauseOnHover$, _this._mouseHover$, _this._interval$, hasNextSlide$)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(_a, 5), pause = _b[0], pauseOnHover = _b[1], mouseHover = _b[2], interval = _b[3], hasNextSlide = _b[4];
                    return ((pause || (pauseOnHover && mouseHover) || !hasNextSlide) ? 0 : interval);
                })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((/**
                 * @param {?} interval
                 * @return {?}
                 */
                function (interval) { return interval > 0 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(interval, interval) : rxjs__WEBPACK_IMPORTED_MODULE_4__["NEVER"]; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this._destroy$))
                    .subscribe((/**
                 * @return {?}
                 */
                function () { return _this._ngZone.run((/**
                 * @return {?}
                 */
                function () { return _this.next(NgbSlideEventSource.TIMER); })); }));
            }));
        }
        this.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroy$)).subscribe((/**
         * @return {?}
         */
        function () { return _this._cd.markForCheck(); }));
    };
    /**
     * @return {?}
     */
    NgbCarousel.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activeSlide = this._getSlideById(this.activeId);
        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
    };
    /**
     * @return {?}
     */
    NgbCarousel.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { this._destroy$.next(); };
    /**
     * Navigates to a slide with the specified identifier.
     */
    /**
     * Navigates to a slide with the specified identifier.
     * @param {?} slideId
     * @param {?=} source
     * @return {?}
     */
    NgbCarousel.prototype.select = /**
     * Navigates to a slide with the specified identifier.
     * @param {?} slideId
     * @param {?=} source
     * @return {?}
     */
    function (slideId, source) {
        this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId), source);
    };
    /**
     * Navigates to the previous slide.
     */
    /**
     * Navigates to the previous slide.
     * @param {?=} source
     * @return {?}
     */
    NgbCarousel.prototype.prev = /**
     * Navigates to the previous slide.
     * @param {?=} source
     * @return {?}
     */
    function (source) {
        this._cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.RIGHT, source);
    };
    /**
     * Navigates to the next slide.
     */
    /**
     * Navigates to the next slide.
     * @param {?=} source
     * @return {?}
     */
    NgbCarousel.prototype.next = /**
     * Navigates to the next slide.
     * @param {?=} source
     * @return {?}
     */
    function (source) {
        this._cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.LEFT, source);
    };
    /**
     * Pauses cycling through the slides.
     */
    /**
     * Pauses cycling through the slides.
     * @return {?}
     */
    NgbCarousel.prototype.pause = /**
     * Pauses cycling through the slides.
     * @return {?}
     */
    function () { this._pause$.next(true); };
    /**
     * Restarts cycling through the slides from left to right.
     */
    /**
     * Restarts cycling through the slides from left to right.
     * @return {?}
     */
    NgbCarousel.prototype.cycle = /**
     * Restarts cycling through the slides from left to right.
     * @return {?}
     */
    function () { this._pause$.next(false); };
    /**
     * @private
     * @param {?} slideIdx
     * @param {?} direction
     * @param {?=} source
     * @return {?}
     */
    NgbCarousel.prototype._cycleToSelected = /**
     * @private
     * @param {?} slideIdx
     * @param {?} direction
     * @param {?=} source
     * @return {?}
     */
    function (slideIdx, direction, source) {
        /** @type {?} */
        var selectedSlide = this._getSlideById(slideIdx);
        if (selectedSlide && selectedSlide.id !== this.activeId) {
            this.slide.emit({ prev: this.activeId, current: selectedSlide.id, direction: direction, paused: this._pause$.value, source: source });
            this.activeId = selectedSlide.id;
        }
        // we get here after the interval fires or any external API call like next(), prev() or select()
        this._cd.markForCheck();
    };
    /**
     * @private
     * @param {?} currentActiveSlideId
     * @param {?} nextActiveSlideId
     * @return {?}
     */
    NgbCarousel.prototype._getSlideEventDirection = /**
     * @private
     * @param {?} currentActiveSlideId
     * @param {?} nextActiveSlideId
     * @return {?}
     */
    function (currentActiveSlideId, nextActiveSlideId) {
        /** @type {?} */
        var currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
        /** @type {?} */
        var nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);
        return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.RIGHT : NgbSlideEventDirection.LEFT;
    };
    /**
     * @private
     * @param {?} slideId
     * @return {?}
     */
    NgbCarousel.prototype._getSlideById = /**
     * @private
     * @param {?} slideId
     * @return {?}
     */
    function (slideId) { return this.slides.find((/**
     * @param {?} slide
     * @return {?}
     */
    function (slide) { return slide.id === slideId; })); };
    /**
     * @private
     * @param {?} slideId
     * @return {?}
     */
    NgbCarousel.prototype._getSlideIdxById = /**
     * @private
     * @param {?} slideId
     * @return {?}
     */
    function (slideId) {
        return this.slides.toArray().indexOf(this._getSlideById(slideId));
    };
    /**
     * @private
     * @param {?} currentSlideId
     * @return {?}
     */
    NgbCarousel.prototype._getNextSlide = /**
     * @private
     * @param {?} currentSlideId
     * @return {?}
     */
    function (currentSlideId) {
        /** @type {?} */
        var slideArr = this.slides.toArray();
        /** @type {?} */
        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
        /** @type {?} */
        var isLastSlide = currentSlideIdx === slideArr.length - 1;
        return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
            slideArr[currentSlideIdx + 1].id;
    };
    /**
     * @private
     * @param {?} currentSlideId
     * @return {?}
     */
    NgbCarousel.prototype._getPrevSlide = /**
     * @private
     * @param {?} currentSlideId
     * @return {?}
     */
    function (currentSlideId) {
        /** @type {?} */
        var slideArr = this.slides.toArray();
        /** @type {?} */
        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
        /** @type {?} */
        var isFirstSlide = currentSlideIdx === 0;
        return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
            slideArr[currentSlideIdx - 1].id;
    };
    NgbCarousel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-carousel',
                    exportAs: 'ngbCarousel',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        'class': 'carousel slide',
                        '[style.display]': '"block"',
                        'tabIndex': '0',
                        '(keydown.arrowLeft)': 'keyboard && prev(NgbSlideEventSource.ARROW_LEFT)',
                        '(keydown.arrowRight)': 'keyboard && next(NgbSlideEventSource.ARROW_RIGHT)'
                    },
                    template: "\n    <ol class=\"carousel-indicators\" *ngIf=\"showNavigationIndicators\">\n      <li *ngFor=\"let slide of slides\" [id]=\"slide.id\" [class.active]=\"slide.id === activeId\"\n          (click)=\"select(slide.id, NgbSlideEventSource.INDICATOR)\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n        <ng-template [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" role=\"button\" (click)=\"prev(NgbSlideEventSource.ARROW_LEFT)\" *ngIf=\"showNavigationArrows\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\" i18n=\"@@ngb.carousel.previous\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" role=\"button\" (click)=\"next(NgbSlideEventSource.ARROW_RIGHT)\" *ngIf=\"showNavigationArrows\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\" i18n=\"@@ngb.carousel.next\">Next</span>\n    </a>\n  "
                }] }
    ];
    /** @nocollapse */
    NgbCarousel.ctorParameters = function () { return [
        { type: NgbCarouselConfig },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    NgbCarousel.propDecorators = {
        slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbSlide,] }],
        activeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        interval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        wrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pauseOnHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showNavigationArrows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showNavigationIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        mouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] }],
        mouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }]
    };
    return NgbCarousel;
}());
/** @enum {string} */
var NgbSlideEventDirection = {
    LEFT: (/** @type {?} */ ('left')),
    RIGHT: (/** @type {?} */ ('right')),
};
/** @enum {string} */
var NgbSlideEventSource = {
    TIMER: 'timer',
    ARROW_LEFT: 'arrowLeft',
    ARROW_RIGHT: 'arrowRight',
    INDICATOR: 'indicator',
};
/** @type {?} */
var NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbCarouselModule = /** @class */ (function () {
    function NgbCarouselModule() {
    }
    NgbCarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_CAROUSEL_DIRECTIVES, exports: NGB_CAROUSEL_DIRECTIVES, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] }
    ];
    return NgbCarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A directive to provide a simple way of hiding and showing elements on the page.
 */
var NgbCollapse = /** @class */ (function () {
    function NgbCollapse() {
        /**
         * If `true`, will collapse the element or show it otherwise.
         */
        this.collapsed = false;
    }
    NgbCollapse.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbCollapse]',
                    exportAs: 'ngbCollapse',
                    host: { '[class.collapse]': 'true', '[class.show]': '!collapsed' }
                },] }
    ];
    NgbCollapse.propDecorators = {
        collapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngbCollapse',] }]
    };
    return NgbCollapse;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbCollapseModule = /** @class */ (function () {
    function NgbCollapseModule() {
    }
    NgbCollapseModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [NgbCollapse], exports: [NgbCollapse] },] }
    ];
    return NgbCollapseModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A simple class that represents a date that datepicker also uses internally.
 *
 * It is the implementation of the `NgbDateStruct` interface that adds some convenience methods,
 * like `.equals()`, `.before()`, etc.
 *
 * All datepicker APIs consume `NgbDateStruct`, but return `NgbDate`.
 *
 * In many cases it is simpler to manipulate these objects together with
 * [`NgbCalendar`](#/components/datepicker/api#NgbCalendar) than native JS Dates.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 *
 * \@since 3.0.0
 */
var  /**
 * A simple class that represents a date that datepicker also uses internally.
 *
 * It is the implementation of the `NgbDateStruct` interface that adds some convenience methods,
 * like `.equals()`, `.before()`, etc.
 *
 * All datepicker APIs consume `NgbDateStruct`, but return `NgbDate`.
 *
 * In many cases it is simpler to manipulate these objects together with
 * [`NgbCalendar`](#/components/datepicker/api#NgbCalendar) than native JS Dates.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 *
 * \@since 3.0.0
 */
NgbDate = /** @class */ (function () {
    function NgbDate(year, month, day) {
        this.year = isInteger(year) ? year : null;
        this.month = isInteger(month) ? month : null;
        this.day = isInteger(day) ? day : null;
    }
    /**
     * A **static method** that creates a new date object from the `NgbDateStruct`,
     *
     * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
     *
     * If the `date` is already of `NgbDate` type, the method will return the same object.
     */
    /**
     * A **static method** that creates a new date object from the `NgbDateStruct`,
     *
     * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
     *
     * If the `date` is already of `NgbDate` type, the method will return the same object.
     * @param {?} date
     * @return {?}
     */
    NgbDate.from = /**
     * A **static method** that creates a new date object from the `NgbDateStruct`,
     *
     * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
     *
     * If the `date` is already of `NgbDate` type, the method will return the same object.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (date instanceof NgbDate) {
            return date;
        }
        return date ? new NgbDate(date.year, date.month, date.day) : null;
    };
    /**
     * Checks if the current date is equal to another date.
     */
    /**
     * Checks if the current date is equal to another date.
     * @param {?} other
     * @return {?}
     */
    NgbDate.prototype.equals = /**
     * Checks if the current date is equal to another date.
     * @param {?} other
     * @return {?}
     */
    function (other) {
        return other && this.year === other.year && this.month === other.month && this.day === other.day;
    };
    /**
     * Checks if the current date is before another date.
     */
    /**
     * Checks if the current date is before another date.
     * @param {?} other
     * @return {?}
     */
    NgbDate.prototype.before = /**
     * Checks if the current date is before another date.
     * @param {?} other
     * @return {?}
     */
    function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            }
            else {
                return this.month < other.month;
            }
        }
        else {
            return this.year < other.year;
        }
    };
    /**
     * Checks if the current date is after another date.
     */
    /**
     * Checks if the current date is after another date.
     * @param {?} other
     * @return {?}
     */
    NgbDate.prototype.after = /**
     * Checks if the current date is after another date.
     * @param {?} other
     * @return {?}
     */
    function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            }
            else {
                return this.month > other.month;
            }
        }
        else {
            return this.year > other.year;
        }
    };
    return NgbDate;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} jsDate
 * @return {?}
 */
function fromJSDate(jsDate) {
    return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
/**
 * @param {?} date
 * @return {?}
 */
function toJSDate(date) {
    /** @type {?} */
    var jsDate = new Date(date.year, date.month - 1, date.day, 12);
    // this is done avoid 30 -> 1930 conversion
    if (!isNaN(jsDate.getTime())) {
        jsDate.setFullYear(date.year);
    }
    return jsDate;
}
/**
 * @return {?}
 */
function NGB_DATEPICKER_CALENDAR_FACTORY() {
    return new NgbCalendarGregorian();
}
/**
 * A service that represents the calendar used by the datepicker.
 *
 * The default implementation uses the Gregorian calendar. You can inject it in your own
 * implementations if necessary to simplify `NgbDate` calculations.
 * @abstract
 */
var NgbCalendar = /** @class */ (function () {
    function NgbCalendar() {
    }
    NgbCalendar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_CALENDAR_FACTORY },] }
    ];
    /** @nocollapse */ NgbCalendar.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: NGB_DATEPICKER_CALENDAR_FACTORY, token: NgbCalendar, providedIn: "root" });
    return NgbCalendar;
}());
var NgbCalendarGregorian = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbCalendarGregorian, _super);
    function NgbCalendarGregorian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    NgbCalendarGregorian.prototype.getDaysPerWeek = /**
     * @return {?}
     */
    function () { return 7; };
    /**
     * @return {?}
     */
    NgbCalendarGregorian.prototype.getMonths = /**
     * @return {?}
     */
    function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    /**
     * @return {?}
     */
    NgbCalendarGregorian.prototype.getWeeksPerMonth = /**
     * @return {?}
     */
    function () { return 6; };
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    NgbCalendarGregorian.prototype.getNext = /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        /** @type {?} */
        var jsDate = toJSDate(date);
        /** @type {?} */
        var checkMonth = true;
        /** @type {?} */
        var expectedMonth = jsDate.getMonth();
        switch (period) {
            case 'y':
                jsDate.setFullYear(jsDate.getFullYear() + number);
                break;
            case 'm':
                expectedMonth += number;
                jsDate.setMonth(expectedMonth);
                expectedMonth = expectedMonth % 12;
                if (expectedMonth < 0) {
                    expectedMonth = expectedMonth + 12;
                }
                break;
            case 'd':
                jsDate.setDate(jsDate.getDate() + number);
                checkMonth = false;
                break;
            default:
                return date;
        }
        if (checkMonth && jsDate.getMonth() !== expectedMonth) {
            // this means the destination month has less days than the initial month
            // let's go back to the end of the previous month:
            jsDate.setDate(0);
        }
        return fromJSDate(jsDate);
    };
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    NgbCalendarGregorian.prototype.getPrev = /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbCalendarGregorian.prototype.getWeekday = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var jsDate = toJSDate(date);
        /** @type {?} */
        var day = jsDate.getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    /**
     * @param {?} week
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    NgbCalendarGregorian.prototype.getWeekNumber = /**
     * @param {?} week
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        /** @type {?} */
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        /** @type {?} */
        var date = week[thursdayIndex];
        /** @type {?} */
        var jsDate = toJSDate(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        // Thursday
        /** @type {?} */
        var time = jsDate.getTime();
        jsDate.setMonth(0); // Compare with Jan 1
        jsDate.setDate(1);
        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
    };
    /**
     * @return {?}
     */
    NgbCalendarGregorian.prototype.getToday = /**
     * @return {?}
     */
    function () { return fromJSDate(new Date()); };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbCalendarGregorian.prototype.isValid = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
            return false;
        }
        // year 0 doesn't exist in Gregorian calendar
        if (date.year === 0) {
            return false;
        }
        /** @type {?} */
        var jsDate = toJSDate(date);
        return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month &&
            jsDate.getDate() === date.day;
    };
    NgbCalendarGregorian.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return NgbCalendarGregorian;
}(NgbCalendar));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */
function isChangedDate(prev, next) {
    return !dateComparator(prev, next);
}
/**
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */
function isChangedMonth(prev, next) {
    return !prev && !next ? false : !prev || !next ? true : prev.year !== next.year || prev.month !== next.month;
}
/**
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */
function dateComparator(prev, next) {
    return (!prev && !next) || (!!prev && !!next && prev.equals(next));
}
/**
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
function checkMinBeforeMax(minDate, maxDate) {
    if (maxDate && minDate && maxDate.before(minDate)) {
        throw new Error("'maxDate' " + maxDate + " should be greater than 'minDate' " + minDate);
    }
}
/**
 * @param {?} date
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
function checkDateInRange(date, minDate, maxDate) {
    if (date && minDate && date.before(minDate)) {
        return minDate;
    }
    if (date && maxDate && date.after(maxDate)) {
        return maxDate;
    }
    return date;
}
/**
 * @param {?} date
 * @param {?} state
 * @return {?}
 */
function isDateSelectable(date, state) {
    var minDate = state.minDate, maxDate = state.maxDate, disabled = state.disabled, markDisabled = state.markDisabled;
    // clang-format off
    return !(!isDefined(date) ||
        disabled ||
        (markDisabled && markDisabled(date, { year: date.year, month: date.month })) ||
        (minDate && date.before(minDate)) ||
        (maxDate && date.after(maxDate)));
    // clang-format on
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    /** @type {?} */
    var months = calendar.getMonths(date.year);
    if (minDate && date.year === minDate.year) {
        /** @type {?} */
        var index = months.findIndex((/**
         * @param {?} month
         * @return {?}
         */
        function (month) { return month === minDate.month; }));
        months = months.slice(index);
    }
    if (maxDate && date.year === maxDate.year) {
        /** @type {?} */
        var index = months.findIndex((/**
         * @param {?} month
         * @return {?}
         */
        function (month) { return month === maxDate.month; }));
        months = months.slice(0, index + 1);
    }
    return months;
}
/**
 * @param {?} date
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
function generateSelectBoxYears(date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    /** @type {?} */
    var start = minDate ? Math.max(minDate.year, date.year - 500) : date.year - 10;
    /** @type {?} */
    var end = maxDate ? Math.min(maxDate.year, date.year + 500) : date.year + 10;
    /** @type {?} */
    var length = end - start + 1;
    /** @type {?} */
    var numbers = Array(length);
    for (var i = 0; i < length; i++) {
        numbers[i] = start + i;
    }
    return numbers;
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} maxDate
 * @return {?}
 */
function nextMonthDisabled(calendar, date, maxDate) {
    /** @type {?} */
    var nextDate = Object.assign(calendar.getNext(date, 'm'), { day: 1 });
    return maxDate && nextDate.after(maxDate);
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} minDate
 * @return {?}
 */
function prevMonthDisabled(calendar, date, minDate) {
    /** @type {?} */
    var prevDate = Object.assign(calendar.getPrev(date, 'm'), { day: 1 });
    return minDate && (prevDate.year === minDate.year && prevDate.month < minDate.month ||
        prevDate.year < minDate.year && minDate.month === 1);
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} state
 * @param {?} i18n
 * @param {?} force
 * @return {?}
 */
function buildMonths(calendar, date, state, i18n, force) {
    var displayMonths = state.displayMonths, months = state.months;
    // move old months to a temporary array
    /** @type {?} */
    var monthsToReuse = months.splice(0, months.length);
    // generate new first dates, nullify or reuse months
    /** @type {?} */
    var firstDates = Array.from({ length: displayMonths }, (/**
     * @param {?} _
     * @param {?} i
     * @return {?}
     */
    function (_, i) {
        /** @type {?} */
        var firstDate = Object.assign(calendar.getNext(date, 'm', i), { day: 1 });
        months[i] = null;
        if (!force) {
            /** @type {?} */
            var reusedIndex = monthsToReuse.findIndex((/**
             * @param {?} month
             * @return {?}
             */
            function (month) { return month.firstDate.equals(firstDate); }));
            // move reused month back to months
            if (reusedIndex !== -1) {
                months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
            }
        }
        return firstDate;
    }));
    // rebuild nullified months
    firstDates.forEach((/**
     * @param {?} firstDate
     * @param {?} i
     * @return {?}
     */
    function (firstDate, i) {
        if (months[i] === null) {
            months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() || (/** @type {?} */ ({})));
        }
    }));
    return months;
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} state
 * @param {?} i18n
 * @param {?=} month
 * @return {?}
 */
function buildMonth(calendar, date, state, i18n, month) {
    if (month === void 0) { month = (/** @type {?} */ ({})); }
    var dayTemplateData = state.dayTemplateData, minDate = state.minDate, maxDate = state.maxDate, firstDayOfWeek = state.firstDayOfWeek, markDisabled = state.markDisabled, outsideDays = state.outsideDays;
    /** @type {?} */
    var calendarToday = calendar.getToday();
    month.firstDate = null;
    month.lastDate = null;
    month.number = date.month;
    month.year = date.year;
    month.weeks = month.weeks || [];
    month.weekdays = month.weekdays || [];
    date = getFirstViewDate(calendar, date, firstDayOfWeek);
    // month has weeks
    for (var week = 0; week < calendar.getWeeksPerMonth(); week++) {
        /** @type {?} */
        var weekObject = month.weeks[week];
        if (!weekObject) {
            weekObject = month.weeks[week] = { number: 0, days: [], collapsed: true };
        }
        /** @type {?} */
        var days = weekObject.days;
        // week has days
        for (var day = 0; day < calendar.getDaysPerWeek(); day++) {
            if (week === 0) {
                month.weekdays[day] = calendar.getWeekday(date);
            }
            /** @type {?} */
            var newDate = new NgbDate(date.year, date.month, date.day);
            /** @type {?} */
            var nextDate = calendar.getNext(newDate);
            /** @type {?} */
            var ariaLabel = i18n.getDayAriaLabel(newDate);
            // marking date as disabled
            /** @type {?} */
            var disabled = !!((minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate)));
            if (!disabled && markDisabled) {
                disabled = markDisabled(newDate, { month: month.number, year: month.year });
            }
            // today
            /** @type {?} */
            var today = newDate.equals(calendarToday);
            // adding user-provided data to the context
            /** @type {?} */
            var contextUserData = dayTemplateData ? dayTemplateData(newDate, { month: month.number, year: month.year }) : undefined;
            // saving first date of the month
            if (month.firstDate === null && newDate.month === month.number) {
                month.firstDate = newDate;
            }
            // saving last date of the month
            if (newDate.month === month.number && nextDate.month !== month.number) {
                month.lastDate = newDate;
            }
            /** @type {?} */
            var dayObject = days[day];
            if (!dayObject) {
                dayObject = days[day] = (/** @type {?} */ ({}));
            }
            dayObject.date = newDate;
            dayObject.context = Object.assign(dayObject.context || {}, {
                $implicit: newDate,
                date: newDate,
                data: contextUserData,
                currentMonth: month.number, disabled: disabled,
                focused: false,
                selected: false, today: today
            });
            dayObject.tabindex = -1;
            dayObject.ariaLabel = ariaLabel;
            dayObject.hidden = false;
            date = nextDate;
        }
        weekObject.number = calendar.getWeekNumber(days.map((/**
         * @param {?} day
         * @return {?}
         */
        function (day) { return day.date; })), firstDayOfWeek);
        // marking week as collapsed
        weekObject.collapsed = outsideDays === 'collapsed' && days[0].date.month !== month.number &&
            days[days.length - 1].date.month !== month.number;
    }
    return month;
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} firstDayOfWeek
 * @return {?}
 */
function getFirstViewDate(calendar, date, firstDayOfWeek) {
    /** @type {?} */
    var daysPerWeek = calendar.getDaysPerWeek();
    /** @type {?} */
    var firstMonthDate = new NgbDate(date.year, date.month, 1);
    /** @type {?} */
    var dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
    return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} locale
 * @return {?}
 */
function NGB_DATEPICKER_18N_FACTORY(locale) {
    return new NgbDatepickerI18nDefault(locale);
}
/**
 * A service supplying i18n data to the datepicker component.
 *
 * The default implementation of this service uses the Angular locale and registered locale data for
 * weekdays and month names (as explained in the Angular i18n guide).
 *
 * It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year
 * numerals. For other static labels the datepicker uses the default Angular i18n.
 *
 * See the [i18n demo](#/components/datepicker/examples#i18n) and
 * [Hebrew calendar demo](#/components/datepicker/calendars#hebrew) on how to extend this class and define
 * a custom provider for i18n.
 * @abstract
 */
var NgbDatepickerI18n = /** @class */ (function () {
    function NgbDatepickerI18n() {
    }
    /**
     * Returns the textual representation of a day that is rendered in a day cell.
     *
     * @since 3.0.0
     */
    /**
     * Returns the textual representation of a day that is rendered in a day cell.
     *
     * \@since 3.0.0
     * @param {?} date
     * @return {?}
     */
    NgbDatepickerI18n.prototype.getDayNumerals = /**
     * Returns the textual representation of a day that is rendered in a day cell.
     *
     * \@since 3.0.0
     * @param {?} date
     * @return {?}
     */
    function (date) { return "" + date.day; };
    /**
     * Returns the textual representation of a week number rendered by datepicker.
     *
     * @since 3.0.0
     */
    /**
     * Returns the textual representation of a week number rendered by datepicker.
     *
     * \@since 3.0.0
     * @param {?} weekNumber
     * @return {?}
     */
    NgbDatepickerI18n.prototype.getWeekNumerals = /**
     * Returns the textual representation of a week number rendered by datepicker.
     *
     * \@since 3.0.0
     * @param {?} weekNumber
     * @return {?}
     */
    function (weekNumber) { return "" + weekNumber; };
    /**
     * Returns the textual representation of a year that is rendered in the datepicker year select box.
     *
     * @since 3.0.0
     */
    /**
     * Returns the textual representation of a year that is rendered in the datepicker year select box.
     *
     * \@since 3.0.0
     * @param {?} year
     * @return {?}
     */
    NgbDatepickerI18n.prototype.getYearNumerals = /**
     * Returns the textual representation of a year that is rendered in the datepicker year select box.
     *
     * \@since 3.0.0
     * @param {?} year
     * @return {?}
     */
    function (year) { return "" + year; };
    NgbDatepickerI18n.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_18N_FACTORY, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]] },] }
    ];
    /** @nocollapse */ NgbDatepickerI18n.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbDatepickerI18n_Factory() { return NGB_DATEPICKER_18N_FACTORY(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); }, token: NgbDatepickerI18n, providedIn: "root" });
    return NgbDatepickerI18n;
}());
var NgbDatepickerI18nDefault = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbDatepickerI18nDefault, _super);
    function NgbDatepickerI18nDefault(_locale) {
        var _this = _super.call(this) || this;
        _this._locale = _locale;
        /** @type {?} */
        var weekdaysStartingOnSunday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleDayNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Short);
        _this._weekdaysShort = weekdaysStartingOnSunday.map((/**
         * @param {?} day
         * @param {?} index
         * @return {?}
         */
        function (day, index) { return weekdaysStartingOnSunday[(index + 1) % 7]; }));
        _this._monthsShort = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleMonthNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Abbreviated);
        _this._monthsFull = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleMonthNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Wide);
        return _this;
    }
    /**
     * @param {?} weekday
     * @return {?}
     */
    NgbDatepickerI18nDefault.prototype.getWeekdayShortName = /**
     * @param {?} weekday
     * @return {?}
     */
    function (weekday) { return this._weekdaysShort[weekday - 1]; };
    /**
     * @param {?} month
     * @return {?}
     */
    NgbDatepickerI18nDefault.prototype.getMonthShortName = /**
     * @param {?} month
     * @return {?}
     */
    function (month) { return this._monthsShort[month - 1]; };
    /**
     * @param {?} month
     * @return {?}
     */
    NgbDatepickerI18nDefault.prototype.getMonthFullName = /**
     * @param {?} month
     * @return {?}
     */
    function (month) { return this._monthsFull[month - 1]; };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDatepickerI18nDefault.prototype.getDayAriaLabel = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var jsDate = new Date(date.year, date.month - 1, date.day);
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(jsDate, 'fullDate', this._locale);
    };
    NgbDatepickerI18nDefault.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    NgbDatepickerI18nDefault.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
    ]; };
    return NgbDatepickerI18nDefault;
}(NgbDatepickerI18n));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbDatepickerService = /** @class */ (function () {
    function NgbDatepickerService(_calendar, _i18n) {
        this._calendar = _calendar;
        this._i18n = _i18n;
        this._model$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._select$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._state = {
            disabled: false,
            displayMonths: 1,
            firstDayOfWeek: 1,
            focusVisible: false,
            months: [],
            navigation: 'select',
            outsideDays: 'visible',
            prevDisabled: false,
            nextDisabled: false,
            selectBoxes: { years: [], months: [] },
            selectedDate: null
        };
    }
    Object.defineProperty(NgbDatepickerService.prototype, "model$", {
        get: /**
         * @return {?}
         */
        function () { return this._model$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
         * @param {?} model
         * @return {?}
         */
        function (model) { return model.months.length > 0; }))); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "select$", {
        get: /**
         * @return {?}
         */
        function () { return this._select$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
         * @param {?} date
         * @return {?}
         */
        function (date) { return date !== null; }))); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "dayTemplateData", {
        set: /**
         * @param {?} dayTemplateData
         * @return {?}
         */
        function (dayTemplateData) {
            if (this._state.dayTemplateData !== dayTemplateData) {
                this._nextState({ dayTemplateData: dayTemplateData });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "disabled", {
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            if (this._state.disabled !== disabled) {
                this._nextState({ disabled: disabled });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "displayMonths", {
        set: /**
         * @param {?} displayMonths
         * @return {?}
         */
        function (displayMonths) {
            displayMonths = toInteger(displayMonths);
            if (isInteger(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
                this._nextState({ displayMonths: displayMonths });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "firstDayOfWeek", {
        set: /**
         * @param {?} firstDayOfWeek
         * @return {?}
         */
        function (firstDayOfWeek) {
            firstDayOfWeek = toInteger(firstDayOfWeek);
            if (isInteger(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
                this._nextState({ firstDayOfWeek: firstDayOfWeek });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "focusVisible", {
        set: /**
         * @param {?} focusVisible
         * @return {?}
         */
        function (focusVisible) {
            if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
                this._nextState({ focusVisible: focusVisible });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "maxDate", {
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            /** @type {?} */
            var maxDate = this.toValidDate(date, null);
            if (isChangedDate(this._state.maxDate, maxDate)) {
                this._nextState({ maxDate: maxDate });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "markDisabled", {
        set: /**
         * @param {?} markDisabled
         * @return {?}
         */
        function (markDisabled) {
            if (this._state.markDisabled !== markDisabled) {
                this._nextState({ markDisabled: markDisabled });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "minDate", {
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            /** @type {?} */
            var minDate = this.toValidDate(date, null);
            if (isChangedDate(this._state.minDate, minDate)) {
                this._nextState({ minDate: minDate });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "navigation", {
        set: /**
         * @param {?} navigation
         * @return {?}
         */
        function (navigation) {
            if (this._state.navigation !== navigation) {
                this._nextState({ navigation: navigation });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "outsideDays", {
        set: /**
         * @param {?} outsideDays
         * @return {?}
         */
        function (outsideDays) {
            if (this._state.outsideDays !== outsideDays) {
                this._nextState({ outsideDays: outsideDays });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDatepickerService.prototype.focus = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (!this._state.disabled && this._calendar.isValid(date) && isChangedDate(this._state.focusDate, date)) {
            this._nextState({ focusDate: date });
        }
    };
    /**
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    NgbDatepickerService.prototype.focusMove = /**
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    function (period, number) {
        this.focus(this._calendar.getNext(this._state.focusDate, period, number));
    };
    /**
     * @return {?}
     */
    NgbDatepickerService.prototype.focusSelect = /**
     * @return {?}
     */
    function () {
        if (isDateSelectable(this._state.focusDate, this._state)) {
            this.select(this._state.focusDate, { emitEvent: true });
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDatepickerService.prototype.open = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var firstDate = this.toValidDate(date, this._calendar.getToday());
        if (!this._state.disabled && (!this._state.firstDate || isChangedMonth(this._state.firstDate, date))) {
            this._nextState({ firstDate: firstDate });
        }
    };
    /**
     * @param {?} date
     * @param {?=} options
     * @return {?}
     */
    NgbDatepickerService.prototype.select = /**
     * @param {?} date
     * @param {?=} options
     * @return {?}
     */
    function (date, options) {
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var selectedDate = this.toValidDate(date, null);
        if (!this._state.disabled) {
            if (isChangedDate(this._state.selectedDate, selectedDate)) {
                this._nextState({ selectedDate: selectedDate });
            }
            if (options.emitEvent && isDateSelectable(selectedDate, this._state)) {
                this._select$.next(selectedDate);
            }
        }
    };
    /**
     * @param {?} date
     * @param {?=} defaultValue
     * @return {?}
     */
    NgbDatepickerService.prototype.toValidDate = /**
     * @param {?} date
     * @param {?=} defaultValue
     * @return {?}
     */
    function (date, defaultValue) {
        /** @type {?} */
        var ngbDate = NgbDate.from(date);
        if (defaultValue === undefined) {
            defaultValue = this._calendar.getToday();
        }
        return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
    };
    /**
     * @private
     * @param {?} patch
     * @return {?}
     */
    NgbDatepickerService.prototype._nextState = /**
     * @private
     * @param {?} patch
     * @return {?}
     */
    function (patch) {
        /** @type {?} */
        var newState = this._updateState(patch);
        this._patchContexts(newState);
        this._state = newState;
        this._model$.next(this._state);
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    NgbDatepickerService.prototype._patchContexts = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        var months = state.months, displayMonths = state.displayMonths, selectedDate = state.selectedDate, focusDate = state.focusDate, focusVisible = state.focusVisible, disabled = state.disabled, outsideDays = state.outsideDays;
        state.months.forEach((/**
         * @param {?} month
         * @return {?}
         */
        function (month) {
            month.weeks.forEach((/**
             * @param {?} week
             * @return {?}
             */
            function (week) {
                week.days.forEach((/**
                 * @param {?} day
                 * @return {?}
                 */
                function (day) {
                    // patch focus flag
                    if (focusDate) {
                        day.context.focused = focusDate.equals(day.date) && focusVisible;
                    }
                    // calculating tabindex
                    day.tabindex = !disabled && day.date.equals(focusDate) && focusDate.month === month.number ? 0 : -1;
                    // override context disabled
                    if (disabled === true) {
                        day.context.disabled = true;
                    }
                    // patch selection flag
                    if (selectedDate !== undefined) {
                        day.context.selected = selectedDate !== null && selectedDate.equals(day.date);
                    }
                    // visibility
                    if (month.number !== day.date.month) {
                        day.hidden = outsideDays === 'hidden' || outsideDays === 'collapsed' ||
                            (displayMonths > 1 && day.date.after(months[0].firstDate) &&
                                day.date.before(months[displayMonths - 1].lastDate));
                    }
                }));
            }));
        }));
    };
    /**
     * @private
     * @param {?} patch
     * @return {?}
     */
    NgbDatepickerService.prototype._updateState = /**
     * @private
     * @param {?} patch
     * @return {?}
     */
    function (patch) {
        // patching fields
        /** @type {?} */
        var state = Object.assign({}, this._state, patch);
        /** @type {?} */
        var startDate = state.firstDate;
        // min/max dates changed
        if ('minDate' in patch || 'maxDate' in patch) {
            checkMinBeforeMax(state.minDate, state.maxDate);
            state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
            state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
        }
        // disabled
        if ('disabled' in patch) {
            state.focusVisible = false;
        }
        // initial rebuild via 'select()'
        if ('selectedDate' in patch && this._state.months.length === 0) {
            startDate = state.selectedDate;
        }
        // terminate early if only focus visibility was changed
        if ('focusVisible' in patch) {
            return state;
        }
        // focus date changed
        if ('focusDate' in patch) {
            state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
            // nothing to rebuild if only focus changed and it is still visible
            if (state.months.length !== 0 && !state.focusDate.before(state.firstDate) &&
                !state.focusDate.after(state.lastDate)) {
                return state;
            }
        }
        // first date changed
        if ('firstDate' in patch) {
            state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
            startDate = state.firstDate;
        }
        // rebuilding months
        if (startDate) {
            /** @type {?} */
            var forceRebuild = 'dayTemplateData' in patch || 'firstDayOfWeek' in patch || 'markDisabled' in patch ||
                'minDate' in patch || 'maxDate' in patch || 'disabled' in patch || 'outsideDays' in patch;
            /** @type {?} */
            var months = buildMonths(this._calendar, startDate, state, this._i18n, forceRebuild);
            // updating months and boundary dates
            state.months = months;
            state.firstDate = months.length > 0 ? months[0].firstDate : undefined;
            state.lastDate = months.length > 0 ? months[months.length - 1].lastDate : undefined;
            // reset selected date if 'markDisabled' returns true
            if ('selectedDate' in patch && !isDateSelectable(state.selectedDate, state)) {
                state.selectedDate = null;
            }
            // adjusting focus after months were built
            if ('firstDate' in patch) {
                if (state.focusDate === undefined || state.focusDate.before(state.firstDate) ||
                    state.focusDate.after(state.lastDate)) {
                    state.focusDate = startDate;
                }
            }
            // adjusting months/years for the select box navigation
            /** @type {?} */
            var yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
            /** @type {?} */
            var monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;
            if (state.navigation === 'select') {
                // years ->  boundaries (min/max were changed)
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.years.length === 0 || yearChanged) {
                    state.selectBoxes.years = generateSelectBoxYears(state.firstDate, state.minDate, state.maxDate);
                }
                // months -> when current year or boundaries change
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.months.length === 0 || yearChanged) {
                    state.selectBoxes.months =
                        generateSelectBoxMonths(this._calendar, state.firstDate, state.minDate, state.maxDate);
                }
            }
            else {
                state.selectBoxes = { years: [], months: [] };
            }
            // updating navigation arrows -> boundaries change (min/max) or month/year changes
            if ((state.navigation === 'arrows' || state.navigation === 'select') &&
                (monthChanged || yearChanged || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch)) {
                state.prevDisabled = state.disabled || prevMonthDisabled(this._calendar, state.firstDate, state.minDate);
                state.nextDisabled = state.disabled || nextMonthDisabled(this._calendar, state.lastDate, state.maxDate);
            }
        }
        return state;
    };
    NgbDatepickerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    NgbDatepickerService.ctorParameters = function () { return [
        { type: NgbCalendar },
        { type: NgbDatepickerI18n }
    ]; };
    return NgbDatepickerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var Key = {
    Tab: 9,
    Enter: 13,
    Escape: 27,
    Space: 32,
    PageUp: 33,
    PageDown: 34,
    End: 35,
    Home: 36,
    ArrowLeft: 37,
    ArrowUp: 38,
    ArrowRight: 39,
    ArrowDown: 40,
};
Key[Key.Tab] = 'Tab';
Key[Key.Enter] = 'Enter';
Key[Key.Escape] = 'Escape';
Key[Key.Space] = 'Space';
Key[Key.PageUp] = 'PageUp';
Key[Key.PageDown] = 'PageDown';
Key[Key.End] = 'End';
Key[Key.Home] = 'Home';
Key[Key.ArrowLeft] = 'ArrowLeft';
Key[Key.ArrowUp] = 'ArrowUp';
Key[Key.ArrowRight] = 'ArrowRight';
Key[Key.ArrowDown] = 'ArrowDown';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbDatepickerKeyMapService = /** @class */ (function () {
    function NgbDatepickerKeyMapService(_service, _calendar) {
        var _this = this;
        this._service = _service;
        this._calendar = _calendar;
        _service.model$.subscribe((/**
         * @param {?} model
         * @return {?}
         */
        function (model) {
            _this._minDate = model.minDate;
            _this._maxDate = model.maxDate;
            _this._firstViewDate = model.firstDate;
            _this._lastViewDate = model.lastDate;
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NgbDatepickerKeyMapService.prototype.processKey = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // tslint:disable-next-line:deprecation
        switch (event.which) {
            case Key.PageUp:
                this._service.focusMove(event.shiftKey ? 'y' : 'm', -1);
                break;
            case Key.PageDown:
                this._service.focusMove(event.shiftKey ? 'y' : 'm', 1);
                break;
            case Key.End:
                this._service.focus(event.shiftKey ? this._maxDate : this._lastViewDate);
                break;
            case Key.Home:
                this._service.focus(event.shiftKey ? this._minDate : this._firstViewDate);
                break;
            case Key.ArrowLeft:
                this._service.focusMove('d', -1);
                break;
            case Key.ArrowUp:
                this._service.focusMove('d', -this._calendar.getDaysPerWeek());
                break;
            case Key.ArrowRight:
                this._service.focusMove('d', 1);
                break;
            case Key.ArrowDown:
                this._service.focusMove('d', this._calendar.getDaysPerWeek());
                break;
            case Key.Enter:
            case Key.Space:
                this._service.focusSelect();
                break;
            default:
                return;
        }
        // note 'return' in default case
        event.preventDefault();
        event.stopPropagation();
    };
    NgbDatepickerKeyMapService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    NgbDatepickerKeyMapService.ctorParameters = function () { return [
        { type: NgbDatepickerService },
        { type: NgbCalendar }
    ]; };
    return NgbDatepickerKeyMapService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var NavigationEvent = {
    PREV: 0,
    NEXT: 1,
};
NavigationEvent[NavigationEvent.PREV] = 'PREV';
NavigationEvent[NavigationEvent.NEXT] = 'NEXT';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configuration service for the [`NgbDatepicker`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
var NgbDatepickerConfig = /** @class */ (function () {
    function NgbDatepickerConfig() {
        this.displayMonths = 1;
        this.firstDayOfWeek = 1;
        this.navigation = 'select';
        this.outsideDays = 'visible';
        this.showWeekdays = true;
        this.showWeekNumbers = false;
    }
    NgbDatepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbDatepickerConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbDatepickerConfig_Factory() { return new NgbDatepickerConfig(); }, token: NgbDatepickerConfig, providedIn: "root" });
    return NgbDatepickerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
    return new NgbDateStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal datepicker `NgbDateStruct` model and
 * any provided user date model `D`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding datepicker to a form control,
 * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
 *
 * The default datepicker implementation assumes we use `NgbDateStruct` as a user model.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details
 * and the [custom adapter demo](#/components/datepicker/examples#adapter) for an example.
 * @abstract
 * @template D
 */
var NgbDateAdapter = /** @class */ (function () {
    function NgbDateAdapter() {
    }
    NgbDateAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY },] }
    ];
    /** @nocollapse */ NgbDateAdapter.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY, token: NgbDateAdapter, providedIn: "root" });
    return NgbDateAdapter;
}());
var NgbDateStructAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbDateStructAdapter, _super);
    function NgbDateStructAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     */
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param {?} date
     * @return {?}
     */
    NgbDateStructAdapter.prototype.fromModel = /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
            { year: date.year, month: date.month, day: date.day } :
            null;
    };
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     */
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param {?} date
     * @return {?}
     */
    NgbDateStructAdapter.prototype.toModel = /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
            { year: date.year, month: date.month, day: date.day } :
            null;
    };
    NgbDateStructAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return NgbDateStructAdapter;
}(NgbDateAdapter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return NgbDatepicker; })),
    multi: true
};
/**
 * A highly configurable component that helps you with selecting calendar dates.
 *
 * `NgbDatepicker` is meant to be displayed inline on a page or put inside a popup.
 */
var NgbDatepicker = /** @class */ (function () {
    function NgbDatepicker(_keyMapService, _service, _calendar, i18n, config, _cd, _elementRef, _ngbDateAdapter, _ngZone) {
        var _this = this;
        this._keyMapService = _keyMapService;
        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this._cd = _cd;
        this._elementRef = _elementRef;
        this._ngbDateAdapter = _ngbDateAdapter;
        this._ngZone = _ngZone;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * An event emitted right before the navigation happens and displayed month changes.
         *
         * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
         */
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted when user selects a date using keyboard or mouse.
         *
         * The payload of the event is currently selected `NgbDate`.
         */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate',
            'maxDate', 'navigation', 'outsideDays', 'showWeekdays', 'showWeekNumbers', 'startDate']
            .forEach((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return _this[input] = config[input]; }));
        _service.select$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed$)).subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) { _this.select.emit(date); }));
        _service.model$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed$)).subscribe((/**
         * @param {?} model
         * @return {?}
         */
        function (model) {
            /** @type {?} */
            var newDate = model.firstDate;
            /** @type {?} */
            var oldDate = _this.model ? _this.model.firstDate : null;
            /** @type {?} */
            var navigationPrevented = false;
            // emitting navigation event if the first month changes
            if (!newDate.equals(oldDate)) {
                _this.navigate.emit({
                    current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                    next: { year: newDate.year, month: newDate.month },
                    preventDefault: (/**
                     * @return {?}
                     */
                    function () { return navigationPrevented = true; })
                });
                // can't prevent the very first navigation
                if (navigationPrevented && oldDate !== null) {
                    _this._service.open(oldDate);
                    return;
                }
            }
            /** @type {?} */
            var newSelectedDate = model.selectedDate;
            /** @type {?} */
            var newFocusedDate = model.focusDate;
            /** @type {?} */
            var oldFocusedDate = _this.model ? _this.model.focusDate : null;
            _this.model = model;
            // handling selection change
            if (isChangedDate(newSelectedDate, _this._controlValue)) {
                _this._controlValue = newSelectedDate;
                _this.onTouched();
                _this.onChange(_this._ngbDateAdapter.toModel(newSelectedDate));
            }
            // handling focus change
            if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
                _this.focus();
            }
            _cd.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    NgbDatepicker.prototype.focus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var elementToFocus = _this._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');
            if (elementToFocus) {
                elementToFocus.focus();
            }
        }));
    };
    /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     */
    /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     * @param {?=} date
     * @return {?}
     */
    NgbDatepicker.prototype.navigateTo = /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     * @param {?=} date
     * @return {?}
     */
    function (date) {
        this._service.open(NgbDate.from(date ? date.day ? (/** @type {?} */ (date)) : Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, date, { day: 1 }) : null));
    };
    /**
     * @return {?}
     */
    NgbDatepicker.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var focusIns$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this._monthsEl.nativeElement, 'focusin');
            /** @type {?} */
            var focusOuts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this._monthsEl.nativeElement, 'focusout');
            // we're changing 'focusVisible' only when entering or leaving months view
            // and ignoring all focus events where both 'target' and 'related' target are day cells
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(focusIns$, focusOuts$)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var target = _a.target, relatedTarget = _a.relatedTarget;
                return !(hasClassName(target, 'ngb-dp-day') && hasClassName(relatedTarget, 'ngb-dp-day'));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this._destroyed$))
                .subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type;
                return _this._ngZone.run((/**
                 * @return {?}
                 */
                function () { return _this._service.focusVisible = type === 'focusin'; }));
            }));
        }));
    };
    /**
     * @return {?}
     */
    NgbDatepicker.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { this._destroyed$.next(); };
    /**
     * @return {?}
     */
    NgbDatepicker.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.model === undefined) {
            ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate',
                'outsideDays']
                .forEach((/**
             * @param {?} input
             * @return {?}
             */
            function (input) { return _this._service[input] = _this[input]; }));
            this.navigateTo(this.startDate);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgbDatepicker.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate',
            'outsideDays']
            .filter((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return input in changes; }))
            .forEach((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return _this._service[input] = _this[input]; }));
        if ('startDate' in changes) {
            var _a = changes.startDate, currentValue = _a.currentValue, previousValue = _a.previousValue;
            if (isChangedMonth(previousValue, currentValue)) {
                this.navigateTo(this.startDate);
            }
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDatepicker.prototype.onDateSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this._service.focus(date);
        this._service.select(date, { emitEvent: true });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgbDatepicker.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this._keyMapService.processKey(event); };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDatepicker.prototype.onNavigateDateSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) { this._service.open(date); };
    /**
     * @param {?} event
     * @return {?}
     */
    NgbDatepicker.prototype.onNavigateEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event) {
            case NavigationEvent.PREV:
                this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                break;
            case NavigationEvent.NEXT:
                this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
                break;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbDatepicker.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbDatepicker.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgbDatepicker.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) { this._service.disabled = isDisabled; };
    /**
     * @param {?} value
     * @return {?}
     */
    NgbDatepicker.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._controlValue = NgbDate.from(this._ngbDateAdapter.fromModel(value));
        this._service.select(this._controlValue);
    };
    NgbDatepicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    exportAs: 'ngbDatepicker',
                    selector: 'ngb-datepicker',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    template: "\n    <ng-template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\n      <div ngbDatepickerDayView\n        [date]=\"date\"\n        [currentMonth]=\"currentMonth\"\n        [selected]=\"selected\"\n        [disabled]=\"disabled\"\n        [focused]=\"focused\">\n      </div>\n    </ng-template>\n\n    <div class=\"ngb-dp-header\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"model.firstDate\"\n        [months]=\"model.months\"\n        [disabled]=\"model.disabled\"\n        [showSelect]=\"model.navigation === 'select'\"\n        [prevDisabled]=\"model.prevDisabled\"\n        [nextDisabled]=\"model.nextDisabled\"\n        [selectBoxes]=\"model.selectBoxes\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div #months class=\"ngb-dp-months\" (keydown)=\"onKeyDown($event)\">\n      <ng-template ngFor let-month [ngForOf]=\"model.months\" let-i=\"index\">\n        <div class=\"ngb-dp-month\">\n          <div *ngIf=\"navigation === 'none' || (displayMonths > 1 && navigation === 'select')\"\n                class=\"ngb-dp-month-name\">\n            {{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}\n          </div>\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </div>\n      </ng-template>\n    </div>\n\n    <ng-template [ngTemplateOutlet]=\"footerTemplate\"></ng-template>\n  ",
                    providers: [NGB_DATEPICKER_VALUE_ACCESSOR, NgbDatepickerService, NgbDatepickerKeyMapService],
                    styles: ["ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month-view{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-months{display:-ms-flexbox;display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}"]
                }] }
    ];
    /** @nocollapse */
    NgbDatepicker.ctorParameters = function () { return [
        { type: NgbDatepickerKeyMapService },
        { type: NgbDatepickerService },
        { type: NgbCalendar },
        { type: NgbDatepickerI18n },
        { type: NgbDatepickerConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: NgbDateAdapter },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    NgbDatepicker.propDecorators = {
        _monthsEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['months', { static: true },] }],
        dayTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayTemplateData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        displayMonths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        firstDayOfWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        markDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        navigation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outsideDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showWeekdays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showWeekNumbers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        navigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgbDatepicker;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbDatepickerMonthView = /** @class */ (function () {
    function NgbDatepickerMonthView(i18n) {
        this.i18n = i18n;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} day
     * @return {?}
     */
    NgbDatepickerMonthView.prototype.doSelect = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        if (!day.context.disabled && !day.hidden) {
            this.select.emit(day.date);
        }
    };
    NgbDatepickerMonthView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-month-view',
                    host: { 'role': 'grid' },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week ngb-dp-weekdays\" role=\"row\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday ngb-dp-showweek\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small\" role=\"columnheader\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\n      <div *ngIf=\"!week.collapsed\" class=\"ngb-dp-week\" role=\"row\">\n        <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-muted\">{{ i18n.getWeekNumerals(week.number) }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"ngb-dp-day\" role=\"gridcell\"\n          [class.disabled]=\"day.context.disabled\"\n          [tabindex]=\"day.tabindex\"\n          [class.hidden]=\"day.hidden\"\n          [class.ngb-dp-today]=\"day.context.today\"\n          [attr.aria-label]=\"day.ariaLabel\">\n          <ng-template [ngIf]=\"!day.hidden\">\n            <ng-template [ngTemplateOutlet]=\"dayTemplate\" [ngTemplateOutletContext]=\"day.context\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  ",
                    styles: ["ngb-datepicker-month-view{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:-ms-flexbox;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default}.ngb-dp-day[tabindex=\"0\"]{z-index:1}"]
                }] }
    ];
    /** @nocollapse */
    NgbDatepickerMonthView.ctorParameters = function () { return [
        { type: NgbDatepickerI18n }
    ]; };
    NgbDatepickerMonthView.propDecorators = {
        dayTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        month: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showWeekdays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showWeekNumbers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgbDatepickerMonthView;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbDatepickerNavigation = /** @class */ (function () {
    function NgbDatepickerNavigation(i18n) {
        this.i18n = i18n;
        this.navigation = NavigationEvent;
        this.months = [];
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NgbDatepickerNavigation.prototype.onClickPrev = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        ((/** @type {?} */ (event.currentTarget))).focus();
        this.navigate.emit(this.navigation.PREV);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgbDatepickerNavigation.prototype.onClickNext = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        ((/** @type {?} */ (event.currentTarget))).focus();
        this.navigate.emit(this.navigation.NEXT);
    };
    NgbDatepickerNavigation.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-navigation',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    template: "\n    <div class=\"ngb-dp-arrow\">\n      <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\" (click)=\"onClickPrev($event)\" [disabled]=\"prevDisabled\"\n              i18n-aria-label=\"@@ngb.datepicker.previous-month\" aria-label=\"Previous month\"\n              i18n-title=\"@@ngb.datepicker.previous-month\" title=\"Previous month\">\n        <span class=\"ngb-dp-navigation-chevron\"></span>\n      </button>\n    </div>\n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"ngb-dp-navigation-select\"\n      [date]=\"date\"\n      [disabled] = \"disabled\"\n      [months]=\"selectBoxes.months\"\n      [years]=\"selectBoxes.years\"\n      (select)=\"select.emit($event)\">\n    </ngb-datepicker-navigation-select>\n\n    <ng-template *ngIf=\"!showSelect\" ngFor let-month [ngForOf]=\"months\" let-i=\"index\">\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i > 0\"></div>\n      <div class=\"ngb-dp-month-name\">\n        {{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}\n      </div>\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i !== months.length - 1\"></div>\n    </ng-template>\n    <div class=\"ngb-dp-arrow right\">\n      <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\" (click)=\"onClickNext($event)\" [disabled]=\"nextDisabled\"\n              i18n-aria-label=\"@@ngb.datepicker.next-month\" aria-label=\"Next month\"\n              i18n-title=\"@@ngb.datepicker.next-month\" title=\"Next month\">\n        <span class=\"ngb-dp-navigation-chevron\"></span>\n      </button>\n    </div>\n    ",
                    styles: ["ngb-datepicker-navigation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.right .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{-ms-flex-pack:end;justify-content:flex-end}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:-ms-flexbox;display:flex;-ms-flex:1 1 9rem;flex:1 1 9rem}"]
                }] }
    ];
    /** @nocollapse */
    NgbDatepickerNavigation.ctorParameters = function () { return [
        { type: NgbDatepickerI18n }
    ]; };
    NgbDatepickerNavigation.propDecorators = {
        date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        months: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        prevDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nextDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectBoxes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        navigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgbDatepickerNavigation;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var isContainedIn = (/**
 * @param {?} element
 * @param {?=} array
 * @return {?}
 */
function (element, array) {
    return array ? array.some((/**
     * @param {?} item
     * @return {?}
     */
    function (item) { return item.contains(element); })) : false;
});
/** @type {?} */
var matchesSelectorIfAny = (/**
 * @param {?} element
 * @param {?=} selector
 * @return {?}
 */
function (element, selector) {
    return !selector || closest(element, selector) != null;
});
// we'll have to use 'touch' events instead of 'mouse' events on iOS and add a more significant delay
// to avoid re-opening when handling (click) on a toggling element
// TODO: use proper Angular platform detection when NgbAutoClose becomes a service and we can inject PLATFORM_ID
/** @type {?} */
var iOS = false;
if (typeof navigator !== 'undefined') {
    iOS = !!navigator.userAgent && /iPad|iPhone|iPod/.test(navigator.userAgent);
}
/**
 * @param {?} zone
 * @param {?} document
 * @param {?} type
 * @param {?} close
 * @param {?} closed$
 * @param {?} insideElements
 * @param {?=} ignoreElements
 * @param {?=} insideSelector
 * @return {?}
 */
function ngbAutoClose(zone, document, type, close, closed$, insideElements, ignoreElements, insideSelector) {
    // closing on ESC and outside clicks
    if (type) {
        zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var shouldCloseOnClick = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var element = (/** @type {?} */ (event.target));
                if ((event instanceof MouseEvent && event.button === 2) || isContainedIn(element, ignoreElements)) {
                    return false;
                }
                if (type === 'inside') {
                    return isContainedIn(element, insideElements) && matchesSelectorIfAny(element, insideSelector);
                }
                else if (type === 'outside') {
                    return !isContainedIn(element, insideElements);
                }
                else /* if (type === true) */ {
                    return matchesSelectorIfAny(element, insideSelector) || !isContainedIn(element, insideElements);
                }
            });
            /** @type {?} */
            var escapes$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(document, 'keyup')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(closed$), 
            // tslint:disable-next-line:deprecation
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e.which === Key.Escape; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e.preventDefault(); })));
            // we have to pre-calculate 'shouldCloseOnClick' on 'mousedown/touchstart',
            // because on 'mouseup/touchend' DOM nodes might be detached
            /** @type {?} */
            var mouseDowns$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(document, iOS ? 'touchstart' : 'mousedown')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(shouldCloseOnClick), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(closed$));
            /** @type {?} */
            var closeableClicks$ = (/** @type {?} */ (Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(document, iOS ? 'touchend' : 'mouseup')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(mouseDowns$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(_a, 2), _ = _b[0], shouldClose = _b[1];
                return shouldClose;
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(iOS ? 16 : 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(closed$))));
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["race"])([escapes$, closeableClicks$]).subscribe((/**
             * @return {?}
             */
            function () { return zone.run(close); }));
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var FOCUSABLE_ELEMENTS_SELECTOR = [
    'a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])', 'select:not([disabled])',
    'textarea:not([disabled])', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'
].join(', ');
/**
 * Returns first and last focusable elements inside of a given element based on specific CSS selector
 * @param {?} element
 * @return {?}
 */
function getFocusableBoundaryElements(element) {
    /** @type {?} */
    var list = Array.from((/** @type {?} */ (element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR))))
        .filter((/**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.tabIndex !== -1; }));
    return [list[0], list[list.length - 1]];
}
/**
 * Function that enforces browser focus to be trapped inside a DOM element.
 *
 * Works only for clicks inside the element and navigation with 'Tab', ignoring clicks outside of the element
 *
 * \@param element The element around which focus will be trapped inside
 * \@param stopFocusTrap$ The observable stream. When completed the focus trap will clean up listeners
 * and free internal resources
 * \@param refocusOnClick Put the focus back to the last focused element whenever a click occurs on element (default to
 * false)
 * @type {?}
 */
var ngbFocusTrap = (/**
 * @param {?} element
 * @param {?} stopFocusTrap$
 * @param {?=} refocusOnClick
 * @return {?}
 */
function (element, stopFocusTrap$, refocusOnClick) {
    if (refocusOnClick === void 0) { refocusOnClick = false; }
    // last focused element
    /** @type {?} */
    var lastFocusedElement$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(element, 'focusin').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(stopFocusTrap$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
     * @param {?} e
     * @return {?}
     */
    function (e) { return e.target; })));
    // 'tab' / 'shift+tab' stream
    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(element, 'keydown')
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(stopFocusTrap$), 
    // tslint:disable:deprecation
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
     * @param {?} e
     * @return {?}
     */
    function (e) { return e.which === Key.Tab; })), 
    // tslint:enable:deprecation
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(lastFocusedElement$))
        .subscribe((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(_a, 2), tabEvent = _b[0], focusedElement = _b[1];
        var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(getFocusableBoundaryElements(element), 2), first = _c[0], last = _c[1];
        if ((focusedElement === first || focusedElement === element) && tabEvent.shiftKey) {
            last.focus();
            tabEvent.preventDefault();
        }
        if (focusedElement === last && !tabEvent.shiftKey) {
            first.focus();
            tabEvent.preventDefault();
        }
    }));
    // inside click
    if (refocusOnClick) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(element, 'click')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(stopFocusTrap$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(lastFocusedElement$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} arr
         * @return {?}
         */
        function (arr) { return (/** @type {?} */ (arr[1])); })))
            .subscribe((/**
         * @param {?} lastFocusedElement
         * @return {?}
         */
        function (lastFocusedElement) { return lastFocusedElement.focus(); }));
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var 
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
Positioning = /** @class */ (function () {
    function Positioning() {
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.getAllStyles = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) { return window.getComputedStyle(element); };
    /**
     * @private
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */
    Positioning.prototype.getStyle = /**
     * @private
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */
    function (element, prop) { return this.getAllStyles(element)[prop]; };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.isStaticPositioned = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.offsetParent = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var offsetParentEl = (/** @type {?} */ (element.offsetParent)) || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = (/** @type {?} */ (offsetParentEl.offsetParent));
        }
        return offsetParentEl || document.documentElement;
    };
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.position = /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    function (element, round) {
        if (round === void 0) { round = true; }
        /** @type {?} */
        var elPosition;
        /** @type {?} */
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
            elPosition = {
                top: elPosition.top,
                bottom: elPosition.bottom,
                left: elPosition.left,
                right: elPosition.right,
                height: elPosition.height,
                width: elPosition.width
            };
        }
        else {
            /** @type {?} */
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.offset = /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    function (element, round) {
        if (round === void 0) { round = true; }
        /** @type {?} */
        var elBcr = element.getBoundingClientRect();
        /** @type {?} */
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        /** @type {?} */
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    /*
      Return false if the element to position is outside the viewport
    */
    /*
        Return false if the element to position is outside the viewport
      */
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */
    Positioning.prototype.positionElements = /*
        Return false if the element to position is outside the viewport
      */
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */
    function (hostElement, targetElement, placement, appendToBody) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(placement.split('-'), 2), _b = _a[0], placementPrimary = _b === void 0 ? 'top' : _b, _c = _a[1], placementSecondary = _c === void 0 ? 'center' : _c;
        /** @type {?} */
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        /** @type {?} */
        var targetElStyles = this.getAllStyles(targetElement);
        /** @type {?} */
        var marginTop = parseFloat(targetElStyles.marginTop);
        /** @type {?} */
        var marginBottom = parseFloat(targetElStyles.marginBottom);
        /** @type {?} */
        var marginLeft = parseFloat(targetElStyles.marginLeft);
        /** @type {?} */
        var marginRight = parseFloat(targetElStyles.marginRight);
        /** @type {?} */
        var topPosition = 0;
        /** @type {?} */
        var leftPosition = 0;
        switch (placementPrimary) {
            case 'top':
                topPosition = (hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom));
                break;
            case 'bottom':
                topPosition = (hostElPosition.top + hostElPosition.height);
                break;
            case 'left':
                leftPosition = (hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight));
                break;
            case 'right':
                leftPosition = (hostElPosition.left + hostElPosition.width);
                break;
        }
        switch (placementSecondary) {
            case 'top':
                topPosition = hostElPosition.top;
                break;
            case 'bottom':
                topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                leftPosition = hostElPosition.left;
                break;
            case 'right':
                leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    leftPosition = (hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2);
                }
                else {
                    topPosition = (hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2);
                }
                break;
        }
        /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
        // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;
        targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)";
        // Check if the targetElement is inside the viewport
        /** @type {?} */
        var targetElBCR = targetElement.getBoundingClientRect();
        /** @type {?} */
        var html = document.documentElement;
        /** @type {?} */
        var windowHeight = window.innerHeight || html.clientHeight;
        /** @type {?} */
        var windowWidth = window.innerWidth || html.clientWidth;
        return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth &&
            targetElBCR.bottom <= windowHeight;
    };
    return Positioning;
}());
/** @type {?} */
var placementSeparator = /\s+/;
/** @type {?} */
var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'left', 'right',
 *   'top-left', 'top-right',
 *   'bottom-left', 'bottom-right',
 *   'left-top', 'left-bottom',
 *   'right-top', 'right-bottom'.
 * */
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @param {?=} baseClass
 * @return {?}
 */
function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
    var e_1, _a;
    /** @type {?} */
    var placementVals = Array.isArray(placement) ? placement : (/** @type {?} */ (placement.split(placementSeparator)));
    /** @type {?} */
    var allowedPlacements = [
        'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom',
        'right-top', 'right-bottom'
    ];
    /** @type {?} */
    var classList = targetElement.classList;
    /** @type {?} */
    var addClassesToTarget = (/**
     * @param {?} targetPlacement
     * @return {?}
     */
    function (targetPlacement) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(targetPlacement.split('-'), 2), primary = _a[0], secondary = _a[1];
        /** @type {?} */
        var classes = [];
        if (baseClass) {
            classes.push(baseClass + "-" + primary);
            if (secondary) {
                classes.push(baseClass + "-" + primary + "-" + secondary);
            }
            classes.forEach((/**
             * @param {?} classname
             * @return {?}
             */
            function (classname) { classList.add(classname); }));
        }
        return classes;
    });
    // Remove old placement classes to avoid issues
    if (baseClass) {
        allowedPlacements.forEach((/**
         * @param {?} placementToRemove
         * @return {?}
         */
        function (placementToRemove) { classList.remove(baseClass + "-" + placementToRemove); }));
    }
    // replace auto placement with other placements
    /** @type {?} */
    var hasAuto = placementVals.findIndex((/**
     * @param {?} val
     * @return {?}
     */
    function (val) { return val === 'auto'; }));
    if (hasAuto >= 0) {
        allowedPlacements.forEach((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (placementVals.find((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return val.search('^' + obj) !== -1; })) == null) {
                placementVals.splice(hasAuto++, 1, (/** @type {?} */ (obj)));
            }
        }));
    }
    // coordinates where to position
    // Required for transform:
    /** @type {?} */
    var style = targetElement.style;
    style.position = 'absolute';
    style.top = '0';
    style.left = '0';
    style['will-change'] = 'transform';
    /** @type {?} */
    var testPlacement;
    /** @type {?} */
    var isInViewport = false;
    try {
        for (var placementVals_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(placementVals), placementVals_1_1 = placementVals_1.next(); !placementVals_1_1.done; placementVals_1_1 = placementVals_1.next()) {
            testPlacement = placementVals_1_1.value;
            /** @type {?} */
            var addedClasses = addClassesToTarget(testPlacement);
            if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
                isInViewport = true;
                break;
            }
            // Remove the baseClasses for further calculation
            if (baseClass) {
                addedClasses.forEach((/**
                 * @param {?} classname
                 * @return {?}
                 */
                function (classname) { classList.remove(classname); }));
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (placementVals_1_1 && !placementVals_1_1.done && (_a = placementVals_1.return)) _a.call(placementVals_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (!isInViewport) {
        // If nothing match, the first placement is the default one
        testPlacement = placementVals[0];
        addClassesToTarget(testPlacement);
        positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
    }
    return testPlacement;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY() {
    return new NgbDateISOParserFormatter();
}
/**
 * An abstract service for parsing and formatting dates for the
 * [`NgbInputDatepicker`](#/components/datepicker/api#NgbInputDatepicker) directive.
 * Converts between the internal `NgbDateStruct` model presentation and a `string` that is displayed in the
 * input element.
 *
 * When user types something in the input this service attempts to parse it into a `NgbDateStruct` object.
 * And vice versa, when users selects a date in the calendar with the mouse, it must be displayed as a `string`
 * in the input.
 *
 * Default implementation uses the ISO 8601 format, but you can provide another implementation via DI
 * to use an alternative string format or a custom parsing logic.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 * @abstract
 */
var NgbDateParserFormatter = /** @class */ (function () {
    function NgbDateParserFormatter() {
    }
    NgbDateParserFormatter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY },] }
    ];
    /** @nocollapse */ NgbDateParserFormatter.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY, token: NgbDateParserFormatter, providedIn: "root" });
    return NgbDateParserFormatter;
}());
var NgbDateISOParserFormatter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbDateISOParserFormatter, _super);
    function NgbDateISOParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NgbDateISOParserFormatter.prototype.parse = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            /** @type {?} */
            var dateParts = value.trim().split('-');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: toInteger(dateParts[2]) };
            }
        }
        return null;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDateISOParserFormatter.prototype.format = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date ?
            date.year + "-" + (isNumber(date.month) ? padNumber(date.month) : '') + "-" + (isNumber(date.day) ? padNumber(date.day) : '') :
            '';
    };
    NgbDateISOParserFormatter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return NgbDateISOParserFormatter;
}(NgbDateParserFormatter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGB_DATEPICKER_VALUE_ACCESSOR$1 = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return NgbInputDatepicker; })),
    multi: true
};
/** @type {?} */
var NGB_DATEPICKER_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return NgbInputDatepicker; })),
    multi: true
};
/**
 * A directive that allows to stick a datepicker popup to an input field.
 *
 * Manages interaction with the input field itself, does value formatting and provides forms integration.
 */
var NgbInputDatepicker = /** @class */ (function () {
    function NgbInputDatepicker(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, _ngZone, _service, _calendar, _dateAdapter, _document, _changeDetector) {
        var _this = this;
        this._parserFormatter = _parserFormatter;
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._cfr = _cfr;
        this._ngZone = _ngZone;
        this._service = _service;
        this._calendar = _calendar;
        this._dateAdapter = _dateAdapter;
        this._document = _document;
        this._changeDetector = _changeDetector;
        this._cRef = null;
        this._disabled = false;
        this._elWithFocus = null;
        /**
         * Indicates whether the datepicker popup should be closed automatically after date selection / outside click or not.
         *
         * * `true` - the popup will close on both date selection and outside click.
         * * `false` - the popup can only be closed manually via `close()` or `toggle()` methods.
         * * `"inside"` - the popup will close on date selection, but not outside clicks.
         * * `"outside"` - the popup will close only on the outside click and not on date selection/inside clicks.
         *
         * \@since 3.0.0
         */
        this.autoClose = true;
        /**
         * The preferred placement of the datepicker popup.
         *
         * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
         * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
         * `"right-bottom"`
         *
         * Accepts an array of strings or a string with space separated possible values.
         *
         * The default order of preference is `"bottom-left bottom-right top-left top-right"`
         *
         * Please see the [positioning overview](#/positioning) for more details.
         */
        this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
        /**
         * An event emitted when user selects a date using keyboard or mouse.
         *
         * The payload of the event is currently selected `NgbDate`.
         *
         * \@since 1.1.1
         */
        this.dateSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted right after the navigation happens and displayed month changes.
         *
         * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
         */
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event fired after closing datepicker window.
         *
         * \@since 4.2.0
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        this._validatorChange = (/**
         * @return {?}
         */
        function () { });
        this._zoneSubscription = _ngZone.onStable.subscribe((/**
         * @return {?}
         */
        function () { return _this._updatePopupPosition(); }));
    }
    Object.defineProperty(NgbInputDatepicker.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value === '' || (value && value !== 'false');
            if (this.isOpen()) {
                this._cRef.instance.setDisabledState(this._disabled);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbInputDatepicker.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbInputDatepicker.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onTouched = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbInputDatepicker.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._validatorChange = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgbInputDatepicker.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) { this.disabled = isDisabled; };
    /**
     * @param {?} c
     * @return {?}
     */
    NgbInputDatepicker.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var value = c.value;
        if (value === null || value === undefined) {
            return null;
        }
        /** @type {?} */
        var ngbDate = this._fromDateStruct(this._dateAdapter.fromModel(value));
        if (!this._calendar.isValid(ngbDate)) {
            return { 'ngbDate': { invalid: c.value } };
        }
        if (this.minDate && ngbDate.before(NgbDate.from(this.minDate))) {
            return { 'ngbDate': { requiredBefore: this.minDate } };
        }
        if (this.maxDate && ngbDate.after(NgbDate.from(this.maxDate))) {
            return { 'ngbDate': { requiredAfter: this.maxDate } };
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgbInputDatepicker.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._model = this._fromDateStruct(this._dateAdapter.fromModel(value));
        this._writeModelValue(this._model);
    };
    /**
     * @param {?} value
     * @param {?=} updateView
     * @return {?}
     */
    NgbInputDatepicker.prototype.manualDateChange = /**
     * @param {?} value
     * @param {?=} updateView
     * @return {?}
     */
    function (value, updateView) {
        if (updateView === void 0) { updateView = false; }
        /** @type {?} */
        var inputValueChanged = value !== this._inputValue;
        if (inputValueChanged) {
            this._inputValue = value;
            this._model = this._fromDateStruct(this._parserFormatter.parse(value));
        }
        if (inputValueChanged || !updateView) {
            this._onChange(this._model ? this._dateAdapter.toModel(this._model) : (value === '' ? null : value));
        }
        if (updateView && this._model) {
            this._writeModelValue(this._model);
        }
    };
    /**
     * @return {?}
     */
    NgbInputDatepicker.prototype.isOpen = /**
     * @return {?}
     */
    function () { return !!this._cRef; };
    /**
     * Opens the datepicker popup.
     *
     * If the related form control contains a valid date, the corresponding month will be opened.
     */
    /**
     * Opens the datepicker popup.
     *
     * If the related form control contains a valid date, the corresponding month will be opened.
     * @return {?}
     */
    NgbInputDatepicker.prototype.open = /**
     * Opens the datepicker popup.
     *
     * If the related form control contains a valid date, the corresponding month will be opened.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isOpen()) {
            /** @type {?} */
            var cf = this._cfr.resolveComponentFactory(NgbDatepicker);
            this._cRef = this._vcRef.createComponent(cf);
            this._applyPopupStyling(this._cRef.location.nativeElement);
            this._applyDatepickerInputs(this._cRef.instance);
            this._subscribeForDatepickerOutputs(this._cRef.instance);
            this._cRef.instance.ngOnInit();
            this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model));
            // date selection event handling
            this._cRef.instance.registerOnChange((/**
             * @param {?} selectedDate
             * @return {?}
             */
            function (selectedDate) {
                _this.writeValue(selectedDate);
                _this._onChange(selectedDate);
                _this._onTouched();
            }));
            this._cRef.changeDetectorRef.detectChanges();
            this._cRef.instance.setDisabledState(this.disabled);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._cRef.location.nativeElement);
            }
            // focus handling
            this._elWithFocus = this._document.activeElement;
            ngbFocusTrap(this._cRef.location.nativeElement, this.closed, true);
            this._cRef.instance.focus();
            ngbAutoClose(this._ngZone, this._document, this.autoClose, (/**
             * @return {?}
             */
            function () { return _this.close(); }), this.closed, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]);
        }
    };
    /**
     * Closes the datepicker popup.
     */
    /**
     * Closes the datepicker popup.
     * @return {?}
     */
    NgbInputDatepicker.prototype.close = /**
     * Closes the datepicker popup.
     * @return {?}
     */
    function () {
        if (this.isOpen()) {
            this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
            this._cRef = null;
            this.closed.emit();
            this._changeDetector.markForCheck();
            // restore focus
            /** @type {?} */
            var elementToFocus = this._elWithFocus && this._elWithFocus['focus'] ? this._elWithFocus : this._document.body;
            elementToFocus.focus();
        }
    };
    /**
     * Toggles the datepicker popup.
     */
    /**
     * Toggles the datepicker popup.
     * @return {?}
     */
    NgbInputDatepicker.prototype.toggle = /**
     * Toggles the datepicker popup.
     * @return {?}
     */
    function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     */
    /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     * @param {?=} date
     * @return {?}
     */
    NgbInputDatepicker.prototype.navigateTo = /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     * @param {?=} date
     * @return {?}
     */
    function (date) {
        if (this.isOpen()) {
            this._cRef.instance.navigateTo(date);
        }
    };
    /**
     * @return {?}
     */
    NgbInputDatepicker.prototype.onBlur = /**
     * @return {?}
     */
    function () { this._onTouched(); };
    /**
     * @return {?}
     */
    NgbInputDatepicker.prototype.onFocus = /**
     * @return {?}
     */
    function () { this._elWithFocus = this._elRef.nativeElement; };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgbInputDatepicker.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['minDate'] || changes['maxDate']) {
            this._validatorChange();
        }
    };
    /**
     * @return {?}
     */
    NgbInputDatepicker.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.close();
        this._zoneSubscription.unsubscribe();
    };
    /**
     * @private
     * @param {?} datepickerInstance
     * @return {?}
     */
    NgbInputDatepicker.prototype._applyDatepickerInputs = /**
     * @private
     * @param {?} datepickerInstance
     * @return {?}
     */
    function (datepickerInstance) {
        var _this = this;
        ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate',
            'maxDate', 'navigation', 'outsideDays', 'showNavigation', 'showWeekdays', 'showWeekNumbers']
            .forEach((/**
         * @param {?} optionName
         * @return {?}
         */
        function (optionName) {
            if (_this[optionName] !== undefined) {
                datepickerInstance[optionName] = _this[optionName];
            }
        }));
        datepickerInstance.startDate = this.startDate || this._model;
    };
    /**
     * @private
     * @param {?} nativeElement
     * @return {?}
     */
    NgbInputDatepicker.prototype._applyPopupStyling = /**
     * @private
     * @param {?} nativeElement
     * @return {?}
     */
    function (nativeElement) {
        this._renderer.addClass(nativeElement, 'dropdown-menu');
        this._renderer.addClass(nativeElement, 'show');
        if (this.container === 'body') {
            this._renderer.addClass(nativeElement, 'ngb-dp-body');
        }
    };
    /**
     * @private
     * @param {?} datepickerInstance
     * @return {?}
     */
    NgbInputDatepicker.prototype._subscribeForDatepickerOutputs = /**
     * @private
     * @param {?} datepickerInstance
     * @return {?}
     */
    function (datepickerInstance) {
        var _this = this;
        datepickerInstance.navigate.subscribe((/**
         * @param {?} navigateEvent
         * @return {?}
         */
        function (navigateEvent) { return _this.navigate.emit(navigateEvent); }));
        datepickerInstance.select.subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            _this.dateSelect.emit(date);
            if (_this.autoClose === true || _this.autoClose === 'inside') {
                _this.close();
            }
        }));
    };
    /**
     * @private
     * @param {?} model
     * @return {?}
     */
    NgbInputDatepicker.prototype._writeModelValue = /**
     * @private
     * @param {?} model
     * @return {?}
     */
    function (model) {
        /** @type {?} */
        var value = this._parserFormatter.format(model);
        this._inputValue = value;
        this._renderer.setProperty(this._elRef.nativeElement, 'value', value);
        if (this.isOpen()) {
            this._cRef.instance.writeValue(this._dateAdapter.toModel(model));
            this._onTouched();
        }
    };
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    NgbInputDatepicker.prototype._fromDateStruct = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var ngbDate = date ? new NgbDate(date.year, date.month, date.day) : null;
        return this._calendar.isValid(ngbDate) ? ngbDate : null;
    };
    /**
     * @private
     * @return {?}
     */
    NgbInputDatepicker.prototype._updatePopupPosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._cRef) {
            return;
        }
        /** @type {?} */
        var hostElement;
        if (typeof this.positionTarget === 'string') {
            hostElement = window.document.querySelector(this.positionTarget);
        }
        else if (this.positionTarget instanceof HTMLElement) {
            hostElement = this.positionTarget;
        }
        else {
            hostElement = this._elRef.nativeElement;
        }
        if (this.positionTarget && !hostElement) {
            throw new Error('ngbDatepicker could not find element declared in [positionTarget] to position against.');
        }
        positionElements(hostElement, this._cRef.location.nativeElement, this.placement, this.container === 'body');
    };
    NgbInputDatepicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'input[ngbDatepicker]',
                    exportAs: 'ngbDatepicker',
                    host: {
                        '(input)': 'manualDateChange($event.target.value)',
                        '(change)': 'manualDateChange($event.target.value, true)',
                        '(focus)': 'onFocus()',
                        '(blur)': 'onBlur()',
                        '[disabled]': 'disabled'
                    },
                    providers: [NGB_DATEPICKER_VALUE_ACCESSOR$1, NGB_DATEPICKER_VALIDATOR, NgbDatepickerService]
                },] }
    ];
    /** @nocollapse */
    NgbInputDatepicker.ctorParameters = function () { return [
        { type: NgbDateParserFormatter },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: NgbDatepickerService },
        { type: NgbCalendar },
        { type: NgbDateAdapter },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    NgbInputDatepicker.propDecorators = {
        autoClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayTemplateData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        displayMonths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        firstDayOfWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        markDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        navigation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outsideDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showWeekdays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showWeekNumbers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        positionTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        navigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbInputDatepicker;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbDatepickerDayView = /** @class */ (function () {
    function NgbDatepickerDayView(i18n) {
        this.i18n = i18n;
    }
    /**
     * @return {?}
     */
    NgbDatepickerDayView.prototype.isMuted = /**
     * @return {?}
     */
    function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
    NgbDatepickerDayView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: '[ngbDatepickerDayView]',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    host: {
                        'class': 'btn-light',
                        '[class.bg-primary]': 'selected',
                        '[class.text-white]': 'selected',
                        '[class.text-muted]': 'isMuted()',
                        '[class.outside]': 'isMuted()',
                        '[class.active]': 'focused'
                    },
                    template: "{{ i18n.getDayNumerals(date) }}",
                    styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:0 0}[ngbDatepickerDayView].outside{opacity:.5}"]
                }] }
    ];
    /** @nocollapse */
    NgbDatepickerDayView.ctorParameters = function () { return [
        { type: NgbDatepickerI18n }
    ]; };
    NgbDatepickerDayView.propDecorators = {
        currentMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        focused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbDatepickerDayView;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbDatepickerNavigationSelect = /** @class */ (function () {
    function NgbDatepickerNavigationSelect(i18n, _renderer) {
        this.i18n = i18n;
        this._renderer = _renderer;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._month = -1;
        this._year = -1;
    }
    /**
     * @param {?} month
     * @return {?}
     */
    NgbDatepickerNavigationSelect.prototype.changeMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) { this.select.emit(new NgbDate(this.date.year, toInteger(month), 1)); };
    /**
     * @param {?} year
     * @return {?}
     */
    NgbDatepickerNavigationSelect.prototype.changeYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) { this.select.emit(new NgbDate(toInteger(year), this.date.month, 1)); };
    /**
     * @return {?}
     */
    NgbDatepickerNavigationSelect.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this.date) {
            if (this.date.month !== this._month) {
                this._month = this.date.month;
                this._renderer.setProperty(this.monthSelect.nativeElement, 'value', this._month);
            }
            if (this.date.year !== this._year) {
                this._year = this.date.year;
                this._renderer.setProperty(this.yearSelect.nativeElement, 'value', this._year);
            }
        }
    };
    NgbDatepickerNavigationSelect.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-navigation-select',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    template: "\n    <select #month\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      i18n-aria-label=\"@@ngb.datepicker.select-month\" aria-label=\"Select month\"\n      i18n-title=\"@@ngb.datepicker.select-month\" title=\"Select month\"\n      (change)=\"changeMonth($event.target.value)\">\n        <option *ngFor=\"let m of months\" [attr.aria-label]=\"i18n.getMonthFullName(m, date?.year)\"\n                [value]=\"m\">{{ i18n.getMonthShortName(m, date?.year) }}</option>\n    </select><select #year\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      i18n-aria-label=\"@@ngb.datepicker.select-year\" aria-label=\"Select year\"\n      i18n-title=\"@@ngb.datepicker.select-year\" title=\"Select year\"\n      (change)=\"changeYear($event.target.value)\">\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{ i18n.getYearNumerals(y) }}</option>\n    </select>\n  ",
                    styles: ["ngb-datepicker-navigation-select>.custom-select{-ms-flex:1 1 auto;flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}"]
                }] }
    ];
    /** @nocollapse */
    NgbDatepickerNavigationSelect.ctorParameters = function () { return [
        { type: NgbDatepickerI18n },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    NgbDatepickerNavigationSelect.propDecorators = {
        date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        months: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        years: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        monthSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['month', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }],
        yearSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['year', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }]
    };
    return NgbDatepickerNavigationSelect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var NgbCalendarHijri = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbCalendarHijri, _super);
    function NgbCalendarHijri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    NgbCalendarHijri.prototype.getDaysPerWeek = /**
     * @return {?}
     */
    function () { return 7; };
    /**
     * @return {?}
     */
    NgbCalendarHijri.prototype.getMonths = /**
     * @return {?}
     */
    function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    /**
     * @return {?}
     */
    NgbCalendarHijri.prototype.getWeeksPerMonth = /**
     * @return {?}
     */
    function () { return 6; };
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    NgbCalendarHijri.prototype.getNext = /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        date = new NgbDate(date.year, date.month, date.day);
        switch (period) {
            case 'y':
                date = this._setYear(date, date.year + number);
                date.month = 1;
                date.day = 1;
                return date;
            case 'm':
                date = this._setMonth(date, date.month + number);
                date.day = 1;
                return date;
            case 'd':
                return this._setDay(date, date.day + number);
            default:
                return date;
        }
    };
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    NgbCalendarHijri.prototype.getPrev = /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbCalendarHijri.prototype.getWeekday = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var day = this.toGregorian(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    /**
     * @param {?} week
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    NgbCalendarHijri.prototype.getWeekNumber = /**
     * @param {?} week
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        /** @type {?} */
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        /** @type {?} */
        var date = week[thursdayIndex];
        /** @type {?} */
        var jsDate = this.toGregorian(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        // Thursday
        /** @type {?} */
        var time = jsDate.getTime();
        /** @type {?} */
        var MuhDate = this.toGregorian(new NgbDate(date.year, 1, 1));
        return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
    };
    /**
     * @return {?}
     */
    NgbCalendarHijri.prototype.getToday = /**
     * @return {?}
     */
    function () { return this.fromGregorian(new Date()); };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbCalendarHijri.prototype.isValid = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) &&
            !isNaN(this.toGregorian(date).getTime());
    };
    /**
     * @private
     * @param {?} date
     * @param {?} day
     * @return {?}
     */
    NgbCalendarHijri.prototype._setDay = /**
     * @private
     * @param {?} date
     * @param {?} day
     * @return {?}
     */
    function (date, day) {
        day = +day;
        /** @type {?} */
        var mDays = this.getDaysPerMonth(date.month, date.year);
        if (day <= 0) {
            while (day <= 0) {
                date = this._setMonth(date, date.month - 1);
                mDays = this.getDaysPerMonth(date.month, date.year);
                day += mDays;
            }
        }
        else if (day > mDays) {
            while (day > mDays) {
                day -= mDays;
                date = this._setMonth(date, date.month + 1);
                mDays = this.getDaysPerMonth(date.month, date.year);
            }
        }
        date.day = day;
        return date;
    };
    /**
     * @private
     * @param {?} date
     * @param {?} month
     * @return {?}
     */
    NgbCalendarHijri.prototype._setMonth = /**
     * @private
     * @param {?} date
     * @param {?} month
     * @return {?}
     */
    function (date, month) {
        month = +month;
        date.year = date.year + Math.floor((month - 1) / 12);
        date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
        return date;
    };
    /**
     * @private
     * @param {?} date
     * @param {?} year
     * @return {?}
     */
    NgbCalendarHijri.prototype._setYear = /**
     * @private
     * @param {?} date
     * @param {?} year
     * @return {?}
     */
    function (date, year) {
        date.year = +year;
        return date;
    };
    NgbCalendarHijri.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return NgbCalendarHijri;
}(NgbCalendar));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks if islamic year is a leap year
 * @param {?} hYear
 * @return {?}
 */
function isIslamicLeapYear(hYear) {
    return (14 + 11 * hYear) % 30 < 11;
}
/**
 * Checks if gregorian years is a leap year
 * @param {?} gDate
 * @return {?}
 */
function isGregorianLeapYear(gDate) {
    /** @type {?} */
    var year = gDate.getFullYear();
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
/**
 * Returns the start of Hijri Month.
 * `hMonth` is 0 for Muharram, 1 for Safar, etc.
 * `hYear` is any Hijri hYear.
 * @param {?} hYear
 * @param {?} hMonth
 * @return {?}
 */
function getIslamicMonthStart(hYear, hMonth) {
    return Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30.0);
}
/**
 * Returns the start of Hijri year.
 * `year` is any Hijri year.
 * @param {?} year
 * @return {?}
 */
function getIslamicYearStart(year) {
    return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function mod(a, b) {
    return a - b * Math.floor(a / b);
}
/**
 * The civil calendar is one type of Hijri calendars used in islamic countries.
 * Uses a fixed cycle of alternating 29- and 30-day months,
 * with a leap day added to the last month of 11 out of every 30 years.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
 * Dershowitz.
 * @type {?}
 */
var GREGORIAN_EPOCH = 1721425.5;
/** @type {?} */
var ISLAMIC_EPOCH = 1948439.5;
var NgbCalendarIslamicCivil = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbCalendarIslamicCivil, _super);
    function NgbCalendarIslamicCivil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gDate` is a JS Date to be converted to Hijri.
     */
    /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gDate` is a JS Date to be converted to Hijri.
     * @param {?} gDate
     * @return {?}
     */
    NgbCalendarIslamicCivil.prototype.fromGregorian = /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gDate` is a JS Date to be converted to Hijri.
     * @param {?} gDate
     * @return {?}
     */
    function (gDate) {
        /** @type {?} */
        var gYear = gDate.getFullYear();
        /** @type {?} */
        var gMonth = gDate.getMonth();
        /** @type {?} */
        var gDay = gDate.getDate();
        /** @type {?} */
        var julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) +
            -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
            Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(gDate) ? -1 : -2) + gDay);
        julianDay = Math.floor(julianDay) + 0.5;
        /** @type {?} */
        var days = julianDay - ISLAMIC_EPOCH;
        /** @type {?} */
        var hYear = Math.floor((30 * days + 10646) / 10631.0);
        /** @type {?} */
        var hMonth = Math.ceil((days - 29 - getIslamicYearStart(hYear)) / 29.5);
        hMonth = Math.min(hMonth, 11);
        /** @type {?} */
        var hDay = Math.ceil(days - getIslamicMonthStart(hYear, hMonth)) + 1;
        return new NgbDate(hYear, hMonth + 1, hDay);
    };
    /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hDate` is an islamic(civil) date to be converted to Gregorian.
     */
    /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hDate` is an islamic(civil) date to be converted to Gregorian.
     * @param {?} hDate
     * @return {?}
     */
    NgbCalendarIslamicCivil.prototype.toGregorian = /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hDate` is an islamic(civil) date to be converted to Gregorian.
     * @param {?} hDate
     * @return {?}
     */
    function (hDate) {
        /** @type {?} */
        var hYear = hDate.year;
        /** @type {?} */
        var hMonth = hDate.month - 1;
        /** @type {?} */
        var hDay = hDate.day;
        /** @type {?} */
        var julianDay = hDay + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
        /** @type {?} */
        var wjd = Math.floor(julianDay - 0.5) + 0.5;
        /** @type {?} */
        var depoch = wjd - GREGORIAN_EPOCH;
        /** @type {?} */
        var quadricent = Math.floor(depoch / 146097);
        /** @type {?} */
        var dqc = mod(depoch, 146097);
        /** @type {?} */
        var cent = Math.floor(dqc / 36524);
        /** @type {?} */
        var dcent = mod(dqc, 36524);
        /** @type {?} */
        var quad = Math.floor(dcent / 1461);
        /** @type {?} */
        var dquad = mod(dcent, 1461);
        /** @type {?} */
        var yindex = Math.floor(dquad / 365);
        /** @type {?} */
        var year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
        if (!(cent === 4 || yindex === 4)) {
            year++;
        }
        /** @type {?} */
        var gYearStart = GREGORIAN_EPOCH + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400);
        /** @type {?} */
        var yearday = wjd - gYearStart;
        /** @type {?} */
        var tjd = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear(new Date(year, 3, 1)) ? -1 : -2) + 1);
        /** @type {?} */
        var leapadj = wjd < tjd ? 0 : isGregorianLeapYear(new Date(year, 3, 1)) ? 1 : 2;
        /** @type {?} */
        var month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
        /** @type {?} */
        var tjd2 = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) +
            Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear(new Date(year, month - 1, 1)) ? -1 : -2) +
                1);
        /** @type {?} */
        var day = wjd - tjd2 + 1;
        return new Date(year, month - 1, day);
    };
    /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     */
    /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    NgbCalendarIslamicCivil.prototype.getDaysPerMonth = /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    function (month, year) {
        year = year + Math.floor(month / 13);
        month = ((month - 1) % 12) + 1;
        /** @type {?} */
        var length = 29 + month % 2;
        if (month === 12 && isIslamicLeapYear(year)) {
            length++;
        }
        return length;
    };
    NgbCalendarIslamicCivil.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return NgbCalendarIslamicCivil;
}(NgbCalendarHijri));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Umalqura calendar is one type of Hijri calendars used in islamic countries.
 * This Calendar is used by Saudi Arabia for administrative purpose.
 * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * @type {?}
 */
var GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
/** @type {?} */
var GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
/** @type {?} */
var HIJRI_BEGIN = 1300;
/** @type {?} */
var HIJRI_END = 1600;
/** @type {?} */
var ONE_DAY = 1000 * 60 * 60 * 24;
/** @type {?} */
var MONTH_LENGTH = [
    // 1300-1304
    '101010101010', '110101010100', '111011001001', '011011010100', '011011101010',
    // 1305-1309
    '001101101100', '101010101101', '010101010101', '011010101001', '011110010010',
    // 1310-1314
    '101110101001', '010111010100', '101011011010', '010101011100', '110100101101',
    // 1315-1319
    '011010010101', '011101001010', '101101010100', '101101101010', '010110101101',
    // 1320-1324
    '010010101110', '101001001111', '010100010111', '011010001011', '011010100101',
    // 1325-1329
    '101011010101', '001011010110', '100101011011', '010010011101', '101001001101',
    // 1330-1334
    '110100100110', '110110010101', '010110101100', '100110110110', '001010111010',
    // 1335-1339
    '101001011011', '010100101011', '101010010101', '011011001010', '101011101001',
    // 1340-1344
    '001011110100', '100101110110', '001010110110', '100101010110', '101011001010',
    // 1345-1349
    '101110100100', '101111010010', '010111011001', '001011011100', '100101101101',
    // 1350-1354
    '010101001101', '101010100101', '101101010010', '101110100101', '010110110100',
    // 1355-1359
    '100110110110', '010101010111', '001010010111', '010101001011', '011010100011',
    // 1360-1364
    '011101010010', '101101100101', '010101101010', '101010101011', '010100101011',
    // 1365-1369
    '110010010101', '110101001010', '110110100101', '010111001010', '101011010110',
    // 1370-1374
    '100101010111', '010010101011', '100101001011', '101010100101', '101101010010',
    // 1375-1379
    '101101101010', '010101110101', '001001110110', '100010110111', '010001011011',
    // 1380-1384
    '010101010101', '010110101001', '010110110100', '100111011010', '010011011101',
    // 1385-1389
    '001001101110', '100100110110', '101010101010', '110101010100', '110110110010',
    // 1390-1394
    '010111010101', '001011011010', '100101011011', '010010101011', '101001010101',
    // 1395-1399
    '101101001001', '101101100100', '101101110001', '010110110100', '101010110101',
    // 1400-1404
    '101001010101', '110100100101', '111010010010', '111011001001', '011011010100',
    // 1405-1409
    '101011101001', '100101101011', '010010101011', '101010010011', '110101001001',
    // 1410-1414
    '110110100100', '110110110010', '101010111001', '010010111010', '101001011011',
    // 1415-1419
    '010100101011', '101010010101', '101100101010', '101101010101', '010101011100',
    // 1420-1424
    '010010111101', '001000111101', '100100011101', '101010010101', '101101001010',
    // 1425-1429
    '101101011010', '010101101101', '001010110110', '100100111011', '010010011011',
    // 1430-1434
    '011001010101', '011010101001', '011101010100', '101101101010', '010101101100',
    // 1435-1439
    '101010101101', '010101010101', '101100101001', '101110010010', '101110101001',
    // 1440-1444
    '010111010100', '101011011010', '010101011010', '101010101011', '010110010101',
    // 1445-1449
    '011101001001', '011101100100', '101110101010', '010110110101', '001010110110',
    // 1450-1454
    '101001010110', '111001001101', '101100100101', '101101010010', '101101101010',
    // 1455-1459
    '010110101101', '001010101110', '100100101111', '010010010111', '011001001011',
    // 1460-1464
    '011010100101', '011010101100', '101011010110', '010101011101', '010010011101',
    // 1465-1469
    '101001001101', '110100010110', '110110010101', '010110101010', '010110110101',
    // 1470-1474
    '001011011010', '100101011011', '010010101101', '010110010101', '011011001010',
    // 1475-1479
    '011011100100', '101011101010', '010011110101', '001010110110', '100101010110',
    // 1480-1484
    '101010101010', '101101010100', '101111010010', '010111011001', '001011101010',
    // 1485-1489
    '100101101101', '010010101101', '101010010101', '101101001010', '101110100101',
    // 1490-1494
    '010110110010', '100110110101', '010011010110', '101010010111', '010101000111',
    // 1495-1499
    '011010010011', '011101001001', '101101010101', '010101101010', '101001101011',
    // 1500-1504
    '010100101011', '101010001011', '110101000110', '110110100011', '010111001010',
    // 1505-1509
    '101011010110', '010011011011', '001001101011', '100101001011', '101010100101',
    // 1510-1514
    '101101010010', '101101101001', '010101110101', '000101110110', '100010110111',
    // 1515-1519
    '001001011011', '010100101011', '010101100101', '010110110100', '100111011010',
    // 1520-1524
    '010011101101', '000101101101', '100010110110', '101010100110', '110101010010',
    // 1525-1529
    '110110101001', '010111010100', '101011011010', '100101011011', '010010101011',
    // 1530-1534
    '011001010011', '011100101001', '011101100010', '101110101001', '010110110010',
    // 1535-1539
    '101010110101', '010101010101', '101100100101', '110110010010', '111011001001',
    // 1540-1544
    '011011010010', '101011101001', '010101101011', '010010101011', '101001010101',
    // 1545-1549
    '110100101001', '110101010100', '110110101010', '100110110101', '010010111010',
    // 1550-1554
    '101000111011', '010010011011', '101001001101', '101010101010', '101011010101',
    // 1555-1559
    '001011011010', '100101011101', '010001011110', '101000101110', '110010011010',
    // 1560-1564
    '110101010101', '011010110010', '011010111001', '010010111010', '101001011101',
    // 1565-1569
    '010100101101', '101010010101', '101101010010', '101110101000', '101110110100',
    // 1570-1574
    '010110111001', '001011011010', '100101011010', '101101001010', '110110100100',
    // 1575-1579
    '111011010001', '011011101000', '101101101010', '010101101101', '010100110101',
    // 1580-1584
    '011010010101', '110101001010', '110110101000', '110111010100', '011011011010',
    // 1585-1589
    '010101011011', '001010011101', '011000101011', '101100010101', '101101001010',
    // 1590-1594
    '101110010101', '010110101010', '101010101110', '100100101110', '110010001111',
    // 1595-1599
    '010100100111', '011010010101', '011010101010', '101011010110', '010101011101',
    // 1600
    '001010011101'
];
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */
function getDaysDiff(date1, date2) {
    // Ignores the time part in date1 and date2:
    /** @type {?} */
    var time1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    /** @type {?} */
    var time2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    /** @type {?} */
    var diff = Math.abs(time1 - time2);
    return Math.round(diff / ONE_DAY);
}
var NgbCalendarIslamicUmalqura = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbCalendarIslamicUmalqura, _super);
    function NgbCalendarIslamicUmalqura() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
    * `gdate` is s JS Date to be converted to Hijri.
    */
    /**
     * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
     * `gdate` is s JS Date to be converted to Hijri.
     * @param {?} gDate
     * @return {?}
     */
    NgbCalendarIslamicUmalqura.prototype.fromGregorian = /**
     * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
     * `gdate` is s JS Date to be converted to Hijri.
     * @param {?} gDate
     * @return {?}
     */
    function (gDate) {
        /** @type {?} */
        var hDay = 1;
        /** @type {?} */
        var hMonth = 0;
        /** @type {?} */
        var hYear = 1300;
        /** @type {?} */
        var daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
        if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
            /** @type {?} */
            var year = 1300;
            for (var i = 0; i < MONTH_LENGTH.length; i++, year++) {
                for (var j = 0; j < 12; j++) {
                    /** @type {?} */
                    var numOfDays = +MONTH_LENGTH[i][j] + 29;
                    if (daysDiff <= numOfDays) {
                        hDay = daysDiff + 1;
                        if (hDay > numOfDays) {
                            hDay = 1;
                            j++;
                        }
                        if (j > 11) {
                            j = 0;
                            year++;
                        }
                        hMonth = j;
                        hYear = year;
                        return new NgbDate(hYear, hMonth + 1, hDay);
                    }
                    daysDiff = daysDiff - numOfDays;
                }
            }
        }
        else {
            return _super.prototype.fromGregorian.call(this, gDate);
        }
    };
    /**
    * Converts the current Hijri date to Gregorian.
    */
    /**
     * Converts the current Hijri date to Gregorian.
     * @param {?} hDate
     * @return {?}
     */
    NgbCalendarIslamicUmalqura.prototype.toGregorian = /**
     * Converts the current Hijri date to Gregorian.
     * @param {?} hDate
     * @return {?}
     */
    function (hDate) {
        /** @type {?} */
        var hYear = hDate.year;
        /** @type {?} */
        var hMonth = hDate.month - 1;
        /** @type {?} */
        var hDay = hDate.day;
        /** @type {?} */
        var gDate = new Date(GREGORIAN_FIRST_DATE);
        /** @type {?} */
        var dayDiff = hDay - 1;
        if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            for (var y = 0; y < hYear - HIJRI_BEGIN; y++) {
                for (var m = 0; m < 12; m++) {
                    dayDiff += +MONTH_LENGTH[y][m] + 29;
                }
            }
            for (var m = 0; m < hMonth; m++) {
                dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
            }
            gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
        }
        else {
            gDate = _super.prototype.toGregorian.call(this, hDate);
        }
        return gDate;
    };
    /**
    * Returns the number of days in a specific Hijri hMonth.
    * `hMonth` is 1 for Muharram, 2 for Safar, etc.
    * `hYear` is any Hijri hYear.
    */
    /**
     * Returns the number of days in a specific Hijri hMonth.
     * `hMonth` is 1 for Muharram, 2 for Safar, etc.
     * `hYear` is any Hijri hYear.
     * @param {?} hMonth
     * @param {?} hYear
     * @return {?}
     */
    NgbCalendarIslamicUmalqura.prototype.getDaysPerMonth = /**
     * Returns the number of days in a specific Hijri hMonth.
     * `hMonth` is 1 for Muharram, 2 for Safar, etc.
     * `hYear` is any Hijri hYear.
     * @param {?} hMonth
     * @param {?} hYear
     * @return {?}
     */
    function (hMonth, hYear) {
        if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            /** @type {?} */
            var pos = hYear - HIJRI_BEGIN;
            return +MONTH_LENGTH[pos][hMonth - 1] + 29;
        }
        return _super.prototype.getDaysPerMonth.call(this, hMonth, hYear);
    };
    NgbCalendarIslamicUmalqura.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return NgbCalendarIslamicUmalqura;
}(NgbCalendarIslamicCivil));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the equivalent JS date value for a give input Jalali date.
 * `jalaliDate` is an Jalali date to be converted to Gregorian.
 * @param {?} jalaliDate
 * @return {?}
 */
function toGregorian(jalaliDate) {
    /** @type {?} */
    var jdn = jalaliToJulian(jalaliDate.year, jalaliDate.month, jalaliDate.day);
    /** @type {?} */
    var date = julianToGregorian(jdn);
    date.setHours(6, 30, 3, 200);
    return date;
}
/**
 * Returns the equivalent jalali date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to jalali.
 * utc to local
 * @param {?} gdate
 * @return {?}
 */
function fromGregorian(gdate) {
    /** @type {?} */
    var g2d = gregorianToJulian(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
    return julianToJalali(g2d);
}
/**
 * @param {?} date
 * @param {?} yearValue
 * @return {?}
 */
function setJalaliYear(date, yearValue) {
    date.year = +yearValue;
    return date;
}
/**
 * @param {?} date
 * @param {?} month
 * @return {?}
 */
function setJalaliMonth(date, month) {
    month = +month;
    date.year = date.year + Math.floor((month - 1) / 12);
    date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
    return date;
}
/**
 * @param {?} date
 * @param {?} day
 * @return {?}
 */
function setJalaliDay(date, day) {
    /** @type {?} */
    var mDays = getDaysPerMonth(date.month, date.year);
    if (day <= 0) {
        while (day <= 0) {
            date = setJalaliMonth(date, date.month - 1);
            mDays = getDaysPerMonth(date.month, date.year);
            day += mDays;
        }
    }
    else if (day > mDays) {
        while (day > mDays) {
            day -= mDays;
            date = setJalaliMonth(date, date.month + 1);
            mDays = getDaysPerMonth(date.month, date.year);
        }
    }
    date.day = day;
    return date;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function mod$1(a, b) {
    return a - b * Math.floor(a / b);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function div(a, b) {
    return Math.trunc(a / b);
}
/*
 This function determines if the Jalali (Persian) year is
 leap (366-day long) or is the common year (365 days), and
 finds the day in March (Gregorian calendar) of the first
 day of the Jalali year (jalaliYear).
 @param jalaliYear Jalali calendar year (-61 to 3177)
 @return
 leap: number of years since the last leap year (0 to 4)
 gYear: Gregorian year of the beginning of Jalali year
 march: the March day of Farvardin the 1st (1st day of jalaliYear)
 @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
 @see: http://www.fourmilab.ch/documents/calendar/
 */
/**
 * @param {?} jalaliYear
 * @return {?}
 */
function jalCal(jalaliYear) {
    // Jalali years starting the 33-year rule.
    /** @type {?} */
    var breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
    /** @type {?} */
    var breaksLength = breaks.length;
    /** @type {?} */
    var gYear = jalaliYear + 621;
    /** @type {?} */
    var leapJ = -14;
    /** @type {?} */
    var jp = breaks[0];
    if (jalaliYear < jp || jalaliYear >= breaks[breaksLength - 1]) {
        throw new Error('Invalid Jalali year ' + jalaliYear);
    }
    // Find the limiting years for the Jalali year jalaliYear.
    /** @type {?} */
    var jump;
    for (var i = 1; i < breaksLength; i += 1) {
        /** @type {?} */
        var jm = breaks[i];
        jump = jm - jp;
        if (jalaliYear < jm) {
            break;
        }
        leapJ = leapJ + div(jump, 33) * 8 + div(mod$1(jump, 33), 4);
        jp = jm;
    }
    /** @type {?} */
    var n = jalaliYear - jp;
    // Find the number of leap years from AD 621 to the beginning
    // of the current Jalali year in the Persian calendar.
    leapJ = leapJ + div(n, 33) * 8 + div(mod$1(n, 33) + 3, 4);
    if (mod$1(jump, 33) === 4 && jump - n === 4) {
        leapJ += 1;
    }
    // And the same in the Gregorian calendar (until the year gYear).
    /** @type {?} */
    var leapG = div(gYear, 4) - div((div(gYear, 100) + 1) * 3, 4) - 150;
    // Determine the Gregorian date of Farvardin the 1st.
    /** @type {?} */
    var march = 20 + leapJ - leapG;
    // Find how many years have passed since the last leap year.
    if (jump - n < 6) {
        n = n - jump + div(jump + 4, 33) * 33;
    }
    /** @type {?} */
    var leap = mod$1(mod$1(n + 1, 33) - 1, 4);
    if (leap === -1) {
        leap = 4;
    }
    return { leap: leap, gy: gYear, march: march };
}
/*
 Calculates Gregorian and Julian calendar dates from the Julian Day number
 (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
 calendars) to some millions years ahead of the present.
 @param jdn Julian Day number
 @return
 gYear: Calendar year (years BC numbered 0, -1, -2, ...)
 gMonth: Calendar month (1 to 12)
 gDay: Calendar day of the month M (1 to 28/29/30/31)
 */
/**
 * @param {?} julianDayNumber
 * @return {?}
 */
function julianToGregorian(julianDayNumber) {
    /** @type {?} */
    var j = 4 * julianDayNumber + 139361631;
    j = j + div(div(4 * julianDayNumber + 183187720, 146097) * 3, 4) * 4 - 3908;
    /** @type {?} */
    var i = div(mod$1(j, 1461), 4) * 5 + 308;
    /** @type {?} */
    var gDay = div(mod$1(i, 153), 5) + 1;
    /** @type {?} */
    var gMonth = mod$1(div(i, 153), 12) + 1;
    /** @type {?} */
    var gYear = div(j, 1461) - 100100 + div(8 - gMonth, 6);
    return new Date(gYear, gMonth - 1, gDay);
}
/*
 Converts a date of the Jalali calendar to the Julian Day number.
 @param jy Jalali year (1 to 3100)
 @param jm Jalali month (1 to 12)
 @param jd Jalali day (1 to 29/31)
 @return Julian Day number
 */
/**
 * @param {?} gy
 * @param {?} gm
 * @param {?} gd
 * @return {?}
 */
function gregorianToJulian(gy, gm, gd) {
    /** @type {?} */
    var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod$1(gm + 9, 12) + 2, 5) + gd - 34840408;
    d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
    return d;
}
/*
 Converts the Julian Day number to a date in the Jalali calendar.
 @param julianDayNumber Julian Day number
 @return
 jalaliYear: Jalali year (1 to 3100)
 jalaliMonth: Jalali month (1 to 12)
 jalaliDay: Jalali day (1 to 29/31)
 */
/**
 * @param {?} julianDayNumber
 * @return {?}
 */
function julianToJalali(julianDayNumber) {
    /** @type {?} */
    var gy = julianToGregorian(julianDayNumber).getFullYear() // Calculate Gregorian year (gy).
    ;
    /** @type {?} */
    var jalaliYear = gy - 621;
    /** @type {?} */
    var r = jalCal(jalaliYear);
    /** @type {?} */
    var gregorianDay = gregorianToJulian(gy, 3, r.march);
    /** @type {?} */
    var jalaliDay;
    /** @type {?} */
    var jalaliMonth;
    /** @type {?} */
    var numberOfDays;
    // Find number of days that passed since 1 Farvardin.
    numberOfDays = julianDayNumber - gregorianDay;
    if (numberOfDays >= 0) {
        if (numberOfDays <= 185) {
            // The first 6 months.
            jalaliMonth = 1 + div(numberOfDays, 31);
            jalaliDay = mod$1(numberOfDays, 31) + 1;
            return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
        }
        else {
            // The remaining months.
            numberOfDays -= 186;
        }
    }
    else {
        // Previous Jalali year.
        jalaliYear -= 1;
        numberOfDays += 179;
        if (r.leap === 1) {
            numberOfDays += 1;
        }
    }
    jalaliMonth = 7 + div(numberOfDays, 30);
    jalaliDay = mod$1(numberOfDays, 30) + 1;
    return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
}
/*
 Converts a date of the Jalali calendar to the Julian Day number.
 @param jYear Jalali year (1 to 3100)
 @param jMonth Jalali month (1 to 12)
 @param jDay Jalali day (1 to 29/31)
 @return Julian Day number
 */
/**
 * @param {?} jYear
 * @param {?} jMonth
 * @param {?} jDay
 * @return {?}
 */
function jalaliToJulian(jYear, jMonth, jDay) {
    /** @type {?} */
    var r = jalCal(jYear);
    return gregorianToJulian(r.gy, 3, r.march) + (jMonth - 1) * 31 - div(jMonth, 7) * (jMonth - 7) + jDay - 1;
}
/**
 * Returns the number of days in a specific jalali month.
 * @param {?} month
 * @param {?} year
 * @return {?}
 */
function getDaysPerMonth(month, year) {
    if (month <= 6) {
        return 31;
    }
    if (month <= 11) {
        return 30;
    }
    if (jalCal(year).leap === 0) {
        return 30;
    }
    return 29;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbCalendarPersian = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbCalendarPersian, _super);
    function NgbCalendarPersian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    NgbCalendarPersian.prototype.getDaysPerWeek = /**
     * @return {?}
     */
    function () { return 7; };
    /**
     * @return {?}
     */
    NgbCalendarPersian.prototype.getMonths = /**
     * @return {?}
     */
    function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    /**
     * @return {?}
     */
    NgbCalendarPersian.prototype.getWeeksPerMonth = /**
     * @return {?}
     */
    function () { return 6; };
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    NgbCalendarPersian.prototype.getNext = /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        date = new NgbDate(date.year, date.month, date.day);
        switch (period) {
            case 'y':
                date = setJalaliYear(date, date.year + number);
                date.month = 1;
                date.day = 1;
                return date;
            case 'm':
                date = setJalaliMonth(date, date.month + number);
                date.day = 1;
                return date;
            case 'd':
                return setJalaliDay(date, date.day + number);
            default:
                return date;
        }
    };
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    NgbCalendarPersian.prototype.getPrev = /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbCalendarPersian.prototype.getWeekday = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var day = toGregorian(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    /**
     * @param {?} week
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    NgbCalendarPersian.prototype.getWeekNumber = /**
     * @param {?} week
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        /** @type {?} */
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        /** @type {?} */
        var date = week[thursdayIndex];
        /** @type {?} */
        var jsDate = toGregorian(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        // Thursday
        /** @type {?} */
        var time = jsDate.getTime();
        /** @type {?} */
        var startDate = toGregorian(new NgbDate(date.year, 1, 1));
        return Math.floor(Math.round((time - startDate.getTime()) / 86400000) / 7) + 1;
    };
    /**
     * @return {?}
     */
    NgbCalendarPersian.prototype.getToday = /**
     * @return {?}
     */
    function () { return fromGregorian(new Date()); };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbCalendarPersian.prototype.isValid = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) &&
            !isNaN(toGregorian(date).getTime());
    };
    NgbCalendarPersian.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return NgbCalendarPersian;
}(NgbCalendar));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PARTS_PER_HOUR = 1080;
/** @type {?} */
var PARTS_PER_DAY = 24 * PARTS_PER_HOUR;
/** @type {?} */
var PARTS_FRACTIONAL_MONTH = 12 * PARTS_PER_HOUR + 793;
/** @type {?} */
var PARTS_PER_MONTH = 29 * PARTS_PER_DAY + PARTS_FRACTIONAL_MONTH;
/** @type {?} */
var BAHARAD = 11 * PARTS_PER_HOUR + 204;
/** @type {?} */
var HEBREW_DAY_ON_JAN_1_1970 = 2092591;
/** @type {?} */
var GREGORIAN_EPOCH$1 = 1721425.5;
/**
 * @param {?} year
 * @return {?}
 */
function isGregorianLeapYear$1(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
/**
 * @param {?} year
 * @return {?}
 */
function numberOfFirstDayInYear(year) {
    /** @type {?} */
    var monthsBeforeYear = Math.floor((235 * year - 234) / 19);
    /** @type {?} */
    var fractionalMonthsBeforeYear = monthsBeforeYear * PARTS_FRACTIONAL_MONTH + BAHARAD;
    /** @type {?} */
    var dayNumber = monthsBeforeYear * 29 + Math.floor(fractionalMonthsBeforeYear / PARTS_PER_DAY);
    /** @type {?} */
    var timeOfDay = fractionalMonthsBeforeYear % PARTS_PER_DAY;
    /** @type {?} */
    var dayOfWeek = dayNumber % 7;
    if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
        dayNumber++;
        dayOfWeek = dayNumber % 7;
    }
    if (dayOfWeek === 1 && timeOfDay > 15 * PARTS_PER_HOUR + 204 && !isHebrewLeapYear(year)) {
        dayNumber += 2;
    }
    else if (dayOfWeek === 0 && timeOfDay > 21 * PARTS_PER_HOUR + 589 && isHebrewLeapYear(year - 1)) {
        dayNumber++;
    }
    return dayNumber;
}
/**
 * @param {?} month
 * @param {?} year
 * @return {?}
 */
function getDaysInGregorianMonth(month, year) {
    /** @type {?} */
    var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isGregorianLeapYear$1(year)) {
        days[1]++;
    }
    return days[month - 1];
}
/**
 * @param {?} year
 * @return {?}
 */
function getHebrewMonths(year) {
    return isHebrewLeapYear(year) ? 13 : 12;
}
/**
 * Returns the number of days in a specific Hebrew year.
 * `year` is any Hebrew year.
 * @param {?} year
 * @return {?}
 */
function getDaysInHebrewYear(year) {
    return numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
}
/**
 * @param {?} year
 * @return {?}
 */
function isHebrewLeapYear(year) {
    /** @type {?} */
    var b = (year * 12 + 17) % 19;
    return b >= ((b < 0) ? -7 : 12);
}
/**
 * Returns the number of days in a specific Hebrew month.
 * `month` is 1 for Nisan, 2 for Iyar etc. Note: Hebrew leap year contains 13 months.
 * `year` is any Hebrew year.
 * @param {?} month
 * @param {?} year
 * @return {?}
 */
function getDaysInHebrewMonth(month, year) {
    /** @type {?} */
    var yearLength = numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
    /** @type {?} */
    var yearType = (yearLength <= 380 ? yearLength : (yearLength - 30)) - 353;
    /** @type {?} */
    var leapYear = isHebrewLeapYear(year);
    /** @type {?} */
    var daysInMonth = leapYear ? [30, 29, 29, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] :
        [30, 29, 29, 29, 30, 29, 30, 29, 30, 29, 30, 29];
    if (yearType > 0) {
        daysInMonth[2]++; // Kislev gets an extra day in normal or complete years.
    }
    if (yearType > 1) {
        daysInMonth[1]++; // Heshvan gets an extra day in complete years only.
    }
    return daysInMonth[month - 1];
}
/**
 * @param {?} date
 * @return {?}
 */
function getDayNumberInHebrewYear(date) {
    /** @type {?} */
    var numberOfDay = 0;
    for (var i = 1; i < date.month; i++) {
        numberOfDay += getDaysInHebrewMonth(i, date.year);
    }
    return numberOfDay + date.day;
}
/**
 * @param {?} date
 * @param {?} val
 * @return {?}
 */
function setHebrewMonth(date, val) {
    /** @type {?} */
    var after = val >= 0;
    if (!after) {
        val = -val;
    }
    while (val > 0) {
        if (after) {
            if (val > getHebrewMonths(date.year) - date.month) {
                val -= getHebrewMonths(date.year) - date.month + 1;
                date.year++;
                date.month = 1;
            }
            else {
                date.month += val;
                val = 0;
            }
        }
        else {
            if (val >= date.month) {
                date.year--;
                val -= date.month;
                date.month = getHebrewMonths(date.year);
            }
            else {
                date.month -= val;
                val = 0;
            }
        }
    }
    return date;
}
/**
 * @param {?} date
 * @param {?} val
 * @return {?}
 */
function setHebrewDay(date, val) {
    /** @type {?} */
    var after = val >= 0;
    if (!after) {
        val = -val;
    }
    while (val > 0) {
        if (after) {
            if (val > getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date)) {
                val -= getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date) + 1;
                date.year++;
                date.month = 1;
                date.day = 1;
            }
            else if (val > getDaysInHebrewMonth(date.month, date.year) - date.day) {
                val -= getDaysInHebrewMonth(date.month, date.year) - date.day + 1;
                date.month++;
                date.day = 1;
            }
            else {
                date.day += val;
                val = 0;
            }
        }
        else {
            if (val >= date.day) {
                val -= date.day;
                date.month--;
                if (date.month === 0) {
                    date.year--;
                    date.month = getHebrewMonths(date.year);
                }
                date.day = getDaysInHebrewMonth(date.month, date.year);
            }
            else {
                date.day -= val;
                val = 0;
            }
        }
    }
    return date;
}
/**
 * Returns the equivalent Hebrew date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to Hebrew date.
 * @param {?} gdate
 * @return {?}
 */
function fromGregorian$1(gdate) {
    /** @type {?} */
    var date = new Date(gdate);
    /** @type {?} */
    var gYear = date.getFullYear();
    /** @type {?} */
    var gMonth = date.getMonth();
    /** @type {?} */
    var gDay = date.getDate();
    /** @type {?} */
    var julianDay = GREGORIAN_EPOCH$1 - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) -
        Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
        Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear$1(gYear) ? -1 : -2) + gDay);
    julianDay = Math.floor(julianDay + 0.5);
    /** @type {?} */
    var daysSinceHebEpoch = julianDay - 347997;
    /** @type {?} */
    var monthsSinceHebEpoch = Math.floor(daysSinceHebEpoch * PARTS_PER_DAY / PARTS_PER_MONTH);
    /** @type {?} */
    var hYear = Math.floor((monthsSinceHebEpoch * 19 + 234) / 235) + 1;
    /** @type {?} */
    var firstDayOfThisYear = numberOfFirstDayInYear(hYear);
    /** @type {?} */
    var dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
    while (dayOfYear < 1) {
        hYear--;
        firstDayOfThisYear = numberOfFirstDayInYear(hYear);
        dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
    }
    /** @type {?} */
    var hMonth = 1;
    /** @type {?} */
    var hDay = dayOfYear;
    while (hDay > getDaysInHebrewMonth(hMonth, hYear)) {
        hDay -= getDaysInHebrewMonth(hMonth, hYear);
        hMonth++;
    }
    return new NgbDate(hYear, hMonth, hDay);
}
/**
 * Returns the equivalent JS date value for a given Hebrew date.
 * `hebrewDate` is an Hebrew date to be converted to Gregorian.
 * @param {?} hebrewDate
 * @return {?}
 */
function toGregorian$1(hebrewDate) {
    /** @type {?} */
    var hYear = hebrewDate.year;
    /** @type {?} */
    var hMonth = hebrewDate.month;
    /** @type {?} */
    var hDay = hebrewDate.day;
    /** @type {?} */
    var days = numberOfFirstDayInYear(hYear);
    for (var i = 1; i < hMonth; i++) {
        days += getDaysInHebrewMonth(i, hYear);
    }
    days += hDay;
    /** @type {?} */
    var diffDays = days - HEBREW_DAY_ON_JAN_1_1970;
    /** @type {?} */
    var after = diffDays >= 0;
    if (!after) {
        diffDays = -diffDays;
    }
    /** @type {?} */
    var gYear = 1970;
    /** @type {?} */
    var gMonth = 1;
    /** @type {?} */
    var gDay = 1;
    while (diffDays > 0) {
        if (after) {
            if (diffDays >= (isGregorianLeapYear$1(gYear) ? 366 : 365)) {
                diffDays -= isGregorianLeapYear$1(gYear) ? 366 : 365;
                gYear++;
            }
            else if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
                diffDays -= getDaysInGregorianMonth(gMonth, gYear);
                gMonth++;
            }
            else {
                gDay += diffDays;
                diffDays = 0;
            }
        }
        else {
            if (diffDays >= (isGregorianLeapYear$1(gYear - 1) ? 366 : 365)) {
                diffDays -= isGregorianLeapYear$1(gYear - 1) ? 366 : 365;
                gYear--;
            }
            else {
                if (gMonth > 1) {
                    gMonth--;
                }
                else {
                    gMonth = 12;
                    gYear--;
                }
                if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
                    diffDays -= getDaysInGregorianMonth(gMonth, gYear);
                }
                else {
                    gDay = getDaysInGregorianMonth(gMonth, gYear) - diffDays + 1;
                    diffDays = 0;
                }
            }
        }
    }
    return new Date(gYear, gMonth - 1, gDay);
}
/**
 * @param {?} numerals
 * @return {?}
 */
function hebrewNumerals(numerals) {
    if (!numerals) {
        return '';
    }
    /** @type {?} */
    var hArray0_9 = ['', '\u05d0', '\u05d1', '\u05d2', '\u05d3', '\u05d4', '\u05d5', '\u05d6', '\u05d7', '\u05d8'];
    /** @type {?} */
    var hArray10_19 = [
        '\u05d9', '\u05d9\u05d0', '\u05d9\u05d1', '\u05d9\u05d2', '\u05d9\u05d3', '\u05d8\u05d5', '\u05d8\u05d6',
        '\u05d9\u05d6', '\u05d9\u05d7', '\u05d9\u05d8'
    ];
    /** @type {?} */
    var hArray20_90 = ['', '', '\u05db', '\u05dc', '\u05de', '\u05e0', '\u05e1', '\u05e2', '\u05e4', '\u05e6'];
    /** @type {?} */
    var hArray100_900 = [
        '', '\u05e7', '\u05e8', '\u05e9', '\u05ea', '\u05ea\u05e7', '\u05ea\u05e8', '\u05ea\u05e9', '\u05ea\u05ea',
        '\u05ea\u05ea\u05e7'
    ];
    /** @type {?} */
    var hArray1000_9000 = [
        '', '\u05d0', '\u05d1', '\u05d1\u05d0', '\u05d1\u05d1', '\u05d4', '\u05d4\u05d0', '\u05d4\u05d1',
        '\u05d4\u05d1\u05d0', '\u05d4\u05d1\u05d1'
    ];
    /** @type {?} */
    var geresh = '\u05f3';
    /** @type {?} */
    var gershaim = '\u05f4';
    /** @type {?} */
    var mem = 0;
    /** @type {?} */
    var result = [];
    /** @type {?} */
    var step = 0;
    while (numerals > 0) {
        /** @type {?} */
        var m = numerals % 10;
        if (step === 0) {
            mem = m;
        }
        else if (step === 1) {
            if (m !== 1) {
                result.unshift(hArray20_90[m], hArray0_9[mem]);
            }
            else {
                result.unshift(hArray10_19[mem]);
            }
        }
        else if (step === 2) {
            result.unshift(hArray100_900[m]);
        }
        else {
            if (m !== 5) {
                result.unshift(hArray1000_9000[m], geresh, ' ');
            }
            break;
        }
        numerals = Math.floor(numerals / 10);
        if (step === 0 && numerals === 0) {
            result.unshift(hArray0_9[m]);
        }
        step++;
    }
    result = result.join('').split('');
    if (result.length === 1) {
        result.push(geresh);
    }
    else if (result.length > 1) {
        result.splice(result.length - 1, 0, gershaim);
    }
    return result.join('');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@since 3.2.0
 */
var NgbCalendarHebrew = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbCalendarHebrew, _super);
    function NgbCalendarHebrew() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    NgbCalendarHebrew.prototype.getDaysPerWeek = /**
     * @return {?}
     */
    function () { return 7; };
    /**
     * @param {?=} year
     * @return {?}
     */
    NgbCalendarHebrew.prototype.getMonths = /**
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        if (year && isHebrewLeapYear(year)) {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        }
        else {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        }
    };
    /**
     * @return {?}
     */
    NgbCalendarHebrew.prototype.getWeeksPerMonth = /**
     * @return {?}
     */
    function () { return 6; };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbCalendarHebrew.prototype.isValid = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var b = date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day);
        b = b && date.month > 0 && date.month <= (isHebrewLeapYear(date.year) ? 13 : 12);
        b = b && date.day > 0 && date.day <= getDaysInHebrewMonth(date.month, date.year);
        return b && !isNaN(toGregorian$1(date).getTime());
    };
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    NgbCalendarHebrew.prototype.getNext = /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        date = new NgbDate(date.year, date.month, date.day);
        switch (period) {
            case 'y':
                date.year += number;
                date.month = 1;
                date.day = 1;
                return date;
            case 'm':
                date = setHebrewMonth(date, number);
                date.day = 1;
                return date;
            case 'd':
                return setHebrewDay(date, number);
            default:
                return date;
        }
    };
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    NgbCalendarHebrew.prototype.getPrev = /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbCalendarHebrew.prototype.getWeekday = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var day = toGregorian$1(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    /**
     * @param {?} week
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    NgbCalendarHebrew.prototype.getWeekNumber = /**
     * @param {?} week
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    function (week, firstDayOfWeek) {
        /** @type {?} */
        var date = week[week.length - 1];
        return Math.ceil(getDayNumberInHebrewYear(date) / 7);
    };
    /**
     * @return {?}
     */
    NgbCalendarHebrew.prototype.getToday = /**
     * @return {?}
     */
    function () { return fromGregorian$1(new Date()); };
    /**
     * @since 3.4.0
     */
    /**
     * \@since 3.4.0
     * @param {?} date
     * @return {?}
     */
    NgbCalendarHebrew.prototype.toGregorian = /**
     * \@since 3.4.0
     * @param {?} date
     * @return {?}
     */
    function (date) { return fromJSDate(toGregorian$1(date)); };
    /**
     * @since 3.4.0
     */
    /**
     * \@since 3.4.0
     * @param {?} date
     * @return {?}
     */
    NgbCalendarHebrew.prototype.fromGregorian = /**
     * \@since 3.4.0
     * @param {?} date
     * @return {?}
     */
    function (date) { return fromGregorian$1(toJSDate(date)); };
    NgbCalendarHebrew.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return NgbCalendarHebrew;
}(NgbCalendar));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var WEEKDAYS = ['שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];
/** @type {?} */
var MONTHS = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
/** @type {?} */
var MONTHS_LEAP = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א׳', 'אדר ב׳', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
/**
 * \@since 3.2.0
 */
var NgbDatepickerI18nHebrew = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbDatepickerI18nHebrew, _super);
    function NgbDatepickerI18nHebrew() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    NgbDatepickerI18nHebrew.prototype.getMonthShortName = /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    function (month, year) { return this.getMonthFullName(month, year); };
    /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    NgbDatepickerI18nHebrew.prototype.getMonthFullName = /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    function (month, year) {
        return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] : MONTHS[month - 1];
    };
    /**
     * @param {?} weekday
     * @return {?}
     */
    NgbDatepickerI18nHebrew.prototype.getWeekdayShortName = /**
     * @param {?} weekday
     * @return {?}
     */
    function (weekday) { return WEEKDAYS[weekday - 1]; };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDatepickerI18nHebrew.prototype.getDayAriaLabel = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return hebrewNumerals(date.day) + " " + this.getMonthFullName(date.month, date.year) + " " + hebrewNumerals(date.year);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDatepickerI18nHebrew.prototype.getDayNumerals = /**
     * @param {?} date
     * @return {?}
     */
    function (date) { return hebrewNumerals(date.day); };
    /**
     * @param {?} weekNumber
     * @return {?}
     */
    NgbDatepickerI18nHebrew.prototype.getWeekNumerals = /**
     * @param {?} weekNumber
     * @return {?}
     */
    function (weekNumber) { return hebrewNumerals(weekNumber); };
    /**
     * @param {?} year
     * @return {?}
     */
    NgbDatepickerI18nHebrew.prototype.getYearNumerals = /**
     * @param {?} year
     * @return {?}
     */
    function (year) { return hebrewNumerals(year); };
    NgbDatepickerI18nHebrew.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return NgbDatepickerI18nHebrew;
}(NgbDatepickerI18n));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * [`NgbDateAdapter`](#/components/datepicker/api#NgbDateAdapter) implementation that uses
 * native javascript dates as a user date model.
 */
var NgbDateNativeAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbDateNativeAdapter, _super);
    function NgbDateNativeAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a native `Date` to a `NgbDateStruct`.
     */
    /**
     * Converts a native `Date` to a `NgbDateStruct`.
     * @param {?} date
     * @return {?}
     */
    NgbDateNativeAdapter.prototype.fromModel = /**
     * Converts a native `Date` to a `NgbDateStruct`.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return (date instanceof Date && !isNaN(date.getTime())) ? this._fromNativeDate(date) : null;
    };
    /**
     * Converts a `NgbDateStruct` to a native `Date`.
     */
    /**
     * Converts a `NgbDateStruct` to a native `Date`.
     * @param {?} date
     * @return {?}
     */
    NgbDateNativeAdapter.prototype.toModel = /**
     * Converts a `NgbDateStruct` to a native `Date`.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) :
            null;
    };
    /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    NgbDateNativeAdapter.prototype._fromNativeDate = /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    };
    /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    NgbDateNativeAdapter.prototype._toNativeDate = /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var jsDate = new Date(date.year, date.month - 1, date.day, 12);
        // avoid 30 -> 1930 conversion
        jsDate.setFullYear(date.year);
        return jsDate;
    };
    NgbDateNativeAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return NgbDateNativeAdapter;
}(NgbDateAdapter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Same as [`NgbDateNativeAdapter`](#/components/datepicker/api#NgbDateNativeAdapter), but with UTC dates.
 *
 * \@since 3.2.0
 */
var NgbDateNativeUTCAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbDateNativeUTCAdapter, _super);
    function NgbDateNativeUTCAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    NgbDateNativeUTCAdapter.prototype._fromNativeDate = /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
    };
    /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    NgbDateNativeUTCAdapter.prototype._toNativeDate = /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day));
        // avoid 30 -> 1930 conversion
        jsDate.setUTCFullYear(date.year);
        return jsDate;
    };
    NgbDateNativeUTCAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return NgbDateNativeUTCAdapter;
}(NgbDateNativeAdapter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbDatepickerModule = /** @class */ (function () {
    function NgbDatepickerModule() {
    }
    NgbDatepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        NgbDatepicker, NgbDatepickerMonthView, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerDayView,
                        NgbInputDatepicker
                    ],
                    exports: [NgbDatepicker, NgbInputDatepicker],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                    entryComponents: [NgbDatepicker]
                },] }
    ];
    return NgbDatepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configuration service for the [`NgbDropdown`](#/components/dropdown/api#NgbDropdown) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */
var NgbDropdownConfig = /** @class */ (function () {
    function NgbDropdownConfig() {
        this.autoClose = true;
        this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
    }
    NgbDropdownConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbDropdownConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbDropdownConfig_Factory() { return new NgbDropdownConfig(); }, token: NgbDropdownConfig, providedIn: "root" });
    return NgbDropdownConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbNavbar = /** @class */ (function () {
    function NgbNavbar() {
    }
    NgbNavbar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '.navbar' },] }
    ];
    return NgbNavbar;
}());
/**
 * A directive you should put on a dropdown item to enable keyboard navigation.
 * Arrow keys will move focus between items marked with this directive.
 *
 * \@since 4.1.0
 */
var NgbDropdownItem = /** @class */ (function () {
    function NgbDropdownItem(elementRef) {
        this.elementRef = elementRef;
        this._disabled = false;
    }
    Object.defineProperty(NgbDropdownItem.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = (/** @type {?} */ (value)) === '' || value === true; // accept an empty attribute as true
        },
        enumerable: true,
        configurable: true
    });
    NgbDropdownItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbDropdownItem]', host: { 'class': 'dropdown-item', '[class.disabled]': 'disabled' } },] }
    ];
    /** @nocollapse */
    NgbDropdownItem.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NgbDropdownItem.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbDropdownItem;
}());
/**
 * A directive that wraps dropdown menu content and dropdown items.
 */
var NgbDropdownMenu = /** @class */ (function () {
    function NgbDropdownMenu(dropdown) {
        this.dropdown = dropdown;
        this.placement = 'bottom';
        this.isOpen = false;
    }
    NgbDropdownMenu.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbDropdownMenu]',
                    host: {
                        '[class.dropdown-menu]': 'true',
                        '[class.show]': 'dropdown.isOpen()',
                        '[attr.x-placement]': 'placement',
                        '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
                        '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
                        '(keydown.Home)': 'dropdown.onKeyDown($event)',
                        '(keydown.End)': 'dropdown.onKeyDown($event)',
                        '(keydown.Enter)': 'dropdown.onKeyDown($event)',
                        '(keydown.Space)': 'dropdown.onKeyDown($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    NgbDropdownMenu.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                         * @return {?}
                         */
                        function () { return NgbDropdown; })),] }] }
    ]; };
    NgbDropdownMenu.propDecorators = {
        menuItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbDropdownItem,] }]
    };
    return NgbDropdownMenu;
}());
/**
 * A directive to mark an element to which dropdown menu will be anchored.
 *
 * This is a simple version of the `NgbDropdownToggle` directive.
 * It plays the same role, but doesn't listen to click events to toggle dropdown menu thus enabling support
 * for events other than click.
 *
 * \@since 1.1.0
 */
var NgbDropdownAnchor = /** @class */ (function () {
    function NgbDropdownAnchor(dropdown, _elementRef) {
        this.dropdown = dropdown;
        this._elementRef = _elementRef;
        this.anchorEl = _elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    NgbDropdownAnchor.prototype.getNativeElement = /**
     * @return {?}
     */
    function () { return this._elementRef.nativeElement; };
    NgbDropdownAnchor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbDropdownAnchor]',
                    host: { 'class': 'dropdown-toggle', 'aria-haspopup': 'true', '[attr.aria-expanded]': 'dropdown.isOpen()' }
                },] }
    ];
    /** @nocollapse */
    NgbDropdownAnchor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                         * @return {?}
                         */
                        function () { return NgbDropdown; })),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    return NgbDropdownAnchor;
}());
/**
 * A directive to mark an element that will toggle dropdown via the `click` event.
 *
 * You can also use `NgbDropdownAnchor` as an alternative.
 */
var NgbDropdownToggle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbDropdownToggle, _super);
    function NgbDropdownToggle(dropdown, elementRef) {
        return _super.call(this, dropdown, elementRef) || this;
    }
    NgbDropdownToggle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbDropdownToggle]',
                    host: {
                        'class': 'dropdown-toggle',
                        'aria-haspopup': 'true',
                        '[attr.aria-expanded]': 'dropdown.isOpen()',
                        '(click)': 'dropdown.toggle()',
                        '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
                        '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
                        '(keydown.Home)': 'dropdown.onKeyDown($event)',
                        '(keydown.End)': 'dropdown.onKeyDown($event)'
                    },
                    providers: [{ provide: NgbDropdownAnchor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return NgbDropdownToggle; })) }]
                },] }
    ];
    /** @nocollapse */
    NgbDropdownToggle.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                         * @return {?}
                         */
                        function () { return NgbDropdown; })),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    return NgbDropdownToggle;
}(NgbDropdownAnchor));
/**
 * A directive that provides contextual overlays for displaying lists of links and more.
 */
var NgbDropdown = /** @class */ (function () {
    function NgbDropdown(_changeDetector, config, _document, _ngZone, _elementRef, _renderer, ngbNavbar) {
        var _this = this;
        this._changeDetector = _changeDetector;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Defines whether or not the dropdown menu is opened initially.
         */
        this._open = false;
        /**
         * An event fired when the dropdown is opened or closed.
         *
         * The event payload is a `boolean`:
         * * `true` - the dropdown was opened
         * * `false` - the dropdown was closed
         */
        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.placement = config.placement;
        this.container = config.container;
        this.autoClose = config.autoClose;
        this.display = ngbNavbar ? 'static' : 'dynamic';
        this._zoneSubscription = _ngZone.onStable.subscribe((/**
         * @return {?}
         */
        function () { _this._positionMenu(); }));
    }
    /**
     * @return {?}
     */
    NgbDropdown.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._applyPlacementClasses();
            if (_this._open) {
                _this._setCloseHandlers();
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgbDropdown.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.container && this._open) {
            this._applyContainer(this.container);
        }
        if (changes.placement && !changes.placement.isFirstChange) {
            this._applyPlacementClasses();
        }
    };
    /**
     * Checks if the dropdown menu is open.
     */
    /**
     * Checks if the dropdown menu is open.
     * @return {?}
     */
    NgbDropdown.prototype.isOpen = /**
     * Checks if the dropdown menu is open.
     * @return {?}
     */
    function () { return this._open; };
    /**
     * Opens the dropdown menu.
     */
    /**
     * Opens the dropdown menu.
     * @return {?}
     */
    NgbDropdown.prototype.open = /**
     * Opens the dropdown menu.
     * @return {?}
     */
    function () {
        if (!this._open) {
            this._open = true;
            this._applyContainer(this.container);
            this.openChange.emit(true);
            this._setCloseHandlers();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgbDropdown.prototype._setCloseHandlers = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var anchor = this._anchor;
        ngbAutoClose(this._ngZone, this._document, this.autoClose, (/**
         * @return {?}
         */
        function () { return _this.close(); }), this._closed$, this._menu ? [this._menuElement.nativeElement] : [], anchor ? [anchor.getNativeElement()] : [], '.dropdown-item,.dropdown-divider');
    };
    /**
     * Closes the dropdown menu.
     */
    /**
     * Closes the dropdown menu.
     * @return {?}
     */
    NgbDropdown.prototype.close = /**
     * Closes the dropdown menu.
     * @return {?}
     */
    function () {
        if (this._open) {
            this._open = false;
            this._resetContainer();
            this._closed$.next();
            this.openChange.emit(false);
            this._changeDetector.markForCheck();
        }
    };
    /**
     * Toggles the dropdown menu.
     */
    /**
     * Toggles the dropdown menu.
     * @return {?}
     */
    NgbDropdown.prototype.toggle = /**
     * Toggles the dropdown menu.
     * @return {?}
     */
    function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * @return {?}
     */
    NgbDropdown.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._resetContainer();
        this._closed$.next();
        this._zoneSubscription.unsubscribe();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgbDropdown.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // tslint:disable-next-line:deprecation
        /** @type {?} */
        var key = event.which;
        /** @type {?} */
        var itemElements = this._getMenuElements();
        /** @type {?} */
        var position = -1;
        /** @type {?} */
        var isEventFromItems = false;
        /** @type {?} */
        var isEventFromToggle = this._isEventFromToggle(event);
        if (!isEventFromToggle && itemElements.length) {
            itemElements.forEach((/**
             * @param {?} itemElement
             * @param {?} index
             * @return {?}
             */
            function (itemElement, index) {
                if (itemElement.contains((/** @type {?} */ (event.target)))) {
                    isEventFromItems = true;
                }
                if (itemElement === _this._document.activeElement) {
                    position = index;
                }
            }));
        }
        // closing on Enter / Space
        if (key === Key.Space || key === Key.Enter) {
            if (isEventFromItems && (this.autoClose === true || this.autoClose === 'inside')) {
                this.close();
            }
            return;
        }
        // opening / navigating
        if (isEventFromToggle || isEventFromItems) {
            this.open();
            if (itemElements.length) {
                switch (key) {
                    case Key.ArrowDown:
                        position = Math.min(position + 1, itemElements.length - 1);
                        break;
                    case Key.ArrowUp:
                        if (this._isDropup() && position === -1) {
                            position = itemElements.length - 1;
                            break;
                        }
                        position = Math.max(position - 1, 0);
                        break;
                    case Key.Home:
                        position = 0;
                        break;
                    case Key.End:
                        position = itemElements.length - 1;
                        break;
                }
                itemElements[position].focus();
            }
            event.preventDefault();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgbDropdown.prototype._isDropup = /**
     * @private
     * @return {?}
     */
    function () { return this._elementRef.nativeElement.classList.contains('dropup'); };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NgbDropdown.prototype._isEventFromToggle = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this._anchor.getNativeElement().contains((/** @type {?} */ (event.target)));
    };
    /**
     * @private
     * @return {?}
     */
    NgbDropdown.prototype._getMenuElements = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var menu = this._menu;
        if (menu == null) {
            return [];
        }
        return menu.menuItems.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.disabled; })).map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.elementRef.nativeElement; }));
    };
    /**
     * @private
     * @return {?}
     */
    NgbDropdown.prototype._positionMenu = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var menu = this._menu;
        if (this.isOpen() && menu) {
            this._applyPlacementClasses(this.display === 'dynamic' ?
                positionElements(this._anchor.anchorEl, this._bodyContainer || this._menuElement.nativeElement, this.placement, this.container === 'body') :
                this._getFirstPlacement(this.placement));
        }
    };
    /**
     * @private
     * @param {?} placement
     * @return {?}
     */
    NgbDropdown.prototype._getFirstPlacement = /**
     * @private
     * @param {?} placement
     * @return {?}
     */
    function (placement) {
        return Array.isArray(placement) ? placement[0] : (/** @type {?} */ (placement.split(' ')[0]));
    };
    /**
     * @private
     * @return {?}
     */
    NgbDropdown.prototype._resetContainer = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var renderer = this._renderer;
        /** @type {?} */
        var menuElement = this._menuElement;
        if (menuElement) {
            /** @type {?} */
            var dropdownElement = this._elementRef.nativeElement;
            /** @type {?} */
            var dropdownMenuElement = menuElement.nativeElement;
            renderer.appendChild(dropdownElement, dropdownMenuElement);
            renderer.removeStyle(dropdownMenuElement, 'position');
            renderer.removeStyle(dropdownMenuElement, 'transform');
        }
        if (this._bodyContainer) {
            renderer.removeChild(this._document.body, this._bodyContainer);
            this._bodyContainer = null;
        }
    };
    /**
     * @private
     * @param {?=} container
     * @return {?}
     */
    NgbDropdown.prototype._applyContainer = /**
     * @private
     * @param {?=} container
     * @return {?}
     */
    function (container) {
        if (container === void 0) { container = null; }
        this._resetContainer();
        if (container === 'body') {
            /** @type {?} */
            var renderer = this._renderer;
            /** @type {?} */
            var dropdownMenuElement = this._menuElement.nativeElement;
            /** @type {?} */
            var bodyContainer = this._bodyContainer = this._bodyContainer || renderer.createElement('div');
            // Override some styles to have the positionning working
            renderer.setStyle(bodyContainer, 'position', 'absolute');
            renderer.setStyle(dropdownMenuElement, 'position', 'static');
            renderer.setStyle(bodyContainer, 'z-index', '1050');
            renderer.appendChild(bodyContainer, dropdownMenuElement);
            renderer.appendChild(this._document.body, bodyContainer);
        }
    };
    /**
     * @private
     * @param {?=} placement
     * @return {?}
     */
    NgbDropdown.prototype._applyPlacementClasses = /**
     * @private
     * @param {?=} placement
     * @return {?}
     */
    function (placement) {
        /** @type {?} */
        var menu = this._menu;
        if (menu) {
            if (!placement) {
                placement = this._getFirstPlacement(this.placement);
            }
            /** @type {?} */
            var renderer = this._renderer;
            /** @type {?} */
            var dropdownElement = this._elementRef.nativeElement;
            // remove the current placement classes
            renderer.removeClass(dropdownElement, 'dropup');
            renderer.removeClass(dropdownElement, 'dropdown');
            menu.placement = this.display === 'static' ? null : placement;
            /*
                  * apply the new placement
                  * in case of top use up-arrow or down-arrow otherwise
                  */
            /** @type {?} */
            var dropdownClass = placement.search('^top') !== -1 ? 'dropup' : 'dropdown';
            renderer.addClass(dropdownElement, dropdownClass);
            /** @type {?} */
            var bodyContainer = this._bodyContainer;
            if (bodyContainer) {
                renderer.removeClass(bodyContainer, 'dropup');
                renderer.removeClass(bodyContainer, 'dropdown');
                renderer.addClass(bodyContainer, dropdownClass);
            }
        }
    };
    NgbDropdown.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbDropdown]', exportAs: 'ngbDropdown', host: { '[class.show]': 'isOpen()' } },] }
    ];
    /** @nocollapse */
    NgbDropdown.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: NgbDropdownConfig },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: NgbNavbar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    NgbDropdown.propDecorators = {
        _menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbDropdownMenu, { static: false },] }],
        _menuElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbDropdownMenu, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false },] }],
        _anchor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbDropdownAnchor, { static: false },] }],
        autoClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        _open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['open',] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        openChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgbDropdown;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGB_DROPDOWN_DIRECTIVES = [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbNavbar];
var NgbDropdownModule = /** @class */ (function () {
    function NgbDropdownModule() {
    }
    NgbDropdownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES },] }
    ];
    return NgbDropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configuration service for the [`NgbModal`](#/components/modal/api#NgbModal) service.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all modals used in the application.
 *
 * \@since 3.1.0
 */
var NgbModalConfig = /** @class */ (function () {
    function NgbModalConfig() {
        this.backdrop = true;
        this.keyboard = true;
    }
    NgbModalConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbModalConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbModalConfig_Factory() { return new NgbModalConfig(); }, token: NgbModalConfig, providedIn: "root" });
    return NgbModalConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContentRef = /** @class */ (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());
/**
 * @template T
 */
var /**
 * @template T
 */
PopupService = /** @class */ (function () {
    function PopupService(_type, _injector, _viewContainerRef, _renderer, _componentFactoryResolver, _applicationRef) {
        this._type = _type;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._applicationRef = _applicationRef;
    }
    /**
     * @param {?=} content
     * @param {?=} context
     * @return {?}
     */
    PopupService.prototype.open = /**
     * @param {?=} content
     * @param {?=} context
     * @return {?}
     */
    function (content, context) {
        if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, context);
            this._windowRef = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(this._type), 0, this._injector, this._contentRef.nodes);
        }
        return this._windowRef;
    };
    /**
     * @return {?}
     */
    PopupService.prototype.close = /**
     * @return {?}
     */
    function () {
        if (this._windowRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
            this._windowRef = null;
            if (this._contentRef.viewRef) {
                this._applicationRef.detachView(this._contentRef.viewRef);
                this._contentRef.viewRef.destroy();
                this._contentRef = null;
            }
        }
    };
    /**
     * @private
     * @param {?} content
     * @param {?=} context
     * @return {?}
     */
    PopupService.prototype._getContentRef = /**
     * @private
     * @param {?} content
     * @param {?=} context
     * @return {?}
     */
    function (content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            /** @type {?} */
            var viewRef = content.createEmbeddedView(context);
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._renderer.createText("" + content)]]);
        }
    };
    return PopupService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var noop = (/**
 * @return {?}
 */
function () { });
/**
 * Utility to handle the scrollbar.
 *
 * It allows to compensate the lack of a vertical scrollbar by adding an
 * equivalent padding on the right of the body, and to remove this compensation.
 */
var ScrollBar = /** @class */ (function () {
    function ScrollBar(_document) {
        this._document = _document;
    }
    /**
     * Detects if a scrollbar is present and if yes, already compensates for its
     * removal by adding an equivalent padding on the right of the body.
     *
     * @return a callback used to revert the compensation (noop if there was none,
     * otherwise a function removing the padding)
     */
    /**
     * Detects if a scrollbar is present and if yes, already compensates for its
     * removal by adding an equivalent padding on the right of the body.
     *
     * @return {?} a callback used to revert the compensation (noop if there was none,
     * otherwise a function removing the padding)
     */
    ScrollBar.prototype.compensate = /**
     * Detects if a scrollbar is present and if yes, already compensates for its
     * removal by adding an equivalent padding on the right of the body.
     *
     * @return {?} a callback used to revert the compensation (noop if there was none,
     * otherwise a function removing the padding)
     */
    function () { return !this._isPresent() ? noop : this._adjustBody(this._getWidth()); };
    /**
     * Adds a padding of the given width on the right of the body.
     *
     * @return a callback used to revert the padding to its previous value
     */
    /**
     * Adds a padding of the given width on the right of the body.
     *
     * @private
     * @param {?} width
     * @return {?} a callback used to revert the padding to its previous value
     */
    ScrollBar.prototype._adjustBody = /**
     * Adds a padding of the given width on the right of the body.
     *
     * @private
     * @param {?} width
     * @return {?} a callback used to revert the padding to its previous value
     */
    function (width) {
        /** @type {?} */
        var body = this._document.body;
        /** @type {?} */
        var userSetPadding = body.style.paddingRight;
        /** @type {?} */
        var paddingAmount = parseFloat(window.getComputedStyle(body)['padding-right']);
        body.style['padding-right'] = paddingAmount + width + "px";
        return (/**
         * @return {?}
         */
        function () { return body.style['padding-right'] = userSetPadding; });
    };
    /**
     * Tells whether a scrollbar is currently present on the body.
     *
     * @return true if scrollbar is present, false otherwise
     */
    /**
     * Tells whether a scrollbar is currently present on the body.
     *
     * @private
     * @return {?} true if scrollbar is present, false otherwise
     */
    ScrollBar.prototype._isPresent = /**
     * Tells whether a scrollbar is currently present on the body.
     *
     * @private
     * @return {?} true if scrollbar is present, false otherwise
     */
    function () {
        /** @type {?} */
        var rect = this._document.body.getBoundingClientRect();
        return rect.left + rect.right < window.innerWidth;
    };
    /**
     * Calculates and returns the width of a scrollbar.
     *
     * @return the width of a scrollbar on this page
     */
    /**
     * Calculates and returns the width of a scrollbar.
     *
     * @private
     * @return {?} the width of a scrollbar on this page
     */
    ScrollBar.prototype._getWidth = /**
     * Calculates and returns the width of a scrollbar.
     *
     * @private
     * @return {?} the width of a scrollbar on this page
     */
    function () {
        /** @type {?} */
        var measurer = this._document.createElement('div');
        measurer.className = 'modal-scrollbar-measure';
        /** @type {?} */
        var body = this._document.body;
        body.appendChild(measurer);
        /** @type {?} */
        var width = measurer.getBoundingClientRect().width - measurer.clientWidth;
        body.removeChild(measurer);
        return width;
    };
    ScrollBar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ScrollBar.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ ScrollBar.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ScrollBar_Factory() { return new ScrollBar(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: ScrollBar, providedIn: "root" });
    return ScrollBar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbModalBackdrop = /** @class */ (function () {
    function NgbModalBackdrop() {
    }
    NgbModalBackdrop.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-modal-backdrop',
                    template: '',
                    host: { '[class]': '"modal-backdrop fade show" + (backdropClass ? " " + backdropClass : "")', 'style': 'z-index: 1050' }
                }] }
    ];
    NgbModalBackdrop.propDecorators = {
        backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbModalBackdrop;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A reference to the currently opened (active) modal.
 *
 * Instances of this class can be injected into your component passed as modal content.
 * So you can `.close()` or `.dismiss()` the modal window from your component.
 */
var  /**
 * A reference to the currently opened (active) modal.
 *
 * Instances of this class can be injected into your component passed as modal content.
 * So you can `.close()` or `.dismiss()` the modal window from your component.
 */
NgbActiveModal = /** @class */ (function () {
    function NgbActiveModal() {
    }
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     */
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     * @param {?=} result
     * @return {?}
     */
    NgbActiveModal.prototype.close = /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     * @param {?=} result
     * @return {?}
     */
    function (result) { };
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     */
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     * @param {?=} reason
     * @return {?}
     */
    NgbActiveModal.prototype.dismiss = /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     * @param {?=} reason
     * @return {?}
     */
    function (reason) { };
    return NgbActiveModal;
}());
/**
 * A reference to the newly opened modal returned by the `NgbModal.open()` method.
 * @template T
 */
var  /**
 * A reference to the newly opened modal returned by the `NgbModal.open()` method.
 * @template T
 */
NgbModalRef = /** @class */ (function () {
    function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
        var _this = this;
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        this._beforeDismiss = _beforeDismiss;
        _windowCmptRef.instance.dismissEvent.subscribe((/**
         * @param {?} reason
         * @return {?}
         */
        function (reason) { _this.dismiss(reason); }));
        this.result = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        }));
        this.result.then(null, (/**
         * @return {?}
         */
        function () { }));
    }
    Object.defineProperty(NgbModalRef.prototype, "componentInstance", {
        /**
         * The instance of a component used for the modal content.
         *
         * When a `TemplateRef` is used as the content or when the modal is closed, will return `undefined`.
         */
        get: /**
         * The instance of a component used for the modal content.
         *
         * When a `TemplateRef` is used as the content or when the modal is closed, will return `undefined`.
         * @return {?}
         */
        function () {
            if (this._contentRef && this._contentRef.componentRef) {
                return this._contentRef.componentRef.instance;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     */
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     * @param {?=} result
     * @return {?}
     */
    NgbModalRef.prototype.close = /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    };
    /**
     * @private
     * @param {?=} reason
     * @return {?}
     */
    NgbModalRef.prototype._dismiss = /**
     * @private
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        this._reject(reason);
        this._removeModalElements();
    };
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     */
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     * @param {?=} reason
     * @return {?}
     */
    NgbModalRef.prototype.dismiss = /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        var _this = this;
        if (this._windowCmptRef) {
            if (!this._beforeDismiss) {
                this._dismiss(reason);
            }
            else {
                /** @type {?} */
                var dismiss = this._beforeDismiss();
                if (dismiss && dismiss.then) {
                    dismiss.then((/**
                     * @param {?} result
                     * @return {?}
                     */
                    function (result) {
                        if (result !== false) {
                            _this._dismiss(reason);
                        }
                    }), (/**
                     * @return {?}
                     */
                    function () { }));
                }
                else if (dismiss !== false) {
                    this._dismiss(reason);
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgbModalRef.prototype._removeModalElements = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var windowNativeEl = this._windowCmptRef.location.nativeElement;
        windowNativeEl.parentNode.removeChild(windowNativeEl);
        this._windowCmptRef.destroy();
        if (this._backdropCmptRef) {
            /** @type {?} */
            var backdropNativeEl = this._backdropCmptRef.location.nativeElement;
            backdropNativeEl.parentNode.removeChild(backdropNativeEl);
            this._backdropCmptRef.destroy();
        }
        if (this._contentRef && this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._windowCmptRef = null;
        this._backdropCmptRef = null;
        this._contentRef = null;
    };
    return NgbModalRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ModalDismissReasons = {
    BACKDROP_CLICK: 0,
    ESC: 1,
};
ModalDismissReasons[ModalDismissReasons.BACKDROP_CLICK] = 'BACKDROP_CLICK';
ModalDismissReasons[ModalDismissReasons.ESC] = 'ESC';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbModalWindow = /** @class */ (function () {
    function NgbModalWindow(_document, _elRef, zone) {
        var _this = this;
        this._document = _document;
        this._elRef = _elRef;
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this._elRef.nativeElement, 'keyup')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this.dismissEvent), 
            // tslint:disable-next-line:deprecation
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e.which === Key.Escape && _this.keyboard; })))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return requestAnimationFrame((/**
             * @return {?}
             */
            function () {
                if (!event.defaultPrevented) {
                    zone.run((/**
                     * @return {?}
                     */
                    function () { return _this.dismiss(ModalDismissReasons.ESC); }));
                }
            })); }));
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NgbModalWindow.prototype.backdropClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.backdrop === true && this._elRef.nativeElement === event.target) {
            this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
        }
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    NgbModalWindow.prototype.dismiss = /**
     * @param {?} reason
     * @return {?}
     */
    function (reason) { this.dismissEvent.emit(reason); };
    /**
     * @return {?}
     */
    NgbModalWindow.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this._elWithFocus = this._document.activeElement; };
    /**
     * @return {?}
     */
    NgbModalWindow.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (!this._elRef.nativeElement.contains(document.activeElement)) {
            /** @type {?} */
            var autoFocusable = (/** @type {?} */ (this._elRef.nativeElement.querySelector("[ngbAutofocus]")));
            /** @type {?} */
            var firstFocusable = getFocusableBoundaryElements(this._elRef.nativeElement)[0];
            /** @type {?} */
            var elementToFocus = autoFocusable || firstFocusable || this._elRef.nativeElement;
            elementToFocus.focus();
        }
    };
    /**
     * @return {?}
     */
    NgbModalWindow.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var body = this._document.body;
        /** @type {?} */
        var elWithFocus = this._elWithFocus;
        /** @type {?} */
        var elementToFocus;
        if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
            elementToFocus = elWithFocus;
        }
        else {
            elementToFocus = body;
        }
        elementToFocus.focus();
        this._elWithFocus = null;
    };
    NgbModalWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-modal-window',
                    host: {
                        '[class]': '"modal fade show d-block" + (windowClass ? " " + windowClass : "")',
                        'role': 'dialog',
                        'tabindex': '-1',
                        '(click)': 'backdropClick($event)',
                        '[attr.aria-modal]': 'true',
                        '[attr.aria-labelledby]': 'ariaLabelledBy',
                    },
                    template: "\n    <div [class]=\"'modal-dialog' + (size ? ' modal-' + size : '') + (centered ? ' modal-dialog-centered' : '') +\n     (scrollable ? ' modal-dialog-scrollable' : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    ",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["ngb-modal-window .component-host-scrollable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}"]
                }] }
    ];
    /** @nocollapse */
    NgbModalWindow.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    NgbModalWindow.propDecorators = {
        ariaLabelledBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        centered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        windowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dismissEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['dismiss',] }]
    };
    return NgbModalWindow;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbModalStack = /** @class */ (function () {
    function NgbModalStack(_applicationRef, _injector, _document, _scrollBar, _rendererFactory) {
        var _this = this;
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._document = _document;
        this._scrollBar = _scrollBar;
        this._rendererFactory = _rendererFactory;
        this._activeWindowCmptHasChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._ariaHiddenValues = new Map();
        this._backdropAttributes = ['backdropClass'];
        this._modalRefs = [];
        this._windowAttributes = ['ariaLabelledBy', 'backdrop', 'centered', 'keyboard', 'scrollable', 'size', 'windowClass'];
        this._windowCmpts = [];
        // Trap focus on active WindowCmpt
        this._activeWindowCmptHasChanged.subscribe((/**
         * @return {?}
         */
        function () {
            if (_this._windowCmpts.length) {
                /** @type {?} */
                var activeWindowCmpt = _this._windowCmpts[_this._windowCmpts.length - 1];
                ngbFocusTrap(activeWindowCmpt.location.nativeElement, _this._activeWindowCmptHasChanged);
                _this._revertAriaHidden();
                _this._setAriaHidden(activeWindowCmpt.location.nativeElement);
            }
        }));
    }
    /**
     * @param {?} moduleCFR
     * @param {?} contentInjector
     * @param {?} content
     * @param {?} options
     * @return {?}
     */
    NgbModalStack.prototype.open = /**
     * @param {?} moduleCFR
     * @param {?} contentInjector
     * @param {?} content
     * @param {?} options
     * @return {?}
     */
    function (moduleCFR, contentInjector, content, options) {
        var _this = this;
        /** @type {?} */
        var containerEl = isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
        /** @type {?} */
        var renderer = this._rendererFactory.createRenderer(null, null);
        /** @type {?} */
        var revertPaddingForScrollBar = this._scrollBar.compensate();
        /** @type {?} */
        var removeBodyClass = (/**
         * @return {?}
         */
        function () {
            if (!_this._modalRefs.length) {
                renderer.removeClass(_this._document.body, 'modal-open');
                _this._revertAriaHidden();
            }
        });
        if (!containerEl) {
            throw new Error("The specified modal container \"" + (options.container || 'body') + "\" was not found in the DOM.");
        }
        /** @type {?} */
        var activeModal = new NgbActiveModal();
        /** @type {?} */
        var contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal, options);
        /** @type {?} */
        var backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(moduleCFR, containerEl) : null;
        /** @type {?} */
        var windowCmptRef = this._attachWindowComponent(moduleCFR, containerEl, contentRef);
        /** @type {?} */
        var ngbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
        this._registerModalRef(ngbModalRef);
        this._registerWindowCmpt(windowCmptRef);
        ngbModalRef.result.then(revertPaddingForScrollBar, revertPaddingForScrollBar);
        ngbModalRef.result.then(removeBodyClass, removeBodyClass);
        activeModal.close = (/**
         * @param {?} result
         * @return {?}
         */
        function (result) { ngbModalRef.close(result); });
        activeModal.dismiss = (/**
         * @param {?} reason
         * @return {?}
         */
        function (reason) { ngbModalRef.dismiss(reason); });
        this._applyWindowOptions(windowCmptRef.instance, options);
        if (this._modalRefs.length === 1) {
            renderer.addClass(this._document.body, 'modal-open');
        }
        if (backdropCmptRef && backdropCmptRef.instance) {
            this._applyBackdropOptions(backdropCmptRef.instance, options);
        }
        return ngbModalRef;
    };
    /**
     * @param {?=} reason
     * @return {?}
     */
    NgbModalStack.prototype.dismissAll = /**
     * @param {?=} reason
     * @return {?}
     */
    function (reason) { this._modalRefs.forEach((/**
     * @param {?} ngbModalRef
     * @return {?}
     */
    function (ngbModalRef) { return ngbModalRef.dismiss(reason); })); };
    /**
     * @return {?}
     */
    NgbModalStack.prototype.hasOpenModals = /**
     * @return {?}
     */
    function () { return this._modalRefs.length > 0; };
    /**
     * @private
     * @param {?} moduleCFR
     * @param {?} containerEl
     * @return {?}
     */
    NgbModalStack.prototype._attachBackdrop = /**
     * @private
     * @param {?} moduleCFR
     * @param {?} containerEl
     * @return {?}
     */
    function (moduleCFR, containerEl) {
        /** @type {?} */
        var backdropFactory = moduleCFR.resolveComponentFactory(NgbModalBackdrop);
        /** @type {?} */
        var backdropCmptRef = backdropFactory.create(this._injector);
        this._applicationRef.attachView(backdropCmptRef.hostView);
        containerEl.appendChild(backdropCmptRef.location.nativeElement);
        return backdropCmptRef;
    };
    /**
     * @private
     * @param {?} moduleCFR
     * @param {?} containerEl
     * @param {?} contentRef
     * @return {?}
     */
    NgbModalStack.prototype._attachWindowComponent = /**
     * @private
     * @param {?} moduleCFR
     * @param {?} containerEl
     * @param {?} contentRef
     * @return {?}
     */
    function (moduleCFR, containerEl, contentRef) {
        /** @type {?} */
        var windowFactory = moduleCFR.resolveComponentFactory(NgbModalWindow);
        /** @type {?} */
        var windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);
        this._applicationRef.attachView(windowCmptRef.hostView);
        containerEl.appendChild(windowCmptRef.location.nativeElement);
        return windowCmptRef;
    };
    /**
     * @private
     * @param {?} windowInstance
     * @param {?} options
     * @return {?}
     */
    NgbModalStack.prototype._applyWindowOptions = /**
     * @private
     * @param {?} windowInstance
     * @param {?} options
     * @return {?}
     */
    function (windowInstance, options) {
        this._windowAttributes.forEach((/**
         * @param {?} optionName
         * @return {?}
         */
        function (optionName) {
            if (isDefined(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        }));
    };
    /**
     * @private
     * @param {?} backdropInstance
     * @param {?} options
     * @return {?}
     */
    NgbModalStack.prototype._applyBackdropOptions = /**
     * @private
     * @param {?} backdropInstance
     * @param {?} options
     * @return {?}
     */
    function (backdropInstance, options) {
        this._backdropAttributes.forEach((/**
         * @param {?} optionName
         * @return {?}
         */
        function (optionName) {
            if (isDefined(options[optionName])) {
                backdropInstance[optionName] = options[optionName];
            }
        }));
    };
    /**
     * @private
     * @param {?} moduleCFR
     * @param {?} contentInjector
     * @param {?} content
     * @param {?} activeModal
     * @param {?} options
     * @return {?}
     */
    NgbModalStack.prototype._getContentRef = /**
     * @private
     * @param {?} moduleCFR
     * @param {?} contentInjector
     * @param {?} content
     * @param {?} activeModal
     * @param {?} options
     * @return {?}
     */
    function (moduleCFR, contentInjector, content, activeModal, options) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            return this._createFromTemplateRef(content, activeModal);
        }
        else if (isString(content)) {
            return this._createFromString(content);
        }
        else {
            return this._createFromComponent(moduleCFR, contentInjector, content, activeModal, options);
        }
    };
    /**
     * @private
     * @param {?} content
     * @param {?} activeModal
     * @return {?}
     */
    NgbModalStack.prototype._createFromTemplateRef = /**
     * @private
     * @param {?} content
     * @param {?} activeModal
     * @return {?}
     */
    function (content, activeModal) {
        /** @type {?} */
        var context = {
            $implicit: activeModal,
            close: /**
             * @param {?} result
             * @return {?}
             */
            function (result) { activeModal.close(result); },
            dismiss: /**
             * @param {?} reason
             * @return {?}
             */
            function (reason) { activeModal.dismiss(reason); }
        };
        /** @type {?} */
        var viewRef = content.createEmbeddedView(context);
        this._applicationRef.attachView(viewRef);
        return new ContentRef([viewRef.rootNodes], viewRef);
    };
    /**
     * @private
     * @param {?} content
     * @return {?}
     */
    NgbModalStack.prototype._createFromString = /**
     * @private
     * @param {?} content
     * @return {?}
     */
    function (content) {
        /** @type {?} */
        var component = this._document.createTextNode("" + content);
        return new ContentRef([[component]]);
    };
    /**
     * @private
     * @param {?} moduleCFR
     * @param {?} contentInjector
     * @param {?} content
     * @param {?} context
     * @param {?} options
     * @return {?}
     */
    NgbModalStack.prototype._createFromComponent = /**
     * @private
     * @param {?} moduleCFR
     * @param {?} contentInjector
     * @param {?} content
     * @param {?} context
     * @param {?} options
     * @return {?}
     */
    function (moduleCFR, contentInjector, content, context, options) {
        /** @type {?} */
        var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
        /** @type {?} */
        var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({ providers: [{ provide: NgbActiveModal, useValue: context }], parent: contentInjector });
        /** @type {?} */
        var componentRef = contentCmptFactory.create(modalContentInjector);
        /** @type {?} */
        var componentNativeEl = componentRef.location.nativeElement;
        if (options.scrollable) {
            ((/** @type {?} */ (componentNativeEl))).classList.add('component-host-scrollable');
        }
        this._applicationRef.attachView(componentRef.hostView);
        // FIXME: we should here get rid of the component nativeElement
        // and use `[Array.from(componentNativeEl.childNodes)]` instead and remove the above CSS class.
        return new ContentRef([[componentNativeEl]], componentRef.hostView, componentRef);
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    NgbModalStack.prototype._setAriaHidden = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        /** @type {?} */
        var parent = element.parentElement;
        if (parent && element !== this._document.body) {
            Array.from(parent.children).forEach((/**
             * @param {?} sibling
             * @return {?}
             */
            function (sibling) {
                if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
                    _this._ariaHiddenValues.set(sibling, sibling.getAttribute('aria-hidden'));
                    sibling.setAttribute('aria-hidden', 'true');
                }
            }));
            this._setAriaHidden(parent);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgbModalStack.prototype._revertAriaHidden = /**
     * @private
     * @return {?}
     */
    function () {
        this._ariaHiddenValues.forEach((/**
         * @param {?} value
         * @param {?} element
         * @return {?}
         */
        function (value, element) {
            if (value) {
                element.setAttribute('aria-hidden', value);
            }
            else {
                element.removeAttribute('aria-hidden');
            }
        }));
        this._ariaHiddenValues.clear();
    };
    /**
     * @private
     * @param {?} ngbModalRef
     * @return {?}
     */
    NgbModalStack.prototype._registerModalRef = /**
     * @private
     * @param {?} ngbModalRef
     * @return {?}
     */
    function (ngbModalRef) {
        var _this = this;
        /** @type {?} */
        var unregisterModalRef = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var index = _this._modalRefs.indexOf(ngbModalRef);
            if (index > -1) {
                _this._modalRefs.splice(index, 1);
            }
        });
        this._modalRefs.push(ngbModalRef);
        ngbModalRef.result.then(unregisterModalRef, unregisterModalRef);
    };
    /**
     * @private
     * @param {?} ngbWindowCmpt
     * @return {?}
     */
    NgbModalStack.prototype._registerWindowCmpt = /**
     * @private
     * @param {?} ngbWindowCmpt
     * @return {?}
     */
    function (ngbWindowCmpt) {
        var _this = this;
        this._windowCmpts.push(ngbWindowCmpt);
        this._activeWindowCmptHasChanged.next();
        ngbWindowCmpt.onDestroy((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var index = _this._windowCmpts.indexOf(ngbWindowCmpt);
            if (index > -1) {
                _this._windowCmpts.splice(index, 1);
                _this._activeWindowCmptHasChanged.next();
            }
        }));
    };
    NgbModalStack.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    NgbModalStack.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: ScrollBar },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }
    ]; };
    /** @nocollapse */ NgbModalStack.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbModalStack_Factory() { return new NgbModalStack(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ScrollBar), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"])); }, token: NgbModalStack, providedIn: "root" });
    return NgbModalStack;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for opening modal windows.
 *
 * Creating a modal is straightforward: create a component or a template and pass it as an argument to
 * the `.open()` method.
 */
var NgbModal = /** @class */ (function () {
    function NgbModal(_moduleCFR, _injector, _modalStack, _config) {
        this._moduleCFR = _moduleCFR;
        this._injector = _injector;
        this._modalStack = _modalStack;
        this._config = _config;
    }
    /**
     * Opens a new modal window with the specified content and supplied options.
     *
     * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
     * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
     * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
     *
     * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
     */
    /**
     * Opens a new modal window with the specified content and supplied options.
     *
     * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
     * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
     * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
     *
     * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
     * @template T
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NgbModal.prototype.open = /**
     * Opens a new modal window with the specified content and supplied options.
     *
     * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
     * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
     * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
     *
     * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
     * @template T
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var combinedOptions = Object.assign({}, this._config, options);
        return this._modalStack.open(this._moduleCFR, this._injector, content, combinedOptions);
    };
    /**
     * Dismisses all currently displayed modal windows with the supplied reason.
     *
     * @since 3.1.0
     */
    /**
     * Dismisses all currently displayed modal windows with the supplied reason.
     *
     * \@since 3.1.0
     * @param {?=} reason
     * @return {?}
     */
    NgbModal.prototype.dismissAll = /**
     * Dismisses all currently displayed modal windows with the supplied reason.
     *
     * \@since 3.1.0
     * @param {?=} reason
     * @return {?}
     */
    function (reason) { this._modalStack.dismissAll(reason); };
    /**
     * Indicates if there are currently any open modal windows in the application.
     *
     * @since 3.3.0
     */
    /**
     * Indicates if there are currently any open modal windows in the application.
     *
     * \@since 3.3.0
     * @return {?}
     */
    NgbModal.prototype.hasOpenModals = /**
     * Indicates if there are currently any open modal windows in the application.
     *
     * \@since 3.3.0
     * @return {?}
     */
    function () { return this._modalStack.hasOpenModals(); };
    NgbModal.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    NgbModal.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: NgbModalStack },
        { type: NgbModalConfig }
    ]; };
    /** @nocollapse */ NgbModal.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbModal_Factory() { return new NgbModal(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NgbModalStack), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NgbModalConfig)); }, token: NgbModal, providedIn: "root" });
    return NgbModal;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbModalModule = /** @class */ (function () {
    function NgbModalModule() {
    }
    NgbModalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [NgbModalBackdrop, NgbModalWindow],
                    entryComponents: [NgbModalBackdrop, NgbModalWindow],
                    providers: [NgbModal]
                },] }
    ];
    return NgbModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configuration service for the [`NgbPagination`](#/components/pagination/api#NgbPagination) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
var NgbPaginationConfig = /** @class */ (function () {
    function NgbPaginationConfig() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = 10;
        this.rotate = false;
    }
    NgbPaginationConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbPaginationConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbPaginationConfig_Factory() { return new NgbPaginationConfig(); }, token: NgbPaginationConfig, providedIn: "root" });
    return NgbPaginationConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A directive to match the 'ellipsis' link template
 *
 * \@since 4.1.0
 */
var NgbPaginationEllipsis = /** @class */ (function () {
    function NgbPaginationEllipsis(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPaginationEllipsis.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPaginationEllipsis]' },] }
    ];
    /** @nocollapse */
    NgbPaginationEllipsis.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgbPaginationEllipsis;
}());
/**
 * A directive to match the 'first' link template
 *
 * \@since 4.1.0
 */
var NgbPaginationFirst = /** @class */ (function () {
    function NgbPaginationFirst(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPaginationFirst.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPaginationFirst]' },] }
    ];
    /** @nocollapse */
    NgbPaginationFirst.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgbPaginationFirst;
}());
/**
 * A directive to match the 'last' link template
 *
 * \@since 4.1.0
 */
var NgbPaginationLast = /** @class */ (function () {
    function NgbPaginationLast(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPaginationLast.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPaginationLast]' },] }
    ];
    /** @nocollapse */
    NgbPaginationLast.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgbPaginationLast;
}());
/**
 * A directive to match the 'next' link template
 *
 * \@since 4.1.0
 */
var NgbPaginationNext = /** @class */ (function () {
    function NgbPaginationNext(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPaginationNext.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPaginationNext]' },] }
    ];
    /** @nocollapse */
    NgbPaginationNext.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgbPaginationNext;
}());
/**
 * A directive to match the page 'number' link template
 *
 * \@since 4.1.0
 */
var NgbPaginationNumber = /** @class */ (function () {
    function NgbPaginationNumber(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPaginationNumber.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPaginationNumber]' },] }
    ];
    /** @nocollapse */
    NgbPaginationNumber.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgbPaginationNumber;
}());
/**
 * A directive to match the 'previous' link template
 *
 * \@since 4.1.0
 */
var NgbPaginationPrevious = /** @class */ (function () {
    function NgbPaginationPrevious(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPaginationPrevious.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPaginationPrevious]' },] }
    ];
    /** @nocollapse */
    NgbPaginationPrevious.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgbPaginationPrevious;
}());
/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
var NgbPagination = /** @class */ (function () {
    function NgbPagination(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
         *  The current page.
         *
         *  Page numbers start with `1`.
         */
        this.page = 1;
        /**
         *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
         *
         *  Event payload is the number of the newly selected page.
         *
         *  Page numbers start with `1`.
         */
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    /**
     * @return {?}
     */
    NgbPagination.prototype.hasPrevious = /**
     * @return {?}
     */
    function () { return this.page > 1; };
    /**
     * @return {?}
     */
    NgbPagination.prototype.hasNext = /**
     * @return {?}
     */
    function () { return this.page < this.pageCount; };
    /**
     * @return {?}
     */
    NgbPagination.prototype.nextDisabled = /**
     * @return {?}
     */
    function () { return !this.hasNext() || this.disabled; };
    /**
     * @return {?}
     */
    NgbPagination.prototype.previousDisabled = /**
     * @return {?}
     */
    function () { return !this.hasPrevious() || this.disabled; };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    NgbPagination.prototype.selectPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) { this._updatePages(pageNumber); };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgbPagination.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { this._updatePages(this.page); };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    NgbPagination.prototype.isEllipsis = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) { return pageNumber === -1; };
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    /**
     * Appends ellipses and first/last page number to the displayed pages
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    NgbPagination.prototype._applyEllipses = /**
     * Appends ellipses and first/last page number to the displayed pages
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        if (this.ellipses) {
            if (start > 0) {
                // The first page will always be included. If the displayed range
                // starts after the third page, then add ellipsis. But if the range
                // starts on the third page, then add the second page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (start > 2) {
                    this.pages.unshift(-1);
                }
                else if (start === 2) {
                    this.pages.unshift(2);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                // The last page will always be included. If the displayed range
                // ends before the third-last page, then add ellipsis. But if the range
                // ends on third-last page, then add the second-last page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (end < (this.pageCount - 2)) {
                    this.pages.push(-1);
                }
                else if (end === (this.pageCount - 2)) {
                    this.pages.push(this.pageCount - 1);
                }
                this.pages.push(this.pageCount);
            }
        }
    };
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     * @private
     * @return {?}
     */
    NgbPagination.prototype._applyRotation = /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var start = 0;
        /** @type {?} */
        var end = this.pageCount;
        /** @type {?} */
        var leftOffset = Math.floor(this.maxSize / 2);
        /** @type {?} */
        var rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    };
    /**
     * Paginates page numbers based on maxSize items per page.
     */
    /**
     * Paginates page numbers based on maxSize items per page.
     * @private
     * @return {?}
     */
    NgbPagination.prototype._applyPagination = /**
     * Paginates page numbers based on maxSize items per page.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var page = Math.ceil(this.page / this.maxSize) - 1;
        /** @type {?} */
        var start = page * this.maxSize;
        /** @type {?} */
        var end = start + this.maxSize;
        return [start, end];
    };
    /**
     * @private
     * @param {?} newPageNo
     * @return {?}
     */
    NgbPagination.prototype._setPageInRange = /**
     * @private
     * @param {?} newPageNo
     * @return {?}
     */
    function (newPageNo) {
        /** @type {?} */
        var prevPageNo = this.page;
        this.page = getValueInRange(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
            this.pageChange.emit(this.page);
        }
    };
    /**
     * @private
     * @param {?} newPage
     * @return {?}
     */
    NgbPagination.prototype._updatePages = /**
     * @private
     * @param {?} newPage
     * @return {?}
     */
    function (newPage) {
        var _a, _b;
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!isNumber(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (var i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            /** @type {?} */
            var start = 0;
            /** @type {?} */
            var end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                _a = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(this._applyRotation(), 2), start = _a[0], end = _a[1];
            }
            else {
                _b = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(this._applyPagination(), 2), start = _b[0], end = _b[1];
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
    };
    NgbPagination.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-pagination',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: { 'role': 'navigation' },
                    template: "\n    <ng-template #first><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.first\">&laquo;&laquo;</span></ng-template>\n    <ng-template #previous><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.previous\">&laquo;</span></ng-template>\n    <ng-template #next><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.next\">&raquo;</span></ng-template>\n    <ng-template #last><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.last\">&raquo;&raquo;</span></ng-template>\n    <ng-template #ellipsis>...</ng-template>\n    <ng-template #defaultNumber let-page let-currentPage=\"currentPage\">\n      {{ page }}\n      <span *ngIf=\"page === currentPage\" class=\"sr-only\">(current)</span>\n    </ng-template>\n    <ul [class]=\"'pagination' + (size ? ' pagination-' + size : '')\">\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\"\n        [class.disabled]=\"previousDisabled()\">\n        <a aria-label=\"First\" i18n-aria-label=\"@@ngb.pagination.first-aria\" class=\"page-link\" href\n          (click)=\"selectPage(1); $event.preventDefault()\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplFirst?.templateRef || first\"\n                       [ngTemplateOutletContext]=\"{disabled: previousDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n\n      <li *ngIf=\"directionLinks\" class=\"page-item\"\n        [class.disabled]=\"previousDisabled()\">\n        <a aria-label=\"Previous\" i18n-aria-label=\"@@ngb.pagination.previous-aria\" class=\"page-link\" href\n          (click)=\"selectPage(page-1); $event.preventDefault()\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplPrevious?.templateRef || previous\"\n                       [ngTemplateOutletContext]=\"{disabled: previousDisabled()}\"></ng-template>\n        </a>\n      </li>\n      <li *ngFor=\"let pageNumber of pages\" class=\"page-item\" [class.active]=\"pageNumber === page\"\n        [class.disabled]=\"isEllipsis(pageNumber) || disabled\">\n        <a *ngIf=\"isEllipsis(pageNumber)\" class=\"page-link\">\n          <ng-template [ngTemplateOutlet]=\"tplEllipsis?.templateRef || ellipsis\"\n                       [ngTemplateOutletContext]=\"{disabled: true, currentPage: page}\"></ng-template>\n        </a>\n        <a *ngIf=\"!isEllipsis(pageNumber)\" class=\"page-link\" href (click)=\"selectPage(pageNumber); $event.preventDefault()\">\n          <ng-template [ngTemplateOutlet]=\"tplNumber?.templateRef || defaultNumber\"\n                       [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pageNumber, currentPage: page}\"></ng-template>\n        </a>\n      </li>\n      <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"nextDisabled()\">\n        <a aria-label=\"Next\" i18n-aria-label=\"@@ngb.pagination.next-aria\" class=\"page-link\" href\n          (click)=\"selectPage(page+1); $event.preventDefault()\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplNext?.templateRef || next\"\n                       [ngTemplateOutletContext]=\"{disabled: nextDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"nextDisabled()\">\n        <a aria-label=\"Last\" i18n-aria-label=\"@@ngb.pagination.last-aria\" class=\"page-link\" href\n          (click)=\"selectPage(pageCount); $event.preventDefault()\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplLast?.templateRef || last\"\n                       [ngTemplateOutletContext]=\"{disabled: nextDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n    </ul>\n  "
                }] }
    ];
    /** @nocollapse */
    NgbPagination.ctorParameters = function () { return [
        { type: NgbPaginationConfig }
    ]; };
    NgbPagination.propDecorators = {
        tplEllipsis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbPaginationEllipsis, { static: false },] }],
        tplFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbPaginationFirst, { static: false },] }],
        tplLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbPaginationLast, { static: false },] }],
        tplNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbPaginationNext, { static: false },] }],
        tplNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbPaginationNumber, { static: false },] }],
        tplPrevious: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbPaginationPrevious, { static: false },] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ellipses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        collectionSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbPagination;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DIRECTIVES = [
    NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber,
    NgbPaginationPrevious
];
var NgbPaginationModule = /** @class */ (function () {
    function NgbPaginationModule() {
    }
    NgbPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: DIRECTIVES, exports: DIRECTIVES, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] }
    ];
    return NgbPaginationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Trigger = /** @class */ (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close;
        if (!close) {
            this.close = open;
        }
    }
    /**
     * @return {?}
     */
    Trigger.prototype.isManual = /**
     * @return {?}
     */
    function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
/** @type {?} */
var DEFAULT_ALIASES = {
    'hover': ['mouseenter', 'mouseleave'],
    'focus': ['focusin', 'focusout'],
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    /** @type {?} */
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    /** @type {?} */
    var parsedTriggers = trimmedTriggers.split(/\s+/).map((/**
     * @param {?} trigger
     * @return {?}
     */
    function (trigger) { return trigger.split(':'); })).map((/**
     * @param {?} triggerPair
     * @return {?}
     */
    function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    }));
    /** @type {?} */
    var manualTriggers = parsedTriggers.filter((/**
     * @param {?} triggerPair
     * @return {?}
     */
    function (triggerPair) { return triggerPair.isManual(); }));
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} nativeElement
 * @param {?} triggers
 * @param {?} isOpenedFn
 * @return {?}
 */
function observeTriggers(renderer, nativeElement, triggers, isOpenedFn) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]((/**
     * @param {?} subscriber
     * @return {?}
     */
    function (subscriber) {
        /** @type {?} */
        var listeners = [];
        /** @type {?} */
        var openFn = (/**
         * @return {?}
         */
        function () { return subscriber.next(true); });
        /** @type {?} */
        var closeFn = (/**
         * @return {?}
         */
        function () { return subscriber.next(false); });
        /** @type {?} */
        var toggleFn = (/**
         * @return {?}
         */
        function () { return subscriber.next(!isOpenedFn()); });
        triggers.forEach((/**
         * @param {?} trigger
         * @return {?}
         */
        function (trigger) {
            if (trigger.open === trigger.close) {
                listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
            }
            else {
                listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
            }
        }));
        return (/**
         * @return {?}
         */
        function () { listeners.forEach((/**
         * @param {?} unsubscribeFn
         * @return {?}
         */
        function (unsubscribeFn) { return unsubscribeFn(); })); });
    }));
}
/** @type {?} */
var delayOrNoop = (/**
 * @template T
 * @param {?} time
 * @return {?}
 */
function (time) { return time > 0 ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(time) : (/**
 * @param {?} a
 * @return {?}
 */
function (a) { return a; }); });
/**
 * @param {?} openDelay
 * @param {?} closeDelay
 * @param {?} isOpenedFn
 * @return {?}
 */
function triggerDelay(openDelay, closeDelay, isOpenedFn) {
    return (/**
     * @param {?} input$
     * @return {?}
     */
    function (input$) {
        /** @type {?} */
        var pending = null;
        /** @type {?} */
        var filteredInput$ = input$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} open
         * @return {?}
         */
        function (open) { return ({ open: open }); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var currentlyOpen = isOpenedFn();
            if (currentlyOpen !== event.open && (!pending || pending.open === currentlyOpen)) {
                pending = event;
                return true;
            }
            if (pending && pending.open !== event.open) {
                pending = null;
            }
            return false;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        /** @type {?} */
        var delayedOpen$ = filteredInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.open; })), delayOrNoop(openDelay));
        /** @type {?} */
        var delayedClose$ = filteredInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return !event.open; })), delayOrNoop(closeDelay));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(delayedOpen$, delayedClose$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event === pending) {
                pending = null;
                return event.open !== isOpenedFn();
            }
            return false;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.open; })));
    });
}
/**
 * @param {?} renderer
 * @param {?} nativeElement
 * @param {?} triggers
 * @param {?} isOpenedFn
 * @param {?} openFn
 * @param {?} closeFn
 * @param {?=} openDelay
 * @param {?=} closeDelay
 * @return {?}
 */
function listenToTriggers(renderer, nativeElement, triggers, isOpenedFn, openFn, closeFn, openDelay, closeDelay) {
    if (openDelay === void 0) { openDelay = 0; }
    if (closeDelay === void 0) { closeDelay = 0; }
    /** @type {?} */
    var parsedTriggers = parseTriggers(triggers);
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return (/**
         * @return {?}
         */
        function () { });
    }
    /** @type {?} */
    var subscription = observeTriggers(renderer, nativeElement, parsedTriggers, isOpenedFn)
        .pipe(triggerDelay(openDelay, closeDelay, isOpenedFn))
        .subscribe((/**
     * @param {?} open
     * @return {?}
     */
    function (open) { return (open ? openFn() : closeFn()); }));
    return (/**
     * @return {?}
     */
    function () { return subscription.unsubscribe(); });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configuration service for the [`NgbPopover`](#/components/popover/api#NgbPopover) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
var NgbPopoverConfig = /** @class */ (function () {
    function NgbPopoverConfig() {
        this.autoClose = true;
        this.placement = 'auto';
        this.triggers = 'click';
        this.disablePopover = false;
        this.openDelay = 0;
        this.closeDelay = 0;
    }
    NgbPopoverConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbPopoverConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbPopoverConfig_Factory() { return new NgbPopoverConfig(); }, token: NgbPopoverConfig, providedIn: "root" });
    return NgbPopoverConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var nextId$3 = 0;
var NgbPopoverWindow = /** @class */ (function () {
    function NgbPopoverWindow() {
    }
    /**
     * @return {?}
     */
    NgbPopoverWindow.prototype.isTitleTemplate = /**
     * @return {?}
     */
    function () { return this.title instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]; };
    NgbPopoverWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-popover-window',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    host: { '[class]': '"popover" + (popoverClass ? " " + popoverClass : "")', 'role': 'tooltip', '[id]': 'id' },
                    template: "\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-header\" *ngIf=\"title != null\">\n      <ng-template #simpleTitle>{{title}}</ng-template>\n      <ng-template [ngTemplateOutlet]=\"isTitleTemplate() ? title : simpleTitle\" [ngTemplateOutletContext]=\"context\"></ng-template>\n    </h3>\n    <div class=\"popover-body\"><ng-content></ng-content></div>",
                    styles: ["ngb-popover-window.bs-popover-bottom>.arrow,ngb-popover-window.bs-popover-top>.arrow{left:50%;margin-left:-.5rem}ngb-popover-window.bs-popover-bottom-left>.arrow,ngb-popover-window.bs-popover-top-left>.arrow{left:2em}ngb-popover-window.bs-popover-bottom-right>.arrow,ngb-popover-window.bs-popover-top-right>.arrow{left:auto;right:2em}ngb-popover-window.bs-popover-left>.arrow,ngb-popover-window.bs-popover-right>.arrow{top:50%;margin-top:-.5rem}ngb-popover-window.bs-popover-left-top>.arrow,ngb-popover-window.bs-popover-right-top>.arrow{top:.7em}ngb-popover-window.bs-popover-left-bottom>.arrow,ngb-popover-window.bs-popover-right-bottom>.arrow{top:auto;bottom:.7em}"]
                }] }
    ];
    NgbPopoverWindow.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        popoverClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        context: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbPopoverWindow;
}());
/**
 * A lightweight and extensible directive for fancy popover creation.
 */
var NgbPopover = /** @class */ (function () {
    function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, _ngZone, _document, _changeDetector, _applicationRef) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this._document = _document;
        this._changeDetector = _changeDetector;
        this._applicationRef = _applicationRef;
        /**
         * An event emitted when the popover is shown. Contains no payload.
         */
        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted when the popover is hidden. Contains no payload.
         */
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._ngbPopoverWindowId = "ngb-popover-" + nextId$3++;
        this.autoClose = config.autoClose;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disablePopover = config.disablePopover;
        this.popoverClass = config.popoverClass;
        this.openDelay = config.openDelay;
        this.closeDelay = config.closeDelay;
        this._popupService = new PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver, _applicationRef);
        this._zoneSubscription = _ngZone.onStable.subscribe((/**
         * @return {?}
         */
        function () {
            if (_this._windowRef) {
                positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body', 'bs-popover');
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    NgbPopover.prototype._isDisabled = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.disablePopover) {
            return true;
        }
        if (!this.ngbPopover && !this.popoverTitle) {
            return true;
        }
        return false;
    };
    /**
     * Opens the popover.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the popover template when it is created.
     */
    /**
     * Opens the popover.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the popover template when it is created.
     * @param {?=} context
     * @return {?}
     */
    NgbPopover.prototype.open = /**
     * Opens the popover.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the popover template when it is created.
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        var _this = this;
        if (!this._windowRef && !this._isDisabled()) {
            this._windowRef = this._popupService.open(this.ngbPopover, context);
            this._windowRef.instance.title = this.popoverTitle;
            this._windowRef.instance.context = context;
            this._windowRef.instance.popoverClass = this.popoverClass;
            this._windowRef.instance.id = this._ngbPopoverWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
            if (this.container === 'body') {
                this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // We need to detect changes, because we don't know where .open() might be called from.
            // Ex. opening popover from one of lifecycle hooks that run after the CD
            // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception
            this._windowRef.changeDetectorRef.detectChanges();
            // We need to mark for check, because popover won't work inside the OnPush component.
            // Ex. when we use expression like `{{ popover.isOpen() : 'opened' : 'closed' }}`
            // inside the template of an OnPush component and we change the popover from
            // open -> closed, the expression in question won't be updated unless we explicitly
            // mark the parent component to be checked.
            this._windowRef.changeDetectorRef.markForCheck();
            ngbAutoClose(this._ngZone, this._document, this.autoClose, (/**
             * @return {?}
             */
            function () { return _this.close(); }), this.hidden, [this._windowRef.location.nativeElement]);
            this.shown.emit();
        }
    };
    /**
     * Closes the popover.
     *
     * This is considered to be a "manual" triggering of the popover.
     */
    /**
     * Closes the popover.
     *
     * This is considered to be a "manual" triggering of the popover.
     * @return {?}
     */
    NgbPopover.prototype.close = /**
     * Closes the popover.
     *
     * This is considered to be a "manual" triggering of the popover.
     * @return {?}
     */
    function () {
        if (this._windowRef) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
            this._changeDetector.markForCheck();
        }
    };
    /**
     * Toggles the popover.
     *
     * This is considered to be a "manual" triggering of the popover.
     */
    /**
     * Toggles the popover.
     *
     * This is considered to be a "manual" triggering of the popover.
     * @return {?}
     */
    NgbPopover.prototype.toggle = /**
     * Toggles the popover.
     *
     * This is considered to be a "manual" triggering of the popover.
     * @return {?}
     */
    function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns `true`, if the popover is currently shown.
     */
    /**
     * Returns `true`, if the popover is currently shown.
     * @return {?}
     */
    NgbPopover.prototype.isOpen = /**
     * Returns `true`, if the popover is currently shown.
     * @return {?}
     */
    function () { return this._windowRef != null; };
    /**
     * @return {?}
     */
    NgbPopover.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    NgbPopover.prototype.ngOnChanges = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var ngbPopover = _a.ngbPopover, popoverTitle = _a.popoverTitle, disablePopover = _a.disablePopover, popoverClass = _a.popoverClass;
        if (popoverClass && this.isOpen()) {
            this._windowRef.instance.popoverClass = popoverClass.currentValue;
        }
        // close popover if title and content become empty, or disablePopover set to true
        if ((ngbPopover || popoverTitle || disablePopover) && this._isDisabled()) {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    NgbPopover.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.close();
        // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
        // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
        this._zoneSubscription.unsubscribe();
    };
    NgbPopover.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbPopover]', exportAs: 'ngbPopover' },] }
    ];
    /** @nocollapse */
    NgbPopover.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: NgbPopoverConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }
    ]; };
    NgbPopover.propDecorators = {
        autoClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ngbPopover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        popoverTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disablePopover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        popoverClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        openDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closeDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        shown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgbPopover;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbPopoverModule = /** @class */ (function () {
    function NgbPopoverModule() {
    }
    NgbPopoverModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [NgbPopover, NgbPopoverWindow],
                    exports: [NgbPopover],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [NgbPopoverWindow]
                },] }
    ];
    return NgbPopoverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configuration service for the [`NgbProgressbar`](#/components/progressbar/api#NgbProgressbar) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the progress bars used in the application.
 */
var NgbProgressbarConfig = /** @class */ (function () {
    function NgbProgressbarConfig() {
        this.max = 100;
        this.animated = false;
        this.striped = false;
        this.showValue = false;
    }
    NgbProgressbarConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbProgressbarConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbProgressbarConfig_Factory() { return new NgbProgressbarConfig(); }, token: NgbProgressbarConfig, providedIn: "root" });
    return NgbProgressbarConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A directive that provides feedback on the progress of a workflow or an action.
 */
var NgbProgressbar = /** @class */ (function () {
    function NgbProgressbar(config) {
        /**
         * The current value for the progress bar.
         *
         * Should be in the `[0, max]` range.
         */
        this.value = 0;
        this.max = config.max;
        this.animated = config.animated;
        this.striped = config.striped;
        this.type = config.type;
        this.showValue = config.showValue;
        this.height = config.height;
    }
    /**
     * @return {?}
     */
    NgbProgressbar.prototype.getValue = /**
     * @return {?}
     */
    function () { return getValueInRange(this.value, this.max); };
    /**
     * @return {?}
     */
    NgbProgressbar.prototype.getPercentValue = /**
     * @return {?}
     */
    function () { return 100 * this.getValue() / this.max; };
    NgbProgressbar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-progressbar',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div class=\"progress\" [style.height]=\"height\">\n      <div class=\"progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?\n    ' progress-bar-striped' : ''}}\" role=\"progressbar\" [style.width.%]=\"getPercentValue()\"\n    [attr.aria-valuenow]=\"getValue()\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\">\n        <span *ngIf=\"showValue\" i18n=\"@@ngb.progressbar.value\">{{getPercentValue()}}%</span><ng-content></ng-content>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NgbProgressbar.ctorParameters = function () { return [
        { type: NgbProgressbarConfig }
    ]; };
    NgbProgressbar.propDecorators = {
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        striped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbProgressbar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbProgressbarModule = /** @class */ (function () {
    function NgbProgressbarModule() {
    }
    NgbProgressbarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [NgbProgressbar], exports: [NgbProgressbar], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] }
    ];
    return NgbProgressbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configuration service for the [`NgbRating`](#/components/rating/api#NgbRating) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ratings used in the application.
 */
var NgbRatingConfig = /** @class */ (function () {
    function NgbRatingConfig() {
        this.max = 10;
        this.readonly = false;
        this.resettable = false;
    }
    NgbRatingConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbRatingConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbRatingConfig_Factory() { return new NgbRatingConfig(); }, token: NgbRatingConfig, providedIn: "root" });
    return NgbRatingConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGB_RATING_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return NgbRating; })),
    multi: true
};
/**
 * A directive that helps visualising and interacting with a star rating bar.
 */
var NgbRating = /** @class */ (function () {
    function NgbRating(config, _changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.contexts = [];
        this.disabled = false;
        /**
         * An event emitted when the user is hovering over a given rating.
         *
         * Event payload equals to the rating being hovered over.
         */
        this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted when the user stops hovering over a given rating.
         *
         * Event payload equals to the rating of the last item being hovered over.
         */
        this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted when the user selects a new rating.
         *
         * Event payload equals to the newly selected rating.
         */
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.max = config.max;
        this.readonly = config.readonly;
    }
    /**
     * @return {?}
     */
    NgbRating.prototype.ariaValueText = /**
     * @return {?}
     */
    function () { return this.nextRate + " out of " + this.max; };
    /**
     * @param {?} value
     * @return {?}
     */
    NgbRating.prototype.enter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.readonly && !this.disabled) {
            this._updateState(value);
        }
        this.hover.emit(value);
    };
    /**
     * @return {?}
     */
    NgbRating.prototype.handleBlur = /**
     * @return {?}
     */
    function () { this.onTouched(); };
    /**
     * @param {?} value
     * @return {?}
     */
    NgbRating.prototype.handleClick = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { this.update(this.resettable && this.rate === value ? 0 : value); };
    /**
     * @param {?} event
     * @return {?}
     */
    NgbRating.prototype.handleKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // tslint:disable-next-line:deprecation
        switch (event.which) {
            case Key.ArrowDown:
            case Key.ArrowLeft:
                this.update(this.rate - 1);
                break;
            case Key.ArrowUp:
            case Key.ArrowRight:
                this.update(this.rate + 1);
                break;
            case Key.Home:
                this.update(0);
                break;
            case Key.End:
                this.update(this.max);
                break;
            default:
                return;
        }
        // note 'return' in default case
        event.preventDefault();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgbRating.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['rate']) {
            this.update(this.rate);
        }
    };
    /**
     * @return {?}
     */
    NgbRating.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.contexts = Array.from({ length: this.max }, (/**
         * @param {?} v
         * @param {?} k
         * @return {?}
         */
        function (v, k) { return ({ fill: 0, index: k }); }));
        this._updateState(this.rate);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbRating.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbRating.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @return {?}
     */
    NgbRating.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.leave.emit(this.nextRate);
        this._updateState(this.rate);
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgbRating.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) { this.disabled = isDisabled; };
    /**
     * @param {?} value
     * @param {?=} internalChange
     * @return {?}
     */
    NgbRating.prototype.update = /**
     * @param {?} value
     * @param {?=} internalChange
     * @return {?}
     */
    function (value, internalChange) {
        if (internalChange === void 0) { internalChange = true; }
        /** @type {?} */
        var newRate = getValueInRange(value, this.max, 0);
        if (!this.readonly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
        }
        this._updateState(this.rate);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgbRating.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.update(value, false);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NgbRating.prototype._getFillValue = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var diff = this.nextRate - index;
        if (diff >= 1) {
            return 100;
        }
        if (diff < 1 && diff > 0) {
            return parseInt((diff * 100).toFixed(2), 10);
        }
        return 0;
    };
    /**
     * @private
     * @param {?} nextValue
     * @return {?}
     */
    NgbRating.prototype._updateState = /**
     * @private
     * @param {?} nextValue
     * @return {?}
     */
    function (nextValue) {
        var _this = this;
        this.nextRate = nextValue;
        this.contexts.forEach((/**
         * @param {?} context
         * @param {?} index
         * @return {?}
         */
        function (context, index) { return context.fill = _this._getFillValue(index); }));
    };
    NgbRating.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-rating',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        'class': 'd-inline-flex',
                        'tabindex': '0',
                        'role': 'slider',
                        'aria-valuemin': '0',
                        '[attr.aria-valuemax]': 'max',
                        '[attr.aria-valuenow]': 'nextRate',
                        '[attr.aria-valuetext]': 'ariaValueText()',
                        '[attr.aria-disabled]': 'readonly ? true : null',
                        '(blur)': 'handleBlur()',
                        '(keydown)': 'handleKeyDown($event)',
                        '(mouseleave)': 'reset()'
                    },
                    template: "\n    <ng-template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>\n    <ng-template ngFor [ngForOf]=\"contexts\" let-index=\"index\">\n      <span class=\"sr-only\">({{ index < nextRate ? '*' : ' ' }})</span>\n      <span (mouseenter)=\"enter(index + 1)\" (click)=\"handleClick(index + 1)\" [style.cursor]=\"readonly || disabled ? 'default' : 'pointer'\">\n        <ng-template [ngTemplateOutlet]=\"starTemplate || starTemplateFromContent || t\" [ngTemplateOutletContext]=\"contexts[index]\">\n        </ng-template>\n      </span>\n    </ng-template>\n  ",
                    providers: [NGB_RATING_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    NgbRating.ctorParameters = function () { return [
        { type: NgbRatingConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    NgbRating.propDecorators = {
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resettable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        starTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        starTemplateFromContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: false },] }],
        hover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        leave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        rateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgbRating;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbRatingModule = /** @class */ (function () {
    function NgbRatingModule() {
    }
    NgbRatingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [NgbRating], exports: [NgbRating], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] }
    ];
    return NgbRatingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configuration service for the [`NgbTabset`](#/components/tabset/api#NgbTabset) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tabsets used in the application.
 */
var NgbTabsetConfig = /** @class */ (function () {
    function NgbTabsetConfig() {
        this.justify = 'start';
        this.orientation = 'horizontal';
        this.type = 'tabs';
    }
    NgbTabsetConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbTabsetConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbTabsetConfig_Factory() { return new NgbTabsetConfig(); }, token: NgbTabsetConfig, providedIn: "root" });
    return NgbTabsetConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var nextId$4 = 0;
/**
 * A directive to wrap tab titles that need to contain HTML markup or other directives.
 *
 * Alternatively you could use the `NgbTab.title` input for string titles.
 */
var NgbTabTitle = /** @class */ (function () {
    function NgbTabTitle(templateRef) {
        this.templateRef = templateRef;
    }
    NgbTabTitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbTabTitle]' },] }
    ];
    /** @nocollapse */
    NgbTabTitle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgbTabTitle;
}());
/**
 * A directive to wrap content to be displayed in a tab.
 */
var NgbTabContent = /** @class */ (function () {
    function NgbTabContent(templateRef) {
        this.templateRef = templateRef;
    }
    NgbTabContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbTabContent]' },] }
    ];
    /** @nocollapse */
    NgbTabContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgbTabContent;
}());
/**
 * A directive representing an individual tab.
 */
var NgbTab = /** @class */ (function () {
    function NgbTab() {
        /**
         * The tab identifier.
         *
         * Must be unique for the entire document for proper accessibility support.
         */
        this.id = "ngb-tab-" + nextId$4++;
        /**
         * If `true`, the current tab is disabled and can't be toggled.
         */
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    NgbTab.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.titleTpl = this.titleTpls.first;
        this.contentTpl = this.contentTpls.first;
    };
    NgbTab.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngb-tab' },] }
    ];
    NgbTab.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        titleTpls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbTabTitle, { descendants: false },] }],
        contentTpls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbTabContent, { descendants: false },] }]
    };
    return NgbTab;
}());
/**
 * A component that makes it easy to create tabbed interface.
 */
var NgbTabset = /** @class */ (function () {
    function NgbTabset(config) {
        /**
         * If `true`, non-visible tabs content will be removed from DOM. Otherwise it will just be hidden.
         */
        this.destroyOnHide = true;
        /**
         * A tab change event emitted right before the tab change happens.
         *
         * See [`NgbTabChangeEvent`](#/components/tabset/api#NgbTabChangeEvent) for payload details.
         */
        this.tabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = config.type;
        this.justify = config.justify;
        this.orientation = config.orientation;
    }
    Object.defineProperty(NgbTabset.prototype, "justify", {
        /**
         * The horizontal alignment of the tabs with flexbox utilities.
         */
        set: /**
         * The horizontal alignment of the tabs with flexbox utilities.
         * @param {?} className
         * @return {?}
         */
        function (className) {
            if (className === 'fill' || className === 'justified') {
                this.justifyClass = "nav-" + className;
            }
            else {
                this.justifyClass = "justify-content-" + className;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects the tab with the given id and shows its associated content panel.
     *
     * Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or
     * hidden depending on the `destroyOnHide` value.
     */
    /**
     * Selects the tab with the given id and shows its associated content panel.
     *
     * Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or
     * hidden depending on the `destroyOnHide` value.
     * @param {?} tabId
     * @return {?}
     */
    NgbTabset.prototype.select = /**
     * Selects the tab with the given id and shows its associated content panel.
     *
     * Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or
     * hidden depending on the `destroyOnHide` value.
     * @param {?} tabId
     * @return {?}
     */
    function (tabId) {
        /** @type {?} */
        var selectedTab = this._getTabById(tabId);
        if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
            /** @type {?} */
            var defaultPrevented_1 = false;
            this.tabChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: (/**
                 * @return {?}
                 */
                function () { defaultPrevented_1 = true; }) });
            if (!defaultPrevented_1) {
                this.activeId = selectedTab.id;
            }
        }
    };
    /**
     * @return {?}
     */
    NgbTabset.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        // auto-correct activeId that might have been set incorrectly as input
        /** @type {?} */
        var activeTab = this._getTabById(this.activeId);
        this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
    };
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    NgbTabset.prototype._getTabById = /**
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var tabsWithId = this.tabs.filter((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) { return tab.id === id; }));
        return tabsWithId.length ? tabsWithId[0] : null;
    };
    NgbTabset.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-tabset',
                    exportAs: 'ngbTabset',
                    template: "\n    <ul [class]=\"'nav nav-' + type + (orientation == 'horizontal'?  ' ' + justifyClass : ' flex-column')\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"select(tab.id); $event.preventDefault()\" role=\"tab\" [attr.tabindex]=\"(tab.disabled ? '-1': undefined)\"\n          [attr.aria-controls]=\"(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)\"\n          [attr.aria-selected]=\"tab.id === activeId\" [attr.aria-disabled]=\"tab.disabled\">\n          {{tab.title}}<ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n        <div\n          class=\"tab-pane {{tab.id === activeId ? 'active' : null}}\"\n          *ngIf=\"!destroyOnHide || tab.id === activeId\"\n          role=\"tabpanel\"\n          [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\">\n          <ng-template [ngTemplateOutlet]=\"tab.contentTpl?.templateRef\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NgbTabset.ctorParameters = function () { return [
        { type: NgbTabsetConfig }
    ]; };
    NgbTabset.propDecorators = {
        tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbTab,] }],
        activeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        destroyOnHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        justify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tabChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgbTabset;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGB_TABSET_DIRECTIVES = [NgbTabset, NgbTab, NgbTabContent, NgbTabTitle];
var NgbTabsetModule = /** @class */ (function () {
    function NgbTabsetModule() {
    }
    NgbTabsetModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] }
    ];
    return NgbTabsetModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbTime = /** @class */ (function () {
    function NgbTime(hour, minute, second) {
        this.hour = toInteger(hour);
        this.minute = toInteger(minute);
        this.second = toInteger(second);
    }
    /**
     * @param {?=} step
     * @return {?}
     */
    NgbTime.prototype.changeHour = /**
     * @param {?=} step
     * @return {?}
     */
    function (step) {
        if (step === void 0) { step = 1; }
        this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NgbTime.prototype.updateHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        if (isNumber(hour)) {
            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
        }
        else {
            this.hour = NaN;
        }
    };
    /**
     * @param {?=} step
     * @return {?}
     */
    NgbTime.prototype.changeMinute = /**
     * @param {?=} step
     * @return {?}
     */
    function (step) {
        if (step === void 0) { step = 1; }
        this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NgbTime.prototype.updateMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        if (isNumber(minute)) {
            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
            this.changeHour(Math.floor(minute / 60));
        }
        else {
            this.minute = NaN;
        }
    };
    /**
     * @param {?=} step
     * @return {?}
     */
    NgbTime.prototype.changeSecond = /**
     * @param {?=} step
     * @return {?}
     */
    function (step) {
        if (step === void 0) { step = 1; }
        this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
    };
    /**
     * @param {?} second
     * @return {?}
     */
    NgbTime.prototype.updateSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        if (isNumber(second)) {
            this.second = second < 0 ? 60 + second % 60 : second % 60;
            this.changeMinute(Math.floor(second / 60));
        }
        else {
            this.second = NaN;
        }
    };
    /**
     * @param {?=} checkSecs
     * @return {?}
     */
    NgbTime.prototype.isValid = /**
     * @param {?=} checkSecs
     * @return {?}
     */
    function (checkSecs) {
        if (checkSecs === void 0) { checkSecs = true; }
        return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
    };
    /**
     * @return {?}
     */
    NgbTime.prototype.toString = /**
     * @return {?}
     */
    function () { return (this.hour || 0) + ":" + (this.minute || 0) + ":" + (this.second || 0); };
    return NgbTime;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configuration service for the [`NgbTimepicker`](#/components/timepicker/api#NgbTimepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the timepickers used in the application.
 */
var NgbTimepickerConfig = /** @class */ (function () {
    function NgbTimepickerConfig() {
        this.meridian = false;
        this.spinners = true;
        this.seconds = false;
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.disabled = false;
        this.readonlyInputs = false;
        this.size = 'medium';
    }
    NgbTimepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbTimepickerConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbTimepickerConfig_Factory() { return new NgbTimepickerConfig(); }, token: NgbTimepickerConfig, providedIn: "root" });
    return NgbTimepickerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
    return new NgbTimeStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal timepicker `NgbTimeStruct` model and
 * any provided user time model `T`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding timepicker to a form control,
 * ex. `[(ngModel)]="userTimeModel"`. Here `userTimeModel` can be of any type.
 *
 * The default timepicker implementation assumes we use `NgbTimeStruct` as a user model.
 *
 * See the [custom time adapter demo](#/components/timepicker/examples#adapter) for an example.
 *
 * \@since 2.2.0
 * @abstract
 * @template T
 */
var NgbTimeAdapter = /** @class */ (function () {
    function NgbTimeAdapter() {
    }
    NgbTimeAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY },] }
    ];
    /** @nocollapse */ NgbTimeAdapter.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY, token: NgbTimeAdapter, providedIn: "root" });
    return NgbTimeAdapter;
}());
var NgbTimeStructAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbTimeStructAdapter, _super);
    function NgbTimeStructAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     */
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     * @param {?} time
     * @return {?}
     */
    NgbTimeStructAdapter.prototype.fromModel = /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     * @param {?} time
     * @return {?}
     */
    function (time) {
        return (time && isInteger(time.hour) && isInteger(time.minute)) ?
            { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
            null;
    };
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     */
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     * @param {?} time
     * @return {?}
     */
    NgbTimeStructAdapter.prototype.toModel = /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     * @param {?} time
     * @return {?}
     */
    function (time) {
        return (time && isInteger(time.hour) && isInteger(time.minute)) ?
            { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
            null;
    };
    NgbTimeStructAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return NgbTimeStructAdapter;
}(NgbTimeAdapter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} locale
 * @return {?}
 */
function NGB_TIMEPICKER_I18N_FACTORY(locale) {
    return new NgbTimepickerI18nDefault(locale);
}
/**
 * Type of the service supplying day periods (for example, 'AM' and 'PM') to NgbTimepicker component.
 * The default implementation of this service honors the Angular locale, and uses the registered locale data,
 * as explained in the Angular i18n guide.
 * @abstract
 */
var NgbTimepickerI18n = /** @class */ (function () {
    function NgbTimepickerI18n() {
    }
    NgbTimepickerI18n.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root', useFactory: NGB_TIMEPICKER_I18N_FACTORY, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]] },] }
    ];
    /** @nocollapse */ NgbTimepickerI18n.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbTimepickerI18n_Factory() { return NGB_TIMEPICKER_I18N_FACTORY(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); }, token: NgbTimepickerI18n, providedIn: "root" });
    return NgbTimepickerI18n;
}());
var NgbTimepickerI18nDefault = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgbTimepickerI18nDefault, _super);
    function NgbTimepickerI18nDefault(locale) {
        var _this = _super.call(this) || this;
        _this._periods = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleDayPeriods"])(locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Narrow);
        return _this;
    }
    /**
     * @return {?}
     */
    NgbTimepickerI18nDefault.prototype.getMorningPeriod = /**
     * @return {?}
     */
    function () { return this._periods[0]; };
    /**
     * @return {?}
     */
    NgbTimepickerI18nDefault.prototype.getAfternoonPeriod = /**
     * @return {?}
     */
    function () { return this._periods[1]; };
    NgbTimepickerI18nDefault.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    NgbTimepickerI18nDefault.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
    ]; };
    return NgbTimepickerI18nDefault;
}(NgbTimepickerI18n));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGB_TIMEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return NgbTimepicker; })),
    multi: true
};
/**
 * A directive that helps with wth picking hours, minutes and seconds.
 */
var NgbTimepicker = /** @class */ (function () {
    function NgbTimepicker(_config, _ngbTimeAdapter, _cd, i18n) {
        this._config = _config;
        this._ngbTimeAdapter = _ngbTimeAdapter;
        this._cd = _cd;
        this.i18n = i18n;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.meridian = _config.meridian;
        this.spinners = _config.spinners;
        this.seconds = _config.seconds;
        this.hourStep = _config.hourStep;
        this.minuteStep = _config.minuteStep;
        this.secondStep = _config.secondStep;
        this.disabled = _config.disabled;
        this.readonlyInputs = _config.readonlyInputs;
        this.size = _config.size;
    }
    Object.defineProperty(NgbTimepicker.prototype, "hourStep", {
        get: /**
         * @return {?}
         */
        function () { return this._hourStep; },
        /**
         * The number of hours to add/subtract when clicking hour spinners.
         */
        set: /**
         * The number of hours to add/subtract when clicking hour spinners.
         * @param {?} step
         * @return {?}
         */
        function (step) {
            this._hourStep = isInteger(step) ? step : this._config.hourStep;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbTimepicker.prototype, "minuteStep", {
        get: /**
         * @return {?}
         */
        function () { return this._minuteStep; },
        /**
         * The number of minutes to add/subtract when clicking minute spinners.
         */
        set: /**
         * The number of minutes to add/subtract when clicking minute spinners.
         * @param {?} step
         * @return {?}
         */
        function (step) {
            this._minuteStep = isInteger(step) ? step : this._config.minuteStep;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbTimepicker.prototype, "secondStep", {
        get: /**
         * @return {?}
         */
        function () { return this._secondStep; },
        /**
         * The number of seconds to add/subtract when clicking second spinners.
         */
        set: /**
         * The number of seconds to add/subtract when clicking second spinners.
         * @param {?} step
         * @return {?}
         */
        function (step) {
            this._secondStep = isInteger(step) ? step : this._config.secondStep;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NgbTimepicker.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var structValue = this._ngbTimeAdapter.fromModel(value);
        this.model = structValue ? new NgbTime(structValue.hour, structValue.minute, structValue.second) : new NgbTime();
        if (!this.seconds && (!structValue || !isNumber(structValue.second))) {
            this.model.second = 0;
        }
        this._cd.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbTimepicker.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbTimepicker.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgbTimepicker.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) { this.disabled = isDisabled; };
    /**
     * @param {?} step
     * @return {?}
     */
    NgbTimepicker.prototype.changeHour = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        this.model.changeHour(step);
        this.propagateModelChange();
    };
    /**
     * @param {?} step
     * @return {?}
     */
    NgbTimepicker.prototype.changeMinute = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        this.model.changeMinute(step);
        this.propagateModelChange();
    };
    /**
     * @param {?} step
     * @return {?}
     */
    NgbTimepicker.prototype.changeSecond = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        this.model.changeSecond(step);
        this.propagateModelChange();
    };
    /**
     * @param {?} newVal
     * @return {?}
     */
    NgbTimepicker.prototype.updateHour = /**
     * @param {?} newVal
     * @return {?}
     */
    function (newVal) {
        /** @type {?} */
        var isPM = this.model.hour >= 12;
        /** @type {?} */
        var enteredHour = toInteger(newVal);
        if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
            this.model.updateHour(enteredHour + 12);
        }
        else {
            this.model.updateHour(enteredHour);
        }
        this.propagateModelChange();
    };
    /**
     * @param {?} newVal
     * @return {?}
     */
    NgbTimepicker.prototype.updateMinute = /**
     * @param {?} newVal
     * @return {?}
     */
    function (newVal) {
        this.model.updateMinute(toInteger(newVal));
        this.propagateModelChange();
    };
    /**
     * @param {?} newVal
     * @return {?}
     */
    NgbTimepicker.prototype.updateSecond = /**
     * @param {?} newVal
     * @return {?}
     */
    function (newVal) {
        this.model.updateSecond(toInteger(newVal));
        this.propagateModelChange();
    };
    /**
     * @return {?}
     */
    NgbTimepicker.prototype.toggleMeridian = /**
     * @return {?}
     */
    function () {
        if (this.meridian) {
            this.changeHour(12);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgbTimepicker.prototype.formatHour = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (isNumber(value)) {
            if (this.meridian) {
                return padNumber(value % 12 === 0 ? 12 : value % 12);
            }
            else {
                return padNumber(value % 24);
            }
        }
        else {
            return padNumber(NaN);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgbTimepicker.prototype.formatMinSec = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return padNumber(value); };
    Object.defineProperty(NgbTimepicker.prototype, "isSmallSize", {
        get: /**
         * @return {?}
         */
        function () { return this.size === 'small'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbTimepicker.prototype, "isLargeSize", {
        get: /**
         * @return {?}
         */
        function () { return this.size === 'large'; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NgbTimepicker.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['seconds'] && !this.seconds && this.model && !isNumber(this.model.second)) {
            this.model.second = 0;
            this.propagateModelChange(false);
        }
    };
    /**
     * @private
     * @param {?=} touched
     * @return {?}
     */
    NgbTimepicker.prototype.propagateModelChange = /**
     * @private
     * @param {?=} touched
     * @return {?}
     */
    function (touched) {
        if (touched === void 0) { touched = true; }
        if (touched) {
            this.onTouched();
        }
        if (this.model.isValid(this.seconds)) {
            this.onChange(this._ngbTimeAdapter.toModel({ hour: this.model.hour, minute: this.model.minute, second: this.model.second }));
        }
        else {
            this.onChange(this._ngbTimeAdapter.toModel(null));
        }
    };
    NgbTimepicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-timepicker',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    template: "\n    <fieldset [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n      <div class=\"ngb-tp\">\n        <div class=\"ngb-tp-input-container ngb-tp-hour\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeHour(hourStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-hours\">Increment hours</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" placeholder=\"HH\" i18n-placeholder=\"@@ngb.timepicker.HH\"\n            [value]=\"formatHour(model?.hour)\" (change)=\"updateHour($event.target.value)\"\n            [readOnly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Hours\" i18n-aria-label=\"@@ngb.timepicker.hours\"\n            (keydown.ArrowUp)=\"changeHour(hourStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeHour(-hourStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeHour(-hourStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.decrement-hours\">Decrement hours</span>\n          </button>\n        </div>\n        <div class=\"ngb-tp-spacer\">:</div>\n        <div class=\"ngb-tp-input-container ngb-tp-minute\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeMinute(minuteStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-minutes\">Increment minutes</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" placeholder=\"MM\" i18n-placeholder=\"@@ngb.timepicker.MM\"\n            [value]=\"formatMinSec(model?.minute)\" (change)=\"updateMinute($event.target.value)\"\n            [readOnly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Minutes\" i18n-aria-label=\"@@ngb.timepicker.minutes\"\n            (keydown.ArrowUp)=\"changeMinute(minuteStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeMinute(-minuteStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeMinute(-minuteStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"  [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\"  i18n=\"@@ngb.timepicker.decrement-minutes\">Decrement minutes</span>\n          </button>\n        </div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-spacer\">:</div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-input-container ngb-tp-second\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeSecond(secondStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-seconds\">Increment seconds</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" placeholder=\"SS\" i18n-placeholder=\"@@ngb.timepicker.SS\"\n            [value]=\"formatMinSec(model?.second)\" (change)=\"updateSecond($event.target.value)\"\n            [readOnly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Seconds\" i18n-aria-label=\"@@ngb.timepicker.seconds\"\n            (keydown.ArrowUp)=\"changeSecond(secondStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeSecond(-secondStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeSecond(-secondStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"  [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.decrement-seconds\">Decrement seconds</span>\n          </button>\n        </div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-spacer\"></div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-meridian\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\"\n                  (click)=\"toggleMeridian()\">\n            <ng-container *ngIf=\"model?.hour >= 12; else am\" i18n=\"@@ngb.timepicker.PM\">{{ i18n.getAfternoonPeriod() }}</ng-container>\n            <ng-template #am i18n=\"@@ngb.timepicker.AM\">{{ i18n.getMorningPeriod() }}</ng-template>\n          </button>\n        </div>\n      </div>\n    </fieldset>\n  ",
                    providers: [NGB_TIMEPICKER_VALUE_ACCESSOR],
                    styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron::before{border-style:solid;border-width:.29em .29em 0 0;content:\"\";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-meridian,.ngb-tp-minute,.ngb-tp-second{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    NgbTimepicker.ctorParameters = function () { return [
        { type: NgbTimepickerConfig },
        { type: NgbTimeAdapter },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: NgbTimepickerI18n }
    ]; };
    NgbTimepicker.propDecorators = {
        meridian: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        spinners: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        seconds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hourStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minuteStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        secondStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        readonlyInputs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbTimepicker;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbTimepickerModule = /** @class */ (function () {
    function NgbTimepickerModule() {
    }
    NgbTimepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [NgbTimepicker], exports: [NgbTimepicker], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] }
    ];
    return NgbTimepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration service for the NgbToast component. You can inject this service, typically in your root component,
 * and customize the values of its properties in order to provide default values for all the toasts used in the
 * application.
 *
 * \@since 5.0.0
 */
var NgbToastConfig = /** @class */ (function () {
    function NgbToastConfig() {
        this.autohide = true;
        this.delay = 500;
        this.ariaLive = 'polite';
    }
    NgbToastConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbToastConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbToastConfig_Factory() { return new NgbToastConfig(); }, token: NgbToastConfig, providedIn: "root" });
    return NgbToastConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This directive allows the usage of HTML markup or other directives
 * inside of the toast's header.
 *
 * \@since 5.0.0
 */
var NgbToastHeader = /** @class */ (function () {
    function NgbToastHeader() {
    }
    NgbToastHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbToastHeader]' },] }
    ];
    return NgbToastHeader;
}());
/**
 * Toasts provide feedback messages as notifications to the user.
 * Goal is to mimic the push notifications available both on mobile and desktop operating systems.
 *
 * \@since 5.0.0
 */
var NgbToast = /** @class */ (function () {
    function NgbToast(ariaLive, config) {
        this.ariaLive = ariaLive;
        /**
         * A template like `<ng-template ngbToastHeader></ng-template>` can be
         * used in the projected content to allow markup usage.
         */
        this.contentHeaderTpl = null;
        /**
         * An event fired immediately when toast's `hide()` method has been called.
         * It can only occur in 2 different scenarios:
         * - `autohide` timeout fires
         * - user clicks on a closing cross (&times)
         *
         * Additionally this output is purely informative. The toast won't disappear. It's up to the user to take care of
         * that.
         */
        this.hideOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (this.ariaLive == null) {
            this.ariaLive = config.ariaLive;
        }
        this.delay = config.delay;
        this.autohide = config.autohide;
    }
    /**
     * @return {?}
     */
    NgbToast.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () { this._init(); };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgbToast.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('autohide' in changes) {
            this._clearTimeout();
            this._init();
        }
    };
    /**
     * @return {?}
     */
    NgbToast.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._clearTimeout();
        this.hideOutput.emit();
    };
    /**
     * @private
     * @return {?}
     */
    NgbToast.prototype._init = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autohide && !this._timeoutID) {
            this._timeoutID = setTimeout((/**
             * @return {?}
             */
            function () { return _this.hide(); }), this.delay);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgbToast.prototype._clearTimeout = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._timeoutID) {
            clearTimeout(this._timeoutID);
            this._timeoutID = null;
        }
    };
    NgbToast.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-toast',
                    exportAs: 'ngbToast',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    host: {
                        'role': 'alert',
                        '[attr.aria-live]': 'ariaLive',
                        'aria-atomic': 'true',
                        '[class.toast]': 'true',
                        '[class.show]': 'true',
                    },
                    template: "\n    <ng-template #headerTpl>\n      <strong class=\"mr-auto\">{{header}}</strong>\n    </ng-template>\n    <ng-template [ngIf]=\"contentHeaderTpl || header\">\n      <div class=\"toast-header\">\n        <ng-template [ngTemplateOutlet]=\"contentHeaderTpl || headerTpl\"></ng-template>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" i18n-aria-label=\"@@ngb.toast.close-aria\" (click)=\"hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </ng-template>\n    <div class=\"toast-body\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: [".ngb-toasts{position:fixed;top:0;right:0;margin:.5em;z-index:1200}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}"]
                }] }
    ];
    /** @nocollapse */
    NgbToast.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['aria-live',] }] },
        { type: NgbToastConfig }
    ]; };
    NgbToast.propDecorators = {
        delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autohide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        contentHeaderTpl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbToastHeader, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
        hideOutput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['hide',] }]
    };
    return NgbToast;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbToastModule = /** @class */ (function () {
    function NgbToastModule() {
    }
    NgbToastModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [NgbToast, NgbToastHeader], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [NgbToast, NgbToastHeader] },] }
    ];
    return NgbToastModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configuration service for the [`NgbTooltip`](#/components/tooltip/api#NgbTooltip) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
var NgbTooltipConfig = /** @class */ (function () {
    function NgbTooltipConfig() {
        this.autoClose = true;
        this.placement = 'auto';
        this.triggers = 'hover focus';
        this.disableTooltip = false;
        this.openDelay = 0;
        this.closeDelay = 0;
    }
    NgbTooltipConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbTooltipConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbTooltipConfig_Factory() { return new NgbTooltipConfig(); }, token: NgbTooltipConfig, providedIn: "root" });
    return NgbTooltipConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var nextId$5 = 0;
var NgbTooltipWindow = /** @class */ (function () {
    function NgbTooltipWindow() {
    }
    NgbTooltipWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-tooltip-window',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    host: { '[class]': '"tooltip show" + (tooltipClass ? " " + tooltipClass : "")', 'role': 'tooltip', '[id]': 'id' },
                    template: "<div class=\"arrow\"></div><div class=\"tooltip-inner\"><ng-content></ng-content></div>",
                    styles: ["ngb-tooltip-window.bs-tooltip-bottom .arrow,ngb-tooltip-window.bs-tooltip-top .arrow{left:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-bottom-left .arrow,ngb-tooltip-window.bs-tooltip-top-left .arrow{left:1em}ngb-tooltip-window.bs-tooltip-bottom-right .arrow,ngb-tooltip-window.bs-tooltip-top-right .arrow{left:auto;right:.8rem}ngb-tooltip-window.bs-tooltip-left .arrow,ngb-tooltip-window.bs-tooltip-right .arrow{top:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-left-top .arrow,ngb-tooltip-window.bs-tooltip-right-top .arrow{top:.4rem}ngb-tooltip-window.bs-tooltip-left-bottom .arrow,ngb-tooltip-window.bs-tooltip-right-bottom .arrow{top:auto;bottom:.4rem}"]
                }] }
    ];
    NgbTooltipWindow.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbTooltipWindow;
}());
/**
 * A lightweight and extensible directive for fancy tooltip creation.
 */
var NgbTooltip = /** @class */ (function () {
    function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, _ngZone, _document, _changeDetector, _applicationRef) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this._document = _document;
        this._changeDetector = _changeDetector;
        this._applicationRef = _applicationRef;
        /**
         * An event emitted when the tooltip is shown. Contains no payload.
         */
        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted when the popover is hidden. Contains no payload.
         */
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._ngbTooltipWindowId = "ngb-tooltip-" + nextId$5++;
        this.autoClose = config.autoClose;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disableTooltip = config.disableTooltip;
        this.tooltipClass = config.tooltipClass;
        this.openDelay = config.openDelay;
        this.closeDelay = config.closeDelay;
        this._popupService = new PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver, _applicationRef);
        this._zoneSubscription = _ngZone.onStable.subscribe((/**
         * @return {?}
         */
        function () {
            if (_this._windowRef) {
                positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body', 'bs-tooltip');
            }
        }));
    }
    Object.defineProperty(NgbTooltip.prototype, "ngbTooltip", {
        get: /**
         * @return {?}
         */
        function () { return this._ngbTooltip; },
        /**
         * The string content or a `TemplateRef` for the content to be displayed in the tooltip.
         *
         * If the content if falsy, the tooltip won't open.
         */
        set: /**
         * The string content or a `TemplateRef` for the content to be displayed in the tooltip.
         *
         * If the content if falsy, the tooltip won't open.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ngbTooltip = value;
            if (!value && this._windowRef) {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens the tooltip.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the tooltip template when it is created.
     */
    /**
     * Opens the tooltip.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the tooltip template when it is created.
     * @param {?=} context
     * @return {?}
     */
    NgbTooltip.prototype.open = /**
     * Opens the tooltip.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the tooltip template when it is created.
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        var _this = this;
        if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
            this._windowRef = this._popupService.open(this._ngbTooltip, context);
            this._windowRef.instance.tooltipClass = this.tooltipClass;
            this._windowRef.instance.id = this._ngbTooltipWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);
            if (this.container === 'body') {
                this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // We need to detect changes, because we don't know where .open() might be called from.
            // Ex. opening tooltip from one of lifecycle hooks that run after the CD
            // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception
            this._windowRef.changeDetectorRef.detectChanges();
            // We need to mark for check, because tooltip won't work inside the OnPush component.
            // Ex. when we use expression like `{{ tooltip.isOpen() : 'opened' : 'closed' }}`
            // inside the template of an OnPush component and we change the tooltip from
            // open -> closed, the expression in question won't be updated unless we explicitly
            // mark the parent component to be checked.
            this._windowRef.changeDetectorRef.markForCheck();
            ngbAutoClose(this._ngZone, this._document, this.autoClose, (/**
             * @return {?}
             */
            function () { return _this.close(); }), this.hidden, [this._windowRef.location.nativeElement]);
            this.shown.emit();
        }
    };
    /**
     * Closes the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     */
    /**
     * Closes the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     * @return {?}
     */
    NgbTooltip.prototype.close = /**
     * Closes the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     * @return {?}
     */
    function () {
        if (this._windowRef != null) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
            this._changeDetector.markForCheck();
        }
    };
    /**
     * Toggles the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     */
    /**
     * Toggles the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     * @return {?}
     */
    NgbTooltip.prototype.toggle = /**
     * Toggles the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     * @return {?}
     */
    function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns `true`, if the popover is currently shown.
     */
    /**
     * Returns `true`, if the popover is currently shown.
     * @return {?}
     */
    NgbTooltip.prototype.isOpen = /**
     * Returns `true`, if the popover is currently shown.
     * @return {?}
     */
    function () { return this._windowRef != null; };
    /**
     * @return {?}
     */
    NgbTooltip.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    NgbTooltip.prototype.ngOnChanges = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var tooltipClass = _a.tooltipClass;
        if (tooltipClass && this.isOpen()) {
            this._windowRef.instance.tooltipClass = tooltipClass.currentValue;
        }
    };
    /**
     * @return {?}
     */
    NgbTooltip.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.close();
        // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
        // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
        this._zoneSubscription.unsubscribe();
    };
    NgbTooltip.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' },] }
    ];
    /** @nocollapse */
    NgbTooltip.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: NgbTooltipConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }
    ]; };
    NgbTooltip.propDecorators = {
        autoClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disableTooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        openDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closeDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        shown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        ngbTooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbTooltip;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbTooltipModule = /** @class */ (function () {
    function NgbTooltipModule() {
    }
    NgbTooltipModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [NgbTooltip, NgbTooltipWindow], exports: [NgbTooltip], entryComponents: [NgbTooltipWindow] },] }
    ];
    return NgbTooltipModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A component that helps with text highlighting.
 *
 * If splits the `result` text into parts that contain the searched `term` and generates the HTML markup to simplify
 * highlighting:
 *
 * Ex. `result="Alaska"` and `term="as"` will produce `Al<span class="ngb-highlight">as</span>ka`.
 */
var NgbHighlight = /** @class */ (function () {
    function NgbHighlight() {
        /**
         * The CSS class for `<span>` elements wrapping the `term` inside the `result`.
         */
        this.highlightClass = 'ngb-highlight';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgbHighlight.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var result = toString(this.result);
        /** @type {?} */
        var terms = Array.isArray(this.term) ? this.term : [this.term];
        /** @type {?} */
        var escapedTerms = terms.map((/**
         * @param {?} term
         * @return {?}
         */
        function (term) { return regExpEscape(toString(term)); })).filter((/**
         * @param {?} term
         * @return {?}
         */
        function (term) { return term; }));
        this.parts = escapedTerms.length ? result.split(new RegExp("(" + escapedTerms.join('|') + ")", 'gmi')) : [result];
    };
    NgbHighlight.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-highlight',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" +
                        "<span *ngIf=\"isOdd; else even\" [class]=\"highlightClass\">{{part}}</span><ng-template #even>{{part}}</ng-template>" +
                        "</ng-template>",
                    styles: [".ngb-highlight{font-weight:700}"]
                }] }
    ];
    NgbHighlight.propDecorators = {
        highlightClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        result: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        term: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgbHighlight;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbTypeaheadWindow = /** @class */ (function () {
    function NgbTypeaheadWindow() {
        this.activeIdx = 0;
        /**
         * Flag indicating if the first row should be active initially
         */
        this.focusFirst = true;
        /**
         * A function used to format a given result before display. This function should return a formatted string without any
         * HTML markup
         */
        this.formatter = toString;
        /**
         * Event raised when user selects a particular result row
         */
        this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    NgbTypeaheadWindow.prototype.hasActive = /**
     * @return {?}
     */
    function () { return this.activeIdx > -1 && this.activeIdx < this.results.length; };
    /**
     * @return {?}
     */
    NgbTypeaheadWindow.prototype.getActive = /**
     * @return {?}
     */
    function () { return this.results[this.activeIdx]; };
    /**
     * @param {?} activeIdx
     * @return {?}
     */
    NgbTypeaheadWindow.prototype.markActive = /**
     * @param {?} activeIdx
     * @return {?}
     */
    function (activeIdx) {
        this.activeIdx = activeIdx;
        this._activeChanged();
    };
    /**
     * @return {?}
     */
    NgbTypeaheadWindow.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.activeIdx === this.results.length - 1) {
            this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
        }
        else {
            this.activeIdx++;
        }
        this._activeChanged();
    };
    /**
     * @return {?}
     */
    NgbTypeaheadWindow.prototype.prev = /**
     * @return {?}
     */
    function () {
        if (this.activeIdx < 0) {
            this.activeIdx = this.results.length - 1;
        }
        else if (this.activeIdx === 0) {
            this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
        }
        else {
            this.activeIdx--;
        }
        this._activeChanged();
    };
    /**
     * @return {?}
     */
    NgbTypeaheadWindow.prototype.resetActive = /**
     * @return {?}
     */
    function () {
        this.activeIdx = this.focusFirst ? 0 : -1;
        this._activeChanged();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgbTypeaheadWindow.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) { this.selectEvent.emit(item); };
    /**
     * @return {?}
     */
    NgbTypeaheadWindow.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.resetActive(); };
    /**
     * @private
     * @return {?}
     */
    NgbTypeaheadWindow.prototype._activeChanged = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
    };
    NgbTypeaheadWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-typeahead-window',
                    exportAs: 'ngbTypeaheadWindow',
                    host: { '(mousedown)': '$event.preventDefault()', 'class': 'dropdown-menu show', 'role': 'listbox', '[id]': 'id' },
                    template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngTemplateOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
                }] }
    ];
    NgbTypeaheadWindow.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        focusFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        results: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        term: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resultTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['select',] }],
        activeChangeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['activeChange',] }]
    };
    return NgbTypeaheadWindow;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ARIA_LIVE_DELAY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('live announcer delay', { providedIn: 'root', factory: ARIA_LIVE_DELAY_FACTORY });
/**
 * @return {?}
 */
function ARIA_LIVE_DELAY_FACTORY() {
    return 100;
}
/**
 * @param {?} document
 * @param {?=} lazyCreate
 * @return {?}
 */
function getLiveElement(document, lazyCreate) {
    if (lazyCreate === void 0) { lazyCreate = false; }
    /** @type {?} */
    var element = (/** @type {?} */ (document.body.querySelector('#ngb-live')));
    if (element == null && lazyCreate) {
        element = document.createElement('div');
        element.setAttribute('id', 'ngb-live');
        element.setAttribute('aria-live', 'polite');
        element.setAttribute('aria-atomic', 'true');
        element.classList.add('sr-only');
        document.body.appendChild(element);
    }
    return element;
}
var Live = /** @class */ (function () {
    function Live(_document, _delay) {
        this._document = _document;
        this._delay = _delay;
    }
    /**
     * @return {?}
     */
    Live.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = getLiveElement(this._document);
        if (element) {
            element.parentElement.removeChild(element);
        }
    };
    /**
     * @param {?} message
     * @return {?}
     */
    Live.prototype.say = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        /** @type {?} */
        var element = getLiveElement(this._document, true);
        /** @type {?} */
        var delay = this._delay;
        element.textContent = '';
        /** @type {?} */
        var setText = (/**
         * @return {?}
         */
        function () { return element.textContent = message; });
        if (delay === null) {
            setText();
        }
        else {
            setTimeout(setText, delay);
        }
    };
    Live.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Live.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ARIA_LIVE_DELAY,] }] }
    ]; };
    /** @nocollapse */ Live.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Live_Factory() { return new Live(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ARIA_LIVE_DELAY)); }, token: Live, providedIn: "root" });
    return Live;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configuration service for the [`NgbTypeahead`](#/components/typeahead/api#NgbTypeahead) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the typeaheads used in the application.
 */
var NgbTypeaheadConfig = /** @class */ (function () {
    function NgbTypeaheadConfig() {
        this.editable = true;
        this.focusFirst = true;
        this.showHint = false;
        this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
    }
    NgbTypeaheadConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbTypeaheadConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbTypeaheadConfig_Factory() { return new NgbTypeaheadConfig(); }, token: NgbTypeaheadConfig, providedIn: "root" });
    return NgbTypeaheadConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGB_TYPEAHEAD_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return NgbTypeahead; })),
    multi: true
};
/** @type {?} */
var nextWindowId = 0;
/**
 * A directive providing a simple way of creating powerful typeaheads from any text input.
 */
var NgbTypeahead = /** @class */ (function () {
    function NgbTypeahead(_elementRef, _viewContainerRef, _renderer, _injector, componentFactoryResolver, config, ngZone, _live, _document, _ngZone, _changeDetector, _applicationRef) {
        var _this = this;
        this._elementRef = _elementRef;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._injector = _injector;
        this._live = _live;
        this._document = _document;
        this._ngZone = _ngZone;
        this._changeDetector = _changeDetector;
        this._applicationRef = _applicationRef;
        this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * The value for the `autocomplete` attribute for the `<input>` element.
         *
         * Defaults to `"off"` to disable the native browser autocomplete, but you can override it if necessary.
         *
         * \@since 2.1.0
         */
        this.autocomplete = 'off';
        /**
         * The preferred placement of the typeahead.
         *
         * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
         * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
         * `"right-bottom"`
         *
         * Accepts an array of strings or a string with space separated possible values.
         *
         * The default order of preference is `"bottom-left bottom-right top-left top-right"`
         *
         * Please see the [positioning overview](#/positioning) for more details.
         */
        this.placement = 'bottom-left';
        /**
         * An event emitted right before an item is selected from the result list.
         *
         * Event payload is of type [`NgbTypeaheadSelectItemEvent`](#/components/typeahead/api#NgbTypeaheadSelectItemEvent).
         */
        this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.popupId = "ngb-typeahead-" + nextWindowId++;
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.container = config.container;
        this.editable = config.editable;
        this.focusFirst = config.focusFirst;
        this.showHint = config.showHint;
        this.placement = config.placement;
        this._valueChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_elementRef.nativeElement, 'input')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} $event
         * @return {?}
         */
        function ($event) { return ((/** @type {?} */ ($event.target))).value; })));
        this._resubscribeTypeahead = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this._popupService = new PopupService(NgbTypeaheadWindow, _injector, _viewContainerRef, _renderer, componentFactoryResolver, _applicationRef);
        this._zoneSubscription = ngZone.onStable.subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.isPopupOpen()) {
                positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
            }
        }));
    }
    /**
     * @return {?}
     */
    NgbTypeahead.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var inputValues$ = this._valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._inputValueBackup = _this.showHint ? value : null;
            _this._onChange(_this.editable ? value : undefined);
        })));
        /** @type {?} */
        var results$ = inputValues$.pipe(this.ngbTypeahead);
        /** @type {?} */
        var userInput$ = this._resubscribeTypeahead.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((/**
         * @return {?}
         */
        function () { return results$; })));
        this._subscription = this._subscribeToUserInput(userInput$);
    };
    /**
     * @return {?}
     */
    NgbTypeahead.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._closePopup();
        this._unsubscribeFromUserInput();
        this._zoneSubscription.unsubscribe();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbTypeahead.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgbTypeahead.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onTouched = fn; };
    /**
     * @param {?} value
     * @return {?}
     */
    NgbTypeahead.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._writeInputValue(this._formatItemForInput(value));
        if (this.showHint) {
            this._inputValueBackup = value;
        }
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgbTypeahead.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * Dismisses typeahead popup window
     */
    /**
     * Dismisses typeahead popup window
     * @return {?}
     */
    NgbTypeahead.prototype.dismissPopup = /**
     * Dismisses typeahead popup window
     * @return {?}
     */
    function () {
        if (this.isPopupOpen()) {
            this._resubscribeTypeahead.next(null);
            this._closePopup();
            if (this.showHint && this._inputValueBackup !== null) {
                this._writeInputValue(this._inputValueBackup);
            }
            this._changeDetector.markForCheck();
        }
    };
    /**
     * Returns true if the typeahead popup window is displayed
     */
    /**
     * Returns true if the typeahead popup window is displayed
     * @return {?}
     */
    NgbTypeahead.prototype.isPopupOpen = /**
     * Returns true if the typeahead popup window is displayed
     * @return {?}
     */
    function () { return this._windowRef != null; };
    /**
     * @return {?}
     */
    NgbTypeahead.prototype.handleBlur = /**
     * @return {?}
     */
    function () {
        this._resubscribeTypeahead.next(null);
        this._onTouched();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgbTypeahead.prototype.handleKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isPopupOpen()) {
            return;
        }
        // tslint:disable-next-line:deprecation
        switch (event.which) {
            case Key.ArrowDown:
                event.preventDefault();
                this._windowRef.instance.next();
                this._showHint();
                break;
            case Key.ArrowUp:
                event.preventDefault();
                this._windowRef.instance.prev();
                this._showHint();
                break;
            case Key.Enter:
            case Key.Tab:
                /** @type {?} */
                var result = this._windowRef.instance.getActive();
                if (isDefined(result)) {
                    event.preventDefault();
                    event.stopPropagation();
                    this._selectResult(result);
                }
                this._closePopup();
                break;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgbTypeahead.prototype._openPopup = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isPopupOpen()) {
            this._inputValueBackup = this._elementRef.nativeElement.value;
            this._windowRef = this._popupService.open();
            this._windowRef.instance.id = this.popupId;
            this._windowRef.instance.selectEvent.subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return _this._selectResultClosePopup(result); }));
            this._windowRef.instance.activeChangeEvent.subscribe((/**
             * @param {?} activeId
             * @return {?}
             */
            function (activeId) { return _this.activeDescendant = activeId; }));
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            this._changeDetector.markForCheck();
            ngbAutoClose(this._ngZone, this._document, 'outside', (/**
             * @return {?}
             */
            function () { return _this.dismissPopup(); }), this._closed$, [this._elementRef.nativeElement, this._windowRef.location.nativeElement]);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgbTypeahead.prototype._closePopup = /**
     * @private
     * @return {?}
     */
    function () {
        this._closed$.next();
        this._popupService.close();
        this._windowRef = null;
        this.activeDescendant = undefined;
    };
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    NgbTypeahead.prototype._selectResult = /**
     * @private
     * @param {?} result
     * @return {?}
     */
    function (result) {
        /** @type {?} */
        var defaultPrevented = false;
        this.selectItem.emit({ item: result, preventDefault: (/**
             * @return {?}
             */
            function () { defaultPrevented = true; }) });
        this._resubscribeTypeahead.next(null);
        if (!defaultPrevented) {
            this.writeValue(result);
            this._onChange(result);
        }
    };
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    NgbTypeahead.prototype._selectResultClosePopup = /**
     * @private
     * @param {?} result
     * @return {?}
     */
    function (result) {
        this._selectResult(result);
        this._closePopup();
    };
    /**
     * @private
     * @return {?}
     */
    NgbTypeahead.prototype._showHint = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.showHint && this._windowRef.instance.hasActive() && this._inputValueBackup != null) {
            /** @type {?} */
            var userInputLowerCase = this._inputValueBackup.toLowerCase();
            /** @type {?} */
            var formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
            if (userInputLowerCase === formattedVal.substr(0, this._inputValueBackup.length).toLowerCase()) {
                this._writeInputValue(this._inputValueBackup + formattedVal.substr(this._inputValueBackup.length));
                this._elementRef.nativeElement['setSelectionRange'].apply(this._elementRef.nativeElement, [this._inputValueBackup.length, formattedVal.length]);
            }
            else {
                this._writeInputValue(formattedVal);
            }
        }
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    NgbTypeahead.prototype._formatItemForInput = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item != null && this.inputFormatter ? this.inputFormatter(item) : toString(item);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NgbTypeahead.prototype._writeInputValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', toString(value));
    };
    /**
     * @private
     * @param {?} userInput$
     * @return {?}
     */
    NgbTypeahead.prototype._subscribeToUserInput = /**
     * @private
     * @param {?} userInput$
     * @return {?}
     */
    function (userInput$) {
        var _this = this;
        return userInput$.subscribe((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            if (!results || results.length === 0) {
                _this._closePopup();
            }
            else {
                _this._openPopup();
                _this._windowRef.instance.focusFirst = _this.focusFirst;
                _this._windowRef.instance.results = results;
                _this._windowRef.instance.term = _this._elementRef.nativeElement.value;
                if (_this.resultFormatter) {
                    _this._windowRef.instance.formatter = _this.resultFormatter;
                }
                if (_this.resultTemplate) {
                    _this._windowRef.instance.resultTemplate = _this.resultTemplate;
                }
                _this._windowRef.instance.resetActive();
                // The observable stream we are subscribing to might have async steps
                // and if a component containing typeahead is using the OnPush strategy
                // the change detection turn wouldn't be invoked automatically.
                _this._windowRef.changeDetectorRef.detectChanges();
                _this._showHint();
            }
            // live announcer
            /** @type {?} */
            var count = results ? results.length : 0;
            _this._live.say(count === 0 ? 'No results available' : count + " result" + (count === 1 ? '' : 's') + " available");
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NgbTypeahead.prototype._unsubscribeFromUserInput = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._subscription = null;
    };
    NgbTypeahead.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'input[ngbTypeahead]',
                    exportAs: 'ngbTypeahead',
                    host: {
                        '(blur)': 'handleBlur()',
                        '[class.open]': 'isPopupOpen()',
                        '(keydown)': 'handleKeyDown($event)',
                        '[autocomplete]': 'autocomplete',
                        'autocapitalize': 'off',
                        'autocorrect': 'off',
                        'role': 'combobox',
                        'aria-multiline': 'false',
                        '[attr.aria-autocomplete]': 'showHint ? "both" : "list"',
                        '[attr.aria-activedescendant]': 'activeDescendant',
                        '[attr.aria-owns]': 'isPopupOpen() ? popupId : null',
                        '[attr.aria-expanded]': 'isPopupOpen()'
                    },
                    providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    NgbTypeahead.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: NgbTypeaheadConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: Live },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }
    ]; };
    NgbTypeahead.propDecorators = {
        autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        focusFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inputFormatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ngbTypeahead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resultFormatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resultTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showHint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgbTypeahead;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbTypeaheadModule = /** @class */ (function () {
    function NgbTypeaheadModule() {
    }
    NgbTypeaheadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow],
                    exports: [NgbTypeahead, NgbHighlight],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [NgbTypeaheadWindow]
                },] }
    ];
    return NgbTypeaheadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGB_MODULES = [
    NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule,
    NgbDropdownModule, NgbModalModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule,
    NgbTabsetModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule
];
var NgbModule = /** @class */ (function () {
    function NgbModule() {
    }
    NgbModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ imports: NGB_MODULES, exports: NGB_MODULES },] }
    ];
    return NgbModule;
}());


//# sourceMappingURL=ng-bootstrap.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mobile\">\r\n    <br>\r\n    <br>\r\n    <br>\r\n</div>\r\n<div class=\"jumbotron\">\r\n    <h1 class=\"display-4 text-center\">About Us</h1>\r\n    <hr class=\"my-4\">\r\n    <p class=\"lead\" style=\"font-size: 1.45em !important;\">\r\n        Find the top most famous brand stores only at <a href=\"https://www.buymedeal.com\">BuyMeDeal</a> and\r\n        shop for your favorite\r\n        products in\r\n        unbelievable prices. We welcome our global customers to come and shop from here with our incredible deals.\r\n        <br>\r\n        <br>\r\n        If you are planning a trip with friends and family then you are on the right place as we will provide you best\r\n        discounted trip offers along with fun filled activities in the city with the best discount vouchers.\r\n        <a href=\"https://www.buymedeal.com\">BuyMeDeal</a> proudly presents best discount offers on your\r\n        favorite high-end saloons, massages and spa\r\n        centers so, next time if you want to get relaxed then check out our deals on our top beauty stores.\r\n        <br>\r\n        <br>\r\n        <a href=\"https://www.buymedeal.com\">BuyMeDeal</a> is a user friendly website which suits according to\r\n        your needs. The website is well\r\n        designed with different easy accessible categories where one can easily search for whatever he wishes to buy. In\r\n        each category you can find out many different stores with great deals and promotion codes and you can choose the\r\n        one which fits your requirement.\r\n        <br>\r\n        <br>\r\n        We bring top quality products at affordable prices at your doorstep. Our main motto is to give you the best\r\n        stress free online shopping experience. We are working with famous well-known brands from all around the world\r\n        like Ikea, Toshiba, Zumiez, Global Gulf, Shutter stock, Eric Dress, 8 Seasons, 724 Perfumes UAE, AMI Club wear\r\n        and lots more. You can easily reach us by our social network from Facebook, Pinterest and Instagram.\r\n        <br>\r\n        <br>\r\n        Now getting high end brands at affordable prices is no more a dream it’s just a click away from you. Check out\r\n        <a href=\"https://www.buymedeal.com\">BuyMeDeal</a> and enjoy great experience of discount codes,\r\n        promotions, exclusive gift offers and best\r\n        deals from your favorite top brand stores around the world.\r\n    </p>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blog/blog.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blog/blog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mobile\">\r\n    <br>\r\n    <br>\r\n    <br>\r\n</div>\r\n<div class=\"jumbotron\">\r\n    <a [routerLink]=\"['/home']\">Home/</a>\r\n    <a [routerLink]=\"['/blogs']\">Blogs/</a>\r\n    <a [routerLink]=\"['/blog',blogURL]\">{{blogURL}}/</a>\r\n    <div class=\"lead\" style=\"font-size: 1.4em !important;\">\r\n        <div class=\"alert alert-danger alert-dismissible fade show col-lg-8\" *ngIf=\"responseError\" role=\"alert\">\r\n            {{responseError}}\r\n            <button type=\"button\" class=\"close\" (click)=\"closeError()\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"text-center m-5\" *ngIf=\"!blogNode && isFetching\">\r\n                <div class=\"lds-facebook\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\" *ngIf=\"blogNode\">\r\n                <br>\r\n                <img [src]=\"blogNode.img\" style=\"width: 100%;\">\r\n                <br>\r\n                <br>\r\n                <div>\r\n                    <h1 class=\"display-4 text-center\">{{blogNode.title}}</h1>\r\n                    <br>\r\n                    <div [innerHTML]=\"blogNode.longDes\"></div>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blogs/blogs.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blogs/blogs.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mobile\">\r\n    <br>\r\n    <br>\r\n    <br>\r\n</div>\r\n<div class=\"jumbotron\">\r\n    <a [routerLink]=\"['/home']\">Home/</a>\r\n    <a [routerLink]=\"['/blogs']\">Blogs/</a>\r\n    <h1 class=\"display-4 text-center\">BLOGS FROM BUYMEDEAL TEAM</h1>\r\n    <hr class=\"my-4\" />\r\n    <!-- <div class=\"alert alert-danger alert-dismissible fade show col-lg-8\" *ngIf=\"responseError\" role=\"alert\">\r\n        {{responseError}}\r\n        <button type=\"button\" class=\"close\" (click)=\"closeError()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div> -->\r\n    <br>\r\n    <div class=\"lead\" style=\"font-size: 1.2em !important;\">\r\n        <div class=\"container\">\r\n            <div class=\"text-center m-5\" *ngIf=\"!blogsArr.length && isFetching\">\r\n                <div class=\"lds-facebook\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n            <div *ngFor=\"let blog of blogsArr | keyvalue\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <a [routerLink]=\"['/blog', blog.value.blogURL]\">\r\n                            <h3>{{blog.value.title}}</h3>\r\n                        </a>\r\n                        <span><b>Date:</b>&nbsp; {{blog.value.CreatedAt | date}}</span>&nbsp;&nbsp;\r\n                        <span><b>By: </b> <span style=\"text-transform: capitalize;\">{{blog.value.author}}</span>\r\n                        </span>&nbsp;&nbsp;\r\n                        <span><i class=\"fa fa-eye\"></i> &nbsp; {{blog.value.views || 0}}</span>\r\n                        <br>\r\n                        <br>\r\n                        <div class=\"blogTxt\" [innerHTML]=\"blog.value.shortDes | slice:0:800\">\r\n                        </div>\r\n                        <a class=\"viewMore\" [routerLink]=\"['/blog', blog.value.blogURL]\"\r\n                            *ngIf=\"blog.value.shortDes.length > 799\">View\r\n                            More</a>\r\n                    </div>\r\n                    <div class=\"col-6\" [routerLink]=\"['/blog', blog.value.blogURL]\">\r\n                        <a><img [src]=\"blog.value.img\"></a>\r\n                    </div>\r\n                </div>\r\n                <hr class=\"my-4\" />\r\n            </div>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"loadPrev()\">Previous</button>\r\n        <button type=\"button\" class=\"btn btn-outline-primary pull-right\" (click)=\"loadNext()\">Next</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/categories/categories.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categories/categories.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mobile\">\r\n    <br>\r\n    <br>\r\n    <br>\r\n</div>\r\n<div class=\"jumbotron\">\r\n    <a [routerLink]=\"['/home']\" class=\"breadcrumbs\">Home/</a>\r\n    <a [routerLink]=\"['/categories']\" class=\"breadcrumbs\">Categories/</a>\r\n    <h1 class=\"display-4 text-center\">Categories Containing Exciting Stores...</h1>\r\n    <hr class=\"my-4\" />\r\n    <div class=\"lead\" style=\"font-size: 1.2em !important;\">\r\n        <div class=\"alert alert-danger alert-dismissible fade show col-lg-8\" *ngIf=\"responseError\" role=\"alert\">\r\n            {{responseError}}\r\n            <button type=\"button\" class=\"close\" (click)=\"closeError()\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-9\">\r\n                    <div class=\"text-center m-5\" *ngIf=\"!categoryArr && isLoading\">\r\n                        <div class=\"lds-facebook\">\r\n                            <div></div>\r\n                            <div></div>\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-4 col-sm-12 p_content\" *ngFor=\"let cat of categoryArr | keyvalue\">\r\n                            <a [routerLink]=\"['/category', cat.value.categoryURL]\">{{cat.value.name}}</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                    Ads will be displayed here\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/category/category.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category/category.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mobile\">\r\n    <br>\r\n    <br>\r\n    <br>\r\n</div>\r\n<div class=\"jumbotron\">\r\n    <a [routerLink]=\"['/home']\">Home/</a>\r\n    <a [routerLink]=\"['/categories']\">Categories/</a>\r\n    <a [routerLink]=\"['/category',selectedCatURL]\">{{selectedCatURL}}/</a>\r\n    <h1 class=\"display-4 text-center\">{{selectedCat}}</h1>\r\n    <hr class=\"my-4\" />\r\n    <div class=\"lead\" style=\"font-size: 1.2em !important;\">\r\n        <div class=\"alert alert-danger alert-dismissible fade show col-lg-8\" *ngIf=\"responseError\" role=\"alert\">\r\n            {{responseError}}\r\n            <button type=\"button\" class=\"close\" (click)=\"closeError()\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 col-lg-3\">\r\n                    <form>\r\n                        <select class=\"custom-select customSize\" name=\"selctForm\" [(ngModel)]=\"selectCat\"\r\n                            (change)=\"loadStores(selectCat)\">\r\n                            <option [value]=\"cat.value._id\" *ngFor=\"let cat of categoryArr | keyvalue\">\r\n                                {{cat.value.name}}\r\n                            </option>\r\n                        </select>\r\n                    </form>\r\n                    <br>\r\n                    <br>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <div class=\"row mb-0\">\r\n                        <div class=\"text-center\" style=\"position: relative;left: 25%;\" *ngIf=\"isLoading\">\r\n                            <div class=\"lds-facebook\">\r\n                                <div></div>\r\n                                <div></div>\r\n                                <div></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6 col-lg-2 storeArrr\" [routerLink]=\"['/store', store.value.storeURL]\"\r\n                            *ngFor=\"let store of storeArr | keyvalue\">\r\n                            <div class=\"brand-card\">\r\n                                <div class=\"brand-card-header\">\r\n                                    <img [src]=\"store.value.img\" class=\"rounded-circle roundImg\" width=\"55\"\r\n                                        height=\"55\" />\r\n                                </div>\r\n                                <div class=\"brand-card-body\">\r\n                                    <div class=\"text-muted small\">\r\n                                        {{store.value.name | slice:0:10}}</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<ngb-carousel *ngIf=\"slideArray\" class=\"height87\" interval=\"3000\" [pauseOnHover]=\"false\">\r\n    <ng-template ngbSlide *ngFor=\"let slide of slideArray | keyvalue\">\r\n        <ng-container>\r\n            <img [src]=\"slide.value.img\" class=\"height87\" alt=\"Random first slide\">\r\n        </ng-container>\r\n    </ng-template>\r\n</ngb-carousel>\r\n<div class=\"text-center m-5\" *ngIf=\"!slideArray\">\r\n    <div class=\"lds-hourglass\"></div>\r\n</div>\r\n<br>\r\n<div class=\"text-center m-5\" *ngIf=\"!storeArray\">\r\n    <div class=\"lds-grid\">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n    </div>\r\n</div>\r\n<div class=\"row justify-content-md-center mb-0\" style=\"margin:auto 30px\">\r\n    <div class=\"col-md-4 xxzz\" *ngFor=\"let blog of blogArray | keyvalue\" [routerLink]=\"['/blog', blog.value.blogURL]\">\r\n        <div class=\"card\">\r\n            <img [src]=\"blog.value.img\" class=\"card-img-top\">\r\n            <div class=\"card-body\">\r\n                <div class=\"table\">\r\n                    <h6 class=\"text-center\">\r\n                        {{blog.value.title | slice:0:30}}\r\n                    </h6>\r\n                    <br>\r\n                    <h4 class=\"card-caption text-center\" [innerHTML]=\"blog.value.shortDes | slice:0:85\"></h4>\r\n                    <div class=\"ftr\">\r\n                        <div class=\"author\">\r\n                            <img src=\"http://adamthemes.com/demo/code/cards/images/avatar3.png\" alt=\"\"\r\n                                class=\"avatar img-raised avatar-img rounded-circle\">\r\n                            <span class=\"userNm\">{{blog.value.author}}</span>\r\n                            <div class=\"ripple-cont\">\r\n                                <div class=\"ripple ripple-on ripple-out\"\r\n                                    style=\"left: 574px; top: 364px; background-color: rgb(60, 72, 88); transform: scale(11.875);\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a class=\"stats onlyL\">View more&nbsp;&nbsp;<i class=\"cui-arrow-right\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"col-sm-12 col-lg-4 visitCoupon\" *ngFor=\"let blog of blogArray | keyvalue\"\r\n        [routerLink]=\"['/blog', blog.value.blogURL]\">\r\n        <div class=\"brand-card\" [ngClass]=\"{'applyMargin': web}\">\r\n            <div class=\"brand-card-header\">\r\n                <img [src]=\"blog.value.img\" class=\"blogImg\" />\r\n            </div>\r\n            <br>\r\n            <div class=\"brand-card-body changeFlex\">\r\n                <h3 class=\"blogTitle\">{{blog.value.title | slice:0:38}}</h3>\r\n                <br>\r\n                <span class=\"author\"><b><i class=\"cui-user\"></i></b>&nbsp;&nbsp;&nbsp;By: Danish</span>\r\n                <br>\r\n                <br>\r\n                <p class=\"blogText\" [innerHTML]=\"blog.value.shortDes | slice:0:160\"></p>\r\n                <a class=\"pull-right\">CONTINUE READING<i class=\"cui-arrow-right\"></i></a>\r\n            </div>\r\n            <br>\r\n        </div>\r\n    </div> -->\r\n</div>\r\n\r\n<ul class=\"tranding_select tabs\">\r\n    <li class=\"tab\"><a routerLink=\"/blogs\" class=\"waves-effect btn active\">View all\r\n            Blogs</a></li>\r\n</ul>\r\n<br>\r\n<div class=\"row justify-content-md-center mb-0\" [ngClass]=\"{'ifWeb': web}\" style=\"margin: auto 5px;\">\r\n    <div class=\"col-md-3 visitCoupon\" *ngFor=\"let store of storeArray | keyvalue;index as i;\"\r\n        [routerLink]=\"['/store', store.value.storeURL]\">\r\n        <div class=\"card profile-card-1\" *ngIf=\"i%2!=0\">\r\n            <img src=\"../../assets/images/dback.jpeg\" alt=\"profile-sample1\" class=\"background\" />\r\n            <img [src]=\"store.value.img\" alt=\"profile-image\" class=\"profile\" />\r\n            <div class=\"card-content\">\r\n                <h2>{{store.value.name}}<small>Store</small></h2>\r\n                <br>\r\n                <!-- <div class=\"icon-block\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a><a href=\"#\"> <i\r\n                            class=\"fa fa-twitter\"></i></a><a href=\"#\"> <i class=\"fa fa-google-plus\"></i></a></div> -->\r\n                <button type=\"button\" class=\"btn btn-outline-light\"\r\n                    style=\"padding: 30px auto 30px auto;\">Explore</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card profile-card-3\" *ngIf=\"i%2==0\">\r\n            <div class=\"background-block\">\r\n                <img src=\"../../assets/images/aback2.jpeg\" alt=\"profile-sample1\" class=\"background\" />\r\n            </div>\r\n            <div class=\"profile-thumb-block\">\r\n                <img [src]=\"store.value.img\" alt=\"profile-image\" class=\"profile\" />\r\n            </div>\r\n            <div class=\"card-content\">\r\n                <h2>{{store.value.name}}<small>Store</small></h2>\r\n                <br>\r\n                <button type=\"button\" class=\"btn btn-outline-dark\"\r\n                    style=\"padding: 30px auto 30px auto;\">Explore</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"col-sm-6 col-lg-2 visitCoupon\" *ngFor=\"let store of storeArray | keyvalue\"\r\n        [routerLink]=\"['/store', store.value.storeURL]\">\r\n        <div class=\"brand-card\">\r\n            <div class=\"brand-card-header\">\r\n                <img [src]=\"store.value.img\" class=\"rounded-circle roundImg\" width=\"100\" height=\"100\" />\r\n            </div>\r\n            <br>\r\n            <div class=\"brand-card-body\">\r\n                <div>\r\n                    <div class=\"text-value\">\r\n                        <i class=\"fa fa-share-square-o storeIcon\"></i>\r\n                    </div>\r\n                    <div class=\"text-uppercase text-muted small\">Coupons</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n</div>\r\n\r\n<ul class=\"tranding_select tabs\">\r\n    <li class=\"tab\"><a routerLink=\"/stores\" class=\"waves-effect btn active\">View all\r\n            Stores</a></li>\r\n</ul>\r\n\r\n<br>\r\n\r\n<section class=\"min_container min_pages\">\r\n    <div class=\"section_row\">\r\n        <div class=\"col\">\r\n            <div class=\"right_side_bar\">\r\n                <div class=\"right_sidebar_iner\">\r\n                    <div class=\"popular_posts\">\r\n                        <h3 class=\"categories_tittle\">Popular Blogs</h3>\r\n                        <div class=\"text-center m-5\" *ngIf=\"!blogArray\">\r\n                            <div class=\"lds-ripple\">\r\n                                <div></div>\r\n                                <div></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row valign-wrapper popular_item\" [routerLink]=\"['/blog', blog.value.blogURL]\"\r\n                            *ngFor=\"let blog of blogArray | keyvalue | slice:-6\">\r\n                            <div class=\"col-3 p_img\">\r\n                                <div class=\"manAvatar\">\r\n                                    <img [src]=\"blog.value.img\" class=\"customImgRound\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col s9 p_content\">\r\n                                <a>{{blog.value.title}}</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n            <div class=\"middle_section\" id=\"infinite_scroll\" style=\"padding:0 !important\">\r\n                <div id=\"featured\">\r\n                    <div class=\"card\">\r\n                        <br>\r\n                        <a class=\"text-center display-4\">Your Favourite Deals And Discounts</a>\r\n                        <br>\r\n                        <br>\r\n                        <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\r\n                            <tbody>\r\n                                <tr *ngIf=\"!dealsArray\">\r\n                                    <div class=\"text-center m-5\">\r\n                                        <div class=\"lds-facebook\">\r\n                                            <div></div>\r\n                                            <div></div>\r\n                                            <div></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </tr>\r\n                                <tr *ngFor=\"let deal of dealsArray | keyvalue\">\r\n                                    <td class=\"text-center\">\r\n                                        <div class=\"avatar\">\r\n                                            <img src=\"assets/images/soblue.png\" class=\"img-avatar\">\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div>{{deal.value.offerBox}}</div>\r\n                                        <div class=\"small text-muted\">\r\n                                            <span>Validity</span> | <span>{{deal.value.expDate | date}}</span>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-primary active\"\r\n                                            (click)=\"openModal2(template2,deal.value)\"\r\n                                            *ngIf=\"!deal.value.activeStatus\">Copy\r\n                                            code</button>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-primary active\"\r\n                                            (click)=\"openModal(template,deal.value)\" *ngIf=\"deal.value.activeStatus\">Get\r\n                                            Deal</button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-3\">\r\n            <div class=\"left_side_bar\">\r\n                <div class=\"interests\">\r\n                    <h3 class=\"categories_tittle\">Your Interests</h3>\r\n                    <ul class=\"interests_list\">\r\n                        <li [routerLink]=\"['/category','fitness']\"><a><i class=\"fa fa-bar-chart\"></i>Fitness</a></li>\r\n                        <li [routerLink]=\"['/category','apparel-and-clothing']\"><a><i\r\n                                    class=\"fa fa-shopping-cart fa-lg\"></i>Apparel & Clothing</a></li>\r\n                        <li [routerLink]=\"['/category','toys']\"><a><i class=\"fa fa-puzzle-piece\"></i>Toys</a></li>\r\n                        <li [routerLink]=\"['/category','departmental-stores']\"><a><i\r\n                                    class=\"fa fa-plus-square\"></i>Departmental Stores</a></li>\r\n                        <li [routerLink]=\"['/category','home-and-garden']\"><a><i class=\"fa fa-home\"></i>Home &\r\n                                Garden</a></li>\r\n                        <li [routerLink]=\"['/category','baby-and-kids']\"><a><i class=\"fa fa-life-ring\"></i>Baby &\r\n                                Kids</a></li>\r\n                        <li [routerLink]=\"['/category','office-accessories']\"><a><i class=\"fa fa-briefcase\"></i>Office\r\n                                Accessories</a></li>\r\n                        <li [routerLink]=\"['/category','hobbie']\"><a><i class=\"fa fa-object-group\"></i>Hobbie</a></li>\r\n                        <li [routerLink]=\"['/category','travel-and-hotel']\"><a><i class=\"fa fa-hotel\"></i>Travel\r\n                                & Hotel</a></li>\r\n                        <li [routerLink]=\"['/category','restaurants']\"><a><i class=\"fa fa-bank\"></i>Restaurants</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"social_Sharing\">\r\n                    <h3 class=\"categories_tittle\">Social Sharing</h3>\r\n                    <ul class=\"social_icon\">\r\n                        <li><a><i class=\"fa fa-twitter\"></i></a></li>\r\n                        <li><a class=\"googleplus\"><i class=\"fa fa-youtube\"></i></a></li>\r\n                        <li><a class=\"facebook\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<ng-template #template>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Coupon: <span>{{editObj.offerBox}}</span></h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-center\">\r\n        <span style=\"font-size: 1.5em;\">No code required</span><br><br>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"window.open(editObj.trackingLink)\">\r\n            Shop Now\r\n        </button>\r\n        <br>\r\n        <br>\r\n        <span>*No code required. Just click the above button to avail this deal</span>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.hide()\">Close</button>\r\n    </div>\r\n</ng-template>\r\n<ng-template #template2>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Coupon: <span>{{editObj.offerBox}}</span></h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-center\">\r\n        <span style=\"font-size: 1.5em;\">Here is the code</span><br><br>\r\n        <div class=\"template2\">\r\n            {{editObj.code}}\r\n        </div>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyClipboardFunc()\">\r\n            <span *ngIf=\"!codeCopied\">Copy code & Visit Store</span>\r\n            <span *ngIf=\"codeCopied\">Code Copied</span>\r\n        </button>\r\n        <br>\r\n        <br>\r\n        <span>Copy this code and paste it at checkout</span>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.hide()\">Close</button>\r\n    </div>\r\n</ng-template>\r\n<input id='copyfrom' [(ngModel)]=\"hiddenInput\" tabindex='-1' aria-hidden='true'>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/privacy/privacy.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/privacy/privacy.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mobile\">\r\n    <br>\r\n    <br>\r\n    <br>\r\n</div>\r\n<div class=\"jumbotron\">\r\n    <h1 class=\"display-4 text-center\">Privacy & Policy</h1>\r\n    <hr class=\"my-4\">\r\n    <p class=\"lead\" style=\"font-size: 1.45em !important;\">\r\n        A privacy policy is made to keep the records of personal information of the visitors of the site in order to\r\n        keep a check on the activities of the users so that a website can be more improved according to the requirements\r\n        of a customer.\r\n        <br>\r\n        <br>\r\n        We ensure all our customers that the personal information collected from them will be kept confidential and will\r\n        only be used in order to serve them and will not be share or sell to anyone.\r\n        <br>\r\n        <br>\r\n        Our website use cookies in order to improve your browsing experience, you can accept or dismiss by scrolling\r\n        down. You can discontinue the use of our site if you don’t agree with any terms found in this privacy policy.\r\n        <br>\r\n        <br>\r\n        We usually collects your general personal information such as your name, email address, contact number, your\r\n        address, passwords, your security data, payment information, your social media login data which can be further\r\n        used for authentication and account access if you make any purchases.\r\n        <br>\r\n        <br>\r\n        All the personal and payment details are well stored by our customer care center and are kept totally\r\n        confidential.\r\n        <br>\r\n        <br>\r\n        You are requested to provide us the correct information, and all the data provided by use should not be fake\r\n        otherwise a strict legal action might be taken from our website.\r\n        <br>\r\n        <br>\r\n        Each product bought from our website will have different criteria of shipment and we offer free shipping to most\r\n        of the cities and it would take 2-3 working days.\r\n    </p>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sitemap/sitemap.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sitemap/sitemap.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<br>\r\n<div class=\"alert alert-danger alert-dismissible fade show col-lg-8\" *ngIf=\"responseError\" role=\"alert\">\r\n    {{responseError}}\r\n    <button type=\"button\" class=\"close\" (click)=\"closeError()\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"container\">\r\n    <h1 class=\"display-4 text-center\">Site Links</h1>\r\n    <br>\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-3 col-sm-12\">\r\n            <p class=\"textSize\" [routerLink]=\"['/home']\">Home</p>\r\n        </div>\r\n        <div class=\"col-lg-3 col-sm-12\">\r\n            <p class=\"textSize\" [routerLink]=\"['/categories']\">Categories</p>\r\n        </div>\r\n        <div class=\"col-lg-3 col-sm-12\">\r\n            <p class=\"textSize\" [routerLink]=\"['/stores']\">Stores</p>\r\n        </div>\r\n        <div class=\"col-lg-3 col-sm-12\">\r\n            <p class=\"textSize\" [routerLink]=\"['/blogs']\">Blogs</p>\r\n        </div>\r\n        <div class=\"col-lg-3 col-sm-12\">\r\n            <p class=\"textSize\" [routerLink]=\"['/about']\">About</p>\r\n        </div>\r\n        <div class=\"col-lg-3 col-sm-12\">\r\n            <p class=\"textSize\" [routerLink]=\"['/privacy']\">Privacy</p>\r\n        </div>\r\n        <div class=\"col-lg-3 col-sm-12\">\r\n            <p class=\"textSize\" [routerLink]=\"['/termsandconditions']\">Terms & Conditions</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <h1 class=\"display-4 text-center\">Stores</h1>\r\n        <br>\r\n        <br>\r\n        <div class=\"row\" *ngIf=\"storesArray\">\r\n            <div class=\"col-lg-3 col-sm-12\" *ngFor=\"let que of queArr\" [hidden]=\"checkEmpty(que)\">\r\n                <div class=\"minHeight\">\r\n                    <h1>{{que | uppercase}}</h1>\r\n                    <br>\r\n                    <p [routerLink]=\"['/store', store.value.storeURL]\"\r\n                        *ngFor=\"let store of storesArray | keyvalue | orderby:que\" class=\"textSize\">\r\n                        {{store.value.name | slice:0:20}}</p>\r\n                </div>\r\n                <br>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <h1 class=\"display-4 text-center\">Blogs</h1>\r\n        <br>\r\n        <br>\r\n        <div class=\"row\" *ngIf=\"blogsArray\">\r\n            <div class=\"col-lg-6 col-sm-12\" *ngFor=\"let blog of blogsArray | keyvalue\"\r\n                [routerLink]=\"['/blog', blog.value.blogURL]\">\r\n                <p class=\"textSize\"><i class=\"icon-map\"></i>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;{{blog.value.title | slice:0:40}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/store/store.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/store/store.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mobile\">\r\n    <br>\r\n    <br>\r\n    <br>\r\n</div>\r\n<div class=\"jumbotron\"><a [routerLink]=\"['/home']\">Home/</a>\r\n    <a [routerLink]=\"['/stores']\">Stores/</a>\r\n    <a [routerLink]=\"['/store',storeURL]\">{{storeURLToShow}}/</a>\r\n    <h1 class=\"display-4 text-center\">{{storeName}}</h1>\r\n    <div class=\"lead\" style=\"font-size: 1.2em !important;\">\r\n        <div class=\"alert alert-danger alert-dismissible fade show col-lg-8\" *ngIf=\"responseError\" role=\"alert\">\r\n            {{responseError}}\r\n            <button type=\"button\" class=\"close\" (click)=\"closeError()\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <!-- <br> -->\r\n        <h1 class=\"display-4 text-center\">{{storeDate}}</h1>\r\n        <!-- <div class=\"col-md-8 text-center mx-auto\">\r\n            <span class=\"text-center xyz\">March 2020</span>\r\n        </div> -->\r\n        <!-- <div class=\"col-md-8 text-center mx-auto\">\r\n            <span [innerHTML]=\"storeDetail\" class=\"text-center xyz\"></span>\r\n        </div> -->\r\n        <div class=\"container\">\r\n            <ul class=\"tranding_select tabs\" style=\"background:transparent\">\r\n                <li class=\"tab\"><a class=\"waves-effect btn\" (click)=\"switch=false\"\r\n                        [ngClass]=\"{'active': !switch}\">Coupons</a></li>\r\n                <li class=\"tab\"><a class=\"waves-effect btn\" (click)=\"switch=true\" [ngClass]=\"{'active': switch}\">Related\r\n                        Stores</a></li>\r\n            </ul>\r\n            <br>\r\n            <div class=\"text-center m-5\" *ngIf=\"!couponsArray && isBusy\">\r\n                <div class=\"lds-facebook\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"!switch\">\r\n                <div class=\"col\">\r\n                    <section class=\"notifications_area\" *ngIf=\"couponsArray\">\r\n                        <div class=\"notifications\">\r\n                            <div class=\"hed_notic\">Active Coupons</div>\r\n                            <ul class=\"notifications_content follow\">\r\n                                <li *ngFor=\"let coupon of couponsArray | keyvalue | sortby\">\r\n                                    <a *ngIf=\"coupon.value.expDate > currentDate\">\r\n                                        <div class=\"media first_child\">\r\n                                            <img [src]=\"storePic\" style=\"position: relative;top:-10px\"\r\n                                                class=\"responsive-img\">\r\n                                            <div class=\"media_body\">\r\n                                                <p><b class=\"couponHead\">{{coupon.value.offerBox}}</b></p>\r\n                                                <h6><b>Expiry Date: </b>&nbsp;\r\n                                                    <span>{{coupon.value.expDate | date}}</span>\r\n                                                </h6>\r\n                                                <div class=\"btn_group\">\r\n                                                    <span class=\"waves-effect confirm\"\r\n                                                        (click)=\"openModal2(template2,coupon.value)\"\r\n                                                        *ngIf=\"!coupon.value.activeStatus\">\r\n                                                        Copy code & Visit Merchant</span>\r\n                                                    <span class=\"waves-effect confirm\"\r\n                                                        (click)=\"openModal(template,coupon.value)\"\r\n                                                        *ngIf=\"coupon.value.activeStatus\">\r\n                                                        Get Offer</span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"notifications\">\r\n                            <div class=\"hed_notic\">Expired Coupons</div>\r\n                            <ul class=\"notifications_content follow\">\r\n                                <li *ngFor=\"let coupon of couponsArray | keyvalue\">\r\n                                    <a *ngIf=\"currentDate > coupon.value.expDate\">\r\n                                        <div class=\"media first_child\">\r\n                                            <img [src]=\"storePic\" style=\"position: relative;top:-10px\"\r\n                                                class=\"responsive-img\">\r\n                                            <div class=\"media_body\" style=\"opacity: 0.45;\">\r\n                                                <p><b class=\"couponHead\">{{coupon.value.offerBox}}</b></p>\r\n                                                <h6><b>Expiry Date: </b>&nbsp;\r\n                                                    <span>{{coupon.value.expDate | date}}</span>\r\n                                                </h6>\r\n                                            </div>\r\n                                        </div>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </section>\r\n                    <br>\r\n                </div>\r\n                <div class=\"col-sm-12 col-lg-3\">\r\n                    <h4>About this Store</h4>\r\n                    <br>\r\n                    <span [innerHTML]=\"longDes\" class=\"xyz\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"switch\">\r\n                <div class=\"col\">\r\n                    <div class=\"row justify-content-md-center mb-0\">\r\n                        <div class=\"col-md-8 text-center mx-auto\" *ngIf=\"2>storeArray.length\">\r\n                            <span class=\"text-center xyz\"><br>No related stores....</span>\r\n                        </div>\r\n                        <ng-container *ngFor=\"let store of storeArray | keyvalue\">\r\n                            <div class=\"col-sm-12 col-lg-3 onlyThis\" *ngIf=\"store.value.storeURL != storeId\">\r\n                                <!-- <div class=\"brand-card\" (click)=\"loadAnotherStore(store.value.storeURL)\">\r\n                                    <div class=\"brand-card-header\">\r\n                                        <img src=\"{{store.value.img}}\" class=\"rounded-circle roundImg\" width=\"100\"\r\n                                            height=\"100\" />\r\n                                    </div>\r\n                                    <div class=\"brand-card-body\">\r\n                                        <div class=\"text-muted small\">{{store.value.name | slice:0:15}}</div>\r\n                                    </div>\r\n                                </div> -->\r\n                                <div class=\"card profile-card-1\" (click)=\"loadAnotherStore(store.value.storeURL)\">\r\n                                    <img src=\"../../assets/images/dback.jpeg\" alt=\"profile-sample1\"\r\n                                        class=\"background\" />\r\n                                    <img [src]=\"store.value.img\" alt=\"profile-image\" class=\"profile\" />\r\n                                    <div class=\"card-content\">\r\n                                        <h2>{{store.value.name | slice:0:10}}</h2>\r\n                                        <!-- <br>\r\n                                        <button type=\"button\" class=\"btn btn-outline-light btn-lg\"\r\n                                            style=\"padding: 30px auto 30px auto;\">Visit</button> -->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #template>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Coupon: <span>{{editObj.offerBox}}</span></h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-center\">\r\n        <span style=\"font-size: 1.5em;\">No code required</span><br><br>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"window.open(editObj.trackingLink)\">\r\n            Shop Now\r\n        </button>\r\n        <br>\r\n        <br>\r\n        <span>*No code required. Just click the above button to avail this deal</span>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.hide()\">Close</button>\r\n    </div>\r\n</ng-template>\r\n<ng-template #template2>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Coupon: <span>{{editObj.offerBox}}</span></h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-center\">\r\n        <span style=\"font-size: 1.5em;\">Here is the code</span><br><br>\r\n        <div class=\"template2\">\r\n            {{editObj.code}}\r\n        </div>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyClipboardFunc()\">\r\n            <span *ngIf=\"!codeCopied\">Copy code & Visit Store</span>\r\n            <span *ngIf=\"codeCopied\">Code Copied</span>\r\n        </button>\r\n        <br>\r\n        <br>\r\n        <span>Copy this code and paste it at checkout</span>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.hide()\">Close</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stores/stores.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stores/stores.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mobile\">\r\n    <br>\r\n    <br>\r\n    <br>\r\n</div>\r\n<div class=\"jumbotron\">\r\n    <a [routerLink]=\"['/home']\">Home/</a>\r\n    <a [routerLink]=\"['/stores']\">Stores/</a>\r\n    <h1 class=\"display-4 text-center\" *ngIf=\"storeArray\">BROWSE STORES FOR EXCITING DEALS</h1>\r\n    <hr class=\"my-4\" />\r\n    <div style=\"font-size: 1.2em !important;margin-top: 20px;\">\r\n        <div class=\"alert alert-danger alert-dismissible fade show col-lg-8\" *ngIf=\"responseError\" role=\"alert\">\r\n            {{responseError}}\r\n            <button type=\"button\" class=\"close\" (click)=\"closeError()\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"row justify-content-md-center mb-0 onlyThis\" [ngClass]=\"{'ifWeb': !mobile}\"\r\n            style=\"margin: auto 5px;\">\r\n            <div class=\"col-md-4\" *ngFor=\"let store of storeArray | keyvalue;index as i;\"\r\n                [routerLink]=\"['/store', store.value.storeURL]\">\r\n                <div class=\"card profile-card-1\" *ngIf=\"i%2!=0\">\r\n                    <img src=\"../../assets/images/dback.jpeg\" alt=\"profile-sample1\" class=\"background\" />\r\n                    <img [src]=\"store.value.img\" alt=\"profile-image\" class=\"profile\" />\r\n                    <div class=\"card-content\">\r\n                        <h2>{{store.value.name | slice:0:10}}<small>Store</small></h2>\r\n                        <br>\r\n                        <button type=\"button\" class=\"btn btn-outline-light btn-lg\"\r\n                            style=\"padding: 30px auto 30px auto;\">Visit</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card profile-card-3\" *ngIf=\"i%2==0\">\r\n                    <div class=\"background-block\">\r\n                        <img src=\"../../assets/images/aback2.jpeg\" alt=\"profile-sample1\" class=\"background\" />\r\n                    </div>\r\n                    <div class=\"profile-thumb-block\">\r\n                        <img [src]=\"store.value.img\" alt=\"profile-image\" class=\"profile\" />\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <h2>{{store.value.name}}<small>Store</small></h2>\r\n                        <br>\r\n                        <button type=\"button\" class=\"btn btn-outline-dark btn-lg\"\r\n                            style=\"padding: 30px auto 30px auto;\">Visit</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n\r\n\r\n            <!-- <div class=\"col-sm-12 col-lg-3 mainDiv\" *ngFor=\"let store of storeArray | keyvalue\"\r\n                [routerLink]=\"['/store', store.value.storeURL]\">\r\n                <div class=\"brand-card\">\r\n                    <div class=\"brand-card-header bg-linkedin\">\r\n                        <img [src]=\"store.value.img\" class=\"circle responsive-img\">\r\n                    </div>\r\n                    <div class=\"brand-card-body\">\r\n                        <div>\r\n                            <div class=\"text-value\">{{store.value.name}}</div>\r\n                            <br>\r\n                            <div class=\"text-muted storeDetail\" [innerHTML]=\"store.value.shortDes | slice:0:50\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n            <!-- <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"brand-card\">\r\n                    <div class=\"brand-card-header bg-google-plus\">\r\n                        <i class=\"fa fa-google-plus\"></i>\r\n                    </div>\r\n                    <div class=\"brand-card-body\">\r\n                        <div>\r\n                            <div class=\"text-value\">894</div>\r\n                            <div class=\"text-uppercase text-muted small\">followers</div>\r\n                        </div>\r\n                        <div>\r\n                            <div class=\"text-value\">92</div>\r\n                            <div class=\"text-uppercase text-muted small\">circles</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n        <section class=\"min_container min_pages\">\r\n            <div class=\"section_row\">\r\n\r\n                <!-- <div class=\"middle_section col mx-auto\">\r\n                    <div class=\"notifications read_latter\">\r\n                        <ul class=\"notifications_content\">\r\n                            <li *ngFor=\"let store of storeArray | keyvalue\"\r\n                                [routerLink]=\"['/store', store.value.storeURL]\">\r\n                                <div class=\"media first_child\">\r\n                                    <img [src]=\"store.value.img\" class=\"circle responsive-img\">\r\n                                    <div class=\"media_body\">\r\n                                        <p>{{store.value.name}}</p>\r\n                                        <h6 [innerHTML]=\"store.value.shortDes\"></h6>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div> -->\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"text-center m-5\" *ngIf=\"isLoading\">\r\n        <div class=\"lds-facebook\">\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/terms/terms.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/terms/terms.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mobile\">\r\n    <br>\r\n    <br>\r\n    <br>\r\n</div>\r\n<div class=\"jumbotron\">\r\n    <h1 class=\"display-4 text-center\">Terms & Conditions</h1>\r\n    <hr class=\"my-4\">\r\n    <p class=\"lead\" style=\"font-size: 1.45em !important;\">\r\n        We request all of our customers and users of this website to please read carefully our terms and conditions\r\n        thoroughly before shopping from our website in order to enjoy stress free shopping experience.\r\n        <br>\r\n        <br>\r\n        We urge our users to agree our guidelines and other useful sections in order to access our website.\r\n        <br>\r\n        <br>\r\n        We welcome different stores to our website to showcase their brands and for this they provide us their best\r\n        discount deals and promo codes.\r\n        <br>\r\n        <br>\r\n        All the logos, pictures, data and content available on our website is totally our property and nobody has given\r\n        any right to copy our website’s content, a strict legal lawful action would be taken if we found such activity,\r\n        as all of our data is completely our property and is protected by copyright law.\r\n        <br>\r\n        <br>\r\n        You will might get connected to the other website so please ensure to read the terms and conditions of that\r\n        website before making any purchase as we work only as a third party and have no right to disclaim their\r\n        policies.\r\n        <br>\r\n        <br>\r\n        We have right to terminate and discontinue any user if we found him/her abusive or at our sole discretion.\r\n        <br>\r\n        <br>\r\n        We can discontinue or dismiss any voucher at any time without providing prior notice.\r\n        <br>\r\n        <br>\r\n        We inform all our users that we are not responsible for any of the website you link to and the user of the\r\n        website is responsible to agree or disagree their terms and conditions.\r\n        <br>\r\n        <br>\r\n        All the users using this website must be 18 years or above or else the website should be used under adult\r\n        supervision.\r\n        <br>\r\n        <br>\r\n        Our online customer helpline service is available 24/7 and if you have any queries you can contact us anytime.\r\n        <br>\r\n        <br>\r\n        Have a fun filled shopping experience.\r\n        <br>\r\n        <br>\r\n        Regards,\r\n        <br>\r\n        <br>\r\n        <a href=\"https://www.buymedeal.com\">WwW.BuyMeDeal.CoM</a>\r\n    </p>\r\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: #28BAA2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXERhbmlzaCB3b3JrXFxCdXlNZURlYWxcXEJ1eU1lRGVhbC1GUk9OVC9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiMyOEJBQTJcclxufSIsImEge1xuICBjb2xvcjogIzI4QkFBMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(titleService) {
        this.titleService = titleService;
        this.mobile = false;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("About");
        if (window.screen.width < 400)
            this.mobile = true;
    };
    AboutComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
    ]; };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.scss":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  font-size: 1.3em;\n  color: #28BAA2;\n}\n\na:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9EOlxcRGFuaXNoIHdvcmtcXEJ1eU1lRGVhbFxcQnV5TWVEZWFsLUZST05UL3NyY1xcYXBwXFxibG9nXFxibG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLDBCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGNvbG9yOiMyOEJBQTJcclxufVxyXG5hOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn0iLCJhIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICMyOEJBQTI7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var BlogComponent = /** @class */ (function () {
    function BlogComponent(route, _dataService, titleService) {
        this.route = route;
        this._dataService = _dataService;
        this.titleService = titleService;
        this.responseError = "";
        this.blogNode = null;
        this.isFetching = false;
        this.blogURL = "";
        this.mobile = false;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.screen.width < 400)
            this.mobile = true;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.blogURL = paramMap.get('id');
            _this.loadBlog(_this.blogURL);
            _this._dataService.postAPI("/userDisplay/increaseBlogViews", { id: _this.blogURL }).subscribe(function (res) { });
        });
    };
    BlogComponent.prototype.loadBlog = function (id) {
        var _this = this;
        this.isFetching = true;
        this._dataService.fetchWithQuery("/userDisplay/fetchSingleBlog", id).subscribe(function (res) {
            if (res.data) {
                _this.blogNode = res.data['0'];
                _this.titleService.setTitle(res.data['0']['title']);
                _this.isFetching = false;
            }
            else
                _this.errorHandler(res.message);
        });
    };
    BlogComponent.prototype.errorHandler = function (err) {
        this.isFetching = false;
        this.responseError = err;
        window.scrollTo(0, 0);
    };
    BlogComponent.prototype.closeError = function () { this.responseError = ""; };
    BlogComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
    ]; };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/blog/blog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/blogs/blogs.component.scss":
/*!********************************************!*\
  !*** ./src/app/blogs/blogs.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%;\n}\n\n.container {\n  max-width: 100%;\n}\n\n.blogTxt {\n  font-size: 1.2em;\n}\n\na:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\na {\n  color: #28BAA2;\n}\n\nb {\n  font-size: 1.1em;\n}\n\n.jumbotron > a {\n  font-size: 1.3em !important;\n}\n\nbutton.btn-outline-primary {\n  border-color: #28BAA2 !important;\n  color: #28BAA2 !important;\n}\n\nbutton.btn-outline-primary:hover {\n  background-color: #28BAA2 !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZ3MvRDpcXERhbmlzaCB3b3JrXFxCdXlNZURlYWxcXEJ1eU1lRGVhbC1GUk9OVC9zcmNcXGFwcFxcYmxvZ3NcXGJsb2dzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9ncy9ibG9ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFJLFdBQUE7QUNFSjs7QURGZTtFQUFXLGVBQUE7QUNNMUI7O0FETnlDO0VBQVMsZ0JBQUE7QUNVbEQ7O0FEVmtFO0VBQVEsZUFBQTtFQUFlLDBCQUFBO0FDZXpGOztBRGZvSDtFQUFFLGNBQUE7QUNtQnRIOztBRG5Cb0k7RUFBRSxnQkFBQTtBQ3VCdEk7O0FEdkJzSjtFQUFhLDJCQUFBO0FDMkJuSzs7QUQzQjZMO0VBQTJCLGdDQUFBO0VBQStCLHlCQUFBO0FDZ0N2UDs7QURoQytRO0VBQWlDLG9DQUFBO0VBQW1DLHNCQUFBO0FDcUNuViIsImZpbGUiOiJzcmMvYXBwL2Jsb2dzL2Jsb2dzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne3dpZHRoOjEwMCV9LmNvbnRhaW5lcnttYXgtd2lkdGg6MTAwJX0uYmxvZ1R4dHtmb250LXNpemU6MS4yZW19YTpob3ZlcntjdXJzb3I6cG9pbnRlcjt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZX1he2NvbG9yOiMyOEJBQTJ9Yntmb250LXNpemU6MS4xZW19Lmp1bWJvdHJvbj5he2ZvbnQtc2l6ZToxLjNlbSFpbXBvcnRhbnR9YnV0dG9uLmJ0bi1vdXRsaW5lLXByaW1hcnl7Ym9yZGVyLWNvbG9yOiMyOEJBQTIhaW1wb3J0YW50O2NvbG9yOiMyOEJBQTIhaW1wb3J0YW50fWJ1dHRvbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVye2JhY2tncm91bmQtY29sb3I6IzI4QkFBMiFpbXBvcnRhbnQ7Y29sb3I6I2ZmZiFpbXBvcnRhbnR9IiwiaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5ibG9nVHh0IHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmEge1xuICBjb2xvcjogIzI4QkFBMjtcbn1cblxuYiB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi5qdW1ib3Ryb24gPiBhIHtcbiAgZm9udC1zaXplOiAxLjNlbSAhaW1wb3J0YW50O1xufVxuXG5idXR0b24uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gIGJvcmRlci1jb2xvcjogIzI4QkFBMiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzI4QkFBMiAhaW1wb3J0YW50O1xufVxuXG5idXR0b24uYnRuLW91dGxpbmUtcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOEJBQTIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/blogs/blogs.component.ts":
/*!******************************************!*\
  !*** ./src/app/blogs/blogs.component.ts ***!
  \******************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var BlogsComponent = /** @class */ (function () {
    function BlogsComponent(_dataService, titleService, toastr) {
        this._dataService = _dataService;
        this.titleService = titleService;
        this.toastr = toastr;
        this.blogsArr = [];
        this.skipNo = 0;
        this.isFetching = false;
        this.limitVar = 980;
        this.mobile = false;
    }
    BlogsComponent.prototype.ngOnInit = function () {
        if (window.screen.width < 400)
            this.mobile = true;
        this.fetchBlogs();
        this.titleService.setTitle("Blogs");
    };
    BlogsComponent.prototype.fetchBlogs = function () {
        var _this = this;
        this.isFetching = true;
        this._dataService.fetchAPIWithLimit("/userDisplay/fetchBlogsWithLimit", 6, "", this.skipNo).subscribe(function (res) {
            if (res.data) {
                //this.blogsArr = { ...this.blogsArr, ...res.data };
                _this.blogsArr = _this.blogsArr.concat(res.data);
                _this.blogsArr = res.data;
                _this.isFetching = false;
            }
            else {
                _this.errorHandler(res.message);
                _this.isFetching = false;
                if (_this.skipNo)
                    _this.skipNo -= 6;
            }
        });
    };
    BlogsComponent.prototype.loadNext = function () {
        if (this.isFetching)
            return;
        this.skipNo += 6;
        this.fetchBlogs();
    };
    BlogsComponent.prototype.loadPrev = function () {
        if (!this.skipNo) {
            this.errorHandler("No more previous data exist");
            return;
        }
        if (this.isFetching)
            return;
        this.skipNo -= 6;
        this.fetchBlogs();
    };
    BlogsComponent.prototype.errorHandler = function (err) {
        this.toastr.error(err, 'Error');
        window.scrollTo(0, 0);
    };
    BlogsComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    BlogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! raw-loader!./blogs.component.html */ "./node_modules/raw-loader/index.js!./src/app/blogs/blogs.component.html"),
            styles: [__webpack_require__(/*! ./blogs.component.scss */ "./src/app/blogs/blogs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.scss":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover {\n  color: #28BAA2;\n  text-decoration: underline;\n  font-size: 1.4em;\n}\n\na {\n  font-size: 1.35em;\n  color: #28BAA2;\n}\n\n.jumbotron > a {\n  font-size: 1.3em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9EOlxcRGFuaXNoIHdvcmtcXEJ1eU1lRGVhbFxcQnV5TWVEZWFsLUZST05UL3NyY1xcYXBwXFxjYXRlZ29yaWVzXFxjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSSwyQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpob3ZlcntcclxuICAgIGNvbG9yOiMyOEJBQTI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtc2l6ZToxLjRlbVxyXG59XHJcbmF7XHJcbiAgICBmb250LXNpemU6IDEuMzVlbTtcclxuICAgIGNvbG9yOiMyOEJBQTJcclxufVxyXG4uanVtYm90cm9uID4gYXtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW0gIWltcG9ydGFudDtcclxufSIsImE6aG92ZXIge1xuICBjb2xvcjogIzI4QkFBMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cbmEge1xuICBmb250LXNpemU6IDEuMzVlbTtcbiAgY29sb3I6ICMyOEJBQTI7XG59XG5cbi5qdW1ib3Ryb24gPiBhIHtcbiAgZm9udC1zaXplOiAxLjNlbSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(_dataService, titleService) {
        this._dataService = _dataService;
        this.titleService = titleService;
        this.responseError = "";
        this.categoryArr = null;
        this.isLoading = false;
        this.mobile = false;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.screen.width < 400)
            this.mobile = true;
        this.titleService.setTitle("Categories");
        this.isLoading = true;
        this._dataService.fetchAPI("/userDisplay/fetchCategories").subscribe(function (res) {
            if (res.data) {
                _this.categoryArr = res.data;
                _this.isLoading = false;
            }
            else
                _this.errorHandler(res.message);
        });
    };
    CategoriesComponent.prototype.errorHandler = function (err) {
        this.isLoading = false;
        this.responseError = err;
        window.scrollTo(0, 0);
    };
    CategoriesComponent.prototype.closeError = function () { this.responseError = ""; };
    CategoriesComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/categories/categories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/category/category.component.scss":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customSize {\n  font-size: 1.02em;\n}\n\n.brand-card-header {\n  height: 4.5rem;\n}\n\n.storeArrr:hover {\n  cursor: pointer;\n}\n\na {\n  font-size: 1.3em;\n  color: #28BAA2;\n}\n\na:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvRDpcXERhbmlzaCB3b3JrXFxCdXlNZURlYWxcXEJ1eU1lRGVhbC1GUk9OVC9zcmNcXGFwcFxcY2F0ZWdvcnlcXGNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLDBCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21TaXple1xyXG4gICAgZm9udC1zaXplOiAxLjAyZW07XHJcbn1cclxuLmJyYW5kLWNhcmQtaGVhZGVye1xyXG4gICAgaGVpZ2h0OjQuNXJlbVxyXG59XHJcbi5zdG9yZUFycnI6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYXtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBjb2xvcjojMjhCQUEyXHJcbn1cclxuYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59IiwiLmN1c3RvbVNpemUge1xuICBmb250LXNpemU6IDEuMDJlbTtcbn1cblxuLmJyYW5kLWNhcmQtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0LjVyZW07XG59XG5cbi5zdG9yZUFycnI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmEge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogIzI4QkFBMjtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(_dataService, route, titleService) {
        this._dataService = _dataService;
        this.route = route;
        this.titleService = titleService;
        this.responseError = "";
        this.categoryArr = null;
        this.selectCat = null;
        this.selectedCat = null;
        this.selectedCatURL = "";
        this.storeArr = null;
        this.jug = 0;
        this.isLoading = false;
        this.mobile = false;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.screen.width < 400)
            this.mobile = true;
        var _self = this;
        this.route.paramMap.subscribe(function (paramMap) {
            var abc = paramMap.get('id');
            _this._dataService.fetchAPI("/userDisplay/fetchCategories").subscribe(function (res) {
                if (res.data) {
                    _this.categoryArr = res.data;
                    if (abc) {
                        _this.selectedCatURL = abc;
                        _this.jug = 1;
                        var xyz = Object.values(_this.categoryArr);
                        xyz.every(function (val) {
                            if (val["categoryURL"] == abc) {
                                _self.loadStores(val["_id"], 2);
                                return false;
                            }
                            return true;
                        });
                    }
                }
                else
                    console.log(res.message);
            });
        });
    };
    CategoryComponent.prototype.secondaryFunc = function (abc, que) {
        var _self = this;
        var xyz = Object.values(this.categoryArr);
        var xxx;
        xyz.forEach(function (val) {
            if (val["_id"] == abc) {
                xxx = val["name"];
                if (que)
                    _self.selectedCatURL = val['categoryURL'];
            }
        });
        this.selectedCat = xxx;
        this.titleService.setTitle(xxx);
    };
    CategoryComponent.prototype.loadStores = function (id, que) {
        var _this = this;
        this.storeArr = null;
        if (this.isLoading)
            return;
        if (!this.jug) {
            this.jug = 1;
            return;
        }
        if (!que)
            this.secondaryFunc(id, 2);
        else
            this.secondaryFunc(id);
        this.isLoading = true;
        this._dataService.fetchWithQuery("/userDisplay/fetchStores", id).subscribe(function (res) {
            if (res.data) {
                _this.storeArr = res.data;
                _this.isLoading = false;
            }
            else
                _this.errorHandler(res.message);
        });
    };
    CategoryComponent.prototype.errorHandler = function (err) {
        this.isLoading = false;
        this.responseError = err;
        window.scrollTo(0, 0);
    };
    CategoryComponent.prototype.closeError = function () { this.responseError = ""; };
    CategoryComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
    ]; };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/index.js!./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/category/category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700\");\n.imgTh {\n  border: 8px solid #28BAA2;\n  padding: 5px;\n}\ntd {\n  font-size: 1.3em;\n}\n.brand-card-header {\n  height: auto !important;\n}\n.roundImg {\n  margin-top: 10px;\n}\n.storeIcon {\n  font-size: 1.4em;\n}\n.dealsHead {\n  font-weight: 400 !important;\n  color: #789aaf !important;\n  font-size: 1.4em !important;\n}\n.visitBtn {\n  width: 40px !important;\n  height: 40px !important;\n  line-height: 40px !important;\n}\n.btn_floating:hover {\n  cursor: pointer !important;\n}\n.dealCard {\n  margin: 0 !important;\n}\n.interests {\n  padding-top: 0 !important;\n}\n.right_sidebar_iner {\n  padding-top: 15px !important;\n}\n.display-4 {\n  font-size: 3.2em;\n}\n.height87 {\n  height: 88vh;\n}\n.manAvatar {\n  width: 50px;\n  height: 50px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50%;\n  margin-left: 10px;\n}\n.customImgRound {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin: 0 auto;\n  -ms-interpolation-mode: nearest-neighbor;\n      image-rendering: -moz-crisp-edges;\n      image-rendering: pixelated;\n}\n.avatar {\n  width: 42px !important;\n  height: 42px !important;\n}\n.visitCoupon:hover {\n  cursor: pointer;\n}\n.modal-header {\n  background-color: #20a8d8 !important;\n  color: #fff !important;\n}\n.template2 {\n  width: 100%;\n  height: 50px;\n  background-color: #40e0d0;\n  border: 2px dashed #fff;\n  font-size: 1.5em;\n  color: #fff;\n  padding-top: 9px;\n  margin: 5px auto;\n}\n#copyfrom {\n  position: absolute;\n  left: -9999px;\n}\n.popular_item:hover {\n  cursor: pointer;\n}\n.blogImg {\n  width: 100%;\n  height: 100%;\n}\n.changeFlex {\n  display: block !important;\n}\n.changeFlex a {\n  color: #28BAA2;\n  font-size: 1.25em;\n  margin-right: 20px;\n  letter-spacing: 0.05em;\n}\n.changeFlex a:hover {\n  color: #25cbb0;\n}\n.blogTitle {\n  font-weight: lighter;\n  margin: auto 10px;\n  margin-top: -20px;\n  border: none !important;\n}\n.blogText {\n  font-size: 1.3em;\n  font-weight: 300;\n  margin: auto 15px;\n  border: none !important;\n}\n.author {\n  font-size: 1.3em;\n  font-weight: lighter;\n  border: none !important;\n}\n.col-sm-12,\n.col-sm-6 {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n.applyMargin {\n  margin: auto 17px;\n}\nb {\n  vertical-align: middle;\n}\nb > i {\n  font-weight: 900;\n}\nul.interests_list li:hover {\n  cursor: pointer;\n}\n.social_icon li:hover {\n  cursor: pointer;\n}\nbody {\n  font-family: \"Open Sans\", sans-serif;\n}\n*:hover {\n  transition: all 1s ease;\n}\nsection {\n  float: left;\n  width: 100%;\n  background: #fff;\n  /* fallback for old browsers */\n  padding: 30px 0;\n}\nh1 {\n  float: left;\n  width: 100%;\n  color: #232323;\n  margin-bottom: 30px;\n  font-size: 14px;\n}\nh1 span {\n  font-family: \"Libre Baskerville\", serif;\n  display: block;\n  font-size: 45px;\n  text-transform: none;\n  margin-bottom: 20px;\n  margin-top: 30px;\n  font-weight: 700;\n}\nh1 a {\n  color: #131313;\n  font-weight: bold;\n}\n/*Profile Card 1*/\n.profile-card-1 {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  position: relative;\n  float: left;\n  overflow: hidden;\n  width: 100%;\n  color: #ffffff;\n  text-align: center;\n  height: 368px;\n  border: none;\n}\n.profile-card-1 .background {\n  width: 100%;\n  vertical-align: top;\n  opacity: 0.9;\n  -webkit-filter: blur(5px);\n  filter: blur(5px);\n  -webkit-transform: scale(1.8);\n  transform: scale(2.8);\n}\n.profile-card-1 .card-content {\n  width: 100%;\n  padding: 15px 25px;\n  position: absolute;\n  left: 0;\n  top: 50%;\n}\n.profile-card-1 .profile {\n  border-radius: 50%;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  max-width: 100px;\n  opacity: 1;\n  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);\n  border: 2px solid white;\n  -webkit-transform: translate(-50%, 0%);\n  transform: translate(-50%, 0%);\n}\n.profile-card-1 h2 {\n  margin: 0 0 5px;\n  font-weight: 600;\n  font-size: 25px;\n}\n.profile-card-1 h2 small {\n  display: block;\n  font-size: 15px;\n  margin-top: 10px;\n}\n.profile-card-1 i {\n  display: inline-block;\n  font-size: 16px;\n  color: #ffffff;\n  text-align: center;\n  border: 1px solid #fff;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 50%;\n  margin: 0 5px;\n}\n.profile-card-1 .icon-block {\n  float: left;\n  width: 100%;\n  margin-top: 15px;\n}\n.profile-card-1 .icon-block a {\n  text-decoration: none;\n}\n.profile-card-1 i:hover {\n  background-color: #fff;\n  color: #2E3434;\n  text-decoration: none;\n}\n/*Profile Card 3*/\n.profile-card-3 {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  position: relative;\n  float: left;\n  overflow: hidden;\n  width: 100%;\n  text-align: center;\n  height: 368px;\n  border: none;\n}\n.profile-card-3 .background-block {\n  float: left;\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n}\n.profile-card-3 .background-block .background {\n  width: 70%;\n  vertical-align: top;\n  opacity: 0.9;\n  -webkit-filter: blur(0.5px);\n  filter: blur(0.5px);\n  -webkit-transform: scale(1.8);\n  transform: scale(2.8);\n}\n.profile-card-3 .card-content {\n  width: 100%;\n  padding: 15px 25px;\n  color: #232323;\n  float: left;\n  background: #efefef;\n  height: 50%;\n  border-radius: 0 0 5px 5px;\n  position: relative;\n  z-index: 3;\n}\n.profile-card-3 .card-content::before {\n  content: \"\";\n  background: #efefef;\n  width: 120%;\n  height: 100%;\n  left: 11px;\n  bottom: 51px;\n  position: absolute;\n  z-index: -1;\n  -webkit-transform: rotate(-13deg);\n          transform: rotate(-13deg);\n}\n.profile-card-3 .profile {\n  border-radius: 50%;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  max-width: 100px;\n  opacity: 1;\n  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);\n  border: 2px solid white;\n  -webkit-transform: translate(-50%, 0%);\n  transform: translate(-50%, 0%);\n  z-index: 4;\n}\n.profile-card-3 h2 {\n  margin: 0 0 5px;\n  font-weight: 600;\n  font-size: 25px;\n}\n.profile-card-3 h2 small {\n  display: block;\n  font-size: 15px;\n  margin-top: 10px;\n}\n.profile-card-3 i {\n  display: inline-block;\n  font-size: 16px;\n  color: #232323;\n  text-align: center;\n  border: 1px solid #232323;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 50%;\n  margin: 0 5px;\n}\n.profile-card-3 .icon-block {\n  float: left;\n  width: 100%;\n  margin-top: 15px;\n}\n.profile-card-3 .icon-block a {\n  text-decoration: none;\n}\n.profile-card-3 i:hover {\n  background-color: #232323;\n  color: #fff;\n  text-decoration: none;\n}\n.card {\n  border-radius: 4em;\n}\n.ifWeb {\n  margin: auto 100px !important;\n}\n.xxzz {\n  /* ============ Card Table ============ */\n  /* ============ Text Color ============ */\n}\n.xxzz .card {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  border-radius: 2rem;\n  overflow: hidden;\n  margin-bottom: 30px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.xxzz .card-body {\n  padding: 0.5rem;\n}\n.xxzz .card .ftr {\n  margin-top: 15px;\n}\n.xxzz .card .ftr div {\n  display: inline-block;\n}\n.xxzz .card .ftr .author {\n  color: #888;\n}\n.xxzz .card .ftr .stats {\n  float: right;\n  line-height: 30px;\n  color: #28baa2;\n}\n.xxzz .card .ftr .stats {\n  position: relative;\n  top: 4px;\n  font-size: 18px;\n}\n.xxzz .table {\n  margin-bottom: 0px;\n}\n.xxzz .card .table {\n  padding: 15px 30px;\n}\n.xxzz .card .table-danger {\n  background: linear-gradient(60deg, #ef5350, #d32f2f);\n}\n.xxzz .card [class*=table-] {\n  color: #FFFFFF;\n  border-radius: 6px;\n}\n.xxzz .card [class*=table-] .icon i {\n  border-color: rgba(255, 255, 255, 0.25);\n}\n.xxzz .card [class*=table-] .ftr .stats,\n.xxzz .card [class*=table-] .author a:hover,\n.xxzz .card [class*=table-] .author a:focus,\n.xxzz .card [class*=table-] .author a:active {\n  color: #FFFFFF;\n}\n.xxzz .text-danger {\n  color: #f44336;\n}\n.xxzz h4, .xxzz h6 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 300;\n  line-height: 1.5em;\n}\n.xxzz a {\n  color: #9c27b0;\n  text-decoration: none;\n}\n.xxzz a:hover {\n  color: #9c27b0;\n  text-decoration: underline;\n}\n.xxzz h4 {\n  font-size: 1.3em;\n  line-height: 1.55em;\n}\n.xxzz h6 {\n  font-weight: 100;\n  font-size: 1.75em;\n  color: #28baa2;\n  text-decoration: underline;\n}\n.xxzz .card [class*=table-] .card-caption a,\n.xxzz .card [class*=table-] .card-caption,\n.xxzz .card [class*=table-] .icon i {\n  color: #FFFFFF;\n}\n.xxzz .card-caption,\n.xxzz .card-caption a {\n  color: #333;\n  text-decoration: none;\n}\n.xxzz .card-caption {\n  font-weight: 700;\n  font-family: \"Roboto Slab\", \"Times New Roman\", serif;\n  font-size: 1.75em;\n}\n.xxzz .userNm {\n  margin-left: 15px;\n  font-size: 1.2em;\n  text-transform: capitalize;\n}\n@media (min-width: 250px) and (max-width: 900px) {\n  .onlyL, .stats {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcRGFuaXNoIHdvcmtcXEJ1eU1lRGVhbFxcQnV5TWVEZWFsLUZST05UL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0xRLDBGQUFBO0FBQ0EsZ0ZBQUE7QUFDQSxnRkFBQTtBQXhMUjtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0lKO0FEREE7RUFDSSxnQkFBQTtBQ0lKO0FEREE7RUFDSSx1QkFBQTtBQ0lKO0FEREE7RUFDSSxnQkFBQTtBQ0lKO0FEREE7RUFDSSxnQkFBQTtBQ0lKO0FEREE7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUNJSjtBRERBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FDSUo7QUREQTtFQUNJLDBCQUFBO0FDSUo7QUREQTtFQUNJLG9CQUFBO0FDSUo7QUREQTtFQUNJLHlCQUFBO0FDSUo7QUREQTtFQUNJLDRCQUFBO0FDSUo7QUREQTtFQUNJLGdCQUFBO0FDSUo7QUREQTtFQUNJLFlBQUE7QUNJSjtBRERBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0lKO0FEREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7TUFBQSxpQ0FBQTtNQUFBLDBCQUFBO0FDSUo7QUREQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUNJSjtBRERBO0VBQ0ksZUFBQTtBQ0lKO0FEREE7RUFDSSxvQ0FBQTtFQUNBLHNCQUFBO0FDSUo7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNJSjtBRERBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDSUo7QUREQTtFQUNJLGVBQUE7QUNJSjtBRERBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNJSjtBRERBO0VBQ0kseUJBQUE7QUNJSjtBRERBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0lKO0FEREE7RUFDSSxjQUFBO0FDSUo7QUREQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDSUo7QUREQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDSUo7QUREQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ0lKO0FEREE7O0VBRUksMEJBQUE7RUFDQSwyQkFBQTtBQ0lKO0FERkE7RUFDSSxpQkFBQTtBQ0tKO0FESEE7RUFDSSxzQkFBQTtBQ01KO0FESkE7RUFDSSxnQkFBQTtBQ09KO0FETEE7RUFDSSxlQUFBO0FDUUo7QUROQTtFQUNJLGVBQUE7QUNTSjtBRFVBO0VBQ0ksb0NBQUE7QUNQSjtBRFNBO0VBRUksdUJBQUE7QUNOSjtBRFFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUFtQiw4QkFBQTtFQUNuQixlQUFBO0FDSko7QURNQTtFQUFHLFdBQUE7RUFBWSxXQUFBO0VBQVksY0FBQTtFQUFlLG1CQUFBO0VBQW9CLGVBQUE7QUNFOUQ7QUREQTtFQUFRLHVDQUFBO0VBQXlDLGNBQUE7RUFBZSxlQUFBO0VBQWdCLG9CQUFBO0VBQXFCLG1CQUFBO0VBQW9CLGdCQUFBO0VBQWlCLGdCQUFBO0FDVzFJO0FEVkE7RUFBSyxjQUFBO0VBQWUsaUJBQUE7QUNlcEI7QURiQSxpQkFBQTtBQUNBO0VBQ0UsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ2dCRjtBRGRBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQyw2QkFBQTtFQUNELHFCQUFBO0FDaUJGO0FEZkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDa0JGO0FEaEJBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7QUNtQkY7QURqQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDb0JGO0FEbEJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3FCRjtBRG5CQTtFQUNFLHFCQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ3NCSjtBRHBCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN1Qko7QURyQkE7RUFDSSxxQkFBQTtBQ3dCSjtBRHRCQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDeUJGO0FEdEJBLGlCQUFBO0FBQ0E7RUFDRSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUN5QkY7QUR2QkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQzBCSjtBRHhCQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0MsNkJBQUE7RUFDRCxxQkFBQTtBQzJCRjtBRHpCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUM0QkY7QUQxQkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQzZCSjtBRDNCQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQzhCRjtBRDVCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUMrQkY7QUQ3QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDZ0NGO0FEOUJBO0VBQ0UscUJBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDaUNKO0FEL0JBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2tDSjtBRGhDQTtFQUNJLHFCQUFBO0FDbUNKO0FEakNBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNvQ0Y7QURqQ0E7RUFDSSxrQkFBQTtBQ29DSjtBRGxDQTtFQUNJLDZCQUFBO0FDcUNKO0FEbENBO0VBd0NJLHlDQUFBO0VBd0JBLHlDQUFBO0FDekJKO0FEdENJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0dBQUE7QUN3Q1I7QUR0Q0k7RUFDSSxlQUFBO0FDd0NSO0FEdENJO0VBQ0ksZ0JBQUE7QUN3Q1I7QURyQ0k7RUFDSSxxQkFBQTtBQ3VDUjtBRHBDSTtFQUNJLFdBQUE7QUNzQ1I7QURuQ0k7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDcUNSO0FEbENJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ29DUjtBRC9CSTtFQUNJLGtCQUFBO0FDaUNSO0FEL0JJO0VBQ0ksa0JBQUE7QUNpQ1I7QUQvQkk7RUFDSSxvREFBQTtBQ2lDUjtBRC9CSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ2lDUjtBRC9CSTtFQUNJLHVDQUFBO0FDaUNSO0FEL0JJOzs7O0VBSUksY0FBQTtBQ2lDUjtBRDVCSTtFQUNJLGNBQUE7QUM4QlI7QUQzQkU7RUFDTSx1REFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUM2QlI7QUQxQkk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUM0QlI7QUR6Qkk7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUMyQlI7QUR6Qkk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDMkJSO0FEekJJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQzJCUjtBRHpCSTs7O0VBR0ksY0FBQTtBQzJCUjtBRHpCSTs7RUFFQSxXQUFBO0VBQ0EscUJBQUE7QUMyQko7QUR6Qkk7RUFDSSxnQkFBQTtFQUNBLG9EQUFBO0VBQ0EsaUJBQUE7QUMyQlI7QUR6Qkk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUMyQlI7QUR4QkE7RUFFSTtJQUVJLHdCQUFBO0VDeUJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nVGgge1xyXG4gICAgYm9yZGVyOiA4cHggc29saWQgIzI4QkFBMjtcclxuICAgIHBhZGRpbmc6IDVweFxyXG59XHJcblxyXG50ZCB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtXHJcbn1cclxuXHJcbi5icmFuZC1jYXJkLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IGF1dG8haW1wb3J0YW50XHJcbn1cclxuXHJcbi5yb3VuZEltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbn1cclxuXHJcbi5zdG9yZUljb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbVxyXG59XHJcblxyXG4uZGVhbHNIZWFkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM3ODlhYWYhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjRlbSFpbXBvcnRhbnRcclxufVxyXG5cclxuLnZpc2l0QnRuIHtcclxuICAgIHdpZHRoOiA0MHB4IWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDBweCFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweCFpbXBvcnRhbnRcclxufVxyXG5cclxuLmJ0bl9mbG9hdGluZzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5kZWFsQ2FyZCB7XHJcbiAgICBtYXJnaW46IDAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5pbnRlcmVzdHMge1xyXG4gICAgcGFkZGluZy10b3A6IDAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5yaWdodF9zaWRlYmFyX2luZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHghaW1wb3J0YW50XHJcbn1cclxuXHJcbi5kaXNwbGF5LTQge1xyXG4gICAgZm9udC1zaXplOiAzLjJlbVxyXG59XHJcblxyXG4uaGVpZ2h0ODcge1xyXG4gICAgaGVpZ2h0OiA4OHZoXHJcbn1cclxuXHJcbi5tYW5BdmF0YXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHhcclxufVxyXG5cclxuLmN1c3RvbUltZ1JvdW5kIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIHdpZHRoOiA0MnB4IWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDJweCFpbXBvcnRhbnRcclxufVxyXG5cclxuLnZpc2l0Q291cG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGE4ZDghaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmYhaW1wb3J0YW50XHJcbn1cclxuXHJcbi50ZW1wbGF0ZTIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBlMGQwO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLXRvcDogOXB4O1xyXG4gICAgbWFyZ2luOiA1cHggYXV0b1xyXG59XHJcblxyXG4jY29weWZyb20ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTk5OTlweFxyXG59XHJcblxyXG4ucG9wdWxhcl9pdGVtOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uYmxvZ0ltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG4uY2hhbmdlRmxleCB7XHJcbiAgICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnRcclxufVxyXG5cclxuLmNoYW5nZUZsZXggYSB7XHJcbiAgICBjb2xvcjogIzI4QkFBMjtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNWVtXHJcbn1cclxuXHJcbi5jaGFuZ2VGbGV4IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMyNWNiYjBcclxufVxyXG5cclxuLmJsb2dUaXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5ibG9nVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogYXV0byAxNXB4O1xyXG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudFxyXG59XHJcblxyXG4uYXV0aG9yIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmNvbC1zbS0xMixcclxuLmNvbC1zbS02IHtcclxuICAgIHBhZGRpbmctbGVmdDogMCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwIWltcG9ydGFudFxyXG59XHJcbi5hcHBseU1hcmdpbiB7XHJcbiAgICBtYXJnaW46IGF1dG8gMTdweFxyXG59XHJcbmJ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbmI+aXtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxudWwuaW50ZXJlc3RzX2xpc3QgbGk6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNvY2lhbF9pY29uIGxpOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQGltcG9ydCB1cmwoXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIik7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw0MDAsNjAwLDcwMCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOjQwMCw3MDAnKTtcclxuYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4qOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG59XHJcbnNlY3Rpb257XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBwYWRkaW5nOjMwcHggMDtcclxufVxyXG5oMXtmbG9hdDpsZWZ0OyB3aWR0aDoxMDAlOyBjb2xvcjojMjMyMzIzOyBtYXJnaW4tYm90dG9tOjMwcHg7IGZvbnQtc2l6ZTogMTRweDt9XHJcbmgxIHNwYW57Zm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmOyBkaXNwbGF5OmJsb2NrOyBmb250LXNpemU6NDVweDsgdGV4dC10cmFuc2Zvcm06bm9uZTsgbWFyZ2luLWJvdHRvbToyMHB4OyBtYXJnaW4tdG9wOjMwcHg7IGZvbnQtd2VpZ2h0OjcwMH1cclxuaDEgYXtjb2xvcjojMTMxMzEzOyBmb250LXdlaWdodDpib2xkO31cclxuXHJcbi8qUHJvZmlsZSBDYXJkIDEqL1xyXG4ucHJvZmlsZS1jYXJkLTEge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDozNjhweDtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTEgLmJhY2tncm91bmQge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuOCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjgpO1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMSAuY2FyZC1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0xIC5wcm9maWxlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTEgaDIge1xyXG4gIG1hcmdpbjogMCAwIDVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZToyNXB4O1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMSBoMiBzbWFsbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTEgaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjowIDVweDtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTEgLmljb24tYmxvY2t7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTEgLmljb24tYmxvY2sgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMSBpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgY29sb3I6IzJFMzQzNDtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5cclxuLypQcm9maWxlIENhcmQgMyovXHJcbi5wcm9maWxlLWNhcmQtMyB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OjM2OHB4O1xyXG4gIGJvcmRlcjpub25lO1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMyAuYmFja2dyb3VuZC1ibG9jayB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0zIC5iYWNrZ3JvdW5kLWJsb2NrIC5iYWNrZ3JvdW5kIHtcclxuICB3aWR0aDo3MCU7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMC41cHgpO1xyXG4gIGZpbHRlcjogYmx1cigwLjVweCk7XHJcbiAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjgpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMi44KTtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTMgLmNhcmQtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gIGNvbG9yOiMyMzIzMjM7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICBiYWNrZ3JvdW5kOiNlZmVmZWY7XHJcbiAgaGVpZ2h0OjUwJTtcclxuICBib3JkZXItcmFkaXVzOjAgMCA1cHggNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMyAuY2FyZC1jb250ZW50OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgd2lkdGg6IDEyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAxMXB4O1xyXG4gICAgYm90dG9tOiA1MXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTNkZWcpO1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMyAucHJvZmlsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgei1pbmRleDo0O1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMyBoMiB7XHJcbiAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOjI1cHg7XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0zIGgyIHNtYWxsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMyBpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMzIzMjM7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOjAgNXB4O1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMyAuaWNvbi1ibG9ja3tcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMyAuaWNvbi1ibG9jayBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0zIGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzIzMjMyMztcclxuICBjb2xvcjojZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRlbTtcclxufVxyXG4uaWZXZWJ7XHJcbiAgICBtYXJnaW46YXV0byAxMDBweCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi54eHp6e1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1ib2R5e1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIH0gICAgXHJcbiAgICAuY2FyZCAuZnRyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZCAuZnRyIGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZCAuZnRyIC5hdXRob3Ige1xyXG4gICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZCAuZnRyIC5zdGF0cyB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjhiYWEyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZCAuZnRyIC5zdGF0cyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAvKiA9PT09PT09PT09PT0gQ2FyZCBUYWJsZSA9PT09PT09PT09PT0gKi9cclxuICAgIC50YWJsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQgLnRhYmxlIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZCAudGFibGUtZGFuZ2VyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNlZjUzNTAsICNkMzJmMmYpO1xyXG4gICAgfSAgICBcclxuICAgIC5jYXJkIFtjbGFzcyo9XCJ0YWJsZS1cIl0ge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIH1cclxuICAgIC5jYXJkIFtjbGFzcyo9XCJ0YWJsZS1cIl0gLmljb24gaSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gICAgfVxyXG4gICAgLmNhcmQgW2NsYXNzKj1cInRhYmxlLVwiXSAuZnRyIC5zdGF0cyxcclxuICAgIC5jYXJkIFtjbGFzcyo9XCJ0YWJsZS1cIl0gLmF1dGhvciBhOmhvdmVyLFxyXG4gICAgLmNhcmQgW2NsYXNzKj1cInRhYmxlLVwiXSAuYXV0aG9yIGE6Zm9jdXMsXHJcbiAgICAuY2FyZCBbY2xhc3MqPVwidGFibGUtXCJdIC5hdXRob3IgYTphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG5cclxuICAgIC8qID09PT09PT09PT09PSBUZXh0IENvbG9yID09PT09PT09PT09PSAqL1xyXG5cclxuICAgIC50ZXh0LWRhbmdlciB7XHJcbiAgICAgICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgICB9XHJcblxyXG4gIGg0LCBoNiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzljMjdiMDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICM5YzI3YjA7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU1ZW07XHJcbiAgICB9ICBcclxuICAgIGg2e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjc1ZW07XHJcbiAgICAgICAgY29sb3I6ICMyOGJhYTI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgICAuY2FyZCBbY2xhc3MqPVwidGFibGUtXCJdIC5jYXJkLWNhcHRpb24gYSxcclxuICAgIC5jYXJkIFtjbGFzcyo9XCJ0YWJsZS1cIl0gLmNhcmQtY2FwdGlvbixcclxuICAgIC5jYXJkIFtjbGFzcyo9XCJ0YWJsZS1cIl0gLmljb24gaSB7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1jYXB0aW9uLFxyXG4gICAgLmNhcmQtY2FwdGlvbiBhIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtY2FwdGlvbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDEuNzVlbTtcclxuICAgIH1cclxuICAgIC51c2VyTm17XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweClcclxue1xyXG4gICAgLm9ubHlMLC5zdGF0c1xyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH0gXHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNDAwLDYwMCw3MDBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTo0MDAsNzAwXCIpO1xuLmltZ1RoIHtcbiAgYm9yZGVyOiA4cHggc29saWQgIzI4QkFBMjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG50ZCB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbi5icmFuZC1jYXJkLWhlYWRlciB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRJbWcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3RvcmVJY29uIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuLmRlYWxzSGVhZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3ODlhYWYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjRlbSAhaW1wb3J0YW50O1xufVxuXG4udmlzaXRCdG4ge1xuICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bl9mbG9hdGluZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4uZGVhbENhcmQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmludGVyZXN0cyB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5yaWdodF9zaWRlYmFyX2luZXIge1xuICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uZGlzcGxheS00IHtcbiAgZm9udC1zaXplOiAzLjJlbTtcbn1cblxuLmhlaWdodDg3IHtcbiAgaGVpZ2h0OiA4OHZoO1xufVxuXG4ubWFuQXZhdGFyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY3VzdG9tSW1nUm91bmQge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDQycHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MnB4ICFpbXBvcnRhbnQ7XG59XG5cbi52aXNpdENvdXBvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMGE4ZDggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLnRlbXBsYXRlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGUwZDA7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZmZmO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuI2NvcHlmcm9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtOTk5OXB4O1xufVxuXG4ucG9wdWxhcl9pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmxvZ0ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jaGFuZ2VGbGV4IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmNoYW5nZUZsZXggYSB7XG4gIGNvbG9yOiAjMjhCQUEyO1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xufVxuXG4uY2hhbmdlRmxleCBhOmhvdmVyIHtcbiAgY29sb3I6ICMyNWNiYjA7XG59XG5cbi5ibG9nVGl0bGUge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiBhdXRvIDEwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJsb2dUZXh0IHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luOiBhdXRvIDE1cHg7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYXV0aG9yIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY29sLXNtLTEyLFxuLmNvbC1zbS02IHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmFwcGx5TWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDE3cHg7XG59XG5cbmIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5iID4gaSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbnVsLmludGVyZXN0c19saXN0IGxpOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc29jaWFsX2ljb24gbGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuKjpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xufVxuXG5zZWN0aW9uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cblxuaDEge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjMjMyMzIzO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmgxIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJMaWJyZSBCYXNrZXJ2aWxsZVwiLCBzZXJpZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgxIGEge1xuICBjb2xvcjogIzEzMTMxMztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qUHJvZmlsZSBDYXJkIDEqL1xuLnByb2ZpbGUtY2FyZC0xIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNjhweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucHJvZmlsZS1jYXJkLTEgLmJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgb3BhY2l0eTogMC45O1xuICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuOCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMi44KTtcbn1cblxuLnByb2ZpbGUtY2FyZC0xIC5jYXJkLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xufVxuXG4ucHJvZmlsZS1jYXJkLTEgLnByb2ZpbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgb3BhY2l0eTogMTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG59XG5cbi5wcm9maWxlLWNhcmQtMSBoMiB7XG4gIG1hcmdpbjogMCAwIDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ucHJvZmlsZS1jYXJkLTEgaDIgc21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucHJvZmlsZS1jYXJkLTEgaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4ucHJvZmlsZS1jYXJkLTEgLmljb24tYmxvY2sge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5wcm9maWxlLWNhcmQtMSAuaWNvbi1ibG9jayBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucHJvZmlsZS1jYXJkLTEgaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMkUzNDM0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qUHJvZmlsZSBDYXJkIDMqL1xuLnByb2ZpbGUtY2FyZC0zIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDM2OHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5wcm9maWxlLWNhcmQtMyAuYmFja2dyb3VuZC1ibG9jayB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2ZpbGUtY2FyZC0zIC5iYWNrZ3JvdW5kLWJsb2NrIC5iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDcwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgb3BhY2l0eTogMC45O1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigwLjVweCk7XG4gIGZpbHRlcjogYmx1cigwLjVweCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjgpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDIuOCk7XG59XG5cbi5wcm9maWxlLWNhcmQtMyAuY2FyZC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgY29sb3I6ICMyMzIzMjM7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBoZWlnaHQ6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbn1cblxuLnByb2ZpbGUtY2FyZC0zIC5jYXJkLWNvbnRlbnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIHdpZHRoOiAxMjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDExcHg7XG4gIGJvdHRvbTogNTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEzZGVnKTtcbn1cblxuLnByb2ZpbGUtY2FyZC0zIC5wcm9maWxlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB6LWluZGV4OiA0O1xufVxuXG4ucHJvZmlsZS1jYXJkLTMgaDIge1xuICBtYXJnaW46IDAgMCA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnByb2ZpbGUtY2FyZC0zIGgyIHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnByb2ZpbGUtY2FyZC0zIGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyMzIzMjM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIzMjMyMztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLnByb2ZpbGUtY2FyZC0zIC5pY29uLWJsb2NrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucHJvZmlsZS1jYXJkLTMgLmljb24tYmxvY2sgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnByb2ZpbGUtY2FyZC0zIGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRlbTtcbn1cblxuLmlmV2ViIHtcbiAgbWFyZ2luOiBhdXRvIDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi54eHp6IHtcbiAgLyogPT09PT09PT09PT09IENhcmQgVGFibGUgPT09PT09PT09PT09ICovXG4gIC8qID09PT09PT09PT09PSBUZXh0IENvbG9yID09PT09PT09PT09PSAqL1xufVxuLnh4enogLmNhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ueHh6eiAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuLnh4enogLmNhcmQgLmZ0ciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ueHh6eiAuY2FyZCAuZnRyIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi54eHp6IC5jYXJkIC5mdHIgLmF1dGhvciB7XG4gIGNvbG9yOiAjODg4O1xufVxuLnh4enogLmNhcmQgLmZ0ciAuc3RhdHMge1xuICBmbG9hdDogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzI4YmFhMjtcbn1cbi54eHp6IC5jYXJkIC5mdHIgLnN0YXRzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnh4enogLnRhYmxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnh4enogLmNhcmQgLnRhYmxlIHtcbiAgcGFkZGluZzogMTVweCAzMHB4O1xufVxuLnh4enogLmNhcmQgLnRhYmxlLWRhbmdlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgI2VmNTM1MCwgI2QzMmYyZik7XG59XG4ueHh6eiAuY2FyZCBbY2xhc3MqPXRhYmxlLV0ge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLnh4enogLmNhcmQgW2NsYXNzKj10YWJsZS1dIC5pY29uIGkge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG4ueHh6eiAuY2FyZCBbY2xhc3MqPXRhYmxlLV0gLmZ0ciAuc3RhdHMsXG4ueHh6eiAuY2FyZCBbY2xhc3MqPXRhYmxlLV0gLmF1dGhvciBhOmhvdmVyLFxuLnh4enogLmNhcmQgW2NsYXNzKj10YWJsZS1dIC5hdXRob3IgYTpmb2N1cyxcbi54eHp6IC5jYXJkIFtjbGFzcyo9dGFibGUtXSAuYXV0aG9yIGE6YWN0aXZlIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4ueHh6eiAudGV4dC1kYW5nZXIge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cbi54eHp6IGg0LCAueHh6eiBoNiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cbi54eHp6IGEge1xuICBjb2xvcjogIzljMjdiMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnh4enogYTpob3ZlciB7XG4gIGNvbG9yOiAjOWMyN2IwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi54eHp6IGg0IHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTVlbTtcbn1cbi54eHp6IGg2IHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxLjc1ZW07XG4gIGNvbG9yOiAjMjhiYWEyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi54eHp6IC5jYXJkIFtjbGFzcyo9dGFibGUtXSAuY2FyZC1jYXB0aW9uIGEsXG4ueHh6eiAuY2FyZCBbY2xhc3MqPXRhYmxlLV0gLmNhcmQtY2FwdGlvbixcbi54eHp6IC5jYXJkIFtjbGFzcyo9dGFibGUtXSAuaWNvbiBpIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4ueHh6eiAuY2FyZC1jYXB0aW9uLFxuLnh4enogLmNhcmQtY2FwdGlvbiBhIHtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi54eHp6IC5jYXJkLWNhcHRpb24ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjc1ZW07XG59XG4ueHh6eiAudXNlck5tIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAub25seUwsIC5zdGF0cyB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(_dataService, modalService, titleService) {
        this._dataService = _dataService;
        this.modalService = modalService;
        this.titleService = titleService;
        this.codeCopied = false;
        this.responseError = "";
        this.slideArray = null;
        this.storeArray = null;
        this.blogArray = null;
        this.dealsArray = null;
        this.hiddenInput = null;
        this.web = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("BuyMeDeal");
        if (window.screen.width < 400)
            this.web = false;
        this._dataService.fetchAPI("/userDisplay/fetchSlides").subscribe(function (res) {
            if (res.data)
                _this.slideArray = res.data;
            else
                _this.errorHandler(res.message);
        });
        this._dataService.fetchOnlyLimit("/userDisplay/fetchTopStores", 7).subscribe(function (res) {
            if (res.data)
                _this.storeArray = res.data;
            else
                _this.errorHandler(res.message);
        });
        this._dataService.fetchOnlyLimit("/userDisplay/fetchTopBlogs", 7).subscribe(function (res) {
            if (res.data)
                _this.blogArray = res.data;
            else
                _this.errorHandler(res.message);
        });
        this._dataService.fetchOnlyLimit("/userDisplay/fetchTopDeals", 7).subscribe(function (res) {
            if (res.data)
                _this.dealsArray = res.data;
            else
                _this.errorHandler(res.message);
        });
    };
    HomeComponent.prototype.openModal = function (template, couponNode) {
        this.editObj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, couponNode);
        window.open(this.editObj.trackingLink, '_blank');
        this.modalRef = this.modalService.show(template);
    };
    HomeComponent.prototype.openModal2 = function (template, couponNode) {
        this.codeCopied = false;
        this.editObj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, couponNode);
        this.modalRef = this.modalService.show(template);
        this.copyToClipBoard();
    };
    HomeComponent.prototype.copyToClipBoard = function () {
        var el = document.createElement('textarea');
        el.value = this.editObj.code;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        this.codeCopied = true;
        document.body.removeChild(el);
        window.open(this.editObj.trackingLink, '_blank');
    };
    HomeComponent.prototype.copyClipboardFunc = function () {
        this.copyToClipBoard();
        this.codeCopied = true;
    };
    HomeComponent.prototype.errorHandler = function (err) { this.responseError = "Can't load " + err + " at the moment"; };
    HomeComponent.prototype.closeError = function () { this.responseError = ""; };
    HomeComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _menu_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu.routing */ "./src/app/menu/menu.routing.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../terms/terms.component */ "./src/app/terms/terms.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _stores_stores_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../stores/stores.component */ "./src/app/stores/stores.component.ts");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../blogs/blogs.component */ "./src/app/blogs/blogs.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../sitemap/sitemap.component */ "./src/app/sitemap/sitemap.component.ts");
/* harmony import */ var _orderby_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../orderby.pipe */ "./src/app/orderby.pipe.ts");
/* harmony import */ var _sortby_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../sortby.pipe */ "./src/app/sortby.pipe.ts");





















var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_menu_routing__WEBPACK_IMPORTED_MODULE_7__["MenuRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_10__["PrivacyComponent"],
                _terms_terms_component__WEBPACK_IMPORTED_MODULE_11__["TermsComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesComponent"],
                _stores_stores_component__WEBPACK_IMPORTED_MODULE_13__["StoresComponent"],
                _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_14__["BlogsComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_15__["CategoryComponent"],
                _store_store_component__WEBPACK_IMPORTED_MODULE_16__["StoreComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
                _sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_18__["SitemapComponent"],
                _orderby_pipe__WEBPACK_IMPORTED_MODULE_19__["OrderbyPipe"],
                _sortby_pipe__WEBPACK_IMPORTED_MODULE_20__["SortbyPipe"]
            ]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.routing.ts":
/*!**************************************!*\
  !*** ./src/app/menu/menu.routing.ts ***!
  \**************************************/
/*! exports provided: MenuRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRoutes", function() { return MenuRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terms/terms.component */ "./src/app/terms/terms.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _stores_stores_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stores/stores.component */ "./src/app/stores/stores.component.ts");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blogs/blogs.component */ "./src/app/blogs/blogs.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sitemap/sitemap.component */ "./src/app/sitemap/sitemap.component.ts");











var MenuRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'privacy', component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_2__["PrivacyComponent"] },
    { path: 'termsandconditions', component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_3__["TermsComponent"] },
    { path: 'categories', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"] },
    { path: 'stores', component: _stores_stores_component__WEBPACK_IMPORTED_MODULE_5__["StoresComponent"] },
    { path: 'blogs', component: _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_6__["BlogsComponent"] },
    { path: 'category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"] },
    { path: 'category/:id', component: _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"] },
    { path: 'store/:id', component: _store_store_component__WEBPACK_IMPORTED_MODULE_8__["StoreComponent"] },
    { path: 'blog/:id', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"] },
    { path: 'sitemap', component: _sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_10__["SitemapComponent"] },
    {
        path: '', redirectTo: '/home', pathMatch: 'full',
    }
];


/***/ }),

/***/ "./src/app/orderby.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/orderby.pipe.ts ***!
  \*********************************/
/*! exports provided: OrderbyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderbyPipe", function() { return OrderbyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderbyPipe = /** @class */ (function () {
    function OrderbyPipe() {
    }
    OrderbyPipe.prototype.transform = function (value, args) {
        return value.filter(function (x) { return x.value.name.toLowerCase()
            .startsWith(args.toLowerCase()); });
    };
    OrderbyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderby'
        })
    ], OrderbyPipe);
    return OrderbyPipe;
}());



/***/ }),

/***/ "./src/app/privacy/privacy.component.scss":
/*!************************************************!*\
  !*** ./src/app/privacy/privacy.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/privacy/privacy.component.ts":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent(titleService) {
        this.titleService = titleService;
        this.mobile = false;
    }
    PrivacyComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Privacy");
        if (window.screen.width < 400)
            this.mobile = true;
    };
    PrivacyComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
    ]; };
    PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! raw-loader!./privacy.component.html */ "./node_modules/raw-loader/index.js!./src/app/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.scss */ "./src/app/privacy/privacy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/sitemap/sitemap.component.scss":
/*!************************************************!*\
  !*** ./src/app/sitemap/sitemap.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".minHeight {\n  min-height: 0vh;\n  max-height: 40vh;\n  overflow-y: auto;\n}\n\n.col-3 {\n  margin: 10px 0;\n}\n\n.textSize {\n  font-size: 1.5em;\n}\n\np:hover {\n  cursor: pointer;\n}\n\n.display-4 {\n  text-decoration: underline;\n}\n\n.icon-map {\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZW1hcC9EOlxcRGFuaXNoIHdvcmtcXEJ1eU1lRGVhbFxcQnV5TWVEZWFsLUZST05UL3NyY1xcYXBwXFxzaXRlbWFwXFxzaXRlbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaXRlbWFwL3NpdGVtYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLDBCQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvc2l0ZW1hcC9zaXRlbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pbkhlaWdodHtcclxuICAgIG1pbi1oZWlnaHQ6IDB2aDtcclxuICAgIG1heC1oZWlnaHQ6IDQwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5jb2wtM3tcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbi50ZXh0U2l6ZXtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxucDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZGlzcGxheS00e1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmljb24tbWFwe1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufSIsIi5taW5IZWlnaHQge1xuICBtaW4taGVpZ2h0OiAwdmg7XG4gIG1heC1oZWlnaHQ6IDQwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jb2wtMyB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4udGV4dFNpemUge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG5wOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlzcGxheS00IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5pY29uLW1hcCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/sitemap/sitemap.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sitemap/sitemap.component.ts ***!
  \**********************************************/
/*! exports provided: SitemapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitemapComponent", function() { return SitemapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var SitemapComponent = /** @class */ (function () {
    function SitemapComponent(_dataService) {
        this._dataService = _dataService;
        this.responseError = "";
        this.queArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    }
    SitemapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.fetchAPI("/userDisplay/storesForSiteMap").subscribe(function (res) {
            if (res.data)
                _this.storesArray = res.data;
            else
                _this.errorHandler(res.message);
        });
        this._dataService.fetchAPI("/userDisplay/blogsForSiteMap").subscribe(function (res) {
            if (res.data)
                _this.blogsArray = res.data;
            else
                _this.errorHandler(res.message);
        });
    };
    SitemapComponent.prototype.checkEmpty = function (q) {
        for (var _i = 0, _a = this.storesArray; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.name.toLowerCase().startsWith(q))
                return false;
        }
        return true;
    };
    SitemapComponent.prototype.errorHandler = function (err) { this.responseError = err; };
    SitemapComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    SitemapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sitemap',
            template: __webpack_require__(/*! raw-loader!./sitemap.component.html */ "./node_modules/raw-loader/index.js!./src/app/sitemap/sitemap.component.html"),
            styles: [__webpack_require__(/*! ./sitemap.component.scss */ "./src/app/sitemap/sitemap.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SitemapComponent);
    return SitemapComponent;
}());



/***/ }),

/***/ "./src/app/sortby.pipe.ts":
/*!********************************!*\
  !*** ./src/app/sortby.pipe.ts ***!
  \********************************/
/*! exports provided: SortbyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortbyPipe", function() { return SortbyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortbyPipe = /** @class */ (function () {
    function SortbyPipe() {
    }
    SortbyPipe.prototype.transform = function (value, args) {
        return value.sort(function (a, b) {
            return (a.value.sortNo - b.value.sortNo);
        });
    };
    SortbyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sortby'
        })
    ], SortbyPipe);
    return SortbyPipe;
}());



/***/ }),

/***/ "./src/app/store/store.component.scss":
/*!********************************************!*\
  !*** ./src/app/store/store.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".couponHead {\n  font-size: 1.17em !important;\n  text-transform: capitalize;\n}\n\n.notifications_area {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.notifications {\n  max-width: 100%;\n}\n\n.roundImg {\n  margin-top: 35px;\n}\n\n.text-muted {\n  margin-top: 20px;\n  font-size: 1.35em;\n}\n\n.brand-card:hover {\n  cursor: pointer;\n}\n\n.modal-header {\n  background-color: #20a8d8 !important;\n  color: #fff !important;\n}\n\n.template2 {\n  width: 100%;\n  height: 50px;\n  background-color: #40e0d0;\n  border: 2px dashed #fff;\n  font-size: 1.5em;\n  color: #fff;\n  padding-top: 9px;\n  margin: 5px auto;\n}\n\n.xyz {\n  font-size: 1.15em;\n}\n\n.jumbotron > a {\n  font-size: 1.3em !important;\n  color: #28baa2;\n}\n\n.jumbotron > a:hover {\n  text-decoration: underline;\n}\n\n.onlyThis {\n  @import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\n  @import url(\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700\");\n  @import url(\"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700\");\n  /*Profile Card 1*/\n}\n\n.onlyThis body {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.onlyThis *:hover {\n  transition: all 1s ease;\n}\n\n.onlyThis section {\n  float: left;\n  width: 100%;\n  background: #fff;\n  /* fallback for old browsers */\n  padding: 30px 0;\n}\n\n.onlyThis h1 {\n  float: left;\n  width: 100%;\n  color: #232323;\n  margin-bottom: 30px;\n  font-size: 14px;\n}\n\n.onlyThis h1 span {\n  font-family: \"Libre Baskerville\", serif;\n  display: block;\n  font-size: 45px;\n  text-transform: none;\n  margin-bottom: 20px;\n  margin-top: 30px;\n  font-weight: 700;\n}\n\n.onlyThis h1 a {\n  color: #131313;\n  font-weight: bold;\n}\n\n.onlyThis .profile-card-1 {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  position: relative;\n  float: left;\n  overflow: hidden;\n  width: 100%;\n  color: #ffffff;\n  text-align: center;\n  height: 200px;\n  border: none;\n}\n\n.onlyThis .profile-card-1 .background {\n  width: 100%;\n  vertical-align: top;\n  opacity: 0.9;\n  -webkit-filter: blur(5px);\n  filter: blur(5px);\n  -webkit-transform: scale(1.8);\n  transform: scale(2.8);\n}\n\n.onlyThis .profile-card-1 .card-content {\n  width: 100%;\n  padding: 15px 25px;\n  position: absolute;\n  left: 0;\n  top: 65%;\n}\n\n.onlyThis .profile-card-1 .profile {\n  border-radius: 50%;\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  max-width: 100px;\n  opacity: 1;\n  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);\n  border: 2px solid white;\n  -webkit-transform: translate(-50%, 0%);\n  transform: translate(-50%, 0%);\n}\n\n.onlyThis .profile-card-1 h2 {\n  margin: 0 0 5px;\n  font-weight: 600;\n  font-size: 25px;\n}\n\n.onlyThis .profile-card-1 h2 small {\n  display: block;\n  font-size: 15px;\n  margin-top: 10px;\n}\n\n.onlyThis .profile-card-1 i {\n  display: inline-block;\n  font-size: 16px;\n  color: #ffffff;\n  text-align: center;\n  border: 1px solid #fff;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 50%;\n  margin: 0 5px;\n}\n\n.onlyThis .profile-card-1 .icon-block {\n  float: left;\n  width: 100%;\n  margin-top: 15px;\n}\n\n.onlyThis .profile-card-1 .icon-block a {\n  text-decoration: none;\n}\n\n.onlyThis .profile-card-1 i:hover {\n  background-color: #fff;\n  color: #2E3434;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvRDpcXERhbmlzaCB3b3JrXFxCdXlNZURlYWxcXEJ1eU1lRGVhbC1GUk9OVC9zcmNcXGFwcFxcc3RvcmVcXHN0b3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yZS9zdG9yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7QUNNSjs7QURKQTtFQUNJLG9DQUFBO0VBQ0Esc0JBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNRSjs7QUROQTtFQUNJLGlCQUFBO0FDU0o7O0FEUEE7RUFDSSwyQkFBQTtFQUNBLGNBQUE7QUNVSjs7QURSQTtFQUNJLDBCQUFBO0FDV0o7O0FETkE7RUFDWSwwRkFBQTtFQUNKLGdGQUFBO0VBQ0EsZ0ZBQUE7RUFrQlIsaUJBQUE7QUNSQTs7QURUQTtFQUNJLG9DQUFBO0FDV0o7O0FEVEE7RUFFSSx1QkFBQTtBQ1dKOztBRFRBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUFtQiw4QkFBQTtFQUNuQixlQUFBO0FDWUo7O0FEVkE7RUFBRyxXQUFBO0VBQVksV0FBQTtFQUFZLGNBQUE7RUFBZSxtQkFBQTtFQUFvQixlQUFBO0FDaUI5RDs7QURoQkE7RUFBUSx1Q0FBQTtFQUF5QyxjQUFBO0VBQWUsZUFBQTtFQUFnQixvQkFBQTtFQUFxQixtQkFBQTtFQUFvQixnQkFBQTtFQUFpQixnQkFBQTtBQ3lCMUk7O0FEeEJBO0VBQUssY0FBQTtFQUFlLGlCQUFBO0FDNEJwQjs7QUR6QkE7RUFDRSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDMkJGOztBRHpCQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0MsNkJBQUE7RUFDRCxxQkFBQTtBQzJCRjs7QUR6QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDMkJGOztBRHpCQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0FDMkJGOztBRHpCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUMyQkY7O0FEekJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzJCRjs7QUR6QkE7RUFDRSxxQkFBQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUMyQko7O0FEekJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQzJCSjs7QUR6QkE7RUFDSSxxQkFBQTtBQzJCSjs7QUR6QkE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQzJCRiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL3N0b3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXBvbkhlYWQge1xyXG4gICAgZm9udC1zaXplOiAxLjE3ZW0gIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5ub3RpZmljYXRpb25zX2FyZWEge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4ubm90aWZpY2F0aW9ucyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJvdW5kSW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuLnRleHQtbXV0ZWQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4zNWVtO1xyXG59XHJcbi5icmFuZC1jYXJkOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGE4ZDggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRlbXBsYXRlMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MGUwZDA7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctdG9wOiA5cHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG59XHJcbi54eXoge1xyXG4gICAgZm9udC1zaXplOiAxLjE1ZW07XHJcbn1cclxuLmp1bWJvdHJvbiA+IGEge1xyXG4gICAgZm9udC1zaXplOiAxLjNlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMyOGJhYTI7XHJcbn1cclxuLmp1bWJvdHJvbiA+IGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLm9ubHlUaGlze1xyXG4gICAgQGltcG9ydCB1cmwoXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIik7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw0MDAsNjAwLDcwMCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOjQwMCw3MDAnKTtcclxuYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4qOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG59XHJcbnNlY3Rpb257XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBwYWRkaW5nOjMwcHggMDtcclxufVxyXG5oMXtmbG9hdDpsZWZ0OyB3aWR0aDoxMDAlOyBjb2xvcjojMjMyMzIzOyBtYXJnaW4tYm90dG9tOjMwcHg7IGZvbnQtc2l6ZTogMTRweDt9XHJcbmgxIHNwYW57Zm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmOyBkaXNwbGF5OmJsb2NrOyBmb250LXNpemU6NDVweDsgdGV4dC10cmFuc2Zvcm06bm9uZTsgbWFyZ2luLWJvdHRvbToyMHB4OyBtYXJnaW4tdG9wOjMwcHg7IGZvbnQtd2VpZ2h0OjcwMH1cclxuaDEgYXtjb2xvcjojMTMxMzEzOyBmb250LXdlaWdodDpib2xkO31cclxuXHJcbi8qUHJvZmlsZSBDYXJkIDEqL1xyXG4ucHJvZmlsZS1jYXJkLTEge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDoyMDBweDtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTEgLmJhY2tncm91bmQge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuOCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjgpO1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMSAuY2FyZC1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiA2NSU7XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0xIC5wcm9maWxlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTEgaDIge1xyXG4gIG1hcmdpbjogMCAwIDVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZToyNXB4O1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMSBoMiBzbWFsbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTEgaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjowIDVweDtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTEgLmljb24tYmxvY2t7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTEgLmljb24tYmxvY2sgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMSBpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgY29sb3I6IzJFMzQzNDtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG59IiwiLmNvdXBvbkhlYWQge1xuICBmb250LXNpemU6IDEuMTdlbSAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm5vdGlmaWNhdGlvbnNfYXJlYSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLm5vdGlmaWNhdGlvbnMge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5yb3VuZEltZyB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbi50ZXh0LW11dGVkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxLjM1ZW07XG59XG5cbi5icmFuZC1jYXJkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwYThkOCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4udGVtcGxhdGUyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwZTBkMDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNmZmY7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4ueHl6IHtcbiAgZm9udC1zaXplOiAxLjE1ZW07XG59XG5cbi5qdW1ib3Ryb24gPiBhIHtcbiAgZm9udC1zaXplOiAxLjNlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzI4YmFhMjtcbn1cblxuLmp1bWJvdHJvbiA+IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm9ubHlUaGlzIHtcbiAgQGltcG9ydCB1cmwoXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIik7XG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNDAwLDYwMCw3MDBcIik7XG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOjQwMCw3MDBcIik7XG4gIC8qUHJvZmlsZSBDYXJkIDEqL1xufVxuLm9ubHlUaGlzIGJvZHkge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbi5vbmx5VGhpcyAqOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG59XG4ub25seVRoaXMgc2VjdGlvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG4ub25seVRoaXMgaDEge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjMjMyMzIzO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ub25seVRoaXMgaDEgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkxpYnJlIEJhc2tlcnZpbGxlXCIsIHNlcmlmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA0NXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5vbmx5VGhpcyBoMSBhIHtcbiAgY29sb3I6ICMxMzEzMTM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm9ubHlUaGlzIC5wcm9maWxlLWNhcmQtMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5vbmx5VGhpcyAucHJvZmlsZS1jYXJkLTEgLmJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgb3BhY2l0eTogMC45O1xuICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuOCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMi44KTtcbn1cbi5vbmx5VGhpcyAucHJvZmlsZS1jYXJkLTEgLmNhcmQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA2NSU7XG59XG4ub25seVRoaXMgLnByb2ZpbGUtY2FyZC0xIC5wcm9maWxlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xufVxuLm9ubHlUaGlzIC5wcm9maWxlLWNhcmQtMSBoMiB7XG4gIG1hcmdpbjogMCAwIDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLm9ubHlUaGlzIC5wcm9maWxlLWNhcmQtMSBoMiBzbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ub25seVRoaXMgLnByb2ZpbGUtY2FyZC0xIGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbi5vbmx5VGhpcyAucHJvZmlsZS1jYXJkLTEgLmljb24tYmxvY2sge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ub25seVRoaXMgLnByb2ZpbGUtY2FyZC0xIC5pY29uLWJsb2NrIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ub25seVRoaXMgLnByb2ZpbGUtY2FyZC0xIGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzJFMzQzNDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var StoreComponent = /** @class */ (function () {
    function StoreComponent(route, _dataService, modalService, titleService) {
        this.route = route;
        this._dataService = _dataService;
        this.modalService = modalService;
        this.titleService = titleService;
        this.responseError = "";
        this.switch = false;
        this.couponsArray = null;
        this.storeURL = "";
        this.storeURLToShow = "";
        this.codeCopied = false;
        this.storeArray = null;
        this.isBusy = false;
        this.mobile = false;
        this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.currentDate = Date.now();
    }
    StoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.screen.width < 400)
            this.mobile = true;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.storeURLToShow = paramMap.get('id');
            _this.loadStoreData(_this.storeURLToShow);
        });
    };
    StoreComponent.prototype.openModal = function (template, couponNode) {
        this.editObj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, couponNode);
        window.open(this.editObj.trackingLink, '_blank');
        this.modalRef = this.modalService.show(template);
    };
    StoreComponent.prototype.openModal2 = function (template, couponNode) {
        this.codeCopied = false;
        this.editObj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, couponNode);
        this.modalRef = this.modalService.show(template);
        this.copyToClipBoard();
    };
    StoreComponent.prototype.closeModal = function () { this.modalRef.hide(); };
    StoreComponent.prototype.copyToClipBoard = function () {
        var el = document.createElement('textarea');
        el.value = this.editObj.code;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        window.open(this.editObj.trackingLink, '_blank');
    };
    StoreComponent.prototype.copyClipboardFunc = function () {
        this.copyToClipBoard();
        this.codeCopied = true;
    };
    StoreComponent.prototype.loadCoupons = function (id) {
        var _this = this;
        if (this.isBusy)
            return;
        this.isBusy = true;
        this._dataService.fetchWithQuery("/userDisplay/fetchCoupons", id).subscribe(function (res) {
            if (res.data) {
                _this.couponsArray = res.data;
                for (var i = 0; i < res.data.length; i++) {
                    var orginalDate = _this.couponsArray[i]['expDate'];
                    var singleObj = _this.couponsArray[i];
                    var fff = new Date(orginalDate).getTime();
                    singleObj['expDate'] = fff;
                    _this.couponsArray[i] = singleObj;
                }
                _this.isBusy = false;
            }
            else
                _this.errorHandler(res.message);
        });
    };
    StoreComponent.prototype.loadStoreData = function (id) {
        var _this = this;
        this._dataService.fetchWithQuery("/userDisplay/singleStoreData", id).subscribe(function (res) {
            if (res.data) {
                _this.storeURL = res.data['0']['_id'];
                _this.loadCoupons(_this.storeURL);
                _this.storePic = res.data['0']['img'];
                _this.storeDetail = res.data['0']['shortDes'];
                _this.longDes = res.data['0']['longDes'];
                _this.storeName = res.data['0']['name'] + ' ' + res.data['0']['heading'];
                _this.storeId = res.data['0']['storeURL'];
                var tempDateVar = Number(res.data['0']['CreatedAt']);
                _this.storeDate = _this.monthNames[new Date(tempDateVar).getMonth()] + " " + new Date(tempDateVar).getFullYear();
                _this.titleService.setTitle(_this.storeName);
                _this.secondTabData(res.data['0']['categoryRef'][0]);
            }
            else
                _this.errorHandler(res.message);
        });
    };
    StoreComponent.prototype.secondTabData = function (id) {
        var _this = this;
        this._dataService.fetchWithQuery("/userDisplay/fetchStores", id).subscribe(function (res) {
            if (res.data)
                _this.storeArray = res.data;
            else {
                _this.errorHandler(res.message);
            }
        });
    };
    StoreComponent.prototype.loadAnotherStore = function (id) {
        this.switch = false;
        this.couponsArray = null;
        this.storeDetail = null;
        this.storeArray = null;
        this.loadCoupons(id);
        this.loadStoreData(id);
        this.secondTabData(id);
    };
    StoreComponent.prototype.errorHandler = function (err) {
        this.isBusy = false;
        this.responseError = err;
        window.scrollTo(0, 0);
    };
    StoreComponent.prototype.closeError = function () { this.responseError = ""; };
    StoreComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
    ]; };
    StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! raw-loader!./store.component.html */ "./node_modules/raw-loader/index.js!./src/app/store/store.component.html"),
            styles: [__webpack_require__(/*! ./store.component.scss */ "./src/app/store/store.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/app/stores/stores.component.scss":
/*!**********************************************!*\
  !*** ./src/app/stores/stores.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron > a {\n  font-size: 1.3em !important;\n  color: #28BAA2;\n}\n\n.jumbotron > a:hover {\n  text-decoration: underline;\n}\n\n.onlyThis {\n  @import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\n  @import url(\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700\");\n  @import url(\"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700\");\n  /*Profile Card 1*/\n  /*Profile Card 3*/\n}\n\n.onlyThis body {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.onlyThis *:hover {\n  transition: all 1s ease;\n}\n\n.onlyThis section {\n  float: left;\n  width: 100%;\n  background: #fff;\n  /* fallback for old browsers */\n  padding: 30px 0;\n}\n\n.onlyThis h1 {\n  float: left;\n  width: 100%;\n  color: #232323;\n  margin-bottom: 30px;\n  font-size: 14px;\n}\n\n.onlyThis h1 span {\n  font-family: \"Libre Baskerville\", serif;\n  display: block;\n  font-size: 45px;\n  text-transform: none;\n  margin-bottom: 20px;\n  margin-top: 30px;\n  font-weight: 700;\n}\n\n.onlyThis h1 a {\n  color: #131313;\n  font-weight: bold;\n}\n\n.onlyThis .profile-card-1 {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  position: relative;\n  float: left;\n  overflow: hidden;\n  width: 100%;\n  color: #ffffff;\n  text-align: center;\n  height: 368px;\n  border: none;\n}\n\n.onlyThis .profile-card-1 .background {\n  width: 100%;\n  vertical-align: top;\n  opacity: 0.9;\n  -webkit-filter: blur(5px);\n  filter: blur(5px);\n  -webkit-transform: scale(1.8);\n  transform: scale(2.8);\n}\n\n.onlyThis .profile-card-1 .card-content {\n  width: 100%;\n  padding: 15px 25px;\n  position: absolute;\n  left: 0;\n  top: 50%;\n}\n\n.onlyThis .profile-card-1 .profile {\n  border-radius: 50%;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  max-width: 100px;\n  opacity: 1;\n  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);\n  border: 2px solid white;\n  -webkit-transform: translate(-50%, 0%);\n  transform: translate(-50%, 0%);\n}\n\n.onlyThis .profile-card-1 h2 {\n  margin: 0 0 5px;\n  font-weight: 600;\n  font-size: 25px;\n}\n\n.onlyThis .profile-card-1 h2 small {\n  display: block;\n  font-size: 15px;\n  margin-top: 10px;\n}\n\n.onlyThis .profile-card-1 i {\n  display: inline-block;\n  font-size: 16px;\n  color: #ffffff;\n  text-align: center;\n  border: 1px solid #fff;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 50%;\n  margin: 0 5px;\n}\n\n.onlyThis .profile-card-1 .icon-block {\n  float: left;\n  width: 100%;\n  margin-top: 15px;\n}\n\n.onlyThis .profile-card-1 .icon-block a {\n  text-decoration: none;\n}\n\n.onlyThis .profile-card-1 i:hover {\n  background-color: #fff;\n  color: #2E3434;\n  text-decoration: none;\n}\n\n.onlyThis .profile-card-3 {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  position: relative;\n  float: left;\n  overflow: hidden;\n  width: 100%;\n  text-align: center;\n  height: 368px;\n  border: none;\n}\n\n.onlyThis .profile-card-3 .background-block {\n  float: left;\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n}\n\n.onlyThis .profile-card-3 .background-block .background {\n  width: 70%;\n  vertical-align: top;\n  opacity: 0.9;\n  -webkit-filter: blur(0.5px);\n  filter: blur(0.5px);\n  -webkit-transform: scale(1.8);\n  transform: scale(2.8);\n}\n\n.onlyThis .profile-card-3 .card-content {\n  width: 100%;\n  padding: 15px 25px;\n  color: #232323;\n  float: left;\n  background: #efefef;\n  height: 50%;\n  border-radius: 0 0 5px 5px;\n  position: relative;\n  z-index: 3;\n}\n\n.onlyThis .profile-card-3 .card-content::before {\n  content: \"\";\n  background: #efefef;\n  width: 120%;\n  height: 100%;\n  left: 11px;\n  bottom: 51px;\n  position: absolute;\n  z-index: -1;\n  -webkit-transform: rotate(-13deg);\n          transform: rotate(-13deg);\n}\n\n.onlyThis .profile-card-3 .profile {\n  border-radius: 50%;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  max-width: 100px;\n  opacity: 1;\n  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);\n  border: 2px solid white;\n  -webkit-transform: translate(-50%, 0%);\n  transform: translate(-50%, 0%);\n  z-index: 4;\n}\n\n.onlyThis .profile-card-3 h2 {\n  margin: 0 0 5px;\n  font-weight: 600;\n  font-size: 25px;\n}\n\n.onlyThis .profile-card-3 h2 small {\n  display: block;\n  font-size: 15px;\n  margin-top: 10px;\n}\n\n.onlyThis .profile-card-3 i {\n  display: inline-block;\n  font-size: 16px;\n  color: #232323;\n  text-align: center;\n  border: 1px solid #232323;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 50%;\n  margin: 0 5px;\n}\n\n.onlyThis .profile-card-3 .icon-block {\n  float: left;\n  width: 100%;\n  margin-top: 15px;\n}\n\n.onlyThis .profile-card-3 .icon-block a {\n  text-decoration: none;\n}\n\n.onlyThis .profile-card-3 i:hover {\n  background-color: #232323;\n  color: #fff;\n  text-decoration: none;\n}\n\n.onlyThis .card {\n  border-radius: 2em;\n}\n\n.onlyThis .card:hover {\n  cursor: pointer;\n}\n\n.ifWeb {\n  margin: auto 120px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmVzL0Q6XFxEYW5pc2ggd29ya1xcQnV5TWVEZWFsXFxCdXlNZURlYWwtRlJPTlQvc3JjXFxhcHBcXHN0b3Jlc1xcc3RvcmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yZXMvc3RvcmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDQTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtBQ3ZDSjs7QUR5Q0E7RUFDSSwwQkFBQTtBQ3RDSjs7QUQrREE7RUFDWSwwRkFBQTtFQUNKLGdGQUFBO0VBQ0EsZ0ZBQUE7RUFrQlIsaUJBQUE7RUE0RUEsaUJBQUE7QUN4SkE7O0FEMkRBO0VBQ0ksb0NBQUE7QUN6REo7O0FEMkRBO0VBRUksdUJBQUE7QUN6REo7O0FEMkRBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUFtQiw4QkFBQTtFQUNuQixlQUFBO0FDeERKOztBRDBEQTtFQUFHLFdBQUE7RUFBWSxXQUFBO0VBQVksY0FBQTtFQUFlLG1CQUFBO0VBQW9CLGVBQUE7QUNuRDlEOztBRG9EQTtFQUFRLHVDQUFBO0VBQXlDLGNBQUE7RUFBZSxlQUFBO0VBQWdCLG9CQUFBO0VBQXFCLG1CQUFBO0VBQW9CLGdCQUFBO0VBQWlCLGdCQUFBO0FDM0MxSTs7QUQ0Q0E7RUFBSyxjQUFBO0VBQWUsaUJBQUE7QUN4Q3BCOztBRDJDQTtFQUNFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUN6Q0Y7O0FEMkNBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQyw2QkFBQTtFQUNELHFCQUFBO0FDekNGOztBRDJDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUN6Q0Y7O0FEMkNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7QUN6Q0Y7O0FEMkNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3pDRjs7QUQyQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDekNGOztBRDJDQTtFQUNFLHFCQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ3pDSjs7QUQyQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDekNKOztBRDJDQTtFQUNJLHFCQUFBO0FDekNKOztBRDJDQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDekNGOztBRDZDQTtFQUNFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQzNDRjs7QUQ2Q0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQzNDSjs7QUQ2Q0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNDLDZCQUFBO0VBQ0QscUJBQUE7QUMzQ0Y7O0FENkNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQzNDRjs7QUQ2Q0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQzNDSjs7QUQ2Q0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSwyQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUMzQ0Y7O0FENkNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQzNDRjs7QUQ2Q0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDM0NGOztBRDZDQTtFQUNFLHFCQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQzNDSjs7QUQ2Q0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDM0NKOztBRDZDQTtFQUNJLHFCQUFBO0FDM0NKOztBRDZDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDM0NGOztBRDZDQTtFQUNJLGtCQUFBO0FDM0NKOztBRDZDQTtFQUNJLGVBQUE7QUMzQ0o7O0FEOENBO0VBQ0ksNkJBQUE7QUMzQ0oiLCJmaWxlIjoic3JjL2FwcC9zdG9yZXMvc3RvcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnJvdW5kSW1nIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vIH1cclxuLy8gLm5vUGFkZGluZyB7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuLy8gICAgIGhlaWdodDogMzB2aCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIC5jYXJkLWltZy10b3Age1xyXG4vLyAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4vLyB9XHJcbi8vIGg2IHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4xNWVtICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gLnJlYWRfbGF0dGVyIHtcclxuLy8gICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMDtcclxuLy8gfVxyXG4vLyAubWlkZGxlX3NlY3Rpb24ge1xyXG4vLyAgICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbi8vICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gLnNlY3Rpb25fcm93IHtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAwO1xyXG4vLyAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gLm1pbl9wYWdlcyB7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4vLyAgICAgLm1pbl9wYWdlcyB7XHJcbi8vICAgICAgICAgbWF4LXdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuLy8gICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBsaTpob3ZlciB7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuLmp1bWJvdHJvbiA+IGEge1xyXG4gICAgZm9udC1zaXplOiAxLjNlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IzI4QkFBMlxyXG59XHJcbi5qdW1ib3Ryb24gPiBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLy8gLnJlc3BvbnNpdmUtaW1ne1xyXG4vLyAgICAgbWF4LXdpZHRoOiA0MCUgIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbjoxMHB4XHJcbi8vIH1cclxuLy8gLmJyYW5kLWNhcmQtaGVhZGVye1xyXG4vLyAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gLnRleHQtdmFsdWV7XHJcbi8vICAgICBmb250LXNpemU6MS40ZW07XHJcbi8vIH1cclxuLy8gLm1haW5EaXY6aG92ZXJ7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICBvdXRsaW5lOjBcclxuLy8gfVxyXG4vLyAuc3RvcmVEZXRhaWx7XHJcbi8vICAgICBmb250LXNpemU6MS4yZW07XHJcbi8vICAgICBtYXJnaW46YXV0byAxMHB4XHJcbi8vIH1cclxuLy8gLmJyYW5kLWNhcmQtaGVhZGVye1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4QkFBMiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4ub25seVRoaXN7XHJcbiAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw2MDAsNzAwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGlicmUrQmFza2VydmlsbGU6NDAwLDcwMCcpO1xyXG5ib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbio6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbn1cclxuc2VjdGlvbntcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIHBhZGRpbmc6MzBweCAwO1xyXG59XHJcbmgxe2Zsb2F0OmxlZnQ7IHdpZHRoOjEwMCU7IGNvbG9yOiMyMzIzMjM7IG1hcmdpbi1ib3R0b206MzBweDsgZm9udC1zaXplOiAxNHB4O31cclxuaDEgc3Bhbntmb250LWZhbWlseTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgc2VyaWY7IGRpc3BsYXk6YmxvY2s7IGZvbnQtc2l6ZTo0NXB4OyB0ZXh0LXRyYW5zZm9ybTpub25lOyBtYXJnaW4tYm90dG9tOjIwcHg7IG1hcmdpbi10b3A6MzBweDsgZm9udC13ZWlnaHQ6NzAwfVxyXG5oMSBhe2NvbG9yOiMxMzEzMTM7IGZvbnQtd2VpZ2h0OmJvbGQ7fVxyXG5cclxuLypQcm9maWxlIENhcmQgMSovXHJcbi5wcm9maWxlLWNhcmQtMSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OjM2OHB4O1xyXG4gIGJvcmRlcjpub25lO1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMSAuYmFja2dyb3VuZCB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xyXG4gIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS44KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDIuOCk7XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0xIC5jYXJkLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDUwJTtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTEgLnByb2ZpbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMSBoMiB7XHJcbiAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOjI1cHg7XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0xIGgyIHNtYWxsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMSBpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOjAgNXB4O1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMSAuaWNvbi1ibG9ja3tcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMSAuaWNvbi1ibG9jayBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0xIGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICBjb2xvcjojMkUzNDM0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcblxyXG4vKlByb2ZpbGUgQ2FyZCAzKi9cclxuLnByb2ZpbGUtY2FyZC0zIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6MzY4cHg7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0zIC5iYWNrZ3JvdW5kLWJsb2NrIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTMgLmJhY2tncm91bmQtYmxvY2sgLmJhY2tncm91bmQge1xyXG4gIHdpZHRoOjcwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICAtd2Via2l0LWZpbHRlcjogYmx1cigwLjVweCk7XHJcbiAgZmlsdGVyOiBibHVyKDAuNXB4KTtcclxuICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuOCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjgpO1xyXG59XHJcbi5wcm9maWxlLWNhcmQtMyAuY2FyZC1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgY29sb3I6IzIzMjMyMztcclxuICBmbG9hdDpsZWZ0O1xyXG4gIGJhY2tncm91bmQ6I2VmZWZlZjtcclxuICBoZWlnaHQ6NTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6MCAwIDVweCA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0zIC5jYXJkLWNvbnRlbnQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICB3aWR0aDogMTIwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDExcHg7XHJcbiAgICBib3R0b206IDUxcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xM2RlZyk7XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0zIC5wcm9maWxlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICB6LWluZGV4OjQ7XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0zIGgyIHtcclxuICBtYXJnaW46IDAgMCA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6MjVweDtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTMgaDIgc21hbGwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0zIGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMjMyMzIzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIzMjMyMztcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46MCA1cHg7XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0zIC5pY29uLWJsb2Nre1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbn1cclxuLnByb2ZpbGUtY2FyZC0zIC5pY29uLWJsb2NrIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG4ucHJvZmlsZS1jYXJkLTMgaTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMjMyMzIzO1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbn1cclxuLmNhcmQ6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxufVxyXG4uaWZXZWJ7XHJcbiAgICBtYXJnaW46YXV0byAxMjBweCAhaW1wb3J0YW50XHJcbn0iLCIuanVtYm90cm9uID4gYSB7XG4gIGZvbnQtc2l6ZTogMS4zZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICMyOEJBQTI7XG59XG5cbi5qdW1ib3Ryb24gPiBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5vbmx5VGhpcyB7XG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIpO1xuICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw2MDAsNzAwXCIpO1xuICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTo0MDAsNzAwXCIpO1xuICAvKlByb2ZpbGUgQ2FyZCAxKi9cbiAgLypQcm9maWxlIENhcmQgMyovXG59XG4ub25seVRoaXMgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuLm9ubHlUaGlzICo6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbn1cbi5vbmx5VGhpcyBzZWN0aW9uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cbi5vbmx5VGhpcyBoMSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMyMzIzMjM7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5vbmx5VGhpcyBoMSBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiTGlicmUgQmFza2VydmlsbGVcIiwgc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm9ubHlUaGlzIGgxIGEge1xuICBjb2xvcjogIzEzMTMxMztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ub25seVRoaXMgLnByb2ZpbGUtY2FyZC0xIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNjhweDtcbiAgYm9yZGVyOiBub25lO1xufVxuLm9ubHlUaGlzIC5wcm9maWxlLWNhcmQtMSAuYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBvcGFjaXR5OiAwLjk7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS44KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjgpO1xufVxuLm9ubHlUaGlzIC5wcm9maWxlLWNhcmQtMSAuY2FyZC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbn1cbi5vbmx5VGhpcyAucHJvZmlsZS1jYXJkLTEgLnByb2ZpbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgb3BhY2l0eTogMTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG59XG4ub25seVRoaXMgLnByb2ZpbGUtY2FyZC0xIGgyIHtcbiAgbWFyZ2luOiAwIDAgNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ub25seVRoaXMgLnByb2ZpbGUtY2FyZC0xIGgyIHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5vbmx5VGhpcyAucHJvZmlsZS1jYXJkLTEgaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgNXB4O1xufVxuLm9ubHlUaGlzIC5wcm9maWxlLWNhcmQtMSAuaWNvbi1ibG9jayB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5vbmx5VGhpcyAucHJvZmlsZS1jYXJkLTEgLmljb24tYmxvY2sgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5vbmx5VGhpcyAucHJvZmlsZS1jYXJkLTEgaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMkUzNDM0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ub25seVRoaXMgLnByb2ZpbGUtY2FyZC0zIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDM2OHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4ub25seVRoaXMgLnByb2ZpbGUtY2FyZC0zIC5iYWNrZ3JvdW5kLWJsb2NrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm9ubHlUaGlzIC5wcm9maWxlLWNhcmQtMyAuYmFja2dyb3VuZC1ibG9jayAuYmFja2dyb3VuZCB7XG4gIHdpZHRoOiA3MCU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG9wYWNpdHk6IDAuOTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMC41cHgpO1xuICBmaWx0ZXI6IGJsdXIoMC41cHgpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS44KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjgpO1xufVxuLm9ubHlUaGlzIC5wcm9maWxlLWNhcmQtMyAuY2FyZC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgY29sb3I6ICMyMzIzMjM7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBoZWlnaHQ6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbn1cbi5vbmx5VGhpcyAucHJvZmlsZS1jYXJkLTMgLmNhcmQtY29udGVudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgd2lkdGg6IDEyMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMTFweDtcbiAgYm90dG9tOiA1MXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTNkZWcpO1xufVxuLm9ubHlUaGlzIC5wcm9maWxlLWNhcmQtMyAucHJvZmlsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBvcGFjaXR5OiAxO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgei1pbmRleDogNDtcbn1cbi5vbmx5VGhpcyAucHJvZmlsZS1jYXJkLTMgaDIge1xuICBtYXJnaW46IDAgMCA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5vbmx5VGhpcyAucHJvZmlsZS1jYXJkLTMgaDIgc21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm9ubHlUaGlzIC5wcm9maWxlLWNhcmQtMyBpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjMyMzIzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMzIzMjM7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4ub25seVRoaXMgLnByb2ZpbGUtY2FyZC0zIC5pY29uLWJsb2NrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm9ubHlUaGlzIC5wcm9maWxlLWNhcmQtMyAuaWNvbi1ibG9jayBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm9ubHlUaGlzIC5wcm9maWxlLWNhcmQtMyBpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5vbmx5VGhpcyAuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcbn1cbi5vbmx5VGhpcyAuY2FyZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlmV2ViIHtcbiAgbWFyZ2luOiBhdXRvIDEyMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/stores/stores.component.ts":
/*!********************************************!*\
  !*** ./src/app/stores/stores.component.ts ***!
  \********************************************/
/*! exports provided: StoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresComponent", function() { return StoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var StoresComponent = /** @class */ (function () {
    function StoresComponent(_dataService, titleService) {
        this._dataService = _dataService;
        this.titleService = titleService;
        this.storesLimit = 20;
        this.responseError = "";
        this.storeArray = null;
        this.isLoading = true;
        this.mobile = false;
        this.scrolledNum = 0;
    }
    StoresComponent.prototype.ngOnInit = function () {
        if (window.screen.width < 450)
            this.mobile = true;
        this.loadStoreCallBack();
        this.titleService.setTitle("Stores Collection");
    };
    ;
    StoresComponent.prototype.onScroll = function () {
        if (this.scrolledNum > window.scrollY) {
            this.scrolledNum = window.scrollY;
            return;
        }
        this.scrolledNum = window.scrollY;
        var addNum = 450;
        if (this.mobile)
            addNum = 980;
        if ((window.innerHeight + window.scrollY + addNum) >= document.body.offsetHeight) {
            this.loadMoreStores();
        }
    };
    StoresComponent.prototype.loadStoreCallBack = function (abc) {
        var _this = this;
        this.isLoading = true;
        this._dataService.fetchOnlyLimit("/userDisplay/fetchRandomStores", this.storesLimit).subscribe(function (res) {
            if (res.data) {
                if (!abc) {
                    _this.storeArray = res.data;
                    _this.storeArray = Array.from(new Set(_this.storeArray));
                    _this.storesLimit += 20;
                }
                setTimeout(function () {
                    this.isLoading = false;
                    if (abc) {
                        this.storeArray = res.data;
                        this.storeArray = Array.from(new Set(this.storeArray));
                        this.storesLimit += 20;
                    }
                }.bind(_this), 1000);
            }
            else
                _this.errorHandler(res.message);
        });
    };
    StoresComponent.prototype.loadMoreStores = function () {
        if (this.isLoading)
            return;
        this.loadStoreCallBack("abc");
    };
    ;
    StoresComponent.prototype.errorHandler = function (err) {
        setTimeout(function () {
            this.isLoading = false;
        }.bind(this), 1000);
        this.responseError = err;
        window.scrollTo(0, 0);
    };
    StoresComponent.prototype.closeError = function () { this.responseError = ""; };
    StoresComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], StoresComponent.prototype, "onScroll", null);
    StoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stores',
            template: __webpack_require__(/*! raw-loader!./stores.component.html */ "./node_modules/raw-loader/index.js!./src/app/stores/stores.component.html"),
            styles: [__webpack_require__(/*! ./stores.component.scss */ "./src/app/stores/stores.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], StoresComponent);
    return StoresComponent;
}());



/***/ }),

/***/ "./src/app/terms/terms.component.scss":
/*!********************************************!*\
  !*** ./src/app/terms/terms.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: #28BAA2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXMvRDpcXERhbmlzaCB3b3JrXFxCdXlNZURlYWxcXEJ1eU1lRGVhbC1GUk9OVC9zcmNcXGFwcFxcdGVybXNcXHRlcm1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZXJtcy90ZXJtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiMyOEJBQTJcclxufSIsImEge1xuICBjb2xvcjogIzI4QkFBMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/terms/terms.component.ts":
/*!******************************************!*\
  !*** ./src/app/terms/terms.component.ts ***!
  \******************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var TermsComponent = /** @class */ (function () {
    function TermsComponent(titleService) {
        this.titleService = titleService;
        this.mobile = false;
    }
    TermsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Terms & Conditions");
        if (window.screen.width < 400)
            this.mobile = true;
    };
    TermsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
    ]; };
    TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! raw-loader!./terms.component.html */ "./node_modules/raw-loader/index.js!./src/app/terms/terms.component.html"),
            styles: [__webpack_require__(/*! ./terms.component.scss */ "./src/app/terms/terms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-menu-menu-module.js.map