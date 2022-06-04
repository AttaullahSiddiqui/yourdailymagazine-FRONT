import { Component, AfterViewInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { ToastrService } from "ngx-toastr";
declare var $: any;

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements AfterViewInit {
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  switch = false;
  mouseLoc = false;
  noResult = false;
  storeArray = null;
  blogArray = null;
  searchBox = null;
  contactEmail: string;
  isBusy: Boolean = false;
  mobile: Boolean = false;
  navStoresArr = [];
  productQuery: String = "5e7212be3f58470017428b28";
  dropDownSelected: String = null;
  selectedCatURL: String = null;
  // eventTitle = "";
  eventBarText = "";
  showMobSearch = false;

  constructor(
    private _dataService: DataService,
    private router: Router,
    private toastr: ToastrService,
    @Inject(DOCUMENT) _document?: any
  ) {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized =
        _document.body.classList.contains("sidebar-minimized");
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ["class"],
    });
    if (window.screen.width < 450) this.mobile = true;
    else this.mobile = false;
    this._dataService
      .fetchAPI("/userDisplay/fetchEventName")
      .subscribe((res) => {
        if (res.data) {
          this.eventBarText = res.data["eventBarText"];
          // this.eventTitle = res.data['eventName'];
        }
      });
  }
  ngOnDestroy(): void {
    this.changes.disconnect();
  }
  ngAfterViewInit() {
    this._dataService
      .fetchOnlyLimit("/userDisplay/fetchTopBlogs", 8)
      .subscribe((res) => {
        if (res.data) this.blogArray = res.data;
      });
    this.fetchStores("5e7212be3f58470017428b28", "Apparel & Clothing");
  }
  searchFunc(queri) {
    if (!queri) return;
    this.noResult = false;
    this.storeArray = null;
    this._dataService
      .fetchAPIWithLimit("/userDisplay/searchQuery", 10, queri, "")
      .subscribe((res) => {
        if (res.data) {
          this.storeArray = res.data;
        } else this.noResult = true;
      });
  }
  addEmailToDB(emailId) {
    if (this.isBusy) return;
    this.isBusy = true;
    this._dataService
      .postAPI("/userDisplay/addEmailToDB", { emailId: emailId })
      .subscribe((res) => {
        if (res.data) {
          this.contactEmail = "";
          this.isBusy = false;
          this.toastr.success("We received your Email", "Success");
        } else {
          this.isBusy = false;
          this.toastr.error(res.message, "Error");
        }
      });
  }
  focusOutFunc() {
    setTimeout(() => {
      this.switch = false;
    }, 300);
  }
  fetchStores(catId: String, selectedCat: String) {
    this._dataService
      .fetchWithQuery("/userDisplay/fetchStoresDropDown", catId)
      .subscribe((res) => {
        if (res.data) {
          this.navStoresArr = [];
          this.navStoresArr = res.data;
        } else {
          this.navStoresArr = [];
          this.errorHandler(res.message);
        }
      });
    this.productQuery = catId;
    this.dropDownSelected = selectedCat;
    this.selectedCatURL = selectedCat.replace(/ /g, "-").toLowerCase();
  }
  openDropDown() {
    setTimeout(() => {
      $("#dropDownModal").modal("show");
    }, 100);
  }
  closeDropDown() {
    // document.getElementById('closebtn').click();
    $("#dropDownModal").modal("hide");
  }
  openNav(e) {
    e.preventDefault();
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav(e) {
    e.preventDefault();
    document.getElementById("mySidenav").style.width = "0";
  }
  openAndroidLink() {
    window.open(
      "https://play.google.com/store/apps/details?id=io.publishers.digmycart",
      "_blank"
    );
  }
  isLinkActive(url): boolean {
    const queryParamsIndex = this.router.url.indexOf("?");
    const baseUrl =
      queryParamsIndex === -1
        ? this.router.url
        : this.router.url.slice(0, queryParamsIndex);
    return baseUrl === url;
  }
  openIosLink() {
    this.toastr.success("Coming soon...", "IOS App");
  }
  errorHandler(err) {
    this.toastr.error(err, "Error");
  }
}
