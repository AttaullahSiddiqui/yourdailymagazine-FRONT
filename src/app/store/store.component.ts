import { Component, OnInit, TemplateRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
})
export class StoreComponent implements OnInit {
  modalRef: BsModalRef;
  responseError = "";
  switch = 1;
  couponsArray: {} = null;
  storePic;
  storeThumb: null;
  storeDetail;
  longDes = null;
  storeName: string = null;
  storeName2: string = null;
  storeURL: string = "";
  storeURLToShow: string = "";
  storeId;
  storeDate;
  codeCopied = false;
  editObj;
  storeArray: [] = [];
  productsArray: [] = [];
  banners = [];
  postImages = [];
  isBusy: boolean = false;
  isFetchingStores: boolean = false;
  isFetchingProducts: boolean = false;
  mobile: boolean = false;
  backUpForStores: null;
  monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  currentDate = Date.now();
  constructor(
    private route: ActivatedRoute,
    private _dataService: DataService,
    private modalService: BsModalService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    if (window.screen.width < 450) this.mobile = true;
    this.route.paramMap.subscribe((paramMap) => {
      this.storeURLToShow = paramMap.get("id");
      var tabQuer = paramMap.get("tab");
      if (tabQuer) this.switch = 3;
      if (this.switch == 3) this.thirdTabData();
      this.loadStoreData(this.storeURLToShow);
    });
  }
  openModal(template: TemplateRef<any>, couponNode) {
    if (this.modalRef) this.modalRef.hide();
    this.editObj = { ...couponNode };
    window.open(this.editObj.trackingLink, "_blank");
    this.modalRef = this.modalService.show(template);
  }
  openModal2(template: TemplateRef<any>, couponNode) {
    if (this.modalRef) this.modalRef.hide();
    this.codeCopied = false;
    this.editObj = { ...couponNode };
    this.modalRef = this.modalService.show(template);
    this.copyToClipBoard();
  }
  closeModal() {
    this.modalRef.hide();
  }
  copyToClipBoard() {
    const el = document.createElement("textarea");
    el.value = this.editObj.code;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    window.open(this.editObj.trackingLink, "_blank");
    // const a = document.createElement("a")
    // a.href = this.editObj.trackingLink
    // a.target = "_blank"
    // a.rel = "noopener"
    // a.click();
  }
  copyClipboardFunc() {
    this.copyToClipBoard();
    this.codeCopied = true;
  }
  loadCoupons(id) {
    if (this.isBusy) return;
    this.isBusy = true;
    this._dataService
      .fetchWithQuery("/userDisplay/fetchCoupons", id)
      .subscribe((res) => {
        if (res.data) {
          this.couponsArray = res.data;
          for (var i = 0; i < res.data.length; i++) {
            var orginalDate = this.couponsArray[i]["expDate"];
            var singleObj: Object = this.couponsArray[i];
            var fff = new Date(orginalDate).getTime();
            singleObj["expDate"] = fff;
            this.couponsArray[i] = singleObj;
          }
          this.isBusy = false;
        } else this.errorHandler(res.message);
      });
  }
  loadStoreData(id) {
    this._dataService
      .fetchWithQuery("/userDisplay/singleStoreData", id)
      .subscribe((res) => {
        if (res.data) {
          this.storeURL = res.data["0"]["_id"];
          this.loadCoupons(this.storeURL);
          this.loadBanners(this.storeURL);
          this.loadPostImages(this.storeURL);
          this.storePic = res.data["0"]["img"];
          this.storeThumb = null;
          if (res.data["0"]["thumbImg"])
            this.storeThumb = res.data["0"]["thumbImg"];
          this.storeDetail = res.data["0"]["shortDes"];
          this.longDes = res.data["0"]["longDes"];
          this.storeName =
            res.data["0"]["name"] + " " + res.data["0"]["heading"];
          this.storeName2 = res.data["0"]["name"];
          this.storeId = res.data["0"]["storeURL"];
          var tempDateVar = Number(res.data["0"]["CreatedAt"]);
          this.storeDate =
            this.monthNames[new Date(tempDateVar).getMonth()] +
            " " +
            new Date(tempDateVar).getFullYear();
          this.titleService.setTitle(res.data["0"]["metaTitle"]);
          this.metaService.updateTag({
            name: "description",
            content: res.data["0"]["metaDes"],
          });
          this.metaService.updateTag({
            property: "og:description",
            content: res.data["0"]["metaDes"],
          });
          this.backUpForStores = res.data["0"]["categoryRef"][0];
          // this.secondTabData(res.data['0']['categoryRef'][0])
        } else this.errorHandler(res.message);
      });
  }
  fetchStores() {
    this.switch = 2;
    if (this.isFetchingStores || this.storeArray.length) return;
    this.isFetchingStores = true;
    this.secondTabData(this.backUpForStores);
  }
  secondTabData(id) {
    this._dataService
      .fetchWithQuery("/userDisplay/fetchStores", id)
      .subscribe((res) => {
        if (res.data) this.storeArray = res.data;
        else this.errorHandler(res.message);
        this.isFetchingStores = false;
      });
  }
  fetchProducts() {
    this.switch = 3;
    if (this.isFetchingProducts || this.productsArray.length) return;
    this.isFetchingProducts = true;
    this.thirdTabData();
  }
  thirdTabData() {
    this._dataService
      .fetchWithQuery("/userDisplay/fetchStoreProducts", this.storeURLToShow)
      .subscribe((res) => {
        if (res.data) this.productsArray = res.data;
        else this.errorHandler(res.message);
        this.isFetchingProducts = false;
      });
  }
  loadAnotherStore(id) {
    this.switch = 1;
    this.couponsArray = null;
    this.storeDetail = null;
    this.storeArray = null;
    this.loadCoupons(id);
    this.loadStoreData(id);
    this.secondTabData(id);
    this.storeURLToShow = id;
    this.thirdTabData();
  }
  loadBanners(id: string) {
    this._dataService
      .fetchWithQuery("/userDisplay/fetchBanners", id)
      .subscribe((res) => {
        if (res.data) {
          this.banners = res.data;
        } else this.errorHandler(res.message);
      });
  }
  loadPostImages(id: string) {
    this._dataService
      .fetchWithQuery("/userDisplay/fetchPostImages", id)
      .subscribe((res) => {
        if (res.data) {
          this.postImages = res.data;
        } else this.errorHandler(res.message);
      });
  }
  fetchSettings() {
    this._dataService
      .fetchAPI("/userDisplay/fetchSettingsData")
      .subscribe((res) => {
        if (res.data) {
          this.titleService.setTitle(
            res.data["titleStore"].start +
              this.storeName2 +
              res.data["titleStore"].end
          );
          this.metaService.updateTag({
            name: "description",
            content: res.data["metaStore"],
          });
          this.metaService.updateTag({
            property: "og:description",
            content: res.data["metaStore"],
          });
        }
      });
  }
  goToLinkFeatured(link, productId, key) {
    this.productsArray[key]["clicks"]++;
    window.open(link, "_blank");
    this._dataService
      .postAPI("/userDisplay/increaseProductClicks", { id: productId })
      .subscribe((res) => {});
  }
  errorHandler(err) {
    this.isBusy = false;
    this.responseError = err;
    window.scrollTo(0, 0);
  }
  closeError() {
    this.responseError = "";
  }
}
