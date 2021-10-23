import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CategoryComponent implements OnInit {
  responseError = "";
  categoryArr = null;
  selectCat = null;
  selectedCat: any = null;
  selectedCatURL: string = "";
  storeArr = null;
  jug = 0;
  isLoading = false;
  mobile: boolean = false;
  myPlaceHolder1 = "Search by Category";
  constructor(
    private _dataService: DataService,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    if (window.screen.width < 450) this.mobile = true;
    var _self = this;
    this.route.paramMap.subscribe((paramMap) => {
      var abc = paramMap.get("id");
      this._dataService
        .fetchAPI("/userDisplay/fetchCategories")
        .subscribe((res) => {
          if (res.data) {
            this.categoryArr = res.data;
            this.secondaryFunc(abc);
          } else this.errorHandler("Unable to load Data");
        });
    });
  }
  secondaryFunc(abc: string) {
    var _self = this;
    var xyz = Object.values(this.categoryArr);
    xyz.forEach(function (val) {
      if (val["categoryURL"] == abc) {
        _self.selectedCat = val["name"];
        _self.loadStores(val, val["categoryURL"]);
      }
    });
  }
  loadStores(catNode, slctdURL) {
    if (this.isLoading) return;
    this.isLoading = true;
    this.storeArr = null;
    this.titleService.setTitle(catNode["metaTitle"]);
    this.metaService.updateTag({
      name: "description",
      content: catNode["metaDescription"],
    });
    this.metaService.updateTag({
      property: "og:description",
      content: catNode["metaDescription"],
    });
    this._dataService
      .fetchWithQuery("/userDisplay/fetchStores", catNode._id)
      .subscribe((res) => {
        if (res.data) {
          this.storeArr = res.data;
          this.isLoading = false;
          this.selectedCatURL = slctdURL;
        } else this.errorHandler(res.message);
      });
  }
  onSearch1($event) {
    this.myPlaceHolder1 = $event.term == "" ? "Search by Category" : "";
  }
  errorHandler(err) {
    this.isLoading = false;
    this.responseError = err;
    window.scrollTo(0, 0);
  }
  closeError() {
    this.responseError = "";
  }
}
